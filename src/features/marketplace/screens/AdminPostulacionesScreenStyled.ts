import styled from 'styled-components';

// ── Revisión de postulaciones ──

export const FiltroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const FiltroChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &[data-active='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const PostulacionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const PostulanteNombre = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
`;

export const PostulanteMeta = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

/** El color dice el estado de un vistazo, sin leer. */
export const RolChip = styled.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &[data-estado='aprobado'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.success};
  }

  &[data-estado='rechazado'] {
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-estado='cambios'] {
    color: ${({ theme }) => theme.color.warning};
  }
`;

/** Fila de dato: etiqueta a la izquierda, valor a la derecha. */
export const DatoFila = styled.div`
  display: grid;
  grid-template-columns: minmax(6rem, auto) minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0.35rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const DatoClave = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const DatoValor = styled.span`
  color: ${({ theme }) => theme.color.text};
  /* Un CUIT o una dirección larga se parten en lugar de desbordar. */
  overflow-wrap: anywhere;
`;

export const NotaInput = styled.textarea`
  width: 100%;
  min-height: 3.5rem;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const DecisionRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const botonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 2.75rem;
  border-radius: 9999px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 180ms ease;

  &:disabled {
    opacity: 0.5;
    cursor: progress;
  }
`;

export const BotonAprobar = styled.button`
  ${botonBase}
  border: 0;
  background: ${({ theme }) => theme.color.success};
  color: #06251a;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const BotonCambios = styled.button`
  ${botonBase}
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

/* Rechazar es la acción irreversible: se muestra en texto, no como botón
   lleno, para que no compita visualmente con aprobar. */
export const BotonRechazar = styled.button`
  ${botonBase}
  border: 1px solid ${({ theme }) => theme.color.border};
  background: transparent;
  color: ${({ theme }) => theme.color.danger};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;
