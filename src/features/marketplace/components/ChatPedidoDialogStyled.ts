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
