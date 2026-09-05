import { useEffect, useState } from 'react';

import { customerOrders } from './marketplaceContent';
import type { CartItem, CustomerOrder } from './marketplace.types';

/**
 * Pedidos del cliente.
 *
 * Sin backend todavía: los pedidos viven en un store module-level para que
 * confirmar en el carrito se refleje en "Mis pedidos". Cuando exista la API,
 * este archivo es el único punto a reemplazar.
 */

const listeners = new Set<() => void>();
let orders: CustomerOrder[] = [...customerOrders];
let sequence = 1249;

const notify = () => listeners.forEach((listener) => listener());

const now = () => {
  const date = new Date();
  const time = date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

  return `Hoy ${time}`;
};

/**
 * Crea un pedido a partir del carrito.
 *
 * Se agrupa por comercio: cada negocio prepara y entrega lo suyo, así que un
 * carrito con productos de tres locales genera tres pedidos, que es lo que el
 * cliente después va a seguir por separado.
 */
export function placeOrder(items: CartItem[]) {
  const available = items.filter((item) => item.available);

  if (available.length === 0) {
    return [];
  }

  const byStore = new Map<string, CartItem[]>();

  available.forEach((item) => {
    const group = byStore.get(item.store) ?? [];

    group.push(item);
    byStore.set(item.store, group);
  });

  const created: CustomerOrder[] = [];

  byStore.forEach((group, store) => {
    sequence += 1;

    created.push({
      id: `ord-${sequence}`,
      code: `#${sequence}`,
      store,
      /* El id del comercio se deriva del nombre mientras no haya backend. */
      storeId: group[0].store
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
      categoryId: group[0].categoryId,
      total: group.reduce((sum, item) => sum + item.subtotal, 0),
      status: 'En preparación',
      state: 'proceso',
      eta: `Llega en ${group[0].eta}`,
      date: now(),
      itemCount: group.length,
      items: group.map((item) => ({ productId: item.id, quantity: item.quantity + 1 })),
    });
  });

  /* Lo último pedido va primero: es lo que el cliente viene a mirar. */
  orders = [...created, ...orders];
  notify();

  return created;
}

/** Pedidos actuales, ordenados del más nuevo al más viejo. */
export function useCustomerOrders() {
  const [current, setCurrent] = useState<CustomerOrder[]>(orders);

  useEffect(() => {
    setCurrent(orders);

    const listener = () => setCurrent(orders);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return current;
}
