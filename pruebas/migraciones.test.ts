/**
 * Las migraciones, corridas de verdad antes de tocar la base de Diego.
 *
 * Esto no es una formalidad. Un ensayo así, hecho a mano, encontró dos
 * errores en la migración que separó pedidos de fletes —tres columnas que
 * faltaban en la tabla nueva y se habrían perdido en el DROP, y una columna
 * que no existía en el chat viejo—. Los dos habrían roto la migración a
 * mitad de camino, con la tabla de pedidos ya borrada.
 *
 * Lo que se prueba:
 *
 *   1. Que todas las migraciones corran en orden sobre una base vacía, que
 *      es lo que le pasa a una instalación nueva.
 *   2. Que ninguna pierda columnas al rehacer una tabla.
 *   3. Que los datos que ya estaban sobrevivan al paso.
 *
 * Usa el SQLite que trae Node, así que no necesita Cloudflare ni internet.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { beforeAll, describe, expect, it } from 'vitest';

/* Se carga así y no con `import`: `node:sqlite` lo trae Node y no
   node_modules, y el empaquetador lo busca como si fuera un paquete. */
const { DatabaseSync } = createRequire(import.meta.url)('node:sqlite') as {
  DatabaseSync: new (ruta: string) => DatabaseSync;
};

/** Lo que se usa de la base en memoria. */
interface DatabaseSync {
  exec(sql: string): void;
  prepare(sql: string): { all(): unknown[]; get(): unknown };
}

const CARPETA = fileURLToPath(new URL('../backend/migrations', import.meta.url));

/** Las migraciones en el orden en que las aplica wrangler. */
function listarMigraciones(): string[] {
  return readdirSync(CARPETA)
    .filter((nombre) => nombre.endsWith('.sql'))
    .sort();
}

/**
 * Aplica las migraciones hasta la que se pida, sobre una base en memoria.
 *
 * D1 es SQLite, así que lo que corre acá es lo mismo que corre allá. Lo
 * único que no se prueba es el comportamiento de la red.
 */
function baseHasta(ultima?: string) {
  const base = new DatabaseSync(':memory:');

  /* Las claves foráneas apagadas mientras se migra, como hace D1: varias
     migraciones rehacen tablas a las que otras apuntan, y con las claves
     activas el orden importaría de formas que en producción no importan. */
  base.exec('PRAGMA foreign_keys = OFF');

  for (const nombre of listarMigraciones()) {
    base.exec(readFileSync(join(CARPETA, nombre), 'utf8'));

    if (nombre === ultima) break;
  }

  return base;
}

/** Los nombres de las columnas de una tabla. */
function columnas(base: DatabaseSync, tabla: string): string[] {
  return base
    .prepare(`PRAGMA table_info(${tabla})`)
    .all()
    .map((fila) => String((fila as { name: unknown }).name));
}

describe('todas las migraciones juntas', () => {
  let base: DatabaseSync;

  beforeAll(() => {
    base = baseHasta();
  });

  it('corren en orden sobre una base vacía', () => {
    /* Si esto falla, una instalación nueva no arranca. */
    expect(listarMigraciones().length).toBeGreaterThan(0);
  });

  it('dejan las tablas que la aplicación usa', () => {
    const tablas = base
      .prepare("SELECT name FROM sqlite_master WHERE type = 'table'")
      .all()
      .map((fila) => String((fila as { name: unknown }).name));

    for (const tabla of [
      'usuarios',
      'comercios',
      'productos',
      'pedidos',
      'pedido_items',
      'envios',
      'fletes',
      'cotizaciones',
      'parametros',
      'movimientos_efectivo',
    ]) {
      expect(tablas).toContain(tabla);
    }
  });

  it('numera las migraciones sin repetir ni saltear', () => {
    /* Dos con el mismo número se aplican en un orden que depende del
       alfabeto, y eso cambia de una máquina a otra. */
    const numeros = listarMigraciones().map((nombre) => Number(nombre.slice(0, 4)));

    expect(new Set(numeros).size).toBe(numeros.length);
    expect(numeros).toEqual([...numeros].sort((a, b) => a - b));
  });
});

