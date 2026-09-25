import{j as o,Q as ae,R as oe,T as re,U as ie,r as q,V as ge,W as me,X as ue,Y as be,h as he,Z as fe,u as ye,_ as xe,$ as $e,M as we,a0 as F,S as A,a1 as je,a2 as ve,a3 as ke,a4 as Ce,a5 as Se,G as V,p as ze,q as _,E as Pe,a6 as Le,a as M,d as Ie}from"./index-Jd4-4a9e.js";import{r as l,L as qe,h as Me,d as Be}from"./react-6hK8W6IX.js";import{q as r,A as Fe}from"./estilos-DzHAJWDP.js";import{p as Ae,m as Y,s as G}from"./saleUnits-CLP-TCsg.js";import{P as Ee,a1 as Oe,C as He,t as Te,a2 as Re,M as Ue,h as Ne,S as De,O as Qe,m as Ve}from"./iconos-C-3VosUP.js";import{a as _e}from"./cartStore-0fSA2Xh5.js";const Ye=r.article`
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
`,Ge=r.div`
  display: grid;
  /* La fila del precio se estira y empuja el botón al fondo. Sin esto, dos
     tarjetas vecinas terminan con el botón a distinta altura apenas una parte
     el nombre en dos líneas y la otra no, y la grilla se ve despareja. */
  grid-template-rows: auto 1fr auto auto;
  gap: 0.15rem;
  /* La grilla estira las tarjetas a la altura de la más alta; el cuerpo tiene
     que ocupar lo que le toca para que el fondo sea el fondo de verdad. */
  flex: 1;
  min-height: 0;
  padding: ${({theme:e})=>e.spacing[2]};
`,We=r.h3`
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
`,Xe=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
  /* Sin esto el precio empuja al selector fuera de la tarjeta en vez de
     achicarse: una columna de 168px con un texto de "1 kg + 1/4" al lado no
     entra, y lo que se salía era el borde. */
  min-width: 0;
`,Je=r.div`
  display: grid;
  gap: 0;
  min-width: 0;
`,Ke=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
  /* El precio es lo único que no puede partirse en dos renglones. */
  white-space: nowrap;
`,Ze=r.span`
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
`,ea=r.div`
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 0.05rem;
  flex: 0 0 auto;
  /* Un piso para que no se angoste con "1/4" y un techo para que "1 docena
     + 1/2" no lo estire al doble que el de la tarjeta de al lado: la grilla
     se ve despareja aunque cada uno entre en la suya. */
  min-width: 3.1rem;
  max-width: 4.6rem;
  padding: 0.2rem 0.3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.primarySoft};
`,W=r.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 1.75rem;
  height: 1.4rem;

  /* El botón se ve chato, pero el área que responde al dedo sigue llegando a
     los 44px que pide el sistema de diseño. Se extiende hacia afuera del
     selector —arriba el de menos, abajo el de más— donde no hay nada más
     que tocar, así que no le roba el toque a ningún vecino. */
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
  border-radius: ${({theme:e})=>e.radius.md};
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
`,aa=r.span`
  /* Entre los dos botones, con el ancho del selector entero para él. Ya no
     pelea contra los círculos por el espacio, que es lo que lo hacía
     superponerse. */
  padding: 0.05rem 0.1rem;
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.7rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.2;
  color: ${({theme:e})=>e.color.primary};
  /* Las etiquetas más largas ("1 docena + 1/2") no entran en el techo de
     arriba. Se parten en dos renglones dentro del selector, que para eso
     está en vertical, en vez de empujar el ancho. */
  overflow-wrap: anywhere;
