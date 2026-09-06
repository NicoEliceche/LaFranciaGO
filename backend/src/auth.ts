import { type Env, error, json, nuevoId } from './lib';

/**
 * Reglas de autenticación, siguiendo las guías de OWASP.
 */

/* ── Contraseñas ── */

/**
 * OWASP recomienda longitud mínima y no exigir combinaciones de símbolos: las
 * reglas de "una mayúscula y un número" empujan a la gente a claves como
 * "Password1!", que son predecibles. Es mejor pedir largo y rechazar las más
 * usadas.
 */
const LARGO_MINIMO = 8;
const LARGO_MAXIMO = 128;

/**
 * Las más usadas en filtraciones. La lista completa tiene miles; acá van las
 * que aparecen primero en cualquier ataque por diccionario, incluidas las
 * habituales en español.
 */
const CLAVES_COMUNES = new Set([
  '12345678', '123456789', '1234567890', 'password', 'password1', 'password123',
  'qwerty123', 'contrasena', 'contraseña', '11111111', '00000000', 'abc12345',
  'iloveyou', 'admin123', 'welcome1', 'argentina', 'boca1234', 'river123',
  'футбол', 'football', 'baseball', 'sunshine', 'princess', 'dragon12',
]);

/** Devuelve el motivo del rechazo, o null si la contraseña sirve. */
export function validarPassword(password: string, email: string, nombre: string) {
  if (password.length < LARGO_MINIMO) {
    return `La contraseña necesita al menos ${LARGO_MINIMO} caracteres.`;
  }

  /* El tope evita que alguien mande megabytes y haga trabajar al servidor
     de más: cada intento de hash cuesta tiempo de CPU. */
  if (password.length > LARGO_MAXIMO) {
    return 'La contraseña es demasiado larga.';
  }

  const normalizada = password.toLowerCase();

  if (CLAVES_COMUNES.has(normalizada)) {
    return 'Esa contraseña es de las más usadas. Elegí otra.';
  }

  /* Usar el propio email o nombre como contraseña es de lo primero que
     prueba cualquiera que conozca a la persona. */
  const usuario = email.split('@')[0]?.toLowerCase() ?? '';

  if (usuario.length >= 4 && normalizada.includes(usuario)) {
    return 'La contraseña no puede contener tu email.';
  }

  if (nombre.length >= 4 && normalizada.includes(nombre.toLowerCase())) {
    return 'La contraseña no puede contener tu nombre.';
  }

  return null;
}

/** Validación de email pragmática: lo definitivo es que llegue el correo. */
export function validarEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

/* ── Límite de intentos ── */

const MAX_INTENTOS = 5;
const VENTANA_MINUTOS = 15;

/**
 * Frena los ataques por fuerza bruta contra el login.
 *
 * Se cuenta por email y por IP: sólo por IP dejaría pasar ataques desde
 * muchas máquinas, y sólo por email permitiría bloquear la cuenta de otra
 * persona a propósito para dejarla afuera.
 */
export async function intentosAgotados(env: Env, email: string, ip: string) {
  /* La ventana se calcula en SQLite y no en JavaScript: la columna se llena
     con datetime('now'), que escribe "2026-09-06 06:50:16", mientras que
     toISOString() produce "2026-09-06T06:50:16.000Z". Al comparar como texto
     la T queda por encima del espacio y ninguna fila entraba en la ventana,
     así que el bloqueo nunca se activaba. */
  const fila = await env.DB.prepare(
    `SELECT COUNT(*) AS intentos FROM intentos_login
      WHERE (email = ? OR ip = ?)
        AND creado_en > datetime('now', ?)`,
  )
    .bind(email, ip, `-${VENTANA_MINUTOS} minutes`)
    .first<{ intentos: number }>();

  return (fila?.intentos ?? 0) >= MAX_INTENTOS;
}

export async function registrarIntentoFallido(env: Env, email: string, ip: string) {
  await env.DB.prepare(
    'INSERT INTO intentos_login (id, email, ip) VALUES (?, ?, ?)',
  )
    .bind(nuevoId(), email, ip)
    .run();
}

