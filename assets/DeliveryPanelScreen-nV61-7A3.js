import{q as r,j as s,M as o,O as a,S as i,h as t,aA as l,aG as n,aH as c,aI as d,y as p,I as h}from"./index-zg-QSFtH.js";import{M as u}from"./MetricTile-BDi3TJDf.js";import{S as x,a as y}from"./SettingsList-BYMC6WIF.js";import"./react-B1kPYQQd.js";const m=r.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.success};
`;function b(){return s.jsxs(o,{showSearch:!1,children:[s.jsx(a,{children:s.jsxs(i,{children:[s.jsx(t,{title:"Panel del repartidor",chip:"Hoy",subtitle:"Tu resumen de entregas."}),s.jsx(l,{children:n.map(e=>s.jsx(u,{label:e.label,value:e.value,help:e.help},e.id))})]})}),s.jsx(a,{children:s.jsxs(i,{children:[s.jsx(t,{title:"Entregas",subtitle:"Pedidos asignados y disponibles."}),s.jsx(x,{children:c.map(e=>s.jsx(y,{icon:d,title:`${e.store} → ${e.customer}`,subtitle:`${h(e.distanceKm)} · ${e.status}`,trailing:s.jsx(m,{children:p(e.payout)})},e.id))})]})})]})}export{b as DeliveryPanelScreen};
