import{q as r}from"./estilos-DzHAJWDP.js";const t=r.div`
  margin-bottom: ${({theme:o})=>o.spacing[2]};

  > input {
    width: 100%;
    height: 3rem;
    padding: 0 ${({theme:o})=>o.spacing[3]};

    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: inherit;
    font-size: ${({theme:o})=>o.typography.size.base};

    &:focus-visible {
      outline: 2px solid ${({theme:o})=>o.color.primary};
      outline-offset: 1px;
    }

    &:disabled {
      background: ${({theme:o})=>o.color.surfaceMuted};
      cursor: not-allowed;
    }
  }
`,a=r.div`
  display: grid;
  gap: 1px;
  margin-bottom: ${({theme:o})=>o.spacing[2]};
  max-height: 16rem;
  overflow-y: auto;

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.border};
`,e=r.button`
  display: grid;
  gap: 0.1rem;
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};

  border: 0;
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-family: inherit;
  text-align: start;
  cursor: pointer;

  > strong {
    font-size: ${({theme:o})=>o.typography.size.sm};
  }

  > span {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }

  &:hover {
    background: ${({theme:o})=>o.color.primarySoft};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: -2px;
  }
`,s=r.div`
  display: grid;
`,n=r.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 5rem auto auto;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[2]} 0;
  border-top: 1px solid ${({theme:o})=>o.color.border};

  &:first-child {
    border-top: 0;
  }

  > div {
    min-width: 0;

    > strong {
      display: block;
      font-size: ${({theme:o})=>o.typography.size.sm};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > span {
      color: ${({theme:o})=>o.color.textSoft};
      font-size: ${({theme:o})=>o.typography.size.xs};
    }
  }

  > input {
    width: 100%;
    height: 2.2rem;
    padding: 0 ${({theme:o})=>o.spacing[2]};

    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: inherit;
    font-size: ${({theme:o})=>o.typography.size.sm};
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  > strong {
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.sm};
    font-variant-numeric: tabular-nums;
    text-align: end;
  }
`,d=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.danger};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 1px;
  }
`,l=r.div`
  position: sticky;
  bottom: 0;
  z-index: 2;

  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-top: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[3]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.md};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) 14rem auto;
    align-items: end;
  }
`,c=r.div`
  > span {
    display: block;
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }

  > strong {
    display: block;
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: 1.9rem;
    font-variant-numeric: tabular-nums;
    line-height: 1.05;
  }
`;export{t as B,l as C,s as L,d as Q,a as R,c as T,e as a,n as b};
