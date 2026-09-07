import { useEffect, useState } from 'react';

import {
  type OfertaApi,
  type ProductoApi,
  comerciosApi,
  hayBackend,
} from '@core/data/services/apiClient';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

/**
 * El catálogo de un comercio, traído de la base.
 *
 * Antes cada comercio tenía su catálogo escrito en la pantalla. Ahora sale de
 * los productos que el comercio carga en su panel: lo que ve el cliente es lo
 * que el comercio publicó, sin pasar por código.
 *
 * Trae también las ofertas vigentes, y marca cada producto con la que le
 * corresponde: así el precio tachado aparece donde el cliente elige, que es
 * donde una promoción sirve de algo.
 */

export type CatalogoTono = 'blue' | 'green' | 'orange' | 'red' | 'violet' | 'slate';

/** Lo que una oferta le hace a un producto puntual. */
export type OfertaDeProducto = {
  id: string;
  tipo: 'descuento' | 'combo' | 'cantidad';
  titulo: string;
  /** Sólo en descuentos: el número que se pinta sobre la foto. */
  porcentaje: number | null;
  /** Lo que sale con la promoción aplicada, si se puede decir por unidad. */
  precioFinal: number | null;
  /** Cuántas unidades hay que llevar (promo por cantidad). */
  cantidad: number | null;
  /** Texto corto para la tarjeta: "3 x $4.600", "20% off". */
  etiqueta: string;
};

export type ProductoCatalogo = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  categoryLabel: string;
  price: number;
  saleUnit?: SaleUnitId;
  tone: CatalogoTono;
  badge?: string;
  suggestions: string[];
  foto: string | null;
  stock: number | null;
  tamano?: string;
  oferta: OfertaDeProducto | null;
};

export type SeccionCatalogo = {
  id: string;
  label: string;
  description: string;
  products: ProductoCatalogo[];
};

const TONOS: CatalogoTono[] = ['blue', 'green', 'orange', 'violet', 'red', 'slate'];

/**
 * Arma la etiqueta que se muestra sobre el producto.
 *
 * Cada tipo se explica distinto: un descuento se dice en porcentaje, una
 * promo por cantidad en cuántas unidades, y un combo nombra con qué va. Decir
 * "oferta" a secas obligaría al cliente a entrar para saber de qué se trata.
 */
function etiquetaDe(oferta: OfertaApi, precioUnitario: number): OfertaDeProducto {
  if (oferta.tipo === 'descuento') {
    return {
      id: oferta.id,
      tipo: 'descuento',
      titulo: oferta.titulo,
      porcentaje: oferta.porcentaje,
      precioFinal: Math.round(precioUnitario * (100 - (oferta.porcentaje ?? 0))) / 100,
      cantidad: null,
      etiqueta: `${oferta.porcentaje}% off`,
    };
  }

  if (oferta.tipo === 'cantidad') {
    return {
      id: oferta.id,
      tipo: 'cantidad',
      titulo: oferta.titulo,
      porcentaje: null,
      /* El precio final es el del paquete entero, no el de una unidad: por eso
         la etiqueta dice cuántas van. */
      precioFinal: null,
      cantidad: oferta.cantidad,
      etiqueta: `${oferta.cantidad} x $${oferta.precioFinal.toLocaleString('es-AR')}`,
    };
  }

  const otros = oferta.productos.length - 1;

  return {
    id: oferta.id,
    tipo: 'combo',
    titulo: oferta.titulo,
    porcentaje: null,
    precioFinal: null,
    cantidad: null,
    etiqueta: otros > 0 ? `Combo con ${otros} más` : 'En combo',
  };
}

type Resultado = {
  intro: string;
  secciones: SeccionCatalogo[];
  ofertas: OfertaApi[];
  cargando: boolean;
  error: boolean;
};

export function useStoreCatalog(comercioId: string): Resultado {
  const [datos, setDatos] = useState<Omit<Resultado, 'cargando'> | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!comercioId || !hayBackend()) {
      setCargando(false);

      return;
    }

    let vigente = true;

    setCargando(true);

    comerciosApi
      .detalle(comercioId)
      .then(({ comercio, categorias, productos, ofertas }) => {
        if (!vigente) {
          return;
        }

        /* Se indexa qué oferta toca cada producto para no recorrer todas las
           ofertas por cada producto de la lista. */
        const ofertaDe = new Map<string, OfertaApi>();

        for (const oferta of ofertas ?? []) {
          for (const parte of oferta.productos) {
            /* Si un producto cae en más de una promoción, gana la primera:
               el listado ya viene de la más nueva a la más vieja. */
            if (!ofertaDe.has(parte.id)) {
              ofertaDe.set(parte.id, oferta);
            }
          }
        }

        const aProducto = (
          producto: ProductoApi,
          categoriaNombre: string,
          indice: number,
        ): ProductoCatalogo => {
          const oferta = ofertaDe.get(producto.id) ?? null;

          return {
            id: producto.id,
            name: producto.nombre,
            description: producto.descripcion ?? '',
            categoryId: producto.categoria_id ?? 'general',
            categoryLabel: categoriaNombre,
            price: producto.precio,
            saleUnit: producto.unidad_venta as SaleUnitId,
            tone: TONOS[indice % TONOS.length],
            badge: oferta ? etiquetaDe(oferta, producto.precio).etiqueta : undefined,
            suggestions: [],
            foto: producto.fotos?.[0] ?? null,
            stock: producto.stock,
            tamano: producto.tamano,
            oferta: oferta ? etiquetaDe(oferta, producto.precio) : null,
          };
        };

        /* Las secciones salen de las categorías que definió el comercio. Los
           productos sin categoría no se pierden: van a una sección propia al
           final, porque un producto invisible es un producto que no se vende. */
        const secciones: SeccionCatalogo[] = categorias
          .map((categoria) => ({
            id: categoria.id,
            label: categoria.nombre,
            description: '',
            products: productos
              .filter((producto) => producto.categoria_id === categoria.id)
              .map((producto, indice) => aProducto(producto, categoria.nombre, indice)),
          }))
          .filter((seccion) => seccion.products.length > 0);

        const sueltos = productos.filter(
          (producto) =>
            !producto.categoria_id ||
            !categorias.some((categoria) => categoria.id === producto.categoria_id),
        );

        if (sueltos.length > 0) {
          secciones.push({
            id: 'otros',
            label: 'Otros productos',
            description: '',
            products: sueltos.map((producto, indice) => aProducto(producto, 'Otros', indice)),
          });
        }

        setDatos({
          intro: comercio.descripcion ?? '',
          secciones,
          ofertas: ofertas ?? [],
          error: false,
        });
      })
      .catch(() => {
        if (vigente) {
          setDatos({ intro: '', secciones: [], ofertas: [], error: true });
        }
      })
      .finally(() => {
        if (vigente) {
          setCargando(false);
        }
      });

    return () => {
      vigente = false;
    };
  }, [comercioId]);

  return {
    intro: datos?.intro ?? '',
    secciones: datos?.secciones ?? [],
    ofertas: datos?.ofertas ?? [],
    error: datos?.error ?? false,
    cargando,
  };
}
