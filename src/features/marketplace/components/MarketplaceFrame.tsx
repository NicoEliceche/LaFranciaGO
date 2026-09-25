import {
  type ComponentType,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowRight,
  BarChart3,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  FileText,
  Heart,
  Home,
  LayoutGrid,
  MapPin,
  Menu,
  PackageSearch,
  ShoppingCart,
  Settings,
  Store,
  Truck,
  UserRound,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useThemeMode } from '@core/theme';
import { MotoDeliveryIcon } from '@shared/components/icons/MotoDeliveryIcon';

import { useProfilePhoto } from '../profileStore';
import { useSesion } from '../sessionStore';
import { AddressSheet } from './AddressSheet';
import { CuentaSidebar } from './CuentaSidebar';
import { MenuComercio } from './MenuComercio';
import { useNotificaciones } from '../useNotificaciones';
import { SearchBar } from './SearchBar';
import { GamerThemeToggle } from './GamerThemeToggle';

import {
  AddressButton,
  AddressButtonCopy,
  AddressButtonHint,
  AddressButtonLabel,
  BottomNav,
  BottomNavIcon,
  BottomNavLink,
  BottomNavList,
  BrandHeaderBar,
  BrandHeaderLeft,
  BrandHeaderRow,
  BrandIcon,
  BrandLogoMark,
  BrandMark,
  BrandName,
  BrandNameAccent,
  Header,
  HeaderActionsRow,
  HeaderBrandLockup,
  HeaderBrandName,
  HeaderBrandNameAccent,
  HeaderBrandTag,
  HeaderAvatarImage,
  HeaderCircleBadge,
  HeaderCircleButton,
  HeaderCircleLink,
  HeaderInner,
  HeaderMenuButton,
  HeaderSearchSlot,
  Main,
  Page,
} from '../ui';
import {
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
  DrawerThemeSection,
  ModalCard,
  ModalCloseButton,
  ModalOverlay,
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
  NotificationRow,
  NotificationRowContent,
  NotificationRowDate,
  NotificationRowIcon,
  NotificationRowSubtitle,
  NotificationRowTitle,
  NotificationRowTitleBar,
} from './MarketplaceFrameStyled';

type MarketplaceFrameProps = {
  children: ReactNode;
  query?: string;
  onQueryChange?: (value: string) => void;
  showSearch?: boolean;
};

type MenuDrawerPhase = 'opening' | 'open' | 'closing';
type NotificationPanelPhase = 'opening' | 'open' | 'closing';
type NotificationSectionId = 'ventas' | 'entregas' | 'cercania';

/** Acepta íconos de lucide y los propios del proyecto. */
type AppIcon = LucideIcon | ComponentType<{ size?: number }>;

type DrawerItemData = {
  to: string;
  title: string;
  subtitle: string;
  icon: AppIcon;
  end?: boolean;
};

type NotificationItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  date: string;
};

type NotificationSection = {
  id: NotificationSectionId;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: NotificationItem[];
};

const brandIconUrl = `${import.meta.env.BASE_URL}favicon.png`;
const deliveryAddress = 'Av. San Martín 123';

const MENU_DRAWER_TRANSITION_MS = 420;
const NOTIFICATIONS_TRANSITION_MS = 260;

/* ── El menú, que cambia según desde qué rol se esté mirando ── */

const ITEM_INICIO_CLIENTE: DrawerItemData = {
  to: '/',
  title: 'Inicio',
  subtitle: 'Portada y promociones',
  icon: Home,
  end: true,
};

/* Para quien reparte, "Inicio" es su tablero y no la portada del
   marketplace: abre la aplicación para ver qué hay para llevar, no para
   comprar. Es la misma pantalla para delivery y para flete, que ya distingue
   entre "Pedidos disponibles" y "Fletes disponibles"; el subtítulo la
   acompaña para que el menú no nombre las cosas de otra manera. */
