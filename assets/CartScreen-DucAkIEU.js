import{c as le,$ as ze,q as a,a0 as Ie,d as H,e as de,am as q,an as R,Z as Me,ao as Pe,j as r,M as W,S as M,E as Te,aa as V,ap as Le,aq as C,I as Ee,a as Ae,K as m,X as He,L as K,ar as $,as as qe,C as P,ah as Re,ai as Fe,at as Be,au as Oe,h as X,ak as De,av as Ne}from"./index-62H5_yJs.js";import{r as h,u as Qe}from"./react-D_B_6qYb.js";import{s as Ge,m as Ue}from"./saleUnits-CLP-TCsg.js";import{u as We,M as Ve,c as Ke,b as Y,r as Xe}from"./cartStore-CBDylFrY.js";import{C as Ye}from"./ConfirmDialog-COuDTAqS.js";import{C as Ze}from"./credit-card-DJkwhniA.js";import{W as Je}from"./wallet-CjHyraSz.js";import{S as _e}from"./shield-check-Dgw3ELFc.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=le("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=le("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]),ar=new Set;let Z=[...ze],T=1249;const tr=()=>ar.forEach(e=>e()),or=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function ir(e){const l=e.filter(s=>s.available);if(l.length===0)return[];const i=new Map;l.forEach(s=>{const g=i.get(s.store)??[];g.push(s),i.set(s.store,g)});const n=[];return i.forEach((s,g)=>{T+=1,n.push({id:`ord-${T}`,code:`#${T}`,store:g,storeId:s[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:s[0].categoryId,total:s.reduce((c,u)=>c+u.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${s[0].eta}`,date:or(),itemCount:s.length,items:s.map(c=>({productId:c.id,quantity:c.quantity+1}))})}),Z=[...n,...Z],tr(),n}const nr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,sr=a(H)`
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
`,L=a(de)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,lr=a(de)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,dr=a.button`
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
`,cr=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,pr=a.button`
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
`,gr=a.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,hr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,ur=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const J=a.button`
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
`,j=a.span`
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
    ${q};
    ${R};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,mr=a.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,br=a.div`
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
`,yr=a.span`
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
`,xr=a.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,fr=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,$r=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,_=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,jr=a(H)`
  overflow: hidden;
`,wr=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,ee=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,re=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,ae=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Cr=a.span`
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
  ${q};
  ${R};
`,vr=a.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,kr=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Sr=a.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,zr=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const Ir=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Mr=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pr=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Tr=a.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,Lr=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Er=a.span`
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
`,Ar=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,te=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,oe=a.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,Hr=a(H)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,qr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const Rr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,Fr=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,Br=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Or=a.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,Dr=a.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,E=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,Nr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,w=a.div`
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
`,Qr=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Gr=a.div`
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
`,ie=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ur=Me`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Wr=a.div`
  ${Ur}
`,A=a(Ie)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Vr=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Kr=a.button`
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

  ${q};
  ${R};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Xr=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,ne=a.button`
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
`,Yr=a.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,v=15e3,ce=200,pe=e=>{const l=e.match(/\d+/);return Number((l==null?void 0:l[0])??0)},Zr=(e=Oe)=>{const l=new Map;return e.forEach(i=>{const n=l.get(i.store);if(n){n.items.push(i),n.itemCount+=i.quantity,n.subtotal+=i.subtotal,n.availableCount+=i.available?1:0,n.unavailableCount+=i.available?0:1;return}l.set(i.store,{store:i.store,items:[i],itemCount:i.quantity,subtotal:i.subtotal,etaLabel:i.eta,availableCount:i.available?1:0,unavailableCount:i.available?0:1})}),[...l.values()].map(i=>{const n=i.items.map(c=>pe(c.eta)).filter(Boolean),s=n.length?Math.min(...n):0,g=n.length?Math.max(...n):0;return{...i,etaLabel:n.length<=1||s===g?`${s||0} min`:`${s}–${g} min`}})},Jr=e=>{const l=e.reduce((c,u)=>c+u.subtotal,0),i=l>=v?0:1200,n=e.map(c=>pe(c.eta)).filter(Boolean),s=n.length?Math.min(...n):0,g=n.length?Math.max(...n):0;return{subtotal:l,deliveryFee:i,total:l+i+ce,totalUnits:e.filter(c=>c.available).length,unavailableItems:e.filter(c=>!c.available).length,deliveryWindow:n.length?s===g?`${s} min`:`${s}–${g} min`:"Pendiente",freeShippingRemaining:Math.max(v-l,0),freeShippingProgress:Math.min(l/v*100,100)}},_r=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],x=[{id:"mercadopago",label:"Pagar ahora",detalle:"Tarjeta, débito o dinero en cuenta",icon:Ze,online:!0},{id:"efectivo",label:"Efectivo al recibir",detalle:"Le pagás al repartidor",icon:Je,online:!1},{id:"transferencia",label:"Transferencia",detalle:"Coordinás con el comercio",icon:rr,online:!1}],ea=[{label:"Precio final",icon:_e},{label:"Seguí tu pedido",icon:C}],se=["Delivery GO","Entrega comercio","Sin retiro"];function da(){var Q;const e=We(),[l,i]=h.useState(null),[n,s]=h.useState(!1),[g,c]=h.useState(null),{direcciones:u,recargar:ge}=Pe(),[he,F]=h.useState(null),[k,ue]=h.useState(se[0]),[b,me]=h.useState(x[0].id),d=u.find(t=>t.id===he)??u.find(t=>t.primary)??u[0]??null,[be,S]=h.useState(!1),z=Qe(),B=h.useMemo(()=>Zr(e),[e]),{subtotal:ye,deliveryFee:xe,total:fe,totalUnits:O,unavailableItems:D,deliveryWindow:$e,freeShippingRemaining:I,freeShippingProgress:je}=h.useMemo(()=>Jr(e),[e]),N=Ke,we=async()=>{var G,U;if(n)return;if(X()&&!d){c("Elegí una dirección de entrega antes de confirmar.");return}s(!0),c(null);const t=e.filter(p=>p.available);if(!X()||t.some(p=>!p.storeId)){ir(e),Y(),z("/pedidos");return}const o=new Map;for(const p of t){const y=o.get(p.storeId)??[];y.push(p),o.set(p.storeId,y)}const ve=((G=x.find(p=>p.id===b))==null?void 0:G.online)??!1;try{const p=[];for(const[y,ke]of o){const{id:Se}=await De.crear({comercioId:y,direccionId:d==null?void 0:d.id,direccionTexto:d==null?void 0:d.address,metodoPago:`${((U=x.find(f=>f.id===b))==null?void 0:U.label)??b} · ${k}`,items:ke.map(f=>({productoId:f.id,escalon:f.quantity}))});p.push(Se)}if(Y(),ve&&p[0])try{const{url:y}=await Ne.iniciar(p[0]);window.location.href=y;return}catch{z("/pedidos?pago=pendiente");return}z("/pedidos")}catch(p){c(p instanceof Error?p.message:"No pudimos confirmar el pedido.")}finally{s(!1)}},Ce=t=>{Xe(t),i(null)};return B.length===0?r.jsx(W,{showSearch:!1,children:r.jsx(A,{children:r.jsx(M,{children:r.jsx(Te,{icon:V,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):r.jsxs(W,{showSearch:!1,children:[r.jsxs(nr,{children:[r.jsx(A,{children:r.jsx(M,{children:r.jsx(sr,{children:r.jsx(L,{children:r.jsxs(gr,{children:[r.jsxs(hr,{children:[r.jsx(ur,{children:r.jsx(Le,{children:"Carrito"})}),r.jsxs(fr,{children:[r.jsxs(j,{"data-tone":"brand",children:[r.jsx(V,{size:14,"aria-hidden":"true"})," ",O," ",O===1?"producto":"productos"]}),r.jsxs(j,{"data-tone":D>0?"warning":"success",children:[r.jsx(er,{size:14,"aria-hidden":"true"})," ",D," sin stock"]}),r.jsxs(j,{children:[r.jsx(C,{size:14,"aria-hidden":"true"})," ",$e]})]})]}),r.jsx(mr,{"aria-label":"Progreso de compra",children:_r.map((t,o)=>r.jsxs(br,{"data-state":t.state,children:[r.jsx(yr,{"data-state":t.state,children:o+1}),r.jsx(xr,{children:t.label})]},t.label))})]})})})})}),r.jsx(A,{children:r.jsx(M,{children:r.jsxs($r,{children:[r.jsx(_,{children:B.map(t=>r.jsx(jr,{children:r.jsxs(L,{children:[r.jsxs(wr,{children:[r.jsxs(ee,{children:[r.jsx(re,{children:t.store}),r.jsxs(ae,{children:[t.itemCount," ítems · ",t.unavailableCount," pendientes"]})]}),r.jsxs(Cr,{children:[r.jsx(C,{size:14,"aria-hidden":"true"})," ",t.etaLabel]})]}),r.jsx(vr,{children:t.items.map(o=>r.jsxs(kr,{children:[r.jsx(Sr,{children:r.jsx(zr,{src:Ee(o.categoryId),alt:o.product,loading:"lazy"})}),r.jsxs(Ir,{children:[r.jsxs(Mr,{children:[r.jsxs("div",{style:{minWidth:0},children:[r.jsx(Pr,{children:o.product}),r.jsx(Ae,{children:o.store})]}),r.jsxs(Vr,{children:[r.jsx(Tr,{children:o.available?m(o.subtotal):"—"}),r.jsx(Kr,{type:"button","aria-label":`Quitar ${o.product} del carrito`,onClick:()=>i(o.id),children:r.jsx(He,{size:15,"aria-hidden":"true"})})]})]}),r.jsxs(Lr,{children:[r.jsxs(Xr,{children:[r.jsx(ne,{type:"button",onClick:()=>N(o.id,-1),disabled:!o.available||o.quantity<=0,"aria-label":`Quitar cantidad de ${o.product}`,children:r.jsx(Ve,{size:14,"aria-hidden":"true"})}),r.jsx(Yr,{"aria-live":"polite",children:o.available?Ge(o.saleUnit,o.quantity):"0 unid."}),r.jsx(ne,{type:"button",onClick:()=>N(o.id,1),disabled:!o.available||o.quantity>=Ue(o.saleUnit),"aria-label":`Agregar cantidad de ${o.product}`,children:r.jsx(K,{size:14,"aria-hidden":"true"})})]}),r.jsx(Er,{"data-tone":o.statusTone,children:o.statusLabel})]}),r.jsxs(Ar,{children:[r.jsxs(te,{children:[r.jsx(C,{size:14,"aria-hidden":"true"}),o.eta]}),o.statusTone==="success"?r.jsx(te,{children:"Listo para sumar al pedido"}):o.statusTone==="warning"?r.jsx(oe,{"data-tone":"warning",children:"Pocas unidades"}):r.jsx(oe,{"data-tone":"danger",children:"Sin stock"})]})]})]},o.id))})]})},t.store))}),r.jsx(Hr,{children:r.jsx(L,{children:r.jsxs(qr,{children:[r.jsx($,{children:"Resumen"}),r.jsxs(Rr,{children:[r.jsxs(Fr,{children:[r.jsx("span",{children:"Envío gratis"}),r.jsx("strong",{children:I>0?`${m(I)} faltan`:"Ya lo alcanzaste"})]}),r.jsx(Or,{children:r.jsx(Dr,{$value:je})}),r.jsxs(Br,{children:["Umbral estimado ",m(v)," ·"," ",I>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),r.jsxs(Nr,{children:[r.jsxs(w,{children:[r.jsx("span",{children:"Subtotal"}),r.jsx("span",{children:m(ye)})]}),r.jsxs(w,{children:[r.jsx("span",{children:"Envío estimado"}),r.jsx("span",{children:m(xe)})]}),r.jsxs(w,{children:[r.jsx("span",{children:"Cargo de servicio"}),r.jsx("span",{children:m(ce)})]}),r.jsxs(w,{"data-emphasis":"true",children:[r.jsx("strong",{children:"Total estimado"}),r.jsx(qe,{children:m(fe)})]})]}),r.jsx(Qr,{children:ea.map(t=>{const o=t.icon;return r.jsxs(Gr,{children:[r.jsx(o,{size:16,"aria-hidden":"true"}),r.jsx("span",{children:t.label})]},t.label)})}),r.jsxs(E,{children:[r.jsxs("div",{children:[r.jsx($,{children:"Dirección"}),r.jsx(P,{children:"Elegí dónde recibir"})]}),r.jsxs(_,{children:[u.map(t=>r.jsx(dr,{type:"button",onClick:()=>F(t.id),"data-elegida":(d==null?void 0:d.id)===t.id,"aria-pressed":(d==null?void 0:d.id)===t.id,children:r.jsx(lr,{children:r.jsxs(cr,{children:[r.jsxs(ee,{children:[r.jsx(re,{children:t.label}),r.jsx(ae,{children:t.address})]}),r.jsx(j,{"data-tone":t.primary?"brand":"success",children:(d==null?void 0:d.id)===t.id?"Elegida":t.primary?"Principal":"Guardada"})]})})},t.id)),r.jsxs(pr,{type:"button",onClick:()=>S(!0),children:[r.jsx(K,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),r.jsxs(E,{children:[r.jsxs("div",{children:[r.jsx($,{children:"Entrega"}),r.jsx(P,{children:"Cómo llega el pedido"})]}),r.jsx(ie,{children:se.map(t=>r.jsx(J,{type:"button",onClick:()=>ue(t),"data-elegido":k===t,"aria-pressed":k===t,children:t},t))})]}),r.jsxs(E,{children:[r.jsxs("div",{children:[r.jsx($,{children:"Pago"}),r.jsx(P,{children:"Elegí el medio de pago"})]}),r.jsx(ie,{children:x.map(t=>{const o=t.icon;return r.jsxs(J,{type:"button",onClick:()=>me(t.id),"data-elegido":b===t.id,"aria-pressed":b===t.id,title:t.detalle,children:[r.jsx(o,{size:14,"aria-hidden":"true"}),t.label]},t.id)})})]}),r.jsxs(Wr,{children:[r.jsx(Re,{as:"button",type:"button",onClick:()=>void we(),disabled:n,children:n?"Confirmando…":(Q=x.find(t=>t.id===b))!=null&&Q.online?"Confirmar y pagar":"Confirmar pedido"}),r.jsx(Fe,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),r.jsx(Ye,{open:l!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>i(null),onConfirm:()=>l&&Ce(l)}),r.jsx(Be,{open:be,currentId:(d==null?void 0:d.id)??"",startOnNew:!0,onClose:()=>S(!1),onSelect:t=>{F(t),S(!1),ge()}})]})}export{da as CartScreen};
