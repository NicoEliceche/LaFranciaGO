import{q as l,v as u,w as d,x as p,j as r,M as h,y as g,S as c,z as x,b as j,n as S,D as b,E as f,F as y}from"./index-99PGXNK_.js";import{r as i}from"./react-D_B_6qYb.js";const C=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:s})=>s.spacing[2]};

  @media (min-width: ${({theme:s})=>s.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:s})=>s.spacing[3]};
  }
`;function $(){const[s,n]=i.useState(""),{stores:o}=u(),a=i.useMemo(()=>d.filter(e=>p(s,e.name,e.description)),[s]),m=i.useMemo(()=>{const e={};return o.forEach(t=>{e[t.categoryId]=(e[t.categoryId]??0)+1}),e},[o]);return r.jsxs(h,{query:s,onQueryChange:n,children:[r.jsx(g,{children:r.jsx(c,{children:r.jsx(x,{value:s,onChange:n,placeholder:"Buscar un rubro"})})}),r.jsx(j,{children:r.jsx(c,{children:a.length>0?r.jsxs(r.Fragment,{children:[r.jsx(S,{title:"Categorías",chip:`${a.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(C,{children:a.map((e,t)=>r.jsx(b,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:m[e.id]??0,priority:t<6},e.id))})]}):r.jsx(f,{icon:y,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{$ as CategoriesScreen};
