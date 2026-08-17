import styled from 'styled-components';

export const ProductHeroGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  }
`;

export const OfferList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const OfferMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;
