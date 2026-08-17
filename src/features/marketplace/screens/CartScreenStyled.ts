import styled, { css } from 'styled-components';

import { Card, CardPad, Section } from '../ui';

export const CartPageStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CartHeroCard = styled(Card)`
  position: relative;
  overflow: hidden;
  border-color: ${({ theme }) => theme.mode === 'dark' ? 'rgba(107, 157, 255, 0.22)' : 'rgba(0, 71, 231, 0.12)'};
  background:
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(180deg, rgba(107, 157, 255, 0.12) 0%, rgba(17, 26, 46, 0.98) 58%)'
        : 'linear-gradient(180deg, rgba(0, 71, 231, 0.08) 0%, rgba(255, 255, 255, 0.98) 58%)'};
  box-shadow: ${({ theme }) => theme.shadow.md};

  &::after {
    content: '';
    position: absolute;
    inset: -10% auto auto 60%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.mode === 'dark'
      ? 'radial-gradient(circle, rgba(107, 157, 255, 0.16) 0%, rgba(107, 157, 255, 0.02) 55%, transparent 70%)'
      : 'radial-gradient(circle, rgba(0, 71, 231, 0.12) 0%, rgba(0, 71, 231, 0.02) 55%, transparent 70%)'};
    pointer-events: none;
  }
`;

export const CartCardPad = styled(CardPad)`
  padding: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const CartHeroStack = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CartHeroHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const CartHeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartHeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: rgba(15, 157, 88, 0.14);
    border-color: rgba(15, 157, 88, 0.24);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tone='warning'] {
    background: rgba(217, 119, 6, 0.12);
    border-color: rgba(217, 119, 6, 0.2);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-tone='brand'] {
    background: ${({ theme }) => theme.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const CartStepper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartStep = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  text-align: center;

  &[data-state='active'] {
    border-color: rgba(0, 71, 231, 0.22);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const CartStepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  [data-state='active'] & {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;

export const CartStepLabel = styled.span`
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1.05;
`;

export const CartOverviewRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`;

export const CartStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CartStoreCard = styled(Card)`
  overflow: hidden;
`;

export const CartStoreHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const CartStoreCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
`;

export const CartStoreTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
`;

export const CartStoreMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const CartStoreBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
`;

export const CartItemList = styled.div`
  display: grid;

  > * + * {
    margin-top: ${({ theme }) => theme.spacing[2]};
    padding-top: ${({ theme }) => theme.spacing[2]};
    border-top: 1px solid ${({ theme }) => theme.color.border};
  }
`;

export const CartItemRow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;
`;

export const CartItemThumb = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.24), transparent 36%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.18) 0%, rgba(0, 71, 231, 0.04) 100%);
  color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
`;

export const CartItemThumbText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;

export const CartItemBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
`;

export const CartItemTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CartItemTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
`;

export const CartItemPrice = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
`;

export const CartItemMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartItemPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-height: 1.875rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: rgba(15, 157, 88, 0.12);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tone='warning'] {
    background: rgba(217, 119, 6, 0.12);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-tone='brand'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const CartItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const CartItemFooterHint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartItemUnavailable = styled.span`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const CartSummaryCard = styled(Card)`
  overflow: hidden;
  background:
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)'
        : 'linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)'};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({ theme }) => theme.layout.topBarHeight}) + ${({ theme }) => theme.spacing[2]});
    align-self: start;
  }
`;

export const CartSummaryStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CartSummaryNote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
`;

export const CartProgressCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`;

export const CartProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.color.text};
`;

export const CartProgressLabel = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const CartProgressTrack = styled.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  overflow: hidden;
`;

export const CartProgressFill = styled.div<{ $value: number }>`
  width: ${({ $value }) => `${Math.max(0, Math.min(100, $value))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({ theme }) => theme.color.brand} 0%, ${({ theme }) => theme.color.primary} 100%);
  box-shadow: ${({ theme }) => theme.shadow.glow};
  transition: width 220ms ease;
`;

export const CartSummarySection = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
`;

export const CartTotalsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartTotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &[data-emphasis='true'] {
    padding-top: ${({ theme }) => theme.spacing[2]};
    margin-top: ${({ theme }) => theme.spacing[1]};
    border-top: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

export const CartTrustGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CartTrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const CartPaymentRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const buttonRow = css`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CartActions = styled.div`
  ${buttonRow}
`;

export const CartSection = styled(Section)`
  padding: ${({ theme }) => theme.spacing[4]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[5]} 0;
  }
`;
