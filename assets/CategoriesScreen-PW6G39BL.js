import{q as l,t as u,v as d,w as p,j as r,M as h,x as g,S as c,y as x,b as j,m as S,z as b,E as f,D as y}from"./index-BYdsqWK_.js";import{r as i}from"./react-D_B_6qYb.js";const C=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:t})=>t.spacing[2]};

  @media (min-width: ${({theme:t})=>t.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:t})=>t.spacing[3]};
  }
`;function $(){const[t,o]=i.useState(""),{stores:n}=u(),a=i.useMemo(()=>d.filter(e=>p(t,e.name,e.description)),[t]),m=i.useMemo(()=>{const e={};return n.forEach(s=>{e[s.categoryId]=(e[s.categoryId]??0)+1}),e},[n]);return r.jsxs(h,{query:t,onQueryChange:o,children:[r.jsx(g,{children:r.jsx(c,{children:r.jsx(x,{value:t,onChange:o,placeholder:"Buscar un rubro"})})}),r.jsx(j,{children:r.jsx(c,{children:a.length>0?r.jsxs(r.Fragment,{children:[r.jsx(S,{title:"Categorías",chip:`${a.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(C,{children:a.map((e,s)=>r.jsx(b,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:m[e.id]??0,priority:s<6},e.id))})]}):r.jsx(f,{icon:y,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{$ as CategoriesScreen};
