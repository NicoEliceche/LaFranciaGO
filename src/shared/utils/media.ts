import type { MediaTone } from '@shared/types/media.types';

const BASE = import.meta.env.BASE_URL;

/** Rubros con imagen propia en public/media. */
const KNOWN_CATEGORIES = new Set([
  'almacen',
  'bebidas',
  'carniceria',
  'comercio',
  'delivery',
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
 * Resuelve la imagen de un rubro. Cae en `comercio` cuando el rubro no tiene
 * arte propio, de forma que toda tarjeta tenga siempre una superficie visual.
 */
export const categoryImage = (categoryId?: string) => {
  const key = categoryId && KNOWN_CATEGORIES.has(categoryId) ? categoryId : 'comercio';

  return `${BASE}media/${key}.svg`;
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
