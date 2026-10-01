-- Las cotizaciones apuntan al flete, que ya no es un pedido.
--
-- Cuando los fletes pasaron a tener tabla propia (0025), esta se quedó
-- apuntando a `pedidos`: el fletero veía el flete en su lista pero al
-- cotizarlo recibía un 404, porque la consulta lo buscaba donde ya no está.
--
-- Se rehace la tabla en lugar de agregar una columna al lado. Una
-- `flete_id` conviviendo con la vieja `pedido_id` obliga a preguntar por las
-- dos en cada consulta, y a la primera que alguien olvide una, las
-- cotizaciones de la mitad de los fletes desaparecen sin error.
--
-- No hay nada que mudar: se comprobó antes de escribir esto y la tabla está
-- vacía. El flujo de cotizar nunca llegó a usarse con datos reales porque
-- justamente estaba roto.

DROP TABLE IF EXISTS cotizaciones;

CREATE TABLE cotizaciones (
  id          TEXT PRIMARY KEY,
  -- Apunta al flete, no al pedido: un flete no es una compra.
  flete_id    TEXT NOT NULL REFERENCES fletes (id) ON DELETE CASCADE,
  fletero_id  TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  precio_centavos INTEGER NOT NULL,
  -- Cuántos km calculó la app entre el origen y el destino.
  distancia_km REAL,
  nota        TEXT,
  -- pendiente | aceptada | rechazada | vencida
  estado      TEXT NOT NULL DEFAULT 'pendiente',
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  resuelto_en TEXT,
  CHECK (estado IN ('pendiente', 'aceptada', 'rechazada', 'vencida')),
  CHECK (precio_centavos > 0)
);

CREATE INDEX idx_cotizaciones_flete ON cotizaciones (flete_id, estado);
CREATE INDEX idx_cotizaciones_fletero ON cotizaciones (fletero_id, estado);

-- El chat del flete necesita poder anotar lo que decide la aplicación
-- —"se aceptó la cotización por tanto"— igual que el del pedido. Sin esto,
-- aceptar una cotización no dejaba rastro en la conversación.
--
-- Los valores son los mismos que usa el chat del pedido: la tabla se creó en
-- 0025 sin la columna porque todavía no se escribía nada de sistema ahí.
ALTER TABLE flete_mensajes ADD COLUMN es_sistema INTEGER NOT NULL DEFAULT 0;
