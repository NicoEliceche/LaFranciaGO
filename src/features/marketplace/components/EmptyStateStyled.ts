import { neonIcon } from '@core/theme/neon';

import styled from 'styled-components';

// ── Estado vacío ──

export const EmptyStateShell = styled.div`
  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  text-align: center;

  &[data-dashed='true'] {
    background: transparent;
    border-style: dashed;
  }
`;

export const EmptyStateIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};

  ${neonIcon};
`;

export const EmptyStateTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
`;

export const EmptyStateText = styled.p`
  margin: 0;
  max-width: 30ch;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.45;
`;

export const EmptyStateActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
`;
