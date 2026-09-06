import{c as F,q as n,aP as j,j as o,C as R,a as D,X as q,aa as I,O as T,D as k,u as L,aE as N,M as O,b as U,S as B,a2 as E,l as H,E as V,W as K,d as W,e as X}from"./index--oxwNYaS.js";import{r as s}from"./react-D_B_6qYb.js";import{u as Z}from"./useCurrentPosition-BYw6bfYw.js";import{C as G}from"./ChatPedidoDialog-DJwypnJA.js";import{s as J}from"./saleUnits-CLP-TCsg.js";import{A,a as Q}from"./AuthScreenStyled-DiufKezQ.js";import{P as Y,a as ee,b as oe,c as ae}from"./PanelLoginDialogStyled-CamNoWR2.js";import{R as te}from"./refresh-cw-DFjAnBQK.js";import"./send-D1QYa4r6.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=F("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),w=n.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,z=n.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,y=n.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,se=n.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ne=n.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ie=n.div`
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
`;function le({open:e,pedidoId:l,onClose:c,onTomar:g}){const[a,m]=s.useState(null),[d,p]=s.useState(null),[u,f]=s.useState(!1);if(s.useEffect(()=>{!e||!l||(m(null),p(null),j.detalle(l).then(m).catch(()=>p("No pudimos cargar el pedido.")))},[e,l]),s.useEffect(()=>{if(!e)return;const r=h=>{h.key==="Escape"&&c()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[c,e]),!e||!l)return null;const x=async()=>{f(!0),p(null);try{await g(l)}catch(r){p(r instanceof Error?r.message:"No pudimos tomar el pedido.")}finally{f(!1)}};return o.jsx(Y,{onClick:c,role:"presentation",children:o.jsxs(ee,{role:"dialog","aria-modal":"true","aria-label":"Detalle del pedido",onClick:r=>r.stopPropagation(),children:[o.jsxs(oe,{children:[o.jsxs("div",{children:[o.jsxs(R,{children:["Pedido ",(a==null?void 0:a.pedido.codigo)??""]}),o.jsx(D,{children:"Mirá el detalle antes de tomarlo."})]}),o.jsx(ae,{type:"button",onClick:c,"aria-label":"Cerrar",children:o.jsx(q,{size:18,"aria-hidden":"true"})})]}),d?o.jsx(A,{role:"alert","data-tono":"error",children:d}):null,a?o.jsxs(o.Fragment,{children:[o.jsxs(w,{children:[o.jsxs(z,{children:[o.jsx(I,{size:15,"aria-hidden":"true"}),"Retirás en"]}),o.jsx(y,{children:a.pedido.comercio}),o.jsx(y,{"data-suave":!0,children:a.pedido.comercio_direccion})]}),o.jsxs(w,{children:[o.jsxs(z,{children:[o.jsx(T,{size:15,"aria-hidden":"true"}),"Entregás en"]}),o.jsx(y,{children:a.pedido.direccion_texto}),o.jsxs(y,{"data-suave":!0,children:[a.pedido.cliente,a.pedido.cliente_telefono?` · ${a.pedido.cliente_telefono}`:""]})]}),o.jsxs(w,{children:[o.jsxs(z,{children:[o.jsx(re,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),a.items.map((r,h)=>o.jsxs(se,{children:[o.jsxs(ne,{children:[r.nombre,o.jsxs("span",{children:[" · ",J(r.unidad_venta,r.escalon)]})]}),o.jsx("span",{children:k(r.subtotal)})]},`${r.nombre}-${h}`)),o.jsxs(ie,{children:[o.jsx("span",{children:"Total del pedido"}),o.jsx("strong",{children:k(a.pedido.total)})]}),a.pedido.metodo_pago?o.jsxs(y,{"data-suave":!0,children:["Paga con ",a.pedido.metodo_pago]}):null]}),o.jsx(Q,{type:"button",onClick:()=>void x(),disabled:u,children:u?"Tomando…":"Tomar pedido"})]}):o.jsx(D,{children:"Cargando…"})]})})}const de=n.div`
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
`,ce=n.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,pe=n.div`
  display: grid;
  gap: 0.1rem;
`,S=n.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ue=n.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
`,he=n.button`
  min-height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }
`,ge=n.button`
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
`,me=n.div`
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
`,fe=45e3,ye=2e4;function Pe(){const{usuario:e}=L(),{status:l,error:c,locate:g}=Z(),[a,m]=s.useState(null),[d,p]=s.useState([]),[u,f]=s.useState(null),[x,r]=s.useState(!0),[h,v]=s.useState(null),[i,P]=s.useState(null),M=(e==null?void 0:e.rol)==="fletero",b=s.useCallback(async()=>{try{const{pedidos:t}=await j.disponibles(a==null?void 0:a.lat,a==null?void 0:a.lon);p(t),f(null)}catch(t){f(t instanceof N&&t.status===404?"Esta sección es para repartidores y fleteros aprobados.":"No pudimos cargar los pedidos.")}finally{r(!1)}},[a]);s.useEffect(()=>{g(t=>m(t))},[g]),s.useEffect(()=>{b();const t=window.setInterval(()=>void b(),ye);return()=>window.clearInterval(t)},[b]),s.useEffect(()=>{if(!a)return;const t=()=>{j.actualizarUbicacion(a.lat,a.lon).catch(()=>{})};t();const $=window.setInterval(t,fe);return()=>window.clearInterval($)},[a]);const C=async t=>{await j.tomar(t,a==null?void 0:a.lat,a==null?void 0:a.lon);const $=d.find(_=>_.id===t)??null;v(null),await b(),$&&P($)};return o.jsxs(O,{showSearch:!1,children:[o.jsx(U,{children:o.jsx(B,{children:o.jsxs(E,{children:[o.jsx(H,{title:"Pedidos disponibles",chip:x?void 0:`${d.length}`,subtitle:M?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás."}),u?o.jsx(A,{role:"alert","data-tono":"error",children:u}):null,!a&&l!=="locating"?o.jsxs(me,{children:[o.jsx(T,{size:16,"aria-hidden":"true"}),o.jsx("span",{children:c??"Sin tu ubicación no podemos ordenarlos por cercanía."}),o.jsxs("button",{type:"button",onClick:()=>g(t=>m(t)),children:[o.jsx(te,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,!x&&d.length===0&&!u?o.jsx(V,{icon:K,title:"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,d.map(t=>o.jsx(W,{children:o.jsx(X,{children:o.jsxs(E,{children:[o.jsxs(de,{children:[o.jsx("span",{children:t.comercio}),typeof t.distanciaKm=="number"?o.jsxs(ce,{children:[t.distanciaKm," km"]}):null]}),o.jsxs(pe,{children:[o.jsxs(S,{children:["Retirás en ",t.comercio_direccion]}),o.jsxs(S,{children:["Entregás en ",t.direccion_texto]}),o.jsxs(S,{"data-suave":!0,children:[t.items," ",t.items===1?"producto":"productos"," ·"," ",k(t.total)]})]}),o.jsxs(ue,{children:[o.jsx(he,{type:"button",onClick:()=>v(t.id),children:"Ver detalles"}),o.jsx(ge,{type:"button",onClick:()=>void C(t.id),children:"Tomar pedido"})]})]})})},t.id))]})})}),o.jsx(le,{open:h!==null,pedidoId:h,onClose:()=>v(null),onTomar:C}),o.jsx(G,{open:i!==null,pedidoId:(i==null?void 0:i.id)??null,codigo:(i==null?void 0:i.codigo)??"",cliente:(i==null?void 0:i.cliente)??"",onClose:()=>P(null)})]})}export{Pe as PanelRepartidorScreen};
