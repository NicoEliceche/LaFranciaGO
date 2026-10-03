/**
 * De a cuánto se mueve la cantidad de un producto en el mostrador.
 *
 * El campo de la caja rápida subía de a 0,001 para todo, así que bajarle uno
 * a dos quesos daba 1,999. Nadie vende un milésimo de queso: el paso tiene
 * que ser el mismo con el que se vende el producto.
 *
 * Todo sale de los escalones que ya define la aplicación, así que la caja
 * del mostrador y la tienda hablan de las mismas cantidades: un cuarto de
 * pan acá es un cuarto de pan allá.
 *
 * Vive en su propio archivo y no dentro de la pantalla porque es la clase de
 * cuenta que conviene poder probar sola: es plata, y ya se equivocó una vez.
 */
import { DEFAULT_SALE_UNIT, SALE_UNITS } from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

/**
 * Traduce lo que guarda la base a una unidad conocida.
 *
 * La columna es texto libre, así que un producto viejo puede traer algo que
 * ya no existe. En ese caso se lo trata como unidad suelta, que es lo que era
 * antes de que hubiera unidades: se vende de a uno y nadie se sorprende.
 */
export function unidadDe(guardada: string | null | undefined): SaleUnitId {
  return guardada && guardada in SALE_UNITS ? (guardada as SaleUnitId) : DEFAULT_SALE_UNIT;
}

/** Cómo se llama la unidad, para el lector de pantalla. */
export function etiquetaUnidad(unidad: SaleUnitId): string {
  return SALE_UNITS[unidad]?.priceSuffix ?? 'unidades';
}

/** El salto de las flechas, en milésimos: 1000 es una unidad. */
export function pasoDe(unidad: SaleUnitId): number {
  const escalones = SALE_UNITS[unidad]?.steps ?? [];

  /* El primer escalón es el mínimo que se puede vender, y también de a cuánto
     avanza: un cuarto para el pan, medio kilo para la carne, uno para lo que
     va por unidad. */
  const primero = escalones[0]?.factor ?? 1;

  return Math.round(primero * 1000);
}

/**
 * Acomoda al escalón más cercano lo que se escribió a mano.
 *
 * El campo deja teclear cualquier número, y "1,3 kg de carne" no es algo que
 * la balanza del mostrador vaya a pesar. Devuelve milésimos, y cero cuando
 * hay que sacar la línea.
 */
export function acomodarCantidad(unidades: number, unidad: SaleUnitId): number {
  const paso = pasoDe(unidad);
  const milesimos = Math.round(Math.round(unidades * 1000) / paso) * paso;

  return milesimos > 0 ? milesimos : 0;
}
