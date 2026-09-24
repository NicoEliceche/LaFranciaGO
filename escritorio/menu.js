/**
 * La barra de arriba, pensada para resolver por teléfono.
 *
 * El menú que trae Electron de fábrica está en inglés y lleno de cosas que a
 * un comercio no le sirven —"Toggle Developer Tools", "Force Reload"— y le
 * faltan justo las que sí: vaciar la caché, ver qué versión tiene, saber si
 * hay internet.
 *
 * El criterio de qué va acá es uno solo: que yo pueda decirle al negocio por
 * teléfono "abrí tal menú y tocá tal cosa" y que eso resuelva el problema sin
 * que nadie vaya hasta el local. Por eso los nombres son los de la persona
 * que atiende ("Vaciar caché", "Reiniciar la aplicación") y no los del
 * programa, y por eso cada opción que rompe algo pregunta antes.
 *
 * Los atajos de teclado siguen estando aunque no se vean: sin marco de
 * ventana, F11 y Ctrl+R son la salida cuando alguien se queda sin barra.
 */
const { Menu, app, clipboard, dialog, shell } = require('electron');
const path = require('node:path');

/** Dónde queda lo que la instalación guarda en disco. */
const carpetaDatos = () => app.getPath('userData');

/**
 * Vacía todo lo que el navegador de adentro tiene guardado.
 *
 * Es la respuesta a la mitad de los problemas que se reportan por teléfono:
 * la aplicación quedó con una versión vieja de las pantallas y muestra algo
 * que ya no existe. No toca la sesión ni las ventas pendientes, que viven en
 * la base local: sólo los archivos que se pueden volver a bajar.
 */
async function vaciarCache(ventana) {
  const { response } = await dialog.showMessageBox(ventana, {
    type: 'question',
    buttons: ['Vaciar caché', 'Cancelar'],
    defaultId: 0,
    cancelId: 1,
    title: 'Vaciar caché',
    message: '¿Vaciar la caché de la aplicación?',
    detail:
      'Se borran los archivos guardados para que la aplicación cargue todo de nuevo. ' +
      'No se pierde la sesión ni las ventas que están esperando subir.',
  });

  if (response !== 0) return;

  const sesion = ventana.webContents.session;

  /* La caché de archivos y la de código compilado van por separado: con
     vaciar sólo la primera, el código viejo puede seguir corriendo. */
  await sesion.clearCache();
  await sesion.clearCodeCaches({});

  ventana.webContents.reloadIgnoringCache();
}

/**
 * Borra todo y deja la aplicación como recién instalada.
 *
 * Esto sí cierra la sesión. Va con una advertencia clara porque es el último
 * recurso: si hay ventas sin subir, se pierden.
 */
async function borrarTodo(ventana) {
  const { response } = await dialog.showMessageBox(ventana, {
    type: 'warning',
    buttons: ['Borrar y salir', 'Cancelar'],
    defaultId: 1,
    cancelId: 1,
    title: 'Borrar datos de la aplicación',
    message: '¿Borrar todos los datos guardados?',
    detail:
      'Se cierra la sesión y se borra todo lo que la aplicación guardó en esta ' +
      'computadora. Si hay ventas esperando subir, se pierden. Hacelo sólo si te ' +
      'lo pedimos desde soporte.',
  });

  if (response !== 0) return;

  const sesion = ventana.webContents.session;

  await sesion.clearStorageData();
  await sesion.clearCache();

  app.relaunch();
  app.quit();
}

