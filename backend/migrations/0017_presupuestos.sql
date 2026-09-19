-- ── Presupuestos ──
--
-- Una venta que todavía no pasó. El comercio arma la lista con precios, se
-- la pasa al cliente, y recién si acepta se convierte en venta.
--
-- Mientras está pendiente no toca nada: ni el stock, ni la caja, ni la
-- ganancia. Un presupuesto no es plata, es una promesa.
--
-- Dos cosas que en Argentina no son opcionales:
--
-- Vence. Con la inflación, un presupuesto de hace un mes ya no vale, y
-- entregarle mercadería a ese precio es perder plata. Por eso lleva fecha de
-- vencimiento y el sistema avisa cuando pasó.
--
-- Los precios se congelan al momento de armarlo. Si mañana sube el costo, el
-- presupuesto sigue diciendo lo que se prometió; lo que cambia es que al
-- convertirlo se ve cuánto se pierde o se gana contra el precio de hoy.

CREATE TABLE presupuestos (
  id          TEXT PRIMARY KEY,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  numero      INTEGER NOT NULL,

  cliente_id  TEXT REFERENCES clientes (id) ON DELETE SET NULL,
  -- El nombre suelto, para quien todavía no es cliente.
  cliente_nombre TEXT,

  total_centavos     INTEGER NOT NULL,
  descuento_centavos INTEGER NOT NULL DEFAULT 0,
  -- Cuánto costaba al armarlo, para saber después si sigue conviniendo.
  costo_centavos     INTEGER NOT NULL DEFAULT 0,

  nota        TEXT,
  -- pendiente | aceptado | rechazado | vencido
  --
  -- "vencido" no se guarda: se calcula comparando la fecha. Guardarlo
  -- obligaría a un proceso que corra todos los días para cambiar filas que
  -- nadie está mirando.
  estado      TEXT NOT NULL DEFAULT 'pendiente',
  -- Hasta cuándo vale. Sin esto, el cliente vuelve en marzo con un precio
  -- de enero.
  vence_el    TEXT NOT NULL,
  -- La venta que salió de acá, si se aceptó.
  venta_id    TEXT REFERENCES ventas (id) ON DELETE SET NULL,

  creado_por  TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  cerrado_en  TEXT,
  CHECK (estado IN ('pendiente', 'aceptado', 'rechazado'))
);

CREATE UNIQUE INDEX idx_presupuestos_numero ON presupuestos (comercio_id, numero);
CREATE INDEX idx_presupuestos_comercio ON presupuestos (comercio_id, estado, creado_en DESC);
CREATE INDEX idx_presupuestos_cliente ON presupuestos (cliente_id);

CREATE TABLE presupuesto_items (
  id            TEXT PRIMARY KEY,
  presupuesto_id TEXT NOT NULL REFERENCES presupuestos (id) ON DELETE CASCADE,
  producto_id   TEXT REFERENCES productos (id) ON DELETE SET NULL,
  nombre        TEXT NOT NULL,
  cantidad_milesimos INTEGER NOT NULL,
  precio_centavos    INTEGER NOT NULL,
  costo_centavos     INTEGER NOT NULL DEFAULT 0,
  subtotal_centavos  INTEGER NOT NULL
);

CREATE INDEX idx_presupuesto_items ON presupuesto_items (presupuesto_id);
