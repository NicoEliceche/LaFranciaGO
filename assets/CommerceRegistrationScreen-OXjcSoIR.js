import{c as le,s as V,q as i,j as e,M as de,b as O,S as B,aw as ce,ak as me,ai as pe,ax as ue,H as he,a as M,C as j,O as D,U as ge,ay as xe,d as S,e as $,a2 as N,az as je,aA as z,X as G,aB as be,ac as ye,an as fe}from"./index-BzCkDV42.js";import{r as h}from"./react-D_B_6qYb.js";import{M as g,I as ve,f as U,V as Se}from"./mediaService-D2_VAu2k.js";import{u as $e}from"./useMediaUpload-D7LBZAyT.js";import{F as ze,a as we}from"./FileField-Ckm_te9p.js";import{M as H,a as _,b as Ce,c as Q,d as Fe,e as J,f as K,I as ke,g as Me,V as Ie,F as Te}from"./ProductFormScreenStyled-Cizy3BHm.js";import{f as Pe,F as I,g as T,a as n,b as o,e as l,d as y,U as Ae,h as qe,i as Re,j as Le,c as Ee,A as Ve,S as Oe,R as Be,k as P,l as A,m as De}from"./formStyles-BkTdEK78.js";import{P as Ne}from"./phone-CBERqTrq.js";import{S as W}from"./shield-check-DmV-eI-F.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=le("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),Ue=[{id:"almacen",name:"Almacén",aliases:["despensa","provisiones","mercadito"]},{id:"supermercado",name:"Supermercado",aliases:["super","autoservicio"]},{id:"panaderia",name:"Panadería",aliases:["pan","facturas"]},{id:"confiteria",name:"Confitería",aliases:["tortas","reposteria","pasteleria"]},{id:"carniceria",name:"Carnicería",aliases:["carne","cortes","pollos"]},{id:"pescaderia",name:"Pescadería",aliases:["pescado","mariscos"]},{id:"verduleria",name:"Verdulería",aliases:["frutas","verduras","fruteria"]},{id:"fiambreria",name:"Fiambrería",aliases:["fiambres","quesos","picada"]},{id:"dietetica",name:"Dietética",aliases:["naturista","saludable","organico"]},{id:"granja",name:"Granja",aliases:["huevos","pollo","aves"]},{id:"kiosco",name:"Kiosco",aliases:["golosinas","maxikiosco","cigarrillos"]},{id:"bebidas",name:"Distribuidora de bebidas",aliases:["bebidas","cerveza","vinos"]},{id:"vinoteca",name:"Vinoteca",aliases:["vinos","bodega","licores"]},{id:"heladeria",name:"Heladería",aliases:["helados","postres"]},{id:"rotiseria",name:"Rotisería",aliases:["comidas","viandas","milanesas"]},{id:"restaurante",name:"Restaurante",aliases:["comida","parrilla","resto"]},{id:"pizzeria",name:"Pizzería",aliases:["pizza","empanadas","faina"]},{id:"cafeteria",name:"Cafetería",aliases:["cafe","bar","desayunos"]},{id:"sandwicheria",name:"Sandwichería",aliases:["sandwiches","lomos","hamburguesas"]},{id:"catering",name:"Catering y eventos",aliases:["eventos","fiestas","lunch"]},{id:"farmacia",name:"Farmacia",aliases:["remedios","medicamentos"]},{id:"perfumeria",name:"Perfumería",aliases:["cosmetica","higiene","belleza"]},{id:"optica",name:"Óptica",aliases:["anteojos","lentes"]},{id:"peluqueria",name:"Peluquería",aliases:["pelo","barberia","corte"]},{id:"estetica",name:"Centro de estética",aliases:["unas","depilacion","spa"]},{id:"gimnasio",name:"Gimnasio",aliases:["gym","fitness","entrenamiento"]},{id:"ferreteria",name:"Ferretería",aliases:["herramientas","tornillos"]},{id:"corralon",name:"Corralón",aliases:["materiales","construccion","cemento"]},{id:"pinturera",name:"Pinturería",aliases:["pintura","latex","esmalte"]},{id:"muebleria",name:"Mueblería",aliases:["muebles","colchones","sillones"]},{id:"bazar",name:"Bazar",aliases:["cocina","vajilla","menaje"]},{id:"electrodomesticos",name:"Electrodomésticos",aliases:["heladeras","lavarropas"]},{id:"vivero",name:"Vivero",aliases:["plantas","jardin","macetas"]},{id:"limpieza",name:"Artículos de limpieza",aliases:["limpieza","lavandina"]},{id:"indumentaria",name:"Indumentaria",aliases:["ropa","vestimenta","boutique"]},{id:"calzado",name:"Calzado",aliases:["zapatos","zapatillas","botas"]},{id:"lenceria",name:"Lencería",aliases:["ropa interior","medias"]},{id:"deportes",name:"Artículos deportivos",aliases:["deporte","futbol","camisetas"]},{id:"merceria",name:"Mercería",aliases:["lanas","hilos","botones","telas"]},{id:"taller",name:"Taller mecánico",aliases:["mecanica","autos","service"]},{id:"gomeria",name:"Gomería",aliases:["cubiertas","neumaticos","ruedas"]},{id:"repuestos",name:"Repuestos",aliases:["autopartes","accesorios"]},{id:"lavadero",name:"Lavadero de autos",aliases:["lavado","autos"]},{id:"bicicleteria",name:"Bicicletería",aliases:["bicicletas","bicis","rodados"]},{id:"motos",name:"Motos y repuestos",aliases:["moto","ciclomotor"]},{id:"libreria",name:"Librería",aliases:["utiles","papeleria","escolar"]},{id:"regaleria",name:"Regalería",aliases:["regalos","souvenirs","decoracion"]},{id:"jugueteria",name:"Juguetería",aliases:["juguetes","chicos"]},{id:"petshop",name:"Pet shop",aliases:["mascotas","perros","gatos"]},{id:"veterinaria",name:"Veterinaria",aliases:["animales","mascotas","vacunas"]},{id:"agropecuaria",name:"Agropecuaria",aliases:["campo","semillas","agro","forrajeria"]},{id:"informatica",name:"Informática",aliases:["computacion","pc","tecnologia"]},{id:"celulares",name:"Celulares y accesorios",aliases:["telefonos","fundas"]},{id:"lavanderia",name:"Lavandería",aliases:["lavado","ropa","tintoreria"]},{id:"imprenta",name:"Imprenta y gráfica",aliases:["impresiones","cartel","folleteria"]},{id:"fotografia",name:"Fotografía",aliases:["fotos","estudio","eventos"]},{id:"inmobiliaria",name:"Inmobiliaria",aliases:["propiedades","alquileres"]},{id:"transporte",name:"Transporte y fletes",aliases:["flete","mudanza","envios"]},{id:"construccion",name:"Servicios de construcción",aliases:["albanil","obra"]},{id:"electricista",name:"Electricidad",aliases:["electricista","instalaciones"]},{id:"plomeria",name:"Plomería y gas",aliases:["plomero","gasista","canerias"]},{id:"refrigeracion",name:"Refrigeración y aire",aliases:["aire acondicionado"]},{id:"cerrajeria",name:"Cerrajería",aliases:["llaves","cerraduras"]},{id:"otro",name:"Otro rubro",aliases:["otros"]}];function He(a,r=5){const d=a.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");if(d.length===0)return[];const c=t=>t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");return Ue.filter(t=>[t.name,...t.aliases??[]].map(c).some(u=>u.includes(d))).sort((t,p)=>{const u=c(t.name).startsWith(d),w=c(p.name).startsWith(d);return u!==w?u?-1:1:t.name.localeCompare(p.name,"es")}).slice(0,r)}const Y="lafranciago:comercios",_e=new Set;let f=[],Z=!1;const Qe=()=>_e.forEach(a=>a()),Je=()=>{try{const a=window.localStorage.getItem(Y);if(!a)return[];const r=JSON.parse(a);return Array.isArray(r)?r:[]}catch{return[]}},Ke=()=>{try{window.localStorage.setItem(Y,JSON.stringify(f))}catch{}},We=()=>{Z||(Z=!0,f=Je())},Ze=a=>a.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function Xe(a){We();const r=Ze(a.name)||"comercio",d=new Set([...V,...f].map(p=>p.id));let c=r,b=2;for(;d.has(c);)c=`${r}-${b}`,b+=1;const t={id:c,name:a.name,category:a.category,categoryId:a.categoryId,address:a.address,phone:a.phone,hours:a.hours||"A confirmar",distanceKm:0,rating:0,openNow:!1,delivery:!0,pickup:!0,minOrder:0,summary:a.description||`${a.category} en La Francia.`,tags:a.zone?[a.zone]:[],icon:V[0].icon,featuredProducts:[],email:a.email,status:"pendiente",registeredAt:new Date().toISOString()};return f=[t,...f],Ke(),Qe(),t}const Ye=i.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[3]};

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }

  @media (max-width: calc(${({theme:a})=>a.breakpoints.md} - 1px)) {
    gap: ${({theme:a})=>a.spacing[2]};
  }
