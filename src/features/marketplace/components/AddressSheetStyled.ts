import styled from 'styled-components';

import { neonIcon, neonSurface } from '@core/theme/neon';

// ── Hoja de dirección de entrega ──

export const AddressSheetOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.header + 30};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(5, 8, 22, 0.5);
  backdrop-filter: blur(6px);
  opacity: 0;
  transition: opacity 260ms ease;

  &[data-visible='true'] {
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: ${({ theme }) => theme.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const AddressSheetCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 86dvh;
  background: ${({ theme }) => theme.color.surface};
  border-radius: ${({ theme }) => theme.radius['2xl']} ${({ theme }) => theme.radius['2xl']} 0 0;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transform: translateY(100%);
  transition:
    transform 260ms cubic-bezier(0.32, 0.72, 0, 1),
    max-height 260ms ease,
    border-radius 260ms ease;

  &[data-visible='true'] {
    transform: translateY(0);
  }

  /* Paso de alta: la hoja ocupa toda la pantalla para el mapa. */
  &[data-full='true'] {
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 30rem;
    border-radius: ${({ theme }) => theme.radius['2xl']};
    opacity: 0;
    transform: translateY(1.5rem);

    &[data-visible='true'] {
      opacity: 1;
      transform: translateY(0);
    }

    &[data-full='true'] {
      height: min(44rem, 92dvh);
      max-height: 92dvh;
      border-radius: ${({ theme }) => theme.radius['2xl']};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const AddressSheetHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]}
    ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const AddressSheetGrab = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  left: 50%;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.borderStrong};
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const AddressSheetTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
`;

export const AddressSheetClose = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  ${neonIcon};

  &:hover {
    background: ${({ theme }) => theme.color.border};
  }
`;

export const AddressSheetBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]}
    calc(${({ theme }) => theme.spacing[4]} + env(safe-area-inset-bottom));
  overflow-y: auto;

  /* En el paso de alta el mapa es el único que estira; el resto
     conserva su alto natural. */
  &[data-full='true'] {
    grid-template-rows: auto auto minmax(8rem, 1fr) auto auto;
    align-content: stretch;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }
`;

export const AddressSheetSearchField = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};

  &:focus-within {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const AddressSheetSearchInput = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
  }
`;

export const AddressSheetSectionLabel = styled.span`
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const AddressRowButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  text-align: left;
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.surfaceMuted};
  }

  &[data-current='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const AddressRowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
`;

export const AddressRowCopy = styled.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const AddressRowLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
`;

export const AddressRowAddress = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AddressRowCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
`;

export const AddressNewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3rem;
  margin-top: ${({ theme }) => theme.spacing[1]};
  border: 1px dashed ${({ theme }) => theme.color.borderStrong};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

// ── Paso de alta con mapa ──

export const AddressSheetBack = styled.button`
  position: absolute;
  left: ${({ theme }) => theme.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  ${neonIcon};

  &:hover {
    background: ${({ theme }) => theme.color.border};
  }
`;

export const AddressSheetMapWrap = styled.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`;

export const AddressSheetHint = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`;

export const AddressSheetSaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3rem;
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

// ── Sugerencias de direcciones ──

export const SuggestionList = styled.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  overflow-y: auto;
`;

export const SuggestionItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  text-align: left;
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
  }

  > span {
    display: grid;
    gap: 0.05rem;
    min-width: 0;
  }
`;

export const SuggestionLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SuggestionContext = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SuggestionEmpty = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-align: center;
`;
