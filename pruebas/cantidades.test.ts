/**
 * Las cantidades del mostrador.
 *
 * El caso que abre este archivo es textual: dos quesos, flecha para abajo,
 * y el campo mostraba 1,999. Las flechas subían de a 0,001 para todo, sin
 * mirar cómo se vende el producto.
 */
import { describe, expect, it } from 'vitest';

import { acomodarCantidad, etiquetaUnidad, pasoDe, unidadDe } from '@features/gestion/cantidades';

describe('pasoDe', () => {
  it('cada producto se mueve como se vende', () => {
    expect(pasoDe('unidad')).toBe(1000);
    expect(pasoDe('peso')).toBe(250);
    expect(pasoDe('pesoMedio')).toBe(500);
    expect(pasoDe('docena')).toBe(500);
  });

  it('nunca devuelve cero', () => {
    /* Un paso de cero congela las flechas: se puede tocar y no pasa nada. */
    for (const unidad of ['unidad', 'peso', 'pesoMedio', 'docena'] as const) {
      expect(pasoDe(unidad)).toBeGreaterThan(0);
    }
  });
});

describe('acomodarCantidad', () => {
  it('el bug del queso: dos, flecha abajo, da uno', () => {
    /* Antes daba 1,999. */
    const dosQuesos = 2;
    const unoMenos = dosQuesos - pasoDe('unidad') / 1000;

    expect(acomodarCantidad(unoMenos, 'unidad')).toBe(1000);
  });

  it('el pan sube de a cuartos', () => {
    expect(acomodarCantidad(0.25, 'peso')).toBe(250);
    expect(acomodarCantidad(0.5, 'peso')).toBe(500);
    expect(acomodarCantidad(0.75, 'peso')).toBe(750);
    expect(acomodarCantidad(1, 'peso')).toBe(1000);
  });

  it('la carne sube de a medios kilos', () => {
    expect(acomodarCantidad(0.5, 'pesoMedio')).toBe(500);
    expect(acomodarCantidad(1, 'pesoMedio')).toBe(1000);
    expect(acomodarCantidad(1.5, 'pesoMedio')).toBe(1500);
  });

  it('acomoda lo que se escribe a mano al escalón más cercano', () => {
    /* La balanza del mostrador no va a pesar 1,3 kg de carne. */
    expect(acomodarCantidad(1.3, 'pesoMedio')).toBe(1500);
    expect(acomodarCantidad(1.2, 'pesoMedio')).toBe(1000);
    expect(acomodarCantidad(0.3, 'peso')).toBe(250);
    expect(acomodarCantidad(0.4, 'peso')).toBe(500);
  });

  it('nunca deja una cantidad con decimales imposibles', () => {
    /* Cualquier cosa que se escriba tiene que caer en un múltiplo del paso:
       si no, vuelve el 1,999. */
    for (const unidad of ['unidad', 'peso', 'pesoMedio', 'docena'] as const) {
      const paso = pasoDe(unidad);

      for (const escrito of [0.001, 0.37, 1.111, 2.999, 7.5]) {
        const dio = acomodarCantidad(escrito, unidad);

        expect(dio % paso).toBe(0);
      }
    }
  });

  it('bajar del mínimo da cero, que es sacar la línea', () => {
    expect(acomodarCantidad(0, 'unidad')).toBe(0);
    expect(acomodarCantidad(-1, 'peso')).toBe(0);
    /* Medio producto por unidad se redondea a uno, no a cero: tocar la
       flecha y que desaparezca el renglón sorprende. */
    expect(acomodarCantidad(0.5, 'unidad')).toBe(1000);
  });
});

describe('unidadDe', () => {
  it('reconoce las unidades que existen', () => {
    expect(unidadDe('peso')).toBe('peso');
    expect(unidadDe('pesoMedio')).toBe('pesoMedio');
  });

  it('un valor viejo o vacío se vende de a uno', () => {
    /* La columna de la base es texto libre. */
    expect(unidadDe('kilos')).toBe('unidad');
    expect(unidadDe(null)).toBe('unidad');
    expect(unidadDe(undefined)).toBe('unidad');
    expect(unidadDe('')).toBe('unidad');
  });
});

describe('etiquetaUnidad', () => {
  it('dice de qué es el precio', () => {
    expect(etiquetaUnidad('peso')).toBe('el kg');
    expect(etiquetaUnidad('unidad')).toBe('c/u');
  });
});
