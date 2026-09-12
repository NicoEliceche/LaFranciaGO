import{c as ce,q as h,j as a,C as de,a as ue,X,b2 as V,l as S,o as pe,L as he,aR as me}from"./index-CVpm7Ujl.js";import{r as n}from"./react-D_B_6qYb.js";import{A as Z,a as ge}from"./AuthScreenStyled-9gz_rpLO.js";import{E as T,a as b,C as xe,b as fe,c as ye,d as be,e as ve,f as B,g as K,h as je,i as $e,j as we,k as Ee,l as ke}from"./ChatPedidoDialogStyled-DGBauUwk.js";import{F as Ce,a as Pe,b as Se,e as De}from"./formStyles-CNeYuuJ2.js";import{P as ze,a as Fe,b as Ae,c as Te}from"./PanelLoginDialogStyled-nfauC6qN.js";import{M as Ne}from"./MotivoDialog-TrAYHxcm.js";import{S as _e}from"./send-DjNHFE5K.js";import{I as Me}from"./info-D8oupIWr.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=ce("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),Le=h.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+30};
  display: flex;
  background: rgba(5, 8, 22, 0.62);
  backdrop-filter: blur(6px);

  /* En el teléfono el chat es la pantalla: sin margen ni fondo asomando. */
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: center;
    justify-content: center;
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,qe=h.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  /* Alto real en móvil: 100vh deja la caja de escritura debajo de la barra
     del navegador, que es el defecto clásico de un chat en el teléfono. */
  height: 100dvh;
  min-height: 0;
  background: ${({theme:e})=>e.color.background};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex: 0 1 auto;
    width: min(42rem, 100%);
    height: min(44rem, 88vh);
    border-radius: ${({theme:e})=>e.radius.xl};
    border: 1px solid ${({theme:e})=>e.color.border};
    box-shadow: ${({theme:e})=>e.shadow.lg};
    overflow: hidden;
  }
`,Re=h.header`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 0 0 auto;
  padding: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};

  /* En el teléfono respeta la muesca y la barra de estado. */
  padding-top: max(${({theme:e})=>e.spacing[3]}, env(safe-area-inset-top));

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-top: ${({theme:e})=>e.spacing[3]};
  }
`,Qe=h.span`
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
`,Ye=h.div`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,He=h.button`
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
  }
`,Ie=h.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.15rem;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.color.background};
`,Oe=h.div`
  align-self: center;
  margin: ${({theme:e})=>e.spacing[3]} 0 ${({theme:e})=>e.spacing[2]};
  padding: 0.15rem ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.7rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &:first-child {
    margin-top: 0;
  }
`,Ve=h.form`
  display: flex;
  align-items: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 0 0 auto;
  padding: ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};

  /* Que la barra de gestos del teléfono no tape el campo. */
  padding-bottom: max(${({theme:e})=>e.spacing[3]}, env(safe-area-inset-bottom));

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-bottom: ${({theme:e})=>e.spacing[3]};
  }
