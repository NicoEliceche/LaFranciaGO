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

```bash
cd backend
npm install

# Crear los recursos (una sola vez)
npx wrangler d1 create lafranciago
npx wrangler r2 bucket create lafranciago-media
# Copiar el database_id que devuelve el primer comando en wrangler.toml

# Crear las tablas
npm run db:local     # base local, para desarrollo
npm run db:remoto    # base en la nube

# Desarrollo
npm run dev          # queda en http://127.0.0.1:8787

# Publicar
npm run deploy
```

Después de publicar, en el frontend hay que definir `VITE_API_URL` con la URL
del Worker. Sin esa variable la app sigue funcionando con datos locales, así
que se puede desplegar el frontend antes que el backend.

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

## Decisiones de seguridad

**Los precios se leen de la base, nunca del cliente.** El navegador manda qué
producto y qué escalón; el servidor busca el precio y calcula el total. Sin
esto, cualquiera podría pedir con el precio que quisiera.

**Las contraseñas se guardan con PBKDF2-SHA512 y 210.000 iteraciones**, que es
lo que recomienda OWASP. Cada una lleva su salt, así dos personas con la misma
contraseña tienen hashes distintos.

**El login tarda lo mismo exista o no el usuario.** Se verifica siempre contra
un hash, incluso cuando el email no está registrado: si respondiera más rápido
al no encontrarlo, se podría averiguar quién tiene cuenta.

**La sesión viaja en una cookie HttpOnly**, que el JavaScript de la página no
puede leer: un XSS no alcanza para robarla.

**CORS acotado a los orígenes configurados**, sin comodín. Con credenciales, un
`*` dejaría que cualquier sitio leyera los datos del usuario.

**Los comercios nuevos quedan pendientes** y no aparecen en el buscador hasta
aprobarse.

## Verificado

Probado sobre el Worker corriendo con base local:

- Registro, login, sesión por cookie y rechazo sin sesión (401)
- Contraseña incorrecta rechazada (401)
- Comercio pendiente no aparece en el listado; aprobado sí
- Producto por peso: medio kilo de pan a $2.550/kg cobró $1.275
- **Precio falsificado ignorado**: enviando `precio: 1`, cobró los $2.550 reales
- Cargar productos en comercio ajeno rechazado (403)
- Cada usuario ve sólo sus pedidos
- Origen no permitido no recibe cabeceras CORS

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
