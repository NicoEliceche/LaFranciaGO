-- Cómo va la preparación del pedido en el comercio.

-- ── Estado de preparación ──
--
-- Es aparte del estado del pedido: mientras el comercio lo prepara, el pedido
-- sigue "en proceso". Lo que cambia es en qué punto está adentro del negocio.
--
--   recibido    entró y nadie lo tocó todavía
--   preparando  lo están armando
--   listo       está listo para que lo retiren
--
-- Sin esto el cliente quedaba a ciegas entre que compraba y que salía el
-- repartidor: veía "en proceso" sin saber si el comercio siquiera lo había
-- visto.

ALTER TABLE pedidos ADD COLUMN preparacion TEXT NOT NULL DEFAULT 'recibido';

-- Cuándo pasó a cada estado, para poder medir cuánto tarda cada comercio en
-- preparar y avisarle al cliente con algo mejor que una estimación fija.
ALTER TABLE pedidos ADD COLUMN preparando_en TEXT;
ALTER TABLE pedidos ADD COLUMN listo_en TEXT;

-- El repartidor busca lo que está listo para retirar: se indexa junto al
-- estado, que es como se consulta.
CREATE INDEX idx_pedidos_preparacion ON pedidos (estado, preparacion);
