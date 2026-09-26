import{j as e,bf as A}from"./index-BEHxigxl.js";import{r as n,u as q,c as I}from"./react-6hK8W6IX.js";import{q as i}from"./estilos-DzHAJWDP.js";import{aF as v,X as S,k as L,i as T,ar as F,a7 as O,aw as D,at as R,r as B,a8 as H,an as V,T as G,ao as U,ag as N,ap as _,aG as J,s as Q,aH as W,A as X,f as K,g as Y,aI as Z,aJ as oo}from"./iconos-DPkufriG.js";function eo(){return typeof window>"u"?"navegador":window.lafranciagoEscritorio?"escritorio":/Android|iPhone|iPad/i.test(navigator.userAgent)&&!window.matchMedia("(pointer: fine)").matches?"telefono":"navegador"}const C=()=>eo()==="escritorio",ao={cajaRapida:"mostrador",lectora:"mostrador",etiquetas:"mostrador"};function io(o){return ao[o]!=="mostrador"||C()}const Co="Esto funciona en la computadora del negocio, donde están la lectora y la impresora.",to=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-bottom: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-inline-start: 3px solid ${({theme:o})=>o.color.primary};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.surfaceMuted};

  > svg {
    flex: none;
    color: ${({theme:o})=>o.color.primary};
  }

  > div {
    flex: 1 1 auto;
    min-width: 0;

    > strong {
      display: block;
      font-size: ${({theme:o})=>o.typography.size.sm};
    }

    > span {
      display: block;
      color: ${({theme:o})=>o.color.textSoft};
      font-size: ${({theme:o})=>o.typography.size.xs};
    }
  }

  /* En el teléfono no entra todo en una línea. */
  @media (max-width: calc(${({theme:o})=>o.breakpoints.md} - 1px)) {
    flex-wrap: wrap;
  }
`,no=i.div`
  position: fixed;
  inset: 0;
  z-index: 100;

  display: grid;
  place-items: center;
  padding: ${({theme:o})=>o.spacing[3]};

  background: rgba(5, 8, 22, 0.82);
  backdrop-filter: blur(2px);
`,ro=i.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  width: min(30rem, 100%);
  padding: ${({theme:o})=>o.spacing[4]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.lg};
  text-align: center;

  > svg {
    justify-self: center;
    color: ${({theme:o})=>o.color.primary};
  }

  > h2 {
    margin: 0;
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.lg};
    line-height: 1.2;
  }
`,$=i.p`
  margin: 0;
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
  line-height: 1.45;

  &[data-tono='suave'] {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }
`,j=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[2]};

  > button {
    min-height: 2.3rem;
    padding: 0 ${({theme:o})=>o.spacing[3]};

    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.xs};
    font-weight: 600;
    cursor: pointer;

    &[data-tono='fuerte'] {
      border-color: ${({theme:o})=>o.color.primary};
      background: ${({theme:o})=>o.color.primary};
      color: ${({theme:o})=>o.color.onPrimary};
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:focus-visible {
      outline: 2px solid ${({theme:o})=>o.color.primary};
      outline-offset: 2px;
    }
  }
