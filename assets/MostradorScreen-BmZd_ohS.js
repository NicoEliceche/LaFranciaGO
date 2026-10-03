import{bo as O,j as e}from"./index-34ufUm0e.js";import{r as t}from"./react-CKwpxk66.js";import{G as P}from"./GestionFrame-VXuo1cc-.js";import{q as d}from"./estilos-D2nr0glO.js";import{Z as W,aO as k,aP as B,aQ as J,aL as I,aR as Z,aS as H,aT as K,aU as X}from"./iconos-NomGb_FP.js";import{T as Y,a as y}from"./TablaStyled-DCaoFXUg.js";import{A as M,P as h,T as x,L as _,b as q,F as $,a as N,V as ee,C as w}from"./CajaScreenStyled-C-cjaW4y.js";const R=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[3]};
  border-radius: ${({theme:a})=>a.radius.lg};
  border: 1px solid ${({theme:a})=>a.color.border};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.sm};
  font-weight: ${({theme:a})=>a.typography.weight.semibold};
  line-height: 1.45;

  > svg {
    flex: 0 0 auto;
  }

  &[data-estado='bien'] {
    border-color: color-mix(in srgb, ${({theme:a})=>a.color.success} 40%, transparent);
    background: color-mix(in srgb, ${({theme:a})=>a.color.success} 12%, transparent);
    color: ${({theme:a})=>a.color.success};
  }

  &[data-estado='justo'] {
    border-color: color-mix(in srgb, ${({theme:a})=>a.color.warning} 42%, transparent);
    background: color-mix(in srgb, ${({theme:a})=>a.color.warning} 14%, transparent);
    color: ${({theme:a})=>a.color.warning};
  }

  &[data-estado='corto'] {
    border-color: color-mix(in srgb, ${({theme:a})=>a.color.danger} 40%, transparent);
    background: color-mix(in srgb, ${({theme:a})=>a.color.danger} 12%, transparent);
    color: ${({theme:a})=>a.color.danger};
  }
`,ae=d.ul`
  display: grid;
  gap: ${({theme:a})=>a.spacing[2]};
  margin: ${({theme:a})=>a.spacing[3]} 0;
  padding: 0;
  list-style: none;
`,re=d.li`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:a})=>a.spacing[3]};
  padding: ${({theme:a})=>a.spacing[3]};
  border: 1px solid ${({theme:a})=>a.color.border};
  border-radius: ${({theme:a})=>a.radius.lg};

  /* Lo que hay que atender se despega del resto. */
  &[data-estado='corto'] {
    border-color: color-mix(in srgb, ${({theme:a})=>a.color.danger} 38%, transparent);
  }
`,oe=d.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:a})=>a.radius.md};
  background: ${({theme:a})=>a.color.surfaceMuted};
  color: ${({theme:a})=>a.color.textMuted};

  &[data-estado='bien'] {
    color: ${({theme:a})=>a.color.success};
  }

  &[data-estado='justo'] {
    color: ${({theme:a})=>a.color.warning};
  }

  &[data-estado='corto'] {
    color: ${({theme:a})=>a.color.danger};
  }
`,se=d.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,ne=d.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 ${({theme:a})=>a.spacing[2]};

  > span {
    color: ${({theme:a})=>a.color.textMuted};
    font-size: ${({theme:a})=>a.typography.size.sm};
    /* Los números de memoria y disco se comparan de un vistazo. */
    font-variant-numeric: tabular-nums;
  }
`,ie=d.strong`
  font-size: ${({theme:a})=>a.typography.size.sm};
`,T=d.p`
  margin: 0;
  color: ${({theme:a})=>a.color.textSoft};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.45;
  overflow-wrap: anywhere;
`,te=d.p`
  margin: 0.15rem 0 0;
  color: ${({theme:a})=>a.color.textMuted};
  font-size: ${({theme:a})=>a.typography.size.xs};
  line-height: 1.5;
  max-width: 60ch;
