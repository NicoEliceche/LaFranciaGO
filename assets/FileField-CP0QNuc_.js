import{c as s,q as o,V as n,aj as $,at as w,j as r,J as k,X as F}from"./index-BqcRuPDG.js";import{r as l}from"./react-D_B_6qYb.js";import{f as v}from"./mediaService-D2_VAu2k.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=s("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),S=w`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(320%); }
`,H=o.div`
  width: 100%;
  min-width: 0;
`,M=o.div`
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
    animation: ${S} 1.5s linear;
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
`,I=o.label`
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
`,q=o.span`
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
`,E=o.span`
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
`,X=o.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,B=o.button`
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
`;function N({id:e,accept:m,required:h,label:f="Elegir archivo",onChange:a}){const x=l.useId(),d=e??x,i=l.useRef(null),[t,c]=l.useState(null),b=y=>{var u;const p=((u=y.target.files)==null?void 0:u[0])??null;c(p),a==null||a(p)},g=()=>{i.current&&(i.current.value=""),c(null),a==null||a(null)};return r.jsxs(H,{children:[r.jsxs(M,{"data-filled":!!t,children:[r.jsxs(I,{htmlFor:d,children:[r.jsx(z,{size:16,"aria-hidden":"true"}),f]}),r.jsxs(q,{"data-filled":!!t,children:[r.jsx(E,{"data-filled":!!t,"aria-hidden":"true",children:t?r.jsx(k,{size:13}):r.jsx(j,{size:13})}),r.jsx(X,{title:t==null?void 0:t.name,children:t?`${t.name} · ${v(t.size)}`:"Sin archivo"})]}),t?r.jsx(B,{type:"button",onClick:g,"aria-label":"Quitar el archivo",children:r.jsx(F,{size:14,"aria-hidden":"true"})}):null]}),r.jsx("input",{ref:i,id:d,type:"file",accept:m,required:h,onChange:b,hidden:!0})]})}export{A as F,z as U,N as a};
