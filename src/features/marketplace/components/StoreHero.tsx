import { Clock3, Heart, MapPin, Star } from 'lucide-react';

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
  StoreHeroFavorito,
  StoreHeroShell,
  StoreHeroSubtitle,
} from './StoreHeroStyled';

type StoreHeroProps = {
  id: string;
  name: string;
  /* Si está guardado. Sin el par de props no se muestra el corazón, igual
     que en la tarjeta del listado. */
  favorito?: boolean;
  onToggleFavorito?: (id: string) => void;
  category: string;
  categoryId?: string;
  address: string;
  hours: string;
  /** Falta hasta saber dónde está el cliente: entonces no se muestra. */
  distanceKm?: number;
  /** Falta hasta que haya reseñas: entonces no se muestra la estrella. */
  rating?: number;
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
  favorito,
  onToggleFavorito,
}: StoreHeroProps) {
  return (
    <StoreHeroShell>
      <MediaFrame $ratio="21 / 9">
        <MediaImage src={categoryImage(categoryId)} alt={category} loading="eager" />

        <MediaOverlayTop>
          <StoreHeroOpenBadge data-open={openNow}>
            {openNow ? 'Abierto ahora' : 'Cerrado'}
          </StoreHeroOpenBadge>
          {rating !== undefined ? (
            <StoreHeroRatingBadge>
              <Star size={13} aria-hidden="true" fill="currentColor" />
              {rating.toFixed(1)}
            </StoreHeroRatingBadge>
          ) : null}

          {/* El mismo corazón que en el listado. Estaba sólo allá, así que
              entrando al comercio no había cómo guardarlo: había que volver
              atrás a buscar la tarjeta. */}
          {onToggleFavorito ? (
            <StoreHeroFavorito
              type="button"
              data-activo={favorito}
              onClick={() => onToggleFavorito(id)}
              aria-pressed={favorito}
              aria-label={favorito ? `Quitar ${name} de favoritos` : `Guardar ${name} en favoritos`}
            >
              <Heart size={17} aria-hidden="true" fill={favorito ? 'currentColor' : 'none'} />
            </StoreHeroFavorito>
          ) : null}
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
          {category}
          {distanceKm !== undefined ? ` · ${formatDistance(distanceKm)}` : ''}
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
