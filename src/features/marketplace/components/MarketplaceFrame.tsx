import {
  type FormEvent,
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
  ChevronLeft,
  ChevronRight,
  Heart,
  Home,
  LayoutGrid,
  MapPin,
  Menu,
  Moon,
  PackageSearch,
  ShoppingCart,
  Search,
  Settings,
  Store,
  Sun,
  Truck,
  UserRound,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useThemeMode } from '@core/theme';

import { quickFilters } from '../marketplaceContent';
import {
  BottomNav,
  BottomNavIcon,
  BottomNavLink,
  BottomNavList,
  BrandIcon,
  BrandLink,
  BrandMark,
  BrandName,
  BrandNameAccent,
  BrandTag,
  HeaderBrandCopy,
  HeaderBrandTag,
  HeaderMenuButton,
  HeaderMobileActions,
  HeaderMobileLogoLink,
  FilterChip,
  FilterRail,
  Header,
  HeaderInner,
  HeaderTop,
  HeaderTopLeft,
  LocationPill,
  Main,
  Page,
  SearchButton,
  SearchField,
  SearchInput,
  SearchLabel,
  SearchRow,
  SearchShell,
  TopActions,
  TopAction,
  TopNavLink,
  TopNavLinks,
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
  DrawerThemeIcon,
  DrawerThemeRow,
  DrawerThemeSection,
  DrawerThemeSubtitle,
  DrawerThemeText,
  DrawerThemeThumb,
  DrawerThemeTitle,
  DrawerThemeTrack,
  DrawerThemeTrackIcon,
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
} from '../../home/screens/HomeScreenStyled';
import { TopBarCartLink, TopBarNotificationButton, TopBarProfileButton } from '../../home/screens/HomeScreenStyled';

type MarketplaceFrameProps = {
  children: ReactNode;
  query?: string;
  onQueryChange?: (value: string) => void;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
  showSearch?: boolean;
  footerText?: string;
};

type MenuDrawerPhase = 'opening' | 'open' | 'closing';
type NotificationPanelPhase = 'opening' | 'open' | 'closing';
type NotificationSectionId = 'ventas' | 'entregas' | 'cercania';

