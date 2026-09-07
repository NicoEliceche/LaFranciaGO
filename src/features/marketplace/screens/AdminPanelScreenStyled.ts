import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ── Panel de administración ──

/**
 * Lo que necesita que alguien haga algo.
 *
 * Va arriba de todo y en una fila propia: es a lo que se entra al panel. Los
 * números de cómo viene el negocio se miran después.
 */
export const AtencionGrilla = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const AtencionTarjeta = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: inherit;
  text-decoration: none;
  transition:
    border-color 160ms ease,
    transform 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  /* Con algo pendiente se destaca; en cero queda apagada, porque no hay
     nada que hacer ahí. */
  &[data-hay='true'] {
    border-color: ${({ theme }) => theme.color.warning};
    background: rgba(217, 119, 6, 0.08);
  }
`;

export const AtencionNumero = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  line-height: 1;
  font-variant-numeric: tabular-nums;

  &[data-hay='true'] {
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-hay='false'] {
    color: ${({ theme }) => theme.color.textMuted};
  }
`;

export const AtencionTexto = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.3;
`;

/* ── Números ── */

export const NumeroGrilla = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const NumeroCaja = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

  /* La comisión es lo que gana la plataforma: se distingue del resto. */
  &[data-destacado='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const NumeroEtiqueta = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const NumeroValor = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
`;

export const NumeroVariacion = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &[data-tono='sube'] { color: ${({ theme }) => theme.color.success}; }
  &[data-tono='baja'] { color: ${({ theme }) => theme.color.danger}; }
`;

/* ── Comercios ── */

export const ComercioFila = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child { border-bottom: 0; }
`;

export const ComercioNombre = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: anywhere;
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const ComercioVentas = styled.div`
  display: grid;
  gap: 0.1rem;
  justify-items: end;
  text-align: right;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-variant-numeric: tabular-nums;
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const ComercioAcciones = styled.div`
  display: flex;
  gap: 0.35rem;
`;

/** Marcar destacado o suspender: acciones chicas, de uso ocasional. */
export const AccionIcono = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-activo='true'] {
    border-color: ${({ theme }) => theme.color.warning};
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-tono='danger']:hover {
    border-color: ${({ theme }) => theme.color.danger};
    color: ${({ theme }) => theme.color.danger};
  }
`;

/** Un comercio suspendido se ve suspendido. */
export const EstadoTag = styled.span`
  padding: 0.1rem 0.45rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.65rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &[data-estado='suspendido'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-estado='pendiente'] {
    background: rgba(217, 119, 6, 0.14);
    color: ${({ theme }) => theme.color.warning};
  }
`;
