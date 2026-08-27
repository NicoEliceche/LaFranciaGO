const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-DIdto0iu.js","assets/react-Clk3ySf9.js","assets/AddressMap-CIGW-MKW.css","assets/StoresDirectoryScreen-CVceDDDF.js","assets/ScrollRail-CPWx7AMq.js","assets/StoreProfileScreen-DXZWwrTn.js","assets/minus-Cgy-6pfV.js","assets/clock-3-9kFJP936.js","assets/ProductDetailScreen-DWB7gRRs.js","assets/SettingsList-Cd0jlCrm.js","assets/MyOrdersScreen-Do5K9mz_.js","assets/CartScreen-su3YT-bv.js","assets/shield-check-DY-6DuV6.js","assets/ErrandScreen-CWQugQR5.js","assets/errandStore-CkHbx8OT.js","assets/ErrandChatScreen-CK86ggQF.js","assets/mediaService-Be9g9s7c.js","assets/FavoritesScreen-CSbI9D8x.js","assets/NotificationsScreen-nHvtWdtQ.js","assets/badge-percent-CkEjFiUR.js","assets/CustomerAccountScreen-D3j-azSm.js","assets/phone-Bb-GQ59z.js","assets/CommerceRegistrationScreen-B8rPBx1s.js","assets/formStyles-Fa3YxU6N.js","assets/DeliveryRegistrationScreen-iqSxCvzO.js","assets/CommercePanelScreen-B32dWY5T.js","assets/MetricTile-BwehfE-J.js","assets/ProductFormScreen-Dj9fK38N.js","assets/DeliveryPanelScreen-DNzsiO-t.js","assets/AdminPanelScreen-C8ILeebd.js"])))=>i.map(i=>d[i]);
import{r as m,a as La,g as Na,R as ze,L as be,N as Ht,u as Oa,H as Ba,b as Da,c as W,d as ur}from"./react-Clk3ySf9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(n){if(n.ep)return;n.ep=!0;const d=r(n);fetch(n.href,d)}})();var Wr={exports:{}},ot={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=m,Ga=Symbol.for("react.element"),Ya=Symbol.for("react.fragment"),qa=Object.prototype.hasOwnProperty,Va=Ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ka={key:!0,ref:!0,__self:!0,__source:!0};function Ur(e,o,r){var i,n={},d=null,s=null;r!==void 0&&(d=""+r),o.key!==void 0&&(d=""+o.key),o.ref!==void 0&&(s=o.ref);for(i in o)qa.call(o,i)&&!Ka.hasOwnProperty(i)&&(n[i]=o[i]);if(e&&e.defaultProps)for(i in o=e.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return{$$typeof:Ga,type:e,key:d,ref:s,props:n,_owner:Va.current}}ot.Fragment=Ya;ot.jsx=Ur;ot.jsxs=Ur;Wr.exports=ot;var t=Wr.exports,_t={},mr=La;_t.createRoot=mr.createRoot,_t.hydrateRoot=mr.hydrateRoot;const Wa="modulepreload",Ua=function(e){return"/LaFranciaGO/"+e},hr={},Z=function(o,r,i){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(c=>{if(c=Ua(c),c in hr)return;hr[c]=!0;const h=c.endsWith(".css"),x=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${x}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Wa,h||(f.as="script"),f.crossOrigin="",f.href=c,u&&f.setAttribute("nonce",u),document.head.appendChild(f),h)return new Promise((j,M)=>{f.addEventListener("load",j),f.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function d(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return n.then(s=>{for(const u of s||[])u.status==="rejected"&&d(u.reason);return o().catch(d)})};function Za(e={}){const{immediate:o=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:n,onRegisteredSW:d,onRegisterError:s}=e;let u,c;const h=async(f=!0)=>{await c};async function x(){if("serviceWorker"in navigator){if(u=await Z(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(f=>{s==null||s(f)}),!u)return;u.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),u.addEventListener("installed",f=>{f.isUpdate||i==null||i()}),u.register({immediate:o}).then(f=>{d?d("/LaFranciaGO/sw.js",f):n==null||n(f)}).catch(f=>{s==null||s(f)})}}return c=x(),h}var Zr={exports:{}},H={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=Symbol.for("react.transitional.element"),Yt=Symbol.for("react.portal"),it=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Xa=Symbol.for("react.view_transition"),Ja=Symbol.for("react.client.reference");function he(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case Gt:switch(e=e.type,e){case it:case st:case nt:case pt:case ut:case Xa:return e;default:switch(e=e&&e.$$typeof,e){case dt:case lt:case ht:case mt:return e;case ct:return e;default:return o}}case Yt:return o}}}H.ContextConsumer=ct;H.ContextProvider=dt;H.Element=Gt;H.ForwardRef=lt;H.Fragment=it;H.Lazy=ht;H.Memo=mt;H.Portal=Yt;H.Profiler=st;H.StrictMode=nt;H.Suspense=pt;H.SuspenseList=ut;H.isContextConsumer=function(e){return he(e)===ct};H.isContextProvider=function(e){return he(e)===dt};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gt};H.isForwardRef=function(e){return he(e)===lt};H.isFragment=function(e){return he(e)===it};H.isLazy=function(e){return he(e)===ht};H.isMemo=function(e){return he(e)===mt};H.isPortal=function(e){return he(e)===Yt};H.isProfiler=function(e){return he(e)===st};H.isStrictMode=function(e){return he(e)===nt};H.isSuspense=function(e){return he(e)===pt};H.isSuspenseList=function(e){return he(e)===ut};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===it||e===st||e===nt||e===pt||e===ut||typeof e=="object"&&e!==null&&(e.$$typeof===ht||e.$$typeof===mt||e.$$typeof===dt||e.$$typeof===ct||e.$$typeof===lt||e.$$typeof===Ja||e.getModuleId!==void 0)};H.typeOf=he;Zr.exports=H;var Xr=Zr.exports;function Qa(e){function o(p,g,b,C,l){for(var I=0,y=0,Y=0,L=0,B,A,ee=0,pe=0,T,ne=T=B=0,N=0,te=0,Te=0,re=0,Oe=b.length,Re=Oe-1,fe,k="",V="",Ct="",At="",xe;N<Oe;){if(A=b.charCodeAt(N),N===Re&&y+L+Y+I!==0&&(y!==0&&(A=y===47?10:47),L=Y=I=0,Oe++,Re++),y+L+Y+I===0){if(N===Re&&(0<te&&(k=k.replace(j,"")),0<k.trim().length)){switch(A){case 32:case 9:case 59:case 13:case 10:break;default:k+=b.charAt(N)}A=59}switch(A){case 123:for(k=k.trim(),B=k.charCodeAt(0),T=1,re=++N;N<Oe;){switch(A=b.charCodeAt(N)){case 123:T++;break;case 125:T--;break;case 47:switch(A=b.charCodeAt(N+1)){case 42:case 47:e:{for(ne=N+1;ne<Re;++ne)switch(b.charCodeAt(ne)){case 47:if(A===42&&b.charCodeAt(ne-1)===42&&N+2!==ne){N=ne+1;break e}break;case 10:if(A===47){N=ne+1;break e}}N=ne}}break;case 91:A++;case 40:A++;case 34:case 39:for(;N++<Re&&b.charCodeAt(N)!==A;);}if(T===0)break;N++}switch(T=b.substring(re,N),B===0&&(B=(k=k.replace(f,"").trim()).charCodeAt(0)),B){case 64:switch(0<te&&(k=k.replace(j,"")),A=k.charCodeAt(1),A){case 100:case 109:case 115:case 45:te=g;break;default:te=se}if(T=o(g,te,T,A,l+1),re=T.length,0<de&&(te=r(se,k,Te),xe=u(3,T,te,g,ie,G,re,A,l,C),k=te.join(""),xe!==void 0&&(re=(T=xe.trim()).length)===0&&(A=0,T="")),0<re)switch(A){case 115:k=k.replace(K,s);case 100:case 109:case 45:T=k+"{"+T+"}";break;case 107:k=k.replace(P,"$1 $2"),T=k+"{"+T+"}",T=S===1||S===2&&d("@"+T,3)?"@-webkit-"+T+"@"+T:"@"+T;break;default:T=k+T,C===112&&(T=(V+=T,""))}else T="";break;default:T=o(g,r(g,k,Te),T,C,l+1)}Ct+=T,T=Te=te=ne=B=0,k="",A=b.charCodeAt(++N);break;case 125:case 59:if(k=(0<te?k.replace(j,""):k).trim(),1<(re=k.length))switch(ne===0&&(B=k.charCodeAt(0),B===45||96<B&&123>B)&&(re=(k=k.replace(" ",":")).length),0<de&&(xe=u(1,k,g,p,ie,G,V.length,C,l,C))!==void 0&&(re=(k=xe.trim()).length)===0&&(k="\0\0"),B=k.charCodeAt(0),A=k.charCodeAt(1),B){case 0:break;case 64:if(A===105||A===99){At+=k+b.charAt(N);break}default:k.charCodeAt(re-1)!==58&&(V+=n(k,B,A,k.charCodeAt(2)))}Te=te=ne=B=0,k="",A=b.charCodeAt(++N)}}switch(A){case 13:case 10:y===47?y=0:1+B===0&&C!==107&&0<k.length&&(te=1,k+="\0"),0<de*ge&&u(0,k,g,p,ie,G,V.length,C,l,C),G=1,ie++;break;case 59:case 125:if(y+L+Y+I===0){G++;break}default:switch(G++,fe=b.charAt(N),A){case 9:case 32:if(L+I+y===0)switch(ee){case 44:case 58:case 9:case 32:fe="";break;default:A!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:L+y+I===0&&(te=Te=1,fe="\f"+fe);break;case 108:if(L+y+I+w===0&&0<ne)switch(N-ne){case 2:ee===112&&b.charCodeAt(N-3)===58&&(w=ee);case 8:pe===111&&(w=pe)}break;case 58:L+y+I===0&&(ne=N);break;case 44:y+Y+L+I===0&&(te=1,fe+="\r");break;case 34:case 39:y===0&&(L=L===A?0:L===0?A:L);break;case 91:L+y+Y===0&&I++;break;case 93:L+y+Y===0&&I--;break;case 41:L+y+I===0&&Y--;break;case 40:if(L+y+I===0){if(B===0)switch(2*ee+3*pe){case 533:break;default:B=1}Y++}break;case 64:y+Y+L+I+ne+T===0&&(T=1);break;case 42:case 47:if(!(0<L+I+Y))switch(y){case 0:switch(2*A+3*b.charCodeAt(N+1)){case 235:y=47;break;case 220:re=N,y=42}break;case 42:A===47&&ee===42&&re+2!==N&&(b.charCodeAt(re+2)===33&&(V+=b.substring(re,N+1)),fe="",y=0)}}y===0&&(k+=fe)}pe=ee,ee=A,N++}if(re=V.length,0<re){if(te=g,0<de&&(xe=u(2,V,te,p,ie,G,re,C,l,C),xe!==void 0&&(V=xe).length===0))return At+V+Ct;if(V=te.join(",")+"{"+V+"}",S*w!==0){switch(S!==2||d(V,2)||(w=0),w){case 111:V=V.replace(R,":-moz-$1")+V;break;case 112:V=V.replace(_,"::-webkit-input-$1")+V.replace(_,"::-moz-$1")+V.replace(_,":-ms-input-$1")+V}w=0}}return At+V+Ct}function r(p,g,b){var C=g.trim().split(v);g=C;var l=C.length,I=p.length;switch(I){case 0:case 1:var y=0;for(p=I===0?"":p[0]+" ";y<l;++y)g[y]=i(p,g[y],b).trim();break;default:var Y=y=0;for(g=[];y<l;++y)for(var L=0;L<I;++L)g[Y++]=i(p[L]+" ",C[y],b).trim()}return g}function i(p,g,b){var C=g.charCodeAt(0);switch(33>C&&(C=(g=g.trim()).charCodeAt(0)),C){case 38:return g.replace(F,"$1"+p.trim());case 58:return p.trim()+g.replace(F,"$1"+p.trim());default:if(0<1*b&&0<g.indexOf("\f"))return g.replace(F,(p.charCodeAt(0)===58?"":"$1")+p.trim())}return p+g}function n(p,g,b,C){var l=p+";",I=2*g+3*b+4*C;if(I===944){p=l.indexOf(":",9)+1;var y=l.substring(p,l.length-1).trim();return y=l.substring(0,p).trim()+y+";",S===1||S===2&&d(y,1)?"-webkit-"+y+y:y}if(S===0||S===2&&!d(l,1))return l;switch(I){case 1015:return l.charCodeAt(10)===97?"-webkit-"+l+l:l;case 951:return l.charCodeAt(3)===116?"-webkit-"+l+l:l;case 963:return l.charCodeAt(5)===110?"-webkit-"+l+l:l;case 1009:if(l.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+l+l;case 978:return"-webkit-"+l+"-moz-"+l+l;case 1019:case 983:return"-webkit-"+l+"-moz-"+l+"-ms-"+l+l;case 883:if(l.charCodeAt(8)===45)return"-webkit-"+l+l;if(0<l.indexOf("image-set(",11))return l.replace(oe,"$1-webkit-$2")+l;break;case 932:if(l.charCodeAt(4)===45)switch(l.charCodeAt(5)){case 103:return"-webkit-box-"+l.replace("-grow","")+"-webkit-"+l+"-ms-"+l.replace("grow","positive")+l;case 115:return"-webkit-"+l+"-ms-"+l.replace("shrink","negative")+l;case 98:return"-webkit-"+l+"-ms-"+l.replace("basis","preferred-size")+l}return"-webkit-"+l+"-ms-"+l+l;case 964:return"-webkit-"+l+"-ms-flex-"+l+l;case 1023:if(l.charCodeAt(8)!==99)break;return y=l.substring(l.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+y+"-webkit-"+l+"-ms-flex-pack"+y+l;case 1005:return E.test(l)?l.replace(M,":-webkit-")+l.replace(M,":-moz-")+l:l;case 1e3:switch(y=l.substring(13).trim(),g=y.indexOf("-")+1,y.charCodeAt(0)+y.charCodeAt(g)){case 226:y=l.replace(O,"tb");break;case 232:y=l.replace(O,"tb-rl");break;case 220:y=l.replace(O,"lr");break;default:return l}return"-webkit-"+l+"-ms-"+y+l;case 1017:if(l.indexOf("sticky",9)===-1)break;case 975:switch(g=(l=p).length-10,y=(l.charCodeAt(g)===33?l.substring(0,g):l).substring(p.indexOf(":",7)+1).trim(),I=y.charCodeAt(0)+(y.charCodeAt(7)|0)){case 203:if(111>y.charCodeAt(8))break;case 115:l=l.replace(y,"-webkit-"+y)+";"+l;break;case 207:case 102:l=l.replace(y,"-webkit-"+(102<I?"inline-":"")+"box")+";"+l.replace(y,"-webkit-"+y)+";"+l.replace(y,"-ms-"+y+"box")+";"+l}return l+";";case 938:if(l.charCodeAt(5)===45)switch(l.charCodeAt(6)){case 105:return y=l.replace("-items",""),"-webkit-"+l+"-webkit-box-"+y+"-ms-flex-"+y+l;case 115:return"-webkit-"+l+"-ms-flex-item-"+l.replace(J,"")+l;default:return"-webkit-"+l+"-ms-flex-line-pack"+l.replace("align-content","").replace(J,"")+l}break;case 973:case 989:if(l.charCodeAt(3)!==45||l.charCodeAt(4)===122)break;case 931:case 953:if(le.test(p)===!0)return(y=p.substring(p.indexOf(":")+1)).charCodeAt(0)===115?n(p.replace("stretch","fill-available"),g,b,C).replace(":fill-available",":stretch"):l.replace(y,"-webkit-"+y)+l.replace(y,"-moz-"+y.replace("fill-",""))+l;break;case 962:if(l="-webkit-"+l+(l.charCodeAt(5)===102?"-ms-"+l:"")+l,b+C===211&&l.charCodeAt(13)===105&&0<l.indexOf("transform",10))return l.substring(0,l.indexOf(";",27)+1).replace(z,"$1-webkit-$2")+l}return l}function d(p,g){var b=p.indexOf(g===1?":":"{"),C=p.substring(0,g!==3?b:10);return b=p.substring(b+1,p.length-1),ve(g!==2?C:C.replace(q,"$1"),b,g)}function s(p,g){var b=n(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return b!==g+";"?b.replace(ae," or ($1)").substring(4):"("+g+")"}function u(p,g,b,C,l,I,y,Y,L,B){for(var A=0,ee=g,pe;A<de;++A)switch(pe=ce[A].call(x,p,ee,b,C,l,I,y,Y,L,B)){case void 0:case!1:case!0:case null:break;default:ee=pe}if(ee!==g)return ee}function c(p){switch(p){case void 0:case null:de=ce.length=0;break;default:if(typeof p=="function")ce[de++]=p;else if(typeof p=="object")for(var g=0,b=p.length;g<b;++g)c(p[g]);else ge=!!p|0}return c}function h(p){return p=p.prefix,p!==void 0&&(ve=null,p?typeof p!="function"?S=1:(S=2,ve=p):S=0),h}function x(p,g){var b=p;if(33>b.charCodeAt(0)&&(b=b.trim()),Q=b,b=[Q],0<de){var C=u(-1,g,b,b,ie,G,0,0,0,0);C!==void 0&&typeof C=="string"&&(g=C)}var l=o(se,b,g,0,0);return 0<de&&(C=u(-2,l,b,b,ie,G,l.length,0,0,0),C!==void 0&&(l=C)),Q="",w=0,G=ie=1,l}var f=/^\0+/g,j=/[\0\r\f]/g,M=/: */g,E=/zoo|gra/,z=/([,: ])(transform)/g,v=/,\r+?/g,F=/([\t\r\n ])*\f?&/g,P=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,R=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,K=/\(\s*(.*)\s*\)/g,ae=/([\s\S]*?);/g,J=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,le=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,G=1,ie=1,w=0,S=1,se=[],ce=[],de=0,ve=null,ge=0,Q="";return x.use=c,x.set=h,e!==void 0&&h(e),x}var eo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function to(e){var o=Object.create(null);return function(r){return o[r]===void 0&&(o[r]=e(r)),o[r]}}var ro=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gr=to(function(e){return ro.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Jr={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=typeof Symbol=="function"&&Symbol.for,qt=X?Symbol.for("react.element"):60103,Vt=X?Symbol.for("react.portal"):60106,gt=X?Symbol.for("react.fragment"):60107,ft=X?Symbol.for("react.strict_mode"):60108,yt=X?Symbol.for("react.profiler"):60114,bt=X?Symbol.for("react.provider"):60109,xt=X?Symbol.for("react.context"):60110,Kt=X?Symbol.for("react.async_mode"):60111,wt=X?Symbol.for("react.concurrent_mode"):60111,$t=X?Symbol.for("react.forward_ref"):60112,vt=X?Symbol.for("react.suspense"):60113,ao=X?Symbol.for("react.suspense_list"):60120,kt=X?Symbol.for("react.memo"):60115,St=X?Symbol.for("react.lazy"):60116,oo=X?Symbol.for("react.block"):60121,io=X?Symbol.for("react.fundamental"):60117,no=X?Symbol.for("react.responder"):60118,so=X?Symbol.for("react.scope"):60119;function ue(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case qt:switch(e=e.type,e){case Kt:case wt:case gt:case yt:case ft:case vt:return e;default:switch(e=e&&e.$$typeof,e){case xt:case $t:case St:case kt:case bt:return e;default:return o}}case Vt:return o}}}function Qr(e){return ue(e)===wt}D.AsyncMode=Kt;D.ConcurrentMode=wt;D.ContextConsumer=xt;D.ContextProvider=bt;D.Element=qt;D.ForwardRef=$t;D.Fragment=gt;D.Lazy=St;D.Memo=kt;D.Portal=Vt;D.Profiler=yt;D.StrictMode=ft;D.Suspense=vt;D.isAsyncMode=function(e){return Qr(e)||ue(e)===Kt};D.isConcurrentMode=Qr;D.isContextConsumer=function(e){return ue(e)===xt};D.isContextProvider=function(e){return ue(e)===bt};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt};D.isForwardRef=function(e){return ue(e)===$t};D.isFragment=function(e){return ue(e)===gt};D.isLazy=function(e){return ue(e)===St};D.isMemo=function(e){return ue(e)===kt};D.isPortal=function(e){return ue(e)===Vt};D.isProfiler=function(e){return ue(e)===yt};D.isStrictMode=function(e){return ue(e)===ft};D.isSuspense=function(e){return ue(e)===vt};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gt||e===wt||e===yt||e===ft||e===vt||e===ao||typeof e=="object"&&e!==null&&(e.$$typeof===St||e.$$typeof===kt||e.$$typeof===bt||e.$$typeof===xt||e.$$typeof===$t||e.$$typeof===io||e.$$typeof===no||e.$$typeof===so||e.$$typeof===oo)};D.typeOf=ue;Jr.exports=D;var co=Jr.exports,Wt=co,lo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},po={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ea={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ut={};Ut[Wt.ForwardRef]=uo;Ut[Wt.Memo]=ea;function fr(e){return Wt.isMemo(e)?ea:Ut[e.$$typeof]||lo}var mo=Object.defineProperty,ho=Object.getOwnPropertyNames,yr=Object.getOwnPropertySymbols,go=Object.getOwnPropertyDescriptor,fo=Object.getPrototypeOf,br=Object.prototype;function ta(e,o,r){if(typeof o!="string"){if(br){var i=fo(o);i&&i!==br&&ta(e,i,r)}var n=ho(o);yr&&(n=n.concat(yr(o)));for(var d=fr(e),s=fr(o),u=0;u<n.length;++u){var c=n[u];if(!po[c]&&!(r&&r[c])&&!(s&&s[c])&&!(d&&d[c])){var h=go(o,c);try{mo(e,c,h)}catch{}}}}return e}var yo=ta;const bo=Na(yo);var me={};function ye(){return(ye=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var xr=function(e,o){for(var r=[e[0]],i=0,n=o.length;i<n;i+=1)r.push(o[i],e[i+1]);return r},It=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Xr.typeOf(e)},Qe=Object.freeze([]),$e=Object.freeze({});function Fe(e){return typeof e=="function"}function wr(e){return e.displayName||e.name||"Component"}function Zt(e){return e&&typeof e.styledComponentId=="string"}var Me=typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_ATTR||me.SC_ATTR)||"data-styled",Xt=typeof window<"u"&&"HTMLElement"in window,xo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&me.REACT_APP_SC_DISABLE_SPEEDY!==""?me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&me.REACT_APP_SC_DISABLE_SPEEDY:me.SC_DISABLE_SPEEDY!==void 0&&me.SC_DISABLE_SPEEDY!==""&&me.SC_DISABLE_SPEEDY!=="false"&&me.SC_DISABLE_SPEEDY)),wo={};function je(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var $o=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var o=e.prototype;return o.indexOfGroup=function(r){for(var i=0,n=0;n<r;n++)i+=this.groupSizes[n];return i},o.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var n=this.groupSizes,d=n.length,s=d;r>=s;)(s<<=1)<0&&je(16,""+r);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var u=d;u<s;u++)this.groupSizes[u]=0}for(var c=this.indexOfGroup(r+1),h=0,x=i.length;h<x;h++)this.tag.insertRule(c,i[h])&&(this.groupSizes[r]++,c++)},o.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],n=this.indexOfGroup(r),d=n+i;this.groupSizes[r]=0;for(var s=n;s<d;s++)this.tag.deleteRule(n)}},o.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var n=this.groupSizes[r],d=this.indexOfGroup(r),s=d+n,u=d;u<s;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),Je=new Map,et=new Map,_e=1,Be=function(e){if(Je.has(e))return Je.get(e);for(;et.has(_e);)_e++;var o=_e++;return Je.set(e,o),et.set(o,e),o},vo=function(e){return et.get(e)},ko=function(e,o){o>=_e&&(_e=o+1),Je.set(e,o),et.set(o,e)},So="style["+Me+'][data-styled-version="5.3.11"]',jo=new RegExp("^"+Me+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Co=function(e,o,r){for(var i,n=r.split(","),d=0,s=n.length;d<s;d++)(i=n[d])&&e.registerName(o,i)},Ao=function(e,o){for(var r=(o.textContent||"").split(`/*!sc*/
`),i=[],n=0,d=r.length;n<d;n++){var s=r[n].trim();if(s){var u=s.match(jo);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(ko(h,c),Co(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},zo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ra=function(e){var o=document.head,r=e||o,i=document.createElement("style"),n=function(u){for(var c=u.childNodes,h=c.length;h>=0;h--){var x=c[h];if(x&&x.nodeType===1&&x.hasAttribute(Me))return x}}(r),d=n!==void 0?n.nextSibling:null;i.setAttribute(Me,"active"),i.setAttribute("data-styled-version","5.3.11");var s=zo();return s&&i.setAttribute("nonce",s),r.insertBefore(i,d),i},Po=function(){function e(r){var i=this.element=ra(r);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var d=document.styleSheets,s=0,u=d.length;s<u;s++){var c=d[s];if(c.ownerNode===n)return c}je(17)}(i),this.length=0}var o=e.prototype;return o.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},o.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},o.getRule=function(r){var i=this.sheet.cssRules[r];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Eo=function(){function e(r){var i=this.element=ra(r);this.nodes=i.childNodes,this.length=0}var o=e.prototype;return o.insertRule=function(r,i){if(r<=this.length&&r>=0){var n=document.createTextNode(i),d=this.nodes[r];return this.element.insertBefore(n,d||null),this.length++,!0}return!1},o.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},o.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Fo=function(){function e(r){this.rules=[],this.length=0}var o=e.prototype;return o.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},o.deleteRule=function(r){this.rules.splice(r,1),this.length--},o.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),$r=Xt,Mo={isServer:!Xt,useCSSOMInjection:!xo},tt=function(){function e(r,i,n){r===void 0&&(r=$e),i===void 0&&(i={}),this.options=ye({},Mo,{},r),this.gs=i,this.names=new Map(n),this.server=!!r.isServer,!this.server&&Xt&&$r&&($r=!1,function(d){for(var s=document.querySelectorAll(So),u=0,c=s.length;u<c;u++){var h=s[u];h&&h.getAttribute(Me)!=="active"&&(Ao(d,h),h.parentNode&&h.parentNode.removeChild(h))}}(this))}e.registerId=function(r){return Be(r)};var o=e.prototype;return o.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},r),this.gs,i&&this.names||void 0)},o.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},o.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,d=i.useCSSOMInjection,s=i.target,r=n?new Fo(s):d?new Po(s):new Eo(s),new $o(r)));var r,i,n,d,s},o.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},o.registerName=function(r,i){if(Be(r),this.names.has(r))this.names.get(r).add(i);else{var n=new Set;n.add(i),this.names.set(r,n)}},o.insertRules=function(r,i,n){this.registerName(r,i),this.getTag().insertRules(Be(r),n)},o.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},o.clearRules=function(r){this.getTag().clearGroup(Be(r)),this.clearNames(r)},o.clearTag=function(){this.tag=void 0},o.toString=function(){return function(r){for(var i=r.getTag(),n=i.length,d="",s=0;s<n;s++){var u=vo(s);if(u!==void 0){var c=r.names.get(u),h=i.getGroup(s);if(c&&h&&c.size){var x=Me+".g"+s+'[id="'+u+'"]',f="";c!==void 0&&c.forEach(function(j){j.length>0&&(f+=j+",")}),d+=""+h+x+'{content:"'+f+`"}/*!sc*/
`}}}return d}(this)},e}(),To=/(a)(d)/gi,vr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Lt(e){var o,r="";for(o=Math.abs(e);o>52;o=o/52|0)r=vr(o%52)+r;return(vr(o%52)+r).replace(To,"$1-$2")}var Ee=function(e,o){for(var r=o.length;r;)e=33*e^o.charCodeAt(--r);return e},aa=function(e){return Ee(5381,e)};function oa(e){for(var o=0;o<e.length;o+=1){var r=e[o];if(Fe(r)&&!Zt(r))return!1}return!0}var Ro=aa("5.3.11"),_o=function(){function e(o,r,i){this.rules=o,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&oa(o),this.componentId=r,this.baseHash=Ee(Ro,r),this.baseStyle=i,tt.registerId(r)}return e.prototype.generateAndInjectStyles=function(o,r,i){var n=this.componentId,d=[];if(this.baseStyle&&d.push(this.baseStyle.generateAndInjectStyles(o,r,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(n,this.staticRulesId))d.push(this.staticRulesId);else{var s=Ce(this.rules,o,r,i).join(""),u=Lt(Ee(this.baseHash,s)>>>0);if(!r.hasNameForId(n,u)){var c=i(s,"."+u,void 0,n);r.insertRules(n,u,c)}d.push(u),this.staticRulesId=u}else{for(var h=this.rules.length,x=Ee(this.baseHash,i.hash),f="",j=0;j<h;j++){var M=this.rules[j];if(typeof M=="string")f+=M;else if(M){var E=Ce(M,o,r,i),z=Array.isArray(E)?E.join(""):E;x=Ee(x,z+j),f+=z}}if(f){var v=Lt(x>>>0);if(!r.hasNameForId(n,v)){var F=i(f,"."+v,void 0,n);r.insertRules(n,v,F)}d.push(v)}}return d.join(" ")},e}(),Io=/^\s*\/\/.*$/gm,Lo=[":","[",".","#"];function No(e){var o,r,i,n,d=$e,s=d.options,u=s===void 0?$e:s,c=d.plugins,h=c===void 0?Qe:c,x=new Qa(u),f=[],j=function(z){function v(F){if(F)try{z(F+"}")}catch{}}return function(F,P,_,R,O,K,ae,J,q,le){switch(F){case 1:if(q===0&&P.charCodeAt(0)===64)return z(P+";"),"";break;case 2:if(J===0)return P+"/*|*/";break;case 3:switch(J){case 102:case 112:return z(_[0]+P),"";default:return P+(le===0?"/*|*/":"")}case-2:P.split("/*|*/}").forEach(v)}}}(function(z){f.push(z)}),M=function(z,v,F){return v===0&&Lo.indexOf(F[r.length])!==-1||F.match(n)?z:"."+o};function E(z,v,F,P){P===void 0&&(P="&");var _=z.replace(Io,""),R=v&&F?F+" "+v+" { "+_+" }":_;return o=P,r=v,i=new RegExp("\\"+r+"\\b","g"),n=new RegExp("(\\"+r+"\\b){2,}"),x(F||!v?"":v,R)}return x.use([].concat(h,[function(z,v,F){z===2&&F.length&&F[0].lastIndexOf(r)>0&&(F[0]=F[0].replace(i,M))},j,function(z){if(z===-2){var v=f;return f=[],v}}])),E.hash=h.length?h.reduce(function(z,v){return v.name||je(15),Ee(z,v.name)},5381).toString():"",E}var ia=ze.createContext();ia.Consumer;var na=ze.createContext(),Oo=(na.Consumer,new tt),Nt=No();function sa(){return m.useContext(ia)||Oo}function ca(){return m.useContext(na)||Nt}var da=function(){function e(o,r){var i=this;this.inject=function(n,d){d===void 0&&(d=Nt);var s=i.name+d.hash;n.hasNameForId(i.id,s)||n.insertRules(i.id,s,d(i.rules,s,"@keyframes"))},this.toString=function(){return je(12,String(i.name))},this.name=o,this.id="sc-keyframes-"+o,this.rules=r}return e.prototype.getName=function(o){return o===void 0&&(o=Nt),this.name+o.hash},e}(),Bo=/([A-Z])/,Do=/([A-Z])/g,Ho=/^ms-/,Go=function(e){return"-"+e.toLowerCase()};function kr(e){return Bo.test(e)?e.replace(Do,Go).replace(Ho,"-ms-"):e}var Sr=function(e){return e==null||e===!1||e===""};function Ce(e,o,r,i){if(Array.isArray(e)){for(var n,d=[],s=0,u=e.length;s<u;s+=1)(n=Ce(e[s],o,r,i))!==""&&(Array.isArray(n)?d.push.apply(d,n):d.push(n));return d}if(Sr(e))return"";if(Zt(e))return"."+e.styledComponentId;if(Fe(e)){if(typeof(h=e)!="function"||h.prototype&&h.prototype.isReactComponent||!o)return e;var c=e(o);return Ce(c,o,r,i)}var h;return e instanceof da?r?(e.inject(r,i),e.getName(i)):e:It(e)?function x(f,j){var M,E,z=[];for(var v in f)f.hasOwnProperty(v)&&!Sr(f[v])&&(Array.isArray(f[v])&&f[v].isCss||Fe(f[v])?z.push(kr(v)+":",f[v],";"):It(f[v])?z.push.apply(z,x(f[v],v)):z.push(kr(v)+": "+(M=v,(E=f[v])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||M in eo||M.startsWith("--")?String(E).trim():E+"px")+";"));return j?[j+" {"].concat(z,["}"]):z}(e):e.toString()}var jr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function U(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return Fe(e)||It(e)?jr(Ce(xr(Qe,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:jr(Ce(xr(e,r)))}var la=function(e,o,r){return r===void 0&&(r=$e),e.theme!==r.theme&&e.theme||o||r.theme},Yo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qo=/(^-|-$)/g;function zt(e){return e.replace(Yo,"-").replace(qo,"")}var Jt=function(e){return Lt(aa(e)>>>0)};function De(e){return typeof e=="string"&&!0}var Ot=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Vo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ko(e,o,r){var i=e[r];Ot(o)&&Ot(i)?pa(i,o):e[r]=o}function pa(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];for(var n=0,d=r;n<d.length;n++){var s=d[n];if(Ot(s))for(var u in s)Vo(u)&&Ko(e,s[u],u)}return e}var Ie=ze.createContext();Ie.Consumer;function Wo(e){var o=m.useContext(Ie),r=m.useMemo(function(){return function(i,n){if(!i)return je(14);if(Fe(i)){var d=i(n);return d}return Array.isArray(i)||typeof i!="object"?je(8):n?ye({},n,{},i):i}(e.theme,o)},[e.theme,o]);return e.children?ze.createElement(Ie.Provider,{value:r},e.children):null}var Pt={};function ua(e,o,r){var i=Zt(e),n=!De(e),d=o.attrs,s=d===void 0?Qe:d,u=o.componentId,c=u===void 0?function(P,_){var R=typeof P!="string"?"sc":zt(P);Pt[R]=(Pt[R]||0)+1;var O=R+"-"+Jt("5.3.11"+R+Pt[R]);return _?_+"-"+O:O}(o.displayName,o.parentComponentId):u,h=o.displayName,x=h===void 0?function(P){return De(P)?"styled."+P:"Styled("+wr(P)+")"}(e):h,f=o.displayName&&o.componentId?zt(o.displayName)+"-"+o.componentId:o.componentId||c,j=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,M=o.shouldForwardProp;i&&e.shouldForwardProp&&(M=o.shouldForwardProp?function(P,_,R){return e.shouldForwardProp(P,_,R)&&o.shouldForwardProp(P,_,R)}:e.shouldForwardProp);var E,z=new _o(r,f,i?e.componentStyle:void 0),v=z.isStatic&&s.length===0,F=function(P,_){return function(R,O,K,ae){var J=R.attrs,q=R.componentStyle,le=R.defaultProps,oe=R.foldedComponentIds,G=R.shouldForwardProp,ie=R.styledComponentId,w=R.target,S=function(C,l,I){C===void 0&&(C=$e);var y=ye({},l,{theme:C}),Y={};return I.forEach(function(L){var B,A,ee,pe=L;for(B in Fe(pe)&&(pe=pe(y)),pe)y[B]=Y[B]=B==="className"?(A=Y[B],ee=pe[B],A&&ee?A+" "+ee:A||ee):pe[B]}),[y,Y]}(la(O,m.useContext(Ie),le)||$e,O,J),se=S[0],ce=S[1],de=function(C,l,I,y){var Y=sa(),L=ca(),B=l?C.generateAndInjectStyles($e,Y,L):C.generateAndInjectStyles(I,Y,L);return B}(q,ae,se),ve=K,ge=ce.$as||O.$as||ce.as||O.as||w,Q=De(ge),p=ce!==O?ye({},O,{},ce):O,g={};for(var b in p)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?g.as=p[b]:(G?G(b,gr,ge):!Q||gr(b))&&(g[b]=p[b]));return O.style&&ce.style!==O.style&&(g.style=ye({},O.style,{},ce.style)),g.className=Array.prototype.concat(oe,ie,de!==ie?de:null,O.className,ce.className).filter(Boolean).join(" "),g.ref=ve,m.createElement(ge,g)}(E,P,_,v)};return F.displayName=x,(E=ze.forwardRef(F)).attrs=j,E.componentStyle=z,E.displayName=x,E.shouldForwardProp=M,E.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Qe,E.styledComponentId=f,E.target=i?e.target:e,E.withComponent=function(P){var _=o.componentId,R=function(K,ae){if(K==null)return{};var J,q,le={},oe=Object.keys(K);for(q=0;q<oe.length;q++)J=oe[q],ae.indexOf(J)>=0||(le[J]=K[J]);return le}(o,["componentId"]),O=_&&_+"-"+(De(P)?P:zt(wr(P)));return ua(P,ye({},R,{attrs:j,componentId:O}),r)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=i?pa({},e.defaultProps,P):P}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),n&&bo(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var a=function(e){return function o(r,i,n){if(n===void 0&&(n=$e),!Xr.isValidElementType(i))return je(1,String(i));var d=function(){return r(i,n,U.apply(void 0,arguments))};return d.withConfig=function(s){return o(r,i,ye({},n,{},s))},d.attrs=function(s){return o(r,i,ye({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},d}(ua,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){a[e]=a(e)});var Uo=function(){function e(r,i){this.rules=r,this.componentId=i,this.isStatic=oa(r),tt.registerId(this.componentId+1)}var o=e.prototype;return o.createStyles=function(r,i,n,d){var s=d(Ce(this.rules,i,n,d).join(""),""),u=this.componentId+r;n.insertRules(u,u,s)},o.removeStyles=function(r,i){i.clearRules(this.componentId+r)},o.renderStyles=function(r,i,n,d){r>2&&tt.registerId(this.componentId+r),this.removeStyles(r,n),this.createStyles(r,i,n,d)},e}();function Zo(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var n=U.apply(void 0,[e].concat(r)),d="sc-global-"+Jt(JSON.stringify(n)),s=new Uo(n,d);function u(h){var x=sa(),f=ca(),j=m.useContext(Ie),M=m.useRef(x.allocateGSInstance(d)).current;return x.server&&c(M,h,x,j,f),m.useLayoutEffect(function(){if(!x.server)return c(M,h,x,j,f),function(){return s.removeStyles(M,x)}},[M,h,x,j,f]),null}function c(h,x,f,j,M){if(s.isStatic)s.renderStyles(h,wo,f,M);else{var E=ye({},x,{theme:la(x,j,u.defaultProps)});s.renderStyles(h,E,f,M)}}return ze.memo(u)}function jt(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var n=U.apply(void 0,[e].concat(r)).join(""),d=Jt(n);return new da(d,n)}const Xo=Zo`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: calc(${({theme:e})=>e.layout.topBarHeight} + ${({theme:e})=>e.spacing[6]});
    scroll-padding-bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[6]});
    color-scheme: ${({theme:e})=>e.mode};
  }

  body {
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({theme:e})=>e.color.background};
    background-image: ${({theme:e})=>e.mode==="dark"?"none":"radial-gradient(circle at top, rgba(0, 71, 231, 0.06), transparent 36%)"};
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${({theme:e})=>e.color.text};
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition:
      background-color 220ms ease,
      color 220ms ease;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: ${({theme:e})=>e.zIndex.bottomNav+20};
    pointer-events: none;
    opacity: 0;
    background: ${({theme:e})=>e.mode==="dark"?"rgba(0, 0, 0, 0.08)":"rgba(255, 255, 255, 0.1)"};
    transition: opacity 220ms ease;
  }

  html[data-theme-transition='true'] body::after {
    opacity: 1;
  }

  #root {
    min-height: 100vh;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button,
  input,
  textarea,
  select,
  summary,
  label,
  [role='button'],
  [role='link'] {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: 0;
    background: transparent;
  }

  ::selection {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  :focus-visible {
    outline: 2px solid rgba(11, 16, 32, 0.2);
    outline-offset: 2px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`,we={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},Jo=we.shadow,Qo={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)"},ei={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},ti=e=>({mode:e,color:e==="dark"?Qo:we.color,typography:we.typography,spacing:we.spacing,radius:we.radius,shadow:e==="dark"?ei:Jo,layout:we.layout,breakpoints:we.breakpoints,zIndex:we.zIndex}),ma="lafranciago-theme-mode",ha=m.createContext(null),ri=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(ma);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function ai({children:e}){const[o,r]=m.useState(ri),i=m.useRef(!1);m.useEffect(()=>{if(window.localStorage.setItem(ma,o),document.documentElement.dataset.theme=o,document.documentElement.style.colorScheme=o,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const c=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(c),delete document.documentElement.dataset.themeTransition}},[o]);const n=m.useCallback(()=>{r(c=>c==="light"?"dark":"light")},[]),d=m.useCallback(c=>{r(c)},[]),s=m.useMemo(()=>ti(o),[o]),u=m.useMemo(()=>({mode:o,isDarkMode:o==="dark",toggleMode:n,setMode:d}),[o,d,n]);return t.jsx(ha.Provider,{value:u,children:t.jsxs(Wo,{theme:s,children:[t.jsx(Xo,{}),e]})})}function oi(){const e=m.useContext(ha);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ii={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$=(e,o)=>{const r=m.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:d=2,absoluteStrokeWidth:s,className:u="",children:c,...h},x)=>m.createElement("svg",{ref:x,...ii,width:n,height:n,stroke:i,strokeWidth:s?Number(d)*24/Number(n):d,className:["lucide",`lucide-${ni(e)}`,u].join(" "),...h},[...o.map(([f,j])=>m.createElement(f,j)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=$("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=$("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=$("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=$("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=$("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=$("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=$("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=$("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=$("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=$("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=$("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=$("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=$("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=$("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=$("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=$("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=$("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=$("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=$("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=$("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=$("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=$("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=$("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=$("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=$("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=$("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=$("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=$("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=$("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=$("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=$("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=$("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=$("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Aa({size:e=18,...o}){return t.jsxs("svg",{...o,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const Si="https://photon.komoot.io/api/",ji="https://nominatim.openstreetmap.org/reverse",Dt={lat:-31.4063691,lon:-62.6332043},Et=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Ci=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Ai=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function zi(e,o){const r=e.trim();if(r.length<2)return[];const i=new URLSearchParams({q:r,limit:"12",lat:String(Dt.lat),lon:String(Dt.lon)});try{const n=await fetch(`${Si}?${i.toString()}`,{signal:o});return n.ok?((await n.json()).features??[]).map((s,u)=>{var f;const c=s.properties??{},[h,x]=((f=s.geometry)==null?void 0:f.coordinates)??[];return typeof x!="number"||typeof h!="number"?null:{id:`${c.type??"geo"}-${u}-${x}-${h}`,label:Ci(c),context:Ai(c),lat:x,lon:h}}).filter(s=>s!==null).sort((s,u)=>{const c=Et(r),h=Et(s.label).startsWith(c),x=Et(u.label).startsWith(c);return h!==x?h?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Pi(e,o,r){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(o),zoom:"18","accept-language":"es"});try{const n=await fetch(`${ji}?${i.toString()}`,{signal:r});if(!n.ok)return null;const s=(await n.json()).address??{};return[s.road,s.house_number].filter(Boolean).join(" ")||s.neighbourhood||s.city||null}catch{return null}}const Ei=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Fi=jt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Mi=jt`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Ti=a.div`
  position: fixed;
  inset: 0;
  /* Por encima de la hoja de dirección, que ya usa header + 30. */
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${Fi} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ri=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Mi} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_i=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Ii=a.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,Li=a.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Ni=a.input`
  width: 100%;
  min-height: 3rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.base};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }
`,Oi=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,Bi=a.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
    border-color: ${({theme:e})=>e.color.borderStrong};
  }
`,Di=a.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }

  &:disabled {
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`;function Hi({open:e,address:o,onCancel:r,onSave:i}){const[n,d]=m.useState("");if(m.useEffect(()=>{e&&d("")},[e]),m.useEffect(()=>{if(!e)return;const c=h=>{h.key==="Escape"&&r()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,e]),!e)return null;const s=n.trim(),u=c=>{c.preventDefault(),s&&i(s)};return t.jsx(Ti,{onClick:c=>{c.stopPropagation(),r()},role:"presentation",children:t.jsxs(Ri,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:c=>c.stopPropagation(),children:[t.jsx(_i,{children:"Nombre de la dirección"}),o?t.jsx(Ii,{children:o}):null,t.jsx(Li,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(Ni,{id:"address-name",value:n,onChange:c=>d(c.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(Oi,{children:[t.jsx(Bi,{type:"button",onClick:r,children:"Cancelar"}),t.jsx(Di,{type:"submit",disabled:!s,children:"Guardar"})]})]})})}const Pe=U`
  ${({theme:e})=>e.mode==="dark"&&U`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,Gi=U`
  ${({theme:e})=>e.mode==="dark"&&U`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;U`
  ${({theme:e})=>e.mode==="dark"&&U`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const Yi=a.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+30};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(5, 8, 22, 0.5);
  backdrop-filter: blur(6px);
  opacity: 0;
  transition: opacity 260ms ease;

  &[data-visible='true'] {
    opacity: 1;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: center;
    padding: ${({theme:e})=>e.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,qi=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 86dvh;
  background: ${({theme:e})=>e.color.surface};
  border-radius: ${({theme:e})=>e.radius["2xl"]} ${({theme:e})=>e.radius["2xl"]} 0 0;
  box-shadow: ${({theme:e})=>e.shadow.lg};
  transform: translateY(100%);
  transition:
    transform 260ms cubic-bezier(0.32, 0.72, 0, 1),
    max-height 260ms ease,
    border-radius 260ms ease;

  &[data-visible='true'] {
    transform: translateY(0);
  }

  /* Paso de alta: la hoja ocupa toda la pantalla para el mapa. */
  &[data-full='true'] {
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    max-width: 30rem;
    border-radius: ${({theme:e})=>e.radius["2xl"]};
    opacity: 0;
    transform: translateY(1.5rem);

    &[data-visible='true'] {
      opacity: 1;
      transform: translateY(0);
    }

    &[data-full='true'] {
      height: min(44rem, 92dvh);
      max-height: 92dvh;
      border-radius: ${({theme:e})=>e.radius["2xl"]};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Vi=a.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,Ki=a.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  left: 50%;
  width: 2.5rem;
  height: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.borderStrong};
  transform: translateX(-50%);

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Wi=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Ui=a.button`
  position: absolute;
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
  transition: background-color 180ms ease, color 180ms ease;

  ${Pe};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,Zi=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[3]}
    calc(${({theme:e})=>e.spacing[4]} + env(safe-area-inset-bottom));
  overflow-y: auto;

  /* En el paso de alta el mapa es el único que estira; el resto
     conserva su alto natural. */
  &[data-full='true'] {
    grid-template-rows: auto auto minmax(8rem, 1fr) auto auto;
    align-content: stretch;
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }
`,Xi=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textSoft};

  &:focus-within {
    border-color: ${({theme:e})=>e.color.primary};
  }
`,Ji=a.input`
  width: 100%;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
  }
`,Qi=a.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,en=a.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surface};
  text-align: left;
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.surfaceMuted};
  }

  &[data-current='true'] {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,tn=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,rn=a.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,an=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,on=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nn=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,sn=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3rem;
  margin-top: ${({theme:e})=>e.spacing[1]};
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,cn=a.button`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
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
  transition: background-color 180ms ease, color 180ms ease;

  ${Pe};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,dn=a.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,ln=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,pn=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }

  &:disabled {
    background: ${({theme:e})=>e.color.surfaceMuted};
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`,un=a.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,mn=a.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.75rem;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.md};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  text-align: left;
  cursor: pointer;
  transition: background-color 160ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
  }

  > span {
    display: grid;
    gap: 0.05rem;
    min-width: 0;
  }
