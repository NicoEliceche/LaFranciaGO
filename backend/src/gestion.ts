/**
 * El sistema de gestión del comercio.
 *
 * Tres cosas que la aplicación no resolvía: cuánto se gana de verdad (que
 * necesita el costo), cuánta plata hay en el cajón (la caja), y qué se
 * vendió en el mostrador a gente que no usa la aplicación (las ventas).
 *
 * Todo el dinero viaja en centavos enteros. Las cantidades en milésimos,
 * para poder vender 0,250 kg sin arrastrar errores de coma flotante.
 */
import type { Env, UsuarioSesion } from './lib';
import { error, json, nuevoId } from './lib';
import { descontarStock } from './comercio';

/* ── Caja ── */

export interface CajaAbierta {
  id: string;
  inicial_centavos: number;
  abierta_en: string;
}

/** La caja abierta del comercio, si hay alguna. */
export async function cajaAbierta(env: Env, comercioId: string) {
  return env.DB.prepare(
    "SELECT id, inicial_centavos, abierta_en FROM cajas WHERE comercio_id = ? AND estado = 'abierta'",
  )
    .bind(comercioId)
    .first<CajaAbierta>();
}

/**
 * Cuánto efectivo debería haber en el cajón ahora.
 *
 * Es lo que entró menos lo que salió, arrancando de lo que había al abrir.
 * Sólo cuenta el efectivo: una venta cobrada por transferencia nunca pasa
 * por el cajón, así que no puede aparecer en el arqueo.
 */
export async function esperadoEnCaja(env: Env, cajaId: string, inicial: number) {
  const fila = await env.DB.prepare(
    'SELECT COALESCE(SUM(monto_centavos), 0) AS suma FROM caja_movimientos WHERE caja_id = ?',
  )
    .bind(cajaId)
    .first<{ suma: number }>();

  return inicial + (fila?.suma ?? 0);
}