`,so=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 1.9rem;
  height: 1.9rem;

  border: 0;
  border-radius: ${({theme:o})=>o.radius.md};
  background: transparent;
  color: ${({theme:o})=>o.color.textSoft};
  cursor: pointer;

  &:hover {
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 1px;
  }
`,k="lafranciago:actualizacion:pospuesta";function lo(){const o=new Date,u=new Date(o);u.setHours(22,0,0,0);const d=new Date(o);return d.setDate(d.getDate()+1),d.setHours(7,0,0,0),[...u>o?[{etiqueta:"Esta noche a las 22",valor:u.toISOString()}]:[],{etiqueta:"Mañana antes de abrir",valor:d.toISOString()}]}function co(){const[o,u]=n.useState(null),[d,f]=n.useState(!1),[p,g]=n.useState(!1),l=n.useCallback(async()=>{const a=window.lafranciagoEscritorio;if(a!=null&&a.actualizacion)try{u(await a.actualizacion())}catch{}},[]);if(n.useEffect(()=>{if(!C())return;l();const a=window.setInterval(()=>void l(),30*60*1e3);return()=>window.clearInterval(a)},[l]),n.useEffect(()=>{localStorage.getItem(k)===new Date().toDateString()&&f(!0)},[]),!o||o.estado==="al-dia")return null;const y=o.estado==="obligatoria";if(!y&&d)return null;const h=async()=>{var a,r;g(!0);try{await((r=(a=window.lafranciagoEscritorio)==null?void 0:a.instalarAhora)==null?void 0:r.call(a))}finally{g(!1)}},m=async a=>{var r,x;g(!0);try{await((x=(r=window.lafranciagoEscritorio)==null?void 0:r.programarActualizacion)==null?void 0:x.call(r,a)),await l(),f(!0)}finally{g(!1)}},b=()=>{localStorage.setItem(k,new Date().toDateString()),f(!0)};return y?e.jsx(no,{role:"alertdialog","aria-labelledby":"titulo-actualizacion",children:e.jsxs(ro,{children:[e.jsx(v,{size:28,"aria-hidden":"true"}),e.jsx("h2",{id:"titulo-actualizacion",children:"Hay que actualizar para seguir"}),e.jsx($,{children:o.motivoObligatorio??"Esta versión ya no puede comunicarse con el sistema."}),o.novedades?e.jsx($,{"data-tono":"suave",children:o.novedades}):null,e.jsx($,{"data-tono":"suave",children:o.descargada?"La actualización ya está bajada. Tarda menos de un minuto.":"Estamos bajando la actualización…"}),e.jsx(j,{children:e.jsx("button",{type:"button","data-tono":"fuerte",onClick:h,disabled:p||!o.descargada,children:p?"Instalando…":"Actualizar ahora"})}),e.jsx($,{"data-tono":"suave",children:"Las ventas que hayan quedado guardadas sin subir no se pierden: siguen ahí después de actualizar."})]})}):e.jsxs(to,{role:"status",children:[e.jsx(v,{size:18,"aria-hidden":"true"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Hay una versión nueva",o.ultima?` (${o.ultima})`:""]}),e.jsx("span",{children:o.programadaPara?`Se instala el ${new Date(o.programadaPara).toLocaleString("es-AR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1})} · podés seguir trabajando`:o.novedades??"Podés seguir trabajando y actualizar cuando cierres."})]}),o.programadaPara?null:e.jsxs(j,{children:[lo().map(a=>e.jsx("button",{type:"button",onClick:()=>m(a.valor),disabled:p,children:a.etiqueta},a.valor)),e.jsx("button",{type:"button","data-tono":"fuerte",onClick:h,disabled:p||!o.descargada,children:"Ahora"})]}),e.jsx(so,{type:"button",onClick:b,"aria-label":"Cerrar el aviso",children:e.jsx(S,{size:16,"aria-hidden":"true"})})]})}const uo=i.div`
  display: grid;
  min-height: 100dvh;
  background: ${({theme:o})=>o.color.background};

  /* En el teléfono es una sola columna: el menú va en un cajón. */
  grid-template-columns: 1fr;

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    grid-template-columns: 15rem minmax(0, 1fr);
  }

  /* Plegado, el lateral queda del ancho de un ícono y el contenido se lleva
     el resto: en un sistema de gestión esas 12rem son dos columnas más de
     una tabla. */
  &[data-plegado='si'] {
    @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
      grid-template-columns: 3.75rem minmax(0, 1fr);
    }
  }
`,po=i.aside`
  display: none;

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    gap: ${({theme:o})=>o.spacing[1]};

    position: sticky;
    top: 0;
    height: 100dvh;
    overflow-y: auto;
    padding: ${({theme:o})=>o.spacing[3]};

    background: ${({theme:o})=>o.color.surface};
    border-inline-end: 1px solid ${({theme:o})=>o.color.border};
  }

  &[data-plegado='si'] {
    @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
      padding-inline: ${({theme:o})=>o.spacing[1]};
    }
  }
