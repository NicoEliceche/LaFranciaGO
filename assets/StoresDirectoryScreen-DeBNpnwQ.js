import{q as a,t as w,l as v,k as F,v as k,w as C,m as R,j as o,M as P,n as z,S as l,o as M,x as I,y as N,F as q,b as g,X as E,p as O,z as Q,P as B,B as L,D as T,E as D,s as K}from"./index-BzywHFYN.js";import{r as s,f as X}from"./react-D_B_6qYb.js";const G=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }
`,H=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,U=a.label`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,_=a.select`
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
`,A=a.span`
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
`,J=a.button`
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
`;function Y(){const[e,d]=s.useState(""),[p,m]=s.useState("all"),[u,x]=X(),{sortMode:n,setSortMode:y}=w(),c=u.get("rubro"),t=s.useMemo(()=>c?v.find(r=>r.id===c)??null:null,[c]),{stores:h,cargando:b}=F(),{favoritos:f}=k(),i=s.useMemo(()=>C(h.filter(r=>!t||r.categoryId===t.id).filter(r=>R(e,r.name,r.category,r.address,r.tags.join(" "))),n),[e,t,n,h]),S=()=>{const r=new URLSearchParams(u);r.delete("rubro"),x(r,{replace:!0})},$=b||i.length>0;return o.jsxs(P,{query:e,onQueryChange:d,children:[o.jsx(z,{children:o.jsxs(l,{children:[o.jsx(M,{value:e,onChange:d,placeholder:"Buscar comercios o rubros"}),o.jsx(I,{"aria-label":"Filtros rápidos",children:N.map(r=>o.jsx(q,{type:"button",onClick:()=>m(r.id),"data-active":p===r.id,children:r.label},r.id))})]})}),t?o.jsx(g,{children:o.jsx(l,{children:o.jsxs(A,{children:["Rubro: ",o.jsx("strong",{children:t.name}),o.jsx(J,{type:"button",onClick:S,"aria-label":"Quitar el filtro de rubro",children:o.jsx(E,{size:14,"aria-hidden":"true"})})]})})}):null,o.jsx(g,{children:o.jsx(l,{children:i.length>0?o.jsxs(o.Fragment,{children:[o.jsxs(G,{children:[o.jsx(O,{title:"Negocios",chip:`${i.length}`,subtitle:"Locales activos cerca tuyo."}),o.jsxs(H,{children:[o.jsx(U,{htmlFor:"orden-negocios",children:"Ordenar por"}),o.jsx(_,{id:"orden-negocios",value:n,onChange:r=>y(r.target.value),children:Q.map(r=>o.jsx("option",{value:r.id,children:r.label},r.id))})]})]}),o.jsx(B,{children:i.map((r,j)=>o.jsx(L,{favorito:f.has(r.id),onToggleFavorito:T,id:r.id,name:r.name,category:r.category,categoryId:r.id,to:`/comercios/${r.id}`,distanceKm:r.distanceKm,rating:r.rating,openNow:r.openNow,premium:r.premium,priority:j<4},r.id))})]}):o.jsx(D,{icon:K,title:"Sin negocios",text:$?"Probá cambiando el filtro.":`No encontramos negocios para "${e}".`,dashed:!0})})})]})}export{Y as StoresDirectoryScreen};
