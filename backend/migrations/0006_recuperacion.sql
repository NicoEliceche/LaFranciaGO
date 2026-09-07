-- Recuperación de contraseña por correo.

-- ── Pedidos de recuperación ──
--
-- Se guarda el hash del token, nunca el token en claro: si alguien llegara a
-- leer esta tabla, con el valor guardado no puede armar el enlace. Es el
-- mismo criterio que con las contraseñas.
--
-- Viven poco y se usan una sola vez: un enlace que sigue sirviendo después
-- de cambiar la contraseña es una llave suelta en el correo de la persona.

CREATE TABLE recuperaciones (
  id         TEXT PRIMARY KEY,
  usuario_id TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL,
  expira_en  TEXT NOT NULL,
  -- Cuándo se usó. Si tiene fecha, el enlace ya no vale.
  usado_en   TEXT,
  creado_en  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_recuperaciones_token ON recuperaciones (token_hash);
CREATE INDEX idx_recuperaciones_usuario ON recuperaciones (usuario_id, creado_en);
