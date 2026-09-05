import{q as o,ac as m,j as e,M as y,J as x,a as f,d as $,al as b,K as j,D as E}from"./index-U-wdHHrK.js";import{u as S,r as c}from"./react-B1kPYQQd.js";import{D as z,c as w}from"./errandStore-2j2J0oQl.js";import{S as v}from"./shield-check-BOWF6chM.js";const k=o.div`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.xl};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};
  box-shadow: ${({theme:r})=>r.shadow.sm};
`,D=o.label`
  color: ${({theme:r})=>r.color.text};
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
`,M=o.textarea`
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.text};
  font-family: ${({theme:r})=>r.typography.fontFamily.body};
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;

  &::placeholder {
    color: ${({theme:r})=>r.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:r})=>r.color.primary};
    box-shadow: 0 0 0 3px ${({theme:r})=>r.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:r})=>r.color.danger};
  }
`,q=o.span`
  color: ${({theme:r})=>r.color.textSoft};
  font-size: ${({theme:r})=>r.typography.size.xs};
  line-height: 1.4;
`,C=o.span`
  color: ${({theme:r})=>r.color.danger};
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.semibold};
`,F=o.p`
  margin: 0;
  padding: ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.lg};
  background: ${({theme:r})=>r.color.primarySoft};
  color: ${({theme:r})=>r.color.primary};
  font-size: ${({theme:r})=>r.typography.size.xs};
  font-weight: ${({theme:r})=>r.typography.weight.semibold};
  line-height: 1.4;
`,I=o.ul`
  display: grid;
  gap: ${({theme:r})=>r.spacing[2]};
  margin: ${({theme:r})=>r.spacing[1]} 0 0;
  padding: 0;
  list-style: none;
`,t=o.li`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  color: ${({theme:r})=>r.color.textMuted};
  font-size: ${({theme:r})=>r.typography.size.sm};
  line-height: 1.35;
`,n=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:r})=>r.radius.md};
  background: ${({theme:r})=>r.color.surfaceMuted};
  color: ${({theme:r})=>r.color.primary};

  ${m};
`,N=o.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({theme:r})=>r.spacing[2]};
  border: 0;
  border-radius: ${({theme:r})=>r.radius.full};
  background: ${({theme:r})=>r.color.brand};
  color: ${({theme:r})=>r.color.onPrimary};
  font-family: ${({theme:r})=>r.typography.fontFamily.heading};
  font-size: ${({theme:r})=>r.typography.size.sm};
  font-weight: ${({theme:r})=>r.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:r})=>r.color.brandHover};
  }
`,A=10,p="Av. San Martín 123";function _(){const r=S(),[s,h]=c.useState(""),[d,u]=c.useState(!1),l=s.trim(),a=l.length<A?"Contanos un poco más de lo que necesitás.":null,g=i=>{i.preventDefault(),u(!0),!a&&(w(l,p),r("/mandado/chat"))};return e.jsx(y,{showSearch:!1,children:e.jsx(x,{children:e.jsxs(f,{children:[e.jsx($,{title:"¿Qué necesitás?",chip:"Mandado",subtitle:"Contanos qué hay que comprar o retirar."}),e.jsxs(k,{as:"form",onSubmit:g,noValidate:!0,children:[e.jsx(D,{htmlFor:"errand-description",children:"Descripción del mandado"}),e.jsx(M,{id:"errand-description",value:s,onChange:i=>h(i.target.value),placeholder:"Ej: Necesito 2 bolsas de hielo, una Coca de 2,25 L y un alfajor de la despensa de la esquina.",rows:5,"data-invalid":d&&!!a,autoFocus:!0}),d&&a?e.jsx(C,{children:a}):e.jsx(q,{children:"Cuanto más claro lo escribas, menos preguntas te va a hacer el repartidor."}),e.jsx(F,{children:"Después vas a poder mandarle fotos y audios por el chat para coordinar."}),e.jsxs(I,{children:[e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(b,{size:16,"aria-hidden":"true"})}),"Lo ven los repartidores en ",z," km a la redonda."]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(j,{size:16,"aria-hidden":"true"})}),"El primero que lo toma se queda con el pedido."]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(E,{size:16,"aria-hidden":"true"})}),"Entrega en ",p,"."]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(v,{size:16,"aria-hidden":"true"})}),"Pagás al recibir, cuando ya sabés el total."]})]}),e.jsx(N,{type:"submit",children:"Generar pedido de mandado"})]})]})})})}export{_ as ErrandScreen};
