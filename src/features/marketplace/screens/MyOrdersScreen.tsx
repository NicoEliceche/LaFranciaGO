import { useMemo, useState } from 'react';
import { MapPin, PackageSearch, Star, XCircle } from 'lucide-react';

import { pedidosApi } from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { CotizacionesFlete } from '../components/CotizacionesFlete';
import { MotivoDialog } from '../components/MotivoDialog';
import { OrderCard } from '../components/OrderCard';
import { ResenaDialog } from '../components/ResenaDialog';
import { SectionHeading } from '../components/SectionHeading';
import { usePedidos } from '../usePedidos';
import type { CustomerOrder, OrderState } from '../marketplace.types';
import { FilterChip, SectionInner } from '../ui';
import { ScrollRail } from '@shared/components/ScrollRail';
import { AuthAviso } from './AuthScreenStyled';

import {
  CompactSection,
  OrderList,
  PedidoAccion,
  PedidoAcciones,
  PedidoConSeguimiento,
  SearchSection,
} from './screenLayout';

type OrderTab = 'todos' | OrderState;

const tabs: Array<{ id: OrderTab; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'proceso', label: 'En proceso' },
  { id: 'terminado', label: 'Terminados' },
  { id: 'cancelado', label: 'Cancelados' },
];

/**
 * Por qué el cliente da de baja un pedido.
 *
 * De una lista y no escrito a mano: el comercio necesita saber si fue un
 * error suyo, un cambio de idea o que se cansó de esperar, y eso escrito a
 * mano llega como "no lo quiero más".
 */
const MOTIVOS_CLIENTE = [
  'Me equivoqué al pedir',
  'Ya no lo necesito',
  'Está tardando demasiado',
  'Lo pedí en otro lado',
  'Prefiero no decirlo',
];

export function MyOrdersScreen() {
  const [tab, setTab] = useState<OrderTab>('todos');
  const { pedidos: orders, cargando, recargar } = usePedidos();

  /* Qué pedido está puntuando o cancelando: los diálogos son uno solo, el
     pedido es lo que cambia. */
  const [puntuando, setPuntuando] = useState<CustomerOrder | null>(null);
  const [cancelando, setCancelando] = useState<CustomerOrder | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const visibleOrders = useMemo(
    () => (tab === 'todos' ? orders : orders.filter((order) => order.state === tab)),
    [orders, tab],
  );

  const activeCount = orders.filter((order) => order.state === 'proceso').length;

  const cancelar = async (indice: number) => {
    if (!cancelando) {
      return;
    }

    setError(null);

    try {
      const { pagado, aviso: avisoServidor } = await pedidosApi.cancelar(
        cancelando.id,
        MOTIVOS_CLIENTE[indice],
      );

      /* Si ya había pagado, la plata no vuelve sola: decirlo acá evita el
         reclamo de mañana preguntando dónde quedó. */
      setAviso(
        avisoServidor ??
          (pagado
            ? 'Cancelamos el pedido. Te vamos a contactar por la devolución.'
            : 'Cancelamos el pedido.'),
      );
      setCancelando(null);
      await recargar();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos cancelar el pedido.');
      setCancelando(null);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <SearchSection>
        <SectionInner>
          <SectionHeading
            title="Mis pedidos"
            chip={activeCount > 0 ? `${activeCount} en curso` : undefined}
            subtitle="Historial completo de tus compras."
          />

          <ScrollRail aria-label="Filtrar pedidos">
            {tabs.map((option) => (
              <FilterChip
                key={option.id}
                type="button"
                onClick={() => setTab(option.id)}
                data-active={tab === option.id}
              >
                {option.label}
              </FilterChip>
            ))}
          </ScrollRail>
        </SectionInner>
      </SearchSection>

      <CompactSection>
        <SectionInner>
          {aviso ? <AuthAviso role="status">{aviso}</AuthAviso> : null}

          {error ? (
            <AuthAviso role="alert" data-tono="error">
              {error}
            </AuthAviso>
          ) : null}

          {cargando && visibleOrders.length === 0 ? null : visibleOrders.length > 0 ? (
            <OrderList>
              {visibleOrders.map((order, index) => (
                <PedidoConSeguimiento key={order.id}>
                  <OrderCard order={order} priority={index < 3} />

                  {/* Un flete se cotiza antes de salir: mientras esté en
                      curso, acá aparecen los precios que le pusieron y el
                      cliente elige con cuál se queda. */}
                  {order.isFreight && order.state === 'proceso' ? (
                    <CotizacionesFlete pedidoId={order.id} onAceptada={() => void recargar()} />
                  ) : null}

                  {order.cancellable || (order.state === 'terminado' && !order.rated) ? (
                    <PedidoAcciones>
                      {order.state === 'terminado' && !order.rated ? (
                        <PedidoAccion
                          type="button"
                          data-tono="puntuar"
                          onClick={() => setPuntuando(order)}
                        >
                          <Star size={15} aria-hidden="true" />
                          Puntuar el pedido
                        </PedidoAccion>
                      ) : null}

                      {order.cancellable ? (
                        <PedidoAccion
                          type="button"
                          data-tono="cancelar"
                          onClick={() => setCancelando(order)}
                        >
                          <XCircle size={15} aria-hidden="true" />
                          Cancelar pedido
                        </PedidoAccion>
                      ) : null}
                    </PedidoAcciones>
                  ) : null}
                </PedidoConSeguimiento>
              ))}
            </OrderList>
          ) : (
            <EmptyState
              icon={PackageSearch}
              title="Sin pedidos acá"
              text="Todavía no tenés pedidos en este estado."
              ctaLabel="Explorar negocios"
              ctaTo="/comercios"
            />
          )}
        </SectionInner>
      </CompactSection>

      <ResenaDialog
        open={puntuando !== null}
        pedidoId={puntuando?.id ?? ''}
        comercio={puntuando?.store ?? ''}
        repartidor={puntuando?.courier ?? null}
        onCerrar={() => setPuntuando(null)}
        onListo={() => {
          setAviso('¡Gracias! Tu puntaje ya está publicado.');
          void recargar();
        }}
      />

      <MotivoDialog
        open={cancelando !== null}
        titulo="¿Por qué lo cancelás?"
        motivos={MOTIVOS_CLIENTE}
        onCancelar={() => setCancelando(null)}
        onElegir={cancelar}
      />
    </MarketplaceFrame>
  );
}
