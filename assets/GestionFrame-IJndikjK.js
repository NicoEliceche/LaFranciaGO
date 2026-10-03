import{bo as M,j as e,bw as q,bx as L,bh as A}from"./index-BXHxC0OU.js";import{r as t,c as I,u as F}from"./react-CKwpxk66.js";import{q as i}from"./estilos-D2nr0glO.js";import{aJ as w,X as S,o as D,m as B,at as T,a9 as O,az as R,av as V,u as H,aa as G,ap as U,T as N,aq as W,ai as J,ar as K,aK as X,w as _,aL as Q,A as Y,j as Z,k as aa,aM as ea,aN as oa}from"./iconos-NomGb_FP.js";const ia=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  margin-bottom: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};

  border: 1px solid ${({theme:a})=>a.color.border};
  border-inline-start: 3px solid ${({theme:a})=>a.color.primary};
  border-radius: ${({theme:a})=>a.radius.md};
  background: ${({theme:a})=>a.color.surfaceMuted};

  > svg {
    flex: none;
    color: ${({theme:a})=>a.color.primary};
  }

  > div {
    flex: 1 1 auto;
    min-width: 0;

    > strong {
      display: block;
      font-size: ${({theme:a})=>a.typography.size.sm};
    }

    > span {
      display: block;
      color: ${({theme:a})=>a.color.textSoft};
      font-size: ${({theme:a})=>a.typography.size.xs};
    }
  }

  /* En el teléfono no entra todo en una línea. */
  @media (max-width: calc(${({theme:a})=>a.breakpoints.md} - 1px)) {
    flex-wrap: wrap;
  }
`,na=i.div`
  position: fixed;
  inset: 0;
  z-index: 100;

  display: grid;
  place-items: center;
  padding: ${({theme:a})=>a.spacing[3]};

  background: rgba(5, 8, 22, 0.82);
  backdrop-filter: blur(2px);
