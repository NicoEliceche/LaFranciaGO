import{h as R,bl as w,j as e,M as k,C as T,S as A,e as E,E as L,p as V,q as $,r as p,a as B,b as I}from"./index-DdSdXbrb.js";import{L as D,r as h}from"./react-6hK8W6IX.js";import{q as o}from"./estilos-DzHAJWDP.js";import{s as G,F as O,v as Q,aO as H,aQ as U,r as F,t as _,aR as J,ay as K,aB as W}from"./iconos-D4KLLVJ2.js";const X=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: ${({theme:a})=>a.spacing[2]};
`,m=o(D)`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.border};
  background: ${({theme:a})=>a.color.surface};
  color: inherit;
  text-decoration: none;
  transition:
    border-color 160ms ease,
    transform 160ms ease;

  &:hover {
    border-color: ${({theme:a})=>a.color.primary};
  }

  /* Con algo pendiente se destaca; en cero queda apagada, porque no hay
     nada que hacer ahí. */
  &[data-hay='true'] {
    border-color: ${({theme:a})=>a.color.warning};
    background: rgba(217, 119, 6, 0.08);
  }
`,u=o.strong`
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size["2xl"]};
  line-height: 1;
  font-variant-numeric: tabular-nums;

  &[data-hay='true'] {
    color: ${({theme:a})=>a.color.warning};
  }

  &[data-hay='false'] {
    color: ${({theme:a})=>a.color.textMuted};
  }
`,x=o.span`
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.3;
`,q=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:a})=>a.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,d=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.border};
  background: ${({theme:a})=>a.color.surface};

  /* La comisión es lo que gana la plataforma: se distingue del resto. */
  &[data-destacado='true'] {
    border-color: ${({theme:a})=>a.color.primary};
    background: ${({theme:a})=>a.color.primarySoft};
  }
`,l=o.span`
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  font-weight: ${({theme:a})=>a.typography.weight.semibold};
`,c=o.strong`
  font-family: ${({theme:a})=>a.typography.fontFamily.heading};
  font-size: ${({theme:a})=>a.typography.size.xl};
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
`,y=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.xs};
  font-weight: ${({theme:a})=>a.typography.weight.bold};

  &[data-tono='sube'] { color: ${({theme:a})=>a.color.success}; }
  &[data-tono='baja'] { color: ${({theme:a})=>a.color.danger}; }
`,Y=o.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:a})=>a.color.border};

  &:last-child { border-bottom: 0; }
`,Z=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.sm};
    overflow-wrap: anywhere;
  }

  > span {
    color: ${({theme:a})=>a.color.textSoft};
    font-size: ${({theme:a})=>a.typography.size.xs};
  }
`,aa=o.div`
  display: grid;
  gap: 0.1rem;
  justify-items: end;
  text-align: right;

  > strong {
    font-family: ${({theme:a})=>a.typography.fontFamily.heading};
    font-size: ${({theme:a})=>a.typography.size.sm};
    font-variant-numeric: tabular-nums;
  }

  > span {
    color: ${({theme:a})=>a.color.textSoft};
    font-size: ${({theme:a})=>a.typography.size.xs};
  }
`,ea=o.div`
  display: flex;
  gap: 0.35rem;
