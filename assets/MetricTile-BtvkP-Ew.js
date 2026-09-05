import{q as o,ac as s,j as r}from"./index-BU1SzTKf.js";const a=o.div`
  display: grid;
  gap: 0.1rem;
  align-content: start;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,l=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${s};
`,c=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,d=o.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
  line-height: 1.15;
`,p=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;function h({label:e,value:n,help:t,icon:i}){return r.jsxs(a,{children:[i?r.jsx(l,{children:r.jsx(i,{size:18,"aria-hidden":"true"})}):null,r.jsx(c,{children:e}),r.jsx(d,{children:n}),t?r.jsx(p,{children:t}):null]})}export{h as M};
