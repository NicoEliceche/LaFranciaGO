import styled from 'styled-components';

import { FormCard, SidePanel } from './formStyles';

export const AccountGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const ProfileHeroCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background:
    radial-gradient(circle at top left, rgba(0, 71, 231, 0.14), transparent 42%),
    ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => theme.spacing[1]};
  }
`;

export const ProfileHeroTop = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const ProfileHeroAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.glow};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ProfileHeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: 0.15rem;
  }
`;

export const ProfileHeroName = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.35rem, 4vw, 2rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.04em;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: clamp(1.2rem, 5vw, 1.7rem);
  }
`;

export const ProfileHeroText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: ${({ theme }) => theme.typography.size.xs};
    line-height: 1.3;
  }
`;

export const ProfileHeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: 0.35rem;
  }
`;

export const TwoLineList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const AccountSummary = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const AccountPanelGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const PreferenceGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SecurityGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactFormCard = styled(FormCard)`
  padding: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding: ${({ theme }) => theme.spacing[1]};
  }
`;

export const CompactSidePanel = styled(SidePanel)`
  padding: ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[3]};
    gap: ${({ theme }) => theme.spacing[2]};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding: ${({ theme }) => theme.spacing[1]};
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;
