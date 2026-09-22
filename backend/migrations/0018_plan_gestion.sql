-- El plan del sistema de gestión, separado del plan de publicidad.
--
-- Ya había una columna `premium`, pero es otra cosa: mejora la posición del
-- comercio en el listado. Un comercio puede querer aparecer primero sin
-- llevar la caja por sistema, o al revés. Son dos productos que se cobran por
-- separado, así que son dos columnas.
--
-- Mezclarlas habría significado que contratar publicidad abriera la caja de
-- otro, o que dar de baja la gestión sacara al comercio del listado.
--
-- Sin esto, cualquier comercio aprobado tenía el sistema completo: la guardia
-- del backend sólo pedía tener comercio propio.

ALTER TABLE comercios ADD COLUMN gestion_activa INTEGER NOT NULL DEFAULT 0;

-- Desde cuándo lo tiene. Sirve para cobrar y para saber desde qué fecha hay
-- datos cargados, que no es lo mismo que la fecha de alta del comercio.
ALTER TABLE comercios ADD COLUMN gestion_desde TEXT;
