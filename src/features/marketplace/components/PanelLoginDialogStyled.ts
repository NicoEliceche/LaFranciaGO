import styled from 'styled-components';

// ── Modal de ingreso al panel ──

export const PanelDialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.header + 30};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(5, 8, 22, 0.62);
  backdrop-filter: blur(6px);
`;

export const PanelDialogCard = styled.div`
  width: 100%;
  max-width: 24rem;
  /* En pantallas bajas el modal scrollea en lugar de cortarse. */
  max-height: 90vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

export const PanelDialogHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const PanelDialogCerrar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`;

/** Enlace discreto: la mayoría entra como cliente, no como comercio. */
export const PanelLoginEnlace = styled.button`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.xs};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;
