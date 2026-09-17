import styled from 'styled-components';

/**
 * El listado del sistema de gestión.
 *
 * Todas las pantallas repiten la misma forma: totales arriba que responden
 * al filtro, filtros, y una tabla con acciones por fila. Vale la pena que
 * sea una sola pieza y no una tabla distinta en cada pantalla.
 *
 * En el teléfono la tabla no se achica: cada fila pasa a ser una ficha. Una
 * tabla de catorce columnas en 375px no se lee de ninguna manera.
 */

export const Totales = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Total = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};

  > span {
    display: block;
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  > strong {
    display: block;
    margin-top: 0.15rem;
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-variant-numeric: tabular-nums;
    line-height: 1.1;
  }

  &[data-tono='cobrado'] > strong {
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tono='debe'] > strong {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const BarraFiltros = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    align-items: end;
  }
`;

export const Campo = styled.label`
  display: grid;
  gap: 0.25rem;
  min-width: 0;

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  > input,
  > select {
    width: 100%;
    min-width: 0;
    height: 2.4rem;
    padding: 0 ${({ theme }) => theme.spacing[2]};

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.primary};
      outline-offset: 1px;
    }
  }
`;

/* La tabla scrollea sola: el cuerpo de la página nunca se va al costado. */
export const Marco = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  overflow: hidden;
`;

export const Desplazable = styled.div`
  overflow-x: auto;

  /* Debajo de esta medida la tabla se convierte en fichas. */
  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    overflow-x: visible;
  }
`;

export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.size.sm};

  th,
  td {
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    text-align: start;
    white-space: nowrap;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 1;

    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textSoft};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  tbody tr {
    border-top: 1px solid ${({ theme }) => theme.color.border};

    &:hover {
      background: ${({ theme }) => theme.color.surfaceMuted};
    }
  }

  /* Los números se leen en columna: mismo ancho por dígito. */
  td[data-tipo='numero'] {
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  /* En el teléfono cada fila es una ficha con su etiqueta al costado. */
  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    display: block;

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
    }

    tr {
      padding: ${({ theme }) => theme.spacing[2]} 0;
    }

    td {
      display: grid;
      grid-template-columns: 8rem minmax(0, 1fr);
      gap: ${({ theme }) => theme.spacing[2]};
      padding-block: 0.3rem;
      white-space: normal;

      &::before {
        content: attr(data-etiqueta);
        color: ${({ theme }) => theme.color.textSoft};
        font-size: ${({ theme }) => theme.typography.size.xs};
      }
    }

    td[data-tipo='numero'] {
      text-align: start;
    }
  }
`;

export const Pie = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.color.border};

  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};

  > span {
    flex: 1 1 auto;
  }
`;

export const BotonPagina = styled.button`
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.xs};
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 1px;
  }
`;

export const Etiqueta = styled.span`
  display: inline-block;
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;

  &[data-tono='bien'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tono='espera'] {
    background: rgba(217, 119, 6, 0.14);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-tono='mal'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({ theme }) => theme.color.danger};
  }
`;
