import{q as r,j as a,l as Y,n as K,o as G,p as J,t as C,v as ee,w as ae,x as oe,A as re,y as ie,z as te,B as se,D as ne,G as de,s as le,H as ce,I as pe,M as ge,J as M,a as B,K as me,L as ue,N as be,O as he,Q as ye,R as fe,T as xe,g as T,U as $e,d as O,E as we,f as je,V as ke,W as ve,Y as z,Z as Ce}from"./index-D4G15rmE.js";import{r as s,L as ze,f as Se,e as Pe}from"./react-B1kPYQQd.js";import{p as Ie,s as N,m as U}from"./saleUnits-CLP-TCsg.js";import{M as Le}from"./minus-CKmS1ZGk.js";import{C as Me}from"./clock-3-C3c_XR_y.js";const Be=r.article`
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
`,qe=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Fe=r.h3`
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
`,He=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Ae=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Ee=r.span`
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
`,Te=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  flex: 0 0 auto;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,D=r.button`
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
`,Oe=r.span`
  min-width: 1.5rem;
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.primary};
`,Ne=r.button`
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
`,Ue=r.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
`,De=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,f=1;function R({name:e,price:l,saleUnit:c,categoryId:t,badge:m,quantity:u,onAdd:p,priority:g}){const[b,d]=s.useState(f),[h,j]=s.useState(!1),x=()=>{p(b),d(f),j(!0),window.setTimeout(()=>j(!1),1400)};return a.jsxs(Be,{"data-active":u>0,children:[a.jsxs(Y,{$ratio:"1 / 1",children:[a.jsx(K,{src:G(t),alt:e,loading:g?"eager":"lazy"}),m?a.jsx(J,{children:a.jsx(Ee,{children:m})}):null]}),a.jsxs(qe,{children:[a.jsx(Fe,{children:e}),a.jsxs(He,{children:[a.jsxs(Ae,{children:[C(l),c&&c!=="unidad"?a.jsxs(De,{children:[" ",Ie(c)]}):null]}),a.jsxs(Te,{children:[a.jsx(D,{type:"button",onClick:()=>d($=>Math.max(f,$-1)),disabled:b<=f,"aria-label":`Quitar cantidad de ${e}`,children:a.jsx(Le,{size:16,"aria-hidden":"true"})}),a.jsx(Oe,{"aria-live":"polite",children:N(c,b-f)}),a.jsx(D,{type:"button",onClick:()=>d($=>Math.min($+1,U(c)+f)),disabled:b-f>=U(c),"aria-label":`Agregar cantidad de ${e}`,children:a.jsx(ee,{size:16,"aria-hidden":"true"})})]})]}),a.jsx(Ne,{type:"button",onClick:x,"data-added":h,children:h?a.jsxs(a.Fragment,{children:[a.jsx(ae,{size:15,"aria-hidden":"true"}),"Agregado"]}):"Agregar al carrito"}),u>0?a.jsxs(Ue,{children:[N(c,u-f)," en el pedido"]}):null]})]})}const Re=r.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,Qe=r.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Ve=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
`,Ye=r.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Ke=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Ge=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,q=r.span`
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
`,Je=r.span`
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
`,We=r.span`
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
`;function Xe({id:e,name:l,category:c,categoryId:t,address:m,hours:u,distanceKm:p,rating:g,openNow:b,minOrder:d}){return a.jsxs(Re,{children:[a.jsxs(Y,{$ratio:"21 / 9",children:[a.jsx(K,{src:G(t),alt:c,loading:"eager"}),a.jsxs(J,{children:[a.jsx(Je,{"data-open":b,children:b?"Abierto ahora":"Cerrado"}),a.jsxs(We,{children:[a.jsx(oe,{size:13,"aria-hidden":"true",fill:"currentColor"}),g.toFixed(1)]})]}),a.jsx(Qe,{children:a.jsx(re,{$size:"3.5rem",$tone:te(e),children:ie(l)})})]}),a.jsxs(Ve,{children:[a.jsx(Ye,{children:l}),a.jsxs(Ke,{children:[c," · ",se(p)]}),a.jsxs(Ge,{children:[a.jsxs(q,{children:[a.jsx(Me,{size:14,"aria-hidden":"true"}),u]}),a.jsxs(q,{children:[a.jsx(ne,{size:14,"aria-hidden":"true"}),m]}),a.jsxs(q,{children:["Mínimo ",C(d)]})]})]})]})}r.div`
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
`;const Ze=r.div`
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
  ${({theme:e})=>e.mode==="dark"&&de`
      background: linear-gradient(135deg, #0B1430 0%, #10224F 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`,_e=r.div`
  display: grid;
  gap: 0;
  min-width: 0;
`,ea=r.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,aa=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
`,oa=r(ze)`
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
`,ra=r.div`
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
`,ia=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,ta=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,sa=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,na=r.button`
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
`,Q={"almacen-juan":{intro:"Bebidas, almacén y limpieza para resolver compras rápidas sin salir del comercio.",sections:[{id:"bebidas",label:"Bebidas",description:"Para el combo de siempre y el finde.",products:[{id:"coca-cola-225",name:"Coca Cola 2,25 L",description:"La botella que más sale para el carrito diario.",categoryId:"bebidas",categoryLabel:"Bebidas",price:3500,tone:"blue",badge:"Más pedido",suggestions:["fernet-750","hielo-2kg"]},{id:"fernet-750",name:"Fernet 750 ml",description:"Clásico de reunión para el fin de semana.",categoryId:"bebidas",categoryLabel:"Bebidas",price:12900,tone:"green",badge:"Combo finde",suggestions:["coca-cola-225","hielo-2kg"]},{id:"hielo-2kg",name:"Hielo 2 kg",description:"Bolsita lista para acompañar bebidas frías.",categoryId:"bebidas",categoryLabel:"Bebidas",price:1200,tone:"slate",badge:"Siempre útil",suggestions:["coca-cola-225","fernet-750"]}]},{id:"almacen",label:"Almacén",description:"Básicos de todos los días.",products:[{id:"yerba-1kg",name:"Yerba mate 1 kg",description:"Repuesto de todos los días para la alacena.",categoryId:"almacen",categoryLabel:"Almacén",price:4650,tone:"orange",badge:"Diario",suggestions:["azucar-1kg","galletitas-mixtas"]},{id:"fideos-500",name:"Fideos 500 g",description:"Una base simple para resolver la cena.",categoryId:"almacen",categoryLabel:"Almacén",price:980,tone:"violet",badge:"Base",suggestions:["salsa-tomate","queso-rallado"]},{id:"galletitas-mixtas",name:"Galletitas mixtas",description:"Para la merienda o el kiosco de la casa.",categoryId:"almacen",categoryLabel:"Almacén",price:1450,tone:"blue",badge:"Snack",suggestions:["yerba-1kg","fideos-500"]}]},{id:"limpieza",label:"Limpieza",description:"Casa y cocina en un solo pedido.",products:[{id:"detergente-900",name:"Detergente 900 ml",description:"Para dejar la cocina lista en una pasada.",categoryId:"limpieza",categoryLabel:"Limpieza",price:2450,tone:"red",badge:"Hogar",suggestions:["esponja-duo","lavandina-1l"]},{id:"lavandina-1l",name:"Lavandina 1 L",description:"Clave para limpieza pesada del hogar.",categoryId:"limpieza",categoryLabel:"Limpieza",price:1790,tone:"blue",badge:"Sanitiza",suggestions:["detergente-900","esponja-duo"]},{id:"esponja-duo",name:"Esponja duo",description:"Pequeño básico que completa cualquier limpieza.",categoryId:"limpieza",categoryLabel:"Limpieza",price:690,tone:"orange",badge:"Complemento",suggestions:["detergente-900","lavandina-1l"]}]}]},"panaderia-la-esquina":{intro:"Pan fresco, facturas y tortas listas para el desayuno, la merienda y los encargos.",sections:[{id:"pan",label:"Pan",description:"Pan fresco y de salida rápida.",products:[{id:"pan-flauta",saleUnit:"peso",name:"Pan flauta x 6",description:"Salida clásica para la mesa de todos los días.",categoryId:"pan",categoryLabel:"Pan",price:750,tone:"orange",badge:"Recién hecho",suggestions:["manteca-200","medialunas-x6"]},{id:"pan-lactal",saleUnit:"peso",name:"Pan lactal",description:"Práctico para tostadas y viandas.",categoryId:"pan",categoryLabel:"Pan",price:1850,tone:"blue",badge:"Diario",suggestions:["manteca-200","mermelada-frutilla"]},{id:"tostadas-rusticas",name:"Tostadas ricas",description:"Para acompañar el mate sin vueltas.",categoryId:"pan",categoryLabel:"Pan",price:990,tone:"slate",badge:"Merienda",suggestions:["pan-lactal","mermelada-frutilla"]}]},{id:"facturas",label:"Facturas",description:"La bandeja de siempre.",products:[{id:"medialunas-x6",saleUnit:"docena",name:"Medialunas x 6",description:"Perfectas para salir con café o mate.",categoryId:"facturas",categoryLabel:"Facturas",price:2400,tone:"violet",badge:"Favoritas",suggestions:["cafe-molido","facturas-surtidas"]},{id:"facturas-surtidas",saleUnit:"docena",name:"Facturas surtidas",description:"Variadas para compartir en familia.",categoryId:"facturas",categoryLabel:"Facturas",price:1900,tone:"orange",badge:"Compartir",suggestions:["medialunas-x6","cafe-molido"]},{id:"cafe-molido",name:"Café molido",description:"El acompañamiento que hace crecer el ticket.",categoryId:"facturas",categoryLabel:"Facturas",price:3600,tone:"red",badge:"Combo",suggestions:["medialunas-x6","facturas-surtidas"]}]},{id:"tortas",label:"Tortas",description:"Pedidos especiales y celebraciones.",products:[{id:"torta-cumple",name:"Torta de cumpleaños",description:"Lista para encargar con anticipación.",categoryId:"tortas",categoryLabel:"Tortas",price:12e3,tone:"red",badge:"Encargo",suggestions:["velas","facturas-surtidas"]},{id:"budin-vainilla",name:"Budin de vainilla",description:"Para la mesa dulce o la merienda.",categoryId:"tortas",categoryLabel:"Tortas",price:1850,tone:"green",badge:"Dulce",suggestions:["cafe-molido","medialunas-x6"]},{id:"velas",name:"Velas numeradas",description:"Complemento simple para el pedido.",categoryId:"tortas",categoryLabel:"Tortas",price:650,tone:"blue",badge:"Extra",suggestions:["torta-cumple","budin-vainilla"]}]}]},"farmacia-centro":{intro:"Cuidado personal, salud básica y perfumería para resolver sin moverte de la app.",sections:[{id:"cuidado",label:"Cuidado",description:"Productos de uso diario.",products:[{id:"shampoo-400",name:"Shampoo 400 ml",description:"Limpieza cotidiana con buena relación precio uso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:3950,tone:"blue",badge:"Precio bajo",suggestions:["acondicionador","jabon-liquido"]},{id:"jabon-liquido",name:"Jabon liquido",description:"Para baño y cocina en un solo paso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:1650,tone:"green",badge:"Básico",suggestions:["shampoo-400","acondicionador"]},{id:"acondicionador",name:"Acondicionador",description:"Complemento para el cabello de todos los días.",categoryId:"cuidado",categoryLabel:"Cuidado",price:4100,tone:"violet",badge:"Complemento",suggestions:["shampoo-400","protector-solar"]}]},{id:"bienestar",label:"Bienestar",description:"Cosas que se llevan rápido cuando hacen falta.",products:[{id:"omeprazol-20",name:"Omeprazol 20 mg",description:"Compra de rutina para tener a mano.",categoryId:"bienestar",categoryLabel:"Bienestar",price:7150,tone:"red",badge:"Salud",suggestions:["protector-solar","alcohol-gel"]},{id:"alcohol-gel",name:"Alcohol en gel",description:"Siempre útil para mochila o cartera.",categoryId:"bienestar",categoryLabel:"Bienestar",price:1850,tone:"blue",badge:"Práctico",suggestions:["omeprazol-20","protector-solar"]},{id:"protector-solar",name:"Protector solar",description:"Para cuidar la piel en la temporada larga.",categoryId:"bienestar",categoryLabel:"Bienestar",price:9200,tone:"orange",badge:"Temporada",suggestions:["alcohol-gel","omeprazol-20"]}]},{id:"perfumeria",label:"Perfumería",description:"Higiene y cuidado personal.",products:[{id:"desodorante",name:"Desodorante",description:"El complemento de todos los días.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:3250,tone:"slate",badge:"Uso diario",suggestions:["shampoo-400","jabon-liquido"]},{id:"crema-manos",name:"Crema de manos",description:"Para completar la compra de perfumería.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:2750,tone:"violet",badge:"Extra",suggestions:["desodorante","protector-solar"]},{id:"toallitas",name:"Toallitas húmedas",description:"Prácticas para mochila o changuito.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:1480,tone:"green",badge:"Complemento",suggestions:["desodorante","crema-manos"]}]}]},"carniceria-central":{intro:"Cortes frescos, milanesas y pedidos por kilo listos para armar el pedido completo.",sections:[{id:"cortes",label:"Cortes",description:"Para el almuerzo o la noche.",products:[{id:"bife-ancho",saleUnit:"pesoMedio",name:"Bife ancho",description:"Un corte protagonista para la compra principal.",categoryId:"cortes",categoryLabel:"Cortes",price:9900,tone:"red",badge:"Premium",suggestions:["asado-especial","picada-premium"]},{id:"asado-especial",saleUnit:"pesoMedio",name:"Asado especial",description:"Para el finde y las comidas largas.",categoryId:"cortes",categoryLabel:"Cortes",price:10900,tone:"orange",badge:"Finde",suggestions:["bife-ancho","hamburguesas-caseras"]},{id:"picada-premium",saleUnit:"pesoMedio",name:"Picada premium",description:"Para compartir sin complicarse.",categoryId:"cortes",categoryLabel:"Cortes",price:8400,tone:"violet",badge:"Compartir",suggestions:["asado-especial","bife-ancho"]}]},{id:"milanesas",label:"Milanesas",description:"La compra de siempre para resolver rápido.",products:[{id:"milanesas-kg",saleUnit:"pesoMedio",name:"Milanesas x kg",description:"Una de las salidas más prácticas de la carnicería.",categoryId:"milanesas",categoryLabel:"Milanesas",price:9100,tone:"blue",badge:"Mejor salida",suggestions:["hamburguesas-caseras","asado-especial"]},{id:"hamburguesas-caseras",name:"Hamburguesas caseras",description:"Para armar el pedido del día en un solo toque.",categoryId:"milanesas",categoryLabel:"Milanesas",price:6200,tone:"green",badge:"Listo para cocinar",suggestions:["milanesas-kg","asado-especial"]},{id:"pollo-entero",name:"Pollo entero",description:"Otro clásico para completar la compra.",categoryId:"milanesas",categoryLabel:"Milanesas",price:5450,tone:"orange",badge:"Clásico",suggestions:["milanesas-kg","bife-ancho"]}]},{id:"extras",label:"Extras",description:"Pedidos secundarios que completan el viaje.",products:[{id:"hielo-carniceria",name:"Hielo 2 kg",description:"Perfecto para acompañar el pedido del finde.",categoryId:"extras",categoryLabel:"Extras",price:1200,tone:"slate",badge:"Complemento",suggestions:["asado-especial","picada-premium"]},{id:"salsas",name:"Salsa parrillera",description:"El detalle que suma al pedido principal.",categoryId:"extras",categoryLabel:"Extras",price:980,tone:"red",badge:"Extra",suggestions:["bife-ancho","asado-especial"]},{id:"condimentos",name:"Condimentos",description:"Los básicos que completan la compra.",categoryId:"extras",categoryLabel:"Extras",price:690,tone:"violet",badge:"Básico",suggestions:["salsas","hielo-carniceria"]}]}]}},da="almacen-juan",la=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const V=r.button`
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
`,ca=r.div`
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
`;r(z)`
  overflow: hidden;
  border-color: ${({theme:e,$active:l})=>l?"rgba(0, 71, 231, 0.24)":e.color.border};
  background: ${({theme:e,$active:l})=>l?e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.09), rgba(17, 26, 46, 0.98))":"linear-gradient(180deg, rgba(0, 71, 231, 0.05), rgba(255, 255, 255, 0.98))":e.color.surface};
  box-shadow: ${({theme:e,$active:l})=>l?e.shadow.md:e.shadow.sm};
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
`;r(Ce)`
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
`;r(z)`
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
`;r(z)`
  overflow: hidden;
`;r(z)`
  border-style: dashed;
`;const pa=e=>Q[e]??Q[da];function fa(){var E;const{storeId:e=""}=Se(),[l,c]=Pe(),t=s.useMemo(()=>ce(e)??le[0],[e]),m=s.useMemo(()=>pa(t.id),[t.id]),u=l.get("pedido"),p=s.useMemo(()=>u?pe.find(o=>o.id===u&&o.storeId===t.id)??null:null,[u,t.id]),g=s.useMemo(()=>{if(!p)return m;const o=new Set(p.items.map(i=>i.productId));return{...m,sections:m.sections.map(i=>({...i,products:i.products.filter(n=>o.has(n.id))})).filter(i=>i.products.length>0)}},[m,p]),b=s.useMemo(()=>p?Object.fromEntries(p.items.map(o=>[o.productId,o.quantity])):{},[p]),d=s.useMemo(()=>g.sections.flatMap(o=>o.products),[g]),[h,j]=s.useState(""),[x,$]=s.useState("all"),[k,S]=s.useState(((E=d[0])==null?void 0:E.id)??""),[y,F]=s.useState({});s.useEffect(()=>{var i;const o=Object.fromEntries(d.map(n=>[n.id,0]));j(""),$("all"),S(((i=d[0])==null?void 0:i.id)??""),F(o)},[d,t.id]);const v=s.useMemo(()=>{const o=h.trim();return g.sections.filter(i=>x==="all"||i.id===x).map(i=>({...i,products:i.products.filter(n=>ga(o,i,n))})).filter(i=>i.products.length>0)},[x,g,h]),w=s.useMemo(()=>v.flatMap(o=>o.products),[v]);s.useEffect(()=>{w.length!==0&&(w.some(o=>o.id===k)||S(w[0].id))},[k,w]);const P=s.useMemo(()=>w.find(o=>o.id===k)??w[0]??d[0],[d,k,w]),H=s.useMemo(()=>!P||p?[]:P.suggestions.map(o=>d.find(i=>i.id===o)).filter(o=>!!o).slice(0,4),[d,P]),I=s.useMemo(()=>Object.values(y).reduce((o,i)=>o+i,0),[y]),W=s.useMemo(()=>d.reduce((o,i)=>o+i.price*(y[i.id]??0),0),[d,y]);s.useMemo(()=>d.map(o=>({...o,quantity:y[o.id]??0})).filter(o=>o.quantity>0).sort((o,i)=>i.quantity-o.quantity).slice(0,3),[d,y]),s.useMemo(()=>{const o=h.trim().toLowerCase(),i=o?g.sections.filter(n=>n.label.toLowerCase().includes(o)||n.description.toLowerCase().includes(o)):g.sections;return i.length>0?i.slice(0,3):g.sections.slice(0,3)},[g.sections,h]);const X=()=>{const o=new URLSearchParams(l);o.delete("pedido"),c(o,{replace:!0})},Z=o=>{o.preventDefault()},A=(o,i)=>{F(n=>{const L=Math.max(0,(n[o]??0)+i);return{...n,[o]:L}}),S(o)};return a.jsxs(ge,{showSearch:!1,children:[a.jsx(M,{children:a.jsx(B,{children:a.jsx(Xe,{id:t.id,name:t.name,category:t.category,categoryId:t.id,address:t.address,hours:t.hours,distanceKm:t.distanceKm,rating:t.rating,openNow:t.openNow,minOrder:t.minOrder})})}),a.jsx(M,{children:a.jsx(B,{children:a.jsxs(la,{children:[p?a.jsxs(ra,{children:[a.jsx(me,{size:20,"aria-hidden":"true"}),a.jsxs(ia,{children:[a.jsxs(ta,{children:["Productos del pedido ",p.code]}),a.jsxs(sa,{children:[p.date," · ",C(p.total)]})]}),a.jsx(na,{type:"button",onClick:X,children:"Ver todo el comercio"})]}):null,a.jsx(ue,{onSubmit:Z,children:a.jsxs(be,{htmlFor:"store-search",children:[a.jsx(he,{children:"Buscar productos dentro del comercio"}),a.jsxs(ye,{children:[a.jsx(fe,{size:18,"aria-hidden":"true"}),a.jsx(xe,{id:"store-search",value:h,onChange:o=>j(o.target.value),placeholder:`Buscar en ${t.name}...`,"aria-label":"Buscar productos dentro del comercio"})]})]})}),a.jsxs(T,{"aria-label":"Categorías del comercio",children:[a.jsx(V,{type:"button","data-active":x==="all",onClick:()=>$("all"),children:"Todas"}),g.sections.map(o=>a.jsx(V,{type:"button","data-active":x===o.id,onClick:()=>$(o.id),children:o.label},o.id))]}),v.length>0?v.map((o,i)=>a.jsxs($e,{children:[a.jsx(O,{title:o.label,subtitle:o.description}),a.jsx(ca,{children:o.products.map((n,L)=>a.jsx(R,{name:n.name,price:n.price,saleUnit:n.saleUnit,categoryId:n.categoryId,badge:p?`${b[n.id]??1} u.`:n.badge,quantity:y[n.id]??0,onAdd:_=>A(n.id,_),priority:i===0&&L<4},n.id))})]},o.id)):a.jsx(we,{icon:je,title:"Sin resultados",text:"Probá con otro término o cambiá de categoría.",dashed:!0})]})})}),H.length>0&&a.jsx(M,{children:a.jsxs(B,{children:[a.jsx(O,{title:"También podés llevar",chip:"Sugeridos",subtitle:"Combinaciones que van con lo que estás pidiendo."}),a.jsx(T,{as:ke,"aria-label":"Productos sugeridos",children:H.map(o=>a.jsx(R,{name:o.name,price:o.price,categoryId:o.categoryId,badge:o.badge,quantity:y[o.id]??0,onAdd:i=>A(o.id,i)},o.id))})]})}),I>0&&a.jsxs(Ze,{children:[a.jsxs(_e,{children:[a.jsxs(ea,{children:[I," ",I===1?"producto":"productos"]}),a.jsx(aa,{children:C(W)})]}),a.jsxs(oa,{to:"/carrito",children:[a.jsx(ve,{size:18,"aria-hidden":"true"}),"Ver carrito"]})]})]})}r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function ga(e,l,c){if(!e)return!0;const t=e.toLowerCase();return[l.label,l.description,c.name,c.description,c.categoryLabel].join(" ").toLowerCase().includes(t)}export{fa as StoreProfileScreen};
