import styled from 'styled-components';

// ── Panel del repartidor ──

export const DeliveryRowValue = styled.span`
  flex: 0 0 auto;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.success};
`;
