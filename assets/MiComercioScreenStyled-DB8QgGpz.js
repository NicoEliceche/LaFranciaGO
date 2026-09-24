import{q as r}from"./estilos-DzHAJWDP.js";import{L as a}from"./react-6hK8W6IX.js";const i=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  min-width: 0;
`,n=r.strong`
  display: block;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.lg};
  letter-spacing: -0.02em;
`,s=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem ${({theme:o})=>o.spacing[2]};
  margin-top: 0.15rem;
`,l=r.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};

  & + &::before {
    content: '·';
    margin-right: ${({theme:o})=>o.spacing[2]};
  }
`,c=r.button`
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
`,d=r.div`
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
`,p=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  flex-wrap: wrap;
  flex: 0 0 auto;
`,g=r.div`
  min-width: 0;
`,y=r.strong`
  display: block;
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
`,f=r.strong`
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
`,m=r.span`
  display: block;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
`,$=r.div`
  display: flex;
  flex: 0 0 auto;
  gap: ${({theme:o})=>o.spacing[1]};
`,h=r.button`
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
`,u=r(a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[3]} ${({theme:o})=>o.spacing[4]};
  border: 1px solid ${({theme:o})=>o.color.primary};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  text-decoration: none;
  transition: background 0.15s ease;

  span {
    display: grid;
    gap: 0.15rem;
    font-size: 0.85rem;
    color: ${({theme:o})=>o.color.textMuted};
  }

  strong {
    font-size: 0.98rem;
    color: ${({theme:o})=>o.color.text};
  }

  svg {
    flex-shrink: 0;
    color: ${({theme:o})=>o.color.primary};
  }

  &:hover {
    background: ${({theme:o})=>o.color.surfaceMuted};
  }
`,b=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing[1]};
`,x=r.button`
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
`,w=r.span`
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
`,z=r.span`
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
`,k=r.div`
  height: 18rem;
  border-radius: ${({theme:o})=>o.radius.lg};
  overflow: hidden;

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    height: 24rem;
  }
`,v=r.div`
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
`,S=r.span`
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
`,M=r.span`
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,F=r.div`
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
`,C=r.p`
  margin: 0.2rem 0 0;
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`,P=r.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:o})=>o.spacing[2]};

  @media (min-width: 48rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,j=r.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
`,q=r.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.semibold};
`,B=r.strong`
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xl};
  line-height: 1.1;
`,O=r.span`
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
`,D=r.div`
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
`,E=r.span`
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
`,T=r.button`
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
`,N=r.label`
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
`,R=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:o})=>o.color.border};

  &:last-child { border-bottom: 0; }

  > strong {
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.sm};
  }
`,A=r.div`
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
`,G=r.button`
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
`,I=r.input`
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
`,L=r.span`
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
`;export{z as A,k as B,i as C,R as D,u as E,P as M,c as N,v as O,T as P,D as R,b as S,A as T,n as a,s as b,l as c,x as d,w as e,f,N as g,m as h,G as i,d as j,g as k,y as l,I as m,L as n,$ as o,h as p,j as q,q as r,B as s,O as t,M as u,S as v,F as w,C as x,p as y,E as z};
