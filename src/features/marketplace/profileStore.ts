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

/**
 * Sólo se acepta una data URL de imagen: es lo único que se va a poner como
 * `src`. Cuando exista backend, este es el punto donde entra lo que devuelva
 * el servidor, y conviene que la comprobación ya esté puesta.
 */
const isSafeImageDataUrl = (value: string) => /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value);

const read = (): string | null => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    /* Lo guardado se vuelve a validar: puede haberlo tocado otro script. */
    return saved && isSafeImageDataUrl(saved) ? saved : null;
  } catch {
    /* Modo privado o almacenamiento bloqueado: se sigue sin foto guardada. */
    return null;
  }
};

/** Guarda la foto y avisa a todas las pantallas que la estén mostrando. */
export function setProfilePhoto(dataUrl: string | null) {
  if (dataUrl !== null && !isSafeImageDataUrl(dataUrl)) {
    return;
  }

  photo = dataUrl;

  try {
    if (dataUrl) {
      window.localStorage.setItem(STORAGE_KEY, dataUrl);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    /* Cuota llena o almacenamiento bloqueado: la foto vale para esta sesión
       y se limpia lo guardado para no dejar una versión vieja pegada. */
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* Nada más que hacer. */
    }
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
