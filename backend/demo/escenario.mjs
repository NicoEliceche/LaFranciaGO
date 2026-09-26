/**
 * Deja la aplicación con pedidos en todos los estados, para recorrer los
 * casos de prueba sin tener que fabricar la situación a mano.
 *
 * El problema que resuelve: casi todo lo interesante de esta aplicación pasa
 * entre dos cuentas. El cliente no puede probar "ver que el repartidor tomó
 * mi pedido" sin que un repartidor lo tome, y el repartidor no puede probar
 * "tomar un pedido" si no hay ninguno esperando. Armar eso a mano antes de
 * cada prueba lleva más tiempo que la prueba.
 *
 * Así que esto deja cinco pedidos, uno parado en cada paso del recorrido:
 *
 *   ESPERA      recién hecho, el comercio todavía no lo vio
 *   PREPARANDO  el comercio lo está armando
 *   LISTO       esperando que lo retire un repartidor
 *   CAMINO      el repartidor lo lleva, y comparte su ubicación
 *   SIN-GPS     el repartidor lo lleva, pero sin compartir ubicación
 *
 * Los dos últimos son el mismo caso con y sin ubicación, que es la variante
 * que hay que mirar en el seguimiento: uno muestra el punto en el mapa y el
 * otro el tiempo estimado.
 *
 * Todo se hace por la API, con las mismas llamadas que hace la aplicación:
 * escribir los pedidos por SQL dejaría estados que la aplicación nunca
 * produce, y la prueba estaría validando algo que no existe.
 *
 *   node demo/escenario.mjs              contra el backend de esta máquina
 *   node demo/escenario.mjs --remoto     contra el publicado
 *   node demo/escenario.mjs --limpiar    borra lo que dejó una corrida previa
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const REMOTO = process.argv.includes('--remoto');
const LIMPIAR = process.argv.includes('--limpiar');

const API =
  process.env.API_DEMO ??
  (REMOTO ? 'https://lafranciago-api.lafranciago-api.workers.dev' : 'http://127.0.0.1:8787');

const BASE = 'lafranciago';
const CLAVE = 'Demo2026!';

/* Con qué cuenta se hace cada cosa. */
const CLIENTE = 'cliente@lafrancia.ar';
const COMERCIO = 'gestion@lafrancia.ar';
const DELIVERY = 'delivery@lafrancia.ar';

/* Cómo se reconocen después los pedidos de esta siembra.


   Va en la dirección de entrega porque el pedido no tiene ningún campo
   libre donde dejar una marca, y la dirección se ve igual en pantalla. */
const MARCA = 'prueba';

/** Una coordenada dentro de La Francia, para la ubicación del repartidor. */
const EN_CAMINO = { lat: -31.0271, lon: -62.1108 };

/** A dónde se entrega: unas cuadras del comercio, para que el estimado dé
    un número creíble y el mapa tenga dos puntos separados. */
const DESTINO = { lat: -31.0305, lon: -62.1042 };

/** Dónde está el comercio, en el centro del pueblo. */
const COMERCIO_EN = { lat: -31.0262, lon: -62.1135 };

/** A dónde se entrega. Una dirección del pueblo, para que el mapa tenga
    algo que dibujar. */
const DIRECCION = `Av. San Martín 123, La Francia (${MARCA})`;

/* Lo mínimo para poder armar un pedido, si el comercio está vacío. Dos que
   se venden por unidad y uno por peso, para que el selector de cantidad
   muestre sus dos comportamientos. */
const PRODUCTOS = [
  { nombre: 'Fideos', precio: 1800, unidad: 'unidad' },
  { nombre: 'Yerba 1 kg', precio: 6500, unidad: 'unidad' },
  { nombre: 'Queso cremoso', precio: 9800, unidad: 'peso' },
];

function sql(consulta) {
  const salida = spawnSync(
    'npx',
    [
      'wrangler',
      'd1',
      'execute',
      BASE,
      REMOTO ? '--remote' : '--local',
      '--command',
      JSON.stringify(consulta),
      '--json',
    ],
    { encoding: 'utf8', shell: true, cwd: path.join(import.meta.dirname, '..') },
  );

  if (salida.status !== 0) {
    throw new Error(`falló la consulta: ${salida.stderr || salida.stdout}`);
  }

  const desde = salida.stdout.indexOf('[');

  return desde === -1
    ? []
    : JSON.parse(salida.stdout.slice(desde)).flatMap((bloque) => bloque.results ?? []);
}

