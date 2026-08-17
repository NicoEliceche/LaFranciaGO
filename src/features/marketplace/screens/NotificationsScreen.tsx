import { Bell, Clock3, Mail, MapPin, PackageSearch, Store, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { Card, CardText, CardTitle, SectionInner, SectionKicker, SectionText, SectionTitle } from '../ui';
import { CardIdentityRow, CardStack, CardTopRow, CompactTitle, InlineWrap, SectionStack } from './screenLayout';
import {
  FieldGroup,
  FieldHint,
  FormCard,
  PageGrid,
  SidePanel,
  SummaryBullet,
  SummaryItem,
  SummaryList,
  FieldLabel,
} from './formStyles';
import {
  AlertDismissButton,
  ChannelGrid,
  ConfirmActions,
  ConfirmButton,
  ConfirmCard,
  ConfirmOverlay,
  ConfirmText,
  ConfirmTitle,
  CompactFieldInput,
  CompactToggleButton,
  CompactToggleText,
  CompactToggleTitle,
  FrequencyRow,
  NotificationsGrid,
  NotificationsIntroStack,
  NotificationsSection,
  WatchCardPad,
  StatusBadge,
  WatchItemIcon,
  WatchList,
  SummaryCardPad,
  WatchAlertPill,
} from './NotificationsScreenStyled';

type Frequency = 'inmediato' | 'diario' | 'semanal';
type AlertTone = 'stock' | 'price' | 'offer' | 'promo';
type StatusTone = 'success' | 'danger' | 'info';

const frequencyLabelMap: Record<Frequency, string> = {
  inmediato: 'Alertas inmediatas',
  diario: 'Resumen diario',
  semanal: 'Resumen semanal',
};

const watchItems = [
  {
    id: 'w1',
    title: 'Coca Cola 3L',
    scope: 'Producto',
    alert: 'Cuando hay stock',
    tone: 'stock' as AlertTone,
    icon: PackageSearch,
  },
  {
    id: 'w2',
    title: 'La Huerta',
    scope: 'Comercio',
    alert: 'Baja de precio',
    tone: 'price' as AlertTone,
    icon: Store,
  },
  {
    id: 'w3',
    title: 'Asado Especial',
    scope: 'Oferta',
    alert: 'Nueva oferta',
    tone: 'offer' as AlertTone,
    icon: MapPin,
  },
  {
    id: 'w4',
    title: 'Verduras frescas',
    scope: 'Categoría',
    alert: 'Nueva promo',
    tone: 'promo' as AlertTone,
    icon: Clock3,
  },
] as const;

type WatchItem = (typeof watchItems)[number];

export function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [frequency, setFrequency] = useState<Frequency>('inmediato');
  const [query, setQuery] = useState('');
  const [activeWatchItems, setActiveWatchItems] = useState<WatchItem[]>(() => [...watchItems]);
  const [pendingRemoval, setPendingRemoval] = useState<WatchItem | null>(null);

  const filteredWatchItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return activeWatchItems;
    }

    return activeWatchItems.filter((item) => [item.title, item.scope, item.alert].join(' ').toLowerCase().includes(normalizedQuery));
  }, [activeWatchItems, query]);

  const pushTone: StatusTone = pushEnabled ? 'success' : 'danger';
  const emailTone: StatusTone = emailEnabled ? 'success' : 'danger';

  const handleConfirmRemoval = () => {
    if (!pendingRemoval) {
      return;
    }

    setActiveWatchItems((current) => current.filter((item) => item.id !== pendingRemoval.id));
    setPendingRemoval(null);
  };

  useEffect(() => {
    if (!pendingRemoval) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [pendingRemoval]);

  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Notificaciones push y email por producto, comercio o promo específica."
    >
      <NotificationsSection>
        <SectionInner>
          <NotificationsIntroStack>
            <SectionKicker>Notificaciones</SectionKicker>
            <SectionTitle>Campanitas por producto, comercio y oferta.</SectionTitle>
            <SectionText>
              Definimos qué querés seguir, cómo querés enterarte y con qué urgencia se dispara la alerta.
            </SectionText>
          </NotificationsIntroStack>
        </SectionInner>
      </NotificationsSection>

      <NotificationsSection>
        <SectionInner>
          <NotificationsGrid>
            <FormCard>
              <SectionStack>
                <CardTitle>Canales activos</CardTitle>
                <CardText>
                  Push para avisos urgentes y email para resúmenes, campañas o recordatorios.
                </CardText>

                <ChannelGrid>
                  <CompactToggleButton
                    type="button"
                    data-active={pushEnabled}
                    onClick={() => setPushEnabled((current) => !current)}
                  >
                    <CompactToggleTitle>
                      <Bell size={16} aria-hidden="true" /> Push
                    </CompactToggleTitle>
                    <CompactToggleText>Notificaciones instantáneas en móvil y web.</CompactToggleText>
                  </CompactToggleButton>

                  <CompactToggleButton
                    type="button"
                    data-active={emailEnabled}
                    onClick={() => setEmailEnabled((current) => !current)}
                  >
                    <CompactToggleTitle>
                      <Mail size={16} aria-hidden="true" /> Email
                    </CompactToggleTitle>
                    <CompactToggleText>Alertas, resúmenes y campañas por correo.</CompactToggleText>
                  </CompactToggleButton>
                </ChannelGrid>

                <SectionStack>
                  <CardTitle>Frecuencia de aviso</CardTitle>
                  <FrequencyRow>
                    {[
                      { id: 'inmediato', label: 'Alertas inmediatas', text: 'Reacción al instante' },
                      { id: 'diario', label: 'Resumen diario', text: 'Ordenado por prioridad' },
                      { id: 'semanal', label: 'Resumen semanal', text: 'Para seguimiento general' },
                    ].map((option) => (
                      <CompactToggleButton
                        key={option.id}
                        type="button"
                        data-active={frequency === option.id}
                        onClick={() => setFrequency(option.id as Frequency)}
                      >
                        <CompactToggleTitle>{option.label}</CompactToggleTitle>
                        <CompactToggleText>{option.text}</CompactToggleText>
                      </CompactToggleButton>
                    ))}
                  </FrequencyRow>
                </SectionStack>
              </SectionStack>
            </FormCard>

            <SidePanel>
              <CardTitle>Seguimientos activos</CardTitle>
              <CardText>
                Buscá lo que querés seguir y mantené todo ordenado desde una sola pantalla.
              </CardText>

              <FieldGroup htmlFor="watch-search">
                <FieldLabel>Buscar seguimiento</FieldLabel>
                <CompactFieldInput
                  id="watch-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Producto, comercio o promo"
                />
                <FieldHint>Ejemplo: Coca Cola 3L, La Huerta o Asado Especial.</FieldHint>
              </FieldGroup>

              <WatchList>
                {filteredWatchItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card key={item.id}>
                      <WatchCardPad>
                        <CardStack>
                          <CardTopRow>
                            <CardIdentityRow>
                              <WatchItemIcon aria-hidden="true">
                                <Icon size={16} aria-hidden="true" />
                              </WatchItemIcon>

                              <div>
                              <CompactTitle>{item.title}</CompactTitle>
                              <CardText>{item.scope}</CardText>
                            </div>
                          </CardIdentityRow>

                          <AlertDismissButton
                            type="button"
                            onClick={() => setPendingRemoval(item)}
                            aria-label={`Cancelar alerta de ${item.title}`}
                          >
                              <X size={12} aria-hidden="true" />
                          </AlertDismissButton>
                        </CardTopRow>

                          <WatchAlertPill data-tone={item.tone}>{item.alert}</WatchAlertPill>
                        </CardStack>
                      </WatchCardPad>
                    </Card>
                  );
                })}
              </WatchList>
            </SidePanel>
          </NotificationsGrid>
        </SectionInner>
      </NotificationsSection>

      <NotificationsSection>
        <SectionInner>
          <PageGrid>
            <Card>
              <SummaryCardPad>
                <SectionStack>
                  <CardTitle>Qué recomendamos activar</CardTitle>
                  <SummaryList>
                    <SummaryItem>
                      <SummaryBullet />
                      <span>Push para productos puntuales como Coca Cola 3L o promociones flash.</span>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryBullet />
                      <span>Email para resúmenes diarios de comercios y categorías favoritas.</span>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryBullet />
                      <span>Alertas inmediatas cuando el stock vuelve o un comercio publica una oferta.</span>
                    </SummaryItem>
                  </SummaryList>
                </SectionStack>
              </SummaryCardPad>
            </Card>

            <Card>
              <SummaryCardPad>
                <SectionStack>
                  <CardTitle>Estado actual</CardTitle>
                  <InlineWrap>
                    <StatusBadge data-tone={pushTone}>{pushEnabled ? 'Push activo' : 'Push inactivo'}</StatusBadge>
                    <StatusBadge data-tone={emailTone}>{emailEnabled ? 'Email activo' : 'Email inactivo'}</StatusBadge>
                    <StatusBadge data-tone="info">{frequencyLabelMap[frequency]}</StatusBadge>
                  </InlineWrap>

                  <CardText>
                    Esta base deja listo el panel para conectar backend, web push y email marketing.
                  </CardText>
                </SectionStack>
              </SummaryCardPad>
            </Card>
          </PageGrid>
        </SectionInner>
      </NotificationsSection>

      {pendingRemoval && (
        <ConfirmOverlay role="presentation" onClick={() => setPendingRemoval(null)}>
          <ConfirmCard
            role="dialog"
            aria-modal="true"
            aria-labelledby="notification-remove-title"
            onClick={(event) => event.stopPropagation()}
          >
            <ConfirmTitle id="notification-remove-title">Eliminar alerta</ConfirmTitle>
            <ConfirmText>
              ¿Seguro/a que deseas eliminar esta alerta de {pendingRemoval.title}? Ya no vas a recibir
              avisos de este seguimiento.
            </ConfirmText>
            <ConfirmActions>
              <ConfirmButton type="button" onClick={() => setPendingRemoval(null)}>
                Cancelar
              </ConfirmButton>
              <ConfirmButton type="button" data-variant="primary" onClick={handleConfirmRemoval}>
                Eliminar
              </ConfirmButton>
            </ConfirmActions>
          </ConfirmCard>
        </ConfirmOverlay>
      )}
    </MarketplaceFrame>
  );
}
