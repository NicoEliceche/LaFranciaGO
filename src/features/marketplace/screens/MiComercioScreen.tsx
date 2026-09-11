import { type FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
  BadgePercent,
  BarChart3,
  Clock,
  Store as StoreIcono,
  MessageSquare,
  TrendingDown,
  TrendingUp,
  Pencil,
  Plus,
  PackageSearch,
  Store,
  ToggleLeft,
  ToggleRight,
  Truck,
  X,
} from 'lucide-react';

import {
  type ComercioApi,
  type EnvioApi,
  type HorarioApi,
  type MetricasComercioApi,
  type NuevaOferta,
  type OfertaApi,
  type PedidoComercioApi,
  type Preparacion,
  type ProductoApi,
  miComercioApi,
  operacionApi,
} from '@core/data/services/apiClient';
import { formatMoney } from '@shared/utils/format';
import { priceSuffix, stepLabel } from '@core/data/saleUnits';
import type { SaleUnitId } from '@shared/types/saleUnit.types';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { ChatPedidoDialog } from '../components/ChatPedidoDialog';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { EmptyState } from '../components/EmptyState';
import { EnviosMapa } from '../components/EnviosMapa';
import { OfertaDialog } from '../components/OfertaDialog';
import { ProductoDialog } from '../components/ProductoDialog';
import { SectionHeading } from '../components/SectionHeading';
import { Avatar } from '@shared/components/Media';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  ComercioCabecera,
  ComercioDato,
  ComercioDatos,
  CampoFila,
  ChipsFila,
  ComercioNombre,
  DiaFila,
  EstadoChip,
  MapaCaja,
  MetricaCaja,
  MetricaEtiqueta,
  MetricaGrilla,
  MetricaValor,
  MetricaVariacion,
  NuevoProductoBoton,
  OfertaCabecera,
  OfertaDetalle,
  OfertaPrecios,
  OfertaSello,
  OfertaTipoChip,
  ProductoAcciones,
  ProductoBotonIcono,
  ProductoFila,
  ProductoInfo,
  PreparacionChip,
  PrepararBoton,
  ProductoNombre,
  ProductoPrecio,
  RankingFila,
  SeccionTitulo,
  StockCampo,
  StockChip,
  TramoBoton,
  TramoFila,
  SeccionBadge,
  SeccionChip,
  SeccionRow,
} from './MiComercioScreenStyled';

/**
 * Panel del comercio.
 *
 * Cuatro secciones en una sola pantalla, con pestañas: el comercio trabaja
 * mirando esto todo el día y saltar entre rutas distintas para ver un pedido
 * y contestar un mensaje sería incómodo.
 */

type Seccion = 'resumen' | 'negocio' | 'productos' | 'ofertas' | 'pedidos' | 'chats' | 'envios';

const SECCIONES: Array<{ id: Seccion; nombre: string }> = [
  { id: 'resumen', nombre: 'Resumen' },
  { id: 'negocio', nombre: 'Mi negocio' },
  { id: 'productos', nombre: 'Productos' },
  { id: 'ofertas', nombre: 'Ofertas' },
  { id: 'pedidos', nombre: 'Pedidos' },
  { id: 'chats', nombre: 'Chats' },
  { id: 'envios', nombre: 'Envíos' },
];

/* Cada cuánto se vuelven a pedir los datos que cambian solos. */
const REFRESCO_MS = 12_000;

/**
 * Cuánto cambió respecto del período anterior.
 *
 * Sin base previa no se inventa un "+100%": se muestra un guión, que es más
 * honesto que un porcentaje sobre cero.
 */
function variacion(actual: number, previo: number) {
  if (previo === 0) {
    return { texto: actual > 0 ? 'sin comparación' : '—', tono: 'igual' as const };
  }

  const cambio = Math.round(((actual - previo) / previo) * 100);

  return {
    texto: `${cambio > 0 ? '+' : ''}${cambio}%`,
    tono: cambio > 0 ? ('sube' as const) : cambio < 0 ? ('baja' as const) : ('igual' as const),
  };
}

/**
 * Cómo se lee el stock de un producto.
 *
 * Sin valor no es cero: es un comercio que no lleva control, y mostrar
 * "agotado" ahí escondería todo su catálogo.
 */
const estadoStock = (stock: number | null | undefined) => {
  if (stock === null || stock === undefined) {
    return 'sin-control';
  }

  if (stock <= 0) {
    return 'agotado';
  }

  return stock <= 5 ? 'poco' : 'disponible';
};

const textoStock = (stock: number | null | undefined) => {
  if (stock === null || stock === undefined) {
    return 'Sin control';
  }

  if (stock <= 0) {
    return 'Agotado';
  }

  return stock <= 5 ? `Quedan ${stock}` : 'Disponible';
};

/* Domingo primero, como los numera JavaScript. */
const DIAS_SEMANA = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

