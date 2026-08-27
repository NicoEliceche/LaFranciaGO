import styled, { css, keyframes } from 'styled-components';

import { neonIcon } from '@core/theme/neon';

// ── Campo de archivo ──

const scan = keyframes`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(320%); }
`;

export const FileFieldWrap = styled.div`
  width: 100%;
  min-width: 0;
`;

export const FileFieldShell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3.25rem;
  padding: 0.4rem 0.4rem 0.4rem 0.45rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  overflow: hidden;
  transition: background-color 200ms ease;

  /* Barrido sutil, del mismo lenguaje del interruptor NOCHE. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 28%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-110%);
    pointer-events: none;
  }

  &:hover::after {
    animation: ${scan} 1.5s linear;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }

  ${({ theme }) =>
    theme.mode === 'dark'
      ? css`
          border-color: rgba(77, 229, 255, 0.24);

          &[data-filled='true'] {
            border-color: rgba(77, 229, 255, 0.55);
            box-shadow: 0 0 10px rgba(77, 229, 255, 0.08);
          }
        `
      : css`
          &[data-filled='true'] {
            border-color: ${theme.color.primary};
          }
        `};

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`;

export const FileFieldButton = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 0 0 auto;
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }

  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.11);
    `};
`;

export const FileFieldStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  flex: 1 1 auto;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  z-index: 1;

  &[data-filled='true'] {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

export const FileFieldStatusIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSoft};

  &[data-filled='true'] {
    color: ${({ theme }) => theme.color.success};

    ${neonIcon};
  }
`;

export const FileFieldName = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FileFieldClear = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.9rem;
  height: 1.9rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover {
    background: rgba(220, 38, 38, 0.12);
    color: ${({ theme }) => theme.color.danger};
  }
`;
