import { useCallback, useEffect, useState } from 'react';
import {
  AlertTriangle,
  BarChart3,
  Ban,
  Clock,
  FileCheck2,
  Split,
  Star,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

import { type MetricasAdminApi, adminApi, hayBackend } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  AccionIcono,
  AtencionGrilla,
  AtencionNumero,
  AtencionTarjeta,
  AtencionTexto,
  ComercioAcciones,
  ComercioFila,
  ComercioNombre,
  ComercioVentas,
  EstadoTag,
  NumeroCaja,
  NumeroEtiqueta,
  NumeroGrilla,
  NumeroValor,
  NumeroVariacion,
} from './AdminPanelScreenStyled';

/**
 * El panel de la plataforma.
 *
 * Responde tres preguntas en ese orden: qué necesita atención ahora, cómo
 * viene el negocio, y quién está vendiendo. Lo accionable primero, porque es
 * a lo que se entra.
 */

/* Los pedidos y las postulaciones entran cuando nadie está mirando. */
const REFRESCO_MS = 60_000;

/**
 * Cuánto cambió respecto del período anterior.
 *
 * Sin base previa no se inventa un "+100%": se muestra un guión, que es más
 * honesto que un porcentaje sobre cero.
 */
function variacion(actual: number, previo: number) {
  if (previo === 0) {
    return { texto: actual > 0 ? 'sin comparación' : '—', tono: 'igual' as const };
  }

  const cambio = Math.round(((actual - previo) / previo) * 100);

  return {
    texto: `${cambio > 0 ? '+' : ''}${cambio}%`,
    tono: cambio > 0 ? ('sube' as const) : cambio < 0 ? ('baja' as const) : ('igual' as const),
  };
}

function Variacion({ actual, previo, contra }: { actual: number; previo: number; contra: string }) {
  const v = variacion(actual, previo);

  return (
    <NumeroVariacion data-tono={v.tono}>
      {v.tono === 'sube' ? (
        <TrendingUp size={13} aria-hidden="true" />
      ) : v.tono === 'baja' ? (
        <TrendingDown size={13} aria-hidden="true" />
      ) : null}
      {v.texto} {contra}
    </NumeroVariacion>
  );
}

