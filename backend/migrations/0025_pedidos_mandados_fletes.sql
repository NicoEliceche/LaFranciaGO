-- Tres cosas distintas, en dos tablas: pedidos y fletes.
--
-- Hasta ahora habia una tabla `mandados` que guardaba dos cosas que no se
-- parecen, separadas por una columna `tipo`. Estaba mal planteado:
--
--   Un pedido es una compra: un carrito de uno o mas negocios.
--   Un mandado es un pedido tambien, solo que sin comercio detras: alguien
--     va, lo compra o lo retira, y lo trae. Lo lleva quien reparte.
--   Un flete es otra cosa: no se compra nada, se traslada algo grande, hace
--     falta un vehiculo mayor y el precio se cotiza caso por caso.
--
-- Asi que el mandado pasa a ser un pedido con `tipo_pedido = 'mandado'`, y
-- el flete se queda con tabla propia. Para informes: se filtra el tipo
-- dentro de pedidos para separar pedido de mandado, y los fletes se cuentan
-- aparte.
--
-- El nombre es `tipo_pedido` y no `tipo` porque `pedidos.tipo` ya existe de
-- antes con otro significado —si entra en un auto o necesita camioneta— y
-- dos columnas parecidas con nombres iguales se confunden al leer una
-- consulta a las seis de la tarde.

-- ── Los mandados pasan a ser pedidos ──
--
-- Un mandado no sale de ningun comercio, asi que `comercio_id` no puede
-- seguir siendo obligatorio. SQLite no permite aflojar un NOT NULL, por eso
-- se rehace la tabla: es el procedimiento que documenta SQLite para esto y
-- el unico que no pierde datos.

CREATE TABLE pedidos_nuevo (
  id             TEXT PRIMARY KEY,
  codigo         TEXT NOT NULL UNIQUE,
  usuario_id     TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- Ahora admite nulo: un mandado no tiene comercio.
  comercio_id    TEXT REFERENCES comercios (id) ON DELETE CASCADE,
  direccion_id   TEXT REFERENCES direcciones (id) ON DELETE SET NULL,
  direccion_texto TEXT NOT NULL,
  -- pedido | mandado
  tipo_pedido    TEXT NOT NULL DEFAULT 'pedido',
  -- Lo que hay que hacer, cuando es un mandado. Un pedido lo dice con sus
  -- lineas; un mandado es texto libre porque todavia no existe lo que se va
  -- a comprar.
  descripcion    TEXT,
  subtotal_centavos INTEGER NOT NULL DEFAULT 0,
  envio_centavos    INTEGER NOT NULL DEFAULT 0,
  total_centavos    INTEGER NOT NULL DEFAULT 0,
  estado         TEXT NOT NULL DEFAULT 'proceso',
  estado_detalle TEXT,
  metodo_pago    TEXT,
  creado_en      TEXT NOT NULL DEFAULT (datetime('now')),
  tipo           TEXT NOT NULL DEFAULT 'pedido',
  preferencia_envio TEXT,
  volumen_litros REAL,
  pedido_padre_id TEXT,
  parte_numero   INTEGER,
  partes_total   INTEGER,
  preparacion    TEXT,
  pago_estado    TEXT,
  preparando_en  TEXT,
  listo_en       TEXT,
  -- De donde sale el mandado, cuando quien lo pide marca un punto.
  lat            REAL,
  lon            REAL,
  CHECK (estado IN ('proceso', 'terminado', 'cancelado')),
  CHECK (tipo_pedido IN ('pedido', 'mandado')),
  -- Un pedido sin comercio no existe; un mandado sin descripcion tampoco.
  CHECK (
    (tipo_pedido = 'pedido' AND comercio_id IS NOT NULL) OR
    (tipo_pedido = 'mandado' AND descripcion IS NOT NULL)
  )
);

INSERT INTO pedidos_nuevo (
  id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
  subtotal_centavos, envio_centavos, total_centavos, estado, estado_detalle,
  metodo_pago, creado_en, tipo, preferencia_envio, volumen_litros,
  pedido_padre_id, parte_numero, partes_total, preparacion,
  pago_estado, preparando_en, listo_en
)
SELECT
  id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
  subtotal_centavos, envio_centavos, total_centavos, estado, estado_detalle,
  metodo_pago, creado_en, tipo, preferencia_envio, volumen_litros,
  pedido_padre_id, parte_numero, partes_total, preparacion,
  pago_estado, preparando_en, listo_en
FROM pedidos;

DROP TABLE pedidos;
ALTER TABLE pedidos_nuevo RENAME TO pedidos;

CREATE INDEX idx_pedidos_usuario ON pedidos (usuario_id, creado_en DESC);
CREATE INDEX idx_pedidos_comercio ON pedidos (comercio_id, estado);
-- Para los informes: separar pedidos de mandados es la consulta que se va a
-- hacer siempre.
CREATE INDEX idx_pedidos_tipo ON pedidos (tipo_pedido, creado_en DESC);

-- ── Los fletes, en su propia tabla ──

