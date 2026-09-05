import{q as m,c as l,m as d,s as u,j as r,M as p,S as h,a as o,b as g,C as x,d as j,e as S,E as f,f as C}from"./index-U-wdHHrK.js";import{r as i}from"./react-B1kPYQQd.js";const b=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:a})=>a.spacing[2]};

  @media (min-width: ${({theme:a})=>a.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:a})=>a.spacing[3]};
  }
`;function $(){const[a,n]=i.useState(""),t=i.useMemo(()=>l.filter(e=>d(a,e.name,e.description)),[a]),c=i.useMemo(()=>{const e={};return u.forEach(s=>{e[s.categoryId]=(e[s.categoryId]??0)+1}),e},[]);return r.jsxs(p,{query:a,onQueryChange:n,children:[r.jsx(h,{children:r.jsx(o,{children:r.jsx(g,{value:a,onChange:n,placeholder:"Buscar un rubro"})})}),r.jsx(x,{children:r.jsx(o,{children:t.length>0?r.jsxs(r.Fragment,{children:[r.jsx(j,{title:"Categorías",chip:`${t.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(b,{children:t.map((e,s)=>r.jsx(S,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:c[e.id]??0,priority:s<6},e.id))})]}):r.jsx(f,{icon:C,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{$ as CategoriesScreen};
