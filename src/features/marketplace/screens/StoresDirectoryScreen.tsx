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
import { SORT_OPTIONS, rankResults } from '@core/data/rankingService';
import { useSortPreference } from '@shared/hooks/useSortPreference';
import type { SortMode } from '@shared/types/ranking.types';
import type { MarketplaceFilter, StoreProfile } from '../marketplace.types';
import { FilterChip, SectionInner } from '../ui';
import { ScrollRail } from '@shared/components/ScrollRail';

import { CategoryRail, CompactSection, ProductGrid, SearchSection } from './screenLayout';
import { SortField, SortLabel, SortRow, SortSelect } from './StoresDirectoryScreenStyled';



export function StoresDirectoryScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<MarketplaceFilter>('all');
  const { sortMode, setSortMode } = useSortPreference();

  const filteredStores = useMemo(
    () =>
      rankResults(
        stores.filter((store) =>
          matchesQuery(query, store.name, store.category, store.address, store.tags.join(' ')),
        ),
        sortMode,
      ),
    [query, sortMode],
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

            <ScrollRail as={CategoryRail} aria-label="Categorías">
              {filteredCategories.map((category, index) => (
                <CategoryTile
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  to={`/comercios?rubro=${category.id}`}
                  priority={index < 5}
                />
              ))}
            </ScrollRail>
          </SectionInner>
        </CompactSection>
      )}

      <CompactSection>
        <SectionInner>
          {filteredStores.length > 0 ? (
            <>
              <SortRow>
                <SectionHeading
                  title="Negocios"
                  chip={`${filteredStores.length}`}
                  subtitle="Locales activos cerca tuyo."
                />

                <SortField>
                  <SortLabel htmlFor="orden-negocios">Ordenar por</SortLabel>
                  <SortSelect
                    id="orden-negocios"
                    value={sortMode}
                    onChange={(event) => setSortMode(event.target.value as SortMode)}
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </SortSelect>
                </SortField>
              </SortRow>

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
                premium={store.premium}
                  
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
