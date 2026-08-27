import type { LucideIcon } from 'lucide-react';

import {
  EmptyStateActions,
  EmptyStateIconWrap,
  EmptyStateShell,
  EmptyStateText,
  EmptyStateTitle,
} from './EmptyStateStyled';
import { PrimaryButton } from '../ui';

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaTo?: string;
  /** Variante punteada, para "sin resultados" dentro de una sección. */
  dashed?: boolean;
};

/** Estado vacío centrado: ícono, título, una línea y una sola acción. */
export function EmptyState({ icon: Icon, title, text, ctaLabel, ctaTo, dashed }: EmptyStateProps) {
  return (
    <EmptyStateShell data-dashed={dashed ? 'true' : 'false'}>
      <EmptyStateIconWrap>
        <Icon size={30} aria-hidden="true" />
      </EmptyStateIconWrap>

      <EmptyStateTitle>{title}</EmptyStateTitle>
      {text ? <EmptyStateText>{text}</EmptyStateText> : null}

      {ctaLabel && ctaTo ? (
        <EmptyStateActions>
          <PrimaryButton to={ctaTo}>{ctaLabel}</PrimaryButton>
        </EmptyStateActions>
      ) : null}
    </EmptyStateShell>
  );
}
