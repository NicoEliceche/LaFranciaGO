import { Moon, Power, Sun } from 'lucide-react';

import {
  GamerToggleCopy,
  GamerToggleGlow,
  GamerToggleLed,
  GamerToggleMode,
  GamerToggleRail,
  GamerToggleScanline,
  GamerToggleShell,
  GamerToggleSubtitle,
  GamerToggleThumb,
  GamerToggleTitle,
  GamerToggleTrack,
} from './GamerThemeToggleStyled';

type GamerThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

/**
 * Interruptor de tema con estética gamer: carcasa tipo hardware,
 * LED de estado y riel con brillo neón. El estado real lo comunica
 * `role="switch"` + `aria-checked`, no sólo el color.
 */
export function GamerThemeToggle({ isDarkMode, onToggle }: GamerThemeToggleProps) {
  return (
    <GamerToggleShell
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDarkMode}
      data-dark={isDarkMode}
    >
      <GamerToggleLed data-dark={isDarkMode} aria-hidden="true">
        <Power size={14} aria-hidden="true" />
      </GamerToggleLed>

      <GamerToggleCopy>
        <GamerToggleTitle>
          Modo
          <GamerToggleMode data-dark={isDarkMode}>
            {isDarkMode ? 'NOCHE' : 'DÍA'}
          </GamerToggleMode>
        </GamerToggleTitle>
        <GamerToggleSubtitle>Cambiá el contraste de toda la app.</GamerToggleSubtitle>
      </GamerToggleCopy>

      <GamerToggleTrack data-dark={isDarkMode} aria-hidden="true">
        <GamerToggleScanline />
        <GamerToggleGlow data-dark={isDarkMode} />

        <GamerToggleRail>
          <Sun size={12} aria-hidden="true" />
          <Moon size={12} aria-hidden="true" />
        </GamerToggleRail>

        <GamerToggleThumb data-dark={isDarkMode}>
          {isDarkMode ? <Moon size={12} aria-hidden="true" /> : <Sun size={12} aria-hidden="true" />}
        </GamerToggleThumb>
      </GamerToggleTrack>
    </GamerToggleShell>
  );
}
