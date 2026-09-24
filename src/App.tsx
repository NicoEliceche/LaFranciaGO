import { Suspense, lazy } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@core/theme';
import { MarketplaceHomeScreen } from '@features/marketplace/screens/MarketplaceHomeScreen';
import { RutaPrivada } from '@features/marketplace/components/RutaPrivada';
import { PortadaOIngreso } from '@features/marketplace/components/PortadaOIngreso';
import { Ingreso } from '@features/marketplace/screens/Ingreso';
import { RutaGestion } from '@features/gestion/components/RutaGestion';

/**
 * Inicio y el ingreso viajan en el bundle principal: son las dos primeras
 * pantallas —la portada con sesión, el ingreso sin ella— y tienen que pintar
 * cuanto antes. Diferido, el ingreso esperaba un segundo viaje después del
 * JavaScript principal y el título tardaba 4,5 s en aparecer.
 *
 * El resto se descarga al navegar, lo que baja el peso inicial sin cambiar
 * nada de la interfaz.
 */
const AuthScreen = lazy(() =>
  import('@features/marketplace/screens/AuthScreen').then((m) => ({ default: m.AuthScreen })),
);
const RecuperarScreen = lazy(() =>
  import('@features/marketplace/screens/RecuperarScreen').then((m) => ({
    default: m.RecuperarScreen,
  })),
);
const SeguimientoScreen = lazy(() =>
  import('@features/marketplace/screens/SeguimientoScreen').then((m) => ({
    default: m.SeguimientoScreen,
  })),
);
const CategoriesScreen = lazy(() =>
  import('@features/marketplace/screens/CategoriesScreen').then((m) => ({ default: m.CategoriesScreen })),
);
const StoresDirectoryScreen = lazy(() =>
  import('@features/marketplace/screens/StoresDirectoryScreen').then((m) => ({ default: m.StoresDirectoryScreen })),
);
const StoreProfileScreen = lazy(() =>
  import('@features/marketplace/screens/StoreProfileScreen').then((m) => ({ default: m.StoreProfileScreen })),
);
const ProductDetailScreen = lazy(() =>
  import('@features/marketplace/screens/ProductDetailScreen').then((m) => ({ default: m.ProductDetailScreen })),
);
const MyOrdersScreen = lazy(() =>
  import('@features/marketplace/screens/MyOrdersScreen').then((m) => ({ default: m.MyOrdersScreen })),
);
const CartScreen = lazy(() =>
  import('@features/marketplace/screens/CartScreen').then((m) => ({ default: m.CartScreen })),
);
const ErrandScreen = lazy(() =>
  import('@features/marketplace/screens/ErrandScreen').then((m) => ({ default: m.ErrandScreen })),
);
const ErrandChatScreen = lazy(() =>
  import('@features/marketplace/screens/ErrandChatScreen').then((m) => ({ default: m.ErrandChatScreen })),
);
const FavoritesScreen = lazy(() =>
  import('@features/marketplace/screens/FavoritesScreen').then((m) => ({ default: m.FavoritesScreen })),
);
const NotificationsScreen = lazy(() =>
  import('@features/marketplace/screens/NotificationsScreen').then((m) => ({ default: m.NotificationsScreen })),
);
const CustomerAccountScreen = lazy(() =>
  import('@features/marketplace/screens/CustomerAccountScreen').then((m) => ({ default: m.CustomerAccountScreen })),
);
const CommerceRegistrationScreen = lazy(() =>
  import('@features/marketplace/screens/CommerceRegistrationScreen').then((m) => ({ default: m.CommerceRegistrationScreen })),
);
const DeliveryRegistrationScreen = lazy(() =>
  import('@features/marketplace/screens/DeliveryRegistrationScreen').then((m) => ({ default: m.DeliveryRegistrationScreen })),
);
const MiComercioScreen = lazy(() =>
  import('@features/marketplace/screens/MiComercioScreen').then((m) => ({
    default: m.MiComercioScreen,
  })),
);
const CommercePanelScreen = lazy(() =>
  import('@features/marketplace/screens/CommercePanelScreen').then((m) => ({ default: m.CommercePanelScreen })),
);

