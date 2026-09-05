import{a8 as l,q as o,G as t,ac as w,aa as k,j as e,w as z,X as v}from"./index-CQqLBoOg.js";import{r as n}from"./react-74MrHXS-.js";import{f as F}from"./mediaService-Be9g9s7c.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=l("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),M=k`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(320%); }
`,H=o.div`
  width: 100%;
  min-width: 0;
`,I=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  width: 100%;
  min-height: 3.25rem;
  padding: 0.4rem 0.4rem 0.4rem 0.45rem;
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surfaceMuted};
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
    animation: ${M} 1.5s linear;
  }

  &:focus-within {
    border-color: ${({theme:r})=>r.color.primary};
    box-shadow: 0 0 0 3px ${({theme:r})=>r.color.primarySoft};
  }

  ${({theme:r})=>r.mode==="dark"?t`
          border-color: rgba(77, 229, 255, 0.24);

          &[data-filled='true'] {
            border-color: rgba(77, 229, 255, 0.55);
            box-shadow: 0 0 10px rgba(77, 229, 255, 0.08);
          }
        `:t`
          &[data-filled='true'] {
            border-color: ${r.color.primary};
          }
        `};

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`,P=o.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 0 0 auto;
  min-height: 2.5rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({theme:r})=>r.color.brand};
  color: ${({theme:r})=>r.color.onPrimary};
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:r})=>r.color.brandHover};
  }

  ${({theme:r})=>r.mode==="dark"&&t`
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.11);
    `};
`,R=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};
  z-index: 1;

  &[data-filled='true'] {
    color: ${({theme:r})=>r.color.text};
    font-weight: ${({theme:r})=>r.typography.weight.semibold};
  }
`,B=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.textSoft};

  &[data-filled='true'] {
    color: ${({theme:r})=>r.color.success};

    ${w};
  }
`,U=o.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,q=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.9rem;
  height: 1.9rem;
  border: 0;
  border-radius: ${({theme:r})=>r.radius.full};
  background: transparent;
  color: ${({theme:r})=>r.color.textSoft};
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:r})=>r.color.danger};
  }
`;function G({id:r,accept:m,required:h,label:b="Elegir archivo",onChange:i}){const $=n.useId(),c=r??$,d=n.useRef(null),[a,p]=n.useState(null),x=y=>{var u;const g=((u=y.target.files)==null?void 0:u[0])??null;p(g),i==null||i(g)},f=()=>{d.current&&(d.current.value=""),p(null),i==null||i(null)};return e.jsxs(H,{children:[e.jsxs(I,{"data-filled":!!a,children:[e.jsxs(P,{htmlFor:c,children:[e.jsx(j,{size:16,"aria-hidden":"true"}),b]}),e.jsxs(R,{"data-filled":!!a,children:[e.jsx(B,{"data-filled":!!a,"aria-hidden":"true",children:a?e.jsx(z,{size:13}):e.jsx(S,{size:13})}),e.jsx(U,{title:a==null?void 0:a.name,children:a?`${a.name} · ${F(a.size)}`:"Sin archivo"})]}),a?e.jsx(q,{type:"button",onClick:f,"aria-label":"Quitar el archivo",children:e.jsx(v,{size:14,"aria-hidden":"true"})}):null]}),e.jsx("input",{ref:d,id:c,type:"file",accept:m,required:h,onChange:x,hidden:!0})]})}const s=t`
  background: ${({theme:r})=>r.color.surface};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.xl};
  box-shadow: ${({theme:r})=>r.shadow.sm};
`;o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[3]};

  @media (min-width: ${({theme:r})=>r.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  }
`;const L=o.div`
  ${s}
  padding: ${({theme:r})=>r.layout.cardPadding};
`,N=o.div`
  ${s}
  padding: ${({theme:r})=>r.layout.cardPadding};
  display: grid;
  gap: ${({theme:r})=>r.spacing[3]};
`,W=o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[3]};

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Y=o.label`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
`,O=o.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.semibold};
`,Q=o.span`
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.xs};
  line-height: 1.35;
`,V=o.input`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:r})=>r.color.borderStrong};
    background: ${({theme:r})=>r.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,Z=o.select`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:r})=>r.color.borderStrong};
    background: ${({theme:r})=>r.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,D=o.textarea`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 8rem;
  padding: ${({theme:r})=>r.spacing[3]};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.text};
  resize: vertical;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:r})=>r.color.borderStrong};
    background: ${({theme:r})=>r.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,J=o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[3]};
`;o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};

  @media (min-width: ${({theme:r})=>r.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o.button`
  ${s}
  min-height: 100%;
  padding: ${({theme:r})=>r.spacing[3]};
  text-align: left;
  cursor: pointer;
  display: grid;
  gap: ${({theme:r})=>r.spacing[1]};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({theme:r})=>r.shadow.md};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:r})=>r.color.primarySoft};
  }
`;o.span`
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
`;o.span`
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.xs};
  line-height: 1.35;
`;const K=o.label`
  ${s}
  padding: ${({theme:r})=>r.layout.cardPadding};
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
  cursor: pointer;
`,_=o.span`
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
`,C=o.span`
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.xs};
`,rr=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:r})=>r.spacing[2]};
`,or=o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
`,er=o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
`,ar=o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
`,ir=o.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:r})=>r.spacing[2]};
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.sm};
`,tr=o.span`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: ${({theme:r})=>r.color.primary};
  flex: 0 0 auto;
`;o.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({theme:r})=>r.color.border};
`;const sr=o.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
`;export{rr as A,L as F,sr as M,er as R,N as S,K as U,J as a,W as b,Y as c,O as d,X as e,V as f,Q as g,Z as h,_ as i,j,C as k,G as l,D as m,ir as n,tr as o,ar as p,or as q};
