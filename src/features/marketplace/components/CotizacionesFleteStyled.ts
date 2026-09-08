import styled from 'styled-components';

export const CotizacionLista = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

/**
 * Un precio ofrecido.
 *
 * La aceptada se queda a la vista y marcada, en vez de esconder las otras:
 * el cliente tiene que poder ver a quién eligió y por cuánto sin abrir nada.
 */
export const CotizacionCaja = styled.div`
  display: grid;
  gap: 0.3rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

  &[data-estado='aceptada'] {
    border-color: ${({ theme }) => theme.color.success};
  }

  &[data-estado='rechazada'],
  &[data-estado='vencida'] {
    opacity: 0.55;
  }
`;

export const CotizacionFletero = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const CotizacionPrecio = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
`;

export const CotizacionDato = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({ theme }) => theme.color.textMuted};
  }

  &[data-elegida] {
    color: ${({ theme }) => theme.color.success};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const CotizacionTomar = styled.button`
  justify-self: start;
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

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`;
