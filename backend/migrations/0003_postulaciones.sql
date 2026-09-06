-- Roles múltiples y postulaciones.
--
-- Antes cada usuario tenía un solo rol. Pero el panadero que también hace
-- delivery es una persona con un solo email: tiene que poder entrar como
-- comercio o como repartidor eligiendo en el desplegable.
--
-- Así que el rol pasa de ser una columna del usuario a ser una tabla aparte:
-- una cuenta puede tener varios, y cada uno se aprueba por separado.

-- ── Roles de cada cuenta ──

CREATE TABLE usuario_roles (
  id          TEXT PRIMARY KEY,
  usuario_id  TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  -- comercio | delivery | fletero | admin
  rol         TEXT NOT NULL,
  -- pendiente | aprobado | rechazado | cambios | suspendido
  --
  -- "cambios" es cuando falta corregir algo: la persona puede editar y volver
  -- a enviar sin empezar de cero.
  estado      TEXT NOT NULL DEFAULT 'pendiente',
  creado_en   TEXT NOT NULL DEFAULT (datetime('now')),
  -- Un usuario no puede postularse dos veces al mismo rol.
  UNIQUE (usuario_id, rol),
  CHECK (rol IN ('comercio', 'delivery', 'fletero', 'admin')),
  CHECK (estado IN ('pendiente', 'aprobado', 'rechazado', 'cambios', 'suspendido'))
);

CREATE INDEX idx_roles_usuario ON usuario_roles (usuario_id, estado);
CREATE INDEX idx_roles_estado ON usuario_roles (estado, creado_en DESC);

-- ── Postulaciones ──
--
-- Los datos que manda la persona para pedir cada rol. Se guardan aparte del
-- rol porque son de naturaleza distinta: el rol es el permiso, la postulación
-- es el trámite con su historial.

CREATE TABLE postulaciones (
  id           TEXT PRIMARY KEY,
  usuario_id   TEXT NOT NULL REFERENCES usuarios (id) ON DELETE CASCADE,
  rol          TEXT NOT NULL,
  -- Todo lo que se pide en el formulario, como JSON: cada rol pide cosas
  -- distintas (CUIT y rubro para comercio, vehículo y patente para delivery)
  -- y una tabla con columnas para todo quedaría medio vacía.
  datos        TEXT NOT NULL DEFAULT '{}',
  estado       TEXT NOT NULL DEFAULT 'pendiente',
  -- Qué le falta corregir, cuando se piden cambios.
  nota_revision TEXT,
  revisado_por TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  revisado_en  TEXT,
  creado_en    TEXT NOT NULL DEFAULT (datetime('now')),
  actualizado_en TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (rol IN ('comercio', 'delivery', 'fletero')),
  CHECK (estado IN ('pendiente', 'aprobado', 'rechazado', 'cambios'))
);

CREATE INDEX idx_postulaciones_estado ON postulaciones (estado, creado_en DESC);
CREATE INDEX idx_postulaciones_usuario ON postulaciones (usuario_id);

-- ── Historial de revisiones ──
--
-- Cada decisión queda registrada: quién la tomó y por qué. Sin esto, una
-- cuenta rechazada no tiene forma de saber qué pasó ni de reclamar.

CREATE TABLE revisiones (
  id              TEXT PRIMARY KEY,
  postulacion_id  TEXT NOT NULL REFERENCES postulaciones (id) ON DELETE CASCADE,
  admin_id        TEXT REFERENCES usuarios (id) ON DELETE SET NULL,
  -- aprobado | rechazado | cambios
  decision        TEXT NOT NULL,
  nota            TEXT,
  creado_en       TEXT NOT NULL DEFAULT (datetime('now')),
  CHECK (decision IN ('aprobado', 'rechazado', 'cambios'))
);

CREATE INDEX idx_revisiones_postulacion ON revisiones (postulacion_id, creado_en DESC);

-- El rol del usuario deja de usarse: ahora vive en usuario_roles. Se conserva
-- la columna para no romper lo que todavía la lea, con "cliente" fijo, que es
-- lo que toda cuenta es por defecto.
