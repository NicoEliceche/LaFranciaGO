-- Notificaciones de la app.

-- ── Notificaciones ──
--
-- Un aviso pertenece a una persona, no a un rol: el mismo pedido genera un
-- aviso distinto para el cliente ("tu pedido salió") que para el comercio
-- ("entró un pedido nuevo"), y cada uno lo marca leído por su cuenta.
--
-- Se guardan en la base y no se calculan al vuelo porque hay que saber cuáles
-- ya se leyeron, y porque un aviso vale aunque el pedido que lo originó
-- después cambie.

CREATE TABLE notificaciones (
  id         TEXT PRIMARY KEY,
  usuario_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- pedido | envio | oferta | postulacion | chat | pago
  tipo       TEXT NOT NULL,
  titulo     TEXT NOT NULL,
  texto      TEXT,
  -- A dónde lleva al tocarla, dentro de la app.
  enlace     TEXT,
  leida_en   TEXT,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now'))
);

-- La consulta habitual es "las mías, primero las nuevas".
CREATE INDEX idx_notificaciones_usuario ON notificaciones (usuario_id, creado_en DESC);
-- El contador del ícono cuenta las no leídas.
CREATE INDEX idx_notificaciones_sin_leer ON notificaciones (usuario_id, leida_en);
