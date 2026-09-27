import{$ as We,n as ge,j as a,ap as _e,a0 as Ke,a as Z,b as Te,aq as ee,ar as ae,as as Xe,M as ue,S as N,E as Ye,at as Je,T as Ze,d as ea,r as h,au as S,av as aa,c as Q,ac as ra,ad as oa,aw as ta,ax as ia,h as he,ak as na,ay as sa}from"./index-DvDRT-yM.js";import{r as g,c as la}from"./react-CKwpxk66.js";import{s as ca,m as da}from"./saleUnits-CLP-TCsg.js";import{u as pa,c as ga,b as me,r as ua}from"./cartStore-C9ai85is.js";import{C as ha}from"./ConfirmDialog-BpnnoiDY.js";import{q as r,A as ma}from"./estilos-D2nr0glO.js";import{C as ba,a6 as fa,a7 as xa,a2 as $a,a8 as ya,a9 as ja,m as be,aa as va,T as I,X as Ca,a3 as wa,P as fe,N as ka,ab as Sa}from"./iconos-Biu2Jn_r.js";const za=new Set;let xe=[...We],U=1249;const Ma=()=>za.forEach(e=>e()),Ia=()=>`Hoy ${new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`;function Pa(e){const i=e.filter(l=>l.available);if(i.length===0)return[];const n=new Map;i.forEach(l=>{const u=n.get(l.store)??[];u.push(l),n.set(l.store,u)});const s=[];return n.forEach((l,u)=>{U+=1,s.push({id:`ord-${U}`,code:`#${U}`,store:u,storeId:l[0].store.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),categoryId:l[0].categoryId,total:l.reduce((c,m)=>c+m.subtotal,0),status:"En preparación",state:"proceso",eta:`Llega en ${l[0].eta}`,date:Ia(),itemCount:l.length,items:l.map(c=>({productId:c.id,quantity:c.quantity+1}))})}),xe=[...s,...xe],Ma(),s}const $e=r.button`
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
`,Ta=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-items: start;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Ea=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.84rem;
  line-height: 1.5;
`,Aa=r.textarea`
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
`,qa=r.p`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  color: ${({theme:e})=>e.color.success};
  font-size: 0.86rem;
