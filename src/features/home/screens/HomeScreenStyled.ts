import { Link, NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const interactiveSurface = css`
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

const cardSurface = css`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const darkCardSurface = css`
  background:
    radial-gradient(circle at top left, rgba(0, 71, 231, 0.24), transparent 48%),
    linear-gradient(180deg, rgba(11, 16, 32, 0.98), rgba(5, 8, 22, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radius['2xl']};
  box-shadow: ${({ theme }) => theme.shadow.glow};
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

export const Page = styled.div`
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  --desktop-sidebar-width: 300px;
  padding-top: var(--home-topbar-height, ${({ theme }) => theme.layout.topBarHeight});
  padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + ${({ theme }) => theme.spacing[3]});

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: var(--home-topbar-height, ${({ theme }) => theme.layout.topBarHeight});
    padding-bottom: 0;
  }
`;

export const TopBar = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  backdrop-filter: blur(18px);
`;

export const TopBarInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.layout.screenPaddingH};
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: none;
    margin: 0;
    padding-left: calc(var(--desktop-sidebar-width) + ${({ theme }) => theme.layout.screenPaddingH});
    padding-right: ${({ theme }) => theme.layout.screenPaddingH};
  }
`;

export const TopBarMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3rem;
`;

export const TopBarLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  ${pillButton};
  width: 2.75rem;
  min-width: 2.75rem;
  min-height: 2.75rem;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const BrandLink = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;
  min-height: 44px;
  border-radius: ${({ theme }) => theme.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

export const TopBarLogoLink = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  flex: 0 0 auto;
  border-radius: ${({ theme }) => theme.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const TopBarBrandCopy = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: calc(100vw - 13rem);
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  box-shadow: none;
  flex: 0 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 3rem;
    height: 3rem;
  }
`;

export const BrandIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;

export const BrandName = styled.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1rem, 3.2vw, 1.125rem);
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
  white-space: nowrap;
  line-height: 1.05;
`;

export const BrandNameAccent = styled.span`
  font-size: 1.25em;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.05em;
`;

export const BrandTag = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: left;
  white-space: pre-line;
`;

export const TopBarBrandTag = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  letter-spacing: -0.01em;
  line-height: 0.98;
  text-align: center;
  white-space: pre-line;
`;

export const TopBarActions = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-self: end;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }
`;

export const TopBarMobileMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const iconControl = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.color.primaryHover};
  }

  &:focus {
    outline: none;
  }
`;

export const TopBarNotificationButton = styled.button`
  ${iconControl}
`;

export const TopBarStaticIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const TopBarProfileButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.glow};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:focus {
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 44px;
    height: 44px;
  }
`;

export const TopBarCartLink = styled(Link)`
  ${iconControl};
  text-decoration: none;
`;

export const TopBarAction = styled(Link)`
  ${pillButton};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing[2]};
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const DesktopNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;

  &.active,
  &[aria-current='page'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const DesktopNavIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`;

export const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[1]};
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.screenPaddingH};
`;

export const HeroGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const HeroContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const HeroBadge = styled.span`
  display: none;
  align-items: center;
  width: fit-content;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.14em;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }
`;

export const HeroTitle = styled.h1`
  display: none;
  margin: 0;
  max-width: 14ch;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(2rem, 7vw, 4.25rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.color.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const HeroCopy = styled.p`
  display: none;
  margin: 0;
  max-width: 48rem;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const SearchPanel = styled.section`
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  gap: 0.0625rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const SearchForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};

  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
`;

export const SearchField = styled.label`
  display: block;
`;

export const SearchFieldLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const SearchInputShell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
    box-shadow: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  box-shadow: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const SearchButton = styled.button`
  ${pillButton};
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const FilterButton = styled.button`
  ${pillButton};
  position: relative;
  width: 3rem;
  min-width: 3rem;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  white-space: nowrap;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const FilterButtonBadge = styled.span`
  position: absolute;
  top: -0.35rem;
  right: -0.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const QuickSearchRow = styled.div`
  display: none;
`;

export const QuickSearchChip = styled.button`
  ${pillButton};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  white-space: nowrap;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const ActiveFilterRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;
  padding: 0.125rem 0.25rem 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ActiveFilterRail = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

export const ActiveFilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 0 0 auto;
  min-height: 40px;
  padding: 0 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid rgba(0, 71, 231, 0.2);
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(107, 157, 255, 0.16)' : theme.color.surface)};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ActiveFilterChipClose = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(107, 157, 255, 0.18)' : 'rgba(0, 71, 231, 0.12)')};
  color: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;
