import{q as g,j as e,C as x,X as h}from"./index-CQSQA-do.js";import{r as t}from"./react-D_B_6qYb.js";import{P as y,a as b,b as v,c as j}from"./PanelLoginDialogStyled-CDo90hae.js";import{E,a as u}from"./ChatPedidoDialogStyled-DmEDcdrG.js";const k=g.label`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[3]};
  min-height: 3rem;
  padding: ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[3]};
  border-radius: ${({theme:r})=>r.radius.lg};
  border: 1px solid ${({theme:r})=>r.color.border};
  background: ${({theme:r})=>r.color.surface};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease;

  &:hover {
    border-color: ${({theme:r})=>r.color.primary};
  }

  &[data-elegido='true'] {
    border-color: ${({theme:r})=>r.color.primary};
    background: ${({theme:r})=>r.color.primarySoft};
  }

  > input {
    flex: 0 0 auto;
    accent-color: ${({theme:r})=>r.color.primary};
  }

  > span {
    flex: 1 1 auto;
    min-width: 0;
    font-size: ${({theme:r})=>r.typography.size.sm};
    overflow-wrap: anywhere;
  }
`;function D({open:r,titulo:l,motivos:p,onCancelar:a,onElegir:m}){const[i,d]=t.useState(null),[s,c]=t.useState(!1);if(t.useEffect(()=>{r&&d(null)},[r]),t.useEffect(()=>{if(!r)return;const o=n=>{n.key==="Escape"&&a()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[a,r]),!r)return null;const f=async()=>{if(!(i===null||s)){c(!0);try{await m(i)}finally{c(!1)}}};return e.jsx(y,{onClick:a,role:"presentation",children:e.jsxs(b,{role:"dialog","aria-modal":"true","aria-label":l,onClick:o=>o.stopPropagation(),children:[e.jsxs(v,{children:[e.jsx("div",{children:e.jsx(x,{children:l})}),e.jsx(j,{type:"button",onClick:a,"aria-label":"Cerrar",children:e.jsx(h,{size:18,"aria-hidden":"true"})})]}),p.map((o,n)=>e.jsxs(k,{"data-elegido":i===n,children:[e.jsx("input",{type:"radio",name:"motivo",checked:i===n,onChange:()=>d(n)}),e.jsx("span",{children:o})]},o)),e.jsxs(E,{children:[e.jsx(u,{type:"button","data-tono":"suave",onClick:a,children:"Volver"}),e.jsx(u,{type:"button",onClick:()=>void f(),disabled:i===null||s,children:s?"Enviando…":"Confirmar"})]})]})})}export{D as M};
