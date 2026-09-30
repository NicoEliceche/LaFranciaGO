import{j as a,ak as yt,al as bt,am as xt,c as wt,an as $t,e as xe,r as k,aj as jt,E as pe,p as he,q as Ct,a as De,b as Re,bw as R,d as Qe,X as Gt,k as We,aM as Qt,n as Wt,M as Xt,C as Zt,S as en,N as tn}from"./index-HdS9Gr1h.js";import{r as j,u as nn}from"./react-CKwpxk66.js";import{u as on}from"./useCurrentPosition-CEJrZTw8.js";import{C as rn}from"./ChatPedidoDialog-CYujBFSC.js";import{E as an,a as Xe}from"./ChatPedidoDialogStyled-BAi590Qd.js";import{g as sn,M as ln,q as ne,r as oe,s as re,t as ae}from"./MiComercioScreenStyled-C8XbFKm5.js";import{a as cn,R as dn,b as un}from"./ResenaDialogStyled-rTAj6stT.js";import{X as Ve,aQ as Ie,T as me,v as Et,a7 as vt,Q as gn,C as Ze,aR as et,t as fn,i as St,j as hn,M as zt,aS as pn,a1 as mn,aO as yn,aT as bn}from"./iconos-BTg8kJJJ.js";import{q as b,W as Pt}from"./estilos-D2nr0glO.js";import"./MotivoDialog-BcQVghSG.js";const tt=900,nt=2500;function xn({open:e,pedidoId:t,distanciaKm:r,onCerrar:o,onCotizado:n}){const[i,s]=j.useState(""),[l,c]=j.useState(""),[u,d]=j.useState(!1),[C,h]=j.useState(null),f=typeof r=="number"?Math.round(nt+r*tt):null;if(j.useEffect(()=>{e&&(s(f!==null?String(f):""),c(""),h(null))},[e,f]),j.useEffect(()=>{if(!e)return;const y=S=>{S.key==="Escape"&&o()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[o,e]),!e)return null;const p=async y=>{y.preventDefault();const S=Number(i);if(!(!Number.isFinite(S)||S<=0||u)){d(!0),h(null);try{await jt.cotizar(t,S,l.trim()||void 0),n(),o()}catch(x){h(x instanceof Error?x.message:"No pudimos enviar tu precio.")}finally{d(!1)}}};return a.jsx(yt,{role:"dialog","aria-modal":"true","aria-label":"Cotizar el flete",children:a.jsxs(bt,{children:[a.jsxs(xt,{children:[a.jsx(wt,{children:"¿Cuánto cobrás?"}),a.jsx($t,{type:"button",onClick:o,"aria-label":"Cerrar",children:a.jsx(Ve,{size:18,"aria-hidden":"true"})})]}),C?a.jsx(xe,{role:"alert","data-tono":"error",children:C}):null,a.jsxs("form",{onSubmit:p,children:[a.jsxs(sn,{children:[a.jsx("span",{children:"Tu precio"}),a.jsx("input",{type:"number",min:1,step:"1",value:i,autoFocus:!0,required:!0,onChange:y=>s(y.target.value)})]}),a.jsx(cn,{children:typeof r=="number"?`Son ${r} km. A ${k(tt)} el kilómetro más ${k(nt)} de base daría ${k(f??0)}, pero ponés lo que quieras.`:"No pudimos calcular la distancia. Fijate el detalle antes de poner precio."}),a.jsxs(dn,{children:[a.jsx("span",{children:"¿Querés aclarar algo?"}),a.jsx(un,{value:l,maxLength:300,placeholder:"Lo llevo hoy a la tarde. Necesito una mano para cargar.",onChange:y=>c(y.target.value)})]}),a.jsxs(an,{children:[a.jsx(Xe,{type:"button","data-tono":"suave",onClick:o,disabled:u,children:"Volver"}),a.jsx(Xe,{type:"submit",disabled:u||i.trim()==="",children:u?"Enviando…":"Enviar mi precio"})]})]})]})})}const wn=b.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 0.15rem ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
  }
`,$n=b.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  > svg {
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
  }
`,jn=b.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: ${({theme:e})=>e.color.success};
`,Cn=b.small`
  grid-column: 1 / -1;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;function En(e){if(!e)return"";const t=new Date(e.replace(" ","T")+"Z");return Number.isNaN(t.getTime())?"":`${t.toLocaleDateString("es-AR",{day:"2-digit",month:"2-digit"})} · ${t.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"})}`}function vn({esFletero:e}){const[t,r]=j.useState(null),[o,n]=j.useState(null),[i,s]=j.useState(!0);if(j.useEffect(()=>{let u=!0;return(async()=>{try{const C=await R.ganancias();u&&(r(C),n(null))}catch{u&&n("No pudimos cargar tus ganancias.")}finally{u&&s(!1)}})(),()=>{u=!1}},[]),o)return a.jsx(xe,{role:"alert","data-tono":"error",children:o});if(!t)return i?null:a.jsx(pe,{icon:Ie,title:"Sin datos todavía",text:"Cuando entregues tu primer pedido vas a ver acá cuánto ganaste.",dashed:!0});const l=t.total.entregas>0?Math.round(t.total.gano/t.total.entregas):0,c=u=>`${u} ${u===1?e?"viaje":"entrega":e?"viajes":"entregas"}`;return a.jsxs(he,{children:[a.jsxs(ln,{children:[a.jsxs(ne,{children:[a.jsx(oe,{children:"Ganaste hoy"}),a.jsx(re,{children:k(t.hoy.gano)}),a.jsx(ae,{children:c(t.hoy.entregas)})]}),a.jsxs(ne,{children:[a.jsx(oe,{children:"Esta semana"}),a.jsx(re,{children:k(t.semana.gano)}),a.jsx(ae,{children:c(t.semana.entregas)})]}),a.jsxs(ne,{children:[a.jsx(oe,{children:"Desde que empezaste"}),a.jsx(re,{children:k(t.total.gano)}),a.jsx(ae,{children:c(t.total.entregas)})]}),a.jsxs(ne,{children:[a.jsx(oe,{children:"Promedio por viaje"}),a.jsx(re,{children:k(l)}),a.jsx(ae,{children:"Sobre lo que ya entregaste"})]})]}),a.jsx(Ct,{title:e?"Tus viajes":"Lo que entregaste",subtitle:"Los últimos cincuenta, del más nuevo al más viejo."}),t.historial.length===0?a.jsx(pe,{icon:Ie,title:"Todavía no entregaste nada",text:"Cuando completes tu primer viaje lo vas a ver acá.",dashed:!0}):a.jsx(De,{children:a.jsx(Re,{children:t.historial.map((u,d)=>a.jsxs(wn,{children:[a.jsxs($n,{children:[u.tipo==="flete"?a.jsx(me,{size:14,"aria-hidden":"true"}):a.jsx(Et,{size:14,"aria-hidden":"true"}),u.comercio," → ",u.direccion_texto]}),a.jsx(jn,{children:k(u.gano)}),a.jsx(Cn,{children:En(u.entregado_en)})]},`${u.codigo}-${d}`))})})]})}var X={},Sn=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Bt={},D={};let qe;const zn=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];D.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};D.getSymbolTotalCodewords=function(t){return zn[t]};D.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};D.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');qe=t};D.isKanjiModeEnabled=function(){return typeof qe<"u"};D.toSJIS=function(t){return qe(t)};var we={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+r)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,n){if(e.isValid(o))return o;try{return t(o)}catch{return n}}})(we);function Tt(){this.buffer=[],this.length=0}Tt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Pn=Tt;function Z(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Z.prototype.set=function(e,t,r,o){const n=e*this.size+t;this.data[n]=r,o&&(this.reservedBit[n]=!0)};Z.prototype.get=function(e,t){return this.data[e*this.size+t]};Z.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r};Z.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Bn=Z,Mt={};(function(e){const t=D.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const n=Math.floor(o/7)+2,i=t(o),s=i===145?26:Math.ceil((i-13)/(2*n-2))*2,l=[i-7];for(let c=1;c<n-1;c++)l[c]=l[c-1]-s;return l.push(6),l.reverse()},e.getPositions=function(o){const n=[],i=e.getRowColCoords(o),s=i.length;for(let l=0;l<s;l++)for(let c=0;c<s;c++)l===0&&c===0||l===0&&c===s-1||l===s-1&&c===0||n.push([i[l],i[c]]);return n}})(Mt);var kt={};const Tn=D.getSymbolSize,ot=7;kt.getPositions=function(t){const r=Tn(t);return[[0,0],[r-ot,0],[0,r-ot]]};var At={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const i=n.size;let s=0,l=0,c=0,u=null,d=null;for(let C=0;C<i;C++){l=c=0,u=d=null;for(let h=0;h<i;h++){let f=n.get(C,h);f===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=f,l=1),f=n.get(h,C),f===d?c++:(c>=5&&(s+=t.N1+(c-5)),d=f,c=1)}l>=5&&(s+=t.N1+(l-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(n){const i=n.size;let s=0;for(let l=0;l<i-1;l++)for(let c=0;c<i-1;c++){const u=n.get(l,c)+n.get(l,c+1)+n.get(l+1,c)+n.get(l+1,c+1);(u===4||u===0)&&s++}return s*t.N2},e.getPenaltyN3=function(n){const i=n.size;let s=0,l=0,c=0;for(let u=0;u<i;u++){l=c=0;for(let d=0;d<i;d++)l=l<<1&2047|n.get(u,d),d>=10&&(l===1488||l===93)&&s++,c=c<<1&2047|n.get(d,u),d>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(n){let i=0;const s=n.data.length;for(let c=0;c<s;c++)i+=n.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function r(o,n,i){switch(o){case e.Patterns.PATTERN000:return(n+i)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(n+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return n*i%2+n*i%3===0;case e.Patterns.PATTERN110:return(n*i%2+n*i%3)%2===0;case e.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(n,i){const s=i.size;for(let l=0;l<s;l++)for(let c=0;c<s;c++)i.isReserved(c,l)||i.xor(c,l,r(n,c,l))},e.getBestMask=function(n,i){const s=Object.keys(e.Patterns).length;let l=0,c=1/0;for(let u=0;u<s;u++){i(u),e.applyMask(u,n);const d=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(u,n),d<c&&(c=d,l=u)}return l}})(At);var $e={};const F=we,ie=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],se=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$e.getBlocksCount=function(t,r){switch(r){case F.L:return ie[(t-1)*4+0];case F.M:return ie[(t-1)*4+1];case F.Q:return ie[(t-1)*4+2];case F.H:return ie[(t-1)*4+3];default:return}};$e.getTotalCodewordsCount=function(t,r){switch(r){case F.L:return se[(t-1)*4+0];case F.M:return se[(t-1)*4+1];case F.Q:return se[(t-1)*4+2];case F.H:return se[(t-1)*4+3];default:return}};var Nt={},je={};const Q=new Uint8Array(512),ye=new Uint8Array(256);(function(){let t=1;for(let r=0;r<255;r++)Q[r]=t,ye[t]=r,t<<=1,t&256&&(t^=285);for(let r=255;r<512;r++)Q[r]=Q[r-255]})();je.log=function(t){if(t<1)throw new Error("log("+t+")");return ye[t]};je.exp=function(t){return Q[t]};je.mul=function(t,r){return t===0||r===0?0:Q[ye[t]+ye[r]]};(function(e){const t=je;e.mul=function(o,n){const i=new Uint8Array(o.length+n.length-1);for(let s=0;s<o.length;s++)for(let l=0;l<n.length;l++)i[s+l]^=t.mul(o[s],n[l]);return i},e.mod=function(o,n){let i=new Uint8Array(o);for(;i.length-n.length>=0;){const s=i[0];for(let c=0;c<n.length;c++)i[c]^=t.mul(n[c],s);let l=0;for(;l<i.length&&i[l]===0;)l++;i=i.slice(l)}return i},e.generateECPolynomial=function(o){let n=new Uint8Array([1]);for(let i=0;i<o;i++)n=e.mul(n,new Uint8Array([1,t.exp(i)]));return n}})(Nt);const Dt=Nt;function He(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}He.prototype.initialize=function(t){this.degree=t,this.genPoly=Dt.generateECPolynomial(this.degree)};He.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(t.length+this.degree);r.set(t);const o=Dt.mod(r,this.genPoly),n=this.degree-o.length;if(n>0){const i=new Uint8Array(this.degree);return i.set(o,n),i}return o};var Mn=He,Rt={},U={},Ke={};Ke.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var L={};const It="[0-9]+",kn="[A-Z $%*+\\-./:]+";let W="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";W=W.replace(/u/g,"\\u");const An="(?:(?![A-Z0-9 $%*+\\-./:]|"+W+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(W,"g");L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");L.BYTE=new RegExp(An,"g");L.NUMERIC=new RegExp(It,"g");L.ALPHANUMERIC=new RegExp(kn,"g");const Nn=new RegExp("^"+W+"$"),Dn=new RegExp("^"+It+"$"),Rn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return Nn.test(t)};L.testNumeric=function(t){return Dn.test(t)};L.testAlphanumeric=function(t){return Rn.test(t)};(function(e){const t=Ke,r=L;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return r.testNumeric(i)?e.NUMERIC:r.testAlphanumeric(i)?e.ALPHANUMERIC:r.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function o(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(i,s){if(e.isValid(i))return i;try{return o(i)}catch{return s}}})(U);(function(e){const t=D,r=$e,o=we,n=U,i=Ke,s=7973,l=t.getBCHDigit(s);function c(h,f,p){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,p,h))return y}function u(h,f){return n.getCharCountIndicator(h,f)+4}function d(h,f){let p=0;return h.forEach(function(y){const S=u(y.mode,f);p+=S+y.getBitsLength()}),p}function C(h,f){for(let p=1;p<=40;p++)if(d(h,p)<=e.getCapacity(p,f,n.MIXED))return p}e.from=function(f,p){return i.isValid(f)?parseInt(f,10):p},e.getCapacity=function(f,p,y){if(!i.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=n.BYTE);const S=t.getSymbolTotalCodewords(f),x=r.getTotalCodewordsCount(f,p),$=(S-x)*8;if(y===n.MIXED)return $;const w=$-u(y,f);switch(y){case n.NUMERIC:return Math.floor(w/10*3);case n.ALPHANUMERIC:return Math.floor(w/11*2);case n.KANJI:return Math.floor(w/13);case n.BYTE:default:return Math.floor(w/8)}},e.getBestVersionForData=function(f,p){let y;const S=o.from(p,o.M);if(Array.isArray(f)){if(f.length>1)return C(f,S);if(f.length===0)return 1;y=f[0]}else y=f;return c(y.mode,y.getLength(),S)},e.getEncodedBits=function(f){if(!i.isValid(f)||f<7)throw new Error("Invalid QR Code version");let p=f<<12;for(;t.getBCHDigit(p)-l>=0;)p^=s<<t.getBCHDigit(p)-l;return f<<12|p}})(Rt);var Lt={};const Le=D,_t=1335,In=21522,rt=Le.getBCHDigit(_t);Lt.getEncodedBits=function(t,r){const o=t.bit<<3|r;let n=o<<10;for(;Le.getBCHDigit(n)-rt>=0;)n^=_t<<Le.getBCHDigit(n)-rt;return(o<<10|n)^In};var Ft={};const Ln=U;function H(e){this.mode=Ln.NUMERIC,this.data=e.toString()}H.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(t){let r,o,n;for(r=0;r+3<=this.data.length;r+=3)o=this.data.substr(r,3),n=parseInt(o,10),t.put(n,10);const i=this.data.length-r;i>0&&(o=this.data.substr(r),n=parseInt(o,10),t.put(n,i*3+1))};var _n=H;const Fn=U,Ee=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function K(e){this.mode=Fn.ALPHANUMERIC,this.data=e}K.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(t){let r;for(r=0;r+2<=this.data.length;r+=2){let o=Ee.indexOf(this.data[r])*45;o+=Ee.indexOf(this.data[r+1]),t.put(o,11)}this.data.length%2&&t.put(Ee.indexOf(this.data[r]),6)};var Un=K;const Vn=U;function O(e){this.mode=Vn.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}O.getBitsLength=function(t){return t*8};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)};var qn=O;const Hn=U,Kn=D;function J(e){this.mode=Hn.KANJI,this.data=e}J.getBitsLength=function(t){return t*13};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=Kn.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),e.put(r,13)}};var On=J,Ut={exports:{}};(function(e){var t={single_source_shortest_paths:function(r,o,n){var i={},s={};s[o]=0;var l=t.PriorityQueue.make();l.push(o,0);for(var c,u,d,C,h,f,p,y,S;!l.empty();){c=l.pop(),u=c.value,C=c.cost,h=r[u]||{};for(d in h)h.hasOwnProperty(d)&&(f=h[d],p=C+f,y=s[d],S=typeof s[d]>"u",(S||y>p)&&(s[d]=p,l.push(d,p),i[d]=u))}if(typeof n<"u"&&typeof s[n]>"u"){var x=["Could not find a path from ",o," to ",n,"."].join("");throw new Error(x)}return i},extract_shortest_path_from_predecessor_list:function(r,o){for(var n=[],i=o;i;)n.push(i),r[i],i=r[i];return n.reverse(),n},find_path:function(r,o,n){var i=t.single_source_shortest_paths(r,o,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(r){var o=t.PriorityQueue,n={},i;r=r||{};for(i in o)o.hasOwnProperty(i)&&(n[i]=o[i]);return n.queue=[],n.sorter=r.sorter||o.default_sorter,n},default_sorter:function(r,o){return r.cost-o.cost},push:function(r,o){var n={value:r,cost:o};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ut);var Jn=Ut.exports;(function(e){const t=U,r=_n,o=Un,n=qn,i=On,s=L,l=D,c=Jn;function u(x){return unescape(encodeURIComponent(x)).length}function d(x,$,w){const m=[];let E;for(;(E=x.exec(w))!==null;)m.push({data:E[0],index:E.index,mode:$,length:E[0].length});return m}function C(x){const $=d(s.NUMERIC,t.NUMERIC,x),w=d(s.ALPHANUMERIC,t.ALPHANUMERIC,x);let m,E;return l.isKanjiModeEnabled()?(m=d(s.BYTE,t.BYTE,x),E=d(s.KANJI,t.KANJI,x)):(m=d(s.BYTE_KANJI,t.BYTE,x),E=[]),$.concat(w,m,E).sort(function(P,A){return P.index-A.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function h(x,$){switch($){case t.NUMERIC:return r.getBitsLength(x);case t.ALPHANUMERIC:return o.getBitsLength(x);case t.KANJI:return i.getBitsLength(x);case t.BYTE:return n.getBitsLength(x)}}function f(x){return x.reduce(function($,w){const m=$.length-1>=0?$[$.length-1]:null;return m&&m.mode===w.mode?($[$.length-1].data+=w.data,$):($.push(w),$)},[])}function p(x){const $=[];for(let w=0;w<x.length;w++){const m=x[w];switch(m.mode){case t.NUMERIC:$.push([m,{data:m.data,mode:t.ALPHANUMERIC,length:m.length},{data:m.data,mode:t.BYTE,length:m.length}]);break;case t.ALPHANUMERIC:$.push([m,{data:m.data,mode:t.BYTE,length:m.length}]);break;case t.KANJI:$.push([m,{data:m.data,mode:t.BYTE,length:u(m.data)}]);break;case t.BYTE:$.push([{data:m.data,mode:t.BYTE,length:u(m.data)}])}}return $}function y(x,$){const w={},m={start:{}};let E=["start"];for(let z=0;z<x.length;z++){const P=x[z],A=[];for(let M=0;M<P.length;M++){const N=P[M],B=""+z+M;A.push(B),w[B]={node:N,lastCount:0},m[B]={};for(let V=0;V<E.length;V++){const T=E[V];w[T]&&w[T].node.mode===N.mode?(m[T][B]=h(w[T].lastCount+N.length,N.mode)-h(w[T].lastCount,N.mode),w[T].lastCount+=N.length):(w[T]&&(w[T].lastCount=N.length),m[T][B]=h(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,$))}}E=A}for(let z=0;z<E.length;z++)m[E[z]].end=0;return{map:m,table:w}}function S(x,$){let w;const m=t.getBestModeForData(x);if(w=t.from($,m),w!==t.BYTE&&w.bit<m.bit)throw new Error('"'+x+'" cannot be encoded with mode '+t.toString(w)+`.
 Suggested mode is: `+t.toString(m));switch(w===t.KANJI&&!l.isKanjiModeEnabled()&&(w=t.BYTE),w){case t.NUMERIC:return new r(x);case t.ALPHANUMERIC:return new o(x);case t.KANJI:return new i(x);case t.BYTE:return new n(x)}}e.fromArray=function($){return $.reduce(function(w,m){return typeof m=="string"?w.push(S(m,null)):m.data&&w.push(S(m.data,m.mode)),w},[])},e.fromString=function($,w){const m=C($,l.isKanjiModeEnabled()),E=p(m),z=y(E,w),P=c.find_path(z.map,"start","end"),A=[];for(let M=1;M<P.length-1;M++)A.push(z.table[P[M]].node);return e.fromArray(f(A))},e.rawSplit=function($){return e.fromArray(C($,l.isKanjiModeEnabled()))}})(Ft);const Ce=D,ve=we,Yn=Pn,Gn=Bn,Qn=Mt,Wn=kt,_e=At,Fe=$e,Xn=Mn,be=Rt,Zn=Lt,eo=U,Se=Ft;function to(e,t){const r=e.size,o=Wn.getPositions(t);for(let n=0;n<o.length;n++){const i=o[n][0],s=o[n][1];for(let l=-1;l<=7;l++)if(!(i+l<=-1||r<=i+l))for(let c=-1;c<=7;c++)s+c<=-1||r<=s+c||(l>=0&&l<=6&&(c===0||c===6)||c>=0&&c<=6&&(l===0||l===6)||l>=2&&l<=4&&c>=2&&c<=4?e.set(i+l,s+c,!0,!0):e.set(i+l,s+c,!1,!0))}}function no(e){const t=e.size;for(let r=8;r<t-8;r++){const o=r%2===0;e.set(r,6,o,!0),e.set(6,r,o,!0)}}function oo(e,t){const r=Qn.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],i=r[o][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?e.set(n+s,i+l,!0,!0):e.set(n+s,i+l,!1,!0)}}function ro(e,t){const r=e.size,o=be.getEncodedBits(t);let n,i,s;for(let l=0;l<18;l++)n=Math.floor(l/3),i=l%3+r-8-3,s=(o>>l&1)===1,e.set(n,i,s,!0),e.set(i,n,s,!0)}function ze(e,t,r){const o=e.size,n=Zn.getEncodedBits(t,r);let i,s;for(i=0;i<15;i++)s=(n>>i&1)===1,i<6?e.set(i,8,s,!0):i<8?e.set(i+1,8,s,!0):e.set(o-15+i,8,s,!0),i<8?e.set(8,o-i-1,s,!0):i<9?e.set(8,15-i-1+1,s,!0):e.set(8,15-i-1,s,!0);e.set(o-8,8,1,!0)}function ao(e,t){const r=e.size;let o=-1,n=r-1,i=7,s=0;for(let l=r-1;l>0;l-=2)for(l===6&&l--;;){for(let c=0;c<2;c++)if(!e.isReserved(n,l-c)){let u=!1;s<t.length&&(u=(t[s]>>>i&1)===1),e.set(n,l-c,u),i--,i===-1&&(s++,i=7)}if(n+=o,n<0||r<=n){n-=o,o=-o;break}}}function io(e,t,r){const o=new Yn;r.forEach(function(c){o.put(c.mode.bit,4),o.put(c.getLength(),eo.getCharCountIndicator(c.mode,e)),c.write(o)});const n=Ce.getSymbolTotalCodewords(e),i=Fe.getTotalCodewordsCount(e,t),s=(n-i)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const l=(s-o.getLengthInBits())/8;for(let c=0;c<l;c++)o.put(c%2?17:236,8);return so(o,e,t)}function so(e,t,r){const o=Ce.getSymbolTotalCodewords(t),n=Fe.getTotalCodewordsCount(t,r),i=o-n,s=Fe.getBlocksCount(t,r),l=o%s,c=s-l,u=Math.floor(o/s),d=Math.floor(i/s),C=d+1,h=u-d,f=new Xn(h);let p=0;const y=new Array(s),S=new Array(s);let x=0;const $=new Uint8Array(e.buffer);for(let P=0;P<s;P++){const A=P<c?d:C;y[P]=$.slice(p,p+A),S[P]=f.encode(y[P]),p+=A,x=Math.max(x,A)}const w=new Uint8Array(o);let m=0,E,z;for(E=0;E<x;E++)for(z=0;z<s;z++)E<y[z].length&&(w[m++]=y[z][E]);for(E=0;E<h;E++)for(z=0;z<s;z++)w[m++]=S[z][E];return w}function lo(e,t,r,o){let n;if(Array.isArray(e))n=Se.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const d=Se.rawSplit(e);u=be.getBestVersionForData(d,r)}n=Se.fromString(e,u||40)}else throw new Error("Invalid data");const i=be.getBestVersionForData(n,r);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=io(t,r,n),l=Ce.getSymbolSize(t),c=new Gn(l);return to(c,t),no(c),oo(c,t),ze(c,r,0),t>=7&&ro(c,t),ao(c,s),isNaN(o)&&(o=_e.getBestMask(c,ze.bind(null,c,r))),_e.applyMask(o,c),ze(c,r,o),{modules:c,version:t,errorCorrectionLevel:r,maskPattern:o,segments:n}}Bt.create=function(t,r){if(typeof t>"u"||t==="")throw new Error("No input text");let o=ve.M,n,i;return typeof r<"u"&&(o=ve.from(r.errorCorrectionLevel,ve.M),n=be.from(r.version),i=_e.from(r.maskPattern),r.toSJISFunc&&Ce.setToSJISFunction(r.toSJISFunc)),lo(t,n,o,i)};var Vt={},Oe={};(function(e){function t(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let o=r.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+r);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(i){return[i,i]}))),o.length===6&&o.push("F","F");const n=parseInt(o.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const n=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,i=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:i,scale:i?4:s,margin:n,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,n){return n.width&&n.width>=o+n.margin*2?n.width/(o+n.margin*2):n.scale},e.getImageWidth=function(o,n){const i=e.getScale(o,n);return Math.floor((o+n.margin*2)*i)},e.qrToImageData=function(o,n,i){const s=n.modules.size,l=n.modules.data,c=e.getScale(s,i),u=Math.floor((s+i.margin*2)*c),d=i.margin*c,C=[i.color.light,i.color.dark];for(let h=0;h<u;h++)for(let f=0;f<u;f++){let p=(h*u+f)*4,y=i.color.light;if(h>=d&&f>=d&&h<u-d&&f<u-d){const S=Math.floor((h-d)/c),x=Math.floor((f-d)/c);y=C[l[S*s+x]?1:0]}o[p++]=y.r,o[p++]=y.g,o[p++]=y.b,o[p]=y.a}}})(Oe);(function(e){const t=Oe;function r(n,i,s){n.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,l){let c=l,u=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(u=o()),c=t.getOptions(c);const d=t.getImageWidth(i.modules.size,c),C=u.getContext("2d"),h=C.createImageData(d,d);return t.qrToImageData(h.data,i,c),r(C,u,d),C.putImageData(h,0,0),u},e.renderToDataURL=function(i,s,l){let c=l;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const u=e.render(i,s,c),d=c.type||"image/png",C=c.rendererOpts||{};return u.toDataURL(d,C.quality)}})(Vt);var qt={};const co=Oe;function at(e,t){const r=e.a/255,o=t+'="'+e.hex+'"';return r<1?o+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':o}function Pe(e,t,r){let o=e+t;return typeof r<"u"&&(o+=" "+r),o}function uo(e,t,r){let o="",n=0,i=!1,s=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),u=Math.floor(l/t);!c&&!i&&(i=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(o+=i?Pe("M",c+r,.5+u+r):Pe("m",n,0),n=0,i=!1),c+1<t&&e[l+1]||(o+=Pe("h",s),s=0)):n++}return o}qt.render=function(t,r,o){const n=co.getOptions(r),i=t.modules.size,s=t.modules.data,l=i+n.margin*2,c=n.color.light.a?"<path "+at(n.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+at(n.color.dark,"stroke")+' d="'+uo(s,i,n.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+d+' shape-rendering="crispEdges">'+c+u+`</svg>
