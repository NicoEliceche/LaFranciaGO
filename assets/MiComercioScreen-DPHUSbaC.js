import{c as se,aR as we,j as r,q as s,C as Ve,a as Ue,X,K as z,aO as ye,aS as O,M as Je,b as Ye,S as er,a8 as Se,d as V,e as U,Q as rr,ag as Ce,E as G,p as W,L as ze,a1 as Pe,aq as ar,aT as ke}from"./index-Bc4FkQ3o.js";import{r as n}from"./react-D_B_6qYb.js";import{S as or,b as tr,p as Ge,s as nr}from"./saleUnits-CLP-TCsg.js";import{C as ir}from"./ChatPedidoDialog-BWTAqCa4.js";import{C as Ee}from"./ConfirmDialog-B447XHGP.js";import{L as ee,M as sr,a as dr}from"./AddressMapStyled-icnVTwhH.js";import{u as He}from"./useMediaUpload-CTMFYLii.js";import{A as ve,a as $e}from"./AuthScreenStyled-HWbOxme_.js";import{P as Qe,a as Ze,b as Ke,c as We}from"./PanelLoginDialogStyled-BhhxZ6L3.js";import{I as Xe,M as Me,a as Fe,b as lr,c as Oe,d as cr,e as Te,f as Ae,g as ur,V as pr,F as hr}from"./ProductFormScreenStyled-CEl5wYvE.js";import{M as H,I as mr,f as Ne,V as gr}from"./mediaService-D2_VAu2k.js";import{F as xr,a as re,b as Q,e as he,c as fr,d as me,j as jr}from"./formStyles-DG_tTv25.js";import{B as br}from"./bar-chart-3-C4XtQlzX.js";import{B as yr}from"./badge-percent-Do5XH75M.js";import{M as Le}from"./message-square-BEkOO-F_.js";import"./send-2nrINtwp.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=se("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=se("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=se("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=se("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=se("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);function Sr({envios:e}){const t=n.useRef(null),l=n.useRef(null),P=n.useRef(new Map);return n.useEffect(()=>{const i=t.current;if(!i||l.current)return;const x=ee.map(i,{center:[we.lat,we.lon],zoom:14,zoomControl:!0});ee.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(x),l.current=x;const g=window.requestAnimationFrame(()=>x.invalidateSize());return()=>{window.cancelAnimationFrame(g),x.remove(),l.current=null,P.current.clear()}},[]),n.useEffect(()=>{const i=l.current;if(!i)return;const x=e.filter(p=>typeof p.lat=="number"&&typeof p.lon=="number"),g=new Set;if(x.forEach(p=>{g.add(p.id);const d=[p.lat,p.lon],E=P.current.get(p.id);if(E){E.setLatLng(d);return}const m=ee.divIcon({className:"lfg-repartidor",html:'<span class="lfg-repartidor__punto"></span>',iconSize:[22,22],iconAnchor:[11,11]}),y=ee.marker(d,{icon:m}).addTo(i);y.bindPopup(`<strong>${p.repartidor??"Repartidor"}</strong><br>Pedido ${p.codigo}`),P.current.set(p.id,y)}),P.current.forEach((p,d)=>{g.has(d)||(p.remove(),P.current.delete(d))}),x.length>0){const p=ee.latLngBounds(x.map(d=>[d.lat,d.lon]));i.fitBounds(p,{padding:[40,40],maxZoom:16})}},[e]),r.jsx(sr,{children:r.jsx(dr,{ref:t})})}const T=s.label`
  display: grid;
  gap: 0.3rem;
  margin-bottom: ${({theme:e})=>e.spacing[3]};

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  > input,
  > select,
  > textarea {
    width: 100%;
    min-height: 2.75rem;
    padding: 0 ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.lg};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.text};
    font-family: inherit;
    font-size: ${({theme:e})=>e.typography.size.sm};

    &:focus-visible {
      outline: 2px solid ${({theme:e})=>e.color.primary};
      outline-offset: 1px;
    }
  }

  > textarea {
    min-height: 4.5rem;
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
    resize: vertical;
  }
`,Cr=s.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
`,Ie=s.p`
  margin: -${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
`,zr=s.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  max-height: 13rem;
  overflow-y: auto;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
`,Pr=s.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.md};
  cursor: pointer;
  transition: background-color 140ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
  }

  &[data-elegido='true'] {
    background: ${({theme:e})=>e.color.primarySoft};
  }

  > input {
    flex: 0 0 auto;
    accent-color: ${({theme:e})=>e.color.primary};
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }

  > small {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,kr=s.input`
  flex: 0 0 auto;
  width: 3.25rem;
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-align: center;
`,Er=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Mr=s.div`
  position: relative;
  flex: 0 0 auto;
  width: 5rem;
  height: 5rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.color.surface};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Fr=s.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  padding: 0.15rem 0.4rem;
  border-radius: ${({theme:e})=>e.radius.md} 0 0 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.2;
`,Or=s.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,Tr=s.div`
  display: flex;
  align-items: baseline;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;

  > s {
    color: ${({theme:e})=>e.color.textMuted};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }

  > strong {
    color: ${({theme:e})=>e.color.primary};
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,Ar=s.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,qe=[{id:"descuento",nombre:"% de descuento",ayuda:"Un producto a un porcentaje menos. El número se muestra sobre la foto."},{id:"combo",nombre:"Combo",ayuda:"Varios productos juntos a un precio total menor que la suma."},{id:"cantidad",nombre:"Promo por cantidad",ayuda:"Llevando varias unidades del mismo producto, el paquete sale menos."}];function Nr({open:e,productos:t,onClose:l,onGuardar:P}){var de,le,a;const[i,x]=n.useState("descuento"),[g,p]=n.useState({}),[d,E]=n.useState(""),[m,y]=n.useState(""),[M,R]=n.useState(""),[f,N]=n.useState(""),[h,v]=n.useState(null),[A,c]=n.useState(!1),{photos:j,error:L,processing:$,addPhotos:I,removePhoto:Z}=He();n.useEffect(()=>{e&&(x("descuento"),R(""),p({}),E(""),y(""),N(""),v(null))},[e]),n.useEffect(()=>{if(!e)return;const o=u=>{u.key==="Escape"&&l()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[l,e]);const S=n.useMemo(()=>Object.keys(g),[g]),w=n.useMemo(()=>S.reduce((o,u)=>{const b=t.find(K=>K.id===u);if(!b)return o;const C=i==="cantidad"?Math.max(0,Number(m)||0):g[u];return o+b.precio*C},0),[m,g,S,t,i]),F=n.useMemo(()=>{if(i==="descuento"){const o=Math.min(90,Math.max(0,Number(d)||0));return Math.round(w*(100-o))/100}return Number(f)||0},[w,d,f,i]);if(!e)return null;const q=(o,u)=>{p(b=>{if(!u){const C={...b};return delete C[o],C}return i==="combo"?{...b,[o]:b[o]??1}:{[o]:1}})},J=o=>{x(o),p(u=>{const b=Object.keys(u);return o==="combo"||b.length<=1?u:{[b[0]]:1}})},ue=async o=>{if(o.preventDefault(),A)return;const u=new FormData(o.currentTarget),b=M.trim();if(!b){v("Poné un título para la oferta.");return}if(S.length===0){v("Elegí al menos un producto.");return}if(i==="descuento"&&(Number(d)<1||Number(d)>90)){v("El descuento va entre 1 % y 90 %.");return}if(i==="cantidad"&&Number(m)<2){v("La promo por cantidad arranca en 2 unidades.");return}if(i!=="descuento"&&(F<=0||F>w)){v("El precio final tiene que ser menor al de lista.");return}v(null),c(!0);try{let C;if(j[0]){const{url:K}=await ye.subir(j[0].blob,"oferta.webp");C=K}await P({tipo:i,titulo:b,descripcion:String(u.get("descripcion")??"").trim()||void 0,porcentaje:i==="descuento"?Number(d):void 0,cantidad:i==="cantidad"?Number(m):void 0,precioFinal:i==="descuento"?void 0:F,fotoUrl:C,hasta:String(u.get("hasta")??"")||void 0,productos:S.map(K=>({productoId:K,unidades:g[K]}))}),l()}catch(C){v(C instanceof Error?C.message:"No pudimos crear la oferta.")}finally{c(!1)}},pe=((de=qe.find(o=>o.id===i))==null?void 0:de.ayuda)??"",k=t.find(o=>o.id===S[0])??null,Y=((le=j[0])==null?void 0:le.previewUrl)??((a=k==null?void 0:k.fotos)==null?void 0:a[0])??null;return r.jsx(Qe,{onClick:l,role:"presentation",children:r.jsxs(Ze,{role:"dialog","aria-modal":"true","aria-label":"Nueva oferta",onClick:o=>o.stopPropagation(),children:[r.jsxs(Ke,{children:[r.jsxs("div",{children:[r.jsx(Ve,{children:"Nueva oferta"}),r.jsx(Ue,{children:"Se publica al guardarla."})]}),r.jsx(We,{type:"button",onClick:l,"aria-label":"Cerrar",children:r.jsx(X,{size:18,"aria-hidden":"true"})})]}),h||L?r.jsx(ve,{role:"alert","data-tono":"error",children:h??L}):null,r.jsxs("form",{onSubmit:ue,children:[r.jsxs(T,{children:[r.jsx("span",{children:"Tipo de oferta"}),r.jsx("select",{value:i,onChange:o=>J(o.target.value),children:qe.map(o=>r.jsx("option",{value:o.id,children:o.nombre},o.id))})]}),r.jsx(Ie,{children:pe}),r.jsxs(T,{children:[r.jsx("span",{children:"Título"}),r.jsx("input",{name:"titulo",maxLength:80,value:M,onChange:o=>R(o.target.value),placeholder:i==="combo"?"Combo merienda":"Pan del día",required:!0})]}),r.jsx(T,{children:r.jsx("span",{children:i==="combo"?"Productos del combo":i==="cantidad"?"Producto de la promo":"Producto en descuento"})}),t.length===0?r.jsx(Ie,{children:"Cargá algún producto antes de armar una oferta."}):r.jsx(zr,{children:t.map(o=>{const u=o.id in g;return r.jsxs(Pr,{"data-elegido":u,children:[r.jsx("input",{type:i==="combo"?"checkbox":"radio",name:"producto",checked:u,onChange:b=>q(o.id,b.target.checked)}),r.jsx("span",{children:o.nombre}),i==="combo"&&u?r.jsx(kr,{type:"number",min:1,max:20,value:g[o.id],"aria-label":`Unidades de ${o.nombre}`,onChange:b=>p(C=>({...C,[o.id]:Math.max(1,Number(b.target.value)||1)}))}):null,r.jsx("small",{children:z(o.precio)})]},o.id)})}),i==="descuento"?r.jsxs(T,{children:[r.jsx("span",{children:"Porcentaje de descuento"}),r.jsx("input",{type:"number",min:1,max:90,value:d,onChange:o=>E(o.target.value),placeholder:"20",required:!0})]}):null,i==="cantidad"?r.jsxs(Cr,{children:[r.jsxs(T,{children:[r.jsx("span",{children:"Unidades"}),r.jsx("input",{type:"number",min:2,max:99,value:m,onChange:o=>y(o.target.value),placeholder:"3",required:!0})]}),r.jsxs(T,{children:[r.jsx("span",{children:"Precio del paquete"}),r.jsx("input",{type:"number",min:0,step:"0.01",value:f,onChange:o=>N(o.target.value),required:!0})]})]}):null,i==="combo"?r.jsxs(T,{children:[r.jsx("span",{children:"Precio final del combo"}),r.jsx("input",{type:"number",min:0,step:"0.01",value:f,onChange:o=>N(o.target.value),required:!0})]}):null,r.jsxs(T,{children:[r.jsx("span",{children:"Hasta cuándo (opcional)"}),r.jsx("input",{type:"date",name:"hasta"})]}),r.jsxs(T,{children:[r.jsx("span",{children:"Descripción (opcional)"}),r.jsx("textarea",{name:"descripcion",maxLength:280})]}),r.jsxs(T,{as:"div",children:[r.jsx("span",{children:"Foto de la oferta (opcional)"}),r.jsxs($e,{as:"label",style:{cursor:$?"progress":"pointer"},"data-variante":"suave",children:[r.jsx(Xe,{size:16,"aria-hidden":"true"}),j[0]?"Cambiar la foto":"Subir una foto",r.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:o=>{j[0]&&Z(j[0].id),I(o.target.files),o.target.value=""}})]})]}),S.length>0&&w>0?r.jsxs(Er,{children:[r.jsxs(Mr,{children:[Y?r.jsx("img",{src:Y,alt:""}):null,i==="descuento"&&Number(d)>0?r.jsxs(Fr,{children:["-",Math.trunc(Number(d)),"%"]}):null]}),r.jsxs(Or,{children:[r.jsx("strong",{children:(k==null?void 0:k.nombre)??"Combo"}),r.jsxs(Tr,{children:[r.jsx("s",{children:z(w)}),r.jsx("strong",{children:z(F)})]}),F>0&&F<w?r.jsxs(Ar,{children:["Ahorra ",z(w-F)]}):null]})]}):null,r.jsx($e,{type:"submit",disabled:A||$,children:A?"Publicando…":"Publicar oferta"})]})]})})}function Lr({open:e,producto:t,onClose:l,onGuardar:P}){const[i,x]=n.useState("unidad"),[g,p]=n.useState(null),[d,E]=n.useState(!1),{photos:m,video:y,error:M,processing:R,addPhotos:f,addVideo:N,removePhoto:h,removeVideo:v}=He();if(n.useEffect(()=>{e&&(x((t==null?void 0:t.unidad_venta)??"unidad"),p(null))},[e,t]),n.useEffect(()=>{if(!e)return;const c=j=>{j.key==="Escape"&&l()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[l,e]),!e)return null;const A=async c=>{if(c.preventDefault(),d)return;const j=new FormData(c.currentTarget),L=Number(j.get("precio")??0);if(L<=0){p("Poné un precio válido.");return}p(null),E(!0);try{const $=await Promise.all(m.map(async(Z,S)=>{const{url:w}=await ye.subir(Z.blob,`producto-${S}.webp`);return w}));let I=(t==null?void 0:t.video_url)??null;y!=null&&y.blob&&(I=(await ye.subir(y.blob,"producto.mp4")).url),await P({nombre:String(j.get("nombre")??"").trim(),descripcion:String(j.get("descripcion")??"").trim(),precio:L,unidadVenta:i,stock:j.get("stock")?Number(j.get("stock")):null,fotos:[...(t==null?void 0:t.fotos)??[],...$],videoUrl:I}),l()}catch($){p($ instanceof Error?$.message:"No pudimos guardar el producto.")}finally{E(!1)}};return r.jsx(Qe,{onClick:l,role:"presentation",children:r.jsxs(Ze,{role:"dialog","aria-modal":"true","aria-label":t?"Editar producto":"Nuevo producto",onClick:c=>c.stopPropagation(),children:[r.jsxs(Ke,{children:[r.jsxs("div",{children:[r.jsx(Ve,{children:t?"Editar producto":"Nuevo producto"}),r.jsx(Ue,{children:"Lo que carguen acá es lo que ve el cliente."})]}),r.jsx(We,{type:"button",onClick:l,"aria-label":"Cerrar",children:r.jsx(X,{size:18,"aria-hidden":"true"})})]}),r.jsx("form",{onSubmit:A,children:r.jsxs(xr,{children:[r.jsxs(re,{htmlFor:"prod-nombre",children:[r.jsx(Q,{children:"Nombre"}),r.jsx(he,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(t==null?void 0:t.nombre)??"",placeholder:"Pan flauta",required:!0})]}),r.jsxs(re,{htmlFor:"prod-unidad",children:[r.jsx(Q,{children:"Cómo se vende"}),r.jsx(fr,{id:"prod-unidad",value:i,onChange:c=>x(c.target.value),children:or.map(c=>r.jsx("option",{value:c.id,children:c.label},c.id))}),r.jsx(me,{children:tr[i].help})]}),r.jsxs(re,{htmlFor:"prod-precio",children:[r.jsxs(Q,{children:["Precio (",Ge(i),")"]}),r.jsx(he,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(t==null?void 0:t.precio)??"",placeholder:"0",required:!0})]}),r.jsxs(re,{htmlFor:"prod-stock",children:[r.jsx(Q,{children:"Stock"}),r.jsx(he,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(t==null?void 0:t.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),r.jsxs(re,{htmlFor:"prod-descripcion",children:[r.jsx(Q,{children:"Descripción"}),r.jsx(jr,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(t==null?void 0:t.descripcion)??"",placeholder:"Qué tiene de especial"})]}),r.jsxs(Me,{children:[r.jsx(Q,{as:"span",children:"Fotos"}),r.jsxs(Fe,{children:[m.length,"/",H.maxImages]})]}),r.jsxs(lr,{children:[m.map(c=>r.jsxs(Oe,{children:[r.jsx(cr,{src:c.previewUrl,alt:""}),r.jsx(Te,{type:"button",onClick:()=>h(c.id),"aria-label":"Quitar foto",children:r.jsx(X,{size:14,"aria-hidden":"true"})})]},c.id)),m.length<H.maxImages?r.jsxs(Ae,{as:"label","data-busy":R,children:[r.jsx(Xe,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:R?"Optimizando…":"Agregar"}),r.jsx("input",{type:"file",accept:mr,multiple:!0,hidden:!0,onChange:c=>{f(c.target.files),c.target.value=""}})]}):null]}),r.jsxs(me,{children:["Se achican a ",H.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",Ne(H.maxImageBytes),"."]}),r.jsxs(Me,{children:[r.jsx(Q,{as:"span",children:"Video"}),r.jsxs(Fe,{children:[y?1:0,"/",H.maxVideos]})]}),y?r.jsxs(Oe,{"data-video":"true",children:[r.jsx(ur,{src:y.url,controls:!0,preload:"metadata"}),r.jsx(Te,{type:"button",onClick:v,"aria-label":"Quitar video",children:r.jsx(X,{size:14,"aria-hidden":"true"})})]}):r.jsxs(Ae,{as:"label","data-wide":"true",children:[r.jsx(pr,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:"Agregar video"}),r.jsx("input",{type:"file",accept:gr,hidden:!0,onChange:c=>{N(c.target.files),c.target.value=""}})]}),r.jsxs(me,{children:["Hasta ",H.maxVideoSeconds," segundos y"," ",Ne(H.maxVideoBytes),"."]}),M?r.jsx(hr,{children:M}):null,g?r.jsx(ve,{role:"alert","data-tono":"error",children:g}):null,r.jsx($e,{type:"submit",disabled:d,children:d?"Guardando…":t?"Guardar cambios":"Crear producto"})]})})]})})}const Ir=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,qr=s.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  letter-spacing: -0.02em;
`,_r=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:e})=>e.spacing[2]};
  margin-top: 0.15rem;
