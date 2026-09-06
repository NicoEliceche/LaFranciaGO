import{q as i,a5 as h,a6 as f,a7 as y,a8 as x,a9 as u,j as r,M as $,V as c,S as d,y as b,z as j,A as w,B as P,D as l,aa as p,ab as S,a4 as z,ac as D,l as M,N as O}from"./index-B4Hw2TNB.js";import{h as k,r as g}from"./react-D_B_6qYb.js";import{S as B,a as v}from"./SettingsList-DvrzoG3O.js";const F=i.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }
`,I=i.div`
  display: grid;
  gap: 0.15rem;
  align-content: start;
  padding: ${({theme:e})=>e.spacing[3]};
`,R=i.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,A=i.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: ${({theme:e})=>e.color.text};
`,C=i.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,N=i.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.primary};
`,q=i.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.85rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,E=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,L=i.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,T=i.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`;function G(){const{productId:e=""}=k(),a=g.useMemo(()=>h(e),[e]),o=g.useMemo(()=>{var n;if((a==null?void 0:a.kind)==="comparison")return{name:a.comparison.product,category:a.comparison.category,bestPrice:a.bestOffer.price,bestStore:a.bestOffer.store,comparisonOffers:a.sortedOffers,badge:a.comparison.badge};const t=f(e)??y[0];return{name:t.product,category:t.category,bestPrice:t.price,bestStore:t.store,comparisonOffers:((n=x.find(m=>m.id===`${t.id}-compare`))==null?void 0:n.offers)??[],badge:t.highlight}},[a,e]),s=u(o.bestStore);return r.jsxs($,{showSearch:!1,children:[r.jsx(c,{children:r.jsx(d,{children:r.jsxs(F,{children:[r.jsxs(b,{$ratio:"4 / 3",children:[r.jsx(j,{src:w(s==null?void 0:s.id),alt:o.name,loading:"eager"}),o.badge?r.jsx(P,{children:r.jsx(L,{children:o.badge})}):null]}),r.jsxs(I,{children:[r.jsx(R,{children:o.category}),r.jsx(A,{children:o.name}),r.jsxs(C,{children:[r.jsx(N,{children:l(o.bestPrice)}),r.jsxs(q,{children:[r.jsx(p,{size:14,"aria-hidden":"true"}),o.bestStore]})]}),r.jsxs(E,{children:[r.jsxs(S,{to:"/carrito",children:[r.jsx(z,{size:18,"aria-hidden":"true"}),"Agregar al carrito"]}),s?r.jsx(D,{to:`/comercios/${s.id}`,children:"Ver comercio"}):null]})]})]})})}),o.comparisonOffers.length>0&&r.jsx(c,{children:r.jsxs(d,{children:[r.jsx(M,{title:"Dónde comprarlo",chip:"Precios",subtitle:"Mismo producto en distintos comercios."}),r.jsx(B,{children:o.comparisonOffers.map(t=>r.jsx(v,{icon:p,title:t.store,subtitle:`${O(t.distanceKm)} · ${t.eta}`,trailing:r.jsx(T,{children:l(t.price)})},t.store))})]})})]})}export{G as ProductDetailScreen};
