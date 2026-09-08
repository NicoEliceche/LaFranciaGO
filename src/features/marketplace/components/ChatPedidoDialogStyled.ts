import styled from 'styled-components';

// ── Chat del pedido ──

export const ChatLista = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  /* Alto fijo para que la caja de escritura no se mueva al llegar mensajes. */
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

export const ChatFila = styled.div`
  display: flex;

  &[data-propio='true'] {
    justify-content: flex-end;
  }
`;

export const ChatBurbuja = styled.span`
  position: relative;
  max-width: 78%;
  padding: ${({ theme }) => theme.spacing[2]};
  padding-bottom: 1.1rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.35;
  /* Un mensaje largo sin espacios no debe estirar la burbuja. */
  overflow-wrap: anywhere;

  &[data-propio='true'] {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;

export const ChatHora = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing[2]};
  bottom: 0.3rem;
  font-size: 0.625rem;
  opacity: 0.7;
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
  align-self: center;
  max-width: 85%;
  padding: 0.3rem ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-align: center;
  line-height: 1.35;
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
