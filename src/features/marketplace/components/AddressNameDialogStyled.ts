import styled, { keyframes } from 'styled-components';

// ── Diálogo de nombre de dirección ──

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const AddressNameOverlay = styled.div`
  position: fixed;
  inset: 0;
  /* Por encima de la hoja de dirección, que ya usa header + 30. */
  z-index: ${({ theme }) => theme.zIndex.header + 40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${fadeIn} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const AddressNameCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  animation: ${popIn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const AddressNameTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`;

export const AddressNameHint = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;
`;

export const AddressNameLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const AddressNameInput = styled.input`
  width: 100%;
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.base};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }
`;

export const AddressNameActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const AddressNameCancel = styled.button`
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
    border-color: ${({ theme }) => theme.color.borderStrong};
  }
`;

export const AddressNameSave = styled.button`
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textSoft};
    cursor: not-allowed;
  }
`;
