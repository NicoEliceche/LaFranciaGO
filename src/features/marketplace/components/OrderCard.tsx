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
  OrderCardPista,
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
    /* Mientras está en curso, la tarjeta lleva al seguimiento: es lo que la
       persona viene a ver cuando toca su pedido. Antes llevaba al comercio,
       que es a dónde compró, no dónde está lo que compró.

       Una vez cerrado ya no hay nada que seguir, así que lleva al comercio
       con el pedido en la dirección: ahí se ve qué se había comprado, y es
       desde donde se vuelve a pedir lo mismo. */
    <OrderCardShell
      to={
        order.state === 'proceso'
          ? `/pedidos/${order.id}/seguimiento`
          : `/comercios/${order.storeId}?pedido=${order.id}`
      }
    >
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

        {/* Que la tarjeta entera se pueda tocar no se ve. Decirlo acá evita
            el botón aparte que hacía lo mismo: dos maneras de entrar a lo
            mismo hacen dudar de si van al mismo lado. */}
        <OrderCardPista>
          {order.state === 'proceso'
            ? 'Entrá al pedido para ver dónde va'
            : 'Entrá al pedido para ver más info'}
        </OrderCardPista>
      </OrderCardBody>

      <ChevronRight size={18} aria-hidden="true" />
    </OrderCardShell>
  );
}
