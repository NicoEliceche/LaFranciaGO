# API de LaFranciaGO

Backend sobre Cloudflare Workers + D1 + R2. Todo el stack entra en planes
gratuitos permanentes, sin tarjeta y sin vencimiento.

## Por qué este stack

| Necesidad | Servicio | Por qué |
|---|---|---|
| Base de datos | **Cloudflare D1** (SQLite) | Sin pausas por inactividad ni caducidad |
| API | **Cloudflare Workers** | Sin arranque en frío |
| Fotos y videos | **Cloudflare R2** | 10 GB gratis, sin cargo por descarga |
| Frontend | **GitHub Pages** | Ya está funcionando |

Se descartaron:

- **Supabase**: pausa los proyectos gratuitos tras 7 días de inactividad. La
  app se despierta cuando alguien entra, pero el primer visitante encuentra el
  sitio caído. Inaceptable si el cliente abre la demo un lunes.
- **Render (plan gratuito)**: el servicio se apaga tras 15 minutos sin uso y
  tarda entre 30 y 60 segundos en volver. Además su base gratuita caduca a los
  30 días.
- **Neon**: buena opción, con suspensión a los 5 minutos y ~500 ms de arranque.
  Queda como alternativa si algún día hace falta Postgres de verdad.

## Puesta en marcha

Son dos comandos:

```bash
cd backend
npm install
npx wrangler login    # abre el navegador para autorizar
npm run setup         # hace todo lo demás
```

`npm run setup` crea la base y el bucket, escribe el `database_id` en
`wrangler.toml`, crea las tablas, publica el Worker y te dice la URL que
quedó. Se puede volver a correr sin romper nada: si algo ya existe, lo
detecta y sigue.

El `login` es el único paso manual, y no se puede evitar: los recursos quedan
a nombre de tu cuenta, así que la autorización tiene que darla una persona.

Después de publicar, creá un archivo `.env` en la raíz del proyecto (no en
`backend/`) con la URL que devolvió el script:

```
VITE_API_URL=https://lafranciago-api.TU-SUBDOMINIO.workers.dev
```

Sin esa variable la app sigue funcionando con los datos de ejemplo, así que
se puede desplegar el frontend antes que el backend.

### Desarrollo

```bash
npm run db:local     # crea las tablas en una base local
npm run dev          # API en http://127.0.0.1:8787
```

## Endpoints

### Autenticación

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/auth/registro` | Crea la cuenta e inicia sesión |
| POST | `/auth/login` | Inicia sesión |
| POST | `/auth/logout` | Cierra la sesión |
| GET | `/auth/yo` | Usuario de la sesión actual |

### Comercios y catálogo

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/comercios?rubro=&q=` | Comercios aprobados |
| GET | `/comercios/:id` | Comercio con categorías y productos |
| POST | `/comercios` | Alta de comercio (queda pendiente) |
| POST | `/productos` | Alta de producto (sólo el dueño) |

### Pedidos y cuenta

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/pedidos` | Pedidos del usuario |
| POST | `/pedidos` | Genera un pedido |
| GET/POST | `/direcciones` | Direcciones guardadas |
| GET | `/favoritos` | Comercios favoritos |
| POST/DELETE | `/favoritos/:id` | Marca o desmarca favorito |

### Archivos

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/media` | Sube una imagen o video |
| GET | `/media/:clave` | Devuelve el archivo |

## Ingreso con Google

