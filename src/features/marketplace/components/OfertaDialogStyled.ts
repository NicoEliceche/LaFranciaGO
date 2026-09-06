import styled from 'styled-components';

// ── Alta de oferta ──

export const OfertaCampo = styled.label`
  display: grid;
  gap: 0.3rem;
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  > input,
  > select,
  > textarea {
    width: 100%;
    min-height: 2.75rem;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.primary};
      outline-offset: 1px;
    }
  }

  > textarea {
    min-height: 4.5rem;
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    resize: vertical;
  }
`;

/** Dos campos que se leen juntos (unidades y descuento) van en una fila. */
export const OfertaFila = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const OfertaAyuda = styled.p`
  margin: -${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
`;

/* ── Elegir productos ──

   Lista con casillas en lugar de un desplegable múltiple: el comercio tiene
   que ver el precio de cada uno mientras arma la promo, porque de ahí sale
   cuánto está regalando. */

export const ProductoLista = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  max-height: 13rem;
  overflow-y: auto;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const ProductoOpcion = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: background-color 140ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }

  &[data-elegido='true'] {
    background: ${({ theme }) => theme.color.primarySoft};
  }

  > input {
    flex: 0 0 auto;
    accent-color: ${({ theme }) => theme.color.primary};
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: anywhere;
  }

  > small {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

/** Cuántas unidades de ese producto entran en el combo. */
export const UnidadesCombo = styled.input`
  flex: 0 0 auto;
  width: 3.25rem;
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-align: center;
`;

/* ── Vista previa ──

   Muestra la tarjeta tal como la va a ver el cliente. Un descuento mal
   cargado se nota acá, antes de publicarlo. */

export const PreviaCaja = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
`;

export const PreviaFoto = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 5rem;
  height: 5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.color.surface};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/**
 * El porcentaje sobre la foto, como una marca de agua.
 *
 * Va en la esquina y en el azul de la marca: es el dato que hace parar el
 * scroll, así que tiene que leerse antes que el nombre del producto.
 */
export const PreviaSello = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  padding: 0.15rem 0.4rem;
  border-radius: ${({ theme }) => theme.radius.md} 0 0 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.2;
`;

export const PreviaDatos = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: anywhere;
  }
`;

export const PreviaPrecios = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;

  > s {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  > strong {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

export const PreviaAhorro = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;
