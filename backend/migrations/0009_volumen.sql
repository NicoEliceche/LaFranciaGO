-- Volumen de los pedidos y tipo de vehículo.

-- ── Tamaño del producto ──
--
-- Cuánto ocupa cada producto, para saber si un pedido entra en una moto o
-- necesita un auto. Se guarda como una categoría de tamaño y no como medidas
-- exactas: nadie va a medir un paquete de fideos, y con cuatro escalones
-- alcanza para decidir qué vehículo hace falta.
--
--   chico      (2 L)  · un sachet de leche, un paquete de fideos
--   mediano    (6 L)  · una gaseosa de 2,25 L, un pan de kilo
--   grande     (15 L) · un pack de 6 botellas, una caja de pañales
--   voluminoso (40 L) · una garrafa, un bidón de 20 L
--
-- El valor se sugiere por rubro y unidad de venta al cargar el producto, y el
-- comercio lo corrige si no le cierra.

ALTER TABLE productos ADD COLUMN tamano TEXT NOT NULL DEFAULT 'mediano';

-- ── Vehículo del repartidor ──
--
-- Qué usa para trabajar. Decide qué pedidos puede tomar: una moto no lleva
-- lo que entra en un auto, y un flete de mudanza no entra en una camioneta.
--
--   moto | auto        para delivery
--   camioneta | camion  para fletes

ALTER TABLE usuario_roles ADD COLUMN vehiculo TEXT;

-- ── Qué pide el pedido ──
--
-- El cliente elige si acepta que se lo fraccionen o si prefiere esperar a que
-- venga alguien con un vehículo más grande y le llegue todo junto.
--
--   cualquiera  acepta moto o auto, y acepta que se fraccione
--   auto        quiere todo en un viaje: espera un auto
--   fraccionar  pidió expresamente varias entregas para recibir antes

ALTER TABLE pedidos ADD COLUMN preferencia_envio TEXT NOT NULL DEFAULT 'cualquiera';

-- Volumen total del pedido en litros, calculado al crearlo. Se guarda para no
-- recalcularlo en cada listado y para que valga aunque después cambien los
-- tamaños declarados de los productos.
ALTER TABLE pedidos ADD COLUMN volumen_litros REAL NOT NULL DEFAULT 0;

-- Cuando un pedido se parte, los hijos apuntan al original: así el cliente
-- ve "parte 1 de 3" y el comercio sabe que son el mismo encargo.
ALTER TABLE pedidos ADD COLUMN pedido_padre_id TEXT REFERENCES pedidos (id) ON DELETE SET NULL;
ALTER TABLE pedidos ADD COLUMN parte_numero INTEGER;
ALTER TABLE pedidos ADD COLUMN partes_total INTEGER;

CREATE INDEX idx_pedidos_padre ON pedidos (pedido_padre_id);

-- ── Pedidos de fraccionamiento ──
--
-- Cuando el repartidor dice que no le entra pero la app calculó que sí, el
-- comercio decide: es quien tiene el pedido armado delante y puede ver si
-- realmente no entraba.
--
-- Se guarda el pedido aunque se apruebe, para poder mirar después si alguien
-- pide fraccionar sistemáticamente lo que sí le entra.

CREATE TABLE fraccionamientos (
  id            TEXT PRIMARY KEY,
  pedido_id     TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  repartidor_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- En cuántas entregas quiere partirlo.
  partes        INTEGER NOT NULL,
  motivo        TEXT,
  -- Qué calculó la app: si el pedido entraba o no en su vehículo.
  entraba       INTEGER NOT NULL DEFAULT 0,
  -- pendiente | aprobado | rechazado
  estado        TEXT NOT NULL DEFAULT 'pendiente',
  resuelto_en   TEXT,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (estado IN ('pendiente', 'aprobado', 'rechazado')),
  CHECK (partes BETWEEN 2 AND 5)
);

CREATE INDEX idx_fraccionamientos_pedido ON fraccionamientos (pedido_id, estado);
CREATE INDEX idx_fraccionamientos_repartidor ON fraccionamientos (repartidor_id, creado_en);
