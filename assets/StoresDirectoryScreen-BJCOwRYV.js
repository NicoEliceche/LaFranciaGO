import{q as t,u as S,r as f,s as b,m,c as j,j as a,M as $,S as w,a as c,b as C,d as F,e as v,F as k,C as h,f as g,g as R,h as M,i as E,P as N,k as P,E as q,l as z}from"./index-BTBQalvo.js";import{r as o}from"./react-Clk3ySf9.js";const O=t.div`
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
`;function L(){const[e,d]=o.useState(""),[p,u]=o.useState("all"),{sortMode:s,setSortMode:x}=S(),i=o.useMemo(()=>f(b.filter(r=>m(e,r.name,r.category,r.address,r.tags.join(" "))),s),[e,s]),n=o.useMemo(()=>j.filter(r=>m(e,r.name)),[e]),y=i.length>0||n.length>0;return a.jsxs($,{query:e,onQueryChange:d,children:[a.jsx(w,{children:a.jsxs(c,{children:[a.jsx(C,{value:e,onChange:d,placeholder:"Buscar comercios o rubros"}),a.jsx(F,{"aria-label":"Filtros rápidos",children:v.map(r=>a.jsx(k,{type:"button",onClick:()=>u(r.id),"data-active":p===r.id,children:r.label},r.id))})]})}),n.length>0&&a.jsx(h,{children:a.jsxs(c,{children:[a.jsx(g,{title:"Categorías",subtitle:"Elegí un rubro para filtrar."}),a.jsx(R,{"aria-label":"Categorías",children:n.map((r,l)=>a.jsx(M,{id:r.id,name:r.name,to:`/comercios?rubro=${r.id}`,priority:l<5},r.id))})]})}),a.jsx(h,{children:a.jsx(c,{children:i.length>0?a.jsxs(a.Fragment,{children:[a.jsxs(O,{children:[a.jsx(g,{title:"Negocios",chip:`${i.length}`,subtitle:"Locales activos cerca tuyo."}),a.jsxs(I,{children:[a.jsx(Q,{htmlFor:"orden-negocios",children:"Ordenar por"}),a.jsx(T,{id:"orden-negocios",value:s,onChange:r=>x(r.target.value),children:E.map(r=>a.jsx("option",{value:r.id,children:r.label},r.id))})]})]}),a.jsx(N,{children:i.map((r,l)=>a.jsx(P,{id:r.id,name:r.name,category:r.category,categoryId:r.id,to:`/comercios/${r.id}`,distanceKm:r.distanceKm,rating:r.rating,openNow:r.openNow,premium:r.premium,priority:l<4},r.id))})]}):a.jsx(q,{icon:z,title:"Sin negocios",text:y?"Probá cambiando el filtro.":`No encontramos negocios para "${e}".`,dashed:!0})})})]})}export{L as StoresDirectoryScreen};
