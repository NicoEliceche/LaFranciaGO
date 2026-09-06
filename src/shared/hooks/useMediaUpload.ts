import { useCallback, useEffect, useRef, useState } from 'react';

import {
  MEDIA_LIMITS,
  processImage,
  validateImageFile,
  validateVideo,
} from '@core/data/services/mediaService';
import type { ProcessedImage } from '@shared/types/media.types';

/**
 * Carga de fotos y video, compartida por el alta de producto y la de comercio.
 *
 * Las fotos se recomprimen en el navegador a WebP (con JPEG de respaldo donde
 * WebP no está disponible) y se achican al lado mayor permitido: una foto de
 * celular de 4 MB queda en unos 200 KB sin que se note en pantalla. Eso baja
 * el costo de almacenamiento y hace que el catálogo cargue rápido con datos
 * móviles, que es como se va a usar la app.
 *
 * El video no se recomprime: hacerlo en el navegador es lento y caliente el
 * teléfono. Se valida peso y duración, y se sube tal cual.
 */

export type UploadedPhoto = ProcessedImage & { id: string };

export type UploadedVideo = {
  url: string;
  bytes: number;
  name: string;
  /** El archivo original, para subirlo cuando se guarde. */
  blob: Blob;
};

export function useMediaUpload() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [video, setVideo] = useState<UploadedVideo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  /* Se guardan las URL temporales para liberarlas al desmontar: cada una
     retiene el archivo en memoria mientras exista. */
  const objectUrls = useRef<Set<string>>(new Set());

  useEffect(
    () => () => {
      objectUrls.current.forEach((url) => URL.revokeObjectURL(url));
      objectUrls.current.clear();
    },
    [],
  );

  const addPhotos = useCallback(
    async (files: FileList | null) => {
      if (!files?.length) {
        return;
      }

      setError(null);

      const room = MEDIA_LIMITS.maxImages - photos.length;

      if (room <= 0) {
        setError(`Podés subir hasta ${MEDIA_LIMITS.maxImages} fotos.`);
        return;
      }

      setProcessing(true);

      const incoming = Array.from(files).slice(0, room);
      const processed: UploadedPhoto[] = [];

      for (const file of incoming) {
        const invalid = validateImageFile(file);

        if (invalid) {
          setError(invalid);
          continue;
        }

        try {
          const image = await processImage(file);

          objectUrls.current.add(image.previewUrl);
          processed.push({ ...image, id: `${file.name}-${Date.now()}-${processed.length}` });
        } catch {
          setError('No pudimos procesar una de las fotos.');
        }
      }

      setPhotos((current) => [...current, ...processed]);
      setProcessing(false);
    },
    [photos.length],
  );

  const addVideo = useCallback(async (files: FileList | null) => {
    const file = files?.[0];

    if (!file) {
      return;
    }

    setError(null);

    const invalid = await validateVideo(file);

    if (invalid) {
      setError(invalid);
      return;
    }

    const url = URL.createObjectURL(file);

    objectUrls.current.add(url);
    setVideo({ url, bytes: file.size, name: file.name, blob: file });
  }, []);

  const removePhoto = useCallback((id: string) => {
    setPhotos((current) => {
      const target = current.find((photo) => photo.id === id);

      if (target) {
        URL.revokeObjectURL(target.previewUrl);
        objectUrls.current.delete(target.previewUrl);
      }

      return current.filter((photo) => photo.id !== id);
    });
  }, []);

  const removeVideo = useCallback(() => {
    setVideo((current) => {
      if (current) {
        URL.revokeObjectURL(current.url);
        objectUrls.current.delete(current.url);
      }

      return null;
    });
  }, []);

  return {
    photos,
    video,
    error,
    processing,
    addPhotos,
    addVideo,
    removePhoto,
    removeVideo,
  };
}
