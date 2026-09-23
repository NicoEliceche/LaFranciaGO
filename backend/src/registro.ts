/**
 * El registro de lo que pasa adentro de la aplicación.
 *
 * Existe para responder una sola pregunta, rápido: "¿por qué se rompió esto?"
 *
 * Los logs de Cloudflare no sirven para eso. Se borran solos, no se pueden
 * buscar y hay que estar mirando en el momento exacto en que falla. Cuando
 * Diego avisa al otro día que "el jueves no pude cerrar la caja", ahí ya no
 * hay nada que leer.
 *
 * Acá queda guardado con la ruta, el método, quién era, cuánto tardó y el
 * stack completo. Con eso, un problema que tomaría horas de adivinar se lee
 * en un minuto.
 */
import type { Env } from './lib';
import { nuevoId } from './lib';

export type Nivel = 'error' | 'aviso' | 'info';

/**
 * Cuánto se guarda.
 *
 * Noventa días alcanzan para ver un patrón estacional —qué falla en fin de
 * mes, qué falla los sábados— sin que la tabla crezca sin control.
 *
 * El tope de filas manda por encima de los días: si algo falla en bucle y
 * escribe cien mil líneas en una tarde, no hay que esperar noventa días para
 * recuperar el espacio. Se borran las más viejas primero.
 */
const DIAS = 90;
const MAXIMO_FILAS = 50_000;

/** Lo que se puede adjuntar a una línea del registro. */
export interface Contexto {
  area?: string;
  ruta?: string;
  metodo?: string;
  estado?: number;
  usuarioId?: string | null;
  ip?: string | null;
  ms?: number;
  /* Cualquier cosa que ayude a entender: el cuerpo del pedido, el id del
     comercio, qué valor tenía la variable que rompió. */
  detalle?: unknown;
}

/**
 * Convierte cualquier cosa que se haya lanzado en algo legible.
 *
 * En JavaScript se puede lanzar cualquier valor, no sólo Error: un string, un
 * objeto, undefined. Si esto asumiera que siempre es un Error, el registro
 * quedaría vacío justo en los casos más raros, que son los que más cuesta
 * entender.
 */
function describir(fallo: unknown) {
  if (fallo instanceof Error) {
    return {
      mensaje: `${fallo.name}: ${fallo.message}`,
      /* El stack dice en qué línea y por qué camino se llegó. Es lo que
         convierte "algo falló" en "falló en esta función". */
      stack: fallo.stack ?? null,
      /* Un error puede envolver a otro: el de arriba dice "no se pudo
         guardar", el de adentro dice por qué. */
      causa: fallo.cause ? String(fallo.cause) : null,
    };
  }

  return { mensaje: `Se lanzó algo que no es Error: ${String(fallo)}`, stack: null, causa: null };
}

/**
 * Serializa el detalle sin romperse ni guardar de más.
 *
 * Tres cuidados: que un objeto con referencias circulares no tumbe el
 * registro, que un cuerpo enorme no llene la base, y que una contraseña no
 * quede escrita en texto plano.
 */
function serializar(valor: unknown): string | null {
  if (valor === undefined || valor === null) return null;

  try {
    const texto = JSON.stringify(valor, (clave, dato) => {
      /* Nunca se guardan credenciales, aunque vengan en el cuerpo del pedido
         que falló. Un registro con contraseñas adentro es peor que no tener
         registro. */
      if (/password|contrasena|contraseña|token|secret|authorization/i.test(clave)) {
        return '[oculto]';
      }

      return dato;
    });

    /* Un cuerpo de varios megas no aporta más que los primeros miles de
       caracteres, y sí llena la base. */
    return texto.length > 8000 ? `${texto.slice(0, 8000)}… (recortado)` : texto;
  } catch {
    /* Referencias circulares u objetos raros: se guarda lo que se pueda. */
    return String(valor).slice(0, 2000);
  }
}

/**
 * Anota una línea.
 *
 * Nunca lanza. Si el registro fallara y eso rompiera la petición, se
 * convertiría en la causa de los problemas que vino a diagnosticar.
 */
export async function anotar(
  env: Env,
  nivel: Nivel,
  mensaje: string,
  contexto: Contexto = {},
): Promise<void> {
  try {
    await env.DB.prepare(
      `INSERT INTO registro
         (id, nivel, area, mensaje, detalle, ruta, metodo, estado, usuario_id, ip, ms)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        nuevoId(),
        nivel,
        contexto.area ?? null,
        mensaje.slice(0, 500),
        serializar(contexto.detalle),
        contexto.ruta ?? null,
        contexto.metodo ?? null,
        contexto.estado ?? null,
        contexto.usuarioId ?? null,
        contexto.ip ?? null,
        contexto.ms ?? null,
      )
      .run();
  } catch (fallo) {
    /* Último recurso: al menos que quede en los logs de Cloudflare. */
    console.error('No se pudo anotar en el registro', mensaje, fallo);
  }
}

/** Anota una excepción con todo lo que se sepa de ella. */
export async function anotarFallo(
  env: Env,
  fallo: unknown,
  contexto: Contexto = {},
): Promise<void> {
  const { mensaje, stack, causa } = describir(fallo);

  await anotar(env, 'error', mensaje, {
    ...contexto,
    detalle: { stack, causa, ...(contexto.detalle ? { extra: contexto.detalle } : {}) },
  });
}

/**
 * Libera espacio: primero por antigüedad, y si aún así hay demasiadas, por
 * cantidad.
 *
 * El borrado por cantidad no es un lujo: un error en bucle puede escribir
 * miles de líneas por minuto, y esperar noventa días para recuperar el
 * espacio sería tarde. Se borran las más viejas, que son justamente las que
 * ya no se van a mirar.
 */
export async function limpiarRegistro(env: Env): Promise<void> {
  try {
    await env.DB.prepare(
      `DELETE FROM registro WHERE creado_en < datetime('now', '-${DIAS} days')`,
    ).run();

    const fila = await env.DB.prepare('SELECT COUNT(*) AS cuantas FROM registro').first<{
      cuantas: number;
    }>();

    const sobran = (fila?.cuantas ?? 0) - MAXIMO_FILAS;

    if (sobran > 0) {
      await env.DB.prepare(
        `DELETE FROM registro WHERE id IN (
           SELECT id FROM registro ORDER BY creado_en ASC LIMIT ?
         )`,
      )
        .bind(sobran)
        .run();
    }
  } catch (fallo) {
    console.error('No se pudo limpiar el registro', fallo);
  }
}
