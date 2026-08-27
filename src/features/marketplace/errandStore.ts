import { useCallback, useEffect, useMemo, useState } from 'react';

import type { ChatMessage, Errand, ErrandCourier } from './errand.types';

/**
 * Estado del mandado en memoria.
 *
 * Sin backend todavía: el mandado vive en un store module-level para que la
 * pantalla de alta y la del chat compartan los mismos datos. Cuando exista la
 * API, este archivo es el único punto a reemplazar.
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

/** Repartidores disponibles dentro del radio de búsqueda. */
const nearbyCouriers: ErrandCourier[] = [
  { id: 'c1', name: 'Roy Ramírez', vehicle: 'Moto', rating: 4.9, distanceKm: 1.2 },
  { id: 'c2', name: 'Daniel Sosa', vehicle: 'Moto', rating: 4.7, distanceKm: 2.4 },
  { id: 'c3', name: 'Matías Gómez', vehicle: 'Auto', rating: 4.8, distanceKm: 3.6 },
];

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

  /* Simulación: a los pocos segundos un repartidor toma el pedido y saluda. */
  const taken = window.setTimeout(() => {
    if (!currentErrand || currentErrand.status !== 'buscando') {
      return;
    }

    const courier = nearbyCouriers[Math.floor(Math.random() * nearbyCouriers.length)];

    currentErrand = {
      ...currentErrand,
      status: 'tomado',
      courier,
      messages: [
        {
          id: `m-${Date.now()}`,
          author: 'repartidor',
          kind: 'texto',
          text: `¡Hola! Tomo tu mandado. Voy para allá, cualquier cosa escribime por acá.`,
          time: now(),
        },
      ],
    };

    notify();
  }, 3200);

  simulationTimers.push(taken);

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

export { nearbyCouriers, DEFAULT_RADIUS_KM };
