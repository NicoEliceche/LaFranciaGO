import{q as a,b4 as $,g as k,j as r,M as F,b as R,S as A,k as j,l as E,E as M,m as z,d as P,e as N,X as q}from"./index-Dp3RR3Le.js";import{r as s}from"./react-D_B_6qYb.js";import{A as v}from"./AuthScreenStyled-DZ2Dt5jv.js";import{R as B}from"./refresh-cw-CXpPEUEq.js";import{M as D}from"./message-square-B0VbIria.js";const I=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,C=a.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &[data-active='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,O=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,T=a.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
`,U=a.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,_=a.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &[data-estado='aprobado'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.success};
  }

  &[data-estado='rechazado'] {
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-estado='cambios'] {
    color: ${({theme:e})=>e.color.warning};
  }
`,L=a.div`
  display: grid;
  grid-template-columns: minmax(6rem, auto) minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.35rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &:last-of-type {
    border-bottom: 0;
  }
`,H=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,V=a.span`
  color: ${({theme:e})=>e.color.text};
  /* Un CUIT o una dirección larga se parten en lugar de desbordar. */
  overflow-wrap: anywhere;
`,Q=a.textarea`
  width: 100%;
  min-height: 3.5rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
  }
`,X=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,h=`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 2.75rem;
  border-radius: 9999px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 180ms ease;

  &:disabled {
    opacity: 0.5;
    cursor: progress;
  }
`,Z=a.button`
  ${h}
  border: 0;
  background: ${({theme:e})=>e.color.success};
  color: #06251a;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,G=a.button`
  ${h}
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,J=a.button`
  ${h}
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.danger};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,K=[{id:"pendiente",nombre:"Pendientes"},{id:"cambios",nombre:"Con cambios"},{id:"aprobado",nombre:"Aprobadas"},{id:"rechazado",nombre:"Rechazadas"},{id:"todas",nombre:"Todas"}],W={comercio:"Comercio",delivery:"Delivery",fletero:"Fletero"},Y={nombre:"Nombre",cuit:"CUIT / CUIL",rubro:"Rubro",direccion:"Dirección",telefono:"Teléfono",vehiculo:"Vehículo",patente:"Patente",carnet:"Carnet",zona:"Zona"};function se(){const[e,S]=s.useState("pendiente"),[c,w]=s.useState([]),[u,b]=s.useState(!0),[p,n]=s.useState(null),[y,f]=s.useState({}),[m,x]=s.useState(null),d=s.useCallback(async()=>{b(!0),n(null);try{const{postulaciones:o}=await $.postulaciones(e);w(o)}catch(o){n(o instanceof k&&o.status===404?"Esta sección es sólo para administradores.":"No pudimos cargar las postulaciones.")}finally{b(!1)}},[e]);s.useEffect(()=>{d()},[d]);const g=async(o,t)=>{const i=(y[o.id]??"").trim();if(t==="cambios"&&i.length<5){n("Escribí qué hay que corregir antes de devolverla.");return}x(o.id),n(null);try{await $.revisar(o.id,t,i),f(l=>({...l,[o.id]:""})),await d()}catch(l){n(l instanceof Error?l.message:"No pudimos guardar la decisión.")}finally{x(null)}};return r.jsx(F,{showSearch:!1,children:r.jsx(R,{children:r.jsx(A,{children:r.jsxs(j,{children:[r.jsx(E,{title:"Postulaciones",chip:u?void 0:`${c.length}`,subtitle:"Altas de comercios, delivery y fletes esperando revisión."}),r.jsxs(I,{children:[K.map(o=>r.jsx(C,{type:"button","data-active":e===o.id,onClick:()=>S(o.id),children:o.nombre},o.id)),r.jsx(C,{type:"button",onClick:()=>void d(),"aria-label":"Actualizar",children:r.jsx(B,{size:14,"aria-hidden":"true"})})]}),p?r.jsx(v,{role:"alert","data-tono":"error",children:p}):null,!u&&c.length===0&&!p?r.jsx(M,{icon:z,title:"Nada para revisar",text:"Cuando alguien se postule, aparece acá.",dashed:!0}):null,c.map(o=>r.jsx(P,{children:r.jsx(N,{children:r.jsxs(j,{children:[r.jsxs(O,{children:[r.jsxs("div",{children:[r.jsx(T,{children:o.nombre}),r.jsxs(U,{children:[o.email,o.telefono?` · ${o.telefono}`:""]})]}),r.jsx(_,{"data-estado":o.estado,children:W[o.rol]??o.rol})]}),Object.entries(o.datos).map(([t,i])=>r.jsxs(L,{children:[r.jsx(H,{children:Y[t]??t}),r.jsx(V,{children:String(i)})]},t)),o.nota_revision?r.jsxs(v,{"data-tono":"aviso",children:["Se le pidió: ",o.nota_revision]}):null,o.estado==="pendiente"||o.estado==="cambios"?r.jsxs(r.Fragment,{children:[r.jsx(Q,{value:y[o.id]??"",onChange:t=>f(i=>({...i,[o.id]:t.target.value})),placeholder:"Qué hay que corregir (obligatorio para devolver)",rows:2}),r.jsxs(X,{children:[r.jsxs(Z,{type:"button",disabled:m===o.id,onClick:()=>void g(o,"aprobado"),children:[r.jsx(z,{size:16,"aria-hidden":"true"}),"Aprobar"]}),r.jsxs(G,{type:"button",disabled:m===o.id,onClick:()=>void g(o,"cambios"),children:[r.jsx(D,{size:16,"aria-hidden":"true"}),"Pedir cambios"]}),r.jsxs(J,{type:"button",disabled:m===o.id,onClick:()=>void g(o,"rechazado"),children:[r.jsx(q,{size:16,"aria-hidden":"true"}),"Rechazar"]})]})]}):null]})})},o.id))]})})})})}export{se as AdminPostulacionesScreen};
