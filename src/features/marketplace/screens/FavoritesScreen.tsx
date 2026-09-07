import { useMemo } from 'react';
import { Heart } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { StoreCard } from '../components/StoreCard';
import { alternarFavorito, useFavoritos } from '../useFavoritos';
import { useStores } from '../useStores';
import { SectionInner } from '../ui';
import { CompactSection, ProductGrid } from './screenLayout';

/**
 * Los comercios que el cliente guardó.
 *
 * Sólo negocios: los productos se agregan al carrito desde cada comercio, y
 * guardar un producto suelto obligaría a recordar de dónde era.
 */

export function FavoritesScreen() {
  const { stores } = useStores();
  const { favoritos, cargando } = useFavoritos();

  const guardados = useMemo(
    () => stores.filter((store) => favoritos.has(store.id)),
    [favoritos, stores],
  );

  /* Mientras cargan no se dice "no guardaste nada": sería un cartel de medio
     segundo que contradice la lista que aparece justo después. */
  if (guardados.length === 0 && !cargando) {
    return (
      <MarketplaceFrame showSearch={false}>
        <CompactSection>
          <SectionInner>
            <EmptyState
              icon={Heart}
              title="Todavía no guardaste nada"
              text="Tocá el corazón en un negocio para tenerlo a mano."
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
            chip={cargando ? undefined : `${guardados.length}`}
            subtitle="Tus locales guardados."
          />

          <ProductGrid>
            {guardados.map((store, index) => (
              <StoreCard
                key={store.id}
                favorito
                onToggleFavorito={alternarFavorito}
                id={store.id}
                name={store.name}
                category={store.category}
                categoryId={store.id}
                to={`/comercios/${store.id}`}
                distanceKm={store.distanceKm}
                rating={store.rating}
                openNow={store.openNow}
                premium={store.premium}
                priority={index < 4}
              />
            ))}
          </ProductGrid>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