Falta cargar las credenciales para que funcione. En la
[consola de Google Cloud](https://console.cloud.google.com/apis/credentials):

1. **Crear credenciales → ID de cliente de OAuth → Aplicación web**
2. En **URI de redireccionamiento autorizados**, agregar exactamente:

   ```
   https://lafranciago-api.lafranciago-api.workers.dev/auth/google/callback
   ```

3. Copiar el ID y el secreto, y cargarlos como secretos del Worker:

   ```bash
   cd backend
   npx wrangler secret put GOOGLE_CLIENT_ID
   npx wrangler secret put GOOGLE_CLIENT_SECRET
   ```

Van como secretos y no en `wrangler.toml` porque ese archivo se sube al
repositorio. Hasta que se carguen, el botón de Google responde que no está
configurado y el ingreso por email funciona igual.

## Decisiones de seguridad

**Los precios se leen de la base, nunca del cliente.** El navegador manda qué
producto y qué escalón; el servidor busca el precio y calcula el total. Sin
esto, cualquiera podría pedir con el precio que quisiera.

**Las contraseñas se guardan con PBKDF2-SHA512 y 100.000 iteraciones**, que es
el máximo que admite el runtime de Workers: por encima de eso rechaza la
operación. OWASP recomienda 210.000, así que se usa el tope disponible y se
compensa exigiendo al menos 8 caracteres. Si hiciera falta más margen, la
salida es mover el hash a scrypt o Argon2 por WebAssembly, que no tienen ese
límite. Cada contraseña lleva su salt, así dos personas con la misma clave
tienen hashes distintos.

**El login tarda lo mismo exista o no el usuario.** Se verifica siempre contra
un hash, incluso cuando el email no está registrado: si respondiera más rápido
al no encontrarlo, se podría averiguar quién tiene cuenta.

**La sesión viaja en una cookie HttpOnly**, que el JavaScript de la página no
puede leer: un XSS no alcanza para robarla.

**CORS acotado a los orígenes configurados**, sin comodín. Con credenciales, un
`*` dejaría que cualquier sitio leyera los datos del usuario.

**Los comercios nuevos quedan pendientes** y no aparecen en el buscador hasta
aprobarse.

**El login se bloquea tras 5 intentos fallidos** durante 15 minutos. Se cuenta
por email y por IP a la vez: sólo por IP dejaría pasar ataques distribuidos, y
sólo por email permitiría bloquear la cuenta de otra persona a propósito.

**Las contraseñas se validan según OWASP**: largo mínimo de 8, rechazo de las
más usadas en filtraciones, y prohibición de usar el propio nombre o email.
No se exigen símbolos ni mayúsculas, porque esas reglas empujan a claves
predecibles como "Password1!".

**El ingreso con Google usa código de autorización con PKCE, canjeado en el
servidor.** El token de Google nunca llega al navegador: se cambia por una
sesión propia en cookie HttpOnly. El flujo implícito está desaconsejado desde
OAuth 2.1 porque deja el token en la URL, donde queda en el historial y en los
logs. El `state` corta el CSRF del redirect y se borra al usarse, así un
código interceptado no sirve dos veces.

## Verificado

Probado contra la API publicada, con base y bucket reales:

- Registro, login, sesión por cookie y rechazo sin sesión (401)
- Contraseña incorrecta rechazada (401)
- Comercio pendiente no aparece en el listado; aprobado sí
- Producto por peso: medio kilo de pan a $2.550/kg cobró $1.275
- **Precio falsificado ignorado**: enviando `precio: 1`, cobró los $2.550 reales
- Cargar productos en comercio ajeno rechazado (403)
- Cada usuario ve sólo sus pedidos
- Origen no permitido no recibe cabeceras CORS
- Contraseñas rechazadas: comunes, cortas, y las que contienen el email
- Bloqueo por fuerza bruta: corta en el sexto intento con HTTP 429, y entrar
  bien limpia el contador
- Registro, ingreso, persistencia de sesión al recargar y cierre de sesión,
  probados desde la interfaz contra la API real

## Límites del plan gratuito

| Recurso | Límite diario | Alcanza para |
|---|---|---|
| Peticiones al Worker | 100.000 | Unos 3.000 pedidos por día |
| Lecturas en D1 | 5.000.000 | Muy por encima del uso previsto |
| Escrituras en D1 | 100.000 | Idem |
| Almacenamiento D1 | 5 GB | Cientos de miles de pedidos |
| Almacenamiento R2 | 10 GB | Unas 50.000 fotos ya comprimidas |

Desde el 1 de septiembre de 2026 Cloudflare corta las consultas al superar el
límite diario, en lugar de cobrar. Para La Francia, con unos pocos miles de
habitantes, estos números quedan lejos.
