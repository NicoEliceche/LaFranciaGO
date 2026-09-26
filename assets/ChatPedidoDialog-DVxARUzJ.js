import{j as a,af as ce,ag as de,ah as ue,c as pe,d as he,ai as me,e as X,F as ge,f as xe,g as fe,i as be,k as ye,be as B,o as D,r as ve}from"./index-BEHxigxl.js";import{r as n}from"./react-6hK8W6IX.js";import{q as h}from"./estilos-DzHAJWDP.js";import{E as T,a as y,C as je,b as $e,c as Ee,d as we,e as Ce,f as K,g as U,h as ke,i as Se,j as De,k as ze,l as Pe}from"./ChatPedidoDialogStyled-MvteS_Yt.js";import{X as Z,ay as N,a6 as Fe,L as Ae,a as Te,aa as Ne}from"./iconos-DPkufriG.js";import{M as _e}from"./MotivoDialog-ixAsS--3.js";const Le=h.div`
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
`,Me=h.header`
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
`,Re=h.span`
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
`,Qe=h.div`
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
`,Ye=h.button`
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
`,He=h.div`
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
`,Ie=h.form`
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
`;function Ke({open:e,onClose:r,onPedir:x}){const[m,u]=n.useState(!1),[l,s]=n.useState(null);if(n.useEffect(()=>{e&&s(null)},[e]),n.useEffect(()=>{if(!e)return;const g=$=>{$.key==="Escape"&&r()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[r,e]),!e)return null;const z=async g=>{if(g.preventDefault(),m)return;const $=String(new FormData(g.currentTarget).get("descripcion")??"").trim();if($.length<3){s("Contá qué necesitás que te traigan.");return}u(!0),s(null);try{await x($),r()}catch(w){s(w instanceof Error?w.message:"No pudimos enviar el pedido.")}finally{u(!1)}};return a.jsx(ce,{onClick:r,role:"presentation",children:a.jsxs(de,{role:"dialog","aria-modal":"true","aria-label":"Agregar algo al pedido",onClick:g=>g.stopPropagation(),children:[a.jsxs(ue,{children:[a.jsxs("div",{children:[a.jsx(pe,{children:"¿Necesitás agregar algo?"}),a.jsx(he,{children:"Quien lleva tu pedido puede pasar a buscarlo. Te va a decir cuánto salió antes de que lo pagues."})]}),a.jsx(me,{type:"button",onClick:r,"aria-label":"Cerrar",children:a.jsx(Z,{size:18,"aria-hidden":"true"})})]}),l?a.jsx(X,{role:"alert","data-tono":"error",children:l}):null,a.jsx("form",{onSubmit:z,children:a.jsxs(ge,{children:[a.jsxs(xe,{children:[a.jsxs(fe,{children:[a.jsx(N,{size:16,"aria-hidden":"true"}),"Qué necesitás"]}),a.jsx(be,{name:"descripcion",maxLength:300,placeholder:"Un chocolate del kiosco de la esquina",autoFocus:!0,required:!0})]}),a.jsxs(T,{children:[a.jsx(y,{type:"button","data-tono":"suave",onClick:r,children:"Cancelar"}),a.jsx(ye,{type:"submit",disabled:m,style:{flex:"1 1 auto"},children:m?"Enviando…":"Pedirlo"})]})]})})]})})}const Ue=6e3,Ve={pedido:{texto:"Esperando respuesta",tono:"espera"},aceptado:{texto:"Lo van a traer",tono:"ok"},comprado:{texto:"Comprado",tono:"ok"},cobrado:{texto:"Pagado",tono:"ok"},rechazado:{texto:"No lo pudieron traer",tono:"baja"},cancelado:{texto:"Cancelado",tono:"baja"}};function Xe(e){const r=(e??"").toLowerCase();return/se sum|se unió|se unio|tomó el pedido|tomo el pedido/.test(r)?{tono:"entra",Icono:Ae}:/se bajó|se bajo|dejó|dejo|cancel|rechaz|se fue/.test(r)?{tono:"sale",Icono:Te}:{tono:"estado",Icono:Ne}}function V(e){const r=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(r.getTime()))return"";const x=new Date,m=new Date(x);m.setDate(x.getDate()-1);const u=(l,s)=>l.getDate()===s.getDate()&&l.getMonth()===s.getMonth()&&l.getFullYear()===s.getFullYear();return u(r,x)?"Hoy":u(r,m)?"Ayer":r.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit",year:"numeric"})}const Ze=e=>(e.trim()[0]??"?").toUpperCase();function oa({open:e,pedidoId:r,codigo:x,cliente:m,onClose:u,rol:l="comercio"}){const[s,z]=n.useState([]),[g,$]=n.useState([]),[w,G]=n.useState([]),[J,W]=n.useState([]),[ee,_]=n.useState(!1),[ae,C]=n.useState(null),[p,k]=n.useState(null),[L,te]=n.useState(""),[q,f]=n.useState(null),[M,R]=n.useState(!1),Q=n.useRef(null),v=n.useCallback(async()=>{if(r)try{const[t,i]=await Promise.all([B.mensajes(r),D.listar(r).catch(()=>null)]);z(t.mensajes),te(t.yo),i&&($(i.extras),G(i.motivosRechazo),W(i.motivosCancelacion)),f(null)}catch{f("No pudimos cargar la conversación.")}},[r]);if(n.useEffect(()=>{if(!e||!r)return;v();const t=window.setInterval(()=>void v(),Ue);return()=>window.clearInterval(t)},[v,e,r]),n.useEffect(()=>{const t=Q.current;t&&(t.scrollTop=t.scrollHeight)},[s]),n.useEffect(()=>{if(!e)return;const t=i=>{i.key==="Escape"&&u()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[u,e]),!e||!r)return null;const oe=async t=>{t.preventDefault();const i=t.currentTarget,c=String(new FormData(i).get("texto")??"").trim();if(!(!c||M)){R(!0);try{await B.enviarMensaje(r,c),i.reset(),await v()}catch{f("No pudimos enviar el mensaje.")}finally{R(!1)}}},Y=t=>new Date(t.replace(" ","T")+"Z").toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),re=async t=>{r&&(await D.pedir(r,t),await v())},E=async(t,i,c)=>{C(t.id);try{await D.accion(t.id,{accion:i,motivo:c}),await v(),f(null)}catch(d){f(d instanceof Error?d.message:"No pudimos hacer eso.")}finally{C(null),k(null)}},ie=async t=>{const i=window.prompt(`¿Cuánto salió "${t.descripcion}"?`);if(i===null)return;const c=Number(i.replace(",","."));if(!Number.isFinite(c)||c<=0){f("Poné cuánto salió, en números.");return}C(t.id);try{await D.accion(t.id,{accion:"comprar",precio:c}),await v(),f(null)}catch(d){f(d instanceof Error?d.message:"No pudimos guardar el precio.")}finally{C(null)}},ne=new Map(g.map(t=>[t.id,t]));return a.jsxs(Le,{onClick:u,role:"presentation",children:[a.jsxs(qe,{role:"dialog","aria-modal":"true","aria-label":`Chat del pedido ${x}`,onClick:t=>t.stopPropagation(),children:[a.jsxs(Me,{children:[a.jsx(Re,{"aria-hidden":"true",children:Ze(m)}),a.jsxs(Qe,{children:[a.jsx("strong",{children:m}),a.jsxs("span",{children:["Pedido ",x]})]}),a.jsx(Ye,{type:"button",onClick:u,"aria-label":"Cerrar",children:a.jsx(Z,{size:20,"aria-hidden":"true"})})]}),q?a.jsx(X,{role:"alert","data-tono":"error",children:q}):null,a.jsxs(He,{ref:Q,children:[s.length===0?a.jsx(je,{children:"Todavía no hay mensajes. Escribile al cliente."}):null,s.map((t,i)=>{const c=t.tipo??"texto",d=s[i-1],P=s[i+1],S=V(t.creado_en),H=d?V(d.creado_en):null,O=S&&S!==H?a.jsx(Oe,{children:S},`dia-${t.id}`):null;if(c==="sistema"){const{tono:o,Icono:b}=Xe(t.texto);return a.jsxs(n.Fragment,{children:[O,a.jsxs($e,{"data-tono":o,children:[a.jsx(b,{size:12,"aria-hidden":"true"}),t.texto]})]},t.id)}if(c==="extra"){const o=ne.get(t.extra_id??""),b=o?Ve[o.estado]:null,le=t.autor_id===L,j=o?ae===o.id:!1;return a.jsxs(Ee,{"data-propio":le,children:[a.jsxs(we,{children:[a.jsx(N,{size:11,"aria-hidden":"true"}),"¿Necesitás agregar algo al pedido?"]}),a.jsx(Ce,{children:t.texto}),o?a.jsxs(K,{"data-tono":b==null?void 0:b.tono,children:[(b==null?void 0:b.texto)??o.estado,o.precio?` · ${ve(o.precio)}`:"",o.motivo&&o.estado!=="comprado"?` · ${o.motivo}`:""]}):null,o&&l==="repartidor"?a.jsxs(T,{children:[o.estado==="pedido"?a.jsxs(a.Fragment,{children:[a.jsx(y,{type:"button",disabled:j,onClick:()=>void E(o,"aceptar"),children:"Puedo traerlo"}),a.jsx(y,{type:"button","data-tono":"suave",disabled:j,onClick:()=>k({titulo:"¿Por qué no podés?",motivos:w,alElegir:A=>E(o,"rechazar",A)}),children:"No puedo"})]}):null,o.estado==="aceptado"?a.jsxs(a.Fragment,{children:[a.jsx(y,{type:"button",disabled:j,onClick:()=>void ie(o),children:"Ya lo compré"}),a.jsx(y,{type:"button","data-tono":"suave",disabled:j,onClick:()=>k({titulo:"¿Qué pasó?",motivos:J,alElegir:A=>E(o,"cancelar",A)}),children:"Cancelar extra"})]}):null,o.espera_confirmacion===1?a.jsxs(a.Fragment,{children:[a.jsx(y,{type:"button",disabled:j,onClick:()=>void E(o,"confirmar-cancelacion"),children:"Acepto cancelarlo"}),a.jsx(y,{type:"button","data-tono":"suave",disabled:j,onClick:()=>void E(o,"rechazar-cancelacion"),children:"Ya lo compré"})]}):null]}):null,o&&l==="cliente"&&o.espera_confirmacion!==1&&["pedido","aceptado","comprado"].includes(o.estado)?a.jsx(T,{children:a.jsx(y,{type:"button","data-tono":"suave",disabled:j,onClick:()=>void E(o,"cancelar"),children:o.estado==="comprado"?"Pedir cancelarlo":"Ya no lo necesito"})}):null,o&&o.espera_confirmacion===1&&l==="cliente"?a.jsx(K,{"data-tono":"espera",children:"Esperando que confirmen la cancelación."}):null,a.jsx(U,{children:Y(t.creado_en)})]},t.id)}const F=t.autor_id===L,I=P!==void 0&&P.autor_id===t.autor_id&&(P.tipo??"texto")==="texto",se=d!==void 0&&d.autor_id===t.autor_id&&(d.tipo??"texto")==="texto"&&S===H;return a.jsxs(n.Fragment,{children:[O,a.jsx(ke,{"data-propio":F,"data-ultimo":!I,children:a.jsxs(Se,{"data-propio":F,"data-ultimo":!I,children:[!F&&!se&&t.autor?a.jsx(De,{children:t.autor}):null,a.jsx("span",{className:"texto",children:t.texto}),a.jsx(U,{children:Y(t.creado_en)})]})})]},t.id)})]}),l==="cliente"?a.jsxs(ze,{type:"button",onClick:()=>_(!0),children:[a.jsx(N,{size:14,"aria-hidden":"true"}),"¿Necesitás agregar algo al pedido?"]}):null,a.jsxs(Ie,{onSubmit:oe,children:[a.jsx(Be,{name:"texto",rows:1,placeholder:"Escribí un mensaje",autoComplete:"off",onKeyDown:t=>{var i;t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),(i=t.currentTarget.form)==null||i.requestSubmit())},onInput:t=>{const i=t.currentTarget;i.style.height="auto",i.style.height=`${i.scrollHeight}px`}}),a.jsx(Pe,{type:"submit",disabled:M,"aria-label":"Enviar",children:a.jsx(Fe,{size:18,"aria-hidden":"true"})})]})]}),a.jsx(Ke,{open:ee,onClose:()=>_(!1),onPedir:re}),a.jsx(_e,{open:p!==null,titulo:(p==null?void 0:p.titulo)??"",motivos:(p==null?void 0:p.motivos)??[],onCancelar:()=>k(null),onElegir:t=>(p==null?void 0:p.alElegir(t))??Promise.resolve()})]})}export{oa as C};
