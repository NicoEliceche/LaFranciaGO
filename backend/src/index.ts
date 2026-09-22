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
import {
  crearPedidoRecuperacion,
  duenoDelToken,
  enviarCorreoRecuperacion,
  usarPedidoRecuperacion,
} from './recuperacion';
import { crearPreferencia, guardarCuentaComercio, procesarAviso } from './pagos';
import {
  MOTIVOS_CANCELACION,
  MOTIVOS_RECHAZO,
  puedeIr,
  resolverMotivo,
  sumarExtras,
} from './extras';
import {
  CAPACIDAD,
  LITROS_POR_TAMANO,
  NOMBRE_VEHICULO,
  VEHICULOS_POR_ROL,
  entraDeUnaVez,
  litrosDeItems,
  repartirEnPartes,
  tamanoSugerido,
  vehiculosQueEntran,
  viajesNecesarios,
} from './logistica';
import {
  DIAS,
  aHora,
  aMinutos,
  descontarStock,
  estaAbierto,
  estadoDeStock,
  proximaApertura,
} from './comercio';
import { rutasGestion } from './gestion';
import { rutaVersiones } from './versiones';

/**
 * Lo que sale por mes el sistema de gestión, en centavos.
 *
 * Vive acá y no en las pantallas porque el día que cambie tiene que cambiar
 * en la web y en las dos aplicaciones del teléfono a la vez. Una copia en
 * cada lado se desincroniza, y un cartel que diga un precio distinto del que
 * se cobra es un problema serio.
 */
const PRECIO_GESTION_CENTAVOS = 7_999_900;

/**
 * Los únicos tipos de archivo que se aceptan y se sirven.
 *
 * Una sola lista para las dos puntas: si subir y servir tuvieran cada uno la
 * suya, agregar un formato en un lado y olvidarlo en el otro dejaría archivos
 * que entran pero no se pueden mostrar, o peor, que se sirven con un tipo que
 * el navegador ejecuta.
 */
