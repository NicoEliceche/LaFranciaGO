# El sistema que usa Diego

Leído de las capturas y el video que grabó Nicolás con su propia sesión. No
se accedió al sistema: lo que sigue sale del material que él pasó.

El objetivo no es copiarlo. Es entender qué problemas le resuelve a Diego,
para decidir cuáles resolvemos dentro de LaFranciaGO y cuáles no valen la
pena.

---

## El menú, completo

Ocho entradas en una barra horizontal, cada una con su desplegable:

```
Ingresos          Egresos                Contactos     Productos
  Ventas a clientes  Compras a proveedores  Clientes      Productos
  Presupuestos       Otros egresos          Proveedores   Lista de precios de venta
  Otros ingresos

ARCA (sin desplegable)   Cuentas                 Informes   Usuarios
                           Cuentas                            Usuarios
                           Operaciones en cuentas             Vendedores
                                                              Roles
```

Además, un botón **Crear** siempre visible arriba a la izquierda: el atajo
para cargar sin navegar hasta la sección.

## Lo que revela el tablero

El inicio muestra, en una sola pantalla de escritorio:

- **Cuatro totales arriba**: ventas del mes (1.433), total de ventas,
  ventas cobradas, total de egresos. Cada uno con su comparación contra el
  mes anterior.
- **Cotización del dólar**, oficial y blue. En Argentina esto no es
  decoración: es dato de trabajo.
- **Gráfico de ventas de los últimos 30 días**.
- **Resumen del día**: importe en ventas, importe en compras, facturas a
  cobrar, compras sin pagar.
- **Estado de cuentas**: cuenta general y pagos sin cuenta, con total.
- **Cobros vencidos o a vencer en 7 días**.
- **Alerta de stock**: 481 productos bajo el límite, paginados de a 5.

Lo que el tablero dice del negocio: Diego vive de **cobrar y pagar en el
tiempo**, no sólo de vender. Tres de los siete bloques son cuentas por
cobrar o por pagar.

## La pantalla de ventas: el patrón a seguir

Es la más completa y la que mejor muestra qué espera alguien de un sistema de
gestión en escritorio.

**Arriba, cuatro totales del filtro aplicado**: cantidad de ventas (7.331),
cobrado, a cobrar, total. Cambian con el filtro; no son del negocio entero.

**Filtros en dos niveles.** Cuatro a la vista —fecha (como rango), sucursal,
cliente, estado de pago— y un botón "Filtros" que despliega el resto:
usuario, vendedor, origen, método de pago, estado de envío, estado de
facturación, vencimiento.

**La tabla, con 14 columnas**: acción, emisión, cliente, envío, notas,
estado, total, cobrado, a cobrar, sucursal, vencimiento, a pagar
(devolución), número de factura.

**Por fila, dos controles**: un menú "Acciones" y un acceso directo a la
orden de venta. Casillas para seleccionar varias.

**Y arriba de todo**: "Nueva venta", "Devoluciones" y "Tablero de envíos".

Nada de esto se puede hacer hoy en LaFranciaGO. No por falta de datos, sino
porque la pantalla no está pensada para operar sobre muchas filas.

## El alta de una venta

Una sola pantalla, sin pasos:

- Vendedor, fecha de emisión, cliente (con botón para crear uno nuevo ahí
  mismo).
- **Búsqueda de producto por nombre, SKU o código de barras** — pensada para
  un lector, no para el mouse.
- Tabla de items con cantidad, precio, descuento por línea, subtotal, IVA.
- Descuento general aparte del de cada línea.
- **Varios pagos en una venta**: importe, método, cuenta de pago y nota, con
  "Agregar nuevo pago". Muestra el saldo a favor del cliente.

El detalle que más dice: se pueden registrar **pagos parciales y de varios
métodos en la misma venta**. Eso es cuenta corriente de verdad, no un campo
"pagado sí/no".

## Qué tiene que LaFranciaGO no tiene

| Módulo | Qué resuelve | ¿Existe hoy? |
|---|---|---|
| Ventas con cobro parcial | Vender y cobrar en momentos distintos | No |
| Presupuestos | Cotizar antes de vender | No |
| Compras a proveedores | Reponer stock y registrar deuda | No |
| Otros ingresos / egresos | Movimientos que no son venta ni compra | No |
| Clientes como ficha | Historial, saldo, datos | No (hay pedidos, no personas) |
| Proveedores | A quién se le compra y cuánto se debe | No |
| Lista de precios | Precios distintos por lista | No |
| Cuentas y operaciones | Caja, bancos, transferencias | No |
| Informes | Consultas por rango y exportables | Parcial (sólo métricas del día) |
| Usuarios, vendedores, roles | Varias personas con permisos distintos | No |
| ARCA (ex AFIP) | Facturación electrónica | No |
| Sucursales | Más de un local | No |
| Código de barras | Cargar con lector | No |

## Lo que conviene mirar con cuidado

**ARCA es un mundo aparte.** La facturación electrónica argentina exige
certificados, homologación y responsabilidad fiscal. No es un módulo más:
es un proyecto propio. Conviene decidir explícitamente si entra, y si entra,
cotizarlo aparte.

**Sucursales atraviesa todo.** Se ve en casi cada pantalla (columna
"Sucursal", filtro "Sucursal"). Si Diego lo necesita, hay que decidirlo
ahora: agregarlo después obliga a tocar todas las tablas.

**Hay funciones que probablemente no use.** 481 productos con alerta de
stock en cero sugiere que el control de stock está configurado pero no
mantenido. Antes de replicar el módulo entero conviene preguntarle qué mira
de verdad.

## Lo que falta preguntarle a Diego

El material muestra **qué tiene el sistema**. Falta lo que ninguna captura
dice:

1. **Qué abre todos los días** y qué nunca tocó.
2. **Qué hace en papel, WhatsApp o Excel** porque el sistema no se lo cubre.
3. **Si necesita facturar** electrónicamente desde LaFranciaGO o le alcanza
   con seguir facturando donde factura hoy.
4. **Si tiene más de un local**, ahora o pensado.
5. **Cuántas personas** usan el sistema y si necesitan ver cosas distintas.

Las dos primeras separan lo que hay que construir de lo que sólo ocupa lugar
en un menú.