const inicioDeReparto = (esFletero: boolean): DrawerItemData => ({
  to: '/panel/repartidor',
  title: 'Inicio',
  subtitle: esFletero ? 'Fletes disponibles y en curso' : 'Pedidos disponibles y en curso',
  icon: Home,
  end: true,
});

const ITEM_CUENTA: DrawerItemData = {
  to: '/mi-cuenta',
  title: 'Cuenta',
  subtitle: 'Perfil y seguridad',
  icon: UserRound,
};

const ITEMS_COMPRA: DrawerItemData[] = [
  { to: '/categorias', title: 'Categorías', subtitle: 'Navegá por rubros', icon: LayoutGrid },
  { to: '/pedidos', title: 'Mis pedidos', subtitle: 'Historial y seguimiento', icon: PackageSearch },
  { to: '/favoritos', title: 'Favoritos', subtitle: 'Guardados para después', icon: Heart },
];

/* Para el comercio, "Inicio" es su panel y no la portada del marketplace:
   abre la aplicación para atender, no para comprar. */
const ITEM_INICIO_COMERCIO: DrawerItemData = {
  to: '/panel/comercio',
  title: 'Inicio',
  subtitle: 'Ventas del día y pendientes',
  icon: Home,
  end: true,
};

const ITEMS_COMERCIO: DrawerItemData[] = [
  {
    to: '/panel/comercio?ver=negocio',
    title: 'Mi negocio',
    /* Se llama como la sección a la que lleva. Decírle "Mi comercio" cuando
       adentro dice "Mi negocio" hace dudar de si son la misma cosa. */
    subtitle: 'Ficha pública y horarios',
    icon: Store,
  },
  {
    to: '/panel/comercio?ver=productos',
    title: 'Productos',
    subtitle: 'Tu catálogo y los precios',
    icon: LayoutGrid,
  },
  {
    to: '/panel/comercio?ver=pedidos',
    title: 'Mis pedidos',
    subtitle: 'Lo que entra y hay que preparar',
    icon: PackageSearch,
  },
];

/* Para administración, "Inicio" es el tablero de la plataforma. */
const ITEM_INICIO_ADMIN: DrawerItemData = {
  to: '/panel/admin',
  title: 'Inicio',
  subtitle: 'Cómo viene la plataforma',
  icon: Home,
  end: true,
};

const ITEMS_ADMIN: DrawerItemData[] = [
  {
    to: '/panel/admin/postulaciones',
    title: 'Altas',
    subtitle: 'Comercios y repartidores por aprobar',
    icon: FileCheck2,
  },
  {
    to: '/panel/admin/registro',
    title: 'Registro',
    subtitle: 'Qué se rompió y por qué',
    icon: FileText,
  },
];

const ITEM_PUBLICAR: DrawerItemData = {
  to: '/registro/comercio',
  title: 'Publicar comercio',
  subtitle: 'Sumá tu negocio',
  icon: Store,
};

const ITEM_SER_DELIVERY: DrawerItemData = {
  to: '/trabaja-con-nosotros',
  title: 'Registrate como delivery',
  subtitle: 'Trabajá repartiendo pedidos',
  icon: MotoDeliveryIcon,
};

const ITEM_SER_FLETERO: DrawerItemData = {
  to: '/registro/fletero',
  title: 'Registrate como fletero',
  subtitle: 'Trabajá haciendo fletes',
  icon: Truck,
};

const ITEM_NOTIFICACIONES: DrawerItemData = {
  to: '/notificaciones',
  title: 'Notificaciones',
  subtitle: 'Alertas y seguimientos',
  icon: Bell,
};

/**
 * Qué se ve en el menú desde cada rol.
 *
 * Quien reparte no compra desde la misma sesión: no le aparecen las
 * categorías, sus pedidos ni sus favoritos, porque llenan el menú de cosas
 * que no va a tocar mientras trabaja. Si quiere comprar, cambia de cuenta al
 * pie del menú, que es la misma sesión mirando desde otro lado.
 *
 * Y el ofrecimiento va cruzado: al delivery se le ofrece el flete y al
 * fletero el delivery. Ofrecerle a alguien que se registre en lo que ya hace
 * es ruido, y lo que sí puede sumarle es el otro.
 *
 * El comercio tiene su propia lista: lo de comprar no le sirve, y lo que abre
 * todos los días es su ficha y los pedidos que le entran.
 */
