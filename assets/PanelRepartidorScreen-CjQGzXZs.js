import{j as a,ak as ke,al as Se,am as Ee,c as Ce,an as Pe,e as H,r as j,aj as Fe,E as O,p as I,q as Me,a as re,b as ne,bw as z,d as ge,X as Be,k as me,aM as Ie,n as Oe,M as Ge,C as He,S as Ue,N as Ke}from"./index-Cw3JP36P.js";import{r as n,u as Qe}from"./react-CKwpxk66.js";import{u as Xe}from"./useCurrentPosition-CEJrZTw8.js";import{C as Ze}from"./ChatPedidoDialog-C5Q8UtIY.js";import{E as Je,a as fe}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{g as We,M as Ye,q as L,r as A,s as F,t as B}from"./MiComercioScreenStyled-C8XbFKm5.js";import{a as ea,R as aa,b as oa}from"./ResenaDialogStyled-rTAj6stT.js";import{X as qe,aO as se,T as G,u as De,s as ta,i as Re,j as ra,M as Te,aP as na,a0 as sa,aM as ia,aQ as la}from"./iconos-BnUQAezL.js";import{q as r}from"./estilos-D2nr0glO.js";import"./MotivoDialog-rnW798hU.js";const xe=900,ye=2500;function da({open:e,pedidoId:t,distanciaKm:p,onCerrar:u,onCotizado:s}){const[y,m]=n.useState(""),[c,h]=n.useState(""),[i,f]=n.useState(!1),[k,w]=n.useState(null),$=typeof p=="number"?Math.round(ye+p*xe):null;if(n.useEffect(()=>{e&&(m($!==null?String($):""),h(""),w(null))},[e,$]),n.useEffect(()=>{if(!e)return;const g=S=>{S.key==="Escape"&&u()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[u,e]),!e)return null;const d=async g=>{g.preventDefault();const S=Number(y);if(!(!Number.isFinite(S)||S<=0||i)){f(!0),w(null);try{await Fe.cotizar(t,S,c.trim()||void 0),s(),u()}catch(R){w(R instanceof Error?R.message:"No pudimos enviar tu precio.")}finally{f(!1)}}};return a.jsx(ke,{role:"dialog","aria-modal":"true","aria-label":"Cotizar el flete",children:a.jsxs(Se,{children:[a.jsxs(Ee,{children:[a.jsx(Ce,{children:"¿Cuánto cobrás?"}),a.jsx(Pe,{type:"button",onClick:u,"aria-label":"Cerrar",children:a.jsx(qe,{size:18,"aria-hidden":"true"})})]}),k?a.jsx(H,{role:"alert","data-tono":"error",children:k}):null,a.jsxs("form",{onSubmit:d,children:[a.jsxs(We,{children:[a.jsx("span",{children:"Tu precio"}),a.jsx("input",{type:"number",min:1,step:"1",value:y,autoFocus:!0,required:!0,onChange:g=>m(g.target.value)})]}),a.jsx(ea,{children:typeof p=="number"?`Son ${p} km. A ${j(xe)} el kilómetro más ${j(ye)} de base daría ${j($??0)}, pero ponés lo que quieras.`:"No pudimos calcular la distancia. Fijate el detalle antes de poner precio."}),a.jsxs(aa,{children:[a.jsx("span",{children:"¿Querés aclarar algo?"}),a.jsx(oa,{value:c,maxLength:300,placeholder:"Lo llevo hoy a la tarde. Necesito una mano para cargar.",onChange:g=>h(g.target.value)})]}),a.jsxs(Je,{children:[a.jsx(fe,{type:"button","data-tono":"suave",onClick:u,disabled:i,children:"Volver"}),a.jsx(fe,{type:"submit",disabled:i||y.trim()==="",children:i?"Enviando…":"Enviar mi precio"})]})]})]})})}const ca=r.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }
`,ua=r.span`
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
`,pa=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.success};
`,ha=r.small`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;function ga(e){if(!e)return"";const t=new Date(e.replace(" ","T")+"Z");return Number.isNaN(t.getTime())?"":`${t.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} · ${t.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function ma({esFletero:e}){const[t,p]=n.useState(null),[u,s]=n.useState(null),[y,m]=n.useState(!0);if(n.useEffect(()=>{let i=!0;return(async()=>{try{const k=await z.ganancias();i&&(p(k),s(null))}catch{i&&s("No pudimos cargar tus ganancias.")}finally{i&&m(!1)}})(),()=>{i=!1}},[]),u)return a.jsx(H,{role:"alert","data-tono":"error",children:u});if(!t)return y?null:a.jsx(O,{icon:se,title:"Sin datos todavía",text:"Cuando entregues tu primer pedido vas a ver acá cuánto ganaste.",dashed:!0});const c=t.total.entregas>0?Math.round(t.total.gano/t.total.entregas):0,h=i=>`${i} ${i===1?e?"viaje":"entrega":e?"viajes":"entregas"}`;return a.jsxs(I,{children:[a.jsxs(Ye,{children:[a.jsxs(L,{children:[a.jsx(A,{children:"Ganaste hoy"}),a.jsx(F,{children:j(t.hoy.gano)}),a.jsx(B,{children:h(t.hoy.entregas)})]}),a.jsxs(L,{children:[a.jsx(A,{children:"Esta semana"}),a.jsx(F,{children:j(t.semana.gano)}),a.jsx(B,{children:h(t.semana.entregas)})]}),a.jsxs(L,{children:[a.jsx(A,{children:"Desde que empezaste"}),a.jsx(F,{children:j(t.total.gano)}),a.jsx(B,{children:h(t.total.entregas)})]}),a.jsxs(L,{children:[a.jsx(A,{children:"Promedio por viaje"}),a.jsx(F,{children:j(c)}),a.jsx(B,{children:"Sobre lo que ya entregaste"})]})]}),a.jsx(Me,{title:e?"Tus viajes":"Lo que entregaste",subtitle:"Los últimos cincuenta, del más nuevo al más viejo."}),t.historial.length===0?a.jsx(O,{icon:se,title:"Todavía no entregaste nada",text:"Cuando completes tu primer viaje lo vas a ver acá.",dashed:!0}):a.jsx(re,{children:a.jsx(ne,{children:t.historial.map((i,f)=>a.jsxs(ca,{children:[a.jsxs(ua,{children:[i.tipo==="flete"?a.jsx(G,{size:14,"aria-hidden":"true"}):a.jsx(De,{size:14,"aria-hidden":"true"}),i.comercio," → ",i.direccion_texto]}),a.jsx(pa,{children:j(i.gano)}),a.jsx(ha,{children:ga(i.entregado_en)})]},`${i.codigo}-${f}`))})})]})}const fa=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,U=r.article`
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
`;function xa({esFletero:e,enCurso:t,disponibles:p,onVer:u}){const[s,y]=n.useState(null);n.useEffect(()=>{let h=!0;return z.ganancias().then(i=>{h&&y(i)}).catch(()=>{}),()=>{h=!1}},[]);const m=e?"flete":"envío",c=e?"fletes":"envíos";return a.jsxs(fa,{children:[a.jsxs(U,{"data-destacado":t>0,children:[a.jsx(K,{"data-destacado":t>0,children:a.jsx(G,{size:24,"aria-hidden":"true"})}),a.jsxs(Q,{children:[a.jsx(X,{children:t}),a.jsx(Z,{children:t===1?`${m} en curso`:`${c} en curso`})]}),t>0?a.jsxs(J,{type:"button",onClick:()=>u("mios"),children:["Ver ",e?"mis fletes":"mis envíos"]}):null]}),a.jsxs(U,{children:[a.jsx(K,{children:a.jsx(ta,{size:24,"aria-hidden":"true"})}),a.jsxs(Q,{children:[a.jsx(X,{children:s?j(s.hoy.gano):"—"}),a.jsxs(Z,{children:["Ganaste hoy",s?` · ${s.hoy.entregas} ${s.hoy.entregas===1?"entrega":"entregas"}`:""]})]}),a.jsx(J,{type:"button",onClick:()=>u("ganancias"),children:"Ver el detalle"})]}),a.jsxs(U,{"data-destacado":p>0,children:[a.jsx(K,{"data-destacado":p>0,children:a.jsx(Re,{size:24,"aria-hidden":"true"})}),a.jsxs(Q,{children:[a.jsx(X,{children:p}),a.jsx(Z,{children:p===1?`${e?"Flete":"Pedido"} esperando`:`${e?"Fletes":"Pedidos"} esperando`})]}),a.jsxs(J,{type:"button",onClick:()=>u("disponibles"),"data-fuerte":!0,children:["Ver ",e?"los fletes":"los pedidos"]})]})]})}const W=r.div`
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
`,T=r.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ya=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ba=r.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ja=r.div`
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
`;function $a({open:e,pedidoId:t,onClose:p,onTomar:u,esFletero:s=!1,yaEsMio:y=!1,onAbrirChat:m}){const[c,h]=n.useState(null),[i,f]=n.useState(null),[k,w]=n.useState(!1);if(n.useEffect(()=>{!e||!t||(h(null),f(null),z.detalle(t).then(h).catch(()=>f("No pudimos cargar el pedido.")))},[e,t]),n.useEffect(()=>{if(!e)return;const d=g=>{g.key==="Escape"&&p()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[p,e]),!e||!t)return null;const $=async()=>{w(!0),f(null);try{await u(t)}catch(d){f(d instanceof Error?d.message:`No pudimos tomar ${s?"el flete":"el pedido"}.`)}finally{w(!1)}};return a.jsx(ke,{onClick:p,role:"presentation",children:a.jsxs(Se,{role:"dialog","aria-modal":"true","aria-label":s?"Detalle del flete":"Detalle del pedido",onClick:d=>d.stopPropagation(),children:[a.jsxs(Ee,{children:[a.jsxs("div",{children:[a.jsxs(Ce,{children:[s?"Flete":"Pedido"," ",(c==null?void 0:c.pedido.codigo)??""]}),a.jsx(ge,{children:"Mirá el detalle antes de tomarlo."})]}),a.jsx(Pe,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(qe,{size:18,"aria-hidden":"true"})})]}),i?a.jsx(H,{role:"alert","data-tono":"error",children:i}):null,c?a.jsxs(a.Fragment,{children:[a.jsxs(W,{children:[a.jsxs(Y,{children:[a.jsx(ra,{size:15,"aria-hidden":"true"}),"Retirás en"]}),a.jsx(T,{children:c.pedido.comercio}),a.jsx(T,{"data-suave":!0,children:c.pedido.comercio_direccion})]}),a.jsxs(W,{children:[a.jsxs(Y,{children:[a.jsx(Te,{size:15,"aria-hidden":"true"}),"Entregás en"]}),a.jsx(T,{children:c.pedido.direccion_texto}),a.jsxs(T,{"data-suave":!0,children:[c.pedido.cliente,c.pedido.cliente_telefono?` · ${c.pedido.cliente_telefono}`:""]})]}),a.jsxs(W,{children:[a.jsxs(Y,{children:[a.jsx(na,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),c.items.map((d,g)=>a.jsxs(ya,{children:[a.jsxs(ba,{children:[d.nombre,a.jsxs("span",{children:[" · ",Be(d.unidad_venta,d.escalon)]})]}),a.jsx("span",{children:j(d.subtotal)})]},`${d.nombre}-${g}`)),a.jsxs(ja,{children:[a.jsxs("span",{children:["Total ",s?"del flete":"del pedido"]}),a.jsx("strong",{children:j(c.pedido.total)})]}),c.pedido.metodo_pago?a.jsxs(T,{"data-suave":!0,children:["Paga con ",c.pedido.metodo_pago]}):null]}),y?m&&c.pedido.id?a.jsxs(me,{type:"button",onClick:()=>m(c.pedido.id),children:["Abrir el chat ",s?"del flete":"del pedido"]}):null:a.jsx(me,{type:"button",onClick:()=>void $(),disabled:k,children:k?"Tomando…":s?"Tomar flete":"Tomar pedido"})]}):a.jsx(ge,{children:"Cargando…"})]})})}const be=r.div`
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
`,je=r.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,$e=r.div`
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
`,va=r.div`
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
`,wa=r.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,za=r.span`
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
`,ve=r.button`
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
`,ka=r.div`
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
`,Sa=r.div`
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
`,Ea=r.button`
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
`,we=r.span`
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
`,Ca=r.button`
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
`,Pa=r.div`
  display: flex;
  align-items: center;
  flex: none;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-inline-start: auto;
`,Ma=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
  }
`,oe={resumen:()=>"Tu día",disponibles:e=>e?"Fletes disponibles":"Pedidos disponibles",mios:()=>"Lo que estás llevando",ganancias:()=>"Cuánto ganaste"},te={resumen:e=>e?"En qué andás y qué hay para tomar.":"En qué andás y qué hay para llevar.",disponibles:e=>e?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.",mios:()=>"Marcá cada paso a medida que avanzás.",ganancias:()=>"Lo que te dejó cada viaje que entregaste."},qa=3e4,Da=2e4,_=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],Ra={delivery:[{id:"moto",icono:De},{id:"auto",icono:sa}],fletero:[{id:"camioneta",icono:G},{id:"camion",icono:G}]},ze=e=>Math.max(0,_.findIndex(t=>t.estado===e));function Ga(){var pe,he;const{usuario:e}=Ie(),{status:t,error:p,locate:u}=Xe(),[s,y]=n.useState(null),[m,c]=n.useState([]),[h,i]=n.useState(null),[f,k]=n.useState(!0),[w,$]=n.useState(null),[d,g]=n.useState(null),[S,R]=n.useState(null),[E,_e]=n.useState([]),[x,q]=n.useState(()=>{const o=new URLSearchParams(window.location.hash.split("?")[1]??"").get("ver");return o==="mios"||o==="ganancias"||o==="disponibles"?o:"resumen"}),{search:ie}=Qe();n.useEffect(()=>{const o=new URLSearchParams(ie).get("ver");q(o==="mios"||o==="ganancias"||o==="disponibles"?o:"resumen")},[ie]);const[le,de]=n.useState(null),[M,ce]=n.useState(null),b=(e==null?void 0:e.rol)==="fletero",ue=b?"fletes":"pedidos",C=n.useCallback(async()=>{try{const[{pedidos:o,vehiculo:l},{envios:v}]=await Promise.all([z.disponibles(s==null?void 0:s.lat,s==null?void 0:s.lon),z.misEnvios()]);R(l),c(o),_e(v),i(null)}catch(o){i(o instanceof Oe&&o.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${ue}.`)}finally{k(!1)}},[s,ue]);n.useEffect(()=>{u(o=>y(o))},[u]),n.useEffect(()=>{C();const o=window.setInterval(()=>void C(),Da);return()=>window.clearInterval(o)},[C]),n.useEffect(()=>{if(!s)return;const o=()=>{z.actualizarUbicacion(s.lat,s.lon).catch(()=>{})};o();const l=window.setInterval(o,qa);return()=>window.clearInterval(l)},[s]);const Ne=async o=>{const l=await new Promise(P=>{if(s){P(s);return}const N=window.setTimeout(()=>P(null),8e3);u(V=>{window.clearTimeout(N),y({lat:V.lat,lon:V.lon}),P({lat:V.lat,lon:V.lon})})});await z.tomar(o,l==null?void 0:l.lat,l==null?void 0:l.lon);const v=m.find(P=>P.id===o)??null;$(null),q("mios"),await C(),v&&g(v)},Ve=async o=>{R(o);try{await z.elegirVehiculo(o,b?"fletero":"delivery"),await C()}catch{i("No pudimos guardar tu vehículo.")}},Le=async o=>{const l=Math.max(2,o.viajes??2);try{const{estado:v}=await z.pedirFraccionar(o.id,l);i(v==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await C()}catch{i("No pudimos pedir el fraccionamiento.")}},Ae=async o=>{const l=_[ze(o.estado)+1];if(l){de(o.id);try{await z.avanzar(o.id,l.estado),await C()}catch{i("No pudimos actualizar el envío.")}finally{de(null)}}};return a.jsxs(Ge,{showSearch:!1,children:[a.jsx(He,{children:a.jsx(Ue,{children:a.jsxs(I,{children:[a.jsx(Me,{title:((pe=oe[x])==null?void 0:pe.call(oe,b))??"",chip:f||x==="ganancias"?void 0:`${x==="disponibles"?m.length:E.length}`,subtitle:((he=te[x])==null?void 0:he.call(te,b))??""}),a.jsxs(Sa,{children:[a.jsx("span",{children:"Trabajás con"}),(Ra[b?"fletero":"delivery"]??[]).map(o=>{const l=o.icono;return a.jsxs(Ea,{type:"button",onClick:()=>void Ve(o.id),"data-activo":S===o.id,"aria-pressed":S===o.id,children:[a.jsx(l,{size:14,"aria-hidden":"true"}),Ke[o.id]]},o.id)})]}),a.jsxs(ka,{children:[a.jsx(ae,{type:"button",onClick:()=>q("disponibles"),"data-activa":x==="disponibles",children:"Disponibles"}),a.jsxs(ae,{type:"button",onClick:()=>q("mios"),"data-activa":x==="mios",children:["Mis envíos",E.length>0?` (${E.length})`:""]}),a.jsx(ae,{type:"button",onClick:()=>q("ganancias"),"data-activa":x==="ganancias",children:"Ganancias"})]}),h?a.jsx(H,{role:"alert","data-tono":"error",children:h}):null,x==="resumen"?a.jsx(xa,{esFletero:b,enCurso:E.filter(o=>o.estado!=="entregado").length,disponibles:m.length,onVer:q}):null,x==="ganancias"?a.jsx(ma,{esFletero:b}):null,x==="disponibles"&&!s&&t!=="locating"?a.jsxs(va,{children:[a.jsx(Te,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:p??"Sin tu ubicación no podemos ordenarlos por cercanía."}),a.jsxs("button",{type:"button",onClick:()=>u(o=>y(o)),children:[a.jsx(ia,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,x==="disponibles"&&!f&&m.length===0&&!h?a.jsx(O,{icon:Re,title:b?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,x==="mios"&&!f&&E.length===0&&!h?a.jsx(O,{icon:se,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,x==="mios"?E.map(o=>{const l=ze(o.estado),v=_[l+1];return a.jsx(re,{children:a.jsx(ne,{children:a.jsxs(I,{children:[a.jsxs(be,{children:[a.jsx("span",{children:o.comercio}),a.jsx(je,{children:o.codigo})]}),a.jsxs($e,{children:[a.jsxs(D,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(D,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(D,{"data-suave":!0,children:[o.cliente,o.cliente_telefono?` · ${o.cliente_telefono}`:""," · ",j(o.total),o.metodo_pago?` · ${o.metodo_pago}`:""]})]}),a.jsx(wa,{children:_.map((P,N)=>a.jsx(za,{"data-hecho":N<=l,"data-actual":N===l,children:P.corto},P.estado))}),a.jsxs(Ma,{children:[v?a.jsx(ve,{type:"button",onClick:()=>void Ae(o),disabled:le===o.id,"data-final":v.estado==="entregado",children:le===o.id?"Guardando…":_[l].accion}):null,a.jsxs(ee,{type:"button",onClick:()=>$(o.pedido_id),children:["Ver detalle ",b?"del flete":"del pedido"]}),a.jsxs(ee,{type:"button",onClick:()=>g({id:o.pedido_id,codigo:o.codigo,cliente:o.cliente??""}),children:["Abrir chat ",b?"del flete":"del pedido"]})]})]})})},o.id)}):null,x==="disponibles"&&m.map(o=>a.jsx(re,{children:a.jsx(ne,{children:a.jsxs(I,{children:[a.jsxs(be,{children:[a.jsx("span",{children:o.comercio}),a.jsxs(Pa,{children:[o.entraEnTuVehiculo===!1?a.jsxs(we,{"data-entra":"false",children:["Entra en ",o.viajes," envíos"]}):typeof o.litros=="number"&&o.litros>0?a.jsx(we,{"data-entra":"true",children:"Entra todo en 1 envío"}):null,typeof o.distanciaKm=="number"?a.jsxs(je,{children:[o.distanciaKm," km"]}):null]})]}),a.jsxs($e,{children:[a.jsxs(D,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(D,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(D,{"data-suave":!0,children:[o.items," ",o.items===1?"producto":"productos"," ·"," ",j(o.total)]})]}),a.jsxs(ee,{type:"button",onClick:()=>$(o.id),children:["Ver detalle ",b?"del flete":"del pedido"]}),b?a.jsx(ve,{type:"button",onClick:()=>ce(o),children:"Cotizar este flete"}):null,(o.items??0)>1?a.jsxs(Ca,{type:"button",onClick:()=>void Le(o),children:[a.jsx(la,{size:13,"aria-hidden":"true"})," ",o.entraEnTuVehiculo===!1?`Partir en ${o.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},o.id))]})})}),a.jsx($a,{open:w!==null,pedidoId:w,onClose:()=>$(null),onTomar:Ne,esFletero:b,yaEsMio:E.some(o=>o.pedido_id===w),onAbrirChat:o=>{const l=E.find(v=>v.pedido_id===o);$(null),g({id:o,codigo:(l==null?void 0:l.codigo)??"",cliente:(l==null?void 0:l.cliente)??""})}}),a.jsx(da,{open:M!==null,pedidoId:(M==null?void 0:M.id)??"",distanciaKm:(M==null?void 0:M.distanciaKm)??null,onCerrar:()=>ce(null),onCotizado:()=>void C()}),a.jsx(Ze,{rol:"repartidor",open:d!==null,pedidoId:(d==null?void 0:d.id)??null,codigo:(d==null?void 0:d.codigo)??"",cliente:(d==null?void 0:d.cliente)??"",onClose:()=>g(null)})]})}export{Ga as PanelRepartidorScreen};
