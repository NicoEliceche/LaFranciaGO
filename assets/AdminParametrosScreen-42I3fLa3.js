import{bF as y,j as a,M as E,C as F,S as M,p as O,q as R}from"./index-DKGgQ_f2.js";import{r as i}from"./react-CKwpxk66.js";import{q as s}from"./estilos-D2nr0glO.js";import{Z as $,C as f,aZ as T}from"./iconos-NomGb_FP.js";const A=s.section`
  display: grid;
  gap: ${({theme:r})=>r.spacing[3]};
  padding: ${({theme:r})=>r.spacing[4]};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.xl};
  background: ${({theme:r})=>r.color.surface};
`,L=s.h3`
  margin: 0;
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.base};
`,U=s.div`
  display: grid;
  gap: 0.35rem;
  padding-top: ${({theme:r})=>r.spacing[3]};
  border-top: 1px solid ${({theme:r})=>r.color.border};

  &:first-of-type {
    padding-top: 0;
    border-top: 0;
  }

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 20rem);
    grid-template-areas:
      'etiqueta campo'
      'ayuda    campo'
      'editado  boton';
    align-items: start;
    column-gap: ${({theme:r})=>r.spacing[4]};
  }
`,B=s.label`
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-area: etiqueta;
  }
`,H=s.p`
  margin: 0;
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.xs};
  line-height: 1.5;
  /* Se deja respirar: es la línea que evita que alguien cambie un número sin
     saber qué hace. */
  max-width: 46ch;

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-area: ayuda;
  }
`,I=s.input`
  width: 100%;
  min-height: 2.75rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.background};
  color: ${({theme:r})=>r.color.text};
  font: inherit;
  font-size: ${({theme:r})=>r.typography.size.sm};
  /* Un CBU y un alias se leen dígito por dígito al compararlos con el
     papel. */
  font-variant-numeric: tabular-nums;

  &::placeholder {
    color: ${({theme:r})=>r.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.color.primary};
    box-shadow: 0 0 0 3px ${({theme:r})=>r.color.primarySoft};
  }

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-area: campo;
  }
`,N=s.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border: 0;
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.brand};
  color: ${({theme:r})=>r.color.onPrimary};
  font: inherit;
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  cursor: pointer;

  &:hover {
    background: ${({theme:r})=>r.color.brandHover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-area: boton;
    justify-self: end;
  }
`,j=s.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};

  /* Recién guardado: en verde, que es lo que se busca con la mirada después
     de tocar el botón. */
  &[data-recien] {
    color: ${({theme:r})=>r.color.success};
    font-weight: ${({theme:r})=>r.typography.weight.bold};
  }

  @media (min-width: ${({theme:r})=>r.breakpoints.md}) {
    grid-area: editado;
  }
`,v=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[4]};
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.lg};
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.sm};
`,Z={cobros:"Cobros",contacto:"Contacto",operacion:"Operación",general:"General"},_={numero:"number",email:"email",telefono:"tel",texto:"text"};function Q(){const[r,l]=i.useState([]),[w,S]=i.useState(!0),[p,d]=i.useState(null),[n,m]=i.useState({}),[u,g]=i.useState(null),[c,h]=i.useState(null),b=i.useCallback(async()=>{try{const{parametros:o}=await y.listar();l(o),d(null)}catch{d("No pudimos cargar los parámetros.")}finally{S(!1)}},[]);i.useEffect(()=>{b()},[b]),i.useEffect(()=>{if(!c)return;const o=window.setTimeout(()=>h(null),2400);return()=>window.clearTimeout(o)},[c]);const z=async o=>{g(o),d(null);try{await y.guardar(o,n[o]??""),l(t=>t.map(e=>e.clave===o?{...e,valor:n[o]||null}:e)),m(t=>{const e={...t};return delete e[o],e}),h(o)}catch(t){d(t instanceof Error?t.message:"No pudimos guardarlo.")}finally{g(null)}},k=r.reduce((o,t)=>{var e;return(o[e=t.grupo]??(o[e]=[])).push(t),o},{});return a.jsx(E,{children:a.jsx(F,{children:a.jsx(M,{children:a.jsxs(O,{children:[a.jsx(R,{title:"Parámetros",subtitle:"Los datos del sistema que podés cambiar sin tocar el código."}),p?a.jsx(v,{role:"alert",children:p}):null,w?a.jsxs(v,{children:[a.jsx($,{size:18,"aria-hidden":"true"}),"Cargando…"]}):null,Object.entries(k).map(([o,t])=>a.jsxs(A,{children:[a.jsx(L,{children:Z[o]??o}),t.map(e=>{const x=e.clave in n,P=x?n[e.clave]:e.valor??"",C=x&&n[e.clave]!==(e.valor??"");return a.jsxs(U,{children:[a.jsx(B,{htmlFor:`param-${e.clave}`,children:e.etiqueta}),a.jsx(H,{children:e.descripcion}),a.jsx(I,{id:`param-${e.clave}`,type:_[e.formato]??"text",value:P,placeholder:"Sin cargar",onChange:q=>m(G=>({...G,[e.clave]:q.target.value}))}),C?a.jsxs(N,{type:"button",onClick:()=>void z(e.clave),disabled:u===e.clave,children:[u===e.clave?a.jsx($,{size:15,"aria-hidden":"true"}):a.jsx(f,{size:15,"aria-hidden":"true"}),"Guardar"]}):null,c===e.clave?a.jsxs(j,{role:"status","data-recien":!0,children:[a.jsx(f,{size:13,"aria-hidden":"true"}),"Guardado"]}):e.editado_en?a.jsxs(j,{children:[a.jsx(T,{size:13,"aria-hidden":"true"}),"Lo cambió ",e.editado_por??"administración"]}):null]},e.clave)})]},o))]})})})})}export{Q as AdminParametrosScreen};
