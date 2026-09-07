import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { maxStepIndex, stepFactor, stepLabel } from '@core/data/saleUnits';
import { AddressSheet } from '../components/AddressSheet';
import { placeOrder } from '../ordersStore';
import { changeCartQuantity, clearCart, removeCartItem, useCart } from '../cartStore';
import {
  AlertCircle,
  ArrowLeftRight,
  CreditCard,
  Info,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Wallet,
  X,
} from 'lucide-react';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { EmptyState } from '../components/EmptyState';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { categoryImage } from '@shared/utils/media';
import {
  type PreferenciaEnvio,
  hayBackend,
  pagosApi,
  pedidosApi,
} from '@core/data/services/apiClient';
import { entraDeUnaVez, litrosDeItems, viajesNecesarios } from '@core/data/volumen';

import { cartItems } from '../marketplaceContent';
import { useDirecciones } from '../useDirecciones';
import type { CartItem } from '../marketplace.types';
import { formatMoney } from '../marketplace.utils';
import { Card, CardText, CardTitle, LinkButton, PrimaryButton, SectionInner, SectionKicker, SectionText, SectionTitle, StrongPrice } from '../ui';
import {
  CartActions,
  CartCardPad,
  CartChip,
  CartChipBoton,
  EnvioAviso,
  EnvioOpcion,
  EnvioPrecio,
  EnvioTexto,
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
  CartAddressOption,
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

/**
 * Cómo paga el cliente.
 *
 * "Ahora" lleva a Mercado Pago y el pedido queda pagado antes de que el
 * comercio lo prepare. "Al recibir" es lo que se hace hoy en el pueblo, y
 * sacarlo dejaría afuera a quien no usa tarjeta.
 */
const paymentMethods = [
  {
    id: 'mercadopago',
    label: 'Pagar ahora',
    detalle: 'Tarjeta, débito o dinero en cuenta',
    icon: CreditCard,
    online: true,
  },
  {
    id: 'efectivo',
    label: 'Efectivo al recibir',
    detalle: 'Le pagás al repartidor',
    icon: Wallet,
    online: false,
  },
  {
    id: 'transferencia',
    label: 'Transferencia',
    detalle: 'Coordinás con el comercio',
    icon: ArrowLeftRight,
    online: false,
  },
] as const;

const trustPoints = [
  /* Sólo dos, y que digan algo comprobable: "compra protegida" prometía un
     sistema de reclamos que todavía no existe. */
  { label: 'Precio final', icon: ShieldCheck },
  { label: 'Seguí tu pedido', icon: Truck },
] as const;

const deliveryMethods = [
  'Delivery GO',
  'Entrega comercio',
  'Sin retiro',
];

export function CartScreen() {
  const items = useCart();
  const [pendingRemoval, setPendingRemoval] = useState<string | null>(null);
  const [confirmando, setConfirmando] = useState(false);
  const [errorPedido, setErrorPedido] = useState<string | null>(null);

  const { direcciones, recargar: recargarDirecciones } = useDirecciones();

  /* Lo que el cliente eligió. La dirección arranca sin elegir y toma la
     principal en cuanto llegan: elegir por él antes de saber cuáles tiene
     sería adivinar. */
  const [direccionId, setDireccionId] = useState<string | null>(null);
  const [entrega, setEntrega] = useState(deliveryMethods[0]);
  const [preferencia, setPreferencia] = useState<PreferenciaEnvio>('cualquiera');

  /* Cuánto ocupa lo que hay en el carrito, para saber si entra en una moto.
     Se calcula acá y no en el servidor para que el número cambie a medida
     que el cliente suma cosas, sin esperar una respuesta por cada toque. */
  const litros = useMemo(
    () => litrosDeItems(items.filter((item) => item.available)),
    [items],
  );

  const entraEnMoto = entraDeUnaVez(litros, 'moto');
  const entraEnAuto = entraDeUnaVez(litros, 'auto');

  /* Cuántas entregas salen con cada opción, para poder mostrar el precio. */
  const partesPorOpcion: Record<PreferenciaEnvio, number> = {
    cualquiera: 1,
    auto: viajesNecesarios(litros, 'auto'),
    fraccionar: Math.max(2, viajesNecesarios(litros, 'moto')),
  };

  const partes = partesPorOpcion[preferencia];

  const [pago, setPago] = useState<string>(paymentMethods[0].id);

  const direccionElegida =
    direcciones.find((fila) => fila.id === direccionId) ??
    direcciones.find((fila) => fila.primary) ??
    direcciones[0] ??
    null;
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

  /* Cada entrega es un viaje al comercio, así que se cobra. El cliente ve el
     total antes de confirmar: sin esto, elegiría "que llegue antes" sin saber
     que le sale el doble de envío. */
  const envioTotal = deliveryFee * partes;
  const totalConEnvio = total - deliveryFee + envioTotal;

  const changeQuantity = changeCartQuantity;

  /**
   * Crea el pedido de verdad y lleva al historial.
   *
   * Se crea uno por comercio: cada uno prepara y entrega lo suyo, así que un
   * carrito con productos de dos negocios genera dos pedidos.
   *
   * El total lo calcula el servidor leyendo precios y ofertas de la base. El
   * carrito muestra un estimado; el que vale es el que vuelve, porque es el
   * que se cobra.
   */
  const confirmOrder = async () => {
    if (confirmando) {
      return;
    }

    /* Sin dirección el pedido no tiene a dónde ir. Se avisa en lugar de
       mandarlo con un "a confirmar" que después nadie sabe resolver. */
    if (hayBackend() && !direccionElegida) {
      setErrorPedido('Elegí una dirección de entrega antes de confirmar.');

      return;
    }

    setConfirmando(true);
    setErrorPedido(null);

    const disponibles = items.filter((item) => item.available);

    /* Sin backend configurado se sigue con el registro local: la app tiene
       que poder mostrarse aunque no haya API detrás. */
    if (!hayBackend() || disponibles.some((item) => !item.storeId)) {
      placeOrder(items);
      clearCart();
      navigate('/pedidos');

      return;
    }

    const porComercio = new Map<string, typeof disponibles>();

    for (const item of disponibles) {
      const grupo = porComercio.get(item.storeId!) ?? [];

      grupo.push(item);
      porComercio.set(item.storeId!, grupo);
    }

    const eligioOnline =
      paymentMethods.find((fila) => fila.id === pago)?.online ?? false;

    try {
      const creados: string[] = [];

      for (const [comercioId, grupo] of porComercio) {
        const { id } = await pedidosApi.crear({
          comercioId,
          direccionId: direccionElegida?.id,
          direccionTexto: direccionElegida?.address,
          /* Cómo llega y cómo paga van juntos en el pedido: el comercio
             necesita los dos para prepararlo y cobrarlo. */
          metodoPago: `${paymentMethods.find((fila) => fila.id === pago)?.label ?? pago} · ${entrega}`,
          preferenciaEnvio: preferencia,
          items: grupo.map((item) => ({
            productoId: item.id,
            escalon: item.quantity,
          })),
        });

        creados.push(id);
      }

      clearCart();

      /* Pagando en la app se va a Mercado Pago con el primer pedido. Un
         carrito de dos comercios genera dos pedidos y hoy se paga el primero;
         el resto queda listo para pagar desde "Mis pedidos". */
      if (eligioOnline && creados[0]) {
        try {
          const { url } = await pagosApi.iniciar(creados[0]);

          window.location.href = url;

          return;
        } catch {
          /* El pedido ya existe: se avisa dónde pagarlo en vez de perderlo. */
          navigate('/pedidos?pago=pendiente');

          return;
        }
      }

      navigate('/pedidos');
    } catch (fallo) {
      /* El carrito no se vacía si falló: perder lo armado sería peor que
         volver a intentar. */
      setErrorPedido(
        fallo instanceof Error ? fallo.message : 'No pudimos confirmar el pedido.',
      );
    } finally {
      setConfirmando(false);
    }
  };

  const removeItem = (id: string) => {
    removeCartItem(id);
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
                        {/* Cada entrega es un viaje al comercio: si se
                            fracciona, se cobran todos. */}
                        <span>
                          Envío estimado
                          {partes > 1 ? ` · ${partes} entregas` : ''}
                        </span>
                        <span>{formatMoney(envioTotal)}</span>
                      </CartTotalRow>
                      <CartTotalRow>
                        <span>Cargo de servicio</span>
                        <span>{formatMoney(serviceFee)}</span>
                      </CartTotalRow>
                      <CartTotalRow data-emphasis="true">
                        <strong>Total estimado</strong>
                        <StrongPrice>{formatMoney(totalConEnvio)}</StrongPrice>
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
                        {direcciones.map((address) => (
                          <CartAddressOption
                            key={address.id}
                            type="button"
                            onClick={() => setDireccionId(address.id)}
                            data-elegida={direccionElegida?.id === address.id}
                            aria-pressed={direccionElegida?.id === address.id}
                          >
                            <CartAddressPad>
                              <CartAddressHeader>
                                <CartStoreCopy>
                                  <CartStoreTitle>{address.label}</CartStoreTitle>
                                  <CartStoreMeta>{address.address}</CartStoreMeta>
                                </CartStoreCopy>
                                <CartChip data-tone={address.primary ? 'brand' : 'success'}>
                                  {direccionElegida?.id === address.id
                                    ? 'Elegida'
                                    : address.primary
                                      ? 'Principal'
                                      : 'Guardada'}
                                </CartChip>
                              </CartAddressHeader>
                            </CartAddressPad>
                          </CartAddressOption>
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
                          <CartChipBoton
                            key={method}
                            type="button"
                            onClick={() => setEntrega(method)}
                            data-elegido={entrega === method}
                            aria-pressed={entrega === method}
                          >
                            {method}
                          </CartChipBoton>
                        ))}
                      </CartPaymentRail>

                      {/* Con qué vehículo entra lo que armó. Un pedido que no
                          entra en una moto va a esperar más o llegar en
                          tandas, y eso el cliente tiene que saberlo antes de
                          confirmar, no después. */}
                      {litros > 0 && !entraEnMoto ? (
                        <EnvioAviso>
                          <Info size={14} aria-hidden="true" />
                          <span>
                            Lo que llevás ocupa unos {litros} litros: no entra en la caja
                            de una moto.{' '}
                            {entraEnAuto
                              ? 'Va a esperar un repartidor en auto, o llegar en varias entregas.'
                              : 'Va a llegar en varias entregas.'}
                          </span>
                        </EnvioAviso>
                      ) : null}

                      <CartStack>
                        <EnvioOpcion data-elegida={preferencia === 'cualquiera'}>
                          <input
                            type="radio"
                            name="preferencia-envio"
                            checked={preferencia === 'cualquiera'}
                            onChange={() => setPreferencia('cualquiera')}
                          />
                          <EnvioTexto>
                            <strong>Como venga</strong>
                            <span>
                              {entraEnMoto
                                ? 'Lo toma el primero que pase, en moto o en auto.'
                                : 'Lo toma quien pueda llevarlo. Puede tardar un poco más.'}
                            </span>
                          </EnvioTexto>
                          <EnvioPrecio>{formatMoney(deliveryFee)}</EnvioPrecio>
                        </EnvioOpcion>

                        {/* Sólo tiene sentido ofrecer "todo junto" cuando hace
                            falta: si ya entra en una moto, es la misma cosa. */}
                        {!entraEnMoto && entraEnAuto ? (
                          <EnvioOpcion data-elegida={preferencia === 'auto'}>
                            <input
                              type="radio"
                              name="preferencia-envio"
                              checked={preferencia === 'auto'}
                              onChange={() => setPreferencia('auto')}
                            />
                            <EnvioTexto>
                              <strong>Todo junto, en auto</strong>
                              <span>Esperás a que lo tome alguien en auto y te llega completo.</span>
                            </EnvioTexto>
                            <EnvioPrecio>{formatMoney(deliveryFee)}</EnvioPrecio>
                          </EnvioOpcion>
                        ) : null}

                        {/* Fraccionar sólo se ofrece si hay más de una cosa
                            que repartir: con un solo producto no hay nada que
                            partir. */}
                        {items.filter((item) => item.available).length > 1 ? (
                          <EnvioOpcion data-elegida={preferencia === 'fraccionar'}>
                            <input
                              type="radio"
                              name="preferencia-envio"
                              checked={preferencia === 'fraccionar'}
                              onChange={() => setPreferencia('fraccionar')}
                            />
                            <EnvioTexto>
                              <strong>Fraccionar para recibir antes</strong>
                              <span>
                                Se parte en {partesPorOpcion.fraccionar} entregas que pueden tomar
                                repartidores distintos. Pagás un envío por cada una.
                              </span>
                            </EnvioTexto>
                            <EnvioPrecio>
                              {formatMoney(deliveryFee * partesPorOpcion.fraccionar)}
                            </EnvioPrecio>
                          </EnvioOpcion>
                        ) : null}
                      </CartStack>
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
                            <CartChipBoton
                              key={method.id}
                              type="button"
                              onClick={() => setPago(method.id)}
                              data-elegido={pago === method.id}
                              aria-pressed={pago === method.id}
                              title={method.detalle}
                            >
                              <Icon size={14} aria-hidden="true" />
                              {method.label}
                            </CartChipBoton>
                          );
                        })}
                      </CartPaymentRail>
                    </CartSummarySection>

                    <CartActions>
                      <PrimaryButton
                        as="button"
                        type="button"
                        onClick={() => void confirmOrder()}
                        disabled={confirmando}
                      >
                        {confirmando
                          ? 'Confirmando…'
                          : paymentMethods.find((fila) => fila.id === pago)?.online
                            ? 'Confirmar y pagar'
                            : 'Confirmar pedido'}
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
        currentId={direccionElegida?.id ?? ''}
        startOnNew
        onClose={() => setAddressSheetOpen(false)}
        onSelect={(id) => {
          /* La nueva queda elegida y la lista se vuelve a pedir: si no,
             habría que salir y entrar al carrito para verla. */
          setDireccionId(id);
          setAddressSheetOpen(false);
          void recargarDirecciones();
        }}
      />
    </MarketplaceFrame>
  );
}
