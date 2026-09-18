import styled from 'styled-components';

/**
 * El gráfico de ventas por día.
 *
 * Barras hechas con CSS y no con una librería: es una sola serie de números
 * y traer una librería de gráficos sumaría peso al arranque para dibujar
 * veinte rectángulos.
 */
export const Grafico = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.35rem;
  height: 11rem;
  padding-top: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
`;

export const BarraDia = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
  min-width: 1.6rem;
  height: 100%;

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: 0.62rem;
    white-space: nowrap;
  }
`;

export const Barra = styled.div`
  width: 100%;
  min-height: 2px;
  border-radius: ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0 0;
  background: ${({ theme }) => theme.color.primary};
  transition: height 200ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
