# Casos de prueba

Para recorrer la aplicación antes de una demostración y encontrar lo que se
rompió, sin tener que acordarse de qué probar.

## Antes de empezar

```bash
cd backend && node demo/escenario.mjs
```

Deja cinco pedidos, uno parado en cada paso del recorrido. Se puede volver a
correr cuando quieras: borra los de la corrida anterior antes de sembrar, así
que no se acumulan. Para dejar todo limpio, `node demo/escenario.mjs --limpiar`.

Contra el sitio publicado, agregar `--remoto`.

Las cinco cuentas, todas con la contraseña **`Demo2026!`**:

| Cuenta | Para qué |
|---|---|
| `cliente@lafrancia.ar` | El vecino que compra |
| `comercio@lafrancia.ar` | Un negocio **sin** el sistema de gestión |
| `gestion@lafrancia.ar` | Un negocio **con** el sistema contratado |
| `delivery@lafrancia.ar` | Quien reparte pedidos |
| `flete@lafrancia.ar` | Quien hace fletes |
| `admin@lafrancia.ar` | Nosotros: altas y registro de errores |

Los pedidos que deja el script:

| Etiqueta | Estado | Sirve para |
|---|---|---|
| ESPERA | Recién hecho | El comercio lo acepta y empieza a prepararlo |
| PREPARANDO | El comercio lo arma | Marcarlo listo |
| LISTO | Esperando repartidor | Aparece en "Disponibles" del delivery |
| CAMINO | En camino, con ubicación | El mapa muestra dónde va |
| SIN-GPS | En camino, sin ubicación | Muestra el tiempo estimado |

---

## Cliente

### C1 · Armar un pedido de punta a punta

1. Entrar con `cliente@lafrancia.ar`.
2. En Inicio, tocar una oferta de la fila "Destacados".
3. **Verificar:** lleva al comercio y baja solo hasta la sección **Ofertas**,
   con esa oferta a la vista.
4. Agregar ese producto al carrito.
5. **Verificar:** aparece la barra del carrito abajo, con el total. No ocupa
   todo el ancho y no tapa la última tarjeta al bajar del todo.
6. Volver a Inicio y entrar a otro comercio desde "Negocios".
7. Usar el selector de cantidad: tocar **+** varias veces.
8. **Verificar:** el texto crece dentro del selector y no se sale de la
   tarjeta, ni siquiera con etiquetas largas como "1 kg + 1/4".
9. Agregar al carrito y abrir el carrito.
10. **Verificar:** están los productos de los dos comercios, con su subtotal.

### C2 · Confirmar el pedido

1. Con el carrito armado, tocar **Confirmar pedido**.
2. Elegir dirección y método de pago.
3. **Verificar:** se crea el pedido y aparece su número.
4. Ir a **Mis pedidos**.
5. **Verificar:** el pedido está en la lista, con su estado.

### C3 · El chat cuenta lo que va pasando

Con el pedido **CAMINO**, que ya tiene la historia completa.

1. Entrar como cliente y abrir ese pedido.
2. Abrir el chat.
3. **Verificar:** están estos avisos, en gris y centrados, en este orden:
   - El comercio empezó a preparar el pedido
   - El pedido está listo para que lo retire el repartidor
   - *(nombre del repartidor)* se sumó al chat al tomar el pedido
   - *(nombre)* retiró el pedido del comercio
   - *(nombre)* va en camino a la dirección de entrega
4. Escribir un mensaje.
5. **Verificar:** se ve distinto de los avisos del sistema.

### C4 · Seguir al repartidor en el mapa

1. Abrir el seguimiento del pedido **CAMINO**.
2. **Verificar:** el mapa muestra tres puntos — el comercio, tu dirección y
   el repartidor — y los pasos de arriba marcan hasta "en camino".

### C5 · Cuando el repartidor no comparte ubicación

