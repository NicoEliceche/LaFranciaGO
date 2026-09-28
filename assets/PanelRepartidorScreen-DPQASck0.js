import{j as a,ak as he,al as ge,am as me,c as fe,an as xe,e as O,r as j,aj as Ce,E as F,p as A,q as ye,a as G,b as K,bv as S,d as oe,X as Ee,k as te,aL as Pe,n as De,M as Te,C as Me,S as _e,N as qe}from"./index-BEdt5RCs.js";import{r}from"./react-CKwpxk66.js";import{u as Le}from"./useCurrentPosition-CEJrZTw8.js";import{C as Ne}from"./ChatPedidoDialog-C-oJazgQ.js";import{E as Re,a as re}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{g as Ve,M as Ae,q as L,r as N,s as R,t as V}from"./MiComercioScreenStyled-C8XbFKm5.js";import{a as Fe,R as Oe,b as Ie}from"./ResenaDialogStyled-rTAj6stT.js";import{X as be,aO as Q,T as X,u as je,j as Be,M as $e,aP as Ue,a0 as He,aM as Ge,i as Ke,aQ as Qe}from"./iconos-BnUQAezL.js";import{q as l}from"./estilos-D2nr0glO.js";import"./MotivoDialog-DxO1S7A0.js";const ne=900,se=2500;function Xe({open:e,pedidoId:s,distanciaKm:m,onCerrar:p,onCotizado:t}){const[$,x]=r.useState(""),[c,h]=r.useState(""),[n,g]=r.useState(!1),[z,v]=r.useState(null),y=typeof m=="number"?Math.round(se+m*ne):null;if(r.useEffect(()=>{e&&(x(y!==null?String(y):""),h(""),v(null))},[e,y]),r.useEffect(()=>{if(!e)return;const u=k=>{k.key==="Escape"&&p()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[p,e]),!e)return null;const i=async u=>{u.preventDefault();const k=Number($);if(!(!Number.isFinite(k)||k<=0||n)){g(!0),v(null);try{await Ce.cotizar(s,k,c.trim()||void 0),t(),p()}catch(T){v(T instanceof Error?T.message:"No pudimos enviar tu precio.")}finally{g(!1)}}};return a.jsx(he,{role:"dialog","aria-modal":"true","aria-label":"Cotizar el flete",children:a.jsxs(ge,{children:[a.jsxs(me,{children:[a.jsx(fe,{children:"¿Cuánto cobrás?"}),a.jsx(xe,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(be,{size:18,"aria-hidden":"true"})})]}),z?a.jsx(O,{role:"alert","data-tono":"error",children:z}):null,a.jsxs("form",{onSubmit:i,children:[a.jsxs(Ve,{children:[a.jsx("span",{children:"Tu precio"}),a.jsx("input",{type:"number",min:1,step:"1",value:$,autoFocus:!0,required:!0,onChange:u=>x(u.target.value)})]}),a.jsx(Fe,{children:typeof m=="number"?`Son ${m} km. A ${j(ne)} el kilómetro más ${j(se)} de base daría ${j(y??0)}, pero ponés lo que quieras.`:"No pudimos calcular la distancia. Fijate el detalle antes de poner precio."}),a.jsxs(Oe,{children:[a.jsx("span",{children:"¿Querés aclarar algo?"}),a.jsx(Ie,{value:c,maxLength:300,placeholder:"Lo llevo hoy a la tarde. Necesito una mano para cargar.",onChange:u=>h(u.target.value)})]}),a.jsxs(Re,{children:[a.jsx(re,{type:"button","data-tono":"suave",onClick:p,disabled:n,children:"Volver"}),a.jsx(re,{type:"submit",disabled:n||$.trim()==="",children:n?"Enviando…":"Enviar mi precio"})]})]})]})})}const Ze=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }
`,Je=l.span`
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
`,We=l.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.success};
`,Ye=l.small`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;function ea(e){if(!e)return"";const s=new Date(e.replace(" ","T")+"Z");return Number.isNaN(s.getTime())?"":`${s.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} · ${s.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function aa({esFletero:e}){const[s,m]=r.useState(null),[p,t]=r.useState(null),[$,x]=r.useState(!0);if(r.useEffect(()=>{let n=!0;return(async()=>{try{const z=await S.ganancias();n&&(m(z),t(null))}catch{n&&t("No pudimos cargar tus ganancias.")}finally{n&&x(!1)}})(),()=>{n=!1}},[]),p)return a.jsx(O,{role:"alert","data-tono":"error",children:p});if(!s)return $?null:a.jsx(F,{icon:Q,title:"Sin datos todavía",text:"Cuando entregues tu primer pedido vas a ver acá cuánto ganaste.",dashed:!0});const c=s.total.entregas>0?Math.round(s.total.gano/s.total.entregas):0,h=n=>`${n} ${n===1?e?"viaje":"entrega":e?"viajes":"entregas"}`;return a.jsxs(A,{children:[a.jsxs(Ae,{children:[a.jsxs(L,{children:[a.jsx(N,{children:"Ganaste hoy"}),a.jsx(R,{children:j(s.hoy.gano)}),a.jsx(V,{children:h(s.hoy.entregas)})]}),a.jsxs(L,{children:[a.jsx(N,{children:"Esta semana"}),a.jsx(R,{children:j(s.semana.gano)}),a.jsx(V,{children:h(s.semana.entregas)})]}),a.jsxs(L,{children:[a.jsx(N,{children:"Desde que empezaste"}),a.jsx(R,{children:j(s.total.gano)}),a.jsx(V,{children:h(s.total.entregas)})]}),a.jsxs(L,{children:[a.jsx(N,{children:"Promedio por viaje"}),a.jsx(R,{children:j(c)}),a.jsx(V,{children:"Sobre lo que ya entregaste"})]})]}),a.jsx(ye,{title:e?"Tus viajes":"Lo que entregaste",subtitle:"Los últimos cincuenta, del más nuevo al más viejo."}),s.historial.length===0?a.jsx(F,{icon:Q,title:"Todavía no entregaste nada",text:"Cuando completes tu primer viaje lo vas a ver acá.",dashed:!0}):a.jsx(G,{children:a.jsx(K,{children:s.historial.map((n,g)=>a.jsxs(Ze,{children:[a.jsxs(Je,{children:[n.tipo==="flete"?a.jsx(X,{size:14,"aria-hidden":"true"}):a.jsx(je,{size:14,"aria-hidden":"true"}),n.comercio," → ",n.direccion_texto]}),a.jsx(We,{children:j(n.gano)}),a.jsx(Ye,{children:ea(n.entregado_en)})]},`${n.codigo}-${g}`))})})]})}const I=l.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,B=l.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,M=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,oa=l.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ta=l.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ra=l.div`
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
`;function na({open:e,pedidoId:s,onClose:m,onTomar:p,esFletero:t=!1,yaEsMio:$=!1,onAbrirChat:x}){const[c,h]=r.useState(null),[n,g]=r.useState(null),[z,v]=r.useState(!1);if(r.useEffect(()=>{!e||!s||(h(null),g(null),S.detalle(s).then(h).catch(()=>g("No pudimos cargar el pedido.")))},[e,s]),r.useEffect(()=>{if(!e)return;const i=u=>{u.key==="Escape"&&m()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[m,e]),!e||!s)return null;const y=async()=>{v(!0),g(null);try{await p(s)}catch(i){g(i instanceof Error?i.message:`No pudimos tomar ${t?"el flete":"el pedido"}.`)}finally{v(!1)}};return a.jsx(he,{onClick:m,role:"presentation",children:a.jsxs(ge,{role:"dialog","aria-modal":"true","aria-label":t?"Detalle del flete":"Detalle del pedido",onClick:i=>i.stopPropagation(),children:[a.jsxs(me,{children:[a.jsxs("div",{children:[a.jsxs(fe,{children:[t?"Flete":"Pedido"," ",(c==null?void 0:c.pedido.codigo)??""]}),a.jsx(oe,{children:"Mirá el detalle antes de tomarlo."})]}),a.jsx(xe,{type:"button",onClick:m,"aria-label":"Cerrar",children:a.jsx(be,{size:18,"aria-hidden":"true"})})]}),n?a.jsx(O,{role:"alert","data-tono":"error",children:n}):null,c?a.jsxs(a.Fragment,{children:[a.jsxs(I,{children:[a.jsxs(B,{children:[a.jsx(Be,{size:15,"aria-hidden":"true"}),"Retirás en"]}),a.jsx(M,{children:c.pedido.comercio}),a.jsx(M,{"data-suave":!0,children:c.pedido.comercio_direccion})]}),a.jsxs(I,{children:[a.jsxs(B,{children:[a.jsx($e,{size:15,"aria-hidden":"true"}),"Entregás en"]}),a.jsx(M,{children:c.pedido.direccion_texto}),a.jsxs(M,{"data-suave":!0,children:[c.pedido.cliente,c.pedido.cliente_telefono?` · ${c.pedido.cliente_telefono}`:""]})]}),a.jsxs(I,{children:[a.jsxs(B,{children:[a.jsx(Ue,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),c.items.map((i,u)=>a.jsxs(oa,{children:[a.jsxs(ta,{children:[i.nombre,a.jsxs("span",{children:[" · ",Ee(i.unidad_venta,i.escalon)]})]}),a.jsx("span",{children:j(i.subtotal)})]},`${i.nombre}-${u}`)),a.jsxs(ra,{children:[a.jsxs("span",{children:["Total ",t?"del flete":"del pedido"]}),a.jsx("strong",{children:j(c.pedido.total)})]}),c.pedido.metodo_pago?a.jsxs(M,{"data-suave":!0,children:["Paga con ",c.pedido.metodo_pago]}):null]}),$?x&&c.pedido.id?a.jsxs(te,{type:"button",onClick:()=>x(c.pedido.id),children:["Abrir el chat ",t?"del flete":"del pedido"]}):null:a.jsx(te,{type:"button",onClick:()=>void y(),disabled:z,children:z?"Tomando…":t?"Tomar flete":"Tomar pedido"})]}):a.jsx(oe,{children:"Cargando…"})]})})}const ie=l.div`
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
`,le=l.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,de=l.div`
  display: grid;
  gap: 0.1rem;
`,D=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,U=l.button`
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
`,sa=l.div`
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
`,ia=l.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,la=l.span`
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
`,ce=l.button`
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
`,da=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,H=l.button`
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
`,ca=l.div`
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
`,ua=l.button`
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
`,ue=l.span`
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
`,pa=l.button`
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
`,ha=l.div`
  display: flex;
  align-items: center;
  flex: none;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-inline-start: auto;
`,ga={disponibles:e=>e?"Fletes disponibles":"Pedidos disponibles",mios:()=>"Lo que estás llevando",ganancias:()=>"Cuánto ganaste"},ma={disponibles:e=>e?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.",mios:()=>"Marcá cada paso a medida que avanzás.",ganancias:()=>"Lo que te dejó cada viaje que entregaste."},fa=3e4,xa=2e4,_=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],ya={delivery:[{id:"moto",icono:je},{id:"auto",icono:He}],fletero:[{id:"camioneta",icono:X},{id:"camion",icono:X}]},pe=e=>Math.max(0,_.findIndex(s=>s.estado===e));function Pa(){const{usuario:e}=Pe(),{status:s,error:m,locate:p}=Le(),[t,$]=r.useState(null),[x,c]=r.useState([]),[h,n]=r.useState(null),[g,z]=r.useState(!0),[v,y]=r.useState(null),[i,u]=r.useState(null),[k,T]=r.useState(null),[E,ve]=r.useState([]),[f,q]=r.useState(()=>{const o=new URLSearchParams(window.location.hash.split("?")[1]??"").get("ver");return o==="mios"||o==="ganancias"?o:"disponibles"}),[Z,J]=r.useState(null),[P,W]=r.useState(null),b=(e==null?void 0:e.rol)==="fletero",Y=b?"fletes":"pedidos",C=r.useCallback(async()=>{try{const[{pedidos:o,vehiculo:d},{envios:w}]=await Promise.all([S.disponibles(t==null?void 0:t.lat,t==null?void 0:t.lon),S.misEnvios()]);T(d),c(o),ve(w),n(null)}catch(o){n(o instanceof De&&o.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${Y}.`)}finally{z(!1)}},[t,Y]);r.useEffect(()=>{p(o=>$(o))},[p]),r.useEffect(()=>{C();const o=window.setInterval(()=>void C(),xa);return()=>window.clearInterval(o)},[C]),r.useEffect(()=>{if(!t)return;const o=()=>{S.actualizarUbicacion(t.lat,t.lon).catch(()=>{})};o();const d=window.setInterval(o,fa);return()=>window.clearInterval(d)},[t]);const we=async o=>{await S.tomar(o,t==null?void 0:t.lat,t==null?void 0:t.lon);const d=x.find(w=>w.id===o)??null;y(null),q("mios"),await C(),d&&u(d)},ze=async o=>{T(o);try{await S.elegirVehiculo(o,b?"fletero":"delivery"),await C()}catch{n("No pudimos guardar tu vehículo.")}},Se=async o=>{const d=Math.max(2,o.viajes??2);try{const{estado:w}=await S.pedirFraccionar(o.id,d);n(w==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await C()}catch{n("No pudimos pedir el fraccionamiento.")}},ke=async o=>{const d=_[pe(o.estado)+1];if(d){J(o.id);try{await S.avanzar(o.id,d.estado),await C()}catch{n("No pudimos actualizar el envío.")}finally{J(null)}}};return a.jsxs(Te,{showSearch:!1,children:[a.jsx(Me,{children:a.jsx(_e,{children:a.jsxs(A,{children:[a.jsx(ye,{title:ga[f](b),chip:g||f==="ganancias"?void 0:`${f==="disponibles"?x.length:E.length}`,subtitle:ma[f](b)}),a.jsxs(ca,{children:[a.jsx("span",{children:"Trabajás con"}),(ya[b?"fletero":"delivery"]??[]).map(o=>{const d=o.icono;return a.jsxs(ua,{type:"button",onClick:()=>void ze(o.id),"data-activo":k===o.id,"aria-pressed":k===o.id,children:[a.jsx(d,{size:14,"aria-hidden":"true"}),qe[o.id]]},o.id)})]}),a.jsxs(da,{children:[a.jsx(H,{type:"button",onClick:()=>q("disponibles"),"data-activa":f==="disponibles",children:"Disponibles"}),a.jsxs(H,{type:"button",onClick:()=>q("mios"),"data-activa":f==="mios",children:["Mis envíos",E.length>0?` (${E.length})`:""]}),a.jsx(H,{type:"button",onClick:()=>q("ganancias"),"data-activa":f==="ganancias",children:"Ganancias"})]}),h?a.jsx(O,{role:"alert","data-tono":"error",children:h}):null,f==="ganancias"?a.jsx(aa,{esFletero:b}):null,f==="disponibles"&&!t&&s!=="locating"?a.jsxs(sa,{children:[a.jsx($e,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:m??"Sin tu ubicación no podemos ordenarlos por cercanía."}),a.jsxs("button",{type:"button",onClick:()=>p(o=>$(o)),children:[a.jsx(Ge,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,f==="disponibles"&&!g&&x.length===0&&!h?a.jsx(F,{icon:Ke,title:b?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,f==="mios"&&!g&&E.length===0&&!h?a.jsx(F,{icon:Q,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,f==="mios"?E.map(o=>{const d=pe(o.estado),w=_[d+1];return a.jsx(G,{children:a.jsx(K,{children:a.jsxs(A,{children:[a.jsxs(ie,{children:[a.jsx("span",{children:o.comercio}),a.jsx(le,{children:o.codigo})]}),a.jsxs(de,{children:[a.jsxs(D,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(D,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(D,{"data-suave":!0,children:[o.cliente,o.cliente_telefono?` · ${o.cliente_telefono}`:""," · ",j(o.total),o.metodo_pago?` · ${o.metodo_pago}`:""]})]}),a.jsx(ia,{children:_.map((ee,ae)=>a.jsx(la,{"data-hecho":ae<=d,"data-actual":ae===d,children:ee.corto},ee.estado))}),w?a.jsx(ce,{type:"button",onClick:()=>void ke(o),disabled:Z===o.id,"data-final":w.estado==="entregado",children:Z===o.id?"Guardando…":_[d].accion}):null,a.jsxs(U,{type:"button",onClick:()=>y(o.pedido_id),children:["Ver detalle ",b?"del flete":"del pedido"]}),a.jsxs(U,{type:"button",onClick:()=>u({id:o.pedido_id,codigo:o.codigo,cliente:o.cliente??""}),children:["Abrir chat ",b?"del flete":"del pedido"]})]})})},o.id)}):null,f==="disponibles"&&x.map(o=>a.jsx(G,{children:a.jsx(K,{children:a.jsxs(A,{children:[a.jsxs(ie,{children:[a.jsx("span",{children:o.comercio}),a.jsxs(ha,{children:[o.entraEnTuVehiculo===!1?a.jsxs(ue,{"data-entra":"false",children:["Entra en ",o.viajes," envíos"]}):typeof o.litros=="number"&&o.litros>0?a.jsx(ue,{"data-entra":"true",children:"Entra todo en 1 envío"}):null,typeof o.distanciaKm=="number"?a.jsxs(le,{children:[o.distanciaKm," km"]}):null]})]}),a.jsxs(de,{children:[a.jsxs(D,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(D,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(D,{"data-suave":!0,children:[o.items," ",o.items===1?"producto":"productos"," ·"," ",j(o.total)]})]}),a.jsxs(U,{type:"button",onClick:()=>y(o.id),children:["Ver detalle ",b?"del flete":"del pedido"]}),b?a.jsx(ce,{type:"button",onClick:()=>W(o),children:"Cotizar este flete"}):null,(o.items??0)>1?a.jsxs(pa,{type:"button",onClick:()=>void Se(o),children:[a.jsx(Qe,{size:13,"aria-hidden":"true"})," ",o.entraEnTuVehiculo===!1?`Partir en ${o.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},o.id))]})})}),a.jsx(na,{open:v!==null,pedidoId:v,onClose:()=>y(null),onTomar:we,esFletero:b,yaEsMio:E.some(o=>o.pedido_id===v),onAbrirChat:o=>{const d=E.find(w=>w.pedido_id===o);y(null),u({id:o,codigo:(d==null?void 0:d.codigo)??"",cliente:(d==null?void 0:d.cliente)??""})}}),a.jsx(Xe,{open:P!==null,pedidoId:(P==null?void 0:P.id)??"",distanciaKm:(P==null?void 0:P.distanciaKm)??null,onCerrar:()=>W(null),onCotizado:()=>void C()}),a.jsx(Ne,{rol:"repartidor",open:i!==null,pedidoId:(i==null?void 0:i.id)??null,codigo:(i==null?void 0:i.codigo)??"",cliente:(i==null?void 0:i.cliente)??"",onClose:()=>u(null)})]})}export{Pa as PanelRepartidorScreen};
