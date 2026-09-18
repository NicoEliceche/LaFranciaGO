import styled from 'styled-components';

export const Buscador = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  > input {
    width: 100%;
    height: 3rem;
    padding: 0 ${({ theme }) => theme.spacing[3]};

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.base};

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.primary};
      outline-offset: 1px;
    }

    &:disabled {
      background: ${({ theme }) => theme.color.surfaceMuted};
      cursor: not-allowed;
    }
  }
`;

export const Resultados = styled.div`
  display: grid;
  gap: 1px;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  max-height: 16rem;
  overflow-y: auto;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.border};
`;

export const Resultado = styled.button`
  display: grid;
  gap: 0.1rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};

  border: 0;
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: inherit;
  text-align: start;
  cursor: pointer;

  > strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: -2px;
  }
`;

export const Lineas = styled.div`
  display: grid;
`;

export const Linea = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 5rem auto auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  &:first-child {
    border-top: 0;
  }

  > div {
    min-width: 0;

    > strong {
      display: block;
      font-size: ${({ theme }) => theme.typography.size.sm};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > span {
      color: ${({ theme }) => theme.color.textSoft};
      font-size: ${({ theme }) => theme.typography.size.xs};
    }
  }

  > input {
    width: 100%;
    height: 2.2rem;
    padding: 0 ${({ theme }) => theme.spacing[2]};

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-variant-numeric: tabular-nums;
    text-align: end;
  }
`;

export const Quitar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.danger};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 1px;
  }
`;

/* El cobro queda a la vista: en el mostrador es lo que se toca al final de
   cada venta y no se puede estar bajando para encontrarlo. */
export const Cobro = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 2;

  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) 14rem auto;
    align-items: end;
  }
`;

export const TotalGrande = styled.div`
  > span {
    display: block;
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  > strong {
    display: block;
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 1.9rem;
    font-variant-numeric: tabular-nums;
    line-height: 1.05;
  }
`;
