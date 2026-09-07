import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BadgePercent,
  Bell,
  CreditCard,
  MapPin,
  MessageSquare,
  PackageSearch,
  UserCheck,
} from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { SectionHeading } from '../components/SectionHeading';
import { marcarLeidas, useNotificaciones } from '../useNotificaciones';
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
  NotificationFeed,
  NotificationUnreadDot,
} from './NotificationsScreenStyled';

/**
 * Las notificaciones de quien está adentro.
 *
 * Al abrir la pantalla se dan por leídas: si alguien las está mirando, ya se
 * enteró, y dejarlas marcadas como nuevas obligaría a un gesto extra que no
 * agrega nada.
 */

const ICONOS = {
  pedido: PackageSearch,
  envio: MapPin,
  oferta: BadgePercent,
  postulacion: UserCheck,
  chat: MessageSquare,
  pago: CreditCard,
} as const;

/** "Hoy 09:14", "Ayer", "12/08": cuánto hace, en la forma más corta que sirva. */
function cuando(iso: string) {
  const fecha = new Date(iso.replace(' ', 'T') + 'Z');

  if (Number.isNaN(fecha.getTime())) {
    return '';
  }

  const dias = Math.floor((Date.now() - fecha.getTime()) / 86_400_000);

  if (dias === 0) {
    return fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  }

  if (dias === 1) {
    return 'Ayer';
  }

  return fecha.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });
}

export function NotificationsScreen() {
  const { notificaciones, sinLeer, cargadas } = useNotificaciones();

  /* Se marcan al entrar, no al salir: quien abrió la pantalla ya las vio. */
  useEffect(() => {
    if (sinLeer > 0) {
      void marcarLeidas();
    }
  }, [sinLeer]);

  if (notificaciones.length === 0) {
    /* Mientras cargan no se dice "no tenés": sería un cartel que dura lo que
       la respuesta y contradice la lista que aparece después. */
    if (!cargadas) {
      return (
        <MarketplaceFrame showSearch={false}>
          <Section>
            <SectionInner />
          </Section>
        </MarketplaceFrame>
      );
    }

    return (
      <MarketplaceFrame showSearch={false}>
        <Section>
          <SectionInner>
            <EmptyState
              icon={Bell}
              title="No tenés notificaciones"
              text="Acá vas a ver el estado de tus pedidos y las novedades de los comercios."
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
              chip={sinLeer > 0 ? `${sinLeer} nuevas` : undefined}
              subtitle="Lo que pasó con tus pedidos y tu cuenta."
            />

            <NotificationFeed>
              {notificaciones.map((item) => {
                const Icon = ICONOS[item.tipo] ?? Bell;
                const sinLeerEsta = !item.leida_en;

                const contenido = (
                  <>
                    <NotificationCardIcon>
                      <Icon size={18} aria-hidden="true" />
                    </NotificationCardIcon>

                    <NotificationCardCopy>
                      <NotificationCardTop>
                        <NotificationCardTitle>{item.titulo}</NotificationCardTitle>
                        <NotificationCardDate>{cuando(item.creado_en)}</NotificationCardDate>
                      </NotificationCardTop>
                      {item.texto ? (
                        <NotificationCardSubtitle>{item.texto}</NotificationCardSubtitle>
                      ) : null}
                    </NotificationCardCopy>

                    {sinLeerEsta ? <NotificationUnreadDot aria-label="Sin leer" /> : null}
                  </>
                );

                /* Con enlace la tarjeta entera lleva a donde pasó la cosa:
                   un aviso que no lleva a ningún lado obliga a buscar. */
                return item.enlace ? (
                  <NotificationCard
                    key={item.id}
                    as={Link}
                    to={item.enlace}
                    data-unread={sinLeerEsta}
                  >
                    {contenido}
                  </NotificationCard>
                ) : (
                  <NotificationCard key={item.id} data-unread={sinLeerEsta}>
                    {contenido}
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
