/**
 * Qué versión debería estar usando cada aplicación.
 *
 * El problema que resuelve: una aplicación instalada no se entera sola de
 * que salió algo nuevo. Sin esto, la única forma de que Diego actualice es
 * que alguien vaya al negocio, y la única forma de forzar un cambio
 * imprescindible sería llamarlo por teléfono.
 *
 * Hay dos cosas distintas y conviene no mezclarlas:
 *
 *   ultima  → lo que hay. Se avisa y la persona actualiza cuando quiere.
 *   minima  → lo que hace falta. Por debajo de eso la aplicación no puede
 *             seguir, porque hablaría con un servidor que ya no la entiende.
 *
 * La segunda es la que faltaba en el caso que contó Nicolás: sin un mínimo,
 * una aplicación vieja sigue abriendo y fallando de maneras raras, y la
 * persona cree que el sistema anda mal.
 */
import type { Env } from './lib';
import { json } from './lib';

export interface VersionPlataforma {
  /** La última publicada. */
  ultima: string;
  /** Por debajo de esta, la aplicación no puede seguir trabajando. */
  minima: string;
  /** Qué cambió, en palabras del comercio. */
  novedades: string;
  /** De dónde se baja, cuando corresponde bajarla. */
  descarga?: string;
  /** Por qué es obligatoria, cuando lo es. */
  motivoObligatorio?: string;
}

/**
 * Se escribe acá y no en la base porque cambia cuando se publica una
 * versión, que es cuando se toca el código igual. Ponerlo en la base
 * agregaría una pantalla de administración para algo que se edita tres veces
 * por año.
 */
export const VERSIONES: Record<string, VersionPlataforma> = {
  escritorio: {
    ultima: '1.0.0',
    minima: '1.0.0',
    novedades: 'Primera versión con caja rápida, lectora e impresión de tickets.',
    descarga: 'https://nicoeliceche.github.io/LaFranciaGO/descargas/LaFranciaGO-Setup.exe',
  },
  android: {
    ultima: '1.0.0',
    minima: '1.0.0',
    novedades: 'Primera versión.',
    descarga: 'https://play.google.com/store/apps/details?id=ar.com.lafranciago',
  },
  ios: {
    ultima: '1.0.0',
    minima: '1.0.0',
    novedades: 'Primera versión.',
    descarga: 'https://apps.apple.com/ar/app/lafranciago/id0000000000',
  },
};

/**
 * Compara dos versiones tipo "1.2.3".
 *
 * Devuelve negativo si la primera es más vieja. Se compara número por número
 * y no como texto: "1.10.0" es más nueva que "1.9.0", pero alfabéticamente
 * sería al revés.
 */
export function compararVersiones(a: string, b: string): number {
  const partesA = String(a).split('.').map(Number);
  const partesB = String(b).split('.').map(Number);

  for (let i = 0; i < Math.max(partesA.length, partesB.length); i += 1) {
    const x = partesA[i] ?? 0;
    const y = partesB[i] ?? 0;

    if (x !== y) return x - y;
  }

  return 0;
}

/**
 * Qué tiene que hacer una aplicación con la versión que trae.
 *
 *   'al-dia'      → nada.
 *   'hay-nueva'   → avisar, dejando seguir trabajando.
 *   'obligatoria' → no dejar seguir hasta actualizar.
 */
export function evaluar(plataforma: string, instalada: string) {
  const info = VERSIONES[plataforma];

  if (!info) return { estado: 'al-dia' as const };

  if (compararVersiones(instalada, info.minima) < 0) {
    return {
      estado: 'obligatoria' as const,
      ...info,
      motivoObligatorio:
        info.motivoObligatorio ??
        'Esta versión ya no puede comunicarse con el sistema. Hay que actualizarla para seguir.',
    };
  }

  if (compararVersiones(instalada, info.ultima) < 0) {
    return { estado: 'hay-nueva' as const, ...info };
  }

  return { estado: 'al-dia' as const, ...info };
}

/**
 * La ruta que consultan las aplicaciones.
 *
 * Es pública: preguntar si hay una versión nueva no necesita sesión, y
 * pedirla obligaría a actualizar antes de poder iniciarla, que es al revés
 * de lo que hace falta.
 */
export function rutaVersiones(
  ruta: string,
  metodo: string,
  request: Request,
  _env: Env,
  cors: Record<string, string>,
): Response | null {
  if (ruta !== '/versiones' || metodo !== 'GET') return null;

  const parametros = new URL(request.url).searchParams;
  const plataforma = parametros.get('plataforma') ?? '';
  const instalada = parametros.get('version') ?? '0.0.0';

  if (!plataforma) {
    return json({ versiones: VERSIONES }, {}, cors);
  }

  return json(evaluar(plataforma, instalada), {}, cors);
}
