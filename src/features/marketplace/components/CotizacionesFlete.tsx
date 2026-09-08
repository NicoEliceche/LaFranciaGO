import { useCallback, useEffect, useState } from 'react';
import { Check, Truck } from 'lucide-react';

import { type CotizacionApi, fletesApi } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import { AuthAviso } from '../screens/AuthScreenStyled';
import {
  CotizacionCaja,
  CotizacionDato,
  CotizacionFletero,
  CotizacionLista,
  CotizacionPrecio,
  CotizacionTomar,
} from './CotizacionesFleteStyled';

/**
 * Los precios que le pusieron a un flete, para que el cliente elija.
 *
 * Un flete no tiene precio de lista, así que en vez de que el primero que
 * pasa se lo lleve, varios ofrecen y decide quien paga. Vienen del más barato
 * al más caro, pero el precio no es lo único: la nota dice si lo hace hoy o
 * si necesita una mano para cargar, y eso a veces vale más que la diferencia.
 */

type Props = {
  pedidoId: string;
  /** Para que la pantalla de arriba se entere de que ya tiene quien lo haga. */
  onAceptada: () => void;
};

export function CotizacionesFlete({ pedidoId, onAceptada }: Props) {
  const [cotizaciones, setCotizaciones] = useState<CotizacionApi[]>([]);
  const [aceptando, setAceptando] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    try {
      const { cotizaciones: filas } = await fletesApi.cotizaciones(pedidoId);

      setCotizaciones(filas);
    } catch {
      /* Sin cotizaciones no hay nada que mostrar: no es un error que
         merezca ocupar la pantalla. */
    }
  }, [pedidoId]);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  const aceptar = async (cotizacion: CotizacionApi) => {
    setAceptando(cotizacion.id);
    setError(null);

    try {
      await fletesApi.aceptar(cotizacion.id);
      onAceptada();
      await cargar();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos aceptar ese precio.');
    } finally {
      setAceptando(null);
    }
  };

  if (cotizaciones.length === 0) {
    return null;
  }

  const yaHayUna = cotizaciones.some((cotizacion) => cotizacion.estado === 'aceptada');

  return (
    <CotizacionLista>
      {error ? (
        <AuthAviso role="alert" data-tono="error">
          {error}
        </AuthAviso>
      ) : null}

      {cotizaciones.map((cotizacion) => (
        <CotizacionCaja key={cotizacion.id} data-estado={cotizacion.estado}>
          <CotizacionFletero>
            <Truck size={14} aria-hidden="true" />
            {cotizacion.fletero}
          </CotizacionFletero>

          <CotizacionPrecio>{formatMoney(cotizacion.precio)}</CotizacionPrecio>

          {cotizacion.nota ? <CotizacionDato>{cotizacion.nota}</CotizacionDato> : null}

          {typeof cotizacion.distancia_km === 'number' ? (
            <CotizacionDato data-suave>{cotizacion.distancia_km} km</CotizacionDato>
          ) : null}

          {cotizacion.estado === 'aceptada' ? (
            <CotizacionDato data-elegida>
              <Check size={13} aria-hidden="true" /> Lo hace esta persona
            </CotizacionDato>
          ) : yaHayUna ? null : (
            <CotizacionTomar
              type="button"
              onClick={() => void aceptar(cotizacion)}
              disabled={aceptando !== null}
            >
              {aceptando === cotizacion.id ? 'Aceptando…' : 'Elegir este precio'}
            </CotizacionTomar>
          )}
        </CotizacionCaja>
      ))}
    </CotizacionLista>
  );
}
