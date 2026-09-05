/**
 * Rubros para el alta de comercio.
 *
 * Está basada en las actividades de comercio minorista y servicios del
 * nomenclador de AFIP, pero acotada y escrita como habla la gente: el
 * nomenclador completo tiene miles de códigos pensados para trámites
 * fiscales, y un panadero no busca "elaboración de productos de panadería
 * n.c.p.", busca "panadería".
 *
 * Se listan también rubros que hoy no tienen ningún negocio en la app: al
 * darse de alta, el comercio tiene que encontrarse en la lista aunque sea el
 * primero de su tipo en el pueblo.
 */

export interface TradeCategory {
  id: string;
  name: string;
  /** Palabras con las que la gente busca el rubro, además del nombre. */
  aliases?: string[];
}

export const TRADE_CATEGORIES: TradeCategory[] = [
  // ── Alimentos ──
  { id: 'almacen', name: 'Almacén', aliases: ['despensa', 'provisiones', 'mercadito'] },
  { id: 'supermercado', name: 'Supermercado', aliases: ['super', 'autoservicio'] },
  { id: 'panaderia', name: 'Panadería', aliases: ['pan', 'facturas'] },
  { id: 'confiteria', name: 'Confitería', aliases: ['tortas', 'reposteria', 'pasteleria'] },
  { id: 'carniceria', name: 'Carnicería', aliases: ['carne', 'cortes', 'pollos'] },
  { id: 'pescaderia', name: 'Pescadería', aliases: ['pescado', 'mariscos'] },
  { id: 'verduleria', name: 'Verdulería', aliases: ['frutas', 'verduras', 'fruteria'] },
  { id: 'fiambreria', name: 'Fiambrería', aliases: ['fiambres', 'quesos', 'picada'] },
  { id: 'dietetica', name: 'Dietética', aliases: ['naturista', 'saludable', 'organico'] },
  { id: 'granja', name: 'Granja', aliases: ['huevos', 'pollo', 'aves'] },
  { id: 'kiosco', name: 'Kiosco', aliases: ['golosinas', 'maxikiosco', 'cigarrillos'] },
  { id: 'bebidas', name: 'Distribuidora de bebidas', aliases: ['bebidas', 'cerveza', 'vinos'] },
  { id: 'vinoteca', name: 'Vinoteca', aliases: ['vinos', 'bodega', 'licores'] },
  { id: 'heladeria', name: 'Heladería', aliases: ['helados', 'postres'] },

  // ── Gastronomía ──
  { id: 'rotiseria', name: 'Rotisería', aliases: ['comidas', 'viandas', 'milanesas'] },
  { id: 'restaurante', name: 'Restaurante', aliases: ['comida', 'parrilla', 'resto'] },
  { id: 'pizzeria', name: 'Pizzería', aliases: ['pizza', 'empanadas', 'faina'] },
  { id: 'cafeteria', name: 'Cafetería', aliases: ['cafe', 'bar', 'desayunos'] },
  { id: 'sandwicheria', name: 'Sandwichería', aliases: ['sandwiches', 'lomos', 'hamburguesas'] },
  { id: 'catering', name: 'Catering y eventos', aliases: ['eventos', 'fiestas', 'lunch'] },

  // ── Salud y cuidado personal ──
  { id: 'farmacia', name: 'Farmacia', aliases: ['remedios', 'medicamentos'] },
  { id: 'perfumeria', name: 'Perfumería', aliases: ['cosmetica', 'higiene', 'belleza'] },
  { id: 'optica', name: 'Óptica', aliases: ['anteojos', 'lentes'] },
  { id: 'peluqueria', name: 'Peluquería', aliases: ['pelo', 'barberia', 'corte'] },
  { id: 'estetica', name: 'Centro de estética', aliases: ['unas', 'depilacion', 'spa'] },
  { id: 'gimnasio', name: 'Gimnasio', aliases: ['gym', 'fitness', 'entrenamiento'] },

  // ── Hogar y construcción ──
  { id: 'ferreteria', name: 'Ferretería', aliases: ['herramientas', 'tornillos'] },
  { id: 'corralon', name: 'Corralón', aliases: ['materiales', 'construccion', 'cemento'] },
  { id: 'pinturera', name: 'Pinturería', aliases: ['pintura', 'latex', 'esmalte'] },
  { id: 'muebleria', name: 'Mueblería', aliases: ['muebles', 'colchones', 'sillones'] },
  { id: 'bazar', name: 'Bazar', aliases: ['cocina', 'vajilla', 'menaje'] },
  { id: 'electrodomesticos', name: 'Electrodomésticos', aliases: ['heladeras', 'lavarropas'] },
  { id: 'vivero', name: 'Vivero', aliases: ['plantas', 'jardin', 'macetas'] },
  { id: 'limpieza', name: 'Artículos de limpieza', aliases: ['limpieza', 'lavandina'] },

  // ── Indumentaria ──
  { id: 'indumentaria', name: 'Indumentaria', aliases: ['ropa', 'vestimenta', 'boutique'] },
  { id: 'calzado', name: 'Calzado', aliases: ['zapatos', 'zapatillas', 'botas'] },
  { id: 'lenceria', name: 'Lencería', aliases: ['ropa interior', 'medias'] },
  { id: 'deportes', name: 'Artículos deportivos', aliases: ['deporte', 'futbol', 'camisetas'] },
  { id: 'merceria', name: 'Mercería', aliases: ['lanas', 'hilos', 'botones', 'telas'] },

  // ── Vehículos ──
  { id: 'taller', name: 'Taller mecánico', aliases: ['mecanica', 'autos', 'service'] },
  { id: 'gomeria', name: 'Gomería', aliases: ['cubiertas', 'neumaticos', 'ruedas'] },
  { id: 'repuestos', name: 'Repuestos', aliases: ['autopartes', 'accesorios'] },
  { id: 'lavadero', name: 'Lavadero de autos', aliases: ['lavado', 'autos'] },
  { id: 'bicicleteria', name: 'Bicicletería', aliases: ['bicicletas', 'bicis', 'rodados'] },
  { id: 'motos', name: 'Motos y repuestos', aliases: ['moto', 'ciclomotor'] },

  // ── Comercios varios ──
  { id: 'libreria', name: 'Librería', aliases: ['utiles', 'papeleria', 'escolar'] },
  { id: 'regaleria', name: 'Regalería', aliases: ['regalos', 'souvenirs', 'decoracion'] },
  { id: 'jugueteria', name: 'Juguetería', aliases: ['juguetes', 'chicos'] },
  { id: 'petshop', name: 'Pet shop', aliases: ['mascotas', 'perros', 'gatos'] },
  { id: 'veterinaria', name: 'Veterinaria', aliases: ['animales', 'mascotas', 'vacunas'] },
  { id: 'agropecuaria', name: 'Agropecuaria', aliases: ['campo', 'semillas', 'agro', 'forrajeria'] },
  { id: 'informatica', name: 'Informática', aliases: ['computacion', 'pc', 'tecnologia'] },
  { id: 'celulares', name: 'Celulares y accesorios', aliases: ['telefonos', 'fundas'] },

  // ── Servicios ──
  { id: 'lavanderia', name: 'Lavandería', aliases: ['lavado', 'ropa', 'tintoreria'] },
  { id: 'imprenta', name: 'Imprenta y gráfica', aliases: ['impresiones', 'cartel', 'folleteria'] },
  { id: 'fotografia', name: 'Fotografía', aliases: ['fotos', 'estudio', 'eventos'] },
  { id: 'inmobiliaria', name: 'Inmobiliaria', aliases: ['propiedades', 'alquileres'] },
  { id: 'transporte', name: 'Transporte y fletes', aliases: ['flete', 'mudanza', 'envios'] },
  { id: 'construccion', name: 'Servicios de construcción', aliases: ['albanil', 'obra'] },
  { id: 'electricista', name: 'Electricidad', aliases: ['electricista', 'instalaciones'] },
  { id: 'plomeria', name: 'Plomería y gas', aliases: ['plomero', 'gasista', 'canerias'] },
  { id: 'refrigeracion', name: 'Refrigeración y aire', aliases: ['aire acondicionado'] },
  { id: 'cerrajeria', name: 'Cerrajería', aliases: ['llaves', 'cerraduras'] },

  { id: 'otro', name: 'Otro rubro', aliases: ['otros'] },
];

/**
 * Busca rubros por nombre o por sus palabras alternativas.
 *
 * Devuelve como mucho cinco: es un desplegable de ayuda, no un listado. Se
 * priorizan los que empiezan con lo escrito, como en cualquier autocompletado.
 */
export function searchTradeCategories(query: string, limit = 5): TradeCategory[] {
  const needle = query
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

  if (needle.length === 0) {
    return [];
  }

  const normalize = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '');

  const matches = TRADE_CATEGORIES.filter((category) => {
    const haystack = [category.name, ...(category.aliases ?? [])].map(normalize);

    return haystack.some((value) => value.includes(needle));
  });

  return matches
    .sort((a, b) => {
      const aStarts = normalize(a.name).startsWith(needle);
      const bStarts = normalize(b.name).startsWith(needle);

      if (aStarts !== bStarts) {
        return aStarts ? -1 : 1;
      }

      return a.name.localeCompare(b.name, 'es');
    })
    .slice(0, limit);
}