`;

export const ActiveFilterScrollHint = styled.span`
  position: absolute;
  top: 50%;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.color.background} 55%);
  color: ${({ theme }) => theme.color.primary};
  transform: translateY(-50%);
  pointer-events: none;

  &[data-side='left'] {
    left: 0;
    right: auto;
    background: linear-gradient(90deg, ${({ theme }) => theme.color.background} 55%, transparent);
  }

  &[data-side='right'] {
    right: 0;
    left: auto;
  }
`;

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: 0;
`;

export const LocationLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: 0.9rem;

  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const LocationDetail = styled.p`
  display: none;
`;

export const LocationButton = styled.button`
  ${pillButton};
  min-height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  justify-self: start;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &::after {
    content: '>';
    margin-left: 0.25rem;
    color: ${({ theme }) => theme.color.primary};
    font-size: 1rem;
    line-height: 1;
    transform: translateY(-0.02em);
  }
`;

export const HeroPreview = styled.aside`
  background: ${({ theme }) => theme.color.background};
  border: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  gap: calc(${({ theme }) => theme.spacing[1]} + 1px);
  position: relative;
`;

export const PromoRail = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  touch-action: pan-x;
  cursor: grab;
  scrollbar-width: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-inline: calc(-1 * ${({ theme }) => theme.layout.screenPaddingH});
    width: calc(100% + (2 * ${({ theme }) => theme.layout.screenPaddingH}));
  }

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PromoCard = styled(Link)`
  display: grid;
  flex: 0 0 100%;
  width: 100%;
  min-height: 11.5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[1]};
  background: linear-gradient(135deg, #0047e7 0%, #1d4ed8 52%, #0f5bff 100%);
  color: ${({ theme }) => theme.color.textInverse};
  gap: ${({ theme }) => theme.spacing[1]};
  grid-template-columns: minmax(0, 1fr) minmax(5.75rem, 0.82fr);
  align-items: center;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.md};
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    filter 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 13.5rem;
    padding: ${({ theme }) => theme.spacing[2]};
    gap: ${({ theme }) => theme.spacing[2]};
    grid-template-columns: minmax(0, 1fr) minmax(7.5rem, 0.95fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-basis: calc((100% - (2 * ${({ theme }) => theme.spacing[2]})) / 3);
    width: calc((100% - (2 * ${({ theme }) => theme.spacing[2]})) / 3);
    min-height: 15rem;
  }

  &[data-tone='green'] {
    background: linear-gradient(135deg, #0f9d58, #1a8c57);
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, #b91c1c, #dc2626);
  }

  &[data-tone='violet'] {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
  }

  &[data-tone='gold'] {
    background: linear-gradient(135deg, #d97706, #f59e0b);
  }
`;

export const PromoCopy = styled.div`
  display: grid;
  gap: 0.35rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.3rem;
  }
`;

export const PromoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 1.5rem;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.16);
  color: ${({ theme }) => theme.color.textInverse};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const PromoTitle = styled.h2`
  margin: 0;
  max-width: 12ch;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 4vw, 2.2rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const PromoStore = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 1.35rem;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.64rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1;
`;

export const PromoText = styled.p`
  margin: 0;
  max-width: 18ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const PromoVisual = styled.div`
  position: relative;
  min-height: 7.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, rgba(11, 16, 32, 0.06), rgba(11, 16, 32, 0.26)),
    var(--promo-art, linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.1)));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 9rem;
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const PromoVisualLabel = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  left: ${({ theme }) => theme.spacing[2]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.6rem;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.92);
  color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-align: center;
  font-size: 0.64rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: ${({ theme }) => theme.spacing[3]};
    left: ${({ theme }) => theme.spacing[3]};
    min-height: 1.75rem;
    padding: 0 ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const PromoDiscount = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing[2]};
  bottom: ${({ theme }) => theme.spacing[2]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 999px;
  background: #ffcc33;
  color: #0b1020;
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-align: center;
  line-height: 1.05;
  box-shadow: 0 14px 24px rgba(11, 16, 32, 0.18);
`;

export const PromoDots = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const PromoNavButton = styled.button`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: absolute;
    top: 40%;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
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

    &[data-side='left'] {
      left: -0.65rem;
    }

    &[data-side='right'] {
      right: -0.65rem;
    }
  }
