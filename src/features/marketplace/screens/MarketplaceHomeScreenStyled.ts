import styled from 'styled-components';

export const HeroLeadList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const HeroLeadItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &::before {
    content: '';
    display: inline-flex;
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.45rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.primary};
    flex: 0 0 auto;
  }
`;

export const HighlightCopy = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const HighlightsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ActionGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CardCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SmallCardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const SpacedCardTitle = styled(SmallCardTitle)`
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const ComparisonStoreTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ComparisonStoreMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const AccessGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
