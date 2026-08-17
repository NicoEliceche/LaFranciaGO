import styled from 'styled-components';

export const DirectoryIntro = styled.p`
  margin: 0;
  max-width: 56rem;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.35;
  }
`;

export const StoreMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const StoreScore = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 36px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
  }
`;
