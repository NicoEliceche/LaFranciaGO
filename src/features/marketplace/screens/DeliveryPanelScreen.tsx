import { Route } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { MetricTile } from '../components/MetricTile';
import { SectionHeading } from '../components/SectionHeading';
import { SettingsList, SettingsRow } from '../components/SettingsList';
import { deliveryMetrics, deliveryTasks } from '../marketplaceContent';
import { formatDistance, formatMoney } from '../marketplace.utils';
import { Section, SectionInner } from '../ui';
import { FourUpGrid } from './screenLayout';
import { DeliveryRowValue } from './DeliveryPanelScreenStyled';

export function DeliveryPanelScreen() {
  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <SectionHeading
            title="Panel del repartidor"
            chip="Hoy"
            subtitle="Tu resumen de entregas."
          />

          <FourUpGrid>
            {deliveryMetrics.map((metric) => (
              <MetricTile
                key={metric.id}
                label={metric.label}
                value={metric.value}
                help={metric.help}
              />
            ))}
          </FourUpGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeading title="Entregas" subtitle="Pedidos asignados y disponibles." />

          <SettingsList>
            {deliveryTasks.map((task) => (
              <SettingsRow
                key={task.id}
                icon={Route}
                title={`${task.store} → ${task.customer}`}
                subtitle={`${formatDistance(task.distanceKm)} · ${task.status}`}
                trailing={<DeliveryRowValue>{formatMoney(task.payout)}</DeliveryRowValue>}
              />
            ))}
          </SettingsList>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
