import styled from 'styled-components';

// ── Feed de notificaciones ──

export const NotificationFeed = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const NotificationCard = styled.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &[data-unread='true'] {
    border-color: rgba(0, 71, 231, 0.24);
  }
`;

export const NotificationCardIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
`;

export const NotificationCardCopy = styled.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const NotificationCardTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const NotificationCardTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
`;

export const NotificationCardDate = styled.span`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const NotificationCardSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: 1.4;
`;

export const NotificationUnreadDot = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  right: ${({ theme }) => theme.spacing[2]};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.danger};
`;

export const NotificationClearButton = styled.button`
  justify-self: end;
  min-height: 2.25rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.danger};
    background: rgba(220, 38, 38, 0.08);
  }
`;
