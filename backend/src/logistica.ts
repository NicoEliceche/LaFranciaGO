import type { Env } from './lib';

/**
 * Qué entra en cada vehículo.
 *
 * El problema que resuelve: un repartidor en moto no puede llevar cualquier
 * pedido, y hasta ahora la app no tenía cómo saberlo. Sin este cálculo, o el
 * repartidor acepta viajes que no puede hacer, o fracciona los que sí podía
 * para cobrar dos veces.
 */

/* Cuánto ocupa cada tamaño, en litros.
 *
 * Son estimaciones, no medidas: nadie va a medir un paquete de fideos. Con
 * cuatro escalones alcanza para decidir si hace falta un auto, que es la
 * única pregunta que la app necesita responder. */
export const LITROS_POR_TAMANO: Record<string, number> = {
  chico: 2,
  mediano: 6,
  grande: 15,
  voluminoso: 40,
};

/**
 * Capacidad de cada vehículo, en litros.
 *
 * La moto sale de la caja de reparto estándar: las que se usan hoy son de 62
 * a 65 litros (unos 50 × 37 × 37 cm), con 20 kg de carga máxima. Se toman 60
 * porque la capacidad nominal nunca se aprovecha entera: las cosas no encajan
 * perfecto y algo de aire queda siempre.
 *
 * El auto es el baúl más el asiento trasero, redondeado para abajo.
 */
export const CAPACIDAD: Record<string, number> = {
  moto: 60,
  auto: 400,
  camioneta: 2500,
  camion: 12000,
};

/** Qué vehículo corresponde a cada rol. */
export const VEHICULOS_POR_ROL: Record<string, string[]> = {
  delivery: ['moto', 'auto'],
  fletero: ['camioneta', 'camion'],
};

export const NOMBRE_VEHICULO: Record<string, string> = {
  moto: 'Moto',
  auto: 'Auto',
  camioneta: 'Camioneta',
  camion: 'Camión',
};

/**
 * Cuántos litros ocupa un pedido.
 *
 * El escalón multiplica: llevar tres gaseosas ocupa el triple que una. Para
 * los productos por peso el escalón es una fracción de kilo, así que se usa
 * el factor tal cual —medio kilo de pan ocupa la mitad que un kilo.
 */
export function litrosDeItems(
  items: Array<{ tamano: string; unidad_venta: string; escalon: number }>,
) {
  return items.reduce((total, item) => {
    const base = LITROS_POR_TAMANO[item.tamano] ?? LITROS_POR_TAMANO.mediano;
    const cantidad = factorCantidad(item.unidad_venta, item.escalon);

    return total + base * cantidad;
  }, 0);
}

/* Cuántas veces entra el producto en el pedido. Por unidad, el escalón 0 es
   una unidad; por peso, es un cuarto de kilo. */
function factorCantidad(unidad: string, escalon: number) {
  if (unidad === 'peso') {
    return (escalon + 1) * 0.25;
  }

  if (unidad === 'pesoMedio') {
    return (escalon + 1) * 0.5;
  }

  return escalon + 1;
}

/** En cuántos viajes entra un pedido con ese vehículo. */
export function viajesNecesarios(litros: number, vehiculo: string) {
  const capacidad = CAPACIDAD[vehiculo] ?? CAPACIDAD.moto;

  return Math.max(1, Math.ceil(litros / capacidad));
}

/** Si un pedido entra de una sola vez en ese vehículo. */
export function entraDeUnaVez(litros: number, vehiculo: string) {
  return viajesNecesarios(litros, vehiculo) === 1;
}

/**
 * Qué vehículos pueden llevar este pedido de una sola vez.
 *
 * Es lo que se le muestra al cliente en el carrito: si su pedido sólo entra
 * en un auto, tiene que saber que va a esperar más, o que le va a llegar
 * en partes.
 */
export function vehiculosQueEntran(litros: number, rol: 'delivery' | 'fletero' = 'delivery') {
  return (VEHICULOS_POR_ROL[rol] ?? []).filter((vehiculo) => entraDeUnaVez(litros, vehiculo));
}

/**
 * El volumen de un pedido ya guardado.
 *
 * Se recalcula desde los productos porque el pedido guarda el nombre y el
 * precio de cada línea, pero el tamaño vive en el producto.
 */
export async function litrosDePedido(env: Env, pedidoId: string) {
  const { results } = await env.DB.prepare(
    `SELECT COALESCE(pr.tamano, 'mediano') AS tamano, pi.unidad_venta, pi.escalon
       FROM pedido_items pi
       LEFT JOIN productos pr ON pr.id = pi.producto_id
      WHERE pi.pedido_id = ?`,
  )
    .bind(pedidoId)
    .all<{ tamano: string; unidad_venta: string; escalon: number }>();

  return litrosDeItems(results);
}

/**
 * Tamaño sugerido para un producto nuevo.
 *
 * Se propone a partir del rubro y de cómo se vende, para que el comercio no
 * tenga que pensarlo en cada alta. Es una sugerencia: si el producto no se
 * parece al resto de su rubro, la corrige.
 */
export function tamanoSugerido(rubroId: string, unidadVenta: string) {
  /* Lo que se vende por peso se pide de a poco: un kilo de carne o de pan
     ocupa poco lugar. */
  if (unidadVenta === 'peso' || unidadVenta === 'pesoMedio') {
    return 'chico';
  }

  /* Una docena de facturas viene en caja. */
  if (unidadVenta === 'docena') {
    return 'mediano';
  }

  const POR_RUBRO: Record<string, string> = {
    bebidas: 'mediano',
    almacen: 'mediano',
    kiosco: 'chico',
    farmacia: 'chico',
    perfumeria: 'chico',
    panaderia: 'chico',
    verduleria: 'mediano',
    carniceria: 'chico',
    rotiseria: 'mediano',
    comida: 'mediano',
    ferreteria: 'grande',
    indumentaria: 'chico',
    regaleria: 'chico',
  };

  return POR_RUBRO[rubroId] ?? 'mediano';
}

/**
 * Reparte los items de un pedido entre varias entregas.
 *
 * Se ordena de mayor a menor y cada cosa va al viaje que tenga más lugar: es
 * la forma simple de que no quede una entrega con una sola caja enorme y otra
 * con todo lo demás.
 */
export function repartirEnPartes<T extends { litros: number }>(items: T[], partes: number) {
  const grupos: Array<{ items: T[]; litros: number }> = Array.from({ length: partes }, () => ({
    items: [],
    litros: 0,
  }));

  for (const item of [...items].sort((a, b) => b.litros - a.litros)) {
    const destino = grupos.reduce((menor, grupo) => (grupo.litros < menor.litros ? grupo : menor));

    destino.items.push(item);
    destino.litros += item.litros;
  }

  /* Sin items no hay entrega: si alguien pide más partes que productos, se
     devuelven sólo las que tienen algo. */
  return grupos.filter((grupo) => grupo.items.length > 0);
}
