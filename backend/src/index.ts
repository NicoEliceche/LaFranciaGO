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
