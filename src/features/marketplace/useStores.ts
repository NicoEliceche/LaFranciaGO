import { useEffect, useState } from 'react';

import { comerciosApi, hayBackend } from '@core/data/services/apiClient';
import { categories, stores as storesDeEjemplo } from './marketplaceContent';
import type { StoreProfile } from './marketplace.types';

/**
 * Los comercios de la app, traídos de la base.
 *
 * Antes vivían escritos en el front. Ahora salen de la API, que es la que
 * sabe cuáles están aprobados y con qué precios: si el comercio cambia algo
 * en su panel, se ve acá sin tocar código.
 *
 * Se traen una vez y se comparten entre pantallas. Inicio, Categorías y el
 * buscador muestran los mismos comercios, así que pedirlos en cada una serían
 * tres viajes para los mismos datos, y peor: tres momentos distintos en los
 * que la lista podría diferir.
 *
 * Si la API no responde se usan los comercios de ejemplo. Es a propósito:
 * una demo que abre en blanco porque se cayó la red es peor que una que
 * muestra algo, y el resto de la app sigue funcionando igual.
 */

/* Los rubros traen su ícono del catálogo de categorías, que sigue siendo
   cosa del front: un ícono es diseño, no un dato del comercio. */
const iconoDe = (rubroId: string) =>
  categories.find((categoria) => categoria.id === rubroId)?.icon ?? storesDeEjemplo[0].icon;

type ComercioConDestacados = Awaited<
  ReturnType<typeof comerciosApi.listar>
>['comercios'][number] & {
  destacados?: Array<{ id: string; nombre: string; precio: number; foto: string | null }>;
};

/** Adapta un comercio de la API a lo que esperan las pantallas. */
function aStoreProfile(comercio: ComercioConDestacados): StoreProfile {
  return {
    id: comercio.id,
    name: comercio.nombre,
    premium: comercio.premium,
    category: comercio.rubro_nombre,
    categoryId: comercio.rubro_id,
    address: comercio.direccion,
    phone: (comercio as { telefono?: string | null }).telefono ?? '',
    hours: comercio.horario ?? 'A confirmar',
    /* Sin ubicación del cliente no hay distancia, y sin reseñas no hay
       calificación. Van indefinidos y no en cero: un "0.0 km" o un "0.0" de
       puntaje son datos falsos, y la tarjeta ya sabe ocultar lo que falta. */
    distanceKm: undefined,
    rating: undefined,
    openNow: true,
    delivery: true,
    pickup: true,
    minOrder: comercio.minimo,
    summary: comercio.descripcion ?? `${comercio.rubro_nombre} en La Francia.`,
    tags: comercio.zona ? [comercio.zona] : [],
    icon: iconoDe(comercio.rubro_id),
    featuredProducts: (comercio.destacados ?? []).map((producto) => ({
      id: producto.id,
      name: producto.nombre,
      price: producto.precio,
    })),
  };
}

/* Una sola carga compartida por todas las pantallas. */
const oyentes = new Set<() => void>();
let comercios: StoreProfile[] = [];
let estado: 'inicial' | 'cargando' | 'listo' = 'inicial';

const avisar = () => oyentes.forEach((oyente) => oyente());

async function cargar() {
  if (estado !== 'inicial') {
    return;
  }

  estado = 'cargando';

  if (!hayBackend()) {
    comercios = storesDeEjemplo;
    estado = 'listo';
    avisar();

    return;
  }

  try {
    const { comercios: filas } = await comerciosApi.listar();

    comercios = filas.map((fila) => aStoreProfile(fila as ComercioConDestacados));
  } catch {
    comercios = storesDeEjemplo;
  }

  estado = 'listo';
  avisar();
}

/** Vuelve a pedir los comercios: se usa después de dar de alta uno nuevo. */
export function refrescarComercios() {
  estado = 'inicial';

  return cargar();
}

/**
 * Los comercios visibles para el cliente.
 *
 * Devuelve además si todavía está cargando, para que la pantalla muestre el
 * esqueleto en lugar de un "no hay nada" que dura medio segundo y confunde.
 */
export function useStores(): { stores: StoreProfile[]; cargando: boolean } {
  const [, forzar] = useState(0);

  useEffect(() => {
    const oyente = () => forzar((numero) => numero + 1);

    oyentes.add(oyente);
    void cargar();

    return () => {
      oyentes.delete(oyente);
    };
  }, []);

  return { stores: comercios, cargando: estado !== 'listo' };
}
