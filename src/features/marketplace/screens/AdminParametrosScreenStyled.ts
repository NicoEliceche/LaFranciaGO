import styled from 'styled-components';

/**
 * La pantalla de parámetros.
 *
 * Cada parámetro es una fila alta con su explicación arriba del campo, y no
 * una tabla apretada: acá se cambia el alias donde entra la plata, y la
 * densidad de una tabla invita a tocar rápido y equivocarse.
 */

export const ParamGrupo = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
`;

export const ParamGrupoTitulo = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
`;

/**
 * Un parámetro.
 *
 * En pantalla ancha la explicación y el campo comparten fila: el texto a la
 * izquierda y el valor a la derecha, que es como se lee un formulario de
 * configuración. En el teléfono se apila.
 */
export const ParamFila = styled.div`
  display: grid;
  gap: 0.35rem;
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.color.border};

  &:first-of-type {
    padding-top: 0;
    border-top: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 20rem);
    grid-template-areas:
      'etiqueta campo'
      'ayuda    campo'
      'editado  boton';
    align-items: start;
    column-gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const ParamEtiqueta = styled.label`
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: etiqueta;
  }
`;

export const ParamAyuda = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.5;
  /* Se deja respirar: es la línea que evita que alguien cambie un número sin
     saber qué hace. */
  max-width: 46ch;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: ayuda;
  }
`;

export const ParamCampo = styled.input`
  width: 100%;
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  /* Un CBU y un alias se leen dígito por dígito al compararlos con el
     papel. */
  font-variant-numeric: tabular-nums;

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: campo;
  }
`;

/**
 * El botón de guardar, que aparece sólo si hay algo que guardar.
 *
 * Un botón siempre visible junto a un campo sin cambios no dice nada; cuando
 * aparece, es la señal de que hay algo sin confirmar.
 */
export const ParamGuardar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.brandHover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: boton;
    justify-self: end;
  }
`;

export const ParamEditado = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};

  /* Recién guardado: en verde, que es lo que se busca con la mirada después
     de tocar el botón. */
  &[data-recien] {
    color: ${({ theme }) => theme.color.success};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: editado;
  }
`;

export const ParamVacio = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;
