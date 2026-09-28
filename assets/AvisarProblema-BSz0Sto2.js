import{av as v,j as e,n as m,bo as C}from"./index-BEdt5RCs.js";import{r as i}from"./react-CKwpxk66.js";import{q as r,W as h}from"./estilos-D2nr0glO.js";import{C as j,aB as k,ae as w}from"./iconos-BnUQAezL.js";const z=h`
  from { opacity: 0; }
  to { opacity: 1; }
`,A=h`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,E=r.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:o})=>o.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${z} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,S=r.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:o})=>o.spacing[4]};
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.lg};
  text-align: center;

  ${v};
  animation: ${A} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,q=r.h2`
  margin: 0;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.lg};
  font-weight: ${({theme:o})=>o.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:o})=>o.color.text};
`,L=r.p`
  margin: ${({theme:o})=>o.spacing[1]} 0 0;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.sm};
  line-height: 1.45;
`,B=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:o})=>o.spacing[2]};
  margin-top: ${({theme:o})=>o.spacing[4]};
`,F=r.button`
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
`,I=r.button`
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
`;function K({open:o,title:n,text:s,confirmLabel:l="Aceptar",cancelLabel:c="Cancelar",onConfirm:d,onCancel:t}){return i.useEffect(()=>{if(!o)return;const a=u=>{u.key==="Escape"&&t()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[t,o]),o?e.jsx(E,{onClick:t,role:"presentation",children:e.jsxs(S,{role:"alertdialog","aria-modal":"true","aria-label":n,onClick:a=>a.stopPropagation(),children:[e.jsx(q,{children:n}),s?e.jsx(L,{children:s}):null,e.jsxs(B,{children:[e.jsx(F,{type:"button",onClick:t,children:c}),e.jsx(I,{type:"button",onClick:d,autoFocus:!0,children:l})]})]})}):null}const g=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.full};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.textMuted};
  font: inherit;
  font-size: 0.82rem;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: ${({theme:o})=>o.color.primary};
    color: ${({theme:o})=>o.color.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`,M=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  justify-items: start;
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
`,T=r.p`
  margin: 0;
  color: ${({theme:o})=>o.color.textMuted};
  font-size: 0.84rem;
  line-height: 1.5;
`,Y=r.textarea`
  width: 100%;
  padding: ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.md};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font: inherit;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({theme:o})=>o.color.primary};
  }

  &::placeholder {
    color: ${({theme:o})=>o.color.textSoft};
  }
`,D=r.p`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  color: ${({theme:o})=>o.color.success};
  font-size: 0.86rem;
`;function N({error:o,contexto:n}){var f;const[s,l]=i.useState(!1),[c,d]=i.useState(""),[t,a]=i.useState(!1),[u,p]=i.useState(!1),b=o instanceof m?o.referencia:null,$=o instanceof m?((f=o.tecnico)==null?void 0:f.causa)??null:o instanceof Error?o.message:null,y=async()=>{if(!t){a(!0);try{await C.reportar({comentario:c,registroId:b,pantalla:n??window.location.hash,tecnico:$}),p(!0)}catch{p(!0)}finally{a(!1)}}};return u?e.jsxs(D,{role:"status",children:[e.jsx(j,{size:16,"aria-hidden":"true"}),"Gracias, ya nos llegó. Lo vamos a revisar."]}):s?e.jsxs(M,{children:[e.jsx(T,{children:"Contanos qué estabas haciendo. Va con el detalle técnico, así no hace falta que lo expliques."}),e.jsx(Y,{value:c,onChange:x=>d(x.target.value),placeholder:"Quise confirmar el pedido y no pasó nada…",rows:3,maxLength:2e3,"aria-label":"Qué pasó",autoFocus:!0}),e.jsxs(g,{type:"button",onClick:()=>void y(),disabled:t,children:[e.jsx(w,{size:15,"aria-hidden":"true"}),t?"Enviando…":"Enviar al equipo"]})]}):e.jsxs(g,{type:"button",onClick:()=>l(!0),children:[e.jsx(k,{size:15,"aria-hidden":"true"}),"Avisar del problema"]})}export{N as A,K as C};
