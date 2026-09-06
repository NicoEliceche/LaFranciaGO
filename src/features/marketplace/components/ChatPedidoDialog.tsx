import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Send, X } from 'lucide-react';

import { type MensajeApi, operacionApi } from '@core/data/services/apiClient';

import { CardText, CardTitle } from '../ui';
import { AuthAviso } from '../screens/AuthScreenStyled';
import {
  PanelDialogCard,
  PanelDialogCerrar,
  PanelDialogHeader,
  PanelDialogOverlay,
} from './PanelLoginDialogStyled';
import {
  ChatBurbuja,
  ChatEnviar,
  ChatEntrada,
  ChatFila,
  ChatHora,
  ChatLista,
  ChatVacio,
} from './ChatPedidoDialogStyled';

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
};

export function ChatPedidoDialog({ open, pedidoId, codigo, cliente, onClose }: Props) {
  const [mensajes, setMensajes] = useState<MensajeApi[]>([]);
  const [yo, setYo] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const listaRef = useRef<HTMLDivElement | null>(null);

  const cargar = useCallback(async () => {
    if (!pedidoId) {
      return;
    }

    try {
      const datos = await operacionApi.mensajes(pedidoId);

      setMensajes(datos.mensajes);
      setYo(datos.yo);
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

  return (
    <PanelDialogOverlay onClick={onClose} role="presentation">
      <PanelDialogCard
        role="dialog"
        aria-modal="true"
        aria-label={`Chat del pedido ${codigo}`}
        onClick={(evento) => evento.stopPropagation()}
      >
        <PanelDialogHeader>
          <div>
            <CardTitle>{cliente}</CardTitle>
            <CardText>Pedido {codigo}</CardText>
          </div>
          <PanelDialogCerrar type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </PanelDialogCerrar>
        </PanelDialogHeader>

        {error ? (
          <AuthAviso role="alert" data-tono="error">
            {error}
          </AuthAviso>
        ) : null}

        <ChatLista ref={listaRef}>
          {mensajes.length === 0 ? (
            <ChatVacio>Todavía no hay mensajes. Escribile al cliente.</ChatVacio>
          ) : null}

          {mensajes.map((mensaje) => (
            <ChatFila key={mensaje.id} data-propio={mensaje.autor_id === yo}>
              <ChatBurbuja data-propio={mensaje.autor_id === yo}>
                {mensaje.texto}
                <ChatHora>{hora(mensaje.creado_en)}</ChatHora>
              </ChatBurbuja>
            </ChatFila>
          ))}
        </ChatLista>

        <form onSubmit={enviar}>
          <ChatEntrada>
            <input name="texto" placeholder="Escribí un mensaje" autoComplete="off" />
            <ChatEnviar type="submit" disabled={enviando} aria-label="Enviar">
              <Send size={16} aria-hidden="true" />
            </ChatEnviar>
          </ChatEntrada>
        </form>
      </PanelDialogCard>
    </PanelDialogOverlay>
  );
}