const TIPO_NOMBRE: Record<string, string> = {
  descuento: 'Descuento',
  combo: 'Combo',
  cantidad: 'Por cantidad',
};

/** Una línea que diga en criollo qué hay que llevar para que la oferta valga. */
function describirOferta(oferta: OfertaApi) {
  const nombres = oferta.productos.map((fila) => fila.nombre);

  if (oferta.tipo === 'cantidad') {
    return `Llevando ${oferta.cantidad} unidades de ${nombres[0] ?? 'ese producto'}.`;
  }

  if (oferta.tipo === 'combo') {
    return oferta.productos
      .map((fila) => (fila.unidades > 1 ? `${fila.unidades} × ${fila.nombre}` : fila.nombre))
      .join(' + ');
  }

  return `${oferta.porcentaje}% menos en ${nombres[0] ?? 'ese producto'}.`;
}

/**
 * Los pasos de la preparación, con lo que hay que tocar para avanzar.
 *
 * El botón habla en la voz del comercio —"Empecé a prepararlo"— y no en la
 * del sistema, porque quien lo toca está atendiendo, no administrando.
 */
const PREPARACION: Record<Preparacion, { nombre: string; accion: string | null }> = {
  recibido: { nombre: 'Recibido', accion: 'Empecé a prepararlo' },
  preparando: { nombre: 'En preparación', accion: '¡Está listo!' },
  listo: { nombre: 'Listo para retirar', accion: null },
};

const SIGUIENTE_PREPARACION: Record<Preparacion, Preparacion | null> = {
  recibido: 'preparando',
  preparando: 'listo',
  listo: null,
};

const ESTADO_NOMBRE: Record<string, string> = {
  proceso: 'En proceso',
  terminado: 'Entregado',
  cancelado: 'Cancelado',
};

const ENVIO_NOMBRE: Record<string, string> = {
  buscando: 'Buscando repartidor',
  asignado: 'Asignado',
  retirado: 'Retirado',
  en_camino: 'En camino',
  entregado: 'Entregado',
};

/** "hace 2 min": una ubicación de hace media hora no dice dónde está ahora. */
const desdeCuando = (iso: string) => {
  const minutos = Math.round((Date.now() - new Date(iso.replace(' ', 'T') + 'Z').getTime()) / 60000);

  if (minutos < 1) {
    return 'ahora mismo';
  }

  if (minutos < 60) {
    return `hace ${minutos} min`;
  }

  return `hace ${Math.round(minutos / 60)} h`;
};

