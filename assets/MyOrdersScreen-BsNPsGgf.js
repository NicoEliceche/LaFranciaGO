import{aj as E,j as a,e as $,r as M,Q as D,R,T as I,ak as N,al as _,am as B,c as H,an as Y,ao as X,h as G,ap as F,M as Q,w as U,S,q as V,G as Z,I as J,C as K,aq as W,ar as ee,as as ae,at as z,E as te}from"./index-B-yV5OnI.js";import{r,L as oe}from"./react-CKwpxk66.js";import{q as d}from"./estilos-D2nr0glO.js";import{T as se,C as re,a4 as ne,i as q,p as ie,X as le,t as A,a5 as ce}from"./iconos-24LHuulG.js";import{M as de}from"./MotivoDialog-B1BeFTtS.js";import{E as ue,a as k}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{R as v,a as P,b as pe,E as ge,c as he}from"./ResenaDialogStyled-rTAj6stT.js";const me=d.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,fe=d.div`
  display: grid;
  gap: 0.3rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};

  &[data-estado='aceptada'] {
    border-color: ${({theme:e})=>e.color.success};
  }

  &[data-estado='rechazada'],
  &[data-estado='vencida'] {
    opacity: 0.55;
  }
`,ye=d.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,xe=d.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
`,w=d.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textMuted};
  }

  &[data-elegida] {
    color: ${({theme:e})=>e.color.success};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,je=d.button`
  justify-self: start;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`;function be({pedidoId:e,onAceptada:i}){const[l,n]=r.useState([]),[p,c]=r.useState(null),[u,h]=r.useState(null),t=r.useCallback(async()=>{try{const{cotizaciones:s}=await E.cotizaciones(e);n(s)}catch{}},[e]);r.useEffect(()=>{t()},[t]);const f=async s=>{c(s.id),h(null);try{await E.aceptar(s.id),i(),await t()}catch(y){h(y instanceof Error?y.message:"No pudimos aceptar ese precio.")}finally{c(null)}};if(l.length===0)return null;const m=l.some(s=>s.estado==="aceptada");return a.jsxs(me,{children:[u?a.jsx($,{role:"alert","data-tono":"error",children:u}):null,l.map(s=>a.jsxs(fe,{"data-estado":s.estado,children:[a.jsxs(ye,{children:[a.jsx(se,{size:14,"aria-hidden":"true"}),s.fletero]}),a.jsx(xe,{children:M(s.precio)}),s.nota?a.jsx(w,{children:s.nota}):null,typeof s.distancia_km=="number"?a.jsxs(w,{"data-suave":!0,children:[s.distancia_km," km"]}):null,s.estado==="aceptada"?a.jsxs(w,{"data-elegida":!0,children:[a.jsx(re,{size:13,"aria-hidden":"true"})," Lo hace esta persona"]}):m?null:a.jsx(je,{type:"button",onClick:()=>void f(s),disabled:p!==null,children:p===s.id?"Aceptando…":"Elegir este precio"})]},s.id))]})}const $e=d(oe)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.24);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,Ce=d.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,ve=d.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,we=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Ee=d.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Se=d.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,ze=d.span`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;

  &[data-state='proceso'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-state='terminado'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-state='cancelado'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }
