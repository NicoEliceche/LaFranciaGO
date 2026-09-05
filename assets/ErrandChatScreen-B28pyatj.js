import{a8 as x,q as a,aa as R,j as r,M as w,K as C,a as S,E,L as T}from"./index-BYeDpgFV.js";import{r as s}from"./react-DINHX3pJ.js";import{p as U}from"./mediaService-Be9g9s7c.js";import{u as q}from"./errandStore-C4Mn-q-H.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=x("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=x("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=x("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=x("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=x("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),B=60,L=()=>typeof MediaRecorder>"u"?"":["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(n=>MediaRecorder.isTypeSupported(n))??"";function N(){var k;const[e,n]=s.useState({recording:!1,seconds:0,error:null}),l=s.useRef(null),g=s.useRef([]),m=s.useRef(null),i=s.useRef(null),c=s.useRef(null),y=typeof navigator<"u"&&!!((k=navigator.mediaDevices)!=null&&k.getUserMedia)&&typeof MediaRecorder<"u",d=s.useCallback(()=>{var t;i.current!==null&&(window.clearInterval(i.current),i.current=null),(t=m.current)==null||t.getTracks().forEach(u=>u.stop()),m.current=null,l.current=null},[]);s.useEffect(()=>d,[d]);const $=s.useCallback(async()=>{if(!y)return n(t=>({...t,error:"Tu navegador no permite grabar audio."})),!1;try{const t=await navigator.mediaDevices.getUserMedia({audio:!0}),u=L(),f=new MediaRecorder(t,u?{mimeType:u}:void 0);return g.current=[],m.current=t,l.current=f,f.ondataavailable=p=>{p.data.size>0&&g.current.push(p.data)},f.onstop=()=>{var b;const p=new Blob(g.current,{type:u||"audio/webm"}),v=e.seconds;(b=c.current)==null||b.call(c,p.size>0?{url:URL.createObjectURL(p),seconds:v}:null),c.current=null,d()},f.start(),n({recording:!0,seconds:0,error:null}),i.current=window.setInterval(()=>{n(p=>{var b;const v=p.seconds+1;return v>=B&&((b=l.current)==null||b.stop()),{...p,seconds:v}})},1e3),!0}catch{return n(t=>({...t,error:"No pudimos usar el micrófono. Revisá los permisos."})),!1}},[d,e.seconds,y]),o=s.useCallback(()=>new Promise(t=>{const u=l.current;if(!u||u.state==="inactive"){t(null),d(),n({recording:!1,seconds:0,error:null});return}c.current=f=>{n({recording:!1,seconds:0,error:null}),t(f)},u.stop()}),[d]),h=s.useCallback(()=>{const t=l.current;c.current=null,t&&t.state!=="inactive"&&t.stop(),d(),n({recording:!1,seconds:0,error:null})},[d]);return{...e,supported:y,start:$,stop:o,cancel:h}}const H=R`
  0% { transform: scale(0.85); opacity: 0.9; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
`,V=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,G=a.span`
  width: 0.6rem;
  height: 0.6rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.warning};

  &[data-status='tomado'],
  &[data-status='en-curso'] {
    background: ${({theme:e})=>e.color.success};
  }

  &[data-status='cancelado'] {
    background: ${({theme:e})=>e.color.danger};
  }
`,K=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,O=a.p`
  margin: ${({theme:e})=>e.spacing[2]} 0;
  padding: ${({theme:e})=>e.spacing[2]};
  border-left: 3px solid ${({theme:e})=>e.color.primary};
  border-radius: 0 ${({theme:e})=>e.radius.md} ${({theme:e})=>e.radius.md} 0;
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,Z=a.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,_=a.span`
  position: relative;
  flex: 0 0 auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.primary};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({theme:e})=>e.color.primary};
    animation: ${H} 1.8s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,W=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,X=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,J=a.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Q=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Y=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-content: start;
  min-height: 14rem;
  max-height: 52dvh;
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.backgroundAlt};
  overflow-y: auto;
  overscroll-behavior: contain;
`,ee=a.div`
  display: flex;
  justify-content: flex-start;

  &[data-mine='true'] {
    justify-content: flex-end;
  }
`,re=a.div`
  max-width: min(80%, 22rem);
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
  word-break: break-word;

  &[data-mine='true'] {
    border-color: transparent;
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,z=a.span`
  display: block;
  margin-top: 0.2rem;
  opacity: 0.7;
  font-size: 0.6875rem;
  text-align: right;
`,oe=a.img`
  display: block;
  width: 100%;
  max-width: 15rem;
  border-radius: ${({theme:e})=>e.radius.md};
`,ae=a.audio`
  display: block;
  width: 100%;
  min-width: 12rem;
  max-width: 15rem;
`,te=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,ne=a.input`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
  }
`,j=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,M=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,ie=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.danger};
  background: ${({theme:e})=>e.color.surface};
`,se=a.span`
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-align: center;
`;function pe(){const{errand:e,send:n}=q(),[l,g]=s.useState(""),m=s.useRef(null),i=N();if(s.useEffect(()=>{const o=m.current;o&&(o.scrollTop=o.scrollHeight)},[e==null?void 0:e.messages.length]),!e)return r.jsx(w,{showSearch:!1,children:r.jsx(C,{children:r.jsx(S,{children:r.jsx(E,{icon:T,title:"No tenés mandados activos",text:"Generá uno y te conectamos con un repartidor cercano.",ctaLabel:"Pedir un mandado",ctaTo:"/mandado"})})})});const c=e.status==="buscando",y=o=>{o.preventDefault();const h=l.trim();h&&(n({author:"cliente",kind:"texto",text:h}),g(""))},d=async o=>{const h=o==null?void 0:o[0];if(h)try{const k=await U(h);n({author:"cliente",kind:"foto",mediaUrl:k.previewUrl})}catch{n({author:"cliente",kind:"texto",text:"No pude enviar la foto."})}},$=async()=>{if(i.recording){const o=await i.stop();o&&n({author:"cliente",kind:"audio",mediaUrl:o.url,durationSec:o.seconds});return}await i.start()};return r.jsx(w,{showSearch:!1,children:r.jsx(C,{children:r.jsxs(S,{children:[r.jsxs(V,{children:[r.jsx(G,{"data-status":e.status}),r.jsx(K,{children:c?`Buscando repartidor en ${e.radiusKm} km...`:`Mandado ${e.code} · en curso`})]}),r.jsx(O,{children:e.description}),c?r.jsxs(Z,{children:[r.jsx(_,{"aria-hidden":"true"}),"Avisamos a los repartidores cercanos. El primero que lo tome se queda con el pedido."]}):e.courier?r.jsxs(W,{children:[r.jsx(X,{children:e.courier.name.charAt(0)}),r.jsxs("div",{children:[r.jsx(J,{children:e.courier.name}),r.jsxs(Q,{children:[e.courier.vehicle," · ",e.courier.rating.toFixed(1)," ★ · a"," ",e.courier.distanceKm.toFixed(1)," km"]})]})]}):null,r.jsx(Y,{ref:m,"aria-label":"Mensajes del mandado",children:e.messages.map(o=>r.jsx(ee,{"data-mine":o.author==="cliente",children:r.jsxs(re,{"data-mine":o.author==="cliente",children:[o.kind==="texto"?o.text:null,o.kind==="foto"&&o.mediaUrl?r.jsx(oe,{src:o.mediaUrl,alt:"Foto enviada en el chat"}):null,o.kind==="audio"&&o.mediaUrl?r.jsx(ae,{src:o.mediaUrl,controls:!0,preload:"metadata"}):null,r.jsx(z,{children:o.time})]})},o.id))}),i.recording?r.jsxs(ie,{children:[r.jsx(j,{type:"button",onClick:i.cancel,"aria-label":"Descartar audio","data-tone":"danger",children:r.jsx(I,{size:18,"aria-hidden":"true"})}),r.jsxs(se,{children:["Grabando… ",i.seconds,"s"]}),r.jsx(M,{type:"button",onClick:$,"aria-label":"Enviar audio",children:r.jsx(F,{size:16,"aria-hidden":"true"})})]}):r.jsxs(te,{as:"form",onSubmit:y,children:[r.jsxs(j,{as:"label","aria-label":"Enviar una foto",children:[r.jsx(P,{size:18,"aria-hidden":"true"}),r.jsx("input",{type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:o=>{d(o.target.files),o.target.value=""}})]}),i.supported?r.jsx(j,{type:"button",onClick:$,"aria-label":"Grabar un audio",children:r.jsx(A,{size:18,"aria-hidden":"true"})}):null,r.jsx(ne,{value:l,onChange:o=>g(o.target.value),placeholder:c?"Esperando repartidor…":"Escribí un mensaje","aria-label":"Mensaje"}),r.jsx(M,{type:"submit","aria-label":"Enviar mensaje",disabled:!l.trim(),children:r.jsx(D,{size:16,"aria-hidden":"true"})})]}),i.error?r.jsx(z,{role:"alert",children:i.error}):null]})})})}export{pe as ErrandChatScreen};