`,hn=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,gn=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fn=a.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,yn=m.lazy(()=>Z(()=>import("./AddressMap-DIdto0iu.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.AddressMap}))),bn=260,xn=350;function wn({open:e,currentId:o,onClose:r,onSelect:i}){const[n,d]=m.useState(!1),[s,u]=m.useState(!1),[c,h]=m.useState("list"),[x,f]=m.useState(""),[j,M]=m.useState([]),[E,z]=m.useState(!1),[v,F]=m.useState(null),[P,_]=m.useState([]),[R,O]=m.useState(!1),K=m.useRef(!1);m.useEffect(()=>{if(e){d(!0);const S=window.requestAnimationFrame(()=>u(!0));return()=>window.cancelAnimationFrame(S)}if(!n)return;u(!1);const w=window.setTimeout(()=>{d(!1),h("list"),f(""),M([]),F(null),O(!1)},bn);return()=>window.clearTimeout(w)},[n,e]),m.useEffect(()=>{if(!e)return;const w=S=>{if(S.key==="Escape"&&!R){if(c==="new"){h("list");return}r()}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[R,r,e,c]),m.useEffect(()=>{if(c!=="new")return;if(K.current){K.current=!1;return}const w=x.trim();if(w.length<2){M([]),z(!1);return}const S=new AbortController;z(!0);const se=window.setTimeout(()=>{zi(w,S.signal).then(ce=>{M(ce),z(!1)}).catch(()=>z(!1))},xn);return()=>{window.clearTimeout(se),S.abort()}},[x,c]);const ae=m.useMemo(()=>[...Ei,...P],[P]),J=w=>{K.current=!0,f(w.label),M([]),F({lat:w.lat,lon:w.lon})},q=(w,S)=>{F({lat:w,lon:S}),Pi(w,S).then(se=>{se&&(K.current=!0,f(se),M([]))})},le=w=>{const S={id:`custom-${Date.now()}`,label:w,address:x.trim(),primary:!1};_(se=>[...se,S]),O(!1),i(S.id,S.address),r()};if(!n)return null;const oe=c==="new",G=v??Dt,ie=v!==null&&x.trim().length>=3;return t.jsxs(Yi,{"data-visible":s,onClick:r,role:"presentation",children:[t.jsxs(qi,{"data-visible":s,"data-full":oe,role:"dialog","aria-modal":"true","aria-label":oe?"Agregar una dirección nueva":"Dirección de entrega",onClick:w=>w.stopPropagation(),children:[t.jsxs(Vi,{children:[t.jsx(Ki,{"aria-hidden":"true"}),oe?t.jsx(cn,{type:"button",onClick:()=>h("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(si,{size:18,"aria-hidden":"true"})}):null,t.jsx(Wi,{children:oe?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(Ui,{type:"button",onClick:r,"aria-label":"Cerrar",children:t.jsx(Ca,{size:18,"aria-hidden":"true"})})]}),t.jsx(Zi,{"data-full":oe,children:oe?t.jsxs(t.Fragment,{children:[t.jsxs(Xi,{children:[t.jsx(Bt,{size:18,"aria-hidden":"true"}),t.jsx(Ji,{value:x,onChange:w=>f(w.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),j.length>0?t.jsx(un,{"aria-label":"Sugerencias de direcciones",children:j.map(w=>t.jsxs(mn,{type:"button",onClick:()=>J(w),children:[t.jsx(at,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(hn,{children:w.label}),w.context?t.jsx(gn,{children:w.context}):null]})]},w.id))}):null,j.length===0&&E?t.jsx(fn,{children:"Buscando…"}):null,t.jsx(dn,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsx(yn,{lat:G.lat,lon:G.lon,onPick:q})})}),t.jsx(ln,{children:v?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(pn,{type:"button",onClick:()=>O(!0),disabled:!ie,children:[t.jsx(at,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(Qi,{children:"Tus direcciones guardadas"}),ae.map(w=>t.jsxs(en,{type:"button","data-current":w.id===o,onClick:()=>{i(w.id,w.address),r()},children:[t.jsx(tn,{children:t.jsx(rr,{size:18,"aria-hidden":"true"})}),t.jsxs(rn,{children:[t.jsx(an,{children:w.label}),t.jsx(on,{children:w.address})]}),w.id===o?t.jsx(nn,{"aria-label":"Dirección actual",children:t.jsx(di,{size:16,"aria-hidden":"true"})}):null]},w.id)),t.jsxs(sn,{type:"button",onClick:()=>h("new"),children:[t.jsx(wa,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(Hi,{open:R,address:x.trim(),onCancel:()=>O(!1),onSave:le})]})}const $n=a.form`
  width: 100%;
