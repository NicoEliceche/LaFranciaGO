import { useMemo } from 'react';

import type { HomeFeaturedStore, HomeOffer, HomeTone } from '../home/home.types';
import { useOfertas } from './useOfertas';
import { useStores } from './useStores';

/**
 * Los datos de la portada, armados con lo que hay en la base.
 *
 * Inicio tiene sus propios tipos —tarjetas con logo, tono y ETA— que no
 * coinciden con lo que devuelve la API. La traducción vive acá y no en la
 * pantalla: así Inicio sigue hablando de comercios destacados y ofertas
 * cercanas, sin enterarse de cómo vienen del servidor.
 */

/* La paleta rota por rubro para que dos tarjetas seguidas no salgan iguales.
   El tono es decoración: no dice nada del comercio, así que no vale la pena
   guardarlo en la base. */
const TONOS: HomeTone[] = ['blue', 'green', 'orange', 'violet'];

const TONO_POR_RUBRO: Record<string, HomeTone> = {
  almacen: 'blue',
  panaderia: 'orange',
  carniceria: 'violet',
  verduleria: 'green',
  farmacia: 'blue',
  kiosco: 'orange',
};

/** "Panadería La Esquina" → "PL": las iniciales alcanzan como logo. */
function iniciales(nombre: string) {
  const palabras = nombre
    .split(/\s+/)
    .filter((palabra) => palabra.length > 2)
    .slice(0, 2);

  return (palabras.map((palabra) => palabra[0]).join('') || nombre.slice(0, 2)).toUpperCase();
}

/* Sin dato real de demora, se estima por distancia: es una franja, y una
   franja honesta vale más que un número inventado con precisión falsa. Sin
   distancia se usa el piso del pueblo, donde nada queda lejos. */
const demora = (distanciaKm: number | undefined) => {
  const base = distanciaKm === undefined ? 15 : Math.max(10, Math.round(distanciaKm * 6) + 10);

  return { etaMin: base, etaMax: base + 10 };
};

export function useHomeData() {
  const { stores, cargando: cargandoStores } = useStores();
  const { ofertas, cargando: cargandoOfertas } = useOfertas();

  const featuredStores = useMemo<HomeFeaturedStore[]>(
    () =>
      stores.map((store, indice) => {
        const { etaMin, etaMax } = demora(store.distanceKm);

        return {
          id: store.id,
          name: store.name,
          premium: store.premium,
          category: store.category,
          categoryId: store.categoryId,
          logoLabel: iniciales(store.name),
          etaMin,
          etaMax,
          distanceKm: store.distanceKm,
          rating: store.rating,
          delivery: store.delivery,
          pickup: store.pickup,
          openNow: store.openNow,
          tone: TONO_POR_RUBRO[store.categoryId] ?? TONOS[indice % TONOS.length],
          address: store.address,
          /* El nivel de precio sale del mínimo del comercio: es el único dato
             de precio que tiene la tarjeta antes de entrar. */
          priceLevel: store.minOrder >= 8000 ? '$$$' : store.minOrder >= 4000 ? '$$' : '$',
          minOrder: store.minOrder,
          badge: store.premium ? 'Destacado' : '',
          href: `/comercios/${store.id}`,
        };
      }),
    [stores],
  );

  const nearbyOffers = useMemo<HomeOffer[]>(
    () =>
      ofertas.map((oferta, indice) => {
        const store = stores.find((fila) => fila.id === oferta.comercioId);
        /* El porcentaje se calcula cuando la oferta no lo trae: un combo baja
           el precio sin declarar un porcentaje, pero en la tarjeta el número
           es lo que hace parar el scroll. */
        const descuento =
          oferta.porcentaje ??
          (oferta.precioLista > 0
            ? Math.round(((oferta.precioLista - oferta.precioFinal) / oferta.precioLista) * 100)
            : 0);

        return {
          id: oferta.id,
          product: oferta.titulo,
          store: oferta.comercio,
          categoryId: oferta.rubroId,
          distanceKm: store?.distanceKm ?? 0,
          price: oferta.precioFinal,
          oldPrice: oferta.precioLista,
          discount: descuento,
          delivery: true,
          pickup: true,
          openNow: true,
          tone: TONO_POR_RUBRO[oferta.rubroId] ?? TONOS[indice % TONOS.length],
          imageLabel: oferta.productos[0]?.nombre ?? oferta.titulo,
          /* Lleva al comercio y no a un producto: una oferta puede ser un
             combo de varios, y no hay una página que muestre eso sola. */
          href: `/comercios/${oferta.comercioId}`,
        };
      }),
    [ofertas, stores],
  );

  return {
    featuredStores,
    nearbyOffers,
    cargando: cargandoStores || cargandoOfertas,
  };
}