`,oa=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 100%;
  min-height: 2.25rem;
  /* Alineado abajo de todo: la fila de arriba se estira y lo empuja acá, así
     dos tarjetas vecinas tienen el botón a la misma altura aunque una tenga
     el nombre en dos líneas y la otra en una. */
  align-self: end;
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
`,ra=r.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
`,ia=r.span`
  display: block;
  margin-top: -0.1rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,C=1;function X({name:e,price:n,saleUnit:c,categoryId:x,badge:d,quantity:h,onAdd:v,priority:f}){const[b,p]=l.useState(C),[u,k]=l.useState(!1),g=()=>{v(b),p(C),k(!0),window.setTimeout(()=>k(!1),1400)};return o.jsxs(Ye,{"data-active":h>0,children:[o.jsxs(ae,{$ratio:"1 / 1",children:[o.jsx(oe,{src:re(x),alt:e,loading:f?"eager":"lazy"}),d?o.jsx(ie,{children:o.jsx(Ze,{children:d})}):null]}),o.jsxs(Ge,{children:[o.jsx(We,{children:e}),o.jsxs(Xe,{children:[o.jsxs(Je,{children:[o.jsx(Ke,{children:q(n)}),c&&c!=="unidad"?o.jsx(ia,{children:Ae(c)}):null]}),o.jsxs(ea,{children:[o.jsx(W,{type:"button",onClick:()=>p(y=>Math.min(y+1,Y(c)+C)),disabled:b-C>=Y(c),"aria-label":`Agregar cantidad de ${e}`,children:o.jsx(Ee,{size:15,"aria-hidden":"true"})}),o.jsx(aa,{"aria-live":"polite",children:G(c,b-C)}),o.jsx(W,{type:"button",onClick:()=>p(y=>Math.max(C,y-1)),disabled:b<=C,"aria-label":`Quitar cantidad de ${e}`,children:o.jsx(Oe,{size:15,"aria-hidden":"true"})})]})]}),o.jsx(oa,{type:"button",onClick:g,"data-added":u,children:u?o.jsxs(o.Fragment,{children:[o.jsx(He,{size:15,"aria-hidden":"true"}),"Agregado"]}):"Agregar al carrito"}),h>0?o.jsxs(ra,{children:[G(c,h-C)," en el pedido"]}):null]})]})}const ta=r.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,sa=r.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,na=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
