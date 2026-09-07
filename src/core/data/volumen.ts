/**
 * Cuánto ocupa un pedido.
 *
 * Los mismos números que usa el servidor. Se repiten acá porque el carrito
 * tiene que poder decir "esto no entra en una moto" mientras el cliente
 * elige, sin ir y volver al servidor por cada cambio de cantidad.
 *
 * El que manda es el servidor: éste es un adelanto para la pantalla, y si
 * alguno de los dos tuviera que ceder, cede éste.
 */

import type { SaleUnitId } from '@shared/types/saleUnit.types';

export type Tamano = 'chico' | 'mediano' | 'grande' | 'voluminoso';

export type Vehiculo = 'moto' | 'auto' | 'camioneta' | 'camion';

/** Litros que ocupa cada tamaño. */
export const LITROS_POR_TAMANO: Record<Tamano, number> = {
  chico: 2,
  mediano: 6,
  grande: 15,
  voluminoso: 40,
};

/**
 * Capacidad de cada vehículo, en litros.
 *
 * La moto sale de la caja de reparto que se usa hoy: 62 a 65 litros, unos
 * 50 × 37 × 37 cm. Se toman 60 porque la capacidad nominal nunca entra
 * entera: las cosas no encajan perfecto.
 */
export const CAPACIDAD: Record<Vehiculo, number> = {
  moto: 60,
  auto: 400,
  camioneta: 2500,
  camion: 12000,
};

export const NOMBRE_VEHICULO: Record<Vehiculo, string> = {
  moto: 'Moto',
  auto: 'Auto',
  camioneta: 'Camioneta',
  camion: 'Camión',
};

/** Cuántas veces entra el producto en el pedido, según cómo se venda. */
function factorCantidad(unidad: SaleUnitId | string | undefined, escalon: number) {
  if (unidad === 'peso') {
    return (escalon + 1) * 0.25;
  }

  if (unidad === 'pesoMedio') {
    return (escalon + 1) * 0.5;
  }

  return escalon + 1;
}

/** Los litros que ocupa una lista de productos. */
export function litrosDeItems(
  items: Array<{ tamano?: string; saleUnit?: SaleUnitId | string; quantity: number }>,
) {
  const total = items.reduce((suma, item) => {
    const base =
      LITROS_POR_TAMANO[(item.tamano as Tamano) ?? 'mediano'] ?? LITROS_POR_TAMANO.mediano;

    return suma + base * factorCantidad(item.saleUnit, item.quantity);
  }, 0);

  return Math.round(total * 10) / 10;
}

/** En cuántos viajes entra, con ese vehículo. */
export function viajesNecesarios(litros: number, vehiculo: Vehiculo) {
  return Math.max(1, Math.ceil(litros / CAPACIDAD[vehiculo]));
}

/** Si entra de una sola vez. */
export function entraDeUnaVez(litros: number, vehiculo: Vehiculo) {
  return viajesNecesarios(litros, vehiculo) === 1;
}

/** Qué vehículos de reparto lo llevan de una sola vez. */
export function vehiculosQueEntran(litros: number): Vehiculo[] {
  return (['moto', 'auto'] as Vehiculo[]).filter((vehiculo) => entraDeUnaVez(litros, vehiculo));
}
