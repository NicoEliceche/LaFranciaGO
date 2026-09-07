import{q as m,p as u,r as d,t as p,j as r,M as h,v as g,S as c,w as x,b as j,l as S,x as b,E as f,y}from"./index-Dp3RR3Le.js";import{r as i}from"./react-D_B_6qYb.js";const C=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:t})=>t.spacing[2]};

  @media (min-width: ${({theme:t})=>t.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:t})=>t.spacing[3]};
  }
`;function $(){const[t,o]=i.useState(""),{stores:n}=u(),a=i.useMemo(()=>d.filter(e=>p(t,e.name,e.description)),[t]),l=i.useMemo(()=>{const e={};return n.forEach(s=>{e[s.categoryId]=(e[s.categoryId]??0)+1}),e},[n]);return r.jsxs(h,{query:t,onQueryChange:o,children:[r.jsx(g,{children:r.jsx(c,{children:r.jsx(x,{value:t,onChange:o,placeholder:"Buscar un rubro"})})}),r.jsx(j,{children:r.jsx(c,{children:a.length>0?r.jsxs(r.Fragment,{children:[r.jsx(S,{title:"Categorías",chip:`${a.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(C,{children:a.map((e,s)=>r.jsx(b,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:l[e.id]??0,priority:s<6},e.id))})]}):r.jsx(f,{icon:y,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{$ as CategoriesScreen};
