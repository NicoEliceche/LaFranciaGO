import { Clock3, MapPin, Star } from 'lucide-react';

import { Avatar, MediaFrame, MediaImage, MediaOverlayTop } from '@shared/components/Media';
import { categoryImage, initialsOf, toneFromId } from '@shared/utils/media';
import { formatDistance, formatMoney } from '@shared/utils/format';

import {
  StoreHeroBody,
  StoreHeroInfoRow,
  StoreHeroLogoWrap,
  StoreHeroMetaPill,
  StoreHeroName,
  StoreHeroOpenBadge,
  StoreHeroRatingBadge,
  StoreHeroShell,
  StoreHeroSubtitle,
} from './StoreHeroStyled';

type StoreHeroProps = {
  id: string;
  name: string;
  category: string;
  categoryId?: string;
  address: string;
  hours: string;
  distanceKm: number;
  rating: number;
  openNow: boolean;
  minOrder: number;
};

/** Portada del comercio: imagen, logo y datos operativos en una sola pieza. */
export function StoreHero({
  id,
  name,
  category,
  categoryId,
  address,
  hours,
  distanceKm,
  rating,
  openNow,
  minOrder,
}: StoreHeroProps) {
  return (
    <StoreHeroShell>
      <MediaFrame $ratio="21 / 9">
        <MediaImage src={categoryImage(categoryId)} alt={category} loading="eager" />

        <MediaOverlayTop>
          <StoreHeroOpenBadge data-open={openNow}>
            {openNow ? 'Abierto ahora' : 'Cerrado'}
          </StoreHeroOpenBadge>
          <StoreHeroRatingBadge>
            <Star size={13} aria-hidden="true" fill="currentColor" />
            {rating.toFixed(1)}
          </StoreHeroRatingBadge>
        </MediaOverlayTop>

        <StoreHeroLogoWrap>
          <Avatar $size="3.5rem" $tone={toneFromId(id)}>
            {initialsOf(name)}
          </Avatar>
        </StoreHeroLogoWrap>
      </MediaFrame>

      <StoreHeroBody>
        <StoreHeroName>{name}</StoreHeroName>
        <StoreHeroSubtitle>
          {category} · {formatDistance(distanceKm)}
        </StoreHeroSubtitle>

        <StoreHeroInfoRow>
          <StoreHeroMetaPill>
            <Clock3 size={14} aria-hidden="true" />
            {hours}
          </StoreHeroMetaPill>
          <StoreHeroMetaPill>
            <MapPin size={14} aria-hidden="true" />
            {address}
          </StoreHeroMetaPill>
          <StoreHeroMetaPill>Mínimo {formatMoney(minOrder)}</StoreHeroMetaPill>
        </StoreHeroInfoRow>
      </StoreHeroBody>
    </StoreHeroShell>
  );
}
