import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ── Pedido en el historial ──

export const OrderCardShell = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.24);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const OrderCardThumb = styled.div`
  flex: 0 0 auto;
  width: 3.5rem;
`;

export const OrderCardBody = styled.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`;

export const OrderCardHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;
`;

export const OrderCardStore = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OrderCardCode = styled.span`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const OrderStateBadge = styled.span`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.02em;

  &[data-state='proceso'] {
    background: ${({ theme }) => theme.color.primarySoft};
    color: ${({ theme }) => theme.color.primary};
  }

  &[data-state='terminado'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({ theme }) => theme.color.success};
  }

  &[data-state='cancelado'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const OrderCardEta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OrderCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: 0.1rem;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};

  > span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const OrderCardTotal = styled.strong`
  flex: 0 0 auto;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.primary};
`;
