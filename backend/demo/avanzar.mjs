/**
 * Mueve un pedido al paso siguiente, como si estuvieran del otro lado.
 *
 * Sirve para probar solo lo que normalmente necesita dos personas. Con el
 * pedido abierto en el navegador se corre esto desde otra ventana y se ve
 * llegar el aviso al chat, cambiar el estado y aparecer el repartidor en el
 * mapa, sin tener que entrar con la otra cuenta y volver.
 *
 *   node demo/avanzar.mjs                    el último pedido del cliente
 *   node demo/avanzar.mjs '#123456'          uno puntual, por su código
 *   node demo/avanzar.mjs --remoto           contra el sitio publicado
 *   node demo/avanzar.mjs --hasta entregado  repite hasta llegar ahí
 *   node demo/avanzar.mjs --sin-gps          el repartidor no comparte ubicación
 *
 * El recorrido completo, en orden:
 *
 *   preparando → listo → (un repartidor lo toma) → retirado → en_camino → entregado
 *
 * Cada paso lo hace la cuenta que corresponde: el comercio prepara y marca
 * listo, el repartidor toma y entrega. Se usan las mismas llamadas que la
 * aplicación, así que lo que se ve es lo que pasaría de verdad.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const REMOTO = process.argv.includes('--remoto');
const SIN_GPS = process.argv.includes('--sin-gps');

const API =
  process.env.API_DEMO ??
  (REMOTO ? 'https://lafranciago-api.lafranciago-api.workers.dev' : 'http://127.0.0.1:8787');

const BASE = 'lafranciago';
const CLAVE = 'Demo2026!';

const CLIENTE = 'cliente@lafrancia.ar';
const COMERCIO = 'gestion@lafrancia.ar';
const DELIVERY = 'delivery@lafrancia.ar';

/** Dónde está el repartidor cuando comparte su ubicación. */
const EN_CAMINO = { lat: -31.0271, lon: -62.1108 };

/** Hasta dónde llegar, si se pidió. */
const hasta = (() => {
  const marca = process.argv.indexOf('--hasta');

  return marca === -1 ? null : process.argv[marca + 1];
})();

/** El código del pedido, si se nombró uno. */
const codigoPedido = process.argv.find((arg) => arg.startsWith('#')) ?? null;

function sql(consulta) {
  /* En una sola línea: wrangler pasa el comando tal cual y un salto de
     línea adentro lo parte en dos. */
  const plana = consulta.replace(/\s+/g, ' ').trim();

  /* La consulta va por archivo y no como argumento: pasada en la línea de
     comandos, cada shell interpreta a su manera las comillas y los paréntesis
     —PowerShell y bash no coinciden— y la misma consulta anda en uno y falla
     en el otro. */

  /* Se llama a wrangler con node y sin shell.

     Con shell, la consulta pasa por bash o por PowerShell antes de llegar al
     programa, y cada uno interpreta a su manera las comillas y los
     paréntesis: la misma consulta andá en una terminal y falla en la otra.
     Sin shell llega tal cual, pero Node se niega a ejecutar un .cmd —que es
     lo que deja npx en Windows—, así que se apunta directo al archivo .js
     que ese .cmd iba a correr. */
  const salida = spawnSync(
    process.execPath,
    [
      path.join(import.meta.dirname, '..', 'node_modules', 'wrangler', 'bin', 'wrangler.js'),
      'd1',
      'execute',
      BASE,
      REMOTO ? '--remote' : '--local',
      '--command',
      plana,
      '--json',
    ],
    { encoding: 'utf8', shell: false, cwd: path.join(import.meta.dirname, '..') },
  );

  if (salida.status !== 0) {
    const detalle = `${salida.stderr || ''}${salida.stdout || ''}`;
    /* El mensaje de wrangler incluye el comando entero, que tapa el error de
       verdad. Se busca la línea que lo explica. */
    const motivo =
      detalle.split(/\r?\n/).find((linea) => /ERROR|error:/i.test(linea))?.trim() ??
      'wrangler no pudo ejecutarla';

    throw new Error(`falló la consulta: ${motivo}`);
  }

  const desde = salida.stdout.indexOf('[');

  return desde === -1
    ? []
    : JSON.parse(salida.stdout.slice(desde)).flatMap((bloque) => bloque.results ?? []);
}

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
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
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

