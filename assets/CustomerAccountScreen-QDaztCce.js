import{c as w,q as t,u as C,aw as A,j as o,M as z,b as c,S as l,L as R,ax as L,U as b,X as M,a5 as h,n as f,_ as E,au as I,av as F,ay as j,R as N,ad as T,az as U,an as B}from"./index-BqcRuPDG.js";import{r as y}from"./react-D_B_6qYb.js";import{S as p,a as r}from"./SettingsList-DzvyYNtp.js";import{I as H,v as O,p as V}from"./mediaService-D2_VAu2k.js";import{C as q}from"./camera-D1Znh0TN.js";import{P as D}from"./phone-CZfd12PM.js";import{S as _}from"./shield-check-C6ntK1bb.js";import{L as G}from"./log-in-Dlm0lTgw.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=w("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),X=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,J=t.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,K=t.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,W=t.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Y=t.span`
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
`,Z=t.div`
  position: relative;
  flex: 0 0 auto;
`,ee=t.button`
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
`,oe=t.span`
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
`,re=t.button`
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
`,te=t.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,g=j.find(e=>e.primary)??j[0];function pe(){const{usuario:e,conectado:$,salir:v}=C(),{photo:d,setPhoto:S,clearPhoto:k}=A(),m=y.useRef(null),[x,s]=y.useState(null),P=async i=>{const a=O(i);if(a){s(a);return}s(null);try{const n=await V(i),u=new FileReader;u.onload=()=>S(String(u.result)),u.onerror=()=>s("No pudimos leer la imagen. Probá con otra."),u.readAsDataURL(n.blob),URL.revokeObjectURL(n.previewUrl)}catch{s("No pudimos procesar la imagen. Probá con otra.")}};return o.jsxs(z,{showSearch:!1,children:[o.jsx(c,{children:o.jsx(l,{children:o.jsxs(X,{children:[o.jsxs(Z,{children:[o.jsxs(ee,{type:"button",onClick:()=>{var i;return(i=m.current)==null?void 0:i.click()},"aria-label":d?"Cambiar la foto de perfil":"Subir una foto de perfil",children:[o.jsx(R,{$size:"3.75rem",$tone:"blue",children:d?o.jsx(L,{src:d,alt:""}):o.jsx(b,{size:26,"aria-hidden":"true"})}),o.jsx(oe,{"aria-hidden":"true",children:o.jsx(q,{size:13})})]}),d?o.jsx(re,{type:"button",onClick:()=>{k(),s(null)},"aria-label":"Quitar la foto de perfil",children:o.jsx(M,{size:13,"aria-hidden":"true"})}):null,o.jsx("input",{ref:m,type:"file",accept:H,hidden:!0,onChange:i=>{var n;const a=(n=i.target.files)==null?void 0:n[0];a&&P(a),i.target.value=""}})]}),o.jsxs(J,{children:[o.jsx(K,{children:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(W,{children:(e==null?void 0:e.email)??"Entrá para guardar tus pedidos"}),o.jsx(Y,{children:"Cliente"}),x?o.jsx(te,{role:"status",children:x}):null]})]})})}),o.jsx(c,{children:o.jsx(l,{children:o.jsxs(h,{children:[o.jsx(f,{title:"Mi actividad"}),o.jsxs(p,{children:[o.jsx(r,{icon:E,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),o.jsx(r,{icon:I,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),o.jsx(r,{icon:F,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),o.jsx(c,{children:o.jsx(l,{children:o.jsxs(h,{children:[o.jsx(f,{title:"Mis datos"}),o.jsxs(p,{children:[o.jsx(r,{icon:b,title:"Nombre visible",subtitle:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(r,{icon:N,title:"Tus direcciones",subtitle:(g==null?void 0:g.address)??"Sin direcciones guardadas"}),o.jsx(r,{icon:D,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),o.jsx(r,{icon:_,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),o.jsx(c,{children:o.jsx(l,{children:o.jsxs(h,{children:[o.jsx(f,{title:"Sumate"}),o.jsxs(p,{children:[o.jsx(r,{icon:T,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),o.jsx(r,{icon:U,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),o.jsx(r,{icon:B,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),o.jsx(c,{children:o.jsx(l,{children:o.jsx(p,{children:$?o.jsx(r,{icon:Q,title:"Cerrar sesión",tone:"danger",onClick:()=>{v()}}):o.jsx(r,{icon:G,title:"Entrar o crear cuenta",subtitle:"Para guardar direcciones y seguir pedidos",to:"/ingresar"})})})})]})}export{pe as CustomerAccountScreen};
