import{c as W,$ as Ne,q as r,a0 as Ue,d as K,e as we,am as _,an as X,Z as Qe,ao as Ge,j as a,M as se,S as F,E as Ve,aa as le,ap as We,aq as S,I as Ke,a as _e,K as h,X as Xe,L as ce,ar as C,as as Ye,C as R,ah as Ze,ai as Je,at as ea,au as aa,h as de,ak as ra,av as oa}from"./index-Bc4FkQ3o.js";import{r as u,u as ta}from"./react-D_B_6qYb.js";import{s as ia,m as na}from"./saleUnits-CLP-TCsg.js";import{u as sa,M as la,c as ca,b as pe,r as da}from"./cartStore-BrnRW5uM.js";import{C as pa}from"./ConfirmDialog-B447XHGP.js";import{C as ga}from"./credit-card-CrnS20C2.js";import{W as ua}from"./wallet-D7OdK-nk.js";import{S as ha}from"./shield-check-BEFpahNm.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=W("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=W("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=W("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),ya=new Set;let ge=[...Ne],H=1249;const xa=()=>ya.forEach(e=>e()),$a=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function ja(e){const i=e.filter(l=>l.available);if(i.length===0)return[];const n=new Map;i.forEach(l=>{const g=n.get(l.store)??[];g.push(l),n.set(l.store,g)});const s=[];return n.forEach((l,g)=>{H+=1,s.push({id:`ord-${H}`,code:`#${H}`,store:g,storeId:l[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:l[0].categoryId,total:l.reduce((d,m)=>d+m.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${l[0].eta}`,date:$a(),itemCount:l.length,items:l.map(d=>({productId:d.id,quantity:d.quantity+1}))})}),ge=[...s,...ge],xa(),s}const ue={chico:2,mediano:6,grande:15,voluminoso:40},va={moto:60,auto:400,camioneta:2500,camion:12e3};function Ca(e,i){return e==="peso"?(i+1)*.25:e==="pesoMedio"?(i+1)*.5:i+1}function wa(e){const i=e.reduce((n,s)=>{const l=ue[s.tamano??"mediano"]??ue.mediano;return n+l*Ca(s.saleUnit,s.quantity)},0);return Math.round(i*10)/10}function V(e,i){return Math.max(1,Math.ceil(e/va[i]))}function he(e,i){return V(e,i)===1}const ka=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Sa=r(K)`
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
`,O=r(we)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,za=r(we)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Ma=r.button`
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
`,Ia=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pa=r.button`
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
`,Ta=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ea=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,qa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const me=r.button`
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
`,w=r.span`
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
    ${_};
    ${X};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,La=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Aa=r.div`
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
`,Fa=r.span`
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
`,Ra=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Ha=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Oa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,D=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Da=r(K)`
  overflow: hidden;
`,Ba=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,be=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,fe=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,ye=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Na=r.span`
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
  ${_};
  ${X};
`,Ua=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,Qa=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Ga=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,Va=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const Wa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Ka=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,_a=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Xa=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,Ya=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Za=r.span`
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
`,Ja=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,xe=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,$e=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,er=r(K)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,ar=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const rr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,or=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,tr=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,ir=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,nr=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,B=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,sr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,k=r.div`
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
`,lr=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,cr=r.div`
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
`,je=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,dr=Qe`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,pr=r.div`
  ${dr}
`,N=r(Ue)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,gr=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,ur=r.button`
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

  ${_};
  ${X};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,hr=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,ve=r.button`
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
`,mr=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,U=r.label`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;

  &:hover { border-color: ${({theme:e})=>e.color.primary}; }

  &[data-elegida='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }

  > input {
    margin: 0.2rem 0 0;
    accent-color: ${({theme:e})=>e.color.primary};
  }
`,Q=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    line-height: 1.35;
  }
`,G=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  color: ${({theme:e})=>e.color.text};
`,br=r.p`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;

  > svg { flex: 0 0 auto; margin-top: 0.1rem; }
`,z=15e3,ke=200,Se=e=>{const i=e.match(/\d+/);return Number((i==null?void 0:i[0])??0)},fr=(e=aa)=>{const i=new Map;return e.forEach(n=>{const s=i.get(n.store);if(s){s.items.push(n),s.itemCount+=n.quantity,s.subtotal+=n.subtotal,s.availableCount+=n.available?1:0,s.unavailableCount+=n.available?0:1;return}i.set(n.store,{store:n.store,items:[n],itemCount:n.quantity,subtotal:n.subtotal,etaLabel:n.eta,availableCount:n.available?1:0,unavailableCount:n.available?0:1})}),[...i.values()].map(n=>{const s=n.items.map(d=>Se(d.eta)).filter(Boolean),l=s.length?Math.min(...s):0,g=s.length?Math.max(...s):0;return{...n,etaLabel:s.length<=1||l===g?`${l||0} min`:`${l}–${g} min`}})},yr=e=>{const i=e.reduce((d,m)=>d+m.subtotal,0),n=i>=z?0:1200,s=e.map(d=>Se(d.eta)).filter(Boolean),l=s.length?Math.min(...s):0,g=s.length?Math.max(...s):0;return{subtotal:i,deliveryFee:n,total:i+n+ke,totalUnits:e.filter(d=>d.available).length,unavailableItems:e.filter(d=>!d.available).length,deliveryWindow:s.length?l===g?`${l} min`:`${l}–${g} min`:"Pendiente",freeShippingRemaining:Math.max(z-i,0),freeShippingProgress:Math.min(i/z*100,100)}},xr=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],j=[{id:"mercadopago",label:"Pagar ahora",detalle:"Tarjeta, débito o dinero en cuenta",icon:ga,online:!0},{id:"efectivo",label:"Efectivo al recibir",detalle:"Le pagás al repartidor",icon:ua,online:!1},{id:"transferencia",label:"Transferencia",detalle:"Coordinás con el comercio",icon:ba,online:!1}],$r=[{label:"Precio final",icon:ha},{label:"Seguí tu pedido",icon:S}],Ce=["Delivery GO","Entrega comercio","Sin retiro"];function Ir(){var te;const e=sa(),[i,n]=u.useState(null),[s,l]=u.useState(!1),[g,d]=u.useState(null),{direcciones:m,recargar:ze}=Ge(),[Me,Y]=u.useState(null),[M,Ie]=u.useState(Ce[0]),[b,I]=u.useState("cualquiera"),f=u.useMemo(()=>wa(e.filter(o=>o.available)),[e]),P=he(f,"moto"),Z=he(f,"auto"),T={cualquiera:1,auto:V(f,"auto"),fraccionar:Math.max(2,V(f,"moto"))},E=T[b],[y,Pe]=u.useState(j[0].id),c=m.find(o=>o.id===Me)??m.find(o=>o.primary)??m[0]??null,[Te,q]=u.useState(!1),L=ta(),J=u.useMemo(()=>fr(e),[e]),{subtotal:Ee,deliveryFee:$,total:qe,totalUnits:ee,unavailableItems:ae,deliveryWindow:Le,freeShippingRemaining:A,freeShippingProgress:Ae}=u.useMemo(()=>yr(e),[e]),re=$*E,Fe=qe-$+re,oe=ca,Re=async()=>{var ie,ne;if(s)return;if(de()&&!c){d("Elegí una dirección de entrega antes de confirmar.");return}l(!0),d(null);const o=e.filter(p=>p.available);if(!de()||o.some(p=>!p.storeId)){ja(e),pe(),L("/pedidos");return}const t=new Map;for(const p of o){const x=t.get(p.storeId)??[];x.push(p),t.set(p.storeId,x)}const Oe=((ie=j.find(p=>p.id===y))==null?void 0:ie.online)??!1;try{const p=[];for(const[x,De]of t){const{id:Be}=await ra.crear({comercioId:x,direccionId:c==null?void 0:c.id,direccionTexto:c==null?void 0:c.address,metodoPago:`${((ne=j.find(v=>v.id===y))==null?void 0:ne.label)??y} · ${M}`,preferenciaEnvio:b,items:De.map(v=>({productoId:v.id,escalon:v.quantity}))});p.push(Be)}if(pe(),Oe&&p[0])try{const{url:x}=await oa.iniciar(p[0]);window.location.href=x;return}catch{L("/pedidos?pago=pendiente");return}L("/pedidos")}catch(p){d(p instanceof Error?p.message:"No pudimos confirmar el pedido.")}finally{l(!1)}},He=o=>{da(o),n(null)};return J.length===0?a.jsx(se,{showSearch:!1,children:a.jsx(N,{children:a.jsx(F,{children:a.jsx(Ve,{icon:le,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(se,{showSearch:!1,children:[a.jsxs(ka,{children:[a.jsx(N,{children:a.jsx(F,{children:a.jsx(Sa,{children:a.jsx(O,{children:a.jsxs(Ta,{children:[a.jsxs(Ea,{children:[a.jsx(qa,{children:a.jsx(We,{children:"Carrito"})}),a.jsxs(Ha,{children:[a.jsxs(w,{"data-tone":"brand",children:[a.jsx(le,{size:14,"aria-hidden":"true"})," ",ee," ",ee===1?"producto":"productos"]}),a.jsxs(w,{"data-tone":ae>0?"warning":"success",children:[a.jsx(ma,{size:14,"aria-hidden":"true"})," ",ae," sin stock"]}),a.jsxs(w,{children:[a.jsx(S,{size:14,"aria-hidden":"true"})," ",Le]})]})]}),a.jsx(La,{"aria-label":"Progreso de compra",children:xr.map((o,t)=>a.jsxs(Aa,{"data-state":o.state,children:[a.jsx(Fa,{"data-state":o.state,children:t+1}),a.jsx(Ra,{children:o.label})]},o.label))})]})})})})}),a.jsx(N,{children:a.jsx(F,{children:a.jsxs(Oa,{children:[a.jsx(D,{children:J.map(o=>a.jsx(Da,{children:a.jsxs(O,{children:[a.jsxs(Ba,{children:[a.jsxs(be,{children:[a.jsx(fe,{children:o.store}),a.jsxs(ye,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(Na,{children:[a.jsx(S,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(Ua,{children:o.items.map(t=>a.jsxs(Qa,{children:[a.jsx(Ga,{children:a.jsx(Va,{src:Ke(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(Wa,{children:[a.jsxs(Ka,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(_a,{children:t.product}),a.jsx(_e,{children:t.store})]}),a.jsxs(gr,{children:[a.jsx(Xa,{children:t.available?h(t.subtotal):"—"}),a.jsx(ur,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:a.jsx(Xe,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(Ya,{children:[a.jsxs(hr,{children:[a.jsx(ve,{type:"button",onClick:()=>oe(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(la,{size:14,"aria-hidden":"true"})}),a.jsx(mr,{"aria-live":"polite",children:t.available?ia(t.saleUnit,t.quantity):"0 unid."}),a.jsx(ve,{type:"button",onClick:()=>oe(t.id,1),disabled:!t.available||t.quantity>=na(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(ce,{size:14,"aria-hidden":"true"})})]}),a.jsx(Za,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(Ja,{children:[a.jsxs(xe,{children:[a.jsx(S,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(xe,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx($e,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx($e,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),a.jsx(er,{children:a.jsx(O,{children:a.jsxs(ar,{children:[a.jsx(C,{children:"Resumen"}),a.jsxs(rr,{children:[a.jsxs(or,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:A>0?`${h(A)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(ir,{children:a.jsx(nr,{$value:Ae})}),a.jsxs(tr,{children:["Umbral estimado ",h(z)," ·"," ",A>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(sr,{children:[a.jsxs(k,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:h(Ee)})]}),a.jsxs(k,{children:[a.jsxs("span",{children:["Envío estimado",E>1?` · ${E} entregas`:""]}),a.jsx("span",{children:h(re)})]}),a.jsxs(k,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:h(ke)})]}),a.jsxs(k,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(Ye,{children:h(Fe)})]})]}),a.jsx(lr,{children:$r.map(o=>{const t=o.icon;return a.jsxs(cr,{children:[a.jsx(t,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:o.label})]},o.label)})}),a.jsxs(B,{children:[a.jsxs("div",{children:[a.jsx(C,{children:"Dirección"}),a.jsx(R,{children:"Elegí dónde recibir"})]}),a.jsxs(D,{children:[m.map(o=>a.jsx(Ma,{type:"button",onClick:()=>Y(o.id),"data-elegida":(c==null?void 0:c.id)===o.id,"aria-pressed":(c==null?void 0:c.id)===o.id,children:a.jsx(za,{children:a.jsxs(Ia,{children:[a.jsxs(be,{children:[a.jsx(fe,{children:o.label}),a.jsx(ye,{children:o.address})]}),a.jsx(w,{"data-tone":o.primary?"brand":"success",children:(c==null?void 0:c.id)===o.id?"Elegida":o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(Pa,{type:"button",onClick:()=>q(!0),children:[a.jsx(ce,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(B,{children:[a.jsxs("div",{children:[a.jsx(C,{children:"Entrega"}),a.jsx(R,{children:"Cómo llega el pedido"})]}),a.jsx(je,{children:Ce.map(o=>a.jsx(me,{type:"button",onClick:()=>Ie(o),"data-elegido":M===o,"aria-pressed":M===o,children:o},o))}),f>0&&!P?a.jsxs(br,{children:[a.jsx(fa,{size:14,"aria-hidden":"true"}),a.jsxs("span",{children:["Lo que llevás ocupa unos ",f," litros: no entra en la caja de una moto."," ",Z?"Va a esperar un repartidor en auto, o llegar en varias entregas.":"Va a llegar en varias entregas."]})]}):null,a.jsxs(D,{children:[a.jsxs(U,{"data-elegida":b==="cualquiera",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="cualquiera",onChange:()=>I("cualquiera")}),a.jsxs(Q,{children:[a.jsx("strong",{children:"Como venga"}),a.jsx("span",{children:P?"Lo toma el primero que pase, en moto o en auto.":"Lo toma quien pueda llevarlo. Puede tardar un poco más."})]}),a.jsx(G,{children:h($)})]}),!P&&Z?a.jsxs(U,{"data-elegida":b==="auto",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="auto",onChange:()=>I("auto")}),a.jsxs(Q,{children:[a.jsx("strong",{children:"Todo junto, en auto"}),a.jsx("span",{children:"Esperás a que lo tome alguien en auto y te llega completo."})]}),a.jsx(G,{children:h($)})]}):null,e.filter(o=>o.available).length>1?a.jsxs(U,{"data-elegida":b==="fraccionar",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="fraccionar",onChange:()=>I("fraccionar")}),a.jsxs(Q,{children:[a.jsx("strong",{children:"Fraccionar para recibir antes"}),a.jsxs("span",{children:["Se parte en ",T.fraccionar," entregas que pueden tomar repartidores distintos. Pagás un envío por cada una."]})]}),a.jsx(G,{children:h($*T.fraccionar)})]}):null]})]}),a.jsxs(B,{children:[a.jsxs("div",{children:[a.jsx(C,{children:"Pago"}),a.jsx(R,{children:"Elegí el medio de pago"})]}),a.jsx(je,{children:j.map(o=>{const t=o.icon;return a.jsxs(me,{type:"button",onClick:()=>Pe(o.id),"data-elegido":y===o.id,"aria-pressed":y===o.id,title:o.detalle,children:[a.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.id)})})]}),a.jsxs(pr,{children:[a.jsx(Ze,{as:"button",type:"button",onClick:()=>void Re(),disabled:s,children:s?"Confirmando…":(te=j.find(o=>o.id===y))!=null&&te.online?"Confirmar y pagar":"Confirmar pedido"}),a.jsx(Je,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(pa,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>i&&He(i)}),a.jsx(ea,{open:Te,currentId:(c==null?void 0:c.id)??"",startOnNew:!0,onClose:()=>q(!1),onSelect:o=>{Y(o),q(!1),ze()}})]})}export{Ir as CartScreen};
