import{q as t,H as d,ac as g,j as e,a5 as p}from"./index-raeBHIuD.js";import{L as h}from"./react-Clk3ySf9.js";const f=t.div`
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.sm};
  overflow: hidden;

  > * + * {
    border-top: 1px solid ${({theme:o})=>o.color.border};
  }
`,a=d`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
  background: transparent;
  text-align: left;
`,u=t.div`
  ${a};
`,x=t(h)`
  ${a};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:o})=>o.color.surfaceMuted};
  }
`,m=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.primarySoft};
  color: ${({theme:o})=>o.color.primary};

  ${g};

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:o})=>o.color.danger};
  }
`,$=t.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,w=t.span`
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.base};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:o})=>o.color.text};

  &[data-tone='danger'] {
    color: ${({theme:o})=>o.color.danger};
  }
`,y=t.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=t.span`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  color: ${({theme:o})=>o.color.textSoft};
`;function R({icon:o,title:l,subtitle:n,to:r,tone:i,trailing:c}){const s=e.jsxs(e.Fragment,{children:[e.jsx(m,{"data-tone":i??"default",children:e.jsx(o,{size:18,"aria-hidden":"true"})}),e.jsxs($,{children:[e.jsx(w,{"data-tone":i??"default",children:l}),n?e.jsx(y,{children:n}):null]}),c??e.jsx(S,{children:e.jsx(p,{size:18,"aria-hidden":"true"})})]});return r?e.jsx(x,{to:r,children:s}):e.jsx(u,{children:s})}function k({children:o}){return e.jsx(f,{children:o})}export{k as S,R as a};
