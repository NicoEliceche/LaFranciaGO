import styled from 'styled-components';

/**
 * Un reclamo en la lista.
 *
 * Lo primero que se lee es de qué pedido se trata y en qué estado está: quien
 * abre esta pantalla viene a buscar cuáles faltan atender, no a leerlos todos.
 */
export const ReclamoTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;

  > strong {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size.sm};
    overflow-wrap: anywhere;
  }
`;

/**
 * En qué anda el reclamo.
 *
 * Abierto es rojo porque es trabajo pendiente; resuelto verde y apagado,
 * porque ya no pide nada de nadie.
 */
export const ReclamoEstado = styled.span`
  padding: 0.12rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.68rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};

  &[data-estado='abierto'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-estado='en_revision'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-estado='resuelto'] {
    background: rgba(22, 163, 74, 0.14);
    color: ${({ theme }) => theme.color.success};
  }
`;

export const ReclamoDatos = styled.div`
  display: grid;
  gap: 0.15rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  overflow-wrap: anywhere;
`;

/** Lo que resolvió administración, cuando ya está cerrado. */
export const ReclamoResolucion = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  border-left: 3px solid ${({ theme }) => theme.color.success};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

/**
 * Quién escribió cada mensaje.
 *
 * En un chat de dos alcanza con "yo" y "el otro". Acá hablan tres, así que
 * cada burbuja dice de quién es: sin eso, "ya lo entregué" no se sabe si lo
 * dijo el negocio o quien reparte.
 */
export const AutorEtiqueta = styled.span`
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const ReclamoAcciones = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  > * {
    flex: 1 1 9rem;
  }
`;
