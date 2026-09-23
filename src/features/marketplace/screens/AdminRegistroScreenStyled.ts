import styled from 'styled-components';

/**
 * El registro se lee escaneando, no leyendo.
 *
 * Quien abre esta pantalla busca una línea entre cientos, así que manda la
 * densidad: líneas cortas, tipografía monoespaciada donde hay datos técnicos,
 * y el nivel marcado con color sobre el borde izquierdo para poder saltar los
 * avisos de un vistazo.
 */

export const Recordatorio = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => `${theme.color.warning}59`};
  background: ${({ theme }) => `${theme.color.warning}14`};
  color: ${({ theme }) => theme.color.text};
  font-size: 0.85rem;
  line-height: 1.5;
`;

export const Numeros = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Numero = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

  strong {
    font-size: 1.6rem;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  span {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: 0.8rem;
  }

  &[data-nivel='error'] strong {
    color: ${({ theme }) => theme.color.danger};
  }

  &[data-nivel='aviso'] strong {
    color: ${({ theme }) => theme.color.warning};
  }
`;

export const Buscador = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

  > svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.color.textSoft};
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.25rem;
    border: 0;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font: inherit;
    font-size: 0.9rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.textSoft};
    }
  }

  button {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 2.25rem;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.text};
    font: inherit;
    font-size: 0.85rem;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const Chip = styled.button`
  min-height: 2rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;

  &[data-activo='true'] {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
  }
`;

export const Lineas = styled.div`
  display: grid;
  gap: 0.25rem;
`;

export const Fila = styled.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  /* El nivel marcado sobre el borde izquierdo: permite saltar los avisos
     sin leerlos. */
  border-left: 3px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font: inherit;
  text-align: left;
  cursor: pointer;

  > svg {
    margin-top: 0.15rem;
    color: ${({ theme }) => theme.color.textSoft};
  }

  &[data-nivel='error'] {
    border-left-color: ${({ theme }) => theme.color.danger};

    > svg {
      color: ${({ theme }) => theme.color.danger};
    }
  }

  &[data-nivel='aviso'] {
    border-left-color: ${({ theme }) => theme.color.warning};

    > svg {
      color: ${({ theme }) => theme.color.warning};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }
`;

export const Pila = styled.span`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;

export const FilaMensaje = styled.span`
  font-size: 0.88rem;
  line-height: 1.35;
  /* Sin cortar: el mensaje es lo que se lee, y recortado obliga a abrir cada
     línea para saber si es la que se busca. */
  overflow-wrap: anywhere;
`;

export const FilaDonde = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.74rem;
  overflow-wrap: anywhere;
`;

export const FilaCuando = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.74rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`;

export const DetalleCaja = styled.div`
  position: fixed;
  inset: auto 0 0 0;
  z-index: ${({ theme }) => theme.zIndex.header + 20};
  max-height: 72vh;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-top: 1px solid ${({ theme }) => theme.color.borderStrong};
  border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
  background: ${({ theme }) => theme.color.surface};
  box-shadow: 0 -12px 40px rgba(5, 8, 22, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    inset: auto 1.5rem 1.5rem auto;
    width: min(46rem, calc(100vw - 3rem));
    max-height: 80vh;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.color.borderStrong};
  }
`;

export const DetalleTitulo = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  span {
    font-size: 0.92rem;
    font-weight: 600;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }
`;

export const Cerrar = styled.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }
`;

export const Detalle = styled.div`
  overflow: auto;
  padding: ${({ theme }) => theme.spacing[3]};

  p {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};
    margin: 0 0 0.25rem;
    font-size: 0.82rem;

    strong {
      flex: 0 0 5rem;
      color: ${({ theme }) => theme.color.textMuted};
      font-weight: 600;
    }
  }

  pre {
    margin: ${({ theme }) => theme.spacing[3]} 0 0;
    padding: ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surfaceMuted};
    color: ${({ theme }) => theme.color.text};
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.76rem;
    line-height: 1.5;
    /* El stack se lee en líneas, pero una ruta larga no debe desbordar. */
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`;
