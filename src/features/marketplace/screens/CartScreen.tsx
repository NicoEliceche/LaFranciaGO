import {
  BadgePercent,
  AlertCircle,
  CreditCard,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Clock3,
} from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { cartItems } from '../marketplaceContent';
import { formatMoney } from '../marketplace.utils';
import { CardText, CardTitle, LinkButton, PrimaryButton, SectionInner, SectionKicker, SectionText, SectionTitle, StrongPrice } from '../ui';
import {
  CartActions,
  CartCardPad,
  CartChip,
  CartGrid,
  CartHeroCard,
  CartHeroCopy,
  CartHeroHeader,
  CartHeroStack,
  CartItemBody,
  CartItemFooter,
  CartItemFooterHint,
  CartItemList,
  CartItemMeta,
  CartItemPill,
  CartItemPrice,
  CartItemRow,
  CartItemTop,
  CartItemThumb,
  CartItemThumbText,
  CartItemTitle,
  CartItemUnavailable,
  CartOverviewRail,
  CartPageStack,
  CartPaymentRail,
  CartProgressCard,
  CartProgressFill,
  CartProgressHeader,
  CartProgressLabel,
  CartProgressTrack,
  CartStoreBadge,
  CartStoreCard,
  CartStoreCopy,
  CartStoreHeader,
  CartStoreMeta,
  CartStoreTitle,
  CartSummaryCard,
  CartSummaryNote,
  CartSummarySection,
  CartSummaryStack,
  CartTotalRow,
  CartTotalsList,
  CartTrustGrid,
  CartTrustItem,
  CartStepper,
  CartStep,
  CartStepLabel,
  CartStepNumber,
  CartSection,
  CartStack,
} from './CartScreenStyled';

type CartGroup = {
  store: string;
  items: typeof cartItems;
  itemCount: number;
  subtotal: number;
  etaLabel: string;
  availableCount: number;
  unavailableCount: number;
};

const freeShippingThreshold = 15000;
const serviceFee = 200;

const parseEtaMinutes = (value: string) => {
  const match = value.match(/\d+/);
  return Number(match?.[0] ?? 0);
};

const getInitials = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const groupCartItems = (items = cartItems) => {
  const groups = new Map<string, CartGroup>();

  items.forEach((item) => {
    const group = groups.get(item.store);

    if (group) {
      group.items.push(item);
      group.itemCount += item.quantity;
      group.subtotal += item.subtotal;
      group.availableCount += item.available ? 1 : 0;
      group.unavailableCount += item.available ? 0 : 1;
      return;
    }

    groups.set(item.store, {
      store: item.store,
      items: [item],
      itemCount: item.quantity,
      subtotal: item.subtotal,
      etaLabel: item.eta,
      availableCount: item.available ? 1 : 0,
      unavailableCount: item.available ? 0 : 1,
    });
  });

  return [...groups.values()].map((group) => {
    const etaValues = group.items.map((item) => parseEtaMinutes(item.eta)).filter(Boolean);
    const minEta = etaValues.length ? Math.min(...etaValues) : 0;
    const maxEta = etaValues.length ? Math.max(...etaValues) : 0;

    return {
      ...group,
      etaLabel:
        etaValues.length <= 1 || minEta === maxEta ? `${minEta || 0} min` : `${minEta}–${maxEta} min`,
    };
  });
};

const cartGroups = groupCartItems();

const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
const deliveryFee = subtotal >= freeShippingThreshold ? 0 : 1200;
const total = subtotal + deliveryFee + serviceFee;
const totalUnits = cartItems.reduce((sum, item) => sum + item.quantity, 0);
const totalStores = cartGroups.length;
const unavailableItems = cartItems.filter((item) => !item.available).length;
const deliveryWindow = (() => {
  const etaValues = cartItems.map((item) => parseEtaMinutes(item.eta)).filter(Boolean);
  const minEta = etaValues.length ? Math.min(...etaValues) : 0;
  const maxEta = etaValues.length ? Math.max(...etaValues) : 0;

  if (!etaValues.length) {
    return 'Pendiente';
  }

  return minEta === maxEta ? `${minEta} min` : `${minEta}–${maxEta} min`;
})();
const freeShippingRemaining = Math.max(freeShippingThreshold - subtotal, 0);
const freeShippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

