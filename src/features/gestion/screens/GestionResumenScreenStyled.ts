import styled from 'styled-components';

export const Bloque = styled.section`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const TituloBloque = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: 1.2;
`;

export const Atajos = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

export const Atajo = styled.button`
  display: grid;
  gap: 0.2rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-family: inherit;
  text-align: start;
  cursor: pointer;
  transition: border-color 140ms ease;

  > svg {
    color: ${({ theme }) => theme.color.primary};
  }

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
