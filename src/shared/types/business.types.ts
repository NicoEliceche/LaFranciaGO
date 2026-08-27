/** Categoría interna del catálogo de un comercio. */
export interface BusinessCategory {
  id: string;
  name: string;
}

/** Rubro comercial con las categorías que la app sugiere al darse de alta. */
export interface BusinessType {
  id: string;
  name: string;
  description: string;
  suggestedCategories: BusinessCategory[];
}
