import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle2, MessagesSquare, Send, ShieldCheck } from 'lucide-react';

import {
  type MensajeReclamoApi,
  type ReclamoApi,
  hayBackend,
  reclamosApi,
} from '@core/data/services/apiClient';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { ResolverDialog } from '../components/ResolverDialog';
import { SectionHeading } from '../components/SectionHeading';
import { Card, CardPad, SectionInner } from '../ui';
import { CompactSection, SectionStack } from './screenLayout';
import { AuthAviso } from './AuthScreenStyled';
import {
  ChatBurbuja,
  ChatEnviar,
  ChatEntrada,
  ChatFila,
  ChatHora,
  ChatLista,
  ChatVacio,
  ExtraBoton,
} from '../components/ChatPedidoDialogStyled';
import {
  AutorEtiqueta,
  ReclamoAcciones,
  ReclamoDatos,
  ReclamoEstado,
  ReclamoResolucion,
  ReclamoTitulo,
} from './ReclamosScreenStyled';

/**
 * Los reclamos, y el chat entre las tres partes.
 *
 * Cuando algo sale mal, cada uno cuenta su versión por separado y nadie llega
 * a la misma conclusión. Acá el comercio, quien repartió y administración
 * hablan en el mismo lugar, así que la respuesta que le llega al cliente es
 * una sola y sale de haber escuchado a los dos.
 *
 * El cliente no entra a este chat: primero se define qué pasó, después
 * alguien le contesta. Que vea la discusión mientras se define no ayuda a
 * nadie.
 */

/* Cada cuánto se refrescan los mensajes de un reclamo abierto. */
const REFRESCO_MS = 15_000;

const ESTADO_TEXTO: Record<string, string> = {
  abierto: 'Sin atender',
  en_revision: 'En revisión',
  resuelto: 'Resuelto',
  cerrado: 'Cerrado',
};

const ROL_TEXTO: Record<string, string> = {
  admin: 'Administración',
  comercio: 'El comercio',
  repartidor: 'Quien repartió',
};

/** "07/09 14:32" */
function cuando(iso: string) {
  const fecha = new Date(iso.replace(' ', 'T') + 'Z');

  if (Number.isNaN(fecha.getTime())) {
    return '';
  }

  return `${fecha.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
  })} ${fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`;
}

