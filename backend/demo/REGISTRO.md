# El registro de errores

Para responder una sola pregunta, rápido: **¿por qué se rompió esto?**

Cuando Diego avisa al otro día que "el jueves no pude cerrar la caja", los
logs de Cloudflare ya no tienen nada: se borran solos, no se pueden buscar y
hay que estar mirando en el momento exacto. Acá queda guardado.

## Entrar

```
https://nicoeliceche.github.io/LaFranciaGO/#/panel/admin/registro
```

Email `admin@lafrancia.ar`, contraseña `admin`.

**Cambiala.** Esta pantalla muestra mensajes internos, cuerpos de peticiones y
stacks: con eso se ve bastante de cómo funciona la aplicación por dentro.

Para crearla, o reponerle la contraseña si se perdió:

```bash
cd backend
node demo/admin.mjs            # en esta máquina
node demo/admin.mjs --remoto   # en producción
```

## Qué se guarda

Toda excepción que escape de cualquier ruta, sin que haya que acordarse de
poner un `try` en cada una. La captura vive en un solo lugar, en el borde,
así que una ruta nueva queda cubierta sin hacer nada.

De cada una:

| | |
|---|---|
| **Qué** | `TypeError: Cannot read properties of null` |
| **Dónde** | `POST /gestion/ventas → 500` |
| **Cuánto tardó** | 1 ms |
| **Quién** | el id de la sesión, si había |
| **Con qué datos** | el cuerpo del pedido que falló |
| **En qué línea** | el stack completo |

Los 5xx que devuelve el propio código, sin excepción de por medio, también se
anotan: son fallas nuestras aunque no hayan roto nada.

## Las contraseñas no se guardan

Cualquier campo que se llame `password`, `token`, `secret` o `authorization`
se reemplaza por `[oculto]` antes de escribir. Un registro con credenciales
adentro es peor que no tener registro.

Se ve qué datos llegaron sin exponer las claves:

```json
{ "pedidoId": "abc-123", "comercioId": null, "password": "[oculto]" }
```

Ahí se lee la causa: `comercioId` llegó `null`.

## Cuánto ocupa

Noventa días, con un tope de 50.000 líneas que manda por encima de los días.

El tope no es un lujo: si algo falla en bucle puede escribir miles de líneas
en una tarde, y esperar noventa días para recuperar el espacio sería tarde.
Se borran las más viejas primero, que son las que ya no se van a mirar.

La limpieza corre sola, en segundo plano, una de cada doscientas peticiones.
No le agrega tiempo a ninguna respuesta.

## Buscar

- **Por nivel**: errores, avisos, todo.
- **Por área**: `gestion`, `pagos`, `sesion`, `reparto`… se arman solas con
  lo que hay registrado.
- **Por texto**: busca en el mensaje, el detalle y la ruta. Sirve para
  encontrar por id de pedido o por nombre de comercio.

## Anotar algo a mano

La captura automática cubre las excepciones. Para dejar constancia de algo
que no rompe pero conviene saber:

```ts
import { anotar, anotarFallo } from './registro';

await anotar(env, 'aviso', 'El pago volvió sin comercio asociado', {
  area: 'pagos',
  detalle: { pagoId, comercioId },
});

/* O una excepción que se atrapó y se resolvió de otra forma. */
try {
  await algo();
} catch (fallo) {
  await anotarFallo(env, fallo, { area: 'caja', detalle: { cajaId } });
}
```

`anotar` nunca lanza. Si el registro fallara y eso rompiera la petición, se
convertiría en la causa de los problemas que vino a diagnosticar.
