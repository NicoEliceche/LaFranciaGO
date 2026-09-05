import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { neonIcon, neonIconActive } from '@core/theme/neon';

export const Page = styled.div`
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  --desktop-sidebar-width: 300px;
  background-color: ${({ theme }) => theme.color.background};
  background-image: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'none'
      : 'radial-gradient(circle at top, rgba(0, 71, 231, 0.05), transparent 34%)'};
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.color.text};
  padding-top: var(--marketplace-topbar-height, ${({ theme }) => theme.layout.topBarHeight});
  padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + ${({ theme }) => theme.spacing[3]});

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    padding-bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + ${({ theme }) => theme.spacing[2]});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 0;
  }
`;

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  backdrop-filter: blur(18px);
`;

export const HeaderInner = styled.div`
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

export const HeaderTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3rem;
`;

export const HeaderTopLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderMenuButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Mismo alto que el chip del logo, para que la fila quede pareja. */
  min-height: 2.25rem;
  height: 2.25rem;
  min-width: 2.25rem;
  width: 2.25rem;
  flex: 0 0 auto;
  padding: 0;

  /* El área táctil sigue siendo de 44px aunque el botón se vea más chico. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
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
    box-shadow 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:focus {
    outline: none;
  }

  /* En escritorio el sidebar queda fijo a la izquierda: el botón sobra. */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderMobileActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderMobileAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
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
    box-shadow 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderMobileLogoLink = styled.div`
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

export const HeaderMobileActionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.1rem;
  height: 1.1rem;
  margin-left: -0.3rem;
  margin-top: -0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: 0.6rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.glow};
`;

export const BrandLink = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 44px;
  min-width: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;

  &:focus {
    outline: none;
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
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.85))
    drop-shadow(0 1px 3px rgba(5, 8, 22, 0.35));
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;

export const BrandName = styled.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
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
  text-align: center;
  white-space: nowrap;
`;

export const HeaderBrandCopy = styled.div`
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

export const HeaderBrandTag = styled(BrandTag)`
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  letter-spacing: -0.01em;
  white-space: pre-line;
`;

export const LocationPill = styled.span`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  flex: 0 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }
`;

export const TopActions = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }
`;

export const TopAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
`;

export const SearchRow = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`;

export const SearchShell = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SearchLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.color.textMuted};
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  transition: box-shadow 180ms ease, border-color 180ms ease, background-color 180ms ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.borderStrong};
    box-shadow: none;
    background: ${({ theme }) => theme.color.surface};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 3rem;
    gap: ${({ theme }) => theme.spacing[1]};
    padding: 0 ${({ theme }) => theme.spacing[2]};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.text};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }
`;

const actionButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const SearchButton = styled.button`
  ${actionButton};
  display: none;
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const FilterRail = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterChip = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    color: ${({ theme }) => theme.color.text};
  }
`;

export const Main = styled.main`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`;

export const Section = styled.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({ theme }) => theme.spacing[1]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({ theme }) => theme.spacing[2]};
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.screenPaddingH};
`;

export const SectionHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
    margin-bottom: ${({ theme }) => theme.spacing[1]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[2]};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
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

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
    font-size: 0.625rem;
    letter-spacing: 0.1em;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0;
  max-width: 17ch;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.5rem, 3.6vw, 2.75rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    max-width: 15ch;
    font-size: 1.375rem;
  }
`;

export const SectionText = styled.p`
  margin: 0;
  max-width: 60rem;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.45;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.base};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const TwoColumnGrid = styled(Grid)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ThreeColumnGrid = styled(Grid)`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const FourColumnGrid = styled(Grid)`
  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const CardPad = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.layout.cardPadding};
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: 0.95rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

export const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
    font-size: 0.6875rem;
  }
`;

export const AccentBadge = styled(Badge)`
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const StrongPrice = styled(Price)`
  font-size: ${({ theme }) => theme.typography.size['2xl']};
`;

export const Muted = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
`;

export const LinkButton = styled(Link)`
  ${actionButton};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`;

export const PrimaryButton = styled(LinkButton)`
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
  }
`;

export const Button = styled.button`
  ${actionButton};
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
`;

export const SplitGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);
  }
`;

export const Rail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(16rem, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    grid-auto-columns: minmax(14rem, 1fr);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RailItem = styled(Card)`
  scroll-snap-align: start;
`;

export const TopNavLinks = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const TopNavLink = styled(NavLink)`
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

  &.active {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
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

  @media (max-width: 380px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

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

  @media (max-width: 380px) {
    gap: 0.125rem;
  }
`;

export const BottomNavIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  ${neonIcon};

  /* El botón central va sobre fondo de marca: el ícono queda blanco y sin
     resplandor. El realce lo da el círculo, no el ícono de adentro. */
  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
    box-shadow: ${({ theme }) => theme.shadow.glow};
    filter: none;
  }
