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

/* En desarrollo se carga del servidor de Vite, para ver los cambios al
   instante; instalado, de los archivos que quedaron en el paquete. */
const EN_DESARROLLO = !app.isPackaged;
const URL_DESARROLLO = process.env.LAFRANCIAGO_DEV_URL ?? 'http://localhost:8081';

let ventana = null;

function crearVentana() {
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
    void ventana.loadURL(URL_DESARROLLO);
  } else {
    void ventana.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
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
  await abrirBaseLocal();
  crearVentana();

  /* Una sola instancia: dos ventanas abiertas contra la misma caja llevan a
     dos personas cobrando sin verse. */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) crearVentana();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/* ── Lo que la aplicación puede pedirle a la máquina ── */

ipcMain.handle('lafranciago:version', () => ({
  version: app.getVersion(),
  plataforma: process.platform,
}));

ipcMain.handle('lafranciago:imprimir', async (_evento, datos) => imprimirTicket(datos));

ipcMain.handle('lafranciago:impresoras', async () => listarImpresoras());

/* ── La cola de ventas ── */

ipcMain.handle('lafranciago:encolar', async (_evento, venta) => encolarVenta(venta));

ipcMain.handle('lafranciago:pendientes', async () => pendientes());

ipcMain.handle('lafranciago:sincronizar', async () => sincronizar());
