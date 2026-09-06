/**
 * Piezas compartidas del backend: respuestas, CORS, sesiones y contraseñas.
 */

export interface Env {
  DB: D1Database;
  MEDIA: R2Bucket;
  /** Orígenes permitidos, separados por coma. Sin comodín en producción. */
  ORIGENES_PERMITIDOS: string;
}

/* ── Respuestas ── */

const baseHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  /* El navegador no debe adivinar el tipo: es un vector de XSS conocido. */
  'X-Content-Type-Options': 'nosniff',
};

/**
 * CORS acotado a los orígenes configurados.
 *
 * No se usa "*" porque las respuestas llevan credenciales: con comodín el
 * navegador las rechaza, y aunque no lo hiciera, cualquier sitio podría leer
 * los datos del usuario.
 */
export function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('Origin') ?? '';
  const permitidos = env.ORIGENES_PERMITIDOS.split(',').map((value) => value.trim());

  if (!permitidos.includes(origin)) {
    return {};
  }

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    /* Evita que un proxy sirva la respuesta de un origen a otro distinto. */
    Vary: 'Origin',
  };
}

export function json(data: unknown, init: ResponseInit = {}, extra: HeadersInit = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { ...baseHeaders, ...extra, ...(init.headers ?? {}) },
  });
}

export function error(mensaje: string, status = 400, extra: HeadersInit = {}) {
  return json({ error: mensaje }, { status }, extra);
}

/* ── Identificadores ── */

export const nuevoId = () => crypto.randomUUID();

/** Id legible para URLs: "Panadería Ana" → "panaderia-ana". */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/* ── Contraseñas ── */

/**
 * Hash con PBKDF2, que viene en la plataforma y no necesita dependencias.
 *
 * 210.000 iteraciones es lo que recomienda OWASP para PBKDF2-SHA512: hace que
 * probar contraseñas a lo bruto sea caro incluso si alguien se lleva la base.
 * El salt es único por usuario, así que dos personas con la misma contraseña
 * tienen hashes distintos y no se pueden usar tablas precalculadas.
 */
const ITERACIONES = 210_000;

export async function hashPassword(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivar(password, salt);

  return `pbkdf2$${ITERACIONES}$${aBase64(salt)}$${aBase64(hash)}`;
}

export async function verificarPassword(password: string, guardado: string) {
  const [algoritmo, iteraciones, saltB64, hashB64] = guardado.split('$');

  if (algoritmo !== 'pbkdf2') {
    return false;
  }

  const salt = deBase64(saltB64);
  const esperado = deBase64(hashB64);
  const calculado = await derivar(password, salt, Number(iteraciones));

  return comparacionConstante(new Uint8Array(calculado), esperado);
}

async function derivar(password: string, salt: Uint8Array, iteraciones = ITERACIONES) {
  const clave = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );

  return crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: iteraciones, hash: 'SHA-512' },
    clave,
    512,
  );
}

/**
 * Compara sin cortar al primer byte distinto.
 *
 * Una comparación normal tarda más cuanto más coincide el principio, y ese
 * tiempo se puede medir para ir adivinando el hash carácter por carácter.
 */
function comparacionConstante(a: Uint8Array, b: Uint8Array) {
  if (a.length !== b.length) {
    return false;
  }

  let diferencia = 0;

  for (let i = 0; i < a.length; i += 1) {
    diferencia |= a[i] ^ b[i];
  }

  return diferencia === 0;
}

const aBase64 = (buffer: ArrayBuffer | Uint8Array) =>
  btoa(String.fromCharCode(...new Uint8Array(buffer)));

const deBase64 = (value: string) =>
  Uint8Array.from(atob(value), (char) => char.charCodeAt(0));

/* ── Sesiones ── */

const DIAS_SESION = 30;

export async function crearSesion(env: Env, usuarioId: string) {
  const token = aBase64(crypto.getRandomValues(new Uint8Array(32)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  const expira = new Date(Date.now() + DIAS_SESION * 24 * 60 * 60 * 1000).toISOString();

  await env.DB.prepare('INSERT INTO sesiones (token, usuario_id, expira_en) VALUES (?, ?, ?)')
    .bind(token, usuarioId, expira)
    .run();

  return { token, expira };
}

export interface UsuarioSesion {
  id: string;
  email: string;
  nombre: string;
  rol: string;
  foto_url: string | null;
}

/**
 * Usuario de la petición, o null si no hay sesión válida.
 *
 * El token viaja en una cookie HttpOnly: así el JavaScript de la página no
 * puede leerlo, y un XSS no alcanza para robar la sesión.
 */
export async function usuarioActual(request: Request, env: Env): Promise<UsuarioSesion | null> {
  const cookie = request.headers.get('Cookie') ?? '';
  const token = /(?:^|;\s*)sesion=([^;]+)/.exec(cookie)?.[1];

  if (!token) {
    return null;
  }

  const fila = await env.DB.prepare(
    `SELECT u.id, u.email, u.nombre, u.rol, u.foto_url, s.expira_en
       FROM sesiones s
       JOIN usuarios u ON u.id = s.usuario_id
      WHERE s.token = ?`,
  )
    .bind(token)
    .first<UsuarioSesion & { expira_en: string }>();

  if (!fila) {
    return null;
  }

  if (new Date(fila.expira_en) < new Date()) {
    /* Sesión vencida: se borra para que la tabla no crezca sin control. */
    await env.DB.prepare('DELETE FROM sesiones WHERE token = ?').bind(token).run();

    return null;
  }

  return {
    id: fila.id,
    email: fila.email,
    nombre: fila.nombre,
    rol: fila.rol,
    foto_url: fila.foto_url,
  };
}

export function cookieSesion(token: string, expira: string) {
  /* Secure y SameSite=None porque la app vive en otro dominio que la API. */
  return `sesion=${token}; Path=/; Expires=${new Date(expira).toUTCString()}; HttpOnly; Secure; SameSite=None`;
}

export const cookieBorrada = () =>
  'sesion=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=None';

/* ── Dinero ── */

/** Los importes viajan en pesos y se guardan en centavos. */
export const aCentavos = (pesos: number) => Math.round(pesos * 100);
export const aPesos = (centavos: number) => centavos / 100;
