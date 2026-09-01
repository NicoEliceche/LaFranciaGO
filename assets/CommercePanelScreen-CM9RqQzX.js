import{a9 as d,q as h,j as t,M as y,I as i,a,e as o,ay as m,az as u,aA as x,t as n,aB as k,a0 as j,at as g,aC as b,aD as M}from"./index-CEnDCpoj.js";import{M as f}from"./MetricTile-B058XC-o.js";import{S as s,a as r}from"./SettingsList-Dd8yIFYj.js";import{B as v}from"./badge-percent-CREyDmu6.js";import"./react-Clk3ySf9.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=d("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=d("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=d("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]),c=h.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,w=[{id:"overview",title:"Inicio / resumen",description:"Ventas del día, alertas y accesos rápidos.",icon:j},{id:"orders",title:"Pedidos",description:"Estados, tiempos y cambios de fase.",icon:p},{id:"products",title:"Productos",description:"Precios, stock, fotos y visibilidad.",icon:l},{id:"categories",title:"Categorías",description:"Organización propia por comercio.",icon:g},{id:"clients",title:"Clientes",description:"Frecuentes, direcciones y hábitos.",icon:b},{id:"promotions",title:"Promociones",description:"Combos, descuentos y destacados.",icon:v},{id:"reports",title:"Reportes",description:"Ventas, ticket promedio y top productos.",icon:S},{id:"settings",title:"Configuración",description:"Horarios, reparto y visibilidad.",icon:M}];function A(){return t.jsxs(y,{showSearch:!1,children:[t.jsx(i,{children:t.jsxs(a,{children:[t.jsx(o,{title:"Panel del comercio",chip:"Hoy",subtitle:"Resumen de la operación del día."}),t.jsx(m,{children:u.map(e=>t.jsx(f,{label:e.label,value:e.value,help:e.trend},e.id))})]})}),t.jsx(i,{children:t.jsxs(a,{children:[t.jsx(o,{title:"Pedidos recientes",seeAllTo:"/panel/comercio",seeAllLabel:"Ver todos"}),t.jsx(s,{children:x.map(e=>t.jsx(r,{icon:p,title:e.customer,subtitle:e.status,trailing:t.jsx(c,{children:n(e.total)})},e.id))})]})}),t.jsx(i,{children:t.jsxs(a,{children:[t.jsx(o,{title:"Stock y productos",subtitle:"Precios y disponibilidad.",seeAllTo:"/panel/comercio/producto",seeAllLabel:"Nuevo producto"}),t.jsx(s,{children:k.map(e=>t.jsx(r,{icon:l,title:e.name,subtitle:`${e.stock} en stock · ${e.status}`,trailing:t.jsx(c,{children:n(e.price)})},e.id))})]})}),t.jsx(i,{children:t.jsxs(a,{children:[t.jsx(o,{title:"Gestión",subtitle:"Todo el panel ordenado por tarea."}),t.jsx(s,{children:w.map(e=>t.jsx(r,{icon:e.icon,title:e.title,subtitle:e.description,to:e.id==="products"?"/panel/comercio/producto":"/panel/comercio"},e.id))})]})})]})}export{A as CommercePanelScreen};
