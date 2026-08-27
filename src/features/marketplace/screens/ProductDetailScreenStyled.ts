import styled from 'styled-components';

// ── Detalle de producto ──

export const ProductDetailCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }
`;

export const ProductDetailBody = styled.div`
  display: grid;
  gap: 0.15rem;
  align-content: start;
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const ProductDetailCategory = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const ProductDetailName = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: ${({ theme }) => theme.color.text};
`;

export const ProductDetailPriceRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const ProductDetailPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.primary};
`;

export const ProductDetailStore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.85rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ProductDetailActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const ProductDetailTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const ProductDetailRowPrice = styled.span`
  flex: 0 0 auto;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.primary};
`;