const checkoutSteps = [
  { label: 'Carrito', state: 'active' as const },
  { label: 'Entrega', state: 'idle' as const },
  { label: 'Pago', state: 'idle' as const },
  { label: 'Confirmación', state: 'idle' as const },
];

const paymentMethods = [
  { label: 'Tarjeta', icon: CreditCard },
  { label: 'Saldo', icon: Sparkles },
  { label: 'Cuotas', icon: BadgePercent },
] as const;

const trustPoints = [
  { label: 'Compra protegida', icon: ShieldCheck },
  { label: 'Sin costos sorpresa', icon: Clock3 },
  { label: 'Retiro o delivery por comercio', icon: Truck },
] as const;

export function CartScreen() {
  return (
    <MarketplaceFrame
      showSearch={false}
      footerText="Checkout mobile-first con costos claros, stock visible y pago seguro."
    >
      <CartPageStack>
        <CartSection>
          <SectionInner>
            <CartHeroCard>
              <CartCardPad>
                <CartHeroStack>
                  <CartHeroHeader>
                    <CartHeroCopy>
                      <SectionKicker>Carrito</SectionKicker>
                      <SectionTitle>Revisá tu pedido antes de pagar.</SectionTitle>
                      <SectionText>
                        Todo lo importante entra en una sola vista: productos, comercios,
                        costos, stock y una ruta limpia hacia el pago.
                      </SectionText>
                    </CartHeroCopy>

                    <CartOverviewRail>
                      <CartChip data-tone="brand">
                        <ShoppingCart size={14} aria-hidden="true" /> {totalUnits} unidades
                      </CartChip>
                      <CartChip>
                        <Store size={14} aria-hidden="true" /> {totalStores} comercios
                      </CartChip>
                      <CartChip data-tone={unavailableItems > 0 ? 'warning' : 'success'}>
                        <AlertCircle size={14} aria-hidden="true" /> {unavailableItems} sin stock
                      </CartChip>
                      <CartChip>
                        <Truck size={14} aria-hidden="true" /> {deliveryWindow}
                      </CartChip>
                    </CartOverviewRail>
                  </CartHeroHeader>

                  <CartStepper aria-label="Progreso de compra">
                    {checkoutSteps.map((step, index) => (
                      <CartStep key={step.label} data-state={step.state}>
                        <CartStepNumber data-state={step.state}>{index + 1}</CartStepNumber>
                        <CartStepLabel>{step.label}</CartStepLabel>
                      </CartStep>
                    ))}
                  </CartStepper>
                </CartHeroStack>
              </CartCardPad>
            </CartHeroCard>
          </SectionInner>
        </CartSection>

        <CartSection>
          <SectionInner>
            <CartGrid>
              <CartStack>
                {cartGroups.map((group) => (
                  <CartStoreCard key={group.store}>
                    <CartCardPad>
                      <CartStoreHeader>
                        <CartStoreCopy>
                          <CartStoreTitle>{group.store}</CartStoreTitle>
                          <CartStoreMeta>
                            {group.itemCount} unidades · {group.availableCount} confirmadas ·{' '}
                            {group.unavailableCount} pendientes
                          </CartStoreMeta>
                        </CartStoreCopy>

                        <CartStoreBadge>
                          <Truck size={14} aria-hidden="true" /> {group.etaLabel}
                        </CartStoreBadge>
                      </CartStoreHeader>

                      <CartItemList>
                        {group.items.map((item) => (
                          <CartItemRow key={item.id}>
                            <CartItemThumb aria-hidden="true">
                              <ShoppingCart size={18} />
                              <CartItemThumbText>{getInitials(item.product)}</CartItemThumbText>
                            </CartItemThumb>

                            <CartItemBody>
                              <CartItemTop>
                                <div style={{ minWidth: 0 }}>
                                  <CartItemTitle>{item.product}</CartItemTitle>
                                  <CardText>{item.store}</CardText>
                                </div>
                                <CartItemPrice>{item.available ? formatMoney(item.subtotal) : '—'}</CartItemPrice>
                              </CartItemTop>

                              <CartItemMeta>
                                <CartItemPill>{item.quantity} unid.</CartItemPill>
                                <CartItemPill data-tone="brand">
                                  {formatMoney(item.price)} c/u
                                </CartItemPill>
                                <CartItemPill data-tone={item.statusTone}>
                                  {item.statusLabel}
                                </CartItemPill>
                              </CartItemMeta>

                              <CartItemFooter>
                                <CartItemFooterHint>
                                  <Truck size={14} aria-hidden="true" />
                                  {item.eta}
                                </CartItemFooterHint>
                                {item.statusTone === 'success' ? (
                                  <CartItemFooterHint>Listo para sumar al pedido</CartItemFooterHint>
                                ) : item.statusTone === 'warning' ? (
                                  <CartItemUnavailable data-tone="warning">Pocas unidades</CartItemUnavailable>
                                ) : (
                                  <CartItemUnavailable data-tone="danger">Sin stock</CartItemUnavailable>
                                )}
                              </CartItemFooter>
                            </CartItemBody>
                          </CartItemRow>
                        ))}
                      </CartItemList>
                    </CartCardPad>
                  </CartStoreCard>
                ))}
              </CartStack>

              <CartSummaryCard>
                <CartCardPad>
                  <CartSummaryStack>
                    <div>
                      <SectionKicker>Resumen</SectionKicker>
                      <CardTitle>Costos claros y pago seguro.</CardTitle>
                      <CardText>
                        El total se presenta sin sorpresas y con el envío ya calculado sobre
                        el pedido actual.
                      </CardText>
                    </div>

                    <CartProgressCard>
                      <CartProgressHeader>
                        <span>Envío gratis</span>
                        <strong>
                          {freeShippingRemaining > 0
                            ? `${formatMoney(freeShippingRemaining)} faltan`
                            : 'Ya lo alcanzaste'}
                        </strong>
                      </CartProgressHeader>
                      <CartProgressTrack>
                        <CartProgressFill $value={freeShippingProgress} />
                      </CartProgressTrack>
                      <CartProgressLabel>
                        Umbral estimado {formatMoney(freeShippingThreshold)} ·{' '}
                        {freeShippingRemaining > 0
                          ? 'te falta poco para liberarlo'
                          : 'el envío ya queda liberado'}
                      </CartProgressLabel>
                    </CartProgressCard>

                    <CartTotalsList>
                      <CartTotalRow>
                        <span>Subtotal</span>
                        <span>{formatMoney(subtotal)}</span>
                      </CartTotalRow>
                      <CartTotalRow>
                        <span>Envío estimado</span>
                        <span>{formatMoney(deliveryFee)}</span>
                      </CartTotalRow>
                      <CartTotalRow>
                        <span>Cargo de servicio</span>
                        <span>{formatMoney(serviceFee)}</span>
                      </CartTotalRow>
                      <CartTotalRow data-emphasis="true">
                        <strong>Total estimado</strong>
                        <StrongPrice>{formatMoney(total)}</StrongPrice>
                      </CartTotalRow>
                    </CartTotalsList>

                    <CartTrustGrid>
                      {trustPoints.map((point) => {
                        const Icon = point.icon;

                        return (
                          <CartTrustItem key={point.label}>
                            <Icon size={16} aria-hidden="true" />
                            <span>{point.label}</span>
                          </CartTrustItem>
                        );
                      })}
                    </CartTrustGrid>

                    <CartSummarySection>
                      <CartSummaryNote>
                        Sin crear una experiencia pesada: los métodos de pago quedan claros y el
                        siguiente paso prepara dirección y cobro.
                      </CartSummaryNote>

                      <CartPaymentRail>
                        {paymentMethods.map((method) => {
                          const Icon = method.icon;

                          return (
                            <CartChip key={method.label} data-tone="brand">
                              <Icon size={14} aria-hidden="true" />
                              {method.label}
                            </CartChip>
                          );
                        })}
                      </CartPaymentRail>
                    </CartSummarySection>

                    <CartActions>
                      <PrimaryButton to="/mi-cuenta">Continuar al pago</PrimaryButton>
                      <LinkButton to="/comercios">Seguir comprando</LinkButton>
                    </CartActions>
                  </CartSummaryStack>
                </CartCardPad>
              </CartSummaryCard>
            </CartGrid>
          </SectionInner>
        </CartSection>
      </CartPageStack>
    </MarketplaceFrame>
  );
}
