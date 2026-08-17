import { useMemo } from 'react';
import { Clock3, MapPin, Phone, ShoppingCart, Store, Truck } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { stores } from '../marketplaceContent';
import { findStoreById, formatDistance, formatMoney } from '../marketplace.utils';
import {
  AccentBadge,
  Badge,
  Card,
  CardPad,
  CardText,
  CardTitle,
  LinkButton,
  PrimaryButton,
  Section,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionText,
  SectionTitle,
  StrongPrice,
} from '../ui';
import { CardStack, InlineWrap, SectionStack, TagRail } from './screenLayout';
import { DetailList, DetailRow, ProfileGrid, ProfileNotes, ProductGrid, StoreStatusBadge } from './StoreProfileScreenStyled';

export function StoreProfileScreen() {
  const { storeId = '' } = useParams();

  const store = useMemo(() => findStoreById(storeId) ?? stores[0], [storeId]);

  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Perfil de comercio con catálogo, horarios, contacto y accesos al pedido."
    >
      <Section>
        <SectionInner>
          <ProfileGrid>
            <Card>
              <CardPad>
                <SectionStack>
                  <SectionKicker>Perfil de comercio</SectionKicker>
                  <SectionTitle>{store.name}</SectionTitle>
                  <SectionText>{store.summary}</SectionText>

                  <InlineWrap>
                    <StoreStatusBadge data-open={store.openNow}>
                      {store.openNow ? 'Abierto ahora' : 'Cerrado'}
                    </StoreStatusBadge>
                    <Badge>{store.rating.toFixed(1)} ★</Badge>
                    <Badge>{store.delivery ? 'Delivery' : 'Sin delivery'}</Badge>
                    <Badge>{store.pickup ? 'Retiro' : 'Sin retiro'}</Badge>
                  </InlineWrap>

                  <TagRail>
                    {store.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </TagRail>

                  <InlineWrap>
                    <PrimaryButton to="/carrito">Ir al carrito</PrimaryButton>
                    <LinkButton to="/comercios">Volver al directorio</LinkButton>
                  </InlineWrap>
                </SectionStack>
              </CardPad>
            </Card>

            <Card>
              <CardPad>
                <SectionStack>
                  <SectionKicker>Datos del negocio</SectionKicker>
                  <CardTitle>Información operativa</CardTitle>

                  <DetailList>
                    <DetailRow>
                      <MapPin size={16} aria-hidden="true" />
                      <span>
                        {store.address} · {formatDistance(store.distanceKm)}
                      </span>
                    </DetailRow>
                    <DetailRow>
                      <Phone size={16} aria-hidden="true" />
                      <span>{store.phone}</span>
                    </DetailRow>
                    <DetailRow>
                      <Clock3 size={16} aria-hidden="true" />
                      <span>{store.hours}</span>
                    </DetailRow>
                    <DetailRow>
                      <Truck size={16} aria-hidden="true" />
                      <span>Mínimo de compra {formatMoney(store.minOrder)}</span>
                    </DetailRow>
                  </DetailList>

                  <ProfileNotes>
                    <CardText>
                      El perfil del comercio deja lista la experiencia para mostrar stock, precio y
                      disponibilidad por producto.
                    </CardText>
                    <CardText>
                      El siguiente paso natural es conectar este perfil con el panel del negocio.
                    </CardText>
                  </ProfileNotes>
                </SectionStack>
              </CardPad>
            </Card>
          </ProfileGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Catálogo</SectionKicker>
            <SectionTitle>Productos destacados del comercio</SectionTitle>
            <SectionText>
              Los productos destacados del perfil muestran el catálogo inicial del negocio.
            </SectionText>
          </SectionHeader>

          <ProductGrid>
            {store.featuredProducts.map((product) => (
              <Card key={product.id}>
                <CardPad>
                  <CardStack>
                    <AccentBadge>{product.badge ?? 'Disponible'}</AccentBadge>
                    <CardTitle>{product.name}</CardTitle>
                    <StrongPrice>{formatMoney(product.price)}</StrongPrice>
                    <CardText>
                      <Store size={16} aria-hidden="true" /> {store.name}
                    </CardText>
                  </CardStack>
                </CardPad>
              </Card>
            ))}
          </ProductGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>Preparado para escalar</SectionKicker>
                <SectionTitle>El comercio podrá gestionar catálogo, pedidos y promociones.</SectionTitle>
                <SectionText>
                  Este perfil deja el espacio listo para que después el negocio entre a su panel y
                  administre precios, stock y estados del pedido.
                </SectionText>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
