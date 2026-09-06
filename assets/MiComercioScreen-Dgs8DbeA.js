import{c as R,j as e,C as J,a as W,X as $,q as t,aD as C,M as X,b as Z,S as K,a2 as Y,d as A,e as D,J as ee,aa as V,E as N,l as re,G as ae,W as ie,D as se}from"./index-BzCkDV42.js";import{r as o}from"./react-D_B_6qYb.js";import{S as oe,b as te,p as H,s as ne}from"./saleUnits-CLP-TCsg.js";import{C as le}from"./ConfirmDialog-pno2LIs_.js";import{M as h,I as de,f as T,V as ce}from"./mediaService-D2_VAu2k.js";import{u as ue}from"./useMediaUpload-D7LBZAyT.js";import{F as me,a as S,b as p,e as w,c as he,d as z,j as pe}from"./formStyles-BkTdEK78.js";import{A as O,a as xe}from"./AuthScreenStyled-D2s3yoVC.js";import{M as _,a as q,b as ge,c as L,d as je,e as B,f as G,I as fe,g as be,V as ye,F as ve}from"./ProductFormScreenStyled-Cizy3BHm.js";import{P as Se,a as Ce,b as $e,c as Pe}from"./PanelLoginDialogStyled-D--fchwA.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=R("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);function Ee({open:r,producto:a,onClose:n,onGuardar:P}){const[c,y]=o.useState("unidad"),[x,d]=o.useState(null),[v,g]=o.useState(!1),{photos:u,video:j,error:l,processing:f,addPhotos:b,addVideo:k,removePhoto:E,removeVideo:s}=ue();if(o.useEffect(()=>{r&&(y((a==null?void 0:a.unidad_venta)??"unidad"),d(null))},[r,a]),o.useEffect(()=>{if(!r)return;const i=m=>{m.key==="Escape"&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[n,r]),!r)return null;const Q=async i=>{if(i.preventDefault(),v)return;const m=new FormData(i.currentTarget),I=Number(m.get("precio")??0);if(I<=0){d("Poné un precio válido.");return}d(null),g(!0);try{await P({nombre:String(m.get("nombre")??"").trim(),descripcion:String(m.get("descripcion")??"").trim(),precio:I,unidadVenta:c,stock:m.get("stock")?Number(m.get("stock")):null,fotos:(a==null?void 0:a.fotos)??[],videoUrl:(a==null?void 0:a.video_url)??null}),n()}catch(M){d(M instanceof Error?M.message:"No pudimos guardar el producto.")}finally{g(!1)}};return e.jsx(Se,{onClick:n,role:"presentation",children:e.jsxs(Ce,{role:"dialog","aria-modal":"true","aria-label":a?"Editar producto":"Nuevo producto",onClick:i=>i.stopPropagation(),children:[e.jsxs($e,{children:[e.jsxs("div",{children:[e.jsx(J,{children:a?"Editar producto":"Nuevo producto"}),e.jsx(W,{children:"Lo que carguen acá es lo que ve el cliente."})]}),e.jsx(Pe,{type:"button",onClick:n,"aria-label":"Cerrar",children:e.jsx($,{size:18,"aria-hidden":"true"})})]}),e.jsx("form",{onSubmit:Q,children:e.jsxs(me,{children:[e.jsxs(S,{htmlFor:"prod-nombre",children:[e.jsx(p,{children:"Nombre"}),e.jsx(w,{id:"prod-nombre",name:"nombre",type:"text",defaultValue:(a==null?void 0:a.nombre)??"",placeholder:"Pan flauta",required:!0})]}),e.jsxs(S,{htmlFor:"prod-unidad",children:[e.jsx(p,{children:"Cómo se vende"}),e.jsx(he,{id:"prod-unidad",value:c,onChange:i=>y(i.target.value),children:oe.map(i=>e.jsx("option",{value:i.id,children:i.label},i.id))}),e.jsx(z,{children:te[c].help})]}),e.jsxs(S,{htmlFor:"prod-precio",children:[e.jsxs(p,{children:["Precio (",H(c),")"]}),e.jsx(w,{id:"prod-precio",name:"precio",type:"number",inputMode:"decimal",min:"0",step:"1",defaultValue:(a==null?void 0:a.precio)??"",placeholder:"0",required:!0})]}),e.jsxs(S,{htmlFor:"prod-stock",children:[e.jsx(p,{children:"Stock"}),e.jsx(w,{id:"prod-stock",name:"stock",type:"number",min:"0",defaultValue:(a==null?void 0:a.stock)??"",placeholder:"Dejalo vacío si no llevás control"})]}),e.jsxs(S,{htmlFor:"prod-descripcion",children:[e.jsx(p,{children:"Descripción"}),e.jsx(pe,{id:"prod-descripcion",name:"descripcion",rows:2,defaultValue:(a==null?void 0:a.descripcion)??"",placeholder:"Qué tiene de especial"})]}),e.jsxs(_,{children:[e.jsx(p,{as:"span",children:"Fotos"}),e.jsxs(q,{children:[u.length,"/",h.maxImages]})]}),e.jsxs(ge,{children:[u.map(i=>e.jsxs(L,{children:[e.jsx(je,{src:i.previewUrl,alt:""}),e.jsx(B,{type:"button",onClick:()=>E(i.id),"aria-label":"Quitar foto",children:e.jsx($,{size:14,"aria-hidden":"true"})})]},i.id)),u.length<h.maxImages?e.jsxs(G,{as:"label","data-busy":f,children:[e.jsx(fe,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:f?"Optimizando…":"Agregar"}),e.jsx("input",{type:"file",accept:de,multiple:!0,hidden:!0,onChange:i=>{b(i.target.files),i.target.value=""}})]}):null]}),e.jsxs(z,{children:["Se achican a ",h.maxImageDimension,"px y se comprimen solas: cada una queda en menos de ",T(h.maxImageBytes),"."]}),e.jsxs(_,{children:[e.jsx(p,{as:"span",children:"Video"}),e.jsxs(q,{children:[j?1:0,"/",h.maxVideos]})]}),j?e.jsxs(L,{"data-video":"true",children:[e.jsx(be,{src:j.url,controls:!0,preload:"metadata"}),e.jsx(B,{type:"button",onClick:s,"aria-label":"Quitar video",children:e.jsx($,{size:14,"aria-hidden":"true"})})]}):e.jsxs(G,{as:"label","data-wide":"true",children:[e.jsx(ye,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:"Agregar video"}),e.jsx("input",{type:"file",accept:ce,hidden:!0,onChange:i=>{k(i.target.files),i.target.value=""}})]}),e.jsxs(z,{children:["Hasta ",h.maxVideoSeconds," segundos y"," ",T(h.maxVideoBytes),"."]}),l?e.jsx(ve,{children:l}):null,x?e.jsx(O,{role:"alert","data-tono":"error",children:x}):null,e.jsx(xe,{type:"submit",disabled:v,children:v?"Guardando…":a?"Guardar cambios":"Crear producto"})]})})]})})}const we=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[3]};
  min-width: 0;
