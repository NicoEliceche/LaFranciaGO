import type { LucideIcon } from 'lucide-react';

import {
  MetricTileHelp,
  MetricTileIcon,
  MetricTileLabel,
  MetricTileShell,
  MetricTileValue,
} from './MetricTileStyled';

type MetricTileProps = {
  label: string;
  value: string;
  help?: string;
  icon?: LucideIcon;
};

/** Métrica de panel: valor grande, etiqueta y ayuda opcional. */
export function MetricTile({ label, value, help, icon: Icon }: MetricTileProps) {
  return (
    <MetricTileShell>
      {Icon ? (
        <MetricTileIcon>
          <Icon size={18} aria-hidden="true" />
        </MetricTileIcon>
      ) : null}

      <MetricTileLabel>{label}</MetricTileLabel>
      <MetricTileValue>{value}</MetricTileValue>
      {help ? <MetricTileHelp>{help}</MetricTileHelp> : null}
    </MetricTileShell>
  );
}
