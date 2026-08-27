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
  box-shadow: ${({ theme }) => theme.shadow.md};
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

  /* Degradé que insinúa que el contenido sigue. */
  &[data-side='left']::before,
  &[data-side='right']::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.25rem;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
  }

  &[data-side='left']::before {
    left: 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.color.background} 30%,
      transparent 100%
    );
  }

  &[data-side='right']::before {
    right: 0;
    background: linear-gradient(
      270deg,
      ${({ theme }) => theme.color.background} 30%,
      transparent 100%
    );
  }
`;
