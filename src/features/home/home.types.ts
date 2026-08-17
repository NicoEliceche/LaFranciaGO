import type { ElementType } from 'react';
import type { LucideIcon } from 'lucide-react';

export type HomeTone = 'blue' | 'green' | 'violet' | 'orange' | 'red' | 'gold' | 'slate';

export interface HomeNavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface HomeFilterOption {
  id: string;
  label: string;
  description: string;
}

export interface HomeFilterGroup {
  id: string;
  label: string;
  multi: boolean;
  options: HomeFilterOption[];
}

export interface HomeLocation {
  id: string;
  label: string;
  detail: string;
  mapQuery: string;
  note: string;
}

export interface HomeSponsoredBanner {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  store: string;
  href: string;
  cta: string;
  discount: string;
  tone: HomeTone;
  imageLabel: string;
}

export interface HomeCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  tone: HomeTone;
}

export interface HomeFeaturedStore {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  logoLabel: string;
  etaMin: number;
  etaMax: number;
  distanceKm: number;
  rating: number;
  delivery: boolean;
  pickup: boolean;
  openNow: boolean;
  tone: HomeTone;
  address: string;
  priceLevel: string;
  minOrder: number;
  badge: string;
  href: string;
}

export interface HomeOffer {
  id: string;
  product: string;
  store: string;
  categoryId: string;
  distanceKm: number;
  price: number;
  oldPrice: number;
  discount: number;
  delivery: boolean;
  pickup: boolean;
  openNow: boolean;
  tone: HomeTone;
  imageLabel: string;
  href: string;
}

export interface HomeTrustItem {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
}
