import{q as t,u as w,aI as C,j as o,M as A,b as l,S as c,a1 as R,aJ as z,U as b,X as M,l as f,m as h,P as E,aE as L,aG as I,aK as j,r as F,p as T,aL as N,T as U,aM as B}from"./index-BYdsqWK_.js";import{r as y}from"./react-D_B_6qYb.js";import{S as p,a as r}from"./SettingsList-Pdi_K4bg.js";import{I as q,v as D,p as G}from"./mediaService-D2_VAu2k.js";import{C as H}from"./camera-DMbzfdrc.js";import{P as O}from"./phone-VdhNRmbK.js";import{S as V}from"./shield-check-DYFD4-YY.js";import{L as J}from"./log-in-BfgwMFIN.js";const K=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Q=t.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,X=t.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,_=t.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,W=t.span`
  justify-self: start;
  margin-top: ${({theme:e})=>e.spacing[1]};
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Y=t.div`
  position: relative;
  flex: 0 0 auto;
`,Z=t.button`
  position: relative;
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  border-radius: ${({theme:e})=>e.radius.full};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 3px;
  }
`,ee=t.span`
  position: absolute;
  right: -0.15rem;
  bottom: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.surface};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,oe=t.button`
  position: absolute;
  right: -0.15rem;
  top: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.surface};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease, background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.danger};
    color: #ffffff;
  }
`,re=t.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,m=j.find(e=>e.primary)??j[0];function ue(){const{usuario:e,conectado:$,salir:v}=w(),{photo:d,setPhoto:S,clearPhoto:P}=C(),g=y.useRef(null),[x,s]=y.useState(null),k=async i=>{const a=D(i);if(a){s(a);return}s(null);try{const n=await G(i),u=new FileReader;u.onload=()=>S(String(u.result)),u.onerror=()=>s("No pudimos leer la imagen. Probá con otra."),u.readAsDataURL(n.blob),URL.revokeObjectURL(n.previewUrl)}catch{s("No pudimos procesar la imagen. Probá con otra.")}};return o.jsxs(A,{showSearch:!1,children:[o.jsx(l,{children:o.jsx(c,{children:o.jsxs(K,{children:[o.jsxs(Y,{children:[o.jsxs(Z,{type:"button",onClick:()=>{var i;return(i=g.current)==null?void 0:i.click()},"aria-label":d?"Cambiar la foto de perfil":"Subir una foto de perfil",children:[o.jsx(R,{$size:"3.75rem",$tone:"blue",children:d?o.jsx(z,{src:d,alt:""}):o.jsx(b,{size:26,"aria-hidden":"true"})}),o.jsx(ee,{"aria-hidden":"true",children:o.jsx(H,{size:13})})]}),d?o.jsx(oe,{type:"button",onClick:()=>{P(),s(null)},"aria-label":"Quitar la foto de perfil",children:o.jsx(M,{size:13,"aria-hidden":"true"})}):null,o.jsx("input",{ref:g,type:"file",accept:q,hidden:!0,onChange:i=>{var n;const a=(n=i.target.files)==null?void 0:n[0];a&&k(a),i.target.value=""}})]}),o.jsxs(Q,{children:[o.jsx(X,{children:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(_,{children:(e==null?void 0:e.email)??"Entrá para guardar tus pedidos"}),o.jsx(W,{children:"Cliente"}),x?o.jsx(re,{role:"status",children:x}):null]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(f,{children:[o.jsx(h,{title:"Mi actividad"}),o.jsxs(p,{children:[o.jsx(r,{icon:E,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),o.jsx(r,{icon:L,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),o.jsx(r,{icon:I,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(f,{children:[o.jsx(h,{title:"Mis datos"}),o.jsxs(p,{children:[o.jsx(r,{icon:b,title:"Nombre visible",subtitle:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(r,{icon:F,title:"Tus direcciones",subtitle:(m==null?void 0:m.address)??"Sin direcciones guardadas"}),o.jsx(r,{icon:O,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),o.jsx(r,{icon:V,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(f,{children:[o.jsx(h,{title:"Sumate"}),o.jsxs(p,{children:[o.jsx(r,{icon:T,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),o.jsx(r,{icon:N,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),o.jsx(r,{icon:U,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsx(p,{children:$?o.jsx(r,{icon:B,title:"Cerrar sesión",tone:"danger",onClick:()=>{v()}}):o.jsx(r,{icon:J,title:"Entrar o crear cuenta",subtitle:"Para guardar direcciones y seguir pedidos",to:"/ingresar"})})})})]})}export{ue as CustomerAccountScreen};
