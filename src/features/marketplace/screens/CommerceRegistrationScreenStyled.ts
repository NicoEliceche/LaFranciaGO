import styled from 'styled-components';

export const RegistrationGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const RegistrationNotes = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const RegistrationSteps = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;
