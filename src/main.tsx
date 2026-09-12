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
 * Quiénes sí pueden embeber la aplicación.
 *
 * Sólo el recorrido que se le muestra al cliente, publicado como artifact.
 * Cualquier otro sitio sigue bloqueado.
 */
const MARCOS_PERMITIDOS = [
  'https://claude.ai',
  'https://claude.site',
];

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
 *
 * La excepción son los marcos permitidos de arriba. Quién nos embebe no se
 * puede leer desde otro origen —por eso antes se escondía todo a ciegas—,
 * pero `document.referrer` sí dice de dónde vino la carga, y en un iframe es
 * la página que lo contiene. Alcanza para distinguir nuestro recorrido de un
 * sitio hostil, porque un atacante que quisiera falsearlo tendría que
 * controlar uno de esos dominios, y si los controla ya perdimos igual.
 */
const marcoPermitido = () => {
  if (!document.referrer) {
    return false;
  }

  try {
    const origen = new URL(document.referrer).origin;

    return MARCOS_PERMITIDOS.includes(origen);
  } catch {
    return false;
  }
};

const guardAgainstFraming = () => {
  /* No estamos en un marco: no hay nada que hacer. */
  if (window.top === window.self) {
    return;
  }

  /* El recorrido puede embebernos. Se chequea antes de tocar nada, porque
     sacar al padre de su página también rompería la demo. */
  if (marcoPermitido()) {
    return;
  }

  try {
    window.top!.location = window.self.location;
  } catch {
    /* Origen distinto: no se puede ni escribir en el padre. Se esconde el
       contenido, que es lo único que queda. */
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
