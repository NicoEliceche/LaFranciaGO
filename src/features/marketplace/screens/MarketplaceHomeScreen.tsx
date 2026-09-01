import { useMemo, useState } from 'react';
import { ChevronRight, PackageSearch, SearchX, Store, Truck } from 'lucide-react';

import { MotoDeliveryIcon } from '@shared/components/icons/MotoDeliveryIcon';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { CategoryTile } from '../components/CategoryTile';
import { EmptyState } from '../components/EmptyState';
import { ProductCard } from '../components/ProductCard';
import { PromoBanner } from '../components/PromoBanner';
import { PromoSplitButton } from '../components/PromoSplitButton';
import { SearchBar } from '../components/SearchBar';
import { SectionHeading } from '../components/SectionHeading';
import { StoreCard } from '../components/StoreCard';
import { categories, featuredStores, nearbyOffers } from '../../home/homeContent';
import { matchesQuery } from '../marketplace.utils';
import { rankResults } from '@core/data/rankingService';
import { useSortPreference } from '@shared/hooks/useSortPreference';
import { Section, SectionInner } from '../ui';
import {
  ErrandBanner,
  ErrandBannerArrow,
  ErrandBannerCopy,
  ErrandBannerIcon,
  ErrandBannerText,
  ErrandBannerTitle,
} from './MarketplaceHomeScreenStyled';
import {
  CategoryRail,
  SearchSection,
  PromoSplitRow,
  PromoStack,
  ScrollRail,
  SectionStack,
  WideScrollRail,
} from './screenLayout';

export function MarketplaceHomeScreen() {
  const [query, setQuery] = useState('');
  const { sortMode } = useSortPreference();

  const normalizedQuery = query.trim();
  const isSearching = normalizedQuery.length > 0;

  const visibleCategories = useMemo(
    () => categories.filter((category) => matchesQuery(normalizedQuery, category.name)),
    [normalizedQuery],
  );

  /* Mismo criterio que el buscador: cercanía primero, Premium desempata. */
  const visibleStores = useMemo(
    () =>
      rankResults(
        featuredStores.filter((store) =>
          matchesQuery(normalizedQuery, store.name, store.category, store.address),
        ),
        sortMode,
      ),
    [normalizedQuery, sortMode],
  );

  const visibleOffers = useMemo(
    () =>
      rankResults(
        nearbyOffers.filter((offer) => matchesQuery(normalizedQuery, offer.product, offer.store)),
        sortMode,
      ),
    [normalizedQuery, sortMode],
  );

  const hasResults =
    visibleCategories.length > 0 || visibleStores.length > 0 || visibleOffers.length > 0;

  return (
    <MarketplaceFrame
      query={query}
      onQueryChange={setQuery}
    >
      <SearchSection>
        <SectionInner>
          <SearchBar value={query} onChange={setQuery} />
        </SectionInner>
      </SearchSection>

      <Section>
        <SectionInner>
          <ErrandBanner to="/mandado">
            <ErrandBannerIcon>
              <PackageSearch size={22} aria-hidden="true" />
            </ErrandBannerIcon>

            <ErrandBannerCopy>
              <ErrandBannerTitle>¿Necesitás algún mandado?</ErrandBannerTitle>
              <ErrandBannerText>Pedí lo que sea y un repartidor lo busca.</ErrandBannerText>
            </ErrandBannerCopy>

            <ErrandBannerArrow>
              <ChevronRight size={18} aria-hidden="true" />
            </ErrandBannerArrow>
          </ErrandBanner>
        </SectionInner>
      </Section>

      {isSearching && !hasResults ? (
        <Section>
          <SectionInner>
            <EmptyState
              icon={SearchX}
              title="Sin resultados"
              text={`No encontramos nada para "${normalizedQuery}". Probá con otra palabra.`}
              dashed
            />
          </SectionInner>
        </Section>
      ) : null}

      {visibleCategories.length > 0 ? (
        <Section>
          <SectionInner>
            <SectionHeading
              title="Categorías"
              subtitle="Elegí un rubro y encontrá tu comercio."
              seeAllTo="/comercios"
            />

            <CategoryRail aria-label="Categorías">
              {visibleCategories.map((category, index) => (
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
        </Section>
      ) : null}

      {visibleOffers.length > 0 ? (
        <Section>
          <SectionInner>
            <SectionHeading
              title="Destacados"
              chip="Ofertas"
              subtitle="Los productos más pedidos cerca tuyo."
              seeAllTo="/comercios"
            />

            <ScrollRail aria-label="Productos destacados">
              {visibleOffers.map((offer, index) => (
                <ProductCard
                  key={offer.id}
                  name={offer.product}
                  store={offer.store}
                  price={offer.price}
                  oldPrice={offer.oldPrice}
                  categoryId={offer.categoryId}
                  imageLabel={offer.imageLabel}
                  tag={offer.discount > 0 ? `-${offer.discount}%` : undefined}
                  to={offer.href}
                  priority={index < 3}
                />
              ))}
            </ScrollRail>
          </SectionInner>
        </Section>
      ) : null}

      {visibleStores.length > 0 ? (
        <Section>
          <SectionInner>
            <SectionHeading
              title="Negocios"
              chip="Locales"
              subtitle="Los locales más elegidos de La Francia."
              seeAllTo="/comercios"
            />

            <WideScrollRail aria-label="Negocios destacados">
              {visibleStores.map((store, index) => (
                <StoreCard
                  key={store.id}
                  id={store.id}
                  name={store.name}
                  category={store.category}
                  categoryId={store.categoryId}
                  to={store.href}
                  distanceKm={store.distanceKm}
                  rating={store.rating}
                  openNow={store.openNow}
                premium={store.premium}
                  
                  etaMin={store.etaMin}
                  etaMax={store.etaMax}
                  priority={index < 2}
                />
              ))}
            </WideScrollRail>
          </SectionInner>
        </Section>
      ) : null}

      {!isSearching ? (
        <Section>
          <SectionInner>
            <SectionStack>
              <PromoStack>
                <PromoBanner
                  to="/registro/comercio"
                  title="¿Querés sumar tu comercio?"
                  text="Registrá tu negocio y empezá a recibir pedidos."
                  icon={Store}
                  tone="brand"
                />
                <PromoSplitRow>
                  <PromoSplitButton
                    to="/trabaja-con-nosotros"
                    label="Sumate como Repartidor (Delivery)"
                    icon={MotoDeliveryIcon}
                  />
                  <PromoSplitButton
                    to="/registro/fletero"
                    label="Sumate como Fletero"
                    icon={Truck}
                  />
                </PromoSplitRow>
              </PromoStack>
            </SectionStack>
          </SectionInner>
        </Section>
      ) : null}
    </MarketplaceFrame>
  );
}
