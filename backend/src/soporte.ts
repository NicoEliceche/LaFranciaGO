/**
 * Cuando algo falla y la persona quiere avisarlo.
 *
 * El usuario nunca ve el registro de errores —eso es de administración— así
 * que cuando algo se rompe sólo ve "no pudimos hacer esto". Sin una forma de
 * reportarlo, el problema se queda ahí: la persona lo intenta de nuevo, no
 * funciona, y deja de usar la aplicación sin que nadie se entere.
 *
 * Esto le da un botón. Lo que manda no es lo que ella escriba solamente: va
 * con el error técnico ya registrado, quién es, qué estaba haciendo y desde
 * qué aparato. Con eso el reporte llega listo para trabajar, en vez de un
 * "no me anda" que hay que ir a preguntar.
 */
import type { Env } from './lib';
import { anotar } from './registro';

/** A dónde llegan los reportes. */
const SOPORTE = 'nico.elicechediz@gmail.com';

export interface Reporte {
  /** Lo que escribió la persona, si escribió algo. */
  comentario: string;
  /** La línea del registro que originó esto, si el reporte viene de un error. */
  registroId?: string | null;
  /** En qué pantalla estaba. */
  pantalla?: string | null;
  /** Navegador y sistema, que explican los problemas que le pasan a uno solo. */
  aparato?: string | null;
}

export interface QuienReporta {
  id: string | null;
  email: string | null;
  nombre: string | null;
  rol: string | null;
}

/**
 * Arma el correo y lo manda.
 *
 * Devuelve si se pudo. No lanza: que el reporte no llegue es un problema,
 * pero romperle la pantalla a quien justamente vino a avisar que algo se
 * rompió es peor.
 */
export async function enviarReporte(
  env: Env,
  reporte: Reporte,
  quien: QuienReporta,
  detalleTecnico: Record<string, unknown> | null,
): Promise<boolean> {
  const lineas = [
    'Alguien reportó un problema en LaFranciaGO.',
    '',
    '── Quién ──',
    `Email:   ${quien.email ?? 'sin sesión'}`,
    `Nombre:  ${quien.nombre ?? '-'}`,
    `Rol:     ${quien.rol ?? '-'}`,
    `Id:      ${quien.id ?? '-'}`,
    '',
    '── Qué dice ──',
    reporte.comentario.trim() || '(no escribió nada)',
    '',
    '── Dónde estaba ──',
    `Pantalla: ${reporte.pantalla ?? '-'}`,
    `Aparato:  ${reporte.aparato ?? '-'}`,
    `Cuándo:   ${new Date().toISOString()}`,
  ];

  if (detalleTecnico) {
    lineas.push(
      '',
      '── El error ──',
      `Mensaje: ${String(detalleTecnico.mensaje ?? '-')}`,
      `Dónde:   ${String(detalleTecnico.metodo ?? '')} ${String(detalleTecnico.ruta ?? '-')}`,
      `Estado:  ${String(detalleTecnico.estado ?? '-')}`,
      `Tardó:   ${String(detalleTecnico.ms ?? '-')} ms`,
      '',
      String(detalleTecnico.detalle ?? '').slice(0, 4000),
    );
  }

  if (reporte.registroId) {
    lineas.push('', `Id en el registro: ${reporte.registroId}`);
  }

  const cuerpo = lineas.join('\n');

  /* Queda anotado aunque el correo falle: así el reporte no se pierde si
     Resend está caído o falta la clave. */
  await anotar(env, 'aviso', `Reporte de ${quien.email ?? 'alguien sin sesión'}`, {
    area: 'soporte',
    usuarioId: quien.id,
    detalle: { comentario: reporte.comentario, pantalla: reporte.pantalla },
  });

  if (!env.RESEND_API_KEY) {
    /* Sin clave de correo no se puede mandar, pero el reporte ya quedó
       guardado arriba: se lee desde el panel. */
    console.log('[soporte] sin RESEND_API_KEY, el reporte quedó sólo en el registro');

    return false;
  }

  try {
    const respuesta = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CORREO_REMITENTE || 'LaFranciaGO <onboarding@resend.dev>',
        to: [SOPORTE],
        /* El email de quien reporta va en el asunto: así se ve de quién es
           sin abrirlo, y responder desde el correo le llega directo. */
        subject: `[LaFranciaGO] Problema reportado por ${quien.email ?? 'alguien sin sesión'}`,
        ...(quien.email ? { reply_to: quien.email } : {}),
        text: cuerpo,
      }),
    });

    return respuesta.ok;
  } catch {
    return false;
  }
}