`;function La({error:e,contexto:i}){var x;const[n,s]=g.useState(!1),[l,u]=g.useState(""),[c,m]=g.useState(!1),[re,f]=g.useState(!1),T=e instanceof ge?e.referencia:null,E=e instanceof ge?((x=e.tecnico)==null?void 0:x.causa)??null:e instanceof Error?e.message:null,w=async()=>{if(!c){m(!0);try{await _e.reportar({comentario:l,registroId:T,pantalla:i??window.location.hash,tecnico:E}),f(!0)}catch{f(!0)}finally{m(!1)}}};return re?a.jsxs(qa,{role:"status",children:[a.jsx(ba,{size:16,"aria-hidden":"true"}),"Gracias, ya nos llegó. Lo vamos a revisar."]}):n?a.jsxs(Ta,{children:[a.jsx(Ea,{children:"Contanos qué estabas haciendo. Va con el detalle técnico, así no hace falta que lo expliques."}),a.jsx(Aa,{value:l,onChange:A=>u(A.target.value),placeholder:"Quise confirmar el pedido y no pasó nada…",rows:3,maxLength:2e3,"aria-label":"Qué pasó",autoFocus:!0}),a.jsxs($e,{type:"button",onClick:()=>void w(),disabled:c,children:[a.jsx(xa,{size:15,"aria-hidden":"true"}),c?"Enviando…":"Enviar al equipo"]})]}):a.jsxs($e,{type:"button",onClick:()=>s(!0),children:[a.jsx(fa,{size:15,"aria-hidden":"true"}),"Avisar del problema"]})}const ye={chico:2,mediano:6,grande:15,voluminoso:40},Fa={moto:60,auto:400,camioneta:2500,camion:12e3};function Oa(e,i){return e==="peso"?(i+1)*.25:e==="pesoMedio"?(i+1)*.5:i+1}function Ra(e){const i=e.reduce((n,s)=>{const l=ye[s.tamano??"mediano"]??ye.mediano;return n+l*Oa(s.saleUnit,s.quantity)},0);return Math.round(i*10)/10}function J(e,i){return Math.max(1,Math.ceil(e/Fa[i]))}function je(e,i){return J(e,i)===1}const Da=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ha=r(Z)`
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
`,G=r(Te)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Ba=r(Te)`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
`,Na=r.button`
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
`,Qa=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ua=r.button`
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
`,Ga=r.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Va=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Wa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const ve=r.button`
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
    ${ee};
    ${ae};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,_a=r.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Ka=r.div`
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
`,Xa=r.span`
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
`,Ya=r.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Ja=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Za=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,V=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,er=r(Z)`
  overflow: hidden;
`,ar=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Ce=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,we=r.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,ke=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,rr=r.span`
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
  ${ee};
  ${ae};
`,or=r.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,tr=r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ir=r.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,nr=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const sr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,lr=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,cr=r.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,dr=r.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,pr=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,gr=r.span`
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
`,ur=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Se=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,ze=r.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,hr=r(Z)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,mr=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`;const br=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,fr=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,xr=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,$r=r.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,yr=r.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,W=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,jr=r.div`
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
`,vr=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Cr=r.div`
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
`,Me=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,wr=ma`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,kr=r.div`
  ${wr}
`,_=r(Ke)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Sr=r.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,zr=r.button`
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

  ${ee};
  ${ae};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,Mr=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,Ie=r.button`
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
`,Ir=r.span`
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
`,X=r.div`
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
`,Y=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  color: ${({theme:e})=>e.color.text};
`,Pr=r.p`
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
`,Tr=r.div`
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
`,P=15e3,Ee=200,Ae=e=>{const i=e.match(/\d+/);return Number((i==null?void 0:i[0])??0)},Er=(e=ia)=>{const i=new Map;return e.forEach(n=>{const s=i.get(n.store);if(s){s.items.push(n),s.itemCount+=n.quantity,s.subtotal+=n.subtotal,s.availableCount+=n.available?1:0,s.unavailableCount+=n.available?0:1;return}i.set(n.store,{store:n.store,items:[n],itemCount:n.quantity,subtotal:n.subtotal,etaLabel:n.eta,availableCount:n.available?1:0,unavailableCount:n.available?0:1})}),[...i.values()].map(n=>{const s=n.items.map(c=>Ae(c.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{...n,etaLabel:s.length<=1||l===u?`${l||0} min`:`${l}–${u} min`}})},Ar=e=>{const i=e.reduce((c,m)=>c+m.subtotal,0),n=i>=P?0:1200,s=e.map(c=>Ae(c.eta)).filter(Boolean),l=s.length?Math.min(...s):0,u=s.length?Math.max(...s):0;return{subtotal:i,deliveryFee:n,total:i+n+Ee,totalUnits:e.filter(c=>c.available).length,unavailableItems:e.filter(c=>!c.available).length,deliveryWindow:s.length?l===u?`${l} min`:`${l}–${u} min`:"Pendiente",freeShippingRemaining:Math.max(P-i,0),freeShippingProgress:Math.min(i/P*100,100)}},qr=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],C=[{id:"mercadopago",label:"Pagar ahora",detalle:"Tarjeta, débito o dinero en cuenta",icon:$a,online:!0},{id:"efectivo",label:"Efectivo al recibir",detalle:"Le pagás al repartidor",icon:ya,online:!1},{id:"transferencia",label:"Transferencia",detalle:"Coordinás con el comercio",icon:ja,online:!1}],Lr=[{label:"Precio final",icon:ka},{label:"Seguí tu pedido",icon:I}],Pe=["Delivery GO","Entrega comercio","Sin retiro"];function Qr(){var ce;const e=pa(),[i,n]=g.useState(null),[s,l]=g.useState(!1),[u,c]=g.useState(null),[m,re]=g.useState(null),{direcciones:f,recargar:T}=Xe(),[E,w]=g.useState(null),[x,A]=g.useState(Pe[0]),[b,q]=g.useState("cualquiera"),$=g.useMemo(()=>Ra(e.filter(o=>o.available)),[e]),L=je($,"moto"),oe=je($,"auto"),F={cualquiera:1,auto:J($,"auto"),fraccionar:Math.max(2,J($,"moto"))},O=F[b],[y,qe]=g.useState(C[0].id),d=f.find(o=>o.id===E)??f.find(o=>o.primary)??f[0]??null,[Le,R]=g.useState(!1),D=la(),te=g.useMemo(()=>Er(e),[e]),{subtotal:Fe,deliveryFee:v,total:Oe,totalUnits:ie,unavailableItems:ne,deliveryWindow:Re,freeShippingRemaining:H,freeShippingProgress:De}=g.useMemo(()=>Ar(e),[e]),se=v*O,He=Oe-v+se,le=ga,Be=async()=>{var de,pe;if(s)return;if(he()&&!d){c("Elegí una dirección de entrega antes de confirmar.");return}l(!0),c(null);const o=e.filter(p=>p.available);if(!he()||o.some(p=>!p.storeId)){Pa(e),me(),D("/pedidos");return}const t=new Map;for(const p of o){const j=t.get(p.storeId)??[];j.push(p),t.set(p.storeId,j)}const Qe=((de=C.find(p=>p.id===y))==null?void 0:de.online)??!1;try{const p=[];let j=0;for(const[B,Ue]of t){const{id:Ge,partes:Ve}=await na.crear({comercioId:B,direccionId:d==null?void 0:d.id,direccionTexto:d==null?void 0:d.address,metodoPago:`${((pe=C.find(k=>k.id===y))==null?void 0:pe.label)??y} · ${x}`,preferenciaEnvio:b,items:Ue.map(k=>({productoId:k.id,escalon:k.quantity}))});p.push(Ge),j+=Ve??1}if(me(),Qe&&p[0])try{const{url:B}=await sa.iniciar(p[0]);window.location.href=B;return}catch{D("/pedidos?pago=pendiente");return}D(j>p.length?`/pedidos?entregas=${j}`:"/pedidos")}catch(p){c(p instanceof Error?p.message:"No pudimos confirmar el pedido.")}finally{l(!1)}},Ne=o=>{ua(o),n(null)};return te.length===0?a.jsx(ue,{showSearch:!1,children:a.jsx(_,{children:a.jsx(N,{children:a.jsx(Ye,{icon:be,title:"Tu carrito está vacío",text:"Explorá los negocios de La Francia y armá tu pedido.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):a.jsxs(ue,{showSearch:!1,children:[a.jsxs(Da,{children:[a.jsx(_,{children:a.jsx(N,{children:a.jsx(Ha,{children:a.jsx(G,{children:a.jsxs(Ga,{children:[a.jsxs(Va,{children:[a.jsx(Wa,{children:a.jsx(Je,{children:"Carrito"})}),a.jsxs(Ja,{children:[a.jsxs(z,{"data-tone":"brand",children:[a.jsx(be,{size:14,"aria-hidden":"true"})," ",ie," ",ie===1?"producto":"productos"]}),a.jsxs(z,{"data-tone":ne>0?"warning":"success",children:[a.jsx(va,{size:14,"aria-hidden":"true"})," ",ne," sin stock"]}),a.jsxs(z,{children:[a.jsx(I,{size:14,"aria-hidden":"true"})," ",Re]})]})]}),a.jsx(_a,{"aria-label":"Progreso de compra",children:qr.map((o,t)=>a.jsxs(Ka,{"data-state":o.state,children:[a.jsx(Xa,{"data-state":o.state,children:t+1}),a.jsx(Ya,{children:o.label})]},o.label))})]})})})})}),a.jsx(_,{children:a.jsx(N,{children:a.jsxs(Za,{children:[a.jsx(V,{children:te.map(o=>a.jsx(er,{children:a.jsxs(G,{children:[a.jsxs(ar,{children:[a.jsxs(Ce,{children:[a.jsx(we,{children:o.store}),a.jsxs(ke,{children:[o.itemCount," ítems · ",o.unavailableCount," pendientes"]})]}),a.jsxs(rr,{children:[a.jsx(I,{size:14,"aria-hidden":"true"})," ",o.etaLabel]})]}),a.jsx(or,{children:o.items.map(t=>a.jsxs(tr,{children:[a.jsx(ir,{children:a.jsx(nr,{src:Ze(t.categoryId),alt:t.product,loading:"lazy"})}),a.jsxs(sr,{children:[a.jsxs(lr,{children:[a.jsxs("div",{style:{minWidth:0},children:[a.jsx(cr,{children:t.product}),a.jsx(ea,{children:t.store})]}),a.jsxs(Sr,{children:[a.jsx(dr,{children:t.available?h(t.subtotal):"—"}),a.jsx(zr,{type:"button","aria-label":`Quitar ${t.product} del carrito`,onClick:()=>n(t.id),children:a.jsx(Ca,{size:15,"aria-hidden":"true"})})]})]}),a.jsxs(pr,{children:[a.jsxs(Mr,{children:[a.jsx(Ie,{type:"button",onClick:()=>le(t.id,-1),disabled:!t.available||t.quantity<=0,"aria-label":`Quitar cantidad de ${t.product}`,children:a.jsx(wa,{size:14,"aria-hidden":"true"})}),a.jsx(Ir,{"aria-live":"polite",children:t.available?ca(t.saleUnit,t.quantity):"0 unid."}),a.jsx(Ie,{type:"button",onClick:()=>le(t.id,1),disabled:!t.available||t.quantity>=da(t.saleUnit),"aria-label":`Agregar cantidad de ${t.product}`,children:a.jsx(fe,{size:14,"aria-hidden":"true"})})]}),a.jsx(gr,{"data-tone":t.statusTone,children:t.statusLabel})]}),a.jsxs(ur,{children:[a.jsxs(Se,{children:[a.jsx(I,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?a.jsx(Se,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?a.jsx(ze,{"data-tone":"warning",children:"Pocas unidades"}):a.jsx(ze,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},o.store))}),a.jsx(hr,{children:a.jsx(G,{children:a.jsxs(mr,{children:[a.jsx(S,{children:"Resumen"}),a.jsxs(br,{children:[a.jsxs(fr,{children:[a.jsx("span",{children:"Envío gratis"}),a.jsx("strong",{children:H>0?`${h(H)} faltan`:"Ya lo alcanzaste"})]}),a.jsx($r,{children:a.jsx(yr,{$value:De})}),a.jsxs(xr,{children:["Umbral estimado ",h(P)," ·"," ",H>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),a.jsxs(jr,{children:[a.jsxs(M,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:h(Fe)})]}),a.jsxs(M,{children:[a.jsxs("span",{children:["Envío estimado",O>1?` · ${O} entregas`:""]}),a.jsx("span",{children:h(se)})]}),a.jsxs(M,{children:[a.jsx("span",{children:"Cargo de servicio"}),a.jsx("span",{children:h(Ee)})]}),a.jsxs(M,{"data-emphasis":"true",children:[a.jsx("strong",{children:"Total estimado"}),a.jsx(aa,{children:h(He)})]})]}),a.jsx(vr,{children:Lr.map(o=>{const t=o.icon;return a.jsxs(Cr,{children:[a.jsx(t,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:o.label})]},o.label)})}),a.jsxs(W,{children:[a.jsxs("div",{children:[a.jsx(S,{children:"Dirección"}),a.jsx(Q,{children:"Elegí dónde recibir"})]}),a.jsxs(V,{children:[f.map(o=>a.jsx(Na,{type:"button",onClick:()=>w(o.id),"data-elegida":(d==null?void 0:d.id)===o.id,"aria-pressed":(d==null?void 0:d.id)===o.id,children:a.jsx(Ba,{children:a.jsxs(Qa,{children:[a.jsxs(Ce,{children:[a.jsx(we,{children:o.label}),a.jsx(ke,{children:o.address})]}),a.jsx(z,{"data-tone":o.primary?"brand":"success",children:(d==null?void 0:d.id)===o.id?"Elegida":o.primary?"Principal":"Guardada"})]})})},o.id)),a.jsxs(Ua,{type:"button",onClick:()=>R(!0),children:[a.jsx(fe,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})]}),a.jsxs(W,{children:[a.jsxs("div",{children:[a.jsx(S,{children:"Entrega"}),a.jsx(Q,{children:"Cómo llega el pedido"})]}),a.jsx(Me,{children:Pe.map(o=>a.jsx(ve,{type:"button",onClick:()=>A(o),"data-elegido":x===o,"aria-pressed":x===o,children:o},o))}),$>0&&!L?a.jsxs(Pr,{children:[a.jsx(Sa,{size:14,"aria-hidden":"true"}),a.jsxs("span",{children:["Lo que llevás ocupa unos ",$," litros: no entra en la caja de una moto."," ",oe?"Va a esperar un repartidor en auto, o llegar en varias entregas.":"Va a llegar en varias entregas."]})]}):null,a.jsxs(V,{children:[a.jsxs(K,{"data-elegida":b==="cualquiera",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="cualquiera",onChange:()=>q("cualquiera")}),a.jsxs(X,{children:[a.jsx("strong",{children:"Como venga"}),a.jsx("span",{children:L?"Lo toma el primero que pase, en moto o en auto.":"Lo toma quien pueda llevarlo. Puede tardar un poco más."})]}),a.jsx(Y,{children:h(v)})]}),!L&&oe?a.jsxs(K,{"data-elegida":b==="auto",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="auto",onChange:()=>q("auto")}),a.jsxs(X,{children:[a.jsx("strong",{children:"Todo junto, en auto"}),a.jsx("span",{children:"Esperás a que lo tome alguien en auto y te llega completo."})]}),a.jsx(Y,{children:h(v)})]}):null,e.filter(o=>o.available).length>1?a.jsxs(K,{"data-elegida":b==="fraccionar",children:[a.jsx("input",{type:"radio",name:"preferencia-envio",checked:b==="fraccionar",onChange:()=>q("fraccionar")}),a.jsxs(X,{children:[a.jsx("strong",{children:"Fraccionar para recibir antes"}),a.jsxs("span",{children:["Se parte en ",F.fraccionar," entregas que pueden tomar repartidores distintos. Pagás un envío por cada una."]})]}),a.jsx(Y,{children:h(v*F.fraccionar)})]}):null]})]}),a.jsxs(W,{children:[a.jsxs("div",{children:[a.jsx(S,{children:"Pago"}),a.jsx(Q,{children:"Elegí el medio de pago"})]}),a.jsx(Me,{children:C.map(o=>{const t=o.icon;return a.jsxs(ve,{type:"button",onClick:()=>qe(o.id),"data-elegido":y===o.id,"aria-pressed":y===o.id,title:o.detalle,children:[a.jsx(t,{size:14,"aria-hidden":"true"}),o.label]},o.id)})})]}),u?a.jsxs(Tr,{role:"alert",children:[a.jsx("span",{children:u}),a.jsx(La,{error:m,contexto:"Confirmar el pedido"})]}):null,a.jsxs(kr,{children:[a.jsx(ra,{as:"button",type:"button",onClick:()=>void Be(),disabled:s,children:s?"Confirmando…":(ce=C.find(o=>o.id===y))!=null&&ce.online?"Confirmar y pagar":"Confirmar pedido"}),a.jsx(oa,{to:"/",children:"Seguir comprando"})]})]})})})]})})})]}),a.jsx(ha,{open:i!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>n(null),onConfirm:()=>i&&Ne(i)}),a.jsx(ta,{open:Le,currentId:(d==null?void 0:d.id)??"",startOnNew:!0,onClose:()=>R(!1),onSelect:o=>{w(o),R(!1),T()}})]})}export{Qr as CartScreen};
