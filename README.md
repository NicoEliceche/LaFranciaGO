# LaFranciaGO

Marketplace local para La Francia, Córdoba. Los comercios del pueblo publican
su catálogo, los vecinos piden desde el celular, y los repartidores y fleteros
toman los pedidos que tienen cerca.

App en vivo: <https://nicoeliceche.github.io/LaFranciaGO/>

## Qué hace

**Cliente** — Entra con email o con Google, recorre los comercios por rubro,
arma el carrito y confirma el pedido. Ve las ofertas vigentes, guarda sus
comercios favoritos y sigue el estado de lo que pidió.

**Comercio** — Administra su catálogo con fotos y video, arma promociones
(descuento, combo o promo por cantidad), recibe los pedidos, chatea con el
cliente y ve en un mapa por dónde va cada envío.

**Delivery y flete** — Ven los pedidos disponibles ordenados por cercanía,
miran el detalle completo antes de decidir, y al tomarlo se abre el chat con
el cliente.

**Administración** — Revisa las postulaciones de comercios, repartidores y
fleteros: aprobar, rechazar o pedir cambios.

## Stack

| Capa | Qué se usa | Por qué |
| --- | --- | --- |
| Frontend | React 18 + TypeScript + Vite + styled-components | — |
| Hosting | GitHub Pages | Gratis, y el sitio es estático |
| API | Cloudflare Workers | Sin arranque en frío: un pedido no espera 30 s |
| Base | Cloudflare D1 (SQLite) | No se pausa por inactividad |
| Archivos | Cloudflare R2 | Fotos y videos de los productos |

Se evaluaron Supabase (pausa los proyectos gratuitos a los 7 días, lo que
rompería una demo) y Render (15 minutos de inactividad y el servicio se
duerme; volver tarda entre 30 y 60 segundos).

## Cómo levantarlo

```bash
npm install
npm run dev
```

Para que la app hable con la API hace falta un `.env` en la raíz:

```
VITE_API_URL=https://tu-worker.workers.dev
```

Sin esa variable la app arranca igual con datos de ejemplo, útil para trabajar
sólo en la interfaz.

El backend vive en [`backend/`](backend/) y tiene su propio README con el
proceso de puesta en marcha: crear la base, aplicar las migraciones, cargar
los secretos y publicar el Worker.

## Scripts

```bash
npm run dev         # servidor de desarrollo
npm run build       # compila a dist/
npm run preview     # sirve lo compilado
npm run typecheck   # TypeScript sin emitir
npm run deploy      # publica en GitHub Pages
```

En `backend/`:

```bash
npm run setup       # crea la base y publica el Worker
node seed.mjs       # carga los comercios de ejemplo
npx wrangler deploy # publica cambios de la API
```

## Estructura

```text
src/
  core/
    theme/            sistema de diseño (colores, tipografías, escalas)
    data/services/    cliente de la API
  features/
    home/             portada
    marketplace/      pantallas, componentes y hooks de datos
  shared/             componentes, hooks y utilidades comunes
backend/
  src/                el Worker: rutas, autenticación y utilidades
  migrations/         esquema de la base, en orden
  seed.mjs            carga de comercios de ejemplo
design/               capturas de referencia del diseño
```

Los datos se leen con hooks propios (`useStores`, `useOfertas`,
`useFavoritos`, `usePedidos`, `useDirecciones`): cada uno trae lo suyo una vez
y lo comparte entre pantallas, para que dos pantallas que muestran lo mismo no
hagan dos viajes ni muestren estados distintos.

## Seguridad

- Los precios y los descuentos se calculan **en el servidor**, leyendo la base.
  Lo que manda el navegador no decide cuánto se cobra.
- Contraseñas con PBKDF2-SHA512 y validación según las recomendaciones de
  OWASP: largo mínimo, sin contraseñas conocidas, sin el propio email adentro.
- Sesión en cookie `HttpOnly` + `Secure`, nunca en `localStorage`.
- Google OAuth con PKCE y el intercambio del código del lado del servidor.
- Límite de intentos de login, y las rutas privadas responden 404 en lugar de
  403 para no confirmar que existen.
- Content Security Policy declarada en el HTML.

## Estado

Funciona de punta a punta: un cliente pide, el comercio lo recibe, un
repartidor lo toma y hablan por chat.

Lo que sigue:

1. Recuperación de contraseña (necesita un servicio de correo).
2. Que el repartidor pueda marcar el pedido como entregado.
3. Notificaciones reales.
4. Detalle de producto y "Mandado", que todavía usan datos de ejemplo.
5. Métricas del comercio.
