import styled from 'styled-components';

import { neonIcon } from '@core/theme/neon';

// ── Riel horizontal con indicadores ──

export const ScrollRailShell = styled.div`
  position: relative;
  min-width: 0;
`;

export const ScrollRailTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;

export const ScrollRailArrow = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  /* Sombra corta y centrada: la del token tiene 12px de desplazamiento y en
     un botón de 28px se derrama hacia abajo como una mancha cuadrada. */
  box-shadow: 0 1px 4px rgba(5, 8, 22, 0.18);
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 180ms ease, transform 180ms ease;

  ${neonIcon};

  /* Área táctil cómoda sin agrandar el círculo. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }

  &[data-side='left'] {
    left: -0.35rem;
  }

  &[data-side='right'] {
    right: -0.35rem;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;
