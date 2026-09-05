import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Ubicación actual del dispositivo.
 *
 * Funciona igual en Android, iOS y escritorio: todos exponen la Geolocation
 * API del navegador. Los permisos los pide el sistema operativo, así que acá
 * sólo se traduce cada falla a un mensaje que el usuario pueda accionar.
 *
 * Requiere HTTPS (o localhost). En iOS, sin contexto seguro el navegador
 * rechaza el pedido sin mostrar el diálogo de permisos, por eso se avisa
 * antes de intentarlo.
 */

export type GeolocationStatus = 'idle' | 'locating' | 'ready' | 'error';

type Coords = { lat: number; lon: number };

/* Un fix reciente sirve: la persona no se movió entre que abrió la hoja y tocó
   el botón. Pedir precisión alta desde cero puede tardar decenas de segundos. */
const OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 12_000,
  maximumAge: 30_000,
};

const messageFor = (error: GeolocationPositionError) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'No nos diste permiso de ubicación. Activalo en los ajustes del navegador o marcá el punto en el mapa.';
    case error.POSITION_UNAVAILABLE:
      return 'No pudimos leer tu ubicación. Probá al aire libre o marcá el punto en el mapa.';
    case error.TIMEOUT:
      return 'La ubicación tardó demasiado. Intentá de nuevo o marcá el punto en el mapa.';
    default:
      return 'No pudimos obtener tu ubicación. Marcá el punto en el mapa.';
  }
};

export function useCurrentPosition() {
  const [status, setStatus] = useState<GeolocationStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  const locate = useCallback((onSuccess: (coords: Coords) => void) => {
    if (!('geolocation' in navigator)) {
      setStatus('error');
      setError('Tu navegador no permite compartir la ubicación. Marcá el punto en el mapa.');
      return;
    }

    /* isSecureContext cubre https y localhost; en http el pedido falla mudo. */
    if (!window.isSecureContext) {
      setStatus('error');
      setError('La ubicación necesita una conexión segura (https). Marcá el punto en el mapa.');
      return;
    }

    setStatus('locating');
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!mountedRef.current) {
          return;
        }

        setStatus('ready');
        onSuccess({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (positionError) => {
        if (!mountedRef.current) {
          return;
        }

        setStatus('error');
        setError(messageFor(positionError));
      },
      OPTIONS,
    );
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  return { status, error, locate, reset };
}
