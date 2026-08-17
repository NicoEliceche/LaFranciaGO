import { Bike, Clock3, MapPin, Route, Truck } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { deliveryHighlights, deliveryMetrics, deliveryTasks } from '../marketplaceContent';
import { formatDistance, formatMoney } from '../marketplace.utils';
import {
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
import { CardStack, CardTopRow, CompactTitle, InlineWrap, SectionStack } from './screenLayout';
import { DeliveryGrid, DeliveryStatusBadge, RouteList } from './DeliveryPanelScreenStyled';

export function DeliveryPanelScreen() {
  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Panel de delivery para aceptar pedidos, ver distancia y seguir estados."
    >
      <Section>
        <SectionInner>
          <SectionStack>
            <SectionKicker>Panel delivery</SectionKicker>
            <SectionTitle>Pedidos disponibles y ruta clara.</SectionTitle>
            <SectionText>
              El repartidor ve qué pedidos están listos para tomar y qué gana por cada entrega.
            </SectionText>
          </SectionStack>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <DeliveryGrid>
            {deliveryMetrics.map((metric) => (
              <Card key={metric.id}>
                <CardPad>
                  <CardStack>
                    <CardTitle>{metric.label}</CardTitle>
                    <StrongPrice>{metric.value}</StrongPrice>
                    <CardText>{metric.help}</CardText>
                  </CardStack>
                </CardPad>
              </Card>
            ))}
          </DeliveryGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <CardTitle>Pedidos para aceptar</CardTitle>
                <RouteList>
                  {deliveryTasks.map((task) => (
                    <Card key={task.id}>
                      <CardPad>
                        <CardStack>
                          <CardTopRow>
                            <div>
                              <CompactTitle>{task.store}</CompactTitle>
                              <CardText>{task.customer}</CardText>
                            </div>
                            <StrongPrice>{formatMoney(task.payout)}</StrongPrice>
                          </CardTopRow>

                          <InlineWrap>
                            <Badge>
                              <MapPin size={16} aria-hidden="true" /> {formatDistance(task.distanceKm)}
                            </Badge>
                            <DeliveryStatusBadge>{task.status}</DeliveryStatusBadge>
                          </InlineWrap>
                        </CardStack>
                      </CardPad>
                    </Card>
                  ))}
                </RouteList>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>Estados</SectionKicker>
                <SectionTitle>Seguimiento simple y comprensible</SectionTitle>
                <SectionText>
                  Pedido recibido, preparado, asignado, retirado, en camino y entregado.
                </SectionText>

                <InlineWrap>
                  <Badge>
                    <Bike size={16} aria-hidden="true" /> Aceptar
                  </Badge>
                  <Badge>
                    <Route size={16} aria-hidden="true" /> Retirar
                  </Badge>
                  <Badge>
                    <Truck size={16} aria-hidden="true" /> En camino
                  </Badge>
                  <Badge>
                    <Clock3 size={16} aria-hidden="true" /> Entregar
                  </Badge>
                </InlineWrap>

                <InlineWrap>
                  <PrimaryButton to="/panel/repartidor">Tomar pedido</PrimaryButton>
                  <LinkButton to="/panel/repartidor">Ver historial</LinkButton>
                </InlineWrap>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>Lista para escalar</SectionKicker>
                <SectionTitle>La logística entra después sin rehacer esta base.</SectionTitle>
                <SectionText>
                  Esta pantalla deja la base lista para sumar mapa, geolocalización y notificaciones
                  más adelante.
                </SectionText>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