`,fe=s.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:e})=>e.spacing[2]};
  }
`,_e=s.button`
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
`,ae=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,oe=s.div`
  min-width: 0;
`,te=s.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ne=s.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,je=s.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:e})=>e.spacing[1]};
`,ie=s.button`
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
`,Dr=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Br=s.button`
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
`,De=s.span`
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
`,Be=s.span`
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
`,Rr=s.div`
  height: 18rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 24rem;
  }
`,Vr=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: 0.35rem;

  > strong {
    flex: 1 1 auto;
    min-width: 0;
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,Ur=s.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;

  /* Una oferta apagada se ve apagada: si no, el comercio cree que está
     publicada y no entiende por qué nadie la usa. */
  &[data-apagada='true'] {
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.textMuted};
  }
`,Gr=s.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Hr=s.div`
  display: flex;
  align-items: baseline;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;

  > s {
    color: ${({theme:e})=>e.color.textMuted};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }

  > strong {
    color: ${({theme:e})=>e.color.primary};
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,Qr=s.p`
  margin: 0.2rem 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`,Re=s.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,_=s.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,D=s.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,B=s.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: 1.1;
`,ce=s.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &[data-tono='sube'] {
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tono='baja'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,Zr=s.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &:last-child {
    border-bottom: 0;
  }

  > span:first-child {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  > small {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Kr=[{id:"resumen",nombre:"Resumen"},{id:"productos",nombre:"Productos"},{id:"ofertas",nombre:"Ofertas"},{id:"pedidos",nombre:"Pedidos"},{id:"chats",nombre:"Chats"},{id:"envios",nombre:"Envíos"}],Wr=12e3;function be(e,t){if(t===0)return{texto:e>0?"sin comparación":"—",tono:"igual"};const l=Math.round((e-t)/t*100);return{texto:`${l>0?"+":""}${l}%`,tono:l>0?"sube":l<0?"baja":"igual"}}const Xr={descuento:"Descuento",combo:"Combo",cantidad:"Por cantidad"};function Jr(e){const t=e.productos.map(l=>l.nombre);return e.tipo==="cantidad"?`Llevando ${e.cantidad} unidades de ${t[0]??"ese producto"}.`:e.tipo==="combo"?e.productos.map(l=>l.unidades>1?`${l.unidades} × ${l.nombre}`:l.nombre).join(" + "):`${e.porcentaje}% menos en ${t[0]??"ese producto"}.`}const Yr={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"},ea={buscando:"Buscando repartidor",asignado:"Asignado",retirado:"Retirado",en_camino:"En camino",entregado:"Entregado"},ra=e=>{const t=Math.round((Date.now()-new Date(e.replace(" ","T")+"Z").getTime())/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:`hace ${Math.round(t/60)} h`};function ja(){const[e,t]=n.useState(null),[l,P]=n.useState([]),[i,x]=n.useState(!0),[g,p]=n.useState(null),[d,E]=n.useState("resumen"),[m,y]=n.useState([]),[M,R]=n.useState([]),[f,N]=n.useState(null),[h,v]=n.useState(null),[A,c]=n.useState([]),[j,L]=n.useState(!1),[$,I]=n.useState(null),[Z,S]=n.useState(!1),[w,F]=n.useState(null),[q,J]=n.useState(null),ue=async a=>{await O.crearOferta(a);const{ofertas:o}=await O.ofertas();c(o)},pe=async a=>{c(o=>o.map(u=>u.id===a.id?{...u,activa:!u.activa}:u));try{await O.activarOferta(a.id,!a.activa)}catch{c(o=>o.map(u=>u.id===a.id?{...u,activa:a.activa}:u))}},k=n.useCallback(async()=>{x(!0);try{const a=await O.ver();t(a.comercio),P(a.productos),p(null);try{const{ofertas:o}=await O.ofertas();c(o)}catch{c([])}try{v(await O.metricas())}catch{v(null)}}catch{p("No pudimos cargar tu comercio.")}finally{x(!1)}},[]);n.useEffect(()=>{k()},[k]),n.useEffect(()=>{if(!e||d==="productos")return;const a=async()=>{try{if(d==="pedidos"||d==="chats"){const{pedidos:u}=await ke.pedidos();y(u)}if(d==="envios"){const{envios:u}=await ke.envios();R(u)}}catch{}};a();const o=window.setInterval(a,Wr);return()=>window.clearInterval(o)},[e,d]);const Y=n.useMemo(()=>m.reduce((a,o)=>a+Number(o.sin_leer??0),0),[m]),de=async a=>{w?await O.editarProducto(w.id,a):await O.crearProducto({...a,comercioId:e==null?void 0:e.id}),await k()},le=async()=>{if(q)try{await O.borrarProducto(q.id),await k()}catch{p("No pudimos borrar el producto.")}finally{J(null)}};return r.jsxs(Je,{showSearch:!1,children:[r.jsx(Ye,{children:r.jsx(er,{children:r.jsxs(Se,{children:[g?r.jsx(ve,{role:"alert","data-tono":"error",children:g}):null,e?r.jsx(V,{children:r.jsx(U,{children:r.jsxs(Ir,{children:[r.jsx(rr,{$size:"3.5rem",$tone:"blue",children:r.jsx(Ce,{size:24,"aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx(qr,{children:e.nombre}),r.jsxs(_r,{children:[r.jsx(fe,{children:e.rubro_nombre}),r.jsx(fe,{children:e.direccion}),e.horario?r.jsx(fe,{children:e.horario}):null]})]})]})})}):null,!i&&!e&&!g?r.jsx(G,{icon:Ce,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,e?r.jsx(Dr,{children:Kr.map(a=>r.jsxs(Br,{type:"button","data-active":d===a.id,onClick:()=>E(a.id),children:[a.nombre,a.id==="chats"&&Y>0?r.jsx(De,{children:Y}):null]},a.id))}):null,e&&d==="productos"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Tus productos",chip:`${l.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),r.jsxs(_e,{type:"button",onClick:()=>{F(null),S(!0)},children:[r.jsx(ze,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),l.length===0&&!i?r.jsx(G,{icon:Pe,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,l.map(a=>r.jsx(V,{children:r.jsx(U,{children:r.jsxs(ae,{children:[r.jsxs(oe,{children:[r.jsx(te,{children:a.nombre}),r.jsxs(ne,{children:[z(a.precio)," ",a.unidad_venta!=="unidad"?Ge(a.unidad_venta):"c/u"," · desde ",nr(a.unidad_venta,0)]})]}),r.jsxs(je,{children:[r.jsx(ie,{type:"button",onClick:()=>{F(a),S(!0)},"aria-label":`Editar ${a.nombre}`,children:r.jsx($r,{size:15,"aria-hidden":"true"})}),r.jsx(ie,{type:"button","data-tono":"danger",onClick:()=>J(a),"aria-label":`Borrar ${a.nombre}`,children:r.jsx(X,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&d==="resumen"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Resumen",subtitle:"Cómo viene tu negocio."}),h?r.jsxs(r.Fragment,{children:[r.jsxs(Re,{children:[r.jsxs(_,{children:[r.jsx(D,{children:"Pedidos hoy"}),r.jsx(B,{children:h.hoy.pedidos}),(()=>{const a=be(h.hoy.pedidos,h.ayer.pedidos);return r.jsxs(ce,{"data-tono":a.tono,children:[a.tono==="sube"?r.jsx(xe,{size:13,"aria-hidden":"true"}):a.tono==="baja"?r.jsx(ge,{size:13,"aria-hidden":"true"}):null,a.texto," vs ayer"]})})()]}),r.jsxs(_,{children:[r.jsx(D,{children:"Ventas hoy"}),r.jsx(B,{children:z(h.hoy.ventas)}),(()=>{const a=be(h.hoy.ventas,h.ayer.ventas);return r.jsxs(ce,{"data-tono":a.tono,children:[a.tono==="sube"?r.jsx(xe,{size:13,"aria-hidden":"true"}):a.tono==="baja"?r.jsx(ge,{size:13,"aria-hidden":"true"}):null,a.texto," vs ayer"]})})()]}),r.jsxs(_,{children:[r.jsx(D,{children:"Ventas de la semana"}),r.jsx(B,{children:z(h.semana.ventas)}),(()=>{const a=be(h.semana.ventas,h.semanaPrevia.ventas);return r.jsxs(ce,{"data-tono":a.tono,children:[a.tono==="sube"?r.jsx(xe,{size:13,"aria-hidden":"true"}):a.tono==="baja"?r.jsx(ge,{size:13,"aria-hidden":"true"}):null,a.texto," vs la anterior"]})})()]}),r.jsxs(_,{children:[r.jsx(D,{children:"Ticket promedio"}),r.jsx(B,{children:z(h.ticketPromedio)}),r.jsx(ce,{children:"últimos 7 días"})]})]}),r.jsx(V,{children:r.jsx(U,{children:r.jsxs(Se,{children:[r.jsx(te,{children:"Lo que más se vendió"}),h.masVendidos.length===0?r.jsx(ne,{children:"Todavía no hay ventas esta semana."}):h.masVendidos.map(a=>r.jsxs(Zr,{children:[r.jsx("span",{children:a.nombre}),r.jsxs("small",{children:[a.unidades," unid."]}),r.jsx("strong",{children:z(a.total)})]},a.nombre))]})})}),r.jsxs(Re,{children:[r.jsxs(_,{children:[r.jsx(D,{children:"En preparación"}),r.jsx(B,{children:h.enProceso})]}),r.jsxs(_,{children:[r.jsx(D,{children:"Productos activos"}),r.jsx(B,{children:h.productos})]}),r.jsxs(_,{children:[r.jsx(D,{children:"Ofertas vigentes"}),r.jsx(B,{children:h.ofertas})]}),r.jsxs(_,{children:[r.jsx(D,{children:"Pedidos de la semana"}),r.jsx(B,{children:h.semana.pedidos})]})]})]}):i?null:r.jsx(G,{icon:br,title:"Sin datos todavía",text:"Cuando entren pedidos vas a ver acá cómo viene tu negocio.",dashed:!0})]}):null,e&&d==="ofertas"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Ofertas",chip:`${A.length}`,subtitle:"Promociones que ve el cliente en tu comercio."}),r.jsxs(_e,{type:"button",onClick:()=>L(!0),children:[r.jsx(ze,{size:18,"aria-hidden":"true"}),"Crear nueva oferta"]}),A.length===0&&!i?r.jsx(G,{icon:yr,title:"Sin ofertas",text:"Armá un descuento, un combo o una promo por cantidad.",dashed:!0}):null,A.map(a=>r.jsx(V,{children:r.jsx(U,{children:r.jsxs(ae,{children:[r.jsxs(oe,{children:[r.jsxs(Vr,{children:[r.jsx("strong",{children:a.titulo}),a.porcentaje?r.jsxs(Gr,{children:["-",a.porcentaje,"%"]}):null,r.jsx(Ur,{"data-apagada":!a.activa,children:a.activa?Xr[a.tipo]:"Apagada"})]}),r.jsxs(Hr,{children:[r.jsx("s",{children:z(a.precioLista)}),r.jsx("strong",{children:z(a.precioFinal)})]}),r.jsx(Qr,{children:Jr(a)})]}),r.jsxs(je,{children:[r.jsx(ie,{type:"button",onClick:()=>void pe(a),"aria-label":a.activa?`Apagar ${a.titulo}`:`Encender ${a.titulo}`,children:a.activa?r.jsx(wr,{size:17,"aria-hidden":"true"}):r.jsx(vr,{size:17,"aria-hidden":"true"})}),r.jsx(ie,{type:"button","data-tono":"danger",onClick:()=>I(a),"aria-label":`Borrar ${a.titulo}`,children:r.jsx(X,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&d==="pedidos"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Pedidos",chip:`${m.length}`,subtitle:"Lo que está entrando ahora."}),m.length===0?r.jsx(G,{icon:Pe,title:"Sin pedidos",text:"Cuando alguien te compre, aparece acá.",dashed:!0}):null,m.map(a=>r.jsx(V,{children:r.jsx(U,{children:r.jsxs(ae,{children:[r.jsxs(oe,{children:[r.jsxs(te,{children:[a.codigo," · ",a.cliente]}),r.jsxs(ne,{children:[z(a.total)," · ",a.items," ",a.items===1?"producto":"productos"," ·"," ",a.direccion_texto]})]}),r.jsx(Be,{"data-estado":a.estado,children:Yr[a.estado]??a.estado})]})})},a.id))]}):null,e&&d==="chats"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Conversaciones",subtitle:"Consultas de tus clientes sobre cada pedido."}),m.length===0?r.jsx(G,{icon:Le,title:"Sin conversaciones",text:"Se abre una por cada pedido que recibas.",dashed:!0}):null,m.map(a=>r.jsx(V,{children:r.jsx(U,{children:r.jsxs(ae,{children:[r.jsxs(oe,{children:[r.jsx(te,{children:a.cliente}),r.jsxs(ne,{children:["Pedido ",a.codigo,a.cliente_telefono?` · ${a.cliente_telefono}`:""]})]}),r.jsxs(je,{children:[a.sin_leer>0?r.jsx(De,{children:a.sin_leer}):null,r.jsx(ie,{type:"button",onClick:()=>N(a),"aria-label":`Abrir chat con ${a.cliente}`,children:r.jsx(Le,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&d==="envios"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Envíos en curso",chip:`${M.length}`,subtitle:"Dónde va cada pedido que salió."}),M.length===0?r.jsx(G,{icon:ar,title:"Nada en camino",text:"Cuando un repartidor tome un pedido lo vas a ver acá.",dashed:!0}):r.jsx(Rr,{children:r.jsx(Sr,{envios:M})}),M.map(a=>r.jsx(V,{children:r.jsx(U,{children:r.jsxs(ae,{children:[r.jsxs(oe,{children:[r.jsx(te,{children:a.repartidor??"Buscando repartidor"}),r.jsxs(ne,{children:["Pedido ",a.codigo," · ",a.direccion_texto,a.ubicacion_en?` · ${ra(a.ubicacion_en)}`:" · sin ubicación todavía"]})]}),r.jsx(Be,{"data-estado":a.estado,children:ea[a.estado]??a.estado})]})})},a.id))]}):null]})})}),r.jsx(Nr,{open:j,productos:l,onClose:()=>L(!1),onGuardar:ue}),r.jsx(Ee,{open:$!==null,title:"Borrar la oferta",text:`"${($==null?void 0:$.titulo)??""}" deja de estar disponible para los clientes.`,confirmLabel:"Borrar",onCancel:()=>I(null),onConfirm:async()=>{$&&(await O.borrarOferta($.id),c(a=>a.filter(o=>o.id!==$.id)),I(null))}}),r.jsx(ir,{open:f!==null,pedidoId:(f==null?void 0:f.id)??null,codigo:(f==null?void 0:f.codigo)??"",cliente:(f==null?void 0:f.cliente)??"",onClose:()=>N(null)}),r.jsx(Lr,{open:Z,producto:w,onClose:()=>S(!1),onGuardar:de}),r.jsx(Ee,{open:q!==null,title:"¿Borrar este producto?",text:`"${(q==null?void 0:q.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>J(null),onConfirm:()=>void le()})]})}export{ja as MiComercioScreen};
