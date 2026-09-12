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
 *
 * La única excepción es el recorrido que se le muestra al cliente, que pide
 * la aplicación con ?demo=1 en la dirección. No se mira quién embebe porque
 * desde otro origen no se puede leer, y el referrer llega vacío en cuanto el
 * marco tiene sandbox —que es justo el caso de la página del recorrido.
 *
 * Qué protege y qué no: el clickjacking sirve para que alguien toque algo
 * sin verlo, y para eso el marco tiene que ser invisible y la víctima tiene
 * que llegar sin enterarse. Con esta excepción, quien quiera embeber la
 * aplicación tiene que armar a propósito un enlace con ?demo=1; y esa misma
 * persona ya puede mandar a cualquiera a la aplicación directo, así que no
 * gana nada que no tuviera antes.
 */
const esRecorrido = () => {
  try {
    return new URLSearchParams(window.location.search).get('demo') === '1';
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
  if (esRecorrido()) {
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
