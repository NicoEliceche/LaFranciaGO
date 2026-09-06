import styled from 'styled-components';

// ── Ingreso y registro ──

/** Columna angosta y centrada: es un formulario corto, no una pantalla ancha. */
export const AuthShell = styled.div`
  width: 100%;
  max-width: 26rem;
  margin-inline: auto;
`;

/**
 * Botón de Google sobre fondo blanco, como pide su guía de marca. El blanco se
 * mantiene también en modo oscuro para que el logo siga siendo reconocible.
 */
export const AuthGoogleBoton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: #ffffff;
  color: #1f1f1f;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: box-shadow 180ms ease;

  &:hover:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const AuthSeparador = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};

  /* Las líneas se dibujan a los lados del texto con pseudoelementos, sin
     marcado extra que el lector de pantalla tenga que anunciar. */
  &::before,
  &::after {
    content: '';
    flex: 1 1 auto;
    height: 1px;
    background: ${({ theme }) => theme.color.border};
  }
`;

export const AuthEnviar = styled.button`
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
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textSoft};
    cursor: not-allowed;
  }
`;

/** Avisos del formulario: error de ingreso o falta de backend. */
export const AuthAviso = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;

  &[data-tono='error'] {
    border: 1px solid ${({ theme }) => theme.color.danger};
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-tono='aviso'] {
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textMuted};
  }
`;

export const AuthCambio = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const AuthCambioBoton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  text-decoration: underline;
`;
