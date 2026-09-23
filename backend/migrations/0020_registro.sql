-- El registro de lo que pasa en la aplicación.
--
-- No es para el comercio ni para el cliente: es para quien programa. Cuando
-- algo se rompe a las once de la noche, la diferencia entre resolverlo en
-- cinco minutos o en tres horas es saber qué pasó exactamente, y eso hay que
-- haberlo guardado antes.
--
-- Los logs de Cloudflare no alcanzan: se borran solos, no se pueden buscar y
-- hay que estar mirando en el momento justo.

CREATE TABLE registro (
  id          TEXT PRIMARY KEY,

  -- error | aviso | info
  --
  -- Se guarda todo junto y se filtra al mirar, en lugar de tener una tabla
  -- por nivel: lo que sirve es ver la secuencia completa de lo que pasó
  -- alrededor del error, no el error aislado.
  nivel       TEXT NOT NULL DEFAULT 'error',

  -- Una palabra que agrupa: 'pedido', 'caja', 'pago', 'sesion'. Permite ver
  -- "todo lo que falló en cobros" sin leer el texto de cada línea.
  area        TEXT,

  -- Qué pasó, en una línea que se entienda sin abrir el detalle.
  mensaje     TEXT NOT NULL,

  -- El stack, el cuerpo del pedido y lo que haga falta, como JSON. Es lo que
  -- responde "por qué", mientras que el mensaje responde "qué".
  detalle     TEXT,

  -- Dónde ocurrió: POST /gestion/ventas. Sin esto hay que adivinar qué
  -- pantalla lo provocó.
  ruta        TEXT,
  metodo      TEXT,
  estado      INTEGER,

  -- Quién lo vivió. Sirve para responderle a una persona concreta que
  -- reporta un problema, y para ver si le pasa a uno solo o a todos.
  usuario_id  TEXT,
  ip          TEXT,

  -- Cuánto tardó la petición. Un error que además tarda 8 segundos suele ser
  -- un problema distinto que uno que falla al instante.
  ms          INTEGER,

  creado_en   TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Lo primero que se mira es lo último que pasó.
CREATE INDEX idx_registro_fecha ON registro (creado_en DESC);

-- "Mostrame sólo los errores", que es el 90% de las consultas.
CREATE INDEX idx_registro_nivel ON registro (nivel, creado_en DESC);

-- "Qué le pasó a esta persona" y "qué falla en cobros".
CREATE INDEX idx_registro_usuario ON registro (usuario_id, creado_en DESC);
CREATE INDEX idx_registro_area ON registro (area, creado_en DESC);
