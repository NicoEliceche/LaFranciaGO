import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  CreditCard,
  Clock3,
  MapPin,
  Minus,
  PackageSearch,
  Plus,
  Search,
  SearchX,
  ShoppingCart,
  Store,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { CatalogProductCard } from '../components/CatalogProductCard';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { StoreHero } from '../components/StoreHero';
import { findStoreById, formatDistance, formatMoney } from '../marketplace.utils';
import { customerOrders, stores } from '../marketplaceContent';
import {
  AccentBadge,
  Badge,
  Card,
  CardPad,
  CardText,
  CardTitle,
  LinkButton,
  PrimaryButton,
  Section,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionText,
  SectionTitle,
  SearchButton,
  SearchField,
  SearchInput,
  SearchLabel,
  StrongPrice,
  SearchRow,
  SearchShell,
} from '../ui';
import { ScrollRail as HScrollRail } from '@shared/components/ScrollRail';

import { ScrollRail, SectionStack } from './screenLayout';
import {
  OrderNotice,
  OrderNoticeClear,
  OrderNoticeMeta,
  OrderNoticeText,
  OrderNoticeTitle,
  StoreCheckoutBar,
  StoreCheckoutCount,
  StoreCheckoutCta,
  StoreCheckoutInfo,
  StoreCheckoutTotal,
} from './StoreProfileScreenStyled';

type CatalogTone = 'blue' | 'green' | 'orange' | 'red' | 'violet' | 'slate';

type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  categoryLabel: string;
  price: number;
  tone: CatalogTone;
  badge?: string;
  suggestions: string[];
};

type CatalogSection = {
  id: string;
  label: string;
  description: string;
  products: CatalogProduct[];
};

type StoreCatalog = {
  intro: string;
  sections: CatalogSection[];
};

type QuantityMap = Record<string, number>;

