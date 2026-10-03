import{bE as f,j as r,M as B,C as O,S as J,p as P,q as _,E as Z}from"./index-H-zP5gLj.js";import{r as t}from"./react-CKwpxk66.js";import{q as s}from"./estilos-D2nr0glO.js";import{a as H,aS as Q,ac as b,aP as U,ab as V,X}from"./iconos-NomGb_FP.js";const C=s.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>`${e.color.warning}59`};
  background: ${({theme:e})=>`${e.color.warning}14`};
  color: ${({theme:e})=>e.color.text};
  font-size: 0.85rem;
  line-height: 1.5;
`,G=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,x=s.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};

  strong {
    font-size: 1.6rem;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  span {
    color: ${({theme:e})=>e.color.textMuted};
    font-size: 0.8rem;
  }

  &[data-nivel='error'] strong {
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-nivel='aviso'] strong {
    color: ${({theme:e})=>e.color.warning};
  }
`,K=s.form`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};

  > svg {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.25rem;
    border: 0;
    outline: none;
    background: transparent;
    color: ${({theme:e})=>e.color.text};
    font: inherit;
    font-size: 0.9rem;

    &::placeholder {
      color: ${({theme:e})=>e.color.textSoft};
    }
  }

  button {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 2.25rem;
    padding: 0 ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.md};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.text};
    font: inherit;
    font-size: 0.85rem;
    cursor: pointer;

    &:hover {
      border-color: ${({theme:e})=>e.color.primary};
    }
  }
`,W=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,p=s.button`
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;

  &[data-activo='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
    font-weight: 600;
  }
`,Y=s.div`
  display: grid;
  gap: 0.25rem;
`,ee=s.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  /* El nivel marcado sobre el borde izquierdo: permite saltar los avisos
     sin leerlos. */
  border-left: 3px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font: inherit;
  text-align: left;
  cursor: pointer;

  > svg {
    margin-top: 0.15rem;
    color: ${({theme:e})=>e.color.textSoft};
  }

  &[data-nivel='error'] {
    border-left-color: ${({theme:e})=>e.color.danger};

    > svg {
      color: ${({theme:e})=>e.color.danger};
    }
  }

  &[data-nivel='aviso'] {
    border-left-color: ${({theme:e})=>e.color.warning};

    > svg {
      color: ${({theme:e})=>e.color.warning};
    }
  }

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
  }
`,re=s.span`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,oe=s.span`
  font-size: 0.88rem;
  line-height: 1.35;
  /* Sin cortar: el mensaje es lo que se lee, y recortado obliga a abrir cada
     línea para saber si es la que se busca. */
  overflow-wrap: anywhere;
`,ae=s.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.74rem;
  overflow-wrap: anywhere;
`,te=s.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.74rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,se=s.div`
  position: fixed;
  inset: auto 0 0 0;
  z-index: ${({theme:e})=>e.zIndex.header+20};
  max-height: 72vh;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-top: 1px solid ${({theme:e})=>e.color.borderStrong};
  border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} 0 0;
  background: ${({theme:e})=>e.color.surface};
  box-shadow: 0 -12px 40px rgba(5, 8, 22, 0.3);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    inset: auto 1.5rem 1.5rem auto;
    width: min(46rem, calc(100vw - 3rem));
    max-height: 80vh;
    border-radius: ${({theme:e})=>e.radius.lg};
    border: 1px solid ${({theme:e})=>e.color.borderStrong};
  }
`,ne=s.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  span {
    font-size: 0.92rem;
    font-weight: 600;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }
`,ie=s.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.md};
  background: transparent;
  color: ${({theme:e})=>e.color.textMuted};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
  }
