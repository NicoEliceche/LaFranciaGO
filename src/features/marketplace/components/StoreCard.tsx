import { Bike, Clock, Star } from 'lucide-react';

import { Avatar, MediaFrame, MediaImage, MediaOverlayTop } from '@shared/components/Media';
import { categoryImage, initialsOf, toneFromId } from '@shared/utils/media';
import { formatDistance } from '@shared/utils/format';

import {
  StoreBody,
  StoreCardShell,
  StoreLogoWrap,
  StoreMeta,
  StoreMetaPill,
  StoreName,
  StoreOpenBadge,
  StorePremiumBadge,
  StoreRatingBadge,
  StoreSubtitle,
} from './StoreCardStyled';

type StoreCardProps = {
  id: string;
  name: string;
  category: string;
  categoryId?: string;
  to: string;
  distanceKm?: number;
  rating?: number;
  openNow?: boolean;
  /** Plan pagado: se rotula para no confundir con un orden natural. */
  premium?: boolean;
  deliveryFee?: number;
  etaMin?: number;
  etaMax?: number;
  /** Carga inmediata para las tarjetas visibles al abrir la pantalla. */
  priority?: boolean;
};

/**
 * Tarjeta de comercio image-first: portada, logo, rating y datos de entrega.
 */
export function StoreCard({
  id,
  name,
  category,
  categoryId,
  to,
  distanceKm,
  rating,
  openNow,
  premium,
  etaMin,
  etaMax,
  priority,
}: StoreCardProps) {
  return (
    <StoreCardShell to={to}>
      <MediaFrame $ratio="16 / 9">
        <MediaImage src={categoryImage(categoryId)} alt={category} loading={priority ? 'eager' : 'lazy'} />

        <MediaOverlayTop>
          {openNow !== undefined ? (
            <StoreOpenBadge data-open={openNow}>{openNow ? 'Abierto ahora' : 'Cerrado'}</StoreOpenBadge>
          ) : (
            <span />
          )}

          {premium ? <StorePremiumBadge>Destacado</StorePremiumBadge> : null}

          {rating !== undefined ? (
            <StoreRatingBadge>
              <Star size={13} aria-hidden="true" fill="currentColor" />
              {rating.toFixed(1)}
            </StoreRatingBadge>
          ) : null}
        </MediaOverlayTop>

        <StoreLogoWrap>
          <Avatar $size="2.75rem" $tone={toneFromId(id)}>
            {initialsOf(name)}
          </Avatar>
        </StoreLogoWrap>
      </MediaFrame>

      <StoreBody>
        <StoreName>{name}</StoreName>
        <StoreSubtitle>
          {category}
          {distanceKm !== undefined ? ` · ${formatDistance(distanceKm)}` : ''}
        </StoreSubtitle>

        <StoreMeta>
          <StoreMetaPill>
            <Bike size={14} aria-hidden="true" />
            Delivery
          </StoreMetaPill>

          {etaMin !== undefined && etaMax !== undefined ? (
            <StoreMetaPill>
              <Clock size={14} aria-hidden="true" />
              {etaMin}-{etaMax} min
            </StoreMetaPill>
          ) : null}
        </StoreMeta>
      </StoreBody>
    </StoreCardShell>
  );
}
