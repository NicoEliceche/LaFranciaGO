import styled from 'styled-components';

/**
 * El marco del sistema de gestión.
 *
 * El resto de la aplicación limita el contenido a 72rem, que es lo correcto
 * para leer y comprar. Un sistema de gestión se opera distinto: hay que ver
 * muchas filas y muchas columnas a la vez, y en un monitor de 1920 ese
 * límite deja el 40% de la pantalla sin usar.
 *
 * Por eso acá el ancho es el de la pantalla, con el menú al costado en
 * escritorio y abajo en el teléfono.
 */

export const Marco = styled.div`
  display: grid;
  min-height: 100dvh;
  background: ${({ theme }) => theme.color.background};

  /* En el teléfono es una sola columna: el menú va en un cajón. */
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 15rem minmax(0, 1fr);
  }

  /* Plegado, el lateral queda del ancho de un ícono y el contenido se lleva
     el resto: en un sistema de gestión esas 12rem son dos columnas más de
     una tabla. */
  &[data-plegado='si'] {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: 3.75rem minmax(0, 1fr);
    }
  }
`;

export const Lateral = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};

    position: sticky;
    top: 0;
    height: 100dvh;
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing[3]};

    background: ${({ theme }) => theme.color.surface};
    border-inline-end: 1px solid ${({ theme }) => theme.color.border};
  }

  &[data-plegado='si'] {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-inline: ${({ theme }) => theme.spacing[1]};
    }
  }
`;

export const MarcaLateral = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.15;
  }

  > span {
    display: block;
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const GrupoLateral = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};

  /* Plegado no hay lugar para el título del grupo; queda la línea que
     separa, que alcanza para que no sea una lista corrida. */
  [data-plegado='si'] & > h3 {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      height: 1px;
      margin: 0 0 ${({ theme }) => theme.spacing[1]};
      padding: 0;
      overflow: hidden;
      color: transparent;
      background: ${({ theme }) => theme.color.border};
    }
  }

  > h3 {
    margin: 0 0 ${({ theme }) => theme.spacing[1]};
    padding-inline: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.color.textSoft};
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export const ItemLateral = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-align: start;
  cursor: pointer;
  transition:
    background-color 140ms ease,
    color 140ms ease;

  > svg {
    flex: none;
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.text};
  }

  &[data-activo='si'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  /* Plegado se va el texto y queda el ícono centrado. El nombre sigue
     estando en el globo del botón. */
  &[data-comprimido='si'] {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      justify-content: center;
      gap: 0;

      > span {
        display: none;
      }
    }
  }

  /* Plegar el menú no tiene sentido en el teléfono: ahí el menú entero se
     cierra al elegir algo. */
  &[data-solo-escritorio='si'] {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: flex;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/**
 * El pie del menú: salir, cambiar el tema y plegar.
 *
 * Va al fondo y separado del resto porque no son secciones del sistema sino
 * cosas sobre el sistema. Mezclarlas con "Ventas" y "Caja" hace dudar de si
 * son otra pantalla más.
 */
export const PieLateral = styled.div`
  display: grid;
  gap: 0.1rem;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-block-start: 1px solid ${({ theme }) => theme.color.border};
`;

export const Contador = styled.span`
  flex: none !important;
  min-width: 1.35rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.onPrimary};
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
`;

export const Cuerpo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const BarraSuperior = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};

  background: ${({ theme }) => theme.color.surface};
  border-block-end: 1px solid ${({ theme }) => theme.color.border};

  /* En la aplicación instalada esta barra hace de barra de título: la ventana
     no tiene marco de Windows, así que sin zona de arrastre no se podría
     mover de lugar. En el navegador la propiedad no hace nada.

     Lo que se toca se marca no-drag: sobre una zona de arrastre, un clic
     sostenido mueve la ventana en vez de activar el botón. */
  -webkit-app-region: drag;

  button,
  a,
  input,
  select {
    -webkit-app-region: no-drag;
  }

  > h1 {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.lg};
    line-height: 1.15;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const BotonMenu = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

/* El contenido usa todo el ancho: es lo que diferencia esto del resto. */
export const Contenido = styled.main`
  flex: 1 1 auto;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

/* ── El cajón del menú, sólo en pantallas chicas ── */

export const Fondo = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(5, 8, 22, 0.45);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const Cajon = styled.nav`
  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  z-index: 41;
  width: min(17rem, 84vw);
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[3]};

  background: ${({ theme }) => theme.color.surface};
  border-inline-end: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

/**
 * Volver a la aplicación.
 *
 * Se entra al sistema desde el botón dorado del menú, pero hasta ahora no
 * había por dónde salir: el comercio quedaba adentro y dependía del botón
 * de atrás del navegador, que en la aplicación instalada no está.
 *
 * Va arriba del todo en el pie y con la flecha a la izquierda, que es como se
 * lee "salir de acá" en cualquier pantalla.
 */
export const VolverALaApp = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-align: start;
  cursor: pointer;
  transition:
    background-color 140ms ease,
    color 140ms ease;

  > svg {
    flex: none;
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  &[data-comprimido='si'] {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      justify-content: center;
      gap: 0;

      > span {
        display: none;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
