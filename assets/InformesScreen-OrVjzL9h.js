import{bb as y,j as e}from"./index-DsC-m32S.js";import{r as s}from"./react-6hK8W6IX.js";import{G as w}from"./GestionFrame-C7h4k-Sd.js";import{T as z,a as i,B as A,C as T,M as x,D as j,b as u,E as D}from"./TablaStyled-BkIgsuVo.js";import{m as n}from"./dinero-BsEAM1JF.js";import{A as V,V as o,P as d,T as c}from"./CajaScreenStyled-hsk5-jsb.js";import{q as m}from"./estilos-DzHAJWDP.js";import{az as $,a7 as R,h as B}from"./iconos-DPkufriG.js";const M=m.div`
  display: flex;
  align-items: flex-end;
  gap: 0.35rem;
  height: 11rem;
  padding-top: ${({theme:t})=>t.spacing[2]};
  overflow-x: auto;
`,L=m.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
  min-width: 1.6rem;
  height: 100%;

  > span {
    color: ${({theme:t})=>t.color.textSoft};
    font-size: 0.62rem;
    white-space: nowrap;
  }
`,N=m.div`
  width: 100%;
  min-height: 2px;
  border-radius: ${({theme:t})=>t.radius.sm} ${({theme:t})=>t.radius.sm} 0 0;
  background: ${({theme:t})=>t.color.primary};
  transition: height 200ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,G={efectivo:"Efectivo",transferencia:"Transferencia",tarjeta:"Tarjeta",cheque:"Cheque",cuenta_corriente:"Fiado"},S=t=>new Date(`${t}T12:00:00`).toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"});function K(){const[t,C]=s.useState(null),[p,P]=s.useState([]),[F,g]=s.useState(!0),[f,v]=s.useState(null),[l,k]=s.useState(""),[h,E]=s.useState(""),q=s.useCallback(async()=>{g(!0),v(null);try{const[a,r]=await Promise.all([y.general({desde:l||void 0,hasta:h||void 0}),y.porReponer(5)]);C(a),P(r.productos)}catch{v("No pudimos armar el informe. Probá de nuevo.")}finally{g(!1)}},[l,h]);s.useEffect(()=>{q()},[q]);const b=(t==null?void 0:t.porDia.reduce((a,r)=>Math.max(a,r.total),0))??0;return e.jsxs(w,{titulo:"Informes",children:[f?e.jsx(V,{role:"status",children:f}):null,e.jsxs(z,{children:[e.jsxs(i,{children:[e.jsx("span",{children:"Vendiste"}),e.jsx("strong",{children:t?n(t.ventas.total):"—"})]}),e.jsxs(i,{"data-tono":"cobrado",children:[e.jsx("span",{children:"Te quedó"}),e.jsx("strong",{children:t?n(t.ganancia):"—"})]}),e.jsxs(i,{children:[e.jsx("span",{children:"De cada $100 que vendés"}),e.jsx("strong",{children:t?`te quedan $ ${t.margen.toFixed(0)}`:"—"})]}),e.jsxs(i,{"data-tono":"debe",children:[e.jsx("span",{children:"Le debés a proveedores"}),e.jsx("strong",{children:t?n(t.compras.adeudado):"—"})]})]}),e.jsxs(A,{children:[e.jsxs(T,{children:[e.jsx("span",{children:"Desde"}),e.jsx("input",{type:"date",value:l,onChange:a=>k(a.target.value)})]}),e.jsxs(T,{children:[e.jsx("span",{children:"Hasta"}),e.jsx("input",{type:"date",value:h,onChange:a=>E(a.target.value)})]})]}),F?e.jsx(o,{children:"Armando el informe…"}):t?e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx($,{size:16,"aria-hidden":"true"}),"Día por día"]}),t.porDia.length===0?e.jsx(o,{children:"No hubo ventas en ese período."}):e.jsx(M,{children:t.porDia.map(a=>e.jsxs(L,{title:`${S(a.dia)}: ${n(a.total)}`,children:[e.jsx(N,{style:{height:`${b>0?a.total/b*100:0}%`},"aria-hidden":"true"}),e.jsx("span",{children:S(a.dia)})]},a.dia))})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx($,{size:16,"aria-hidden":"true"}),"Lo que más te deja"]}),t.productos.length===0?e.jsx(o,{children:"Todavía no hay ventas para comparar."}):e.jsx(x,{children:e.jsx(j,{children:e.jsxs(u,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Producto"}),e.jsx("th",{scope:"col",children:"Cuánto salió"}),e.jsx("th",{scope:"col",children:"Vendiste"}),e.jsx("th",{scope:"col",children:"Te quedó"}),e.jsx("th",{scope:"col",children:"De cada $100"})]})}),e.jsx("tbody",{children:t.productos.map(a=>{const r=a.total>0?a.ganancia/a.total*100:0;return e.jsxs("tr",{children:[e.jsx("td",{"data-etiqueta":"Producto",children:a.nombre}),e.jsx("td",{"data-etiqueta":"Cuánto salió","data-tipo":"numero",children:a.unidades.toLocaleString("es-AR",{maximumFractionDigits:2})}),e.jsx("td",{"data-etiqueta":"Vendiste","data-tipo":"numero",children:n(a.total)}),e.jsx("td",{"data-etiqueta":"Te quedó","data-tipo":"numero",children:n(a.ganancia)}),e.jsx("td",{"data-etiqueta":"De cada $100",children:e.jsxs(D,{"data-tono":r>=30?"bien":r>=15?"espera":"mal",children:["te quedan $ ",r.toFixed(0)]})})]},a.nombre)})})]})})})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(R,{size:16,"aria-hidden":"true"}),"Cómo te pagan"]}),t.metodos.length===0?e.jsx(o,{children:"Sin cobros en el período."}):e.jsx(x,{children:e.jsx(j,{children:e.jsxs(u,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Forma de pago"}),e.jsx("th",{scope:"col",children:"Veces"}),e.jsx("th",{scope:"col",children:"Total"})]})}),e.jsx("tbody",{children:t.metodos.map(a=>e.jsxs("tr",{children:[e.jsx("td",{"data-etiqueta":"Forma de pago",children:G[a.metodo]??a.metodo}),e.jsx("td",{"data-etiqueta":"Veces","data-tipo":"numero",children:a.veces}),e.jsx("td",{"data-etiqueta":"Total","data-tipo":"numero",children:n(a.total)})]},a.metodo))})]})})})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(B,{size:16,"aria-hidden":"true"}),"Qué hay que reponer"]}),p.length===0?e.jsx(o,{children:"No hay nada por debajo de cinco unidades."}):e.jsx(x,{children:e.jsx(j,{children:e.jsxs(u,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Producto"}),e.jsx("th",{scope:"col",children:"Quedan"})]})}),e.jsx("tbody",{children:p.map(a=>e.jsxs("tr",{children:[e.jsx("td",{"data-etiqueta":"Producto",children:a.nombre}),e.jsx("td",{"data-etiqueta":"Quedan","data-tipo":"numero",children:e.jsx(D,{"data-tono":a.stock===0?"mal":"espera",children:a.stock===0?"Sin stock":a.stock})})]},a.id))})]})})})]})]}):null]})}export{K as InformesScreen};
