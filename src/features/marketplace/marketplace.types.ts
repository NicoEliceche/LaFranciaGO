import type { LucideIcon } from 'lucide-react';

export interface MarketplaceCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface MarketplaceFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface OfferItem {
  id: string;
  product: string;
  store: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: number;
  distanceKm: number;
  eta: string;
  rating: number;
  tags: string[];
  highlight: string;
}

export interface ComparisonOffer {
  store: string;
  price: number;
  distanceKm: number;
  eta: string;
  openNow: boolean;
}

export interface PriceComparison {
  id: string;
  product: string;
  category: string;
  badge: string;
  offers: ComparisonOffer[];
}

export interface StoreFeaturedProduct {
  id: string;
  name: string;
  price: number;
  badge?: string;
}

export interface StoreProfile {
  id: string;
  name: string;
  /** Plan pagado: mejora la posición dentro del radio cercano. */
  premium?: boolean;
  /** Etiqueta visible del rubro ("Almacén y bebidas"). */
  category: string;
  /** Rubro al que pertenece, para filtrar por categoría. */
  categoryId: string;
  address: string;
  phone: string;
  hours: string;
  distanceKm: number;
  rating: number;
  openNow: boolean;
  delivery: boolean;
  pickup: boolean;
  minOrder: number;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  featuredProducts: StoreFeaturedProduct[];
}

export type OrderState = 'proceso' | 'terminado' | 'cancelado';

/** Línea de un pedido: qué producto se compró y cuántas unidades. */
export interface OrderLine {
  /** Id del producto en el catálogo del comercio. */
  productId: string;
  quantity: number;
}

export interface CustomerOrder {
  id: string;
  code: string;
  store: string;
  storeId: string;
  categoryId: string;
  total: number;
  status: string;
  state: OrderState;
  eta: string;
  date: string;
  itemCount: number;
  /** Productos que se compraron en este pedido. */
  items: OrderLine[];
}

export interface AddressBookEntry {
  id: string;
  label: string;
  address: string;
  primary: boolean;
}

export interface FavoriteProduct {
  id: string;
  name: string;
  store: string;
  categoryId: string;
  price: number;
}

export interface CartItem {
  id: string;
  product: string;
  store: string;
  categoryId: string;
  price: number;
  quantity: number;
  subtotal: number;
  available: boolean;
  eta: string;
  statusLabel: string;
  statusTone: 'success' | 'warning' | 'danger';
}

export interface CommerceMetric {
  id: string;
  label: string;
  value: string;
  trend: string;
}

export interface CommerceOrder {
  id: string;
  customer: string;
  total: number;
  status: string;
}

export interface CommerceInventoryItem {
  id: string;
  name: string;
  stock: number;
  price: number;
  status: string;
}

export interface DeliveryMetric {
  id: string;
  label: string;
  value: string;
  help: string;
}

export interface DeliveryTask {
  id: string;
  store: string;
  customer: string;
  distanceKm: number;
  payout: number;
  status: string;
}

export interface AdminMetric {
  id: string;
  label: string;
  value: string;
  help: string;
}

export interface AdminAlert {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type MarketplaceFilter =
  | 'all'
  | 'offers'
  | 'nearby'
  | 'lowest'
  | 'delivery'
  | 'pickup';
