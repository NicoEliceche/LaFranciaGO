import{k as L,j as o,q as i,h as ee,s as oe,l as I,M as q,b as O,S as B,E as te,P as re,T as D,B as J,m as V,n as H,N as ae,o as U,d as Z,e as Y,p as ne,r as ie,t as se}from"./index-99PGXNK_.js";import{r as n,h as ce}from"./react-D_B_6qYb.js";import{C as le}from"./ChatPedidoDialog-hQAHaIfq.js";import{L as x,M as de,a as pe}from"./AddressMapStyled-CnCqfRwc.js";import{A as ue}from"./AuthScreenStyled-FgmKJh9V.js";import{C as me}from"./car-DZZx2n9E.js";import{M as he}from"./message-square-e5635FkZ.js";import{C as ge}from"./credit-card-BijrV7FO.js";import"./ChatPedidoDialogStyled-1pryKiQK.js";import"./formStyles-BQisKvsN.js";import"./PanelLoginDialogStyled-CkVOZnk8.js";import"./MotivoDialog-D5E5ixNY.js";import"./send-DOQSoDjN.js";import"./info-Dph3JUFO.js";function fe({comercio:e,destino:d,repartidor:$,posicionFresca:v=!0,nombreRepartidor:y}){const E=n.useRef(null),h=n.useRef(null),b=n.useRef({}),m=n.useRef(null),z=n.useRef(!1);return n.useEffect(()=>{const c=E.current;if(!c||h.current)return;const p=x.map(c,{center:[L.lat,L.lon],zoom:14,zoomControl:!0});x.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(p),h.current=p;const g=window.requestAnimationFrame(()=>p.invalidateSize());return()=>{window.cancelAnimationFrame(g),p.remove(),h.current=null,b.current={},m.current=null}},[]),n.useEffect(()=>{var C;const c=h.current;if(!c)return;const p=[{id:"comercio",punto:e,clase:"lfg-seg-comercio",etiqueta:"Sale de acá"},{id:"destino",punto:d,clase:"lfg-seg-destino",etiqueta:"Tu dirección"},{id:"repartidor",punto:$,clase:v?"lfg-seg-movil":"lfg-seg-movil lfg-seg-movil--viejo",etiqueta:y??"Repartidor"}];for(const{id:t,punto:u,clase:s,etiqueta:_}of p){const l=b.current[t];if(!u){l&&(l.remove(),delete b.current[t]);continue}const R=[u.lat,u.lon];if(l){l.setLatLng(R),(((C=l.getElement())==null?void 0:C.className)??"").includes(s.split(" ").pop()??s)||l.setIcon(x.divIcon({className:s,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})),l.setTooltipContent(_);continue}const w=x.marker(R,{icon:x.divIcon({className:s,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})}).addTo(c).bindTooltip(_,{direction:"top",offset:[0,-10]});b.current[t]=w}const g=[e,d].filter(Boolean);m.current&&(m.current.remove(),m.current=null),g.length===2&&(m.current=x.polyline(g.map(t=>[t.lat,t.lon]),{color:"#0047E7",weight:2,opacity:.35,dashArray:"6 6"}).addTo(c));const f=[e,d,$].filter(Boolean);if(!z.current&&f.length>0){const t=()=>{c.invalidateSize();const u=c.getSize();if(u.x===0||u.y===0){window.requestAnimationFrame(t);return}c.fitBounds(x.latLngBounds(f.map(s=>[s.lat,s.lon])),{padding:[28,28],maxZoom:15}),z.current=!0};window.requestAnimationFrame(t)}},[e,d,$,v,y]),o.jsx(de,{children:o.jsx(pe,{ref:E})})}const xe=i.div`
  height: 20rem;

  @media (min-width: 48rem) {
    height: 24rem;
  }
`,ye=i.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,be=i.li`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: ${({theme:e})=>e.spacing[3]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  position: relative;

  /* La línea que une los pasos, salvo después del último. */
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 0.68rem;
    top: 1.4rem;
    bottom: 0;
    width: 2px;
    background: ${({theme:e})=>e.color.border};
  }

  &[data-hecho='true']:not(:last-child)::before {
    background: ${({theme:e})=>e.color.primary};
  }

  &:last-child {
    padding-bottom: 0;
  }
`,je=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  z-index: 1;

  &[data-hecho='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  /* El paso en curso late: es lo que está pasando ahora. */
  &[data-actual='true'] {
    animation: seg-latido 2s ease-in-out infinite;
  }

  @keyframes seg-latido {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(0, 71, 231, 0.4);
    }
    50% {
      box-shadow: 0 0 0 6px rgba(0, 71, 231, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-actual='true'] {
      animation: none;
    }
  }
`,$e=i.div`
  display: grid;
  gap: 0.1rem;
  padding-top: 0.1rem;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    color: ${({theme:e})=>e.color.textSoft};
  }

  > span {
    color: ${({theme:e})=>e.color.textMuted};
    font-size: ${({theme:e})=>e.typography.size.xs};
    line-height: 1.35;
  }

  &[data-hecho='true'] > strong {
    color: ${({theme:e})=>e.color.text};
  }