`;return typeof o=="function"&&o(null,h),h};const go=Sn,Ue=Bt,Ht=Vt,fo=qt;function Je(e,t,r,o,n){const i=[].slice.call(arguments,1),s=i.length,l=typeof i[s-1]=="function";if(!l&&!go())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(n=r,r=t,t=o=void 0):s===3&&(t.getContext&&typeof n>"u"?(n=o,o=void 0):(n=o,o=r,r=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=t,t=o=void 0):s===2&&!t.getContext&&(o=r,r=t,t=void 0),new Promise(function(c,u){try{const d=Ue.create(r,o);c(e(d,t,o))}catch(d){u(d)}})}try{const c=Ue.create(r,o);n(null,e(c,t,o))}catch(c){n(c)}}X.create=Ue.create;X.toCanvas=Je.bind(null,Ht.render);X.toDataURL=Je.bind(null,Ht.renderToDataURL);X.toString=Je.bind(null,function(e,t,r){return fo.render(e,r)});const ho=Pt`
  from { opacity: 0; }
  to { opacity: 1; }
`,po=Pt`
  from { opacity: 0; transform: translateY(1.5rem); }
  to { opacity: 1; transform: translateY(0); }
`,mo=b.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${ho} 160ms ease-out;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: center;
    padding: ${({theme:e})=>e.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,yo=b.div`
  position: relative;
  width: 100%;
  max-height: 92dvh;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl} ${({theme:e})=>e.radius.xl} 0 0;
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${po} 200ms ease-out;
  padding-bottom: calc(${({theme:e})=>e.spacing[4]} + env(safe-area-inset-bottom));

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: 26rem;
    border-radius: ${({theme:e})=>e.radius.xl};
    padding-bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,bo=b.button`
  position: absolute;
  top: ${({theme:e})=>e.spacing[3]};
  right: ${({theme:e})=>e.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.color.text};
  }
`,xo=b.h2`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding-right: 2.5rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};

  svg {
    color: ${({theme:e})=>e.color.primary};
  }
`,wo=b.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,$o=b.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,jo=b.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  text-align: center;

  > span {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
    font-variant-numeric: tabular-nums;
    color: ${({theme:e})=>e.color.success};
  }

  > small {
    color: ${({theme:e})=>e.color.textMuted};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }

  &[data-debe='true'] > span {
    color: ${({theme:e})=>e.color.warning};
  }
