import { useCallback, useEffect, useState } from 'react';
import {
  Bike,
  Car,
  MapPin,
  PackageCheck,
  PackageSearch,
  RefreshCw,
  Split,
  Truck,
} from 'lucide-react';

import {
  ApiError,
  type EnvioAsignadoApi,
  type EstadoEnvio,
  type PedidoDisponibleApi,
  type Vehiculo,
  NOMBRE_VEHICULO,
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
  AvanzarBoton,
  CabeChip,
  DistanciaChip,
  FraccionarBoton,
  PanelPestana,
  PanelPestanas,
  PasoEnvio,
  PasosEnvio,
  PedidoDato,
  PedidoDatos,
  PedidoTitulo,
  UbicacionAviso,
  VehiculoBarra,
  VehiculoOpcion,
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

/**
 * Los pasos del envío, en orden.
 *
 * Cada uno dice qué hay que hacer para pasar al siguiente, en la voz de quien
 * reparte: "Retiré el pedido" y no "marcar como retirado".
 */
const PASOS: Array<{ estado: EstadoEnvio; corto: string; accion: string }> = [
  { estado: 'asignado', corto: 'Tomado', accion: 'Retiré el pedido' },
  { estado: 'retirado', corto: 'Retirado', accion: 'Salí a entregar' },
  { estado: 'en_camino', corto: 'En camino', accion: 'Entregué el pedido' },
  { estado: 'entregado', corto: 'Entregado', accion: '' },
];

/* Qué vehículos puede declarar, según su tipo de cuenta. */
const VEHICULOS: Record<string, Array<{ id: Vehiculo; icono: typeof Bike }>> = {
  delivery: [
    { id: 'moto', icono: Bike },
    { id: 'auto', icono: Car },
  ],
  fletero: [
    { id: 'camioneta', icono: Truck },
    { id: 'camion', icono: Truck },
  ],
};

const indiceDe = (estado: EstadoEnvio) =>
  Math.max(0, PASOS.findIndex((paso) => paso.estado === estado));

export function PanelRepartidorScreen() {
  const { usuario } = useSesion();
  const { status, error: errorUbicacion, locate } = useCurrentPosition();

  const [posicion, setPosicion] = useState<{ lat: number; lon: number } | null>(null);
  const [pedidos, setPedidos] = useState<PedidoDisponibleApi[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  const [detalle, setDetalle] = useState<string | null>(null);
  const [chat, setChat] = useState<PedidoDisponibleApi | null>(null);

  const [vehiculo, setVehiculo] = useState<Vehiculo | null>(null);
  const [envios, setEnvios] = useState<EnvioAsignadoApi[]>([]);
  const [pestana, setPestana] = useState<'disponibles' | 'mios'>('disponibles');
  const [avanzando, setAvanzando] = useState<string | null>(null);

  /* Un fletero hace el mismo trabajo, pero lo suyo son fletes: la pantalla
     es una sola y cambia sólo cómo nombra el viaje. */
  const esFletero = usuario?.rol === 'fletero';
  const queCosa = esFletero ? 'fletes' : 'pedidos';

  const cargar = useCallback(async () => {
    try {
      /* Las dos listas se piden juntas: son la misma pantalla, y traerlas
         por separado dejaría un momento en que un pedido tomado no está en
         ninguna de las dos. */
      const [{ pedidos: filas, vehiculo: suVehiculo }, { envios: mios }] = await Promise.all([
        deliveryApi.disponibles(posicion?.lat, posicion?.lon),
        deliveryApi.misEnvios(),
      ]);

      setVehiculo(suVehiculo);
      setPedidos(filas);
      setEnvios(mios);
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
    /* Se pasa a la pestaña de lo tomado: el pedido desaparece de disponibles
       y hay que poder verlo en algún lado. */
    setPestana('mios');
    await cargar();

    /* Al tomarlo se abre el chat con el cliente: es lo primero que hay que
       hacer, para avisar que se va en camino. */
    if (tomado) {
      setChat(tomado);
    }
  };

  const elegirVehiculo = async (nuevo: Vehiculo) => {
    setVehiculo(nuevo);

    try {
      await deliveryApi.elegirVehiculo(nuevo, esFletero ? 'fletero' : 'delivery');
      await cargar();
    } catch {
      setError('No pudimos guardar tu vehículo.');
    }
  };

  /**
   * Pide partir un pedido en varias entregas.
   *
   * Si la app calculó que entraba en su vehículo, no se parte solo: lo decide
   * el comercio, que tiene el pedido armado delante.
   */
  const pedirFraccionar = async (pedido: PedidoDisponibleApi) => {
    const partes = Math.max(2, pedido.viajes ?? 2);

    try {
      const { estado } = await deliveryApi.pedirFraccionar(pedido.id, partes);

      setError(
        estado === 'aprobado'
          ? null
          : 'Le avisamos al comercio. Te contestamos cuando lo resuelva.',
      );

      await cargar();
    } catch {
      setError('No pudimos pedir el fraccionamiento.');
    }
  };

  const avanzar = async (envio: EnvioAsignadoApi) => {
    const siguiente = PASOS[indiceDe(envio.estado) + 1];

    if (!siguiente) {
      return;
    }

    setAvanzando(envio.id);

    try {
      await deliveryApi.avanzar(envio.id, siguiente.estado);
      await cargar();
    } catch {
      setError('No pudimos actualizar el envío.');
    } finally {
      setAvanzando(null);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title={
                pestana === 'disponibles'
                  ? esFletero
                    ? 'Fletes disponibles'
                    : 'Pedidos disponibles'
                  : 'Lo que estás llevando'
              }
              chip={
                cargando
                  ? undefined
                  : `${pestana === 'disponibles' ? pedidos.length : envios.length}`
              }
              subtitle={
                pestana === 'disponibles'
                  ? esFletero
                    ? 'Fletes esperando que alguien los tome.'
                    : 'Ordenados por cercanía a donde estás.'
                  : 'Marcá cada paso a medida que avanzás.'
              }
            />

            {/* Con qué trabaja hoy: decide qué pedidos puede tomar, así que
                va antes que la lista. */}
            <VehiculoBarra>
              <span>Trabajás con</span>
              {(VEHICULOS[esFletero ? 'fletero' : 'delivery'] ?? []).map((opcion) => {
                const Icono = opcion.icono;

                return (
                  <VehiculoOpcion
                    key={opcion.id}
                    type="button"
                    onClick={() => void elegirVehiculo(opcion.id)}
                    data-activo={vehiculo === opcion.id}
                    aria-pressed={vehiculo === opcion.id}
                  >
                    <Icono size={14} aria-hidden="true" />
                    {NOMBRE_VEHICULO[opcion.id]}
                  </VehiculoOpcion>
                );
              })}
            </VehiculoBarra>

            <PanelPestanas>
              <PanelPestana
                type="button"
                onClick={() => setPestana('disponibles')}
                data-activa={pestana === 'disponibles'}
              >
                Disponibles
              </PanelPestana>
              <PanelPestana
                type="button"
                onClick={() => setPestana('mios')}
                data-activa={pestana === 'mios'}
              >
                {/* El número importa: es lo que todavía tiene que entregar. */}
                Mis envíos{envios.length > 0 ? ` (${envios.length})` : ''}
              </PanelPestana>
            </PanelPestanas>

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {pestana === 'disponibles' && !posicion && status !== 'locating' ? (
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

            {pestana === 'disponibles' && !cargando && pedidos.length === 0 && !error ? (
              <EmptyState
                icon={PackageSearch}
                title={esFletero ? 'No hay fletes ahora' : 'No hay pedidos ahora'}
                text="Cuando entre uno cerca tuyo lo vas a ver acá."
                dashed
              />
            ) : null}

            {pestana === 'mios' && !cargando && envios.length === 0 && !error ? (
              <EmptyState
                icon={PackageCheck}
                title="No estás llevando nada"
                text="Tomá un pedido de la lista y lo vas a ver acá."
                dashed
              />
            ) : null}

            {pestana === 'mios'
              ? envios.map((envio) => {
                  const indice = indiceDe(envio.estado);
                  const siguiente = PASOS[indice + 1];

                  return (
                    <Card key={envio.id}>
                      <CardPad>
                        <SectionStack>
                          <PedidoTitulo>
                            <span>{envio.comercio}</span>
                            <DistanciaChip>{envio.codigo}</DistanciaChip>
                          </PedidoTitulo>

                          <PedidoDatos>
                            <PedidoDato>Retirás en {envio.comercio_direccion}</PedidoDato>
                            <PedidoDato>Entregás en {envio.direccion_texto}</PedidoDato>
                            <PedidoDato data-suave>
                              {envio.cliente}
                              {envio.cliente_telefono ? ` · ${envio.cliente_telefono}` : ''}
                              {' · '}
                              {formatMoney(envio.total)}
                              {envio.metodo_pago ? ` · ${envio.metodo_pago}` : ''}
                            </PedidoDato>
                          </PedidoDatos>

                          {/* En qué punto está, sin tener que leer. */}
                          <PasosEnvio>
                            {PASOS.map((paso, posicionPaso) => (
                              <PasoEnvio
                                key={paso.estado}
                                data-hecho={posicionPaso <= indice}
                                data-actual={posicionPaso === indice}
                              >
                                {paso.corto}
                              </PasoEnvio>
                            ))}
                          </PasosEnvio>

                          {siguiente ? (
                            <AvanzarBoton
                              type="button"
                              onClick={() => void avanzar(envio)}
                              disabled={avanzando === envio.id}
                              data-final={siguiente.estado === 'entregado'}
                            >
                              {avanzando === envio.id
                                ? 'Guardando…'
                                : PASOS[indice].accion}
                            </AvanzarBoton>
                          ) : null}

                          <VerDetalleBoton
                            type="button"
                            onClick={() => setDetalle(envio.pedido_id)}
                          >
                            Ver detalle {esFletero ? 'del flete' : 'del pedido'}
                          </VerDetalleBoton>
                        </SectionStack>
                      </CardPad>
                    </Card>
                  );
                })
              : null}

            {pestana === 'disponibles' &&
              pedidos.map((pedido) => (
              <Card key={pedido.id}>
                <CardPad>
                  <SectionStack>
                    <PedidoTitulo>
                      <span>{pedido.comercio}</span>
                      {/* Si le entra tal cual o va a tener que hacer varios
                          viajes: es lo que decide si lo toma. */}
                      {pedido.entraEnTuVehiculo === false ? (
                        <CabeChip data-entra="false">
                          {pedido.viajes} viajes
                        </CabeChip>
                      ) : typeof pedido.litros === 'number' && pedido.litros > 0 ? (
                        <CabeChip data-entra="true">Entra</CabeChip>
                      ) : null}
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

                    {/* Partirlo sólo se ofrece cuando hay algo que partir: con
                        un solo producto no hay nada que repartir entre viajes. */}
                    {(pedido.items ?? 0) > 1 ? (
                      <FraccionarBoton
                        type="button"
                        onClick={() => void pedirFraccionar(pedido)}
                      >
                        <Split size={13} aria-hidden="true" />{' '}
                        {pedido.entraEnTuVehiculo === false
                          ? `Partir en ${pedido.viajes} entregas`
                          : 'No me entra: pedir partirlo'}
                      </FraccionarBoton>
                    ) : null}
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
