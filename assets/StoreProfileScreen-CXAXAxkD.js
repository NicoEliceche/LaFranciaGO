import{q as r,j as a,A as K,B as W,D as X,G as Z,H as L,I as te,J as se,K as ne,L as de,N as le,O as ce,Q as pe,R as ge,h as me,T as ue,V as be,f as he,W as fe,Y as ye,M as xe,Z as B,S as F,_ as $e,$ as we,a0 as je,a1 as ke,a2 as ve,a3 as Ce,a4 as ze,v as U,a5 as Se,n as D,E as Pe,p as Le,a6 as Ie,a7 as Me,d as I,a as qe}from"./index-BqcRuPDG.js";import{r as l,L as Be,h as Fe,f as Ae}from"./react-D_B_6qYb.js";import{p as Ee,s as N,m as R}from"./saleUnits-CLP-TCsg.js";import{M as He,a as Te}from"./cartStore-Bl4RJEoU.js";import{C as Oe}from"./clock-3-BwzsxhKL.js";const Ue=r.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,De=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Ne=r.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.25;
  color: ${({theme:e})=>e.color.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Re=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Qe=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Ve=r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Ye=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  flex: 0 0 auto;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,Q=r.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;

  /* El círculo se ve chico, pero el área que responde al dedo
     llega a 44px como pide el sistema de diseño. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:disabled {
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`,_e=r.span`
  min-width: 1.5rem;
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.primary};
`,Ge=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 100%;
  min-height: 2.25rem;
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }

  /* Confirmación breve al sumar al pedido. */
  &[data-added='true'] {
    background: ${({theme:e})=>e.color.success};
  }
`,Je=r.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
`,Ke=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,C=1;function V({name:e,price:s,saleUnit:p,categoryId:h,badge:n,quantity:b,onAdd:f,priority:y}){const[c,m]=l.useState(C),[j,g]=l.useState(!1),$=()=>{f(c),m(C),g(!0),window.setTimeout(()=>g(!1),1400)};return a.jsxs(Ue,{"data-active":b>0,children:[a.jsxs(K,{$ratio:"1 / 1",children:[a.jsx(W,{src:X(h),alt:e,loading:y?"eager":"lazy"}),n?a.jsx(Z,{children:a.jsx(Ve,{children:n})}):null]}),a.jsxs(De,{children:[a.jsx(Ne,{children:e}),a.jsxs(Re,{children:[a.jsxs(Qe,{children:[L(s),p&&p!=="unidad"?a.jsxs(Ke,{children:[" ",Ee(p)]}):null]}),a.jsxs(Ye,{children:[a.jsx(Q,{type:"button",onClick:()=>m(w=>Math.max(C,w-1)),disabled:c<=C,"aria-label":`Quitar cantidad de ${e}`,children:a.jsx(He,{size:16,"aria-hidden":"true"})}),a.jsx(_e,{"aria-live":"polite",children:N(p,c-C)}),a.jsx(Q,{type:"button",onClick:()=>m(w=>Math.min(w+1,R(p)+C)),disabled:c-C>=R(p),"aria-label":`Agregar cantidad de ${e}`,children:a.jsx(te,{size:16,"aria-hidden":"true"})})]})]}),a.jsx(Ge,{type:"button",onClick:$,"data-added":j,children:j?a.jsxs(a.Fragment,{children:[a.jsx(se,{size:15,"aria-hidden":"true"}),"Agregado"]}):"Agregar al carrito"}),b>0?a.jsxs(Je,{children:[N(p,b-C)," en el pedido"]}):null]})]})}const We=r.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,Xe=r.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Ze=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
`,ea=r.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,aa=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,oa=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,A=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.85rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,ra=r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  /* Verde más profundo: blanco sobre success daba 3.5:1, por debajo de AA. */
  background: #0a7a43;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-open='false'] {
    background: ${({theme:e})=>e.color.textSoft};
  }
`,ia=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.warning};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;function ta({id:e,name:s,category:p,categoryId:h,address:n,hours:b,distanceKm:f,rating:y,openNow:c,minOrder:m}){return a.jsxs(We,{children:[a.jsxs(K,{$ratio:"21 / 9",children:[a.jsx(W,{src:X(h),alt:p,loading:"eager"}),a.jsxs(Z,{children:[a.jsx(ra,{"data-open":c,children:c?"Abierto ahora":"Cerrado"}),y!==void 0?a.jsxs(ia,{children:[a.jsx(ne,{size:13,"aria-hidden":"true",fill:"currentColor"}),y.toFixed(1)]}):null]}),a.jsx(Xe,{children:a.jsx(de,{$size:"3.5rem",$tone:ce(e),children:le(s)})})]}),a.jsxs(Ze,{children:[a.jsx(ea,{children:s}),a.jsxs(aa,{children:[p,f!==void 0?` · ${pe(f)}`:""]}),a.jsxs(oa,{children:[a.jsxs(A,{children:[a.jsx(Oe,{size:14,"aria-hidden":"true"}),b]}),a.jsxs(A,{children:[a.jsx(ge,{size:14,"aria-hidden":"true"}),n]}),a.jsxs(A,{children:["Mínimo ",L(m)]})]})]})]})}const Y=["blue","green","orange","violet","red","slate"];function _(e,s){if(e.tipo==="descuento")return{id:e.id,tipo:"descuento",titulo:e.titulo,porcentaje:e.porcentaje,precioFinal:Math.round(s*(100-(e.porcentaje??0)))/100,cantidad:null,etiqueta:`${e.porcentaje}% off`};if(e.tipo==="cantidad")return{id:e.id,tipo:"cantidad",titulo:e.titulo,porcentaje:null,precioFinal:null,cantidad:e.cantidad,etiqueta:`${e.cantidad} x $${e.precioFinal.toLocaleString("es-AR")}`};const p=e.productos.length-1;return{id:e.id,tipo:"combo",titulo:e.titulo,porcentaje:null,precioFinal:null,cantidad:null,etiqueta:p>0?`Combo con ${p} más`:"En combo"}}function sa(e){const[s,p]=l.useState(null),[h,n]=l.useState(!0);return l.useEffect(()=>{if(!e||!me()){n(!1);return}let b=!0;return n(!0),ue.detalle(e).then(({comercio:f,categorias:y,productos:c,ofertas:m})=>{if(!b)return;const j=new Map;for(const t of m??[])for(const u of t.productos)j.has(u.id)||j.set(u.id,t);const g=(t,u,k)=>{var x;const v=j.get(t.id)??null;return{id:t.id,name:t.nombre,description:t.descripcion??"",categoryId:t.categoria_id??"general",categoryLabel:u,price:t.precio,saleUnit:t.unidad_venta,tone:Y[k%Y.length],badge:v?_(v,t.precio).etiqueta:void 0,suggestions:[],foto:((x=t.fotos)==null?void 0:x[0])??null,stock:t.stock,oferta:v?_(v,t.precio):null}},$=y.map(t=>({id:t.id,label:t.nombre,description:"",products:c.filter(u=>u.categoria_id===t.id).map((u,k)=>g(u,t.nombre,k))})).filter(t=>t.products.length>0),w=c.filter(t=>!t.categoria_id||!y.some(u=>u.id===t.categoria_id));w.length>0&&$.push({id:"otros",label:"Otros productos",description:"",products:w.map((t,u)=>g(t,"Otros",u))}),p({intro:f.descripcion??"",secciones:$,ofertas:m??[],error:!1})}).catch(()=>{b&&p({intro:"",secciones:[],ofertas:[],error:!0})}).finally(()=>{b&&n(!1)}),()=>{b=!1}},[e]),{intro:(s==null?void 0:s.intro)??"",secciones:(s==null?void 0:s.secciones)??[],ofertas:(s==null?void 0:s.ofertas)??[],error:(s==null?void 0:s.error)??!1,cargando:h}}r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;r.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &[data-open='true'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`;const na=r.div`
  position: fixed;
  left: 50%;
  bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[2]} + env(safe-area-inset-bottom));
  z-index: ${({theme:e})=>e.zIndex.bottomNav-1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  width: min(100% - 2rem, 30rem);
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]}
    ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceDark};
  color: ${({theme:e})=>e.color.onDark};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  transform: translateX(-50%);

  /* En oscuro el negro de la barra se funde con el fondo:
     se despega con borde y una sombra más marcada. */
  ${({theme:e})=>e.mode==="dark"&&be`
      background: linear-gradient(135deg, #0B1430 0%, #10224F 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`,da=r.div`
  display: grid;
  gap: 0;
  min-width: 0;
`,la=r.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,ca=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
`,pa=r(Be)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 0 0 auto;
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ga=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};

  > svg {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.primary};
  }
`,ma=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,ua=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ba=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,ha=r.button`
  flex: 0 0 auto;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,G={"almacen-juan":{intro:"Bebidas, almacén y limpieza para resolver compras rápidas sin salir del comercio.",sections:[{id:"bebidas",label:"Bebidas",description:"Para el combo de siempre y el finde.",products:[{id:"coca-cola-225",name:"Coca Cola 2,25 L",description:"La botella que más sale para el carrito diario.",categoryId:"bebidas",categoryLabel:"Bebidas",price:3500,tone:"blue",badge:"Más pedido",suggestions:["fernet-750","hielo-2kg"]},{id:"fernet-750",name:"Fernet 750 ml",description:"Clásico de reunión para el fin de semana.",categoryId:"bebidas",categoryLabel:"Bebidas",price:12900,tone:"green",badge:"Combo finde",suggestions:["coca-cola-225","hielo-2kg"]},{id:"hielo-2kg",name:"Hielo 2 kg",description:"Bolsita lista para acompañar bebidas frías.",categoryId:"bebidas",categoryLabel:"Bebidas",price:1200,tone:"slate",badge:"Siempre útil",suggestions:["coca-cola-225","fernet-750"]}]},{id:"almacen",label:"Almacén",description:"Básicos de todos los días.",products:[{id:"yerba-1kg",name:"Yerba mate 1 kg",description:"Repuesto de todos los días para la alacena.",categoryId:"almacen",categoryLabel:"Almacén",price:4650,tone:"orange",badge:"Diario",suggestions:["azucar-1kg","galletitas-mixtas"]},{id:"fideos-500",name:"Fideos 500 g",description:"Una base simple para resolver la cena.",categoryId:"almacen",categoryLabel:"Almacén",price:980,tone:"violet",badge:"Base",suggestions:["salsa-tomate","queso-rallado"]},{id:"galletitas-mixtas",name:"Galletitas mixtas",description:"Para la merienda o el kiosco de la casa.",categoryId:"almacen",categoryLabel:"Almacén",price:1450,tone:"blue",badge:"Snack",suggestions:["yerba-1kg","fideos-500"]}]},{id:"limpieza",label:"Limpieza",description:"Casa y cocina en un solo pedido.",products:[{id:"detergente-900",name:"Detergente 900 ml",description:"Para dejar la cocina lista en una pasada.",categoryId:"limpieza",categoryLabel:"Limpieza",price:2450,tone:"red",badge:"Hogar",suggestions:["esponja-duo","lavandina-1l"]},{id:"lavandina-1l",name:"Lavandina 1 L",description:"Clave para limpieza pesada del hogar.",categoryId:"limpieza",categoryLabel:"Limpieza",price:1790,tone:"blue",badge:"Sanitiza",suggestions:["detergente-900","esponja-duo"]},{id:"esponja-duo",name:"Esponja duo",description:"Pequeño básico que completa cualquier limpieza.",categoryId:"limpieza",categoryLabel:"Limpieza",price:690,tone:"orange",badge:"Complemento",suggestions:["detergente-900","lavandina-1l"]}]}]},"panaderia-la-esquina":{intro:"Pan fresco, facturas y tortas listas para el desayuno, la merienda y los encargos.",sections:[{id:"pan",label:"Pan",description:"Pan fresco y de salida rápida.",products:[{id:"pan-flauta",saleUnit:"peso",name:"Pan flauta x 6",description:"Salida clásica para la mesa de todos los días.",categoryId:"pan",categoryLabel:"Pan",price:750,tone:"orange",badge:"Recién hecho",suggestions:["manteca-200","medialunas-x6"]},{id:"pan-lactal",saleUnit:"peso",name:"Pan lactal",description:"Práctico para tostadas y viandas.",categoryId:"pan",categoryLabel:"Pan",price:1850,tone:"blue",badge:"Diario",suggestions:["manteca-200","mermelada-frutilla"]},{id:"tostadas-rusticas",name:"Tostadas ricas",description:"Para acompañar el mate sin vueltas.",categoryId:"pan",categoryLabel:"Pan",price:990,tone:"slate",badge:"Merienda",suggestions:["pan-lactal","mermelada-frutilla"]}]},{id:"facturas",label:"Facturas",description:"La bandeja de siempre.",products:[{id:"medialunas-x6",saleUnit:"docena",name:"Medialunas x 6",description:"Perfectas para salir con café o mate.",categoryId:"facturas",categoryLabel:"Facturas",price:2400,tone:"violet",badge:"Favoritas",suggestions:["cafe-molido","facturas-surtidas"]},{id:"facturas-surtidas",saleUnit:"docena",name:"Facturas surtidas",description:"Variadas para compartir en familia.",categoryId:"facturas",categoryLabel:"Facturas",price:1900,tone:"orange",badge:"Compartir",suggestions:["medialunas-x6","cafe-molido"]},{id:"cafe-molido",name:"Café molido",description:"El acompañamiento que hace crecer el ticket.",categoryId:"facturas",categoryLabel:"Facturas",price:3600,tone:"red",badge:"Combo",suggestions:["medialunas-x6","facturas-surtidas"]}]},{id:"tortas",label:"Tortas",description:"Pedidos especiales y celebraciones.",products:[{id:"torta-cumple",name:"Torta de cumpleaños",description:"Lista para encargar con anticipación.",categoryId:"tortas",categoryLabel:"Tortas",price:12e3,tone:"red",badge:"Encargo",suggestions:["velas","facturas-surtidas"]},{id:"budin-vainilla",name:"Budin de vainilla",description:"Para la mesa dulce o la merienda.",categoryId:"tortas",categoryLabel:"Tortas",price:1850,tone:"green",badge:"Dulce",suggestions:["cafe-molido","medialunas-x6"]},{id:"velas",name:"Velas numeradas",description:"Complemento simple para el pedido.",categoryId:"tortas",categoryLabel:"Tortas",price:650,tone:"blue",badge:"Extra",suggestions:["torta-cumple","budin-vainilla"]}]}]},"farmacia-centro":{intro:"Cuidado personal, salud básica y perfumería para resolver sin moverte de la app.",sections:[{id:"cuidado",label:"Cuidado",description:"Productos de uso diario.",products:[{id:"shampoo-400",name:"Shampoo 400 ml",description:"Limpieza cotidiana con buena relación precio uso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:3950,tone:"blue",badge:"Precio bajo",suggestions:["acondicionador","jabon-liquido"]},{id:"jabon-liquido",name:"Jabon liquido",description:"Para baño y cocina en un solo paso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:1650,tone:"green",badge:"Básico",suggestions:["shampoo-400","acondicionador"]},{id:"acondicionador",name:"Acondicionador",description:"Complemento para el cabello de todos los días.",categoryId:"cuidado",categoryLabel:"Cuidado",price:4100,tone:"violet",badge:"Complemento",suggestions:["shampoo-400","protector-solar"]}]},{id:"bienestar",label:"Bienestar",description:"Cosas que se llevan rápido cuando hacen falta.",products:[{id:"omeprazol-20",name:"Omeprazol 20 mg",description:"Compra de rutina para tener a mano.",categoryId:"bienestar",categoryLabel:"Bienestar",price:7150,tone:"red",badge:"Salud",suggestions:["protector-solar","alcohol-gel"]},{id:"alcohol-gel",name:"Alcohol en gel",description:"Siempre útil para mochila o cartera.",categoryId:"bienestar",categoryLabel:"Bienestar",price:1850,tone:"blue",badge:"Práctico",suggestions:["omeprazol-20","protector-solar"]},{id:"protector-solar",name:"Protector solar",description:"Para cuidar la piel en la temporada larga.",categoryId:"bienestar",categoryLabel:"Bienestar",price:9200,tone:"orange",badge:"Temporada",suggestions:["alcohol-gel","omeprazol-20"]}]},{id:"perfumeria",label:"Perfumería",description:"Higiene y cuidado personal.",products:[{id:"desodorante",name:"Desodorante",description:"El complemento de todos los días.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:3250,tone:"slate",badge:"Uso diario",suggestions:["shampoo-400","jabon-liquido"]},{id:"crema-manos",name:"Crema de manos",description:"Para completar la compra de perfumería.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:2750,tone:"violet",badge:"Extra",suggestions:["desodorante","protector-solar"]},{id:"toallitas",name:"Toallitas húmedas",description:"Prácticas para mochila o changuito.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:1480,tone:"green",badge:"Complemento",suggestions:["desodorante","crema-manos"]}]}]},"carniceria-central":{intro:"Cortes frescos, milanesas y pedidos por kilo listos para armar el pedido completo.",sections:[{id:"cortes",label:"Cortes",description:"Para el almuerzo o la noche.",products:[{id:"bife-ancho",saleUnit:"pesoMedio",name:"Bife ancho",description:"Un corte protagonista para la compra principal.",categoryId:"cortes",categoryLabel:"Cortes",price:9900,tone:"red",badge:"Premium",suggestions:["asado-especial","picada-premium"]},{id:"asado-especial",saleUnit:"pesoMedio",name:"Asado especial",description:"Para el finde y las comidas largas.",categoryId:"cortes",categoryLabel:"Cortes",price:10900,tone:"orange",badge:"Finde",suggestions:["bife-ancho","hamburguesas-caseras"]},{id:"picada-premium",saleUnit:"pesoMedio",name:"Picada premium",description:"Para compartir sin complicarse.",categoryId:"cortes",categoryLabel:"Cortes",price:8400,tone:"violet",badge:"Compartir",suggestions:["asado-especial","bife-ancho"]}]},{id:"milanesas",label:"Milanesas",description:"La compra de siempre para resolver rápido.",products:[{id:"milanesas-kg",saleUnit:"pesoMedio",name:"Milanesas x kg",description:"Una de las salidas más prácticas de la carnicería.",categoryId:"milanesas",categoryLabel:"Milanesas",price:9100,tone:"blue",badge:"Mejor salida",suggestions:["hamburguesas-caseras","asado-especial"]},{id:"hamburguesas-caseras",name:"Hamburguesas caseras",description:"Para armar el pedido del día en un solo toque.",categoryId:"milanesas",categoryLabel:"Milanesas",price:6200,tone:"green",badge:"Listo para cocinar",suggestions:["milanesas-kg","asado-especial"]},{id:"pollo-entero",name:"Pollo entero",description:"Otro clásico para completar la compra.",categoryId:"milanesas",categoryLabel:"Milanesas",price:5450,tone:"orange",badge:"Clásico",suggestions:["milanesas-kg","bife-ancho"]}]},{id:"extras",label:"Extras",description:"Pedidos secundarios que completan el viaje.",products:[{id:"hielo-carniceria",name:"Hielo 2 kg",description:"Perfecto para acompañar el pedido del finde.",categoryId:"extras",categoryLabel:"Extras",price:1200,tone:"slate",badge:"Complemento",suggestions:["asado-especial","picada-premium"]},{id:"salsas",name:"Salsa parrillera",description:"El detalle que suma al pedido principal.",categoryId:"extras",categoryLabel:"Extras",price:980,tone:"red",badge:"Extra",suggestions:["bife-ancho","asado-especial"]},{id:"condimentos",name:"Condimentos",description:"Los básicos que completan la compra.",categoryId:"extras",categoryLabel:"Extras",price:690,tone:"violet",badge:"Básico",suggestions:["salsas","hielo-carniceria"]}]}]}},fa="almacen-juan",ya=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const J=r.button`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    color: ${({theme:e})=>e.color.text};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,xa=r.div`
  display: grid;
  /* Dos columnas ya en mobile: mismo tamaño de tarjeta que en Inicio,
     para que el catálogo se recorra de un vistazo. */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[3]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;r(I)`
  overflow: hidden;
  border-color: ${({theme:e,$active:s})=>s?"rgba(0, 71, 231, 0.24)":e.color.border};
  background: ${({theme:e,$active:s})=>s?e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.09), rgba(17, 26, 46, 0.98))":"linear-gradient(180deg, rgba(0, 71, 231, 0.05), rgba(255, 255, 255, 0.98))":e.color.surface};
  box-shadow: ${({theme:e,$active:s})=>s?e.shadow.md:e.shadow.sm};
