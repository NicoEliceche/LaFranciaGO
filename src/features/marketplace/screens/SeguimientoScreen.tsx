import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bike, Car, Check, MapPin, PackageSearch, Store, Truck } from 'lucide-react';

import {
  type SeguimientoApi,
  type Vehiculo,
  NOMBRE_VEHICULO,
  hayBackend,
  seguimientoApi,
} from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { SeguimientoMapa } from '../components/SeguimientoMapa';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
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

/** Los pasos que ve el cliente. "Retirado" es cosa del comercio. */
const PASOS = [
  { estado: 'buscando', titulo: 'Buscando repartidor', texto: 'Alguien lo va a tomar en breve.' },
  { estado: 'asignado', titulo: 'Lo toma un repartidor', texto: 'Va camino al comercio.' },
  { estado: 'retirado', titulo: 'Retirado del comercio', texto: 'Ya tiene tu pedido.' },
  { estado: 'en_camino', titulo: 'En camino', texto: 'Va para tu dirección.' },
  { estado: 'entregado', titulo: 'Entregado', texto: '¡Que lo disfrutes!' },
];

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

  const cargar = useCallback(async () => {
    if (!pedidoId || !hayBackend()) {
      setCargando(false);

      return;
    }

    try {
      setDatos(await seguimientoApi.ver(pedidoId));
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
  const indiceActual = Math.max(
    0,
    PASOS.findIndex((paso) => paso.estado === estadoEnvio),
  );

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

            <Card>
              <CardPad>
                <Linea>
                  {PASOS.map((paso, indice) => {
                    const hecho = indice <= indiceActual;

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
    </MarketplaceFrame>
  );
}
