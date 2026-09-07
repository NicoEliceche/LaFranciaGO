import styled from 'styled-components';

import { neonIcon, neonSurface } from '@core/theme/neon';

// ── Mapa de selección de ubicación ──

export const MapWrap = styled.div`
  position: relative;
  min-height: 0;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  overflow: hidden;
`;

export const MapCanvas = styled.div`
  width: 100%;
  height: 100%;
  min-height: 13rem;

  /* Leaflet dibuja sus capas por encima; el pin de marca se define acá
     para no depender de imágenes externas. */
  .lfg-pin__dot {
    display: block;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 50%;
    border: 3px solid #ffffff;
    background: ${({ theme }) => theme.color.brand};
    box-shadow: 0 2px 8px rgba(5, 8, 22, 0.45);
  }

  .lfg-pin {
    cursor: grab;
  }

  /* Repartidor en el mapa de seguimiento: un punto que late, para que se
     note que la posición es en vivo y no una foto vieja. */
  .lfg-repartidor__punto {
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    border: 3px solid #ffffff;
    background: ${({ theme }) => theme.color.success};
    box-shadow: 0 2px 8px rgba(5, 8, 22, 0.45);
    animation: lfg-latido 2s ease-in-out infinite;
  }

  @keyframes lfg-latido {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.18);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .lfg-repartidor__punto {
      animation: none;
    }
  }

  /* ── Seguimiento del pedido ──

     Tres puntos con roles distintos: de dónde sale, a dónde va, y quién lo
     lleva. Se distinguen por forma además de color, para que se lean también
     sin distinguir bien los tonos. */

  .lfg-seg-comercio span,
  .lfg-seg-destino span,
  .lfg-seg-movil span {
    display: block;
    width: 1.15rem;
    height: 1.15rem;
    border: 3px solid #ffffff;
    box-shadow: 0 2px 8px rgba(5, 8, 22, 0.45);
  }

  /* El comercio es un cuadrado: es un lugar fijo. */
  .lfg-seg-comercio span {
    border-radius: 0.3rem;
    background: ${({ theme }) => theme.color.textMuted};
  }

  /* El destino, un rombo: es la meta. */
  .lfg-seg-destino span {
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.color.brand};
    transform: rotate(45deg);
  }

  /* Quien lo lleva late, porque se está moviendo. */
  .lfg-seg-movil span {
    border-radius: 50%;
    background: ${({ theme }) => theme.color.success};
    animation: lfg-latido 2s ease-in-out infinite;
  }

  /* Una posición de hace rato no está latiendo: se apaga para no prometer
     que el punto dice dónde está ahora. */
  .lfg-seg-movil--viejo span {
    background: ${({ theme }) => theme.color.textSoft};
    animation: none;
    opacity: 0.7;
  }

  @media (prefers-reduced-motion: reduce) {
    .lfg-seg-movil span {
      animation: none;
    }
  }

  .lfg-pin:active {
    cursor: grabbing;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.color.surfaceMuted};
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
  }

  .leaflet-control-attribution {
    font-size: 0.625rem;
  }

  /* En oscuro se atenúan las tiles para que no encandilen. */
  ${({ theme }) =>
    theme.mode === 'dark' &&
    `
    .leaflet-tile-pane {
      filter: brightness(0.78) saturate(0.85);
    }
  `}
`;

/* Arriba a la derecha: abajo va el botón de ubicación y arriba a la
   izquierda los controles de zoom de Leaflet. */
export const MapCrosshair = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing[2]};
  top: ${({ theme }) => theme.spacing[2]};
  z-index: 500;
  padding: 0.28rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(5, 8, 22, 0.72);
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
  pointer-events: none;
`;

/* Flota sobre el mapa, como en las apps de mapas conocidas: la acción
   pertenece al mapa, y el cuerpo de la hoja ya está ajustado de alto. */
export const MapLocateButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing[2]};
  bottom: ${({ theme }) => theme.spacing[2]};
  z-index: 500;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: 0 2px 10px rgba(5, 8, 22, 0.28);
  cursor: pointer;
  transition: background-color 180ms ease;

  ${({ theme }) => theme.mode === 'dark' && neonSurface}

  svg {
    flex: 0 0 auto;
    ${neonIcon}
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }

  &:disabled {
    cursor: progress;
    opacity: 0.75;
  }

  /* Mientras busca, el ícono gira. Se respeta a quien pidió menos movimiento. */
  &[data-locating='true'] svg {
    animation: lfg-locate-spin 1s linear infinite;
  }

  @keyframes lfg-locate-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-locating='true'] svg {
      animation: none;
    }
  }
`;

/** Aviso cuando el permiso se rechaza o la ubicación falla. */
export const MapLocateError = styled.p`
  position: absolute;
  left: ${({ theme }) => theme.spacing[2]};
  right: ${({ theme }) => theme.spacing[2]};
  bottom: 3.5rem;
  z-index: 500;
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(5, 8, 22, 0.86);
  color: #ffffff;
  font-size: 0.6875rem;
  line-height: 1.35;
  text-align: center;
`;
