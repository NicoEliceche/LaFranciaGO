import{q as a,X as h,Y as f,Z as y,_ as x,$ as u,j as r,M as $,I as c,a as d,l as b,n as j,o as w,p as P,t as l,a0 as p,a1 as S,U as z,a2 as D,e as M,B as O}from"./index-CEnDCpoj.js";import{e as k,r as g}from"./react-Clk3ySf9.js";import{S as B,a as v}from"./SettingsList-Dd8yIFYj.js";const I=a.div`
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
`,F=a.div`
  display: grid;
  gap: 0.15rem;
  align-content: start;
  padding: ${({theme:e})=>e.spacing[3]};
`,R=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,C=a.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: ${({theme:e})=>e.color.text};
`,q=a.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,A=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.primary};
`,E=a.span`
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
`,L=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,N=a.span`
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
`,T=a.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`;function V(){const{productId:e=""}=k(),o=g.useMemo(()=>h(e),[e]),i=g.useMemo(()=>{var n;if((o==null?void 0:o.kind)==="comparison")return{name:o.comparison.product,category:o.comparison.category,bestPrice:o.bestOffer.price,bestStore:o.bestOffer.store,comparisonOffers:o.sortedOffers,badge:o.comparison.badge};const t=f(e)??y[0];return{name:t.product,category:t.category,bestPrice:t.price,bestStore:t.store,comparisonOffers:((n=x.find(m=>m.id===`${t.id}-compare`))==null?void 0:n.offers)??[],badge:t.highlight}},[o,e]),s=u(i.bestStore);return r.jsxs($,{showSearch:!1,children:[r.jsx(c,{children:r.jsx(d,{children:r.jsxs(I,{children:[r.jsxs(b,{$ratio:"4 / 3",children:[r.jsx(j,{src:w(s==null?void 0:s.id),alt:i.name,loading:"eager"}),i.badge?r.jsx(P,{children:r.jsx(N,{children:i.badge})}):null]}),r.jsxs(F,{children:[r.jsx(R,{children:i.category}),r.jsx(C,{children:i.name}),r.jsxs(q,{children:[r.jsx(A,{children:l(i.bestPrice)}),r.jsxs(E,{children:[r.jsx(p,{size:14,"aria-hidden":"true"}),i.bestStore]})]}),r.jsxs(L,{children:[r.jsxs(S,{to:"/carrito",children:[r.jsx(z,{size:18,"aria-hidden":"true"}),"Agregar al carrito"]}),s?r.jsx(D,{to:`/comercios/${s.id}`,children:"Ver comercio"}):null]})]})]})})}),i.comparisonOffers.length>0&&r.jsx(c,{children:r.jsxs(d,{children:[r.jsx(M,{title:"Dónde comprarlo",chip:"Precios",subtitle:"Mismo producto en distintos comercios."}),r.jsx(B,{children:i.comparisonOffers.map(t=>r.jsx(v,{icon:p,title:t.store,subtitle:`${O(t.distanceKm)} · ${t.eta}`,trailing:r.jsx(T,{children:l(t.price)})},t.store))})]})})]})}export{V as ProductDetailScreen};
