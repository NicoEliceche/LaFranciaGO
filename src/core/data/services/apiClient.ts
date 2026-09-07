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
  /** Con qué roles puede entrar. Llega en /auth/yo; en login todavía no. */
  roles?: string[];
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
  /** Cuánto ocupa: decide si el pedido entra en una moto. */
  tamano?: string;
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
  /* Pide el enlace por correo. Responde igual exista o no la cuenta: la
     respuesta no revela quién está registrado. */
  recuperar: (email: string) =>
    api.post<{ ok: true; mensaje: string }>('/auth/recuperar', { email }),
  confirmarRecuperacion: (token: string, password: string) =>
    api.post<{ ok: true }>('/auth/recuperar/confirmar', { token, password }),
  /* Cambia desde qué rol se mira la app. No es un login nuevo: la persona
     es la misma, sólo cambia el lugar desde el que mira. */
  cambiarRol: (rol: string) => api.post<{ ok: true; rol: string }>('/auth/rol', { rol }),
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
  /** Los números de la plataforma: qué necesita atención y cómo viene todo. */
  metricas: () => api.get<MetricasAdminApi>('/admin/metricas'),
  /** Suspender un comercio o marcarlo destacado. */
  actualizarComercio: (id: string, datos: { estado?: string; premium?: boolean }) =>
    api.patch<{ ok: true }>(`/admin/comercios/${id}`, datos),
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

/** Una oferta vista desde la portada: incluye de qué comercio es. */
export interface OfertaPortadaApi extends OfertaApi {
  comercioId: string;
  comercio: string;
  rubroId: string;
}

export const ofertasApi = {
  portada: () => api.get<{ ofertas: OfertaPortadaApi[] }>('/ofertas'),
};

export const miComercioApi = {
  ver: () =>
    api.get<{ comercio: ComercioApi | null; productos: ProductoApi[] }>('/mi-comercio'),
  crearProducto: (datos: Record<string, unknown>) =>
    api.post<{ id: string }>('/productos', datos),
  editarProducto: (id: string, datos: Record<string, unknown>) =>
    api.patch<{ ok: true }>(`/productos/${id}`, datos),
  borrarProducto: (id: string) => api.delete<{ ok: true }>(`/productos/${id}`),
  ofertas: () => api.get<{ ofertas: OfertaApi[] }>('/mi-comercio/ofertas'),
  metricas: () => api.get<MetricasComercioApi>('/mi-comercio/metricas'),
  /** Avanza la preparación: recibido → preparando → listo. */
  prepararPedido: (pedidoId: string, estado: Preparacion) =>
    api.post<{ ok: true; preparacion: Preparacion }>(
      `/mi-comercio/pedidos/${pedidoId}/preparacion`,
      { estado },
    ),
  fraccionamientos: () =>
    api.get<{ fraccionamientos: FraccionamientoApi[] }>('/mi-comercio/fraccionamientos'),
  resolverFraccionamiento: (id: string, decision: 'aprobado' | 'rechazado') =>
    api.post<{ ok: true; estado: string }>(`/mi-comercio/fraccionamientos/${id}`, { decision }),
  crearOferta: (datos: NuevaOferta) =>
    api.post<{ id: string; precioLista: number; precioFinal: number }>(
      '/mi-comercio/ofertas',
      datos as unknown as Record<string, unknown>,
    ),
  borrarOferta: (id: string) => api.delete<{ ok: true }>(`/mi-comercio/ofertas/${id}`),
  activarOferta: (id: string, activa: boolean) =>
    api.patch<{ ok: true }>(`/mi-comercio/ofertas/${id}`, { activa }),
};

/** Los números del comercio, calculados sobre sus pedidos reales. */
export interface MetricasComercioApi {
  hoy: { pedidos: number; ventas: number };
  ayer: { pedidos: number; ventas: number };
  semana: { pedidos: number; ventas: number };
  semanaPrevia: { pedidos: number; ventas: number };
  enProceso: number;
  productos: number;
  ofertas: number;
  ticketPromedio: number;
  masVendidos: Array<{ nombre: string; unidades: number; total: number }>;
}

