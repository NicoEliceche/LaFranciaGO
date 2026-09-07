import type { SaleUnitId } from '@shared/types/saleUnit.types';
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
  /** Falta hasta saber dónde está el cliente: no es cero, es desconocida. */
  distanceKm?: number;
  /** Falta hasta que haya reseñas. */
  rating?: number;
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
  /* Id del comercio en la base. Hace falta para crear el pedido: el nombre
     no alcanza, y derivarlo del texto rompe con cualquier tilde o cambio de
     nombre. Es opcional porque los carritos guardados de antes no lo traen. */
  storeId?: string;
  categoryId: string;
  /** Precio del escalón base: de una unidad, o del kilo si se vende por peso. */
  price: number;
  /** Cómo se vende. Si falta, se asume por unidad. */
  saleUnit?: SaleUnitId;
  /** Cuánto ocupa: decide si el pedido entra en una moto. */
  tamano?: string;
  /**
   * Escalón elegido dentro de la unidad de venta, empezando en 0.
   * Por unidad, 0 es "1 unid."; por peso, 0 es "1/4".
   */
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
