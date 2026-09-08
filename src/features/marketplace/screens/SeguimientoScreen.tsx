import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Bike,
  Car,
  Check,
  CreditCard,
  MapPin,
  MessageSquare,
  PackageSearch,
  Store,
  Truck,
} from 'lucide-react';

import {
  type ExtraApi,
  type SeguimientoApi,
  type Vehiculo,
  NOMBRE_VEHICULO,
  extrasApi,
  hayBackend,
  seguimientoApi,
} from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { ChatPedidoDialog } from '../components/ChatPedidoDialog';
import { SeguimientoMapa } from '../components/SeguimientoMapa';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  ChatBoton,
  ExtraLinea,
  ExtrasResumen,
  FrescuraChip,
  Linea,
  MapaCaja,
  ParteFila,
  PartesLista,
  Paso,
  PasoMarca,
  PasoTexto,
  RepartidorDatos,
  RepartidorFila,
  RepartidorIcono,
} from './SeguimientoScreenStyled';

/**
 * Dónde va el pedido.
 *
 * La pregunta que trae a alguien acá es una sola: cuánto falta. Por eso el
 * mapa va primero y los pasos abajo, y no al revés.
 *
 * Se refresca cada 15 segundos mientras la pantalla está abierta: es lo que
 * la hace útil frente a mirar "Mis pedidos", y el repartidor informa su
 * posición cada 45, así que preguntar más seguido no traería nada nuevo.
 */

const REFRESCO_MS = 15_000;

/* Cuánto vale una posición antes de considerarla vieja. Pasado ese tiempo el
   punto deja de latir: decir "está acá" con un dato de hace rato es mentir. */
const FRESCURA_MINUTOS = 3;

const ICONO_VEHICULO: Record<Vehiculo, typeof Bike> = {
  moto: Bike,
  auto: Car,
  camioneta: Truck,
  camion: Truck,
};

/**
 * El recorrido completo del pedido, del comercio a la puerta.
 *
 * Los dos primeros pasos son del comercio y el resto del envío: para el
 * cliente es un solo viaje, aunque adentro sean dos cosas distintas.
 */
const PASOS: Array<{
  /* De dónde sale el estado: el comercio prepara, el repartidor lleva. */
  origen: 'preparacion' | 'envio';
  estado: string;
  titulo: string;
  texto: string;
}> = [
  {
    origen: 'preparacion',
    estado: 'preparando',
    titulo: 'Preparando tu pedido',
    texto: 'El comercio lo está armando.',
  },
  {
    origen: 'preparacion',
    estado: 'listo',
    titulo: 'Listo para retirar',
    texto: 'Ya lo puede pasar a buscar el repartidor.',
  },
  {
    origen: 'envio',
    estado: 'asignado',
    titulo: 'Lo toma un repartidor',
    texto: 'Va camino al comercio.',
  },
  {
    origen: 'envio',
    estado: 'retirado',
    titulo: 'Lo retiró del comercio',
    texto: 'Ya tiene tu pedido.',
  },
  { origen: 'envio', estado: 'en_camino', titulo: 'En camino', texto: 'Va para tu dirección.' },
  { origen: 'envio', estado: 'entregado', titulo: 'Entregado', texto: '¡Que lo disfrutes!' },
];

/* Orden de cada estado dentro de su propia secuencia, para poder comparar. */
const ORDEN_PREPARACION: Record<string, number> = { recibido: 0, preparando: 1, listo: 2 };
const ORDEN_ENVIO: Record<string, number> = {
  buscando: 0,
  asignado: 1,
  retirado: 2,
  en_camino: 3,
  entregado: 4,
};

/** Hace cuánto se informó la posición, en minutos. */
function minutosDesde(iso: string | null) {
  if (!iso) {
    return null;
  }

  const fecha = new Date(iso.replace(' ', 'T') + 'Z');

  if (Number.isNaN(fecha.getTime())) {
    return null;
  }

  return Math.max(0, Math.round((Date.now() - fecha.getTime()) / 60_000));
}

