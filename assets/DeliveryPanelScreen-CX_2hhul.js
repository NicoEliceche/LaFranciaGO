import{j as s,M as r,a4 as i,S as t,q as a,bd as o,bx as l,by as n,r as p,$ as c}from"./index-DNa1Gg_W.js";import{M as d}from"./MetricTile-CduGbaWO.js";import{S as m,a as h}from"./SettingsList-BwTuauuH.js";import{q as u}from"./estilos-D2nr0glO.js";import{aT as x}from"./iconos-QSpXftGT.js";import"./react-CKwpxk66.js";const y=u.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.success};
`;function v(){return s.jsxs(r,{showSearch:!1,children:[s.jsx(i,{children:s.jsxs(t,{children:[s.jsx(a,{title:"Panel del repartidor",chip:"Hoy",subtitle:"Tu resumen de entregas."}),s.jsx(o,{children:l.map(e=>s.jsx(d,{label:e.label,value:e.value,help:e.help},e.id))})]})}),s.jsx(i,{children:s.jsxs(t,{children:[s.jsx(a,{title:"Entregas",subtitle:"Pedidos asignados y disponibles."}),s.jsx(m,{children:n.map(e=>s.jsx(h,{icon:x,title:`${e.store} → ${e.customer}`,subtitle:`${c(e.distanceKm)} · ${e.status}`,trailing:s.jsx(y,{children:p(e.payout)})},e.id))})]})})]})}export{v as DeliveryPanelScreen};