`,it=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
`,st=b.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  > strong {
    font-size: ${({theme:e})=>e.typography.size.sm};
    font-variant-numeric: tabular-nums;
    /* Un CBU son 22 dígitos: si no se puede partir, desborda la caja. */
    overflow-wrap: anywhere;
  }
`,lt=b.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,ct=b.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  /* 44px: se toca con el pulgar, muchas veces con guantes. */
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Co=b.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-align: center;
`,Eo=b.div`
  display: grid;
  justify-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
`,vo=b.span`
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,So=b.img`
  width: 11rem;
  height: 11rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: #fff;
`,zo=b.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Po=b.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.45;
  text-align: center;
`,dt=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[4]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`;function Bo(){const[e,t]=j.useState(null);return j.useEffect(()=>{if(!e)return;const o=window.setTimeout(()=>t(null),2e3);return()=>window.clearTimeout(o)},[e]),{copiado:e,copiar:async(o,n)=>{try{await navigator.clipboard.writeText(n),t(o)}catch{}}}}function To({abierto:e,alCerrar:t}){const[r,o]=j.useState(null),[n,i]=j.useState(!0),[s,l]=j.useState(null),{copiado:c,copiar:u}=Bo();if(j.useEffect(()=>{if(!e)return;let h=!0;return i(!0),R.deuda().then(f=>{h&&o(f)}).catch(()=>{}).finally(()=>{h&&i(!1)}),()=>{h=!1}},[e]),j.useEffect(()=>{const h=(r==null?void 0:r.cobro.mercadopago)??(r==null?void 0:r.cobro.alias);if(!h){l(null);return}let f=!0;return X.toDataURL(h,{margin:1,width:320}).then(p=>{f&&l(p)}).catch(()=>{f&&l(null)}),()=>{f=!1}},[r]),!e)return null;const d=r==null?void 0:r.cobro,C=!!(d!=null&&d.cbu||d!=null&&d.alias||d!=null&&d.mercadopago);return a.jsx(mo,{role:"dialog","aria-modal":"true","aria-label":"Pagar lo que debés",onClick:h=>{h.target===h.currentTarget&&t()},children:a.jsxs(yo,{children:[a.jsx(bo,{type:"button",onClick:t,"aria-label":"Cerrar",children:a.jsx(Ve,{size:18,"aria-hidden":"true"})}),a.jsxs(xo,{children:[a.jsx(vt,{size:20,"aria-hidden":"true"}),"Pagar deuda"]}),a.jsx(wo,{children:"Es lo que cobraste en efectivo y todavía no transferiste."}),a.jsx($o,{children:n?a.jsxs(dt,{children:[a.jsx(gn,{size:18,"aria-hidden":"true"}),"Buscando tu saldo…"]}):a.jsxs(a.Fragment,{children:[a.jsxs(jo,{"data-debe":((r==null?void 0:r.deuda)??0)>0,children:[a.jsx("span",{children:k((r==null?void 0:r.deuda)??0)}),a.jsx("small",{children:((r==null?void 0:r.deuda)??0)>0?"Es lo que tenés que transferir.":"Estás al día. No debés nada."})]}),C?a.jsxs(a.Fragment,{children:[d!=null&&d.alias?a.jsxs(it,{children:[a.jsxs(st,{children:[a.jsx(lt,{children:"Alias"}),a.jsx("strong",{children:d.alias})]}),a.jsx(ct,{type:"button",onClick:()=>void u("alias",d.alias??""),"aria-label":"Copiar el alias",children:c==="alias"?a.jsx(Ze,{size:16,"aria-hidden":"true"}):a.jsx(et,{size:16,"aria-hidden":"true"})})]}):null,d!=null&&d.cbu?a.jsxs(it,{children:[a.jsxs(st,{children:[a.jsx(lt,{children:"CBU"}),a.jsx("strong",{children:d.cbu})]}),a.jsx(ct,{type:"button",onClick:()=>void u("cbu",d.cbu??""),"aria-label":"Copiar el CBU",children:c==="cbu"?a.jsx(Ze,{size:16,"aria-hidden":"true"}):a.jsx(et,{size:16,"aria-hidden":"true"})})]}):null,a.jsxs(Co,{children:["A nombre de ",a.jsx("strong",{children:d==null?void 0:d.titular})]}),s?a.jsxs(Eo,{children:[a.jsx(vo,{children:"Mercado Pago"}),a.jsx(So,{src:s,alt:"Código QR para pagar por Mercado Pago"}),a.jsx(zo,{children:d==null?void 0:d.titular})]}):null,a.jsx(Po,{children:"Después de transferir, avisale a la administración para que quede saldado."})]}):a.jsx(dt,{children:"Todavía no están cargados los datos para transferir. Pedíselos a la administración."})]})})]})})}const Mo=b.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,le=b.article`
  display: grid;
  /* El botón se apoya abajo: con textos de distinto largo, si no, quedaban a
     distinta altura y las tres tarjetas se veían desparejas. */
  grid-template-rows: auto auto 1fr;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};

  /* Lo que tiene algo se despega: de un vistazo se ve si hay trabajo. */
  &[data-destacado='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({theme:e})=>e.shadow.sm};
  }
