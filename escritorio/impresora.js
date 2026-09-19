/**
 * El ticket y el cajón.
 *
 * Las impresoras de tickets entienden ESC/POS: una serie de códigos que
 * dicen "letra grande", "cortá el papel", "abrí el cajón". No es HTML ni
 * PDF, son bytes que se mandan tal cual.
 *
 * Se arma a mano en vez de traer una librería porque son ocho comandos y
 * ninguno va a cambiar: el estándar tiene treinta años.
 */
/* Los comandos que hacen falta. ESC es 27, GS es 29. */
const ESC = 0x1b;
const GS = 0x1d;

const COMANDOS = {
  iniciar: [ESC, 0x40],
  /* 0 normal, 1 el doble de alto y ancho. */
  grande: [GS, 0x21, 0x11],
  normal: [GS, 0x21, 0x00],
  negrita: [ESC, 0x45, 0x01],
  sinNegrita: [ESC, 0x45, 0x00],
  centrado: [ESC, 0x61, 0x01],
  izquierda: [ESC, 0x61, 0x00],
  cortar: [GS, 0x56, 0x42, 0x00],
  /* Le da un pulso al cajón para que se abra. */
  abrirCajon: [ESC, 0x70, 0x00, 0x19, 0xfa],
};

const bytes = (comando) => Buffer.from(COMANDOS[comando]);
const texto = (cadena) => Buffer.from(`${cadena}\n`, 'latin1');

/** Una línea con el nombre a la izquierda y el importe a la derecha. */
function linea(izquierda, derecha, ancho = 42) {
  const espacio = Math.max(1, ancho - izquierda.length - derecha.length);

  return `${izquierda}${' '.repeat(espacio)}${derecha}`;
}

const pesos = (centavos) =>
  `$ ${(centavos / 100).toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

/**
 * Arma el ticket de una venta.
 *
 * Devuelve los bytes listos para mandar a la impresora. Separado del envío
 * para poder probarlo sin tener una conectada.
 */
function armarTicket({ comercio, numero, items, total, pagos, fecha, cajon = true }) {
  const partes = [bytes('iniciar'), bytes('centrado'), bytes('negrita')];

  partes.push(texto(comercio?.nombre ?? 'LaFranciaGO'));
  partes.push(bytes('sinNegrita'));

  if (comercio?.direccion) partes.push(texto(comercio.direccion));

  partes.push(texto(''));
  partes.push(bytes('izquierda'));
  partes.push(texto(`Ticket #${numero}`));
  partes.push(texto(new Date(fecha ?? Date.now()).toLocaleString('es-AR')));
  partes.push(texto('-'.repeat(42)));

  for (const item of items ?? []) {
    const unidades = item.cantidadMilesimos / 1000;
    const cantidad = Number.isInteger(unidades) ? String(unidades) : unidades.toFixed(3);

    partes.push(texto(item.nombre.slice(0, 42)));
    partes.push(
      texto(
        linea(
          `  ${cantidad} x ${pesos(item.precioCentavos)}`,
          pesos(item.subtotalCentavos ?? item.precioCentavos * unidades),
        ),
      ),
    );
  }

  partes.push(texto('-'.repeat(42)));
  partes.push(bytes('grande'));
  partes.push(texto(linea('TOTAL', pesos(total), 21)));
  partes.push(bytes('normal'));

  for (const pago of pagos ?? []) {
    partes.push(texto(linea(pago.metodo, pesos(pago.montoCentavos))));
  }

  partes.push(texto(''));
  partes.push(bytes('centrado'));
  partes.push(texto('Gracias por su compra'));
  partes.push(texto(''));
  partes.push(texto(''));
  partes.push(bytes('cortar'));

  /* El cajón se abre después de cortar: así el papel ya salió cuando la
     persona mete la plata. */
  if (cajon) partes.push(bytes('abrirCajon'));

  return Buffer.concat(partes);
}

/**
 * Manda el ticket a la impresora.
 *
 * Usa la impresión de Windows y no un puerto directo: así anda con
 * cualquier impresora que tenga su driver instalado, que es lo normal en un
 * negocio. Para las que hablan sólo por puerto serie hace falta otro camino,
 * pero esas ya casi no se ven.
 */
async function imprimirTicket(datos) {
  /* Se pide acá y no arriba para que armarTicket se pueda usar sin Electron:
     así el ticket se prueba con node a secas. */
  const { BrowserWindow } = require('electron');
  const contenido = armarTicket(datos);

  try {
    /* Se abre una ventana escondida con el ticket como texto plano: es la
       forma de llegar a la impresora sin dependencias nativas, que son las
       que rompen al actualizar Electron. */
    const oculta = new BrowserWindow({ show: false, webPreferences: { offscreen: true } });

    await oculta.loadURL(
      `data:text/plain;charset=latin1,${encodeURIComponent(contenido.toString('latin1'))}`,
    );

    await new Promise((listo, fallo) => {
      oculta.webContents.print(
        { silent: true, deviceName: datos.impresora, margins: { marginType: 'none' } },
        (salioBien, motivo) => (salioBien ? listo(true) : fallo(new Error(motivo))),
      );
    });

    oculta.destroy();

    return { ok: true };
  } catch (fallo) {
    return { ok: false, error: fallo instanceof Error ? fallo.message : 'No se pudo imprimir' };
  }
}

async function listarImpresoras() {
  const { BrowserWindow } = require('electron');
  const ventana = BrowserWindow.getAllWindows()[0];

  if (!ventana) return [];

  const lista = await ventana.webContents.getPrintersAsync();

  return lista.map((i) => ({ nombre: i.name, predeterminada: i.isDefault }));
}

module.exports = { armarTicket, imprimirTicket, listarImpresoras, linea, pesos };