/** En qué punto está el pedido dentro del comercio. */
export type Preparacion = 'recibido' | 'preparando' | 'listo';

export interface PedidoComercioApi {
  id: string;
  codigo: string;
  estado: 'proceso' | 'terminado' | 'cancelado';
  preparacion: Preparacion;
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
  /* Cuánto ocupa y si le entra a quien mira: decide si puede tomarlo. */
  litros?: number;
  entraEnTuVehiculo?: boolean;
  viajes?: number;
  vehiculos?: Vehiculo[];
  preferencia_envio?: PreferenciaEnvio;
  parte_numero?: number | null;
  partes_total?: number | null;
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

export interface FraccionamientoApi {
  id: string;
  partes: number;
  motivo: string | null;
  entraba: number;
  creado_en: string;
  codigo: string;
  volumen_litros: number;
  repartidor: string;
}

export const deliveryApi = {
  disponibles: (lat?: number, lon?: number) => {
    const params = new URLSearchParams();

    if (typeof lat === 'number' && typeof lon === 'number') {
      params.set('lat', String(lat));
      params.set('lon', String(lon));
    }

    const query = params.toString();

    return api.get<{ pedidos: PedidoDisponibleApi[]; vehiculo: Vehiculo }>(
      `/delivery/disponibles${query ? `?${query}` : ''}`,
    );
  },
  detalle: (id: string) => api.get<DetallePedidoApi>(`/delivery/pedidos/${id}`),
  tomar: (id: string, lat?: number, lon?: number) =>
    api.post<{ ok: true }>(`/delivery/pedidos/${id}/tomar`, { lat, lon }),
  actualizarUbicacion: (lat: number, lon: number) =>
    api.post<{ ok: true }>('/delivery/ubicacion', { lat, lon }),
  /** Los pedidos que este repartidor ya tomó y todavía tiene en la mano. */
  misEnvios: () => api.get<{ envios: EnvioAsignadoApi[] }>('/delivery/mis-envios'),
  /** Avanza al paso siguiente: retirado, en camino, entregado. */
  avanzar: (envioId: string, estado: EstadoEnvio) =>
    api.post<{ ok: true; estado: EstadoEnvio }>(`/delivery/envios/${envioId}/estado`, { estado }),
  /** Con qué vehículo trabaja: decide qué pedidos puede tomar. */
  verVehiculo: () =>
    api.get<{ roles: Array<{ rol: string; vehiculo: Vehiculo | null }> }>('/delivery/vehiculo'),
  elegirVehiculo: (vehiculo: Vehiculo, rol: 'delivery' | 'fletero') =>
    api.post<{ ok: true; vehiculo: Vehiculo }>('/delivery/vehiculo', { vehiculo, rol }),
  /** Pide partir un pedido. Si la app dice que entraba, lo decide el comercio. */
  pedirFraccionar: (pedidoId: string, partes: number, motivo?: string) =>
    api.post<{ ok: true; estado: 'pendiente' | 'aprobado'; partes: number }>(
      `/delivery/pedidos/${pedidoId}/fraccionar`,
      { partes, motivo },
    ),
};

/** Los pasos por los que pasa un envío, en orden. */
export type EstadoEnvio = 'asignado' | 'retirado' | 'en_camino' | 'entregado';

export interface EnvioAsignadoApi {
  id: string;
  estado: EstadoEnvio;
  asignado_en: string | null;
  entregado_en: string | null;
  pedido_id: string;
  codigo: string;
  direccion_texto: string;
  total: number;
  metodo_pago: string | null;
  comercio: string;
  comercio_direccion: string;
  comercio_telefono: string | null;
  cliente: string;
  cliente_telefono: string | null;
  items: number;
}

export const pedidosApi = {
  listar: () => api.get<{ pedidos: PedidoApi[] }>('/pedidos'),
  crear: (datos: {
    comercioId: string;
    direccionTexto?: string;
    direccionId?: string;
    metodoPago?: string;
    preferenciaEnvio?: PreferenciaEnvio;
    items: Array<{ productoId: string; escalon: number }>;
  }) =>
    api.post<{
      id: string;
      codigo: string;
      total: number;
      litros: number;
      partes: number;
      vehiculos: Vehiculo[];
    }>('/pedidos', datos),
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

export interface NotificacionApi {
  id: string;
  tipo: 'pedido' | 'envio' | 'oferta' | 'postulacion' | 'chat' | 'pago';
  titulo: string;
  texto: string | null;
  enlace: string | null;
  leida_en: string | null;
  creado_en: string;
}

/** Qué vehículos hay, por tipo de cuenta. */
export type Vehiculo = 'moto' | 'auto' | 'camioneta' | 'camion';

/** Qué prefiere el cliente para su entrega. */
export type PreferenciaEnvio = 'cualquiera' | 'auto' | 'fraccionar';

export const NOMBRE_VEHICULO: Record<Vehiculo, string> = {
  moto: 'Moto',
  auto: 'Auto',
  camioneta: 'Camioneta',
  camion: 'Camión',
};

export interface SeguimientoApi {
  pedido: {
    codigo: string;
    estado: string;
    preparacion: Preparacion;
    direccion_texto: string;
    parte_numero: number | null;
    partes_total: number | null;
    comercio: string;
    comercio_direccion: string;
    comercio_lat: number | null;
    comercio_lon: number | null;
    destino_lat: number | null;
    destino_lon: number | null;
    envio_estado: string | null;
    lat: number | null;
    lon: number | null;
    ubicacion_en: string | null;
    asignado_en: string | null;
    repartidor: string | null;
    repartidor_telefono: string | null;
    vehiculo: Vehiculo | null;
  };
  partes: Array<{
    id: string;
    codigo: string;
    parte_numero: number;
    estado: string;
    envio_estado: string | null;
    lat: number | null;
    lon: number | null;
    ubicacion_en: string | null;
    repartidor: string | null;
  }>;
}

export const seguimientoApi = {
  ver: (pedidoId: string) => api.get<SeguimientoApi>(`/pedidos/${pedidoId}/seguimiento`),
};

export interface MetricasAdminApi {
  hoy: { pedidos: number; ventas: number; comision: number };
  ayer: { pedidos: number; ventas: number };
  semana: { pedidos: number; ventas: number; comision: number };
  semanaPrevia: { pedidos: number; ventas: number };
  comisionTotal: number;
  ticketPromedio: number;
  pendientes: {
    postulaciones: number;
    fraccionamientos: number;
    pedidosTrabados: number;
    comercios: number;
  };
  reparto: { activos: number; entregasSemana: number; enCurso: number; registrados: number };
  comercios: Array<{
    id: string;
    nombre: string;
    rubro: string;
    premium: boolean;
    estado: string;
    pedidos: number;
    ventas: number;
  }>;
}

export const notificacionesApi = {
  listar: () =>
    api.get<{ notificaciones: NotificacionApi[]; sinLeer: number }>('/notificaciones'),
  /** Sin ids se marcan todas: es lo que hace abrir el panel. */
  marcarLeidas: (ids?: string[]) =>
    api.post<{ ok: true }>('/notificaciones/leidas', { ids: ids ?? [] }),
};

export const pagosApi = {
  /** Devuelve a dónde mandar al cliente para pagar. */
  iniciar: (pedidoId: string) =>
    api.post<{ url: string; preferenciaId: string }>(`/pedidos/${pedidoId}/pagar`),
  estado: (pedidoId: string) =>
    api.get<{ estado: string; metodo: string | null; monto: number | null }>(
      `/pedidos/${pedidoId}/pago`,
    ),
  /** El comercio conecta su cuenta de Mercado Pago para cobrar. */
  conectarComercio: () => api.get<{ url: string }>('/pagos/conectar'),
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
