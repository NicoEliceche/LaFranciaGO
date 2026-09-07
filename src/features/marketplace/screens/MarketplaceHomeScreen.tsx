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
import { categories } from '../../home/homeContent';
import { alternarFavorito, useFavoritos } from '../useFavoritos';
import { useHomeData } from '../useHomeData';
import { matchesQuery } from '../marketplace.utils';
import { rankResults } from '@core/data/rankingService';
import { ScrollRail as HScrollRail } from '@shared/components/ScrollRail';
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

/** Rubros que se adelantan en Inicio; el resto vive en la pantalla Categorías. */
const HOME_CATEGORY_PREVIEW = 8;

export function MarketplaceHomeScreen() {
  const [query, setQuery] = useState('');
  const { sortMode } = useSortPreference();

  /* Comercios y ofertas salen de la base: son los que el comercio administra
     desde su panel, no una lista escrita en el código. */
  const { featuredStores, nearbyOffers, cargando } = useHomeData();
  const { favoritos } = useFavoritos();

  const normalizedQuery = query.trim();
  const isSearching = normalizedQuery.length > 0;

  /**
   * Inicio muestra un adelanto de rubros, no el listado completo: para verlos
   * todos está la pantalla Categorías, a la que lleva "Ver todos". Buscando sí
   * se listan todas las coincidencias, que es lo que se espera de una búsqueda.
   */
  const visibleCategories = useMemo(() => {
    const matches = categories.filter((category) =>
      matchesQuery(normalizedQuery, category.name),
    );

    return isSearching ? matches : matches.slice(0, HOME_CATEGORY_PREVIEW);
  }, [isSearching, normalizedQuery]);

  /* Mismo criterio que el buscador: cercanía primero, Premium desempata. */
  const visibleStores = useMemo(
    () =>
      rankResults(
        featuredStores.filter((store) =>
          matchesQuery(normalizedQuery, store.name, store.category, store.address),
        ),
        sortMode,
      ),
    [featuredStores, normalizedQuery, sortMode],
  );

  const visibleOffers = useMemo(
    () =>
      rankResults(
        nearbyOffers.filter((offer) => matchesQuery(normalizedQuery, offer.product, offer.store)),
        sortMode,
      ),
    [nearbyOffers, normalizedQuery, sortMode],
  );

  /* Mientras cargan los datos no se dice "no hay nada": sería un cartel de
     medio segundo que contradice lo que aparece justo después. */
  const hasResults =
    cargando ||
    visibleCategories.length > 0 ||
    visibleStores.length > 0 ||
    visibleOffers.length > 0;

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
              seeAllTo="/categorias"
            />

            <HScrollRail as={CategoryRail} aria-label="Categorías">
              {visibleCategories.map((category, index) => (
                <CategoryTile
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  to={`/comercios?rubro=${category.id}`}
                  priority={index < 5}
                />
              ))}
            </HScrollRail>
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

            <HScrollRail as={ScrollRail} aria-label="Productos destacados">
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
            </HScrollRail>
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

            <HScrollRail as={WideScrollRail} aria-label="Negocios destacados">
              {visibleStores.map((store, index) => (
                <StoreCard
                  key={store.id}
                  favorito={favoritos.has(store.id)}
                  onToggleFavorito={alternarFavorito}
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
            </HScrollRail>
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
