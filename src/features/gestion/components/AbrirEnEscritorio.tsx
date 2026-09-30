/**
 * El botón que abre la aplicación instalada, desde el navegador.
 *
 * La caja rápida necesita la lectora y la impresora, que están en la
 * computadora del local. Quien mira la web se encuentra con el aviso que se
 * lo explica; esto es el camino para llegar: navega a `lafranciago://caja`,
 * y Windows se la entrega a la aplicación instalada.
 *
 * El problema de los enlaces de protocolo es que cuando no hay nada del otro
 * lado, no pasa nada. Ni error, ni aviso: el navegador se queda quieto y
 * quien lo tocó concluye que la aplicación está rota. Por eso, si seguimos
 * en esta pestaña unos segundos después, se asume que no se abrió y se
 * explica qué falta.
 *
 * Es una suposición y no un dato: el navegador no nos deja saber si la
 * aplicación existe. Por eso el mensaje dice "si no se abrió" en lugar de
 * afirmar que no está instalada, que sería mentirle a quien sí la tiene y
 * simplemente tardó en aparecer.
 */
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

import { AbrirEscritorio, EscritorioNoEsta } from '../screens/CajaScreenStyled';

/* Cuánto se espera antes de suponer que no se abrió. Un segundo y medio es
   poco para una aplicación que arranca de cero; tres deja la pantalla
   demasiado tiempo sin decir nada. */
const ESPERA_MS = 2500;

export function AbrirEnEscritorio() {
  const [noSeAbrio, setNoSeAbrio] = useState(false);
  const reloj = useRef<number | null>(null);

  /* Si la aplicación se abre, el navegador pierde el foco o la pestaña deja
     de estar visible. Eso se usa para cancelar el aviso: es la única señal
     que da el navegador de que algo pasó. */
  useEffect(() => {
    const cancelar = () => {
      if (reloj.current !== null) {
        window.clearTimeout(reloj.current);
        reloj.current = null;
      }
    };

    const alOcultarse = () => {
      if (document.visibilityState === 'hidden') cancelar();
    };

    window.addEventListener('blur', cancelar);
    document.addEventListener('visibilitychange', alOcultarse);

    return () => {
      cancelar();
      window.removeEventListener('blur', cancelar);
      document.removeEventListener('visibilitychange', alOcultarse);
    };
  }, []);

  const abrir = () => {
    setNoSeAbrio(false);

    /* Se navega en lugar de abrir una pestaña: una pestaña nueva para un
       protocolo deja una ventana en blanco abierta si nadie la atiende. */
    window.location.href = 'lafranciago://caja';

    reloj.current = window.setTimeout(() => setNoSeAbrio(true), ESPERA_MS);
  };

  return (
    <>
      <AbrirEscritorio type="button" onClick={abrir}>
        <ExternalLink size={15} aria-hidden="true" />
        Abrir aplicación de escritorio
      </AbrirEscritorio>

      {noSeAbrio ? (
        <EscritorioNoEsta role="status">
          Si no se abrió, es que esta computadora todavía no tiene la
          aplicación instalada. Pedísela a la administración: se instala una
          vez y queda.
        </EscritorioNoEsta>
      ) : null}
    </>
  );
}
