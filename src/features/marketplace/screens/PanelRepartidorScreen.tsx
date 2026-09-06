import { useCallback, useEffect, useState } from 'react';
import { MapPin, PackageSearch, RefreshCw } from 'lucide-react';

import {
  ApiError,
  type PedidoDisponibleApi,
  deliveryApi,
} from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';
import { useCurrentPosition } from '@shared/hooks/useCurrentPosition';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { ChatPedidoDialog } from '../components/ChatPedidoDialog';
import { EmptyState } from '../components/EmptyState';
import { PedidoDetalleDialog } from '../components/PedidoDetalleDialog';
import { SectionHeading } from '../components/SectionHeading';
import { useSesion } from '../sessionStore';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  DistanciaChip,
  PedidoDato,
  PedidoDatos,
  PedidoTitulo,
  UbicacionAviso,
  VerDetalleBoton,
} from './PanelRepartidorScreenStyled';

/**
 * Panel de quien reparte.
 *
 * Sirve igual para delivery y para fletero: el trabajo es el mismo (ver qué
 * hay cerca, mirar el detalle y tomarlo), sólo cambia cómo se llama. Por eso
 * una sola pantalla en lugar de dos casi idénticas.
 *
 * Lo primero que se ve son los pedidos disponibles ordenados por cercanía:
 * es la acción que trae a alguien a abrir la app, así que no se esconde
 * detrás de un menú.
 */

/* Cada cuánto se avisa dónde está, para el mapa que mira el comercio. */
const LATIDO_MS = 45_000;
const REFRESCO_MS = 20_000;

export function PanelRepartidorScreen() {
  const { usuario } = useSesion();
  const { status, error: errorUbicacion, locate } = useCurrentPosition();

  const [posicion, setPosicion] = useState<{ lat: number; lon: number } | null>(null);
  const [pedidos, setPedidos] = useState<PedidoDisponibleApi[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  const [detalle, setDetalle] = useState<string | null>(null);
  const [chat, setChat] = useState<PedidoDisponibleApi | null>(null);

  /* Un fletero hace el mismo trabajo, pero lo suyo son fletes: la pantalla
     es una sola y cambia sólo cómo nombra el viaje. */
  const esFletero = usuario?.rol === 'fletero';
  const queCosa = esFletero ? 'fletes' : 'pedidos';

  const cargar = useCallback(async () => {
    try {
      const { pedidos: filas } = await deliveryApi.disponibles(posicion?.lat, posicion?.lon);

      setPedidos(filas);
      setError(null);
    } catch (fallo) {
      setError(
        fallo instanceof ApiError && fallo.status === 404
          ? 'Esta sección es para repartidores y fleteros aprobados.'
          : `No pudimos cargar los ${queCosa}.`,
      );
    } finally {
      setCargando(false);
    }
  }, [posicion, queCosa]);

  /* Se pide la ubicación al entrar: sin ella la lista igual funciona, pero
     sin orden por cercanía, que es lo que hace útil la pantalla. */
  useEffect(() => {
    locate((coords) => setPosicion(coords));
  }, [locate]);

  useEffect(() => {
    void cargar();

    const temporizador = window.setInterval(() => void cargar(), REFRESCO_MS);

    return () => window.clearInterval(temporizador);
  }, [cargar]);

  /* Mientras el panel está abierto se informa la posición cada tanto, así el
     comercio ve en su mapa por dónde va el pedido. */
  useEffect(() => {
    if (!posicion) {
      return undefined;
    }

    const avisar = () => {
      void deliveryApi.actualizarUbicacion(posicion.lat, posicion.lon).catch(() => undefined);
    };

    avisar();

    const temporizador = window.setInterval(avisar, LATIDO_MS);

    return () => window.clearInterval(temporizador);
  }, [posicion]);

  const tomar = async (pedidoId: string) => {
    await deliveryApi.tomar(pedidoId, posicion?.lat, posicion?.lon);

    const tomado = pedidos.find((pedido) => pedido.id === pedidoId) ?? null;

    setDetalle(null);
    await cargar();

    /* Al tomarlo se abre el chat con el cliente: es lo primero que hay que
       hacer, para avisar que se va en camino. */
    if (tomado) {
      setChat(tomado);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title={esFletero ? 'Fletes disponibles' : 'Pedidos disponibles'}
              chip={cargando ? undefined : `${pedidos.length}`}
              subtitle={
                esFletero
                  ? 'Fletes esperando que alguien los tome.'
                  : 'Ordenados por cercanía a donde estás.'
              }
            />

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {!posicion && status !== 'locating' ? (
              <UbicacionAviso>
                <MapPin size={16} aria-hidden="true" />
                <span>
                  {errorUbicacion ??
                    'Sin tu ubicación no podemos ordenarlos por cercanía.'}
                </span>
                <button type="button" onClick={() => locate((coords) => setPosicion(coords))}>
                  <RefreshCw size={14} aria-hidden="true" />
                  Reintentar
                </button>
              </UbicacionAviso>
            ) : null}

            {!cargando && pedidos.length === 0 && !error ? (
              <EmptyState
                icon={PackageSearch}
                title={esFletero ? 'No hay fletes ahora' : 'No hay pedidos ahora'}
                text="Cuando entre uno cerca tuyo lo vas a ver acá."
                dashed
              />
            ) : null}

            {pedidos.map((pedido) => (
              <Card key={pedido.id}>
                <CardPad>
                  <SectionStack>
                    <PedidoTitulo>
                      <span>{pedido.comercio}</span>
                      {typeof pedido.distanciaKm === 'number' ? (
                        <DistanciaChip>{pedido.distanciaKm} km</DistanciaChip>
                      ) : null}
                    </PedidoTitulo>

                    <PedidoDatos>
                      <PedidoDato>Retirás en {pedido.comercio_direccion}</PedidoDato>
                      <PedidoDato>Entregás en {pedido.direccion_texto}</PedidoDato>
                      <PedidoDato data-suave>
                        {pedido.items} {pedido.items === 1 ? 'producto' : 'productos'} ·{' '}
                        {formatMoney(pedido.total)}
                      </PedidoDato>
                    </PedidoDatos>

                    <VerDetalleBoton type="button" onClick={() => setDetalle(pedido.id)}>
                      Ver detalle {esFletero ? 'del flete' : 'del pedido'}
                    </VerDetalleBoton>
                  </SectionStack>
                </CardPad>
              </Card>
            ))}
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <PedidoDetalleDialog
        open={detalle !== null}
        pedidoId={detalle}
        onClose={() => setDetalle(null)}
        onTomar={tomar}
        esFletero={esFletero}
      />

      <ChatPedidoDialog
        open={chat !== null}
        pedidoId={chat?.id ?? null}
        codigo={chat?.codigo ?? ''}
        cliente={chat?.cliente ?? ''}
        onClose={() => setChat(null)}
      />
    </MarketplaceFrame>
  );
}
