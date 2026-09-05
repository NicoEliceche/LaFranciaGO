import { useCallback, useEffect, useState } from 'react';

/**
 * Foto de perfil del usuario.
 *
 * Sin backend todavía: la foto vive en un store module-level para que la
 * pantalla de Cuenta y el header muestren siempre lo mismo, y se guarda en
 * localStorage para que sobreviva a recargar la página.
 *
 * Se guarda como data URL y no como object URL: los object URL se pierden al
 * recargar. Cuando exista la API, la foto se subirá al servidor y este archivo
 * es el único punto a reemplazar.
 */

const STORAGE_KEY = 'lafranciago:foto-perfil';

const listeners = new Set<() => void>();
let photo: string | null = null;
let loaded = false;

const notify = () => listeners.forEach((listener) => listener());

const read = (): string | null => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    /* Modo privado o almacenamiento bloqueado: se sigue sin foto guardada. */
    return null;
  }
};

/** Guarda la foto y avisa a todas las pantallas que la estén mostrando. */
export function setProfilePhoto(dataUrl: string | null) {
  photo = dataUrl;

  try {
    if (dataUrl) {
      window.localStorage.setItem(STORAGE_KEY, dataUrl);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    /* Si no se puede guardar, la foto vale para esta sesión. */
  }

  notify();
}

/** Foto actual, o null si el usuario todavía no subió ninguna. */
export function useProfilePhoto() {
  const [current, setCurrent] = useState<string | null>(photo);

  useEffect(() => {
    /* La primera pantalla que monta lee lo guardado; las demás ya lo tienen. */
    if (!loaded) {
      loaded = true;
      photo = read();
    }

    setCurrent(photo);

    const listener = () => setCurrent(photo);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const clear = useCallback(() => setProfilePhoto(null), []);

  return { photo: current, setPhoto: setProfilePhoto, clearPhoto: clear };
}
