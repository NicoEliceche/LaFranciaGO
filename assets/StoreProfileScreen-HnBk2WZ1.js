import{j as o,Q as ae,R as oe,T as re,U as ie,r as T,V as me,W as V,X as G,Y as ue,Z as be,_ as he,$ as fe,h as ye,a0 as xe,u as $e,a1 as we,a2 as ve,a3 as je,B as ke,M as Ce,a4 as O,S as H,O as Se,a5 as ze,a6 as Ie,a7 as Pe,a8 as Le,a9 as Me,G as W,p as qe,q as X,E as Fe,aa as Be,ab as Ae,a as B,d as Ee}from"./index-B-yV5OnI.js";import{r as l,L as Oe,i as He,e as Re}from"./react-CKwpxk66.js";import{q as r,A as Te}from"./estilos-D2nr0glO.js";import{P as Ue,a3 as De,C as Ne,t as Qe,k as Ye,a4 as _e,M as Ve,i as Ge,a as We,Y as Xe}from"./iconos-24LHuulG.js";const Je=r.article`
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
`,Ke=r.div`
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
`,Ze=r.h3`
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
`,ea=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
  /* Sin esto el precio empuja al selector fuera de la tarjeta en vez de
     achicarse: una columna de 168px con un texto de "1 kg + 1/4" al lado no
     entra, y lo que se salía era el borde. */
  min-width: 0;
`,aa=r.div`
  display: grid;
  gap: 0;
  min-width: 0;
`,oa=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
  /* El precio es lo único que no puede partirse en dos renglones. */
  white-space: nowrap;
`,ra=r.span`
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
`,ia=r.div`
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
`,J=r.button`
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
`,ta=r.span`
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
`,sa=r.button`
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
`,na=r.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
`,da=r.span`
  display: block;
  margin-top: -0.1rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,S=1;function K({name:e,price:s,saleUnit:p,categoryId:x,badge:d,quantity:f,onAdd:j,priority:y}){const[h,g]=l.useState(S),[m,$]=l.useState(!1),u=()=>{j(h),g(S),$(!0),window.setTimeout(()=>$(!1),1400)};return o.jsxs(Je,{"data-active":f>0,children:[o.jsxs(ae,{$ratio:"1 / 1",children:[o.jsx(oe,{src:re(x),alt:e,loading:y?"eager":"lazy"}),d?o.jsx(ie,{children:o.jsx(ra,{children:d})}):null]}),o.jsxs(Ke,{children:[o.jsx(Ze,{children:e}),o.jsxs(ea,{children:[o.jsxs(aa,{children:[o.jsx(oa,{children:T(s)}),p&&p!=="unidad"?o.jsx(da,{children:me(p)}):null]}),o.jsxs(ia,{children:[o.jsx(J,{type:"button",onClick:()=>g(w=>Math.min(w+1,V(p)+S)),disabled:h-S>=V(p),"aria-label":`Agregar cantidad de ${e}`,children:o.jsx(Ue,{size:15,"aria-hidden":"true"})}),o.jsx(ta,{"aria-live":"polite",children:G(p,h-S)}),o.jsx(J,{type:"button",onClick:()=>g(w=>Math.max(S,w-1)),disabled:h<=S,"aria-label":`Quitar cantidad de ${e}`,children:o.jsx(De,{size:15,"aria-hidden":"true"})})]})]}),o.jsx(sa,{type:"button",onClick:u,"data-added":m,children:m?o.jsxs(o.Fragment,{children:[o.jsx(Ne,{size:15,"aria-hidden":"true"}),"Agregado"]}):"Agregar al carrito"}),f>0?o.jsxs(na,{children:[G(p,f-S)," en el pedido"]}):null]})]})}const la=r.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,ca=r.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,pa=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
