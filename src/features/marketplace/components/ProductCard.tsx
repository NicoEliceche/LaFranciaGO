import { Plus } from 'lucide-react';

import { MediaFrame, MediaImage, MediaOverlayTop } from '@shared/components/Media';
import { categoryImage } from '@shared/utils/media';
import { formatMoney } from '@shared/utils/format';

import {
  ProductAddButton,
  ProductCardShell,
  ProductBody,
  ProductName,
  ProductOldPrice,
  ProductPrice,
  ProductPriceRow,
  ProductStore,
  ProductTag,
} from './ProductCardStyled';

type ProductCardProps = {
  name: string;
  store?: string;
  price: number;
  oldPrice?: number;
  categoryId?: string;
  imageLabel?: string;
  tag?: string;
  to?: string;
  onAdd?: () => void;
  /** Carga inmediata para las tarjetas visibles al abrir la pantalla. */
  priority?: boolean;
};

/**
 * Tarjeta de producto image-first: foto, nombre, precio y acción de sumar.
 * Sin descripciones — el detalle vive en la pantalla del producto.
 */
export function ProductCard({
  name,
  store,
  price,
  oldPrice,
  categoryId,
  imageLabel,
  tag,
  to,
  onAdd,
  priority,
}: ProductCardProps) {
  return (
    <ProductCardShell to={to ?? '#'} $static={!to}>
      <MediaFrame $ratio="1 / 1">
        <MediaImage src={categoryImage(categoryId)} alt={imageLabel ?? name} loading={priority ? 'eager' : 'lazy'} />
        {tag ? (
          <MediaOverlayTop>
            <ProductTag>{tag}</ProductTag>
          </MediaOverlayTop>
        ) : null}
      </MediaFrame>

      <ProductBody>
        {store ? <ProductStore>{store}</ProductStore> : null}
        <ProductName>{name}</ProductName>

        <ProductPriceRow>
          <div>
            <ProductPrice>{formatMoney(price)}</ProductPrice>
            {oldPrice ? <ProductOldPrice>{formatMoney(oldPrice)}</ProductOldPrice> : null}
          </div>

          {onAdd ? (
            <ProductAddButton
              type="button"
              aria-label={`Agregar ${name} al carrito`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onAdd();
              }}
            >
              <Plus size={18} aria-hidden="true" />
            </ProductAddButton>
          ) : null}
        </ProductPriceRow>
      </ProductBody>
    </ProductCardShell>
  );
}
