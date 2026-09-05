import{q as o,j as a,l as h,n as g,o as m,K as c,t as x,a6 as f,M as y,S as u,a as d,d as b,g as $,F as j,C as w,a7 as C,E as S}from"./index-D4G15rmE.js";import{L as v,r as l}from"./react-B1kPYQQd.js";import{C as z}from"./clock-3-C3c_XR_y.js";import{u as O}from"./ordersStore-BvyMlCLu.js";const k=o(v)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.24);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,E=o.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,F=o.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,M=o.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,T=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=o.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,L=o.span`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;

  &[data-state='proceso'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-state='terminado'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-state='cancelado'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }
`,H=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,R=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: 0.1rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  > span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`,q=o.strong`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,B={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function K({order:e,priority:r}){return a.jsxs(k,{to:`/comercios/${e.storeId}?pedido=${e.id}`,children:[a.jsx(E,{children:a.jsx(h,{$ratio:"1 / 1",$radius:"md",children:a.jsx(g,{src:m(e.categoryId),alt:e.store,loading:r?"eager":"lazy"})})}),a.jsxs(F,{children:[a.jsxs(M,{children:[a.jsx(T,{children:e.store}),a.jsx(I,{children:e.code})]}),a.jsx(L,{"data-state":e.state,children:B[e.state]}),a.jsxs(H,{children:[a.jsx(z,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),a.jsxs(R,{children:[a.jsxs("span",{children:[a.jsx(c,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),a.jsx(q,{children:x(e.total)})]})]}),a.jsx(f,{size:18,"aria-hidden":"true"})]})}const P=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}];function J(){const[e,r]=l.useState("todos"),s=O(),i=l.useMemo(()=>e==="todos"?s:s.filter(t=>t.state===e),[s,e]),n=s.filter(t=>t.state==="proceso").length;return a.jsxs(y,{showSearch:!1,children:[a.jsx(u,{children:a.jsxs(d,{children:[a.jsx(b,{title:"Mis pedidos",chip:n>0?`${n} en curso`:void 0,subtitle:"Historial completo de tus compras."}),a.jsx($,{"aria-label":"Filtrar pedidos",children:P.map(t=>a.jsx(j,{type:"button",onClick:()=>r(t.id),"data-active":e===t.id,children:t.label},t.id))})]})}),a.jsx(w,{children:a.jsx(d,{children:i.length>0?a.jsx(C,{children:i.map((t,p)=>a.jsx(K,{order:t,priority:p<3},t.id))}):a.jsx(S,{icon:c,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})]})}export{J as MyOrdersScreen};
