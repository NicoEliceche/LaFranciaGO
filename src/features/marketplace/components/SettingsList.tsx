import type { ComponentType, ReactNode } from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  SettingsRowChevron,
  SettingsRowCopy,
  SettingsRowIcon,
  SettingsRowLink,
  SettingsRowShell,
  SettingsRowSubtitle,
  SettingsRowTitle,
  SettingsListShell,
} from './SettingsListStyled';

type SettingsRowProps = {
  /** Acepta íconos de lucide y los propios del proyecto. */
  icon: LucideIcon | ComponentType<{ size?: number }>;
  title: string;
  subtitle?: string;
  to?: string;
  /** Acción de la fila cuando no navega a otra pantalla. */
  onClick?: () => void;
  tone?: 'default' | 'danger';
  trailing?: ReactNode;
};

/** Fila de ajustes: ícono, texto y chevron. Es link si recibe `to`. */
export function SettingsRow({
  icon: Icon,
  title,
  subtitle,
  to,
  onClick,
  tone,
  trailing,
}: SettingsRowProps) {
  const content = (
    <>
      <SettingsRowIcon data-tone={tone ?? 'default'}>
        <Icon size={18} aria-hidden="true" />
      </SettingsRowIcon>

      <SettingsRowCopy>
        <SettingsRowTitle data-tone={tone ?? 'default'}>{title}</SettingsRowTitle>
        {subtitle ? <SettingsRowSubtitle>{subtitle}</SettingsRowSubtitle> : null}
      </SettingsRowCopy>

      {trailing ?? (
        <SettingsRowChevron>
          <ChevronRight size={18} aria-hidden="true" />
        </SettingsRowChevron>
      )}
    </>
  );

  if (to) {
    return <SettingsRowLink to={to}>{content}</SettingsRowLink>;
  }

  /* Con acción se renderiza como botón, no como div con onClick: así funciona
     con teclado y el lector de pantalla lo anuncia como algo pulsable. */
  if (onClick) {
    return (
      <SettingsRowShell as="button" type="button" onClick={onClick}>
        {content}
      </SettingsRowShell>
    );
  }

  return <SettingsRowShell>{content}</SettingsRowShell>;
}

export function SettingsList({ children }: { children: ReactNode }) {
  return <SettingsListShell>{children}</SettingsListShell>;
}
