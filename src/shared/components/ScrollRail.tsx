import {
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  ScrollRailArrow,
  ScrollRailShell,
  ScrollRailTrack,
} from './ScrollRailStyled';

type ScrollRailProps = {
  children: ReactNode;
  'aria-label'?: string;
  className?: string;
};

/** Margen de tolerancia: evita que la flecha parpadee por 1px de redondeo. */
const EDGE_TOLERANCE = 4;

/**
 * Riel horizontal con indicadores de scroll.
 *
 * Las flechas aparecen sólo si hay contenido oculto de ese lado: al inicio
 * únicamente la derecha, al final únicamente la izquierda, y ambas en el
 * medio. Si todo entra en pantalla no se muestra ninguna.
 */
export function ScrollRail({ children, className, ...rest }: ScrollRailProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = track;

    setCanScrollLeft(scrollLeft > EDGE_TOLERANCE);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - EDGE_TOLERANCE);
  }, []);

  /* Se mide antes de pintar para no mostrar un estado equivocado. */
  useLayoutEffect(() => {
    sync();
  }, [sync, children]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    track.addEventListener('scroll', sync, { passive: true });
    /* `scrollend` cierra la animación suave; donde no existe, el scroll
       normal y el re-chequeo por timeout cubren el caso. */
    track.addEventListener('scrollend', sync, { passive: true });

    /* Se observa el riel y su contenido: el ancho disponible cambia al rotar
       el teléfono, y el contenido al terminar de medir fuentes o al filtrar. */
    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    observer?.observe(track);
    Array.from(track.children).forEach((child) => observer?.observe(child));

    /* Las fuentes web cambian el ancho de los chips al terminar de cargar. */
    document.fonts?.ready.then(sync).catch(() => undefined);

    return () => {
      track.removeEventListener('scroll', sync);
      track.removeEventListener('scrollend', sync);
      observer?.disconnect();
    };
  }, [sync]);

  const nudge = (direction: 1 | -1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    /* Avanza ~70% del ancho visible: deja a la vista el chip del borde. */
    track.scrollBy({ left: direction * track.clientWidth * 0.7, behavior: 'smooth' });

    /* El scroll suave puede terminar sin emitir un último evento: se vuelve
       a medir al cerrar la animación para no dejar una flecha de más. */
    window.setTimeout(sync, 420);
  };

  return (
    <ScrollRailShell className={className}>
      {canScrollLeft ? (
        <ScrollRailArrow
          type="button"
          data-side="left"
          onClick={() => nudge(-1)}
          aria-label="Ver filtros anteriores"
tabIndex={-1}
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </ScrollRailArrow>
      ) : null}

      <ScrollRailTrack ref={trackRef} {...rest}>
        {children}
      </ScrollRailTrack>

      {canScrollRight ? (
        <ScrollRailArrow
          type="button"
          data-side="right"
          onClick={() => nudge(1)}
          aria-label="Ver más filtros"
          tabIndex={-1}
        >
          <ChevronRight size={16} aria-hidden="true" />
        </ScrollRailArrow>
      ) : null}
    </ScrollRailShell>
  );
}
