/**
 * Plata, en centavos.
 *
 * El sistema de gestión guarda todo en centavos enteros: sumar precios en
 * decimales arrastra errores que al cerrar la caja aparecen como una
 * diferencia de un centavo que nadie sabe de dónde salió.
 *
 * Vive acá y no en cada aplicación porque una cuenta de plata que da
 * distinto en el teléfono que en la computadora es un problema serio, y la
 * única forma de que no pase es que sea el mismo código.
 */

/**
 * 674950 → "$ 6.749,50"
 *
 * Con los dos decimales siempre, como cualquier sistema de gestión de acá.
 * Redondear a pesos enteros está bien para una góndola y mal para un arqueo:
 * si el cajón tiene $6.749,50 y la pantalla dice $6.750, la caja nunca
 * cierra y nadie sabe por qué.
 */
const FORMATO = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const mostrarCentavos = (centavos: number) => FORMATO.format(centavos / 100);

/**
 * Lo que escribió una persona → centavos.
 *
 * Acepta las dos formas en que se escribe plata acá: "15.500,50" y
 * "15500.50". Devuelve null cuando no se entiende, para poder avisar en vez
 * de guardar un número inventado.
 */
export function leerCentavos(texto: string): number | null {
  const limpio = texto.trim();

  if (limpio === '') return null;

  /* Si tiene coma, es el separador decimal y los puntos son de miles. Si no
     tiene coma, el punto puede ser decimal ("15500.50") o de miles
     ("15.500"): se decide por cuántos dígitos quedan después. */
  const normalizado = limpio.includes(',')
    ? limpio.replace(/\./g, '').replace(',', '.')
    : /\.\d{1,2}$/.test(limpio)
      ? limpio
      : limpio.replace(/\./g, '');

  const numero = Number(normalizado);

  if (!Number.isFinite(numero) || numero < 0) return null;

  return Math.round(numero * 100);
}

/**
 * Cantidades en milésimos.
 *
 * Permite vender un cuarto de kilo sin decimales flotantes: 250 es 0,250.
 */
export const aMilesimos = (unidades: number) => Math.round(unidades * 1000);

export const aUnidades = (milesimos: number) => milesimos / 1000;

/** "2" para dos unidades, "0,250" para un cuarto de kilo. */
export function mostrarCantidad(milesimos: number): string {
  const unidades = milesimos / 1000;

  return Number.isInteger(unidades)
    ? String(unidades)
    : unidades.toLocaleString('es-AR', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}
