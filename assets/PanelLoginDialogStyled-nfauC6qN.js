import{q as r}from"./index-CVpm7Ujl.js";const a=r.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:o})=>o.zIndex.header+30};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[3]};
  background: rgba(5, 8, 22, 0.62);
  backdrop-filter: blur(6px);
`,t=r.div`
  width: 100%;
  max-width: 24rem;
  /* En pantallas bajas el modal scrollea en lugar de cortarse. */
  max-height: 90vh;
  overflow-y: auto;
  padding: ${({theme:o})=>o.spacing[4]};
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.lg};
`,i=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-bottom: ${({theme:o})=>o.spacing[3]};
`,l=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:o})=>o.radius.full};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease;

  &:hover {
    color: ${({theme:o})=>o.color.text};
  }
`,n=r.button`
  display: block;
  width: 100%;
  padding: ${({theme:o})=>o.spacing[2]};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: transparent;
  color: ${({theme:o})=>o.color.textMuted};
  font-family: ${({theme:o})=>o.typography.fontFamily.body};
  font-size: ${({theme:o})=>o.typography.size.xs};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &:hover {
    border-color: ${({theme:o})=>o.color.primary};
    color: ${({theme:o})=>o.color.primary};
  }
`;export{a as P,t as a,i as b,l as c,n as d};
