-- Autenticación: cuentas de Google, límite de intentos y estado de OAuth.

-- ── Identidades externas ──
--
-- Una cuenta puede tener contraseña, Google, o ambas: si alguien se registró
-- con email y después entra con Google usando el mismo correo, se vinculan en
-- lugar de crear un usuario duplicado.

CREATE TABLE identidades (
  id           TEXT PRIMARY KEY,
  usuario_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  proveedor    TEXT NOT NULL,
  -- Id del usuario en el proveedor. No cambia aunque cambie el email.
  proveedor_id TEXT NOT NULL,
  creado_en    TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (proveedor, proveedor_id)
);

CREATE INDEX idx_identidades_usuario ON identidades (usuario_id);

-- ── Intentos de login ──
--
-- Se registran los fallidos para frenar la fuerza bruta. Se limpian al entrar
-- bien, y las filas viejas quedan fuera de la ventana de conteo.

CREATE TABLE intentos_login (
  id        TEXT PRIMARY KEY,
  email     TEXT NOT NULL,
  ip        TEXT NOT NULL,
  creado_en TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_intentos_email ON intentos_login (email, creado_en);
CREATE INDEX idx_intentos_ip ON intentos_login (ip, creado_en);

-- ── Estado de OAuth ──
--
-- Guarda el verificador de PKCE entre que se abre Google y vuelve el código.
-- Vive poco: si no se usa en minutos, deja de valer.

CREATE TABLE oauth_estados (
  estado       TEXT PRIMARY KEY,
  verificador  TEXT NOT NULL,
  -- A dónde volver en la app cuando termine.
  destino      TEXT,
  expira_en    TEXT NOT NULL,
  creado_en    TEXT NOT NULL DEFAULT (datetime('now'))
);

-- La contraseña deja de ser obligatoria: quien entra sólo con Google no tiene.
-- SQLite no permite cambiar una columna, así que se recrea la tabla.

CREATE TABLE usuarios_nuevo (
  id            TEXT PRIMARY KEY,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT,
  nombre        TEXT NOT NULL,
  telefono      TEXT,
  foto_url      TEXT,
  rol           TEXT NOT NULL DEFAULT 'cliente',
  -- Con Google el correo ya viene verificado por ellos.
  email_verificado INTEGER NOT NULL DEFAULT 0,
  creado_en     TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (rol IN ('cliente', 'comercio', 'delivery', 'fletero', 'admin'))
);

INSERT INTO usuarios_nuevo (id, email, password_hash, nombre, telefono, foto_url, rol, creado_en)
  SELECT id, email, password_hash, nombre, telefono, foto_url, rol, creado_en FROM usuarios;

DROP TABLE usuarios;
ALTER TABLE usuarios_nuevo RENAME TO usuarios;

CREATE INDEX idx_usuarios_email ON usuarios (email);
