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
import { formatMoney } from '@shared/utils/format';

/** 1550000 → "$ 15.500" */
export const mostrarCentavos = (centavos: number) => formatMoney(centavos / 100);

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