export function ReclamosScreen() {
  const [reclamos, setReclamos] = useState<ReclamoApi[]>([]);
  const [esAdmin, setEsAdmin] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* Cuál está abierto: el chat de un reclamo se despliega dentro de su
     tarjeta, así no se pierde de vista de qué pedido se está hablando. */
  const [abierto, setAbierto] = useState<string | null>(null);
  const [mensajes, setMensajes] = useState<MensajeReclamoApi[]>([]);
  const [yo, setYo] = useState('');
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);

  /* Cuál se está por resolver: el diálogo es uno solo. */
  const [resolviendo, setResolviendo] = useState<ReclamoApi | null>(null);

  const finDelChat = useRef<HTMLDivElement | null>(null);

  const cargar = useCallback(async () => {
    if (!hayBackend()) {
      setCargando(false);

      return;
    }

    try {
      const { reclamos: filas, esAdmin: admin } = await reclamosApi.listar();

      setReclamos(filas);
      setEsAdmin(admin);
      setError(null);
    } catch {
      setError('No pudimos cargar los reclamos.');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  /* Los mensajes del reclamo abierto, y se siguen mirando mientras esté
     abierto: del otro lado puede estar contestando ahora mismo. */
  useEffect(() => {
    if (!abierto) {
      setMensajes([]);

      return undefined;
    }

    let vigente = true;

    const traer = async () => {
      try {
        const { mensajes: filas, yo: quienSoy } = await reclamosApi.mensajes(abierto);

        if (vigente) {
          setMensajes(filas);
          setYo(quienSoy);
        }
      } catch {
        /* Un refresco que falla no borra lo que ya se estaba leyendo. */
      }
    };

    void traer();

    const temporizador = window.setInterval(() => void traer(), REFRESCO_MS);

    return () => {
      vigente = false;
      window.clearInterval(temporizador);
    };
  }, [abierto]);

  /* Al llegar un mensaje, se baja: lo último es lo que importa. */
  useEffect(() => {
    finDelChat.current?.scrollIntoView({ block: 'nearest' });
  }, [mensajes]);

  const escribir = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const limpio = texto.trim();

    if (!limpio || !abierto || enviando) {
      return;
    }

    setEnviando(true);

    try {
      await reclamosApi.escribir(abierto, limpio);
      setTexto('');

      const { mensajes: filas } = await reclamosApi.mensajes(abierto);

      setMensajes(filas);
    } catch {
      setError('No pudimos enviar el mensaje.');
    } finally {
      setEnviando(false);
    }
  };

  /* Resolver es de administración: es quien decide qué se hace, y de acá
     sale el mensaje que después le llega al cliente. */
  const resolver = async (resolucion: string) => {
    if (!resolviendo) {
      return;
    }

    try {
      await reclamosApi.resolver(resolviendo.id, resolucion);
      await cargar();
    } catch {
      setError('No pudimos resolver el reclamo.');
    }
  };

  const sinAtender = reclamos.filter((reclamo) => reclamo.estado === 'abierto').length;

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title="Reclamos"
              chip={sinAtender > 0 ? `${sinAtender} sin atender` : undefined}
              subtitle={
                esAdmin
                  ? 'Todos los reclamos, los sin atender primero.'
                  : 'Los reclamos de tus pedidos.'
              }
            />

            {error ? (
              <AuthAviso role="alert" data-tono="error">
                {error}
              </AuthAviso>
            ) : null}

            {!cargando && reclamos.length === 0 ? (
              <EmptyState
                icon={ShieldCheck}
                title="No hay reclamos"
                text="Cuando alguien reporte un problema con un pedido lo vas a ver acá."
                dashed
              />
            ) : null}

            {reclamos.map((reclamo) => (
              <Card key={reclamo.id}>
                <CardPad>
                  <SectionStack>
                    <ReclamoTitulo>
                      <strong>
                        {reclamo.codigo} · {reclamo.comercio}
                      </strong>
                      <ReclamoEstado data-estado={reclamo.estado}>
                        {ESTADO_TEXTO[reclamo.estado] ?? reclamo.estado}
                      </ReclamoEstado>
                    </ReclamoTitulo>

                    <ReclamoDatos>
                      <span>{reclamo.motivo}</span>
                      {reclamo.detalle ? <span>{reclamo.detalle}</span> : null}
                      <span>
                        Lo abrió {reclamo.abrio} · {cuando(reclamo.creado_en)}
                      </span>
                      <span>
                        Entrega en {reclamo.direccion_texto}
                        {reclamo.repartidor ? ` · lo llevó ${reclamo.repartidor}` : ''}
                      </span>
                    </ReclamoDatos>

                    {reclamo.resolucion ? (
                      <ReclamoResolucion>
                        <strong>Se resolvió así:</strong> {reclamo.resolucion}
                      </ReclamoResolucion>
                    ) : null}

                    <ReclamoAcciones>
                      <ExtraBoton
                        type="button"
                        data-tono="suave"
                        onClick={() =>
                          setAbierto((previo) => (previo === reclamo.id ? null : reclamo.id))
                        }
                      >
                        <MessagesSquare size={14} aria-hidden="true" />
                        {abierto === reclamo.id ? 'Cerrar el chat' : 'Abrir chat entre las partes'}
                      </ExtraBoton>

                      {/* Sólo administración cierra un reclamo: es quien
                          decide, y el resto tiene que poder contar lo suyo
                          sin poder darlo por terminado. */}
                      {esAdmin && reclamo.estado !== 'resuelto' && reclamo.estado !== 'cerrado' ? (
                        <ExtraBoton type="button" onClick={() => setResolviendo(reclamo)}>
                          <CheckCircle2 size={14} aria-hidden="true" />
                          Resolver
                        </ExtraBoton>
                      ) : null}
                    </ReclamoAcciones>

                    {abierto === reclamo.id ? (
                      <>
                        <ChatLista>
                          {mensajes.length === 0 ? (
                            <ChatVacio>
                              Todavía no habló nadie. Contá qué pasó de tu lado.
                            </ChatVacio>
                          ) : (
                            mensajes.map((mensaje) => {
                              const propio = mensaje.autor_id === yo;

                              return (
                                <ChatFila key={mensaje.id} data-propio={propio}>
                                  <ChatBurbuja data-propio={propio}>
                                    {/* Quién habla, salvo cuando soy yo. */}
                                    {propio ? null : (
                                      <AutorEtiqueta>
                                        {mensaje.autor} ·{' '}
                                        {ROL_TEXTO[mensaje.rol] ?? mensaje.rol}
                                      </AutorEtiqueta>
                                    )}
                                    {mensaje.texto}
                                    <ChatHora>{cuando(mensaje.creado_en)}</ChatHora>
                                  </ChatBurbuja>
                                </ChatFila>
                              );
                            })
                          )}
                          <div ref={finDelChat} />
                        </ChatLista>

                        <form onSubmit={escribir}>
                          <ChatEntrada>
                            <input
                              value={texto}
                              maxLength={600}
                              placeholder="Escribí lo que pasó…"
                              aria-label="Mensaje del reclamo"
                              onChange={(evento) => setTexto(evento.target.value)}
                            />
                            <ChatEnviar
                              type="submit"
                              disabled={enviando || texto.trim() === ''}
                              aria-label="Enviar"
                            >
                              <Send size={16} aria-hidden="true" />
                            </ChatEnviar>
                          </ChatEntrada>
                        </form>
                      </>
                    ) : null}
                  </SectionStack>
                </CardPad>
              </Card>
            ))}
          </SectionStack>
        </SectionInner>
      </CompactSection>

      <ResolverDialog
        open={resolviendo !== null}
        codigo={resolviendo?.codigo ?? ''}
        onCerrar={() => setResolviendo(null)}
        onResolver={resolver}
      />
    </MarketplaceFrame>
  );
}
