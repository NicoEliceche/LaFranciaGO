import { tokens } from './tokens';

export type ThemeMode = 'light' | 'dark';

type ThemeColorTokens = { [K in keyof typeof tokens.color]: string };
type ThemeShadowTokens = { [K in keyof typeof tokens.shadow]: string };

const lightShadowTokens: ThemeShadowTokens = tokens.shadow;

const darkColorTokens: ThemeColorTokens = {
  // El azul del logo se mantiene como color de marca también en oscuro.
  // Sobre superficies oscuras se usa una variante apenas aclarada para
  // conservar identidad sin perder contraste de texto (WCAG AA).
  primary: '#4D8BFF',
  primaryHover: '#6BA0FF',
  primaryActive: '#3D7BF0',
  brand: '#0047E7',
  brandHover: '#1F5CEC',
  brandActive: '#0038B8',
  primarySoft: '#152449',
  background: '#0C111D',
  backgroundAlt: '#111827',
  surface: '#151C2C',
  surfaceMuted: '#1C2537',
  surfaceDark: '#050816',
  surfaceDarkAlt: '#0B1020',
  text: '#F3F6FC',
  textMuted: '#AFBCD2',
  textSoft: '#8493AC',
  textInverse: '#FFFFFF',
  border: '#26314A',
  borderStrong: '#36435E',
  shadow: 'rgba(0, 0, 0, 0.42)',
  onPrimary: '#FFFFFF',
  onDark: '#FFFFFF',
  success: '#34D399',
  warning: '#FBBF24',
  danger: '#F87171',
  info: '#60A5FA',
  heroGradient:
    'linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)',
  heroGlow:
    'radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)',
  /* Cian del interruptor NOCHE, usado como acento de todo el modo oscuro. */
  neon: '#4DE5FF',
  neonSoft: 'rgba(77, 229, 255, 0.275)',
  /* Mismo tono, media saturación: es el cian de los íconos en reposo, para
     que el brillo pleno quede reservado a lo activo. Contraste 7.45:1. */
  neonMuted: '#5CB9C9',
};

const darkShadowTokens: ThemeShadowTokens = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.28)',
  md: '0 12px 24px rgba(0, 0, 0, 0.24)',
  lg: '0 20px 40px rgba(0, 0, 0, 0.34)',
  glow: '0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)',
};

export type Theme = {
  mode: ThemeMode;
  color: ThemeColorTokens;
  typography: typeof tokens.typography;
  spacing: typeof tokens.spacing;
  radius: typeof tokens.radius;
  shadow: ThemeShadowTokens;
  layout: typeof tokens.layout;
  breakpoints: typeof tokens.breakpoints;
  zIndex: typeof tokens.zIndex;
};

export const createTheme = (mode: ThemeMode): Theme => ({
  mode,
  color: mode === 'dark' ? darkColorTokens : tokens.color,
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: tokens.radius,
  shadow: mode === 'dark' ? darkShadowTokens : lightShadowTokens,
  layout: tokens.layout,
  breakpoints: tokens.breakpoints,
  zIndex: tokens.zIndex,
});

export const lightTheme = createTheme('light');
export const darkTheme = createTheme('dark');
export const theme = lightTheme;
