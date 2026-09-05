import{a8 as E,q as r,a9 as $,aa as X,j as a,J as de,Y as j,ab as Z,ac as P,G as ce,ad as ee,M as q,a as k,E as pe,W as B,ae as ge,af as x,o as he,Z as ue,t as h,X as me,v as U,ag as b,ah as be,ai as S,aj as O,a4 as fe,a5 as xe,ak as ye}from"./index-DIvec79A.js";import{r as m,u as $e}from"./react-B1kPYQQd.js";import{p as je}from"./ordersStore-C9ebM3Kl.js";import{M as we}from"./minus-BgTTVJqN.js";import{S as Ce}from"./shield-check-DHwr893L.js";import{C as ve}from"./clock-3-DmGR9h3u.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=E("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=E("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ze=[{factor:.25,label:"1/4"},{factor:.5,label:"1/2"},{factor:.75,label:"3/4"},{factor:1,label:"1 kg"},{factor:1.25,label:"1 kg + 1/4"},{factor:1.5,label:"1 kg + 1/2"},{factor:1.75,label:"1 kg + 3/4"},{factor:2,label:"2 kg"},{factor:2.25,label:"2 kg + 1/4"},{factor:2.5,label:"2 kg + 1/2"},{factor:2.75,label:"2 kg + 3/4"},{factor:3,label:"3 kg"},{factor:3.25,label:"3 kg + 1/4"},{factor:3.5,label:"3 kg + 1/2"},{factor:3.75,label:"3 kg + 3/4"},{factor:4,label:"4 kg"}],Me=(e,s,o)=>Array.from({length:e},(n,d)=>({factor:d+1,label:`${d+1} ${d===0?s:o}`})),Ie={unidad:{id:"unidad",label:"Por unidad",help:"El cliente elige de a una. El precio cargado es el de una unidad.",priceSuffix:"c/u",steps:Me(20,"unid.","unid.")},peso:{id:"peso",label:"Por peso (kg)",help:"Escalones de un cuarto de kilo, hasta 4 kg. El precio cargado es el del kilo.",priceSuffix:"el kg",steps:ze}},Ee="unidad",T=e=>Ie[e??Ee],G=e=>T(e).steps.length-1;function Pe(e,s){const{steps:o}=T(e),n=Math.min(Math.max(s,0),o.length-1);return o[n].label}function Te(e,s){const{steps:o}=T(e),n=Math.min(Math.max(s,0),o.length-1);return o[n].factor}const Le=X`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ae=X`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Fe=r.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${Le} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,He=r.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  text-align: center;

  ${$};
  animation: ${Ae} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Re=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,qe=r.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,Be=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,Ue=r.button`
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
`,Oe=r.button`
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
`;function De({open:e,title:s,text:o,confirmLabel:n="Aceptar",cancelLabel:d="Cancelar",onConfirm:c,onCancel:l}){return m.useEffect(()=>{if(!e)return;const p=w=>{w.key==="Escape"&&l()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[l,e]),e?a.jsx(Fe,{onClick:l,role:"presentation",children:a.jsxs(He,{role:"alertdialog","aria-modal":"true","aria-label":s,onClick:p=>p.stopPropagation(),children:[a.jsx(Re,{children:s}),o?a.jsx(qe,{children:o}):null,a.jsxs(Be,{children:[a.jsx(Ue,{type:"button",onClick:l,children:d}),a.jsx(Oe,{type:"button",onClick:c,autoFocus:!0,children:n})]})]})}):null}const Ge=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ne=r(j)`
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
`,z=r(Z)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Qe=r(Z)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,We=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ye=r.button`
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
`,_e=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ve=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ke=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const u=r.span`
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
    ${P};
    ${$};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Je=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Xe=r.div`
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
`,Ze=r.span`
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
`,ea=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,aa=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,ra=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,N=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ta=r(j)`
  overflow: hidden;
`,oa=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Q=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,W=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Y=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ia=r.span`
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
  ${P};
  ${$};
`,na=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,sa=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,la=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,da=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const ca=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,pa=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,ga=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,ha=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,ua=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,ma=r.span`
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
`,ba=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,_=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,V=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,fa=r(j)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,xa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const ya=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,$a=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,ja=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,wa=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,Ca=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,M=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,va=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,f=r.div`
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
`,ka=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Sa=r.div`
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
`,K=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,za=ce`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ma=r.div`
  ${za}
`,I=r(de)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Ia=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Ea=r.button`
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

  ${P};
  ${$};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Pa=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,J=r.button`
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
`,Ta=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,y=15e3,ae=200,re=e=>{const s=e.match(/\d+/);return Number((s==null?void 0:s[0])??0)},La=(e=ee)=>{const s=new Map;return e.forEach(o=>{const n=s.get(o.store);if(n){n.items.push(o),n.itemCount+=o.quantity,n.subtotal+=o.subtotal,n.availableCount+=o.available?1:0,n.unavailableCount+=o.available?0:1;return}s.set(o.store,{store:o.store,items:[o],itemCount:o.quantity,subtotal:o.subtotal,etaLabel:o.eta,availableCount:o.available?1:0,unavailableCount:o.available?0:1})}),[...s.values()].map(o=>{const n=o.items.map(l=>re(l.eta)).filter(Boolean),d=n.length?Math.min(...n):0,c=n.length?Math.max(...n):0;return{...o,etaLabel:n.length<=1||d===c?`${d||0} min`:`${d}–${c} min`}})},Aa=e=>{const s=e.reduce((l,p)=>l+p.subtotal,0),o=s>=y?0:1200,n=e.map(l=>re(l.eta)).filter(Boolean),d=n.length?Math.min(...n):0,c=n.length?Math.max(...n):0;return{subtotal:s,deliveryFee:o,total:s+o+ae,totalUnits:e.filter(l=>l.available).length,unavailableItems:e.filter(l=>!l.available).length,deliveryWindow:n.length?d===c?`${d} min`:`${d}–${c} min`:"Pendiente",freeShippingRemaining:Math.max(y-s,0),freeShippingProgress:Math.min(s/y*100,100)}},Fa=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],Ha=[{label:"Crédito",icon:D},{label:"Débito",icon:D},{label:"Transferencia",icon:Se}],Ra=[{label:"Compra protegida",icon:Ce},{label:"Sin costos sorpresa",icon:ve},{label:"Entrega clara",icon:x}],qa=["Delivery GO","Entrega comercio","Sin retiro"];function Qa(){var H;const[e,s]=m.useState(ee),[o,n]=m.useState(null),[d,c]=m.useState(!1),l=$e(),p=m.useMemo(()=>La(e),[e]),{subtotal:w,deliveryFee:te,total:oe,totalUnits:L,unavailableItems:A,deliveryWindow:ie,freeShippingRemaining:C,freeShippingProgress:ne}=m.useMemo(()=>Aa(e),[e]),F=(i,t)=>{s(v=>v.map(g=>{if(g.id!==i||!g.available)return g;const R=Math.min(Math.max(0,g.quantity+t),G(g.saleUnit));return{...g,quantity:R,subtotal:Math.round(g.price*Te(g.saleUnit,R))}}))},se=()=>{je(e),l("/pedidos")},le=i=>{s(t=>t.filter(v=>v.id!==i)),n(null)};return p.length===0?a.jsx(q,{showSearch:!1,children:a.jsx(I,{children:a.jsx(k,{children:a.jsx(pe,{icon:B,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(q,{showSearch:!1,children:[a.jsxs(Ge,{children:[a.jsx(I,{children:a.jsx(k,{children:a.jsx(Ne,{children:a.jsx(z,{children:a.jsxs(_e,{children:[a.jsxs(Ve,{children:[a.jsx(Ke,{children:a.jsx(ge,{children:"Carrito"})}),a.jsxs(aa,{children:[a.jsxs(u,{"data-tone":"brand",children:[a.jsx(B,{size:14,"aria-hidden":"true"})," ",L," ",L===1?"producto":"productos"]}),a.jsxs(u,{"data-tone":A>0?"warning":"success",children:[a.jsx(ke,{size:14,"aria-hidden":"true"})," ",A," sin stock"]}),a.jsxs(u,{children:[a.jsx(x,{size:14,"aria-hidden":"true"})," ",ie]})]})]}),a.jsx(Je,{"aria-label":"Progreso de compra",children:Fa.map((i,t)=>a.jsxs(Xe,{"data-state":i.state,children:[a.jsx(Ze,{"data-state":i.state,children:t+1}),a.jsx(ea,{children:i.label})]},i.label))})]})})})})}),a.jsx(I,{children:a.jsx(k,{children:a.jsxs(ra,{children:[a.jsx(N,{children:p.map(i=>a.jsx(ta,{children:a.jsxs(z,{children:[a.jsxs(oa,{children:[a.jsxs(Q,{children:[a.jsx(W,{children:i.store}),a.jsxs(Y,{children:[i.itemCount," ítems · ",i.unavailableCount," pendientes"]})]}),a.jsxs(ia,{children:[a.jsx(x,{size:14,"aria-hidden":"true"})," ",i.etaLabel]})]}),a.jsx(na,{children:i.items.map(t=>a.jsxs(sa,{children:[a.jsx(la,{children:a.jsx(da,{src:he(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(ca,{children:[a.jsxs(pa,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(ga,{children:t.product}),a.jsx(ue,{children:t.store})]}),a.jsxs(Ia,{children:[a.jsx(ha,{children:t.available?h(t.subtotal):"—"}),a.jsx(Ea,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:a.jsx(me,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(ua,{children:[a.jsxs(Pa,{children:[a.jsx(J,{type:"button",onClick:()=>F(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(we,{size:14,"aria-hidden":"true"})}),a.jsx(Ta,{"aria-live":"polite",children:t.available?Pe(t.saleUnit,t.quantity):"0 unid."}),a.jsx(J,{type:"button",onClick:()=>F(t.id,1),disabled:!t.available||t.quantity>=G(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(U,{size:14,"aria-hidden":"true"})})]}),a.jsx(ma,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(ba,{children:[a.jsxs(_,{children:[a.jsx(x,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(_,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(V,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(V,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},i.store))}),a.jsx(fa,{children:a.jsx(z,{children:a.jsxs(xa,{children:[a.jsx(b,{children:"Resumen"}),a.jsxs(ya,{children:[a.jsxs($a,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:C>0?`${h(C)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(wa,{children:a.jsx(Ca,{$value:ne})}),a.jsxs(ja,{children:["Umbral estimado ",h(y)," ·"," ",C>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(va,{children:[a.jsxs(f,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:h(w)})]}),a.jsxs(f,{children:[a.jsx("span",{children:"Envío estimado"}),a.jsx("span",{children:h(te)})]}),a.jsxs(f,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:h(ae)})]}),a.jsxs(f,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(be,{children:h(oe)})]})]}),a.jsx(ka,{children:Ra.map(i=>{const t=i.icon;return a.jsxs(Sa,{children:[a.jsx(t,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:i.label})]},i.label)})}),a.jsxs(M,{children:[a.jsxs("div",{children:[a.jsx(b,{children:"Dirección"}),a.jsx(S,{children:"Elegí dónde recibir"})]}),a.jsxs(N,{children:[O.map(i=>a.jsx(j,{children:a.jsx(Qe,{children:a.jsxs(We,{children:[a.jsxs(Q,{children:[a.jsx(W,{children:i.label}),a.jsx(Y,{children:i.address})]}),a.jsx(u,{"data-tone":i.primary?"brand":"success",children:i.primary?"Principal":"Guardada"})]})})},i.id)),a.jsxs(Ye,{type:"button",onClick:()=>c(!0),children:[a.jsx(U,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(M,{children:[a.jsxs("div",{children:[a.jsx(b,{children:"Entrega"}),a.jsx(S,{children:"Cómo llega el pedido"})]}),a.jsx(K,{children:qa.map(i=>a.jsx(u,{"data-tone":"brand",children:i},i))})]}),a.jsxs(M,{children:[a.jsxs("div",{children:[a.jsx(b,{children:"Pago"}),a.jsx(S,{children:"Elegí el medio de pago"})]}),a.jsx(K,{children:Ha.map(i=>{const t=i.icon;return a.jsxs(u,{"data-tone":"brand",children:[a.jsx(t,{size:14,"aria-hidden":"true"}),i.label]},i.label)})})]}),a.jsxs(Ma,{children:[a.jsx(fe,{as:"button",type:"button",onClick:se,children:"Confirmar pedido"}),a.jsx(xe,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(De,{open:o!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>o&&le(o)}),a.jsx(ye,{open:d,currentId:((H=O[0])==null?void 0:H.id)??"",startOnNew:!0,onClose:()=>c(!1),onSelect:()=>c(!1)})]})}export{Qa as CartScreen};
