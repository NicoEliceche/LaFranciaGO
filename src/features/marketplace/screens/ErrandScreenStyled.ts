import styled from 'styled-components';

import { neonIcon } from '@core/theme/neon';

// ── Alta de mandado ──

export const ErrandCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const ErrandLabel = styled.label`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ErrandTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({ theme }) => theme.color.danger};
  }
`;

export const ErrandHint = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
`;

export const ErrandFieldError = styled.span`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const ErrandExample = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  line-height: 1.4;
`;

export const ErrandNotes = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  padding: 0;
  list-style: none;
`;

export const ErrandNote = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.35;
`;

export const ErrandNoteIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.primary};

  ${neonIcon};
`;

export const ErrandSubmit = styled.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }
`;
