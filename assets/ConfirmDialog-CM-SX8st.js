import{q as e,ah as f,ap as s,j as r}from"./index-C4uYXbIf.js";import{r as m}from"./react-D_B_6qYb.js";const g=s`
  from { opacity: 0; }
  to { opacity: 1; }
`,u=s`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,h=e.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:o})=>o.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${g} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,y=e.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:o})=>o.spacing[4]};
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.lg};
  text-align: center;

  ${f};
  animation: ${u} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$=e.h2`
  margin: 0;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.lg};
  font-weight: ${({theme:o})=>o.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:o})=>o.color.text};
`,b=e.p`
  margin: ${({theme:o})=>o.spacing[1]} 0 0;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.sm};
  line-height: 1.45;
`,x=e.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:o})=>o.spacing[2]};
  margin-top: ${({theme:o})=>o.spacing[4]};
`,k=e.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({theme:o})=>o.color.surfaceMuted};
    border-color: ${({theme:o})=>o.color.borderStrong};
  }
`,C=e.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.danger};
  color: #ffffff;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: filter 180ms ease, transform 180ms ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.text};
    outline-offset: 2px;
  }
`;function j({open:o,title:i,text:a,confirmLabel:c="Aceptar",cancelLabel:d="Cancelar",onConfirm:l,onCancel:t}){return m.useEffect(()=>{if(!o)return;const n=p=>{p.key==="Escape"&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t,o]),o?r.jsx(h,{onClick:t,role:"presentation",children:r.jsxs(y,{role:"alertdialog","aria-modal":"true","aria-label":i,onClick:n=>n.stopPropagation(),children:[r.jsx($,{children:i}),a?r.jsx(b,{children:a}):null,r.jsxs(x,{children:[r.jsx(k,{type:"button",onClick:t,children:d}),r.jsx(C,{type:"button",onClick:l,autoFocus:!0,children:c})]})]})}):null}export{j as C};
