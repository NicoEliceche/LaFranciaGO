import{c as he,aN as xe,j as r,q as d,C as Ae,a as Ie,X as K,K as q,aK as pe,aO as O,M as Ve,b as Ue,S as Ge,a8 as He,d as H,e as Q,Q as Qe,ag as fe,E as Z,p as W,L as be,a1 as ye,aq as Ze,aP as je}from"./index-BzywHFYN.js";import{r as n}from"./react-D_B_6qYb.js";import{S as Ke,b as We,p as Le,s as Xe}from"./saleUnits-CLP-TCsg.js";import{C as Je}from"./ChatPedidoDialog-Ow227e-q.js";import{C as $e}from"./ConfirmDialog-BKrZKkmX.js";import{L as X,M as Ye,a as er}from"./AddressMapStyled-Bf9LpAnE.js";import{u as Te}from"./useMediaUpload-CTMFYLii.js";import{A as ge,a as me}from"./AuthScreenStyled-CuhtNF1e.js";import{P as _e,a as qe,b as De,c as Be}from"./PanelLoginDialogStyled-CM-7pWiI.js";import{I as Re,M as ve,a as we,b as rr,c as Se,d as ar,e as Ce,f as Pe,g as or,V as tr,F as nr}from"./ProductFormScreenStyled-CpsMhLfF.js";import{M as R,I as ir,f as ze,V as sr}from"./mediaService-D2_VAu2k.js";import{F as dr,a as J,b as V,e as de,c as lr,d as le,j as cr}from"./formStyles-DnpOsHb7.js";import{B as ur}from"./badge-percent-3e-bUCE1.js";import{M as ke}from"./message-square-fIWjJqWO.js";import"./send-CMy59vq8.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=he("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=he("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=he("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);function gr({envios:e}){const t=n.useRef(null),c=n.useRef(null),C=n.useRef(new Map);return n.useEffect(()=>{const i=t.current;if(!i||c.current)return;const g=X.map(i,{center:[xe.lat,xe.lon],zoom:14,zoomControl:!0});X.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(g),c.current=g;const h=window.requestAnimationFrame(()=>g.invalidateSize());return()=>{window.cancelAnimationFrame(h),g.remove(),c.current=null,C.current.clear()}},[]),n.useEffect(()=>{const i=c.current;if(!i)return;const g=e.filter(u=>typeof u.lat=="number"&&typeof u.lon=="number"),h=new Set;if(g.forEach(u=>{h.add(u.id);const s=[u.lat,u.lon],k=C.current.get(u.id);if(k){k.setLatLng(s);return}const m=X.divIcon({className:"lfg-repartidor",html:'<span class="lfg-repartidor__punto"></span>',iconSize:[22,22],iconAnchor:[11,11]}),v=X.marker(s,{icon:m}).addTo(i);v.bindPopup(`<strong>${u.repartidor??"Repartidor"}</strong><br>Pedido ${u.codigo}`),C.current.set(u.id,v)}),C.current.forEach((u,s)=>{h.has(s)||(u.remove(),C.current.delete(s))}),g.length>0){const u=X.latLngBounds(g.map(s=>[s.lat,s.lon]));i.fitBounds(u,{padding:[40,40],maxZoom:16})}},[e]),r.jsx(Ye,{children:r.jsx(er,{ref:t})})}const M=d.label`
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
`,xr=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
`,Ee=d.p`
  margin: -${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
`,fr=d.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  max-height: 13rem;
  overflow-y: auto;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
`,br=d.label`
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
`,yr=d.input`
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
`,jr=d.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,$r=d.div`
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
`,vr=d.span`
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
`,wr=d.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,Sr=d.div`
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
`,Cr=d.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Me=[{id:"descuento",nombre:"% de descuento",ayuda:"Un producto a un porcentaje menos. El número se muestra sobre la foto."},{id:"combo",nombre:"Combo",ayuda:"Varios productos juntos a un precio total menor que la suma."},{id:"cantidad",nombre:"Promo por cantidad",ayuda:"Llevando varias unidades del mismo producto, el paquete sale menos."}];function Pr({open:e,productos:t,onClose:c,onGuardar:C}){var a,y,w;const[i,g]=n.useState("descuento"),[h,u]=n.useState({}),[s,k]=n.useState(""),[m,v]=n.useState(""),[E,D]=n.useState(""),[x,A]=n.useState(""),[I,f]=n.useState(null),[B,l]=n.useState(!1),{photos:p,error:F,processing:N,addPhotos:L,removePhoto:T}=Te();n.useEffect(()=>{e&&(g("descuento"),D(""),u({}),k(""),v(""),A(""),f(null))},[e]),n.useEffect(()=>{if(!e)return;const o=j=>{j.key==="Escape"&&c()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[c,e]);const P=n.useMemo(()=>Object.keys(h),[h]),b=n.useMemo(()=>P.reduce((o,j)=>{const $=t.find(G=>G.id===j);if(!$)return o;const S=i==="cantidad"?Math.max(0,Number(m)||0):h[j];return o+$.precio*S},0),[m,h,P,t,i]),z=n.useMemo(()=>{if(i==="descuento"){const o=Math.min(90,Math.max(0,Number(s)||0));return Math.round(b*(100-o))/100}return Number(x)||0},[b,s,x,i]);if(!e)return null;const ie=(o,j)=>{u($=>{if(!j){const S={...$};return delete S[o],S}return i==="combo"?{...$,[o]:$[o]??1}:{[o]:1}})},se=o=>{g(o),u(j=>{const $=Object.keys(j);return o==="combo"||$.length<=1?j:{[$[0]]:1}})},U=async o=>{if(o.preventDefault(),B)return;const j=new FormData(o.currentTarget),$=E.trim();if(!$){f("Poné un título para la oferta.");return}if(P.length===0){f("Elegí al menos un producto.");return}if(i==="descuento"&&(Number(s)<1||Number(s)>90)){f("El descuento va entre 1 % y 90 %.");return}if(i==="cantidad"&&Number(m)<2){f("La promo por cantidad arranca en 2 unidades.");return}if(i!=="descuento"&&(z<=0||z>b)){f("El precio final tiene que ser menor al de lista.");return}f(null),l(!0);try{let S;if(p[0]){const{url:G}=await pe.subir(p[0].blob,"oferta.webp");S=G}await C({tipo:i,titulo:$,descripcion:String(j.get("descripcion")??"").trim()||void 0,porcentaje:i==="descuento"?Number(s):void 0,cantidad:i==="cantidad"?Number(m):void 0,precioFinal:i==="descuento"?void 0:z,fotoUrl:S,hasta:String(j.get("hasta")??"")||void 0,productos:P.map(G=>({productoId:G,unidades:h[G]}))}),c()}catch(S){f(S instanceof Error?S.message:"No pudimos crear la oferta.")}finally{l(!1)}},ae=((a=Me.find(o=>o.id===i))==null?void 0:a.ayuda)??"",_=t.find(o=>o.id===P[0])??null,oe=((y=p[0])==null?void 0:y.previewUrl)??((w=_==null?void 0:_.fotos)==null?void 0:w[0])??null;return r.jsx(_e,{onClick:c,role:"presentation",children:r.jsxs(qe,{role:"dialog","aria-modal":"true","aria-label":"Nueva oferta",onClick:o=>o.stopPropagation(),children:[r.jsxs(De,{children:[r.jsxs("div",{children:[r.jsx(Ae,{children:"Nueva oferta"}),r.jsx(Ie,{children:"Se publica al guardarla."})]}),r.jsx(Be,{type:"button",onClick:c,"aria-label":"Cerrar",children:r.jsx(K,{size:18,"aria-hidden":"true"})})]}),I||F?r.jsx(ge,{role:"alert","data-tono":"error",children:I??F}):null,r.jsxs("form",{onSubmit:U,children:[r.jsxs(M,{children:[r.jsx("span",{children:"Tipo de oferta"}),r.jsx("select",{value:i,onChange:o=>se(o.target.value),children:Me.map(o=>r.jsx("option",{value:o.id,children:o.nombre},o.id))})]}),r.jsx(Ee,{children:ae}),r.jsxs(M,{children:[r.jsx("span",{children:"Título"}),r.jsx("input",{name:"titulo",maxLength:80,value:E,onChange:o=>D(o.target.value),placeholder:i==="combo"?"Combo merienda":"Pan del día",required:!0})]}),r.jsx(M,{children:r.jsx("span",{children:i==="combo"?"Productos del combo":i==="cantidad"?"Producto de la promo":"Producto en descuento"})}),t.length===0?r.jsx(Ee,{children:"Cargá algún producto antes de armar una oferta."}):r.jsx(fr,{children:t.map(o=>{const j=o.id in h;return r.jsxs(br,{"data-elegido":j,children:[r.jsx("input",{type:i==="combo"?"checkbox":"radio",name:"producto",checked:j,onChange:$=>ie(o.id,$.target.checked)}),r.jsx("span",{children:o.nombre}),i==="combo"&&j?r.jsx(yr,{type:"number",min:1,max:20,value:h[o.id],"aria-label":`Unidades de ${o.nombre}`,onChange:$=>u(S=>({...S,[o.id]:Math.max(1,Number($.target.value)||1)}))}):null,r.jsx("small",{children:q(o.precio)})]},o.id)})}),i==="descuento"?r.jsxs(M,{children:[r.jsx("span",{children:"Porcentaje de descuento"}),r.jsx("input",{type:"number",min:1,max:90,value:s,onChange:o=>k(o.target.value),placeholder:"20",required:!0})]}):null,i==="cantidad"?r.jsxs(xr,{children:[r.jsxs(M,{children:[r.jsx("span",{children:"Unidades"}),r.jsx("input",{type:"number",min:2,max:99,value:m,onChange:o=>v(o.target.value),placeholder:"3",required:!0})]}),r.jsxs(M,{children:[r.jsx("span",{children:"Precio del paquete"}),r.jsx("input",{type:"number",min:0,step:"0.01",value:x,onChange:o=>A(o.target.value),required:!0})]})]}):null,i==="combo"?r.jsxs(M,{children:[r.jsx("span",{children:"Precio final del combo"}),r.jsx("input",{type:"number",min:0,step:"0.01",value:x,onChange:o=>A(o.target.value),required:!0})]}):null,r.jsxs(M,{children:[r.jsx("span",{children:"Hasta cuándo (opcional)"}),r.jsx("input",{type:"date",name:"hasta"})]}),r.jsxs(M,{children:[r.jsx("span",{children:"Descripción (opcional)"}),r.jsx("textarea",{name:"descripcion",maxLength:280})]}),r.jsxs(M,{as:"div",children:[r.jsx("span",{children:"Foto de la oferta (opcional)"}),r.jsxs(me,{as:"label",style:{cursor:N?"progress":"pointer"},"data-variante":"suave",children:[r.jsx(Re,{size:16,"aria-hidden":"true"}),p[0]?"Cambiar la foto":"Subir una foto",r.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:o=>{p[0]&&T(p[0].id),L(o.target.files),o.target.value=""}})]})]}),P.length>0&&b>0?r.jsxs(jr,{children:[r.jsxs($r,{children:[oe?r.jsx("img",{src:oe,alt:""}):null,i==="descuento"&&Number(s)>0?r.jsxs(vr,{children:["-",Math.trunc(Number(s)),"%"]}):null]}),r.jsxs(wr,{children:[r.jsx("strong",{children:(_==null?void 0:_.nombre)??"Combo"}),r.jsxs(Sr,{children:[r.jsx("s",{children:q(b)}),r.jsx("strong",{children:q(z)})]}),z>0&&z<b?r.jsxs(Cr,{children:["Ahorra ",q(b-z)]}):null]})]}):null,r.jsx(me,{type:"submit",disabled:B||N,children:B?"Publicando…":"Publicar oferta"})]})]})})}function zr({open:e,producto:t,onClose:c,onGuardar:C}){const[i,g]=n.useState("unidad"),[h,u]=n.useState(null),[s,k]=n.useState(!1),{photos:m,video:v,error:E,processing:D,addPhotos:x,addVideo:A,removePhoto:I,removeVideo:f}=Te();if(n.useEffect(()=>{e&&(g((t==null?void 0:t.unidad_venta)??"unidad"),u(null))},[e,t]),n.useEffect(()=>{if(!e)return;const l=p=>{p.key==="Escape"&&c()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[c,e]),!e)return null;const B=async l=>{if(l.preventDefault(),s)return;const p=new FormData(l.currentTarget),F=Number(p.get("precio")??0);if(F<=0){u("Poné un precio válido.");return}u(null),k(!0);try{const N=await Promise.all(m.map(async(T,P)=>{const{url:b}=await pe.subir(T.blob,`producto-${P}.webp`);return b}));let L=(t==null?void 0:t.video_url)??null;v!=null&&v.blob&&(L=(await pe.subir(v.blob,"producto.mp4")).url),await C({nombre:String(p.get("nombre")??"").trim(),descripcion:String(p.get("descripcion")??"").trim(),precio:F,unidadVenta:i,stock:p.get("stock")?Number(p.get("stock")):null,fotos:[...(t==null?void 0:t.fotos)??[],...N],videoUrl:L}),c()}catch(N){u(N instanceof Error?N.message:"No pudimos guardar el producto.")}finally{k(!1)}};return r.jsx(_e,{onClick:c,role:"presentation",children:r.jsxs(qe,{role:"dialog","aria-modal":"true","aria-label":t?"Editar producto":"Nuevo producto",onClick:l=>l.stopPropagation(),children:[r.jsxs(De,{children:[r.jsxs("div",{children:[r.jsx(Ae,{children:t?"Editar producto":"Nuevo producto"}),r.jsx(Ie,{children:"Lo que carguen acá es lo que ve el cliente."})]}),r.jsx(Be,{type:"button",onClick:c,"aria-label":"Cerrar",children:r.jsx(K,{size:18,"aria-hidden":"true"})})]}),r.jsx("form",{onSubmit:B,children:r.jsxs(dr,{children:[r.jsxs(J,{htmlFor:"prod-nombre",children:[r.jsx(V,{children:"Nombre"}),r.jsx(de,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(t==null?void 0:t.nombre)??"",placeholder:"Pan flauta",required:!0})]}),r.jsxs(J,{htmlFor:"prod-unidad",children:[r.jsx(V,{children:"Cómo se vende"}),r.jsx(lr,{id:"prod-unidad",value:i,onChange:l=>g(l.target.value),children:Ke.map(l=>r.jsx("option",{value:l.id,children:l.label},l.id))}),r.jsx(le,{children:We[i].help})]}),r.jsxs(J,{htmlFor:"prod-precio",children:[r.jsxs(V,{children:["Precio (",Le(i),")"]}),r.jsx(de,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(t==null?void 0:t.precio)??"",placeholder:"0",required:!0})]}),r.jsxs(J,{htmlFor:"prod-stock",children:[r.jsx(V,{children:"Stock"}),r.jsx(de,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(t==null?void 0:t.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),r.jsxs(J,{htmlFor:"prod-descripcion",children:[r.jsx(V,{children:"Descripción"}),r.jsx(cr,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(t==null?void 0:t.descripcion)??"",placeholder:"Qué tiene de especial"})]}),r.jsxs(ve,{children:[r.jsx(V,{as:"span",children:"Fotos"}),r.jsxs(we,{children:[m.length,"/",R.maxImages]})]}),r.jsxs(rr,{children:[m.map(l=>r.jsxs(Se,{children:[r.jsx(ar,{src:l.previewUrl,alt:""}),r.jsx(Ce,{type:"button",onClick:()=>I(l.id),"aria-label":"Quitar foto",children:r.jsx(K,{size:14,"aria-hidden":"true"})})]},l.id)),m.length<R.maxImages?r.jsxs(Pe,{as:"label","data-busy":D,children:[r.jsx(Re,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:D?"Optimizando…":"Agregar"}),r.jsx("input",{type:"file",accept:ir,multiple:!0,hidden:!0,onChange:l=>{x(l.target.files),l.target.value=""}})]}):null]}),r.jsxs(le,{children:["Se achican a ",R.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",ze(R.maxImageBytes),"."]}),r.jsxs(ve,{children:[r.jsx(V,{as:"span",children:"Video"}),r.jsxs(we,{children:[v?1:0,"/",R.maxVideos]})]}),v?r.jsxs(Se,{"data-video":"true",children:[r.jsx(or,{src:v.url,controls:!0,preload:"metadata"}),r.jsx(Ce,{type:"button",onClick:f,"aria-label":"Quitar video",children:r.jsx(K,{size:14,"aria-hidden":"true"})})]}):r.jsxs(Pe,{as:"label","data-wide":"true",children:[r.jsx(tr,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:"Agregar video"}),r.jsx("input",{type:"file",accept:sr,hidden:!0,onChange:l=>{A(l.target.files),l.target.value=""}})]}),r.jsxs(le,{children:["Hasta ",R.maxVideoSeconds," segundos y"," ",ze(R.maxVideoBytes),"."]}),E?r.jsx(nr,{children:E}):null,h?r.jsx(ge,{role:"alert","data-tono":"error",children:h}):null,r.jsx(me,{type:"submit",disabled:s,children:s?"Guardando…":t?"Guardar cambios":"Crear producto"})]})})]})})}const kr=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,Er=d.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  letter-spacing: -0.02em;
`,Mr=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:e})=>e.spacing[2]};
  margin-top: 0.15rem;
`,ce=d.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:e})=>e.spacing[2]};
  }
`,Fe=d.button`
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
`,Y=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,ee=d.div`
  min-width: 0;
`,te=d.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ne=d.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,ue=d.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:e})=>e.spacing[1]};
`,re=d.button`
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
`,Fr=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Nr=d.button`
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
`,Ne=d.span`
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
`,Oe=d.span`
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
`,Or=d.div`
  height: 18rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 24rem;
  }
`,Ar=d.div`
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
`,Ir=d.span`
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
`,Lr=d.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Tr=d.div`
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
`,_r=d.p`
  margin: 0.2rem 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`,qr=[{id:"productos",nombre:"Productos"},{id:"ofertas",nombre:"Ofertas"},{id:"pedidos",nombre:"Pedidos"},{id:"chats",nombre:"Chats"},{id:"envios",nombre:"Envíos"}],Dr=12e3,Br={descuento:"Descuento",combo:"Combo",cantidad:"Por cantidad"};function Rr(e){const t=e.productos.map(c=>c.nombre);return e.tipo==="cantidad"?`Llevando ${e.cantidad} unidades de ${t[0]??"ese producto"}.`:e.tipo==="combo"?e.productos.map(c=>c.unidades>1?`${c.unidades} × ${c.nombre}`:c.nombre).join(" + "):`${e.porcentaje}% menos en ${t[0]??"ese producto"}.`}const Vr={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"},Ur={buscando:"Buscando repartidor",asignado:"Asignado",retirado:"Retirado",en_camino:"En camino",entregado:"Entregado"},Gr=e=>{const t=Math.round((Date.now()-new Date(e.replace(" ","T")+"Z").getTime())/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:`hace ${Math.round(t/60)} h`};function sa(){const[e,t]=n.useState(null),[c,C]=n.useState([]),[i,g]=n.useState(!0),[h,u]=n.useState(null),[s,k]=n.useState("productos"),[m,v]=n.useState([]),[E,D]=n.useState([]),[x,A]=n.useState(null),[I,f]=n.useState([]),[B,l]=n.useState(!1),[p,F]=n.useState(null),[N,L]=n.useState(!1),[T,P]=n.useState(null),[b,z]=n.useState(null),ie=async a=>{await O.crearOferta(a);const{ofertas:y}=await O.ofertas();f(y)},se=async a=>{f(y=>y.map(w=>w.id===a.id?{...w,activa:!w.activa}:w));try{await O.activarOferta(a.id,!a.activa)}catch{f(y=>y.map(w=>w.id===a.id?{...w,activa:a.activa}:w))}},U=n.useCallback(async()=>{g(!0);try{const a=await O.ver();t(a.comercio),C(a.productos),u(null);try{const{ofertas:y}=await O.ofertas();f(y)}catch{f([])}}catch{u("No pudimos cargar tu comercio.")}finally{g(!1)}},[]);n.useEffect(()=>{U()},[U]),n.useEffect(()=>{if(!e||s==="productos")return;const a=async()=>{try{if(s==="pedidos"||s==="chats"){const{pedidos:w}=await je.pedidos();v(w)}if(s==="envios"){const{envios:w}=await je.envios();D(w)}}catch{}};a();const y=window.setInterval(a,Dr);return()=>window.clearInterval(y)},[e,s]);const ae=n.useMemo(()=>m.reduce((a,y)=>a+Number(y.sin_leer??0),0),[m]),_=async a=>{T?await O.editarProducto(T.id,a):await O.crearProducto({...a,comercioId:e==null?void 0:e.id}),await U()},oe=async()=>{if(b)try{await O.borrarProducto(b.id),await U()}catch{u("No pudimos borrar el producto.")}finally{z(null)}};return r.jsxs(Ve,{showSearch:!1,children:[r.jsx(Ue,{children:r.jsx(Ge,{children:r.jsxs(He,{children:[h?r.jsx(ge,{role:"alert","data-tono":"error",children:h}):null,e?r.jsx(H,{children:r.jsx(Q,{children:r.jsxs(kr,{children:[r.jsx(Qe,{$size:"3.5rem",$tone:"blue",children:r.jsx(fe,{size:24,"aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx(Er,{children:e.nombre}),r.jsxs(Mr,{children:[r.jsx(ce,{children:e.rubro_nombre}),r.jsx(ce,{children:e.direccion}),e.horario?r.jsx(ce,{children:e.horario}):null]})]})]})})}):null,!i&&!e&&!h?r.jsx(Z,{icon:fe,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,e?r.jsx(Fr,{children:qr.map(a=>r.jsxs(Nr,{type:"button","data-active":s===a.id,onClick:()=>k(a.id),children:[a.nombre,a.id==="chats"&&ae>0?r.jsx(Ne,{children:ae}):null]},a.id))}):null,e&&s==="productos"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Tus productos",chip:`${c.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),r.jsxs(Fe,{type:"button",onClick:()=>{P(null),L(!0)},children:[r.jsx(be,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),c.length===0&&!i?r.jsx(Z,{icon:ye,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,c.map(a=>r.jsx(H,{children:r.jsx(Q,{children:r.jsxs(Y,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:a.nombre}),r.jsxs(ne,{children:[q(a.precio)," ",a.unidad_venta!=="unidad"?Le(a.unidad_venta):"c/u"," · desde ",Xe(a.unidad_venta,0)]})]}),r.jsxs(ue,{children:[r.jsx(re,{type:"button",onClick:()=>{P(a),L(!0)},"aria-label":`Editar ${a.nombre}`,children:r.jsx(pr,{size:15,"aria-hidden":"true"})}),r.jsx(re,{type:"button","data-tono":"danger",onClick:()=>z(a),"aria-label":`Borrar ${a.nombre}`,children:r.jsx(K,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&s==="ofertas"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Ofertas",chip:`${I.length}`,subtitle:"Promociones que ve el cliente en tu comercio."}),r.jsxs(Fe,{type:"button",onClick:()=>l(!0),children:[r.jsx(be,{size:18,"aria-hidden":"true"}),"Crear nueva oferta"]}),I.length===0&&!i?r.jsx(Z,{icon:ur,title:"Sin ofertas",text:"Armá un descuento, un combo o una promo por cantidad.",dashed:!0}):null,I.map(a=>r.jsx(H,{children:r.jsx(Q,{children:r.jsxs(Y,{children:[r.jsxs(ee,{children:[r.jsxs(Ar,{children:[r.jsx("strong",{children:a.titulo}),a.porcentaje?r.jsxs(Lr,{children:["-",a.porcentaje,"%"]}):null,r.jsx(Ir,{"data-apagada":!a.activa,children:a.activa?Br[a.tipo]:"Apagada"})]}),r.jsxs(Tr,{children:[r.jsx("s",{children:q(a.precioLista)}),r.jsx("strong",{children:q(a.precioFinal)})]}),r.jsx(_r,{children:Rr(a)})]}),r.jsxs(ue,{children:[r.jsx(re,{type:"button",onClick:()=>void se(a),"aria-label":a.activa?`Apagar ${a.titulo}`:`Encender ${a.titulo}`,children:a.activa?r.jsx(hr,{size:17,"aria-hidden":"true"}):r.jsx(mr,{size:17,"aria-hidden":"true"})}),r.jsx(re,{type:"button","data-tono":"danger",onClick:()=>F(a),"aria-label":`Borrar ${a.titulo}`,children:r.jsx(K,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&s==="pedidos"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Pedidos",chip:`${m.length}`,subtitle:"Lo que está entrando ahora."}),m.length===0?r.jsx(Z,{icon:ye,title:"Sin pedidos",text:"Cuando alguien te compre, aparece acá.",dashed:!0}):null,m.map(a=>r.jsx(H,{children:r.jsx(Q,{children:r.jsxs(Y,{children:[r.jsxs(ee,{children:[r.jsxs(te,{children:[a.codigo," · ",a.cliente]}),r.jsxs(ne,{children:[q(a.total)," · ",a.items," ",a.items===1?"producto":"productos"," ·"," ",a.direccion_texto]})]}),r.jsx(Oe,{"data-estado":a.estado,children:Vr[a.estado]??a.estado})]})})},a.id))]}):null,e&&s==="chats"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Conversaciones",subtitle:"Consultas de tus clientes sobre cada pedido."}),m.length===0?r.jsx(Z,{icon:ke,title:"Sin conversaciones",text:"Se abre una por cada pedido que recibas.",dashed:!0}):null,m.map(a=>r.jsx(H,{children:r.jsx(Q,{children:r.jsxs(Y,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:a.cliente}),r.jsxs(ne,{children:["Pedido ",a.codigo,a.cliente_telefono?` · ${a.cliente_telefono}`:""]})]}),r.jsxs(ue,{children:[a.sin_leer>0?r.jsx(Ne,{children:a.sin_leer}):null,r.jsx(re,{type:"button",onClick:()=>A(a),"aria-label":`Abrir chat con ${a.cliente}`,children:r.jsx(ke,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&s==="envios"?r.jsxs(r.Fragment,{children:[r.jsx(W,{title:"Envíos en curso",chip:`${E.length}`,subtitle:"Dónde va cada pedido que salió."}),E.length===0?r.jsx(Z,{icon:Ze,title:"Nada en camino",text:"Cuando un repartidor tome un pedido lo vas a ver acá.",dashed:!0}):r.jsx(Or,{children:r.jsx(gr,{envios:E})}),E.map(a=>r.jsx(H,{children:r.jsx(Q,{children:r.jsxs(Y,{children:[r.jsxs(ee,{children:[r.jsx(te,{children:a.repartidor??"Buscando repartidor"}),r.jsxs(ne,{children:["Pedido ",a.codigo," · ",a.direccion_texto,a.ubicacion_en?` · ${Gr(a.ubicacion_en)}`:" · sin ubicación todavía"]})]}),r.jsx(Oe,{"data-estado":a.estado,children:Ur[a.estado]??a.estado})]})})},a.id))]}):null]})})}),r.jsx(Pr,{open:B,productos:c,onClose:()=>l(!1),onGuardar:ie}),r.jsx($e,{open:p!==null,title:"Borrar la oferta",text:`"${(p==null?void 0:p.titulo)??""}" deja de estar disponible para los clientes.`,confirmLabel:"Borrar",onCancel:()=>F(null),onConfirm:async()=>{p&&(await O.borrarOferta(p.id),f(a=>a.filter(y=>y.id!==p.id)),F(null))}}),r.jsx(Je,{open:x!==null,pedidoId:(x==null?void 0:x.id)??null,codigo:(x==null?void 0:x.codigo)??"",cliente:(x==null?void 0:x.cliente)??"",onClose:()=>A(null)}),r.jsx(zr,{open:N,producto:T,onClose:()=>L(!1),onGuardar:_}),r.jsx($e,{open:b!==null,title:"¿Borrar este producto?",text:`"${(b==null?void 0:b.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>z(null),onConfirm:()=>void oe()})]})}export{sa as MiComercioScreen};
