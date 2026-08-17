import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowRight,
  BadgePercent,
  Bell,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Home,
  LayoutGrid,
  MapPin,
  Menu,
  PackageSearch,
  ShoppingCart,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Truck,
  UserRound,
  Moon,
  Settings,
  Sun,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useThemeMode } from '@core/theme';
import { formatDistance, formatMoney, formatPercent, formatTimeRange, normalizeText } from '@shared/utils/format';

import { MarketplaceFrame } from '../../marketplace/components/MarketplaceFrame';
import {
  categories,
  desktopNavItems,
  featuredStores,
  filterGroups,
  locations,
  mobileNavItems,
  nearbyOffers,
  sponsoredBanners,
  trustItems,
} from '../homeContent';
import {
  HeaderBrandCopy as SharedHeaderBrandCopy,
  HeaderBrandTag as SharedHeaderBrandTag,
} from '../../marketplace/ui';
import {
  ActiveFilterChip,
  ActiveFilterRail,
  ActiveFilterRow,
  ActiveFilterChipClose,
  ActiveFilterScrollHint,
  BrandIcon,
  BrandLink,
  BrandMark,
  BrandName,
  BrandNameAccent,
  BrandText,
  BrandTag,
  BottomNav,
  BottomNavIcon,
  BottomNavLink,
  BottomNavList,
  CategoryButton,
  CategoryDescription,
  CategoryIcon,
  CategoryLabel,
  CategoryRail,
  FilterCategoryButton,
  FilterCategoryGrid,
  FilterChipButton,
  FilterChipRail,
  FilterDistanceCustomButton,
  FilterDistanceCustomField,
  FilterDistanceCustomInput,
  FilterDistanceCustomRow,
  FilterDistanceCustomUnit,
  FilterDistanceWarning,
  FilterFooter,
  FilterGhostButton,
  FilterPrimaryButton,
  FilterSectionHeader,
  FilterSectionMeta,
  FilterSectionText,
  FilterSectionTitle,
  FilterSheetBody,
  FilterSheetHeader,
  FilterSheetMeta,
  FilterSheetSection,
  FilterSheetTitle,
  FilterSheetTitleWrap,
  DesktopNav,
  DesktopNavIcon,
  DesktopNavLink,
  FilterButton,
  FilterButtonBadge,
  HeroGrid,
  HeroContent,
  HeroPreview,
  HeroSection,
  LocationButton,
  LocationLabel,
  LocationCurrentCard,
  LocationCurrentLabel,
  LocationCurrentMeta,
  LocationCurrentValue,
  LocationResultButton,
  LocationResultChevron,
  LocationResultIcon,
  LocationResultSubtitle,
  LocationResultText,
  LocationResultTitle,
  LocationResultsList,
  LocationRow,
  Main,
  MenuButton,
  ModalCard,
  ModalCloseButton,
  ModalGrid,
  ModalHeader,
  ModalMap,
  ModalOption,
  ModalOptionGrid,
  ModalOptionText,
  ModalOptionTitle,
  ModalOverlay,
  ModalText,
  ModalTitle,
  NotificationRow,
  NotificationRowContent,
  NotificationRowDate,
  NotificationRowIcon,
  NotificationRowSubtitle,
  NotificationRowTitle,
  NotificationRowTitleBar,
  NotificationsFeed,
  NotificationsPanelBody,
  NotificationsPanelDivider,
  NotificationsPanelHeader,
  NotificationsPanelHeaderButton,
  NotificationsPanelHeaderMeta,
  NotificationsPanelHeaderSpacer,
  NotificationsPanelHeaderTitle,
  NotificationsPanelHeaderTitleWrap,
  NotificationsSectionButton,
  NotificationsSectionButtonChevron,
  NotificationsSectionButtonIcon,
  NotificationsSectionButtonSubtitle,
  NotificationsSectionButtonText,
  NotificationsSectionButtonTitle,
  NotificationsSectionList,
  DrawerBody,
  DrawerBrand,
  DrawerBrandText,
  DrawerHeader,
  DrawerItem,
  DrawerItemArrow,
  DrawerItemIcon,
  DrawerItemSubtitle,
  DrawerItemText,
  DrawerItemTitle,
  DrawerList,
  DrawerSection,
  DrawerSectionLabel,
  DrawerThemeIcon,
  DrawerThemeRow,
  DrawerThemeSection,
  DrawerThemeSubtitle,
  DrawerThemeText,
  DrawerThemeTitle,
  DrawerThemeTrack,
  DrawerThemeTrackIcon,
  DrawerThemeThumb,
  MoreButton,
  MoreButtonText,
  OfferBadge,
  OfferCard,
  OfferContent,
  OfferOldPrice,
  OfferPrice,
  OfferPriceRow,
  OfferRail,
  OfferStore,
  OfferTitle,
  OfferVisual,
  HomeLayout,
  HomeMainColumn,
  HomeSidebar,
  Page,
  PromoBadge,
  PromoCard,
  PromoCopy,
  PromoDots,
  PromoDot,
  PromoDiscount,
  PromoRail,
  PromoStore,
  PromoText,
  PromoTitle,
  PromoVisual,
  PromoVisualLabel,
  PromoNavButton,
  SearchField,
  SearchForm,
  SearchInput,
  SearchInputShell,
  SearchPanel,
  Section,
  SectionAction,
  SectionHeaderRow,
  SectionHeading,
  SectionEmptyState,
  SectionEmptyStateText,
  SectionInner,
  SectionPanel,
  SectionTitle,
  StoreAvatar,
  StoreCard,
  StoreContent,
  StoreCategory,
  StoreHeader,
  StoreIdentity,
  StoreMeta,
  StoreRail,
  StoreText,
  StoreTime,
  StoreVisual,
  StoreName,
  TopBar,
  TopBarAction,
  TopBarActions,
  TopBarCartLink,
  TopBarInner,
  TopBarMain,
  TopBarLeft,
  TopBarLogoLink,
  TopBarMobileMeta,
  TopBarNotificationButton,
  TopBarProfileButton,
  TrustCard,
  TrustCopy,
  TrustIcon,
  TrustStrip,
  TrustText,
  TrustTitle,
  SidebarActions,
  SidebarBadge,
  SidebarDetailIcon,
  SidebarDetailList,
  SidebarDetailRow,
  SidebarDetailText,
  SidebarDetailTitle,
  SidebarDetailValue,
  SidebarOrderAvatar,
  SidebarOrderItem,
  SidebarOrderList,
  SidebarOrderMeta,
  SidebarOrderPrice,
  SidebarOrderStore,
  SidebarOrderText,
  SidebarOrderTitle,
  SidebarPrimaryButton,
  SidebarSecondaryButton,
  SidebarSummaryRow,
  SidebarTitle,
  SidebarTotals,
  SidebarTotalRow,
  SidebarNotice,
} from './HomeScreenStyled';

type SortMode = 'featured' | 'closest' | 'cheapest' | 'discount';
type ServiceFilterKey = 'delivery' | 'pickup' | 'openNow';
type DistanceFilterMode = 'near' | 'five' | 'twentyFive' | 'custom';
type MenuDrawerPhase = 'opening' | 'open' | 'closing';
type NotificationPanelPhase = 'opening' | 'open' | 'closing';
type SidebarOrderTone = 'blue' | 'red' | 'orange';

const brandIconUrl = `${import.meta.env.BASE_URL}favicon.png`;
const MENU_DRAWER_TRANSITION_MS = 420;
const PROMO_CAROUSEL_SPEED = 84;

type SidebarOrderItem = {
  id: string;
  initials: string;
  product: string;
  store: string;
  quantity: string;
  price: number;
  tone: SidebarOrderTone;
};

const DesktopSidebar = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    inset: 0 auto 0 0;
    width: var(--desktop-sidebar-width);
    z-index: ${({ theme }) => theme.zIndex.header + 1};
    border-right: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    overflow: hidden;
  }
`;

const DesktopSidebarBody = styled(DrawerBody)`
  height: 100%;
