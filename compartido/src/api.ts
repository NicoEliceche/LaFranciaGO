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
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function pedir<T>(ruta: string, init: RequestInit = {}): Promise<T> {
  const config = leerConfiguracion();

  const cabeceras: Record<string, string> = {
    ...(init.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...((init.headers as Record<string, string>) ?? {}),
  };

  /* En el teléfono la sesión viaja como cabecera: no hay cookies que
     sobrevivan a cerrar la aplicación. */
  if (config.sesion === 'cabecera' && config.leerToken) {
    const token = await config.leerToken();

    if (token) cabeceras.Authorization = `Bearer ${token}`;
  }

  const respuesta = await fetch(`${config.apiUrl}${ruta}`, {
    ...init,
    /* En el navegador la cookie de sesión no viaja a otro dominio sin esto,
       y toda petición autenticada volvería 401. */
    ...(config.sesion === 'cookie' ? { credentials: 'include' as const } : {}),
    headers: cabeceras,
  });

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
