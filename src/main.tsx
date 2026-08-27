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
