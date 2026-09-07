-- Cobro por Mercado Pago.

-- ── Datos de cobro del comercio ──
--
-- Cada comercio conecta su cuenta de Mercado Pago y cobra en la suya. La
-- plataforma retiene su comisión en el mismo pago, sin que la plata pase por
-- una cuenta intermedia: manejar dinero de terceros tiene implicancias
-- impositivas que conviene no tener.
--
-- El token de acceso llega por OAuth y se guarda porque hace falta en cada
-- cobro. Es sensible: sólo lo lee el servidor, nunca viaja al navegador.

ALTER TABLE comercios ADD COLUMN mp_usuario_id TEXT;
ALTER TABLE comercios ADD COLUMN mp_access_token TEXT;
ALTER TABLE comercios ADD COLUMN mp_refresh_token TEXT;
ALTER TABLE comercios ADD COLUMN mp_expira_en TEXT;

-- ── Pagos ──
--
-- Un pedido puede tener varios intentos de pago: si el primero se rechaza,
-- el cliente prueba con otra tarjeta. Por eso es tabla aparte y no columnas
-- del pedido.
--
-- El estado lo dicta Mercado Pago, no la app: se guarda lo que informa, y el
-- pedido se da por pagado sólo cuando llega "approved" por webhook. Confiar
-- en la vuelta del navegador dejaría pedidos pagados que nadie cobró.

CREATE TABLE pagos (
  id             TEXT PRIMARY KEY,
  pedido_id      TEXT NOT NULL REFERENCES pedidos (id) ON DELETE CASCADE,
  -- Id de la preferencia y del pago en Mercado Pago.
  preferencia_id TEXT,
  mp_pago_id     TEXT,
  -- pendiente | aprobado | rechazado | devuelto | cancelado
  estado         TEXT NOT NULL DEFAULT 'pendiente',
  -- Lo que paga el cliente y lo que se lleva la plataforma, en centavos.
  monto_centavos    INTEGER NOT NULL,
  comision_centavos INTEGER NOT NULL DEFAULT 0,
  -- Cuánto de ese total corresponde al reparto. Se guarda aparte para poder
  -- liquidarle al repartidor sin recalcularlo sobre precios que cambiaron.
  envio_centavos    INTEGER NOT NULL DEFAULT 0,
  metodo         TEXT,
  detalle        TEXT,
  creado_en      TEXT NOT NULL DEFAULT (datetime('now')),
  actualizado_en TEXT,
  CHECK (estado IN ('pendiente', 'aprobado', 'rechazado', 'devuelto', 'cancelado'))
);

CREATE INDEX idx_pagos_pedido ON pagos (pedido_id);
-- El webhook llega con el id de Mercado Pago: se busca por ahí.
CREATE INDEX idx_pagos_mp ON pagos (mp_pago_id);
CREATE INDEX idx_pagos_preferencia ON pagos (preferencia_id);

-- Cómo quedó el pedido respecto del dinero, para no mirar la tabla de pagos
-- cada vez que se lista uno.
ALTER TABLE pedidos ADD COLUMN pago_estado TEXT NOT NULL DEFAULT 'sin_pago';
