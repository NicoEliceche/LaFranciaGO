import { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { MapCanvas, MapCrosshair, MapWrap } from './AddressMapStyled';

type AddressMapProps = {
  lat: number;
  lon: number;
  /** Se dispara al arrastrar el pin o tocar el mapa. */
  onPick: (lat: number, lon: number) => void;
};

const DEFAULT_ZOOM = 16;

/**
 * Mapa OpenStreetMap con pin arrastrable.
 *
 * El pin es la fuente de verdad de la ubicación: en pueblos como La Francia
 * OSM tiene las calles pero no la numeración, así que la posición exacta la
 * define el usuario, no el geocoder.
 */
export function AddressMap({ lat, lon, onPick }: AddressMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  // Evita re-centrar el mapa cuando el cambio vino del propio arrastre.
  const skipRecenterRef = useRef(false);
  const onPickRef = useRef(onPick);

  useEffect(() => {
    onPickRef.current = onPick;
  }, [onPick]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || mapRef.current) {
      return undefined;
    }

    const map = L.map(container, {
      center: [lat, lon],
      zoom: DEFAULT_ZOOM,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    const icon = L.divIcon({
      className: 'lfg-pin',
      html: '<span class="lfg-pin__dot"></span>',
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });

    const marker = L.marker([lat, lon], { draggable: true, icon, autoPan: true }).addTo(map);

    marker.on('dragend', () => {
      const position = marker.getLatLng();
      skipRecenterRef.current = true;
      onPickRef.current(position.lat, position.lng);
    });

    map.on('click', (event: L.LeafletMouseEvent) => {
      marker.setLatLng(event.latlng);
      skipRecenterRef.current = true;
      onPickRef.current(event.latlng.lat, event.latlng.lng);
    });

    mapRef.current = map;
    markerRef.current = marker;

    /* El contenedor arranca oculto dentro de la hoja: sin esto Leaflet
       calcula mal el tamaño y las tiles quedan cortadas. */
    const raf = window.requestAnimationFrame(() => map.invalidateSize());

    return () => {
      window.cancelAnimationFrame(raf);
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
    // Sólo al montar: las actualizaciones de posición van en el efecto de abajo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const marker = markerRef.current;

    if (!map || !marker) {
      return;
    }

    if (skipRecenterRef.current) {
      skipRecenterRef.current = false;
      return;
    }

    marker.setLatLng([lat, lon]);
    map.setView([lat, lon], map.getZoom() < DEFAULT_ZOOM ? DEFAULT_ZOOM : map.getZoom());
  }, [lat, lon]);

  return (
    <MapWrap>
      <MapCanvas ref={containerRef} />
      <MapCrosshair aria-hidden="true">Arrastrá el punto hasta tu casa</MapCrosshair>
    </MapWrap>
  );
}
