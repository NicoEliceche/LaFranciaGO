-- Reseñas, horarios, stock, cotización de fletes y reclamos.

-- ── Reseñas ──
--
-- Una por pedido entregado: puntuar sin haber comprado convierte la
-- calificación en algo que se puede inflar o ensuciar sin costo.
--
-- Se puntúa al comercio y, si hubo, a quien lo trajo: son dos trabajos
-- distintos y el cliente puede estar conforme con uno y no con el otro.

CREATE TABLE resenas (
  id            TEXT PRIMARY KEY,
  pedido_id     TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  usuario_id    TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  comercio_id   TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  repartidor_id TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  -- De 1 a 5 estrellas.
  puntaje_comercio   INTEGER NOT NULL,
  puntaje_repartidor INTEGER,
  comentario    TEXT,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (puntaje_comercio BETWEEN 1 AND 5),
  CHECK (puntaje_repartidor IS NULL OR puntaje_repartidor BETWEEN 1 AND 5),
  -- Una sola reseña por pedido: si no, el mismo pedido puntúa diez veces.
  UNIQUE (pedido_id)
);

CREATE INDEX idx_resenas_comercio ON resenas (comercio_id, creado_en DESC);
CREATE INDEX idx_resenas_repartidor ON resenas (repartidor_id);

-- El promedio se guarda calculado: se lee en cada listado de comercios y
-- recalcularlo ahí sería recorrer todas las reseñas en cada búsqueda.
ALTER TABLE comercios ADD COLUMN puntaje REAL;
ALTER TABLE comercios ADD COLUMN resenas_count INTEGER NOT NULL DEFAULT 0;

-- ── Horarios de atención ──
--
-- Hasta ahora el horario era un texto libre: la app no podía saber si el
-- comercio estaba abierto, así que todos figuraban abiertos siempre, incluso
-- a las tres de la mañana.
--
-- Una fila por tramo: un comercio que cierra al mediodía tiene dos tramos el
-- mismo día, y eso no entra en un solo par de horarios.

CREATE TABLE horarios (
  id          TEXT PRIMARY KEY,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  -- 0 = domingo, 6 = sábado, como los devuelve JavaScript.
  dia         INTEGER NOT NULL,
  -- Minutos desde medianoche: comparar números es más simple y más rápido
  -- que comparar textos de hora.
  abre_min    INTEGER NOT NULL,
  cierra_min  INTEGER NOT NULL,
  CHECK (dia BETWEEN 0 AND 6),
  CHECK (abre_min BETWEEN 0 AND 1439),
  CHECK (cierra_min BETWEEN 1 AND 1440)
);

CREATE INDEX idx_horarios_comercio ON horarios (comercio_id, dia);

-- Un comercio puede cerrar por vacaciones sin borrar sus horarios.
ALTER TABLE comercios ADD COLUMN cerrado_temporal INTEGER NOT NULL DEFAULT 0;

-- ── Cotización de fletes ──
--
-- Un flete no tiene precio de lista: depende de cuánto hay que llevar y hasta
-- dónde. El fletero ve la distancia, cotiza, y el cliente decide.

CREATE TABLE cotizaciones (
  id          TEXT PRIMARY KEY,
  pedido_id   TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  fletero_id  TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  precio_centavos INTEGER NOT NULL,
  -- Cuántos km calculó la app entre el origen y el destino.
  distancia_km REAL,
  nota        TEXT,
  -- pendiente | aceptada | rechazada | vencida
  estado      TEXT NOT NULL DEFAULT 'pendiente',
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  resuelto_en TEXT,
  CHECK (estado IN ('pendiente', 'aceptada', 'rechazada', 'vencida')),
  CHECK (precio_centavos > 0)
);

CREATE INDEX idx_cotizaciones_pedido ON cotizaciones (pedido_id, estado);
CREATE INDEX idx_cotizaciones_fletero ON cotizaciones (fletero_id, estado);

-- Qué tipo de trabajo es: un flete no se mezcla con los pedidos de almacén.
ALTER TABLE pedidos ADD COLUMN tipo TEXT NOT NULL DEFAULT 'pedido';

-- ── Reclamos ──
--
-- Cuando algo sale mal, las tres partes tienen que poder hablar: el comercio
-- sabe qué mandó, el repartidor qué llevó, y administración decide. Por eso
-- el chat del reclamo es aparte del chat del pedido.

CREATE TABLE reclamos (
  id          TEXT PRIMARY KEY,
  pedido_id   TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  -- Quién lo abrió: cliente, comercio, repartidor o administración.
  abierto_por TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  motivo      TEXT NOT NULL,
  detalle     TEXT,
  -- abierto | en_revision | resuelto | cerrado
  estado      TEXT NOT NULL DEFAULT 'abierto',
  -- Qué se decidió y quién se hizo cargo.
  resolucion  TEXT,
  resuelto_por TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  resuelto_en TEXT,
  CHECK (estado IN ('abierto', 'en_revision', 'resuelto', 'cerrado'))
);

CREATE INDEX idx_reclamos_estado ON reclamos (estado, creado_en DESC);
CREATE INDEX idx_reclamos_pedido ON reclamos (pedido_id);

-- El chat del reclamo: entre comercio, repartidor y administración. El
-- cliente no participa acá; se le contesta después, por el chat del pedido.
CREATE TABLE reclamo_mensajes (
  id         TEXT PRIMARY KEY,
  reclamo_id TEXT NOT NULL REFERENCES reclamos (id) ON DELETE CASCADE,
  autor_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  texto      TEXT NOT NULL,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_reclamo_mensajes ON reclamo_mensajes (reclamo_id, creado_en);
