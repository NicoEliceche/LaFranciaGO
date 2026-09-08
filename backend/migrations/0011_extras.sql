-- Extras del pedido y avisos del sistema en el chat.

-- ── Mensajes del sistema ──
--
-- El chat necesita decir cosas que no dice nadie: "Fulano se sumó al chat",
-- "el extra fue aceptado". Se distinguen por tipo para que la pantalla los
-- muestre centrados y en gris, no como un mensaje más de alguien.

DROP INDEX IF EXISTS idx_pedido_mensajes;
DROP INDEX IF EXISTS idx_mensajes_no_leidos;

CREATE TABLE pedido_mensajes_nuevo (
  id         TEXT PRIMARY KEY,
  pedido_id  TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  autor_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  texto      TEXT,
  -- texto | foto | audio | sistema | extra
  --   sistema  lo escribe la app: quién entró, qué se aceptó
  --   extra    el pedido de algo que no estaba en el pedido original
  tipo       TEXT NOT NULL DEFAULT 'texto',
  media_url  TEXT,
  -- Si el mensaje es de un extra, apunta a él para poder mostrar su estado.
  extra_id   TEXT,
  leido      INTEGER NOT NULL DEFAULT 0,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (tipo IN ('texto', 'foto', 'audio', 'sistema', 'extra'))
);

INSERT INTO pedido_mensajes_nuevo (id, pedido_id, autor_id, texto, tipo, media_url, leido, creado_en)
SELECT id, pedido_id, autor_id, texto, tipo, media_url, leido, creado_en FROM pedido_mensajes;

DROP TABLE pedido_mensajes;
ALTER TABLE pedido_mensajes_nuevo RENAME TO pedido_mensajes;

CREATE INDEX idx_pedido_mensajes ON pedido_mensajes (pedido_id, creado_en);
CREATE INDEX idx_mensajes_no_leidos ON pedido_mensajes (pedido_id, leido);

-- ── Extras ──
--
-- "Ya que vas al kiosco, traeme un chocolate". No estaba en el pedido, no
-- tiene precio hasta que alguien lo compra, y lo puede cancelar cualquiera
-- de los dos por motivos distintos.
--
-- El recorrido:
--
--   pedido    el cliente lo pidió por el chat
--   aceptado  el repartidor dijo que sí
--   comprado  lo compró y cargó cuánto salió, con foto del ticket
--   cobrado   el cliente lo pagó
--   rechazado el repartidor no lo tomó
--   cancelado se dio de baja, por quien sea
--
-- El precio lo carga quien compra, no quien pide: es el único que sabe
-- cuánto salió. Y va con foto del ticket, porque es plata que el cliente
-- paga sin haber visto el precio de antemano.

CREATE TABLE extras (
  id            TEXT PRIMARY KEY,
  pedido_id     TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  -- Quién lo pidió: siempre el cliente, pero se guarda para el historial.
  solicitante_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  repartidor_id TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  descripcion   TEXT NOT NULL,
  estado        TEXT NOT NULL DEFAULT 'pedido',
  -- Cuánto salió, en centavos. Null hasta que se compra.
  precio_centavos INTEGER,
  -- Foto del ticket: el respaldo de ese precio.
  ticket_url    TEXT,
  -- Por qué se rechazó o se canceló, y quién lo hizo.
  motivo        TEXT,
  cancelado_por TEXT,
  -- Una cancelación del cliente sobre algo ya comprado necesita que el
  -- repartidor la acepte: si no, alguien se queda con la mercadería pagada.
  espera_confirmacion INTEGER NOT NULL DEFAULT 0,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  actualizado_en TEXT,
  CHECK (estado IN ('pedido', 'aceptado', 'comprado', 'cobrado', 'rechazado', 'cancelado'))
);

CREATE INDEX idx_extras_pedido ON extras (pedido_id, estado);
CREATE INDEX idx_extras_repartidor ON extras (repartidor_id, estado);
