# El sistema que usa Diego

Leído del recorrido de 27 minutos y las capturas que grabó Nicolás con su
propia sesión. No se accedió al sistema.

El objetivo no es copiarlo. Es entender qué problemas le resuelve a Diego,
para decidir cuáles resolvemos dentro de LaFranciaGO y cuáles no.

---

## Lo primero: cuánto paga y qué le alcanza

Plan Clásico, **$87.600 por mes**, con:

- 1 sucursal
- 2 usuarios
- 1000 productos
- vendedores y facturas ilimitadas

Dos cosas que esto define:

**Una sola sucursal le alcanza.** El sistema soporta varias y las muestra en
cada filtro, pero Diego paga el plan de una. No hace falta construir
sucursales múltiples.

**Es el techo de lo que podemos cobrarle.** Si LaFranciaGO le reemplaza esto,
el ahorro es de algo más de un millón de pesos al año.

## El menú, completo

```
Ingresos              Egresos                 Contactos    Productos
  Ventas a clientes     Compras a proveedores   Clientes     Productos
  Presupuestos          Otros egresos           Proveedores  Lista de precios de venta
  Otros ingresos

ARCA        Cuentas                  Informes    Usuarios
              Cuentas                              Usuarios
              Operaciones en cuentas               Vendedores
                                                   Roles
```

Más un botón **Crear** siempre visible, y un menú de accesos con: Resumen del
día, Don Links, Catálogo QR, Scanner, Gestión rápida, Club de Beneficios,
Academia, Etiquetas, Centro de Ayuda, Tema claro/oscuro y pantalla completa.

## Los cuatro pilares

Mirando el recorrido entero, el sistema se sostiene sobre cuatro cosas. Las
tres primeras no existen hoy en LaFranciaGO de ninguna forma.

### 1. Cuenta corriente

Es lo que más aparece. No es un campo "pagado sí/no": es un saldo que se
mueve.

- Cada venta puede cobrarse en **varios pagos**, cada uno con su método
  (efectivo, transferencia, tarjeta, cheque), su cuenta y su fecha.
- Un cliente tiene **balance de deuda** y **saldo a favor**. Si paga de más,
  queda a favor y se usa en la venta siguiente.
- Hay **deuda inicial** para cargar lo que ya se debía antes de usar el
  sistema.
- Lo mismo para proveedores, del otro lado.
- Los cobros tienen **vencimiento**, y el tablero avisa los que vencen en 7
  días.

### 2. Caja

Separado de las ventas. El punto de venta ("Gestión rápida") tiene:

- Apertura y **cierre de caja**.
- **Retiros** y **depósitos**, cada uno con nota y responsable.
- **Egresos** que no son compras.
- Pago de cuenta corriente desde el mostrador.
- Devolución de productos.

Y un informe de cajas por usuario, con totales de efectivo, tarjeta y
cheques.

### 3. Costo y rentabilidad

Cada producto guarda **precio de costo** además del de venta. Con eso el
sistema calcula, en el informe de beneficios:

- ganancia bruta y neta por fecha, por día, por factura, por producto
- el **porcentaje de ganancia** de cada venta (se ven márgenes del 8% al 60%)

Sin guardar el costo, este informe no existe. Es una decisión de base de
datos, no de pantalla.

### 4. Operar sobre muchas filas

Toda pantalla de listado tiene la misma forma:

- **Totales arriba** que responden al filtro aplicado, no al negocio entero.
- **Filtros en dos niveles**: los cuatro más usados a la vista, el resto
  detrás de un botón "Filtros".
- **Selector de cuántas filas** mostrar y buscador.
- **Acciones por fila** (Ver, Editar, Duplicar, Borrar) y casillas para
  seleccionar varias.
- Acciones masivas sobre lo seleccionado.

En ventas son 14 columnas y 11 filtros sobre 7.331 registros.

## Lo demás que tiene

| Módulo | Qué hace |
|---|---|
| Presupuestos | Cotizar antes de vender; se convierte en venta |
| Compras a proveedores | Reponer stock y registrar deuda |
| Otros ingresos / egresos | Movimientos que no son venta ni compra, con categorías |
| Devoluciones | Devolver productos con comprobante imprimible |
| Listas de precios | Varios precios por producto; se elige en la venta |
| Importar productos | Desde Excel, mapeando cada columna a un campo |
| Actualizar precios masivamente | Exportar a Excel, editar, volver a importar |
| Scanner | Buscar por código de barras, con cámara o lector |
| Catálogo QR | Catálogo público con QR, con o sin stock visible |
| Etiquetas | Imprimir etiquetas de productos |
| Envíos | Estado de entrega, transportista, tablero de envíos |
| Usuarios, vendedores, roles | Varias personas con permisos distintos |
| Auditoría | Cada pago registra quién lo creó y si fue modificado |
| ARCA (ex AFIP) | Facturación electrónica: CUIT, punto de venta, factura A |

### Los ocho informes

Cuenta corriente · Ingresos y egresos · Resumen de beneficios · Ranking de
productos · Informe de stock · Ventas a clientes · Pagos a proveedores ·
Cobros.

Todos con rango de fechas y exportables.

## Qué tiene LaFranciaGO hoy

| | Don Gestión | LaFranciaGO |
|---|---|---|
| Vender | Sí, con cobro parcial | Sí, pago completo |
| Cuenta corriente | Sí | No |
| Caja | Sí | No |
| Costo y rentabilidad | Sí | No |
| Clientes como ficha | Sí | No (hay pedidos, no personas) |
| Proveedores y compras | Sí | No |
| Presupuestos | Sí | No |
| Stock | Sí, con alertas | Sí |
| Informes | Ocho, por rango | Métricas del día |
| Usuarios y permisos | Sí | No, una cuenta por comercio |
| Facturación | Sí (ARCA) | No |
| Listado operable | Sí | No |

Lo que LaFranciaGO tiene y Don Gestión no: **el cliente final pide desde la
app**, con delivery, flete, chat y seguimiento. Eso no es un módulo menos:
es otro negocio, y es la razón por la que el comercio querría las dos cosas
en un solo lugar.

## Lo que hay que decidir antes de construir

**ARCA es un proyecto aparte.** Certificados, homologación, responsabilidad
fiscal. Conviene decidir explícitamente si entra y cotizarlo por separado.

**Sucursales: probablemente no.** El plan de Diego tiene una sola. Si se
descarta, se ahorra una columna en casi todas las tablas.

**Hay funciones que no usa.** 481 productos con alerta de stock, todos en
cero, sugieren control configurado pero no mantenido. Y en el informe de
cajas aparecen 5 usuarios cuando el plan permite 2.

## Lo que falta preguntarle a Diego

El recorrido muestra **qué tiene el sistema**. Falta lo que ninguna captura
dice:

1. **Qué abre todos los días** y qué nunca tocó.
2. **Qué hace en papel, WhatsApp o Excel** porque el sistema no se lo cubre.
3. **Si necesita facturar** desde LaFranciaGO o le alcanza con seguir
   facturando donde factura hoy.
4. **Cuánta gente** usa el sistema y si necesitan ver cosas distintas.
5. **Si lleva fiado** de verdad, y a cuánta gente.

La quinta es la más importante: si la cuenta corriente es central en su día,
es el primer módulo. Si casi todo se cobra al contado, el orden cambia.