function menuDe(rol: string | undefined, roles: string[] = []) {
  const esDelivery = rol === 'delivery';
  const esFletero = rol === 'fletero';

  /* No se ofrece registrarse en lo que ya se tiene. Se miran todos los roles
     y no sólo el activo: quien ya tiene comercio no necesita que se lo
     ofrezcan mientras mira como cliente. */
  const ofrecimientos = [
    roles.includes('comercio') ? null : ITEM_PUBLICAR,
    roles.includes('delivery') ? null : ITEM_SER_DELIVERY,
    roles.includes('fletero') ? null : ITEM_SER_FLETERO,
  ].filter((item): item is DrawerItemData => item !== null);

  if (esDelivery || esFletero) {
    return {
      navegacion: [inicioDeReparto(esFletero), ITEM_CUENTA],
      acciones: [...ofrecimientos, ITEM_NOTIFICACIONES],
    };
  }

  /* El comercio no compra desde acá: "Categorías" y "Favoritos" son del
     cliente que busca dónde comprar. Sus propias categorías las ordena en el
     panel, que es otra cosa aunque se llame igual.

     En su lugar van las dos pantallas que abre todos los días: su ficha y los
     pedidos que tiene que preparar. */
  if (rol === 'comercio') {
    return {
      navegacion: [ITEM_INICIO_COMERCIO, ...ITEMS_COMERCIO, ITEM_CUENTA],
      acciones: [...ofrecimientos, ITEM_NOTIFICACIONES],
    };
  }

  /* Administración tampoco compra desde acá: veía "Categorías" y "Favoritos"
     por caer en la lista del cliente. Lo que mira es qué hay que aprobar y
     qué se rompió, que es lo mismo que ya tenía abajo en el teléfono.

     Tampoco se le ofrece publicar comercio ni anotarse de repartidor: no es
     un vecino usando la aplicación, es quien la administra. */
  if (rol === 'admin') {
    return {
      navegacion: [ITEM_INICIO_ADMIN, ...ITEMS_ADMIN, ITEM_CUENTA],
      acciones: [ITEM_NOTIFICACIONES],
    };
  }

  return {
    navegacion: [ITEM_INICIO_CLIENTE, ...ITEMS_COMPRA, ITEM_CUENTA],
    acciones: [...ofrecimientos, ITEM_NOTIFICACIONES],
  };
}

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

const notificationSections: NotificationSection[] = [
  {
    id: 'ventas',
    title: 'Ventas y gestión',
    subtitle: 'Actualizaciones de tus ventas.',
    icon: Store,
    items: [
      {
        icon: Bell,
        title: 'Nueva venta registrada',
        subtitle: 'Cobro acreditado y listo para revisar.',
        date: 'Hoy',
      },
      {
        icon: PackageSearch,
        title: 'Saldo disponible',
        subtitle: 'Ya podés revisar el resumen del día.',
        date: 'Ayer',
      },
    ],
  },
  {
    id: 'entregas',
    title: 'Pedidos y entregas',
    subtitle: 'Seguimiento de pedidos activos.',
    icon: PackageSearch,
    items: [
      {
        icon: MapPin,
        title: 'Pedido en camino',
        subtitle: 'El repartidor ya salió hacia la dirección.',
        date: '11/08',
      },
      {
        icon: Store,
        title: 'Pedido listo para retiro',
        subtitle: 'Podés despacharlo ahora mismo.',
        date: '12/08',
      },
    ],
  },
  {
    id: 'cercania',
    title: 'Cercanía y ofertas',
    subtitle: 'Alertas cerca de tu ubicación.',
    icon: MapPin,
    items: [
      {
        icon: Heart,
        title: 'Nuevo comercio cerca',
        subtitle: 'Se activó un seguimiento a 2 km.',
        date: 'Hoy',
      },
      {
        icon: Bell,
        title: 'Oferta destacada',
        subtitle: 'Descuento activo en productos frecuentes.',
        date: '14/08/25',
      },
    ],
  },
];

