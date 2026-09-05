import { css } from 'styled-components';

/**
 * Acento neón del modo NOCHE.
 *
 * Jerarquía visual: el cian es color de acento, no el color de fondo de la
 * interfaz. Si todos los íconos brillan igual, ninguno destaca y compiten con
 * lo que sí tiene que dominar (la opción activa, los CTA y los productos).
 * Por eso hay dos escalones:
 *
 * - En reposo: el mismo cian pero desaturado y sin resplandor.
 * - Activo / hover: cian pleno con un glow sutil.
 *
 * Decisiones de performance:
 * - Un solo `drop-shadow` de radio chico (3px). Apilar dos capas duplica el
 *   pase de desenfoque sobre el mismo elemento y es lo que encarece el scroll.
 * - El estado de reposo no lleva filtro: al ser la mayoría de los íconos en
 *   pantalla, evitar el desenfoque ahí es lo que más ahorra al scrollear.
 * - Sólo se aplica en modo oscuro: en claro el filtro no existe, no queda
 *   una capa inerte pintándose de más.
 * - `box-shadow` para superficies (cajas) y `drop-shadow` sólo para íconos
 *   SVG, que es donde `box-shadow` no sigue la silueta.
 */

/**
 * Ícono en reposo: mismo cian de familia, bajado de saturación y sin
 * resplandor. Acompaña sin pelear por la atención.
 */
export const neonIcon = css`
  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      color: ${theme.color.neonMuted};
    `}
`;

/**
 * Ícono activo o en hover: cian pleno con un halo corto.
 * Es el escalón que marca dónde está parado el usuario.
 */
export const neonIconActive = css`
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
