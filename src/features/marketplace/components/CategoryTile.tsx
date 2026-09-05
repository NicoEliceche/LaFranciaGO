import { MediaFrame, MediaImage } from '@shared/components/Media';
import { categoryImage } from '@shared/utils/media';

import { CategoryTileCount, CategoryTileLabel, CategoryTileShell } from './CategoryTileStyled';

type CategoryTileProps = {
  id: string;
  name: string;
  to: string;
  /** Negocios en el rubro. Sólo se muestra donde aporta (pantalla de rubros). */
  count?: number;
  priority?: boolean;
};

/** Tile de rubro: imagen con el nombre encima. Sin descripción. */
export function CategoryTile({ id, name, to, count, priority }: CategoryTileProps) {
  return (
    <CategoryTileShell to={to}>
      <MediaFrame $ratio="1 / 1">
        <MediaImage src={categoryImage(id)} alt={name} loading={priority ? 'eager' : 'lazy'} />
        {typeof count === 'number' ? (
          <CategoryTileCount>
            {count} {count === 1 ? 'negocio' : 'negocios'}
          </CategoryTileCount>
        ) : null}
        <CategoryTileLabel>{name}</CategoryTileLabel>
      </MediaFrame>
    </CategoryTileShell>
  );
}
