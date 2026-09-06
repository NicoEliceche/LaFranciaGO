-- Esquema inicial de LaFranciaGO.
--
-- D1 es SQLite: no hay tipos JSON nativos ni arrays, así que las listas se
-- guardan como texto JSON y las fechas como texto ISO 8601, que ordena
-- alfabéticamente igual que cronológicamente.
--
-- Los importes van en centavos y como INTEGER: guardar dinero en punto
-- flotante arrastra errores de redondeo que aparecen recién al sumar.

-- ── Usuarios ──

CREATE TABLE usuarios (
  id            TEXT PRIMARY KEY,
  email         TEXT NOT NULL UNIQUE,
  -- Hash con salt incluido. Nunca se guarda la contraseña en claro.
  password_hash TEXT NOT NULL,
  nombre        TEXT NOT NULL,
  telefono      TEXT,
  foto_url      TEXT,
  -- cliente | comercio | delivery | fletero | admin
  rol           TEXT NOT NULL DEFAULT 'cliente',
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (rol IN ('cliente', 'comercio', 'delivery', 'fletero', 'admin'))
);

CREATE INDEX idx_usuarios_email ON usuarios (email);

-- ── Direcciones del cliente ──

CREATE TABLE direcciones (
  id          TEXT PRIMARY KEY,
  usuario_id  TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  etiqueta    TEXT NOT NULL,
  direccion   TEXT NOT NULL,
  -- El pin es la fuente de verdad: en La Francia OSM no tiene numeración.
  lat         REAL,
  lon         REAL,
  es_principal INTEGER NOT NULL DEFAULT 0,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_direcciones_usuario ON direcciones (usuario_id);

-- ── Comercios ──

CREATE TABLE comercios (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  nombre        TEXT NOT NULL,
  razon_social  TEXT,
  cuit          TEXT,
  rubro_id      TEXT NOT NULL,
  rubro_nombre  TEXT NOT NULL,
  direccion     TEXT NOT NULL,
  lat           REAL,
  lon           REAL,
  telefono      TEXT,
  email         TEXT,
  horario       TEXT,
  zona          TEXT,
  descripcion   TEXT,
  redes         TEXT,
  medios_pago   TEXT,
  logo_url      TEXT,
  -- Plan pagado: mejora la posición dentro del radio cercano.
  premium       INTEGER NOT NULL DEFAULT 0,
  minimo_centavos INTEGER NOT NULL DEFAULT 0,
  -- pendiente | aprobado | rechazado | suspendido
  estado        TEXT NOT NULL DEFAULT 'pendiente',
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (estado IN ('pendiente', 'aprobado', 'rechazado', 'suspendido'))
);

-- El buscador filtra por estado y rubro: se indexan juntos.
CREATE INDEX idx_comercios_estado_rubro ON comercios (estado, rubro_id);
CREATE INDEX idx_comercios_usuario ON comercios (usuario_id);

-- ── Categorías internas del catálogo ──

CREATE TABLE categorias (
  id           TEXT PRIMARY KEY,
  comercio_id  TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  nombre       TEXT NOT NULL,
  descripcion  TEXT,
  -- unidad | peso | pesoMedio | docena
  unidad_venta TEXT NOT NULL DEFAULT 'unidad',
  orden        INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_categorias_comercio ON categorias (comercio_id);

-- ── Productos ──

CREATE TABLE productos (
  id             TEXT PRIMARY KEY,
  comercio_id    TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  categoria_id   TEXT REFERENCES categorias (id) ON DELETE SET NULL,
  nombre         TEXT NOT NULL,
  descripcion    TEXT,
  -- Precio del escalón base: de una unidad, o del kilo si se vende por peso.
  precio_centavos INTEGER NOT NULL,
  unidad_venta   TEXT NOT NULL DEFAULT 'unidad',
  -- Fotos y video como JSON: son pocos por producto y siempre se leen juntos.
  fotos          TEXT NOT NULL DEFAULT '[]',
  video_url      TEXT,
  stock          INTEGER,
  activo         INTEGER NOT NULL DEFAULT 1,
  creado_en      TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (unidad_venta IN ('unidad', 'peso', 'pesoMedio', 'docena'))
);

CREATE INDEX idx_productos_comercio ON productos (comercio_id, activo);
CREATE INDEX idx_productos_categoria ON productos (categoria_id);

-- ── Pedidos ──

CREATE TABLE pedidos (
  id             TEXT PRIMARY KEY,
  codigo         TEXT NOT NULL UNIQUE,
  usuario_id     TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- Un pedido pertenece a un solo comercio: cada uno prepara y entrega lo suyo.
  comercio_id    TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  direccion_id   TEXT REFERENCES direcciones (id) ON DELETE SET NULL,
  -- Se copia el texto de la dirección: si el cliente la borra después, el
  -- pedido tiene que seguir mostrando a dónde se entregó.
  direccion_texto TEXT NOT NULL,
  subtotal_centavos INTEGER NOT NULL,
  envio_centavos    INTEGER NOT NULL DEFAULT 0,
  total_centavos    INTEGER NOT NULL,
  -- proceso | terminado | cancelado
  estado         TEXT NOT NULL DEFAULT 'proceso',
  estado_detalle TEXT,
  metodo_pago    TEXT,
  creado_en      TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (estado IN ('proceso', 'terminado', 'cancelado'))
);

CREATE INDEX idx_pedidos_usuario ON pedidos (usuario_id, creado_en DESC);
CREATE INDEX idx_pedidos_comercio ON pedidos (comercio_id, estado);

-- ── Líneas del pedido ──

CREATE TABLE pedido_items (
  id           TEXT PRIMARY KEY,
  pedido_id    TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  producto_id  TEXT REFERENCES productos (id) ON DELETE SET NULL,
  -- Nombre y precio se copian: si el comercio cambia el precio mañana, el
  -- pedido viejo tiene que seguir mostrando lo que se cobró.
  nombre       TEXT NOT NULL,
  precio_centavos INTEGER NOT NULL,
  unidad_venta TEXT NOT NULL DEFAULT 'unidad',
  -- Escalón elegido dentro de la unidad de venta, empezando en 0.
  escalon      INTEGER NOT NULL DEFAULT 0,
  subtotal_centavos INTEGER NOT NULL
);

CREATE INDEX idx_pedido_items_pedido ON pedido_items (pedido_id);

-- ── Favoritos ──

CREATE TABLE favoritos (
  usuario_id  TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (usuario_id, comercio_id)
);

-- ── Mandados ──

CREATE TABLE mandados (
  id            TEXT PRIMARY KEY,
  usuario_id    TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  descripcion   TEXT NOT NULL,
  direccion_texto TEXT,
  lat           REAL,
  lon           REAL,
  -- buscando | tomado | entregado | cancelado
  estado        TEXT NOT NULL DEFAULT 'buscando',
  repartidor_id TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (estado IN ('buscando', 'tomado', 'entregado', 'cancelado'))
);

CREATE INDEX idx_mandados_estado ON mandados (estado, creado_en DESC);

-- ── Mensajes del chat del mandado ──

CREATE TABLE mandado_mensajes (
  id         TEXT PRIMARY KEY,
  mandado_id TEXT NOT NULL REFERENCES mandados (id) ON DELETE CASCADE,
  autor_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  texto      TEXT,
  -- texto | foto | audio
  tipo       TEXT NOT NULL DEFAULT 'texto',
  media_url  TEXT,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (tipo IN ('texto', 'foto', 'audio'))
);

CREATE INDEX idx_mensajes_mandado ON mandado_mensajes (mandado_id, creado_en);

-- ── Sesiones ──

CREATE TABLE sesiones (
  token      TEXT PRIMARY KEY,
  usuario_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  expira_en  TEXT NOT NULL,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_sesiones_usuario ON sesiones (usuario_id);
