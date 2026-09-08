import styled from 'styled-components';

/**
 * Un viaje del historial.
 *
 * Tres datos que se leen en distinto orden: el trayecto es lo que identifica
 * el viaje, la plata es lo que se busca. Por eso el importe queda a la
 * derecha, alineado con los de arriba y abajo, y la fecha abajo del trayecto
 * en vez de pelear por el mismo renglón.
 */
export const ViajeFila = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-bottom: 0;
  }
`;

export const ViajeTrayecto = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow-wrap: anywhere;

  > svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

export const ViajeImporte = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.success};
`;

export const ViajeFecha = styled.small`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;
