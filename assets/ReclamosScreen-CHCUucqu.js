import{j as e,af as F,ag as N,ah as O,c as P,ai as B,h as I,bn as m,M as H,C as V,S as X,p as A,q as Q,e as Y,E as Z,a as G,b as J}from"./index-Jd4-4a9e.js";import{r}from"./react-6hK8W6IX.js";import{E as K,a as v,m as U,C as W,h as ee,i as ae,g as se,n as te,l as re}from"./ChatPedidoDialogStyled-MvteS_Yt.js";import{R as oe,b as ne,a as ie}from"./ResenaDialogStyled-JI9jT6su.js";import{X as le,Y as ce,aF as de,aS as ue,a5 as he}from"./iconos-C-3VosUP.js";import{q as f}from"./estilos-DzHAJWDP.js";function pe({open:a,codigo:c,onCerrar:n,onResolver:j}){const[x,g]=r.useState(""),[d,u]=r.useState(!1);if(r.useEffect(()=>{a&&g("")},[a]),r.useEffect(()=>{if(!a)return;const i=l=>{l.key==="Escape"&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[n,a]),!a)return null;const o=async i=>{i.preventDefault();const l=x.trim();if(!(!l||d)){u(!0);try{await j(l),n()}finally{u(!1)}}};return e.jsx(F,{role:"dialog","aria-modal":"true","aria-label":"Resolver el reclamo",children:e.jsxs(N,{children:[e.jsxs(O,{children:[e.jsxs(P,{children:["Resolver ",c]}),e.jsx(B,{type:"button",onClick:n,"aria-label":"Cerrar",children:e.jsx(le,{size:18,"aria-hidden":"true"})})]}),e.jsxs("form",{onSubmit:o,children:[e.jsxs(oe,{children:[e.jsx("span",{children:"¿Qué le contestamos?"}),e.jsx(ne,{value:x,maxLength:500,autoFocus:!0,placeholder:"Le devolvemos el importe del producto que faltaba.",onChange:i=>g(i.target.value)}),e.jsx(ie,{children:"Esto le llega al cliente al chat de su pedido, con tu nombre."})]}),e.jsxs(K,{children:[e.jsx(v,{type:"button","data-tono":"suave",onClick:n,disabled:d,children:"Volver"}),e.jsx(v,{type:"submit",disabled:d||x.trim()==="",children:d?"Enviando…":"Resolver y avisarle"})]})]})]})})}const fe=f.div`
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
`,xe=f.span`
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
`,ge=f.div`
  display: grid;
  gap: 0.15rem;
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  overflow-wrap: anywhere;
`,me=f.p`
  margin: 0;
  padding: ${({theme:a})=>a.spacing[2]};
  border-radius: ${({theme:a})=>a.radius.md};
  border-left: 3px solid ${({theme:a})=>a.color.success};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.text};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.45;
  overflow-wrap: anywhere;
`,ve=f.span`
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.625rem;
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  opacity: 0.75;
`,je=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:a})=>a.spacing[2]};

  > * {
    flex: 1 1 9rem;
  }
