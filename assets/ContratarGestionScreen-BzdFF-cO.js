import{bg as m,j as e,M as $,bh as y}from"./index-PN1N2eMW.js";import{u as v,r as i}from"./react-6hK8W6IX.js";import{m as q}from"./dinero-BsEAM1JF.js";import{q as o}from"./estilos-DzHAJWDP.js";import{a6 as P,C as g,A as k}from"./iconos-D4KLLVJ2.js";const z=o.section`
  display: grid;
  gap: ${({theme:a})=>a.spacing[4]};
  /* Más ancho que antes: ahora hay dos planes lado a lado en escritorio. */
  max-width: 56rem;
  margin: 0 auto;
  padding: ${({theme:a})=>a.spacing[5]} ${({theme:a})=>a.spacing[4]};
`,C=o.header`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:a})=>a.spacing[3]};

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({theme:a})=>a.color.primary};
  }

  h1 {
    margin: 0 0 0.25rem;
    font-size: 1.35rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: ${({theme:a})=>a.color.textMuted};
    font-size: 0.92rem;
  }
`,M=o.p`
  display: grid;
  gap: 0.2rem;
  margin: 0;
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  background: ${({theme:a})=>a.color.surfaceMuted};

  strong {
    font-size: 1.75rem;
    line-height: 1.1;
    /* Los dígitos de la misma caja: un precio que baila al cambiar se lee
       como un error de la pantalla. */
    font-variant-numeric: tabular-nums;
  }
`,h=o.span`
  color: ${({theme:a})=>a.color.textMuted};
  font-size: 0.85rem;
  line-height: 1.5;
`,S=o.ul`
  display: grid;
  gap: ${({theme:a})=>a.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`,f=o.li`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:a})=>a.spacing[2]};
  font-size: 0.93rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({theme:a})=>a.color.success};
  }
`,w=o.button`
  min-height: 3rem;
  padding: 0 ${({theme:a})=>a.spacing[4]};
  border: 0;
  border-radius: ${({theme:a})=>a.radius.lg};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.primary};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  /* Se pega al fondo de la tarjeta: las dos listas tienen distinto largo y
     si no los botones quedan a distinta altura. */
  align-self: end;

  /* El destacado lleva el botón pleno; el otro, uno tranquilo. Que los dos
     griten deja al comercio sin una recomendación. */
  &[data-destacado='true'] {
    background: ${({theme:a})=>a.color.primary};
    color: ${({theme:a})=>a.color.onPrimary};
  }

  &:hover:not(:disabled) {
    background: ${({theme:a})=>a.color.brandHover};
    color: ${({theme:a})=>a.color.onPrimary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`,b=o.p`
  margin: 0;
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.md};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.danger};
  font-size: 0.9rem;
`,E=o.div`
  display: grid;
  gap: ${({theme:a})=>a.spacing[3]};

  /* En el teléfono van uno debajo del otro: dos columnas de 170px no dejan
     leer ninguna de las dos. */
  @media (min-width: ${({theme:a})=>a.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
`,L=o.article`
  display: grid;
  /* La lista se estira y empuja el botón al fondo, así los dos quedan a la
     misma altura aunque un plan tenga más líneas que el otro. */
  grid-template-rows: auto auto 1fr auto;
  gap: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[4]};
  border: 1px solid ${({theme:a})=>a.color.border};
  border-radius: ${({theme:a})=>a.radius.xl};
  background: ${({theme:a})=>a.color.surface};

  &[data-destacado='true'] {
    border-color: ${({theme:a})=>a.color.primary};
    box-shadow: ${({theme:a})=>a.shadow.md};
  }
`,A=o.header`
  display: grid;
  gap: 0.35rem;

  h2 {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: ${({theme:a})=>a.color.textMuted};
    font-size: 0.88rem;
    line-height: 1.45;
  }
`,N=o.span`
  justify-self: start;
  padding: 0.15rem ${({theme:a})=>a.spacing[2]};
  border-radius: ${({theme:a})=>a.radius.full};
  background: ${({theme:a})=>a.color.primarySoft};
  color: ${({theme:a})=>a.color.primary};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,G=o.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.4rem;
  min-height: 2.5rem;
  padding: 0 ${({theme:a})=>a.spacing[3]};
  border: 1px solid ${({theme:a})=>a.color.border};
  border-radius: ${({theme:a})=>a.radius.full};
  background: transparent;
  color: ${({theme:a})=>a.color.textMuted};
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    border-color: ${({theme:a})=>a.color.primary};
    color: ${({theme:a})=>a.color.primary};
  }
`,T={go:{bajada:"Todo lo del mostrador, para el día a día del negocio.",trae:["Saber cuánta plata tiene que haber en el cajón, y cuánto falta si no da.","Cobrar en el mostrador con lectora de código de barras.","Llevar la cuenta de lo que se fía, sin que se le mezcle a quien atiende.","Cargar las compras al proveedor y que el stock se actualice solo.","Los pedidos y envíos de la aplicación, sin salir del sistema.","Productos, ofertas, presupuestos y ficha de clientes.","Seguir vendiendo cuando se corta internet, y subir las ventas al volver."]},pro:{bajada:"Para cuando el negocio creció y hay que mirarlo de arriba.",trae:[],suma:["Informes del mes: qué se vendió, qué dejó ganancia y qué no.","Saber cuánto se gana de verdad en cada producto, con el costo cargado.","Manejar más de un local desde la misma cuenta."]}};function O(){const a=v(),[s,x]=i.useState(null),[d,c]=i.useState(null),[u,l]=i.useState(null);i.useEffect(()=>{let r=!0;return m.ver().then(n=>{if(r){if(n.activo){a("/gestion",{replace:!0});return}x(n)}}).catch(()=>{r&&l("No pudimos consultar los planes. Probá de nuevo.")}),()=>{r=!1}},[a]);const j=async r=>{c(r),l(null);try{await m.contratar(r),y(!0),a("/gestion",{replace:!0})}catch{l("No pudimos activarlo. Probá de nuevo en un rato."),c(null)}};return e.jsx($,{children:e.jsxs(z,{children:[e.jsxs(C,{children:[e.jsx(P,{size:22,"aria-hidden":"true"}),e.jsxs("div",{children:[e.jsx("h1",{children:"Sistema de gestión"}),e.jsx("p",{children:"Para llevar el negocio, no sólo para vender por la aplicación."})]})]}),u?e.jsx(b,{role:"alert",children:u}):null,e.jsx(E,{children:((s==null?void 0:s.planes)??[]).map(r=>{const n=T[r.id],t=r.id==="pro";return e.jsxs(L,{"data-destacado":t,children:[e.jsxs(A,{children:[e.jsx("h2",{children:r.nombre}),t?e.jsx(N,{children:"El más completo"}):null,e.jsx("p",{children:n.bajada})]}),e.jsxs(M,{children:[e.jsx("strong",{children:q(r.precioCentavos)}),e.jsx(h,{children:"por mes, se puede dar de baja cuando quieras"})]}),e.jsxs(S,{children:[t?e.jsxs(f,{children:[e.jsx(g,{size:16,"aria-hidden":"true"}),e.jsx("strong",{children:"Todo lo de Comercio GO"})]}):null,(t?n.suma??[]:n.trae).map(p=>e.jsxs(f,{children:[e.jsx(g,{size:16,"aria-hidden":"true"}),p]},p))]}),e.jsx(w,{type:"button","data-destacado":t,onClick:()=>void j(r.id),disabled:d!==null,children:d===r.id?"Activando…":`Contratar ${r.nombre}`})]},r.id)})}),s&&(s.planes??[]).length===0?e.jsx(b,{role:"status",children:"No pudimos traer los planes. Proba de nuevo en un rato."}):null,e.jsx(h,{children:"La caja rápida y la lectora de código de barras funcionan en la computadora del local. El resto anda desde el celular también."}),e.jsxs(G,{type:"button",onClick:()=>a("/panel/comercio"),children:[e.jsx(k,{size:16,"aria-hidden":"true"}),"Volver a la app"]})]})})}export{O as ContratarGestionScreen};
