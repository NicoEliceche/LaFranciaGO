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

// ── Proceso de alta ──

export const StepTrack = styled.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StepRow = styled.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
`;

/** Número y línea: arman el hilo vertical que conecta los pasos. */
export const StepMarker = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.25rem;
`;

export const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.65rem;
  height: 1.65rem;
  border-radius: ${({ theme }) => theme.radius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  /* Se distingue lo que hace el comercio de lo que hacemos nosotros. */
  &[data-owner='user'] {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &[data-owner='app'] {
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

export const StepLine = styled.span`
  width: 2px;
  flex: 1 1 auto;
  min-height: 1.5rem;
  border-radius: 2px;
  background: ${({ theme }) => theme.color.border};
`;

export const StepBody = styled.div`
  display: grid;
  gap: 0.15rem;
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
`;

export const StepHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const StepTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const StepDuration = styled.span`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  white-space: nowrap;
`;

export const StepText = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
`;

export const StepOwner = styled.span`
  justify-self: start;
  margin-top: 0.2rem;
  padding: 0.1rem 0.45rem;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &[data-owner='user'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-owner='app'] {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

// ── Confirmación del alta ──

export const RegisteredNotice = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.success};
  background: ${({ theme }) => theme.color.surfaceMuted};

  &[data-tono='error'] {
    border-color: ${({ theme }) => theme.color.danger};
  }
`;

export const RegisteredTitle = styled.strong`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.success};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
`;

export const RegisteredMeta = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;
