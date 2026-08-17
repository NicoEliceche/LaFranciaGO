import { comparisons, offers, stores } from './marketplaceContent';
import type { ComparisonOffer, OfferItem, PriceComparison, StoreProfile } from './marketplace.types';
import { formatDistance, formatMoney, formatPercent, normalizeText } from '@shared/utils/format';

export type ProductLookupResult =
  | {
      kind: 'comparison';
      comparison: PriceComparison;
      bestOffer: ComparisonOffer;
      sortedOffers: ComparisonOffer[];
    }
  | {
      kind: 'offer';
      offer: OfferItem;
    };

export { formatDistance, formatMoney, formatPercent };

export const normalizeQuery = (value: string) => normalizeText(value);

export const matchesQuery = (query: string, ...values: Array<string | number | boolean | undefined>) => {
  const normalized = normalizeQuery(query);

  if (!normalized) {
    return true;
  }

  return values
    .filter((value) => value !== undefined)
    .join(' ')
    .toLowerCase()
    .includes(normalized);
};

export const findOfferById = (offerId: string) => offers.find((offer) => offer.id === offerId);

export const findStoreById = (storeId: string) => stores.find((store) => store.id === storeId);

export const findStoreByName = (storeName: string) =>
  stores.find((store) => store.name.toLowerCase() === storeName.toLowerCase());

export const getBestOffer = (productId: string): ProductLookupResult | undefined => {
  const comparison = comparisons.find((item) => item.id === `${productId}-compare`);

  if (comparison) {
    const sorted = [...comparison.offers].sort((a, b) => a.price - b.price);
    return { kind: 'comparison', comparison, bestOffer: sorted[0], sortedOffers: sorted };
  }

  const offer = findOfferById(productId);

  if (offer) {
    return { kind: 'offer', offer };
  }

  return undefined;
};

export const sortOffers = (items: OfferItem[], filter: string) => {
  const list = [...items];

  switch (filter) {
    case 'lowest':
      return list.sort((a, b) => a.price - b.price);
    case 'nearby':
      return list.sort((a, b) => a.distanceKm - b.distanceKm);
    case 'delivery':
      return list.sort((a, b) => a.eta.localeCompare(b.eta));
    case 'pickup':
      return list.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    case 'offers':
      return list.filter((offer) => offer.discount > 0).sort((a, b) => b.discount - a.discount);
    default:
      return list.sort((a, b) => b.discount - a.discount);
  }
};

export const getStoreProducts = (store: StoreProfile) =>
  store.featuredProducts.map((product) => ({
    ...product,
    store: store.name,
    storeId: store.id,
  }));
