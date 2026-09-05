import{a8 as p,q as r,j as i,M as h,C as s,a as t,A as u,ap as d,V as c,f as n,L as g,am as j,ao as m,ak as x,G as f,a3 as y,aq as b,af as $}from"./index-BsNwJpnQ.js";import{S as a,a as o}from"./SettingsList-C5LIoyTY.js";import{P as S}from"./phone-DbVmYNpc.js";import{S as w}from"./shield-check-qUy0LLUM.js";import"./react-DINHX3pJ.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=p("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),v=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,P=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,z=r.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,C=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,M=r.span`
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
`,l=x.find(e=>e.primary)??x[0];function N(){return i.jsxs(h,{showSearch:!1,children:[i.jsx(s,{children:i.jsx(t,{children:i.jsxs(v,{children:[i.jsx(u,{$size:"3.75rem",$tone:"blue",children:i.jsx(d,{size:26,"aria-hidden":"true"})}),i.jsxs(P,{children:[i.jsx(z,{children:"Vecino de La Francia"}),i.jsx(C,{children:"cuenta@lafranciago.com"}),i.jsx(M,{children:"Cliente"})]})]})})}),i.jsx(s,{children:i.jsx(t,{children:i.jsxs(c,{children:[i.jsx(n,{title:"Mi actividad"}),i.jsxs(a,{children:[i.jsx(o,{icon:g,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),i.jsx(o,{icon:j,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),i.jsx(o,{icon:m,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),i.jsx(s,{children:i.jsx(t,{children:i.jsxs(c,{children:[i.jsx(n,{title:"Mis datos"}),i.jsxs(a,{children:[i.jsx(o,{icon:d,title:"Nombre visible",subtitle:"Vecino de La Francia"}),i.jsx(o,{icon:f,title:"Tus direcciones",subtitle:(l==null?void 0:l.address)??"Sin direcciones guardadas"}),i.jsx(o,{icon:S,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),i.jsx(o,{icon:w,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),i.jsx(s,{children:i.jsx(t,{children:i.jsxs(c,{children:[i.jsx(n,{title:"Sumate"}),i.jsxs(a,{children:[i.jsx(o,{icon:y,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),i.jsx(o,{icon:b,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),i.jsx(o,{icon:$,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),i.jsx(s,{children:i.jsx(t,{children:i.jsx(a,{children:i.jsx(o,{icon:k,title:"Cerrar sesión",tone:"danger"})})})})]})}export{N as CustomerAccountScreen};
