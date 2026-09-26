import{a7 as h,a8 as f,a9 as y,aa as x,ab as u,j as r,M as $,a0 as c,S as d,Q as b,R as j,T as w,U as P,r as l,ac as S,ad as z,q as D,Y as M}from"./index-DsC-m32S.js";import{h as O,r as p}from"./react-6hK8W6IX.js";import{S as k,a as v}from"./SettingsList-BRIGzU4N.js";import{q as i}from"./estilos-DzHAJWDP.js";import{i as g,m as B}from"./iconos-DPkufriG.js";const F=i.div`
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
`,q=i.h1`
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
`,T=i.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.primary};
`,A=i.span`
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
`,N=i.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`;function Y(){const{productId:e=""}=O(),o=p.useMemo(()=>h(e),[e]),a=p.useMemo(()=>{var n;if((o==null?void 0:o.kind)==="comparison")return{name:o.comparison.product,category:o.comparison.category,bestPrice:o.bestOffer.price,bestStore:o.bestOffer.store,comparisonOffers:o.sortedOffers,badge:o.comparison.badge};const t=f(e)??y[0];return{name:t.product,category:t.category,bestPrice:t.price,bestStore:t.store,comparisonOffers:((n=x.find(m=>m.id===`${t.id}-compare`))==null?void 0:n.offers)??[],badge:t.highlight}},[o,e]),s=u(a.bestStore);return r.jsxs($,{showSearch:!1,children:[r.jsx(c,{children:r.jsx(d,{children:r.jsxs(F,{children:[r.jsxs(b,{$ratio:"4 / 3",children:[r.jsx(j,{src:w(s==null?void 0:s.id),alt:a.name,loading:"eager"}),a.badge?r.jsx(P,{children:r.jsx(L,{children:a.badge})}):null]}),r.jsxs(I,{children:[r.jsx(R,{children:a.category}),r.jsx(q,{children:a.name}),r.jsxs(C,{children:[r.jsx(T,{children:l(a.bestPrice)}),r.jsxs(A,{children:[r.jsx(g,{size:14,"aria-hidden":"true"}),a.bestStore]})]}),r.jsxs(E,{children:[r.jsxs(S,{to:"/carrito",children:[r.jsx(B,{size:18,"aria-hidden":"true"}),"Agregar al carrito"]}),s?r.jsx(z,{to:`/comercios/${s.id}`,children:"Ver comercio"}):null]})]})]})})}),a.comparisonOffers.length>0&&r.jsx(c,{children:r.jsxs(d,{children:[r.jsx(D,{title:"Dónde comprarlo",chip:"Precios",subtitle:"Mismo producto en distintos comercios."}),r.jsx(k,{children:a.comparisonOffers.map(t=>r.jsx(v,{icon:g,title:t.store,subtitle:`${M(t.distanceKm)} · ${t.eta}`,trailing:r.jsx(N,{children:l(t.price)})},t.store))})]})})]})}export{Y as ProductDetailScreen};
