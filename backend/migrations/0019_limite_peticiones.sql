-- Cuántas peticiones hizo cada IP en el último minuto.
--
-- La tabla de intentos_login no sirve para esto: guarda una fila por intento
-- y acá habría miles por minuto. Se cuenta en una sola fila por IP y ventana,
-- que se va sumando; así el conteo es un UPDATE y no un COUNT sobre miles de
-- filas.
--
-- La ventana es el minuto redondeado: "2026-09-22 19:34". Al cambiar de
-- minuto, la clave cambia sola y el contador arranca de cero sin tener que
-- borrar nada.

CREATE TABLE peticiones_por_ip (
  ip       TEXT NOT NULL,
  -- El minuto al que pertenece el conteo, como texto: 'AAAA-MM-DD HH:MM'.
  ventana  TEXT NOT NULL,
  cuantas  INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (ip, ventana)
);

-- Para borrar las ventanas viejas de una pasada.
CREATE INDEX idx_peticiones_ventana ON peticiones_por_ip (ventana);
