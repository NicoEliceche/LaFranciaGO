import{L as C,j as o,q as c,h as D,s as V,M as A,b as k,S as P,E as U,P as H,T as M,B as O,k as N,l as L,N as Z,d as T,e as I,m as Y,n as Q,o as W}from"./index-Dp3RR3Le.js";import{r as s,h as G}from"./react-D_B_6qYb.js";import{L as y,M as J,a as K}from"./AddressMapStyled-BEpdVkF5.js";import{A as X}from"./AuthScreenStyled-DZ2Dt5jv.js";import{C as ee}from"./car-C6ZtIOmR.js";function oe({comercio:e,destino:l,repartidor:j,posicionFresca:$=!0,nombreRepartidor:b}){const S=s.useRef(null),x=s.useRef(null),p=s.useRef({}),t=s.useRef(null),v=s.useRef(!1);return s.useEffect(()=>{const n=S.current;if(!n||x.current)return;const m=y.map(n,{center:[C.lat,C.lon],zoom:14,zoomControl:!0});y.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(m),x.current=m;const h=window.requestAnimationFrame(()=>m.invalidateSize());return()=>{window.cancelAnimationFrame(h),m.remove(),x.current=null,p.current={},t.current=null}},[]),s.useEffect(()=>{var g;const n=x.current;if(!n)return;const m=[{id:"comercio",punto:e,clase:"lfg-seg-comercio",etiqueta:"Sale de acá"},{id:"destino",punto:l,clase:"lfg-seg-destino",etiqueta:"Tu dirección"},{id:"repartidor",punto:j,clase:$?"lfg-seg-movil":"lfg-seg-movil lfg-seg-movil--viejo",etiqueta:b??"Repartidor"}];for(const{id:i,punto:f,clase:d,etiqueta:a}of m){const r=p.current[i];if(!f){r&&(r.remove(),delete p.current[i]);continue}const u=[f.lat,f.lon];if(r){r.setLatLng(u),(((g=r.getElement())==null?void 0:g.className)??"").includes(d.split(" ").pop()??d)||r.setIcon(y.divIcon({className:d,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})),r.setTooltipContent(a);continue}const B=y.marker(u,{icon:y.divIcon({className:d,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})}).addTo(n).bindTooltip(a,{direction:"top",offset:[0,-10]});p.current[i]=B}const h=[e,l].filter(Boolean);t.current&&(t.current.remove(),t.current=null),h.length===2&&(t.current=y.polyline(h.map(i=>[i.lat,i.lon]),{color:"#0047E7",weight:2,opacity:.35,dashArray:"6 6"}).addTo(n));const w=[e,l,j].filter(Boolean);if(!v.current&&w.length>0){const i=()=>{n.invalidateSize();const f=n.getSize();if(f.x===0||f.y===0){window.requestAnimationFrame(i);return}n.fitBounds(y.latLngBounds(w.map(d=>[d.lat,d.lon])),{padding:[28,28],maxZoom:15}),v.current=!0};window.requestAnimationFrame(i)}},[e,l,j,$,b]),o.jsx(J,{children:o.jsx(K,{ref:S})})}const te=c.div`
  height: 20rem;

  @media (min-width: 48rem) {
    height: 24rem;
  }
`,ae=c.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,re=c.li`
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
`,ne=c.span`
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
`,ie=c.div`
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
`,z=c.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,E=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,R=c.div`
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
`,se=c.span`
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
`,ce=c.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,le=c.div`
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
`,de=15e3,ue=3,pe={moto:O,auto:ee,camioneta:M,camion:M},_=[{origen:"preparacion",estado:"preparando",titulo:"Preparando tu pedido",texto:"El comercio lo está armando."},{origen:"preparacion",estado:"listo",titulo:"Listo para retirar",texto:"Ya lo puede pasar a buscar el repartidor."},{origen:"envio",estado:"asignado",titulo:"Lo toma un repartidor",texto:"Va camino al comercio."},{origen:"envio",estado:"retirado",titulo:"Lo retiró del comercio",texto:"Ya tiene tu pedido."},{origen:"envio",estado:"en_camino",titulo:"En camino",texto:"Va para tu dirección."},{origen:"envio",estado:"entregado",titulo:"Entregado",texto:"¡Que lo disfrutes!"}],F={recibido:0,preparando:1,listo:2},q={buscando:0,asignado:1,retirado:2,en_camino:3,entregado:4};function me(e){if(!e)return null;const l=new Date(e.replace(" ","T")+"Z");return Number.isNaN(l.getTime())?null:Math.max(0,Math.round((Date.now()-l.getTime())/6e4))}function $e(){const{pedidoId:e=""}=G(),[l,j]=s.useState(null),[$,b]=s.useState(null),[S,x]=s.useState(!0),p=s.useCallback(async()=>{if(!e||!D()){x(!1);return}try{j(await V.ver(e)),b(null)}catch{b("No pudimos cargar el seguimiento.")}finally{x(!1)}},[e]);if(s.useEffect(()=>{p();const a=window.setInterval(()=>void p(),de);return()=>window.clearInterval(a)},[p]),!l)return o.jsx(A,{showSearch:!1,children:o.jsx(k,{children:o.jsx(P,{children:$?o.jsx(X,{role:"alert","data-tono":"error",children:$}):S?null:o.jsx(U,{icon:H,title:"No encontramos el pedido",text:"Puede que ya no exista o que sea de otra cuenta.",ctaLabel:"Ver mis pedidos",ctaTo:"/pedidos"})})})});const{pedido:t,partes:v}=l,n=t.envio_estado??"buscando",m=_.map((a,r)=>a.origen==="preparacion"?(F[t.preparacion]??0)>=(F[a.estado]??0)?r:-1:(q[n]??0)>=(q[a.estado]??0)?r:-1),h=Math.max(0,...m),w=_.map((a,r)=>r<=h),g=me(t.ubicacion_en),i=g!==null&&g<=ue,f=t.vehiculo?pe[t.vehiculo]:O,d=n!=="entregado"&&typeof t.lat=="number"&&typeof t.lon=="number";return o.jsx(A,{showSearch:!1,children:o.jsx(k,{children:o.jsx(P,{children:o.jsxs(N,{children:[o.jsx(L,{title:`Pedido ${t.codigo}`,chip:t.parte_numero?`Parte ${t.parte_numero} de ${t.partes_total}`:void 0,subtitle:`${t.comercio} · ${t.direccion_texto}`}),o.jsx(te,{children:o.jsx(oe,{comercio:t.comercio_lat&&t.comercio_lon?{lat:t.comercio_lat,lon:t.comercio_lon}:null,destino:t.destino_lat&&t.destino_lon?{lat:t.destino_lat,lon:t.destino_lon}:null,repartidor:d?{lat:t.lat,lon:t.lon}:null,posicionFresca:i,nombreRepartidor:t.repartidor})}),t.repartidor?o.jsxs(z,{children:[o.jsx(E,{children:o.jsx(f,{size:20,"aria-hidden":"true"})}),o.jsxs(R,{children:[o.jsx("strong",{children:t.repartidor}),o.jsxs("span",{children:[t.vehiculo?Z[t.vehiculo]:"En camino",t.repartidor_telefono?` · ${t.repartidor_telefono}`:""]})]}),g!==null?o.jsx(se,{"data-fresca":i,children:g===0?"ahora":`hace ${g} min`}):null]}):null,o.jsx(T,{children:o.jsx(I,{children:o.jsx(ae,{children:_.map((a,r)=>{const u=w[r];return o.jsxs(re,{"data-hecho":u,children:[o.jsx(ne,{"data-hecho":u,"data-actual":r===h&&n!=="entregado",children:u?o.jsx(Y,{size:13,"aria-hidden":"true"}):o.jsx("span",{"aria-hidden":"true"})}),o.jsxs(ie,{"data-hecho":u,children:[o.jsx("strong",{children:a.titulo}),r===h?o.jsx("span",{children:a.texto}):null]})]},a.estado)})})})}),v.length>0?o.jsxs(o.Fragment,{children:[o.jsx(L,{title:"Las entregas",subtitle:"Tu pedido viene en partes. Cada una la puede traer alguien distinto."}),o.jsx(ce,{children:v.map(a=>{var r;return o.jsxs(le,{children:[o.jsxs("span",{children:["Parte ",a.parte_numero]}),o.jsx("small",{children:a.repartidor?`${a.repartidor} · ${((r=_.find(u=>u.estado===a.envio_estado))==null?void 0:r.titulo)??"En preparación"}`:"Buscando repartidor"})]},a.id)})})]}):null,o.jsx(T,{children:o.jsx(I,{children:o.jsxs(N,{children:[o.jsxs(z,{as:"div",children:[o.jsx(E,{children:o.jsx(Q,{size:18,"aria-hidden":"true"})}),o.jsxs(R,{children:[o.jsx("strong",{children:t.comercio}),o.jsx("span",{children:t.comercio_direccion})]})]}),o.jsxs(z,{as:"div",children:[o.jsx(E,{children:o.jsx(W,{size:18,"aria-hidden":"true"})}),o.jsxs(R,{children:[o.jsx("strong",{children:"Tu dirección"}),o.jsx("span",{children:t.direccion_texto})]})]})]})})})]})})})})}export{$e as SeguimientoScreen};
