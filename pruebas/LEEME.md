# Los tests

```bash
npm test            # correrlos una vez
npm run test:mirar  # dejarlos corriendo mientras se edita
npm run test:reporte # igual, y además escribe pruebas/reporte.xml (formato JUnit)
```

Tardan menos de un segundo. La idea es correrlos antes de cada commit, sin
pensarlo demasiado.

## Qué cubren, y por qué eso

Cada caso de acá sale de algo que ya se rompió en la aplicación. No son
ejemplos inventados: si alguno se pone en rojo, está avisando que volvió un
bug que ya tuvimos.

| Archivo | Qué protege | El bug que lo originó |
|---|---|---|
| `dinero.test.ts` | Leer y mostrar plata en centavos | El campo rechazaba `$ 15.500` y la caja no abría |
| `escalones.test.ts` | Precio según la unidad de venta | Medio kilo de carne se cobraba $23.000 en vez de $5.750 |
| `cantidades.test.ts` | Las flechas del mostrador | Dos quesos, flecha abajo, daba 1,999 |
| `protocolo.test.ts` | El enlace `lafranciago://` | — (preventivo: la dirección la escribe una página web) |
| `migraciones.test.ts` | Que ninguna migración pierda datos | Tres columnas que se habrían perdido al rehacer `pedidos` |

## Lo que *no* cubren, a propósito

**Componentes de React.** Son caros de escribir, se rompen cada vez que se
mueve un botón, y ninguno de los bugs que tuvimos era de render: todos eran
de datos y de rutas.

**Los endpoints.** Es el siguiente paso y el que falta. Cloudflare tiene
`@cloudflare/vitest-pool-workers`, que corre los tests contra una D1 de
verdad en miniatura —sin mockear la base, que es justo donde se nos
rompieron las cosas—. Conviene arrancar por los que tocan plata: crear un
pedido, cotizar un flete, aceptar una cotización, y la deuda de efectivo.

Hasta que eso exista, esos flujos se prueban a mano siguiendo `PRUEBAS.md`.

## Cómo se prueban las migraciones

`migraciones.test.ts` las corre de verdad, en orden, sobre una base SQLite en
memoria —que es el mismo motor que usa D1—. No necesita Cloudflare ni
internet.

Lo importante es que compara el **antes y el después** de cada migración que
rehace una tabla: si la nueva no tiene todas las columnas de la vieja, el
test dice cuál falta. Esa comparación encontró tres columnas que se habrían
perdido en producción con los datos adentro.

Al agregar una migración que rehaga una tabla, conviene sumarle su caso acá
antes de aplicarla.