const GestionResumenScreen = lazy(() =>
  import('@features/gestion/screens/GestionResumenScreen').then((m) => ({
    default: m.GestionResumenScreen,
  })),
);

const CajaScreen = lazy(() =>
  import('@features/gestion/screens/CajaScreen').then((m) => ({ default: m.CajaScreen })),
);

const CajaRapidaScreen = lazy(() =>
  import('@features/gestion/screens/CajaRapidaScreen').then((m) => ({
    default: m.CajaRapidaScreen,
  })),
);

const VentasScreen = lazy(() =>
  import('@features/gestion/screens/VentasScreen').then((m) => ({ default: m.VentasScreen })),
);

const FiadoScreen = lazy(() =>
  import('@features/gestion/screens/FiadoScreen').then((m) => ({ default: m.FiadoScreen })),
);

const ComprasScreen = lazy(() =>
  import('@features/gestion/screens/ComprasScreen').then((m) => ({ default: m.ComprasScreen })),
);

const InformesScreen = lazy(() =>
  import('@features/gestion/screens/InformesScreen').then((m) => ({ default: m.InformesScreen })),
);

const ClientesScreen = lazy(() =>
  import('@features/gestion/screens/ClientesScreen').then((m) => ({ default: m.ClientesScreen })),
);

const PresupuestosScreen = lazy(() =>
  import('@features/gestion/screens/PresupuestosScreen').then((m) => ({
    default: m.PresupuestosScreen,
  })),
);

const ContratarGestionScreen = lazy(() =>
  import('@features/gestion/screens/ContratarGestionScreen').then((m) => ({
    default: m.ContratarGestionScreen,
  })),
);
const GestionComercioScreen = lazy(() =>
  import('@features/gestion/screens/GestionComercioScreen').then((m) => ({
    default: m.GestionComercioScreen,
  })),
);

