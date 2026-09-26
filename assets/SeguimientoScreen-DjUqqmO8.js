import{L as F,j as o,h as oe,s as te,o as O,M as D,C as B,S as V,e as ae,E as re,p as H,q as U,N as ne,r as K,a as Z,b as Y}from"./index-BEHxigxl.js";import{r as i,h as ie}from"./react-6hK8W6IX.js";import{C as se}from"./ChatPedidoDialog-DVxARUzJ.js";import{L as v,M as ce,a as le}from"./AddressMapStyled-t4MMqQNA.js";import{q as s}from"./estilos-DzHAJWDP.js";import{h as de,T as Q,_ as ue,u as X,$ as pe,a0 as me,a1 as he,C as ge,i as fe,M as xe}from"./iconos-DPkufriG.js";import"./ChatPedidoDialogStyled-MvteS_Yt.js";import"./MotivoDialog-ixAsS--3.js";function ye({comercio:e,destino:r,repartidor:f,posicionFresca:l=!0,nombreRepartidor:p}){const x=i.useRef(null),h=i.useRef(null),y=i.useRef({}),j=i.useRef(null),S=i.useRef(!1);return i.useEffect(()=>{const d=x.current;if(!d||h.current)return;const m=v.map(d,{center:[F.lat,F.lon],zoom:14,zoomControl:!0});v.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(m),h.current=m;const $=window.requestAnimationFrame(()=>m.invalidateSize());return()=>{window.cancelAnimationFrame($),m.remove(),h.current=null,y.current={},j.current=null}},[]),i.useEffect(()=>{var z;const d=h.current;if(!d)return;const m=[{id:"comercio",punto:e,clase:"lfg-seg-comercio",etiqueta:"Sale de acá"},{id:"destino",punto:r,clase:"lfg-seg-destino",etiqueta:"Tu dirección"},{id:"repartidor",punto:f,clase:l?"lfg-seg-movil":"lfg-seg-movil lfg-seg-movil--viejo",etiqueta:p??"Repartidor"}];for(const{id:t,punto:g,clase:c,etiqueta:M}of m){const u=y.current[t];if(!g){u&&(u.remove(),delete y.current[t]);continue}const R=[g.lat,g.lon];if(u){u.setLatLng(R),(((z=u.getElement())==null?void 0:z.className)??"").includes(c.split(" ").pop()??c)||u.setIcon(v.divIcon({className:c,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})),u.setTooltipContent(M);continue}const _=v.marker(R,{icon:v.divIcon({className:c,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})}).addTo(d).bindTooltip(M,{direction:"top",offset:[0,-10]});y.current[t]=_}const $=[e,r].filter(Boolean);j.current&&(j.current.remove(),j.current=null),$.length===2&&(j.current=v.polyline($.map(t=>[t.lat,t.lon]),{color:"#0047E7",weight:2,opacity:.35,dashArray:"6 6"}).addTo(d));const b=[e,r,f].filter(Boolean);if(!S.current&&b.length>0){const t=()=>{d.invalidateSize();const g=d.getSize();if(g.x===0||g.y===0){window.requestAnimationFrame(t);return}d.fitBounds(v.latLngBounds(b.map(c=>[c.lat,c.lon])),{padding:[28,28],maxZoom:15}),S.current=!0};window.requestAnimationFrame(t)}},[e,r,f,l,p]),o.jsx(ce,{children:o.jsx(le,{ref:x})})}const je=s.div`
  height: 20rem;

  @media (min-width: 48rem) {
    height: 24rem;
  }
`,$e=s.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,be=s.li`
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
`,ve=s.span`
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
`,Ee=s.div`
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
`,k=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,P=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,I=s.div`
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
`,_e=s.span`
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
`,we=s.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Se=s.div`
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
`,W=s.button`
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
`,ze=s.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.primary};
  background: ${({theme:e})=>e.color.primarySoft};