CREATE TABLE fletes (
  id            TEXT PRIMARY KEY,
  codigo        TEXT NOT NULL UNIQUE,
  usuario_id    TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- Que hay que trasladar, de donde a donde.
  descripcion   TEXT NOT NULL,
  origen_texto  TEXT,
  destino_texto TEXT,
  origen_lat    REAL,
  origen_lon    REAL,
  destino_lat   REAL,
  destino_lon   REAL,
  -- buscando | tomado | entregado | cancelado
  estado        TEXT NOT NULL DEFAULT 'buscando',
  fletero_id    TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  -- Lo que se acordo, cuando se acepto una cotizacion. Un flete no tiene
  -- precio hasta que alguien lo cotiza.
  precio_centavos INTEGER,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  tomado_en     TEXT,
  entregado_en  TEXT,
  CHECK (estado IN ('buscando', 'tomado', 'entregado', 'cancelado'))
);

CREATE INDEX idx_fletes_estado ON fletes (estado, creado_en DESC);
CREATE INDEX idx_fletes_usuario ON fletes (usuario_id, creado_en DESC);
CREATE INDEX idx_fletes_fletero ON fletes (fletero_id, estado);

-- Los mensajes del chat del flete. El del mandado ahora es el del pedido,
-- pero el flete sigue necesitando el suyo.
CREATE TABLE flete_mensajes (
  id         TEXT PRIMARY KEY,
  flete_id   TEXT NOT NULL REFERENCES fletes (id) ON DELETE CASCADE,
  autor_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  texto      TEXT,
  tipo       TEXT NOT NULL DEFAULT 'texto',
  media_url  TEXT,
  leido      INTEGER NOT NULL DEFAULT 0,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_flete_mensajes ON flete_mensajes (flete_id, creado_en);

-- ── Se muda lo que ya existe ──

-- Los mandados pasan a pedidos. El codigo se arma con el id, que es lo unico
-- que tienen; los que se creen de ahora en mas lo reciben como los demas.
INSERT INTO pedidos (
  id, codigo, usuario_id, comercio_id, direccion_id, direccion_texto,
  tipo_pedido, descripcion, subtotal_centavos, envio_centavos,
  total_centavos, estado, creado_en, lat, lon
)
SELECT
  m.id,
  'M-' || UPPER(SUBSTR(REPLACE(m.id, '-', ''), 1, 6)),
  m.usuario_id,
  NULL,
  NULL,
  COALESCE(m.direccion_texto, 'A convenir'),
  'mandado',
  m.descripcion,
  0, 0, 0,
  CASE
    WHEN m.estado = 'entregado' THEN 'terminado'
    WHEN m.estado = 'cancelado' THEN 'cancelado'
    ELSE 'proceso'
  END,
  m.creado_en,
  m.lat,
  m.lon
FROM mandados m
WHERE m.tipo = 'mandado';

-- Y los fletes a su tabla.
INSERT INTO fletes (
  id, codigo, usuario_id, descripcion, destino_texto, destino_lat,
  destino_lon, estado, fletero_id, creado_en
)
SELECT
  m.id,
  'F-' || UPPER(SUBSTR(REPLACE(m.id, '-', ''), 1, 6)),
  m.usuario_id,
  m.descripcion,
  m.direccion_texto,
  m.lat,
  m.lon,
  m.estado,
  m.repartidor_id,
  m.creado_en
FROM mandados m
WHERE m.tipo = 'flete';

-- Los mandados que ya estaban tomados conservan a quien los lleva: se anota
-- en envios, que es donde vive esa relacion para todo lo que reparte.
INSERT INTO envios (id, pedido_id, repartidor_id, estado, asignado_en, entregado_en)
SELECT
  LOWER(HEX(RANDOMBLOB(16))),
  m.id,
  m.repartidor_id,
  CASE WHEN m.estado = 'entregado' THEN 'entregado' ELSE 'asignado' END,
  m.creado_en,
  CASE WHEN m.estado = 'entregado' THEN m.creado_en END
FROM mandados m
WHERE m.tipo = 'mandado' AND m.repartidor_id IS NOT NULL;

-- Los mensajes del chat del mandado pasan a ser mensajes del pedido: es el
-- mismo chat, sobre lo que ahora es un pedido.
-- `leido` no existe en la tabla vieja: el chat del mandado nunca llevo la
-- cuenta de lo no leido. Entran como leidos, que es lo correcto para
-- conversaciones que ya pasaron.
INSERT INTO pedido_mensajes (id, pedido_id, autor_id, texto, tipo, media_url, leido, creado_en)
SELECT mm.id, mm.mandado_id, mm.autor_id, mm.texto, mm.tipo, mm.media_url,
       1, mm.creado_en
FROM mandado_mensajes mm
JOIN mandados m ON m.id = mm.mandado_id
WHERE m.tipo = 'mandado';

-- Y los del flete, a los suyos.
INSERT INTO flete_mensajes (id, flete_id, autor_id, texto, tipo, media_url, leido, creado_en)
SELECT mm.id, mm.mandado_id, mm.autor_id, mm.texto, mm.tipo, mm.media_url,
       1, mm.creado_en
FROM mandado_mensajes mm
JOIN mandados m ON m.id = mm.mandado_id
WHERE m.tipo = 'flete';

-- La tabla vieja queda un tiempo, sin usarse, por si hay que mirar algo. Se
-- borra en una migracion posterior cuando esto lleve un tiempo andando: una
-- tabla de sobra no molesta, y perder datos por apurarse no se deshace.
