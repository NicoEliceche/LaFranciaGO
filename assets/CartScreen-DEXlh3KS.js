import{c as T,q as r,W as pe,d as C,e as ae,ag as E,ah as L,R as ge,j as a,M as G,S,E as he,a5 as N,ai as ue,aj as f,A as me,a as xe,D as p,X as be,G as Q,ak as b,al as ye,C as z,am as y,ac as $e,ad as fe,an as je,ao as Ce,h as we,ap as ve}from"./index-DmRIvc-c.js";import{r as h,u as ke}from"./react-D_B_6qYb.js";import{s as Se,m as ze}from"./saleUnits-CLP-TCsg.js";import{p as Me}from"./ordersStore-BUUkuNGC.js";import{u as Ie,M as Pe,c as Te,b as U,r as Ee}from"./cartStore-BmhK6X58.js";import{C as Le}from"./ConfirmDialog-RFHIzWBD.js";import{S as Ae}from"./shield-check-DB50q4uR.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=T("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=T("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=T("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),Fe=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,qe=r(C)`
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
`,M=r(ae)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Be=r(ae)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Oe=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,De=r.button`
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
`,Ge=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ne=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Qe=r.div`
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
    ${E};
    ${L};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Ue=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,We=r.div`
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
`,Ve=r.span`
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
`,Ke=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Xe=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ye=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,V=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Je=r(C)`
  overflow: hidden;
`,Ze=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,K=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,X=r.h2`
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
`,_e=r.span`
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
  ${E};
  ${L};
