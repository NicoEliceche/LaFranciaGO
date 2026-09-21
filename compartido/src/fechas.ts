/**
 * Fechas, en hora de Argentina.
 *
 * El backend las guarda en UTC y las devuelve como "2026-09-21 14:30:00",
 * sin la Z que marca la zona. Interpretarlas tal cual hace que una venta de
 * las 11 de la noche aparezca al día siguiente, y que el informe del mes la
 * cuente en el mes equivocado.
 *
 * Vive acá para que la web y el teléfono muestren la misma hora para la
 * misma venta.
 */

/**
 * Lo que devuelve el backend → una fecha de verdad.
 *
 * Se le agrega la Z porque viene en UTC aunque no lo diga; sin eso, cada
 * dispositivo la interpreta en su propia zona y el mismo dato se ve distinto
 * en dos teléfonos.
 */
export function leerFecha(iso: string): Date {
  if (!iso) return new Date(NaN);

  /* Sólo fecha, sin hora: se fija el mediodía para que ningún cambio de
     huso la corra al día anterior. */
  if (iso.length === 10) return new Date(`${iso}T12:00:00`);

  const conZona = /[Zz]|[+-]\d{2}:?\d{2}$/.test(iso);

  return new Date(conZona ? iso : `${iso.replace(' ', 'T')}Z`);
}

/** "21/09" */
export const mostrarDia = (iso: string) =>
  leerFecha(iso).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });

/** "21/09/26" */
export const mostrarFecha = (iso: string) =>
  leerFecha(iso).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

/** "21/09 14:30" */
export const mostrarFechaHora = (iso: string) =>
  leerFecha(iso).toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

/**
 * "hace un rato", "ayer", "el 12/09".
 *
 * Para listas donde importa más cuán reciente es algo que la fecha exacta.
 */
export function hace(iso: string): string {
  const cuando = leerFecha(iso);
  const minutos = Math.floor((Date.now() - cuando.getTime()) / 60000);

  if (!Number.isFinite(minutos)) return '';
  if (minutos < 2) return 'recién';
  if (minutos < 60) return `hace ${minutos} min`;

  const horas = Math.floor(minutos / 60);

  if (horas < 24) return `hace ${horas} h`;

  const dias = Math.floor(horas / 24);

  if (dias === 1) return 'ayer';
  if (dias < 7) return `hace ${dias} días`;

  return `el ${mostrarDia(iso)}`;
}

/** Hoy en formato "2026-09-21", para los filtros de fecha. */
export function hoy(): string {
  const ahora = new Date();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0');
  const dia = String(ahora.getDate()).padStart(2, '0');

  return `${ahora.getFullYear()}-${mes}-${dia}`;
}

/** El primer día del mes corriente, para el rango por defecto de informes. */
export function inicioDelMes(): string {
  return `${hoy().slice(0, 8)}01`;
}
