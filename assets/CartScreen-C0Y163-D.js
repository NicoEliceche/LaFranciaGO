import{a8 as P,q as a,a9 as $,aa as X,j as r,J as le,Y as j,ab as Z,ac as T,G as de,ad as _,M as R,a as k,E as ce,W as q,ae as pe,af as y,o as ge,Z as he,t as h,X as ue,v as B,ag as b,ah as me,ai as S,aj as O,a4 as be,a5 as xe,ak as ye}from"./index-U-wdHHrK.js";import{r as m,u as fe}from"./react-B1kPYQQd.js";import{s as $e,m as U,a as je}from"./saleUnits-CLP-TCsg.js";import{p as we}from"./ordersStore-DCNwIyzn.js";import{M as ve}from"./minus-riE2fFkx.js";import{S as Ce}from"./shield-check-BOWF6chM.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=P("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=P("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=P("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ze=X`
  from { opacity: 0; }
  to { opacity: 1; }
`,Me=X`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Ie=a.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${ze} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Pe=a.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  text-align: center;

  ${$};
  animation: ${Me} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Te=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Ee=a.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,Fe=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,Le=a.button`
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
`,Ae=a.button`
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
`;function He({open:e,title:s,text:i,confirmLabel:n="Aceptar",cancelLabel:d="Cancelar",onConfirm:c,onCancel:l}){return m.useEffect(()=>{if(!e)return;const p=w=>{w.key==="Escape"&&l()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[l,e]),e?r.jsx(Ie,{onClick:l,role:"presentation",children:r.jsxs(Pe,{role:"alertdialog","aria-modal":"true","aria-label":s,onClick:p=>p.stopPropagation(),children:[r.jsx(Te,{children:s}),i?r.jsx(Ee,{children:i}):null,r.jsxs(Fe,{children:[r.jsx(Le,{type:"button",onClick:l,children:d}),r.jsx(Ae,{type:"button",onClick:c,autoFocus:!0,children:n})]})]})}):null}const Re=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,qe=a(j)`
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
`,z=a(Z)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Be=a(Z)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Oe=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ue=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,De=a.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ge=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ne=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const u=a.span`
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
    ${$};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Qe=a.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,We=a.div`
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
`,Ye=a.span`
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
`,Ve=a.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Ke=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Je=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,G=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Xe=a(j)`
  overflow: hidden;
`,Ze=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,N=a.div`
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
`,_e=a.span`
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
  ${$};
`,er=a.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,rr=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ar=a.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,tr=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const or=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,ir=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,nr=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,sr=a.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,lr=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,dr=a.span`
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
`,cr=a.div`
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
`,V=a.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,pr=a(j)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,gr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const hr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,ur=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,mr=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,br=a.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,xr=a.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,M=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,yr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,x=a.div`
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
`,fr=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,$r=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.2;

  > svg {
    flex: 0 0 auto;
  }
`,K=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,jr=de`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,wr=a.div`
  ${jr}
`,I=a(le)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,vr=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Cr=a.button`
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
  ${$};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,kr=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,J=a.button`
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
`,Sr=a.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,f=15e3,ee=200,re=e=>{const s=e.match(/\d+/);return Number((s==null?void 0:s[0])??0)},zr=(e=_)=>{const s=new Map;return e.forEach(i=>{const n=s.get(i.store);if(n){n.items.push(i),n.itemCount+=i.quantity,n.subtotal+=i.subtotal,n.availableCount+=i.available?1:0,n.unavailableCount+=i.available?0:1;return}s.set(i.store,{store:i.store,items:[i],itemCount:i.quantity,subtotal:i.subtotal,etaLabel:i.eta,availableCount:i.available?1:0,unavailableCount:i.available?0:1})}),[...s.values()].map(i=>{const n=i.items.map(l=>re(l.eta)).filter(Boolean),d=n.length?Math.min(...n):0,c=n.length?Math.max(...n):0;return{...i,etaLabel:n.length<=1||d===c?`${d||0} min`:`${d}–${c} min`}})},Mr=e=>{const s=e.reduce((l,p)=>l+p.subtotal,0),i=s>=f?0:1200,n=e.map(l=>re(l.eta)).filter(Boolean),d=n.length?Math.min(...n):0,c=n.length?Math.max(...n):0;return{subtotal:s,deliveryFee:i,total:s+i+ee,totalUnits:e.filter(l=>l.available).length,unavailableItems:e.filter(l=>!l.available).length,deliveryWindow:n.length?d===c?`${d} min`:`${d}–${c} min`:"Pendiente",freeShippingRemaining:Math.max(f-s,0),freeShippingProgress:Math.min(s/f*100,100)}},Ir=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],Pr=[{label:"Crédito",icon:D},{label:"Débito",icon:D},{label:"Transferencia",icon:Se}],Tr=[{label:"Precio final",icon:Ce},{label:"Seguí tu pedido",icon:y}],Er=["Delivery GO","Entrega comercio","Sin retiro"];function Br(){var A;const[e,s]=m.useState(_),[i,n]=m.useState(null),[d,c]=m.useState(!1),l=fe(),p=m.useMemo(()=>zr(e),[e]),{subtotal:w,deliveryFee:ae,total:te,totalUnits:E,unavailableItems:F,deliveryWindow:oe,freeShippingRemaining:v,freeShippingProgress:ie}=m.useMemo(()=>Mr(e),[e]),L=(o,t)=>{s(C=>C.map(g=>{if(g.id!==o||!g.available)return g;const H=Math.min(Math.max(0,g.quantity+t),U(g.saleUnit));return{...g,quantity:H,subtotal:Math.round(g.price*je(g.saleUnit,H))}}))},ne=()=>{we(e),l("/pedidos")},se=o=>{s(t=>t.filter(C=>C.id!==o)),n(null)};return p.length===0?r.jsx(R,{showSearch:!1,children:r.jsx(I,{children:r.jsx(k,{children:r.jsx(ce,{icon:q,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):r.jsxs(R,{showSearch:!1,children:[r.jsxs(Re,{children:[r.jsx(I,{children:r.jsx(k,{children:r.jsx(qe,{children:r.jsx(z,{children:r.jsxs(De,{children:[r.jsxs(Ge,{children:[r.jsx(Ne,{children:r.jsx(pe,{children:"Carrito"})}),r.jsxs(Ke,{children:[r.jsxs(u,{"data-tone":"brand",children:[r.jsx(q,{size:14,"aria-hidden":"true"})," ",E," ",E===1?"producto":"productos"]}),r.jsxs(u,{"data-tone":F>0?"warning":"success",children:[r.jsx(ke,{size:14,"aria-hidden":"true"})," ",F," sin stock"]}),r.jsxs(u,{children:[r.jsx(y,{size:14,"aria-hidden":"true"})," ",oe]})]})]}),r.jsx(Qe,{"aria-label":"Progreso de compra",children:Ir.map((o,t)=>r.jsxs(We,{"data-state":o.state,children:[r.jsx(Ye,{"data-state":o.state,children:t+1}),r.jsx(Ve,{children:o.label})]},o.label))})]})})})})}),r.jsx(I,{children:r.jsx(k,{children:r.jsxs(Je,{children:[r.jsx(G,{children:p.map(o=>r.jsx(Xe,{children:r.jsxs(z,{children:[r.jsxs(Ze,{children:[r.jsxs(N,{children:[r.jsx(Q,{children:o.store}),r.jsxs(W,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),r.jsxs(_e,{children:[r.jsx(y,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),r.jsx(er,{children:o.items.map(t=>r.jsxs(rr,{children:[r.jsx(ar,{children:r.jsx(tr,{src:ge(t.categoryId),alt:t.product,loading:"lazy"})}),r.jsxs(or,{children:[r.jsxs(ir,{children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx(nr,{children:t.product}),r.jsx(he,{children:t.store})]}),r.jsxs(vr,{children:[r.jsx(sr,{children:t.available?h(t.subtotal):"—"}),r.jsx(Cr,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:r.jsx(ue,{size:15,"aria-hidden":"true"})})]})]}),r.jsxs(lr,{children:[r.jsxs(kr,{children:[r.jsx(J,{type:"button",onClick:()=>L(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:r.jsx(ve,{size:14,"aria-hidden":"true"})}),r.jsx(Sr,{"aria-live":"polite",children:t.available?$e(t.saleUnit,t.quantity):"0 unid."}),r.jsx(J,{type:"button",onClick:()=>L(t.id,1),disabled:!t.available||t.quantity>=U(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:r.jsx(B,{size:14,"aria-hidden":"true"})})]}),r.jsx(dr,{"data-tone":t.statusTone,children:t.statusLabel})]}),r.jsxs(cr,{children:[r.jsxs(Y,{children:[r.jsx(y,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?r.jsx(Y,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?r.jsx(V,{"data-tone":"warning",children:"Pocas unidades"}):r.jsx(V,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),r.jsx(pr,{children:r.jsx(z,{children:r.jsxs(gr,{children:[r.jsx(b,{children:"Resumen"}),r.jsxs(hr,{children:[r.jsxs(ur,{children:[r.jsx("span",{children:"Envío gratis"}),r.jsx("strong",{children:v>0?`${h(v)} faltan`:"Ya lo alcanzaste"})]}),r.jsx(br,{children:r.jsx(xr,{$value:ie})}),r.jsxs(mr,{children:["Umbral estimado ",h(f)," ·"," ",v>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),r.jsxs(yr,{children:[r.jsxs(x,{children:[r.jsx("span",{children:"Subtotal"}),r.jsx("span",{children:h(w)})]}),r.jsxs(x,{children:[r.jsx("span",{children:"Envío estimado"}),r.jsx("span",{children:h(ae)})]}),r.jsxs(x,{children:[r.jsx("span",{children:"Cargo de servicio"}),r.jsx("span",{children:h(ee)})]}),r.jsxs(x,{"data-emphasis":"true",children:[r.jsx("strong",{children:"Total estimado"}),r.jsx(me,{children:h(te)})]})]}),r.jsx(fr,{children:Tr.map(o=>{const t=o.icon;return r.jsxs($r,{children:[r.jsx(t,{size:16,"aria-hidden":"true"}),r.jsx("span",{children:o.label})]},o.label)})}),r.jsxs(M,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Dirección"}),r.jsx(S,{children:"Elegí dónde recibir"})]}),r.jsxs(G,{children:[O.map(o=>r.jsx(j,{children:r.jsx(Be,{children:r.jsxs(Oe,{children:[r.jsxs(N,{children:[r.jsx(Q,{children:o.label}),r.jsx(W,{children:o.address})]}),r.jsx(u,{"data-tone":o.primary?"brand":"success",children:o.primary?"Principal":"Guardada"})]})})},o.id)),r.jsxs(Ue,{type:"button",onClick:()=>c(!0),children:[r.jsx(B,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),r.jsxs(M,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Entrega"}),r.jsx(S,{children:"Cómo llega el pedido"})]}),r.jsx(K,{children:Er.map(o=>r.jsx(u,{"data-tone":"brand",children:o},o))})]}),r.jsxs(M,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Pago"}),r.jsx(S,{children:"Elegí el medio de pago"})]}),r.jsx(K,{children:Pr.map(o=>{const t=o.icon;return r.jsxs(u,{"data-tone":"brand",children:[r.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.label)})})]}),r.jsxs(wr,{children:[r.jsx(be,{as:"button",type:"button",onClick:ne,children:"Confirmar pedido"}),r.jsx(xe,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),r.jsx(He,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>i&&se(i)}),r.jsx(ye,{open:d,currentId:((A=O[0])==null?void 0:A.id)??"",startOnNew:!0,onClose:()=>c(!1),onSelect:()=>c(!1)})]})}export{Br as CartScreen};
