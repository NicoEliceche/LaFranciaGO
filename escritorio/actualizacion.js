/**
 * Cómo llega al negocio una versión nueva de las pantallas.
 *
 * Instalado, Electron carga los archivos que venían en el instalador. Sin
 * esto, cada cambio en la aplicación obligaría a ir al local con un pendrive.
 *
 * La solución es que la ventana cargue la aplicación publicada en vez de la
 * copia local: entonces un cambio en la web llega al negocio con sólo
 * recargar, igual que a cualquiera que la abra en el navegador.
 *
 * La copia local queda como respaldo. Si no hay internet al arrancar —que en
 * un negocio pasa— se usa esa y el sistema abre igual, con la caja y las
 * ventas pendientes andando.
 */
const { net } = require('electron');

const PUBLICADA = 'https://nicoeliceche.github.io/LaFranciaGO/';

/**
 * Si se puede llegar a la aplicación publicada.
 *
 * Se prueba con un pedido corto y un límite de tiempo: sin el límite, una
 * conexión mala deja la ventana en blanco varios segundos mientras el
 * negocio espera para abrir.
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

/**
 * De dónde cargar las pantallas.
 *
 * Devuelve la dirección publicada cuando hay internet, o null para que la
 * ventana use los archivos del instalador.
 */
async function origenDeLaApp() {
  const enLinea = await hayInternet();

  return enLinea ? PUBLICADA : null;
}

module.exports = { PUBLICADA, hayInternet, origenDeLaApp };
