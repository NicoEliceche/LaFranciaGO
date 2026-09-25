import{bm as h,j as e,M as I,C as B,S as O,p as L,q as J,E as _}from"./index-Jd4-4a9e.js";import{r as t}from"./react-6hK8W6IX.js";import{q as a}from"./estilos-DzHAJWDP.js";import{S as P,aK as Q,a9 as f,aQ as Z,a8 as H,X as K}from"./iconos-C-3VosUP.js";const S=a.p`
  margin: 0;
  padding: ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.md};
  border: 1px solid ${({theme:r})=>`${r.color.warning}59`};
  background: ${({theme:r})=>`${r.color.warning}14`};
  color: ${({theme:r})=>r.color.text};
  font-size: 0.85rem;
  line-height: 1.5;
`,U=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: ${({theme:r})=>r.spacing[2]};
`,x=a.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};

  strong {
    font-size: 1.6rem;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  span {
    color: ${({theme:r})=>r.color.textMuted};
    font-size: 0.8rem;
  }

  &[data-nivel='error'] strong {
    color: ${({theme:r})=>r.color.danger};
  }

  &[data-nivel='aviso'] strong {
    color: ${({theme:r})=>r.color.warning};
  }
`,X=a.form`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};

  > svg {
    flex: 0 0 auto;
    color: ${({theme:r})=>r.color.textSoft};
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.25rem;
    border: 0;
    outline: none;
    background: transparent;
    color: ${({theme:r})=>r.color.text};
    font: inherit;
    font-size: 0.9rem;

    &::placeholder {
      color: ${({theme:r})=>r.color.textSoft};
    }
  }

  button {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    min-height: 2.25rem;
    padding: 0 ${({theme:r})=>r.spacing[3]};
    border-radius: ${({theme:r})=>r.radius.md};
    border: 1px solid ${({theme:r})=>r.color.border};
    background: ${({theme:r})=>r.color.surfaceMuted};
    color: ${({theme:r})=>r.color.text};
    font: inherit;
    font-size: 0.85rem;
    cursor: pointer;

    &:hover {
      border-color: ${({theme:r})=>r.color.primary};
    }
  }
`,G=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:r})=>r.spacing[1]};
`,u=a.button`
  min-height: 2rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.full};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.textMuted};
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;

  &[data-activo='true'] {
    border-color: ${({theme:r})=>r.color.primary};
    background: ${({theme:r})=>r.color.primarySoft};
    color: ${({theme:r})=>r.color.primary};
    font-weight: 600;
  }
`,V=a.div`
  display: grid;
  gap: 0.25rem;
`,W=a.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: ${({theme:r})=>r.spacing[2]};
  width: 100%;
  padding: ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[3]};
  border: 1px solid ${({theme:r})=>r.color.border};
  /* El nivel marcado sobre el borde izquierdo: permite saltar los avisos
     sin leerlos. */
  border-left: 3px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.text};
  font: inherit;
  text-align: left;
  cursor: pointer;

  > svg {
    margin-top: 0.15rem;
    color: ${({theme:r})=>r.color.textSoft};
  }

  &[data-nivel='error'] {
    border-left-color: ${({theme:r})=>r.color.danger};

    > svg {
      color: ${({theme:r})=>r.color.danger};
    }
  }

  &[data-nivel='aviso'] {
    border-left-color: ${({theme:r})=>r.color.warning};

    > svg {
      color: ${({theme:r})=>r.color.warning};
    }
  }

  &:hover {
    background: ${({theme:r})=>r.color.surfaceMuted};
  }
`,Y=a.span`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,rr=a.span`
  font-size: 0.88rem;
  line-height: 1.35;
  /* Sin cortar: el mensaje es lo que se lee, y recortado obliga a abrir cada
     línea para saber si es la que se busca. */
  overflow-wrap: anywhere;
`,er=a.span`
  color: ${({theme:r})=>r.color.textMuted};
  font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 0.74rem;
  overflow-wrap: anywhere;
