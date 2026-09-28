import{j as a,ak as $e,al as ve,am as we,c as ze,an as ke,e as G,r as j,aj as _e,E as B,p as O,q as Se,a as oe,b as te,bw as z,d as ce,X as Ne,k as ue,aM as Ve,n as Ae,M as Fe,C as Ie,S as Oe,N as Be}from"./index-Dpc85RKB.js";import{r as s,u as Ue}from"./react-CKwpxk66.js";import{u as Ge}from"./useCurrentPosition-CEJrZTw8.js";import{C as He}from"./ChatPedidoDialog-BfqBOOrJ.js";import{E as Ke,a as pe}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{g as Qe,M as Xe,q as V,r as A,s as F,t as I}from"./MiComercioScreenStyled-C8XbFKm5.js";import{a as Ze,R as Je,b as We}from"./ResenaDialogStyled-rTAj6stT.js";import{X as Ee,aO as re,T as U,u as Ce,s as Ye,i as Pe,j as ea,M as Me,aP as aa,a0 as oa,aM as ta,aQ as ra}from"./iconos-BnUQAezL.js";import{q as r}from"./estilos-D2nr0glO.js";import"./MotivoDialog-DDqJTCxM.js";const he=900,ge=2500;function sa({open:e,pedidoId:t,distanciaKm:p,onCerrar:u,onCotizado:n}){const[y,m]=s.useState(""),[c,h]=s.useState(""),[i,f]=s.useState(!1),[k,w]=s.useState(null),$=typeof p=="number"?Math.round(ge+p*he):null;if(s.useEffect(()=>{e&&(m($!==null?String($):""),h(""),w(null))},[e,$]),s.useEffect(()=>{if(!e)return;const g=S=>{S.key==="Escape"&&u()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[u,e]),!e)return null;const d=async g=>{g.preventDefault();const S=Number(y);if(!(!Number.isFinite(S)||S<=0||i)){f(!0),w(null);try{await _e.cotizar(t,S,c.trim()||void 0),n(),u()}catch(R){w(R instanceof Error?R.message:"No pudimos enviar tu precio.")}finally{f(!1)}}};return a.jsx($e,{role:"dialog","aria-modal":"true","aria-label":"Cotizar el flete",children:a.jsxs(ve,{children:[a.jsxs(we,{children:[a.jsx(ze,{children:"¿Cuánto cobrás?"}),a.jsx(ke,{type:"button",onClick:u,"aria-label":"Cerrar",children:a.jsx(Ee,{size:18,"aria-hidden":"true"})})]}),k?a.jsx(G,{role:"alert","data-tono":"error",children:k}):null,a.jsxs("form",{onSubmit:d,children:[a.jsxs(Qe,{children:[a.jsx("span",{children:"Tu precio"}),a.jsx("input",{type:"number",min:1,step:"1",value:y,autoFocus:!0,required:!0,onChange:g=>m(g.target.value)})]}),a.jsx(Ze,{children:typeof p=="number"?`Son ${p} km. A ${j(he)} el kilómetro más ${j(ge)} de base daría ${j($??0)}, pero ponés lo que quieras.`:"No pudimos calcular la distancia. Fijate el detalle antes de poner precio."}),a.jsxs(Je,{children:[a.jsx("span",{children:"¿Querés aclarar algo?"}),a.jsx(We,{value:c,maxLength:300,placeholder:"Lo llevo hoy a la tarde. Necesito una mano para cargar.",onChange:g=>h(g.target.value)})]}),a.jsxs(Ke,{children:[a.jsx(pe,{type:"button","data-tono":"suave",onClick:u,disabled:i,children:"Volver"}),a.jsx(pe,{type:"submit",disabled:i||y.trim()==="",children:i?"Enviando…":"Enviar mi precio"})]})]})]})})}const na=r.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }
`,ia=r.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  > svg {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
  }
`,la=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.success};
`,da=r.small`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;function ca(e){if(!e)return"";const t=new Date(e.replace(" ","T")+"Z");return Number.isNaN(t.getTime())?"":`${t.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} · ${t.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function ua({esFletero:e}){const[t,p]=s.useState(null),[u,n]=s.useState(null),[y,m]=s.useState(!0);if(s.useEffect(()=>{let i=!0;return(async()=>{try{const k=await z.ganancias();i&&(p(k),n(null))}catch{i&&n("No pudimos cargar tus ganancias.")}finally{i&&m(!1)}})(),()=>{i=!1}},[]),u)return a.jsx(G,{role:"alert","data-tono":"error",children:u});if(!t)return y?null:a.jsx(B,{icon:re,title:"Sin datos todavía",text:"Cuando entregues tu primer pedido vas a ver acá cuánto ganaste.",dashed:!0});const c=t.total.entregas>0?Math.round(t.total.gano/t.total.entregas):0,h=i=>`${i} ${i===1?e?"viaje":"entrega":e?"viajes":"entregas"}`;return a.jsxs(O,{children:[a.jsxs(Xe,{children:[a.jsxs(V,{children:[a.jsx(A,{children:"Ganaste hoy"}),a.jsx(F,{children:j(t.hoy.gano)}),a.jsx(I,{children:h(t.hoy.entregas)})]}),a.jsxs(V,{children:[a.jsx(A,{children:"Esta semana"}),a.jsx(F,{children:j(t.semana.gano)}),a.jsx(I,{children:h(t.semana.entregas)})]}),a.jsxs(V,{children:[a.jsx(A,{children:"Desde que empezaste"}),a.jsx(F,{children:j(t.total.gano)}),a.jsx(I,{children:h(t.total.entregas)})]}),a.jsxs(V,{children:[a.jsx(A,{children:"Promedio por viaje"}),a.jsx(F,{children:j(c)}),a.jsx(I,{children:"Sobre lo que ya entregaste"})]})]}),a.jsx(Se,{title:e?"Tus viajes":"Lo que entregaste",subtitle:"Los últimos cincuenta, del más nuevo al más viejo."}),t.historial.length===0?a.jsx(B,{icon:re,title:"Todavía no entregaste nada",text:"Cuando completes tu primer viaje lo vas a ver acá.",dashed:!0}):a.jsx(oe,{children:a.jsx(te,{children:t.historial.map((i,f)=>a.jsxs(na,{children:[a.jsxs(ia,{children:[i.tipo==="flete"?a.jsx(U,{size:14,"aria-hidden":"true"}):a.jsx(Ce,{size:14,"aria-hidden":"true"}),i.comercio," → ",i.direccion_texto]}),a.jsx(la,{children:j(i.gano)}),a.jsx(da,{children:ca(i.entregado_en)})]},`${i.codigo}-${f}`))})})]})}const pa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,H=r.article`
  display: grid;
  /* El botón se apoya abajo: con textos de distinto largo, si no, quedaban a
     distinta altura y las tres tarjetas se veían desparejas. */
  grid-template-rows: auto auto 1fr;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};

  /* Lo que tiene algo se despega: de un vistazo se ve si hay trabajo. */
  &[data-destacado='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({theme:e})=>e.shadow.sm};
  }