`;i.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[2]};
`;i.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[2]};
`;const ea=i.div`
  position: relative;
`,aa=i.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  z-index: 5;
  display: grid;
  padding: ${({theme:a})=>a.spacing[1]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.border};
  background: ${({theme:a})=>a.color.surface};
  box-shadow: ${({theme:a})=>a.shadow.md};
`,sa=i.button`
  display: block;
  width: 100%;
  padding: ${({theme:a})=>a.spacing[2]};
  border: 0;
  border-radius: ${({theme:a})=>a.radius.md};
  background: transparent;
  color: ${({theme:a})=>a.color.text};
  font-family: ${({theme:a})=>a.typography.fontFamily.body};
  font-size: ${({theme:a})=>a.typography.size.sm};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${({theme:a})=>a.color.primarySoft};
  }
`,ia=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  margin-top: ${({theme:a})=>a.spacing[1]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px dashed ${({theme:a})=>a.color.borderStrong};
  background: transparent;
  color: ${({theme:a})=>a.color.primary};
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.sm};
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:a})=>a.color.primary};
    background: ${({theme:a})=>a.color.primarySoft};
  }
`,ra=i.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,oa=i.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:a})=>a.spacing[2]};
`,na=i.div`
  display: grid;
  justify-items: center;
  gap: 0.25rem;
`,ta=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.65rem;
  height: 1.65rem;
  border-radius: ${({theme:a})=>a.radius.full};
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.xs};
  font-weight: ${({theme:a})=>a.typography.weight.bold};

  /* Se distingue lo que hace el comercio de lo que hacemos nosotros. */
  &[data-owner='user'] {
    background: ${({theme:a})=>a.color.brand};
    color: ${({theme:a})=>a.color.onPrimary};
  }

  &[data-owner='app'] {
    border: 1px solid ${({theme:a})=>a.color.border};
    background: ${({theme:a})=>a.color.surfaceMuted};
    color: ${({theme:a})=>a.color.textSoft};
  }
