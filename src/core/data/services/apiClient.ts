/**
 * Cliente HTTP de la API.
 *
 * Todas las llamadas pasan por acá para que la URL base, las credenciales y
 * el manejo de errores estén en un solo lugar.
 *
 * `credentials: 'include'` es necesario porque la sesión viaja en una cookie
 * HttpOnly: sin eso el navegador no la manda a otro dominio, y toda petición
 * autenticada volvería 401.
 */

const API_URL = import.meta.env.VITE_API_URL ?? '';

/** Indica si hay backend configurado. Sin él, la app usa los datos locales. */
export const hayBackend = () => API_URL.length > 0;

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function pedir<T>(ruta: string, init: RequestInit = {}): Promise<T> {
  const respuesta = await fetch(`${API_URL}${ruta}`, {
    ...init,
    credentials: 'include',
    headers: {
      ...(init.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...init.headers,
    },
  });

  if (!respuesta.ok) {
    /* El backend manda { error }; si no, se usa el código como referencia. */
    const detalle = await respuesta
      .json()
      .then((cuerpo: { error?: string }) => cuerpo.error)
      .catch(() => null);

    throw new ApiError(detalle ?? `Error ${respuesta.status}`, respuesta.status);
  }

  return respuesta.json() as Promise<T>;
}

export const api = {
  get: <T>(ruta: string) => pedir<T>(ruta),
  post: <T>(ruta: string, cuerpo?: unknown) =>
    pedir<T>(ruta, {
      method: 'POST',
      body: cuerpo instanceof FormData ? cuerpo : JSON.stringify(cuerpo ?? {}),
    }),
  patch: <T>(ruta: string, cuerpo?: unknown) =>
    pedir<T>(ruta, { method: 'PATCH', body: JSON.stringify(cuerpo ?? {}) }),
  delete: <T>(ruta: string) => pedir<T>(ruta, { method: 'DELETE' }),
};

/* ── Tipos de la API ── */

export interface UsuarioApi {
  id: string;
  email: string;
  nombre: string;
  rol: string;
  foto_url: string | null;
}

export interface ComercioApi {
  id: string;
  nombre: string;
  rubro_id: string;
  rubro_nombre: string;
  direccion: string;
  lat: number | null;
  lon: number | null;
  horario: string | null;
  zona: string | null;
  descripcion: string | null;
  logo_url: string | null;
  premium: boolean;
  minimo: number;
}

export interface ProductoApi {
  id: string;
  categoria_id: string | null;
  nombre: string;
  descripcion: string | null;
  precio: number;
  unidad_venta: string;
  fotos: string[];
  video_url: string | null;
  stock: number | null;
}

export interface PedidoApi {
  id: string;
  codigo: string;
  comercio_id: string;
  comercio_nombre: string;
  rubro_id: string;
  direccion_texto: string;
  subtotal: number;
  envio: number;
  total: number;
  estado: 'proceso' | 'terminado' | 'cancelado';
  creado_en: string;
}

/* ── Endpoints ── */

export const authApi = {
  registro: (datos: { email: string; password: string; nombre: string; telefono?: string }) =>
    api.post<UsuarioApi>('/auth/registro', datos),
  login: (datos: { email: string; password: string }) =>
    api.post<UsuarioApi>('/auth/login', datos),
  /** Ingreso al panel: el backend comprueba que el rol sea el de la cuenta. */
  loginPanel: (datos: { email: string; password: string; rol: string }) =>
    api.post<UsuarioApi>('/auth/login-panel', datos),
  logout: () => api.post<{ ok: true }>('/auth/logout'),
  yo: () => api.get<UsuarioApi>('/auth/yo'),
};

export interface PostulacionApi {
  id: string;
  rol: 'comercio' | 'delivery' | 'fletero';
  estado: 'pendiente' | 'aprobado' | 'rechazado' | 'cambios';
  datos: Record<string, string>;
  nota_revision: string | null;
  nombre: string;
  email: string;
  telefono: string | null;
  creado_en: string;
}

export const postulacionesApi = {
  crear: (rol: string, datos: Record<string, unknown>) =>
    api.post<{ id: string; estado: string }>('/postulaciones', { rol, datos }),
  mias: () =>
    api.get<{
      postulaciones: Array<{
        id: string;
        rol: string;
        estado: string;
        nota_revision: string | null;
      }>;
    }>('/postulaciones/mias'),
};

export const adminApi = {
  postulaciones: (estado = 'pendiente') =>
    api.get<{ postulaciones: PostulacionApi[] }>(`/admin/postulaciones?estado=${estado}`),
  revisar: (id: string, decision: 'aprobado' | 'rechazado' | 'cambios', nota?: string) =>
    api.post<{ ok: true; estado: string }>(`/admin/postulaciones/${id}`, { decision, nota }),
};

export const comerciosApi = {
  listar: (filtros: { rubro?: string; q?: string } = {}) => {
    const params = new URLSearchParams();

    if (filtros.rubro) {
      params.set('rubro', filtros.rubro);
    }

    if (filtros.q) {
      params.set('q', filtros.q);
    }

    const query = params.toString();

    return api.get<{ comercios: ComercioApi[] }>(`/comercios${query ? `?${query}` : ''}`);
  },
  detalle: (id: string) =>
    api.get<{
      comercio: ComercioApi;
      categorias: Array<{ id: string; nombre: string; unidad_venta: string }>;
      productos: ProductoApi[];
      ofertas: OfertaApi[];
    }>(`/comercios/${id}`),
  crear: (datos: Record<string, unknown>) =>
    api.post<{ id: string; nombre: string; estado: string }>('/comercios', datos),
};

/** Los tres tipos de promoción que puede armar un comercio. */
export type TipoOferta = 'descuento' | 'combo' | 'cantidad';

export interface OfertaProductoApi {
  id: string;
  nombre: string;
  unidades: number;
  precio: number;
  unidadVenta: string;
  foto: string | null;
}

export interface OfertaApi {
  id: string;
  tipo: TipoOferta;
  titulo: string;
  descripcion: string | null;
  /** Sólo en 'descuento': es el número que se pinta sobre la foto. */
  porcentaje: number | null;
  /** Sólo en 'cantidad': cuántas unidades hay que llevar. */
  cantidad: number | null;
  precioFinal: number;
  precioLista: number;
  fotoUrl: string | null;
  desde: string | null;
  hasta: string | null;
  activa: boolean;
  productos: OfertaProductoApi[];
}

export interface NuevaOferta {
  tipo: TipoOferta;
  titulo: string;
  descripcion?: string;
  porcentaje?: number;
  cantidad?: number;
  precioFinal?: number;
  fotoUrl?: string;
  desde?: string;
  hasta?: string;
  productos: Array<{ productoId: string; unidades?: number }>;
}

export const miComercioApi = {
  ver: () =>
    api.get<{ comercio: ComercioApi | null; productos: ProductoApi[] }>('/mi-comercio'),
  crearProducto: (datos: Record<string, unknown>) =>
    api.post<{ id: string }>('/productos', datos),
  editarProducto: (id: string, datos: Record<string, unknown>) =>
    api.patch<{ ok: true }>(`/productos/${id}`, datos),
  borrarProducto: (id: string) => api.delete<{ ok: true }>(`/productos/${id}`),
  ofertas: () => api.get<{ ofertas: OfertaApi[] }>('/mi-comercio/ofertas'),
  crearOferta: (datos: NuevaOferta) =>
    api.post<{ id: string; precioLista: number; precioFinal: number }>(
      '/mi-comercio/ofertas',
      datos as unknown as Record<string, unknown>,
    ),
  borrarOferta: (id: string) => api.delete<{ ok: true }>(`/mi-comercio/ofertas/${id}`),
  activarOferta: (id: string, activa: boolean) =>
    api.patch<{ ok: true }>(`/mi-comercio/ofertas/${id}`, { activa }),
};

export interface PedidoComercioApi {
  id: string;
  codigo: string;
  estado: 'proceso' | 'terminado' | 'cancelado';
  total: number;
  direccion_texto: string;
  creado_en: string;
  cliente: string;
  cliente_telefono: string | null;
  envio_estado: string | null;
  lat: number | null;
  lon: number | null;
  ubicacion_en: string | null;
  repartidor: string | null;
  sin_leer: number;
  items: number;
}

export interface EnvioApi {
  id: string;
  estado: string;
  lat: number | null;
  lon: number | null;
  ubicacion_en: string | null;
  asignado_en: string | null;
  codigo: string;
  direccion_texto: string;
  repartidor: string | null;
  telefono: string | null;
}

export interface MensajeApi {
  id: string;
  texto: string | null;
  tipo: string;
  media_url: string | null;
  autor_id: string;
  autor: string;
  creado_en: string;
}

export const operacionApi = {
  pedidos: (estado?: string) =>
    api.get<{ pedidos: PedidoComercioApi[] }>(
      `/mi-comercio/pedidos${estado ? `?estado=${estado}` : ''}`,
    ),
  envios: () => api.get<{ envios: EnvioApi[] }>('/mi-comercio/envios'),
  mensajes: (pedidoId: string) =>
    api.get<{ mensajes: MensajeApi[]; yo: string }>(`/pedidos/${pedidoId}/mensajes`),
  enviarMensaje: (pedidoId: string, texto: string) =>
    api.post<{ id: string }>(`/pedidos/${pedidoId}/mensajes`, { texto }),
};

export interface PedidoDisponibleApi {
  id: string;
  codigo: string;
  direccion_texto: string;
  total: number;
  creado_en: string;
  comercio: string;
  comercio_direccion: string;
  cliente: string;
  items: number;
  distanciaKm: number | null;
}

export interface DetallePedidoApi {
  pedido: {
    id: string;
    codigo: string;
    direccion_texto: string;
    subtotal: number;
    envio: number;
    total: number;
    metodo_pago: string | null;
    comercio: string;
    comercio_direccion: string;
    comercio_telefono: string | null;
    cliente: string;
    cliente_telefono: string | null;
  };
  items: Array<{
    nombre: string;
    precio: number;
    unidad_venta: string;
    escalon: number;
    subtotal: number;
  }>;
}

export const deliveryApi = {
  disponibles: (lat?: number, lon?: number) => {
    const params = new URLSearchParams();

    if (typeof lat === 'number' && typeof lon === 'number') {
      params.set('lat', String(lat));
      params.set('lon', String(lon));
    }

    const query = params.toString();

    return api.get<{ pedidos: PedidoDisponibleApi[] }>(
      `/delivery/disponibles${query ? `?${query}` : ''}`,
    );
  },
  detalle: (id: string) => api.get<DetallePedidoApi>(`/delivery/pedidos/${id}`),
  tomar: (id: string, lat?: number, lon?: number) =>
    api.post<{ ok: true }>(`/delivery/pedidos/${id}/tomar`, { lat, lon }),
  actualizarUbicacion: (lat: number, lon: number) =>
    api.post<{ ok: true }>('/delivery/ubicacion', { lat, lon }),
};

export const pedidosApi = {
  listar: () => api.get<{ pedidos: PedidoApi[] }>('/pedidos'),
  crear: (datos: {
    comercioId: string;
    direccionTexto?: string;
    direccionId?: string;
    metodoPago?: string;
    items: Array<{ productoId: string; escalon: number }>;
  }) => api.post<{ id: string; codigo: string; total: number }>('/pedidos', datos),
};

export const direccionesApi = {
  listar: () =>
    api.get<{
      direcciones: Array<{
        id: string;
        etiqueta: string;
        direccion: string;
        lat: number | null;
        lon: number | null;
        es_principal: number;
      }>;
    }>('/direcciones'),
  crear: (datos: { etiqueta: string; direccion: string; lat?: number; lon?: number }) =>
    api.post<{ id: string }>('/direcciones', datos),
};

export const favoritosApi = {
  listar: () => api.get<{ favoritos: ComercioApi[] }>('/favoritos'),
  agregar: (comercioId: string) => api.post<{ ok: true }>(`/favoritos/${comercioId}`),
  quitar: (comercioId: string) => api.delete<{ ok: true }>(`/favoritos/${comercioId}`),
};

export const mediaApi = {
  /** Sube un archivo ya comprimido y devuelve su URL pública. */
  subir: (archivo: Blob, nombre: string) => {
    const formulario = new FormData();

    formulario.append('archivo', archivo, nombre);

    return api.post<{ clave: string; url: string }>('/media', formulario);
  },
};