`,le=s.div`
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[3]};

  p {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};
    margin: 0 0 0.25rem;
    font-size: 0.82rem;

    strong {
      flex: 0 0 5rem;
      color: ${({theme:e})=>e.color.textMuted};
      font-weight: 600;
    }
  }

  pre {
    margin: ${({theme:e})=>e.spacing[3]} 0 0;
    padding: ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.md};
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.text};
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.76rem;
    line-height: 1.5;
    /* El stack se lee en líneas, pero una ruta larga no debe desbordar. */
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`,ce={error:V,aviso:U,info:b};function k(e){const i=new Date(e.includes("Z")?e:`${e.replace(" ","T")}Z`),l=new Date().toDateString()===i.toDateString();return i.toLocaleString("es-AR",{...l?{}:{day:"2-digit",month:"2-digit"},hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function he(){const[e,i]=t.useState([]),[l,z]=t.useState([]),[M,E]=t.useState(0),[D,N]=t.useState([]),[c,g]=t.useState(""),[d,q]=t.useState(""),[u,A]=t.useState(""),[$,R]=t.useState(""),[n,v]=t.useState(null),[F,j]=t.useState(!0),[y,m]=t.useState(null),h=t.useCallback(async({silencioso:o=!1}={})=>{o||j(!0),m(null);try{const a=await f.ver({nivel:c,area:d,buscar:u});i(a.lineas),z(a.resumen),E(a.total)}catch(a){m(a instanceof Error?a.message:"No pudimos leer el registro.")}finally{j(!1)}},[c,d,u]),w=t.useRef(!0);t.useEffect(()=>{h({silencioso:!w.current}),w.current=!1},[h]);const T=t.useMemo(()=>{const o=u.trim().toLowerCase();return e.filter(a=>c&&a.nivel!==c||d&&a.area!==d?!1:o?`${a.mensaje} ${a.ruta??""} ${a.area??""}`.toLowerCase().includes(o):!0)},[e,c,d,u]);t.useEffect(()=>{f.areas().then(o=>N(o.areas)).catch(()=>{})},[]);const I=async o=>{try{const a=await f.linea(o);v(a.linea)}catch{m("No pudimos abrir el detalle.")}},S=o=>{var a;return((a=l.find(L=>L.nivel===o))==null?void 0:a.cuantas)??0};return r.jsxs(B,{showSearch:!1,children:[r.jsx(O,{children:r.jsx(J,{children:r.jsxs(P,{children:[r.jsx(_,{title:"Registro",subtitle:"Qué se rompió, dónde y por qué. Lo último, primero."}),r.jsx(C,{children:"Esta pantalla muestra mensajes internos y cuerpos de peticiones. Es para desarrollo, no para mostrarla a nadie más."}),r.jsxs(G,{children:[r.jsxs(x,{"data-nivel":"error",children:[r.jsx("strong",{children:S("error")}),r.jsx("span",{children:"errores hoy"})]}),r.jsxs(x,{"data-nivel":"aviso",children:[r.jsx("strong",{children:S("aviso")}),r.jsx("span",{children:"avisos hoy"})]}),r.jsxs(x,{children:[r.jsx("strong",{children:M}),r.jsx("span",{children:"líneas guardadas"})]})]}),r.jsxs(K,{onSubmit:o=>{o.preventDefault(),A($.trim())},children:[r.jsx(H,{size:16,"aria-hidden":"true"}),r.jsx("input",{value:$,onChange:o=>R(o.target.value),placeholder:"Buscar en el mensaje, el detalle o la ruta","aria-label":"Buscar en el registro"}),r.jsx("button",{type:"submit",children:"Buscar"}),r.jsx("button",{type:"button",onClick:()=>void h(),"aria-label":"Recargar",children:r.jsx(Q,{size:16,"aria-hidden":"true"})})]}),r.jsxs(W,{children:[r.jsx(p,{type:"button","data-activo":c==="",onClick:()=>g(""),children:"Todo"}),r.jsx(p,{type:"button","data-activo":c==="error",onClick:()=>g("error"),children:"Errores"}),r.jsx(p,{type:"button","data-activo":c==="aviso",onClick:()=>g("aviso"),children:"Avisos"}),D.slice(0,8).map(o=>r.jsxs(p,{type:"button","data-activo":d===o.area,onClick:()=>q(d===o.area?"":o.area),children:[o.area," (",o.cuantas,")"]},o.area))]}),y?r.jsx(C,{role:"alert",children:y}):null,F&&e.length===0?null:e.length===0?r.jsx(Z,{icon:b,title:"No hay nada registrado",text:"Cuando algo falle, va a aparecer acá con el detalle de por qué.",dashed:!0}):r.jsx(Y,{children:T.map(o=>{const a=ce[o.nivel]??b;return r.jsxs(ee,{type:"button","data-nivel":o.nivel,onClick:()=>void I(o.id),children:[r.jsx(a,{size:16,"aria-hidden":"true"}),r.jsxs(re,{children:[r.jsx(oe,{children:o.mensaje}),r.jsxs(ae,{children:[o.metodo?`${o.metodo} `:"",o.ruta??"sin ruta",o.estado?` · ${o.estado}`:"",o.ms!==null?` · ${o.ms} ms`:"",o.area?` · ${o.area}`:""]})]}),r.jsx(te,{children:k(o.creado_en)})]},o.id)})})]})})}),n?r.jsxs(se,{role:"dialog","aria-label":"Detalle del error",children:[r.jsxs(ne,{children:[r.jsx("span",{children:n.mensaje}),r.jsx(ie,{type:"button",onClick:()=>v(null),"aria-label":"Cerrar",children:r.jsx(X,{size:18,"aria-hidden":"true"})})]}),r.jsxs(le,{children:[[["Cuándo",k(n.creado_en)],["Dónde",`${n.metodo??""} ${n.ruta??"-"}`.trim()],["Estado",n.estado?String(n.estado):"-"],["Tardó",n.ms!==null?`${n.ms} ms`:"-"],["Área",n.area??"-"],["Usuario",n.usuario_id??"sin sesión"],["IP",n.ip??"-"]].map(([o,a])=>r.jsxs("p",{children:[r.jsx("strong",{children:o}),a]},o)),r.jsx("pre",{children:de(n.detalle)})]})]}):null]})}function de(e){if(!e)return"Sin detalle.";try{const i=JSON.parse(e),l=[];return typeof i.stack=="string"&&l.push(i.stack),i.causa&&l.push(`
Causado por: ${String(i.causa)}`),i.extra!==void 0&&l.push(`
Datos que llegaron:
${JSON.stringify(i.extra,null,2)}`),l.length>0?l.join(`
`):JSON.stringify(i,null,2)}catch{return e}}export{he as AdminRegistroScreen};
