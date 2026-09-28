import{a2 as Je,n as te,j as a,au as Ze,a4 as ea,a as ne,b as Fe,av as se,aw as le,a3 as aa,ax as ra,u as oa,M as ye,S as W,E as ta,ay as ia,T as na,d as sa,r as h,X as la,W as da,az as A,aA as ca,c as _,ah as pa,ai as ga,aB as ua,aC as ha,aD as ma,h as je,aE as ve,ap as ba,aF as fa,aG as xa}from"./index-B-yV5OnI.js";import{r as g,c as $a}from"./react-CKwpxk66.js";import{C as ya}from"./ConfirmDialog-D7-0mqDr.js";import{q as r,A as ja}from"./estilos-D2nr0glO.js";import{C as va,a6 as Ca,a7 as wa,a2 as ka,a8 as Sa,a9 as za,S as Ce,aa as Ma,T as X,X as Ia,a3 as Pa,P as we,ab as Ea}from"./iconos-24LHuulG.js";const Aa=new Set;let ke=[...Je],K=1249;const Ta=()=>Aa.forEach(e=>e()),qa=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function La(e){const i=e.filter(l=>l.available);if(i.length===0)return[];const n=new Map;i.forEach(l=>{const u=n.get(l.store)??[];u.push(l),n.set(l.store,u)});const s=[];return n.forEach((l,u)=>{K+=1,s.push({id:`ord-${K}`,code:`#${K}`,store:u,storeId:l[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:l[0].categoryId,total:l.reduce((d,m)=>d+m.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${l[0].eta}`,date:qa(),itemCount:l.length,items:l.map(d=>({productId:d.id,quantity:d.quantity+1}))})}),ke=[...s,...ke],Ta(),s}const Se=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font: inherit;
  font-size: 0.82rem;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`,Ra=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-items: start;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Fa=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.84rem;
  line-height: 1.5;
`,Oa=r.textarea`
  width: 100%;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font: inherit;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
  }

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Da=r.p`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  color: ${({theme:e})=>e.color.success};
  font-size: 0.86rem;
`;function Ba({error:e,contexto:i}){var I;const[n,s]=g.useState(!1),[l,u]=g.useState(""),[d,m]=g.useState(!1),[z,M]=g.useState(!1),de=e instanceof te?e.referencia:null,f=e instanceof te?((I=e.tecnico)==null?void 0:I.causa)??null:e instanceof Error?e.message:null,F=async()=>{if(!d){m(!0);try{await Ze.reportar({comentario:l,registroId:de,pantalla:i??window.location.hash,tecnico:f}),M(!0)}catch{M(!0)}finally{m(!1)}}};return z?a.jsxs(Da,{role:"status",children:[a.jsx(va,{size:16,"aria-hidden":"true"}),"Gracias, ya nos llegó. Lo vamos a revisar."]}):n?a.jsxs(Ra,{children:[a.jsx(Fa,{children:"Contanos qué estabas haciendo. Va con el detalle técnico, así no hace falta que lo expliques."}),a.jsx(Oa,{value:l,onChange:P=>u(P.target.value),placeholder:"Quise confirmar el pedido y no pasó nada…",rows:3,maxLength:2e3,"aria-label":"Qué pasó",autoFocus:!0}),a.jsxs(Se,{type:"button",onClick:()=>void F(),disabled:d,children:[a.jsx(wa,{size:15,"aria-hidden":"true"}),d?"Enviando…":"Enviar al equipo"]})]}):a.jsxs(Se,{type:"button",onClick:()=>s(!0),children:[a.jsx(Ca,{size:15,"aria-hidden":"true"}),"Avisar del problema"]})}const ze={chico:2,mediano:6,grande:15,voluminoso:40},Ha={moto:60,auto:400,camioneta:2500,camion:12e3};function Na(e,i){return e==="peso"?(i+1)*.25:e==="pesoMedio"?(i+1)*.5:i+1}function Ga(e){const i=e.reduce((n,s)=>{const l=ze[s.tamano??"mediano"]??ze.mediano;return n+l*Na(s.saleUnit,s.quantity)},0);return Math.round(i*10)/10}function ie(e,i){return Math.max(1,Math.ceil(e/Ha[i]))}function Me(e,i){return ie(e,i)===1}const Qa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ua=r(ne)`
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
`,Y=r(Fe)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Va=r(Fe)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Wa=r.button`
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
`,_a=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Xa=r.button`
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
`,Ka=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ya=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ja=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const Ie=r.button`
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
`,T=r.span`
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
    ${se};
    ${le};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Za=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,er=r.div`
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
`,ar=r.span`
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
`,rr=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,or=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,tr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,J=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ir=r(ne)`
  overflow: hidden;
`,nr=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Pe=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Ee=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Ae=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,sr=r.span`
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
  ${se};
  ${le};
`,lr=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,dr=r.div`
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
`,cr=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,pr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const gr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,ur=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,hr=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,mr=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,br=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,fr=r.span`
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
`,xr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Te=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,qe=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,$r=r(ne)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,yr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const jr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,vr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,Cr=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,wr=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,kr=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,Z=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,Sr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,q=r.div`
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
`;const Le=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,zr=ja`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Mr=r.div`
  ${zr}
`,ee=r(ea)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Ir=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,Pr=r.button`
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

  ${se};
  ${le};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Er=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,Re=r.button`
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
`,Ar=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ae=r.label`
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
`,re=r.div`
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
`,oe=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  color: ${({theme:e})=>e.color.text};
`,Tr=r.p`
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
`,qr=r.div`
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
`,R=15e3,Oe=200,De=e=>{const i=e.match(/\d+/);return Number((i==null?void 0:i[0])??0)},Lr=(e=ha)=>{const i=new Map;return e.forEach(n=>{const s=i.get(n.store);if(s){s.items.push(n),s.itemCount+=n.quantity,s.subtotal+=n.subtotal,s.availableCount+=n.available?1:0,s.unavailableCount+=n.available?0:1;return}i.set(n.store,{store:n.store,items:[n],itemCount:n.quantity,subtotal:n.subtotal,etaLabel:n.eta,availableCount:n.available?1:0,unavailableCount:n.available?0:1})}),[...i.values()].map(n=>{const s=n.items.map(d=>De(d.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{...n,etaLabel:s.length<=1||l===u?`${l||0} min`:`${l}–${u} min`}})},Rr=e=>{const i=e.reduce((d,m)=>d+m.subtotal,0),n=i>=R?0:1200,s=e.map(d=>De(d.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{subtotal:i,deliveryFee:n,total:i+n+Oe,totalUnits:e.filter(d=>d.available).length,unavailableItems:e.filter(d=>!d.available).length,deliveryWindow:s.length?l===u?`${l} min`:`${l}–${u} min`:"Pendiente",freeShippingRemaining:Math.max(R-i,0),freeShippingProgress:Math.min(i/R*100,100)}},Fr=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],S=[{id:"mercadopago",label:"Pagar ahora",detalle:"Tarjeta, débito o dinero en cuenta",icon:ka,online:!0},{id:"efectivo",label:"Efectivo al recibir",detalle:"Le pagás al repartidor",icon:Sa,online:!1},{id:"transferencia",label:"Transferencia",detalle:"Coordinás con el comercio",icon:za,online:!1}],L="Delivery GO",Or="Entrega comercio";function Qr(){var xe;const e=aa(),[i,n]=g.useState(null),[s,l]=g.useState(!1),[u,d]=g.useState(null),[m,z]=g.useState([]),[M,de]=g.useState(null),{direcciones:f,recargar:F}=ra(),[I,P]=g.useState(null),{stores:ce}=oa(),O=g.useMemo(()=>{const o=[...new Set(e.map(C=>C.storeId))];return o.length>0&&o.every(C=>{var w;return(w=ce.find(E=>E.id===C))==null?void 0:w.delivery})?[L,Or]:[L]},[e,ce]),[j,pe]=g.useState(L);g.useEffect(()=>{O.includes(j)||pe(L)},[j,O]);const[b,D]=g.useState("cualquiera"),x=g.useMemo(()=>Ga(e.filter(o=>o.available)),[e]),B=Me(x,"moto"),ge=Me(x,"auto"),H={cualquiera:1,auto:ie(x,"auto"),fraccionar:Math.max(2,ie(x,"moto"))},N=H[b],[$,Be]=g.useState(S[0].id),p=f.find(o=>o.id===I)??f.find(o=>o.primary)??f[0]??null,[He,G]=g.useState(!1),Q=$a(),ue=g.useMemo(()=>Lr(e),[e]),{subtotal:Ne,deliveryFee:v,total:Ge,totalUnits:he,unavailableItems:me,deliveryWindow:Qe,freeShippingRemaining:U,freeShippingProgress:Ue}=g.useMemo(()=>Rr(e),[e]),be=v*N,Ve=Ge-v+be,fe=ma,We=async()=>{var w,E,$e;if(s)return;if(je()&&!p){d("Elegí una dirección de entrega antes de confirmar.");return}l(!0),d(null);const o=e.filter(c=>c.available);if(!je()||o.some(c=>!c.storeId)){La(e),ve(),Q("/pedidos");return}const t=new Map;for(const c of o){const y=t.get(c.storeId)??[];y.push(c),t.set(c.storeId,y)}z([]);const C=((w=S.find(c=>c.id===$))==null?void 0:w.online)??!1;try{const c=[];let y=0;for(const[V,Xe]of t){const{id:Ke,partes:Ye}=await ba.crear({comercioId:V,direccionId:p==null?void 0:p.id,direccionTexto:p==null?void 0:p.address,metodoPago:`${((E=S.find(k=>k.id===$))==null?void 0:E.label)??$} · ${j}`,preferenciaEnvio:b,items:Xe.map(k=>({productoId:k.productoRealId??k.id,escalon:k.quantity}))});c.push(Ke),y+=Ye??1}if(ve(),C&&c[0])try{const{url:V}=await fa.iniciar(c[0]);window.location.href=V;return}catch{Q("/pedidos?pago=pendiente");return}Q(y>c.length?`/pedidos?entregas=${y}`:"/pedidos")}catch(c){d(c instanceof Error?c.message:"No pudimos confirmar el pedido."),z(c instanceof te&&(($e=c.productos)!=null&&$e.length)?c.productos:[])}finally{l(!1)}},_e=o=>{xa(o),n(null)};return ue.length===0?a.jsx(ye,{showSearch:!1,children:a.jsx(ee,{children:a.jsx(W,{children:a.jsx(ta,{icon:Ce,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(ye,{showSearch:!1,children:[a.jsxs(Qa,{children:[a.jsx(ee,{children:a.jsx(W,{children:a.jsx(Ua,{children:a.jsx(Y,{children:a.jsxs(Ka,{children:[a.jsxs(Ya,{children:[a.jsx(Ja,{children:a.jsx(ia,{children:"Carrito"})}),a.jsxs(or,{children:[a.jsxs(T,{"data-tone":"brand",children:[a.jsx(Ce,{size:14,"aria-hidden":"true"})," ",he," ",he===1?"producto":"productos"]}),a.jsxs(T,{"data-tone":me>0?"warning":"success",children:[a.jsx(Ma,{size:14,"aria-hidden":"true"})," ",me," sin stock"]}),a.jsxs(T,{children:[a.jsx(X,{size:14,"aria-hidden":"true"})," ",Qe]})]})]}),a.jsx(Za,{"aria-label":"Progreso de compra",children:Fr.map((o,t)=>a.jsxs(er,{"data-state":o.state,children:[a.jsx(ar,{"data-state":o.state,children:t+1}),a.jsx(rr,{children:o.label})]},o.label))})]})})})})}),a.jsx(ee,{children:a.jsx(W,{children:a.jsxs(tr,{children:[a.jsx(J,{children:ue.map(o=>a.jsx(ir,{children:a.jsxs(Y,{children:[a.jsxs(nr,{children:[a.jsxs(Pe,{children:[a.jsx(Ee,{children:o.store}),a.jsxs(Ae,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(sr,{children:[a.jsx(X,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(lr,{children:o.items.map(t=>a.jsxs(dr,{"data-problema":m.includes(t.productoRealId??t.id),children:[a.jsx(cr,{children:a.jsx(pr,{src:na(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(gr,{children:[a.jsxs(ur,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(hr,{children:t.product}),a.jsx(sa,{children:t.store})]}),a.jsxs(Ir,{children:[a.jsx(mr,{children:t.available?h(t.subtotal):"—"}),a.jsx(Pr,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:a.jsx(Ia,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(br,{children:[a.jsxs(Er,{children:[a.jsx(Re,{type:"button",onClick:()=>fe(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(Pa,{size:14,"aria-hidden":"true"})}),a.jsx(Ar,{"aria-live":"polite",children:t.available?la(t.saleUnit,t.quantity):"0 unid."}),a.jsx(Re,{type:"button",onClick:()=>fe(t.id,1),disabled:!t.available||t.quantity>=da(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(we,{size:14,"aria-hidden":"true"})})]}),a.jsx(fr,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(xr,{children:[a.jsxs(Te,{children:[a.jsx(X,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(Te,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(qe,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(qe,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),a.jsx($r,{children:a.jsx(Y,{children:a.jsxs(yr,{children:[a.jsx(A,{children:"Resumen"}),a.jsxs(jr,{children:[a.jsxs(vr,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:U>0?`${h(U)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(wr,{children:a.jsx(kr,{$value:Ue})}),a.jsxs(Cr,{children:["Umbral estimado ",h(R)," ·"," ",U>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(Sr,{children:[a.jsxs(q,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:h(Ne)})]}),a.jsxs(q,{children:[a.jsxs("span",{children:["Envío estimado",N>1?` · ${N} entregas`:""]}),a.jsx("span",{children:h(be)})]}),a.jsxs(q,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:h(Oe)})]}),a.jsxs(q,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(ca,{children:h(Ve)})]})]}),a.jsxs(Z,{children:[a.jsxs("div",{children:[a.jsx(A,{children:"Dirección"}),a.jsx(_,{children:"Elegí dónde recibir"})]}),a.jsxs(J,{children:[f.map(o=>a.jsx(Wa,{type:"button",onClick:()=>P(o.id),"data-elegida":(p==null?void 0:p.id)===o.id,"aria-pressed":(p==null?void 0:p.id)===o.id,children:a.jsx(Va,{children:a.jsxs(_a,{children:[a.jsxs(Pe,{children:[a.jsx(Ee,{children:o.label}),a.jsx(Ae,{children:o.address})]}),a.jsx(T,{"data-tone":o.primary?"brand":"success",children:(p==null?void 0:p.id)===o.id?"Elegida":o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(Xa,{type:"button",onClick:()=>G(!0),children:[a.jsx(we,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(Z,{children:[a.jsxs("div",{children:[a.jsx(A,{children:"Entrega"}),a.jsx(_,{children:"Cómo llega el pedido"})]}),a.jsx(Le,{children:O.map(o=>a.jsx(Ie,{type:"button",onClick:()=>pe(o),"data-elegido":j===o,"aria-pressed":j===o,children:o},o))}),x>0&&!B?a.jsxs(Tr,{children:[a.jsx(Ea,{size:14,"aria-hidden":"true"}),a.jsxs("span",{children:["Lo que llevás ocupa unos ",x," litros: no entra en la caja de una moto."," ",ge?"Va a esperar un repartidor en auto, o llegar en varias entregas.":"Va a llegar en varias entregas."]})]}):null,a.jsxs(J,{children:[a.jsxs(ae,{"data-elegida":b==="cualquiera",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="cualquiera",onChange:()=>D("cualquiera")}),a.jsxs(re,{children:[a.jsx("strong",{children:"Como venga"}),a.jsx("span",{children:B?"Lo toma el primero que pase, en moto o en auto.":"Lo toma quien pueda llevarlo. Puede tardar un poco más."})]}),a.jsx(oe,{children:h(v)})]}),!B&&ge?a.jsxs(ae,{"data-elegida":b==="auto",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="auto",onChange:()=>D("auto")}),a.jsxs(re,{children:[a.jsx("strong",{children:"Todo junto, en auto"}),a.jsx("span",{children:"Esperás a que lo tome alguien en auto y te llega completo."})]}),a.jsx(oe,{children:h(v)})]}):null,e.filter(o=>o.available).length>1?a.jsxs(ae,{"data-elegida":b==="fraccionar",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="fraccionar",onChange:()=>D("fraccionar")}),a.jsxs(re,{children:[a.jsx("strong",{children:"Fraccionar para recibir antes"}),a.jsxs("span",{children:["Se parte en ",H.fraccionar," entregas que pueden tomar repartidores distintos. Pagás un envío por cada una."]})]}),a.jsx(oe,{children:h(v*H.fraccionar)})]}):null]})]}),a.jsxs(Z,{children:[a.jsxs("div",{children:[a.jsx(A,{children:"Pago"}),a.jsx(_,{children:"Elegí el medio de pago"})]}),a.jsx(Le,{children:S.map(o=>{const t=o.icon;return a.jsxs(Ie,{type:"button",onClick:()=>Be(o.id),"data-elegido":$===o.id,"aria-pressed":$===o.id,title:o.detalle,children:[a.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.id)})})]}),u?a.jsxs(qr,{role:"alert",children:[a.jsx("span",{children:u}),a.jsx(Ba,{error:M,contexto:"Confirmar el pedido"})]}):null,a.jsxs(Mr,{children:[a.jsx(pa,{as:"button",type:"button",onClick:()=>void We(),disabled:s,children:s?"Confirmando…":(xe=S.find(o=>o.id===$))!=null&&xe.online?"Confirmar y pagar":"Confirmar pedido"}),a.jsx(ga,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(ya,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>i&&_e(i)}),a.jsx(ua,{open:He,currentId:(p==null?void 0:p.id)??"",startOnNew:!0,onClose:()=>G(!1),onSelect:o=>{P(o),G(!1),F()}})]})}export{Qr as CartScreen};
