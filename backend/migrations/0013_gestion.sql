-- ── El sistema de gestión ──
--
-- Hasta acá la aplicación resolvía que el vecino compre y que le llegue. El
-- comercio necesita además llevar el negocio: saber cuánto gana de verdad,
-- cuánta plata hay en el cajón al cerrar, y qué vendió en el mostrador a
-- gente que no usa la aplicación.
--
-- Tres piezas, en orden de dependencia: el costo, la caja, y las ventas.

-- ── Costo ──
--
-- Sin el precio de compra no se puede saber la ganancia, que es lo que el
-- comercio mira para decidir qué le conviene vender. Se guarda el costo
-- actual y se pisa cuando cambia: llevar el historial completo obliga a
-- tener el módulo de compras andando, y para calcular el margen de hoy
-- alcanza con el costo de hoy.
ALTER TABLE productos ADD COLUMN costo_centavos INTEGER;

-- El código que trae impreso el producto. Es lo que lee la pistola del
-- mostrador, así que tiene que encontrarse rápido y no repetirse dentro del
-- mismo comercio (dos comercios sí pueden vender el mismo artículo).
ALTER TABLE productos ADD COLUMN codigo_barras TEXT;

CREATE UNIQUE INDEX idx_productos_codigo
  ON productos (comercio_id, codigo_barras)
  WHERE codigo_barras IS NOT NULL;

-- ── Caja ──
--
-- Una caja es un turno de trabajo: se abre con lo que hay, pasan
-- movimientos, y al cerrar se compara lo contado con lo que el sistema
-- calculó. La diferencia es el dato que importa, y por eso se guarda en
-- lugar de recalcularse: es una foto de ese cierre, no algo que deba
-- cambiar si después se corrige un movimiento viejo.

CREATE TABLE cajas (
  id            TEXT PRIMARY KEY,
  comercio_id   TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  -- Quién la abrió y quién la cerró: pueden ser personas distintas.
  abierta_por   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  cerrada_por   TEXT REFERENCES usuarios (id) ON DELETE RESTRICT,

  -- Con cuánto efectivo arranca el turno.
  inicial_centavos INTEGER NOT NULL DEFAULT 0,

  -- Al cerrar: lo que la persona contó, lo que el sistema esperaba, y la
  -- diferencia entre ambos.
  contado_centavos  INTEGER,
  esperado_centavos INTEGER,
  diferencia_centavos INTEGER,

  nota          TEXT,
  -- abierta | cerrada
  estado        TEXT NOT NULL DEFAULT 'abierta',
  abierta_en    TEXT NOT NULL DEFAULT (datetime('now')),
  cerrada_en    TEXT,
  CHECK (estado IN ('abierta', 'cerrada'))
);

-- Un comercio no puede tener dos cajas abiertas a la vez: si no, no se sabe
-- dónde entra la plata de la próxima venta.
CREATE UNIQUE INDEX idx_cajas_abierta
  ON cajas (comercio_id)
  WHERE estado = 'abierta';

CREATE INDEX idx_cajas_comercio ON cajas (comercio_id, abierta_en DESC);

-- Todo lo que entra o sale del cajón durante el turno. Las ventas en
-- efectivo generan un movimiento acá; las que se cobran por transferencia
-- no, porque esa plata nunca pasa por el cajón.
CREATE TABLE caja_movimientos (
  id         TEXT PRIMARY KEY,
  caja_id    TEXT NOT NULL REFERENCES cajas (id) ON DELETE CASCADE,
  -- venta | retiro | deposito | egreso | ajuste
  tipo       TEXT NOT NULL,
  -- Positivo entra, negativo sale. Guardarlo con signo evita tener que
  -- recordar en cada cuenta si este tipo suma o resta.
  monto_centavos INTEGER NOT NULL,
  concepto   TEXT,
  -- Si viene de una venta, cuál. Permite ir del arqueo al comprobante.
  venta_id   TEXT,
  creado_por TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (tipo IN ('venta', 'retiro', 'deposito', 'egreso', 'ajuste'))
);

