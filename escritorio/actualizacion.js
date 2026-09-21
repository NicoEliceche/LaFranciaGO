/**
 * Cómo llega al negocio una versión nueva.
 *
 * Hay dos cosas que se actualizan por caminos distintos.
 *
 * Las **pantallas** viajan solas: con internet la ventana carga la
 * aplicación publicada, así que un cambio en la web llega con sólo recargar.
 *
 * Estos **archivos** —la impresora, la cola, la ventana— viven adentro del
 * instalador, y cambiarlos necesita instalar de nuevo. Eso no se puede hacer
 * en cualquier momento: reiniciar la caja un sábado a la mañana deja el
 * mostrador parado con gente esperando.
 *
 * Por eso: se avisa cuando hay algo nuevo, se descarga en silencio, y se
 * instala cuando el comercio diga. Salvo que sea imprescindible, y ahí se
 * explica por qué no se puede seguir sin actualizar.
 */
const { app, net, shell } = require('electron');
const fs = require('node:fs/promises');
const path = require('node:path');

const PUBLICADA = 'https://nicoeliceche.github.io/LaFranciaGO/';
const API = process.env.VITE_API_URL ?? 'https://lafranciago-api.lafranciago-api.workers.dev';

/** Lo último que contestó el servidor, para no preguntar en cada pantalla. */
let ultimoAviso = { estado: 'al-dia' };
/** Dónde quedó el instalador bajado, si se bajó. */
let instaladorListo = null;
/** Cuándo instalar, si el comercio eligió un horario. */
let programadaPara = null;

/**
 * Si se puede llegar a la aplicación publicada.
 *
 * Con un límite de tiempo: sin él, una conexión mala deja la ventana en
 * blanco varios segundos mientras el negocio espera para abrir.
 */
function hayInternet(limiteMs = 2500) {
  return new Promise((responder) => {
    const pedido = net.request({ method: 'HEAD', url: PUBLICADA });
    let contestado = false;

    const contestar = (valor) => {
      if (contestado) return;

      contestado = true;
      responder(valor);
    };

    const reloj = setTimeout(() => {
      pedido.abort();
      contestar(false);
    }, limiteMs);

    pedido.on('response', (respuesta) => {
      clearTimeout(reloj);
      contestar(respuesta.statusCode < 400);
    });

    pedido.on('error', () => {
      clearTimeout(reloj);
      contestar(false);
    });

    pedido.end();
  });
}

/** De dónde cargar las pantallas: la publicada, o null para usar la local. */
async function origenDeLaApp() {
  const enLinea = await hayInternet();

  return enLinea ? PUBLICADA : null;
}

/** Le pregunta al servidor si esta versión sigue sirviendo. */
async function consultarVersion() {
  const instalada = app.getVersion();

  try {
    const respuesta = await fetch(
      `${API}/versiones?plataforma=escritorio&version=${encodeURIComponent(instalada)}`,
    );

    if (!respuesta.ok) return ultimoAviso;

    const datos = await respuesta.json();

    ultimoAviso = {
      ...datos,
      instalada,
      descargada: Boolean(instaladorListo),
      programadaPara,
    };

    /* Se baja apenas se sabe que hay una nueva, aunque se instale más tarde:
       así cuando llegue el horario elegido no hay que esperar la descarga,
       que en el negocio puede ser lenta. */
    if (datos.estado !== 'al-dia' && datos.descarga && !instaladorListo) {
      void descargar(datos.descarga);
    }

    return ultimoAviso;
  } catch {
    /* Sin internet no se sabe, y no saber no es motivo para molestar. */
    return ultimoAviso;
  }
}

/**
 * Baja el instalador a la carpeta de datos.
 *
 * En silencio: nadie pidió esperar una descarga, y si falla se reintenta en
 * la próxima consulta.
 */
async function descargar(url) {
  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) return null;

    const destino = path.join(app.getPath('userData'), 'actualizacion.exe');
    const contenido = Buffer.from(await respuesta.arrayBuffer());

    await fs.writeFile(destino, contenido);
    instaladorListo = destino;
    ultimoAviso = { ...ultimoAviso, descargada: true };

    return destino;
  } catch {
    return null;
  }
}

/**
 * Arranca el instalador y cierra la aplicación.
 *
 * Se avisa antes de llamar a esto: la ventana se va a cerrar, y si hay una
 * venta a medio cobrar se pierde lo que está en pantalla.
 */
async function instalarAhora() {
  if (!instaladorListo) {
    return { ok: false, error: 'Todavía no se bajó la actualización.' };
  }

  await shell.openPath(instaladorListo);

  /* Un respiro para que el instalador levante antes de que la aplicación se
     cierre: si se cierra primero, Windows a veces cancela el proceso hijo. */
  setTimeout(() => app.quit(), 1200);

  return { ok: true };
}

/**
 * Guarda a qué hora instalar.
 *
 * El comercio elige "cuando cierre", "esta noche" o un horario. Se revisa
 * cada minuto; cuando llega, se instala sola.
 */
function programar(cuando) {
  programadaPara = cuando;
  ultimoAviso = { ...ultimoAviso, programadaPara };

  return { ok: true, programadaPara };
}

function cancelarProgramada() {
  programadaPara = null;
  ultimoAviso = { ...ultimoAviso, programadaPara: null };

  return { ok: true };
}

function estadoActualizacion() {
  return { ...ultimoAviso, descargada: Boolean(instaladorListo), programadaPara };
}

/* Revisa cada hora si hay algo nuevo, y cada minuto si llegó el horario que
   el comercio eligió. */
setInterval(() => void consultarVersion(), 60 * 60 * 1000);

setInterval(() => {
  if (!programadaPara || !instaladorListo) return;

  if (new Date(programadaPara) <= new Date()) {
    programadaPara = null;
    void instalarAhora();
  }
}, 60 * 1000);

module.exports = {
  PUBLICADA,
  cancelarProgramada,
  consultarVersion,
  estadoActualizacion,
  hayInternet,
  instalarAhora,
  origenDeLaApp,
  programar,
};
