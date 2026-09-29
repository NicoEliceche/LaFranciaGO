import styled from 'styled-components';

export const Panel = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  /* Más ancho que antes: ahora hay dos planes lado a lado en escritorio. */
  max-width: 56rem;
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
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};

  strong {
    font-size: 1.75rem;
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

/**
 * Lo que trae el plan.
 *
 * Las lineas van juntas a proposito: separadas se leian como siete anuncios
 * sueltos y la lista parecia mas larga de lo que es, que en una pantalla que
 * cobra juega en contra. Apretadas se leen de un saque como un solo bloque
 * de lo que se lleva.
 */
export const Lista = styled.ul`
  display: grid;
  gap: 0.3rem;
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

  /* La linea que dice "todo lo del otro plan" se despega de las que siguen:
     no es una prestacion mas, es de que se parte. */
  &[data-incluye] {
    padding-bottom: 0.4rem;
    margin-bottom: 0.15rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
  }
`;

export const Contratar = styled.button`
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  /* Se pega al fondo de la tarjeta: las dos listas tienen distinto largo y
     si no los botones quedan a distinta altura. */
  align-self: end;

  /* El destacado lleva el botón pleno; el otro, uno tranquilo. Que los dos
     griten deja al comercio sin una recomendación. */
  &[data-destacado='true'] {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brandHover};
    color: ${({ theme }) => theme.color.onPrimary};
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

/* ── Los dos planes ── */

export const Planes = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  /* En el teléfono van uno debajo del otro: dos columnas de 170px no dejan
     leer ninguna de las dos. */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
`;

export const PlanTarjeta = styled.article`
  display: grid;
  /* La lista se estira y empuja el botón al fondo, así los dos quedan a la
     misma altura aunque un plan tenga más líneas que el otro. */
  grid-template-rows: auto auto 1fr auto;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};

  &[data-destacado='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const PlanCabecera = styled.header`
  display: grid;
  gap: 0.35rem;

  h2 {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.textMuted};
    font-size: 0.88rem;
    line-height: 1.45;
  }
`;

/**
 * El titulo del plan con su distintivo al lado.
 *
 * El pill estaba en su propia linea y empujaba el precio hacia abajo, asi
 * que las dos tarjetas tenian el numero a distinta altura y costaba
 * compararlas —que es lo unico que se hace en esta pantalla—. Al lado del
 * titulo ocupa el espacio que ya estaba vacio a la derecha.
 *
 * Si no entran juntos baja solo el pill, que es lo accesorio: el titulo
 * nunca se parte.
 */
export const PlanTitulo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  h2 {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.2;
  }
`;

export const Destacado = styled.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

/**
 * La salida hacia la aplicación.
 *
 * Se entra al sistema desde el menú de la aplicación, pero no había por
 * dónde volver: el comercio quedaba adentro y tenía que usar el botón del
 * navegador, que en el teléfono instalado no existe.
 */
export const Volver = styled.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.4rem;
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;
