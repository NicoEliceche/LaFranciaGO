import{c as q,q as i,aT as v,j as o,C as F,a as E,X as I,ad as L,R as _,H as C,u as N,aI as H,M as O,b as U,S as V,a5 as T,n as B,E as K,_ as X,d as Z,e as G}from"./index-B_prQB2D.js";import{r as n}from"./react-D_B_6qYb.js";import{u as J}from"./useCurrentPosition-BYw6bfYw.js";import{C as Q}from"./ChatPedidoDialog-B3aGQD4F.js";import{s as W}from"./saleUnits-CLP-TCsg.js";import{A as M,a as Y}from"./AuthScreenStyled-Bl4cJuM5.js";import{P as ee,a as oe,b as ae,c as te}from"./PanelLoginDialogStyled-B_4rALoq.js";import{R as re}from"./refresh-cw-CzGMLGgI.js";import"./send-BiuAhozp.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=q("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),z=i.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,S=i.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,x=i.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ne=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ie=i.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,le=i.div`
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
`;function de({open:e,pedidoId:c,onClose:h,onTomar:f,esFletero:t=!1}){const[r,p]=n.useState(null),[b,d]=n.useState(null),[m,y]=n.useState(!1);if(n.useEffect(()=>{!e||!c||(p(null),d(null),v.detalle(c).then(p).catch(()=>d("No pudimos cargar el pedido.")))},[e,c]),n.useEffect(()=>{if(!e)return;const s=u=>{u.key==="Escape"&&h()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[h,e]),!e||!c)return null;const w=async()=>{y(!0),d(null);try{await f(c)}catch(s){d(s instanceof Error?s.message:`No pudimos tomar ${t?"el flete":"el pedido"}.`)}finally{y(!1)}};return o.jsx(ee,{onClick:h,role:"presentation",children:o.jsxs(oe,{role:"dialog","aria-modal":"true","aria-label":t?"Detalle del flete":"Detalle del pedido",onClick:s=>s.stopPropagation(),children:[o.jsxs(ae,{children:[o.jsxs("div",{children:[o.jsxs(F,{children:[t?"Flete":"Pedido"," ",(r==null?void 0:r.pedido.codigo)??""]}),o.jsx(E,{children:"Mirá el detalle antes de tomarlo."})]}),o.jsx(te,{type:"button",onClick:h,"aria-label":"Cerrar",children:o.jsx(I,{size:18,"aria-hidden":"true"})})]}),b?o.jsx(M,{role:"alert","data-tono":"error",children:b}):null,r?o.jsxs(o.Fragment,{children:[o.jsxs(z,{children:[o.jsxs(S,{children:[o.jsx(L,{size:15,"aria-hidden":"true"}),"Retirás en"]}),o.jsx(x,{children:r.pedido.comercio}),o.jsx(x,{"data-suave":!0,children:r.pedido.comercio_direccion})]}),o.jsxs(z,{children:[o.jsxs(S,{children:[o.jsx(_,{size:15,"aria-hidden":"true"}),"Entregás en"]}),o.jsx(x,{children:r.pedido.direccion_texto}),o.jsxs(x,{"data-suave":!0,children:[r.pedido.cliente,r.pedido.cliente_telefono?` · ${r.pedido.cliente_telefono}`:""]})]}),o.jsxs(z,{children:[o.jsxs(S,{children:[o.jsx(se,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),r.items.map((s,u)=>o.jsxs(ne,{children:[o.jsxs(ie,{children:[s.nombre,o.jsxs("span",{children:[" · ",W(s.unidad_venta,s.escalon)]})]}),o.jsx("span",{children:C(s.subtotal)})]},`${s.nombre}-${u}`)),o.jsxs(le,{children:[o.jsxs("span",{children:["Total ",t?"del flete":"del pedido"]}),o.jsx("strong",{children:C(r.pedido.total)})]}),r.pedido.metodo_pago?o.jsxs(x,{"data-suave":!0,children:["Paga con ",r.pedido.metodo_pago]}):null]}),o.jsx(Y,{type:"button",onClick:()=>void w(),disabled:m,children:m?"Tomando…":t?"Tomar flete":"Tomar pedido"})]}):o.jsx(E,{children:"Cargando…"})]})})}const ce=i.div`
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
`,pe=i.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,ue=i.div`
  display: grid;
  gap: 0.1rem;
`,k=i.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,he=i.button`
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
`,ge=i.div`
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
`,fe=45e3,me=2e4;function ke(){const{usuario:e}=N(),{status:c,error:h,locate:f}=J(),[t,r]=n.useState(null),[p,b]=n.useState([]),[d,m]=n.useState(null),[y,w]=n.useState(!0),[s,u]=n.useState(null),[l,P]=n.useState(null),g=(e==null?void 0:e.rol)==="fletero",D=g?"fletes":"pedidos",j=n.useCallback(async()=>{try{const{pedidos:a}=await v.disponibles(t==null?void 0:t.lat,t==null?void 0:t.lon);b(a),m(null)}catch(a){m(a instanceof H&&a.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${D}.`)}finally{w(!1)}},[t,D]);n.useEffect(()=>{f(a=>r(a))},[f]),n.useEffect(()=>{j();const a=window.setInterval(()=>void j(),me);return()=>window.clearInterval(a)},[j]),n.useEffect(()=>{if(!t)return;const a=()=>{v.actualizarUbicacion(t.lat,t.lon).catch(()=>{})};a();const $=window.setInterval(a,fe);return()=>window.clearInterval($)},[t]);const A=async a=>{await v.tomar(a,t==null?void 0:t.lat,t==null?void 0:t.lon);const $=p.find(R=>R.id===a)??null;u(null),await j(),$&&P($)};return o.jsxs(O,{showSearch:!1,children:[o.jsx(U,{children:o.jsx(V,{children:o.jsxs(T,{children:[o.jsx(B,{title:g?"Fletes disponibles":"Pedidos disponibles",chip:y?void 0:`${p.length}`,subtitle:g?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás."}),d?o.jsx(M,{role:"alert","data-tono":"error",children:d}):null,!t&&c!=="locating"?o.jsxs(ge,{children:[o.jsx(_,{size:16,"aria-hidden":"true"}),o.jsx("span",{children:h??"Sin tu ubicación no podemos ordenarlos por cercanía."}),o.jsxs("button",{type:"button",onClick:()=>f(a=>r(a)),children:[o.jsx(re,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,!y&&p.length===0&&!d?o.jsx(K,{icon:X,title:g?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,p.map(a=>o.jsx(Z,{children:o.jsx(G,{children:o.jsxs(T,{children:[o.jsxs(ce,{children:[o.jsx("span",{children:a.comercio}),typeof a.distanciaKm=="number"?o.jsxs(pe,{children:[a.distanciaKm," km"]}):null]}),o.jsxs(ue,{children:[o.jsxs(k,{children:["Retirás en ",a.comercio_direccion]}),o.jsxs(k,{children:["Entregás en ",a.direccion_texto]}),o.jsxs(k,{"data-suave":!0,children:[a.items," ",a.items===1?"producto":"productos"," ·"," ",C(a.total)]})]}),o.jsxs(he,{type:"button",onClick:()=>u(a.id),children:["Ver detalle ",g?"del flete":"del pedido"]})]})})},a.id))]})})}),o.jsx(de,{open:s!==null,pedidoId:s,onClose:()=>u(null),onTomar:A,esFletero:g}),o.jsx(Q,{open:l!==null,pedidoId:(l==null?void 0:l.id)??null,codigo:(l==null?void 0:l.codigo)??"",cliente:(l==null?void 0:l.cliente)??"",onClose:()=>P(null)})]})}export{ke as PanelRepartidorScreen};
