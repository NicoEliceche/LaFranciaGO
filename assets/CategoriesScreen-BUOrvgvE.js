import{u as l,t as u,v as d,j as r,M as p,w as h,S as c,x as g,C as x,q as j,y as S,E as f}from"./index-DsC-m32S.js";import{r as o}from"./react-6hK8W6IX.js";import{q as C}from"./estilos-DzHAJWDP.js";import{O as y}from"./iconos-DPkufriG.js";const b=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  gap: ${({theme:t})=>t.spacing[2]};

  @media (min-width: ${({theme:t})=>t.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: ${({theme:t})=>t.spacing[3]};
  }
`;function M(){const[t,i]=o.useState(""),{stores:n}=l(),a=o.useMemo(()=>u.filter(e=>d(t,e.name,e.description)),[t]),m=o.useMemo(()=>{const e={};return n.forEach(s=>{e[s.categoryId]=(e[s.categoryId]??0)+1}),e},[n]);return r.jsxs(p,{query:t,onQueryChange:i,children:[r.jsx(h,{children:r.jsx(c,{children:r.jsx(g,{value:t,onChange:i,placeholder:"Buscar un rubro"})})}),r.jsx(x,{children:r.jsx(c,{children:a.length>0?r.jsxs(r.Fragment,{children:[r.jsx(j,{title:"Categorías",chip:`${a.length}`,subtitle:"Elegí un rubro para ver los negocios."}),r.jsx(b,{children:a.map((e,s)=>r.jsx(S,{id:e.id,name:e.name,to:`/comercios?rubro=${e.id}`,count:m[e.id]??0,priority:s<6},e.id))})]}):r.jsx(f,{icon:y,title:"Sin rubros",text:"Probá con otro término.",dashed:!0})})})]})}export{M as CategoriesScreen};
