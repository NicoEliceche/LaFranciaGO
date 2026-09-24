import{q as a}from"./estilos-DzHAJWDP.js";const t=a.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: ${({theme:o})=>o.spacing[3]};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,e=a.div`
  padding: ${({theme:o})=>o.spacing[3]};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};

  > span {
    display: block;
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }

  > strong {
    display: block;
    margin-top: 0.15rem;
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: ${({theme:o})=>o.typography.size.lg};
    font-variant-numeric: tabular-nums;
    line-height: 1.1;
  }

  &[data-tono='cobrado'] > strong {
    color: ${({theme:o})=>o.color.success};
  }

  &[data-tono='debe'] > strong {
    color: ${({theme:o})=>o.color.danger};
  }
`,i=a.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-bottom: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[3]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    align-items: end;
  }
`,s=a.label`
  display: grid;
  gap: 0.25rem;
  min-width: 0;

  > span {
    color: ${({theme:o})=>o.color.textSoft};
    font-size: ${({theme:o})=>o.typography.size.xs};
  }

  > input,
  > select {
    width: 100%;
    min-width: 0;
    height: 2.4rem;
    padding: 0 ${({theme:o})=>o.spacing[2]};

    border: 1px solid ${({theme:o})=>o.color.border};
    border-radius: ${({theme:o})=>o.radius.md};
    background: ${({theme:o})=>o.color.surface};
    color: ${({theme:o})=>o.color.text};
    font-family: inherit;
    font-size: ${({theme:o})=>o.typography.size.sm};

    &:focus-visible {
      outline: 2px solid ${({theme:o})=>o.color.primary};
      outline-offset: 1px;
    }
  }
`,n=a.div`
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surface};
  overflow: hidden;
`,d=a.div`
  overflow-x: auto;

  /* Debajo de esta medida la tabla se convierte en fichas. */
  @media (max-width: calc(${({theme:o})=>o.breakpoints.md} - 1px)) {
    overflow-x: visible;
  }
`,l=a.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({theme:o})=>o.typography.size.sm};

  th,
  td {
    padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
    text-align: start;
    white-space: nowrap;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 1;

    background: ${({theme:o})=>o.color.surfaceMuted};
    color: ${({theme:o})=>o.color.textSoft};
    font-family: ${({theme:o})=>o.typography.fontFamily.heading};
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  tbody tr {
    border-top: 1px solid ${({theme:o})=>o.color.border};

    &:hover {
      background: ${({theme:o})=>o.color.surfaceMuted};
    }
  }

  /* Los números se leen en columna: mismo ancho por dígito. */
  td[data-tipo='numero'] {
    font-variant-numeric: tabular-nums;
    text-align: end;
  }

  /* En el teléfono cada fila es una ficha con su etiqueta al costado. */
  @media (max-width: calc(${({theme:o})=>o.breakpoints.md} - 1px)) {
    display: block;

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
    }

    tr {
      padding: ${({theme:o})=>o.spacing[2]} 0;
    }

    td {
      display: grid;
      grid-template-columns: 8rem minmax(0, 1fr);
      gap: ${({theme:o})=>o.spacing[2]};
      padding-block: 0.3rem;
      white-space: normal;

      &::before {
        content: attr(data-etiqueta);
        color: ${({theme:o})=>o.color.textSoft};
        font-size: ${({theme:o})=>o.typography.size.xs};
      }
    }

    td[data-tipo='numero'] {
      text-align: start;
    }
  }
`,c=a.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
  border-top: 1px solid ${({theme:o})=>o.color.border};

  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};

  > span {
    flex: 1 1 auto;
  }
`,p=a.button`
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 ${({theme:o})=>o.spacing[2]};

  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.md};
  background: ${({theme:o})=>o.color.surface};
  color: ${({theme:o})=>o.color.text};
  font-family: inherit;
  font-size: ${({theme:o})=>o.typography.size.xs};
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.color.primary};
    outline-offset: 1px;
  }
`,g=a.span`
  display: inline-block;
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;

  &[data-tono='bien'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({theme:o})=>o.color.success};
  }

  &[data-tono='espera'] {
    background: rgba(217, 119, 6, 0.14);
    color: ${({theme:o})=>o.color.warning};
  }

  &[data-tono='mal'] {
    background: rgba(220, 38, 38, 0.14);
    color: ${({theme:o})=>o.color.danger};
  }
`;export{i as B,s as C,d as D,g as E,n as M,c as P,t as T,e as a,l as b,p as c};