`;i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[2]};
  margin-bottom: ${({theme:o})=>o.spacing[2]};

  > strong {
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.sm};
    line-height: 1.15;
  }

  > span {
    display: block;
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }
`;const go=i.div`
  margin-top: ${({theme:o})=>o.spacing[3]};

  /* Plegado no hay lugar para el título del grupo; queda la línea que
     separa, que alcanza para que no sea una lista corrida. */
  [data-plegado='si'] & > h3 {
    @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
      height: 1px;
      margin: 0 0 ${({theme:o})=>o.spacing[1]};
      padding: 0;
      overflow: hidden;
      color: transparent;
      background: ${({theme:o})=>o.color.border};
    }
  }

  > h3 {
    margin: 0 0 ${({theme:o})=>o.spacing[1]};
    padding-inline: ${({theme:o})=>o.spacing[2]};
    color: ${({theme:o})=>o.color.textSoft};
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`,w=i.button`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  width: 100%;
  padding: ${({theme:o})=>o.spacing[2]};

  border: 0;
  border-radius: ${({theme:o})=>o.radius.md};
  background: transparent;
  color: ${({theme:o})=>o.color.textMuted};
  font-family: inherit;
  font-size: ${({theme:o})=>o.typography.size.sm};
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
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.text};
  }

  &[data-activo='si'] {
    background: ${({theme:o})=>o.color.primarySoft};
    color: ${({theme:o})=>o.color.primary};
    font-weight: 600;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 2px;
  }

  /* Plegado se va el texto y queda el ícono centrado. El nombre sigue
     estando en el globo del botón. */
  &[data-comprimido='si'] {
    @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
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

    @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
      display: flex;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,mo=i.div`
  display: grid;
  gap: 0.1rem;
  margin-top: auto;
  padding-top: ${({theme:o})=>o.spacing[3]};
  border-block-start: 1px solid ${({theme:o})=>o.color.border};
`,fo=i.span`
  flex: none !important;
  min-width: 1.35rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: ${({theme:o})=>o.color.primary};
  color: ${({theme:o})=>o.color.onPrimary};
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
`,ho=i.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,bo=i.header`
  position: sticky;
  top: 0;
  z-index: ${({theme:o})=>o.zIndex.header};

  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};

  background: ${({theme:o})=>o.color.surface};
  border-block-end: 1px solid ${({theme:o})=>o.color.border};

  > h1 {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.lg};
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

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 2px;
  }

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    display: none;
  }
`,xo=i.main`
  flex: 1 1 auto;
  min-width: 0;
  padding: ${({theme:o})=>o.spacing[3]};

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    padding: ${({theme:o})=>o.spacing[4]};
  }
