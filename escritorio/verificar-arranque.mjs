/**
 * Comprueba que la ventana cargue la aplicación y no la pantalla de error.
 *
 * Arranca Electron con la marca de verificación, espera a que termine de
 * dibujar, y lee lo que dejó escrito. Si dice FALLO, es que no encontró el
 * servidor de desarrollo.
 *
 * Sirve para probar el arranque desde una terminal, sin tener que mirar la
 * ventana.
 */
import { spawn } from 'node:child_process';
import { readFile, rm } from 'node:fs/promises';
import path from 'node:path';

/**
 * Cierra Electron y todo lo que abrio.
 *
 * `kill()` no alcanza en Windows: mata el proceso que arrancamos, pero
 * Chromium ya habia abierto los suyos —el que dibuja, el de la GPU, el de
 * red— y esos quedan huerfanos, corriendo con su ventana. Cada corrida de
 * este script dejaba una abierta.
 *
 * `taskkill /T` baja el arbol completo desde la raiz.
 */
function cerrarTodo(proceso) {
  return new Promise((listo) => {
    if (proceso.exitCode !== null || proceso.killed) return listo();

    /* Sin shell: taskkill es un .exe y no lo necesita. Con shell, Node avisa
       que los argumentos se concatenan sin escapar. */
    const matar = spawn('taskkill', ['/PID', String(proceso.pid), '/T', '/F'], {
      stdio: 'ignore',
    });

    matar.on('exit', listo);
    /* Si taskkill no esta (otro sistema), se intenta lo que se pueda. */
    matar.on('error', () => {
      proceso.kill();
      listo();
    });
  });
}

const ARCHIVO = path.join(import.meta.dirname, 'verificacion.txt');

/* Por si quedó uno de una corrida anterior: leerlo daría un resultado viejo. */
await rm(ARCHIVO, { force: true });

/* shell: true porque en Windows npx es un .cmd y spawn no lo ejecuta
   directamente. */
const electron = spawn('npx electron .', {
  cwd: import.meta.dirname,
  shell: true,
  env: { ...process.env, LAFRANCIAGO_VERIFICAR: '1' },
});

setTimeout(async () => {
  await cerrarTodo(electron);

  try {
    const linea = await readFile(ARCHIVO, 'utf8');

    await rm(ARCHIVO, { force: true });
    console.log(linea);
    process.exit(linea.startsWith('ok') ? 0 : 1);
  } catch {
    console.log('la ventana no llegó a cargar');
    process.exit(1);
  }
}, 14000);