`,K=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};

  &[data-destacado='true'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,Q=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,X=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  line-height: 1.1;
  /* Los dígitos de la misma caja: un número que baila al refrescarse se lee
     como un error de la pantalla. */
  font-variant-numeric: tabular-nums;
`,Z=r.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,J=r.button`
  align-self: end;
  justify-self: start;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font: inherit;
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;

  /* El de la lista de disponibles va pleno: es lo que se toca para trabajar,
     y los otros dos son para mirar. */
  &[data-fuerte] {
    border-color: transparent;
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-fuerte]:hover {
    background: ${({theme:e})=>e.color.brandHover};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function ha({esFletero:e,enCurso:t,disponibles:p,onVer:u}){const[n,y]=s.useState(null);s.useEffect(()=>{let h=!0;return z.ganancias().then(i=>{h&&y(i)}).catch(()=>{}),()=>{h=!1}},[]);const m=e?"flete":"envío",c=e?"fletes":"envíos";return a.jsxs(pa,{children:[a.jsxs(H,{"data-destacado":t>0,children:[a.jsx(K,{"data-destacado":t>0,children:a.jsx(U,{size:24,"aria-hidden":"true"})}),a.jsxs(Q,{children:[a.jsx(X,{children:t}),a.jsx(Z,{children:t===1?`${m} en curso`:`${c} en curso`})]}),t>0?a.jsxs(J,{type:"button",onClick:()=>u("mios"),children:["Ver ",e?"mis fletes":"mis envíos"]}):null]}),a.jsxs(H,{children:[a.jsx(K,{children:a.jsx(Ye,{size:24,"aria-hidden":"true"})}),a.jsxs(Q,{children:[a.jsx(X,{children:n?j(n.hoy.gano):"—"}),a.jsxs(Z,{children:["Ganaste hoy",n?` · ${n.hoy.entregas} ${n.hoy.entregas===1?"entrega":"entregas"}`:""]})]}),a.jsx(J,{type:"button",onClick:()=>u("ganancias"),children:"Ver el detalle"})]}),a.jsxs(H,{"data-destacado":p>0,children:[a.jsx(K,{"data-destacado":p>0,children:a.jsx(Pe,{size:24,"aria-hidden":"true"})}),a.jsxs(Q,{children:[a.jsx(X,{children:p}),a.jsx(Z,{children:p===1?`${e?"Flete":"Pedido"} esperando`:`${e?"Fletes":"Pedidos"} esperando`})]}),a.jsxs(J,{type:"button",onClick:()=>u("disponibles"),"data-fuerte":!0,children:["Ver ",e?"los fletes":"los pedidos"]})]})]})}const W=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,Y=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,q=r.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ga=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ma=r.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,fa=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
  padding-top: ${({theme:e})=>e.spacing[1]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`;function xa({open:e,pedidoId:t,onClose:p,onTomar:u,esFletero:n=!1,yaEsMio:y=!1,onAbrirChat:m}){const[c,h]=s.useState(null),[i,f]=s.useState(null),[k,w]=s.useState(!1);if(s.useEffect(()=>{!e||!t||(h(null),f(null),z.detalle(t).then(h).catch(()=>f("No pudimos cargar el pedido.")))},[e,t]),s.useEffect(()=>{if(!e)return;const d=g=>{g.key==="Escape"&&p()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[p,e]),!e||!t)return null;const $=async()=>{w(!0),f(null);try{await u(t)}catch(d){f(d instanceof Error?d.message:`No pudimos tomar ${n?"el flete":"el pedido"}.`)}finally{w(!1)}};return a.jsx($e,{onClick:p,role:"presentation",children:a.jsxs(ve,{role:"dialog","aria-modal":"true","aria-label":n?"Detalle del flete":"Detalle del pedido",onClick:d=>d.stopPropagation(),children:[a.jsxs(we,{children:[a.jsxs("div",{children:[a.jsxs(ze,{children:[n?"Flete":"Pedido"," ",(c==null?void 0:c.pedido.codigo)??""]}),a.jsx(ce,{children:"Mirá el detalle antes de tomarlo."})]}),a.jsx(ke,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(Ee,{size:18,"aria-hidden":"true"})})]}),i?a.jsx(G,{role:"alert","data-tono":"error",children:i}):null,c?a.jsxs(a.Fragment,{children:[a.jsxs(W,{children:[a.jsxs(Y,{children:[a.jsx(ea,{size:15,"aria-hidden":"true"}),"Retirás en"]}),a.jsx(q,{children:c.pedido.comercio}),a.jsx(q,{"data-suave":!0,children:c.pedido.comercio_direccion})]}),a.jsxs(W,{children:[a.jsxs(Y,{children:[a.jsx(Me,{size:15,"aria-hidden":"true"}),"Entregás en"]}),a.jsx(q,{children:c.pedido.direccion_texto}),a.jsxs(q,{"data-suave":!0,children:[c.pedido.cliente,c.pedido.cliente_telefono?` · ${c.pedido.cliente_telefono}`:""]})]}),a.jsxs(W,{children:[a.jsxs(Y,{children:[a.jsx(aa,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),c.items.map((d,g)=>a.jsxs(ga,{children:[a.jsxs(ma,{children:[d.nombre,a.jsxs("span",{children:[" · ",Ne(d.unidad_venta,d.escalon)]})]}),a.jsx("span",{children:j(d.subtotal)})]},`${d.nombre}-${g}`)),a.jsxs(fa,{children:[a.jsxs("span",{children:["Total ",n?"del flete":"del pedido"]}),a.jsx("strong",{children:j(c.pedido.total)})]}),c.pedido.metodo_pago?a.jsxs(q,{"data-suave":!0,children:["Paga con ",c.pedido.metodo_pago]}):null]}),y?m&&c.pedido.id?a.jsxs(ue,{type:"button",onClick:()=>m(c.pedido.id),children:["Abrir el chat ",n?"del flete":"del pedido"]}):null:a.jsx(ue,{type:"button",onClick:()=>void $(),disabled:k,children:k?"Tomando…":n?"Tomar flete":"Tomar pedido"})]}):a.jsx(ce,{children:"Cargando…"})]})})}const me=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  > span {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    min-width: 0;
  }
`,fe=r.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,xe=r.div`
  display: grid;
  gap: 0.1rem;
`,D=r.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ee=r.button`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ya=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;

  > svg {
    flex: 0 0 auto;
  }

  > span {
    flex: 1 1 auto;
  }

  > button {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    flex: 0 0 auto;
    min-height: 2rem;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    border-radius: ${({theme:e})=>e.radius.full};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.primary};
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    cursor: pointer;
  }
`,ba=r.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,ja=r.span`
  flex: 1 1 0;
  display: grid;
  gap: 0.25rem;
  font-size: 0.65rem;
  color: ${({theme:e})=>e.color.textMuted};
  text-align: center;
  line-height: 1.2;

  &::before {
    content: '';
    display: block;
    height: 4px;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.border};
  }

  &[data-hecho='true'] {
    color: ${({theme:e})=>e.color.textSoft};

    &::before {
      background: ${({theme:e})=>e.color.primary};
    }
  }

  &[data-actual='true'] {
    color: ${({theme:e})=>e.color.primary};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,ye=r.button`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
  }

  /* Entregar es el paso que cierra el pedido: se distingue del resto para
     que no se toque de apuro creyendo que es "en camino". */
  &[data-final='true'] {
    background: ${({theme:e})=>e.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,$a=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,ae=r.button`
  flex: 1 1 0;
  min-height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activa='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,va=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};

  > span {
    /* Sin crecer: antes empujaba los botones contra el borde derecho. */
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  /* En pantallas angostas el contenido manda: si no entra en una línea,
     baja, en lugar de desbordar. */
  @media (max-width: 380px) {
    flex-wrap: wrap;
  }
`,wa=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activo='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,be=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};

  &[data-entra='true'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-entra='false'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:e})=>e.color.warning};
  }
`,za=r.button`
  width: 100%;
  min-height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px dashed ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 160ms ease, color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }
`,ka=r.div`
  display: flex;
  align-items: center;
  flex: none;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-inline-start: auto;
`,Sa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
  }
`,Ea={disponibles:e=>e?"Fletes disponibles":"Pedidos disponibles",mios:()=>"Lo que estás llevando",ganancias:()=>"Cuánto ganaste"},Ca={disponibles:e=>e?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.",mios:()=>"Marcá cada paso a medida que avanzás.",ganancias:()=>"Lo que te dejó cada viaje que entregaste."},Pa=3e4,Ma=2e4,L=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],Ta={delivery:[{id:"moto",icono:Ce},{id:"auto",icono:oa}],fletero:[{id:"camioneta",icono:U},{id:"camion",icono:U}]},je=e=>Math.max(0,L.findIndex(t=>t.estado===e));function Oa(){const{usuario:e}=Ve(),{status:t,error:p,locate:u}=Ge(),[n,y]=s.useState(null),[m,c]=s.useState([]),[h,i]=s.useState(null),[f,k]=s.useState(!0),[w,$]=s.useState(null),[d,g]=s.useState(null),[S,R]=s.useState(null),[E,Te]=s.useState([]),[x,T]=s.useState(()=>{const o=new URLSearchParams(window.location.hash.split("?")[1]??"").get("ver");return o==="mios"||o==="ganancias"||o==="disponibles"?o:"resumen"}),{search:se}=Ue();s.useEffect(()=>{const o=new URLSearchParams(se).get("ver");T(o==="mios"||o==="ganancias"||o==="disponibles"?o:"resumen")},[se]);const[ne,ie]=s.useState(null),[M,le]=s.useState(null),b=(e==null?void 0:e.rol)==="fletero",de=b?"fletes":"pedidos",C=s.useCallback(async()=>{try{const[{pedidos:o,vehiculo:l},{envios:v}]=await Promise.all([z.disponibles(n==null?void 0:n.lat,n==null?void 0:n.lon),z.misEnvios()]);R(l),c(o),Te(v),i(null)}catch(o){i(o instanceof Ae&&o.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${de}.`)}finally{k(!1)}},[n,de]);s.useEffect(()=>{u(o=>y(o))},[u]),s.useEffect(()=>{C();const o=window.setInterval(()=>void C(),Ma);return()=>window.clearInterval(o)},[C]),s.useEffect(()=>{if(!n)return;const o=()=>{z.actualizarUbicacion(n.lat,n.lon).catch(()=>{})};o();const l=window.setInterval(o,Pa);return()=>window.clearInterval(l)},[n]);const De=async o=>{const l=await new Promise(P=>{if(n){P(n);return}const _=window.setTimeout(()=>P(null),8e3);u(N=>{window.clearTimeout(_),y({lat:N.lat,lon:N.lon}),P({lat:N.lat,lon:N.lon})})});await z.tomar(o,l==null?void 0:l.lat,l==null?void 0:l.lon);const v=m.find(P=>P.id===o)??null;$(null),T("mios"),await C(),v&&g(v)},Re=async o=>{R(o);try{await z.elegirVehiculo(o,b?"fletero":"delivery"),await C()}catch{i("No pudimos guardar tu vehículo.")}},qe=async o=>{const l=Math.max(2,o.viajes??2);try{const{estado:v}=await z.pedirFraccionar(o.id,l);i(v==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await C()}catch{i("No pudimos pedir el fraccionamiento.")}},Le=async o=>{const l=L[je(o.estado)+1];if(l){ie(o.id);try{await z.avanzar(o.id,l.estado),await C()}catch{i("No pudimos actualizar el envío.")}finally{ie(null)}}};return a.jsxs(Fe,{showSearch:!1,children:[a.jsx(Ie,{children:a.jsx(Oe,{children:a.jsxs(O,{children:[a.jsx(Se,{title:Ea[x](b),chip:f||x==="ganancias"?void 0:`${x==="disponibles"?m.length:E.length}`,subtitle:Ca[x](b)}),a.jsxs(va,{children:[a.jsx("span",{children:"Trabajás con"}),(Ta[b?"fletero":"delivery"]??[]).map(o=>{const l=o.icono;return a.jsxs(wa,{type:"button",onClick:()=>void Re(o.id),"data-activo":S===o.id,"aria-pressed":S===o.id,children:[a.jsx(l,{size:14,"aria-hidden":"true"}),Be[o.id]]},o.id)})]}),a.jsxs($a,{children:[a.jsx(ae,{type:"button",onClick:()=>T("disponibles"),"data-activa":x==="disponibles",children:"Disponibles"}),a.jsxs(ae,{type:"button",onClick:()=>T("mios"),"data-activa":x==="mios",children:["Mis envíos",E.length>0?` (${E.length})`:""]}),a.jsx(ae,{type:"button",onClick:()=>T("ganancias"),"data-activa":x==="ganancias",children:"Ganancias"})]}),h?a.jsx(G,{role:"alert","data-tono":"error",children:h}):null,x==="resumen"?a.jsx(ha,{esFletero:b,enCurso:E.filter(o=>o.estado!=="entregado").length,disponibles:m.length,onVer:T}):null,x==="ganancias"?a.jsx(ua,{esFletero:b}):null,x==="disponibles"&&!n&&t!=="locating"?a.jsxs(ya,{children:[a.jsx(Me,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:p??"Sin tu ubicación no podemos ordenarlos por cercanía."}),a.jsxs("button",{type:"button",onClick:()=>u(o=>y(o)),children:[a.jsx(ta,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,x==="disponibles"&&!f&&m.length===0&&!h?a.jsx(B,{icon:Pe,title:b?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,x==="mios"&&!f&&E.length===0&&!h?a.jsx(B,{icon:re,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,x==="mios"?E.map(o=>{const l=je(o.estado),v=L[l+1];return a.jsx(oe,{children:a.jsx(te,{children:a.jsxs(O,{children:[a.jsxs(me,{children:[a.jsx("span",{children:o.comercio}),a.jsx(fe,{children:o.codigo})]}),a.jsxs(xe,{children:[a.jsxs(D,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(D,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(D,{"data-suave":!0,children:[o.cliente,o.cliente_telefono?` · ${o.cliente_telefono}`:""," · ",j(o.total),o.metodo_pago?` · ${o.metodo_pago}`:""]})]}),a.jsx(ba,{children:L.map((P,_)=>a.jsx(ja,{"data-hecho":_<=l,"data-actual":_===l,children:P.corto},P.estado))}),a.jsxs(Sa,{children:[v?a.jsx(ye,{type:"button",onClick:()=>void Le(o),disabled:ne===o.id,"data-final":v.estado==="entregado",children:ne===o.id?"Guardando…":L[l].accion}):null,a.jsxs(ee,{type:"button",onClick:()=>$(o.pedido_id),children:["Ver detalle ",b?"del flete":"del pedido"]}),a.jsxs(ee,{type:"button",onClick:()=>g({id:o.pedido_id,codigo:o.codigo,cliente:o.cliente??""}),children:["Abrir chat ",b?"del flete":"del pedido"]})]})]})})},o.id)}):null,x==="disponibles"&&m.map(o=>a.jsx(oe,{children:a.jsx(te,{children:a.jsxs(O,{children:[a.jsxs(me,{children:[a.jsx("span",{children:o.comercio}),a.jsxs(ka,{children:[o.entraEnTuVehiculo===!1?a.jsxs(be,{"data-entra":"false",children:["Entra en ",o.viajes," envíos"]}):typeof o.litros=="number"&&o.litros>0?a.jsx(be,{"data-entra":"true",children:"Entra todo en 1 envío"}):null,typeof o.distanciaKm=="number"?a.jsxs(fe,{children:[o.distanciaKm," km"]}):null]})]}),a.jsxs(xe,{children:[a.jsxs(D,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(D,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(D,{"data-suave":!0,children:[o.items," ",o.items===1?"producto":"productos"," ·"," ",j(o.total)]})]}),a.jsxs(ee,{type:"button",onClick:()=>$(o.id),children:["Ver detalle ",b?"del flete":"del pedido"]}),b?a.jsx(ye,{type:"button",onClick:()=>le(o),children:"Cotizar este flete"}):null,(o.items??0)>1?a.jsxs(za,{type:"button",onClick:()=>void qe(o),children:[a.jsx(ra,{size:13,"aria-hidden":"true"})," ",o.entraEnTuVehiculo===!1?`Partir en ${o.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},o.id))]})})}),a.jsx(xa,{open:w!==null,pedidoId:w,onClose:()=>$(null),onTomar:De,esFletero:b,yaEsMio:E.some(o=>o.pedido_id===w),onAbrirChat:o=>{const l=E.find(v=>v.pedido_id===o);$(null),g({id:o,codigo:(l==null?void 0:l.codigo)??"",cliente:(l==null?void 0:l.cliente)??""})}}),a.jsx(sa,{open:M!==null,pedidoId:(M==null?void 0:M.id)??"",distanciaKm:(M==null?void 0:M.distanciaKm)??null,onCerrar:()=>le(null),onCotizado:()=>void C()}),a.jsx(He,{rol:"repartidor",open:d!==null,pedidoId:(d==null?void 0:d.id)??null,codigo:(d==null?void 0:d.codigo)??"",cliente:(d==null?void 0:d.cliente)??"",onClose:()=>g(null)})]})}export{Oa as PanelRepartidorScreen};
