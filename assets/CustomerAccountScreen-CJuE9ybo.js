import{aC as z,aD as M,j as o,M as E,C as l,S as c,V as F,aE as L,p as g,q as f,aF as j,aG as I}from"./index-BOa_sN7e.js";import{r as y}from"./react-6hK8W6IX.js";import{S as p,a as r}from"./SettingsList-CwTfAsD0.js";import{I as T,v as N,p as U}from"./mediaService-D2_VAu2k.js";import{q as t}from"./estilos-DzHAJWDP.js";import{U as $,ac as B,X as D,h as q,j as V,B as G,M as H,ag as O,Y as Q,i as X,T as Y,a as _,L as J}from"./iconos-C-3VosUP.js";const K=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,W=t.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Z=t.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,ee=t.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oe=t.span`
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
`,re=t.div`
  position: relative;
  flex: 0 0 auto;
`,te=t.button`
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
`,ie=t.span`
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
`,se=t.button`
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
`,ae=t.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,m=j.find(e=>e.primary)??j[0];function he(){const{usuario:e,conectado:v,salir:S}=z(),{photo:d,setPhoto:C,clearPhoto:P}=M(),x=y.useRef(null),[b,s]=y.useState(null),h=(e==null?void 0:e.roles)??[],k=h.includes("comercio"),w=h.includes("delivery"),A=h.includes("fletero"),R=async i=>{const a=N(i);if(a){s(a);return}s(null);try{const n=await U(i),u=new FileReader;u.onload=()=>C(String(u.result)),u.onerror=()=>s("No pudimos leer la imagen. Probá con otra."),u.readAsDataURL(n.blob),URL.revokeObjectURL(n.previewUrl)}catch{s("No pudimos procesar la imagen. Probá con otra.")}};return o.jsxs(E,{showSearch:!1,children:[o.jsx(l,{children:o.jsx(c,{children:o.jsxs(K,{children:[o.jsxs(re,{children:[o.jsxs(te,{type:"button",onClick:()=>{var i;return(i=x.current)==null?void 0:i.click()},"aria-label":d?"Cambiar la foto de perfil":"Subir una foto de perfil",children:[o.jsx(F,{$size:"3.75rem",$tone:"blue",children:d?o.jsx(L,{src:d,alt:""}):o.jsx($,{size:26,"aria-hidden":"true"})}),o.jsx(ie,{"aria-hidden":"true",children:o.jsx(B,{size:13})})]}),d?o.jsx(se,{type:"button",onClick:()=>{P(),s(null)},"aria-label":"Quitar la foto de perfil",children:o.jsx(D,{size:13,"aria-hidden":"true"})}):null,o.jsx("input",{ref:x,type:"file",accept:T,hidden:!0,onChange:i=>{var n;const a=(n=i.target.files)==null?void 0:n[0];a&&R(a),i.target.value=""}})]}),o.jsxs(W,{children:[o.jsx(Z,{children:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(ee,{children:(e==null?void 0:e.email)??"Entrá para guardar tus pedidos"}),o.jsx(oe,{children:"Cliente"}),b?o.jsx(ae,{role:"status",children:b}):null]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(g,{children:[o.jsx(f,{title:"Mi actividad"}),o.jsxs(p,{children:[o.jsx(r,{icon:q,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),o.jsx(r,{icon:V,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),o.jsx(r,{icon:G,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(g,{children:[o.jsx(f,{title:"Mis datos"}),o.jsxs(p,{children:[o.jsx(r,{icon:$,title:"Nombre visible",subtitle:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(r,{icon:H,title:"Tus direcciones",subtitle:(m==null?void 0:m.address)??"Sin direcciones guardadas"}),o.jsx(r,{icon:O,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),o.jsx(r,{icon:Q,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(g,{children:[o.jsx(f,{title:"Sumate"}),o.jsxs(p,{children:[k?null:o.jsx(r,{icon:X,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),w?null:o.jsx(r,{icon:I,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),A?null:o.jsx(r,{icon:Y,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsx(p,{children:v?o.jsx(r,{icon:_,title:"Cerrar sesión",tone:"danger",onClick:()=>{S()}}):o.jsx(r,{icon:J,title:"Entrar o crear cuenta",subtitle:"Para guardar direcciones y seguir pedidos",to:"/ingresar"})})})})]})}export{he as CustomerAccountScreen};
