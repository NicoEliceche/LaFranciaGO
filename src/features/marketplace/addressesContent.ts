import type { AddressBookEntry } from './marketplace.types';

/** Direcciones guardadas del cliente. Vive aparte del catálogo para que el
 *  shell no arrastre todo el contenido del marketplace al arranque. */
export const addresses: AddressBookEntry[] = [
  { id: 'home', label: 'Casa', address: 'Av. San Martín 123', primary: true },
  { id: 'work', label: 'Trabajo', address: 'Ruta 19 km 115', primary: false },
];
