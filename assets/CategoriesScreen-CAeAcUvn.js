import{q as l,f as u,g as d,m as p,j as r,M as g,k as h,S as c,l as x,b as j,n as S,o as f,E as b,p as C}from"./index-DmRIvc-c.js";import{r as i}from"./react-D_B_6qYb.js";const y=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:s})=>s.spacing[2]};

  @media (min-width: ${({theme:s})=>s.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:s})=>s.spacing[3]};
  }
`;function v(){const[s,o]=i.useState(""),{stores:n}=u(),a=i.useMemo(()=>d.filter(e=>p(s,e.name,e.description)),[s]),m=i.useMemo(()=>{const e={};return n.forEach(t=>{e[t.categoryId]=(e[t.categoryId]??0)+1}),e},[n]);return r.jsxs(g,{query:s,onQueryChange:o,children:[r.jsx(h,{children:r.jsx(c,{children:r.jsx(x,{value:s,onChange:o,placeholder:"Buscar un rubro"})})}),r.jsx(j,{children:r.jsx(c,{children:a.length>0?r.jsxs(r.Fragment,{children:[r.jsx(S,{title:"Categorías",chip:`${a.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(y,{children:a.map((e,t)=>r.jsx(f,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:m[e.id]??0,priority:t<6},e.id))})]}):r.jsx(b,{icon:C,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{v as CategoriesScreen};
