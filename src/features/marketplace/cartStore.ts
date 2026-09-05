import { useEffect, useState } from 'react';

import { maxStepIndex, stepFactor } from '@core/data/saleUnits';

import { cartItems as initialItems } from './marketplaceContent';
import type { CartItem } from './marketplace.types';

/**
 * Carrito del cliente.
 *
 * Vive en un store module-level y no en el estado de la pantalla: antes cada
 * visita al carrito volvía a arrancar de los datos de ejemplo, así que quitar
 * un producto o cambiar una cantidad se perdía al salir.
 *
 * Se guarda en sessionStorage y no en localStorage a propósito: un carrito a
 * medio armar pertenece a esa visita. Cerrar el navegador y volver una semana
 * después con productos viejos adentro confunde más de lo que ayuda.
 *
 * Cuando exista backend, este archivo es el único punto a reemplazar.
 */

const STORAGE_KEY = 'lafranciago:carrito';

const listeners = new Set<() => void>();
let items: CartItem[] = [];
let loaded = false;

const notify = () => listeners.forEach((listener) => listener());

const persist = () => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* Sin almacenamiento, el carrito vale mientras dure la pantalla. */
  }
};

const load = () => {
  try {
    const saved = window.sessionStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return [...initialItems];
    }

    const parsed = JSON.parse(saved) as unknown;

    /* Lo guardado se valida: puede venir de una versión anterior del formato. */
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [...initialItems];
  } catch {
    return [...initialItems];
  }
};

const ensureLoaded = () => {
  if (!loaded) {
    loaded = true;
    items = load();
  }
};

/** Quita un producto del carrito. */
export function removeCartItem(id: string) {
  items = items.filter((item) => item.id !== id);
  persist();
  notify();
}

/** Sube o baja un escalón de cantidad, dentro de lo que permita la unidad. */
export function changeCartQuantity(id: string, delta: number) {
  items = items.map((item) => {
    if (item.id !== id) {
      return item;
    }

    /* Sin stock no se puede pedir nada: el escalón queda en cero. */
    if (!item.available) {
      return item;
    }

    const quantity = Math.min(
      Math.max(0, item.quantity + delta),
      maxStepIndex(item.saleUnit),
    );

    return {
      ...item,
      quantity,
      subtotal: Math.round(item.price * stepFactor(item.saleUnit, quantity)),
    };
  });

  persist();
  notify();
}

/** Vacía el carrito, al confirmar el pedido. */
export function clearCart() {
  items = [];
  persist();
  notify();
}

/** Productos del carrito, compartidos por todas las pantallas. */
export function useCart() {
  const [current, setCurrent] = useState<CartItem[]>(items);

  useEffect(() => {
    ensureLoaded();
    setCurrent(items);

    const listener = () => setCurrent(items);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return current;
}