const topLinks = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/categorias', label: 'Categorías', icon: LayoutGrid },
  { to: '/pedidos', label: 'Pedidos', icon: PackageSearch },
  { to: '/notificaciones', label: 'Notificaciones', icon: Bell },
  { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
] as const;

type EnlaceInferior = { to: string; label: string; icon: AppIcon; end?: boolean };

/**
 * Si un enlace del menú apunta a lo que se está viendo.
 *
 * Hace falta porque los paneles no son pantallas distintas: el repartidor y
 * el comercio cambian de sección con ?ver=, y para el router todas esas
 * direcciones son la misma ruta. Con la comparación que trae de fábrica se
 * pintaban las cuatro a la vez, como si se estuviera en todas.
 *
 * Por eso se mira también el ?ver=: es lo único que las diferencia. El resto
 * de los parámetros no cuenta —un ?pedido= no cambia en qué sección se
 * está— y el enlace sin ?ver= es el de la sección de entrada, así que
 * coincide cuando tampoco lo trae la dirección actual.
 */
function enlaceActivo(destino: string, rutaActual: string, busquedaActual: string) {
  const [ruta, consulta] = destino.split('?');

  if (ruta !== rutaActual) {
    return false;
  }

  const verDelEnlace = new URLSearchParams(consulta ?? '').get('ver');
  const verActual = new URLSearchParams(busquedaActual).get('ver');

  return verDelEnlace === verActual;
}

/**
 * Lo que hay que pasarle a un enlace del menú para que se pinte bien.
 *
 * No alcanza con agregarle una clase: NavLink calcula la suya y además pone
 * `aria-current`, que el estilo también mira, así que el enlace se pintaba
 * igual por más que dijéramos lo contrario. Hay que reemplazar las dos
 * cosas, y como son cinco los lugares donde se dibujan enlaces, salen de una
 * sola función para que no se desincronicen.
 */
function propsDeEnlace(destino: string, rutaActual: string, busquedaActual: string) {
  const activo = enlaceActivo(destino, rutaActual, busquedaActual);

  return {
    /* Va como atributo y no como clase: NavLink calcula su propia `active`
       comparando sólo la ruta, y como estas secciones se distinguen por el
       ?ver=, para él todas son la misma y las pintaba juntas. Pisarle la
       clase no se puede —styled-components resuelve la suya antes— así que
       el estilo mira este atributo, que nadie más toca. */
    'data-activo': activo ? 'true' : undefined,
    /* Lo mismo con esto, que NavLink pone por su cuenta: sin apagarlo, el
       lector de pantalla anuncia cuatro secciones actuales a la vez. */
    'aria-current': activo ? ('page' as const) : undefined,
  };
}

/**
 * La barra de abajo, siempre con cinco botones.
 *
 * Cinco y no los que sobren: el del medio es más grande y sobresale, así que
 * con cuatro o con tres queda corrido y se ve como un error. Es la barra que
 * más se usa en el teléfono, y una barra torcida ensucia toda la pantalla.
 *
 * El primero es siempre Inicio y el último siempre Cuenta, que son los dos
 * que no cambian de lugar entre roles. El tercero —el destacado— es lo que
 * cada uno abre todo el día: sus pedidos, sus envíos, sus fletes.
 */