CREATE INDEX idx_caja_mov ON caja_movimientos (caja_id, creado_en);

-- ── Ventas de mostrador ──
--
-- Son las que no pasan por la aplicación: alguien entra al negocio y compra.
-- Se guardan aparte de los pedidos porque no tienen envío, ni chat, ni
-- estado de preparación; mezclarlas obligaría a dejar media tabla vacía en
-- cada fila y a filtrar por tipo en cada consulta.

CREATE TABLE ventas (
  id          TEXT PRIMARY KEY,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  -- Número corto para decir en voz alta y buscar después.
  numero      INTEGER NOT NULL,
  -- A quién se le vendió. Sin cliente es una venta de mostrador anónima,
  -- que es la mayoría.
  cliente_id  TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  -- El nombre suelto, para cuando el cliente no tiene cuenta.
  cliente_nombre TEXT,
  -- En qué caja entró. Null si se vendió sin caja abierta.
  caja_id     TEXT REFERENCES cajas (id) ON DELETE SET NULL,
  vendedor_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,

  total_centavos     INTEGER NOT NULL,
  descuento_centavos INTEGER NOT NULL DEFAULT 0,
  -- Cuánto costó al comercio lo que vendió, sumando el costo de cada línea.
  -- Se guarda congelado: si mañana cambia el precio de compra, la ganancia
  -- de esta venta tiene que seguir siendo la que fue.
  costo_centavos     INTEGER NOT NULL DEFAULT 0,
  -- Cuánto se cobró hasta ahora. Menor que el total significa que quedó
  -- debiendo; acá es donde se apoya la cuenta corriente cuando se sume.
  cobrado_centavos   INTEGER NOT NULL DEFAULT 0,

  nota        TEXT,
  -- abierta | anulada
  estado      TEXT NOT NULL DEFAULT 'abierta',
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  anulada_en  TEXT,
  CHECK (estado IN ('abierta', 'anulada'))
);

CREATE UNIQUE INDEX idx_ventas_numero ON ventas (comercio_id, numero);
CREATE INDEX idx_ventas_comercio ON ventas (comercio_id, creado_en DESC);
CREATE INDEX idx_ventas_caja ON ventas (caja_id);

-- Qué se vendió en cada venta. El nombre y los precios se copian en lugar
-- de mirarse desde productos: el comprobante de ayer tiene que seguir
-- diciendo lo que decía ayer, aunque el producto haya cambiado de precio o
-- lo hayan borrado del catálogo.
CREATE TABLE venta_items (
  id          TEXT PRIMARY KEY,
  venta_id    TEXT NOT NULL REFERENCES ventas (id) ON DELETE CASCADE,
  producto_id TEXT REFERENCES productos (id) ON DELETE SET NULL,
  nombre      TEXT NOT NULL,
  -- Cantidad en milésimos: permite vender 0,250 kg sin decimales flotantes.
  cantidad_milesimos INTEGER NOT NULL,
  precio_centavos    INTEGER NOT NULL,
  costo_centavos     INTEGER NOT NULL DEFAULT 0,
  subtotal_centavos  INTEGER NOT NULL
);

CREATE INDEX idx_venta_items ON venta_items (venta_id);

-- Cada cobro de una venta. Son varios porque una venta se puede pagar
-- mitad en efectivo y mitad con tarjeta, o en dos veces.
CREATE TABLE venta_pagos (
  id       TEXT PRIMARY KEY,
  venta_id TEXT NOT NULL REFERENCES ventas (id) ON DELETE CASCADE,
  -- efectivo | transferencia | tarjeta | cheque | cuenta_corriente
  metodo   TEXT NOT NULL,
  monto_centavos INTEGER NOT NULL,
  nota     TEXT,
  creado_por TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (metodo IN ('efectivo', 'transferencia', 'tarjeta', 'cheque', 'cuenta_corriente'))
);

CREATE INDEX idx_venta_pagos ON venta_pagos (venta_id);
