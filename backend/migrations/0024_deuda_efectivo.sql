-- La deuda que junta quien reparte cuando cobra en efectivo.
--
-- El cliente que paga en efectivo le paga al repartidor, no a la plataforma.
-- Esa plata es del comercio, asi que a partir de ese momento el repartidor
-- le debe a LaFranciaGO lo que cobro. Es como lo resolvieron todas las
-- aplicaciones grandes: el efectivo se lo queda quien reparte y queda
-- anotado como deuda.
--
-- Se guarda cada movimiento y no un solo numero con el saldo: un saldo suelto
-- no se puede auditar —si queda mal, no hay forma de saber en que momento se
-- desvio— y aca se discute plata real entre personas que se conocen. Con los
-- movimientos, el saldo es la suma, y siempre se puede mostrar de donde sale.
--
-- Los montos van en centavos, como en toda la aplicacion: positivo es lo que
-- el repartidor pasa a deber (cobro un pedido en efectivo) y negativo lo que
-- salda (le transfirio a la plataforma).
CREATE TABLE movimientos_efectivo (
  id            TEXT PRIMARY KEY,
  repartidor_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- cobro | pago
  tipo          TEXT NOT NULL,
  centavos      INTEGER NOT NULL,
  -- De que pedido salio, cuando el movimiento es un cobro.
  pedido_id     TEXT REFERENCES pedidos (id) ON DELETE SET NULL,
  -- Lo que el repartidor declara al saldar: "transferi por Mercado Pago".
  nota          TEXT,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (tipo IN ('cobro', 'pago'))
);

CREATE INDEX idx_movimientos_efectivo_repartidor
  ON movimientos_efectivo (repartidor_id, creado_en DESC);