`,vn=a.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,kn=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3rem;
  padding: 0 0.35rem 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &:focus-within {
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }
`,Sn=a.input`
  width: 100%;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`,jn=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`,za=m.forwardRef(function({value:o,onChange:r,placeholder:i="Locales, productos y categorías",label:n,id:d="marketplace-search"},s){const u=c=>{c.preventDefault()};return t.jsxs($n,{onSubmit:u,role:"search",children:[t.jsx(vn,{htmlFor:d,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(kn,{children:[t.jsx(Bt,{size:18,"aria-hidden":"true"}),t.jsx(Sn,{id:d,ref:s,value:o,onChange:c=>r(c.target.value),placeholder:i,type:"search"}),t.jsx(jn,{type:"submit","aria-label":"Buscar",children:t.jsx(Bt,{size:16,"aria-hidden":"true"})})]})]})}),Cn=jt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,An=jt`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,zn=a.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3.5rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(145deg, #131C30 0%, #0D1424 100%)":"linear-gradient(145deg, #FFFFFF 0%, #F1F5FC 100%)"};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,Pn=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.primary};
  animation: ${Cn} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,En=a.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Fn=a.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Mn=a.span`
  padding: 0.05rem 0.35rem;
  border-radius: ${({theme:e})=>e.radius.sm};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: 0.12em;

  &[data-dark='true'] {
    background: rgba(77, 229, 255, 0.14);
    color: #4de5ff;
  }
`,Tn=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rn=a.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  width: 3.6rem;
  height: 1.9rem;
  padding: 0.2rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid
    ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.34)":e.color.borderStrong};
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, #060B18 0%, #0C1526 100%)":"linear-gradient(180deg, #DCE5F5 0%, #C9D6EC 100%)"};
  box-shadow: inset 0 2px 4px rgba(5, 8, 22, 0.28);
  overflow: hidden;