`;

const desktopSidebarOrderItems: SidebarOrderItem[] = [
  {
    id: 'coca-cola',
    initials: 'CC',
    product: 'Coca Cola 3L',
    store: 'Don José Almacén',
    quantity: '1 unidad',
    price: 3500,
    tone: 'blue',
  },
  {
    id: 'bife-ancho',
    initials: 'LE',
    product: 'Bife ancho',
    store: 'La Estancia Carnicería',
    quantity: '1 kg',
    price: 9900,
    tone: 'red',
  },
  {
    id: 'pan-frances',
    initials: 'DE',
    product: 'Pan francés x 6',
    store: 'Delicias Panadería',
    quantity: '1 unidad',
    price: 2550,
    tone: 'orange',
  },
];
const createPromoArt = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const promoArtById: Record<string, string> = {
  'pack-familiar': createPromoArt(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dbeafe" />
          <stop offset="55%" stop-color="#eff6ff" />
          <stop offset="100%" stop-color="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="496" cy="108" r="74" fill="#fde68a" opacity="0.48" />
      <circle cx="118" cy="86" r="42" fill="#ffffff" opacity="0.45" />
      <rect x="92" y="160" width="456" height="148" rx="36" fill="rgba(255,255,255,0.52)" />
      <rect x="146" y="122" width="124" height="176" rx="24" fill="#ffffff" />
      <rect x="282" y="108" width="114" height="190" rx="24" fill="#eff6ff" />
      <rect x="408" y="132" width="110" height="166" rx="24" fill="#fff7ed" />
      <circle cx="208" cy="190" r="28" fill="#f59e0b" />
      <circle cx="340" cy="176" r="30" fill="#22c55e" />
      <circle cx="464" cy="204" r="22" fill="#ef4444" />
      <rect x="188" y="236" width="42" height="18" rx="9" fill="#1d4ed8" opacity="0.2" />
      <rect x="318" y="228" width="48" height="18" rx="9" fill="#16a34a" opacity="0.2" />
    </svg>
  `),
  'frescura-del-dia': createPromoArt(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dcfce7" />
          <stop offset="55%" stop-color="#f0fdf4" />
          <stop offset="100%" stop-color="#bbf7d0" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="506" cy="98" r="82" fill="#fef08a" opacity="0.38" />
      <circle cx="116" cy="106" r="44" fill="#ffffff" opacity="0.4" />
      <rect x="90" y="170" width="460" height="136" rx="34" fill="rgba(255,255,255,0.54)" />
      <ellipse cx="226" cy="220" rx="52" ry="60" fill="#22c55e" />
      <ellipse cx="338" cy="214" rx="58" ry="64" fill="#86efac" />
      <ellipse cx="444" cy="226" rx="54" ry="58" fill="#f97316" />
      <circle cx="230" cy="220" r="22" fill="#4ade80" />
      <circle cx="338" cy="214" r="24" fill="#16a34a" />
      <circle cx="444" cy="226" r="20" fill="#fb923c" />
      <path d="M200 176c14-20 36-28 58-28" stroke="#166534" stroke-width="12" stroke-linecap="round" />
      <path d="M314 170c16-18 36-26 58-26" stroke="#15803d" stroke-width="12" stroke-linecap="round" />
      <path d="M418 182c14-16 32-24 52-24" stroke="#c2410c" stroke-width="12" stroke-linecap="round" />
    </svg>
  `),
  'asado-especial': createPromoArt(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fee2e2" />
          <stop offset="55%" stop-color="#fff1f2" />
          <stop offset="100%" stop-color="#fecaca" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="500" cy="102" r="78" fill="#f59e0b" opacity="0.35" />
      <circle cx="114" cy="94" r="40" fill="#ffffff" opacity="0.42" />
      <rect x="92" y="166" width="456" height="136" rx="32" fill="rgba(255,255,255,0.56)" />
      <rect x="172" y="136" width="292" height="162" rx="28" fill="#7f1d1d" />
      <rect x="184" y="148" width="268" height="38" rx="19" fill="#b91c1c" />
      <rect x="198" y="194" width="232" height="22" rx="11" fill="#ef4444" opacity="0.7" />
      <circle cx="238" cy="232" r="20" fill="#dc2626" />
      <circle cx="320" cy="240" r="24" fill="#f59e0b" />
      <circle cx="398" cy="228" r="18" fill="#16a34a" />
      <path d="M220 126c10-24 24-36 42-42" stroke="#7c2d12" stroke-width="10" stroke-linecap="round" />
      <path d="M320 124c12-22 26-34 44-40" stroke="#7c2d12" stroke-width="10" stroke-linecap="round" />
      <path d="M418 126c10-22 22-34 40-40" stroke="#7c2d12" stroke-width="10" stroke-linecap="round" />
    </svg>
  `),
};

const promoVisualStyle = (bannerId: string): CSSProperties =>
  ({
    '--promo-art': `url("${promoArtById[bannerId] ?? promoArtById['pack-familiar']}")`,
  }) as CSSProperties;

const sortLabelMap: Record<SortMode, string> = {
  featured: 'Destacados',
  closest: 'Más cercanos',
  cheapest: 'Más baratos',
  discount: 'Mayor descuento',
};

const distanceLabelMap: Record<DistanceFilterMode, string> = {
  near: 'Hasta 1 km',
  five: 'Hasta 5 km',
  twentyFive: 'Hasta 25 km',
  custom: 'Personalizado:',
};

const sanitizeDistanceKm = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '');

  if (!digitsOnly) {
    return '1';
  }

  return String(Math.max(1, Number.parseInt(digitsOnly, 10) || 1));
};

const formatDistanceRadiusLabel = (distanceKm: number) => `Hasta ${distanceKm}km`;

const matchesText = (query: string, ...values: Array<string | number | boolean | undefined>) => {
  const normalized = normalizeText(query);

  if (!normalized) {
    return true;
  }

  return values
    .filter((value) => value !== undefined)
    .join(' ')
    .toLowerCase()
    .includes(normalized);
};

type DrawerItemConfig = {
  title: string;
  subtitle: string;
  to: string;
  icon: LucideIcon;
  end?: boolean;
};

const drawerPrimaryItems: DrawerItemConfig[] = [
  {
    title: 'Inicio',
    subtitle: 'Resumen, promos y accesos rápidos',
    to: '/',
    icon: Home,
    end: true,
  },
  {
    title: 'Comercios',
    subtitle: 'Buscá por rubro o cerca de tu zona',
    to: '/comercios',
    icon: Store,
  },
  {
    title: 'Pedidos',
    subtitle: 'Seguimiento de compras y entregas',
    to: '/pedidos',
    icon: PackageSearch,
  },
  {
    title: 'Notificaciones',
    subtitle: 'Alertas y novedades del marketplace',
    to: '/notificaciones',
    icon: Bell,
  },
  {
    title: 'Favoritos',
    subtitle: 'Guardados y productos atentos',
    to: '/favoritos',
    icon: Heart,
  },
  {
    title: 'Mi cuenta',
    subtitle: 'Perfil, seguridad y datos',
    to: '/mi-cuenta',
    icon: UserRound,
  },
];

const drawerActionItems: DrawerItemConfig[] = [
  {
    title: 'Publicar comercio',
    subtitle: 'Sumá tu negocio al marketplace',
    to: '/registro/comercio',
    icon: ShieldCheck,
  },
  {
    title: 'Trabaja con nosotros',
    subtitle: 'Registrate como delivery y cobrá por tus entregas',
    to: '/trabaja-con-nosotros',
    icon: Truck,
  },
];

type NotificationSectionId = 'sales' | 'orders' | 'account' | 'promos';

type NotificationItemData = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  date: Date;
};

type NotificationSectionData = {
  id: NotificationSectionId;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: NotificationItemData[];
};

const notificationSections: NotificationSectionData[] = [
  {
    id: 'sales',
    title: 'Ventas y gestión',
    subtitle: 'Actualizaciones de tus ventas.',
    icon: BadgePercent,
    items: [
      {
        icon: Store,
        title: 'Nueva venta confirmada',
        subtitle: 'Se acreditó un pedido en Don José.',
        date: new Date(2026, 7, 14),
      },
      {
        icon: PackageSearch,
        title: 'Pedido listo para entregar',
        subtitle: 'Retirá el paquete en el comercio.',
        date: new Date(2026, 7, 13),
      },
      {
        icon: Bell,
        title: 'Promoción aprobada',
        subtitle: 'Tu anuncio quedó visible en el home.',
        date: new Date(2025, 7, 14),
      },
    ],
  },
  {
    id: 'orders',
    title: 'Pedidos y entregas',
    subtitle: 'Seguimiento y estado de entregas.',
    icon: Truck,
    items: [
      {
        icon: Truck,
        title: 'Reparto en camino',
        subtitle: 'Tu delivery ya salió hacia destino.',
        date: new Date(2026, 7, 14),
      },
      {
        icon: PackageSearch,
        title: 'Pedido preparado',
        subtitle: 'El comercio terminó el armado.',
        date: new Date(2026, 7, 12),
      },
      {
        icon: Store,
        title: 'Comercio en espera',
        subtitle: 'Hay una novedad en el local asignado.',
        date: new Date(2025, 7, 14),
      },
    ],
  },
  {
    id: 'account',
    title: 'Cuenta y seguridad',
    subtitle: 'Perfil, pagos y accesos.',
    icon: ShieldCheck,
    items: [
      {
        icon: UserRound,
        title: 'Perfil actualizado',
        subtitle: 'Revisá tus datos personales y foto.',
        date: new Date(2026, 7, 14),
      },
      {
        icon: ShieldCheck,
        title: 'Acceso seguro',
        subtitle: 'Tu cuenta quedó protegida con verificación.',
        date: new Date(2026, 7, 11),
      },
      {
        icon: BadgePercent,
        title: 'Método de pago listo',
        subtitle: 'Alias o CBU disponible para cobros.',
        date: new Date(2025, 7, 14),
      },
    ],
  },
  {
    id: 'promos',
    title: 'Promos y beneficios',
    subtitle: 'Descuentos, alertas y novedades.',
    icon: Bell,
    items: [
      {
        icon: BadgePercent,
        title: 'Descuento activado',
        subtitle: 'Hay una promo vigente cerca tuyo.',
        date: new Date(2026, 7, 14),
      },
      {
        icon: Heart,
        title: 'Favorito con rebaja',
        subtitle: 'Uno de tus guardados bajó de precio.',
        date: new Date(2026, 7, 13),
      },
      {
        icon: Bell,
        title: 'Novedad del día',
        subtitle: 'Entró una oferta nueva al carrusel.',
        date: new Date(2025, 7, 14),
      },
    ],
  },
];

