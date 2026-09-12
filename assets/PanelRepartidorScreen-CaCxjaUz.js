import{c as pe,j as a,C as he,X as ge,o as b,aq as Ce,q as i,E as F,m as R,n as me,d as H,e as G,T as K,B as fe,b8 as w,a as ae,r as Ee,t as ye,u as Pe,g as De,M as Te,b as Me,S as qe,N as Ne,P as _e}from"./index-CQSQA-do.js";import{r as t}from"./react-D_B_6qYb.js";import{u as Le}from"./useCurrentPosition-BYw6bfYw.js";import{C as Ve}from"./ChatPedidoDialog-BQcZfvWE.js";import{P as xe,a as be,b as je,c as $e}from"./PanelLoginDialogStyled-CDo90hae.js";import{E as Ae,a as oe}from"./ChatPedidoDialogStyled-DmEDcdrG.js";import{A as I,a as Re}from"./AuthScreenStyled-BSm8SxO3.js";import{g as Fe,M as Ie,q as _,r as L,s as V,t as A}from"./MiComercioScreenStyled-Bi9yKMRv.js";import{a as Be,R as Oe,b as Ue}from"./ResenaDialogStyled-CtgOBnjP.js";import{s as He}from"./saleUnits-CLP-TCsg.js";import{C as Ge}from"./car-BGdIJsN2.js";import{R as Ke}from"./refresh-cw-Erfd7dw1.js";import{S as Ze}from"./split-CJi5w1Cm.js";import"./formStyles-1BBAflVM.js";import"./MotivoDialog-F7AsI6bf.js";import"./send-BvFJ-14A.js";import"./info-CuQHs9dF.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=pe("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=pe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),te=900,re=2500;function Xe({open:e,pedidoId:n,distanciaKm:h,onCerrar:p,onCotizado:r}){const[l,f]=t.useState(""),[v,u]=t.useState(""),[s,y]=t.useState(!1),[z,c]=t.useState(null),g=typeof h=="number"?Math.round(re+h*te):null;if(t.useEffect(()=>{e&&(f(g!==null?String(g):""),u(""),c(null))},[e,g]),t.useEffect(()=>{if(!e)return;const j=k=>{k.key==="Escape"&&p()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[p,e]),!e)return null;const x=async j=>{j.preventDefault();const k=Number(l);if(!(!Number.isFinite(k)||k<=0||s)){y(!0),c(null);try{await Ce.cotizar(n,k,v.trim()||void 0),r(),p()}catch(D){c(D instanceof Error?D.message:"No pudimos enviar tu precio.")}finally{y(!1)}}};return a.jsx(xe,{role:"dialog","aria-modal":"true","aria-label":"Cotizar el flete",children:a.jsxs(be,{children:[a.jsxs(je,{children:[a.jsx(he,{children:"¿Cuánto cobrás?"}),a.jsx($e,{type:"button",onClick:p,"aria-label":"Cerrar",children:a.jsx(ge,{size:18,"aria-hidden":"true"})})]}),z?a.jsx(I,{role:"alert","data-tono":"error",children:z}):null,a.jsxs("form",{onSubmit:x,children:[a.jsxs(Fe,{children:[a.jsx("span",{children:"Tu precio"}),a.jsx("input",{type:"number",min:1,step:"1",value:l,autoFocus:!0,required:!0,onChange:j=>f(j.target.value)})]}),a.jsx(Be,{children:typeof h=="number"?`Son ${h} km. A ${b(te)} el kilómetro más ${b(re)} de base daría ${b(g??0)}, pero ponés lo que quieras.`:"No pudimos calcular la distancia. Fijate el detalle antes de poner precio."}),a.jsxs(Oe,{children:[a.jsx("span",{children:"¿Querés aclarar algo?"}),a.jsx(Ue,{value:v,maxLength:300,placeholder:"Lo llevo hoy a la tarde. Necesito una mano para cargar.",onChange:j=>u(j.target.value)})]}),a.jsxs(Ae,{children:[a.jsx(oe,{type:"button","data-tono":"suave",onClick:p,disabled:s,children:"Volver"}),a.jsx(oe,{type:"submit",disabled:s||l.trim()==="",children:s?"Enviando…":"Enviar mi precio"})]})]})]})})}const Je=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }
`,We=i.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  > svg {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Ye=i.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.success};
`,ea=i.small`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;function aa(e){if(!e)return"";const n=new Date(e.replace(" ","T")+"Z");return Number.isNaN(n.getTime())?"":`${n.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} · ${n.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function oa({esFletero:e}){const[n,h]=t.useState(null),[p,r]=t.useState(null),[l,f]=t.useState(!0);if(t.useEffect(()=>{let s=!0;return(async()=>{try{const z=await w.ganancias();s&&(h(z),r(null))}catch{s&&r("No pudimos cargar tus ganancias.")}finally{s&&f(!1)}})(),()=>{s=!1}},[]),p)return a.jsx(I,{role:"alert","data-tono":"error",children:p});if(!n)return l?null:a.jsx(F,{icon:Z,title:"Sin datos todavía",text:"Cuando entregues tu primer pedido vas a ver acá cuánto ganaste.",dashed:!0});const v=n.total.entregas>0?Math.round(n.total.gano/n.total.entregas):0,u=s=>`${s} ${s===1?e?"viaje":"entrega":e?"viajes":"entregas"}`;return a.jsxs(R,{children:[a.jsxs(Ie,{children:[a.jsxs(_,{children:[a.jsx(L,{children:"Ganaste hoy"}),a.jsx(V,{children:b(n.hoy.gano)}),a.jsx(A,{children:u(n.hoy.entregas)})]}),a.jsxs(_,{children:[a.jsx(L,{children:"Esta semana"}),a.jsx(V,{children:b(n.semana.gano)}),a.jsx(A,{children:u(n.semana.entregas)})]}),a.jsxs(_,{children:[a.jsx(L,{children:"Desde que empezaste"}),a.jsx(V,{children:b(n.total.gano)}),a.jsx(A,{children:u(n.total.entregas)})]}),a.jsxs(_,{children:[a.jsx(L,{children:"Promedio por viaje"}),a.jsx(V,{children:b(v)}),a.jsx(A,{children:"Sobre lo que ya entregaste"})]})]}),a.jsx(me,{title:e?"Tus viajes":"Lo que entregaste",subtitle:"Los últimos cincuenta, del más nuevo al más viejo."}),n.historial.length===0?a.jsx(F,{icon:Z,title:"Todavía no entregaste nada",text:"Cuando completes tu primer viaje lo vas a ver acá.",dashed:!0}):a.jsx(H,{children:a.jsx(G,{children:n.historial.map((s,y)=>a.jsxs(Je,{children:[a.jsxs(We,{children:[s.tipo==="flete"?a.jsx(K,{size:14,"aria-hidden":"true"}):a.jsx(fe,{size:14,"aria-hidden":"true"}),s.comercio," → ",s.direccion_texto]}),a.jsx(Ye,{children:b(s.gano)}),a.jsx(ea,{children:aa(s.entregado_en)})]},`${s.codigo}-${y}`))})})]})}const B=i.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,O=i.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,M=i.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,ta=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ra=i.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,sa=i.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
  padding-top: ${({theme:e})=>e.spacing[1]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`;function na({open:e,pedidoId:n,onClose:h,onTomar:p,esFletero:r=!1}){const[l,f]=t.useState(null),[v,u]=t.useState(null),[s,y]=t.useState(!1);if(t.useEffect(()=>{!e||!n||(f(null),u(null),w.detalle(n).then(f).catch(()=>u("No pudimos cargar el pedido.")))},[e,n]),t.useEffect(()=>{if(!e)return;const c=g=>{g.key==="Escape"&&h()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[h,e]),!e||!n)return null;const z=async()=>{y(!0),u(null);try{await p(n)}catch(c){u(c instanceof Error?c.message:`No pudimos tomar ${r?"el flete":"el pedido"}.`)}finally{y(!1)}};return a.jsx(xe,{onClick:h,role:"presentation",children:a.jsxs(be,{role:"dialog","aria-modal":"true","aria-label":r?"Detalle del flete":"Detalle del pedido",onClick:c=>c.stopPropagation(),children:[a.jsxs(je,{children:[a.jsxs("div",{children:[a.jsxs(he,{children:[r?"Flete":"Pedido"," ",(l==null?void 0:l.pedido.codigo)??""]}),a.jsx(ae,{children:"Mirá el detalle antes de tomarlo."})]}),a.jsx($e,{type:"button",onClick:h,"aria-label":"Cerrar",children:a.jsx(ge,{size:18,"aria-hidden":"true"})})]}),v?a.jsx(I,{role:"alert","data-tono":"error",children:v}):null,l?a.jsxs(a.Fragment,{children:[a.jsxs(B,{children:[a.jsxs(O,{children:[a.jsx(Ee,{size:15,"aria-hidden":"true"}),"Retirás en"]}),a.jsx(M,{children:l.pedido.comercio}),a.jsx(M,{"data-suave":!0,children:l.pedido.comercio_direccion})]}),a.jsxs(B,{children:[a.jsxs(O,{children:[a.jsx(ye,{size:15,"aria-hidden":"true"}),"Entregás en"]}),a.jsx(M,{children:l.pedido.direccion_texto}),a.jsxs(M,{"data-suave":!0,children:[l.pedido.cliente,l.pedido.cliente_telefono?` · ${l.pedido.cliente_telefono}`:""]})]}),a.jsxs(B,{children:[a.jsxs(O,{children:[a.jsx(Qe,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),l.items.map((c,g)=>a.jsxs(ta,{children:[a.jsxs(ra,{children:[c.nombre,a.jsxs("span",{children:[" · ",He(c.unidad_venta,c.escalon)]})]}),a.jsx("span",{children:b(c.subtotal)})]},`${c.nombre}-${g}`)),a.jsxs(sa,{children:[a.jsxs("span",{children:["Total ",r?"del flete":"del pedido"]}),a.jsx("strong",{children:b(l.pedido.total)})]}),l.pedido.metodo_pago?a.jsxs(M,{"data-suave":!0,children:["Paga con ",l.pedido.metodo_pago]}):null]}),a.jsx(Re,{type:"button",onClick:()=>void z(),disabled:s,children:s?"Tomando…":r?"Tomar flete":"Tomar pedido"})]}):a.jsx(ae,{children:"Cargando…"})]})})}const se=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  > span {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    min-width: 0;
  }
`,ne=i.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,ie=i.div`
  display: grid;
  gap: 0.1rem;
`,P=i.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,le=i.button`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ia=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;

  > svg {
    flex: 0 0 auto;
  }

  > span {
    flex: 1 1 auto;
  }

  > button {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    flex: 0 0 auto;
    min-height: 2rem;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    border-radius: ${({theme:e})=>e.radius.full};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.primary};
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    cursor: pointer;
  }
`,la=i.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,ca=i.span`
  flex: 1 1 0;
  display: grid;
  gap: 0.25rem;
  font-size: 0.65rem;
  color: ${({theme:e})=>e.color.textMuted};
  text-align: center;
  line-height: 1.2;

  &::before {
    content: '';
    display: block;
    height: 4px;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.border};
  }

  &[data-hecho='true'] {
    color: ${({theme:e})=>e.color.textSoft};

    &::before {
      background: ${({theme:e})=>e.color.primary};
    }
  }

  &[data-actual='true'] {
    color: ${({theme:e})=>e.color.primary};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,ce=i.button`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
  }

  /* Entregar es el paso que cierra el pedido: se distingue del resto para
     que no se toque de apuro creyendo que es "en camino". */
  &[data-final='true'] {
    background: ${({theme:e})=>e.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,da=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,U=i.button`
  flex: 1 1 0;
  min-height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activa='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,ua=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};

  > span {
    flex: 1 1 auto;
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,pa=i.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activo='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,de=i.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};

  &[data-entra='true'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-entra='false'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:e})=>e.color.warning};
  }
`,ha=i.button`
  width: 100%;
  min-height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px dashed ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 160ms ease, color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }
`,ga={disponibles:e=>e?"Fletes disponibles":"Pedidos disponibles",mios:()=>"Lo que estás llevando",ganancias:()=>"Cuánto ganaste"},ma={disponibles:e=>e?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.",mios:()=>"Marcá cada paso a medida que avanzás.",ganancias:()=>"Lo que te dejó cada viaje que entregaste."},fa=3e4,ya=2e4,q=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],xa={delivery:[{id:"moto",icono:fe},{id:"auto",icono:Ge}],fletero:[{id:"camioneta",icono:K},{id:"camion",icono:K}]},ue=e=>Math.max(0,q.findIndex(n=>n.estado===e));function La(){const{usuario:e}=Pe(),{status:n,error:h,locate:p}=Le(),[r,l]=t.useState(null),[f,v]=t.useState([]),[u,s]=t.useState(null),[y,z]=t.useState(!0),[c,g]=t.useState(null),[x,j]=t.useState(null),[k,D]=t.useState(null),[T,ve]=t.useState([]),[m,N]=t.useState("disponibles"),[Q,X]=t.useState(null),[E,J]=t.useState(null),$=(e==null?void 0:e.rol)==="fletero",W=$?"fletes":"pedidos",S=t.useCallback(async()=>{try{const[{pedidos:o,vehiculo:d},{envios:C}]=await Promise.all([w.disponibles(r==null?void 0:r.lat,r==null?void 0:r.lon),w.misEnvios()]);D(d),v(o),ve(C),s(null)}catch(o){s(o instanceof De&&o.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${W}.`)}finally{z(!1)}},[r,W]);t.useEffect(()=>{p(o=>l(o))},[p]),t.useEffect(()=>{S();const o=window.setInterval(()=>void S(),ya);return()=>window.clearInterval(o)},[S]),t.useEffect(()=>{if(!r)return;const o=()=>{w.actualizarUbicacion(r.lat,r.lon).catch(()=>{})};o();const d=window.setInterval(o,fa);return()=>window.clearInterval(d)},[r]);const we=async o=>{await w.tomar(o,r==null?void 0:r.lat,r==null?void 0:r.lon);const d=f.find(C=>C.id===o)??null;g(null),N("mios"),await S(),d&&j(d)},ze=async o=>{D(o);try{await w.elegirVehiculo(o,$?"fletero":"delivery"),await S()}catch{s("No pudimos guardar tu vehículo.")}},ke=async o=>{const d=Math.max(2,o.viajes??2);try{const{estado:C}=await w.pedirFraccionar(o.id,d);s(C==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await S()}catch{s("No pudimos pedir el fraccionamiento.")}},Se=async o=>{const d=q[ue(o.estado)+1];if(d){X(o.id);try{await w.avanzar(o.id,d.estado),await S()}catch{s("No pudimos actualizar el envío.")}finally{X(null)}}};return a.jsxs(Te,{showSearch:!1,children:[a.jsx(Me,{children:a.jsx(qe,{children:a.jsxs(R,{children:[a.jsx(me,{title:ga[m]($),chip:y||m==="ganancias"?void 0:`${m==="disponibles"?f.length:T.length}`,subtitle:ma[m]($)}),a.jsxs(ua,{children:[a.jsx("span",{children:"Trabajás con"}),(xa[$?"fletero":"delivery"]??[]).map(o=>{const d=o.icono;return a.jsxs(pa,{type:"button",onClick:()=>void ze(o.id),"data-activo":k===o.id,"aria-pressed":k===o.id,children:[a.jsx(d,{size:14,"aria-hidden":"true"}),Ne[o.id]]},o.id)})]}),a.jsxs(da,{children:[a.jsx(U,{type:"button",onClick:()=>N("disponibles"),"data-activa":m==="disponibles",children:"Disponibles"}),a.jsxs(U,{type:"button",onClick:()=>N("mios"),"data-activa":m==="mios",children:["Mis envíos",T.length>0?` (${T.length})`:""]}),a.jsx(U,{type:"button",onClick:()=>N("ganancias"),"data-activa":m==="ganancias",children:"Ganancias"})]}),u?a.jsx(I,{role:"alert","data-tono":"error",children:u}):null,m==="ganancias"?a.jsx(oa,{esFletero:$}):null,m==="disponibles"&&!r&&n!=="locating"?a.jsxs(ia,{children:[a.jsx(ye,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:h??"Sin tu ubicación no podemos ordenarlos por cercanía."}),a.jsxs("button",{type:"button",onClick:()=>p(o=>l(o)),children:[a.jsx(Ke,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,m==="disponibles"&&!y&&f.length===0&&!u?a.jsx(F,{icon:_e,title:$?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,m==="mios"&&!y&&T.length===0&&!u?a.jsx(F,{icon:Z,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,m==="mios"?T.map(o=>{const d=ue(o.estado),C=q[d+1];return a.jsx(H,{children:a.jsx(G,{children:a.jsxs(R,{children:[a.jsxs(se,{children:[a.jsx("span",{children:o.comercio}),a.jsx(ne,{children:o.codigo})]}),a.jsxs(ie,{children:[a.jsxs(P,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(P,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(P,{"data-suave":!0,children:[o.cliente,o.cliente_telefono?` · ${o.cliente_telefono}`:""," · ",b(o.total),o.metodo_pago?` · ${o.metodo_pago}`:""]})]}),a.jsx(la,{children:q.map((Y,ee)=>a.jsx(ca,{"data-hecho":ee<=d,"data-actual":ee===d,children:Y.corto},Y.estado))}),C?a.jsx(ce,{type:"button",onClick:()=>void Se(o),disabled:Q===o.id,"data-final":C.estado==="entregado",children:Q===o.id?"Guardando…":q[d].accion}):null,a.jsxs(le,{type:"button",onClick:()=>g(o.pedido_id),children:["Ver detalle ",$?"del flete":"del pedido"]})]})})},o.id)}):null,m==="disponibles"&&f.map(o=>a.jsx(H,{children:a.jsx(G,{children:a.jsxs(R,{children:[a.jsxs(se,{children:[a.jsx("span",{children:o.comercio}),o.entraEnTuVehiculo===!1?a.jsxs(de,{"data-entra":"false",children:[o.viajes," viajes"]}):typeof o.litros=="number"&&o.litros>0?a.jsx(de,{"data-entra":"true",children:"Entra"}):null,typeof o.distanciaKm=="number"?a.jsxs(ne,{children:[o.distanciaKm," km"]}):null]}),a.jsxs(ie,{children:[a.jsxs(P,{children:["Retirás en ",o.comercio_direccion]}),a.jsxs(P,{children:["Entregás en ",o.direccion_texto]}),a.jsxs(P,{"data-suave":!0,children:[o.items," ",o.items===1?"producto":"productos"," ·"," ",b(o.total)]})]}),a.jsxs(le,{type:"button",onClick:()=>g(o.id),children:["Ver detalle ",$?"del flete":"del pedido"]}),$?a.jsx(ce,{type:"button",onClick:()=>J(o),children:"Cotizar este flete"}):null,(o.items??0)>1?a.jsxs(ha,{type:"button",onClick:()=>void ke(o),children:[a.jsx(Ze,{size:13,"aria-hidden":"true"})," ",o.entraEnTuVehiculo===!1?`Partir en ${o.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},o.id))]})})}),a.jsx(na,{open:c!==null,pedidoId:c,onClose:()=>g(null),onTomar:we,esFletero:$}),a.jsx(Xe,{open:E!==null,pedidoId:(E==null?void 0:E.id)??"",distanciaKm:(E==null?void 0:E.distanciaKm)??null,onCerrar:()=>J(null),onCotizado:()=>void S()}),a.jsx(Ve,{rol:"repartidor",open:x!==null,pedidoId:(x==null?void 0:x.id)??null,codigo:(x==null?void 0:x.codigo)??"",cliente:(x==null?void 0:x.cliente)??"",onClose:()=>j(null)})]})}export{La as PanelRepartidorScreen};
