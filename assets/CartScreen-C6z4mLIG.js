import{c as T,Y as he,q as r,Z as ue,d as C,e as te,aj as L,ak as H,V as me,j as a,M as Q,S,E as be,a7 as G,al as xe,am as j,D as ye,a as $e,H as g,X as fe,I as U,an as y,ao as je,C as z,ap as $,ae as we,af as Ce,aq as ve,ar as ke,h as Se,ah as ze}from"./index-B_prQB2D.js";import{r as h,u as Ie}from"./react-D_B_6qYb.js";import{s as Me,m as Pe}from"./saleUnits-CLP-TCsg.js";import{u as Ee,M as Te,c as Le,b as V,r as He}from"./cartStore-5Q08p6sV.js";import{C as qe}from"./ConfirmDialog-CM8a18OP.js";import{S as Ae}from"./shield-check-jtluiSqI.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=T("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=T("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=T("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),Be=new Set;let Y=[...he],I=1249;const De=()=>Be.forEach(e=>e()),Oe=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function Ne(e){const d=e.filter(s=>s.available);if(d.length===0)return[];const i=new Map;d.forEach(s=>{const p=i.get(s.store)??[];p.push(s),i.set(s.store,p)});const n=[];return i.forEach((s,p)=>{I+=1,n.push({id:`ord-${I}`,code:`#${I}`,store:p,storeId:s[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:s[0].categoryId,total:s.reduce((l,m)=>l+m.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${s[0].eta}`,date:Oe(),itemCount:s.length,items:s.map(l=>({productId:l.id,quantity:l.quantity+1}))})}),Y=[...n,...Y],De(),n}const Qe=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ge=r(C)`
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
`,M=r(te)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Ue=r(te)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Ve=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,We=r.button`
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
`,Ye=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ke=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Xe=r.div`
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
    ${L};
    ${H};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Ze=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Je=r.div`
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
`,_e=r.span`
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
`,K=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ta=r(C)`
  overflow: hidden;
`,oa=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,X=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Z=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,J=r.p`
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
  ${L};
  ${H};
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
`,da=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,la=r.img`
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
`,ee=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,xa=r(C)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,ya=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const $a=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,fa=r.div`
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
`,P=r.div`
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
`,ae=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,za=me`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ia=r.div`
  ${za}
`,E=r(ue)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Ma=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Pa=r.button`
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

  ${L};
  ${H};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Ea=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,re=r.button`
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
`,w=15e3,oe=200,ie=e=>{const d=e.match(/\d+/);return Number((d==null?void 0:d[0])??0)},La=(e=ke)=>{const d=new Map;return e.forEach(i=>{const n=d.get(i.store);if(n){n.items.push(i),n.itemCount+=i.quantity,n.subtotal+=i.subtotal,n.availableCount+=i.available?1:0,n.unavailableCount+=i.available?0:1;return}d.set(i.store,{store:i.store,items:[i],itemCount:i.quantity,subtotal:i.subtotal,etaLabel:i.eta,availableCount:i.available?1:0,unavailableCount:i.available?0:1})}),[...d.values()].map(i=>{const n=i.items.map(l=>ie(l.eta)).filter(Boolean),s=n.length?Math.min(...n):0,p=n.length?Math.max(...n):0;return{...i,etaLabel:n.length<=1||s===p?`${s||0} min`:`${s}–${p} min`}})},Ha=e=>{const d=e.reduce((l,m)=>l+m.subtotal,0),i=d>=w?0:1200,n=e.map(l=>ie(l.eta)).filter(Boolean),s=n.length?Math.min(...n):0,p=n.length?Math.max(...n):0;return{subtotal:d,deliveryFee:i,total:d+i+oe,totalUnits:e.filter(l=>l.available).length,unavailableItems:e.filter(l=>!l.available).length,deliveryWindow:n.length?s===p?`${s} min`:`${s}–${p} min`:"Pendiente",freeShippingRemaining:Math.max(w-d,0),freeShippingProgress:Math.min(d/w*100,100)}},qa=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],Aa=[{label:"Crédito",icon:W},{label:"Débito",icon:W},{label:"Transferencia",icon:Fe}],Ra=[{label:"Precio final",icon:Ae},{label:"Seguí tu pedido",icon:j}],Fa=["Delivery GO","Entrega comercio","Sin retiro"];function Ua(){var D;const e=Ee(),[d,i]=h.useState(null),[n,s]=h.useState(!1),[p,l]=h.useState(null),[m,v]=h.useState(!1),q=Ie(),A=h.useMemo(()=>La(e),[e]),{subtotal:ne,deliveryFee:se,total:de,totalUnits:R,unavailableItems:F,deliveryWindow:le,freeShippingRemaining:k,freeShippingProgress:ce}=h.useMemo(()=>Ha(e),[e]),B=Le,pe=async()=>{var O,N;if(n)return;s(!0),l(null);const o=e.filter(c=>c.available);if(!Se()||o.some(c=>!c.storeId)){Ne(e),V(),q("/pedidos");return}const t=new Map;for(const c of o){const b=t.get(c.storeId)??[];b.push(c),t.set(c.storeId,b)}try{for(const[c,b]of t)await ze.crear({comercioId:c,direccionTexto:((O=$.find(x=>x.primary))==null?void 0:O.address)??((N=$[0])==null?void 0:N.address),items:b.map(x=>({productoId:x.id,escalon:x.quantity}))});V(),q("/pedidos")}catch(c){l(c instanceof Error?c.message:"No pudimos confirmar el pedido.")}finally{s(!1)}},ge=o=>{He(o),i(null)};return A.length===0?a.jsx(Q,{showSearch:!1,children:a.jsx(E,{children:a.jsx(S,{children:a.jsx(be,{icon:G,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(Q,{showSearch:!1,children:[a.jsxs(Qe,{children:[a.jsx(E,{children:a.jsx(S,{children:a.jsx(Ge,{children:a.jsx(M,{children:a.jsxs(Ye,{children:[a.jsxs(Ke,{children:[a.jsx(Xe,{children:a.jsx(xe,{children:"Carrito"})}),a.jsxs(aa,{children:[a.jsxs(u,{"data-tone":"brand",children:[a.jsx(G,{size:14,"aria-hidden":"true"})," ",R," ",R===1?"producto":"productos"]}),a.jsxs(u,{"data-tone":F>0?"warning":"success",children:[a.jsx(Re,{size:14,"aria-hidden":"true"})," ",F," sin stock"]}),a.jsxs(u,{children:[a.jsx(j,{size:14,"aria-hidden":"true"})," ",le]})]})]}),a.jsx(Ze,{"aria-label":"Progreso de compra",children:qa.map((o,t)=>a.jsxs(Je,{"data-state":o.state,children:[a.jsx(_e,{"data-state":o.state,children:t+1}),a.jsx(ea,{children:o.label})]},o.label))})]})})})})}),a.jsx(E,{children:a.jsx(S,{children:a.jsxs(ra,{children:[a.jsx(K,{children:A.map(o=>a.jsx(ta,{children:a.jsxs(M,{children:[a.jsxs(oa,{children:[a.jsxs(X,{children:[a.jsx(Z,{children:o.store}),a.jsxs(J,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(ia,{children:[a.jsx(j,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(na,{children:o.items.map(t=>a.jsxs(sa,{children:[a.jsx(da,{children:a.jsx(la,{src:ye(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(ca,{children:[a.jsxs(pa,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(ga,{children:t.product}),a.jsx($e,{children:t.store})]}),a.jsxs(Ma,{children:[a.jsx(ha,{children:t.available?g(t.subtotal):"—"}),a.jsx(Pa,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>i(t.id),children:a.jsx(fe,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(ua,{children:[a.jsxs(Ea,{children:[a.jsx(re,{type:"button",onClick:()=>B(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(Te,{size:14,"aria-hidden":"true"})}),a.jsx(Ta,{"aria-live":"polite",children:t.available?Me(t.saleUnit,t.quantity):"0 unid."}),a.jsx(re,{type:"button",onClick:()=>B(t.id,1),disabled:!t.available||t.quantity>=Pe(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(U,{size:14,"aria-hidden":"true"})})]}),a.jsx(ma,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(ba,{children:[a.jsxs(_,{children:[a.jsx(j,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(_,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(ee,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(ee,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),a.jsx(xa,{children:a.jsx(M,{children:a.jsxs(ya,{children:[a.jsx(y,{children:"Resumen"}),a.jsxs($a,{children:[a.jsxs(fa,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:k>0?`${g(k)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(wa,{children:a.jsx(Ca,{$value:ce})}),a.jsxs(ja,{children:["Umbral estimado ",g(w)," ·"," ",k>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(va,{children:[a.jsxs(f,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:g(ne)})]}),a.jsxs(f,{children:[a.jsx("span",{children:"Envío estimado"}),a.jsx("span",{children:g(se)})]}),a.jsxs(f,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:g(oe)})]}),a.jsxs(f,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(je,{children:g(de)})]})]}),a.jsx(ka,{children:Ra.map(o=>{const t=o.icon;return a.jsxs(Sa,{children:[a.jsx(t,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:o.label})]},o.label)})}),a.jsxs(P,{children:[a.jsxs("div",{children:[a.jsx(y,{children:"Dirección"}),a.jsx(z,{children:"Elegí dónde recibir"})]}),a.jsxs(K,{children:[$.map(o=>a.jsx(C,{children:a.jsx(Ue,{children:a.jsxs(Ve,{children:[a.jsxs(X,{children:[a.jsx(Z,{children:o.label}),a.jsx(J,{children:o.address})]}),a.jsx(u,{"data-tone":o.primary?"brand":"success",children:o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(We,{type:"button",onClick:()=>v(!0),children:[a.jsx(U,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(P,{children:[a.jsxs("div",{children:[a.jsx(y,{children:"Entrega"}),a.jsx(z,{children:"Cómo llega el pedido"})]}),a.jsx(ae,{children:Fa.map(o=>a.jsx(u,{"data-tone":"brand",children:o},o))})]}),a.jsxs(P,{children:[a.jsxs("div",{children:[a.jsx(y,{children:"Pago"}),a.jsx(z,{children:"Elegí el medio de pago"})]}),a.jsx(ae,{children:Aa.map(o=>{const t=o.icon;return a.jsxs(u,{"data-tone":"brand",children:[a.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.label)})})]}),a.jsxs(Ia,{children:[a.jsx(we,{as:"button",type:"button",onClick:()=>void pe(),disabled:n,children:n?"Confirmando…":"Confirmar pedido"}),a.jsx(Ce,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(qe,{open:d!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>i(null),onConfirm:()=>d&&ge(d)}),a.jsx(ve,{open:m,currentId:((D=$[0])==null?void 0:D.id)??"",startOnNew:!0,onClose:()=>v(!1),onSelect:()=>v(!1)})]})}export{Ua as CartScreen};
