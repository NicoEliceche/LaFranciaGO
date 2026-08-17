import styled from 'styled-components';

export const ProfileGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  }
`;

export const DetailList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProfileNotes = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const StoreStatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &[data-open='true'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;