`,ta=i.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[2]};
  width: min(30rem, 100%);
  padding: ${({theme:a})=>a.spacing[4]};

  border: 1px solid ${({theme:a})=>a.color.border};
  border-radius: ${({theme:a})=>a.radius.lg};
  background: ${({theme:a})=>a.color.surface};
  box-shadow: ${({theme:a})=>a.shadow.lg};
  text-align: center;

  > svg {
    justify-self: center;
    color: ${({theme:a})=>a.color.primary};
  }

  > h2 {
    margin: 0;
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.lg};
    line-height: 1.2;
  }
`,$=i.p`
  margin: 0;
  color: ${({theme:a})=>a.color.text};
  font-size: ${({theme:a})=>a.typography.size.sm};
  line-height: 1.45;

  &[data-tono='suave'] {
    color: ${({theme:a})=>a.color.textSoft};
    font-size: ${({theme:a})=>a.typography.size.xs};
  }
`,j=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing[2]};

  > button {
    min-height: 2.3rem;
    padding: 0 ${({theme:a})=>a.spacing[3]};

    border: 1px solid ${({theme:a})=>a.color.border};
    border-radius: ${({theme:a})=>a.radius.md};
    background: ${({theme:a})=>a.color.surface};
    color: ${({theme:a})=>a.color.text};
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.xs};
    font-weight: 600;
    cursor: pointer;

    &[data-tono='fuerte'] {
      border-color: ${({theme:a})=>a.color.primary};
      background: ${({theme:a})=>a.color.primary};
      color: ${({theme:a})=>a.color.onPrimary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:focus-visible {
      outline: 2px solid ${({theme:a})=>a.color.primary};
      outline-offset: 2px;
    }
  }
`,ra=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 1.9rem;
  height: 1.9rem;

  border: 0;
  border-radius: ${({theme:a})=>a.radius.md};
  background: transparent;
  color: ${({theme:a})=>a.color.textSoft};
  cursor: pointer;

  &:hover {
    background: ${({theme:a})=>a.color.surface};
    color: ${({theme:a})=>a.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.color.primary};
    outline-offset: 1px;
  }
`,k="lafranciago:actualizacion:pospuesta";function sa(){const a=new Date,p=new Date(a);p.setHours(22,0,0,0);const d=new Date(a);return d.setDate(d.getDate()+1),d.setHours(7,0,0,0),[...p>a?[{etiqueta:"Esta noche a las 22",valor:p.toISOString()}]:[],{etiqueta:"Mañana antes de abrir",valor:d.toISOString()}]}function da(){const[a,p]=t.useState(null),[d,f]=t.useState(!1),[u,g]=t.useState(!1),l=t.useCallback(async()=>{const o=window.lafranciagoEscritorio;if(o!=null&&o.actualizacion)try{p(await o.actualizacion())}catch{}},[]);if(t.useEffect(()=>{if(!M())return;l();const o=window.setInterval(()=>void l(),30*60*1e3);return()=>window.clearInterval(o)},[l]),t.useEffect(()=>{localStorage.getItem(k)===new Date().toDateString()&&f(!0)},[]),!a||a.estado==="al-dia")return null;const y=a.estado==="obligatoria";if(!y&&d)return null;const h=async()=>{var o,r;g(!0);try{await((r=(o=window.lafranciagoEscritorio)==null?void 0:o.instalarAhora)==null?void 0:r.call(o))}finally{g(!1)}},m=async o=>{var r,x;g(!0);try{await((x=(r=window.lafranciagoEscritorio)==null?void 0:r.programarActualizacion)==null?void 0:x.call(r,o)),await l(),f(!0)}finally{g(!1)}},b=()=>{localStorage.setItem(k,new Date().toDateString()),f(!0)};return y?e.jsx(na,{role:"alertdialog","aria-labelledby":"titulo-actualizacion",children:e.jsxs(ta,{children:[e.jsx(w,{size:28,"aria-hidden":"true"}),e.jsx("h2",{id:"titulo-actualizacion",children:"Hay que actualizar para seguir"}),e.jsx($,{children:a.motivoObligatorio??"Esta versión ya no puede comunicarse con el sistema."}),a.novedades?e.jsx($,{"data-tono":"suave",children:a.novedades}):null,e.jsx($,{"data-tono":"suave",children:a.descargada?"La actualización ya está bajada. Tarda menos de un minuto.":"Estamos bajando la actualización…"}),e.jsx(j,{children:e.jsx("button",{type:"button","data-tono":"fuerte",onClick:h,disabled:u||!a.descargada,children:u?"Instalando…":"Actualizar ahora"})}),e.jsx($,{"data-tono":"suave",children:"Las ventas que hayan quedado guardadas sin subir no se pierden: siguen ahí después de actualizar."})]})}):e.jsxs(ia,{role:"status",children:[e.jsx(w,{size:18,"aria-hidden":"true"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Hay una versión nueva",a.ultima?` (${a.ultima})`:""]}),e.jsx("span",{children:a.programadaPara?`Se instala el ${new Date(a.programadaPara).toLocaleString("es-AR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})} · podés seguir trabajando`:a.novedades??"Podés seguir trabajando y actualizar cuando cierres."})]}),a.programadaPara?null:e.jsxs(j,{children:[sa().map(o=>e.jsx("button",{type:"button",onClick:()=>m(o.valor),disabled:u,children:o.etiqueta},o.valor)),e.jsx("button",{type:"button","data-tono":"fuerte",onClick:h,disabled:u||!a.descargada,children:"Ahora"})]}),e.jsx(ra,{type:"button",onClick:b,"aria-label":"Cerrar el aviso",children:e.jsx(S,{size:16,"aria-hidden":"true"})})]})}const la=i.div`
  display: grid;
  min-height: 100dvh;
  background: ${({theme:a})=>a.color.background};

  /* En el teléfono es una sola columna: el menú va en un cajón. */
  grid-template-columns: 1fr;

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    grid-template-columns: 15rem minmax(0, 1fr);
  }

  /* Plegado, el lateral queda del ancho de un ícono y el contenido se lleva
     el resto: en un sistema de gestión esas 12rem son dos columnas más de
     una tabla. */
  &[data-plegado='si'] {
    @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
      grid-template-columns: 3.75rem minmax(0, 1fr);
    }
  }
`,ca=i.aside`
  display: none;

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    gap: ${({theme:a})=>a.spacing[1]};

    position: sticky;
    top: 0;
    height: 100dvh;
    overflow-y: auto;
    padding: ${({theme:a})=>a.spacing[3]};

    background: ${({theme:a})=>a.color.surface};
    border-inline-end: 1px solid ${({theme:a})=>a.color.border};
  }

  &[data-plegado='si'] {
    @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
      padding-inline: ${({theme:a})=>a.spacing[1]};
    }
  }
