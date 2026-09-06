#!/usr/bin/env node
/**
 * Puesta en marcha del backend.
 *
 * Crea la base y el bucket, escribe el database_id en wrangler.toml, corre las
 * migraciones y publica el Worker. Es idempotente: si algo ya existe lo detecta
 * y sigue, así se puede volver a correr sin romper nada.
 *
 * Requiere haber hecho `npx wrangler login` antes: crear recursos queda a
 * nombre de tu cuenta, así que la autorización tiene que darla una persona.
 *
 *   node setup.mjs
 */

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const NOMBRE_DB = 'lafranciago';
const NOMBRE_BUCKET = 'lafranciago-media';
const CONFIG = new URL('./wrangler.toml', import.meta.url);

const paso = (mensaje) => console.log(`\n▸ ${mensaje}`);
const ok = (mensaje) => console.log(`  ✓ ${mensaje}`);
const aviso = (mensaje) => console.log(`  · ${mensaje}`);

/** Corre wrangler y devuelve su salida, sin romper si el comando falla. */
function wrangler(args, { tolerarFallo = false } = {}) {
  try {
    return execFileSync('npx', ['wrangler', ...args], {
      encoding: 'utf8',
      stdio: ['inherit', 'pipe', 'pipe'],
      shell: process.platform === 'win32',
    });
  } catch (fallo) {
    const salida = `${fallo.stdout ?? ''}${fallo.stderr ?? ''}`;

    if (tolerarFallo) {
      return salida;
    }

    console.error(salida || fallo.message);
    throw fallo;
  }
}

/* ── 1. Sesión ── */

paso('Verificando la sesión de Cloudflare');

const quien = wrangler(['whoami'], { tolerarFallo: true });

/* Wrangler avisa distinto según el caso: sin login dice "not authenticated",
   y en una terminal no interactiva pide CLOUDFLARE_API_TOKEN. */
if (quien.includes('not authenticated') || quien.includes('CLOUDFLARE_API_TOKEN')) {
  console.error(`
  No hay sesión de Cloudflare.

  Corré primero:

      npx wrangler login

  Se abre el navegador para que autorices con tu cuenta. Es el único paso
  que no se puede automatizar: los recursos quedan a tu nombre.
`);
  process.exit(1);
}

const cuenta = /│\s+(.+?)\s+│\s+([0-9a-f]{32})\s+│/.exec(quien);
ok(cuenta ? `Cuenta: ${cuenta[1]}` : 'Sesión activa');

/* ── 2. Base de datos ── */

paso(`Creando la base "${NOMBRE_DB}"`);

const creacion = wrangler(['d1', 'create', NOMBRE_DB], { tolerarFallo: true });

if (creacion.includes('already exists')) {
  aviso('Ya existía: se reutiliza');
} else {
  ok('Base creada');
}

/* El id se busca en el listado, así funciona tanto si recién se creó como
   si ya existía de una corrida anterior. */
const listado = wrangler(['d1', 'list', '--json'], { tolerarFallo: true });
const bases = JSON.parse(listado.slice(listado.indexOf('[')));
const base = bases.find((item) => item.name === NOMBRE_DB);

if (!base) {
  console.error('  ✗ No se pudo encontrar la base recién creada.');
  process.exit(1);
}

ok(`database_id: ${base.uuid}`);

/* ── 3. Configuración ── */

paso('Escribiendo el database_id en wrangler.toml');

const config = readFileSync(CONFIG, 'utf8');
/* Anclado a inicio de línea: el comentario de más arriba también menciona
   database_id, y sin el ancla el reemplazo caía ahí y rompía la config. */
const actualizado = config.replace(
  /^database_id = "[^"]*"/m,
  `database_id = "${base.uuid}"`,
);

if (!actualizado.includes(base.uuid)) {
  console.error('  ✗ No se pudo escribir el database_id en wrangler.toml.');
  process.exit(1);
}

writeFileSync(CONFIG, actualizado);
ok('wrangler.toml actualizado');

/* ── 4. Bucket ── */

paso(`Creando el bucket "${NOMBRE_BUCKET}"`);

const bucket = wrangler(['r2', 'bucket', 'create', NOMBRE_BUCKET], {
  tolerarFallo: true,
});

if (bucket.includes('already exists') || bucket.includes('already owned')) {
  aviso('Ya existía: se reutiliza');
} else if (bucket.toLowerCase().includes('error')) {
  aviso('No se pudo crear. R2 se activa una sola vez desde el panel de');
  aviso('Cloudflare (es gratis y no pide tarjeta). Después volvé a correr esto.');
} else {
  ok('Bucket creado');
}

/* ── 5. Migraciones ── */

paso('Creando las tablas');

wrangler([
  'd1',
  'execute',
  NOMBRE_DB,
  '--remote',
  '--file=./migrations/0001_esquema_inicial.sql',
  '--yes',
]);

ok('Once tablas creadas');

/* ── 6. Publicación ── */

paso('Publicando el Worker');

const deploy = wrangler(['deploy']);
const url = /https:\/\/[\w.-]+\.workers\.dev/.exec(deploy)?.[0];

ok(url ? `API publicada en ${url}` : 'Worker publicado');

/* ── Cierre ── */

console.log(`
─────────────────────────────────────────────────────

  Backend en marcha.
${url ? `
  Para que el frontend lo use, creá el archivo .env en
  la raíz del proyecto con:

      VITE_API_URL=${url}

  y volvé a compilar. Sin esa variable la app sigue
  funcionando con los datos de ejemplo.
` : ''}
─────────────────────────────────────────────────────
`);