`,M=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:a})=>a.radius.md};
  border: 1px solid ${({theme:a})=>a.color.border};
  background: transparent;
  color: ${({theme:a})=>a.color.textSoft};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({theme:a})=>a.color.primary};
    color: ${({theme:a})=>a.color.primary};
  }

  &[data-activo='true'] {
    border-color: ${({theme:a})=>a.color.warning};
    color: ${({theme:a})=>a.color.warning};
  }

  &[data-tono='danger']:hover {
    border-color: ${({theme:a})=>a.color.danger};
    color: ${({theme:a})=>a.color.danger};
  }
`,ra=o.span`
  padding: 0.1rem 0.45rem;
  border-radius: ${({theme:a})=>a.radius.full};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.textSoft};
  font-size: 0.65rem;
  font-weight: ${({theme:a})=>a.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &[data-estado='suspendido'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({theme:a})=>a.color.danger};
  }

  &[data-estado='pendiente'] {
    background: rgba(217, 119, 6, 0.14);
    color: ${({theme:a})=>a.color.warning};
  }
`,oa=6e4;function sa(a,t){if(t===0)return{texto:a>0?"sin comparación":"—",tono:"igual"};const n=Math.round((a-t)/t*100);return{texto:`${n>0?"+":""}${n}%`,tono:n>0?"sube":n<0?"baja":"igual"}}function v({actual:a,previo:t,contra:n}){const i=sa(a,t);return e.jsxs(y,{"data-tono":i.tono,children:[i.tono==="sube"?e.jsx(K,{size:13,"aria-hidden":"true"}):i.tono==="baja"?e.jsx(W,{size:13,"aria-hidden":"true"}):null,i.texto," ",n]})}function la(){const[a,t]=h.useState(null),[n,i]=h.useState(null),[N,z]=h.useState(!0),f=h.useCallback(async()=>{if(!R()){z(!1);return}try{t(await w.metricas()),i(null)}catch{i("No pudimos cargar los números. ¿Tenés cuenta de administración?")}finally{z(!1)}},[]);h.useEffect(()=>{f();const r=window.setInterval(()=>void f(),oa);return()=>window.clearInterval(r)},[f]);const S=async(r,C)=>{const P=a;t(j=>j&&{...j,comercios:j.comercios.map(b=>b.id===r?{...b,...C}:b)});try{await w.actualizarComercio(r,C)}catch{t(P),i("No pudimos guardar el cambio.")}};if(!a)return e.jsx(k,{showSearch:!1,children:e.jsx(T,{children:e.jsx(A,{children:n?e.jsx(E,{role:"alert","data-tono":"error",children:n}):N?null:e.jsx(L,{icon:G,title:"Sin datos",text:"Cuando entren pedidos vas a ver acá cómo viene la plataforma.",dashed:!0})})})});const{pendientes:s,reparto:g}=a;return e.jsx(k,{showSearch:!1,children:e.jsx(T,{children:e.jsx(A,{children:e.jsxs(V,{children:[e.jsx($,{title:"Administración",subtitle:"Cómo viene LaFranciaGO."}),n?e.jsx(E,{role:"alert","data-tono":"error",children:n}):null,e.jsxs(X,{children:[e.jsxs(m,{to:"/panel/admin/postulaciones","data-hay":s.postulaciones>0,children:[e.jsx(u,{"data-hay":s.postulaciones>0,children:s.postulaciones}),e.jsxs(x,{children:[e.jsx(O,{size:13,"aria-hidden":"true"})," Postulaciones sin revisar"]})]}),e.jsxs(m,{to:"/panel/admin","data-hay":s.pedidosTrabados>0,children:[e.jsx(u,{"data-hay":s.pedidosTrabados>0,children:s.pedidosTrabados}),e.jsxs(x,{children:[e.jsx(Q,{size:13,"aria-hidden":"true"})," Pedidos sin repartidor hace más de 2 h"]})]}),e.jsxs(m,{to:"/panel/admin","data-hay":s.fraccionamientos>0,children:[e.jsx(u,{"data-hay":s.fraccionamientos>0,children:s.fraccionamientos}),e.jsxs(x,{children:[e.jsx(H,{size:13,"aria-hidden":"true"})," Pedidos de fraccionamiento"]})]}),e.jsxs(m,{to:"/panel/admin","data-hay":s.comercios>0,children:[e.jsx(u,{"data-hay":s.comercios>0,children:s.comercios}),e.jsxs(x,{children:[e.jsx(U,{size:13,"aria-hidden":"true"})," Comercios sin aprobar"]})]}),e.jsxs(m,{to:"/panel/admin/registro",children:[e.jsx(u,{children:e.jsx(F,{size:20,"aria-hidden":"true"})}),e.jsxs(x,{children:[e.jsx(F,{size:13,"aria-hidden":"true"})," Registro de errores"]})]})]}),e.jsx($,{title:"Los números",subtitle:"Hoy y esta semana."}),e.jsxs(q,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Pedidos hoy"}),e.jsx(c,{children:a.hoy.pedidos}),e.jsx(v,{actual:a.hoy.pedidos,previo:a.ayer.pedidos,contra:"vs ayer"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Ventas hoy"}),e.jsx(c,{children:p(a.hoy.ventas)}),e.jsx(v,{actual:a.hoy.ventas,previo:a.ayer.ventas,contra:"vs ayer"})]}),e.jsxs(d,{"data-destacado":"true",children:[e.jsx(l,{children:"Comisión de la semana"}),e.jsx(c,{children:p(a.semana.comision)}),e.jsxs(y,{children:[p(a.comisionTotal)," en total"]})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Ticket promedio"}),e.jsx(c,{children:p(a.ticketPromedio)}),e.jsx(y,{children:"últimos 7 días"})]})]}),e.jsxs(q,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Ventas de la semana"}),e.jsx(c,{children:p(a.semana.ventas)}),e.jsx(v,{actual:a.semana.ventas,previo:a.semanaPrevia.ventas,contra:"vs la anterior"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Repartidores activos"}),e.jsx(c,{children:g.activos}),e.jsxs(y,{children:["de ",g.registrados," registrados"]})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Entregas de la semana"}),e.jsx(c,{children:g.entregasSemana})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Envíos en curso"}),e.jsx(c,{children:g.enCurso})]})]}),e.jsx($,{title:"Comercios",subtitle:"Lo que vendió cada uno en los últimos 30 días."}),e.jsx(B,{children:e.jsx(I,{children:a.comercios.map(r=>e.jsxs(Y,{children:[e.jsxs(Z,{children:[e.jsxs("strong",{children:[r.nombre,r.estado!=="aprobado"?e.jsxs(e.Fragment,{children:[" ",e.jsx(ra,{"data-estado":r.estado,children:r.estado})]}):null]}),e.jsx("span",{children:r.rubro})]}),e.jsxs(aa,{children:[e.jsx("strong",{children:p(r.ventas)}),e.jsxs("span",{children:[r.pedidos," ",r.pedidos===1?"pedido":"pedidos"]})]}),e.jsxs(ea,{children:[e.jsx(M,{type:"button","data-activo":r.premium,onClick:()=>void S(r.id,{premium:!r.premium}),"aria-label":r.premium?`Quitar destacado a ${r.nombre}`:`Destacar ${r.nombre}`,title:r.premium?"Quitar destacado":"Marcar como destacado",children:e.jsx(_,{size:15,"aria-hidden":"true",fill:r.premium?"currentColor":"none"})}),e.jsx(M,{type:"button","data-tono":"danger",onClick:()=>void S(r.id,{estado:r.estado==="suspendido"?"aprobado":"suspendido"}),"aria-label":r.estado==="suspendido"?`Reactivar ${r.nombre}`:`Suspender ${r.nombre}`,title:r.estado==="suspendido"?"Reactivar":"Suspender: deja de aparecer en el buscador",children:e.jsx(J,{size:15,"aria-hidden":"true"})})]})]},r.id))})})]})})})})}export{la as AdminPanelScreen};
