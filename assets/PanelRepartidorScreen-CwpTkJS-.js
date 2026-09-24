import{j as a,af as pe,ag as he,ah as ge,c as me,ai as fe,e as I,r as b,ae as ke,E as A,p as F,q as xe,a as H,b as G,bi as w,d as ae,k as Ce,aC as Ee,n as Pe,M as De,C as Te,S as Me,N as qe}from"./index-PN1N2eMW.js";import{r as t}from"./react-6hK8W6IX.js";import{u as Ne}from"./useCurrentPosition-Dx7CHxa8.js";import{C as _e}from"./ChatPedidoDialog-BoGh-s-8.js";import{E as Le,a as oe}from"./ChatPedidoDialogStyled-MvteS_Yt.js";import{g as Re,M as Ve,q as _,r as L,s as R,t as V}from"./MiComercioScreenStyled-DB8QgGpz.js";import{a as Fe,R as Ae,b as Ie}from"./ResenaDialogStyled-JI9jT6su.js";import{X as ye,aM as K,T as Q,u as be,i as Oe,M as je,aN as Be,_ as Ue,aK as He,h as Ge,aO as Ke}from"./iconos-D4KLLVJ2.js";import{q as i}from"./estilos-DzHAJWDP.js";import{s as Qe}from"./saleUnits-CLP-TCsg.js";import"./MotivoDialog-C98BhKvp.js";const te=900,re=2500;function Xe({open:e,pedidoId:n,distanciaKm:h,onCerrar:p,onCotizado:r}){const[l,f]=t.useState(""),[v,u]=t.useState(""),[s,x]=t.useState(!1),[z,c]=t.useState(null),g=typeof h=="number"?Math.round(re+h*te):null;if(t.useEffect(()=>{e&&(f(g!==null?String(g):""),u(""),c(null))},[e,g]),t.useEffect(()=>{if(!e)return;const j=S=>{S.key==="Escape"&&p()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[p,e]),!e)return null;const y=async j=>{j.preventDefault();const S=Number(l);if(!(!Number.isFinite(S)||S<=0||s)){x(!0),c(null);try{await ke.cotizar(n,S,v.trim()||void 0),r(),p()}catch(D){c(D instanceof Error?D.message:"No pudimos enviar tu precio.")}finally{x(!1)}}};return a.jsx(pe,{role:"dialog","aria-modal":"true","aria-label":"Cotizar el flete",children:a.jsxs(he,{children:[a.jsxs(ge,{children:[a.jsx(me,{children:"¿Cuánto cobrás?"}),a.jsx(fe,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(ye,{size:18,"aria-hidden":"true"})})]}),z?a.jsx(I,{role:"alert","data-tono":"error",children:z}):null,a.jsxs("form",{onSubmit:y,children:[a.jsxs(Re,{children:[a.jsx("span",{children:"Tu precio"}),a.jsx("input",{type:"number",min:1,step:"1",value:l,autoFocus:!0,required:!0,onChange:j=>f(j.target.value)})]}),a.jsx(Fe,{children:typeof h=="number"?`Son ${h} km. A ${b(te)} el kilómetro más ${b(re)} de base daría ${b(g??0)}, pero ponés lo que quieras.`:"No pudimos calcular la distancia. Fijate el detalle antes de poner precio."}),a.jsxs(Ae,{children:[a.jsx("span",{children:"¿Querés aclarar algo?"}),a.jsx(Ie,{value:v,maxLength:300,placeholder:"Lo llevo hoy a la tarde. Necesito una mano para cargar.",onChange:j=>u(j.target.value)})]}),a.jsxs(Le,{children:[a.jsx(oe,{type:"button","data-tono":"suave",onClick:p,disabled:s,children:"Volver"}),a.jsx(oe,{type:"submit",disabled:s||l.trim()==="",children:s?"Enviando…":"Enviar mi precio"})]})]})]})})}const Ze=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }
`,Je=i.span`
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
`,We=i.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.success};
`,Ye=i.small`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;function ea(e){if(!e)return"";const n=new Date(e.replace(" ","T")+"Z");return Number.isNaN(n.getTime())?"":`${n.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} · ${n.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function aa({esFletero:e}){const[n,h]=t.useState(null),[p,r]=t.useState(null),[l,f]=t.useState(!0);if(t.useEffect(()=>{let s=!0;return(async()=>{try{const z=await w.ganancias();s&&(h(z),r(null))}catch{s&&r("No pudimos cargar tus ganancias.")}finally{s&&f(!1)}})(),()=>{s=!1}},[]),p)return a.jsx(I,{role:"alert","data-tono":"error",children:p});if(!n)return l?null:a.jsx(A,{icon:K,title:"Sin datos todavía",text:"Cuando entregues tu primer pedido vas a ver acá cuánto ganaste.",dashed:!0});const v=n.total.entregas>0?Math.round(n.total.gano/n.total.entregas):0,u=s=>`${s} ${s===1?e?"viaje":"entrega":e?"viajes":"entregas"}`;return a.jsxs(F,{children:[a.jsxs(Ve,{children:[a.jsxs(_,{children:[a.jsx(L,{children:"Ganaste hoy"}),a.jsx(R,{children:b(n.hoy.gano)}),a.jsx(V,{children:u(n.hoy.entregas)})]}),a.jsxs(_,{children:[a.jsx(L,{children:"Esta semana"}),a.jsx(R,{children:b(n.semana.gano)}),a.jsx(V,{children:u(n.semana.entregas)})]}),a.jsxs(_,{children:[a.jsx(L,{children:"Desde que empezaste"}),a.jsx(R,{children:b(n.total.gano)}),a.jsx(V,{children:u(n.total.entregas)})]}),a.jsxs(_,{children:[a.jsx(L,{children:"Promedio por viaje"}),a.jsx(R,{children:b(v)}),a.jsx(V,{children:"Sobre lo que ya entregaste"})]})]}),a.jsx(xe,{title:e?"Tus viajes":"Lo que entregaste",subtitle:"Los últimos cincuenta, del más nuevo al más viejo."}),n.historial.length===0?a.jsx(A,{icon:K,title:"Todavía no entregaste nada",text:"Cuando completes tu primer viaje lo vas a ver acá.",dashed:!0}):a.jsx(H,{children:a.jsx(G,{children:n.historial.map((s,x)=>a.jsxs(Ze,{children:[a.jsxs(Je,{children:[s.tipo==="flete"?a.jsx(Q,{size:14,"aria-hidden":"true"}):a.jsx(be,{size:14,"aria-hidden":"true"}),s.comercio," → ",s.direccion_texto]}),a.jsx(We,{children:b(s.gano)}),a.jsx(Ye,{children:ea(s.entregado_en)})]},`${s.codigo}-${x}`))})})]})}const O=i.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,B=i.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,M=i.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,oa=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ta=i.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ra=i.div`
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
`;function sa({open:e,pedidoId:n,onClose:h,onTomar:p,esFletero:r=!1}){const[l,f]=t.useState(null),[v,u]=t.useState(null),[s,x]=t.useState(!1);if(t.useEffect(()=>{!e||!n||(f(null),u(null),w.detalle(n).then(f).catch(()=>u("No pudimos cargar el pedido.")))},[e,n]),t.useEffect(()=>{if(!e)return;const c=g=>{g.key==="Escape"&&h()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[h,e]),!e||!n)return null;const z=async()=>{x(!0),u(null);try{await p(n)}catch(c){u(c instanceof Error?c.message:`No pudimos tomar ${r?"el flete":"el pedido"}.`)}finally{x(!1)}};return a.jsx(pe,{onClick:h,role:"presentation",children:a.jsxs(he,{role:"dialog","aria-modal":"true","aria-label":r?"Detalle del flete":"Detalle del pedido",onClick:c=>c.stopPropagation(),children:[a.jsxs(ge,{children:[a.jsxs("div",{children:[a.jsxs(me,{children:[r?"Flete":"Pedido"," ",(l==null?void 0:l.pedido.codigo)??""]}),a.jsx(ae,{children:"Mirá el detalle antes de tomarlo."})]}),a.jsx(fe,{type:"button",onClick:h,"aria-label":"Cerrar",children:a.jsx(ye,{size:18,"aria-hidden":"true"})})]}),v?a.jsx(I,{role:"alert","data-tono":"error",children:v}):null,l?a.jsxs(a.Fragment,{children:[a.jsxs(O,{children:[a.jsxs(B,{children:[a.jsx(Oe,{size:15,"aria-hidden":"true"}),"Retirás en"]}),a.jsx(M,{children:l.pedido.comercio}),a.jsx(M,{"data-suave":!0,children:l.pedido.comercio_direccion})]}),a.jsxs(O,{children:[a.jsxs(B,{children:[a.jsx(je,{size:15,"aria-hidden":"true"}),"Entregás en"]}),a.jsx(M,{children:l.pedido.direccion_texto}),a.jsxs(M,{"data-suave":!0,children:[l.pedido.cliente,l.pedido.cliente_telefono?` · ${l.pedido.cliente_telefono}`:""]})]}),a.jsxs(O,{children:[a.jsxs(B,{children:[a.jsx(Be,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),l.items.map((c,g)=>a.jsxs(oa,{children:[a.jsxs(ta,{children:[c.nombre,a.jsxs("span",{children:[" · ",Qe(c.unidad_venta,c.escalon)]})]}),a.jsx("span",{children:b(c.subtotal)})]},`${c.nombre}-${g}`)),a.jsxs(ra,{children:[a.jsxs("span",{children:["Total ",r?"del flete":"del pedido"]}),a.jsx("strong",{children:b(l.pedido.total)})]}),l.pedido.metodo_pago?a.jsxs(M,{"data-suave":!0,children:["Paga con ",l.pedido.metodo_pago]}):null]}),a.jsx(Ce,{type:"button",onClick:()=>void z(),disabled:s,children:s?"Tomando…":r?"Tomar flete":"Tomar pedido"})]}):a.jsx(ae,{children:"Cargando…"})]})})}const se=i.div`
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
`,ne=i.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,ie=i.div`
  display: grid;
  gap: 0.1rem;
`,P=i.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,le=i.button`
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
`,na=i.div`
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
`,ia=i.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,la=i.span`
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
`,ce=i.button`
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
`,ca=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,U=i.button`
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
`,da=i.div`
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
`,ua=i.button`
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
`,de=i.span`
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
`,pa=i.button`
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
`,ha={disponibles:e=>e?"Fletes disponibles":"Pedidos disponibles",mios:()=>"Lo que estás llevando",ganancias:()=>"Cuánto ganaste"},ga={disponibles:e=>e?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.",mios:()=>"Marcá cada paso a medida que avanzás.",ganancias:()=>"Lo que te dejó cada viaje que entregaste."},ma=3e4,fa=2e4,q=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],xa={delivery:[{id:"moto",icono:be},{id:"auto",icono:Ue}],fletero:[{id:"camioneta",icono:Q},{id:"camion",icono:Q}]},ue=e=>Math.max(0,q.findIndex(n=>n.estado===e));function Pa(){const{usuario:e}=Ee(),{status:n,error:h,locate:p}=Ne(),[r,l]=t.useState(null),[f,v]=t.useState([]),[u,s]=t.useState(null),[x,z]=t.useState(!0),[c,g]=t.useState(null),[y,j]=t.useState(null),[S,D]=t.useState(null),[T,$e]=t.useState([]),[m,N]=t.useState(()=>{const o=new URLSearchParams(window.location.hash.split("?")[1]??"").get("ver");return o==="mios"||o==="ganancias"?o:"disponibles"}),[X,Z]=t.useState(null),[E,J]=t.useState(null),$=(e==null?void 0:e.rol)==="fletero",W=$?"fletes":"pedidos",k=t.useCallback(async()=>{try{const[{pedidos:o,vehiculo:d},{envios:C}]=await Promise.all([w.disponibles(r==null?void 0:r.lat,r==null?void 0:r.lon),w.misEnvios()]);D(d),v(o),$e(C),s(null)}catch(o){s(o instanceof Pe&&o.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${W}.`)}finally{z(!1)}},[r,W]);t.useEffect(()=>{p(o=>l(o))},[p]),t.useEffect(()=>{k();const o=window.setInterval(()=>void k(),fa);return()=>window.clearInterval(o)},[k]),t.useEffect(()=>{if(!r)return;const o=()=>{w.actualizarUbicacion(r.lat,r.lon).catch(()=>{})};o();const d=window.setInterval(o,ma);return()=>window.clearInterval(d)},[r]);const ve=async o=>{await w.tomar(o,r==null?void 0:r.lat,r==null?void 0:r.lon);const d=f.find(C=>C.id===o)??null;g(null),N("mios"),await k(),d&&j(d)},we=async o=>{D(o);try{await w.elegirVehiculo(o,$?"fletero":"delivery"),await k()}catch{s("No pudimos guardar tu vehículo.")}},ze=async o=>{const d=Math.max(2,o.viajes??2);try{const{estado:C}=await w.pedirFraccionar(o.id,d);s(C==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await k()}catch{s("No pudimos pedir el fraccionamiento.")}},Se=async o=>{const d=q[ue(o.estado)+1];if(d){Z(o.id);try{await w.avanzar(o.id,d.estado),await k()}catch{s("No pudimos actualizar el envío.")}finally{Z(null)}}};return a.jsxs(De,{showSearch:!1,children:[a.jsx(Te,{children:a.jsx(Me,{children:a.jsxs(F,{children:[a.jsx(xe,{title:ha[m]($),chip:x||m==="ganancias"?void 0:`${m==="disponibles"?f.length:T.length}`,subtitle:ga[m]($)}),a.jsxs(da,{children:[a.jsx("span",{children:"Trabajás con"}),(xa[$?"fletero":"delivery"]??[]).map(o=>{const d=o.icono;return a.jsxs(ua,{type:"button",onClick:()=>void we(o.id),"data-activo":S===o.id,"aria-pressed":S===o.id,children:[a.jsx(d,{size:14,"aria-hidden":"true"}),qe[o.id]]},o.id)})]}),a.jsxs(ca,{children:[a.jsx(U,{type:"button",onClick:()=>N("disponibles"),"data-activa":m==="disponibles",children:"Disponibles"}),a.jsxs(U,{type:"button",onClick:()=>N("mios"),"data-activa":m==="mios",children:["Mis envíos",T.length>0?` (${T.length})`:""]}),a.jsx(U,{type:"button",onClick:()=>N("ganancias"),"data-activa":m==="ganancias",children:"Ganancias"})]}),u?a.jsx(I,{role:"alert","data-tono":"error",children:u}):null,m==="ganancias"?a.jsx(aa,{esFletero:$}):null,m==="disponibles"&&!r&&n!=="locating"?a.jsxs(na,{children:[a.jsx(je,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:h??"Sin tu ubicación no podemos ordenarlos por cercanía."}),a.jsxs("button",{type:"button",onClick:()=>p(o=>l(o)),children:[a.jsx(He,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,m==="disponibles"&&!x&&f.length===0&&!u?a.jsx(A,{icon:Ge,title:$?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,m==="mios"&&!x&&T.length===0&&!u?a.jsx(A,{icon:K,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,m==="mios"?T.map(o=>{const d=ue(o.estado),C=q[d+1];return a.jsx(H,{children:a.jsx(G,{children:a.jsxs(F,{children:[a.jsxs(se,{children:[a.jsx("span",{children:o.comercio}),a.jsx(ne,{children:o.codigo})]}),a.jsxs(ie,{children:[a.jsxs(P,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(P,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(P,{"data-suave":!0,children:[o.cliente,o.cliente_telefono?` · ${o.cliente_telefono}`:""," · ",b(o.total),o.metodo_pago?` · ${o.metodo_pago}`:""]})]}),a.jsx(ia,{children:q.map((Y,ee)=>a.jsx(la,{"data-hecho":ee<=d,"data-actual":ee===d,children:Y.corto},Y.estado))}),C?a.jsx(ce,{type:"button",onClick:()=>void Se(o),disabled:X===o.id,"data-final":C.estado==="entregado",children:X===o.id?"Guardando…":q[d].accion}):null,a.jsxs(le,{type:"button",onClick:()=>g(o.pedido_id),children:["Ver detalle ",$?"del flete":"del pedido"]})]})})},o.id)}):null,m==="disponibles"&&f.map(o=>a.jsx(H,{children:a.jsx(G,{children:a.jsxs(F,{children:[a.jsxs(se,{children:[a.jsx("span",{children:o.comercio}),o.entraEnTuVehiculo===!1?a.jsxs(de,{"data-entra":"false",children:[o.viajes," viajes"]}):typeof o.litros=="number"&&o.litros>0?a.jsx(de,{"data-entra":"true",children:"Entra"}):null,typeof o.distanciaKm=="number"?a.jsxs(ne,{children:[o.distanciaKm," km"]}):null]}),a.jsxs(ie,{children:[a.jsxs(P,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(P,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(P,{"data-suave":!0,children:[o.items," ",o.items===1?"producto":"productos"," ·"," ",b(o.total)]})]}),a.jsxs(le,{type:"button",onClick:()=>g(o.id),children:["Ver detalle ",$?"del flete":"del pedido"]}),$?a.jsx(ce,{type:"button",onClick:()=>J(o),children:"Cotizar este flete"}):null,(o.items??0)>1?a.jsxs(pa,{type:"button",onClick:()=>void ze(o),children:[a.jsx(Ke,{size:13,"aria-hidden":"true"})," ",o.entraEnTuVehiculo===!1?`Partir en ${o.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},o.id))]})})}),a.jsx(sa,{open:c!==null,pedidoId:c,onClose:()=>g(null),onTomar:ve,esFletero:$}),a.jsx(Xe,{open:E!==null,pedidoId:(E==null?void 0:E.id)??"",distanciaKm:(E==null?void 0:E.distanciaKm)??null,onCerrar:()=>J(null),onCotizado:()=>void k()}),a.jsx(_e,{rol:"repartidor",open:y!==null,pedidoId:(y==null?void 0:y.id)??null,codigo:(y==null?void 0:y.codigo)??"",cliente:(y==null?void 0:y.cliente)??"",onClose:()=>j(null)})]})}export{Pa as PanelRepartidorScreen};
