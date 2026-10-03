import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { LocateFixed } from 'lucide-react';

import 'leaflet/dist/leaflet.css';

import {
  PRECISION_DUDOSA_METROS,
  useCurrentPosition,
} from '@shared/hooks/useCurrentPosition';

import {
  MapCanvas,
  MapCrosshair,
  MapLocateButton,
  MapLocateError,
  MapWrap,
} from './AddressMapStyled';

type AddressMapProps = {
  lat: number;
  lon: number;
  /** Se dispara al arrastrar el pin o tocar el mapa. */
  onPick: (lat: number, lon: number) => void;
};

const DEFAULT_ZOOM = 16;
/** Al ubicar al usuario se acerca más: ya sabemos la manzana exacta. */
const LOCATED_ZOOM = 18;

/* Cuando la ubicación puede errar por kilómetros, se queda a la altura del
   pueblo en lugar de la calle: acercarse a una lectura imprecisa hace creer
   que el punto es exacto. */
const ZOOM_IMPRECISO = 14;

/**
 * Mapa OpenStreetMap con pin arrastrable.
 *
 * El pin es la fuente de verdad de la ubicación: en pueblos como La Francia
 * OSM tiene las calles pero no la numeración, así que la posición exacta la
 * define el usuario, no el geocoder.
 */
export function AddressMap({ lat, lon, onPick }: AddressMapProps) {
  const { status, error, locate } = useCurrentPosition();

  /* Cuánto puede errar la última lectura, para poder avisarlo. */
  const [precision, setPrecision] = useState<number | null>(null);
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

  /* Lleva el pin y la vista a donde está el dispositivo. El pin sigue siendo
     movible después: el GPS puede errar unos metros y quien mejor sabe dónde
     está la puerta es el usuario. */
  const handleLocate = () => {
    locate(({ lat: foundLat, lon: foundLon, precisionMetros }) => {
      const map = mapRef.current;
      const marker = markerRef.current;

      /* Con poca precisión no se acerca tanto: un zoom de calle sobre una
         ubicación que puede estar a kilómetros hace creer que el punto es
         exacto. El zoom acompaña lo que la lectura realmente sabe. */
      const dudosa = precisionMetros > PRECISION_DUDOSA_METROS;

      if (map && marker) {
        marker.setLatLng([foundLat, foundLon]);
        map.setView([foundLat, foundLon], dudosa ? ZOOM_IMPRECISO : LOCATED_ZOOM);
      }

      setPrecision(precisionMetros);
      skipRecenterRef.current = true;
      onPickRef.current(foundLat, foundLon);
    });
  };

  const locating = status === 'locating';

  return (
    <MapWrap>
      <MapCanvas ref={containerRef} />
      <MapCrosshair aria-hidden="true">Arrastrá el punto hasta tu casa</MapCrosshair>

      {error ? <MapLocateError role="status">{error}</MapLocateError> : null}

      {/* La computadora de escritorio no tiene GPS: ubica por la dirección de
          internet, y eso devuelve el centro de la zona del proveedor, que
          puede estar a cien kilómetros. Sin este aviso, la dirección que se
          completa sola parece correcta y nadie la revisa. */}
      {!error && precision !== null && precision > PRECISION_DUDOSA_METROS ? (
        <MapLocateError role="status" data-aviso>
          Tu ubicación salió con un margen de {Math.round(precision / 1000)} km, así
          que seguramente no sea exacta. Suele pasar en computadoras sin GPS.
          Arrastrá el punto hasta tu casa.
        </MapLocateError>
      ) : null}

      <MapLocateButton
        type="button"
        onClick={handleLocate}
        disabled={locating}
        data-locating={locating}
      >
        <LocateFixed size={16} aria-hidden="true" />
        {locating ? 'Buscando…' : 'Usar mi ubicación actual'}
      </MapLocateButton>
    </MapWrap>
  );
}
