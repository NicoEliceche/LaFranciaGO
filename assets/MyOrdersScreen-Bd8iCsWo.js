import{aj as E,j as a,e as $,r as M,Q as D,R,T as N,ak as _,al as B,am as H,c as Y,an as U,ao as X,h as G,ap as A,aq as Q,M as V,w as Z,S,q as J,G as K,I as W,C as ee,ar as ae,as as te,at as oe,au as z,E as se}from"./index-CYiLSH51.js";import{r,L as re}from"./react-CKwpxk66.js";import{q as d}from"./estilos-D2nr0glO.js";import{T as ie,C as ne,a4 as le,i as q,p as ce,X as de,t as I,a5 as ue}from"./iconos-Ddy7J2Wy.js";import{M as pe}from"./MotivoDialog-B8ykL5ma.js";import{E as ge,a as k}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{R as C,a as P,b as he,E as me,c as fe}from"./ResenaDialogStyled-rTAj6stT.js";const ye=d.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,xe=d.div`
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
`,je=d.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,be=d.strong`
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
`,$e=d.button`
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
`;function ve({pedidoId:e,onAceptada:n}){const[l,i]=r.useState([]),[g,c]=r.useState(null),[u,m]=r.useState(null),p=r.useCallback(async()=>{try{const{cotizaciones:s}=await E.cotizaciones(e);i(s)}catch{}},[e]);r.useEffect(()=>{p()},[p]);const y=async s=>{c(s.id),m(null);try{await E.aceptar(s.id),n(),await p()}catch(f){m(f instanceof Error?f.message:"No pudimos aceptar ese precio.")}finally{c(null)}};if(l.length===0)return null;const t=l.some(s=>s.estado==="aceptada");return a.jsxs(ye,{children:[u?a.jsx($,{role:"alert","data-tono":"error",children:u}):null,l.map(s=>a.jsxs(xe,{"data-estado":s.estado,children:[a.jsxs(je,{children:[a.jsx(ie,{size:14,"aria-hidden":"true"}),s.fletero]}),a.jsx(be,{children:M(s.precio)}),s.nota?a.jsx(w,{children:s.nota}):null,typeof s.distancia_km=="number"?a.jsxs(w,{"data-suave":!0,children:[s.distancia_km," km"]}):null,s.estado==="aceptada"?a.jsxs(w,{"data-elegida":!0,children:[a.jsx(ne,{size:13,"aria-hidden":"true"})," Lo hace esta persona"]}):t?null:a.jsx($e,{type:"button",onClick:()=>void y(s),disabled:g!==null,children:g===s.id?"Aceptando…":"Elegir este precio"})]},s.id))]})}const Ce=d(re)`
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
`,we=d.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,Ee=d.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,Se=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ze=d.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ke=d.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Pe=d.span`
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
`,Le=d.div`
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
`,Oe=d.strong`
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
`,Me={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Ae({order:e,priority:n}){return a.jsxs(Ce,{to:e.state==="proceso"?`/pedidos/${e.id}/seguimiento`:`/comercios/${e.storeId}?pedido=${e.id}`,children:[a.jsx(we,{children:a.jsx(D,{$ratio:"1 / 1",$radius:"md",children:a.jsx(R,{src:N(e.categoryId),alt:e.store,loading:n?"eager":"lazy"})})}),a.jsxs(Ee,{children:[a.jsxs(Se,{children:[a.jsx(ze,{children:e.store}),a.jsx(ke,{children:e.code})]}),a.jsx(Pe,{"data-state":e.state,children:Me[e.state]}),a.jsxs(Te,{children:[a.jsx(le,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),a.jsxs(Le,{children:[a.jsxs("span",{children:[a.jsx(q,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),a.jsx(Oe,{children:M(e.total)})]}),a.jsx(Fe,{children:e.state==="proceso"?"Entrá al pedido para ver dónde va":"Entrá al pedido para ver más info"})]}),a.jsx(ce,{size:18,"aria-hidden":"true"})]})}const T=["","Muy malo","Malo","Está bien","Muy bueno","Excelente"];function L({valor:e,onElegir:n,etiqueta:l}){return a.jsx(me,{role:"radiogroup","aria-label":l,children:[1,2,3,4,5].map(i=>a.jsx(fe,{type:"button",role:"radio","aria-checked":e===i,"aria-label":`${i} ${i===1?"estrella":"estrellas"}`,"data-encendida":i<=e,onClick:()=>n(i),children:a.jsx(I,{size:26,fill:i<=e?"currentColor":"none","aria-hidden":"true"})},i))})}function qe({open:e,pedidoId:n,comercio:l,repartidor:i,onCerrar:g,onListo:c}){const[u,m]=r.useState(0),[p,y]=r.useState(0),[t,s]=r.useState(""),[f,x]=r.useState(!1),[j,b]=r.useState(null);if(r.useEffect(()=>{e&&(m(0),y(0),s(""),b(null))},[e]),r.useEffect(()=>{if(!e)return;const h=v=>{v.key==="Escape"&&g()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[g,e]),!e)return null;const o=async()=>{if(!(u===0||f)){x(!0),b(null);try{await X.puntuar(n,{comercio:u,repartidor:p>0?p:void 0,comentario:t.trim()||void 0}),c(),g()}catch(h){b(h instanceof Error?h.message:"No pudimos guardar tu puntaje.")}finally{x(!1)}}};return a.jsx(_,{role:"dialog","aria-modal":"true","aria-label":"Puntuar el pedido",children:a.jsxs(B,{children:[a.jsxs(H,{children:[a.jsx(Y,{children:"¿Cómo te fue?"}),a.jsx(U,{type:"button",onClick:g,"aria-label":"Cerrar",children:a.jsx(de,{size:18,"aria-hidden":"true"})})]}),j?a.jsx($,{role:"alert","data-tono":"error",children:j}):null,a.jsxs(C,{children:[a.jsx("span",{children:l}),a.jsx(L,{valor:u,onElegir:m,etiqueta:`Puntaje para ${l}`}),a.jsx(P,{children:T[u]})]}),i?a.jsxs(C,{children:[a.jsxs("span",{children:[i,", que te lo llevó"]}),a.jsx(L,{valor:p,onElegir:y,etiqueta:`Puntaje para ${i}`}),a.jsx(P,{children:p>0?T[p]:"Si querés, puntualo también."})]}):null,a.jsxs(C,{children:[a.jsx("span",{children:"¿Querés contar algo más?"}),a.jsx(he,{value:t,maxLength:400,placeholder:"Lo que quieras que sepan los demás.",onChange:h=>s(h.target.value)})]}),a.jsxs(ge,{children:[a.jsx(k,{type:"button","data-tono":"suave",onClick:g,disabled:f,children:"Ahora no"}),a.jsx(k,{type:"button",onClick:()=>void o(),disabled:u===0||f,children:f?"Enviando…":"Enviar puntaje"})]})]})})}const Ie=2e4;function O(e){const n=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(n.getTime()))return"";const l=n.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),i=new Date;return n.getDate()===i.getDate()&&n.getMonth()===i.getMonth()&&n.getFullYear()===i.getFullYear()?`Hoy ${l}`:`${n.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${l}`}const De={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Re(){const[e,n]=r.useState([]),[l,i]=r.useState(!0),[g,c]=r.useState(!1),u=r.useCallback(async()=>{if(!G()){i(!1);return}try{const[{pedidos:m},p]=await Promise.all([A.listar(),Q.mios().catch(()=>({mandados:[]}))]),y=t=>({id:t.id,code:`#${t.id.slice(0,6).toUpperCase()}`,store:t.tipo==="flete"?"Flete":"Mandado",storeId:"",categoryId:"servicios",total:0,status:t.repartidor?`Lo lleva ${t.repartidor}`:"Buscando quien lo tome",state:t.estado==="entregado"?"terminado":"proceso",eta:t.estado==="entregado"?"":"A convenir",date:O(t.creado_en),itemCount:1,rated:!1,cancellable:t.estado!=="entregado",courier:t.repartidor,isFreight:t.tipo==="flete",items:[]});n(m.map(t=>{const s=t.items??[];return{id:t.id,code:t.codigo,store:t.comercio_nombre,storeId:t.comercio_id,categoryId:t.rubro_id,total:t.total,status:De[t.estado]??t.estado,state:t.estado,eta:t.estado==="proceso"?"Llega en 15-25 min":"",date:O(t.creado_en),itemCount:s.length,rated:!!t.resenado,cancellable:!!t.cancelable,courier:t.repartidor??null,isFreight:t.tipo==="flete",items:s.map(f=>({productId:f.productoId??"",quantity:f.escalon+1}))}}).concat((p.mandados??[]).map(y))),c(!1)}catch{c(!0)}finally{i(!1)}},[]);return r.useEffect(()=>{u();const m=window.setInterval(()=>void u(),Ie);return()=>window.clearInterval(m)},[u]),{pedidos:e,cargando:l,error:g,recargar:u}}const Ne=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}],F=["Me equivoqué al pedir","Ya no lo necesito","Está tardando demasiado","Lo pedí en otro lado","Prefiero no decirlo"];function Qe(){const[e,n]=r.useState("todos"),{pedidos:l,cargando:i,recargar:g}=Re(),[c,u]=r.useState(null),[m,p]=r.useState(null),[y,t]=r.useState(null);r.useEffect(()=>{const o=Number(new URLSearchParams(window.location.hash.split("?")[1]??"").get("entregas"));Number.isFinite(o)&&o>1&&t(`Tu compra se dividió en ${o} entregas porque no entraba en un solo viaje. Cada una llega por separado y las seguís desde acá.`)},[]);const[s,f]=r.useState(null),x=r.useMemo(()=>e==="todos"?l:l.filter(o=>o.state===e),[l,e]),j=l.filter(o=>o.state==="proceso").length,b=async o=>{if(m){f(null);try{const{pagado:h,aviso:v}=await A.cancelar(m.id,F[o]);t(v??(h?"Cancelamos el pedido. Te vamos a contactar por la devolución.":"Cancelamos el pedido.")),p(null),await g()}catch(h){f(h instanceof Error?h.message:"No pudimos cancelar el pedido."),p(null)}}};return a.jsxs(V,{showSearch:!1,children:[a.jsx(Z,{children:a.jsxs(S,{children:[a.jsx(J,{title:"Mis pedidos",chip:j>0?`${j} en curso`:void 0,subtitle:"Historial completo de tus compras."}),a.jsx(K,{"aria-label":"Filtrar pedidos",children:Ne.map(o=>a.jsx(W,{type:"button",onClick:()=>n(o.id),"data-active":e===o.id,children:o.label},o.id))})]})}),a.jsx(ee,{children:a.jsxs(S,{children:[y?a.jsx($,{role:"status",children:y}):null,s?a.jsx($,{role:"alert","data-tono":"error",children:s}):null,i&&x.length===0?null:x.length>0?a.jsx(ae,{children:x.map((o,h)=>a.jsxs(te,{children:[a.jsx(Ae,{order:o,priority:h<3}),o.isFreight&&o.state==="proceso"?a.jsx(ve,{pedidoId:o.id,onAceptada:()=>void g()}):null,o.cancellable||o.state==="terminado"&&!o.rated?a.jsxs(oe,{children:[o.state==="terminado"&&!o.rated?a.jsxs(z,{type:"button","data-tono":"puntuar",onClick:()=>u(o),children:[a.jsx(I,{size:15,"aria-hidden":"true"}),"Puntuar el pedido"]}):null,o.cancellable?a.jsxs(z,{type:"button","data-tono":"cancelar",onClick:()=>p(o),children:[a.jsx(ue,{size:15,"aria-hidden":"true"}),"Cancelar pedido"]}):null]}):null]},o.id))}):a.jsx(se,{icon:q,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})]})}),a.jsx(qe,{open:c!==null,pedidoId:(c==null?void 0:c.id)??"",comercio:(c==null?void 0:c.store)??"",repartidor:(c==null?void 0:c.courier)??null,onCerrar:()=>u(null),onListo:()=>{t("¡Gracias! Tu puntaje ya está publicado."),g()}}),a.jsx(pe,{open:m!==null,titulo:"¿Por qué lo cancelás?",motivos:F,onCancelar:()=>p(null),onElegir:b})]})}export{Qe as MyOrdersScreen};
