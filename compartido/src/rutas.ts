/**
 * Los tipos y las llamadas de la API.
 *
 * Es la parte del cliente que no cambia entre la web y el teléfono: las
 * mismas rutas, los mismos campos. Lo único distinto es de dónde sale la
 * dirección del servidor y cómo viaja la sesión, y eso vive en
 * configuracion.ts.
 *
 * Tener una sola copia evita el problema clásico de dos aplicaciones contra
 * el mismo backend: que una agregue un campo y la otra se entere cuando algo
 * falla en producción.
 */
import { api } from './api';

export { ApiError } from './api';
export { hayBackend } from './configuracion';

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
  /* Si está atendiendo ahora, según sus horarios cargados. */
  abierto?: boolean;
  proximaApertura?: { dia: string; hora: string; esHoy: boolean; esManana: boolean } | null;
  puntaje?: number | null;
  resenas_count?: number;
  rubro_id: string;
  rubro_nombre: string;
  direccion: string;
  lat: number | null;
  lon: number | null;
  horario: string | null;
  zona: string | null;
  descripcion: string | null;
  logo_url: string | null;
  /* Dos planes distintos: `premium` mejora la posición en el listado,
     `gestionActiva` abre el sistema de gestión. Se cobran por separado. */
  premium: boolean;
  gestionActiva: boolean;
  /**
   * Si el comercio reparte con gente suya.
   *
   * `null` es que todavía no contestó, que no es lo mismo que haber dicho
   * que no: en los dos casos no se ofrece el retiro por el comercio, pero
   * sólo al primero tiene sentido pedirle que lo complete.
   */
  deliveryPropio: boolean | null;
  /** Con qué reparte. Sólo tiene sentido si `deliveryPropio` es true. */
  deliveryVehiculo: 'moto' | 'auto' | null;
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
  /** Lo que le cuesta al comercio. Null es "no lo cargó", que no es cero. */
  costo?: number | null;
  /** El código impreso, para cobrarlo con la lectora del mostrador. */
  codigoBarras?: string | null;
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


/** Una línea del registro, como se ve en la lista. */
export interface LineaRegistroApi {
  id: string;
  nivel: 'error' | 'aviso' | 'info';
  area: string | null;
  mensaje: string;
  ruta: string | null;
  metodo: string | null;
  estado: number | null;
  usuario_id: string | null;
  ip: string | null;
  ms: number | null;
  creado_en: string;
}

/** La misma línea con el detalle completo: el stack y el cuerpo. */
export interface DetalleRegistroApi extends LineaRegistroApi {
  detalle: string | null;
}

export const registroApi = {
  /** Las últimas cien, con los filtros que se apliquen. */
  ver: (filtros: { nivel?: string; area?: string; buscar?: string; desde?: number } = {}) => {
    const p = new URLSearchParams();

    if (filtros.nivel) p.set('nivel', filtros.nivel);
    if (filtros.area) p.set('area', filtros.area);
    if (filtros.buscar) p.set('buscar', filtros.buscar);
    if (filtros.desde) p.set('desde', String(filtros.desde));

    const cola = p.toString();

    return api.get<{
      lineas: LineaRegistroApi[];
      resumen: Array<{ nivel: string; cuantas: number }>;
      total: number;
    }>(`/admin/registro${cola ? `?${cola}` : ''}`);
  },

  /** El detalle de una, con el stack y el cuerpo que la provocó. */
  linea: (id: string) => api.get<{ linea: DetalleRegistroApi }>(`/admin/registro/${id}`),

  /** Qué áreas existen, para armar el filtro. */
  areas: () => api.get<{ areas: Array<{ area: string; cuantas: number }> }>('/admin/registro/areas'),
};

