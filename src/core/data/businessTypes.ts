import type { BusinessType } from '@shared/types/business.types';

/**
 * Catálogo de rubros con sus categorías sugeridas.
 *
 * Cuando un comercio se registra elige su rubro, y la app le propone estas
 * categorías para que arranque con el catálogo ya organizado. El comercio
 * puede sumar o quitar las que quiera: son una sugerencia, no una imposición.
 *
 * Los `id` coinciden con los rubros que ya usa el marketplace, de modo que
 * las imágenes de `public/media` y los filtros de Inicio siguen funcionando.
 */
export const businessTypes: BusinessType[] = [
  {
    id: 'almacen',
    name: 'Almacén',
    description: 'Básicos, bebidas y limpieza.',
    suggestedCategories: [
      { id: 'bebidas', name: 'Bebidas' },
      { id: 'almacen', name: 'Almacén' },
      { id: 'limpieza', name: 'Limpieza' },
      { id: 'lacteos', name: 'Lácteos' },
      { id: 'snacks', name: 'Snacks' },
      { id: 'congelados', name: 'Congelados' },
    ],
  },
  {
    id: 'kiosco',
    name: 'Kiosco',
    description: 'Golosinas, bebidas y cigarrillos.',
    suggestedCategories: [
      { id: 'golosinas', name: 'Golosinas' },
      { id: 'bebidas', name: 'Bebidas' },
      { id: 'snacks', name: 'Snacks' },
      { id: 'cigarrillos', name: 'Cigarrillos' },
      { id: 'helados', name: 'Helados' },
    ],
  },
  {
    id: 'panaderia',
    name: 'Panadería',
    description: 'Pan, facturas y repostería.',
    suggestedCategories: [
      { id: 'pan', name: 'Pan' },
      { id: 'facturas', name: 'Facturas' },
      { id: 'tortas', name: 'Tortas' },
      { id: 'sandwicheria', name: 'Sándwiches' },
      { id: 'reposteria', name: 'Repostería' },
    ],
  },
  {
    id: 'carniceria',
    name: 'Carnicería',
    description: 'Cortes, achuras y elaborados.',
    suggestedCategories: [
      { id: 'vacuno', name: 'Vacuno' },
      { id: 'cerdo', name: 'Cerdo' },
      { id: 'pollo', name: 'Pollo' },
      { id: 'achuras', name: 'Achuras' },
      { id: 'embutidos', name: 'Embutidos' },
      { id: 'carbon', name: 'Carbón y leña' },
    ],
  },
  {
    id: 'verduleria',
    name: 'Verdulería',
    description: 'Frutas, verduras y huevos.',
    suggestedCategories: [
      { id: 'frutas', name: 'Frutas' },
      { id: 'verduras', name: 'Verduras' },
      { id: 'huevos', name: 'Huevos' },
      { id: 'aromaticas', name: 'Aromáticas' },
      { id: 'combos', name: 'Combos' },
    ],
  },
  {
    id: 'rotiseria',
    name: 'Rotisería',
    description: 'Comidas listas y viandas.',
    suggestedCategories: [
      { id: 'milanesas', name: 'Milanesas' },
      { id: 'empanadas', name: 'Empanadas' },
      { id: 'pastas', name: 'Pastas' },
      { id: 'guarniciones', name: 'Guarniciones' },
      { id: 'postres', name: 'Postres' },
    ],
  },
  {
    id: 'comida',
    name: 'Comida / Restaurante',
    description: 'Platos, pizzas y hamburguesas.',
    suggestedCategories: [
      { id: 'hamburguesas', name: 'Hamburguesas' },
      { id: 'pizzas', name: 'Pizzas' },
      { id: 'minutas', name: 'Minutas' },
      { id: 'bebidas', name: 'Bebidas' },
      { id: 'postres', name: 'Postres' },
    ],
  },
  {
    id: 'farmacia',
    name: 'Farmacia',
    description: 'Salud, higiene y perfumería.',
    suggestedCategories: [
      { id: 'medicamentos', name: 'Medicamentos' },
      { id: 'higiene', name: 'Higiene personal' },
      { id: 'dermocosmetica', name: 'Dermocosmética' },
      { id: 'bebes', name: 'Bebés' },
      { id: 'accesorios-salud', name: 'Accesorios' },
    ],
  },
  {
    id: 'perfumeria',
    name: 'Perfumería',
    description: 'Cuidado personal y cosmética.',
    suggestedCategories: [
      { id: 'perfumes', name: 'Perfumes' },
      { id: 'maquillaje', name: 'Maquillaje' },
      { id: 'cabello', name: 'Cabello' },
      { id: 'corporal', name: 'Corporal' },
    ],
  },
  {
    id: 'regaleria',
    name: 'Regalería',
    description: 'Regalos, deco y librería.',
    suggestedCategories: [
      { id: 'regalos', name: 'Regalos' },
      { id: 'deco', name: 'Decoración' },
      { id: 'libreria', name: 'Librería' },
      { id: 'tarjeteria', name: 'Tarjetería' },
    ],
  },
  {
    id: 'ferreteria',
    name: 'Ferretería',
    description: 'Herramientas, obra y electricidad.',
    suggestedCategories: [
      { id: 'herramientas', name: 'Herramientas' },
      { id: 'electricidad', name: 'Electricidad' },
      { id: 'plomeria', name: 'Plomería' },
      { id: 'pinturas', name: 'Pinturas' },
      { id: 'bulones', name: 'Bulonería' },
      { id: 'jardin', name: 'Jardín' },
    ],
  },
  {
    id: 'taller',
    name: 'Taller mecánico',
    description: 'Repuestos, lubricantes y servicios.',
    suggestedCategories: [
      { id: 'lubricantes', name: 'Lubricantes' },
      { id: 'aceites', name: 'Aceites de motor' },
      { id: 'filtros', name: 'Filtros' },
      { id: 'baterias', name: 'Baterías' },
      { id: 'neumaticos', name: 'Neumáticos' },
      { id: 'frenos', name: 'Frenos' },
      { id: 'servicios-taller', name: 'Servicios' },
    ],
  },
  {
    id: 'indumentaria',
    name: 'Indumentaria',
    description: 'Ropa, calzado y accesorios.',
    suggestedCategories: [
      { id: 'mujer', name: 'Mujer' },
      { id: 'hombre', name: 'Hombre' },
      { id: 'ninos', name: 'Niños' },
      { id: 'calzado', name: 'Calzado' },
      { id: 'accesorios', name: 'Accesorios' },
    ],
  },
  {
    id: 'servicios',
    name: 'Servicios',
    description: 'Oficios y asistencia local.',
    suggestedCategories: [
      { id: 'domicilio', name: 'A domicilio' },
      { id: 'reparaciones', name: 'Reparaciones' },
      { id: 'instalaciones', name: 'Instalaciones' },
      { id: 'mantenimiento', name: 'Mantenimiento' },
    ],
  },
];

/** Rubro por id, para resolver las categorías sugeridas del comercio. */
export const findBusinessType = (id: string) =>
  businessTypes.find((type) => type.id === id);