`,L=s.div`
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
`,Me=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px dashed ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};

  > svg {
    flex: none;
    margin-top: 0.15rem;
    color: ${({theme:e})=>e.color.textMuted};
  }

  > div {
    display: grid;
    gap: 0.2rem;
    min-width: 0;
  }

  strong {
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: 1.25;
  }

  span {
    color: ${({theme:e})=>e.color.textMuted};
    font-size: ${({theme:e})=>e.typography.size.xs};
    line-height: 1.45;
  }
`,Re=15e3,Ce=3,Ae={moto:X,auto:ue,camioneta:Q,camion:Q},C=[{origen:"preparacion",estado:"preparando",titulo:"Preparando tu pedido",texto:"El comercio lo está armando."},{origen:"preparacion",estado:"listo",titulo:"Listo para retirar",texto:"Ya lo puede pasar a buscar el repartidor."},{origen:"envio",estado:"asignado",titulo:"Lo toma un repartidor",texto:"Va camino al comercio."},{origen:"envio",estado:"retirado",titulo:"Lo retiró del comercio",texto:"Ya tiene tu pedido."},{origen:"envio",estado:"en_camino",titulo:"En camino",texto:"Va para tu dirección."},{origen:"envio",estado:"entregado",titulo:"Entregado",texto:"¡Que lo disfrutes!"}],G={recibido:0,preparando:1,listo:2},J={buscando:0,asignado:1,retirado:2,en_camino:3,entregado:4},ke={moto:22,auto:20,camioneta:18,camion:14};function Pe(e,r){const l=y=>y*Math.PI/180,p=l(r.lat-e.lat),x=l(r.lon-e.lon),h=Math.sin(p/2)**2+Math.cos(l(e.lat))*Math.cos(l(r.lat))*Math.sin(x/2)**2;return 2*6371*Math.asin(Math.sqrt(h))}function Ie(e,r,f){if(!e||!r)return null;const l=Pe(e,r)*1.3,p=ke[f??"moto"],x=l/p*60+4;return Math.max(5,Math.round(x))}function Le(e){if(!e)return null;const r=new Date(e.replace(" ","T")+"Z");return Number.isNaN(r.getTime())?null:Math.max(0,Math.round((Date.now()-r.getTime())/6e4))}function He(){const{pedidoId:e=""}=ie(),[r,f]=i.useState(null),[l,p]=i.useState(null),[x,h]=i.useState(!0),[y,j]=i.useState(!1),[S,d]=i.useState([]),[m,$]=i.useState(!1),b=i.useCallback(async()=>{if(!e||!oe()){h(!1);return}try{const[a,n]=await Promise.all([te.ver(e),O.listar(e).catch(()=>null)]);f(a),n&&d(n.extras),p(null)}catch{p("No pudimos cargar el seguimiento.")}finally{h(!1)}},[e]);i.useEffect(()=>{b();const a=window.setInterval(()=>void b(),Re);return()=>window.clearInterval(a)},[b]);const z=async()=>{if(!(!e||m)){$(!0);try{const{url:a}=await O.pagar(e);window.location.href=a}catch(a){p(a instanceof Error?a.message:"No pudimos abrir el pago."),$(!1)}}};if(!r)return o.jsx(D,{showSearch:!1,children:o.jsx(B,{children:o.jsx(V,{children:l?o.jsx(ae,{role:"alert","data-tono":"error",children:l}):x?null:o.jsx(re,{icon:de,title:"No encontramos el pedido",text:"Puede que ya no exista o que sea de otra cuenta.",ctaLabel:"Ver mis pedidos",ctaTo:"/pedidos"})})})});const{pedido:t,partes:g}=r,c=t.envio_estado??"buscando",M=C.map((a,n)=>a.origen==="preparacion"?(G[t.preparacion]??0)>=(G[a.estado]??0)?n:-1:(J[c]??0)>=(J[a.estado]??0)?n:-1),u=Math.max(0,...M),R=C.map((a,n)=>n<=u),_=S.filter(a=>a.estado==="comprado"),T=_.reduce((a,n)=>a+(n.precio??0),0),w=Le(t.ubicacion_en),N=w!==null&&w<=Ce,A=Ie(t.comercio_lat&&t.comercio_lon?{lat:t.comercio_lat,lon:t.comercio_lon}:null,t.destino_lat&&t.destino_lon?{lat:t.destino_lat,lon:t.destino_lon}:null,t.vehiculo??null),ee=t.vehiculo?Ae[t.vehiculo]:X,q=c!=="entregado"&&typeof t.lat=="number"&&typeof t.lon=="number";return o.jsxs(D,{showSearch:!1,children:[o.jsx(B,{children:o.jsx(V,{children:o.jsxs(H,{children:[o.jsx(U,{title:`Pedido ${t.codigo}`,chip:t.parte_numero?`Parte ${t.parte_numero} de ${t.partes_total}`:void 0,subtitle:`${t.comercio} · ${t.direccion_texto}`}),o.jsx(je,{children:o.jsx(ye,{comercio:t.comercio_lat&&t.comercio_lon?{lat:t.comercio_lat,lon:t.comercio_lon}:null,destino:t.destino_lat&&t.destino_lon?{lat:t.destino_lat,lon:t.destino_lon}:null,repartidor:q?{lat:t.lat,lon:t.lon}:null,posicionFresca:N,nombreRepartidor:t.repartidor})}),t.repartidor&&!q&&c!=="entregado"?o.jsxs(Me,{role:"status",children:[o.jsx(pe,{size:18,"aria-hidden":"true"}),o.jsxs("div",{children:[o.jsx("strong",{children:A?`Llegaría en unos ${A} minutos`:"En camino"}),o.jsxs("span",{children:[t.repartidor," no está compartiendo su ubicación, así que no podemos mostrarte dónde va",A?". El tiempo es estimado por la distancia":"","."]})]})]}):null,t.repartidor?o.jsxs(k,{children:[o.jsx(P,{children:o.jsx(ee,{size:20,"aria-hidden":"true"})}),o.jsxs(I,{children:[o.jsx("strong",{children:t.repartidor}),o.jsxs("span",{children:[t.vehiculo?ne[t.vehiculo]:"En camino",t.repartidor_telefono?` · ${t.repartidor_telefono}`:""]})]}),w!==null?o.jsx(_e,{"data-fresca":N,children:w===0?"ahora":`hace ${w} min`}):null]}):null,c!=="entregado"?o.jsxs(W,{type:"button",onClick:()=>j(!0),children:[o.jsx(me,{size:16,"aria-hidden":"true"}),t.repartidor?"Hablar con quien lo trae":"Abrir el chat del pedido"]}):null,_.length>0?o.jsxs(ze,{children:[o.jsx(L,{children:o.jsx("span",{children:o.jsx("strong",{children:"Extras comprados"})})}),_.map(a=>o.jsxs(L,{children:[o.jsx("span",{children:a.descripcion}),o.jsx("strong",{children:K(a.precio??0)})]},a.id)),o.jsxs(L,{children:[o.jsx("span",{children:"Total a pagar"}),o.jsx("strong",{children:K(T)})]}),o.jsxs(W,{type:"button",onClick:()=>void z(),disabled:m,children:[o.jsx(he,{size:16,"aria-hidden":"true"}),m?"Abriendo el pago…":"Pagar los extras"]})]}):null,o.jsx(Z,{children:o.jsx(Y,{children:o.jsx($e,{children:C.map((a,n)=>{const E=R[n];return o.jsxs(be,{"data-hecho":E,children:[o.jsx(ve,{"data-hecho":E,"data-actual":n===u&&c!=="entregado",children:E?o.jsx(ge,{size:13,"aria-hidden":"true"}):o.jsx("span",{"aria-hidden":"true"})}),o.jsxs(Ee,{"data-hecho":E,children:[o.jsx("strong",{children:a.titulo}),n===u?o.jsx("span",{children:a.texto}):null]})]},a.estado)})})})}),g.length>0?o.jsxs(o.Fragment,{children:[o.jsx(U,{title:"Las entregas",subtitle:"Tu pedido viene en partes. Cada una la puede traer alguien distinto."}),o.jsx(we,{children:g.map(a=>{var n;return o.jsxs(Se,{children:[o.jsxs("span",{children:["Parte ",a.parte_numero]}),o.jsx("small",{children:a.repartidor?`${a.repartidor} · ${((n=C.find(E=>E.estado===a.envio_estado))==null?void 0:n.titulo)??"En preparación"}`:"Buscando repartidor"})]},a.id)})})]}):null,o.jsx(Z,{children:o.jsx(Y,{children:o.jsxs(H,{children:[o.jsxs(k,{as:"div",children:[o.jsx(P,{children:o.jsx(fe,{size:18,"aria-hidden":"true"})}),o.jsxs(I,{children:[o.jsx("strong",{children:t.comercio}),o.jsx("span",{children:t.comercio_direccion})]})]}),o.jsxs(k,{as:"div",children:[o.jsx(P,{children:o.jsx(xe,{size:18,"aria-hidden":"true"})}),o.jsxs(I,{children:[o.jsx("strong",{children:"Tu dirección"}),o.jsx("span",{children:t.direccion_texto})]})]})]})})})]})})}),o.jsx(se,{rol:"cliente",open:y,pedidoId:e,codigo:t.codigo,cliente:t.comercio,onClose:()=>{j(!1),b()}})]})}export{He as SeguimientoScreen};
