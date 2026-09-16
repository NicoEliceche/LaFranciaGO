# El panel del comercio, hoy

Auditoría del estado actual antes de comparar con dongestion. Sirve para
saber qué hay construido, qué falta, y dónde el trabajo es agrandar algo que
existe y dónde es empezar de cero.

Medido sobre la aplicación andando, no sobre el código.

---

## Lo que ya funciona

El panel real vive en `/panel/comercio` (`MiComercioScreen`, 1.259 líneas) y
tiene siete secciones, todas contra la API de verdad:

| Sección | Qué resuelve | Estado |
|---|---|---|
| Resumen | Pedidos y ventas de hoy contra ayer, semana contra la previa, ticket promedio, lo más vendido | Completo |
| Mi negocio | Nombre, dirección, teléfono, descripción, pedido mínimo, horarios por tramos | Completo |
| Productos | Alta, edición, precio, stock, fraccionamiento por peso | Completo |
| Ofertas | Descuento, por cantidad, combos | Completo |
| Pedidos | Los que entran, con avance recibido → preparando → listo | Completo |
| Chats | Consultas por pedido, con contador de no leídos | Completo |
| Envíos | Seguimiento de lo que salió | Completo |

Nada de esto hay que rehacerlo. Es la base sobre la que se construye.

## Lo que no está

Un sistema de gestión como el que paga Diego cubre cosas que acá no existen
todavía. Sin ver dongestion todavía, lo que falta con seguridad:

- **Caja y movimientos.** Hoy se ven ventas, no dinero. No hay apertura ni
  cierre de caja, ni egresos, ni arqueo.
- **Compras y proveedores.** El stock sólo baja por ventas; no hay forma de
  cargar una compra ni de registrar a quién se le compró.
- **Clientes como entidad.** Existen los pedidos, no las personas. No hay
  ficha de cliente, ni cuenta corriente, ni historial por persona.
- **Comprobantes.** No hay remito, factura ni presupuesto.
- **Informes.** Hay métricas del día; no hay informes por rango de fechas,
  por rubro ni exportables.
- **Varios usuarios por comercio.** Un comercio es una cuenta. No hay
  empleados con permisos distintos.

## El problema de fondo: la pantalla grande

Esto es lo que pidió Diego y se mide solo. En una ventana de **1920px**:

- el contenido ocupa **1152px**
- arranca a **534px** del borde izquierdo
- se desperdician **768px**: el **40% de la pantalla**

La causa está en el marco, no en el panel: `MarketplaceFrameStyled.ts` limita
el contenido a `max-width: 56rem` (896px). Es la medida correcta para leer un
texto cómodo, y la equivocada para operar un negocio.

Y el panel casi no distingue tamaños: **3 media queries en 1.259 líneas**. Lo
que hay hoy es una aplicación de teléfono estirada, no un panel de escritorio.

### Qué significa en la práctica

Un sistema de gestión en escritorio se opera distinto que una app en el
teléfono. En la pantalla grande se espera:

- Ver una tabla con muchas filas sin bajar.
- Tener el listado y el detalle a la vez, sin perder de vista uno al abrir el
  otro.
- Filtrar y buscar sin que se tape el contenido.
- Editar varias filas seguidas sin volver atrás cada vez.

Ninguna de esas cuatro cosas se puede hacer hoy.

## Cómo se ordena el trabajo

Dos frentes distintos, que conviene no mezclar:

**1. La estructura.** Que el panel use la pantalla grande como panel y la
chica como aplicación. Toca el marco y la disposición; no agrega
funcionalidad. Es lo que hace que lo que ya existe se sienta un sistema de
gestión.

**2. Los módulos nuevos.** Caja, compras, clientes, comprobantes, informes.
Cada uno toca base de datos, backend y pantallas.

El primero conviene hacerlo antes: cada módulo nuevo que se construya sobre
la estructura vieja hay que rehacerlo después.

## Lo que falta para planificar

Este documento es la mitad del cuadro. La otra mitad es el análisis de
dongestion:

- Capturas de cada pantalla del panel.
- El árbol del menú tal cual está escrito.
- **Qué usa Diego todos los días** y qué nunca abrió.
- **Qué hace en papel, WhatsApp o Excel** porque el sistema no lo cubre.

Los dos últimos puntos valen más que los dos primeros: separan lo que hay que
construir de lo que sólo ocupa lugar en un menú.
