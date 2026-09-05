import{a8 as G,q as o,j as a,M as ae,J as re,a as oe,d as ie,X as B,w as te,C as se}from"./index-DIvec79A.js";import{r as n}from"./react-B1kPYQQd.js";import{M as d,I as ne,f as C,V as de,v as ce,p as le,a as me}from"./mediaService-D2_VAu2k.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=G("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=G("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),ge=[{id:"almacen",name:"Almacén",description:"Básicos, bebidas y limpieza.",suggestedCategories:[{id:"bebidas",name:"Bebidas"},{id:"almacen",name:"Almacén"},{id:"limpieza",name:"Limpieza"},{id:"lacteos",name:"Lácteos"},{id:"snacks",name:"Snacks"},{id:"congelados",name:"Congelados"}]},{id:"kiosco",name:"Kiosco",description:"Golosinas, bebidas y cigarrillos.",suggestedCategories:[{id:"golosinas",name:"Golosinas"},{id:"bebidas",name:"Bebidas"},{id:"snacks",name:"Snacks"},{id:"cigarrillos",name:"Cigarrillos"},{id:"helados",name:"Helados"}]},{id:"panaderia",name:"Panadería",description:"Pan, facturas y repostería.",suggestedCategories:[{id:"pan",name:"Pan"},{id:"facturas",name:"Facturas"},{id:"tortas",name:"Tortas"},{id:"sandwicheria",name:"Sándwiches"},{id:"reposteria",name:"Repostería"}]},{id:"carniceria",name:"Carnicería",description:"Cortes, achuras y elaborados.",suggestedCategories:[{id:"vacuno",name:"Vacuno"},{id:"cerdo",name:"Cerdo"},{id:"pollo",name:"Pollo"},{id:"achuras",name:"Achuras"},{id:"embutidos",name:"Embutidos"},{id:"carbon",name:"Carbón y leña"}]},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y huevos.",suggestedCategories:[{id:"frutas",name:"Frutas"},{id:"verduras",name:"Verduras"},{id:"huevos",name:"Huevos"},{id:"aromaticas",name:"Aromáticas"},{id:"combos",name:"Combos"}]},{id:"rotiseria",name:"Rotisería",description:"Comidas listas y viandas.",suggestedCategories:[{id:"milanesas",name:"Milanesas"},{id:"empanadas",name:"Empanadas"},{id:"pastas",name:"Pastas"},{id:"guarniciones",name:"Guarniciones"},{id:"postres",name:"Postres"}]},{id:"comida",name:"Comida / Restaurante",description:"Platos, pizzas y hamburguesas.",suggestedCategories:[{id:"hamburguesas",name:"Hamburguesas"},{id:"pizzas",name:"Pizzas"},{id:"minutas",name:"Minutas"},{id:"bebidas",name:"Bebidas"},{id:"postres",name:"Postres"}]},{id:"farmacia",name:"Farmacia",description:"Salud, higiene y perfumería.",suggestedCategories:[{id:"medicamentos",name:"Medicamentos"},{id:"higiene",name:"Higiene personal"},{id:"dermocosmetica",name:"Dermocosmética"},{id:"bebes",name:"Bebés"},{id:"accesorios-salud",name:"Accesorios"}]},{id:"perfumeria",name:"Perfumería",description:"Cuidado personal y cosmética.",suggestedCategories:[{id:"perfumes",name:"Perfumes"},{id:"maquillaje",name:"Maquillaje"},{id:"cabello",name:"Cabello"},{id:"corporal",name:"Corporal"}]},{id:"regaleria",name:"Regalería",description:"Regalos, deco y librería.",suggestedCategories:[{id:"regalos",name:"Regalos"},{id:"deco",name:"Decoración"},{id:"libreria",name:"Librería"},{id:"tarjeteria",name:"Tarjetería"}]},{id:"ferreteria",name:"Ferretería",description:"Herramientas, obra y electricidad.",suggestedCategories:[{id:"herramientas",name:"Herramientas"},{id:"electricidad",name:"Electricidad"},{id:"plomeria",name:"Plomería"},{id:"pinturas",name:"Pinturas"},{id:"bulones",name:"Bulonería"},{id:"jardin",name:"Jardín"}]},{id:"taller",name:"Taller mecánico",description:"Repuestos, lubricantes y servicios.",suggestedCategories:[{id:"lubricantes",name:"Lubricantes"},{id:"aceites",name:"Aceites de motor"},{id:"filtros",name:"Filtros"},{id:"baterias",name:"Baterías"},{id:"neumaticos",name:"Neumáticos"},{id:"frenos",name:"Frenos"},{id:"servicios-taller",name:"Servicios"}]},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios.",suggestedCategories:[{id:"mujer",name:"Mujer"},{id:"hombre",name:"Hombre"},{id:"ninos",name:"Niños"},{id:"calzado",name:"Calzado"},{id:"accesorios",name:"Accesorios"}]},{id:"servicios",name:"Servicios",description:"Oficios y asistencia local.",suggestedCategories:[{id:"domicilio",name:"A domicilio"},{id:"reparaciones",name:"Reparaciones"},{id:"instalaciones",name:"Instalaciones"},{id:"mantenimiento",name:"Mantenimiento"}]}],he=e=>ge.find(x=>x.id===e),be=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,ye=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,b=o.div`
  display: grid;
  gap: 0.3rem;
  min-width: 0;

  /* La descripción ocupa el ancho completo en dos columnas. */
  &:last-child {
    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      grid-column: 1 / -1;
    }
  }
