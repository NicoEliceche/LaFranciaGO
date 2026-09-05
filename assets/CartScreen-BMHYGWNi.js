import{a8 as E,q as a,a9 as C,aa as V,j as r,J as re,Y as v,ab as ae,ac as T,G as te,ad as K,M as H,a as M,E as ie,W as R,ae as oe,af as j,o as ne,Z as x,t as g,X as se,v as le,ag as b,ah as y,ai as de,aj as ce,a4 as pe,a5 as ge}from"./index-BU1SzTKf.js";import{r as m}from"./react-B1kPYQQd.js";import{M as he}from"./minus-DYYSrqPo.js";import{S as ue}from"./shield-check-YQ-EOXFd.js";import{C as me}from"./clock-3-CqZ8tgTO.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=E("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=E("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ye=V`
  from { opacity: 0; }
  to { opacity: 1; }
`,$e=V`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,fe=a.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${ye} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,je=a.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  text-align: center;

  ${C};
  animation: ${$e} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,we=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Ce=a.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,ve=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,ke=a.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
    border-color: ${({theme:e})=>e.color.borderStrong};
  }
`,ze=a.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.danger};
  color: #ffffff;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: filter 180ms ease, transform 180ms ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.text};
    outline-offset: 2px;
  }
`;function Se({open:e,title:s,text:o,confirmLabel:n="Aceptar",cancelLabel:d="Cancelar",onConfirm:p,onCancel:l}){return m.useEffect(()=>{if(!e)return;const c=k=>{k.key==="Escape"&&l()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[l,e]),e?r.jsx(fe,{onClick:l,role:"presentation",children:r.jsxs(je,{role:"alertdialog","aria-modal":"true","aria-label":s,onClick:c=>c.stopPropagation(),children:[r.jsx(we,{children:s}),o?r.jsx(Ce,{children:o}):null,r.jsxs(ve,{children:[r.jsx(ke,{type:"button",onClick:l,children:d}),r.jsx(ze,{type:"button",onClick:p,autoFocus:!0,children:n})]})]})}):null}const Me=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ie=a(v)`
  position: relative;
  overflow: hidden;
  border-color: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.22)":"rgba(0, 71, 231, 0.12)"};
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.12) 0%, rgba(17, 26, 46, 0.98) 58%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.08) 0%, rgba(255, 255, 255, 0.98) 58%)"};
  box-shadow: ${({theme:e})=>e.shadow.md};

  &::after {
    content: '';
    position: absolute;
    inset: -10% auto auto 60%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: ${({theme:e})=>e.mode==="dark"?"radial-gradient(circle, rgba(107, 157, 255, 0.16) 0%, rgba(107, 157, 255, 0.02) 55%, transparent 70%)":"radial-gradient(circle, rgba(0, 71, 231, 0.12) 0%, rgba(0, 71, 231, 0.02) 55%, transparent 70%)"};
    pointer-events: none;
  }
`,$=a(ae)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Pe=a.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ee=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Te=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const h=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: rgba(15, 157, 88, 0.14);
    border-color: rgba(15, 157, 88, 0.24);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='warning'] {
    background: rgba(217, 119, 6, 0.12);
    border-color: rgba(217, 119, 6, 0.2);
    color: ${({theme:e})=>e.color.warning};
  }

  &:not([data-tone]) {
    ${T};
    ${C};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Le=a.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Fe=a.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  min-width: 0;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  text-align: center;

  &[data-state='active'] {
    border-color: rgba(0, 71, 231, 0.22);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,qe=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  [data-state='active'] & {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,He=a.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Re=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Be=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,A=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ae=a(v)`
  overflow: hidden;
`,D=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,G=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Q=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,W=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,De=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  /* Tiempo estimado: destacado con el neón del modo NOCHE. */
  ${T};
  ${C};
`,Ge=a.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,Qe=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,We=a.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,Ye=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const Ne=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Oe=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ue=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Ve=a.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,Ke=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Je=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 1.875rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: rgba(15, 157, 88, 0.12);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='warning'] {
    background: rgba(217, 119, 6, 0.12);
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,Xe=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Y=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,N=a.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,Ze=a(v)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,_e=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,er=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,rr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,ar=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,tr=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,ir=a.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,or=a.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,I=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,nr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,f=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &[data-emphasis='true'] {
    padding-top: ${({theme:e})=>e.spacing[2]};
    margin-top: ${({theme:e})=>e.spacing[1]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,sr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,lr=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,O=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,dr=te`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,cr=a.div`
  ${dr}
`,P=a(re)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,pr=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,gr=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.85rem;
  height: 1.85rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;

  ${T};
  ${C};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,hr=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,U=a.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.65rem;
  height: 1.65rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  /* Área táctil de 44px sin agrandar el círculo. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:disabled {
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`,ur=a.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,w=15e3,J=200,X=e=>{const s=e.match(/\d+/);return Number((s==null?void 0:s[0])??0)},mr=(e=K)=>{const s=new Map;return e.forEach(o=>{const n=s.get(o.store);if(n){n.items.push(o),n.itemCount+=o.quantity,n.subtotal+=o.subtotal,n.availableCount+=o.available?1:0,n.unavailableCount+=o.available?0:1;return}s.set(o.store,{store:o.store,items:[o],itemCount:o.quantity,subtotal:o.subtotal,etaLabel:o.eta,availableCount:o.available?1:0,unavailableCount:o.available?0:1})}),[...s.values()].map(o=>{const n=o.items.map(l=>X(l.eta)).filter(Boolean),d=n.length?Math.min(...n):0,p=n.length?Math.max(...n):0;return{...o,etaLabel:n.length<=1||d===p?`${d||0} min`:`${d}–${p} min`}})},xr=e=>{const s=e.reduce((l,c)=>l+c.subtotal,0),o=s>=w?0:1200,n=e.map(l=>X(l.eta)).filter(Boolean),d=n.length?Math.min(...n):0,p=n.length?Math.max(...n):0;return{subtotal:s,deliveryFee:o,total:s+o+J,totalUnits:e.reduce((l,c)=>l+c.quantity,0),unavailableItems:e.filter(l=>!l.available).length,deliveryWindow:n.length?d===p?`${d} min`:`${d}–${p} min`:"Pendiente",freeShippingRemaining:Math.max(w-s,0),freeShippingProgress:Math.min(s/w*100,100)}},br=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],yr=[{label:"Crédito",icon:B},{label:"Débito",icon:B},{label:"Transferencia",icon:be}],$r=[{label:"Compra protegida",icon:ue},{label:"Sin costos sorpresa",icon:me},{label:"Entrega clara",icon:j}],fr=["Delivery GO","Entrega comercio","Sin retiro"];function zr(){const[e,s]=m.useState(K),[o,n]=m.useState(null),d=m.useMemo(()=>mr(e),[e]),{subtotal:p,deliveryFee:l,total:c,totalUnits:k,unavailableItems:L,deliveryWindow:Z,freeShippingRemaining:z,freeShippingProgress:_}=m.useMemo(()=>xr(e),[e]),F=(t,i)=>{s(S=>S.map(u=>{if(u.id!==t)return u;const q=Math.max(1,u.quantity+i);return{...u,quantity:q,subtotal:u.price*q}}))},ee=t=>{s(i=>i.filter(S=>S.id!==t)),n(null)};return d.length===0?r.jsx(H,{showSearch:!1,children:r.jsx(P,{children:r.jsx(M,{children:r.jsx(ie,{icon:R,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):r.jsxs(H,{showSearch:!1,children:[r.jsxs(Me,{children:[r.jsx(P,{children:r.jsx(M,{children:r.jsx(Ie,{children:r.jsx($,{children:r.jsxs(Pe,{children:[r.jsxs(Ee,{children:[r.jsx(Te,{children:r.jsx(oe,{children:"Carrito"})}),r.jsxs(Re,{children:[r.jsxs(h,{"data-tone":"brand",children:[r.jsx(R,{size:14,"aria-hidden":"true"})," ",k," unidades"]}),r.jsxs(h,{"data-tone":L>0?"warning":"success",children:[r.jsx(xe,{size:14,"aria-hidden":"true"})," ",L," sin stock"]}),r.jsxs(h,{children:[r.jsx(j,{size:14,"aria-hidden":"true"})," ",Z]})]})]}),r.jsx(Le,{"aria-label":"Progreso de compra",children:br.map((t,i)=>r.jsxs(Fe,{"data-state":t.state,children:[r.jsx(qe,{"data-state":t.state,children:i+1}),r.jsx(He,{children:t.label})]},t.label))})]})})})})}),r.jsx(P,{children:r.jsx(M,{children:r.jsxs(Be,{children:[r.jsx(A,{children:d.map(t=>r.jsx(Ae,{children:r.jsxs($,{children:[r.jsxs(D,{children:[r.jsxs(G,{children:[r.jsx(Q,{children:t.store}),r.jsxs(W,{children:[t.itemCount," ítems · ",t.unavailableCount," pendientes"]})]}),r.jsxs(De,{children:[r.jsx(j,{size:14,"aria-hidden":"true"})," ",t.etaLabel]})]}),r.jsx(Ge,{children:t.items.map(i=>r.jsxs(Qe,{children:[r.jsx(We,{children:r.jsx(Ye,{src:ne(i.categoryId),alt:i.product,loading:"lazy"})}),r.jsxs(Ne,{children:[r.jsxs(Oe,{children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx(Ue,{children:i.product}),r.jsx(x,{children:i.store})]}),r.jsxs(pr,{children:[r.jsx(Ve,{children:i.available?g(i.subtotal):"—"}),r.jsx(gr,{type:"button","aria-label":`Quitar ${i.product} del carrito`,onClick:()=>n(i.id),children:r.jsx(se,{size:15,"aria-hidden":"true"})})]})]}),r.jsxs(Ke,{children:[r.jsxs(hr,{children:[r.jsx(U,{type:"button",onClick:()=>F(i.id,-1),disabled:i.quantity<=1,"aria-label":`Quitar una unidad de ${i.product}`,children:r.jsx(he,{size:14,"aria-hidden":"true"})}),r.jsxs(ur,{"aria-live":"polite",children:[i.quantity," unid."]}),r.jsx(U,{type:"button",onClick:()=>F(i.id,1),"aria-label":`Agregar una unidad de ${i.product}`,children:r.jsx(le,{size:14,"aria-hidden":"true"})})]}),r.jsx(Je,{"data-tone":i.statusTone,children:i.statusLabel})]}),r.jsxs(Xe,{children:[r.jsxs(Y,{children:[r.jsx(j,{size:14,"aria-hidden":"true"}),i.eta]}),i.statusTone==="success"?r.jsx(Y,{children:"Listo para sumar al pedido"}):i.statusTone==="warning"?r.jsx(N,{"data-tone":"warning",children:"Pocas unidades"}):r.jsx(N,{"data-tone":"danger",children:"Sin stock"})]})]})]},i.id))})]})},t.store))}),r.jsx(Ze,{children:r.jsx($,{children:r.jsxs(_e,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Resumen"}),r.jsx(y,{children:"Costos claros y pago seguro."}),r.jsx(x,{children:"El total sale sin sorpresas y con el envío ya calculado."})]}),r.jsxs(rr,{children:[r.jsxs(ar,{children:[r.jsx("span",{children:"Envío gratis"}),r.jsx("strong",{children:z>0?`${g(z)} faltan`:"Ya lo alcanzaste"})]}),r.jsx(ir,{children:r.jsx(or,{$value:_})}),r.jsxs(tr,{children:["Umbral estimado ",g(w)," ·"," ",z>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),r.jsxs(nr,{children:[r.jsxs(f,{children:[r.jsx("span",{children:"Subtotal"}),r.jsx("span",{children:g(p)})]}),r.jsxs(f,{children:[r.jsx("span",{children:"Envío estimado"}),r.jsx("span",{children:g(l)})]}),r.jsxs(f,{children:[r.jsx("span",{children:"Cargo de servicio"}),r.jsx("span",{children:g(J)})]}),r.jsxs(f,{"data-emphasis":"true",children:[r.jsx("strong",{children:"Total estimado"}),r.jsx(de,{children:g(c)})]})]}),r.jsx(sr,{children:$r.map(t=>{const i=t.icon;return r.jsxs(lr,{children:[r.jsx(i,{size:16,"aria-hidden":"true"}),r.jsx("span",{children:t.label})]},t.label)})}),r.jsxs(I,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Dirección"}),r.jsx(y,{children:"Elegí dónde recibir"}),r.jsx(x,{children:"Elegí una dirección guardada antes de seguir."})]}),r.jsx(A,{children:ce.map(t=>r.jsx(v,{children:r.jsx($,{children:r.jsxs(D,{children:[r.jsxs(G,{children:[r.jsx(Q,{children:t.label}),r.jsx(W,{children:t.address})]}),r.jsx(h,{"data-tone":t.primary?"brand":"success",children:t.primary?"Principal":"Guardada"})]})})},t.id))})]}),r.jsxs(I,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Entrega"}),r.jsx(y,{children:"Cómo llega el pedido"}),r.jsx(x,{children:"La app deja claro quién entrega."})]}),r.jsx(O,{children:fr.map(t=>r.jsx(h,{"data-tone":"brand",children:t},t))})]}),r.jsxs(I,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Pago"}),r.jsx(y,{children:"Elegí el medio de pago"}),r.jsx(er,{children:"Crédito, débito y transferencia quedan visibles antes de confirmar."})]}),r.jsx(O,{children:yr.map(t=>{const i=t.icon;return r.jsxs(h,{"data-tone":"brand",children:[r.jsx(i,{size:14,"aria-hidden":"true"}),t.label]},t.label)})})]}),r.jsxs(cr,{children:[r.jsx(pe,{to:"/pedidos",children:"Confirmar pedido"}),r.jsx(ge,{to:"/comercios",children:"Seguir comprando"})]})]})})})]})})})]}),r.jsx(Se,{open:o!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>o&&ee(o)})]})}export{zr as CartScreen};
