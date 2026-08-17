import { BadgeDollarSign, ReceiptText, ShieldCheck, Store, Truck, Users } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { adminAlerts, adminHighlights, adminMetrics } from '../marketplaceContent';
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
import { CardStack, CardTopRow, InlineWrap, SectionStack } from './screenLayout';
import { AlertGrid, AdminGrid } from './AdminPanelScreenStyled';

export function AdminPanelScreen() {
  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Panel administrador con métricas globales, alertas y módulos críticos."
    >
      <Section>
        <SectionInner>
          <SectionStack>
            <SectionKicker>Panel admin</SectionKicker>
            <SectionTitle>Control general de la plataforma.</SectionTitle>
            <SectionText>
              Desde acá se administra la operación global: comercios, usuarios, pedidos, delivery
              y finanzas.
            </SectionText>
          </SectionStack>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <AdminGrid>
            {adminMetrics.map((metric) => (
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
          </AdminGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Alertas</SectionKicker>
            <SectionTitle>Eventos que requieren atención</SectionTitle>
            <SectionText>
              Los avisos ayudan a mantener la plataforma ordenada antes de escalar a otras
              localidades.
            </SectionText>
          </SectionHeader>

          <AlertGrid>
            {adminAlerts.map((alert) => {
              const Icon = alert.icon;

              return (
                <Card key={alert.id}>
                  <CardPad>
                    <CardStack>
                      <InlineWrap>
                        <Badge>
                          <Icon size={16} aria-hidden="true" />
                        </Badge>
                        <Badge>Revisión</Badge>
                      </InlineWrap>
                      <CardTitle>{alert.title}</CardTitle>
                      <CardText>{alert.description}</CardText>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </AlertGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Módulos</SectionKicker>
            <SectionTitle>Acceso a cada área crítica</SectionTitle>
            <SectionText>
              Comercios, usuarios, pedidos, delivery y finanzas quedan separadas por módulo.
            </SectionText>
          </SectionHeader>

          <AlertGrid>
            {[
              { title: 'Comercios', icon: Store, text: 'Alta, aprobación, suspensión y catálogo.' },
              { title: 'Usuarios', icon: Users, text: 'Clientes, repartidores y roles internos.' },
              { title: 'Pedidos', icon: ReceiptText, text: 'Estados, montos y tracking operativo.' },
              { title: 'Delivery', icon: Truck, text: 'Cobertura, disponibilidad y ganancias.' },
              { title: 'Finanzas', icon: BadgeDollarSign, text: 'Comisiones, cobros y liquidaciones.' },
              { title: 'Seguridad', icon: ShieldCheck, text: 'Auditoría, permisos y alertas.' },
            ].map((module) => {
              const Icon = module.icon;

              return (
                <Card key={module.title}>
                  <CardPad>
                    <CardStack>
                      <Badge>
                        <Icon size={16} aria-hidden="true" />
                      </Badge>
                      <CardTitle>{module.title}</CardTitle>
                      <CardText>{module.text}</CardText>
                    </CardStack>
                  </CardPad>
                </Card>
              );
            })}
          </AlertGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <Card>
            <CardPad>
              <SectionStack>
                <SectionKicker>Escalabilidad</SectionKicker>
                <SectionTitle>La base administrativa queda lista para crecer.</SectionTitle>
                <SectionText>
                  La estructura ya separa responsabilidades para que después el backend y el móvil
                  puedan crecer sin rehacer el frontend.
                </SectionText>

                <InlineWrap>
                  <PrimaryButton to="/panel/admin">Abrir dashboard</PrimaryButton>
                  <LinkButton to="/comercios">Volver al marketplace</LinkButton>
                </InlineWrap>
              </SectionStack>
            </CardPad>
          </Card>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