`,ea=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,aa=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ra=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,ta=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const ia=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,oa=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,na=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,sa=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,da=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,la=r.span`
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
`,ca=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,J=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,Z=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,pa=r(C)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,ga=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const ha=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,ua=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,ma=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,xa=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,ba=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,I=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,ya=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,$=r.div`
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
`,$a=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,fa=r.div`
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
`,_=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,ja=ge`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ca=r.div`
  ${ja}
`,P=r(pe)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,wa=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,va=r.button`
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

  ${E};
  ${L};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,ka=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,ee=r.button`
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
`,Sa=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,j=15e3,re=200,te=e=>{const s=e.match(/\d+/);return Number((s==null?void 0:s[0])??0)},za=(e=Ce)=>{const s=new Map;return e.forEach(o=>{const n=s.get(o.store);if(n){n.items.push(o),n.itemCount+=o.quantity,n.subtotal+=o.subtotal,n.availableCount+=o.available?1:0,n.unavailableCount+=o.available?0:1;return}s.set(o.store,{store:o.store,items:[o],itemCount:o.quantity,subtotal:o.subtotal,etaLabel:o.eta,availableCount:o.available?1:0,unavailableCount:o.available?0:1})}),[...s.values()].map(o=>{const n=o.items.map(d=>te(d.eta)).filter(Boolean),c=n.length?Math.min(...n):0,g=n.length?Math.max(...n):0;return{...o,etaLabel:n.length<=1||c===g?`${c||0} min`:`${c}–${g} min`}})},Ma=e=>{const s=e.reduce((d,w)=>d+w.subtotal,0),o=s>=j?0:1200,n=e.map(d=>te(d.eta)).filter(Boolean),c=n.length?Math.min(...n):0,g=n.length?Math.max(...n):0;return{subtotal:s,deliveryFee:o,total:s+o+re,totalUnits:e.filter(d=>d.available).length,unavailableItems:e.filter(d=>!d.available).length,deliveryWindow:n.length?c===g?`${c} min`:`${c}–${g} min`:"Pendiente",freeShippingRemaining:Math.max(j-s,0),freeShippingProgress:Math.min(s/j*100,100)}},Ia=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],Pa=[{label:"Crédito",icon:W},{label:"Débito",icon:W},{label:"Transferencia",icon:Re}],Ta=[{label:"Precio final",icon:Ae},{label:"Seguí tu pedido",icon:f}],Ea=["Delivery GO","Entrega comercio","Sin retiro"];function Oa(){var B;const e=Ie(),[s,o]=h.useState(null),[n,c]=h.useState(!1),[g,d]=h.useState(null),[w,v]=h.useState(!1),A=ke(),H=h.useMemo(()=>za(e),[e]),{subtotal:ie,deliveryFee:oe,total:ne,totalUnits:R,unavailableItems:F,deliveryWindow:se,freeShippingRemaining:k,freeShippingProgress:de}=h.useMemo(()=>Ma(e),[e]),q=Te,le=async()=>{var O,D;if(n)return;c(!0),d(null);const i=e.filter(l=>l.available);if(!we()||i.some(l=>!l.storeId)){Me(e),U(),A("/pedidos");return}const t=new Map;for(const l of i){const m=t.get(l.storeId)??[];m.push(l),t.set(l.storeId,m)}try{for(const[l,m]of t)await ve.crear({comercioId:l,direccionTexto:((O=y.find(x=>x.primary))==null?void 0:O.address)??((D=y[0])==null?void 0:D.address),items:m.map(x=>({productoId:x.id,escalon:x.quantity}))});U(),A("/pedidos")}catch(l){d(l instanceof Error?l.message:"No pudimos confirmar el pedido.")}finally{c(!1)}},ce=i=>{Ee(i),o(null)};return H.length===0?a.jsx(G,{showSearch:!1,children:a.jsx(P,{children:a.jsx(S,{children:a.jsx(he,{icon:N,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(G,{showSearch:!1,children:[a.jsxs(Fe,{children:[a.jsx(P,{children:a.jsx(S,{children:a.jsx(qe,{children:a.jsx(M,{children:a.jsxs(Ge,{children:[a.jsxs(Ne,{children:[a.jsx(Qe,{children:a.jsx(ue,{children:"Carrito"})}),a.jsxs(Xe,{children:[a.jsxs(u,{"data-tone":"brand",children:[a.jsx(N,{size:14,"aria-hidden":"true"})," ",R," ",R===1?"producto":"productos"]}),a.jsxs(u,{"data-tone":F>0?"warning":"success",children:[a.jsx(He,{size:14,"aria-hidden":"true"})," ",F," sin stock"]}),a.jsxs(u,{children:[a.jsx(f,{size:14,"aria-hidden":"true"})," ",se]})]})]}),a.jsx(Ue,{"aria-label":"Progreso de compra",children:Ia.map((i,t)=>a.jsxs(We,{"data-state":i.state,children:[a.jsx(Ve,{"data-state":i.state,children:t+1}),a.jsx(Ke,{children:i.label})]},i.label))})]})})})})}),a.jsx(P,{children:a.jsx(S,{children:a.jsxs(Ye,{children:[a.jsx(V,{children:H.map(i=>a.jsx(Je,{children:a.jsxs(M,{children:[a.jsxs(Ze,{children:[a.jsxs(K,{children:[a.jsx(X,{children:i.store}),a.jsxs(Y,{children:[i.itemCount," ítems · ",i.unavailableCount," pendientes"]})]}),a.jsxs(_e,{children:[a.jsx(f,{size:14,"aria-hidden":"true"})," ",i.etaLabel]})]}),a.jsx(ea,{children:i.items.map(t=>a.jsxs(aa,{children:[a.jsx(ra,{children:a.jsx(ta,{src:me(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(ia,{children:[a.jsxs(oa,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(na,{children:t.product}),a.jsx(xe,{children:t.store})]}),a.jsxs(wa,{children:[a.jsx(sa,{children:t.available?p(t.subtotal):"—"}),a.jsx(va,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>o(t.id),children:a.jsx(be,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(da,{children:[a.jsxs(ka,{children:[a.jsx(ee,{type:"button",onClick:()=>q(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(Pe,{size:14,"aria-hidden":"true"})}),a.jsx(Sa,{"aria-live":"polite",children:t.available?Se(t.saleUnit,t.quantity):"0 unid."}),a.jsx(ee,{type:"button",onClick:()=>q(t.id,1),disabled:!t.available||t.quantity>=ze(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(Q,{size:14,"aria-hidden":"true"})})]}),a.jsx(la,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(ca,{children:[a.jsxs(J,{children:[a.jsx(f,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(J,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(Z,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(Z,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},i.store))}),a.jsx(pa,{children:a.jsx(M,{children:a.jsxs(ga,{children:[a.jsx(b,{children:"Resumen"}),a.jsxs(ha,{children:[a.jsxs(ua,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:k>0?`${p(k)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(xa,{children:a.jsx(ba,{$value:de})}),a.jsxs(ma,{children:["Umbral estimado ",p(j)," ·"," ",k>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(ya,{children:[a.jsxs($,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:p(ie)})]}),a.jsxs($,{children:[a.jsx("span",{children:"Envío estimado"}),a.jsx("span",{children:p(oe)})]}),a.jsxs($,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:p(re)})]}),a.jsxs($,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(ye,{children:p(ne)})]})]}),a.jsx($a,{children:Ta.map(i=>{const t=i.icon;return a.jsxs(fa,{children:[a.jsx(t,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:i.label})]},i.label)})}),a.jsxs(I,{children:[a.jsxs("div",{children:[a.jsx(b,{children:"Dirección"}),a.jsx(z,{children:"Elegí dónde recibir"})]}),a.jsxs(V,{children:[y.map(i=>a.jsx(C,{children:a.jsx(Be,{children:a.jsxs(Oe,{children:[a.jsxs(K,{children:[a.jsx(X,{children:i.label}),a.jsx(Y,{children:i.address})]}),a.jsx(u,{"data-tone":i.primary?"brand":"success",children:i.primary?"Principal":"Guardada"})]})})},i.id)),a.jsxs(De,{type:"button",onClick:()=>v(!0),children:[a.jsx(Q,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(I,{children:[a.jsxs("div",{children:[a.jsx(b,{children:"Entrega"}),a.jsx(z,{children:"Cómo llega el pedido"})]}),a.jsx(_,{children:Ea.map(i=>a.jsx(u,{"data-tone":"brand",children:i},i))})]}),a.jsxs(I,{children:[a.jsxs("div",{children:[a.jsx(b,{children:"Pago"}),a.jsx(z,{children:"Elegí el medio de pago"})]}),a.jsx(_,{children:Pa.map(i=>{const t=i.icon;return a.jsxs(u,{"data-tone":"brand",children:[a.jsx(t,{size:14,"aria-hidden":"true"}),i.label]},i.label)})})]}),a.jsxs(Ca,{children:[a.jsx($e,{as:"button",type:"button",onClick:()=>void le(),disabled:n,children:n?"Confirmando…":"Confirmar pedido"}),a.jsx(fe,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(Le,{open:s!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>o(null),onConfirm:()=>s&&ce(s)}),a.jsx(je,{open:w,currentId:((B=y[0])==null?void 0:B.id)??"",startOnNew:!0,onClose:()=>v(!1),onSelect:()=>v(!1)})]})}export{Oa as CartScreen};
