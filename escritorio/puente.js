/**
 * El puente entre la aplicación y la máquina.
 *
 * Expone sólo estas funciones. La página no puede leer el disco ni abrir
 * conexiones por su cuenta: si mañana alguien inyecta un script en la
 * aplicación, lo más que puede hacer es imprimir un ticket.
 *
 * La marca `lafranciagoEscritorio` es lo que mira el sistema de gestión para
 * saber que está en el mostrador y habilitar la caja rápida.
 */
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('lafranciagoEscritorio', {
  version: process.env.npm_package_version ?? '1.0.0',

  /** Qué aparatos hay conectados. */
  hardware: ['lectora', 'impresora'],

  /** Datos de la instalación, para mostrarlos en pantalla. */
  info: () => ipcRenderer.invoke('lafranciago:version'),

  /** Imprime el ticket de una venta y abre el cajón. */
  imprimir: (datos) => ipcRenderer.invoke('lafranciago:imprimir', datos),

  /** Las impresoras que ve Windows, para elegir una. */
  impresoras: () => ipcRenderer.invoke('lafranciago:impresoras'),

  /* ── Ventas sin internet ── */

  /** Guarda la venta en disco y la sube cuando se pueda. */
  encolar: (venta) => ipcRenderer.invoke('lafranciago:encolar', venta),

  /** Cuántas ventas están esperando subir. */
  pendientes: () => ipcRenderer.invoke('lafranciago:pendientes'),

  /** Fuerza un intento de subida. */
  sincronizar: () => ipcRenderer.invoke('lafranciago:sincronizar'),
});
