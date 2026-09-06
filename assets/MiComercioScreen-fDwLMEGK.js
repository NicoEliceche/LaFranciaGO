import{c as ye,q as c,aG as O,j as r,C as pe,a as he,X as D,aH as Y,aC as K,aI as T,M as $e,b as ve,S as Se,a2 as Ce,d as M,e as F,J as we,aa as ee,E as _,l as L,G as Ee,W as re,D as ae,aj as ke}from"./index-B4Hw2TNB.js";import{r as t}from"./react-D_B_6qYb.js";import{S as Pe,b as ze,p as ge,s as Me}from"./saleUnits-CLP-TCsg.js";import{A as X,a as Fe}from"./AuthScreenStyled-Bd7FM_95.js";import{P as xe,a as fe,b as je,c as be}from"./PanelLoginDialogStyled-C-rII4RQ.js";import{S as _e}from"./send-CVSxBJsk.js";import{C as Ae}from"./ConfirmDialog-B-9N2MS8.js";import{L as A,M as Ie,a as De}from"./AddressMapStyled-BhLbboCX.js";import{M as C,I as Ne,f as oe,V as Te}from"./mediaService-D2_VAu2k.js";import{u as Le}from"./useMediaUpload-CTMFYLii.js";import{F as Re,a as I,b as w,e as Z,c as Be,d as Q,j as Ve}from"./formStyles-DcihF45G.js";import{M as te,a as ne,b as qe,c as ie,d as Oe,e as se,f as le,I as Ge,g as He,V as Ue,F as Ze}from"./ProductFormScreenStyled-BD968E9B.js";import{M as ce}from"./message-square-WujApOrC.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=ye("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),We=c.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  /* Alto fijo para que la caja de escritura no se mueva al llegar mensajes. */
  height: 18rem;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Je=c.p`
  margin: auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-align: center;
`,Xe=c.div`
  display: flex;

  &[data-propio='true'] {
    justify-content: flex-end;
  }
`,Ye=c.span`
  position: relative;
  max-width: 78%;
  padding: ${({theme:e})=>e.spacing[2]};
  padding-bottom: 1.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
  /* Un mensaje largo sin espacios no debe estirar la burbuja. */
  overflow-wrap: anywhere;

  &[data-propio='true'] {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,Ke=c.span`
  position: absolute;
  right: ${({theme:e})=>e.spacing[2]};
  bottom: 0.3rem;
  font-size: 0.625rem;
  opacity: 0.7;