/** En qué anda el pedido ahora mismo. */
function estadoDe(pedidoId) {
  const filas = sql(
    `SELECT p.preparacion, p.estado, e.id AS envio_id, e.estado AS envio_estado FROM pedidos p LEFT JOIN envios e ON e.pedido_id = p.id WHERE p.id = '${pedidoId}'`,
  );

  if (filas.length === 0) {
    throw new Error('no existe ese pedido');
  }

  return filas[0];
}

/** El pedido sobre el que trabajar: el nombrado, o el último del cliente. */
function buscarPedido() {
  /* Sin código se toma el último en curso, pero sólo del comercio de la
     demostración: si el cliente compró en otro lado, esas cuentas no pueden
     moverlo y el script fallaría con un 404 confuso. */
  const filtro = codigoPedido
    ? `p.codigo = '${codigoPedido}'`
    : `u.email = '${CLIENTE}' AND p.estado = 'proceso' AND c.usuario_id = (SELECT id FROM usuarios WHERE email = '${COMERCIO}')`;

  const filas = sql(
    `SELECT p.id, p.codigo FROM pedidos p JOIN usuarios u ON u.id = p.usuario_id JOIN comercios c ON c.id = p.comercio_id WHERE ${filtro} ORDER BY p.creado_en DESC LIMIT 1`,
  );

  if (filas.length === 0) {
    throw new Error(
      codigoPedido
        ? `no se encontró el pedido ${codigoPedido}`
        : 'el cliente no tiene ningún pedido en curso',
    );
  }

  return filas[0];
}

/**
 * Da un paso y dice cuál fue.
 *
 * Devuelve null cuando ya no queda nada por hacer, que es como se corta el
 * modo `--hasta`.
 */
async function unPaso(pedido, cuentas) {
  const estado = estadoDe(pedido.id);

  if (estado.estado !== 'proceso') {
    return null;
  }

  /* El comercio primero: el repartidor no puede retirar algo que todavía no
     está preparado. */
  if (estado.preparacion === 'recibido') {
    await cuentas.comercio('POST', `/mi-comercio/pedidos/${pedido.id}/preparacion`, {
      estado: 'preparando',
    });

    return 'preparando · el comercio empezó a armarlo';
  }

  if (estado.preparacion === 'preparando') {
    await cuentas.comercio('POST', `/mi-comercio/pedidos/${pedido.id}/preparacion`, {
      estado: 'listo',
    });

    return 'listo · esperando que lo retiren';
  }

  if (!estado.envio_id) {
    await cuentas.delivery(
      'POST',
      `/delivery/pedidos/${pedido.id}/tomar`,
      SIN_GPS ? {} : EN_CAMINO,
    );

    if (SIN_GPS) {
      const envio = estadoDe(pedido.id).envio_id;

      sql(
        `UPDATE envios SET lat = NULL, lon = NULL, ubicacion_en = NULL WHERE id = '${envio}'`,
      );
    }

    return SIN_GPS
      ? 'tomado · el repartidor NO comparte su ubicación'
      : 'tomado · el repartidor comparte su ubicación';
  }

  const SIGUIENTE = { asignado: 'retirado', retirado: 'en_camino', en_camino: 'entregado' };
  const siguiente = SIGUIENTE[estado.envio_estado];

  if (!siguiente) {
    return null;
  }

  await cuentas.delivery('POST', `/delivery/envios/${estado.envio_id}/estado`, {
    estado: siguiente,
  });

  const COMO_SE_LEE = {
    retirado: 'retirado · salió del comercio',
    en_camino: 'en camino · va para la dirección',
    entregado: 'entregado · el pedido se cerró',
  };

  return COMO_SE_LEE[siguiente];
}

/* ── Ejecución ── */

const pedido = buscarPedido();

const cuentas = {
  comercio: await entrar(COMERCIO),
  delivery: await entrar(DELIVERY),
};

console.log(`\n  Pedido ${pedido.codigo}\n`);

/* Sin --hasta, un paso por corrida: la idea es mirar la pantalla entre uno y
   otro, que es donde se ve llegar el aviso. */
const tope = hasta ? 6 : 1;
let dados = 0;

for (let i = 0; i < tope; i += 1) {
  const paso = await unPaso(pedido, cuentas);

  if (!paso) {
    break;
  }

  console.log(`   → ${paso}`);
  dados += 1;

  if (hasta && paso.startsWith(hasta)) {
    break;
  }
}

if (dados === 0) {
  console.log('   ya no queda nada por avanzar: está entregado o cancelado.');
}

console.log('\n  Mirá la pantalla del cliente: el aviso ya tiene que estar en el chat.\n');
