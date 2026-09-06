import styled from 'styled-components';

// ── Detalle del pedido para el repartidor ──

export const DetalleBloque = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const DetalleTitulo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const DetalleDato = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const DetalleItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const DetalleItemNombre = styled.span`
  min-width: 0;

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const DetalleTotal = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
  padding-top: ${({ theme }) => theme.spacing[1]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.typography.size.sm};

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;
