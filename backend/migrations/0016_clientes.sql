-- ── Clientes del comercio ──
--
-- Hasta acá había pedidos, no personas. Se sabía que el pedido #966237 fue a
-- Barrio Los Aromos, pero no que esa misma señora compra todas las semanas.
--
-- No se reusa la tabla usuarios porque la mayoría de los clientes del
-- mostrador no tienen cuenta en la aplicación: entran, compran y se van.
-- Crear un usuario para cada uno llenaría la tabla de cuentas que nunca van
-- a iniciar sesión, y además el cliente es del comercio: el mismo señor
-- puede ser cliente de la panadería y no del almacén.
--
-- Cuando sí tiene cuenta, usuario_id los une y el historial muestra las dos
-- cosas: lo que pidió por la aplicación y lo que compró en el mostrador.

CREATE TABLE clientes (
  id          TEXT PRIMARY KEY,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  -- Si además tiene cuenta en LaFranciaGO, cuál.
  usuario_id  TEXT REFERENCES usuarios (id) ON DELETE SET NULL,

  nombre      TEXT NOT NULL,
  telefono    TEXT,
  email       TEXT,
  direccion   TEXT,
  -- Cumpleaños, alergias, "no le gusta el pan de ayer": lo que el comercio
  -- necesite recordar de esa persona.
  nota        TEXT,

  activo      INTEGER NOT NULL DEFAULT 1,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_clientes_comercio ON clientes (comercio_id, activo, nombre);

-- Un usuario no puede estar dos veces como cliente del mismo comercio: si
-- no, su historial quedaría partido en dos fichas.
CREATE UNIQUE INDEX idx_clientes_usuario
  ON clientes (comercio_id, usuario_id)
  WHERE usuario_id IS NOT NULL;

-- El teléfono es como se busca a alguien en el mostrador ("¿tu teléfono?"),
-- así que conviene que sea único dentro del comercio.
CREATE UNIQUE INDEX idx_clientes_telefono
  ON clientes (comercio_id, telefono)
  WHERE telefono IS NOT NULL;

-- La venta apunta a la ficha, para poder ir de una compra a la persona.
ALTER TABLE ventas ADD COLUMN cliente_ficha_id TEXT REFERENCES clientes (id) ON DELETE SET NULL;

CREATE INDEX idx_ventas_ficha ON ventas (cliente_ficha_id);

-- Y la cuenta de fiado también: el colegio que saca a cuenta es un cliente,
-- no una entidad aparte.
ALTER TABLE cuentas_fiado ADD COLUMN cliente_id TEXT REFERENCES clientes (id) ON DELETE SET NULL;