`,la=i.span`
  width: 2px;
  flex: 1 1 auto;
  min-height: 1.5rem;
  border-radius: 2px;
  background: ${({theme:a})=>a.color.border};
`,da=i.div`
  display: grid;
  gap: 0.15rem;
  padding-bottom: ${({theme:a})=>a.spacing[3]};
  min-width: 0;
`,ca=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spacing[2]};
`,ma=i.span`
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.sm};
  font-weight: ${({theme:a})=>a.typography.weight.bold};
`,pa=i.span`
  flex: 0 0 auto;
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  white-space: nowrap;
`,ua=i.span`
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.35;
`,ha=i.span`
  justify-self: start;
  margin-top: 0.2rem;
  padding: 0.1rem 0.45rem;
  border-radius: ${({theme:a})=>a.radius.full};
  font-size: 0.625rem;
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &[data-owner='user'] {
    background: ${({theme:a})=>a.color.primarySoft};
    color: ${({theme:a})=>a.color.primary};
  }

  &[data-owner='app'] {
    background: ${({theme:a})=>a.color.surfaceMuted};
    color: ${({theme:a})=>a.color.textSoft};
  }
`,ga=i.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[1]};
  margin-bottom: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.success};
  background: ${({theme:a})=>a.color.surfaceMuted};