`;r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 8.5rem;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.onPrimary};
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.36), transparent 22%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.72), rgba(37, 99, 235, 0.92));

  &[data-tone='green'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.36), transparent 22%),
      linear-gradient(135deg, rgba(15, 157, 88, 0.78), rgba(34, 197, 94, 0.92));
  }

  &[data-tone='orange'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(217, 119, 6, 0.78), rgba(245, 158, 11, 0.92));
  }

  &[data-tone='red'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(185, 28, 28, 0.78), rgba(239, 68, 68, 0.92));
  }

  &[data-tone='violet'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(124, 58, 237, 0.78), rgba(139, 92, 246, 0.92));
  }

  &[data-tone='slate'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.24), transparent 22%),
      linear-gradient(135deg, rgba(51, 65, 85, 0.78), rgba(100, 116, 139, 0.92));
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 7rem;
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[1]};
  }
`;r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`;r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.18);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 1.5rem;
    padding: 0 ${({theme:e})=>e.spacing[1]};
  }
`;r.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.onPrimary};
`;r.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    display: none;
  }
`;r(qe)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    display: none;
  }
`;r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    width: 100%;
  }
`;r(I)`
  position: sticky;
  top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
  align-self: start;
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;r(I)`
  overflow: hidden;
`;r(I)`
  border-style: dashed;
