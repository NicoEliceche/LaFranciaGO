/**
 * Sirve la aplicación compilada por HTTP, desde la misma máquina.
 *
 * Hace falta porque `dist/` no se puede abrir como archivo. Vite compila con
 * las rutas de GitHub Pages —`/LaFranciaGO/assets/...`— que son absolutas, y
 * con `file://` la raíz es la del disco: el navegador busca en
 * `C:\LaFranciaGO\assets\` y no encuentra nada. La ventana queda negra sin
 * decir por qué.
 *
 * Servirlo por HTTP arregla eso sin tocar cómo se compila para la web: la
 * raíz vuelve a ser una de verdad, y el mismo `dist/` funciona en los dos
 * lados. De paso la aplicación corre en un origen http, donde el navegador
 * permite cosas que en `file://` bloquea.
 *
 * Es sólo para la máquina del negocio: escucha únicamente en 127.0.0.1, así
 * que nadie de la red puede entrar.
 */
const { createServer } = require('node:http');
const { createReadStream, existsSync, statSync } = require('node:fs');
const path = require('node:path');

/* El prefijo con el que Vite compila, porque en GitHub Pages el sitio vive
   dentro de una carpeta. Acá se saca de la dirección antes de buscar el
   archivo. */
const PREFIJO = '/LaFranciaGO';

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
};

/**
 * Convierte una dirección pedida en un archivo del disco.
 *
 * Devuelve null si se sale de la carpeta. Sin esa comprobación, una dirección
 * con `..` podría leer cualquier archivo de la máquina.
 */
function archivoDe(direccion, raiz) {
  let ruta = decodeURIComponent(new URL(direccion, 'http://localhost').pathname);

  if (ruta.startsWith(`${PREFIJO}/`)) ruta = ruta.slice(PREFIJO.length);
  else if (ruta === PREFIJO) ruta = '/';

  const destino = path.join(raiz, ruta);
  const dentro = path.relative(raiz, destino);

  if (dentro.startsWith('..') || path.isAbsolute(dentro)) return null;

  return destino;
}

/**
 * Levanta el servidor y devuelve la dirección donde quedó escuchando.
 *
 * El puerto lo elige el sistema (0) en lugar de fijarlo: uno fijo choca con
 * otro programa tarde o temprano, y en una máquina ajena no hay forma de
 * saber qué hay ocupado.
 */
function servirCompilada(carpeta) {
  return new Promise((listo, fallo) => {
    if (!existsSync(path.join(carpeta, 'index.html'))) {
      fallo(new Error(`no hay index.html en ${carpeta}`));
      return;
    }

    const servidor = createServer((pedido, respuesta) => {
      const destino = archivoDe(pedido.url ?? '/', carpeta);

      /* Si no existe, se devuelve el index: las direcciones de la aplicación
         las resuelve el router del navegador, no el disco. */
      const existe = destino && existsSync(destino) && statSync(destino).isFile();
      const archivo = existe ? destino : path.join(carpeta, 'index.html');

      respuesta.setHeader(
        'Content-Type',
        TIPOS[path.extname(archivo).toLowerCase()] ?? 'application/octet-stream',
      );
      /* Sin caché: si no, un cambio recién compilado no se ve al recargar. */
      respuesta.setHeader('Cache-Control', 'no-store');

      createReadStream(archivo)
        .on('error', () => {
          respuesta.statusCode = 500;
          respuesta.end('no se pudo leer el archivo');
        })
        .pipe(respuesta);
    });

    servidor.on('error', fallo);

    servidor.listen(0, '127.0.0.1', () => {
      const { port } = servidor.address();

      listo({ url: `http://127.0.0.1:${port}${PREFIJO}/`, servidor });
    });
  });
}

module.exports = { servirCompilada };
