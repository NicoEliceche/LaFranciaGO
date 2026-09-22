/**
 * Crea las cuentas de demostración, una por tipo.
 *
 * Sirven para recorrer la aplicación como la va a ver cada persona: entrar
 * con email y contraseña, y que aparezca lo de ese rol y nada más.
 *
 * Son cinco, porque el comercio son dos casos distintos:
 *
 *   cliente     el vecino que compra
 *   comercio    el negocio sin el sistema de gestión
 *   gestion     el mismo, con el sistema contratado
 *   delivery    el que reparte
 *   flete       el que hace fletes
 *
 * Las dos cuentas de comercio existen porque ahí está la diferencia que más
 * se confunde: sin el plan se ve el perfil, los productos, los precios y las
 * ofertas; con el plan se agrega la caja, las compras y los informes. Verlo
 * en dos ventanas al lado explica el producto mejor que contarlo.
 *
 * Las cuentas se crean por la API y no escribiendo en la base: así pasan por
 * el mismo registro que cualquiera, con la contraseña cifrada igual. Un
 * INSERT a mano tendría que repetir el PBKDF2 de 100.000 iteraciones, y si
 * eso se desincroniza las cuentas dejan de entrar sin decir por qué.
 *
 * Los roles y la aprobación sí van por SQL, porque en la aplicación real los
 * aprueba un administrador y acá no hay a quién esperar.
 *
 *   node demo/cuentas.mjs               contra el backend local
 *   node demo/cuentas.mjs --remoto      contra el de producción
 */
