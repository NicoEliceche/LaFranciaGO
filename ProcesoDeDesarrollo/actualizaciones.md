# Cómo se actualizan las aplicaciones

El problema: una aplicación instalada no se entera sola de que salió algo
nuevo. Sin un mecanismo, la única forma de que Diego actualice es que alguien
vaya al negocio, y la única forma de forzar un cambio imprescindible sería
llamarlo por teléfono.

Y hay un caso peor, que es el que hay que evitar: una versión vieja que sigue
abriendo pero falla de maneras raras, y la persona cree que el sistema anda
mal cuando en realidad quedó atrás.

---

## Tres cosas que se actualizan por caminos distintos

| Qué | Cómo llega | Hace falta reinstalar |
|---|---|---|
| Las pantallas de la web | Sola, al recargar | No |
| Los archivos de Electron | Instalador | Sí |
| Las apps de Android e iOS | Tienda | Sí |

**Las pantallas viajan solas.** Con internet, la ventana de escritorio carga
la aplicación publicada —la misma que abre cualquiera en el navegador— así
que un cambio en la web llega sin hacer nada.

**Los archivos de Electron** son la impresora, la cola de ventas y la
ventana. Cambian mucho menos seguido, pero cuando cambian hay que instalar de
nuevo.

## Avisar y obligar son dos cosas distintas

El servidor publica dos números por plataforma:

- **`ultima`** — lo que hay. Se avisa, y el comercio actualiza cuando quiere.
- **`minima`** — lo que hace falta. Por debajo de eso la aplicación no puede
  seguir, porque hablaría con un servidor que ya no la entiende.

La segunda es la que evita el caso del que hablamos. Se usa poco —sólo cuando
un cambio rompe la compatibilidad— pero sin ella no hay forma de forzar nada.

Se consulta así:

```
GET /versiones?plataforma=escritorio&version=1.0.0
```

Y contesta uno de tres estados:

```json
{ "estado": "al-dia" }
{ "estado": "hay-nueva", "ultima": "1.1.0", "novedades": "..." }
{ "estado": "obligatoria", "motivoObligatorio": "..." }
```

Es pública a propósito: una aplicación que quedó vieja tiene que poder
enterarse **aunque no pueda iniciar sesión**.

## Qué ve el comercio

**Cuando hay algo nuevo:** una barra arriba, que se puede cerrar y no vuelve
a molestar ese día. Con botones para elegir cuándo instalar: *esta noche a
las 22* o *mañana antes de abrir*. El instalador se baja en silencio apenas
se sabe que existe, así cuando llega el horario no hay que esperar la
descarga.

**Cuando la versión ya no sirve:** una pantalla que no se puede cerrar,
explicando qué pasó. Y aclarando que **las ventas guardadas sin subir no se
pierden**, que es la preocupación real de alguien a quien le bloquean el
sistema.

Lo que nunca pasa: instalar sola en horario de trabajo. Reiniciar la caja un
sábado a la mañana deja el mostrador parado con gente esperando.

## Publicar una versión

1. Subir el número en `escritorio/package.json`.
2. Armar el instalador:

```bash
npm run build
cd escritorio && npm run empaquetar
```

3. Subir el `.exe` a donde apunte `descarga`.
4. Editar `backend/src/versiones.ts`:

```ts
escritorio: {
  ultima: '1.1.0',
  minima: '1.0.0',        // sólo se sube si el cambio rompe compatibilidad
  novedades: 'Qué cambió, en palabras del comercio.',
  descarga: '...',
},
```

5. `npx wrangler deploy`

El aviso aparece en los negocios dentro de la hora siguiente.

## Para Android e iOS

El mismo mecanismo, con dos diferencias.

**La actualización la hace la tienda**, no nosotros. El botón lleva a Google
Play o a la App Store en vez de abrir un instalador.

**No se puede programar un horario.** El teléfono decide cuándo baja las
cosas. Lo que sí se puede es lo importante: avisar sin molestar, y bloquear
cuando la versión ya no sirve.

La lógica de decidir es la misma —`ultima` y `minima`, el mismo endpoint— así
que al llegar a React Native se reusa el servidor y sólo se escribe la
pantalla.

Dos cuidados propios de las tiendas:

**Apple revisa lo que se bloquea.** Una pantalla que impide usar la
aplicación tiene que explicar por qué y ofrecer el camino a la tienda; si
sólo dice "actualizá" sin más, la rechazan.

**La versión mínima se sube después de que la nueva esté aprobada**, no
antes. Si se sube primero, la gente queda bloqueada sin tener a dónde ir:
Apple puede demorar días en aprobar.
