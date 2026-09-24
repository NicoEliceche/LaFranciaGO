-- Dos planes en lugar de uno.
--
-- Hasta ahora el sistema de gestion se tenia o no se tenia. Ahora hay dos
-- niveles: "go" es el sistema del mostrador completo, y "pro" agrega los
-- informes y manejar mas de un local.
--
-- Se guarda cual tiene en una columna aparte y no se reemplaza
-- `gestion_activa`, que sigue diciendo si tiene el sistema. Asi la guardia
-- que ya existe en /gestion/* no cambia, y lo que hay que preguntar por plan
-- se pregunta aparte. Separarlos tambien deja dar de baja sin perder cual
-- plan tenia.
--
-- Los comercios que ya lo tenian activo quedan en "go": era el unico plan
-- que existia, y cobrarles de mas por algo que no contrataron seria un error
-- que se descubre tarde y con un cliente enojado.
ALTER TABLE comercios ADD COLUMN gestion_plan TEXT;

UPDATE comercios SET gestion_plan = 'go' WHERE gestion_activa = 1;
