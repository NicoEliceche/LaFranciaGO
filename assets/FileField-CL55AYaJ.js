import{ar as $,j as r}from"./index-BEHxigxl.js";import{r as l}from"./react-6hK8W6IX.js";import{f as y}from"./mediaService-D2_VAu2k.js";import{q as t,A as n,W as w}from"./estilos-DzHAJWDP.js";import{al as F,C as j,am as v,X as k}from"./iconos-DPkufriG.js";const z=w`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(320%); }
`,S=t.div`
  width: 100%;
  min-width: 0;
`,I=t.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3.25rem;
  padding: 0.4rem 0.4rem 0.4rem 0.45rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
  transition: background-color 200ms ease;

  /* Barrido sutil, del mismo lenguaje del interruptor NOCHE. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 28%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-110%);
    pointer-events: none;
  }

  &:hover::after {
    animation: ${z} 1.5s linear;
  }

  &:focus-within {
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  ${({theme:e})=>e.mode==="dark"?n`
          border-color: rgba(77, 229, 255, 0.24);

          &[data-filled='true'] {
            border-color: rgba(77, 229, 255, 0.55);
            box-shadow: 0 0 10px rgba(77, 229, 255, 0.08);
          }
        `:n`
          &[data-filled='true'] {
            border-color: ${e.color.primary};
          }
        `};

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`,E=t.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 0 0 auto;
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }

  ${({theme:e})=>e.mode==="dark"&&n`
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.11);
    `};
`,X=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  z-index: 1;

  &[data-filled='true'] {
    color: ${({theme:e})=>e.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
  }
`,B=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};

  &[data-filled='true'] {
    color: ${({theme:e})=>e.color.success};

    ${$};
  }
`,R=t.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,W=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.9rem;
  height: 1.9rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }
`;function M({id:e,accept:p,required:m,label:f="Elegir archivo",onChange:i}){const h=l.useId(),s=e??h,a=l.useRef(null),[o,d]=l.useState(null),x=b=>{var u;const c=((u=b.target.files)==null?void 0:u[0])??null;d(c),i==null||i(c)},g=()=>{a.current&&(a.current.value=""),d(null),i==null||i(null)};return r.jsxs(S,{children:[r.jsxs(I,{"data-filled":!!o,children:[r.jsxs(E,{htmlFor:s,children:[r.jsx(F,{size:16,"aria-hidden":"true"}),f]}),r.jsxs(X,{"data-filled":!!o,children:[r.jsx(B,{"data-filled":!!o,"aria-hidden":"true",children:o?r.jsx(j,{size:13}):r.jsx(v,{size:13})}),r.jsx(R,{title:o==null?void 0:o.name,children:o?`${o.name} · ${y(o.size)}`:"Sin archivo"})]}),o?r.jsx(W,{type:"button",onClick:g,"aria-label":"Quitar el archivo",children:r.jsx(k,{size:14,"aria-hidden":"true"})}):null]}),r.jsx("input",{ref:a,id:s,type:"file",accept:p,required:m,onChange:x,hidden:!0})]})}export{M as F};
