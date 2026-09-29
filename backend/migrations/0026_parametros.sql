-- Los parámetros del sistema, editables desde administración.
--
-- Hasta ahora, cosas como el alias donde se cobra vivían en variables del
-- entorno: cambiarlas pedía consola, credenciales de Cloudflare y publicar
-- de nuevo. Eso está bien para un secreto —una clave de API no la tiene que
-- ver nadie— pero mal para un dato que cambia y que la administración tiene
-- que poder corregir sola: un alias nuevo, un teléfono, una dirección.
--
-- La diferencia entre los dos es lo que pasa si alguien lo ve. Un alias se
-- comparte para cobrar; una clave de Mercado Pago, no. Por eso los secretos
-- siguen en el entorno y acá van sólo los datos que igual se muestran.
--
-- Cada parámetro trae su descripción en la misma fila y no en el código de
-- la pantalla: así quien lo edita lee para qué sirve sin salir de donde
-- está, y agregar uno nuevo no obliga a tocar la aplicación.

CREATE TABLE parametros (
  -- La clave con la que lo busca el código, en inglés como el resto.
  clave       TEXT PRIMARY KEY,
  valor       TEXT,
  -- Cómo se llama en la pantalla y qué es, en español para quien lo edita.
  etiqueta    TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  -- Para agrupar la pantalla: cobros, contacto, operación.
  grupo       TEXT NOT NULL DEFAULT 'general',
  -- texto | telefono | email | numero
  formato     TEXT NOT NULL DEFAULT 'texto',
  -- El orden en que se muestran dentro de su grupo.
  orden       INTEGER NOT NULL DEFAULT 0,
  editado_en  TEXT,
  editado_por TEXT REFERENCES usuarios (id) ON DELETE SET NULL
);

-- Los que ya existen hoy, para que la pantalla no arranque vacía. El alias
-- se carga con el que ya está en uso; los demás quedan en blanco esperando
-- que administración los complete.
INSERT INTO parametros (clave, valor, etiqueta, descripcion, grupo, formato, orden) VALUES
  ('cobro_titular', 'Diego Adalberto Ghione', 'Titular de la cuenta',
   'El nombre que ve quien va a transferir. Tiene que coincidir con el de la cuenta bancaria para que no dude al pagar.',
   'cobros', 'texto', 1),
  ('cobro_alias', 'Cigacor.lafrancia', 'Alias para transferencias',
   'A donde transfiere quien reparte lo que cobró en efectivo. Aparece con un botón para copiarlo y también como código QR.',
   'cobros', 'texto', 2),
  ('cobro_cbu', NULL, 'CBU',
   'La otra forma de transferir, para quien prefiere el número antes que el alias. Son 22 dígitos.',
   'cobros', 'texto', 3),
  ('cobro_mercadopago', NULL, 'Enlace de cobro de Mercado Pago',
   'Si se carga, el código QR lleva a este enlace en vez de al alias. Un enlace puede traer el monto ya puesto; el alias no.',
   'cobros', 'texto', 4),
  ('contacto_email', NULL, 'Correo de contacto',
   'A donde llegan los reportes de problemas que mandan los usuarios desde la aplicación.',
   'contacto', 'email', 1),
  ('contacto_telefono', NULL, 'Teléfono de contacto',
   'El número que se muestra a quien necesita ayuda. Con característica, sin el 0 ni el 15.',
   'contacto', 'telefono', 2),
  ('contacto_direccion', NULL, 'Dirección',
   'Dónde queda la administración, para quien tiene que acercarse.',
   'contacto', 'texto', 3),
  ('operacion_radio_km', '15', 'Radio de reparto en kilómetros',
   'Hasta qué distancia se ofrecen los pedidos a quien reparte. Más grande alcanza más gente, pero los viajes se hacen largos.',
   'operacion', 'numero', 1),
  ('operacion_comision', '10', 'Comisión de la plataforma (%)',
   'Qué porcentaje de cada pedido queda para LaFranciaGO. Se usa para los informes; todavía no se descuenta solo.',
   'operacion', 'numero', 2);
