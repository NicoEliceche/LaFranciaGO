import{c as he,aG as J,j as r,C as xe,a as ge,X as V,aC as X,q as d,aH as N,M as fe,b as je,S as be,a2 as ye,d as P,e as k,J as $e,aa as K,E as M,l as D,G as Se,W as Y,D as ee,aj as ve,aI as re}from"./index-C4uYXbIf.js";import{r as s}from"./react-D_B_6qYb.js";import{S as Ce,b as we,p as me,s as Ee}from"./saleUnits-CLP-TCsg.js";import{C as Pe}from"./ChatPedidoDialog-Bbob2QHc.js";import{C as ke}from"./ConfirmDialog-CM-SX8st.js";import{L as z,M as Me,a as ze}from"./AddressMapStyled-BN5sDOPB.js";import{M as $,I as Fe,f as ae,V as Ae}from"./mediaService-D2_VAu2k.js";import{u as Ie}from"./useMediaUpload-CTMFYLii.js";import{F as _e,a as F,b as S,e as H,c as Ne,d as Z,j as De}from"./formStyles-jkzbJ40R.js";import{A as pe,a as Le}from"./AuthScreenStyled-klYjJbHP.js";import{M as oe,a as te,b as Te,c as se,d as Be,e as ne,f as ie,I as Re,g as Ve,V as qe,F as Oe}from"./ProductFormScreenStyled-Bu11-Uop.js";import{P as Ge,a as Ue,b as He,c as Ze}from"./PanelLoginDialogStyled-By71U9PN.js";import{M as de}from"./message-square-gYUmsK4G.js";import"./send-BlkFWj-e.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=he("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);function We({envios:e}){const o=s.useRef(null),l=s.useRef(null),f=s.useRef(new Map);return s.useEffect(()=>{const c=o.current;if(!c||l.current)return;const u=z.map(c,{center:[J.lat,J.lon],zoom:14,zoomControl:!0});z.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(u),l.current=u;const g=window.requestAnimationFrame(()=>u.invalidateSize());return()=>{window.cancelAnimationFrame(g),u.remove(),l.current=null,f.current.clear()}},[]),s.useEffect(()=>{const c=l.current;if(!c)return;const u=e.filter(n=>typeof n.lat=="number"&&typeof n.lon=="number"),g=new Set;if(u.forEach(n=>{g.add(n.id);const i=[n.lat,n.lon],b=f.current.get(n.id);if(b){b.setLatLng(i);return}const m=z.divIcon({className:"lfg-repartidor",html:'<span class="lfg-repartidor__punto"></span>',iconSize:[22,22],iconAnchor:[11,11]}),h=z.marker(i,{icon:m}).addTo(c);h.bindPopup(`<strong>${n.repartidor??"Repartidor"}</strong><br>Pedido ${n.codigo}`),f.current.set(n.id,h)}),f.current.forEach((n,i)=>{g.has(i)||(n.remove(),f.current.delete(i))}),u.length>0){const n=z.latLngBounds(u.map(i=>[i.lat,i.lon]));c.fitBounds(n,{padding:[40,40],maxZoom:16})}},[e]),r.jsx(Me,{children:r.jsx(ze,{ref:o})})}function Je({open:e,producto:o,onClose:l,onGuardar:f}){const[c,u]=s.useState("unidad"),[g,n]=s.useState(null),[i,b]=s.useState(!1),{photos:m,video:h,error:y,processing:A,addPhotos:x,addVideo:I,removePhoto:q,removeVideo:C}=Ie();if(s.useEffect(()=>{e&&(u((o==null?void 0:o.unidad_venta)??"unidad"),n(null))},[e,o]),s.useEffect(()=>{if(!e)return;const t=p=>{p.key==="Escape"&&l()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[l,e]),!e)return null;const w=async t=>{if(t.preventDefault(),i)return;const p=new FormData(t.currentTarget),v=Number(p.get("precio")??0);if(v<=0){n("Poné un precio válido.");return}n(null),b(!0);try{const j=await Promise.all(m.map(async(_,O)=>{const{url:a}=await X.subir(_.blob,`producto-${O}.webp`);return a}));let E=(o==null?void 0:o.video_url)??null;h!=null&&h.blob&&(E=(await X.subir(h.blob,"producto.mp4")).url),await f({nombre:String(p.get("nombre")??"").trim(),descripcion:String(p.get("descripcion")??"").trim(),precio:v,unidadVenta:c,stock:p.get("stock")?Number(p.get("stock")):null,fotos:[...(o==null?void 0:o.fotos)??[],...j],videoUrl:E}),l()}catch(j){n(j instanceof Error?j.message:"No pudimos guardar el producto.")}finally{b(!1)}};return r.jsx(Ge,{onClick:l,role:"presentation",children:r.jsxs(Ue,{role:"dialog","aria-modal":"true","aria-label":o?"Editar producto":"Nuevo producto",onClick:t=>t.stopPropagation(),children:[r.jsxs(He,{children:[r.jsxs("div",{children:[r.jsx(xe,{children:o?"Editar producto":"Nuevo producto"}),r.jsx(ge,{children:"Lo que carguen acá es lo que ve el cliente."})]}),r.jsx(Ze,{type:"button",onClick:l,"aria-label":"Cerrar",children:r.jsx(V,{size:18,"aria-hidden":"true"})})]}),r.jsx("form",{onSubmit:w,children:r.jsxs(_e,{children:[r.jsxs(F,{htmlFor:"prod-nombre",children:[r.jsx(S,{children:"Nombre"}),r.jsx(H,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(o==null?void 0:o.nombre)??"",placeholder:"Pan flauta",required:!0})]}),r.jsxs(F,{htmlFor:"prod-unidad",children:[r.jsx(S,{children:"Cómo se vende"}),r.jsx(Ne,{id:"prod-unidad",value:c,onChange:t=>u(t.target.value),children:Ce.map(t=>r.jsx("option",{value:t.id,children:t.label},t.id))}),r.jsx(Z,{children:we[c].help})]}),r.jsxs(F,{htmlFor:"prod-precio",children:[r.jsxs(S,{children:["Precio (",me(c),")"]}),r.jsx(H,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(o==null?void 0:o.precio)??"",placeholder:"0",required:!0})]}),r.jsxs(F,{htmlFor:"prod-stock",children:[r.jsx(S,{children:"Stock"}),r.jsx(H,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(o==null?void 0:o.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),r.jsxs(F,{htmlFor:"prod-descripcion",children:[r.jsx(S,{children:"Descripción"}),r.jsx(De,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(o==null?void 0:o.descripcion)??"",placeholder:"Qué tiene de especial"})]}),r.jsxs(oe,{children:[r.jsx(S,{as:"span",children:"Fotos"}),r.jsxs(te,{children:[m.length,"/",$.maxImages]})]}),r.jsxs(Te,{children:[m.map(t=>r.jsxs(se,{children:[r.jsx(Be,{src:t.previewUrl,alt:""}),r.jsx(ne,{type:"button",onClick:()=>q(t.id),"aria-label":"Quitar foto",children:r.jsx(V,{size:14,"aria-hidden":"true"})})]},t.id)),m.length<$.maxImages?r.jsxs(ie,{as:"label","data-busy":A,children:[r.jsx(Re,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:A?"Optimizando…":"Agregar"}),r.jsx("input",{type:"file",accept:Fe,multiple:!0,hidden:!0,onChange:t=>{x(t.target.files),t.target.value=""}})]}):null]}),r.jsxs(Z,{children:["Se achican a ",$.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",ae($.maxImageBytes),"."]}),r.jsxs(oe,{children:[r.jsx(S,{as:"span",children:"Video"}),r.jsxs(te,{children:[h?1:0,"/",$.maxVideos]})]}),h?r.jsxs(se,{"data-video":"true",children:[r.jsx(Ve,{src:h.url,controls:!0,preload:"metadata"}),r.jsx(ne,{type:"button",onClick:C,"aria-label":"Quitar video",children:r.jsx(V,{size:14,"aria-hidden":"true"})})]}):r.jsxs(ie,{as:"label","data-wide":"true",children:[r.jsx(qe,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:"Agregar video"}),r.jsx("input",{type:"file",accept:Ae,hidden:!0,onChange:t=>{I(t.target.files),t.target.value=""}})]}),r.jsxs(Z,{children:["Hasta ",$.maxVideoSeconds," segundos y"," ",ae($.maxVideoBytes),"."]}),y?r.jsx(Oe,{children:y}):null,g?r.jsx(pe,{role:"alert","data-tono":"error",children:g}):null,r.jsx(Le,{type:"submit",disabled:i,children:i?"Guardando…":o?"Guardar cambios":"Crear producto"})]})})]})})}const Xe=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,Ke=d.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  letter-spacing: -0.02em;
`,Ye=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:e})=>e.spacing[2]};
  margin-top: 0.15rem;
`,Q=d.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:e})=>e.spacing[2]};
  }
`,er=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,L=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,T=d.div`
  min-width: 0;
`,B=d.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,R=d.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,le=d.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:e})=>e.spacing[1]};
`,W=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;

  &:hover {
    color: ${({theme:e})=>e.color.primary};
    border-color: ${({theme:e})=>e.color.primary};
  }

  /* Borrar se distingue en rojo sólo al pasar por encima: en reposo compite
     menos con editar, que es la acción habitual. */
  &[data-tono='danger']:hover {
    color: ${({theme:e})=>e.color.danger};
    border-color: ${({theme:e})=>e.color.danger};
  }
`,rr=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,ar=d.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &[data-active='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,ce=d.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.3rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.danger};
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ue=d.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &[data-estado='proceso'],
  &[data-estado='en_camino'],
  &[data-estado='asignado'] {
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-estado='terminado'],
  &[data-estado='entregado'] {
    color: ${({theme:e})=>e.color.success};
  }

  &[data-estado='cancelado'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,or=d.div`
  height: 18rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 24rem;
  }
`,tr=[{id:"productos",nombre:"Productos"},{id:"pedidos",nombre:"Pedidos"},{id:"chats",nombre:"Chats"},{id:"envios",nombre:"Envíos"}],sr=12e3,nr={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"},ir={buscando:"Buscando repartidor",asignado:"Asignado",retirado:"Retirado",en_camino:"En camino",entregado:"Entregado"},dr=e=>{const o=Math.round((Date.now()-new Date(e.replace(" ","T")+"Z").getTime())/6e4);return o<1?"ahora mismo":o<60?`hace ${o} min`:`hace ${Math.round(o/60)} h`};function vr(){const[e,o]=s.useState(null),[l,f]=s.useState([]),[c,u]=s.useState(!0),[g,n]=s.useState(null),[i,b]=s.useState("productos"),[m,h]=s.useState([]),[y,A]=s.useState([]),[x,I]=s.useState(null),[q,C]=s.useState(!1),[w,t]=s.useState(null),[p,v]=s.useState(null),j=s.useCallback(async()=>{u(!0);try{const a=await N.ver();o(a.comercio),f(a.productos),n(null)}catch{n("No pudimos cargar tu comercio.")}finally{u(!1)}},[]);s.useEffect(()=>{j()},[j]),s.useEffect(()=>{if(!e||i==="productos")return;const a=async()=>{try{if(i==="pedidos"||i==="chats"){const{pedidos:U}=await re.pedidos();h(U)}if(i==="envios"){const{envios:U}=await re.envios();A(U)}}catch{}};a();const G=window.setInterval(a,sr);return()=>window.clearInterval(G)},[e,i]);const E=s.useMemo(()=>m.reduce((a,G)=>a+Number(G.sin_leer??0),0),[m]),_=async a=>{w?await N.editarProducto(w.id,a):await N.crearProducto({...a,comercioId:e==null?void 0:e.id}),await j()},O=async()=>{if(p)try{await N.borrarProducto(p.id),await j()}catch{n("No pudimos borrar el producto.")}finally{v(null)}};return r.jsxs(fe,{showSearch:!1,children:[r.jsx(je,{children:r.jsx(be,{children:r.jsxs(ye,{children:[g?r.jsx(pe,{role:"alert","data-tono":"error",children:g}):null,e?r.jsx(P,{children:r.jsx(k,{children:r.jsxs(Xe,{children:[r.jsx($e,{$size:"3.5rem",$tone:"blue",children:r.jsx(K,{size:24,"aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx(Ke,{children:e.nombre}),r.jsxs(Ye,{children:[r.jsx(Q,{children:e.rubro_nombre}),r.jsx(Q,{children:e.direccion}),e.horario?r.jsx(Q,{children:e.horario}):null]})]})]})})}):null,!c&&!e&&!g?r.jsx(M,{icon:K,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,e?r.jsx(rr,{children:tr.map(a=>r.jsxs(ar,{type:"button","data-active":i===a.id,onClick:()=>b(a.id),children:[a.nombre,a.id==="chats"&&E>0?r.jsx(ce,{children:E}):null]},a.id))}):null,e&&i==="productos"?r.jsxs(r.Fragment,{children:[r.jsx(D,{title:"Tus productos",chip:`${l.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),r.jsxs(er,{type:"button",onClick:()=>{t(null),C(!0)},children:[r.jsx(Se,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),l.length===0&&!c?r.jsx(M,{icon:Y,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,l.map(a=>r.jsx(P,{children:r.jsx(k,{children:r.jsxs(L,{children:[r.jsxs(T,{children:[r.jsx(B,{children:a.nombre}),r.jsxs(R,{children:[ee(a.precio)," ",a.unidad_venta!=="unidad"?me(a.unidad_venta):"c/u"," · desde ",Ee(a.unidad_venta,0)]})]}),r.jsxs(le,{children:[r.jsx(W,{type:"button",onClick:()=>{t(a),C(!0)},"aria-label":`Editar ${a.nombre}`,children:r.jsx(Qe,{size:15,"aria-hidden":"true"})}),r.jsx(W,{type:"button","data-tono":"danger",onClick:()=>v(a),"aria-label":`Borrar ${a.nombre}`,children:r.jsx(V,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&i==="pedidos"?r.jsxs(r.Fragment,{children:[r.jsx(D,{title:"Pedidos",chip:`${m.length}`,subtitle:"Lo que está entrando ahora."}),m.length===0?r.jsx(M,{icon:Y,title:"Sin pedidos",text:"Cuando alguien te compre, aparece acá.",dashed:!0}):null,m.map(a=>r.jsx(P,{children:r.jsx(k,{children:r.jsxs(L,{children:[r.jsxs(T,{children:[r.jsxs(B,{children:[a.codigo," · ",a.cliente]}),r.jsxs(R,{children:[ee(a.total)," · ",a.items," ",a.items===1?"producto":"productos"," ·"," ",a.direccion_texto]})]}),r.jsx(ue,{"data-estado":a.estado,children:nr[a.estado]??a.estado})]})})},a.id))]}):null,e&&i==="chats"?r.jsxs(r.Fragment,{children:[r.jsx(D,{title:"Conversaciones",subtitle:"Consultas de tus clientes sobre cada pedido."}),m.length===0?r.jsx(M,{icon:de,title:"Sin conversaciones",text:"Se abre una por cada pedido que recibas.",dashed:!0}):null,m.map(a=>r.jsx(P,{children:r.jsx(k,{children:r.jsxs(L,{children:[r.jsxs(T,{children:[r.jsx(B,{children:a.cliente}),r.jsxs(R,{children:["Pedido ",a.codigo,a.cliente_telefono?` · ${a.cliente_telefono}`:""]})]}),r.jsxs(le,{children:[a.sin_leer>0?r.jsx(ce,{children:a.sin_leer}):null,r.jsx(W,{type:"button",onClick:()=>I(a),"aria-label":`Abrir chat con ${a.cliente}`,children:r.jsx(de,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&i==="envios"?r.jsxs(r.Fragment,{children:[r.jsx(D,{title:"Envíos en curso",chip:`${y.length}`,subtitle:"Dónde va cada pedido que salió."}),y.length===0?r.jsx(M,{icon:ve,title:"Nada en camino",text:"Cuando un repartidor tome un pedido lo vas a ver acá.",dashed:!0}):r.jsx(or,{children:r.jsx(We,{envios:y})}),y.map(a=>r.jsx(P,{children:r.jsx(k,{children:r.jsxs(L,{children:[r.jsxs(T,{children:[r.jsx(B,{children:a.repartidor??"Buscando repartidor"}),r.jsxs(R,{children:["Pedido ",a.codigo," · ",a.direccion_texto,a.ubicacion_en?` · ${dr(a.ubicacion_en)}`:" · sin ubicación todavía"]})]}),r.jsx(ue,{"data-estado":a.estado,children:ir[a.estado]??a.estado})]})})},a.id))]}):null]})})}),r.jsx(Pe,{open:x!==null,pedidoId:(x==null?void 0:x.id)??null,codigo:(x==null?void 0:x.codigo)??"",cliente:(x==null?void 0:x.cliente)??"",onClose:()=>I(null)}),r.jsx(Je,{open:q,producto:w,onClose:()=>C(!1),onGuardar:_}),r.jsx(ke,{open:p!==null,title:"¿Borrar este producto?",text:`"${(p==null?void 0:p.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>v(null),onConfirm:()=>void O()})]})}export{vr as MiComercioScreen};
