import styled from 'styled-components';

export const FavoritesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }
`;

export const FavoritesList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const FavoriteMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const FavoritesSummary = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;
