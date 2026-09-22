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
import { webcrypto as crypto } from 'node:crypto';
import { rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const REMOTO = process.argv.includes('--remoto');
const API = process.env.API_DEMO ?? 'http://127.0.0.1:8787';

/* Una sola contraseña para todas, y corta: se tipea muchas veces seguidas al
   ir de una cuenta a otra mostrando la aplicación. Que sea la misma evita
   además el error de probar una cuenta con la contraseña de otra. */
const CLAVE = 'demo';

/* El registro pide ocho caracteres, así que "demo" no pasa por ahí: la clave
   se guarda directamente en la base, con el mismo hash que usaría el
   registro.

   Es a propósito que la comprobación quede intacta. Bajar el mínimo para la
   demo lo bajaría para las cuentas reales, y el mínimo es lo que compensa
   que el runtime de Workers no deje pasar de 100.000 iteraciones. Acá el
   riesgo no existe: son cuentas de demostración, con datos inventados, cuya
   contraseña está escrita en el LEEME. */

/* El mismo número que src/lib.ts: es el tope que admite el runtime de
   Workers. Si cambia allá, tiene que cambiar acá. */
const ITERACIONES = 100_000;

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

/**
 * El hash de una contraseña, en el formato que guarda el backend.
 *
 * Tiene que dar lo mismo que `hashPassword` de src/lib.ts: PBKDF2-SHA512,
 * 100.000 iteraciones, 512 bits, salt de 16 bytes al azar. Si alguno de esos
 * números cambia allá, hay que cambiarlo acá o las cuentas de demostración
 * dejan de entrar.
 *
 * Node trae el mismo `crypto.subtle` que el runtime de Workers, así que es
 * literalmente el mismo cálculo.
 */
async function hashDe(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const clave = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );

  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERACIONES, hash: 'SHA-512' },
    clave,
    512,
  );

  const base64 = (datos) => Buffer.from(datos).toString('base64');

  return `pbkdf2$${ITERACIONES}$${base64(salt)}$${base64(new Uint8Array(bits))}`;
}

/**
 * Crea la cuenta, o sigue de largo si ya estaba.
 *
 * Se registra con una contraseña larga y después se reemplaza por la corta
 * al escribir en la base. Da una vuelta, pero el registro es el que crea el
 * usuario con su id y sus valores por defecto, y repetir eso a mano sería
 * copiar una parte del backend que después se desincroniza.
 */
async function registrar(cuenta) {
  const respuesta = await fetch(`${API}/auth/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: cuenta.email,
      /* Sólo para pasar el registro: abajo se cambia por CLAVE. */
      password: `provisoria-${Date.now()}`,
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

  /* Una sola consulta con todo: la contraseña, los roles, los comercios y el
     plan, para que wrangler se llame una vez y no una por cuenta. */
  const ids = idsDe(CUENTAS.map((cuenta) => cuenta.email));
  const sentencias = [];

  for (const cuenta of CUENTAS) {
    const id = ids[cuenta.email];

    if (!id) throw new Error(`no encuentro el usuario ${cuenta.email}`);

    /* La contraseña corta se escribe acá y no en el registro, que pide ocho
       caracteres. Cada cuenta lleva su propio salt, igual que las de verdad.

       Va siempre, no sólo al crear: si una corrida anterior la dejó con otra
       clave, así vuelve a quedar con la de la demo. */
    sentencias.push(
      `UPDATE usuarios SET password_hash = '${await hashDe(CLAVE)}' WHERE id = '${id}';`,
    );

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
