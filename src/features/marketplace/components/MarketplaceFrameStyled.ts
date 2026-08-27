import { Link, NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

import { neonIcon, neonSurface } from '@core/theme/neon';

/**
 * Estilos del shell (header, drawer, panel de notificaciones y modales).
 *
 * Se extrajeron de la pantalla legacy `HomeScreenStyled` —de la que el frame
 * usaba 53 de 252 exports— para que el bundle inicial no arrastre estilos
 * que ninguna pantalla activa utiliza.
 */

const cardSurface = css`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const pillButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({ theme }) => theme.layout.cardPadding};
  background: ${({ theme }) => (theme.mode === 'dark' ? theme.color.background : theme.color.surface)};
  overflow: auto;
`;

export const DrawerBrand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  max-width: calc(100% - 3rem);
  border-radius: ${({ theme }) => theme.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: visible;
  min-width: 0;
  flex: 1 1 auto;
  width: fit-content;
`;

export const DrawerBrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: calc(${({ theme }) => theme.layout.topBarHeight} - ${({ theme }) => theme.spacing[3]});
  padding: 0 ${({ theme }) => theme.layout.screenPaddingH};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => (theme.mode === 'dark' ? theme.color.background : theme.color.surface)};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const DrawerItem = styled(NavLink)`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3.25rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &.active,
  &[aria-current='page'] {
    border-color: rgba(0, 71, 231, 0.16);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const DrawerItemArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textSoft};
`;

export const DrawerItemIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(77, 229, 255, 0.12)' : 'rgba(0, 71, 231, 0.08)'};
  color: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;

  ${neonIcon};
`;

export const DrawerItemSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const DrawerItemText = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`;

export const DrawerItemTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
`;

export const DrawerList = styled.nav`
  display: grid;
  gap: 0.25rem;
`;

export const DrawerSection = styled.section`
  display: block;
`;

export const DrawerSectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1rem;
  line-height: 1;
  padding: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const DrawerThemeSection = styled.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({ theme }) => theme.spacing[6]});
  overflow: auto;
  ${cardSurface};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  padding: ${({ theme }) => theme.layout.cardPadding};
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition:
    transform 180ms ease-out,
    opacity 180ms ease-out;

  &[data-size='sm'] {
    max-width: 32rem;
  }

  &[data-size='md'] {
    max-width: 42rem;
  }

  &[data-size='lg'] {
    max-width: 68rem;
  }

  &[data-drawer='true'] {
    width: min(88vw, 24rem);
    max-width: none;
    max-height: 100dvh;
    height: 100dvh;
    overflow: hidden;
    padding: 0;
    border-radius: 0 ${({ theme }) => theme.radius['2xl']} ${({ theme }) => theme.radius['2xl']} 0;
    background: ${({ theme }) => (theme.mode === 'dark' ? theme.color.background : theme.color.surface)};
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    transform: translate3d(calc(-100% - 1rem), 0, 0);
    opacity: 0;
    transition:
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 240ms ease-out;
    will-change: transform, opacity;
  }

  &[data-filters='true'] {
    width: 100%;
    max-width: none;
    max-height: 100dvh;
    height: 100dvh;
    overflow: hidden;
    padding: 0;
    border-radius: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &[data-filters='true'] {
      width: min(92vw, 42rem);
      max-width: none;
      height: auto;
      max-height: calc(100dvh - ${({ theme }) => theme.spacing[4]} * 2);
      border-radius: ${({ theme }) => theme.radius['2xl']};
      background: ${({ theme }) => theme.color.background};
      border: 1px solid ${({ theme }) => theme.color.border};
      align-self: center;
    }
  }

  &[data-notifications='true'] {
    width: min(22.5rem, calc(100vw - ${({ theme }) => theme.spacing[3]}));
    max-width: none;
    max-height: calc(100dvh - ${({ theme }) => theme.layout.topBarHeight} - ${({ theme }) => theme.spacing[3]});
    padding: 0;
    overflow: visible;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    box-shadow: ${({ theme }) => theme.shadow.lg};
    transform: translate3d(0, -0.5rem, 0);
    opacity: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    position: relative;
  }

  &[data-drawer='true'][data-state='opening'],
  &[data-drawer='true'][data-state='closing'] {
    transform: translate3d(calc(-100% - 1rem), 0, 0);
    opacity: 0;
  }

  &[data-drawer='true'][data-state='open'] {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  &[data-notifications='true'][data-state='opening'],
  &[data-notifications='true'][data-state='closing'] {
    transform: translate3d(0, -0.75rem, 0);
    opacity: 0;
  }

  &[data-notifications='true'][data-state='open'] {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ModalCloseButton = styled.button`
  ${pillButton};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};

  ${neonSurface};
  ${neonIcon};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.header + 20};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[3]};
  background: rgba(5, 8, 22, 0.58);
  backdrop-filter: blur(8px);
  opacity: 1;
  transition: opacity 180ms ease-out;

  &[data-drawer='true'] {
    align-items: stretch;
    justify-content: flex-start;
    padding: 0;
    background: rgba(5, 8, 22, 0.42);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: opacity 220ms ease-out;
    will-change: opacity;
  }

  &[data-filters='true'] {
    align-items: stretch;
    justify-content: center;
    padding: 0;
    background: rgba(5, 8, 22, 0.48);
    backdrop-filter: blur(10px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &[data-filters='true'] {
      align-items: center;
      padding: ${({ theme }) => theme.spacing[4]} 0;
    }
  }

  &[data-notifications='true'] {
    align-items: flex-start;
    justify-content: flex-end;
    padding: calc(${({ theme }) => theme.layout.topBarHeight} + ${({ theme }) => theme.spacing[2]})
      ${({ theme }) => theme.layout.screenPaddingH} 0;
    background: rgba(5, 8, 22, 0.16);
    backdrop-filter: none;
    opacity: 0;
    transition: opacity 220ms ease-out;
  }

  &[data-drawer='true'][data-state='opening'] {
    opacity: 0;
  }

  &[data-drawer='true'][data-state='open'] {
    opacity: 1;
  }

  &[data-drawer='true'][data-state='closing'] {
    opacity: 0;
  }

  &[data-notifications='true'][data-state='opening'] {
    opacity: 0;
  }

  &[data-notifications='true'][data-state='open'] {
    opacity: 1;
  }

  &[data-notifications='true'][data-state='closing'] {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NotificationsFeed = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const NotificationsPanelBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow: auto;
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const NotificationsPanelDivider = styled.div`
  height: 1px;
  margin: 0 ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.color.border};
`;

export const NotificationsPanelHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]} ${({ theme }) =>
    theme.spacing[1]};
`;

export const NotificationsPanelHeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
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
    border-color: rgba(0, 71, 231, 0.18);
  }

  &:focus {
    outline: none;
  }
`;

export const NotificationsPanelHeaderMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NotificationsPanelHeaderSpacer = styled.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`;

export const NotificationsPanelHeaderTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NotificationsPanelHeaderTitleWrap = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;

export const NotificationsSectionButton = styled.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.18);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:focus {
    outline: none;
  }
`;

export const NotificationsSectionButtonChevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.primary};
`;

export const NotificationsSectionButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;
`;

export const NotificationsSectionButtonSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const NotificationsSectionButtonText = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`;

export const NotificationsSectionButtonTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NotificationsSectionList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const NotificationRow = styled.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const NotificationRowContent = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;

export const NotificationRowDate = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
`;

export const NotificationRowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;
`;

export const NotificationRowSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.25;
`;

export const NotificationRowTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NotificationRowTitleBar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: baseline;
  min-width: 0;
`;
