export type MediaTone = 'blue' | 'green' | 'violet' | 'orange' | 'red' | 'gold' | 'slate';

export interface MediaSource {
  /** Ruta a la imagen. Si falta, se usa el fallback tonal. */
  src?: string;
  /** Texto del fallback y alt de la imagen. */
  label: string;
  tone?: MediaTone;
}

/** Topes de subida de fotos y video por producto. */
export interface MediaLimits {
  maxImages: number;
  maxVideos: number;
  maxImageDimension: number;
  maxImageBytes: number;
  /** Tope del archivo original, antes de comprimir. */
  maxImageUploadBytes: number;
  maxVideoBytes: number;
  maxVideoSeconds: number;
}

/** Imagen ya redimensionada y comprimida, lista para subir. */
export interface ProcessedImage {
  blob: Blob;
  previewUrl: string;
  width: number;
  height: number;
  bytes: number;
  originalBytes: number;
  type: string;
}

/** Foto de producto dentro del formulario de alta. */
export interface ProductPhoto extends ProcessedImage {
  id: string;
}