`,yo=i.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(5, 8, 22, 0.45);

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    display: none;
  }
`,$o=i.nav`
  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  z-index: 41;
  width: min(17rem, 84vw);
  overflow-y: auto;
  padding: ${({theme:o})=>o.spacing[3]};

  background: ${({theme:o})=>o.color.surface};
  border-inline-end: 1px solid ${({theme:o})=>o.color.border};
  box-shadow: ${({theme:o})=>o.shadow.lg};

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    display: none;
  }
`,wo=i.button`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  width: 100%;
  padding: ${({theme:o})=>o.spacing[2]};
  border: 0;
  border-radius: ${({theme:o})=>o.radius.md};
  background: transparent;
  color: ${({theme:o})=>o.color.textMuted};
  font-family: inherit;
  font-size: ${({theme:o})=>o.typography.size.sm};
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
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 2px;
  }

  &[data-comprimido='si'] {
    @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
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
`,vo=[{titulo:"El mostrador",entradas:[{id:"resumen",nombre:"Resumen",icono:T,ruta:"/gestion"},{id:"caja-rapida",nombre:"Caja rápida",icono:F,ruta:"/gestion/caja-rapida",funcion:"cajaRapida"},{id:"caja",nombre:"Caja",icono:O,ruta:"/gestion/caja"},{id:"fiado",nombre:"Fiado",icono:D,ruta:"/gestion/fiado"}]},{titulo:"Lo que entra y sale",entradas:[{id:"ventas",nombre:"Ventas",icono:R,ruta:"/gestion/ventas"},{id:"presupuestos",nombre:"Presupuestos",icono:B,ruta:"/gestion/presupuestos"},{id:"compras",nombre:"Compras",icono:H,ruta:"/gestion/compras"},{id:"pedidos",nombre:"Pedidos de la app",icono:V,ruta:"/gestion/pedidos"},{id:"envios",nombre:"Envíos",icono:G,ruta:"/gestion/envios"}]},{titulo:"El negocio",entradas:[{id:"productos",nombre:"Productos",icono:U,ruta:"/gestion/productos"},{id:"ofertas",nombre:"Ofertas",icono:N,ruta:"/gestion/ofertas"},{id:"clientes",nombre:"Clientes",icono:_,ruta:"/gestion/clientes"},{id:"chats",nombre:"Chats",icono:J,ruta:"/gestion/chats"}]},{titulo:"Para mirar",entradas:[{id:"informes",nombre:"Informes",icono:Q,ruta:"/gestion/informes"}]},{titulo:"Esta computadora",entradas:[{id:"mostrador",nombre:"Este mostrador",icono:W,ruta:"/gestion/mostrador"}]}];function Eo({titulo:o,children:u,acciones:d,sinLeer:f=0}){const p=q(),{pathname:g}=I(),{isDarkMode:l,toggleMode:y}=A(),[h,m]=n.useState(!1),[b,a]=n.useState(()=>{try{return window.localStorage.getItem("gestion:lateral")==="plegado"}catch{return!1}}),r=()=>{a(t=>{const c=!t;try{window.localStorage.setItem("gestion:lateral",c?"plegado":"abierto")}catch{}return c})};n.useEffect(()=>m(!1),[g]),n.useEffect(()=>{if(!h)return;const t=c=>{c.key==="Escape"&&m(!1)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[h]);const x=t=>e.jsxs(e.Fragment,{children:[vo.map(c=>e.jsxs(go,{children:[e.jsx("h3",{children:c.titulo}),c.entradas.map(s=>{const E=s.icono,P=g===s.ruta,M=!s.funcion||io(s.funcion);return e.jsxs(w,{type:"button","data-activo":P?"si":"no","data-comprimido":t?"si":"no",onClick:()=>p(s.ruta),title:M?t?s.nombre:void 0:"Funciona en la computadora del negocio",children:[e.jsx(E,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:s.nombre}),s.id==="chats"&&f>0?e.jsx(fo,{children:f}):null]},s.id)})]},c.titulo)),e.jsxs(mo,{children:[e.jsxs(wo,{type:"button","data-comprimido":t?"si":"no",onClick:()=>p("/panel/comercio"),title:t?"Volver a la app":void 0,children:[e.jsx(X,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:"Volver a la app"})]}),e.jsxs(w,{type:"button","data-activo":"no","data-comprimido":t?"si":"no",onClick:y,title:t?l?"Modo día":"Modo noche":void 0,children:[l?e.jsx(K,{size:17,"aria-hidden":"true"}):e.jsx(Y,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:l?"Modo día":"Modo noche"})]}),e.jsxs(w,{type:"button","data-activo":"no","data-comprimido":t?"si":"no","data-solo-escritorio":"si",onClick:r,title:t?"Ampliar el menú":void 0,children:[t?e.jsx(Z,{size:17,"aria-hidden":"true"}):e.jsx(oo,{size:17,"aria-hidden":"true"}),e.jsx("span",{children:"Plegar el menú"})]})]})]});return e.jsxs(uo,{"data-plegado":b?"si":"no",children:[e.jsx(po,{"aria-label":"Secciones de la gestión","data-plegado":b?"si":"no",children:x(b)}),e.jsxs(ho,{children:[e.jsxs(bo,{children:[e.jsx(z,{type:"button",onClick:()=>m(!0),"aria-label":"Abrir el menú",children:e.jsx(L,{size:19,"aria-hidden":"true"})}),e.jsx("h1",{children:o}),d]}),e.jsxs(xo,{children:[e.jsx(co,{}),u]})]}),h?e.jsxs(e.Fragment,{children:[e.jsx(yo,{onClick:()=>m(!1)}),e.jsxs($o,{"aria-label":"Secciones de la gestión",children:[e.jsx(z,{type:"button",onClick:()=>m(!1),"aria-label":"Cerrar el menú",children:e.jsx(S,{size:19,"aria-hidden":"true"})}),x(!1)]})]}):null]})}export{Eo as G,Co as M,io as d,C as e};