`,_n=a.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${An} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,In=a.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,Ln=a.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,Nn=a.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: linear-gradient(180deg, #ffffff 0%, #dfe8f7 100%);
  color: ${({theme:e})=>e.color.brand};
  box-shadow: 0 2px 6px rgba(5, 8, 22, 0.32);
  transform: translateX(0);
  transition: transform 260ms cubic-bezier(0.34, 1.4, 0.5, 1), background 220ms ease,
    color 220ms ease, box-shadow 220ms ease;
  z-index: 1;

  &[data-dark='true'] {
    transform: translateX(1.7rem);
    background: linear-gradient(180deg, #4de5ff 0%, #1FA8DE 100%);
    color: #041018;
    box-shadow: 0 0 12px rgba(77, 229, 255, 0.3);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;function zr({isDarkMode:e,onToggle:o}){return t.jsxs(zn,{type:"button",onClick:o,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(Pn,{"data-dark":e,"aria-hidden":"true",children:t.jsx(gi,{size:14,"aria-hidden":"true"})}),t.jsxs(En,{children:[t.jsxs(Fn,{children:["Modo",t.jsx(Mn,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Tn,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(Rn,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(_n,{}),t.jsx(In,{"data-dark":e}),t.jsxs(Ln,{children:[t.jsx(Ar,{size:12,"aria-hidden":"true"}),t.jsx(Cr,{size:12,"aria-hidden":"true"})]}),t.jsx(Nn,{"data-dark":e,children:e?t.jsx(Cr,{size:12,"aria-hidden":"true"}):t.jsx(Ar,{size:12,"aria-hidden":"true"})})]})]})}const On=a.div`
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  --desktop-sidebar-width: 300px;
  background-color: ${({theme:e})=>e.color.background};
  background-image: ${({theme:e})=>e.mode==="dark"?"none":"radial-gradient(circle at top, rgba(0, 71, 231, 0.05), transparent 34%)"};
  background-repeat: no-repeat;
  color: ${({theme:e})=>e.color.text};
  padding-top: var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight});
  padding-bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[3]});

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding-bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[2]});
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-bottom: 0;
  }
`,Bn=a.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Dn=a.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    max-width: none;
    margin: 0;
    padding-left: calc(var(--desktop-sidebar-width) + ${({theme:e})=>e.layout.screenPaddingH});
    padding-right: ${({theme:e})=>e.layout.screenPaddingH};
  }
`;a.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`;a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;const Hn=a.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Mismo alto que el chip del logo, para que la fila quede pareja. */
  min-height: 2.25rem;
  height: 2.25rem;
  min-width: 2.25rem;
  width: 2.25rem;
  flex: 0 0 auto;
  padding: 0;

  /* El área táctil sigue siendo de 44px aunque el botón se vea más chico. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  &:focus {
    outline: none;
  }

  /* En escritorio el sidebar queda fijo a la izquierda: el botón sobra. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;a(be)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;a.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  flex: 0 0 auto;
  border-radius: ${({theme:e})=>e.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.1rem;
  height: 1.1rem;
  margin-left: -0.3rem;
  margin-top: -0.7rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-size: 0.6rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.glow};
`;a.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 44px;
  min-width: 0;
  border-radius: ${({theme:e})=>e.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;const Pr=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: transparent;
  box-shadow: none;
  flex: 0 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 3rem;
    height: 3rem;
  }
`,Ft=a.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.85))
    drop-shadow(0 1px 3px rgba(5, 8, 22, 0.35));
`;a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;const Er=a.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1rem, 3.2vw, 1.125rem);
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
  white-space: nowrap;
  line-height: 1.05;
`,Fr=a.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Gn=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: center;
  white-space: nowrap;
`;a.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: calc(100vw - 13rem);
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;const Yn=a(Gn)`
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  letter-spacing: -0.01em;
  white-space: pre-line;
`;a.span`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  flex: 0 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`;a.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`;a(be)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({theme:e})=>e.shadow.sm};
  }
`;const Fd=a.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,Md=a.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Td=a.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.textMuted};
`,Rd=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  transition: box-shadow 180ms ease, border-color 180ms ease, background-color 180ms ease;

  &:focus-within {
    border-color: ${({theme:e})=>e.color.borderStrong};
    box-shadow: none;
    background: ${({theme:e})=>e.color.surface};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 3rem;
    gap: ${({theme:e})=>e.spacing[1]};
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`,_d=a.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,nr=U`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`;a.button`
  ${nr};
  display: none;
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`;a.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;const Id=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    color: ${({theme:e})=>e.color.text};
  }
`,qn=a.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Se=a.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,ke=a.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Vn=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[1]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[2]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,Ld=a.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    font-size: 0.625rem;
    letter-spacing: 0.1em;
  }
`,Nd=a.h1`
  margin: 0;
  max-width: 17ch;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.5rem, 3.6vw, 2.75rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.text};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    max-width: 15ch;
    font-size: 1.375rem;
  }
`,Od=a.p`
  margin: 0;
  max-width: 60rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.45;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,sr=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;a(sr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;a(sr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;a(sr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const Kn=a.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Wn=a.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,Bd=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.95rem;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,Dd=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,Un=a.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    font-size: 0.6875rem;
  }
`;a(Un)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const Zn=a.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Hd=a(Zn)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;a.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Xn=a(be)`
  ${nr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,Jn=a(Xn)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Gd=a.button`
  ${nr};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`;a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);
  }
`;a.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(16rem, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-auto-columns: minmax(14rem, 1fr);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;a(Kn)`
  scroll-snap-align: start;
`;a.nav`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: inline-flex;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;a(Ht)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &.active {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;const Qn=a.nav`
  position: fixed;
  inset: auto 0 0;
  z-index: ${({theme:e})=>e.zIndex.bottomNav};
  max-height: 50px;
  padding:
    0
    ${({theme:e})=>e.layout.screenPaddingH}
    calc(0.125rem + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
  overflow: visible;

  @media (max-width: 380px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,es=a.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;

  @media (max-width: 380px) {
    gap: 0.125rem;
  }
`,ts=a(Ht)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.0625rem;
  min-height: 0;
  min-width: 0;
  width: 100%;
  padding: 0 ${({theme:e})=>e.spacing[1]} 0.125rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
  white-space: nowrap;
  line-height: 1.05;
  overflow: hidden;
  position: relative;
  z-index: 0;
  isolation: isolate;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &.active {
    color: ${({theme:e})=>e.color.primary};

    ${({theme:e})=>e.mode==="dark"&&U`
        color: ${e.color.neon};
      `};
  }

  &.active::before,
  &[aria-current='page']::before {
    content: '';
    position: absolute;
    inset: -0.14rem 0.05rem -0.14rem;
    border-radius: ${({theme:e})=>e.radius.lg};
    background: ${({theme:e})=>e.color.primarySoft};
    z-index: -1;
  }

  &:not([data-primary='true']) {
    transform: translateY(-4px);
  }

  &[data-primary='true'] {
    position: relative;
    margin-top: -0.8rem;
    padding: 0 ${({theme:e})=>e.spacing[1]} 0.125rem;
    gap: 0.0625rem;
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-primary='true'] > span:last-child {
    white-space: nowrap;
  }

  & > span:last-child {
    min-width: 0;
    width: 100%;
    display: block;
  }

  &[data-primary='true'].active {
    background: transparent;
    color: ${({theme:e})=>e.color.primary};
  }

  @media (max-width: 380px) {
    gap: 0;
    padding: 0 0.125rem 0.1rem;
    font-size: clamp(0.6rem, 2.3vw, 0.72rem);
    line-height: 1;
    letter-spacing: -0.01em;
  }
`,rs=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  [data-primary='true'] & {
    filter: none;
  }

  ${Pe};

  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
  }
`;a.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;a.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;a.section`
  display: block;
`;a.span`
  display: inline-flex;
  align-items: center;
  min-height: 1rem;
  line-height: 1;
  padding: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;const as=a.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&U`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,os=a.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-height: 2.75rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 0 auto;
  }
  padding: 0 ${({theme:e})=>e.spacing[1]} 0 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  cursor: pointer;

  /* En pantallas angostas la dirección entra completa bajando
     un escalón de tamaño, sin recortar el área táctil. */
  @media (max-width: 420px) {
    font-size: ${({theme:e})=>e.typography.size.sm};
    letter-spacing: -0.03em;
  }
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: opacity 180ms ease;

  &:hover {
    opacity: 0.86;
  }

  &:focus {
    outline: none;
  }
`,is=a.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ns=a.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,ss=a.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Pa=U`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 420px) {
    width: 2.25rem;
  }
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.18);
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: none;
  }
`,cs=a.button`
  ${Pa};
`,Mr=a(be)`
  ${Pa};
`,ds=a.span`
  position: absolute;
  top: -0.15rem;
  right: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.15rem;
  height: 1.15rem;
  padding: 0 0.22rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.brand};
  background: ${({theme:e})=>e.color.danger};
  color: #fff;
  font-size: 0.625rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1;
`,ls=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
    gap: ${({theme:e})=>e.spacing[2]};
  }

  /* En pantallas angostas las acciones ceden ancho a la dirección,
     sin bajar de 44px de área táctil. */
  @media (max-width: 420px) {
    gap: 0;
  }
`;a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.875rem;
  padding: 0 0.35rem 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;a.input`
  width: 100%;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
  }
