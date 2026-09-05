import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX, X } from 'lucide-react';

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

import { CompactSection, ProductGrid, SearchSection } from './screenLayout';
import {
  RubroChip,
  RubroChipClear,
  SortField,
  SortLabel,
  SortRow,
  SortSelect,
} from './StoresDirectoryScreenStyled';



export function StoresDirectoryScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<MarketplaceFilter>('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortMode, setSortMode } = useSortPreference();

  /* Rubro elegido en la pantalla de categorías. Antes el enlace traía este
     parámetro pero nadie lo leía: tocar una categoría no filtraba nada. */
  const rubroId = searchParams.get('rubro');
  const rubro = useMemo(
    () => (rubroId ? (categories.find((item) => item.id === rubroId) ?? null) : null),
    [rubroId],
  );

  const filteredStores = useMemo(
    () =>
      rankResults(
        stores
          .filter((store) => !rubro || store.categoryId === rubro.id)
          .filter((store) =>
            matchesQuery(query, store.name, store.category, store.address, store.tags.join(' ')),
          ),
        sortMode,
      ),
    [query, rubro, sortMode],
  );

  const clearRubro = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('rubro');
    setSearchParams(next, { replace: true });
  };

  const hasResults = filteredStores.length > 0;

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

      {rubro ? (
        <CompactSection>
          <SectionInner>
            <RubroChip>
              Rubro: <strong>{rubro.name}</strong>
              <RubroChipClear type="button" onClick={clearRubro} aria-label="Quitar el filtro de rubro">
                <X size={14} aria-hidden="true" />
              </RubroChipClear>
            </RubroChip>
          </SectionInner>
        </CompactSection>
      ) : null}

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
