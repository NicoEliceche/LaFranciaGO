import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

import {
  SectionHeadingChip,
  SectionHeadingLink,
  SectionHeadingRow,
  SectionHeadingSubtitle,
  SectionHeadingTitle,
  SectionHeadingTitleGroup,
  SectionHeadingWrap,
} from './SectionHeadingStyled';

type SectionHeadingProps = {
  title: string;
  chip?: string;
  chipIcon?: ReactNode;
  subtitle?: string;
  seeAllTo?: string;
  seeAllLabel?: string;
};

/**
 * Encabezado de sección compartido: título + chip + subtítulo de una línea
 * y un acceso "Ver todos". Mantiene todas las secciones con el mismo ritmo.
 */
export function SectionHeading({
  title,
  chip,
  chipIcon,
  subtitle,
  seeAllTo,
  seeAllLabel = 'Ver todos',
}: SectionHeadingProps) {
  return (
    <SectionHeadingWrap>
      <SectionHeadingRow>
        <SectionHeadingTitleGroup>
          <SectionHeadingTitle>{title}</SectionHeadingTitle>
          {chip ? (
            <SectionHeadingChip>
              {chipIcon}
              {chip}
            </SectionHeadingChip>
          ) : null}
        </SectionHeadingTitleGroup>

        {seeAllTo ? (
          <SectionHeadingLink to={seeAllTo}>
            {seeAllLabel}
            <ChevronRight size={16} aria-hidden="true" />
          </SectionHeadingLink>
        ) : null}
      </SectionHeadingRow>

      {subtitle ? <SectionHeadingSubtitle>{subtitle}</SectionHeadingSubtitle> : null}
    </SectionHeadingWrap>
  );
}
