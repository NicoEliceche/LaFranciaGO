/**
 * El cliente de la API, para la web.
 *
 * El contenido vive en el paquete compartido: los mismos tipos y las mismas
 * llamadas que va a usar la aplicación del teléfono. Tener dos copias del
 * cliente contra el mismo backend termina siempre igual —una agrega un campo
 * y la otra se entera cuando algo falla en producción.
 *
 * Acá sólo queda de dónde sale la dirección del servidor, que es lo único
 * distinto: la web la lee de Vite y el teléfono de su propia configuración.
 */
import { configurar } from '@compartido';

configurar({
  apiUrl: import.meta.env.VITE_API_URL ?? '',
  /* En el navegador la sesión es una cookie HttpOnly que viaja sola. */
  sesion: 'cookie',
  /* La aplicación instalada sirve sus pantallas desde un servidor propio en
     127.0.0.1, con un puerto que elige el sistema y cambia en cada arranque.
     Ese origen no puede estar en la lista del backend, así que se anuncia con
     esta marca; el backend la acepta sólo si además el origen es de loopback.
     Sin esto, entrar desde la aplicación instalada fallaba en el navegador
     antes de llegar al servidor. */
  cabeceras:
    typeof window !== 'undefined' && window.lafranciagoEscritorio
      ? { 'X-LaFranciaGO-Escritorio': '1' }
      : undefined,
});

export * from '@compartido';