`;

export const PromoDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? theme.color.brand : 'rgba(11, 16, 32, 0.16)'};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 0 0 2px rgba(255, 255, 255, 0.78), 0 0 0 4px rgba(107, 157, 255, 0.14)'
      : '0 0 0 2px rgba(0, 71, 231, 0.1)'};
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.72 : 1)};

  &[data-active='true'] {
    width: 0.62rem;
    height: 0.62rem;
    background: ${({ theme }) => theme.color.brand};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 0 5px rgba(107, 157, 255, 0.22)'
        : '0 0 0 3px rgba(0, 71, 231, 0.16)'};
    opacity: 1;
    transform: scale(1);
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[1]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[2]} 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[2]} 0;
  }
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const SectionPanel = styled.section`
  ${cardSurface};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: calc(${({ theme }) => theme.spacing[1]} + 0.25rem);
  display: grid;
  gap: calc(${({ theme }) => theme.spacing[1]} + 0.125rem);
  overflow: visible;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: calc(${({ theme }) => theme.layout.cardPadding} + 0.25rem);
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const SectionEmptyState = styled.div`
  display: grid;
  place-items: center;
  grid-column: 1 / -1;
  min-height: 6.75rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px dashed ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  text-align: center;
`;

export const SectionEmptyStateText = styled.p`
  margin: 0;
  max-width: 20rem;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1.35;
`;

export const SectionHeading = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const SectionKicker = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 2.6vw, 2.3rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.text};
`;

export const SectionText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.lg};
  max-width: 56rem;
`;

export const SectionAction = styled(Link)`
  ${pillButton};
  padding: 0;
  min-height: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  align-self: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  &::after {
    content: '›';
    font-size: ${({ theme }) => theme.typography.size.lg};
    line-height: 1;
  }
`;

export const CategoryRail = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[1]};
  overflow: visible;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const CategoryButton = styled.button`
  ${interactiveSurface};
  display: grid;
  justify-items: center;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} 0;
  text-align: center;
  cursor: pointer;
  min-height: 75px;
  min-width: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => theme.spacing[1]} 0;
    min-height: 75px;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: none;
    }

    &[data-active='true'] {
      border-color: transparent;
      box-shadow: none;
    }
  }
`;

export const CategoryIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
  }
`;

export const CategoryLabel = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  text-wrap: balance;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: normal;
    white-space: nowrap;
  }
`;

export const CategoryDescription = styled.span`
  display: none;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
`;

export const MoreButton = styled.button`
  ${interactiveSurface};
  display: grid;
  justify-items: center;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} 0;
  text-align: center;
  cursor: pointer;
  min-height: 75px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[1]} 0;
    min-height: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: none;
    }
  }
`;

export const MoreButtonText = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  text-wrap: balance;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: normal;
    white-space: nowrap;
  }
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

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({ theme }) => theme.layout.cardPadding};
  background: ${({ theme }) => (theme.mode === 'dark' ? theme.color.background : theme.color.surface)};
  overflow: auto;
`;

export const DrawerProfile = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: linear-gradient(135deg, rgba(0, 71, 231, 0.08), rgba(0, 71, 231, 0.03));
  border: 1px solid rgba(0, 71, 231, 0.12);
`;

export const DrawerProfileAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => (theme.mode === 'dark' ? theme.color.brand : theme.color.surface)};
  color: ${({ theme }) => (theme.mode === 'dark' ? theme.color.onPrimary : theme.color.primary)};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  flex: 0 0 auto;
`;

export const DrawerProfileText = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
`;

export const DrawerProfileTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
`;

export const DrawerProfileSubtext = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.25;
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

export const DrawerList = styled.nav`
  display: grid;
  gap: 0.25rem;
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

export const DrawerItemIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(107, 157, 255, 0.18)' : 'rgba(0, 71, 231, 0.08)'};
  color: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;
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

export const DrawerItemSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const DrawerItemArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textSoft};
`;

export const DrawerThemeSection = styled.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const DrawerThemeRow = styled.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  width: 100%;
  min-height: 3.1rem;
  padding: 0.45rem 0.65rem;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:focus {
    outline: none;
  }
`;

