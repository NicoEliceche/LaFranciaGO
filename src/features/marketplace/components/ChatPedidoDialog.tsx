import { Fragment, type FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Info, LogIn, LogOut, PackagePlus, Send, X } from 'lucide-react';

import {
  type ExtraApi,
  type MensajeApi,
  extrasApi,
  operacionApi,
} from '@core/data/services/apiClient';

import { formatMoney } from '@shared/utils/format';

import { AuthAviso } from '../screens/AuthScreenStyled';
import {
  ChatAvatar,
  ChatCabecera,
  ChatCampo,
  ChatCerrar,
  ChatCuerpo,
  ChatDia,
  ChatOverlay,
  ChatPie,
  ChatQuien,
  ChatVentana,
} from './ChatShellStyled';
import {
  ChatAutor,
  ChatBurbuja,
  ChatEnviar,
  ChatFila,
  ChatHora,
  ChatSistema,
  ChatVacio,
  ExtraAcciones,
  ExtraBoton,
  ExtraEstado,
  ExtraEtiqueta,
  ExtraFlotante,
  ExtraTarjeta,
  ExtraTexto,
} from './ChatPedidoDialogStyled';
import { ExtraDialog } from './ExtraDialog';
import { MotivoDialog } from './MotivoDialog';

/**
 * Conversación con el cliente sobre un pedido.
 *
 * Se refresca cada pocos segundos mientras está abierto. No usa WebSocket
 * porque para un pueblo con pocos pedidos simultáneos el sondeo alcanza y
 * evita mantener conexiones abiertas, que en el plan gratuito se cobran por
 * tiempo de conexión.
 */

const REFRESCO_MS = 6000;

type Props = {
  open: boolean;
  pedidoId: string | null;
  codigo: string;
  cliente: string;
  onClose: () => void;
  /* Desde qué lado se mira: el cliente pide extras, quien reparte los
     acepta y les pone precio. El comercio sólo mira. */
  rol?: 'cliente' | 'repartidor' | 'comercio';
};

/** Cómo se lee cada estado de un extra, y con qué tono. */
const ESTADO_EXTRA: Record<string, { texto: string; tono: string }> = {
  pedido: { texto: 'Esperando respuesta', tono: 'espera' },
  aceptado: { texto: 'Lo van a traer', tono: 'ok' },
  comprado: { texto: 'Comprado', tono: 'ok' },
  cobrado: { texto: 'Pagado', tono: 'ok' },
  rechazado: { texto: 'No lo pudieron traer', tono: 'baja' },
  cancelado: { texto: 'Cancelado', tono: 'baja' },
};

/**
 * De qué habla un aviso del sistema, para pintarlo distinto.
 *
 * No es decoración: en una conversación larga, "Bruno se sumó al chat" y "el
 * pedido se canceló" tienen peso muy distinto, y en gris los dos se pierden
 * igual entre los mensajes.
 */
function tonoDelAviso(texto: string | null) {
  const limpio = (texto ?? '').toLowerCase();

  if (/se sum|se unió|se unio|tomó el pedido|tomo el pedido/.test(limpio)) {
    return { tono: 'entra', Icono: LogIn };
  }

  if (/se bajó|se bajo|dejó|dejo|cancel|rechaz|se fue/.test(limpio)) {
    return { tono: 'sale', Icono: LogOut };
  }

  return { tono: 'estado', Icono: Info };
}

/** "Hoy", "Ayer" o la fecha, para separar los días. */
function diaDe(iso: string) {
  const fecha = new Date(iso.replace(' ', 'T') + 'Z');

  if (Number.isNaN(fecha.getTime())) {
    return '';
  }

  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 1);

  const mismoDia = (a: Date, b: Date) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();

  if (mismoDia(fecha, hoy)) {
    return 'Hoy';
  }

  if (mismoDia(fecha, ayer)) {
    return 'Ayer';
  }

  return fecha.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

/** La inicial para el avatar. */
const inicialDe = (nombre: string) => (nombre.trim()[0] ?? '?').toUpperCase();

