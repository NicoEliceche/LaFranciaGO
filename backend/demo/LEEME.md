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
| `cliente@demo.lafranciago.ar` | El vecino que compra |
| `comercio@demo.lafranciago.ar` | Comercio **sin** el sistema de gestión |
| `gestion@demo.lafranciago.ar` | Comercio **con** el sistema de gestión |
| `delivery@demo.lafranciago.ar` | El que reparte |
| `flete@demo.lafranciago.ar` | El que hace fletes |

Los comercios entran como cliente y hay que cambiar arriba a la izquierda, en
**Cambiar de cuenta → Comercio**. Es a propósito: el dueño del almacén
también compra en la panadería.

## Por qué hay dos comercios

Porque ahí está la diferencia que más se confunde, y verla al lado se explica
sola.

**Sin el plan** (Almacén Don Pedro): su perfil, sus productos, sus precios,
sus ofertas, sus fotos, los pedidos y los chats. Todo lo que ya estaba.

**Con el plan** (Supermercado La Esquina): lo mismo, más la franja *Sistema
de gestión* arriba de las pestañas, que lleva a la caja, las ventas del
mostrador, el fiado, las compras, los clientes, los presupuestos y los
informes.

Abrirlas en dos ventanas al lado muestra qué se está vendiendo.

## Cómo se protege

Son dos cosas distintas y las dos hacen falta.

**El backend** responde 403 a todo lo que cuelga de `/gestion` si el comercio
no tiene el plan. Esa es la protección de verdad: no depende del navegador.

**El frontend** no muestra la franja ni deja entrar escribiendo la dirección.
Eso es comodidad: ofrecer una puerta que después no abre es peor que no
ofrecerla.

Probado con las dos cuentas:

```
comercio sin plan   GET /gestion/caja  ->  403
                    GET /mi-comercio   ->  200
comercio con plan   GET /gestion/caja  ->  200
                    GET /mi-comercio   ->  200
```

## Activar o desactivar el plan a mano

Para mostrar el antes y el después con el mismo comercio:

```sql
UPDATE comercios SET gestion_activa = 1, gestion_desde = datetime('now')
 WHERE nombre = 'Almacén Don Pedro';
```

`gestion_activa` no es lo mismo que `premium`, que ya existía: ese mejora la
posición en el listado. Son dos productos que se cobran por separado, así que
un comercio puede tener uno, el otro, los dos o ninguno.
