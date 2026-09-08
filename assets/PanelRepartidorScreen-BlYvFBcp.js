import{c as ee,q as t,b2 as f,j as o,C as le,a as O,X as de,p as ce,r as oe,n as P,u as pe,g as ue,M as he,b as ge,S as me,l as M,m as ye,T as B,B as fe,N as xe,E as H,P as be,d as U,e as K}from"./index-BYdsqWK_.js";import{r as s}from"./react-D_B_6qYb.js";import{u as $e}from"./useCurrentPosition-BYw6bfYw.js";import{C as je}from"./ChatPedidoDialog-Cb4Ufqu9.js";import{s as ve}from"./saleUnits-CLP-TCsg.js";import{A as ae,a as we}from"./AuthScreenStyled-DIJQjVW0.js";import{P as ke,a as ze,b as Se,c as Ce}from"./PanelLoginDialogStyled-DizL1KZB.js";import{C as Pe}from"./car-BqL3mCLT.js";import{R as Ee}from"./refresh-cw-dEeILnnX.js";import{S as De}from"./split-CXksktjO.js";import"./formStyles-ZBeMJmX5.js";import"./send-DZ0vYo2X.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=ee("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=ee("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),T=t.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,_=t.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,z=t.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,_e=t.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Ve=t.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Ae=t.div`
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
`;function Fe({open:e,pedidoId:p,onClose:$,onTomar:w,esFletero:r=!1}){const[n,x]=s.useState(null),[C,u]=s.useState(null),[h,j]=s.useState(!1);if(s.useEffect(()=>{!e||!p||(x(null),u(null),f.detalle(p).then(x).catch(()=>u("No pudimos cargar el pedido.")))},[e,p]),s.useEffect(()=>{if(!e)return;const l=m=>{m.key==="Escape"&&$()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[$,e]),!e||!p)return null;const E=async()=>{j(!0),u(null);try{await w(p)}catch(l){u(l instanceof Error?l.message:`No pudimos tomar ${r?"el flete":"el pedido"}.`)}finally{j(!1)}};return o.jsx(ke,{onClick:$,role:"presentation",children:o.jsxs(ze,{role:"dialog","aria-modal":"true","aria-label":r?"Detalle del flete":"Detalle del pedido",onClick:l=>l.stopPropagation(),children:[o.jsxs(Se,{children:[o.jsxs("div",{children:[o.jsxs(le,{children:[r?"Flete":"Pedido"," ",(n==null?void 0:n.pedido.codigo)??""]}),o.jsx(O,{children:"Mirá el detalle antes de tomarlo."})]}),o.jsx(Ce,{type:"button",onClick:$,"aria-label":"Cerrar",children:o.jsx(de,{size:18,"aria-hidden":"true"})})]}),C?o.jsx(ae,{role:"alert","data-tono":"error",children:C}):null,n?o.jsxs(o.Fragment,{children:[o.jsxs(T,{children:[o.jsxs(_,{children:[o.jsx(ce,{size:15,"aria-hidden":"true"}),"Retirás en"]}),o.jsx(z,{children:n.pedido.comercio}),o.jsx(z,{"data-suave":!0,children:n.pedido.comercio_direccion})]}),o.jsxs(T,{children:[o.jsxs(_,{children:[o.jsx(oe,{size:15,"aria-hidden":"true"}),"Entregás en"]}),o.jsx(z,{children:n.pedido.direccion_texto}),o.jsxs(z,{"data-suave":!0,children:[n.pedido.cliente,n.pedido.cliente_telefono?` · ${n.pedido.cliente_telefono}`:""]})]}),o.jsxs(T,{children:[o.jsxs(_,{children:[o.jsx(Te,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),n.items.map((l,m)=>o.jsxs(_e,{children:[o.jsxs(Ve,{children:[l.nombre,o.jsxs("span",{children:[" · ",ve(l.unidad_venta,l.escalon)]})]}),o.jsx("span",{children:P(l.subtotal)})]},`${l.nombre}-${m}`)),o.jsxs(Ae,{children:[o.jsxs("span",{children:["Total ",r?"del flete":"del pedido"]}),o.jsx("strong",{children:P(n.pedido.total)})]}),n.pedido.metodo_pago?o.jsxs(z,{"data-suave":!0,children:["Paga con ",n.pedido.metodo_pago]}):null]}),o.jsx(we,{type:"button",onClick:()=>void E(),disabled:h,children:h?"Tomando…":r?"Tomar flete":"Tomar pedido"})]}):o.jsx(O,{children:"Cargando…"})]})})}const G=t.div`
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
`,X=t.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,Z=t.div`
  display: grid;
  gap: 0.1rem;
`,v=t.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,J=t.button`
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
`,qe=t.div`
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
`,Ne=t.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,Re=t.span`
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
`,Ie=t.button`
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
`,Le=t.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,Q=t.button`
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
`,Oe=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};

  > span {
    flex: 1 1 auto;
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,Be=t.button`
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
`,W=t.span`
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
`,He=t.button`
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
`,Ue=45e3,Ke=2e4,S=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],Ge={delivery:[{id:"moto",icono:fe},{id:"auto",icono:Pe}],fletero:[{id:"camioneta",icono:B},{id:"camion",icono:B}]},Y=e=>Math.max(0,S.findIndex(p=>p.estado===e));function io(){const{usuario:e}=pe(),{status:p,error:$,locate:w}=$e(),[r,n]=s.useState(null),[x,C]=s.useState([]),[u,h]=s.useState(null),[j,E]=s.useState(!0),[l,m]=s.useState(null),[d,V]=s.useState(null),[A,F]=s.useState(null),[k,re]=s.useState([]),[c,D]=s.useState("disponibles"),[q,N]=s.useState(null),g=(e==null?void 0:e.rol)==="fletero",R=g?"fletes":"pedidos",b=s.useCallback(async()=>{try{const[{pedidos:a,vehiculo:i},{envios:y}]=await Promise.all([f.disponibles(r==null?void 0:r.lat,r==null?void 0:r.lon),f.misEnvios()]);F(i),C(a),re(y),h(null)}catch(a){h(a instanceof ue&&a.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${R}.`)}finally{E(!1)}},[r,R]);s.useEffect(()=>{w(a=>n(a))},[w]),s.useEffect(()=>{b();const a=window.setInterval(()=>void b(),Ke);return()=>window.clearInterval(a)},[b]),s.useEffect(()=>{if(!r)return;const a=()=>{f.actualizarUbicacion(r.lat,r.lon).catch(()=>{})};a();const i=window.setInterval(a,Ue);return()=>window.clearInterval(i)},[r]);const te=async a=>{await f.tomar(a,r==null?void 0:r.lat,r==null?void 0:r.lon);const i=x.find(y=>y.id===a)??null;m(null),D("mios"),await b(),i&&V(i)},se=async a=>{F(a);try{await f.elegirVehiculo(a,g?"fletero":"delivery"),await b()}catch{h("No pudimos guardar tu vehículo.")}},ie=async a=>{const i=Math.max(2,a.viajes??2);try{const{estado:y}=await f.pedirFraccionar(a.id,i);h(y==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await b()}catch{h("No pudimos pedir el fraccionamiento.")}},ne=async a=>{const i=S[Y(a.estado)+1];if(i){N(a.id);try{await f.avanzar(a.id,i.estado),await b()}catch{h("No pudimos actualizar el envío.")}finally{N(null)}}};return o.jsxs(he,{showSearch:!1,children:[o.jsx(ge,{children:o.jsx(me,{children:o.jsxs(M,{children:[o.jsx(ye,{title:c==="disponibles"?g?"Fletes disponibles":"Pedidos disponibles":"Lo que estás llevando",chip:j?void 0:`${c==="disponibles"?x.length:k.length}`,subtitle:c==="disponibles"?g?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.":"Marcá cada paso a medida que avanzás."}),o.jsxs(Oe,{children:[o.jsx("span",{children:"Trabajás con"}),(Ge[g?"fletero":"delivery"]??[]).map(a=>{const i=a.icono;return o.jsxs(Be,{type:"button",onClick:()=>void se(a.id),"data-activo":A===a.id,"aria-pressed":A===a.id,children:[o.jsx(i,{size:14,"aria-hidden":"true"}),xe[a.id]]},a.id)})]}),o.jsxs(Le,{children:[o.jsx(Q,{type:"button",onClick:()=>D("disponibles"),"data-activa":c==="disponibles",children:"Disponibles"}),o.jsxs(Q,{type:"button",onClick:()=>D("mios"),"data-activa":c==="mios",children:["Mis envíos",k.length>0?` (${k.length})`:""]})]}),u?o.jsx(ae,{role:"alert","data-tono":"error",children:u}):null,c==="disponibles"&&!r&&p!=="locating"?o.jsxs(qe,{children:[o.jsx(oe,{size:16,"aria-hidden":"true"}),o.jsx("span",{children:$??"Sin tu ubicación no podemos ordenarlos por cercanía."}),o.jsxs("button",{type:"button",onClick:()=>w(a=>n(a)),children:[o.jsx(Ee,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,c==="disponibles"&&!j&&x.length===0&&!u?o.jsx(H,{icon:be,title:g?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,c==="mios"&&!j&&k.length===0&&!u?o.jsx(H,{icon:Me,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,c==="mios"?k.map(a=>{const i=Y(a.estado),y=S[i+1];return o.jsx(U,{children:o.jsx(K,{children:o.jsxs(M,{children:[o.jsxs(G,{children:[o.jsx("span",{children:a.comercio}),o.jsx(X,{children:a.codigo})]}),o.jsxs(Z,{children:[o.jsxs(v,{children:["Retirás en ",a.comercio_direccion]}),o.jsxs(v,{children:["Entregás en ",a.direccion_texto]}),o.jsxs(v,{"data-suave":!0,children:[a.cliente,a.cliente_telefono?` · ${a.cliente_telefono}`:""," · ",P(a.total),a.metodo_pago?` · ${a.metodo_pago}`:""]})]}),o.jsx(Ne,{children:S.map((I,L)=>o.jsx(Re,{"data-hecho":L<=i,"data-actual":L===i,children:I.corto},I.estado))}),y?o.jsx(Ie,{type:"button",onClick:()=>void ne(a),disabled:q===a.id,"data-final":y.estado==="entregado",children:q===a.id?"Guardando…":S[i].accion}):null,o.jsxs(J,{type:"button",onClick:()=>m(a.pedido_id),children:["Ver detalle ",g?"del flete":"del pedido"]})]})})},a.id)}):null,c==="disponibles"&&x.map(a=>o.jsx(U,{children:o.jsx(K,{children:o.jsxs(M,{children:[o.jsxs(G,{children:[o.jsx("span",{children:a.comercio}),a.entraEnTuVehiculo===!1?o.jsxs(W,{"data-entra":"false",children:[a.viajes," viajes"]}):typeof a.litros=="number"&&a.litros>0?o.jsx(W,{"data-entra":"true",children:"Entra"}):null,typeof a.distanciaKm=="number"?o.jsxs(X,{children:[a.distanciaKm," km"]}):null]}),o.jsxs(Z,{children:[o.jsxs(v,{children:["Retirás en ",a.comercio_direccion]}),o.jsxs(v,{children:["Entregás en ",a.direccion_texto]}),o.jsxs(v,{"data-suave":!0,children:[a.items," ",a.items===1?"producto":"productos"," ·"," ",P(a.total)]})]}),o.jsxs(J,{type:"button",onClick:()=>m(a.id),children:["Ver detalle ",g?"del flete":"del pedido"]}),(a.items??0)>1?o.jsxs(He,{type:"button",onClick:()=>void ie(a),children:[o.jsx(De,{size:13,"aria-hidden":"true"})," ",a.entraEnTuVehiculo===!1?`Partir en ${a.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},a.id))]})})}),o.jsx(Fe,{open:l!==null,pedidoId:l,onClose:()=>m(null),onTomar:te,esFletero:g}),o.jsx(je,{rol:"repartidor",open:d!==null,pedidoId:(d==null?void 0:d.id)??null,codigo:(d==null?void 0:d.codigo)??"",cliente:(d==null?void 0:d.cliente)??"",onClose:()=>V(null)})]})}export{io as PanelRepartidorScreen};
