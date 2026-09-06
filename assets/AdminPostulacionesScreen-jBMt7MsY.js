import{c as k,q as a,aN as $,aO as M,j as r,M as F,b as R,S as A,a2 as j,l as E,E as P,H as v,d as N,e as q,X as I}from"./index-BzCkDV42.js";import{r as s}from"./react-D_B_6qYb.js";import{A as z}from"./AuthScreenStyled-D2s3yoVC.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=k("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=k("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),D=a.div`
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
`,L=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,H=a.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
`,T=a.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,U=a.span`
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
`,_=a.div`
  display: grid;
  grid-template-columns: minmax(6rem, auto) minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.35rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &:last-of-type {
    border-bottom: 0;
  }
`,V=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Q=a.span`
  color: ${({theme:e})=>e.color.text};
  /* Un CUIT o una dirección larga se parten en lugar de desbordar. */
  overflow-wrap: anywhere;
`,X=a.textarea`
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
`,Z=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,g=`
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
`,G=a.button`
  ${g}
  border: 0;
  background: ${({theme:e})=>e.color.success};
  color: #06251a;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,J=a.button`
  ${g}
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,K=a.button`
  ${g}
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.danger};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,W=[{id:"pendiente",nombre:"Pendientes"},{id:"cambios",nombre:"Con cambios"},{id:"aprobado",nombre:"Aprobadas"},{id:"rechazado",nombre:"Rechazadas"},{id:"todas",nombre:"Todas"}],Y={comercio:"Comercio",delivery:"Delivery",fletero:"Fletero"},ee={nombre:"Nombre",cuit:"CUIT / CUIL",rubro:"Rubro",direccion:"Dirección",telefono:"Teléfono",vehiculo:"Vehículo",patente:"Patente",carnet:"Carnet",zona:"Zona"};function te(){const[e,S]=s.useState("pendiente"),[l,w]=s.useState([]),[u,y]=s.useState(!0),[p,n]=s.useState(null),[b,f]=s.useState({}),[h,x]=s.useState(null),d=s.useCallback(async()=>{y(!0),n(null);try{const{postulaciones:o}=await $.postulaciones(e);w(o)}catch(o){n(o instanceof M&&o.status===404?"Esta sección es sólo para administradores.":"No pudimos cargar las postulaciones.")}finally{y(!1)}},[e]);s.useEffect(()=>{d()},[d]);const m=async(o,t)=>{const i=(b[o.id]??"").trim();if(t==="cambios"&&i.length<5){n("Escribí qué hay que corregir antes de devolverla.");return}x(o.id),n(null);try{await $.revisar(o.id,t,i),f(c=>({...c,[o.id]:""})),await d()}catch(c){n(c instanceof Error?c.message:"No pudimos guardar la decisión.")}finally{x(null)}};return r.jsx(F,{showSearch:!1,children:r.jsx(R,{children:r.jsx(A,{children:r.jsxs(j,{children:[r.jsx(E,{title:"Postulaciones",chip:u?void 0:`${l.length}`,subtitle:"Altas de comercios, delivery y fletes esperando revisión."}),r.jsxs(D,{children:[W.map(o=>r.jsx(C,{type:"button","data-active":e===o.id,onClick:()=>S(o.id),children:o.nombre},o.id)),r.jsx(C,{type:"button",onClick:()=>void d(),"aria-label":"Actualizar",children:r.jsx(B,{size:14,"aria-hidden":"true"})})]}),p?r.jsx(z,{role:"alert","data-tono":"error",children:p}):null,!u&&l.length===0&&!p?r.jsx(P,{icon:v,title:"Nada para revisar",text:"Cuando alguien se postule, aparece acá.",dashed:!0}):null,l.map(o=>r.jsx(N,{children:r.jsx(q,{children:r.jsxs(j,{children:[r.jsxs(L,{children:[r.jsxs("div",{children:[r.jsx(H,{children:o.nombre}),r.jsxs(T,{children:[o.email,o.telefono?` · ${o.telefono}`:""]})]}),r.jsx(U,{"data-estado":o.estado,children:Y[o.rol]??o.rol})]}),Object.entries(o.datos).map(([t,i])=>r.jsxs(_,{children:[r.jsx(V,{children:ee[t]??t}),r.jsx(Q,{children:String(i)})]},t)),o.nota_revision?r.jsxs(z,{"data-tono":"aviso",children:["Se le pidió: ",o.nota_revision]}):null,o.estado==="pendiente"||o.estado==="cambios"?r.jsxs(r.Fragment,{children:[r.jsx(X,{value:b[o.id]??"",onChange:t=>f(i=>({...i,[o.id]:t.target.value})),placeholder:"Qué hay que corregir (obligatorio para devolver)",rows:2}),r.jsxs(Z,{children:[r.jsxs(G,{type:"button",disabled:h===o.id,onClick:()=>void m(o,"aprobado"),children:[r.jsx(v,{size:16,"aria-hidden":"true"}),"Aprobar"]}),r.jsxs(J,{type:"button",disabled:h===o.id,onClick:()=>void m(o,"cambios"),children:[r.jsx(O,{size:16,"aria-hidden":"true"}),"Pedir cambios"]}),r.jsxs(K,{type:"button",disabled:h===o.id,onClick:()=>void m(o,"rechazado"),children:[r.jsx(I,{size:16,"aria-hidden":"true"}),"Rechazar"]})]})]}):null]})})},o.id))]})})})})}export{te as AdminPostulacionesScreen};
