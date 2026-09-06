import{q as m,f as l,m as d,s as u,j as r,M as p,g,S as o,k as h,b as x,l as j,n as S,E as f,o as b}from"./index--oxwNYaS.js";import{r as i}from"./react-D_B_6qYb.js";const C=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:s})=>s.spacing[2]};

  @media (min-width: ${({theme:s})=>s.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:s})=>s.spacing[3]};
  }
`;function $(){const[s,n]=i.useState(""),a=i.useMemo(()=>l.filter(e=>d(s,e.name,e.description)),[s]),c=i.useMemo(()=>{const e={};return u.forEach(t=>{e[t.categoryId]=(e[t.categoryId]??0)+1}),e},[]);return r.jsxs(p,{query:s,onQueryChange:n,children:[r.jsx(g,{children:r.jsx(o,{children:r.jsx(h,{value:s,onChange:n,placeholder:"Buscar un rubro"})})}),r.jsx(x,{children:r.jsx(o,{children:a.length>0?r.jsxs(r.Fragment,{children:[r.jsx(j,{title:"Categorías",chip:`${a.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(C,{children:a.map((e,t)=>r.jsx(S,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:c[e.id]??0,priority:t<6},e.id))})]}):r.jsx(f,{icon:b,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{$ as CategoriesScreen};
