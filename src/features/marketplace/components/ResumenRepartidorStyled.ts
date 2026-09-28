import styled from 'styled-components';

/**
 * Las tres tarjetas del inicio de quien reparte.
 *
 * En el teléfono van una debajo de la otra, que es como se lee de arriba
 * abajo mientras se camina. En pantalla ancha se reparten, porque ahí las
 * tres entran de un vistazo y ese vistazo es justamente el punto.
 */
export const ResumenGrilla = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ResumenTarjeta = styled.article`
  display: grid;
  /* El botón se apoya abajo: con textos de distinto largo, si no, quedaban a
     distinta altura y las tres tarjetas se veían desparejas. */
  grid-template-rows: auto auto 1fr;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};

  /* Lo que tiene algo se despega: de un vistazo se ve si hay trabajo. */
  &[data-destacado='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
`;

export const ResumenIcono = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};

  &[data-destacado='true'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const ResumenDato = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`;

export const ResumenValor = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  line-height: 1.1;
  /* Los dígitos de la misma caja: un número que baila al refrescarse se lee
     como un error de la pantalla. */
  font-variant-numeric: tabular-nums;
`;

export const ResumenEtiqueta = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
`;

export const ResumenAccion = styled.button`
  align-self: end;
  justify-self: start;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;

  /* El de la lista de disponibles va pleno: es lo que se toca para trabajar,
     y los otros dos son para mirar. */
  &[data-fuerte] {
    border-color: transparent;
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-fuerte]:hover {
    background: ${({ theme }) => theme.color.brandHover};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
