import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { MetricTile } from '../components/MetricTile';
import { SectionHeading } from '../components/SectionHeading';
import { SettingsList, SettingsRow } from '../components/SettingsList';
import { adminAlerts, adminMetrics } from '../marketplaceContent';
import { Section, SectionInner } from '../ui';
import { FourUpGrid } from './screenLayout';

export function AdminPanelScreen() {
  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <SectionHeading
            title="Panel general"
            chip="Plataforma"
            subtitle="Estado general de LaFranciaGO."
          />

          <FourUpGrid>
            {adminMetrics.map((metric) => (
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
          <SectionHeading title="Alertas" subtitle="Lo que necesita atención." />

          <SettingsList>
            {adminAlerts.map((alert) => (
              <SettingsRow
                key={alert.id}
                icon={alert.icon}
                title={alert.title}
                subtitle={alert.description}
              />
            ))}
          </SettingsList>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
