import { type Env, aPesos } from './lib';

/**
 * Cobro con Mercado Pago (Checkout Pro).
 *
 * El cliente paga en la ventana de Mercado Pago y vuelve a la app. Los datos
 * de la tarjeta nunca pasan por este servidor, así que no hace falta
 * certificación PCI: es la diferencia entre poder cobrar y no poder.
 *
 * Cada comercio cobra en su propia cuenta y la plataforma retiene su comisión
 * en el mismo pago, con `marketplace_fee`. La plata no pasa por una cuenta
 * intermedia, que traería obligaciones impositivas y de responsabilidad.
 *
 * Mercado Pago permite repartir entre más de dos cuentas (modelo 1:N), pero
 * está reservado a cuentas con acuerdo comercial. Con el 1:1 disponible para
 * todos, la comisión de la plataforma incluye el reparto y el pago al
 * repartidor se liquida aparte: por eso cada pago guarda cuánto de su total
 * era envío.
 */

const MP_API = 'https://api.mercadopago.com';

/** Lo que se le cobra al comercio sobre el valor de sus productos. */
const COMISION_PORCENTAJE = 10;

/**
 * Arma la preferencia de pago y devuelve a dónde mandar al cliente.
 *
 * Los importes salen de lo que ya se guardó en el pedido, no de lo que mande
 * el navegador: es lo mismo que con los precios, y acá además es plata que
 * alguien cobra.
 */
export async function crearPreferencia(
  env: Env,
  pedido: {
    id: string;
    codigo: string;
    subtotal_centavos: number;
    envio_centavos: number;
    total_centavos: number;
    comercio_id: string;
  },
  comprador: { email: string; nombre: string },
) {
  const comercio = await env.DB.prepare(
    'SELECT nombre, mp_access_token FROM comercios WHERE id = ?',
  )
    .bind(pedido.comercio_id)
    .first<{ nombre: string; mp_access_token: string | null }>();

  /* Sin la cuenta del comercio conectada no hay a dónde mandar la plata. Se
     avisa en lugar de cobrar a una cuenta equivocada. */
  const token = comercio?.mp_access_token || env.MP_ACCESS_TOKEN;

  if (!token) {
    return { ok: false as const, motivo: 'Este comercio todavía no acepta pagos online.' };
  }

  /* La comisión se calcula sobre los productos y se le suma el envío entero:
     el reparto lo paga la plataforma, así que esa parte no le corresponde al
     comercio. */
  const comision =
    Math.round((pedido.subtotal_centavos * COMISION_PORCENTAJE) / 100) + pedido.envio_centavos;

  const cuerpo = {
    items: [
      {
        id: pedido.id,
        title: `Pedido ${pedido.codigo} · ${comercio?.nombre ?? 'LaFranciaGO'}`,
        quantity: 1,
        currency_id: 'ARS',
        unit_price: aPesos(pedido.total_centavos),
      },
    ],
    payer: { name: comprador.nombre, email: comprador.email },
    /* Por dónde vuelve el cliente. El pedido queda identificado en la URL
       para poder mostrarle en qué quedó. */
    back_urls: {
      success: `${env.APP_PUBLIC_URL || env.APP_URL}/#/pedidos?pago=ok`,
      pending: `${env.APP_PUBLIC_URL || env.APP_URL}/#/pedidos?pago=pendiente`,
      failure: `${env.APP_PUBLIC_URL || env.APP_URL}/#/carrito?pago=error`,
    },
    auto_return: 'approved',
    /* Acá avisa Mercado Pago cuando el pago cambia de estado. Es la fuente
       de verdad: la vuelta del navegador puede no ocurrir nunca —el cliente
       cierra la pestaña— y aun así el pago estar hecho. */
    notification_url: `${env.API_PUBLIC_URL || ''}/pagos/webhook`,
    external_reference: pedido.id,
    marketplace_fee: aPesos(comision),
    statement_descriptor: 'LAFRANCIAGO',
  };

  const respuesta = await fetch(`${MP_API}/checkout/preferences`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cuerpo),
  });

  if (!respuesta.ok) {
    console.warn('Mercado Pago rechazó la preferencia', await respuesta.text());

    return { ok: false as const, motivo: 'No pudimos iniciar el pago. Probá de nuevo.' };
  }

  const datos = (await respuesta.json()) as {
    id: string;
    init_point: string;
    sandbox_init_point: string;
  };

  await env.DB.prepare(
    `INSERT INTO pagos (id, pedido_id, preferencia_id, monto_centavos, comision_centavos, envio_centavos)
     VALUES (?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      crypto.randomUUID(),
      pedido.id,
      datos.id,
      pedido.total_centavos,
      comision,
      pedido.envio_centavos,
    )
    .run();

  /* En pruebas se usa el punto de sandbox: con credenciales de prueba, el
     init_point normal rechaza el pago sin explicar por qué. */
  const enPruebas = token.startsWith('TEST-');

  return {
    ok: true as const,
    preferenciaId: datos.id,
    url: enPruebas ? datos.sandbox_init_point : datos.init_point,
  };
}

/** Cómo se llama en la app cada estado que informa Mercado Pago. */
const ESTADOS: Record<string, string> = {
  approved: 'aprobado',
  authorized: 'aprobado',
  in_process: 'pendiente',
  pending: 'pendiente',
  rejected: 'rechazado',
  cancelled: 'cancelado',
  refunded: 'devuelto',
  charged_back: 'devuelto',
};

/**
 * Procesa el aviso de Mercado Pago.
 *
 * No se confía en lo que trae el aviso: sólo trae un id, y con ese id se le
 * pregunta a Mercado Pago cómo quedó el pago. Si se creyera lo que llega,
 * cualquiera podría avisar que un pedido está pagado.
 */
export async function procesarAviso(env: Env, pagoId: string) {
  const token = env.MP_ACCESS_TOKEN;

  if (!token) {
    return;
  }

  const respuesta = await fetch(`${MP_API}/v1/payments/${pagoId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!respuesta.ok) {
    console.warn('No pudimos consultar el pago', pagoId, respuesta.status);

    return;
  }

  const pago = (await respuesta.json()) as {
    id: number;
    status: string;
    external_reference?: string;
    payment_method_id?: string;
    transaction_amount?: number;
  };

  const pedidoId = pago.external_reference;

  if (!pedidoId) {
    return;
  }

  const estado = ESTADOS[pago.status] ?? 'pendiente';

  await env.DB.batch([
    env.DB.prepare(
      `UPDATE pagos
          SET estado = ?, mp_pago_id = ?, metodo = ?, detalle = ?,
              actualizado_en = datetime('now')
        WHERE pedido_id = ?`,
    ).bind(estado, String(pago.id), pago.payment_method_id ?? null, pago.status, pedidoId),
    env.DB.prepare('UPDATE pedidos SET pago_estado = ? WHERE id = ?').bind(estado, pedidoId),
    /* Un pago rechazado cancela el pedido: dejarlo "en proceso" haría que el
       comercio prepare algo que nadie pagó. */
    env.DB.prepare(
      `UPDATE pedidos SET estado = CASE WHEN ? IN ('rechazado', 'cancelado') THEN 'cancelado' ELSE estado END
        WHERE id = ?`,
    ).bind(estado, pedidoId),
  ]);
}