`;const $a=e=>G[e]??G[fa];function Sa(){var O;const{storeId:e=""}=Fe(),[s,p]=Ae(),{stores:h}=he(),n=l.useMemo(()=>h.find(o=>o.id===e)??fe(e)??h[0],[e,h]),{secciones:b}=sa(e),f=l.useMemo(()=>({intro:(n==null?void 0:n.summary)??"",sections:b.length>0?b:$a(e).sections}),[b,n,e]),y=s.get("pedido"),c=l.useMemo(()=>y?ye.find(o=>o.id===y&&o.storeId===n.id)??null:null,[y,n.id]),m=l.useMemo(()=>{if(!c)return f;const o=new Set(c.items.map(i=>i.productId));return{...f,sections:f.sections.map(i=>({...i,products:i.products.filter(d=>o.has(d.id))})).filter(i=>i.products.length>0)}},[f,c]),j=l.useMemo(()=>c?Object.fromEntries(c.items.map(o=>[o.productId,o.quantity])):{},[c]),g=l.useMemo(()=>m.sections.flatMap(o=>o.products),[m]),[$,w]=l.useState(""),[t,u]=l.useState("all"),[k,v]=l.useState(((O=g[0])==null?void 0:O.id)??""),[x,E]=l.useState({});l.useEffect(()=>{var i;const o=Object.fromEntries(g.map(d=>[d.id,0]));w(""),u("all"),v(((i=g[0])==null?void 0:i.id)??""),E(o)},[g,n.id]);const P=l.useMemo(()=>{const o=$.trim();return m.sections.filter(i=>t==="all"||i.id===t).map(i=>({...i,products:i.products.filter(d=>wa(o,i,d))})).filter(i=>i.products.length>0)},[t,m,$]),z=l.useMemo(()=>P.flatMap(o=>o.products),[P]);l.useEffect(()=>{z.length!==0&&(z.some(o=>o.id===k)||v(z[0].id))},[k,z]);const M=l.useMemo(()=>z.find(o=>o.id===k)??z[0]??g[0],[g,k,z]),H=l.useMemo(()=>!M||c?[]:M.suggestions.map(o=>g.find(i=>i.id===o)).filter(o=>!!o).slice(0,4),[g,M]),q=l.useMemo(()=>Object.values(x).reduce((o,i)=>o+i,0),[x]),ee=l.useMemo(()=>g.reduce((o,i)=>o+i.price*(x[i.id]??0),0),[g,x]);l.useMemo(()=>g.map(o=>({...o,quantity:x[o.id]??0})).filter(o=>o.quantity>0).sort((o,i)=>i.quantity-o.quantity).slice(0,3),[g,x]),l.useMemo(()=>{const o=$.trim().toLowerCase(),i=o?m.sections.filter(d=>d.label.toLowerCase().includes(o)||d.description.toLowerCase().includes(o)):m.sections;return i.length>0?i.slice(0,3):m.sections.slice(0,3)},[m.sections,$]);const ae=()=>{const o=new URLSearchParams(s);o.delete("pedido"),p(o,{replace:!0})},oe=o=>{o.preventDefault()},re=(o,i)=>{E(d=>{const S=Math.max(0,(d[o]??0)+i);return{...d,[o]:S}}),v(o)},T=(o,i=1)=>{const d=g.find(S=>S.id===o);d&&(Te({id:d.id,product:d.name,store:n.name,storeId:n.id,categoryId:d.categoryId,price:d.price,saleUnit:d.saleUnit},i),re(o,i))};return a.jsxs(xe,{showSearch:!1,children:[a.jsx(B,{children:a.jsx(F,{children:a.jsx(ta,{id:n.id,name:n.name,category:n.category,categoryId:n.id,address:n.address,hours:n.hours,distanceKm:n.distanceKm,rating:n.rating,openNow:n.openNow,minOrder:n.minOrder})})}),a.jsx(B,{children:a.jsx(F,{children:a.jsxs(ya,{children:[c?a.jsxs(ga,{children:[a.jsx($e,{size:20,"aria-hidden":"true"}),a.jsxs(ma,{children:[a.jsxs(ua,{children:["Productos del pedido ",c.code]}),a.jsxs(ba,{children:[c.date," · ",L(c.total)]})]}),a.jsx(ha,{type:"button",onClick:ae,children:"Ver todo el comercio"})]}):null,a.jsx(we,{onSubmit:oe,children:a.jsxs(je,{htmlFor:"store-search",children:[a.jsx(ke,{children:"Buscar productos dentro del comercio"}),a.jsxs(ve,{children:[a.jsx(Ce,{size:18,"aria-hidden":"true"}),a.jsx(ze,{id:"store-search",value:$,onChange:o=>w(o.target.value),placeholder:`Buscar en ${n.name}...`,"aria-label":"Buscar productos dentro del comercio"})]})]})}),a.jsxs(U,{"aria-label":"Categorías del comercio",children:[a.jsx(J,{type:"button","data-active":t==="all",onClick:()=>u("all"),children:"Todas"}),m.sections.map(o=>a.jsx(J,{type:"button","data-active":t===o.id,onClick:()=>u(o.id),children:o.label},o.id))]}),P.length>0?P.map((o,i)=>a.jsxs(Se,{children:[a.jsx(D,{title:o.label,subtitle:o.description}),a.jsx(xa,{children:o.products.map((d,S)=>a.jsx(V,{name:d.name,price:d.price,saleUnit:d.saleUnit,categoryId:d.categoryId,badge:c?`${j[d.id]??1} u.`:d.badge,quantity:x[d.id]??0,onAdd:ie=>T(d.id,ie),priority:i===0&&S<4},d.id))})]},o.id)):a.jsx(Pe,{icon:Le,title:"Sin resultados",text:"Probá con otro término o cambiá de categoría.",dashed:!0})]})})}),H.length>0&&a.jsx(B,{children:a.jsxs(F,{children:[a.jsx(D,{title:"También podés llevar",chip:"Sugeridos",subtitle:"Combinaciones que van con lo que estás pidiendo."}),a.jsx(U,{as:Ie,"aria-label":"Productos sugeridos",children:H.map(o=>a.jsx(V,{name:o.name,price:o.price,categoryId:o.categoryId,badge:o.badge,quantity:x[o.id]??0,onAdd:i=>T(o.id,i)},o.id))})]})}),q>0&&a.jsxs(na,{children:[a.jsxs(da,{children:[a.jsxs(la,{children:[q," ",q===1?"producto":"productos"]}),a.jsx(ca,{children:L(ee)})]}),a.jsxs(pa,{to:"/carrito",children:[a.jsx(Me,{size:18,"aria-hidden":"true"}),"Ver carrito"]})]})]})}r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function wa(e,s,p){if(!e)return!0;const h=e.toLowerCase();return[s.label,s.description,p.name,p.description,p.categoryLabel].join(" ").toLowerCase().includes(h)}export{Sa as StoreProfileScreen};
