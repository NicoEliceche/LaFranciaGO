import{aH as H,j as e,M as ye,C as _,S as Q,aI as ve,av as Se,au as $e,aJ as ze,aK as we,d as v,F as A,c as f,aL as q,f as n,g as o,i as l,aM as S,a as C,b as F,p as J,aN as Ce,aO as Fe,aP as Ie,aQ as ke,aR as Te,aS as I,aT as Me,aU as Pe,aV as Ee,ad as Ae,aW as qe,aX as Re,aY as R,aZ as L,a_ as Le,ax as Ve,h as Oe,a$ as De,b0 as Be,n as Ne}from"./index-BEHxigxl.js";import{r as u}from"./react-6hK8W6IX.js";import{M as j,I as Ge,f as K,V as Ue}from"./mediaService-D2_VAu2k.js";import{u as He}from"./useMediaUpload-wuhf1bNn.js";import{F as _e}from"./FileField-CL55AYaJ.js";import{M as W,a as Y,b as Qe,c as X,d as Je,e as Z,f as ee,g as Ke,F as We}from"./ProductFormScreenStyled-12Ms_wi6.js";import{q as i}from"./estilos-DzHAJWDP.js";import{C as ae,r as Ye,ai as Xe,M as se,ah as Ze,U as ea,q as aa,Y as ie,X as re,aj as sa,ak as ia}from"./iconos-DPkufriG.js";const ra=[{id:"almacen",name:"Almacén",aliases:["despensa","provisiones","mercadito"]},{id:"supermercado",name:"Supermercado",aliases:["super","autoservicio"]},{id:"panaderia",name:"Panadería",aliases:["pan","facturas"]},{id:"confiteria",name:"Confitería",aliases:["tortas","reposteria","pasteleria"]},{id:"carniceria",name:"Carnicería",aliases:["carne","cortes","pollos"]},{id:"pescaderia",name:"Pescadería",aliases:["pescado","mariscos"]},{id:"verduleria",name:"Verdulería",aliases:["frutas","verduras","fruteria"]},{id:"fiambreria",name:"Fiambrería",aliases:["fiambres","quesos","picada"]},{id:"dietetica",name:"Dietética",aliases:["naturista","saludable","organico"]},{id:"granja",name:"Granja",aliases:["huevos","pollo","aves"]},{id:"kiosco",name:"Kiosco",aliases:["golosinas","maxikiosco","cigarrillos"]},{id:"bebidas",name:"Distribuidora de bebidas",aliases:["bebidas","cerveza","vinos"]},{id:"vinoteca",name:"Vinoteca",aliases:["vinos","bodega","licores"]},{id:"heladeria",name:"Heladería",aliases:["helados","postres"]},{id:"rotiseria",name:"Rotisería",aliases:["comidas","viandas","milanesas"]},{id:"restaurante",name:"Restaurante",aliases:["comida","parrilla","resto"]},{id:"pizzeria",name:"Pizzería",aliases:["pizza","empanadas","faina"]},{id:"cafeteria",name:"Cafetería",aliases:["cafe","bar","desayunos"]},{id:"sandwicheria",name:"Sandwichería",aliases:["sandwiches","lomos","hamburguesas"]},{id:"catering",name:"Catering y eventos",aliases:["eventos","fiestas","lunch"]},{id:"farmacia",name:"Farmacia",aliases:["remedios","medicamentos"]},{id:"perfumeria",name:"Perfumería",aliases:["cosmetica","higiene","belleza"]},{id:"optica",name:"Óptica",aliases:["anteojos","lentes"]},{id:"peluqueria",name:"Peluquería",aliases:["pelo","barberia","corte"]},{id:"estetica",name:"Centro de estética",aliases:["unas","depilacion","spa"]},{id:"gimnasio",name:"Gimnasio",aliases:["gym","fitness","entrenamiento"]},{id:"ferreteria",name:"Ferretería",aliases:["herramientas","tornillos"]},{id:"corralon",name:"Corralón",aliases:["materiales","construccion","cemento"]},{id:"pinturera",name:"Pinturería",aliases:["pintura","latex","esmalte"]},{id:"muebleria",name:"Mueblería",aliases:["muebles","colchones","sillones"]},{id:"bazar",name:"Bazar",aliases:["cocina","vajilla","menaje"]},{id:"electrodomesticos",name:"Electrodomésticos",aliases:["heladeras","lavarropas"]},{id:"vivero",name:"Vivero",aliases:["plantas","jardin","macetas"]},{id:"limpieza",name:"Artículos de limpieza",aliases:["limpieza","lavandina"]},{id:"indumentaria",name:"Indumentaria",aliases:["ropa","vestimenta","boutique"]},{id:"calzado",name:"Calzado",aliases:["zapatos","zapatillas","botas"]},{id:"lenceria",name:"Lencería",aliases:["ropa interior","medias"]},{id:"deportes",name:"Artículos deportivos",aliases:["deporte","futbol","camisetas"]},{id:"merceria",name:"Mercería",aliases:["lanas","hilos","botones","telas"]},{id:"taller",name:"Taller mecánico",aliases:["mecanica","autos","service"]},{id:"gomeria",name:"Gomería",aliases:["cubiertas","neumaticos","ruedas"]},{id:"repuestos",name:"Repuestos",aliases:["autopartes","accesorios"]},{id:"lavadero",name:"Lavadero de autos",aliases:["lavado","autos"]},{id:"bicicleteria",name:"Bicicletería",aliases:["bicicletas","bicis","rodados"]},{id:"motos",name:"Motos y repuestos",aliases:["moto","ciclomotor"]},{id:"libreria",name:"Librería",aliases:["utiles","papeleria","escolar"]},{id:"regaleria",name:"Regalería",aliases:["regalos","souvenirs","decoracion"]},{id:"jugueteria",name:"Juguetería",aliases:["juguetes","chicos"]},{id:"petshop",name:"Pet shop",aliases:["mascotas","perros","gatos"]},{id:"veterinaria",name:"Veterinaria",aliases:["animales","mascotas","vacunas"]},{id:"agropecuaria",name:"Agropecuaria",aliases:["campo","semillas","agro","forrajeria"]},{id:"informatica",name:"Informática",aliases:["computacion","pc","tecnologia"]},{id:"celulares",name:"Celulares y accesorios",aliases:["telefonos","fundas"]},{id:"lavanderia",name:"Lavandería",aliases:["lavado","ropa","tintoreria"]},{id:"imprenta",name:"Imprenta y gráfica",aliases:["impresiones","cartel","folleteria"]},{id:"fotografia",name:"Fotografía",aliases:["fotos","estudio","eventos"]},{id:"inmobiliaria",name:"Inmobiliaria",aliases:["propiedades","alquileres"]},{id:"transporte",name:"Transporte y fletes",aliases:["flete","mudanza","envios"]},{id:"construccion",name:"Servicios de construcción",aliases:["albanil","obra"]},{id:"electricista",name:"Electricidad",aliases:["electricista","instalaciones"]},{id:"plomeria",name:"Plomería y gas",aliases:["plomero","gasista","canerias"]},{id:"refrigeracion",name:"Refrigeración y aire",aliases:["aire acondicionado"]},{id:"cerrajeria",name:"Cerrajería",aliases:["llaves","cerraduras"]},{id:"otro",name:"Otro rubro",aliases:["otros"]}];function oa(a,r=5){const d=a.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");if(d.length===0)return[];const c=t=>t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");return ra.filter(t=>[t.name,...t.aliases??[]].map(c).some(x=>x.includes(d))).sort((t,h)=>{const x=c(t.name).startsWith(d),k=c(h.name).startsWith(d);return x!==k?x?-1:1:t.name.localeCompare(h.name,"es")}).slice(0,r)}const le="lafranciago:comercios",na=new Set;let $=[],oe=!1;const ta=()=>na.forEach(a=>a()),la=()=>{try{const a=window.localStorage.getItem(le);if(!a)return[];const r=JSON.parse(a);return Array.isArray(r)?r:[]}catch{return[]}},da=()=>{try{window.localStorage.setItem(le,JSON.stringify($))}catch{}},ca=()=>{oe||(oe=!0,$=la())},ma=a=>a.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");function pa(a){ca();const r=ma(a.name)||"comercio",d=new Set([...H,...$].map(h=>h.id));let c=r,y=2;for(;d.has(c);)c=`${r}-${y}`,y+=1;const t={id:c,name:a.name,category:a.category,categoryId:a.categoryId,address:a.address,phone:a.phone,hours:a.hours||"A confirmar",distanceKm:0,rating:0,openNow:!1,delivery:!0,pickup:!0,minOrder:0,summary:a.description||`${a.category} en La Francia.`,tags:a.zone?[a.zone]:[],icon:H[0].icon,featuredProducts:[],email:a.email,status:"pendiente",registeredAt:new Date().toISOString()};return $=[t,...$],da(),ta(),t}const ua=i.div`
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
`;const ha=i.div`
  position: relative;