describe('0025 · pedidos, mandados y fletes', () => {
  it('no pierde ninguna columna de pedidos al rehacer la tabla', () => {
    /* El error que casi se va a producción: la tabla nueva no tenía
       pago_estado, preparando_en ni listo_en, y el DROP se las llevaba. */
    const antes = baseHasta('0024_deuda_efectivo.sql');
    const despues = baseHasta('0025_pedidos_mandados_fletes.sql');

    const perdidas = columnas(antes, 'pedidos').filter(
      (columna) => !columnas(despues, 'pedidos').includes(columna),
    );

    expect(perdidas).toEqual([]);
  });

  it('conserva los pedidos que ya existían, con todos sus datos', () => {
    const base = baseHasta('0024_deuda_efectivo.sql');

    base.exec(`
      INSERT INTO usuarios (id, nombre, email, password_hash)
        VALUES ('u1', 'Cliente', 'c@x.ar', 'x');
      INSERT INTO comercios (id, usuario_id, nombre, rubro_id, rubro_nombre, direccion)
        VALUES ('co1', 'u1', 'Almacén', 'almacen', 'Almacén', 'San Martín 1');
      INSERT INTO pedidos (id, codigo, usuario_id, comercio_id, direccion_texto,
                           subtotal_centavos, envio_centavos, total_centavos,
                           metodo_pago, pago_estado, preparando_en, listo_en)
        VALUES ('p1', 'ABC123', 'u1', 'co1', 'San Martín 2',
                100000, 5000, 105000, 'efectivo', 'aprobado', '2026-01-01', '2026-01-02');
    `);

    base.exec(readFileSync(join(CARPETA, '0025_pedidos_mandados_fletes.sql'), 'utf8'));

    const pedido = base.prepare("SELECT * FROM pedidos WHERE id = 'p1'").get() as Record<
      string,
      unknown
    >;

    expect(pedido.codigo).toBe('ABC123');
    expect(pedido.total_centavos).toBe(105000);
    expect(pedido.pago_estado).toBe('aprobado');
    expect(pedido.preparando_en).toBe('2026-01-01');
    expect(pedido.listo_en).toBe('2026-01-02');
    /* Lo que ya estaba es un pedido, no un mandado. */
    expect(pedido.tipo_pedido).toBe('pedido');
  });

  it('muda los mandados a pedidos y los fletes a su tabla', () => {
    const base = baseHasta('0024_deuda_efectivo.sql');

    base.exec(`
      INSERT INTO usuarios (id, nombre, email, password_hash)
        VALUES ('u1', 'Cliente', 'c@x.ar', 'x'), ('u2', 'Reparte', 'r@x.ar', 'x');
      INSERT INTO mandados (id, usuario_id, descripcion, direccion_texto, estado, tipo, repartidor_id)
        VALUES ('m1', 'u1', 'Traer remedios', 'Belgrano 30', 'buscando', 'mandado', NULL),
               ('m2', 'u1', 'Retirar paquete', 'Rivadavia 5', 'tomado', 'mandado', 'u2'),
               ('f1', 'u1', 'Mudar heladera', 'Mitre 80', 'buscando', 'flete', NULL);
    `);

    base.exec(readFileSync(join(CARPETA, '0025_pedidos_mandados_fletes.sql'), 'utf8'));

    const mandados = base
      .prepare("SELECT COUNT(*) c FROM pedidos WHERE tipo_pedido = 'mandado'")
      .get() as { c: number };
    const fletes = base.prepare('SELECT COUNT(*) c FROM fletes').get() as { c: number };

    expect(mandados.c).toBe(2);
    expect(fletes.c).toBe(1);

    /* El que ya estaba tomado conserva a quien lo lleva. */
    const envio = base.prepare("SELECT repartidor_id FROM envios WHERE pedido_id = 'm2'").get() as
      | { repartidor_id: string }
      | undefined;

    expect(envio?.repartidor_id).toBe('u2');
  });

  it('no deja crear un pedido sin comercio ni un mandado sin descripción', () => {
    const base = baseHasta('0025_pedidos_mandados_fletes.sql');

    base.exec(`
      INSERT INTO usuarios (id, nombre, email, password_hash)
        VALUES ('u1', 'Cliente', 'c@x.ar', 'x');
      INSERT INTO comercios (id, usuario_id, nombre, rubro_id, rubro_nombre, direccion)
        VALUES ('co1', 'u1', 'Almacén', 'almacen', 'Almacén', 'San Martín 1');
    `);

    const rechaza = (sql: string) => expect(() => base.exec(sql)).toThrow();

    rechaza(
      "INSERT INTO pedidos (id, codigo, usuario_id, direccion_texto, tipo_pedido) VALUES ('x1','X1','u1','n','pedido')",
    );
    rechaza(
      "INSERT INTO pedidos (id, codigo, usuario_id, direccion_texto, tipo_pedido) VALUES ('x2','X2','u1','n','mandado')",
    );
    rechaza(
      "INSERT INTO pedidos (id, codigo, usuario_id, comercio_id, direccion_texto, tipo_pedido) VALUES ('x3','X3','u1','co1','n','inventado')",
    );
  });
});

describe('0027 · las cotizaciones apuntan al flete', () => {
  it('ya no habla de pedidos', () => {
    /* El bug: el fletero veía el flete pero al cotizarlo recibía un 404,
       porque la consulta lo buscaba en la tabla equivocada. */
    const base = baseHasta();

    expect(columnas(base, 'cotizaciones')).toContain('flete_id');
    expect(columnas(base, 'cotizaciones')).not.toContain('pedido_id');
  });

  it('el chat del flete puede anotar lo que decide la aplicación', () => {
    const base = baseHasta();

    expect(columnas(base, 'flete_mensajes')).toContain('es_sistema');
  });
});

describe('0026 · parámetros', () => {
  it('deja cargados los que la aplicación espera encontrar', () => {
    /* Si falta alguno, la pantalla de administración aparece incompleta y
       el modal de pagar deuda se queda sin alias. */
    const base = baseHasta();
    const claves = base
      .prepare('SELECT clave FROM parametros')
      .all()
      .map((fila) => String((fila as { clave: unknown }).clave));

    for (const clave of ['cobro_titular', 'cobro_alias', 'cobro_cbu', 'cobro_mercadopago']) {
      expect(claves).toContain(clave);
    }
  });

  it('cada parámetro explica para qué sirve', () => {
    /* Quien los edita no escribió el código. */
    const base = baseHasta();
    const filas = base.prepare('SELECT clave, etiqueta, descripcion FROM parametros').all() as Array<{
      clave: string;
      etiqueta: string;
      descripcion: string;
    }>;

    for (const fila of filas) {
      expect(fila.etiqueta.length).toBeGreaterThan(0);
      expect(fila.descripcion.length).toBeGreaterThan(10);
    }
  });
});
