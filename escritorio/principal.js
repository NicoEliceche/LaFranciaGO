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
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('node:path');

const { abrirBaseLocal, encolarVenta, pendientes, sincronizar } = require('./cola');
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
const URL_DESARROLLO = process.env.LAFRANCIAGO_DEV_URL ?? 'http://localhost:8081';

let ventana = null;

async function crearVentana() {
  ventana = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 1024,
    minHeight: 640,
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

  /* Se muestra cuando terminó de dibujar: si no, se ve un rectángulo blanco
     los primeros segundos, que en una máquina lenta son varios. */
  ventana.once('ready-to-show', () => ventana.show());

  if (EN_DESARROLLO) {
    await ventana.loadURL(URL_DESARROLLO);
  } else {
    /* Con internet se carga la aplicacion publicada: asi un cambio en la web
       llega al negocio con solo recargar, sin ir con un pendrive. Sin
       internet se usa la copia del instalador, que alcanza para seguir
       cobrando. */
    const publicada = await origenDeLaApp();

    if (publicada) {
      await ventana.loadURL(publicada);
    } else {
      await ventana.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
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

app.whenReady().then(async () => {
  await cargarAjustes();
  await abrirBaseLocal();
  await crearVentana();

  /* Se consulta despues de abrir: enterarse de que hay una version nueva no
     puede demorar el arranque del mostrador. */
  void consultarVersion();

  /* Una sola instancia: dos ventanas abiertas contra la misma caja llevan a
     dos personas cobrando sin verse. */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) void crearVentana();
  });
});

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
