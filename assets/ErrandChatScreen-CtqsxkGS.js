import{j as e,M as v,a0 as w,S as C,E as R}from"./index-It2-dK7q.js";import{r as s}from"./react-6hK8W6IX.js";import{p as M}from"./mediaService-D2_VAu2k.js";import{u as E}from"./errandStore-CBW549ZV.js";import{q as a,W as U}from"./estilos-DzHAJWDP.js";import{h as T,aa as P,ab as A,ac as D,ad as F,a5 as B}from"./iconos-D4KLLVJ2.js";const I=60,q=()=>typeof MediaRecorder>"u"?"":["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(n=>MediaRecorder.isTypeSupported(n))??"";function N(){var $;const[r,n]=s.useState({recording:!1,seconds:0,error:null}),l=s.useRef(null),h=s.useRef([]),m=s.useRef(null),i=s.useRef(null),c=s.useRef(null),b=typeof navigator<"u"&&!!(($=navigator.mediaDevices)!=null&&$.getUserMedia)&&typeof MediaRecorder<"u",d=s.useCallback(()=>{var t;i.current!==null&&(window.clearInterval(i.current),i.current=null),(t=m.current)==null||t.getTracks().forEach(u=>u.stop()),m.current=null,l.current=null},[]);s.useEffect(()=>d,[d]);const y=s.useCallback(async()=>{if(!b)return n(t=>({...t,error:"Tu navegador no permite grabar audio."})),!1;try{const t=await navigator.mediaDevices.getUserMedia({audio:!0}),u=q(),f=new MediaRecorder(t,u?{mimeType:u}:void 0);return h.current=[],m.current=t,l.current=f,f.ondataavailable=p=>{p.data.size>0&&h.current.push(p.data)},f.onstop=()=>{var x;const p=new Blob(h.current,{type:u||"audio/webm"}),j=r.seconds;(x=c.current)==null||x.call(c,p.size>0?{url:URL.createObjectURL(p),seconds:j}:null),c.current=null,d()},f.start(),n({recording:!0,seconds:0,error:null}),i.current=window.setInterval(()=>{n(p=>{var x;const j=p.seconds+1;return j>=I&&((x=l.current)==null||x.stop()),{...p,seconds:j}})},1e3),!0}catch{return n(t=>({...t,error:"No pudimos usar el micrófono. Revisá los permisos."})),!1}},[d,r.seconds,b]),o=s.useCallback(()=>new Promise(t=>{const u=l.current;if(!u||u.state==="inactive"){t(null),d(),n({recording:!1,seconds:0,error:null});return}c.current=f=>{n({recording:!1,seconds:0,error:null}),t(f)},u.stop()}),[d]),g=s.useCallback(()=>{const t=l.current;c.current=null,t&&t.state!=="inactive"&&t.stop(),d(),n({recording:!1,seconds:0,error:null})},[d]);return{...r,supported:b,start:y,stop:o,cancel:g}}const G=U`
  0% { transform: scale(0.85); opacity: 0.9; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
`,L=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.surfaceMuted};
`,O=a.span`
  width: 0.6rem;
  height: 0.6rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({theme:r})=>r.color.warning};

  &[data-status='tomado'],
  &[data-status='en-curso'] {
    background: ${({theme:r})=>r.color.success};
  }

  &[data-status='cancelado'] {
    background: ${({theme:r})=>r.color.danger};
  }
`,H=a.span`
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.semibold};
`,K=a.p`
  margin: ${({theme:r})=>r.spacing[2]} 0;
  padding: ${({theme:r})=>r.spacing[2]};
  border-left: 3px solid ${({theme:r})=>r.color.primary};
  border-radius: 0 ${({theme:r})=>r.radius.md} ${({theme:r})=>r.radius.md} 0;
  background: ${({theme:r})=>r.color.primarySoft};
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size.sm};
  line-height: 1.45;
`,W=a.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[3]};
  padding: ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px dashed ${({theme:r})=>r.color.borderStrong};
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.sm};
  line-height: 1.4;
`,_=a.span`
  position: relative;
  flex: 0 0 auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: ${({theme:r})=>r.color.primary};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({theme:r})=>r.color.primary};
    animation: ${G} 1.8s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,X=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[3]};
  padding: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};
`,J=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({theme:r})=>r.color.brand};
  color: ${({theme:r})=>r.color.onPrimary};
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.lg};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
`,Q=a.strong`
  display: block;
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.base};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  color: ${({theme:r})=>r.color.text};
`,V=a.span`
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};
`,Y=a.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
  align-content: start;
  min-height: 14rem;
  max-height: 52dvh;
  margin-top: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.backgroundAlt};
  overflow-y: auto;
  overscroll-behavior: contain;
`,Z=a.div`
  display: flex;
  justify-content: flex-start;

  &[data-mine='true'] {
    justify-content: flex-end;
  }
`,rr=a.div`
  max-width: min(80%, 22rem);
  padding: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.text};
  font-size: ${({theme:r})=>r.typography.size.sm};
  line-height: 1.4;
  word-break: break-word;

  &[data-mine='true'] {
    border-color: transparent;
    background: ${({theme:r})=>r.color.brand};
    color: ${({theme:r})=>r.color.onPrimary};
  }
`,S=a.span`
  display: block;
  margin-top: 0.2rem;
  opacity: 0.7;
  font-size: 0.6875rem;
  text-align: right;
`,er=a.img`
  display: block;
  width: 100%;
  max-width: 15rem;
  border-radius: ${({theme:r})=>r.radius.md};
