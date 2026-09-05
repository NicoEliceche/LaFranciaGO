import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ── Tile de rubro ──

export const CategoryTileShell = styled(Link)`
  display: block;
  border-radius: ${({ theme }) => theme.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CategoryTileLabel = styled.span`
  position: absolute;
  inset: auto 0 0;
  z-index: 2;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[2]}
    ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
  background: linear-gradient(180deg, transparent 0%, rgba(5, 8, 22, 0.72) 100%);
  text-shadow: 0 1px 3px rgba(5, 8, 22, 0.4);
`;

/** Cantidad de negocios del rubro, arriba a la derecha del tile. */
export const CategoryTileCount = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1]};
  right: ${({ theme }) => theme.spacing[1]};
  z-index: 2;
  padding: 0.15rem 0.45rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(5, 8, 22, 0.62);
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  white-space: nowrap;
`;