`,er=c.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  > input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.75rem;
    padding: 0 ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.full};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.text};
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    font-size: ${({theme:e})=>e.typography.size.sm};

    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.color.primary};
    }
  }
`,rr=c.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,ar=6e3;function or({open:e,pedidoId:o,codigo:p,cliente:j,onClose:d}){const[u,f]=t.useState([]),[s,l]=t.useState(""),[b,m]=t.useState(null),[g,y]=t.useState(!1),S=t.useRef(null),h=t.useCallback(async()=>{if(o)try{const n=await O.mensajes(o);f(n.mensajes),l(n.yo),m(null)}catch{m("No pudimos cargar la conversación.")}},[o]);if(t.useEffect(()=>{if(!e||!o)return;h();const n=window.setInterval(()=>void h(),ar);return()=>window.clearInterval(n)},[h,e,o]),t.useEffect(()=>{const n=S.current;n&&(n.scrollTop=n.scrollHeight)},[u]),t.useEffect(()=>{if(!e)return;const n=$=>{$.key==="Escape"&&d()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[d,e]),!e||!o)return null;const E=async n=>{n.preventDefault();const $=n.currentTarget,i=String(new FormData($).get("texto")??"").trim();if(!(!i||g)){y(!0);try{await O.enviarMensaje(o,i),$.reset(),await h()}catch{m("No pudimos enviar el mensaje.")}finally{y(!1)}}},P=n=>new Date(n.replace(" ","T")+"Z").toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});return r.jsx(xe,{onClick:d,role:"presentation",children:r.jsxs(fe,{role:"dialog","aria-modal":"true","aria-label":`Chat del pedido ${p}`,onClick:n=>n.stopPropagation(),children:[r.jsxs(je,{children:[r.jsxs("div",{children:[r.jsx(pe,{children:j}),r.jsxs(he,{children:["Pedido ",p]})]}),r.jsx(be,{type:"button",onClick:d,"aria-label":"Cerrar",children:r.jsx(D,{size:18,"aria-hidden":"true"})})]}),b?r.jsx(X,{role:"alert","data-tono":"error",children:b}):null,r.jsxs(We,{ref:S,children:[u.length===0?r.jsx(Je,{children:"Todavía no hay mensajes. Escribile al cliente."}):null,u.map(n=>r.jsx(Xe,{"data-propio":n.autor_id===s,children:r.jsxs(Ye,{"data-propio":n.autor_id===s,children:[n.texto,r.jsx(Ke,{children:P(n.creado_en)})]})},n.id))]}),r.jsx("form",{onSubmit:E,children:r.jsxs(er,{children:[r.jsx("input",{name:"texto",placeholder:"Escribí un mensaje",autoComplete:"off"}),r.jsx(rr,{type:"submit",disabled:g,"aria-label":"Enviar",children:r.jsx(_e,{size:16,"aria-hidden":"true"})})]})})]})})}function tr({envios:e}){const o=t.useRef(null),p=t.useRef(null),j=t.useRef(new Map);return t.useEffect(()=>{const d=o.current;if(!d||p.current)return;const u=A.map(d,{center:[Y.lat,Y.lon],zoom:14,zoomControl:!0});A.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(u),p.current=u;const f=window.requestAnimationFrame(()=>u.invalidateSize());return()=>{window.cancelAnimationFrame(f),u.remove(),p.current=null,j.current.clear()}},[]),t.useEffect(()=>{const d=p.current;if(!d)return;const u=e.filter(s=>typeof s.lat=="number"&&typeof s.lon=="number"),f=new Set;if(u.forEach(s=>{f.add(s.id);const l=[s.lat,s.lon],b=j.current.get(s.id);if(b){b.setLatLng(l);return}const m=A.divIcon({className:"lfg-repartidor",html:'<span class="lfg-repartidor__punto"></span>',iconSize:[22,22],iconAnchor:[11,11]}),g=A.marker(l,{icon:m}).addTo(d);g.bindPopup(`<strong>${s.repartidor??"Repartidor"}</strong><br>Pedido ${s.codigo}`),j.current.set(s.id,g)}),j.current.forEach((s,l)=>{f.has(l)||(s.remove(),j.current.delete(l))}),u.length>0){const s=A.latLngBounds(u.map(l=>[l.lat,l.lon]));d.fitBounds(s,{padding:[40,40],maxZoom:16})}},[e]),r.jsx(Ie,{children:r.jsx(De,{ref:o})})}function nr({open:e,producto:o,onClose:p,onGuardar:j}){const[d,u]=t.useState("unidad"),[f,s]=t.useState(null),[l,b]=t.useState(!1),{photos:m,video:g,error:y,processing:S,addPhotos:h,addVideo:E,removePhoto:P,removeVideo:n}=Le();if(t.useEffect(()=>{e&&(u((o==null?void 0:o.unidad_venta)??"unidad"),s(null))},[e,o]),t.useEffect(()=>{if(!e)return;const i=x=>{x.key==="Escape"&&p()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[p,e]),!e)return null;const $=async i=>{if(i.preventDefault(),l)return;const x=new FormData(i.currentTarget),k=Number(x.get("precio")??0);if(k<=0){s("Poné un precio válido.");return}s(null),b(!0);try{const v=await Promise.all(m.map(async(N,G)=>{const{url:a}=await K.subir(N.blob,`producto-${G}.webp`);return a}));let z=(o==null?void 0:o.video_url)??null;g!=null&&g.blob&&(z=(await K.subir(g.blob,"producto.mp4")).url),await j({nombre:String(x.get("nombre")??"").trim(),descripcion:String(x.get("descripcion")??"").trim(),precio:k,unidadVenta:d,stock:x.get("stock")?Number(x.get("stock")):null,fotos:[...(o==null?void 0:o.fotos)??[],...v],videoUrl:z}),p()}catch(v){s(v instanceof Error?v.message:"No pudimos guardar el producto.")}finally{b(!1)}};return r.jsx(xe,{onClick:p,role:"presentation",children:r.jsxs(fe,{role:"dialog","aria-modal":"true","aria-label":o?"Editar producto":"Nuevo producto",onClick:i=>i.stopPropagation(),children:[r.jsxs(je,{children:[r.jsxs("div",{children:[r.jsx(pe,{children:o?"Editar producto":"Nuevo producto"}),r.jsx(he,{children:"Lo que carguen acá es lo que ve el cliente."})]}),r.jsx(be,{type:"button",onClick:p,"aria-label":"Cerrar",children:r.jsx(D,{size:18,"aria-hidden":"true"})})]}),r.jsx("form",{onSubmit:$,children:r.jsxs(Re,{children:[r.jsxs(I,{htmlFor:"prod-nombre",children:[r.jsx(w,{children:"Nombre"}),r.jsx(Z,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(o==null?void 0:o.nombre)??"",placeholder:"Pan flauta",required:!0})]}),r.jsxs(I,{htmlFor:"prod-unidad",children:[r.jsx(w,{children:"Cómo se vende"}),r.jsx(Be,{id:"prod-unidad",value:d,onChange:i=>u(i.target.value),children:Pe.map(i=>r.jsx("option",{value:i.id,children:i.label},i.id))}),r.jsx(Q,{children:ze[d].help})]}),r.jsxs(I,{htmlFor:"prod-precio",children:[r.jsxs(w,{children:["Precio (",ge(d),")"]}),r.jsx(Z,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(o==null?void 0:o.precio)??"",placeholder:"0",required:!0})]}),r.jsxs(I,{htmlFor:"prod-stock",children:[r.jsx(w,{children:"Stock"}),r.jsx(Z,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(o==null?void 0:o.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),r.jsxs(I,{htmlFor:"prod-descripcion",children:[r.jsx(w,{children:"Descripción"}),r.jsx(Ve,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(o==null?void 0:o.descripcion)??"",placeholder:"Qué tiene de especial"})]}),r.jsxs(te,{children:[r.jsx(w,{as:"span",children:"Fotos"}),r.jsxs(ne,{children:[m.length,"/",C.maxImages]})]}),r.jsxs(qe,{children:[m.map(i=>r.jsxs(ie,{children:[r.jsx(Oe,{src:i.previewUrl,alt:""}),r.jsx(se,{type:"button",onClick:()=>P(i.id),"aria-label":"Quitar foto",children:r.jsx(D,{size:14,"aria-hidden":"true"})})]},i.id)),m.length<C.maxImages?r.jsxs(le,{as:"label","data-busy":S,children:[r.jsx(Ge,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:S?"Optimizando…":"Agregar"}),r.jsx("input",{type:"file",accept:Ne,multiple:!0,hidden:!0,onChange:i=>{h(i.target.files),i.target.value=""}})]}):null]}),r.jsxs(Q,{children:["Se achican a ",C.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",oe(C.maxImageBytes),"."]}),r.jsxs(te,{children:[r.jsx(w,{as:"span",children:"Video"}),r.jsxs(ne,{children:[g?1:0,"/",C.maxVideos]})]}),g?r.jsxs(ie,{"data-video":"true",children:[r.jsx(He,{src:g.url,controls:!0,preload:"metadata"}),r.jsx(se,{type:"button",onClick:n,"aria-label":"Quitar video",children:r.jsx(D,{size:14,"aria-hidden":"true"})})]}):r.jsxs(le,{as:"label","data-wide":"true",children:[r.jsx(Ue,{size:20,"aria-hidden":"true"}),r.jsx("span",{children:"Agregar video"}),r.jsx("input",{type:"file",accept:Te,hidden:!0,onChange:i=>{E(i.target.files),i.target.value=""}})]}),r.jsxs(Q,{children:["Hasta ",C.maxVideoSeconds," segundos y"," ",oe(C.maxVideoBytes),"."]}),y?r.jsx(Ze,{children:y}):null,f?r.jsx(X,{role:"alert","data-tono":"error",children:f}):null,r.jsx(Fe,{type:"submit",disabled:l,children:l?"Guardando…":o?"Guardar cambios":"Crear producto"})]})})]})})}const ir=c.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-width: 0;
`,sr=c.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  letter-spacing: -0.02em;
`,lr=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:e})=>e.spacing[2]};
  margin-top: 0.15rem;
`,W=c.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:e})=>e.spacing[2]};
  }
`,cr=c.button`
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
`,R=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,B=c.div`
  min-width: 0;
`,V=c.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,q=c.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,de=c.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:e})=>e.spacing[1]};
`,J=c.button`
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
`,dr=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,ur=c.button`
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
`,ue=c.span`
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
`,me=c.span`
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
`,mr=c.div`
  height: 18rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 24rem;
  }
`,pr=[{id:"productos",nombre:"Productos"},{id:"pedidos",nombre:"Pedidos"},{id:"chats",nombre:"Chats"},{id:"envios",nombre:"Envíos"}],hr=12e3,gr={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"},xr={buscando:"Buscando repartidor",asignado:"Asignado",retirado:"Retirado",en_camino:"En camino",entregado:"Entregado"},fr=e=>{const o=Math.round((Date.now()-new Date(e.replace(" ","T")+"Z").getTime())/6e4);return o<1?"ahora mismo":o<60?`hace ${o} min`:`hace ${Math.round(o/60)} h`};function Fr(){const[e,o]=t.useState(null),[p,j]=t.useState([]),[d,u]=t.useState(!0),[f,s]=t.useState(null),[l,b]=t.useState("productos"),[m,g]=t.useState([]),[y,S]=t.useState([]),[h,E]=t.useState(null),[P,n]=t.useState(!1),[$,i]=t.useState(null),[x,k]=t.useState(null),v=t.useCallback(async()=>{u(!0);try{const a=await T.ver();o(a.comercio),j(a.productos),s(null)}catch{s("No pudimos cargar tu comercio.")}finally{u(!1)}},[]);t.useEffect(()=>{v()},[v]),t.useEffect(()=>{if(!e||l==="productos")return;const a=async()=>{try{if(l==="pedidos"||l==="chats"){const{pedidos:U}=await O.pedidos();g(U)}if(l==="envios"){const{envios:U}=await O.envios();S(U)}}catch{}};a();const H=window.setInterval(a,hr);return()=>window.clearInterval(H)},[e,l]);const z=t.useMemo(()=>m.reduce((a,H)=>a+Number(H.sin_leer??0),0),[m]),N=async a=>{$?await T.editarProducto($.id,a):await T.crearProducto({...a,comercioId:e==null?void 0:e.id}),await v()},G=async()=>{if(x)try{await T.borrarProducto(x.id),await v()}catch{s("No pudimos borrar el producto.")}finally{k(null)}};return r.jsxs($e,{showSearch:!1,children:[r.jsx(ve,{children:r.jsx(Se,{children:r.jsxs(Ce,{children:[f?r.jsx(X,{role:"alert","data-tono":"error",children:f}):null,e?r.jsx(M,{children:r.jsx(F,{children:r.jsxs(ir,{children:[r.jsx(we,{$size:"3.5rem",$tone:"blue",children:r.jsx(ee,{size:24,"aria-hidden":"true"})}),r.jsxs("div",{children:[r.jsx(sr,{children:e.nombre}),r.jsxs(lr,{children:[r.jsx(W,{children:e.rubro_nombre}),r.jsx(W,{children:e.direccion}),e.horario?r.jsx(W,{children:e.horario}):null]})]})]})})}):null,!d&&!e&&!f?r.jsx(_,{icon:ee,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,e?r.jsx(dr,{children:pr.map(a=>r.jsxs(ur,{type:"button","data-active":l===a.id,onClick:()=>b(a.id),children:[a.nombre,a.id==="chats"&&z>0?r.jsx(ue,{children:z}):null]},a.id))}):null,e&&l==="productos"?r.jsxs(r.Fragment,{children:[r.jsx(L,{title:"Tus productos",chip:`${p.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),r.jsxs(cr,{type:"button",onClick:()=>{i(null),n(!0)},children:[r.jsx(Ee,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),p.length===0&&!d?r.jsx(_,{icon:re,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,p.map(a=>r.jsx(M,{children:r.jsx(F,{children:r.jsxs(R,{children:[r.jsxs(B,{children:[r.jsx(V,{children:a.nombre}),r.jsxs(q,{children:[ae(a.precio)," ",a.unidad_venta!=="unidad"?ge(a.unidad_venta):"c/u"," · desde ",Me(a.unidad_venta,0)]})]}),r.jsxs(de,{children:[r.jsx(J,{type:"button",onClick:()=>{i(a),n(!0)},"aria-label":`Editar ${a.nombre}`,children:r.jsx(Qe,{size:15,"aria-hidden":"true"})}),r.jsx(J,{type:"button","data-tono":"danger",onClick:()=>k(a),"aria-label":`Borrar ${a.nombre}`,children:r.jsx(D,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&l==="pedidos"?r.jsxs(r.Fragment,{children:[r.jsx(L,{title:"Pedidos",chip:`${m.length}`,subtitle:"Lo que está entrando ahora."}),m.length===0?r.jsx(_,{icon:re,title:"Sin pedidos",text:"Cuando alguien te compre, aparece acá.",dashed:!0}):null,m.map(a=>r.jsx(M,{children:r.jsx(F,{children:r.jsxs(R,{children:[r.jsxs(B,{children:[r.jsxs(V,{children:[a.codigo," · ",a.cliente]}),r.jsxs(q,{children:[ae(a.total)," · ",a.items," ",a.items===1?"producto":"productos"," ·"," ",a.direccion_texto]})]}),r.jsx(me,{"data-estado":a.estado,children:gr[a.estado]??a.estado})]})})},a.id))]}):null,e&&l==="chats"?r.jsxs(r.Fragment,{children:[r.jsx(L,{title:"Conversaciones",subtitle:"Consultas de tus clientes sobre cada pedido."}),m.length===0?r.jsx(_,{icon:ce,title:"Sin conversaciones",text:"Se abre una por cada pedido que recibas.",dashed:!0}):null,m.map(a=>r.jsx(M,{children:r.jsx(F,{children:r.jsxs(R,{children:[r.jsxs(B,{children:[r.jsx(V,{children:a.cliente}),r.jsxs(q,{children:["Pedido ",a.codigo,a.cliente_telefono?` · ${a.cliente_telefono}`:""]})]}),r.jsxs(de,{children:[a.sin_leer>0?r.jsx(ue,{children:a.sin_leer}):null,r.jsx(J,{type:"button",onClick:()=>E(a),"aria-label":`Abrir chat con ${a.cliente}`,children:r.jsx(ce,{size:15,"aria-hidden":"true"})})]})]})})},a.id))]}):null,e&&l==="envios"?r.jsxs(r.Fragment,{children:[r.jsx(L,{title:"Envíos en curso",chip:`${y.length}`,subtitle:"Dónde va cada pedido que salió."}),y.length===0?r.jsx(_,{icon:ke,title:"Nada en camino",text:"Cuando un repartidor tome un pedido lo vas a ver acá.",dashed:!0}):r.jsx(mr,{children:r.jsx(tr,{envios:y})}),y.map(a=>r.jsx(M,{children:r.jsx(F,{children:r.jsxs(R,{children:[r.jsxs(B,{children:[r.jsx(V,{children:a.repartidor??"Buscando repartidor"}),r.jsxs(q,{children:["Pedido ",a.codigo," · ",a.direccion_texto,a.ubicacion_en?` · ${fr(a.ubicacion_en)}`:" · sin ubicación todavía"]})]}),r.jsx(me,{"data-estado":a.estado,children:xr[a.estado]??a.estado})]})})},a.id))]}):null]})})}),r.jsx(or,{open:h!==null,pedidoId:(h==null?void 0:h.id)??null,codigo:(h==null?void 0:h.codigo)??"",cliente:(h==null?void 0:h.cliente)??"",onClose:()=>E(null)}),r.jsx(nr,{open:P,producto:$,onClose:()=>n(!1),onGuardar:N}),r.jsx(Ae,{open:x!==null,title:"¿Borrar este producto?",text:`"${(x==null?void 0:x.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>k(null),onConfirm:()=>void G()})]})}export{Fr as MiComercioScreen};
