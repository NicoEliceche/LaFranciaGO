import{a8 as S,q as t,ap as k,j as o,M as P,C as l,a as c,A as w,aq as A,ar as m,X as C,U as p,d as f,K as z,am as R,ao as M,aj as j,D as L,a3 as F,as as I,af as E}from"./index-U-wdHHrK.js";import{r as b}from"./react-B1kPYQQd.js";import{S as u,a as r}from"./SettingsList-CQGL94ht.js";import{I as N,v as T,p as U}from"./mediaService-D2_VAu2k.js";import{C as q}from"./camera-BACIeZTg.js";import{P as B}from"./phone-De7Y2D0k.js";import{S as D}from"./shield-check-BOWF6chM.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=S("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),O=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,V=t.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,G=t.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,K=t.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Q=t.span`
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
`,X=t.div`
  position: relative;
  flex: 0 0 auto;
`,_=t.button`
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
`,J=t.span`
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
`,W=t.button`
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
`,Y=t.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,h=j.find(e=>e.primary)??j[0];function ae(){const{photo:e,setPhoto:y,clearPhoto:$}=k(),g=b.useRef(null),[x,s]=b.useState(null),v=async i=>{const a=T(i);if(a){s(a);return}s(null);try{const n=await U(i),d=new FileReader;d.onload=()=>y(String(d.result)),d.onerror=()=>s("No pudimos leer la imagen. Probá con otra."),d.readAsDataURL(n.blob),URL.revokeObjectURL(n.previewUrl)}catch{s("No pudimos procesar la imagen. Probá con otra.")}};return o.jsxs(P,{showSearch:!1,children:[o.jsx(l,{children:o.jsx(c,{children:o.jsxs(O,{children:[o.jsxs(X,{children:[o.jsxs(_,{type:"button",onClick:()=>{var i;return(i=g.current)==null?void 0:i.click()},"aria-label":e?"Cambiar la foto de perfil":"Subir una foto de perfil",children:[o.jsx(w,{$size:"3.75rem",$tone:"blue",children:e?o.jsx(A,{src:e,alt:""}):o.jsx(m,{size:26,"aria-hidden":"true"})}),o.jsx(J,{"aria-hidden":"true",children:o.jsx(q,{size:13})})]}),e?o.jsx(W,{type:"button",onClick:()=>{$(),s(null)},"aria-label":"Quitar la foto de perfil",children:o.jsx(C,{size:13,"aria-hidden":"true"})}):null,o.jsx("input",{ref:g,type:"file",accept:N,hidden:!0,onChange:i=>{var n;const a=(n=i.target.files)==null?void 0:n[0];a&&v(a),i.target.value=""}})]}),o.jsxs(V,{children:[o.jsx(G,{children:"Vecino de La Francia"}),o.jsx(K,{children:"cuenta@lafranciago.com"}),o.jsx(Q,{children:"Cliente"}),x?o.jsx(Y,{role:"status",children:x}):null]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(p,{children:[o.jsx(f,{title:"Mi actividad"}),o.jsxs(u,{children:[o.jsx(r,{icon:z,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),o.jsx(r,{icon:R,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),o.jsx(r,{icon:M,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(p,{children:[o.jsx(f,{title:"Mis datos"}),o.jsxs(u,{children:[o.jsx(r,{icon:m,title:"Nombre visible",subtitle:"Vecino de La Francia"}),o.jsx(r,{icon:L,title:"Tus direcciones",subtitle:(h==null?void 0:h.address)??"Sin direcciones guardadas"}),o.jsx(r,{icon:B,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),o.jsx(r,{icon:D,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(p,{children:[o.jsx(f,{title:"Sumate"}),o.jsxs(u,{children:[o.jsx(r,{icon:F,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),o.jsx(r,{icon:I,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),o.jsx(r,{icon:E,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsx(u,{children:o.jsx(r,{icon:H,title:"Cerrar sesión",tone:"danger"})})})})]})}export{ae as CustomerAccountScreen};
