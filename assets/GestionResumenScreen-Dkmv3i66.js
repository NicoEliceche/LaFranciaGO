import{j as o,b7 as m,r as c}from"./index-PN1N2eMW.js";import{r as t,u as g}from"./react-6hK8W6IX.js";import{d as h,M as f,G as x}from"./GestionFrame-DkmThEoo.js";import{q as a}from"./estilos-DzHAJWDP.js";import{ap as j,aq as y,a6 as b}from"./iconos-D4KLLVJ2.js";import{T as v,a as d}from"./TablaStyled-BkIgsuVo.js";const $=a.div`
  position: relative;
  border-radius: ${({theme:e})=>e.radius.lg};

  /* Sin esto el cursor dice "hacé clic" sobre algo que no responde. */
  cursor: not-allowed;

  /* Un indicio que se ve siempre: el aviso completo sale al acercarse, pero
     de lejos ya se distingue que esta función es de la computadora. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px dashed ${({theme:e})=>e.color.borderStrong};
    border-radius: inherit;
    pointer-events: none;
  }
`,z=a.div`
  /* Apagado, pero legible: el comercio tiene que poder leer qué función es
     para saber qué gana instalando el sistema en el local. Por debajo de
     0.6 el texto deja de tener contraste suficiente. */
  opacity: 0.65;
  filter: grayscale(0.4);
  pointer-events: none;
  transition: opacity 160ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,q=a.div`
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};

  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  border: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: ${({theme:e})=>e.shadow.md};

  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
  text-align: start;

  opacity: 0;
  transform: translateY(0.35rem);
  transition:
    opacity 160ms ease,
    transform 160ms ease;

  &[data-visible='si'] {
    opacity: 1;
    transform: translateY(0);
  }

  > svg {
    flex: none;
    color: ${({theme:e})=>e.color.primary};
  }

  /* En pantalla táctil no hay hover: el aviso se ve siempre. */
  @media (hover: none) {
    opacity: 1;
    transform: none;
    position: static;
    margin-top: ${({theme:e})=>e.spacing[2]};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function M({funcion:e,children:r}){const l=h(e),[s,n]=t.useState(!1),i=t.useId();return l?o.jsx(o.Fragment,{children:r}):o.jsxs($,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),children:[o.jsx(z,{"aria-hidden":"true",children:r}),o.jsxs(q,{role:"note",id:i,"data-visible":s?"si":"no",children:[o.jsx(j,{size:15,"aria-hidden":"true"}),o.jsx("span",{children:f})]})]})}const S=a.section`
  margin-top: ${({theme:e})=>e.spacing[4]};
`,C=a.h2`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: 1.2;
`,A=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`,p=a.button`
  display: grid;
  gap: 0.2rem;
  width: 100%;
  padding: ${({theme:e})=>e.spacing[3]};

  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: inherit;
  text-align: start;
  cursor: pointer;
  transition: border-color 140ms ease;

  > svg {
    color: ${({theme:e})=>e.color.primary};
  }

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function B(){const e=g(),[r,l]=t.useState(null),[s,n]=t.useState(!0);return t.useEffect(()=>{let i=!0;return m.metricas().then(u=>{i&&l(u)}).catch(()=>{}).finally(()=>{i&&n(!1)}),()=>{i=!1}},[]),o.jsxs(x,{titulo:"Resumen",children:[o.jsxs(v,{children:[o.jsxs(d,{children:[o.jsx("span",{children:"Ventas de hoy"}),o.jsx("strong",{children:s?"—":(r==null?void 0:r.hoy.pedidos)??0})]}),o.jsxs(d,{"data-tono":"cobrado",children:[o.jsx("span",{children:"Cobrado hoy"}),o.jsx("strong",{children:s?"—":c((r==null?void 0:r.hoy.ventas)??0)})]}),o.jsxs(d,{children:[o.jsx("span",{children:"Ventas de la semana"}),o.jsx("strong",{children:s?"—":(r==null?void 0:r.semana.pedidos)??0})]}),o.jsxs(d,{"data-tono":"cobrado",children:[o.jsx("span",{children:"Cobrado en la semana"}),o.jsx("strong",{children:s?"—":c((r==null?void 0:r.semana.ventas)??0)})]})]}),o.jsxs(S,{children:[o.jsx(C,{children:"Para arrancar el día"}),o.jsxs(A,{children:[o.jsx(M,{funcion:"cajaRapida",children:o.jsxs(p,{type:"button",onClick:()=>e("/gestion/caja-rapida"),children:[o.jsx(y,{size:20,"aria-hidden":"true"}),o.jsx("strong",{children:"Caja rápida"}),o.jsx("span",{children:"Cobrar con la lectora de códigos"})]})}),o.jsxs(p,{type:"button",onClick:()=>e("/gestion/caja"),children:[o.jsx(b,{size:20,"aria-hidden":"true"}),o.jsx("strong",{children:"Caja"}),o.jsx("span",{children:"Abrir, retirar y cerrar el día"})]})]})]})]})}export{B as GestionResumenScreen};