/** Registra un movimiento del cajón. */
export async function anotarMovimiento(
  env: Env,
  datos: {
    cajaId: string;
    tipo: 'venta' | 'retiro' | 'deposito' | 'egreso' | 'ajuste';
    montoCentavos: number;
    concepto?: string | null;
    ventaId?: string | null;
    usuarioId: string;
  },
) {
  const id = nuevoId();

  await env.DB.prepare(
    `INSERT INTO caja_movimientos (id, caja_id, tipo, monto_centavos, concepto, venta_id, creado_por)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id,
      datos.cajaId,
      datos.tipo,
      datos.montoCentavos,
      datos.concepto ?? null,
      datos.ventaId ?? null,
      datos.usuarioId,
    )
    .run();

  return id;
}

/* ── Ventas ── */

export interface ItemPedido {
  productoId?: string | null;
  nombre?: string;
  /** En milésimos: 1000 es una unidad, 250 es un cuarto de kilo. */
  cantidadMilesimos: number;
  precioCentavos?: number;
}

export interface PagoPedido {
  metodo: 'efectivo' | 'transferencia' | 'tarjeta' | 'cheque' | 'cuenta_corriente';
  montoCentavos: number;
  nota?: string | null;
}

const METODOS = ['efectivo', 'transferencia', 'tarjeta', 'cheque', 'cuenta_corriente'];

/**
 * El próximo número de venta del comercio.
 *
 * Se cuenta desde el último y no desde la cantidad de filas: si se anula una
 * venta la fila sigue estando, y contar filas repetiría números.
 */
export async function proximoNumero(env: Env, comercioId: string) {
  const fila = await env.DB.prepare(
    'SELECT COALESCE(MAX(numero), 0) AS ultimo FROM ventas WHERE comercio_id = ?',
  )
    .bind(comercioId)
    .first<{ ultimo: number }>();

  return (fila?.ultimo ?? 0) + 1;
}

interface LineaResuelta {
  productoId: string | null;
  nombre: string;
  cantidadMilesimos: number;
  precioCentavos: number;
  costoCentavos: number;
  subtotalCentavos: number;
}

/**
 * Convierte lo que pidió el mostrador en líneas con precio y costo.
 *
 * El precio y el costo se copian del producto en este momento y quedan
 * congelados en la venta: el comprobante de ayer tiene que seguir diciendo
 * lo que decía ayer, aunque hoy el producto valga otra cosa.
 */
export async function resolverLineas(
  env: Env,
  comercioId: string,
  items: ItemPedido[],
): Promise<{ lineas: LineaResuelta[] } | { error: string }> {
  if (!Array.isArray(items) || items.length === 0) {
    return { error: 'La venta no tiene productos' };
  }

  const lineas: LineaResuelta[] = [];

  for (const item of items) {
    const cantidad = Number(item.cantidadMilesimos);

    if (!Number.isFinite(cantidad) || cantidad <= 0) {
      return { error: 'Cantidad inválida' };
    }

    /* Sin producto es una línea suelta: algo que se cobra pero no está en el
       catálogo. Necesita nombre y precio escritos a mano. */
    if (!item.productoId) {
      const precio = Number(item.precioCentavos);

      if (!item.nombre || !Number.isFinite(precio) || precio < 0) {
        return { error: 'Una línea sin producto necesita nombre y precio' };
      }

      lineas.push({
        productoId: null,
        nombre: String(item.nombre).slice(0, 120),
        cantidadMilesimos: cantidad,
        precioCentavos: Math.round(precio),
        costoCentavos: 0,
        subtotalCentavos: Math.round((precio * cantidad) / 1000),
      });
      continue;
    }

    const producto = await env.DB.prepare(
      `SELECT id, nombre, precio_centavos, costo_centavos, stock
         FROM productos WHERE id = ? AND comercio_id = ?`,
    )
      .bind(item.productoId, comercioId)
      .first<{
        id: string;
        nombre: string;
        precio_centavos: number;
        costo_centavos: number | null;
        stock: number | null;
      }>();

    if (!producto) {
      return { error: 'Ese producto no es de este comercio' };
    }

    /* El mostrador puede cobrar distinto del precio de lista: un redondeo,
       un arreglo con el cliente. Si no dice nada, vale el de lista. */
    const precio = Number.isFinite(Number(item.precioCentavos))
      ? Math.round(Number(item.precioCentavos))
      : producto.precio_centavos;

    const costo = producto.costo_centavos ?? 0;

    lineas.push({
      productoId: producto.id,
      nombre: producto.nombre,
      cantidadMilesimos: cantidad,
      precioCentavos: precio,
      costoCentavos: Math.round((costo * cantidad) / 1000),
      subtotalCentavos: Math.round((precio * cantidad) / 1000),
    });
  }

  return { lineas };
}

export function validarPagos(pagos: unknown): { pagos: PagoPedido[] } | { error: string } {
  if (!Array.isArray(pagos)) return { pagos: [] };

  const limpios: PagoPedido[] = [];

  for (const pago of pagos) {
    const monto = Number((pago as PagoPedido)?.montoCentavos);
    const metodo = String((pago as PagoPedido)?.metodo ?? '');

    if (!METODOS.includes(metodo)) {
      return { error: 'Forma de pago desconocida' };
    }

    if (!Number.isFinite(monto) || monto <= 0) {
      return { error: 'El importe del pago tiene que ser mayor a cero' };
    }

    limpios.push({
      metodo: metodo as PagoPedido['metodo'],
      montoCentavos: Math.round(monto),
      nota: (pago as PagoPedido)?.nota ?? null,
    });
  }

  return { pagos: limpios };
}

/* ── Rutas ── */

interface Contexto {
  env: Env;
  usuario: UsuarioSesion;
  comercioId: string;
  cors: Record<string, string>;
}

/**
 * Atiende todo lo que cuelga de /gestion.
 *
 * Devuelve null cuando la ruta no es de acá, para que el enrutador principal
 * siga buscando.
 */
export async function rutasGestion(
  ruta: string,
  metodo: string,
  request: Request,
  ctx: Contexto,
): Promise<Response | null> {
  const { env, usuario, comercioId, cors } = ctx;

  /* ── Estado de la caja ── */

  if (ruta === '/gestion/caja' && metodo === 'GET') {
    const caja = await cajaAbierta(env, comercioId);

    if (!caja) {
      const { results: ultimas } = await env.DB.prepare(
        `SELECT id, inicial_centavos, contado_centavos, esperado_centavos,
                diferencia_centavos, abierta_en, cerrada_en
           FROM cajas WHERE comercio_id = ? AND estado = 'cerrada'
          ORDER BY cerrada_en DESC LIMIT 10`,
      )
        .bind(comercioId)
        .all();

      return json({ caja: null, anteriores: ultimas }, {}, cors);
    }

    const esperado = await esperadoEnCaja(env, caja.id, caja.inicial_centavos);

    const { results: movimientos } = await env.DB.prepare(
      `SELECT m.id, m.tipo, m.monto_centavos, m.concepto, m.venta_id, m.creado_en,
              u.nombre AS creado_por_nombre
         FROM caja_movimientos m
         JOIN usuarios u ON u.id = m.creado_por
        WHERE m.caja_id = ?
        ORDER BY m.creado_en DESC`,
    )
      .bind(caja.id)
      .all();

    return json({ caja: { ...caja, esperado_centavos: esperado }, movimientos }, {}, cors);
  }

  /* ── Abrir la caja ── */

  if (ruta === '/gestion/caja/abrir' && metodo === 'POST') {
    const yaHay = await cajaAbierta(env, comercioId);

    if (yaHay) {
      return error('Ya tenés una caja abierta', 409, cors);
    }

    const cuerpo = (await request.json().catch(() => ({}))) as { inicialCentavos?: number };
    const inicial = Math.max(0, Math.round(Number(cuerpo.inicialCentavos ?? 0)));

    if (!Number.isFinite(inicial)) {
      return error('El monto inicial no es válido', 400, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      'INSERT INTO cajas (id, comercio_id, abierta_por, inicial_centavos) VALUES (?, ?, ?, ?)',
    )
      .bind(id, comercioId, usuario.id, inicial)
      .run();

    return json({ id, inicial_centavos: inicial }, { status: 201 }, cors);
  }

  /* ── Movimientos del cajón ── */

  if (ruta === '/gestion/caja/movimiento' && metodo === 'POST') {
    const caja = await cajaAbierta(env, comercioId);

    if (!caja) {
      return error('No hay una caja abierta', 409, cors);
    }

    const cuerpo = (await request.json().catch(() => ({}))) as {
      tipo?: string;
      montoCentavos?: number;
      concepto?: string;
    };

    const tipo = String(cuerpo.tipo ?? '');
    const monto = Math.round(Number(cuerpo.montoCentavos));

    if (!['retiro', 'deposito', 'egreso', 'ajuste'].includes(tipo)) {
      return error('Ese tipo de movimiento no existe', 400, cors);
    }

    if (!Number.isFinite(monto) || monto <= 0) {
      return error('El monto tiene que ser mayor a cero', 400, cors);
    }

    /* Lo que sale del cajón se guarda en negativo: así la suma de la columna
       es directamente lo que hay, sin preguntarse qué tipo resta. */
    const conSigno = tipo === 'deposito' ? monto : -monto;

    const id = await anotarMovimiento(env, {
      cajaId: caja.id,
      tipo: tipo as 'retiro' | 'deposito' | 'egreso' | 'ajuste',
      montoCentavos: tipo === 'ajuste' ? monto : conSigno,
      concepto: cuerpo.concepto ?? null,
      usuarioId: usuario.id,
    });

    const esperado = await esperadoEnCaja(env, caja.id, caja.inicial_centavos);

    return json({ id, esperado_centavos: esperado }, { status: 201 }, cors);
  }

  /* ── Cerrar la caja ── */

  if (ruta === '/gestion/caja/cerrar' && metodo === 'POST') {
    const caja = await cajaAbierta(env, comercioId);

    if (!caja) {
      return error('No hay una caja abierta', 409, cors);
    }

    const cuerpo = (await request.json().catch(() => ({}))) as {
      contadoCentavos?: number;
      nota?: string;
    };

    const contado = Math.round(Number(cuerpo.contadoCentavos));

    if (!Number.isFinite(contado) || contado < 0) {
      return error('Contá el efectivo antes de cerrar', 400, cors);
    }

    const esperado = await esperadoEnCaja(env, caja.id, caja.inicial_centavos);

    await env.DB.prepare(
      `UPDATE cajas
          SET estado = 'cerrada', cerrada_por = ?, cerrada_en = datetime('now'),
              contado_centavos = ?, esperado_centavos = ?, diferencia_centavos = ?, nota = ?
        WHERE id = ?`,
    )
      .bind(usuario.id, contado, esperado, contado - esperado, cuerpo.nota ?? null, caja.id)
      .run();

    return json(
      {
        contado_centavos: contado,
        esperado_centavos: esperado,
        diferencia_centavos: contado - esperado,
      },
      {},
      cors,
    );
  }

  /* ── Listado de ventas ── */

  if (ruta.startsWith('/gestion/ventas') && metodo === 'GET' && ruta === '/gestion/ventas') {
    const url = new URL(request.url);
    const desde = url.searchParams.get('desde');
    const hasta = url.searchParams.get('hasta');
    const estadoPago = url.searchParams.get('pago');
    const busqueda = url.searchParams.get('q');
    const pagina = Math.max(1, Number(url.searchParams.get('pagina') ?? 1));
    const porPagina = Math.min(100, Math.max(5, Number(url.searchParams.get('porPagina') ?? 25)));

    const condiciones = ['v.comercio_id = ?'];
    const valores: unknown[] = [comercioId];

    if (desde) {
      condiciones.push('v.creado_en >= ?');
      valores.push(desde);
    }

    if (hasta) {
      /* El filtro llega como fecha; se cubre todo ese día. */
      condiciones.push('v.creado_en <= ?');
      valores.push(`${hasta} 23:59:59`);
    }

    if (estadoPago === 'cobrada') {
      condiciones.push('v.cobrado_centavos >= v.total_centavos');
    } else if (estadoPago === 'debe') {
      condiciones.push('v.cobrado_centavos < v.total_centavos');
    }

    if (busqueda) {
      condiciones.push('(v.cliente_nombre LIKE ? OR CAST(v.numero AS TEXT) LIKE ?)');
      valores.push(`%${busqueda}%`, `%${busqueda}%`);
    }

    const donde = condiciones.join(' AND ');

    /* Los totales se calculan sobre el filtro, no sobre todo el negocio: es
       lo que hace que el número de arriba explique la tabla de abajo. */
    const totales = await env.DB.prepare(
      `SELECT COUNT(*) AS cantidad,
              COALESCE(SUM(v.total_centavos), 0) AS total,
              COALESCE(SUM(v.cobrado_centavos), 0) AS cobrado,
              COALESCE(SUM(v.total_centavos - v.cobrado_centavos), 0) AS adeudado,
              COALESCE(SUM(v.total_centavos - v.costo_centavos), 0) AS ganancia
         FROM ventas v
        WHERE ${donde} AND v.estado = 'abierta'`,
    )
      .bind(...valores)
      .first<{
        cantidad: number;
        total: number;
        cobrado: number;
        adeudado: number;
        ganancia: number;
      }>();

    const { results: ventas } = await env.DB.prepare(
      `SELECT v.id, v.numero, v.cliente_nombre, v.total_centavos, v.cobrado_centavos,
              v.costo_centavos, v.descuento_centavos, v.estado, v.creado_en,
              u.nombre AS vendedor_nombre,
              (SELECT COUNT(*) FROM venta_items i WHERE i.venta_id = v.id) AS items,
              (SELECT GROUP_CONCAT(DISTINCT p.metodo) FROM venta_pagos p WHERE p.venta_id = v.id) AS metodos
         FROM ventas v
         JOIN usuarios u ON u.id = v.vendedor_id
        WHERE ${donde}
        ORDER BY v.creado_en DESC
        LIMIT ? OFFSET ?`,
    )
      .bind(...valores, porPagina, (pagina - 1) * porPagina)
      .all();

    return json({ ventas, totales, pagina, porPagina }, {}, cors);
  }

  /* ── Crear una venta ── */

  if (ruta === '/gestion/ventas' && metodo === 'POST') {
    const cuerpo = (await request.json().catch(() => ({}))) as {
      items?: ItemPedido[];
      pagos?: PagoPedido[];
      clienteNombre?: string;
      clienteId?: string;
      cuentaFiadoId?: string;
      descuentoCentavos?: number;
      nota?: string;
    };

    const resueltas = await resolverLineas(env, comercioId, cuerpo.items ?? []);

    if ('error' in resueltas) {
      return error(resueltas.error, 400, cors);
    }

    const pagosLimpios = validarPagos(cuerpo.pagos);

    if ('error' in pagosLimpios) {
      return error(pagosLimpios.error, 400, cors);
    }

    const { lineas } = resueltas;
    const descuento = Math.max(0, Math.round(Number(cuerpo.descuentoCentavos ?? 0)));
    const bruto = lineas.reduce((suma, l) => suma + l.subtotalCentavos, 0);
    const total = Math.max(0, bruto - descuento);
    const costo = lineas.reduce((suma, l) => suma + l.costoCentavos, 0);
    const cobrado = pagosLimpios.pagos.reduce((suma, p) => suma + p.montoCentavos, 0);

    if (cobrado > total) {
      return error('Estás cobrando más que el total de la venta', 400, cors);
    }

    /* Si hay un pago fiado tiene que decir a quién: "fiado" sin cuenta es
       plata que sale del negocio y no queda anotada en ningún lado. */
    const hayFiado = pagosLimpios.pagos.some((p) => p.metodo === 'cuenta_corriente');
    let cuentaFiado: { id: string; nombre: string } | null = null;

    if (hayFiado || cuerpo.cuentaFiadoId) {
      if (!cuerpo.cuentaFiadoId) {
        return error('Decí a qué cuenta se le fía', 400, cors);
      }

      cuentaFiado = await env.DB.prepare(
        "SELECT id, nombre FROM cuentas_fiado WHERE id = ? AND comercio_id = ? AND activa = 1",
      )
        .bind(cuerpo.cuentaFiadoId, comercioId)
        .first<{ id: string; nombre: string }>();

      if (!cuentaFiado) {
        return error('Esa cuenta de fiado no existe', 404, cors);
      }
    }

    const caja = await cajaAbierta(env, comercioId);
    const id = nuevoId();
    const numero = await proximoNumero(env, comercioId);

    await env.DB.prepare(
      `INSERT INTO ventas (id, comercio_id, numero, cliente_id, cliente_nombre, caja_id,
                           vendedor_id, total_centavos, descuento_centavos, costo_centavos,
                           cobrado_centavos, nota, cuenta_fiado_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        id,
        comercioId,
        numero,
        cuerpo.clienteId ?? null,
        cuerpo.clienteNombre ?? null,
        caja?.id ?? null,
        usuario.id,
        total,
        descuento,
        costo,
        cobrado,
        cuerpo.nota ?? null,
        cuentaFiado?.id ?? null,
      )
      .run();

    for (const linea of lineas) {
      await env.DB.prepare(
        `INSERT INTO venta_items (id, venta_id, producto_id, nombre, cantidad_milesimos,
                                  precio_centavos, costo_centavos, subtotal_centavos)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
        .bind(
          nuevoId(),
          id,
          linea.productoId,
          linea.nombre,
          linea.cantidadMilesimos,
          linea.precioCentavos,
          linea.costoCentavos,
          linea.subtotalCentavos,
        )
        .run();
    }

    for (const pago of pagosLimpios.pagos) {
      await env.DB.prepare(
        'INSERT INTO venta_pagos (id, venta_id, metodo, monto_centavos, nota, creado_por) VALUES (?, ?, ?, ?, ?, ?)',
      )
        .bind(nuevoId(), id, pago.metodo, pago.montoCentavos, pago.nota ?? null, usuario.id)
        .run();

      /* Sólo el efectivo toca el cajón: lo que se cobra por transferencia o
         tarjeta va al banco y nunca pasa por la caja. */
      if (pago.metodo === 'efectivo' && caja) {
        await anotarMovimiento(env, {
          cajaId: caja.id,
          tipo: 'venta',
          montoCentavos: pago.montoCentavos,
          concepto: `Venta #${numero}`,
          ventaId: id,
          usuarioId: usuario.id,
        });
      }

      /* Lo fiado no entra al cajón —no hay plata— pero queda anotado en la
         cuenta. Es lo que hace que la caja cierre cuando alguien se lleva
         mercadería sin pagar: el sistema sabe que salió y a nombre de quién,
         y a la persona del mostrador no le falta plata. */
      if (pago.metodo === 'cuenta_corriente' && cuentaFiado) {
        await env.DB.prepare(
          `INSERT INTO fiado_movimientos (id, cuenta_id, monto_centavos, concepto, venta_id, caja_id, metodo, creado_por)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        )
          .bind(
            nuevoId(),
            cuentaFiado.id,
            pago.montoCentavos,
            `Venta #${numero}`,
            id,
            caja?.id ?? null,
            'cuenta_corriente',
            usuario.id,
          )
          .run();
      }
    }

    /* El stock se lleva en unidades enteras: media docena de facturas
       descuenta una unidad del paquete, no media. */
    await descontarStock(
      env,
      lineas
        .filter((l) => l.productoId)
        .map((l) => ({
          productoId: l.productoId as string,
          unidades: Math.ceil(l.cantidadMilesimos / 1000),
        })),
    );

    return json({ id, numero, total_centavos: total, costo_centavos: costo }, { status: 201 }, cors);
  }

  /* ── Detalle de una venta ── */

  const detalle = /^\/gestion\/ventas\/([\w-]+)$/.exec(ruta);

  if (detalle && metodo === 'GET') {
    const venta = await env.DB.prepare(
      `SELECT v.*, u.nombre AS vendedor_nombre
         FROM ventas v JOIN usuarios u ON u.id = v.vendedor_id
        WHERE v.id = ? AND v.comercio_id = ?`,
    )
      .bind(detalle[1], comercioId)
      .first();

    if (!venta) {
      return error('Esa venta no existe', 404, cors);
    }

    const { results: items } = await env.DB.prepare(
      'SELECT * FROM venta_items WHERE venta_id = ?',
    )
      .bind(detalle[1])
      .all();

    const { results: pagos } = await env.DB.prepare(
      `SELECT p.*, u.nombre AS creado_por_nombre
         FROM venta_pagos p JOIN usuarios u ON u.id = p.creado_por
        WHERE p.venta_id = ? ORDER BY p.creado_en`,
    )
      .bind(detalle[1])
      .all();

    return json({ venta, items, pagos }, {}, cors);
  }

  /* ── Cobrar lo que quedó debiendo ── */

  const cobrar = /^\/gestion\/ventas\/([\w-]+)\/pagos$/.exec(ruta);

  if (cobrar && metodo === 'POST') {
    const venta = await env.DB.prepare(
      'SELECT id, numero, total_centavos, cobrado_centavos FROM ventas WHERE id = ? AND comercio_id = ?',
    )
      .bind(cobrar[1], comercioId)
      .first<{ id: string; numero: number; total_centavos: number; cobrado_centavos: number }>();

    if (!venta) {
      return error('Esa venta no existe', 404, cors);
    }

    const cuerpo = (await request.json().catch(() => ({}))) as PagoPedido;
    const limpios = validarPagos([cuerpo]);

    if ('error' in limpios) {
      return error(limpios.error, 400, cors);
    }

    const pago = limpios.pagos[0];
    const falta = venta.total_centavos - venta.cobrado_centavos;

    if (pago.montoCentavos > falta) {
      return error('Ese importe es mayor a lo que falta cobrar', 400, cors);
    }

    await env.DB.prepare(
      'INSERT INTO venta_pagos (id, venta_id, metodo, monto_centavos, nota, creado_por) VALUES (?, ?, ?, ?, ?, ?)',
    )
      .bind(nuevoId(), venta.id, pago.metodo, pago.montoCentavos, pago.nota ?? null, usuario.id)
      .run();

    await env.DB.prepare(
      'UPDATE ventas SET cobrado_centavos = cobrado_centavos + ? WHERE id = ?',
    )
      .bind(pago.montoCentavos, venta.id)
      .run();

    const caja = await cajaAbierta(env, comercioId);

    if (pago.metodo === 'efectivo' && caja) {
      await anotarMovimiento(env, {
        cajaId: caja.id,
        tipo: 'venta',
        montoCentavos: pago.montoCentavos,
        concepto: `Cobro venta #${venta.numero}`,
        ventaId: venta.id,
        usuarioId: usuario.id,
      });
    }

    return json({ cobrado_centavos: venta.cobrado_centavos + pago.montoCentavos }, {}, cors);
  }

  /* ── Fiado ── */

  if (ruta === '/gestion/fiado' && metodo === 'GET') {
    /* El saldo sale de sumar los movimientos y no de un campo guardado: con
       un campo hay dos verdades posibles, y la que se desactualiza es
       siempre la que mira el comercio. */
    const { results } = await env.DB.prepare(
      `SELECT c.id, c.nombre, c.telefono, c.nota, c.tope_centavos, c.activa,
              COALESCE((SELECT SUM(m.monto_centavos) FROM fiado_movimientos m
                         WHERE m.cuenta_id = c.id), 0) AS saldo_centavos,
              (SELECT MAX(m.creado_en) FROM fiado_movimientos m
                WHERE m.cuenta_id = c.id) AS ultimo_movimiento
         FROM cuentas_fiado c
        WHERE c.comercio_id = ?
        ORDER BY c.activa DESC, saldo_centavos DESC, c.nombre`,
    )
      .bind(comercioId)
      .all();

    const total = results.reduce(
      (suma, fila) => suma + Number((fila as { saldo_centavos: number }).saldo_centavos),
      0,
    );

    return json({ cuentas: results, totalAdeudado: total }, {}, cors);
  }

  if (ruta === '/gestion/fiado' && metodo === 'POST') {
    const cuerpo = (await request.json().catch(() => ({}))) as {
      nombre?: string;
      telefono?: string;
      nota?: string;
      topeCentavos?: number | null;
    };

    const nombre = String(cuerpo.nombre ?? '').trim();

    if (nombre.length < 2) {
      return error('Poné un nombre para la cuenta', 400, cors);
    }

    const id = nuevoId();

    await env.DB.prepare(
      'INSERT INTO cuentas_fiado (id, comercio_id, nombre, telefono, nota, tope_centavos) VALUES (?, ?, ?, ?, ?, ?)',
    )
      .bind(
        id,
        comercioId,
        nombre,
        cuerpo.telefono ?? null,
        cuerpo.nota ?? null,
        cuerpo.topeCentavos ?? null,
      )
      .run();

    return json({ id, nombre }, { status: 201 }, cors);
  }

  /* ── Detalle de una cuenta, con su historial ── */

  const cuentaDetalle = /^\/gestion\/fiado\/([\w-]+)$/.exec(ruta);

  if (cuentaDetalle && metodo === 'GET') {
    const cuenta = await env.DB.prepare(
      'SELECT * FROM cuentas_fiado WHERE id = ? AND comercio_id = ?',
    )
      .bind(cuentaDetalle[1], comercioId)
      .first();

    if (!cuenta) {
      return error('Esa cuenta no existe', 404, cors);
    }

    const { results: movimientos } = await env.DB.prepare(
      `SELECT m.id, m.monto_centavos, m.concepto, m.venta_id, m.metodo, m.creado_en,
              u.nombre AS creado_por_nombre, v.numero AS venta_numero
         FROM fiado_movimientos m
         JOIN usuarios u ON u.id = m.creado_por
         LEFT JOIN ventas v ON v.id = m.venta_id
        WHERE m.cuenta_id = ?
        ORDER BY m.creado_en DESC`,
    )
      .bind(cuentaDetalle[1])
      .all();

    const saldo = movimientos.reduce(
      (suma, fila) => suma + Number((fila as { monto_centavos: number }).monto_centavos),
      0,
    );

    return json({ cuenta: { ...cuenta, saldo_centavos: saldo }, movimientos }, {}, cors);
  }

  /* ── Cobrar lo que debe una cuenta ── */

  const cobrarFiado = /^\/gestion\/fiado\/([\w-]+)\/pagos$/.exec(ruta);

  if (cobrarFiado && metodo === 'POST') {
    const cuenta = await env.DB.prepare(
      'SELECT id, nombre FROM cuentas_fiado WHERE id = ? AND comercio_id = ?',
    )
      .bind(cobrarFiado[1], comercioId)
      .first<{ id: string; nombre: string }>();

    if (!cuenta) {
      return error('Esa cuenta no existe', 404, cors);
    }

    const cuerpo = (await request.json().catch(() => ({}))) as {
      montoCentavos?: number;
      metodo?: string;
      concepto?: string;
    };

    const monto = Math.round(Number(cuerpo.montoCentavos));
    const formaPago = String(cuerpo.metodo ?? 'efectivo');

    if (!Number.isFinite(monto) || monto <= 0) {
      return error('El importe tiene que ser mayor a cero', 400, cors);
    }

    if (!METODOS.includes(formaPago)) {
      return error('Forma de pago desconocida', 400, cors);
    }

    const caja = await cajaAbierta(env, comercioId);

    await env.DB.prepare(
      `INSERT INTO fiado_movimientos (id, cuenta_id, monto_centavos, concepto, caja_id, metodo, creado_por)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        nuevoId(),
        cuenta.id,
        /* Negativo: lo que paga baja lo que debe. */
        -monto,
        cuerpo.concepto ?? `Pago de ${cuenta.nombre}`,
        caja?.id ?? null,
        formaPago,
        usuario.id,
      )
      .run();

    /* El pago en efectivo entra al cajón; el resto va al banco. */
    if (formaPago === 'efectivo' && caja) {
      await anotarMovimiento(env, {
        cajaId: caja.id,
        tipo: 'venta',
        montoCentavos: monto,
        concepto: `Cobro de ${cuenta.nombre}`,
        usuarioId: usuario.id,
      });
    }

    const fila = await env.DB.prepare(
      'SELECT COALESCE(SUM(monto_centavos), 0) AS saldo FROM fiado_movimientos WHERE cuenta_id = ?',
    )
      .bind(cuenta.id)
      .first<{ saldo: number }>();

    return json({ saldo_centavos: fila?.saldo ?? 0 }, {}, cors);
  }

  /* ── Buscar producto para el mostrador ── */

  if (ruta === '/gestion/buscar' && metodo === 'GET') {
    const termino = new URL(request.url).searchParams.get('q')?.trim() ?? '';

    if (termino.length < 2) {
      return json({ productos: [] }, {}, cors);
    }

    /* El código de barras se compara entero: la pistola manda el código
       completo y una coincidencia parcial traería el producto equivocado. */
    const { results } = await env.DB.prepare(
      `SELECT id, nombre, precio_centavos, costo_centavos, stock, codigo_barras, unidad_venta
         FROM productos
        WHERE comercio_id = ? AND activo = 1
          AND (codigo_barras = ? OR nombre LIKE ?)
        ORDER BY CASE WHEN codigo_barras = ? THEN 0 ELSE 1 END, nombre
        LIMIT 20`,
    )
      .bind(comercioId, termino, `%${termino}%`, termino)
      .all();

    return json({ productos: results }, {}, cors);
  }

  return null;
}
