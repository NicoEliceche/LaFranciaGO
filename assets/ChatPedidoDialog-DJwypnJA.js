import{q as i,aI as y,j as a,C as w,a as E,X as k}from"./index--oxwNYaS.js";import{r as t}from"./react-D_B_6qYb.js";import{A as S}from"./AuthScreenStyled-DiufKezQ.js";import{P,a as z,b as D,c as T}from"./PanelLoginDialogStyled-CamNoWR2.js";import{S as A}from"./send-D1QYa4r6.js";const R=i.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[1]};
  /* Alto fijo para que la caja de escritura no se mueva al llegar mensajes. */
  height: 18rem;
  overflow-y: auto;
  padding: ${({theme:r})=>r.spacing[2]};
  margin-bottom: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.surfaceMuted};
`,M=i.p`
  margin: auto;
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};
  text-align: center;
`,F=i.div`
  display: flex;

  &[data-propio='true'] {
    justify-content: flex-end;
  }
`,L=i.span`
  position: relative;
  max-width: 78%;
  padding: ${({theme:r})=>r.spacing[2]};
  padding-bottom: 1.1rem;
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size.sm};
  line-height: 1.35;
  /* Un mensaje largo sin espacios no debe estirar la burbuja. */
  overflow-wrap: anywhere;

  &[data-propio='true'] {
    background: ${({theme:r})=>r.color.brand};
    color: ${({theme:r})=>r.color.onPrimary};
  }
`,_=i.span`
  position: absolute;
  right: ${({theme:r})=>r.spacing[2]};
  bottom: 0.3rem;
  font-size: 0.625rem;
  opacity: 0.7;
`,q=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};

  > input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.75rem;
    padding: 0 ${({theme:r})=>r.spacing[3]};
    border-radius: ${({theme:r})=>r.radius.full};
    border: 1px solid ${({theme:r})=>r.color.border};
    background: ${({theme:r})=>r.color.surfaceMuted};
    color: ${({theme:r})=>r.color.text};
    font-family: ${({theme:r})=>r.typography.fontFamily.body};
    font-size: ${({theme:r})=>r.typography.size.sm};

    &:focus {
      outline: none;
      border-color: ${({theme:r})=>r.color.primary};
    }
  }
`,H=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.brand};
  color: ${({theme:r})=>r.color.onPrimary};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,N=6e3;function Y({open:r,pedidoId:o,codigo:u,cliente:b,onClose:n}){const[c,j]=t.useState([]),[p,v]=t.useState(""),[m,d]=t.useState(null),[f,g]=t.useState(!1),h=t.useRef(null),s=t.useCallback(async()=>{if(o)try{const e=await y.mensajes(o);j(e.mensajes),v(e.yo),d(null)}catch{d("No pudimos cargar la conversación.")}},[o]);if(t.useEffect(()=>{if(!r||!o)return;s();const e=window.setInterval(()=>void s(),N);return()=>window.clearInterval(e)},[s,r,o]),t.useEffect(()=>{const e=h.current;e&&(e.scrollTop=e.scrollHeight)},[c]),t.useEffect(()=>{if(!r)return;const e=l=>{l.key==="Escape"&&n()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n,r]),!r||!o)return null;const $=async e=>{e.preventDefault();const l=e.currentTarget,x=String(new FormData(l).get("texto")??"").trim();if(!(!x||f)){g(!0);try{await y.enviarMensaje(o,x),l.reset(),await s()}catch{d("No pudimos enviar el mensaje.")}finally{g(!1)}}},C=e=>new Date(e.replace(" ","T")+"Z").toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"});return a.jsx(P,{onClick:n,role:"presentation",children:a.jsxs(z,{role:"dialog","aria-modal":"true","aria-label":`Chat del pedido ${u}`,onClick:e=>e.stopPropagation(),children:[a.jsxs(D,{children:[a.jsxs("div",{children:[a.jsx(w,{children:b}),a.jsxs(E,{children:["Pedido ",u]})]}),a.jsx(T,{type:"button",onClick:n,"aria-label":"Cerrar",children:a.jsx(k,{size:18,"aria-hidden":"true"})})]}),m?a.jsx(S,{role:"alert","data-tono":"error",children:m}):null,a.jsxs(R,{ref:h,children:[c.length===0?a.jsx(M,{children:"Todavía no hay mensajes. Escribile al cliente."}):null,c.map(e=>a.jsx(F,{"data-propio":e.autor_id===p,children:a.jsxs(L,{"data-propio":e.autor_id===p,children:[e.texto,a.jsx(_,{children:C(e.creado_en)})]})},e.id))]}),a.jsx("form",{onSubmit:$,children:a.jsxs(q,{children:[a.jsx("input",{name:"texto",placeholder:"Escribí un mensaje",autoComplete:"off"}),a.jsx(H,{type:"submit",disabled:f,"aria-label":"Enviar",children:a.jsx(A,{size:16,"aria-hidden":"true"})})]})})]})})}export{Y as C};