const MostradorScreen = lazy(() =>
  import('@features/gestion/screens/MostradorScreen').then((m) => ({ default: m.MostradorScreen })),
);
const ProductFormScreen = lazy(() =>
  import('@features/marketplace/screens/ProductFormScreen').then((m) => ({ default: m.ProductFormScreen })),
);
const PanelRepartidorScreen = lazy(() =>
  import('@features/marketplace/screens/PanelRepartidorScreen').then((m) => ({
    default: m.PanelRepartidorScreen,
  })),
);
const DeliveryPanelScreen = lazy(() =>
  import('@features/marketplace/screens/DeliveryPanelScreen').then((m) => ({ default: m.DeliveryPanelScreen })),
);
const AdminPostulacionesScreen = lazy(() =>
  import('@features/marketplace/screens/AdminPostulacionesScreen').then((m) => ({
    default: m.AdminPostulacionesScreen,
  })),
);
const AdminRegistroScreen = lazy(() =>
  import('@features/marketplace/screens/AdminRegistroScreen').then((m) => ({
    default: m.AdminRegistroScreen,
  })),
);
const AdminPanelScreen = lazy(() =>
  import('@features/marketplace/screens/AdminPanelScreen').then((m) => ({ default: m.AdminPanelScreen })),
);
const ReclamosScreen = lazy(() =>
  import('@features/marketplace/screens/ReclamosScreen').then((m) => ({ default: m.ReclamosScreen })),
);

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              element={
                <PortadaOIngreso>
                  <MarketplaceHomeScreen />
                </PortadaOIngreso>
              }
            />
            <Route path="/ingresar" element={<Ingreso />} />
            {/* La misma pantalla pide el enlace y, con token, cambia la clave. */}
            <Route path="/recuperar" element={<RecuperarScreen />} />
            <Route path="/recuperar/:token" element={<RecuperarScreen />} />
            <Route path="/categorias" element={<CategoriesScreen />} />
            <Route path="/comercios" element={<StoresDirectoryScreen />} />
            <Route path="/comercios/:storeId" element={<StoreProfileScreen />} />
            <Route path="/productos/:productId" element={<ProductDetailScreen />} />
            <Route
              path="/pedidos"
              element={
                <RutaPrivada>
                  <MyOrdersScreen />
                </RutaPrivada>
              }
            />
            {/* Dónde va un pedido: es información de la cuenta, así que
                pide sesión. */}
            <Route
              path="/pedidos/:pedidoId/seguimiento"
              element={
                <RutaPrivada>
                  <SeguimientoScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/carrito"
              element={
                <RutaPrivada>
                  <CartScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/mandado"
              element={
                <RutaPrivada>
                  <ErrandScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/mandado/chat"
              element={
                <RutaPrivada>
                  <ErrandChatScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/favoritos"
              element={
                <RutaPrivada>
                  <FavoritesScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/notificaciones"
              element={
                <RutaPrivada>
                  <NotificationsScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/registro/comercio"
              element={
                <RutaPrivada>
                  <CommerceRegistrationScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/trabaja-con-nosotros"
              element={
                <RutaPrivada>
                  <DeliveryRegistrationScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/registro/fletero"
              element={
                <RutaPrivada>
                  <DeliveryRegistrationScreen role="fletero" />
                </RutaPrivada>
              }
            />
            <Route
              path="/registro/delivery"
              element={<Navigate to="/trabaja-con-nosotros" replace />}
            />
            <Route
              path="/mi-cuenta"
              element={
                <RutaPrivada>
                  <CustomerAccountScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/panel/comercio"
              element={
                <RutaPrivada>
                  <MiComercioScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/gestion/contratar"
              element={
                <RutaPrivada>
                  <ContratarGestionScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/gestion"
              element={
                <RutaGestion>
                  <GestionResumenScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/caja"
              element={
                <RutaGestion>
                  <CajaScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/caja-rapida"
              element={
                <RutaGestion>
                  <CajaRapidaScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/ventas"
              element={
                <RutaGestion>
                  <VentasScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/fiado"
              element={
                <RutaGestion>
                  <FiadoScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/compras"
              element={
                <RutaGestion>
                  <ComprasScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/informes"
              element={
                <RutaGestion>
                  <InformesScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/clientes"
              element={
                <RutaGestion>
                  <ClientesScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/presupuestos"
              element={
                <RutaGestion>
                  <PresupuestosScreen />
                </RutaGestion>
              }
            />
            <Route
              path="/gestion/mostrador"
              element={
                <RutaGestion>
                  <MostradorScreen />
                </RutaGestion>
              }
            />
            {/* Estas cinco secciones son las mismas del panel del comercio,
                dibujadas adentro del sistema. Sin estas rutas, el menú de la
                gestión las ofrecía y el router mandaba a la portada: el
                comercio terminaba afuera del sistema sin haberlo pedido. */}
            {(['pedidos', 'envios', 'productos', 'ofertas', 'chats'] as const).map(
              (seccion) => (
                <Route
                  key={seccion}
                  path={`/gestion/${seccion}`}
                  element={
                    <RutaGestion>
                      <GestionComercioScreen seccion={seccion} />
                    </RutaGestion>
                  }
                />
              ),
            )}
            <Route
              path="/panel/comercio/metricas"
              element={
                <RutaPrivada>
                  <CommercePanelScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/panel/comercio/producto"
              element={
                <RutaPrivada>
                  <ProductFormScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/panel/repartidor"
              element={
                <RutaPrivada>
                  <PanelRepartidorScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/panel/repartidor/metricas"
              element={
                <RutaPrivada>
                  <DeliveryPanelScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/panel/admin"
              element={
                <RutaPrivada>
                  <AdminPanelScreen />
                </RutaPrivada>
              }
            />
            <Route
              path="/panel/admin/postulaciones"
              element={
                <RutaPrivada>
                  <AdminPostulacionesScreen />
                </RutaPrivada>
              }
            />
            {/* El registro de errores. Como el resto de administración, acá
                sólo se pide sesión: quién puede verlo lo decide el servidor,
                que responde 404 a quien no es administrador. */}
            <Route
              path="/panel/admin/registro"
              element={
                <RutaPrivada>
                  <AdminRegistroScreen />
                </RutaPrivada>
              }
            />
            {/* Los reclamos no son sólo de administración: el comercio y
                quien reparte entran a los suyos, y el servidor decide cuáles
                ve cada uno. */}
            <Route
              path="/reclamos"
              element={
                <RutaPrivada>
                  <ReclamosScreen />
                </RutaPrivada>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