export const DrawerThemeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.color.textSoft};
  transition:
    color 180ms ease,
    background-color 180ms ease;

  &[data-active='true'] {
    color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const DrawerThemeTrack = styled.span`
  position: relative;
  display: block;
  width: 2.25rem;
  height: 2.95rem;
  padding: 0.18rem;
  border-radius: 0.55rem;
  border: 0;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(180deg, rgba(9, 16, 34, 0.98) 0%, rgba(18, 29, 54, 0.96) 100%)'
      : 'linear-gradient(180deg, rgba(0, 71, 231, 0.26) 0%, rgba(0, 71, 231, 0.12) 100%)'};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05), inset 0 -2px 4px rgba(0, 0, 0, 0.42), 0 8px 16px rgba(0, 0, 0, 0.24), 0 0 0 1px rgba(107, 157, 255, 0.08)'
      : 'inset 0 1px 1px rgba(255, 255, 255, 0.34), inset 0 -2px 4px rgba(0, 71, 231, 0.08), 0 8px 16px rgba(0, 71, 231, 0.14), 0 0 0 1px rgba(0, 71, 231, 0.08)'};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0.18rem;
    border-radius: 0.42rem;
    border: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 58%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0.22rem;
    bottom: 0.22rem;
    width: 1px;
    transform: translateX(-50%);
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.26)'};
  }
`;

export const DrawerThemeTrackIcon = styled.span`
  position: absolute;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  transition: color 180ms ease, opacity 180ms ease;
  z-index: 1;

  &[data-side='top'] {
    top: 0.28rem;
  }

  &[data-side='bottom'] {
    bottom: 0.28rem;
  }

  &[data-active='true'] {
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;

export const DrawerThemeThumb = styled.span`
  position: absolute;
  left: 0.18rem;
  right: 0.18rem;
  top: 0.18rem;
  height: calc(50% - 0.21rem);
  border-radius: 0.42rem;
  border: 1px solid ${({ theme }) => (theme.mode === 'dark' ? 'rgba(120, 166, 255, 0.78)' : 'rgba(0, 71, 231, 0.42)')};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(180deg, rgba(132, 176, 255, 0.98) 0%, rgba(90, 139, 255, 0.98) 52%, rgba(48, 94, 232, 0.98) 100%)'
      : 'linear-gradient(180deg, rgba(107, 157, 255, 0.94) 0%, rgba(66, 122, 255, 0.96) 50%, rgba(0, 71, 231, 0.98) 100%)'};
  box-shadow:
    0 4px 8px rgba(5, 8, 22, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -2px 4px rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.02);
  transform: translate3d(0, 0, 0);
  transition:
    top 260ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
  z-index: 0;

  &[data-mode='dark'] {
    top: calc(50% + 0.03rem);
    transform: translate3d(0, 0, 0);
  }
`;

export const DrawerThemeText = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`;

export const DrawerThemeTitle = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
`;

export const DrawerThemeSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.color.text};
`;

export const ModalText = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const NotificationsPanelHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]} ${({ theme }) =>
    theme.spacing[1]};
`;

export const NotificationsPanelHeaderSpacer = styled.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
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

export const NotificationsPanelHeaderTitleWrap = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
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

export const NotificationsPanelHeaderMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NotificationsPanelDivider = styled.div`
  height: 1px;
  margin: 0 ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.color.border};
`;

export const NotificationsPanelBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow: auto;
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const NotificationsSectionList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
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

export const NotificationsSectionButtonSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const NotificationsSectionButtonChevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.primary};
`;

export const NotificationsFeed = styled.div`
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

export const NotificationRowContent = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;

export const NotificationRowTitleBar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: baseline;
  min-width: 0;
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

export const NotificationRowDate = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
`;

export const NotificationRowSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.25;
`;

export const ModalCloseButton = styled.button`
  ${pillButton};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
`;

export const ModalGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ModalOptionGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ModalOption = styled.button`
  ${cardSurface};
  ${interactiveSurface};
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: left;
  cursor: pointer;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const ModalOptionTitle = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ModalOptionText = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
`;

export const ModalMap = styled.iframe`
  width: 100%;
  min-height: 16rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surfaceMuted};
`;

export const LocationCurrentCard = styled.div`
  display: grid;
  gap: 0.25rem;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
