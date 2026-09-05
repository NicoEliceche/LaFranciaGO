import { type FormEvent, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_SALE_UNIT,
  SALE_UNITS,
  SALE_UNIT_OPTIONS,
  priceSuffix,
} from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';
import { Check, ImagePlus, Video, X } from 'lucide-react';

import { findBusinessType } from '@core/data/businessTypes';
import {
  IMAGE_ACCEPT,
  MEDIA_LIMITS,
  VIDEO_ACCEPT,
  formatBytes,
  processImage,
  validateImageFile,
  validateVideo,
} from '@core/data/services/mediaService';
import type { ProductPhoto } from '@shared/types/media.types';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { SectionHeading } from '../components/SectionHeading';
import { Section, SectionInner } from '../ui';
import { CompactSection } from './screenLayout';
import {
  FieldError,
  FieldHint,
  FieldLabel,
  FormCard,
  FormGrid,
  FormInput,
  FormRow,
  FormSelect,
  FormTextarea,
  MediaAddButton,
  MediaCounter,
  MediaGrid,
  MediaRemoveButton,
  MediaSlot,
  MediaSlotImage,
  MediaSlotVideo,
  MediaSectionHead,
  SubmitButton,
  SavedNotice,
} from './ProductFormScreenStyled';

/* En la demo el comercio es un almacén; con backend saldría del perfil. */
const CURRENT_BUSINESS_TYPE = 'almacen';

