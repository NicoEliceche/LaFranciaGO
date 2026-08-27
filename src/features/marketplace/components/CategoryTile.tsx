import { MediaFrame, MediaImage } from '@shared/components/Media';
import { categoryImage } from '@shared/utils/media';

import { CategoryTileLabel, CategoryTileShell } from './CategoryTileStyled';

type CategoryTileProps = {
  id: string;
  name: string;
  to: string;
  priority?: boolean;
};

/** Tile de rubro: imagen con el nombre encima. Sin descripción. */
export function CategoryTile({ id, name, to, priority }: CategoryTileProps) {
  return (
    <CategoryTileShell to={to}>
      <MediaFrame $ratio="1 / 1">
        <MediaImage src={categoryImage(id)} alt={name} loading={priority ? 'eager' : 'lazy'} />
        <CategoryTileLabel>{name}</CategoryTileLabel>
      </MediaFrame>
    </CategoryTileShell>
  );
}