export function MiComercioScreen() {
  const [comercio, setComercio] = useState<ComercioApi | null>(null);
  const [productos, setProductos] = useState<ProductoApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [seccion, setSeccion] = useState<Seccion>('resumen');
  const [pedidos, setPedidos] = useState<PedidoComercioApi[]>([]);
  const [envios, setEnvios] = useState<EnvioApi[]>([]);
  const [chat, setChat] = useState<PedidoComercioApi | null>(null);

  const [metricas, setMetricas] = useState<MetricasComercioApi | null>(null);
  const [ofertas, setOfertas] = useState<OfertaApi[]>([]);
  const [ofertaAbierta, setOfertaAbierta] = useState(false);
  const [preparando, setPreparando] = useState<string | null>(null);

  /* Los horarios se editan como un conjunto: se cargan al abrir y se guardan
     todos juntos, porque editar de a uno deja estados intermedios raros. */
  const [horarios, setHorarios] = useState<HorarioApi[]>([]);
  const [guardando, setGuardando] = useState(false);
  const [guardado, setGuardado] = useState<string | null>(null);
  const [ofertaPorBorrar, setOfertaPorBorrar] = useState<OfertaApi | null>(null);

  const [dialogoAbierto, setDialogoAbierto] = useState(false);
  const [editando, setEditando] = useState<ProductoApi | null>(null);
  const [porBorrar, setPorBorrar] = useState<ProductoApi | null>(null);

  const crearOferta = async (datos: NuevaOferta) => {
    await miComercioApi.crearOferta(datos);

    const { ofertas: filas } = await miComercioApi.ofertas();

    setOfertas(filas);
  };

  /**
   * Avanza la preparación de un pedido.
   *
   * El cambio se pinta antes de que conteste el servidor: el comercio está
   * atendiendo y no puede quedarse mirando un botón que no reacciona.
   */
  const avanzarPreparacion = async (pedido: PedidoComercioApi) => {
    const siguiente = SIGUIENTE_PREPARACION[pedido.preparacion];

    if (!siguiente || preparando) {
      return;
    }

    setPreparando(pedido.id);
    setPedidos((previos) =>
      previos.map((fila) =>
        fila.id === pedido.id ? { ...fila, preparacion: siguiente } : fila,
      ),
    );

    try {
      await miComercioApi.prepararPedido(pedido.id, siguiente);
    } catch {
      setPedidos((previos) =>
        previos.map((fila) =>
          fila.id === pedido.id ? { ...fila, preparacion: pedido.preparacion } : fila,
        ),
      );
      setError('No pudimos actualizar el pedido.');
    } finally {
      setPreparando(null);
    }
  };

  /* Los datos que ve el cliente. */
  const guardarDatos = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const datos = new FormData(evento.currentTarget);

    setGuardando(true);
    setGuardado(null);

    try {
      await miComercioApi.editar({
        nombre: String(datos.get('nombre') ?? ''),
        direccion: String(datos.get('direccion') ?? ''),
        telefono: String(datos.get('telefono') ?? ''),
        email: String(datos.get('email') ?? ''),
        descripcion: String(datos.get('descripcion') ?? ''),
        minimo: Number(datos.get('minimo') ?? 0),
      });

      setGuardado('Guardamos tus datos.');
      await cargar();
    } catch {
      setError('No pudimos guardar los datos.');
    } finally {
      setGuardando(false);
    }
  };

  /* Los horarios van todos juntos: son un conjunto, no piezas sueltas. */
  const guardarHorarios = async () => {
    setGuardando(true);
    setGuardado(null);

    try {
      await miComercioApi.guardarHorarios(
        horarios.map((tramo) => ({ dia: tramo.dia, abre: tramo.abre, cierra: tramo.cierra })),
      );

      setGuardado('Guardamos tus horarios.');
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos guardar los horarios.');
    } finally {
      setGuardando(false);
    }
  };

  const agregarTramo = (dia: number) => {
    setHorarios((previos) => [
      ...previos,
      {
        id: `nuevo-${dia}-${previos.length}`,
        dia,
        abre: '09:00',
        cierra: '13:00',
        abre_min: 540,
        cierra_min: 780,
      },
    ]);
  };

  const cambiarTramo = (id: string, campo: 'abre' | 'cierra', valor: string) => {
    setHorarios((previos) =>
      previos.map((tramo) => (tramo.id === id ? { ...tramo, [campo]: valor } : tramo)),
    );
  };

  const quitarTramo = (id: string) => {
    setHorarios((previos) => previos.filter((tramo) => tramo.id !== id));
  };

  /**
   * Ajusta el stock desde la fila del producto.
   *
   * El cambio se pinta antes de que conteste el servidor: el comercio está
   * cargando varios seguidos y esperar por cada uno lo haría inusable.
   */
  const ajustarStock = async (producto: ProductoApi, valor: string) => {
    const vacio = valor.trim() === '';
    const numero = Number(valor);

    if (!vacio && !Number.isFinite(numero)) {
      return;
    }

    const stock = vacio ? null : Math.max(0, Math.trunc(numero));

    setProductos((previos) =>
      previos.map((fila) => (fila.id === producto.id ? { ...fila, stock } : fila)),
    );

    try {
      await miComercioApi.ajustarStock(producto.id, stock);
    } catch {
      setProductos((previos) =>
        previos.map((fila) =>
          fila.id === producto.id ? { ...fila, stock: producto.stock } : fila,
        ),
      );
      setError('No pudimos guardar el stock.');
    }
  };

  const alternarOferta = async (oferta: OfertaApi) => {
    /* Se apaga en pantalla antes de que conteste el servidor: es un
       interruptor, y esperar medio segundo lo hace sentir roto. */
    setOfertas((previas) =>
      previas.map((fila) =>
        fila.id === oferta.id ? { ...fila, activa: !fila.activa } : fila,
      ),
    );

    try {
      await miComercioApi.activarOferta(oferta.id, !oferta.activa);
    } catch {
      setOfertas((previas) =>
        previas.map((fila) =>
          fila.id === oferta.id ? { ...fila, activa: oferta.activa } : fila,
        ),
      );
    }
  };

  const cargar = useCallback(async () => {
    setCargando(true);

    try {
      const datos = await miComercioApi.ver();

      setComercio(datos.comercio);
      setProductos(datos.productos);
      setError(null);

      /* Las ofertas se piden aparte y sin cortar la pantalla si fallan: el
         panel sirve igual para cargar productos y despachar pedidos. */
      try {
        const { ofertas: filas } = await miComercioApi.ofertas();

        setOfertas(filas);
      } catch {
        setOfertas([]);
      }

      /* Las métricas tampoco cortan la pantalla si fallan: el comercio tiene
         que poder despachar pedidos aunque los números no carguen. */
      try {
        setMetricas(await miComercioApi.metricas());
      } catch {
        setMetricas(null);
      }

      try {
        const { horarios: tramos } = await miComercioApi.horarios();

        setHorarios(tramos);
      } catch {
        setHorarios([]);
      }
    } catch {
      setError('No pudimos cargar tu comercio.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  /* Pedidos y envíos se refrescan solos: el comercio deja el panel abierto
     mientras atiende, y tiene que ver entrar los pedidos sin recargar. */
  useEffect(() => {
    if (!comercio || seccion === 'productos') {
      return undefined;
    }

    const traer = async () => {
      try {
        if (seccion === 'pedidos' || seccion === 'chats') {
          const { pedidos: filas } = await operacionApi.pedidos();

          setPedidos(filas);
        }

        if (seccion === 'envios') {
          const { envios: filas } = await operacionApi.envios();

          setEnvios(filas);
        }
      } catch {
        /* Un fallo puntual del refresco no debe borrar lo que ya se ve. */
      }
    };

    void traer();

    const temporizador = window.setInterval(traer, REFRESCO_MS);

    return () => window.clearInterval(temporizador);
  }, [comercio, seccion]);

  const sinLeer = useMemo(
    () => pedidos.reduce((suma, pedido) => suma + Number(pedido.sin_leer ?? 0), 0),
    [pedidos],
  );

  const guardar = async (datos: Record<string, unknown>) => {
    if (editando) {
      await miComercioApi.editarProducto(editando.id, datos);
    } else {
      await miComercioApi.crearProducto({ ...datos, comercioId: comercio?.id });
    }

    await cargar();
  };

  const borrar = async () => {
    if (!porBorrar) {
      return;
    }

    try {
      await miComercioApi.borrarProducto(porBorrar.id);
      await cargar();
    } catch {
      setError('No pudimos borrar el producto.');
    } finally {
      setPorBorrar(null);
    }
  };

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {comercio ? (
              <Card>
                <CardPad>
                  <ComercioCabecera>
                    <Avatar $size="3.5rem" $tone="blue">
                      <Store size={24} aria-hidden="true" />
                    </Avatar>

                    <div>
                      <ComercioNombre>{comercio.nombre}</ComercioNombre>
                      <ComercioDatos>
                        <ComercioDato>{comercio.rubro_nombre}</ComercioDato>
                        <ComercioDato>{comercio.direccion}</ComercioDato>
                        {comercio.horario ? <ComercioDato>{comercio.horario}</ComercioDato> : null}
                      </ComercioDatos>
                    </div>
                  </ComercioCabecera>
                </CardPad>
              </Card>
            ) : null}

            {!cargando && !comercio && !error ? (
              <EmptyState
                icon={Store}
                title="Todavía no tenés comercio"
                text="Cuando aprobemos tu alta vas a poder cargar productos."
                dashed
              />
            ) : null}

            {comercio ? (
              <SeccionRow>
                {SECCIONES.map((item) => (
                  <SeccionChip
                    key={item.id}
                    type="button"
                    data-active={seccion === item.id}
                    onClick={() => setSeccion(item.id)}
                  >
                    {item.nombre}
                    {item.id === 'chats' && sinLeer > 0 ? (
                      <SeccionBadge>{sinLeer}</SeccionBadge>
                    ) : null}
                  </SeccionChip>
                ))}
              </SeccionRow>
            ) : null}

            {comercio && seccion === 'negocio' ? (
              <>
                <SectionHeading
                  title="Mi negocio"
                  subtitle="Los datos que ve el cliente y cuándo atendés."
                />

                {guardado ? <AuthAviso role="status">{guardado}</AuthAviso> : null}

                <Card>
                  <CardPad>
                    <form onSubmit={guardarDatos}>
                      <SeccionTitulo>
                        Datos del comercio
                        <StoreIcono size={15} aria-hidden="true" />
                      </SeccionTitulo>

                      <CampoFila>
                        <span>Nombre</span>
                        <input name="nombre" defaultValue={comercio.nombre} maxLength={80} required />
                      </CampoFila>

                      <CampoFila>
                        <span>Dirección</span>
                        <input
                          name="direccion"
                          defaultValue={comercio.direccion}
                          maxLength={160}
                          required
                        />
                      </CampoFila>

                      <CampoFila>
                        <span>Teléfono</span>
                        <input
                          name="telefono"
                          defaultValue={(comercio as { telefono?: string }).telefono ?? ''}
                          maxLength={40}
                        />
                      </CampoFila>

                      <CampoFila>
                        <span>Email de contacto</span>
                        <input
                          name="email"
                          type="email"
                          defaultValue={(comercio as { email?: string }).email ?? ''}
                          maxLength={120}
                        />
                      </CampoFila>

                      <CampoFila>
                        <span>Cómo se describe tu negocio</span>
                        <textarea
                          name="descripcion"
                          defaultValue={comercio.descripcion ?? ''}
                          maxLength={300}
                        />
                      </CampoFila>

                      <CampoFila>
                        <span>Pedido mínimo</span>
                        <input
                          name="minimo"
                          type="number"
                          min={0}
                          step="0.01"
                          defaultValue={comercio.minimo}
                        />
                      </CampoFila>

                      <PrepararBoton type="submit" disabled={guardando}>
                        {guardando ? 'Guardando…' : 'Guardar mis datos'}
                      </PrepararBoton>
                    </form>
                  </CardPad>
                </Card>

                <Card>
                  <CardPad>
                    <SeccionTitulo>
                      Horarios de atención
                      <Clock size={15} aria-hidden="true" />
                    </SeccionTitulo>
                    <ProductoPrecio>
                      Si cerrás al mediodía, cargá dos tramos ese día. Sin horarios cargados,
                      tu comercio figura siempre abierto.
                    </ProductoPrecio>

                    {DIAS_SEMANA.map((nombre, dia) => {
                      const tramos = horarios.filter((tramo) => tramo.dia === dia);

                      return (
                        <DiaFila key={nombre}>
                          <strong>{nombre}</strong>

                          {tramos.length === 0 ? <ProductoPrecio>Cerrado</ProductoPrecio> : null}

                          {tramos.map((tramo) => (
                            <TramoFila key={tramo.id}>
                              <input
                                type="time"
                                value={tramo.abre}
                                aria-label={`Abre el ${nombre}`}
                                onChange={(evento) =>
                                  cambiarTramo(tramo.id, 'abre', evento.target.value)
                                }
                              />
                              <span>a</span>
                              <input
                                type="time"
                                value={tramo.cierra}
                                aria-label={`Cierra el ${nombre}`}
                                onChange={(evento) =>
                                  cambiarTramo(tramo.id, 'cierra', evento.target.value)
                                }
                              />
                              <TramoBoton
                                type="button"
                                data-tono="danger"
                                onClick={() => quitarTramo(tramo.id)}
                                aria-label={`Quitar tramo del ${nombre}`}
                              >
                                Quitar
                              </TramoBoton>
                            </TramoFila>
                          ))}

                          <TramoBoton type="button" onClick={() => agregarTramo(dia)}>
                            + Agregar tramo
                          </TramoBoton>
                        </DiaFila>
                      );
                    })}

                    <PrepararBoton
                      type="button"
                      onClick={() => void guardarHorarios()}
                      disabled={guardando}
                    >
                      {guardando ? 'Guardando…' : 'Guardar horarios'}
                    </PrepararBoton>
                  </CardPad>
                </Card>
              </>
            ) : null}

            {comercio && seccion === 'productos' ? (
              <>
                <SectionHeading
                  title="Tus productos"
                  chip={`${productos.length}`}
                  subtitle="Lo que ve el cliente en tu catálogo."
                />

                <NuevoProductoBoton
                  type="button"
                  onClick={() => {
                    setEditando(null);
                    setDialogoAbierto(true);
                  }}
                >
                  <Plus size={18} aria-hidden="true" />
                  Agregar producto
                </NuevoProductoBoton>

                {productos.length === 0 && !cargando ? (
                  <EmptyState
                    icon={PackageSearch}
                    title="Sin productos"
                    text="Cargá el primero para que tu comercio aparezca completo."
                    dashed
                  />
                ) : null}

                {productos.map((producto) => (
                  <Card key={producto.id}>
                    <CardPad>
                      <ProductoFila>
                        <ProductoInfo>
                          <ProductoNombre>{producto.nombre}</ProductoNombre>
                          <ProductoPrecio>
                            {formatMoney(producto.precio)}{' '}
                            {producto.unidad_venta !== 'unidad'
                              ? priceSuffix(producto.unidad_venta as SaleUnitId)
                              : 'c/u'}
                            {' · desde '}
                            {stepLabel(producto.unidad_venta as SaleUnitId, 0)}
                          </ProductoPrecio>

                          {/* El stock se ajusta acá mismo: es lo que evita que
                              alguien pida algo que no hay y el repartidor
                              viaje al pedo. Vacío significa que este comercio
                              no lleva control, que no es lo mismo que cero. */}
                          <TramoFila>
                            <span>Stock</span>
                            <StockCampo
                              type="number"
                              min={0}
                              placeholder="—"
                              defaultValue={producto.stock ?? ''}
                              aria-label={`Stock de ${producto.nombre}`}
                              onBlur={(evento) => void ajustarStock(producto, evento.target.value)}
                            />
                            <StockChip data-estado={estadoStock(producto.stock)}>
                              {textoStock(producto.stock)}
                            </StockChip>
                          </TramoFila>
                        </ProductoInfo>

                        <ProductoAcciones>
                          <ProductoBotonIcono
                            type="button"
                            onClick={() => {
                              setEditando(producto);
                              setDialogoAbierto(true);
                            }}
                            aria-label={`Editar ${producto.nombre}`}
                          >
                            <Pencil size={15} aria-hidden="true" />
                          </ProductoBotonIcono>

                          <ProductoBotonIcono
                            type="button"
                            data-tono="danger"
                            onClick={() => setPorBorrar(producto)}
                            aria-label={`Borrar ${producto.nombre}`}
                          >
                            <X size={15} aria-hidden="true" />
                          </ProductoBotonIcono>
                        </ProductoAcciones>
                      </ProductoFila>
                    </CardPad>
                  </Card>
                ))}
              </>
            ) : null}

            {comercio && seccion === 'resumen' ? (
              <>
                <SectionHeading
                  title="Resumen"
                  subtitle="Cómo viene tu negocio."
                />

                {metricas ? (
                  <>
                    <MetricaGrilla>
                      <MetricaCaja>
                        <MetricaEtiqueta>Pedidos hoy</MetricaEtiqueta>
                        <MetricaValor>{metricas.hoy.pedidos}</MetricaValor>
                        {(() => {
                          const v = variacion(metricas.hoy.pedidos, metricas.ayer.pedidos);

                          return (
                            <MetricaVariacion data-tono={v.tono}>
                              {v.tono === 'sube' ? (
                                <TrendingUp size={13} aria-hidden="true" />
                              ) : v.tono === 'baja' ? (
                                <TrendingDown size={13} aria-hidden="true" />
                              ) : null}
                              {v.texto} vs ayer
                            </MetricaVariacion>
                          );
                        })()}
                      </MetricaCaja>

                      <MetricaCaja>
                        <MetricaEtiqueta>Ventas hoy</MetricaEtiqueta>
                        <MetricaValor>{formatMoney(metricas.hoy.ventas)}</MetricaValor>
                        {(() => {
                          const v = variacion(metricas.hoy.ventas, metricas.ayer.ventas);

                          return (
                            <MetricaVariacion data-tono={v.tono}>
                              {v.tono === 'sube' ? (
                                <TrendingUp size={13} aria-hidden="true" />
                              ) : v.tono === 'baja' ? (
                                <TrendingDown size={13} aria-hidden="true" />
                              ) : null}
                              {v.texto} vs ayer
                            </MetricaVariacion>
                          );
                        })()}
                      </MetricaCaja>

                      <MetricaCaja>
                        <MetricaEtiqueta>Ventas de la semana</MetricaEtiqueta>
                        <MetricaValor>{formatMoney(metricas.semana.ventas)}</MetricaValor>
                        {(() => {
                          const v = variacion(
                            metricas.semana.ventas,
                            metricas.semanaPrevia.ventas,
                          );

                          return (
                            <MetricaVariacion data-tono={v.tono}>
                              {v.tono === 'sube' ? (
                                <TrendingUp size={13} aria-hidden="true" />
                              ) : v.tono === 'baja' ? (
                                <TrendingDown size={13} aria-hidden="true" />
                              ) : null}
                              {v.texto} vs la anterior
                            </MetricaVariacion>
                          );
                        })()}
                      </MetricaCaja>

                      <MetricaCaja>
                        <MetricaEtiqueta>Ticket promedio</MetricaEtiqueta>
                        <MetricaValor>{formatMoney(metricas.ticketPromedio)}</MetricaValor>
                        <MetricaVariacion>últimos 7 días</MetricaVariacion>
                      </MetricaCaja>
                    </MetricaGrilla>

                    <Card>
                      <CardPad>
                        <SectionStack>
                          <ProductoNombre>Lo que más se vendió</ProductoNombre>

                          {metricas.masVendidos.length === 0 ? (
                            <ProductoPrecio>
                              Todavía no hay ventas esta semana.
                            </ProductoPrecio>
                          ) : (
                            metricas.masVendidos.map((fila) => (
                              <RankingFila key={fila.nombre}>
                                <span>{fila.nombre}</span>
                                <small>{fila.unidades} unid.</small>
                                <strong>{formatMoney(fila.total)}</strong>
                              </RankingFila>
                            ))
                          )}
                        </SectionStack>
                      </CardPad>
                    </Card>

                    <MetricaGrilla>
                      <MetricaCaja>
                        <MetricaEtiqueta>En preparación</MetricaEtiqueta>
                        <MetricaValor>{metricas.enProceso}</MetricaValor>
                      </MetricaCaja>
                      <MetricaCaja>
                        <MetricaEtiqueta>Productos activos</MetricaEtiqueta>
                        <MetricaValor>{metricas.productos}</MetricaValor>
                      </MetricaCaja>
                      <MetricaCaja>
                        <MetricaEtiqueta>Ofertas vigentes</MetricaEtiqueta>
                        <MetricaValor>{metricas.ofertas}</MetricaValor>
                      </MetricaCaja>
                      <MetricaCaja>
                        <MetricaEtiqueta>Pedidos de la semana</MetricaEtiqueta>
                        <MetricaValor>{metricas.semana.pedidos}</MetricaValor>
                      </MetricaCaja>
                    </MetricaGrilla>
                  </>
                ) : !cargando ? (
                  <EmptyState
                    icon={BarChart3}
                    title="Sin datos todavía"
                    text="Cuando entren pedidos vas a ver acá cómo viene tu negocio."
                    dashed
                  />
                ) : null}
              </>
            ) : null}

            {comercio && seccion === 'ofertas' ? (
              <>
                <SectionHeading
                  title="Ofertas"
                  chip={`${ofertas.length}`}
                  subtitle="Promociones que ve el cliente en tu comercio."
                />

                <NuevoProductoBoton type="button" onClick={() => setOfertaAbierta(true)}>
                  <Plus size={18} aria-hidden="true" />
                  Crear nueva oferta
                </NuevoProductoBoton>

                {ofertas.length === 0 && !cargando ? (
                  <EmptyState
                    icon={BadgePercent}
                    title="Sin ofertas"
                    text="Armá un descuento, un combo o una promo por cantidad."
                    dashed
                  />
                ) : null}

                {ofertas.map((oferta) => (
                  <Card key={oferta.id}>
                    <CardPad>
                      <ProductoFila>
                        <ProductoInfo>
                          <OfertaCabecera>
                            <strong>{oferta.titulo}</strong>
                            {oferta.porcentaje ? (
                              <OfertaSello>-{oferta.porcentaje}%</OfertaSello>
                            ) : null}
                            <OfertaTipoChip data-apagada={!oferta.activa}>
                              {oferta.activa ? TIPO_NOMBRE[oferta.tipo] : 'Apagada'}
                            </OfertaTipoChip>
                          </OfertaCabecera>

                          <OfertaPrecios>
                            <s>{formatMoney(oferta.precioLista)}</s>
                            <strong>{formatMoney(oferta.precioFinal)}</strong>
                          </OfertaPrecios>

                          <OfertaDetalle>{describirOferta(oferta)}</OfertaDetalle>
                        </ProductoInfo>

                        <ProductoAcciones>
                          <ProductoBotonIcono
                            type="button"
                            onClick={() => void alternarOferta(oferta)}
                            aria-label={
                              oferta.activa
                                ? `Apagar ${oferta.titulo}`
                                : `Encender ${oferta.titulo}`
                            }
                          >
                            {oferta.activa ? (
                              <ToggleRight size={17} aria-hidden="true" />
                            ) : (
                              <ToggleLeft size={17} aria-hidden="true" />
                            )}
                          </ProductoBotonIcono>

                          <ProductoBotonIcono
                            type="button"
                            data-tono="danger"
                            onClick={() => setOfertaPorBorrar(oferta)}
                            aria-label={`Borrar ${oferta.titulo}`}
                          >
                            <X size={15} aria-hidden="true" />
                          </ProductoBotonIcono>
                        </ProductoAcciones>
                      </ProductoFila>
                    </CardPad>
                  </Card>
                ))}
              </>
            ) : null}

            {comercio && seccion === 'pedidos' ? (
              <>
                <SectionHeading
                  title="Pedidos"
                  chip={`${pedidos.length}`}
                  subtitle="Lo que está entrando ahora."
                />

                {pedidos.length === 0 ? (
                  <EmptyState
                    icon={PackageSearch}
                    title="Sin pedidos"
                    text="Cuando alguien te compre, aparece acá."
                    dashed
                  />
                ) : null}

                {pedidos.map((pedido) => (
                  <Card key={pedido.id}>
                    <CardPad>
                      <ProductoFila>
                        <ProductoInfo>
                          <ProductoNombre>
                            {pedido.codigo} · {pedido.cliente}
                          </ProductoNombre>
                          <ProductoPrecio>
                            {formatMoney(pedido.total)} · {pedido.items}{' '}
                            {pedido.items === 1 ? 'producto' : 'productos'} ·{' '}
                            {pedido.direccion_texto}
                          </ProductoPrecio>
                        </ProductoInfo>

                        {/* Dos chips distintos: en qué punto está adentro del
                            comercio, y en qué punto está el pedido en general. */}
                        <ChipsFila>
                          <PreparacionChip data-estado={pedido.preparacion}>
                            {PREPARACION[pedido.preparacion]?.nombre ?? pedido.preparacion}
                          </PreparacionChip>

                          <EstadoChip data-estado={pedido.estado}>
                            {ESTADO_NOMBRE[pedido.estado] ?? pedido.estado}
                          </EstadoChip>
                        </ChipsFila>
                      </ProductoFila>

                      {/* Sólo mientras haya algo que hacer: un pedido listo o
                          cancelado no tiene paso siguiente. */}
                      {pedido.estado === 'proceso' &&
                      PREPARACION[pedido.preparacion]?.accion ? (
                        <PrepararBoton
                          type="button"
                          onClick={() => void avanzarPreparacion(pedido)}
                          disabled={preparando === pedido.id}
                          data-final={pedido.preparacion === 'preparando'}
                        >
                          {preparando === pedido.id
                            ? 'Guardando…'
                            : PREPARACION[pedido.preparacion]?.accion}
                        </PrepararBoton>
                      ) : null}
                    </CardPad>
                  </Card>
                ))}
              </>
            ) : null}

            {comercio && seccion === 'chats' ? (
              <>
                <SectionHeading
                  title="Conversaciones"
                  subtitle="Consultas de tus clientes sobre cada pedido."
                />

                {pedidos.length === 0 ? (
                  <EmptyState
                    icon={MessageSquare}
                    title="Sin conversaciones"
                    text="Se abre una por cada pedido que recibas."
                    dashed
                  />
                ) : null}

                {pedidos.map((pedido) => (
                  <Card key={pedido.id}>
                    <CardPad>
                      <ProductoFila>
                        <ProductoInfo>
                          <ProductoNombre>{pedido.cliente}</ProductoNombre>
                          <ProductoPrecio>
                            Pedido {pedido.codigo}
                            {pedido.cliente_telefono ? ` · ${pedido.cliente_telefono}` : ''}
                          </ProductoPrecio>
                        </ProductoInfo>

                        <ProductoAcciones>
                          {pedido.sin_leer > 0 ? (
                            <SeccionBadge>{pedido.sin_leer}</SeccionBadge>
                          ) : null}
                          <ProductoBotonIcono
                            type="button"
                            onClick={() => setChat(pedido)}
                            aria-label={`Abrir chat con ${pedido.cliente}`}
                          >
                            <MessageSquare size={15} aria-hidden="true" />
                          </ProductoBotonIcono>
                        </ProductoAcciones>
                      </ProductoFila>
                    </CardPad>
                  </Card>
                ))}
              </>
            ) : null}

            {comercio && seccion === 'envios' ? (
              <>
                <SectionHeading
                  title="Envíos en curso"
                  chip={`${envios.length}`}
                  subtitle="Dónde va cada pedido que salió."
                />

                {envios.length === 0 ? (
                  <EmptyState
                    icon={Truck}
                    title="Nada en camino"
                    text="Cuando un repartidor tome un pedido lo vas a ver acá."
                    dashed
                  />
                ) : (
                  <MapaCaja>
                    <EnviosMapa envios={envios} />
                  </MapaCaja>
                )}

                {envios.map((envio) => (
                  <Card key={envio.id}>
                    <CardPad>
                      <ProductoFila>
                        <ProductoInfo>
                          <ProductoNombre>
                            {envio.repartidor ?? 'Buscando repartidor'}
                          </ProductoNombre>
                          <ProductoPrecio>
                            Pedido {envio.codigo} · {envio.direccion_texto}
                            {envio.ubicacion_en
                              ? ` · ${desdeCuando(envio.ubicacion_en)}`
                              : ' · sin ubicación todavía'}
                          </ProductoPrecio>
                        </ProductoInfo>

                        <EstadoChip data-estado={envio.estado}>
                          {ENVIO_NOMBRE[envio.estado] ?? envio.estado}
                        </EstadoChip>
                      </ProductoFila>
                    </CardPad>
                  </Card>
                ))}
              </>
            ) : null}
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <OfertaDialog
        open={ofertaAbierta}
        productos={productos}
        onClose={() => setOfertaAbierta(false)}
        onGuardar={crearOferta}
      />

      <ConfirmDialog
        open={ofertaPorBorrar !== null}
        title="Borrar la oferta"
        text={`"${ofertaPorBorrar?.titulo ?? ''}" deja de estar disponible para los clientes.`}
        confirmLabel="Borrar"
        onCancel={() => setOfertaPorBorrar(null)}
        onConfirm={async () => {
          if (!ofertaPorBorrar) {
            return;
          }

          await miComercioApi.borrarOferta(ofertaPorBorrar.id);
          setOfertas((previas) =>
            previas.filter((fila) => fila.id !== ofertaPorBorrar.id),
          );
          setOfertaPorBorrar(null);
        }}
      />

      <ChatPedidoDialog
        rol="comercio"
        open={chat !== null}
        pedidoId={chat?.id ?? null}
        codigo={chat?.codigo ?? ''}
        cliente={chat?.cliente ?? ''}
        onClose={() => setChat(null)}
      />

      <ProductoDialog
        open={dialogoAbierto}
        producto={editando}
        onClose={() => setDialogoAbierto(false)}
        onGuardar={guardar}
      />

      <ConfirmDialog
        open={porBorrar !== null}
        title="¿Borrar este producto?"
        text={`"${porBorrar?.nombre ?? ''}" deja de aparecer en tu catálogo.`}
        onCancel={() => setPorBorrar(null)}
        onConfirm={() => void borrar()}
      />
    </MarketplaceFrame>
  );
}
