import type { ComponentType } from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  PromoSplitIcon,
  PromoSplitLabel,
  PromoSplitShell,
} from './PromoSplitButtonStyled';

type PromoSplitButtonProps = {
  to: string;
  label: string;
  /* Acepta íconos de lucide y los propios del proyecto. */
  icon: LucideIcon | ComponentType<{ size?: number }>;
};

/** Acceso compacto que acompaña a un banner de captación. */
export function PromoSplitButton({ to, label, icon: Icon }: PromoSplitButtonProps) {
  return (
    <PromoSplitShell to={to}>
      <PromoSplitIcon>
        <Icon size={18} />
      </PromoSplitIcon>

      <PromoSplitLabel>{label}</PromoSplitLabel>

      <ChevronRight size={16} aria-hidden="true" />
    </PromoSplitShell>
  );
}
