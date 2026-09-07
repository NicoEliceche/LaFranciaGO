import{q as r,j as t,A as f,B as x,D as y,_ as u,H as b,ag as $,h as w,ah as j,M as S,k as C,S as m,n as v,v as E,F as O,b as z,ai as T,E as k}from"./index-B_prQB2D.js";import{L as F,r as c}from"./react-D_B_6qYb.js";import{C as I}from"./clock-3-DaNVLL4y.js";const M=r(F)`
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
`,A=r.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,H=r.span`
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
`,B=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,q=r.div`
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
`,P={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function Y({order:e,priority:o}){return t.jsxs(M,{to:`/comercios/${e.storeId}?pedido=${e.id}`,children:[t.jsx(D,{children:t.jsx(f,{$ratio:"1 / 1",$radius:"md",children:t.jsx(x,{src:y(e.categoryId),alt:e.store,loading:o?"eager":"lazy"})})}),t.jsxs(L,{children:[t.jsxs(R,{children:[t.jsx(_,{children:e.store}),t.jsx(A,{children:e.code})]}),t.jsx(H,{"data-state":e.state,children:P[e.state]}),t.jsxs(B,{children:[t.jsx(I,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),t.jsxs(q,{children:[t.jsxs("span",{children:[t.jsx(u,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),t.jsx(N,{children:b(e.total)})]})]}),t.jsx($,{size:18,"aria-hidden":"true"})]})}const X=2e4;function Z(e){const o=new Date(e.replace(" ","T")+"Z");if(Number.isNaN(o.getTime()))return"";const i=o.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),n=new Date;return o.getDate()===n.getDate()&&o.getMonth()===n.getMonth()&&o.getFullYear()===n.getFullYear()?`Hoy ${i}`:`${o.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} ${i}`}const G={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function J(){const[e,o]=c.useState([]),[i,n]=c.useState(!0),[d,l]=c.useState(!1),a=c.useCallback(async()=>{if(!w()){n(!1);return}try{const{pedidos:p}=await j.listar();o(p.map(s=>{const g=s.items??[];return{id:s.id,code:s.codigo,store:s.comercio_nombre,storeId:s.comercio_id,categoryId:s.rubro_id,total:s.total,status:G[s.estado]??s.estado,state:s.estado,eta:s.estado==="proceso"?"Llega en 15-25 min":"",date:Z(s.creado_en),itemCount:g.length,items:g.map(h=>({productId:h.productoId??"",quantity:h.escalon+1}))}})),l(!1)}catch{l(!0)}finally{n(!1)}},[]);return c.useEffect(()=>{a();const p=window.setInterval(()=>void a(),X);return()=>window.clearInterval(p)},[a]),{pedidos:e,cargando:i,error:d,recargar:a}}const K=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}];function W(){const[e,o]=c.useState("todos"),{pedidos:i,cargando:n}=J(),d=c.useMemo(()=>e==="todos"?i:i.filter(a=>a.state===e),[i,e]),l=i.filter(a=>a.state==="proceso").length;return t.jsxs(S,{showSearch:!1,children:[t.jsx(C,{children:t.jsxs(m,{children:[t.jsx(v,{title:"Mis pedidos",chip:l>0?`${l} en curso`:void 0,subtitle:"Historial completo de tus compras."}),t.jsx(E,{"aria-label":"Filtrar pedidos",children:K.map(a=>t.jsx(O,{type:"button",onClick:()=>o(a.id),"data-active":e===a.id,children:a.label},a.id))})]})}),t.jsx(z,{children:t.jsx(m,{children:n&&d.length===0?null:d.length>0?t.jsx(T,{children:d.map((a,p)=>t.jsx(Y,{order:a,priority:p<3},a.id))}):t.jsx(k,{icon:u,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar negocios",ctaTo:"/comercios"})})})]})}export{W as MyOrdersScreen};
