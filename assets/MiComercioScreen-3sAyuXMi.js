import{c as we,L as Ce,j as a,q as i,C as Ge,a as He,X as K,Z as C,aT as $e,aW as M,M as ea,b as aa,S as ra,k as ze,d as H,e as Z,a0 as oa,n as Pe,E as Q,l as J,_ as ke,P as Ee,T as ta,aX as Me}from"./index-Dp3RR3Le.js";import{r as n}from"./react-D_B_6qYb.js";import{S as na,b as ia,p as Ze,s as sa}from"./saleUnits-CLP-TCsg.js";import{C as da}from"./ChatPedidoDialog-DECE1OrD.js";import{C as Fe}from"./ConfirmDialog-DqtYOsHi.js";import{L as re,M as la,a as ca}from"./AddressMapStyled-BEpdVkF5.js";import{u as Qe}from"./useMediaUpload-CTMFYLii.js";import{A as Se,a as ve}from"./AuthScreenStyled-DZ2Dt5jv.js";import{P as We,a as Xe,b as Je,c as Ke}from"./PanelLoginDialogStyled-DEusdkkx.js";import{I as Ye,M as Ae,a as Ne,b as ua,c as Oe,d as pa,e as Te,f as Ie,g as ha,V as ma,F as ga}from"./ProductFormScreenStyled-CfT8snIe.js";import{M as W,I as xa,f as qe,V as fa}from"./mediaService-D2_VAu2k.js";import{F as ba,a as oe,b as X,e as he,c as ya,d as me,j as ja}from"./formStyles-BwnP5QTB.js";import{T as ge,a as xe}from"./trending-up-jdj8wfe0.js";import{B as $a}from"./bar-chart-3-DglD278F.js";import{B as va}from"./badge-percent-wrK1fnAL.js";import{M as Le}from"./message-square-B0VbIria.js";import"./send-wXw-ZpW_.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=we("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=we("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=we("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);function za({envios:e}){const t=n.useRef(null),l=n.useRef(null),z=n.useRef(new Map);return n.useEffect(()=>{const s=t.current;if(!s||l.current)return;const b=re.map(s,{center:[Ce.lat,Ce.lon],zoom:14,zoomControl:!0});re.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(b),l.current=b;const x=window.requestAnimationFrame(()=>b.invalidateSize());return()=>{window.cancelAnimationFrame(x),b.remove(),l.current=null,z.current.clear()}},[]),n.useEffect(()=>{const s=l.current;if(!s)return;const b=e.filter(p=>typeof p.lat=="number"&&typeof p.lon=="number"),x=new Set;if(b.forEach(p=>{x.add(p.id);const d=[p.lat,p.lon],F=z.current.get(p.id);if(F){F.setLatLng(d);return}const g=re.divIcon({className:"lfg-repartidor",html:'<span class="lfg-repartidor__punto"></span>',iconSize:[22,22],iconAnchor:[11,11]}),y=re.marker(d,{icon:g}).addTo(s);y.bindPopup(`<strong>${p.repartidor??"Repartidor"}</strong><br>Pedido ${p.codigo}`),z.current.set(p.id,y)}),z.current.forEach((p,d)=>{x.has(d)||(p.remove(),z.current.delete(d))}),b.length>0){const p=re.latLngBounds(b.map(d=>[d.lat,d.lon]));s.fitBounds(p,{padding:[40,40],maxZoom:16})}},[e]),a.jsx(la,{children:a.jsx(ca,{ref:t})})}const O=i.label`
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
`,Pa=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
`,_e=i.p`
  margin: -${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
`,ka=i.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  max-height: 13rem;
  overflow-y: auto;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
`,Ea=i.label`
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
`,Ma=i.input`
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
`,Fa=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Aa=i.div`
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
`,Na=i.span`
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
`,Oa=i.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,Ta=i.div`
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
`,Ia=i.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,De=[{id:"descuento",nombre:"% de descuento",ayuda:"Un producto a un porcentaje menos. El número se muestra sobre la foto."},{id:"combo",nombre:"Combo",ayuda:"Varios productos juntos a un precio total menor que la suma."},{id:"cantidad",nombre:"Promo por cantidad",ayuda:"Llevando varias unidades del mismo producto, el paquete sale menos."}];function qa({open:e,productos:t,onClose:l,onGuardar:z}){var ue,G,ae;const[s,b]=n.useState("descuento"),[x,p]=n.useState({}),[d,F]=n.useState(""),[g,y]=n.useState(""),[A,V]=n.useState(""),[j,I]=n.useState(""),[m,v]=n.useState(null),[T,c]=n.useState(!1),{photos:$,error:q,processing:P,addPhotos:U,removePhoto:w}=Qe();n.useEffect(()=>{e&&(b("descuento"),V(""),p({}),F(""),y(""),I(""),v(null))},[e]),n.useEffect(()=>{if(!e)return;const o=f=>{f.key==="Escape"&&l()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[l,e]);const S=n.useMemo(()=>Object.keys(x),[x]),k=n.useMemo(()=>S.reduce((o,f)=>{const r=t.find(h=>h.id===f);if(!r)return o;const u=s==="cantidad"?Math.max(0,Number(g)||0):x[f];return o+r.precio*u},0),[g,x,S,t,s]),E=n.useMemo(()=>{if(s==="descuento"){const o=Math.min(90,Math.max(0,Number(d)||0));return Math.round(k*(100-o))/100}return Number(j)||0},[k,d,j,s]);if(!e)return null;const Y=(o,f)=>{p(r=>{if(!f){const u={...r};return delete u[o],u}return s==="combo"?{...r,[o]:r[o]??1}:{[o]:1}})},le=o=>{b(o),p(f=>{const r=Object.keys(f);return o==="combo"||r.length<=1?f:{[r[0]]:1}})},L=async o=>{if(o.preventDefault(),T)return;const f=new FormData(o.currentTarget),r=A.trim();if(!r){v("Poné un título para la oferta.");return}if(S.length===0){v("Elegí al menos un producto.");return}if(s==="descuento"&&(Number(d)<1||Number(d)>90)){v("El descuento va entre 1 % y 90 %.");return}if(s==="cantidad"&&Number(g)<2){v("La promo por cantidad arranca en 2 unidades.");return}if(s!=="descuento"&&(E<=0||E>k)){v("El precio final tiene que ser menor al de lista.");return}v(null),c(!0);try{let u;if($[0]){const{url:h}=await $e.subir($[0].blob,"oferta.webp");u=h}await z({tipo:s,titulo:r,descripcion:String(f.get("descripcion")??"").trim()||void 0,porcentaje:s==="descuento"?Number(d):void 0,cantidad:s==="cantidad"?Number(g):void 0,precioFinal:s==="descuento"?void 0:E,fotoUrl:u,hasta:String(f.get("hasta")??"")||void 0,productos:S.map(h=>({productoId:h,unidades:x[h]}))}),l()}catch(u){v(u instanceof Error?u.message:"No pudimos crear la oferta.")}finally{c(!1)}},ee=((ue=De.find(o=>o.id===s))==null?void 0:ue.ayuda)??"",_=t.find(o=>o.id===S[0])??null,ce=((G=$[0])==null?void 0:G.previewUrl)??((ae=_==null?void 0:_.fotos)==null?void 0:ae[0])??null;return a.jsx(We,{onClick:l,role:"presentation",children:a.jsxs(Xe,{role:"dialog","aria-modal":"true","aria-label":"Nueva oferta",onClick:o=>o.stopPropagation(),children:[a.jsxs(Je,{children:[a.jsxs("div",{children:[a.jsx(Ge,{children:"Nueva oferta"}),a.jsx(He,{children:"Se publica al guardarla."})]}),a.jsx(Ke,{type:"button",onClick:l,"aria-label":"Cerrar",children:a.jsx(K,{size:18,"aria-hidden":"true"})})]}),m||q?a.jsx(Se,{role:"alert","data-tono":"error",children:m??q}):null,a.jsxs("form",{onSubmit:L,children:[a.jsxs(O,{children:[a.jsx("span",{children:"Tipo de oferta"}),a.jsx("select",{value:s,onChange:o=>le(o.target.value),children:De.map(o=>a.jsx("option",{value:o.id,children:o.nombre},o.id))})]}),a.jsx(_e,{children:ee}),a.jsxs(O,{children:[a.jsx("span",{children:"Título"}),a.jsx("input",{name:"titulo",maxLength:80,value:A,onChange:o=>V(o.target.value),placeholder:s==="combo"?"Combo merienda":"Pan del día",required:!0})]}),a.jsx(O,{children:a.jsx("span",{children:s==="combo"?"Productos del combo":s==="cantidad"?"Producto de la promo":"Producto en descuento"})}),t.length===0?a.jsx(_e,{children:"Cargá algún producto antes de armar una oferta."}):a.jsx(ka,{children:t.map(o=>{const f=o.id in x;return a.jsxs(Ea,{"data-elegido":f,children:[a.jsx("input",{type:s==="combo"?"checkbox":"radio",name:"producto",checked:f,onChange:r=>Y(o.id,r.target.checked)}),a.jsx("span",{children:o.nombre}),s==="combo"&&f?a.jsx(Ma,{type:"number",min:1,max:20,value:x[o.id],"aria-label":`Unidades de ${o.nombre}`,onChange:r=>p(u=>({...u,[o.id]:Math.max(1,Number(r.target.value)||1)}))}):null,a.jsx("small",{children:C(o.precio)})]},o.id)})}),s==="descuento"?a.jsxs(O,{children:[a.jsx("span",{children:"Porcentaje de descuento"}),a.jsx("input",{type:"number",min:1,max:90,value:d,onChange:o=>F(o.target.value),placeholder:"20",required:!0})]}):null,s==="cantidad"?a.jsxs(Pa,{children:[a.jsxs(O,{children:[a.jsx("span",{children:"Unidades"}),a.jsx("input",{type:"number",min:2,max:99,value:g,onChange:o=>y(o.target.value),placeholder:"3",required:!0})]}),a.jsxs(O,{children:[a.jsx("span",{children:"Precio del paquete"}),a.jsx("input",{type:"number",min:0,step:"0.01",value:j,onChange:o=>I(o.target.value),required:!0})]})]}):null,s==="combo"?a.jsxs(O,{children:[a.jsx("span",{children:"Precio final del combo"}),a.jsx("input",{type:"number",min:0,step:"0.01",value:j,onChange:o=>I(o.target.value),required:!0})]}):null,a.jsxs(O,{children:[a.jsx("span",{children:"Hasta cuándo (opcional)"}),a.jsx("input",{type:"date",name:"hasta"})]}),a.jsxs(O,{children:[a.jsx("span",{children:"Descripción (opcional)"}),a.jsx("textarea",{name:"descripcion",maxLength:280})]}),a.jsxs(O,{as:"div",children:[a.jsx("span",{children:"Foto de la oferta (opcional)"}),a.jsxs(ve,{as:"label",style:{cursor:P?"progress":"pointer"},"data-variante":"suave",children:[a.jsx(Ye,{size:16,"aria-hidden":"true"}),$[0]?"Cambiar la foto":"Subir una foto",a.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:o=>{$[0]&&w($[0].id),U(o.target.files),o.target.value=""}})]})]}),S.length>0&&k>0?a.jsxs(Fa,{children:[a.jsxs(Aa,{children:[ce?a.jsx("img",{src:ce,alt:""}):null,s==="descuento"&&Number(d)>0?a.jsxs(Na,{children:["-",Math.trunc(Number(d)),"%"]}):null]}),a.jsxs(Oa,{children:[a.jsx("strong",{children:(_==null?void 0:_.nombre)??"Combo"}),a.jsxs(Ta,{children:[a.jsx("s",{children:C(k)}),a.jsx("strong",{children:C(E)})]}),E>0&&E<k?a.jsxs(Ia,{children:["Ahorra ",C(k-E)]}):null]})]}):null,a.jsx(ve,{type:"submit",disabled:T||P,children:T?"Publicando…":"Publicar oferta"})]})]})})}function La({open:e,producto:t,onClose:l,onGuardar:z}){const[s,b]=n.useState("unidad"),[x,p]=n.useState(null),[d,F]=n.useState(!1),{photos:g,video:y,error:A,processing:V,addPhotos:j,addVideo:I,removePhoto:m,removeVideo:v}=Qe();if(n.useEffect(()=>{e&&(b((t==null?void 0:t.unidad_venta)??"unidad"),p(null))},[e,t]),n.useEffect(()=>{if(!e)return;const c=$=>{$.key==="Escape"&&l()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[l,e]),!e)return null;const T=async c=>{if(c.preventDefault(),d)return;const $=new FormData(c.currentTarget),q=Number($.get("precio")??0);if(q<=0){p("Poné un precio válido.");return}p(null),F(!0);try{const P=await Promise.all(g.map(async(w,S)=>{const{url:k}=await $e.subir(w.blob,`producto-${S}.webp`);return k}));let U=(t==null?void 0:t.video_url)??null;y!=null&&y.blob&&(U=(await $e.subir(y.blob,"producto.mp4")).url),await z({nombre:String($.get("nombre")??"").trim(),descripcion:String($.get("descripcion")??"").trim(),precio:q,unidadVenta:s,stock:$.get("stock")?Number($.get("stock")):null,fotos:[...(t==null?void 0:t.fotos)??[],...P],videoUrl:U}),l()}catch(P){p(P instanceof Error?P.message:"No pudimos guardar el producto.")}finally{F(!1)}};return a.jsx(We,{onClick:l,role:"presentation",children:a.jsxs(Xe,{role:"dialog","aria-modal":"true","aria-label":t?"Editar producto":"Nuevo producto",onClick:c=>c.stopPropagation(),children:[a.jsxs(Je,{children:[a.jsxs("div",{children:[a.jsx(Ge,{children:t?"Editar producto":"Nuevo producto"}),a.jsx(He,{children:"Lo que carguen acá es lo que ve el cliente."})]}),a.jsx(Ke,{type:"button",onClick:l,"aria-label":"Cerrar",children:a.jsx(K,{size:18,"aria-hidden":"true"})})]}),a.jsx("form",{onSubmit:T,children:a.jsxs(ba,{children:[a.jsxs(oe,{htmlFor:"prod-nombre",children:[a.jsx(X,{children:"Nombre"}),a.jsx(he,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(t==null?void 0:t.nombre)??"",placeholder:"Pan flauta",required:!0})]}),a.jsxs(oe,{htmlFor:"prod-unidad",children:[a.jsx(X,{children:"Cómo se vende"}),a.jsx(ya,{id:"prod-unidad",value:s,onChange:c=>b(c.target.value),children:na.map(c=>a.jsx("option",{value:c.id,children:c.label},c.id))}),a.jsx(me,{children:ia[s].help})]}),a.jsxs(oe,{htmlFor:"prod-precio",children:[a.jsxs(X,{children:["Precio (",Ze(s),")"]}),a.jsx(he,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(t==null?void 0:t.precio)??"",placeholder:"0",required:!0})]}),a.jsxs(oe,{htmlFor:"prod-stock",children:[a.jsx(X,{children:"Stock"}),a.jsx(he,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(t==null?void 0:t.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),a.jsxs(oe,{htmlFor:"prod-descripcion",children:[a.jsx(X,{children:"Descripción"}),a.jsx(ja,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(t==null?void 0:t.descripcion)??"",placeholder:"Qué tiene de especial"})]}),a.jsxs(Ae,{children:[a.jsx(X,{as:"span",children:"Fotos"}),a.jsxs(Ne,{children:[g.length,"/",W.maxImages]})]}),a.jsxs(ua,{children:[g.map(c=>a.jsxs(Oe,{children:[a.jsx(pa,{src:c.previewUrl,alt:""}),a.jsx(Te,{type:"button",onClick:()=>m(c.id),"aria-label":"Quitar foto",children:a.jsx(K,{size:14,"aria-hidden":"true"})})]},c.id)),g.length<W.maxImages?a.jsxs(Ie,{as:"label","data-busy":V,children:[a.jsx(Ye,{size:20,"aria-hidden":"true"}),a.jsx("span",{children:V?"Optimizando…":"Agregar"}),a.jsx("input",{type:"file",accept:xa,multiple:!0,hidden:!0,onChange:c=>{j(c.target.files),c.target.value=""}})]}):null]}),a.jsxs(me,{children:["Se achican a ",W.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",qe(W.maxImageBytes),"."]}),a.jsxs(Ae,{children:[a.jsx(X,{as:"span",children:"Video"}),a.jsxs(Ne,{children:[y?1:0,"/",W.maxVideos]})]}),y?a.jsxs(Oe,{"data-video":"true",children:[a.jsx(ha,{src:y.url,controls:!0,preload:"metadata"}),a.jsx(Te,{type:"button",onClick:v,"aria-label":"Quitar video",children:a.jsx(K,{size:14,"aria-hidden":"true"})})]}):a.jsxs(Ie,{as:"label","data-wide":"true",children:[a.jsx(ma,{size:20,"aria-hidden":"true"}),a.jsx("span",{children:"Agregar video"}),a.jsx("input",{type:"file",accept:fa,hidden:!0,onChange:c=>{I(c.target.files),c.target.value=""}})]}),a.jsxs(me,{children:["Hasta ",W.maxVideoSeconds," segundos y"," ",qe(W.maxVideoBytes),"."]}),A?a.jsx(ga,{children:A}):null,x?a.jsx(Se,{role:"alert","data-tono":"error",children:x}):null,a.jsx(ve,{type:"submit",disabled:d,children:d?"Guardando…":t?"Guardar cambios":"Crear producto"})]})})]})})}const _a=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,Da=i.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  letter-spacing: -0.02em;
`,Ra=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:e})=>e.spacing[2]};
  margin-top: 0.15rem;
`,fe=i.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:e})=>e.spacing[2]};
  }
`,Re=i.button`
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
`,te=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  /* En un teléfono, el nombre y los chips no entran en la misma línea: el
     nombre se partía en dos y quedaba ilegible. Se apilan, con los chips
     debajo y alineados a la izquierda: estirados a todo el ancho parecen
     barras y no etiquetas. */
  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Ba=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-wrap: wrap;
  flex: 0 0 auto;
`,ne=i.div`
  min-width: 0;
`,ie=i.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,se=i.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,be=i.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:e})=>e.spacing[1]};
`,de=i.button`
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
`,Va=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ua=i.button`
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
`,Be=i.span`
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
`,Ve=i.span`
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
`,Ga=i.div`
  height: 18rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 24rem;
  }
`,Ha=i.div`
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
`,Za=i.span`
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
`,Qa=i.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Wa=i.div`
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
`,Xa=i.p`
  margin: 0.2rem 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`,Ue=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,D=i.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,R=i.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,B=i.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: 1.1;
`,pe=i.span`
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
`,Ja=i.div`
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
`,Ka=i.span`
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

  &[data-estado='preparando'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-estado='listo'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({theme:e})=>e.color.success};
  }
`,Ya=i.button`
  width: 100%;
  min-height: 2.5rem;
  margin-top: ${({theme:e})=>e.spacing[2]};
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

  /* Marcarlo listo es el paso que libera al repartidor: se distingue. */
  &[data-final='true'] {
    background: ${({theme:e})=>e.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,er=[{id:"resumen",nombre:"Resumen"},{id:"productos",nombre:"Productos"},{id:"ofertas",nombre:"Ofertas"},{id:"pedidos",nombre:"Pedidos"},{id:"chats",nombre:"Chats"},{id:"envios",nombre:"Envíos"}],ar=12e3;function ye(e,t){if(t===0)return{texto:e>0?"sin comparación":"—",tono:"igual"};const l=Math.round((e-t)/t*100);return{texto:`${l>0?"+":""}${l}%`,tono:l>0?"sube":l<0?"baja":"igual"}}const rr={descuento:"Descuento",combo:"Combo",cantidad:"Por cantidad"};function or(e){const t=e.productos.map(l=>l.nombre);return e.tipo==="cantidad"?`Llevando ${e.cantidad} unidades de ${t[0]??"ese producto"}.`:e.tipo==="combo"?e.productos.map(l=>l.unidades>1?`${l.unidades} × ${l.nombre}`:l.nombre).join(" + "):`${e.porcentaje}% menos en ${t[0]??"ese producto"}.`}const je={recibido:{nombre:"Recibido",accion:"Empecé a prepararlo"},preparando:{nombre:"En preparación",accion:"¡Está listo!"},listo:{nombre:"Listo para retirar",accion:null}},tr={recibido:"preparando",preparando:"listo",listo:null},nr={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"},ir={buscando:"Buscando repartidor",asignado:"Asignado",retirado:"Retirado",en_camino:"En camino",entregado:"Entregado"},sr=e=>{const t=Math.round((Date.now()-new Date(e.replace(" ","T")+"Z").getTime())/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:`hace ${Math.round(t/60)} h`};function Cr(){const[e,t]=n.useState(null),[l,z]=n.useState([]),[s,b]=n.useState(!0),[x,p]=n.useState(null),[d,F]=n.useState("resumen"),[g,y]=n.useState([]),[A,V]=n.useState([]),[j,I]=n.useState(null),[m,v]=n.useState(null),[T,c]=n.useState([]),[$,q]=n.useState(!1),[P,U]=n.useState(null),[w,S]=n.useState(null),[k,E]=n.useState(!1),[Y,le]=n.useState(null),[L,ee]=n.useState(null),_=async r=>{await M.crearOferta(r);const{ofertas:u}=await M.ofertas();c(u)},ce=async r=>{const u=tr[r.preparacion];if(!(!u||P)){U(r.id),y(h=>h.map(N=>N.id===r.id?{...N,preparacion:u}:N));try{await M.prepararPedido(r.id,u)}catch{y(h=>h.map(N=>N.id===r.id?{...N,preparacion:r.preparacion}:N)),p("No pudimos actualizar el pedido.")}finally{U(null)}}},ue=async r=>{c(u=>u.map(h=>h.id===r.id?{...h,activa:!h.activa}:h));try{await M.activarOferta(r.id,!r.activa)}catch{c(u=>u.map(h=>h.id===r.id?{...h,activa:r.activa}:h))}},G=n.useCallback(async()=>{b(!0);try{const r=await M.ver();t(r.comercio),z(r.productos),p(null);try{const{ofertas:u}=await M.ofertas();c(u)}catch{c([])}try{v(await M.metricas())}catch{v(null)}}catch{p("No pudimos cargar tu comercio.")}finally{b(!1)}},[]);n.useEffect(()=>{G()},[G]),n.useEffect(()=>{if(!e||d==="productos")return;const r=async()=>{try{if(d==="pedidos"||d==="chats"){const{pedidos:h}=await Me.pedidos();y(h)}if(d==="envios"){const{envios:h}=await Me.envios();V(h)}}catch{}};r();const u=window.setInterval(r,ar);return()=>window.clearInterval(u)},[e,d]);const ae=n.useMemo(()=>g.reduce((r,u)=>r+Number(u.sin_leer??0),0),[g]),o=async r=>{Y?await M.editarProducto(Y.id,r):await M.crearProducto({...r,comercioId:e==null?void 0:e.id}),await G()},f=async()=>{if(L)try{await M.borrarProducto(L.id),await G()}catch{p("No pudimos borrar el producto.")}finally{ee(null)}};return a.jsxs(ea,{showSearch:!1,children:[a.jsx(aa,{children:a.jsx(ra,{children:a.jsxs(ze,{children:[x?a.jsx(Se,{role:"alert","data-tono":"error",children:x}):null,e?a.jsx(H,{children:a.jsx(Z,{children:a.jsxs(_a,{children:[a.jsx(oa,{$size:"3.5rem",$tone:"blue",children:a.jsx(Pe,{size:24,"aria-hidden":"true"})}),a.jsxs("div",{children:[a.jsx(Da,{children:e.nombre}),a.jsxs(Ra,{children:[a.jsx(fe,{children:e.rubro_nombre}),a.jsx(fe,{children:e.direccion}),e.horario?a.jsx(fe,{children:e.horario}):null]})]})]})})}):null,!s&&!e&&!x?a.jsx(Q,{icon:Pe,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,e?a.jsx(Va,{children:er.map(r=>a.jsxs(Ua,{type:"button","data-active":d===r.id,onClick:()=>F(r.id),children:[r.nombre,r.id==="chats"&&ae>0?a.jsx(Be,{children:ae}):null]},r.id))}):null,e&&d==="productos"?a.jsxs(a.Fragment,{children:[a.jsx(J,{title:"Tus productos",chip:`${l.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),a.jsxs(Re,{type:"button",onClick:()=>{le(null),E(!0)},children:[a.jsx(ke,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),l.length===0&&!s?a.jsx(Q,{icon:Ee,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,l.map(r=>a.jsx(H,{children:a.jsx(Z,{children:a.jsxs(te,{children:[a.jsxs(ne,{children:[a.jsx(ie,{children:r.nombre}),a.jsxs(se,{children:[C(r.precio)," ",r.unidad_venta!=="unidad"?Ze(r.unidad_venta):"c/u"," · desde ",sa(r.unidad_venta,0)]})]}),a.jsxs(be,{children:[a.jsx(de,{type:"button",onClick:()=>{le(r),E(!0)},"aria-label":`Editar ${r.nombre}`,children:a.jsx(wa,{size:15,"aria-hidden":"true"})}),a.jsx(de,{type:"button","data-tono":"danger",onClick:()=>ee(r),"aria-label":`Borrar ${r.nombre}`,children:a.jsx(K,{size:15,"aria-hidden":"true"})})]})]})})},r.id))]}):null,e&&d==="resumen"?a.jsxs(a.Fragment,{children:[a.jsx(J,{title:"Resumen",subtitle:"Cómo viene tu negocio."}),m?a.jsxs(a.Fragment,{children:[a.jsxs(Ue,{children:[a.jsxs(D,{children:[a.jsx(R,{children:"Pedidos hoy"}),a.jsx(B,{children:m.hoy.pedidos}),(()=>{const r=ye(m.hoy.pedidos,m.ayer.pedidos);return a.jsxs(pe,{"data-tono":r.tono,children:[r.tono==="sube"?a.jsx(ge,{size:13,"aria-hidden":"true"}):r.tono==="baja"?a.jsx(xe,{size:13,"aria-hidden":"true"}):null,r.texto," vs ayer"]})})()]}),a.jsxs(D,{children:[a.jsx(R,{children:"Ventas hoy"}),a.jsx(B,{children:C(m.hoy.ventas)}),(()=>{const r=ye(m.hoy.ventas,m.ayer.ventas);return a.jsxs(pe,{"data-tono":r.tono,children:[r.tono==="sube"?a.jsx(ge,{size:13,"aria-hidden":"true"}):r.tono==="baja"?a.jsx(xe,{size:13,"aria-hidden":"true"}):null,r.texto," vs ayer"]})})()]}),a.jsxs(D,{children:[a.jsx(R,{children:"Ventas de la semana"}),a.jsx(B,{children:C(m.semana.ventas)}),(()=>{const r=ye(m.semana.ventas,m.semanaPrevia.ventas);return a.jsxs(pe,{"data-tono":r.tono,children:[r.tono==="sube"?a.jsx(ge,{size:13,"aria-hidden":"true"}):r.tono==="baja"?a.jsx(xe,{size:13,"aria-hidden":"true"}):null,r.texto," vs la anterior"]})})()]}),a.jsxs(D,{children:[a.jsx(R,{children:"Ticket promedio"}),a.jsx(B,{children:C(m.ticketPromedio)}),a.jsx(pe,{children:"últimos 7 días"})]})]}),a.jsx(H,{children:a.jsx(Z,{children:a.jsxs(ze,{children:[a.jsx(ie,{children:"Lo que más se vendió"}),m.masVendidos.length===0?a.jsx(se,{children:"Todavía no hay ventas esta semana."}):m.masVendidos.map(r=>a.jsxs(Ja,{children:[a.jsx("span",{children:r.nombre}),a.jsxs("small",{children:[r.unidades," unid."]}),a.jsx("strong",{children:C(r.total)})]},r.nombre))]})})}),a.jsxs(Ue,{children:[a.jsxs(D,{children:[a.jsx(R,{children:"En preparación"}),a.jsx(B,{children:m.enProceso})]}),a.jsxs(D,{children:[a.jsx(R,{children:"Productos activos"}),a.jsx(B,{children:m.productos})]}),a.jsxs(D,{children:[a.jsx(R,{children:"Ofertas vigentes"}),a.jsx(B,{children:m.ofertas})]}),a.jsxs(D,{children:[a.jsx(R,{children:"Pedidos de la semana"}),a.jsx(B,{children:m.semana.pedidos})]})]})]}):s?null:a.jsx(Q,{icon:$a,title:"Sin datos todavía",text:"Cuando entren pedidos vas a ver acá cómo viene tu negocio.",dashed:!0})]}):null,e&&d==="ofertas"?a.jsxs(a.Fragment,{children:[a.jsx(J,{title:"Ofertas",chip:`${T.length}`,subtitle:"Promociones que ve el cliente en tu comercio."}),a.jsxs(Re,{type:"button",onClick:()=>q(!0),children:[a.jsx(ke,{size:18,"aria-hidden":"true"}),"Crear nueva oferta"]}),T.length===0&&!s?a.jsx(Q,{icon:va,title:"Sin ofertas",text:"Armá un descuento, un combo o una promo por cantidad.",dashed:!0}):null,T.map(r=>a.jsx(H,{children:a.jsx(Z,{children:a.jsxs(te,{children:[a.jsxs(ne,{children:[a.jsxs(Ha,{children:[a.jsx("strong",{children:r.titulo}),r.porcentaje?a.jsxs(Qa,{children:["-",r.porcentaje,"%"]}):null,a.jsx(Za,{"data-apagada":!r.activa,children:r.activa?rr[r.tipo]:"Apagada"})]}),a.jsxs(Wa,{children:[a.jsx("s",{children:C(r.precioLista)}),a.jsx("strong",{children:C(r.precioFinal)})]}),a.jsx(Xa,{children:or(r)})]}),a.jsxs(be,{children:[a.jsx(de,{type:"button",onClick:()=>void ue(r),"aria-label":r.activa?`Apagar ${r.titulo}`:`Encender ${r.titulo}`,children:r.activa?a.jsx(Ca,{size:17,"aria-hidden":"true"}):a.jsx(Sa,{size:17,"aria-hidden":"true"})}),a.jsx(de,{type:"button","data-tono":"danger",onClick:()=>S(r),"aria-label":`Borrar ${r.titulo}`,children:a.jsx(K,{size:15,"aria-hidden":"true"})})]})]})})},r.id))]}):null,e&&d==="pedidos"?a.jsxs(a.Fragment,{children:[a.jsx(J,{title:"Pedidos",chip:`${g.length}`,subtitle:"Lo que está entrando ahora."}),g.length===0?a.jsx(Q,{icon:Ee,title:"Sin pedidos",text:"Cuando alguien te compre, aparece acá.",dashed:!0}):null,g.map(r=>{var u,h,N;return a.jsx(H,{children:a.jsxs(Z,{children:[a.jsxs(te,{children:[a.jsxs(ne,{children:[a.jsxs(ie,{children:[r.codigo," · ",r.cliente]}),a.jsxs(se,{children:[C(r.total)," · ",r.items," ",r.items===1?"producto":"productos"," ·"," ",r.direccion_texto]})]}),a.jsxs(Ba,{children:[a.jsx(Ka,{"data-estado":r.preparacion,children:((u=je[r.preparacion])==null?void 0:u.nombre)??r.preparacion}),a.jsx(Ve,{"data-estado":r.estado,children:nr[r.estado]??r.estado})]})]}),r.estado==="proceso"&&((h=je[r.preparacion])!=null&&h.accion)?a.jsx(Ya,{type:"button",onClick:()=>void ce(r),disabled:P===r.id,"data-final":r.preparacion==="preparando",children:P===r.id?"Guardando…":(N=je[r.preparacion])==null?void 0:N.accion}):null]})},r.id)})]}):null,e&&d==="chats"?a.jsxs(a.Fragment,{children:[a.jsx(J,{title:"Conversaciones",subtitle:"Consultas de tus clientes sobre cada pedido."}),g.length===0?a.jsx(Q,{icon:Le,title:"Sin conversaciones",text:"Se abre una por cada pedido que recibas.",dashed:!0}):null,g.map(r=>a.jsx(H,{children:a.jsx(Z,{children:a.jsxs(te,{children:[a.jsxs(ne,{children:[a.jsx(ie,{children:r.cliente}),a.jsxs(se,{children:["Pedido ",r.codigo,r.cliente_telefono?` · ${r.cliente_telefono}`:""]})]}),a.jsxs(be,{children:[r.sin_leer>0?a.jsx(Be,{children:r.sin_leer}):null,a.jsx(de,{type:"button",onClick:()=>I(r),"aria-label":`Abrir chat con ${r.cliente}`,children:a.jsx(Le,{size:15,"aria-hidden":"true"})})]})]})})},r.id))]}):null,e&&d==="envios"?a.jsxs(a.Fragment,{children:[a.jsx(J,{title:"Envíos en curso",chip:`${A.length}`,subtitle:"Dónde va cada pedido que salió."}),A.length===0?a.jsx(Q,{icon:ta,title:"Nada en camino",text:"Cuando un repartidor tome un pedido lo vas a ver acá.",dashed:!0}):a.jsx(Ga,{children:a.jsx(za,{envios:A})}),A.map(r=>a.jsx(H,{children:a.jsx(Z,{children:a.jsxs(te,{children:[a.jsxs(ne,{children:[a.jsx(ie,{children:r.repartidor??"Buscando repartidor"}),a.jsxs(se,{children:["Pedido ",r.codigo," · ",r.direccion_texto,r.ubicacion_en?` · ${sr(r.ubicacion_en)}`:" · sin ubicación todavía"]})]}),a.jsx(Ve,{"data-estado":r.estado,children:ir[r.estado]??r.estado})]})})},r.id))]}):null]})})}),a.jsx(qa,{open:$,productos:l,onClose:()=>q(!1),onGuardar:_}),a.jsx(Fe,{open:w!==null,title:"Borrar la oferta",text:`"${(w==null?void 0:w.titulo)??""}" deja de estar disponible para los clientes.`,confirmLabel:"Borrar",onCancel:()=>S(null),onConfirm:async()=>{w&&(await M.borrarOferta(w.id),c(r=>r.filter(u=>u.id!==w.id)),S(null))}}),a.jsx(da,{open:j!==null,pedidoId:(j==null?void 0:j.id)??null,codigo:(j==null?void 0:j.codigo)??"",cliente:(j==null?void 0:j.cliente)??"",onClose:()=>I(null)}),a.jsx(La,{open:k,producto:Y,onClose:()=>E(!1),onGuardar:o}),a.jsx(Fe,{open:L!==null,title:"¿Borrar este producto?",text:`"${(L==null?void 0:L.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>ee(null),onConfirm:()=>void f()})]})}export{Cr as MiComercioScreen};
