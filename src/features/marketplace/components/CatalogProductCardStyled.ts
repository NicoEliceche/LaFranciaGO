import styled from 'styled-components';

// ── Producto del catálogo ──

export const CatalogCardShell = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const CatalogCardBody = styled.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const CatalogCardName = styled.h3`
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

export const CatalogCardPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const CatalogCardPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
`;

export const CatalogCardTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const CatalogStepper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  flex: 0 0 auto;
  padding: 0.15rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
`;

export const CatalogStepperButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;

  /* El círculo se ve chico, pero el área que responde al dedo
     llega a 44px como pide el sistema de diseño. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.brand};
    color: ${({ theme }) => theme.color.onPrimary};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.textSoft};
    cursor: not-allowed;
  }
`;

export const CatalogStepperValue = styled.span`
  min-width: 1.5rem;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary};
`;

export const CatalogAddToCartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 100%;
  min-height: 2.25rem;
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }

  /* Confirmación breve al sumar al pedido. */
  &[data-added='true'] {
    background: ${({ theme }) => theme.color.success};
  }
`;

export const CatalogInCartHint = styled.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  text-align: center;
`;

/** Aclara a qué corresponde el precio cuando no se vende por unidad. */
export const CatalogCardPriceUnit = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;
