/**
 * Qué computadora es ésta, y qué le falta para andar cómoda.
 *
 * No alcanza con decir "se recomiendan 8 GB": quien atiende no sabe cuánta
 * memoria tiene su máquina ni cómo averiguarlo. Esto la mira y dice qué
 * conviene mejorar, en ese orden y con esas palabras.
 *
 * Los mínimos no son los de Windows ni los de Electron: son los de esta
 * aplicación haciendo lo que hace en el mostrador —una pantalla abierta todo
 * el día, la lectora mandando códigos, la impresora sacando tickets y la
 * cola de ventas subiendo sola—. Salen de eso y no de una tabla copiada.
 *
 * Importante: esto informa, no bloquea. Una máquina por debajo de lo
 * recomendado igual abre y cobra; sólo va a ir más lenta, y es mejor que el
 * negocio lo sepa antes de que se le note un sábado a la tarde.
 */
const os = require('node:os');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');

const correr = promisify(execFile);

/**
 * Lo que la aplicación necesita para andar bien en el mostrador.
 *
 * `minimo` es donde empieza a molestar; `recomendado` es donde deja de
 * pensarse en la computadora. Entre los dos se avisa en amarillo, abajo del
 * mínimo en rojo.
 */
const REQUISITOS = {
  memoriaGB: { minimo: 4, recomendado: 8 },
  /* Núcleos: con dos alcanza para la caja, pero el navegador que trae la
     aplicación agradece cuatro cuando además hay otro programa abierto. */
  nucleos: { minimo: 2, recomendado: 4 },
  /* Lo que queda libre en disco. La cola de ventas sin internet y los
     tickets se guardan acá, y un disco lleno es la forma más silenciosa de
     perder una venta. */
  discoLibreGB: { minimo: 2, recomendado: 10 },
  /* Ancho de la pantalla. Abajo de esto la caja rápida entra, pero el
     listado de productos queda angosto y hay que scrollear para cobrar. */
  anchoPantalla: { minimo: 1280, recomendado: 1366 },
};

/** Redondea a un decimal, que es como se lee "7,8 GB". */
const unDecimal = (numero) => Math.round(numero * 10) / 10;

const aGB = (bytes) => unDecimal(bytes / 1024 ** 3);

/**
 * Cuánto espacio libre queda en el disco donde está instalada la aplicación.
 *
 * Se pregunta a Windows en lugar de usar una biblioteca: es una sola llamada
 * y evita sumar una dependencia al instalador por un dato.
 */
async function discoLibreGB() {
  if (process.platform !== 'win32') {
    return null;
  }

  try {
    /* La unidad donde está instalado, no siempre C:. */
    const unidad = process.execPath.slice(0, 2);

    const { stdout } = await correr(
      'powershell',
      [
        '-NoProfile',
        '-Command',
        `(Get-PSDrive -Name '${unidad[0]}').Free`,
      ],
      { timeout: 6000, windowsHide: true },
    );

    const libres = Number(String(stdout).trim());

    return Number.isFinite(libres) && libres > 0 ? aGB(libres) : null;
  } catch {
    /* Si no se puede averiguar, se informa como desconocido en lugar de
       inventar un número: un diagnóstico que miente es peor que no tenerlo. */
    return null;
  }
}

/**
 * Compara un valor contra su requisito.
 *
 * Devuelve 'bien', 'justo' o 'corto', que es lo que la pantalla pinta de
 * verde, amarillo o rojo.
 */
function comparar(valor, requisito) {
  if (valor === null || valor === undefined) return 'desconocido';
  if (valor >= requisito.recomendado) return 'bien';
  if (valor >= requisito.minimo) return 'justo';

  return 'corto';
}

/**
 * Revisa la máquina y devuelve qué tiene y qué le convendría mejorar.
 *
 * Cada punto trae su consejo escrito para quien atiende, no para quien
 * programa: "sumale memoria" y no "RAM insuficiente".
 */
async function revisarEquipo() {
  const memoriaGB = aGB(os.totalmem());
  const nucleos = os.cpus()?.length ?? null;
  const procesador = os.cpus()?.[0]?.model?.trim() ?? 'Desconocido';
  const libreGB = await discoLibreGB();

  const puntos = [
    {
      id: 'memoria',
      titulo: 'Memoria',
      tiene: `${memoriaGB} GB`,
      recomendado: `${REQUISITOS.memoriaGB.recomendado} GB`,
      estado: comparar(memoriaGB, REQUISITOS.memoriaGB),
      consejo: {
        corto: 'Con esta memoria la caja va a ir lenta cuando haya varias cosas abiertas. Sumarle memoria es la mejora que más se nota, y suele ser barata.',
        justo: 'Anda, pero justo. Si además usan el navegador o el WhatsApp en esta misma computadora, conviene sumarle memoria.',
        bien: 'De sobra para el mostrador.',
      },
    },
    {
      id: 'procesador',
      titulo: 'Procesador',
      tiene: nucleos ? `${nucleos} núcleo${nucleos === 1 ? '' : 's'}` : 'Desconocido',
      recomendado: `${REQUISITOS.nucleos.recomendado} núcleos`,
      detalle: procesador,
      estado: comparar(nucleos, REQUISITOS.nucleos),
      consejo: {
        corto: 'El procesador es viejo para esto: cobrar va a andar, pero con demoras al buscar productos. Si hay que cambiar la computadora, esto es lo que importa.',
        justo: 'Alcanza para cobrar. Puede notarse un poco lento al abrir informes largos.',
        bien: 'Más que suficiente.',
      },
    },
    {
      id: 'disco',
      titulo: 'Espacio libre',
      tiene: libreGB === null ? 'No se pudo averiguar' : `${libreGB} GB`,
      recomendado: `${REQUISITOS.discoLibreGB.recomendado} GB`,
      estado: comparar(libreGB, REQUISITOS.discoLibreGB),
      consejo: {
        corto: 'Queda muy poco espacio. Las ventas que se hacen sin internet se guardan acá hasta poder subirlas: con el disco lleno se pueden perder. Conviene liberar lugar hoy.',
        justo: 'Alcanza, pero conviene liberar algo de espacio para estar tranquilos.',
        bien: 'Espacio de sobra.',
        desconocido: 'No pudimos leer el espacio libre. Revisalo desde "Este equipo" en Windows.',
      },
    },
  ];

  return {
    sistema: `${os.type()} ${os.release()}`,
    procesador,
    memoriaGB,
    nucleos,
    discoLibreGB: libreGB,
    puntos,
    /* El resumen es el peor de los puntos: de nada sirve decir "todo bien"
       si al disco le quedan 500 MB. */
    resumen: puntos.some((p) => p.estado === 'corto')
      ? 'corto'
      : puntos.some((p) => p.estado === 'justo')
        ? 'justo'
        : 'bien',
  };
}

module.exports = { REQUISITOS, revisarEquipo };
