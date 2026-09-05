import { useState } from 'react';
import { maxStepIndex, priceSuffix, stepLabel } from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';
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
  CatalogCardPriceUnit,
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
  /** Cómo se vende: define los escalones del selector. */
  saleUnit?: SaleUnitId;
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
  saleUnit,
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
          <CatalogCardPrice>
            {formatMoney(price)}
            {saleUnit && saleUnit !== 'unidad' ? (
              <CatalogCardPriceUnit> {priceSuffix(saleUnit)}</CatalogCardPriceUnit>
            ) : null}
          </CatalogCardPrice>

          <CatalogStepper>
            <CatalogStepperButton
              type="button"
              onClick={() => setUnits((current) => Math.max(MIN_UNITS, current - 1))}
              disabled={units <= MIN_UNITS}
              aria-label={`Quitar cantidad de ${name}`}
            >
              <Minus size={16} aria-hidden="true" />
            </CatalogStepperButton>

            <CatalogStepperValue aria-live="polite">
              {stepLabel(saleUnit, units - MIN_UNITS)}
            </CatalogStepperValue>

            <CatalogStepperButton
              type="button"
              onClick={() =>
                setUnits((current) =>
                  Math.min(current + 1, maxStepIndex(saleUnit) + MIN_UNITS),
                )
              }
              disabled={units - MIN_UNITS >= maxStepIndex(saleUnit)}
              aria-label={`Agregar cantidad de ${name}`}
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
            {stepLabel(saleUnit, quantity - MIN_UNITS)} en el pedido
          </CatalogInCartHint>
        ) : null}
      </CatalogCardBody>
    </CatalogCardShell>
  );
}
