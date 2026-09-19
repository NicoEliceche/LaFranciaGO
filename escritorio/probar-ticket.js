/**
 * Muestra cómo sale un ticket, sin impresora.
 *
 * Los comandos ESC/POS se ven como texto entre corchetes para poder
 * revisarlos a ojo: así se comprueba que el corte y el cajón estén donde
 * corresponde antes de gastar papel.
 */
const { armarTicket } = require('./impresora');

const NOMBRES = {
  '1b40': '[iniciar]',
  '1d2111': '[grande]',
  '1d2100': '[normal]',
  '1b4501': '[negrita]',
  '1b4500': '[fin negrita]',
  '1b6101': '[centrado]',
  '1b6100': '[izquierda]',
  '1d564200': '[CORTAR PAPEL]',
  '1b700019fa': '[ABRIR CAJON]',
};

const ticket = armarTicket({
  comercio: { nombre: 'Almacen Don Jose', direccion: 'Centro, La Francia' },
  numero: 42,
  fecha: '2026-09-19T14:30:00',
  items: [
    { nombre: 'Coca Cola 2,25 L', cantidadMilesimos: 2000, precioCentavos: 350000, subtotalCentavos: 700000 },
    { nombre: 'Yerba Playadito 1kg', cantidadMilesimos: 1000, precioCentavos: 480000, subtotalCentavos: 480000 },
    { nombre: 'Queso cremoso', cantidadMilesimos: 250, precioCentavos: 1200000, subtotalCentavos: 300000 },
  ],
  total: 1480000,
  pagos: [
    { metodo: 'Efectivo', montoCentavos: 1000000 },
    { metodo: 'Transferencia', montoCentavos: 480000 },
  ],
});

/* Reemplaza cada comando por su nombre para poder leerlo. */
let salida = ticket.toString('latin1');

for (const [hexa, nombre] of Object.entries(NOMBRES)) {
  const crudo = Buffer.from(hexa, 'hex').toString('latin1');

  salida = salida.split(crudo).join(nombre);
}

console.log('─'.repeat(46));
console.log(salida);
console.log('─'.repeat(46));
console.log(`bytes: ${ticket.length}`);
