import { tokens } from './tokens';

export type ThemeMode = 'light' | 'dark';

type ThemeColorTokens = { [K in keyof typeof tokens.color]: string };
type ThemeShadowTokens = { [K in keyof typeof tokens.shadow]: string };

const lightShadowTokens: ThemeShadowTokens = tokens.shadow;

const darkColorTokens: ThemeColorTokens = {
  primary: '#FFFFFF',
  primaryHover: '#EAF1FF',
  primaryActive: '#DCE8FF',
  brand: '#6B9DFF',
  brandHover: '#8AB3FF',
  brandActive: '#4F87FF',
  primarySoft: '#132D63',
  background: '#141413',
  backgroundAlt: '#1D1D1B',
  surface: '#111A2E',
  surfaceMuted: '#182238',
  surfaceDark: '#050816',
  surfaceDarkAlt: '#0B1020',
  text: '#F6F9FF',
  textMuted: '#B4C2D8',
  textSoft: '#8694AE',
  textInverse: '#FFFFFF',
  border: '#25324A',
  borderStrong: '#34445E',
  shadow: 'rgba(0, 0, 0, 0.32)',
  onPrimary: '#FFFFFF',
  onDark: '#FFFFFF',
  success: '#34D399',
  warning: '#F59E0B',
  danger: '#F87171',
  info: '#60A5FA',
  heroGradient:
    'linear-gradient(135deg, #050816 0%, #0B1430 46%, #6B9DFF 100%)',
  heroGlow:
    'radial-gradient(circle at top left, rgba(107, 157, 255, 0.28), transparent 55%)',
};

const darkShadowTokens: ThemeShadowTokens = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.28)',
  md: '0 12px 24px rgba(0, 0, 0, 0.24)',
  lg: '0 20px 40px rgba(0, 0, 0, 0.34)',
  glow: '0 0 0 1px rgba(107, 157, 255, 0.28), 0 24px 48px rgba(107, 157, 255, 0.2)',
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
