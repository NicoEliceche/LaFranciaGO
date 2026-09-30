import{h as q,bD as C,j as a,M as z,C as S,S as k,e as A,E as M,p as N,q as b,r as u,a as P,b as L}from"./index-BRSNxgXn.js";import{L as V,r as h}from"./react-CKwpxk66.js";import{q as r}from"./estilos-D2nr0glO.js";import{w as R,F as I,z as D,aT as G,aV as B,u as H,x as O,aX as Q,aC as U,aG as X}from"./iconos-B5b1KtU-.js";const _=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,J=r(V)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: inherit;
  text-decoration: none;
  transition:
    border-color 160ms ease,
    transform 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
  }

  /* Con algo pendiente se destaca; en cero queda apagada, porque no hay
     nada que hacer ahí. */
  &[data-hay='true'] {
    border-color: ${({theme:e})=>e.color.warning};
    background: rgba(217, 119, 6, 0.08);
  }
`,K=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  line-height: 1;
  font-variant-numeric: tabular-nums;

  &[data-hay='true'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-hay='false'] {
    color: ${({theme:e})=>e.color.textMuted};
  }
`,W=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,Y=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Z=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};

  /* Lo que pide atención se pinta, para que se vea sin contar números. */
  &[data-hay='true'] {
    background: rgba(245, 158, 11, 0.16);
    color: ${({theme:e})=>e.color.warning};
  }
`,E=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,i=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};

  /* La comisión es lo que gana la plataforma: se distingue del resto. */
  &[data-destacado='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,d=r.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,l=r.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
`,y=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &[data-tono='sube'] { color: ${({theme:e})=>e.color.success}; }
  &[data-tono='baja'] { color: ${({theme:e})=>e.color.danger}; }
`,ee=r.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child { border-bottom: 0; }
`,ae=r.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: anywhere;
  }

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,oe=r.div`
  display: grid;
  gap: 0.1rem;
  justify-items: end;
  text-align: right;

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-variant-numeric: tabular-nums;
  }

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,re=r.div`
  display: flex;
  gap: 0.35rem;
