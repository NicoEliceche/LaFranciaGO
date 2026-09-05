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
      { id: 'bebidas', name: 'Bebidas', defaultSaleUnit: 'unidad' },
      { id: 'almacen', name: 'Almacén', defaultSaleUnit: 'unidad' },
      { id: 'limpieza', name: 'Limpieza', defaultSaleUnit: 'unidad' },
      { id: 'lacteos', name: 'Lácteos', defaultSaleUnit: 'unidad' },
      { id: 'fiambres', name: 'Fiambres y quesos', defaultSaleUnit: 'peso' },
      { id: 'snacks', name: 'Snacks', defaultSaleUnit: 'unidad' },
      { id: 'congelados', name: 'Congelados', defaultSaleUnit: 'unidad' },
    ],
  },
  {
    id: 'kiosco',
    name: 'Kiosco',
    description: 'Golosinas, bebidas y cigarrillos.',
    suggestedCategories: [
      { id: 'golosinas', name: 'Golosinas', defaultSaleUnit: 'unidad' },
      { id: 'bebidas', name: 'Bebidas', defaultSaleUnit: 'unidad' },
      { id: 'snacks', name: 'Snacks', defaultSaleUnit: 'unidad' },
      { id: 'cigarrillos', name: 'Cigarrillos', defaultSaleUnit: 'unidad' },
      { id: 'helados', name: 'Helados', defaultSaleUnit: 'unidad' },
    ],
  },
  {
    id: 'panaderia',
    name: 'Panadería',
    description: 'Pan, facturas y repostería.',
    suggestedCategories: [
      { id: 'pan', name: 'Pan', defaultSaleUnit: 'peso' },
      /* Las facturas se piden por docena, no de a una. */
      { id: 'facturas', name: 'Facturas', defaultSaleUnit: 'docena' },
      { id: 'tortas', name: 'Tortas', defaultSaleUnit: 'unidad' },
      { id: 'sandwicheria', name: 'Sándwiches', defaultSaleUnit: 'unidad' },
      { id: 'reposteria', name: 'Repostería', defaultSaleUnit: 'unidad' },
    ],
  },
  {
    id: 'carniceria',
    name: 'Carnicería',
    description: 'Cortes, achuras y elaborados.',
    suggestedCategories: [
      /* Los cortes se piden de medio kilo en adelante: nadie compra un
         cuarto de asado. */
      { id: 'vacuno', name: 'Vacuno', defaultSaleUnit: 'pesoMedio' },
      { id: 'cerdo', name: 'Cerdo', defaultSaleUnit: 'pesoMedio' },
      /* El pollo entero y los medallones van por unidad; la presa por peso
         se carga como producto aparte. */
      { id: 'pollo', name: 'Pollo', defaultSaleUnit: 'unidad' },
      /* Achuras: la morcilla y el chorizo se piden por unidad ("seis
         chorizos"), pero el chinchulín y la molleja van por peso. Se deja
         por unidad, que es lo más frecuente, y el comercio lo cambia. */
      { id: 'achuras', name: 'Achuras', defaultSaleUnit: 'unidad' },
      { id: 'embutidos', name: 'Embutidos', defaultSaleUnit: 'unidad' },
      { id: 'elaborados', name: 'Milanesas y elaborados', defaultSaleUnit: 'pesoMedio' },
      { id: 'carbon', name: 'Carbón y leña', defaultSaleUnit: 'unidad' },
    ],
  },
  {
    id: 'fiambreria',
    name: 'Fiambrería',
    description: 'Fiambres, quesos y picadas.',
    suggestedCategories: [
      { id: 'fiambres', name: 'Fiambres', defaultSaleUnit: 'peso' },
      { id: 'quesos', name: 'Quesos', defaultSaleUnit: 'peso' },
      /* La picada armada se vende como bandeja, no por peso. */
      { id: 'picadas', name: 'Picadas armadas', defaultSaleUnit: 'unidad' },
      { id: 'conservas', name: 'Conservas', defaultSaleUnit: 'unidad' },
    ],
  },
  {
    id: 'verduleria',
    name: 'Verdulería',
    description: 'Frutas, verduras y huevos.',
    suggestedCategories: [
      { id: 'frutas', name: 'Frutas', defaultSaleUnit: 'peso' },
      { id: 'verduras', name: 'Verduras', defaultSaleUnit: 'peso' },
      { id: 'huevos', name: 'Huevos', defaultSaleUnit: 'docena' },
      /* El atado de acelga o perejil es una unidad en sí. */
      { id: 'aromaticas', name: 'Aromáticas', defaultSaleUnit: 'unidad' },
      { id: 'combos', name: 'Combos', defaultSaleUnit: 'unidad' },
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
