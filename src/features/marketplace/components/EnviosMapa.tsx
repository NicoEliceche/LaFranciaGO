import { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { LA_FRANCIA_CENTER } from '@core/data/services/geocodingService';
import type { EnvioApi } from '@core/data/services/apiClient';

import { MapCanvas, MapWrap } from './AddressMapStyled';

/**
 * Mapa con los repartidores en curso.
 *
 * Los marcadores se actualizan en su lugar en vez de recrearse en cada
 * refresco: recrearlos haría parpadear el mapa cada pocos segundos y perdería
 * el zoom que el comercio haya elegido.
 */
export function EnviosMapa({ envios }: { envios: EnvioApi[] }) {
  const contenedorRef = useRef<HTMLDivElement | null>(null);
  const mapaRef = useRef<L.Map | null>(null);
  const marcadoresRef = useRef<Map<string, L.Marker>>(new Map());

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

    /* El contenedor puede arrancar oculto en una pestaña: sin esto Leaflet
       calcula mal el tamaño y las tiles salen cortadas. */
    const frame = window.requestAnimationFrame(() => mapa.invalidateSize());

    return () => {
      window.cancelAnimationFrame(frame);
      mapa.remove();
      mapaRef.current = null;
      marcadoresRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const mapa = mapaRef.current;

    if (!mapa) {
      return;
    }

    const conUbicacion = envios.filter(
      (envio) => typeof envio.lat === 'number' && typeof envio.lon === 'number',
    );
    const vistos = new Set<string>();

    conUbicacion.forEach((envio) => {
      vistos.add(envio.id);

      const posicion: L.LatLngExpression = [envio.lat!, envio.lon!];
      const existente = marcadoresRef.current.get(envio.id);

      if (existente) {
        existente.setLatLng(posicion);
        return;
      }

      const icono = L.divIcon({
        className: 'lfg-repartidor',
        html: '<span class="lfg-repartidor__punto"></span>',
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marcador = L.marker(posicion, { icon: icono }).addTo(mapa);

      marcador.bindPopup(
        `<strong>${envio.repartidor ?? 'Repartidor'}</strong><br>Pedido ${envio.codigo}`,
      );

      marcadoresRef.current.set(envio.id, marcador);
    });

    /* Se quitan los que ya no están en curso, para que no queden pegados. */
    marcadoresRef.current.forEach((marcador, id) => {
      if (!vistos.has(id)) {
        marcador.remove();
        marcadoresRef.current.delete(id);
      }
    });

    /* Se encuadra sólo si hay a quién mostrar: sin esto el mapa saltaría al
       centro del pueblo cada vez que se vacía la lista. */
    if (conUbicacion.length > 0) {
      const limites = L.latLngBounds(
        conUbicacion.map((envio) => [envio.lat!, envio.lon!] as L.LatLngExpression),
      );

      mapa.fitBounds(limites, { padding: [40, 40], maxZoom: 16 });
    }
  }, [envios]);

  return (
    <MapWrap>
      <MapCanvas ref={contenedorRef} />
    </MapWrap>
  );
}
