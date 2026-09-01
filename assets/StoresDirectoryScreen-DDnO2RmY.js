import{q as t,u as S,r as f,s as b,m,c as j,j as i,M as $,S as w,a as c,b as C,d as F,F as v,C as h,e as p,f as k,g as R,h as M,P as E,i as N,E as P,k as q}from"./index-CEnDCpoj.js";import{r as o}from"./react-Clk3ySf9.js";import{S as z}from"./ScrollRail-C5HkSyGl.js";const O=t.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }
`,I=t.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Q=t.label`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,T=t.select`
  min-width: 0;
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition: border-color 180ms ease;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }
`;function D(){const[e,d]=o.useState(""),[g,u]=o.useState("all"),{sortMode:s,setSortMode:x}=S(),a=o.useMemo(()=>f(b.filter(r=>m(e,r.name,r.category,r.address,r.tags.join(" "))),s),[e,s]),n=o.useMemo(()=>j.filter(r=>m(e,r.name)),[e]),y=a.length>0||n.length>0;return i.jsxs($,{query:e,onQueryChange:d,children:[i.jsx(w,{children:i.jsxs(c,{children:[i.jsx(C,{value:e,onChange:d,placeholder:"Buscar comercios o rubros"}),i.jsx(z,{"aria-label":"Filtros rápidos",children:F.map(r=>i.jsx(v,{type:"button",onClick:()=>u(r.id),"data-active":g===r.id,children:r.label},r.id))})]})}),n.length>0&&i.jsx(h,{children:i.jsxs(c,{children:[i.jsx(p,{title:"Categorías",subtitle:"Elegí un rubro para filtrar."}),i.jsx(k,{"aria-label":"Categorías",children:n.map((r,l)=>i.jsx(R,{id:r.id,name:r.name,to:`/comercios?rubro=${r.id}`,priority:l<5},r.id))})]})}),i.jsx(h,{children:i.jsx(c,{children:a.length>0?i.jsxs(i.Fragment,{children:[i.jsxs(O,{children:[i.jsx(p,{title:"Negocios",chip:`${a.length}`,subtitle:"Locales activos cerca tuyo."}),i.jsxs(I,{children:[i.jsx(Q,{htmlFor:"orden-negocios",children:"Ordenar por"}),i.jsx(T,{id:"orden-negocios",value:s,onChange:r=>x(r.target.value),children:M.map(r=>i.jsx("option",{value:r.id,children:r.label},r.id))})]})]}),i.jsx(E,{children:a.map((r,l)=>i.jsx(N,{id:r.id,name:r.name,category:r.category,categoryId:r.id,to:`/comercios/${r.id}`,distanceKm:r.distanceKm,rating:r.rating,openNow:r.openNow,premium:r.premium,priority:l<4},r.id))})]}):i.jsx(P,{icon:q,title:"Sin negocios",text:y?"Probá cambiando el filtro.":`No encontramos negocios para "${e}".`,dashed:!0})})})]})}export{D as StoresDirectoryScreen};
