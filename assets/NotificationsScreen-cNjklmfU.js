import{aA as u,j as o,M as n,a0 as c,S as d,p as f,q as x,aB as m,E as y}from"./index-Jd4-4a9e.js";import{r as $,L as b}from"./react-6hK8W6IX.js";import{q as a}from"./estilos-DzHAJWDP.js";import{a0 as j,$ as S,ae as w,af as N,M as v,h as C,B as p}from"./iconos-C-3VosUP.js";const k=a.div`
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
`,L=a.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
  flex: 1 1 auto;
`,E=a.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,M=a.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,T=a.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,q=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,A=a.span`
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
`;const D={pedido:C,envio:v,oferta:N,postulacion:w,chat:S,pago:j};function B(e){const r=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(r.getTime()))return"";const t=Math.floor((Date.now()-r.getTime())/864e5);return t===0?r.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}):t===1?"Ayer":r.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})}function O(){const{notificaciones:e,sinLeer:r,cargadas:t}=u();return $.useEffect(()=>{r>0&&m()},[r]),e.length===0?t?o.jsx(n,{showSearch:!1,children:o.jsx(c,{children:o.jsx(d,{children:o.jsx(y,{icon:p,title:"No tenés notificaciones",text:"Acá vas a ver el estado de tus pedidos y las novedades de los comercios.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):o.jsx(n,{showSearch:!1,children:o.jsx(c,{children:o.jsx(d,{})})}):o.jsx(n,{showSearch:!1,children:o.jsx(c,{children:o.jsx(d,{children:o.jsxs(f,{children:[o.jsx(x,{title:"Notificaciones",chip:r>0?`${r} nuevas`:void 0,subtitle:"Lo que pasó con tus pedidos y tu cuenta."}),o.jsx(k,{children:e.map(i=>{const h=D[i.tipo]??p,s=!i.leida_en,l=o.jsxs(o.Fragment,{children:[o.jsx(z,{children:o.jsx(h,{size:18,"aria-hidden":"true"})}),o.jsxs(L,{children:[o.jsxs(E,{children:[o.jsx(M,{children:i.titulo}),o.jsx(T,{children:B(i.creado_en)})]}),i.texto?o.jsx(q,{children:i.texto}):null]}),s?o.jsx(A,{"aria-label":"Sin leer"}):null]});return i.enlace?o.jsx(g,{as:b,to:i.enlace,"data-unread":s,children:l},i.id):o.jsx(g,{"data-unread":s,children:l},i.id)})})]})})})})}export{O as NotificationsScreen};
