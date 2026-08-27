import styled, { keyframes } from 'styled-components';

import { neonSurface } from '@core/theme/neon';

// ── Diálogo de confirmación ──

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const ConfirmOverlay = styled.div`
  position: fixed;
  inset: 0;
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

export const ConfirmCard = styled.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  text-align: center;

  ${neonSurface};
  animation: ${popIn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ConfirmTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`;

export const ConfirmText = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.45;
`;

export const ConfirmActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const ConfirmCancelButton = styled.button`
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

export const ConfirmConfirmButton = styled.button`
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.danger};
  color: #ffffff;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: filter 180ms ease, transform 180ms ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text};
    outline-offset: 2px;
  }
`;
