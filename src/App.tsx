import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@core/theme';
import { HomeScreen } from '@features/home';
import {
  AdminPanelScreen,
  CartScreen,
  CommercePanelScreen,
  CommerceRegistrationScreen,
  CustomerAccountScreen,
  DeliveryPanelScreen,
  DeliveryRegistrationScreen,
  FavoritesScreen,
  NotificationsScreen,
  ProductDetailScreen,
  StoresDirectoryScreen,
  StoreProfileScreen,
} from '@features/marketplace';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/comercios" element={<StoresDirectoryScreen />} />
          <Route path="/comercios/:storeId" element={<StoreProfileScreen />} />
          <Route path="/productos/:productId" element={<ProductDetailScreen />} />
          <Route path="/pedidos" element={<CartScreen />} />
          <Route path="/carrito" element={<Navigate to="/pedidos" replace />} />
          <Route path="/favoritos" element={<FavoritesScreen />} />
          <Route path="/notificaciones" element={<NotificationsScreen />} />
          <Route path="/registro/comercio" element={<CommerceRegistrationScreen />} />
          <Route path="/trabaja-con-nosotros" element={<DeliveryRegistrationScreen />} />
          <Route path="/registro/delivery" element={<Navigate to="/trabaja-con-nosotros" replace />} />
          <Route path="/mi-cuenta" element={<CustomerAccountScreen />} />
          <Route path="/panel/comercio" element={<CommercePanelScreen />} />
          <Route path="/panel/repartidor" element={<DeliveryPanelScreen />} />
          <Route path="/panel/admin" element={<AdminPanelScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
