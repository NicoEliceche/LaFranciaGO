-- ── Fiado ──
--
-- No es la cuenta corriente de un sistema contable. Es lo que hace Diego:
-- dos o tres personas de años, que se llevan mercadería y pagan después.
--
-- El problema que resuelve no es llevar la deuda —eso se anota en cualquier
-- lado— sino que la caja cierre. Cuando alguien saca una bolsa de papas y no
-- deja plata, el cajón tiene menos de lo que dice el sistema y la persona
-- que atiende queda bajo sospecha. Por eso una venta fiada sale de la caja
-- sin ensuciarla, y queda anotada a nombre de una cuenta.
--
-- Los tres casos que contó Diego:
--   el colegio, que saca toda la semana y paga junta,
--   la familia, que saca un jugo y no se le va a cobrar en el momento,
--   los conocidos de la agencia, que sacan hoy y pagan mañana.

CREATE TABLE cuentas_fiado (
  id          TEXT PRIMARY KEY,
  comercio_id TEXT NOT NULL REFERENCES comercios (id) ON DELETE CASCADE,
  -- Como lo dice el comercio: "Fiado Diego", "Colegio San José".
  nombre      TEXT NOT NULL,
  -- Para llamarlo cuando hay que cobrar.
  telefono    TEXT,
  nota        TEXT,
  -- Hasta cuánto se le permite deber. Null es sin tope, que es lo normal
  -- con gente de años; el tope existe para los casos donde el comercio
  -- quiere un freno.
  tope_centavos INTEGER,
  activa      INTEGER NOT NULL DEFAULT 1,
  creado_en   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_fiado_comercio ON cuentas_fiado (comercio_id, activa);

-- Cada cosa que pasa con la cuenta: lo que se llevó y lo que pagó.
--
-- Se guardan los dos lados en la misma tabla, con signo, en vez de una tabla
-- de deudas y otra de pagos: el saldo es la suma de la columna, y así no hay
-- dos lugares que puedan contradecirse.
CREATE TABLE fiado_movimientos (
  id        TEXT PRIMARY KEY,
  cuenta_id TEXT NOT NULL REFERENCES cuentas_fiado (id) ON DELETE CASCADE,
  -- Positivo es lo que se llevó (debe más), negativo es lo que pagó.
  monto_centavos INTEGER NOT NULL,
  concepto  TEXT,
  -- Si vino de una venta del mostrador, cuál.
  venta_id  TEXT REFERENCES ventas (id) ON DELETE SET NULL,
  -- En qué caja entró el pago, para que el arqueo lo cuente.
  caja_id   TEXT REFERENCES cajas (id) ON DELETE SET NULL,
  -- Cómo pagó, cuando es un pago.
  metodo    TEXT,
  creado_por TEXT NOT NULL REFERENCES usuarios (id) ON DELETE RESTRICT,
  creado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_fiado_mov ON fiado_movimientos (cuenta_id, creado_en DESC);
CREATE INDEX idx_fiado_venta ON fiado_movimientos (venta_id);

-- La venta sabe a qué cuenta se fio, para poder ir de una a la otra.
ALTER TABLE ventas ADD COLUMN cuenta_fiado_id TEXT REFERENCES cuentas_fiado (id) ON DELETE SET NULL;

CREATE INDEX idx_ventas_fiado ON ventas (cuenta_fiado_id);