`,k=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,P=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,M=i.div`
  display: grid;
  gap: 0.1rem;
  flex: 1 1 auto;
  min-width: 0;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ve=i.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  background: rgba(52, 211, 153, 0.16);
  color: ${({theme:e})=>e.color.success};

  &[data-fresca='false'] {
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.textSoft};
  }
`,we=i.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Se=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  > span:first-child {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  > small {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Q=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
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
`,Ee=i.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.primary};
  background: ${({theme:e})=>e.color.primarySoft};
`,N=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};

  > span:first-child {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-variant-numeric: tabular-nums;
  }
`,ze=15e3,Ce=3,_e={moto:J,auto:me,camioneta:D,camion:D},A=[{origen:"preparacion",estado:"preparando",titulo:"Preparando tu pedido",texto:"El comercio lo está armando."},{origen:"preparacion",estado:"listo",titulo:"Listo para retirar",texto:"Ya lo puede pasar a buscar el repartidor."},{origen:"envio",estado:"asignado",titulo:"Lo toma un repartidor",texto:"Va camino al comercio."},{origen:"envio",estado:"retirado",titulo:"Lo retiró del comercio",texto:"Ya tiene tu pedido."},{origen:"envio",estado:"en_camino",titulo:"En camino",texto:"Va para tu dirección."},{origen:"envio",estado:"entregado",titulo:"Entregado",texto:"¡Que lo disfrutes!"}],W={recibido:0,preparando:1,listo:2},G={buscando:0,asignado:1,retirado:2,en_camino:3,entregado:4};function Re(e){if(!e)return null;const d=new Date(e.replace(" ","T")+"Z");return Number.isNaN(d.getTime())?null:Math.max(0,Math.round((Date.now()-d.getTime())/6e4))}function He(){const{pedidoId:e=""}=ce(),[d,$]=n.useState(null),[v,y]=n.useState(null),[E,h]=n.useState(!0),[b,m]=n.useState(!1),[z,c]=n.useState([]),[p,g]=n.useState(!1),f=n.useCallback(async()=>{if(!e||!ee()){h(!1);return}try{const[r,a]=await Promise.all([oe.ver(e),I.listar(e).catch(()=>null)]);$(r),a&&c(a.extras),y(null)}catch{y("No pudimos cargar el seguimiento.")}finally{h(!1)}},[e]);n.useEffect(()=>{f();const r=window.setInterval(()=>void f(),ze);return()=>window.clearInterval(r)},[f]);const C=async()=>{if(!(!e||p)){g(!0);try{const{url:r}=await I.pagar(e);window.location.href=r}catch(r){y(r instanceof Error?r.message:"No pudimos abrir el pago."),g(!1)}}};if(!d)return o.jsx(q,{showSearch:!1,children:o.jsx(O,{children:o.jsx(B,{children:v?o.jsx(ue,{role:"alert","data-tono":"error",children:v}):E?null:o.jsx(te,{icon:re,title:"No encontramos el pedido",text:"Puede que ya no exista o que sea de otra cuenta.",ctaLabel:"Ver mis pedidos",ctaTo:"/pedidos"})})})});const{pedido:t,partes:u}=d,s=t.envio_estado??"buscando",_=A.map((r,a)=>r.origen==="preparacion"?(W[t.preparacion]??0)>=(W[r.estado]??0)?a:-1:(G[s]??0)>=(G[r.estado]??0)?a:-1),l=Math.max(0,..._),R=A.map((r,a)=>a<=l),w=z.filter(r=>r.estado==="comprado"),T=w.reduce((r,a)=>r+(a.precio??0),0),S=Re(t.ubicacion_en),F=S!==null&&S<=Ce,K=t.vehiculo?_e[t.vehiculo]:J,X=s!=="entregado"&&typeof t.lat=="number"&&typeof t.lon=="number";return o.jsxs(q,{showSearch:!1,children:[o.jsx(O,{children:o.jsx(B,{children:o.jsxs(V,{children:[o.jsx(H,{title:`Pedido ${t.codigo}`,chip:t.parte_numero?`Parte ${t.parte_numero} de ${t.partes_total}`:void 0,subtitle:`${t.comercio} · ${t.direccion_texto}`}),o.jsx(xe,{children:o.jsx(fe,{comercio:t.comercio_lat&&t.comercio_lon?{lat:t.comercio_lat,lon:t.comercio_lon}:null,destino:t.destino_lat&&t.destino_lon?{lat:t.destino_lat,lon:t.destino_lon}:null,repartidor:X?{lat:t.lat,lon:t.lon}:null,posicionFresca:F,nombreRepartidor:t.repartidor})}),t.repartidor?o.jsxs(k,{children:[o.jsx(P,{children:o.jsx(K,{size:20,"aria-hidden":"true"})}),o.jsxs(M,{children:[o.jsx("strong",{children:t.repartidor}),o.jsxs("span",{children:[t.vehiculo?ae[t.vehiculo]:"En camino",t.repartidor_telefono?` · ${t.repartidor_telefono}`:""]})]}),S!==null?o.jsx(ve,{"data-fresca":F,children:S===0?"ahora":`hace ${S} min`}):null]}):null,s!=="entregado"?o.jsxs(Q,{type:"button",onClick:()=>m(!0),children:[o.jsx(he,{size:16,"aria-hidden":"true"}),t.repartidor?"Hablar con quien lo trae":"Abrir el chat del pedido"]}):null,w.length>0?o.jsxs(Ee,{children:[o.jsx(N,{children:o.jsx("span",{children:o.jsx("strong",{children:"Extras comprados"})})}),w.map(r=>o.jsxs(N,{children:[o.jsx("span",{children:r.descripcion}),o.jsx("strong",{children:U(r.precio??0)})]},r.id)),o.jsxs(N,{children:[o.jsx("span",{children:"Total a pagar"}),o.jsx("strong",{children:U(T)})]}),o.jsxs(Q,{type:"button",onClick:()=>void C(),disabled:p,children:[o.jsx(ge,{size:16,"aria-hidden":"true"}),p?"Abriendo el pago…":"Pagar los extras"]})]}):null,o.jsx(Z,{children:o.jsx(Y,{children:o.jsx(ye,{children:A.map((r,a)=>{const j=R[a];return o.jsxs(be,{"data-hecho":j,children:[o.jsx(je,{"data-hecho":j,"data-actual":a===l&&s!=="entregado",children:j?o.jsx(ne,{size:13,"aria-hidden":"true"}):o.jsx("span",{"aria-hidden":"true"})}),o.jsxs($e,{"data-hecho":j,children:[o.jsx("strong",{children:r.titulo}),a===l?o.jsx("span",{children:r.texto}):null]})]},r.estado)})})})}),u.length>0?o.jsxs(o.Fragment,{children:[o.jsx(H,{title:"Las entregas",subtitle:"Tu pedido viene en partes. Cada una la puede traer alguien distinto."}),o.jsx(we,{children:u.map(r=>{var a;return o.jsxs(Se,{children:[o.jsxs("span",{children:["Parte ",r.parte_numero]}),o.jsx("small",{children:r.repartidor?`${r.repartidor} · ${((a=A.find(j=>j.estado===r.envio_estado))==null?void 0:a.titulo)??"En preparación"}`:"Buscando repartidor"})]},r.id)})})]}):null,o.jsx(Z,{children:o.jsx(Y,{children:o.jsxs(V,{children:[o.jsxs(k,{as:"div",children:[o.jsx(P,{children:o.jsx(ie,{size:18,"aria-hidden":"true"})}),o.jsxs(M,{children:[o.jsx("strong",{children:t.comercio}),o.jsx("span",{children:t.comercio_direccion})]})]}),o.jsxs(k,{as:"div",children:[o.jsx(P,{children:o.jsx(se,{size:18,"aria-hidden":"true"})}),o.jsxs(M,{children:[o.jsx("strong",{children:"Tu dirección"}),o.jsx("span",{children:t.direccion_texto})]})]})]})})})]})})}),o.jsx(le,{rol:"cliente",open:b,pedidoId:e,codigo:t.codigo,cliente:t.comercio,onClose:()=>{m(!1),f()}})]})}export{He as SeguimientoScreen};
