/**
 * El cliente HTTP, igual en la web y en el teléfono.
 *
 * Todas las llamadas pasan por acá para que la dirección, la sesión y el
 * manejo de errores estén en un solo lugar. Lo único que cambia entre las
 * dos plataformas está en configuracion.ts, y este archivo no necesita
 * saber en cuál está corriendo.
 */
import { leerConfiguracion } from './configuracion';

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    /**
     * El id con el que quedó anotado el error del lado del servidor.
     *
     * Sólo viene en los 500. Es lo que permite que la persona toque "avisar"
     * y el reporte llegue con el error técnico adjunto, en lugar de un "no me
     * anda" que hay que ir a preguntar.
     */
    readonly referencia?: string | null,
    /**
     * El detalle técnico, cuando el mensaje de arriba es una traducción.
     *
     * Lo que ve la persona tiene que estar en su idioma y decirle qué hacer.
     * Pero el texto original del navegador —"Failed to fetch", "NetworkError
     * when attempting to fetch resource"— es justo lo que hace falta para
     * entender qué pasó, así que no se tira: viaja escondido y sale sólo en
     * el reporte a soporte.
     */
    readonly tecnico?: { causa: string } | null,
  ) {
    super(message);
    this.name = 'ApiError';
  }

  /** Si la petición nunca llegó al servidor. */
  get sinConexion() {
    return this.status === 0;
  }
}

async function pedir<T>(ruta: string, init: RequestInit = {}): Promise<T> {
  const config = leerConfiguracion();

  const cabeceras: Record<string, string> = {
    ...(init.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    /* Lo que cada plataforma necesita mandar siempre. La aplicación de
       escritorio pone acá su marca, que es lo que le permite al backend
       reconocerla: su origen es un puerto que elige el sistema y cambia en
       cada arranque, así que no puede estar en una lista fija. */
    ...(config.cabeceras ?? {}),
    ...((init.headers as Record<string, string>) ?? {}),
  };

  /* En el teléfono la sesión viaja como cabecera: no hay cookies que
     sobrevivan a cerrar la aplicación. */
  if (config.sesion === 'cabecera' && config.leerToken) {
    const token = await config.leerToken();

    if (token) cabeceras.Authorization = `Bearer ${token}`;
  }

  let respuesta: Response;

  try {
    respuesta = await fetch(`${config.apiUrl}${ruta}`, {
      ...init,
      /* En el navegador la cookie de sesión no viaja a otro dominio sin esto,
         y toda petición autenticada volvería 401. */
      ...(config.sesion === 'cookie' ? { credentials: 'include' as const } : {}),
      headers: cabeceras,
    });
  } catch (fallo) {
    /* Cuando la petición no llega a destino —sin internet, el servidor caído,
       CORS rechazado— `fetch` tira un TypeError con el texto del navegador,
       en inglés y sin contexto: "Failed to fetch", "NetworkError...".

       Ese texto terminaba en pantalla tal cual. Se traduce acá, que es por
       donde pasan todas las llamadas, en vez de en cada pantalla: una sola
       vez y sin que ninguna se olvide.

       Se usa el 0 porque no hubo respuesta: no es un error del servidor, es
       que nunca se llegó a hablar con él, y las pantallas que miran el
       código pueden distinguir los dos casos. */
    throw new ApiError(
      'No pudimos conectarnos. Revisá tu conexión a internet e intentá de nuevo.',
      0,
      null,
      { causa: fallo instanceof Error ? fallo.message : String(fallo) },
    );
  }

  if (!respuesta.ok) {
    /* El backend manda { error } y, en los 500, { referencia }: el id con el
       que quedó anotado del otro lado. Si no viene nada, se usa el código. */
    const cuerpo = await respuesta
      .json()
      .then((datos: { error?: string; referencia?: string }) => datos)
      .catch(() => ({}) as { error?: string; referencia?: string });

    throw new ApiError(
      cuerpo.error ?? `Error ${respuesta.status}`,
      respuesta.status,
      cuerpo.referencia ?? null,
    );
  }

  /* Algunas respuestas no traen cuerpo (204). Parsear igual tiraría un error
     que taparía el resultado bueno. */
  if (respuesta.status === 204) return undefined as T;

  return respuesta.json() as Promise<T>;
}

export const api = {
  get: <T>(ruta: string) => pedir<T>(ruta),
  post: <T>(ruta: string, cuerpo?: unknown) =>
    pedir<T>(ruta, {
      method: 'POST',
      body: cuerpo instanceof FormData ? cuerpo : JSON.stringify(cuerpo ?? {}),
    }),
  patch: <T>(ruta: string, cuerpo?: unknown) =>
    pedir<T>(ruta, { method: 'PATCH', body: JSON.stringify(cuerpo ?? {}) }),
  /* PUT reemplaza el recurso entero: los horarios son un conjunto, y
     editarlos de a uno deja estados intermedios sin sentido. */
  put: <T>(ruta: string, cuerpo?: unknown) =>
    pedir<T>(ruta, { method: 'PUT', body: JSON.stringify(cuerpo ?? {}) }),
  delete: <T>(ruta: string) => pedir<T>(ruta, { method: 'DELETE' }),
};
