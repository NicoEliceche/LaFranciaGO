import styled from 'styled-components';

// ── Portada de comercio ──

export const StoreHeroShell = styled.div`
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
`;

export const StoreHeroLogoWrap = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing[3]};
  bottom: ${({ theme }) => theme.spacing[2]};
  z-index: 2;
`;

export const StoreHeroBody = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const StoreHeroName = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
`;

export const StoreHeroSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const StoreHeroInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const StoreHeroMetaPill = styled.span`
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

export const StoreHeroOpenBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  /* Verde más profundo: blanco sobre success daba 3.5:1, por debajo de AA. */
  background: #0a7a43;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &[data-open='false'] {
    background: ${({ theme }) => theme.color.textSoft};
  }
`;

export const StoreHeroRatingBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  min-height: 1.6rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.warning};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;
