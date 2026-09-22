/**
 * Cuántas peticiones puede hacer cada IP por minuto.
 *
 * Cloudflare ya frena el DDoS de red —el que satura el cable— antes de que
 * llegue acá. Esto es lo otro: el que llega bien formado y en volumen, para
 * bajarse el catálogo entero, probar contraseñas o simplemente dejar la
 * aplicación de rodillas con peticiones válidas.
 *
 * El límite es por IP y no por sesión a propósito: quien abusa no se
 * autentica, y pedirle sesión para contarlo sería dejarlo pasar.
 *
 * No reemplaza a la autenticación ni a los permisos, que son los que deciden
 * quién ve qué. Esto sólo acota el volumen.
 */
import type { Env } from './lib';
import { error } from './lib';

/**
 * El tope por minuto.
 *
 * Alto a propósito: una pantalla del marketplace puede pedir el comercio, sus
 * productos, sus ofertas y las notificaciones casi a la vez, y alguien
 * mirando rápido hace varias en pocos segundos. Un número bajo daría errores
 * a gente que sólo está usando la aplicación, que es peor que el abuso que
 * evita.
 *
 * 300 por minuto son 5 por segundo sostenidos: nadie navegando llega ahí, y
 * un copiador automático lo pasa en el primer segundo.
 */
const POR_MINUTO = 300;

/** Lo mismo, pero para lo que cuesta caro o abre la puerta. */
const POR_MINUTO_SENSIBLE = 30;

/* Las rutas donde el abuso duele más: crean sesiones, mandan correo o
   escriben en la base. El resto son lecturas que Cloudflare ya cachea. */
const SENSIBLES = [
  '/auth/login',
  '/auth/login-panel',
  '/auth/registro',
  '/auth/recuperar',
  '/media',
];

/** El minuto actual como texto, que es la clave de la ventana. */
function ventanaActual() {
  return new Date().toISOString().slice(0, 16).replace('T', ' ');
}

/**
 * Suma una petición y dice si esta IP se pasó del límite.
 *
 * Devuelve la respuesta de rechazo si hay que cortar, o null si puede seguir.
 *
 * Si la consulta falla, deja pasar: es preferible atender de más a dejar a
 * todo el pueblo afuera porque la base tuvo un hipo.
 */
export async function limiteAlcanzado(
  request: Request,
  env: Env,
  ruta: string,
  cors: Record<string, string>,
): Promise<Response | null> {
  const ip = request.headers.get('CF-Connecting-IP');

  /* Sin IP no se puede contar. Pasa en desarrollo, donde tampoco hace falta. */
  if (!ip) return null;

  const tope = SENSIBLES.some((prefijo) => ruta.startsWith(prefijo))
    ? POR_MINUTO_SENSIBLE
    : POR_MINUTO;

  try {
    /* Una sola escritura: inserta si es la primera de este minuto, o suma si
       ya había. Contar con SELECT y después escribir dejaría una ventana en
       la que dos peticiones a la vez leen el mismo número. */
    const fila = await env.DB.prepare(
      `INSERT INTO peticiones_por_ip (ip, ventana, cuantas)
       VALUES (?, ?, 1)
       ON CONFLICT (ip, ventana) DO UPDATE SET cuantas = cuantas + 1
       RETURNING cuantas`,
    )
      .bind(ip, ventanaActual())
      .first<{ cuantas: number }>();

    const cuantas = fila?.cuantas ?? 0;

    if (cuantas <= tope) return null;

    /* Retry-After le dice al cliente honesto cuándo volver, en lugar de que
       reintente en bucle y empeore las cosas. */
    return error('Demasiadas peticiones. Esperá un momento.', 429, {
      ...cors,
      'Retry-After': '60',
    });
  } catch {
    /* La base falló: se deja pasar. Un limitador que corta cuando no puede
       contar convierte un problema de base en una caída completa. */
    return null;
  }
}

/**
 * Borra las ventanas que ya pasaron.
 *
 * Se llama de vez en cuando y no en cada petición: la tabla crece poco —una
 * fila por IP y por minuto— y borrar en cada llamada costaría más que el
 * espacio que ahorra.
 */
export async function limpiarVentanasViejas(env: Env) {
  try {
    await env.DB.prepare(
      "DELETE FROM peticiones_por_ip WHERE ventana < strftime('%Y-%m-%d %H:%M', 'now', '-10 minutes')",
    ).run();
  } catch {
    /* Si no se pudo limpiar, se intenta la próxima. */
  }
}
