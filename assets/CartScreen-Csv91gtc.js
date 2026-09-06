import{c as I,af as b,q as r,V as de,d as f,e as _,ag as P,ah as T,Q as ce,j as a,M as q,S as C,E as pe,a4 as O,ai as ge,aj as y,A as he,a as ue,D as g,X as me,G as B,ak as m,al as xe,C as v,am as G,ab as be,ac as ye,an as $e}from"./index-BzCkDV42.js";import{r as u,u as fe}from"./react-D_B_6qYb.js";import{m as Z,a as je,s as we}from"./saleUnits-CLP-TCsg.js";import{p as Ce}from"./ordersStore-BCCYJcmQ.js";import{C as ve}from"./ConfirmDialog-pno2LIs_.js";import{M as ke}from"./minus-CbM6Y698.js";import{S as Se}from"./shield-check-DmV-eI-F.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=I("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=I("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=I("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),ee="lafranciago:carrito",M=new Set;let c=[],Q=!1;const E=()=>M.forEach(e=>e()),A=()=>{try{window.sessionStorage.setItem(ee,JSON.stringify(c))}catch{}},Ie=()=>{try{const e=window.sessionStorage.getItem(ee);if(!e)return[...b];const n=JSON.parse(e);return Array.isArray(n)?n:[...b]}catch{return[...b]}},Pe=()=>{Q||(Q=!0,c=Ie())};function Te(e){c=c.filter(n=>n.id!==e),A(),E()}function Ee(e,n){c=c.map(t=>{if(t.id!==e||!t.available)return t;const s=Math.min(Math.max(0,t.quantity+n),Z(t.saleUnit));return{...t,quantity:s,subtotal:Math.round(t.price*je(t.saleUnit,s))}}),A(),E()}function Ae(){c=[],A(),E()}function Le(){const[e,n]=u.useState(c);return u.useEffect(()=>{Pe(),n(c);const t=()=>n(c);return M.add(t),()=>{M.delete(t)}},[]),e}const He=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Re=r(f)`
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
`,k=r(_)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Fe=r(_)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,qe=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Oe=r.button`
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
`,Be=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ge=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ne=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const h=r.span`
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
    ${T};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Qe=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Ue=r.div`
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
`,De=r.span`
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
`,Ve=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,We=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Je=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,U=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ke=r(f)`
  overflow: hidden;
`,Ye=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,D=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,V=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,W=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Xe=r.span`
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
  ${T};
