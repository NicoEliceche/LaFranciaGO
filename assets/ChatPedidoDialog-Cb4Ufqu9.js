import{c as ie,q as s,j as o,C as D,a as X,X as T,aY as V,k as z,n as ne}from"./index-BYdsqWK_.js";import{r as t}from"./react-D_B_6qYb.js";import{A as G,a as se}from"./AuthScreenStyled-DIJQjVW0.js";import{P as L,a as M,b as N,c as q}from"./PanelLoginDialogStyled-DizL1KZB.js";import{F as le,a as ce,b as de,e as ue}from"./formStyles-ZBeMJmX5.js";import{S as pe}from"./send-DZ0vYo2X.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=ie("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),ge=s.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  /* Alto fijo para que la caja de escritura no se mueva al llegar mensajes. */
  height: 18rem;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,he=s.p`
  margin: auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-align: center;
`,fe=s.div`
  display: flex;

  &[data-propio='true'] {
    justify-content: flex-end;
  }
`,me=s.span`
  position: relative;
  max-width: 78%;
  padding: ${({theme:e})=>e.spacing[2]};
  padding-bottom: 1.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
  /* Un mensaje largo sin espacios no debe estirar la burbuja. */
  overflow-wrap: anywhere;

  &[data-propio='true'] {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,B=s.span`
  position: absolute;
  right: ${({theme:e})=>e.spacing[2]};
  bottom: 0.3rem;
  font-size: 0.625rem;
  opacity: 0.7;
`,xe=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  > input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.75rem;
    padding: 0 ${({theme:e})=>e.spacing[3]};
    border-radius: ${({theme:e})=>e.radius.full};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.text};
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    font-size: ${({theme:e})=>e.typography.size.sm};

    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.color.primary};
    }
  }
`,ye=s.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,be=s.div`
  align-self: center;
  max-width: 85%;
  padding: 0.3rem ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-align: center;
  line-height: 1.35;
`,ve=s.div`
  display: grid;
  gap: 0.4rem;
  max-width: 85%;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.primary};
  background: ${({theme:e})=>e.color.primarySoft};

  &[data-propio='true'] {
    align-self: flex-end;
  }
`,je=s.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  align-self: start;
  padding: 0.1rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primary};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.65rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,$e=s.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;
