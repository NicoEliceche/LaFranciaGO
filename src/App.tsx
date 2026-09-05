import { Suspense, lazy } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@core/theme';
import { MarketplaceHomeScreen } from '@features/marketplace/screens/MarketplaceHomeScreen';

/**
 * Sólo Inicio viaja en el bundle principal: es la primera pantalla y debe
 * pintar cuanto antes. El resto se descarga al navegar, lo que baja el peso
 * inicial sin cambiar nada de la interfaz.
 */
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
const CommercePanelScreen = lazy(() =>
  import('@features/marketplace/screens/CommercePanelScreen').then((m) => ({ default: m.CommercePanelScreen })),
);
const ProductFormScreen = lazy(() =>
  import('@features/marketplace/screens/ProductFormScreen').then((m) => ({ default: m.ProductFormScreen })),
);
const DeliveryPanelScreen = lazy(() =>
  import('@features/marketplace/screens/DeliveryPanelScreen').then((m) => ({ default: m.DeliveryPanelScreen })),
);
const AdminPanelScreen = lazy(() =>
  import('@features/marketplace/screens/AdminPanelScreen').then((m) => ({ default: m.AdminPanelScreen })),
);

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MarketplaceHomeScreen />} />
            <Route path="/categorias" element={<CategoriesScreen />} />
            <Route path="/comercios" element={<StoresDirectoryScreen />} />
            <Route path="/comercios/:storeId" element={<StoreProfileScreen />} />
            <Route path="/productos/:productId" element={<ProductDetailScreen />} />
            <Route path="/pedidos" element={<MyOrdersScreen />} />
            <Route path="/carrito" element={<CartScreen />} />
            <Route path="/mandado" element={<ErrandScreen />} />
            <Route path="/mandado/chat" element={<ErrandChatScreen />} />
            <Route path="/favoritos" element={<FavoritesScreen />} />
            <Route path="/notificaciones" element={<NotificationsScreen />} />
            <Route path="/registro/comercio" element={<CommerceRegistrationScreen />} />
            <Route path="/trabaja-con-nosotros" element={<DeliveryRegistrationScreen />} />
            <Route path="/registro/fletero" element={<DeliveryRegistrationScreen role="fletero" />} />
            <Route
              path="/registro/delivery"
              element={<Navigate to="/trabaja-con-nosotros" replace />}
            />
            <Route path="/mi-cuenta" element={<CustomerAccountScreen />} />
            <Route path="/panel/comercio" element={<CommercePanelScreen />} />
            <Route path="/panel/comercio/producto" element={<ProductFormScreen />} />
            <Route path="/panel/repartidor" element={<DeliveryPanelScreen />} />
            <Route path="/panel/admin" element={<AdminPanelScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