`;

export const LocationCurrentLabel = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const LocationCurrentValue = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.25;
`;

export const LocationCurrentMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.25;
`;

export const LocationResultsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const LocationResultButton = styled.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  text-align: left;
  cursor: pointer;
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

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.24);
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const LocationResultIcon = styled.span`
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

export const LocationResultText = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`;

export const LocationResultTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LocationResultSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const LocationResultChevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.primary};
`;

export const FilterSheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: calc(${({ theme }) => theme.layout.topBarHeight} - ${({ theme }) => theme.spacing[2]});
  padding: 0 ${({ theme }) => theme.layout.screenPaddingH};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  position: sticky;
  top: 0;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background: ${({ theme }) => theme.color.background};
  }
`;

export const FilterSheetTitleWrap = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
`;

export const FilterSheetTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.color.text};
`;

export const FilterSheetMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.3;
`;

export const FilterSectionMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.2;
`;

export const FilterSheetBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  overflow: auto;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.layout.screenPaddingH};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.layout.screenPaddingH};
  }
`;

export const FilterSheetSection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const FilterSectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const FilterSectionTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.1;
`;

export const FilterSectionText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 1.25;
  }
`;

export const FilterChipRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.2rem;
  }
`;

export const FilterChipButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.18);
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const FilterDistanceCustomRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 1 1 auto;
  width: min(100%, 13.25rem);
  min-width: 0;
`;

export const FilterDistanceCustomButton = styled(FilterChipButton)`
  flex: 0 0 auto;
  white-space: nowrap;
`;

export const FilterDistanceCustomField = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.borderStrong};
    box-shadow: none;
  }

  &[data-error='true'] {
    border-color: rgba(185, 28, 28, 0.36);
    background: rgba(185, 28, 28, 0.04);
  }
`;

export const FilterDistanceCustomInput = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-align: right;
  outline: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

export const FilterDistanceCustomUnit = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
  pointer-events: none;
`;

export const FilterDistanceWarning = styled.span`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.2;
`;

export const FilterToggleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const FilterCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4.4rem, 1fr));
  gap: 0.1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    row-gap: 0.25rem;
    column-gap: 0.55rem;
  }
`;

export const FilterCategoryButton = styled.button`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 0.15rem;
  min-height: 4.8rem;
  padding: 0.35rem 0.2rem;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition:
    color 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.35rem 0.2rem;
  }

  &[data-active='true'] {
    border-color: transparent;
    background: transparent;
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-active='true'] ${CategoryIcon} {
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-active='true'] ${CategoryLabel} {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const FilterFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.layout.screenPaddingH}
    calc(${({ theme }) => theme.spacing[2]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  position: sticky;
  bottom: 0;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background: ${({ theme }) => theme.color.background};
  }
`;

export const FilterGhostButton = styled.button`
  ${pillButton};
  flex: 1 1 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
`;

export const FilterPrimaryButton = styled.button`
  ${pillButton};
  flex: 1 1 0;
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
    background: ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.textSoft};
    box-shadow: none;
  }
`;

export const StoreRail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  gap: 0.55rem;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-flow: row;
    grid-auto-columns: unset;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const StoreCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: start;
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  overflow: visible;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    background: transparent;
    border: 0;
    box-shadow: none;
    gap: ${({ theme }) => theme.spacing[1]};
    justify-items: center;
    text-align: center;
    overflow: visible;
  }
`;

export const StoreVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 5.25rem;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[1]} 0;
  overflow: hidden;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    width: 100%;
    min-height: 4.75rem;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    min-height: 0;
    padding: 0;
  }
`;

export const StoreContent = styled.div`
  display: grid;
  gap: 0.35rem;
  padding: 0 ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[1]};
  justify-items: start;
  text-align: left;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding: 0;
    gap: 0.5rem;
    justify-items: center;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`;

export const StoreHeader = styled.div`
  display: contents;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const StoreIdentity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  min-width: 0;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    align-items: center;
  }
`;

export const StoreAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.color.textInverse};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 5rem;
    height: 5rem;
  }

  &[data-tone='blue'] {
    background: linear-gradient(135deg, #0047e7, #2563eb);
  }

  &[data-tone='green'] {
    background: linear-gradient(135deg, #0f9d58, #34a853);
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, #b91c1c, #dc2626);
  }

  &[data-tone='orange'] {
    background: linear-gradient(135deg, #d97706, #f59e0b);
  }
`;

