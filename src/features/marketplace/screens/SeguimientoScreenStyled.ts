import styled from 'styled-components';

// ── Seguimiento del pedido ──

/**
 * El mapa, con altura propia.
 *
 * El contenedor de Leaflet toma la del padre, y sin una definida quedaba
 * chato: los puntos no entraban en el encuadre.
 */
export const MapaCaja = styled.div`
  height: 20rem;

  @media (min-width: 48rem) {
    height: 24rem;
  }
`;

/**
 * Los pasos del pedido, en vertical.
 *
 * Vertical y no horizontal porque cada paso lleva su propia hora y una línea
 * de texto: en horizontal no entrarían en un teléfono.
 */
export const Linea = styled.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Paso = styled.li`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  position: relative;

  /* La línea que une los pasos, salvo después del último. */
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 0.68rem;
    top: 1.4rem;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.color.border};
  }

  &[data-hecho='true']:not(:last-child)::before {
    background: ${({ theme }) => theme.color.primary};
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const PasoMarca = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSoft};
  z-index: 1;

  &[data-hecho='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  /* El paso en curso late: es lo que está pasando ahora. */
  &[data-actual='true'] {
    animation: seg-latido 2s ease-in-out infinite;
  }

  @keyframes seg-latido {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(0, 71, 231, 0.4);
    }
    50% {
      box-shadow: 0 0 0 6px rgba(0, 71, 231, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-actual='true'] {
      animation: none;
    }
  }
`;

export const PasoTexto = styled.div`
  display: grid;
  gap: 0.1rem;
  padding-top: 0.1rem;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    color: ${({ theme }) => theme.color.textSoft};
  }

  > span {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: ${({ theme }) => theme.typography.size.xs};
    line-height: 1.35;
  }

  &[data-hecho='true'] > strong {
    color: ${({ theme }) => theme.color.text};
  }
`;

/** Quién lleva el pedido, con su vehículo. */
export const RepartidorFila = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`;

export const RepartidorIcono = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
`;

export const RepartidorDatos = styled.div`
  display: grid;
  gap: 0.1rem;
  flex: 1 1 auto;
  min-width: 0;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

/**
 * Cuándo se informó la última posición.
 *
 * Importa: un punto de hace media hora no dice dónde está el repartidor
 * ahora, y mostrarlo sin aclararlo sería mentir.
 */
export const FrescuraChip = styled.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
  background: rgba(52, 211, 153, 0.16);
  color: ${({ theme }) => theme.color.success};

  &[data-fresca='false'] {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

/** Las partes de un pedido dividido, cada una con su propio estado. */
export const PartesLista = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ParteFila = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.typography.size.sm};

  > span:first-child {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  > small {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

/**
 * Abrir el chat del pedido.
 *
 * Es desde acá que el cliente pide extras y habla con quien lo lleva. Va
 * junto a los datos del repartidor, que es donde mira cuando quiere
 * comunicarse.
 */
export const ChatBoton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
  }
`;

/** Los extras cobrables: lo que se compró y todavía no se pagó. */
export const ExtrasResumen = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.primarySoft};
`;

export const ExtraLinea = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.sm};

  > span:first-child {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-variant-numeric: tabular-nums;
  }
`;
