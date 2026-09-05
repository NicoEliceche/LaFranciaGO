import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ProfileGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  }
`;

export const DetailList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

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

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[2]};
  }
`;

// ── Barra de checkout fija del comercio ──

export const StoreCheckoutBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(${({ theme }) => theme.layout.bottomNavHeight} + ${({ theme }) => theme.spacing[2]} + env(safe-area-inset-bottom));
  z-index: ${({ theme }) => theme.zIndex.bottomNav - 1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  width: min(100% - 2rem, 30rem);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]}
    ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceDark};
  color: ${({ theme }) => theme.color.onDark};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transform: translateX(-50%);

  /* En oscuro el negro de la barra se funde con el fondo:
     se despega con borde y una sombra más marcada. */
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      background: linear-gradient(135deg, #0B1430 0%, #10224F 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing[4]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`;

export const StoreCheckoutInfo = styled.div`
  display: grid;
  gap: 0;
  min-width: 0;
`;

export const StoreCheckoutCount = styled.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const StoreCheckoutTotal = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
`;

export const StoreCheckoutCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 0 0 auto;
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }
`;

// ── Aviso de pedido: el catálogo está recortado a lo comprado ──

export const OrderNotice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};

  > svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const OrderNoticeText = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const OrderNoticeTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const OrderNoticeMeta = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.3;
`;

/** Vuelve al catálogo completo del comercio. */
export const OrderNoticeClear = styled.button`
  flex: 0 0 auto;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;
