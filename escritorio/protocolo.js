/**
 * Abrir la aplicación instalada desde el navegador.
 *
 * La caja rápida necesita la lectora y la impresora, que viven en la
 * computadora del local. Quien está mirando la web se encuentra con un
 * aviso que se lo explica, y ahí abajo un botón: "Abrir aplicación de
 * escritorio". Ese botón navega a `lafranciago://caja`, y Windows sabe que
 * esa dirección la atiende esta aplicación porque el instalador la registró.
 *
 * Tres cosas que hay que tener en cuenta:
 *
 *   1. Si la aplicación ya está abierta, Windows no abre otra: manda la
 *      dirección a la que está corriendo. Por eso el manejo vive en dos
 *      lados —arranque en frío y `second-instance`— y los dos terminan en la
 *      misma función.
 *
 *   2. La dirección la escribe cualquiera. Llega de afuera, así que se trata
 *      como lo que es: texto que alguien puso en una página. Sólo se aceptan
 *      destinos de una lista escrita acá; lo que no esté, abre el inicio.
 *      Sin eso, una página cualquiera podría empujar la aplicación del
 *      negocio a donde quisiera.
 *
 *   3. En desarrollo no se registra nada: `npm run dev` no está instalado y
 *      registrar el protocolo desde ahí dejaría a Windows apuntando a un
 *      ejecutable que no existe.
 */
const path = require('node:path');

/** El esquema que registra el instalador. */
const ESQUEMA = 'lafranciago';

/**
 * A dónde puede pedir que se vaya, y a qué ruta de la aplicación corresponde.
 *
 * Es una lista cerrada a propósito. La alternativa —aceptar cualquier ruta
 * que venga en la dirección— deja que una página abra la aplicación del
 * negocio en la pantalla que se le ocurra, y algunas de esas pantallas
 * cobran.
 */
const DESTINOS = {
  /* El que usa el botón de la web: la pantalla que necesita la lectora. */
  caja: '/gestion/caja-rapida',
  /* El turno de caja, que es la otra que se abre desde el mostrador. */
  turno: '/gestion/caja',
  gestion: '/gestion',
  ventas: '/gestion/ventas',
  inicio: '/',
};

/**
 * Saca de la dirección a qué pantalla hay que ir.
 *
 * Devuelve la ruta de la aplicación, o null si no reconoce el destino, que
 * es lo mismo que decir "andá al inicio y no hagas caso".
 */
function destinoDe(direccion) {
  if (typeof direccion !== 'string') {
    return null;
  }

  /* De `lafranciago://caja` interesa "caja". El resto —barras, parámetros,
     lo que sea que venga colgando— se descarta: no hace falta para esto y
     cada cosa que se acepta es una cosa más que puede venir torcida. */
  const limpio = direccion
    .replace(new RegExp(`^${ESQUEMA}://`, 'i'), '')
    .replace(/[/?#].*$/, '')
    .trim()
    .toLowerCase();

  return DESTINOS[limpio] ?? null;
}

/**
 * Registra la aplicación como la que atiende `lafranciago://`.
 *
 * En la versión instalada alcanza con pedirlo. Sin empaquetar hay que
 * decirle a Windows con qué ejecutable y con qué argumentos, porque el
 * ejecutable es el de Electron y no el de la aplicación; igual no se hace,
 * porque registrar una ruta de desarrollo deja el sistema apuntando a algo
 * que se va a mover.
 */
function registrarProtocolo(app) {
  if (!app.isPackaged) {
    return false;
  }

  /* Devuelve false si ya estaba registrado por otro programa. No es un
     error que valga la pena mostrar: el botón de la web simplemente no va a
     hacer nada, y la caja rápida se abre igual desde el menú de siempre. */
  return app.setAsDefaultProtocolClient(ESQUEMA);
}

/**
 * Busca la dirección entre los argumentos con los que arrancó el proceso.
 *
 * Windows pasa la dirección como un argumento más, mezclada con los que
 * agrega el propio sistema, así que hay que buscarla por su esquema en lugar
 * de confiar en la posición.
 */
function direccionEnArgumentos(argumentos) {
  return (argumentos ?? []).find(
    (argumento) =>
      typeof argumento === 'string' && argumento.toLowerCase().startsWith(`${ESQUEMA}://`),
  );
}

module.exports = { ESQUEMA, DESTINOS, destinoDe, direccionEnArgumentos, registrarProtocolo };
