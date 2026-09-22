import styled, { css, keyframes } from 'styled-components';

/**
 * El ingreso a pantalla completa.
 *
 * El diseño nació oscuro, pero la aplicación tiene modo día y modo noche, y
 * saltar de un tema al otro al entrar se siente como si algo se hubiera roto.
 * Así que el fondo y el panel se arman con los colores del tema, y lo que se
 * conserva del diseño original es la forma: el resplandor detrás del panel,
 * la reja tenue y el vidrio esmerilado.
 *
 * De día esos efectos van más suaves. Sobre fondo claro, la misma intensidad
 * que de noche se ve sucia en vez de luminosa.
 */

const esDeNoche = (modo: string | undefined) => modo === 'dark';

const entradaPanel = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const flotar = keyframes`
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(36px, 24px, 0) scale(1.08);
  }
`;

const latido = keyframes`
  0%, 100% {
    opacity: 0.55;
  }
  50% {
    opacity: 0.95;
  }
`;

export const Pantalla = styled.main`
  position: relative;
  min-height: 100vh;
  /* dvh sigue a la barra del navegador en el teléfono: con vh solo, el panel
     queda parcialmente tapado cuando la barra está desplegada. */
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 2rem 1.25rem;
  isolation: isolate;
  overflow: hidden;
  background: ${({ theme }) =>
    esDeNoche(theme.mode)
      ? `radial-gradient(circle at 20% 15%, ${theme.color.primary}30, transparent 34%),
         radial-gradient(circle at 80% 82%, ${theme.color.primary}18, transparent 30%),
         ${theme.color.background}`
      : `radial-gradient(circle at 20% 15%, ${theme.color.primary}14, transparent 36%),
         radial-gradient(circle at 80% 82%, ${theme.color.primary}0D, transparent 32%),
         ${theme.color.background}`};

  @media (max-width: 520px) {
    padding: 1.125rem 0.875rem;
  }
`;

/** Los dos resplandores que se mueven despacio detrás de todo. */
export const Fondo = styled.div`
  position: absolute;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    filter: blur(28px);
    opacity: ${({ theme }) => (esDeNoche(theme.mode) ? 0.26 : 0.16)};
    animation: ${flotar} 14s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
  }

  &::before {
    left: -180px;
    top: -160px;
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.color.primary}E6, transparent 68%)`};
  }

  &::after {
    right: -200px;
    bottom: -180px;
    background: ${({ theme }) =>
      `radial-gradient(circle, ${theme.color.primary}8C, transparent 68%)`};
    animation-delay: -5s;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;

export const Reja = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  opacity: ${({ theme }) => (esDeNoche(theme.mode) ? 0.16 : 0.5)};
  background-image: ${({ theme }) => {
    const linea = esDeNoche(theme.mode) ? 'rgba(255,255,255,.05)' : 'rgba(11,16,32,.045)';

    return `linear-gradient(${linea} 1px, transparent 1px),
            linear-gradient(90deg, ${linea} 1px, transparent 1px)`;
  }};
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at center, black 28%, transparent 82%);
  -webkit-mask-image: radial-gradient(circle at center, black 28%, transparent 82%);
`;

export const Haz = styled.div`
  position: absolute;
  z-index: -1;
  width: 70vw;
  max-width: 900px;
  height: 220px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-16deg);
  pointer-events: none;
  filter: blur(14px);
  background: ${({ theme }) => {
    const fuerte = esDeNoche(theme.mode) ? '38' : '1A';
    const suave = esDeNoche(theme.mode) ? '14' : '0A';

    return `linear-gradient(90deg,
      transparent 0%,
      ${theme.color.primary}${suave} 25%,
      ${theme.color.primary}${fuerte} 50%,
      ${theme.color.primary}${suave} 75%,
      transparent 100%)`;
  }};
  animation: ${latido} 7s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Panel = styled.section`
  position: relative;
  width: min(100%, 470px);
  padding: 1.75rem;
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) =>
    esDeNoche(theme.mode) ? `${theme.color.surface}C7` : `${theme.color.surface}F0`};
  box-shadow: ${({ theme }) =>
    esDeNoche(theme.mode)
      ? '0 28px 90px rgba(0, 0, 0, 0.48)'
      : '0 24px 70px rgba(11, 16, 32, 0.14)'};
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  animation: ${entradaPanel} 700ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 520px) {
    padding: 1.375rem 1.125rem;
    border-radius: 24px;
  }
`;

