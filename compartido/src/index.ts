/**
 * Lo que comparten la web y las aplicaciones del teléfono.
 *
 * Acá vive todo lo que no es pantalla: hablar con el servidor, las cuentas
 * de plata, las fechas. Las tres cosas tienen algo en común —si dan distinto
 * en un lado que en el otro, es un error difícil de encontrar— así que la
 * única forma segura es que sean el mismo código.
 *
 * Lo que NO vive acá: nada que dibuje. Las pantallas se escriben una vez con
 * HTML y otra con componentes nativos, y no hay forma de compartirlas sin
 * empeorar las dos.
 *
 * Cómo se usa, al arrancar la aplicación:
 *
 *     configurar({ apiUrl: '...', sesion: 'cookie' });          // web
 *     configurar({ apiUrl: '...', sesion: 'cabecera',           // teléfono
 *                  leerToken, guardarToken });
 */

export { api, ApiError } from './api';
export { configurar, hayBackend, leerConfiguracion } from './configuracion';
export type { Configuracion } from './configuracion';

export {
  aMilesimos,
  aUnidades,
  leerCentavos,
  mostrarCantidad,
  mostrarCentavos,
} from './dinero';

export {
  hace,
  hoy,
  inicioDelMes,
  leerFecha,
  mostrarDia,
  mostrarFecha,
  mostrarFechaHora,
} from './fechas';

export * from './rutas';
