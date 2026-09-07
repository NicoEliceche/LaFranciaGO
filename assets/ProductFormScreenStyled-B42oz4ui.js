import{c as e,q as r}from"./index-62H5_yJs.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=e("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=e("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),n=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[3]};
  border-radius: ${({theme:o})=>o.radius.xl};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surface};
  box-shadow: ${({theme:o})=>o.shadow.sm};
`,s=r.div`
  display: grid;
  gap: ${({theme:o})=>o.spacing[3]};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,c=r.div`
  display: grid;
  gap: 0.3rem;
  min-width: 0;

  /* La descripción ocupa el ancho completo en dos columnas. */
  &:last-child {
    @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
      grid-column: 1 / -1;
    }
  }
`,l=r.label`
  color: ${({theme:o})=>o.color.text};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,p=r.span`
  color: ${({theme:o})=>o.color.textSoft};
  font-size: ${({theme:o})=>o.typography.size.xs};
  line-height: 1.4;
`,g=r.span`
  color: ${({theme:o})=>o.color.danger};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.semibold};
`,a=`
  width: 100%;
  min-height: 2.9rem;
  padding: 0 0.85rem;
  border-radius: 0.75rem;
  font-size: 1rem;
`,m=r.input`
  ${a};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  font-family: ${({theme:o})=>o.typography.fontFamily.body};

  &::placeholder {
    color: ${({theme:o})=>o.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:o})=>o.color.primary};
    box-shadow: 0 0 0 3px ${({theme:o})=>o.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:o})=>o.color.danger};
  }
`,y=r.select`
  ${a};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  font-family: ${({theme:o})=>o.typography.fontFamily.body};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({theme:o})=>o.color.primary};
    box-shadow: 0 0 0 3px ${({theme:o})=>o.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:o})=>o.color.danger};
  }
`,u=r.textarea`
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
  color: ${({theme:o})=>o.color.text};
  font-family: ${({theme:o})=>o.typography.fontFamily.body};
  font-size: 1rem;
  resize: vertical;

  &::placeholder {
    color: ${({theme:o})=>o.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:o})=>o.color.primary};
    box-shadow: 0 0 0 3px ${({theme:o})=>o.color.primarySoft};
  }
`,h=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spacing[2]};
  margin-top: ${({theme:o})=>o.spacing[1]};
`,b=r.span`
  padding: 0.1rem 0.5rem;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.primarySoft};
  color: ${({theme:o})=>o.color.primary};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`,f=r.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:o})=>o.spacing[2]};

  @media (min-width: ${({theme:o})=>o.breakpoints.md}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,$=r.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:o})=>o.radius.lg};
  border: 1px solid ${({theme:o})=>o.color.border};
  background: ${({theme:o})=>o.color.surfaceMuted};
  overflow: hidden;

  &[data-video='true'] {
    aspect-ratio: 16 / 9;
  }
`,x=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,w=r.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
`,k=r.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: rgba(5, 8, 22, 0.68);
  color: #fff;
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:o})=>o.color.danger};
  }
`,v=r.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  aspect-ratio: 1 / 1;
  border: 1px dashed ${({theme:o})=>o.color.borderStrong};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: transparent;
  color: ${({theme:o})=>o.color.primary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.xs};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({theme:o})=>o.color.primary};
    background: ${({theme:o})=>o.color.primarySoft};
  }

  &[data-busy='true'] {
    opacity: 0.7;
    cursor: progress;
  }

  &[data-wide='true'] {
    width: 100%;
    aspect-ratio: auto;
    min-height: 3.25rem;
    flex-direction: row;
    gap: ${({theme:o})=>o.spacing[2]};
  }
`,z=r.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({theme:o})=>o.spacing[1]};
  border: 0;
  border-radius: ${({theme:o})=>o.radius.full};
  background: ${({theme:o})=>o.color.brand};
  color: ${({theme:o})=>o.color.onPrimary};
  font-family: ${({theme:o})=>o.typography.fontFamily.heading};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:o})=>o.color.brandHover};
  }
`,S=r.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin: 0;
  padding: ${({theme:o})=>o.spacing[2]};
  border-radius: ${({theme:o})=>o.radius.lg};
  background: rgba(15, 157, 88, 0.12);
  color: ${({theme:o})=>o.color.success};
  font-size: ${({theme:o})=>o.typography.size.sm};
  font-weight: ${({theme:o})=>o.typography.weight.bold};
`;export{g as F,i as I,h as M,z as S,d as V,b as a,f as b,$ as c,x as d,k as e,v as f,w as g,n as h,s as i,c as j,l as k,m as l,y as m,p as n,u as o,S as p};
