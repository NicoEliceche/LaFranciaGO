import styled from 'styled-components';

/**
 * El diagnóstico de la computadora.
 *
 * Tres colores con significado: verde está bien, ámbar anda pero conviene
 * mejorarlo, rojo se queda corto. Salen de los tokens semánticos, que ya
 * están resueltos para los dos temas.
 *
 * El color nunca va solo: cada punto lleva además su ícono y su texto. Quien
 * no distingue rojo de verde —y en un pueblo chico hay más de uno— tiene que
 * poder leer lo mismo.
 */

export const EquipoResumen = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1.45;

  > svg {
    flex: 0 0 auto;
  }

  &[data-estado='bien'] {
    border-color: color-mix(in srgb, ${({ theme }) => theme.color.success} 40%, transparent);
    background: color-mix(in srgb, ${({ theme }) => theme.color.success} 12%, transparent);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-estado='justo'] {
    border-color: color-mix(in srgb, ${({ theme }) => theme.color.warning} 42%, transparent);
    background: color-mix(in srgb, ${({ theme }) => theme.color.warning} 14%, transparent);
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-estado='corto'] {
    border-color: color-mix(in srgb, ${({ theme }) => theme.color.danger} 40%, transparent);
    background: color-mix(in srgb, ${({ theme }) => theme.color.danger} 12%, transparent);
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const EquipoLista = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[3]} 0;
  padding: 0;
  list-style: none;
`;

export const EquipoPunto = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};

  /* Lo que hay que atender se despega del resto. */
  &[data-estado='corto'] {
    border-color: color-mix(in srgb, ${({ theme }) => theme.color.danger} 38%, transparent);
  }
`;

export const EquipoIcono = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};

  &[data-estado='bien'] {
    color: ${({ theme }) => theme.color.success};
  }

  &[data-estado='justo'] {
    color: ${({ theme }) => theme.color.warning};
  }

  &[data-estado='corto'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const EquipoDatos = styled.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const EquipoEncabezado = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 ${({ theme }) => theme.spacing[2]};

  > span {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: ${({ theme }) => theme.typography.size.sm};
    /* Los números de memoria y disco se comparan de un vistazo. */
    font-variant-numeric: tabular-nums;
  }
`;

export const EquipoTitulo = styled.strong`
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const EquipoDetalle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.45;
  overflow-wrap: anywhere;
`;

/**
 * Qué hacer al respecto.
 *
 * Es la parte que importa: el número solo no dice si hay que hacer algo.
 */
export const EquipoConsejo = styled.p`
  margin: 0.15rem 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.5;
  max-width: 60ch;
`;
