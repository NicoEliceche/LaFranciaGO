import styled from 'styled-components';

// ── Buscador de cuerpo ──

export const SearchBarForm = styled.form`
  width: 100%;
`;

export const SearchBarLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const SearchBarField = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 3rem;
  padding: 0 0.35rem 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSoft};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }
`;

export const SearchBarInput = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const SearchBarSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }
`;
