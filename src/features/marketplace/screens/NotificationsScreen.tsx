import { useState } from 'react';
import { BadgePercent, Bell, MapPin, PackageSearch, Store } from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { Section, SectionInner } from '../ui';
import { SectionStack } from './screenLayout';
import {
  NotificationCard,
  NotificationCardCopy,
  NotificationCardDate,
  NotificationCardIcon,
  NotificationCardSubtitle,
  NotificationCardTitle,
  NotificationCardTop,
  NotificationClearButton,
  NotificationFeed,
  NotificationUnreadDot,
} from './NotificationsScreenStyled';

type FeedItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  unread: boolean;
  icon: typeof Bell;
};

const initialFeed: FeedItem[] = [
  {
    id: 'n1',
    title: 'Tu pedido va en camino',
    subtitle: 'El repartidor ya retiró tu pedido de Almacén Juan.',
    date: 'Hoy',
    unread: true,
    icon: MapPin,
  },
  {
    id: 'n2',
    title: 'Pedido confirmado',
    subtitle: 'Panadería La Esquina aceptó tu pedido #1248.',
    date: 'Hoy',
    unread: true,
    icon: PackageSearch,
  },
  {
    id: 'n3',
    title: 'Nueva oferta cerca tuyo',
    subtitle: 'La Huerta bajó el precio de las verduras del día.',
    date: 'Ayer',
    unread: true,
    icon: BadgePercent,
  },
  {
    id: 'n4',
    title: 'Nuevo comercio en LaFranciaGO',
    subtitle: 'Carnicería Central ya está recibiendo pedidos.',
    date: '12/08',
    unread: false,
    icon: Store,
  },
];

export function NotificationsScreen() {
  const [feed, setFeed] = useState<FeedItem[]>(initialFeed);

  if (feed.length === 0) {
    return (
      <MarketplaceFrame showSearch={false}>
        <Section>
          <SectionInner>
            <EmptyState
              icon={Bell}
              title="No tenés notificaciones"
              text="Acá vas a ver el estado de tus pedidos y las ofertas cerca tuyo."
              ctaLabel="Explorar negocios"
              ctaTo="/comercios"
            />
          </SectionInner>
        </Section>
      </MarketplaceFrame>
    );
  }

  return (
    <MarketplaceFrame showSearch={false}>
      <Section>
        <SectionInner>
          <SectionStack>
            <SectionHeading
              title="Notificaciones"
              chip={`${feed.filter((item) => item.unread).length} nuevas`}
            />

            <NotificationClearButton type="button" onClick={() => setFeed([])}>
              Limpiar todo
            </NotificationClearButton>

            <NotificationFeed>
              {feed.map((item) => {
                const Icon = item.icon;

                return (
                  <NotificationCard key={item.id} data-unread={item.unread}>
                    <NotificationCardIcon>
                      <Icon size={18} aria-hidden="true" />
                    </NotificationCardIcon>

                    <NotificationCardCopy>
                      <NotificationCardTop>
                        <NotificationCardTitle>{item.title}</NotificationCardTitle>
                        <NotificationCardDate>{item.date}</NotificationCardDate>
                      </NotificationCardTop>
                      <NotificationCardSubtitle>{item.subtitle}</NotificationCardSubtitle>
                    </NotificationCardCopy>

                    {item.unread ? <NotificationUnreadDot aria-label="Sin leer" /> : null}
                  </NotificationCard>
                );
              })}
            </NotificationFeed>
          </SectionStack>
        </SectionInner>
      </Section>
    </MarketplaceFrame>
  );
}
