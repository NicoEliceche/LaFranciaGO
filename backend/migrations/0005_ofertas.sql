-- Ofertas del comercio: descuento, combo y promo por cantidad.

-- ── Ofertas ──
--
-- Un comercio arma su propia promoción sin esperar aprobación: ya fue
-- aprobado para vender, y hacerlo esperar por cada descuento frenaría la
-- operación del día. Si hay abuso, el admin la da de baja.
--
-- Los tres tipos comparten tabla porque comparten casi todo (comercio,
-- vigencia, foto, precio final) y se listan siempre juntos. Lo que cambia es
-- qué columna tiene sentido en cada uno:
--
--   descuento  → un producto y un porcentaje, que se pinta sobre la foto.
--   combo      → varios productos a un precio total menor que la suma.
--   cantidad   → un producto, cuántas unidades y cuánto se descuenta.

CREATE TABLE ofertas (
  id           TEXT PRIMARY KEY,
  comercio_id  TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  tipo         TEXT NOT NULL,
  titulo       TEXT NOT NULL,
  descripcion  TEXT,
  -- Porcentaje entero (10 = 10 %). Sólo en 'descuento'.
  porcentaje   INTEGER,
  -- Unidades que hay que llevar para que valga. Sólo en 'cantidad'.
  cantidad     INTEGER,
  -- Lo que termina pagando el cliente, en centavos como todo el resto.
  -- En 'descuento' y 'combo' es el precio final; en 'cantidad' es el precio
  -- del paquete de N unidades.
  precio_final_centavos INTEGER NOT NULL,
  -- Lo que costaría sin la oferta. Se guarda calculado para poder mostrar el
  -- precio tachado aunque el comercio cambie el precio del producto después.
  precio_lista_centavos INTEGER NOT NULL,
  foto_url     TEXT,
  -- Vigencia opcional: sin fechas, la oferta vale mientras esté activa.
  desde        TEXT,
  hasta        TEXT,
  activa       INTEGER NOT NULL DEFAULT 1,
  creado_en    TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (tipo IN ('descuento', 'combo', 'cantidad')),
  CHECK (precio_final_centavos >= 0),
  -- Una oferta que no baja el precio no es una oferta.
  CHECK (precio_final_centavos <= precio_lista_centavos)
);

CREATE INDEX idx_ofertas_comercio ON ofertas (comercio_id, activa);

-- ── Productos de la oferta ──
--
-- Tabla aparte en lugar de una lista JSON: el producto necesita saber si está
-- en oferta para mostrar el precio tachado, y esa consulta va del producto
-- hacia la oferta. Con JSON habría que leer todas las ofertas y recorrerlas.
--
-- El descuento y la promo por cantidad tienen una sola fila acá; el combo,
-- una por producto.

CREATE TABLE oferta_productos (
  oferta_id   TEXT NOT NULL REFERENCES ofertas (id) ON DELETE CASCADE,
  producto_id TEXT NOT NULL REFERENCES productos (id) ON DELETE CASCADE,
  -- Cuántas unidades de este producto entran en el combo.
  unidades    INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (oferta_id, producto_id)
);

CREATE INDEX idx_oferta_productos_producto ON oferta_productos (producto_id);
