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
    }>(`/comercios/${id}`),
  crear: (datos: Record<string, unknown>) =>
    api.post<{ id: string; nombre: string; estado: string }>('/comercios', datos),
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
