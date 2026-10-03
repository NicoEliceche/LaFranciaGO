import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

/**
 * Los tests de la aplicación.
 *
 * Cubren dos cosas, que son las que nos rompieron de verdad:
 *
 *   La lógica pura —precios, escalones, distancias, rutas del protocolo—,
 *   que no necesita navegador ni base y se prueba en milisegundos.
 *
 *   Las migraciones, que se ensayan contra una copia del esquema real antes
 *   de tocar la base de Diego. Esa clase de ensayo ya encontró dos errores
 *   que habrían roto producción con los datos adentro.
 *
 * No hay tests de componentes a propósito. Son caros de escribir, se rompen
 * cada vez que se mueve un botón, y ninguno de los bugs que tuvimos era de
 * render: eran de datos y de rutas.
 */
const desde = (ruta: string) => fileURLToPath(new URL(ruta, import.meta.url));

export default defineConfig({
  /* Los mismos atajos que usa la aplicación. Se escriben acá y no se leen
     del tsconfig porque su `include` no abarca esta carpeta: el plugin que
     los lee no los aplicaría a los tests. */
  resolve: {
    alias: {
      '@core': desde('./src/core'),
      '@features': desde('./src/features'),
      '@shared': desde('./src/shared'),
      '@compartido': desde('./compartido/src/index.ts'),
    },
  },
  test: {
    /* Node y no jsdom: nada de lo que se prueba acá toca el DOM, y levantar
       un navegador falso por cada archivo cuesta segundos que se pagan en
       cada corrida. */
    environment: 'node',
    include: ['pruebas/**/*.test.ts'],
    server: {
      deps: {
        /* `node:sqlite` lo trae Node, no node_modules: sin esto Vite lo
           busca como si fuera un paquete y no lo encuentra. Es lo que
           permite ensayar las migraciones sin Cloudflare ni internet. */
        external: [/^node:/],
      },
    },
    /* En pantalla para quien lo corre. El XML tipo JUnit —el que leen los
       servidores de integración— lo pide `npm run test:reporte`, que agrega
       el reporter por bandera: así no hace falta una variable de entorno,
       que es lo que se escribe distinto en Windows y en Linux. */
    reporters: ['default'],
  },
});
