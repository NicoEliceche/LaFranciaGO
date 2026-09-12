import{c as Te,k as De,j as e,q as N,C as ia,a as sa,X as de,o as z,aZ as Ae,b0 as C,M as ya,b as va,S as Sa,m as Ie,d as q,e as V,a2 as Ca,r as Se,E as Y,n as ee,b1 as $a,a0 as _e,P as qe,T as Pa,b2 as Ve}from"./index-CVpm7Ujl.js";import{r as i}from"./react-D_B_6qYb.js";import{S as wa,b as Ea,p as oa,s as ka}from"./saleUnits-CLP-TCsg.js";import{C as Ma}from"./ChatPedidoDialog-BDo0JvMa.js";import{C as Re}from"./ConfirmDialog-C7xcVR2J.js";import{L as me,M as za,a as Na}from"./AddressMapStyled-DD2VhPg2.js";import{u as da}from"./useMediaUpload-CTMFYLii.js";import{A as ye,a as Fe}from"./AuthScreenStyled-9gz_rpLO.js";import{P as ca,a as la,b as ua,c as ma}from"./PanelLoginDialogStyled-nfauC6qN.js";import{I as ha,M as Be,a as Ge,b as Aa,c as Ue,d as Fa,e as He,f as Qe,g as Ta,V as Oa,F as La}from"./ProductFormScreenStyled-DN9Nykgh.js";import{M as ae,I as Da,f as Ze,V as Ia}from"./mediaService-D2_VAu2k.js";import{F as _a,a as he,b as re,e as Ce,c as qa,d as $e,j as Va}from"./formStyles-CNeYuuJ2.js";import{C as Ra,a as Ba,b as Ga,c as Pe,S as Ua,d as Ha,e as Je,f as We,g as oe,P as we,h as ne,D as Qa,T as Xe,i as Ke,N as Ye,j as pe,k as xe,l as je,m as Za,n as Ja,o as Ee,p as ge,M as ea,q as H,r as Q,s as Z,t as fe,R as Wa,O as Xa,u as Ka,v as Ya,w as er,x as ar,y as rr,z as nr,E as aa,A as tr}from"./MiComercioScreenStyled-Deoc7REr.js";import{T as ke,a as Me}from"./trending-up-BFky3X9J.js";import{B as ir}from"./bar-chart-3-2a3DB6VX.js";import{B as sr}from"./badge-percent-Zb8a5Bol.js";import{M as ra}from"./message-square-BW4siDnI.js";import"./ChatPedidoDialogStyled-DGBauUwk.js";import"./MotivoDialog-TrAYHxcm.js";import"./send-DjNHFE5K.js";import"./info-D8oupIWr.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=Te("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=Te("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=Te("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);function lr({envios:a}){const t=i.useRef(null),c=i.useRef(null),E=i.useRef(new Map);return i.useEffect(()=>{const o=t.current;if(!o||c.current)return;const f=me.map(o,{center:[De.lat,De.lon],zoom:14,zoomControl:!0});me.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(f),c.current=f;const j=window.requestAnimationFrame(()=>f.invalidateSize());return()=>{window.cancelAnimationFrame(j),f.remove(),c.current=null,E.current.clear()}},[]),i.useEffect(()=>{const o=c.current;if(!o)return;const f=a.filter(u=>typeof u.lat=="number"&&typeof u.lon=="number"),j=new Set;if(f.forEach(u=>{j.add(u.id);const d=[u.lat,u.lon],F=E.current.get(u.id);if(F){F.setLatLng(d);return}const x=me.divIcon({className:"lfg-repartidor",html:'<span class="lfg-repartidor__punto"></span>',iconSize:[22,22],iconAnchor:[11,11]}),y=me.marker(d,{icon:x}).addTo(o);y.bindPopup(`<strong>${u.repartidor??"Repartidor"}</strong><br>Pedido ${u.codigo}`),E.current.set(u.id,y)}),E.current.forEach((u,d)=>{j.has(d)||(u.remove(),E.current.delete(d))}),f.length>0){const u=me.latLngBounds(f.map(d=>[d.lat,d.lon]));o.fitBounds(u,{padding:[40,40],maxZoom:16})}},[a]),e.jsx(za,{children:e.jsx(Na,{ref:t})})}const L=N.label`
  display: grid;
  gap: 0.3rem;
  margin-bottom: ${({theme:a})=>a.spacing[3]};

  > span {
    color: ${({theme:a})=>a.color.textSoft};
    font-size: ${({theme:a})=>a.typography.size.xs};
    font-weight: ${({theme:a})=>a.typography.weight.bold};
  }

  > input,
  > select,
  > textarea {
    width: 100%;
    min-height: 2.75rem;
    padding: 0 ${({theme:a})=>a.spacing[3]};
    border-radius: ${({theme:a})=>a.radius.lg};
    border: 1px solid ${({theme:a})=>a.color.border};
    background: ${({theme:a})=>a.color.surface};
    color: ${({theme:a})=>a.color.text};
    font-family: inherit;
    font-size: ${({theme:a})=>a.typography.size.sm};

    &:focus-visible {
      outline: 2px solid ${({theme:a})=>a.color.primary};
      outline-offset: 1px;
    }
  }

  > textarea {
    min-height: 4.5rem;
    padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
    resize: vertical;
  }
`,ur=N.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${({theme:a})=>a.spacing[2]};
`,na=N.p`
  margin: -${({theme:a})=>a.spacing[2]} 0 ${({theme:a})=>a.spacing[3]};
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.4;
`,mr=N.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[1]};
  max-height: 13rem;
  overflow-y: auto;
  margin-bottom: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[1]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.border};
`,hr=N.label`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[2]};
  border-radius: ${({theme:a})=>a.radius.md};
  cursor: pointer;
  transition: background-color 140ms ease;

  &:hover {
    background: ${({theme:a})=>a.color.surfaceMuted};
  }

  &[data-elegido='true'] {
    background: ${({theme:a})=>a.color.primarySoft};
  }

  > input {
    flex: 0 0 auto;
    accent-color: ${({theme:a})=>a.color.primary};
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    font-size: ${({theme:a})=>a.typography.size.sm};
    overflow-wrap: anywhere;
  }

  > small {
    flex: 0 0 auto;
    color: ${({theme:a})=>a.color.textSoft};
    font-size: ${({theme:a})=>a.typography.size.xs};
  }
`,pr=N.input`
  flex: 0 0 auto;
  width: 3.25rem;
  min-height: 2rem;
  padding: 0 ${({theme:a})=>a.spacing[1]};
  border-radius: ${({theme:a})=>a.radius.md};
  border: 1px solid ${({theme:a})=>a.color.border};
  background: ${({theme:a})=>a.color.surface};
  color: ${({theme:a})=>a.color.text};
  font-family: inherit;
  font-size: ${({theme:a})=>a.typography.size.xs};
  text-align: center;
`,xr=N.div`
  display: flex;
  gap: ${({theme:a})=>a.spacing[3]};
  align-items: center;
  margin-bottom: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  background: ${({theme:a})=>a.color.surfaceMuted};
`,jr=N.div`
  position: relative;
  flex: 0 0 auto;
  width: 5rem;
  height: 5rem;
  border-radius: ${({theme:a})=>a.radius.lg};
  overflow: hidden;
  background: ${({theme:a})=>a.color.surface};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,gr=N.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  padding: 0.15rem 0.4rem;
  border-radius: ${({theme:a})=>a.radius.md} 0 0 0;
  background: ${({theme:a})=>a.color.brand};
  color: ${({theme:a})=>a.color.onPrimary};
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.sm};
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  line-height: 1.2;
`,br=N.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,fr=N.div`
  display: flex;
  align-items: baseline;
  gap: ${({theme:a})=>a.spacing[2]};
  flex-wrap: wrap;

  > s {
    color: ${({theme:a})=>a.color.textMuted};
    font-size: ${({theme:a})=>a.typography.size.xs};
  }

  > strong {
    color: ${({theme:a})=>a.color.primary};
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.base};
  }
`,yr=N.span`
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
`,ta=[{id:"descuento",nombre:"% de descuento",ayuda:"Un producto a un porcentaje menos. El número se muestra sobre la foto."},{id:"combo",nombre:"Combo",ayuda:"Varios productos juntos a un precio total menor que la suma."},{id:"cantidad",nombre:"Promo por cantidad",ayuda:"Llevando varias unidades del mismo producto, el paquete sale menos."}];function vr({open:a,productos:t,onClose:c,onGuardar:E}){var se,le,_;const[o,f]=i.useState("descuento"),[j,u]=i.useState({}),[d,F]=i.useState(""),[x,y]=i.useState(""),[T,J]=i.useState(""),[v,R]=i.useState(""),[p,k]=i.useState(null),[D,l]=i.useState(!1),{photos:S,error:B,processing:A,addPhotos:W,removePhoto:X}=da();i.useEffect(()=>{a&&(f("descuento"),J(""),u({}),F(""),y(""),R(""),k(null))},[a]),i.useEffect(()=>{if(!a)return;const n=g=>{g.key==="Escape"&&c()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[c,a]);const $=i.useMemo(()=>Object.keys(j),[j]),P=i.useMemo(()=>$.reduce((n,g)=>{const b=t.find(U=>U.id===g);if(!b)return n;const w=o==="cantidad"?Math.max(0,Number(x)||0):j[g];return n+b.precio*w},0),[x,j,$,t,o]),M=i.useMemo(()=>{if(o==="descuento"){const n=Math.min(90,Math.max(0,Number(d)||0));return Math.round(P*(100-n))/100}return Number(v)||0},[P,d,v,o]);if(!a)return null;const be=(n,g)=>{u(b=>{if(!g){const w={...b};return delete w[n],w}return o==="combo"?{...b,[n]:b[n]??1}:{[n]:1}})},te=n=>{f(n),u(g=>{const b=Object.keys(g);return n==="combo"||b.length<=1?g:{[b[0]]:1}})},I=async n=>{if(n.preventDefault(),D)return;const g=new FormData(n.currentTarget),b=T.trim();if(!b){k("Poné un título para la oferta.");return}if($.length===0){k("Elegí al menos un producto.");return}if(o==="descuento"&&(Number(d)<1||Number(d)>90)){k("El descuento va entre 1 % y 90 %.");return}if(o==="cantidad"&&Number(x)<2){k("La promo por cantidad arranca en 2 unidades.");return}if(o!=="descuento"&&(M<=0||M>P)){k("El precio final tiene que ser menor al de lista.");return}k(null),l(!0);try{let w;if(S[0]){const{url:U}=await Ae.subir(S[0].blob,"oferta.webp");w=U}await E({tipo:o,titulo:b,descripcion:String(g.get("descripcion")??"").trim()||void 0,porcentaje:o==="descuento"?Number(d):void 0,cantidad:o==="cantidad"?Number(x):void 0,precioFinal:o==="descuento"?void 0:M,fotoUrl:w,hasta:String(g.get("hasta")??"")||void 0,productos:$.map(U=>({productoId:U,unidades:j[U]}))}),c()}catch(w){k(w instanceof Error?w.message:"No pudimos crear la oferta.")}finally{l(!1)}},ce=((se=ta.find(n=>n.id===o))==null?void 0:se.ayuda)??"",G=t.find(n=>n.id===$[0])??null,ie=((le=S[0])==null?void 0:le.previewUrl)??((_=G==null?void 0:G.fotos)==null?void 0:_[0])??null;return e.jsx(ca,{onClick:c,role:"presentation",children:e.jsxs(la,{role:"dialog","aria-modal":"true","aria-label":"Nueva oferta",onClick:n=>n.stopPropagation(),children:[e.jsxs(ua,{children:[e.jsxs("div",{children:[e.jsx(ia,{children:"Nueva oferta"}),e.jsx(sa,{children:"Se publica al guardarla."})]}),e.jsx(ma,{type:"button",onClick:c,"aria-label":"Cerrar",children:e.jsx(de,{size:18,"aria-hidden":"true"})})]}),p||B?e.jsx(ye,{role:"alert","data-tono":"error",children:p??B}):null,e.jsxs("form",{onSubmit:I,children:[e.jsxs(L,{children:[e.jsx("span",{children:"Tipo de oferta"}),e.jsx("select",{value:o,onChange:n=>te(n.target.value),children:ta.map(n=>e.jsx("option",{value:n.id,children:n.nombre},n.id))})]}),e.jsx(na,{children:ce}),e.jsxs(L,{children:[e.jsx("span",{children:"Título"}),e.jsx("input",{name:"titulo",maxLength:80,value:T,onChange:n=>J(n.target.value),placeholder:o==="combo"?"Combo merienda":"Pan del día",required:!0})]}),e.jsx(L,{children:e.jsx("span",{children:o==="combo"?"Productos del combo":o==="cantidad"?"Producto de la promo":"Producto en descuento"})}),t.length===0?e.jsx(na,{children:"Cargá algún producto antes de armar una oferta."}):e.jsx(mr,{children:t.map(n=>{const g=n.id in j;return e.jsxs(hr,{"data-elegido":g,children:[e.jsx("input",{type:o==="combo"?"checkbox":"radio",name:"producto",checked:g,onChange:b=>be(n.id,b.target.checked)}),e.jsx("span",{children:n.nombre}),o==="combo"&&g?e.jsx(pr,{type:"number",min:1,max:20,value:j[n.id],"aria-label":`Unidades de ${n.nombre}`,onChange:b=>u(w=>({...w,[n.id]:Math.max(1,Number(b.target.value)||1)}))}):null,e.jsx("small",{children:z(n.precio)})]},n.id)})}),o==="descuento"?e.jsxs(L,{children:[e.jsx("span",{children:"Porcentaje de descuento"}),e.jsx("input",{type:"number",min:1,max:90,value:d,onChange:n=>F(n.target.value),placeholder:"20",required:!0})]}):null,o==="cantidad"?e.jsxs(ur,{children:[e.jsxs(L,{children:[e.jsx("span",{children:"Unidades"}),e.jsx("input",{type:"number",min:2,max:99,value:x,onChange:n=>y(n.target.value),placeholder:"3",required:!0})]}),e.jsxs(L,{children:[e.jsx("span",{children:"Precio del paquete"}),e.jsx("input",{type:"number",min:0,step:"0.01",value:v,onChange:n=>R(n.target.value),required:!0})]})]}):null,o==="combo"?e.jsxs(L,{children:[e.jsx("span",{children:"Precio final del combo"}),e.jsx("input",{type:"number",min:0,step:"0.01",value:v,onChange:n=>R(n.target.value),required:!0})]}):null,e.jsxs(L,{children:[e.jsx("span",{children:"Hasta cuándo (opcional)"}),e.jsx("input",{type:"date",name:"hasta"})]}),e.jsxs(L,{children:[e.jsx("span",{children:"Descripción (opcional)"}),e.jsx("textarea",{name:"descripcion",maxLength:280})]}),e.jsxs(L,{as:"div",children:[e.jsx("span",{children:"Foto de la oferta (opcional)"}),e.jsxs(Fe,{as:"label",style:{cursor:A?"progress":"pointer"},"data-variante":"suave",children:[e.jsx(ha,{size:16,"aria-hidden":"true"}),S[0]?"Cambiar la foto":"Subir una foto",e.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:n=>{S[0]&&X(S[0].id),W(n.target.files),n.target.value=""}})]})]}),$.length>0&&P>0?e.jsxs(xr,{children:[e.jsxs(jr,{children:[ie?e.jsx("img",{src:ie,alt:""}):null,o==="descuento"&&Number(d)>0?e.jsxs(gr,{children:["-",Math.trunc(Number(d)),"%"]}):null]}),e.jsxs(br,{children:[e.jsx("strong",{children:(G==null?void 0:G.nombre)??"Combo"}),e.jsxs(fr,{children:[e.jsx("s",{children:z(P)}),e.jsx("strong",{children:z(M)})]}),M>0&&M<P?e.jsxs(yr,{children:["Ahorra ",z(P-M)]}):null]})]}):null,e.jsx(Fe,{type:"submit",disabled:D||A,children:D?"Publicando…":"Publicar oferta"})]})]})})}function Sr({open:a,producto:t,onClose:c,onGuardar:E}){const[o,f]=i.useState("unidad"),[j,u]=i.useState(null),[d,F]=i.useState(!1),{photos:x,video:y,error:T,processing:J,addPhotos:v,addVideo:R,removePhoto:p,removeVideo:k}=da();if(i.useEffect(()=>{a&&(f((t==null?void 0:t.unidad_venta)??"unidad"),u(null))},[a,t]),i.useEffect(()=>{if(!a)return;const l=S=>{S.key==="Escape"&&c()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[c,a]),!a)return null;const D=async l=>{if(l.preventDefault(),d)return;const S=new FormData(l.currentTarget),B=Number(S.get("precio")??0);if(B<=0){u("Poné un precio válido.");return}u(null),F(!0);try{const A=await Promise.all(x.map(async(X,$)=>{const{url:P}=await Ae.subir(X.blob,`producto-${$}.webp`);return P}));let W=(t==null?void 0:t.video_url)??null;y!=null&&y.blob&&(W=(await Ae.subir(y.blob,"producto.mp4")).url),await E({nombre:String(S.get("nombre")??"").trim(),descripcion:String(S.get("descripcion")??"").trim(),precio:B,unidadVenta:o,stock:S.get("stock")?Number(S.get("stock")):null,fotos:[...(t==null?void 0:t.fotos)??[],...A],videoUrl:W}),c()}catch(A){u(A instanceof Error?A.message:"No pudimos guardar el producto.")}finally{F(!1)}};return e.jsx(ca,{onClick:c,role:"presentation",children:e.jsxs(la,{role:"dialog","aria-modal":"true","aria-label":t?"Editar producto":"Nuevo producto",onClick:l=>l.stopPropagation(),children:[e.jsxs(ua,{children:[e.jsxs("div",{children:[e.jsx(ia,{children:t?"Editar producto":"Nuevo producto"}),e.jsx(sa,{children:"Lo que carguen acá es lo que ve el cliente."})]}),e.jsx(ma,{type:"button",onClick:c,"aria-label":"Cerrar",children:e.jsx(de,{size:18,"aria-hidden":"true"})})]}),e.jsx("form",{onSubmit:D,children:e.jsxs(_a,{children:[e.jsxs(he,{htmlFor:"prod-nombre",children:[e.jsx(re,{children:"Nombre"}),e.jsx(Ce,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(t==null?void 0:t.nombre)??"",placeholder:"Pan flauta",required:!0})]}),e.jsxs(he,{htmlFor:"prod-unidad",children:[e.jsx(re,{children:"Cómo se vende"}),e.jsx(qa,{id:"prod-unidad",value:o,onChange:l=>f(l.target.value),children:wa.map(l=>e.jsx("option",{value:l.id,children:l.label},l.id))}),e.jsx($e,{children:Ea[o].help})]}),e.jsxs(he,{htmlFor:"prod-precio",children:[e.jsxs(re,{children:["Precio (",oa(o),")"]}),e.jsx(Ce,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(t==null?void 0:t.precio)??"",placeholder:"0",required:!0})]}),e.jsxs(he,{htmlFor:"prod-stock",children:[e.jsx(re,{children:"Stock"}),e.jsx(Ce,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(t==null?void 0:t.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),e.jsxs(he,{htmlFor:"prod-descripcion",children:[e.jsx(re,{children:"Descripción"}),e.jsx(Va,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(t==null?void 0:t.descripcion)??"",placeholder:"Qué tiene de especial"})]}),e.jsxs(Be,{children:[e.jsx(re,{as:"span",children:"Fotos"}),e.jsxs(Ge,{children:[x.length,"/",ae.maxImages]})]}),e.jsxs(Aa,{children:[x.map(l=>e.jsxs(Ue,{children:[e.jsx(Fa,{src:l.previewUrl,alt:""}),e.jsx(He,{type:"button",onClick:()=>p(l.id),"aria-label":"Quitar foto",children:e.jsx(de,{size:14,"aria-hidden":"true"})})]},l.id)),x.length<ae.maxImages?e.jsxs(Qe,{as:"label","data-busy":J,children:[e.jsx(ha,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:J?"Optimizando…":"Agregar"}),e.jsx("input",{type:"file",accept:Da,multiple:!0,hidden:!0,onChange:l=>{v(l.target.files),l.target.value=""}})]}):null]}),e.jsxs($e,{children:["Se achican a ",ae.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",Ze(ae.maxImageBytes),"."]}),e.jsxs(Be,{children:[e.jsx(re,{as:"span",children:"Video"}),e.jsxs(Ge,{children:[y?1:0,"/",ae.maxVideos]})]}),y?e.jsxs(Ue,{"data-video":"true",children:[e.jsx(Ta,{src:y.url,controls:!0,preload:"metadata"}),e.jsx(He,{type:"button",onClick:k,"aria-label":"Quitar video",children:e.jsx(de,{size:14,"aria-hidden":"true"})})]}):e.jsxs(Qe,{as:"label","data-wide":"true",children:[e.jsx(Oa,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:"Agregar video"}),e.jsx("input",{type:"file",accept:Ia,hidden:!0,onChange:l=>{R(l.target.files),l.target.value=""}})]}),e.jsxs($e,{children:["Hasta ",ae.maxVideoSeconds," segundos y"," ",Ze(ae.maxVideoBytes),"."]}),T?e.jsx(La,{children:T}):null,j?e.jsx(ye,{role:"alert","data-tono":"error",children:j}):null,e.jsx(Fe,{type:"submit",disabled:d,children:d?"Guardando…":t?"Guardar cambios":"Crear producto"})]})})]})})}const Cr=[{id:"resumen",nombre:"Resumen"},{id:"negocio",nombre:"Mi negocio"},{id:"productos",nombre:"Productos"},{id:"ofertas",nombre:"Ofertas"},{id:"pedidos",nombre:"Pedidos"},{id:"chats",nombre:"Chats"},{id:"envios",nombre:"Envíos"}],$r=12e3;function ze(a,t){if(t===0)return{texto:a>0?"sin comparación":"—",tono:"igual"};const c=Math.round((a-t)/t*100);return{texto:`${c>0?"+":""}${c}%`,tono:c>0?"sube":c<0?"baja":"igual"}}const Pr=a=>a==null?"sin-control":a<=0?"agotado":a<=5?"poco":"disponible",wr=a=>a==null?"Sin control":a<=0?"Agotado":a<=5?`Quedan ${a}`:"Disponible",Er=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],kr={descuento:"Descuento",combo:"Combo",cantidad:"Por cantidad"};function Mr(a){const t=a.productos.map(c=>c.nombre);return a.tipo==="cantidad"?`Llevando ${a.cantidad} unidades de ${t[0]??"ese producto"}.`:a.tipo==="combo"?a.productos.map(c=>c.unidades>1?`${c.unidades} × ${c.nombre}`:c.nombre).join(" + "):`${a.porcentaje}% menos en ${t[0]??"ese producto"}.`}const Ne={recibido:{nombre:"Recibido",accion:"Empecé a prepararlo"},preparando:{nombre:"En preparación",accion:"¡Está listo!"},listo:{nombre:"Listo para retirar",accion:null}},zr={recibido:"preparando",preparando:"listo",listo:null},Nr={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"},Ar={buscando:"Buscando repartidor",asignado:"Asignado",retirado:"Retirado",en_camino:"En camino",entregado:"Entregado"},Fr=a=>{const t=Math.round((Date.now()-new Date(a.replace(" ","T")+"Z").getTime())/6e4);return t<1?"ahora mismo":t<60?`hace ${t} min`:`hace ${Math.round(t/60)} h`};function an(){const[a,t]=i.useState(null),[c,E]=i.useState([]),[o,f]=i.useState(!0),[j,u]=i.useState(null),[d,F]=i.useState("resumen"),[x,y]=i.useState([]),[T,J]=i.useState([]),[v,R]=i.useState(null),[p,k]=i.useState(null),[D,l]=i.useState([]),[S,B]=i.useState(!1),[A,W]=i.useState(null),[X,$]=i.useState([]),[P,M]=i.useState(!1),[be,te]=i.useState(null),[I,ce]=i.useState(null),[G,ie]=i.useState(!1),[se,le]=i.useState(null),[_,n]=i.useState(null),g=async r=>{await C.crearOferta(r);const{ofertas:s}=await C.ofertas();l(s)},b=async r=>{const s=zr[r.preparacion];if(!(!s||A)){W(r.id),y(m=>m.map(h=>h.id===r.id?{...h,preparacion:s}:h));try{await C.prepararPedido(r.id,s)}catch{y(m=>m.map(h=>h.id===r.id?{...h,preparacion:r.preparacion}:h)),u("No pudimos actualizar el pedido.")}finally{W(null)}}},w=async r=>{r.preventDefault();const s=new FormData(r.currentTarget);M(!0),te(null);try{await C.editar({nombre:String(s.get("nombre")??""),direccion:String(s.get("direccion")??""),telefono:String(s.get("telefono")??""),email:String(s.get("email")??""),descripcion:String(s.get("descripcion")??""),minimo:Number(s.get("minimo")??0)}),te("Guardamos tus datos."),await ue()}catch{u("No pudimos guardar los datos.")}finally{M(!1)}},U=async()=>{M(!0),te(null);try{await C.guardarHorarios(X.map(r=>({dia:r.dia,abre:r.abre,cierra:r.cierra}))),te("Guardamos tus horarios.")}catch(r){u(r instanceof Error?r.message:"No pudimos guardar los horarios.")}finally{M(!1)}},pa=r=>{$(s=>[...s,{id:`nuevo-${r}-${s.length}`,dia:r,abre:"09:00",cierra:"13:00",abre_min:540,cierra_min:780}])},Oe=(r,s,m)=>{$(h=>h.map(O=>O.id===r?{...O,[s]:m}:O))},xa=r=>{$(s=>s.filter(m=>m.id!==r))},ja=async(r,s)=>{const m=s.trim()==="",h=Number(s);if(!m&&!Number.isFinite(h))return;const O=m?null:Math.max(0,Math.trunc(h));E(ve=>ve.map(K=>K.id===r.id?{...K,stock:O}:K));try{await C.ajustarStock(r.id,O)}catch{E(ve=>ve.map(K=>K.id===r.id?{...K,stock:r.stock}:K)),u("No pudimos guardar el stock.")}},ga=async r=>{l(s=>s.map(m=>m.id===r.id?{...m,activa:!m.activa}:m));try{await C.activarOferta(r.id,!r.activa)}catch{l(s=>s.map(m=>m.id===r.id?{...m,activa:r.activa}:m))}},ue=i.useCallback(async()=>{f(!0);try{const r=await C.ver();t(r.comercio),E(r.productos),u(null);try{const{ofertas:s}=await C.ofertas();l(s)}catch{l([])}try{k(await C.metricas())}catch{k(null)}try{const{horarios:s}=await C.horarios();$(s)}catch{$([])}}catch{u("No pudimos cargar tu comercio.")}finally{f(!1)}},[]);i.useEffect(()=>{ue()},[ue]),i.useEffect(()=>{if(!a||d==="productos")return;const r=async()=>{try{if(d==="pedidos"||d==="chats"){const{pedidos:m}=await Ve.pedidos();y(m)}if(d==="envios"){const{envios:m}=await Ve.envios();J(m)}}catch{}};r();const s=window.setInterval(r,$r);return()=>window.clearInterval(s)},[a,d]);const Le=i.useMemo(()=>x.reduce((r,s)=>r+Number(s.sin_leer??0),0),[x]),ba=async r=>{se?await C.editarProducto(se.id,r):await C.crearProducto({...r,comercioId:a==null?void 0:a.id}),await ue()},fa=async()=>{if(_)try{await C.borrarProducto(_.id),await ue()}catch{u("No pudimos borrar el producto.")}finally{n(null)}};return e.jsxs(ya,{showSearch:!1,children:[e.jsx(va,{children:e.jsx(Sa,{children:e.jsxs(Ie,{children:[j?e.jsx(ye,{role:"alert","data-tono":"error",children:j}):null,a?e.jsx(q,{children:e.jsx(V,{children:e.jsxs(Ra,{children:[e.jsx(Ca,{$size:"3.5rem",$tone:"blue",children:e.jsx(Se,{size:24,"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx(Ba,{children:a.nombre}),e.jsxs(Ga,{children:[e.jsx(Pe,{children:a.rubro_nombre}),e.jsx(Pe,{children:a.direccion}),a.horario?e.jsx(Pe,{children:a.horario}):null]})]})]})})}):null,!o&&!a&&!j?e.jsx(Y,{icon:Se,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,a?e.jsx(Ua,{children:Cr.map(r=>e.jsxs(Ha,{type:"button","data-active":d===r.id,onClick:()=>F(r.id),children:[r.nombre,r.id==="chats"&&Le>0?e.jsx(Je,{children:Le}):null]},r.id))}):null,a&&d==="negocio"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Mi negocio",subtitle:"Los datos que ve el cliente y cuándo atendés."}),be?e.jsx(ye,{role:"status",children:be}):null,e.jsx(q,{children:e.jsx(V,{children:e.jsxs("form",{onSubmit:w,children:[e.jsxs(We,{children:["Datos del comercio",e.jsx(Se,{size:15,"aria-hidden":"true"})]}),e.jsxs(oe,{children:[e.jsx("span",{children:"Nombre"}),e.jsx("input",{name:"nombre",defaultValue:a.nombre,maxLength:80,required:!0})]}),e.jsxs(oe,{children:[e.jsx("span",{children:"Dirección"}),e.jsx("input",{name:"direccion",defaultValue:a.direccion,maxLength:160,required:!0})]}),e.jsxs(oe,{children:[e.jsx("span",{children:"Teléfono"}),e.jsx("input",{name:"telefono",defaultValue:a.telefono??"",maxLength:40})]}),e.jsxs(oe,{children:[e.jsx("span",{children:"Email de contacto"}),e.jsx("input",{name:"email",type:"email",defaultValue:a.email??"",maxLength:120})]}),e.jsxs(oe,{children:[e.jsx("span",{children:"Cómo se describe tu negocio"}),e.jsx("textarea",{name:"descripcion",defaultValue:a.descripcion??"",maxLength:300})]}),e.jsxs(oe,{children:[e.jsx("span",{children:"Pedido mínimo"}),e.jsx("input",{name:"minimo",type:"number",min:0,step:"0.01",defaultValue:a.minimo})]}),e.jsx(we,{type:"submit",disabled:P,children:P?"Guardando…":"Guardar mis datos"})]})})}),e.jsx(q,{children:e.jsxs(V,{children:[e.jsxs(We,{children:["Horarios de atención",e.jsx($a,{size:15,"aria-hidden":"true"})]}),e.jsx(ne,{children:"Si cerrás al mediodía, cargá dos tramos ese día. Sin horarios cargados, tu comercio figura siempre abierto."}),Er.map((r,s)=>{const m=X.filter(h=>h.dia===s);return e.jsxs(Qa,{children:[e.jsx("strong",{children:r}),m.length===0?e.jsx(ne,{children:"Cerrado"}):null,m.map(h=>e.jsxs(Xe,{children:[e.jsx("input",{type:"time",value:h.abre,"aria-label":`Abre el ${r}`,onChange:O=>Oe(h.id,"abre",O.target.value)}),e.jsx("span",{children:"a"}),e.jsx("input",{type:"time",value:h.cierra,"aria-label":`Cierra el ${r}`,onChange:O=>Oe(h.id,"cierra",O.target.value)}),e.jsx(Ke,{type:"button","data-tono":"danger",onClick:()=>xa(h.id),"aria-label":`Quitar tramo del ${r}`,children:"Quitar"})]},h.id)),e.jsx(Ke,{type:"button",onClick:()=>pa(s),children:"+ Agregar tramo"})]},r)}),e.jsx(we,{type:"button",onClick:()=>void U(),disabled:P,children:P?"Guardando…":"Guardar horarios"})]})})]}):null,a&&d==="productos"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Tus productos",chip:`${c.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),e.jsxs(Ye,{type:"button",onClick:()=>{le(null),ie(!0)},children:[e.jsx(_e,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),c.length===0&&!o?e.jsx(Y,{icon:qe,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,c.map(r=>e.jsx(q,{children:e.jsx(V,{children:e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsx(je,{children:r.nombre}),e.jsxs(ne,{children:[z(r.precio)," ",r.unidad_venta!=="unidad"?oa(r.unidad_venta):"c/u"," · desde ",ka(r.unidad_venta,0)]}),e.jsxs(Xe,{children:[e.jsx("span",{children:"Stock"}),e.jsx(Za,{type:"number",min:0,placeholder:"—",defaultValue:r.stock??"","aria-label":`Stock de ${r.nombre}`,onBlur:s=>void ja(r,s.target.value)}),e.jsx(Ja,{"data-estado":Pr(r.stock),children:wr(r.stock)})]})]}),e.jsxs(Ee,{children:[e.jsx(ge,{type:"button",onClick:()=>{le(r),ie(!0)},"aria-label":`Editar ${r.nombre}`,children:e.jsx(or,{size:15,"aria-hidden":"true"})}),e.jsx(ge,{type:"button","data-tono":"danger",onClick:()=>n(r),"aria-label":`Borrar ${r.nombre}`,children:e.jsx(de,{size:15,"aria-hidden":"true"})})]})]})})},r.id))]}):null,a&&d==="resumen"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Resumen",subtitle:"Cómo viene tu negocio."}),p?e.jsxs(e.Fragment,{children:[e.jsxs(ea,{children:[e.jsxs(H,{children:[e.jsx(Q,{children:"Pedidos hoy"}),e.jsx(Z,{children:p.hoy.pedidos}),(()=>{const r=ze(p.hoy.pedidos,p.ayer.pedidos);return e.jsxs(fe,{"data-tono":r.tono,children:[r.tono==="sube"?e.jsx(ke,{size:13,"aria-hidden":"true"}):r.tono==="baja"?e.jsx(Me,{size:13,"aria-hidden":"true"}):null,r.texto," vs ayer"]})})()]}),e.jsxs(H,{children:[e.jsx(Q,{children:"Ventas hoy"}),e.jsx(Z,{children:z(p.hoy.ventas)}),(()=>{const r=ze(p.hoy.ventas,p.ayer.ventas);return e.jsxs(fe,{"data-tono":r.tono,children:[r.tono==="sube"?e.jsx(ke,{size:13,"aria-hidden":"true"}):r.tono==="baja"?e.jsx(Me,{size:13,"aria-hidden":"true"}):null,r.texto," vs ayer"]})})()]}),e.jsxs(H,{children:[e.jsx(Q,{children:"Ventas de la semana"}),e.jsx(Z,{children:z(p.semana.ventas)}),(()=>{const r=ze(p.semana.ventas,p.semanaPrevia.ventas);return e.jsxs(fe,{"data-tono":r.tono,children:[r.tono==="sube"?e.jsx(ke,{size:13,"aria-hidden":"true"}):r.tono==="baja"?e.jsx(Me,{size:13,"aria-hidden":"true"}):null,r.texto," vs la anterior"]})})()]}),e.jsxs(H,{children:[e.jsx(Q,{children:"Ticket promedio"}),e.jsx(Z,{children:z(p.ticketPromedio)}),e.jsx(fe,{children:"últimos 7 días"})]})]}),e.jsx(q,{children:e.jsx(V,{children:e.jsxs(Ie,{children:[e.jsx(je,{children:"Lo que más se vendió"}),p.masVendidos.length===0?e.jsx(ne,{children:"Todavía no hay ventas esta semana."}):p.masVendidos.map(r=>e.jsxs(Wa,{children:[e.jsx("span",{children:r.nombre}),e.jsxs("small",{children:[r.unidades," unid."]}),e.jsx("strong",{children:z(r.total)})]},r.nombre))]})})}),e.jsxs(ea,{children:[e.jsxs(H,{children:[e.jsx(Q,{children:"En preparación"}),e.jsx(Z,{children:p.enProceso})]}),e.jsxs(H,{children:[e.jsx(Q,{children:"Productos activos"}),e.jsx(Z,{children:p.productos})]}),e.jsxs(H,{children:[e.jsx(Q,{children:"Ofertas vigentes"}),e.jsx(Z,{children:p.ofertas})]}),e.jsxs(H,{children:[e.jsx(Q,{children:"Pedidos de la semana"}),e.jsx(Z,{children:p.semana.pedidos})]})]})]}):o?null:e.jsx(Y,{icon:ir,title:"Sin datos todavía",text:"Cuando entren pedidos vas a ver acá cómo viene tu negocio.",dashed:!0})]}):null,a&&d==="ofertas"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Ofertas",chip:`${D.length}`,subtitle:"Promociones que ve el cliente en tu comercio."}),e.jsxs(Ye,{type:"button",onClick:()=>B(!0),children:[e.jsx(_e,{size:18,"aria-hidden":"true"}),"Crear nueva oferta"]}),D.length===0&&!o?e.jsx(Y,{icon:sr,title:"Sin ofertas",text:"Armá un descuento, un combo o una promo por cantidad.",dashed:!0}):null,D.map(r=>e.jsx(q,{children:e.jsx(V,{children:e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsxs(Xa,{children:[e.jsx("strong",{children:r.titulo}),r.porcentaje?e.jsxs(Ka,{children:["-",r.porcentaje,"%"]}):null,e.jsx(Ya,{"data-apagada":!r.activa,children:r.activa?kr[r.tipo]:"Apagada"})]}),e.jsxs(er,{children:[e.jsx("s",{children:z(r.precioLista)}),e.jsx("strong",{children:z(r.precioFinal)})]}),e.jsx(ar,{children:Mr(r)})]}),e.jsxs(Ee,{children:[e.jsx(ge,{type:"button",onClick:()=>void ga(r),"aria-label":r.activa?`Apagar ${r.titulo}`:`Encender ${r.titulo}`,children:r.activa?e.jsx(cr,{size:17,"aria-hidden":"true"}):e.jsx(dr,{size:17,"aria-hidden":"true"})}),e.jsx(ge,{type:"button","data-tono":"danger",onClick:()=>ce(r),"aria-label":`Borrar ${r.titulo}`,children:e.jsx(de,{size:15,"aria-hidden":"true"})})]})]})})},r.id))]}):null,a&&d==="pedidos"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Pedidos",chip:`${x.length}`,subtitle:"Lo que está entrando ahora."}),x.length===0?e.jsx(Y,{icon:qe,title:"Sin pedidos",text:"Cuando alguien te compre, aparece acá.",dashed:!0}):null,x.map(r=>{var s,m,h;return e.jsx(q,{children:e.jsxs(V,{children:[e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsxs(je,{children:[r.codigo," · ",r.cliente]}),e.jsxs(ne,{children:[z(r.total)," · ",r.items," ",r.items===1?"producto":"productos"," ·"," ",r.direccion_texto]})]}),e.jsxs(rr,{children:[e.jsx(nr,{"data-estado":r.preparacion,children:((s=Ne[r.preparacion])==null?void 0:s.nombre)??r.preparacion}),e.jsx(aa,{"data-estado":r.estado,children:Nr[r.estado]??r.estado})]})]}),r.estado==="proceso"&&((m=Ne[r.preparacion])!=null&&m.accion)?e.jsx(we,{type:"button",onClick:()=>void b(r),disabled:A===r.id,"data-final":r.preparacion==="preparando",children:A===r.id?"Guardando…":(h=Ne[r.preparacion])==null?void 0:h.accion}):null]})},r.id)})]}):null,a&&d==="chats"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Conversaciones",subtitle:"Consultas de tus clientes sobre cada pedido."}),x.length===0?e.jsx(Y,{icon:ra,title:"Sin conversaciones",text:"Se abre una por cada pedido que recibas.",dashed:!0}):null,x.map(r=>e.jsx(q,{children:e.jsx(V,{children:e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsx(je,{children:r.cliente}),e.jsxs(ne,{children:["Pedido ",r.codigo,r.cliente_telefono?` · ${r.cliente_telefono}`:""]})]}),e.jsxs(Ee,{children:[r.sin_leer>0?e.jsx(Je,{children:r.sin_leer}):null,e.jsx(ge,{type:"button",onClick:()=>R(r),"aria-label":`Abrir chat con ${r.cliente}`,children:e.jsx(ra,{size:15,"aria-hidden":"true"})})]})]})})},r.id))]}):null,a&&d==="envios"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Envíos en curso",chip:`${T.length}`,subtitle:"Dónde va cada pedido que salió."}),T.length===0?e.jsx(Y,{icon:Pa,title:"Nada en camino",text:"Cuando un repartidor tome un pedido lo vas a ver acá.",dashed:!0}):e.jsx(tr,{children:e.jsx(lr,{envios:T})}),T.map(r=>e.jsx(q,{children:e.jsx(V,{children:e.jsxs(pe,{children:[e.jsxs(xe,{children:[e.jsx(je,{children:r.repartidor??"Buscando repartidor"}),e.jsxs(ne,{children:["Pedido ",r.codigo," · ",r.direccion_texto,r.ubicacion_en?` · ${Fr(r.ubicacion_en)}`:" · sin ubicación todavía"]})]}),e.jsx(aa,{"data-estado":r.estado,children:Ar[r.estado]??r.estado})]})})},r.id))]}):null]})})}),e.jsx(vr,{open:S,productos:c,onClose:()=>B(!1),onGuardar:g}),e.jsx(Re,{open:I!==null,title:"Borrar la oferta",text:`"${(I==null?void 0:I.titulo)??""}" deja de estar disponible para los clientes.`,confirmLabel:"Borrar",onCancel:()=>ce(null),onConfirm:async()=>{I&&(await C.borrarOferta(I.id),l(r=>r.filter(s=>s.id!==I.id)),ce(null))}}),e.jsx(Ma,{rol:"comercio",open:v!==null,pedidoId:(v==null?void 0:v.id)??null,codigo:(v==null?void 0:v.codigo)??"",cliente:(v==null?void 0:v.cliente)??"",onClose:()=>R(null)}),e.jsx(Sr,{open:G,producto:se,onClose:()=>ie(!1),onGuardar:ba}),e.jsx(Re,{open:_!==null,title:"¿Borrar este producto?",text:`"${(_==null?void 0:_.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>n(null),onConfirm:()=>void fa()})]})}export{an as MiComercioScreen};
