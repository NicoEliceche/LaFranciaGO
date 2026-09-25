import type { MediaTone } from '@shared/types/media.types';

const BASE = import.meta.env.BASE_URL;

/**
 * Rubros con foto propia en public/media.
 *
 * Van en WebP porque estas imágenes no se muestran sólo en la pantalla de
 * rubros: son también el respaldo de cada tarjeta de producto y de comercio
 * mientras el negocio no subió la suya, así que el peso se paga muchas veces
 * en la misma pantalla. En WebP las catorce juntas pesan 320 KB en lugar de
 * los 3,7 MB que pesaban en PNG.
 */
const CATEGORIAS_CON_FOTO = new Set([
  'almacen',
  'bebidas',
  'carniceria',
  'comida',
  'farmacia',
  'ferreteria',
  'indumentaria',
  'kiosco',
  'panaderia',
  'perfumeria',
  'regaleria',
  'rotiseria',
  'servicios',
  'verduleria',
]);

/**
 * Los dos respaldos, que no son rubros que el cliente elija.
 *
 * `comercio` es lo que se muestra cuando el rubro no tiene foto —un local
 * genérico— y `delivery` acompaña a los envíos. Siguen siendo dibujos en
 * SVG: pesan menos de 3 KB y no hay foto que los reemplace.
 */
const RESPALDOS_SVG = new Set(['comercio', 'delivery']);

/**
 * Resuelve la imagen de un rubro. Cae en `comercio` cuando el rubro no tiene
 * arte propio, de forma que toda tarjeta tenga siempre una superficie visual.
 */
export const categoryImage = (categoryId?: string) => {
  if (categoryId && CATEGORIAS_CON_FOTO.has(categoryId)) {
    return `${BASE}media/${categoryId}.webp`;
  }

  if (categoryId && RESPALDOS_SVG.has(categoryId)) {
    return `${BASE}media/${categoryId}.svg`;
  }

  return `${BASE}media/comercio.svg`;
};

/** Iniciales para el avatar cuando el comercio no tiene logo cargado. */
export const initialsOf = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');

/** Tono estable derivado del id, para que un mismo comercio no cambie de color. */
export const toneFromId = (id: string): MediaTone => {
  const tones: MediaTone[] = ['blue', 'green', 'violet', 'orange', 'red', 'gold', 'slate'];
  const sum = [...id].reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return tones[sum % tones.length];
};
