import styled from 'styled-components';

// ── Chat del pedido ──

/* La lista con alto propio quedó para los chats embebidos —el del reclamo,
   por ejemplo—, que viven dentro de una tarjeta y no en una ventana. */
export const ChatLista = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  height: 18rem;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
`;

export const ChatVacio = styled.p`
  margin: auto;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-align: center;
`;

/**
 * La fila de un mensaje.
 *
 * Los mensajes seguidos del mismo autor se juntan: sólo el último de la tanda
 * lleva cola y separación. Es lo que hace que una conversación se lea como
 * bloques y no como una lista de globos sueltos.
 */
export const ChatFila = styled.div`
  display: flex;
  margin-bottom: 0.1rem;

  &[data-propio='true'] {
    justify-content: flex-end;
  }

  /* Último de la tanda: aire antes del que habla después. */
  &[data-ultimo='true'] {
    margin-bottom: 0.55rem;
  }
`;

/**
 * La burbuja.
 *
 * La hora va en la misma línea que el final del texto, no debajo: así un
 * "ok" ocupa un renglón y no tres. El espacio se reserva con un relleno al
 * final del texto, que es el truco que usan las aplicaciones de mensajería.
 *
 * La esquina del lado de quien habla se achica sólo en el último mensaje de
 * la tanda, que es lo que dibuja la "cola".
 */
export const ChatBurbuja = styled.span`
  position: relative;
  max-width: min(78%, 32rem);
  padding: 0.45rem ${({ theme }) => theme.spacing[3]} 0.45rem;
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  /* Un mensaje largo sin espacios no debe estirar la burbuja. */
  overflow-wrap: anywhere;

  &[data-propio='true'] {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  /* La cola, sólo en el último de la tanda. */
  &[data-ultimo='true'] {
    border-bottom-left-radius: 0.3rem;
  }

  &[data-ultimo='true'][data-propio='true'] {
    border-bottom-left-radius: 1.1rem;
    border-bottom-right-radius: 0.3rem;
  }

  /* Sitio para la hora, al final del texto. */
  > .texto::after {
    content: '';
    display: inline-block;
    width: 3.2rem;
  }
`;

export const ChatHora = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing[3]};
  bottom: 0.4rem;
  font-size: 0.65rem;
  font-variant-numeric: tabular-nums;
  opacity: 0.65;
`;

/**
 * Quién habla, cuando hay más de dos.
 *
 * En el chat de un pedido sobra —se sabe quién es el otro—, pero en el del
 * reclamo hablan tres y "ya lo entregué" cambia de sentido según quién lo
 * diga. Sólo aparece en el primero de cada tanda.
 */
export const ChatAutor = styled.span`
  display: block;
  margin-bottom: 0.1rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ChatEntrada = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  > input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.75rem;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.size.sm};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const ChatEnviar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`;

// ── Avisos del sistema ──

/**
 * Lo que dice la app, no una persona.
 *
 * Centrado y en gris, sin burbuja: si se viera como un mensaje más, parecería
 * que alguien escribió "Fulano se sumó al chat".
 */
export const ChatSistema = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  align-self: center;
  max-width: 85%;
  margin: 0.35rem 0;
  padding: 0.3rem ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.72rem;
  text-align: center;
  line-height: 1.35;

  > svg {
    flex: 0 0 auto;
    opacity: 0.75;
  }

  /* Alguien entró al chat. Verde: es algo que suma.

     El fondo va con transparencia sobre el color del aviso en vez de un
     token propio: así sirve igual en claro y en oscuro sin declarar dos. */
  &[data-tono='entra'] {
    background: rgba(22, 163, 74, 0.14);
    color: ${({ theme }) => theme.color.success};
  }

  /* Alguien se fue, o algo se dio de baja. */
  &[data-tono='sale'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({ theme }) => theme.color.danger};
  }

  /* El pedido cambió de estado: lo dice la aplicación, no una persona. */
  &[data-tono='estado'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

// ── Extras ──

/**
 * El pedido de algo que no estaba en el pedido.
 *
 * Se distingue de un mensaje común: lleva su etiqueta arriba y muestra en qué
 * estado quedó, porque es una transacción y no una charla.
 */
export const ExtraTarjeta = styled.div`
  display: grid;
  gap: 0.4rem;
  max-width: 85%;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.primarySoft};

  &[data-propio='true'] {
    align-self: flex-end;
  }
`;

export const ExtraEtiqueta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  align-self: start;
  padding: 0.1rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 0.65rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ExtraTexto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow-wrap: anywhere;
`;

/** En qué quedó: aceptado, comprado, cancelado. */
export const ExtraEstado = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &[data-tono='ok'] { color: ${({ theme }) => theme.color.success}; }
  &[data-tono='baja'] { color: ${({ theme }) => theme.color.danger}; }
  &[data-tono='espera'] { color: ${({ theme }) => theme.color.warning}; }
`;

export const ExtraAcciones = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ExtraBoton = styled.button`
  flex: 1 1 auto;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;

  &[data-tono='suave'] {
    border: 1px solid ${({ theme }) => theme.color.border};
    background: transparent;
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:disabled { opacity: 0.6; cursor: progress; }
`;

/**
 * El botón para pedir algo más, flotando sobre el chat.
 *
 * Va fijo abajo y no en el flujo de mensajes: la idea de "ya que vas, traeme"
 * aparece en cualquier momento de la conversación, no al final.
 */
export const ExtraFlotante = styled.button`
  position: sticky;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.5rem;
  margin-top: ${({ theme }) => theme.spacing[2]};
  border: 1px dashed ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover { background: ${({ theme }) => theme.color.primarySoft}; }
`;
