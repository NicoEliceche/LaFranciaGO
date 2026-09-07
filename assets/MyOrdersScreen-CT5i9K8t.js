import{q as r,j as t,G as f,H as x,I as y,a1 as u,K as b,aj as $,h as w,ak as j,M as S,n as C,S as h,p as v,x as E,F as O,b as z,al as T,E as k}from"./index-Bc4FkQ3o.js";import{L as I,r as c}from"./react-D_B_6qYb.js";import{C as F}from"./clock-3-ClxBJ32x.js";const M=r(I)`
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
`,D=r.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,L=r.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,R=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,_=r.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,H=r.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,A=r.span`
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
`,q=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,B=r.div`
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
`,N=r.strong`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,P={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Y({order:e,priority:o}){return t.jsxs(M,{to:`/comercios/${e.storeId}?pedido=${e.id}`,children:[t.jsx(D,{children:t.jsx(f,{$ratio:"1 / 1",$radius:"md",children:t.jsx(x,{src:y(e.categoryId),alt:e.store,loading:o?"eager":"lazy"})})}),t.jsxs(L,{children:[t.jsxs(R,{children:[t.jsx(_,{children:e.store}),t.jsx(H,{children:e.code})]}),t.jsx(A,{"data-state":e.state,children:P[e.state]}),t.jsxs(q,{children:[t.jsx(F,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),t.jsxs(B,{children:[t.jsxs("span",{children:[t.jsx(u,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),t.jsx(N,{children:b(e.total)})]})]}),t.jsx($,{size:18,"aria-hidden":"true"})]})}const G=2e4;function K(e){const o=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(o.getTime()))return"";const i=o.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),n=new Date;return o.getDate()===n.getDate()&&o.getMonth()===n.getMonth()&&o.getFullYear()===n.getFullYear()?`Hoy ${i}`:`${o.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${i}`}const X={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Z(){const[e,o]=c.useState([]),[i,n]=c.useState(!0),[d,l]=c.useState(!1),a=c.useCallback(async()=>{if(!w()){n(!1);return}try{const{pedidos:p}=await j.listar();o(p.map(s=>{const g=s.items??[];return{id:s.id,code:s.codigo,store:s.comercio_nombre,storeId:s.comercio_id,categoryId:s.rubro_id,total:s.total,status:X[s.estado]??s.estado,state:s.estado,eta:s.estado==="proceso"?"Llega en 15-25 min":"",date:K(s.creado_en),itemCount:g.length,items:g.map(m=>({productId:m.productoId??"",quantity:m.escalon+1}))}})),l(!1)}catch{l(!0)}finally{n(!1)}},[]);return c.useEffect(()=>{a();const p=window.setInterval(()=>void a(),G);return()=>window.clearInterval(p)},[a]),{pedidos:e,cargando:i,error:d,recargar:a}}const J=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}];function W(){const[e,o]=c.useState("todos"),{pedidos:i,cargando:n}=Z(),d=c.useMemo(()=>e==="todos"?i:i.filter(a=>a.state===e),[i,e]),l=i.filter(a=>a.state==="proceso").length;return t.jsxs(S,{showSearch:!1,children:[t.jsx(C,{children:t.jsxs(h,{children:[t.jsx(v,{title:"Mis pedidos",chip:l>0?`${l} en curso`:void 0,subtitle:"Historial completo de tus compras."}),t.jsx(E,{"aria-label":"Filtrar pedidos",children:J.map(a=>t.jsx(O,{type:"button",onClick:()=>o(a.id),"data-active":e===a.id,children:a.label},a.id))})]})}),t.jsx(z,{children:t.jsx(h,{children:n&&d.length===0?null:d.length>0?t.jsx(T,{children:d.map((a,p)=>t.jsx(Y,{order:a,priority:p<3},a.id))}):t.jsx(k,{icon:u,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})]})}export{W as MyOrdersScreen};
