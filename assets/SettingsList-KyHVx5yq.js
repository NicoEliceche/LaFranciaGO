import{q as t,R as p,ag as h,j as e,ae as u}from"./index-DmRIvc-c.js";import{L as f}from"./react-D_B_6qYb.js";const x=t.div`
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.sm};
  overflow: hidden;

  > * + * {
    border-top: 1px solid ${({theme:o})=>o.color.border};
  }
`,d=p`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
  background: transparent;
  text-align: left;
`,l=t.div`
  ${d};
`,m=t(f)`
  ${d};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:o})=>o.color.surfaceMuted};
  }
`,$=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.primarySoft};
  color: ${({theme:o})=>o.color.primary};

  ${h};

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:o})=>o.color.danger};
  }
`,w=t.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,y=t.span`
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.base};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:o})=>o.color.text};

  &[data-tone='danger'] {
    color: ${({theme:o})=>o.color.danger};
  }
`,b=t.span`
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
`;function v({icon:o,title:c,subtitle:r,to:i,onClick:s,tone:a,trailing:g}){const n=e.jsxs(e.Fragment,{children:[e.jsx($,{"data-tone":a??"default",children:e.jsx(o,{size:18,"aria-hidden":"true"})}),e.jsxs(w,{children:[e.jsx(y,{"data-tone":a??"default",children:c}),r?e.jsx(b,{children:r}):null]}),g??e.jsx(S,{children:e.jsx(u,{size:18,"aria-hidden":"true"})})]});return i?e.jsx(m,{to:i,children:n}):s?e.jsx(l,{as:"button",type:"button",onClick:s,children:n}):e.jsx(l,{children:n})}function k({children:o}){return e.jsx(x,{children:o})}export{k as S,v as a};
