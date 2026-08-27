import { useMemo } from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { MarketplaceFrame } from '../components/MarketplaceFrame';
import { comparisons, offers } from '../marketplaceContent';
import { findOfferById, findStoreByName, formatDistance, formatMoney, getBestOffer } from '../marketplace.utils';
import { LinkButton, PrimaryButton, Section, SectionInner } from '../ui';
import { MediaFrame, MediaImage, MediaOverlayTop } from '@shared/components/Media';
import { categoryImage } from '@shared/utils/media';
import { SectionHeading } from '../components/SectionHeading';
import { SettingsList, SettingsRow } from '../components/SettingsList';
import {
  ProductDetailActions,
  ProductDetailBody,
  ProductDetailCard,
  ProductDetailCategory,
  ProductDetailName,
  ProductDetailPrice,
  ProductDetailPriceRow,
  ProductDetailRowPrice,
  ProductDetailStore,
  ProductDetailTag,
} from './ProductDetailScreenStyled';

export function ProductDetailScreen() {
  const { productId = '' } = useParams();

  const productData = useMemo(() => getBestOffer(productId), [productId]);

  const product = useMemo(() => {
    if (productData?.kind === 'comparison') {
      return {
        name: productData.comparison.product,
        category: productData.comparison.category,
        bestPrice: productData.bestOffer.price,
        bestStore: productData.bestOffer.store,
        comparisonOffers: productData.sortedOffers,
        badge: productData.comparison.badge,
      };
    }

    const fallback = findOfferById(productId) ?? offers[0];
    return {
      name: fallback.product,
      category: fallback.category,
      bestPrice: fallback.price,
      bestStore: fallback.store,
      comparisonOffers: comparisons.find((item) => item.id === `${fallback.id}-compare`)?.offers ?? [],
      badge: fallback.highlight,
    };
  }, [productData, productId]);

  const bestStore = findStoreByName(product.bestStore);

  return (
    <MarketplaceFrame
      showSearch={false}
    >
      <Section>
        <SectionInner>
          <ProductDetailCard>
            <MediaFrame $ratio="4 / 3">
              <MediaImage
                src={categoryImage(bestStore?.id)}
                alt={product.name}
                loading="eager"
              />
              {product.badge ? (
                <MediaOverlayTop>
                  <ProductDetailTag>{product.badge}</ProductDetailTag>
                </MediaOverlayTop>
              ) : null}
            </MediaFrame>

            <ProductDetailBody>
              <ProductDetailCategory>{product.category}</ProductDetailCategory>
              <ProductDetailName>{product.name}</ProductDetailName>

              <ProductDetailPriceRow>
                <ProductDetailPrice>{formatMoney(product.bestPrice)}</ProductDetailPrice>
                <ProductDetailStore>
                  <Store size={14} aria-hidden="true" />
                  {product.bestStore}
                </ProductDetailStore>
              </ProductDetailPriceRow>

              <ProductDetailActions>
                <PrimaryButton to="/carrito">
                  <ShoppingCart size={18} aria-hidden="true" />
                  Agregar al carrito
                </PrimaryButton>
                {bestStore ? (
                  <LinkButton to={`/comercios/${bestStore.id}`}>Ver comercio</LinkButton>
                ) : null}
              </ProductDetailActions>
            </ProductDetailBody>
          </ProductDetailCard>
        </SectionInner>
      </Section>

      {product.comparisonOffers.length > 0 && (
        <Section>
          <SectionInner>
            <SectionHeading
              title="Dónde comprarlo"
              chip="Precios"
              subtitle="Mismo producto en distintos comercios."
            />

            <SettingsList>
              {product.comparisonOffers.map((offer) => (
                <SettingsRow
                  key={offer.store}
                  icon={Store}
                  title={offer.store}
                  subtitle={`${formatDistance(offer.distanceKm)} · ${offer.eta}`}
                  trailing={<ProductDetailRowPrice>{formatMoney(offer.price)}</ProductDetailRowPrice>}
                />
              ))}
            </SettingsList>
          </SectionInner>
        </Section>
      )}
    </MarketplaceFrame>
  );
}
