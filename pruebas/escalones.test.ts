/**
 * Los escalones de venta.
 *
 * Esta es la parte de la aplicación que más veces se rompió, y siempre por
 * lo mismo: un escalón es un **índice**, no una cantidad. El escalón 0 de la
 * carne es medio kilo, no cero kilos; el 1 es un kilo, no un kilo más.
 * Confundir las dos cosas fue el bug de "medio kilo de carne a $23.000" y
 * también el de las flechas que subían de a 0,001.
 *
 * Por eso los casos de abajo son casi todos sobre los bordes: el primer
 * escalón, el último, y lo que pasa cuando piden uno que no existe.
 */
import { describe, expect, it } from 'vitest';

import {
  DEFAULT_SALE_UNIT,
  SALE_UNITS,
  maxStepIndex,
  priceSuffix,
  stepFactor,
  stepLabel,
} from '@core/data/saleUnits';

describe('stepFactor', () => {
  it('el primer escalón es lo mínimo que se puede comprar, no cero', () => {
    /* Acá nació el precio x2: el escalón 0 se tomaba como "uno" y medio kilo
       de carne se cobraba como un kilo. */
    expect(stepFactor('unidad', 0)).toBe(1);
    expect(stepFactor('peso', 0)).toBe(0.25);
    expect(stepFactor('pesoMedio', 0)).toBe(0.5);
    expect(stepFactor('docena', 0)).toBe(0.5);
  });

  it('avanza como se pide en el mostrador', () => {
    /* Pan: de a cuartos. */
    expect(stepFactor('peso', 1)).toBe(0.5);
    expect(stepFactor('peso', 2)).toBe(0.75);
    expect(stepFactor('peso', 3)).toBe(1);

    /* Carne: de a medios. Nadie pide un cuarto de asado. */
    expect(stepFactor('pesoMedio', 1)).toBe(1);
    expect(stepFactor('pesoMedio', 2)).toBe(1.5);
  });

  it('un escalón fuera de rango se acomoda en vez de romper', () => {
    /* Un índice guardado de cuando la unidad tenía más escalones no puede
       dejar un precio en NaN: eso termina en un total vacío en el carrito. */
    const ultimo = stepFactor('peso', maxStepIndex('peso'));

    expect(stepFactor('peso', 999)).toBe(ultimo);
    expect(stepFactor('peso', -5)).toBe(0.25);
    expect(Number.isFinite(stepFactor('peso', 999))).toBe(true);
  });

  it('una unidad desconocida se trata como unidad suelta', () => {
    /* La columna de la base es texto libre: un producto viejo puede traer
       algo que ya no existe, y se vende de a uno como antes. */
    expect(stepFactor(undefined, 0)).toBe(stepFactor(DEFAULT_SALE_UNIT, 0));
  });
});

describe('el precio que sale de un escalón', () => {
  /* Así lo calcula la aplicación: precio base por el factor del escalón. */
  const precioDe = (base: number, unidad: Parameters<typeof stepFactor>[0], escalon: number) =>
    Math.round(base * stepFactor(unidad, escalon));

  it('medio kilo de carne sale la mitad del kilo', () => {
    /* El bug tal cual apareció: la barra mostraba $23.000 y el carrito
       $5.750 para lo mismo. */
    expect(precioDe(11500, 'pesoMedio', 0)).toBe(5750);
    expect(precioDe(11500, 'pesoMedio', 1)).toBe(11500);
  });

  it('un cuarto de pan sale un cuarto del kilo', () => {
    expect(precioDe(4000, 'peso', 0)).toBe(1000);
    expect(precioDe(4000, 'peso', 3)).toBe(4000);
  });

  it('lo que va por unidad se multiplica, no se divide', () => {
    expect(precioDe(850, 'unidad', 0)).toBe(850);
    expect(precioDe(850, 'unidad', 2)).toBe(2550);
  });
});

describe('stepLabel', () => {
  it('nombra el escalón como lo diría una persona', () => {
    expect(stepLabel('peso', 0)).toBe('1/4');
    expect(stepLabel('pesoMedio', 0)).toBe('1/2 kg');
    expect(stepLabel('docena', 1)).toBe('1 docena');
  });

  it('aguanta un escalón que no es un número', () => {
    /* Este caso faltaba, y por eso se escapó un bug: una línea sin escalón
       —un flete, que no tiene unidad de venta— llegaba como undefined.
       `Math.max(undefined, 0)` da NaN, `steps[NaN]` es undefined, y leerle
       `.label` dejaba la pantalla del detalle entera en blanco. */
    const sinEscalon = undefined as unknown as number;

    expect(stepLabel('peso', sinEscalon)).toBe('1/4');
    expect(stepFactor('peso', sinEscalon)).toBe(0.25);
    expect(stepLabel('unidad', Number.NaN)).toBe('1 unid.');
    expect(stepFactor('pesoMedio', Number.NaN)).toBe(0.5);
  });

  it('un escalón con decimales se trata como el entero de abajo', () => {
    expect(stepFactor('peso', 1.9)).toBe(stepFactor('peso', 1));
  });

  it('nunca devuelve vacío, ni con un índice imposible', () => {
    /* Una etiqueta vacía deja el selector sin texto y la pantalla parece
       rota. */
    for (const unidad of Object.keys(SALE_UNITS) as Array<keyof typeof SALE_UNITS>) {
      expect(stepLabel(unidad, 999).length).toBeGreaterThan(0);
      expect(stepLabel(unidad, -1).length).toBeGreaterThan(0);
    }
  });
});

describe('priceSuffix', () => {
  it('dice de qué es el precio', () => {
    /* "$2.400 cada uno" en un producto por peso es engañoso: son $2.400 el
       kilo. */
    expect(priceSuffix('peso')).toBe('el kg');
    expect(priceSuffix('pesoMedio')).toBe('el kg');
    expect(priceSuffix('unidad')).toBe('c/u');
    expect(priceSuffix('docena')).toBe('la docena');
  });
});

describe('todas las unidades, en conjunto', () => {
  it('tienen al menos un escalón y todos suben', () => {
    /* Una unidad con escalones desordenados haría que el selector muestre
       "1 kg" antes que "1/2 kg". */
    for (const unidad of Object.values(SALE_UNITS)) {
      expect(unidad.steps.length).toBeGreaterThan(0);

      const factores = unidad.steps.map((paso) => paso.factor);

      expect(factores).toEqual([...factores].sort((a, b) => a - b));
      expect(factores.every((f) => f > 0)).toBe(true);
    }
  });

  it('maxStepIndex apunta al último que existe', () => {
    for (const unidad of Object.values(SALE_UNITS)) {
      const ultimo = maxStepIndex(unidad.id);

      expect(unidad.steps[ultimo]).toBeDefined();
      expect(unidad.steps[ultimo + 1]).toBeUndefined();
    }
  });
});
