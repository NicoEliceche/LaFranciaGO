import{c as Z,q as n,aW as $,j as o,C as ae,a as L,X as te,ag as re,W as J,K as C,u as se,g as ne,M as ie,b as le,S as de,a8 as _,p as ce,E as O,a1 as pe,d as V,e as H}from"./index-BzywHFYN.js";import{r}from"./react-D_B_6qYb.js";import{u as ue}from"./useCurrentPosition-BYw6bfYw.js";import{C as he}from"./ChatPedidoDialog-Ow227e-q.js";import{s as ge}from"./saleUnits-CLP-TCsg.js";import{A as Q,a as me}from"./AuthScreenStyled-CuhtNF1e.js";import{P as ye,a as fe,b as xe,c as be}from"./PanelLoginDialogStyled-CM-7pWiI.js";import{R as $e}from"./refresh-cw-noOc8IrT.js";import"./send-CMy59vq8.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=Z("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=Z("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),M=n.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,A=n.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,k=n.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,we=n.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ke=n.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ze=n.div`
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
`;function Se({open:e,pedidoId:p,onClose:y,onTomar:j,esFletero:t=!1}){const[s,g]=r.useState(null),[S,u]=r.useState(null),[f,x]=r.useState(!1);if(r.useEffect(()=>{!e||!p||(g(null),u(null),$.detalle(p).then(g).catch(()=>u("No pudimos cargar el pedido.")))},[e,p]),r.useEffect(()=>{if(!e)return;const i=h=>{h.key==="Escape"&&y()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[y,e]),!e||!p)return null;const E=async()=>{x(!0),u(null);try{await j(p)}catch(i){u(i instanceof Error?i.message:`No pudimos tomar ${t?"el flete":"el pedido"}.`)}finally{x(!1)}};return o.jsx(ye,{onClick:y,role:"presentation",children:o.jsxs(fe,{role:"dialog","aria-modal":"true","aria-label":t?"Detalle del flete":"Detalle del pedido",onClick:i=>i.stopPropagation(),children:[o.jsxs(xe,{children:[o.jsxs("div",{children:[o.jsxs(ae,{children:[t?"Flete":"Pedido"," ",(s==null?void 0:s.pedido.codigo)??""]}),o.jsx(L,{children:"Mirá el detalle antes de tomarlo."})]}),o.jsx(be,{type:"button",onClick:y,"aria-label":"Cerrar",children:o.jsx(te,{size:18,"aria-hidden":"true"})})]}),S?o.jsx(Q,{role:"alert","data-tono":"error",children:S}):null,s?o.jsxs(o.Fragment,{children:[o.jsxs(M,{children:[o.jsxs(A,{children:[o.jsx(re,{size:15,"aria-hidden":"true"}),"Retirás en"]}),o.jsx(k,{children:s.pedido.comercio}),o.jsx(k,{"data-suave":!0,children:s.pedido.comercio_direccion})]}),o.jsxs(M,{children:[o.jsxs(A,{children:[o.jsx(J,{size:15,"aria-hidden":"true"}),"Entregás en"]}),o.jsx(k,{children:s.pedido.direccion_texto}),o.jsxs(k,{"data-suave":!0,children:[s.pedido.cliente,s.pedido.cliente_telefono?` · ${s.pedido.cliente_telefono}`:""]})]}),o.jsxs(M,{children:[o.jsxs(A,{children:[o.jsx(ve,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),s.items.map((i,h)=>o.jsxs(we,{children:[o.jsxs(ke,{children:[i.nombre,o.jsxs("span",{children:[" · ",ge(i.unidad_venta,i.escalon)]})]}),o.jsx("span",{children:C(i.subtotal)})]},`${i.nombre}-${h}`)),o.jsxs(ze,{children:[o.jsxs("span",{children:["Total ",t?"del flete":"del pedido"]}),o.jsx("strong",{children:C(s.pedido.total)})]}),s.pedido.metodo_pago?o.jsxs(k,{"data-suave":!0,children:["Paga con ",s.pedido.metodo_pago]}):null]}),o.jsx(me,{type:"button",onClick:()=>void E(),disabled:f,children:f?"Tomando…":t?"Tomar flete":"Tomar pedido"})]}):o.jsx(L,{children:"Cargando…"})]})})}const U=n.div`
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
`,B=n.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,K=n.div`
  display: grid;
  gap: 0.1rem;
`,b=n.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,W=n.button`
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
`,Pe=n.div`
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
`,Ce=n.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,Ee=n.span`
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
`,De=n.button`
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
`,_e=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,G=n.button`
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
`,Me=45e3,Ae=2e4,z=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],X=e=>Math.max(0,z.findIndex(p=>p.estado===e));function He(){const{usuario:e}=se(),{status:p,error:y,locate:j}=ue(),[t,s]=r.useState(null),[g,S]=r.useState([]),[u,f]=r.useState(null),[x,E]=r.useState(!0),[i,h]=r.useState(null),[d,T]=r.useState(null),[v,Y]=r.useState([]),[c,D]=r.useState("disponibles"),[q,R]=r.useState(null),m=(e==null?void 0:e.rol)==="fletero",F=m?"fletes":"pedidos",w=r.useCallback(async()=>{try{const[{pedidos:a},{envios:l}]=await Promise.all([$.disponibles(t==null?void 0:t.lat,t==null?void 0:t.lon),$.misEnvios()]);S(a),Y(l),f(null)}catch(a){f(a instanceof ne&&a.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${F}.`)}finally{E(!1)}},[t,F]);r.useEffect(()=>{j(a=>s(a))},[j]),r.useEffect(()=>{w();const a=window.setInterval(()=>void w(),Ae);return()=>window.clearInterval(a)},[w]),r.useEffect(()=>{if(!t)return;const a=()=>{$.actualizarUbicacion(t.lat,t.lon).catch(()=>{})};a();const l=window.setInterval(a,Me);return()=>window.clearInterval(l)},[t]);const ee=async a=>{await $.tomar(a,t==null?void 0:t.lat,t==null?void 0:t.lon);const l=g.find(P=>P.id===a)??null;h(null),D("mios"),await w(),l&&T(l)},oe=async a=>{const l=z[X(a.estado)+1];if(l){R(a.id);try{await $.avanzar(a.id,l.estado),await w()}catch{f("No pudimos actualizar el envío.")}finally{R(null)}}};return o.jsxs(ie,{showSearch:!1,children:[o.jsx(le,{children:o.jsx(de,{children:o.jsxs(_,{children:[o.jsx(ce,{title:c==="disponibles"?m?"Fletes disponibles":"Pedidos disponibles":"Lo que estás llevando",chip:x?void 0:`${c==="disponibles"?g.length:v.length}`,subtitle:c==="disponibles"?m?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.":"Marcá cada paso a medida que avanzás."}),o.jsxs(_e,{children:[o.jsx(G,{type:"button",onClick:()=>D("disponibles"),"data-activa":c==="disponibles",children:"Disponibles"}),o.jsxs(G,{type:"button",onClick:()=>D("mios"),"data-activa":c==="mios",children:["Mis envíos",v.length>0?` (${v.length})`:""]})]}),u?o.jsx(Q,{role:"alert","data-tono":"error",children:u}):null,c==="disponibles"&&!t&&p!=="locating"?o.jsxs(Pe,{children:[o.jsx(J,{size:16,"aria-hidden":"true"}),o.jsx("span",{children:y??"Sin tu ubicación no podemos ordenarlos por cercanía."}),o.jsxs("button",{type:"button",onClick:()=>j(a=>s(a)),children:[o.jsx($e,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,c==="disponibles"&&!x&&g.length===0&&!u?o.jsx(O,{icon:pe,title:m?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,c==="mios"&&!x&&v.length===0&&!u?o.jsx(O,{icon:je,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,c==="mios"?v.map(a=>{const l=X(a.estado),P=z[l+1];return o.jsx(V,{children:o.jsx(H,{children:o.jsxs(_,{children:[o.jsxs(U,{children:[o.jsx("span",{children:a.comercio}),o.jsx(B,{children:a.codigo})]}),o.jsxs(K,{children:[o.jsxs(b,{children:["Retirás en ",a.comercio_direccion]}),o.jsxs(b,{children:["Entregás en ",a.direccion_texto]}),o.jsxs(b,{"data-suave":!0,children:[a.cliente,a.cliente_telefono?` · ${a.cliente_telefono}`:""," · ",C(a.total),a.metodo_pago?` · ${a.metodo_pago}`:""]})]}),o.jsx(Ce,{children:z.map((N,I)=>o.jsx(Ee,{"data-hecho":I<=l,"data-actual":I===l,children:N.corto},N.estado))}),P?o.jsx(De,{type:"button",onClick:()=>void oe(a),disabled:q===a.id,"data-final":P.estado==="entregado",children:q===a.id?"Guardando…":z[l].accion}):null,o.jsxs(W,{type:"button",onClick:()=>h(a.pedido_id),children:["Ver detalle ",m?"del flete":"del pedido"]})]})})},a.id)}):null,c==="disponibles"&&g.map(a=>o.jsx(V,{children:o.jsx(H,{children:o.jsxs(_,{children:[o.jsxs(U,{children:[o.jsx("span",{children:a.comercio}),typeof a.distanciaKm=="number"?o.jsxs(B,{children:[a.distanciaKm," km"]}):null]}),o.jsxs(K,{children:[o.jsxs(b,{children:["Retirás en ",a.comercio_direccion]}),o.jsxs(b,{children:["Entregás en ",a.direccion_texto]}),o.jsxs(b,{"data-suave":!0,children:[a.items," ",a.items===1?"producto":"productos"," ·"," ",C(a.total)]})]}),o.jsxs(W,{type:"button",onClick:()=>h(a.id),children:["Ver detalle ",m?"del flete":"del pedido"]})]})})},a.id))]})})}),o.jsx(Se,{open:i!==null,pedidoId:i,onClose:()=>h(null),onTomar:ee,esFletero:m}),o.jsx(he,{open:d!==null,pedidoId:(d==null?void 0:d.id)??null,codigo:(d==null?void 0:d.codigo)??"",cliente:(d==null?void 0:d.cliente)??"",onClose:()=>T(null)})]})}export{He as PanelRepartidorScreen};
