/**
 * Extras del pedido.
 *
 * "Ya que vas al kiosco, traeme un chocolate". El cliente lo pide por el
 * chat, el repartidor decide si puede, lo compra y carga cuánto salió con
 * foto del ticket.
 *
 * Dos cosas hacen esto distinto de un producto del catálogo:
 *
 * No tiene precio hasta que alguien lo compra. Por eso lo carga quien
 * compra, que es el único que lo sabe, y con comprobante: es plata que el
 * cliente paga sin haber visto el precio de antemano.
 *
 * Y lo puede cancelar cualquiera de los dos, pero no en cualquier momento.
 * Si ya está comprado, la cancelación del cliente necesita que el repartidor
 * la acepte: si no, alguien se queda con mercadería que pagó de su bolsillo.
 */

/** Por qué un repartidor no toma un extra. */
export const MOTIVOS_RECHAZO = [
  'No me entra en el vehículo',
  'Me queda muy lejos del recorrido',
  'Ya estoy en camino a tu dirección',
  'Prefiero no manejar efectivo extra',
] as const;

/** Por qué se cae un extra que ya se había aceptado. */
export const MOTIVOS_CANCELACION = [
  'El negocio no tenía lo que pediste',
  'Estaba más caro de lo que esperabas',
  'El negocio está cerrado',
  'No me alcanza el efectivo para comprarlo',
] as const;

/**
 * Resuelve el motivo que llega del navegador.
 *
 * Acepta el índice o el texto, y compara sin acentos ni mayúsculas: comparar
 * el texto exacto ata la validación a una tilde, y el día que se corrija una
 * palabra de la lista los envíos dejan de pasar sin que nadie entienda por
 * qué. Devuelve el texto canónico o null si no corresponde a ninguno.
 */
export function resolverMotivo(motivo: unknown, lista: readonly string[]) {
  /* Por índice: es lo que manda un desplegable. */
  if (typeof motivo === 'number' && lista[motivo]) {
    return lista[motivo];
  }

  const texto = String(motivo ?? '').trim();

  if (!texto) {
    return null;
  }

  const normalizar = (valor: string) =>
    valor
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const buscado = normalizar(texto);

  return lista.find((opcion) => normalizar(opcion) === buscado) ?? null;
}

/** Los pasos que puede dar un extra, y desde dónde. */
export const TRANSICIONES: Record<string, string[]> = {
  pedido: ['aceptado', 'rechazado', 'cancelado'],
  aceptado: ['comprado', 'cancelado'],
  comprado: ['cobrado', 'cancelado'],
  cobrado: [],
  rechazado: [],
  cancelado: [],
};

/** Si un extra puede pasar de un estado al otro. */
export function puedeIr(desde: string, hasta: string) {
  return (TRANSICIONES[desde] ?? []).includes(hasta);
}

/**
 * Cuánto suman los extras de un pedido.
 *
 * Sólo cuentan los comprados y los cobrados: un extra pedido todavía no
 * tiene precio, y uno cancelado no se cobra.
 */
export function sumarExtras(
  extras: Array<{ estado: string; precio_centavos: number | null }>,
) {
  return extras
    .filter((extra) => extra.estado === 'comprado' || extra.estado === 'cobrado')
    .reduce((total, extra) => total + (extra.precio_centavos ?? 0), 0);
}
