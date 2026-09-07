import styled from 'styled-components';

// ── Panel del repartidor ──

export const PedidoTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};

  > span {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    min-width: 0;
  }
`;

/** La distancia es el dato que decide: se muestra destacada. */
export const DistanciaChip = styled.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
`;

export const PedidoDatos = styled.div`
  display: grid;
  gap: 0.1rem;
`;

export const PedidoDato = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

/* Un solo botón: tomar el viaje se decide adentro del detalle, no acá.
   Desde la tarjeta no se ve el volumen real, y aceptar a ciegas un pedido
   que no entra en la moto (o un flete que era para un camión) es un
   compromiso que después hay que deshacer. */
export const VerDetalleBoton = styled.button`
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

export const UbicacionAviso = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;

  > svg {
    flex: 0 0 auto;
  }

  > span {
    flex: 1 1 auto;
  }

  > button {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    flex: 0 0 auto;
    min-height: 2rem;
    padding: 0 ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    cursor: pointer;
  }
`;

// ── Envíos tomados ──

/**
 * Los pasos del envío, dibujados como una línea de progreso.
 *
 * El repartidor tiene que ver de un vistazo en qué punto está sin leer: el
 * paso hecho queda pintado, el actual resaltado y los que faltan en gris.
 */
export const PasosEnvio = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const PasoEnvio = styled.span`
  flex: 1 1 0;
  display: grid;
  gap: 0.25rem;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.color.textMuted};
  text-align: center;
  line-height: 1.2;

  &::before {
    content: '';
    display: block;
    height: 4px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.border};
  }

  &[data-hecho='true'] {
    color: ${({ theme }) => theme.color.textSoft};

    &::before {
      background: ${({ theme }) => theme.color.primary};
    }
  }

  &[data-actual='true'] {
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

/** El botón que hace avanzar el envío. El último paso cambia de color. */
export const AvanzarBoton = styled.button`
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

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brandHover};
  }

  /* Entregar es el paso que cierra el pedido: se distingue del resto para
     que no se toque de apuro creyendo que es "en camino". */
  &[data-final='true'] {
    background: ${({ theme }) => theme.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`;

/** Pestañas entre lo disponible y lo que ya tomó. */
export const PanelPestanas = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const PanelPestana = styled.button`
  flex: 1 1 0;
  min-height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activa='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

// ── Vehículo del repartidor ──

/**
 * Con qué trabaja hoy.
 *
 * Decide qué pedidos puede tomar, así que va arriba de todo: es lo primero
 * que hay que confirmar al abrir el panel.
 */
export const VehiculoBarra = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};

  > span {
    flex: 1 1 auto;
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const VehiculoOpcion = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSoft};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activo='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

/**
 * Marca de si el pedido le entra.
 *
 * En verde cuando entra tal cual, en ámbar cuando va a tener que hacer más de
 * un viaje: el repartidor decide con eso antes de tocar nada.
 */
export const CabeChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex: 0 0 auto;
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};

  &[data-entra='true'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-entra='false'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({ theme }) => theme.color.warning};
  }
`;

/** Pedir partir el pedido: acción secundaria, no compite con "tomar". */
export const FraccionarBoton = styled.button`
  width: 100%;
  min-height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px dashed ${({ theme }) => theme.color.border};
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: border-color 160ms ease, color 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;
