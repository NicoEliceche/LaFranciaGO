import{c as k,q as o,h as L,b4 as w,j as e,M as A,b as T,S as M,E as V,k as R,l as $,b5 as B,Z as p,d as I,e as D,$ as G}from"./index-Dp3RR3Le.js";import{L as H,r as h}from"./react-D_B_6qYb.js";import{A as E}from"./AuthScreenStyled-DZ2Dt5jv.js";import{B as O}from"./bar-chart-3-DglD278F.js";import{S as Q}from"./split-CRW9PPZ6.js";import{T as Z,a as U}from"./trending-up-jdj8wfe0.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=k("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=k("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=k("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]),W=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: ${({theme:a})=>a.spacing[2]};
`,g=o(H)`
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
`,x=o.strong`
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
`,y=o.span`
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.3;
`,F=o.div`
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
`,j=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.xs};
  font-weight: ${({theme:a})=>a.typography.weight.bold};

  &[data-tono='sube'] { color: ${({theme:a})=>a.color.success}; }
  &[data-tono='baja'] { color: ${({theme:a})=>a.color.danger}; }
`,X=o.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:a})=>a.color.border};

  &:last-child { border-bottom: 0; }
`,Y=o.div`
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
`,q=o.button`
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
`,oa=6e4;function sa(a,t){if(t===0)return{texto:a>0?"sin comparación":"—",tono:"igual"};const n=Math.round((a-t)/t*100);return{texto:`${n>0?"+":""}${n}%`,tono:n>0?"sube":n<0?"baja":"igual"}}function v({actual:a,previo:t,contra:n}){const i=sa(a,t);return e.jsxs(j,{"data-tono":i.tono,children:[i.tono==="sube"?e.jsx(Z,{size:13,"aria-hidden":"true"}):i.tono==="baja"?e.jsx(U,{size:13,"aria-hidden":"true"}):null,i.texto," ",n]})}function pa(){const[a,t]=h.useState(null),[n,i]=h.useState(null),[N,z]=h.useState(!0),f=h.useCallback(async()=>{if(!L()){z(!1);return}try{t(await w.metricas()),i(null)}catch{i("No pudimos cargar los números. ¿Tenés cuenta de administración?")}finally{z(!1)}},[]);h.useEffect(()=>{f();const r=window.setInterval(()=>void f(),oa);return()=>window.clearInterval(r)},[f]);const S=async(r,C)=>{const P=a;t(u=>u&&{...u,comercios:u.comercios.map(b=>b.id===r?{...b,...C}:b)});try{await w.actualizarComercio(r,C)}catch{t(P),i("No pudimos guardar el cambio.")}};if(!a)return e.jsx(A,{showSearch:!1,children:e.jsx(T,{children:e.jsx(M,{children:n?e.jsx(E,{role:"alert","data-tono":"error",children:n}):N?null:e.jsx(V,{icon:O,title:"Sin datos",text:"Cuando entren pedidos vas a ver acá cómo viene la plataforma.",dashed:!0})})})});const{pendientes:s,reparto:m}=a;return e.jsx(A,{showSearch:!1,children:e.jsx(T,{children:e.jsx(M,{children:e.jsxs(R,{children:[e.jsx($,{title:"Administración",subtitle:"Cómo viene LaFranciaGO."}),n?e.jsx(E,{role:"alert","data-tono":"error",children:n}):null,e.jsxs(W,{children:[e.jsxs(g,{to:"/panel/admin/postulaciones","data-hay":s.postulaciones>0,children:[e.jsx(x,{"data-hay":s.postulaciones>0,children:s.postulaciones}),e.jsxs(y,{children:[e.jsx(K,{size:13,"aria-hidden":"true"})," Postulaciones sin revisar"]})]}),e.jsxs(g,{to:"/panel/admin","data-hay":s.pedidosTrabados>0,children:[e.jsx(x,{"data-hay":s.pedidosTrabados>0,children:s.pedidosTrabados}),e.jsxs(y,{children:[e.jsx(B,{size:13,"aria-hidden":"true"})," Pedidos sin repartidor hace más de 2 h"]})]}),e.jsxs(g,{to:"/panel/admin","data-hay":s.fraccionamientos>0,children:[e.jsx(x,{"data-hay":s.fraccionamientos>0,children:s.fraccionamientos}),e.jsxs(y,{children:[e.jsx(Q,{size:13,"aria-hidden":"true"})," Pedidos de fraccionamiento"]})]}),e.jsxs(g,{to:"/panel/admin","data-hay":s.comercios>0,children:[e.jsx(x,{"data-hay":s.comercios>0,children:s.comercios}),e.jsxs(y,{children:[e.jsx(_,{size:13,"aria-hidden":"true"})," Comercios sin aprobar"]})]})]}),e.jsx($,{title:"Los números",subtitle:"Hoy y esta semana."}),e.jsxs(F,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Pedidos hoy"}),e.jsx(c,{children:a.hoy.pedidos}),e.jsx(v,{actual:a.hoy.pedidos,previo:a.ayer.pedidos,contra:"vs ayer"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Ventas hoy"}),e.jsx(c,{children:p(a.hoy.ventas)}),e.jsx(v,{actual:a.hoy.ventas,previo:a.ayer.ventas,contra:"vs ayer"})]}),e.jsxs(d,{"data-destacado":"true",children:[e.jsx(l,{children:"Comisión de la semana"}),e.jsx(c,{children:p(a.semana.comision)}),e.jsxs(j,{children:[p(a.comisionTotal)," en total"]})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Ticket promedio"}),e.jsx(c,{children:p(a.ticketPromedio)}),e.jsx(j,{children:"últimos 7 días"})]})]}),e.jsxs(F,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Ventas de la semana"}),e.jsx(c,{children:p(a.semana.ventas)}),e.jsx(v,{actual:a.semana.ventas,previo:a.semanaPrevia.ventas,contra:"vs la anterior"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Repartidores activos"}),e.jsx(c,{children:m.activos}),e.jsxs(j,{children:["de ",m.registrados," registrados"]})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Entregas de la semana"}),e.jsx(c,{children:m.entregasSemana})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Envíos en curso"}),e.jsx(c,{children:m.enCurso})]})]}),e.jsx($,{title:"Comercios",subtitle:"Lo que vendió cada uno en los últimos 30 días."}),e.jsx(I,{children:e.jsx(D,{children:a.comercios.map(r=>e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsxs("strong",{children:[r.nombre,r.estado!=="aprobado"?e.jsxs(e.Fragment,{children:[" ",e.jsx(ra,{"data-estado":r.estado,children:r.estado})]}):null]}),e.jsx("span",{children:r.rubro})]}),e.jsxs(aa,{children:[e.jsx("strong",{children:p(r.ventas)}),e.jsxs("span",{children:[r.pedidos," ",r.pedidos===1?"pedido":"pedidos"]})]}),e.jsxs(ea,{children:[e.jsx(q,{type:"button","data-activo":r.premium,onClick:()=>void S(r.id,{premium:!r.premium}),"aria-label":r.premium?`Quitar destacado a ${r.nombre}`:`Destacar ${r.nombre}`,title:r.premium?"Quitar destacado":"Marcar como destacado",children:e.jsx(G,{size:15,"aria-hidden":"true",fill:r.premium?"currentColor":"none"})}),e.jsx(q,{type:"button","data-tono":"danger",onClick:()=>void S(r.id,{estado:r.estado==="suspendido"?"aprobado":"suspendido"}),"aria-label":r.estado==="suspendido"?`Reactivar ${r.nombre}`:`Suspender ${r.nombre}`,title:r.estado==="suspendido"?"Reactivar":"Suspender: deja de aparecer en el buscador",children:e.jsx(J,{size:15,"aria-hidden":"true"})})]})]},r.id))})})]})})})})}export{pa as AdminPanelScreen};
