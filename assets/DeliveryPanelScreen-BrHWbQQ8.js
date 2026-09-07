import{c as r,q as o,j as s,M as l,a8 as a,S as t,l as i,aY as n,b2 as c,b3 as d,Z as p,a3 as h}from"./index-Dp3RR3Le.js";import{M as y}from"./MetricTile-Dyl60Vor.js";import{S as u,a as x}from"./SettingsList-BH-5mCVy.js";import"./react-D_B_6qYb.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]),g=o.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.success};
`;function $(){return s.jsxs(l,{showSearch:!1,children:[s.jsx(a,{children:s.jsxs(t,{children:[s.jsx(i,{title:"Panel del repartidor",chip:"Hoy",subtitle:"Tu resumen de entregas."}),s.jsx(n,{children:c.map(e=>s.jsx(y,{label:e.label,value:e.value,help:e.help},e.id))})]})}),s.jsx(a,{children:s.jsxs(t,{children:[s.jsx(i,{title:"Entregas",subtitle:"Pedidos asignados y disponibles."}),s.jsx(u,{children:d.map(e=>s.jsx(x,{icon:m,title:`${e.store} → ${e.customer}`,subtitle:`${h(e.distanceKm)} · ${e.status}`,trailing:s.jsx(g,{children:p(e.payout)})},e.id))})]})})]})}export{$ as DeliveryPanelScreen};