/** Entra con una cuenta y devuelve con qué llamar a la API como ella. */
async function entrar(email) {
  const respuesta = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: CLAVE }),
  });

  if (!respuesta.ok) {
    throw new Error(`no se pudo entrar con ${email}: HTTP ${respuesta.status}`);
  }

  const { token } = await respuesta.json();

  return async (metodo, ruta, cuerpo) => {
    const r = await fetch(`${API}${ruta}`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: cuerpo ? JSON.stringify(cuerpo) : undefined,
    });

    const texto = await r.text();
    const datos = texto ? JSON.parse(texto) : {};

    if (!r.ok) {
      throw new Error(`${metodo} ${ruta} devolvió ${r.status}: ${datos.error ?? texto}`);
    }

    return datos;
  };
}

/* ── Limpieza ── */

/**
 * Borra lo que dejó una corrida anterior.
 *
 * Se corre siempre antes de sembrar: si no, cada ejecución deja otros cinco
 * pedidos y a la tercera prueba no se distingue cuál es el que importa.
 */
function limpiar() {
  const pedidos = sql(
    `SELECT id FROM pedidos WHERE direccion_texto LIKE '%(${MARCA})%'`,
  ).map((fila) => fila.id);

  if (pedidos.length === 0) {
    return 0;
  }

  const lista = pedidos.map((id) => `'${id}'`).join(',');

  /* En orden: lo que cuelga del pedido antes que el pedido. */
  sql(`DELETE FROM pedido_mensajes WHERE pedido_id IN (${lista})`);
  sql(`DELETE FROM envios WHERE pedido_id IN (${lista})`);
  sql(`DELETE FROM pedido_items WHERE pedido_id IN (${lista})`);
  sql(`DELETE FROM pedidos WHERE id IN (${lista})`);

  return pedidos.length;
}

/* ── Siembra ── */

/**
 * Arma un pedido del cliente al comercio de la demostración.
 *
 * `escalon: 0` es la cantidad más chica que se puede pedir de cada producto
 * —una unidad, un cuarto de kilo, media docena— según cómo se venda.
 */
async function crearPedido(comoCliente, comercioId, productos, direccionId) {
  return comoCliente('POST', '/pedidos', {
    comercioId,
    direccionId,
    direccionTexto: DIRECCION,
    metodoPago: 'efectivo',
    items: productos.map((producto) => ({ productoId: producto.id, escalon: 0 })),
    preferenciaEnvio: 'cualquiera',
  });
}

/**
 * La dirección del cliente, con coordenadas.
 *
 * Tiene que ser una dirección guardada y no un texto suelto: el mapa de
 * seguimiento saca el punto de destino de la tabla de direcciones, y sin él
 * no hay cómo dibujar el recorrido ni estimar cuánto falta.
 */
async function direccionDelCliente(comoCliente) {
  const { direcciones } = await comoCliente('GET', '/direcciones');
  const guardada = (direcciones ?? []).find((d) => d.lat && d.lon);

  if (guardada) {
    return guardada.id;
  }

  const { id } = await comoCliente('POST', '/direcciones', {
    etiqueta: 'Casa',
    direccion: DIRECCION,
    lat: DESTINO.lat,
    lon: DESTINO.lon,
    esPrincipal: true,
  });

  return id;
}

/** El id del envió de un pedido, que es lo que pide la ruta de estado. */
function envioDe(pedidoId) {
  const filas = sql(`SELECT id FROM envios WHERE pedido_id = '${pedidoId}'`);

  if (filas.length === 0) {
    throw new Error(`el pedido ${pedidoId} no tiene envío`);
  }

  return filas[0].id;
}