`,ze=t.strong`
  display: block;
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.lg};
  letter-spacing: -0.02em;
`,Fe=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:r})=>r.spacing[2]};
  margin-top: 0.15rem;
`,F=t.span`
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:r})=>r.spacing[2]};
  }
`,Ie=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:r})=>r.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px dashed ${({theme:r})=>r.color.borderStrong};
  background: transparent;
  color: ${({theme:r})=>r.color.primary};
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:r})=>r.color.primary};
    background: ${({theme:r})=>r.color.primarySoft};
  }
`,Me=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:r})=>r.spacing[2]};
`,Ae=t.div`
  min-width: 0;
`,De=t.strong`
  display: block;
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.sm};
`,Ve=t.span`
  display: block;
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};
`,Ne=t.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:r})=>r.spacing[1]};
`,U=t.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:r})=>r.radius.full};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.textMuted};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;

  &:hover {
    color: ${({theme:r})=>r.color.primary};
    border-color: ${({theme:r})=>r.color.primary};
  }

  /* Borrar se distingue en rojo sólo al pasar por encima: en reposo compite
     menos con editar, que es la acción habitual. */
  &[data-tono='danger']:hover {
    color: ${({theme:r})=>r.color.danger};
    border-color: ${({theme:r})=>r.color.danger};
  }
`;function Re(){const[r,a]=o.useState(null),[n,P]=o.useState([]),[c,y]=o.useState(!0),[x,d]=o.useState(null),[v,g]=o.useState(!1),[u,j]=o.useState(null),[l,f]=o.useState(null),b=o.useCallback(async()=>{y(!0);try{const s=await C.ver();a(s.comercio),P(s.productos),d(null)}catch{d("No pudimos cargar tu comercio.")}finally{y(!1)}},[]);o.useEffect(()=>{b()},[b]);const k=async s=>{u?await C.editarProducto(u.id,s):await C.crearProducto({...s,comercioId:r==null?void 0:r.id}),await b()},E=async()=>{if(l)try{await C.borrarProducto(l.id),await b()}catch{d("No pudimos borrar el producto.")}finally{f(null)}};return e.jsxs(X,{showSearch:!1,children:[e.jsx(Z,{children:e.jsx(K,{children:e.jsxs(Y,{children:[x?e.jsx(O,{role:"alert","data-tono":"error",children:x}):null,r?e.jsx(A,{children:e.jsx(D,{children:e.jsxs(we,{children:[e.jsx(ee,{$size:"3.5rem",$tone:"blue",children:e.jsx(V,{size:24,"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx(ze,{children:r.nombre}),e.jsxs(Fe,{children:[e.jsx(F,{children:r.rubro_nombre}),e.jsx(F,{children:r.direccion}),r.horario?e.jsx(F,{children:r.horario}):null]})]})]})})}):null,!c&&!r&&!x?e.jsx(N,{icon:V,title:"Todavía no tenés comercio",text:"Cuando aprobemos tu alta vas a poder cargar productos.",dashed:!0}):null,r?e.jsxs(e.Fragment,{children:[e.jsx(re,{title:"Tus productos",chip:`${n.length}`,subtitle:"Lo que ve el cliente en tu catálogo."}),e.jsxs(Ie,{type:"button",onClick:()=>{j(null),g(!0)},children:[e.jsx(ae,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),n.length===0&&!c?e.jsx(N,{icon:ie,title:"Sin productos",text:"Cargá el primero para que tu comercio aparezca completo.",dashed:!0}):null,n.map(s=>e.jsx(A,{children:e.jsx(D,{children:e.jsxs(Me,{children:[e.jsxs(Ae,{children:[e.jsx(De,{children:s.nombre}),e.jsxs(Ve,{children:[se(s.precio)," ",s.unidad_venta!=="unidad"?H(s.unidad_venta):"c/u"," · desde ",ne(s.unidad_venta,0)]})]}),e.jsxs(Ne,{children:[e.jsx(U,{type:"button",onClick:()=>{j(s),g(!0)},"aria-label":`Editar ${s.nombre}`,children:e.jsx(ke,{size:15,"aria-hidden":"true"})}),e.jsx(U,{type:"button","data-tono":"danger",onClick:()=>f(s),"aria-label":`Borrar ${s.nombre}`,children:e.jsx($,{size:15,"aria-hidden":"true"})})]})]})})},s.id))]}):null]})})}),e.jsx(Ee,{open:v,producto:u,onClose:()=>g(!1),onGuardar:k}),e.jsx(le,{open:l!==null,title:"¿Borrar este producto?",text:`"${(l==null?void 0:l.nombre)??""}" deja de aparecer en tu catálogo.`,onCancel:()=>f(null),onConfirm:()=>void E()})]})}export{Re as MiComercioScreen};