export function ChatPedidoDialog({
  open,
  pedidoId,
  codigo,
  cliente,
  onClose,
  rol = 'comercio',
}: Props) {
  const [mensajes, setMensajes] = useState<MensajeApi[]>([]);
  const [extras, setExtras] = useState<ExtraApi[]>([]);
  const [motivosRechazo, setMotivosRechazo] = useState<string[]>([]);
  const [motivosCancelacion, setMotivosCancelacion] = useState<string[]>([]);
  const [pidiendoExtra, setPidiendoExtra] = useState(false);
  const [moviendo, setMoviendo] = useState<string | null>(null);
  /* Cuando hace falta un motivo, se abre el selector con la lista que
     corresponda y qué hacer al elegir. */
  const [pidiendoMotivo, setPidiendoMotivo] = useState<{
    titulo: string;
    motivos: string[];
    alElegir: (indice: number) => Promise<void>;
  } | null>(null);
  const [yo, setYo] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const listaRef = useRef<HTMLDivElement | null>(null);

  const cargar = useCallback(async () => {
    if (!pedidoId) {
      return;
    }

    try {
      const [datos, datosExtras] = await Promise.all([
        operacionApi.mensajes(pedidoId),
        extrasApi.listar(pedidoId).catch(() => null),
      ]);

      setMensajes(datos.mensajes);
      setYo(datos.yo);

      if (datosExtras) {
        setExtras(datosExtras.extras);
        setMotivosRechazo(datosExtras.motivosRechazo);
        setMotivosCancelacion(datosExtras.motivosCancelacion);
      }

      setError(null);
    } catch {
      setError('No pudimos cargar la conversación.');
    }
  }, [pedidoId]);

  useEffect(() => {
    if (!open || !pedidoId) {
      return undefined;
    }

    void cargar();

    const temporizador = window.setInterval(() => void cargar(), REFRESCO_MS);

    return () => window.clearInterval(temporizador);
  }, [cargar, open, pedidoId]);

  /* Al llegar un mensaje se baja al final, que es lo que uno espera de un
     chat. Se hace tras pintar para que la altura ya esté calculada. */
  useEffect(() => {
    const lista = listaRef.current;

    if (lista) {
      lista.scrollTop = lista.scrollHeight;
    }
  }, [mensajes]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const alPresionar = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', alPresionar);

    return () => document.removeEventListener('keydown', alPresionar);
  }, [onClose, open]);

  if (!open || !pedidoId) {
    return null;
  }

  const enviar = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const formulario = evento.currentTarget;
    const texto = String(new FormData(formulario).get('texto') ?? '').trim();

    if (!texto || enviando) {
      return;
    }

    setEnviando(true);

    try {
      await operacionApi.enviarMensaje(pedidoId, texto);
      formulario.reset();
      await cargar();
    } catch {
      setError('No pudimos enviar el mensaje.');
    } finally {
      setEnviando(false);
    }
  };

  const hora = (iso: string) =>
    new Date(iso.replace(' ', 'T') + 'Z').toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
    });

  /* Pedir algo que no estaba en el pedido. */
  const pedirExtra = async (descripcion: string) => {
    if (!pedidoId) {
      return;
    }

    await extrasApi.pedir(pedidoId, descripcion);
    await cargar();
  };

  /**
   * Mueve un extra.
   *
   * Las acciones que necesitan explicar por qué abren el selector de motivos
   * en lugar de pedirlo escrito: quien reparte está en la calle y con apuro.
   */
  const moverExtra = async (
    extra: ExtraApi,
    accion: Parameters<typeof extrasApi.accion>[1]['accion'],
    motivo?: number,
  ) => {
    setMoviendo(extra.id);

    try {
      await extrasApi.accion(extra.id, { accion, motivo });
      await cargar();
      setError(null);
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos hacer eso.');
    } finally {
      setMoviendo(null);
      setPidiendoMotivo(null);
    }
  };

  /* El precio lo carga quien compró: es el único que lo sabe. */
  const cargarPrecio = async (extra: ExtraApi) => {
    const escrito = window.prompt(`¿Cuánto salió "${extra.descripcion}"?`);

    if (escrito === null) {
      return;
    }

    const precio = Number(escrito.replace(',', '.'));

    if (!Number.isFinite(precio) || precio <= 0) {
      setError('Poné cuánto salió, en números.');

      return;
    }

    setMoviendo(extra.id);

    try {
      await extrasApi.accion(extra.id, { accion: 'comprar', precio });
      await cargar();
      setError(null);
    } catch (fallo) {
      setError(fallo instanceof Error ? fallo.message : 'No pudimos guardar el precio.');
    } finally {
      setMoviendo(null);
    }
  };

  /** Los extras que el chat muestra en línea, indexados por su mensaje. */
  const extraPorId = new Map(extras.map((extra) => [extra.id, extra]));

  return (
    <ChatOverlay onClick={onClose} role="presentation">
      <ChatVentana
        role="dialog"
        aria-modal="true"
        aria-label={`Chat del pedido ${codigo}`}
        onClick={(evento) => evento.stopPropagation()}
      >
        <ChatCabecera>
          <ChatAvatar aria-hidden="true">{inicialDe(cliente)}</ChatAvatar>
          <ChatQuien>
            <strong>{cliente}</strong>
            <span>Pedido {codigo}</span>
          </ChatQuien>
          <ChatCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={20} aria-hidden="true" />
          </ChatCerrar>
        </ChatCabecera>

        {error ? (
          <AuthAviso role="alert" data-tono="error">
            {error}
          </AuthAviso>
        ) : null}

        <ChatCuerpo ref={listaRef}>
          {mensajes.length === 0 ? (
            <ChatVacio>Todavía no hay mensajes. Escribile al cliente.</ChatVacio>
          ) : null}

          {mensajes.map((mensaje, indice) => {
            const tipo = (mensaje as { tipo?: string }).tipo ?? 'texto';
            const anterior = mensajes[indice - 1];
            const siguiente = mensajes[indice + 1];

            /* El separador de día, cuando cambia respecto del anterior. */
            const dia = diaDe(mensaje.creado_en);
            const diaAnterior = anterior ? diaDe(anterior.creado_en) : null;
            const separador =
              dia && dia !== diaAnterior ? <ChatDia key={`dia-${mensaje.id}`}>{dia}</ChatDia> : null;

            /* Lo que dice la app va centrado y sin burbuja: si se viera como
               un mensaje más, parecería que alguien lo escribió. */
            if (tipo === 'sistema') {
              const { tono, Icono } = tonoDelAviso(mensaje.texto);

              return (
                <Fragment key={mensaje.id}>
                  {separador}
                  <ChatSistema data-tono={tono}>
                    <Icono size={12} aria-hidden="true" />
                    {mensaje.texto}
                  </ChatSistema>
                </Fragment>
              );
            }

            /* Un extra es una transacción, no una charla: muestra en qué
               quedó y qué se puede hacer con él. */
            if (tipo === 'extra') {
              const extra = extraPorId.get((mensaje as { extra_id?: string }).extra_id ?? '');
              const estado = extra ? ESTADO_EXTRA[extra.estado] : null;
              const propio = mensaje.autor_id === yo;
              const ocupado = extra ? moviendo === extra.id : false;

              return (
                <ExtraTarjeta key={mensaje.id} data-propio={propio}>
                  <ExtraEtiqueta>
                    <PackagePlus size={11} aria-hidden="true" />
                    ¿Necesitás agregar algo al pedido?
                  </ExtraEtiqueta>

                  <ExtraTexto>{mensaje.texto}</ExtraTexto>

                  {extra ? (
                    <ExtraEstado data-tono={estado?.tono}>
                      {estado?.texto ?? extra.estado}
                      {extra.precio ? ` · ${formatMoney(extra.precio)}` : ''}
                      {extra.motivo && extra.estado !== 'comprado' ? ` · ${extra.motivo}` : ''}
                    </ExtraEstado>
                  ) : null}

                  {/* Quien reparte decide si puede, y después pone el precio. */}
                  {extra && rol === 'repartidor' ? (
                    <ExtraAcciones>
                      {extra.estado === 'pedido' ? (
                        <>
                          <ExtraBoton
                            type="button"
                            disabled={ocupado}
                            onClick={() => void moverExtra(extra, 'aceptar')}
                          >
                            Puedo traerlo
                          </ExtraBoton>
                          <ExtraBoton
                            type="button"
                            data-tono="suave"
                            disabled={ocupado}
                            onClick={() =>
                              setPidiendoMotivo({
                                titulo: '¿Por qué no podés?',
                                motivos: motivosRechazo,
                                alElegir: (indice) => moverExtra(extra, 'rechazar', indice),
                              })
                            }
                          >
                            No puedo
                          </ExtraBoton>
                        </>
                      ) : null}

                      {extra.estado === 'aceptado' ? (
                        <>
                          <ExtraBoton
                            type="button"
                            disabled={ocupado}
                            onClick={() => void cargarPrecio(extra)}
                          >
                            Ya lo compré
                          </ExtraBoton>
                          <ExtraBoton
                            type="button"
                            data-tono="suave"
                            disabled={ocupado}
                            onClick={() =>
                              setPidiendoMotivo({
                                titulo: '¿Qué pasó?',
                                motivos: motivosCancelacion,
                                alElegir: (indice) => moverExtra(extra, 'cancelar', indice),
                              })
                            }
                          >
                            Cancelar extra
                          </ExtraBoton>
                        </>
                      ) : null}

                      {/* El cliente pidió cancelar algo ya comprado: quien
                          puso la plata decide. */}
                      {extra.espera_confirmacion === 1 ? (
                        <>
                          <ExtraBoton
                            type="button"
                            disabled={ocupado}
                            onClick={() => void moverExtra(extra, 'confirmar-cancelacion')}
                          >
                            Acepto cancelarlo
                          </ExtraBoton>
                          <ExtraBoton
                            type="button"
                            data-tono="suave"
                            disabled={ocupado}
                            onClick={() => void moverExtra(extra, 'rechazar-cancelacion')}
                          >
                            Ya lo compré
                          </ExtraBoton>
                        </>
                      ) : null}
                    </ExtraAcciones>
                  ) : null}

                  {/* El cliente puede darlo de baja: se confundió, no le
                      alcanza, lo que sea. */}
                  {extra &&
                  rol === 'cliente' &&
                  extra.espera_confirmacion !== 1 &&
                  ['pedido', 'aceptado', 'comprado'].includes(extra.estado) ? (
                    <ExtraAcciones>
                      <ExtraBoton
                        type="button"
                        data-tono="suave"
                        disabled={ocupado}
                        onClick={() => void moverExtra(extra, 'cancelar')}
                      >
                        {extra.estado === 'comprado'
                          ? 'Pedir cancelarlo'
                          : 'Ya no lo necesito'}
                      </ExtraBoton>
                    </ExtraAcciones>
                  ) : null}

                  {extra && extra.espera_confirmacion === 1 && rol === 'cliente' ? (
                    <ExtraEstado data-tono="espera">
                      Esperando que confirmen la cancelación.
                    </ExtraEstado>
                  ) : null}

                  <ChatHora>{hora(mensaje.creado_en)}</ChatHora>
                </ExtraTarjeta>
              );
            }

            const propio = mensaje.autor_id === yo;

            /* Mensajes seguidos del mismo autor se agrupan: sólo el último de
               la tanda lleva cola y separación, y sólo el primero, el nombre. */
            const mismoQueSigue =
              siguiente !== undefined &&
              siguiente.autor_id === mensaje.autor_id &&
              ((siguiente as { tipo?: string }).tipo ?? 'texto') === 'texto';
            const mismoQueAntes =
              anterior !== undefined &&
              anterior.autor_id === mensaje.autor_id &&
              ((anterior as { tipo?: string }).tipo ?? 'texto') === 'texto' &&
              dia === diaAnterior;

            return (
              <Fragment key={mensaje.id}>
                {separador}
                <ChatFila data-propio={propio} data-ultimo={!mismoQueSigue}>
                  <ChatBurbuja data-propio={propio} data-ultimo={!mismoQueSigue}>
                    {/* Quién habla sólo si es de otro y arranca la tanda. */}
                    {!propio && !mismoQueAntes && mensaje.autor ? (
                      <ChatAutor>{mensaje.autor}</ChatAutor>
                    ) : null}
                    <span className="texto">{mensaje.texto}</span>
                    <ChatHora>{hora(mensaje.creado_en)}</ChatHora>
                  </ChatBurbuja>
                </ChatFila>
              </Fragment>
            );
          })}
        </ChatCuerpo>

        {/* Sólo el cliente pide extras, y sólo mientras el pedido esté vivo. */}
        {rol === 'cliente' ? (
          <ExtraFlotante type="button" onClick={() => setPidiendoExtra(true)}>
            <PackagePlus size={14} aria-hidden="true" />
            ¿Necesitás agregar algo al pedido?
          </ExtraFlotante>
        ) : null}

        <ChatPie onSubmit={enviar}>
          <ChatCampo
            name="texto"
            rows={1}
            placeholder="Escribí un mensaje"
            autoComplete="off"
            /* Enter manda, Shift+Enter hace un renglón: como en todos lados. */
            onKeyDown={(evento) => {
              if (evento.key === 'Enter' && !evento.shiftKey) {
                evento.preventDefault();
                evento.currentTarget.form?.requestSubmit();
              }
            }}
            /* Crece con el texto hasta el tope que pone el estilo. */
            onInput={(evento) => {
              const campo = evento.currentTarget;

              campo.style.height = 'auto';
              campo.style.height = `${campo.scrollHeight}px`;
            }}
          />
          <ChatEnviar type="submit" disabled={enviando} aria-label="Enviar">
            <Send size={18} aria-hidden="true" />
          </ChatEnviar>
        </ChatPie>
      </ChatVentana>

      <ExtraDialog
        open={pidiendoExtra}
        onClose={() => setPidiendoExtra(false)}
        onPedir={pedirExtra}
      />

      <MotivoDialog
        open={pidiendoMotivo !== null}
        titulo={pidiendoMotivo?.titulo ?? ''}
        motivos={pidiendoMotivo?.motivos ?? []}
        onCancelar={() => setPidiendoMotivo(null)}
        onElegir={(indice) => pidiendoMotivo?.alElegir(indice) ?? Promise.resolve()}
      />
    </ChatOverlay>
  );
}
