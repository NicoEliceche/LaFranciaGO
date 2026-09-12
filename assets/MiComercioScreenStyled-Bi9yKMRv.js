import{q as r}from"./index-CQSQA-do.js";const e=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  min-width: 0;
`,t=r.strong`
  display: block;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.lg};
  letter-spacing: -0.02em;
`,i=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:o})=>o.spacing[2]};
  margin-top: 0.15rem;
`,n=r.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:o})=>o.spacing[2]};
  }
`,s=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:o})=>o.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px dashed ${({theme:o})=>o.color.borderStrong};
  background: transparent;
  color: ${({theme:o})=>o.color.primary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:o})=>o.color.primary};
    background: ${({theme:o})=>o.color.primarySoft};
  }
`,l=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spacing[2]};

  /* En un teléfono, el nombre y los chips no entran en la misma línea: el
     nombre se partía en dos y quedaba ilegible. Se apilan, con los chips
     debajo y alineados a la izquierda: estirados a todo el ancho parecen
     barras y no etiquetas. */
  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`,c=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  flex-wrap: wrap;
  flex: 0 0 auto;
`,d=r.div`
  min-width: 0;
`,p=r.strong`
  display: block;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
`,g=r.strong`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};

  > svg {
    margin-left: auto;
    flex: 0 0 auto;
    color: ${({theme:o})=>o.color.textSoft};
  }
`,y=r.span`
  display: block;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
`,f=r.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:o})=>o.spacing[1]};
`,m=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:o})=>o.radius.full};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textMuted};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;

  &:hover {
    color: ${({theme:o})=>o.color.primary};
    border-color: ${({theme:o})=>o.color.primary};
  }

  /* Borrar se distingue en rojo sólo al pasar por encima: en reposo compite
     menos con editar, que es la acción habitual. */
  &[data-tono='danger']:hover {
    color: ${({theme:o})=>o.color.danger};
    border-color: ${({theme:o})=>o.color.danger};
  }
`,$=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing[1]};
`,h=r.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[1]};
  min-height: 2.5rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.full};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.textMuted};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.semibold};
  cursor: pointer;
  transition: border-color 180ms ease, color 180ms ease;

  &[data-active='true'] {
    border-color: ${({theme:o})=>o.color.primary};
    background: ${({theme:o})=>o.color.primarySoft};
    color: ${({theme:o})=>o.color.primary};
  }
`,u=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.3rem;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.danger};
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,b=r.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.semibold};
  white-space: nowrap;

  &[data-estado='proceso'],
  &[data-estado='en_camino'],
  &[data-estado='asignado'] {
    color: ${({theme:o})=>o.color.primary};
  }

  &[data-estado='terminado'],
  &[data-estado='entregado'] {
    color: ${({theme:o})=>o.color.success};
  }

  &[data-estado='cancelado'] {
    color: ${({theme:o})=>o.color.danger};
  }
`,x=r.div`
  height: 18rem;
  border-radius: ${({theme:o})=>o.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    height: 24rem;
  }
`,w=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-bottom: 0.35rem;

  > strong {
    flex: 1 1 auto;
    min-width: 0;
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.sm};
    overflow-wrap: anywhere;
  }
`,z=r.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.primarySoft};
  color: ${({theme:o})=>o.color.primary};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  white-space: nowrap;

  /* Una oferta apagada se ve apagada: si no, el comercio cree que está
     publicada y no entiende por qué nadie la usa. */
  &[data-apagada='true'] {
    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.textMuted};
  }
`,k=r.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,v=r.div`
  display: flex;
  align-items: baseline;
  gap: ${({theme:o})=>o.spacing[2]};
  flex-wrap: wrap;

  > s {
    color: ${({theme:o})=>o.color.textMuted};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }

  > strong {
    color: ${({theme:o})=>o.color.primary};
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.base};
  }
`,S=r.p`
  margin: 0.2rem 0 0;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`,M=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:o})=>o.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,F=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
`,C=r.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.semibold};
`,P=r.strong`
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xl};
  line-height: 1.1;
`,j=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};

  &[data-tono='sube'] {
    color: ${({theme:o})=>o.color.success};
  }

  &[data-tono='baja'] {
    color: ${({theme:o})=>o.color.danger};
  }
`,q=r.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:o})=>o.color.border};
  font-size: ${({theme:o})=>o.typography.size.sm};

  &:last-child {
    border-bottom: 0;
  }

  > span:first-child {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  > small {
    flex: 0 0 auto;
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }
`,B=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  white-space: nowrap;
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textSoft};

  &[data-estado='preparando'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:o})=>o.color.warning};
  }

  &[data-estado='listo'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({theme:o})=>o.color.success};
  }
`,O=r.button`
  width: 100%;
  min-height: 2.5rem;
  margin-top: ${({theme:o})=>o.spacing[2]};
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:o})=>o.color.brandHover};
  }

  /* Marcarlo listo es el paso que libera al repartidor: se distingue. */
  &[data-final='true'] {
    background: ${({theme:o})=>o.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,D=r.label`
  display: grid;
  gap: 0.25rem;
  margin-bottom: ${({theme:o})=>o.spacing[3]};

  > span {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
    font-weight: ${({theme:o})=>o.typography.weight.bold};
  }

  > input,
  > textarea {
    width: 100%;
    min-height: 2.75rem;
    padding: 0 ${({theme:o})=>o.spacing[3]};
    border-radius: ${({theme:o})=>o.radius.lg};
    border: 1px solid ${({theme:o})=>o.color.border};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: inherit;
    font-size: ${({theme:o})=>o.typography.size.sm};
  }

  > textarea {
    min-height: 5rem;
    padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
    resize: vertical;
  }
`,T=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:o})=>o.color.border};

  &:last-child { border-bottom: 0; }

  > strong {
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.sm};
  }
`,E=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  flex-wrap: wrap;

  > input[type='time'] {
    min-height: 2.25rem;
    padding: 0 ${({theme:o})=>o.spacing[2]};
    border-radius: ${({theme:o})=>o.radius.md};
    border: 1px solid ${({theme:o})=>o.color.border};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: inherit;
    font-size: ${({theme:o})=>o.typography.size.sm};
  }

  > span {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }
`,N=r.button`
  min-height: 2.25rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.full};
  border: 1px dashed ${({theme:o})=>o.color.border};
  background: transparent;
  color: ${({theme:o})=>o.color.textSoft};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;

  &:hover {
    border-color: ${({theme:o})=>o.color.primary};
    color: ${({theme:o})=>o.color.primary};
  }

  &[data-tono='danger']:hover {
    border-color: ${({theme:o})=>o.color.danger};
    color: ${({theme:o})=>o.color.danger};
  }
`,R=r.input`
  width: 4.5rem;
  min-height: 2rem;
  padding: 0 ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.md};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-family: inherit;
  font-size: ${({theme:o})=>o.typography.size.xs};
  text-align: center;
`,A=r.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.1rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  font-size: 0.68rem;
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  white-space: nowrap;
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textSoft};

  &[data-estado='poco'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:o})=>o.color.warning};
  }

  &[data-estado='agotado'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({theme:o})=>o.color.danger};
  }
`;export{x as A,e as C,T as D,b as E,M,s as N,w as O,O as P,q as R,$ as S,E as T,t as a,i as b,n as c,h as d,u as e,g as f,D as g,y as h,N as i,l as j,d as k,p as l,R as m,A as n,f as o,m as p,F as q,C as r,P as s,j as t,k as u,z as v,v as w,S as x,c as y,B as z};