`;i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[2]};
  margin-bottom: ${({theme:a})=>a.spacing[2]};

  > strong {
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.sm};
    line-height: 1.15;
  }

  > span {
    display: block;
    color: ${({theme:a})=>a.color.textSoft};
    font-size: ${({theme:a})=>a.typography.size.xs};
  }
`;const pa=i.div`
  margin-top: ${({theme:a})=>a.spacing[3]};

  /* Plegado no hay lugar para el título del grupo; queda la línea que
     separa, que alcanza para que no sea una lista corrida. */
  [data-plegado='si'] & > h3 {
    @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
      height: 1px;
      margin: 0 0 ${({theme:a})=>a.spacing[1]};
      padding: 0;
      overflow: hidden;
      color: transparent;
      background: ${({theme:a})=>a.color.border};
    }
  }

  > h3 {
    margin: 0 0 ${({theme:a})=>a.spacing[1]};
    padding-inline: ${({theme:a})=>a.spacing[2]};
    color: ${({theme:a})=>a.color.textSoft};
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`,v=i.button`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  width: 100%;
  padding: ${({theme:a})=>a.spacing[2]};

  border: 0;
  border-radius: ${({theme:a})=>a.radius.md};
  background: transparent;
  color: ${({theme:a})=>a.color.textMuted};
  font-family: inherit;
  font-size: ${({theme:a})=>a.typography.size.sm};
  text-align: start;
  cursor: pointer;
  transition:
    background-color 140ms ease,
    color 140ms ease;

  > svg {
    flex: none;
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: ${({theme:a})=>a.color.surfaceMuted};
    color: ${({theme:a})=>a.color.text};
  }

  &[data-activo='si'] {
    background: ${({theme:a})=>a.color.primarySoft};
    color: ${({theme:a})=>a.color.primary};
    font-weight: 600;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.color.primary};
    outline-offset: 2px;
  }

  /* Plegado se va el texto y queda el ícono centrado. El nombre sigue
     estando en el globo del botón. */
  &[data-comprimido='si'] {
    @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
      justify-content: center;
      gap: 0;

      > span {
        display: none;
      }
    }
  }

  /* Plegar el menú no tiene sentido en el teléfono: ahí el menú entero se
     cierra al elegir algo. */
  &[data-solo-escritorio='si'] {
    display: none;

    @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
      display: flex;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ua=i.div`
  display: grid;
  gap: 0.1rem;
  margin-top: auto;
  padding-top: ${({theme:a})=>a.spacing[3]};
  border-block-start: 1px solid ${({theme:a})=>a.color.border};
`,ga=i.span`
  flex: none !important;
  min-width: 1.35rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: ${({theme:a})=>a.color.primary};
  color: ${({theme:a})=>a.color.onPrimary};
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
`,ma=i.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,fa=i.header`
  position: sticky;
  top: 0;
  z-index: ${({theme:a})=>a.zIndex.header};

  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};

  background: ${({theme:a})=>a.color.surface};
  border-block-end: 1px solid ${({theme:a})=>a.color.border};

  /* En la aplicación instalada esta barra hace de barra de título: la ventana
     no tiene marco de Windows, así que sin zona de arrastre no se podría
     mover de lugar. En el navegador la propiedad no hace nada.

     Lo que se toca se marca no-drag: sobre una zona de arrastre, un clic
     sostenido mueve la ventana en vez de activar el botón. */
  -webkit-app-region: drag;

  button,
  a,
  input,
  select {
    -webkit-app-region: no-drag;
  }

  > h1 {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.lg};
    line-height: 1.15;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,z=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;

  border: 1px solid ${({theme:a})=>a.color.border};
  border-radius: ${({theme:a})=>a.radius.md};
  background: ${({theme:a})=>a.color.surface};
  color: ${({theme:a})=>a.color.text};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.color.primary};
    outline-offset: 2px;
  }

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    display: none;
  }
`,ha=i.main`
  flex: 1 1 auto;
  min-width: 0;
  padding: ${({theme:a})=>a.spacing[3]};

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    padding: ${({theme:a})=>a.spacing[4]};
  }
