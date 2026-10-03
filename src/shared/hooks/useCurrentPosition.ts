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

type Coords = {
  lat: number;
  lon: number;
  /* Radio en metros dentro del cual está la persona, según el navegador.
     Importa más de lo que parece: un teléfono con GPS da 5 a 30 metros, pero
     una computadora de escritorio no tiene GPS y ubica por IP, que devuelve
     el centro de la zona del proveedor —miles de metros, a veces en otra
     ciudad—. Sin este dato la aplicación no puede distinguir una ubicación
     exacta de una que está a 100 km. */
  precisionMetros: number;
};

/* Arriba de esto la ubicación no sirve para poner una dirección: es el orden
   de magnitud de un barrio entero. Por debajo, un punto en el mapa tiene
   sentido aunque haya que corregirlo arrastrando. */
export const PRECISION_DUDOSA_METROS = 1_000;

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
        onSuccess({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          precisionMetros: position.coords.accuracy,
        });
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
