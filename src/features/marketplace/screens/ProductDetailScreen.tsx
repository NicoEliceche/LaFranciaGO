import { useMemo } from 'react';
import { BadgePercent, MapPin, ShoppingCart, Store, Truck } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { comparisons, offers } from '../marketplaceContent';
import { findOfferById, findStoreByName, formatDistance, formatMoney, getBestOffer } from '../marketplace.utils';
import { AccentBadge, Badge, Card, CardPad, CardText, CardTitle, LinkButton, PrimaryButton, Section, SectionHeader, SectionInner, SectionKicker, SectionText, SectionTitle, StrongPrice } from '../ui';
import { CardStack, CardTopRow, CompactTitle, InlineWrap, SectionStack, TagRail } from './screenLayout';
import { OfferList, OfferMeta, ProductHeroGrid } from './ProductDetailScreenStyled';

export function ProductDetailScreen() {
  const { productId = '' } = useParams();

  const productData = useMemo(() => getBestOffer(productId), [productId]);

  const product = useMemo(() => {
    if (productData?.kind === 'comparison') {
      return {
        name: productData.comparison.product,
        category: productData.comparison.category,
        bestPrice: productData.bestOffer.price,
        bestStore: productData.bestOffer.store,
        comparisonOffers: productData.sortedOffers,
        badge: productData.comparison.badge,
      };
    }

    const fallback = findOfferById(productId) ?? offers[0];
    return {
      name: fallback.product,
      category: fallback.category,
      bestPrice: fallback.price,
      bestStore: fallback.store,
      comparisonOffers: comparisons.find((item) => item.id === `${fallback.id}-compare`)?.offers ?? [],
      badge: fallback.highlight,
    };
  }, [productData, productId]);

  const bestStore = findStoreByName(product.bestStore);

  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Detalle de producto con comparación de precios, comercio asociado y CTA al carrito."
    >
      <Section>
        <SectionInner>
          <ProductHeroGrid>
            <Card>
              <CardPad>
                <SectionStack>
                  <SectionKicker>Producto</SectionKicker>
                  <SectionTitle>{product.name}</SectionTitle>
                  <SectionText>
                    Vista de detalle con precio destacado, comercio principal y comparación contra
                    otros negocios cercanos.
                  </SectionText>

                  <InlineWrap>
                    <AccentBadge>{product.badge}</AccentBadge>
                    <Badge>{product.category}</Badge>
                    <Badge>{product.comparisonOffers.length || 1} opciones cercanas</Badge>
                  </InlineWrap>

                  <StrongPrice>{formatMoney(product.bestPrice)}</StrongPrice>
                  <CardText>
                    <Store size={16} aria-hidden="true" /> {product.bestStore}
                  </CardText>

                  <InlineWrap>
                    <PrimaryButton to="/carrito">
                      <ShoppingCart size={18} aria-hidden="true" />
                      Agregar al carrito
                    </PrimaryButton>
                    <LinkButton to="/comercios">Seguir comprando</LinkButton>
                  </InlineWrap>
                </SectionStack>
              </CardPad>
            </Card>

            <Card>
              <CardPad>
                <SectionStack>
                  <SectionKicker>Ficha rápida</SectionKicker>
                  <CardTitle>Lo que el usuario necesita ver</CardTitle>
                  <OfferList>
                    <Card>
                      <CardPad>
                        <CardStack>
                          <CardTopRow>
                            <div>
                              <CompactTitle>Precio final</CompactTitle>
                              <CardText>Menor precio detectado en el directorio.</CardText>
                            </div>
                            <AccentBadge>
                              <BadgePercent size={16} aria-hidden="true" />
                            </AccentBadge>
                          </CardTopRow>
                          <StrongPrice>{formatMoney(product.bestPrice)}</StrongPrice>
                        </CardStack>
                      </CardPad>
                    </Card>

                    <Card>
                      <CardPad>
                        <CardStack>
                          <CompactTitle>Comercio principal</CompactTitle>
                          <CardText>
                            {bestStore?.summary ?? 'La ficha se vincula al comercio seleccionado.'}
                          </CardText>
                          {bestStore && (
                            <OfferMeta>
                              <Badge>
                                <MapPin size={16} aria-hidden="true" /> {formatDistance(bestStore.distanceKm)}
                              </Badge>
                              <Badge>{bestStore.openNow ? 'Abierto' : 'Cerrado'}</Badge>
                              <Badge>{bestStore.delivery ? 'Delivery' : 'Retiro'}</Badge>
                            </OfferMeta>
                          )}
                        </CardStack>
                      </CardPad>
                    </Card>
                  </OfferList>
                </SectionStack>
              </CardPad>
            </Card>
          </ProductHeroGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Comparación</SectionKicker>
            <SectionTitle>Más comercios con la misma referencia</SectionTitle>
            <SectionText>
              La misma ficha puede mostrar diferentes precios, distancia y disponibilidad.
            </SectionText>
          </SectionHeader>

          <CardStack>
            {product.comparisonOffers.length > 0 ? (
              product.comparisonOffers.map((offer) => (
                <Card key={`${product.name}-${offer.store}`}>
                  <CardPad>
                    <CardTopRow>
                      <div>
                        <CompactTitle>{offer.store}</CompactTitle>
                        <CardText>
                          {formatDistance(offer.distanceKm)} · {offer.eta} ·{' '}
                          {offer.openNow ? 'Abierto' : 'Cerrado'}
                        </CardText>
                      </div>
                      <StrongPrice>{formatMoney(offer.price)}</StrongPrice>
                    </CardTopRow>
                  </CardPad>
                </Card>
              ))
            ) : (
              <Card>
                <CardPad>
                  <CardStack>
                    <CompactTitle>Solo un comercio de referencia por ahora</CompactTitle>
                    <CardText>
                      Cuando existan más comercios con el mismo producto, la ficha mostrará la
                      comparación completa.
                    </CardText>
                  </CardStack>
                </CardPad>
              </Card>
            )}
          </CardStack>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>Pedido</SectionKicker>
                <SectionTitle>Listo para sumar al carrito y pasar a checkout.</SectionTitle>
                <SectionText>
                  Este detalle ya está pensado para integrarse con el flujo de compra, pago y
                  seguimiento posterior.
                </SectionText>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
