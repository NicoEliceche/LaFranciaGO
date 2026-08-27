import { css } from 'styled-components';

/**
 * Acento neón del modo NOCHE.
 *
 * Decisiones de performance:
 * - Un solo `drop-shadow` de radio chico (3px). Apilar dos capas duplica el
 *   pase de desenfoque sobre el mismo elemento y es lo que encarece el scroll.
 * - Sólo se aplica en modo oscuro: en claro el filtro no existe, no queda
 *   una capa inerte pintándose de más.
 * - `box-shadow` para superficies (cajas) y `drop-shadow` sólo para íconos
 *   SVG, que es donde `box-shadow` no sigue la silueta.
 */

/** Resplandor para íconos SVG. */
export const neonIcon = css`
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      color: ${theme.color.neon};
      filter: drop-shadow(0 0 3px ${theme.color.neonSoft});
    `}
`;

/** Contorno luminoso para superficies: botones, chips, tarjetas. */
export const neonSurface = css`
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;

/** Realce del elemento activo, un escalón más intenso. */
export const neonActive = css`
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      color: ${theme.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;
