import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * La barra del carrito que acompaña por toda la aplicación.
 *
 * Flota sobre el contenido, por encima de la barra de abajo pero sin taparla,
 * y mide lo que mide su contenido: al ancho de la pantalla dejaba un hueco
 * grande entre el total y el botón, y tapaba más de lo necesario.
 */
export const BarraCarritoCaja = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(
    ${({ theme }) => theme.layout.bottomNavHeight} + ${({ theme }) => theme.spacing[2]} +
      env(safe-area-inset-bottom)
  );
  z-index: ${({ theme }) => theme.zIndex.bottomNav - 1};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  width: max-content;
  max-width: min(100% - 2rem, 30rem);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]}
    ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceDark};
  color: ${({ theme }) => theme.color.onDark};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transform: translateX(-50%);

  /* En oscuro el negro de la barra se funde con el fondo: se despega con
     borde y una sombra más marcada. */
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      background: linear-gradient(135deg, #0b1430 0%, #10224f 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing[4]};
  }

  /* En escritorio el menú lateral ocupa la izquierda: la barra se centra
     sobre el contenido y no sobre la ventana. */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`;

/**
 * El lugar que la barra ocupa al final de la página.
 *
 * Está fija, así que no empuja nada y tapaba lo último de cada lista. Esto le
 * reserva abajo lo que mide, y el alto lo pone el componente después de
 * medirla: un total largo le cambia la altura y un número a mano quedaría mal
 * justo en ese caso.
 */
export const BarraCarritoEspacio = styled.div.attrs({ 'aria-hidden': true })`
  flex: 0 0 auto;
  transition: height 180ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const BarraCarritoDatos = styled.div`
  display: grid;
  gap: 0;
  min-width: 0;

  > span {
    color: rgba(255, 255, 255, 0.72);
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
  }
`;

export const BarraCarritoTotalLinea = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const BarraCarritoTotal = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  /* Los dígitos de la misma caja: un total que baila al agregar algo se lee
     como un error de la pantalla. */
  font-variant-numeric: tabular-nums;
`;

export const BarraCarritoCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 0 0 auto;
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
