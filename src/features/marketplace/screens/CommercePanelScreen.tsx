import {
  BadgePercent,
  BarChart3,
  Boxes,
  ClipboardList,
  LayoutGrid,
  PackagePlus,
  ReceiptText,
  Settings,
  Store,
  Users,
} from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { commerceHighlights, commerceMetrics, commerceOrders, inventory } from '../marketplaceContent';
import { formatMoney } from '../marketplace.utils';
import { Section, SectionInner } from '../ui';
import { FourUpGrid } from './screenLayout';
import { MetricTile } from '../components/MetricTile';
import { SectionHeading } from '../components/SectionHeading';
import { SettingsList, SettingsRow } from '../components/SettingsList';
import { PanelRowValue } from './CommercePanelScreenStyled';

const managementSections = [
  {
    id: 'overview',
    title: 'Inicio / resumen',
    description: 'Ventas del día, alertas y accesos rápidos.',
    icon: Store,
  },
  {
    id: 'orders',
    title: 'Pedidos',
    description: 'Estados, tiempos y cambios de fase.',
    icon: ClipboardList,
  },
  {
    id: 'products',
    title: 'Productos',
    description: 'Precios, stock, fotos y visibilidad.',
    icon: Boxes,
  },
  {
    id: 'categories',
    title: 'Categorías',
    description: 'Organización propia por comercio.',
    icon: LayoutGrid,
  },
  {
    id: 'clients',
    title: 'Clientes',
    description: 'Frecuentes, direcciones y hábitos.',
    icon: Users,
  },
  {
    id: 'promotions',
    title: 'Promociones',
    description: 'Combos, descuentos y destacados.',
    icon: BadgePercent,
  },
  {
    id: 'reports',
    title: 'Reportes',
    description: 'Ventas, ticket promedio y top productos.',
    icon: BarChart3,
  },
  {
    id: 'settings',
    title: 'Configuración',
    description: 'Horarios, reparto y visibilidad.',
    icon: Settings,
  },
];

export function CommercePanelScreen() {
  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <SectionHeading
            title="Panel del comercio"
            chip="Hoy"
            subtitle="Resumen de la operación del día."
          />

          <FourUpGrid>
            {commerceMetrics.map((metric) => (
              <MetricTile
                key={metric.id}
                label={metric.label}
                value={metric.value}
                help={metric.trend}
              />
            ))}
          </FourUpGrid>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeading title="Pedidos recientes" seeAllTo="/panel/comercio" seeAllLabel="Ver todos" />

          <SettingsList>
            {commerceOrders.map((order) => (
              <SettingsRow
                key={order.id}
                icon={ClipboardList}
                title={order.customer}
                subtitle={order.status}
                trailing={<PanelRowValue>{formatMoney(order.total)}</PanelRowValue>}
              />
            ))}
          </SettingsList>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeading
            title="Stock y productos"
            subtitle="Precios y disponibilidad."
            seeAllTo="/panel/comercio/producto"
            seeAllLabel="Nuevo producto"
          />

          <SettingsList>
            {inventory.map((item) => (
              <SettingsRow
                key={item.id}
                icon={Boxes}
                title={item.name}
                subtitle={`${item.stock} en stock · ${item.status}`}
                trailing={<PanelRowValue>{formatMoney(item.price)}</PanelRowValue>}
              />
            ))}
          </SettingsList>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <SectionHeading title="Gestión" subtitle="Todo el panel ordenado por tarea." />

          <SettingsList>
            {managementSections.map((section) => (
              <SettingsRow
                key={section.id}
                icon={section.icon}
                title={section.title}
                subtitle={section.description}
                to={section.id === 'products' ? '/panel/comercio/producto' : '/panel/comercio'}
              />
            ))}
          </SettingsList>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}