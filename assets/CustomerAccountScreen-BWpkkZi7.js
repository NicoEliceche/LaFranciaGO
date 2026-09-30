import{aM as z,aN as E,j as o,M as F,C as l,S as c,Y as L,aO as I,p as f,q as h,aP as y,aQ as N}from"./index-HdS9Gr1h.js";import{r as $}from"./react-CKwpxk66.js";import{S as p,a as r}from"./SettingsList-DryvM9An.js";import{I as T,v as O,p as U}from"./mediaService-D2_VAu2k.js";import{q as t}from"./estilos-D2nr0glO.js";import{U as v,ad as B,X as D,i as q,k as _,B as H,M as Q,ai as V,O as G,j as X,T as Y,b as J,L as K}from"./iconos-BTg8kJJJ.js";const W=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Z=t.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,ee=t.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,oe=t.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,re=t.span`
  justify-self: start;
  margin-top: ${({theme:e})=>e.spacing[1]};
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  /* El fondo se arma con el mismo color a baja opacidad: asi acompana al
     tema sin necesitar un token nuevo por cada rol. */
  &[data-rol='comercio'] {
    background: color-mix(in srgb, ${({theme:e})=>e.color.success} 16%, transparent);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-rol='delivery'],
  &[data-rol='fletero'] {
    background: color-mix(in srgb, ${({theme:e})=>e.color.warning} 18%, transparent);
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-rol='admin'] {
    background: color-mix(in srgb, ${({theme:e})=>e.color.danger} 16%, transparent);
    color: ${({theme:e})=>e.color.danger};
  }
`,te=t.div`
  position: relative;
  flex: 0 0 auto;
`,ie=t.button`
  position: relative;
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  border-radius: ${({theme:e})=>e.radius.full};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 3px;
  }
`,se=t.span`
  position: absolute;
  right: -0.15rem;
  bottom: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.surface};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,ae=t.button`
  position: absolute;
  right: -0.15rem;
  top: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.surface};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease, background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.danger};
    color: #ffffff;
  }
`,ne=t.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,x=y.find(e=>e.primary)??y[0],le={cliente:"Cliente",comercio:"Comercio",delivery:"Delivery",fletero:"Flete",admin:"Administracion"};function fe(){const{usuario:e,conectado:S,salir:k}=z(),{photo:d,setPhoto:w,clearPhoto:P}=E(),b=$.useRef(null),[j,s]=$.useState(null),m=(e==null?void 0:e.roles)??[],C=m.includes("comercio"),A=m.includes("delivery"),R=m.includes("fletero"),g=(e==null?void 0:e.rol)??"cliente",M=async i=>{const a=O(i);if(a){s(a);return}s(null);try{const n=await U(i),u=new FileReader;u.onload=()=>w(String(u.result)),u.onerror=()=>s("No pudimos leer la imagen. Probá con otra."),u.readAsDataURL(n.blob),URL.revokeObjectURL(n.previewUrl)}catch{s("No pudimos procesar la imagen. Probá con otra.")}};return o.jsxs(F,{showSearch:!1,children:[o.jsx(l,{children:o.jsx(c,{children:o.jsxs(W,{children:[o.jsxs(te,{children:[o.jsxs(ie,{type:"button",onClick:()=>{var i;return(i=b.current)==null?void 0:i.click()},"aria-label":d?"Cambiar la foto de perfil":"Subir una foto de perfil",children:[o.jsx(L,{$size:"3.75rem",$tone:"blue",children:d?o.jsx(I,{src:d,alt:""}):o.jsx(v,{size:26,"aria-hidden":"true"})}),o.jsx(se,{"aria-hidden":"true",children:o.jsx(B,{size:13})})]}),d?o.jsx(ae,{type:"button",onClick:()=>{P(),s(null)},"aria-label":"Quitar la foto de perfil",children:o.jsx(D,{size:13,"aria-hidden":"true"})}):null,o.jsx("input",{ref:b,type:"file",accept:T,hidden:!0,onChange:i=>{var n;const a=(n=i.target.files)==null?void 0:n[0];a&&M(a),i.target.value=""}})]}),o.jsxs(Z,{children:[o.jsx(ee,{children:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(oe,{children:(e==null?void 0:e.email)??"Entrá para guardar tus pedidos"}),o.jsx(re,{"data-rol":g,children:le[g]??g}),j?o.jsx(ne,{role:"status",children:j}):null]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(f,{children:[o.jsx(h,{title:"Mi actividad"}),o.jsxs(p,{children:[o.jsx(r,{icon:q,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),o.jsx(r,{icon:_,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),o.jsx(r,{icon:H,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(f,{children:[o.jsx(h,{title:"Mis datos"}),o.jsxs(p,{children:[o.jsx(r,{icon:v,title:"Nombre visible",subtitle:(e==null?void 0:e.nombre)??"Vecino de La Francia"}),o.jsx(r,{icon:Q,title:"Tus direcciones",subtitle:(x==null?void 0:x.address)??"Sin direcciones guardadas"}),o.jsx(r,{icon:V,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),o.jsx(r,{icon:G,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsxs(f,{children:[o.jsx(h,{title:"Sumate"}),o.jsxs(p,{children:[C?null:o.jsx(r,{icon:X,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),A?null:o.jsx(r,{icon:N,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),R?null:o.jsx(r,{icon:Y,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),o.jsx(l,{children:o.jsx(c,{children:o.jsx(p,{children:S?o.jsx(r,{icon:J,title:"Cerrar sesión",tone:"danger",onClick:()=>{k()}}):o.jsx(r,{icon:K,title:"Entrar o crear cuenta",subtitle:"Para guardar direcciones y seguir pedidos",to:"/ingresar"})})})})]})}export{fe as CustomerAccountScreen};