`,F=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-activo='true'] {
    border-color: ${({theme:e})=>e.color.warning};
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tono='danger']:hover {
    border-color: ${({theme:e})=>e.color.danger};
    color: ${({theme:e})=>e.color.danger};
  }
`,ne=r.span`
  padding: 0.1rem 0.45rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.65rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &[data-estado='suspendido'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-estado='pendiente'] {
    background: rgba(217, 119, 6, 0.14);
    color: ${({theme:e})=>e.color.warning};
  }
`,se=6e4;function te(e,s){if(s===0)return{texto:e>0?"sin comparación":"—",tono:"igual"};const n=Math.round((e-s)/s*100);return{texto:`${n>0?"+":""}${n}%`,tono:n>0?"sube":n<0?"baja":"igual"}}function $({actual:e,previo:s,contra:n}){const t=te(e,s);return a.jsxs(y,{"data-tono":t.tono,children:[t.tono==="sube"?a.jsx(U,{size:13,"aria-hidden":"true"}):t.tono==="baja"?a.jsx(X,{size:13,"aria-hidden":"true"}):null,t.texto," ",n]})}function pe(){const[e,s]=h.useState(null),[n,t]=h.useState(null),[T,v]=h.useState(!0),j=h.useCallback(async()=>{if(!q()){v(!1);return}try{s(await C.metricas()),t(null)}catch{t("No pudimos cargar los números. ¿Tenés cuenta de administración?")}finally{v(!1)}},[]);h.useEffect(()=>{j();const o=window.setInterval(()=>void j(),se);return()=>window.clearInterval(o)},[j]);const w=async(o,x)=>{const p=e;s(c=>c&&{...c,comercios:c.comercios.map(f=>f.id===o?{...f,...x}:f)});try{await C.actualizarComercio(o,x)}catch{s(p),t("No pudimos guardar el cambio.")}};if(!e)return a.jsx(z,{showSearch:!1,children:a.jsx(S,{children:a.jsx(k,{children:n?a.jsx(A,{role:"alert","data-tono":"error",children:n}):T?null:a.jsx(M,{icon:R,title:"Sin datos",text:"Cuando entren pedidos vas a ver acá cómo viene la plataforma.",dashed:!0})})})});const{pendientes:m,reparto:g}=e;return a.jsx(z,{showSearch:!1,children:a.jsx(S,{children:a.jsx(k,{children:a.jsxs(N,{children:[a.jsx(b,{title:"Administración",subtitle:"Cómo viene LaFranciaGO."}),n?a.jsx(A,{role:"alert","data-tono":"error",children:n}):null,a.jsx(_,{children:[{a:"/panel/admin/postulaciones",icono:I,cuantos:m.postulaciones,texto:"Postulaciones sin revisar"},{a:"/panel/admin",icono:D,cuantos:m.pedidosTrabados,texto:"Pedidos sin repartidor hace más de 2 h"},{a:"/panel/admin",icono:G,cuantos:m.fraccionamientos,texto:"Pedidos de fraccionamiento"},{a:"/panel/admin",icono:B,cuantos:m.comercios,texto:"Comercios sin aprobar"},{a:"/panel/admin/registro",icono:H,cuantos:m.erroresHoy??0,texto:"Errores en el registro (hoy)"}].map(({a:o,icono:x,cuantos:p,texto:c})=>a.jsxs(J,{to:o,"data-hay":p>0,children:[a.jsxs(Y,{children:[a.jsx(Z,{"data-hay":p>0,children:a.jsx(x,{size:26,"aria-hidden":"true"})}),a.jsx(K,{"data-hay":p>0,children:p})]}),a.jsx(W,{children:c})]},c))}),a.jsx(b,{title:"Los números",subtitle:"Hoy y esta semana."}),a.jsxs(E,{children:[a.jsxs(i,{children:[a.jsx(d,{children:"Pedidos hoy"}),a.jsx(l,{children:e.hoy.pedidos}),a.jsx($,{actual:e.hoy.pedidos,previo:e.ayer.pedidos,contra:"vs ayer"})]}),a.jsxs(i,{children:[a.jsx(d,{children:"Ventas hoy"}),a.jsx(l,{children:u(e.hoy.ventas)}),a.jsx($,{actual:e.hoy.ventas,previo:e.ayer.ventas,contra:"vs ayer"})]}),a.jsxs(i,{"data-destacado":"true",children:[a.jsx(d,{children:"Comisión de la semana"}),a.jsx(l,{children:u(e.semana.comision)}),a.jsxs(y,{children:[u(e.comisionTotal)," en total"]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"Ticket promedio"}),a.jsx(l,{children:u(e.ticketPromedio)}),a.jsx(y,{children:"últimos 7 días"})]})]}),a.jsxs(E,{children:[a.jsxs(i,{children:[a.jsx(d,{children:"Ventas de la semana"}),a.jsx(l,{children:u(e.semana.ventas)}),a.jsx($,{actual:e.semana.ventas,previo:e.semanaPrevia.ventas,contra:"vs la anterior"})]}),a.jsxs(i,{children:[a.jsx(d,{children:"Repartidores activos"}),a.jsx(l,{children:g.activos}),a.jsxs(y,{children:["de ",g.registrados," registrados"]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"Entregas de la semana"}),a.jsx(l,{children:g.entregasSemana})]}),a.jsxs(i,{children:[a.jsx(d,{children:"Envíos en curso"}),a.jsx(l,{children:g.enCurso})]})]}),a.jsx(b,{title:"Comercios",subtitle:"Lo que vendió cada uno en los últimos 30 días."}),a.jsx(P,{children:a.jsx(L,{children:e.comercios.map(o=>a.jsxs(ee,{children:[a.jsxs(ae,{children:[a.jsxs("strong",{children:[o.nombre,o.estado!=="aprobado"?a.jsxs(a.Fragment,{children:[" ",a.jsx(ne,{"data-estado":o.estado,children:o.estado})]}):null]}),a.jsx("span",{children:o.rubro})]}),a.jsxs(oe,{children:[a.jsx("strong",{children:u(o.ventas)}),a.jsxs("span",{children:[o.pedidos," ",o.pedidos===1?"pedido":"pedidos"]})]}),a.jsxs(re,{children:[a.jsx(F,{type:"button","data-activo":o.premium,onClick:()=>void w(o.id,{premium:!o.premium}),"aria-label":o.premium?`Quitar destacado a ${o.nombre}`:`Destacar ${o.nombre}`,title:o.premium?"Quitar destacado":"Marcar como destacado",children:a.jsx(O,{size:15,"aria-hidden":"true",fill:o.premium?"currentColor":"none"})}),a.jsx(F,{type:"button","data-tono":"danger",onClick:()=>void w(o.id,{estado:o.estado==="suspendido"?"aprobado":"suspendido"}),"aria-label":o.estado==="suspendido"?`Reactivar ${o.nombre}`:`Suspender ${o.nombre}`,title:o.estado==="suspendido"?"Reactivar":"Suspender: deja de aparecer en el buscador",children:a.jsx(Q,{size:15,"aria-hidden":"true"})})]})]},o.id))})})]})})})})}export{pe as AdminPanelScreen};
