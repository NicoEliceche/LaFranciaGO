import { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';

import { MediaFrame, MediaImage, MediaOverlayTop } from '@shared/components/Media';
import { categoryImage } from '@shared/utils/media';
import { formatMoney } from '@shared/utils/format';

import {
  CatalogAddToCartButton,
  CatalogCardBody,
  CatalogCardShell,
  CatalogCardName,
  CatalogCardPrice,
  CatalogCardPriceRow,
  CatalogCardTag,
  CatalogInCartHint,
  CatalogStepper,
  CatalogStepperButton,
  CatalogStepperValue,
} from './CatalogProductCardStyled';

type CatalogProductCardProps = {
  name: string;
  price: number;
  categoryId?: string;
  badge?: string;
  /** Unidades que ya tiene el pedido, para mostrarlas como referencia. */
  quantity: number;
  /** Suma al pedido la cantidad elegida en la tarjeta. */
  onAdd: (units: number) => void;
  priority?: boolean;
};

const MIN_UNITS = 1;

/**
 * Producto del catálogo.
 *
 * El selector de cantidad arranca en 1 y nunca baja de ahí: elegir 0 no es
 * una acción válida, para eso está quitar el producto desde el carrito.
 */
export function CatalogProductCard({
  name,
  price,
  categoryId,
  badge,
  quantity,
  onAdd,
  priority,
}: CatalogProductCardProps) {
  const [units, setUnits] = useState(MIN_UNITS);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd(units);
    setUnits(MIN_UNITS);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <CatalogCardShell data-active={quantity > 0}>
      <MediaFrame $ratio="1 / 1">
        <MediaImage
          src={categoryImage(categoryId)}
          alt={name}
          loading={priority ? 'eager' : 'lazy'}
        />
        {badge ? (
          <MediaOverlayTop>
            <CatalogCardTag>{badge}</CatalogCardTag>
          </MediaOverlayTop>
        ) : null}
      </MediaFrame>

      <CatalogCardBody>
        <CatalogCardName>{name}</CatalogCardName>

        <CatalogCardPriceRow>
          <CatalogCardPrice>{formatMoney(price)}</CatalogCardPrice>

          <CatalogStepper>
            <CatalogStepperButton
              type="button"
              onClick={() => setUnits((current) => Math.max(MIN_UNITS, current - 1))}
              disabled={units <= MIN_UNITS}
              aria-label={`Quitar una unidad de ${name}`}
            >
              <Minus size={16} aria-hidden="true" />
            </CatalogStepperButton>

            <CatalogStepperValue aria-live="polite">{units}</CatalogStepperValue>

            <CatalogStepperButton
              type="button"
              onClick={() => setUnits((current) => current + 1)}
              aria-label={`Agregar una unidad de ${name}`}
            >
              <Plus size={16} aria-hidden="true" />
            </CatalogStepperButton>
          </CatalogStepper>
        </CatalogCardPriceRow>

        <CatalogAddToCartButton type="button" onClick={handleAdd} data-added={justAdded}>
          {justAdded ? (
            <>
              <Check size={15} aria-hidden="true" />
              Agregado
            </>
          ) : (
            'Agregar al carrito'
          )}
        </CatalogAddToCartButton>

        {quantity > 0 ? (
          <CatalogInCartHint>
            {quantity} {quantity === 1 ? 'unidad' : 'unidades'} en el pedido
          </CatalogInCartHint>
        ) : null}
      </CatalogCardBody>
    </CatalogCardShell>
  );
}
