import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import { createTheme, type ThemeMode } from './theme';

const THEME_STORAGE_KEY = 'lafranciago-theme-mode';

type ThemeModeContextValue = {
  mode: ThemeMode;
  isDarkMode: boolean;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const getPreferredThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedMode === 'light' || storedMode === 'dark') {
    return storedMode;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setModeState] = useState<ThemeMode>(getPreferredThemeMode);
  const didMountRef = useRef(false);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;

    if (!didMountRef.current) {
      didMountRef.current = true;
      return undefined;
    }

    document.documentElement.dataset.themeTransition = 'true';
    const transitionTimeout = window.setTimeout(() => {
      delete document.documentElement.dataset.themeTransition;
    }, 240);

    return () => {
      window.clearTimeout(transitionTimeout);
      delete document.documentElement.dataset.themeTransition;
    };
  }, [mode]);

  const toggleMode = useCallback(() => {
    setModeState((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
  }, []);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
  }, []);

  const theme = useMemo(() => createTheme(mode), [mode]);

  const contextValue = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      isDarkMode: mode === 'dark',
      toggleMode,
      setMode,
    }),
    [mode, setMode, toggleMode],
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }

  return context;
}