`;a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`;const ps=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
  min-width: 0;

  @media (max-width: 420px) {
    gap: 0.25rem;
  }

  /* En escritorio: buscador a la izquierda, dirección al medio y acciones
     a la derecha. El bloque de marca queda oculto (vive en el sidebar). */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: grid;
    /* Las columnas laterales comparten ancho para que el buscador quede
       centrado en el área de contenido. */
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,us=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
  flex: 0 0 auto;

  @media (max-width: 420px) {
    gap: 0.15rem;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,ms=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,hs=a.span`
  display: none;
  align-items: baseline;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }

  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.onPrimary};
  white-space: nowrap;
`,gs=a.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,fs=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  /* Sin chip blanco: el logo va directo sobre el azul del header y se
     despega con un halo claro que sigue su silueta. */
  background: transparent;
  padding: 0;
  box-shadow: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,ys=a.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,bs=U`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,xs=U`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`,Ea=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,Tr=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  max-width: calc(100% - 3rem);
  border-radius: ${({theme:e})=>e.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: visible;
  min-width: 0;
  flex: 1 1 auto;
  width: fit-content;
`,Rr=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,ws=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: calc(${({theme:e})=>e.layout.topBarHeight} - ${({theme:e})=>e.spacing[3]});
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  position: sticky;
  top: 0;
  z-index: 1;
`,Ge=a(Ht)`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3.25rem;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &.active,
  &[aria-current='page'] {
    border-color: rgba(0, 71, 231, 0.16);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,Ye=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,qe=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.12)":"rgba(0, 71, 231, 0.08)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;

  ${Pe};
`,Ve=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Ke=a.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,We=a.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,Ue=a.nav`
  display: grid;
  gap: 0.25rem;
`,Ze=a.section`
  display: block;
`,Xe=a.span`
  display: inline-flex;
  align-items: center;
  min-height: 1rem;
  line-height: 1;
  padding: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,_r=a.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Ir=a.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${bs};
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  padding: ${({theme:e})=>e.layout.cardPadding};
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition:
    transform 180ms ease-out,
    opacity 180ms ease-out;

  &[data-size='sm'] {
    max-width: 32rem;
  }

  &[data-size='md'] {
    max-width: 42rem;
  }

  &[data-size='lg'] {
    max-width: 68rem;
  }

  &[data-drawer='true'] {
    width: min(88vw, 24rem);
    max-width: none;
    max-height: 100dvh;
    height: 100dvh;
    overflow: hidden;
    padding: 0;
    border-radius: 0 ${({theme:e})=>e.radius["2xl"]} ${({theme:e})=>e.radius["2xl"]} 0;
    background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    transform: translate3d(calc(-100% - 1rem), 0, 0);
    opacity: 0;
    transition:
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 240ms ease-out;
    will-change: transform, opacity;
  }

  &[data-filters='true'] {
    width: 100%;
    max-width: none;
    max-height: 100dvh;
    height: 100dvh;
    overflow: hidden;
    padding: 0;
    border-radius: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    &[data-filters='true'] {
      width: min(92vw, 42rem);
      max-width: none;
      height: auto;
      max-height: calc(100dvh - ${({theme:e})=>e.spacing[4]} * 2);
      border-radius: ${({theme:e})=>e.radius["2xl"]};
      background: ${({theme:e})=>e.color.background};
      border: 1px solid ${({theme:e})=>e.color.border};
      align-self: center;
    }
  }

  &[data-notifications='true'] {
    width: min(22.5rem, calc(100vw - ${({theme:e})=>e.spacing[3]}));
    max-width: none;
    max-height: calc(100dvh - ${({theme:e})=>e.layout.topBarHeight} - ${({theme:e})=>e.spacing[3]});
    padding: 0;
    overflow: visible;
    border-radius: ${({theme:e})=>e.radius.lg};
    border: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surface};
    box-shadow: ${({theme:e})=>e.shadow.lg};
    transform: translate3d(0, -0.5rem, 0);
    opacity: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    position: relative;
  }

  &[data-drawer='true'][data-state='opening'],
  &[data-drawer='true'][data-state='closing'] {
    transform: translate3d(calc(-100% - 1rem), 0, 0);
    opacity: 0;
  }

  &[data-drawer='true'][data-state='open'] {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  &[data-notifications='true'][data-state='opening'],
  &[data-notifications='true'][data-state='closing'] {
    transform: translate3d(0, -0.75rem, 0);
    opacity: 0;
  }

  &[data-notifications='true'][data-state='open'] {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,$s=a.button`
  ${xs};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${Gi};
  ${Pe};
`,Lr=a.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+20};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[3]};
  background: rgba(5, 8, 22, 0.58);
  backdrop-filter: blur(8px);
  opacity: 1;
  transition: opacity 180ms ease-out;

  &[data-drawer='true'] {
    align-items: stretch;
    justify-content: flex-start;
    padding: 0;
    background: rgba(5, 8, 22, 0.42);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: opacity 220ms ease-out;
    will-change: opacity;
  }

  &[data-filters='true'] {
    align-items: stretch;
    justify-content: center;
    padding: 0;
    background: rgba(5, 8, 22, 0.48);
    backdrop-filter: blur(10px);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    &[data-filters='true'] {
      align-items: center;
      padding: ${({theme:e})=>e.spacing[4]} 0;
    }
  }

  &[data-notifications='true'] {
    align-items: flex-start;
    justify-content: flex-end;
    padding: calc(${({theme:e})=>e.layout.topBarHeight} + ${({theme:e})=>e.spacing[2]})
      ${({theme:e})=>e.layout.screenPaddingH} 0;
    background: rgba(5, 8, 22, 0.16);
    backdrop-filter: none;
    opacity: 0;
    transition: opacity 220ms ease-out;
  }

  &[data-drawer='true'][data-state='opening'] {
    opacity: 0;
  }

  &[data-drawer='true'][data-state='open'] {
    opacity: 1;
  }

  &[data-drawer='true'][data-state='closing'] {
    opacity: 0;
  }

  &[data-notifications='true'][data-state='opening'] {
    opacity: 0;
  }

  &[data-notifications='true'][data-state='open'] {
    opacity: 1;
  }

  &[data-notifications='true'][data-state='closing'] {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,vs=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,ks=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,Ss=a.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,js=a.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,Nr=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.18);
  }

  &:focus {
    outline: none;
  }
`,Cs=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,As=a.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,zs=a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ps=a.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Es=a.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  box-shadow: ${({theme:e})=>e.shadow.sm};
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.18);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  &:focus {
    outline: none;
  }
`,Fs=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Ms=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Ts=a.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Rs=a.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,_s=a.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Is=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ls=a.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`,Ns=a.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Os=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Bs=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Ds=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Hs=a.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gs=a.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,Mt="/LaFranciaGO/favicon.png",Ys="Av. San Martín 123",Or=3,Br=420,qs=260,Dr=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:rr,end:!0},{to:"/comercios",title:"Categorías",subtitle:"Navegá por rubros",icon:ba},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Le},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:tr},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:ir}],Hr=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Ae},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:Aa},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:or},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:rt}],Vs=a.aside`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    position: fixed;
    inset: 0 auto 0 0;
    width: var(--desktop-sidebar-width);
    z-index: ${({theme:e})=>e.zIndex.header+1};
    border-right: 1px solid ${({theme:e})=>e.color.border};
    background: ${({theme:e})=>e.color.surface};
    box-shadow: ${({theme:e})=>e.shadow.sm};
    overflow: hidden;
  }
`,Ks=a(Ea)`
  height: 100%;