`,ba=i.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(5, 8, 22, 0.45);

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    display: none;
  }
`,xa=i.nav`
  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  z-index: 41;
  width: min(17rem, 84vw);
  overflow-y: auto;
  padding: ${({theme:a})=>a.spacing[3]};

  background: ${({theme:a})=>a.color.surface};
  border-inline-end: 1px solid ${({theme:a})=>a.color.border};
  box-shadow: ${({theme:a})=>a.shadow.lg};

  @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
    display: none;
  }
`,ya=i.button`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  width: 100%;
  padding: ${({theme:a})=>a.spacing[2]};
  border: 0;
  border-radius: ${({theme:a})=>a.radius.md};
  background: transparent;
  color: ${({theme:a})=>a.color.textMuted};
  font-family: inherit;
  font-size: ${({theme:a})=>a.typography.size.sm};
  text-align: start;
  cursor: pointer;
  transition:
    background-color 140ms ease,
    color 140ms ease;

  > svg {
    flex: none;
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: ${({theme:a})=>a.color.surfaceMuted};
    color: ${({theme:a})=>a.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.color.primary};
    outline-offset: 2px;
  }

  &[data-comprimido='si'] {
    @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
      justify-content: center;
      gap: 0;

      > span {
        display: none;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,$a=[{titulo:"El mostrador",entradas:[{id:"resumen",nombre:"Resumen",icono:B,ruta:"/gestion"},{id:"caja-rapida",nombre:"Caja rápida",icono:T,ruta:"/gestion/caja-rapida",funcion:"cajaRapida"},{id:"caja",nombre:"Caja",icono:O,ruta:"/gestion/caja"},{id:"fiado",nombre:"Fiado",icono:R,ruta:"/gestion/fiado"}]},{titulo:"Lo que entra y sale",entradas:[{id:"ventas",nombre:"Ventas",icono:V,ruta:"/gestion/ventas"},{id:"presupuestos",nombre:"Presupuestos",icono:H,ruta:"/gestion/presupuestos"},{id:"compras",nombre:"Compras",icono:G,ruta:"/gestion/compras"},{id:"pedidos",nombre:"Pedidos de la app",icono:U,ruta:"/gestion/pedidos"},{id:"envios",nombre:"Envíos",icono:N,ruta:"/gestion/envios"}]},{titulo:"El negocio",entradas:[{id:"productos",nombre:"Productos",icono:W,ruta:"/gestion/productos"},{id:"ofertas",nombre:"Ofertas",icono:J,ruta:"/gestion/ofertas"},{id:"clientes",nombre:"Clientes",icono:K,ruta:"/gestion/clientes"},{id:"chats",nombre:"Chats",icono:X,ruta:"/gestion/chats"}]},{titulo:"Para mirar",entradas:[{id:"informes",nombre:"Informes",icono:_,ruta:"/gestion/informes"}]},{titulo:"Esta computadora",entradas:[{id:"mostrador",nombre:"Este mostrador",icono:Q,ruta:"/gestion/mostrador"}]}];function za({titulo:a,children:p,acciones:d,sinLeer:f=0}){const u=I(),{pathname:g}=F(),{isDarkMode:l,toggleMode:y}=q(),[h,m]=t.useState(!1),[b,o]=t.useState(()=>{try{return window.localStorage.getItem("gestion:lateral")==="plegado"}catch{return!1}}),r=()=>{o(n=>{const c=!n;try{window.localStorage.setItem("gestion:lateral",c?"plegado":"abierto")}catch{}return c})};t.useEffect(()=>m(!1),[g]),t.useEffect(()=>{if(!h)return;const n=c=>{c.key==="Escape"&&m(!1)};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[h]);const x=n=>e.jsxs(e.Fragment,{children:[$a.map(c=>e.jsxs(pa,{children:[e.jsx("h3",{children:c.titulo}),c.entradas.map(s=>{const C=s.icono,E=g===s.ruta,P=!s.funcion||A(s.funcion);return e.jsxs(v,{type:"button","data-activo":E?"si":"no","data-comprimido":n?"si":"no",onClick:()=>u(s.ruta),title:P?n?s.nombre:void 0:"Funciona en la computadora del negocio",children:[e.jsx(C,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:s.nombre}),s.id==="chats"&&f>0?e.jsx(ga,{children:f}):null]},s.id)})]},c.titulo)),e.jsxs(ua,{children:[e.jsxs(ya,{type:"button","data-comprimido":n?"si":"no",onClick:()=>u("/panel/comercio"),title:n?"Volver a la app":void 0,children:[e.jsx(Y,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:"Volver a la app"})]}),e.jsxs(v,{type:"button","data-activo":"no","data-comprimido":n?"si":"no",onClick:y,title:n?l?"Modo día":"Modo noche":void 0,children:[l?e.jsx(Z,{size:17,"aria-hidden":"true"}):e.jsx(aa,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:l?"Modo día":"Modo noche"})]}),e.jsxs(v,{type:"button","data-activo":"no","data-comprimido":n?"si":"no","data-solo-escritorio":"si",onClick:r,title:n?"Ampliar el menú":void 0,children:[n?e.jsx(ea,{size:17,"aria-hidden":"true"}):e.jsx(oa,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:"Plegar el menú"})]})]})]});return e.jsxs(la,{"data-plegado":b?"si":"no",children:[e.jsx(ca,{"aria-label":"Secciones de la gestión","data-plegado":b?"si":"no",children:x(b)}),e.jsxs(ma,{children:[e.jsxs(fa,{children:[e.jsx(z,{type:"button",onClick:()=>m(!0),"aria-label":"Abrir el menú",children:e.jsx(D,{size:19,"aria-hidden":"true"})}),e.jsx("h1",{children:a}),d,e.jsx(L,{})]}),e.jsxs(ha,{children:[e.jsx(da,{}),p]})]}),h?e.jsxs(e.Fragment,{children:[e.jsx(ba,{onClick:()=>m(!1)}),e.jsxs(xa,{"aria-label":"Secciones de la gestión",children:[e.jsx(z,{type:"button",onClick:()=>m(!1),"aria-label":"Cerrar el menú",children:e.jsx(S,{size:19,"aria-hidden":"true"})}),x(!1)]})]}):null]})}export{za as G};
