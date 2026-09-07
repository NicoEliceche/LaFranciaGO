import { useCallback, useEffect, useState } from 'react';

import { direccionesApi, hayBackend } from '@core/data/services/apiClient';

import type { AddressBookEntry } from './marketplace.types';

/**
 * Las direcciones guardadas del cliente.
 *
 * Salen de la base porque son suyas y tienen que seguirlo entre dispositivos:
 * una dirección cargada en el teléfono sirve de poco si al pedir desde la
 * computadora hay que escribirla de nuevo.
 *
 * Se comparten entre el carrito y la cuenta, que muestran la misma lista.
 */

const oyentes = new Set<() => void>();
let direcciones: AddressBookEntry[] = [];
let estado: 'inicial' | 'cargando' | 'listo' = 'inicial';

const avisar = () => oyentes.forEach((oyente) => oyente());

async function cargar() {
  if (estado !== 'inicial') {
    return;
  }

  estado = 'cargando';

  if (!hayBackend()) {
    estado = 'listo';
    avisar();

    return;
  }

  try {
    const { direcciones: filas } = await direccionesApi.listar();

    direcciones = filas.map((fila) => ({
      id: fila.id,
      label: fila.etiqueta,
      address: fila.direccion,
      primary: fila.es_principal === 1,
    }));
  } catch {
    /* Sin sesión o sin red se arranca vacío: el carrito ofrece cargar una. */
    direcciones = [];
  }

  estado = 'listo';
  avisar();
}

/** Vuelve a pedirlas: al iniciar sesión, o después de guardar una nueva. */
export function refrescarDirecciones() {
  estado = 'inicial';

  return cargar();
}

/** Guarda una dirección nueva y devuelve la lista actualizada. */
export async function guardarDireccion(datos: {
  etiqueta: string;
  direccion: string;
  lat?: number;
  lon?: number;
}) {
  if (!hayBackend()) {
    return null;
  }

  const { id } = await direccionesApi.crear(datos);

  await refrescarDirecciones();

  return id;
}

export function useDirecciones() {
  const [, forzar] = useState(0);

  useEffect(() => {
    const oyente = () => forzar((numero) => numero + 1);

    oyentes.add(oyente);
    void cargar();

    return () => {
      oyentes.delete(oyente);
    };
  }, []);

  const recargar = useCallback(() => refrescarDirecciones(), []);

  return { direcciones, cargando: estado !== 'listo', recargar };
}