export function SeguimientoScreen() {
  const { pedidoId = '' } = useParams();
  const [datos, setDatos] = useState<SeguimientoApi | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);
  const [chatAbierto, setChatAbierto] = useState(false);
  const [extras, setExtras] = useState<ExtraApi[]>([]);
  const [pagandoExtras, setPagandoExtras] = useState(false);

  const cargar = useCallback(async () => {
    if (!pedidoId || !hayBackend()) {
      setCargando(false);

      return;
    }

    try {
      const [seguimiento, datosExtras] = await Promise.all([
        seguimientoApi.ver(pedidoId),
        extrasApi.listar(pedidoId).catch(() => null),
      ]);

      setDatos(seguimiento);

      if (datosExtras) {
        setExtras(datosExtras.extras);
      }

      setError(null);
    } catch {
      setError('No pudimos cargar el seguimiento.');
    } finally {
      setCargando(false);
    }
  }, [pedidoId]);

  useEffect(() => {
    void cargar();

    const temporizador = window.setInterval(() => void cargar(), REFRESCO_MS);

    return () => window.clearInterval(temporizador);
  }, [cargar]);

  /* Los extras se cobran juntos y aparte del pedido: el pedido se pagó al
     confirmarlo, y estos aparecieron después. */
  const pagarExtras = async () => {
    if (!pedidoId || pagandoExtras) {
      return;
    }

    setPagandoExtras(true);

    try {
      const { url } = await extrasApi.pagar(pedidoId);

      window.location.href = url;
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos abrir el pago.');
      setPagandoExtras(false);
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
                icon={PackageSearch}
                title="No encontramos el pedido"
                text="Puede que ya no exista o que sea de otra cuenta."
                ctaLabel="Ver mis pedidos"
                ctaTo="/pedidos"
              />
            ) : null}
          </SectionInner>
        </CompactSection>
      </MarketplaceFrame>
    );
  }

  const { pedido, partes } = datos;
  const estadoEnvio = pedido.envio_estado ?? 'buscando';

  /* Hasta dónde llegó cada secuencia por su cuenta. Las dos avanzan en
     paralelo: el comercio puede seguir preparando mientras el repartidor ya
     está yendo a buscarlo. */
  const alcanzados = PASOS.map((paso, indice) =>
    paso.origen === 'preparacion'
      ? (ORDEN_PREPARACION[pedido.preparacion] ?? 0) >= (ORDEN_PREPARACION[paso.estado] ?? 0)
        ? indice
        : -1
      : (ORDEN_ENVIO[estadoEnvio] ?? 0) >= (ORDEN_ENVIO[paso.estado] ?? 0)
        ? indice
        : -1,
  );

  /* El corte es el paso más avanzado que se alcanzó, y todo lo anterior
     cuenta como hecho. Sin esto quedaba un paso vacío en el medio de dos
     marcados —el repartidor toma el pedido antes de que esté listo— y se
     leía como un error de la app en lugar de como lo que es. */
  const indiceActual = Math.max(0, ...alcanzados);
  const hechos = PASOS.map((_, indice) => indice <= indiceActual);

  /* Lo comprado y sin pagar: es lo que se puede cobrar ahora. */
  const porCobrar = extras.filter((extra) => extra.estado === 'comprado');
  const totalExtras = porCobrar.reduce((suma, extra) => suma + (extra.precio ?? 0), 0);

  const minutos = minutosDesde(pedido.ubicacion_en);
  const fresca = minutos !== null && minutos <= FRESCURA_MINUTOS;
  const IconoVehiculo = pedido.vehiculo ? ICONO_VEHICULO[pedido.vehiculo] : Bike;

  /* El punto del repartidor sólo se muestra mientras tiene sentido: una vez
     entregado, dónde está esa persona no es asunto del cliente. */
  const mostrarRepartidor =
    estadoEnvio !== 'entregado' &&
    typeof pedido.lat === 'number' &&
    typeof pedido.lon === 'number';

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title={`Pedido ${pedido.codigo}`}
              chip={
                pedido.parte_numero
                  ? `Parte ${pedido.parte_numero} de ${pedido.partes_total}`
                  : undefined
              }
              subtitle={`${pedido.comercio} · ${pedido.direccion_texto}`}
            />

            {/* El mapa primero: la pregunta que trae acá es dónde va. */}
            <MapaCaja>
              <SeguimientoMapa
                comercio={
                pedido.comercio_lat && pedido.comercio_lon
                  ? { lat: pedido.comercio_lat, lon: pedido.comercio_lon }
                  : null
              }
                destino={
                pedido.destino_lat && pedido.destino_lon
                  ? { lat: pedido.destino_lat, lon: pedido.destino_lon }
                  : null
              }
                repartidor={
                mostrarRepartidor ? { lat: pedido.lat!, lon: pedido.lon! } : null
              }
                posicionFresca={fresca}
                nombreRepartidor={pedido.repartidor}
              />
            </MapaCaja>

            {pedido.repartidor ? (
              <RepartidorFila>
                <RepartidorIcono>
                  <IconoVehiculo size={20} aria-hidden="true" />
                </RepartidorIcono>
                <RepartidorDatos>
                  <strong>{pedido.repartidor}</strong>
                  <span>
                    {pedido.vehiculo ? NOMBRE_VEHICULO[pedido.vehiculo] : 'En camino'}
                    {pedido.repartidor_telefono ? ` · ${pedido.repartidor_telefono}` : ''}
                  </span>
                </RepartidorDatos>
                {minutos !== null ? (
                  <FrescuraChip data-fresca={fresca}>
                    {minutos === 0 ? 'ahora' : `hace ${minutos} min`}
                  </FrescuraChip>
                ) : null}
              </RepartidorFila>
            ) : null}

            {/* Desde acá el cliente habla con quien lo lleva y pide extras.
                Sólo mientras el pedido esté vivo: después no hay con quién. */}
            {estadoEnvio !== 'entregado' ? (
              <ChatBoton type="button" onClick={() => setChatAbierto(true)}>
                <MessageSquare size={16} aria-hidden="true" />
                {pedido.repartidor ? 'Hablar con quien lo trae' : 'Abrir el chat del pedido'}
              </ChatBoton>
            ) : null}

            {/* Lo que se compró aparte y todavía no se pagó. */}
            {porCobrar.length > 0 ? (
              <ExtrasResumen>
                <ExtraLinea>
                  <span>
                    <strong>Extras comprados</strong>
                  </span>
                </ExtraLinea>

                {porCobrar.map((extra) => (
                  <ExtraLinea key={extra.id}>
                    <span>{extra.descripcion}</span>
                    <strong>{formatMoney(extra.precio ?? 0)}</strong>
                  </ExtraLinea>
                ))}

                <ExtraLinea>
                  <span>Total a pagar</span>
                  <strong>{formatMoney(totalExtras)}</strong>
                </ExtraLinea>

                <ChatBoton
                  type="button"
                  onClick={() => void pagarExtras()}
                  disabled={pagandoExtras}
                >
                  <CreditCard size={16} aria-hidden="true" />
                  {pagandoExtras ? 'Abriendo el pago…' : 'Pagar los extras'}
                </ChatBoton>
              </ExtrasResumen>
            ) : null}

            <Card>
              <CardPad>
                <Linea>
                  {PASOS.map((paso, indice) => {
                    const hecho = hechos[indice];

                    return (
                      <Paso key={paso.estado} data-hecho={hecho}>
                        <PasoMarca
                          data-hecho={hecho}
                          data-actual={indice === indiceActual && estadoEnvio !== 'entregado'}
                        >
                          {hecho ? (
                            <Check size={13} aria-hidden="true" />
                          ) : (
                            <span aria-hidden="true" />
                          )}
                        </PasoMarca>
                        <PasoTexto data-hecho={hecho}>
                          <strong>{paso.titulo}</strong>
                          {indice === indiceActual ? <span>{paso.texto}</span> : null}
                        </PasoTexto>
                      </Paso>
                    );
                  })}
                </Linea>
              </CardPad>
            </Card>

            {/* Un pedido dividido llega en varias entregas: cada una va por
                su cuenta y el cliente quiere verlas todas. */}
            {partes.length > 0 ? (
              <>
                <SectionHeading
                  title="Las entregas"
                  subtitle="Tu pedido viene en partes. Cada una la puede traer alguien distinto."
                />

                <PartesLista>
                  {partes.map((parte) => (
                    <ParteFila key={parte.id}>
                      <span>Parte {parte.parte_numero}</span>
                      <small>
                        {parte.repartidor
                          ? `${parte.repartidor} · ${
                              PASOS.find((paso) => paso.estado === parte.envio_estado)?.titulo ??
                              'En preparación'
                            }`
                          : 'Buscando repartidor'}
                      </small>
                    </ParteFila>
                  ))}
                </PartesLista>
              </>
            ) : null}

            {/* De dónde sale y a dónde va, para quien quiera el dato exacto. */}
            <Card>
              <CardPad>
                <SectionStack>
                  <RepartidorFila as="div">
                    <RepartidorIcono>
                      <Store size={18} aria-hidden="true" />
                    </RepartidorIcono>
                    <RepartidorDatos>
                      <strong>{pedido.comercio}</strong>
                      <span>{pedido.comercio_direccion}</span>
                    </RepartidorDatos>
                  </RepartidorFila>

                  <RepartidorFila as="div">
                    <RepartidorIcono>
                      <MapPin size={18} aria-hidden="true" />
                    </RepartidorIcono>
                    <RepartidorDatos>
                      <strong>Tu dirección</strong>
                      <span>{pedido.direccion_texto}</span>
                    </RepartidorDatos>
                  </RepartidorFila>
                </SectionStack>
              </CardPad>
            </Card>
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <ChatPedidoDialog
        rol="cliente"
        open={chatAbierto}
        pedidoId={pedidoId}
        codigo={pedido.codigo}
        cliente={pedido.comercio}
        onClose={() => {
          setChatAbierto(false);
          void cargar();
        }}
      />
    </MarketplaceFrame>
  );
}
