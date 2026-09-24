/**
 * LaFranciaGO en la computadora del negocio.
 *
 * Esto no vuelve a dibujar el sistema de gestión: carga el mismo que anda en
 * el navegador. Lo único que agrega es lo que un navegador no puede hacer —
 * hablar con la lectora, con la impresora y con el cajón— y seguir vendiendo
 * cuando se corta internet.
 *
 * Por eso este archivo no sabe qué pantallas tiene la aplicación adentro: si
 * mañana se rediseña la caja rápida entera, acá no cambia nada.
 */
const { app, BrowserWindow, Menu, ipcMain, screen, shell } = require('electron');
const { existsSync } = require('node:fs');
const path = require('node:path');

const { abrirBaseLocal, encolarVenta, pendientes, sincronizar } = require('./cola');
const { instalarMenu } = require('./menu');
const { servirCompilada } = require('./servir');
const { imprimirTicket, listarImpresoras } = require('./impresora');
const { cargarAjustes, guardarAjustes, leerAjustes } = require('./ajustes');
const {
  cancelarProgramada,
  consultarVersion,
  estadoActualizacion,
  instalarAhora,
  origenDeLaApp,
  programar,
} = require('./actualizacion');

/* En desarrollo se carga del servidor de Vite, para ver los cambios al
   instante; instalado, de los archivos que quedaron en el paquete. */
const EN_DESARROLLO = !app.isPackaged;

/* Los puertos donde suele estar el servidor de desarrollo. Se prueban en
   orden porque el 8081 a veces lo ocupa otro proyecto, y entonces Vite
   arranca en otro lado: sin esto, la ventana queda en blanco sin decir por
   qué. */
const PUERTOS = [8081, 8087, 8086, 8085, 5173, 3000];

/** Busca en qué puerto está andando el servidor de desarrollo. */
async function buscarServidorLocal() {
  /* Si lo dijeron por variable de entorno, se respeta sin buscar. */
  if (process.env.LAFRANCIAGO_DEV_URL) return process.env.LAFRANCIAGO_DEV_URL;

  for (const puerto of PUERTOS) {
    const url = `http://localhost:${puerto}/`;

    try {
      const control = new AbortController();
      const reloj = setTimeout(() => control.abort(), 700);
      const respuesta = await fetch(url, { signal: control.signal });

      clearTimeout(reloj);

      if (respuesta.ok) return url;
    } catch {
      /* Ese puerto no contesta: se sigue con el próximo. */
    }
  }

  return null;
}

let ventana = null;

