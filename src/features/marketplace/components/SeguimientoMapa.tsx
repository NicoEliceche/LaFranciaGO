import { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { LA_FRANCIA_CENTER } from '@core/data/services/geocodingService';

import { MapCanvas, MapWrap } from './AddressMapStyled';

/**
 * Dónde va el pedido.
 *
 * Tres puntos: de dónde sale, dónde va y dónde está quien lo lleva. El
 * cliente entiende el viaje de un vistazo, que es lo único que quiere saber
 * mientras espera.
 *
 * Los marcadores se mueven en lugar de recrearse: recrearlos haría parpadear
 * el mapa en cada refresco y perdería el zoom que el cliente haya elegido.
 */

type Punto = { lat: number; lon: number };

type Props = {
  comercio: Punto | null;
  destino: Punto | null;
  repartidor: Punto | null;
  /** Cuándo se informó la posición: si es vieja, el punto se ve apagado. */
  posicionFresca?: boolean;
  nombreRepartidor?: string | null;
};

export function SeguimientoMapa({
  comercio,
  destino,
  repartidor,
  posicionFresca = true,
  nombreRepartidor,
}: Props) {
  const contenedorRef = useRef<HTMLDivElement | null>(null);
  const mapaRef = useRef<L.Map | null>(null);
  const marcadoresRef = useRef<Record<string, L.Marker>>({});
  const rutaRef = useRef<L.Polyline | null>(null);
  const encuadradoRef = useRef(false);

  useEffect(() => {
    const contenedor = contenedorRef.current;

    if (!contenedor || mapaRef.current) {
      return undefined;
    }

    const mapa = L.map(contenedor, {
      center: [LA_FRANCIA_CENTER.lat, LA_FRANCIA_CENTER.lon],
      zoom: 14,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap',
    }).addTo(mapa);

    mapaRef.current = mapa;

    /* El contenedor puede arrancar oculto: sin esto Leaflet calcula mal el
       tamaño y las tiles salen cortadas. */
    const frame = window.requestAnimationFrame(() => mapa.invalidateSize());

    return () => {
      window.cancelAnimationFrame(frame);
      mapa.remove();
      mapaRef.current = null;
      marcadoresRef.current = {};
      rutaRef.current = null;
    };
  }, []);

  useEffect(() => {
    const mapa = mapaRef.current;

    if (!mapa) {
      return;
    }

    const puntos: Array<{
      id: string;
      punto: Punto | null;
      clase: string;
      etiqueta: string;
    }> = [
      { id: 'comercio', punto: comercio, clase: 'lfg-seg-comercio', etiqueta: 'Sale de acá' },
      { id: 'destino', punto: destino, clase: 'lfg-seg-destino', etiqueta: 'Tu dirección' },
      {
        id: 'repartidor',
        punto: repartidor,
        clase: posicionFresca ? 'lfg-seg-movil' : 'lfg-seg-movil lfg-seg-movil--viejo',
        etiqueta: nombreRepartidor ?? 'Repartidor',
      },
    ];

    for (const { id, punto, clase, etiqueta } of puntos) {
      const existente = marcadoresRef.current[id];

      if (!punto) {
        if (existente) {
          existente.remove();
          delete marcadoresRef.current[id];
        }

        continue;
      }

      const posicion: L.LatLngExpression = [punto.lat, punto.lon];

      if (existente) {
        existente.setLatLng(posicion);

        /* La clase cambia cuando la posición se pone vieja, pero sólo se
           reemplaza el icono si de verdad cambió: setIcon desmonta el
           elemento y lo vuelve a crear, y hacerlo en cada refresco tiraba
           el error de posición interna de Leaflet además de parpadear. */
        const claseActual = existente.getElement()?.className ?? '';

        if (!claseActual.includes(clase.split(' ').pop() ?? clase)) {
          existente.setIcon(
            L.divIcon({
              className: clase,
              html: '<span></span>',
              iconSize: [24, 24],
              iconAnchor: [12, 12],
            }),
          );
        }

        existente.setTooltipContent(etiqueta);

        continue;
      }

      const marcador = L.marker(posicion, {
        icon: L.divIcon({
          className: clase,
          html: '<span></span>',
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        }),
      })
        .addTo(mapa)
        .bindTooltip(etiqueta, { direction: 'top', offset: [0, -10] });

      marcadoresRef.current[id] = marcador;
    }

    /* Una línea del comercio a la casa: da idea del recorrido sin pedirle
       una ruta real a un servicio que habría que pagar. */
    const extremos = [comercio, destino].filter(Boolean) as Punto[];

    if (rutaRef.current) {
      rutaRef.current.remove();
      rutaRef.current = null;
    }

    if (extremos.length === 2) {
      rutaRef.current = L.polyline(
        extremos.map((p) => [p.lat, p.lon] as L.LatLngExpression),
        { color: '#0047E7', weight: 2, opacity: 0.35, dashArray: '6 6' },
      ).addTo(mapa);
    }

    /* Se encuadra una sola vez: después el cliente puede mover el mapa y no
       queremos que cada refresco se lo devuelva a su lugar. */
    const visibles = [comercio, destino, repartidor].filter(Boolean) as Punto[];

    if (!encuadradoRef.current && visibles.length > 0) {
      /* Se encuadra recién cuando el contenedor tiene tamaño: Leaflet lo mide
         al crearse, y si en ese momento el alto era cero, fitBounds calcula
         sobre nada y deja los puntos fuera de la vista.

         La marca de "ya encuadré" se pone adentro y no afuera: si se pusiera
         antes de que esto corra, un refresco que llegue en el medio la daría
         por hecha sin haberlo hecho nunca. */
      const encuadrar = () => {
        mapa.invalidateSize();

        const tamano = mapa.getSize();

        if (tamano.x === 0 || tamano.y === 0) {
          window.requestAnimationFrame(encuadrar);

          return;
        }

        mapa.fitBounds(
          L.latLngBounds(visibles.map((p) => [p.lat, p.lon] as L.LatLngExpression)),
          { padding: [28, 28], maxZoom: 15 },
        );

        encuadradoRef.current = true;
      };

      window.requestAnimationFrame(encuadrar);
    }
  }, [comercio, destino, repartidor, posicionFresca, nombreRepartidor]);

  return (
    <MapWrap>
      <MapCanvas ref={contenedorRef} />
    </MapWrap>
  );
}
