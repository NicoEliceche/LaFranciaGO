import {
  type ComponentType,
  type PointerEvent as ReactPointerEvent,
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
  /**
   * Riel a usar como pista. Permite conservar los anchos y el snap de cada
   * sección, reutilizando la lógica de flechas sin duplicarla.
   */
  as?: ComponentType<{
    ref?: unknown;
    children?: ReactNode;
    'aria-label'?: string;
    onPointerDown?: (event: ReactPointerEvent<HTMLDivElement>) => void;
  }>;
};

/** Margen de tolerancia: evita que la flecha parpadee por 1px de redondeo. */
const EDGE_TOLERANCE = 4;

/**
 * Cuánto hay que mover el mouse para que cuente como arrastre y no como clic.
 * Por debajo de esto, tocar una tarjeta sigue abriéndola.
 */
const DRAG_THRESHOLD_PX = 6;

/**
 * Riel horizontal con indicadores de scroll.
 *
 * Las flechas aparecen sólo si hay contenido oculto de ese lado: al inicio
 * únicamente la derecha, al final únicamente la izquierda, y ambas en el
 * medio. Si todo entra en pantalla no se muestra ninguna.
 */
export function ScrollRail({ children, className, as: Track, ...rest }: ScrollRailProps) {
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

  /* La manito sólo tiene sentido si hay algo para arrastrar y hay mouse. */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const finePointer = window.matchMedia?.('(pointer: fine)').matches ?? false;
    track.style.cursor = finePointer && (canScrollLeft || canScrollRight) ? 'grab' : '';
  }, [canScrollLeft, canScrollRight]);

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

  /**
   * Arrastre con el mouse para desplazar el riel.
   *
   * Sólo se engancha al mouse: en pantallas táctiles el navegador ya scrollea
   * solo, e interferir ahí empeora el gesto nativo. Hasta superar el umbral no
   * se toca nada, así un clic sobre una tarjeta sigue funcionando.
   */
  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const startX = event.clientX;
    const startScroll = track.scrollLeft;
    let dragging = false;

    /* Los enlaces e imágenes tienen arrastre nativo: el navegador se lleva el
       gesto para "arrastrar el link" y el riel nunca llega a moverse. Por eso
       el arrastre sólo funcionaba en el hueco entre tarjetas. */
    const blockNativeDrag = (dragEvent: Event) => dragEvent.preventDefault();

    track.addEventListener('dragstart', blockNativeDrag);

    const onMove = (moveEvent: PointerEvent) => {
      const delta = moveEvent.clientX - startX;

      if (!dragging) {
        if (Math.abs(delta) < DRAG_THRESHOLD_PX) {
          return;
        }

        dragging = true;
        /* El scroll suave pelea contra el arrastre: mientras dura, directo. */
        track.style.scrollBehavior = 'auto';
        track.style.cursor = 'grabbing';
        track.style.userSelect = 'none';
      }

      track.scrollLeft = startScroll - delta;
    };

    const onUp = () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onUp);
      track.removeEventListener('dragstart', blockNativeDrag);

      track.style.scrollBehavior = '';
      track.style.cursor = '';
      track.style.userSelect = '';

      /* Tras un arrastre real se anula el clic que el navegador dispara al
         soltar, para no abrir la tarjeta donde terminó el gesto. */
      if (dragging) {
        const swallowClick = (clickEvent: MouseEvent) => {
          clickEvent.stopPropagation();
          clickEvent.preventDefault();
        };

        track.addEventListener('click', swallowClick, { capture: true, once: true });
        /* Si no hubo clic (por ejemplo, se soltó fuera), se limpia igual. */
        window.setTimeout(
          () => track.removeEventListener('click', swallowClick, { capture: true }),
          0,
        );
      }

      sync();
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
    document.addEventListener('pointercancel', onUp);
  };

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

      {Track ? (
        <Track ref={trackRef} onPointerDown={handlePointerDown} {...rest}>
          {children}
        </Track>
      ) : (
        <ScrollRailTrack ref={trackRef} onPointerDown={handlePointerDown} {...rest}>
          {children}
        </ScrollRailTrack>
      )}

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
