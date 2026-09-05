import styled from 'styled-components';

export const RegistrationGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const RegistrationNotes = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const RegistrationSteps = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

// ── Autocompletado de rubro ──

export const TradeCombo = styled.div`
  position: relative;
`;

/** Sugerencias sobre el formulario, sin empujar los campos de abajo. */
export const TradeSuggestList = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  z-index: 5;
  display: grid;
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

export const TradeSuggestItem = styled.button`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

/** Abre el mapa para marcar la ubicación exacta del comercio. */
export const MapPickerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  margin-top: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px dashed ${({ theme }) => theme.color.borderStrong};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;