`,_e=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,Ze=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ea=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,aa=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const ra=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,ta=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,ia=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,oa=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,na=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,sa=r.span`
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
`,la=r.div`
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
`,K=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,da=r(f)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,ca=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const pa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,ga=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,ha=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,ua=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,ma=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,S=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,xa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,x=r.div`
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
`,ba=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,ya=r.div`
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
`,Y=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,$a=ce`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,fa=r.div`
  ${$a}
`,z=r(de)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,ja=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,wa=r.button`
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
  ${T};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Ca=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,X=r.button`
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
`,va=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,$=15e3,ae=200,re=e=>{const n=e.match(/\d+/);return Number((n==null?void 0:n[0])??0)},ka=(e=b)=>{const n=new Map;return e.forEach(t=>{const s=n.get(t.store);if(s){s.items.push(t),s.itemCount+=t.quantity,s.subtotal+=t.subtotal,s.availableCount+=t.available?1:0,s.unavailableCount+=t.available?0:1;return}n.set(t.store,{store:t.store,items:[t],itemCount:t.quantity,subtotal:t.subtotal,etaLabel:t.eta,availableCount:t.available?1:0,unavailableCount:t.available?0:1})}),[...n.values()].map(t=>{const s=t.items.map(l=>re(l.eta)).filter(Boolean),d=s.length?Math.min(...s):0,p=s.length?Math.max(...s):0;return{...t,etaLabel:s.length<=1||d===p?`${d||0} min`:`${d}–${p} min`}})},Sa=e=>{const n=e.reduce((l,j)=>l+j.subtotal,0),t=n>=$?0:1200,s=e.map(l=>re(l.eta)).filter(Boolean),d=s.length?Math.min(...s):0,p=s.length?Math.max(...s):0;return{subtotal:n,deliveryFee:t,total:n+t+ae,totalUnits:e.filter(l=>l.available).length,unavailableItems:e.filter(l=>!l.available).length,deliveryWindow:s.length?d===p?`${d} min`:`${d}–${p} min`:"Pendiente",freeShippingRemaining:Math.max($-n,0),freeShippingProgress:Math.min(n/$*100,100)}},za=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],Ma=[{label:"Crédito",icon:N},{label:"Débito",icon:N},{label:"Transferencia",icon:Me}],Ia=[{label:"Precio final",icon:Se},{label:"Seguí tu pedido",icon:y}],Pa=["Delivery GO","Entrega comercio","Sin retiro"];function qa(){var F;const e=Le(),[n,t]=u.useState(null),[s,d]=u.useState(!1),p=fe(),l=u.useMemo(()=>ka(e),[e]),{subtotal:j,deliveryFee:te,total:ie,totalUnits:L,unavailableItems:H,deliveryWindow:oe,freeShippingRemaining:w,freeShippingProgress:ne}=u.useMemo(()=>Sa(e),[e]),R=Ee,se=()=>{Ce(e),Ae(),p("/pedidos")},le=o=>{Te(o),t(null)};return l.length===0?a.jsx(q,{showSearch:!1,children:a.jsx(z,{children:a.jsx(C,{children:a.jsx(pe,{icon:O,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(q,{showSearch:!1,children:[a.jsxs(He,{children:[a.jsx(z,{children:a.jsx(C,{children:a.jsx(Re,{children:a.jsx(k,{children:a.jsxs(Be,{children:[a.jsxs(Ge,{children:[a.jsx(Ne,{children:a.jsx(ge,{children:"Carrito"})}),a.jsxs(We,{children:[a.jsxs(h,{"data-tone":"brand",children:[a.jsx(O,{size:14,"aria-hidden":"true"})," ",L," ",L===1?"producto":"productos"]}),a.jsxs(h,{"data-tone":H>0?"warning":"success",children:[a.jsx(ze,{size:14,"aria-hidden":"true"})," ",H," sin stock"]}),a.jsxs(h,{children:[a.jsx(y,{size:14,"aria-hidden":"true"})," ",oe]})]})]}),a.jsx(Qe,{"aria-label":"Progreso de compra",children:za.map((o,i)=>a.jsxs(Ue,{"data-state":o.state,children:[a.jsx(De,{"data-state":o.state,children:i+1}),a.jsx(Ve,{children:o.label})]},o.label))})]})})})})}),a.jsx(z,{children:a.jsx(C,{children:a.jsxs(Je,{children:[a.jsx(U,{children:l.map(o=>a.jsx(Ke,{children:a.jsxs(k,{children:[a.jsxs(Ye,{children:[a.jsxs(D,{children:[a.jsx(V,{children:o.store}),a.jsxs(W,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(Xe,{children:[a.jsx(y,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(_e,{children:o.items.map(i=>a.jsxs(Ze,{children:[a.jsx(ea,{children:a.jsx(aa,{src:he(i.categoryId),alt:i.product,loading:"lazy"})}),a.jsxs(ra,{children:[a.jsxs(ta,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(ia,{children:i.product}),a.jsx(ue,{children:i.store})]}),a.jsxs(ja,{children:[a.jsx(oa,{children:i.available?g(i.subtotal):"—"}),a.jsx(wa,{type:"button","aria-label":`Quitar ${i.product} del carrito`,onClick:()=>t(i.id),children:a.jsx(me,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(na,{children:[a.jsxs(Ca,{children:[a.jsx(X,{type:"button",onClick:()=>R(i.id,-1),disabled:!i.available||i.quantity<=0,"aria-label":`Quitar cantidad de ${i.product}`,children:a.jsx(ke,{size:14,"aria-hidden":"true"})}),a.jsx(va,{"aria-live":"polite",children:i.available?we(i.saleUnit,i.quantity):"0 unid."}),a.jsx(X,{type:"button",onClick:()=>R(i.id,1),disabled:!i.available||i.quantity>=Z(i.saleUnit),"aria-label":`Agregar cantidad de ${i.product}`,children:a.jsx(B,{size:14,"aria-hidden":"true"})})]}),a.jsx(sa,{"data-tone":i.statusTone,children:i.statusLabel})]}),a.jsxs(la,{children:[a.jsxs(J,{children:[a.jsx(y,{size:14,"aria-hidden":"true"}),i.eta]}),i.statusTone==="success"?a.jsx(J,{children:"Listo para sumar al pedido"}):i.statusTone==="warning"?a.jsx(K,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(K,{"data-tone":"danger",children:"Sin stock"})]})]})]},i.id))})]})},o.store))}),a.jsx(da,{children:a.jsx(k,{children:a.jsxs(ca,{children:[a.jsx(m,{children:"Resumen"}),a.jsxs(pa,{children:[a.jsxs(ga,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:w>0?`${g(w)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(ua,{children:a.jsx(ma,{$value:ne})}),a.jsxs(ha,{children:["Umbral estimado ",g($)," ·"," ",w>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(xa,{children:[a.jsxs(x,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:g(j)})]}),a.jsxs(x,{children:[a.jsx("span",{children:"Envío estimado"}),a.jsx("span",{children:g(te)})]}),a.jsxs(x,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:g(ae)})]}),a.jsxs(x,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(xe,{children:g(ie)})]})]}),a.jsx(ba,{children:Ia.map(o=>{const i=o.icon;return a.jsxs(ya,{children:[a.jsx(i,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:o.label})]},o.label)})}),a.jsxs(S,{children:[a.jsxs("div",{children:[a.jsx(m,{children:"Dirección"}),a.jsx(v,{children:"Elegí dónde recibir"})]}),a.jsxs(U,{children:[G.map(o=>a.jsx(f,{children:a.jsx(Fe,{children:a.jsxs(qe,{children:[a.jsxs(D,{children:[a.jsx(V,{children:o.label}),a.jsx(W,{children:o.address})]}),a.jsx(h,{"data-tone":o.primary?"brand":"success",children:o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(Oe,{type:"button",onClick:()=>d(!0),children:[a.jsx(B,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(S,{children:[a.jsxs("div",{children:[a.jsx(m,{children:"Entrega"}),a.jsx(v,{children:"Cómo llega el pedido"})]}),a.jsx(Y,{children:Pa.map(o=>a.jsx(h,{"data-tone":"brand",children:o},o))})]}),a.jsxs(S,{children:[a.jsxs("div",{children:[a.jsx(m,{children:"Pago"}),a.jsx(v,{children:"Elegí el medio de pago"})]}),a.jsx(Y,{children:Ma.map(o=>{const i=o.icon;return a.jsxs(h,{"data-tone":"brand",children:[a.jsx(i,{size:14,"aria-hidden":"true"}),o.label]},o.label)})})]}),a.jsxs(fa,{children:[a.jsx(be,{as:"button",type:"button",onClick:se,children:"Confirmar pedido"}),a.jsx(ye,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(ve,{open:n!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>t(null),onConfirm:()=>n&&le(n)}),a.jsx($e,{open:s,currentId:((F=G[0])==null?void 0:F.id)??"",startOnNew:!0,onClose:()=>d(!1),onSelect:()=>d(!1)})]})}export{qa as CartScreen};
