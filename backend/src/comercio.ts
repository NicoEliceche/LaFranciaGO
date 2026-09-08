import type { Env } from './lib';

/**
 * Horarios y stock del comercio.
 *
 * Dos cosas que hasta ahora la app no sabía y el cliente pagaba: si el
 * negocio estaba abierto, y si tenía lo que estaba pidiendo.
 */

export const DIAS = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
] as const;

/** "08:30" → 510 minutos desde medianoche. */
export function aMinutos(hora: string) {
  const [h, m] = hora.split(':').map(Number);

  if (!Number.isFinite(h) || !Number.isFinite(m) || h < 0 || h > 23 || m < 0 || m > 59) {
    return null;
  }

  return h * 60 + m;
}

/** 510 → "08:30". */
export function aHora(minutos: number) {
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;

  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Si el comercio está abierto ahora.
 *
 * La hora se calcula en Argentina y no en la del servidor: los Workers corren
 * en cualquier parte del mundo, y con la hora de Londres un comercio de La
 * Francia figuraría cerrado toda la tarde.
 */
export function estaAbierto(
  horarios: Array<{ dia: number; abre_min: number; cierra_min: number }>,
  cerradoTemporal = false,
) {
  if (cerradoTemporal) {
    return false;
  }

  /* Sin horarios cargados no se puede afirmar que esté cerrado: sería
     esconder comercios que sí atienden. Se los da por abiertos hasta que
     carguen los suyos. */
  if (horarios.length === 0) {
    return true;
  }

  const ahora = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Cordoba' }),
  );

  const dia = ahora.getDay();
  const minutos = ahora.getHours() * 60 + ahora.getMinutes();

  return horarios.some(
    (tramo) => tramo.dia === dia && minutos >= tramo.abre_min && minutos < tramo.cierra_min,
  );
}

/** Cuándo vuelve a abrir, para poder decírselo al cliente. */
export function proximaApertura(
  horarios: Array<{ dia: number; abre_min: number; cierra_min: number }>,
) {
  if (horarios.length === 0) {
    return null;
  }

  const ahora = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Cordoba' }),
  );

  const diaHoy = ahora.getDay();
  const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes();

  /* Se recorren los próximos siete días desde hoy: el primero que tenga un
     tramo por delante es la respuesta. */
  for (let salto = 0; salto < 7; salto += 1) {
    const dia = (diaHoy + salto) % 7;
    const tramos = horarios
      .filter((tramo) => tramo.dia === dia)
      .filter((tramo) => salto > 0 || tramo.abre_min > minutosAhora)
      .sort((a, b) => a.abre_min - b.abre_min);

    if (tramos[0]) {
      return {
        dia: DIAS[dia],
        hora: aHora(tramos[0].abre_min),
        esHoy: salto === 0,
        esManana: salto === 1,
      };
    }
  }

  return null;
}

/** Cómo está el stock de un producto, para mostrarlo al cliente. */
export type EstadoStock = 'disponible' | 'poco' | 'agotado';

/* Debajo de esto se avisa que quedan pocas: el cliente decide con eso si
   compra ahora o espera, y el repartidor no viaja para nada. */
const UMBRAL_POCO = 5;

export function estadoDeStock(stock: number | null): EstadoStock {
  /* Sin stock declarado se asume disponible: hay comercios que no llevan
     control y obligar a cargarlo dejaría su catálogo entero como agotado. */
  if (stock === null || stock === undefined) {
    return 'disponible';
  }

  if (stock <= 0) {
    return 'agotado';
  }

  return stock <= UMBRAL_POCO ? 'poco' : 'disponible';
}

/**
 * Descuenta el stock de lo que se vendió.
 *
 * Sólo toca los productos que llevan control: los que tienen stock en null
 * quedan como están, porque ese comercio decidió no llevarlo.
 *
 * Nunca baja de cero: si dos personas compran la última unidad casi al mismo
 * tiempo, el stock queda en cero y no en negativo, que no significa nada.
 */
export async function descontarStock(
  env: Env,
  lineas: Array<{ productoId: string; unidades: number }>,
) {
  if (lineas.length === 0) {
    return;
  }

  await env.DB.batch(
    lineas.map((linea) =>
      env.DB.prepare(
        'UPDATE productos SET stock = MAX(0, stock - ?) WHERE id = ? AND stock IS NOT NULL',
      ).bind(linea.unidades, linea.productoId),
    ),
  );
}
