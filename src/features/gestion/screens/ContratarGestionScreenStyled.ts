import styled from 'styled-components';

export const Panel = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 34rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};
`;

export const Cabecera = styled.header`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.color.primary};
  }

  h1 {
    margin: 0 0 0.25rem;
    font-size: 1.35rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.textMuted};
    font-size: 0.92rem;
  }
`;

export const Precio = styled.p`
  display: grid;
  gap: 0.2rem;
  margin: 0;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};

  strong {
    font-size: 1.9rem;
    line-height: 1.1;
    /* Los dígitos de la misma caja: un precio que baila al cambiar se lee
       como un error de la pantalla. */
    font-variant-numeric: tabular-nums;
  }
`;

export const PrecioNota = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.85rem;
  line-height: 1.5;
`;

export const Lista = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: 0.93rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.color.success};
  }
`;

export const Contratar = styled.button`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const Aviso = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.danger};
  font-size: 0.9rem;
`;
