import{q as i,G as c,L as l,a3 as p,j as o,M as t,K as r,a as n,E as u,ao as g,V as h,f}from"./index-BYeDpgFV.js";import{r as x}from"./react-DINHX3pJ.js";import{B as b}from"./badge-percent-Cm7iOSt4.js";const y=i.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,m=i.article`
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
`,$=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,j=i.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
  flex: 1 1 auto;
`,S=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,N=i.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,w=i.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,v=i.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,C=i.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  right: ${({theme:e})=>e.spacing[2]};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.danger};
`,k=i.button`
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
`,z=[{id:"n1",title:"Tu pedido va en camino",subtitle:"El repartidor ya retiró tu pedido de Almacén Juan.",date:"Hoy",unread:!0,icon:c},{id:"n2",title:"Pedido confirmado",subtitle:"Panadería La Esquina aceptó tu pedido #1248.",date:"Hoy",unread:!0,icon:l},{id:"n3",title:"Nueva oferta cerca tuyo",subtitle:"La Huerta bajó el precio de las verduras del día.",date:"Ayer",unread:!0,icon:b},{id:"n4",title:"Nuevo comercio en LaFranciaGO",subtitle:"Carnicería Central ya está recibiendo pedidos.",date:"12/08",unread:!1,icon:p}];function P(){const[e,s]=x.useState(z);return e.length===0?o.jsx(t,{showSearch:!1,children:o.jsx(r,{children:o.jsx(n,{children:o.jsx(u,{icon:g,title:"No tenés notificaciones",text:"Acá vas a ver el estado de tus pedidos y las ofertas cerca tuyo.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})}):o.jsx(t,{showSearch:!1,children:o.jsx(r,{children:o.jsx(n,{children:o.jsxs(h,{children:[o.jsx(f,{title:"Notificaciones",chip:`${e.filter(a=>a.unread).length} nuevas`}),o.jsx(k,{type:"button",onClick:()=>s([]),children:"Limpiar todo"}),o.jsx(y,{children:e.map(a=>{const d=a.icon;return o.jsxs(m,{"data-unread":a.unread,children:[o.jsx($,{children:o.jsx(d,{size:18,"aria-hidden":"true"})}),o.jsxs(j,{children:[o.jsxs(S,{children:[o.jsx(N,{children:a.title}),o.jsx(w,{children:a.date})]}),o.jsx(v,{children:a.subtitle})]}),a.unread?o.jsx(C,{"aria-label":"Sin leer"}):null]},a.id)})})]})})})})}export{P as NotificationsScreen};
