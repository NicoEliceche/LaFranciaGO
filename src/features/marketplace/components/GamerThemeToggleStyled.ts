import styled, { keyframes } from 'styled-components';

// ── Interruptor de tema, estética gamer ──

const ledPulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`;

const scan = keyframes`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`;

export const GamerToggleShell = styled.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3.5rem;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(145deg, #131C30 0%, #0D1424 100%)'
      : 'linear-gradient(145deg, #FFFFFF 0%, #F1F5FC 100%)'};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

export const GamerToggleLed = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.primary};
  animation: ${ledPulse} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const GamerToggleCopy = styled.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`;

export const GamerToggleTitle = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
`;

export const GamerToggleMode = styled.span`
  padding: 0.05rem 0.35rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.12em;

  &[data-dark='true'] {
    background: rgba(77, 229, 255, 0.14);
    color: #4de5ff;
  }
`;

export const GamerToggleSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GamerToggleTrack = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  width: 3.6rem;
  height: 1.9rem;
  padding: 0.2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? 'rgba(77, 229, 255, 0.34)' : theme.color.borderStrong)};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(180deg, #060B18 0%, #0C1526 100%)'
      : 'linear-gradient(180deg, #DCE5F5 0%, #C9D6EC 100%)'};
  box-shadow: inset 0 2px 4px rgba(5, 8, 22, 0.28);
  overflow: hidden;
`;

export const GamerToggleScanline = styled.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${scan} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

export const GamerToggleGlow = styled.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`;

export const GamerToggleRail = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(255,255,255,0.34)' : 'rgba(11,16,32,0.34)')};
  pointer-events: none;
`;

export const GamerToggleThumb = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(180deg, #ffffff 0%, #dfe8f7 100%);
  color: ${({ theme }) => theme.color.brand};
  box-shadow: 0 2px 6px rgba(5, 8, 22, 0.32);
  transform: translateX(0);
  transition: transform 260ms cubic-bezier(0.34, 1.4, 0.5, 1), background 220ms ease,
    color 220ms ease, box-shadow 220ms ease;
  z-index: 1;

  &[data-dark='true'] {
    transform: translateX(1.7rem);
    background: linear-gradient(180deg, #4de5ff 0%, #1FA8DE 100%);
    color: #041018;
    box-shadow: 0 0 12px rgba(77, 229, 255, 0.3);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
