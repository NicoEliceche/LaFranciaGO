import{c as T,j as e,C as P,X as F,q as m,h as O,bc as g,M as I,b as B,S as H,m as A,n as V,E as X,d as Q,e as Z}from"./index-CQSQA-do.js";import{r}from"./react-D_B_6qYb.js";import{P as Y,a as G,b as J,c as K}from"./PanelLoginDialogStyled-CDo90hae.js";import{E as U,a as v,m as W,C as ee,h as ae,i as te,g as se,n as re,l as oe}from"./ChatPedidoDialogStyled-DmEDcdrG.js";import{R as ne,b as ie,a as le}from"./ResenaDialogStyled-CtgOBnjP.js";import{A as ce}from"./AuthScreenStyled-BSm8SxO3.js";import{S as de}from"./shield-check-8JrPKuSg.js";import{S as ue}from"./send-BvFJ-14A.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=T("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=T("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);function me({open:a,codigo:c,onCerrar:n,onResolver:y}){const[f,x]=r.useState(""),[d,u]=r.useState(!1);if(r.useEffect(()=>{a&&x("")},[a]),r.useEffect(()=>{if(!a)return;const i=l=>{l.key==="Escape"&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[n,a]),!a)return null;const o=async i=>{i.preventDefault();const l=f.trim();if(!(!l||d)){u(!0);try{await y(l),n()}finally{u(!1)}}};return e.jsx(Y,{role:"dialog","aria-modal":"true","aria-label":"Resolver el reclamo",children:e.jsxs(G,{children:[e.jsxs(J,{children:[e.jsxs(P,{children:["Resolver ",c]}),e.jsx(K,{type:"button",onClick:n,"aria-label":"Cerrar",children:e.jsx(F,{size:18,"aria-hidden":"true"})})]}),e.jsxs("form",{onSubmit:o,children:[e.jsxs(ne,{children:[e.jsx("span",{children:"¿Qué le contestamos?"}),e.jsx(ie,{value:f,maxLength:500,autoFocus:!0,placeholder:"Le devolvemos el importe del producto que faltaba.",onChange:i=>x(i.target.value)}),e.jsx(le,{children:"Esto le llega al cliente al chat de su pedido, con tu nombre."})]}),e.jsxs(U,{children:[e.jsx(v,{type:"button","data-tono":"suave",onClick:n,disabled:d,children:"Volver"}),e.jsx(v,{type:"submit",disabled:d||f.trim()==="",children:d?"Enviando…":"Resolver y avisarle"})]})]})]})})}const fe=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spacing[2]};
  flex-wrap: wrap;

  > strong {
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,xe=m.span`
  padding: 0.12rem ${({theme:a})=>a.spacing[2]};
  border-radius: ${({theme:a})=>a.radius.full};
  font-size: 0.68rem;
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  white-space: nowrap;
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.textSoft};

  &[data-estado='abierto'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({theme:a})=>a.color.danger};
  }

  &[data-estado='en_revision'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:a})=>a.color.warning};
  }

  &[data-estado='resuelto'] {
    background: rgba(22, 163, 74, 0.14);
    color: ${({theme:a})=>a.color.success};
  }
`,ge=m.div`
  display: grid;
  gap: 0.15rem;
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  overflow-wrap: anywhere;
`,ve=m.p`
  margin: 0;
  padding: ${({theme:a})=>a.spacing[2]};
  border-radius: ${({theme:a})=>a.radius.md};
  border-left: 3px solid ${({theme:a})=>a.color.success};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.text};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.45;
  overflow-wrap: anywhere;
`,ye=m.span`
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.625rem;
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0.75;
`,je=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing[2]};

  > * {
    flex: 1 1 9rem;
  }
`,be=15e3,Se={abierto:"Sin atender",en_revision:"En revisión",resuelto:"Resuelto",cerrado:"Cerrado"},we={admin:"Administración",comercio:"El comercio",repartidor:"Quien repartió"};function z(a){const c=new Date(a.replace(" ","T")+"Z");return Number.isNaN(c.getTime())?"":`${c.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${c.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function Le(){const[a,c]=r.useState([]),[n,y]=r.useState(!1),[f,x]=r.useState(!0),[d,u]=r.useState(null),[o,i]=r.useState(null),[l,j]=r.useState([]),[L,D]=r.useState(""),[b,w]=r.useState(""),[E,C]=r.useState(!1),[p,R]=r.useState(null),k=r.useRef(null),S=r.useCallback(async()=>{if(!O()){x(!1);return}try{const{reclamos:t,esAdmin:s}=await g.listar();c(t),y(s),u(null)}catch{u("No pudimos cargar los reclamos.")}finally{x(!1)}},[]);r.useEffect(()=>{S()},[S]),r.useEffect(()=>{if(!o){j([]);return}let t=!0;const s=async()=>{try{const{mensajes:_,yo:N}=await g.mensajes(o);t&&(j(_),D(N))}catch{}};s();const h=window.setInterval(()=>void s(),be);return()=>{t=!1,window.clearInterval(h)}},[o]),r.useEffect(()=>{var t;(t=k.current)==null||t.scrollIntoView({block:"nearest"})},[l]);const M=async t=>{t.preventDefault();const s=b.trim();if(!(!s||!o||E)){C(!0);try{await g.escribir(o,s),w("");const{mensajes:h}=await g.mensajes(o);j(h)}catch{u("No pudimos enviar el mensaje.")}finally{C(!1)}}},q=async t=>{if(p)try{await g.resolver(p.id,t),await S()}catch{u("No pudimos resolver el reclamo.")}},$=a.filter(t=>t.estado==="abierto").length;return e.jsxs(I,{showSearch:!1,children:[e.jsx(B,{children:e.jsx(H,{children:e.jsxs(A,{children:[e.jsx(V,{title:"Reclamos",chip:$>0?`${$} sin atender`:void 0,subtitle:n?"Todos los reclamos, los sin atender primero.":"Los reclamos de tus pedidos."}),d?e.jsx(ce,{role:"alert","data-tono":"error",children:d}):null,!f&&a.length===0?e.jsx(X,{icon:de,title:"No hay reclamos",text:"Cuando alguien reporte un problema con un pedido lo vas a ver acá.",dashed:!0}):null,a.map(t=>e.jsx(Q,{children:e.jsx(Z,{children:e.jsxs(A,{children:[e.jsxs(fe,{children:[e.jsxs("strong",{children:[t.codigo," · ",t.comercio]}),e.jsx(xe,{"data-estado":t.estado,children:Se[t.estado]??t.estado})]}),e.jsxs(ge,{children:[e.jsx("span",{children:t.motivo}),t.detalle?e.jsx("span",{children:t.detalle}):null,e.jsxs("span",{children:["Lo abrió ",t.abrio," · ",z(t.creado_en)]}),e.jsxs("span",{children:["Entrega en ",t.direccion_texto,t.repartidor?` · lo llevó ${t.repartidor}`:""]})]}),t.resolucion?e.jsxs(ve,{children:[e.jsx("strong",{children:"Se resolvió así:"})," ",t.resolucion]}):null,e.jsxs(je,{children:[e.jsxs(v,{type:"button","data-tono":"suave",onClick:()=>i(s=>s===t.id?null:t.id),children:[e.jsx(pe,{size:14,"aria-hidden":"true"}),o===t.id?"Cerrar el chat":"Abrir chat entre las partes"]}),n&&t.estado!=="resuelto"&&t.estado!=="cerrado"?e.jsxs(v,{type:"button",onClick:()=>R(t),children:[e.jsx(he,{size:14,"aria-hidden":"true"}),"Resolver"]}):null]}),o===t.id?e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[l.length===0?e.jsx(ee,{children:"Todavía no habló nadie. Contá qué pasó de tu lado."}):l.map(s=>{const h=s.autor_id===L;return e.jsx(ae,{"data-propio":h,children:e.jsxs(te,{"data-propio":h,children:[h?null:e.jsxs(ye,{children:[s.autor," ·"," ",we[s.rol]??s.rol]}),s.texto,e.jsx(se,{children:z(s.creado_en)})]})},s.id)}),e.jsx("div",{ref:k})]}),e.jsx("form",{onSubmit:M,children:e.jsxs(re,{children:[e.jsx("input",{value:b,maxLength:600,placeholder:"Escribí lo que pasó…","aria-label":"Mensaje del reclamo",onChange:s=>w(s.target.value)}),e.jsx(oe,{type:"submit",disabled:E||b.trim()==="","aria-label":"Enviar",children:e.jsx(ue,{size:16,"aria-hidden":"true"})})]})})]}):null]})})},t.id))]})})}),e.jsx(me,{open:p!==null,codigo:(p==null?void 0:p.codigo)??"",onCerrar:()=>R(null),onResolver:q})]})}export{Le as ReclamosScreen};
