-- Operación diaria: envíos, seguimiento y chat de pedidos.

-- ── Envíos ──
--
-- Un pedido puede tener envío o ser para retirar. Cuando tiene, acá se sigue
-- quién lo lleva y por dónde va.

CREATE TABLE envios (
  id            TEXT PRIMARY KEY,
  pedido_id     TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  repartidor_id TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  -- buscando | asignado | retirado | en_camino | entregado | cancelado
  estado        TEXT NOT NULL DEFAULT 'buscando',
  -- Última posición conocida del repartidor.
  lat           REAL,
  lon           REAL,
  -- Cuándo se actualizó la posición: una de hace media hora no sirve para
  -- mostrar "va llegando", así que la interfaz necesita saber si está fresca.
  ubicacion_en  TEXT,
  asignado_en   TEXT,
  entregado_en  TEXT,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (estado IN ('buscando', 'asignado', 'retirado', 'en_camino', 'entregado', 'cancelado'))
);

CREATE INDEX idx_envios_pedido ON envios (pedido_id);
CREATE INDEX idx_envios_repartidor ON envios (repartidor_id, estado);

-- ── Chat de pedidos ──
--
-- Conversación entre el cliente y el comercio sobre un pedido concreto. Va
-- atada al pedido y no suelta entre dos personas: así el comercio ve de qué
-- se está hablando sin preguntar.

CREATE TABLE pedido_mensajes (
  id         TEXT PRIMARY KEY,
  pedido_id  TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  autor_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  texto      TEXT,
  tipo       TEXT NOT NULL DEFAULT 'texto',
  media_url  TEXT,
  -- Para marcar lo no leído sin traer toda la conversación.
  leido      INTEGER NOT NULL DEFAULT 0,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (tipo IN ('texto', 'foto', 'audio'))
);

CREATE INDEX idx_pedido_mensajes ON pedido_mensajes (pedido_id, creado_en);
CREATE INDEX idx_mensajes_no_leidos ON pedido_mensajes (pedido_id, leido);
