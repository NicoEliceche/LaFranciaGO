import{q as a,F as w,v,t as F,G as R,H as k,w as C,j as o,M as P,x as z,S as l,y as I,I as M,J as N,K as O,b as g,X as Q,m as q,O as E,Q as K,R as L,V as T,E as B,D}from"./index-BYdsqWK_.js";import{r as s,f as G}from"./react-D_B_6qYb.js";const H=a.div`
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
`,J=a.label`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,U=a.select`
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
`,V=a.span`
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
`,_=a.button`
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
`;function Y(){const[e,d]=s.useState(""),[m,p]=s.useState("all"),[u,x]=G(),{sortMode:n,setSortMode:y}=w(),c=u.get("rubro"),t=s.useMemo(()=>c?v.find(r=>r.id===c)??null:null,[c]),{stores:h,cargando:b}=F(),{favoritos:f}=R(),i=s.useMemo(()=>k(h.filter(r=>!t||r.categoryId===t.id).filter(r=>C(e,r.name,r.category,r.address,r.tags.join(" "))),n),[e,t,n,h]),S=()=>{const r=new URLSearchParams(u);r.delete("rubro"),x(r,{replace:!0})},$=b||i.length>0;return o.jsxs(P,{query:e,onQueryChange:d,children:[o.jsx(z,{children:o.jsxs(l,{children:[o.jsx(I,{value:e,onChange:d,placeholder:"Buscar comercios o rubros"}),o.jsx(M,{"aria-label":"Filtros rápidos",children:N.map(r=>o.jsx(O,{type:"button",onClick:()=>p(r.id),"data-active":m===r.id,children:r.label},r.id))})]})}),t?o.jsx(g,{children:o.jsx(l,{children:o.jsxs(V,{children:["Rubro: ",o.jsx("strong",{children:t.name}),o.jsx(_,{type:"button",onClick:S,"aria-label":"Quitar el filtro de rubro",children:o.jsx(Q,{size:14,"aria-hidden":"true"})})]})})}):null,o.jsx(g,{children:o.jsx(l,{children:i.length>0?o.jsxs(o.Fragment,{children:[o.jsxs(H,{children:[o.jsx(q,{title:"Negocios",chip:`${i.length}`,subtitle:"Locales activos cerca tuyo."}),o.jsxs(X,{children:[o.jsx(J,{htmlFor:"orden-negocios",children:"Ordenar por"}),o.jsx(U,{id:"orden-negocios",value:n,onChange:r=>y(r.target.value),children:E.map(r=>o.jsx("option",{value:r.id,children:r.label},r.id))})]})]}),o.jsx(K,{children:i.map((r,j)=>o.jsx(L,{favorito:f.has(r.id),onToggleFavorito:T,id:r.id,name:r.name,category:r.category,categoryId:r.id,to:`/comercios/${r.id}`,distanceKm:r.distanceKm,rating:r.rating,openNow:r.openNow,premium:r.premium,priority:j<4},r.id))})]}):o.jsx(B,{icon:D,title:"Sin negocios",text:$?"Probá cambiando el filtro.":`No encontramos negocios para "${e}".`,dashed:!0})})})]})}export{Y as StoresDirectoryScreen};
