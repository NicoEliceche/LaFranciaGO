import styled from 'styled-components';

export const DeliveryRegistrationGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;
