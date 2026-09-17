import styled from 'styled-components';

export const Envoltura = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};

  /* Sin esto el cursor dice "hacé clic" sobre algo que no responde. */
  cursor: not-allowed;

  /* Un indicio que se ve siempre: el aviso completo sale al acercarse, pero
     de lejos ya se distingue que esta función es de la computadora. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px dashed ${({ theme }) => theme.color.borderStrong};
    border-radius: inherit;
    pointer-events: none;
  }
`;

export const Capa = styled.div`
  /* Apagado, pero legible: el comercio tiene que poder leer qué función es
     para saber qué gana instalando el sistema en el local. Por debajo de
     0.6 el texto deja de tener contraste suficiente. */
  opacity: 0.65;
  filter: grayscale(0.4);
  pointer-events: none;
  transition: opacity 160ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Aviso = styled.div`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};

  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.md};

  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
  text-align: start;

  opacity: 0;
  transform: translateY(0.35rem);
  transition:
    opacity 160ms ease,
    transform 160ms ease;

  &[data-visible='si'] {
    opacity: 1;
    transform: translateY(0);
  }

  > svg {
    flex: none;
    color: ${({ theme }) => theme.color.primary};
  }

  /* En pantalla táctil no hay hover: el aviso se ve siempre. */
  @media (hover: none) {
    opacity: 1;
    transform: none;
    position: static;
    margin-top: ${({ theme }) => theme.spacing[2]};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
