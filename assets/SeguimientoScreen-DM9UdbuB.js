import{L as C,j as o,q as c,h as B,s as O,M as A,b as k,S as M,E as V,P as D,T,B as N,k as P,l as F,N as U,d as I,e as L,m as H,n as Z,o as Q}from"./index-D4EGV2Yc.js";import{r as i,h as W}from"./react-D_B_6qYb.js";import{L as f,M as Y,a as G}from"./AddressMapStyled-BJyEsYcz.js";import{A as J}from"./AuthScreenStyled-BeFknNWA.js";import{C as K}from"./car-C9_-966P.js";function X({comercio:e,destino:l,repartidor:x,posicionFresca:y=!0,nombreRepartidor:j}){const v=i.useRef(null),h=i.useRef(null),m=i.useRef({}),t=i.useRef(null),$=i.useRef(!1);return i.useEffect(()=>{const n=v.current;if(!n||h.current)return;const d=f.map(n,{center:[C.lat,C.lon],zoom:14,zoomControl:!0});f.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(d),h.current=d;const u=window.requestAnimationFrame(()=>d.invalidateSize());return()=>{window.cancelAnimationFrame(u),d.remove(),h.current=null,m.current={},t.current=null}},[]),i.useEffect(()=>{var S;const n=h.current;if(!n)return;const d=[{id:"comercio",punto:e,clase:"lfg-seg-comercio",etiqueta:"Sale de acá"},{id:"destino",punto:l,clase:"lfg-seg-destino",etiqueta:"Tu dirección"},{id:"repartidor",punto:x,clase:y?"lfg-seg-movil":"lfg-seg-movil lfg-seg-movil--viejo",etiqueta:j??"Repartidor"}];for(const{id:s,punto:a,clase:r,etiqueta:p}of d){const g=m.current[s];if(!a){g&&(g.remove(),delete m.current[s]);continue}const R=[a.lat,a.lon];if(g){g.setLatLng(R),(((S=g.getElement())==null?void 0:S.className)??"").includes(r.split(" ").pop()??r)||g.setIcon(f.divIcon({className:r,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})),g.setTooltipContent(p);continue}const q=f.marker(R,{icon:f.divIcon({className:r,html:"<span></span>",iconSize:[24,24],iconAnchor:[12,12]})}).addTo(n).bindTooltip(p,{direction:"top",offset:[0,-10]});m.current[s]=q}const u=[e,l].filter(Boolean);t.current&&(t.current.remove(),t.current=null),u.length===2&&(t.current=f.polyline(u.map(s=>[s.lat,s.lon]),{color:"#0047E7",weight:2,opacity:.35,dashArray:"6 6"}).addTo(n));const b=[e,l,x].filter(Boolean);if(!$.current&&b.length>0){const s=()=>{n.invalidateSize();const a=n.getSize();if(a.x===0||a.y===0){window.requestAnimationFrame(s);return}n.fitBounds(f.latLngBounds(b.map(r=>[r.lat,r.lon])),{padding:[28,28],maxZoom:15}),$.current=!0};window.requestAnimationFrame(s)}},[e,l,x,y,j]),o.jsx(Y,{children:o.jsx(G,{ref:v})})}const ee=c.div`
  height: 20rem;

  @media (min-width: 48rem) {
    height: 24rem;
  }
`,oe=c.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,te=c.li`
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
`,ae=c.span`
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
`,re=c.div`
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
`,w=c.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,z=c.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,_=c.div`
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
`,ne=c.span`
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
`,ie=c.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,se=c.div`
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
`,ce=15e3,le=3,de={moto:N,auto:K,camioneta:T,camion:T},E=[{estado:"buscando",titulo:"Buscando repartidor",texto:"Alguien lo va a tomar en breve."},{estado:"asignado",titulo:"Lo toma un repartidor",texto:"Va camino al comercio."},{estado:"retirado",titulo:"Retirado del comercio",texto:"Ya tiene tu pedido."},{estado:"en_camino",titulo:"En camino",texto:"Va para tu dirección."},{estado:"entregado",titulo:"Entregado",texto:"¡Que lo disfrutes!"}];function ue(e){if(!e)return null;const l=new Date(e.replace(" ","T")+"Z");return Number.isNaN(l.getTime())?null:Math.max(0,Math.round((Date.now()-l.getTime())/6e4))}function ye(){const{pedidoId:e=""}=W(),[l,x]=i.useState(null),[y,j]=i.useState(null),[v,h]=i.useState(!0),m=i.useCallback(async()=>{if(!e||!B()){h(!1);return}try{x(await O.ver(e)),j(null)}catch{j("No pudimos cargar el seguimiento.")}finally{h(!1)}},[e]);if(i.useEffect(()=>{m();const a=window.setInterval(()=>void m(),ce);return()=>window.clearInterval(a)},[m]),!l)return o.jsx(A,{showSearch:!1,children:o.jsx(k,{children:o.jsx(M,{children:y?o.jsx(J,{role:"alert","data-tono":"error",children:y}):v?null:o.jsx(V,{icon:D,title:"No encontramos el pedido",text:"Puede que ya no exista o que sea de otra cuenta.",ctaLabel:"Ver mis pedidos",ctaTo:"/pedidos"})})})});const{pedido:t,partes:$}=l,n=t.envio_estado??"buscando",d=Math.max(0,E.findIndex(a=>a.estado===n)),u=ue(t.ubicacion_en),b=u!==null&&u<=le,S=t.vehiculo?de[t.vehiculo]:N,s=n!=="entregado"&&typeof t.lat=="number"&&typeof t.lon=="number";return o.jsx(A,{showSearch:!1,children:o.jsx(k,{children:o.jsx(M,{children:o.jsxs(P,{children:[o.jsx(F,{title:`Pedido ${t.codigo}`,chip:t.parte_numero?`Parte ${t.parte_numero} de ${t.partes_total}`:void 0,subtitle:`${t.comercio} · ${t.direccion_texto}`}),o.jsx(ee,{children:o.jsx(X,{comercio:t.comercio_lat&&t.comercio_lon?{lat:t.comercio_lat,lon:t.comercio_lon}:null,destino:t.destino_lat&&t.destino_lon?{lat:t.destino_lat,lon:t.destino_lon}:null,repartidor:s?{lat:t.lat,lon:t.lon}:null,posicionFresca:b,nombreRepartidor:t.repartidor})}),t.repartidor?o.jsxs(w,{children:[o.jsx(z,{children:o.jsx(S,{size:20,"aria-hidden":"true"})}),o.jsxs(_,{children:[o.jsx("strong",{children:t.repartidor}),o.jsxs("span",{children:[t.vehiculo?U[t.vehiculo]:"En camino",t.repartidor_telefono?` · ${t.repartidor_telefono}`:""]})]}),u!==null?o.jsx(ne,{"data-fresca":b,children:u===0?"ahora":`hace ${u} min`}):null]}):null,o.jsx(I,{children:o.jsx(L,{children:o.jsx(oe,{children:E.map((a,r)=>{const p=r<=d;return o.jsxs(te,{"data-hecho":p,children:[o.jsx(ae,{"data-hecho":p,"data-actual":r===d&&n!=="entregado",children:p?o.jsx(H,{size:13,"aria-hidden":"true"}):o.jsx("span",{"aria-hidden":"true"})}),o.jsxs(re,{"data-hecho":p,children:[o.jsx("strong",{children:a.titulo}),r===d?o.jsx("span",{children:a.texto}):null]})]},a.estado)})})})}),$.length>0?o.jsxs(o.Fragment,{children:[o.jsx(F,{title:"Las entregas",subtitle:"Tu pedido viene en partes. Cada una la puede traer alguien distinto."}),o.jsx(ie,{children:$.map(a=>{var r;return o.jsxs(se,{children:[o.jsxs("span",{children:["Parte ",a.parte_numero]}),o.jsx("small",{children:a.repartidor?`${a.repartidor} · ${((r=E.find(p=>p.estado===a.envio_estado))==null?void 0:r.titulo)??"En preparación"}`:"Buscando repartidor"})]},a.id)})})]}):null,o.jsx(I,{children:o.jsx(L,{children:o.jsxs(P,{children:[o.jsxs(w,{as:"div",children:[o.jsx(z,{children:o.jsx(Z,{size:18,"aria-hidden":"true"})}),o.jsxs(_,{children:[o.jsx("strong",{children:t.comercio}),o.jsx("span",{children:t.comercio_direccion})]})]}),o.jsxs(w,{as:"div",children:[o.jsx(z,{children:o.jsx(Q,{size:18,"aria-hidden":"true"})}),o.jsxs(_,{children:[o.jsx("strong",{children:"Tu dirección"}),o.jsx("span",{children:t.direccion_texto})]})]})]})})})]})})})})}export{ye as SeguimientoScreen};
