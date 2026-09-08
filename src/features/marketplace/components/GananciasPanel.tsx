import { useEffect, useState } from 'react';
import { Bike, PackageCheck, Truck } from 'lucide-react';

import { type GananciasApi, deliveryApi } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import { EmptyState } from './EmptyState';
import { SectionHeading } from './SectionHeading';
import { Card, CardPad } from '../ui';
import { SectionStack } from '../screens/screenLayout';
import { AuthAviso } from '../screens/AuthScreenStyled';
import {
  MetricaCaja,
  MetricaEtiqueta,
  MetricaGrilla,
  MetricaValor,
  MetricaVariacion,
} from '../screens/MiComercioScreenStyled';
import { ViajeFecha, ViajeFila, ViajeImporte, ViajeTrayecto } from './GananciasPanelStyled';

/**
 * Cuánto ganó quien reparte, y qué entregó.
 *
 * Sin esto no sabe cuánto hizo en la semana ni tiene con qué reclamar si algo
 * no cierra. Lo que gana es el envío de cada pedido entregado, así que el
 * historial y el total salen de la misma cuenta: si un viaje no aparece acá,
 * tampoco está sumado arriba.
 */

/** "07/09 14:32": cuándo se entregó. */
function cuando(iso: string | null) {
  if (!iso) {
    return '';
  }

  const fecha = new Date(iso.replace(' ', 'T') + 'Z');

  if (Number.isNaN(fecha.getTime())) {
    return '';
  }

  return `${fecha.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
  })} · ${fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`;
}

type Props = {
  /** Cambia sólo el texto: el fletero no "entrega pedidos", hace viajes. */
  esFletero: boolean;
};

export function GananciasPanel({ esFletero }: Props) {
  const [datos, setDatos] = useState<GananciasApi | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let vigente = true;

    const cargar = async () => {
      try {
        const respuesta = await deliveryApi.ganancias();

        if (vigente) {
          setDatos(respuesta);
          setError(null);
        }
      } catch {
        if (vigente) {
          setError('No pudimos cargar tus ganancias.');
        }
      } finally {
        if (vigente) {
          setCargando(false);
        }
      }
    };

    void cargar();

    return () => {
      vigente = false;
    };
  }, []);

  if (error) {
    return (
      <AuthAviso role="alert" data-tono="error">
        {error}
      </AuthAviso>
    );
  }

  if (!datos) {
    return cargando ? null : (
      <EmptyState
        icon={PackageCheck}
        title="Sin datos todavía"
        text="Cuando entregues tu primer pedido vas a ver acá cuánto ganaste."
        dashed
      />
    );
  }

  const promedio =
    datos.total.entregas > 0 ? Math.round(datos.total.gano / datos.total.entregas) : 0;

  const contar = (cantidad: number) =>
    `${cantidad} ${cantidad === 1 ? (esFletero ? 'viaje' : 'entrega') : esFletero ? 'viajes' : 'entregas'}`;

  return (
    <SectionStack>
      <MetricaGrilla>
        <MetricaCaja>
          <MetricaEtiqueta>Ganaste hoy</MetricaEtiqueta>
          <MetricaValor>{formatMoney(datos.hoy.gano)}</MetricaValor>
          <MetricaVariacion>{contar(datos.hoy.entregas)}</MetricaVariacion>
        </MetricaCaja>

        <MetricaCaja>
          <MetricaEtiqueta>Esta semana</MetricaEtiqueta>
          <MetricaValor>{formatMoney(datos.semana.gano)}</MetricaValor>
          <MetricaVariacion>{contar(datos.semana.entregas)}</MetricaVariacion>
        </MetricaCaja>

        <MetricaCaja>
          <MetricaEtiqueta>Desde que empezaste</MetricaEtiqueta>
          <MetricaValor>{formatMoney(datos.total.gano)}</MetricaValor>
          <MetricaVariacion>{contar(datos.total.entregas)}</MetricaVariacion>
        </MetricaCaja>

        <MetricaCaja>
          <MetricaEtiqueta>Promedio por viaje</MetricaEtiqueta>
          <MetricaValor>{formatMoney(promedio)}</MetricaValor>
          <MetricaVariacion>Sobre lo que ya entregaste</MetricaVariacion>
        </MetricaCaja>
      </MetricaGrilla>

      <SectionHeading
        title={esFletero ? 'Tus viajes' : 'Lo que entregaste'}
        subtitle="Los últimos cincuenta, del más nuevo al más viejo."
      />

      {datos.historial.length === 0 ? (
        <EmptyState
          icon={PackageCheck}
          title="Todavía no entregaste nada"
          text="Cuando completes tu primer viaje lo vas a ver acá."
          dashed
        />
      ) : (
        <Card>
          <CardPad>
            {datos.historial.map((viaje, indice) => (
              <ViajeFila key={`${viaje.codigo}-${indice}`}>
                <ViajeTrayecto>
                  {viaje.tipo === 'flete' ? (
                    <Truck size={14} aria-hidden="true" />
                  ) : (
                    <Bike size={14} aria-hidden="true" />
                  )}
                  {viaje.comercio} → {viaje.direccion_texto}
                </ViajeTrayecto>
                <ViajeImporte>{formatMoney(viaje.gano)}</ViajeImporte>
                <ViajeFecha>{cuando(viaje.entregado_en)}</ViajeFecha>
              </ViajeFila>
            ))}
          </CardPad>
        </Card>
      )}
    </SectionStack>
  );
}
