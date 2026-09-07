import { type Env, aBase64, hashPassword } from './lib';

/**
 * Recuperar la contraseña.
 *
 * Dos pasos: se pide un enlace por correo, y ese enlace habilita a poner una
 * contraseña nueva.
 *
 * Tres decisiones que valen la pena explicar:
 *
 * En la base se guarda el hash del token, nunca el token en claro. Si alguien
 * leyera la tabla, con lo guardado no puede armar el enlace.
 *
 * Pedir recuperación siempre responde lo mismo, exista o no la cuenta. Si
 * dijera "ese email no está registrado", cualquiera podría averiguar quién
 * tiene cuenta probando direcciones.
 *
 * Al cambiar la contraseña se cierran todas las sesiones abiertas. Quien
 * recupera su cuenta suele hacerlo porque alguien más entró: dejar viva la
 * sesión del intruso haría inútil el cambio.
 */

/* Una hora alcanza para ir al correo y volver, y es poco tiempo para que un
   enlace olvidado en la bandeja siga sirviendo. */
const VALIDEZ_MINUTOS = 60;

/* Cuántos pedidos se aceptan por cuenta en una hora, para que nadie use la
   recuperación para inundarle el correo a alguien. */
const MAXIMO_POR_HORA = 3;

/** Token del enlace: se manda por correo y nunca se guarda tal cual. */
export function generarToken() {
  return aBase64(crypto.getRandomValues(new Uint8Array(32)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/** Hash del token, que es lo único que toca la base. */
export async function hashToken(token: string) {
  const datos = new TextEncoder().encode(token);
  const digest = await crypto.subtle.digest('SHA-256', datos);

  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Registra un pedido de recuperación y devuelve el enlace.
 *
 * Devuelve null cuando no corresponde mandar nada —la cuenta no existe, o ya
 * pidió demasiadas veces—, pero quien llama responde igual en todos los casos.
 */
export async function crearPedidoRecuperacion(env: Env, email: string, appUrl: string) {
  const usuario = await env.DB.prepare('SELECT id FROM usuarios WHERE email = ?')
    .bind(email.toLowerCase().trim())
    .first<{ id: string }>();

  if (!usuario) {
    return null;
  }

  /* La ventana se calcula en SQLite y no en JavaScript: las fechas que
     escribe la base usan espacio en lugar de "T", y comparar las dos formas
     como texto da resultados equivocados. */
  const recientes = await env.DB.prepare(
    `SELECT COUNT(*) AS total FROM recuperaciones
      WHERE usuario_id = ? AND creado_en > datetime('now', '-1 hour')`,
  )
    .bind(usuario.id)
    .first<{ total: number }>();

  if ((recientes?.total ?? 0) >= MAXIMO_POR_HORA) {
    return null;
  }

  const token = generarToken();
  const expira = new Date(Date.now() + VALIDEZ_MINUTOS * 60 * 1000).toISOString();

  await env.DB.prepare(
    'INSERT INTO recuperaciones (id, usuario_id, token_hash, expira_en) VALUES (?, ?, ?, ?)',
  )
    .bind(crypto.randomUUID(), usuario.id, await hashToken(token), expira)
    .run();

  /* HashRouter: la ruta va después del "#", como el resto de la app. */
  return `${appUrl.replace(/\/$/, '')}/#/recuperar/${token}`;
}

/**
 * De quién es un token, sin usarlo.
 *
 * Hace falta para validar la contraseña nueva contra el email y el nombre de
 * esa persona: sin eso, quien recupera su cuenta podría poner su propio
 * correo como contraseña, que es lo primero que prueba cualquiera.
 */
export async function duenoDelToken(env: Env, token: string) {
  return env.DB.prepare(
    `SELECT u.email, u.nombre FROM recuperaciones r
       JOIN usuarios u ON u.id = r.usuario_id
      WHERE r.token_hash = ?`,
  )
    .bind(await hashToken(token))
    .first<{ email: string; nombre: string }>();
}

/**
 * Cambia la contraseña usando el token del enlace.
 *
 * Devuelve el motivo del rechazo en lugar de un booleano: "el enlace venció"
 * y "el enlace ya se usó" piden cosas distintas de quien lo lee.
 */
export async function usarPedidoRecuperacion(env: Env, token: string, passwordNueva: string) {
  const fila = await env.DB.prepare(
    `SELECT r.id, r.usuario_id, r.expira_en, r.usado_en, u.email, u.nombre
       FROM recuperaciones r
       JOIN usuarios u ON u.id = r.usuario_id
      WHERE r.token_hash = ?`,
  )
    .bind(await hashToken(token))
    .first<{
      id: string;
      usuario_id: string;
      expira_en: string;
      usado_en: string | null;
      email: string;
      nombre: string;
    }>();

  if (!fila) {
    return { ok: false as const, motivo: 'El enlace no es válido.' };
  }

  if (fila.usado_en) {
    return { ok: false as const, motivo: 'Ese enlace ya se usó. Pedí uno nuevo.' };
  }

  if (new Date(fila.expira_en).getTime() < Date.now()) {
    return { ok: false as const, motivo: 'El enlace venció. Pedí uno nuevo.' };
  }

  const hash = await hashPassword(passwordNueva);

  /* Todo junto: la contraseña nueva, el enlace marcado como usado y las
     sesiones cerradas. Si algo de esto quedara a medias, la cuenta quedaría
     en un estado peor que antes de recuperarla. */
  await env.DB.batch([
    env.DB.prepare('UPDATE usuarios SET password_hash = ? WHERE id = ?').bind(
      hash,
      fila.usuario_id,
    ),
    env.DB.prepare("UPDATE recuperaciones SET usado_en = datetime('now') WHERE id = ?").bind(
      fila.id,
    ),
    /* Los demás enlaces pendientes dejan de valer: si se pidieron varios,
       los que sobran son llaves sueltas. */
    env.DB.prepare(
      'UPDATE recuperaciones SET usado_en = datetime(\'now\') WHERE usuario_id = ? AND usado_en IS NULL',
    ).bind(fila.usuario_id),
    env.DB.prepare('DELETE FROM sesiones WHERE usuario_id = ?').bind(fila.usuario_id),
  ]);

  return { ok: true as const, email: fila.email, nombre: fila.nombre };
}

/**
 * Manda el correo con el enlace.
 *
 * Si no hay clave de Resend cargada, se deja el enlace en el registro del
 * Worker en vez de fallar: así el flujo se puede probar antes de tener el
 * servicio conectado, y en producción el envío arranca con sólo cargar el
 * secreto.
 */
export async function enviarCorreoRecuperacion(env: Env, destino: string, enlace: string) {
  if (!env.RESEND_API_KEY) {
    console.log(`[recuperación] enlace para ${destino}: ${enlace}`);

    return;
  }

  const respuesta = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CORREO_REMITENTE || 'LaFranciaGO <onboarding@resend.dev>',
      to: [destino],
      subject: 'Recuperá tu contraseña de LaFranciaGO',
      text: [
        'Pediste cambiar tu contraseña de LaFranciaGO.',
        '',
        `Entrá acá para elegir una nueva: ${enlace}`,
        '',
        'El enlace vale por una hora y se usa una sola vez.',
        'Si no lo pediste, no hace falta que hagas nada: tu contraseña sigue igual.',
      ].join('\n'),
      html: correoHtml(enlace),
    }),
  });

  if (!respuesta.ok) {
    /* Se registra pero no se corta: quien pidió el enlace no puede hacer nada
       con un error del proveedor de correo, y contarle que falló el envío
       revelaría que la cuenta existe. */
    console.warn('No se pudo enviar el correo de recuperación', await respuesta.text());
  }
}

/** Correo simple y legible: sin imágenes ni estilos que los clientes recorten. */
function correoHtml(enlace: string) {
  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:24px;background:#f4f6fb;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#0b1020">
    <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px">
      <h1 style="margin:0 0 16px;font-size:20px">Recuperá tu contraseña</h1>
      <p style="margin:0 0 24px;line-height:1.5;color:#3f4a63">
        Pediste cambiar tu contraseña de LaFranciaGO. Tocá el botón y elegí una nueva.
      </p>
      <a href="${enlace}"
         style="display:inline-block;padding:14px 24px;border-radius:999px;background:#0047E7;color:#ffffff;text-decoration:none;font-weight:700">
        Elegir contraseña nueva
      </a>
      <p style="margin:24px 0 0;line-height:1.5;color:#6b7589;font-size:13px">
        El enlace vale por una hora y se usa una sola vez.
        Si no lo pediste, no hace falta que hagas nada: tu contraseña sigue igual.
      </p>
    </div>
  </body>
</html>`;
}
