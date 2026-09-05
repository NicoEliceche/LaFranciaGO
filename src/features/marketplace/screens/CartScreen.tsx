import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { maxStepIndex, stepFactor, stepLabel } from '@core/data/saleUnits';
import { AddressSheet } from '../components/AddressSheet';
import { placeOrder } from '../ordersStore';
import {
  AlertCircle,
  ArrowLeftRight,
  CreditCard,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Clock3,
  Minus,
  Plus,
  X,
} from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { categoryImage } from '@shared/utils/media';
import { addresses, cartItems } from '../marketplaceContent';
import type { CartItem } from '../marketplace.types';
import { formatMoney } from '../marketplace.utils';
import { Card, CardText, CardTitle, LinkButton, PrimaryButton, SectionInner, SectionKicker, SectionText, SectionTitle, StrongPrice } from '../ui';
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
  CartQtyButton,
  CartQtyStepper,
  CartQtyValue,
  CartItemPriceGroup,
  CartItemRemoveButton,
  CartItemRow,
  CartItemTop,
  CartItemThumb,
  CartItemThumbImage,
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
  CartAddressHeader,
  CartAddressNewButton,
  CartAddressPad,
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



/** Totales derivados del carrito actual. */
const buildTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const deliveryFee = subtotal >= freeShippingThreshold ? 0 : 1200;
  const etaValues = items.map((item) => parseEtaMinutes(item.eta)).filter(Boolean);
  const minEta = etaValues.length ? Math.min(...etaValues) : 0;
  const maxEta = etaValues.length ? Math.max(...etaValues) : 0;

  return {
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee + serviceFee,
    /* Cuenta productos, no escalones: "3 productos" se entiende siempre;
       "3 unidades" sería falso si uno se pidió por peso. */
    totalUnits: items.filter((item) => item.available).length,
    unavailableItems: items.filter((item) => !item.available).length,
    deliveryWindow: !etaValues.length
      ? 'Pendiente'
      : minEta === maxEta
        ? `${minEta} min`
        : `${minEta}–${maxEta} min`,
    freeShippingRemaining: Math.max(freeShippingThreshold - subtotal, 0),
    freeShippingProgress: Math.min((subtotal / freeShippingThreshold) * 100, 100),
  };
};

const checkoutSteps = [
  { label: 'Carrito', state: 'active' as const },
  { label: 'Dirección', state: 'idle' as const },
  { label: 'Entrega', state: 'idle' as const },
  { label: 'Pago', state: 'idle' as const },
  { label: 'Confirmar', state: 'idle' as const },
];

const paymentMethods = [
  { label: 'Crédito', icon: CreditCard },
  { label: 'Débito', icon: CreditCard },
  { label: 'Transferencia', icon: ArrowLeftRight },
] as const;

const trustPoints = [
  { label: 'Compra protegida', icon: ShieldCheck },
  { label: 'Sin costos sorpresa', icon: Clock3 },
  { label: 'Entrega clara', icon: Truck },
] as const;

const deliveryMethods = [
  'Delivery GO',
  'Entrega comercio',
  'Sin retiro',
];