/** Al entrar bien se limpian los intentos, para no arrastrar el bloqueo. */
export async function limpiarIntentos(env: Env, email: string, ip: string) {
  await env.DB.prepare('DELETE FROM intentos_login WHERE email = ? OR ip = ?')
    .bind(email, ip)
    .run();
}

export const respuestaBloqueado = (cors: Record<string, string>) =>
  error(
    `Demasiados intentos. Esperá ${VENTANA_MINUTOS} minutos antes de volver a probar.`,
    429,
    cors,
  );

/* ── OAuth con Google ── */

/**
 * Se usa el flujo de código de autorización con PKCE, con el intercambio del
 * código hecho en el servidor (patrón Backend-for-Frontend).
 *
 * Por qué así y no con el token en el navegador:
 *
 * - El flujo implícito está desaconsejado desde OAuth 2.1: devuelve el token
 *   en la URL, donde queda en el historial y en los logs del servidor.
 * - Guardar el token de Google en el navegador lo expone a cualquier XSS.
 *   Acá el token nunca sale del Worker: se canjea por una sesión propia, que
 *   viaja en una cookie HttpOnly.
 * - El `client_secret` queda del lado del servidor, como corresponde.
 *
 * PKCE se suma igual aunque haya secreto, porque protege contra la
 * interceptación del código en el redirect.
 */

export interface EstadoOAuth {
  verificador: string;
  destino: string;
}

/** Genera el par verificador/desafío de PKCE. */
export async function generarPkce() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const verificador = base64Url(bytes);
  const hash = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(verificador),
  );

  return { verificador, desafio: base64Url(new Uint8Array(hash)) };
}

const base64Url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

/** Valor aleatorio para el parámetro `state`, que corta el CSRF del redirect. */
export const nuevoEstado = () => base64Url(crypto.getRandomValues(new Uint8Array(24)));

export interface PerfilGoogle {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  picture?: string;
}

/**
 * Canjea el código por el perfil del usuario.
 *
 * Se llama a userinfo en lugar de decodificar el id_token a mano: verificar
 * la firma de un JWT requiere traer y rotar las claves de Google, y una
 * verificación mal hecha es peor que no hacerla. La respuesta de userinfo
 * viene por TLS directo desde Google, así que es de fiar.
 */
export async function canjearCodigoGoogle(
  codigo: string,
  verificador: string,
  env: Env,
  redirectUri: string,
): Promise<PerfilGoogle | null> {
  const respuesta = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code: codigo,
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
      code_verifier: verificador,
    }),
  });

  if (!respuesta.ok) {
    return null;
  }

  const { access_token: token } = (await respuesta.json()) as { access_token?: string };

  if (!token) {
    return null;
  }

  const perfil = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!perfil.ok) {
    return null;
  }

  return (await perfil.json()) as PerfilGoogle;
}

/**
 * Respuesta que cierra la ventana de OAuth y avisa a la app que la abrió.
 *
 * El mensaje se manda al origen exacto de la app, nunca con "*": con comodín
 * cualquier ventana que tuviera una referencia podría leerlo.
 */
export function paginaCierre(exito: boolean, mensaje: string, origenApp: string) {
  /* Todo lo dinámico entra como JSON, no como texto suelto en el HTML: así no
     se puede inyectar marcado aunque el contenido venga de afuera. */
  const datos = JSON.stringify({ exito, mensaje });
  const origen = JSON.stringify(origenApp);

  return new Response(
    `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>LaFranciaGO</title></head>
<body style="font-family:system-ui;padding:2rem;text-align:center">
<p>${exito ? 'Listo, ya podés volver a la app.' : 'No pudimos completar el ingreso.'}</p>
<script>
  if (window.opener) {
    window.opener.postMessage({ tipo: 'lafranciago:oauth', ...${datos} }, ${origen});
  }
  window.close();
</script>
</body></html>`,
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        /* Esta página sólo ejecuta su propio script en línea. */
        'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'",
      },
    },
  );
}

export { json };