1. Abrir el seguimiento del pedido **SIN-GPS**.
2. **Verificar:** debajo del mapa aparece el aviso con:
   - Cuántos minutos llegaría, estimados
   - La explicación de que el repartidor no comparte su ubicación
3. **Verificar:** el mapa no muestra ningún punto de repartidor, y el aviso
   no se ve como un error (es gris, no rojo).

### C6 · El resto de las pantallas

1. **Categorías:** entrar y verificar que las 14 tienen foto propia.
2. **Favoritos:** guardar un comercio desde Inicio y verificar que aparece.
3. **Mandados:** pedir uno y verificar que se crea.
4. **Cuenta:** cambiar el tema de día a noche y verificar que toda la
   aplicación lo respeta.

---

## Comercio (sin gestión)

Con `comercio@lafrancia.ar`.

### N1 · Lo que ve y lo que no

1. Entrar y abrir el menú lateral.
2. **Verificar:** dice Inicio · Mi negocio · Productos · Mis pedidos · Cuenta.
   **No** dice Categorías ni Favoritos.
3. **Verificar (celular):** abajo hay cinco botones, y el cuarto es
   "Mi negocio".
4. Tocar **Mi negocio**.
5. **Verificar:** abre la ficha con los datos y horarios, **no** el resumen.

### N2 · Cargar un producto

1. Ir a **Productos** → **Nuevo producto**.
2. Cargar nombre, precio y unidad de venta. Guardar.
3. **Verificar:** aparece en la lista.
4. Entrar como cliente al mismo comercio y verificar que se ve.

### N3 · Atender un pedido

1. Ir a **Mis pedidos**. Buscar el pedido **ESPERA**.
2. Marcarlo **En preparación**, después **Listo**.
3. **Verificar:** cambia de estado en la lista.
4. Abrir el chat de ese pedido.
5. **Verificar:** quedaron los dos avisos de los cambios que acabás de hacer.

### N4 · El sistema de gestión se ofrece, no se regala

1. En el menú lateral, tocar **Activar el sistema de gestión** (el dorado).
2. **Verificar:** muestra los dos planes, Comercio GO ($99.999) y Comercio GO
   PRO ($149.999), con el PRO marcado como el más completo.
3. **Verificar:** hay un botón **Volver a la app**.
4. Escribir a mano `#/gestion` en la dirección.
5. **Verificar:** no deja entrar (el sistema no está contratado).

---

## Comercio con gestión

Con `gestion@lafrancia.ar`.

### G1 · Entrar y salir del sistema

1. Entrar y tocar el botón dorado del menú.
2. **Verificar:** abre el sistema de gestión, no la pantalla de planes.
3. **Verificar:** al pie del menú están **Volver a la app**, el cambio de
   tema y **Plegar el menú**.
4. Tocar **Volver a la app**.
5. **Verificar:** vuelve al panel del comercio.

### G2 · Que ningún botón del menú expulse

Tocar una por una: Resumen, Caja rápida, Caja, Fiado, Ventas, Presupuestos,
Compras, **Pedidos de la app**, **Envíos**, **Productos**, **Ofertas**,
Clientes, **Chats**, Informes, Este mostrador.

1. **Verificar:** ninguna saca del sistema de gestión.
2. **Verificar:** se pinta **un solo** botón por vez. En particular, estando
   en "Caja rápida" **no** queda pintado también "Caja".

### G3 · El menú se pliega y se ve de noche

1. Tocar **Plegar el menú**.
2. **Verificar:** queda una columna de íconos y el contenido se ensancha.
3. Recargar la página.
4. **Verificar:** sigue plegado.
5. Cambiar a modo noche y verificar que el sistema entero lo respeta.
6. **En celular:** abrir el menú y verificar que no tapa toda la pantalla, y
   que se cierra al elegir algo.

### G4 · Una venta en el mostrador

1. **Caja** → abrir la caja con un monto inicial.
2. **Caja rápida** → cargar productos y cobrar.
3. **Verificar:** la venta aparece en **Ventas**.
4. **Caja** → cerrar y verificar que el total esperado coincide.