`,ce=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};

  &[data-destacado='true'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,de=b.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,ue=b.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  line-height: 1.1;
  /* Los dígitos de la misma caja: un número que baila al refrescarse se lee
     como un error de la pantalla. */
  font-variant-numeric: tabular-nums;
`,ge=b.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,fe=b.button`
  align-self: end;
  justify-self: start;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font: inherit;
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;

  /* El de la lista de disponibles va pleno: es lo que se toca para trabajar,
     y los otros dos son para mirar. */
  &[data-fuerte] {
    border-color: transparent;
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-fuerte]:hover {
    background: ${({theme:e})=>e.color.brandHover};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function ko({esFletero:e,enCurso:t,disponibles:r,onVer:o}){const[n,i]=j.useState(null),[s,l]=j.useState(null),[c,u]=j.useState(!1);j.useEffect(()=>{let h=!0;return R.ganancias().then(f=>{h&&i(f)}).catch(()=>{}),R.deuda().then(f=>{h&&l(f.deuda)}).catch(()=>{}),()=>{h=!1}},[]);const d=e?"flete":"envío",C=e?"fletes":"envíos";return a.jsxs(Mo,{children:[a.jsxs(le,{"data-destacado":t>0,children:[a.jsx(ce,{"data-destacado":t>0,children:a.jsx(me,{size:24,"aria-hidden":"true"})}),a.jsxs(de,{children:[a.jsx(ue,{children:t}),a.jsx(ge,{children:t===1?`${d} en curso`:`${C} en curso`})]}),t>0?a.jsxs(fe,{type:"button",onClick:()=>o("mios"),children:["Ver ",e?"mis fletes":"mis envíos"]}):null]}),a.jsxs(le,{children:[a.jsx(ce,{children:a.jsx(fn,{size:24,"aria-hidden":"true"})}),a.jsxs(de,{children:[a.jsx(ue,{children:n?k(n.hoy.gano):"—"}),a.jsxs(ge,{children:["Ganaste hoy",n?` · ${n.hoy.entregas} ${n.hoy.entregas===1?"entrega":"entregas"}`:""]})]}),a.jsx(fe,{type:"button",onClick:()=>o("ganancias"),children:"Ver el detalle"})]}),s!==null&&s>0?a.jsxs(le,{"data-destacado":!0,children:[a.jsx(ce,{"data-destacado":!0,children:a.jsx(vt,{size:24,"aria-hidden":"true"})}),a.jsxs(de,{children:[a.jsx(ue,{children:k(s)}),a.jsx(ge,{children:"Debés de lo cobrado en efectivo"})]}),a.jsx(fe,{type:"button",onClick:()=>u(!0),children:"Pagar deuda"})]}):null,a.jsxs(le,{"data-destacado":r>0,children:[a.jsx(ce,{"data-destacado":r>0,children:a.jsx(St,{size:24,"aria-hidden":"true"})}),a.jsxs(de,{children:[a.jsx(ue,{children:r}),a.jsx(ge,{children:r===1?`${e?"Flete":"Pedido"} esperando`:`${e?"Fletes":"Pedidos"} esperando`})]}),a.jsxs(fe,{type:"button",onClick:()=>o("disponibles"),"data-fuerte":!0,children:["Ver ",e?"los fletes":"los pedidos"]})]}),a.jsx(To,{abierto:c,alCerrar:()=>u(!1)})]})}const Be=b.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-of-type {
    border-bottom: 0;
  }
`,Te=b.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: 0.15rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Y=b.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  /* Una dirección larga se parte en lugar de desbordar el modal. */
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Ao=b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.2rem 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
`,No=b.span`
  min-width: 0;

  > span {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Do=b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
  padding-top: ${({theme:e})=>e.spacing[1]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
  font-size: ${({theme:e})=>e.typography.size.sm};

  > strong {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`;function Ro({open:e,pedidoId:t,onClose:r,onTomar:o,esFletero:n=!1,yaEsMio:i=!1,onAbrirChat:s}){const[l,c]=j.useState(null),[u,d]=j.useState(null),[C,h]=j.useState(!1);if(j.useEffect(()=>{!e||!t||(c(null),d(null),R.detalle(t).then(c).catch(()=>d("No pudimos cargar el pedido.")))},[e,t]),j.useEffect(()=>{if(!e)return;const p=y=>{y.key==="Escape"&&r()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[r,e]),!e||!t)return null;const f=async()=>{h(!0),d(null);try{await o(t)}catch(p){d(p instanceof Error?p.message:`No pudimos tomar ${n?"el flete":"el pedido"}.`)}finally{h(!1)}};return a.jsx(yt,{onClick:r,role:"presentation",children:a.jsxs(bt,{role:"dialog","aria-modal":"true","aria-label":n?"Detalle del flete":"Detalle del pedido",onClick:p=>p.stopPropagation(),children:[a.jsxs(xt,{children:[a.jsxs("div",{children:[a.jsxs(wt,{children:[n?"Flete":"Pedido"," ",(l==null?void 0:l.pedido.codigo)??""]}),a.jsx(Qe,{children:"Mirá el detalle antes de tomarlo."})]}),a.jsx($t,{type:"button",onClick:r,"aria-label":"Cerrar",children:a.jsx(Ve,{size:18,"aria-hidden":"true"})})]}),u?a.jsx(xe,{role:"alert","data-tono":"error",children:u}):null,l?a.jsxs(a.Fragment,{children:[a.jsxs(Be,{children:[a.jsxs(Te,{children:[a.jsx(hn,{size:15,"aria-hidden":"true"}),"Retirás en"]}),a.jsx(Y,{children:l.pedido.comercio}),a.jsx(Y,{"data-suave":!0,children:l.pedido.comercio_direccion})]}),a.jsxs(Be,{children:[a.jsxs(Te,{children:[a.jsx(zt,{size:15,"aria-hidden":"true"}),"Entregás en"]}),a.jsx(Y,{children:l.pedido.direccion_texto}),a.jsxs(Y,{"data-suave":!0,children:[l.pedido.cliente,l.pedido.cliente_telefono?` · ${l.pedido.cliente_telefono}`:""]})]}),a.jsxs(Be,{children:[a.jsxs(Te,{children:[a.jsx(pn,{size:15,"aria-hidden":"true"}),"Lo que pidió"]}),l.items.map((p,y)=>a.jsxs(Ao,{children:[a.jsxs(No,{children:[p.nombre,a.jsxs("span",{children:[" · ",Gt(p.unidad_venta,p.escalon)]})]}),a.jsx("span",{children:k(p.subtotal)})]},`${p.nombre}-${y}`)),a.jsxs(Do,{children:[a.jsxs("span",{children:["Total ",n?"del flete":"del pedido"]}),a.jsx("strong",{children:k(l.pedido.total)})]}),l.pedido.metodo_pago?a.jsxs(Y,{"data-suave":!0,children:["Paga con ",l.pedido.metodo_pago]}):null]}),i?s&&l.pedido.id?a.jsxs(We,{type:"button",onClick:()=>s(l.pedido.id),children:["Abrir el chat ",n?"del flete":"del pedido"]}):null:a.jsx(We,{type:"button",onClick:()=>void f(),disabled:C,children:C?"Tomando…":n?"Tomar flete":"Tomar pedido"})]}):a.jsx(Qe,{children:"Cargando…"})]})})}const ut=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  > span {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.base};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    min-width: 0;
  }
`,gt=b.span`
  flex: 0 0 auto;
  padding: 0.2rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,ft=b.div`
  display: grid;
  gap: 0.1rem;
`,q=b.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow-wrap: anywhere;

  &[data-suave] {
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Me=b.button`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Io=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;

  > svg {
    flex: 0 0 auto;
  }

  > span {
    flex: 1 1 auto;
  }

  > button {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    flex: 0 0 auto;
    min-height: 2rem;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    border-radius: ${({theme:e})=>e.radius.full};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surface};
    color: ${({theme:e})=>e.color.primary};
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
    cursor: pointer;
  }
`,Lo=b.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`,_o=b.span`
  flex: 1 1 0;
  display: grid;
  gap: 0.25rem;
  font-size: 0.65rem;
  color: ${({theme:e})=>e.color.textMuted};
  text-align: center;
  line-height: 1.2;

  &::before {
    content: '';
    display: block;
    height: 4px;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.border};
  }

  &[data-hecho='true'] {
    color: ${({theme:e})=>e.color.textSoft};

    &::before {
      background: ${({theme:e})=>e.color.primary};
    }
  }

  &[data-actual='true'] {
    color: ${({theme:e})=>e.color.primary};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`,ht=b.button`
  width: 100%;
  min-height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
  }

  /* Entregar es el paso que cierra el pedido: se distingue del resto para
     que no se toque de apuro creyendo que es "en camino". */
  &[data-final='true'] {
    background: ${({theme:e})=>e.color.success};
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,Fo=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
`,ke=b.button`
  flex: 1 1 0;
  min-height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activa='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,Uo=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};

  > span {
    /* Sin crecer: antes empujaba los botones contra el borde derecho. */
    flex: 0 0 auto;
    color: ${({theme:e})=>e.color.textSoft};
    font-size: ${({theme:e})=>e.typography.size.xs};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }

  /* En pantallas angostas el contenido manda: si no entra en una línea,
     baja, en lugar de desbordar. */
  @media (max-width: 380px) {
    flex-wrap: wrap;
  }
`,Vo=b.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    color 160ms ease;

  &[data-activo='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,pt=b.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  flex: 0 0 auto;
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};

  &[data-entra='true'] {
    background: rgba(52, 211, 153, 0.16);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-entra='false'] {
    background: rgba(217, 119, 6, 0.16);
    color: ${({theme:e})=>e.color.warning};
  }
`,qo=b.button`
  width: 100%;
  min-height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px dashed ${({theme:e})=>e.color.border};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 160ms ease, color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.primary};
  }
