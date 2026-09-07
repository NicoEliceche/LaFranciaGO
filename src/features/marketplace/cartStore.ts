import { useEffect, useState } from 'react';

import { maxStepIndex, stepFactor } from '@core/data/saleUnits';

import type { SaleUnitId } from '@shared/types/saleUnit.types';

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
 * Arranca vacío. Antes venía con productos de ejemplo, que servían para ver
 * la pantalla mientras no había backend; ahora el pedido se crea de verdad y
 * esos productos no existen en la base: confirmarlos fallaría, y el cliente
 * vería en su carrito cosas que nunca puso.
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
      return [];
    }

    const parsed = JSON.parse(saved) as unknown;

    /* Lo guardado se valida: puede venir de una versión anterior del formato. */
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
};

const ensureLoaded = () => {
  if (!loaded) {
    loaded = true;
    items = load();
  }
};

/** Lo que hace falta saber de un producto para ponerlo en el carrito. */
export type ProductoParaCarrito = {
  id: string;
  product: string;
  store: string;
  storeId: string;
  categoryId: string;
  price: number;
  saleUnit?: SaleUnitId;
  available?: boolean;
  eta?: string;
};

/**
 * Suma un producto al carrito.
 *
 * Si ya estaba, sube el escalón en lugar de repetir la línea: dos entradas
 * del mismo producto obligarían al cliente a sumar de cabeza cuánto lleva.
 *
 * El escalón se limita a lo que permite la unidad de venta, igual que en el
 * carrito: no se puede pedir cinco kilos de pan si la escala llega a cuatro.
 */
export function addToCart(producto: ProductoParaCarrito, escalones = 1) {
  ensureLoaded();

  const unidad = producto.saleUnit ?? 'unidad';
  const tope = maxStepIndex(unidad);
  const existente = items.find((item) => item.id === producto.id);

  if (existente) {
    const escalon = Math.min(existente.quantity + escalones, tope);

    items = items.map((item) =>
      item.id === producto.id
        ? {
            ...item,
            quantity: escalon,
            subtotal: Math.round(item.price * stepFactor(unidad, escalon)),
          }
        : item,
    );
  } else {
    const escalon = Math.min(Math.max(escalones - 1, 0), tope);

    items = [
      ...items,
      {
        id: producto.id,
        product: producto.product,
        store: producto.store,
        storeId: producto.storeId,
        categoryId: producto.categoryId,
        price: producto.price,
        saleUnit: unidad,
        quantity: escalon,
        subtotal: Math.round(producto.price * stepFactor(unidad, escalon)),
        available: producto.available ?? true,
        eta: producto.eta ?? '15-25 min',
        statusLabel: producto.available === false ? 'Sin stock' : 'En stock',
        statusTone: producto.available === false ? 'danger' : 'success',
      },
    ];
  }

  persist();
  notify();
}

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
