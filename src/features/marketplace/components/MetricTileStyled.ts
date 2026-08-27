import { neonIcon } from '@core/theme/neon';

import styled from 'styled-components';

// ── Métrica de panel ──

export const MetricTileShell = styled.div`
  display: grid;
  gap: 0.1rem;
  align-content: start;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const MetricTileIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};

  ${neonIcon};
`;

export const MetricTileLabel = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MetricTileValue = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
  line-height: 1.15;
`;

export const MetricTileHelp = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;
