/**
 * Crea la cuenta de administración, la de quien programa.
 *
 * No es la de Diego ni la de ningún comercio: es la que entra al registro de
 * errores, que muestra mensajes internos, cuerpos de peticiones y stacks. Con
 * eso se ve bastante de cómo funciona la aplicación por dentro.
 *
 *   node demo/admin.mjs              en esta máquina
 *   node demo/admin.mjs --remoto     en producción
 *
 * Después de crearla, cambiá la contraseña. La que deja este script es para
 * arrancar, no para dejar puesta.
 */
import { spawnSync } from 'node:child_process';
import { webcrypto as crypto } from 'node:crypto';
import path from 'node:path';

const REMOTO = process.argv.includes('--remoto');
const BASE = 'lafranciago';

const EMAIL = 'admin@lafrancia.ar';
const NOMBRE = 'Administración';

/* La contraseña pedida para arrancar. El registro exige ocho caracteres y
   rechaza las más usadas, así que "admin" no pasa por ahí: se escribe
   directamente en la base con el mismo hash que usaría el registro.

   Esa comprobación queda intacta a propósito. Bajarla para esta cuenta la
   bajaría para todas, y es lo que impide que alguien registre "123456" en la
   aplicación de verdad. */
const CLAVE = 'admin';

/* Los mismos números que src/lib.ts. Si cambian allá, cambian acá. */
const ITERACIONES = 100_000;

function sql(consulta) {
  const salida = spawnSync(
    'npx',
    [
      'wrangler',
      'd1',
      'execute',
      BASE,
      REMOTO ? '--remote' : '--local',
      '--command',
      JSON.stringify(consulta),
      '--json',
    ],
    { encoding: 'utf8', shell: true, cwd: path.join(import.meta.dirname, '..') },
  );

  if (salida.status !== 0) {
    throw new Error(`falló la consulta: ${salida.stderr || salida.stdout}`);
  }

  const desde = salida.stdout.indexOf('[');

  if (desde === -1) return [];

  return JSON.parse(salida.stdout.slice(desde)).flatMap((bloque) => bloque.results ?? []);
}

/** El hash en el formato que guarda el backend: PBKDF2-SHA512. */
async function hashDe(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const clave = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );

  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERACIONES, hash: 'SHA-512' },
    clave,
    512,
  );

  const base64 = (datos) => Buffer.from(datos).toString('base64');

  return `pbkdf2$${ITERACIONES}$${base64(salt)}$${base64(new Uint8Array(bits))}`;
}

async function principal() {
  console.log(`\nCuenta de administración — ${REMOTO ? 'PRODUCCIÓN' : 'local'}\n`);

  const hash = await hashDe(CLAVE);
  const existente = sql(`SELECT id FROM usuarios WHERE email = '${EMAIL}'`);

  let id = existente[0]?.id;

  if (id) {
    sql(`UPDATE usuarios SET password_hash = '${hash}' WHERE id = '${id}'`);
    console.log('  la cuenta ya estaba: se le repuso la contraseña');
  } else {
    id = `admin-${crypto.randomUUID()}`;

    /* En una sola línea: la consulta viaja por la línea de comandos y un
       salto real se convierte en un "\n" literal que SQLite no entiende. */
    sql(
      `INSERT INTO usuarios (id, email, password_hash, nombre) VALUES ('${id}', '${EMAIL}', '${hash}', '${NOMBRE}')`,
    );
    console.log('  cuenta creada');
  }

  /* El rol aprobado de entrada: no hay otro administrador que lo apruebe. */
  sql(
    `INSERT OR REPLACE INTO usuario_roles (id, usuario_id, rol, estado) VALUES ('rol-admin-${id}', '${id}', 'admin', 'aprobado')`,
  );

  console.log('');
  console.log(`  email:      ${EMAIL}`);
  console.log(`  contraseña: ${CLAVE}`);
  console.log('');
  console.log('  Cambiala antes de que la aplicación esté en manos de gente.');
  console.log('');
}

principal().catch((fallo) => {
  console.error(`\nNo se pudo crear: ${fallo.message}\n`);
  process.exit(1);
});
