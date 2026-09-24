import{q as r}from"./estilos-DzHAJWDP.js";const s=r.section`
  margin-top: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[3]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};
`,e=r.h2`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  margin: 0 0 ${({theme:o})=>o.spacing[2]};

  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.base};
  line-height: 1.2;

  > svg {
    color: ${({theme:o})=>o.color.primary};
  }
`,t=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    align-items: end;
  }
`,n=r.label`
  display: grid;
  gap: 0.25rem;
  min-width: 0;

  > span {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }

  > input,
  > select {
    width: 100%;
    min-width: 0;
    height: 2.5rem;
    padding: 0 ${({theme:o})=>o.spacing[2]};

    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: inherit;
    font-size: ${({theme:o})=>o.typography.size.sm};

    /* Los importes se leen mejor con todos los dígitos del mismo ancho. */
    font-variant-numeric: tabular-nums;

    &:focus-visible {
      outline: 2px solid ${({theme:o})=>o.color.primary};
      outline-offset: 1px;
    }
  }
`,l=r.button`
  height: 2.5rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: 600;
  cursor: pointer;

  &[data-tono='fuerte'] {
    border-color: ${({theme:o})=>o.color.primary};
    background: ${({theme:o})=>o.color.primary};
    color: ${({theme:o})=>o.color.onPrimary};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 2px;
  }
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing[2]};
`;const c=r.div`
  display: grid;
`,i=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[2]} 0;
  border-top: 1px solid ${({theme:o})=>o.color.border};

  &:first-child {
    border-top: 0;
  }

  > div {
    flex: 1 1 auto;
    min-width: 0;

    > strong {
      display: block;
      font-size: ${({theme:o})=>o.typography.size.sm};
    }

    > span {
      display: block;
      color: ${({theme:o})=>o.color.textSoft};
      font-size: ${({theme:o})=>o.typography.size.xs};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`,d=r.span`
  flex: none;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-variant-numeric: tabular-nums;

  &[data-signo='mas'] {
    color: ${({theme:o})=>o.color.success};
  }

  &[data-signo='menos'] {
    color: ${({theme:o})=>o.color.danger};
  }
`,p=r(i)``,g=r.span`
  flex: none;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;

  &[data-tono='justo'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({theme:o})=>o.color.success};
  }

  &[data-tono='dispar'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:o})=>o.color.warning};
  }
`,m=r.p`
  margin: 0;
  padding: ${({theme:o})=>o.spacing[3]} 0;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.sm};
  text-align: center;
`,$=r.p`
  margin: 0 0 ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-inline-start: 3px solid ${({theme:o})=>o.color.primary};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
`;export{$ as A,n as C,g as D,t as F,c as L,d as M,s as P,e as T,m as V,l as a,i as b,p as c};