export function AdminPanelScreen() {
  const [datos, setDatos] = useState<MetricasAdminApi | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async () => {
    if (!hayBackend()) {
      setCargando(false);

      return;
    }

    try {
      setDatos(await adminApi.metricas());
      setError(null);
    } catch {
      setError('No pudimos cargar los números. ¿Tenés cuenta de administración?');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void cargar();

    const temporizador = window.setInterval(() => void cargar(), REFRESCO_MS);

    return () => window.clearInterval(temporizador);
  }, [cargar]);

  /* Suspender o destacar un comercio. El cambio se pinta antes de que
     conteste el servidor y se revierte si falla. */
  const cambiarComercio = async (
    id: string,
    datosNuevos: { estado?: string; premium?: boolean },
  ) => {
    const previo = datos;

    setDatos((actual) =>
      actual
        ? {
            ...actual,
            comercios: actual.comercios.map((fila) =>
              fila.id === id ? { ...fila, ...datosNuevos } : fila,
            ),
          }
        : actual,
    );

    try {
      await adminApi.actualizarComercio(id, datosNuevos);
    } catch {
      setDatos(previo);
      setError('No pudimos guardar el cambio.');
    }
  };

  if (!datos) {
    return (
      <MarketplaceFrame showSearch={false}>
        <CompactSection>
          <SectionInner>
            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : !cargando ? (
              <EmptyState
                icon={BarChart3}
                title="Sin datos"
                text="Cuando entren pedidos vas a ver acá cómo viene la plataforma."
                dashed
              />
            ) : null}
          </SectionInner>
        </CompactSection>
      </MarketplaceFrame>
    );
  }

  const { pendientes, reparto } = datos;

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title="Administración"
              subtitle="Cómo viene LaFranciaGO."
            />

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {/* Primero lo que pide que alguien haga algo. */}
            <AtencionGrilla>
              <AtencionTarjeta
                to="/panel/admin/postulaciones"
                data-hay={pendientes.postulaciones > 0}
              >
                <AtencionNumero data-hay={pendientes.postulaciones > 0}>
                  {pendientes.postulaciones}
                </AtencionNumero>
                <AtencionTexto>
                  <FileCheck2 size={13} aria-hidden="true" /> Postulaciones sin revisar
                </AtencionTexto>
              </AtencionTarjeta>

              <AtencionTarjeta to="/panel/admin" data-hay={pendientes.pedidosTrabados > 0}>
                <AtencionNumero data-hay={pendientes.pedidosTrabados > 0}>
                  {pendientes.pedidosTrabados}
                </AtencionNumero>
                <AtencionTexto>
                  <Clock size={13} aria-hidden="true" /> Pedidos sin repartidor hace más de 2 h
                </AtencionTexto>
              </AtencionTarjeta>

              <AtencionTarjeta to="/panel/admin" data-hay={pendientes.fraccionamientos > 0}>
                <AtencionNumero data-hay={pendientes.fraccionamientos > 0}>
                  {pendientes.fraccionamientos}
                </AtencionNumero>
                <AtencionTexto>
                  <Split size={13} aria-hidden="true" /> Pedidos de fraccionamiento
                </AtencionTexto>
              </AtencionTarjeta>

              <AtencionTarjeta to="/panel/admin" data-hay={pendientes.comercios > 0}>
                <AtencionNumero data-hay={pendientes.comercios > 0}>
                  {pendientes.comercios}
                </AtencionNumero>
                <AtencionTexto>
                  <AlertTriangle size={13} aria-hidden="true" /> Comercios sin aprobar
                </AtencionTexto>
              </AtencionTarjeta>
            </AtencionGrilla>

            <SectionHeading title="Los números" subtitle="Hoy y esta semana." />

            <NumeroGrilla>
              <NumeroCaja>
                <NumeroEtiqueta>Pedidos hoy</NumeroEtiqueta>
                <NumeroValor>{datos.hoy.pedidos}</NumeroValor>
                <Variacion actual={datos.hoy.pedidos} previo={datos.ayer.pedidos} contra="vs ayer" />
              </NumeroCaja>

              <NumeroCaja>
                <NumeroEtiqueta>Ventas hoy</NumeroEtiqueta>
                <NumeroValor>{formatMoney(datos.hoy.ventas)}</NumeroValor>
                <Variacion actual={datos.hoy.ventas} previo={datos.ayer.ventas} contra="vs ayer" />
              </NumeroCaja>

              {/* Lo que gana la plataforma: es el número del negocio. */}
              <NumeroCaja data-destacado="true">
                <NumeroEtiqueta>Comisión de la semana</NumeroEtiqueta>
                <NumeroValor>{formatMoney(datos.semana.comision)}</NumeroValor>
                <NumeroVariacion>
                  {formatMoney(datos.comisionTotal)} en total
                </NumeroVariacion>
              </NumeroCaja>

              <NumeroCaja>
                <NumeroEtiqueta>Ticket promedio</NumeroEtiqueta>
                <NumeroValor>{formatMoney(datos.ticketPromedio)}</NumeroValor>
                <NumeroVariacion>últimos 7 días</NumeroVariacion>
              </NumeroCaja>
            </NumeroGrilla>

            <NumeroGrilla>
              <NumeroCaja>
                <NumeroEtiqueta>Ventas de la semana</NumeroEtiqueta>
                <NumeroValor>{formatMoney(datos.semana.ventas)}</NumeroValor>
                <Variacion
                  actual={datos.semana.ventas}
                  previo={datos.semanaPrevia.ventas}
                  contra="vs la anterior"
                />
              </NumeroCaja>

              <NumeroCaja>
                <NumeroEtiqueta>Repartidores activos</NumeroEtiqueta>
                <NumeroValor>{reparto.activos}</NumeroValor>
                <NumeroVariacion>de {reparto.registrados} registrados</NumeroVariacion>
              </NumeroCaja>

              <NumeroCaja>
                <NumeroEtiqueta>Entregas de la semana</NumeroEtiqueta>
                <NumeroValor>{reparto.entregasSemana}</NumeroValor>
              </NumeroCaja>

              <NumeroCaja>
                <NumeroEtiqueta>Envíos en curso</NumeroEtiqueta>
                <NumeroValor>{reparto.enCurso}</NumeroValor>
              </NumeroCaja>
            </NumeroGrilla>

            <SectionHeading
              title="Comercios"
              subtitle="Lo que vendió cada uno en los últimos 30 días."
            />

            <Card>
              <CardPad>
                {datos.comercios.map((comercio) => (
                  <ComercioFila key={comercio.id}>
                    <ComercioNombre>
                      <strong>
                        {comercio.nombre}
                        {comercio.estado !== 'aprobado' ? (
                          <>
                            {' '}
                            <EstadoTag data-estado={comercio.estado}>{comercio.estado}</EstadoTag>
                          </>
                        ) : null}
                      </strong>
                      <span>{comercio.rubro}</span>
                    </ComercioNombre>

                    <ComercioVentas>
                      <strong>{formatMoney(comercio.ventas)}</strong>
                      <span>
                        {comercio.pedidos} {comercio.pedidos === 1 ? 'pedido' : 'pedidos'}
                      </span>
                    </ComercioVentas>

                    <ComercioAcciones>
                      <AccionIcono
                        type="button"
                        data-activo={comercio.premium}
                        onClick={() =>
                          void cambiarComercio(comercio.id, { premium: !comercio.premium })
                        }
                        aria-label={
                          comercio.premium
                            ? `Quitar destacado a ${comercio.nombre}`
                            : `Destacar ${comercio.nombre}`
                        }
                        title={comercio.premium ? 'Quitar destacado' : 'Marcar como destacado'}
                      >
                        <Star
                          size={15}
                          aria-hidden="true"
                          fill={comercio.premium ? 'currentColor' : 'none'}
                        />
                      </AccionIcono>

                      <AccionIcono
                        type="button"
                        data-tono="danger"
                        onClick={() =>
                          void cambiarComercio(comercio.id, {
                            estado: comercio.estado === 'suspendido' ? 'aprobado' : 'suspendido',
                          })
                        }
                        aria-label={
                          comercio.estado === 'suspendido'
                            ? `Reactivar ${comercio.nombre}`
                            : `Suspender ${comercio.nombre}`
                        }
                        title={
                          comercio.estado === 'suspendido'
                            ? 'Reactivar'
                            : 'Suspender: deja de aparecer en el buscador'
                        }
                      >
                        <Ban size={15} aria-hidden="true" />
                      </AccionIcono>
                    </ComercioAcciones>
                  </ComercioFila>
                ))}
              </CardPad>
            </Card>
          </SectionStack>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