export const StoreName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  text-wrap: balance;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.base};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;

export const StoreCategory = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.65rem;
  line-height: 1.1;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;

export const StoreMeta = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const StoreTime = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.65rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;

  &[data-tone='blue'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(107, 157, 255, 0.18)' : 'rgba(0, 71, 231, 0.12)')};
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-tone='green'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(15, 157, 88, 0.18)' : 'rgba(15, 157, 88, 0.12)')};
    color: ${({ theme }) => theme.color.success};
  }

  &[data-tone='red'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(185, 28, 28, 0.18)' : 'rgba(185, 28, 28, 0.12)')};
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-tone='orange'] {
    background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(217, 119, 6, 0.18)' : 'rgba(217, 119, 6, 0.12)')};
    color: ${({ theme }) => theme.color.warning};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    justify-self: center;
  }
`;

export const StoreText = styled.p`
  display: none;
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const TrustStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(180deg, rgba(20, 30, 52, 0.96), rgba(13, 20, 36, 0.94))'
      : 'linear-gradient(180deg, rgba(234, 241, 255, 0.98), rgba(226, 236, 255, 0.96))'};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => (theme.mode === 'dark' ? theme.shadow.sm : '0 12px 24px rgba(0, 71, 231, 0.08)')};
`;

export const TrustCard = styled.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  justify-items: start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
`;

export const TrustCopy = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`;

export const TrustIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.mode === 'dark' ? theme.color.surface : 'rgba(255, 255, 255, 0.74)'};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => (theme.mode === 'dark' ? theme.shadow.sm : '0 6px 14px rgba(0, 71, 231, 0.08)')};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2.75rem;
    height: 2.75rem;
  }
`;

export const TrustTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const TrustText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.63rem;
  line-height: 1.15;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const OfferRail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  gap: 0.55rem;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-flow: row;
    grid-auto-columns: unset;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const OfferCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[1]};
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  overflow: visible;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    background: transparent;
    border: 0;
    box-shadow: none;
    gap: ${({ theme }) => theme.spacing[1]};
    justify-items: center;
    text-align: center;
    overflow: visible;
  }
`;

export const OfferContent = styled.div`
  display: grid;
  gap: 0.5rem;
  min-width: 0;
  padding: 0 ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[1]};
  justify-items: start;
  text-align: left;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding: 0;
    justify-items: center;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[2]};
  }
`;

export const OfferVisual = styled.div`
  position: relative;
  width: 100%;
  min-height: 7.25rem;
  border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
  background:
    radial-gradient(circle at 18% 30%, rgba(255, 255, 255, 0.55), transparent 16%),
    radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.3), transparent 18%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.12), rgba(0, 71, 231, 0.03));
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0;
  flex: 0 0 auto;

  &[data-tone='green'] {
    background: linear-gradient(135deg, rgba(15, 157, 88, 0.14), rgba(15, 157, 88, 0.03));
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, rgba(185, 28, 28, 0.14), rgba(185, 28, 28, 0.03));
  }

  &[data-tone='violet'] {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.14), rgba(124, 58, 237, 0.03));
  }

  &[data-tone='orange'] {
    background: linear-gradient(135deg, rgba(217, 119, 6, 0.14), rgba(217, 119, 6, 0.03));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 9.5rem;
    border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
  }
`;

export const OfferBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.45rem;
  padding: 0 ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.58rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 44px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const OfferTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: 0.66rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.02;
  text-wrap: balance;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.base};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;

export const OfferStore = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.62rem;
  line-height: 1.02;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;

export const OfferPriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing[1]};
  flex-wrap: wrap;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    justify-content: center;
  }
`;

export const OfferPrice = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 0.66rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.lg};
  }
`;

export const OfferOldPrice = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.5rem;
  line-height: 1;
  text-decoration: line-through;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const HomeLayout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 22.5rem);
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const HomeMainColumn = styled.div`
  display: grid;
  min-width: 0;
`;

export const HomeSidebar = styled.aside`
  display: none;
  min-width: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    gap: ${({ theme }) => theme.spacing[2]};
    position: sticky;
    top: calc(var(--home-topbar-height, ${({ theme }) => theme.layout.topBarHeight}) + ${({ theme }) => theme.spacing[2]});
    align-self: start;
    padding-right: ${({ theme }) => theme.layout.screenPaddingH};
  }
