/**
 * Plata: leerla, mostrarla y escribirla.
 *
 * Estos casos no son hipotéticos. Cada bloque de abajo cubre algo que ya se
 * rompió una vez en la aplicación, y el comentario dice cuál fue el
 * síntoma: así, si alguien cambia la función y un test se pone en rojo, sabe
 * qué estaba protegiendo en lugar de borrar el caso por molesto.
 */
import { describe, expect, it } from 'vitest';

import { formatearMientrasEscribe, leerCentavos, mostrarCentavos } from '@features/gestion/dinero';

describe('leerCentavos', () => {
  it('lee el formato de acá, con punto de miles y coma decimal', () => {
    expect(leerCentavos('15.500,50')).toBe(1550050);
    expect(leerCentavos('15.500')).toBe(1550000);
    expect(leerCentavos('0,01')).toBe(1);
  });

  it('también lee el formato con punto decimal', () => {
    /* Quien viene de usar una calculadora escribe así. */
    expect(leerCentavos('15500.50')).toBe(1550050);
    expect(leerCentavos('1234.5')).toBe(123450);
  });

  it('acepta el signo peso y los espacios', () => {
    /* El campo muestra "$ 15.500" mientras se escribe. Sin esto, el monto
       llegaba como inválido y la caja del mostrador no abría. */
    expect(leerCentavos('$ 15.500')).toBe(1550000);
    expect(leerCentavos('$15500')).toBe(1550000);
    expect(leerCentavos('  $ 1.000,25  ')).toBe(100025);
  });

  it('devuelve null cuando no se entiende, en vez de inventar un número', () => {
    expect(leerCentavos('')).toBeNull();
    expect(leerCentavos('abc')).toBeNull();
    expect(leerCentavos('-500')).toBeNull();
  });
});

describe('mostrarCentavos', () => {
  it('muestra siempre los dos decimales', () => {
    /* Con $6.749,50 en el cajón y "$6.750" en pantalla, la caja no cierra y
       nadie sabe por qué. */
    expect(mostrarCentavos(674950)).toContain('6.749,50');
    expect(mostrarCentavos(100000)).toContain('1.000,00');
    expect(mostrarCentavos(0)).toContain('0,00');
  });

  it('ida y vuelta: lo que se muestra se vuelve a leer igual', () => {
    for (const centavos of [1, 99, 100, 123456, 1550050, 99999999]) {
      expect(leerCentavos(mostrarCentavos(centavos))).toBe(centavos);
    }
  });
});

describe('formatearMientrasEscribe', () => {
  it('pone los separadores solo', () => {
    expect(formatearMientrasEscribe('15500')).toContain('15.500');
  });

  it('deja escribir los decimales a medias', () => {
    /* Formatear "15.500," de inmediato le borraría a la persona lo que está
       tecleando. */
    expect(formatearMientrasEscribe('15500,')).toContain(',');
    expect(formatearMientrasEscribe('15500,5')).toContain(',5');
  });

  it('ignora lo que no sea número o coma, sin rechazar la tecla', () => {
    expect(formatearMientrasEscribe('15a5b00')).toContain('15.500');
  });
});
