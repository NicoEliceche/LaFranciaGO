import{q as a,u as S,c as $,r as j,s as w,m as k,j as o,M as C,S as F,a as l,b as R,g as v,h as P,F as z,C as u,X as M,d as I,i as N,P as q,k as E,E as O,f as Q}from"./index-U-wdHHrK.js";import{r as s,e as L}from"./react-B1kPYQQd.js";const B=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }
`,K=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,T=a.label`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,X=a.select`
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
`,D=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[1]} 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,G=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.text};
  }
`;function _(){const[e,d]=s.useState(""),[m,p]=s.useState("all"),[h,g]=L(),{sortMode:n,setSortMode:x}=S(),c=h.get("rubro"),t=s.useMemo(()=>c?$.find(r=>r.id===c)??null:null,[c]),i=s.useMemo(()=>j(w.filter(r=>!t||r.categoryId===t.id).filter(r=>k(e,r.name,r.category,r.address,r.tags.join(" "))),n),[e,t,n]),b=()=>{const r=new URLSearchParams(h);r.delete("rubro"),g(r,{replace:!0})},y=i.length>0;return o.jsxs(C,{query:e,onQueryChange:d,children:[o.jsx(F,{children:o.jsxs(l,{children:[o.jsx(R,{value:e,onChange:d,placeholder:"Buscar comercios o rubros"}),o.jsx(v,{"aria-label":"Filtros rápidos",children:P.map(r=>o.jsx(z,{type:"button",onClick:()=>p(r.id),"data-active":m===r.id,children:r.label},r.id))})]})}),t?o.jsx(u,{children:o.jsx(l,{children:o.jsxs(D,{children:["Rubro: ",o.jsx("strong",{children:t.name}),o.jsx(G,{type:"button",onClick:b,"aria-label":"Quitar el filtro de rubro",children:o.jsx(M,{size:14,"aria-hidden":"true"})})]})})}):null,o.jsx(u,{children:o.jsx(l,{children:i.length>0?o.jsxs(o.Fragment,{children:[o.jsxs(B,{children:[o.jsx(I,{title:"Negocios",chip:`${i.length}`,subtitle:"Locales activos cerca tuyo."}),o.jsxs(K,{children:[o.jsx(T,{htmlFor:"orden-negocios",children:"Ordenar por"}),o.jsx(X,{id:"orden-negocios",value:n,onChange:r=>x(r.target.value),children:N.map(r=>o.jsx("option",{value:r.id,children:r.label},r.id))})]})]}),o.jsx(q,{children:i.map((r,f)=>o.jsx(E,{id:r.id,name:r.name,category:r.category,categoryId:r.id,to:`/comercios/${r.id}`,distanceKm:r.distanceKm,rating:r.rating,openNow:r.openNow,premium:r.premium,priority:f<4},r.id))})]}):o.jsx(O,{icon:Q,title:"Sin negocios",text:y?"Probá cambiando el filtro.":`No encontramos negocios para "${e}".`,dashed:!0})})})]})}export{_ as StoresDirectoryScreen};
