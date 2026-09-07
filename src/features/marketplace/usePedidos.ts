import { useCallback, useEffect, useState } from 'react';

import { hayBackend, pedidosApi } from '@core/data/services/apiClient';

import type { CustomerOrder } from './marketplace.types';

/**
 * Los pedidos del cliente, traídos de la base.
 *
 * Antes vivían en un store local: se creaban al confirmar y desaparecían al
 * cerrar la pestaña. Ahora son los pedidos de verdad, los mismos que ve el
 * comercio en su panel.
 *
 * Se recargan al volver a la pantalla y cada tanto mientras está abierta: un
 * pedido en curso cambia de estado del otro lado, y el cliente que dejó la
 * app abierta esperando quiere ver cuándo salió.
 */

/* Cada cuánto se vuelve a preguntar por los pedidos en curso. */
const REFRESCO_MS = 20_000;

/** "2026-09-06 21:14:03" → "Hoy 09:14 p. m." */
function cuando(iso: string) {
  const fecha = new Date(iso.replace(' ', 'T') + 'Z');

  if (Number.isNaN(fecha.getTime())) {
    return '';
  }

  const hora = fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  const hoy = new Date();
  const mismoDia =
    fecha.getDate() === hoy.getDate() &&
    fecha.getMonth() === hoy.getMonth() &&
    fecha.getFullYear() === hoy.getFullYear();

  if (mismoDia) {
    return `Hoy ${hora}`;
  }

  return `${fecha.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })} ${hora}`;
}

const ESTADO_TEXTO: Record<string, string> = {
  proceso: 'En proceso',
  terminado: 'Entregado',
  cancelado: 'Cancelado',
};

export function usePedidos() {
  const [pedidos, setPedidos] = useState<CustomerOrder[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const cargar = useCallback(async () => {
    if (!hayBackend()) {
      setCargando(false);

      return;
    }

    try {
      const { pedidos: filas } = await pedidosApi.listar();

      setPedidos(
        filas.map((pedido) => {
          const lineas = (pedido as { items?: Array<{ productoId: string | null; escalon: number }> })
            .items ?? [];

          return {
            id: pedido.id,
            code: pedido.codigo,
            store: pedido.comercio_nombre,
            storeId: pedido.comercio_id,
            categoryId: pedido.rubro_id,
            total: pedido.total,
            status: ESTADO_TEXTO[pedido.estado] ?? pedido.estado,
            state: pedido.estado,
            /* La demora sólo tiene sentido mientras el pedido está en curso:
               en uno entregado, un "llega en 20 min" es ruido. */
            eta: pedido.estado === 'proceso' ? 'Llega en 15-25 min' : '',
            date: cuando(pedido.creado_en),
            itemCount: lineas.length,
            items: lineas.map((linea) => ({
              productId: linea.productoId ?? '',
              /* El escalón empieza en 0 ("1 unid."), la pantalla cuenta desde 1. */
              quantity: linea.escalon + 1,
            })),
          };
        }),
      );
      setError(false);
    } catch {
      setError(true);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void cargar();

    const temporizador = window.setInterval(() => void cargar(), REFRESCO_MS);

    return () => window.clearInterval(temporizador);
  }, [cargar]);

  return { pedidos, cargando, error, recargar: cargar };
}
