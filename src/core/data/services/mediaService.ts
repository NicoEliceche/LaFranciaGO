import type { MediaLimits, ProcessedImage } from '@shared/types/media.types';

/**
 * Procesamiento de fotos y video antes de subirlas.
 *
 * Criterio: el comercio saca la foto con el celular (3–8 MB, 4000px de ancho)
 * pero la app la muestra a lo sumo a 1200px. Subir el original desperdicia
 * almacenamiento y hace lenta la carga, así que se redimensiona y recomprime
 * en el navegador ANTES de subir. Es la práctica estándar y evita depender
 * de procesamiento en el servidor.
 */

export const MEDIA_LIMITS: MediaLimits = {
  maxImages: 5,
  maxVideos: 1,
  /** Lado mayor de la imagen final. Suficiente para pantallas retina. */
  maxImageDimension: 1200,
  /** Peso objetivo por foto ya procesada. */
  maxImageBytes: 300 * 1024,
  /**
   * Tope del archivo ANTES de comprimir. El navegador tiene que decodificar la
   * imagen entera en memoria para procesarla: sin este límite, un archivo de
   * cientos de megas cuelga la pestaña del usuario.
   */
  maxImageUploadBytes: 12 * 1024 * 1024,
  /** Tope de subida del video, sin recomprimir. */
  maxVideoBytes: 20 * 1024 * 1024,
  maxVideoSeconds: 30,
};

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/webm'];

export const IMAGE_ACCEPT = ACCEPTED_IMAGE_TYPES.join(',');
export const VIDEO_ACCEPT = ACCEPTED_VIDEO_TYPES.join(',');

/** Formato de salida: WebP pesa ~30% menos que JPEG con la misma calidad. */
const detectOutputType = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  return canvas.toDataURL('image/webp').startsWith('data:image/webp')
    ? 'image/webp'
    : 'image/jpeg';
};

const readAsImage = (file: File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('No se pudo leer la imagen'));
    };

    image.src = url;
  });

const canvasToBlob = (canvas: HTMLCanvasElement, type: string, quality: number) =>
  new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality));

export const formatBytes = (bytes: number) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

/**
 * Redimensiona y recomprime una foto.
 *
 * Baja la calidad de forma escalonada hasta entrar en `maxImageBytes`; si aun
 * en la calidad mínima no entra, devuelve la mejor versión lograda en lugar de
 * fallar: es preferible una foto algo más pesada que un alta bloqueada.
 */
export async function processImage(file: File): Promise<ProcessedImage> {
  const image = await readAsImage(file);
  const { maxImageDimension, maxImageBytes } = MEDIA_LIMITS;

  const scale = Math.min(1, maxImageDimension / Math.max(image.width, image.height));
  const width = Math.round(image.width * scale);
  const height = Math.round(image.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('No se pudo procesar la imagen');
  }

  context.drawImage(image, 0, 0, width, height);

  const type = detectOutputType();
  let quality = 0.82;
  let blob = await canvasToBlob(canvas, type, quality);

  while (blob && blob.size > maxImageBytes && quality > 0.5) {
    quality -= 0.1;
    blob = await canvasToBlob(canvas, type, quality);
  }

  if (!blob) {
    throw new Error('No se pudo comprimir la imagen');
  }

  return {
    blob,
    previewUrl: URL.createObjectURL(blob),
    width,
    height,
    bytes: blob.size,
    originalBytes: file.size,
    type,
  };
}

/** Duración del video, para rechazar los largos antes de subirlos. */
export const readVideoDuration = (file: File) =>
  new Promise<number>((resolve) => {
    const url = URL.createObjectURL(file);
    const video = document.createElement('video');

    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(video.duration);
    };
    video.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(0);
    };

    video.src = url;
  });

/**
 * Valida el video sin recomprimirlo: hacerlo en el navegador es lento y
 * costoso en batería. Se acota por peso y duración, y la recompresión real
 * queda para el backend.
 */
export async function validateVideo(file: File): Promise<string | null> {
  if (!ACCEPTED_VIDEO_TYPES.includes(file.type)) {
    return 'Formato no soportado. Usá MP4, MOV o WebM.';
  }

  if (file.size > MEDIA_LIMITS.maxVideoBytes) {
    return `El video supera ${formatBytes(MEDIA_LIMITS.maxVideoBytes)}. Grabá uno más corto o bajá la calidad.`;
  }

  const duration = await readVideoDuration(file);

  if (duration > MEDIA_LIMITS.maxVideoSeconds) {
    return `El video dura más de ${MEDIA_LIMITS.maxVideoSeconds} segundos.`;
  }

  return null;
}

/**
 * Comprueba el archivo antes de procesarlo.
 *
 * `file.type` lo informa el navegador a partir de la extensión y se puede
 * falsear, así que no alcanza como garantía: la validación de verdad es que
 * `processImage` logre decodificarlo como imagen. Esto filtra lo evidente y,
 * sobre todo, frena archivos enormes antes de intentar cargarlos en memoria.
 */
export function validateImageFile(file: File): string | null {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return 'Formato no soportado. Usá JPG, PNG o WebP.';
  }

  if (file.size > MEDIA_LIMITS.maxImageUploadBytes) {
    return `La imagen supera ${formatBytes(MEDIA_LIMITS.maxImageUploadBytes)}. Probá con una más liviana.`;
  }

  if (file.size === 0) {
    return 'El archivo está vacío.';
  }

  return null;
}
