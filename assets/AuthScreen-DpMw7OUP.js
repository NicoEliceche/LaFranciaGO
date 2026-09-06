import{c as H,j as r,q as a,u as A,C as M,a as P,X as N,M as R,b as U,S as Z,d as O,e as V,h as v,U as X,i as Y}from"./index-BVcB4nQ2.js";import{r as s,u as L,f as _}from"./react-D_B_6qYb.js";import{F as C,a as h,b as m,c as J,d as q,e as f}from"./formStyles-cMdhrx1f.js";import{M as I}from"./mail-Zs8fpIYx.js";import{S as D}from"./shield-check-BbRK6uQA.js";import{L as K}from"./log-in-Ud0jCyLv.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=H("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);function W({size:e=18}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.35 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.96 10.71a5.41 5.41 0 0 1 0-3.42V4.96H.96a9 9 0 0 0 0 8.08l3-2.33Z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.65 3.58 9 3.58Z"})]})}const ee=a.div`
  width: 100%;
  max-width: 26rem;
  margin-inline: auto;
`,re=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: #ffffff;
  color: #1f1f1f;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: box-shadow 180ms ease;

  &:hover:not(:disabled) {
    box-shadow: ${({theme:e})=>e.shadow.sm};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,oe=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  /* Las líneas se dibujan a los lados del texto con pseudoelementos, sin
     marcado extra que el lector de pantalla tenga que anunciar. */
  &::before,
  &::after {
    content: '';
    flex: 1 1 auto;
    height: 1px;
    background: ${({theme:e})=>e.color.border};
  }
`,T=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
  }

  &:disabled {
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`,S=a.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.md};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;

  &[data-tono='error'] {
    border: 1px solid ${({theme:e})=>e.color.danger};
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-tono='aviso'] {
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.textMuted};
  }
`,ae=a.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,te=a.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  text-decoration: underline;
`,ne=a.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+30};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[3]};
  background: rgba(5, 8, 22, 0.62);
  backdrop-filter: blur(6px);
`,se=a.div`
  width: 100%;
  max-width: 24rem;
  /* En pantallas bajas el modal scrollea en lugar de cortarse. */
  max-height: 90vh;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
`,ie=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
`,le=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease;

  &:hover {
    color: ${({theme:e})=>e.color.text};
  }
`,de=a.button`
  display: block;
  width: 100%;
  padding: ${({theme:e})=>e.spacing[2]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: transparent;
  color: ${({theme:e})=>e.color.textMuted};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.xs};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }
`,B="lafranciago:tipo-cuenta",k=[{id:"comercio",nombre:"Comercio",panel:"/panel/comercio"},{id:"delivery",nombre:"Delivery",panel:"/panel/repartidor"},{id:"fletero",nombre:"Fletero",panel:"/panel/repartidor"}],ce=()=>{try{const e=window.localStorage.getItem(B);return k.some(n=>n.id===e)?e:"comercio"}catch{return"comercio"}};function ue({open:e,onClose:n}){const[c,g]=s.useState("comercio"),[i,l]=s.useState(null),[u,b]=s.useState(!1),{entrarAlPanel:y}=A(),j=L();if(s.useEffect(()=>{e&&(g(ce()),l(null))},[e]),s.useEffect(()=>{if(!e)return;const o=d=>{d.key==="Escape"&&n()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[n,e]),!e)return null;const w=async o=>{if(o.preventDefault(),u)return;const d=new FormData(o.currentTarget);l(null),b(!0);try{await y(String(d.get("email")??"").trim(),String(d.get("password")??""),c);try{window.localStorage.setItem(B,c)}catch{}j(k.find(p=>p.id===c).panel,{replace:!0})}catch(p){l(p instanceof Error?p.message:"No pudimos ingresar.")}finally{b(!1)}};return r.jsx(ne,{onClick:n,role:"presentation",children:r.jsxs(se,{role:"dialog","aria-modal":"true","aria-label":"Ingresar como comercio, delivery o flete",onClick:o=>o.stopPropagation(),children:[r.jsxs(ie,{children:[r.jsxs("div",{children:[r.jsx(M,{children:"Ingresar para trabajar"}),r.jsx(P,{children:"Con la cuenta que te dimos al aprobar tu alta."})]}),r.jsx(le,{type:"button",onClick:n,"aria-label":"Cerrar",children:r.jsx(N,{size:18,"aria-hidden":"true"})})]}),r.jsx("form",{onSubmit:w,children:r.jsxs(C,{children:[r.jsxs(h,{htmlFor:"panel-tipo",children:[r.jsxs(m,{children:[r.jsx(Q,{size:16,"aria-hidden":"true"}),"Tipo de cuenta"]}),r.jsx(J,{id:"panel-tipo",value:c,onChange:o=>g(o.target.value),children:k.map(o=>r.jsx("option",{value:o.id,children:o.nombre},o.id))}),r.jsx(q,{children:"Se recuerda para la próxima vez."})]}),r.jsxs(h,{htmlFor:"panel-email",children:[r.jsxs(m,{children:[r.jsx(I,{size:16,"aria-hidden":"true"}),"Email"]}),r.jsx(f,{id:"panel-email",name:"email",type:"email",autoComplete:"email",placeholder:"tucomercio@email.com",required:!0})]}),r.jsxs(h,{htmlFor:"panel-password",children:[r.jsxs(m,{children:[r.jsx(D,{size:16,"aria-hidden":"true"}),"Contraseña"]}),r.jsx(f,{id:"panel-password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Tu contraseña",required:!0})]}),i?r.jsx(S,{role:"alert","data-tono":"error",children:i}):null,r.jsx(T,{type:"submit",disabled:u,children:u?"Un momento…":"Entrar al panel"})]})})]})})}function be(){const[e]=_(),[n,c]=s.useState(e.get("modo")==="registro"?"registro":"entrar"),[g,i]=s.useState(null),[l,u]=s.useState(!1),[b,y]=s.useState(!1),{entrar:j,registrar:w}=A(),o=L(),d=e.get("destino")||"/mi-cuenta",p=async x=>{if(x.preventDefault(),l)return;const $=new FormData(x.currentTarget),z=String($.get("email")??"").trim(),E=String($.get("password")??"");i(null),u(!0);try{n==="registro"?await w({email:z,password:E,nombre:String($.get("nombre")??"").trim()}):await j(z,E),o(d,{replace:!0})}catch(F){i(F instanceof Error?F.message:"No pudimos completar el ingreso.")}finally{u(!1)}},G=async()=>{i(null);try{await Y(),o(d,{replace:!0})}catch(x){i(x instanceof Error?x.message:"No pudimos entrar con Google.")}},t=n==="registro";return r.jsxs(R,{showSearch:!1,children:[r.jsx(U,{children:r.jsx(Z,{children:r.jsx(ee,{children:r.jsx(O,{children:r.jsx(V,{children:r.jsxs(C,{children:[r.jsxs("div",{children:[r.jsx(M,{children:t?"Creá tu cuenta":"Entrá a tu cuenta"}),r.jsx(P,{children:t?"Para guardar tus direcciones y seguir tus pedidos.":"Con tu cuenta ves tus pedidos y direcciones guardadas."})]}),v()?null:r.jsx(S,{role:"status","data-tono":"aviso",children:"La app está funcionando con datos de ejemplo. Para crear cuentas hace falta conectar el servidor."}),r.jsxs(re,{type:"button",onClick:G,disabled:!v(),children:[r.jsx(W,{size:18}),"Continuar con Google"]}),r.jsx(oe,{children:r.jsx("span",{children:"o con tu email"})}),r.jsx("form",{onSubmit:p,children:r.jsxs(C,{children:[t?r.jsxs(h,{htmlFor:"auth-nombre",children:[r.jsxs(m,{children:[r.jsx(X,{size:16,"aria-hidden":"true"}),"Nombre"]}),r.jsx(f,{id:"auth-nombre",name:"nombre",type:"text",autoComplete:"name",placeholder:"Cómo te llamás",required:!0})]}):null,r.jsxs(h,{htmlFor:"auth-email",children:[r.jsxs(m,{children:[r.jsx(I,{size:16,"aria-hidden":"true"}),"Email"]}),r.jsx(f,{id:"auth-email",name:"email",type:"email",autoComplete:"email",placeholder:"vos@email.com",required:!0})]}),r.jsxs(h,{htmlFor:"auth-password",children:[r.jsxs(m,{children:[r.jsx(D,{size:16,"aria-hidden":"true"}),"Contraseña"]}),r.jsx(f,{id:"auth-password",name:"password",type:"password",autoComplete:t?"new-password":"current-password",placeholder:t?"Al menos 8 caracteres":"Tu contraseña",minLength:8,required:!0}),t?r.jsx(q,{children:"Mejor una frase larga que sepas de memoria, y que no incluya tu nombre ni tu email."}):null]}),g?r.jsx(S,{role:"alert","data-tono":"error",children:g}):null,r.jsxs(T,{type:"submit",disabled:l||!v(),children:[r.jsx(K,{size:18,"aria-hidden":"true"}),l?"Un momento…":t?"Crear cuenta":"Entrar"]})]})}),r.jsx(de,{type:"button",onClick:()=>y(!0),children:"Ingresar como Comercio / Delivery / Flete"}),r.jsxs(ae,{children:[t?"¿Ya tenés cuenta?":"¿Todavía no tenés cuenta?",r.jsx(te,{type:"button",onClick:()=>{c(t?"entrar":"registro"),i(null)},children:t?"Entrar":"Crear una"})]})]})})})})})}),r.jsx(ue,{open:b,onClose:()=>y(!1)})]})}export{be as AuthScreen};
