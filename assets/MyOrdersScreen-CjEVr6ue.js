import{c as D,q as u,aq as E,j as a,T as I,o as M,p as R,Y as _,Z as B,_ as N,P as A,ar as H,C as Y,X,a1 as F,as as V,h as Z,at as q,M as G,y as J,S,n as Q,J as U,O as K,b as W,au as ee,av as ae,aw as te,t as oe,ax as se,ay as z,E as re}from"./index-99PGXNK_.js";import{r,L as ne}from"./react-D_B_6qYb.js";import{A as $}from"./AuthScreenStyled-FgmKJh9V.js";import{M as ie}from"./MotivoDialog-D5E5ixNY.js";import{C as le}from"./clock-3-xH1ns8fg.js";import{P as ce,a as de,b as ue,c as pe}from"./PanelLoginDialogStyled-CkVOZnk8.js";import{E as he,a as k}from"./ChatPedidoDialogStyled-1pryKiQK.js";import{R as v,a as P,b as ge,E as me,c as fe}from"./ResenaDialogStyled-DsY3w1K5.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=D("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),ye=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,je=u.div`
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
`,be=u.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,$e=u.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
`,w=u.span`
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
`,Ce=u.button`
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
`;function ve({pedidoId:e,onAceptada:i}){const[l,n]=r.useState([]),[p,c]=r.useState(null),[d,g]=r.useState(null),t=r.useCallback(async()=>{try{const{cotizaciones:s}=await E.cotizaciones(e);n(s)}catch{}},[e]);r.useEffect(()=>{t()},[t]);const m=async s=>{c(s.id),g(null);try{await E.aceptar(s.id),i(),await t()}catch(x){g(x instanceof Error?x.message:"No pudimos aceptar ese precio.")}finally{c(null)}};if(l.length===0)return null;const f=l.some(s=>s.estado==="aceptada");return a.jsxs(ye,{children:[d?a.jsx($,{role:"alert","data-tono":"error",children:d}):null,l.map(s=>a.jsxs(je,{"data-estado":s.estado,children:[a.jsxs(be,{children:[a.jsx(I,{size:14,"aria-hidden":"true"}),s.fletero]}),a.jsx($e,{children:M(s.precio)}),s.nota?a.jsx(w,{children:s.nota}):null,typeof s.distancia_km=="number"?a.jsxs(w,{"data-suave":!0,children:[s.distancia_km," km"]}):null,s.estado==="aceptada"?a.jsxs(w,{"data-elegida":!0,children:[a.jsx(R,{size:13,"aria-hidden":"true"})," Lo hace esta persona"]}):f?null:a.jsx(Ce,{type:"button",onClick:()=>void m(s),disabled:p!==null,children:p===s.id?"Aceptando…":"Elegir este precio"})]},s.id))]})}const we=u(ne)`
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
`,Ee=u.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,Se=u.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,ze=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ke=u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pe=u.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Oe=u.span`
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
`,Te=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Le=u.div`
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
`,Me=u.strong`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,Ae={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Fe({order:e,priority:i}){return a.jsxs(we,{to:`/comercios/${e.storeId}?pedido=${e.id}`,children:[a.jsx(Ee,{children:a.jsx(_,{$ratio:"1 / 1",$radius:"md",children:a.jsx(B,{src:N(e.categoryId),alt:e.store,loading:i?"eager":"lazy"})})}),a.jsxs(Se,{children:[a.jsxs(ze,{children:[a.jsx(ke,{children:e.store}),a.jsx(Pe,{children:e.code})]}),a.jsx(Oe,{"data-state":e.state,children:Ae[e.state]}),a.jsxs(Te,{children:[a.jsx(le,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),a.jsxs(Le,{children:[a.jsxs("span",{children:[a.jsx(A,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),a.jsx(Me,{children:M(e.total)})]})]}),a.jsx(H,{size:18,"aria-hidden":"true"})]})}const O=["","Muy malo","Malo","Está bien","Muy bueno","Excelente"];function T({valor:e,onElegir:i,etiqueta:l}){return a.jsx(me,{role:"radiogroup","aria-label":l,children:[1,2,3,4,5].map(n=>a.jsx(fe,{type:"button",role:"radio","aria-checked":e===n,"aria-label":`${n} ${n===1?"estrella":"estrellas"}`,"data-encendida":n<=e,onClick:()=>i(n),children:a.jsx(F,{size:26,fill:n<=e?"currentColor":"none","aria-hidden":"true"})},n))})}function qe({open:e,pedidoId:i,comercio:l,repartidor:n,onCerrar:p,onListo:c}){const[d,g]=r.useState(0),[t,m]=r.useState(0),[f,s]=r.useState(""),[x,y]=r.useState(!1),[j,b]=r.useState(null);if(r.useEffect(()=>{e&&(g(0),m(0),s(""),b(null))},[e]),r.useEffect(()=>{if(!e)return;const h=C=>{C.key==="Escape"&&p()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[p,e]),!e)return null;const o=async()=>{if(!(d===0||x)){y(!0),b(null);try{await V.puntuar(i,{comercio:d,repartidor:t>0?t:void 0,comentario:f.trim()||void 0}),c(),p()}catch(h){b(h instanceof Error?h.message:"No pudimos guardar tu puntaje.")}finally{y(!1)}}};return a.jsx(ce,{role:"dialog","aria-modal":"true","aria-label":"Puntuar el pedido",children:a.jsxs(de,{children:[a.jsxs(ue,{children:[a.jsx(Y,{children:"¿Cómo te fue?"}),a.jsx(pe,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(X,{size:18,"aria-hidden":"true"})})]}),j?a.jsx($,{role:"alert","data-tono":"error",children:j}):null,a.jsxs(v,{children:[a.jsx("span",{children:l}),a.jsx(T,{valor:d,onElegir:g,etiqueta:`Puntaje para ${l}`}),a.jsx(P,{children:O[d]})]}),n?a.jsxs(v,{children:[a.jsxs("span",{children:[n,", que te lo llevó"]}),a.jsx(T,{valor:t,onElegir:m,etiqueta:`Puntaje para ${n}`}),a.jsx(P,{children:t>0?O[t]:"Si querés, puntualo también."})]}):null,a.jsxs(v,{children:[a.jsx("span",{children:"¿Querés contar algo más?"}),a.jsx(ge,{value:f,maxLength:400,placeholder:"Lo que quieras que sepan los demás.",onChange:h=>s(h.target.value)})]}),a.jsxs(he,{children:[a.jsx(k,{type:"button","data-tono":"suave",onClick:p,disabled:x,children:"Ahora no"}),a.jsx(k,{type:"button",onClick:()=>void o(),disabled:d===0||x,children:x?"Enviando…":"Enviar puntaje"})]})]})})}const De=2e4;function Ie(e){const i=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(i.getTime()))return"";const l=i.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),n=new Date;return i.getDate()===n.getDate()&&i.getMonth()===n.getMonth()&&i.getFullYear()===n.getFullYear()?`Hoy ${l}`:`${i.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${l}`}const Re={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function _e(){const[e,i]=r.useState([]),[l,n]=r.useState(!0),[p,c]=r.useState(!1),d=r.useCallback(async()=>{if(!Z()){n(!1);return}try{const{pedidos:g}=await q.listar();i(g.map(t=>{const m=t.items??[];return{id:t.id,code:t.codigo,store:t.comercio_nombre,storeId:t.comercio_id,categoryId:t.rubro_id,total:t.total,status:Re[t.estado]??t.estado,state:t.estado,eta:t.estado==="proceso"?"Llega en 15-25 min":"",date:Ie(t.creado_en),itemCount:m.length,rated:!!t.resenado,cancellable:!!t.cancelable,courier:t.repartidor??null,isFreight:t.tipo==="flete",items:m.map(f=>({productId:f.productoId??"",quantity:f.escalon+1}))}})),c(!1)}catch{c(!0)}finally{n(!1)}},[]);return r.useEffect(()=>{d();const g=window.setInterval(()=>void d(),De);return()=>window.clearInterval(g)},[d]),{pedidos:e,cargando:l,error:p,recargar:d}}const Be=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}],L=["Me equivoqué al pedir","Ya no lo necesito","Está tardando demasiado","Lo pedí en otro lado","Prefiero no decirlo"];function Qe(){const[e,i]=r.useState("todos"),{pedidos:l,cargando:n,recargar:p}=_e(),[c,d]=r.useState(null),[g,t]=r.useState(null),[m,f]=r.useState(null),[s,x]=r.useState(null),y=r.useMemo(()=>e==="todos"?l:l.filter(o=>o.state===e),[l,e]),j=l.filter(o=>o.state==="proceso").length,b=async o=>{if(g){x(null);try{const{pagado:h,aviso:C}=await q.cancelar(g.id,L[o]);f(C??(h?"Cancelamos el pedido. Te vamos a contactar por la devolución.":"Cancelamos el pedido.")),t(null),await p()}catch(h){x(h instanceof Error?h.message:"No pudimos cancelar el pedido."),t(null)}}};return a.jsxs(G,{showSearch:!1,children:[a.jsx(J,{children:a.jsxs(S,{children:[a.jsx(Q,{title:"Mis pedidos",chip:j>0?`${j} en curso`:void 0,subtitle:"Historial completo de tus compras."}),a.jsx(U,{"aria-label":"Filtrar pedidos",children:Be.map(o=>a.jsx(K,{type:"button",onClick:()=>i(o.id),"data-active":e===o.id,children:o.label},o.id))})]})}),a.jsx(W,{children:a.jsxs(S,{children:[m?a.jsx($,{role:"status",children:m}):null,s?a.jsx($,{role:"alert","data-tono":"error",children:s}):null,n&&y.length===0?null:y.length>0?a.jsx(ee,{children:y.map((o,h)=>a.jsxs(ae,{children:[a.jsx(Fe,{order:o,priority:h<3}),o.isFreight&&o.state==="proceso"?a.jsx(ve,{pedidoId:o.id,onAceptada:()=>void p()}):null,o.state==="proceso"?a.jsxs(te,{to:`/pedidos/${o.id}/seguimiento`,children:[a.jsx(oe,{size:15,"aria-hidden":"true"}),"Ver dónde va"]}):null,o.cancellable||o.state==="terminado"&&!o.rated?a.jsxs(se,{children:[o.state==="terminado"&&!o.rated?a.jsxs(z,{type:"button","data-tono":"puntuar",onClick:()=>d(o),children:[a.jsx(F,{size:15,"aria-hidden":"true"}),"Puntuar el pedido"]}):null,o.cancellable?a.jsxs(z,{type:"button","data-tono":"cancelar",onClick:()=>t(o),children:[a.jsx(xe,{size:15,"aria-hidden":"true"}),"Cancelar pedido"]}):null]}):null]},o.id))}):a.jsx(re,{icon:A,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})]})}),a.jsx(qe,{open:c!==null,pedidoId:(c==null?void 0:c.id)??"",comercio:(c==null?void 0:c.store)??"",repartidor:(c==null?void 0:c.courier)??null,onCerrar:()=>d(null),onListo:()=>{f("¡Gracias! Tu puntaje ya está publicado."),p()}}),a.jsx(ie,{open:g!==null,titulo:"¿Por qué lo cancelás?",motivos:L,onCancelar:()=>t(null),onElegir:b})]})}export{Qe as MyOrdersScreen};
