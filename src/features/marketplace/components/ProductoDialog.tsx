import { type FormEvent, useEffect, useState } from 'react';
import { ImagePlus, Video, X } from 'lucide-react';

import {
  IMAGE_ACCEPT,
  MEDIA_LIMITS,
  VIDEO_ACCEPT,
  formatBytes,
} from '@core/data/services/mediaService';
import { SALE_UNITS, SALE_UNIT_OPTIONS, priceSuffix } from '@core/data/saleUnits';
import { type ProductoApi, mediaApi } from '@core/data/services/apiClient';
import { useMediaUpload } from '@shared/hooks/useMediaUpload';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

import { CardText, CardTitle } from '../ui';
import {
  FieldGroup,
  FieldHint,
  FieldInput,
  FieldLabel,
  FieldSelect,
  FieldStack,
  FieldTextarea,
} from '../screens/formStyles';
import { AuthAviso, AuthEnviar } from '../screens/AuthScreenStyled';
import {
  FieldError,
  MediaAddButton,
  MediaCounter,
  MediaGrid,
  MediaRemoveButton,
  MediaSectionHead,
  MediaSlot,
  MediaSlotImage,
  MediaSlotVideo,
} from '../screens/ProductFormScreenStyled';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';

/**
 * Alta y edición de producto.
 *
 * El mismo modal sirve para los dos casos: los campos son idénticos y separar
 * en dos pantallas obligaría a mantener el mismo formulario por duplicado.
 */

type Props = {
  open: boolean;
  /** Producto a editar; sin él, el modal da de alta uno nuevo. */
  producto?: ProductoApi | null;
  onClose: () => void;
  onGuardar: (datos: Record<string, unknown>) => Promise<void>;
};

