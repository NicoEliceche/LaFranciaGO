/**
 * Revisa que el código compartido no use nada del navegador.
 *
 * Los tipos de TypeScript no alcanzan: `fetch` y `FormData` viven en la
 * librería del DOM pero existen igual en el teléfono, así que hay que
 * incluirla. El costo es que `document` y `window` también quedan
 * disponibles, y usarlos rompería la aplicación del teléfono recién al
 * ejecutarla.
 *
 * Esto lo encuentra antes.
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

/* Lo que no existe en React Native. `fetch` y compañía no están acá porque
   sí funcionan en los dos lados. */
const PROHIBIDOS = [
  ['document.', 'el teléfono no tiene DOM'],
  ['window.', 'en el teléfono no hay window'],
  ['localStorage', 'en el teléfono se usa AsyncStorage'],
  ['sessionStorage', 'no existe en el teléfono'],
  ['navigator.', 'no existe en el teléfono'],
  ['import.meta.env', 'eso es de Vite; la configuración se pasa al arrancar'],
  ['alert(', 'no existe en el teléfono'],
];

const CARPETA = path.join(import.meta.dirname, 'src');

const archivos = (await readdir(CARPETA)).filter((n) => n.endsWith('.ts'));
const problemas = [];

for (const nombre of archivos) {
  const contenido = await readFile(path.join(CARPETA, nombre), 'utf8');
  const lineas = contenido.split('\n');

  lineas.forEach((linea, i) => {
    /* Los comentarios pueden nombrarlos para explicar por qué no se usan. */
    const limpia = linea.trim();

    if (limpia.startsWith('*') || limpia.startsWith('//')) return;

    for (const [texto, motivo] of PROHIBIDOS) {
      if (linea.includes(texto)) {
        problemas.push(`  ${nombre}:${i + 1}  ${texto} — ${motivo}`);
      }
    }
  });
}

if (problemas.length > 0) {
  console.error('El código compartido usa cosas que no existen en el teléfono:\n');
  console.error(problemas.join('\n'));
  process.exit(1);
}

console.log(`revisados ${archivos.length} archivos: nada del navegador`);
