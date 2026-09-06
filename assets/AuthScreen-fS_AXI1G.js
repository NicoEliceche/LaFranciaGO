import{j as r,q as a,u as k,M as A,C as M,S as E,a as q,b as G,c as B,d as L,h as l,U as P,i as H}from"./index-DlPjbtwt.js";import{f as T,r as d,u as I}from"./react-D_B_6qYb.js";import{F as $,a as c,b as u,c as h,d as N}from"./formStyles-CA-jAqwX.js";import{M as Z}from"./mail-Dadxlnbd.js";import{S as R}from"./shield-check-C7JJ9OcF.js";import{L as U}from"./log-in-Br-gVunK.js";function D({size:e=18}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.35 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.96 10.71a5.41 5.41 0 0 1 0-3.42V4.96H.96a9 9 0 0 0 0 8.08l3-2.33Z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.65 3.58 9 3.58Z"})]})}const V=a.div`
  width: 100%;
  max-width: 26rem;
  margin-inline: auto;
`,Y=a.button`
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
`,J=a.div`
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
`,K=a.button`
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
`,w=a.p`
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
`,O=a.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Q=a.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  text-decoration: underline;
`;function ae(){const[e]=T(),[p,C]=d.useState(e.get("modo")==="registro"?"registro":"entrar"),[m,t]=d.useState(null),[n,g]=d.useState(!1),{entrar:v,registrar:S}=k(),f=I(),x=e.get("destino")||"/mi-cuenta",z=async s=>{if(s.preventDefault(),n)return;const i=new FormData(s.currentTarget),b=String(i.get("email")??"").trim(),y=String(i.get("password")??"");t(null),g(!0);try{p==="registro"?await S({email:b,password:y,nombre:String(i.get("nombre")??"").trim()}):await v(b,y),f(x,{replace:!0})}catch(j){t(j instanceof Error?j.message:"No pudimos completar el ingreso.")}finally{g(!1)}},F=async()=>{t(null);try{await H(),f(x,{replace:!0})}catch(s){t(s instanceof Error?s.message:"No pudimos entrar con Google.")}},o=p==="registro";return r.jsx(A,{showSearch:!1,children:r.jsx(M,{children:r.jsx(E,{children:r.jsx(V,{children:r.jsx(q,{children:r.jsx(G,{children:r.jsxs($,{children:[r.jsxs("div",{children:[r.jsx(B,{children:o?"Creá tu cuenta":"Entrá a tu cuenta"}),r.jsx(L,{children:o?"Para guardar tus direcciones y seguir tus pedidos.":"Con tu cuenta ves tus pedidos y direcciones guardadas."})]}),l()?null:r.jsx(w,{role:"status","data-tono":"aviso",children:"La app está funcionando con datos de ejemplo. Para crear cuentas hace falta conectar el servidor."}),r.jsxs(Y,{type:"button",onClick:F,disabled:!l(),children:[r.jsx(D,{size:18}),"Continuar con Google"]}),r.jsx(J,{children:r.jsx("span",{children:"o con tu email"})}),r.jsx("form",{onSubmit:z,children:r.jsxs($,{children:[o?r.jsxs(c,{htmlFor:"auth-nombre",children:[r.jsxs(u,{children:[r.jsx(P,{size:16,"aria-hidden":"true"}),"Nombre"]}),r.jsx(h,{id:"auth-nombre",name:"nombre",type:"text",autoComplete:"name",placeholder:"Cómo te llamás",required:!0})]}):null,r.jsxs(c,{htmlFor:"auth-email",children:[r.jsxs(u,{children:[r.jsx(Z,{size:16,"aria-hidden":"true"}),"Email"]}),r.jsx(h,{id:"auth-email",name:"email",type:"email",autoComplete:"email",placeholder:"vos@email.com",required:!0})]}),r.jsxs(c,{htmlFor:"auth-password",children:[r.jsxs(u,{children:[r.jsx(R,{size:16,"aria-hidden":"true"}),"Contraseña"]}),r.jsx(h,{id:"auth-password",name:"password",type:"password",autoComplete:o?"new-password":"current-password",placeholder:o?"Al menos 8 caracteres":"Tu contraseña",minLength:8,required:!0}),o?r.jsx(N,{children:"Mejor una frase larga que sepas de memoria, y que no incluya tu nombre ni tu email."}):null]}),m?r.jsx(w,{role:"alert","data-tono":"error",children:m}):null,r.jsxs(K,{type:"submit",disabled:n||!l(),children:[r.jsx(U,{size:18,"aria-hidden":"true"}),n?"Un momento…":o?"Crear cuenta":"Entrar"]})]})}),r.jsxs(O,{children:[o?"¿Ya tenés cuenta?":"¿Todavía no tenés cuenta?",r.jsx(Q,{type:"button",onClick:()=>{C(o?"entrar":"registro"),t(null)},children:o?"Entrar":"Crear una"})]})]})})})})})})})}export{ae as AuthScreen};
