import { useCallback, useEffect, useState } from 'react';

import type { SortMode } from '@shared/types/ranking.types';

/**
 * Preferencia de orden del cliente.
 *
 * Se recuerda entre sesiones: una vez que la acomoda, no tiene que volver a
 * hacerlo. Es una preferencia de interfaz sin datos sensibles, así que
 * localStorage es el lugar adecuado.
 */

const STORAGE_KEY = 'lafranciago:orden';
const VALID: SortMode[] = ['relevancia', 'cercania', 'precio', 'puntuacion', 'entrega'];

const read = (): SortMode => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    return VALID.includes(saved as SortMode) ? (saved as SortMode) : 'relevancia';
  } catch {
    /* Modo privado o almacenamiento bloqueado: se usa el orden por defecto. */
    return 'relevancia';
  }
};

export function useSortPreference() {
  const [sortMode, setSortMode] = useState<SortMode>('relevancia');

  /* Se lee después de montar para no romper si no hay almacenamiento. */
  useEffect(() => {
    setSortMode(read());
  }, []);

  const updateSortMode = useCallback((mode: SortMode) => {
    setSortMode(mode);

    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* Si no se puede guardar, la elección vale para esta sesión. */
    }
  }, []);

  return { sortMode, setSortMode: updateSortMode };
}
