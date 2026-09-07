import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CardPad, Section, SectionHeader } from '../ui';

export const SectionStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CardStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const InlineWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CardTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;

  > div:first-child {
    min-width: 0;
    flex: 1 1 auto;
  }

  > :last-child {
    flex: 0 0 auto;
  }
`;

export const CompactTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const CardIdentityRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const RightAlign = styled.div`
  text-align: right;
`;

/**
 * Grilla de productos: dos columnas desde mobile, igual que el catálogo del
 * comercio y los rieles de Inicio, para que la tarjeta tenga el mismo tamaño
 * en toda la app.
 */
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing[3]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const ThreeUpGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const FourUpGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const TagRail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomSpacing = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const LargeBottomSpacing = styled.div`
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

export const CompactSection = styled(Section)`
  padding: ${({ theme }) => theme.spacing[1]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[2]} 0;
  }
`;

export const CompactSectionHeader = styled(SectionHeader)`
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing[1]};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }
`;

export const CompactSectionStack = styled(SectionStack)`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactCardStack = styled(CardStack)`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactInlineWrap = styled(InlineWrap)`
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const CompactCardPad = styled(CardPad)`
  padding: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

// ── Rieles horizontales image-first ──

export const ScrollRail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(9.5rem, 9.5rem);
  gap: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  > * {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-auto-columns: minmax(11rem, 11rem);
  }
`;

export const WideScrollRail = styled(ScrollRail)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`;

export const CategoryRail = styled(ScrollRail)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`;

export const PromoStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

/** Franja del buscador: primer bloque del contenido, con aire arriba. */
export const SearchSection = styled.section`
  padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[1]};

  /* En escritorio el buscador vive en la barra superior. */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: ${({ theme }) => theme.spacing[2]};

    form[role='search'] {
      display: none;
    }
  }
`;

/** Riel de filtros rápidos, debajo del buscador. */
export const FilterRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  padding-bottom: ${({ theme }) => theme.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/** Lista vertical de pedidos del historial. */
export const OrderList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

/** Dos accesos al 50%, debajo de un banner de captación. */
export const PromoSplitRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
`;

/**
 * Un pedido con su acción de seguimiento.
 *
 * La tarjeta entera es un enlace al comercio, así que el botón de seguir no
 * puede ir adentro: iría a dos lugares con el mismo toque.
 */
export const PedidoConSeguimiento = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SeguirBoton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-decoration: none;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }
`;
