/**
 * Cada pantalla empieza arriba.
 *
 * El navegador conserva la posición del scroll al cambiar de dirección, que
 * es lo correcto cuando se va y se vuelve con los botones de atrás y
 * adelante. Pero acá casi siempre se entra a otra pantalla tocando algo: el
 * carrito, un pedido, un comercio. Y esa pantalla aparecía abierta por la
 * mitad, o directamente en el final, porque heredaba el scroll de la
 * anterior.
 *
 * Pasaba, por ejemplo, entrando al carrito desde el final del catálogo de un
 * comercio: el carrito se abría abajo de todo, mostrando el resumen y no lo
 * que se había cargado.
 *
 * Volver atrás sí conserva la posición, que es lo que la persona espera:
 * estaba mirando algo y quiere seguir donde estaba.
 */
import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export function SubirAlCambiar() {
  const { pathname } = useLocation();
  const navegacion = useNavigationType();

  useEffect(() => {
    /* POP es ir y volver con el historial. Ahí el navegador ya restauró la
       posición y subir sería pelearle. */
    if (navegacion === 'POP') {
      return;
    }

    /* Sin animación: no es un desplazamiento que la persona pidió ver, es
       que la pantalla nueva tiene que empezar donde empieza. */
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, navegacion]);

  return null;
}
