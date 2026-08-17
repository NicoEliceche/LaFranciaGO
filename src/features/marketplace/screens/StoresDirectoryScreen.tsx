import { useMemo, useState } from 'react';
import { Store, MapPinned, Truck, PackageSearch } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { categories, stores } from '../marketplaceContent';
import { matchesQuery, formatMoney, formatDistance } from '../marketplace.utils';
import type { MarketplaceFilter, StoreProfile } from '../marketplace.types';
import {
  AccentBadge,
  Badge,
  Card,
  CardText,
  CardTitle,
  FourColumnGrid,
  LinkButton,
  SectionInner,
  SectionKicker,
  SectionText,
  SectionTitle,
  TwoColumnGrid,
  Price,
} from '../ui';
import {
  CardTopRow,
  CompactCardPad,
  CompactCardStack,
  CompactInlineWrap,
  CompactSection,
  CompactSectionHeader,
  CompactSectionStack,
  TagRail,
} from './screenLayout';
import { DirectoryIntro, StoreMetaRow, StoreScore } from './StoresDirectoryScreenStyled';

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
          matchesQuery(query, store.name, store.category, store.summary, store.address, store.tags.join(' ')),
        ),
        filter,
      ),
    [filter, query],
  );

  const filteredCategories = useMemo(
    () => categories.filter((category) => matchesQuery(query, category.name, category.description)),
    [query],
  );

  return (
    <MarketplaceFrame
      query={query}
      onQueryChange={setQuery}
      activeFilter={filter}
      onFilterChange={(value) => setFilter(value as MarketplaceFilter)}
      footerText="Directorio de comercios, pensado para buscar por cercanía, categoría y modalidad de entrega."
    >
      <CompactSection>
        <SectionInner>
          <CompactSectionStack>
            <SectionKicker>Comercios</SectionKicker>
            <SectionTitle>Buscá por rubro y cercanía.</SectionTitle>
            <DirectoryIntro>
              Compará delivery, retiro y distancia sin perder tiempo.
            </DirectoryIntro>
          </CompactSectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <CompactSectionHeader>
            <SectionKicker>Categorías</SectionKicker>
            <SectionTitle>Atajo por rubro</SectionTitle>
            <SectionText>Elegí rápido sin escribir de más.</SectionText>
          </CompactSectionHeader>

          <FourColumnGrid>
            {filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Card key={category.id}>
                  <CompactCardPad>
                    <CompactCardStack>
                      <AccentBadge>
                        <Icon size={16} aria-hidden="true" />
                      </AccentBadge>
                      <CardTitle>{category.name}</CardTitle>
                      <CardText>{category.description}</CardText>
                    </CompactCardStack>
                  </CompactCardPad>
                </Card>
              );
            })}
          </FourColumnGrid>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <CompactSectionHeader>
            <SectionKicker>Comercios visibles</SectionKicker>
            <SectionTitle>Cercanos y activos</SectionTitle>
            <SectionText>Estado, distancia y perfil en una sola vista.</SectionText>
          </CompactSectionHeader>

          <TwoColumnGrid>
            {filteredStores.map((store) => {
              const Icon = store.icon;

              return (
                <Card key={store.id}>
                  <CompactCardPad>
                    <CompactCardStack>
                      <CardTopRow>
                        <div>
                          <CompactInlineWrap>
                            <AccentBadge>
                              <Icon size={16} aria-hidden="true" />
                            </AccentBadge>
                            <StoreScore>{store.rating.toFixed(1)} ★</StoreScore>
                          </CompactInlineWrap>
                          <CardTitle>{store.name}</CardTitle>
                          <CardText>{store.category}</CardText>
                        </div>

                        <Price>{formatMoney(store.minOrder)}</Price>
                      </CardTopRow>

                      <CardText>{store.summary}</CardText>

                      <StoreMetaRow>
                        <Badge>{store.openNow ? 'Abierto' : 'Cerrado'}</Badge>
                        <Badge>{store.delivery ? 'Delivery' : 'Sin delivery'}</Badge>
                        <Badge>{store.pickup ? 'Retiro' : 'Sin retiro'}</Badge>
                      </StoreMetaRow>

                      <CardText>
                        <MapPinned size={16} aria-hidden="true" /> {store.address} · {formatDistance(store.distanceKm)}
                      </CardText>
                      <CardText>{store.hours}</CardText>
                      <CardText>{store.phone}</CardText>

                      <TagRail>
                        {store.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </TagRail>

                      <LinkButton to={`/comercios/${store.id}`}>Abrir perfil</LinkButton>
                    </CompactCardStack>
                  </CompactCardPad>
                </Card>
              );
            })}
          </TwoColumnGrid>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <Card>
            <CompactCardPad>
              <CompactSectionStack>
                <SectionKicker>Qué habilita este directorio</SectionKicker>
                <SectionTitle>Comparar y comprar</SectionTitle>
                <SectionText>Después se conecta con login, carrito y checkout.</SectionText>
              </CompactSectionStack>
            </CompactCardPad>
          </Card>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
