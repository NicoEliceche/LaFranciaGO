#!/usr/bin/env node
/**
 * Siembra la base con los comercios de La Francia.
 *
 * Los datos salen del contenido que la app traía escrito en el front: son los
 * mismos comercios y productos que se venían mostrando, ahora en la base para
 * que se pueda comprar de verdad.
 *
 * Es idempotente: borra lo que sembró antes de volver a escribirlo, así se
 * puede correr las veces que haga falta sin duplicar nada. No toca comercios
 * ni usuarios que no estén en esta lista.
 *
 *   node seed.mjs           → escribe en la base remota
 *   node seed.mjs --local   → escribe en la local
 */

import { execFileSync } from 'node:child_process';
import { writeFileSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const LOCAL = process.argv.includes('--local');
const BASE = 'lafranciago';

/* El dueño de los comercios sembrados. Sin un usuario detrás, el panel de
   comercio no tendría con qué entrar a administrarlos. */
const DUENO = {
  id: 'demo-comercios-lafrancia',
  email: 'comercios@lafranciago.demo',
  nombre: 'Comercios La Francia',
};

/* Precios en pesos; se convierten a centavos al escribir. */
const COMERCIOS = [
  {
    id: 'almacen-juan',
    nombre: 'Almacén Juan',
    rubroId: 'almacen',
    rubroNombre: 'Almacén y bebidas',
    direccion: 'Centro · La Francia',
    lat: -31.0294,
    lon: -62.0842,
    telefono: '+54 3573 400-201',
    horario: 'Lun a sáb 08:00 - 21:30',
    descripcion: 'Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.',
    minimo: 5000,
    premium: false,
    categorias: [
      { id: 'almacen-juan-bebidas', nombre: 'Bebidas', unidad: 'unidad' },
      { id: 'almacen-juan-almacen', nombre: 'Almacén', unidad: 'unidad' },
      { id: 'almacen-juan-limpieza', nombre: 'Limpieza', unidad: 'unidad' },
    ],
    productos: [
      { nombre: 'Coca Cola 2,25 L', precio: 3500, categoria: 'almacen-juan-bebidas', stock: 40 },
      { nombre: 'Agua mineral 2 L', precio: 1800, categoria: 'almacen-juan-bebidas', stock: 60 },
      { nombre: 'Cerveza Quilmes 1 L', precio: 2900, categoria: 'almacen-juan-bebidas', stock: 36 },
      { nombre: 'Yerba mate 1 kg', precio: 4650, categoria: 'almacen-juan-almacen', stock: 25 },
      { nombre: 'Galletitas surtidas', precio: 1250, categoria: 'almacen-juan-almacen', stock: 50 },
      { nombre: 'Aceite girasol 900 ml', precio: 3200, categoria: 'almacen-juan-almacen', stock: 30 },
      { nombre: 'Fideos 500 g', precio: 1400, categoria: 'almacen-juan-almacen', stock: 45 },
      { nombre: 'Arroz 1 kg', precio: 1950, categoria: 'almacen-juan-almacen', stock: 40 },
      { nombre: 'Azúcar 1 kg', precio: 1700, categoria: 'almacen-juan-almacen', stock: 35 },
      { nombre: 'Leche entera sachet', precio: 1350, categoria: 'almacen-juan-almacen', stock: 48 },
      { nombre: 'Detergente 750 ml', precio: 2400, categoria: 'almacen-juan-limpieza', stock: 28 },
      { nombre: 'Lavandina 1 L', precio: 1600, categoria: 'almacen-juan-limpieza', stock: 30 },
      { nombre: 'Papel higiénico x4', precio: 2800, categoria: 'almacen-juan-limpieza', stock: 32 },
    ],
    /* Ofertas de muestra: una de cada tipo, para que la demo las tenga a la
       vista sin que nadie tenga que cargarlas a mano. */
    ofertas: [
      {
        tipo: 'descuento',
        titulo: 'Coca Cola al 15%',
        porcentaje: 15,
        productos: ['Coca Cola 2,25 L'],
      },
      {
        tipo: 'cantidad',
        titulo: '3 aguas',
        cantidad: 3,
        precioFinal: 4600,
        productos: ['Agua mineral 2 L'],
      },
      {
        tipo: 'combo',
        titulo: 'Combo mate',
        precioFinal: 5300,
        productos: ['Yerba mate 1 kg', 'Galletitas surtidas'],
      },
    ],
  },
  {
    id: 'panaderia-la-esquina',
    nombre: 'Panadería La Esquina',
    rubroId: 'panaderia',
    rubroNombre: 'Panadería artesanal',
    direccion: 'Av. Principal',
    lat: -31.0311,
    lon: -62.0795,
    telefono: '+54 3573 401-122',
    horario: 'Todos los días 07:00 - 13:30 / 17:00 - 21:00',
    descripcion: 'Pan fresco, facturas y productos de horno para retiro rápido.',
    minimo: 3000,
    premium: false,
    categorias: [
      /* El pan se vende por peso: los escalones de un cuarto son los que
         usa el cliente al pedir ("medio kilo de pan"). */
      { id: 'panaderia-pan', nombre: 'Panificados', unidad: 'peso' },
      { id: 'panaderia-factura', nombre: 'Facturas', unidad: 'docena' },
      { id: 'panaderia-tortas', nombre: 'Tortas', unidad: 'unidad' },
    ],
    productos: [
      { nombre: 'Pan francés', precio: 2400, categoria: 'panaderia-pan', unidad: 'peso', stock: 50 },
      { nombre: 'Pan casero', precio: 2800, categoria: 'panaderia-pan', unidad: 'peso', stock: 30 },
      { nombre: 'Pan de salvado', precio: 3100, categoria: 'panaderia-pan', unidad: 'peso', stock: 20 },
      { nombre: 'Facturas surtidas', precio: 1900, categoria: 'panaderia-factura', unidad: 'docena', stock: 24 },
      { nombre: 'Medialunas de manteca', precio: 2200, categoria: 'panaderia-factura', unidad: 'docena', stock: 20 },
      { nombre: 'Torta de cumpleaños', precio: 12000, categoria: 'panaderia-tortas', stock: 5 },
      { nombre: 'Pastafrola', precio: 4500, categoria: 'panaderia-tortas', stock: 8 },
      /* Va en Panificados pero se vende por paquete, no por kilo. */
      { nombre: 'Prepizzas x3', precio: 2600, categoria: 'panaderia-pan', unidad: 'unidad', stock: 18 },
    ],
    ofertas: [
      {
        tipo: 'descuento',
        titulo: 'Facturas al 20%',
        porcentaje: 20,
        productos: ['Facturas surtidas'],
      },
    ],
  },
  {
    id: 'farmacia-centro',
    nombre: 'Farmacia Centro',
    rubroId: 'farmacia',
    rubroNombre: 'Salud y perfumería',
    direccion: 'Sector comercial',
    lat: -31.0288,
    lon: -62.0821,
    telefono: '+54 3573 402-300',
    horario: 'Lun a dom 08:30 - 22:00',
    descripcion: 'Productos de farmacia y perfumería con atención prioritaria.',
    minimo: 4000,
    premium: true,
    categorias: [
      { id: 'farmacia-medicamentos', nombre: 'Medicamentos', unidad: 'unidad' },
      { id: 'farmacia-perfumeria', nombre: 'Perfumería', unidad: 'unidad' },
      { id: 'farmacia-cuidado', nombre: 'Cuidado personal', unidad: 'unidad' },
    ],
    productos: [
      { nombre: 'Omeprazol 20 mg', precio: 7150, categoria: 'farmacia-medicamentos', stock: 20 },
      { nombre: 'Ibuprofeno 400 mg', precio: 3800, categoria: 'farmacia-medicamentos', stock: 30 },
      { nombre: 'Paracetamol 500 mg', precio: 2900, categoria: 'farmacia-medicamentos', stock: 35 },
      { nombre: 'Alcohol en gel', precio: 1850, categoria: 'farmacia-cuidado', stock: 40 },
      { nombre: 'Shampoo 400 ml', precio: 3950, categoria: 'farmacia-perfumeria', stock: 25 },
      { nombre: 'Acondicionador 400 ml', precio: 3950, categoria: 'farmacia-perfumeria', stock: 22 },
      { nombre: 'Jabón de tocador x3', precio: 2100, categoria: 'farmacia-cuidado', stock: 30 },
      { nombre: 'Protector solar FPS 50', precio: 8900, categoria: 'farmacia-cuidado', stock: 15 },
      { nombre: 'Pañales talle G x40', precio: 14500, categoria: 'farmacia-cuidado', stock: 12 },
    ],
    ofertas: [
      {
        tipo: 'combo',
        titulo: 'Combo shampoo + acondicionador',
        precioFinal: 6900,
        productos: ['Shampoo 400 ml', 'Acondicionador 400 ml'],
      },
    ],
  },
  {
    id: 'carniceria-central',
    nombre: 'Carnicería Central',
    rubroId: 'carniceria',
    rubroNombre: 'Cortes y frescos',
    direccion: 'Barrio norte',
    lat: -31.0256,
    lon: -62.0878,
    telefono: '+54 3573 405-115',
    horario: 'Mar a dom 08:00 - 13:30 / 17:30 - 21:00',
    descripcion: 'Cortes frescos, milanesas y pedidos por kilo con atención del día.',
    minimo: 8000,
    premium: true,
    categorias: [
      /* La carne va de medio kilo en medio kilo: nadie pide 250 g de asado. */
      { id: 'carniceria-vacuna', nombre: 'Carne vacuna', unidad: 'pesoMedio' },
      { id: 'carniceria-pollo', nombre: 'Pollo', unidad: 'pesoMedio' },
      { id: 'carniceria-achuras', nombre: 'Achuras', unidad: 'pesoMedio' },
      { id: 'carniceria-elaborados', nombre: 'Elaborados', unidad: 'unidad' },
    ],
    productos: [
      { nombre: 'Milanesas de ternera', precio: 9100, categoria: 'carniceria-vacuna', unidad: 'pesoMedio', stock: 30 },
      { nombre: 'Asado de tira', precio: 11500, categoria: 'carniceria-vacuna', unidad: 'pesoMedio', stock: 25 },
      { nombre: 'Carne picada especial', precio: 7800, categoria: 'carniceria-vacuna', unidad: 'pesoMedio', stock: 40 },
      { nombre: 'Vacío', precio: 12900, categoria: 'carniceria-vacuna', unidad: 'pesoMedio', stock: 15 },
      { nombre: 'Pollo entero', precio: 5450, categoria: 'carniceria-pollo', unidad: 'pesoMedio', stock: 20 },
      { nombre: 'Pechuga de pollo', precio: 8200, categoria: 'carniceria-pollo', unidad: 'pesoMedio', stock: 25 },
      { nombre: 'Chorizo criollo', precio: 6500, categoria: 'carniceria-achuras', unidad: 'pesoMedio', stock: 30 },
      { nombre: 'Morcilla', precio: 5200, categoria: 'carniceria-achuras', unidad: 'pesoMedio', stock: 20 },
      { nombre: 'Chinchulines', precio: 7400, categoria: 'carniceria-achuras', unidad: 'pesoMedio', stock: 12 },
      { nombre: 'Hamburguesas caseras x4', precio: 6200, categoria: 'carniceria-elaborados', stock: 25 },
      { nombre: 'Medallones de pollo x6', precio: 5800, categoria: 'carniceria-elaborados', stock: 20 },
    ],
    ofertas: [
      {
        tipo: 'descuento',
        titulo: 'Asado al 10%',
        porcentaje: 10,
        productos: ['Asado de tira'],
      },
      {
        tipo: 'combo',
        titulo: 'Combo parrilla',
        precioFinal: 21000,
        productos: ['Asado de tira', 'Chorizo criollo', 'Morcilla'],
      },
    ],
  },
];

const pesos = (monto) => Math.round(monto * 100);
const comilla = (texto) =>
  texto === null || texto === undefined ? 'NULL' : `'${String(texto).replace(/'/g, "''")}'`;

/* Los ids se derivan del nombre para que volver a correr el script escriba
   siempre los mismos: si fueran aleatorios, cada corrida duplicaría todo. */
const idProducto = (comercioId, nombre) =>
  `${comercioId}-${nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`.slice(0, 90);

function construirSql() {
  const lineas = [];
  const ids = COMERCIOS.map((comercio) => comilla(comercio.id)).join(', ');

  /* Se borra primero lo sembrado: así una segunda corrida actualiza en lugar
     de fallar por claves repetidas. El orden respeta las dependencias. */
  lineas.push(
    `DELETE FROM oferta_productos WHERE oferta_id IN (SELECT id FROM ofertas WHERE comercio_id IN (${ids}));`,
    `DELETE FROM ofertas WHERE comercio_id IN (${ids});`,
    `DELETE FROM productos WHERE comercio_id IN (${ids});`,
    `DELETE FROM categorias WHERE comercio_id IN (${ids});`,
    `DELETE FROM comercios WHERE id IN (${ids});`,
  );

  /* El dueño se inserta sin contraseña: es sólo el titular de los comercios
     de muestra, no una cuenta con la que se entre. */
  lineas.push(
    `INSERT OR IGNORE INTO usuarios (id, email, nombre, rol) VALUES (${comilla(DUENO.id)}, ${comilla(DUENO.email)}, ${comilla(DUENO.nombre)}, 'comercio');`,
    `INSERT OR IGNORE INTO usuario_roles (usuario_id, rol, estado) VALUES (${comilla(DUENO.id)}, 'comercio', 'aprobado');`,
  );

  for (const comercio of COMERCIOS) {
    lineas.push(
      `INSERT INTO comercios (id, usuario_id, nombre, rubro_id, rubro_nombre, direccion, lat, lon, telefono, horario, descripcion, premium, minimo_centavos, estado) VALUES (` +
        [
          comilla(comercio.id),
          comilla(DUENO.id),
          comilla(comercio.nombre),
          comilla(comercio.rubroId),
          comilla(comercio.rubroNombre),
          comilla(comercio.direccion),
          comercio.lat,
          comercio.lon,
          comilla(comercio.telefono),
          comilla(comercio.horario),
          comilla(comercio.descripcion),
          comercio.premium ? 1 : 0,
          pesos(comercio.minimo),
          `'aprobado'`,
        ].join(', ') +
        ');',
    );

    comercio.categorias.forEach((categoria, orden) => {
      lineas.push(
        `INSERT INTO categorias (id, comercio_id, nombre, unidad_venta, orden) VALUES (${comilla(categoria.id)}, ${comilla(comercio.id)}, ${comilla(categoria.nombre)}, ${comilla(categoria.unidad)}, ${orden});`,
      );
    });

    for (const producto of comercio.productos) {
      const unidad =
        producto.unidad ??
        comercio.categorias.find((fila) => fila.id === producto.categoria)?.unidad ??
        'unidad';

      lineas.push(
        `INSERT INTO productos (id, comercio_id, categoria_id, nombre, precio_centavos, unidad_venta, stock, activo) VALUES (` +
          [
            comilla(idProducto(comercio.id, producto.nombre)),
            comilla(comercio.id),
            comilla(producto.categoria),
            comilla(producto.nombre),
            pesos(producto.precio),
            comilla(unidad),
            producto.stock ?? 'NULL',
            1,
          ].join(', ') +
          ');',
      );
    }

    for (const [indice, oferta] of (comercio.ofertas ?? []).entries()) {
      const partes = oferta.productos.map((nombre) => {
        const producto = comercio.productos.find((fila) => fila.nombre === nombre);

        if (!producto) {
          throw new Error(`La oferta "${oferta.titulo}" nombra un producto que no existe: ${nombre}`);
        }

        return producto;
      });

      /* El precio de lista se calcula igual que en el servidor, para que la
         oferta sembrada sea coherente con las que carga el comercio. */
      const unidades = oferta.tipo === 'cantidad' ? oferta.cantidad : 1;
      const lista = partes.reduce((suma, producto) => suma + pesos(producto.precio) * unidades, 0);
      const final =
        oferta.tipo === 'descuento'
          ? Math.round((lista * (100 - oferta.porcentaje)) / 100)
          : pesos(oferta.precioFinal);

      if (final > lista) {
        throw new Error(`La oferta "${oferta.titulo}" sale más cara que sin promoción.`);
      }

      const ofertaId = `${comercio.id}-oferta-${indice + 1}`;

      lineas.push(
        `INSERT INTO ofertas (id, comercio_id, tipo, titulo, porcentaje, cantidad, precio_final_centavos, precio_lista_centavos, activa) VALUES (` +
          [
            comilla(ofertaId),
            comilla(comercio.id),
            comilla(oferta.tipo),
            comilla(oferta.titulo),
            oferta.porcentaje ?? 'NULL',
            oferta.cantidad ?? 'NULL',
            final,
            lista,
            1,
          ].join(', ') +
          ');',
      );

      for (const producto of partes) {
        lineas.push(
          `INSERT INTO oferta_productos (oferta_id, producto_id, unidades) VALUES (${comilla(ofertaId)}, ${comilla(idProducto(comercio.id, producto.nombre))}, 1);`,
        );
      }
    }
  }

  return lineas.join('\n');
}

const sql = construirSql();
const archivo = join(tmpdir(), `seed-lafranciago-${Date.now()}.sql`);

writeFileSync(archivo, sql, 'utf8');

const comercios = COMERCIOS.length;
const productos = COMERCIOS.reduce((suma, comercio) => suma + comercio.productos.length, 0);
const ofertas = COMERCIOS.reduce((suma, comercio) => suma + (comercio.ofertas?.length ?? 0), 0);

console.log(`Sembrando ${comercios} comercios, ${productos} productos y ${ofertas} ofertas...`);

try {
  execFileSync(
    'npx',
    ['wrangler', 'd1', 'execute', BASE, LOCAL ? '--local' : '--remote', `--file=${archivo}`],
    { stdio: 'inherit', shell: process.platform === 'win32' },
  );

  console.log('Listo.');
} finally {
  unlinkSync(archivo);
}
