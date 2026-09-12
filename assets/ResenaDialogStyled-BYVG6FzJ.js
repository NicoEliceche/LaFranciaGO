import{q as e}from"./index-CVpm7Ujl.js";const t=e.div`
  display: flex;
  gap: 0.15rem;
`,a=e.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: ${({theme:o})=>o.radius.md};
  background: transparent;
  color: ${({theme:o})=>o.color.border};
  cursor: pointer;
  transition: color 140ms ease, transform 140ms ease;

  /* Se pintan todas las anteriores, como en cualquier puntuación: cuatro
     estrellas es "cuatro de cinco", no "la cuarta". */
  &[data-encendida='true'] {
    color: ${({theme:o})=>o.color.warning};
  }

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color 140ms ease;

    &:hover {
      transform: none;
    }
  }
`,s=e.div`
  display: grid;
  gap: 0.4rem;
  margin-bottom: ${({theme:o})=>o.spacing[4]};

  > span {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
    font-weight: ${({theme:o})=>o.typography.weight.bold};
  }
`,i=e.span`
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
  min-height: 1.1rem;
`,n=e.textarea`
  width: 100%;
  min-height: 5rem;
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-family: inherit;
  font-size: ${({theme:o})=>o.typography.size.sm};
  resize: vertical;

  &::placeholder {
    color: ${({theme:o})=>o.color.textMuted};
  }
`;export{t as E,s as R,i as a,n as b,a as c};
