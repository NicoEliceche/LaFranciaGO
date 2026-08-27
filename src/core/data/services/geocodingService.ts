import type { GeoSuggestion } from '@shared/types/geo.types';

/**
 * Geocoding sobre OpenStreetMap.
 *
 * - Photon (komoot) resuelve el autocompletado: acepta prefijos ("Bel" → Belgrano)
 *   y prioriza resultados cercanos con lat/lon de sesgo.
 * - Nominatim resuelve el reverse (coordenada → dirección) cuando el usuario
 *   mueve el pin.
 *
 * Ambos son gratuitos y sin API key. Nominatim pide un User-Agent identificable
 * y admite ~1 request por segundo, por eso el llamado va con debounce desde la UI.
 */

const PHOTON_URL = 'https://photon.komoot.io/api/';
const NOMINATIM_REVERSE_URL = 'https://nominatim.openstreetmap.org/reverse';

/** Centro de La Francia, usado para sesgar las sugerencias. */
export const LA_FRANCIA_CENTER = { lat: -31.4063691, lon: -62.6332043 };

type PhotonFeature = {
  properties?: {
    name?: string;
    street?: string;
    housenumber?: string;
    city?: string;
    county?: string;
    state?: string;
    country?: string;
    countrycode?: string;
    type?: string;
  };
  geometry?: {
    coordinates?: [number, number];
  };
};

/** Compara sin distinguir acentos ni mayúsculas ("Suipacha" ≈ "suipacha"). */
const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

/** Arma una etiqueta corta y legible a partir de las properties de Photon. */
const buildLabel = (props: NonNullable<PhotonFeature['properties']>) => {
  const street = [props.street ?? props.name, props.housenumber].filter(Boolean).join(' ');

  return street || props.name || 'Sin nombre';
};

const buildContext = (props: NonNullable<PhotonFeature['properties']>) =>
  [props.city ?? props.county, props.state, props.country].filter(Boolean).join(', ');

/**
 * Sugerencias de direcciones mientras se escribe.
 * Devuelve lista vacía ante cualquier error: la UI cae en el pin manual.
 */
export async function searchAddresses(
  query: string,
  signal?: AbortSignal,
): Promise<GeoSuggestion[]> {
  const term = query.trim();

  if (term.length < 2) {
    return [];
  }

  /* Photon sólo admite algunos idiomas (en/de/fr…): con lang=es devuelve
     vacío, así que se omite. Los nombres de calle vienen igual en español. */
  const params = new URLSearchParams({
    q: term,
    limit: '12',
    lat: String(LA_FRANCIA_CENTER.lat),
    lon: String(LA_FRANCIA_CENTER.lon),
  });

  try {
    const response = await fetch(`${PHOTON_URL}?${params.toString()}`, { signal });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as { features?: PhotonFeature[] };

    return (data.features ?? [])
      .map((feature, index) => {
        const props = feature.properties ?? {};
        const [lon, lat] = feature.geometry?.coordinates ?? [];

        if (typeof lat !== 'number' || typeof lon !== 'number') {
          return null;
        }

        return {
          id: `${props.type ?? 'geo'}-${index}-${lat}-${lon}`,
          label: buildLabel(props),
          context: buildContext(props),
          lat,
          lon,
        } satisfies GeoSuggestion;
      })
      .filter((item): item is GeoSuggestion => item !== null)
      /* Primero las que empiezan con lo escrito, como en Google: escribir
         "Sui" debe listar Suipacha antes que coincidencias parciales. */
      .sort((a, b) => {
        const needle = normalize(term);
        const aStarts = normalize(a.label).startsWith(needle);
        const bStarts = normalize(b.label).startsWith(needle);

        if (aStarts !== bStarts) {
          return aStarts ? -1 : 1;
        }

        return 0;
      })
      .slice(0, 6);
  } catch {
    return [];
  }
}

/** Dirección aproximada para una coordenada, al mover el pin. */
export async function reverseGeocode(
  lat: number,
  lon: number,
  signal?: AbortSignal,
): Promise<string | null> {
  const params = new URLSearchParams({
    format: 'json',
    lat: String(lat),
    lon: String(lon),
    zoom: '18',
    'accept-language': 'es',
  });

  try {
    const response = await fetch(`${NOMINATIM_REVERSE_URL}?${params.toString()}`, { signal });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      address?: { road?: string; house_number?: string; neighbourhood?: string; city?: string };
    };

    const address = data.address ?? {};
    const street = [address.road, address.house_number].filter(Boolean).join(' ');

    return street || address.neighbourhood || address.city || null;
  } catch {
    return null;
  }
}
