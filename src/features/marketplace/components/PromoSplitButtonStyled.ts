import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { neonIcon } from '@core/theme/neon';

// ── Acceso compacto de captación ──

export const PromoSplitShell = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 3.25rem;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSoft};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const PromoSplitIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};

  ${neonIcon};
`;

export const PromoSplitLabel = styled.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;
