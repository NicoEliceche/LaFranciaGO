import { Heart } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { StoreCard } from '../components/StoreCard';
import { favorites, stores } from '../marketplaceContent';
import { SectionInner } from '../ui';
import { CompactSection, ProductGrid } from './screenLayout';

/* Sólo se guardan negocios: los productos se agregan desde cada comercio. */
const favoriteStores = stores.filter((store) =>
  favorites.some((favorite) => favorite.store.toLowerCase() === store.name.toLowerCase()),
);

export function FavoritesScreen() {
  if (favoriteStores.length === 0) {
    return (
      <MarketplaceFrame showSearch={false}>
        <CompactSection>
          <SectionInner>
            <EmptyState
              icon={Heart}
              title="Todavía no guardaste nada"
              text="Tocá la estrella en un negocio para tenerlo a mano."
              ctaLabel="Explorar negocios"
              ctaTo="/comercios"
            />
          </SectionInner>
        </CompactSection>
      </MarketplaceFrame>
    );
  }

  return (
    <MarketplaceFrame showSearch={false}>
      <CompactSection>
        <SectionInner>
          <SectionHeading
            title="Negocios"
            chip={`${favoriteStores.length}`}
            subtitle="Tus locales guardados."
          />

          <ProductGrid>
            {favoriteStores.map((store, index) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                category={store.category}
                categoryId={store.id}
                to={`/comercios/${store.id}`}
                distanceKm={store.distanceKm}
                rating={store.rating}
                openNow={store.openNow}
                priority={index < 4}
              />
            ))}
          </ProductGrid>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