type DrawerItemData = {
  to: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
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
const MENU_DRAWER_TRANSITION_MS = 420;
const NOTIFICATIONS_TRANSITION_MS = 260;

const drawerPrimaryItems: DrawerItemData[] = [
  { to: '/', title: 'Inicio', subtitle: 'Portada y promociones', icon: Home, end: true },
  { to: '/comercios', title: 'Categorías', subtitle: 'Navegá por rubros', icon: LayoutGrid },
  { to: '/pedidos', title: 'Pedidos', subtitle: 'Seguimiento y entregas', icon: PackageSearch },
  { to: '/favoritos', title: 'Favoritos', subtitle: 'Guardados para después', icon: Heart },
  { to: '/mi-cuenta', title: 'Cuenta', subtitle: 'Perfil y seguridad', icon: UserRound },
];

const drawerActionItems: DrawerItemData[] = [
  { to: '/registro/comercio', title: 'Publicar comercio', subtitle: 'Sumá tu negocio', icon: Store },
  { to: '/trabaja-con-nosotros', title: 'Trabaja con nosotros', subtitle: 'Registrate como delivery', icon: Truck },
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
  { to: '/comercios', label: 'Comercios', icon: Store },
  { to: '/pedidos', label: 'Pedidos', icon: PackageSearch },
  { to: '/notificaciones', label: 'Notificaciones', icon: Bell },
  { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
] as const;

const bottomLinks = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/comercios', label: 'Categorías', icon: LayoutGrid },
  { to: '/pedidos', label: 'Pedidos', icon: PackageSearch },
  { to: '/favoritos', label: 'Favoritos', icon: Heart },
  { to: '/mi-cuenta', label: 'Cuenta', icon: UserRound },
] as const;

export function MarketplaceFrame({
  children,
  query,
  onQueryChange,
  activeFilter,
  onFilterChange,
  showSearch = true,
  footerText: _footerText = 'Navegación principal y accesos por rol.',
}: MarketplaceFrameProps) {
  const { isDarkMode, toggleMode } = useThemeMode();
  const navigate = useNavigate();
  const hasSearch = typeof query === 'string' && typeof onQueryChange === 'function';
  const hasFilters = typeof onFilterChange === 'function';
  const headerRef = useRef<HTMLElement | null>(null);
  const menuFrameRef = useRef<number | null>(null);
  const menuTimeoutRef = useRef<number | null>(null);
  const notificationsFrameRef = useRef<number | null>(null);
  const notificationsTimeoutRef = useRef<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuPhase, setMenuPhase] = useState<MenuDrawerPhase>('opening');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsMounted, setNotificationsMounted] = useState(false);
  const [notificationsPhase, setNotificationsPhase] = useState<NotificationPanelPhase>('opening');
  const [selectedNotificationSectionId, setSelectedNotificationSectionId] = useState<NotificationSectionId | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
        <HeaderInner>
          <HeaderTop>
            <HeaderTopLeft>
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

              <HeaderMobileLogoLink aria-label="LaFranciaGO">
                <BrandMark>
                  <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
                </BrandMark>
              </HeaderMobileLogoLink>
            </HeaderTopLeft>

            <BrandLink aria-label="LaFranciaGO">
              <BrandMark>
                <BrandIcon src={brandIconUrl} alt="" aria-hidden="true" />
              </BrandMark>
              <BrandName>
                LaFrancia
                <BrandNameAccent>GO</BrandNameAccent>
              </BrandName>
              <BrandTag>Todo lo de tu pueblo, en un solo lugar.</BrandTag>
            </BrandLink>

            <HeaderBrandCopy aria-label="LaFranciaGO">
              <BrandName>
                LaFrancia
                <BrandNameAccent>GO</BrandNameAccent>
              </BrandName>
              <HeaderBrandTag>{'Todo lo de tu pueblo,\nen un solo lugar.'}</HeaderBrandTag>
            </HeaderBrandCopy>

            <HeaderMobileActions aria-label="Acciones rápidas">
              <TopBarCartLink to="/carrito" aria-label="Abrir carrito">
                <ShoppingCart size={18} aria-hidden="true" />
              </TopBarCartLink>
              <TopBarNotificationButton
                type="button"
                onClick={toggleNotifications}
                aria-label="Abrir notificaciones"
                aria-haspopup="dialog"
                aria-controls="marketplace-notifications-popover"
                aria-expanded={notificationsOpen || notificationsMounted}
              >
                <Bell size={18} aria-hidden="true" />
              </TopBarNotificationButton>
              <TopBarProfileButton to="/mi-cuenta" aria-label="Abrir mi cuenta">
                <UserRound size={18} aria-hidden="true" />
              </TopBarProfileButton>
            </HeaderMobileActions>

            <LocationPill>
              <MapPin size={16} aria-hidden="true" />
              La Francia centro · entrega hoy
            </LocationPill>

            <TopActions>
              <TopBarCartLink to="/carrito" aria-label="Abrir carrito">
                <ShoppingCart size={18} aria-hidden="true" />
              </TopBarCartLink>
              <TopBarNotificationButton
                type="button"
                onClick={toggleNotifications}
                aria-label="Abrir notificaciones"
                aria-haspopup="dialog"
                aria-controls="marketplace-notifications-popover"
                aria-expanded={notificationsOpen || notificationsMounted}
              >
                <Bell size={18} aria-hidden="true" />
              </TopBarNotificationButton>
              <TopBarProfileButton to="/mi-cuenta" aria-label="Abrir mi cuenta">
                <UserRound size={18} aria-hidden="true" />
              </TopBarProfileButton>
              <TopAction to="/registro/comercio">Publicar comercio</TopAction>
              <TopAction to="/trabaja-con-nosotros">Trabaja con nosotros</TopAction>
              <TopAction to="/mi-cuenta">Mi cuenta</TopAction>
            </TopActions>
          </HeaderTop>

          <TopNavLinks aria-label="Navegación principal">
            {topLinks.map((link) => {
              const Icon = link.icon;

              return (
                <TopNavLink key={link.to} to={link.to}>
                  <Icon size={16} aria-hidden="true" />
                  {link.label}
                </TopNavLink>
              );
            })}
          </TopNavLinks>

          {showSearch && hasSearch && (
            <SearchRow onSubmit={handleSubmit}>
              <SearchShell htmlFor="marketplace-search">
                <SearchLabel>Buscá productos, comercios o categorías</SearchLabel>
                <SearchField>
                  <Search size={18} aria-hidden="true" />
                  <SearchInput
                    id="marketplace-search"
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                    placeholder="Coca Cola 3L, pan, farmacia, delivery..."
                  />
                </SearchField>
              </SearchShell>

              <SearchButton type="submit">Buscar</SearchButton>
            </SearchRow>
          )}

          {showSearch && hasFilters && (
            <FilterRail aria-label="Filtros rápidos">
              {quickFilters.map((filter) => (
                <FilterChip
                  key={filter.id}
                  type="button"
                  onClick={() => onFilterChange(filter.id)}
                  data-active={activeFilter === filter.id}
                >
                  {filter.label}
                </FilterChip>
              ))}
            </FilterRail>
          )}
        </HeaderInner>
      </Header>

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

      <Main>{children}</Main>

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

    </Page>
  );
}
