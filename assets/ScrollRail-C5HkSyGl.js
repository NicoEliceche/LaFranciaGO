import{q as c,a7 as x,j as n,a8 as w,a4 as k}from"./index-CEnDCpoj.js";import{r as a}from"./react-Clk3ySf9.js";const y=c.div`
  position: relative;
  min-width: 0;
`,E=c.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`,u=c.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  box-shadow: ${({theme:e})=>e.shadow.md};
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 180ms ease, transform 180ms ease;

  ${x};

  /* Área táctil cómoda sin agrandar el círculo. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }

  &[data-side='left'] {
    left: -0.35rem;
  }

  &[data-side='right'] {
    right: -0.35rem;
  }

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
  }

  /* Degradé que insinúa que el contenido sigue. */
  &[data-side='left']::before,
  &[data-side='right']::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.25rem;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
  }

  &[data-side='left']::before {
    left: 0;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.color.background} 30%,
      transparent 100%
    );
  }

  &[data-side='right']::before {
    right: 0;
    background: linear-gradient(
      270deg,
      ${({theme:e})=>e.color.background} 30%,
      transparent 100%
    );
  }
`,f=4;function $({children:e,className:h,...p}){const i=a.useRef(null),[m,b]=a.useState(!1),[g,v]=a.useState(!1),o=a.useCallback(()=>{const r=i.current;if(!r)return;const{scrollLeft:t,scrollWidth:s,clientWidth:l}=r;b(t>f),v(t+l<s-f)},[]);a.useLayoutEffect(()=>{o()},[o,e]),a.useEffect(()=>{var s;const r=i.current;if(!r)return;r.addEventListener("scroll",o,{passive:!0}),r.addEventListener("scrollend",o,{passive:!0});const t=typeof ResizeObserver<"u"?new ResizeObserver(o):null;return t==null||t.observe(r),Array.from(r.children).forEach(l=>t==null?void 0:t.observe(l)),(s=document.fonts)==null||s.ready.then(o).catch(()=>{}),()=>{r.removeEventListener("scroll",o),r.removeEventListener("scrollend",o),t==null||t.disconnect()}},[o]);const d=r=>{const t=i.current;t&&(t.scrollBy({left:r*t.clientWidth*.7,behavior:"smooth"}),window.setTimeout(o,420))};return n.jsxs(y,{className:h,children:[m?n.jsx(u,{type:"button","data-side":"left",onClick:()=>d(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:n.jsx(w,{size:16,"aria-hidden":"true"})}):null,n.jsx(E,{ref:i,...p,children:e}),g?n.jsx(u,{type:"button","data-side":"right",onClick:()=>d(1),"aria-label":"Ver más filtros",tabIndex:-1,children:n.jsx(k,{size:16,"aria-hidden":"true"})}):null]})}export{$ as S};
