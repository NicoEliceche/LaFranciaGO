import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';

/* Sólo el subset latino: los alfabetos árabe, cirílico y hebreo no se usan
   y sumaban decenas de archivos al build. */
import '@fontsource/rubik/latin-400.css';
import '@fontsource/rubik/latin-500.css';
import '@fontsource/rubik/latin-700.css';
import '@fontsource/nunito-sans/latin-400.css';
import '@fontsource/nunito-sans/latin-600.css';
import '@fontsource/nunito-sans/latin-700.css';

import App from './App';
import '@core/theme/types';

/**
 * Guardia contra clickjacking.
 *
 * GitHub Pages no permite enviar X-Frame-Options ni frame-ancestors por
 * cabecera, y el navegador ignora frame-ancestors cuando la política viene por
 * meta. Sin esto, un sitio hostil puede embeber LaFranciaGO en un iframe
 * invisible y lograr que la gente toque botones sin darse cuenta.
 *
 * Va acá y no en un script inline del HTML porque la CSP prohíbe scripts
 * inline: ahí quedaría bloqueado y daría una falsa sensación de protección.
 */
const guardAgainstFraming = () => {
  try {
    if (window.top !== window.self) {
      window.top!.location = window.self.location;
    }
  } catch {
    /* Origen distinto: no se puede ni leer el padre. Se oculta el contenido. */
    document.documentElement.style.display = 'none';
  }
};

guardAgainstFraming();


if (import.meta.env.PROD) {
  registerSW({ immediate: true });
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el nodo root');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