`,or=a.span`
  color: ${({theme:r})=>r.color.textSoft};
  font-size: 0.74rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,ar=a.div`
  position: fixed;
  inset: auto 0 0 0;
  z-index: ${({theme:r})=>r.zIndex.header+20};
  max-height: 72vh;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-top: 1px solid ${({theme:r})=>r.color.borderStrong};
  border-radius: ${({theme:r})=>r.radius.lg} ${({theme:r})=>r.radius.lg} 0 0;
  background: ${({theme:r})=>r.color.surface};
  box-shadow: 0 -12px 40px rgba(5, 8, 22, 0.3);

  @media (min-width: ${({theme:r})=>r.breakpoints.lg}) {
    inset: auto 1.5rem 1.5rem auto;
    width: min(46rem, calc(100vw - 3rem));
    max-height: 80vh;
    border-radius: ${({theme:r})=>r.radius.lg};
    border: 1px solid ${({theme:r})=>r.color.borderStrong};
  }
`,tr=a.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[3]};
  border-bottom: 1px solid ${({theme:r})=>r.color.border};

  span {
    font-size: 0.92rem;
    font-weight: 600;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }
`,sr=a.button`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: ${({theme:r})=>r.radius.md};
  background: transparent;
  color: ${({theme:r})=>r.color.textMuted};
  cursor: pointer;

  &:hover {
    background: ${({theme:r})=>r.color.surfaceMuted};
  }
