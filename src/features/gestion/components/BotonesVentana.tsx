/**
 * Minimizar, achicar y cerrar, para la aplicación instalada.
 *
 * La ventana del mostrador no tiene marco de Windows: se abre y se ve la
 * aplicación, no una ventana con una aplicación adentro. El costo de eso es
 * que tampoco tiene los tres botones de arriba a la derecha, y hasta ahora
 * cerrar la caja pedía Alt+F4.
 *
 * Sólo aparecen en la aplicación instalada. En el navegador no tendrían nada
 * que cerrar —la pestaña la maneja el navegador— y un botón que no hace nada
 * es peor que no tenerlo.
 *
 * El orden es el de Windows y no otro: minimizar, tamaño, cerrar. Quien
 * atiende no mira antes de tocar, va con la mano a donde siempre estuvo.
 */
import { useEffect, useState } from 'react';
import { Minus, Square, Copy, X } from 'lucide-react';

import { esEscritorio } from '../entorno';

import { VentanaBoton, VentanaBotones } from './BotonesVentanaStyled';

export function BotonesVentana() {
  /* Si ocupa toda el área útil: decide qué ícono va en el del medio. */
  const [completa, setCompleta] = useState(true);

  const controles = window.lafranciagoEscritorio?.ventana;

  useEffect(() => {
    if (!controles) {
      return;
    }

    /* Se pregunta al montar porque la ventana pudo haber quedado de otro
       tamaño de la sesión anterior. */
    void controles.tamano().then((estado) => setCompleta(estado.completa));
  }, [controles]);

  /* En el navegador no se dibujan: no hay ventana que manejar. */
  if (!esEscritorio() || !controles) {
    return null;
  }

  return (
    <VentanaBotones aria-label="Controles de la ventana">
      <VentanaBoton
        type="button"
        onClick={() => void controles.minimizar()}
        aria-label="Minimizar"
        title="Minimizar"
      >
        <Minus size={15} aria-hidden="true" />
      </VentanaBoton>

      <VentanaBoton
        type="button"
        onClick={() => void controles.alternarTamano().then((e) => setCompleta(e.completa))}
        aria-label={completa ? 'Achicar la ventana' : 'Agrandar la ventana'}
        title={completa ? 'Achicar' : 'Agrandar'}
      >
        {completa ? (
          <Copy size={13} aria-hidden="true" />
        ) : (
          <Square size={13} aria-hidden="true" />
        )}
      </VentanaBoton>

      <VentanaBoton
        type="button"
        onClick={() => void controles.cerrar()}
        aria-label="Cerrar"
        title="Cerrar"
        data-cerrar
      >
        <X size={15} aria-hidden="true" />
      </VentanaBoton>
    </VentanaBotones>
  );
}
