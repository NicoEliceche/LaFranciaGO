import styled from 'styled-components';

import { CardPad } from '../ui';
import { FieldInput, ToggleButton, ToggleText, ToggleTitle } from './formStyles';

export const NotificationsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`;

export const NotificationsSection = styled.section`
  padding: ${({ theme }) => theme.spacing[2]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[3]} 0;
  }
`;

export const NotificationsIntroStack = styled.div`
  display: grid;
  gap: 0.15rem;
`;

export const ChannelGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactToggleButton = styled(ToggleButton)`
  min-height: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  gap: 0.25rem;
  text-align: center;
  justify-items: center;
  align-content: center;
`;

export const CompactToggleTitle = styled(ToggleTitle)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const CompactToggleText = styled(ToggleText)`
  text-align: center;
  font-size: 0.6875rem;
  line-height: 1.25;
`;

export const CompactFieldInput = styled(FieldInput)`
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

export const WatchList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  max-height: min(23rem, 52vh);
  overflow-y: auto;
  padding-right: 0.15rem;
  overscroll-behavior: contain;
  scrollbar-width: thin;
`;

export const FrequencyRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const WatchCardPad = styled(CardPad)`
  padding: 0.55rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: calc(${({ theme }) => theme.layout.cardPadding} + 2px);
  }
`;

export const WatchAlertPill = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 1.625rem;
  padding: 0 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1;
  white-space: nowrap;

  &[data-tone='stock'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(52, 211, 153, 0.16)' : 'rgba(15, 157, 88, 0.12)')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(52, 211, 153, 0.24)' : 'rgba(15, 157, 88, 0.18)')};
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tone='price'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(245, 158, 11, 0.16)' : 'rgba(217, 119, 6, 0.12)')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(245, 158, 11, 0.24)' : 'rgba(217, 119, 6, 0.18)')};
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-tone='offer'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(96, 165, 250, 0.16)' : 'rgba(37, 99, 235, 0.12)')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(96, 165, 250, 0.24)' : 'rgba(37, 99, 235, 0.18)')};
    color: ${({ theme }) => theme.color.info};
  }

  &[data-tone='promo'] {
    background: ${({ theme }) => theme.color.primarySoft};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(107, 157, 255, 0.28)' : 'rgba(0, 71, 231, 0.16)')};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const WatchItemIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;
`;

export const AlertDismissButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.danger};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(220, 38, 38, 0.24);
    background: ${({ theme }) => theme.color.surface};
  }

  &:focus {
    outline: none;
  }
`;

export const ConfirmOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.bottomNav + 10};
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(5, 8, 22, 0.18);
`;

export const ConfirmCard = styled.div`
  width: min(100%, 22rem);
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

export const ConfirmTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.color.text};
`;

export const ConfirmText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.35;
`;

export const ConfirmActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ConfirmButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
  }

  &:focus {
    outline: none;
  }

  &[data-variant='primary'] {
    border-color: transparent;
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;

export const SummaryCardPad = styled(CardPad)`
  padding: calc(${({ theme }) => theme.layout.cardPadding} + 4px);
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(52, 211, 153, 0.18)' : 'rgba(15, 157, 88, 0.12)')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(52, 211, 153, 0.28)' : 'rgba(15, 157, 88, 0.18)')};
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tone='danger'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(248, 113, 113, 0.18)' : 'rgba(220, 38, 38, 0.12)')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(248, 113, 113, 0.28)' : 'rgba(220, 38, 38, 0.18)')};
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-tone='info'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(96, 165, 250, 0.18)' : 'rgba(37, 99, 235, 0.12)')};
    border-color: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(96, 165, 250, 0.28)' : 'rgba(37, 99, 235, 0.18)')};
    color: ${({ theme }) => theme.color.info};
  }
`;
