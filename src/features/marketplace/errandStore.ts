import { useCallback, useEffect, useMemo, useState } from 'react';

import type { ChatMessage, Errand } from './errand.types';

/**
 * Estado del mandado en memoria, para la pantalla.
 *
 * El mandado de verdad vive en la base: esto es lo que la pantalla de alta y
 * la del chat comparten mientras la persona lo está pidiendo, para no tener
 * que ir al servidor por cada cambio de la vista.
 *
 * Lo que sí dejó de estar acá es la simulación que daba el mandado por
 * tomado a los pocos segundos. Inventaba un repartidor que no existe, así
 * que no se podía distinguir un circuito que anda de uno que no.
 */

const listeners = new Set<() => void>();
let currentErrand: Errand | null = null;
/** Timers de la simulación, para poder cancelarlos si se cancela el mandado. */
let simulationTimers: number[] = [];

const notify = () => listeners.forEach((listener) => listener());

const clearSimulation = () => {
  simulationTimers.forEach((timer) => window.clearTimeout(timer));
  simulationTimers = [];
};

const now = () =>
  new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

const DEFAULT_RADIUS_KM = 5;

export const getErrand = () => currentErrand;

export function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

/**
 * Publica el mandado y simula que un repartidor cercano lo toma.
 * El primero que acepta se queda con el trabajo.
 */
export function createErrand(description: string, address: string) {
  clearSimulation();

  currentErrand = {
    id: `errand-${Date.now()}`,
    code: `#${Math.floor(1000 + Math.random() * 9000)}`,
    description,
    status: 'buscando',
    createdAt: now(),
    radiusKm: DEFAULT_RADIUS_KM,
    address,
    messages: [],
  };

  notify();

  /* Antes acá había una simulación: a los 3,2 segundos inventaba un
     repartidor de una lista falsa y mostraba el mandado como tomado. Eso se
     escribió cuando no había backend, y ahora miente: el pedido queda
     "buscando" de verdad hasta que alguien lo tome desde su cuenta, que es
     lo que hay que poder probar. Con la simulación, crear un flete y verlo
     tomado por "Roy Ramírez" tres segundos después hacía imposible
     comprobar el circuito real. */
  return currentErrand;
}

export function addMessage(message: Omit<ChatMessage, 'id' | 'time'>) {
  if (!currentErrand) {
    return;
  }

  currentErrand = {
    ...currentErrand,
    messages: [
      ...currentErrand.messages,
      { ...message, id: `m-${Date.now()}-${Math.random()}`, time: now() },
    ],
  };

  notify();
}

export function cancelErrand() {
  clearSimulation();

  if (!currentErrand) {
    return;
  }

  currentErrand = { ...currentErrand, status: 'cancelado' };
  notify();
}

/** Suscribe un componente al mandado activo. */
export function useErrand() {
  const [errand, setErrand] = useState<Errand | null>(getErrand);

  useEffect(() => subscribe(() => setErrand(getErrand())), []);

  const send = useCallback((message: Omit<ChatMessage, 'id' | 'time'>) => {
    addMessage(message);
  }, []);

  return useMemo(() => ({ errand, send }), [errand, send]);
}

export { DEFAULT_RADIUS_KM };