export function ProductFormScreen() {
  const businessType = useMemo(() => findBusinessType(CURRENT_BUSINESS_TYPE), []);
  const categories = businessType?.suggestedCategories ?? [];

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  /* Cómo se vende. Lo propone la categoría, pero el comercio puede cambiarlo:
     una panadería puede vender el pan por unidad si así lo maneja. */
  const [saleUnit, setSaleUnit] = useState<SaleUnitId>(DEFAULT_SALE_UNIT);
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<ProductPhoto[]>([]);
  const [video, setVideo] = useState<{ url: string; bytes: number; name: string } | null>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [processing, setProcessing] = useState(false);

  /* Las URLs de preview son objetos en memoria: hay que liberarlas. */
  useEffect(
    () => () => {
      photos.forEach((photo) => URL.revokeObjectURL(photo.previewUrl));

      if (video) {
        URL.revokeObjectURL(video.url);
      }
    },
    [photos, video],
  );

  const handlePhotos = async (files: FileList | null) => {
    if (!files?.length) {
      return;
    }

    setMediaError(null);
    const room = MEDIA_LIMITS.maxImages - photos.length;

    if (room <= 0) {
      setMediaError(`Podés subir hasta ${MEDIA_LIMITS.maxImages} fotos.`);
      return;
    }

    setProcessing(true);

    const incoming = Array.from(files).slice(0, room);
    const processed: ProductPhoto[] = [];

    for (const file of incoming) {
      const invalid = validateImageFile(file);

      if (invalid) {
        setMediaError(invalid);
        continue;
      }

      try {
        const image = await processImage(file);
        processed.push({ ...image, id: `${file.name}-${Date.now()}-${processed.length}` });
      } catch {
        setMediaError('No pudimos procesar una de las fotos.');
      }
    }

    setPhotos((current) => [...current, ...processed]);
    setProcessing(false);
  };

  const handleVideo = async (files: FileList | null) => {
    const file = files?.[0];

    if (!file) {
      return;
    }

    setMediaError(null);
    const invalid = await validateVideo(file);

    if (invalid) {
      setMediaError(invalid);
      return;
    }

    setVideo({ url: URL.createObjectURL(file), bytes: file.size, name: file.name });
  };

  const removePhoto = (id: string) => {
    setPhotos((current) => {
      const target = current.find((photo) => photo.id === id);

      if (target) {
        URL.revokeObjectURL(target.previewUrl);
      }

      return current.filter((photo) => photo.id !== id);
    });
  };

  const removeVideo = () => {
    if (video) {
      URL.revokeObjectURL(video.url);
    }

    setVideo(null);
  };

  const errors = {
    name: name.trim().length < 2 ? 'Poné el nombre del producto.' : null,
    price: !price || Number(price) <= 0 ? 'Poné un precio válido.' : null,
    category: !categoryId ? 'Elegí una categoría.' : null,
  };

  const isValid = !errors.name && !errors.price && !errors.category;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      return;
    }

    /* Sin backend todavía: se confirma el alta y se limpia el formulario. */
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2600);

    photos.forEach((photo) => URL.revokeObjectURL(photo.previewUrl));

    if (video) {
      URL.revokeObjectURL(video.url);
    }

    setName('');
    setPrice('');
    setCategoryId('');
    setDescription('');
    setPhotos([]);
    setVideo(null);
    setSubmitted(false);
  };

  const totalBytes = photos.reduce((sum, photo) => sum + photo.bytes, 0) + (video?.bytes ?? 0);

  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <SectionHeading
            title="Nuevo producto"
            chip={businessType?.name}
            subtitle="Todo producto entra en una categoría de tu comercio."
          />

          <FormCard as="form" onSubmit={handleSubmit} noValidate>
            <FormGrid>
              <FormRow>
                <FieldLabel htmlFor="product-name">Nombre</FieldLabel>
                <FormInput
                  id="product-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ej: Coca Cola 2,25 L"
                  data-invalid={submitted && !!errors.name}
                />
                {submitted && errors.name ? <FieldError>{errors.name}</FieldError> : null}
              </FormRow>

              <FormRow>
                <FieldLabel htmlFor="product-price">
                  Precio ({priceSuffix(saleUnit)})
                </FieldLabel>
                <FormInput
                  id="product-price"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="0"
                  data-invalid={submitted && !!errors.price}
                />
                {submitted && errors.price ? <FieldError>{errors.price}</FieldError> : null}
              </FormRow>

              <FormRow>
                <FieldLabel htmlFor="product-category">Categoría</FieldLabel>
                <FormSelect
                  id="product-category"
                  value={categoryId}
                  onChange={(event) => {
                    const nextId = event.target.value;

                    setCategoryId(nextId);

                    const suggested = categories.find(
                      (category) => category.id === nextId,
                    )?.defaultSaleUnit;

                    if (suggested) {
                      setSaleUnit(suggested);
                    }
                  }}
                  data-invalid={submitted && !!errors.category}
                >
                  <option value="">Elegí una categoría</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </FormSelect>
                {submitted && errors.category ? (
                  <FieldError>{errors.category}</FieldError>
                ) : (
                  <FieldHint>Sugeridas para {businessType?.name}.</FieldHint>
                )}
              </FormRow>

              <FormRow>
                <FieldLabel htmlFor="product-sale-unit">Cómo se vende</FieldLabel>
                <FormSelect
                  id="product-sale-unit"
                  value={saleUnit}
                  onChange={(event) => setSaleUnit(event.target.value as SaleUnitId)}
                >
                  {SALE_UNIT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </FormSelect>
                <FieldHint>{SALE_UNITS[saleUnit].help}</FieldHint>
              </FormRow>

              <FormRow>
                <FieldLabel htmlFor="product-description">Descripción</FieldLabel>
                <FormTextarea
                  id="product-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Opcional: detalle breve del producto."
                  rows={3}
                />
              </FormRow>
            </FormGrid>

            <MediaSectionHead>
              <FieldLabel as="span">Fotos</FieldLabel>
              <MediaCounter>
                {photos.length}/{MEDIA_LIMITS.maxImages}
              </MediaCounter>
            </MediaSectionHead>

            <MediaGrid>
              {photos.map((photo) => (
                <MediaSlot key={photo.id}>
                  <MediaSlotImage src={photo.previewUrl} alt="" />
                  <MediaRemoveButton
                    type="button"
                    onClick={() => removePhoto(photo.id)}
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
                    onChange={(event) => {
                      void handlePhotos(event.target.files);
                      event.target.value = '';
                    }}
                  />
                </MediaAddButton>
              ) : null}
            </MediaGrid>

            <FieldHint>
              Se redimensionan a {MEDIA_LIMITS.maxImageDimension}px y se comprimen solas: cada
              foto queda en menos de {formatBytes(MEDIA_LIMITS.maxImageBytes)}.
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
                  onChange={(event) => {
                    void handleVideo(event.target.files);
                    event.target.value = '';
                  }}
                />
              </MediaAddButton>
            )}

            <FieldHint>
              Hasta {MEDIA_LIMITS.maxVideoSeconds} segundos y{' '}
              {formatBytes(MEDIA_LIMITS.maxVideoBytes)}.
            </FieldHint>

            {mediaError ? <FieldError>{mediaError}</FieldError> : null}

            {totalBytes > 0 ? (
              <FieldHint>Total a subir: {formatBytes(totalBytes)}.</FieldHint>
            ) : null}

            <SubmitButton type="submit">Guardar producto</SubmitButton>

            {saved ? (
              <SavedNotice role="status">
                <Check size={16} aria-hidden="true" />
                Producto guardado en tu catálogo.
              </SavedNotice>
            ) : null}
          </FormCard>
        </SectionInner>
      </Section>

      <CompactSection aria-hidden="true" />
    </MarketplaceFrame>
  );
}
