import type { SaleUnit, SaleUnitId } from '@shared/types/saleUnit.types';

/**
 * Unidades de venta.
 *
 * No todo se pide de a uno. El pan se pide por peso ("medio kilo", "un cuarto")
 * y nadie dice "dos panes"; en cambio la leche sí va por unidad, pero la unidad
 * es el sachet, y eso se resuelve nombrando bien el producto.
 *
 * Cada unidad define los escalones que puede elegir el cliente. El precio se
 * calcula con `factor`, que es cuánto vale ese escalón respecto del precio
 * base cargado por el comercio.
 */

/**
 * Pan y fiambres se venden por peso, en escalones de un cuarto de kilo.
 * Es como se pide en el mostrador: "un cuarto", "medio", "un kilo y medio".
 */
const WEIGHT_STEPS = [
  { factor: 0.25, label: '1/4' },
  { factor: 0.5, label: '1/2' },
  { factor: 0.75, label: '3/4' },
  { factor: 1, label: '1 kg' },
  { factor: 1.25, label: '1 kg + 1/4' },
  { factor: 1.5, label: '1 kg + 1/2' },
  { factor: 1.75, label: '1 kg + 3/4' },
  { factor: 2, label: '2 kg' },
  { factor: 2.25, label: '2 kg + 1/4' },
  { factor: 2.5, label: '2 kg + 1/2' },
  { factor: 2.75, label: '2 kg + 3/4' },
  { factor: 3, label: '3 kg' },
  { factor: 3.25, label: '3 kg + 1/4' },
  { factor: 3.5, label: '3 kg + 1/2' },
  { factor: 3.75, label: '3 kg + 3/4' },
  { factor: 4, label: '4 kg' },
];

/** Unidades sueltas: el escalón es siempre uno más. */
const unitSteps = (max: number, singular: string, plural: string) =>
  Array.from({ length: max }, (_, index) => ({
    factor: index + 1,
    label: `${index + 1} ${index === 0 ? singular : plural}`,
  }));

export const SALE_UNITS: Record<SaleUnitId, SaleUnit> = {
  unidad: {
    id: 'unidad',
    label: 'Por unidad',
    help: 'El cliente elige de a una. El precio cargado es el de una unidad.',
    priceSuffix: 'c/u',
    steps: unitSteps(20, 'unid.', 'unid.'),
  },
  peso: {
    id: 'peso',
    label: 'Por peso (kg)',
    help: 'Escalones de un cuarto de kilo, hasta 4 kg. El precio cargado es el del kilo.',
    priceSuffix: 'el kg',
    steps: WEIGHT_STEPS,
  },
};

/** Unidad por defecto: la mayoría de los productos se venden así. */
export const DEFAULT_SALE_UNIT: SaleUnitId = 'unidad';

export const SALE_UNIT_OPTIONS = Object.values(SALE_UNITS);

const unitOf = (unitId: SaleUnitId | undefined) => SALE_UNITS[unitId ?? DEFAULT_SALE_UNIT];

/** Cuántos escalones tiene la unidad: es el tope del selector. */
export const maxStepIndex = (unitId?: SaleUnitId) => unitOf(unitId).steps.length - 1;

/** Texto del escalón elegido ("1/2", "3 unid."). */
export function stepLabel(unitId: SaleUnitId | undefined, stepIndex: number) {
  const { steps } = unitOf(unitId);
  const safeIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);

  return steps[safeIndex].label;
}

/** Cuánto multiplica al precio base el escalón elegido. */
export function stepFactor(unitId: SaleUnitId | undefined, stepIndex: number) {
  const { steps } = unitOf(unitId);
  const safeIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);

  return steps[safeIndex].factor;
}

/** Sufijo para mostrar junto al precio ("$2.400 el kg"). */
export const priceSuffix = (unitId?: SaleUnitId) => unitOf(unitId).priceSuffix;