export function ProductoDialog({ open, producto, onClose, onGuardar }: Props) {
  const [unidad, setUnidad] = useState<SaleUnitId>('unidad');
  const [error, setError] = useState<string | null>(null);
  const [guardando, setGuardando] = useState(false);

  const {
    photos,
    video,
    error: mediaError,
    processing,
    addPhotos,
    addVideo,
    removePhoto,
    removeVideo,
  } = useMediaUpload();

  /* Al abrir se toma la unidad del producto que se edita; al cerrar no se
     limpia nada, porque el modal se desmonta. */
  useEffect(() => {
    if (open) {
      setUnidad((producto?.unidad_venta as SaleUnitId) ?? 'unidad');
      setError(null);
    }
  }, [open, producto]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (guardando) {
      return;
    }

    const datos = new FormData(evento.currentTarget);
    const precio = Number(datos.get('precio') ?? 0);

    if (precio <= 0) {
      setError('Poné un precio válido.');
      return;
    }

    setError(null);
    setGuardando(true);

    try {
      /* Se suben las fotos nuevas y se conservan las que ya tenía: editar
         sólo el precio no debe borrarle las imágenes. */
      const nuevas = await Promise.all(
        photos.map(async (foto, indice) => {
          const { url } = await mediaApi.subir(foto.blob, `producto-${indice}.webp`);

          return url;
        }),
      );

      let videoUrl = producto?.video_url ?? null;

      if (video?.blob) {
        const subido = await mediaApi.subir(video.blob, 'producto.mp4');

        videoUrl = subido.url;
      }

      await onGuardar({
        nombre: String(datos.get('nombre') ?? '').trim(),
        descripcion: String(datos.get('descripcion') ?? '').trim(),
        precio,
        unidadVenta: unidad,
        stock: datos.get('stock') ? Number(datos.get('stock')) : null,
        fotos: [...(producto?.fotos ?? []), ...nuevas],
        videoUrl,
      });

      onClose();
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos guardar el producto.');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <PanelDialogOverlay onClick={onClose} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label={producto ? 'Editar producto' : 'Nuevo producto'}
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>{producto ? 'Editar producto' : 'Nuevo producto'}</CardTitle>
            <CardText>Lo que carguen acá es lo que ve el cliente.</CardText>
          </div>
          <PanelDialogCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        <form onSubmit={handleSubmit}>
          <FieldStack>
            <FieldGroup htmlFor="prod-nombre">
              <FieldLabel>Nombre</FieldLabel>
              <FieldInput
                id="prod-nombre"
                name="nombre"
                type="text"
                defaultValue={producto?.nombre ?? ''}
                placeholder="Pan flauta"
                required
              />
            </FieldGroup>

            <FieldGroup htmlFor="prod-unidad">
              <FieldLabel>Cómo se vende</FieldLabel>
              <FieldSelect
                id="prod-unidad"
                value={unidad}
                onChange={(evento) => setUnidad(evento.target.value as SaleUnitId)}
              >
                {SALE_UNIT_OPTIONS.map((opcion) => (
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.label}
                  </option>
                ))}
              </FieldSelect>
              <FieldHint>{SALE_UNITS[unidad].help}</FieldHint>
            </FieldGroup>

            <FieldGroup htmlFor="prod-precio">
              <FieldLabel>Precio ({priceSuffix(unidad)})</FieldLabel>
              <FieldInput
                id="prod-precio"
                name="precio"
                type="number"
                inputMode="decimal"
                min="0"
                step="1"
                defaultValue={producto?.precio ?? ''}
                placeholder="0"
                required
              />
            </FieldGroup>

            <FieldGroup htmlFor="prod-stock">
              <FieldLabel>Stock</FieldLabel>
              <FieldInput
                id="prod-stock"
                name="stock"
                type="number"
                min="0"
                defaultValue={producto?.stock ?? ''}
                placeholder="Dejalo vacío si no llevás control"
              />
            </FieldGroup>

            <FieldGroup htmlFor="prod-descripcion">
              <FieldLabel>Descripción</FieldLabel>
              <FieldTextarea
                id="prod-descripcion"
                name="descripcion"
                rows={2}
                defaultValue={producto?.descripcion ?? ''}
                placeholder="Qué tiene de especial"
              />
            </FieldGroup>

            <MediaSectionHead>
              <FieldLabel as="span">Fotos</FieldLabel>
              <MediaCounter>
                {photos.length}/{MEDIA_LIMITS.maxImages}
              </MediaCounter>
            </MediaSectionHead>

            <MediaGrid>
              {photos.map((foto) => (
                <MediaSlot key={foto.id}>
                  <MediaSlotImage src={foto.previewUrl} alt="" />
                  <MediaRemoveButton
                    type="button"
                    onClick={() => removePhoto(foto.id)}
                    aria-label="Quitar foto"
                  >
                    <X size={14} aria-hidden="true" />
                  </MediaRemoveButton>
                </MediaSlot>
              ))}

              {photos.length < MEDIA_LIMITS.maxImages ? (
                <MediaAddButton as="label" data-busy={processing}>
                  <ImagePlus size={20} aria-hidden="true" />
                  <span>{processing ? 'Optimizando…' : 'Agregar'}</span>
                  <input
                    type="file"
                    accept={IMAGE_ACCEPT}
                    multiple
                    hidden
                    onChange={(evento) => {
                      void addPhotos(evento.target.files);
                      evento.target.value = '';
                    }}
                  />
                </MediaAddButton>
              ) : null}
            </MediaGrid>

            <FieldHint>
              Se achican a {MEDIA_LIMITS.maxImageDimension}px y se comprimen solas: cada una
              queda en menos de {formatBytes(MEDIA_LIMITS.maxImageBytes)}.
            </FieldHint>

            <MediaSectionHead>
              <FieldLabel as="span">Video</FieldLabel>
              <MediaCounter>
                {video ? 1 : 0}/{MEDIA_LIMITS.maxVideos}
              </MediaCounter>
            </MediaSectionHead>

            {video ? (
              <MediaSlot data-video="true">
                <MediaSlotVideo src={video.url} controls preload="metadata" />
                <MediaRemoveButton type="button" onClick={removeVideo} aria-label="Quitar video">
                  <X size={14} aria-hidden="true" />
                </MediaRemoveButton>
              </MediaSlot>
            ) : (
              <MediaAddButton as="label" data-wide="true">
                <Video size={20} aria-hidden="true" />
                <span>Agregar video</span>
                <input
                  type="file"
                  accept={VIDEO_ACCEPT}
                  hidden
                  onChange={(evento) => {
                    void addVideo(evento.target.files);
                    evento.target.value = '';
                  }}
                />
              </MediaAddButton>
            )}

            <FieldHint>
              Hasta {MEDIA_LIMITS.maxVideoSeconds} segundos y{' '}
              {formatBytes(MEDIA_LIMITS.maxVideoBytes)}.
            </FieldHint>

            {mediaError ? <FieldError>{mediaError}</FieldError> : null}

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            <AuthEnviar type="submit" disabled={guardando}>
              {guardando ? 'Guardando…' : producto ? 'Guardar cambios' : 'Crear producto'}
            </AuthEnviar>
          </FieldStack>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
