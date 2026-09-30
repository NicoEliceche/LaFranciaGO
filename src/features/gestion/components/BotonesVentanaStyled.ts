import styled from 'styled-components';

/**
 * Los tres botones de la ventana, arriba a la derecha.
 *
 * Miden 46×32 como los de Windows: quien atiende va con la mano a donde
 * siempre estuvo, y un botón más chico de lo esperado se falla seguido.
 * Cuadrados y pegados entre sí, también como los de Windows —redondeados y
 * separados se leerían como acciones de la aplicación, que es justo lo que
 * no son.
 *
 * `-webkit-app-region: no-drag` es imprescindible: la barra de arriba es
 * zona de arrastre para mover la ventana, y sin esto arrastrarla desde
 * encima de un botón movería la ventana en lugar de tocarlo.
 */
export const VentanaBotones = styled.nav`
  display: flex;
  align-items: stretch;
  flex: 0 0 auto;
  margin-left: ${({ theme }) => theme.spacing[2]};
  -webkit-app-region: no-drag;
`;

export const VentanaBoton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.875rem;
  height: 2rem;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.text};
  }

  /* El de cerrar se pone rojo al pasar por encima, como en Windows: es el
     único de los tres que no se deshace, y conviene que se note antes de
     tocarlo y no después. */
  &[data-cerrar]:hover {
    background: #c42b1c;
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
