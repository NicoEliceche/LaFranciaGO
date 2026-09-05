import type { SaleUnitId } from './saleUnit.types';

/** Categoría interna del catálogo de un comercio. */
export interface BusinessCategory {
  id: string;
  name: string;
  /**
   * Cómo se vende normalmente lo de esta categoría. El alta de producto la
   * propone sola, para que el comercio no tenga que pensarlo: la carne va por
   * medio kilo, el pan por cuarto, las gaseosas por unidad.
   */
  defaultSaleUnit?: SaleUnitId;
}

/** Rubro comercial con las categorías que la app sugiere al darse de alta. */
export interface BusinessType {
  id: string;
  name: string;
  description: string;
  suggestedCategories: BusinessCategory[];
}
