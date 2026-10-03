import{aj as E,j as a,e as v,r as I,Q as N,R as _,T as H,ak as Y,al as U,am as X,c as G,an as Q,ao as Z,h as V,ap as D,aq as J,M as K,w as W,S,q as ee,G as ae,I as te,C as oe,ar as se,as as re,at as ie,au as z,E as ne}from"./index-DKGgQ_f2.js";import{r,L as le}from"./react-CKwpxk66.js";import{q as d}from"./estilos-D2nr0glO.js";import{Z as ce,T as de,C as ue,a7 as pe,l as R,s as ge,X as he,x as B,a8 as me}from"./iconos-NomGb_FP.js";import{M as fe}from"./MotivoDialog-DCghcT64.js";import{E as xe,a as k}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{R as w,a as P,b as ye,E as je,c as be}from"./ResenaDialogStyled-rTAj6stT.js";const L=d.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,T=d.div`
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
`,O=d.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,$e=d.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
`,$=d.span`
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
`,ve=d.button`
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
`;function Ce({fleteId:e,onAceptada:n}){const[l,i]=r.useState([]),[g,c]=r.useState(null),[u,m]=r.useState(null),p=r.useCallback(async()=>{try{const{cotizaciones:s}=await E.cotizaciones(e);i(s)}catch{}},[e]);r.useEffect(()=>{p()},[p]);const x=async s=>{c(s.id),m(null);try{await E.aceptar(s.id),n(),await p()}catch(f){m(f instanceof Error?f.message:"No pudimos aceptar ese precio.")}finally{c(null)}};if(l.length===0)return a.jsx(L,{children:a.jsxs(T,{"data-estado":"esperando",children:[a.jsxs(O,{children:[a.jsx(ce,{size:14,"aria-hidden":"true"}),"Buscando quién lo haga"]}),a.jsx($,{children:"Los fleteros de la zona ya lo están viendo. Cuando alguno te pase un precio, te avisamos y aparece acá para que elijas."})]})});const t=l.some(s=>s.estado==="aceptada");return a.jsxs(L,{children:[u?a.jsx(v,{role:"alert","data-tono":"error",children:u}):null,l.map(s=>a.jsxs(T,{"data-estado":s.estado,children:[a.jsxs(O,{children:[a.jsx(de,{size:14,"aria-hidden":"true"}),s.fletero]}),a.jsx($e,{children:I(s.precio)}),s.nota?a.jsx($,{children:s.nota}):null,typeof s.distancia_km=="number"?a.jsxs($,{"data-suave":!0,children:[s.distancia_km," km"]}):null,s.estado==="aceptada"?a.jsxs($,{"data-elegida":!0,children:[a.jsx(ue,{size:13,"aria-hidden":"true"})," Lo hace esta persona"]}):t?null:a.jsx(ve,{type:"button",onClick:()=>void x(s),disabled:g!==null,children:g===s.id?"Aceptando…":"Elegir este precio"})]},s.id))]})}const we=d(le)`
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
`,Ee=d.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,Se=d.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,ze=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ke=d.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pe=d.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Le=d.span`
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
`,Te=d.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Oe=d.div`
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
`,qe=d.strong`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,Fe=d.span`
  display: block;
  margin-top: 0.15rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Me={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Ae({order:e,priority:n}){return a.jsxs(we,{to:e.state==="proceso"?`/pedidos/${e.id}/seguimiento`:`/comercios/${e.storeId}?pedido=${e.id}`,children:[a.jsx(Ee,{children:a.jsx(N,{$ratio:"1 / 1",$radius:"md",children:a.jsx(_,{src:H(e.categoryId),alt:e.store,loading:n?"eager":"lazy"})})}),a.jsxs(Se,{children:[a.jsxs(ze,{children:[a.jsx(ke,{children:e.store}),a.jsx(Pe,{children:e.code})]}),a.jsx(Le,{"data-state":e.state,children:Me[e.state]}),a.jsxs(Te,{children:[a.jsx(pe,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),a.jsxs(Oe,{children:[a.jsxs("span",{children:[a.jsx(R,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),a.jsx(qe,{children:I(e.total)})]}),a.jsx(Fe,{children:e.state==="proceso"?"Entrá al pedido para ver dónde va":"Entrá al pedido para ver más info"})]}),a.jsx(ge,{size:18,"aria-hidden":"true"})]})}const q=["","Muy malo","Malo","Está bien","Muy bueno","Excelente"];function F({valor:e,onElegir:n,etiqueta:l}){return a.jsx(je,{role:"radiogroup","aria-label":l,children:[1,2,3,4,5].map(i=>a.jsx(be,{type:"button",role:"radio","aria-checked":e===i,"aria-label":`${i} ${i===1?"estrella":"estrellas"}`,"data-encendida":i<=e,onClick:()=>n(i),children:a.jsx(B,{size:26,fill:i<=e?"currentColor":"none","aria-hidden":"true"})},i))})}function Ie({open:e,pedidoId:n,comercio:l,repartidor:i,onCerrar:g,onListo:c}){const[u,m]=r.useState(0),[p,x]=r.useState(0),[t,s]=r.useState(""),[f,y]=r.useState(!1),[j,b]=r.useState(null);if(r.useEffect(()=>{e&&(m(0),x(0),s(""),b(null))},[e]),r.useEffect(()=>{if(!e)return;const h=C=>{C.key==="Escape"&&g()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[g,e]),!e)return null;const o=async()=>{if(!(u===0||f)){y(!0),b(null);try{await Z.puntuar(n,{comercio:u,repartidor:p>0?p:void 0,comentario:t.trim()||void 0}),c(),g()}catch(h){b(h instanceof Error?h.message:"No pudimos guardar tu puntaje.")}finally{y(!1)}}};return a.jsx(Y,{role:"dialog","aria-modal":"true","aria-label":"Puntuar el pedido",children:a.jsxs(U,{children:[a.jsxs(X,{children:[a.jsx(G,{children:"¿Cómo te fue?"}),a.jsx(Q,{type:"button",onClick:g,"aria-label":"Cerrar",children:a.jsx(he,{size:18,"aria-hidden":"true"})})]}),j?a.jsx(v,{role:"alert","data-tono":"error",children:j}):null,a.jsxs(w,{children:[a.jsx("span",{children:l}),a.jsx(F,{valor:u,onElegir:m,etiqueta:`Puntaje para ${l}`}),a.jsx(P,{children:q[u]})]}),i?a.jsxs(w,{children:[a.jsxs("span",{children:[i,", que te lo llevó"]}),a.jsx(F,{valor:p,onElegir:x,etiqueta:`Puntaje para ${i}`}),a.jsx(P,{children:p>0?q[p]:"Si querés, puntualo también."})]}):null,a.jsxs(w,{children:[a.jsx("span",{children:"¿Querés contar algo más?"}),a.jsx(ye,{value:t,maxLength:400,placeholder:"Lo que quieras que sepan los demás.",onChange:h=>s(h.target.value)})]}),a.jsxs(xe,{children:[a.jsx(k,{type:"button","data-tono":"suave",onClick:g,disabled:f,children:"Ahora no"}),a.jsx(k,{type:"button",onClick:()=>void o(),disabled:u===0||f,children:f?"Enviando…":"Enviar puntaje"})]})]})})}const De=2e4;function M(e){const n=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(n.getTime()))return"";const l=n.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),i=new Date;return n.getDate()===i.getDate()&&n.getMonth()===i.getMonth()&&n.getFullYear()===i.getFullYear()?`Hoy ${l}`:`${n.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${l}`}const Re={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Be(){const[e,n]=r.useState([]),[l,i]=r.useState(!0),[g,c]=r.useState(!1),u=r.useCallback(async()=>{if(!V()){i(!1);return}try{const[{pedidos:m},p]=await Promise.all([D.listar(),J.mios().catch(()=>({mandados:[]}))]),x=t=>({id:t.id,code:`#${t.id.slice(0,6).toUpperCase()}`,store:t.tipo==="flete"?"Flete":"Mandado",storeId:"",categoryId:"servicios",total:0,status:t.repartidor?`Lo lleva ${t.repartidor}`:"Buscando quien lo tome",state:t.estado==="entregado"?"terminado":"proceso",eta:t.estado==="entregado"?"":"A convenir",date:M(t.creado_en),itemCount:1,rated:!1,cancellable:t.estado!=="entregado",courier:t.repartidor,isFreight:t.tipo==="flete",items:[]});n(m.map(t=>{const s=t.items??[];return{id:t.id,code:t.codigo,store:t.comercio_nombre,storeId:t.comercio_id,categoryId:t.rubro_id,total:t.total,status:Re[t.estado]??t.estado,state:t.estado,eta:t.estado==="proceso"?"Llega en 15-25 min":"",date:M(t.creado_en),itemCount:s.length,rated:!!t.resenado,cancellable:!!t.cancelable,courier:t.repartidor??null,isFreight:t.tipo==="flete",items:s.map(f=>({productId:f.productoId??"",quantity:f.escalon+1}))}}).concat((p.mandados??[]).map(x))),c(!1)}catch{c(!0)}finally{i(!1)}},[]);return r.useEffect(()=>{u();const m=window.setInterval(()=>void u(),De);return()=>window.clearInterval(m)},[u]),{pedidos:e,cargando:l,error:g,recargar:u}}const Ne=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}],A=["Me equivoqué al pedir","Ya no lo necesito","Está tardando demasiado","Lo pedí en otro lado","Prefiero no decirlo"];function Ze(){const[e,n]=r.useState("todos"),{pedidos:l,cargando:i,recargar:g}=Be(),[c,u]=r.useState(null),[m,p]=r.useState(null),[x,t]=r.useState(null);r.useEffect(()=>{const o=Number(new URLSearchParams(window.location.hash.split("?")[1]??"").get("entregas"));Number.isFinite(o)&&o>1&&t(`Tu compra se dividió en ${o} entregas porque no entraba en un solo viaje. Cada una llega por separado y las seguís desde acá.`)},[]);const[s,f]=r.useState(null),y=r.useMemo(()=>e==="todos"?l:l.filter(o=>o.state===e),[l,e]),j=l.filter(o=>o.state==="proceso").length,b=async o=>{if(m){f(null);try{const{pagado:h,aviso:C}=await D.cancelar(m.id,A[o]);t(C??(h?"Cancelamos el pedido. Te vamos a contactar por la devolución.":"Cancelamos el pedido.")),p(null),await g()}catch(h){f(h instanceof Error?h.message:"No pudimos cancelar el pedido."),p(null)}}};return a.jsxs(K,{showSearch:!1,children:[a.jsx(W,{children:a.jsxs(S,{children:[a.jsx(ee,{title:"Mis pedidos",chip:j>0?`${j} en curso`:void 0,subtitle:"Historial completo de tus compras."}),a.jsx(ae,{"aria-label":"Filtrar pedidos",children:Ne.map(o=>a.jsx(te,{type:"button",onClick:()=>n(o.id),"data-active":e===o.id,children:o.label},o.id))})]})}),a.jsx(oe,{children:a.jsxs(S,{children:[x?a.jsx(v,{role:"status",children:x}):null,s?a.jsx(v,{role:"alert","data-tono":"error",children:s}):null,i&&y.length===0?null:y.length>0?a.jsx(se,{children:y.map((o,h)=>a.jsxs(re,{children:[a.jsx(Ae,{order:o,priority:h<3}),o.isFreight&&o.state==="proceso"?a.jsx(Ce,{fleteId:o.id,onAceptada:()=>void g()}):null,o.cancellable||o.state==="terminado"&&!o.rated?a.jsxs(ie,{children:[o.state==="terminado"&&!o.rated?a.jsxs(z,{type:"button","data-tono":"puntuar",onClick:()=>u(o),children:[a.jsx(B,{size:15,"aria-hidden":"true"}),"Puntuar el pedido"]}):null,o.cancellable?a.jsxs(z,{type:"button","data-tono":"cancelar",onClick:()=>p(o),children:[a.jsx(me,{size:15,"aria-hidden":"true"}),"Cancelar pedido"]}):null]}):null]},o.id))}):a.jsx(ne,{icon:R,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})]})}),a.jsx(Ie,{open:c!==null,pedidoId:(c==null?void 0:c.id)??"",comercio:(c==null?void 0:c.store)??"",repartidor:(c==null?void 0:c.courier)??null,onCerrar:()=>u(null),onListo:()=>{t("¡Gracias! Tu puntaje ya está publicado."),g()}}),a.jsx(fe,{open:m!==null,titulo:"¿Por qué lo cancelás?",motivos:A,onCancelar:()=>p(null),onElegir:b})]})}export{Ze as MyOrdersScreen};