`,Be=h.textarea`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.75rem;
  max-height: 7rem;
  padding: 0.65rem ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
  resize: none;

  &::placeholder {
    color: ${({theme:e})=>e.color.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
  }
`;function Ke({open:e,onClose:r,onPedir:x}){const[m,u]=n.useState(!1),[l,s]=n.useState(null);if(n.useEffect(()=>{e&&s(null)},[e]),n.useEffect(()=>{if(!e)return;const g=$=>{$.key==="Escape"&&r()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[r,e]),!e)return null;const D=async g=>{if(g.preventDefault(),m)return;const $=String(new FormData(g.currentTarget).get("descripcion")??"").trim();if($.length<3){s("Contá qué necesitás que te traigan.");return}u(!0),s(null);try{await x($),r()}catch(E){s(E instanceof Error?E.message:"No pudimos enviar el pedido.")}finally{u(!1)}};return a.jsx(ze,{onClick:r,role:"presentation",children:a.jsxs(Fe,{role:"dialog","aria-modal":"true","aria-label":"Agregar algo al pedido",onClick:g=>g.stopPropagation(),children:[a.jsxs(Ae,{children:[a.jsxs("div",{children:[a.jsx(de,{children:"¿Necesitás agregar algo?"}),a.jsx(ue,{children:"Quien lleva tu pedido puede pasar a buscarlo. Te va a decir cuánto salió antes de que lo pagues."})]}),a.jsx(Te,{type:"button",onClick:r,"aria-label":"Cerrar",children:a.jsx(X,{size:18,"aria-hidden":"true"})})]}),l?a.jsx(Z,{role:"alert","data-tono":"error",children:l}):null,a.jsx("form",{onSubmit:D,children:a.jsxs(Ce,{children:[a.jsxs(Pe,{children:[a.jsxs(Se,{children:[a.jsx(N,{size:16,"aria-hidden":"true"}),"Qué necesitás"]}),a.jsx(De,{name:"descripcion",maxLength:300,placeholder:"Un chocolate del kiosco de la esquina",autoFocus:!0,required:!0})]}),a.jsxs(T,{children:[a.jsx(b,{type:"button","data-tono":"suave",onClick:r,children:"Cancelar"}),a.jsx(ge,{type:"submit",disabled:m,style:{flex:"1 1 auto"},children:m?"Enviando…":"Pedirlo"})]})]})})]})})}const Ue=6e3,Xe={pedido:{texto:"Esperando respuesta",tono:"espera"},aceptado:{texto:"Lo van a traer",tono:"ok"},comprado:{texto:"Comprado",tono:"ok"},cobrado:{texto:"Pagado",tono:"ok"},rechazado:{texto:"No lo pudieron traer",tono:"baja"},cancelado:{texto:"Cancelado",tono:"baja"}};function Ze(e){const r=(e??"").toLowerCase();return/se sum|se unió|se unio|tomó el pedido|tomo el pedido/.test(r)?{tono:"entra",Icono:he}:/se bajó|se bajo|dejó|dejo|cancel|rechaz|se fue/.test(r)?{tono:"sale",Icono:me}:{tono:"estado",Icono:Me}}function U(e){const r=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(r.getTime()))return"";const x=new Date,m=new Date(x);m.setDate(x.getDate()-1);const u=(l,s)=>l.getDate()===s.getDate()&&l.getMonth()===s.getMonth()&&l.getFullYear()===s.getFullYear();return u(r,x)?"Hoy":u(r,m)?"Ayer":r.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit",year:"numeric"})}const Ge=e=>(e.trim()[0]??"?").toUpperCase();function sa({open:e,pedidoId:r,codigo:x,cliente:m,onClose:u,rol:l="comercio"}){const[s,D]=n.useState([]),[g,$]=n.useState([]),[E,G]=n.useState([]),[J,W]=n.useState([]),[ee,_]=n.useState(!1),[ae,k]=n.useState(null),[p,C]=n.useState(null),[M,te]=n.useState(""),[L,f]=n.useState(null),[q,R]=n.useState(!1),Q=n.useRef(null),v=n.useCallback(async()=>{if(r)try{const[t,i]=await Promise.all([V.mensajes(r),S.listar(r).catch(()=>null)]);D(t.mensajes),te(t.yo),i&&($(i.extras),G(i.motivosRechazo),W(i.motivosCancelacion)),f(null)}catch{f("No pudimos cargar la conversación.")}},[r]);if(n.useEffect(()=>{if(!e||!r)return;v();const t=window.setInterval(()=>void v(),Ue);return()=>window.clearInterval(t)},[v,e,r]),n.useEffect(()=>{const t=Q.current;t&&(t.scrollTop=t.scrollHeight)},[s]),n.useEffect(()=>{if(!e)return;const t=i=>{i.key==="Escape"&&u()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[u,e]),!e||!r)return null;const oe=async t=>{t.preventDefault();const i=t.currentTarget,c=String(new FormData(i).get("texto")??"").trim();if(!(!c||q)){R(!0);try{await V.enviarMensaje(r,c),i.reset(),await v()}catch{f("No pudimos enviar el mensaje.")}finally{R(!1)}}},Y=t=>new Date(t.replace(" ","T")+"Z").toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),re=async t=>{r&&(await S.pedir(r,t),await v())},w=async(t,i,c)=>{k(t.id);try{await S.accion(t.id,{accion:i,motivo:c}),await v(),f(null)}catch(d){f(d instanceof Error?d.message:"No pudimos hacer eso.")}finally{k(null),C(null)}},ie=async t=>{const i=window.prompt(`¿Cuánto salió "${t.descripcion}"?`);if(i===null)return;const c=Number(i.replace(",","."));if(!Number.isFinite(c)||c<=0){f("Poné cuánto salió, en números.");return}k(t.id);try{await S.accion(t.id,{accion:"comprar",precio:c}),await v(),f(null)}catch(d){f(d instanceof Error?d.message:"No pudimos guardar el precio.")}finally{k(null)}},ne=new Map(g.map(t=>[t.id,t]));return a.jsxs(Le,{onClick:u,role:"presentation",children:[a.jsxs(qe,{role:"dialog","aria-modal":"true","aria-label":`Chat del pedido ${x}`,onClick:t=>t.stopPropagation(),children:[a.jsxs(Re,{children:[a.jsx(Qe,{"aria-hidden":"true",children:Ge(m)}),a.jsxs(Ye,{children:[a.jsx("strong",{children:m}),a.jsxs("span",{children:["Pedido ",x]})]}),a.jsx(He,{type:"button",onClick:u,"aria-label":"Cerrar",children:a.jsx(X,{size:20,"aria-hidden":"true"})})]}),L?a.jsx(Z,{role:"alert","data-tono":"error",children:L}):null,a.jsxs(Ie,{ref:Q,children:[s.length===0?a.jsx(xe,{children:"Todavía no hay mensajes. Escribile al cliente."}):null,s.map((t,i)=>{const c=t.tipo??"texto",d=s[i-1],z=s[i+1],P=U(t.creado_en),H=d?U(d.creado_en):null,I=P&&P!==H?a.jsx(Oe,{children:P},`dia-${t.id}`):null;if(c==="sistema"){const{tono:o,Icono:y}=Ze(t.texto);return a.jsxs(n.Fragment,{children:[I,a.jsxs(fe,{"data-tono":o,children:[a.jsx(y,{size:12,"aria-hidden":"true"}),t.texto]})]},t.id)}if(c==="extra"){const o=ne.get(t.extra_id??""),y=o?Xe[o.estado]:null,le=t.autor_id===M,j=o?ae===o.id:!1;return a.jsxs(ye,{"data-propio":le,children:[a.jsxs(be,{children:[a.jsx(N,{size:11,"aria-hidden":"true"}),"¿Necesitás agregar algo al pedido?"]}),a.jsx(ve,{children:t.texto}),o?a.jsxs(B,{"data-tono":y==null?void 0:y.tono,children:[(y==null?void 0:y.texto)??o.estado,o.precio?` · ${pe(o.precio)}`:"",o.motivo&&o.estado!=="comprado"?` · ${o.motivo}`:""]}):null,o&&l==="repartidor"?a.jsxs(T,{children:[o.estado==="pedido"?a.jsxs(a.Fragment,{children:[a.jsx(b,{type:"button",disabled:j,onClick:()=>void w(o,"aceptar"),children:"Puedo traerlo"}),a.jsx(b,{type:"button","data-tono":"suave",disabled:j,onClick:()=>C({titulo:"¿Por qué no podés?",motivos:E,alElegir:A=>w(o,"rechazar",A)}),children:"No puedo"})]}):null,o.estado==="aceptado"?a.jsxs(a.Fragment,{children:[a.jsx(b,{type:"button",disabled:j,onClick:()=>void ie(o),children:"Ya lo compré"}),a.jsx(b,{type:"button","data-tono":"suave",disabled:j,onClick:()=>C({titulo:"¿Qué pasó?",motivos:J,alElegir:A=>w(o,"cancelar",A)}),children:"Cancelar extra"})]}):null,o.espera_confirmacion===1?a.jsxs(a.Fragment,{children:[a.jsx(b,{type:"button",disabled:j,onClick:()=>void w(o,"confirmar-cancelacion"),children:"Acepto cancelarlo"}),a.jsx(b,{type:"button","data-tono":"suave",disabled:j,onClick:()=>void w(o,"rechazar-cancelacion"),children:"Ya lo compré"})]}):null]}):null,o&&l==="cliente"&&o.espera_confirmacion!==1&&["pedido","aceptado","comprado"].includes(o.estado)?a.jsx(T,{children:a.jsx(b,{type:"button","data-tono":"suave",disabled:j,onClick:()=>void w(o,"cancelar"),children:o.estado==="comprado"?"Pedir cancelarlo":"Ya no lo necesito"})}):null,o&&o.espera_confirmacion===1&&l==="cliente"?a.jsx(B,{"data-tono":"espera",children:"Esperando que confirmen la cancelación."}):null,a.jsx(K,{children:Y(t.creado_en)})]},t.id)}const F=t.autor_id===M,O=z!==void 0&&z.autor_id===t.autor_id&&(z.tipo??"texto")==="texto",se=d!==void 0&&d.autor_id===t.autor_id&&(d.tipo??"texto")==="texto"&&P===H;return a.jsxs(n.Fragment,{children:[I,a.jsx(je,{"data-propio":F,"data-ultimo":!O,children:a.jsxs($e,{"data-propio":F,"data-ultimo":!O,children:[!F&&!se&&t.autor?a.jsx(we,{children:t.autor}):null,a.jsx("span",{className:"texto",children:t.texto}),a.jsx(K,{children:Y(t.creado_en)})]})})]},t.id)})]}),l==="cliente"?a.jsxs(Ee,{type:"button",onClick:()=>_(!0),children:[a.jsx(N,{size:14,"aria-hidden":"true"}),"¿Necesitás agregar algo al pedido?"]}):null,a.jsxs(Ve,{onSubmit:oe,children:[a.jsx(Be,{name:"texto",rows:1,placeholder:"Escribí un mensaje",autoComplete:"off",onKeyDown:t=>{var i;t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),(i=t.currentTarget.form)==null||i.requestSubmit())},onInput:t=>{const i=t.currentTarget;i.style.height="auto",i.style.height=`${i.scrollHeight}px`}}),a.jsx(ke,{type:"submit",disabled:q,"aria-label":"Enviar",children:a.jsx(_e,{size:18,"aria-hidden":"true"})})]})]}),a.jsx(Ke,{open:ee,onClose:()=>_(!1),onPedir:re}),a.jsx(Ne,{open:p!==null,titulo:(p==null?void 0:p.titulo)??"",motivos:(p==null?void 0:p.motivos)??[],onCancelar:()=>C(null),onElegir:t=>(p==null?void 0:p.alElegir(t))??Promise.resolve()})]})}export{sa as C};
