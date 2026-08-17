import { useMemo, useState } from 'react';
import {
  BadgePercent,
  MapPinned,
  PackageSearch,
  ShieldCheck,
  Store,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import {
  categories,
  comparisons,
  customerHighlights,
  highlights,
  offers,
  stores,
} from '../marketplaceContent';
import { matchesQuery, sortOffers, formatMoney, formatDistance } from '../marketplace.utils';
import type { MarketplaceFilter } from '../marketplace.types';
import {
  AccentBadge,
  Badge,
  Card,
  CardPad,
  CardText,
  CardTitle,
  FourColumnGrid,
  Grid,
  LinkButton,
  Price,
  PrimaryButton,
  Rail,
  RailItem,
  Section,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionText,
  SectionTitle,
  SplitGrid,
  StrongPrice,
  TwoColumnGrid,
} from '../ui';
import {
  AccessGrid,
  ActionGrid,
  CardCopy,
  ComparisonStoreMeta,
  ComparisonStoreTitle,
  HeroLeadItem,
  HeroLeadList,
  HighlightCopy,
  HighlightsGrid,
  SmallCardTitle,
  SpacedCardTitle,
} from './MarketplaceHomeScreenStyled';
import { CardIdentityRow, CardStack, CardTopRow, InlineWrap, LargeBottomSpacing, RightAlign, SectionStack, TagRail } from './screenLayout';

const matchesProductQuery = (query: string, ...values: Array<string | number | boolean | undefined>) =>
  matchesQuery(query, ...values);

export function MarketplaceHomeScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<MarketplaceFilter>('all');

  const filteredOffers = useMemo(
    () =>
      sortOffers(
        offers.filter((offer) =>
          matchesProductQuery(query, offer.product, offer.store, offer.category, offer.tags.join(' '), offer.highlight),
        ),
        filter,
      ),
    [filter, query],
  );

  const filteredComparisons = useMemo(
    () =>
      comparisons.filter((comparison) =>
        matchesProductQuery(query, comparison.product, comparison.category, comparison.badge),
      ),
    [query],
  );

  const filteredCategories = useMemo(
    () => categories.filter((category) => matchesProductQuery(query, category.name, category.description)),
    [query],
  );

  const filteredStores = useMemo(
    () =>
      stores.filter((store) =>
        matchesProductQuery(query, store.name, store.category, store.summary, store.tags.join(' ')),
      ),
    [query],
  );

  const heroOffers = filteredOffers.slice(0, 4);
  const topComparison = filteredComparisons[0];

  return (
    <MarketplaceFrame
      query={query}
      onQueryChange={setQuery}
      activeFilter={filter}
      onFilterChange={(value) => setFilter(value as MarketplaceFilter)}
      footerText="Inicio del marketplace: ofertas, comparación de precios, comercios cercanos y accesos por rol."
    >
      <Section>
        <SectionInner>
          <SplitGrid>
            <Card>
              <CardPad>
                <SectionStack>
                  <SectionKicker>Marketplace local</SectionKicker>
                  <SectionTitle>Todo lo que hay cerca tuyo, en un solo lugar.</SectionTitle>
                  <SectionText>
                    La primera vista ya funciona como un marketplace real: buscás un producto,
                    comparás comercios y seguís el pedido sin navegar una landing vacía.
                  </SectionText>

                  <HeroLeadList>
                    <HeroLeadItem>Buscá productos por nombre, categoría o comercio.</HeroLeadItem>
                    <HeroLeadItem>Compará precios y disponibilidad en negocios cercanos.</HeroLeadItem>
                    <HeroLeadItem>Entrá al perfil de cada comercio y recorré su catálogo.</HeroLeadItem>
                  </HeroLeadList>

                  <HighlightsGrid>
                    {customerHighlights.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Card key={item.id}>
                          <CardPad>
                            <CardCopy>
                              <AccentBadge>
                                <Icon size={16} aria-hidden="true" />
                              </AccentBadge>
                              <SmallCardTitle>{item.title}</SmallCardTitle>
                              <HighlightCopy>{item.description}</HighlightCopy>
                            </CardCopy>
                          </CardPad>
                        </Card>
                      );
                    })}
                  </HighlightsGrid>

                  <ActionGrid>
                    <PrimaryButton to="/comercios">Ver comercios</PrimaryButton>
                    <LinkButton to="/panel/comercio">Panel comercio</LinkButton>
                  </ActionGrid>
                </SectionStack>
              </CardPad>
            </Card>

            <Card>
              <CardPad>
                <SectionStack>
                  <SectionKicker>Resultados rápidos</SectionKicker>
                  <CardTitle>Opciones visibles ahora</CardTitle>
                  <CardText>
                    Los resultados se ordenan por precio, cercanía o modalidad de entrega.
                  </CardText>

                  <CardStack>
                    {heroOffers.map((offer) => (
                      <Card key={offer.id}>
                        <CardPad>
                          <CardStack>
                            <CardTopRow>
                              <div>
                                <AccentBadge>{offer.highlight}</AccentBadge>
                                <SpacedCardTitle>{offer.product}</SpacedCardTitle>
                                <CardText>{offer.store}</CardText>
                              </div>

                              <RightAlign>
                                <StrongPrice>{formatMoney(offer.price)}</StrongPrice>
                                <CardText>
                                  antes {formatMoney(offer.oldPrice)} · -{offer.discount}%
                                </CardText>
                              </RightAlign>
                            </CardTopRow>

                            <CardText>
                              {formatDistance(offer.distanceKm)} · {offer.eta} · {offer.rating.toFixed(1)} ★
                            </CardText>

                            <TagRail>
                              {offer.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                              ))}
                            </TagRail>
                          </CardStack>
                        </CardPad>
                      </Card>
                    ))}
                  </CardStack>

                  {topComparison && (
                    <Card>
                      <CardPad>
                        <CardStack>
                          <AccentBadge>{topComparison.badge}</AccentBadge>
                          <CardTitle>{topComparison.product}</CardTitle>
                          <CardText>{topComparison.category}</CardText>
                          <InlineWrap>
                            <Badge>{topComparison.offers.length} comercios</Badge>
                            <Badge>Comparación directa</Badge>
                          </InlineWrap>
                        </CardStack>
                      </CardPad>
                    </Card>
                  )}
                </SectionStack>
              </CardPad>
            </Card>
          </SplitGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Beneficios</SectionKicker>
            <SectionTitle>Base pensada para marketplace, no para catálogo estático.</SectionTitle>
            <SectionText>
              El objetivo es que la gente encuentre el mejor precio y que cada comercio tenga su
              propia página operable.
            </SectionText>
          </SectionHeader>

          <FourColumnGrid>
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.id}>
                  <CardPad>
                    <CardStack>
                      <AccentBadge>
                        <Icon size={16} aria-hidden="true" />
                      </AccentBadge>
                      <SmallCardTitle>{item.title}</SmallCardTitle>
                      <CardText>{item.description}</CardText>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </FourColumnGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Ofertas</SectionKicker>
            <SectionTitle>Ofertas destacadas</SectionTitle>
            <SectionText>El filtro activo ordena por precio, cercanía o entrega.</SectionText>
          </SectionHeader>

          <Rail>
            {filteredOffers.map((offer) => (
              <RailItem key={offer.id}>
                <CardPad>
                  <CardStack>
                    <AccentBadge>{offer.highlight}</AccentBadge>
                    <CardTitle>{offer.product}</CardTitle>
                    <CardText>{offer.store}</CardText>
                    <StrongPrice>{formatMoney(offer.price)}</StrongPrice>
                    <CardText>
                      antes {formatMoney(offer.oldPrice)} · -{offer.discount}%
                    </CardText>
                    <CardText>
                      {formatDistance(offer.distanceKm)} · {offer.eta}
                    </CardText>
                    <TagRail>
                      {offer.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </TagRail>
                    <LinkButton to={`/productos/${offer.id}`}>Ver producto</LinkButton>
                  </CardStack>
                </CardPad>
              </RailItem>
            ))}
          </Rail>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Comparar</SectionKicker>
            <SectionTitle>Mejores precios cerca tuyo</SectionTitle>
            <SectionText>
              El mismo producto en distintos comercios para que el usuario compare antes de
              comprar.
            </SectionText>
          </SectionHeader>

          <TwoColumnGrid>
            {filteredComparisons.map((comparison) => {
              const sortedOffers = [...comparison.offers].sort((a, b) => a.price - b.price);
              const bestOffer = sortedOffers[0];

              return (
                <Card key={comparison.id}>
                  <CardPad>
                    <CardStack>
                      <CardTopRow>
                        <div>
                          <AccentBadge>{comparison.badge}</AccentBadge>
                          <SpacedCardTitle>{comparison.product}</SpacedCardTitle>
                          <CardText>{comparison.category}</CardText>
                        </div>

                        <RightAlign>
                          <StrongPrice>{formatMoney(bestOffer.price)}</StrongPrice>
                          <CardText>mejor precio</CardText>
                        </RightAlign>
                      </CardTopRow>

                      <CardStack>
                        {sortedOffers.map((offer) => (
                          <Card key={`${comparison.id}-${offer.store}`}>
                            <CardPad>
                              <CardTopRow>
                                <div>
                                  <ComparisonStoreTitle>{offer.store}</ComparisonStoreTitle>
                                  <ComparisonStoreMeta>
                                    {formatDistance(offer.distanceKm)} · {offer.eta} ·{' '}
                                    {offer.openNow ? 'Abierto' : 'Cerrado'}
                                  </ComparisonStoreMeta>
                                </div>

                                <Price>{formatMoney(offer.price)}</Price>
                              </CardTopRow>
                            </CardPad>
                          </Card>
                        ))}
                      </CardStack>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </TwoColumnGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Categorías</SectionKicker>
            <SectionTitle>Comprar por categoría</SectionTitle>
            <SectionText>
              La navegación rápida reduce fricción cuando el usuario no quiere escribir el
              buscador.
            </SectionText>
          </SectionHeader>

          <FourColumnGrid>
            {filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Card key={category.id}>
                  <CardPad>
                    <CardStack>
                      <AccentBadge>
                        <Icon size={16} aria-hidden="true" />
                      </AccentBadge>
                      <SmallCardTitle>{category.name}</SmallCardTitle>
                      <CardText>{category.description}</CardText>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </FourColumnGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Negocios</SectionKicker>
            <SectionTitle>Comercios cerca tuyo</SectionTitle>
            <SectionText>
              Cada comercio tiene un perfil con catálogo, horarios, delivery y retiro.
            </SectionText>
          </SectionHeader>

          <TwoColumnGrid>
            {filteredStores.map((store) => {
              const Icon = store.icon;

              return (
                <Card key={store.id}>
                  <CardPad>
                    <CardStack>
                      <CardTopRow>
                        <CardIdentityRow>
                          <AccentBadge>
                            <Icon size={16} aria-hidden="true" />
                          </AccentBadge>
                          <div>
                            <SmallCardTitle>{store.name}</SmallCardTitle>
                            <CardText>{store.category}</CardText>
                          </div>
                        </CardIdentityRow>
                        <Badge>{store.rating.toFixed(1)} ★</Badge>
                      </CardTopRow>

                      <CardStack>
                        <CardText>
                          {store.address} · {formatDistance(store.distanceKm)}
                        </CardText>
                        <CardText>{store.summary}</CardText>
                        <CardText>
                          {store.openNow ? 'Abierto ahora' : 'Cerrado'} ·{' '}
                          {store.delivery ? 'Delivery' : 'Sin delivery'} ·{' '}
                          {store.pickup ? 'Retiro' : 'Sin retiro'}
                        </CardText>
                        <CardText>Mínimo de compra {formatMoney(store.minOrder)}</CardText>
                      </CardStack>

                      <TagRail>
                        {store.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </TagRail>

                      <CardStack>
                        {store.featuredProducts.map((product) => (
                          <Card key={product.id}>
                            <CardPad>
                              <CardTopRow>
                                <div>
                                  <ComparisonStoreTitle>{product.name}</ComparisonStoreTitle>
                                  {product.badge && <CardText>{product.badge}</CardText>}
                                </div>
                                <Price>{formatMoney(product.price)}</Price>
                              </CardTopRow>
                            </CardPad>
                          </Card>
                        ))}
                      </CardStack>

                      <LinkButton to={`/comercios/${store.id}`}>Ver perfil del comercio</LinkButton>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </TwoColumnGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Accesos</SectionKicker>
            <SectionTitle>Páginas internas por rol</SectionTitle>
            <SectionText>
              La web tiene rutas para cliente, comercio, repartidor y administración.
            </SectionText>
          </SectionHeader>

          <AccessGrid>
            {[
              {
                title: 'Mi cuenta',
                text: 'Direcciones, favoritos y pedidos.',
                icon: MapPinned,
                to: '/mi-cuenta',
              },
              {
                title: 'Panel comercio',
                text: 'Productos, stock, promociones y pedidos.',
                icon: Store,
                to: '/panel/comercio',
              },
              {
                title: 'Panel delivery',
                text: 'Viajes, entregas y ganancias.',
                icon: Truck,
                to: '/panel/repartidor',
              },
              {
                title: 'Panel admin',
                text: 'Usuarios, comercios, comisiones y alertas.',
                icon: ShieldCheck,
                to: '/panel/admin',
              },
            ].map((entry) => {
              const Icon = entry.icon;

              return (
                <Card key={entry.to}>
                  <CardPad>
                    <CardStack>
                      <AccentBadge>
                        <Icon size={16} aria-hidden="true" />
                      </AccentBadge>
                      <SmallCardTitle>{entry.title}</SmallCardTitle>
                      <CardText>{entry.text}</CardText>
                      <LinkButton to={entry.to}>Abrir página</LinkButton>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </AccessGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>Próximo paso</SectionKicker>
                <SectionTitle>La base ya está lista para seguir con las pantallas internas.</SectionTitle>
                <SectionText>
                  El siguiente nivel es conectar login, pedidos, pagos y el flujo real de
                  administración.
                </SectionText>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