const storeCatalogs: Record<string, StoreCatalog> = {
  'almacen-juan': {
    intro: 'Bebidas, almacén y limpieza para resolver compras rápidas sin salir del comercio.',
    sections: [
      {
        id: 'bebidas',
        label: 'Bebidas',
        description: 'Para el combo de siempre y el finde.',
        products: [
          {
            id: 'coca-cola-225',
            name: 'Coca Cola 2,25 L',
            description: 'La botella que más sale para el carrito diario.',
            categoryId: 'bebidas',
            categoryLabel: 'Bebidas',
            price: 3500,
            tone: 'blue',
            badge: 'Más pedido',
            suggestions: ['fernet-750', 'hielo-2kg'],
          },
          {
            id: 'fernet-750',
            name: 'Fernet 750 ml',
            description: 'Clásico de reunión para el fin de semana.',
            categoryId: 'bebidas',
            categoryLabel: 'Bebidas',
            price: 12900,
            tone: 'green',
            badge: 'Combo finde',
            suggestions: ['coca-cola-225', 'hielo-2kg'],
          },
          {
            id: 'hielo-2kg',
            name: 'Hielo 2 kg',
            description: 'Bolsita lista para acompañar bebidas frías.',
            categoryId: 'bebidas',
            categoryLabel: 'Bebidas',
            price: 1200,
            tone: 'slate',
            badge: 'Siempre útil',
            suggestions: ['coca-cola-225', 'fernet-750'],
          },
        ],
      },
      {
        id: 'almacen',
        label: 'Almacén',
        description: 'Básicos de todos los días.',
        products: [
          {
            id: 'yerba-1kg',
            name: 'Yerba mate 1 kg',
            description: 'Repuesto de todos los días para la alacena.',
            categoryId: 'almacen',
            categoryLabel: 'Almacén',
            price: 4650,
            tone: 'orange',
            badge: 'Diario',
            suggestions: ['azucar-1kg', 'galletitas-mixtas'],
          },
          {
            id: 'fideos-500',
            name: 'Fideos 500 g',
            description: 'Una base simple para resolver la cena.',
            categoryId: 'almacen',
            categoryLabel: 'Almacén',
            price: 980,
            tone: 'violet',
            badge: 'Base',
            suggestions: ['salsa-tomate', 'queso-rallado'],
          },
          {
            id: 'galletitas-mixtas',
            name: 'Galletitas mixtas',
            description: 'Para la merienda o el kiosco de la casa.',
            categoryId: 'almacen',
            categoryLabel: 'Almacén',
            price: 1450,
            tone: 'blue',
            badge: 'Snack',
            suggestions: ['yerba-1kg', 'fideos-500'],
          },
        ],
      },
      {
        id: 'limpieza',
        label: 'Limpieza',
        description: 'Casa y cocina en un solo pedido.',
        products: [
          {
            id: 'detergente-900',
            name: 'Detergente 900 ml',
            description: 'Para dejar la cocina lista en una pasada.',
            categoryId: 'limpieza',
            categoryLabel: 'Limpieza',
            price: 2450,
            tone: 'red',
            badge: 'Hogar',
            suggestions: ['esponja-duo', 'lavandina-1l'],
          },
          {
            id: 'lavandina-1l',
            name: 'Lavandina 1 L',
            description: 'Clave para limpieza pesada del hogar.',
            categoryId: 'limpieza',
            categoryLabel: 'Limpieza',
            price: 1790,
            tone: 'blue',
            badge: 'Sanitiza',
            suggestions: ['detergente-900', 'esponja-duo'],
          },
          {
            id: 'esponja-duo',
            name: 'Esponja duo',
            description: 'Pequeño básico que completa cualquier limpieza.',
            categoryId: 'limpieza',
            categoryLabel: 'Limpieza',
            price: 690,
            tone: 'orange',
            badge: 'Complemento',
            suggestions: ['detergente-900', 'lavandina-1l'],
          },
        ],
      },
    ],
  },
  'panaderia-la-esquina': {
    intro: 'Pan fresco, facturas y tortas listas para el desayuno, la merienda y los encargos.',
    sections: [
      {
        id: 'pan',
        label: 'Pan',
        description: 'Pan fresco y de salida rápida.',
        products: [
          {
            id: 'pan-flauta',
            name: 'Pan flauta x 6',
            description: 'Salida clásica para la mesa de todos los días.',
            categoryId: 'pan',
            categoryLabel: 'Pan',
            price: 750,
            tone: 'orange',
            badge: 'Recién hecho',
            suggestions: ['manteca-200', 'medialunas-x6'],
          },
          {
            id: 'pan-lactal',
            name: 'Pan lactal',
            description: 'Práctico para tostadas y viandas.',
            categoryId: 'pan',
            categoryLabel: 'Pan',
            price: 1850,
            tone: 'blue',
            badge: 'Diario',
            suggestions: ['manteca-200', 'mermelada-frutilla'],
          },
          {
            id: 'tostadas-rusticas',
            name: 'Tostadas ricas',
            description: 'Para acompañar el mate sin vueltas.',
            categoryId: 'pan',
            categoryLabel: 'Pan',
            price: 990,
            tone: 'slate',
            badge: 'Merienda',
            suggestions: ['pan-lactal', 'mermelada-frutilla'],
          },
        ],
      },
      {
        id: 'facturas',
        label: 'Facturas',
        description: 'La bandeja de siempre.',
        products: [
          {
            id: 'medialunas-x6',
            name: 'Medialunas x 6',
            description: 'Perfectas para salir con café o mate.',
            categoryId: 'facturas',
            categoryLabel: 'Facturas',
            price: 2400,
            tone: 'violet',
            badge: 'Favoritas',
            suggestions: ['cafe-molido', 'facturas-surtidas'],
          },
          {
            id: 'facturas-surtidas',
            name: 'Facturas surtidas',
            description: 'Variadas para compartir en familia.',
            categoryId: 'facturas',
            categoryLabel: 'Facturas',
            price: 1900,
            tone: 'orange',
            badge: 'Compartir',
            suggestions: ['medialunas-x6', 'cafe-molido'],
          },
          {
            id: 'cafe-molido',
            name: 'Café molido',
            description: 'El acompañamiento que hace crecer el ticket.',
            categoryId: 'facturas',
            categoryLabel: 'Facturas',
            price: 3600,
            tone: 'red',
            badge: 'Combo',
            suggestions: ['medialunas-x6', 'facturas-surtidas'],
          },
        ],
      },
      {
        id: 'tortas',
        label: 'Tortas',
        description: 'Pedidos especiales y celebraciones.',
        products: [
          {
            id: 'torta-cumple',
            name: 'Torta de cumpleaños',
            description: 'Lista para encargar con anticipación.',
            categoryId: 'tortas',
            categoryLabel: 'Tortas',
            price: 12000,
            tone: 'red',
            badge: 'Encargo',
            suggestions: ['velas', 'facturas-surtidas'],
          },
          {
            id: 'budin-vainilla',
            name: 'Budin de vainilla',
            description: 'Para la mesa dulce o la merienda.',
            categoryId: 'tortas',
            categoryLabel: 'Tortas',
            price: 1850,
            tone: 'green',
            badge: 'Dulce',
            suggestions: ['cafe-molido', 'medialunas-x6'],
          },
          {
            id: 'velas',
            name: 'Velas numeradas',
            description: 'Complemento simple para el pedido.',
            categoryId: 'tortas',
            categoryLabel: 'Tortas',
            price: 650,
            tone: 'blue',
            badge: 'Extra',
            suggestions: ['torta-cumple', 'budin-vainilla'],
          },
        ],
      },
    ],
  },
  'farmacia-centro': {
    intro: 'Cuidado personal, salud básica y perfumería para resolver sin moverte de la app.',
    sections: [
      {
        id: 'cuidado',
        label: 'Cuidado',
        description: 'Productos de uso diario.',
        products: [
          {
            id: 'shampoo-400',
            name: 'Shampoo 400 ml',
            description: 'Limpieza cotidiana con buena relación precio uso.',
            categoryId: 'cuidado',
            categoryLabel: 'Cuidado',
            price: 3950,
            tone: 'blue',
            badge: 'Precio bajo',
            suggestions: ['acondicionador', 'jabon-liquido'],
          },
          {
            id: 'jabon-liquido',
            name: 'Jabon liquido',
            description: 'Para baño y cocina en un solo paso.',
            categoryId: 'cuidado',
            categoryLabel: 'Cuidado',
            price: 1650,
            tone: 'green',
            badge: 'Básico',
            suggestions: ['shampoo-400', 'acondicionador'],
          },
          {
            id: 'acondicionador',
            name: 'Acondicionador',
            description: 'Complemento para el cabello de todos los días.',
            categoryId: 'cuidado',
            categoryLabel: 'Cuidado',
            price: 4100,
            tone: 'violet',
            badge: 'Complemento',
            suggestions: ['shampoo-400', 'protector-solar'],
          },
        ],
      },
      {
        id: 'bienestar',
        label: 'Bienestar',
        description: 'Cosas que se llevan rápido cuando hacen falta.',
        products: [
          {
            id: 'omeprazol-20',
            name: 'Omeprazol 20 mg',
            description: 'Compra de rutina para tener a mano.',
            categoryId: 'bienestar',
            categoryLabel: 'Bienestar',
            price: 7150,
            tone: 'red',
            badge: 'Salud',
            suggestions: ['protector-solar', 'alcohol-gel'],
          },
          {
            id: 'alcohol-gel',
            name: 'Alcohol en gel',
            description: 'Siempre útil para mochila o cartera.',
            categoryId: 'bienestar',
            categoryLabel: 'Bienestar',
            price: 1850,
            tone: 'blue',
            badge: 'Práctico',
            suggestions: ['omeprazol-20', 'protector-solar'],
          },
          {
            id: 'protector-solar',
            name: 'Protector solar',
            description: 'Para cuidar la piel en la temporada larga.',
            categoryId: 'bienestar',
            categoryLabel: 'Bienestar',
            price: 9200,
            tone: 'orange',
            badge: 'Temporada',
            suggestions: ['alcohol-gel', 'omeprazol-20'],
          },
        ],
      },
      {
        id: 'perfumeria',
        label: 'Perfumería',
        description: 'Higiene y cuidado personal.',
        products: [
          {
            id: 'desodorante',
            name: 'Desodorante',
            description: 'El complemento de todos los días.',
            categoryId: 'perfumeria',
            categoryLabel: 'Perfumería',
            price: 3250,
            tone: 'slate',
            badge: 'Uso diario',
            suggestions: ['shampoo-400', 'jabon-liquido'],
          },
          {
            id: 'crema-manos',
            name: 'Crema de manos',
            description: 'Para completar la compra de perfumería.',
            categoryId: 'perfumeria',
            categoryLabel: 'Perfumería',
            price: 2750,
            tone: 'violet',
            badge: 'Extra',
            suggestions: ['desodorante', 'protector-solar'],
          },
          {
            id: 'toallitas',
            name: 'Toallitas húmedas',
            description: 'Prácticas para mochila o changuito.',
            categoryId: 'perfumeria',
            categoryLabel: 'Perfumería',
            price: 1480,
            tone: 'green',
            badge: 'Complemento',
            suggestions: ['desodorante', 'crema-manos'],
          },
        ],
      },
    ],
  },
  'carniceria-central': {
    intro: 'Cortes frescos, milanesas y pedidos por kilo listos para armar el pedido completo.',
    sections: [
      {
        id: 'cortes',
        label: 'Cortes',
        description: 'Para el almuerzo o la noche.',
        products: [
          {
            id: 'bife-ancho',
            name: 'Bife ancho',
            description: 'Un corte protagonista para la compra principal.',
            categoryId: 'cortes',
            categoryLabel: 'Cortes',
            price: 9900,
            tone: 'red',
            badge: 'Premium',
            suggestions: ['asado-especial', 'picada-premium'],
          },
          {
            id: 'asado-especial',
            name: 'Asado especial',
            description: 'Para el finde y las comidas largas.',
            categoryId: 'cortes',
            categoryLabel: 'Cortes',
            price: 10900,
            tone: 'orange',
            badge: 'Finde',
            suggestions: ['bife-ancho', 'hamburguesas-caseras'],
          },
          {
            id: 'picada-premium',
            name: 'Picada premium',
            description: 'Para compartir sin complicarse.',
            categoryId: 'cortes',
            categoryLabel: 'Cortes',
            price: 8400,
            tone: 'violet',
            badge: 'Compartir',
            suggestions: ['asado-especial', 'bife-ancho'],
          },
        ],
      },
      {
        id: 'milanesas',
        label: 'Milanesas',
        description: 'La compra de siempre para resolver rápido.',
        products: [
          {
            id: 'milanesas-kg',
            name: 'Milanesas x kg',
            description: 'Una de las salidas más prácticas de la carnicería.',
            categoryId: 'milanesas',
            categoryLabel: 'Milanesas',
            price: 9100,
            tone: 'blue',
            badge: 'Mejor salida',
            suggestions: ['hamburguesas-caseras', 'asado-especial'],
          },
          {
            id: 'hamburguesas-caseras',
            name: 'Hamburguesas caseras',
            description: 'Para armar el pedido del día en un solo toque.',
            categoryId: 'milanesas',
            categoryLabel: 'Milanesas',
            price: 6200,
            tone: 'green',
            badge: 'Listo para cocinar',
            suggestions: ['milanesas-kg', 'asado-especial'],
          },
          {
            id: 'pollo-entero',
            name: 'Pollo entero',
            description: 'Otro clásico para completar la compra.',
            categoryId: 'milanesas',
            categoryLabel: 'Milanesas',
            price: 5450,
            tone: 'orange',
            badge: 'Clásico',
            suggestions: ['milanesas-kg', 'bife-ancho'],
          },
        ],
      },
      {
        id: 'extras',
        label: 'Extras',
        description: 'Pedidos secundarios que completan el viaje.',
        products: [
          {
            id: 'hielo-carniceria',
            name: 'Hielo 2 kg',
            description: 'Perfecto para acompañar el pedido del finde.',
            categoryId: 'extras',
            categoryLabel: 'Extras',
            price: 1200,
            tone: 'slate',
            badge: 'Complemento',
            suggestions: ['asado-especial', 'picada-premium'],
          },
          {
            id: 'salsas',
            name: 'Salsa parrillera',
            description: 'El detalle que suma al pedido principal.',
            categoryId: 'extras',
            categoryLabel: 'Extras',
            price: 980,
            tone: 'red',
            badge: 'Extra',
            suggestions: ['bife-ancho', 'asado-especial'],
          },
          {
            id: 'condimentos',
            name: 'Condimentos',
            description: 'Los básicos que completan la compra.',
            categoryId: 'extras',
            categoryLabel: 'Extras',
            price: 690,
            tone: 'violet',
            badge: 'Básico',
            suggestions: ['salsas', 'hielo-carniceria'],
          },
        ],
      },
    ],
  },
};

