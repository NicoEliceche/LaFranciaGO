import styled from 'styled-components';

import { CardPad, Section, SectionHeader } from '../ui';

export const SectionStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CardStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const InlineWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CardTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;

  > div:first-child {
    min-width: 0;
    flex: 1 1 auto;
  }

  > :last-child {
    flex: 0 0 auto;
  }
`;

export const CompactTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const CardIdentityRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const RightAlign = styled.div`
  text-align: right;
`;

export const TwoUpGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ThreeUpGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const FourUpGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const TagRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomSpacing = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const LargeBottomSpacing = styled.div`
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

export const CompactSection = styled(Section)`
  padding: ${({ theme }) => theme.spacing[4]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[5]} 0;
  }
`;

export const CompactSectionHeader = styled(SectionHeader)`
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[1]};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`;

export const CompactSectionStack = styled(SectionStack)`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactCardStack = styled(CardStack)`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactInlineWrap = styled(InlineWrap)`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactCardPad = styled(CardPad)`
  padding: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;