import { spawnSync } from 'node:child_process';
import { rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const REMOTO = process.argv.includes('--remoto');
const API = process.env.API_DEMO ?? 'http://127.0.0.1:8787';

/* Una sola contraseña para todas: son cuentas de demostración, se muestran en
   pantalla y se rehacen cuando haga falta. Que sea la misma evita el error de
   probar una cuenta con la contraseña de otra.

   Tiene ocho caracteres porque ese es el mínimo del registro, y el dominio
   lleva punto por la misma razón. Aflojar cualquiera de las dos
   comprobaciones para la demo las aflojaría también para las cuentas de
   verdad. */
const CLAVE = 'demo1234';

const CUENTAS = [
  {
    email: 'cliente@demo.ar',
    nombre: 'Ana, clienta',
    telefono: '3564000001',
    rol: null,
    que: 'Compra en el marketplace',
  },
  {
    email: 'comercio@demo.ar',
    nombre: 'Almacén Don Pedro',
    telefono: '3564000002',
    rol: 'comercio',
    gestion: false,
    comercio: {
      nombre: 'Almacén Don Pedro',
      rubroId: 'almacen',
      rubro: 'Almacén',
      direccion: 'Av. San Martín 450, La Francia',
    },
    que: 'Comercio SIN el sistema de gestión',
  },
  {
    email: 'gestion@demo.ar',
    nombre: 'Supermercado La Esquina',
    telefono: '3564000003',
    rol: 'comercio',
    gestion: true,
    comercio: {
      nombre: 'Supermercado La Esquina',
      rubroId: 'supermercado',
      rubro: 'Supermercado',
      direccion: 'Belgrano 120, La Francia',
    },
    que: 'Comercio CON el sistema de gestión',
  },
  {
    email: 'delivery@demo.ar',
    nombre: 'Martín, repartidor',
    telefono: '3564000004',
    rol: 'delivery',
    que: 'Reparte pedidos',
  },
  {
    email: 'flete@demo.ar',
    nombre: 'Jorge, fletero',
    telefono: '3564000005',
    rol: 'fletero',
    que: 'Hace fletes',
  },
];

/**
 * Corre una consulta contra la base, local o remota según se haya pedido.
 *
 * La consulta va por archivo y no por --command: en Windows hay que llamar a
 * wrangler con shell, y con shell el SQL se parte en palabras sueltas
 * ("SELECT", "id", "FROM"...) que wrangler rechaza como argumentos
 * desconocidos. Un archivo no tiene ese problema y además no le pone límite
 * al largo.
 */
function sql(consulta) {
  const archivo = path.join(import.meta.dirname, '.consulta.sql');

  writeFileSync(archivo, consulta, 'utf8');

  try {
    const salida = spawnSync(
      'npx',
      [
        'wrangler',
        'd1',
        'execute',
        REMOTO ? 'lafranciago-prod' : 'lafranciago',
        REMOTO ? '--remote' : '--local',
        '--file',
        archivo,
        '--json',
      ],
      {
        encoding: 'utf8',
        shell: true,
        cwd: path.join(import.meta.dirname, '..'),
      },
    );

    if (salida.status !== 0) {
      throw new Error(`falló la consulta: ${salida.stderr || salida.stdout}`);
    }

    return salida.stdout;
  } finally {
    rmSync(archivo, { force: true });
  }
}

/** Crea la cuenta, o sigue de largo si ya estaba. */
async function registrar(cuenta) {
  const respuesta = await fetch(`${API}/auth/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: cuenta.email,
      password: CLAVE,
      nombre: cuenta.nombre,
      telefono: cuenta.telefono,
    }),
  });

  if (respuesta.ok) return 'creada';

  const cuerpo = await respuesta.text();

  /* Ya existía: se deja como está y se siguen ajustando el rol y el plan, que
     es lo que puede haber quedado a medias de una corrida anterior. */
  if (respuesta.status === 409 || /ya (existe|está)/i.test(cuerpo)) return 'ya estaba';

  throw new Error(`${cuenta.email}: ${respuesta.status} ${cuerpo}`);
}

/** Los ids de varios usuarios, de una sola consulta. */
function idsDe(emails) {
  const lista = emails.map((correo) => `'${correo}'`).join(', ');
  const salida = sql(`SELECT id, email FROM usuarios WHERE email IN (${lista})`);
  const porEmail = {};

  /* La salida de wrangler trae el JSON entre otras líneas, así que se buscan
     los pares id/email en vez de intentar interpretar todo. */
  const patron = /"id":\s*"([^"]+)"[\s\S]{0,160}?"email":\s*"([^"]+)"/g;
  let encontrado = patron.exec(salida);

  while (encontrado !== null) {
    porEmail[encontrado[2]] = encontrado[1];
    encontrado = patron.exec(salida);
  }

  return porEmail;
}

async function principal() {
  console.log(`\nCuentas de demostración — ${REMOTO ? 'PRODUCCIÓN' : 'local'}`);
  console.log(`API: ${API}\n`);

  /* Primero se crean todas por la API, y recién después se toca la base.
     Separarlo no es prolijidad: cada llamada a wrangler abre su propia
     conexión a la base local, y hacerlo entre registro y registro reinicia
     el servidor de desarrollo que está escuchando, que es lo que cortaba la
     corrida por la mitad. */
  const creadas = [];

  for (const cuenta of CUENTAS) {
    creadas.push({ cuenta, estado: await registrar(cuenta) });
  }

  /* Una sola consulta con todo: los roles, los comercios y el plan, para que
     wrangler se llame una vez y no una por cuenta. */
  const ids = idsDe(CUENTAS.map((cuenta) => cuenta.email));
  const sentencias = [];

  for (const cuenta of CUENTAS) {
    const id = ids[cuenta.email];

    if (!id) throw new Error(`no encuentro el usuario ${cuenta.email}`);

    /* El rol va aprobado de entrada: en la aplicación real lo aprueba un
       administrador, y acá no hay a quién esperar. */
    if (cuenta.rol) {
      sentencias.push(
        `INSERT OR REPLACE INTO usuario_roles (id, usuario_id, rol, estado)
         VALUES ('rol-demo-${cuenta.rol}-${id}', '${id}', '${cuenta.rol}', 'aprobado');`,
      );
    }

    if (cuenta.comercio) {
      sentencias.push(
        `INSERT OR REPLACE INTO comercios
           (id, usuario_id, nombre, rubro_id, rubro_nombre, direccion, telefono,
            estado, gestion_activa, gestion_desde)
         VALUES ('com-demo-${id}', '${id}', '${cuenta.comercio.nombre}',
                 '${cuenta.comercio.rubroId}', '${cuenta.comercio.rubro}',
                 '${cuenta.comercio.direccion}', '${cuenta.telefono}', 'aprobado',
                 ${cuenta.gestion ? 1 : 0},
                 ${cuenta.gestion ? "datetime('now')" : 'NULL'});`,
      );
    }
  }

  sql(sentencias.join('\n'));

  for (const { cuenta, estado } of creadas) {
    console.log(`  ${cuenta.email.padEnd(20)} ${estado.padEnd(10)} ${cuenta.que}`);
  }

  console.log(`\n  La contraseña de todas: ${CLAVE}\n`);
}

principal().catch((fallo) => {
  console.error(`\nNo se pudieron crear: ${fallo.message}\n`);
  process.exit(1);
});
