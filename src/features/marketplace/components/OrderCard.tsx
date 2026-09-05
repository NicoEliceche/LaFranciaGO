import { ChevronRight, Clock3, PackageSearch } from 'lucide-react';

import { MediaFrame, MediaImage } from '@shared/components/Media';
import { categoryImage } from '@shared/utils/media';
import { formatMoney } from '@shared/utils/format';
import type { CustomerOrder } from '../marketplace.types';

import {
  OrderCardBody,
  OrderCardCode,
  OrderCardEta,
  OrderCardFooter,
  OrderCardHead,
  OrderCardShell,
  OrderCardStore,
  OrderCardThumb,
  OrderCardTotal,
  OrderStateBadge,
} from './OrderCardStyled';

type OrderCardProps = {
  order: CustomerOrder;
  priority?: boolean;
};

const stateLabel: Record<CustomerOrder['state'], string> = {
  proceso: 'En proceso',
  terminado: 'Entregado',
  cancelado: 'Cancelado',
};

/** Fila de pedido en el historial: comercio, estado, total y acceso al detalle. */
export function OrderCard({ order, priority }: OrderCardProps) {
  return (
    /* Se lleva el pedido en la URL: el comercio muestra sólo lo comprado. */
    <OrderCardShell to={`/comercios/${order.storeId}?pedido=${order.id}`}>
      <OrderCardThumb>
        <MediaFrame $ratio="1 / 1" $radius="md">
          <MediaImage
            src={categoryImage(order.categoryId)}
            alt={order.store}
            loading={priority ? 'eager' : 'lazy'}
          />
        </MediaFrame>
      </OrderCardThumb>

      <OrderCardBody>
        <OrderCardHead>
          <OrderCardStore>{order.store}</OrderCardStore>
          <OrderCardCode>{order.code}</OrderCardCode>
        </OrderCardHead>

        <OrderStateBadge data-state={order.state}>{stateLabel[order.state]}</OrderStateBadge>

        <OrderCardEta>
          <Clock3 size={13} aria-hidden="true" />
          {order.eta} · {order.date}
        </OrderCardEta>

        <OrderCardFooter>
          <span>
            <PackageSearch size={13} aria-hidden="true" /> {order.itemCount}{' '}
            {order.itemCount === 1 ? 'producto' : 'productos'}
          </span>
          <OrderCardTotal>{formatMoney(order.total)}</OrderCardTotal>
        </OrderCardFooter>
      </OrderCardBody>

      <ChevronRight size={18} aria-hidden="true" />
    </OrderCardShell>
  );
}
