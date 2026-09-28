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
  /* Se saca el símbolo y los espacios: los campos muestran "$ 15.500"
     mientras se escribe, y sin esto el monto llegaba como inválido y la caja
     no abría. */
  const limpio = texto.replace(/[$\s]/g, '').trim();

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
 * Lo que se va escribiendo, con los separadores puestos.
 *
 * Escribiendo "15500" se ve "$ 15.500" sin tocar nada más. Poner los puntos
 * a mano en un campo de plata es donde más se equivoca quien está atendiendo
 * apurado: un cero de más en el monto inicial hace que la caja cierre con
 * una diferencia enorme y nadie sepa de dónde salió.
 *
 * Deja escribir la coma y los decimales a medias —"15.500," mientras piensa
 * el resto— porque formatear eso de inmediato le borraría lo que está
 * tecleando.
 */
export function formatearMientrasEscribe(texto: string): string {
  /* Sólo dígitos, una coma y nada más: cualquier otra cosa se ignora en
     lugar de rechazar la tecla, que se siente como que el campo está roto. */
  const limpio = texto.replace(/[^\d,]/g, '');

  if (limpio === '') return '';

  const [enteros, ...resto] = limpio.split(',');
  const decimales = resto.join('').slice(0, 2);

  const conPuntos = enteros.replace(/^0+(?=\d)/, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const cuerpo = conPuntos === '' ? '0' : conPuntos;

  /* La coma se conserva aunque todavía no haya decimales: la persona la
     acaba de escribir y borrarla sería pelearle al teclado. */
  if (limpio.includes(',')) {
    return `$ ${cuerpo},${decimales}`;
  }

  return `$ ${cuerpo}`;
}
