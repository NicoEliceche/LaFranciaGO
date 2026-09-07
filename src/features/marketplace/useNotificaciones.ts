import { useCallback, useEffect, useState } from 'react';

import {
  type NotificacionApi,
  hayBackend,
  notificacionesApi,
} from '@core/data/services/apiClient';

/**
 * Las notificaciones de quien está adentro.
 *
 * Se comparten entre el contador del ícono y el panel que las lista: son los
 * mismos datos, y pedirlos dos veces mostraría números distintos en la misma
 * pantalla.
 *
 * Se refrescan cada tanto porque llegan de afuera: un pedido entra cuando el
 * comercio no está mirando, y el aviso tiene que aparecer sin recargar.
 */

/* Un minuto: lo bastante seguido para enterarse, lo bastante espaciado para
   no castigar la batería de un teléfono con la app abierta. */
const REFRESCO_MS = 60_000;

const oyentes = new Set<() => void>();
let notificaciones: NotificacionApi[] = [];
let sinLeer = 0;
let cargadas = false;

const avisar = () => oyentes.forEach((oyente) => oyente());

async function cargar() {
  if (!hayBackend()) {
    return;
  }

  try {
    const datos = await notificacionesApi.listar();

    notificaciones = datos.notificaciones;
    sinLeer = datos.sinLeer;
    cargadas = true;
    avisar();
  } catch {
    /* Sin sesión o sin red se queda con lo que había: vaciar la lista por un
       error de red haría desaparecer avisos que siguen vigentes. */
  }
}

/** Vuelve a pedirlas, por ejemplo después de iniciar sesión. */
export function refrescarNotificaciones() {
  return cargar();
}

/** Marca todas como leídas. */
export async function marcarLeidas() {
  if (sinLeer === 0) {
    return;
  }

  /* El contador baja antes de que conteste el servidor: abrir el panel y ver
     el número quieto un segundo se siente roto. */
  const antes = sinLeer;

  sinLeer = 0;
  notificaciones = notificaciones.map((fila) => ({
    ...fila,
    leida_en: fila.leida_en ?? new Date().toISOString(),
  }));
  avisar();

  try {
    await notificacionesApi.marcarLeidas();
  } catch {
    sinLeer = antes;
    avisar();
  }
}

export function useNotificaciones() {
  const [, forzar] = useState(0);

  useEffect(() => {
    const oyente = () => forzar((numero) => numero + 1);

    oyentes.add(oyente);
    void cargar();

    const temporizador = window.setInterval(() => void cargar(), REFRESCO_MS);

    return () => {
      oyentes.delete(oyente);
      window.clearInterval(temporizador);
    };
  }, []);

  const recargar = useCallback(() => cargar(), []);

  return { notificaciones, sinLeer, cargadas, recargar };
}
