import {
  type Env,
  type UsuarioSesion,
  aCentavos,
  aPesos,
  cookieBorrada,
  cookieSesion,
  corsHeaders,
  crearSesion,
  error,
  hashPassword,
  json,
  nuevoId,
  slugify,
  usuarioActual,
  verificarPassword,
} from './lib';

/**
 * API de LaFranciaGO.
 *
 * Un solo Worker con enrutado a mano: son unas treinta rutas y meter un router
 * agrega peso al bundle sin resolver nada que un switch no resuelva.
 *
 * Todo lo que escribe pide sesión. Lo que lee catálogo es público: el vecino
 * tiene que poder mirar comercios antes de crearse una cuenta.
 */

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request, env);

    /* Preflight: el navegador pregunta antes de mandar POST con credenciales. */
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    const ruta = url.pathname.replace(/\/+$/, '') || '/';

    try {
      return await enrutar(request, env, ruta, url, cors);
    } catch (fallo) {
      /* El detalle va al log de Cloudflare, no a la respuesta: un stack trace
         le dice a un atacante qué versión y qué estructura tiene la app. */
      console.error('Error no controlado', fallo);

      return error('Error interno', 500, cors);
    }
  },
};

async function enrutar(
  request: Request,
  env: Env,
  ruta: string,
  url: URL,
  cors: Record<string, string>,
): Promise<Response> {
  const metodo = request.method;

  // ── Salud ──

  if (ruta === '/' || ruta === '/salud') {
    return json({ ok: true, servicio: 'lafranciago-api' }, {}, cors);
  }

  // ── Autenticación ──

  if (ruta === '/auth/registro' && metodo === 'POST') {
    const body = await leerJson<{
      email?: string;
      password?: string;
      nombre?: string;
      telefono?: string;
    }>(request);

    const email = (body.email ?? '').trim().toLowerCase();
    const password = body.password ?? '';
    const nombre = (body.nombre ?? '').trim();

    if (!email.includes('@') || password.length < 8 || !nombre) {
      return error('Revisá el email, el nombre y que la contraseña tenga 8 caracteres.', 400, cors);
    }

    const existe = await env.DB.prepare('SELECT id FROM usuarios WHERE email = ?')
      .bind(email)
      .first();

    if (existe) {
      /* Mismo mensaje que un login fallido: decir "ese email ya existe"
         permite averiguar quién está registrado en la app. */
      return error('No pudimos crear la cuenta con esos datos.', 409, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      'INSERT INTO usuarios (id, email, password_hash, nombre, telefono) VALUES (?, ?, ?, ?, ?)',
    )
      .bind(id, email, await hashPassword(password), nombre, body.telefono ?? null)
      .run();

    const { token, expira } = await crearSesion(env, id);

    return json({ id, email, nombre, rol: 'cliente' }, { status: 201 }, {
      ...cors,
      'Set-Cookie': cookieSesion(token, expira),
    });
  }

  if (ruta === '/auth/login' && metodo === 'POST') {
    const body = await leerJson<{ email?: string; password?: string }>(request);
    const email = (body.email ?? '').trim().toLowerCase();

    const usuario = await env.DB.prepare(
      'SELECT id, email, nombre, rol, foto_url, password_hash FROM usuarios WHERE email = ?',
    )
      .bind(email)
      .first<UsuarioSesion & { password_hash: string }>();

    /* Se verifica siempre, incluso sin usuario, para que la respuesta tarde
       lo mismo exista o no: el tiempo delata qué emails están registrados. */
    const hash = usuario?.password_hash ?? 'pbkdf2$210000$AAAA$AAAA';
    const valida = await verificarPassword(body.password ?? '', hash);

    if (!usuario || !valida) {
      return error('Email o contraseña incorrectos.', 401, cors);
    }

    const { token, expira } = await crearSesion(env, usuario.id);

    return json(
      {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        rol: usuario.rol,
        foto_url: usuario.foto_url,
      },
      {},
      { ...cors, 'Set-Cookie': cookieSesion(token, expira) },
    );
  }

  if (ruta === '/auth/logout' && metodo === 'POST') {
    const cookie = request.headers.get('Cookie') ?? '';
    const token = /(?:^|;\s*)sesion=([^;]+)/.exec(cookie)?.[1];

    if (token) {
      await env.DB.prepare('DELETE FROM sesiones WHERE token = ?').bind(token).run();
    }

    return json({ ok: true }, {}, { ...cors, 'Set-Cookie': cookieBorrada() });
  }

  if (ruta === '/auth/yo' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    return usuario ? json(usuario, {}, cors) : error('Sin sesión', 401, cors);
  }

  // ── Comercios ──

  if (ruta === '/comercios' && metodo === 'GET') {
    const rubro = url.searchParams.get('rubro');
    const busqueda = url.searchParams.get('q');

    let sql =
      "SELECT id, nombre, rubro_id, rubro_nombre, direccion, lat, lon, horario, zona, descripcion, logo_url, premium, minimo_centavos FROM comercios WHERE estado = 'aprobado'";
    const params: unknown[] = [];

    if (rubro) {
      sql += ' AND rubro_id = ?';
      params.push(rubro);
    }

    if (busqueda) {
      sql += ' AND (nombre LIKE ? OR rubro_nombre LIKE ?)';
      params.push(`%${busqueda}%`, `%${busqueda}%`);
    }

    sql += ' ORDER BY premium DESC, nombre ASC LIMIT 100';

    const { results } = await env.DB.prepare(sql).bind(...params).all();

    return json({ comercios: results.map(comercioSalida) }, {}, cors);
  }

  const comercioDetalle = /^\/comercios\/([\w-]+)$/.exec(ruta);

  if (comercioDetalle && metodo === 'GET') {
    const comercio = await env.DB.prepare(
      "SELECT * FROM comercios WHERE id = ? AND estado = 'aprobado'",
    )
      .bind(comercioDetalle[1])
      .first();

    if (!comercio) {
      return error('Comercio no encontrado', 404, cors);
    }

    const { results: categorias } = await env.DB.prepare(
      'SELECT id, nombre, descripcion, unidad_venta FROM categorias WHERE comercio_id = ? ORDER BY orden',
    )
      .bind(comercioDetalle[1])
      .all();

    const { results: productos } = await env.DB.prepare(
      'SELECT id, categoria_id, nombre, descripcion, precio_centavos, unidad_venta, fotos, video_url, stock FROM productos WHERE comercio_id = ? AND activo = 1',
    )
      .bind(comercioDetalle[1])
      .all();

    return json(
      {
        comercio: comercioSalida(comercio),
        categorias,
        productos: productos.map(productoSalida),
      },
      {},
      cors,
    );
  }

  if (ruta === '/comercios' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<Record<string, string>>(request);
    const nombre = (body.nombre ?? '').trim();

    if (!nombre || !body.rubroId || !body.direccion) {
      return error('Faltan el nombre, el rubro o la dirección.', 400, cors);
    }

    /* Se numera si el id ya existe, para no pisar otro comercio. */
    const base = slugify(nombre) || 'comercio';
    let id = base;
    let intento = 2;

    while (await env.DB.prepare('SELECT id FROM comercios WHERE id = ?').bind(id).first()) {
      id = `${base}-${intento}`;
      intento += 1;
    }

    await env.DB.prepare(
      `INSERT INTO comercios
        (id, usuario_id, nombre, razon_social, cuit, rubro_id, rubro_nombre, direccion,
         lat, lon, telefono, email, horario, zona, descripcion, redes, medios_pago, estado)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pendiente')`,
    )
      .bind(
        id,
        usuario.id,
        nombre,
        body.razonSocial ?? null,
        body.cuit ?? null,
        body.rubroId,
        body.rubroNombre ?? body.rubroId,
        body.direccion,
        body.lat ? Number(body.lat) : null,
        body.lon ? Number(body.lon) : null,
        body.telefono ?? null,
        body.email ?? usuario.email,
        body.horario ?? null,
        body.zona ?? null,
        body.descripcion ?? null,
        body.redes ?? null,
        body.mediosPago ?? null,
      )
      .run();

    return json({ id, nombre, estado: 'pendiente' }, { status: 201 }, cors);
  }

  // ── Productos ──

  if (ruta === '/productos' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<Record<string, unknown>>(request);
    const comercioId = String(body.comercioId ?? '');

    /* Sólo el dueño puede cargar productos en su comercio. */
    const propio = await env.DB.prepare(
      'SELECT id FROM comercios WHERE id = ? AND usuario_id = ?',
    )
      .bind(comercioId, usuario.id)
      .first();

    if (!propio) {
      return error('Ese comercio no es tuyo', 403, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      `INSERT INTO productos
        (id, comercio_id, categoria_id, nombre, descripcion, precio_centavos, unidad_venta, fotos, video_url, stock)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        comercioId,
        body.categoriaId ?? null,
        String(body.nombre ?? ''),
        body.descripcion ?? null,
        aCentavos(Number(body.precio ?? 0)),
        String(body.unidadVenta ?? 'unidad'),
        JSON.stringify(body.fotos ?? []),
        body.videoUrl ?? null,
        body.stock ?? null,
      )
      .run();

    return json({ id }, { status: 201 }, cors);
  }

  // ── Pedidos ──

  if (ruta === '/pedidos' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT p.*, c.nombre AS comercio_nombre, c.rubro_id
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
        WHERE p.usuario_id = ?
        ORDER BY p.creado_en DESC
        LIMIT 50`,
    )
      .bind(usuario.id)
      .all();

    return json({ pedidos: results.map(pedidoSalida) }, {}, cors);
  }

  if (ruta === '/pedidos' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<{
      comercioId?: string;
      direccionTexto?: string;
      direccionId?: string;
      metodoPago?: string;
      items?: Array<{ productoId: string; escalon: number }>;
    }>(request);

    const items = body.items ?? [];

    if (!body.comercioId || items.length === 0) {
      return error('El pedido necesita un comercio y al menos un producto.', 400, cors);
    }

    /* Los precios se leen de la base, no del cliente: si vinieran del
       navegador, cualquiera podría pedir con el precio que quisiera. */
    const ids = items.map((item) => item.productoId);
    const marcadores = ids.map(() => '?').join(',');
    const { results: productos } = await env.DB.prepare(
      `SELECT id, nombre, precio_centavos, unidad_venta FROM productos
        WHERE id IN (${marcadores}) AND comercio_id = ? AND activo = 1`,
    )
      .bind(...ids, body.comercioId)
      .all<{ id: string; nombre: string; precio_centavos: number; unidad_venta: string }>();

    if (productos.length !== ids.length) {
      return error('Algún producto ya no está disponible.', 409, cors);
    }

    const porId = new Map(productos.map((producto) => [producto.id, producto]));
    let subtotal = 0;

    const lineas = items.map((item) => {
      const producto = porId.get(item.productoId)!;
      const factor = factorEscalon(producto.unidad_venta, item.escalon);
      const linea = Math.round(producto.precio_centavos * factor);

      subtotal += linea;

      return { producto, escalon: item.escalon, linea };
    });

    const envio = subtotal >= 1_500_000 ? 0 : 120_000;
    const pedidoId = nuevoId();
    const codigo = `#${Date.now().toString().slice(-6)}`;

    /* Cabecera y líneas en un batch: si falla una línea no queda un pedido
       a medias en la base. */
    await env.DB.batch([
      env.DB.prepare(
        `INSERT INTO pedidos
          (id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
           subtotal_centavos, envio_centavos, total_centavos, metodo_pago)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      ).bind(
        pedidoId,
        codigo,
        usuario.id,
        body.comercioId,
        body.direccionId ?? null,
        body.direccionTexto ?? 'A confirmar',
        subtotal,
        envio,
        subtotal + envio,
        body.metodoPago ?? null,
      ),
      ...lineas.map((linea) =>
        env.DB.prepare(
          `INSERT INTO pedido_items
            (id, pedido_id, producto_id, nombre, precio_centavos, unidad_venta, escalon, subtotal_centavos)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        ).bind(
          nuevoId(),
          pedidoId,
          linea.producto.id,
          linea.producto.nombre,
          linea.producto.precio_centavos,
          linea.producto.unidad_venta,
          linea.escalon,
          linea.linea,
        ),
      ),
    ]);

    return json(
      { id: pedidoId, codigo, total: aPesos(subtotal + envio) },
      { status: 201 },
      cors,
    );
  }

  // ── Direcciones ──

  if (ruta === '/direcciones' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      'SELECT id, etiqueta, direccion, lat, lon, es_principal FROM direcciones WHERE usuario_id = ?',
    )
      .bind(usuario.id)
      .all();

    return json({ direcciones: results }, {}, cors);
  }

  if (ruta === '/direcciones' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<Record<string, unknown>>(request);
    const id = nuevoId();

    await env.DB.prepare(
      'INSERT INTO direcciones (id, usuario_id, etiqueta, direccion, lat, lon) VALUES (?, ?, ?, ?, ?, ?)',
    )
      .bind(
        id,
        usuario.id,
        String(body.etiqueta ?? 'Casa'),
        String(body.direccion ?? ''),
        body.lat ?? null,
        body.lon ?? null,
      )
      .run();

    return json({ id }, { status: 201 }, cors);
  }

  // ── Favoritos ──

  if (ruta === '/favoritos' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT c.id, c.nombre, c.rubro_id, c.rubro_nombre, c.logo_url
         FROM favoritos f
         JOIN comercios c ON c.id = f.comercio_id
        WHERE f.usuario_id = ?`,
    )
      .bind(usuario.id)
      .all();

    return json({ favoritos: results }, {}, cors);
  }

  const favorito = /^\/favoritos\/([\w-]+)$/.exec(ruta);

  if (favorito && (metodo === 'POST' || metodo === 'DELETE')) {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    if (metodo === 'POST') {
      await env.DB.prepare(
        'INSERT OR IGNORE INTO favoritos (usuario_id, comercio_id) VALUES (?, ?)',
      )
        .bind(usuario.id, favorito[1])
        .run();
    } else {
      await env.DB.prepare('DELETE FROM favoritos WHERE usuario_id = ? AND comercio_id = ?')
        .bind(usuario.id, favorito[1])
        .run();
    }

    return json({ ok: true }, {}, cors);
  }

  // ── Media ──

  if (ruta === '/media' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const formulario = await request.formData();
    const campo = formulario.get('archivo');

    /* En Workers el valor puede ser texto o archivo: se comprueba por forma
       en vez de por instanceof, que no está tipado para File en este runtime. */
    if (!campo || typeof campo === 'string') {
      return error('Falta el archivo', 400, cors);
    }

    const archivo = campo as unknown as {
      type: string;
      size: number;
      stream: () => ReadableStream;
    };

    /* El tipo lo declara el navegador y se puede falsear, así que se acota a
       lo que la app sabe mostrar y se limita el peso. */
    const permitidos = ['image/webp', 'image/jpeg', 'image/png', 'video/mp4', 'video/webm'];

    if (!permitidos.includes(archivo.type)) {
      return error('Formato no permitido', 415, cors);
    }

    if (archivo.size > 20 * 1024 * 1024) {
      return error('El archivo supera los 20 MB', 413, cors);
    }

    const extension = archivo.type.split('/')[1];
    const clave = `${usuario.id}/${nuevoId()}.${extension}`;

    await env.MEDIA.put(clave, archivo.stream(), {
      httpMetadata: { contentType: archivo.type },
    });

    return json({ clave, url: `/media/${clave}` }, { status: 201 }, cors);
  }

  const media = /^\/media\/(.+)$/.exec(ruta);

  if (media && metodo === 'GET') {
    const objeto = await env.MEDIA.get(media[1]);

    if (!objeto) {
      return error('No encontrado', 404, cors);
    }

    return new Response(objeto.body, {
      headers: {
        'Content-Type': objeto.httpMetadata?.contentType ?? 'application/octet-stream',
        /* Inmutable: la clave incluye un uuid, así que el archivo nunca cambia. */
        'Cache-Control': 'public, max-age=31536000, immutable',
        ...cors,
      },
    });
  }

  return error('Ruta no encontrada', 404, cors);
}

/* ── Ayudas ── */

async function leerJson<T>(request: Request): Promise<T> {
  try {
    return (await request.json()) as T;
  } catch {
    return {} as T;
  }
}

/** Mismos escalones que usa el frontend, para que los totales coincidan. */
function factorEscalon(unidad: string, escalon: number) {
  const escalas: Record<string, number[]> = {
    unidad: Array.from({ length: 20 }, (_, i) => i + 1),
    peso: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4],
    pesoMedio: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    docena: [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
  };

  const escala = escalas[unidad] ?? escalas.unidad;
  const indice = Math.min(Math.max(escalon, 0), escala.length - 1);

  return escala[indice];
}

const comercioSalida = (fila: Record<string, unknown>) => ({
  ...fila,
  premium: Boolean(fila.premium),
  minimo: fila.minimo_centavos ? aPesos(Number(fila.minimo_centavos)) : 0,
});

const productoSalida = (fila: Record<string, unknown>) => ({
  ...fila,
  precio: aPesos(Number(fila.precio_centavos)),
  fotos: JSON.parse(String(fila.fotos ?? '[]')),
});

const pedidoSalida = (fila: Record<string, unknown>) => ({
  ...fila,
  subtotal: aPesos(Number(fila.subtotal_centavos)),
  envio: aPesos(Number(fila.envio_centavos)),
  total: aPesos(Number(fila.total_centavos)),
});
