import{q as a,r as j,g as w,f as k,s as C,m as F,j as o,M as R,k as v,S as l,l as P,t as z,v as M,F as I,b as p,X as N,n as q,w as E,P as O,x as Q,E as L,p as B}from"./index-DmRIvc-c.js";import{r as s,f as K}from"./react-D_B_6qYb.js";const T=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }
`,X=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,D=a.label`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,G=a.select`
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
`,H=a.span`
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
`,U=a.button`
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
`;function J(){const[e,d]=s.useState(""),[g,m]=s.useState("all"),[u,x]=K(),{sortMode:n,setSortMode:b}=j(),c=u.get("rubro"),t=s.useMemo(()=>c?w.find(r=>r.id===c)??null:null,[c]),{stores:h,cargando:y}=k(),i=s.useMemo(()=>C(h.filter(r=>!t||r.categoryId===t.id).filter(r=>F(e,r.name,r.category,r.address,r.tags.join(" "))),n),[e,t,n,h]),f=()=>{const r=new URLSearchParams(u);r.delete("rubro"),x(r,{replace:!0})},S=y||i.length>0;return o.jsxs(R,{query:e,onQueryChange:d,children:[o.jsx(v,{children:o.jsxs(l,{children:[o.jsx(P,{value:e,onChange:d,placeholder:"Buscar comercios o rubros"}),o.jsx(z,{"aria-label":"Filtros rápidos",children:M.map(r=>o.jsx(I,{type:"button",onClick:()=>m(r.id),"data-active":g===r.id,children:r.label},r.id))})]})}),t?o.jsx(p,{children:o.jsx(l,{children:o.jsxs(H,{children:["Rubro: ",o.jsx("strong",{children:t.name}),o.jsx(U,{type:"button",onClick:f,"aria-label":"Quitar el filtro de rubro",children:o.jsx(N,{size:14,"aria-hidden":"true"})})]})})}):null,o.jsx(p,{children:o.jsx(l,{children:i.length>0?o.jsxs(o.Fragment,{children:[o.jsxs(T,{children:[o.jsx(q,{title:"Negocios",chip:`${i.length}`,subtitle:"Locales activos cerca tuyo."}),o.jsxs(X,{children:[o.jsx(D,{htmlFor:"orden-negocios",children:"Ordenar por"}),o.jsx(G,{id:"orden-negocios",value:n,onChange:r=>b(r.target.value),children:E.map(r=>o.jsx("option",{value:r.id,children:r.label},r.id))})]})]}),o.jsx(O,{children:i.map((r,$)=>o.jsx(Q,{id:r.id,name:r.name,category:r.category,categoryId:r.id,to:`/comercios/${r.id}`,distanceKm:r.distanceKm,rating:r.rating,openNow:r.openNow,premium:r.premium,priority:$<4},r.id))})]}):o.jsx(L,{icon:B,title:"Sin negocios",text:S?"Probá cambiando el filtro.":`No encontramos negocios para "${e}".`,dashed:!0})})})]})}export{J as StoresDirectoryScreen};