---

## Delivery

Con `delivery@lafrancia.ar`.

### D1 · Lo que ve

1. Abrir el menú lateral.
2. **Verificar:** Inicio · Disponibles · Mis envíos · Ganancias · Cuenta.
3. **Verificar (celular):** el pie tiene las mismas cinco.

### D2 · Tomar y entregar un pedido

1. **Disponibles:** buscar el pedido **LISTO**.
2. Tomarlo.
3. **Verificar:** pasa a **Mis envíos**.
4. Marcar **Retirado**, después **En camino**, después **Entregado**.
5. **Verificar:** en cada paso sólo se ofrece el siguiente (no se puede
   saltear).
6. Entrar como **cliente** y abrir el chat de ese pedido.
7. **Verificar:** están los tres avisos nuevos, con el nombre del repartidor.

### D3 · La ubicación

1. Con un envío en curso, permitir la ubicación cuando la pida.
2. Entrar como cliente al seguimiento.
3. **Verificar:** el punto del repartidor aparece en el mapa.

---

## Fletero

Con `flete@lafrancia.ar`.

### F1 · Lo que ve

1. Abrir el menú lateral.
2. **Verificar:** Inicio · Disponibles · **Mis fletes** · Ganancias · Cuenta.
3. **Verificar:** en las acciones se le ofrece anotarse como **delivery**
   (el cruzado), no como fletero.

### F2 · Cotizar un flete

1. Como cliente, pedir un flete desde **Mandados**.
2. Como fletero, ver el pedido en **Disponibles** y cotizarlo.
3. Como cliente, aceptar la cotización.
4. **Verificar:** el flete pasa a **Mis fletes** del fletero.

---

## Administración

Con `admin@lafrancia.ar`.

### A1 · Lo que ve

1. Abrir el menú lateral.
2. **Verificar:** Inicio · Altas · Registro · Avisos · Cuenta.
3. **Verificar:** **no** se le ofrece publicar comercio ni anotarse de
   repartidor.

### A2 · Aprobar una alta

1. Como cliente, empezar el registro de un comercio.
2. Como admin, ir a **Altas** y aprobarlo.
3. **Verificar:** el comercio aparece publicado en el marketplace.

### A3 · El registro de errores

1. Ir a **Registro**.
2. **Verificar:** se ven las líneas con nivel, área y fecha.
3. Filtrar por nivel "error".
4. Abrir una línea y **verificar** que muestra el detalle.
5. **Verificar:** ninguna línea muestra contraseñas ni tokens (se ocultan).

---

## Transversal

### T1 · Entrar y salir

1. Con cada una de las seis cuentas: entrar, verificar que cae en su pantalla,
   recargar la página y verificar que sigue adentro.
2. Cerrar sesión y verificar que vuelve a la pantalla de ingreso.
3. Probar una contraseña incorrecta y **verificar** que el mensaje está en
   castellano.

### T2 · Sin internet

1. Con sesión abierta, apagar la conexión.
2. Intentar algo que use la red.
3. **Verificar:** el mensaje dice *"No pudimos conectarnos..."* en castellano,
   **no** "Failed to fetch".
4. **Verificar:** aparece el botón **Avisar del problema**.

### T3 · En el celular

Repetir C1, N1 y D1 en pantalla de teléfono.

1. **Verificar:** el pie siempre tiene cinco botones y el del medio queda
   centrado.
2. **Verificar:** ninguna tarjeta de producto se sale de su caja.

---

## Cómo anotar lo que falla

Un renglón por problema, con el caso, qué esperabas y qué pasó:

```
C3 · esperaba ver el aviso de "va en camino" y el chat quedó vacío
```

Si la aplicación mostró un error, tocar **Avisar del problema**: el reporte
llega con el detalle técnico adjunto y no hace falta describirlo.