`,Gr=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Ae,items:[{icon:rt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Le,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Le,items:[{icon:at,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Ae,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:at,items:[{icon:tr,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:rt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],Ws=[{to:"/",label:"Inicio",icon:rr},{to:"/comercios",label:"Categorías",icon:ba},{to:"/pedidos",label:"Mis pedidos",icon:Le},{to:"/favoritos",label:"Favoritos",icon:tr},{to:"/mi-cuenta",label:"Cuenta",icon:ir}];function Us({children:e,query:o,onQueryChange:r,showSearch:i=!0}){const{isDarkMode:n,toggleMode:d}=oi(),s=Oa(),u=typeof o=="string"&&typeof r=="function",c=m.useRef(null),h=m.useRef(null),x=m.useRef(null),f=m.useRef(null),j=m.useRef(null),[M,E]=m.useState(!1),[z,v]=m.useState({id:"home",label:Ys}),[F,P]=m.useState(!1),[_,R]=m.useState(!1),[O,K]=m.useState("opening"),[ae,J]=m.useState(!1),[q,le]=m.useState(!1),[oe,G]=m.useState("opening"),[ie,w]=m.useState(null),S=m.useCallback(()=>{P(!1),J(!1),w(null)},[]),se=m.useCallback(()=>{S(),P(!0)},[S]),ce=m.useCallback(()=>{if(F||_){S();return}se()},[S,_,F,se]),de=m.useCallback(()=>{S(),J(!0)},[S]),ve=m.useCallback(()=>{if(ae||q){S();return}de()},[S,q,ae,de]);m.useEffect(()=>{const p=document.body.style.overflow;return(F||_||ae||q)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=p}},[_,F,q,ae]),m.useLayoutEffect(()=>{const p=c.current;if(!p)return;const g=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${p.offsetHeight}px`)};g();const b=typeof ResizeObserver<"u"?new ResizeObserver(g):null;return b==null||b.observe(p),window.addEventListener("resize",g),()=>{b==null||b.disconnect(),window.removeEventListener("resize",g),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),m.useEffect(()=>{h.current!==null&&(window.cancelAnimationFrame(h.current),h.current=null),x.current!==null&&(window.clearTimeout(x.current),x.current=null);const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(F){if(R(!0),p){K("open");return}K("opening"),h.current=window.requestAnimationFrame(()=>{K("open"),h.current=null});return}if(_){if(p){R(!1),K("opening");return}K("closing"),x.current=window.setTimeout(()=>{R(!1),K("opening"),x.current=null},Br)}},[_,F]),m.useEffect(()=>()=>{h.current!==null&&window.cancelAnimationFrame(h.current),x.current!==null&&window.clearTimeout(x.current),f.current!==null&&window.cancelAnimationFrame(f.current),j.current!==null&&window.clearTimeout(j.current)},[]),m.useEffect(()=>{f.current!==null&&(window.cancelAnimationFrame(f.current),f.current=null),j.current!==null&&(window.clearTimeout(j.current),j.current=null);const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(ae){if(le(!0),p){G("open");return}G("opening"),f.current=window.requestAnimationFrame(()=>{G("open"),f.current=null});return}if(q){if(p){le(!1),G("opening");return}G("closing"),j.current=window.setTimeout(()=>{le(!1),G("opening"),j.current=null},qs)}},[q,ae]);const ge=m.useCallback((p,g)=>{p.preventDefault(),S(),window.setTimeout(()=>{s(g)},Br)},[S,s]),Q=m.useMemo(()=>Gr.find(p=>p.id===ie)??null,[ie]);return t.jsxs(On,{children:[t.jsx(Bn,{ref:c,children:t.jsx(as,{children:t.jsx(Dn,{children:t.jsxs(ps,{children:[t.jsxs(us,{children:[t.jsx(Hn,{type:"button",onClick:ce,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":F||_,children:t.jsx(hi,{size:20,"aria-hidden":"true"})}),t.jsxs(ms,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(fs,{children:t.jsx(Ft,{src:Mt,alt:"","aria-hidden":"true"})}),t.jsxs(hs,{children:["LaFrancia",t.jsx(gs,{children:"GO"})]})]})]}),u?t.jsx(ys,{children:t.jsx(za,{value:o,onChange:r})}):null,t.jsxs(ls,{"aria-label":"Acciones rápidas",children:[t.jsxs(os,{type:"button","aria-label":`Entregar en ${z.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":M,onClick:()=>E(!0),children:[t.jsxs(ss,{children:[t.jsx(ns,{children:"Entregar en"}),t.jsx(is,{children:z.label})]}),t.jsx(pi,{size:15,"aria-hidden":"true"})]}),t.jsxs(cs,{type:"button",onClick:ve,"aria-label":`Abrir notificaciones, ${Or} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":ae||q,children:[t.jsx(rt,{size:18,"aria-hidden":"true"}),t.jsx(ds,{children:Or})]}),t.jsx(Mr,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx($i,{size:18,"aria-hidden":"true"})}),t.jsx(Mr,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:t.jsx(ir,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(Vs,{"aria-label":"Navegación principal",children:t.jsxs(Ks,{children:[t.jsxs(Tr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Pr,{children:t.jsx(Ft,{src:Mt,alt:"","aria-hidden":"true"})}),t.jsxs(Rr,{children:[t.jsxs(Er,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Fr,{children:"GO"})]}),t.jsx(Yn,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(Ze,{children:[t.jsx(Xe,{children:"NAVEGACIÓN"}),t.jsx(Ue,{"aria-label":"Navegación principal",children:Dr.map(p=>{const g=p.icon;return t.jsxs(Ge,{to:p.to,end:p.end,onClick:b=>ge(b,p.to),children:[t.jsx(qe,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ke,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ye,{"aria-hidden":"true",children:t.jsx(He,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsxs(Ze,{children:[t.jsx(Xe,{children:"ACCIONES"}),t.jsx(Ue,{"aria-label":"Acciones rápidas",children:Hr.map(p=>{const g=p.icon;return t.jsxs(Ge,{to:p.to,onClick:b=>ge(b,p.to),children:[t.jsx(qe,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ke,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ye,{"aria-hidden":"true",children:t.jsx(He,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(_r,{children:t.jsx(zr,{isDarkMode:n,onToggle:d})})]})}),t.jsx(qn,{children:e}),t.jsx(Qn,{"aria-label":"Navegación móvil",children:t.jsx(es,{children:Ws.map(p=>{const g=p.icon;return t.jsx("li",{children:t.jsxs(ts,{to:p.to,"data-primary":p.to==="/pedidos",children:[t.jsx(rs,{children:t.jsx(g,{size:p.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:p.label})]})},p.to)})})}),_&&t.jsx(Lr,{"data-drawer":"true","data-state":O,role:"presentation",onClick:S,children:t.jsxs(Ir,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":O,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:p=>p.stopPropagation(),children:[t.jsxs(ws,{children:[t.jsxs(Tr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Pr,{children:t.jsx(Ft,{src:Mt,alt:"","aria-hidden":"true"})}),t.jsx(Rr,{children:t.jsxs(Er,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Fr,{children:"GO"})]})})]}),t.jsx($s,{type:"button",onClick:S,"aria-label":"Cerrar menú",children:t.jsx(Ca,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Ea,{children:[t.jsxs(Ze,{children:[t.jsx(Xe,{children:"Navegación"}),t.jsx(Ue,{"aria-label":"Navegación principal",children:Dr.map(p=>{const g=p.icon;return t.jsxs(Ge,{to:p.to,end:p.end,onClick:b=>ge(b,p.to),children:[t.jsx(qe,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ke,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ye,{"aria-hidden":"true",children:t.jsx(He,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsxs(Ze,{children:[t.jsx(Xe,{children:"Acciones"}),t.jsx(Ue,{"aria-label":"Acciones rápidas",children:Hr.map(p=>{const g=p.icon;return t.jsxs(Ge,{to:p.to,onClick:b=>ge(b,p.to),children:[t.jsx(qe,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ke,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ye,{"aria-hidden":"true",children:t.jsx(He,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsx(_r,{children:t.jsx(zr,{isDarkMode:n,onToggle:d})})]})]})}),q&&t.jsx(Lr,{"data-notifications":"true","data-state":oe,role:"presentation",onClick:S,children:t.jsxs(Ir,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":oe,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:p=>p.stopPropagation(),children:[t.jsxs(js,{children:[Q?t.jsx(Nr,{type:"button",onClick:()=>w(null),"aria-label":"Volver a las notificaciones",children:t.jsx(ui,{size:14,"aria-hidden":"true"})}):t.jsx(As,{"aria-hidden":"true"}),t.jsxs(Ps,{children:[t.jsx(zs,{id:"marketplace-notifications-title",children:(Q==null?void 0:Q.title)??"Notificaciones"}),t.jsx(Cs,{children:(Q==null?void 0:Q.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(Nr,{type:"button",onClick:()=>{S(),s("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(xi,{size:14,"aria-hidden":"true"})})]}),t.jsx(Ss,{}),t.jsx(ks,{children:Q?t.jsx(vs,{"aria-label":Q.title,children:Q.items.map(p=>{const g=p.icon;return t.jsxs(Ls,{children:[t.jsx(Bs,{"aria-hidden":"true",children:t.jsx(g,{size:14,"aria-hidden":"true"})}),t.jsxs(Ns,{children:[t.jsxs(Gs,{children:[t.jsx(Hs,{children:p.title}),t.jsx(Os,{children:p.date})]}),t.jsx(Ds,{children:p.subtitle})]})]},`${Q.id}-${p.title}`)})}):t.jsx(Is,{"aria-label":"Secciones de notificaciones",children:Gr.map(p=>{const g=p.icon;return t.jsxs(Es,{type:"button",onClick:()=>w(p.id),children:[t.jsx(Ms,{"aria-hidden":"true",children:t.jsx(g,{size:14,"aria-hidden":"true"})}),t.jsxs(Rs,{children:[t.jsx(_s,{children:p.title}),t.jsx(Ts,{children:p.subtitle})]}),t.jsx(Fs,{"aria-hidden":"true",children:t.jsx(Ne,{size:16,"aria-hidden":"true"})})]},p.id)})})})]})}),t.jsx(wn,{open:M,currentId:z.id,onClose:()=>E(!1),onSelect:(p,g)=>v({id:p,label:g})})]})}const cr=a.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:o})=>e.radius[o??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,dr=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Fa=U`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;a.div`
  ${Fa};
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.onPrimary};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.32), transparent 58%);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[2]};
`;const Ma=a.div`
  position: absolute;
  inset: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  z-index: 2;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;a.div`
  position: absolute;
  inset: auto ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  z-index: 2;
`;const Zs=a.span`
  ${Fa};
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: ${({$size:e})=>e??"3rem"};
  height: ${({$size:e})=>e??"3rem"};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 2px solid ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`;a.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const Xs="/LaFranciaGO/",Js=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),lr=e=>{const o=e&&Js.has(e)?e:"comercio";return`${Xs}media/${o}.svg`},Qs=e=>e.split(" ").filter(Boolean).slice(0,2).map(o=>{var r;return((r=o[0])==null?void 0:r.toUpperCase())??""}).join(""),ec=e=>{const o=["blue","green","violet","orange","red","gold","slate"],r=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return o[r%o.length]},tc=a(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,rc=a.span`
  position: absolute;
  inset: auto 0 0;
  z-index: 2;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[2]}
    ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  line-height: 1.15;
  background: linear-gradient(180deg, transparent 0%, rgba(5, 8, 22, 0.72) 100%);
  text-shadow: 0 1px 3px rgba(5, 8, 22, 0.4);
`;function ac({id:e,name:o,to:r,priority:i}){return t.jsx(tc,{to:r,children:t.jsxs(cr,{$ratio:"1 / 1",children:[t.jsx(dr,{src:lr(e),alt:o,loading:i?"eager":"lazy"}),t.jsx(rc,{children:o})]})})}const oc=a.div`
  display: grid;
  justify-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  text-align: center;

  &[data-dashed='true'] {
    background: transparent;
    border-style: dashed;
  }
`,ic=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Pe};
`,nc=a.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,sc=a.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,cc=a.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function dc({icon:e,title:o,text:r,ctaLabel:i,ctaTo:n,dashed:d}){return t.jsxs(oc,{"data-dashed":d?"true":"false",children:[t.jsx(ic,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(nc,{children:o}),r?t.jsx(sc,{children:r}):null,i&&n?t.jsx(cc,{children:t.jsx(Jn,{to:n,children:i})}):null]})}const Yr=(e,o="es-AR",r="ARS")=>new Intl.NumberFormat(o,{style:"currency",currency:r,maximumFractionDigits:0}).format(e),lc=e=>`${e.toFixed(1)} km`,Ta=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),pc=a(be)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?U`
          pointer-events: none;
        `:U`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:o})=>o.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,uc=a.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,mc=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,hc=a.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.25;
  color: ${({theme:e})=>e.color.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,gc=a.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,fc=a.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,yc=a.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,bc=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  pointer-events: auto;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,xc=a.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;function wc({name:e,store:o,price:r,oldPrice:i,categoryId:n,imageLabel:d,tag:s,to:u,onAdd:c,priority:h}){return t.jsxs(pc,{to:u??"#",$static:!u,children:[t.jsxs(cr,{$ratio:"1 / 1",children:[t.jsx(dr,{src:lr(n),alt:d??e,loading:h?"eager":"lazy"}),s?t.jsx(Ma,{children:t.jsx(xc,{children:s})}):null]}),t.jsxs(uc,{children:[o?t.jsx(mc,{children:o}):null,t.jsx(hc,{children:e}),t.jsxs(gc,{children:[t.jsxs("div",{children:[t.jsx(fc,{children:Yr(r)}),i?t.jsx(yc,{children:Yr(i)}):null]}),c?t.jsx(bc,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:x=>{x.preventDefault(),x.stopPropagation(),c()},children:t.jsx(wa,{size:18,"aria-hidden":"true"})}):null]})]})]})}const $c=a(be)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &[data-tone='brand'] {
    background: linear-gradient(135deg, ${({theme:e})=>e.color.brand} 0%, #2563EB 100%);
  }

  &[data-tone='dark'] {
    background: linear-gradient(135deg, ${({theme:e})=>e.color.surfaceDark} 0%, #16213F 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,vc=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,kc=a.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Sc=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,jc=a.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Cc=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function Ac({to:e,title:o,text:r,icon:i,tone:n="brand"}){return t.jsxs($c,{to:e,"data-tone":n,children:[t.jsx(vc,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(kc,{children:[t.jsx(Sc,{children:o}),r?t.jsx(jc,{children:r}):null]}),t.jsx(Cc,{children:t.jsx(Ne,{size:18,"aria-hidden":"true"})})]})}const zc=a(be)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3.25rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,Pc=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Pe};
`,Ec=a.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function qr({to:e,label:o,icon:r}){return t.jsxs(zc,{to:e,children:[t.jsx(Pc,{children:t.jsx(r,{size:18})}),t.jsx(Ec,{children:o}),t.jsx(Ne,{size:16,"aria-hidden":"true"})]})}const Fc=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Mc=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Tc=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Rc=a.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size["2xl"]};
  }
`,_c=a.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
`,Ic=a.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Lc=a(be)`
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  flex: 0 0 auto;
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.primary};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`;function Tt({title:e,chip:o,chipIcon:r,subtitle:i,seeAllTo:n,seeAllLabel:d="Ver todos"}){return t.jsxs(Fc,{children:[t.jsxs(Mc,{children:[t.jsxs(Tc,{children:[t.jsx(Rc,{children:e}),o?t.jsxs(_c,{children:[r,o]}):null]}),n?t.jsxs(Lc,{to:n,children:[d,t.jsx(Ne,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(Ic,{children:i}):null]})}const Nc=a(be)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadow.md};
    border-color: rgba(0, 71, 231, 0.24);
  }
`,Oc=a.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Bc=a.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Dc=a.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hc=a.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Gc=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Vr=a.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Yc=a.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  /* Verde más profundo: blanco sobre success daba 3.5:1, por debajo de AA. */
  background: #0a7a43;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-open='false'] {
    background: ${({theme:e})=>e.color.textSoft};
  }
`,qc=a.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.warning};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;function Vc({id:e,name:o,category:r,categoryId:i,to:n,distanceKm:d,rating:s,openNow:u,etaMin:c,etaMax:h,priority:x}){return t.jsxs(Nc,{to:n,children:[t.jsxs(cr,{$ratio:"16 / 9",children:[t.jsx(dr,{src:lr(i),alt:r,loading:x?"eager":"lazy"}),t.jsxs(Ma,{children:[u!==void 0?t.jsx(Yc,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),s!==void 0?t.jsxs(qc,{children:[t.jsx(vi,{size:13,"aria-hidden":"true",fill:"currentColor"}),s.toFixed(1)]}):null]}),t.jsx(Oc,{children:t.jsx(Zs,{$size:"2.75rem",$tone:ec(e),children:Qs(o)})})]}),t.jsxs(Bc,{children:[t.jsx(Dc,{children:o}),t.jsxs(Hc,{children:[r,d!==void 0?` · ${lc(d)}`:""]}),t.jsxs(Gc,{children:[t.jsxs(Vr,{children:[t.jsx(ci,{size:14,"aria-hidden":"true"}),"Delivery"]}),c!==void 0&&h!==void 0?t.jsxs(Vr,{children:[t.jsx(mi,{size:14,"aria-hidden":"true"}),c,"-",h," min"]}):null]})]})]})}const Kc=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:va,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:xa,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:fa,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Qt,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:er,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ae,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Sa,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:ar,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:ka,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:ga,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:ya,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:$a,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:ja,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:or,tone:"red"}],Wc=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],Uc=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],Yd=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],qd=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:va},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ae},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:fa},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:er},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Qt},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:xa},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Sa},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:li},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:ar},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:ka},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:ga},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:ya},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:$a},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:ja}],Zc=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],Xc=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Ra=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Ae,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:er,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",name:"Farmacia Centro",category:"Salud y perfumería",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:ar,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",name:"Carnicería Central",category:"Cortes y frescos",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:Qt,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Vd=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:1,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:2,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,quantity:1,subtotal:2550,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:1,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,quantity:1,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,quantity:1,subtotal:2690,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Kd=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2}],Wd=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],Ud=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],Zd=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],Xd=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],Jd=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],Qd=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],el=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],tl=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:ki},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:fi},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:yi},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:wi}],Jc=e=>Ta(e),Rt=(e,...o)=>{const r=Jc(e);return r?Ta(o.filter(i=>i!==void 0).join(" ")).includes(r):!0},Qc=e=>Zc.find(o=>o.id===e),rl=e=>Ra.find(o=>o.id===e),al=e=>Ra.find(o=>o.name.toLowerCase()===e.toLowerCase()),ol=e=>{const o=Xc.find(i=>i.id===`${e}-compare`);if(o){const i=[...o.offers].sort((n,d)=>n.price-d.price);return{kind:"comparison",comparison:o,bestOffer:i[0],sortedOffers:i}}const r=Qc(e);if(r)return{kind:"offer",offer:r}},ed=a(be)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: linear-gradient(135deg, ${({theme:e})=>e.color.brand} 0%, #2563eb 100%);
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,td=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,rd=a.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,ad=a.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,od=a.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,id=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,_a=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,nd=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,sd=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;a.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;

  > div:first-child {
    min-width: 0;
    flex: 1 1 auto;
  }

  > :last-child {
    flex: 0 0 auto;
  }
`;a.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;a.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`;a.div`
  text-align: right;
`;const il=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[3]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;const nl=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;a.div`
  margin-top: ${({theme:e})=>e.spacing[3]};
`;a.div`
  margin-top: ${({theme:e})=>e.spacing[5]};
`;const sl=a(Se)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;a(Vn)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const cl=a(_a)`
  gap: ${({theme:e})=>e.spacing[1]};
`;a(nd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;a(sd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;a(Wn)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const pr=a.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(9.5rem, 9.5rem);
  gap: ${({theme:e})=>e.spacing[2]};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  > * {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(11rem, 11rem);
  }
`,cd=a(pr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,dd=a(pr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,ld=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,pd=a.section`
  padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[1]};

  /* En escritorio el buscador vive en la barra superior. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-top: ${({theme:e})=>e.spacing[2]};

    form[role='search'] {
      display: none;
    }
  }
`;a.div`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;const dl=a.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ud=a.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`;function md(){const[e,o]=m.useState(""),r=e.trim(),i=r.length>0,n=m.useMemo(()=>Kc.filter(c=>Rt(r,c.name)),[r]),d=m.useMemo(()=>Wc.filter(c=>Rt(r,c.name,c.category,c.address)),[r]),s=m.useMemo(()=>Uc.filter(c=>Rt(r,c.product,c.store)),[r]),u=n.length>0||d.length>0||s.length>0;return t.jsxs(Us,{query:e,onQueryChange:o,children:[t.jsx(pd,{children:t.jsx(ke,{children:t.jsx(za,{value:e,onChange:o})})}),t.jsx(Se,{children:t.jsx(ke,{children:t.jsxs(ed,{to:"/mandado",children:[t.jsx(td,{children:t.jsx(Le,{size:22,"aria-hidden":"true"})}),t.jsxs(rd,{children:[t.jsx(ad,{children:"¿Necesitás algún mandado?"}),t.jsx(od,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(id,{children:t.jsx(Ne,{size:18,"aria-hidden":"true"})})]})})}),i&&!u?t.jsx(Se,{children:t.jsx(ke,{children:t.jsx(dc,{icon:bi,title:"Sin resultados",text:`No encontramos nada para "${r}". Probá con otra palabra.`,dashed:!0})})}):null,n.length>0?t.jsx(Se,{children:t.jsxs(ke,{children:[t.jsx(Tt,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/comercios"}),t.jsx(dd,{"aria-label":"Categorías",children:n.map((c,h)=>t.jsx(ac,{id:c.id,name:c.name,to:`/comercios?rubro=${c.id}`,priority:h<5},c.id))})]})}):null,s.length>0?t.jsx(Se,{children:t.jsxs(ke,{children:[t.jsx(Tt,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(pr,{"aria-label":"Productos destacados",children:s.map((c,h)=>t.jsx(wc,{name:c.product,store:c.store,price:c.price,oldPrice:c.oldPrice,categoryId:c.categoryId,imageLabel:c.imageLabel,tag:c.discount>0?`-${c.discount}%`:void 0,to:c.href,priority:h<3},c.id))})]})}):null,d.length>0?t.jsx(Se,{children:t.jsxs(ke,{children:[t.jsx(Tt,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(cd,{"aria-label":"Negocios destacados",children:d.map((c,h)=>t.jsx(Vc,{id:c.id,name:c.name,category:c.category,categoryId:c.categoryId,to:c.href,distanceKm:c.distanceKm,rating:c.rating,openNow:c.openNow,etaMin:c.etaMin,etaMax:c.etaMax,priority:h<2},c.id))})]})}):null,i?null:t.jsx(Se,{children:t.jsx(ke,{children:t.jsx(_a,{children:t.jsxs(ld,{children:[t.jsx(Ac,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Ae,tone:"brand"}),t.jsxs(ud,{children:[t.jsx(qr,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:Aa}),t.jsx(qr,{to:"/registro/fletero",label:"Sumate como Fletero",icon:or})]})]})})})})]})}const hd=m.lazy(()=>Z(()=>import("./StoresDirectoryScreen-CVceDDDF.js"),__vite__mapDeps([3,1,4])).then(e=>({default:e.StoresDirectoryScreen}))),gd=m.lazy(()=>Z(()=>import("./StoreProfileScreen-DXZWwrTn.js"),__vite__mapDeps([5,1,6,7,4])).then(e=>({default:e.StoreProfileScreen}))),fd=m.lazy(()=>Z(()=>import("./ProductDetailScreen-DWB7gRRs.js"),__vite__mapDeps([8,1,9])).then(e=>({default:e.ProductDetailScreen}))),yd=m.lazy(()=>Z(()=>import("./MyOrdersScreen-Do5K9mz_.js"),__vite__mapDeps([10,1,7,4])).then(e=>({default:e.MyOrdersScreen}))),bd=m.lazy(()=>Z(()=>import("./CartScreen-su3YT-bv.js"),__vite__mapDeps([11,1,6,12,7])).then(e=>({default:e.CartScreen}))),xd=m.lazy(()=>Z(()=>import("./ErrandScreen-CWQugQR5.js"),__vite__mapDeps([13,1,14,12])).then(e=>({default:e.ErrandScreen}))),wd=m.lazy(()=>Z(()=>import("./ErrandChatScreen-CK86ggQF.js"),__vite__mapDeps([15,1,16,14])).then(e=>({default:e.ErrandChatScreen}))),$d=m.lazy(()=>Z(()=>import("./FavoritesScreen-CSbI9D8x.js"),__vite__mapDeps([17,1])).then(e=>({default:e.FavoritesScreen}))),vd=m.lazy(()=>Z(()=>import("./NotificationsScreen-nHvtWdtQ.js"),__vite__mapDeps([18,1,19])).then(e=>({default:e.NotificationsScreen}))),kd=m.lazy(()=>Z(()=>import("./CustomerAccountScreen-D3j-azSm.js"),__vite__mapDeps([20,9,1,21,12])).then(e=>({default:e.CustomerAccountScreen}))),Sd=m.lazy(()=>Z(()=>import("./CommerceRegistrationScreen-B8rPBx1s.js"),__vite__mapDeps([22,23,1,16,21,12])).then(e=>({default:e.CommerceRegistrationScreen}))),Kr=m.lazy(()=>Z(()=>import("./DeliveryRegistrationScreen-iqSxCvzO.js"),__vite__mapDeps([24,23,1,16,12,21])).then(e=>({default:e.DeliveryRegistrationScreen}))),jd=m.lazy(()=>Z(()=>import("./CommercePanelScreen-B32dWY5T.js"),__vite__mapDeps([25,26,9,1,19])).then(e=>({default:e.CommercePanelScreen}))),Cd=m.lazy(()=>Z(()=>import("./ProductFormScreen-Dj9fK38N.js"),__vite__mapDeps([27,1,16])).then(e=>({default:e.ProductFormScreen}))),Ad=m.lazy(()=>Z(()=>import("./DeliveryPanelScreen-DNzsiO-t.js"),__vite__mapDeps([28,26,9,1])).then(e=>({default:e.DeliveryPanelScreen}))),zd=m.lazy(()=>Z(()=>import("./AdminPanelScreen-C8ILeebd.js"),__vite__mapDeps([29,26,9,1])).then(e=>({default:e.AdminPanelScreen})));function Pd(){return t.jsx(Ba,{children:t.jsx(ai,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsxs(Da,{children:[t.jsx(W,{path:"/",element:t.jsx(md,{})}),t.jsx(W,{path:"/comercios",element:t.jsx(hd,{})}),t.jsx(W,{path:"/comercios/:storeId",element:t.jsx(gd,{})}),t.jsx(W,{path:"/productos/:productId",element:t.jsx(fd,{})}),t.jsx(W,{path:"/pedidos",element:t.jsx(yd,{})}),t.jsx(W,{path:"/carrito",element:t.jsx(bd,{})}),t.jsx(W,{path:"/mandado",element:t.jsx(xd,{})}),t.jsx(W,{path:"/mandado/chat",element:t.jsx(wd,{})}),t.jsx(W,{path:"/favoritos",element:t.jsx($d,{})}),t.jsx(W,{path:"/notificaciones",element:t.jsx(vd,{})}),t.jsx(W,{path:"/registro/comercio",element:t.jsx(Sd,{})}),t.jsx(W,{path:"/trabaja-con-nosotros",element:t.jsx(Kr,{})}),t.jsx(W,{path:"/registro/fletero",element:t.jsx(Kr,{role:"fletero"})}),t.jsx(W,{path:"/registro/delivery",element:t.jsx(ur,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(W,{path:"/mi-cuenta",element:t.jsx(kd,{})}),t.jsx(W,{path:"/panel/comercio",element:t.jsx(jd,{})}),t.jsx(W,{path:"/panel/comercio/producto",element:t.jsx(Cd,{})}),t.jsx(W,{path:"/panel/repartidor",element:t.jsx(Ad,{})}),t.jsx(W,{path:"/panel/admin",element:t.jsx(zd,{})}),t.jsx(W,{path:"*",element:t.jsx(ur,{to:"/",replace:!0})})]})})})})}Za({immediate:!0});const Ia=document.getElementById("root");if(!Ia)throw new Error("No se encontró el nodo root");_t.createRoot(Ia).render(t.jsx(ze.StrictMode,{children:t.jsx(Pd,{})}));export{Xn as $,Zs as A,rl as B,sl as C,Se as D,dc as E,Id as F,Fd as G,Md as H,Td as I,Rd as J,Bt as K,_d as L,Us as M,_a as N,pr as O,il as P,$i as Q,Kn as R,pd as S,Dd as T,ol as U,Qc as V,Zc as W,Xc as X,al as Y,Ae as Z,Jn as _,ke as a,Le as a0,Ne as a1,Kd as a2,dl as a3,Pe as a4,ui as a5,$ as a6,Gi as a7,jt as a8,Wn as a9,xi as aA,Jd as aB,Qd as aC,yi as aD,el as aE,tl as aF,Vd as aa,Nd as ab,or as ac,Ca as ad,Ld as ae,Bd as af,Hd as ag,Ei as ah,ci as ai,tr as aj,Wd as ak,rt as al,ir as am,Aa as an,cl as ao,Od as ap,ba as aq,sd as ar,Un as as,Gd as at,nd as au,nl as av,Ud as aw,Zd as ax,Xd as ay,ki as az,za as b,qd as c,Tt as d,dd as e,ac as f,Vc as g,bi as h,a as i,t as j,cr as k,dr as l,Rt as m,lr as n,Ma as o,Yr as p,Yd as q,wa as r,Ra as s,di as t,vi as u,Qs as v,ec as w,lc as x,at as y,U as z};
