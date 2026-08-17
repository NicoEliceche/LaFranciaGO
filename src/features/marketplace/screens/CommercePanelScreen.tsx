import { ClipboardList, Boxes, BadgePercent, Store, PackagePlus } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { commerceHighlights, commerceMetrics, commerceOrders, inventory } from '../marketplaceContent';
import { formatMoney } from '../marketplace.utils';
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
import { CardStack, CardTopRow, CompactTitle, InlineWrap, SectionStack, TagRail } from './screenLayout';
import { DashboardGrid, InventoryList, ManagementGrid } from './CommercePanelScreenStyled';

export function CommercePanelScreen() {
  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Panel de comercio para pedidos, stock, promociones y control operativo."
    >
      <Section>
        <SectionInner>
          <SectionStack>
            <SectionKicker>Panel comercio</SectionKicker>
            <SectionTitle>Operación diaria del negocio.</SectionTitle>
            <SectionText>
              El comercio administra productos, precios, stock, promociones y pedidos desde una
              sola vista.
            </SectionText>
          </SectionStack>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <DashboardGrid>
            {commerceMetrics.map((metric) => (
              <Card key={metric.id}>
                <CardPad>
                  <CardStack>
                    <CardTitle>{metric.label}</CardTitle>
                    <StrongPrice>{metric.value}</StrongPrice>
                    <Badge>{metric.trend}</Badge>
                  </CardStack>
                </CardPad>
              </Card>
            ))}
          </DashboardGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <ManagementGrid>
            <Card>
              <CardPad>
                <SectionStack>
                  <CardTitle>Pedidos recientes</CardTitle>
                  <CardStack>
                    {commerceOrders.map((order) => (
                      <Card key={order.id}>
                        <CardPad>
                          <CardTopRow>
                            <div>
                              <CompactTitle>{order.customer}</CompactTitle>
                              <CardText>{order.status}</CardText>
                            </div>
                            <StrongPrice>{formatMoney(order.total)}</StrongPrice>
                          </CardTopRow>
                        </CardPad>
                      </Card>
                    ))}
                  </CardStack>
                </SectionStack>
              </CardPad>
            </Card>

            <Card>
              <CardPad>
                <SectionStack>
                  <CardTitle>Stock y productos</CardTitle>
                  <InventoryList>
                    {inventory.map((item) => (
                      <Card key={item.id}>
                        <CardPad>
                          <CardStack>
                            <CardTopRow>
                              <div>
                                <CompactTitle>{item.name}</CompactTitle>
                                <CardText>
                                  Stock {item.stock} · {item.status}
                                </CardText>
                              </div>
                              <StrongPrice>{formatMoney(item.price)}</StrongPrice>
                            </CardTopRow>
                            <InlineWrap>
                              <Badge>
                                <Boxes size={16} aria-hidden="true" /> Inventario
                              </Badge>
                              <Badge>
                                <BadgePercent size={16} aria-hidden="true" /> Promociones
                              </Badge>
                            </InlineWrap>
                          </CardStack>
                        </CardPad>
                      </Card>
                    ))}
                  </InventoryList>
                </SectionStack>
              </CardPad>
            </Card>
          </ManagementGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Acciones rápidas</SectionKicker>
            <SectionTitle>Gestión operativa sin fricción</SectionTitle>
            <SectionText>Alta, baja, edición de productos y promociones destacadas.</SectionText>
          </SectionHeader>

          <TagRail>
            <PrimaryButton to="/panel/comercio">
              <PackagePlus size={18} aria-hidden="true" />
              Agregar producto
            </PrimaryButton>
            <LinkButton to="/panel/comercio">
              <ClipboardList size={18} aria-hidden="true" />
              Ver pedidos
            </LinkButton>
            <LinkButton to="/panel/comercio">
              <Store size={18} aria-hidden="true" />
              Ajustar comercio
            </LinkButton>
          </TagRail>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>El panel está listo para crecer</SectionKicker>
                <SectionTitle>Productos, promos y stock en una sola base.</SectionTitle>
                <SectionText>
                  Cuando se conecte el backend, esta pantalla ya tiene la estructura para operar
                  sin rehacer la interfaz.
                </SectionText>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
