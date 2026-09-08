import styled from 'styled-components';

/**
 * Las estrellas para puntuar.
 *
 * Botones de verdad y no íconos con un click encima: se navegan con el
 * teclado, se leen con lector de pantalla y tienen el tamaño que un dedo
 * necesita para no errarle a la de al lado.
 */
export const EstrellasFila = styled.div`
  display: flex;
  gap: 0.15rem;
`;

export const EstrellaBoton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.border};
  cursor: pointer;
  transition: color 140ms ease, transform 140ms ease;

  /* Se pintan todas las anteriores, como en cualquier puntuación: cuatro
     estrellas es "cuatro de cinco", no "la cuarta". */
  &[data-encendida='true'] {
    color: ${({ theme }) => theme.color.warning};
  }

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 140ms ease;

    &:hover {
      transform: none;
    }
  }
`;

export const ResenaBloque = styled.div`
  display: grid;
  gap: 0.4rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

/** Qué significa la nota elegida, en palabras. */
export const ResenaLeyenda = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  min-height: 1.1rem;
`;

export const ResenaComentario = styled.textarea`
  width: 100%;
  min-height: 5rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.color.textMuted};
  }
`;
