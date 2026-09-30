import{by as p,j as a,M as j,bz as y}from"./index-BRSNxgXn.js";import{c as v,r as i}from"./react-CKwpxk66.js";import{m as q}from"./dinero-B3pQSbH8.js";import{q as o}from"./estilos-D2nr0glO.js";import{a9 as P,C as g}from"./iconos-B5b1KtU-.js";const z=o.section`
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};
  /* Más ancho que antes: ahora hay dos planes lado a lado en escritorio. */
  max-width: 56rem;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[5]} ${({theme:e})=>e.spacing[4]};
`,k=o.header`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({theme:e})=>e.color.primary};
  }

  h1 {
    margin: 0 0 0.25rem;
    font-size: 1.35rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.color.textMuted};
    font-size: 0.92rem;
  }
`,C=o.p`
  display: grid;
  gap: 0.2rem;
  margin: 0;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};

  strong {
    font-size: 1.75rem;
    line-height: 1.1;
    /* Los dígitos de la misma caja: un precio que baila al cambiar se lee
       como un error de la pantalla. */
    font-variant-numeric: tabular-nums;
  }
`,h=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.85rem;
  line-height: 1.5;
`,M=o.ul`
  display: grid;
  gap: 0.3rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,b=o.li`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: 0.93rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({theme:e})=>e.color.success};
  }

  /* La linea que dice "todo lo del otro plan" se despega de las que siguen:
     no es una prestacion mas, es de que se parte. */
  &[data-incluye] {
    padding-bottom: 0.4rem;
    margin-bottom: 0.15rem;
    border-bottom: 1px solid ${({theme:e})=>e.color.border};
  }
`,S=o.button`
  min-height: 3rem;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  /* Se pega al fondo de la tarjeta: las dos listas tienen distinto largo y
     si no los botones quedan a distinta altura. */
  align-self: end;

  /* El destacado lleva el botón pleno; el otro, uno tranquilo. Que los dos
     griten deja al comercio sin una recomendación. */
  &[data-destacado='true'] {
    background: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`,f=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.danger};
  font-size: 0.9rem;
`,w=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  /* En el teléfono van uno debajo del otro: dos columnas de 170px no dejan
     leer ninguna de las dos. */
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
`,E=o.article`
  display: grid;
  /* La lista se estira y empuja el botón al fondo, así los dos quedan a la
     misma altura aunque un plan tenga más líneas que el otro. */
  grid-template-rows: auto auto 1fr auto;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[4]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};

  &[data-destacado='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,L=o.header`
  display: grid;
  gap: 0.35rem;

  h2 {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: ${({theme:e})=>e.color.textMuted};
    font-size: 0.88rem;
    line-height: 1.45;
  }
`,N=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  h2 {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.2;
  }
`,A=o.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;o.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.4rem;
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.textMuted};
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }
`;const T={go:{bajada:"Todo lo del mostrador, para el día a día del negocio.",trae:["Saber cuánta plata tiene que haber en el cajón, y cuánto falta si no da.","Cobrar en el mostrador con lectora de código de barras.","Llevar la cuenta de lo que se fía, sin que se le mezcle a quien atiende.","Cargar las compras al proveedor y que el stock se actualice solo.","Los pedidos y envíos de la aplicación, sin salir del sistema.","Productos, ofertas, presupuestos y ficha de clientes.","Seguir vendiendo cuando se corta internet, y subir las ventas al volver."]},pro:{bajada:"Para cuando el negocio creció y hay que mirarlo de arriba.",trae:[],suma:["Informes del mes: qué se vendió, qué dejó ganancia y qué no.","Saber cuánto se gana de verdad en cada producto, con el costo cargado.","Manejar más de un local desde la misma cuenta."]}};function O(){const e=v(),[s,x]=i.useState(null),[d,c]=i.useState(null),[u,l]=i.useState(null);i.useEffect(()=>{let r=!0;return p.ver().then(n=>{if(r){if(n.activo){e("/gestion",{replace:!0});return}x(n)}}).catch(()=>{r&&l("No pudimos consultar los planes. Probá de nuevo.")}),()=>{r=!1}},[e]);const $=async r=>{c(r),l(null);try{await p.contratar(r),y(!0),e("/gestion",{replace:!0})}catch{l("No pudimos activarlo. Probá de nuevo en un rato."),c(null)}};return a.jsx(j,{children:a.jsxs(z,{children:[a.jsxs(k,{children:[a.jsx(P,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("h1",{children:"Sistema de gestión"}),a.jsx("p",{children:"Para llevar el negocio, no sólo para vender por la aplicación."})]})]}),u?a.jsx(f,{role:"alert",children:u}):null,a.jsx(w,{children:((s==null?void 0:s.planes)??[]).map(r=>{const n=T[r.id],t=r.id==="pro";return a.jsxs(E,{"data-destacado":t,children:[a.jsxs(L,{children:[a.jsxs(N,{children:[a.jsx("h2",{children:r.nombre}),t?a.jsx(A,{children:"El más completo"}):null]}),a.jsx("p",{children:n.bajada})]}),a.jsxs(C,{children:[a.jsx("strong",{children:q(r.precioCentavos)}),a.jsx(h,{children:"por mes, se puede dar de baja cuando quieras"})]}),a.jsxs(M,{children:[t?a.jsxs(b,{"data-incluye":!0,children:[a.jsx(g,{size:16,"aria-hidden":"true"}),a.jsx("strong",{children:"Todo lo de Comercio GO"})]}):null,(t?n.suma??[]:n.trae).map(m=>a.jsxs(b,{children:[a.jsx(g,{size:16,"aria-hidden":"true"}),m]},m))]}),a.jsx(S,{type:"button","data-destacado":t,onClick:()=>void $(r.id),disabled:d!==null,children:d===r.id?"Activando…":`Contratar ${r.nombre}`})]},r.id)})}),s&&(s.planes??[]).length===0?a.jsx(f,{role:"status",children:"No pudimos traer los planes. Proba de nuevo en un rato."}):null,a.jsx(h,{children:"La caja rápida y la lectora de código de barras funcionan en la computadora del local. El resto anda desde el celular también."})]})})}export{O as ContratarGestionScreen};