`;

export const BottomNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.0625rem;
  min-height: 0;
  min-width: 0;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing[1]} 0.125rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-align: center;
  white-space: nowrap;
  line-height: 1.05;
  overflow: hidden;
  position: relative;
  z-index: 0;
  isolation: isolate;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &.active {
    color: ${({ theme }) => theme.color.primary};

    ${({ theme }) =>
      theme.mode === 'dark' &&
      css`
        color: ${theme.color.neon};
      `};
  }

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${BottomNavIcon},
  &[aria-current='page'] ${BottomNavIcon} {
    ${neonIconActive};
  }

  /* Salvo el central: ahí el ícono se mantiene blanco y plano. */
  &[data-primary='true'].active ${BottomNavIcon},
  &[data-primary='true'][aria-current='page'] ${BottomNavIcon} {
    color: ${({ theme }) => theme.color.onPrimary};
    filter: none;
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

  & > span:last-child {
    min-width: 0;
    width: 100%;
    display: block;
  }

  &[data-primary='true'].active {
    background: transparent;
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 380px) {
    gap: 0;
    padding: 0 0.125rem 0.1rem;
    font-size: clamp(0.6rem, 2.3vw, 0.72rem);
    line-height: 1;
    letter-spacing: -0.01em;
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

// ── Header de marca (barra azul) ──

export const BrandHeaderBar = styled.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`;

export const AddressButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-height: 2.75rem;
  min-width: 0;
  flex: 1 1 auto;

  /* Se corre a la derecha para dejarle pista al logo, que rebota en ese
     hueco. El margen es proporcional al ancho: en un teléfono de 320px una
     medida fija empujaba el carrito y el perfil fuera de la pantalla. */
  @media (max-width: 1023px) {
    margin-left: clamp(0rem, 5vw, 2.25rem);
  }

  /* Por debajo de 360px el header ya viene justo: no se le suma margen. */
  @media (max-width: 359px) {
    margin-left: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 0 0 auto;
    margin-left: 0;
  }
  padding: 0 ${({ theme }) => theme.spacing[1]} 0 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
  cursor: pointer;

  /* En pantallas angostas la dirección entra completa bajando
     un escalón de tamaño, sin recortar el área táctil. */
  @media (max-width: 420px) {
    font-size: ${({ theme }) => theme.typography.size.sm};
    letter-spacing: -0.03em;
  }
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: opacity 180ms ease;

  &:hover {
    opacity: 0.86;
  }

  &:focus {
    outline: none;
  }
`;

export const AddressButtonLabel = styled.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AddressButtonHint = styled.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`;

export const AddressButtonCopy = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`;

const headerCircleAction = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 420px) {
    width: 2.25rem;
  }
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.color.onPrimary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

export const HeaderCircleButton = styled.button`
  ${headerCircleAction};
`;

export const HeaderCircleLink = styled(Link)`
  ${headerCircleAction};
`;

/** Foto de perfil dentro del botón circular del header. */
export const HeaderAvatarImage = styled.img`
  position: absolute;
  /* El botón puede achicarse de ancho en pantallas angostas: anclando la
     imagen al centro con proporción 1:1 el círculo nunca sale ovalado. */
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.full};
  object-fit: cover;
`;

export const HeaderCircleBadge = styled.span`
  position: absolute;
  top: -0.15rem;
  right: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.15rem;
  height: 1.15rem;
  padding: 0 0.22rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ theme }) => theme.color.brand};
  background: ${({ theme }) => theme.color.danger};
  color: #fff;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1;
`;

export const HeaderActionsRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 0 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    gap: ${({ theme }) => theme.spacing[2]};
  }

  /* En pantallas angostas las acciones ceden ancho a la dirección,
     sin bajar de 44px de área táctil. */
  @media (max-width: 420px) {
    gap: 0;
  }
`;

export const BrandSearchField = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  min-height: 2.875rem;
  padding: 0 0.35rem 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const BrandSearchInput = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
  }
`;

export const BrandSearchSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }
`;

export const BrandHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3rem;
  min-width: 0;

  @media (max-width: 420px) {
    gap: 0.25rem;
  }

  /* En escritorio: buscador a la izquierda, dirección al medio y acciones
     a la derecha. El bloque de marca queda oculto (vive en el sidebar). */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    /* Las columnas laterales comparten ancho para que el buscador quede
       centrado en el área de contenido. */
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const BrandHeaderLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;
  flex: 0 0 auto;

  @media (max-width: 420px) {
    gap: 0.15rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderBrandLockup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const HeaderBrandName = styled.span`
  display: none;
  align-items: baseline;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-flex;
  }

  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.onPrimary};
  white-space: nowrap;
`;

export const HeaderBrandNameAccent = styled.span`
  font-size: 1.22em;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.05em;
`;

export const BrandLogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  /* Sin chip blanco: el logo va directo sobre el azul del header y se
     despega con un halo claro que sigue su silueta. */
  background: transparent;
  padding: 0;
  box-shadow: none;

  /*
    En mobile el logo rebota entre la hamburguesa y el texto de la dirección.
    El recorrido se define por variable para poder medirlo desde el header:
    depende del ancho de pantalla y de cuánto ocupe la dirección, así que
    fijarlo en el CSS daría un rebote corto en pantallas anchas.

    Se anima con transform, que la compone la GPU y no fuerza recalcular el
    layout del header en cada cuadro.
  */
  animation: lfg-logo-bounce 3.6s ease-in-out infinite alternate;

  @keyframes lfg-logo-bounce {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(var(--lfg-logo-travel, 0));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 2.5rem;
    height: 2.5rem;
    /* En escritorio queda quieto: el header ahí es otra composición. */
    animation: none;
  }
`;


/** Buscador dentro de la barra azul. Sólo en escritorio. */
export const HeaderSearchSlot = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`;