`,ke=d.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pe=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: 0.1rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  > span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`,Te=d.strong`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,Oe=d.span`
  display: block;
  margin-top: 0.15rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Le={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Me({order:e,priority:i}){return a.jsxs($e,{to:e.state==="proceso"?`/pedidos/${e.id}/seguimiento`:`/comercios/${e.storeId}?pedido=${e.id}`,children:[a.jsx(Ce,{children:a.jsx(D,{$ratio:"1 / 1",$radius:"md",children:a.jsx(R,{src:I(e.categoryId),alt:e.store,loading:i?"eager":"lazy"})})}),a.jsxs(ve,{children:[a.jsxs(we,{children:[a.jsx(Ee,{children:e.store}),a.jsx(Se,{children:e.code})]}),a.jsx(ze,{"data-state":e.state,children:Le[e.state]}),a.jsxs(ke,{children:[a.jsx(ne,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),a.jsxs(Pe,{children:[a.jsxs("span",{children:[a.jsx(q,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),a.jsx(Te,{children:M(e.total)})]}),a.jsx(Oe,{children:e.state==="proceso"?"Entrá al pedido para ver dónde va":"Entrá al pedido para ver más info"})]}),a.jsx(ie,{size:18,"aria-hidden":"true"})]})}const T=["","Muy malo","Malo","Está bien","Muy bueno","Excelente"];function O({valor:e,onElegir:i,etiqueta:l}){return a.jsx(ge,{role:"radiogroup","aria-label":l,children:[1,2,3,4,5].map(n=>a.jsx(he,{type:"button",role:"radio","aria-checked":e===n,"aria-label":`${n} ${n===1?"estrella":"estrellas"}`,"data-encendida":n<=e,onClick:()=>i(n),children:a.jsx(A,{size:26,fill:n<=e?"currentColor":"none","aria-hidden":"true"})},n))})}function Fe({open:e,pedidoId:i,comercio:l,repartidor:n,onCerrar:p,onListo:c}){const[u,h]=r.useState(0),[t,f]=r.useState(0),[m,s]=r.useState(""),[y,x]=r.useState(!1),[j,b]=r.useState(null);if(r.useEffect(()=>{e&&(h(0),f(0),s(""),b(null))},[e]),r.useEffect(()=>{if(!e)return;const g=C=>{C.key==="Escape"&&p()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[p,e]),!e)return null;const o=async()=>{if(!(u===0||y)){x(!0),b(null);try{await X.puntuar(i,{comercio:u,repartidor:t>0?t:void 0,comentario:m.trim()||void 0}),c(),p()}catch(g){b(g instanceof Error?g.message:"No pudimos guardar tu puntaje.")}finally{x(!1)}}};return a.jsx(N,{role:"dialog","aria-modal":"true","aria-label":"Puntuar el pedido",children:a.jsxs(_,{children:[a.jsxs(B,{children:[a.jsx(H,{children:"¿Cómo te fue?"}),a.jsx(Y,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(le,{size:18,"aria-hidden":"true"})})]}),j?a.jsx($,{role:"alert","data-tono":"error",children:j}):null,a.jsxs(v,{children:[a.jsx("span",{children:l}),a.jsx(O,{valor:u,onElegir:h,etiqueta:`Puntaje para ${l}`}),a.jsx(P,{children:T[u]})]}),n?a.jsxs(v,{children:[a.jsxs("span",{children:[n,", que te lo llevó"]}),a.jsx(O,{valor:t,onElegir:f,etiqueta:`Puntaje para ${n}`}),a.jsx(P,{children:t>0?T[t]:"Si querés, puntualo también."})]}):null,a.jsxs(v,{children:[a.jsx("span",{children:"¿Querés contar algo más?"}),a.jsx(pe,{value:m,maxLength:400,placeholder:"Lo que quieras que sepan los demás.",onChange:g=>s(g.target.value)})]}),a.jsxs(ue,{children:[a.jsx(k,{type:"button","data-tono":"suave",onClick:p,disabled:y,children:"Ahora no"}),a.jsx(k,{type:"button",onClick:()=>void o(),disabled:u===0||y,children:y?"Enviando…":"Enviar puntaje"})]})]})})}const qe=2e4;function Ae(e){const i=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(i.getTime()))return"";const l=i.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),n=new Date;return i.getDate()===n.getDate()&&i.getMonth()===n.getMonth()&&i.getFullYear()===n.getFullYear()?`Hoy ${l}`:`${i.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${l}`}const De={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Re(){const[e,i]=r.useState([]),[l,n]=r.useState(!0),[p,c]=r.useState(!1),u=r.useCallback(async()=>{if(!G()){n(!1);return}try{const{pedidos:h}=await F.listar();i(h.map(t=>{const f=t.items??[];return{id:t.id,code:t.codigo,store:t.comercio_nombre,storeId:t.comercio_id,categoryId:t.rubro_id,total:t.total,status:De[t.estado]??t.estado,state:t.estado,eta:t.estado==="proceso"?"Llega en 15-25 min":"",date:Ae(t.creado_en),itemCount:f.length,rated:!!t.resenado,cancellable:!!t.cancelable,courier:t.repartidor??null,isFreight:t.tipo==="flete",items:f.map(m=>({productId:m.productoId??"",quantity:m.escalon+1}))}})),c(!1)}catch{c(!0)}finally{n(!1)}},[]);return r.useEffect(()=>{u();const h=window.setInterval(()=>void u(),qe);return()=>window.clearInterval(h)},[u]),{pedidos:e,cargando:l,error:p,recargar:u}}const Ie=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}],L=["Me equivoqué al pedir","Ya no lo necesito","Está tardando demasiado","Lo pedí en otro lado","Prefiero no decirlo"];function Qe(){const[e,i]=r.useState("todos"),{pedidos:l,cargando:n,recargar:p}=Re(),[c,u]=r.useState(null),[h,t]=r.useState(null),[f,m]=r.useState(null);r.useEffect(()=>{const o=Number(new URLSearchParams(window.location.hash.split("?")[1]??"").get("entregas"));Number.isFinite(o)&&o>1&&m(`Tu compra se dividió en ${o} entregas porque no entraba en un solo viaje. Cada una llega por separado y las seguís desde acá.`)},[]);const[s,y]=r.useState(null),x=r.useMemo(()=>e==="todos"?l:l.filter(o=>o.state===e),[l,e]),j=l.filter(o=>o.state==="proceso").length,b=async o=>{if(h){y(null);try{const{pagado:g,aviso:C}=await F.cancelar(h.id,L[o]);m(C??(g?"Cancelamos el pedido. Te vamos a contactar por la devolución.":"Cancelamos el pedido.")),t(null),await p()}catch(g){y(g instanceof Error?g.message:"No pudimos cancelar el pedido."),t(null)}}};return a.jsxs(Q,{showSearch:!1,children:[a.jsx(U,{children:a.jsxs(S,{children:[a.jsx(V,{title:"Mis pedidos",chip:j>0?`${j} en curso`:void 0,subtitle:"Historial completo de tus compras."}),a.jsx(Z,{"aria-label":"Filtrar pedidos",children:Ie.map(o=>a.jsx(J,{type:"button",onClick:()=>i(o.id),"data-active":e===o.id,children:o.label},o.id))})]})}),a.jsx(K,{children:a.jsxs(S,{children:[f?a.jsx($,{role:"status",children:f}):null,s?a.jsx($,{role:"alert","data-tono":"error",children:s}):null,n&&x.length===0?null:x.length>0?a.jsx(W,{children:x.map((o,g)=>a.jsxs(ee,{children:[a.jsx(Me,{order:o,priority:g<3}),o.isFreight&&o.state==="proceso"?a.jsx(be,{pedidoId:o.id,onAceptada:()=>void p()}):null,o.cancellable||o.state==="terminado"&&!o.rated?a.jsxs(ae,{children:[o.state==="terminado"&&!o.rated?a.jsxs(z,{type:"button","data-tono":"puntuar",onClick:()=>u(o),children:[a.jsx(A,{size:15,"aria-hidden":"true"}),"Puntuar el pedido"]}):null,o.cancellable?a.jsxs(z,{type:"button","data-tono":"cancelar",onClick:()=>t(o),children:[a.jsx(ce,{size:15,"aria-hidden":"true"}),"Cancelar pedido"]}):null]}):null]},o.id))}):a.jsx(te,{icon:q,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})]})}),a.jsx(Fe,{open:c!==null,pedidoId:(c==null?void 0:c.id)??"",comercio:(c==null?void 0:c.store)??"",repartidor:(c==null?void 0:c.courier)??null,onCerrar:()=>u(null),onListo:()=>{m("¡Gracias! Tu puntaje ya está publicado."),p()}}),a.jsx(de,{open:h!==null,titulo:"¿Por qué lo cancelás?",motivos:L,onCancelar:()=>t(null),onElegir:b})]})}export{Qe as MyOrdersScreen};