/**
 * Conecta la cuenta de Mercado Pago de un comercio.
 *
 * Se guarda el token que devuelve el intercambio de OAuth: es lo que permite
 * cobrar en su nombre. Nunca sale del servidor.
 */
export async function guardarCuentaComercio(env: Env, comercioId: string, codigo: string) {
  if (!env.MP_CLIENT_ID || !env.MP_CLIENT_SECRET) {
    return { ok: false as const, motivo: 'Falta configurar la aplicación de Mercado Pago.' };
  }

  const respuesta = await fetch(`${MP_API}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: env.MP_CLIENT_ID,
      client_secret: env.MP_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: codigo,
      redirect_uri: `${env.API_PUBLIC_URL || ''}/pagos/conectar/vuelta`,
    }),
  });

  if (!respuesta.ok) {
    console.warn('No se pudo conectar la cuenta', await respuesta.text());

    return { ok: false as const, motivo: 'No pudimos conectar tu cuenta de Mercado Pago.' };
  }

  const datos = (await respuesta.json()) as {
    access_token: string;
    refresh_token: string;
    user_id: number;
    expires_in: number;
  };

  await env.DB.prepare(
    `UPDATE comercios
        SET mp_usuario_id = ?, mp_access_token = ?, mp_refresh_token = ?, mp_expira_en = ?
      WHERE id = ?`,
  )
    .bind(
      String(datos.user_id),
      datos.access_token,
      datos.refresh_token,
      new Date(Date.now() + datos.expires_in * 1000).toISOString(),
      comercioId,
    )
    .run();

  return { ok: true as const };
}
