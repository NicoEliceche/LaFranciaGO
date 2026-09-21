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
});

export * from '@compartido';
