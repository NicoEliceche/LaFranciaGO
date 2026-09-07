import type { RankableStore, SortMode } from '@shared/types/ranking.types';

/**
 * Motor de orden de resultados.
 *
 * Regla acordada con el cliente: primero cercanía, y dentro de un mismo
 * entorno cercano los negocios Premium suben posiciones. El Premium nunca
 * salta por encima de un negocio que está bastante más cerca: sólo desempata
 * entre opciones comparables, para no mandar a la gente diez cuadras más
 * lejos por una promoción paga.
 *
 * El mismo criterio se usa en el buscador y en lo que muestra Inicio.
 */

/** Radio dentro del cual el Premium puede reordenar. */
export const PREMIUM_RADIUS_KM = 5;

/**
 * Los negocios se agrupan en franjas de distancia. Dentro de una franja se
 * los considera "igual de cerca", y ahí sí pesa el Premium.
 */
const DISTANCE_BUCKET_KM = 0.7;

/* Sin distancia conocida, el comercio va a la franja más lejana en lugar de
   producir NaN: una comparación con NaN devuelve siempre 0 y desordena la
   lista entera sin que se note. */
const bucketOf = (distanceKm: number | undefined) =>
  distanceKm === undefined ? Number.MAX_SAFE_INTEGER : Math.floor(distanceKm / DISTANCE_BUCKET_KM);

/** La distancia para comparar: desconocida cuenta como lejos. */
const distanciaDe = (store: RankableStore) => store.distanceKm ?? Number.MAX_SAFE_INTEGER;

/**
 * Un Premium sólo se adelanta frente a negocios de su MISMA franja: nunca
 * pasa por encima de uno que está claramente más cerca. Así el plan pagado
 * mejora la visibilidad entre opciones equivalentes, sin mandar al cliente
 * a caminar de más.
 */
const premiumRank = (store: RankableStore) =>
  store.premium && distanciaDe(store) <= PREMIUM_RADIUS_KM ? 0 : 1;

/** Los negocios abiertos van antes que los cerrados, en cualquier orden. */
const byOpenFirst = (a: RankableStore, b: RankableStore) => {
  if (a.openNow === b.openNow) {
    return 0;
  }

  return a.openNow ? -1 : 1;
};

/**
 * Orden por defecto: cercanía con realce Premium acotado.
 * Ante empate, primero el mejor puntuado.
 */
const byRelevance = (a: RankableStore, b: RankableStore) => {
  const open = byOpenFirst(a, b);

  if (open !== 0) {
    return open;
  }

  const bucketDiff = bucketOf(a.distanceKm) - bucketOf(b.distanceKm);

  if (bucketDiff !== 0) {
    return bucketDiff;
  }

  /* Dentro de la misma franja de cercanía, el Premium aparece primero. */
  const premiumDiff = premiumRank(a) - premiumRank(b);

  if (premiumDiff !== 0) {
    return premiumDiff;
  }

  const distanceDiff = distanciaDe(a) - distanciaDe(b);

  if (Math.abs(distanceDiff) > 0.05) {
    return distanceDiff;
  }

  return (b.rating ?? 0) - (a.rating ?? 0);
};

const byDistance = (a: RankableStore, b: RankableStore) =>
  byOpenFirst(a, b) || distanciaDe(a) - distanciaDe(b);

const byPrice = (a: RankableStore, b: RankableStore) =>
  byOpenFirst(a, b) || (a.price ?? a.minOrder ?? 0) - (b.price ?? b.minOrder ?? 0);

const byRating = (a: RankableStore, b: RankableStore) =>
  byOpenFirst(a, b) || (b.rating ?? 0) - (a.rating ?? 0);

const byEta = (a: RankableStore, b: RankableStore) =>
  byOpenFirst(a, b) || (a.etaMin ?? Number.MAX_SAFE_INTEGER) - (b.etaMin ?? Number.MAX_SAFE_INTEGER);

const comparators: Record<SortMode, (a: RankableStore, b: RankableStore) => number> = {
  relevancia: byRelevance,
  cercania: byDistance,
  precio: byPrice,
  puntuacion: byRating,
  entrega: byEta,
};

/** Ordena una lista de negocios o productos según el modo elegido. */
export function rankResults<T extends RankableStore>(items: T[], mode: SortMode = 'relevancia') {
  return [...items].sort(comparators[mode] ?? byRelevance);
}

/** Etiquetas del selector "Ordenar por". */
export const SORT_OPTIONS: Array<{ id: SortMode; label: string }> = [
  { id: 'relevancia', label: 'Más relevantes' },
  { id: 'cercania', label: 'Más cerca' },
  { id: 'precio', label: 'Menor precio' },
  { id: 'entrega', label: 'Entrega más rápida' },
  { id: 'puntuacion', label: 'Mejor puntuados' },
];