`,da=r.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,la=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ca=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,E=r.span`
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
`,pa=r.span`
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
`,ga=r.span`
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
`;function ma({id:e,name:n,category:c,categoryId:x,address:d,hours:h,distanceKm:v,rating:f,openNow:b,minOrder:p}){return o.jsxs(ta,{children:[o.jsxs(ae,{$ratio:"21 / 9",children:[o.jsx(oe,{src:re(x),alt:c,loading:"eager"}),o.jsxs(ie,{children:[o.jsx(pa,{"data-open":b,children:b?"Abierto ahora":"Cerrado"}),f!==void 0?o.jsxs(ga,{children:[o.jsx(Te,{size:13,"aria-hidden":"true",fill:"currentColor"}),f.toFixed(1)]}):null]}),o.jsx(sa,{children:o.jsx(ge,{$size:"3.5rem",$tone:ue(e),children:me(n)})})]}),o.jsxs(na,{children:[o.jsx(da,{children:n}),o.jsxs(la,{children:[c,v!==void 0?` · ${be(v)}`:""]}),o.jsxs(ca,{children:[o.jsxs(E,{children:[o.jsx(Re,{size:14,"aria-hidden":"true"}),h]}),o.jsxs(E,{children:[o.jsx(Ue,{size:14,"aria-hidden":"true"}),d]}),o.jsxs(E,{children:["Mínimo ",q(p)]})]})]})]})}const J=["blue","green","orange","violet","red","slate"],te="ofertas";function K(e,n){if(e.tipo==="descuento")return{id:e.id,tipo:"descuento",titulo:e.titulo,porcentaje:e.porcentaje,precioFinal:Math.round(n*(100-(e.porcentaje??0)))/100,cantidad:null,etiqueta:`${e.porcentaje}% off`};if(e.tipo==="cantidad")return{id:e.id,tipo:"cantidad",titulo:e.titulo,porcentaje:null,precioFinal:null,cantidad:e.cantidad,etiqueta:`${e.cantidad} x $${e.precioFinal.toLocaleString("es-AR")}`};const c=e.productos.length-1;return{id:e.id,tipo:"combo",titulo:e.titulo,porcentaje:null,precioFinal:null,cantidad:null,etiqueta:c>0?`Combo con ${c} más`:"En combo"}}function ua(e){const[n,c]=l.useState(null),[x,d]=l.useState(!0);return l.useEffect(()=>{if(!e||!he()){d(!1);return}let h=!0;return d(!0),fe.detalle(e).then(({comercio:v,categorias:f,productos:b,ofertas:p})=>{if(!h)return;const u=new Map;for(const t of p??[])for(const m of t.productos)u.has(m.id)||u.set(m.id,t);const k=(t,m,$)=>{var w;const j=u.get(t.id)??null;return{id:t.id,name:t.nombre,description:t.descripcion??"",categoryId:t.categoria_id??"general",categoryLabel:m,price:t.precio,saleUnit:t.unidad_venta,tone:J[$%J.length],badge:j?K(j,t.precio).etiqueta:void 0,suggestions:[],foto:((w=t.fotos)==null?void 0:w[0])??null,stock:t.stock,tamano:t.tamano,oferta:j?K(j,t.precio):null}},g=f.map(t=>({id:t.id,label:t.nombre,description:"",products:b.filter(m=>m.categoria_id===t.id).map((m,$)=>k(m,t.nombre,$))})).filter(t=>t.products.length>0),y=b.filter(t=>u.has(t.id)).map((t,m)=>{var $;return k(t,(($=f.find(j=>j.id===t.categoria_id))==null?void 0:$.nombre)??"Otros",m)});y.length>0&&g.unshift({id:te,label:"Ofertas",description:"Lo que está en promoción ahora.",products:y});const z=b.filter(t=>!t.categoria_id||!f.some(m=>m.id===t.categoria_id));z.length>0&&g.push({id:"otros",label:"Otros productos",description:"",products:z.map((t,m)=>k(t,"Otros",m))}),c({intro:v.descripcion??"",secciones:g,ofertas:p??[],error:!1})}).catch(()=>{h&&c({intro:"",secciones:[],ofertas:[],error:!0})}).finally(()=>{h&&d(!1)}),()=>{h=!1}},[e]),{intro:(n==null?void 0:n.intro)??"",secciones:(n==null?void 0:n.secciones)??[],ofertas:(n==null?void 0:n.ofertas)??[],error:(n==null?void 0:n.error)??!1,cargando:x}}r.div`
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
`;const ba=r.div`
  position: fixed;
  left: 50%;
  bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[2]} + env(safe-area-inset-bottom));
  z-index: ${({theme:e})=>e.zIndex.bottomNav-1};
  display: flex;
  align-items: center;
  /* Sin space-between: ese era el que abría un hueco entre el total y el
     botón para llenar un ancho que la barra no necesitaba. */
  gap: ${({theme:e})=>e.spacing[3]};
  /* Del ancho de su contenido, no del de la pantalla. Ocupa menos, tapa
     menos y deja de tener aire en el medio. El tope sigue estando para que
     un total largo no la estire de lado a lado. */
  width: max-content;
  max-width: min(100% - 2rem, 30rem);
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]}
    ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceDark};
  color: ${({theme:e})=>e.color.onDark};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  transform: translateX(-50%);

  /* En oscuro el negro de la barra se funde con el fondo:
     se despega con borde y una sombra más marcada. */
  ${({theme:e})=>e.mode==="dark"&&Fe`
      background: linear-gradient(135deg, #0B1430 0%, #10224F 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`,ha=r.div.attrs({"aria-hidden":!0})`
  flex: 0 0 auto;
  transition: height 180ms ease;
`,fa=r.div`
  display: grid;
  gap: 0;
  min-width: 0;
`,ya=r.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,xa=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
`,$a=r(qe)`
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
`,wa=r.div`
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
`,ja=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,va=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ka=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,Ca=r.button`
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
`,Z={"almacen-juan":{intro:"Bebidas, almacén y limpieza para resolver compras rápidas sin salir del comercio.",sections:[{id:"bebidas",label:"Bebidas",description:"Para el combo de siempre y el finde.",products:[{id:"coca-cola-225",name:"Coca Cola 2,25 L",description:"La botella que más sale para el carrito diario.",categoryId:"bebidas",categoryLabel:"Bebidas",price:3500,tone:"blue",badge:"Más pedido",suggestions:["fernet-750","hielo-2kg"]},{id:"fernet-750",name:"Fernet 750 ml",description:"Clásico de reunión para el fin de semana.",categoryId:"bebidas",categoryLabel:"Bebidas",price:12900,tone:"green",badge:"Combo finde",suggestions:["coca-cola-225","hielo-2kg"]},{id:"hielo-2kg",name:"Hielo 2 kg",description:"Bolsita lista para acompañar bebidas frías.",categoryId:"bebidas",categoryLabel:"Bebidas",price:1200,tone:"slate",badge:"Siempre útil",suggestions:["coca-cola-225","fernet-750"]}]},{id:"almacen",label:"Almacén",description:"Básicos de todos los días.",products:[{id:"yerba-1kg",name:"Yerba mate 1 kg",description:"Repuesto de todos los días para la alacena.",categoryId:"almacen",categoryLabel:"Almacén",price:4650,tone:"orange",badge:"Diario",suggestions:["azucar-1kg","galletitas-mixtas"]},{id:"fideos-500",name:"Fideos 500 g",description:"Una base simple para resolver la cena.",categoryId:"almacen",categoryLabel:"Almacén",price:980,tone:"violet",badge:"Base",suggestions:["salsa-tomate","queso-rallado"]},{id:"galletitas-mixtas",name:"Galletitas mixtas",description:"Para la merienda o el kiosco de la casa.",categoryId:"almacen",categoryLabel:"Almacén",price:1450,tone:"blue",badge:"Snack",suggestions:["yerba-1kg","fideos-500"]}]},{id:"limpieza",label:"Limpieza",description:"Casa y cocina en un solo pedido.",products:[{id:"detergente-900",name:"Detergente 900 ml",description:"Para dejar la cocina lista en una pasada.",categoryId:"limpieza",categoryLabel:"Limpieza",price:2450,tone:"red",badge:"Hogar",suggestions:["esponja-duo","lavandina-1l"]},{id:"lavandina-1l",name:"Lavandina 1 L",description:"Clave para limpieza pesada del hogar.",categoryId:"limpieza",categoryLabel:"Limpieza",price:1790,tone:"blue",badge:"Sanitiza",suggestions:["detergente-900","esponja-duo"]},{id:"esponja-duo",name:"Esponja duo",description:"Pequeño básico que completa cualquier limpieza.",categoryId:"limpieza",categoryLabel:"Limpieza",price:690,tone:"orange",badge:"Complemento",suggestions:["detergente-900","lavandina-1l"]}]}]},"panaderia-la-esquina":{intro:"Pan fresco, facturas y tortas listas para el desayuno, la merienda y los encargos.",sections:[{id:"pan",label:"Pan",description:"Pan fresco y de salida rápida.",products:[{id:"pan-flauta",saleUnit:"peso",name:"Pan flauta x 6",description:"Salida clásica para la mesa de todos los días.",categoryId:"pan",categoryLabel:"Pan",price:750,tone:"orange",badge:"Recién hecho",suggestions:["manteca-200","medialunas-x6"]},{id:"pan-lactal",saleUnit:"peso",name:"Pan lactal",description:"Práctico para tostadas y viandas.",categoryId:"pan",categoryLabel:"Pan",price:1850,tone:"blue",badge:"Diario",suggestions:["manteca-200","mermelada-frutilla"]},{id:"tostadas-rusticas",name:"Tostadas ricas",description:"Para acompañar el mate sin vueltas.",categoryId:"pan",categoryLabel:"Pan",price:990,tone:"slate",badge:"Merienda",suggestions:["pan-lactal","mermelada-frutilla"]}]},{id:"facturas",label:"Facturas",description:"La bandeja de siempre.",products:[{id:"medialunas-x6",saleUnit:"docena",name:"Medialunas x 6",description:"Perfectas para salir con café o mate.",categoryId:"facturas",categoryLabel:"Facturas",price:2400,tone:"violet",badge:"Favoritas",suggestions:["cafe-molido","facturas-surtidas"]},{id:"facturas-surtidas",saleUnit:"docena",name:"Facturas surtidas",description:"Variadas para compartir en familia.",categoryId:"facturas",categoryLabel:"Facturas",price:1900,tone:"orange",badge:"Compartir",suggestions:["medialunas-x6","cafe-molido"]},{id:"cafe-molido",name:"Café molido",description:"El acompañamiento que hace crecer el ticket.",categoryId:"facturas",categoryLabel:"Facturas",price:3600,tone:"red",badge:"Combo",suggestions:["medialunas-x6","facturas-surtidas"]}]},{id:"tortas",label:"Tortas",description:"Pedidos especiales y celebraciones.",products:[{id:"torta-cumple",name:"Torta de cumpleaños",description:"Lista para encargar con anticipación.",categoryId:"tortas",categoryLabel:"Tortas",price:12e3,tone:"red",badge:"Encargo",suggestions:["velas","facturas-surtidas"]},{id:"budin-vainilla",name:"Budin de vainilla",description:"Para la mesa dulce o la merienda.",categoryId:"tortas",categoryLabel:"Tortas",price:1850,tone:"green",badge:"Dulce",suggestions:["cafe-molido","medialunas-x6"]},{id:"velas",name:"Velas numeradas",description:"Complemento simple para el pedido.",categoryId:"tortas",categoryLabel:"Tortas",price:650,tone:"blue",badge:"Extra",suggestions:["torta-cumple","budin-vainilla"]}]}]},"farmacia-centro":{intro:"Cuidado personal, salud básica y perfumería para resolver sin moverte de la app.",sections:[{id:"cuidado",label:"Cuidado",description:"Productos de uso diario.",products:[{id:"shampoo-400",name:"Shampoo 400 ml",description:"Limpieza cotidiana con buena relación precio uso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:3950,tone:"blue",badge:"Precio bajo",suggestions:["acondicionador","jabon-liquido"]},{id:"jabon-liquido",name:"Jabon liquido",description:"Para baño y cocina en un solo paso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:1650,tone:"green",badge:"Básico",suggestions:["shampoo-400","acondicionador"]},{id:"acondicionador",name:"Acondicionador",description:"Complemento para el cabello de todos los días.",categoryId:"cuidado",categoryLabel:"Cuidado",price:4100,tone:"violet",badge:"Complemento",suggestions:["shampoo-400","protector-solar"]}]},{id:"bienestar",label:"Bienestar",description:"Cosas que se llevan rápido cuando hacen falta.",products:[{id:"omeprazol-20",name:"Omeprazol 20 mg",description:"Compra de rutina para tener a mano.",categoryId:"bienestar",categoryLabel:"Bienestar",price:7150,tone:"red",badge:"Salud",suggestions:["protector-solar","alcohol-gel"]},{id:"alcohol-gel",name:"Alcohol en gel",description:"Siempre útil para mochila o cartera.",categoryId:"bienestar",categoryLabel:"Bienestar",price:1850,tone:"blue",badge:"Práctico",suggestions:["omeprazol-20","protector-solar"]},{id:"protector-solar",name:"Protector solar",description:"Para cuidar la piel en la temporada larga.",categoryId:"bienestar",categoryLabel:"Bienestar",price:9200,tone:"orange",badge:"Temporada",suggestions:["alcohol-gel","omeprazol-20"]}]},{id:"perfumeria",label:"Perfumería",description:"Higiene y cuidado personal.",products:[{id:"desodorante",name:"Desodorante",description:"El complemento de todos los días.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:3250,tone:"slate",badge:"Uso diario",suggestions:["shampoo-400","jabon-liquido"]},{id:"crema-manos",name:"Crema de manos",description:"Para completar la compra de perfumería.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:2750,tone:"violet",badge:"Extra",suggestions:["desodorante","protector-solar"]},{id:"toallitas",name:"Toallitas húmedas",description:"Prácticas para mochila o changuito.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:1480,tone:"green",badge:"Complemento",suggestions:["desodorante","crema-manos"]}]}]},"carniceria-central":{intro:"Cortes frescos, milanesas y pedidos por kilo listos para armar el pedido completo.",sections:[{id:"cortes",label:"Cortes",description:"Para el almuerzo o la noche.",products:[{id:"bife-ancho",saleUnit:"pesoMedio",name:"Bife ancho",description:"Un corte protagonista para la compra principal.",categoryId:"cortes",categoryLabel:"Cortes",price:9900,tone:"red",badge:"Premium",suggestions:["asado-especial","picada-premium"]},{id:"asado-especial",saleUnit:"pesoMedio",name:"Asado especial",description:"Para el finde y las comidas largas.",categoryId:"cortes",categoryLabel:"Cortes",price:10900,tone:"orange",badge:"Finde",suggestions:["bife-ancho","hamburguesas-caseras"]},{id:"picada-premium",saleUnit:"pesoMedio",name:"Picada premium",description:"Para compartir sin complicarse.",categoryId:"cortes",categoryLabel:"Cortes",price:8400,tone:"violet",badge:"Compartir",suggestions:["asado-especial","bife-ancho"]}]},{id:"milanesas",label:"Milanesas",description:"La compra de siempre para resolver rápido.",products:[{id:"milanesas-kg",saleUnit:"pesoMedio",name:"Milanesas x kg",description:"Una de las salidas más prácticas de la carnicería.",categoryId:"milanesas",categoryLabel:"Milanesas",price:9100,tone:"blue",badge:"Mejor salida",suggestions:["hamburguesas-caseras","asado-especial"]},{id:"hamburguesas-caseras",name:"Hamburguesas caseras",description:"Para armar el pedido del día en un solo toque.",categoryId:"milanesas",categoryLabel:"Milanesas",price:6200,tone:"green",badge:"Listo para cocinar",suggestions:["milanesas-kg","asado-especial"]},{id:"pollo-entero",name:"Pollo entero",description:"Otro clásico para completar la compra.",categoryId:"milanesas",categoryLabel:"Milanesas",price:5450,tone:"orange",badge:"Clásico",suggestions:["milanesas-kg","bife-ancho"]}]},{id:"extras",label:"Extras",description:"Pedidos secundarios que completan el viaje.",products:[{id:"hielo-carniceria",name:"Hielo 2 kg",description:"Perfecto para acompañar el pedido del finde.",categoryId:"extras",categoryLabel:"Extras",price:1200,tone:"slate",badge:"Complemento",suggestions:["asado-especial","picada-premium"]},{id:"salsas",name:"Salsa parrillera",description:"El detalle que suma al pedido principal.",categoryId:"extras",categoryLabel:"Extras",price:980,tone:"red",badge:"Extra",suggestions:["bife-ancho","asado-especial"]},{id:"condimentos",name:"Condimentos",description:"Los básicos que completan la compra.",categoryId:"extras",categoryLabel:"Extras",price:690,tone:"violet",badge:"Básico",suggestions:["salsas","hielo-carniceria"]}]}]}},Sa="almacen-juan",za=r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;r.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const ee=r.button`
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
`,Pa=r.div`
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
`;r(M)`
  overflow: hidden;
  border-color: ${({theme:e,$active:n})=>n?"rgba(0, 71, 231, 0.24)":e.color.border};
  background: ${({theme:e,$active:n})=>n?e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.09), rgba(17, 26, 46, 0.98))":"linear-gradient(180deg, rgba(0, 71, 231, 0.05), rgba(255, 255, 255, 0.98))":e.color.surface};
  box-shadow: ${({theme:e,$active:n})=>n?e.shadow.md:e.shadow.sm};
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
`;r(Ie)`
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
`;r(M)`
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
`;r(M)`
  overflow: hidden;
