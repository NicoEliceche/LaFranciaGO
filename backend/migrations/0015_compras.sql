-- ── Compras y proveedores ──
--
-- El otro lado del mostrador. Hasta acá el stock sólo bajaba —por ventas— y
-- el costo se cargaba a mano producto por producto. Con esto el stock sube
-- cuando llega mercadería, y el costo se actualiza solo con lo que se pagó.
--
-- La deuda con proveedores usa la misma forma que el fiado, pero al revés:
-- allá deben al comercio, acá el comercio debe.

CREATE TABLE proveedores (
  id          TEXT PRIMARY KEY,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  nombre      TEXT NOT NULL,
  telefono    TEXT,
  email       TEXT,
  -- CUIT y dirección, para cuando haga falta el comprobante.
  cuit        TEXT,
  direccion   TEXT,
  nota        TEXT,
  activo      INTEGER NOT NULL DEFAULT 1,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_proveedores ON proveedores (comercio_id, activo, nombre);

CREATE TABLE compras (
  id           TEXT PRIMARY KEY,
  comercio_id  TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  proveedor_id TEXT REFERENCES proveedores (id) ON DELETE SET NULL,
  -- Número corto propio, como en las ventas.
  numero       INTEGER NOT NULL,
  -- El número que trae la factura del proveedor, para poder buscarla.
  comprobante  TEXT,

  total_centavos   INTEGER NOT NULL,
  -- Cuánto se le pagó hasta ahora. Menos que el total es deuda.
  pagado_centavos  INTEGER NOT NULL DEFAULT 0,

  nota         TEXT,
  -- abierta | anulada
  estado       TEXT NOT NULL DEFAULT 'abierta',
  -- Cuándo llegó la mercadería, que no siempre es cuándo se cargó.
  fecha        TEXT NOT NULL DEFAULT (date('now')),
  creado_por   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  creado_en    TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (estado IN ('abierta', 'anulada'))
);

CREATE UNIQUE INDEX idx_compras_numero ON compras (comercio_id, numero);
CREATE INDEX idx_compras_comercio ON compras (comercio_id, fecha DESC);
CREATE INDEX idx_compras_proveedor ON compras (proveedor_id);

-- Qué se compró. Igual que en las ventas, el nombre se copia: la factura de
-- hace tres meses tiene que seguir diciendo lo que decía.
CREATE TABLE compra_items (
  id          TEXT PRIMARY KEY,
  compra_id   TEXT NOT NULL REFERENCES compras (id) ON DELETE CASCADE,
  producto_id TEXT REFERENCES productos (id) ON DELETE SET NULL,
  nombre      TEXT NOT NULL,
  cantidad_milesimos INTEGER NOT NULL,
  -- Lo que se pagó por unidad en esta compra. Es lo que pasa a ser el costo
  -- del producto cuando la compra se registra.
  costo_centavos     INTEGER NOT NULL,
  subtotal_centavos  INTEGER NOT NULL
);

CREATE INDEX idx_compra_items ON compra_items (compra_id);

-- Cada pago al proveedor. Varios porque una factura se paga en cuotas o
-- mitad al recibir y mitad después.
CREATE TABLE compra_pagos (
  id         TEXT PRIMARY KEY,
  compra_id  TEXT NOT NULL REFERENCES compras (id) ON DELETE CASCADE,
  metodo     TEXT NOT NULL,
  monto_centavos INTEGER NOT NULL,
  nota       TEXT,
  -- De qué caja salió, cuando se pagó en efectivo del cajón.
  caja_id    TEXT REFERENCES cajas (id) ON DELETE SET NULL,
  creado_por TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (metodo IN ('efectivo', 'transferencia', 'tarjeta', 'cheque', 'cuenta_corriente'))
);

CREATE INDEX idx_compra_pagos ON compra_pagos (compra_id);
