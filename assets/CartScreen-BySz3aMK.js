import{$ as Ge,n as pe,j as a,aq as Ve,a0 as We,a as J,b as Pe,ar as Z,as as ee,at as Ye,M as ge,S as D,E as _e,au as Ke,T as Xe,d as Je,r as h,av as S,aw as Ze,c as N,ac as ea,ad as aa,ax as ra,ay as oa,h as ue,ak as ta,az as ia}from"./index-cXqEpeJy.js";import{r as g,u as na}from"./react-6hK8W6IX.js";import{s as sa,m as la}from"./saleUnits-CLP-TCsg.js";import{u as ca,c as da,b as he,r as pa}from"./cartStore-0fSA2Xh5.js";import{C as ga}from"./ConfirmDialog-DJ31996X.js";import{q as r,A as ua}from"./estilos-DzHAJWDP.js";import{C as ha,a5 as ma,a6 as ba,a1 as fa,a7 as xa,a8 as $a,m as me,a9 as ya,T as I,X as ja,a2 as va,P as be,Y as Ca,aa as wa}from"./iconos-DPkufriG.js";const ka=new Set;let fe=[...Ge],Q=1249;const Sa=()=>ka.forEach(e=>e()),za=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function Ma(e){const i=e.filter(l=>l.available);if(i.length===0)return[];const n=new Map;i.forEach(l=>{const u=n.get(l.store)??[];u.push(l),n.set(l.store,u)});const s=[];return n.forEach((l,u)=>{Q+=1,s.push({id:`ord-${Q}`,code:`#${Q}`,store:u,storeId:l[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:l[0].categoryId,total:l.reduce((c,m)=>c+m.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${l[0].eta}`,date:za(),itemCount:l.length,items:l.map(c=>({productId:c.id,quantity:c.quantity+1}))})}),fe=[...s,...fe],Sa(),s}const xe=r.button`
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
`,Ia=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-items: start;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Pa=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.84rem;
  line-height: 1.5;
`,Ta=r.textarea`
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
`,Ea=r.p`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  color: ${({theme:e})=>e.color.success};
  font-size: 0.86rem;
`;function Aa({error:e,contexto:i}){var x;const[n,s]=g.useState(!1),[l,u]=g.useState(""),[c,m]=g.useState(!1),[ae,f]=g.useState(!1),T=e instanceof pe?e.referencia:null,E=e instanceof pe?((x=e.tecnico)==null?void 0:x.causa)??null:e instanceof Error?e.message:null,w=async()=>{if(!c){m(!0);try{await Ve.reportar({comentario:l,registroId:T,pantalla:i??window.location.hash,tecnico:E}),f(!0)}catch{f(!0)}finally{m(!1)}}};return ae?a.jsxs(Ea,{role:"status",children:[a.jsx(ha,{size:16,"aria-hidden":"true"}),"Gracias, ya nos llegó. Lo vamos a revisar."]}):n?a.jsxs(Ia,{children:[a.jsx(Pa,{children:"Contanos qué estabas haciendo. Va con el detalle técnico, así no hace falta que lo expliques."}),a.jsx(Ta,{value:l,onChange:A=>u(A.target.value),placeholder:"Quise confirmar el pedido y no pasó nada…",rows:3,maxLength:2e3,"aria-label":"Qué pasó",autoFocus:!0}),a.jsxs(xe,{type:"button",onClick:()=>void w(),disabled:c,children:[a.jsx(ba,{size:15,"aria-hidden":"true"}),c?"Enviando…":"Enviar al equipo"]})]}):a.jsxs(xe,{type:"button",onClick:()=>s(!0),children:[a.jsx(ma,{size:15,"aria-hidden":"true"}),"Avisar del problema"]})}const $e={chico:2,mediano:6,grande:15,voluminoso:40},qa={moto:60,auto:400,camioneta:2500,camion:12e3};function La(e,i){return e==="peso"?(i+1)*.25:e==="pesoMedio"?(i+1)*.5:i+1}function Fa(e){const i=e.reduce((n,s)=>{const l=$e[s.tamano??"mediano"]??$e.mediano;return n+l*La(s.saleUnit,s.quantity)},0);return Math.round(i*10)/10}function X(e,i){return Math.max(1,Math.ceil(e/qa[i]))}function ye(e,i){return X(e,i)===1}const Oa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ra=r(J)`
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
`,U=r(Pe)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Ha=r(Pe)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Ba=r.button`
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
`,Da=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Na=r.button`
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
`,Qa=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ua=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ga=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const je=r.button`
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
`,z=r.span`
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
    ${Z};
    ${ee};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Va=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Wa=r.div`
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
`,Ya=r.span`
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
`,_a=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Ka=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Xa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,G=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ja=r(J)`
  overflow: hidden;
`,Za=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,ve=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Ce=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,we=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,er=r.span`
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
  ${Z};
  ${ee};
`,ar=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,rr=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,or=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,tr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const ir=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,nr=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,sr=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,lr=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,cr=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,dr=r.span`
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
`,pr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,ke=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,Se=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,gr=r(J)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,ur=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const hr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,mr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,br=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,fr=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,xr=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,V=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,$r=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,M=r.div`
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
`,yr=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,jr=r.div`
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
`,ze=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,vr=ua`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Cr=r.div`
  ${vr}
`,W=r(We)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,wr=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,kr=r.button`
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

  ${Z};
  ${ee};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Sr=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,Me=r.button`
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
`,zr=r.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Y=r.label`
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
`,_=r.div`
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
`,K=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  color: ${({theme:e})=>e.color.text};
`,Mr=r.p`
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
`,Ir=r.div`
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
`,P=15e3,Te=200,Ee=e=>{const i=e.match(/\d+/);return Number((i==null?void 0:i[0])??0)},Pr=(e=oa)=>{const i=new Map;return e.forEach(n=>{const s=i.get(n.store);if(s){s.items.push(n),s.itemCount+=n.quantity,s.subtotal+=n.subtotal,s.availableCount+=n.available?1:0,s.unavailableCount+=n.available?0:1;return}i.set(n.store,{store:n.store,items:[n],itemCount:n.quantity,subtotal:n.subtotal,etaLabel:n.eta,availableCount:n.available?1:0,unavailableCount:n.available?0:1})}),[...i.values()].map(n=>{const s=n.items.map(c=>Ee(c.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{...n,etaLabel:s.length<=1||l===u?`${l||0} min`:`${l}–${u} min`}})},Tr=e=>{const i=e.reduce((c,m)=>c+m.subtotal,0),n=i>=P?0:1200,s=e.map(c=>Ee(c.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{subtotal:i,deliveryFee:n,total:i+n+Te,totalUnits:e.filter(c=>c.available).length,unavailableItems:e.filter(c=>!c.available).length,deliveryWindow:s.length?l===u?`${l} min`:`${l}–${u} min`:"Pendiente",freeShippingRemaining:Math.max(P-i,0),freeShippingProgress:Math.min(i/P*100,100)}},Er=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],C=[{id:"mercadopago",label:"Pagar ahora",detalle:"Tarjeta, débito o dinero en cuenta",icon:fa,online:!0},{id:"efectivo",label:"Efectivo al recibir",detalle:"Le pagás al repartidor",icon:xa,online:!1},{id:"transferencia",label:"Transferencia",detalle:"Coordinás con el comercio",icon:$a,online:!1}],Ar=[{label:"Precio final",icon:Ca},{label:"Seguí tu pedido",icon:I}],Ie=["Delivery GO","Entrega comercio","Sin retiro"];function Dr(){var le;const e=ca(),[i,n]=g.useState(null),[s,l]=g.useState(!1),[u,c]=g.useState(null),[m,ae]=g.useState(null),{direcciones:f,recargar:T}=Ye(),[E,w]=g.useState(null),[x,A]=g.useState(Ie[0]),[b,q]=g.useState("cualquiera"),$=g.useMemo(()=>Fa(e.filter(o=>o.available)),[e]),L=ye($,"moto"),re=ye($,"auto"),F={cualquiera:1,auto:X($,"auto"),fraccionar:Math.max(2,X($,"moto"))},O=F[b],[y,Ae]=g.useState(C[0].id),d=f.find(o=>o.id===E)??f.find(o=>o.primary)??f[0]??null,[qe,R]=g.useState(!1),H=na(),oe=g.useMemo(()=>Pr(e),[e]),{subtotal:Le,deliveryFee:v,total:Fe,totalUnits:te,unavailableItems:ie,deliveryWindow:Oe,freeShippingRemaining:B,freeShippingProgress:Re}=g.useMemo(()=>Tr(e),[e]),ne=v*O,He=Fe-v+ne,se=da,Be=async()=>{var ce,de;if(s)return;if(ue()&&!d){c("Elegí una dirección de entrega antes de confirmar.");return}l(!0),c(null);const o=e.filter(p=>p.available);if(!ue()||o.some(p=>!p.storeId)){Ma(e),he(),H("/pedidos");return}const t=new Map;for(const p of o){const j=t.get(p.storeId)??[];j.push(p),t.set(p.storeId,j)}const Ne=((ce=C.find(p=>p.id===y))==null?void 0:ce.online)??!1;try{const p=[];for(const[j,Qe]of t){const{id:Ue}=await ta.crear({comercioId:j,direccionId:d==null?void 0:d.id,direccionTexto:d==null?void 0:d.address,metodoPago:`${((de=C.find(k=>k.id===y))==null?void 0:de.label)??y} · ${x}`,preferenciaEnvio:b,items:Qe.map(k=>({productoId:k.id,escalon:k.quantity}))});p.push(Ue)}if(he(),Ne&&p[0])try{const{url:j}=await ia.iniciar(p[0]);window.location.href=j;return}catch{H("/pedidos?pago=pendiente");return}H("/pedidos")}catch(p){c(p instanceof Error?p.message:"No pudimos confirmar el pedido.")}finally{l(!1)}},De=o=>{pa(o),n(null)};return oe.length===0?a.jsx(ge,{showSearch:!1,children:a.jsx(W,{children:a.jsx(D,{children:a.jsx(_e,{icon:me,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(ge,{showSearch:!1,children:[a.jsxs(Oa,{children:[a.jsx(W,{children:a.jsx(D,{children:a.jsx(Ra,{children:a.jsx(U,{children:a.jsxs(Qa,{children:[a.jsxs(Ua,{children:[a.jsx(Ga,{children:a.jsx(Ke,{children:"Carrito"})}),a.jsxs(Ka,{children:[a.jsxs(z,{"data-tone":"brand",children:[a.jsx(me,{size:14,"aria-hidden":"true"})," ",te," ",te===1?"producto":"productos"]}),a.jsxs(z,{"data-tone":ie>0?"warning":"success",children:[a.jsx(ya,{size:14,"aria-hidden":"true"})," ",ie," sin stock"]}),a.jsxs(z,{children:[a.jsx(I,{size:14,"aria-hidden":"true"})," ",Oe]})]})]}),a.jsx(Va,{"aria-label":"Progreso de compra",children:Er.map((o,t)=>a.jsxs(Wa,{"data-state":o.state,children:[a.jsx(Ya,{"data-state":o.state,children:t+1}),a.jsx(_a,{children:o.label})]},o.label))})]})})})})}),a.jsx(W,{children:a.jsx(D,{children:a.jsxs(Xa,{children:[a.jsx(G,{children:oe.map(o=>a.jsx(Ja,{children:a.jsxs(U,{children:[a.jsxs(Za,{children:[a.jsxs(ve,{children:[a.jsx(Ce,{children:o.store}),a.jsxs(we,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(er,{children:[a.jsx(I,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(ar,{children:o.items.map(t=>a.jsxs(rr,{children:[a.jsx(or,{children:a.jsx(tr,{src:Xe(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(ir,{children:[a.jsxs(nr,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(sr,{children:t.product}),a.jsx(Je,{children:t.store})]}),a.jsxs(wr,{children:[a.jsx(lr,{children:t.available?h(t.subtotal):"—"}),a.jsx(kr,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:a.jsx(ja,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(cr,{children:[a.jsxs(Sr,{children:[a.jsx(Me,{type:"button",onClick:()=>se(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(va,{size:14,"aria-hidden":"true"})}),a.jsx(zr,{"aria-live":"polite",children:t.available?sa(t.saleUnit,t.quantity):"0 unid."}),a.jsx(Me,{type:"button",onClick:()=>se(t.id,1),disabled:!t.available||t.quantity>=la(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(be,{size:14,"aria-hidden":"true"})})]}),a.jsx(dr,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(pr,{children:[a.jsxs(ke,{children:[a.jsx(I,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(ke,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(Se,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(Se,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),a.jsx(gr,{children:a.jsx(U,{children:a.jsxs(ur,{children:[a.jsx(S,{children:"Resumen"}),a.jsxs(hr,{children:[a.jsxs(mr,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:B>0?`${h(B)} faltan`:"Ya lo alcanzaste"})]}),a.jsx(fr,{children:a.jsx(xr,{$value:Re})}),a.jsxs(br,{children:["Umbral estimado ",h(P)," ·"," ",B>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs($r,{children:[a.jsxs(M,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:h(Le)})]}),a.jsxs(M,{children:[a.jsxs("span",{children:["Envío estimado",O>1?` · ${O} entregas`:""]}),a.jsx("span",{children:h(ne)})]}),a.jsxs(M,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:h(Te)})]}),a.jsxs(M,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(Ze,{children:h(He)})]})]}),a.jsx(yr,{children:Ar.map(o=>{const t=o.icon;return a.jsxs(jr,{children:[a.jsx(t,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:o.label})]},o.label)})}),a.jsxs(V,{children:[a.jsxs("div",{children:[a.jsx(S,{children:"Dirección"}),a.jsx(N,{children:"Elegí dónde recibir"})]}),a.jsxs(G,{children:[f.map(o=>a.jsx(Ba,{type:"button",onClick:()=>w(o.id),"data-elegida":(d==null?void 0:d.id)===o.id,"aria-pressed":(d==null?void 0:d.id)===o.id,children:a.jsx(Ha,{children:a.jsxs(Da,{children:[a.jsxs(ve,{children:[a.jsx(Ce,{children:o.label}),a.jsx(we,{children:o.address})]}),a.jsx(z,{"data-tone":o.primary?"brand":"success",children:(d==null?void 0:d.id)===o.id?"Elegida":o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(Na,{type:"button",onClick:()=>R(!0),children:[a.jsx(be,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(V,{children:[a.jsxs("div",{children:[a.jsx(S,{children:"Entrega"}),a.jsx(N,{children:"Cómo llega el pedido"})]}),a.jsx(ze,{children:Ie.map(o=>a.jsx(je,{type:"button",onClick:()=>A(o),"data-elegido":x===o,"aria-pressed":x===o,children:o},o))}),$>0&&!L?a.jsxs(Mr,{children:[a.jsx(wa,{size:14,"aria-hidden":"true"}),a.jsxs("span",{children:["Lo que llevás ocupa unos ",$," litros: no entra en la caja de una moto."," ",re?"Va a esperar un repartidor en auto, o llegar en varias entregas.":"Va a llegar en varias entregas."]})]}):null,a.jsxs(G,{children:[a.jsxs(Y,{"data-elegida":b==="cualquiera",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="cualquiera",onChange:()=>q("cualquiera")}),a.jsxs(_,{children:[a.jsx("strong",{children:"Como venga"}),a.jsx("span",{children:L?"Lo toma el primero que pase, en moto o en auto.":"Lo toma quien pueda llevarlo. Puede tardar un poco más."})]}),a.jsx(K,{children:h(v)})]}),!L&&re?a.jsxs(Y,{"data-elegida":b==="auto",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="auto",onChange:()=>q("auto")}),a.jsxs(_,{children:[a.jsx("strong",{children:"Todo junto, en auto"}),a.jsx("span",{children:"Esperás a que lo tome alguien en auto y te llega completo."})]}),a.jsx(K,{children:h(v)})]}):null,e.filter(o=>o.available).length>1?a.jsxs(Y,{"data-elegida":b==="fraccionar",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="fraccionar",onChange:()=>q("fraccionar")}),a.jsxs(_,{children:[a.jsx("strong",{children:"Fraccionar para recibir antes"}),a.jsxs("span",{children:["Se parte en ",F.fraccionar," entregas que pueden tomar repartidores distintos. Pagás un envío por cada una."]})]}),a.jsx(K,{children:h(v*F.fraccionar)})]}):null]})]}),a.jsxs(V,{children:[a.jsxs("div",{children:[a.jsx(S,{children:"Pago"}),a.jsx(N,{children:"Elegí el medio de pago"})]}),a.jsx(ze,{children:C.map(o=>{const t=o.icon;return a.jsxs(je,{type:"button",onClick:()=>Ae(o.id),"data-elegido":y===o.id,"aria-pressed":y===o.id,title:o.detalle,children:[a.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.id)})})]}),u?a.jsxs(Ir,{role:"alert",children:[a.jsx("span",{children:u}),a.jsx(Aa,{error:m,contexto:"Confirmar el pedido"})]}):null,a.jsxs(Cr,{children:[a.jsx(ea,{as:"button",type:"button",onClick:()=>void Be(),disabled:s,children:s?"Confirmando…":(le=C.find(o=>o.id===y))!=null&&le.online?"Confirmar y pagar":"Confirmar pedido"}),a.jsx(aa,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(ga,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>i&&De(i)}),a.jsx(ra,{open:qe,currentId:(d==null?void 0:d.id)??"",startOnNew:!0,onClose:()=>R(!1),onSelect:o=>{w(o),R(!1),T()}})]})}export{Dr as CartScreen};
