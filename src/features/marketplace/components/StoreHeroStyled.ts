import styled from 'styled-components';

// ── Portada de comercio ──

export const StoreHeroShell = styled.div`
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
`;

export const StoreHeroLogoWrap = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing[3]};
  bottom: ${({ theme }) => theme.spacing[2]};
  z-index: 2;
`;

export const StoreHeroBody = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const StoreHeroName = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
`;

export const StoreHeroSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const StoreHeroInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const StoreHeroMetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.85rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const StoreHeroOpenBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  /* Verde más profundo: blanco sobre success daba 3.5:1, por debajo de AA. */
  background: #0a7a43;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &[data-open='false'] {
    background: ${({ theme }) => theme.color.textSoft};
  }
`;

export const StoreHeroRatingBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  min-height: 1.6rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.warning};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

/**
 * El corazón para guardar el comercio, sobre la portada.
 *
 * Es el mismo gesto que en la tarjeta del listado. Estaba sólo allá, así que
 * entrando al comercio no había cómo guardarlo: había que volver atrás a
 * buscar la tarjeta, que es justo lo que nadie hace.
 */
export const StoreHeroFavorito = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textMuted};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  transition: color 160ms ease, transform 160ms ease;

  &[data-activo='true'] {
    color: ${({ theme }) => theme.color.danger};
  }

  &:hover {
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
