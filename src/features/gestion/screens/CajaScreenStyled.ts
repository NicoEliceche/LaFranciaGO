import styled from 'styled-components';

export const Panel = styled.section`
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
`;

export const TituloPanel = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0 0 ${({ theme }) => theme.spacing[2]};

  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: 1.2;

  > svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Formulario = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
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
    height: 2.5rem;
    padding: 0 ${({ theme }) => theme.spacing[2]};

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};

    /* Los importes se leen mejor con todos los dígitos del mismo ancho. */
    font-variant-numeric: tabular-nums;

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.primary};
      outline-offset: 1px;
    }
  }
`;

export const Accion = styled.button`
  height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: 600;
  cursor: pointer;

  &[data-tono='fuerte'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }
`;

export const Acciones = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Lista = styled.div`
  display: grid;
`;

export const Fila = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  &:first-child {
    border-top: 0;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const Monto = styled.span`
  flex: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-variant-numeric: tabular-nums;

  &[data-signo='mas'] {
    color: ${({ theme }) => theme.color.success};
  }

  &[data-signo='menos'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const Cierre = styled(Fila)``;

export const Diferencia = styled.span`
  flex: none;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;

  &[data-tono='justo'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tono='dispar'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({ theme }) => theme.color.warning};
  }
`;

export const Vacio = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-align: center;
`;

export const Aviso = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-inline-start: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

/**
 * El aviso de que algo funciona en la computadora del negocio.
 *
 * En dorado y no en el gris de los avisos comunes: no es una advertencia de
 * que algo salió mal, es contarle al comercio que esa función existe y dónde
 * se usa. El dorado es el mismo tono con que la aplicación marca lo que se
 * paga aparte, así que se lee como parte de lo que contrató y no como un
 * error.
 *
 * El color se define por tema en lugar de con opacidades: sobre el fondo
 * oscuro un dorado claro vibra y cansa, y sobre el claro uno oscuro se
 * confunde con el texto común.
 */
export const AvisoEscritorio = styled.div`
  display: grid;
  gap: 0.2rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => (theme.mode === 'dark' ? '#8A6A1F' : '#E4C36A')};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(180, 138, 40, 0.14)' : '#FEF7E3')};
  color: ${({ theme }) => (theme.mode === 'dark' ? '#F0D89B' : '#6B4E11')};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.5;

  > strong {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#FFE9B8' : '#4A360A')};
  }
`;

/**
 * Abre la aplicación instalada, desde el navegador.
 *
 * Lleva a `lafranciago://caja`, que Windows entrega a la aplicación del
 * local. Va en el mismo dorado del aviso porque es su continuación: primero
 * se explica que la caja rápida vive en la computadora del negocio, y acá
 * está el camino para llegar.
 */
export const AbrirEscritorio = styled.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.45rem;
  margin-top: ${({ theme }) => theme.spacing[2]};
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => (theme.mode === 'dark' ? '#C79A32' : '#C9A344')};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(199, 154, 50, 0.18)' : '#FBEFC9')};
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFE9B8' : '#4A360A')};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(199, 154, 50, 0.3)' : '#F7E4AE')};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/**
 * Lo que se dice cuando el botón no encontró la aplicación.
 *
 * Un enlace de protocolo que no lleva a ningún lado no avisa nada: el
 * navegador se queda quieto y quien lo tocó concluye que la aplicación está
 * rota. Por eso, si después de unos segundos seguimos acá, se explica qué
 * pasó y se ofrece la descarga.
 */
export const EscritorioNoEsta = styled.p`
  margin: ${({ theme }) => theme.spacing[2]} 0 0;
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.5;

  > a {
    color: inherit;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: underline;
  }
`;
