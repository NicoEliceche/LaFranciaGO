import { Bell, Heart, PackageSearch, Store } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { favorites, stores } from '../marketplaceContent';
import { formatMoney } from '../marketplace.utils';
import {
  Badge,
  Card,
  CardText,
  CardTitle,
  LinkButton,
  PrimaryButton,
  SectionInner,
  SectionKicker,
  SectionText,
  SectionTitle,
  StrongPrice,
} from '../ui';
import {
  CardStack,
  CardTopRow,
  CompactCardPad,
  CompactCardStack,
  CompactSection,
  CompactSectionStack,
  CompactTitle,
  InlineWrap,
  TagRail,
} from './screenLayout';
import { FavoriteMeta, FavoritesGrid, FavoritesList, FavoritesSummary } from './FavoritesScreenStyled';

const favoriteStores = stores.filter((store) =>
  favorites.some((favorite) => favorite.store.toLowerCase() === store.name.toLowerCase()),
);

export function FavoritesScreen() {
  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Favoritos y alertas rápidas para guardar y reordenar."
    >
      <CompactSection>
        <SectionInner>
          <CompactSectionStack>
            <SectionKicker>Favoritos</SectionKicker>
            <SectionTitle>Guardados y alertas.</SectionTitle>
            <SectionText>Seguí ofertas, comercios y cambios de precio sin perder tiempo.</SectionText>
          </CompactSectionStack>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <FavoritesGrid>
            <Card>
              <CompactCardPad>
                <CompactSectionStack>
                  <CardTitle>Productos</CardTitle>
                  <FavoritesList>
                    {favorites.map((favorite) => (
                      <Card key={favorite.id}>
                        <CompactCardPad>
                          <CompactCardStack>
                            <CardTopRow>
                              <div>
                                <CompactTitle>{favorite.name}</CompactTitle>
                                <CardText>{favorite.store}</CardText>
                              </div>
                              <StrongPrice>{formatMoney(favorite.price)}</StrongPrice>
                            </CardTopRow>

                            <FavoriteMeta>
                              <Badge>
                                <Heart size={16} aria-hidden="true" /> Guardado
                              </Badge>
                              <Badge>
                                <Bell size={16} aria-hidden="true" /> Campanita activa
                              </Badge>
                            </FavoriteMeta>
                          </CompactCardStack>
                        </CompactCardPad>
                      </Card>
                    ))}
                  </FavoritesList>
                </CompactSectionStack>
              </CompactCardPad>
            </Card>

            <Card>
              <CompactCardPad>
                <CompactSectionStack>
                  <CardTitle>Comercios</CardTitle>
                  <FavoritesList>
                    {favoriteStores.map((store) => (
                      <Card key={store.id}>
                        <CompactCardPad>
                          <CompactCardStack>
                            <CardTopRow>
                              <div>
                                <CompactTitle>{store.name}</CompactTitle>
                                <CardText>{store.category}</CardText>
                              </div>
                              <Badge>{store.rating.toFixed(1)} ★</Badge>
                            </CardTopRow>

                            <CardText>{store.summary}</CardText>
                            <TagRail>
                              <Badge>{store.delivery ? 'Delivery' : 'Sin delivery'}</Badge>
                              <Badge>{store.pickup ? 'Retiro' : 'Sin retiro'}</Badge>
                            </TagRail>
                          </CompactCardStack>
                        </CompactCardPad>
                      </Card>
                    ))}
                  </FavoritesList>
                </CompactSectionStack>
              </CompactCardPad>
            </Card>
          </FavoritesGrid>
        </SectionInner>
      </CompactSection>

      <CompactSection>
        <SectionInner>
          <FavoritesGrid>
            <Card>
              <CompactCardPad>
                <CompactSectionStack>
                  <CardTitle>Alertas</CardTitle>
                  <CardText>Activá avisos de precio, stock o promo en lo que más mirás.</CardText>

                  <FavoritesSummary>
                    <Badge>
                      <PackageSearch size={16} aria-hidden="true" /> Coca Cola 3L disponible
                    </Badge>
                    <Badge>
                      <Store size={16} aria-hidden="true" /> Nuevas promos en La Huerta
                    </Badge>
                    <Badge>
                      <Bell size={16} aria-hidden="true" /> Avisos por cambio de precio
                    </Badge>
                  </FavoritesSummary>

                  <InlineWrap>
                    <PrimaryButton to="/notificaciones">Configurar alertas</PrimaryButton>
                    <LinkButton to="/comercios">Seguir comprando</LinkButton>
                  </InlineWrap>
                </CompactSectionStack>
              </CompactCardPad>
            </Card>

            <Card>
              <CompactCardPad>
                <CompactSectionStack>
                  <CardTitle>Próxima compra</CardTitle>
                  <CardText>Después conectamos historial, listas y reorden automático.</CardText>
                </CompactSectionStack>
              </CompactCardPad>
            </Card>
          </FavoritesGrid>
        </SectionInner>
      </CompactSection>
    </MarketplaceFrame>
  );
}
