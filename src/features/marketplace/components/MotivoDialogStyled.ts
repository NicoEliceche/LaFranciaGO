import styled from 'styled-components';

// ── Elegir un motivo ──

/**
 * Cada opción, en una fila tocable.
 *
 * Toda la fila es el área de toque y no sólo el círculo: quien reparte está
 * en la calle, muchas veces con guantes.
 */
export const MotivoOpcion = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: 3rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  &[data-elegido='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }

  > input {
    flex: 0 0 auto;
    accent-color: ${({ theme }) => theme.color.primary};
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: anywhere;
  }
`;
