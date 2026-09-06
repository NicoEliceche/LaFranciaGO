import styled from 'styled-components';

// ── Panel del comercio ──

export const ComercioCabecera = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
`;

export const ComercioNombre = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  letter-spacing: -0.02em;
`;

export const ComercioDatos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({ theme }) => theme.spacing[2]};
  margin-top: 0.15rem;
`;

/** Los datos se separan con un punto, salvo el primero. */
export const ComercioDato = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
`;

export const NuevoProductoBoton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px dashed ${({ theme }) => theme.color.borderStrong};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const ProductoFila = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ProductoInfo = styled.div`
  min-width: 0;
`;

export const ProductoNombre = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const ProductoPrecio = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const ProductoAcciones = styled.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ProductoBotonIcono = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }

  /* Borrar se distingue en rojo sólo al pasar por encima: en reposo compite
     menos con editar, que es la acción habitual. */
  &[data-tono='danger']:hover {
    color: ${({ theme }) => theme.color.danger};
    border-color: ${({ theme }) => theme.color.danger};
  }
`;
