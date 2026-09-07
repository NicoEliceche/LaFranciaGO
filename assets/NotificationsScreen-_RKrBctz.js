import{c as u,q as a,aE as f,j as o,M as n,a8 as c,S as d,k as x,l as y,o as m,P as b,aF as p,aG as $,E as j}from"./index-D4EGV2Yc.js";import{r as S,L as w}from"./react-D_B_6qYb.js";import{C as k}from"./credit-card-DOXOvCDS.js";import{M as N}from"./message-square-CHkOh0Gq.js";import{B as v}from"./badge-percent-CN6pHILL.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=u("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),L=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,g=a.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-unread='true'] {
    border-color: rgba(0, 71, 231, 0.24);
  }
`,z=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,E=a.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
  flex: 1 1 auto;
`,M=a.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,T=a.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,q=a.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,D=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,F=a.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  right: ${({theme:e})=>e.spacing[2]};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.danger};
`;a.button`
  justify-self: end;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
  }
`;const I={pedido:b,envio:m,oferta:v,postulacion:C,chat:N,pago:k};function A(e){const r=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(r.getTime()))return"";const t=Math.floor((Date.now()-r.getTime())/864e5);return t===0?r.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}):t===1?"Ayer":r.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})}function O(){const{notificaciones:e,sinLeer:r,cargadas:t}=f();return S.useEffect(()=>{r>0&&$()},[r]),e.length===0?t?o.jsx(n,{showSearch:!1,children:o.jsx(c,{children:o.jsx(d,{children:o.jsx(j,{icon:p,title:"No tenés notificaciones",text:"Acá vas a ver el estado de tus pedidos y las novedades de los comercios.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):o.jsx(n,{showSearch:!1,children:o.jsx(c,{children:o.jsx(d,{})})}):o.jsx(n,{showSearch:!1,children:o.jsx(c,{children:o.jsx(d,{children:o.jsxs(x,{children:[o.jsx(y,{title:"Notificaciones",chip:r>0?`${r} nuevas`:void 0,subtitle:"Lo que pasó con tus pedidos y tu cuenta."}),o.jsx(L,{children:e.map(i=>{const h=I[i.tipo]??p,s=!i.leida_en,l=o.jsxs(o.Fragment,{children:[o.jsx(z,{children:o.jsx(h,{size:18,"aria-hidden":"true"})}),o.jsxs(E,{children:[o.jsxs(M,{children:[o.jsx(T,{children:i.titulo}),o.jsx(q,{children:A(i.creado_en)})]}),i.texto?o.jsx(D,{children:i.texto}):null]}),s?o.jsx(F,{"aria-label":"Sin leer"}):null]});return i.enlace?o.jsx(g,{as:w,to:i.enlace,"data-unread":s,children:l},i.id):o.jsx(g,{"data-unread":s,children:l},i.id)})})]})})})})}export{O as NotificationsScreen};