`,Ho=b.div`
  display: flex;
  align-items: center;
  flex: none;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-inline-start: auto;
`,Ko=b.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
  }
`,Ae={resumen:()=>"Tu día",disponibles:e=>e?"Fletes disponibles":"Pedidos disponibles",mios:()=>"Lo que estás llevando",ganancias:()=>"Cuánto ganaste"},Ne={resumen:e=>e?"En qué andás y qué hay para tomar.":"En qué andás y qué hay para llevar.",disponibles:e=>e?"Fletes esperando que alguien los tome.":"Ordenados por cercanía a donde estás.",mios:()=>"Marcá cada paso a medida que avanzás.",ganancias:()=>"Lo que te dejó cada viaje que entregaste."},Oo=3e4,Jo=2e4,G=[{estado:"asignado",corto:"Tomado",accion:"Retiré el pedido"},{estado:"retirado",corto:"Retirado",accion:"Salí a entregar"},{estado:"en_camino",corto:"En camino",accion:"Entregué el pedido"},{estado:"entregado",corto:"Entregado",accion:""}],Yo={delivery:[{id:"moto",icono:Et},{id:"auto",icono:mn}],fletero:[{id:"camioneta",icono:me},{id:"camion",icono:me}]},mt=e=>Math.max(0,G.findIndex(t=>t.estado===e));function ar(){var Ye,Ge;const{usuario:e}=Qt(),{status:t,error:r,locate:o}=on(),[n,i]=j.useState(null),[s,l]=j.useState([]),[c,u]=j.useState(null),[d,C]=j.useState(!0),[h,f]=j.useState(null),[p,y]=j.useState(null),[S,x]=j.useState(null),[$,w]=j.useState([]),[m,E]=j.useState(()=>{const g=new URLSearchParams(window.location.hash.split("?")[1]??"").get("ver");return g==="mios"||g==="ganancias"||g==="disponibles"?g:"resumen"}),{search:z}=nn();j.useEffect(()=>{const g=new URLSearchParams(z).get("ver");E(g==="mios"||g==="ganancias"||g==="disponibles"?g:"resumen")},[z]);const[P,A]=j.useState(null),[M,N]=j.useState(null),B=(e==null?void 0:e.rol)==="fletero",V=B?"fletes":"pedidos",T=j.useCallback(async()=>{try{const[{pedidos:g,vehiculo:v},{envios:I}]=await Promise.all([R.disponibles(n==null?void 0:n.lat,n==null?void 0:n.lon),R.misEnvios()]);x(v),l(g),w(I),u(null)}catch(g){u(g instanceof Wt&&g.status===404?"Esta sección es para repartidores y fleteros aprobados.":`No pudimos cargar los ${V}.`)}finally{C(!1)}},[n,V]);j.useEffect(()=>{o(g=>i(g))},[o]),j.useEffect(()=>{T();const g=window.setInterval(()=>void T(),Jo);return()=>window.clearInterval(g)},[T]),j.useEffect(()=>{if(!n)return;const g=()=>{R.actualizarUbicacion(n.lat,n.lon).catch(()=>{})};g();const v=window.setInterval(g,Oo);return()=>window.clearInterval(v)},[n]);const Kt=async g=>{const v=await new Promise(_=>{if(n){_(n);return}const ee=window.setTimeout(()=>_(null),8e3);o(te=>{window.clearTimeout(ee),i({lat:te.lat,lon:te.lon}),_({lat:te.lat,lon:te.lon})})});g.startsWith("flete:")?await jt.tomar(g.slice(6)):await R.tomar(g,v==null?void 0:v.lat,v==null?void 0:v.lon);const I=s.find(_=>_.id===g)??null;f(null),E("mios"),await T(),I&&y(I)},Ot=async g=>{x(g);try{await R.elegirVehiculo(g,B?"fletero":"delivery"),await T()}catch{u("No pudimos guardar tu vehículo.")}},Jt=async g=>{const v=Math.max(2,g.viajes??2);try{const{estado:I}=await R.pedirFraccionar(g.id,v);u(I==="aprobado"?null:"Le avisamos al comercio. Te contestamos cuando lo resuelva."),await T()}catch{u("No pudimos pedir el fraccionamiento.")}},Yt=async g=>{const v=G[mt(g.estado)+1];if(v){A(g.id);try{await R.avanzar(g.id,v.estado),await T()}catch{u("No pudimos actualizar el envío.")}finally{A(null)}}};return a.jsxs(Xt,{showSearch:!1,children:[a.jsx(Zt,{children:a.jsx(en,{children:a.jsxs(he,{children:[a.jsx(Ct,{title:((Ye=Ae[m])==null?void 0:Ye.call(Ae,B))??"",chip:d||m==="ganancias"?void 0:`${m==="disponibles"?s.length:$.length}`,subtitle:((Ge=Ne[m])==null?void 0:Ge.call(Ne,B))??""}),a.jsxs(Uo,{children:[a.jsx("span",{children:"Trabajás con"}),(Yo[B?"fletero":"delivery"]??[]).map(g=>{const v=g.icono;return a.jsxs(Vo,{type:"button",onClick:()=>void Ot(g.id),"data-activo":S===g.id,"aria-pressed":S===g.id,children:[a.jsx(v,{size:14,"aria-hidden":"true"}),tn[g.id]]},g.id)})]}),a.jsxs(Fo,{children:[a.jsx(ke,{type:"button",onClick:()=>E("disponibles"),"data-activa":m==="disponibles",children:"Disponibles"}),a.jsxs(ke,{type:"button",onClick:()=>E("mios"),"data-activa":m==="mios",children:["Mis envíos",$.length>0?` (${$.length})`:""]}),a.jsx(ke,{type:"button",onClick:()=>E("ganancias"),"data-activa":m==="ganancias",children:"Ganancias"})]}),c?a.jsx(xe,{role:"alert","data-tono":"error",children:c}):null,m==="resumen"?a.jsx(ko,{esFletero:B,enCurso:$.filter(g=>g.estado!=="entregado").length,disponibles:s.length,onVer:E}):null,m==="ganancias"?a.jsx(vn,{esFletero:B}):null,m==="disponibles"&&!n&&t!=="locating"?a.jsxs(Io,{children:[a.jsx(zt,{size:16,"aria-hidden":"true"}),a.jsx("span",{children:r??"Sin tu ubicación no podemos ordenarlos por cercanía."}),a.jsxs("button",{type:"button",onClick:()=>o(g=>i(g)),children:[a.jsx(yn,{size:14,"aria-hidden":"true"}),"Reintentar"]})]}):null,m==="disponibles"&&!d&&s.length===0&&!c?a.jsx(pe,{icon:St,title:B?"No hay fletes ahora":"No hay pedidos ahora",text:"Cuando entre uno cerca tuyo lo vas a ver acá.",dashed:!0}):null,m==="mios"&&!d&&$.length===0&&!c?a.jsx(pe,{icon:Ie,title:"No estás llevando nada",text:"Tomá un pedido de la lista y lo vas a ver acá.",dashed:!0}):null,m==="mios"?$.map(g=>{const v=mt(g.estado),I=G[v+1];return a.jsx(De,{children:a.jsx(Re,{children:a.jsxs(he,{children:[a.jsxs(ut,{children:[a.jsx("span",{children:g.comercio}),a.jsx(gt,{children:g.codigo})]}),a.jsxs(ft,{children:[a.jsxs(q,{children:["Retirás en ",g.comercio_direccion]}),a.jsxs(q,{children:["Entregás en ",g.direccion_texto]}),a.jsxs(q,{"data-suave":!0,children:[g.cliente,g.cliente_telefono?` · ${g.cliente_telefono}`:""," · ",k(g.total),g.metodo_pago?` · ${g.metodo_pago}`:""]})]}),a.jsx(Lo,{children:G.map((_,ee)=>a.jsx(_o,{"data-hecho":ee<=v,"data-actual":ee===v,children:_.corto},_.estado))}),a.jsxs(Ko,{children:[I?a.jsx(ht,{type:"button",onClick:()=>void Yt(g),disabled:P===g.id,"data-final":I.estado==="entregado",children:P===g.id?"Guardando…":G[v].accion}):null,a.jsxs(Me,{type:"button",onClick:()=>f(g.pedido_id),children:["Ver detalle ",B?"del flete":"del pedido"]}),a.jsxs(Me,{type:"button",onClick:()=>y({id:g.pedido_id,codigo:g.codigo,cliente:g.cliente??""}),children:["Abrir chat ",B?"del flete":"del pedido"]})]})]})})},g.id)}):null,m==="disponibles"&&s.map(g=>a.jsx(De,{children:a.jsx(Re,{children:a.jsxs(he,{children:[a.jsxs(ut,{children:[a.jsx("span",{children:g.comercio}),a.jsxs(Ho,{children:[g.entraEnTuVehiculo===!1?a.jsxs(pt,{"data-entra":"false",children:["Entra en ",g.viajes," envíos"]}):typeof g.litros=="number"&&g.litros>0?a.jsx(pt,{"data-entra":"true",children:"Entra todo en 1 envío"}):null,typeof g.distanciaKm=="number"?a.jsxs(gt,{children:[g.distanciaKm," km"]}):null]})]}),a.jsxs(ft,{children:[a.jsxs(q,{children:["Retirás en ",g.comercio_direccion]}),a.jsxs(q,{children:["Entregás en ",g.direccion_texto]}),a.jsxs(q,{"data-suave":!0,children:[g.items," ",g.items===1?"producto":"productos"," ·"," ",k(g.total)]})]}),a.jsxs(Me,{type:"button",onClick:()=>f(g.id),children:["Ver detalle ",B?"del flete":"del pedido"]}),B?a.jsx(ht,{type:"button",onClick:()=>N(g),children:"Cotizar este flete"}):null,(g.items??0)>1?a.jsxs(qo,{type:"button",onClick:()=>void Jt(g),children:[a.jsx(bn,{size:13,"aria-hidden":"true"})," ",g.entraEnTuVehiculo===!1?`Partir en ${g.viajes} entregas`:"No me entra: pedir partirlo"]}):null]})})},g.id))]})})}),a.jsx(Ro,{open:h!==null,pedidoId:h,onClose:()=>f(null),onTomar:Kt,esFletero:B,yaEsMio:$.some(g=>g.pedido_id===h),onAbrirChat:g=>{const v=$.find(I=>I.pedido_id===g);f(null),y({id:g,codigo:(v==null?void 0:v.codigo)??"",cliente:(v==null?void 0:v.cliente)??""})}}),a.jsx(xn,{open:M!==null,pedidoId:(M==null?void 0:M.id)??"",distanciaKm:(M==null?void 0:M.distanciaKm)??null,onCerrar:()=>N(null),onCotizado:()=>void T()}),a.jsx(rn,{rol:"repartidor",open:p!==null,pedidoId:(p==null?void 0:p.id)??null,codigo:(p==null?void 0:p.codigo)??"",cliente:(p==null?void 0:p.cliente)??"",onClose:()=>y(null)})]})}export{ar as PanelRepartidorScreen};
