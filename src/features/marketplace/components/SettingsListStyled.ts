import { Link } from 'react-router-dom';
import { neonIcon } from '@core/theme/neon';

import styled, { css } from 'styled-components';

// ── Lista de ajustes ──

export const SettingsListShell = styled.div`
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;

  > * + * {
    border-top: 1px solid ${({ theme }) => theme.color.border};
  }
`;

const settingsRow = css`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: transparent;
  text-align: left;
`;

export const SettingsRowShell = styled.div`
  ${settingsRow};
`;

export const SettingsRowLink = styled(Link)`
  ${settingsRow};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceMuted};
  }
`;

export const SettingsRowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};

  ${neonIcon};

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const SettingsRowCopy = styled.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const SettingsRowTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};

  &[data-tone='danger'] {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const SettingsRowSubtitle = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SettingsRowChevron = styled.span`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  color: ${({ theme }) => theme.color.textSoft};
`;
