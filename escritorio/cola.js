/**
 * La cola de ventas.
 *
 * Sin internet la venta igual pasa: la mercadería sale del negocio y la
 * plata entra al cajón, con conexión o sin ella. Lo que no puede pasar es
 * que esa venta se pierda.
 *
 * Por eso toda venta se guarda primero en disco y después se intenta subir.
 * Si el servidor contesta, se marca como subida. Si no, queda esperando y se
 * reintenta cuando vuelve la conexión.
 *
 * Las ventas se suben DE A UNA y en orden. Mandarlas todas juntas haría que
 * el stock se descuente en cualquier orden, y con dos cajas vendiendo lo
 * mismo el resultado dependería de quién llegó primero a la red en vez de
 * quién vendió primero.
 *
 * Lo que la cola no puede resolver: si dos cajas están desconectadas al
 * mismo tiempo y las dos venden la última unidad, las dos ventas ya
 * ocurrieron. Ahí el stock queda en negativo, que es la verdad —salieron más
 * de las que había— y el sistema avisa en vez de esconderlo.
 */
const { app } = require('electron');
const fs = require('node:fs/promises');
const path = require('node:path');

const ARCHIVO = 'ventas-pendientes.json';

let carpeta = null;
let cola = [];
/* Evita que dos reintentos corran a la vez y suban la misma venta dos
   veces. */
let sincronizando = false;

const rutaArchivo = () => path.join(carpeta, ARCHIVO);

async function abrirBaseLocal() {
  carpeta = app.getPath('userData');

  try {
    const crudo = await fs.readFile(rutaArchivo(), 'utf8');

    cola = JSON.parse(crudo);
  } catch {
    /* Primera vez, o el archivo se corrompió: se arranca vacío en vez de
       impedir que el negocio abra. */
    cola = [];
  }

  return cola.length;
}

async function guardar() {
  /* Se escribe a un archivo aparte y después se renombra: si se corta la luz
     a mitad de la escritura, el archivo viejo sigue entero. */
  const temporal = `${rutaArchivo()}.tmp`;

  await fs.writeFile(temporal, JSON.stringify(cola, null, 1), 'utf8');
  await fs.rename(temporal, rutaArchivo());
}

/**
 * Guarda una venta y devuelve su número local.
 *
 * El número lo pone el puesto y no el servidor, porque sin internet el
 * servidor no está. Lleva el id del puesto adelante para que dos cajas no
 * generen el mismo: "CAJA1-0042" y "CAJA2-0042" son distintos.
 */
async function encolarVenta(venta) {
  const puesto = process.env.LAFRANCIAGO_PUESTO ?? 'CAJA1';
  const correlativo = String(cola.length + 1).padStart(4, '0');

  const entrada = {
    idLocal: `${puesto}-${Date.now()}-${correlativo}`,
    puesto,
    venta,
    creadaEn: new Date().toISOString(),
    intentos: 0,
    subida: false,
    error: null,
  };

  cola.push(entrada);
  await guardar();

  /* Se intenta enseguida: si hay internet, la venta sube antes de que la
     persona termine de guardar el vuelto. */
  void sincronizar();

  return { idLocal: entrada.idLocal, pendientes: cola.filter((e) => !e.subida).length };
}

function pendientes() {
  const sinSubir = cola.filter((e) => !e.subida);

  return {
    cantidad: sinSubir.length,
    masVieja: sinSubir[0]?.creadaEn ?? null,
    conError: sinSubir.filter((e) => e.error).length,
  };
}

/**
 * Sube lo que quedó pendiente, de a una y en orden.
 *
 * Se corta al primer fallo de red: si la conexión se cayó, las que siguen
 * van a fallar igual, y seguir intentando sólo suma esperas.
 */
async function sincronizar() {
  if (sincronizando) return { yaEstaba: true };

  const base = process.env.VITE_API_URL ?? 'https://lafranciago-api.lafranciago-api.workers.dev';
  const sinSubir = cola.filter((e) => !e.subida);

  if (sinSubir.length === 0) return { subidas: 0, pendientes: 0 };

  sincronizando = true;
  let subidas = 0;

  try {
    for (const entrada of sinSubir) {
      entrada.intentos += 1;

      try {
        const respuesta = await fetch(`${base}/gestion/ventas`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            /* El id local viaja para que el servidor pueda descartar la
               misma venta si se manda dos veces: sin esto, un reintento
               después de una respuesta perdida duplicaría la venta. */
            'X-Venta-Local': entrada.idLocal,
          },
          credentials: 'include',
          body: JSON.stringify(entrada.venta),
        });

        if (respuesta.ok) {
          entrada.subida = true;
          entrada.error = null;
          subidas += 1;
        } else {
          /* El servidor contestó que no: reintentar no va a cambiar nada.
             Se anota el motivo para que alguien lo mire. */
          const detalle = await respuesta.json().catch(() => ({}));

          entrada.error = detalle.error ?? `Error ${respuesta.status}`;
        }
      } catch {
        /* Sin red: se deja para después y se corta acá. */
        break;
      }
    }

    await guardar();
  } finally {
    sincronizando = false;
  }

  return { subidas, pendientes: cola.filter((e) => !e.subida).length };
}

/* Reintenta solo cuando vuelve la conexión, y cada tanto por las dudas: el
   evento de red del sistema no siempre llega. */
setInterval(() => void sincronizar(), 60_000);

module.exports = { abrirBaseLocal, encolarVenta, pendientes, sincronizar };
