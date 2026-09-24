import{ar as p,j as t}from"./index-PN1N2eMW.js";import{q as e,A as h}from"./estilos-DzHAJWDP.js";import{L as f}from"./react-6hK8W6IX.js";import{p as u}from"./iconos-D4KLLVJ2.js";const x=e.div`
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.sm};
  overflow: hidden;

  > * + * {
    border-top: 1px solid ${({theme:o})=>o.color.border};
  }
`,d=h`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
  background: transparent;
  text-align: left;
`,l=e.div`
  ${d};
`,m=e(f)`
  ${d};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:o})=>o.color.surfaceMuted};
  }
`,$=e.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.primarySoft};
  color: ${({theme:o})=>o.color.primary};

  ${p};

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:o})=>o.color.danger};
  }
`,w=e.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,y=e.span`
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.base};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:o})=>o.color.text};

  &[data-tone='danger'] {
    color: ${({theme:o})=>o.color.danger};
  }
`,b=e.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,S=e.span`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  color: ${({theme:o})=>o.color.textSoft};
`;function z({icon:o,title:c,subtitle:n,to:i,onClick:s,tone:a,trailing:g}){const r=t.jsxs(t.Fragment,{children:[t.jsx($,{"data-tone":a??"default",children:t.jsx(o,{size:18,"aria-hidden":"true"})}),t.jsxs(w,{children:[t.jsx(y,{"data-tone":a??"default",children:c}),n?t.jsx(b,{children:n}):null]}),g??t.jsx(S,{children:t.jsx(u,{size:18,"aria-hidden":"true"})})]});return i?t.jsx(m,{to:i,children:r}):s?t.jsx(l,{as:"button",type:"button",onClick:s,children:r}):t.jsx(l,{children:r})}function L({children:o}){return t.jsx(x,{children:o})}export{L as S,z as a};