const defaultCatalogKey = 'almacen-juan';

const CatalogShell = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const CatalogToolbar = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const CategoryChip = styled.button`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
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
    border-color: rgba(0, 71, 231, 0.2);
    color: ${({ theme }) => theme.color.text};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  /* Dos columnas ya en mobile: mismo tamaño de tarjeta que en Inicio,
     para que el catálogo se recorra de un vistazo. */
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

const ProductCard = styled(Card)<{ $active?: boolean }>`
  overflow: hidden;
  border-color: ${({ theme, $active }) => ($active ? 'rgba(0, 71, 231, 0.24)' : theme.color.border)};
  background: ${({ theme, $active }) =>
    $active
      ? theme.mode === 'dark'
        ? 'linear-gradient(180deg, rgba(107, 157, 255, 0.09), rgba(17, 26, 46, 0.98))'
        : 'linear-gradient(180deg, rgba(0, 71, 231, 0.05), rgba(255, 255, 255, 0.98))'
      : theme.color.surface};
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadow.md : theme.shadow.sm)};
`;

const ProductVisual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 8.5rem;
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.onPrimary};
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.36), transparent 22%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.72), rgba(37, 99, 235, 0.92));

  &[data-tone='green'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.36), transparent 22%),
      linear-gradient(135deg, rgba(15, 157, 88, 0.78), rgba(34, 197, 94, 0.92));
  }

  &[data-tone='orange'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(217, 119, 6, 0.78), rgba(245, 158, 11, 0.92));
  }

  &[data-tone='red'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(185, 28, 28, 0.78), rgba(239, 68, 68, 0.92));
  }

  &[data-tone='violet'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(124, 58, 237, 0.78), rgba(139, 92, 246, 0.92));
  }

  &[data-tone='slate'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.24), transparent 22%),
      linear-gradient(135deg, rgba(51, 65, 85, 0.78), rgba(100, 116, 139, 0.92));
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 7rem;
    gap: ${({ theme }) => theme.spacing[1]};
    padding: ${({ theme }) => theme.spacing[1]};
  }
`;

const ProductVisualRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

const ProductVisualLabel = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.18);
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    min-height: 1.5rem;
    padding: 0 ${({ theme }) => theme.spacing[1]};
  }
`;

const ProductVisualTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.onPrimary};
`;

const ProductVisualText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    display: none;
  }
`;

const ProductDescription = styled(CardText)`
  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    display: none;
  }
`;

const ProductMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const QuantityStepper = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const QuantityButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const QuantityValue = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

const ProductActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 0;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    width: 100%;
  }
`;

const SummaryCard = styled(Card)`
  position: sticky;
  top: calc(var(--marketplace-topbar-height, ${({ theme }) => theme.layout.topBarHeight}) + ${({ theme }) => theme.spacing[2]});
  align-self: start;
`;

const SummaryList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
  }
`;

const SuggestionGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SuggestionCard = styled(Card)`
  overflow: hidden;
`;


const EmptyStateCard = styled(Card)`
  border-style: dashed;
`;

const catalogSectionCopy = {
  all: 'Todas las categorías',
};

const findStoreCatalog = (storeId: string) => storeCatalogs[storeId] ?? storeCatalogs[defaultCatalogKey];

export function StoreProfileScreen() {
  const { storeId = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const store = useMemo(() => findStoreById(storeId) ?? stores[0], [storeId]);
  const fullCatalog = useMemo(() => findStoreCatalog(store.id), [store.id]);

  /* Al venir desde "Mis pedidos" se mira un pedido concreto. */
  const orderId = searchParams.get('pedido');
  const order = useMemo(
    () =>
      orderId
        ? (customerOrders.find(
            (item) => item.id === orderId && item.storeId === store.id,
          ) ?? null)
        : null,
    [orderId, store.id],
  );

  /**
   * Mirando un pedido, el catálogo se recorta a lo que se compró: las
   * categorías, el buscador y las sugerencias trabajan sobre ese subconjunto,
   * así nada muestra productos que no formaban parte del pedido.
   */
  const catalog = useMemo(() => {
    if (!order) {
      return fullCatalog;
    }

    const ordered = new Set(order.items.map((item) => item.productId));

    return {
      ...fullCatalog,
      sections: fullCatalog.sections
        .map((section) => ({
          ...section,
          products: section.products.filter((product) => ordered.has(product.id)),
        }))
        .filter((section) => section.products.length > 0),
    };
  }, [fullCatalog, order]);

  /** Unidades compradas de cada producto, para mostrarlas en la tarjeta. */
  const orderedQuantities = useMemo(() => {
    if (!order) {
      return {} as Record<string, number>;
    }

    return Object.fromEntries(order.items.map((item) => [item.productId, item.quantity]));
  }, [order]);

  const allProducts = useMemo(
    () => catalog.sections.flatMap((section) => section.products),
    [catalog],
  );

  const [query, setQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [selectedProductId, setSelectedProductId] = useState<string>(allProducts[0]?.id ?? '');
  const [quantities, setQuantities] = useState<QuantityMap>({});

  useEffect(() => {
    const initialQuantities = Object.fromEntries(allProducts.map((product) => [product.id, 0]));

    setQuery('');
    setActiveCategoryId('all');
    setSelectedProductId(allProducts[0]?.id ?? '');
    setQuantities(initialQuantities);
  }, [allProducts, store.id]);

  const selectedSectionProducts = useMemo(() => {
    const normalizedQuery = query.trim();

    return catalog.sections
      .filter((section) => activeCategoryId === 'all' || section.id === activeCategoryId)
      .map((section) => ({
        ...section,
        products: section.products.filter((product) =>
          matchesStoreQuery(normalizedQuery, section, product),
        ),
      }))
      .filter((section) => section.products.length > 0);
  }, [activeCategoryId, catalog, query]);

  const visibleProducts = useMemo(
    () => selectedSectionProducts.flatMap((section) => section.products),
    [selectedSectionProducts],
  );

  useEffect(() => {
    if (visibleProducts.length === 0) {
      return;
    }

    if (!visibleProducts.some((product) => product.id === selectedProductId)) {
      setSelectedProductId(visibleProducts[0].id);
    }
  }, [selectedProductId, visibleProducts]);

  const selectedProduct = useMemo(
    () =>
      visibleProducts.find((product) => product.id === selectedProductId) ??
      visibleProducts[0] ??
      allProducts[0],
    [allProducts, selectedProductId, visibleProducts],
  );

  const suggestionProducts = useMemo(() => {
    /* Mirando un pedido la pantalla es una consulta, no una compra nueva:
       sugerir otros productos sería salirse de lo que se pidió ver. */
    if (!selectedProduct || order) {
      return [];
    }

    return selectedProduct.suggestions
      .map((productId) => allProducts.find((product) => product.id === productId))
      .filter((product): product is CatalogProduct => Boolean(product))
      .slice(0, 4);
  }, [allProducts, selectedProduct]);

  const selectedCount = useMemo(
    () => Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0),
    [quantities],
  );

  const selectedSubtotal = useMemo(
    () =>
      allProducts.reduce((sum, product) => sum + product.price * (quantities[product.id] ?? 0), 0),
    [allProducts, quantities],
  );

  const selectedItems = useMemo(
    () =>
      allProducts
        .map((product) => ({
          ...product,
          quantity: quantities[product.id] ?? 0,
        }))
        .filter((product) => product.quantity > 0)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 3),
    [allProducts, quantities],
  );

  const searchSuggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = normalizedQuery
      ? catalog.sections.filter(
          (section) =>
            section.label.toLowerCase().includes(normalizedQuery) ||
            section.description.toLowerCase().includes(normalizedQuery),
        )
      : catalog.sections;

    return filtered.length > 0 ? filtered.slice(0, 3) : catalog.sections.slice(0, 3);
  }, [catalog.sections, query]);

  /* Quita el filtro del pedido y deja el comercio completo. */
  const showWholeCatalog = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('pedido');
    setSearchParams(next, { replace: true });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((current) => {
      const nextValue = Math.max(0, (current[productId] ?? 0) + delta);
      return { ...current, [productId]: nextValue };
    });
    setSelectedProductId(productId);
  };

  const setQuantity = (productId: string, value: number) => {
    setQuantities((current) => ({ ...current, [productId]: Math.max(0, value) }));
    setSelectedProductId(productId);
  };

  const addToCart = (productId: string) => {
    updateQuantity(productId, 1);
  };

  return (
    <MarketplaceFrame
      showSearch={false}
    >
      <Section>
        <SectionInner>
          <StoreHero
            id={store.id}
            name={store.name}
            category={store.category}
            categoryId={store.id}
            address={store.address}
            hours={store.hours}
            distanceKm={store.distanceKm}
            rating={store.rating}
            openNow={store.openNow}
            minOrder={store.minOrder}
          />
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <CatalogShell>
            {order ? (
              <OrderNotice>
                <PackageSearch size={20} aria-hidden="true" />
                <OrderNoticeText>
                  <OrderNoticeTitle>Productos del pedido {order.code}</OrderNoticeTitle>
                  <OrderNoticeMeta>
                    {order.date} · {formatMoney(order.total)}
                  </OrderNoticeMeta>
                </OrderNoticeText>
                <OrderNoticeClear type="button" onClick={showWholeCatalog}>
                  Ver todo el comercio
                </OrderNoticeClear>
              </OrderNotice>
            ) : null}

            <SearchRow onSubmit={handleSubmit}>
              <SearchShell htmlFor="store-search">
                <SearchLabel>Buscar productos dentro del comercio</SearchLabel>
                <SearchField>
                  <Search size={18} aria-hidden="true" />
                  <SearchInput
                    id="store-search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={`Buscar en ${store.name}...`}
                    aria-label="Buscar productos dentro del comercio"
                  />
                </SearchField>
              </SearchShell>
            </SearchRow>

            <HScrollRail aria-label="Categorías del comercio">
              <CategoryChip
                type="button"
                data-active={activeCategoryId === 'all'}
                onClick={() => setActiveCategoryId('all')}
              >
                Todas
              </CategoryChip>
              {catalog.sections.map((section) => (
                <CategoryChip
                  key={section.id}
                  type="button"
                  data-active={activeCategoryId === section.id}
                  onClick={() => setActiveCategoryId(section.id)}
                >
                  {section.label}
                </CategoryChip>
              ))}
            </HScrollRail>

            {selectedSectionProducts.length > 0 ? (
              selectedSectionProducts.map((section, sectionIndex) => (
                <SectionStack key={section.id}>
                  <SectionHeading title={section.label} subtitle={section.description} />

                  <CatalogGrid>
                    {section.products.map((product, index) => (
                      <CatalogProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        categoryId={product.categoryId}
                        /* Mirando un pedido, el badge dice cuántas unidades
                           se compraron en lugar de la etiqueta comercial. */
                        badge={
                          order
                            ? `${orderedQuantities[product.id] ?? 1} u.`
                            : product.badge
                        }
                        quantity={quantities[product.id] ?? 0}
                        onAdd={(units) => updateQuantity(product.id, units)}
                        priority={sectionIndex === 0 && index < 4}
                      />
                    ))}
                  </CatalogGrid>
                </SectionStack>
              ))
            ) : (
              <EmptyState
                icon={SearchX}
                title="Sin resultados"
                text="Probá con otro término o cambiá de categoría."
                dashed
              />
            )}
          </CatalogShell>
        </SectionInner>
      </Section>

      {suggestionProducts.length > 0 && (
        <Section>
          <SectionInner>
            <SectionHeading
              title="También podés llevar"
              chip="Sugeridos"
              subtitle="Combinaciones que van con lo que estás pidiendo."
            />

            <HScrollRail as={ScrollRail} aria-label="Productos sugeridos">
              {suggestionProducts.map((product) => (
                <CatalogProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  categoryId={product.categoryId}
                  badge={product.badge}
                  quantity={quantities[product.id] ?? 0}
                  onAdd={(units) => updateQuantity(product.id, units)}
                />
              ))}
            </HScrollRail>
          </SectionInner>
        </Section>
      )}

      {selectedCount > 0 && (
        <StoreCheckoutBar>
          <StoreCheckoutInfo>
            <StoreCheckoutCount>
              {selectedCount} {selectedCount === 1 ? 'producto' : 'productos'}
            </StoreCheckoutCount>
            <StoreCheckoutTotal>{formatMoney(selectedSubtotal)}</StoreCheckoutTotal>
          </StoreCheckoutInfo>

          <StoreCheckoutCta to="/carrito">
            <ShoppingCart size={18} aria-hidden="true" />
            Ver carrito
          </StoreCheckoutCta>
        </StoreCheckoutBar>
      )}
    </MarketplaceFrame>
  );
}

const SmallMeta = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

function matchesStoreQuery(query: string, section: CatalogSection, product: CatalogProduct) {
  if (!query) {
    return true;
  }

  const normalized = query.toLowerCase();

  return [section.label, section.description, product.name, product.description, product.categoryLabel]
    .join(' ')
    .toLowerCase()
    .includes(normalized);
}
