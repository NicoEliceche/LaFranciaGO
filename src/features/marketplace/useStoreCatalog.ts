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
  /**
   * Con qué producto se arma el pedido.
   *
   * Las tarjetas de oferta llevan el id de la oferta, que es lo que las
   * identifica en pantalla, pero el pedido se hace contra un producto de
   * verdad: mandando el id de la oferta, el backend no lo encuentra en su
   * catálogo y responde que no está disponible.
   *
   * En un producto normal es su propio id.
   */
  productoRealId: string;
};

export type SeccionCatalogo = {
  id: string;
  label: string;
  description: string;
  products: ProductoCatalogo[];
};

const TONOS: CatalogoTono[] = ['blue', 'green', 'orange', 'violet', 'red', 'slate'];

/**
 * El id de la sección de ofertas.
 *
 * Se exporta porque la pantalla necesita reconocerla para llevar el scroll
 * hasta ahí cuando alguien llega desde una oferta de la portada. Un texto
 * suelto en dos archivos se desincroniza el día que alguien lo cambie.
 */
export const SECCION_OFERTAS = 'ofertas';

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
            productoRealId: producto.id,
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

        /* Las ofertas van primero, antes que cualquier categoría.

           Un comercio que arma una promoción la arma para que se vea: si
           queda repartida entre las categorías, el cliente la encuentra sólo
           si justo scrollea hasta ahí, y una oferta que no se ve no vende. El
           producto sigue apareciendo también en su categoría, para quien
           entra buscando algo puntual y no mirando promociones.

           Se arma a partir de los productos ya convertidos, así la sección
           muestra exactamente las mismas tarjetas que el resto del catálogo,
           con su etiqueta y su precio. */
        /* La sección de ofertas muestra las ofertas, no los productos que
           las componen.

           Antes listaba los productos que tenían alguna promoción, y para un
           combo eso significaba desarmarlo: tocando "Combo parrilla" en la
           portada se llegaba a una lista con asado, chorizo y morcilla por
           separado, cada uno a su precio. La oferta que se había tocado no
           aparecía en ningún lado, y daba la impresión de que no existía.

           Cada oferta es una tarjeta con su nombre, su precio y su foto. Los
           productos sueltos siguen estando más abajo, en su categoría, con
           la etiqueta de la promoción. */
        const nombreDeCategoria = (producto: ProductoApi) =>
          categorias.find((categoria) => categoria.id === producto.categoria_id)?.nombre ??
          'Otros';

        /* Ya convertidos: la tarjeta de la oferta hereda de uno de ellos la
           categoría, la unidad de venta y la foto de respaldo. */
        const porId = new Map(
          productos.map((producto, indice) => [
            producto.id,
            aProducto(producto, nombreDeCategoria(producto), indice),
          ]),
        );

        const tarjetasDeOferta: ProductoCatalogo[] = (ofertas ?? [])
          .filter((oferta) => oferta.productos.some((parte) => porId.has(parte.id)))
          .map((oferta, indice) => {
            /* El primero de la lista presta su categoría y su unidad: sirve
               para la foto de respaldo y para que el selector sepa de a
               cuánto se vende. */
            const principal = porId.get(
              oferta.productos.find((parte) => porId.has(parte.id))!.id,
            )!;

            const cuantos = oferta.productos.length;

            return {
              ...principal,
              /* El id es el de la oferta: agregar "Combo parrilla" al carrito
                 no es lo mismo que agregar un asado. */
              id: oferta.id,
              /* El pedido se arma con el producto, no con la oferta. */
              productoRealId: principal.productoRealId,
              name: oferta.titulo,
              description:
                oferta.descripcion ??
                (cuantos > 1
                  ? `Lleva ${cuantos} productos: ${oferta.productos.map((x) => x.nombre).join(', ')}`
                  : ''),
              price: oferta.precioFinal,
              /* Un combo se lleva entero: no se vende por kilo aunque lo que
                 tenga adentro sí. Decir "el kg" al lado del precio del combo
                 hace pensar que son $21.000 por kilo. */
              saleUnit: oferta.tipo === 'descuento' ? principal.saleUnit : 'unidad',
              tone: TONOS[indice % TONOS.length],
              foto: oferta.fotoUrl ?? principal.foto,
              badge: etiquetaDe(oferta, principal.price).etiqueta,
              oferta: etiquetaDe(oferta, principal.price),
            };
          });

        if (tarjetasDeOferta.length > 0) {
          secciones.unshift({
            id: SECCION_OFERTAS,
            label: 'Ofertas',
            description: 'Lo que está en promoción ahora.',
            products: tarjetasDeOferta,
          });
        }

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