const TIPOS_MEDIA = ['image/webp', 'image/jpeg', 'image/png', 'video/mp4', 'video/webm'];

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

    /* El mismo límite que el ingreso, contado por IP: sin esto se pueden
       crear cuentas en masa desde una sola máquina, que es como se arma un
       registro basura o se tantea qué emails ya existen.

       Se cuenta contra el email pedido y la IP, así que alguien probando
       muchos emails distintos igual choca con el límite por IP. */
    const ipRegistro = request.headers.get('CF-Connecting-IP') ?? 'desconocida';

    if (await intentosAgotados(env, email, ipRegistro)) {
      return respuestaBloqueado(cors);
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
      /* Se cuenta como intento fallido: probar emails contra el registro es
         justamente la forma de averiguar quién tiene cuenta, y sin contarlo
         el límite de arriba no llega a activarse nunca. */
      await registrarIntentoFallido(env, email, ipRegistro);

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
        /* El mismo token que va en la cookie, también en el cuerpo. El
           navegador usa la cookie y lo ignora; las aplicaciones del teléfono
           lo necesitan porque ahí no hay cookies que sobrevivan a cerrar la
           aplicación. */
        token,
        expira,
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

  /**
   * Pide el enlace para recuperar la contraseña.
   *
   * Responde lo mismo exista o no la cuenta: si dijera "ese email no está
   * registrado", cualquiera podría averiguar quién tiene cuenta probando
   * direcciones.
   */
  if (ruta === '/auth/recuperar' && metodo === 'POST') {
    const body = await leerJson<{ email?: string }>(request);
    const email = (body.email ?? '').trim().toLowerCase();

    const respuesta = json(
      { ok: true, mensaje: 'Si esa cuenta existe, te llega un correo con el enlace.' },
      {},
      cors,
    );

    if (!email || !email.includes('@')) {
      return respuesta;
    }

    const enlace = await crearPedidoRecuperacion(env, email, env.APP_PUBLIC_URL || env.APP_URL);

    if (enlace) {
      /* El envío no bloquea la respuesta: tardar en contestar según si la
         cuenta existe también sería una forma de averiguarlo. */
      await enviarCorreoRecuperacion(env, email, enlace);
    }

    return respuesta;
  }

  /** Cambia la contraseña con el token del enlace. */
  if (ruta === '/auth/recuperar/confirmar' && metodo === 'POST') {
    const body = await leerJson<{ token?: string; password?: string }>(request);
    const token = String(body.token ?? '');
    const password = String(body.password ?? '');

    if (!token) {
      return error('Falta el enlace de recuperación.', 400, cors);
    }

    /* La contraseña nueva pasa por las mismas reglas que en el registro: de
       poco sirve recuperar la cuenta para dejarla con "123456". El dueño del
       token se resuelve primero, para poder comprobar también que la
       contraseña no contenga su propio email ni su nombre. */
    const dueno = await duenoDelToken(env, token);

    if (!dueno) {
      return error('El enlace no es válido.', 400, cors);
    }

    const problema = validarPassword(password, dueno.email, dueno.nombre);

    if (problema) {
      return error(problema, 400, cors);
    }

    const resultado = await usarPedidoRecuperacion(env, token, password);

    if (!resultado.ok) {
      return error(resultado.motivo, 400, cors);
    }

    return json({ ok: true }, {}, cors);
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

    /* El rol con el que entró queda guardado: es desde dónde va a mirar la
       app hasta que lo cambie. Sin esto, entrar como delivery mostraba el
       panel pero la cuenta seguía figurando como cliente, y el selector de
       "cambiar de cuenta" quedaba desfasado de lo que estaba viendo. */
    await env.DB.prepare('UPDATE usuarios SET rol = ? WHERE id = ?')
      .bind(rolPedido, usuario.id)
      .run();

    const { token, expira } = await crearSesion(env, usuario.id);

    return json(
      {
        id: usuario.id,
        email: usuario.email,
        nombre: usuario.nombre,
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

    if (!usuario) {
      return error('Sin sesión', 401, cors);
    }

    /* Con qué roles puede entrar esta persona. Una misma cuenta puede ser
       cliente y comercio a la vez, y quien tiene comercio quiere mirar la app
       como la ve un vecino: sin esta lista no habría cómo ofrecer el cambio. */
    const { results: roles } = await env.DB.prepare(
      "SELECT rol FROM usuario_roles WHERE usuario_id = ? AND estado = 'aprobado'",
    )
      .bind(usuario.id)
      .all<{ rol: string }>();

    return json(
      {
        ...usuario,
        /* Cliente siempre está: cualquiera que tenga cuenta puede comprar. */
        roles: ['cliente', ...roles.map((fila) => fila.rol).filter((rol) => rol !== 'cliente')],
      },
      {},
      cors,
    );
  }

  /**
   * Cambia con qué rol se está mirando la app.
   *
   * No es un login nuevo: la sesión es la misma persona. Sólo cambia desde
   * qué lugar mira, y por eso se comprueba que tenga ese rol aprobado en
   * lugar de confiar en lo que mande el navegador.
   */
  if (ruta === '/auth/rol' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<{ rol?: string }>(request);
    const rol = String(body.rol ?? '');

    if (rol !== 'cliente') {
      const aprobado = await env.DB.prepare(
        "SELECT 1 AS ok FROM usuario_roles WHERE usuario_id = ? AND rol = ? AND estado = 'aprobado'",
      )
        .bind(usuario.id, rol)
        .first();

      if (!aprobado) {
        return error('No tenés ese tipo de cuenta aprobado.', 403, cors);
      }
    }

    await env.DB.prepare('UPDATE usuarios SET rol = ? WHERE id = ?').bind(rol, usuario.id).run();

    return json({ ok: true, rol }, {}, cors);
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

    /* La persona que se postuló tiene que enterarse: estuvo esperando una
       respuesta, y con "pedimos cambios" además necesita saber cuáles. */
    const TITULOS: Record<string, string> = {
      aprobado: 'Tu solicitud fue aprobada',
      rechazado: 'Tu solicitud fue rechazada',
      cambios: 'Te pedimos algunos cambios',
    };

    await avisar(env, postulacion.usuario_id, {
      tipo: 'postulacion',
      titulo: TITULOS[decision] ?? 'Novedades de tu solicitud',
      texto:
        nota ||
        (decision === 'aprobado'
          ? 'Ya podés entrar con tu nueva cuenta.'
          : 'Mirá el detalle en tu solicitud.'),
      enlace: decision === 'aprobado' ? '/ingresar' : '/mi-cuenta',
    });

    return json({ ok: true, estado: decision }, {}, cors);
  }

  /**
   * Los números de la plataforma.
   *
   * Responde tres preguntas, en ese orden: qué necesita atención ahora, cómo
   * viene el negocio, y quién está vendiendo. Lo accionable primero, porque
   * es a lo que se entra.
   */
  if (ruta === '/admin/metricas' && metodo === 'GET') {
    const admin = await exigirAdmin(request, env, cors);

    if ('respuesta' in admin) {
      return admin.respuesta;
    }

    /* Los cancelados no cuentan como venta. */
    const totales = await env.DB.prepare(
      `SELECT
         COUNT(*) FILTER (WHERE date(creado_en) = date('now')) AS pedidos_hoy,
         COALESCE(SUM(total_centavos) FILTER (WHERE date(creado_en) = date('now')), 0) AS ventas_hoy,
         COUNT(*) FILTER (WHERE date(creado_en) = date('now', '-1 day')) AS pedidos_ayer,
         COALESCE(SUM(total_centavos) FILTER (WHERE date(creado_en) = date('now', '-1 day')), 0) AS ventas_ayer,
         COUNT(*) FILTER (WHERE creado_en >= datetime('now', '-7 days')) AS pedidos_semana,
         COALESCE(SUM(total_centavos) FILTER (WHERE creado_en >= datetime('now', '-7 days')), 0) AS ventas_semana,
         COUNT(*) FILTER (WHERE creado_en >= datetime('now', '-14 days') AND creado_en < datetime('now', '-7 days')) AS pedidos_semana_previa,
         COALESCE(SUM(total_centavos) FILTER (WHERE creado_en >= datetime('now', '-14 days') AND creado_en < datetime('now', '-7 days')), 0) AS ventas_semana_previa
       FROM pedidos
      WHERE estado != 'cancelado' AND pedido_padre_id IS NULL`,
    ).first<Record<string, number>>();

    /* La comisión sale de los pagos aprobados: es plata que efectivamente
       entró, no lo que se facturó. */
    const comisiones = await env.DB.prepare(
      `SELECT
         COALESCE(SUM(comision_centavos) FILTER (WHERE date(creado_en) = date('now')), 0) AS hoy,
         COALESCE(SUM(comision_centavos) FILTER (WHERE creado_en >= datetime('now', '-7 days')), 0) AS semana,
         COALESCE(SUM(comision_centavos), 0) AS total
       FROM pagos WHERE estado = 'aprobado'`,
    ).first<Record<string, number>>();

    /* Lo que necesita que alguien haga algo. */
    const pendientes = await env.DB.prepare(
      `SELECT
         (SELECT COUNT(*) FROM postulaciones WHERE estado = 'pendiente') AS postulaciones,
         (SELECT COUNT(*) FROM fraccionamientos WHERE estado = 'pendiente') AS fraccionamientos,
         (SELECT COUNT(*) FROM pedidos p
            LEFT JOIN envios e ON e.pedido_id = p.id
           WHERE p.estado = 'proceso' AND p.creado_en < datetime('now', '-2 hours')
             AND (e.id IS NULL OR e.estado = 'buscando')) AS pedidos_trabados,
         (SELECT COUNT(*) FROM comercios WHERE estado = 'pendiente') AS comercios_pendientes`,
    ).first<Record<string, number>>();

    /* Quién está vendiendo: es lo que decide a quién llamar. */
    const { results: comercios } = await env.DB.prepare(
      `SELECT c.id, c.nombre, c.rubro_nombre, c.premium, c.estado,
              COUNT(p.id) AS pedidos,
              COALESCE(SUM(p.total_centavos), 0) AS ventas
         FROM comercios c
         LEFT JOIN pedidos p ON p.comercio_id = c.id
              AND p.estado != 'cancelado'
              AND p.pedido_padre_id IS NULL
              AND p.creado_en >= datetime('now', '-30 days')
        GROUP BY c.id
        ORDER BY ventas DESC
        LIMIT 20`,
    ).all<{
      id: string;
      nombre: string;
      rubro_nombre: string;
      premium: number;
      estado: string;
      pedidos: number;
      ventas: number;
    }>();

    /* Cómo viene el reparto. */
    const reparto = await env.DB.prepare(
      `SELECT
         (SELECT COUNT(DISTINCT repartidor_id) FROM envios
           WHERE asignado_en >= datetime('now', '-7 days')) AS activos,
         (SELECT COUNT(*) FROM envios
           WHERE estado = 'entregado' AND entregado_en >= datetime('now', '-7 days')) AS entregas_semana,
         (SELECT COUNT(*) FROM envios WHERE estado NOT IN ('entregado', 'cancelado')) AS en_curso,
         (SELECT COUNT(*) FROM usuario_roles
           WHERE rol IN ('delivery', 'fletero') AND estado = 'aprobado') AS registrados`,
    ).first<Record<string, number>>();

    return json(
      {
        hoy: {
          pedidos: Number(totales?.pedidos_hoy ?? 0),
          ventas: aPesos(Number(totales?.ventas_hoy ?? 0)),
          comision: aPesos(Number(comisiones?.hoy ?? 0)),
        },
        ayer: {
          pedidos: Number(totales?.pedidos_ayer ?? 0),
          ventas: aPesos(Number(totales?.ventas_ayer ?? 0)),
        },
        semana: {
          pedidos: Number(totales?.pedidos_semana ?? 0),
          ventas: aPesos(Number(totales?.ventas_semana ?? 0)),
          comision: aPesos(Number(comisiones?.semana ?? 0)),
        },
        semanaPrevia: {
          pedidos: Number(totales?.pedidos_semana_previa ?? 0),
          ventas: aPesos(Number(totales?.ventas_semana_previa ?? 0)),
        },
        comisionTotal: aPesos(Number(comisiones?.total ?? 0)),
        ticketPromedio:
          Number(totales?.pedidos_semana ?? 0) > 0
            ? aPesos(
                Math.round(
                  Number(totales?.ventas_semana ?? 0) / Number(totales?.pedidos_semana ?? 1),
                ),
              )
            : 0,
        pendientes: {
          postulaciones: Number(pendientes?.postulaciones ?? 0),
          fraccionamientos: Number(pendientes?.fraccionamientos ?? 0),
          pedidosTrabados: Number(pendientes?.pedidos_trabados ?? 0),
          comercios: Number(pendientes?.comercios_pendientes ?? 0),
        },
        reparto: {
          activos: Number(reparto?.activos ?? 0),
          entregasSemana: Number(reparto?.entregas_semana ?? 0),
          enCurso: Number(reparto?.en_curso ?? 0),
          registrados: Number(reparto?.registrados ?? 0),
        },
        comercios: comercios.map((fila) => ({
          id: fila.id,
          nombre: fila.nombre,
          rubro: fila.rubro_nombre,
          premium: Boolean(fila.premium),
          estado: fila.estado,
          pedidos: Number(fila.pedidos),
          ventas: aPesos(Number(fila.ventas)),
        })),
      },
      {},
      cors,
    );
  }

  /**
   * Suspender un comercio o marcarlo destacado.
   *
   * Un comercio suspendido deja de aparecer en el buscador pero conserva sus
   * pedidos: borrarlo perdería el historial de quienes le compraron.
   */
  const comercioAdmin = /^\/admin\/comercios\/([\w-]+)$/.exec(ruta);

  if (comercioAdmin && metodo === 'PATCH') {
    const admin = await exigirAdmin(request, env, cors);

    if ('respuesta' in admin) {
      return admin.respuesta;
    }

    const body = await leerJson<{ estado?: string; premium?: boolean }>(request);
    const cambios: string[] = [];
    const valores: unknown[] = [];

    if (body.estado) {
      if (!['aprobado', 'suspendido', 'rechazado', 'pendiente'].includes(body.estado)) {
        return error('Ese estado no existe.', 400, cors);
      }

      cambios.push('estado = ?');
      valores.push(body.estado);
    }

    if (typeof body.premium === 'boolean') {
      cambios.push('premium = ?');
      valores.push(body.premium ? 1 : 0);
    }

    if (cambios.length === 0) {
      return error('No hay nada que cambiar.', 400, cors);
    }

    await env.DB.prepare(`UPDATE comercios SET ${cambios.join(', ')} WHERE id = ?`)
      .bind(...valores, comercioAdmin[1])
      .run();

    return json({ ok: true }, {}, cors);
  }

  // ── Comercios ──

  /* Qué versión debería estar usando cada aplicación. Va antes de todo y
     sin sesión: una aplicación que quedó vieja tiene que poder enterarse
     aunque no pueda iniciar sesión. */
  const versiones = rutaVersiones(ruta, metodo, request, env, cors);

  if (versiones) {
    return versiones;
  }

  if (ruta === '/comercios' && metodo === 'GET') {
    const rubro = url.searchParams.get('rubro');
    const busqueda = url.searchParams.get('q');

    let sql =
      "SELECT id, nombre, rubro_id, rubro_nombre, direccion, lat, lon, telefono, horario, zona, descripcion, logo_url, premium, minimo_centavos, cerrado_temporal, puntaje, resenas_count FROM comercios WHERE estado = 'aprobado'";
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

    /* Los horarios de todos, para poder decir cuáles están abiertos ahora.
       Una sola consulta: con una por comercio, listar veinte serían veintiún
       viajes a la base. */
    const horarios = await horariosDe(
      env,
      results.map((fila) => String(fila.id)),
    );

    return json(
      {
        comercios: results.map((fila) => {
          const suyos = horarios.get(String(fila.id)) ?? [];

          return {
            ...comercioSalida(fila),
            destacados: destacados.get(String(fila.id)) ?? [],
            abierto: estaAbierto(suyos, Boolean(fila.cerrado_temporal)),
            proximaApertura: proximaApertura(suyos),
          };
        }),
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
      `SELECT id, categoria_id, nombre, descripcion, precio_centavos, unidad_venta,
              fotos, video_url, stock, COALESCE(tamano, 'mediano') AS tamano
         FROM productos WHERE comercio_id = ? AND activo = 1`,
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
              fotos, video_url, stock, activo, costo_centavos, codigo_barras
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
      `SELECT p.id, p.codigo, p.estado, p.preparacion, p.total_centavos, p.direccion_texto,
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

    /* Con qué vehículo trabaja: decide qué pedidos puede llevar y cuáles se
       le muestran como "necesitás un auto". */
    const suVehiculo = await env.DB.prepare(
      `SELECT rol, vehiculo FROM usuario_roles
        WHERE usuario_id = ? AND rol IN ('delivery', 'fletero') AND estado = 'aprobado'
        ORDER BY vehiculo IS NULL
        LIMIT 1`,
    )
      .bind(repartidor.usuario.id)
      .first<{ rol: string; vehiculo: string | null }>();

    const vehiculo = suVehiculo?.vehiculo ?? (suVehiculo?.rol === 'fletero' ? 'camioneta' : 'moto');

    const { results } = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.direccion_texto, p.total_centavos, p.creado_en,
              p.volumen_litros, p.preferencia_envio, p.parte_numero, p.partes_total,
              p.preparacion,
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
          /* Cada uno ve lo suyo: una mudanza no tiene por qué aparecer entre
             los pedidos de almacén, ni al revés. */
          AND p.tipo = ?
          /* Un pedido partido se reparte por sus partes, no entero: si
             apareciera el original, se entregaría dos veces lo mismo. */
          AND p.id NOT IN (SELECT DISTINCT pedido_padre_id FROM pedidos WHERE pedido_padre_id IS NOT NULL)
        ORDER BY p.creado_en DESC
        LIMIT 50`,
    )
      .bind(suVehiculo?.rol === 'fletero' ? 'flete' : 'pedido')
      .all();

    const conDistancia = results.map((fila) => {
      const comercioLat = fila.comercio_lat as number | null;
      const comercioLon = fila.comercio_lon as number | null;

      /* Sin coordenadas del comercio o del repartidor no hay distancia que
         calcular: se deja en null y esos van al final de la lista. */
      const distancia =
        Number.isFinite(lat) && Number.isFinite(lon) && comercioLat && comercioLon
          ? distanciaKm(lat, lon, comercioLat, comercioLon)
          : null;

      const litros = Number(fila.volumen_litros ?? 0);
      const entra = entraDeUnaVez(litros, vehiculo);

      return {
        ...fila,
        total: aPesos(Number(fila.total_centavos)),
        distanciaKm: distancia,
        litros,
        /* Si le entra tal cual, o si va a tener que hacer más de un viaje. */
        entraEnTuVehiculo: entra,
        viajes: viajesNecesarios(litros, vehiculo),
        /* Con qué vehículos entra de una: la tarjeta muestra el ícono. */
        vehiculos: vehiculosQueEntran(
          litros,
          suVehiculo?.rol === 'fletero' ? 'fletero' : 'delivery',
        ),
      };
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

    return json({ pedidos: conDistancia, vehiculo }, {}, cors);
  }

  const detallePedido = /^\/delivery\/pedidos\/([\w-]+)$/.exec(ruta);

  if (detallePedido && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    /* Tener el rol no alcanza para ver cualquier pedido: acá salen el nombre
       y el teléfono del cliente y a dónde vive. Sin esta condición, cualquier
       repartidor registrado leía los datos de un pedido ajeno con sólo tener
       el id, aunque lo estuviera llevando otro.

       Se ve si está disponible para tomar —el mismo criterio que la lista de
       disponibles— o si es suyo porque ya lo tomó. */
    const pedido = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.direccion_texto, p.subtotal_centavos, p.envio_centavos,
              p.total_centavos, p.metodo_pago, p.creado_en, p.usuario_id,
              c.nombre AS comercio, c.direccion AS comercio_direccion,
              c.telefono AS comercio_telefono,
              u.nombre AS cliente, u.telefono AS cliente_telefono
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         JOIN usuarios u ON u.id = p.usuario_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.id = ?
          AND (
            e.repartidor_id = ?
            OR (p.estado = 'proceso' AND (e.id IS NULL OR e.estado = 'buscando'))
          )`,
    )
      .bind(detallePedido[1], repartidor.usuario.id)
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

    /* El cliente quiere saber que su pedido ya tiene quién lo lleve: es la
       diferencia entre esperar sabiendo y esperar sin noticias. */
    const duenoPedido = await env.DB.prepare(
      'SELECT usuario_id, codigo FROM pedidos WHERE id = ?',
    )
      .bind(tomar[1])
      .first<{ usuario_id: string; codigo: string }>();

    /* El chat pasa de dos a tres: se anuncia quién se sumó, para que el
       cliente y el comercio sepan con quién están hablando. */
    await mensajeDeSistema(
      env,
      tomar[1],
      repartidor.usuario.id,
      `${repartidor.usuario.nombre} se sumó al chat al tomar el pedido.`,
    );

    if (duenoPedido) {
      await avisar(env, duenoPedido.usuario_id, {
        tipo: 'envio',
        titulo: `Tu pedido ${duenoPedido.codigo} ya tiene repartidor`,
        texto: `${repartidor.usuario.nombre} lo va a llevar.`,
        enlace: '/pedidos',
      });
    }

    return json({ ok: true }, {}, cors);
  }

  /**
   * Los pedidos que este repartidor ya tomó y todavía no entregó.
   *
   * Son su trabajo del momento: sin esta lista, tomar un pedido lo hacía
   * desaparecer de la pantalla y no quedaba dónde seguirlo ni cómo marcarlo
   * entregado.
   */
  if (ruta === '/delivery/mis-envios' && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const { results } = await env.DB.prepare(
      `SELECT e.id, e.estado, e.asignado_en, e.entregado_en,
              p.id AS pedido_id, p.codigo, p.direccion_texto, p.total_centavos,
              p.metodo_pago,
              c.nombre AS comercio, c.direccion AS comercio_direccion,
              c.telefono AS comercio_telefono,
              u.nombre AS cliente, u.telefono AS cliente_telefono,
              (SELECT COUNT(*) FROM pedido_items pi WHERE pi.pedido_id = p.id) AS items
         FROM envios e
         JOIN pedidos p ON p.id = e.pedido_id
         JOIN comercios c ON c.id = p.comercio_id
         JOIN usuarios u ON u.id = p.usuario_id
        WHERE e.repartidor_id = ? AND e.estado NOT IN ('entregado', 'cancelado')
        ORDER BY e.asignado_en ASC`,
    )
      .bind(repartidor.usuario.id)
      .all<Record<string, unknown>>();

    return json(
      {
        envios: results.map((fila) => ({
          ...fila,
          total: aPesos(Number(fila.total_centavos)),
        })),
      },
      {},
      cors,
    );
  }

  const avanzar = /^\/delivery\/envios\/([\w-]+)\/estado$/.exec(ruta);

  if (avanzar && metodo === 'POST') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const body = await leerJson<{ estado?: string }>(request);
    const destino = String(body.estado ?? '');

    /* El envío avanza en un orden: se retira del comercio, se sale, se
       entrega. Saltear pasos dejaría un pedido "entregado" que el comercio
       todavía no preparó, así que sólo se acepta el paso siguiente. */
    const SIGUIENTE: Record<string, string> = {
      asignado: 'retirado',
      retirado: 'en_camino',
      en_camino: 'entregado',
    };

    /* El envío tiene que ser suyo: sin esta condición, cualquier repartidor
       podría dar por entregado el pedido de otro conociendo el id. */
    const envio = await env.DB.prepare(
      'SELECT id, estado, pedido_id FROM envios WHERE id = ? AND repartidor_id = ?',
    )
      .bind(avanzar[1], repartidor.usuario.id)
      .first<{ id: string; estado: string; pedido_id: string }>();

    if (!envio) {
      return error('No encontrado', 404, cors);
    }

    const esperado = SIGUIENTE[envio.estado];

    if (!esperado) {
      return error('Este envío ya está cerrado.', 409, cors);
    }

    if (destino && destino !== esperado) {
      return error(`Después de "${envio.estado}" viene "${esperado}".`, 409, cors);
    }

    const escrituras = [
      env.DB.prepare(
        `UPDATE envios
            SET estado = ?, entregado_en = CASE WHEN ? = 'entregado' THEN datetime('now') ELSE entregado_en END
          WHERE id = ?`,
      ).bind(esperado, esperado, envio.id),
    ];

    /* Entregar cierra también el pedido: si sólo se cerrara el envío, el
       cliente seguiría viendo "en proceso" con el paquete en la mano. */
    if (esperado === 'entregado') {
      escrituras.push(
        env.DB.prepare("UPDATE pedidos SET estado = 'terminado' WHERE id = ?").bind(
          envio.pedido_id,
        ),
      );
    }

    await env.DB.batch(escrituras);

    /* Sólo dos pasos le importan al cliente: cuando sale y cuando llega.
       "Retirado" es información del comercio, no suya. */
    const TEXTO_CLIENTE: Record<string, { titulo: string; texto: string }> = {
      en_camino: { titulo: 'Tu pedido va en camino', texto: 'Ya salió para tu dirección.' },
      entregado: { titulo: 'Pedido entregado', texto: '¡Que lo disfrutes!' },
    };

    const paraCliente = TEXTO_CLIENTE[esperado];

    if (paraCliente) {
      const duenoPedido = await env.DB.prepare(
        'SELECT usuario_id, codigo FROM pedidos WHERE id = ?',
      )
        .bind(envio.pedido_id)
        .first<{ usuario_id: string; codigo: string }>();

      if (duenoPedido) {
        await avisar(env, duenoPedido.usuario_id, {
          tipo: 'envio',
          titulo: `${paraCliente.titulo} (${duenoPedido.codigo})`,
          texto: paraCliente.texto,
          enlace: '/pedidos',
        });
      }
    }

    return json({ ok: true, estado: esperado }, {}, cors);
  }

  /**
   * Con qué vehículo trabaja el repartidor.
   *
   * Decide qué pedidos puede tomar, así que se guarda en su rol y no en una
   * preferencia del navegador: alguien podría declarar una camioneta desde el
   * teléfono y llevarse un flete que no le entra.
   */
  if (ruta === '/delivery/vehiculo' && metodo === 'POST') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const body = await leerJson<{ vehiculo?: string; rol?: string }>(request);
    const vehiculo = String(body.vehiculo ?? '');
    const rol = body.rol === 'fletero' ? 'fletero' : 'delivery';

    if (!(VEHICULOS_POR_ROL[rol] ?? []).includes(vehiculo)) {
      return error('Ese vehículo no corresponde a este tipo de cuenta.', 400, cors);
    }

    await env.DB.prepare(
      'UPDATE usuario_roles SET vehiculo = ? WHERE usuario_id = ? AND rol = ?',
    )
      .bind(vehiculo, repartidor.usuario.id, rol)
      .run();

    return json({ ok: true, vehiculo }, {}, cors);
  }

  /** Qué vehículo tiene declarado. */
  if (ruta === '/delivery/vehiculo' && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const { results } = await env.DB.prepare(
      "SELECT rol, vehiculo FROM usuario_roles WHERE usuario_id = ? AND estado = 'aprobado'",
    )
      .bind(repartidor.usuario.id)
      .all<{ rol: string; vehiculo: string | null }>();

    return json({ roles: results }, {}, cors);
  }

  /**
   * Pide partir un pedido en varias entregas.
   *
   * Si la app calculó que el pedido entra en su vehículo, no se parte solo:
   * queda pendiente de que el comercio lo confirme. El comercio tiene el
   * pedido armado delante y puede ver si de verdad no entraba —una caja de
   * forma rara, algo frágil que no se puede apilar.
   *
   * El pedido queda guardado aunque se apruebe, para poder mirar después si
   * alguien pide fraccionar sistemáticamente lo que sí le entra.
   */
  const pedirFraccionar = /^\/delivery\/pedidos\/([\w-]+)\/fraccionar$/.exec(ruta);

  if (pedirFraccionar && metodo === 'POST') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const body = await leerJson<{ partes?: number; motivo?: string }>(request);
    const partes = Math.trunc(Number(body.partes ?? 0));

    if (partes < 2 || partes > 5) {
      return error('Se puede partir en 2 a 5 entregas.', 400, cors);
    }

    const pedido = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.volumen_litros, p.envio_centavos, p.total_centavos,
              p.usuario_id, c.usuario_id AS comercio_usuario_id
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
        WHERE p.id = ? AND p.estado = 'proceso'`,
    )
      .bind(pedirFraccionar[1])
      .first<{
        id: string;
        codigo: string;
        volumen_litros: number;
        envio_centavos: number;
        total_centavos: number;
        usuario_id: string;
        comercio_usuario_id: string | null;
      }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    /* Con qué vehículo trabaja: es contra eso que se mide si entra. */
    const suRol = await env.DB.prepare(
      "SELECT vehiculo FROM usuario_roles WHERE usuario_id = ? AND rol IN ('delivery', 'fletero') AND estado = 'aprobado' AND vehiculo IS NOT NULL LIMIT 1",
    )
      .bind(repartidor.usuario.id)
      .first<{ vehiculo: string }>();

    const vehiculo = suRol?.vehiculo ?? 'moto';
    const entraba = entraDeUnaVez(Number(pedido.volumen_litros ?? 0), vehiculo);

    const id = nuevoId();

    await env.DB.prepare(
      `INSERT INTO fraccionamientos (id, pedido_id, repartidor_id, partes, motivo, entraba, estado)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        pedido.id,
        repartidor.usuario.id,
        partes,
        String(body.motivo ?? '').slice(0, 300) || null,
        entraba ? 1 : 0,
        /* Si no entraba, la app ya sabe que hace falta: no se molesta al
           comercio con algo que es evidente. */
        entraba ? 'pendiente' : 'aprobado',
      )
      .run();

    if (!entraba) {
      await partirPedido(env, pedido.id, partes);

      return json({ ok: true, estado: 'aprobado', partes }, {}, cors);
    }

    /* Entraba: lo decide el comercio. Se le avisa por notificación y queda
       escrito en el chat del pedido, que es donde va a estar mirando. */
    if (pedido.comercio_usuario_id) {
      await avisar(env, pedido.comercio_usuario_id, {
        tipo: 'pedido',
        titulo: `Piden partir el pedido ${pedido.codigo}`,
        texto: `${repartidor.usuario.nombre} quiere hacerlo en ${partes} entregas. Según lo cargado, entraba en su ${NOMBRE_VEHICULO[vehiculo]?.toLowerCase() ?? vehiculo}.`,
        enlace: '/panel/comercio',
      });
    }

    await env.DB.prepare(
      'INSERT INTO pedido_mensajes (id, pedido_id, autor_id, texto) VALUES (?, ?, ?, ?)',
    )
      .bind(
        nuevoId(),
        pedido.id,
        repartidor.usuario.id,
        `Pido partir este pedido en ${partes} entregas.${body.motivo ? ` Motivo: ${String(body.motivo).slice(0, 200)}` : ''}`,
      )
      .run()
      .catch(() => undefined);

    return json({ ok: true, estado: 'pendiente', partes }, {}, cors);
  }

  /** El comercio resuelve un pedido de fraccionamiento. */
  const resolverFraccion = /^\/mi-comercio\/fraccionamientos\/([\w-]+)$/.exec(ruta);

  if (resolverFraccion && metodo === 'POST') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const body = await leerJson<{ decision?: string }>(request);
    const decision = body.decision === 'aprobado' ? 'aprobado' : 'rechazado';

    /* Tiene que ser de un pedido suyo: sin el join, un comercio podría
       resolver los de otro conociendo el id. */
    const pedidoFraccion = await env.DB.prepare(
      `SELECT f.id, f.pedido_id, f.partes, f.repartidor_id, p.codigo
         FROM fraccionamientos f
         JOIN pedidos p ON p.id = f.pedido_id
        WHERE f.id = ? AND p.comercio_id = ? AND f.estado = 'pendiente'`,
    )
      .bind(resolverFraccion[1], propio.comercioId)
      .first<{
        id: string;
        pedido_id: string;
        partes: number;
        repartidor_id: string;
        codigo: string;
      }>();

    if (!pedidoFraccion) {
      return error('No encontrado', 404, cors);
    }

    await env.DB.prepare(
      "UPDATE fraccionamientos SET estado = ?, resuelto_en = datetime('now') WHERE id = ?",
    )
      .bind(decision, pedidoFraccion.id)
      .run();

    if (decision === 'aprobado') {
      await partirPedido(env, pedidoFraccion.pedido_id, pedidoFraccion.partes);
    }

    await avisar(env, pedidoFraccion.repartidor_id, {
      tipo: 'pedido',
      titulo:
        decision === 'aprobado'
          ? `Aprobaron partir el ${pedidoFraccion.codigo}`
          : `No aprobaron partir el ${pedidoFraccion.codigo}`,
      texto:
        decision === 'aprobado'
          ? `Quedó en ${pedidoFraccion.partes} entregas.`
          : 'El comercio dice que entra en un viaje.',
      enlace: '/panel/repartidor',
    });

    return json({ ok: true, estado: decision }, {}, cors);
  }

  /** Los pedidos de fraccionamiento sin resolver, para el comercio. */
  if (ruta === '/mi-comercio/fraccionamientos' && metodo === 'GET') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const { results } = await env.DB.prepare(
      `SELECT f.id, f.partes, f.motivo, f.entraba, f.creado_en,
              p.codigo, p.volumen_litros, u.nombre AS repartidor
         FROM fraccionamientos f
         JOIN pedidos p ON p.id = f.pedido_id
         JOIN usuarios u ON u.id = f.repartidor_id
        WHERE p.comercio_id = ? AND f.estado = 'pendiente'
        ORDER BY f.creado_en DESC`,
    )
      .bind(propio.comercioId)
      .all();

    return json({ fraccionamientos: results }, {}, cors);
  }

  /**
   * Cuánto ganó y qué entregó.
   *
   * Sin esto el repartidor no sabe cuánto hizo en la semana ni tiene con qué
   * reclamar si algo no cierra.
   *
   * Lo que gana es el envío de cada pedido que entregó: la comisión de la
   * plataforma lo incluye, y de ahí se le liquida.
   */
  if (ruta === '/delivery/ganancias' && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const totales = await env.DB.prepare(
      `SELECT
         COUNT(*) FILTER (WHERE date(e.entregado_en) = date('now')) AS entregas_hoy,
         COALESCE(SUM(p.envio_centavos) FILTER (WHERE date(e.entregado_en) = date('now')), 0) AS gano_hoy,
         COUNT(*) FILTER (WHERE e.entregado_en >= datetime('now', '-7 days')) AS entregas_semana,
         COALESCE(SUM(p.envio_centavos) FILTER (WHERE e.entregado_en >= datetime('now', '-7 days')), 0) AS gano_semana,
         COUNT(*) AS entregas_total,
         COALESCE(SUM(p.envio_centavos), 0) AS gano_total
       FROM envios e
       JOIN pedidos p ON p.id = e.pedido_id
      WHERE e.repartidor_id = ? AND e.estado = 'entregado'`,
    )
      .bind(repartidor.usuario.id)
      .first<Record<string, number>>();

    /* El historial: qué llevó, a dónde y cuánto le dejó cada viaje. */
    const { results: historial } = await env.DB.prepare(
      `SELECT p.codigo, p.direccion_texto, p.envio_centavos, p.tipo,
              e.entregado_en, e.asignado_en,
              c.nombre AS comercio
         FROM envios e
         JOIN pedidos p ON p.id = e.pedido_id
         JOIN comercios c ON c.id = p.comercio_id
        WHERE e.repartidor_id = ? AND e.estado = 'entregado'
        ORDER BY e.entregado_en DESC
        LIMIT 50`,
    )
      .bind(repartidor.usuario.id)
      .all<Record<string, unknown>>();

    return json(
      {
        hoy: {
          entregas: Number(totales?.entregas_hoy ?? 0),
          gano: aPesos(Number(totales?.gano_hoy ?? 0)),
        },
        semana: {
          entregas: Number(totales?.entregas_semana ?? 0),
          gano: aPesos(Number(totales?.gano_semana ?? 0)),
        },
        total: {
          entregas: Number(totales?.entregas_total ?? 0),
          gano: aPesos(Number(totales?.gano_total ?? 0)),
        },
        historial: historial.map((fila) => ({
          ...fila,
          gano: aPesos(Number(fila.envio_centavos)),
        })),
      },
      {},
      cors,
    );
  }

  // ── Cotización de fletes ──

  /**
   * El fletero cotiza un flete.
   *
   * Un flete no tiene precio de lista: depende de cuánto hay que llevar y
   * hasta dónde. El fletero ve la distancia calculada, pone su precio, y el
   * cliente decide antes de que nadie salga.
   */
  const cotizarFlete = /^\/fletes\/([\w-]+)\/cotizar$/.exec(ruta);

  if (cotizarFlete && metodo === 'POST') {
    const fletero = await exigirRol(request, env, cors, ['fletero']);

    if ('respuesta' in fletero) {
      return fletero.respuesta;
    }

    const body = await leerJson<{ precio?: number; nota?: string }>(request);
    const precio = aCentavos(Number(body.precio ?? 0));

    if (precio <= 0) {
      return error('Poné cuánto cobrás por el flete.', 400, cors);
    }

    const flete = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.usuario_id, p.estado, p.tipo,
              c.lat AS origen_lat, c.lon AS origen_lon,
              d.lat AS destino_lat, d.lon AS destino_lon
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN direcciones d ON d.id = p.direccion_id
        WHERE p.id = ? AND p.tipo = 'flete' AND p.estado = 'proceso'`,
    )
      .bind(cotizarFlete[1])
      .first<{
        id: string;
        codigo: string;
        usuario_id: string;
        origen_lat: number | null;
        origen_lon: number | null;
        destino_lat: number | null;
        destino_lon: number | null;
      }>();

    if (!flete) {
      return error('No encontrado', 404, cors);
    }

    const distancia =
      flete.origen_lat && flete.origen_lon && flete.destino_lat && flete.destino_lon
        ? distanciaKm(flete.origen_lat, flete.origen_lon, flete.destino_lat, flete.destino_lon)
        : null;

    const id = nuevoId();

    await env.DB.prepare(
      `INSERT INTO cotizaciones (id, pedido_id, fletero_id, precio_centavos, distancia_km, nota)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        flete.id,
        fletero.usuario.id,
        precio,
        distancia,
        String(body.nota ?? '').slice(0, 300) || null,
      )
      .run();

    await avisar(env, flete.usuario_id, {
      tipo: 'pedido',
      titulo: `Te cotizaron el flete ${flete.codigo}`,
      texto: `${fletero.usuario.nombre}: ${aPesos(precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`,
      enlace: '/pedidos',
    });

    return json({ id, precio: aPesos(precio), distanciaKm: distancia }, { status: 201 }, cors);
  }

  /** Las cotizaciones que recibió un flete, para que el cliente elija. */
  const cotizacionesFlete = /^\/fletes\/([\w-]+)\/cotizaciones$/.exec(ruta);

  if (cotizacionesFlete && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT co.id, co.precio_centavos, co.distancia_km, co.nota, co.estado, co.creado_en,
              u.nombre AS fletero
         FROM cotizaciones co
         JOIN usuarios u ON u.id = co.fletero_id
         JOIN pedidos p ON p.id = co.pedido_id
        WHERE co.pedido_id = ? AND p.usuario_id = ?
        ORDER BY co.precio_centavos ASC`,
    )
      .bind(cotizacionesFlete[1], usuario.id)
      .all<Record<string, unknown>>();

    return json(
      {
        cotizaciones: results.map((fila) => ({
          ...fila,
          precio: aPesos(Number(fila.precio_centavos)),
        })),
      },
      {},
      cors,
    );
  }

  /**
   * El cliente acepta una cotización.
   *
   * Al aceptar, el flete queda para ese fletero: las demás cotizaciones se
   * rechazan solas, porque el trabajo ya tiene quien lo haga.
   */
  const aceptarCotizacion = /^\/cotizaciones\/([\w-]+)\/aceptar$/.exec(ruta);

  if (aceptarCotizacion && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const cotizacion = await env.DB.prepare(
      `SELECT co.id, co.pedido_id, co.fletero_id, co.precio_centavos, co.estado,
              p.codigo, p.subtotal_centavos
         FROM cotizaciones co
         JOIN pedidos p ON p.id = co.pedido_id
        WHERE co.id = ? AND p.usuario_id = ?`,
    )
      .bind(aceptarCotizacion[1], usuario.id)
      .first<{
        id: string;
        pedido_id: string;
        fletero_id: string;
        precio_centavos: number;
        estado: string;
        codigo: string;
        subtotal_centavos: number;
      }>();

    if (!cotizacion) {
      return error('No encontrado', 404, cors);
    }

    if (cotizacion.estado !== 'pendiente') {
      return error('Esa cotización ya no está vigente.', 409, cors);
    }

    /* El precio del flete pasa a ser el del pedido: era eso lo que faltaba
       para poder cobrarlo. */
    await env.DB.batch([
      env.DB.prepare(
        "UPDATE cotizaciones SET estado = 'aceptada', resuelto_en = datetime('now') WHERE id = ?",
      ).bind(cotizacion.id),
      env.DB.prepare(
        "UPDATE cotizaciones SET estado = 'rechazada', resuelto_en = datetime('now') WHERE pedido_id = ? AND id != ? AND estado = 'pendiente'",
      ).bind(cotizacion.pedido_id, cotizacion.id),
      env.DB.prepare(
        'UPDATE pedidos SET envio_centavos = ?, total_centavos = subtotal_centavos + ? WHERE id = ?',
      ).bind(cotizacion.precio_centavos, cotizacion.precio_centavos, cotizacion.pedido_id),
      /* Queda asignado a quien cotizó: nadie más lo va a tomar. */
      env.DB.prepare('DELETE FROM envios WHERE pedido_id = ?').bind(cotizacion.pedido_id),
      env.DB.prepare(
        `INSERT INTO envios (id, pedido_id, repartidor_id, estado, asignado_en)
         VALUES (?, ?, ?, 'asignado', datetime('now'))`,
      ).bind(nuevoId(), cotizacion.pedido_id, cotizacion.fletero_id),
    ]);

    await avisar(env, cotizacion.fletero_id, {
      tipo: 'pedido',
      titulo: `Aceptaron tu cotización del ${cotizacion.codigo}`,
      texto: 'El flete es tuyo.',
      enlace: '/panel/repartidor',
    });

    await mensajeDeSistema(
      env,
      cotizacion.pedido_id,
      usuario.id,
      `Se aceptó la cotización por ${aPesos(cotizacion.precio_centavos).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}.`,
    );

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

  // ── Mandados ──
  //
  // Un mandado es un encargo sin comercio detrás: "traeme pan de lo de Juan",
  // "llevá este paquete". Por eso no tiene productos ni precio cerrado, y lo
  // que se acuerda se habla por el chat.

  if (ruta === '/mandados' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<{
      descripcion?: string;
      direccionTexto?: string;
      lat?: number;
      lon?: number;
    }>(request);

    const descripcion = String(body.descripcion ?? '').trim();

    if (descripcion.length < 5) {
      return error('Contá un poco más qué necesitás.', 400, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      `INSERT INTO mandados (id, usuario_id, descripcion, direccion_texto, lat, lon)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        usuario.id,
        descripcion.slice(0, 500),
        body.direccionTexto ?? null,
        Number.isFinite(body.lat) ? body.lat : null,
        Number.isFinite(body.lon) ? body.lon : null,
      )
      .run();

    return json({ id }, { status: 201 }, cors);
  }

  /** Los mandados de quien está adentro. */
  if (ruta === '/mandados' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT m.id, m.descripcion, m.direccion_texto, m.estado, m.creado_en,
              u.nombre AS repartidor
         FROM mandados m
         LEFT JOIN usuarios u ON u.id = m.repartidor_id
        WHERE m.usuario_id = ?
        ORDER BY m.creado_en DESC LIMIT 30`,
    )
      .bind(usuario.id)
      .all();

    return json({ mandados: results }, {}, cors);
  }

  /** Los mandados sin tomar, para quien reparte. */
  if (ruta === '/mandados/disponibles' && metodo === 'GET') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    const { results } = await env.DB.prepare(
      `SELECT m.id, m.descripcion, m.direccion_texto, m.lat, m.lon, m.creado_en,
              u.nombre AS cliente
         FROM mandados m
         JOIN usuarios u ON u.id = m.usuario_id
        WHERE m.estado = 'buscando'
        ORDER BY m.creado_en DESC LIMIT 30`,
    ).all();

    return json({ mandados: results }, {}, cors);
  }

  const tomarMandado = /^\/mandados\/([\w-]+)\/tomar$/.exec(ruta);

  if (tomarMandado && metodo === 'POST') {
    const repartidor = await exigirRol(request, env, cors, ['delivery', 'fletero']);

    if ('respuesta' in repartidor) {
      return repartidor.respuesta;
    }

    /* Igual que con los pedidos: si dos lo toman a la vez, el segundo tiene
       que enterarse en lugar de pisar al primero. */
    const libre = await env.DB.prepare(
      "SELECT usuario_id FROM mandados WHERE id = ? AND estado = 'buscando'",
    )
      .bind(tomarMandado[1])
      .first<{ usuario_id: string }>();

    if (!libre) {
      return error('Otro repartidor tomó este mandado.', 409, cors);
    }

    await env.DB.prepare(
      "UPDATE mandados SET estado = 'tomado', repartidor_id = ? WHERE id = ? AND estado = 'buscando'",
    )
      .bind(repartidor.usuario.id, tomarMandado[1])
      .run();

    await avisar(env, libre.usuario_id, {
      tipo: 'envio',
      titulo: 'Alguien tomó tu mandado',
      texto: `${repartidor.usuario.nombre} se está ocupando.`,
      enlace: '/mandado',
    });

    return json({ ok: true }, {}, cors);
  }

  /* El chat del mandado: lo que se acuerda se habla acá, porque un mandado no
     tiene lista de productos donde dejarlo escrito. */
  const chatMandado = /^\/mandados\/([\w-]+)\/mensajes$/.exec(ruta);

  if (chatMandado && (metodo === 'GET' || metodo === 'POST')) {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    /* Sólo hablan los dos que están en el mandado. */
    const permitido = await env.DB.prepare(
      'SELECT 1 AS ok FROM mandados WHERE id = ? AND (usuario_id = ? OR repartidor_id = ?)',
    )
      .bind(chatMandado[1], usuario.id, usuario.id)
      .first();

    if (!permitido) {
      return error('No encontrado', 404, cors);
    }

    if (metodo === 'POST') {
      const body = await leerJson<{ texto?: string }>(request);
      const texto = String(body.texto ?? '').trim();

      if (!texto) {
        return error('El mensaje está vacío.', 400, cors);
      }

      await env.DB.prepare(
        'INSERT INTO mandado_mensajes (id, mandado_id, autor_id, texto) VALUES (?, ?, ?, ?)',
      )
        .bind(nuevoId(), chatMandado[1], usuario.id, texto.slice(0, 1000))
        .run();

      return json({ ok: true }, { status: 201 }, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT m.id, m.texto, m.tipo, m.media_url, m.creado_en, m.autor_id,
              u.nombre AS autor
         FROM mandado_mensajes m
         JOIN usuarios u ON u.id = m.autor_id
        WHERE m.mandado_id = ?
        ORDER BY m.creado_en ASC LIMIT 200`,
    )
      .bind(chatMandado[1])
      .all();

    return json({ mensajes: results, yo: usuario.id }, {}, cors);
  }

  /**
   * Dónde va el pedido, para el cliente.
   *
   * Devuelve la posición del repartidor y cuándo se informó: una ubicación de
   * hace media hora no dice dónde está ahora, así que la pantalla necesita
   * saber si el dato está fresco para no dibujar un punto que miente.
   *
   * Sólo lo ve el dueño del pedido: la posición de una persona no es dato
   * público.
   */
  const seguimiento = /^\/pedidos\/([\w-]+)\/seguimiento$/.exec(ruta);

  if (seguimiento && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const fila = await env.DB.prepare(
      `SELECT p.codigo, p.estado, p.preparacion, p.direccion_texto,
              p.parte_numero, p.partes_total,
              c.nombre AS comercio, c.direccion AS comercio_direccion,
              c.lat AS comercio_lat, c.lon AS comercio_lon,
              d.lat AS destino_lat, d.lon AS destino_lon,
              e.estado AS envio_estado, e.lat, e.lon, e.ubicacion_en, e.asignado_en,
              u.nombre AS repartidor, u.telefono AS repartidor_telefono,
              r.vehiculo
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN direcciones d ON d.id = p.direccion_id
         LEFT JOIN envios e ON e.pedido_id = p.id
         LEFT JOIN usuarios u ON u.id = e.repartidor_id
         LEFT JOIN usuario_roles r ON r.usuario_id = e.repartidor_id
              AND r.rol IN ('delivery', 'fletero') AND r.estado = 'aprobado'
        WHERE p.id = ? AND p.usuario_id = ?`,
    )
      .bind(seguimiento[1], usuario.id)
      .first<Record<string, unknown>>();

    if (!fila) {
      return error('No encontrado', 404, cors);
    }

    /* Las partes de un pedido dividido: cada una va por su cuenta y el
       cliente quiere verlas todas. */
    const { results: partes } = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.parte_numero, p.estado,
              e.estado AS envio_estado, e.lat, e.lon, e.ubicacion_en,
              u.nombre AS repartidor
         FROM pedidos p
         LEFT JOIN envios e ON e.pedido_id = p.id
         LEFT JOIN usuarios u ON u.id = e.repartidor_id
        WHERE p.pedido_padre_id = ?
        ORDER BY p.parte_numero`,
    )
      .bind(seguimiento[1])
      .all();

    return json({ pedido: fila, partes }, {}, cors);
  }

  // ── Reclamos ──
  //
  // Cuando algo sale mal, las tres partes tienen que poder hablar entre
  // ellas: el comercio sabe qué mandó, el repartidor qué llevó, y
  // administración decide quién se hace cargo.
  //
  // El chat del reclamo es aparte del chat del pedido a propósito: acá se
  // discute qué pasó, y eso no se resuelve delante del cliente. Después
  // alguien le contesta por el chat del pedido.

  /** Abre un reclamo sobre un pedido. */
  const reclamarPedido = /^\/pedidos\/([\w-]+)\/reclamo$/.exec(ruta);

  if (reclamarPedido && metodo === 'POST') {
    const usuario = await puedeVerPedido(env, reclamarPedido[1], request);

    if (!usuario) {
      return error('No encontrado', 404, cors);
    }

    const body = await leerJson<{ motivo?: string; detalle?: string }>(request);
    const motivo = String(body.motivo ?? '').trim();

    if (motivo.length < 3) {
      return error('Contá qué pasó.', 400, cors);
    }

    /* Un reclamo abierto por pedido: si no, el mismo problema genera cinco
       conversaciones en paralelo y nadie sabe cuál mirar. */
    const abierto = await env.DB.prepare(
      "SELECT id FROM reclamos WHERE pedido_id = ? AND estado IN ('abierto', 'en_revision')",
    )
      .bind(reclamarPedido[1])
      .first<{ id: string }>();

    if (abierto) {
      return json({ id: abierto.id, yaExistia: true }, {}, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      'INSERT INTO reclamos (id, pedido_id, abierto_por, motivo, detalle) VALUES (?, ?, ?, ?, ?)',
    )
      .bind(id, reclamarPedido[1], usuario.id, motivo.slice(0, 200), String(body.detalle ?? '').slice(0, 1000) || null)
      .run();

    /* Administración se entera: es quien lo va a mirar. */
    const { results: admins } = await env.DB.prepare(
      "SELECT usuario_id FROM usuario_roles WHERE rol = 'admin' AND estado = 'aprobado'",
    ).all<{ usuario_id: string }>();

    const pedido = await env.DB.prepare('SELECT codigo FROM pedidos WHERE id = ?')
      .bind(reclamarPedido[1])
      .first<{ codigo: string }>();

    for (const admin of admins) {
      await avisar(env, admin.usuario_id, {
        tipo: 'pedido',
        titulo: `Reclamo en el pedido ${pedido?.codigo ?? ''}`,
        texto: motivo.slice(0, 120),
        enlace: '/panel/admin/reclamos',
      });
    }

    return json({ id }, { status: 201 }, cors);
  }

  /** Los reclamos que le tocan a quien mira. */
  if (ruta === '/reclamos' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const esAdmin = await env.DB.prepare(
      "SELECT 1 AS ok FROM usuario_roles WHERE usuario_id = ? AND rol = 'admin' AND estado = 'aprobado'",
    )
      .bind(usuario.id)
      .first();

    /* Administración ve todos; el resto, sólo los de sus pedidos. */
    const { results } = esAdmin
      ? await env.DB.prepare(
          `SELECT r.id, r.motivo, r.detalle, r.estado, r.creado_en, r.resolucion,
                  p.codigo, p.direccion_texto,
                  c.nombre AS comercio,
                  u.nombre AS abrio,
                  ur.nombre AS repartidor
             FROM reclamos r
             JOIN pedidos p ON p.id = r.pedido_id
             JOIN comercios c ON c.id = p.comercio_id
             JOIN usuarios u ON u.id = r.abierto_por
             LEFT JOIN envios e ON e.pedido_id = p.id
             LEFT JOIN usuarios ur ON ur.id = e.repartidor_id
            ORDER BY
              CASE r.estado WHEN 'abierto' THEN 0 WHEN 'en_revision' THEN 1 ELSE 2 END,
              r.creado_en DESC
            LIMIT 50`,
        ).all()
      : await env.DB.prepare(
          `SELECT r.id, r.motivo, r.detalle, r.estado, r.creado_en, r.resolucion,
                  p.codigo, p.direccion_texto,
                  c.nombre AS comercio,
                  u.nombre AS abrio,
                  ur.nombre AS repartidor
             FROM reclamos r
             JOIN pedidos p ON p.id = r.pedido_id
             JOIN comercios c ON c.id = p.comercio_id
             JOIN usuarios u ON u.id = r.abierto_por
             LEFT JOIN envios e ON e.pedido_id = p.id
             LEFT JOIN usuarios ur ON ur.id = e.repartidor_id
            WHERE p.usuario_id = ? OR c.usuario_id = ? OR e.repartidor_id = ?
            ORDER BY r.creado_en DESC
            LIMIT 50`,
        )
          .bind(usuario.id, usuario.id, usuario.id)
          .all();

    return json({ reclamos: results, esAdmin: Boolean(esAdmin) }, {}, cors);
  }

  /**
   * El chat del reclamo.
   *
   * Hablan el comercio, quien repartió y administración. El cliente no entra
   * acá: primero se define qué pasó, y después alguien le contesta.
   */
  const chatReclamo = /^\/reclamos\/([\w-]+)\/mensajes$/.exec(ruta);

  if (chatReclamo && (metodo === 'GET' || metodo === 'POST')) {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const permitido = await env.DB.prepare(
      `SELECT 1 AS ok FROM reclamos r
         JOIN pedidos p ON p.id = r.pedido_id
         JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE r.id = ?
          AND (c.usuario_id = ? OR e.repartidor_id = ?
               OR EXISTS (SELECT 1 FROM usuario_roles ur
                           WHERE ur.usuario_id = ? AND ur.rol = 'admin' AND ur.estado = 'aprobado'))`,
    )
      .bind(chatReclamo[1], usuario.id, usuario.id, usuario.id)
      .first();

    if (!permitido) {
      return error('No encontrado', 404, cors);
    }

    if (metodo === 'POST') {
      const body = await leerJson<{ texto?: string }>(request);
      const texto = String(body.texto ?? '').trim();

      if (!texto) {
        return error('El mensaje está vacío.', 400, cors);
      }

      await env.DB.batch([
        env.DB.prepare(
          'INSERT INTO reclamo_mensajes (id, reclamo_id, autor_id, texto) VALUES (?, ?, ?, ?)',
        ).bind(nuevoId(), chatReclamo[1], usuario.id, texto.slice(0, 1000)),
        /* Con el primer mensaje pasa a "en revisión": alguien lo está
           mirando, y eso es distinto de estar sin abrir. */
        env.DB.prepare(
          "UPDATE reclamos SET estado = 'en_revision' WHERE id = ? AND estado = 'abierto'",
        ).bind(chatReclamo[1]),
      ]);

      return json({ ok: true }, { status: 201 }, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT m.id, m.texto, m.creado_en, m.autor_id, u.nombre AS autor,
              CASE
                WHEN EXISTS (SELECT 1 FROM usuario_roles ur WHERE ur.usuario_id = m.autor_id AND ur.rol = 'admin' AND ur.estado = 'aprobado') THEN 'admin'
                WHEN EXISTS (SELECT 1 FROM comercios c2 WHERE c2.usuario_id = m.autor_id) THEN 'comercio'
                ELSE 'repartidor'
              END AS rol
         FROM reclamo_mensajes m
         JOIN usuarios u ON u.id = m.autor_id
        WHERE m.reclamo_id = ?
        ORDER BY m.creado_en`,
    )
      .bind(chatReclamo[1])
      .all();

    return json({ mensajes: results, yo: usuario.id }, {}, cors);
  }

  /**
   * Administración cierra el reclamo con una resolución.
   *
   * La resolución le llega al cliente por el chat de su pedido: es donde ya
   * estuvo mirando, y no en una pantalla nueva que no conoce.
   */
  const resolverReclamo = /^\/reclamos\/([\w-]+)\/resolver$/.exec(ruta);

  if (resolverReclamo && metodo === 'POST') {
    const admin = await exigirAdmin(request, env, cors);

    if ('respuesta' in admin) {
      return admin.respuesta;
    }

    const body = await leerJson<{ resolucion?: string; avisarCliente?: boolean }>(request);
    const resolucion = String(body.resolucion ?? '').trim();

    if (resolucion.length < 3) {
      return error('Escribí qué se resolvió.', 400, cors);
    }

    const reclamo = await env.DB.prepare(
      `SELECT r.id, r.pedido_id, p.usuario_id AS cliente_id, p.codigo
         FROM reclamos r JOIN pedidos p ON p.id = r.pedido_id
        WHERE r.id = ?`,
    )
      .bind(resolverReclamo[1])
      .first<{ id: string; pedido_id: string; cliente_id: string; codigo: string }>();

    if (!reclamo) {
      return error('No encontrado', 404, cors);
    }

    await env.DB.prepare(
      `UPDATE reclamos
          SET estado = 'resuelto', resolucion = ?, resuelto_por = ?,
              resuelto_en = datetime('now')
        WHERE id = ?`,
    )
      .bind(resolucion.slice(0, 1000), admin.usuario.id, reclamo.id)
      .run();

    /* Al cliente se le contesta por donde ya estaba mirando. */
    if (body.avisarCliente !== false) {
      await mensajeDeSistema(
        env,
        reclamo.pedido_id,
        admin.usuario.id,
        `Sobre tu reclamo: ${resolucion.slice(0, 400)}`,
      );

      await avisar(env, reclamo.cliente_id, {
        tipo: 'pedido',
        titulo: `Resolvimos tu reclamo del ${reclamo.codigo}`,
        texto: resolucion.slice(0, 120),
        enlace: `/pedidos/${reclamo.pedido_id}/seguimiento`,
      });
    }

    return json({ ok: true }, {}, cors);
  }

  // ── Notificaciones ──

  if (ruta === '/notificaciones' && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT id, tipo, titulo, texto, enlace, leida_en, creado_en
         FROM notificaciones WHERE usuario_id = ?
        ORDER BY creado_en DESC LIMIT 50`,
    )
      .bind(usuario.id)
      .all<Record<string, unknown>>();

    const sinLeer = results.filter((fila) => !fila.leida_en).length;

    return json({ notificaciones: results, sinLeer }, {}, cors);
  }

  /* Marcar leídas es del usuario sobre lo suyo: la condición por usuario
     evita que alguien marque las de otro conociendo un id. */
  if (ruta === '/notificaciones/leidas' && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const body = await leerJson<{ ids?: string[] }>(request);
    const ids = Array.isArray(body.ids) ? body.ids : [];

    if (ids.length === 0) {
      /* Sin lista, se marcan todas: es lo que hace abrir el panel. */
      await env.DB.prepare(
        "UPDATE notificaciones SET leida_en = datetime('now') WHERE usuario_id = ? AND leida_en IS NULL",
      )
        .bind(usuario.id)
        .run();
    } else {
      const marcadores = ids.map(() => '?').join(',');

      await env.DB.prepare(
        `UPDATE notificaciones SET leida_en = datetime('now')
          WHERE usuario_id = ? AND id IN (${marcadores})`,
      )
        .bind(usuario.id, ...ids)
        .run();
    }

    return json({ ok: true }, {}, cors);
  }

  // ── Reseñas ──

  /**
   * El cliente puntúa un pedido entregado.
   *
   * Sólo sobre lo que compró y una sola vez: puntuar sin haber comprado
   * convierte la calificación en algo que se infla o se ensucia sin costo.
   *
   * Se puntúa al comercio y, si hubo, a quien lo trajo: son dos trabajos
   * distintos y se puede estar conforme con uno y no con el otro.
   */
  const resenaPedido = /^\/pedidos\/([\w-]+)\/resena$/.exec(ruta);

  if (resenaPedido && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const pedido = await env.DB.prepare(
      `SELECT p.id, p.comercio_id, p.estado, e.repartidor_id
         FROM pedidos p
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.id = ? AND p.usuario_id = ?`,
    )
      .bind(resenaPedido[1], usuario.id)
      .first<{ id: string; comercio_id: string; estado: string; repartidor_id: string | null }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    if (pedido.estado !== 'terminado') {
      return error('Podés puntuar cuando el pedido esté entregado.', 409, cors);
    }

    const body = await leerJson<{
      comercio?: number;
      repartidor?: number;
      comentario?: string;
    }>(request);

    const puntajeComercio = Math.trunc(Number(body.comercio ?? 0));

    if (puntajeComercio < 1 || puntajeComercio > 5) {
      return error('Poné entre 1 y 5 estrellas.', 400, cors);
    }

    const puntajeRepartidor =
      pedido.repartidor_id && body.repartidor
        ? Math.min(5, Math.max(1, Math.trunc(Number(body.repartidor))))
        : null;

    try {
      await env.DB.prepare(
        `INSERT INTO resenas
          (id, pedido_id, usuario_id, comercio_id, repartidor_id,
           puntaje_comercio, puntaje_repartidor, comentario)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
        .bind(
          nuevoId(),
          pedido.id,
          usuario.id,
          pedido.comercio_id,
          pedido.repartidor_id,
          puntajeComercio,
          puntajeRepartidor,
          String(body.comentario ?? '').slice(0, 500) || null,
        )
        .run();
    } catch {
      /* La única restricción que puede fallar es la de un pedido por reseña. */
      return error('Ya puntuaste este pedido.', 409, cors);
    }

    await recalcularPuntaje(env, pedido.comercio_id);

    return json({ ok: true }, { status: 201 }, cors);
  }

  /** Las reseñas de un comercio, para mostrarlas en su perfil. */
  const resenasComercio = /^\/comercios\/([\w-]+)\/resenas$/.exec(ruta);

  if (resenasComercio && metodo === 'GET') {
    const { results } = await env.DB.prepare(
      `SELECT r.puntaje_comercio, r.comentario, r.creado_en, u.nombre AS cliente
         FROM resenas r
         JOIN usuarios u ON u.id = r.usuario_id
        WHERE r.comercio_id = ?
        ORDER BY r.creado_en DESC
        LIMIT 30`,
    )
      .bind(resenasComercio[1])
      .all();

    const resumen = await env.DB.prepare(
      'SELECT puntaje, resenas_count FROM comercios WHERE id = ?',
    )
      .bind(resenasComercio[1])
      .first<{ puntaje: number | null; resenas_count: number }>();

    return json(
      {
        resenas: results,
        puntaje: resumen?.puntaje ?? null,
        total: resumen?.resenas_count ?? 0,
      },
      {},
      cors,
    );
  }

  // ── Cancelar un pedido ──

  /**
   * El cliente o el comercio dan de baja un pedido.
   *
   * Se puede mientras nadie lo haya retirado: después ya hay alguien en la
   * calle con la mercadería, y eso se arregla hablando, no con un botón.
   *
   * Lo vendido vuelve al stock: si no, el comercio pierde unidades que
   * nunca salieron del negocio.
   */
  const cancelarPedido = /^\/pedidos\/([\w-]+)\/cancelar$/.exec(ruta);

  if (cancelarPedido && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const pedido = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.usuario_id, p.estado, p.pago_estado,
              c.usuario_id AS comercio_usuario_id,
              e.estado AS envio_estado, e.repartidor_id
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.id = ?`,
    )
      .bind(cancelarPedido[1])
      .first<{
        id: string;
        codigo: string;
        usuario_id: string;
        estado: string;
        pago_estado: string;
        comercio_usuario_id: string | null;
        envio_estado: string | null;
        repartidor_id: string | null;
      }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    const esCliente = usuario.id === pedido.usuario_id;
    const esComercio = usuario.id === pedido.comercio_usuario_id;

    if (!esCliente && !esComercio) {
      return error('No encontrado', 404, cors);
    }

    if (pedido.estado !== 'proceso') {
      return error('Este pedido ya está cerrado.', 409, cors);
    }

    if (!sePuedeCancelar(pedido.estado, pedido.envio_estado)) {
      return error('El pedido ya salió del comercio. Arreglalo por el chat.', 409, cors);
    }

    const body = await leerJson<{ motivo?: string }>(request);
    const motivo = String(body.motivo ?? '').slice(0, 300);

    /* Lo que se había descontado vuelve: nunca salió del negocio. */
    const { results: lineas } = await env.DB.prepare(
      `SELECT pi.producto_id, pi.unidad_venta, pi.escalon
         FROM pedido_items pi WHERE pi.pedido_id = ?`,
    )
      .bind(pedido.id)
      .all<{ producto_id: string | null; unidad_venta: string; escalon: number }>();

    const devoluciones = lineas
      .filter((linea) => linea.producto_id)
      .map((linea) => ({
        productoId: linea.producto_id as string,
        unidades:
          linea.unidad_venta === 'unidad' || linea.unidad_venta === 'docena'
            ? -(linea.escalon + 1)
            : -1,
      }));

    await env.DB.batch([
      env.DB.prepare("UPDATE pedidos SET estado = 'cancelado' WHERE id = ?").bind(pedido.id),
      env.DB.prepare(
        "UPDATE envios SET estado = 'cancelado' WHERE pedido_id = ? AND estado NOT IN ('entregado', 'cancelado')",
      ).bind(pedido.id),
    ]);

    await descontarStock(env, devoluciones);

    /* Al otro lado le importa: el comercio deja de preparar, o el cliente se
       entera de que no se lo van a mandar. */
    const otro = esCliente ? pedido.comercio_usuario_id : pedido.usuario_id;

    if (otro) {
      await avisar(env, otro, {
        tipo: 'pedido',
        titulo: `Se canceló el pedido ${pedido.codigo}`,
        texto: motivo || (esCliente ? 'Lo canceló el cliente.' : 'Lo canceló el comercio.'),
        enlace: esCliente ? '/panel/comercio' : '/pedidos',
      });
    }

    if (pedido.repartidor_id) {
      await avisar(env, pedido.repartidor_id, {
        tipo: 'pedido',
        titulo: `Se canceló el pedido ${pedido.codigo}`,
        texto: 'Ya no hace falta que lo lleves.',
        enlace: '/panel/repartidor',
      });
    }

    /* Si estaba pagado hay plata de por medio: se avisa, porque la
       devolución se gestiona por fuera de la app. */
    return json(
      {
        ok: true,
        pagado: pedido.pago_estado === 'aprobado',
        aviso:
          pedido.pago_estado === 'aprobado'
            ? 'El pedido estaba pagado. Te vamos a contactar para devolverte el dinero.'
            : null,
      },
      {},
      cors,
    );
  }

  // ── Extras del pedido ──
  /**
   * Cobra los extras de un pedido.
   *
   * Se cobran juntos y aparte del pedido: el pedido ya se pagó cuando se
   * confirmó, y los extras aparecieron después. Un solo cobro por todos los
   * que estén comprados, para no generar una comisión por cada chocolate.
   */
  const pagarExtras = /^\/pedidos\/([\w-]+)\/extras\/pagar$/.exec(ruta);

  if (pagarExtras && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const pedido = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.comercio_id, p.envio_centavos
         FROM pedidos p WHERE p.id = ? AND p.usuario_id = ?`,
    )
      .bind(pagarExtras[1], usuario.id)
      .first<{
        id: string;
        codigo: string;
        comercio_id: string;
        envio_centavos: number;
      }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    const { results: extras } = await env.DB.prepare(
      "SELECT estado, precio_centavos FROM extras WHERE pedido_id = ? AND estado = 'comprado'",
    )
      .bind(pedido.id)
      .all<{ estado: string; precio_centavos: number | null }>();

    const total = sumarExtras(extras);

    if (total <= 0) {
      return error('No hay extras para pagar.', 409, cors);
    }

    /* Se cobra con la misma preferencia que el pedido, pero por el monto de
       los extras: la plata va al mismo lugar y el cliente ve un solo lugar
       donde pagar. El envío va en cero porque ya se cobró con el pedido. */
    const resultado = await crearPreferencia(
      env,
      {
        id: pedido.id,
        codigo: `${pedido.codigo} · extras`,
        subtotal_centavos: total,
        envio_centavos: 0,
        total_centavos: total,
        comercio_id: pedido.comercio_id,
      },
      { email: usuario.email, nombre: usuario.nombre },
    );

    if (!resultado.ok) {
      return error(resultado.motivo, 502, cors);
    }

    return json({ url: resultado.url, total: aPesos(total) }, {}, cors);
  }

  //
  // "Ya que vas al kiosco, traeme un chocolate." No estaba en el pedido y no
  // tiene precio hasta que alguien lo compra.

  /** Los extras de un pedido, para cliente y repartidor. */
  const extrasPedido = /^\/pedidos\/([\w-]+)\/extras$/.exec(ruta);

  if (extrasPedido && metodo === 'GET') {
    const permiso = await puedeVerPedido(env, extrasPedido[1], request);

    if (!permiso) {
      return error('No encontrado', 404, cors);
    }

    const { results } = await env.DB.prepare(
      `SELECT e.id, e.descripcion, e.estado, e.precio_centavos, e.ticket_url,
              e.motivo, e.cancelado_por, e.espera_confirmacion, e.creado_en,
              u.nombre AS repartidor
         FROM extras e
         LEFT JOIN usuarios u ON u.id = e.repartidor_id
        WHERE e.pedido_id = ?
        ORDER BY e.creado_en`,
    )
      .bind(extrasPedido[1])
      .all<Record<string, unknown>>();

    return json(
      {
        extras: results.map((fila) => ({
          ...fila,
          precio: fila.precio_centavos ? aPesos(Number(fila.precio_centavos)) : null,
        })),
        motivosRechazo: MOTIVOS_RECHAZO,
        motivosCancelacion: MOTIVOS_CANCELACION,
      },
      {},
      cors,
    );
  }

  /**
   * El cliente pide algo que no estaba en el pedido.
   *
   * Sólo tiene sentido mientras haya quien lo pueda traer: pedirlo cuando ya
   * se entregó no lleva a ninguna parte.
   */
  if (extrasPedido && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const pedido = await env.DB.prepare(
      `SELECT p.id, p.codigo, p.estado, e.repartidor_id, e.estado AS envio_estado
         FROM pedidos p
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE p.id = ? AND p.usuario_id = ?`,
    )
      .bind(extrasPedido[1], usuario.id)
      .first<{
        id: string;
        codigo: string;
        estado: string;
        repartidor_id: string | null;
        envio_estado: string | null;
      }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    if (pedido.estado !== 'proceso' || pedido.envio_estado === 'entregado') {
      return error('Este pedido ya está cerrado.', 409, cors);
    }

    const body = await leerJson<{ descripcion?: string }>(request);
    const descripcion = String(body.descripcion ?? '').trim();

    if (descripcion.length < 3) {
      return error('Contá qué necesitás que te traigan.', 400, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      `INSERT INTO extras (id, pedido_id, solicitante_id, repartidor_id, descripcion)
       VALUES (?, ?, ?, ?, ?)`,
    )
      .bind(id, pedido.id, usuario.id, pedido.repartidor_id, descripcion.slice(0, 300))
      .run();

    /* Va al chat como mensaje del cliente, para que quede en la conversación
       y no en una pantalla aparte que nadie mira. */
    await env.DB.prepare(
      `INSERT INTO pedido_mensajes (id, pedido_id, autor_id, texto, tipo, extra_id)
       VALUES (?, ?, ?, ?, 'extra', ?)`,
    )
      .bind(nuevoId(), pedido.id, usuario.id, descripcion.slice(0, 300), id)
      .run();

    if (pedido.repartidor_id) {
      await avisar(env, pedido.repartidor_id, {
        tipo: 'pedido',
        titulo: `Te piden algo más en el ${pedido.codigo}`,
        texto: descripcion.slice(0, 120),
        enlace: '/panel/repartidor',
      });
    }

    return json({ id, estado: 'pedido' }, { status: 201 }, cors);
  }

  /**
   * Mover un extra: aceptar, rechazar, comprar, cancelar.
   *
   * Quién puede hacer qué depende del paso: el repartidor acepta, rechaza y
   * compra; el cliente cancela y confirma el precio. Cancelar algo ya
   * comprado necesita que el otro lo acepte.
   */
  const extraDetalle = /^\/extras\/([\w-]+)$/.exec(ruta);

  if (extraDetalle && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const extra = await env.DB.prepare(
      `SELECT x.*, p.codigo, p.usuario_id AS cliente_id, e.repartidor_id AS repartidor_actual
         FROM extras x
         JOIN pedidos p ON p.id = x.pedido_id
         LEFT JOIN envios e ON e.pedido_id = p.id
        WHERE x.id = ?`,
    )
      .bind(extraDetalle[1])
      .first<{
        id: string;
        pedido_id: string;
        codigo: string;
        estado: string;
        descripcion: string;
        precio_centavos: number | null;
        espera_confirmacion: number;
        cliente_id: string;
        repartidor_actual: string | null;
      }>();

    if (!extra) {
      return error('No encontrado', 404, cors);
    }

    const esCliente = usuario.id === extra.cliente_id;
    const esRepartidor = usuario.id === extra.repartidor_actual;

    if (!esCliente && !esRepartidor) {
      return error('No encontrado', 404, cors);
    }

    const body = await leerJson<{
      accion?: string;
      /* El desplegable manda el índice; se acepta el texto por compatibilidad. */
      motivo?: string | number;
      precio?: number;
      ticketUrl?: string;
    }>(request);

    const accion = String(body.accion ?? '');

    /* Aceptar el extra: sólo el repartidor, y sólo si nadie lo movió antes. */
    if (accion === 'aceptar') {
      if (!esRepartidor || !puedeIr(extra.estado, 'aceptado')) {
        return error('No se puede aceptar en este momento.', 409, cors);
      }

      await env.DB.batch([
        env.DB.prepare(
          "UPDATE extras SET estado = 'aceptado', repartidor_id = ?, actualizado_en = datetime('now') WHERE id = ?",
        ).bind(usuario.id, extra.id),
      ]);

      await mensajeDeSistema(
        env,
        extra.pedido_id,
        usuario.id,
        `${usuario.nombre} aceptó traer: ${extra.descripcion}`,
      );

      await avisar(env, extra.cliente_id, {
        tipo: 'pedido',
        titulo: 'Aceptaron traerte el extra',
        texto: extra.descripcion.slice(0, 120),
        enlace: `/pedidos/${extra.pedido_id}/seguimiento`,
      });

      return json({ ok: true, estado: 'aceptado' }, {}, cors);
    }

    /* Rechazar: el repartidor dice por qué, de una lista. Un motivo escrito
       a mano en el apuro termina siendo "no" a secas. */
    if (accion === 'rechazar') {
      if (!esRepartidor || !puedeIr(extra.estado, 'rechazado')) {
        return error('No se puede rechazar en este momento.', 409, cors);
      }

      const motivo = resolverMotivo(body.motivo, MOTIVOS_RECHAZO);

      if (!motivo) {
        return error('Elegí un motivo de la lista.', 400, cors);
      }

      await env.DB.prepare(
        "UPDATE extras SET estado = 'rechazado', motivo = ?, cancelado_por = ?, actualizado_en = datetime('now') WHERE id = ?",
      )
        .bind(motivo, usuario.id, extra.id)
        .run();

      await mensajeDeSistema(
        env,
        extra.pedido_id,
        usuario.id,
        `No va a poder traer "${extra.descripcion}": ${motivo.toLowerCase()}.`,
      );

      await avisar(env, extra.cliente_id, {
        tipo: 'pedido',
        titulo: 'No pueden traerte el extra',
        texto: motivo,
        enlace: `/pedidos/${extra.pedido_id}/seguimiento`,
      });

      return json({ ok: true, estado: 'rechazado' }, {}, cors);
    }

    /* Comprado: acá aparece el precio, con su comprobante. */
    if (accion === 'comprar') {
      if (!esRepartidor || !puedeIr(extra.estado, 'comprado')) {
        return error('No se puede cargar el precio en este momento.', 409, cors);
      }

      const precio = aCentavos(Number(body.precio ?? 0));

      if (precio <= 0) {
        return error('Poné cuánto salió.', 400, cors);
      }

      await env.DB.prepare(
        "UPDATE extras SET estado = 'comprado', precio_centavos = ?, ticket_url = ?, actualizado_en = datetime('now') WHERE id = ?",
      )
        .bind(precio, body.ticketUrl ?? null, extra.id)
        .run();

      await mensajeDeSistema(
        env,
        extra.pedido_id,
        usuario.id,
        `Compró "${extra.descripcion}" por ${aPesos(precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}.`,
      );

      await avisar(env, extra.cliente_id, {
        tipo: 'pago',
        titulo: 'Tu extra ya está comprado',
        texto: `${extra.descripcion} · ${aPesos(precio).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`,
        enlace: `/pedidos/${extra.pedido_id}/seguimiento`,
      });

      return json({ ok: true, estado: 'comprado', precio: aPesos(precio) }, {}, cors);
    }

    /* Cancelar. Lo puede hacer cualquiera de los dos, pero con reglas
       distintas según el momento. */
    if (accion === 'cancelar') {
      if (!puedeIr(extra.estado, 'cancelado')) {
        return error('Este extra ya está cerrado.', 409, cors);
      }

      /* El repartidor da un motivo de la lista; el cliente puede no dar
         ninguno, porque cancelar lo suyo no le debe explicaciones a nadie. */
      const motivo = resolverMotivo(body.motivo, MOTIVOS_CANCELACION) ?? '';

      if (esRepartidor && !motivo) {
        return error('Elegí un motivo de la lista.', 400, cors);
      }

      /* Si ya está comprado y cancela el cliente, no se cierra solo: el
         repartidor puso la plata y tiene que aceptar la baja. */
      if (esCliente && extra.estado === 'comprado') {
        await env.DB.prepare(
          "UPDATE extras SET espera_confirmacion = 1, motivo = ?, cancelado_por = ?, actualizado_en = datetime('now') WHERE id = ?",
        )
          .bind(motivo || 'El cliente pidió cancelarlo', usuario.id, extra.id)
          .run();

        await mensajeDeSistema(
          env,
          extra.pedido_id,
          usuario.id,
          `Pidió cancelar "${extra.descripcion}", que ya estaba comprado. Falta que lo confirme quien lo trae.`,
        );

        if (extra.repartidor_actual) {
          await avisar(env, extra.repartidor_actual, {
            tipo: 'pedido',
            titulo: 'Piden cancelar un extra ya comprado',
            texto: extra.descripcion.slice(0, 120),
            enlace: '/panel/repartidor',
          });
        }

        return json({ ok: true, estado: 'comprado', esperaConfirmacion: true }, {}, cors);
      }

      await env.DB.prepare(
        "UPDATE extras SET estado = 'cancelado', motivo = ?, cancelado_por = ?, espera_confirmacion = 0, actualizado_en = datetime('now') WHERE id = ?",
      )
        .bind(motivo || 'Se dio de baja', usuario.id, extra.id)
        .run();

      await mensajeDeSistema(
        env,
        extra.pedido_id,
        usuario.id,
        `Se canceló "${extra.descripcion}"${motivo ? `: ${motivo.toLowerCase()}` : '.'}`,
      );

      const otro = esCliente ? extra.repartidor_actual : extra.cliente_id;

      if (otro) {
        await avisar(env, otro, {
          tipo: 'pedido',
          titulo: 'Se canceló un extra',
          texto: extra.descripcion.slice(0, 120),
          enlace: `/pedidos/${extra.pedido_id}/seguimiento`,
        });
      }

      return json({ ok: true, estado: 'cancelado' }, {}, cors);
    }

    /* El repartidor acepta la cancelación de algo que ya había comprado. */
    if (accion === 'confirmar-cancelacion') {
      if (!esRepartidor || extra.espera_confirmacion !== 1) {
        return error('No hay una cancelación para confirmar.', 409, cors);
      }

      await env.DB.prepare(
        "UPDATE extras SET estado = 'cancelado', espera_confirmacion = 0, actualizado_en = datetime('now') WHERE id = ?",
      )
        .bind(extra.id)
        .run();

      await mensajeDeSistema(
        env,
        extra.pedido_id,
        usuario.id,
        `Se canceló "${extra.descripcion}" de común acuerdo.`,
      );

      await avisar(env, extra.cliente_id, {
        tipo: 'pedido',
        titulo: 'Se canceló el extra',
        texto: extra.descripcion.slice(0, 120),
        enlace: `/pedidos/${extra.pedido_id}/seguimiento`,
      });

      return json({ ok: true, estado: 'cancelado' }, {}, cors);
    }

    /* El repartidor no acepta la baja: la mercadería ya está comprada. */
    if (accion === 'rechazar-cancelacion') {
      if (!esRepartidor || extra.espera_confirmacion !== 1) {
        return error('No hay una cancelación para rechazar.', 409, cors);
      }

      await env.DB.prepare(
        "UPDATE extras SET espera_confirmacion = 0, motivo = NULL, actualizado_en = datetime('now') WHERE id = ?",
      )
        .bind(extra.id)
        .run();

      await mensajeDeSistema(
        env,
        extra.pedido_id,
        usuario.id,
        `No aceptó cancelar "${extra.descripcion}": ya lo había comprado.`,
      );

      await avisar(env, extra.cliente_id, {
        tipo: 'pedido',
        titulo: 'No aceptaron cancelar el extra',
        texto: 'Ya estaba comprado. Podés arreglarlo por el chat.',
        enlace: `/pedidos/${extra.pedido_id}/seguimiento`,
      });

      return json({ ok: true, estado: 'comprado' }, {}, cors);
    }

    return error('Acción desconocida.', 400, cors);
  }

  // ── Pagos ──

  /**
   * Inicia el cobro de un pedido y devuelve a dónde mandar al cliente.
   *
   * El pedido tiene que ser suyo y estar sin pagar: sin esas dos condiciones,
   * cualquiera podría generar cobros sobre pedidos ajenos.
   */
  const pagarPedido = /^\/pedidos\/([\w-]+)\/pagar$/.exec(ruta);

  if (pagarPedido && metodo === 'POST') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const pedido = await env.DB.prepare(
      `SELECT id, codigo, subtotal_centavos, envio_centavos, total_centavos, comercio_id,
              pago_estado
         FROM pedidos WHERE id = ? AND usuario_id = ?`,
    )
      .bind(pagarPedido[1], usuario.id)
      .first<{
        id: string;
        codigo: string;
        subtotal_centavos: number;
        envio_centavos: number;
        total_centavos: number;
        comercio_id: string;
        pago_estado: string;
      }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    if (pedido.pago_estado === 'aprobado') {
      return error('Este pedido ya está pagado.', 409, cors);
    }

    const resultado = await crearPreferencia(env, pedido, {
      email: usuario.email,
      nombre: usuario.nombre,
    });

    if (!resultado.ok) {
      return error(resultado.motivo, 502, cors);
    }

    return json({ url: resultado.url, preferenciaId: resultado.preferenciaId }, {}, cors);
  }

  /**
   * Aviso de Mercado Pago cuando un pago cambia de estado.
   *
   * Es la fuente de verdad sobre si un pedido está pagado: la vuelta del
   * navegador puede no ocurrir nunca —el cliente cierra la pestaña— y el pago
   * estar hecho igual.
   *
   * Responde 200 siempre: un error hace que Mercado Pago reintente, y si el
   * aviso viene mal formado reintentarlo no lo va a arreglar.
   */
  if (ruta === '/pagos/webhook' && metodo === 'POST') {
    const cuerpo = await leerJson<{ type?: string; data?: { id?: string } }>(request);
    const id = url.searchParams.get('data.id') ?? cuerpo.data?.id;
    const tipo = url.searchParams.get('type') ?? cuerpo.type;

    if (tipo === 'payment' && id) {
      /* No se confía en lo que trae el aviso: sólo se toma el id y se le
         pregunta a Mercado Pago cómo quedó realmente el pago. */
      await procesarAviso(env, String(id));
    }

    return json({ ok: true }, {}, cors);
  }

  /** Cómo quedó el pago de un pedido, para mostrarlo al volver del checkout. */
  const estadoPago = /^\/pedidos\/([\w-]+)\/pago$/.exec(ruta);

  if (estadoPago && metodo === 'GET') {
    const usuario = await usuarioActual(request, env);

    if (!usuario) {
      return error('Necesitás iniciar sesión', 401, cors);
    }

    const fila = await env.DB.prepare(
      `SELECT p.pago_estado, pg.metodo, pg.monto_centavos
         FROM pedidos p
         LEFT JOIN pagos pg ON pg.pedido_id = p.id
        WHERE p.id = ? AND p.usuario_id = ?
        ORDER BY pg.creado_en DESC LIMIT 1`,
    )
      .bind(estadoPago[1], usuario.id)
      .first<{ pago_estado: string; metodo: string | null; monto_centavos: number | null }>();

    if (!fila) {
      return error('No encontrado', 404, cors);
    }

    return json(
      {
        estado: fila.pago_estado,
        metodo: fila.metodo,
        monto: fila.monto_centavos ? aPesos(Number(fila.monto_centavos)) : null,
      },
      {},
      cors,
    );
  }

  /** Empieza la conexión de la cuenta de Mercado Pago del comercio. */
  if (ruta === '/pagos/conectar' && metodo === 'GET') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    if (!env.MP_CLIENT_ID) {
      return error('Falta configurar la aplicación de Mercado Pago.', 503, cors);
    }

    /* El id del comercio viaja en el estado para saber a quién conectar
       cuando Mercado Pago devuelva el código. */
    const destino = new URL('https://auth.mercadopago.com.ar/authorization');

    destino.searchParams.set('client_id', env.MP_CLIENT_ID);
    destino.searchParams.set('response_type', 'code');
    destino.searchParams.set('platform_id', 'mp');
    destino.searchParams.set('state', propio.comercioId);
    destino.searchParams.set('redirect_uri', `${env.API_PUBLIC_URL || ''}/pagos/conectar/vuelta`);

    return json({ url: destino.toString() }, {}, cors);
  }

  /** Vuelta de Mercado Pago después de que el comercio autorizó. */
  if (ruta === '/pagos/conectar/vuelta' && metodo === 'GET') {
    const codigo = url.searchParams.get('code');
    const comercioId = url.searchParams.get('state');
    const app = env.APP_PUBLIC_URL || env.APP_URL;

    if (!codigo || !comercioId) {
      return Response.redirect(`${app}/#/panel/comercio?pago=error`, 302);
    }

    const resultado = await guardarCuentaComercio(env, comercioId, codigo);

    return Response.redirect(
      `${app}/#/panel/comercio?cobros=${resultado.ok ? 'ok' : 'error'}`,
      302,
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

  /**
   * Los números del comercio.
   *
   * Se calculan sobre los pedidos reales en lugar de guardarse aparte: son
   * pocos datos y una tabla de totales acumulados se desincroniza en cuanto
   * se cancela un pedido.
   *
   * Se comparan hoy contra ayer y esta semana contra la anterior: un número
   * suelto no dice si el negocio va bien, sólo cuánto vendió.
   */
  /**
   * El comercio dice en qué punto está el pedido.
   *
   * Va de "recibido" a "preparando" a "listo", en orden. Sin esto el cliente
   * quedaba a ciegas entre que compraba y que salía el repartidor: veía "en
   * proceso" sin saber si el comercio siquiera lo había visto.
   *
   * Cada paso le avisa al cliente, porque es información que estaba
   * esperando. "Listo" además le avisa a quien lo va a llevar.
   */
  const prepararPedido = /^\/mi-comercio\/pedidos\/([\w-]+)\/preparacion$/.exec(ruta);

  if (prepararPedido && metodo === 'POST') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const body = await leerJson<{ estado?: string }>(request);
    const destino = String(body.estado ?? '');

    /* El pedido tiene que ser de su comercio: sin esta condición, se podría
       marcar como listo el de otro conociendo el id. */
    const pedido = await env.DB.prepare(
      `SELECT id, codigo, usuario_id, preparacion, estado
         FROM pedidos WHERE id = ? AND comercio_id = ?`,
    )
      .bind(prepararPedido[1], propio.comercioId)
      .first<{
        id: string;
        codigo: string;
        usuario_id: string;
        preparacion: string;
        estado: string;
      }>();

    if (!pedido) {
      return error('No encontrado', 404, cors);
    }

    if (pedido.estado === 'cancelado') {
      return error('Ese pedido está cancelado.', 409, cors);
    }

    /* Sólo se acepta el paso siguiente: marcar "listo" algo que nadie empezó
       a preparar deja al cliente esperando un pedido que no existe. */
    const SIGUIENTE: Record<string, string> = {
      recibido: 'preparando',
      preparando: 'listo',
    };

    const esperado = SIGUIENTE[pedido.preparacion];

    if (!esperado) {
      return error('Este pedido ya está listo.', 409, cors);
    }

    if (destino && destino !== esperado) {
      return error(`Después de "${pedido.preparacion}" viene "${esperado}".`, 409, cors);
    }

    await env.DB.prepare(
      `UPDATE pedidos
          SET preparacion = ?,
              preparando_en = CASE WHEN ? = 'preparando' THEN datetime('now') ELSE preparando_en END,
              listo_en = CASE WHEN ? = 'listo' THEN datetime('now') ELSE listo_en END
        WHERE id = ?`,
    )
      .bind(esperado, esperado, esperado, pedido.id)
      .run();

    /* El cliente estaba esperando saber esto. */
    const AVISOS: Record<string, { titulo: string; texto: string }> = {
      preparando: {
        titulo: `Están preparando tu pedido ${pedido.codigo}`,
        texto: 'El comercio ya lo está armando.',
      },
      listo: {
        titulo: `¡Tu pedido ${pedido.codigo} está listo!`,
        texto: 'Ya lo puede retirar el repartidor.',
      },
    };

    const aviso = AVISOS[esperado];

    if (aviso) {
      await avisar(env, pedido.usuario_id, {
        tipo: 'pedido',
        titulo: aviso.titulo,
        texto: aviso.texto,
        enlace: `/pedidos/${pedido.id}/seguimiento`,
      });
    }

    /* Al quedar listo, quien lo va a llevar tiene que enterarse: si ya lo
       tomó, es su señal para ir a buscarlo. */
    if (esperado === 'listo') {
      const asignado = await env.DB.prepare(
        `SELECT repartidor_id FROM envios
          WHERE pedido_id = ? AND repartidor_id IS NOT NULL
            AND estado NOT IN ('entregado', 'cancelado')`,
      )
        .bind(pedido.id)
        .first<{ repartidor_id: string }>();

      if (asignado?.repartidor_id) {
        await avisar(env, asignado.repartidor_id, {
          tipo: 'pedido',
          titulo: `El pedido ${pedido.codigo} está listo`,
          texto: 'Ya lo podés retirar del comercio.',
          enlace: '/panel/repartidor',
        });
      }
    }

    return json({ ok: true, preparacion: esperado }, {}, cors);
  }

  if (ruta === '/mi-comercio/metricas' && metodo === 'GET') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    /* Los cancelados no cuentan como venta: sumarlos mostraría un día bueno
       que en realidad no entró. */
    const totales = await env.DB.prepare(
      `SELECT
         COUNT(*) FILTER (WHERE date(creado_en) = date('now')) AS pedidos_hoy,
         COALESCE(SUM(total_centavos) FILTER (WHERE date(creado_en) = date('now')), 0) AS ventas_hoy,
         COUNT(*) FILTER (WHERE date(creado_en) = date('now', '-1 day')) AS pedidos_ayer,
         COALESCE(SUM(total_centavos) FILTER (WHERE date(creado_en) = date('now', '-1 day')), 0) AS ventas_ayer,
         COUNT(*) FILTER (WHERE creado_en >= datetime('now', '-7 days')) AS pedidos_semana,
         COALESCE(SUM(total_centavos) FILTER (WHERE creado_en >= datetime('now', '-7 days')), 0) AS ventas_semana,
         COUNT(*) FILTER (WHERE creado_en >= datetime('now', '-14 days') AND creado_en < datetime('now', '-7 days')) AS pedidos_semana_previa,
         COALESCE(SUM(total_centavos) FILTER (WHERE creado_en >= datetime('now', '-14 days') AND creado_en < datetime('now', '-7 days')), 0) AS ventas_semana_previa,
         COUNT(*) FILTER (WHERE estado = 'proceso') AS en_proceso
       FROM pedidos WHERE comercio_id = ? AND estado != 'cancelado'`,
    )
      .bind(propio.comercioId)
      .first<Record<string, number>>();

    const catalogo = await env.DB.prepare(
      `SELECT
         (SELECT COUNT(*) FROM productos WHERE comercio_id = ? AND activo = 1) AS productos,
         (SELECT COUNT(*) FROM ofertas WHERE comercio_id = ? AND activa = 1) AS ofertas`,
    )
      .bind(propio.comercioId, propio.comercioId)
      .first<{ productos: number; ofertas: number }>();

    /* Los productos más vendidos de la última semana: es lo que el comercio
       mira para decidir qué reponer. */
    const { results: masVendidos } = await env.DB.prepare(
      `SELECT pi.nombre, SUM(pi.escalon + 1) AS unidades, SUM(pi.subtotal_centavos) AS total
         FROM pedido_items pi
         JOIN pedidos p ON p.id = pi.pedido_id
        WHERE p.comercio_id = ? AND p.estado != 'cancelado'
          AND p.creado_en >= datetime('now', '-7 days')
        GROUP BY pi.nombre
        ORDER BY unidades DESC
        LIMIT 5`,
    )
      .bind(propio.comercioId)
      .all<{ nombre: string; unidades: number; total: number }>();

    return json(
      {
        hoy: {
          pedidos: Number(totales?.pedidos_hoy ?? 0),
          ventas: aPesos(Number(totales?.ventas_hoy ?? 0)),
        },
        ayer: {
          pedidos: Number(totales?.pedidos_ayer ?? 0),
          ventas: aPesos(Number(totales?.ventas_ayer ?? 0)),
        },
        semana: {
          pedidos: Number(totales?.pedidos_semana ?? 0),
          ventas: aPesos(Number(totales?.ventas_semana ?? 0)),
        },
        semanaPrevia: {
          pedidos: Number(totales?.pedidos_semana_previa ?? 0),
          ventas: aPesos(Number(totales?.ventas_semana_previa ?? 0)),
        },
        enProceso: Number(totales?.en_proceso ?? 0),
        productos: Number(catalogo?.productos ?? 0),
        ofertas: Number(catalogo?.ofertas ?? 0),
        /* El ticket promedio sale de la semana: con los de hoy solos, un día
           flojo daría un número que no dice nada. */
        ticketPromedio:
          Number(totales?.pedidos_semana ?? 0) > 0
            ? aPesos(
                Math.round(
                  Number(totales?.ventas_semana ?? 0) / Number(totales?.pedidos_semana ?? 1),
                ),
              )
            : 0,
        masVendidos: masVendidos.map((fila) => ({
          nombre: fila.nombre,
          unidades: Number(fila.unidades),
          total: aPesos(Number(fila.total)),
        })),
      },
      {},
      cors,
    );
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

  /**
   * Un producto con su comercio y dónde más conseguirlo.
   *
   * La comparación busca por nombre en otros comercios: es lo que hace útil
   * la pantalla en un pueblo donde el mismo producto está en cuatro lugares
   * a precios distintos. No es infalible —dos comercios pueden escribirlo
   * diferente— pero acierta en lo que la gente compra todos los días.
   */
  const productoDetalle = /^\/productos\/([\w-]+)$/.exec(ruta);

  if (productoDetalle && metodo === 'GET') {
    const producto = await env.DB.prepare(
      `SELECT p.id, p.nombre, p.descripcion, p.precio_centavos, p.unidad_venta,
              p.fotos, p.video_url, p.stock, p.categoria_id,
              c.id AS comercio_id, c.nombre AS comercio, c.direccion AS comercio_direccion,
              c.rubro_id, c.minimo_centavos
         FROM productos p
         JOIN comercios c ON c.id = p.comercio_id
        WHERE p.id = ? AND p.activo = 1 AND c.estado = 'aprobado'`,
    )
      .bind(productoDetalle[1])
      .first<Record<string, unknown>>();

    if (!producto) {
      return error('Producto no encontrado', 404, cors);
    }

    /* El mismo producto en otros comercios, del más barato al más caro. */
    const { results: enOtros } = await env.DB.prepare(
      `SELECT p.id, p.precio_centavos, c.id AS comercio_id, c.nombre AS comercio,
              c.direccion AS comercio_direccion
         FROM productos p
         JOIN comercios c ON c.id = p.comercio_id
        WHERE lower(p.nombre) = lower(?) AND p.id != ? AND p.activo = 1
          AND c.estado = 'aprobado'
        ORDER BY p.precio_centavos ASC
        LIMIT 5`,
    )
      .bind(String(producto.nombre), String(producto.id))
      .all<{
        id: string;
        precio_centavos: number;
        comercio_id: string;
        comercio: string;
        comercio_direccion: string;
      }>();

    /* Si está en oferta, se dice: es lo que cambia la decisión de comprar. */
    const oferta = await env.DB.prepare(
      `SELECT o.id, o.tipo, o.titulo, o.porcentaje, o.cantidad,
              o.precio_final_centavos, o.precio_lista_centavos
         FROM ofertas o
         JOIN oferta_productos op ON op.oferta_id = o.id
        WHERE op.producto_id = ? AND o.activa = 1
          AND (o.desde IS NULL OR o.desde <= datetime('now'))
          AND (o.hasta IS NULL OR o.hasta >= datetime('now'))
        ORDER BY o.creado_en DESC LIMIT 1`,
    )
      .bind(String(producto.id))
      .first<{
        id: string;
        tipo: string;
        titulo: string;
        porcentaje: number | null;
        cantidad: number | null;
        precio_final_centavos: number;
        precio_lista_centavos: number;
      }>();

    return json(
      {
        producto: {
          ...productoSalida(producto),
          minimo: aPesos(Number(producto.minimo_centavos ?? 0)),
        },
        oferta: oferta
          ? {
              id: oferta.id,
              tipo: oferta.tipo,
              titulo: oferta.titulo,
              porcentaje: oferta.porcentaje,
              cantidad: oferta.cantidad,
              precioFinal: aPesos(Number(oferta.precio_final_centavos)),
              precioLista: aPesos(Number(oferta.precio_lista_centavos)),
            }
          : null,
        enOtrosComercios: enOtros.map((fila) => ({
          productoId: fila.id,
          comercioId: fila.comercio_id,
          comercio: fila.comercio,
          direccion: fila.comercio_direccion,
          precio: aPesos(Number(fila.precio_centavos)),
        })),
      },
      {},
      cors,
    );
  }

  // ── El plan del sistema de gestión ──

  /**
   * Cuánto sale y si el comercio ya lo tiene.
   *
   * El precio vive acá y no en la pantalla porque el día que cambie tiene que
   * cambiar en la web y en las dos aplicaciones a la vez. Una copia en cada
   * lado se desincroniza, y un cartel que diga un precio distinto del que se
   * cobra es un problema serio.
   */
  if (ruta === '/plan-gestion' && metodo === 'GET') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const fila = await env.DB.prepare(
      'SELECT gestion_activa, gestion_desde FROM comercios WHERE id = ?',
    )
      .bind(propio.comercioId)
      .first<{ gestion_activa: number; gestion_desde: string | null }>();

    return json(
      {
        activo: Boolean(fila?.gestion_activa),
        desde: fila?.gestion_desde ?? null,
        precioCentavos: PRECIO_GESTION_CENTAVOS,
        precio: aPesos(PRECIO_GESTION_CENTAVOS),
      },
      {},
      cors,
    );
  }

  /**
   * Contratar el sistema de gestión.
   *
   * Por ahora se activa en el momento. Cuando haya que cobrarlo de verdad,
   * acá va la preferencia de Mercado Pago y la activación pasa a hacerla el
   * aviso de pago, igual que con los pedidos: la vuelta del navegador puede
   * no ocurrir nunca y el pago estar hecho igual.
   */
  if (ruta === '/plan-gestion' && metodo === 'POST') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    await env.DB.prepare(
      `UPDATE comercios
          SET gestion_activa = 1,
              gestion_desde = COALESCE(gestion_desde, datetime('now'))
        WHERE id = ?`,
    )
      .bind(propio.comercioId)
      .run();

    return json({ activo: true }, {}, cors);
  }

  /** Dar de baja el sistema. Los datos quedan: si vuelve, están. */
  if (ruta === '/plan-gestion' && metodo === 'DELETE') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    await env.DB.prepare('UPDATE comercios SET gestion_activa = 0 WHERE id = ?')
      .bind(propio.comercioId)
      .run();

    return json({ activo: false }, {}, cors);
  }

  // ── El sistema de gestión ──
  //
  // Todo lo que cuelga de /gestion pide comercio propio, así que la guardia
  // se hace una sola vez acá en lugar de repetirla en cada ruta.

  if (ruta.startsWith('/gestion/')) {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    /* El sistema de gestión se paga aparte. Sin esto, cualquier comercio
       aprobado lo tendría entero: la guardia de arriba sólo mira que el
       comercio sea suyo, no que lo haya contratado.

       Se comprueba acá y no en cada ruta porque son más de veinte, y la que
       se olvide queda abierta. El frontend además esconde el menú, pero eso
       es comodidad: quien escriba la dirección a mano llega igual, y la
       decisión de quién entra no puede vivir en el navegador. */
    const plan = await env.DB.prepare(
      'SELECT gestion_activa FROM comercios WHERE id = ?',
    )
      .bind(propio.comercioId)
      .first<{ gestion_activa: number }>();

    if (!plan?.gestion_activa) {
      return error('Tu comercio no tiene el sistema de gestión activo', 403, cors);
    }

    const respuesta = await rutasGestion(ruta, metodo, request, {
      env,
      usuario: propio.usuario,
      comercioId: propio.comercioId,
      cors,
    });

    if (respuesta) {
      return respuesta;
    }
  }

  // ── Datos y horarios del comercio ──

  /** El comercio corrige sus datos: dirección, teléfono, logo. */
  if (ruta === '/mi-comercio' && metodo === 'PATCH') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const body = await leerJson<Record<string, unknown>>(request);

    /* Sólo estos campos: el rubro y el CUIT definen quién es y se revisaron
       al aprobarlo, así que cambiarlos tiene que pasar por administración. */
    const CAMPOS: Record<string, string> = {
      nombre: 'nombre',
      direccion: 'direccion',
      telefono: 'telefono',
      email: 'email',
      descripcion: 'descripcion',
      zona: 'zona',
      logoUrl: 'logo_url',
      lat: 'lat',
      lon: 'lon',
      minimo: 'minimo_centavos',
    };

    const cambios: string[] = [];
    const valores: unknown[] = [];

    for (const [entrada, columna] of Object.entries(CAMPOS)) {
      if (body[entrada] === undefined) {
        continue;
      }

      cambios.push(`${columna} = ?`);
      valores.push(
        columna === 'minimo_centavos' ? aCentavos(Number(body[entrada] ?? 0)) : body[entrada],
      );
    }

    if (typeof body.cerradoTemporal === 'boolean') {
      cambios.push('cerrado_temporal = ?');
      valores.push(body.cerradoTemporal ? 1 : 0);
    }

    if (cambios.length === 0) {
      return error('No hay nada que cambiar.', 400, cors);
    }

    await env.DB.prepare(`UPDATE comercios SET ${cambios.join(', ')} WHERE id = ?`)
      .bind(...valores, propio.comercioId)
      .run();

    return json({ ok: true }, {}, cors);
  }

  /** Los horarios del comercio. */
  if (ruta === '/mi-comercio/horarios' && metodo === 'GET') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const { results } = await env.DB.prepare(
      'SELECT id, dia, abre_min, cierra_min FROM horarios WHERE comercio_id = ? ORDER BY dia, abre_min',
    )
      .bind(propio.comercioId)
      .all<{ id: string; dia: number; abre_min: number; cierra_min: number }>();

    return json(
      {
        horarios: results.map((fila) => ({
          ...fila,
          abre: aHora(fila.abre_min),
          cierra: aHora(fila.cierra_min),
        })),
        dias: DIAS,
      },
      {},
      cors,
    );
  }

  /**
   * Reemplaza los horarios completos.
   *
   * Se reemplaza todo y no se editan tramos sueltos: un horario es un
   * conjunto, y editar de a uno deja estados intermedios raros —un comercio
   * sin ningún día cargado mientras se está corrigiendo el martes.
   */
  if (ruta === '/mi-comercio/horarios' && metodo === 'PUT') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const body = await leerJson<{
      horarios?: Array<{ dia: number; abre: string; cierra: string }>;
    }>(request);

    const tramos = Array.isArray(body.horarios) ? body.horarios : [];
    const escrituras = [
      env.DB.prepare('DELETE FROM horarios WHERE comercio_id = ?').bind(propio.comercioId),
    ];

    for (const tramo of tramos) {
      const dia = Math.trunc(Number(tramo.dia));
      const abre = aMinutos(String(tramo.abre ?? ''));
      const cierra = aMinutos(String(tramo.cierra ?? ''));

      if (dia < 0 || dia > 6 || abre === null || cierra === null) {
        return error('Revisá los horarios: hay uno mal cargado.', 400, cors);
      }

      if (cierra <= abre) {
        return error('La hora de cierre tiene que ser posterior a la de apertura.', 400, cors);
      }

      escrituras.push(
        env.DB.prepare(
          'INSERT INTO horarios (id, comercio_id, dia, abre_min, cierra_min) VALUES (?, ?, ?, ?, ?)',
        ).bind(nuevoId(), propio.comercioId, dia, abre, cierra),
      );
    }

    await env.DB.batch(escrituras);

    return json({ ok: true, tramos: tramos.length }, {}, cors);
  }

  /**
   * El comercio ajusta el stock de un producto.
   *
   * Es lo que evita que el cliente pida algo que no hay y el repartidor viaje
   * para nada.
   */
  const stockProducto = /^\/mi-comercio\/productos\/([\w-]+)\/stock$/.exec(ruta);

  if (stockProducto && metodo === 'POST') {
    const propio = await comercioDelUsuario(request, env, cors);

    if ('respuesta' in propio) {
      return propio.respuesta;
    }

    const body = await leerJson<{ stock?: number | null }>(request);

    /* null significa "no llevo control": es distinto de cero, que es
       "no me queda ninguno". */
    const stock =
      body.stock === null || body.stock === undefined
        ? null
        : Math.max(0, Math.trunc(Number(body.stock)));

    const propioProducto = await env.DB.prepare(
      'SELECT id FROM productos WHERE id = ? AND comercio_id = ?',
    )
      .bind(stockProducto[1], propio.comercioId)
      .first();

    if (!propioProducto) {
      return error('Ese producto no es tuyo', 403, cors);
    }

    await env.DB.prepare('UPDATE productos SET stock = ? WHERE id = ?')
      .bind(stock, stockProducto[1])
      .run();

    return json({ ok: true, stock, estado: estadoDeStock(stock) }, {}, cors);
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
      'SELECT id, rubro_id FROM comercios WHERE id = ? AND usuario_id = ?',
    )
      .bind(comercioId, usuario.id)
      .first<{ id: string; rubro_id: string }>();

    if (!propio) {
      return error('Ese comercio no es tuyo', 403, cors);
    }

    const id = nuevoId();

    /* El costo es opcional: sin él la venta se registra igual, sólo que no
       se puede saber la ganancia. Cero y "no lo cargué" son cosas distintas,
       así que se guarda null y no 0. */
    const costo =
      body.costo === undefined || body.costo === null || body.costo === ''
        ? null
        : aCentavos(Number(body.costo));

    await env.DB.prepare(
      `INSERT INTO productos
        (id, comercio_id, categoria_id, nombre, descripcion, precio_centavos, unidad_venta, fotos, video_url, stock, tamano, costo_centavos, codigo_barras)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        /* Cuánto ocupa: decide si el pedido entra en una moto. Si el comercio
           no lo declara se sugiere por rubro, para no sumarle un campo más a
           cada alta. */
        String(body.tamano ?? tamanoSugerido(propio.rubro_id, String(body.unidadVenta ?? 'unidad'))),
        costo,
        body.codigoBarras ? String(body.codigoBarras).trim() : null,
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

    /* El costo y el código sólo se tocan si vinieron en el cuerpo: así una
       pantalla que no los muestra no los borra sin querer al guardar. */
    const tocaCosto = 'costo' in body;
    const costo =
      body.costo === undefined || body.costo === null || body.costo === ''
        ? null
        : aCentavos(Number(body.costo));

    const tocaCodigo = 'codigoBarras' in body;
    const codigo = body.codigoBarras ? String(body.codigoBarras).trim() : null;

    await env.DB.prepare(
      `UPDATE productos
          SET nombre = ?, descripcion = ?, precio_centavos = ?, unidad_venta = ?,
              fotos = ?, video_url = ?, stock = ?, categoria_id = ?,
              tamano = COALESCE(?, tamano),
              costo_centavos = CASE WHEN ? = 1 THEN ? ELSE costo_centavos END,
              codigo_barras = CASE WHEN ? = 1 THEN ? ELSE codigo_barras END
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
        body.tamano ?? null,
        tocaCosto ? 1 : 0,
        costo,
        tocaCodigo ? 1 : 0,
        codigo,
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

    /* Si ya lo puntuó y si todavía se puede dar de baja viajan con el
       pedido: sin esto la pantalla ofrece acciones que el servidor rechaza,
       y el cliente aprende a desconfiar de los botones. */
    const { results } = await env.DB.prepare(
      `SELECT p.*, c.nombre AS comercio_nombre, c.rubro_id,
              EXISTS (SELECT 1 FROM resenas r WHERE r.pedido_id = p.id) AS resenado,
              e.estado AS envio_estado,
              u.nombre AS repartidor_nombre
         FROM pedidos p
         JOIN comercios c ON c.id = p.comercio_id
         LEFT JOIN envios e ON e.pedido_id = p.id
         LEFT JOIN usuarios u ON u.id = e.repartidor_id
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
          resenado: Number(fila.resenado) === 1,
          cancelable: sePuedeCancelar(
            String(fila.estado),
            fila.envio_estado === null ? null : String(fila.envio_estado),
          ),
          repartidor: fila.repartidor_nombre === null ? null : String(fila.repartidor_nombre),
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
      /* Qué prefiere el cliente: que venga cualquiera y acepta que se
         fraccione, que espere un auto para recibir todo junto, o que se
         parta en varias entregas para recibir antes. */
      preferenciaEnvio?: 'cualquiera' | 'auto' | 'fraccionar';
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
      `SELECT id, nombre, precio_centavos, unidad_venta, stock,
              COALESCE(tamano, 'mediano') AS tamano
         FROM productos
        WHERE id IN (${marcadores}) AND comercio_id = ? AND activo = 1`,
    )
      .bind(...ids, body.comercioId)
      .all<{
        id: string;
        nombre: string;
        precio_centavos: number;
        unidad_venta: string;
        stock: number | null;
        tamano: string;
      }>();

    if (productos.length !== ids.length) {
      return error('Algún producto ya no está disponible.', 409, cors);
    }

    const porId = new Map(productos.map((producto) => [producto.id, producto]));

    /* Lo agotado no se puede pedir: es lo que evita que el repartidor vaya
       hasta el comercio a buscar algo que no está. El comercio lo declara
       desde su panel, y quien no lleva control deja el stock sin cargar. */
    const agotados = items
      .map((item) => porId.get(item.productoId))
      .filter(
        (producto): producto is NonNullable<typeof producto> =>
          !!producto && producto.stock !== null && producto.stock <= 0,
      );

    if (agotados.length > 0) {
      return error(
        `Sin stock: ${agotados.map((producto) => producto.nombre).join(', ')}.`,
        409,
        cors,
      );
    }

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

    /* Cuánto ocupa lo que se pidió: de acá sale si entra en una moto y
       cuántas entregas hacen falta. */
    const litros = litrosDeItems(
      lineas.map((linea) => ({
        tamano: linea.producto.tamano,
        unidad_venta: linea.producto.unidad_venta,
        escalon: linea.escalon,
      })),
    );

    const preferencia = body.preferenciaEnvio ?? 'cualquiera';

    /* En cuántas entregas se va a partir. Si el cliente lo pidió, se parte
       aunque entre: paga más envíos para recibir antes. Si no, se parte sólo
       cuando no hay más remedio. */
    const partes =
      preferencia === 'fraccionar'
        ? Math.max(2, viajesNecesarios(litros, 'moto'))
        : preferencia === 'auto'
          ? viajesNecesarios(litros, 'auto')
          : 1;

    /* Cada entrega se cobra: son viajes distintos hasta el comercio. El
       cliente ve el total antes de confirmar. */
    const envioUnitario = subtotal >= 1_500_000 ? 0 : 120_000;
    const envio = envioUnitario * partes;

    /* Si no entra en un auto, esto es un flete: va a la cola de quienes
       tienen camioneta o camión, y se cotiza en vez de tener precio fijo.
       Lo decide el volumen y no el cliente, porque el que sabe si entra es
       el que lo va a cargar. */
    const tipo = litros > CAPACIDAD.auto ? 'flete' : 'pedido';
    const pedidoId = nuevoId();
    const codigo = `#${Date.now().toString().slice(-6)}`;

    /* Cabecera y líneas en un batch: si falla una línea no queda un pedido
       a medias en la base. */
    await env.DB.batch([
      env.DB.prepare(
        `INSERT INTO pedidos
          (id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
           subtotal_centavos, envio_centavos, total_centavos, metodo_pago,
           preferencia_envio, volumen_litros, partes_total, tipo)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        preferencia,
        Math.round(litros * 10) / 10,
        partes > 1 ? partes : null,
        tipo,
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

    /* Lo vendido se descuenta: si no, el stock diría que hay diez cuando ya
       se vendieron nueve, y el problema vuelve a aparecer más tarde. */
    await descontarStock(
      env,
      lineas.map((linea) => ({
        productoId: linea.producto.id,
        unidades:
          linea.producto.unidad_venta === 'unidad' || linea.producto.unidad_venta === 'docena'
            ? linea.escalon + 1
            : 1,
      })),
    );

    /* Al comercio le entra un pedido: es el aviso que hace que lo prepare.
       Sin esto tendría que estar mirando el panel todo el día. */
    const duenoComercio = await env.DB.prepare(
      'SELECT usuario_id, nombre FROM comercios WHERE id = ?',
    )
      .bind(body.comercioId)
      .first<{ usuario_id: string | null; nombre: string }>();

    if (duenoComercio?.usuario_id) {
      await avisar(env, duenoComercio.usuario_id, {
        tipo: 'pedido',
        titulo: `Pedido nuevo ${codigo}`,
        texto: `${lineas.length} ${lineas.length === 1 ? 'producto' : 'productos'} · ${aPesos(subtotal + envio)}`,
        enlace: '/panel/comercio',
      });
    }

    return json(
      {
        id: pedidoId,
        codigo,
        total: aPesos(subtotal + envio),
        litros: Math.round(litros * 10) / 10,
        partes,
        /* Con qué vehículos entra de una sola vez: el cliente entiende por
           qué su pedido puede tardar más o llegar en tandas. */
        vehiculos: vehiculosQueEntran(litros),
      },
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

    /* La primera dirección de una cuenta queda como principal: es a donde se
       entrega salvo que el cliente elija otra, y sin ninguna marcada el
       carrito tendría que adivinar cuál usar. */
    const tiene = await env.DB.prepare(
      'SELECT 1 AS ok FROM direcciones WHERE usuario_id = ? LIMIT 1',
    )
      .bind(usuario.id)
      .first();

    await env.DB.prepare(
      `INSERT INTO direcciones (id, usuario_id, etiqueta, direccion, lat, lon, es_principal)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        usuario.id,
        String(body.etiqueta ?? 'Casa'),
        String(body.direccion ?? ''),
        body.lat ?? null,
        body.lon ?? null,
        tiene ? 0 : 1,
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
       lo que la app sabe mostrar y se limita el peso. Al servirlo se vuelve a
       comprobar, porque esto solo no garantiza qué hay adentro. */
    if (!TIPOS_MEDIA.includes(archivo.type)) {
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

    /* El tipo se vuelve a acotar al servir y no se confía en lo que quedó
       guardado: si algún día entrara un archivo con un tipo que no
       corresponde, acá se sirve como binario en vez de como algo que el
       navegador podría ejecutar. */
    const guardado = objeto.httpMetadata?.contentType ?? '';
    const tipo = TIPOS_MEDIA.includes(guardado) ? guardado : 'application/octet-stream';

    return new Response(objeto.body, {
      headers: {
        'Content-Type': tipo,
        /* Inmutable: la clave incluye un uuid, así que el archivo nunca cambia. */
        'Cache-Control': 'public, max-age=31536000, immutable',
        /* Que el navegador no lo interprete como otra cosa, y que nada de lo
           que venga de acá se ejecute: un archivo subido por un usuario no
           tiene por qué correr scripts en el dominio de la API. */
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': "default-src 'none'; sandbox",
        /* Se descarga en vez de abrirse, salvo las imágenes y videos que la
           app muestra: si algo se coló con otro tipo, no se abre solo. */
        'Content-Disposition': TIPOS_MEDIA.includes(guardado) ? 'inline' : 'attachment',
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

/**
 * Deja un aviso para alguien.
 *
 * Nunca corta lo que la app estaba haciendo: que falle una notificación no
 * puede hacer fracasar un pedido. Por eso devuelve la promesa ya atrapada, y
 * quien llama decide si esperarla.
 */
function avisar(
  env: Env,
  usuarioId: string,
  aviso: { tipo: string; titulo: string; texto?: string; enlace?: string },
) {
  return env.DB.prepare(
    'INSERT INTO notificaciones (id, usuario_id, tipo, titulo, texto, enlace) VALUES (?, ?, ?, ?, ?, ?)',
  )
    .bind(
      nuevoId(),
      usuarioId,
      aviso.tipo,
      aviso.titulo,
      aviso.texto ?? null,
      aviso.enlace ?? null,
    )
    .run()
    .catch((fallo) => {
      console.warn('No se pudo dejar la notificación', fallo);
    });
}

/**
 * Parte un pedido en varias entregas.
 *
 * Los items se reparten entre las partes y cada una queda como un pedido
 * propio que apunta al original: así lo puede tomar un repartidor distinto y
 * el cliente ve "parte 1 de 3" en lugar de tres pedidos sueltos.
 *
 * El original queda como cabecera —guarda el total y el pago— y sus items
 * pasan a las partes, para que no se cuente dos veces lo mismo.
 */
async function partirPedido(env: Env, pedidoId: string, partes: number) {
  const pedido = await env.DB.prepare(
    `SELECT id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
            metodo_pago, envio_centavos
       FROM pedidos WHERE id = ?`,
  )
    .bind(pedidoId)
    .first<{
      id: string;
      codigo: string;
      usuario_id: string;
      comercio_id: string;
      direccion_id: string | null;
      direccion_texto: string;
      metodo_pago: string | null;
      envio_centavos: number;
    }>();

  if (!pedido) {
    return;
  }

  const { results: items } = await env.DB.prepare(
    `SELECT pi.id, pi.producto_id, pi.nombre, pi.precio_centavos, pi.unidad_venta,
            pi.escalon, pi.subtotal_centavos,
            COALESCE(pr.tamano, 'mediano') AS tamano
       FROM pedido_items pi
       LEFT JOIN productos pr ON pr.id = pi.producto_id
      WHERE pi.pedido_id = ?`,
  )
    .bind(pedidoId)
    .all<{
      id: string;
      producto_id: string | null;
      nombre: string;
      precio_centavos: number;
      unidad_venta: string;
      escalon: number;
      subtotal_centavos: number;
      tamano: string;
    }>();

  if (items.length < 2) {
    /* Un solo producto no se puede repartir entre dos viajes. */
    return;
  }

  const grupos = repartirEnPartes(
    items.map((item) => ({
      ...item,
      litros: LITROS_POR_TAMANO[item.tamano] ?? LITROS_POR_TAMANO.mediano,
    })),
    partes,
  );

  const escrituras = [
    env.DB.prepare('UPDATE pedidos SET partes_total = ? WHERE id = ?').bind(
      grupos.length,
      pedidoId,
    ),
  ];

  grupos.forEach((grupo, indice) => {
    const parteId = nuevoId();
    const subtotalParte = grupo.items.reduce((suma, item) => suma + item.subtotal_centavos, 0);

    escrituras.push(
      env.DB.prepare(
        `INSERT INTO pedidos
          (id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
           subtotal_centavos, envio_centavos, total_centavos, metodo_pago,
           pedido_padre_id, parte_numero, partes_total, volumen_litros)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      ).bind(
        parteId,
        `${pedido.codigo}-${indice + 1}`,
        pedido.usuario_id,
        pedido.comercio_id,
        pedido.direccion_id,
        pedido.direccion_texto,
        subtotalParte,
        /* El envío ya se cobró entero en el pedido original: las partes no
           vuelven a cobrarlo. */
        0,
        subtotalParte,
        pedido.metodo_pago,
        pedidoId,
        indice + 1,
        grupos.length,
        Math.round(grupo.litros * 10) / 10,
      ),
    );

    for (const item of grupo.items) {
      escrituras.push(
        env.DB.prepare('UPDATE pedido_items SET pedido_id = ? WHERE id = ?').bind(
          parteId,
          item.id,
        ),
      );
    }
  });

  await env.DB.batch(escrituras);

  await avisar(env, pedido.usuario_id, {
    tipo: 'envio',
    titulo: `Tu pedido ${pedido.codigo} llega en ${grupos.length} entregas`,
    texto: 'No entraba todo en un viaje. Te avisamos cuando salga cada una.',
    enlace: '/pedidos',
  });
}

/**
 * Si quien llama puede ver este pedido.
 *
 * Las tres partes que hablan de un pedido: quien lo hizo, quien lo prepara y
 * quien lo lleva. Es la misma condición que usa el chat, y por eso vive acá
 * en lugar de repetirse en cada ruta.
 */
async function puedeVerPedido(env: Env, pedidoId: string, request: Request) {
  const usuario = await usuarioActual(request, env);

  if (!usuario) {
    return null;
  }

  const permitido = await env.DB.prepare(
    `SELECT 1 AS ok FROM pedidos p
       LEFT JOIN comercios c ON c.id = p.comercio_id
       LEFT JOIN envios e ON e.pedido_id = p.id
      WHERE p.id = ?
        AND (p.usuario_id = ? OR c.usuario_id = ? OR e.repartidor_id = ?)`,
  )
    .bind(pedidoId, usuario.id, usuario.id, usuario.id)
    .first();

  return permitido ? usuario : null;
}

/**
 * Deja un aviso en el chat que no escribió nadie.
 *
 * "Fulano se sumó al chat", "el extra fue aceptado". La pantalla los muestra
 * centrados y en gris, para que no se confundan con lo que dice una persona.
 *
 * Nunca corta lo que la app estaba haciendo: que falle un aviso no puede
 * hacer fracasar el hecho que lo originó.
 */
function mensajeDeSistema(env: Env, pedidoId: string, autorId: string, texto: string) {
  return env.DB.prepare(
    "INSERT INTO pedido_mensajes (id, pedido_id, autor_id, texto, tipo) VALUES (?, ?, ?, ?, 'sistema')",
  )
    .bind(nuevoId(), pedidoId, autorId, texto)
    .run()
    .catch((fallo) => {
      console.warn('No se pudo dejar el aviso en el chat', fallo);
    });
}

/**
 * Recalcula el promedio de un comercio.
 *
 * Se guarda calculado porque se lee en cada listado: sacarlo al vuelo sería
 * recorrer todas sus reseñas cada vez que alguien busca un comercio.
 */
async function recalcularPuntaje(env: Env, comercioId: string) {
  const resumen = await env.DB.prepare(
    'SELECT AVG(puntaje_comercio) AS promedio, COUNT(*) AS total FROM resenas WHERE comercio_id = ?',
  )
    .bind(comercioId)
    .first<{ promedio: number | null; total: number }>();

  await env.DB.prepare('UPDATE comercios SET puntaje = ?, resenas_count = ? WHERE id = ?')
    .bind(
      resumen?.promedio ? Math.round(Number(resumen.promedio) * 10) / 10 : null,
      Number(resumen?.total ?? 0),
      comercioId,
    )
    .run();
}

/** Los horarios de varios comercios, agrupados, en una sola consulta. */
async function horariosDe(env: Env, comercioIds: string[]) {
  const porComercio = new Map<
    string,
    Array<{ dia: number; abre_min: number; cierra_min: number }>
  >();

  if (comercioIds.length === 0) {
    return porComercio;
  }

  const marcadores = comercioIds.map(() => '?').join(',');
  const { results } = await env.DB.prepare(
    `SELECT comercio_id, dia, abre_min, cierra_min FROM horarios
      WHERE comercio_id IN (${marcadores})`,
  )
    .bind(...comercioIds)
    .all<{ comercio_id: string; dia: number; abre_min: number; cierra_min: number }>();

  for (const fila of results) {
    const lista = porComercio.get(fila.comercio_id) ?? [];

    lista.push({ dia: fila.dia, abre_min: fila.abre_min, cierra_min: fila.cierra_min });
    porComercio.set(fila.comercio_id, lista);
  }

  return porComercio;
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
  /* Dos planes distintos, que se cobran por separado: `premium` mejora la
     posición en el listado, `gestionActiva` abre el sistema de gestión. */
  premium: Boolean(fila.premium),
  gestionActiva: Boolean(fila.gestion_activa),
  minimo: fila.minimo_centavos ? aPesos(Number(fila.minimo_centavos)) : 0,
});

const productoSalida = (fila: Record<string, unknown>) => ({
  ...fila,
  precio: aPesos(Number(fila.precio_centavos)),
  /* Null se conserva: "no cargué el costo" no es lo mismo que "me sale
     gratis", y de la diferencia depende que la ganancia se pueda calcular. */
  costo: fila.costo_centavos === null || fila.costo_centavos === undefined
    ? null
    : aPesos(Number(fila.costo_centavos)),
  codigoBarras: fila.codigo_barras ?? null,
  fotos: JSON.parse(String(fila.fotos ?? '[]')),
});

/**
 * Si el pedido todavía se puede dar de baja con un botón.
 *
 * Una vez retirado está en la calle: cancelarlo dejaría al repartidor con la
 * mercadería y sin instrucciones, así que a partir de ahí se arregla
 * hablando. Vive acá y no en cada pantalla para que el botón que se ve y la
 * regla que decide sean lo mismo.
 */
export const ENVIO_YA_SALIO = ['retirado', 'en_camino', 'entregado'];

export const sePuedeCancelar = (estado: string, envioEstado: string | null) =>
  estado === 'proceso' && !(envioEstado !== null && ENVIO_YA_SALIO.includes(envioEstado));

const pedidoSalida = (fila: Record<string, unknown>) => ({
  ...fila,
  subtotal: aPesos(Number(fila.subtotal_centavos)),
  envio: aPesos(Number(fila.envio_centavos)),
  total: aPesos(Number(fila.total_centavos)),
});
