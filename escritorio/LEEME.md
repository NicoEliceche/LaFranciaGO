# LaFranciaGO en la computadora del negocio

Esto no vuelve a dibujar el sistema de gestión: carga el mismo que anda en el
navegador. Lo único que agrega es lo que un navegador no puede hacer —hablar
con la lectora, con la impresora y con el cajón— y seguir vendiendo cuando se
corta internet.

Por eso el código de acá no sabe qué pantallas tiene la aplicación adentro.
Si mañana se rediseña la caja rápida entera, estos archivos no cambian.

## Probarlo

Hacen falta dos terminales.

En la primera, la aplicación web como siempre:

```bash
npm run dev
```

En la segunda, la ventana de escritorio:

```bash
cd escritorio
npm install
npm run dev
```

La ventana carga `http://localhost:8081`. Si tu servidor está en otro puerto:

```bash
set LAFRANCIAGO_DEV_URL=http://localhost:8090 && npm run dev
```

## Ver cómo sale un ticket, sin impresora

```bash
cd escritorio
node probar-ticket.js
```

Muestra el ticket con los comandos de la impresora escritos entre corchetes,
para revisar a ojo que el corte y la apertura del cajón estén donde
corresponde antes de gastar papel.

## La lectora

No hace falta programarla. Las lectoras USB se comportan como un teclado:
escanean, "escriben" el número y mandan Enter. La caja rápida ya deja el
foco en el buscador, así que funciona sola.

Al comprarla, revisar que esté en **modo teclado** (a veces vienen en modo
serie). El manual trae códigos de barras para cambiarlo: se escanea el que
dice "USB HID" o "Keyboard".

Para probar alcanza con cualquier producto que haya en casa: todos traen
EAN-13, que es el mismo estándar que usan los del negocio.

## Vender sin internet

Cuando la venta no puede subir, se guarda en disco y sube sola cuando vuelve
la conexión. El archivo vive en la carpeta de datos de la aplicación
(`%APPDATA%/lafranciago-escritorio`).

Tres decisiones que vale la pena conocer:

**Las ventas suben de a una y en orden.** Mandarlas todas juntas haría que el
stock se descuente en cualquier orden, y con dos cajas vendiendo lo mismo el
resultado dependería de quién llegó primero a la red en vez de quién vendió
primero.

**Cada puesto numera sus ventas.** Sin internet el servidor no está para
repartir números, así que el puesto pone el suyo con su nombre adelante:
`CAJA1-...` y `CAJA2-...` nunca chocan. Se configura con:

```bash
set LAFRANCIAGO_PUESTO=CAJA2
```

**Dos cajas desconectadas pueden vender la misma última unidad.** Eso no lo
arregla ninguna cola: las dos ventas ya ocurrieron, la mercadería salió. El
stock queda en negativo, que es la verdad —salieron más de las que había— y
el sistema lo muestra en vez de esconderlo.

## Armar el instalador

```bash
npm run build          # en la raíz: genera dist/
cd escritorio
npm run empaquetar
```

Deja un instalador en `escritorio/salida/`.

## Cómo llegan las versiones nuevas

En desarrollo la ventana carga el servidor de Vite, así que un cambio en la
web se ve al instante.

Instalado es distinto, y por eso hace lo siguiente: **si hay internet carga
la aplicación publicada**, la misma que abre cualquiera en el navegador.
Entonces un cambio en la web llega al negocio con sólo recargar, sin ir con
un pendrive.

Si no hay internet al arrancar —que en un negocio pasa— usa la copia que
venía en el instalador. El sistema abre igual, con la caja y las ventas
pendientes andando.

Lo que sí requiere reinstalar es un cambio en estos archivos: la impresora,
la cola, la ventana. Eso cambia mucho menos seguido que las pantallas.

## Configurar la instalación

Dentro del sistema, en **Esta computadora**:

- **Qué impresora** usar, con un botón para imprimir una hoja de prueba.
- **Si imprime solo** al terminar la venta, y si abre el cajón.
- **Cómo se llama esta caja** (`CAJA1`, `CAJA2`). Va adelante del número de
  las ventas hechas sin internet, para que dos cajas no repitan número.
- **Qué ventas esperan subir**, con un botón para intentar ahora.

Todo eso queda guardado en `%APPDATA%/lafranciago-escritorio/ajustes.json`.

El aviso de ventas pendientes también aparece **arriba de la caja rápida**,
que es donde está la persona cuando se corta internet.

## Qué falta

- **Firmar el instalador**, para que Windows no muestre la advertencia de
  editor desconocido.
- **Probar con una lectora y una impresora de verdad.** Todo lo demás está
  verificado; el hardware no se puede simular.
