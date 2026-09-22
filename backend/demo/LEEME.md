# Cuentas para mostrar la aplicación

Cinco cuentas, una por cada cosa que hay para mostrar. Se entra con email y
contraseña como cualquiera, y aparece lo de ese rol y nada más.

```bash
node demo/cuentas.mjs
```

Contra producción, cuando esté publicada:

```bash
node demo/cuentas.mjs --remoto
```

Se puede correr las veces que haga falta: las que ya existen se dejan como
están y se reajustan el rol y el plan.

## Las cuentas

La contraseña de todas es **`Demo2026!`**

| Email | Qué muestra |
|---|---|
| `cliente@lafrancia.ar` | El vecino que compra |
| `comercio@lafrancia.ar` | Comercio **sin** el sistema de gestión |
| `gestion@lafrancia.ar` | Comercio **con** el sistema de gestión |
| `delivery@lafrancia.ar` | El que reparte |
| `flete@lafrancia.ar` | El que hace fletes |

Los comercios entran como cliente y hay que cambiar abajo a la izquierda, en
**Cambiar de cuenta → Comercio**. Es a propósito: el dueño del almacén
también compra en la panadería.

La contraseña cumple lo que pide el registro —ocho caracteres, y no está
entre las más usadas— y eso no es casual: **el formulario de ingreso también
lo comprueba en el navegador**, con `minLength={8}` en el campo. Una clave
más corta ni siquiera llega al servidor; el campo se pone en rojo y no deja
seguir, aunque la cuenta exista.

Por eso las cuentas se crean por el registro normal y no escribiendo el hash
a mano: si la clave tiene que pasar por el formulario igual, no hay nada que
esquivar.

## Por qué hay dos comercios

Porque ahí está la diferencia que más se confunde, y verla al lado se explica
sola.

**Sin el plan** (Almacén Don Pedro): su perfil, sus productos, sus precios,
sus ofertas, sus fotos, los pedidos y los chats. Todo lo que ya estaba. En el
menú le aparece **Activar el sistema de gestión**, que lleva a la pantalla de
contratación.

**Con el plan** (Supermercado La Esquina): lo mismo, más **Sistema de
gestión** en el menú y la franja en su panel, que llevan a la caja, las
ventas del mostrador, el fiado, las compras, los clientes, los presupuestos y
los informes.

## Cuánto sale

**$ 79.999,00 por mes**, que es un valor para arrancar y todavía no está
cerrado.

El precio vive en una sola constante del backend, `PRECIO_GESTION_CENTAVOS`
en `src/index.ts`, y las pantallas lo piden a `/plan-gestion`. Está así
porque el día que cambie tiene que cambiar en la web y en las dos
aplicaciones del teléfono a la vez: una copia en cada lado se desincroniza, y
un cartel que diga un precio distinto del que se cobra es un problema serio.

**Todavía no cobra nada.** Contratar activa el sistema en el momento. Cuando
haya que cobrarlo de verdad, en el `POST /plan-gestion` va la preferencia de
Mercado Pago y la activación pasa a hacerla el aviso de pago, igual que con
los pedidos: la vuelta del navegador puede no ocurrir nunca y el pago estar
hecho igual.

## Cómo se protege

Son dos cosas distintas y las dos hacen falta.

**El backend** responde 403 a todo lo que cuelga de `/gestion` si el comercio
no tiene el plan. Esa es la protección de verdad: no depende del navegador.

**El frontend** no muestra la franja ni deja entrar escribiendo la dirección.
Eso es comodidad: ofrecer una puerta que después no abre es peor que no
ofrecerla.

Probado el ciclo entero:

```
sin el plan          GET /gestion/caja  ->  403
contratar            POST /plan-gestion ->  { activo: true }
con el plan          GET /gestion/caja  ->  200
dar de baja          DELETE /plan-gestion -> { activo: false }
sin el plan otra vez GET /gestion/caja  ->  403
```

## Activar o desactivar el plan a mano

Para mostrar el antes y el después con el mismo comercio, sin pasar por la
pantalla:

```sql
UPDATE comercios SET gestion_activa = 1, gestion_desde = datetime('now')
 WHERE nombre = 'Almacén Don Pedro';
```

`gestion_activa` no es lo mismo que `premium`, que ya existía: ese mejora la
posición en el listado. Son dos productos que se cobran por separado, así que
un comercio puede tener uno, el otro, los dos o ninguno.
