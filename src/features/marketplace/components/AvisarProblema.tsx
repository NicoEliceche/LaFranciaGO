import { useState } from 'react';
import { Check, LifeBuoy, Send } from 'lucide-react';

import { ApiError, soporteApi } from '@core/data/services/apiClient';

import {
  AvisarBoton,
  AvisarCaja,
  AvisarEnviado,
  AvisarNota,
  AvisarTexto,
} from './AvisarProblemaStyled';

/**
 * El botón para avisar cuando algo no funcionó.
 *
 * La persona nunca ve el error técnico: eso queda del lado de adentro. Pero
 * cuando algo se rompe y sólo lee "no pudimos hacer esto", el problema se
 * termina ahí: lo intenta de nuevo, no anda, y deja de usar la aplicación sin
 * que nadie se entere.
 *
 * Esto le da una salida. Lo que manda no es sólo lo que escriba: va con el
 * error ya registrado del otro lado, quién es y desde dónde. El reporte llega
 * listo para trabajar, en lugar de un "no me anda" que hay que ir a
 * preguntar.
 */
export function AvisarProblema({
  error,
  contexto,
}: {
  /** El error que se produjo, para adjuntar su referencia. */
  error?: unknown;
  /** Qué estaba haciendo, si la pantalla lo sabe. */
  contexto?: string;
}) {
  const [abierto, setAbierto] = useState(false);
  const [comentario, setComentario] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [listo, setListo] = useState(false);

  /* La referencia del error, que es lo que convierte el reporte en algo
     accionable. Sólo viene en los 500. */
  const referencia = error instanceof ApiError ? error.referencia : null;

  const enviar = async () => {
    if (enviando) return;

    setEnviando(true);

    try {
      await soporteApi.reportar({
        comentario,
        registroId: referencia,
        pantalla: contexto ?? window.location.hash,
      });

      setListo(true);
    } catch {
      /* Se da por enviado igual: del otro lado queda anotado aunque el correo
         falle, y decirle "tu aviso tampoco salió" a quien acaba de tropezar
         con un error es ensañarse. */
      setListo(true);
    } finally {
      setEnviando(false);
    }
  };

  if (listo) {
    return (
      <AvisarEnviado role="status">
        <Check size={16} aria-hidden="true" />
        Gracias, ya nos llegó. Lo vamos a revisar.
      </AvisarEnviado>
    );
  }

  if (!abierto) {
    return (
      <AvisarBoton type="button" onClick={() => setAbierto(true)}>
        <LifeBuoy size={15} aria-hidden="true" />
        Avisar del problema
      </AvisarBoton>
    );
  }

  return (
    <AvisarCaja>
      <AvisarNota>
        Contanos qué estabas haciendo. Va con el detalle técnico, así no hace falta
        que lo expliques.
      </AvisarNota>

      <AvisarTexto
        value={comentario}
        onChange={(evento) => setComentario(evento.target.value)}
        placeholder="Quise confirmar el pedido y no pasó nada…"
        rows={3}
        maxLength={2000}
        aria-label="Qué pasó"
        autoFocus
      />

      <AvisarBoton type="button" onClick={() => void enviar()} disabled={enviando}>
        <Send size={15} aria-hidden="true" />
        {enviando ? 'Enviando…' : 'Enviar al equipo'}
      </AvisarBoton>
    </AvisarCaja>
  );
}