const formatNotificationDateLabel = (value: Date) => {
  const now = new Date();
  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const date = new Date(value.getFullYear(), value.getMonth(), value.getDate());
  const diffDays = Math.round((current.getTime() - date.getTime()) / 86_400_000);

  if (diffDays === 0) {
    return 'Hoy';
  }

  if (diffDays === 1) {
    return 'Ayer';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');

  if (date.getFullYear() === current.getFullYear()) {
    return `${day}/${month}`;
  }

  return `${day}/${month}/${String(date.getFullYear()).slice(-2)}`;
};

type ActiveFilterChipData = {
  key: string;
  label: string;
  onRemove: () => void;
};

export function HomeScreen() {
  const { isDarkMode, toggleMode } = useThemeMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('featured');
  const [distanceFilter, setDistanceFilter] = useState<DistanceFilterMode>('five');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [serviceFilters, setServiceFilters] = useState<Record<ServiceFilterKey, boolean>>({
    delivery: false,
    pickup: false,
    openNow: false,
  });
  const [selectedLocationId, setSelectedLocationId] = useState(locations[0]?.id ?? '');
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuDrawerMounted, setMenuDrawerMounted] = useState(false);
  const [menuDrawerPhase, setMenuDrawerPhase] = useState<MenuDrawerPhase>('opening');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationSearchQuery, setLocationSearchQuery] = useState('');
  const [locationDraftLocationId, setLocationDraftLocationId] = useState(selectedLocationId);
  const [locationDraftMapQuery, setLocationDraftMapQuery] = useState(locations[0]?.mapQuery ?? '');
  const [customDistanceKm, setCustomDistanceKm] = useState('1');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsMounted, setNotificationsMounted] = useState(false);
  const [notificationsPhase, setNotificationsPhase] = useState<NotificationPanelPhase>('opening');
  const [selectedNotificationSectionId, setSelectedNotificationSectionId] = useState<NotificationSectionId | null>(null);
  const menuDrawerFrameRef = useRef<number | null>(null);
  const menuDrawerTimeoutRef = useRef<number | null>(null);
  const notificationsFrameRef = useRef<number | null>(null);
  const notificationsTimeoutRef = useRef<number | null>(null);
  const topBarRef = useRef<HTMLElement | null>(null);
  const promoViewportRef = useRef<HTMLDivElement | null>(null);
  const promoCardRefs = useRef<Array<HTMLElement | null>>([]);
  const promoActiveIndexRef = useRef(0);
  const promoAnimationFrameRef = useRef<number | null>(null);
  const notificationsButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeFilterRowRef = useRef<HTMLDivElement | null>(null);
  const [promoActiveIndex, setPromoActiveIndex] = useState(0);
  const [promoIsHovering, setPromoIsHovering] = useState(false);
  const [promoIsHolding, setPromoIsHolding] = useState(false);
  const [promoIsFocused, setPromoIsFocused] = useState(false);
  const [promoMetrics, setPromoMetrics] = useState({ firstOffset: 0, step: 0, loopWidth: 0 });
  const [activeFilterScrollState, setActiveFilterScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });
  const [isDesktopViewport, setIsDesktopViewport] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const isLocked =
      menuOpen ||
      menuDrawerMounted ||
      filtersOpen ||
      categoriesOpen ||
      locationOpen ||
      notificationsOpen ||
      notificationsMounted;

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [
    categoriesOpen,
    filtersOpen,
    locationOpen,
    menuDrawerMounted,
    menuOpen,
    notificationsMounted,
    notificationsOpen,
  ]);

  useLayoutEffect(() => {
    const element = topBarRef.current;

    if (!element) {
      return undefined;
    }

    const updateTopBarHeight = () => {
      document.documentElement.style.setProperty('--home-topbar-height', `${element.offsetHeight}px`);
    };

    updateTopBarHeight();

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateTopBarHeight) : null;
    observer?.observe(element);
    window.addEventListener('resize', updateTopBarHeight);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateTopBarHeight);
      document.documentElement.style.removeProperty('--home-topbar-height');
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const media = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktopViewport(media.matches);

    update();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);

      return () => {
        media.removeEventListener('change', update);
      };
    }

    media.addListener(update);

    return () => {
      media.removeListener(update);
    };
  }, []);

  useEffect(() => {
    if (menuDrawerFrameRef.current !== null) {
      window.cancelAnimationFrame(menuDrawerFrameRef.current);
      menuDrawerFrameRef.current = null;
    }

    if (menuDrawerTimeoutRef.current !== null) {
      window.clearTimeout(menuDrawerTimeoutRef.current);
      menuDrawerTimeoutRef.current = null;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (menuOpen) {
      setMenuDrawerMounted(true);

      if (prefersReducedMotion) {
        setMenuDrawerPhase('open');
        return;
      }

      setMenuDrawerPhase('opening');
      menuDrawerFrameRef.current = window.requestAnimationFrame(() => {
        setMenuDrawerPhase('open');
        menuDrawerFrameRef.current = null;
      });
      return;
    }

    if (!menuDrawerMounted) {
      return;
    }

    if (prefersReducedMotion) {
      setMenuDrawerMounted(false);
      setMenuDrawerPhase('opening');
      return;
    }

    setMenuDrawerPhase('closing');
    menuDrawerTimeoutRef.current = window.setTimeout(() => {
      setMenuDrawerMounted(false);
      setMenuDrawerPhase('opening');
      menuDrawerTimeoutRef.current = null;
    }, MENU_DRAWER_TRANSITION_MS);
  }, [menuDrawerMounted, menuOpen]);

  useEffect(
    () => () => {
      if (menuDrawerFrameRef.current !== null) {
        window.cancelAnimationFrame(menuDrawerFrameRef.current);
      }

      if (menuDrawerTimeoutRef.current !== null) {
        window.clearTimeout(menuDrawerTimeoutRef.current);
      }

      if (notificationsFrameRef.current !== null) {
        window.cancelAnimationFrame(notificationsFrameRef.current);
      }

      if (notificationsTimeoutRef.current !== null) {
        window.clearTimeout(notificationsTimeoutRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (notificationsFrameRef.current !== null) {
      window.cancelAnimationFrame(notificationsFrameRef.current);
      notificationsFrameRef.current = null;
    }

    if (notificationsTimeoutRef.current !== null) {
      window.clearTimeout(notificationsTimeoutRef.current);
      notificationsTimeoutRef.current = null;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (notificationsOpen) {
      setNotificationsMounted(true);

      if (prefersReducedMotion) {
        setNotificationsPhase('open');
        return;
      }

      setNotificationsPhase('opening');
      notificationsFrameRef.current = window.requestAnimationFrame(() => {
        setNotificationsPhase('open');
        notificationsFrameRef.current = null;
      });
      return;
    }

    if (!notificationsMounted) {
      return;
    }

    if (prefersReducedMotion) {
      setNotificationsMounted(false);
      setNotificationsPhase('opening');
      return;
    }

    setNotificationsPhase('closing');
    notificationsTimeoutRef.current = window.setTimeout(() => {
      setNotificationsMounted(false);
      setNotificationsPhase('opening');
      notificationsTimeoutRef.current = null;
    }, 260);
  }, [notificationsMounted, notificationsOpen]);

  const closeOverlays = useCallback(() => {
    setMenuOpen(false);
    setFiltersOpen(false);
    setCategoriesOpen(false);
    setLocationOpen(false);
    setNotificationsOpen(false);
    setSelectedNotificationSectionId(null);
  }, []);

  useEffect(() => {
    if (!menuOpen && !filtersOpen && !categoriesOpen && !locationOpen && !notificationsOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeOverlays();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [categoriesOpen, closeOverlays, filtersOpen, locationOpen, menuOpen, notificationsOpen]);

  const selectedLocation = useMemo(
    () => locations.find((location) => location.id === selectedLocationId) ?? locations[0],
    [selectedLocationId],
  );

  useEffect(() => {
    if (!locationOpen) {
      return;
    }

    setLocationSearchQuery('');
    setLocationDraftLocationId(selectedLocation?.id ?? '');
    setLocationDraftMapQuery(selectedLocation?.mapQuery ?? '');
  }, [locationOpen, selectedLocation]);

  const locationDraftLocation = useMemo(
    () => locations.find((location) => location.id === locationDraftLocationId) ?? selectedLocation,
    [locationDraftLocationId, selectedLocation],
  );

  const locationSearchResults = useMemo(() => {
    const normalizedQuery = normalizeText(locationSearchQuery);
    const filtered = normalizedQuery
      ? locations.filter((location) =>
          matchesText(normalizedQuery, location.label, location.detail, location.note, location.mapQuery),
        )
      : locations;

    return filtered.length > 0 ? filtered : locations;
  }, [locationSearchQuery]);

  const locationHasChanges =
    locationDraftLocationId !== selectedLocation?.id || locationDraftMapQuery !== (selectedLocation?.mapQuery ?? '');

  const customDistanceKmParsedValue = Number.parseInt(customDistanceKm, 10) || 1;
  const customDistanceKmValue = Math.max(1, customDistanceKmParsedValue);
  const customDistanceKmEffectiveValue = Math.min(50, customDistanceKmValue);
  const customDistanceKmHasExceededMax = customDistanceKmValue > 50;
  const locationRadiusLabel = formatDistanceRadiusLabel(
    distanceFilter === 'custom'
      ? customDistanceKmEffectiveValue
      : distanceFilter === 'near'
        ? 1
        : distanceFilter === 'twentyFive'
          ? 25
          : 5,
  );
  const displayedLocationLabel = `${selectedLocation?.label ?? 'Sin ubicación'} - ${locationRadiusLabel}`;

  const matchesDistanceFilter = (distanceKm: number) => {
    switch (distanceFilter) {
      case 'near':
        return distanceKm <= 1;
      case 'five':
        return distanceKm <= 5;
      case 'twentyFive':
        return distanceKm <= 25;
      case 'custom':
        return distanceKm <= customDistanceKmEffectiveValue;
      default:
        return distanceKm <= 5;
    }
  };

  const activeFilterChips = useMemo(() => {
    const chips: ActiveFilterChipData[] = [];

    if (sortMode !== 'featured') {
      chips.push({
        key: `sort-${sortMode}`,
        label: sortLabelMap[sortMode],
        onRemove: () => setSortMode('featured'),
      });
    }

    if (serviceFilters.delivery) {
      chips.push({
        key: 'service-delivery',
        label: 'Delivery',
        onRemove: () => setServiceFilters((current) => ({ ...current, delivery: false })),
      });
    }

    if (serviceFilters.pickup) {
      chips.push({
        key: 'service-pickup',
        label: 'Retiro',
        onRemove: () => setServiceFilters((current) => ({ ...current, pickup: false })),
      });
    }

    if (serviceFilters.openNow) {
      chips.push({
        key: 'service-openNow',
        label: 'Abierto ahora',
        onRemove: () => setServiceFilters((current) => ({ ...current, openNow: false })),
      });
    }

    selectedCategories.forEach((categoryId) => {
      const category = categories.find((item) => item.id === categoryId);

      if (category) {
        chips.push({
          key: `category-${categoryId}`,
          label: category.name,
          onRemove: () => {
            setSelectedCategories((current) => current.filter((currentCategoryId) => currentCategoryId !== categoryId));
          },
        });
      }
    });

    return chips;
  }, [
    distanceFilter,
    selectedCategories,
    serviceFilters.delivery,
    serviceFilters.openNow,
    serviceFilters.pickup,
    sortMode,
    customDistanceKmValue,
  ]);

  const activeFilterCount =
    (sortMode === 'featured' ? 0 : 1) +
    (distanceFilter === 'five' ? 0 : 1) +
    (serviceFilters.delivery ? 1 : 0) +
    (serviceFilters.pickup ? 1 : 0) +
    (serviceFilters.openNow ? 1 : 0) +
    selectedCategories.length;
  const hasAppliedFilters = Boolean(query.trim()) || activeFilterCount > 0;
  const emptyResultsMessage = hasAppliedFilters
    ? 'No se encontraron coincidencias para los filtros actuales.'
    : 'No se encontraron coincidencias para este radio de ubicación.';

  useEffect(() => {
    const rail = activeFilterRowRef.current;

    if (!rail || activeFilterChips.length === 0) {
      setActiveFilterScrollState({ canScrollLeft: false, canScrollRight: false });
      return undefined;
    }

    const update = () => {
      const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
      const canScrollLeft = rail.scrollLeft > 2;
      const canScrollRight = maxScrollLeft - rail.scrollLeft > 2;

      setActiveFilterScrollState((current) =>
        current.canScrollLeft === canScrollLeft && current.canScrollRight === canScrollRight
          ? current
          : { canScrollLeft, canScrollRight },
      );
    };

    update();
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(rail);

    return () => {
      rail.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer?.disconnect();
    };
  }, [
    activeFilterChips.length,
    customDistanceKmValue,
    distanceFilter,
    selectedCategories.length,
    serviceFilters.delivery,
    serviceFilters.openNow,
    serviceFilters.pickup,
    sortMode,
  ]);

  const visibleCategories = useMemo(() => {
    const limit = isDesktopViewport ? 9 : 5;
    const list = query
      ? categories.filter((category) => matchesText(query, category.name, category.description))
      : categories.slice(0, limit);

    return list.length > 0 ? list.slice(0, limit) : categories.slice(0, limit);
  }, [isDesktopViewport, query]);

  const visibleSponsoredBanners = useMemo(
    () => {
      const filtered = sponsoredBanners.filter((banner) =>
        matchesText(query, banner.title, banner.subtitle, banner.store, banner.badge),
      );

      return filtered.length > 0 ? filtered : sponsoredBanners;
    },
    [query],
  );

  const loopedSponsoredBanners = useMemo(
    () => [...visibleSponsoredBanners, ...visibleSponsoredBanners],
    [visibleSponsoredBanners],
  );

  useEffect(() => {
    promoActiveIndexRef.current = 0;
    setPromoActiveIndex(0);

    if (promoAnimationFrameRef.current !== null) {
      window.cancelAnimationFrame(promoAnimationFrameRef.current);
      promoAnimationFrameRef.current = null;
    }

    const viewport = promoViewportRef.current;

    if (viewport) {
      viewport.scrollLeft = 0;
    }
  }, [visibleSponsoredBanners]);

  useEffect(() => {
    const viewport = promoViewportRef.current;

    if (!viewport || loopedSponsoredBanners.length === 0 || visibleSponsoredBanners.length === 0) {
      return undefined;
    }

    const measure = () => {
      const firstCard = promoCardRefs.current[0];
      const secondCard = promoCardRefs.current[1];
      const duplicateStart = promoCardRefs.current[visibleSponsoredBanners.length];

      if (!firstCard || !secondCard || !duplicateStart) {
        return;
      }

      const viewportRect = viewport.getBoundingClientRect();
      const firstRect = firstCard.getBoundingClientRect();
      const secondRect = secondCard.getBoundingClientRect();
      const duplicateRect = duplicateStart.getBoundingClientRect();

      const firstOffset = firstRect.left - viewportRect.left + viewport.scrollLeft;
      const step = secondRect.left - firstRect.left;
      const loopWidth = duplicateRect.left - firstRect.left;

      if (step > 0 && loopWidth > 0) {
        setPromoMetrics({ firstOffset, step, loopWidth });
      }
    };

    measure();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(measure);
      observer.observe(viewport);

      const firstCard = promoCardRefs.current[0];
      if (firstCard) {
        observer.observe(firstCard);
      }

      return () => {
        observer.disconnect();
      };
    }

    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
    };
  }, [loopedSponsoredBanners.length, visibleSponsoredBanners.length, visibleSponsoredBanners]);

  useEffect(() => {
    const viewport = promoViewportRef.current;

    if (!viewport || promoMetrics.step === 0 || promoMetrics.loopWidth === 0 || visibleSponsoredBanners.length === 0) {
      return undefined;
    }

    const handleScroll = () => {
      const normalized =
        ((viewport.scrollLeft - promoMetrics.firstOffset) % promoMetrics.loopWidth + promoMetrics.loopWidth) %
        promoMetrics.loopWidth;
      const nextIndex = Math.round(normalized / promoMetrics.step) % visibleSponsoredBanners.length;

      if (nextIndex !== promoActiveIndexRef.current) {
        promoActiveIndexRef.current = nextIndex;
        setPromoActiveIndex(nextIndex);
      }
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      viewport.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSponsoredBanners.length, promoMetrics.firstOffset, promoMetrics.loopWidth, promoMetrics.step]);

  useEffect(() => {
    const viewport = promoViewportRef.current;

    if (!viewport || promoMetrics.step === 0 || promoMetrics.loopWidth === 0 || visibleSponsoredBanners.length === 0) {
      return undefined;
    }

    let rafId = 0;
    let previousTime = performance.now();

    const tick = (time: number) => {
      const delta = time - previousTime;
      previousTime = time;

      const shouldPause = promoIsHovering || promoIsHolding || promoIsFocused;

      if (!shouldPause) {
        viewport.scrollLeft += (PROMO_CAROUSEL_SPEED * delta) / 1000;

        while (viewport.scrollLeft - promoMetrics.firstOffset >= promoMetrics.loopWidth) {
          viewport.scrollLeft -= promoMetrics.loopWidth;
        }

        const normalized =
          ((viewport.scrollLeft - promoMetrics.firstOffset) % promoMetrics.loopWidth + promoMetrics.loopWidth) %
          promoMetrics.loopWidth;
        const nextIndex = Math.round(normalized / promoMetrics.step) % visibleSponsoredBanners.length;

        if (nextIndex !== promoActiveIndexRef.current) {
          promoActiveIndexRef.current = nextIndex;
          setPromoActiveIndex(nextIndex);
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    promoAnimationFrameRef.current = rafId;

    return () => {
      window.cancelAnimationFrame(rafId);
      if (promoAnimationFrameRef.current === rafId) {
        promoAnimationFrameRef.current = null;
      }
    };
  }, [
    promoIsFocused,
    promoIsHolding,
    promoIsHovering,
    promoMetrics.firstOffset,
    promoMetrics.loopWidth,
    promoMetrics.step,
    visibleSponsoredBanners.length,
  ]);

  const filteredStores = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    const list = featuredStores.filter((store) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(store.categoryId);
      const matchesDistance = matchesDistanceFilter(store.distanceKm);
      const matchesService =
        (!serviceFilters.delivery || store.delivery) &&
        (!serviceFilters.pickup || store.pickup) &&
        (!serviceFilters.openNow || store.openNow);
      const matchesSearch =
        !normalizedQuery ||
        [store.name, store.category, store.address]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesDistance && matchesService && matchesSearch;
    });

    if (sortMode === 'featured') {
      return list;
    }

    return list.sort((a, b) => {
      switch (sortMode) {
        case 'closest':
          return a.distanceKm - b.distanceKm;
        case 'cheapest':
          return a.etaMin - b.etaMin;
        case 'discount':
          return b.rating - a.rating || a.distanceKm - b.distanceKm;
        default:
          return 0;
      }
    });
  }, [distanceFilter, query, selectedCategories, serviceFilters, sortMode]);

  const filteredOffers = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    const list = nearbyOffers.filter((offer) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(offer.categoryId);
      const matchesDistance = matchesDistanceFilter(offer.distanceKm);
      const matchesService =
        (!serviceFilters.delivery || offer.delivery) &&
        (!serviceFilters.pickup || offer.pickup) &&
        (!serviceFilters.openNow || offer.openNow);
      const matchesSearch =
        !normalizedQuery ||
        [offer.product, offer.store].join(' ').toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesDistance && matchesService && matchesSearch;
    });

    if (sortMode === 'featured') {
      return list;
    }

    return list.sort((a, b) => {
      switch (sortMode) {
        case 'closest':
          return a.distanceKm - b.distanceKm;
        case 'cheapest':
          return a.price - b.price;
        case 'discount':
          return b.discount - a.discount || a.price - b.price;
        default:
          return 0;
      }
    });
  }, [distanceFilter, query, selectedCategories, serviceFilters, sortMode]);

  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    locationOpen ? locationDraftMapQuery || selectedLocation?.mapQuery || 'La Francia' : selectedLocation?.mapQuery || 'La Francia',
  )}&output=embed`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((current) =>
      current.includes(categoryId)
        ? current.filter((item) => item !== categoryId)
        : [...current, categoryId],
    );
  };

  const toggleServiceFilter = (key: ServiceFilterKey) => {
    setServiceFilters((current) => ({ ...current, [key]: !current[key] }));
  };

  const resetFilters = () => {
    setSortMode('featured');
    setDistanceFilter('five');
    setCustomDistanceKm('1');
    setServiceFilters({
      delivery: false,
      pickup: false,
      openNow: false,
    });
    setSelectedCategories([]);
  };

  const openModal = (setter: (value: boolean) => void) => {
    closeOverlays();
    setter(true);
  };

  const openNotifications = () => {
    closeOverlays();
    setNotificationsOpen(true);
  };

  const toggleNotifications = () => {
    if (notificationsOpen || notificationsMounted) {
      closeOverlays();
      return;
    }

    openNotifications();
  };

  const selectedNotificationSection = useMemo(
    () =>
      notificationSections.find((section) => section.id === selectedNotificationSectionId) ?? null,
    [selectedNotificationSectionId],
  );

  const scrollPromos = useCallback((direction: -1 | 1) => {
    const viewport = promoViewportRef.current;

    if (!viewport || promoMetrics.step === 0) {
      return;
    }

    viewport.scrollBy({
      left: direction * promoMetrics.step,
      behavior: 'smooth',
    });
  }, [promoMetrics.step]);

  const handleDrawerItemClick = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>, to: string) => {
      event.preventDefault();
      closeOverlays();

      window.setTimeout(() => {
        if (location.pathname !== to) {
          navigate(to);
        }
      }, MENU_DRAWER_TRANSITION_MS);
    },
    [closeOverlays, location.pathname, navigate],
  );

  return (
    <MarketplaceFrame showSearch={false} footerText="Inicio del marketplace: promociones, comercios y ofertas.">
      <div aria-hidden="true" style={{ display: 'none' }}>
      <TopBar ref={topBarRef}>
        <TopBarInner>
          <TopBarMain>
            <TopBarLeft>
              <MenuButton
                type="button"
                onClick={() => openModal(setMenuOpen)}
                aria-label="Abrir menú"
                aria-haspopup="dialog"
                aria-controls="home-menu-drawer"
                aria-expanded={menuOpen || menuDrawerMounted}
              >
                <Menu size={20} aria-hidden="true" />
              </MenuButton>

              <TopBarLogoLink aria-label="LaFranciaGO">
                <BrandMark>
                  <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
                </BrandMark>
              </TopBarLogoLink>
            </TopBarLeft>

            <BrandLink aria-label="LaFranciaGO">
              <BrandMark>
                <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
              </BrandMark>
              <BrandText>
                <BrandName aria-label="LaFranciaGO">
                  <span>LaFrancia</span>
                  <BrandNameAccent>GO</BrandNameAccent>
                </BrandName>
                <BrandTag>{'Todo lo de tu pueblo,\nen un solo lugar.'}</BrandTag>
              </BrandText>
            </BrandLink>

            <SharedHeaderBrandCopy aria-label="LaFranciaGO">
              <BrandName aria-hidden="true">
                <span>LaFrancia</span>
                <BrandNameAccent>GO</BrandNameAccent>
              </BrandName>
              <SharedHeaderBrandTag>{'Todo lo de tu pueblo,\nen un solo lugar.'}</SharedHeaderBrandTag>
            </SharedHeaderBrandCopy>

            <TopBarMobileMeta aria-label="Acciones rápidas">
              <TopBarCartLink to="/carrito" aria-label="Abrir carrito">
                <ShoppingCart size={18} aria-hidden="true" />
              </TopBarCartLink>
              <TopBarNotificationButton
                ref={notificationsButtonRef}
                type="button"
                onClick={toggleNotifications}
                aria-label="Abrir notificaciones"
                aria-haspopup="dialog"
                aria-controls="home-notifications-popover"
                aria-expanded={notificationsOpen || notificationsMounted}
              >
                <Bell size={18} aria-hidden="true" />
              </TopBarNotificationButton>
              <TopBarProfileButton to="/mi-cuenta" aria-label="Abrir mi cuenta">
                <UserRound size={18} aria-hidden="true" />
              </TopBarProfileButton>
            </TopBarMobileMeta>

            <TopBarActions>
              <TopBarCartLink to="/carrito" aria-label="Abrir carrito">
                <ShoppingCart size={18} aria-hidden="true" />
              </TopBarCartLink>
              <TopBarNotificationButton
                type="button"
                onClick={toggleNotifications}
                aria-label="Abrir notificaciones"
                aria-haspopup="dialog"
                aria-controls="home-notifications-popover"
                aria-expanded={notificationsOpen || notificationsMounted}
              >
                <Bell size={18} aria-hidden="true" />
              </TopBarNotificationButton>
              <TopBarAction to="/mi-cuenta" aria-label="Abrir mi cuenta">
                <UserRound size={18} aria-hidden="true" />
              </TopBarAction>
            </TopBarActions>
          </TopBarMain>

          <DesktopNav aria-label="Navegación principal">
            {desktopNavItems.map((item) => {
              const Icon = item.icon;

              return (
                <DesktopNavLink key={item.id} to={item.href}>
                  <DesktopNavIcon>
                    <Icon size={18} aria-hidden="true" />
                  </DesktopNavIcon>
                  <span>{item.label}</span>
                </DesktopNavLink>
              );
            })}
          </DesktopNav>
        </TopBarInner>
      </TopBar>

      <DesktopSidebar aria-label="Navegación principal">
        <DesktopSidebarBody>
          <DrawerBrand aria-label="LaFranciaGO">
            <BrandMark>
              <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
            </BrandMark>
            <DrawerBrandText>
              <BrandName aria-label="LaFranciaGO">
                <span>LaFrancia</span>
                <BrandNameAccent>GO</BrandNameAccent>
              </BrandName>
              <SharedHeaderBrandTag>{'Todo lo de tu pueblo,\nen un solo lugar.'}</SharedHeaderBrandTag>
            </DrawerBrandText>
          </DrawerBrand>

          <DrawerSection>
            <DrawerSectionLabel>NAVEGACIÓN</DrawerSectionLabel>
            <DrawerList aria-label="Navegación principal">
              {drawerPrimaryItems.map((item) => {
                const Icon = item.icon;

                return (
                  <DrawerItem key={item.to} to={item.to} end={item.end}>
                    <DrawerItemIcon aria-hidden="true">
                      <Icon size={18} aria-hidden="true" />
                    </DrawerItemIcon>
                    <DrawerItemText>
                      <DrawerItemTitle>{item.title}</DrawerItemTitle>
                      <DrawerItemSubtitle>{item.subtitle}</DrawerItemSubtitle>
                    </DrawerItemText>
                    <DrawerItemArrow aria-hidden="true">
                      <ArrowRight size={16} aria-hidden="true" />
                    </DrawerItemArrow>
                  </DrawerItem>
                );
              })}
            </DrawerList>
          </DrawerSection>

          <DrawerSection>
            <DrawerSectionLabel>ACCIONES</DrawerSectionLabel>
            <DrawerList aria-label="Acciones rápidas">
              {drawerActionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <DrawerItem key={item.to} to={item.to}>
                    <DrawerItemIcon aria-hidden="true">
                      <Icon size={18} aria-hidden="true" />
                    </DrawerItemIcon>
                    <DrawerItemText>
                      <DrawerItemTitle>{item.title}</DrawerItemTitle>
                      <DrawerItemSubtitle>{item.subtitle}</DrawerItemSubtitle>
                    </DrawerItemText>
                    <DrawerItemArrow aria-hidden="true">
                      <ArrowRight size={16} aria-hidden="true" />
                    </DrawerItemArrow>
                  </DrawerItem>
                );
              })}
            </DrawerList>
          </DrawerSection>

          <div style={{ flex: 1 }} aria-hidden="true" />

          <DrawerThemeSection>
            <DrawerThemeRow type="button" onClick={toggleMode} role="switch" aria-checked={isDarkMode}>
              <DrawerThemeIcon data-active="true" aria-hidden="true">
                {isDarkMode ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
              </DrawerThemeIcon>

              <DrawerThemeText>
                <DrawerThemeTitle>{isDarkMode ? 'Tema oscuro' : 'Tema claro'}</DrawerThemeTitle>
                <DrawerThemeSubtitle>Ajustá el contraste de toda la app.</DrawerThemeSubtitle>
              </DrawerThemeText>

              <DrawerThemeTrack aria-hidden="true">
                <DrawerThemeTrackIcon data-side="top" data-active={!isDarkMode}>
                  <Sun size={12} aria-hidden="true" />
                </DrawerThemeTrackIcon>
                <DrawerThemeThumb data-mode={isDarkMode ? 'dark' : 'light'} />
                <DrawerThemeTrackIcon data-side="bottom" data-active={isDarkMode}>
                  <Moon size={12} aria-hidden="true" />
                </DrawerThemeTrackIcon>
              </DrawerThemeTrack>
            </DrawerThemeRow>
          </DrawerThemeSection>
        </DesktopSidebarBody>
      </DesktopSidebar>

      {notificationsMounted && (
        <ModalOverlay
          data-notifications="true"
          data-state={notificationsPhase}
          role="presentation"
          onClick={closeOverlays}
        >
          <ModalCard
            id="home-notifications-popover"
            data-notifications="true"
            data-state={notificationsPhase}
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-notifications-title"
            onClick={(event) => event.stopPropagation()}
          >
            <NotificationsPanelHeader>
              {selectedNotificationSection ? (
                <NotificationsPanelHeaderButton
                  type="button"
                  onClick={() => setSelectedNotificationSectionId(null)}
                  aria-label="Volver a las notificaciones"
                >
                  <ChevronLeft size={14} aria-hidden="true" />
                </NotificationsPanelHeaderButton>
              ) : (
                <NotificationsPanelHeaderSpacer aria-hidden="true" />
              )}

              <NotificationsPanelHeaderTitleWrap>
                <NotificationsPanelHeaderTitle id="home-notifications-title">
                  {selectedNotificationSection?.title ?? 'Notificaciones'}
                </NotificationsPanelHeaderTitle>
                <NotificationsPanelHeaderMeta>
                  {selectedNotificationSection?.subtitle ?? 'Alertas, movimientos y novedades del marketplace'}
                </NotificationsPanelHeaderMeta>
              </NotificationsPanelHeaderTitleWrap>

              <NotificationsPanelHeaderButton
                type="button"
                onClick={() => {
                  closeOverlays();
                  navigate('/notificaciones');
                }}
                aria-label="Configuración de notificaciones"
              >
                <Settings size={14} aria-hidden="true" />
              </NotificationsPanelHeaderButton>
            </NotificationsPanelHeader>

            <NotificationsPanelDivider />

            <NotificationsPanelBody>
              {selectedNotificationSection ? (
                <NotificationsFeed aria-label={selectedNotificationSection.title}>
                  {selectedNotificationSection.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <NotificationRow key={`${selectedNotificationSection.id}-${item.title}`}>
                        <NotificationRowIcon aria-hidden="true">
                          <Icon size={14} aria-hidden="true" />
                        </NotificationRowIcon>
                        <NotificationRowContent>
                          <NotificationRowTitleBar>
                            <NotificationRowTitle>{item.title}</NotificationRowTitle>
                            <NotificationRowDate>{formatNotificationDateLabel(item.date)}</NotificationRowDate>
                          </NotificationRowTitleBar>
                          <NotificationRowSubtitle>{item.subtitle}</NotificationRowSubtitle>
                        </NotificationRowContent>
                      </NotificationRow>
                    );
                  })}
                </NotificationsFeed>
              ) : (
                <NotificationsSectionList aria-label="Secciones de notificaciones">
                  {notificationSections.map((section) => {
                    const Icon = section.icon;

                    return (
                      <NotificationsSectionButton
                        key={section.id}
                        type="button"
                        onClick={() => setSelectedNotificationSectionId(section.id)}
                      >
                        <NotificationsSectionButtonIcon aria-hidden="true">
                          <Icon size={16} aria-hidden="true" />
                        </NotificationsSectionButtonIcon>
                        <NotificationsSectionButtonText>
                          <NotificationsSectionButtonTitle>{section.title}</NotificationsSectionButtonTitle>
                          <NotificationsSectionButtonSubtitle>{section.subtitle}</NotificationsSectionButtonSubtitle>
                        </NotificationsSectionButtonText>
                        <NotificationsSectionButtonChevron aria-hidden="true">
                          <ChevronRight size={16} aria-hidden="true" />
                        </NotificationsSectionButtonChevron>
                      </NotificationsSectionButton>
                    );
                  })}
                </NotificationsSectionList>
              )}
            </NotificationsPanelBody>
          </ModalCard>
        </ModalOverlay>
      )}
      </div>

      <div>
        <HomeLayout>
          <HomeMainColumn>
            <HeroSection id="inicio">
              <SectionInner>
                <HeroGrid>
                  <HeroContent>
                    <SearchPanel>
                      <SearchForm onSubmit={handleSubmit}>
                        <SearchField htmlFor="home-search">
                          <SearchInputShell>
                            <Search size={18} aria-hidden="true" />
                            <SearchInput
                              id="home-search"
                              type="search"
                              value={query}
                              onChange={(event) => setQuery(event.target.value)}
                              placeholder="¿Qué estás buscando hoy?"
                              aria-label="Buscar productos, comercios o categorías"
                            />
                          </SearchInputShell>
                        </SearchField>

                        <FilterButton
                          type="button"
                          onClick={() => openModal(setFiltersOpen)}
                          data-active={filtersOpen}
                          aria-label="Abrir filtros"
                        >
                          <SlidersHorizontal size={18} aria-hidden="true" />
                          {activeFilterCount > 0 && <FilterButtonBadge>{activeFilterCount}</FilterButtonBadge>}
                        </FilterButton>
                      </SearchForm>
                    </SearchPanel>

                    <LocationRow>
                      <LocationLabel>
                        <MapPin size={18} aria-hidden="true" />
                        <span>{displayedLocationLabel}</span>
                      </LocationLabel>
                      <LocationButton type="button" onClick={() => openModal(setLocationOpen)}>
                        Cambiar
                      </LocationButton>
                    </LocationRow>

                    {activeFilterChips.length > 0 && (
                      <ActiveFilterRail>
                        {activeFilterScrollState.canScrollLeft && (
                          <ActiveFilterScrollHint data-side="left" aria-hidden="true">
                            <ChevronLeft size={14} aria-hidden="true" />
                          </ActiveFilterScrollHint>
                        )}

                        <ActiveFilterRow ref={activeFilterRowRef} aria-label="Filtros activos">
                          {activeFilterChips.map((chip) => (
                            <ActiveFilterChip
                              key={chip.key}
                              type="button"
                              onClick={chip.onRemove}
                              aria-label={`Quitar filtro ${chip.label}`}
                            >
                              <span>{chip.label}</span>
                              <ActiveFilterChipClose aria-hidden="true">
                                <X size={10} aria-hidden="true" />
                              </ActiveFilterChipClose>
                            </ActiveFilterChip>
                          ))}
                        </ActiveFilterRow>

                        {activeFilterScrollState.canScrollRight && (
                          <ActiveFilterScrollHint data-side="right" aria-hidden="true">
                            <ChevronRight size={14} aria-hidden="true" />
                          </ActiveFilterScrollHint>
                        )}
                      </ActiveFilterRail>
                    )}
                  </HeroContent>

                  <HeroPreview aria-label="Ofertas patrocinadas">
                    <PromoNavButton type="button" data-side="left" onClick={() => scrollPromos(-1)} aria-label="Oferta anterior">
                      <ChevronLeft size={14} aria-hidden="true" />
                    </PromoNavButton>
                    <PromoNavButton type="button" data-side="right" onClick={() => scrollPromos(1)} aria-label="Siguiente oferta">
                      <ChevronRight size={14} aria-hidden="true" />
                    </PromoNavButton>

                    <PromoRail
                      ref={promoViewportRef}
                      aria-label="Carrusel de ofertas patrocinadas"
                      onPointerEnter={() => setPromoIsHovering(true)}
                      onPointerLeave={() => setPromoIsHovering(false)}
                      onFocusCapture={() => setPromoIsFocused(true)}
                      onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setPromoIsFocused(false);
                        }
                      }}
                      onPointerDownCapture={(event) => {
                        if (event.pointerType !== 'mouse') {
                          setPromoIsHolding(true);
                        }
                      }}
                      onPointerUpCapture={() => setPromoIsHolding(false)}
                      onPointerCancelCapture={() => setPromoIsHolding(false)}
                    >
                      {loopedSponsoredBanners.map((banner, index) => {
                        const isDuplicate = index >= visibleSponsoredBanners.length;

                        return (
                          <PromoCard
                            key={`${banner.id}-${index}`}
                            ref={(node) => {
                              promoCardRefs.current[index] = node;
                            }}
                            to={banner.href}
                            data-tone={banner.tone}
                            aria-hidden={isDuplicate}
                            tabIndex={isDuplicate ? -1 : 0}
                            aria-label={`${banner.title} · ${banner.store}`}
                          >
                            <PromoCopy>
                              <PromoBadge>{banner.badge}</PromoBadge>
                              <PromoTitle>{banner.title}</PromoTitle>
                              <PromoStore>{banner.store}</PromoStore>
                              <PromoText>{banner.subtitle}</PromoText>
                            </PromoCopy>

                            <PromoVisual style={promoVisualStyle(banner.id)}>
                              <PromoVisualLabel>{banner.imageLabel}</PromoVisualLabel>
                              <PromoDiscount>{banner.discount}</PromoDiscount>
                            </PromoVisual>
                          </PromoCard>
                        );
                      })}
                    </PromoRail>

                    <PromoDots aria-label="Indicadores del carrusel">
                      {visibleSponsoredBanners.map((banner, index) => (
                        <PromoDot key={banner.id} data-active={index === promoActiveIndex} />
                      ))}
                    </PromoDots>
                  </HeroPreview>
                </HeroGrid>
              </SectionInner>
            </HeroSection>

            <Section>
              <SectionInner>
                <CategoryRail>
                  {visibleCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                      <CategoryButton
                        key={category.id}
                        type="button"
                        data-tone={category.tone}
                        data-active={selectedCategories.includes(category.id)}
                        onClick={() => toggleCategory(category.id)}
                      >
                        <CategoryIcon>
                          <Icon size={18} aria-hidden="true" />
                        </CategoryIcon>
                        <CategoryLabel>{category.name}</CategoryLabel>
                        <CategoryDescription>{category.description}</CategoryDescription>
                      </CategoryButton>
                    );
                  })}

                  <MoreButton type="button" onClick={() => openModal(setCategoriesOpen)}>
                    <CategoryIcon>
                      <LayoutGrid size={18} aria-hidden="true" />
                    </CategoryIcon>
                    <MoreButtonText>Ver más</MoreButtonText>
                    <CategoryDescription>Todas las categorías</CategoryDescription>
                  </MoreButton>
                </CategoryRail>
              </SectionInner>
            </Section>

            <Section>
              <SectionInner>
                <SectionPanel>
                  <SectionHeaderRow>
                    <SectionHeading>
                      <SectionTitle>Comercios destacados</SectionTitle>
                    </SectionHeading>

                    <SectionAction to="/comercios">Ver todos</SectionAction>
                  </SectionHeaderRow>

                  <StoreRail>
                    {filteredStores.length > 0 ? (
                      filteredStores.map((store) => (
                        <StoreCard key={store.id}>
                          <StoreVisual>
                            <StoreAvatar data-tone={store.tone}>{store.logoLabel}</StoreAvatar>
                          </StoreVisual>

                          <StoreContent>
                            <StoreHeader>
                              <StoreIdentity>
                                <StoreName>{store.name}</StoreName>
                                <StoreCategory>{store.category}</StoreCategory>
                              </StoreIdentity>

                              <StoreTime>{formatTimeRange(store.etaMin, store.etaMax)}</StoreTime>
                            </StoreHeader>

                            <StoreText>
                              {store.priceLevel} · Min. {formatMoney(store.minOrder)}
                            </StoreText>

                            <StoreMeta>
                              <StoreTime data-tone={store.tone}>{store.badge}</StoreTime>
                            </StoreMeta>
                          </StoreContent>
                        </StoreCard>
                      ))
                    ) : (
                      <SectionEmptyState>
                        <SectionEmptyStateText>{emptyResultsMessage}</SectionEmptyStateText>
                      </SectionEmptyState>
                    )}
                  </StoreRail>
                </SectionPanel>
              </SectionInner>
            </Section>

            <Section>
              <SectionInner>
                <TrustStrip>
                  {trustItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <TrustCard key={item.id}>
                        <TrustIcon>
                          <Icon size={18} aria-hidden="true" />
                        </TrustIcon>
                        <TrustCopy>
                          <TrustTitle>{item.title}</TrustTitle>
                          <TrustText>{item.description}</TrustText>
                        </TrustCopy>
                      </TrustCard>
                    );
                  })}
                </TrustStrip>
              </SectionInner>
            </Section>

            <Section id="ofertas">
              <SectionInner>
                <SectionPanel>
                  <SectionHeaderRow>
                    <SectionHeading>
                      <SectionTitle>Ofertas cerca tuyo</SectionTitle>
                    </SectionHeading>

                    <SectionAction to="/comercios">Ver todas</SectionAction>
                  </SectionHeaderRow>

                  <OfferRail>
                    {filteredOffers.length > 0 ? (
                      filteredOffers.map((offer) => (
                        <OfferCard key={offer.id}>
                          <OfferVisual data-tone={offer.tone}>
                            <OfferBadge>{formatPercent(-offer.discount)}</OfferBadge>
                          </OfferVisual>

                          <OfferContent>
                            <OfferTitle>{offer.product}</OfferTitle>
                            <OfferStore>{offer.store}</OfferStore>

                            <OfferPriceRow>
                              <OfferPrice>{formatMoney(offer.price)}</OfferPrice>
                              <OfferOldPrice>{formatMoney(offer.oldPrice)}</OfferOldPrice>
                            </OfferPriceRow>
                          </OfferContent>
                        </OfferCard>
                      ))
                    ) : (
                      <SectionEmptyState>
                        <SectionEmptyStateText>{emptyResultsMessage}</SectionEmptyStateText>
                      </SectionEmptyState>
                    )}
                  </OfferRail>
                </SectionPanel>
              </SectionInner>
            </Section>
          </HomeMainColumn>

          <HomeSidebar aria-label="Resumen del pedido">
            <SectionPanel>
              <SidebarSummaryRow>
                <SidebarTitle>Tu pedido</SidebarTitle>
                <SidebarBadge>3 items</SidebarBadge>
              </SidebarSummaryRow>

              <SidebarOrderList>
                {desktopSidebarOrderItems.map((item) => (
                  <SidebarOrderItem key={item.id}>
                    <SidebarOrderAvatar data-tone={item.tone}>{item.initials}</SidebarOrderAvatar>

                    <SidebarOrderText>
                      <SidebarOrderTitle>{item.product}</SidebarOrderTitle>
                      <SidebarOrderStore>{item.store}</SidebarOrderStore>
                      <SidebarOrderMeta>{item.quantity}</SidebarOrderMeta>
                    </SidebarOrderText>

                    <SidebarOrderPrice>{formatMoney(item.price)}</SidebarOrderPrice>
                  </SidebarOrderItem>
                ))}
              </SidebarOrderList>

              <SidebarTotals>
                <SidebarTotalRow>
                  <span>Subtotal</span>
                  <span>{formatMoney(15950)}</span>
                </SidebarTotalRow>
                <SidebarTotalRow>
                  <span>Costo de entrega</span>
                  <span>{formatMoney(350)}</span>
                </SidebarTotalRow>
                <SidebarTotalRow data-emphasis="true">
                  <strong>Total estimado</strong>
                  <strong>{formatMoney(16300)}</strong>
                </SidebarTotalRow>
              </SidebarTotals>

              <SidebarActions>
                <SidebarPrimaryButton to="/carrito">Ir al carrito</SidebarPrimaryButton>
                <SidebarSecondaryButton to="/comercios">Seguir comprando</SidebarSecondaryButton>
              </SidebarActions>
            </SectionPanel>

            <SectionPanel>
              <SidebarSummaryRow>
                <SidebarTitle>Entrega estimada</SidebarTitle>
              </SidebarSummaryRow>

              <SidebarDetailList>
                <SidebarDetailRow>
                  <SidebarDetailIcon aria-hidden="true">
                    <Clock3 size={14} aria-hidden="true" />
                  </SidebarDetailIcon>
                  <SidebarDetailText>
                    <SidebarDetailTitle>Tiempo</SidebarDetailTitle>
                    <SidebarDetailValue>15–25 min</SidebarDetailValue>
                  </SidebarDetailText>
                </SidebarDetailRow>

                <SidebarDetailRow>
                  <SidebarDetailIcon aria-hidden="true">
                    <MapPin size={14} aria-hidden="true" />
                  </SidebarDetailIcon>
                  <SidebarDetailText>
                    <SidebarDetailTitle>Dirección</SidebarDetailTitle>
                    <SidebarDetailValue>Barrio Norte, La Francia</SidebarDetailValue>
                  </SidebarDetailText>
                </SidebarDetailRow>

                <SidebarDetailRow>
                  <SidebarDetailIcon aria-hidden="true">
                    <Store size={14} aria-hidden="true" />
                  </SidebarDetailIcon>
                  <SidebarDetailText>
                    <SidebarDetailTitle>Horario</SidebarDetailTitle>
                    <SidebarDetailValue>Hoy 08:00 - 20:00</SidebarDetailValue>
                  </SidebarDetailText>
                </SidebarDetailRow>
              </SidebarDetailList>

              <SidebarNotice>
                <Truck size={15} aria-hidden="true" />
                <span>¡Envío gratis en compras superiores a $15.000!</span>
              </SidebarNotice>
            </SectionPanel>
          </HomeSidebar>
        </HomeLayout>
      </div>

      <div aria-hidden="true" style={{ display: 'none' }}>
      <BottomNav aria-label="Navegación móvil">
              <BottomNavList>
                {mobileNavItems.map((item) => {
                  const Icon = item.icon;
                  const isPrimary = item.id === 'orders';

            return (
              <li key={item.id}>
              <BottomNavLink to={item.href} data-primary={item.id === 'orders'}>
                  <BottomNavIcon>
                    <Icon size={isPrimary ? 32 : 18} aria-hidden="true" />
                  </BottomNavIcon>
                  <span>{item.label}</span>
                </BottomNavLink>
              </li>
            );
          })}
        </BottomNavList>
      </BottomNav>

      {menuDrawerMounted && (
        <ModalOverlay data-drawer="true" data-state={menuDrawerPhase} role="presentation" onClick={closeOverlays}>
          <ModalCard
            id="home-menu-drawer"
            data-drawer="true"
            data-state={menuDrawerPhase}
            data-size="sm"
            role="dialog"
            aria-modal="true"
            aria-label="Menú lateral"
            onClick={(event) => event.stopPropagation()}
          >
            <DrawerHeader>
              <DrawerBrand aria-label="LaFranciaGO">
                <BrandMark>
                  <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
                </BrandMark>
                <DrawerBrandText>
                  <BrandName aria-label="LaFranciaGO">
                    <span>LaFrancia</span>
                    <BrandNameAccent>GO</BrandNameAccent>
                  </BrandName>
                </DrawerBrandText>
              </DrawerBrand>
              <ModalCloseButton type="button" onClick={closeOverlays} aria-label="Cerrar menú">
                <X size={18} aria-hidden="true" />
              </ModalCloseButton>
            </DrawerHeader>

            <DrawerBody>
              <DrawerSection>
                <DrawerSectionLabel>Navegación</DrawerSectionLabel>
                <DrawerList aria-label="Navegación principal">
                  {drawerPrimaryItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <DrawerItem
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        onClick={(event) => handleDrawerItemClick(event, item.to)}
                      >
                        <DrawerItemIcon aria-hidden="true">
                          <Icon size={18} aria-hidden="true" />
                        </DrawerItemIcon>
                        <DrawerItemText>
                          <DrawerItemTitle>{item.title}</DrawerItemTitle>
                          <DrawerItemSubtitle>{item.subtitle}</DrawerItemSubtitle>
                        </DrawerItemText>
                        <DrawerItemArrow aria-hidden="true">
                          <ArrowRight size={16} aria-hidden="true" />
                        </DrawerItemArrow>
                      </DrawerItem>
                    );
                  })}
                </DrawerList>
              </DrawerSection>

              <DrawerSection>
                <DrawerSectionLabel>Acciones</DrawerSectionLabel>
                <DrawerList aria-label="Acciones rápidas">
                  {drawerActionItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <DrawerItem
                        key={item.to}
                        to={item.to}
                        onClick={(event) => handleDrawerItemClick(event, item.to)}
                      >
                        <DrawerItemIcon aria-hidden="true">
                          <Icon size={18} aria-hidden="true" />
                        </DrawerItemIcon>
                        <DrawerItemText>
                          <DrawerItemTitle>{item.title}</DrawerItemTitle>
                          <DrawerItemSubtitle>{item.subtitle}</DrawerItemSubtitle>
                        </DrawerItemText>
                        <DrawerItemArrow aria-hidden="true">
                          <ArrowRight size={16} aria-hidden="true" />
                        </DrawerItemArrow>
                      </DrawerItem>
                    );
                  })}
                </DrawerList>
              </DrawerSection>

              <DrawerThemeSection>
                <DrawerThemeRow type="button" onClick={toggleMode} role="switch" aria-checked={isDarkMode}>
                  <DrawerThemeIcon data-active="true" aria-hidden="true">
                    {isDarkMode ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
                  </DrawerThemeIcon>

                  <DrawerThemeText>
                    <DrawerThemeTitle>{isDarkMode ? 'Tema oscuro' : 'Tema claro'}</DrawerThemeTitle>
                    <DrawerThemeSubtitle>Ajustá el contraste de toda la app.</DrawerThemeSubtitle>
                  </DrawerThemeText>

                  <DrawerThemeTrack aria-hidden="true">
                    <DrawerThemeTrackIcon data-side="top" data-active={!isDarkMode}>
                      <Sun size={12} aria-hidden="true" />
                    </DrawerThemeTrackIcon>
                    <DrawerThemeThumb data-mode={isDarkMode ? 'dark' : 'light'} />
                    <DrawerThemeTrackIcon data-side="bottom" data-active={isDarkMode}>
                      <Moon size={12} aria-hidden="true" />
                    </DrawerThemeTrackIcon>
                  </DrawerThemeTrack>
                </DrawerThemeRow>
              </DrawerThemeSection>
            </DrawerBody>
          </ModalCard>
        </ModalOverlay>
      )}
      </div>

      {filtersOpen && (
        <ModalOverlay data-filters="true" role="presentation" onClick={() => setFiltersOpen(false)}>
          <ModalCard
            data-filters="true"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-filters-title"
            onClick={(event) => event.stopPropagation()}
          >
            <FilterSheetHeader>
              <FilterSheetTitleWrap>
                <FilterSheetTitle id="home-filters-title">Filtros</FilterSheetTitle>
                <FilterSheetMeta>
                  {activeFilterCount > 0
                    ? `${activeFilterCount} activos · resultados al instante`
                    : 'Sin filtros · resultados al instante'}
                </FilterSheetMeta>
              </FilterSheetTitleWrap>

              <ModalCloseButton type="button" onClick={() => setFiltersOpen(false)} aria-label="Cerrar filtros">
                <X size={18} aria-hidden="true" />
              </ModalCloseButton>
            </FilterSheetHeader>

            <FilterSheetBody>
              {filterGroups.map((group) => {
                const sectionHint =
                  group.id === 'sort'
                    ? 'Elegí una sola forma de ordenar.'
                    : group.id === 'service'
                      ? 'Podés combinar varios criterios.'
                      : 'Elegí un radio o cargá uno entero.';

                return (
                  <FilterSheetSection key={group.id}>
                    <FilterSectionHeader>
                      <div>
                        <FilterSectionTitle>{group.label}</FilterSectionTitle>
                        <FilterSectionText>{sectionHint}</FilterSectionText>
                      </div>
                      <FilterSectionMeta>{group.options.length} opciones</FilterSectionMeta>
                    </FilterSectionHeader>

                    <FilterChipRail>
                      {group.options.map((option) => {
                        const isActive =
                          group.id === 'sort'
                            ? sortMode === option.id
                            : group.id === 'distance'
                              ? distanceFilter === (option.id as DistanceFilterMode)
                              : serviceFilters[option.id as ServiceFilterKey];

                        if (group.id === 'distance' && option.id === 'custom') {
                          return (
                            <div key={option.id}>
                              <FilterDistanceCustomRow>
                                <FilterDistanceCustomButton
                                  type="button"
                                  data-active={distanceFilter === 'custom'}
                                  aria-pressed={distanceFilter === 'custom'}
                                  onClick={() => setDistanceFilter('custom')}
                                >
                                  Personalizado:
                                </FilterDistanceCustomButton>

                                <FilterDistanceCustomField
                                  data-error={customDistanceKmHasExceededMax}
                                  htmlFor="custom-distance-km"
                                >
                                  <FilterDistanceCustomInput
                                    id="custom-distance-km"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={customDistanceKm}
                                    disabled={distanceFilter !== 'custom'}
                                    aria-label="Distancia personalizada en kilómetros"
                                    onFocus={() => setDistanceFilter('custom')}
                                    onChange={(event) => {
                                      setDistanceFilter('custom');
                                      setCustomDistanceKm(sanitizeDistanceKm(event.target.value));
                                    }}
                                  />
                                  <FilterDistanceCustomUnit>km</FilterDistanceCustomUnit>
                                </FilterDistanceCustomField>
                              </FilterDistanceCustomRow>

                              {distanceFilter === 'custom' && customDistanceKmHasExceededMax && (
                                <FilterDistanceWarning>
                                  Intente cambiar la localidad para alcanzar otros negocios
                                </FilterDistanceWarning>
                              )}
                            </div>
                          );
                        }

                        return (
                          <FilterChipButton
                            key={option.id}
                            type="button"
                            data-active={isActive}
                            aria-pressed={isActive}
                            onClick={() => {
                              if (group.id === 'sort') {
                                setSortMode(option.id as SortMode);
                                return;
                              }

                              if (group.id === 'distance') {
                                setDistanceFilter(option.id as DistanceFilterMode);
                                return;
                              }

                              toggleServiceFilter(option.id as ServiceFilterKey);
                            }}
                          >
                            {option.label}
                          </FilterChipButton>
                        );
                      })}
                    </FilterChipRail>
                  </FilterSheetSection>
                );
              })}

              <FilterSheetSection>
                <FilterSectionHeader>
                  <div>
                    <FilterSectionTitle>Rubros</FilterSectionTitle>
                    <FilterSectionText>Elegí más de uno y mantené la grilla compacta.</FilterSectionText>
                  </div>
                  <FilterSectionMeta>
                    {selectedCategories.length > 0
                      ? `${selectedCategories.length} seleccionados`
                      : 'Sin selección'}
                  </FilterSectionMeta>
                </FilterSectionHeader>

                <FilterCategoryGrid>
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategories.includes(category.id);

                    return (
                      <FilterCategoryButton
                        key={category.id}
                        type="button"
                        data-active={isActive}
                        aria-pressed={isActive}
                        onClick={() => toggleCategory(category.id)}
                      >
                        <CategoryIcon>
                          <Icon size={18} aria-hidden="true" />
                        </CategoryIcon>
                        <CategoryLabel>{category.name}</CategoryLabel>
                      </FilterCategoryButton>
                    );
                  })}
                </FilterCategoryGrid>
              </FilterSheetSection>
            </FilterSheetBody>

            <FilterFooter>
              <FilterGhostButton type="button" onClick={resetFilters}>
                Limpiar todo
              </FilterGhostButton>
              <FilterPrimaryButton type="button" onClick={() => setFiltersOpen(false)}>
                Ver resultados
              </FilterPrimaryButton>
            </FilterFooter>
          </ModalCard>
        </ModalOverlay>
      )}

      {categoriesOpen && (
        <ModalOverlay role="presentation" onClick={() => setCategoriesOpen(false)}>
          <ModalCard
            data-size="lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-categories-title"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalHeader>
              <div>
                <ModalTitle id="home-categories-title">Todas las categorías</ModalTitle>
                <ModalText>
                  La app arranca con las visibles, pero el catálogo completo queda disponible desde acá.
                </ModalText>
              </div>

              <ModalCloseButton
                type="button"
                onClick={() => setCategoriesOpen(false)}
                aria-label="Cerrar categorías"
              >
                <X size={18} aria-hidden="true" />
              </ModalCloseButton>
            </ModalHeader>

            <ModalOptionGrid>
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategories.includes(category.id);

                return (
                  <ModalOption
                    key={category.id}
                    type="button"
                    data-active={isActive}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <ModalOptionTitle>
                      <Icon size={16} aria-hidden="true" /> {category.name}
                    </ModalOptionTitle>
                    <ModalOptionText>{category.description}</ModalOptionText>
                  </ModalOption>
                );
              })}
            </ModalOptionGrid>
          </ModalCard>
        </ModalOverlay>
      )}

      {locationOpen && (
        <ModalOverlay role="presentation" onClick={() => setLocationOpen(false)}>
          <ModalCard
            data-size="md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-location-title"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalHeader>
              <div>
                <ModalTitle id="home-location-title">Cambiar ubicación</ModalTitle>
                <ModalText>
                  Buscá una dirección, elegila y confirmá la actualización.
                </ModalText>
              </div>

              <ModalCloseButton
                type="button"
                onClick={() => setLocationOpen(false)}
                aria-label="Cerrar ubicación"
                >
                  <X size={18} aria-hidden="true" />
                </ModalCloseButton>
            </ModalHeader>

            <ModalGrid>
              <LocationCurrentCard>
                <LocationCurrentLabel>Dirección actual</LocationCurrentLabel>
                <LocationCurrentValue>{selectedLocation?.label ?? 'Sin dirección configurada'}</LocationCurrentValue>
                <LocationCurrentMeta>
                  {selectedLocation?.detail ?? 'Todavía no configuraste una dirección.'}
                </LocationCurrentMeta>
              </LocationCurrentCard>

              <SearchField htmlFor="location-search">
                <SearchInputShell>
                  <Search size={18} aria-hidden="true" />
                  <SearchInput
                    id="location-search"
                    type="search"
                    value={locationSearchQuery}
                    onChange={(event) => setLocationSearchQuery(event.target.value)}
                    placeholder="Buscar dirección en Google Maps"
                    aria-label="Buscar dirección en Google Maps"
                  />
                </SearchInputShell>
              </SearchField>

              <LocationResultsList aria-label="Resultados de búsqueda">
                {locationSearchResults.map((location) => {
                  const isActive = locationDraftLocationId === location.id;

                  return (
                    <LocationResultButton
                      key={location.id}
                      type="button"
                      data-active={isActive}
                      onClick={() => {
                        setLocationDraftLocationId(location.id);
                        setLocationDraftMapQuery(location.mapQuery);
                      }}
                    >
                      <LocationResultIcon aria-hidden="true">
                        <MapPin size={16} aria-hidden="true" />
                      </LocationResultIcon>
                      <LocationResultText>
                        <LocationResultTitle>{location.label}</LocationResultTitle>
                        <LocationResultSubtitle>{location.detail}</LocationResultSubtitle>
                      </LocationResultText>
                      <LocationResultChevron aria-hidden="true">
                        <ChevronRight size={16} aria-hidden="true" />
                      </LocationResultChevron>
                    </LocationResultButton>
                  );
                })}
              </LocationResultsList>

              <ModalMap
                title={`Mapa de ${locationDraftLocation?.label ?? selectedLocation?.label ?? 'La Francia'}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <FilterPrimaryButton
                type="button"
                onClick={() => {
                  setSelectedLocationId(locationDraftLocation?.id ?? selectedLocationId);
                  setLocationOpen(false);
                }}
                disabled={!locationHasChanges}
              >
                Actualizar dirección
              </FilterPrimaryButton>
            </ModalGrid>
          </ModalCard>
        </ModalOverlay>
      )}
    </MarketplaceFrame>
  );
}