async function crearVentana() {
  /* El área de trabajo es la pantalla menos la barra de tareas. Se usa esa y
     no el tamaño total a propósito: el negocio necesita llegar al reloj, al
     volumen y a sus otros programas mientras atiende, y una ventana que tapa
     la barra lo obliga a salir de la aplicación para cualquier cosa.

     Por eso tampoco se usa `fullscreen: true`, que es lo que parecería
     corresponder: esa opción toma la pantalla entera y esconde la barra. */
  const { workArea } = screen.getPrimaryDisplay();

  ventana = new BrowserWindow({
    x: workArea.x,
    y: workArea.y,
    width: workArea.width,
    height: workArea.height,
    minWidth: 1024,
    minHeight: 640,
    /* Sin el marco de Windows: el negocio abre esto y ve la aplicación, no
       una ventana con una aplicación adentro. La barra de menú propia queda
       arriba y hace las veces de barra de título. */
    frame: false,
    show: false,
    backgroundColor: '#050816',
    title: 'LaFranciaGO',
    webPreferences: {
      /* El puente expone sólo las funciones de abajo. Sin esto, cualquier
         script de la página tendría acceso al disco y a la red de la
         máquina. */
      preload: path.join(__dirname, 'puente.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  /* Sin marco de ventana, esta barra es lo único que queda arriba: es la que
     permite resolver por teléfono sin ir hasta el local. */
  instalarMenu(ventana);

  /* Se muestra cuando terminó de dibujar: si no, se ve un rectángulo blanco
     los primeros segundos, que en una máquina lenta son varios. */
  ventana.once('ready-to-show', () => ventana.show());

  /* Al arrancar con LAFRANCIAGO_VERIFICAR se deja escrito qué cargó y para
     qué. Sirve para comprobar desde una terminal que la ventana encontró la
     aplicación, sin tener que mirarla.

     Va antes de cargar porque el evento se dispara una sola vez: registrarlo
     después de loadURL sería llegar tarde. */
  if (process.env.LAFRANCIAGO_VERIFICAR) {
    ventana.webContents.once('did-finish-load', async () => {
      const titulo = ventana.webContents.getTitle();
      const url = ventana.webContents.getURL();

      /* Se mira la dirección y no el título: la pantalla de error también se
         llama LaFranciaGO, así que por el título las dos parecen iguales. */
      const sirvio = !url.startsWith('data:');

      /* La geometría también se deja anotada: que la ventana quede encima de
         la barra de tareas y sin marco es algo que se rompería en silencio, y
         mirarlo a ojo cada vez no escala. */
      const caja = ventana.getBounds();
      const { workArea } = screen.getPrimaryDisplay();
      const tapaLaBarra =
        caja.y + caja.height > workArea.y + workArea.height || caja.x < workArea.x;

      await require('node:fs/promises').writeFile(
        path.join(__dirname, 'verificacion.txt'),
        [
          `${sirvio ? 'ok' : 'FALLO'} · titulo="${titulo}" · ${url.slice(0, 70)}`,
          `modo=${ventana.isFullScreen() ? 'pantalla-completa' : 'ventana'}`,
          `caja=${caja.width}x${caja.height}+${caja.x}+${caja.y}`,
          `areaUtil=${workArea.width}x${workArea.height}+${workArea.x}+${workArea.y}`,
          `tapaLaBarraDeTareas=${tapaLaBarra ? 'SI' : 'no'}`,
          `menu=${require('electron').Menu.getApplicationMenu() ? 'propio' : 'FALTA'}`,
        ].join('\n'),
        'utf8',
      );
    });
  }

  if (EN_DESARROLLO) {
    const local = await buscarServidorLocal();
    const compilada = path.join(__dirname, '..', 'dist', 'index.html');

    if (local) {
      await ventana.loadURL(local);
    } else if (existsSync(compilada)) {
      /* Sin servidor, pero hay una compilación: se sirve esa. Así la ventana
         se puede mirar sin tener que levantar Vite, que es como anda en el
         negocio.

         Lo que se ve es de cuando se corrió `npm run build`, no lo que se
         está editando ahora. Por eso se avisa arriba: si no, uno cambia un
         archivo, no ve el cambio, y busca el error donde no está. */
      const { url } = await servirCompilada(path.dirname(compilada));

      await ventana.loadURL(url);

      /* Se avisa en el título y no encima de la página: un cartel flotante
         tapa parte de la aplicación justo cuando se la quiere mirar, y hay
         que acordarse de sacarlo antes de una captura. */
      ventana.setTitle('LaFranciaGO — compilación del disco (npm run dev para ver cambios)');
      ventana.webContents.on('page-title-updated', (evento) => evento.preventDefault());
    } else {
      /* Sin servidor y sin compilación no hay nada que mostrar, y una
         ventana en blanco no explica nada. Se dice qué falta y cómo
         arreglarlo. */
      await ventana.loadURL(
        'data:text/html;charset=utf-8,' +
          encodeURIComponent(`<!doctype html>
<meta charset="utf-8">
<title>LaFranciaGO</title>
<style>
  body { margin:0; display:grid; place-items:center; min-height:100vh;
         background:#050816; color:#F3F6FC;
         font:16px/1.6 system-ui, -apple-system, sans-serif; }
  div { max-width:34rem; padding:2rem; text-align:center; }
  h1 { font-size:1.3rem; margin:0 0 .75rem; }
  p { color:#A8B4CC; margin:0 0 1rem; }
  code { display:block; padding:.75rem 1rem; border-radius:.5rem;
         background:#0F1730; color:#5B8CFF; font-size:.9rem; }
</style>
<div>
  <h1>No hay nada para mostrar todavía</h1>
  <p>Esta ventana no tiene pantallas propias: carga la misma aplicación que
     anda en el navegador. Hay dos formas de dársela.</p>
  <p><b>Para trabajar</b>, con los cambios en vivo:</p>
  <code>npm run dev</code>
  <p><b>O una copia compilada</b>, que abre sin servidor, como en el negocio:</p>
  <code>npm run build</code>
  <p>Cualquiera de las dos, y volvés a abrir esta ventana. El servidor se
     busca solo en los puertos ${PUERTOS.join(', ')}.</p>
</div>`),
      );
    }
  } else {
    /* Con internet se carga la aplicacion publicada: asi un cambio en la web
       llega al negocio con solo recargar, sin ir con un pendrive. Sin
       internet se usa la copia del instalador, que alcanza para seguir
       cobrando. */
    const publicada = await origenDeLaApp();

    if (publicada) {
      await ventana.loadURL(publicada);
    } else {
      /* Se sirve por HTTP y no se abre como archivo: Vite compila con rutas
         absolutas para GitHub Pages, y con `file://` la raíz es la del disco,
         así que no encontraría ni el JS ni el CSS. */
      const { url } = await servirCompilada(path.join(__dirname, '..', 'dist'));

      await ventana.loadURL(url);
    }
  }

  /* Los enlaces externos abren en el navegador y no adentro de la
     aplicación: nadie quiere quedar atrapado en una página de ayuda sin
     barra de direcciones. */
  ventana.webContents.setWindowOpenHandler(({ url }) => {
    void shell.openExternal(url);
    return { action: 'deny' };
  });
}

/* Una sola ventana por maquina. Dos abiertas contra la misma caja son dos
   personas cobrando sin verse, y al cerrar el turno la plata no da.

   Pasa sin querer: el icono se toca dos veces porque la primera no parecio
   hacer nada. Windows no lo impide solo, hay que pedir el candado.

   Si no se consigue, es que ya hay otra corriendo: esta se va sin abrir
   nada, y la que estaba se trae al frente. */
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!ventana) return;

    if (ventana.isMinimized()) ventana.restore();
    ventana.focus();
  });

  app.whenReady().then(async () => {
    await cargarAjustes();
    await abrirBaseLocal();
    await crearVentana();

    /* Se consulta despues de abrir: enterarse de que hay una version nueva no
       puede demorar el arranque del mostrador. */
    void consultarVersion();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) void crearVentana();
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/* ── Lo que la aplicación puede pedirle a la máquina ── */

ipcMain.handle('lafranciago:version', () => ({
  version: app.getVersion(),
  plataforma: process.platform,
  ...leerAjustes(),
}));

ipcMain.handle('lafranciago:ajustes', () => leerAjustes());

ipcMain.handle('lafranciago:guardarAjustes', async (_evento, cambios) =>
  guardarAjustes(cambios ?? {}),
);

ipcMain.handle('lafranciago:imprimir', async (_evento, datos) => {
  const config = leerAjustes();

  /* La pantalla no tiene que saber que impresora se eligio: eso lo decide la
     instalacion, y asi el mismo codigo anda en cualquier negocio. */
  return imprimirTicket({
    ...datos,
    impresora: datos.impresora || config.impresora || undefined,
    cajon: datos.cajon ?? config.abrirCajon,
  });
});

/** Imprime una hoja de prueba, para ver si la impresora quedo bien elegida. */
ipcMain.handle('lafranciago:probarImpresora', async (_evento, impresora) =>
  imprimirTicket({
    numero: 0,
    comercio: { nombre: 'Prueba de impresion' },
    items: [
      {
        nombre: 'Si lees esto, la impresora anda',
        cantidadMilesimos: 1000,
        precioCentavos: 100,
        subtotalCentavos: 100,
      },
    ],
    total: 100,
    pagos: [],
    impresora: impresora || leerAjustes().impresora || undefined,
    cajon: false,
  }),
);

ipcMain.handle('lafranciago:impresoras', async () => listarImpresoras());

/* ── Actualizaciones ── */

ipcMain.handle('lafranciago:actualizacion', async () => estadoActualizacion());

ipcMain.handle('lafranciago:buscarActualizacion', async () => consultarVersion());

ipcMain.handle('lafranciago:instalarAhora', async () => instalarAhora());

ipcMain.handle('lafranciago:programarActualizacion', async (_evento, cuando) =>
  cuando ? programar(cuando) : cancelarProgramada(),
);

/* ── La cola de ventas ── */

ipcMain.handle('lafranciago:encolar', async (_evento, venta) => encolarVenta(venta));

ipcMain.handle('lafranciago:pendientes', async () => pendientes());

ipcMain.handle('lafranciago:sincronizar', async () => sincronizar());
