import{q as r,j as s,M as o,a0 as a,S as i,p as t,aU as l,a$ as n,b0 as c,b1 as p,K as d,V as h}from"./index-62H5_yJs.js";import{M as u}from"./MetricTile-VfWH4vW4.js";import{S as x,a as m}from"./SettingsList-BEPCIR_-.js";import"./react-D_B_6qYb.js";const y=r.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.success};
`;function S(){return s.jsxs(o,{showSearch:!1,children:[s.jsx(a,{children:s.jsxs(i,{children:[s.jsx(t,{title:"Panel del repartidor",chip:"Hoy",subtitle:"Tu resumen de entregas."}),s.jsx(l,{children:n.map(e=>s.jsx(u,{label:e.label,value:e.value,help:e.help},e.id))})]})}),s.jsx(a,{children:s.jsxs(i,{children:[s.jsx(t,{title:"Entregas",subtitle:"Pedidos asignados y disponibles."}),s.jsx(x,{children:c.map(e=>s.jsx(m,{icon:p,title:`${e.store} → ${e.customer}`,subtitle:`${h(e.distanceKm)} · ${e.status}`,trailing:s.jsx(y,{children:d(e.payout)})},e.id))})]})})]})}export{S as DeliveryPanelScreen};