`,V={bien:J,justo:k,corto:B,desconocido:k},le={bien:"Esta computadora está bien para el mostrador.",justo:"Esta computadora anda, pero hay algo que conviene mejorar.",corto:"Esta computadora se queda corta para trabajar cómodo.",desconocido:"No pudimos revisar todo."},F={corto:0,justo:1,desconocido:2,bien:3};function de(){const[a,o]=t.useState(null),[g,m]=t.useState(!0);if(t.useEffect(()=>{var c;const s=(c=window.lafranciagoEscritorio)==null?void 0:c.equipo;if(!s){m(!1);return}let l=!0;return s().then(j=>{l&&o(j)}).catch(()=>{}).finally(()=>{l&&m(!1)}),()=>{l=!1}},[]),!O())return null;if(g)return e.jsxs(R,{"data-estado":"desconocido",children:[e.jsx(W,{size:18,"aria-hidden":"true"}),"Revisando esta computadora…"]});if(!a)return null;const E=V[a.resumen],n=[...a.puntos].sort((s,l)=>F[s.estado]-F[l.estado]);return e.jsxs(e.Fragment,{children:[e.jsxs(R,{"data-estado":a.resumen,role:"status",children:[e.jsx(E,{size:18,"aria-hidden":"true"}),le[a.resumen]]}),e.jsx(ae,{children:n.map(s=>{const l=V[s.estado],c=s.consejo[s.estado];return e.jsxs(re,{"data-estado":s.estado,children:[e.jsx(oe,{"data-estado":s.estado,children:e.jsx(l,{size:17,"aria-hidden":"true"})}),e.jsxs(se,{children:[e.jsxs(ne,{children:[e.jsx(ie,{children:s.titulo}),e.jsxs("span",{children:[s.tiene,s.estado!=="bien"?` · se recomienda ${s.recomendado}`:null]})]}),s.detalle?e.jsx(T,{children:s.detalle}):null,c&&s.estado!=="bien"?e.jsx(te,{children:c}):null]})]},s.id)})}),e.jsxs(T,{children:[a.sistema," · ",a.procesador]})]})}const ce=a=>a?new Date(a).toLocaleString("es-AR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"—";function fe(){const a=O(),[o,g]=t.useState(null),[m,E]=t.useState([]),[n,s]=t.useState(null),[l,c]=t.useState(""),[j,u]=t.useState(null),[z,p]=t.useState(!1),f=t.useCallback(async()=>{var i,v,S,C;const r=window.lafranciagoEscritorio;if(r)try{const[L,Q,U,A]=await Promise.all([((i=r.ajustes)==null?void 0:i.call(r))??Promise.resolve(null),((v=r.impresoras)==null?void 0:v.call(r))??Promise.resolve([]),((S=r.pendientes)==null?void 0:S.call(r))??Promise.resolve(null),((C=r.info)==null?void 0:C.call(r))??Promise.resolve(null)]);L&&g(L),E(Q),s(U),A&&c(A.version)}catch{u("No pudimos leer la configuración de esta computadora.")}},[]);t.useEffect(()=>{f();const r=window.setInterval(()=>void f(),15e3);return()=>window.clearInterval(r)},[f]);const b=async r=>{const i=window.lafranciagoEscritorio;if(i!=null&&i.guardarAjustes){p(!0);try{const v=await i.guardarAjustes(r);g(v),u("Listo, quedó guardado.")}catch{u("No pudimos guardar el cambio.")}finally{p(!1)}}},D=async()=>{const r=window.lafranciagoEscritorio;if(r!=null&&r.probarImpresora){p(!0),u(null);try{const i=await r.probarImpresora(o==null?void 0:o.impresora);u(i.ok?"Mandamos una hoja de prueba. Fijate si salió.":`No se pudo imprimir: ${i.error}`)}finally{p(!1)}}},G=async()=>{const r=window.lafranciagoEscritorio;if(r!=null&&r.sincronizar){p(!0),u(null);try{const i=await r.sincronizar();u(i.subidas>0?`Subieron ${i.subidas} ventas. Quedan ${i.pendientes}.`:i.pendientes>0?"No pudimos subirlas todavía. Reintenta solo cuando vuelva internet.":"No había nada esperando."),await f()}finally{p(!1)}}};return a?e.jsxs(P,{titulo:"Este mostrador",children:[j?e.jsx(M,{role:"status",children:j}):null,e.jsxs(Y,{children:[e.jsxs(y,{"data-tono":n!=null&&n.cantidad?"debe":"cobrado",children:[e.jsx("span",{children:"Ventas esperando subir"}),e.jsx("strong",{children:(n==null?void 0:n.cantidad)??0})]}),e.jsxs(y,{children:[e.jsx("span",{children:"La más vieja"}),e.jsx("strong",{style:{fontSize:"0.95rem"},children:ce((n==null?void 0:n.masVieja)??null)})]}),e.jsxs(y,{"data-tono":n!=null&&n.conError?"debe":void 0,children:[e.jsx("span",{children:"Con problema"}),e.jsx("strong",{children:(n==null?void 0:n.conError)??0})]}),e.jsxs(y,{children:[e.jsx("span",{children:"Esta caja"}),e.jsx("strong",{style:{fontSize:"1rem"},children:(o==null?void 0:o.puesto)??"—"})]})]}),n&&n.cantidad>0?e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(Z,{size:16,"aria-hidden":"true"}),"Ventas guardadas en esta computadora"]}),e.jsx("p",{style:{margin:"0 0 0.75rem",fontSize:"0.85rem",opacity:.75},children:"Se hicieron sin internet y todavía no llegaron al sistema. Suben solas cuando vuelve la conexión; no hace falta hacer nada."}),e.jsx($,{children:e.jsxs(N,{type:"button",onClick:G,disabled:z,"data-tono":"fuerte",children:[e.jsx(H,{size:15,"aria-hidden":"true"})," Intentar ahora"]})})]}):null,e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(K,{size:16,"aria-hidden":"true"}),"La impresora del ticket"]}),m.length===0?e.jsx(ee,{children:"Windows no ve ninguna impresora instalada."}):e.jsxs($,{children:[e.jsxs(w,{children:[e.jsx("span",{children:"Cuál usar"}),e.jsxs("select",{value:(o==null?void 0:o.impresora)??"",onChange:r=>void b({impresora:r.target.value}),children:[e.jsx("option",{value:"",children:"La que Windows tiene por defecto"}),m.map(r=>e.jsxs("option",{value:r.nombre,children:[r.nombre,r.predeterminada?" (la de siempre)":""]},r.nombre))]})]}),e.jsx(N,{type:"button",onClick:D,disabled:z,children:"Imprimir una prueba"})]}),e.jsxs($,{children:[e.jsxs(w,{children:[e.jsx("span",{children:"Al terminar la venta"}),e.jsxs("select",{value:o!=null&&o.imprimirSolo?"si":"no",onChange:r=>void b({imprimirSolo:r.target.value==="si"}),children:[e.jsx("option",{value:"si",children:"Imprimir el ticket sin preguntar"}),e.jsx("option",{value:"no",children:"No imprimir"})]})]}),e.jsxs(w,{children:[e.jsx("span",{children:"El cajón de la plata"}),e.jsxs("select",{value:o!=null&&o.abrirCajon?"si":"no",onChange:r=>void b({abrirCajon:r.target.value==="si"}),children:[e.jsx("option",{value:"si",children:"Se abre al imprimir"}),e.jsx("option",{value:"no",children:"No se abre"})]})]})]})]}),e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(I,{size:16,"aria-hidden":"true"}),"Cómo se llama esta caja"]}),e.jsx("p",{style:{margin:"0 0 0.75rem",fontSize:"0.85rem",opacity:.75},children:"Va adelante del número de cada venta hecha sin internet. Si hay dos cajas, cada una tiene que llamarse distinto para que no repitan números."}),e.jsx($,{children:e.jsxs(w,{children:[e.jsx("span",{children:"Nombre"}),e.jsx("input",{defaultValue:(o==null?void 0:o.puesto)??"",onBlur:r=>{const i=r.target.value.trim().toUpperCase();i&&i!==(o==null?void 0:o.puesto)&&b({puesto:i})},placeholder:"CAJA1"})]})}),l?e.jsxs("p",{style:{margin:"0.75rem 0 0",fontSize:"0.78rem",opacity:.6},children:["LaFranciaGO ",l]}):null]}),a?e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(X,{size:16,"aria-hidden":"true"}),"Cómo anda esta computadora"]}),e.jsx(de,{})]}):null]}):e.jsxs(P,{titulo:"Este mostrador",children:[e.jsx(M,{role:"note",children:"Acá se configura la computadora del negocio: qué impresora usa, cómo se llama esa caja y qué ventas le quedaron por subir. Se ve desde cualquier lado, pero sólo hay algo para tocar en la computadora del local."}),e.jsxs(h,{children:[e.jsxs(x,{children:[e.jsx(I,{size:16,"aria-hidden":"true"}),"Qué se configura ahí"]}),e.jsxs(_,{children:[e.jsx(q,{children:e.jsxs("div",{children:[e.jsx("strong",{children:"La impresora del ticket"}),e.jsx("span",{children:"Cuál de las que tiene Windows, y si abre el cajón al imprimir"})]})}),e.jsx(q,{children:e.jsxs("div",{children:[e.jsx("strong",{children:"El nombre de la caja"}),e.jsx("span",{children:"Va adelante del número de venta, para que dos cajas no lo repitan"})]})}),e.jsx(q,{children:e.jsxs("div",{children:[e.jsx("strong",{children:"Las ventas que esperan subir"}),e.jsx("span",{children:"Cuando no hay internet quedan guardadas y suben solas al volver"})]})})]})]})]})}export{fe as MostradorScreen};
