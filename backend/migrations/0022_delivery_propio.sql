-- Si el comercio reparte con gente suya, y con que.
--
-- Hasta ahora la aplicacion asumia que todos reparten: la pantalla del
-- carrito ofrecia "Entrega comercio" para cualquier pedido, y si el negocio
-- no tenia a nadie para llevarlo, el cliente se enteraba tarde.
--
-- Son dos datos separados a proposito. `delivery_propio` es la pregunta que
-- decide si la opcion aparece; `delivery_vehiculo` sirve para saber cuanto
-- entra en un viaje, y solo tiene sentido si la primera es que si.
--
-- Arrancan en NULL y no en 0: NULL es "todavia no contesto" y 0 es "dijo que
-- no". Se ven iguales al ofrecer la opcion —en los dos casos no se ofrece—
-- pero se distinguen para poder pedirle al comercio que lo complete sin
-- molestar a quien ya dijo que no reparte.
ALTER TABLE comercios ADD COLUMN delivery_propio INTEGER;
ALTER TABLE comercios ADD COLUMN delivery_vehiculo TEXT;
