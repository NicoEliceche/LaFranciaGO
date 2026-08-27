import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// ── Tarjeta de producto ──

export const ProductCardShell = styled(Link)<{ $static?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({ $static }) =>
    $static
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({ theme }) => theme.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`;

export const ProductBody = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const ProductStore = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductName = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: 1.25;
  color: ${({ theme }) => theme.color.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const ProductPrice = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
`;

export const ProductOldPrice = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  text-decoration: line-through;
`;

export const ProductAddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;

export const ProductTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;
