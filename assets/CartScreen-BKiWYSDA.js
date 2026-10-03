import{a2 as Xe,a4 as Ke,a as ee,b as Ee,av as ae,aw as re,a3 as Ye,ax as Je,u as Ze,j as a,M as me,S as N,E as ea,ay as aa,T as ra,d as oa,r as h,X as ta,W as ia,az as M,aA as na,c as G,ah as sa,ai as la,aB as da,aC as ca,aD as pa,h as be,aE as fe,ap as ga,aF as ua,n as ha,aG as ma}from"./index-34ufUm0e.js";import{r as g,c as ba}from"./react-CKwpxk66.js";import{A as fa,C as xa}from"./AvisarProblema-BwoNwePB.js";import{q as r,A as $a}from"./estilos-D2nr0glO.js";import{a6 as ya,a9 as ja,aa as va,S as xe,ab as Ca,T as U,X as wa,f as ka,P as $e,ac as Sa}from"./iconos-NomGb_FP.js";const za=new Set;let ye=[...Xe],Q=1249;const Ma=()=>za.forEach(e=>e()),Ia=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function Pa(e){const i=e.filter(l=>l.available);if(i.length===0)return[];const n=new Map;i.forEach(l=>{const u=n.get(l.store)??[];u.push(l),n.set(l.store,u)});const s=[];return n.forEach((l,u)=>{Q+=1,s.push({id:`ord-${Q}`,code:`#${Q}`,store:u,storeId:l[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:l[0].categoryId,total:l.reduce((p,$)=>p+$.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${l[0].eta}`,date:Ia(),itemCount:l.length,items:l.map(p=>({productId:p.id,quantity:p.quantity+1}))})}),ye=[...s,...ye],Ma(),s}const je={chico:2,mediano:6,grande:15,voluminoso:40},Ea={moto:60,auto:400,camioneta:2500,camion:12e3};function Ta(e,i){return e==="peso"?(i+1)*.25:e==="pesoMedio"?(i+1)*.5:i+1}function Aa(e){const i=e.reduce((n,s)=>{const l=je[s.tamano??"mediano"]??je.mediano;return n+l*Ta(s.saleUnit,s.quantity)},0);return Math.round(i*10)/10}function Z(e,i){return Math.max(1,Math.ceil(e/Ea[i]))}function ve(e,i){return Z(e,i)===1}const qa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ra=r(ee)`
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
`,V=r(Ee)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,La=r(Ee)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Fa=r.button`
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
`,Oa=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Da=r.button`
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
`,Ha=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ba=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Na=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const Ce=r.button`
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
`,I=r.span`
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
    ${ae};
    ${re};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Ga=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Ua=r.div`
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
`,Qa=r.span`
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
`,Va=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Wa=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,_a=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,W=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Xa=r(ee)`
  overflow: hidden;
`,Ka=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,we=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,ke=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Se=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Ya=r.span`
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
  ${ae};
  ${re};
`,Ja=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,Za=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;

  /* El que impide confirmar el pedido. Antes el error decía "algún producto
     no está disponible" y la persona tenía que adivinar cuál sacar; lo más
     probable era que vaciara el carrito entero o se fuera. */
  &[data-problema='true'] {
    padding: ${({theme:e})=>e.spacing[2]};
    margin-inline: calc(-1 * ${({theme:e})=>e.spacing[2]});
    border-radius: ${({theme:e})=>e.radius.lg};
    border: 1px solid ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
  }
`,er=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,ar=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const rr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,or=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,tr=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,ir=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,nr=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,sr=r.span`
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
`,lr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,ze=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,Me=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,dr=r(ee)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,cr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const pr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,gr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,ur=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,hr=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,mr=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,_=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,br=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,P=r.div`
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
`;r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
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
`;const Ie=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,fr=$a`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,xr=r.div`
  ${fr}
`,X=r(Ke)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,$r=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,yr=r.button`
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

  ${ae};
  ${re};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,jr=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,Pe=r.button`
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
`,vr=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,K=r.label`
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
`,Y=r.div`
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
`,J=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  color: ${({theme:e})=>e.color.text};
`,Cr=r.p`
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
`,wr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-items: start;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>`${e.color.danger}59`};
  background: ${({theme:e})=>`${e.color.danger}14`};

  > span {
    color: ${({theme:e})=>e.color.danger};
    font-size: 0.9rem;
    line-height: 1.45;
  }
`,T=15e3,Te=200,Ae=e=>{const i=e.match(/\d+/);return Number((i==null?void 0:i[0])??0)},kr=(e=ca)=>{const i=new Map;return e.forEach(n=>{const s=i.get(n.store);if(s){s.items.push(n),s.itemCount+=n.quantity,s.subtotal+=n.subtotal,s.availableCount+=n.available?1:0,s.unavailableCount+=n.available?0:1;return}i.set(n.store,{store:n.store,items:[n],itemCount:n.quantity,subtotal:n.subtotal,etaLabel:n.eta,availableCount:n.available?1:0,unavailableCount:n.available?0:1})}),[...i.values()].map(n=>{const s=n.items.map(p=>Ae(p.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{...n,etaLabel:s.length<=1||l===u?`${l||0} min`:`${l}–${u} min`}})},Sr=e=>{const i=e.reduce((p,$)=>p+$.subtotal,0),n=i>=T?0:1200,s=e.map(p=>Ae(p.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{subtotal:i,deliveryFee:n,total:i+n+Te,totalUnits:e.filter(p=>p.available).length,unavailableItems:e.filter(p=>!p.available).length,deliveryWindow:s.length?l===u?`${l} min`:`${l}–${u} min`:"Pendiente",freeShippingRemaining:Math.max(T-i,0),freeShippingProgress:Math.min(i/T*100,100)}},zr=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],k=[{id:"mercadopago",label:"Pagar ahora",detalle:"Tarjeta, débito o dinero en cuenta",icon:ya,online:!0},{id:"efectivo",label:"Efectivo al recibir",detalle:"Le pagás al repartidor",icon:ja,online:!1},{id:"transferencia",label:"Transferencia",detalle:"Coordinás con el comercio",icon:va,online:!1}],E="Delivery GO",Mr="Entrega comercio";function Rr(){var ue;const e=Ye(),[i,n]=g.useState(null),[s,l]=g.useState(!1),[u,p]=g.useState(null),[$,oe]=g.useState([]),[qe,Ir]=g.useState(null),{direcciones:S,recargar:Re}=Je(),[Le,te]=g.useState(null),{stores:ie}=Ze(),A=g.useMemo(()=>{const o=[...new Set(e.map(v=>v.storeId))];return o.length>0&&o.every(v=>{var C;return(C=ie.find(z=>z.id===v))==null?void 0:C.delivery})?[E,Mr]:[E]},[e,ie]),[y,ne]=g.useState(E);g.useEffect(()=>{A.includes(y)||ne(E)},[y,A]);const[m,q]=g.useState("cualquiera"),b=g.useMemo(()=>Aa(e.filter(o=>o.available)),[e]),R=ve(b,"moto"),se=ve(b,"auto"),L={cualquiera:1,auto:Z(b,"auto"),fraccionar:Math.max(2,Z(b,"moto"))},F=L[m],[f,Fe]=g.useState(k[0].id),c=S.find(o=>o.id===Le)??S.find(o=>o.primary)??S[0]??null,[Oe,O]=g.useState(!1),D=ba(),le=g.useMemo(()=>kr(e),[e]),{subtotal:De,deliveryFee:j,total:He,totalUnits:de,unavailableItems:ce,deliveryWindow:Be,freeShippingRemaining:H,freeShippingProgress:Ne}=g.useMemo(()=>Sr(e),[e]),pe=j*F,Ge=He-j+pe,ge=pa,Ue=async()=>{var C,z,he;if(s)return;if(be()&&!c){p("Elegí una dirección de entrega antes de confirmar.");return}l(!0),p(null);const o=e.filter(d=>d.available);if(!be()||o.some(d=>!d.storeId)){Pa(e),fe(),D("/pedidos");return}const t=new Map;for(const d of o){const x=t.get(d.storeId)??[];x.push(d),t.set(d.storeId,x)}oe([]);const v=((C=k.find(d=>d.id===f))==null?void 0:C.online)??!1;try{const d=[];let x=0;for(const[B,Ve]of t){const{id:We,partes:_e}=await ga.crear({comercioId:B,direccionId:c==null?void 0:c.id,direccionTexto:c==null?void 0:c.address,metodoPago:`${((z=k.find(w=>w.id===f))==null?void 0:z.label)??f} · ${y}`,preferenciaEnvio:m,items:Ve.map(w=>({productoId:w.productoRealId??w.id,escalon:w.quantity}))});d.push(We),x+=_e??1}if(fe(),v&&d[0])try{const{url:B}=await ua.iniciar(d[0]);window.location.href=B;return}catch{D("/pedidos?pago=pendiente");return}D(x>d.length?`/pedidos?entregas=${x}`:"/pedidos")}catch(d){p(d instanceof Error?d.message:"No pudimos confirmar el pedido."),oe(d instanceof ha&&((he=d.productos)!=null&&he.length)?d.productos:[])}finally{l(!1)}},Qe=o=>{ma(o),n(null)};return le.length===0?a.jsx(me,{showSearch:!1,children:a.jsx(X,{children:a.jsx(N,{children:a.jsx(ea,{icon:xe,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(me,{showSearch:!1,children:[a.jsxs(qa,{children:[a.jsx(X,{children:a.jsx(N,{children:a.jsx(Ra,{children:a.jsx(V,{children:a.jsxs(Ha,{children:[a.jsxs(Ba,{children:[a.jsx(Na,{children:a.jsx(aa,{children:"Carrito"})}),a.jsxs(Wa,{children:[a.jsxs(I,{"data-tone":"brand",children:[a.jsx(xe,{size:14,"aria-hidden":"true"})," ",de," ",de===1?"producto":"productos"]}),a.jsxs(I,{"data-tone":ce>0?"warning":"success",children:[a.jsx(Ca,{size:14,"aria-hidden":"true"})," ",ce," sin stock"]}),a.jsxs(I,{children:[a.jsx(U,{size:14,"aria-hidden":"true"})," ",Be]})]})]}),a.jsx(Ga,{"aria-label":"Progreso de compra",children:zr.map((o,t)=>a.jsxs(Ua,{"data-state":o.state,children:[a.jsx(Qa,{"data-state":o.state,children:t+1}),a.jsx(Va,{children:o.label})]},o.label))})]})})})})}),a.jsx(X,{children:a.jsx(N,{children:a.jsxs(_a,{children:[a.jsx(W,{children:le.map(o=>a.jsx(Xa,{children:a.jsxs(V,{children:[a.jsxs(Ka,{children:[a.jsxs(we,{children:[a.jsx(ke,{children:o.store}),a.jsxs(Se,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(Ya,{children:[a.jsx(U,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(Ja,{children:o.items.map(t=>a.jsxs(Za,{"data-problema":$.includes(t.productoRealId??t.id),children:[a.jsx(er,{children:a.jsx(ar,{src:ra(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(rr,{children:[a.jsxs(or,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(tr,{children:t.product}),a.jsx(oa,{children:t.store})]}),a.jsxs($r,{children:[a.jsx(ir,{children:t.available?h(t.subtotal):"—"}),a.jsx(yr,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:a.jsx(wa,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(nr,{children:[a.jsxs(jr,{children:[a.jsx(Pe,{type:"button",onClick:()=>ge(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(ka,{size:14,"aria-hidden":"true"})}),a.jsx(vr,{"aria-live":"polite",children:t.available?ta(t.saleUnit,t.quantity):"0 unid."}),a.jsx(Pe,{type:"button",onClick:()=>ge(t.id,1),disabled:!t.available||t.quantity>=ia(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx($e,{size:14,"aria-hidden":"true"})})]}),a.jsx(sr,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(lr,{children:[a.jsxs(ze,{children:[a.jsx(U,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(ze,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(Me,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(Me,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),a.jsx(dr,{children:a.jsx(V,{children:a.jsxs(cr,{children:[a.jsx(M,{children:"Resumen"}),a.jsxs(pr,{children:[a.jsxs(gr,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:H>0?`${h(H)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(hr,{children:a.jsx(mr,{$value:Ne})}),a.jsxs(ur,{children:["Umbral estimado ",h(T)," ·"," ",H>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(br,{children:[a.jsxs(P,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:h(De)})]}),a.jsxs(P,{children:[a.jsxs("span",{children:["Envío estimado",F>1?` · ${F} entregas`:""]}),a.jsx("span",{children:h(pe)})]}),a.jsxs(P,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:h(Te)})]}),a.jsxs(P,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(na,{children:h(Ge)})]})]}),a.jsxs(_,{children:[a.jsxs("div",{children:[a.jsx(M,{children:"Dirección"}),a.jsx(G,{children:"Elegí dónde recibir"})]}),a.jsxs(W,{children:[S.map(o=>a.jsx(Fa,{type:"button",onClick:()=>te(o.id),"data-elegida":(c==null?void 0:c.id)===o.id,"aria-pressed":(c==null?void 0:c.id)===o.id,children:a.jsx(La,{children:a.jsxs(Oa,{children:[a.jsxs(we,{children:[a.jsx(ke,{children:o.label}),a.jsx(Se,{children:o.address})]}),a.jsx(I,{"data-tone":o.primary?"brand":"success",children:(c==null?void 0:c.id)===o.id?"Elegida":o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(Da,{type:"button",onClick:()=>O(!0),children:[a.jsx($e,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(_,{children:[a.jsxs("div",{children:[a.jsx(M,{children:"Entrega"}),a.jsx(G,{children:"Cómo llega el pedido"})]}),a.jsx(Ie,{children:A.map(o=>a.jsx(Ce,{type:"button",onClick:()=>ne(o),"data-elegido":y===o,"aria-pressed":y===o,children:o},o))}),b>0&&!R?a.jsxs(Cr,{children:[a.jsx(Sa,{size:14,"aria-hidden":"true"}),a.jsxs("span",{children:["Lo que llevás ocupa unos ",b," litros: no entra en la caja de una moto."," ",se?"Va a esperar un repartidor en auto, o llegar en varias entregas.":"Va a llegar en varias entregas."]})]}):null,a.jsxs(W,{children:[a.jsxs(K,{"data-elegida":m==="cualquiera",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:m==="cualquiera",onChange:()=>q("cualquiera")}),a.jsxs(Y,{children:[a.jsx("strong",{children:"Como venga"}),a.jsx("span",{children:R?"Lo toma el primero que pase, en moto o en auto.":"Lo toma quien pueda llevarlo. Puede tardar un poco más."})]}),a.jsx(J,{children:h(j)})]}),!R&&se?a.jsxs(K,{"data-elegida":m==="auto",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:m==="auto",onChange:()=>q("auto")}),a.jsxs(Y,{children:[a.jsx("strong",{children:"Todo junto, en auto"}),a.jsx("span",{children:"Esperás a que lo tome alguien en auto y te llega completo."})]}),a.jsx(J,{children:h(j)})]}):null,e.filter(o=>o.available).length>1?a.jsxs(K,{"data-elegida":m==="fraccionar",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:m==="fraccionar",onChange:()=>q("fraccionar")}),a.jsxs(Y,{children:[a.jsx("strong",{children:"Fraccionar para recibir antes"}),a.jsxs("span",{children:["Se parte en ",L.fraccionar," entregas que pueden tomar repartidores distintos. Pagás un envío por cada una."]})]}),a.jsx(J,{children:h(j*L.fraccionar)})]}):null]})]}),a.jsxs(_,{children:[a.jsxs("div",{children:[a.jsx(M,{children:"Pago"}),a.jsx(G,{children:"Elegí el medio de pago"})]}),a.jsx(Ie,{children:k.map(o=>{const t=o.icon;return a.jsxs(Ce,{type:"button",onClick:()=>Fe(o.id),"data-elegido":f===o.id,"aria-pressed":f===o.id,title:o.detalle,children:[a.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.id)})})]}),u?a.jsxs(wr,{role:"alert",children:[a.jsx("span",{children:u}),a.jsx(fa,{error:qe,contexto:"Confirmar el pedido"})]}):null,a.jsxs(xr,{children:[a.jsx(sa,{as:"button",type:"button",onClick:()=>void Ue(),disabled:s,children:s?"Confirmando…":(ue=k.find(o=>o.id===f))!=null&&ue.online?"Confirmar y pagar":"Confirmar pedido"}),a.jsx(la,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(xa,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>i&&Qe(i)}),a.jsx(da,{open:Oe,currentId:(c==null?void 0:c.id)??"",startOnNew:!0,onClose:()=>O(!1),onSelect:o=>{te(o),O(!1),Re()}})]})}export{Rr as CartScreen};