/** Avisar que algo no funcionó. */
export const soporteApi = {
  /**
   * Manda el reporte al equipo.
   *
   * No pide sesión: quien no puede entrar es justamente el que más necesita
   * reportarlo. Si la hay, el correo llega con su email y su rol.
   */
  reportar: (datos: {
    comentario: string;
    registroId?: string | null;
    pantalla?: string;
    /**
     * El error técnico, cuando no llegó a quedar anotado del otro lado.
     *
     * Si la petición nunca salió de la máquina —sin internet, CORS— no hay
     * nada registrado en el servidor, así que el reporte llegaría vacío. Esto
     * es lo único que queda para saber qué pasó.
     */
    tecnico?: string | null;
  }) =>
    api.post<{ ok: true; porCorreo: boolean }>('/soporte', datos),
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

/** Cuál de los dos planes del sistema de gestión. */
export type PlanGestionId = 'go' | 'pro';

export interface PlanGestionOpcion {
  id: PlanGestionId;
  nombre: string;
  /* El precio viene del backend y no se escribe en la pantalla: si estuviera
     en los dos lados, el día que cambie uno quedaría mintiendo. Y el que
     cobra es el servidor, así que es el único que puede decirlo. */
  precioCentavos: number;
  precio: number;
}

export interface PlanGestionApi {
  activo: boolean;
  desde: string | null;
  /** Cuál tiene contratado, si tiene alguno. */
  plan: PlanGestionId | null;
  /** Qué secciones son sólo del PRO, según el servidor. */
  soloPro: string[];
  planes: PlanGestionOpcion[];
}

export const planGestionApi = {
  ver: () => api.get<PlanGestionApi>('/plan-gestion'),
  contratar: (plan: PlanGestionId) =>
    api.post<{ activo: true; plan: PlanGestionId }>('/plan-gestion', { plan }),
  darDeBaja: () => api.delete<{ activo: false }>('/plan-gestion'),
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
  /** Corregir los datos del comercio: dirección, teléfono, logo. */
  editar: (datos: Record<string, unknown>) => api.patch<{ ok: true }>('/mi-comercio', datos),
  horarios: () =>
    api.get<{ horarios: HorarioApi[]; dias: string[] }>('/mi-comercio/horarios'),
  guardarHorarios: (horarios: Array<{ dia: number; abre: string; cierra: string }>) =>
    api.put<{ ok: true; tramos: number }>('/mi-comercio/horarios', { horarios }),
  /** null significa "no llevo control", que es distinto de cero. */
  ajustarStock: (productoId: string, stock: number | null) =>
    api.post<{ ok: true; stock: number | null; estado: string }>(
      `/mi-comercio/productos/${productoId}/stock`,
      { stock },
    ),
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

  /**
   * Cuanto debe de lo cobrado en efectivo, y a donde transferirlo.
   *
   * Los datos de cobro vienen del servidor: si cambia el alias, cambia una
   * vez y no hay que publicar la aplicacion de nuevo.
   */
  deuda: () => api.get<DeudaApi>('/delivery/deuda'),

  /** Declara que transfirio parte de lo que debe. */
  pagarDeuda: (monto: number, nota?: string) =>
    api.post<{ ok: true }>('/delivery/deuda/pagar', { monto, nota }),
  /** Avanza al paso siguiente: retirado, en camino, entregado. */
  avanzar: (envioId: string, estado: EstadoEnvio) =>
    api.post<{ ok: true; estado: EstadoEnvio }>(`/delivery/envios/${envioId}/estado`, { estado }),
  /** Cuánto ganó y qué entregó. */
  ganancias: () => api.get<GananciasApi>('/delivery/ganancias'),
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

/** Un mensaje del chat del pedido. */
export interface MensajeChatApi {
  id: string;
  texto: string | null;
  /* 'sistema' lo escribe la app; 'extra' es un pedido de algo más. */
  tipo: 'texto' | 'foto' | 'audio' | 'sistema' | 'extra';
  media_url: string | null;
  extra_id: string | null;
  autor_id: string;
  autor: string;
  creado_en: string;
}

export const pedidosApi = {
  listar: () => api.get<{ pedidos: PedidoApi[] }>('/pedidos'),
  /** Dar de baja un pedido. Se puede hasta que sale del comercio. */
  cancelar: (pedidoId: string, motivo?: string) =>
    api.post<{ ok: true; pagado: boolean; aviso: string | null }>(
      `/pedidos/${pedidoId}/cancelar`,
      { motivo },
    ),
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
    /** Errores del último día. Un acumulado histórico no diría si algo se
        está rompiendo ahora, que es lo que se mira. */
    erroresHoy: number;
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

/** Un extra: algo que el cliente pide y no estaba en el pedido. */
export type EstadoExtra =
  | 'pedido'
  | 'aceptado'
  | 'comprado'
  | 'cobrado'
  | 'rechazado'
  | 'cancelado';

export interface ExtraApi {
  id: string;
  descripcion: string;
  estado: EstadoExtra;
  precio: number | null;
  ticket_url: string | null;
  motivo: string | null;
  cancelado_por: string | null;
  /* Una cancelación del cliente sobre algo ya comprado espera que el
     repartidor la acepte: puso la plata de su bolsillo. */
  espera_confirmacion: number;
  repartidor: string | null;
  creado_en: string;
}

export const extrasApi = {
  listar: (pedidoId: string) =>
    api.get<{
      extras: ExtraApi[];
      motivosRechazo: string[];
      motivosCancelacion: string[];
    }>(`/pedidos/${pedidoId}/extras`),
  pedir: (pedidoId: string, descripcion: string) =>
    api.post<{ id: string; estado: EstadoExtra }>(`/pedidos/${pedidoId}/extras`, {
      descripcion,
    }),
  /* El motivo viaja como índice de la lista: así una corrección de texto no
     invalida lo que manda una pantalla vieja. */
  accion: (
    extraId: string,
    datos: {
      accion: 'aceptar' | 'rechazar' | 'comprar' | 'cancelar' | 'confirmar-cancelacion' | 'rechazar-cancelacion';
      motivo?: number;
      precio?: number;
      ticketUrl?: string;
    },
  ) => api.post<{ ok: true; estado: EstadoExtra; esperaConfirmacion?: boolean }>(
    `/extras/${extraId}`,
    datos,
  ),
  pagar: (pedidoId: string) =>
    api.post<{ url: string; total: number }>(`/pedidos/${pedidoId}/extras/pagar`),
};

/** Un tramo de atención: un comercio puede cerrar al mediodía. */
export interface HorarioApi {
  id: string;
  dia: number;
  abre: string;
  cierra: string;
  abre_min: number;
  cierra_min: number;
}

export interface ResenaApi {
  puntaje_comercio: number;
  comentario: string | null;
  creado_en: string;
  cliente: string;
}

export interface CotizacionApi {
  id: string;
  precio: number;
  distancia_km: number | null;
  nota: string | null;
  estado: 'pendiente' | 'aceptada' | 'rechazada' | 'vencida';
  creado_en: string;
  fletero: string;
}

export interface ReclamoApi {
  id: string;
  motivo: string;
  detalle: string | null;
  estado: 'abierto' | 'en_revision' | 'resuelto' | 'cerrado';
  resolucion: string | null;
  creado_en: string;
  codigo: string;
  direccion_texto: string;
  comercio: string;
  abrio: string;
  repartidor: string | null;
}

export interface MensajeReclamoApi {
  id: string;
  texto: string;
  creado_en: string;
  autor_id: string;
  autor: string;
  rol: 'admin' | 'comercio' | 'repartidor';
}

/** Cuánto ganó quien reparte, y qué entregó. */
export interface GananciasApi {
  hoy: { entregas: number; gano: number };
  semana: { entregas: number; gano: number };
  total: { entregas: number; gano: number };
  historial: Array<{
    codigo: string;
    direccion_texto: string;
    comercio: string;
    tipo: string;
    gano: number;
    entregado_en: string;
    asignado_en: string;
  }>;
}

export const resenasApi = {
  puntuar: (
    pedidoId: string,
    datos: { comercio: number; repartidor?: number; comentario?: string },
  ) => api.post<{ ok: true }>(`/pedidos/${pedidoId}/resena`, datos),
  deComercio: (comercioId: string) =>
    api.get<{ resenas: ResenaApi[]; puntaje: number | null; total: number }>(
      `/comercios/${comercioId}/resenas`,
    ),
};

export const reclamosApi = {
  abrir: (pedidoId: string, motivo: string, detalle?: string) =>
    api.post<{ id: string; yaExistia?: boolean }>(`/pedidos/${pedidoId}/reclamo`, {
      motivo,
      detalle,
    }),
  listar: () => api.get<{ reclamos: ReclamoApi[]; esAdmin: boolean }>('/reclamos'),
  mensajes: (reclamoId: string) =>
    api.get<{ mensajes: MensajeReclamoApi[]; yo: string }>(`/reclamos/${reclamoId}/mensajes`),
  escribir: (reclamoId: string, texto: string) =>
    api.post<{ ok: true }>(`/reclamos/${reclamoId}/mensajes`, { texto }),
  resolver: (reclamoId: string, resolucion: string) =>
    api.post<{ ok: true }>(`/reclamos/${reclamoId}/resolver`, { resolucion }),
};

export const fletesApi = {
  cotizar: (pedidoId: string, precio: number, nota?: string) =>
    api.post<{ id: string; precio: number; distanciaKm: number | null }>(
      `/fletes/${pedidoId}/cotizar`,
      { precio, nota },
    ),
  cotizaciones: (pedidoId: string) =>
    api.get<{ cotizaciones: CotizacionApi[] }>(`/fletes/${pedidoId}/cotizaciones`),
  aceptar: (cotizacionId: string) =>
    api.post<{ ok: true }>(`/cotizaciones/${cotizacionId}/aceptar`),
};

/** Un mandado: un encargo sin comercio detrás. */
export interface MandadoApi {
  id: string;
  descripcion: string;
  direccion_texto: string | null;
  estado: string;
  creado_en: string;
  repartidor: string | null;
  /** 'mandado' lo lleva cualquiera; 'flete' necesita camioneta o camión. */
  tipo: 'mandado' | 'flete';
}

/** Un movimiento de la cuenta de efectivo de quien reparte. */
export interface MovimientoEfectivoApi {
  id: string;
  /** 'cobro' es lo que paso a deber; 'pago', lo que ya transfirio. */
  tipo: 'cobro' | 'pago';
  monto: number;
  creado_en: string;
  nota: string | null;
  /** El pedido del que salio, cuando es un cobro. */
  codigo: string | null;
}

/** Lo que debe quien reparte, con el detalle y a donde pagarlo. */
export interface DeudaApi {
  deuda: number;
  movimientos: MovimientoEfectivoApi[];
  cobro: {
    titular: string;
    cbu: string | null;
    alias: string | null;
    mercadopago: string | null;
  };
}

export const mandadosApi = {
  /**
   * Crea el mandado en la base.
   *
   * Antes vivía sólo en memoria del navegador: se podía pedir, pero al
   * recargar desaparecía y no figuraba en "Mis pedidos" ni le llegaba a
   * ningún repartidor.
   */
  crear: (datos: {
    descripcion: string;
    direccionTexto?: string;
    lat?: number;
    lon?: number;
    tipo?: 'mandado' | 'flete';
  }) => api.post<{ id: string; tipo: string }>('/mandados', datos),

  mios: () => api.get<{ mandados: MandadoApi[] }>('/mandados'),

  /**
   * Quien reparte se queda con el mandado.
   *
   * Va por su propia puerta y no por la de los pedidos: un mandado no sale
   * de un comercio, asi que no hay nada que avisarle al negocio ni stock que
   * descontar.
   */
  tomar: (mandadoId: string) => api.post<{ ok: true }>(`/mandados/${mandadoId}/tomar`),
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

/* ── El sistema de gestión ── */

export interface CajaApi {
  id: string;
  inicial_centavos: number;
  esperado_centavos: number;
  abierta_en: string;
}

export interface MovimientoCajaApi {
  id: string;
  tipo: 'venta' | 'retiro' | 'deposito' | 'egreso' | 'ajuste';
  monto_centavos: number;
  concepto: string | null;
  venta_id: string | null;
  creado_en: string;
  creado_por_nombre: string;
}

export interface CierreApi {
  id: string;
  inicial_centavos: number;
  contado_centavos: number;
  esperado_centavos: number;
  diferencia_centavos: number;
  abierta_en: string;
  cerrada_en: string;
}

export interface VentaApi {
  id: string;
  numero: number;
  cliente_nombre: string | null;
  total_centavos: number;
  cobrado_centavos: number;
  costo_centavos: number;
  descuento_centavos: number;
  estado: string;
  creado_en: string;
  vendedor_nombre: string;
  items: number;
  /** Las formas de pago usadas, separadas por coma. */
  metodos: string | null;
}

export interface TotalesVentasApi {
  cantidad: number;
  total: number;
  cobrado: number;
  adeudado: number;
  ganancia: number;
}

export interface ProductoMostradorApi {
  id: string;
  nombre: string;
  precio_centavos: number;
  costo_centavos: number | null;
  stock: number | null;
  codigo_barras: string | null;
  unidad_venta: string;
}

export type MetodoPago = 'efectivo' | 'transferencia' | 'tarjeta' | 'cheque' | 'cuenta_corriente';

export interface FiltroVentas {
  desde?: string;
  hasta?: string;
  pago?: 'cobrada' | 'debe';
  q?: string;
  pagina?: number;
  porPagina?: number;
}

export const gestionApi = {
  /* ── Caja ── */
  caja: () =>
    api.get<{ caja: CajaApi | null; movimientos?: MovimientoCajaApi[]; anteriores?: CierreApi[] }>(
      '/gestion/caja',
    ),
  abrirCaja: (inicialCentavos: number) =>
    api.post<{ id: string; inicial_centavos: number }>('/gestion/caja/abrir', { inicialCentavos }),
  movimiento: (datos: {
    tipo: 'retiro' | 'deposito' | 'egreso' | 'ajuste';
    montoCentavos: number;
    concepto?: string;
  }) => api.post<{ id: string; esperado_centavos: number }>('/gestion/caja/movimiento', datos),
  cerrarCaja: (contadoCentavos: number, nota?: string) =>
    api.post<{
      contado_centavos: number;
      esperado_centavos: number;
      diferencia_centavos: number;
    }>('/gestion/caja/cerrar', { contadoCentavos, nota }),

  /* ── Ventas ── */
  ventas: (filtro: FiltroVentas = {}) => {
    const busca = new URLSearchParams();

    for (const [clave, valor] of Object.entries(filtro)) {
      if (valor !== undefined && valor !== '') busca.set(clave, String(valor));
    }

    const consulta = busca.toString();

    return api.get<{
      ventas: VentaApi[];
      totales: TotalesVentasApi;
      pagina: number;
      porPagina: number;
    }>(`/gestion/ventas${consulta ? `?${consulta}` : ''}`);
  },
  crearVenta: (datos: {
    items: Array<{
      productoId?: string | null;
      nombre?: string;
      cantidadMilesimos: number;
      precioCentavos?: number;
    }>;
    pagos?: Array<{ metodo: MetodoPago; montoCentavos: number; nota?: string }>;
    clienteNombre?: string;
    /** Obligatorio cuando algún pago es fiado: sin cuenta no se puede fiar. */
    cuentaFiadoId?: string;
    descuentoCentavos?: number;
    nota?: string;
  }) =>
    api.post<{ id: string; numero: number; total_centavos: number; costo_centavos: number }>(
      '/gestion/ventas',
      datos,
    ),
  cobrar: (ventaId: string, pago: { metodo: MetodoPago; montoCentavos: number; nota?: string }) =>
    api.post<{ cobrado_centavos: number }>(`/gestion/ventas/${ventaId}/pagos`, pago),

  /** Busca por nombre o por el código que lee la pistola. */
  buscar: (termino: string) =>
    api.get<{ productos: ProductoMostradorApi[] }>(
      `/gestion/buscar?q=${encodeURIComponent(termino)}`,
    ),
};

/* ── Fiado ── */

export interface CuentaFiadoApi {
  id: string;
  nombre: string;
  telefono: string | null;
  nota: string | null;
  tope_centavos: number | null;
  activa: number;
  saldo_centavos: number;
  ultimo_movimiento: string | null;
}

export interface MovimientoFiadoApi {
  id: string;
  monto_centavos: number;
  concepto: string | null;
  venta_id: string | null;
  venta_numero: number | null;
  metodo: string | null;
  creado_en: string;
  creado_por_nombre: string;
}

export const fiadoApi = {
  listar: () =>
    api.get<{ cuentas: CuentaFiadoApi[]; totalAdeudado: number }>('/gestion/fiado'),
  crear: (datos: { nombre: string; telefono?: string; nota?: string; topeCentavos?: number | null }) =>
    api.post<{ id: string; nombre: string }>('/gestion/fiado', datos),
  detalle: (id: string) =>
    api.get<{ cuenta: CuentaFiadoApi; movimientos: MovimientoFiadoApi[] }>(`/gestion/fiado/${id}`),
  cobrar: (id: string, datos: { montoCentavos: number; metodo: MetodoPago; concepto?: string }) =>
    api.post<{ saldo_centavos: number }>(`/gestion/fiado/${id}/pagos`, datos),
};

/* ── Compras y proveedores ── */

export interface ProveedorApi {
  id: string;
  nombre: string;
  telefono: string | null;
  email: string | null;
  cuit: string | null;
  activo: number;
  deuda_centavos: number;
  compras: number;
}

export interface CompraApi {
  id: string;
  numero: number;
  comprobante: string | null;
  total_centavos: number;
  pagado_centavos: number;
  estado: string;
  fecha: string;
  creado_en: string;
  proveedor_nombre: string | null;
  items: number;
}

export const comprasApi = {
  proveedores: () =>
    api.get<{ proveedores: ProveedorApi[]; totalDeuda: number }>('/gestion/proveedores'),
  crearProveedor: (datos: {
    nombre: string;
    telefono?: string;
    email?: string;
    cuit?: string;
    direccion?: string;
  }) => api.post<{ id: string; nombre: string }>('/gestion/proveedores', datos),

  listar: (filtro: { pago?: 'pagada' | 'debe'; pagina?: number } = {}) => {
    const busca = new URLSearchParams();

    for (const [clave, valor] of Object.entries(filtro)) {
      if (valor !== undefined) busca.set(clave, String(valor));
    }

    const consulta = busca.toString();

    return api.get<{
      compras: CompraApi[];
      totales: { cantidad: number; total: number; pagado: number; adeudado: number };
      pagina: number;
    }>(`/gestion/compras${consulta ? `?${consulta}` : ''}`);
  },
  crear: (datos: {
    proveedorId?: string;
    comprobante?: string;
    fecha?: string;
    nota?: string;
    items: Array<{
      productoId?: string | null;
      nombre?: string;
      cantidadMilesimos: number;
      costoCentavos: number;
    }>;
    pagos?: Array<{ metodo: MetodoPago; montoCentavos: number }>;
  }) =>
    api.post<{ id: string; numero: number; total_centavos: number }>('/gestion/compras', datos),
  pagar: (compraId: string, pago: { metodo: MetodoPago; montoCentavos: number }) =>
    api.post<{ pagado_centavos: number }>(`/gestion/compras/${compraId}/pagos`, pago),
};

/* ── Informes ── */

export interface InformeApi {
  periodo: { desde: string; hasta: string };
  ventas: { cantidad: number; total: number; costo: number; cobrado: number; adeudado: number };
  compras: { cantidad: number; total: number; adeudado: number };
  ganancia: number;
  /** Porcentaje con un decimal: 38.7 es 38,7%. */
  margen: number;
  porDia: Array<{ dia: string; ventas: number; total: number; ganancia: number }>;
  productos: Array<{ nombre: string; unidades: number; total: number; ganancia: number }>;
  metodos: Array<{ metodo: string; veces: number; total: number }>;
  cierres: Array<{
    id: string;
    cerrada_en: string;
    contado_centavos: number;
    esperado_centavos: number;
    diferencia_centavos: number;
  }>;
}

export const informesApi = {
  general: (rango: { desde?: string; hasta?: string } = {}) => {
    const busca = new URLSearchParams();

    for (const [clave, valor] of Object.entries(rango)) {
      if (valor) busca.set(clave, valor);
    }

    const consulta = busca.toString();

    return api.get<InformeApi>(`/gestion/informes${consulta ? `?${consulta}` : ''}`);
  },
  porReponer: (limite = 5) =>
    api.get<{
      productos: Array<{
        id: string;
        nombre: string;
        stock: number;
        precio_centavos: number;
        costo_centavos: number | null;
        codigo_barras: string | null;
      }>;
      limite: number;
    }>(`/gestion/informes/stock?limite=${limite}`),
};

/* ── Clientes y presupuestos ── */

export interface ClienteApi {
  id: string;
  nombre: string;
  telefono: string | null;
  email: string | null;
  direccion: string | null;
  nota: string | null;
  activo: number;
  usuario_id: string | null;
  compras: number;
  gastado_centavos: number;
  debe_centavos: number;
  ultima_compra: string | null;
}

export interface PresupuestoApi {
  id: string;
  numero: number;
  cliente_nombre: string | null;
  cliente_ficha_nombre: string | null;
  total_centavos: number;
  costo_centavos: number;
  estado: 'pendiente' | 'aceptado' | 'rechazado';
  vence_el: string;
  creado_en: string;
  venta_id: string | null;
  items: number;
  /** 1 cuando está pendiente y la fecha ya pasó. */
  vencido: number;
}

export const clientesApi = {
  listar: (busqueda?: string) =>
    api.get<{ clientes: ClienteApi[] }>(
      `/gestion/clientes${busqueda ? `?q=${encodeURIComponent(busqueda)}` : ''}`,
    ),
  crear: (datos: {
    nombre: string;
    telefono?: string;
    email?: string;
    direccion?: string;
    nota?: string;
  }) => api.post<{ id: string; nombre: string }>('/gestion/clientes', datos),
  ficha: (id: string) =>
    api.get<{
      cliente: ClienteApi;
      ventas: Array<{
        id: string;
        numero: number;
        total_centavos: number;
        cobrado_centavos: number;
        creado_en: string;
      }>;
      pedidos: Array<{
        id: string;
        codigo: string;
        total_centavos: number;
        estado: string;
        creado_en: string;
      }>;
      presupuestos: PresupuestoApi[];
      favoritos: Array<{ nombre: string; unidades: number; total: number }>;
    }>(`/gestion/clientes/${id}`),
};

export const presupuestosApi = {
  listar: (estado?: 'pendiente' | 'aceptado' | 'rechazado') =>
    api.get<{
      presupuestos: PresupuestoApi[];
      totales: { cantidad: number; pendiente: number; aceptado: number };
    }>(`/gestion/presupuestos${estado ? `?estado=${estado}` : ''}`),
  crear: (datos: {
    items: Array<{ productoId?: string | null; cantidadMilesimos: number; precioCentavos?: number }>;
    clienteId?: string;
    clienteNombre?: string;
    diasValidez?: number;
    nota?: string;
  }) =>
    api.post<{ id: string; numero: number; total_centavos: number; dias: number }>(
      '/gestion/presupuestos',
      datos,
    ),
  aceptar: (id: string, datos: { pagos?: Array<{ metodo: MetodoPago; montoCentavos: number }>; igualmente?: boolean }) =>
    api.post<{ ventaId: string; numero: number; total_centavos: number }>(
      `/gestion/presupuestos/${id}/aceptar`,
      datos,
    ),
  rechazar: (id: string) => api.post<{ ok: true }>(`/gestion/presupuestos/${id}/rechazar`),
};