`;

export const SidebarSummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SidebarTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.03em;
`;

export const SidebarBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
`;

export const SidebarOrderList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SidebarOrderItem = styled.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding-top: ${({ theme }) => theme.spacing[2]};
  border-top: 1px solid ${({ theme }) => theme.color.border};

  &:first-child {
    padding-top: 0;
    border-top: 0;
  }
`;

export const SidebarOrderAvatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.color.textInverse};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.04em;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &[data-tone='blue'] {
    background: linear-gradient(135deg, #0047e7, #2563eb);
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, #b91c1c, #dc2626);
  }

  &[data-tone='orange'] {
    background: linear-gradient(135deg, #d97706, #f59e0b);
  }
`;

export const SidebarOrderText = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;

export const SidebarOrderTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
  text-wrap: balance;
`;

export const SidebarOrderStore = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.15;
`;

export const SidebarOrderMeta = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.15;
`;

export const SidebarOrderPrice = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
`;

export const SidebarTotals = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  padding-top: ${({ theme }) => theme.spacing[1]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const SidebarTotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &[data-emphasis='true'] {
    padding-top: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const SidebarActions = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SidebarPrimaryButton = styled(Link)`
  ${pillButton};
  width: 100%;
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
  }
`;

export const SidebarSecondaryButton = styled(Link)`
  ${pillButton};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
`;

export const SidebarDetailList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SidebarDetailRow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: start;
`;

export const SidebarDetailIcon = styled.span`
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

export const SidebarDetailText = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;

export const SidebarDetailTitle = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.05;
`;

export const SidebarDetailValue = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.25;
`;

export const SidebarNotice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3.15rem;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => (theme.mode === 'dark' ? 'rgba(15, 157, 88, 0.16)' : 'rgba(15, 157, 88, 0.12)')};
  color: ${({ theme }) => theme.color.success};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const CalloutSection = styled.section`
  padding: 0 0 ${({ theme }) => theme.layout.sectionSpacing};
`;

export const CalloutCard = styled.div`
  ${darkCardSurface};
  padding: ${({ theme }) => theme.layout.cardPadding};
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`;

export const CalloutCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CalloutTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.textInverse};
`;

export const CalloutText = styled.p`
  margin: 0;
  max-width: 56rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${({ theme }) => theme.typography.size.lg};
`;

export const CalloutActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const CalloutButton = styled(Link)`
  ${pillButton};
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.color.textInverse};

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const Footer = styled.footer`
  display: none;
  padding: ${({ theme }) => theme.spacing[6]} 0
    calc(${({ theme }) => theme.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({ theme }) => theme.color.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.screenPaddingH};
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FooterTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const FooterFinePrint = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const BottomNav = styled.nav`
  position: fixed;
  inset: auto 0 0;
  z-index: ${({ theme }) => theme.zIndex.bottomNav};
  max-height: 50px;
  padding:
    0
    ${({ theme }) => theme.layout.screenPaddingH}
    calc(0.125rem + env(safe-area-inset-bottom));
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  backdrop-filter: blur(18px);
  overflow: visible;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const BottomNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;
`;

export const BottomNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.0625rem;
  min-height: 0;
  padding: 0 ${({ theme }) => theme.spacing[1]} 0.125rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-align: center;
  white-space: nowrap;
  line-height: 1.05;
  position: relative;
  z-index: 0;
  isolation: isolate;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &.active,
  &[aria-current='page'] {
    color: ${({ theme }) => theme.color.primary};
  }

  &.active::before,
  &[aria-current='page']::before {
    content: '';
    position: absolute;
    inset: -0.14rem 0.05rem -0.14rem;
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.color.primarySoft};
    z-index: -1;
  }

  &:not([data-primary='true']) {
    transform: translateY(-4px);
  }

  &[data-primary='true'] {
    position: relative;
    margin-top: -0.8rem;
    padding: 0 ${({ theme }) => theme.spacing[1]} 0.125rem;
    gap: 0.0625rem;
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-primary='true'] > span:last-child {
    white-space: nowrap;
  }

  &[data-primary='true'].active {
    background: transparent;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const BottomNavIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
`;
