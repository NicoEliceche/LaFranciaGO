/**
 * Lo que la instalación recuerda entre una sesión y otra.
 *
 * Qué impresora usar, cómo se llama este puesto, si imprime solo. Son cuatro
 * valores, así que van a un archivo y no a una base: una base para esto sería
 * traer una dependencia para guardar menos de lo que ocupa el nombre de la
 * dependencia.
 */
const { app } = require('electron');
const fs = require('node:fs/promises');
const path = require('node:path');

const ARCHIVO = 'ajustes.json';

const PREDETERMINADOS = {
  /** Vacío significa "la predeterminada de Windows". */
  impresora: '',
  /** Cómo se llama esta caja. Va adelante del número de venta. */
  puesto: 'CAJA1',
  /** Si imprime el ticket sin preguntar al terminar la venta. */
  imprimirSolo: true,
  /** Si abre el cajón al imprimir. */
  abrirCajon: true,
};

let carpeta = null;
let ajustes = { ...PREDETERMINADOS };

const ruta = () => path.join(carpeta, ARCHIVO);

async function cargarAjustes() {
  carpeta = app.getPath('userData');

  try {
    const crudo = await fs.readFile(ruta(), 'utf8');

    /* Se mezclan con los predeterminados: si una versión nueva agrega un
       ajuste, el archivo viejo no lo tiene y sin esto quedaría undefined. */
    ajustes = { ...PREDETERMINADOS, ...JSON.parse(crudo) };
  } catch {
    ajustes = { ...PREDETERMINADOS };
  }

  return ajustes;
}

function leerAjustes() {
  return { ...ajustes };
}

async function guardarAjustes(cambios) {
  /* Sólo se aceptan las claves conocidas: así una pantalla con un error no
     puede llenar el archivo de campos que nadie lee. */
  for (const clave of Object.keys(PREDETERMINADOS)) {
    if (clave in cambios) ajustes[clave] = cambios[clave];
  }

  const temporal = `${ruta()}.tmp`;

  await fs.writeFile(temporal, JSON.stringify(ajustes, null, 1), 'utf8');
  await fs.rename(temporal, ruta());

  return { ...ajustes };
}

module.exports = { cargarAjustes, leerAjustes, guardarAjustes };