`;r(M)`
  border-style: dashed;
`;const La=e=>Z[e]??Z[Sa];function Oa(){var Q;const{storeId:e=""}=Me(),[n,c]=Be(),{stores:x}=ye(),d=l.useMemo(()=>x.find(a=>a.id===e)??xe(e)??x[0],[e,x]),{secciones:h,cargando:v}=ua(e),f=l.useMemo(()=>({intro:(d==null?void 0:d.summary)??"",sections:h.length>0?h:La(e).sections}),[h,d,e]),b=n.get("pedido"),p=l.useMemo(()=>b?$e.find(a=>a.id===b&&a.storeId===d.id)??null:null,[b,d.id]),u=l.useMemo(()=>{if(!p)return f;const a=new Set(p.items.map(i=>i.productId));return{...f,sections:f.sections.map(i=>({...i,products:i.products.filter(s=>a.has(s.id))})).filter(i=>i.products.length>0)}},[f,p]),k=l.useMemo(()=>p?Object.fromEntries(p.items.map(a=>[a.productId,a.quantity])):{},[p]),g=l.useMemo(()=>u.sections.flatMap(a=>a.products),[u]),[y,z]=l.useState(""),[t,m]=l.useState("all"),[$,j]=l.useState(((Q=g[0])==null?void 0:Q.id)??""),[w,O]=l.useState({});l.useEffect(()=>{var i;const a=Object.fromEntries(g.map(s=>[s.id,0]));z(""),m("all"),j(((i=g[0])==null?void 0:i.id)??""),O(a)},[g,d.id]);const H=n.get("oferta"),T=l.useRef(null);l.useEffect(()=>{if(!H||v)return;const a=T.current;if(!a)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:i?"auto":"smooth",block:"start"})});return()=>window.cancelAnimationFrame(s)},[v,H,d.id]);const I=l.useMemo(()=>{const a=y.trim();return u.sections.filter(i=>t==="all"||i.id===t).map(i=>({...i,products:i.products.filter(s=>Ia(a,i,s))})).filter(i=>i.products.length>0)},[t,u,y]),S=l.useMemo(()=>I.flatMap(a=>a.products),[I]);l.useEffect(()=>{S.length!==0&&(S.some(a=>a.id===$)||j(S[0].id))},[$,S]);const B=l.useMemo(()=>S.find(a=>a.id===$)??S[0]??g[0],[g,$,S]),R=l.useMemo(()=>!B||p?[]:B.suggestions.map(a=>g.find(i=>i.id===a)).filter(a=>!!a).slice(0,4),[g,B]),P=l.useMemo(()=>Object.values(w).reduce((a,i)=>a+i,0),[w]),se=l.useMemo(()=>g.reduce((a,i)=>a+i.price*(w[i.id]??0),0),[g,w]),U=l.useRef(null),[ne,N]=l.useState(0);l.useLayoutEffect(()=>{const a=U.current;if(!a){N(0);return}const i=new ResizeObserver(()=>{const s=Number.parseFloat(getComputedStyle(a).bottom)||0;N(a.offsetHeight+s)});return i.observe(a),()=>i.disconnect()},[P]),l.useMemo(()=>g.map(a=>({...a,quantity:w[a.id]??0})).filter(a=>a.quantity>0).sort((a,i)=>i.quantity-a.quantity).slice(0,3),[g,w]),l.useMemo(()=>{const a=y.trim().toLowerCase(),i=a?u.sections.filter(s=>s.label.toLowerCase().includes(a)||s.description.toLowerCase().includes(a)):u.sections;return i.length>0?i.slice(0,3):u.sections.slice(0,3)},[u.sections,y]);const de=()=>{const a=new URLSearchParams(n);a.delete("pedido"),c(a,{replace:!0})},le=a=>{a.preventDefault()},ce=(a,i)=>{O(s=>{const L=Math.max(0,(s[a]??0)+i);return{...s,[a]:L}}),j(a)},D=(a,i=1)=>{const s=g.find(L=>L.id===a);s&&(_e({id:s.id,product:s.name,store:d.name,storeId:d.id,categoryId:s.categoryId,price:s.price,saleUnit:s.saleUnit,tamano:s.tamano},i),ce(a,i))};return o.jsxs(we,{showSearch:!1,children:[o.jsx(F,{children:o.jsx(A,{children:o.jsx(ma,{id:d.id,name:d.name,category:d.category,categoryId:d.id,address:d.address,hours:d.hours,distanceKm:d.distanceKm,rating:d.rating,openNow:d.openNow,minOrder:d.minOrder})})}),o.jsx(F,{children:o.jsx(A,{children:o.jsxs(za,{children:[p?o.jsxs(wa,{children:[o.jsx(Ne,{size:20,"aria-hidden":"true"}),o.jsxs(ja,{children:[o.jsxs(va,{children:["Productos del pedido ",p.code]}),o.jsxs(ka,{children:[p.date," · ",q(p.total)]})]}),o.jsx(Ca,{type:"button",onClick:de,children:"Ver todo el comercio"})]}):null,o.jsx(je,{onSubmit:le,children:o.jsxs(ve,{htmlFor:"store-search",children:[o.jsx(ke,{children:"Buscar productos dentro del comercio"}),o.jsxs(Ce,{children:[o.jsx(De,{size:18,"aria-hidden":"true"}),o.jsx(Se,{id:"store-search",value:y,onChange:a=>z(a.target.value),placeholder:`Buscar en ${d.name}...`,"aria-label":"Buscar productos dentro del comercio"})]})]})}),o.jsxs(V,{"aria-label":"Categorías del comercio",children:[o.jsx(ee,{type:"button","data-active":t==="all",onClick:()=>m("all"),children:"Todas"}),u.sections.map(a=>o.jsx(ee,{type:"button","data-active":t===a.id,onClick:()=>m(a.id),children:a.label},a.id))]}),I.length>0?I.map((a,i)=>o.jsxs(ze,{ref:a.id===te?T:void 0,children:[o.jsx(_,{title:a.label,subtitle:a.description}),o.jsx(Pa,{children:a.products.map((s,L)=>o.jsx(X,{name:s.name,price:s.price,saleUnit:s.saleUnit,categoryId:s.categoryId,badge:p?`${k[s.id]??1} u.`:s.badge,quantity:w[s.id]??0,onAdd:pe=>D(s.id,pe),priority:i===0&&L<4},s.id))})]},a.id)):o.jsx(Pe,{icon:Qe,title:"Sin resultados",text:"Probá con otro término o cambiá de categoría.",dashed:!0})]})})}),R.length>0&&o.jsx(F,{children:o.jsxs(A,{children:[o.jsx(_,{title:"También podés llevar",chip:"Sugeridos",subtitle:"Combinaciones que van con lo que estás pidiendo."}),o.jsx(V,{as:Le,"aria-label":"Productos sugeridos",children:R.map(a=>o.jsx(X,{name:a.name,price:a.price,categoryId:a.categoryId,badge:a.badge,quantity:w[a.id]??0,onAdd:i=>D(a.id,i)},a.id))})]})}),P>0&&o.jsx(ha,{style:{height:ne}}),P>0&&o.jsxs(ba,{ref:U,children:[o.jsxs(fa,{children:[o.jsxs(ya,{children:[P," ",P===1?"producto":"productos"]}),o.jsx(xa,{children:q(se)})]}),o.jsxs($a,{to:"/carrito",children:[o.jsx(Ve,{size:18,"aria-hidden":"true"}),"Ver carrito"]})]})]})}r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function Ia(e,n,c){if(!e)return!0;const x=e.toLowerCase();return[n.label,n.description,c.name,c.description,c.categoryLabel].join(" ").toLowerCase().includes(x)}export{Oa as StoreProfileScreen};