`,nr=a.div`
  overflow: auto;
  padding: ${({theme:r})=>r.spacing[3]};

  p {
    display: flex;
    gap: ${({theme:r})=>r.spacing[2]};
    margin: 0 0 0.25rem;
    font-size: 0.82rem;

    strong {
      flex: 0 0 5rem;
      color: ${({theme:r})=>r.color.textMuted};
      font-weight: 600;
    }
  }

  pre {
    margin: ${({theme:r})=>r.spacing[3]} 0 0;
    padding: ${({theme:r})=>r.spacing[3]};
    border-radius: ${({theme:r})=>r.radius.md};
    background: ${({theme:r})=>r.color.surfaceMuted};
    color: ${({theme:r})=>r.color.text};
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.76rem;
    line-height: 1.5;
    /* El stack se lee en líneas, pero una ruta larga no debe desbordar. */
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`,ir={error:H,aviso:Z,info:f};function k(r){const n=new Date(r.includes("Z")?r:`${r.replace(" ","T")}Z`),i=new Date().toDateString()===n.toDateString();return n.toLocaleString("es-AR",{...i?{}:{day:"2-digit",month:"2-digit"},hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}function gr(){const[r,n]=t.useState([]),[i,C]=t.useState([]),[z,M]=t.useState(0),[D,E]=t.useState([]),[d,p]=t.useState(""),[c,N]=t.useState(""),[b,q]=t.useState(""),[$,A]=t.useState(""),[s,v]=t.useState(null),[F,j]=t.useState(!0),[y,g]=t.useState(null),m=t.useCallback(async()=>{j(!0),g(null);try{const o=await h.ver({nivel:d,area:c,buscar:b});n(o.lineas),C(o.resumen),M(o.total)}catch(o){g(o instanceof Error?o.message:"No pudimos leer el registro.")}finally{j(!1)}},[d,c,b]);t.useEffect(()=>{m()},[m]),t.useEffect(()=>{h.areas().then(o=>E(o.areas)).catch(()=>{})},[]);const R=async o=>{try{const l=await h.linea(o);v(l.linea)}catch{g("No pudimos abrir el detalle.")}},w=o=>{var l;return((l=i.find(T=>T.nivel===o))==null?void 0:l.cuantas)??0};return e.jsxs(I,{showSearch:!1,children:[e.jsx(B,{children:e.jsx(O,{children:e.jsxs(L,{children:[e.jsx(J,{title:"Registro",subtitle:"Qué se rompió, dónde y por qué. Lo último, primero."}),e.jsx(S,{children:"Esta pantalla muestra mensajes internos y cuerpos de peticiones. Es para desarrollo, no para mostrarla a nadie más."}),e.jsxs(U,{children:[e.jsxs(x,{"data-nivel":"error",children:[e.jsx("strong",{children:w("error")}),e.jsx("span",{children:"errores hoy"})]}),e.jsxs(x,{"data-nivel":"aviso",children:[e.jsx("strong",{children:w("aviso")}),e.jsx("span",{children:"avisos hoy"})]}),e.jsxs(x,{children:[e.jsx("strong",{children:z}),e.jsx("span",{children:"líneas guardadas"})]})]}),e.jsxs(X,{onSubmit:o=>{o.preventDefault(),q($.trim())},children:[e.jsx(P,{size:16,"aria-hidden":"true"}),e.jsx("input",{value:$,onChange:o=>A(o.target.value),placeholder:"Buscar en el mensaje, el detalle o la ruta","aria-label":"Buscar en el registro"}),e.jsx("button",{type:"submit",children:"Buscar"}),e.jsx("button",{type:"button",onClick:()=>void m(),"aria-label":"Recargar",children:e.jsx(Q,{size:16,"aria-hidden":"true"})})]}),e.jsxs(G,{children:[e.jsx(u,{type:"button","data-activo":d==="",onClick:()=>p(""),children:"Todo"}),e.jsx(u,{type:"button","data-activo":d==="error",onClick:()=>p("error"),children:"Errores"}),e.jsx(u,{type:"button","data-activo":d==="aviso",onClick:()=>p("aviso"),children:"Avisos"}),D.slice(0,8).map(o=>e.jsxs(u,{type:"button","data-activo":c===o.area,onClick:()=>N(c===o.area?"":o.area),children:[o.area," (",o.cuantas,")"]},o.area))]}),y?e.jsx(S,{role:"alert",children:y}):null,F&&r.length===0?null:r.length===0?e.jsx(_,{icon:f,title:"No hay nada registrado",text:"Cuando algo falle, va a aparecer acá con el detalle de por qué.",dashed:!0}):e.jsx(V,{children:r.map(o=>{const l=ir[o.nivel]??f;return e.jsxs(W,{type:"button","data-nivel":o.nivel,onClick:()=>void R(o.id),children:[e.jsx(l,{size:16,"aria-hidden":"true"}),e.jsxs(Y,{children:[e.jsx(rr,{children:o.mensaje}),e.jsxs(er,{children:[o.metodo?`${o.metodo} `:"",o.ruta??"sin ruta",o.estado?` · ${o.estado}`:"",o.ms!==null?` · ${o.ms} ms`:"",o.area?` · ${o.area}`:""]})]}),e.jsx(or,{children:k(o.creado_en)})]},o.id)})})]})})}),s?e.jsxs(ar,{role:"dialog","aria-label":"Detalle del error",children:[e.jsxs(tr,{children:[e.jsx("span",{children:s.mensaje}),e.jsx(sr,{type:"button",onClick:()=>v(null),"aria-label":"Cerrar",children:e.jsx(K,{size:18,"aria-hidden":"true"})})]}),e.jsxs(nr,{children:[[["Cuándo",k(s.creado_en)],["Dónde",`${s.metodo??""} ${s.ruta??"-"}`.trim()],["Estado",s.estado?String(s.estado):"-"],["Tardó",s.ms!==null?`${s.ms} ms`:"-"],["Área",s.area??"-"],["Usuario",s.usuario_id??"sin sesión"],["IP",s.ip??"-"]].map(([o,l])=>e.jsxs("p",{children:[e.jsx("strong",{children:o}),l]},o)),e.jsx("pre",{children:lr(s.detalle)})]})]}):null]})}function lr(r){if(!r)return"Sin detalle.";try{const n=JSON.parse(r),i=[];return typeof n.stack=="string"&&i.push(n.stack),n.causa&&i.push(`
Causado por: ${String(n.causa)}`),n.extra!==void 0&&i.push(`
Datos que llegaron:
${JSON.stringify(n.extra,null,2)}`),i.length>0?i.join(`
`):JSON.stringify(n,null,2)}catch{return r}}export{gr as AdminRegistroScreen};
