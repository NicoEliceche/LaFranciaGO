import styled from 'styled-components';

// ── Grilla de rubros ──

/**
 * Grilla en lugar del riel horizontal: con catorce rubros, verlos todos
 * juntos es más rápido que arrastrar una fila donde la mitad queda oculta.
 */
export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;
