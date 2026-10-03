import styled, { keyframes } from 'styled-components';

/**
 * El diálogo del mandado.
 *
 * En la computadora es una caja centrada, como cualquier diálogo. En el
 * teléfono sube desde abajo y se pega al borde inferior: ahí la mano llega
 * mejor al pie de la pantalla que al medio, y una caja flotando en el centro
 * con el teclado abierto queda a la mitad de lo que se ve.
 */

const aparecer = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const subir = keyframes`
  from { opacity: 0; transform: translateY(1.5rem); }
  to { opacity: 1; transform: translateY(0); }
`;

const girar = keyframes`
  to { transform: rotate(360deg); }
`;

export const MandadoFondo = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.header + 40};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${aparecer} 160ms ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: ${({ theme }) => theme.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MandadoCaja = styled.div`
  position: relative;
  width: 100%;
  max-height: 92dvh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[4]};
  /* Sólo las esquinas de arriba: abajo se pega al borde de la pantalla. */
  border-radius: ${({ theme }) => theme.radius.xl} ${({ theme }) => theme.radius.xl} 0 0;
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  animation: ${subir} 200ms ease-out;

  /* Un respiro abajo para no quedar debajo de la barra del sistema. */
  padding-bottom: calc(${({ theme }) => theme.spacing[4]} + env(safe-area-inset-bottom));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(34rem, 100%);
    max-height: 86dvh;
    border-radius: ${({ theme }) => theme.radius.xl};
    padding: ${({ theme }) => theme.spacing[5]};
    padding-bottom: ${({ theme }) => theme.spacing[5]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MandadoCerrar = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  inset-inline-end: ${({ theme }) => theme.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }
`;

export const MandadoCuerpo = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  /* Lugar para el botón de cerrar, que flota en la esquina. */
  padding-inline-end: ${({ theme }) => theme.spacing[5]};
`;

export const MandadoTitulo = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 1.2rem;
  line-height: 1.25;
`;

export const MandadoSubtitulo = styled.p`
  margin: -0.35rem 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.45;
`;

export const MandadoTexto = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.5;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  &[data-invalido='true'] {
    border-color: ${({ theme }) => theme.color.danger};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

export const MandadoNota = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.5;
`;

export const MandadoError = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const MandadoAvisos = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MandadoAviso = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
`;

export const MandadoAvisoIcono = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
`;

/* ── Los pasos del mandado ── */

export const MandadoPasos = styled.ol`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MandadoPaso = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};

  > div {
    display: grid;
    gap: 0.15rem;
    min-width: 0;
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.3;
  }

  span {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: ${({ theme }) => theme.typography.size.xs};
    line-height: 1.45;
  }

  /* El que ya pasó se marca en verde; el que se espera queda en el color de
     la marca, con el ícono girando. */
  &[data-estado='hecho'] > span:first-child {
    background: ${({ theme }) => theme.color.success};
    color: #fff;
  }

  &[data-estado='esperando'] {
    border-color: rgba(0, 71, 231, 0.32);

    > span:first-child svg {
      animation: ${girar} 1.1s linear infinite;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-estado='esperando'] > span:first-child svg {
      animation: none;
    }
  }
`;

export const MandadoPasoIcono = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
`;

/* ── Botones ── */

export const MandadoPrimario = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3rem;
  margin-top: ${({ theme }) => theme.spacing[1]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
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

export const MandadoSecundario = styled.button`
  min-height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.danger};
    color: ${({ theme }) => theme.color.danger};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }
`;

/**
 * Los dos botones del pedido: mandado o flete.
 *
 * Uno al lado del otro y no uno debajo: son dos caminos igual de válidos, y
 * apilados el de abajo se lee como secundario cuando no lo es.
 */
export const MandadoBotones = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};

  @media (min-width: 26rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
