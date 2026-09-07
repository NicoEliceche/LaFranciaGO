import{q as r}from"./index-DmRIvc-c.js";const e=r.div`
  width: 100%;
  max-width: 26rem;
  margin-inline: auto;
`,a=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[2]};
  width: 100%;
  min-height: 3rem;
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: #ffffff;
  color: #1f1f1f;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: box-shadow 180ms ease;

  &:hover:not(:disabled) {
    box-shadow: ${({theme:o})=>o.shadow.sm};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,n=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};

  /* Las líneas se dibujan a los lados del texto con pseudoelementos, sin
     marcado extra que el lector de pantalla tenga que anunciar. */
  &::before,
  &::after {
    content: '';
    flex: 1 1 auto;
    height: 1px;
    background: ${({theme:o})=>o.color.border};
  }
`,i=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[2]};
  width: 100%;
  min-height: 3rem;
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:o})=>o.color.brandHover};
  }

  &:disabled {
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.textSoft};
    cursor: not-allowed;
  }
`,s=r.p`
  margin: 0;
  padding: ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.md};
  font-size: ${({theme:o})=>o.typography.size.xs};
  line-height: 1.4;

  &[data-tono='error'] {
    border: 1px solid ${({theme:o})=>o.color.danger};
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.danger};
  }

  &[data-tono='aviso'] {
    border: 1px solid ${({theme:o})=>o.color.border};
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.textMuted};
  }
`,d=r.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[1]};
  margin: 0;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
`,l=r.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: ${({theme:o})=>o.color.primary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  text-decoration: underline;
`;export{s as A,i as a,e as b,a as c,n as d,d as e,l as f};
