import { useEffect, useState } from 'react';
import { MapPin, Package, Store, X } from 'lucide-react';

import { type DetallePedidoApi, deliveryApi } from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';
import { stepLabel } from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

import { CardText, CardTitle } from '../ui';
import { AuthAviso, AuthEnviar } from '../screens/AuthScreenStyled';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import {
  DetalleBloque,
  DetalleDato,
  DetalleItem,
  DetalleItemNombre,
  DetalleTitulo,
  DetalleTotal,
} from './PedidoDetalleDialogStyled';

/**
 * Detalle completo del pedido, para que el repartidor decida antes de tomarlo.
 *
 * Muestra lo que armó el cliente, de dónde se retira y a dónde va: sin eso,
 * tomar un pedido es aceptar a ciegas un viaje que puede no convenir.
 *
 * Por eso tomar se decide únicamente acá: desde la tarjeta no se ve el
 * volumen, y un pedido grande no entra en una moto igual que un flete de
 * camión no entra en una camioneta.
 */

type Props = {
  open: boolean;
  pedidoId: string | null;
  onClose: () => void;
  onTomar: (pedidoId: string) => Promise<void>;
  /** Un fletero toma fletes, no pedidos: cambia cómo se nombra el viaje. */
  esFletero?: boolean;
};

export function PedidoDetalleDialog({
  open,
  pedidoId,
  onClose,
  onTomar,
  esFletero = false,
}: Props) {
  const [datos, setDatos] = useState<DetallePedidoApi | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tomando, setTomando] = useState(false);

  useEffect(() => {
    if (!open || !pedidoId) {
      return;
    }

    setDatos(null);
    setError(null);

    deliveryApi
      .detalle(pedidoId)
      .then(setDatos)
      .catch(() => setError('No pudimos cargar el pedido.'));
  }, [open, pedidoId]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onClose, open]);

  if (!open || !pedidoId) {
    return null;
  }

  const tomar = async () => {
    setTomando(true);
    setError(null);

    try {
      await onTomar(pedidoId);
    } catch (fallo) {
      setError(
        fallo instanceof Error
          ? fallo.message
          : `No pudimos tomar ${esFletero ? 'el flete' : 'el pedido'}.`,
      );
    } finally {
      setTomando(false);
    }
  };

  return (
    <PanelDialogOverlay onClick={onClose} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label={esFletero ? 'Detalle del flete' : 'Detalle del pedido'}
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>
              {esFletero ? 'Flete' : 'Pedido'} {datos?.pedido.codigo ?? ''}
            </CardTitle>
            <CardText>Mirá el detalle antes de tomarlo.</CardText>
          </div>
          <PanelDialogCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {error ? (
          <AuthAviso role="alert" data-tono="error">
            {error}
          </AuthAviso>
        ) : null}

        {datos ? (
          <>
            <DetalleBloque>
              <DetalleTitulo>
                <Store size={15} aria-hidden="true" />
                Retirás en
              </DetalleTitulo>
              <DetalleDato>{datos.pedido.comercio}</DetalleDato>
              <DetalleDato data-suave>{datos.pedido.comercio_direccion}</DetalleDato>
            </DetalleBloque>

            <DetalleBloque>
              <DetalleTitulo>
                <MapPin size={15} aria-hidden="true" />
                Entregás en
              </DetalleTitulo>
              <DetalleDato>{datos.pedido.direccion_texto}</DetalleDato>
              <DetalleDato data-suave>
                {datos.pedido.cliente}
                {datos.pedido.cliente_telefono ? ` · ${datos.pedido.cliente_telefono}` : ''}
              </DetalleDato>
            </DetalleBloque>

            <DetalleBloque>
              <DetalleTitulo>
                <Package size={15} aria-hidden="true" />
                Lo que pidió
              </DetalleTitulo>

              {datos.items.map((item, indice) => (
                <DetalleItem key={`${item.nombre}-${indice}`}>
                  <DetalleItemNombre>
                    {item.nombre}
                    {/* El escalón dice cuánto lleva: "1/2" en pan, "2 unid."
                        en gaseosas. Sin esto no sabe qué está cargando. */}
                    <span> · {stepLabel(item.unidad_venta as SaleUnitId, item.escalon)}</span>
                  </DetalleItemNombre>
                  <span>{formatMoney(item.subtotal)}</span>
                </DetalleItem>
              ))}

              <DetalleTotal>
                <span>Total {esFletero ? 'del flete' : 'del pedido'}</span>
                <strong>{formatMoney(datos.pedido.total)}</strong>
              </DetalleTotal>

              {datos.pedido.metodo_pago ? (
                <DetalleDato data-suave>Paga con {datos.pedido.metodo_pago}</DetalleDato>
              ) : null}
            </DetalleBloque>

            <AuthEnviar type="button" onClick={() => void tomar()} disabled={tomando}>
              {tomando ? 'Tomando…' : esFletero ? 'Tomar flete' : 'Tomar pedido'}
            </AuthEnviar>
          </>
        ) : (
          <CardText>Cargando…</CardText>
        )}
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
