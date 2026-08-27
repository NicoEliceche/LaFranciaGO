import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ── Acceso a mandados, arriba de Inicio ──

export const ErrandBanner = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.brand} 0%, #2563eb 100%);
  color: ${({ theme }) => theme.color.onPrimary};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const ErrandBannerIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`;

export const ErrandBannerCopy = styled.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const ErrandBannerTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
`;

export const ErrandBannerText = styled.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.35;
`;

export const ErrandBannerArrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;