async function sembrar() {
  const comoCliente = await entrar(CLIENTE);
  const comoComercio = await entrar(COMERCIO);
  const comoDelivery = await entrar(DELIVERY);

  /* Los productos salen del catálogo real del comercio: inventarlos acá
     dejaría pedidos apuntando a cosas que no están a la venta. */
  const { comercio, productos } = await comoComercio('GET', '/mi-comercio');

  if (!comercio) {
    throw new Error('la cuenta de comercio no tiene comercio; corré demo/cuentas.mjs');
  }

  /* Si el comercio no tiene nada a la venta no hay pedido posible, así que
     se cargan unos pocos productos. Se crean por la API, con los mismos
     campos que usa el formulario del panel. */
  let catalogo = productos ?? [];

  if (catalogo.length < 2) {
    for (const producto of PRODUCTOS) {
      await comoComercio('POST', '/productos', {
        comercioId: comercio.id,
        nombre: `${producto.nombre} (${MARCA})`,
        precio: producto.precio,
        unidadVenta: producto.unidad,
        stock: 50,
      });
    }

    const recargado = await comoComercio('GET', '/mi-comercio');
    catalogo = recargado.productos ?? [];
  }

  if (catalogo.length < 2) {
    throw new Error('no se pudieron cargar productos en el comercio');
  }

  const dos = catalogo.slice(0, 2);
  const uno = catalogo.slice(0, 1);
  const direccionId = await direccionDelCliente(comoCliente);

  /* El comercio también necesita estar en el mapa: el recorrido va de su
     puerta a la del cliente, y sin su punto no hay distancia que medir ni
     de dónde salir. Las cuentas de demostración se crean sin coordenadas,
     así que se le ponen acá. */
  sql(
    `UPDATE comercios SET lat = ${COMERCIO_EN.lat}, lon = ${COMERCIO_EN.lon} WHERE id = '${comercio.id}' AND (lat IS NULL OR lon IS NULL)`,
  );
  const hechos = [];

  const prepararHasta = async (pedidoId, hasta) => {
    await comoComercio('POST', `/mi-comercio/pedidos/${pedidoId}/preparacion`, {
      estado: 'preparando',
    });

    if (hasta === 'listo') {
      await comoComercio('POST', `/mi-comercio/pedidos/${pedidoId}/preparacion`, {
        estado: 'listo',
      });
    }
  };

  /* 1. Recién hecho: el comercio todavía no lo tocó. */
  const espera = await crearPedido(comoCliente, comercio.id, dos, direccionId);
  hechos.push(['ESPERA', espera.codigo, 'el comercio no lo vio todavía']);

  /* 2. En preparación. */
  const preparando = await crearPedido(comoCliente, comercio.id, uno, direccionId);
  await prepararHasta(preparando.id, 'preparando');
  hechos.push(['PREPARANDO', preparando.codigo, 'el comercio lo está armando']);

  /* 3. Listo y sin repartidor: es el que aparece en "Disponibles". */
  const listo = await crearPedido(comoCliente, comercio.id, dos, direccionId);
  await prepararHasta(listo.id, 'listo');
  hechos.push(['LISTO', listo.codigo, 'esperando repartidor, sale en Disponibles']);

  /* 4. En camino compartiendo ubicación: muestra el punto en el mapa. */
  const camino = await crearPedido(comoCliente, comercio.id, uno, direccionId);
  await prepararHasta(camino.id, 'listo');
  await comoDelivery('POST', `/delivery/pedidos/${camino.id}/tomar`, EN_CAMINO);
  const envioCamino = envioDe(camino.id);
  await comoDelivery('POST', `/delivery/envios/${envioCamino}/estado`, {
    estado: 'retirado',
  });
  await comoDelivery('POST', `/delivery/envios/${envioCamino}/estado`, {
    estado: 'en_camino',
  });
  hechos.push(['CAMINO', camino.codigo, 'en camino, con el punto en el mapa']);

  /* 5. En camino sin ubicación: el repartidor que no la comparte. Se toma
     sin coordenadas y se borran las que hubiera, que es lo que queda cuando
     alguien nunca dio el permiso. */
  const sinGps = await crearPedido(comoCliente, comercio.id, uno, direccionId);
  await prepararHasta(sinGps.id, 'listo');
  await comoDelivery('POST', `/delivery/pedidos/${sinGps.id}/tomar`, {});
  const envioSinGps = envioDe(sinGps.id);
  await comoDelivery('POST', `/delivery/envios/${envioSinGps}/estado`, {
    estado: 'retirado',
  });
  await comoDelivery('POST', `/delivery/envios/${envioSinGps}/estado`, {
    estado: 'en_camino',
  });
  sql(
    `UPDATE envios SET lat = NULL, lon = NULL, ubicacion_en = NULL WHERE id = '${envioSinGps}'`,
  );
  hechos.push(['SIN-GPS', sinGps.codigo, 'en camino, sin ubicación: muestra el estimado']);

  /* Los ids quedan anotados para poder limpiarlos después: el pedido no
     tiene dónde escribirles una marca. */
  const todos = [espera, preparando, listo, camino, sinGps].map((p) => p.id);

  return { hechos, ids: todos };
}

/* ── Ejecución ── */

const borrados = limpiar();

if (borrados > 0) {
  console.log(`  se borraron ${borrados} pedidos de una corrida anterior`);
}

if (LIMPIAR) {
  console.log('\n  listo: no quedan pedidos de prueba.\n');
  process.exit(0);
}

const { hechos } = await sembrar();

console.log('\n  Pedidos de prueba:\n');

for (const [etiqueta, codigo, que] of hechos) {
  console.log(`   ${etiqueta.padEnd(11)} ${String(codigo).padEnd(10)} ${que}`);
}

console.log(`\n  Entrá con cualquier cuenta y la contraseña ${CLAVE}.`);
console.log('  Para borrarlos: node demo/escenario.mjs --limpiar\n');
