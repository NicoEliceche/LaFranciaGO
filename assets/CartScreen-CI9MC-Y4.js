import{ae as E,af as x,q as a,ag as j,ah as Z,j as r,T as ce,a as w,b as ee,ai as T,O as pe,M as O,S as k,E as ge,a3 as q,aj as he,ak as f,z as ue,d as me,B as h,X as be,D,al as b,am as ye,c as S,an as N,aa as xe,ab as fe,ao as $e}from"./index-DlPjbtwt.js";import{r as u,u as je}from"./react-D_B_6qYb.js";import{m as re,a as we,s as Ce}from"./saleUnits-CLP-TCsg.js";import{p as ve}from"./ordersStore-DT8qoeY_.js";import{M as ke}from"./minus-romqSdE4.js";import{S as Se}from"./shield-check-C7JJ9OcF.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=E("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=E("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ae="lafranciago:carrito",P=new Set;let c=[],G=!1;const L=()=>P.forEach(e=>e()),A=()=>{try{window.sessionStorage.setItem(ae,JSON.stringify(c))}catch{}},Ie=()=>{try{const e=window.sessionStorage.getItem(ae);if(!e)return[...x];const i=JSON.parse(e);return Array.isArray(i)?i:[...x]}catch{return[...x]}},Pe=()=>{G||(G=!0,c=Ie())};function Ee(e){c=c.filter(i=>i.id!==e),A(),L()}function Te(e,i){c=c.map(t=>{if(t.id!==e||!t.available)return t;const s=Math.min(Math.max(0,t.quantity+i),re(t.saleUnit));return{...t,quantity:s,subtotal:Math.round(t.price*we(t.saleUnit,s))}}),A(),L()}function Le(){c=[],A(),L()}function Ae(){const[e,i]=u.useState(c);return u.useEffect(()=>{Pe(),i(c);const t=()=>i(c);return P.add(t),()=>{P.delete(t)}},[]),e}const Fe=Z`
  from { opacity: 0; }
  to { opacity: 1; }
`,He=Z`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Re=a.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${Fe} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Be=a.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  text-align: center;

  ${j};
  animation: ${He} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Oe=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,qe=a.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,De=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,Ne=a.button`
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
`,Ue=a.button`
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
`;function Ge({open:e,title:i,text:t,confirmLabel:s="Aceptar",cancelLabel:d="Cancelar",onConfirm:p,onCancel:l}){return u.useEffect(()=>{if(!e)return;const g=C=>{C.key==="Escape"&&l()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[l,e]),e?r.jsx(Re,{onClick:l,role:"presentation",children:r.jsxs(Be,{role:"alertdialog","aria-modal":"true","aria-label":i,onClick:g=>g.stopPropagation(),children:[r.jsx(Oe,{children:i}),t?r.jsx(qe,{children:t}):null,r.jsxs(De,{children:[r.jsx(Ne,{type:"button",onClick:l,children:d}),r.jsx(Ue,{type:"button",onClick:p,autoFocus:!0,children:s})]})]})}):null}const Qe=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ye=a(w)`
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
`,z=a(ee)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,We=a(ee)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Ke=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ve=a.button`
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
`,Je=a.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Xe=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,_e=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const m=a.span`
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
    ${j};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Ze=a.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,er=a.div`
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
`,rr=a.span`
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
`,ar=a.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,tr=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,or=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,Q=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ir=a(w)`
  overflow: hidden;
`,nr=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Y=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,W=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,K=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,sr=a.span`
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
  ${j};
`,lr=a.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,dr=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,cr=a.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,pr=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const gr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,hr=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,ur=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,mr=a.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,br=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,yr=a.span`
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
`,xr=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,V=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,J=a.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,fr=a(w)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,$r=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const jr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,wr=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,Cr=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,vr=a.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,kr=a.div`
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
`,Sr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,y=a.div`
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
`,zr=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Mr=a.div`
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
`,X=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ir=pe`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Pr=a.div`
  ${Ir}
`,I=a(ce)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Er=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Tr=a.button`
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
  ${j};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Lr=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,_=a.button`
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
`,Ar=a.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,$=15e3,te=200,oe=e=>{const i=e.match(/\d+/);return Number((i==null?void 0:i[0])??0)},Fr=(e=x)=>{const i=new Map;return e.forEach(t=>{const s=i.get(t.store);if(s){s.items.push(t),s.itemCount+=t.quantity,s.subtotal+=t.subtotal,s.availableCount+=t.available?1:0,s.unavailableCount+=t.available?0:1;return}i.set(t.store,{store:t.store,items:[t],itemCount:t.quantity,subtotal:t.subtotal,etaLabel:t.eta,availableCount:t.available?1:0,unavailableCount:t.available?0:1})}),[...i.values()].map(t=>{const s=t.items.map(l=>oe(l.eta)).filter(Boolean),d=s.length?Math.min(...s):0,p=s.length?Math.max(...s):0;return{...t,etaLabel:s.length<=1||d===p?`${d||0} min`:`${d}–${p} min`}})},Hr=e=>{const i=e.reduce((l,g)=>l+g.subtotal,0),t=i>=$?0:1200,s=e.map(l=>oe(l.eta)).filter(Boolean),d=s.length?Math.min(...s):0,p=s.length?Math.max(...s):0;return{subtotal:i,deliveryFee:t,total:i+t+te,totalUnits:e.filter(l=>l.available).length,unavailableItems:e.filter(l=>!l.available).length,deliveryWindow:s.length?d===p?`${d} min`:`${d}–${p} min`:"Pendiente",freeShippingRemaining:Math.max($-i,0),freeShippingProgress:Math.min(i/$*100,100)}},Rr=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],Br=[{label:"Crédito",icon:U},{label:"Débito",icon:U},{label:"Transferencia",icon:Me}],Or=[{label:"Precio final",icon:Se},{label:"Seguí tu pedido",icon:f}],qr=["Delivery GO","Entrega comercio","Sin retiro"];function Wr(){var B;const e=Ae(),[i,t]=u.useState(null),[s,d]=u.useState(!1),p=je(),l=u.useMemo(()=>Fr(e),[e]),{subtotal:g,deliveryFee:C,total:ie,totalUnits:F,unavailableItems:H,deliveryWindow:ne,freeShippingRemaining:v,freeShippingProgress:se}=u.useMemo(()=>Hr(e),[e]),R=Te,le=()=>{ve(e),Le(),p("/pedidos")},de=n=>{Ee(n),t(null)};return l.length===0?r.jsx(O,{showSearch:!1,children:r.jsx(I,{children:r.jsx(k,{children:r.jsx(ge,{icon:q,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):r.jsxs(O,{showSearch:!1,children:[r.jsxs(Qe,{children:[r.jsx(I,{children:r.jsx(k,{children:r.jsx(Ye,{children:r.jsx(z,{children:r.jsxs(Je,{children:[r.jsxs(Xe,{children:[r.jsx(_e,{children:r.jsx(he,{children:"Carrito"})}),r.jsxs(tr,{children:[r.jsxs(m,{"data-tone":"brand",children:[r.jsx(q,{size:14,"aria-hidden":"true"})," ",F," ",F===1?"producto":"productos"]}),r.jsxs(m,{"data-tone":H>0?"warning":"success",children:[r.jsx(ze,{size:14,"aria-hidden":"true"})," ",H," sin stock"]}),r.jsxs(m,{children:[r.jsx(f,{size:14,"aria-hidden":"true"})," ",ne]})]})]}),r.jsx(Ze,{"aria-label":"Progreso de compra",children:Rr.map((n,o)=>r.jsxs(er,{"data-state":n.state,children:[r.jsx(rr,{"data-state":n.state,children:o+1}),r.jsx(ar,{children:n.label})]},n.label))})]})})})})}),r.jsx(I,{children:r.jsx(k,{children:r.jsxs(or,{children:[r.jsx(Q,{children:l.map(n=>r.jsx(ir,{children:r.jsxs(z,{children:[r.jsxs(nr,{children:[r.jsxs(Y,{children:[r.jsx(W,{children:n.store}),r.jsxs(K,{children:[n.itemCount," ítems · ",n.unavailableCount," pendientes"]})]}),r.jsxs(sr,{children:[r.jsx(f,{size:14,"aria-hidden":"true"})," ",n.etaLabel]})]}),r.jsx(lr,{children:n.items.map(o=>r.jsxs(dr,{children:[r.jsx(cr,{children:r.jsx(pr,{src:ue(o.categoryId),alt:o.product,loading:"lazy"})}),r.jsxs(gr,{children:[r.jsxs(hr,{children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx(ur,{children:o.product}),r.jsx(me,{children:o.store})]}),r.jsxs(Er,{children:[r.jsx(mr,{children:o.available?h(o.subtotal):"—"}),r.jsx(Tr,{type:"button","aria-label":`Quitar ${o.product} del carrito`,onClick:()=>t(o.id),children:r.jsx(be,{size:15,"aria-hidden":"true"})})]})]}),r.jsxs(br,{children:[r.jsxs(Lr,{children:[r.jsx(_,{type:"button",onClick:()=>R(o.id,-1),disabled:!o.available||o.quantity<=0,"aria-label":`Quitar cantidad de ${o.product}`,children:r.jsx(ke,{size:14,"aria-hidden":"true"})}),r.jsx(Ar,{"aria-live":"polite",children:o.available?Ce(o.saleUnit,o.quantity):"0 unid."}),r.jsx(_,{type:"button",onClick:()=>R(o.id,1),disabled:!o.available||o.quantity>=re(o.saleUnit),"aria-label":`Agregar cantidad de ${o.product}`,children:r.jsx(D,{size:14,"aria-hidden":"true"})})]}),r.jsx(yr,{"data-tone":o.statusTone,children:o.statusLabel})]}),r.jsxs(xr,{children:[r.jsxs(V,{children:[r.jsx(f,{size:14,"aria-hidden":"true"}),o.eta]}),o.statusTone==="success"?r.jsx(V,{children:"Listo para sumar al pedido"}):o.statusTone==="warning"?r.jsx(J,{"data-tone":"warning",children:"Pocas unidades"}):r.jsx(J,{"data-tone":"danger",children:"Sin stock"})]})]})]},o.id))})]})},n.store))}),r.jsx(fr,{children:r.jsx(z,{children:r.jsxs($r,{children:[r.jsx(b,{children:"Resumen"}),r.jsxs(jr,{children:[r.jsxs(wr,{children:[r.jsx("span",{children:"Envío gratis"}),r.jsx("strong",{children:v>0?`${h(v)} faltan`:"Ya lo alcanzaste"})]}),r.jsx(vr,{children:r.jsx(kr,{$value:se})}),r.jsxs(Cr,{children:["Umbral estimado ",h($)," ·"," ",v>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),r.jsxs(Sr,{children:[r.jsxs(y,{children:[r.jsx("span",{children:"Subtotal"}),r.jsx("span",{children:h(g)})]}),r.jsxs(y,{children:[r.jsx("span",{children:"Envío estimado"}),r.jsx("span",{children:h(C)})]}),r.jsxs(y,{children:[r.jsx("span",{children:"Cargo de servicio"}),r.jsx("span",{children:h(te)})]}),r.jsxs(y,{"data-emphasis":"true",children:[r.jsx("strong",{children:"Total estimado"}),r.jsx(ye,{children:h(ie)})]})]}),r.jsx(zr,{children:Or.map(n=>{const o=n.icon;return r.jsxs(Mr,{children:[r.jsx(o,{size:16,"aria-hidden":"true"}),r.jsx("span",{children:n.label})]},n.label)})}),r.jsxs(M,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Dirección"}),r.jsx(S,{children:"Elegí dónde recibir"})]}),r.jsxs(Q,{children:[N.map(n=>r.jsx(w,{children:r.jsx(We,{children:r.jsxs(Ke,{children:[r.jsxs(Y,{children:[r.jsx(W,{children:n.label}),r.jsx(K,{children:n.address})]}),r.jsx(m,{"data-tone":n.primary?"brand":"success",children:n.primary?"Principal":"Guardada"})]})})},n.id)),r.jsxs(Ve,{type:"button",onClick:()=>d(!0),children:[r.jsx(D,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),r.jsxs(M,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Entrega"}),r.jsx(S,{children:"Cómo llega el pedido"})]}),r.jsx(X,{children:qr.map(n=>r.jsx(m,{"data-tone":"brand",children:n},n))})]}),r.jsxs(M,{children:[r.jsxs("div",{children:[r.jsx(b,{children:"Pago"}),r.jsx(S,{children:"Elegí el medio de pago"})]}),r.jsx(X,{children:Br.map(n=>{const o=n.icon;return r.jsxs(m,{"data-tone":"brand",children:[r.jsx(o,{size:14,"aria-hidden":"true"}),n.label]},n.label)})})]}),r.jsxs(Pr,{children:[r.jsx(xe,{as:"button",type:"button",onClick:le,children:"Confirmar pedido"}),r.jsx(fe,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),r.jsx(Ge,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>t(null),onConfirm:()=>i&&de(i)}),r.jsx($e,{open:s,currentId:((B=N[0])==null?void 0:B.id)??"",startOnNew:!0,onClose:()=>d(!1),onSelect:()=>d(!1)})]})}export{Wr as CartScreen};