/** Copia al portapapeles lo que hace falta para entender un problema. */
async function copiarDiagnostico(ventana, extra = {}) {
  const lineas = [
    `LaFranciaGO ${app.getVersion()}`,
    `Electron ${process.versions.electron} · Chrome ${process.versions.chrome}`,
    `Sistema: ${process.platform} ${process.arch}`,
    `Dirección: ${ventana.webContents.getURL()}`,
    `Internet: ${extra.enLinea === false ? 'sin conexión' : 'con conexión'}`,
    `Carpeta: ${carpetaDatos()}`,
    `Cuándo: ${new Date().toISOString()}`,
  ];

  clipboard.writeText(lineas.join('\n'));

  await dialog.showMessageBox(ventana, {
    type: 'info',
    buttons: ['Listo'],
    title: 'Datos copiados',
    message: 'Ya está copiado.',
    detail: 'Pegalo en el mensaje a soporte con Ctrl+V.',
  });
}

/**
 * Arma la barra y la instala.
 *
 * Recibe la ventana en vez de buscarla, para que sea evidente sobre cuál
 * actúa cada opción cuando mañana haya más de una.
 */
function instalarMenu(ventana) {
  const plantilla = [
    {
      label: 'Aplicación',
      submenu: [
        {
          label: 'Recargar la pantalla',
          accelerator: 'CmdOrCtrl+R',
          click: () => ventana.webContents.reload(),
        },
        {
          label: 'Reiniciar la aplicación',
          click: () => {
            app.relaunch();
            app.quit();
          },
        },
        { type: 'separator' },
        {
          label: 'Pantalla completa',
          accelerator: 'F11',
          click: () => ventana.setFullScreen(!ventana.isFullScreen()),
        },
        {
          label: 'Minimizar',
          accelerator: 'CmdOrCtrl+M',
          click: () => ventana.minimize(),
        },
        { type: 'separator' },
        { label: 'Salir', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() },
      ],
    },
    {
      label: 'Edición',
      submenu: [
        { label: 'Deshacer', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
        { label: 'Rehacer', accelerator: 'CmdOrCtrl+Y', role: 'redo' },
        { type: 'separator' },
        { label: 'Cortar', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Copiar', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Pegar', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { label: 'Seleccionar todo', accelerator: 'CmdOrCtrl+A', role: 'selectAll' },
      ],
    },
    {
      label: 'Ver',
      submenu: [
        /* El zoom es lo primero que pide quien atiende y no ve bien la
           pantalla. Está acá y no escondido en una configuración. */
        { label: 'Agrandar', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
        { label: 'Achicar', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { label: 'Tamaño normal', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
      ],
    },
    {
      label: 'Herramientas',
      submenu: [
        {
          label: 'Vaciar caché',
          click: () => vaciarCache(ventana),
        },
        {
          label: 'Recargar sin caché',
          accelerator: 'CmdOrCtrl+Shift+R',
          click: () => ventana.webContents.reloadIgnoringCache(),
        },
        { type: 'separator' },
        {
          label: 'Abrir la carpeta de datos',
          click: () => shell.openPath(carpetaDatos()),
        },
        {
          label: 'Ver el registro de esta computadora',
          click: () => shell.openPath(path.join(carpetaDatos(), 'logs')),
        },
        { type: 'separator' },
        {
          label: 'Copiar datos para soporte',
          click: () => copiarDiagnostico(ventana),
        },
        {
          label: 'Consola de desarrollo',
          accelerator: 'CmdOrCtrl+Shift+I',
          click: () => ventana.webContents.toggleDevTools(),
        },
        { type: 'separator' },
        {
          label: 'Borrar datos de la aplicación…',
          click: () => borrarTodo(ventana),
        },
      ],
    },
    {
      label: 'Ayuda',
      submenu: [
        {
          label: 'Buscar actualizaciones',
          click: () => ventana.webContents.send('lafranciago:buscarActualizacion'),
        },
        { type: 'separator' },
        {
          label: 'Acerca de LaFranciaGO',
          click: () =>
            dialog.showMessageBox(ventana, {
              type: 'info',
              buttons: ['Cerrar'],
              title: 'Acerca de LaFranciaGO',
              message: `LaFranciaGO ${app.getVersion()}`,
              detail: 'Sistema de gestión y marketplace de La Francia, Córdoba.',
            }),
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(plantilla));
}

module.exports = { instalarMenu };
