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
import {
  canjearCodigoGoogle,
  generarPkce,
  intentosAgotados,
  limpiarIntentos,
  nuevoEstado,
  paginaCierre,
  registrarIntentoFallido,
  respuestaBloqueado,
  validarEmail,
  validarPassword,
} from './auth';

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

    if (!validarEmail(email)) {
      return error('Revisá el email.', 400, cors);
    }

    if (nombre.length < 2 || nombre.length > 80) {
      return error('Poné tu nombre.', 400, cors);
    }

    const problema = validarPassword(password, email, nombre);

    if (problema) {
      return error(problema, 400, cors);
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
    /* Cloudflare pone la IP real acá; sin ella el límite sería sólo por email. */
    const ip = request.headers.get('CF-Connecting-IP') ?? 'desconocida';

    if (await intentosAgotados(env, email, ip)) {
      return respuestaBloqueado(cors);
    }

    const usuario = await env.DB.prepare(
      'SELECT id, email, nombre, rol, foto_url, password_hash FROM usuarios WHERE email = ?',
    )
      .bind(email)
      .first<UsuarioSesion & { password_hash: string }>();

    /* Se verifica siempre, incluso sin usuario, para que la respuesta tarde
       lo mismo exista o no: el tiempo delata qué emails están registrados. */
    const hash = usuario?.password_hash ?? 'pbkdf2$100000$AAAA$AAAA';
    const valida = await verificarPassword(body.password ?? '', hash);

    if (!usuario || !valida) {
      await registrarIntentoFallido(env, email, ip);

      return error('Email o contraseña incorrectos.', 401, cors);
    }

    await limpiarIntentos(env, email, ip);

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

  if (ruta === '/auth/login-panel' && metodo === 'POST') {
    const body = await leerJson<{ email?: string; password?: string; rol?: string }>(request);
    const email = (body.email ?? '').trim().toLowerCase();
    const rolPedido = String(body.rol ?? '');
    const ip = request.headers.get('CF-Connecting-IP') ?? 'desconocida';

    /* Sólo los roles que operan la app. "cliente" entra por el login común y
       "admin" no se ofrece: quien administra ya sabe por dónde entrar. */
    if (!['comercio', 'delivery', 'fletero'].includes(rolPedido)) {
      return error('Elegí un tipo de cuenta válido.', 400, cors);
    }

    if (await intentosAgotados(env, email, ip)) {
      return respuestaBloqueado(cors);
    }

    const usuario = await env.DB.prepare(
      'SELECT id, email, nombre, rol, foto_url, password_hash FROM usuarios WHERE email = ?',
    )
      .bind(email)
      .first<UsuarioSesion & { password_hash: string | null }>();

    const hash = usuario?.password_hash ?? 'pbkdf2$100000$AAAA$AAAA';
    const valida = await verificarPassword(body.password ?? '', hash);

    /**
     * El rol se comprueba contra la base, no se toma del formulario: si el
     * desplegable definiera el permiso, cualquiera entraría como comercio.
     *
     * Una cuenta puede tener varios roles aprobados: el panadero que además
     * reparte entra con el mismo email eligiendo comercio o delivery. Por eso
     * se busca en usuario_roles y no en una columna del usuario.
     */
    const rolAprobado = usuario
      ? await env.DB.prepare(
          "SELECT estado FROM usuario_roles WHERE usuario_id = ? AND rol = ? AND estado = 'aprobado'",
        )
          .bind(usuario.id, rolPedido)
          .first<{ estado: string }>()
      : null;

    /* El mensaje es el mismo cuando la clave está mal que cuando el rol no
       corresponde: distinguirlos permitiría averiguar qué cuentas son de
       comercios probando emails. */
    if (!usuario || !valida || !rolAprobado) {
      await registrarIntentoFallido(env, email, ip);

      return error('Los datos no corresponden a una cuenta de ese tipo.', 401, cors);
    }

    await limpiarIntentos(env, email, ip);

    const { token, expira } = await crearSesion(env, usuario.id);

    return json(
      {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
        /* Se devuelve el rol con el que entró, no el de la cuenta: es el que
           define qué panel se muestra. */
        rol: rolPedido,
        foto_url: usuario.foto_url,
      },
      {},
      { ...cors, 'Set-Cookie': cookieSesion(token, expira) },
    );
  }

  // ── Ingreso con Google ──

  if (ruta === '/auth/google' && metodo === 'GET') {
    if (!env.GOOGLE_CLIENT_ID) {
      return error('El ingreso con Google no está configurado.', 503, cors);
    }

    const { verificador, desafio } = await generarPkce();
    const estado = nuevoEstado();

    /* El verificador queda en el servidor hasta que Google devuelva el
       código: si viajara al navegador, PKCE dejaría de proteger nada. */
    await env.DB.prepare(
      'INSERT INTO oauth_estados (estado, verificador, destino, expira_en) VALUES (?, ?, ?, ?)',
    )
      .bind(
        estado,
        verificador,
        url.searchParams.get('destino') ?? '/',
        new Date(Date.now() + 10 * 60 * 1000).toISOString(),
      )
      .run();

    const redirectUri = `${url.origin}/auth/google/callback`;
    const autorizacion = new URL('https://accounts.google.com/o/oauth2/v2/auth');

    autorizacion.search = new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
      state: estado,
      code_challenge: desafio,
      code_challenge_method: 'S256',
      /* Muestra el selector de cuenta: en un teléfono compartido, entrar
         siempre con la última cuenta usada es un problema. */
      prompt: 'select_account',
    }).toString();

    return Response.redirect(autorizacion.toString(), 302);
  }

  if (ruta === '/auth/google/callback' && metodo === 'GET') {
    const origenApp = env.APP_URL || 'https://nicoeliceche.github.io';
    const codigo = url.searchParams.get('code');
    const estado = url.searchParams.get('state');

    if (!codigo || !estado) {
      return paginaCierre(false, 'Faltan datos en la respuesta de Google.', origenApp);
    }

    /* El estado se borra al usarlo: así un código interceptado no sirve dos
       veces, y de paso se comprueba que la vuelta corresponde a una salida
       que originó esta misma app. */
    const guardado = await env.DB.prepare(
      'SELECT verificador, destino, expira_en FROM oauth_estados WHERE estado = ?',
    )
      .bind(estado)
      .first<{ verificador: string; destino: string; expira_en: string }>();

    await env.DB.prepare('DELETE FROM oauth_estados WHERE estado = ?').bind(estado).run();

    if (!guardado || new Date(guardado.expira_en) < new Date()) {
      return paginaCierre(false, 'El ingreso venció. Probá de nuevo.', origenApp);
    }

    const perfil = await canjearCodigoGoogle(
      codigo,
      guardado.verificador,
      env,
      `${url.origin}/auth/google/callback`,
    );

    if (!perfil?.email) {
      return paginaCierre(false, 'No pudimos leer tu cuenta de Google.', origenApp);
    }

    /* Un email sin verificar en Google no prueba nada: aceptarlo permitiría
       apropiarse de la cuenta de otra persona registrada con ese correo. */
    if (!perfil.email_verified) {
      return paginaCierre(false, 'Tu email de Google no está verificado.', origenApp);
    }

    const email = perfil.email.trim().toLowerCase();

    /* Si ya entró con Google antes, se usa esa identidad. */
    const identidad = await env.DB.prepare(
      "SELECT usuario_id FROM identidades WHERE proveedor = 'google' AND proveedor_id = ?",
    )
      .bind(perfil.sub)
      .first<{ usuario_id: string }>();

    let usuarioId = identidad?.usuario_id ?? null;

    if (!usuarioId) {
      /* Si ya existe una cuenta con ese email, se vincula en lugar de crear
         una duplicada: Google ya verificó que el correo es suyo. */
      const existente = await env.DB.prepare('SELECT id FROM usuarios WHERE email = ?')
        .bind(email)
        .first<{ id: string }>();

      usuarioId = existente?.id ?? nuevoId();

      if (!existente) {
        await env.DB.prepare(
          `INSERT INTO usuarios (id, email, password_hash, nombre, foto_url, email_verificado)
           VALUES (?, ?, NULL, ?, ?, 1)`,
        )
          .bind(usuarioId, email, perfil.name?.trim() || email.split('@')[0], perfil.picture ?? null)
          .run();
      }

      await env.DB.prepare(
        "INSERT INTO identidades (id, usuario_id, proveedor, proveedor_id) VALUES (?, ?, 'google', ?)",
      )
        .bind(nuevoId(), usuarioId, perfil.sub)
        .run();
    }

    const { token, expira } = await crearSesion(env, usuarioId);
    const respuesta = paginaCierre(true, 'Ingresaste con Google.', origenApp);

    respuesta.headers.append('Set-Cookie', cookieSesion(token, expira));

    return respuesta;
  }

  if (ruta === '/auth/yo' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    return usuario ? json(usuario, {}, cors) : error('Sin sesión', 401, cors);
  }

  // ── Postulaciones ──

  if (ruta === '/postulaciones' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<{ rol?: string; datos?: Record<string, unknown> }>(request);
    const rol = String(body.rol ?? '');

    if (!['comercio', 'delivery', 'fletero'].includes(rol)) {
      return error('Elegí un tipo de cuenta válido.', 400, cors);
    }

    /* Si ya se postuló a ese rol se actualiza la que existe: así quien recibió
       un pedido de cambios corrige y reenvía, sin duplicar el trámite. */
    const previa = await env.DB.prepare(
      'SELECT id, estado FROM postulaciones WHERE usuario_id = ? AND rol = ?',
    )
      .bind(usuario.id, rol)
      .first<{ id: string; estado: string }>();

    if (previa?.estado === 'aprobado') {
      return error('Ya tenés ese tipo de cuenta aprobado.', 409, cors);
    }

    const datos = JSON.stringify(body.datos ?? {});

    if (previa) {
      await env.DB.prepare(
        `UPDATE postulaciones
            SET datos = ?, estado = 'pendiente', nota_revision = NULL,
                actualizado_en = datetime('now')
          WHERE id = ?`,
      )
        .bind(datos, previa.id)
        .run();

      return json({ id: previa.id, estado: 'pendiente' }, {}, cors);
    }

    const id = nuevoId();

    await env.DB.batch([
      env.DB.prepare(
        'INSERT INTO postulaciones (id, usuario_id, rol, datos) VALUES (?, ?, ?, ?)',
      ).bind(id, usuario.id, rol, datos),
      /* El rol se crea pendiente junto con la postulación: así el login sabe
         que existe pero todavía no habilita. */
      env.DB.prepare(
        "INSERT OR IGNORE INTO usuario_roles (id, usuario_id, rol, estado) VALUES (?, ?, ?, 'pendiente')",
      ).bind(nuevoId(), usuario.id, rol),
    ]);

    return json({ id, estado: 'pendiente' }, { status: 201 }, cors);
  }

  if (ruta === '/postulaciones/mias' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT id, rol, estado, nota_revision, creado_en, actualizado_en
         FROM postulaciones WHERE usuario_id = ? ORDER BY creado_en DESC`,
    )
      .bind(usuario.id)
      .all();

    return json({ postulaciones: results }, {}, cors);
  }

  // ── Administración ──

  if (ruta === '/admin/postulaciones' && metodo === 'GET') {
    const admin = await exigirAdmin(request, env, cors);

    if ('respuesta' in admin) {
      return admin.respuesta;
    }

    const estado = url.searchParams.get('estado') ?? 'pendiente';
    const filtro = estado === 'todas' ? null : estado;

    const { results } = await env.DB.prepare(
      `SELECT p.id, p.rol, p.estado, p.datos, p.nota_revision, p.creado_en,
              p.actualizado_en, u.nombre, u.email, u.telefono
         FROM postulaciones p
         JOIN usuarios u ON u.id = p.usuario_id
        WHERE (? IS NULL OR p.estado = ?)
        ORDER BY p.creado_en DESC
        LIMIT 100`,
    )
      .bind(filtro, filtro)
      .all();

    return json(
      {
        postulaciones: results.map((fila) => ({
          ...fila,
          datos: JSON.parse(String(fila.datos ?? '{}')),
        })),
      },
      {},
      cors,
    );
  }

  const revision = /^\/admin\/postulaciones\/([\w-]+)$/.exec(ruta);

  if (revision && metodo === 'POST') {
    const admin = await exigirAdmin(request, env, cors);

    if ('respuesta' in admin) {
      return admin.respuesta;
    }

    const body = await leerJson<{ decision?: string; nota?: string }>(request);
    const decision = String(body.decision ?? '');

    if (!['aprobado', 'rechazado', 'cambios'].includes(decision)) {
      return error('Decisión no válida.', 400, cors);
    }

    /* Pedir cambios sin decir qué corregir deja a la persona sin saber qué
       hacer, así que la nota es obligatoria en ese caso. */
    const nota = String(body.nota ?? '').trim();

    if (decision === 'cambios' && nota.length < 5) {
      return error('Escribí qué hay que corregir.', 400, cors);
    }

    const postulacion = await env.DB.prepare(
      'SELECT id, usuario_id, rol FROM postulaciones WHERE id = ?',
    )
      .bind(revision[1])
      .first<{ id: string; usuario_id: string; rol: string }>();

    if (!postulacion) {
      return error('Postulación no encontrada.', 404, cors);
    }

    /* El rol pasa a aprobado sólo si la decisión lo es: con "cambios" queda
       pendiente, para que no habilite el ingreso mientras tanto. */
    const estadoRol =
      decision === 'aprobado' ? 'aprobado' : decision === 'rechazado' ? 'rechazado' : 'pendiente';

    await env.DB.batch([
      env.DB.prepare(
        `UPDATE postulaciones
            SET estado = ?, nota_revision = ?, revisado_por = ?,
                revisado_en = datetime('now'), actualizado_en = datetime('now')
          WHERE id = ?`,
      ).bind(decision, nota || null, admin.usuario.id, postulacion.id),
      env.DB.prepare(
        'UPDATE usuario_roles SET estado = ? WHERE usuario_id = ? AND rol = ?',
      ).bind(estadoRol, postulacion.usuario_id, postulacion.rol),
      env.DB.prepare(
        'INSERT INTO revisiones (id, postulacion_id, admin_id, decision, nota) VALUES (?, ?, ?, ?, ?)',
      ).bind(nuevoId(), postulacion.id, admin.usuario.id, decision, nota || null),
    ]);

    return json({ ok: true, estado: decision }, {}, cors);
  }

  // ── Comercios ──

  if (ruta === '/comercios' && metodo === 'GET') {
    const rubro = url.searchParams.get('rubro');
    const busqueda = url.searchParams.get('q');

    let sql =
      "SELECT id, nombre, rubro_id, rubro_nombre, direccion, lat, lon, telefono, horario, zona, descripcion, logo_url, premium, minimo_centavos FROM comercios WHERE estado = 'aprobado'";
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

    /* Cada tarjeta muestra tres productos con su precio: es lo que hace que
       la lista sirva para decidir sin entrar a cada comercio. Se traen todos
       de una consulta y no una por comercio. */
    const destacados = await destacadosDe(
      env,
      results.map((fila) => String(fila.id)),
    );

    return json(
      {
        comercios: results.map((fila) => ({
          ...comercioSalida(fila),
          destacados: destacados.get(String(fila.id)) ?? [],
        })),
      },
      {},
      cors,
    );
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

    /* Las ofertas viajan con el comercio: el perfil las lista y además cada
       producto necesita saber si está en una para mostrar el precio tachado.
       Pedirlas aparte serían dos viajes para pintar la misma pantalla. */
    const { results: filasOfertas } = await env.DB.prepare(
      `SELECT id, tipo, titulo, descripcion, porcentaje, cantidad,
              precio_final_centavos, precio_lista_centavos, foto_url
         FROM ofertas
        WHERE comercio_id = ? AND activa = 1
          AND (desde IS NULL OR desde <= datetime('now'))
          AND (hasta IS NULL OR hasta >= datetime('now'))
        ORDER BY creado_en DESC`,
    )
      .bind(comercioDetalle[1])
      .all<FilaOferta>();

    return json(
      {
        comercio: comercioSalida(comercio),
        categorias,
        productos: productos.map(productoSalida),
        ofertas: await conProductos(env, filasOfertas),
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

  // ── Mi comercio ──

  if (ruta === '/mi-comercio' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const comercio = await env.DB.prepare(
      'SELECT * FROM comercios WHERE usuario_id = ? ORDER BY creado_en DESC LIMIT 1',
    )
      .bind(usuario.id)
      .first();

    if (!comercio) {
      return json({ comercio: null, productos: [] }, {}, cors);
    }

    const { results: productos } = await env.DB.prepare(
      `SELECT id, categoria_id, nombre, descripcion, precio_centavos, unidad_venta,
              fotos, video_url, stock, activo
         FROM productos WHERE comercio_id = ? ORDER BY creado_en DESC`,
    )
      .bind(comercio.id)
      .all();

    return json(
      { comercio: comercioSalida(comercio), productos: productos.map(productoSalida) },
      {},
      cors,
    );
  }

  /**
   * Pedidos del comercio, con su envío y los mensajes sin leer.
   *
   * Todo junto en una consulta: el panel muestra las tres cosas a la vez, y
   * pedirlas por separado obligaría a tres viajes por cada carga.
   */
  if (ruta === '/mi-comercio/pedidos' && metodo === 'GET') {
    const comercio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in comercio) {
      return comercio.respuesta;
    }

    const estado = url.searchParams.get('estado');

    const { results } = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.estado, p.total_centavos, p.direccion_texto,
              p.creado_en, u.nombre AS cliente, u.telefono AS cliente_telefono,
              e.estado AS envio_estado, e.lat, e.lon, e.ubicacion_en,
              r.nombre AS repartidor,
              (SELECT COUNT(*) FROM pedido_mensajes m
                WHERE m.pedido_id = p.id AND m.leido = 0 AND m.autor_id != ?) AS sin_leer,
              (SELECT COUNT(*) FROM pedido_items i WHERE i.pedido_id = p.id) AS items
         FROM pedidos p
         JOIN usuarios u ON u.id = p.usuario_id
         LEFT JOIN envios e ON e.pedido_id = p.id
         LEFT JOIN usuarios r ON r.id = e.repartidor_id
        WHERE p.comercio_id = ?
          AND (? IS NULL OR p.estado = ?)
        ORDER BY p.creado_en DESC
        LIMIT 60`,
    )
      .bind(comercio.usuario.id, comercio.comercioId, estado, estado)
      .all();

    return json(
      {
        pedidos: results.map((fila) => ({
          ...fila,
          total: aPesos(Number(fila.total_centavos)),
        })),
      },
      {},
      cors,
    );
  }

  /** Envíos en curso, para el mapa de seguimiento. */
  if (ruta === '/mi-comercio/envios' && metodo === 'GET') {
    const comercio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in comercio) {
      return comercio.respuesta;
    }

    const { results } = await env.DB.prepare(
      `SELECT e.id, e.estado, e.lat, e.lon, e.ubicacion_en, e.asignado_en, e.entregado_en,
              p.codigo, p.direccion_texto, u.nombre AS repartidor, u.telefono
         FROM envios e
         JOIN pedidos p ON p.id = e.pedido_id
         LEFT JOIN usuarios u ON u.id = e.repartidor_id
        WHERE p.comercio_id = ?
          AND e.estado NOT IN ('entregado', 'cancelado')
        ORDER BY e.creado_en DESC`,
    )
      .bind(comercio.comercioId)
      .all();

    return json({ envios: results }, {}, cors);
  }

  const chatPedido = /^\/pedidos\/([\w-]+)\/mensajes$/.exec(ruta);

  if (chatPedido && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    /* Sólo el cliente del pedido o el dueño del comercio pueden leer el chat:
       sin esta comprobación, cualquiera con el id vería la conversación. */
    const permitido = await env.DB.prepare(
      /* Tres partes hablan de un pedido: el cliente, el comercio y quien lo
         reparte. Sin incluir al repartidor, tomar un pedido abría un chat al
         que después no podía escribir. */
      `SELECT 1 AS ok FROM pedidos p
         LEFT JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.id = ?
          AND (p.usuario_id = ? OR c.usuario_id = ? OR e.repartidor_id = ?)`,
    )
      .bind(chatPedido[1], usuario.id, usuario.id, usuario.id)
      .first();

    if (!permitido) {
      return error('No encontrado', 404, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT m.id, m.texto, m.tipo, m.media_url, m.autor_id, m.creado_en,
              u.nombre AS autor
         FROM pedido_mensajes m
         JOIN usuarios u ON u.id = m.autor_id
        WHERE m.pedido_id = ?
        ORDER BY m.creado_en`,
    )
      .bind(chatPedido[1])
      .all();

    /* Al abrir el chat se marcan como leídos los del otro. */
    await env.DB.prepare(
      'UPDATE pedido_mensajes SET leido = 1 WHERE pedido_id = ? AND autor_id != ?',
    )
      .bind(chatPedido[1], usuario.id)
      .run();

    return json({ mensajes: results, yo: usuario.id }, {}, cors);
  }

  if (chatPedido && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const permitido = await env.DB.prepare(
      /* Tres partes hablan de un pedido: el cliente, el comercio y quien lo
         reparte. Sin incluir al repartidor, tomar un pedido abría un chat al
         que después no podía escribir. */
      `SELECT 1 AS ok FROM pedidos p
         LEFT JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.id = ?
          AND (p.usuario_id = ? OR c.usuario_id = ? OR e.repartidor_id = ?)`,
    )
      .bind(chatPedido[1], usuario.id, usuario.id, usuario.id)
      .first();

    if (!permitido) {
      return error('No encontrado', 404, cors);
    }

    const body = await leerJson<{ texto?: string; tipo?: string; mediaUrl?: string }>(request);
    const texto = String(body.texto ?? '').trim().slice(0, 2000);

    if (!texto && !body.mediaUrl) {
      return error('El mensaje está vacío.', 400, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      'INSERT INTO pedido_mensajes (id, pedido_id, autor_id, texto, tipo, media_url) VALUES (?, ?, ?, ?, ?, ?)',
    )
      .bind(id, chatPedido[1], usuario.id, texto || null, body.tipo ?? 'texto', body.mediaUrl ?? null)
      .run();

    return json({ id }, { status: 201 }, cors);
  }

  // ── Panel del repartidor ──

  /**
   * Pedidos esperando repartidor, ordenados por cercanía.
   *
   * La distancia se calcula acá y no en el navegador: así el orden es el
   * mismo para todos y no depende de que el teléfono haga bien la cuenta.
   */
  if (ruta === '/delivery/disponibles' && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const lat = Number(url.searchParams.get('lat'));
    const lon = Number(url.searchParams.get('lon'));

    const { results } = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.direccion_texto, p.total_centavos, p.creado_en,
              c.nombre AS comercio, c.direccion AS comercio_direccion,
              c.lat AS comercio_lat, c.lon AS comercio_lon,
              u.nombre AS cliente,
              (SELECT COUNT(*) FROM pedido_items i WHERE i.pedido_id = p.id) AS items
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         JOIN usuarios u ON u.id = p.usuario_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.estado = 'proceso'
          AND (e.id IS NULL OR e.estado = 'buscando')
        ORDER BY p.creado_en DESC
        LIMIT 50`,
    ).all();

    const conDistancia = results.map((fila) => {
      const comercioLat = fila.comercio_lat as number | null;
      const comercioLon = fila.comercio_lon as number | null;

      /* Sin coordenadas del comercio o del repartidor no hay distancia que
         calcular: se deja en null y esos van al final de la lista. */
      const distancia =
        Number.isFinite(lat) && Number.isFinite(lon) && comercioLat && comercioLon
          ? distanciaKm(lat, lon, comercioLat, comercioLon)
          : null;

      return { ...fila, total: aPesos(Number(fila.total_centavos)), distanciaKm: distancia };
    });

    conDistancia.sort((a, b) => {
      if (a.distanciaKm === null) {
        return b.distanciaKm === null ? 0 : 1;
      }

      if (b.distanciaKm === null) {
        return -1;
      }

      return a.distanciaKm - b.distanciaKm;
    });

    return json({ pedidos: conDistancia }, {}, cors);
  }

  const detallePedido = /^\/delivery\/pedidos\/([\w-]+)$/.exec(ruta);

  if (detallePedido && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const pedido = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.direccion_texto, p.subtotal_centavos, p.envio_centavos,
              p.total_centavos, p.metodo_pago, p.creado_en, p.usuario_id,
              c.nombre AS comercio, c.direccion AS comercio_direccion,
              c.telefono AS comercio_telefono,
              u.nombre AS cliente, u.telefono AS cliente_telefono
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         JOIN usuarios u ON u.id = p.usuario_id
        WHERE p.id = ?`,
    )
      .bind(detallePedido[1])
      .first();

    if (!pedido) {
      return error('Pedido no encontrado', 404, cors);
    }

    const { results: items } = await env.DB.prepare(
      `SELECT nombre, precio_centavos, unidad_venta, escalon, subtotal_centavos
         FROM pedido_items WHERE pedido_id = ?`,
    )
      .bind(detallePedido[1])
      .all();

    return json(
      {
        pedido: {
          ...pedido,
          subtotal: aPesos(Number(pedido.subtotal_centavos)),
          envio: aPesos(Number(pedido.envio_centavos)),
          total: aPesos(Number(pedido.total_centavos)),
        },
        items: items.map((item) => ({
          ...item,
          precio: aPesos(Number(item.precio_centavos)),
          subtotal: aPesos(Number(item.subtotal_centavos)),
        })),
      },
      {},
      cors,
    );
  }

  const tomar = /^\/delivery\/pedidos\/([\w-]+)\/tomar$/.exec(ruta);

  if (tomar && metodo === 'POST') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const body = await leerJson<{ lat?: number; lon?: number }>(request);

    /* Si dos repartidores tocan "tomar" a la vez, el segundo tiene que
       enterarse de que ya no está disponible en lugar de pisar al primero. */
    const yaTomado = await env.DB.prepare(
      "SELECT id FROM envios WHERE pedido_id = ? AND estado != 'buscando'",
    )
      .bind(tomar[1])
      .first();

    if (yaTomado) {
      return error('Otro repartidor tomó este pedido.', 409, cors);
    }

    await env.DB.batch([
      env.DB.prepare('DELETE FROM envios WHERE pedido_id = ?').bind(tomar[1]),
      env.DB.prepare(
        `INSERT INTO envios (id, pedido_id, repartidor_id, estado, lat, lon, ubicacion_en, asignado_en)
         VALUES (?, ?, ?, 'asignado', ?, ?, datetime('now'), datetime('now'))`,
      ).bind(
        nuevoId(),
        tomar[1],
        repartidor.usuario.id,
        Number.isFinite(body.lat) ? body.lat : null,
        Number.isFinite(body.lon) ? body.lon : null,
      ),
    ]);

    return json({ ok: true }, {}, cors);
  }

  /** Posición del repartidor, para el mapa que mira el comercio. */
  if (ruta === '/delivery/ubicacion' && metodo === 'POST') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const body = await leerJson<{ lat?: number; lon?: number }>(request);

    if (!Number.isFinite(body.lat) || !Number.isFinite(body.lon)) {
      return error('Faltan las coordenadas.', 400, cors);
    }

    await env.DB.prepare(
      `UPDATE envios SET lat = ?, lon = ?, ubicacion_en = datetime('now')
        WHERE repartidor_id = ? AND estado NOT IN ('entregado', 'cancelado')`,
    )
      .bind(body.lat, body.lon, repartidor.usuario.id)
      .run();

    return json({ ok: true }, {}, cors);
  }

  /* Las ofertas de toda la app, para la portada. Van con el nombre del
     comercio porque en Inicio la tarjeta se ve fuera de contexto: sin saber
     de quién es, la oferta no sirve para decidir. */
  if (ruta === '/ofertas' && metodo === 'GET') {
    const { results } = await env.DB.prepare(
      `SELECT o.id, o.tipo, o.titulo, o.descripcion, o.porcentaje, o.cantidad,
              o.precio_final_centavos, o.precio_lista_centavos, o.foto_url,
              o.comercio_id, c.nombre AS comercio, c.rubro_id
         FROM ofertas o
         JOIN comercios c ON c.id = o.comercio_id
        WHERE o.activa = 1 AND c.estado = 'aprobado'
          AND (o.desde IS NULL OR o.desde <= datetime('now'))
          AND (o.hasta IS NULL OR o.hasta >= datetime('now'))
        ORDER BY c.premium DESC, o.creado_en DESC
        LIMIT 30`,
    ).all<FilaOferta & { comercio_id: string; comercio: string; rubro_id: string }>();

    const conProductosDeCadaUna = await conProductos(env, results);

    return json(
      {
        ofertas: conProductosDeCadaUna.map((oferta, indice) => ({
          ...oferta,
          comercioId: results[indice].comercio_id,
          comercio: results[indice].comercio,
          rubroId: results[indice].rubro_id,
        })),
      },
      {},
      cors,
    );
  }

  // ── Ofertas ──
  //
  // El precio de lista lo calcula el servidor leyendo los productos de la
  // base, nunca lo que mande el cliente: si viniera del formulario, cualquiera
  // podría declarar un "antes" inventado para simular un descuento enorme.

  const ofertasComercio = /^\/comercios\/([\w-]+)\/ofertas$/.exec(ruta);

  if (ofertasComercio && metodo === 'GET') {
    const { results } = await env.DB.prepare(
      `SELECT id, tipo, titulo, descripcion, porcentaje, cantidad,
              precio_final_centavos, precio_lista_centavos, foto_url
         FROM ofertas
        WHERE comercio_id = ? AND activa = 1
          AND (desde IS NULL OR desde <= datetime('now'))
          AND (hasta IS NULL OR hasta >= datetime('now'))
        ORDER BY creado_en DESC`,
    )
      .bind(ofertasComercio[1])
      .all<FilaOferta>();

    return json({ ofertas: await conProductos(env, results) }, {}, cors);
  }

  if (ruta === '/mi-comercio/ofertas' && metodo === 'GET') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    /* El comercio ve también las vencidas y las apagadas: son suyas y puede
       querer volver a encenderlas. */
    const { results } = await env.DB.prepare(
      `SELECT id, tipo, titulo, descripcion, porcentaje, cantidad,
              precio_final_centavos, precio_lista_centavos, foto_url,
              desde, hasta, activa
         FROM ofertas WHERE comercio_id = ? ORDER BY creado_en DESC`,
    )
      .bind(propio.comercioId)
      .all<FilaOferta>();

    return json({ ofertas: await conProductos(env, results) }, {}, cors);
  }

  if (ruta === '/mi-comercio/ofertas' && metodo === 'POST') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const body = await leerJson<{
      tipo?: string;
      titulo?: string;
      descripcion?: string;
      porcentaje?: number;
      cantidad?: number;
      precioFinal?: number;
      fotoUrl?: string;
      desde?: string;
      hasta?: string;
      productos?: Array<{ productoId?: string; unidades?: number }>;
    }>(request);

    const tipo = String(body.tipo ?? '');
    const titulo = String(body.titulo ?? '').trim();
    const elegidos = Array.isArray(body.productos) ? body.productos : [];

    if (!['descuento', 'combo', 'cantidad'].includes(tipo)) {
      return error('Tipo de oferta desconocido.', 400, cors);
    }

    if (!titulo) {
      return error('La oferta necesita un título.', 400, cors);
    }

    if (elegidos.length === 0) {
      return error('Elegí al menos un producto.', 400, cors);
    }

    /* El descuento y la promo por cantidad son sobre un producto: si llegaran
       varios, el precio de lista dejaría de significar lo que dice. */
    if (tipo !== 'combo' && elegidos.length > 1) {
      return error('Este tipo de oferta es sobre un solo producto.', 400, cors);
    }

    const ids = [...new Set(elegidos.map((elegido) => String(elegido.productoId ?? '')))];
    const marcadores = ids.map(() => '?').join(',');

    /* Los productos tienen que ser de este comercio: sin la condición se
       podría armar una oferta sobre el catálogo de otro. */
    const { results: productos } = await env.DB.prepare(
      `SELECT id, precio_centavos FROM productos
        WHERE id IN (${marcadores}) AND comercio_id = ? AND activo = 1`,
    )
      .bind(...ids, propio.comercioId)
      .all<{ id: string; precio_centavos: number }>();

    if (productos.length !== ids.length) {
      return error('Alguno de los productos no es de tu comercio.', 400, cors);
    }

    const precioDe = new Map(productos.map((fila) => [fila.id, fila.precio_centavos]));

    const cantidad =
      tipo === 'cantidad' ? Math.trunc(Number(body.cantidad ?? 0)) : null;

    if (tipo === 'cantidad' && (!cantidad || cantidad < 2)) {
      return error('La promo por cantidad arranca en 2 unidades.', 400, cors);
    }

    let lista = 0;

    for (const elegido of elegidos) {
      const unidades =
        tipo === 'cantidad'
          ? (cantidad as number)
          : Math.max(1, Math.trunc(Number(elegido.unidades ?? 1)));

      lista += (precioDe.get(String(elegido.productoId ?? '')) ?? 0) * unidades;
    }

    /* En el descuento el final sale del porcentaje, así el número que se pinta
       sobre la foto y lo que se cobra no pueden discrepar. */
    let porcentaje: number | null = null;
    let final: number;

    if (tipo === 'descuento') {
      porcentaje = Math.trunc(Number(body.porcentaje ?? 0));

      if (porcentaje < 1 || porcentaje > 90) {
        return error('El descuento va entre 1 % y 90 %.', 400, cors);
      }

      final = Math.round((lista * (100 - porcentaje)) / 100);
    } else {
      final = aCentavos(Number(body.precioFinal ?? 0));

      if (final <= 0) {
        return error('Poné el precio final de la oferta.', 400, cors);
      }

      if (final > lista) {
        return error('El precio final tiene que ser menor al de lista.', 400, cors);
      }
    }

    const id = nuevoId();

    await env.DB.prepare(
      `INSERT INTO ofertas
        (id, comercio_id, tipo, titulo, descripcion, porcentaje, cantidad,
         precio_final_centavos, precio_lista_centavos, foto_url, desde, hasta)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        propio.comercioId,
        tipo,
        titulo,
        body.descripcion ?? null,
        porcentaje,
        cantidad,
        final,
        lista,
        body.fotoUrl ?? null,
        body.desde ?? null,
        body.hasta ?? null,
      )
      .run();

    await env.DB.batch(
      elegidos.map((elegido) =>
        env.DB.prepare(
          'INSERT INTO oferta_productos (oferta_id, producto_id, unidades) VALUES (?, ?, ?)',
        ).bind(
          id,
          String(elegido.productoId ?? ''),
          tipo === 'combo' ? Math.max(1, Math.trunc(Number(elegido.unidades ?? 1))) : 1,
        ),
      ),
    );

    return json(
      { id, precioLista: aPesos(lista), precioFinal: aPesos(final) },
      { status: 201 },
      cors,
    );
  }

  const ofertaPropia = /^\/mi-comercio\/ofertas\/([\w-]+)$/.exec(ruta);

  if (ofertaPropia && (metodo === 'DELETE' || metodo === 'PATCH')) {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const suya = await env.DB.prepare(
      'SELECT id FROM ofertas WHERE id = ? AND comercio_id = ?',
    )
      .bind(ofertaPropia[1], propio.comercioId)
      .first();

    if (!suya) {
      return error('Esa oferta no es tuya', 403, cors);
    }

    if (metodo === 'DELETE') {
      await env.DB.prepare('DELETE FROM ofertas WHERE id = ?').bind(ofertaPropia[1]).run();

      return json({ ok: true }, {}, cors);
    }

    /* Lo único editable es encenderla o apagarla: cambiarle el precio a una
       oferta viva confundiría a quien ya la vio. Para otra promo, otra oferta. */
    const body = await leerJson<{ activa?: boolean }>(request);

    await env.DB.prepare('UPDATE ofertas SET activa = ? WHERE id = ?')
      .bind(body.activa ? 1 : 0, ofertaPropia[1])
      .run();

    return json({ ok: true }, {}, cors);
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

  const producto = /^\/productos\/([\w-]+)$/.exec(ruta);

  if (producto && (metodo === 'PATCH' || metodo === 'DELETE')) {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    /* Se comprueba la propiedad en la misma consulta: sin el join, alguien
       podría editar el producto de otro comercio conociendo su id. */
    const propio = await env.DB.prepare(
      `SELECT p.id FROM productos p
         JOIN comercios c ON c.id = p.comercio_id
        WHERE p.id = ? AND c.usuario_id = ?`,
    )
      .bind(producto[1], usuario.id)
      .first();

    if (!propio) {
      return error('Ese producto no es tuyo', 403, cors);
    }

    if (metodo === 'DELETE') {
      await env.DB.prepare('DELETE FROM productos WHERE id = ?').bind(producto[1]).run();

      return json({ ok: true }, {}, cors);
    }

    const body = await leerJson<Record<string, unknown>>(request);

    await env.DB.prepare(
      `UPDATE productos
          SET nombre = ?, descripcion = ?, precio_centavos = ?, unidad_venta = ?,
              fotos = ?, video_url = ?, stock = ?, categoria_id = ?
        WHERE id = ?`,
    )
      .bind(
        String(body.nombre ?? ''),
        body.descripcion ?? null,
        aCentavos(Number(body.precio ?? 0)),
        String(body.unidadVenta ?? 'unidad'),
        JSON.stringify(body.fotos ?? []),
        body.videoUrl ?? null,
        body.stock ?? null,
        body.categoriaId ?? null,
        producto[1],
      )
      .run();

    return json({ ok: true }, {}, cors);
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

    /* Cada pedido viaja con lo que se compró: el historial muestra los
       productos sin pedirlos aparte, y "volver a pedir" necesita saberlos.
       Una sola consulta para todos los pedidos, no una por cada uno. */
    const lineas = await lineasDePedidos(
      env,
      results.map((fila) => String(fila.id)),
    );

    return json(
      {
        pedidos: results.map((fila) => ({
          ...pedidoSalida(fila),
          items: lineas.get(String(fila.id)) ?? [],
        })),
      },
      {},
      cors,
    );
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

    /* Las ofertas se aplican acá y no en el navegador por lo mismo que los
       precios: es lo que se cobra. Se descuenta del subtotal en lugar de
       tocar cada línea, así el pedido sigue mostrando qué se pidió y a qué
       precio de lista, y aparte cuánto se ahorró. */
    const descuento = await descuentoDeOfertas(env, body.comercioId, lineas);

    subtotal = Math.max(0, subtotal - descuento);

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

/**
 * Exige que quien llama sea administrador.
 *
 * Se comprueba contra usuario_roles y no contra un dato de la petición: el
 * panel de administración decide quién cobra y quién opera en el pueblo, así
 * que el permiso tiene que salir de la base cada vez.
 */
async function exigirAdmin(
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<{ usuario: UsuarioSesion } | { respuesta: Response }> {
  const usuario = await usuarioActual(request, env);

  if (!usuario) {
    return { respuesta: error('Necesitás iniciar sesión', 401, cors) };
  }

  const esAdmin = await env.DB.prepare(
    "SELECT 1 AS ok FROM usuario_roles WHERE usuario_id = ? AND rol = 'admin' AND estado = 'aprobado'",
  )
    .bind(usuario.id)
    .first();

  if (!esAdmin) {
    /* 404 y no 403: responder "prohibido" confirma que la ruta existe, y eso
       le dice a quien prueba que vale la pena seguir intentando. */
    return { respuesta: error('No encontrado', 404, cors) };
  }

  return { usuario };
}

/** Devuelve el comercio de quien llama, o el error que corresponda. */
async function comercioDelUsuario(
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<{ usuario: UsuarioSesion; comercioId: string } | { respuesta: Response }> {
  const usuario = await usuarioActual(request, env);

  if (!usuario) {
    return { respuesta: error('Necesitás iniciar sesión', 401, cors) };
  }

  const comercio = await env.DB.prepare(
    'SELECT id FROM comercios WHERE usuario_id = ? ORDER BY creado_en DESC LIMIT 1',
  )
    .bind(usuario.id)
    .first<{ id: string }>();

  if (!comercio) {
    return { respuesta: error('Todavía no tenés comercio', 404, cors) };
  }

  return { usuario, comercioId: comercio.id };
}

/**
 * Cuánto baja el pedido por las ofertas vigentes del comercio.
 *
 * Cada tipo se aplica distinto:
 *
 *   descuento → un porcentaje sobre lo que se lleve de ese producto.
 *   cantidad  → sólo por paquetes completos: si la promo es 3 y lleva 7,
 *               se cobran dos paquetes y una unidad suelta.
 *   combo     → hace falta llevar todo lo que incluye; si falta algo, no
 *               es el combo y no corresponde el precio del combo.
 *
 * Se calcula sobre unidades enteras: un producto por peso ("medio kilo de
 * pan") no entra en promos por cantidad ni en combos, porque "3 x medio kilo"
 * no es lo que el comercio quiso ofrecer.
 */
async function descuentoDeOfertas(
  env: Env,
  comercioId: string,
  lineas: Array<{
    producto: { id: string; precio_centavos: number; unidad_venta: string };
    escalon: number;
    linea: number;
  }>,
) {
  const { results: ofertas } = await env.DB.prepare(
    `SELECT id, tipo, porcentaje, cantidad, precio_final_centavos, precio_lista_centavos
       FROM ofertas
      WHERE comercio_id = ? AND activa = 1
        AND (desde IS NULL OR desde <= datetime('now'))
        AND (hasta IS NULL OR hasta >= datetime('now'))`,
  )
    .bind(comercioId)
    .all<{
      id: string;
      tipo: string;
      porcentaje: number | null;
      cantidad: number | null;
      precio_final_centavos: number;
      precio_lista_centavos: number;
    }>();

  if (ofertas.length === 0) {
    return 0;
  }

  const marcadores = ofertas.map(() => '?').join(',');
  const { results: incluidos } = await env.DB.prepare(
    `SELECT oferta_id, producto_id, unidades FROM oferta_productos
      WHERE oferta_id IN (${marcadores})`,
  )
    .bind(...ofertas.map((oferta) => oferta.id))
    .all<{ oferta_id: string; producto_id: string; unidades: number }>();

  /* Cuántas unidades enteras hay de cada producto en el carrito. */
  const enCarrito = new Map<string, number>();

  for (const linea of lineas) {
    if (linea.producto.unidad_venta !== 'unidad' && linea.producto.unidad_venta !== 'docena') {
      continue;
    }

    const unidades = linea.escalon + 1;

    enCarrito.set(linea.producto.id, (enCarrito.get(linea.producto.id) ?? 0) + unidades);
  }

  const gastadoPorProducto = new Map<string, number>();
  let total = 0;

  for (const oferta of ofertas) {
    const partes = incluidos.filter((fila) => fila.oferta_id === oferta.id);

    if (partes.length === 0) {
      continue;
    }

    if (oferta.tipo === 'descuento') {
      const parte = partes[0];
      /* El porcentaje va sobre lo que efectivamente se lleve, sea media
         docena o tres unidades: es un descuento sobre ese producto. */
      const gastado = lineas
        .filter((linea) => linea.producto.id === parte.producto_id)
        .reduce((suma, linea) => suma + linea.linea, 0);

      total += Math.round((gastado * (oferta.porcentaje ?? 0)) / 100);
      continue;
    }

    /* Combo y promo por cantidad se cuentan en paquetes: cuántas veces
       entra la oferta completa en lo que hay en el carrito. */
    const veces = Math.min(
      ...partes.map((parte) => {
        const necesarias =
          oferta.tipo === 'cantidad' ? (oferta.cantidad ?? 1) : parte.unidades;
        const disponibles =
          (enCarrito.get(parte.producto_id) ?? 0) -
          (gastadoPorProducto.get(parte.producto_id) ?? 0);

        return Math.floor(disponibles / Math.max(1, necesarias));
      }),
    );

    if (veces < 1) {
      continue;
    }

    /* Las unidades ya usadas por esta oferta no vuelven a contar para otra:
       si no, dos promos sobre el mismo producto se descontarían dos veces. */
    for (const parte of partes) {
      const necesarias =
        oferta.tipo === 'cantidad' ? (oferta.cantidad ?? 1) : parte.unidades;

      gastadoPorProducto.set(
        parte.producto_id,
        (gastadoPorProducto.get(parte.producto_id) ?? 0) + necesarias * veces,
      );
    }

    total += (oferta.precio_lista_centavos - oferta.precio_final_centavos) * veces;
  }

  return total;
}

/**
 * Tres productos por comercio para ilustrar la tarjeta.
 *
 * Una sola consulta para todos: con una por comercio, listar veinte
 * comercios serían veintiún viajes a la base. Se piden ordenados y se
 * recorta a tres en memoria, que es más barato que un ranking en SQLite.
 */
async function destacadosDe(env: Env, comercioIds: string[]) {
  const porComercio = new Map<
    string,
    Array<{ id: string; nombre: string; precio: number; foto: string | null }>
  >();

  if (comercioIds.length === 0) {
    return porComercio;
  }

  const marcadores = comercioIds.map(() => '?').join(',');
  const { results } = await env.DB.prepare(
    `SELECT id, comercio_id, nombre, precio_centavos, fotos FROM productos
      WHERE comercio_id IN (${marcadores}) AND activo = 1
      ORDER BY comercio_id, creado_en`,
  )
    .bind(...comercioIds)
    .all<{
      id: string;
      comercio_id: string;
      nombre: string;
      precio_centavos: number;
      fotos: string;
    }>();

  for (const fila of results) {
    const lista = porComercio.get(fila.comercio_id) ?? [];

    if (lista.length < 3) {
      lista.push({
        id: fila.id,
        nombre: fila.nombre,
        precio: aPesos(Number(fila.precio_centavos)),
        foto: leerPrimeraFoto(fila.fotos),
      });
      porComercio.set(fila.comercio_id, lista);
    }
  }

  return porComercio;
}

/** Las líneas de varios pedidos, agrupadas por pedido, en una sola consulta. */
async function lineasDePedidos(env: Env, pedidoIds: string[]) {
  const porPedido = new Map<
    string,
    Array<{
      productoId: string | null;
      nombre: string;
      precio: number;
      unidadVenta: string;
      escalon: number;
      subtotal: number;
    }>
  >();

  if (pedidoIds.length === 0) {
    return porPedido;
  }

  const marcadores = pedidoIds.map(() => '?').join(',');
  const { results } = await env.DB.prepare(
    `SELECT pedido_id, producto_id, nombre, precio_centavos, unidad_venta, escalon,
            subtotal_centavos
       FROM pedido_items WHERE pedido_id IN (${marcadores})`,
  )
    .bind(...pedidoIds)
    .all<{
      pedido_id: string;
      producto_id: string | null;
      nombre: string;
      precio_centavos: number;
      unidad_venta: string;
      escalon: number;
      subtotal_centavos: number;
    }>();

  for (const fila of results) {
    const lista = porPedido.get(fila.pedido_id) ?? [];

    lista.push({
      productoId: fila.producto_id,
      nombre: fila.nombre,
      precio: aPesos(Number(fila.precio_centavos)),
      unidadVenta: fila.unidad_venta,
      escalon: Number(fila.escalon),
      subtotal: aPesos(Number(fila.subtotal_centavos)),
    });
    porPedido.set(fila.pedido_id, lista);
  }

  return porPedido;
}

/** Fila cruda de la tabla de ofertas, tal como sale de la base. */
type FilaOferta = {
  id: string;
  tipo: string;
  titulo: string;
  descripcion: string | null;
  porcentaje: number | null;
  cantidad: number | null;
  precio_final_centavos: number;
  precio_lista_centavos: number;
  foto_url: string | null;
  desde?: string | null;
  hasta?: string | null;
  activa?: number;
};

/**
 * Le pega a cada oferta los productos que incluye.
 *
 * En una sola consulta para todas: con una por oferta, un comercio con veinte
 * promociones haría veintiuna vueltas a la base para pintar una pantalla.
 */
async function conProductos(env: Env, ofertas: FilaOferta[]) {
  if (ofertas.length === 0) {
    return [];
  }

  const marcadores = ofertas.map(() => '?').join(',');
  const { results: filas } = await env.DB.prepare(
    `SELECT op.oferta_id, op.producto_id, op.unidades, p.nombre, p.fotos,
            p.precio_centavos, p.unidad_venta
       FROM oferta_productos op
       JOIN productos p ON p.id = op.producto_id
      WHERE op.oferta_id IN (${marcadores})`,
  )
    .bind(...ofertas.map((oferta) => oferta.id))
    .all<{
      oferta_id: string;
      producto_id: string;
      unidades: number;
      nombre: string;
      fotos: string;
      precio_centavos: number;
      unidad_venta: string;
    }>();

  const porOferta = new Map<string, typeof filas>();

  for (const fila of filas) {
    const lista = porOferta.get(fila.oferta_id) ?? [];

    lista.push(fila);
    porOferta.set(fila.oferta_id, lista);
  }

  return ofertas.map((oferta) => ({
    id: oferta.id,
    tipo: oferta.tipo,
    titulo: oferta.titulo,
    descripcion: oferta.descripcion,
    porcentaje: oferta.porcentaje,
    cantidad: oferta.cantidad,
    precioFinal: aPesos(Number(oferta.precio_final_centavos)),
    precioLista: aPesos(Number(oferta.precio_lista_centavos)),
    fotoUrl: oferta.foto_url,
    desde: oferta.desde ?? null,
    hasta: oferta.hasta ?? null,
    activa: oferta.activa === undefined ? true : oferta.activa === 1,
    productos: (porOferta.get(oferta.id) ?? []).map((fila) => ({
      id: fila.producto_id,
      nombre: fila.nombre,
      unidades: Number(fila.unidades),
      precio: aPesos(Number(fila.precio_centavos)),
      unidadVenta: fila.unidad_venta,
      foto: leerPrimeraFoto(fila.fotos),
    })),
  }));
}

/** La primera foto del producto, para ilustrar la oferta sin cargar todas. */
function leerPrimeraFoto(fotos: string) {
  try {
    const lista = JSON.parse(fotos) as unknown;

    return Array.isArray(lista) && typeof lista[0] === 'string' ? lista[0] : null;
  } catch {
    return null;
  }
}

/** Exige que quien llama tenga alguno de los roles indicados, aprobado. */
async function exigirRol(
  request: Request,
  env: Env,
  cors: Record<string, string>,
  roles: string[],
): Promise<{ usuario: UsuarioSesion } | { respuesta: Response }> {
  const usuario = await usuarioActual(request, env);

  if (!usuario) {
    return { respuesta: error('Necesitás iniciar sesión', 401, cors) };
  }

  const marcadores = roles.map(() => '?').join(',');
  const tiene = await env.DB.prepare(
    `SELECT 1 AS ok FROM usuario_roles
      WHERE usuario_id = ? AND rol IN (${marcadores}) AND estado = 'aprobado'`,
  )
    .bind(usuario.id, ...roles)
    .first();

  if (!tiene) {
    /* 404 y no 403: responder "prohibido" confirma que la ruta existe. */
    return { respuesta: error('No encontrado', 404, cors) };
  }

  return { usuario };
}

/**
 * Distancia en kilómetros entre dos puntos, por la fórmula del semiverseno.
 *
 * Para las distancias de un pueblo alcanza de sobra y no necesita ninguna
 * biblioteca.
 */
function distanciaKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const radio = 6371;
  const aRad = (grados: number) => (grados * Math.PI) / 180;
  const dLat = aRad(lat2 - lat1);
  const dLon = aRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(aRad(lat1)) * Math.cos(aRad(lat2)) * Math.sin(dLon / 2) ** 2;

  return Math.round(radio * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 100) / 100;
}

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
