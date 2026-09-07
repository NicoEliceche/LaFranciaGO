import { useMemo, useState } from 'react';
import { PackageSearch } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { OrderCard } from '../components/OrderCard';
import { SectionHeading } from '../components/SectionHeading';
import { usePedidos } from '../usePedidos';
import type { OrderState } from '../marketplace.types';
import { FilterChip, SectionInner } from '../ui';
import { ScrollRail } from '@shared/components/ScrollRail';

import { CompactSection, OrderList, SearchSection } from './screenLayout';

type OrderTab = 'todos' | OrderState;

const tabs: Array<{ id: OrderTab; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'proceso', label: 'En proceso' },
  { id: 'terminado', label: 'Terminados' },
  { id: 'cancelado', label: 'Cancelados' },
];

export function MyOrdersScreen() {
  const [tab, setTab] = useState<OrderTab>('todos');
  const { pedidos: orders, cargando } = usePedidos();

  const visibleOrders = useMemo(
    () => (tab === 'todos' ? orders : orders.filter((order) => order.state === tab)),
    [orders, tab],
  );

  const activeCount = orders.filter((order) => order.state === 'proceso').length;

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
          {cargando && visibleOrders.length === 0 ? null : visibleOrders.length > 0 ? (
            <OrderList>
              {visibleOrders.map((order, index) => (
                <OrderCard key={order.id} order={order} priority={index < 3} />
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
    </MarketplaceFrame>
  );
}
