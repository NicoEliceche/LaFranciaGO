import{q as r,Q as i}from"./index-BVcB4nQ2.js";const a=i`
  background: ${({theme:o})=>o.color.surface};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.xl};
  box-shadow: ${({theme:o})=>o.shadow.sm};
`;r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[3]};

  @media (min-width: ${({theme:o})=>o.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  }
`;const s=r.div`
  ${a}
  padding: ${({theme:o})=>o.layout.cardPadding};
`,d=r.div`
  ${a}
  padding: ${({theme:o})=>o.layout.cardPadding};
  display: grid;
  gap: ${({theme:o})=>o.spacing[3]};
`,t=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[3]};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,n=r.label`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
`,c=r.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[2]};
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.semibold};
`,l=r.span`
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
  line-height: 1.35;
`,p=r.input`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:o})=>o.color.borderStrong};
    background: ${({theme:o})=>o.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,g=r.select`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:o})=>o.color.borderStrong};
    background: ${({theme:o})=>o.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,$=r.textarea`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 8rem;
  padding: ${({theme:o})=>o.spacing[3]};
  border: 1px solid ${({theme:o})=>o.color.border};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  resize: vertical;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:o})=>o.color.borderStrong};
    background: ${({theme:o})=>o.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,b=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[3]};
`;r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};

  @media (min-width: ${({theme:o})=>o.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;r.button`
  ${a}
  min-height: 100%;
  padding: ${({theme:o})=>o.spacing[3]};
  text-align: left;
  cursor: pointer;
  display: grid;
  gap: ${({theme:o})=>o.spacing[1]};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({theme:o})=>o.shadow.md};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:o})=>o.color.primarySoft};
  }
`;r.span`
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`;r.span`
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
  line-height: 1.35;
`;const m=r.label`
  ${a}
  padding: ${({theme:o})=>o.layout.cardPadding};
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
  cursor: pointer;
`,u=r.span`
  color: ${({theme:o})=>o.color.text};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,h=r.span`
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
`,x=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:o})=>o.spacing[2]};
`;r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
`;const y=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
`,f=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[2]};
`,w=r.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:o})=>o.spacing[2]};
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.sm};
`,z=r.span`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: ${({theme:o})=>o.color.primary};
  flex: 0 0 auto;
`;r.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({theme:o})=>o.color.border};
`;const k=r.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.textMuted};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`;export{x as A,b as F,k as M,y as R,d as S,m as U,n as a,c as b,g as c,l as d,p as e,s as f,t as g,u as h,h as i,$ as j,w as k,z as l,f as m};
