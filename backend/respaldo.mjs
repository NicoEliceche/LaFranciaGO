/**
 * Una copia de la base, en un archivo.
 *
 * Cloudflare ya guarda la base solo: Time Travel deja volver a cualquier
 * minuto de los últimos 30 días, sin configurar nada y sin costo. Para
 * "borré algo sin querer" eso alcanza y sobra, y es mejor que esto.
 *
 * Esto cubre lo que Time Travel no:
 *
 *   Que la cuenta de Cloudflare se pierda, se suspenda o se cierre. Una
 *   copia que vive adentro del mismo servicio no es una copia de seguridad,
 *   es la misma base en otro cajón.
 *
 *   Mudarse. El archivo es SQL plano: entra en Postgres, en Supabase, en un
 *   SQLite en el disco o en otra D1. Si algún día conviene cambiar, los
 *   datos salen caminando.
 *
 *   Guardar un momento. Antes de una migración grande, tener el antes a mano
 *   en el escritorio es más rápido que calcular una marca de tiempo.
 *
 * Uso:
 *
 *   node respaldo.mjs                   la base de todos los días
 *   node respaldo.mjs --prod            la de producción
 *   node respaldo.mjs --carpeta D:/x    a dónde escribir
 *   node respaldo.mjs --guardar 30      cuántas copias conservar
 *
 * El archivo queda como `lafranciago-2026-10-03-0730.sql`, con la fecha
 * adelante para que ordenen solos por nombre.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));

/* Cuántas copias se guardan antes de borrar las más viejas. Un mes de copias
   diarias ocupa unos pocos megas: el límite existe para que la carpeta no
   crezca para siempre, no para ahorrar lugar. */
const GUARDAR_POR_DEFECTO = 30;

function argumento(nombre, pordefecto) {
  const indice = process.argv.indexOf(`--${nombre}`);

  return indice > -1 && process.argv[indice + 1] ? process.argv[indice + 1] : pordefecto;
}

/** `2026-10-03-0730`, que ordena solo por nombre. */
function sello() {
  const ahora = new Date();
  const dosDigitos = (numero) => String(numero).padStart(2, '0');

  return [
    ahora.getFullYear(),
    dosDigitos(ahora.getMonth() + 1),
    dosDigitos(ahora.getDate()),
  ].join('-') + '-' + dosDigitos(ahora.getHours()) + dosDigitos(ahora.getMinutes());
}

/**
 * Borra las copias más viejas, dejando las últimas `cuantas`.
 *
 * Se ordena por la fecha del archivo y no por el nombre: si alguien copia
 * una a mano con otro nombre, igual se ordena bien.
 */
function limpiar(carpeta, cuantas) {
  const copias = readdirSync(carpeta)
    .filter((nombre) => nombre.startsWith('lafranciago-') && nombre.endsWith('.sql'))
    .map((nombre) => ({ nombre, cuando: statSync(join(carpeta, nombre)).mtimeMs }))
    .sort((a, b) => b.cuando - a.cuando);

  for (const vieja of copias.slice(cuantas)) {
    unlinkSync(join(carpeta, vieja.nombre));
    console.log(`  se borró la copia vieja ${vieja.nombre}`);
  }
}

const esProd = process.argv.includes('--prod');
const base = esProd ? 'lafranciago-prod' : 'lafranciago';
const carpeta = argumento('carpeta', join(AQUI, 'respaldos'));
const guardar = Number(argumento('guardar', GUARDAR_POR_DEFECTO));

mkdirSync(carpeta, { recursive: true });

const archivo = join(carpeta, `${base}-${sello()}.sql`);

console.log(`Copiando ${base}…`);

try {
  /* Se llama al wrangler del proyecto directamente y no por npx: npx en
     Windows es un .cmd, y Node se niega a ejecutarlo sin una shell. */
  execFileSync(
    process.execPath,
    [
      join(AQUI, 'node_modules', 'wrangler', 'bin', 'wrangler.js'),
      'd1',
      'export',
      base,
      '--remote',
      '--output',
      archivo,
      ...(esProd ? ['--env', 'prod'] : ['--env', '']),
    ],
    { cwd: AQUI, stdio: ['ignore', 'pipe', 'pipe'] },
  );

  const tamano = statSync(archivo).size;

  if (tamano < 1024) {
    /* Un archivo de dos líneas es un error que terminó bien: mejor avisar
       ahora que descubrirlo el día que haga falta restaurar. */
    throw new Error(`la copia quedó en ${tamano} bytes, algo salió mal`);
  }

  console.log(`Listo: ${archivo} (${Math.round(tamano / 1024)} KB)`);

  limpiar(carpeta, guardar);

  console.log('\nPara volver atrás con esta copia:');
  console.log(`  node node_modules/wrangler/bin/wrangler.js d1 execute ${base} --remote --file "${archivo}"`);
  console.log('\nPara volver a cualquier minuto de los últimos 30 días, sin archivo:');
  console.log(`  node node_modules/wrangler/bin/wrangler.js d1 time-travel restore ${base} --timestamp=2026-10-03T12:00:00Z`);
} catch (fallo) {
  console.error('\nNo se pudo copiar la base.');
  console.error(String(fallo.stderr ?? fallo.message ?? fallo).slice(0, 600));
  process.exit(1);
}
