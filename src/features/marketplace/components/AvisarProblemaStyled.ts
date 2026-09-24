import styled from 'styled-components';

/**
 * El aviso de problema va discreto.
 *
 * Aparece justo después de un error, cuando la persona ya está fastidiada:
 * un bloque llamativo ahí se lee como si la aplicación estuviera orgullosa de
 * haber fallado. Se ofrece, no se impone.
 */

export const AvisarBoton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  font: inherit;
  font-size: 0.82rem;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const AvisarCaja = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-items: start;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
`;

export const AvisarNota = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.84rem;
  line-height: 1.5;
`;

export const AvisarTexto = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font: inherit;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

export const AvisarEnviado = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  color: ${({ theme }) => theme.color.success};
  font-size: 0.86rem;
`;
