import styled from 'styled-components';

/* La barra de "hay algo nuevo": visible pero no urgente. */
export const Barra = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-inline-start: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surfaceMuted};

  > svg {
    flex: none;
    color: ${({ theme }) => theme.color.primary};
  }

  > div {
    flex: 1 1 auto;
    min-width: 0;

    > strong {
      display: block;
      font-size: ${({ theme }) => theme.typography.size.sm};
    }

    > span {
      display: block;
      color: ${({ theme }) => theme.color.textSoft};
      font-size: ${({ theme }) => theme.typography.size.xs};
    }
  }

  /* En el teléfono no entra todo en una línea. */
  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    flex-wrap: wrap;
  }
`;

/* La pantalla que no se puede cerrar, cuando la versión ya no sirve. */
export const Bloqueo = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;

  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing[3]};

  background: rgba(5, 8, 22, 0.82);
  backdrop-filter: blur(2px);
`;

export const Cuadro = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  width: min(30rem, 100%);
  padding: ${({ theme }) => theme.spacing[4]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  text-align: center;

  > svg {
    justify-self: center;
    color: ${({ theme }) => theme.color.primary};
  }

  > h2 {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.lg};
    line-height: 1.2;
  }
`;

export const Texto = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.45;

  &[data-tono='suave'] {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const Botones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  > button {
    min-height: 2.3rem;
    padding: 0 ${({ theme }) => theme.spacing[3]};

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: 600;
    cursor: pointer;

    &[data-tono='fuerte'] {
      border-color: ${({ theme }) => theme.color.primary};
      background: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.onPrimary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.primary};
      outline-offset: 2px;
    }
  }
`;

export const Cerrar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 1.9rem;
  height: 1.9rem;

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 1px;
  }
`;