export function CartScreen() {
  const [items, setItems] = useState(cartItems);
  const [pendingRemoval, setPendingRemoval] = useState<string | null>(null);
  /* Alta de dirección: abre la misma hoja del header, en el paso de alta. */
  const [addressSheetOpen, setAddressSheetOpen] = useState(false);
  const navigate = useNavigate();

  const cartGroups = useMemo(() => groupCartItems(items), [items]);

  const {
    subtotal,
    deliveryFee,
    total,
    totalUnits,
    unavailableItems,
    deliveryWindow,
    freeShippingRemaining,
    freeShippingProgress,
  } = useMemo(() => buildTotals(items), [items]);

  const changeQuantity = (id: string, delta: number) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }

        /* Sin stock no se puede pedir nada: el escalón queda en cero. */
        if (!item.available) {
          return item;
        }

        const quantity = Math.min(
          Math.max(0, item.quantity + delta),
          maxStepIndex(item.saleUnit),
        );

        return {
          ...item,
          quantity,
          subtotal: Math.round(item.price * stepFactor(item.saleUnit, quantity)),
        };
      }),
    );
  };

  /* Genera el pedido y lleva al historial, donde ya aparece el nuevo. */
  const confirmOrder = () => {
    placeOrder(items);
    navigate('/pedidos');
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
    setPendingRemoval(null);
  };

  if (cartGroups.length === 0) {
    return (
      <MarketplaceFrame showSearch={false}>
        <CartSection>
          <SectionInner>
            <EmptyState
              icon={ShoppingCart}
              title="Tu carrito está vacío"
              text="Explorá los negocios de La Francia y armá tu pedido."
              ctaLabel="Explorar negocios"
              ctaTo="/comercios"
            />
          </SectionInner>
        </CartSection>
      </MarketplaceFrame>
    );
  }

  return (
    <MarketplaceFrame
      showSearch={false}
    >
      <CartPageStack>
        <CartSection>
          <SectionInner>
            <CartHeroCard>
              <CartCardPad>
                <CartHeroStack>
                  <CartHeroHeader>
                    <CartHeroCopy>
                      <SectionTitle>Carrito</SectionTitle>
                    </CartHeroCopy>

                    <CartOverviewRail>
                      <CartChip data-tone="brand">
                        <ShoppingCart size={14} aria-hidden="true" /> {totalUnits}{' '}
                        {totalUnits === 1 ? 'producto' : 'productos'}
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
                            {group.itemCount} ítems · {group.unavailableCount} pendientes
                          </CartStoreMeta>
                        </CartStoreCopy>

                        <CartStoreBadge>
                          <Truck size={14} aria-hidden="true" /> {group.etaLabel}
                        </CartStoreBadge>
                      </CartStoreHeader>

                      <CartItemList>
                        {group.items.map((item) => (
                          <CartItemRow key={item.id}>
                            <CartItemThumb>
                              <CartItemThumbImage
                                src={categoryImage(item.categoryId)}
                                alt={item.product}
                                loading="lazy"
                              />
                            </CartItemThumb>

                            <CartItemBody>
                              <CartItemTop>
                                <div style={{ minWidth: 0 }}>
                                  <CartItemTitle>{item.product}</CartItemTitle>
                                  <CardText>{item.store}</CardText>
                                </div>
                                <CartItemPriceGroup>
                                  <CartItemPrice>
                                    {item.available ? formatMoney(item.subtotal) : '—'}
                                  </CartItemPrice>
                                  <CartItemRemoveButton
                                    type="button"
                                    aria-label={`Quitar ${item.product} del carrito`}
                                    onClick={() => setPendingRemoval(item.id)}
                                  >
                                    <X size={15} aria-hidden="true" />
                                  </CartItemRemoveButton>
                                </CartItemPriceGroup>
                              </CartItemTop>

                              <CartItemMeta>
                                <CartQtyStepper>
                                  <CartQtyButton
                                    type="button"
                                    onClick={() => changeQuantity(item.id, -1)}
                                    disabled={!item.available || item.quantity <= 0}
                                    aria-label={`Quitar cantidad de ${item.product}`}
                                  >
                                    <Minus size={14} aria-hidden="true" />
                                  </CartQtyButton>

                                  <CartQtyValue aria-live="polite">
                                    {item.available
                                      ? stepLabel(item.saleUnit, item.quantity)
                                      : '0 unid.'}
                                  </CartQtyValue>

                                  <CartQtyButton
                                    type="button"
                                    onClick={() => changeQuantity(item.id, 1)}
                                    disabled={
                                      !item.available ||
                                      item.quantity >= maxStepIndex(item.saleUnit)
                                    }
                                    aria-label={`Agregar cantidad de ${item.product}`}
                                  >
                                    <Plus size={14} aria-hidden="true" />
                                  </CartQtyButton>
                                </CartQtyStepper>

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
                    <SectionKicker>Resumen</SectionKicker>

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
                      <div>
                        <SectionKicker>Dirección</SectionKicker>
                        <CardTitle>Elegí dónde recibir</CardTitle>
                      </div>

                      <CartStack>
                        {addresses.map((address) => (
                          <Card key={address.id}>
                            <CartAddressPad>
                              <CartAddressHeader>
                                <CartStoreCopy>
                                  <CartStoreTitle>{address.label}</CartStoreTitle>
                                  <CartStoreMeta>{address.address}</CartStoreMeta>
                                </CartStoreCopy>
                                <CartChip data-tone={address.primary ? 'brand' : 'success'}>
                                  {address.primary ? 'Principal' : 'Guardada'}
                                </CartChip>
                              </CartAddressHeader>
                            </CartAddressPad>
                          </Card>
                        ))}

                        <CartAddressNewButton type="button" onClick={() => setAddressSheetOpen(true)}>
                          <Plus size={18} aria-hidden="true" />
                          Agregar una dirección nueva
                        </CartAddressNewButton>
                      </CartStack>
                    </CartSummarySection>

                    <CartSummarySection>
                      <div>
                        <SectionKicker>Entrega</SectionKicker>
                        <CardTitle>Cómo llega el pedido</CardTitle>
                      </div>

                      <CartPaymentRail>
                        {deliveryMethods.map((method) => (
                          <CartChip key={method} data-tone="brand">
                            {method}
                          </CartChip>
                        ))}
                      </CartPaymentRail>
                    </CartSummarySection>

                    <CartSummarySection>
                      <div>
                        <SectionKicker>Pago</SectionKicker>
                        <CardTitle>Elegí el medio de pago</CardTitle>
                      </div>

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
                      <PrimaryButton as="button" type="button" onClick={confirmOrder}>
                        Confirmar pedido
                      </PrimaryButton>
                      <LinkButton to="/">Seguir comprando</LinkButton>
                    </CartActions>
                  </CartSummaryStack>
                </CartCardPad>
              </CartSummaryCard>
            </CartGrid>
          </SectionInner>
        </CartSection>
      </CartPageStack>

      <ConfirmDialog
        open={pendingRemoval !== null}
        title="¿Deseás eliminar este artículo?"
        text="Se va a quitar del carrito."
        onCancel={() => setPendingRemoval(null)}
        onConfirm={() => pendingRemoval && removeItem(pendingRemoval)}
      />

      <AddressSheet
        open={addressSheetOpen}
        currentId={addresses[0]?.id ?? ''}
        startOnNew
        onClose={() => setAddressSheetOpen(false)}
        onSelect={() => setAddressSheetOpen(false)}
      />
    </MarketplaceFrame>
  );
}