`,xa=i.strong`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  color: ${({theme:a})=>a.color.success};
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.base};
`,ja=i.span`
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
`,X=[{id:"step-1",title:"Completás el formulario",text:"CUIT, razón social, rubro y dirección. Te lleva unos minutos.",owner:"Vos",duration:"5 min"},{id:"step-2",title:"Subís logo y fotos",text:"Logo del comercio y, si querés, fotos y un video del local.",owner:"Vos",duration:"5 min"},{id:"step-3",title:"Revisamos los datos",text:"Verificamos el CUIT y que el comercio exista en La Francia.",owner:"LaFranciaGO",duration:"Hasta 48 h hábiles"},{id:"step-4",title:"Cargás tus productos",text:"Con la cuenta aprobada, sumás el catálogo con precios y stock.",owner:"Vos",duration:"A tu ritmo"},{id:"step-5",title:"Tu comercio queda publicado",text:"Aparecés en el buscador y en Inicio, y empezás a recibir pedidos.",owner:"LaFranciaGO",duration:"Inmediato"}],ba=a=>a.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),ya=a=>{const r=a.replace(/\D/g,"").slice(0,11);return r.length<=2?r:r.length<=10?`${r.slice(0,2)}-${r.slice(2)}`:`${r.slice(0,2)}-${r.slice(2,10)}-${r.slice(10)}`};function Ma(){const[a,r]=h.useState(""),[d,c]=h.useState(""),[b,t]=h.useState(!1),[p,u]=h.useState(""),[w,C]=h.useState(!1),{photos:F,video:k,error:q,processing:R,addPhotos:ee,addVideo:ae,removePhoto:se,removeVideo:ie}=$e(),[v,re]=h.useState(null),L=h.useMemo(()=>He(d),[d]),oe=s=>{s.preventDefault();const x=new FormData(s.currentTarget),m=te=>String(x.get(te)??"").trim(),E=m("razonSocial");if(!E||!d.trim())return;const ne=Xe({name:m("nombreComercial")||E,category:d.trim(),categoryId:ba(d),address:p||m("direccion"),phone:m("telefono"),email:m("email"),hours:m("horario"),zone:m("zona"),description:m("descripcion"),social:m("social"),payments:m("pagos")});re(ne),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(de,{showSearch:!1,children:[e.jsx(O,{children:e.jsx(B,{children:e.jsxs(ce,{children:[e.jsx(me,{children:"Alta de comercio"}),e.jsx(pe,{children:"Formularios preparados para publicar y cobrar."}),e.jsx(ue,{children:"Pedimos lo mínimo obligatorio para dejar al comercio listo y sumamos campos opcionales para mejorar presencia, soporte y conversión."})]})})}),e.jsx(O,{children:e.jsx(B,{children:e.jsxs(Ye,{children:[e.jsxs(Pe,{children:[v?e.jsxs(ga,{role:"status",children:[e.jsxs(xa,{children:[e.jsx(he,{size:18,"aria-hidden":"true"}),v.name," quedó registrado"]}),e.jsxs(M,{children:["Lo estamos revisando: cuando aprobemos los datos vas a poder cargar tus productos y el comercio aparece en el buscador. Te avisamos por mail a"," ",e.jsx("strong",{children:v.email||"tu casilla"}),"."]}),e.jsxs(ja,{children:["Código de seguimiento: ",e.jsx("strong",{children:v.id})]})]}):null,e.jsx("form",{onSubmit:oe,children:e.jsxs(I,{children:[e.jsx(j,{children:"Datos obligatorios"}),e.jsxs(T,{children:[e.jsxs(n,{htmlFor:"business-tax",children:[e.jsxs(o,{children:[e.jsx(ze,{size:16,"aria-hidden":"true"}),"CUIT / CUIL"]}),e.jsx(l,{id:"business-tax",type:"text",inputMode:"numeric",placeholder:"20-12345678-9",value:a,onChange:s=>r(ya(s.target.value)),maxLength:13,required:!0}),e.jsx(y,{children:"Validación fiscal para publicar como comercio."})]}),e.jsxs(n,{htmlFor:"business-name",children:[e.jsxs(o,{children:[e.jsx(Ge,{size:16,"aria-hidden":"true"}),"Razón social"]}),e.jsx(l,{id:"business-name",name:"razonSocial",type:"text",placeholder:"La Huerta S.A.",required:!0})]}),e.jsxs(n,{htmlFor:"business-address",children:[e.jsxs(o,{children:[e.jsx(D,{size:16,"aria-hidden":"true"}),"Dirección"]}),e.jsx(l,{id:"business-address",name:"direccion",type:"text",placeholder:"Av. Principal 123",required:!0})]}),e.jsxs(n,{htmlFor:"business-phone",children:[e.jsxs(o,{children:[e.jsx(Ne,{size:16,"aria-hidden":"true"}),"Teléfono"]}),e.jsx(l,{id:"business-phone",name:"telefono",type:"tel",placeholder:"+54 3573 400-201",required:!0})]}),e.jsxs(n,{htmlFor:"business-email",children:[e.jsxs(o,{children:[e.jsx(ge,{size:16,"aria-hidden":"true"}),"Email"]}),e.jsx(l,{id:"business-email",name:"email",type:"email",placeholder:"ventas@lahuerta.com",required:!0})]}),e.jsxs(n,{htmlFor:"business-category",children:[e.jsxs(o,{children:[e.jsx(xe,{size:16,"aria-hidden":"true"}),"Rubro principal"]}),e.jsxs(ea,{children:[e.jsx(l,{id:"business-category",type:"text",autoComplete:"off",placeholder:"Escribí tu rubro (ej: panadería)",value:d,onChange:s=>{c(s.target.value),t(!0)},onFocus:()=>t(!0),onBlur:()=>window.setTimeout(()=>t(!1),140),required:!0}),b&&L.length>0?e.jsx(aa,{"aria-label":"Rubros sugeridos",children:L.map(s=>e.jsx(sa,{type:"button",onClick:()=>{c(s.name),t(!1)},children:s.name},s.id))}):null]}),e.jsx(y,{children:'Escribí una letra y elegí de la lista. Si no está, poné "Otro rubro".'})]}),e.jsxs(n,{htmlFor:"business-password",children:[e.jsxs(o,{children:[e.jsx(W,{size:16,"aria-hidden":"true"}),"Contraseña"]}),e.jsx(l,{id:"business-password",type:"password",placeholder:"••••••••",required:!0})]}),e.jsxs(n,{htmlFor:"business-password-repeat",children:[e.jsxs(o,{children:[e.jsx(W,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),e.jsx(l,{id:"business-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]}),e.jsx(S,{children:e.jsx($,{children:e.jsxs(N,{children:[e.jsx(j,{children:"Foto de perfil / logo"}),e.jsxs(Ae,{htmlFor:"business-logo",children:[e.jsx(qe,{children:"Subí tu logo o foto de perfil"}),e.jsx(Re,{children:"PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio."}),e.jsx(we,{id:"business-logo",accept:"image/*"})]})]})})}),e.jsx(S,{children:e.jsx($,{children:e.jsxs(I,{children:[e.jsx(j,{children:"Opcionales recomendados"}),e.jsx(M,{children:"Estos campos mejoran el perfil, el SEO interno y el soporte con clientes."}),e.jsxs(T,{children:[e.jsxs(n,{htmlFor:"business-display-name",children:[e.jsx(o,{children:"Nombre comercial"}),e.jsx(l,{id:"business-display-name",name:"nombreComercial",type:"text",placeholder:"La Huerta"})]}),e.jsxs(n,{htmlFor:"business-hours",children:[e.jsx(o,{children:"Horario de atención"}),e.jsx(l,{id:"business-hours",name:"horario",type:"text",placeholder:"Lun a sáb 08:00 - 21:30"})]}),e.jsxs(n,{htmlFor:"business-map",children:[e.jsx(o,{children:"Mapa / referencia"}),e.jsx(l,{id:"business-map",type:"text",placeholder:"Ubicación exacta para el mapa",value:p,onChange:s=>u(s.target.value)}),e.jsxs(ia,{type:"button",onClick:()=>C(!0),children:[e.jsx(D,{size:16,"aria-hidden":"true"}),"Agregar dirección de maps"]})]})]}),e.jsxs(n,{htmlFor:"business-description",children:[e.jsx(o,{children:"Descripción del negocio"}),e.jsx(Le,{id:"business-description",name:"descripcion",placeholder:"Contá qué vendés, qué te diferencia y cómo entregás."})]})]})})}),e.jsx(S,{children:e.jsx($,{children:e.jsxs(I,{children:[e.jsx(j,{children:"Operación y publicación"}),e.jsxs(je,{children:[e.jsx(z,{children:"Delivery"}),e.jsx(z,{children:"Retiro"}),e.jsx(z,{children:"Página pública"}),e.jsx(z,{children:"Sponsor interno"})]}),e.jsxs(T,{children:[e.jsxs(n,{htmlFor:"business-method",children:[e.jsx(o,{children:"Método de publicación"}),e.jsxs(Ee,{id:"business-method",defaultValue:"premium",children:[e.jsx("option",{value:"premium",children:"Cuenta paga / Premium"}),e.jsx("option",{value:"trial",children:"Prueba inicial"}),e.jsx("option",{value:"manual",children:"Alta manual"})]})]}),e.jsxs(n,{htmlFor:"business-zone",children:[e.jsx(o,{children:"Zona de cobertura"}),e.jsx(l,{id:"business-zone",name:"zona",type:"text",placeholder:"Centro, Barrio Norte, Ruta 19..."})]}),e.jsxs(n,{htmlFor:"business-social",children:[e.jsx(o,{children:"Instagram o Facebook"}),e.jsx(l,{id:"business-social",name:"social",type:"text",placeholder:"@lahuerta"}),e.jsx(y,{children:"Se muestra en el perfil como referencia. El pedido se cierra siempre dentro de la app."})]}),e.jsxs(n,{htmlFor:"business-payments",children:[e.jsx(o,{children:"Métodos de pago"}),e.jsx(l,{id:"business-payments",name:"pagos",type:"text",placeholder:"Efectivo, débito, transferencia..."})]})]}),e.jsxs(H,{children:[e.jsx(o,{as:"span",children:"Fotos del local"}),e.jsxs(_,{children:[F.length,"/",g.maxImages]})]}),e.jsxs(Ce,{children:[F.map(s=>e.jsxs(Q,{children:[e.jsx(Fe,{src:s.previewUrl,alt:""}),e.jsx(J,{type:"button",onClick:()=>se(s.id),"aria-label":"Quitar foto",children:e.jsx(G,{size:14,"aria-hidden":"true"})})]},s.id)),F.length<g.maxImages?e.jsxs(K,{as:"label","data-busy":R,children:[e.jsx(ke,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:R?"Optimizando…":"Agregar"}),e.jsx("input",{type:"file",accept:ve,multiple:!0,hidden:!0,onChange:s=>{ee(s.target.files),s.target.value=""}})]}):null]}),e.jsxs(y,{children:["Se redimensionan a ",g.maxImageDimension,"px y se comprimen solas: cada foto queda en menos de"," ",U(g.maxImageBytes),"."]}),e.jsxs(H,{children:[e.jsx(o,{as:"span",children:"Video del local"}),e.jsxs(_,{children:[k?1:0,"/",g.maxVideos]})]}),k?e.jsxs(Q,{"data-video":"true",children:[e.jsx(Me,{src:k.url,controls:!0,preload:"metadata"}),e.jsx(J,{type:"button",onClick:ie,"aria-label":"Quitar video",children:e.jsx(G,{size:14,"aria-hidden":"true"})})]}):e.jsxs(K,{as:"label","data-wide":"true",children:[e.jsx(Ie,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:"Agregar video"}),e.jsx("input",{type:"file",accept:Se,hidden:!0,onChange:s=>{ae(s.target.files),s.target.value=""}})]}),e.jsxs(y,{children:["Hasta ",g.maxVideoSeconds," segundos y"," ",U(g.maxVideoBytes),". Mostralo recorriendo el local: ayuda más que cualquier descripción."]}),q?e.jsx(Te,{children:q}):null]})})}),e.jsxs(Ve,{children:[e.jsx(be,{type:"submit",children:"Enviar y pasar a pago"}),e.jsx(ye,{to:"/comercios",children:"Volver al marketplace"})]})]})})]}),e.jsxs(Oe,{children:[e.jsxs(N,{children:[e.jsx(j,{children:"Qué gana el comercio"}),e.jsxs(Be,{children:[e.jsxs(P,{children:[e.jsx(A,{}),e.jsx("span",{children:"Presencia en la aplicación con tarjetas, sponsor y carrusel de promociones."})]}),e.jsxs(P,{children:[e.jsx(A,{}),e.jsx("span",{children:"Perfil propio con logo, horarios, stock, delivery y retiro."})]}),e.jsxs(P,{children:[e.jsx(A,{}),e.jsx("span",{children:"Notificaciones por producto, comercio y oferta para fidelizar usuarios."})]})]})]}),e.jsx(S,{children:e.jsx($,{children:e.jsxs(De,{children:[e.jsx(j,{children:"Proceso de alta"}),e.jsx(M,{children:"Desde que empezás hasta que recibís el primer pedido."}),e.jsx(ra,{children:X.map((s,x)=>e.jsxs(oa,{children:[e.jsxs(na,{children:[e.jsx(ta,{"data-owner":s.owner==="Vos"?"user":"app",children:x+1}),x<X.length-1?e.jsx(la,{}):null]}),e.jsxs(da,{children:[e.jsxs(ca,{children:[e.jsx(ma,{children:s.title}),e.jsx(pa,{children:s.duration})]}),e.jsx(ua,{children:s.text}),e.jsx(ha,{"data-owner":s.owner==="Vos"?"user":"app",children:s.owner})]})]},s.id))})]})})})]})]})})}),e.jsx(fe,{open:w,currentId:"",startOnNew:!0,onClose:()=>C(!1),onSelect:(s,x)=>{u(x),C(!1)}})]})}export{Ma as CommerceRegistrationScreen};
