import styled from 'styled-components';

import { DrawerItem, DrawerItemIcon } from './MarketplaceFrameStyled';

/**
 * La entrada al sistema de gestión, en dorado.
 *
 * El dorado la separa del resto del menú, que es azul: no es una pantalla
 * más, es lo que se paga aparte. Va tenue y no saturado, porque queda fija en
 * el menú y un color fuerte todo el día cansa.
 *
 * El dorado se escribe acá y no sale del tema porque no es un color del
 * sistema: no hay nada más premium en la aplicación. El día que lo haya,
 * pasa a ser un token.
 */
const DORADO = '#C9A227';
const DORADO_CLARO = '#E3C765';

export const ItemGestion = styled(DrawerItem)`
  border-color: ${DORADO}3D;
  background: linear-gradient(135deg, ${DORADO}1F, ${DORADO}0A);

  ${DrawerItemIcon} {
    background: ${DORADO}2E;
    color: ${DORADO};
  }

  /* Contratado ya no hace falta convencer a nadie, así que va más apagado:
     es una entrada del menú, no una oferta. */
  &[data-contratado='true'] {
    border-color: ${DORADO}29;
    background: ${DORADO}12;
  }

  /* Cuando está abierto manda la señal de "estás acá", como en el resto del
     menú, pero en dorado para no romper la familia. */
  &.active,
  &[aria-current='page'] {
    border-color: ${DORADO}66;
    background: ${DORADO}26;
    color: inherit;
  }

  &.active ${DrawerItemIcon},
  &[aria-current='page'] ${DrawerItemIcon} {
    background: ${DORADO};
    color: #1A1405;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${DORADO}7A;
      background: linear-gradient(135deg, ${DORADO}2E, ${DORADO}14);
    }
  }

  /* De noche el dorado oscuro se apaga contra el fondo: se aclara para que
     siga leyéndose como dorado y no como marrón. Se mira el tema de la
     aplicación y no el del sistema, que es el que la persona eligió. */
  ${({ theme }) =>
    theme.mode === 'dark' &&
    `
      color: ${DORADO_CLARO};

      ${DrawerItemIcon} {
        color: ${DORADO_CLARO};
      }
    `}
`;
