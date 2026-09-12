import{q as r}from"./index-CVpm7Ujl.js";const t=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[1]};
  height: 18rem;
  overflow-y: auto;
  padding: ${({theme:o})=>o.spacing[2]};
  margin-bottom: ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surfaceMuted};
`,e=r.p`
  margin: auto;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  text-align: center;
`,i=r.div`
  display: flex;
  margin-bottom: 0.1rem;

  &[data-propio='true'] {
    justify-content: flex-end;
  }

  /* Último de la tanda: aire antes del que habla después. */
  &[data-ultimo='true'] {
    margin-bottom: 0.55rem;
  }
`,n=r.span`
  position: relative;
  max-width: min(78%, 32rem);
  padding: 0.45rem ${({theme:o})=>o.spacing[3]} 0.45rem;
  border-radius: 1.1rem;
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
  line-height: 1.4;
  box-shadow: ${({theme:o})=>o.shadow.sm};
  /* Un mensaje largo sin espacios no debe estirar la burbuja. */
  overflow-wrap: anywhere;

  &[data-propio='true'] {
    background: ${({theme:o})=>o.color.brand};
    color: ${({theme:o})=>o.color.onPrimary};
  }

  /* La cola, sólo en el último de la tanda. */
  &[data-ultimo='true'] {
    border-bottom-left-radius: 0.3rem;
  }

  &[data-ultimo='true'][data-propio='true'] {
    border-bottom-left-radius: 1.1rem;
    border-bottom-right-radius: 0.3rem;
  }

  /* Sitio para la hora, al final del texto. */
  > .texto::after {
    content: '';
    display: inline-block;
    width: 3.2rem;
  }
`,s=r.span`
  position: absolute;
  right: ${({theme:o})=>o.spacing[3]};
  bottom: 0.4rem;
  font-size: 0.65rem;
  font-variant-numeric: tabular-nums;
  opacity: 0.65;
`,l=r.span`
  display: block;
  margin-bottom: 0.1rem;
  color: ${({theme:o})=>o.color.primary};
  font-size: 0.7rem;
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,d=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};

  > input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 2.75rem;
    padding: 0 ${({theme:o})=>o.spacing[3]};
    border-radius: ${({theme:o})=>o.radius.full};
    border: 1px solid ${({theme:o})=>o.color.border};
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.text};
    font-family: ${({theme:o})=>o.typography.fontFamily.body};
    font-size: ${({theme:o})=>o.typography.size.sm};

    &:focus {
      outline: none;
      border-color: ${({theme:o})=>o.color.primary};
    }
  }
`,c=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,p=r.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  align-self: center;
  max-width: 85%;
  margin: 0.35rem 0;
  padding: 0.3rem ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textSoft};
  font-size: 0.72rem;
  text-align: center;
  line-height: 1.35;

  > svg {
    flex: 0 0 auto;
    opacity: 0.75;
  }

  /* Alguien entró al chat. Verde: es algo que suma.

     El fondo va con transparencia sobre el color del aviso en vez de un
     token propio: así sirve igual en claro y en oscuro sin declarar dos. */
  &[data-tono='entra'] {
    background: rgba(22, 163, 74, 0.14);
    color: ${({theme:o})=>o.color.success};
  }

  /* Alguien se fue, o algo se dio de baja. */
  &[data-tono='sale'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({theme:o})=>o.color.danger};
  }

  /* El pedido cambió de estado: lo dice la aplicación, no una persona. */
  &[data-tono='estado'] {
    background: ${({theme:o})=>o.color.primarySoft};
    color: ${({theme:o})=>o.color.primary};
  }
`,g=r.div`
  display: grid;
  gap: 0.4rem;
  max-width: 85%;
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.primary};
  background: ${({theme:o})=>o.color.primarySoft};

  &[data-propio='true'] {
    align-self: flex-end;
  }
`,u=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  align-self: start;
  padding: 0.1rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.primary};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: 0.65rem;
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,m=r.p`
  margin: 0;
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
  overflow-wrap: anywhere;
`,f=r.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};

  &[data-tono='ok'] { color: ${({theme:o})=>o.color.success}; }
  &[data-tono='baja'] { color: ${({theme:o})=>o.color.danger}; }
  &[data-tono='espera'] { color: ${({theme:o})=>o.color.warning}; }
`,y=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing[2]};
`,b=r.button`
  flex: 1 1 auto;
  min-height: 2.25rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;

  &[data-tono='suave'] {
    border: 1px solid ${({theme:o})=>o.color.border};
    background: transparent;
    color: ${({theme:o})=>o.color.textSoft};
  }

  &:disabled { opacity: 0.6; cursor: progress; }
`,$=r.button`
  position: sticky;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[2]};
  width: 100%;
  min-height: 2.5rem;
  margin-top: ${({theme:o})=>o.spacing[2]};
  border: 1px dashed ${({theme:o})=>o.color.primary};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.primary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover { background: ${({theme:o})=>o.color.primarySoft}; }
`;export{e as C,y as E,b as a,p as b,g as c,u as d,m as e,f,s as g,i as h,n as i,l as j,$ as k,c as l,t as m,d as n};
