import styled from 'styled-components';

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

export const MapCrosshair = styled.span`
  position: absolute;
  left: 50%;
  bottom: ${({ theme }) => theme.spacing[2]};
  z-index: 500;
  padding: 0.28rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(5, 8, 22, 0.72);
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
  transform: translateX(-50%);
  pointer-events: none;
`;