`,or=a.audio`
  display: block;
  width: 100%;
  min-width: 12rem;
  max-width: 15rem;
`,ar=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[1]};
  margin-top: ${({theme:r})=>r.spacing[2]};
`,tr=a.input`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.75rem;
  padding: 0 ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.full};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.text};
  font-family: ${({theme:r})=>r.typography.fontFamily.body};
  font-size: ${({theme:r})=>r.typography.size.sm};

  &::placeholder {
    color: ${({theme:r})=>r.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.color.primary};
  }
`,k=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({theme:r})=>r.color.border};
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.surface};
  color: ${({theme:r})=>r.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({theme:r})=>r.color.primarySoft};
  }

  &[data-tone='danger'] {
    color: ${({theme:r})=>r.color.danger};
  }
`,z=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.brand};
  color: ${({theme:r})=>r.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:r})=>r.color.brandHover};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,nr=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  margin-top: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[1]};
  border-radius: ${({theme:r})=>r.radius.full};
  border: 1px solid ${({theme:r})=>r.color.danger};
  background: ${({theme:r})=>r.color.surface};
`,ir=a.span`
  flex: 1 1 auto;
  color: ${({theme:r})=>r.color.danger};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  text-align: center;
`;function gr(){const{errand:r,send:n}=E(),[l,h]=s.useState(""),m=s.useRef(null),i=N();if(s.useEffect(()=>{const o=m.current;o&&(o.scrollTop=o.scrollHeight)},[r==null?void 0:r.messages.length]),!r)return e.jsx(v,{showSearch:!1,children:e.jsx(w,{children:e.jsx(C,{children:e.jsx(R,{icon:T,title:"No tenés mandados activos",text:"Generá uno y te conectamos con un repartidor cercano.",ctaLabel:"Pedir un mandado",ctaTo:"/mandado"})})})});const c=r.status==="buscando",b=o=>{o.preventDefault();const g=l.trim();g&&(n({author:"cliente",kind:"texto",text:g}),h(""))},d=async o=>{const g=o==null?void 0:o[0];if(g)try{const $=await M(g);n({author:"cliente",kind:"foto",mediaUrl:$.previewUrl})}catch{n({author:"cliente",kind:"texto",text:"No pude enviar la foto."})}},y=async()=>{if(i.recording){const o=await i.stop();o&&n({author:"cliente",kind:"audio",mediaUrl:o.url,durationSec:o.seconds});return}await i.start()};return e.jsx(v,{showSearch:!1,children:e.jsx(w,{children:e.jsxs(C,{children:[e.jsxs(L,{children:[e.jsx(O,{"data-status":r.status}),e.jsx(H,{children:c?`Buscando repartidor en ${r.radiusKm} km...`:`Mandado ${r.code} · en curso`})]}),e.jsx(K,{children:r.description}),c?e.jsxs(W,{children:[e.jsx(_,{"aria-hidden":"true"}),"Avisamos a los repartidores cercanos. El primero que lo tome se queda con el pedido."]}):r.courier?e.jsxs(X,{children:[e.jsx(J,{children:r.courier.name.charAt(0)}),e.jsxs("div",{children:[e.jsx(Q,{children:r.courier.name}),e.jsxs(V,{children:[r.courier.vehicle," · ",r.courier.rating.toFixed(1)," ★ · a"," ",r.courier.distanceKm.toFixed(1)," km"]})]})]}):null,e.jsx(Y,{ref:m,"aria-label":"Mensajes del mandado",children:r.messages.map(o=>e.jsx(Z,{"data-mine":o.author==="cliente",children:e.jsxs(rr,{"data-mine":o.author==="cliente",children:[o.kind==="texto"?o.text:null,o.kind==="foto"&&o.mediaUrl?e.jsx(er,{src:o.mediaUrl,alt:"Foto enviada en el chat"}):null,o.kind==="audio"&&o.mediaUrl?e.jsx(or,{src:o.mediaUrl,controls:!0,preload:"metadata"}):null,e.jsx(S,{children:o.time})]})},o.id))}),i.recording?e.jsxs(nr,{children:[e.jsx(k,{type:"button",onClick:i.cancel,"aria-label":"Descartar audio","data-tone":"danger",children:e.jsx(P,{size:18,"aria-hidden":"true"})}),e.jsxs(ir,{children:["Grabando… ",i.seconds,"s"]}),e.jsx(z,{type:"button",onClick:y,"aria-label":"Enviar audio",children:e.jsx(A,{size:16,"aria-hidden":"true"})})]}):e.jsxs(ar,{as:"form",onSubmit:b,children:[e.jsxs(k,{as:"label","aria-label":"Enviar una foto",children:[e.jsx(D,{size:18,"aria-hidden":"true"}),e.jsx("input",{type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:o=>{d(o.target.files),o.target.value=""}})]}),i.supported?e.jsx(k,{type:"button",onClick:y,"aria-label":"Grabar un audio",children:e.jsx(F,{size:18,"aria-hidden":"true"})}):null,e.jsx(tr,{value:l,onChange:o=>h(o.target.value),placeholder:c?"Esperando repartidor…":"Escribí un mensaje","aria-label":"Mensaje"}),e.jsx(z,{type:"submit","aria-label":"Enviar mensaje",disabled:!l.trim(),children:e.jsx(B,{size:16,"aria-hidden":"true"})})]}),i.error?e.jsx(S,{role:"alert",children:i.error}):null]})})})}export{gr as ErrandChatScreen};
