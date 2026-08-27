import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ── Banner de captación ──

export const PromoBannerShell = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &[data-tone='brand'] {
    background: linear-gradient(135deg, ${({ theme }) => theme.color.brand} 0%, #2563EB 100%);
  }

  &[data-tone='dark'] {
    background: linear-gradient(135deg, ${({ theme }) => theme.color.surfaceDark} 0%, #16213F 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const PromoBannerIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`;

export const PromoBannerCopy = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const PromoBannerTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
`;

export const PromoBannerText = styled.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.35;
`;

export const PromoBannerArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;