`,ga=i.div`
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
`,xa=i.button`
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
`,ja=i.button`
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
`,ba=i.ol`
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`,fa=i.li`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:a})=>a.spacing[2]};
`,ya=i.div`
  display: grid;
  justify-items: center;
  gap: 0.25rem;
`,va=i.span`
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
`,Sa=i.span`
  width: 2px;
  flex: 1 1 auto;
  min-height: 1.5rem;
  border-radius: 2px;
  background: ${({theme:a})=>a.color.border};
`,$a=i.div`
  display: grid;
  gap: 0.15rem;
  padding-bottom: ${({theme:a})=>a.spacing[3]};
  min-width: 0;
`,za=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spacing[2]};
`,wa=i.span`
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.sm};
  font-weight: ${({theme:a})=>a.typography.weight.bold};
`,Ca=i.span`
  flex: 0 0 auto;
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  white-space: nowrap;
`,Fa=i.span`
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.35;
`,Ia=i.span`
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
`,V=i.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[1]};
  margin-bottom: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.success};
  background: ${({theme:a})=>a.color.surfaceMuted};

  &[data-tono='error'] {
    border-color: ${({theme:a})=>a.color.danger};
  }
`,ne=i.strong`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  color: ${({theme:a})=>a.color.success};
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.base};
`,ka=i.span`
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
`,te=[{id:"step-1",title:"Completás el formulario",text:"CUIT, razón social, rubro y dirección. Te lleva unos minutos.",owner:"Vos",duration:"5 min"},{id:"step-2",title:"Subís logo y fotos",text:"Logo del comercio y, si querés, fotos y un video del local.",owner:"Vos",duration:"5 min"},{id:"step-3",title:"Revisamos los datos",text:"Verificamos el CUIT y que el comercio exista en La Francia.",owner:"LaFranciaGO",duration:"Hasta 48 h hábiles"},{id:"step-4",title:"Cargás tus productos",text:"Con la cuenta aprobada, sumás el catálogo con precios y stock.",owner:"Vos",duration:"A tu ritmo"},{id:"step-5",title:"Tu comercio queda publicado",text:"Aparecés en el buscador y en Inicio, y empezás a recibir pedidos.",owner:"LaFranciaGO",duration:"Inmediato"}],Ta=a=>a.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Ma=a=>{const r=a.replace(/\D/g,"").slice(0,11);return r.length<=2?r:r.length<=10?`${r.slice(0,2)}-${r.slice(2)}`:`${r.slice(0,2)}-${r.slice(2,10)}-${r.slice(10)}`};function Da(){const[a,r]=u.useState(""),[d,c]=u.useState(""),[y,t]=u.useState(!1),[h,x]=u.useState(""),[k,T]=u.useState(!1),{photos:z,video:M,error:O,processing:D,addPhotos:de,addVideo:ce,removePhoto:me,removeVideo:pe}=He(),[w,ue]=u.useState(null),[he,ge]=u.useState(!1),[P,B]=u.useState(!1),[N,G]=u.useState(null),U=u.useMemo(()=>oa(d),[d]),xe=async s=>{if(s.preventDefault(),P)return;const b=new FormData(s.currentTarget),m=g=>String(b.get(g)??"").trim(),E=m("razonSocial");if(!E||!d.trim())return;const p={nombre:m("nombreComercial")||E,razonSocial:E,cuit:a,rubro:d.trim(),rubroId:Ta(d),direccion:h||m("direccion"),telefono:m("telefono"),email:m("email"),horario:m("horario"),zona:m("zona"),descripcion:m("descripcion"),redes:m("social"),mediosPago:m("pagos")};if(!Oe()){ue(pa({name:p.nombre,category:p.rubro,categoryId:p.rubroId,address:p.direccion,phone:p.telefono,email:p.email,hours:p.horario,zone:p.zona,description:p.descripcion})),window.scrollTo({top:0,behavior:"smooth"});return}B(!0),G(null);try{const g=await Promise.all(z.map(async(je,be)=>{const{url:fe}=await De.subir(je.blob,`local-${be}.webp`);return fe}));await Be.crear("comercio",{...p,fotos:g}),ge(!0),window.scrollTo({top:0,behavior:"smooth"})}catch(g){G(g instanceof Ne&&g.status===401?"Necesitás iniciar sesión para postular tu comercio.":g instanceof Error?g.message:"No pudimos enviar la postulación.")}finally{B(!1)}};return e.jsxs(ye,{showSearch:!1,children:[e.jsx(_,{children:e.jsx(Q,{children:e.jsxs(ve,{children:[e.jsx(Se,{children:"Alta de comercio"}),e.jsx($e,{children:"Formularios preparados para publicar y cobrar."}),e.jsx(ze,{children:"Pedimos lo mínimo obligatorio para dejar al comercio listo y sumamos campos opcionales para mejorar presencia, soporte y conversión."})]})})}),e.jsx(_,{children:e.jsx(Q,{children:e.jsxs(ua,{children:[e.jsxs(we,{children:[he?e.jsxs(V,{role:"status",children:[e.jsxs(ne,{children:[e.jsx(ae,{size:18,"aria-hidden":"true"}),"Postulación enviada"]}),e.jsx(v,{children:"La estamos revisando. Si falta algo te lo pedimos por acá mismo, y cuando aprobemos vas a poder cargar tus productos."})]}):null,N?e.jsx(V,{role:"alert","data-tono":"error",children:e.jsx(v,{children:N})}):null,w?e.jsxs(V,{role:"status",children:[e.jsxs(ne,{children:[e.jsx(ae,{size:18,"aria-hidden":"true"}),w.name," quedó registrado"]}),e.jsxs(v,{children:["Lo estamos revisando: cuando aprobemos los datos vas a poder cargar tus productos y el comercio aparece en el buscador. Te avisamos por mail a"," ",e.jsx("strong",{children:w.email||"tu casilla"}),"."]}),e.jsxs(ka,{children:["Código de seguimiento: ",e.jsx("strong",{children:w.id})]})]}):null,e.jsx("form",{onSubmit:xe,children:e.jsxs(A,{children:[e.jsx(f,{children:"Datos obligatorios"}),e.jsxs(q,{children:[e.jsxs(n,{htmlFor:"business-tax",children:[e.jsxs(o,{children:[e.jsx(Ye,{size:16,"aria-hidden":"true"}),"CUIT / CUIL"]}),e.jsx(l,{id:"business-tax",type:"text",inputMode:"numeric",placeholder:"20-12345678-9",value:a,onChange:s=>r(Ma(s.target.value)),maxLength:13,required:!0}),e.jsx(S,{children:"Validación fiscal para publicar como comercio."})]}),e.jsxs(n,{htmlFor:"business-name",children:[e.jsxs(o,{children:[e.jsx(Xe,{size:16,"aria-hidden":"true"}),"Razón social"]}),e.jsx(l,{id:"business-name",name:"razonSocial",type:"text",placeholder:"La Huerta S.A.",required:!0})]}),e.jsxs(n,{htmlFor:"business-address",children:[e.jsxs(o,{children:[e.jsx(se,{size:16,"aria-hidden":"true"}),"Dirección"]}),e.jsx(l,{id:"business-address",name:"direccion",type:"text",placeholder:"Av. Principal 123",required:!0})]}),e.jsxs(n,{htmlFor:"business-phone",children:[e.jsxs(o,{children:[e.jsx(Ze,{size:16,"aria-hidden":"true"}),"Teléfono"]}),e.jsx(l,{id:"business-phone",name:"telefono",type:"tel",placeholder:"+54 3573 400-201",required:!0})]}),e.jsxs(n,{htmlFor:"business-email",children:[e.jsxs(o,{children:[e.jsx(ea,{size:16,"aria-hidden":"true"}),"Email"]}),e.jsx(l,{id:"business-email",name:"email",type:"email",placeholder:"ventas@lahuerta.com",required:!0})]}),e.jsxs(n,{htmlFor:"business-category",children:[e.jsxs(o,{children:[e.jsx(aa,{size:16,"aria-hidden":"true"}),"Rubro principal"]}),e.jsxs(ha,{children:[e.jsx(l,{id:"business-category",type:"text",autoComplete:"off",placeholder:"Escribí tu rubro (ej: panadería)",value:d,onChange:s=>{c(s.target.value),t(!0)},onFocus:()=>t(!0),onBlur:()=>window.setTimeout(()=>t(!1),140),required:!0}),y&&U.length>0?e.jsx(ga,{"aria-label":"Rubros sugeridos",children:U.map(s=>e.jsx(xa,{type:"button",onClick:()=>{c(s.name),t(!1)},children:s.name},s.id))}):null]}),e.jsx(S,{children:'Escribí una letra y elegí de la lista. Si no está, poné "Otro rubro".'})]}),e.jsxs(n,{htmlFor:"business-password",children:[e.jsxs(o,{children:[e.jsx(ie,{size:16,"aria-hidden":"true"}),"Contraseña"]}),e.jsx(l,{id:"business-password",type:"password",placeholder:"••••••••",required:!0})]}),e.jsxs(n,{htmlFor:"business-password-repeat",children:[e.jsxs(o,{children:[e.jsx(ie,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),e.jsx(l,{id:"business-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]}),e.jsx(C,{children:e.jsx(F,{children:e.jsxs(J,{children:[e.jsx(f,{children:"Foto de perfil / logo"}),e.jsxs(Ce,{htmlFor:"business-logo",children:[e.jsx(Fe,{children:"Subí tu logo o foto de perfil"}),e.jsx(Ie,{children:"PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio."}),e.jsx(_e,{id:"business-logo",accept:"image/*"})]})]})})}),e.jsx(C,{children:e.jsx(F,{children:e.jsxs(A,{children:[e.jsx(f,{children:"Opcionales recomendados"}),e.jsx(v,{children:"Estos campos mejoran el perfil, el SEO interno y el soporte con clientes."}),e.jsxs(q,{children:[e.jsxs(n,{htmlFor:"business-display-name",children:[e.jsx(o,{children:"Nombre comercial"}),e.jsx(l,{id:"business-display-name",name:"nombreComercial",type:"text",placeholder:"La Huerta"})]}),e.jsxs(n,{htmlFor:"business-hours",children:[e.jsx(o,{children:"Horario de atención"}),e.jsx(l,{id:"business-hours",name:"horario",type:"text",placeholder:"Lun a sáb 08:00 - 21:30"})]}),e.jsxs(n,{htmlFor:"business-map",children:[e.jsx(o,{children:"Mapa / referencia"}),e.jsx(l,{id:"business-map",type:"text",placeholder:"Ubicación exacta para el mapa",value:h,onChange:s=>x(s.target.value)}),e.jsxs(ja,{type:"button",onClick:()=>T(!0),children:[e.jsx(se,{size:16,"aria-hidden":"true"}),"Agregar dirección de maps"]})]})]}),e.jsxs(n,{htmlFor:"business-description",children:[e.jsx(o,{children:"Descripción del negocio"}),e.jsx(ke,{id:"business-description",name:"descripcion",placeholder:"Contá qué vendés, qué te diferencia y cómo entregás."})]})]})})}),e.jsx(C,{children:e.jsx(F,{children:e.jsxs(A,{children:[e.jsx(f,{children:"Operación y publicación"}),e.jsxs(Te,{children:[e.jsx(I,{children:"Delivery"}),e.jsx(I,{children:"Retiro"}),e.jsx(I,{children:"Página pública"}),e.jsx(I,{children:"Sponsor interno"})]}),e.jsxs(q,{children:[e.jsxs(n,{htmlFor:"business-method",children:[e.jsx(o,{children:"Método de publicación"}),e.jsxs(Me,{id:"business-method",defaultValue:"premium",children:[e.jsx("option",{value:"premium",children:"Cuenta paga / Premium"}),e.jsx("option",{value:"trial",children:"Prueba inicial"}),e.jsx("option",{value:"manual",children:"Alta manual"})]})]}),e.jsxs(n,{htmlFor:"business-zone",children:[e.jsx(o,{children:"Zona de cobertura"}),e.jsx(l,{id:"business-zone",name:"zona",type:"text",placeholder:"Centro, Barrio Norte, Ruta 19..."})]}),e.jsxs(n,{htmlFor:"business-social",children:[e.jsx(o,{children:"Instagram o Facebook"}),e.jsx(l,{id:"business-social",name:"social",type:"text",placeholder:"@lahuerta"}),e.jsx(S,{children:"Se muestra en el perfil como referencia. El pedido se cierra siempre dentro de la app."})]}),e.jsxs(n,{htmlFor:"business-payments",children:[e.jsx(o,{children:"Métodos de pago"}),e.jsx(l,{id:"business-payments",name:"pagos",type:"text",placeholder:"Efectivo, débito, transferencia..."})]})]}),e.jsxs(W,{children:[e.jsx(o,{as:"span",children:"Fotos del local"}),e.jsxs(Y,{children:[z.length,"/",j.maxImages]})]}),e.jsxs(Qe,{children:[z.map(s=>e.jsxs(X,{children:[e.jsx(Je,{src:s.previewUrl,alt:""}),e.jsx(Z,{type:"button",onClick:()=>me(s.id),"aria-label":"Quitar foto",children:e.jsx(re,{size:14,"aria-hidden":"true"})})]},s.id)),z.length<j.maxImages?e.jsxs(ee,{as:"label","data-busy":D,children:[e.jsx(sa,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:D?"Optimizando…":"Agregar"}),e.jsx("input",{type:"file",accept:Ge,multiple:!0,hidden:!0,onChange:s=>{de(s.target.files),s.target.value=""}})]}):null]}),e.jsxs(S,{children:["Se redimensionan a ",j.maxImageDimension,"px y se comprimen solas: cada foto queda en menos de"," ",K(j.maxImageBytes),"."]}),e.jsxs(W,{children:[e.jsx(o,{as:"span",children:"Video del local"}),e.jsxs(Y,{children:[M?1:0,"/",j.maxVideos]})]}),M?e.jsxs(X,{"data-video":"true",children:[e.jsx(Ke,{src:M.url,controls:!0,preload:"metadata"}),e.jsx(Z,{type:"button",onClick:pe,"aria-label":"Quitar video",children:e.jsx(re,{size:14,"aria-hidden":"true"})})]}):e.jsxs(ee,{as:"label","data-wide":"true",children:[e.jsx(ia,{size:20,"aria-hidden":"true"}),e.jsx("span",{children:"Agregar video"}),e.jsx("input",{type:"file",accept:Ue,hidden:!0,onChange:s=>{ce(s.target.files),s.target.value=""}})]}),e.jsxs(S,{children:["Hasta ",j.maxVideoSeconds," segundos y"," ",K(j.maxVideoBytes),". Mostralo recorriendo el local: ayuda más que cualquier descripción."]}),O?e.jsx(We,{children:O}):null]})})}),e.jsxs(Pe,{children:[e.jsx(Ee,{type:"submit",disabled:P,children:P?"Enviando…":"Enviar postulación"}),e.jsx(Ae,{to:"/comercios",children:"Volver al marketplace"})]})]})})]}),e.jsxs(qe,{children:[e.jsxs(J,{children:[e.jsx(f,{children:"Qué gana el comercio"}),e.jsxs(Re,{children:[e.jsxs(R,{children:[e.jsx(L,{}),e.jsx("span",{children:"Presencia en la aplicación con tarjetas, sponsor y carrusel de promociones."})]}),e.jsxs(R,{children:[e.jsx(L,{}),e.jsx("span",{children:"Perfil propio con logo, horarios, stock, delivery y retiro."})]}),e.jsxs(R,{children:[e.jsx(L,{}),e.jsx("span",{children:"Notificaciones por producto, comercio y oferta para fidelizar usuarios."})]})]})]}),e.jsx(C,{children:e.jsx(F,{children:e.jsxs(Le,{children:[e.jsx(f,{children:"Proceso de alta"}),e.jsx(v,{children:"Desde que empezás hasta que recibís el primer pedido."}),e.jsx(ba,{children:te.map((s,b)=>e.jsxs(fa,{children:[e.jsxs(ya,{children:[e.jsx(va,{"data-owner":s.owner==="Vos"?"user":"app",children:b+1}),b<te.length-1?e.jsx(Sa,{}):null]}),e.jsxs($a,{children:[e.jsxs(za,{children:[e.jsx(wa,{children:s.title}),e.jsx(Ca,{children:s.duration})]}),e.jsx(Fa,{children:s.text}),e.jsx(Ia,{"data-owner":s.owner==="Vos"?"user":"app",children:s.owner})]})]},s.id))})]})})})]})]})})}),e.jsx(Ve,{open:k,currentId:"",startOnNew:!0,onClose:()=>T(!1),onSelect:(s,b)=>{x(b),T(!1)}})]})}export{Da as CommerceRegistrationScreen};