`,U=s.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &[data-tono='ok'] { color: ${({theme:e})=>e.color.success}; }
  &[data-tono='baja'] { color: ${({theme:e})=>e.color.danger}; }
  &[data-tono='espera'] { color: ${({theme:e})=>e.color.warning}; }
`,P=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,f=s.button`
  flex: 1 1 auto;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;

  &[data-tono='suave'] {
    border: 1px solid ${({theme:e})=>e.color.border};
    background: transparent;
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:disabled { opacity: 0.6; cursor: progress; }
`,ke=s.button`
  position: sticky;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.5rem;
  margin-top: ${({theme:e})=>e.spacing[2]};
  border: 1px dashed ${({theme:e})=>e.color.primary};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover { background: ${({theme:e})=>e.color.primarySoft}; }
`;function Ee({open:e,onClose:i,onPedir:k}){const[p,m]=t.useState(!1),[l,g]=t.useState(null);if(t.useEffect(()=>{e&&g(null)},[e]),t.useEffect(()=>{if(!e)return;const c=x=>{x.key==="Escape"&&i()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[i,e]),!e)return null;const b=async c=>{if(c.preventDefault(),p)return;const x=String(new FormData(c.currentTarget).get("descripcion")??"").trim();if(x.length<3){g("Contá qué necesitás que te traigan.");return}m(!0),g(null);try{await k(x),i()}catch(d){g(d instanceof Error?d.message:"No pudimos enviar el pedido.")}finally{m(!1)}};return o.jsx(L,{onClick:i,role:"presentation",children:o.jsxs(M,{role:"dialog","aria-modal":"true","aria-label":"Agregar algo al pedido",onClick:c=>c.stopPropagation(),children:[o.jsxs(N,{children:[o.jsxs("div",{children:[o.jsx(D,{children:"¿Necesitás agregar algo?"}),o.jsx(X,{children:"Quien lleva tu pedido puede pasar a buscarlo. Te va a decir cuánto salió antes de que lo pagues."})]}),o.jsx(q,{type:"button",onClick:i,"aria-label":"Cerrar",children:o.jsx(T,{size:18,"aria-hidden":"true"})})]}),l?o.jsx(G,{role:"alert","data-tono":"error",children:l}):null,o.jsx("form",{onSubmit:b,children:o.jsxs(le,{children:[o.jsxs(ce,{children:[o.jsxs(de,{children:[o.jsx(A,{size:16,"aria-hidden":"true"}),"Qué necesitás"]}),o.jsx(ue,{name:"descripcion",maxLength:300,placeholder:"Un chocolate del kiosco de la esquina",autoFocus:!0,required:!0})]}),o.jsxs(P,{children:[o.jsx(f,{type:"button","data-tono":"suave",onClick:i,children:"Cancelar"}),o.jsx(se,{type:"submit",disabled:p,style:{flex:"1 1 auto"},children:p?"Enviando…":"Pedirlo"})]})]})})]})})}const we=s.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  min-height: 3rem;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }

  &[data-elegido='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }

  > input {
    flex: 0 0 auto;
    accent-color: ${({theme:e})=>e.color.primary};
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }
`;function Ce({open:e,titulo:i,motivos:k,onCancelar:p,onElegir:m}){const[l,g]=t.useState(null),[b,c]=t.useState(!1);if(t.useEffect(()=>{e&&g(null)},[e]),t.useEffect(()=>{if(!e)return;const d=v=>{v.key==="Escape"&&p()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[p,e]),!e)return null;const x=async()=>{if(!(l===null||b)){c(!0);try{await m(l)}finally{c(!1)}}};return o.jsx(L,{onClick:p,role:"presentation",children:o.jsxs(M,{role:"dialog","aria-modal":"true","aria-label":i,onClick:d=>d.stopPropagation(),children:[o.jsxs(N,{children:[o.jsx("div",{children:o.jsx(D,{children:i})}),o.jsx(q,{type:"button",onClick:p,"aria-label":"Cerrar",children:o.jsx(T,{size:18,"aria-hidden":"true"})})]}),k.map((d,v)=>o.jsxs(we,{"data-elegido":l===v,children:[o.jsx("input",{type:"radio",name:"motivo",checked:l===v,onChange:()=>g(v)}),o.jsx("span",{children:d})]},d)),o.jsxs(P,{children:[o.jsx(f,{type:"button","data-tono":"suave",onClick:p,children:"Volver"}),o.jsx(f,{type:"button",onClick:()=>void x(),disabled:l===null||b,children:b?"Enviando…":"Confirmar"})]})]})})}const ze=6e3,Pe={pedido:{texto:"Esperando respuesta",tono:"espera"},aceptado:{texto:"Lo van a traer",tono:"ok"},comprado:{texto:"Comprado",tono:"ok"},cobrado:{texto:"Pagado",tono:"ok"},rechazado:{texto:"No lo pudieron traer",tono:"baja"},cancelado:{texto:"Cancelado",tono:"baja"}};function Me({open:e,pedidoId:i,codigo:k,cliente:p,onClose:m,rol:l="comercio"}){const[g,b]=t.useState([]),[c,x]=t.useState([]),[d,v]=t.useState([]),[Z,J]=t.useState([]),[K,_]=t.useState(!1),[W,w]=t.useState(null),[h,C]=t.useState(null),[S,I]=t.useState(""),[R,y]=t.useState(null),[Y,O]=t.useState(!1),H=t.useRef(null),j=t.useCallback(async()=>{if(i)try{const[r,n]=await Promise.all([V.mensajes(i),z.listar(i).catch(()=>null)]);b(r.mensajes),I(r.yo),n&&(x(n.extras),v(n.motivosRechazo),J(n.motivosCancelacion)),y(null)}catch{y("No pudimos cargar la conversación.")}},[i]);if(t.useEffect(()=>{if(!e||!i)return;j();const r=window.setInterval(()=>void j(),ze);return()=>window.clearInterval(r)},[j,e,i]),t.useEffect(()=>{const r=H.current;r&&(r.scrollTop=r.scrollHeight)},[g]),t.useEffect(()=>{if(!e)return;const r=n=>{n.key==="Escape"&&m()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[m,e]),!e||!i)return null;const ee=async r=>{r.preventDefault();const n=r.currentTarget,a=String(new FormData(n).get("texto")??"").trim();if(!(!a||Y)){O(!0);try{await V.enviarMensaje(i,a),n.reset(),await j()}catch{y("No pudimos enviar el mensaje.")}finally{O(!1)}}},Q=r=>new Date(r.replace(" ","T")+"Z").toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),oe=async r=>{i&&(await z.pedir(i,r),await j())},E=async(r,n,a)=>{w(r.id);try{await z.accion(r.id,{accion:n,motivo:a}),await j(),y(null)}catch(u){y(u instanceof Error?u.message:"No pudimos hacer eso.")}finally{w(null),C(null)}},re=async r=>{const n=window.prompt(`¿Cuánto salió "${r.descripcion}"?`);if(n===null)return;const a=Number(n.replace(",","."));if(!Number.isFinite(a)||a<=0){y("Poné cuánto salió, en números.");return}w(r.id);try{await z.accion(r.id,{accion:"comprar",precio:a}),await j(),y(null)}catch(u){y(u instanceof Error?u.message:"No pudimos guardar el precio.")}finally{w(null)}},ae=new Map(c.map(r=>[r.id,r]));return o.jsxs(L,{onClick:m,role:"presentation",children:[o.jsxs(M,{role:"dialog","aria-modal":"true","aria-label":`Chat del pedido ${k}`,onClick:r=>r.stopPropagation(),children:[o.jsxs(N,{children:[o.jsxs("div",{children:[o.jsx(D,{children:p}),o.jsxs(X,{children:["Pedido ",k]})]}),o.jsx(q,{type:"button",onClick:m,"aria-label":"Cerrar",children:o.jsx(T,{size:18,"aria-hidden":"true"})})]}),R?o.jsx(G,{role:"alert","data-tono":"error",children:R}):null,o.jsxs(ge,{ref:H,children:[g.length===0?o.jsx(he,{children:"Todavía no hay mensajes. Escribile al cliente."}):null,g.map(r=>{const n=r.tipo??"texto";if(n==="sistema")return o.jsx(be,{children:r.texto},r.id);if(n==="extra"){const a=ae.get(r.extra_id??""),u=a?Pe[a.estado]:null,te=r.autor_id===S,$=a?W===a.id:!1;return o.jsxs(ve,{"data-propio":te,children:[o.jsxs(je,{children:[o.jsx(A,{size:11,"aria-hidden":"true"}),"¿Necesitás agregar algo al pedido?"]}),o.jsx($e,{children:r.texto}),a?o.jsxs(U,{"data-tono":u==null?void 0:u.tono,children:[(u==null?void 0:u.texto)??a.estado,a.precio?` · ${ne(a.precio)}`:"",a.motivo&&a.estado!=="comprado"?` · ${a.motivo}`:""]}):null,a&&l==="repartidor"?o.jsxs(P,{children:[a.estado==="pedido"?o.jsxs(o.Fragment,{children:[o.jsx(f,{type:"button",disabled:$,onClick:()=>void E(a,"aceptar"),children:"Puedo traerlo"}),o.jsx(f,{type:"button","data-tono":"suave",disabled:$,onClick:()=>C({titulo:"¿Por qué no podés?",motivos:d,alElegir:F=>E(a,"rechazar",F)}),children:"No puedo"})]}):null,a.estado==="aceptado"?o.jsxs(o.Fragment,{children:[o.jsx(f,{type:"button",disabled:$,onClick:()=>void re(a),children:"Ya lo compré"}),o.jsx(f,{type:"button","data-tono":"suave",disabled:$,onClick:()=>C({titulo:"¿Qué pasó?",motivos:Z,alElegir:F=>E(a,"cancelar",F)}),children:"Cancelar extra"})]}):null,a.espera_confirmacion===1?o.jsxs(o.Fragment,{children:[o.jsx(f,{type:"button",disabled:$,onClick:()=>void E(a,"confirmar-cancelacion"),children:"Acepto cancelarlo"}),o.jsx(f,{type:"button","data-tono":"suave",disabled:$,onClick:()=>void E(a,"rechazar-cancelacion"),children:"Ya lo compré"})]}):null]}):null,a&&l==="cliente"&&a.espera_confirmacion!==1&&["pedido","aceptado","comprado"].includes(a.estado)?o.jsx(P,{children:o.jsx(f,{type:"button","data-tono":"suave",disabled:$,onClick:()=>void E(a,"cancelar"),children:a.estado==="comprado"?"Pedir cancelarlo":"Ya no lo necesito"})}):null,a&&a.espera_confirmacion===1&&l==="cliente"?o.jsx(U,{"data-tono":"espera",children:"Esperando que confirmen la cancelación."}):null,o.jsx(B,{children:Q(r.creado_en)})]},r.id)}return o.jsx(fe,{"data-propio":r.autor_id===S,children:o.jsxs(me,{"data-propio":r.autor_id===S,children:[r.texto,o.jsx(B,{children:Q(r.creado_en)})]})},r.id)})]}),l==="cliente"?o.jsxs(ke,{type:"button",onClick:()=>_(!0),children:[o.jsx(A,{size:14,"aria-hidden":"true"}),"¿Necesitás agregar algo al pedido?"]}):null,o.jsx("form",{onSubmit:ee,children:o.jsxs(xe,{children:[o.jsx("input",{name:"texto",placeholder:"Escribí un mensaje",autoComplete:"off"}),o.jsx(ye,{type:"submit",disabled:Y,"aria-label":"Enviar",children:o.jsx(pe,{size:16,"aria-hidden":"true"})})]})})]}),o.jsx(Ee,{open:K,onClose:()=>_(!1),onPedir:oe}),o.jsx(Ce,{open:h!==null,titulo:(h==null?void 0:h.titulo)??"",motivos:(h==null?void 0:h.motivos)??[],onCancelar:()=>C(null),onElegir:r=>(h==null?void 0:h.alElegir(r))??Promise.resolve()})]})}export{Me as C};
