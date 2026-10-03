# Los respaldos de la base

## Lo primero: Cloudflare ya la respalda

D1 tiene **Time Travel**, encendido desde siempre y sin costo. Permite volver
a **cualquier minuto de los últimos 30 días** — no a snapshots de ayer a las
3, a *cualquier minuto*.

```bash
cd backend

# ¿A qué estado volvería si retrocedo a tal momento?
node node_modules/wrangler/bin/wrangler.js d1 time-travel info lafranciago --timestamp=2026-10-03T12:00:00Z

# Volver ahí
node node_modules/wrangler/bin/wrangler.js d1 time-travel restore lafranciago --timestamp=2026-10-03T12:00:00Z
```

Para "alguien borró algo sin querer" o "una migración salió mal", **esto es
lo que hay que usar**: es más preciso y más rápido que cualquier archivo.

Restaurar pisa la base. Pero como guarda todo el historial, también se puede
deshacer: se vuelve a la marca de antes de restaurar.

## Entonces, ¿para qué el archivo?

Para lo que Time Travel no cubre:

**Que la cuenta de Cloudflare se pierda.** Suspensión, un problema de pago,
un error. Una copia que vive adentro del mismo servicio no es una copia de
seguridad: es la misma base en otro cajón.

**Mudarse.** El archivo es SQL plano. Entra en Postgres, en Supabase, en un
SQLite en el disco o en otra D1. Si algún día conviene cambiar de servicio,
los datos salen caminando.

**Guardar un momento.** Antes de una migración grande, tener el *antes* en el
escritorio es más rápido que calcular una marca de tiempo.

```bash
npm run respaldo          # la base de todos los días
npm run respaldo:prod     # la de producción
```

Queda en `backend/respaldos/`, como
`lafranciago-2026-10-03-0730.sql`. Guarda las últimas 30 y borra las más
viejas.

Esa carpeta **está en el .gitignore**: tiene nombres, teléfonos, direcciones
y ventas de gente real, y este repositorio es público.

### Para restaurar desde un archivo

```bash
cd backend
node node_modules/wrangler/bin/wrangler.js d1 execute lafranciago --remote --file "respaldos/lafranciago-2026-10-03-0730.sql"
```

## Cada cuánto conviene

Hoy la base escribe unas **700 filas por día** y pesa **1 MB**. Con esos
números:

| Cuándo | Para qué |
|---|---|
| Antes de cada migración | Es cuando algo puede salir mal de verdad |
| Una vez por semana | Que la copia de afuera no quede vieja |
| Antes de tocar datos a mano | Un `DELETE` sin `WHERE` pasa |

**Hacer una copia por hora no tiene sentido hoy**, y no por el costo —son
centavos— sino porque Time Travel ya cubre cualquier minuto. Treinta copias
por hora serían treinta archivos para cubrir algo que Cloudflare ya cubre
mejor.

Si algún día La Francia hace cientos de pedidos por día y Diego vive de esto,
conviene automatizar una copia diaria a Drive o a R2. Hoy sería guardar por
guardar.

## Qué falta

El archivo queda en **esta computadora**. Si se rompe el disco, se pierde con
todo lo demás. Mientras sean copias manuales antes de cambios grandes,
alcanza con moverlo a Drive a mano.

El paso siguiente, cuando haya datos reales, es subirlo solo a un lugar fuera
de Cloudflare.