`,ga=r.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,ma=r.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ua=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,R=r.span`
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
`,ba=r.span`
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
`,ha=r.span`
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
`,fa=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  transition: color 160ms ease, transform 160ms ease;

  &[data-activo='true'] {
    color: ${({theme:e})=>e.color.danger};
  }

  &:hover {
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function ya({id:e,name:s,category:p,categoryId:x,address:d,hours:f,distanceKm:j,rating:y,openNow:h,minOrder:g,favorito:m,onToggleFavorito:$}){return o.jsxs(la,{children:[o.jsxs(ae,{$ratio:"21 / 9",children:[o.jsx(oe,{src:re(x),alt:p,loading:"eager"}),o.jsxs(ie,{children:[o.jsx(ba,{"data-open":h,children:h?"Abierto ahora":"Cerrado"}),y!==void 0?o.jsxs(ha,{children:[o.jsx(Qe,{size:13,"aria-hidden":"true",fill:"currentColor"}),y.toFixed(1)]}):null,$?o.jsx(fa,{type:"button","data-activo":m,onClick:()=>$(e),"aria-pressed":m,"aria-label":m?`Quitar ${s} de favoritos`:`Guardar ${s} en favoritos`,children:o.jsx(Ye,{size:17,"aria-hidden":"true",fill:m?"currentColor":"none"})}):null]}),o.jsx(ca,{children:o.jsx(ue,{$size:"3.5rem",$tone:he(e),children:be(s)})})]}),o.jsxs(pa,{children:[o.jsx(ga,{children:s}),o.jsxs(ma,{children:[p,j!==void 0?` · ${fe(j)}`:""]}),o.jsxs(ua,{children:[o.jsxs(R,{children:[o.jsx(_e,{size:14,"aria-hidden":"true"}),f]}),o.jsxs(R,{children:[o.jsx(Ve,{size:14,"aria-hidden":"true"}),d]}),o.jsxs(R,{children:["Mínimo ",T(g)]})]})]})]})}const q=["blue","green","orange","violet","red","slate"],te="ofertas";function F(e,s){if(e.tipo==="descuento")return{id:e.id,tipo:"descuento",titulo:e.titulo,porcentaje:e.porcentaje,precioFinal:Math.round(s*(100-(e.porcentaje??0)))/100,cantidad:null,etiqueta:`${e.porcentaje}% off`};if(e.tipo==="cantidad")return{id:e.id,tipo:"cantidad",titulo:e.titulo,porcentaje:null,precioFinal:null,cantidad:e.cantidad,etiqueta:`${e.cantidad} x $${e.precioFinal.toLocaleString("es-AR")}`};const p=e.productos.length-1;return{id:e.id,tipo:"combo",titulo:e.titulo,porcentaje:null,precioFinal:null,cantidad:null,etiqueta:p>0?`Combo con ${p} más`:"En combo"}}function xa(e){const[s,p]=l.useState(null),[x,d]=l.useState(!0);return l.useEffect(()=>{if(!e||!ye()){d(!1);return}let f=!0;return d(!0),xe.detalle(e).then(({comercio:j,categorias:y,productos:h,ofertas:g})=>{if(!f)return;const m=new Map;for(const i of g??[])for(const c of i.productos)m.has(c.id)||m.set(c.id,i);const $=(i,c,b)=>{var k;const v=m.get(i.id)??null;return{id:i.id,name:i.nombre,description:i.descripcion??"",categoryId:i.categoria_id??"general",categoryLabel:c,price:i.precio,saleUnit:i.unidad_venta,tone:q[b%q.length],badge:v?F(v,i.precio).etiqueta:void 0,suggestions:[],foto:((k=i.fotos)==null?void 0:k[0])??null,stock:i.stock,tamano:i.tamano,oferta:v?F(v,i.precio):null,productoRealId:i.id}},u=y.map(i=>({id:i.id,label:i.nombre,description:"",products:h.filter(c=>c.categoria_id===i.id).map((c,b)=>$(c,i.nombre,b))})).filter(i=>i.products.length>0),w=i=>{var c;return((c=y.find(b=>b.id===i.categoria_id))==null?void 0:c.nombre)??"Otros"},I=new Map(h.map((i,c)=>[i.id,$(i,w(i),c)])),C=(g??[]).filter(i=>i.productos.some(c=>I.has(c.id))).map((i,c)=>{const b=I.get(i.productos.find(k=>I.has(k.id)).id),v=i.productos.length;return{...b,id:i.id,productoRealId:b.productoRealId,name:i.titulo,description:i.descripcion??(v>1?`Lleva ${v} productos: ${i.productos.map(k=>k.nombre).join(", ")}`:""),price:i.precioFinal,saleUnit:i.tipo==="descuento"?b.saleUnit:"unidad",tone:q[c%q.length],foto:i.fotoUrl??b.foto,badge:F(i,b.price).etiqueta,oferta:F(i,b.price)}});C.length>0&&u.unshift({id:te,label:"Ofertas",description:"Lo que está en promoción ahora.",products:C});const P=h.filter(i=>!i.categoria_id||!y.some(c=>c.id===i.categoria_id));P.length>0&&u.push({id:"otros",label:"Otros productos",description:"",products:P.map((i,c)=>$(i,"Otros",c))}),p({intro:j.descripcion??"",secciones:u,ofertas:g??[],error:!1})}).catch(()=>{f&&p({intro:"",secciones:[],ofertas:[],error:!0})}).finally(()=>{f&&d(!1)}),()=>{f=!1}},[e]),{intro:(s==null?void 0:s.intro)??"",secciones:(s==null?void 0:s.secciones)??[],ofertas:(s==null?void 0:s.ofertas)??[],error:(s==null?void 0:s.error)??!1,cargando:x}}r.div`
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
`;r.div`
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
  ${({theme:e})=>e.mode==="dark"&&Te`
      background: linear-gradient(135deg, #0B1430 0%, #10224F 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`;r.div.attrs({"aria-hidden":!0})`
  flex: 0 0 auto;
  transition: height 180ms ease;
`;r.div`
  display: grid;
  gap: 0;
  min-width: 0;
`;r.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`;r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
`;r(Oe)`
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
`;const $a=r.div`
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
`,wa=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,va=r.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ja=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,ka=r.button`
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
`,Z={"almacen-juan":{intro:"Bebidas, almacén y limpieza para resolver compras rápidas sin salir del comercio.",sections:[{id:"bebidas",label:"Bebidas",description:"Para el combo de siempre y el finde.",products:[{id:"coca-cola-225",name:"Coca Cola 2,25 L",description:"La botella que más sale para el carrito diario.",categoryId:"bebidas",categoryLabel:"Bebidas",price:3500,tone:"blue",badge:"Más pedido",suggestions:["fernet-750","hielo-2kg"]},{id:"fernet-750",name:"Fernet 750 ml",description:"Clásico de reunión para el fin de semana.",categoryId:"bebidas",categoryLabel:"Bebidas",price:12900,tone:"green",badge:"Combo finde",suggestions:["coca-cola-225","hielo-2kg"]},{id:"hielo-2kg",name:"Hielo 2 kg",description:"Bolsita lista para acompañar bebidas frías.",categoryId:"bebidas",categoryLabel:"Bebidas",price:1200,tone:"slate",badge:"Siempre útil",suggestions:["coca-cola-225","fernet-750"]}]},{id:"almacen",label:"Almacén",description:"Básicos de todos los días.",products:[{id:"yerba-1kg",name:"Yerba mate 1 kg",description:"Repuesto de todos los días para la alacena.",categoryId:"almacen",categoryLabel:"Almacén",price:4650,tone:"orange",badge:"Diario",suggestions:["azucar-1kg","galletitas-mixtas"]},{id:"fideos-500",name:"Fideos 500 g",description:"Una base simple para resolver la cena.",categoryId:"almacen",categoryLabel:"Almacén",price:980,tone:"violet",badge:"Base",suggestions:["salsa-tomate","queso-rallado"]},{id:"galletitas-mixtas",name:"Galletitas mixtas",description:"Para la merienda o el kiosco de la casa.",categoryId:"almacen",categoryLabel:"Almacén",price:1450,tone:"blue",badge:"Snack",suggestions:["yerba-1kg","fideos-500"]}]},{id:"limpieza",label:"Limpieza",description:"Casa y cocina en un solo pedido.",products:[{id:"detergente-900",name:"Detergente 900 ml",description:"Para dejar la cocina lista en una pasada.",categoryId:"limpieza",categoryLabel:"Limpieza",price:2450,tone:"red",badge:"Hogar",suggestions:["esponja-duo","lavandina-1l"]},{id:"lavandina-1l",name:"Lavandina 1 L",description:"Clave para limpieza pesada del hogar.",categoryId:"limpieza",categoryLabel:"Limpieza",price:1790,tone:"blue",badge:"Sanitiza",suggestions:["detergente-900","esponja-duo"]},{id:"esponja-duo",name:"Esponja duo",description:"Pequeño básico que completa cualquier limpieza.",categoryId:"limpieza",categoryLabel:"Limpieza",price:690,tone:"orange",badge:"Complemento",suggestions:["detergente-900","lavandina-1l"]}]}]},"panaderia-la-esquina":{intro:"Pan fresco, facturas y tortas listas para el desayuno, la merienda y los encargos.",sections:[{id:"pan",label:"Pan",description:"Pan fresco y de salida rápida.",products:[{id:"pan-flauta",saleUnit:"peso",name:"Pan flauta x 6",description:"Salida clásica para la mesa de todos los días.",categoryId:"pan",categoryLabel:"Pan",price:750,tone:"orange",badge:"Recién hecho",suggestions:["manteca-200","medialunas-x6"]},{id:"pan-lactal",saleUnit:"peso",name:"Pan lactal",description:"Práctico para tostadas y viandas.",categoryId:"pan",categoryLabel:"Pan",price:1850,tone:"blue",badge:"Diario",suggestions:["manteca-200","mermelada-frutilla"]},{id:"tostadas-rusticas",name:"Tostadas ricas",description:"Para acompañar el mate sin vueltas.",categoryId:"pan",categoryLabel:"Pan",price:990,tone:"slate",badge:"Merienda",suggestions:["pan-lactal","mermelada-frutilla"]}]},{id:"facturas",label:"Facturas",description:"La bandeja de siempre.",products:[{id:"medialunas-x6",saleUnit:"docena",name:"Medialunas x 6",description:"Perfectas para salir con café o mate.",categoryId:"facturas",categoryLabel:"Facturas",price:2400,tone:"violet",badge:"Favoritas",suggestions:["cafe-molido","facturas-surtidas"]},{id:"facturas-surtidas",saleUnit:"docena",name:"Facturas surtidas",description:"Variadas para compartir en familia.",categoryId:"facturas",categoryLabel:"Facturas",price:1900,tone:"orange",badge:"Compartir",suggestions:["medialunas-x6","cafe-molido"]},{id:"cafe-molido",name:"Café molido",description:"El acompañamiento que hace crecer el ticket.",categoryId:"facturas",categoryLabel:"Facturas",price:3600,tone:"red",badge:"Combo",suggestions:["medialunas-x6","facturas-surtidas"]}]},{id:"tortas",label:"Tortas",description:"Pedidos especiales y celebraciones.",products:[{id:"torta-cumple",name:"Torta de cumpleaños",description:"Lista para encargar con anticipación.",categoryId:"tortas",categoryLabel:"Tortas",price:12e3,tone:"red",badge:"Encargo",suggestions:["velas","facturas-surtidas"]},{id:"budin-vainilla",name:"Budin de vainilla",description:"Para la mesa dulce o la merienda.",categoryId:"tortas",categoryLabel:"Tortas",price:1850,tone:"green",badge:"Dulce",suggestions:["cafe-molido","medialunas-x6"]},{id:"velas",name:"Velas numeradas",description:"Complemento simple para el pedido.",categoryId:"tortas",categoryLabel:"Tortas",price:650,tone:"blue",badge:"Extra",suggestions:["torta-cumple","budin-vainilla"]}]}]},"farmacia-centro":{intro:"Cuidado personal, salud básica y perfumería para resolver sin moverte de la app.",sections:[{id:"cuidado",label:"Cuidado",description:"Productos de uso diario.",products:[{id:"shampoo-400",name:"Shampoo 400 ml",description:"Limpieza cotidiana con buena relación precio uso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:3950,tone:"blue",badge:"Precio bajo",suggestions:["acondicionador","jabon-liquido"]},{id:"jabon-liquido",name:"Jabon liquido",description:"Para baño y cocina en un solo paso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:1650,tone:"green",badge:"Básico",suggestions:["shampoo-400","acondicionador"]},{id:"acondicionador",name:"Acondicionador",description:"Complemento para el cabello de todos los días.",categoryId:"cuidado",categoryLabel:"Cuidado",price:4100,tone:"violet",badge:"Complemento",suggestions:["shampoo-400","protector-solar"]}]},{id:"bienestar",label:"Bienestar",description:"Cosas que se llevan rápido cuando hacen falta.",products:[{id:"omeprazol-20",name:"Omeprazol 20 mg",description:"Compra de rutina para tener a mano.",categoryId:"bienestar",categoryLabel:"Bienestar",price:7150,tone:"red",badge:"Salud",suggestions:["protector-solar","alcohol-gel"]},{id:"alcohol-gel",name:"Alcohol en gel",description:"Siempre útil para mochila o cartera.",categoryId:"bienestar",categoryLabel:"Bienestar",price:1850,tone:"blue",badge:"Práctico",suggestions:["omeprazol-20","protector-solar"]},{id:"protector-solar",name:"Protector solar",description:"Para cuidar la piel en la temporada larga.",categoryId:"bienestar",categoryLabel:"Bienestar",price:9200,tone:"orange",badge:"Temporada",suggestions:["alcohol-gel","omeprazol-20"]}]},{id:"perfumeria",label:"Perfumería",description:"Higiene y cuidado personal.",products:[{id:"desodorante",name:"Desodorante",description:"El complemento de todos los días.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:3250,tone:"slate",badge:"Uso diario",suggestions:["shampoo-400","jabon-liquido"]},{id:"crema-manos",name:"Crema de manos",description:"Para completar la compra de perfumería.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:2750,tone:"violet",badge:"Extra",suggestions:["desodorante","protector-solar"]},{id:"toallitas",name:"Toallitas húmedas",description:"Prácticas para mochila o changuito.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:1480,tone:"green",badge:"Complemento",suggestions:["desodorante","crema-manos"]}]}]},"carniceria-central":{intro:"Cortes frescos, milanesas y pedidos por kilo listos para armar el pedido completo.",sections:[{id:"cortes",label:"Cortes",description:"Para el almuerzo o la noche.",products:[{id:"bife-ancho",saleUnit:"pesoMedio",name:"Bife ancho",description:"Un corte protagonista para la compra principal.",categoryId:"cortes",categoryLabel:"Cortes",price:9900,tone:"red",badge:"Premium",suggestions:["asado-especial","picada-premium"]},{id:"asado-especial",saleUnit:"pesoMedio",name:"Asado especial",description:"Para el finde y las comidas largas.",categoryId:"cortes",categoryLabel:"Cortes",price:10900,tone:"orange",badge:"Finde",suggestions:["bife-ancho","hamburguesas-caseras"]},{id:"picada-premium",saleUnit:"pesoMedio",name:"Picada premium",description:"Para compartir sin complicarse.",categoryId:"cortes",categoryLabel:"Cortes",price:8400,tone:"violet",badge:"Compartir",suggestions:["asado-especial","bife-ancho"]}]},{id:"milanesas",label:"Milanesas",description:"La compra de siempre para resolver rápido.",products:[{id:"milanesas-kg",saleUnit:"pesoMedio",name:"Milanesas x kg",description:"Una de las salidas más prácticas de la carnicería.",categoryId:"milanesas",categoryLabel:"Milanesas",price:9100,tone:"blue",badge:"Mejor salida",suggestions:["hamburguesas-caseras","asado-especial"]},{id:"hamburguesas-caseras",name:"Hamburguesas caseras",description:"Para armar el pedido del día en un solo toque.",categoryId:"milanesas",categoryLabel:"Milanesas",price:6200,tone:"green",badge:"Listo para cocinar",suggestions:["milanesas-kg","asado-especial"]},{id:"pollo-entero",name:"Pollo entero",description:"Otro clásico para completar la compra.",categoryId:"milanesas",categoryLabel:"Milanesas",price:5450,tone:"orange",badge:"Clásico",suggestions:["milanesas-kg","bife-ancho"]}]},{id:"extras",label:"Extras",description:"Pedidos secundarios que completan el viaje.",products:[{id:"hielo-carniceria",name:"Hielo 2 kg",description:"Perfecto para acompañar el pedido del finde.",categoryId:"extras",categoryLabel:"Extras",price:1200,tone:"slate",badge:"Complemento",suggestions:["asado-especial","picada-premium"]},{id:"salsas",name:"Salsa parrillera",description:"El detalle que suma al pedido principal.",categoryId:"extras",categoryLabel:"Extras",price:980,tone:"red",badge:"Extra",suggestions:["bife-ancho","asado-especial"]},{id:"condimentos",name:"Condimentos",description:"Los básicos que completan la compra.",categoryId:"extras",categoryLabel:"Extras",price:690,tone:"violet",badge:"Básico",suggestions:["salsas","hielo-carniceria"]}]}]}},Ca="almacen-juan",Sa=r.div`
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
`,za=r.div`
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
`;r(B)`
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
`;r(Ee)`
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
`;r(B)`
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
`;r(B)`
  overflow: hidden;
`;r(B)`
  border-style: dashed;
`;const Ia=e=>Z[e]??Z[Ca];function Aa(){var _;const{storeId:e=""}=He(),[s,p]=Re(),{stores:x}=$e(),d=l.useMemo(()=>x.find(a=>a.id===e)??we(e)??x[0],[e,x]),{secciones:f,cargando:j}=xa(e),y=l.useMemo(()=>({intro:(d==null?void 0:d.summary)??"",sections:f.length>0?f:Ia(e).sections}),[f,d,e]),h=s.get("pedido"),g=l.useMemo(()=>h?ve.find(a=>a.id===h&&a.storeId===d.id)??null:null,[h,d.id]),m=l.useMemo(()=>{if(!g)return y;const a=new Set(g.items.map(t=>t.productId));return{...y,sections:y.sections.map(t=>({...t,products:t.products.filter(n=>a.has(n.id))})).filter(t=>t.products.length>0)}},[y,g]),$=l.useMemo(()=>g?Object.fromEntries(g.items.map(a=>[a.productId,a.quantity])):{},[g]),u=l.useMemo(()=>m.sections.flatMap(a=>a.products),[m]),[w,I]=l.useState(""),[C,P]=l.useState("all"),[i,c]=l.useState(((_=u[0])==null?void 0:_.id)??""),[b,v]=l.useState({});l.useEffect(()=>{var t;const a=Object.fromEntries(u.map(n=>[n.id,0]));I(""),P("all"),c(((t=u[0])==null?void 0:t.id)??""),v(a)},[u,d.id]);const k=s.get("oferta"),U=l.useRef(null);l.useEffect(()=>{if(!k||j)return;const a=U.current;if(!a)return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:t?"auto":"smooth",block:"start"})});return()=>window.cancelAnimationFrame(n)},[j,k,d.id]);const M=l.useMemo(()=>{const a=w.trim();return m.sections.filter(t=>C==="all"||t.id===C).map(t=>({...t,products:t.products.filter(n=>Pa(a,t,n))})).filter(t=>t.products.length>0)},[C,m,w]),z=l.useMemo(()=>M.flatMap(a=>a.products),[M]);l.useEffect(()=>{z.length!==0&&(z.some(a=>a.id===i)||c(z[0].id))},[i,z]);const A=l.useMemo(()=>z.find(a=>a.id===i)??z[0]??u[0],[u,i,z]),D=l.useMemo(()=>!A||g?[]:A.suggestions.map(a=>u.find(t=>t.id===a)).filter(a=>!!a).slice(0,4),[u,A]),N=je(),{favoritos:se}=ke(),E=l.useMemo(()=>N.filter(a=>a.storeId===d.id),[N,d.id]),ne=E.length;l.useMemo(()=>E.reduce((a,t)=>a+t.subtotal,0),[E]);const de=l.useRef(null),[La,Q]=l.useState(0);l.useLayoutEffect(()=>{const a=de.current;if(!a){Q(0);return}const t=new ResizeObserver(()=>{const n=Number.parseFloat(getComputedStyle(a).bottom)||0;Q(a.offsetHeight+n)});return t.observe(a),()=>t.disconnect()},[ne]),l.useMemo(()=>u.map(a=>({...a,quantity:b[a.id]??0})).filter(a=>a.quantity>0).sort((a,t)=>t.quantity-a.quantity).slice(0,3),[u,b]),l.useMemo(()=>{const a=w.trim().toLowerCase(),t=a?m.sections.filter(n=>n.label.toLowerCase().includes(a)||n.description.toLowerCase().includes(a)):m.sections;return t.length>0?t.slice(0,3):m.sections.slice(0,3)},[m.sections,w]);const le=()=>{const a=new URLSearchParams(s);a.delete("pedido"),p(a,{replace:!0})},ce=a=>{a.preventDefault()},pe=(a,t)=>{v(n=>{const L=Math.max(0,(n[a]??0)+t);return{...n,[a]:L}}),c(a)},Y=(a,t=1)=>{const n=u.find(L=>L.id===a);n&&(Ae({id:n.id,productoRealId:n.productoRealId,product:n.name,store:d.name,storeId:d.id,categoryId:n.categoryId,price:n.price,saleUnit:n.saleUnit,tamano:n.tamano},t),pe(a,t))};return o.jsxs(Ce,{showSearch:!1,children:[o.jsx(O,{children:o.jsx(H,{children:o.jsx(ya,{id:d.id,name:d.name,category:d.category,categoryId:d.id,address:d.address,hours:d.hours,distanceKm:d.distanceKm,rating:d.rating,openNow:d.openNow,favorito:se.has(d.id),onToggleFavorito:Se,minOrder:d.minOrder})})}),o.jsx(O,{children:o.jsx(H,{children:o.jsxs(Sa,{children:[g?o.jsxs($a,{children:[o.jsx(Ge,{size:20,"aria-hidden":"true"}),o.jsxs(wa,{children:[o.jsxs(va,{children:["Productos del pedido ",g.code]}),o.jsxs(ja,{children:[g.date," · ",T(g.total)]})]}),o.jsx(ka,{type:"button",onClick:le,children:"Ver todo el comercio"})]}):null,o.jsx(ze,{onSubmit:ce,children:o.jsxs(Ie,{htmlFor:"store-search",children:[o.jsx(Pe,{children:"Buscar productos dentro del comercio"}),o.jsxs(Le,{children:[o.jsx(We,{size:18,"aria-hidden":"true"}),o.jsx(Me,{id:"store-search",value:w,onChange:a=>I(a.target.value),placeholder:`Buscar en ${d.name}...`,"aria-label":"Buscar productos dentro del comercio"})]})]})}),o.jsxs(W,{"aria-label":"Categorías del comercio",children:[o.jsx(ee,{type:"button","data-active":C==="all",onClick:()=>P("all"),children:"Todas"}),m.sections.map(a=>o.jsx(ee,{type:"button","data-active":C===a.id,onClick:()=>P(a.id),children:a.label},a.id))]}),M.length>0?M.map((a,t)=>o.jsxs(qe,{ref:a.id===te?U:void 0,children:[o.jsx(X,{title:a.label,subtitle:a.description}),o.jsx(za,{children:a.products.map((n,L)=>o.jsx(K,{name:n.name,price:n.price,saleUnit:n.saleUnit,categoryId:n.categoryId,badge:g?`${$[n.id]??1} u.`:n.badge,quantity:b[n.id]??0,onAdd:ge=>Y(n.id,ge),priority:t===0&&L<4},n.id))})]},a.id)):o.jsx(Fe,{icon:Xe,title:"Sin resultados",text:"Probá con otro término o cambiá de categoría.",dashed:!0})]})})}),D.length>0&&o.jsx(O,{children:o.jsxs(H,{children:[o.jsx(X,{title:"También podés llevar",chip:"Sugeridos",subtitle:"Combinaciones que van con lo que estás pidiendo."}),o.jsx(W,{as:Be,"aria-label":"Productos sugeridos",children:D.map(a=>o.jsx(K,{name:a.name,price:a.price,categoryId:a.categoryId,badge:a.badge,quantity:b[a.id]??0,onAdd:t=>Y(a.id,t)},a.id))})]})})]})}r.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function Pa(e,s,p){if(!e)return!0;const x=e.toLowerCase();return[s.label,s.description,p.name,p.description,p.categoryLabel].join(" ").toLowerCase().includes(x)}export{Aa as StoreProfileScreen};