export const Marca = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 1.5rem;

  @media (max-width: 520px) {
    margin-bottom: 1.25rem;
  }
`;

export const MarcaIcono = styled.div`
  flex: 0 0 auto;
  width: 66px;
  height: 66px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => `${theme.color.primary}24`};
  border: 1px solid ${({ theme }) => `${theme.color.primary}47`};

  img {
    width: 54px;
    height: 54px;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 520px) {
    width: 58px;
    height: 58px;
    border-radius: 16px;

    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const MarcaTexto = styled.div`
  min-width: 0;
`;

export const Volanta = styled.p`
  margin: 0 0 0.3rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Titulo = styled.h1`
  margin: 0;
  font-size: clamp(1.45rem, 4vw, 1.9rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  /* El nombre no se parte al medio en pantallas angostas. */
  text-wrap: balance;
`;

export const Nota = styled.p`
  margin: 0.625rem 0 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.94rem;
  line-height: 1.55;
`;

export const Formulario = styled.form`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Campo = styled.div`
  display: grid;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme.color.text};
    font-size: 0.84rem;
    font-weight: 700;
  }
`;

export const CampoFila = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;

  a {
    color: ${({ theme }) => theme.color.primary};
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CampoMarco = styled.div`
  position: relative;

  input {
    width: 100%;
    min-height: 52px;
    padding: 0 0.9375rem 0 2.8125rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: 14px;
    outline: none;
    font: inherit;
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) =>
      esDeNoche(theme.mode) ? `${theme.color.background}94` : theme.color.surfaceMuted};
    transition:
      border-color 170ms ease,
      background 170ms ease,
      box-shadow 170ms ease;

    &::placeholder {
      color: ${({ theme }) => theme.color.textSoft};
    }

    &:focus {
      border-color: ${({ theme }) => theme.color.primary};
      box-shadow: ${({ theme }) => `0 0 0 4px ${theme.color.primary}26`};
    }
  }
`;

export const CampoIcono = styled.span`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  pointer-events: none;
  color: ${({ theme }) => theme.color.textSoft};

  svg {
    width: 19px;
    height: 19px;
  }
`;

const botonBase = css`
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0 1.125rem;
  border-radius: 15px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    filter 180ms ease,
    background 180ms ease;

  &:disabled {
    opacity: 0.65;
    cursor: default;
  }

  &:active:not(:disabled) {
    transform: translateY(1px) scale(0.995);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active:not(:disabled) {
      transform: none;
    }
  }
`;

export const Entrar = styled.button`
  ${botonBase};
  border: 0;
  color: ${({ theme }) => theme.color.onPrimary};
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.color.primary} 0%, ${theme.color.brand} 48%, ${theme.color.brandHover} 100%)`};
  box-shadow: ${({ theme }) => `0 14px 34px ${theme.color.primary}47`};

  svg {
    width: 19px;
    height: 19px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      transform: translateY(-1px);
      filter: brightness(1.06);
    }
  }
`;

export const Google = styled.button`
  ${botonBase};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.surfaceMuted};

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.color.surface};
      border-color: ${({ theme }) => theme.color.borderStrong};
    }
  }
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.76rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.color.border};
  }
`;

export const Pie = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: 0.84rem;
  line-height: 1.55;

  a {
    color: ${({ theme }) => theme.color.primary};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Aviso = styled.p`
  margin: 0;
  padding: 0.75rem 0.875rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => `${theme.color.danger}59`};
  background: ${({ theme }) => `${theme.color.danger}1A`};
  color: ${({ theme }) => theme.color.danger};
  font-size: 0.88rem;
  line-height: 1.45;
`;

export const Seguridad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.125rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: 0.74rem;

  svg {
    width: 15px;
    height: 15px;
  }
`;
