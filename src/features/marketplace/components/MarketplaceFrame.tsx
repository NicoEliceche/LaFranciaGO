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
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowRight,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
import { AddressSheet } from './AddressSheet';
import { CuentaSidebar } from './CuentaSidebar';
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

const drawerPrimaryItems: DrawerItemData[] = [
  { to: '/', title: 'Inicio', subtitle: 'Portada y promociones', icon: Home, end: true },
  { to: '/categorias', title: 'Categorías', subtitle: 'Navegá por rubros', icon: LayoutGrid },
  { to: '/pedidos', title: 'Mis pedidos', subtitle: 'Historial y seguimiento', icon: PackageSearch },
  { to: '/favoritos', title: 'Favoritos', subtitle: 'Guardados para después', icon: Heart },
  { to: '/mi-cuenta', title: 'Cuenta', subtitle: 'Perfil y seguridad', icon: UserRound },
];

const drawerActionItems: DrawerItemData[] = [
  { to: '/registro/comercio', title: 'Publicar comercio', subtitle: 'Sumá tu negocio', icon: Store },
  { to: '/trabaja-con-nosotros', title: 'Registrate como delivery', subtitle: 'Trabajá repartiendo pedidos', icon: MotoDeliveryIcon },
  { to: '/registro/fletero', title: 'Registrate como fletero', subtitle: 'Trabajá haciendo fletes', icon: Truck },
  { to: '/notificaciones', title: 'Notificaciones', subtitle: 'Alertas y seguimientos', icon: Bell },
];

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

const bottomLinks = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/categorias', label: 'Categorías', icon: LayoutGrid },
  { to: '/pedidos', label: 'Mis pedidos', icon: PackageSearch },
  { to: '/favoritos', label: 'Favoritos', icon: Heart },
  { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
] as const;

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
              <AddressButton
                type="button"
                aria-label={`Entregar en ${address.label}. Cambiar dirección`}
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
            <DrawerSectionLabel>ACCIONES</DrawerSectionLabel>
            <DrawerList aria-label="Acciones rápidas">
              {drawerActionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <DrawerItem key={item.to} to={item.to} onClick={(event) => handleDrawerItemClick(event, item.to)}>
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
          {bottomLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.to}>
                <BottomNavLink to={link.to} data-primary={link.to === '/pedidos'}>
                  <BottomNavIcon>
                    <Icon size={link.to === '/pedidos' ? 32 : 18} aria-hidden="true" />
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
