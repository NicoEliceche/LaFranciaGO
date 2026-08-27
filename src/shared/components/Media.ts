import styled, { css } from 'styled-components';

import type { MediaTone } from '@shared/types/media.types';

// ── Superficies de imagen ──
// El marco reserva el espacio (aspect-ratio) para evitar CLS y recorta la imagen.
// Cuando no hay foto, el fallback tonal ocupa exactamente el mismo lugar.

export const MediaFrame = styled.div<{ $ratio?: string; $radius?: 'md' | 'lg' | 'xl' | 'full' }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio ?? '4 / 3'};
  overflow: hidden;
  border-radius: ${({ theme, $radius }) => theme.radius[$radius ?? 'lg']};
  background: ${({ theme }) => theme.color.surfaceMuted};
  isolation: isolate;
`;

export const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const toneSurface = css<{ $tone?: MediaTone }>`
  background: ${({ $tone = 'blue' }) => {
    const tones: Record<MediaTone, string> = {
      blue: 'linear-gradient(135deg, #0047E7 0%, #2563EB 100%)',
      green: 'linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)',
      violet: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
      orange: 'linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)',
      red: 'linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)',
      gold: 'linear-gradient(135deg, #A16207 0%, #EAB308 100%)',
      slate: 'linear-gradient(135deg, #334155 0%, #64748B 100%)',
    };

    return tones[$tone];
  }};
`;

export const MediaFallback = styled.div<{ $tone?: MediaTone }>`
  ${toneSurface};
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.onPrimary};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.32), transparent 58%);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const MediaFallbackLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

// ── Overlays sobre la imagen ──

export const MediaOverlayTop = styled.div`
  position: absolute;
  inset: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]} auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[1]};
  z-index: 2;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

export const MediaOverlayBottom = styled.div`
  position: absolute;
  inset: auto ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[1]};
  z-index: 2;
`;

// ── Avatar circular (logos de comercio) ──

export const Avatar = styled.span<{ $size?: string; $tone?: MediaTone }>`
  ${toneSurface};
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: ${({ $size }) => $size ?? '3rem'};
  height: ${({ $size }) => $size ?? '3rem'};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
`;

export const AvatarImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