`,g=o.label`
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,y=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
`,f=o.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,q=`
  width: 100%;
  min-height: 2.9rem;
  padding: 0 0.85rem;
  border-radius: 0.75rem;
  font-size: 1rem;
`,A=o.input`
  ${q};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:e})=>e.color.danger};
  }
`,fe=o.select`
  ${q};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:e})=>e.color.danger};
  }
`,xe=o.textarea`
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 1rem;
  resize: vertical;

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }
`,H=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,O=o.span`
  padding: 0.1rem 0.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,$e=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,N=o.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;

  &[data-video='true'] {
    aspect-ratio: 16 / 9;
  }
`,je=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,ve=o.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
`,D=o.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(5, 8, 22, 0.68);
  color: #fff;
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.danger};
  }
`,T=o.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  aspect-ratio: 1 / 1;
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }

  &[data-busy='true'] {
    opacity: 0.7;
    cursor: progress;
  }

  &[data-wide='true'] {
    width: 100%;
    aspect-ratio: auto;
    min-height: 3.25rem;
    flex-direction: row;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Ce=o.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({theme:e})=>e.spacing[1]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`,we=o.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(15, 157, 88, 0.12);
  color: ${({theme:e})=>e.color.success};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Se="almacen";function Pe(){const e=n.useMemo(()=>he(Se),[]),x=(e==null?void 0:e.suggestedCategories)??[],[w,S]=n.useState(""),[$,k]=n.useState(""),[z,F]=n.useState(""),[_,P]=n.useState(""),[c,j]=n.useState([]),[t,v]=n.useState(null),[M,u]=n.useState(null),[p,R]=n.useState(!1),[J,I]=n.useState(!1),[L,E]=n.useState(!1);n.useEffect(()=>()=>{c.forEach(r=>URL.revokeObjectURL(r.previewUrl)),t&&URL.revokeObjectURL(t.url)},[c,t]);const Q=async r=>{if(!(r!=null&&r.length))return;u(null);const i=d.maxImages-c.length;if(i<=0){u(`Podés subir hasta ${d.maxImages} fotos.`);return}E(!0);const l=Array.from(r).slice(0,i),m=[];for(const h of l){const V=ce(h);if(V){u(V);continue}try{const ee=await le(h);m.push({...ee,id:`${h.name}-${Date.now()}-${m.length}`})}catch{u("No pudimos procesar una de las fotos.")}}j(h=>[...h,...m]),E(!1)},Y=async r=>{const i=r==null?void 0:r[0];if(!i)return;u(null);const l=await me(i);if(l){u(l);return}v({url:URL.createObjectURL(i),bytes:i.size,name:i.name})},K=r=>{j(i=>{const l=i.find(m=>m.id===r);return l&&URL.revokeObjectURL(l.previewUrl),i.filter(m=>m.id!==r)})},X=()=>{t&&URL.revokeObjectURL(t.url),v(null)},s={name:w.trim().length<2?"Poné el nombre del producto.":null,price:!$||Number($)<=0?"Poné un precio válido.":null,category:z?null:"Elegí una categoría."},Z=!s.name&&!s.price&&!s.category,W=r=>{r.preventDefault(),R(!0),Z&&(I(!0),window.setTimeout(()=>I(!1),2600),c.forEach(i=>URL.revokeObjectURL(i.previewUrl)),t&&URL.revokeObjectURL(t.url),S(""),k(""),F(""),P(""),j([]),v(null),R(!1))},U=c.reduce((r,i)=>r+i.bytes,0)+((t==null?void 0:t.bytes)??0);return a.jsxs(ae,{showSearch:!1,children:[a.jsx(re,{children:a.jsxs(oe,{children:[a.jsx(ie,{title:"Nuevo producto",chip:e==null?void 0:e.name,subtitle:"Todo producto entra en una categoría de tu comercio."}),a.jsxs(be,{as:"form",onSubmit:W,noValidate:!0,children:[a.jsxs(ye,{children:[a.jsxs(b,{children:[a.jsx(g,{htmlFor:"product-name",children:"Nombre"}),a.jsx(A,{id:"product-name",value:w,onChange:r=>S(r.target.value),placeholder:"Ej: Coca Cola 2,25 L","data-invalid":p&&!!s.name}),p&&s.name?a.jsx(f,{children:s.name}):null]}),a.jsxs(b,{children:[a.jsx(g,{htmlFor:"product-price",children:"Precio"}),a.jsx(A,{id:"product-price",type:"number",inputMode:"decimal",min:"0",value:$,onChange:r=>k(r.target.value),placeholder:"0","data-invalid":p&&!!s.price}),p&&s.price?a.jsx(f,{children:s.price}):null]}),a.jsxs(b,{children:[a.jsx(g,{htmlFor:"product-category",children:"Categoría"}),a.jsxs(fe,{id:"product-category",value:z,onChange:r=>F(r.target.value),"data-invalid":p&&!!s.category,children:[a.jsx("option",{value:"",children:"Elegí una categoría"}),x.map(r=>a.jsx("option",{value:r.id,children:r.name},r.id))]}),p&&s.category?a.jsx(f,{children:s.category}):a.jsxs(y,{children:["Sugeridas para ",e==null?void 0:e.name,"."]})]}),a.jsxs(b,{children:[a.jsx(g,{htmlFor:"product-description",children:"Descripción"}),a.jsx(xe,{id:"product-description",value:_,onChange:r=>P(r.target.value),placeholder:"Opcional: detalle breve del producto.",rows:3})]})]}),a.jsxs(H,{children:[a.jsx(g,{as:"span",children:"Fotos"}),a.jsxs(O,{children:[c.length,"/",d.maxImages]})]}),a.jsxs($e,{children:[c.map(r=>a.jsxs(N,{children:[a.jsx(je,{src:r.previewUrl,alt:""}),a.jsx(D,{type:"button",onClick:()=>K(r.id),"aria-label":"Quitar foto",children:a.jsx(B,{size:14,"aria-hidden":"true"})})]},r.id)),c.length<d.maxImages?a.jsxs(T,{as:"label","data-busy":L,children:[a.jsx(ue,{size:20,"aria-hidden":"true"}),a.jsx("span",{children:L?"Optimizando…":"Agregar"}),a.jsx("input",{type:"file",accept:ne,multiple:!0,hidden:!0,onChange:r=>{Q(r.target.files),r.target.value=""}})]}):null]}),a.jsxs(y,{children:["Se redimensionan a ",d.maxImageDimension,"px y se comprimen solas: cada foto queda en menos de ",C(d.maxImageBytes),"."]}),a.jsxs(H,{children:[a.jsx(g,{as:"span",children:"Video"}),a.jsxs(O,{children:[t?1:0,"/",d.maxVideos]})]}),t?a.jsxs(N,{"data-video":"true",children:[a.jsx(ve,{src:t.url,controls:!0,preload:"metadata"}),a.jsx(D,{type:"button",onClick:X,"aria-label":"Quitar video",children:a.jsx(B,{size:14,"aria-hidden":"true"})})]}):a.jsxs(T,{as:"label","data-wide":"true",children:[a.jsx(pe,{size:20,"aria-hidden":"true"}),a.jsx("span",{children:"Agregar video"}),a.jsx("input",{type:"file",accept:de,hidden:!0,onChange:r=>{Y(r.target.files),r.target.value=""}})]}),a.jsxs(y,{children:["Hasta ",d.maxVideoSeconds," segundos y"," ",C(d.maxVideoBytes),"."]}),M?a.jsx(f,{children:M}):null,U>0?a.jsxs(y,{children:["Total a subir: ",C(U),"."]}):null,a.jsx(Ce,{type:"submit",children:"Guardar producto"}),J?a.jsxs(we,{role:"status",children:[a.jsx(te,{size:16,"aria-hidden":"true"}),"Producto guardado en tu catálogo."]}):null]})]})}),a.jsx(se,{"aria-hidden":"true"})]})}export{Pe as ProductFormScreen};
