import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { CategoryTile } from '../components/CategoryTile';
import { EmptyState } from '../components/EmptyState';
import { SearchBar } from '../components/SearchBar';
import { SectionHeading } from '../components/SectionHeading';
import { StoreCard } from '../components/StoreCard';
import { categories, quickFilters, stores } from '../marketplaceContent';
import { matchesQuery } from '../marketplace.utils';
import type { MarketplaceFilter, StoreProfile } from '../marketplace.types';
import { FilterChip, SectionInner } from '../ui';
import { ScrollRail } from '@shared/components/ScrollRail';

import { CategoryRail, CompactSection, ProductGrid, SearchSection } from './screenLayout';

const sortStores = (items: StoreProfile[], filter: MarketplaceFilter) => {
  const list = [...items];

  switch (filter) {
    case 'lowest':
      return list.sort((a, b) => a.minOrder - b.minOrder);
    case 'nearby':
      return list.sort((a, b) => a.distanceKm - b.distanceKm);
    case 'delivery':
      return list.sort((a, b) => (a.delivery === b.delivery ? 0 : a.delivery ? -1 : 1));
    case 'pickup':
      return list.sort((a, b) => (a.pickup === b.pickup ? 0 : a.pickup ? -1 : 1));
    case 'offers':
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list.sort((a, b) => b.rating - a.rating);
  }
};

export function StoresDirectoryScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<MarketplaceFilter>('all');

  const filteredStores = useMemo(
    () =>
      sortStores(
        stores.filter((store) =>
          matchesQuery(query, store.name, store.category, store.address, store.tags.join(' ')),
        ),
        filter,
      ),
    [filter, query],
  );

  const filteredCategories = useMemo(
    () => categories.filter((category) => matchesQuery(query, category.name)),
    [query],
  );

  const hasResults = filteredStores.length > 0 || filteredCategories.length > 0;

  return (
    <MarketplaceFrame
      query={query}
      onQueryChange={setQuery}
    >
      <SearchSection>
        <SectionInner>
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Buscar comercios o rubros"
          />

          <ScrollRail aria-label="Filtros rápidos">
            {quickFilters.map((option) => (
              <FilterChip
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id as MarketplaceFilter)}
                data-active={filter === option.id}
              >
                {option.label}
              </FilterChip>
            ))}
          </ScrollRail>
        </SectionInner>
      </SearchSection>

      {filteredCategories.length > 0 && (
        <CompactSection>
          <SectionInner>
            <SectionHeading title="Categorías" subtitle="Elegí un rubro para filtrar." />

            <CategoryRail aria-label="Categorías">
              {filteredCategories.map((category, index) => (
                <CategoryTile
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  to={`/comercios?rubro=${category.id}`}
                  priority={index < 5}
                />
              ))}
            </CategoryRail>
          </SectionInner>
        </CompactSection>
      )}

      <CompactSection>
        <SectionInner>
          {filteredStores.length > 0 ? (
            <>
              <SectionHeading
                title="Negocios"
                chip={`${filteredStores.length}`}
                subtitle="Locales activos cerca tuyo."
              />

              <ProductGrid>
                {filteredStores.map((store, index) => (
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
            </>
          ) : (
            <EmptyState
              icon={SearchX}
              title="Sin negocios"
              text={
                hasResults
                  ? 'Probá cambiando el filtro.'
                  : `No encontramos negocios para "${query}".`
              }
              dashed
            />
          )}
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
