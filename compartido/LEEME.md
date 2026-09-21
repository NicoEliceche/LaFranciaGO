# Lo que comparten la web y el teléfono

Acá vive todo lo que no dibuja nada: hablar con el servidor, las cuentas de
plata, las fechas.

Las tres cosas tienen algo en común: **si dan distinto en un lado que en el
otro, es un error difícil de encontrar**. Una venta de $6.749,50 que en el
teléfono se ve como $6.750, o una venta de las once de la noche que aparece
al día siguiente. La única forma segura de que no pase es que sea el mismo
código.

## Qué hay

| Archivo | Qué resuelve |
|---|---|
| `api.ts` | El cliente HTTP y los errores |
| `rutas.ts` | Los 42 tipos y los 25 grupos de llamadas |
| `dinero.ts` | Centavos, milésimos, cómo se escriben |
| `fechas.ts` | Hora de Argentina, "hace un rato" |
| `configuracion.ts` | Lo único que cambia entre plataformas |

## Lo que NO va acá

**Nada que dibuje.** Las pantallas se escriben una vez con HTML y otra con
componentes nativos, y no hay forma de compartirlas sin empeorar las dos.

**Nada del navegador.** `document`, `window`, `localStorage` no existen en el
teléfono. Hay una revisión que lo verifica:

```bash
cd compartido && npm run typecheck
```

Los tipos solos no alcanzan: `fetch` y `FormData` viven en la librería del
DOM pero funcionan igual en React Native, así que hay que incluirla. El costo
es que `document` queda disponible, y usarlo rompería el teléfono recién al
ejecutarlo. Por eso además corre `revisar.mjs`, que lo encuentra antes.

## Las dos cosas que sí cambian

**De dónde sale la dirección del servidor.** La web la lee de Vite; el
teléfono, de su propia configuración.

**Cómo viaja la sesión.** En el navegador es una cookie que se manda sola. En
el teléfono no hay cookies que sobrevivan a cerrar la aplicación, así que va
como cabecera y hay que guardarla.

Cada aplicación lo resuelve al arrancar:

```ts
// Web
configurar({ apiUrl: import.meta.env.VITE_API_URL, sesion: 'cookie' });

// Teléfono
configurar({
  apiUrl: 'https://...',
  sesion: 'cabecera',
  leerToken: () => AsyncStorage.getItem('sesion'),
  guardarToken: (t) => AsyncStorage.setItem('sesion', t ?? ''),
});
```

## Por qué existe antes que la aplicación del teléfono

Porque **no se tira si cambia el diseño**. Las pantallas de React Native hay
que escribirlas de cero y rehacerlas si la web se rediseña; esto no. Son
unas 1.300 líneas que ya están hechas y probadas contra el backend real.

Cuando llegue el momento de la aplicación, el trabajo es sólo dibujar.

## El backend ya sirve a los dos

El login devuelve el token en el cuerpo además de la cookie, y `usuarioActual`
acepta las dos formas. El navegador usa la cookie e ignora el token; el
teléfono hace al revés.

Probado sin cookies, como lo haría la aplicación:

```
POST /auth/login          → { nombre, token, expira, ... }
GET  /auth/yo             → 401 sin nada
GET  /auth/yo  + Bearer   → entra
GET  /gestion/caja + Bearer → entra
```

## Lo que falta para el teléfono

Escribir las pantallas. Eso es lo que conviene esperar hasta que la web
mobile esté definitiva, porque es lo único que hay que rehacer si el diseño
cambia.
