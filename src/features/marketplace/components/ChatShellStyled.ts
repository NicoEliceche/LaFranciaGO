import styled from 'styled-components';

/**
 * La ventana del chat.
 *
 * Antes reusaba el contenedor de los diálogos chicos, y eso traía tres
 * problemas: 24rem de ancho es angosto para conversar en una computadora, el
 * modal entero scrolleaba —así que al subir a leer, el campo de escritura se
 * iba de pantalla— y en el teléfono quedaba flotando en el medio con el fondo
 * asomando por los costados, que no es como se ve ningún chat conocido.
 *
 * Acá el chat tiene su propia caja: en el teléfono ocupa toda la pantalla,
 * como cualquier aplicación de mensajería, y en la computadora es una ventana
 * cómoda. Lo único que scrollea es la lista de mensajes; el encabezado y la
 * caja de escritura quedan fijos.
 */

export const ChatOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.header + 30};
  display: flex;
  background: rgba(5, 8, 22, 0.62);
  backdrop-filter: blur(6px);

  /* En el teléfono el chat es la pantalla: sin margen ni fondo asomando. */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const ChatVentana = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  /* Alto real en móvil: 100vh deja la caja de escritura debajo de la barra
     del navegador, que es el defecto clásico de un chat en el teléfono. */
  height: 100dvh;
  min-height: 0;
  background: ${({ theme }) => theme.color.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 0 1 auto;
    width: min(42rem, 100%);
    height: min(44rem, 88vh);
    border-radius: ${({ theme }) => theme.radius.xl};
    border: 1px solid ${({ theme }) => theme.color.border};
    box-shadow: ${({ theme }) => theme.shadow.lg};
    overflow: hidden;
  }
`;

/**
 * El encabezado, fijo arriba.
 *
 * Dice con quién se está hablando y de qué pedido, que es lo que alguien
 * necesita saber al abrir una conversación entre varias.
 */
export const ChatCabecera = styled.header`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 0 0 auto;
  padding: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

  /* En el teléfono respeta la muesca y la barra de estado. */
  padding-top: max(${({ theme }) => theme.spacing[3]}, env(safe-area-inset-top));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: ${({ theme }) => theme.spacing[3]};
  }
`;

/** La inicial de quien está del otro lado, como en cualquier chat. */
export const ChatAvatar = styled.span`
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
`;

export const ChatQuien = styled.div`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > span {
    color: ${({ theme }) => theme.color.textSoft};
    font-size: ${({ theme }) => theme.typography.size.xs};
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ChatCerrar = styled.button`
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }
`;

/**
 * La lista de mensajes: lo único que scrollea.
 *
 * Va en columna invertida para que al llegar un mensaje quede abajo sin tener
 * que calcular el scroll a mano, que es lo que hace saltar la vista cuando
 * alguien está leyendo mensajes viejos.
 */
export const ChatCuerpo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.15rem;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.color.background};
`;

/**
 * Un separador de día.
 *
 * "Hoy" y "Ayer" en vez de la fecha: es como lo lee cualquiera, y ubica sin
 * tener que pensar.
 */
export const ChatDia = styled.div`
  align-self: center;
  margin: ${({ theme }) => theme.spacing[3]} 0 ${({ theme }) => theme.spacing[2]};
  padding: 0.15rem ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &:first-child {
    margin-top: 0;
  }
`;

/**
 * La caja de escritura, fija abajo.
 *
 * El campo crece con el texto hasta unas líneas y después scrollea, que es lo
 * que hacen todos: escribir un mensaje largo en un renglón de una línea es
 * escribir a ciegas.
 */
export const ChatPie = styled.form`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 0 0 auto;
  padding: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

  /* Que la barra de gestos del teléfono no tape el campo. */
  padding-bottom: max(${({ theme }) => theme.spacing[3]}, env(safe-area-inset-bottom));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ChatCampo = styled.textarea`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.75rem;
  max-height: 7rem;
  padding: 0.65rem ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
  }
`;
