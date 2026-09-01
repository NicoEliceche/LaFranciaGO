/** Criterios de orden que puede elegir el cliente. */
export type SortMode = 'relevancia' | 'cercania' | 'precio' | 'puntuacion' | 'entrega';

/**
 * Campos mínimos que necesita el motor de orden. Lo cumplen tanto los
 * negocios como los productos, así el mismo criterio sirve para ambos.
 */
export interface RankableStore {
  distanceKm: number;
  openNow: boolean;
  /** Plan pagado: mejora la posición sólo dentro del radio cercano. */
  premium?: boolean;
  rating?: number;
  price?: number;
  minOrder?: number;
  etaMin?: number;
}