const ENLACES_INFERIORES: Record<string, EnlaceInferior[]> = {
  cliente: [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/categorias', label: 'Categorías', icon: LayoutGrid },
    { to: '/pedidos', label: 'Mis pedidos', icon: PackageSearch },
    { to: '/favoritos', label: 'Favoritos', icon: Heart },
    { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
  ],

  /* Quien reparte no compra desde acá, así que en lugar de categorías y
     favoritos van las dos pantallas de su trabajo: lo que hay para tomar y
     lo que ya ganó. */
  delivery: [
    { to: '/panel/repartidor', label: 'Inicio', icon: Home, end: true },
    { to: '/panel/repartidor?ver=disponibles', label: 'Disponibles', icon: PackageSearch },
    { to: '/panel/repartidor?ver=mios', label: 'Mis envíos', icon: MotoDeliveryIcon },
    { to: '/panel/repartidor?ver=ganancias', label: 'Ganancias', icon: BarChart3 },
    { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
  ],

  fletero: [
    { to: '/panel/repartidor', label: 'Inicio', icon: Home, end: true },
    { to: '/panel/repartidor?ver=disponibles', label: 'Disponibles', icon: PackageSearch },
    { to: '/panel/repartidor?ver=mios', label: 'Mis fletes', icon: Truck },
    { to: '/panel/repartidor?ver=ganancias', label: 'Ganancias', icon: BarChart3 },
    { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
  ],

  /* El comercio mira los pedidos que le entran, que es lo que tiene que
     atender en el momento. */
  /* Los avisos salieron del pie: el comercio los tiene en el menú lateral, y
     en el teléfono le sirve más tener a mano su ficha pública —horarios,
     descripción, si está abierto— que una pantalla de alertas. */
  comercio: [
    { to: '/panel/comercio', label: 'Inicio', icon: Home, end: true },
    { to: '/panel/comercio?ver=productos', label: 'Productos', icon: LayoutGrid },
    { to: '/panel/comercio?ver=pedidos', label: 'Mis pedidos', icon: PackageSearch },
    { to: '/panel/comercio?ver=negocio', label: 'Mi negocio', icon: Store },
    { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
  ],

  /* Administración: lo que se mira es el estado de la plataforma y qué se
     rompió. */
  admin: [
    { to: '/panel/admin', label: 'Inicio', icon: Home, end: true },
    { to: '/panel/admin/postulaciones', label: 'Altas', icon: FileCheck2 },
    { to: '/panel/admin/registro', label: 'Registro', icon: FileText },
    { to: '/notificaciones', label: 'Avisos', icon: Bell },
    { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
  ],
};

function enlacesInferioresDe(rol: string | undefined) {
  return ENLACES_INFERIORES[rol ?? 'cliente'] ?? ENLACES_INFERIORES.cliente;
}

export function MarketplaceFrame({
  children,
  query,
  onQueryChange,
  showSearch = true,
}: MarketplaceFrameProps) {
  /* Cuántos avisos sin leer tiene. Antes era un 3 fijo: mostraba novedades
     a quien no tenía ninguna, y no se movía cuando llegaba una de verdad. */
  const { sinLeer: notificationsCount } = useNotificaciones();

  const { isDarkMode, toggleMode } = useThemeMode();
  /* Para saber qué enlace pintar: los paneles cambian de sección con ?ver=,
     que el router no mira por su cuenta. */
  const { pathname, search } = useLocation();
  const { usuario } = useSesion();

  /* El menu cambia segun el rol activo: quien reparte no ve lo de comprar. */
  const menu = useMemo(
    () => menuDe(usuario?.rol, usuario?.roles),
    [usuario?.rol, usuario?.roles],
  );
  const enlacesInferiores = useMemo(() => enlacesInferioresDe(usuario?.rol), [usuario?.rol]);

  /* El botón grande va siempre en el medio, que es el tercero de cinco. Se
     toma por posición y no por dirección: atarlo a una ruta obligaba a
     actualizarlo cada vez que cambia la barra, y si no coincidía con ninguna
     quedaban los cinco iguales y la barra sin centro. */
  const destacadoAbajo = enlacesInferiores[2]?.to;
  const { photo: profilePhoto } = useProfilePhoto();
  const navigate = useNavigate();
  const hasSearch = typeof query === 'string' && typeof onQueryChange === 'function';

  const headerRef = useRef<HTMLElement | null>(null);
  const menuFrameRef = useRef<number | null>(null);
  const menuTimeoutRef = useRef<number | null>(null);
  const notificationsFrameRef = useRef<number | null>(null);
  const notificationsTimeoutRef = useRef<number | null>(null);
  const [addressOpen, setAddressOpen] = useState(false);
  const [address, setAddress] = useState({ id: 'home', label: deliveryAddress });

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuPhase, setMenuPhase] = useState<MenuDrawerPhase>('opening');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsMounted, setNotificationsMounted] = useState(false);
  const [notificationsPhase, setNotificationsPhase] = useState<NotificationPanelPhase>('opening');
  const [selectedNotificationSectionId, setSelectedNotificationSectionId] = useState<NotificationSectionId | null>(null);


  const closeOverlays = useCallback(() => {
    setMenuOpen(false);
    setNotificationsOpen(false);
    setSelectedNotificationSectionId(null);
  }, []);

  const openMenu = useCallback(() => {
    closeOverlays();
    setMenuOpen(true);
  }, [closeOverlays]);

  const toggleMenu = useCallback(() => {
    if (menuOpen || menuMounted) {
      closeOverlays();
      return;
    }

    openMenu();
  }, [closeOverlays, menuMounted, menuOpen, openMenu]);

  const openNotifications = useCallback(() => {
    closeOverlays();
    setNotificationsOpen(true);
  }, [closeOverlays]);

  const toggleNotifications = useCallback(() => {
    if (notificationsOpen || notificationsMounted) {
      closeOverlays();
      return;
    }

    openNotifications();
  }, [closeOverlays, notificationsMounted, notificationsOpen, openNotifications]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const isLocked = menuOpen || menuMounted || notificationsOpen || notificationsMounted;

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuMounted, menuOpen, notificationsMounted, notificationsOpen]);

  useLayoutEffect(() => {
    const element = headerRef.current;

    if (!element) {
      return undefined;
    }

    const updateTopBarHeight = () => {
      document.documentElement.style.setProperty('--marketplace-topbar-height', `${element.offsetHeight}px`);
    };

    updateTopBarHeight();

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateTopBarHeight) : null;
    observer?.observe(element);
    window.addEventListener('resize', updateTopBarHeight);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateTopBarHeight);
      document.documentElement.style.removeProperty('--marketplace-topbar-height');
    };
  }, []);

  useEffect(() => {
    if (menuFrameRef.current !== null) {
      window.cancelAnimationFrame(menuFrameRef.current);
      menuFrameRef.current = null;
    }

    if (menuTimeoutRef.current !== null) {
      window.clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (menuOpen) {
      setMenuMounted(true);

      if (prefersReducedMotion) {
        setMenuPhase('open');
        return;
      }

      setMenuPhase('opening');
      menuFrameRef.current = window.requestAnimationFrame(() => {
        setMenuPhase('open');
        menuFrameRef.current = null;
      });
      return;
    }

    if (!menuMounted) {
      return;
    }

    if (prefersReducedMotion) {
      setMenuMounted(false);
      setMenuPhase('opening');
      return;
    }

    setMenuPhase('closing');
    menuTimeoutRef.current = window.setTimeout(() => {
      setMenuMounted(false);
      setMenuPhase('opening');
      menuTimeoutRef.current = null;
    }, MENU_DRAWER_TRANSITION_MS);
  }, [menuMounted, menuOpen]);

  useEffect(
    () => () => {
      if (menuFrameRef.current !== null) {
        window.cancelAnimationFrame(menuFrameRef.current);
      }

      if (menuTimeoutRef.current !== null) {
        window.clearTimeout(menuTimeoutRef.current);
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
    }, NOTIFICATIONS_TRANSITION_MS);
  }, [notificationsMounted, notificationsOpen]);

  const handleDrawerItemClick = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>, to: string) => {
      event.preventDefault();
      closeOverlays();

      window.setTimeout(() => {
        navigate(to);
      }, MENU_DRAWER_TRANSITION_MS);
    },
    [closeOverlays, navigate],
  );

  const selectedNotificationSection = useMemo(
    () =>
      notificationSections.find((section) => section.id === selectedNotificationSectionId) ?? null,
    [selectedNotificationSectionId],
  );

  return (
    <Page>
      <Header ref={headerRef}>
        <BrandHeaderBar>
          <HeaderInner>
            <BrandHeaderRow>
              <BrandHeaderLeft>
                <HeaderMenuButton
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Abrir menú"
                  aria-haspopup="dialog"
                  aria-controls="marketplace-menu-drawer"
                  aria-expanded={menuOpen || menuMounted}
                >
                  <Menu size={20} aria-hidden="true" />
                </HeaderMenuButton>

                <HeaderBrandLockup role="img" aria-label="LaFranciaGO">
                  <BrandLogoMark>
                    <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
                  </BrandLogoMark>
                  <HeaderBrandName>
                    LaFrancia
                    <HeaderBrandNameAccent>GO</HeaderBrandNameAccent>
                  </HeaderBrandName>
                </HeaderBrandLockup>
              </BrandHeaderLeft>

              {hasSearch ? (
                <HeaderSearchSlot>
                  <SearchBar value={query} onChange={onQueryChange} />
                </HeaderSearchSlot>
              ) : null}

              <HeaderActionsRow aria-label="Acciones rápidas">
              {/* La etiqueta arranca con el texto que se ve y sigue con lo que
                  hace el botón, separado por coma y no por punto: quien navega
                  por voz dice "entregar en" y tiene que activarse el mismo
                  botón que ve alguien mirando. */}
              <AddressButton
                type="button"
                aria-label={`Entregar en ${address.label}, cambiar dirección`}
                aria-haspopup="dialog"
                aria-expanded={addressOpen}
                onClick={() => setAddressOpen(true)}
              >
                <AddressButtonCopy>
                  <AddressButtonHint>Entregar en</AddressButtonHint>
                  <AddressButtonLabel>{address.label}</AddressButtonLabel>
                </AddressButtonCopy>
                <ChevronDown size={15} aria-hidden="true" />
              </AddressButton>

                <HeaderCircleButton
                  type="button"
                  onClick={toggleNotifications}
                  aria-label={`Abrir notificaciones, ${notificationsCount} sin leer`}
                  aria-haspopup="dialog"
                  aria-controls="marketplace-notifications-popover"
                  aria-expanded={notificationsOpen || notificationsMounted}
                >
                  <Bell size={18} aria-hidden="true" />
                  {notificationsCount > 0 ? (
                    <HeaderCircleBadge>{notificationsCount}</HeaderCircleBadge>
                  ) : null}
                </HeaderCircleButton>

                <HeaderCircleLink to="/carrito" aria-label="Abrir carrito">
                  <ShoppingCart size={18} aria-hidden="true" />
                </HeaderCircleLink>

                <HeaderCircleLink to="/mi-cuenta" aria-label="Abrir mi cuenta">
                  {profilePhoto ? (
                    <HeaderAvatarImage src={profilePhoto} alt="" />
                  ) : (
                    <UserRound size={18} aria-hidden="true" />
                  )}
                </HeaderCircleLink>
              </HeaderActionsRow>
            </BrandHeaderRow>

          </HeaderInner>
        </BrandHeaderBar>
      </Header>

      <DesktopSidebar aria-label="Navegación principal">
        <DesktopSidebarBody>
          <DrawerBrand role="img" aria-label="LaFranciaGO">
            <BrandMark>
              <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
            </BrandMark>
            <DrawerBrandText>
              <BrandName>
                <span>LaFrancia</span>
                <BrandNameAccent>GO</BrandNameAccent>
              </BrandName>
              <HeaderBrandTag>{'Todo lo de tu pueblo,\nen un solo lugar.'}</HeaderBrandTag>
            </DrawerBrandText>
          </DrawerBrand>

          <DrawerSection>
            <DrawerSectionLabel>NAVEGACIÓN</DrawerSectionLabel>
            <DrawerList aria-label="Navegación principal">
              {menu.navegacion.map((item) => {
                const Icon = item.icon;

                return (
                  <DrawerItem
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    {...propsDeEnlace(item.to, pathname, search)}
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
            <DrawerSectionLabel>ACCIONES</DrawerSectionLabel>
            <DrawerList aria-label="Acciones rápidas">
              {menu.acciones.map((item) => {
                const Icon = item.icon;

                return (
                  <DrawerItem
                    key={item.to}
                    to={item.to}
                    {...propsDeEnlace(item.to, pathname, search)}
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

          <div style={{ flex: 1 }} aria-hidden="true" />

          <MenuComercio />

          <CuentaSidebar />

          <DrawerThemeSection>
            <GamerThemeToggle isDarkMode={isDarkMode} onToggle={toggleMode} />
          </DrawerThemeSection>
        </DesktopSidebarBody>
      </DesktopSidebar>

      <Main>
        {children}
      </Main>

      <BottomNav aria-label="Navegación móvil">
        <BottomNavList>
          {enlacesInferiores.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.to}>
                <BottomNavLink
                  to={link.to}
                  data-primary={link.to === destacadoAbajo}
                  {...propsDeEnlace(link.to, pathname, search)}
                >
                  <BottomNavIcon>
                    <Icon size={link.to === destacadoAbajo ? 32 : 18} aria-hidden="true" />
                  </BottomNavIcon>
                  <span>{link.label}</span>
                </BottomNavLink>
              </li>
            );
          })}
        </BottomNavList>
      </BottomNav>

      {menuMounted && (
        <ModalOverlay data-drawer="true" data-state={menuPhase} role="presentation" onClick={closeOverlays}>
          <ModalCard
            id="marketplace-menu-drawer"
            data-drawer="true"
            data-state={menuPhase}
            data-size="sm"
            role="dialog"
            aria-modal="true"
            aria-label="Menú lateral"
            onClick={(event) => event.stopPropagation()}
          >
            <DrawerHeader>
              <DrawerBrand role="img" aria-label="LaFranciaGO">
                <BrandMark>
                  <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
                </BrandMark>
                <DrawerBrandText>
                  <BrandName>
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
                  {menu.navegacion.map((item) => {
                    const Icon = item.icon;

                    return (
                      <DrawerItem
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        {...propsDeEnlace(item.to, pathname, search)}
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
                  {menu.acciones.map((item) => {
                    const Icon = item.icon;

                    return (
                      <DrawerItem
                        key={item.to}
                        to={item.to}
                        {...propsDeEnlace(item.to, pathname, search)}
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

              <MenuComercio onNavegar={closeOverlays} />

              <CuentaSidebar onNavegar={closeOverlays} />

              <DrawerThemeSection>
                <GamerThemeToggle isDarkMode={isDarkMode} onToggle={toggleMode} />
              </DrawerThemeSection>
            </DrawerBody>
          </ModalCard>
        </ModalOverlay>
      )}

      {notificationsMounted && (
        <ModalOverlay
          data-notifications="true"
          data-state={notificationsPhase}
          role="presentation"
          onClick={closeOverlays}
        >
          <ModalCard
            id="marketplace-notifications-popover"
            data-notifications="true"
            data-state={notificationsPhase}
            role="dialog"
            aria-modal="true"
            aria-labelledby="marketplace-notifications-title"
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
                <NotificationsPanelHeaderTitle id="marketplace-notifications-title">
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
                            <NotificationRowDate>{item.date}</NotificationRowDate>
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
                          <Icon size={14} aria-hidden="true" />
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

      <AddressSheet
        open={addressOpen}
        currentId={address.id}
        onClose={() => setAddressOpen(false)}
        onSelect={(id, value) => setAddress({ id, label: value })}
      />
    </Page>
  );
}
