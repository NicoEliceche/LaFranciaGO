import{c as L,$ as we,q as a,a0 as Ce,d as E,e as se,am as A,an as H,Z as ve,ao as ke,j as r,M as Q,S,E as Se,aa as G,ap as ze,aq as f,I as Ie,a as Me,K as m,X as Pe,L as U,ar as y,as as Te,C as z,ah as Le,ai as Ee,at as Ae,au as He,h as V,ak as qe}from"./index-BzywHFYN.js";import{r as h,u as Re}from"./react-D_B_6qYb.js";import{s as Fe,m as Be}from"./saleUnits-CLP-TCsg.js";import{u as De,M as Oe,c as Ne,b as W,r as Qe}from"./cartStore-AYNs4yCg.js";import{C as Ge}from"./ConfirmDialog-BKrZKkmX.js";import{S as Ue}from"./shield-check-vNXVWhTL.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=L("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=L("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=L("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),Ke=new Set;let X=[...we],I=1249;const Xe=()=>Ke.forEach(e=>e()),Ye=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function Ze(e){const l=e.filter(s=>s.available);if(l.length===0)return[];const i=new Map;l.forEach(s=>{const g=i.get(s.store)??[];g.push(s),i.set(s.store,g)});const n=[];return i.forEach((s,g)=>{I+=1,n.push({id:`ord-${I}`,code:`#${I}`,store:g,storeId:s[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:s[0].categoryId,total:s.reduce((c,u)=>c+u.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${s[0].eta}`,date:Ye(),itemCount:s.length,items:s.map(c=>({productId:c.id,quantity:c.quantity+1}))})}),X=[...n,...X],Xe(),n}const Je=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,_e=a(E)`
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
`,M=a(se)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,er=a(se)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,rr=a.button`
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  text-align: left;
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }

  &[data-elegida='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }
`,ar=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,tr=a.button`
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
`,or=a.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ir=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,nr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const Y=a.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }

  &[data-elegido='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }
`,x=a.span`
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
    ${A};
    ${H};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,sr=a.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,lr=a.div`
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
`,dr=a.span`
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
`,cr=a.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,pr=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,gr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,Z=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,hr=a(E)`
  overflow: hidden;
`,ur=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,J=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,_=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,ee=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,mr=a.span`
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
  ${A};
  ${H};
`,br=a.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,yr=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,xr=a.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,$r=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const fr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,jr=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,wr=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Cr=a.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,vr=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,kr=a.span`
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
`,Sr=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,re=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,ae=a.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,zr=a(E)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,Ir=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const Mr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,Pr=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,Tr=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Lr=a.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,Er=a.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,P=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,Ar=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,$=a.div`
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
`,Hr=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,qr=a.div`
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
`,te=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Rr=ve`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Fr=a.div`
  ${Rr}
`,T=a(Ce)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Br=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Dr=a.button`
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

  ${A};
  ${H};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Or=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,oe=a.button`
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
`,Nr=a.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,j=15e3,le=200,de=e=>{const l=e.match(/\d+/);return Number((l==null?void 0:l[0])??0)},Qr=(e=He)=>{const l=new Map;return e.forEach(i=>{const n=l.get(i.store);if(n){n.items.push(i),n.itemCount+=i.quantity,n.subtotal+=i.subtotal,n.availableCount+=i.available?1:0,n.unavailableCount+=i.available?0:1;return}l.set(i.store,{store:i.store,items:[i],itemCount:i.quantity,subtotal:i.subtotal,etaLabel:i.eta,availableCount:i.available?1:0,unavailableCount:i.available?0:1})}),[...l.values()].map(i=>{const n=i.items.map(c=>de(c.eta)).filter(Boolean),s=n.length?Math.min(...n):0,g=n.length?Math.max(...n):0;return{...i,etaLabel:n.length<=1||s===g?`${s||0} min`:`${s}–${g} min`}})},Gr=e=>{const l=e.reduce((c,u)=>c+u.subtotal,0),i=l>=j?0:1200,n=e.map(c=>de(c.eta)).filter(Boolean),s=n.length?Math.min(...n):0,g=n.length?Math.max(...n):0;return{subtotal:l,deliveryFee:i,total:l+i+le,totalUnits:e.filter(c=>c.available).length,unavailableItems:e.filter(c=>!c.available).length,deliveryWindow:n.length?s===g?`${s} min`:`${s}–${g} min`:"Pendiente",freeShippingRemaining:Math.max(j-l,0),freeShippingProgress:Math.min(l/j*100,100)}},Ur=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],ie=[{label:"Crédito",icon:K},{label:"Débito",icon:K},{label:"Transferencia",icon:We}],Vr=[{label:"Precio final",icon:Ue},{label:"Seguí tu pedido",icon:f}],ne=["Delivery GO","Entrega comercio","Sin retiro"];function _r(){const e=De(),[l,i]=h.useState(null),[n,s]=h.useState(!1),[g,c]=h.useState(null),{direcciones:u,recargar:ce}=ke(),[pe,q]=h.useState(null),[w,ge]=h.useState(ne[0]),[C,he]=h.useState(ie[0].label),d=u.find(t=>t.id===pe)??u.find(t=>t.primary)??u[0]??null,[ue,v]=h.useState(!1),R=Re(),F=h.useMemo(()=>Qr(e),[e]),{subtotal:me,deliveryFee:be,total:ye,totalUnits:B,unavailableItems:D,deliveryWindow:xe,freeShippingRemaining:k,freeShippingProgress:$e}=h.useMemo(()=>Gr(e),[e]),O=Ne,fe=async()=>{if(n)return;if(V()&&!d){c("Elegí una dirección de entrega antes de confirmar.");return}s(!0),c(null);const t=e.filter(p=>p.available);if(!V()||t.some(p=>!p.storeId)){Ze(e),W(),R("/pedidos");return}const o=new Map;for(const p of t){const b=o.get(p.storeId)??[];b.push(p),o.set(p.storeId,b)}try{for(const[p,b]of o)await qe.crear({comercioId:p,direccionId:d==null?void 0:d.id,direccionTexto:d==null?void 0:d.address,metodoPago:`${C} · ${w}`,items:b.map(N=>({productoId:N.id,escalon:N.quantity}))});W(),R("/pedidos")}catch(p){c(p instanceof Error?p.message:"No pudimos confirmar el pedido.")}finally{s(!1)}},je=t=>{Qe(t),i(null)};return F.length===0?r.jsx(Q,{showSearch:!1,children:r.jsx(T,{children:r.jsx(S,{children:r.jsx(Se,{icon:G,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):r.jsxs(Q,{showSearch:!1,children:[r.jsxs(Je,{children:[r.jsx(T,{children:r.jsx(S,{children:r.jsx(_e,{children:r.jsx(M,{children:r.jsxs(or,{children:[r.jsxs(ir,{children:[r.jsx(nr,{children:r.jsx(ze,{children:"Carrito"})}),r.jsxs(pr,{children:[r.jsxs(x,{"data-tone":"brand",children:[r.jsx(G,{size:14,"aria-hidden":"true"})," ",B," ",B===1?"producto":"productos"]}),r.jsxs(x,{"data-tone":D>0?"warning":"success",children:[r.jsx(Ve,{size:14,"aria-hidden":"true"})," ",D," sin stock"]}),r.jsxs(x,{children:[r.jsx(f,{size:14,"aria-hidden":"true"})," ",xe]})]})]}),r.jsx(sr,{"aria-label":"Progreso de compra",children:Ur.map((t,o)=>r.jsxs(lr,{"data-state":t.state,children:[r.jsx(dr,{"data-state":t.state,children:o+1}),r.jsx(cr,{children:t.label})]},t.label))})]})})})})}),r.jsx(T,{children:r.jsx(S,{children:r.jsxs(gr,{children:[r.jsx(Z,{children:F.map(t=>r.jsx(hr,{children:r.jsxs(M,{children:[r.jsxs(ur,{children:[r.jsxs(J,{children:[r.jsx(_,{children:t.store}),r.jsxs(ee,{children:[t.itemCount," ítems · ",t.unavailableCount," pendientes"]})]}),r.jsxs(mr,{children:[r.jsx(f,{size:14,"aria-hidden":"true"})," ",t.etaLabel]})]}),r.jsx(br,{children:t.items.map(o=>r.jsxs(yr,{children:[r.jsx(xr,{children:r.jsx($r,{src:Ie(o.categoryId),alt:o.product,loading:"lazy"})}),r.jsxs(fr,{children:[r.jsxs(jr,{children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx(wr,{children:o.product}),r.jsx(Me,{children:o.store})]}),r.jsxs(Br,{children:[r.jsx(Cr,{children:o.available?m(o.subtotal):"—"}),r.jsx(Dr,{type:"button","aria-label":`Quitar ${o.product} del carrito`,onClick:()=>i(o.id),children:r.jsx(Pe,{size:15,"aria-hidden":"true"})})]})]}),r.jsxs(vr,{children:[r.jsxs(Or,{children:[r.jsx(oe,{type:"button",onClick:()=>O(o.id,-1),disabled:!o.available||o.quantity<=0,"aria-label":`Quitar cantidad de ${o.product}`,children:r.jsx(Oe,{size:14,"aria-hidden":"true"})}),r.jsx(Nr,{"aria-live":"polite",children:o.available?Fe(o.saleUnit,o.quantity):"0 unid."}),r.jsx(oe,{type:"button",onClick:()=>O(o.id,1),disabled:!o.available||o.quantity>=Be(o.saleUnit),"aria-label":`Agregar cantidad de ${o.product}`,children:r.jsx(U,{size:14,"aria-hidden":"true"})})]}),r.jsx(kr,{"data-tone":o.statusTone,children:o.statusLabel})]}),r.jsxs(Sr,{children:[r.jsxs(re,{children:[r.jsx(f,{size:14,"aria-hidden":"true"}),o.eta]}),o.statusTone==="success"?r.jsx(re,{children:"Listo para sumar al pedido"}):o.statusTone==="warning"?r.jsx(ae,{"data-tone":"warning",children:"Pocas unidades"}):r.jsx(ae,{"data-tone":"danger",children:"Sin stock"})]})]})]},o.id))})]})},t.store))}),r.jsx(zr,{children:r.jsx(M,{children:r.jsxs(Ir,{children:[r.jsx(y,{children:"Resumen"}),r.jsxs(Mr,{children:[r.jsxs(Pr,{children:[r.jsx("span",{children:"Envío gratis"}),r.jsx("strong",{children:k>0?`${m(k)} faltan`:"Ya lo alcanzaste"})]}),r.jsx(Lr,{children:r.jsx(Er,{$value:$e})}),r.jsxs(Tr,{children:["Umbral estimado ",m(j)," ·"," ",k>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),r.jsxs(Ar,{children:[r.jsxs($,{children:[r.jsx("span",{children:"Subtotal"}),r.jsx("span",{children:m(me)})]}),r.jsxs($,{children:[r.jsx("span",{children:"Envío estimado"}),r.jsx("span",{children:m(be)})]}),r.jsxs($,{children:[r.jsx("span",{children:"Cargo de servicio"}),r.jsx("span",{children:m(le)})]}),r.jsxs($,{"data-emphasis":"true",children:[r.jsx("strong",{children:"Total estimado"}),r.jsx(Te,{children:m(ye)})]})]}),r.jsx(Hr,{children:Vr.map(t=>{const o=t.icon;return r.jsxs(qr,{children:[r.jsx(o,{size:16,"aria-hidden":"true"}),r.jsx("span",{children:t.label})]},t.label)})}),r.jsxs(P,{children:[r.jsxs("div",{children:[r.jsx(y,{children:"Dirección"}),r.jsx(z,{children:"Elegí dónde recibir"})]}),r.jsxs(Z,{children:[u.map(t=>r.jsx(rr,{type:"button",onClick:()=>q(t.id),"data-elegida":(d==null?void 0:d.id)===t.id,"aria-pressed":(d==null?void 0:d.id)===t.id,children:r.jsx(er,{children:r.jsxs(ar,{children:[r.jsxs(J,{children:[r.jsx(_,{children:t.label}),r.jsx(ee,{children:t.address})]}),r.jsx(x,{"data-tone":t.primary?"brand":"success",children:(d==null?void 0:d.id)===t.id?"Elegida":t.primary?"Principal":"Guardada"})]})})},t.id)),r.jsxs(tr,{type:"button",onClick:()=>v(!0),children:[r.jsx(U,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),r.jsxs(P,{children:[r.jsxs("div",{children:[r.jsx(y,{children:"Entrega"}),r.jsx(z,{children:"Cómo llega el pedido"})]}),r.jsx(te,{children:ne.map(t=>r.jsx(Y,{type:"button",onClick:()=>ge(t),"data-elegido":w===t,"aria-pressed":w===t,children:t},t))})]}),r.jsxs(P,{children:[r.jsxs("div",{children:[r.jsx(y,{children:"Pago"}),r.jsx(z,{children:"Elegí el medio de pago"})]}),r.jsx(te,{children:ie.map(t=>{const o=t.icon;return r.jsxs(Y,{type:"button",onClick:()=>he(t.label),"data-elegido":C===t.label,"aria-pressed":C===t.label,children:[r.jsx(o,{size:14,"aria-hidden":"true"}),t.label]},t.label)})})]}),r.jsxs(Fr,{children:[r.jsx(Le,{as:"button",type:"button",onClick:()=>void fe(),disabled:n,children:n?"Confirmando…":"Confirmar pedido"}),r.jsx(Ee,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),r.jsx(Ge,{open:l!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>i(null),onConfirm:()=>l&&je(l)}),r.jsx(Ae,{open:ue,currentId:(d==null?void 0:d.id)??"",startOnNew:!0,onClose:()=>v(!1),onSelect:t=>{q(t),v(!1),ce()}})]})}export{_r as CartScreen};
