import { useEffect, useState } from 'react';

import { stores as seedStores } from './marketplaceContent';
import type { StoreProfile } from './marketplace.types';

/**
 * Comercios de la app.
 *
 * Sin backend todavía: viven en un store module-level para que el alta se
 * refleje en el buscador, en Categorías y en Inicio sin recargar. Se guarda en
 * localStorage y no en sessionStorage porque un comercio dado de alta es un
 * dato permanente, a diferencia del carrito.
 *
 * Sólo se persisten los comercios nuevos: los de ejemplo vienen del código y
 * guardarlos duplicaría datos que ya existen.
 *
 * Cuando exista la API, este archivo es el único punto a reemplazar.
 */

const STORAGE_KEY = 'lafranciago:comercios';

/** Alta pendiente de revisión: todavía no se muestra a los clientes. */
export type BusinessStatus = 'pendiente' | 'aprobado';

export interface RegisteredBusiness extends StoreProfile {
  status: BusinessStatus;
  /** Contacto del alta: por ahí se avisa la aprobación. */
  email: string;
  /** Fecha del alta, para mostrar en el panel del comercio. */
  registeredAt: string;
}

export interface BusinessDraft {
  name: string;
  taxId: string;
  category: string;
  categoryId: string;
  address: string;
  phone: string;
  email: string;
  hours?: string;
  zone?: string;
  description?: string;
  social?: string;
  payments?: string;
}

const listeners = new Set<() => void>();
let registered: RegisteredBusiness[] = [];
let loaded = false;

const notify = () => listeners.forEach((listener) => listener());

const read = (): RegisteredBusiness[] => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved) as unknown;

    return Array.isArray(parsed) ? (parsed as RegisteredBusiness[]) : [];
  } catch {
    /* Almacenamiento bloqueado o formato viejo: se arranca sin altas. */
    return [];
  }
};

const persist = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(registered));
  } catch {
    /* Sin almacenamiento, el alta vale para esta sesión. */
  }
};

const ensureLoaded = () => {
  if (!loaded) {
    loaded = true;
    registered = read();
  }
};

/** Convierte un nombre en un id de URL: "Panadería Ana" → "panaderia-ana". */
const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * Da de alta un comercio.
 *
 * Queda en estado pendiente: en el proceso real lo revisamos antes de
 * publicarlo, así que no aparece todavía en el buscador. El comercio sí lo ve
 * en su panel, que es donde sigue el trámite.
 */
export function registerBusiness(draft: BusinessDraft): RegisteredBusiness {
  ensureLoaded();

  const base = slugify(draft.name) || 'comercio';
  /* Si ya existe un comercio con ese nombre, se numera para no pisarlo. */
  const taken = new Set([...seedStores, ...registered].map((store) => store.id));
  let id = base;
  let suffix = 2;

  while (taken.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }

  const business: RegisteredBusiness = {
    id,
    name: draft.name,
    category: draft.category,
    categoryId: draft.categoryId,
    address: draft.address,
    phone: draft.phone,
    hours: draft.hours || 'A confirmar',
    /* Datos que todavía no se piden en el alta: se completan al operar. */
    distanceKm: 0,
    rating: 0,
    openNow: false,
    delivery: true,
    pickup: true,
    minOrder: 0,
    summary: draft.description || `${draft.category} en La Francia.`,
    tags: draft.zone ? [draft.zone] : [],
    icon: seedStores[0].icon,
    featuredProducts: [],
    email: draft.email,
    status: 'pendiente',
    registeredAt: new Date().toISOString(),
  };

  registered = [business, ...registered];
  persist();
  notify();

  return business;
}

/** Comercios dados de alta desde la app, en orden del más nuevo al más viejo. */
export function useRegisteredBusinesses() {
  const [current, setCurrent] = useState<RegisteredBusiness[]>(registered);

  useEffect(() => {
    ensureLoaded();
    setCurrent(registered);

    const listener = () => setCurrent(registered);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return current;
}

/**
 * Todos los comercios visibles para el cliente: los de ejemplo más los que
 * ya pasaron la revisión. Los pendientes quedan fuera a propósito.
 */
export function useVisibleStores(): StoreProfile[] {
  const businesses = useRegisteredBusinesses();

  return [...businesses.filter((item) => item.status === 'aprobado'), ...seedStores];
}
