/**
 * La primera pantalla del sistema de gestión.
 *
 * Muestra el día en curso y lo que necesita atención. La caja rápida aparece
 * siempre, incluso fuera del mostrador: el comercio tiene que ver qué gana
 * instalando el sistema en la computadora del local.
 */
import { useEffect, useState } from 'react';
import { ScanBarcode, Wallet } from 'lucide-react';

import { formatMoney } from '@features/marketplace/marketplace.utils';
import { miComercioApi, type MetricasComercioApi } from '@core/data/services/apiClient';

import { GestionFrame } from '../components/GestionFrame';
import { SoloMostrador } from '../components/SoloMostrador';
import { Total, Totales } from '../components/TablaStyled';
import { Atajo, Atajos, Bloque, TituloBloque } from './GestionResumenScreenStyled';

export function GestionResumenScreen() {
  const [metricas, setMetricas] = useState<MetricasComercioApi | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let vigente = true;

    miComercioApi
      .metricas()
      .then((datos) => {
        if (vigente) setMetricas(datos);
      })
      .catch(() => {
        /* Sin métricas la pantalla igual sirve: se muestran los atajos. */
      })
      .finally(() => {
        if (vigente) setCargando(false);
      });

    return () => {
      vigente = false;
    };
  }, []);

  return (
    <GestionFrame titulo="Resumen">
      <Totales>
        <Total>
          <span>Ventas de hoy</span>
          <strong>{cargando ? '—' : metricas?.hoy.pedidos ?? 0}</strong>
        </Total>

        <Total data-tono="cobrado">
          <span>Cobrado hoy</span>
          <strong>{cargando ? '—' : formatMoney(metricas?.hoy.ventas ?? 0)}</strong>
        </Total>

        <Total>
          <span>Ventas de la semana</span>
          <strong>{cargando ? '—' : metricas?.semana.pedidos ?? 0}</strong>
        </Total>

        <Total data-tono="cobrado">
          <span>Cobrado en la semana</span>
          <strong>{cargando ? '—' : formatMoney(metricas?.semana.ventas ?? 0)}</strong>
        </Total>
      </Totales>

      <Bloque>
        <TituloBloque>Para arrancar el día</TituloBloque>

        <Atajos>
          {/* En el navegador se ve apagada, con el motivo. En la computadora
              del negocio anda. */}
          <SoloMostrador funcion="cajaRapida">
            <Atajo type="button">
              <ScanBarcode size={20} aria-hidden="true" />
              <strong>Caja rápida</strong>
              <span>Cobrar con la lectora de códigos</span>
            </Atajo>
          </SoloMostrador>

          <Atajo type="button">
            <Wallet size={20} aria-hidden="true" />
            <strong>Caja</strong>
            <span>Abrir, retirar y cerrar el día</span>
          </Atajo>
        </Atajos>
      </Bloque>
    </GestionFrame>
  );
}