`,ye=15e3,be={abierto:"Sin atender",en_revision:"En revisión",resuelto:"Resuelto",cerrado:"Cerrado"},we={admin:"Administración",comercio:"El comercio",repartidor:"Quien repartió"};function T(a){const c=new Date(a.replace(" ","T")+"Z");return Number.isNaN(c.getTime())?"":`${c.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${c.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function Ae(){const[a,c]=r.useState([]),[n,j]=r.useState(!1),[x,g]=r.useState(!0),[d,u]=r.useState(null),[o,i]=r.useState(null),[l,y]=r.useState([]),[z,D]=r.useState(""),[b,S]=r.useState(""),[E,C]=r.useState(!1),[p,R]=r.useState(null),$=r.useRef(null),w=r.useCallback(async()=>{if(!I()){g(!1);return}try{const{reclamos:s,esAdmin:t}=await m.listar();c(s),j(t),u(null)}catch{u("No pudimos cargar los reclamos.")}finally{g(!1)}},[]);r.useEffect(()=>{w()},[w]),r.useEffect(()=>{if(!o){y([]);return}let s=!0;const t=async()=>{try{const{mensajes:_,yo:M}=await m.mensajes(o);s&&(y(_),D(M))}catch{}};t();const h=window.setInterval(()=>void t(),ye);return()=>{s=!1,window.clearInterval(h)}},[o]),r.useEffect(()=>{var s;(s=$.current)==null||s.scrollIntoView({block:"nearest"})},[l]);const L=async s=>{s.preventDefault();const t=b.trim();if(!(!t||!o||E)){C(!0);try{await m.escribir(o,t),S("");const{mensajes:h}=await m.mensajes(o);y(h)}catch{u("No pudimos enviar el mensaje.")}finally{C(!1)}}},q=async s=>{if(p)try{await m.resolver(p.id,s),await w()}catch{u("No pudimos resolver el reclamo.")}},k=a.filter(s=>s.estado==="abierto").length;return e.jsxs(H,{showSearch:!1,children:[e.jsx(V,{children:e.jsx(X,{children:e.jsxs(A,{children:[e.jsx(Q,{title:"Reclamos",chip:k>0?`${k} sin atender`:void 0,subtitle:n?"Todos los reclamos, los sin atender primero.":"Los reclamos de tus pedidos."}),d?e.jsx(Y,{role:"alert","data-tono":"error",children:d}):null,!x&&a.length===0?e.jsx(Z,{icon:ce,title:"No hay reclamos",text:"Cuando alguien reporte un problema con un pedido lo vas a ver acá.",dashed:!0}):null,a.map(s=>e.jsx(G,{children:e.jsx(J,{children:e.jsxs(A,{children:[e.jsxs(fe,{children:[e.jsxs("strong",{children:[s.codigo," · ",s.comercio]}),e.jsx(xe,{"data-estado":s.estado,children:be[s.estado]??s.estado})]}),e.jsxs(ge,{children:[e.jsx("span",{children:s.motivo}),s.detalle?e.jsx("span",{children:s.detalle}):null,e.jsxs("span",{children:["Lo abrió ",s.abrio," · ",T(s.creado_en)]}),e.jsxs("span",{children:["Entrega en ",s.direccion_texto,s.repartidor?` · lo llevó ${s.repartidor}`:""]})]}),s.resolucion?e.jsxs(me,{children:[e.jsx("strong",{children:"Se resolvió así:"})," ",s.resolucion]}):null,e.jsxs(je,{children:[e.jsxs(v,{type:"button","data-tono":"suave",onClick:()=>i(t=>t===s.id?null:s.id),children:[e.jsx(de,{size:14,"aria-hidden":"true"}),o===s.id?"Cerrar el chat":"Abrir chat entre las partes"]}),n&&s.estado!=="resuelto"&&s.estado!=="cerrado"?e.jsxs(v,{type:"button",onClick:()=>R(s),children:[e.jsx(ue,{size:14,"aria-hidden":"true"}),"Resolver"]}):null]}),o===s.id?e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[l.length===0?e.jsx(W,{children:"Todavía no habló nadie. Contá qué pasó de tu lado."}):l.map(t=>{const h=t.autor_id===z;return e.jsx(ee,{"data-propio":h,children:e.jsxs(ae,{"data-propio":h,children:[h?null:e.jsxs(ve,{children:[t.autor," ·"," ",we[t.rol]??t.rol]}),t.texto,e.jsx(se,{children:T(t.creado_en)})]})},t.id)}),e.jsx("div",{ref:$})]}),e.jsx("form",{onSubmit:L,children:e.jsxs(te,{children:[e.jsx("input",{value:b,maxLength:600,placeholder:"Escribí lo que pasó…","aria-label":"Mensaje del reclamo",onChange:t=>S(t.target.value)}),e.jsx(re,{type:"submit",disabled:E||b.trim()==="","aria-label":"Enviar",children:e.jsx(he,{size:16,"aria-hidden":"true"})})]})})]}):null]})})},s.id))]})})}),e.jsx(pe,{open:p!==null,codigo:(p==null?void 0:p.codigo)??"",onCerrar:()=>R(null),onResolver:q})]})}export{Ae as ReclamosScreen};
