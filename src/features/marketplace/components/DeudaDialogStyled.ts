import styled, { keyframes } from 'styled-components';

/**
 * El diálogo para saldar lo cobrado en efectivo.
 *
 * Sube desde abajo en el teléfono y se centra en la computadora, como el
 * resto de los diálogos de la aplicación. Acá se usa casi siempre desde el
 * teléfono, parado en la calle, así que todo lo que se toca es grande y los
 * números están en tipografía tabular para que no bailen al leerlos.
 */

const aparecer = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const subir = keyframes`
  from { opacity: 0; transform: translateY(1.5rem); }
  to { opacity: 1; transform: translateY(0); }
`;

export const DeudaFondo = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.header + 40};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${aparecer} 160ms ease-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: ${({ theme }) => theme.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const DeudaCaja = styled.div`
  position: relative;
  width: 100%;
  max-height: 92dvh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl} ${({ theme }) => theme.radius.xl} 0 0;
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  animation: ${subir} 200ms ease-out;
  padding-bottom: calc(${({ theme }) => theme.spacing[4]} + env(safe-area-inset-bottom));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 26rem;
    border-radius: ${({ theme }) => theme.radius.xl};
    padding-bottom: ${({ theme }) => theme.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const DeudaCerrar = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`;

export const DeudaTitulo = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: 0;
  padding-right: 2.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};

  svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const DeudaSubtitulo = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.45;
`;

export const DeudaCuerpo = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

/**
 * Lo que debe, en grande.
 *
 * Es el único número de la pantalla, así que ocupa lo que tiene que ocupar.
 * En verde cuando está al día: es una buena noticia y se lee como tal sin
 * tener que interpretar el cero.
 */
export const DeudaMonto = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  text-align: center;

  > span {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.color.success};
  }

  > small {
    color: ${({ theme }) => theme.color.textMuted};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  &[data-debe='true'] > span {
    color: ${({ theme }) => theme.color.warning};
  }
`;

/** Una fila con el dato y su botón de copiar. */
export const DeudaDato = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const DeudaDatoTexto = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  > strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-variant-numeric: tabular-nums;
    /* Un CBU son 22 dígitos: si no se puede partir, desborda la caja. */
    overflow-wrap: anywhere;
  }
`;

export const DeudaDatoTitulo = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const DeudaCopiar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  /* 44px: se toca con el pulgar, muchas veces con guantes. */
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const DeudaTitular = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-align: center;
`;

export const DeudaBloque = styled.div`
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const DeudaQrTitulo = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

/**
 * El QR, siempre sobre blanco.
 *
 * No hereda el tema: en modo oscuro un QR invertido no lo lee ninguna
 * cámara, y acá se está por transferir plata.
 */
export const DeudaQr = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: #fff;
`;

export const DeudaQrTitular = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const DeudaNota = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.45;
  text-align: center;
`;

export const DeudaVacio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  text-align: center;
`;
