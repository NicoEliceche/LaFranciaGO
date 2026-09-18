/**
 * Plata, en centavos.
 *
 * El sistema de gestión guarda todo en centavos enteros: sumar precios en
 * decimales arrastra errores que al cerrar la caja aparecen como una
 * diferencia de un centavo que nadie sabe de dónde salió.
 *
 * El resto de la aplicación trabaja en pesos, así que estas funciones dicen
 * "centavos" en el nombre para que no se mezclen sin querer.
 */
/**
 * 674950 → "$ 6.749,50"
 *
 * Con los dos decimales siempre, como cualquier sistema de gestión de acá.
 * El formateador del marketplace redondea a pesos enteros, que está bien
 * para una góndola y mal para un arqueo: si el cajón tiene $6.749,50 y la
 * pantalla dice $6.750, la caja nunca cierra y nadie sabe por qué.
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
