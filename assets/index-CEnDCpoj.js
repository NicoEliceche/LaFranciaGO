const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-DSSpbQ6P.js","assets/react-Clk3ySf9.js","assets/AddressMap-CIGW-MKW.css","assets/StoresDirectoryScreen-DDnO2RmY.js","assets/ScrollRail-C5HkSyGl.js","assets/StoreProfileScreen-CKgOhm7h.js","assets/minus-DET3v042.js","assets/clock-3-CkPZ94lo.js","assets/ProductDetailScreen-CuAQsJvu.js","assets/SettingsList-Dd8yIFYj.js","assets/MyOrdersScreen-D61-3lSq.js","assets/CartScreen-DLHd8IMW.js","assets/shield-check-DP3_L1Wp.js","assets/ErrandScreen-BVRFpjSk.js","assets/errandStore-CkHbx8OT.js","assets/ErrandChatScreen-DAXaQ7Gq.js","assets/mediaService-Be9g9s7c.js","assets/FavoritesScreen-CGsz1qOt.js","assets/NotificationsScreen-D7vmGT59.js","assets/badge-percent-CREyDmu6.js","assets/CustomerAccountScreen-CjyFltJG.js","assets/phone-nGAzFEKk.js","assets/CommerceRegistrationScreen-DXEAw_Pj.js","assets/formStyles-Ccm8YtUr.js","assets/DeliveryRegistrationScreen-DegcOaib.js","assets/CommercePanelScreen-CM9RqQzX.js","assets/MetricTile-B058XC-o.js","assets/ProductFormScreen-CmOoS5Gk.js","assets/DeliveryPanelScreen-Bb2MwVIF.js","assets/AdminPanelScreen-CVSA_FpV.js"])))=>i.map(i=>d[i]);
import{r as g,a as Ga,g as Ya,R as ze,L as be,N as Gt,u as qa,H as Ka,b as Va,c as U,d as mr}from"./react-Clk3ySf9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();var Jr={exports:{}},it={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=g,Wa=Symbol.for("react.element"),Xa=Symbol.for("react.fragment"),Za=Object.prototype.hasOwnProperty,Ja=Ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qa={key:!0,ref:!0,__self:!0,__source:!0};function Qr(e,r,a){var i,n={},c=null,s=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(s=r.ref);for(i in r)Za.call(r,i)&&!Qa.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:Wa,type:e,key:c,ref:s,props:n,_owner:Ja.current}}it.Fragment=Xa;it.jsx=Qr;it.jsxs=Qr;Jr.exports=it;var t=Jr.exports,It={},gr=Ga;It.createRoot=gr.createRoot,It.hydrateRoot=gr.hydrateRoot;const eo="modulepreload",to=function(e){return"/LaFranciaGO/"+e},hr={},X=function(r,a,i){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(a.map(m=>{if(m=to(m),m in hr)return;hr[m]=!0;const p=m.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const f=document.createElement("link");if(f.rel=p?"stylesheet":eo,p||(f.as="script"),f.crossOrigin="",f.href=m,u&&f.setAttribute("nonce",u),document.head.appendChild(f),p)return new Promise((j,F)=>{f.addEventListener("load",j),f.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return n.then(s=>{for(const u of s||[])u.status==="rejected"&&c(u.reason);return r().catch(c)})};function ro(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:n,onRegisteredSW:c,onRegisterError:s}=e;let u,m;const p=async(f=!0)=>{await m};async function y(){if("serviceWorker"in navigator){if(u=await X(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(f=>{s==null||s(f)}),!u)return;u.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),u.addEventListener("installed",f=>{f.isUpdate||i==null||i()}),u.register({immediate:r}).then(f=>{c?c("/LaFranciaGO/sw.js",f):n==null||n(f)}).catch(f=>{s==null||s(f)})}}return m=y(),p}var ea={exports:{}},H={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.transitional.element"),qt=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),pt=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),ao=Symbol.for("react.view_transition"),oo=Symbol.for("react.client.reference");function ge(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Yt:switch(e=e.type,e){case nt:case ct:case st:case ut:case mt:case ao:return e;default:switch(e=e&&e.$$typeof,e){case lt:case pt:case ht:case gt:return e;case dt:return e;default:return r}}case qt:return r}}}H.ContextConsumer=dt;H.ContextProvider=lt;H.Element=Yt;H.ForwardRef=pt;H.Fragment=nt;H.Lazy=ht;H.Memo=gt;H.Portal=qt;H.Profiler=ct;H.StrictMode=st;H.Suspense=ut;H.SuspenseList=mt;H.isContextConsumer=function(e){return ge(e)===dt};H.isContextProvider=function(e){return ge(e)===lt};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yt};H.isForwardRef=function(e){return ge(e)===pt};H.isFragment=function(e){return ge(e)===nt};H.isLazy=function(e){return ge(e)===ht};H.isMemo=function(e){return ge(e)===gt};H.isPortal=function(e){return ge(e)===qt};H.isProfiler=function(e){return ge(e)===ct};H.isStrictMode=function(e){return ge(e)===st};H.isSuspense=function(e){return ge(e)===ut};H.isSuspenseList=function(e){return ge(e)===mt};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nt||e===ct||e===st||e===ut||e===mt||typeof e=="object"&&e!==null&&(e.$$typeof===ht||e.$$typeof===gt||e.$$typeof===lt||e.$$typeof===dt||e.$$typeof===pt||e.$$typeof===oo||e.getModuleId!==void 0)};H.typeOf=ge;ea.exports=H;var ta=ea.exports;function io(e){function r(l,h,x,C,d){for(var I=0,b=0,Y=0,L=0,B,A,ee=0,pe=0,T,ne=T=B=0,N=0,te=0,Te=0,re=0,Be=x.length,Re=Be-1,fe,k="",K="",At="",zt="",xe;N<Be;){if(A=x.charCodeAt(N),N===Re&&b+L+Y+I!==0&&(b!==0&&(A=b===47?10:47),L=Y=I=0,Be++,Re++),b+L+Y+I===0){if(N===Re&&(0<te&&(k=k.replace(j,"")),0<k.trim().length)){switch(A){case 32:case 9:case 59:case 13:case 10:break;default:k+=x.charAt(N)}A=59}switch(A){case 123:for(k=k.trim(),B=k.charCodeAt(0),T=1,re=++N;N<Be;){switch(A=x.charCodeAt(N)){case 123:T++;break;case 125:T--;break;case 47:switch(A=x.charCodeAt(N+1)){case 42:case 47:e:{for(ne=N+1;ne<Re;++ne)switch(x.charCodeAt(ne)){case 47:if(A===42&&x.charCodeAt(ne-1)===42&&N+2!==ne){N=ne+1;break e}break;case 10:if(A===47){N=ne+1;break e}}N=ne}}break;case 91:A++;case 40:A++;case 34:case 39:for(;N++<Re&&x.charCodeAt(N)!==A;);}if(T===0)break;N++}switch(T=x.substring(re,N),B===0&&(B=(k=k.replace(f,"").trim()).charCodeAt(0)),B){case 64:switch(0<te&&(k=k.replace(j,"")),A=k.charCodeAt(1),A){case 100:case 109:case 115:case 45:te=h;break;default:te=se}if(T=r(h,te,T,A,d+1),re=T.length,0<de&&(te=a(se,k,Te),xe=u(3,T,te,h,ie,G,re,A,d,C),k=te.join(""),xe!==void 0&&(re=(T=xe.trim()).length)===0&&(A=0,T="")),0<re)switch(A){case 115:k=k.replace(V,s);case 100:case 109:case 45:T=k+"{"+T+"}";break;case 107:k=k.replace(P,"$1 $2"),T=k+"{"+T+"}",T=S===1||S===2&&c("@"+T,3)?"@-webkit-"+T+"@"+T:"@"+T;break;default:T=k+T,C===112&&(T=(K+=T,""))}else T="";break;default:T=r(h,a(h,k,Te),T,C,d+1)}At+=T,T=Te=te=ne=B=0,k="",A=x.charCodeAt(++N);break;case 125:case 59:if(k=(0<te?k.replace(j,""):k).trim(),1<(re=k.length))switch(ne===0&&(B=k.charCodeAt(0),B===45||96<B&&123>B)&&(re=(k=k.replace(" ",":")).length),0<de&&(xe=u(1,k,h,l,ie,G,K.length,C,d,C))!==void 0&&(re=(k=xe.trim()).length)===0&&(k="\0\0"),B=k.charCodeAt(0),A=k.charCodeAt(1),B){case 0:break;case 64:if(A===105||A===99){zt+=k+x.charAt(N);break}default:k.charCodeAt(re-1)!==58&&(K+=n(k,B,A,k.charCodeAt(2)))}Te=te=ne=B=0,k="",A=x.charCodeAt(++N)}}switch(A){case 13:case 10:b===47?b=0:1+B===0&&C!==107&&0<k.length&&(te=1,k+="\0"),0<de*he&&u(0,k,h,l,ie,G,K.length,C,d,C),G=1,ie++;break;case 59:case 125:if(b+L+Y+I===0){G++;break}default:switch(G++,fe=x.charAt(N),A){case 9:case 32:if(L+I+b===0)switch(ee){case 44:case 58:case 9:case 32:fe="";break;default:A!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:L+b+I===0&&(te=Te=1,fe="\f"+fe);break;case 108:if(L+b+I+w===0&&0<ne)switch(N-ne){case 2:ee===112&&x.charCodeAt(N-3)===58&&(w=ee);case 8:pe===111&&(w=pe)}break;case 58:L+b+I===0&&(ne=N);break;case 44:b+Y+L+I===0&&(te=1,fe+="\r");break;case 34:case 39:b===0&&(L=L===A?0:L===0?A:L);break;case 91:L+b+Y===0&&I++;break;case 93:L+b+Y===0&&I--;break;case 41:L+b+I===0&&Y--;break;case 40:if(L+b+I===0){if(B===0)switch(2*ee+3*pe){case 533:break;default:B=1}Y++}break;case 64:b+Y+L+I+ne+T===0&&(T=1);break;case 42:case 47:if(!(0<L+I+Y))switch(b){case 0:switch(2*A+3*x.charCodeAt(N+1)){case 235:b=47;break;case 220:re=N,b=42}break;case 42:A===47&&ee===42&&re+2!==N&&(x.charCodeAt(re+2)===33&&(K+=x.substring(re,N+1)),fe="",b=0)}}b===0&&(k+=fe)}pe=ee,ee=A,N++}if(re=K.length,0<re){if(te=h,0<de&&(xe=u(2,K,te,l,ie,G,re,C,d,C),xe!==void 0&&(K=xe).length===0))return zt+K+At;if(K=te.join(",")+"{"+K+"}",S*w!==0){switch(S!==2||c(K,2)||(w=0),w){case 111:K=K.replace(R,":-moz-$1")+K;break;case 112:K=K.replace(_,"::-webkit-input-$1")+K.replace(_,"::-moz-$1")+K.replace(_,":-ms-input-$1")+K}w=0}}return zt+K+At}function a(l,h,x){var C=h.trim().split(v);h=C;var d=C.length,I=l.length;switch(I){case 0:case 1:var b=0;for(l=I===0?"":l[0]+" ";b<d;++b)h[b]=i(l,h[b],x).trim();break;default:var Y=b=0;for(h=[];b<d;++b)for(var L=0;L<I;++L)h[Y++]=i(l[L]+" ",C[b],x).trim()}return h}function i(l,h,x){var C=h.charCodeAt(0);switch(33>C&&(C=(h=h.trim()).charCodeAt(0)),C){case 38:return h.replace(M,"$1"+l.trim());case 58:return l.trim()+h.replace(M,"$1"+l.trim());default:if(0<1*x&&0<h.indexOf("\f"))return h.replace(M,(l.charCodeAt(0)===58?"":"$1")+l.trim())}return l+h}function n(l,h,x,C){var d=l+";",I=2*h+3*x+4*C;if(I===944){l=d.indexOf(":",9)+1;var b=d.substring(l,d.length-1).trim();return b=d.substring(0,l).trim()+b+";",S===1||S===2&&c(b,1)?"-webkit-"+b+b:b}if(S===0||S===2&&!c(d,1))return d;switch(I){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(oe,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return b=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+d+"-ms-flex-pack"+b+d;case 1005:return E.test(d)?d.replace(F,":-webkit-")+d.replace(F,":-moz-")+d:d;case 1e3:switch(b=d.substring(13).trim(),h=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(h)){case 226:b=d.replace(O,"tb");break;case 232:b=d.replace(O,"tb-rl");break;case 220:b=d.replace(O,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+b+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(h=(d=l).length-10,b=(d.charCodeAt(h)===33?d.substring(0,h):d).substring(l.indexOf(":",7)+1).trim(),I=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:d=d.replace(b,"-webkit-"+b)+";"+d;break;case 207:case 102:d=d.replace(b,"-webkit-"+(102<I?"inline-":"")+"box")+";"+d.replace(b,"-webkit-"+b)+";"+d.replace(b,"-ms-"+b+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return b=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+b+"-ms-flex-"+b+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(J,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(J,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(le.test(l)===!0)return(b=l.substring(l.indexOf(":")+1)).charCodeAt(0)===115?n(l.replace("stretch","fill-available"),h,x,C).replace(":fill-available",":stretch"):d.replace(b,"-webkit-"+b)+d.replace(b,"-moz-"+b.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,x+C===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(z,"$1-webkit-$2")+d}return d}function c(l,h){var x=l.indexOf(h===1?":":"{"),C=l.substring(0,h!==3?x:10);return x=l.substring(x+1,l.length-1),ve(h!==2?C:C.replace(q,"$1"),x,h)}function s(l,h){var x=n(h,h.charCodeAt(0),h.charCodeAt(1),h.charCodeAt(2));return x!==h+";"?x.replace(ae," or ($1)").substring(4):"("+h+")"}function u(l,h,x,C,d,I,b,Y,L,B){for(var A=0,ee=h,pe;A<de;++A)switch(pe=ce[A].call(y,l,ee,x,C,d,I,b,Y,L,B)){case void 0:case!1:case!0:case null:break;default:ee=pe}if(ee!==h)return ee}function m(l){switch(l){case void 0:case null:de=ce.length=0;break;default:if(typeof l=="function")ce[de++]=l;else if(typeof l=="object")for(var h=0,x=l.length;h<x;++h)m(l[h]);else he=!!l|0}return m}function p(l){return l=l.prefix,l!==void 0&&(ve=null,l?typeof l!="function"?S=1:(S=2,ve=l):S=0),p}function y(l,h){var x=l;if(33>x.charCodeAt(0)&&(x=x.trim()),Q=x,x=[Q],0<de){var C=u(-1,h,x,x,ie,G,0,0,0,0);C!==void 0&&typeof C=="string"&&(h=C)}var d=r(se,x,h,0,0);return 0<de&&(C=u(-2,d,x,x,ie,G,d.length,0,0,0),C!==void 0&&(d=C)),Q="",w=0,G=ie=1,d}var f=/^\0+/g,j=/[\0\r\f]/g,F=/: */g,E=/zoo|gra/,z=/([,: ])(transform)/g,v=/,\r+?/g,M=/([\t\r\n ])*\f?&/g,P=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,R=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,V=/\(\s*(.*)\s*\)/g,ae=/([\s\S]*?);/g,J=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,le=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,G=1,ie=1,w=0,S=1,se=[],ce=[],de=0,ve=null,he=0,Q="";return y.use=m,y.set=p,e!==void 0&&p(e),y}var no={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function so(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var co=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fr=so(function(e){return co.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ra={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=typeof Symbol=="function"&&Symbol.for,Kt=Z?Symbol.for("react.element"):60103,Vt=Z?Symbol.for("react.portal"):60106,ft=Z?Symbol.for("react.fragment"):60107,yt=Z?Symbol.for("react.strict_mode"):60108,bt=Z?Symbol.for("react.profiler"):60114,xt=Z?Symbol.for("react.provider"):60109,wt=Z?Symbol.for("react.context"):60110,Ut=Z?Symbol.for("react.async_mode"):60111,$t=Z?Symbol.for("react.concurrent_mode"):60111,vt=Z?Symbol.for("react.forward_ref"):60112,kt=Z?Symbol.for("react.suspense"):60113,lo=Z?Symbol.for("react.suspense_list"):60120,St=Z?Symbol.for("react.memo"):60115,jt=Z?Symbol.for("react.lazy"):60116,po=Z?Symbol.for("react.block"):60121,uo=Z?Symbol.for("react.fundamental"):60117,mo=Z?Symbol.for("react.responder"):60118,go=Z?Symbol.for("react.scope"):60119;function ue(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Kt:switch(e=e.type,e){case Ut:case $t:case ft:case bt:case yt:case kt:return e;default:switch(e=e&&e.$$typeof,e){case wt:case vt:case jt:case St:case xt:return e;default:return r}}case Vt:return r}}}function aa(e){return ue(e)===$t}D.AsyncMode=Ut;D.ConcurrentMode=$t;D.ContextConsumer=wt;D.ContextProvider=xt;D.Element=Kt;D.ForwardRef=vt;D.Fragment=ft;D.Lazy=jt;D.Memo=St;D.Portal=Vt;D.Profiler=bt;D.StrictMode=yt;D.Suspense=kt;D.isAsyncMode=function(e){return aa(e)||ue(e)===Ut};D.isConcurrentMode=aa;D.isContextConsumer=function(e){return ue(e)===wt};D.isContextProvider=function(e){return ue(e)===xt};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kt};D.isForwardRef=function(e){return ue(e)===vt};D.isFragment=function(e){return ue(e)===ft};D.isLazy=function(e){return ue(e)===jt};D.isMemo=function(e){return ue(e)===St};D.isPortal=function(e){return ue(e)===Vt};D.isProfiler=function(e){return ue(e)===bt};D.isStrictMode=function(e){return ue(e)===yt};D.isSuspense=function(e){return ue(e)===kt};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ft||e===$t||e===bt||e===yt||e===kt||e===lo||typeof e=="object"&&e!==null&&(e.$$typeof===jt||e.$$typeof===St||e.$$typeof===xt||e.$$typeof===wt||e.$$typeof===vt||e.$$typeof===uo||e.$$typeof===mo||e.$$typeof===go||e.$$typeof===po)};D.typeOf=ue;ra.exports=D;var ho=ra.exports,Wt=ho,fo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},oa={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xt={};Xt[Wt.ForwardRef]=bo;Xt[Wt.Memo]=oa;function yr(e){return Wt.isMemo(e)?oa:Xt[e.$$typeof]||fo}var xo=Object.defineProperty,wo=Object.getOwnPropertyNames,br=Object.getOwnPropertySymbols,$o=Object.getOwnPropertyDescriptor,vo=Object.getPrototypeOf,xr=Object.prototype;function ia(e,r,a){if(typeof r!="string"){if(xr){var i=vo(r);i&&i!==xr&&ia(e,i,a)}var n=wo(r);br&&(n=n.concat(br(r)));for(var c=yr(e),s=yr(r),u=0;u<n.length;++u){var m=n[u];if(!yo[m]&&!(a&&a[m])&&!(s&&s[m])&&!(c&&c[m])){var p=$o(r,m);try{xo(e,m,p)}catch{}}}}return e}var ko=ia;const So=Ya(ko);var me={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var wr=function(e,r){for(var a=[e[0]],i=0,n=r.length;i<n;i+=1)a.push(r[i],e[i+1]);return a},Lt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ta.typeOf(e)},et=Object.freeze([]),$e=Object.freeze({});function Me(e){return typeof e=="function"}function $r(e){return e.displayName||e.name||"Component"}function Zt(e){return e&&typeof e.styledComponentId=="string"}var Fe=typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_ATTR||me.SC_ATTR)||"data-styled",Jt=typeof window<"u"&&"HTMLElement"in window,jo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&me.REACT_APP_SC_DISABLE_SPEEDY!==""?me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&me.REACT_APP_SC_DISABLE_SPEEDY:me.SC_DISABLE_SPEEDY!==void 0&&me.SC_DISABLE_SPEEDY!==""&&me.SC_DISABLE_SPEEDY!=="false"&&me.SC_DISABLE_SPEEDY)),Co={};function je(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var Ao=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,n=0;n<a;n++)i+=this.groupSizes[n];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var n=this.groupSizes,c=n.length,s=c;a>=s;)(s<<=1)<0&&je(16,""+a);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var u=c;u<s;u++)this.groupSizes[u]=0}for(var m=this.indexOfGroup(a+1),p=0,y=i.length;p<y;p++)this.tag.insertRule(m,i[p])&&(this.groupSizes[a]++,m++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],n=this.indexOfGroup(a),c=n+i;this.groupSizes[a]=0;for(var s=n;s<c;s++)this.tag.deleteRule(n)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var n=this.groupSizes[a],c=this.indexOfGroup(a),s=c+n,u=c;u<s;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),Qe=new Map,tt=new Map,_e=1,De=function(e){if(Qe.has(e))return Qe.get(e);for(;tt.has(_e);)_e++;var r=_e++;return Qe.set(e,r),tt.set(r,e),r},zo=function(e){return tt.get(e)},Po=function(e,r){r>=_e&&(_e=r+1),Qe.set(e,r),tt.set(r,e)},Eo="style["+Fe+'][data-styled-version="5.3.11"]',Mo=new RegExp("^"+Fe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Fo=function(e,r,a){for(var i,n=a.split(","),c=0,s=n.length;c<s;c++)(i=n[c])&&e.registerName(r,i)},To=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],n=0,c=a.length;n<c;n++){var s=a[n].trim();if(s){var u=s.match(Mo);if(u){var m=0|parseInt(u[1],10),p=u[2];m!==0&&(Po(p,m),Fo(e,p,u[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(s)}}},Ro=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},na=function(e){var r=document.head,a=e||r,i=document.createElement("style"),n=function(u){for(var m=u.childNodes,p=m.length;p>=0;p--){var y=m[p];if(y&&y.nodeType===1&&y.hasAttribute(Fe))return y}}(a),c=n!==void 0?n.nextSibling:null;i.setAttribute(Fe,"active"),i.setAttribute("data-styled-version","5.3.11");var s=Ro();return s&&i.setAttribute("nonce",s),a.insertBefore(i,c),i},_o=function(){function e(a){var i=this.element=na(a);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var c=document.styleSheets,s=0,u=c.length;s<u;s++){var m=c[s];if(m.ownerNode===n)return m}je(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Io=function(){function e(a){var i=this.element=na(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var n=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(n,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Lo=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),vr=Jt,No={isServer:!Jt,useCSSOMInjection:!jo},rt=function(){function e(a,i,n){a===void 0&&(a=$e),i===void 0&&(i={}),this.options=ye({},No,{},a),this.gs=i,this.names=new Map(n),this.server=!!a.isServer,!this.server&&Jt&&vr&&(vr=!1,function(c){for(var s=document.querySelectorAll(Eo),u=0,m=s.length;u<m;u++){var p=s[u];p&&p.getAttribute(Fe)!=="active"&&(To(c,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}e.registerId=function(a){return De(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,c=i.useCSSOMInjection,s=i.target,a=n?new Lo(s):c?new _o(s):new Io(s),new Ao(a)));var a,i,n,c,s},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(De(a),this.names.has(a))this.names.get(a).add(i);else{var n=new Set;n.add(i),this.names.set(a,n)}},r.insertRules=function(a,i,n){this.registerName(a,i),this.getTag().insertRules(De(a),n)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(De(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),n=i.length,c="",s=0;s<n;s++){var u=zo(s);if(u!==void 0){var m=a.names.get(u),p=i.getGroup(s);if(m&&p&&m.size){var y=Fe+".g"+s+'[id="'+u+'"]',f="";m!==void 0&&m.forEach(function(j){j.length>0&&(f+=j+",")}),c+=""+p+y+'{content:"'+f+`"}/*!sc*/
`}}}return c}(this)},e}(),Oo=/(a)(d)/gi,kr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nt(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=kr(r%52)+a;return(kr(r%52)+a).replace(Oo,"$1-$2")}var Ee=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},sa=function(e){return Ee(5381,e)};function ca(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Me(a)&&!Zt(a))return!1}return!0}var Bo=sa("5.3.11"),Do=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ca(r),this.componentId=a,this.baseHash=Ee(Bo,a),this.baseStyle=i,rt.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var n=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))c.push(this.staticRulesId);else{var s=Ce(this.rules,r,a,i).join(""),u=Nt(Ee(this.baseHash,s)>>>0);if(!a.hasNameForId(n,u)){var m=i(s,"."+u,void 0,n);a.insertRules(n,u,m)}c.push(u),this.staticRulesId=u}else{for(var p=this.rules.length,y=Ee(this.baseHash,i.hash),f="",j=0;j<p;j++){var F=this.rules[j];if(typeof F=="string")f+=F;else if(F){var E=Ce(F,r,a,i),z=Array.isArray(E)?E.join(""):E;y=Ee(y,z+j),f+=z}}if(f){var v=Nt(y>>>0);if(!a.hasNameForId(n,v)){var M=i(f,"."+v,void 0,n);a.insertRules(n,v,M)}c.push(v)}}return c.join(" ")},e}(),Ho=/^\s*\/\/.*$/gm,Go=[":","[",".","#"];function Yo(e){var r,a,i,n,c=$e,s=c.options,u=s===void 0?$e:s,m=c.plugins,p=m===void 0?et:m,y=new io(u),f=[],j=function(z){function v(M){if(M)try{z(M+"}")}catch{}}return function(M,P,_,R,O,V,ae,J,q,le){switch(M){case 1:if(q===0&&P.charCodeAt(0)===64)return z(P+";"),"";break;case 2:if(J===0)return P+"/*|*/";break;case 3:switch(J){case 102:case 112:return z(_[0]+P),"";default:return P+(le===0?"/*|*/":"")}case-2:P.split("/*|*/}").forEach(v)}}}(function(z){f.push(z)}),F=function(z,v,M){return v===0&&Go.indexOf(M[a.length])!==-1||M.match(n)?z:"."+r};function E(z,v,M,P){P===void 0&&(P="&");var _=z.replace(Ho,""),R=v&&M?M+" "+v+" { "+_+" }":_;return r=P,a=v,i=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),y(M||!v?"":v,R)}return y.use([].concat(p,[function(z,v,M){z===2&&M.length&&M[0].lastIndexOf(a)>0&&(M[0]=M[0].replace(i,F))},j,function(z){if(z===-2){var v=f;return f=[],v}}])),E.hash=p.length?p.reduce(function(z,v){return v.name||je(15),Ee(z,v.name)},5381).toString():"",E}var da=ze.createContext();da.Consumer;var la=ze.createContext(),qo=(la.Consumer,new rt),Ot=Yo();function pa(){return g.useContext(da)||qo}function ua(){return g.useContext(la)||Ot}var ma=function(){function e(r,a){var i=this;this.inject=function(n,c){c===void 0&&(c=Ot);var s=i.name+c.hash;n.hasNameForId(i.id,s)||n.insertRules(i.id,s,c(i.rules,s,"@keyframes"))},this.toString=function(){return je(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=Ot),this.name+r.hash},e}(),Ko=/([A-Z])/,Vo=/([A-Z])/g,Uo=/^ms-/,Wo=function(e){return"-"+e.toLowerCase()};function Sr(e){return Ko.test(e)?e.replace(Vo,Wo).replace(Uo,"-ms-"):e}var jr=function(e){return e==null||e===!1||e===""};function Ce(e,r,a,i){if(Array.isArray(e)){for(var n,c=[],s=0,u=e.length;s<u;s+=1)(n=Ce(e[s],r,a,i))!==""&&(Array.isArray(n)?c.push.apply(c,n):c.push(n));return c}if(jr(e))return"";if(Zt(e))return"."+e.styledComponentId;if(Me(e)){if(typeof(p=e)!="function"||p.prototype&&p.prototype.isReactComponent||!r)return e;var m=e(r);return Ce(m,r,a,i)}var p;return e instanceof ma?a?(e.inject(a,i),e.getName(i)):e:Lt(e)?function y(f,j){var F,E,z=[];for(var v in f)f.hasOwnProperty(v)&&!jr(f[v])&&(Array.isArray(f[v])&&f[v].isCss||Me(f[v])?z.push(Sr(v)+":",f[v],";"):Lt(f[v])?z.push.apply(z,y(f[v],v)):z.push(Sr(v)+": "+(F=v,(E=f[v])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||F in no||F.startsWith("--")?String(E).trim():E+"px")+";"));return j?[j+" {"].concat(z,["}"]):z}(e):e.toString()}var Cr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return Me(e)||Lt(e)?Cr(Ce(wr(et,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:Cr(Ce(wr(e,a)))}var ga=function(e,r,a){return a===void 0&&(a=$e),e.theme!==a.theme&&e.theme||r||a.theme},Xo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zo=/(^-|-$)/g;function Pt(e){return e.replace(Xo,"-").replace(Zo,"")}var Qt=function(e){return Nt(sa(e)>>>0)};function He(e){return typeof e=="string"&&!0}var Bt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Jo=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Qo(e,r,a){var i=e[a];Bt(r)&&Bt(i)?ha(i,r):e[a]=r}function ha(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var n=0,c=a;n<c.length;n++){var s=c[n];if(Bt(s))for(var u in s)Jo(u)&&Qo(e,s[u],u)}return e}var Ie=ze.createContext();Ie.Consumer;function ei(e){var r=g.useContext(Ie),a=g.useMemo(function(){return function(i,n){if(!i)return je(14);if(Me(i)){var c=i(n);return c}return Array.isArray(i)||typeof i!="object"?je(8):n?ye({},n,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?ze.createElement(Ie.Provider,{value:a},e.children):null}var Et={};function fa(e,r,a){var i=Zt(e),n=!He(e),c=r.attrs,s=c===void 0?et:c,u=r.componentId,m=u===void 0?function(P,_){var R=typeof P!="string"?"sc":Pt(P);Et[R]=(Et[R]||0)+1;var O=R+"-"+Qt("5.3.11"+R+Et[R]);return _?_+"-"+O:O}(r.displayName,r.parentComponentId):u,p=r.displayName,y=p===void 0?function(P){return He(P)?"styled."+P:"Styled("+$r(P)+")"}(e):p,f=r.displayName&&r.componentId?Pt(r.displayName)+"-"+r.componentId:r.componentId||m,j=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,F=r.shouldForwardProp;i&&e.shouldForwardProp&&(F=r.shouldForwardProp?function(P,_,R){return e.shouldForwardProp(P,_,R)&&r.shouldForwardProp(P,_,R)}:e.shouldForwardProp);var E,z=new Do(a,f,i?e.componentStyle:void 0),v=z.isStatic&&s.length===0,M=function(P,_){return function(R,O,V,ae){var J=R.attrs,q=R.componentStyle,le=R.defaultProps,oe=R.foldedComponentIds,G=R.shouldForwardProp,ie=R.styledComponentId,w=R.target,S=function(C,d,I){C===void 0&&(C=$e);var b=ye({},d,{theme:C}),Y={};return I.forEach(function(L){var B,A,ee,pe=L;for(B in Me(pe)&&(pe=pe(b)),pe)b[B]=Y[B]=B==="className"?(A=Y[B],ee=pe[B],A&&ee?A+" "+ee:A||ee):pe[B]}),[b,Y]}(ga(O,g.useContext(Ie),le)||$e,O,J),se=S[0],ce=S[1],de=function(C,d,I,b){var Y=pa(),L=ua(),B=d?C.generateAndInjectStyles($e,Y,L):C.generateAndInjectStyles(I,Y,L);return B}(q,ae,se),ve=V,he=ce.$as||O.$as||ce.as||O.as||w,Q=He(he),l=ce!==O?ye({},O,{},ce):O,h={};for(var x in l)x[0]!=="$"&&x!=="as"&&(x==="forwardedAs"?h.as=l[x]:(G?G(x,fr,he):!Q||fr(x))&&(h[x]=l[x]));return O.style&&ce.style!==O.style&&(h.style=ye({},O.style,{},ce.style)),h.className=Array.prototype.concat(oe,ie,de!==ie?de:null,O.className,ce.className).filter(Boolean).join(" "),h.ref=ve,g.createElement(he,h)}(E,P,_,v)};return M.displayName=y,(E=ze.forwardRef(M)).attrs=j,E.componentStyle=z,E.displayName=y,E.shouldForwardProp=F,E.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):et,E.styledComponentId=f,E.target=i?e.target:e,E.withComponent=function(P){var _=r.componentId,R=function(V,ae){if(V==null)return{};var J,q,le={},oe=Object.keys(V);for(q=0;q<oe.length;q++)J=oe[q],ae.indexOf(J)>=0||(le[J]=V[J]);return le}(r,["componentId"]),O=_&&_+"-"+(He(P)?P:Pt($r(P)));return fa(P,ye({},R,{attrs:j,componentId:O}),a)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=i?ha({},e.defaultProps,P):P}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),n&&So(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var o=function(e){return function r(a,i,n){if(n===void 0&&(n=$e),!ta.isValidElementType(i))return je(1,String(i));var c=function(){return a(i,n,W.apply(void 0,arguments))};return c.withConfig=function(s){return r(a,i,ye({},n,{},s))},c.attrs=function(s){return r(a,i,ye({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},c}(fa,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var ti=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=ca(a),rt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,n,c){var s=c(Ce(this.rules,i,n,c).join(""),""),u=this.componentId+a;n.insertRules(u,u,s)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,n,c){a>2&&rt.registerId(this.componentId+a),this.removeStyles(a,n),this.createStyles(a,i,n,c)},e}();function ri(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=W.apply(void 0,[e].concat(a)),c="sc-global-"+Qt(JSON.stringify(n)),s=new ti(n,c);function u(p){var y=pa(),f=ua(),j=g.useContext(Ie),F=g.useRef(y.allocateGSInstance(c)).current;return y.server&&m(F,p,y,j,f),g.useLayoutEffect(function(){if(!y.server)return m(F,p,y,j,f),function(){return s.removeStyles(F,y)}},[F,p,y,j,f]),null}function m(p,y,f,j,F){if(s.isStatic)s.renderStyles(p,Co,f,F);else{var E=ye({},y,{theme:ga(y,j,u.defaultProps)});s.renderStyles(p,E,f,F)}}return ze.memo(u)}function Ct(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=W.apply(void 0,[e].concat(a)).join(""),c=Qt(n);return new ma(c,n)}const ai=ri`
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
`,we={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},oi=we.shadow,ii={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)"},ni={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},si=e=>({mode:e,color:e==="dark"?ii:we.color,typography:we.typography,spacing:we.spacing,radius:we.radius,shadow:e==="dark"?ni:oi,layout:we.layout,breakpoints:we.breakpoints,zIndex:we.zIndex}),ya="lafranciago-theme-mode",ba=g.createContext(null),ci=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(ya);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function di({children:e}){const[r,a]=g.useState(ci),i=g.useRef(!1);g.useEffect(()=>{if(window.localStorage.setItem(ya,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const m=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(m),delete document.documentElement.dataset.themeTransition}},[r]);const n=g.useCallback(()=>{a(m=>m==="light"?"dark":"light")},[]),c=g.useCallback(m=>{a(m)},[]),s=g.useMemo(()=>si(r),[r]),u=g.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:n,setMode:c}),[r,c,n]);return t.jsx(ba.Provider,{value:u,children:t.jsxs(ei,{theme:s,children:[t.jsx(ai,{}),e]})})}function li(){const e=g.useContext(ba);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$=(e,r)=>{const a=g.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:u="",children:m,...p},y)=>g.createElement("svg",{ref:y,...pi,width:n,height:n,stroke:i,strokeWidth:s?Number(c)*24/Number(n):c,className:["lucide",`lucide-${ui(e)}`,u].join(" "),...p},[...r.map(([f,j])=>g.createElement(f,j)),...Array.isArray(m)?m:[m]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=$("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=$("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=$("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=$("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=$("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=$("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=$("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=$("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=$("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=$("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=$("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=$("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=$("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=$("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=$("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=$("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=$("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=$("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=$("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=$("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=$("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=$("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=$("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=$("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=$("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=$("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=$("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=$("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=$("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=$("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=$("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=$("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=$("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ma({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const Ei="https://photon.komoot.io/api/",Mi="https://nominatim.openstreetmap.org/reverse",Ht={lat:-31.4063691,lon:-62.6332043},Mt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Fi=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Ti=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function Ri(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(Ht.lat),lon:String(Ht.lon)});try{const n=await fetch(`${Ei}?${i.toString()}`,{signal:r});return n.ok?((await n.json()).features??[]).map((s,u)=>{var f;const m=s.properties??{},[p,y]=((f=s.geometry)==null?void 0:f.coordinates)??[];return typeof y!="number"||typeof p!="number"?null:{id:`${m.type??"geo"}-${u}-${y}-${p}`,label:Fi(m),context:Ti(m),lat:y,lon:p}}).filter(s=>s!==null).sort((s,u)=>{const m=Mt(a),p=Mt(s.label).startsWith(m),y=Mt(u.label).startsWith(m);return p!==y?p?-1:1:0}).slice(0,6):[]}catch{return[]}}async function _i(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const n=await fetch(`${Mi}?${i.toString()}`,{signal:a});if(!n.ok)return null;const s=(await n.json()).address??{};return[s.road,s.house_number].filter(Boolean).join(" ")||s.neighbourhood||s.city||null}catch{return null}}const Ii=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Li=Ct`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ni=Ct`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Oi=o.div`
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
  animation: ${Li} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Bi=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Ni} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Di=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Hi=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,Gi=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Yi=o.input`
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
`,qi=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,Ki=o.button`
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
`,Vi=o.button`
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
`;function Ui({open:e,address:r,onCancel:a,onSave:i}){const[n,c]=g.useState("");if(g.useEffect(()=>{e&&c("")},[e]),g.useEffect(()=>{if(!e)return;const m=p=>{p.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,e]),!e)return null;const s=n.trim(),u=m=>{m.preventDefault(),s&&i(s)};return t.jsx(Oi,{onClick:m=>{m.stopPropagation(),a()},role:"presentation",children:t.jsxs(Bi,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:m=>m.stopPropagation(),children:[t.jsx(Di,{children:"Nombre de la dirección"}),r?t.jsx(Hi,{children:r}):null,t.jsx(Gi,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(Yi,{id:"address-name",value:n,onChange:m=>c(m.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(qi,{children:[t.jsx(Ki,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(Vi,{type:"submit",disabled:!s,children:"Guardar"})]})]})})}const Pe=W`
  ${({theme:e})=>e.mode==="dark"&&W`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,Wi=W`
  ${({theme:e})=>e.mode==="dark"&&W`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;W`
  ${({theme:e})=>e.mode==="dark"&&W`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const Xi=o.div`
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
`,Zi=o.div`
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
`,Ji=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,Qi=o.span`
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
`,en=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,tn=o.button`
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
`,rn=o.div`
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
`,an=o.div`
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
`,on=o.input`
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
`,nn=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,sn=o.button`
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
`,cn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,dn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,ln=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,pn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,un=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,mn=o.button`
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
`,gn=o.button`
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
`,hn=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,fn=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,yn=o.button`
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
`,bn=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,xn=o.button`
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
`,wn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$n=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,vn=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,kn=g.lazy(()=>X(()=>import("./AddressMap-DSSpbQ6P.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.AddressMap}))),Sn=260,jn=350;function Cn({open:e,currentId:r,onClose:a,onSelect:i}){const[n,c]=g.useState(!1),[s,u]=g.useState(!1),[m,p]=g.useState("list"),[y,f]=g.useState(""),[j,F]=g.useState([]),[E,z]=g.useState(!1),[v,M]=g.useState(null),[P,_]=g.useState([]),[R,O]=g.useState(!1),V=g.useRef(!1);g.useEffect(()=>{if(e){c(!0);const S=window.requestAnimationFrame(()=>u(!0));return()=>window.cancelAnimationFrame(S)}if(!n)return;u(!1);const w=window.setTimeout(()=>{c(!1),p("list"),f(""),F([]),M(null),O(!1)},Sn);return()=>window.clearTimeout(w)},[n,e]),g.useEffect(()=>{if(!e)return;const w=S=>{if(S.key==="Escape"&&!R){if(m==="new"){p("list");return}a()}};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[R,a,e,m]),g.useEffect(()=>{if(m!=="new")return;if(V.current){V.current=!1;return}const w=y.trim();if(w.length<2){F([]),z(!1);return}const S=new AbortController;z(!0);const se=window.setTimeout(()=>{Ri(w,S.signal).then(ce=>{F(ce),z(!1)}).catch(()=>z(!1))},jn);return()=>{window.clearTimeout(se),S.abort()}},[y,m]);const ae=g.useMemo(()=>[...Ii,...P],[P]),J=w=>{V.current=!0,f(w.label),F([]),M({lat:w.lat,lon:w.lon})},q=(w,S)=>{M({lat:w,lon:S}),_i(w,S).then(se=>{se&&(V.current=!0,f(se),F([]))})},le=w=>{const S={id:`custom-${Date.now()}`,label:w,address:y.trim(),primary:!1};_(se=>[...se,S]),O(!1),i(S.id,S.address),a()};if(!n)return null;const oe=m==="new",G=v??Ht,ie=v!==null&&y.trim().length>=3;return t.jsxs(Xi,{"data-visible":s,onClick:a,role:"presentation",children:[t.jsxs(Zi,{"data-visible":s,"data-full":oe,role:"dialog","aria-modal":"true","aria-label":oe?"Agregar una dirección nueva":"Dirección de entrega",onClick:w=>w.stopPropagation(),children:[t.jsxs(Ji,{children:[t.jsx(Qi,{"aria-hidden":"true"}),oe?t.jsx(gn,{type:"button",onClick:()=>p("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(mi,{size:18,"aria-hidden":"true"})}):null,t.jsx(en,{children:oe?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(tn,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(Ea,{size:18,"aria-hidden":"true"})})]}),t.jsx(rn,{"data-full":oe,children:oe?t.jsxs(t.Fragment,{children:[t.jsxs(an,{children:[t.jsx(Dt,{size:18,"aria-hidden":"true"}),t.jsx(on,{value:y,onChange:w=>f(w.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),j.length>0?t.jsx(bn,{"aria-label":"Sugerencias de direcciones",children:j.map(w=>t.jsxs(xn,{type:"button",onClick:()=>J(w),children:[t.jsx(ot,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(wn,{children:w.label}),w.context?t.jsx($n,{children:w.context}):null]})]},w.id))}):null,j.length===0&&E?t.jsx(vn,{children:"Buscando…"}):null,t.jsx(hn,{children:t.jsx(g.Suspense,{fallback:null,children:t.jsx(kn,{lat:G.lat,lon:G.lon,onPick:q})})}),t.jsx(fn,{children:v?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(yn,{type:"button",onClick:()=>O(!0),disabled:!ie,children:[t.jsx(ot,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(nn,{children:"Tus direcciones guardadas"}),ae.map(w=>t.jsxs(sn,{type:"button","data-current":w.id===r,onClick:()=>{i(w.id,w.address),a()},children:[t.jsx(cn,{children:t.jsx(ar,{size:18,"aria-hidden":"true"})}),t.jsxs(dn,{children:[t.jsx(ln,{children:w.label}),t.jsx(pn,{children:w.address})]}),w.id===r?t.jsx(un,{"aria-label":"Dirección actual",children:t.jsx(hi,{size:16,"aria-hidden":"true"})}):null]},w.id)),t.jsxs(mn,{type:"button",onClick:()=>p("new"),children:[t.jsx(Sa,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(Ui,{open:R,address:y.trim(),onCancel:()=>O(!1),onSave:le})]})}const An=o.form`
  width: 100%;
`,zn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Pn=o.div`
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
`,En=o.input`
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
`,Mn=o.button`
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
`,Fa=g.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:n,id:c="marketplace-search"},s){const u=m=>{m.preventDefault()};return t.jsxs(An,{onSubmit:u,role:"search",children:[t.jsx(zn,{htmlFor:c,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(Pn,{children:[t.jsx(Dt,{size:18,"aria-hidden":"true"}),t.jsx(En,{id:c,ref:s,value:r,onChange:m=>a(m.target.value),placeholder:i,type:"search"}),t.jsx(Mn,{type:"submit","aria-label":"Buscar",children:t.jsx(Dt,{size:16,"aria-hidden":"true"})})]})]})}),Fn=Ct`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,Tn=Ct`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,Rn=o.button`
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
`,_n=o.span`
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
  animation: ${Fn} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,In=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Ln=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Nn=o.span`
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
`,On=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bn=o.span`
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
`,Dn=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${Tn} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,Hn=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,Gn=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,Yn=o.span`
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
`;function Pr({isDarkMode:e,onToggle:r}){return t.jsxs(Rn,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(_n,{"data-dark":e,"aria-hidden":"true",children:t.jsx($i,{size:14,"aria-hidden":"true"})}),t.jsxs(In,{children:[t.jsxs(Ln,{children:["Modo",t.jsx(Nn,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(On,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(Bn,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(Dn,{}),t.jsx(Hn,{"data-dark":e}),t.jsxs(Gn,{children:[t.jsx(zr,{size:12,"aria-hidden":"true"}),t.jsx(Ar,{size:12,"aria-hidden":"true"})]}),t.jsx(Yn,{"data-dark":e,children:e?t.jsx(Ar,{size:12,"aria-hidden":"true"}):t.jsx(zr,{size:12,"aria-hidden":"true"})})]})]})}const qn=o.div`
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
`,Kn=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Vn=o.div`
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
`;o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`;o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;const Un=o.button`
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
`;o.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;o(be)`
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
`;o.div`
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
`;o.span`
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
`;o.div`
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
`;const Er=o.span`
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
`,Ft=o.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.85))
    drop-shadow(0 1px 3px rgba(5, 8, 22, 0.35));
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;const Mr=o.span`
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
`,Fr=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Wn=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: center;
  white-space: nowrap;
`;o.div`
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
`;const Xn=o(Wn)`
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  letter-spacing: -0.01em;
  white-space: pre-line;
`;o.span`
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
`;o.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`;o(be)`
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
`;const Ud=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,Wd=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Xd=o.span`
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
`,Zd=o.div`
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
`,Jd=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,sr=W`
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
`;o.button`
  ${sr};
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
`;o.div`
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
`;const Qd=o.button`
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
`,Zn=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Se=o.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,ke=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Jn=o.div`
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
`,el=o.span`
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
`,tl=o.h1`
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
`,rl=o.p`
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
`,cr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(cr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(cr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(cr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const Qn=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,es=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,al=o.h2`
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
`,ol=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,ts=o.span`
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
`;o(ts)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const rs=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,il=o(rs)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const as=o(be)`
  ${sr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,os=o(as)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,nl=o.button`
  ${sr};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`;o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);
  }
`;o.div`
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
`;o(Qn)`
  scroll-snap-align: start;
`;o.nav`
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
`;o(Gt)`
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
`;const is=o.nav`
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
`,ns=o.ul`
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
`,ss=o(Gt)`
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

    ${({theme:e})=>e.mode==="dark"&&W`
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
`,cs=o.span`
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
`;o.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;o.section`
  display: block;
`;o.span`
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
`;const ds=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&W`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,ls=o.button`
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
`,ps=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,us=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,ms=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Ta=W`
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
`,gs=o.button`
  ${Ta};
`,Tr=o(be)`
  ${Ta};
`,hs=o.span`
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
`,fs=o.div`
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
`;o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.875rem;
  padding: 0 0.35rem 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;o.input`
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
`;o.button`
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
`;const ys=o.div`
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
`,bs=o.div`
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
`,xs=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,ws=o.span`
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
`,$s=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,vs=o.span`
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
`,ks=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,Ss=W`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,js=W`
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
`,Ra=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,Rr=o.div`
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
`,_r=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,Cs=o.div`
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
`,Ye=o(Gt)`
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
`,qe=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,Ke=o.span`
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
`,Ve=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Ue=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,We=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,Xe=o.nav`
  display: grid;
  gap: 0.25rem;
`,Ze=o.section`
  display: block;
`,Je=o.span`
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
`,Ir=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Lr=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Ss};
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
`,As=o.button`
  ${js};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${Wi};
  ${Pe};
`,Nr=o.div`
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
`,zs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ps=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,Es=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,Ms=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,Or=o.button`
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
`,Fs=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ts=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,Rs=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_s=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Is=o.button`
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
`,Ls=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Ns=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Os=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Bs=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Ds=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Gs=o.article`
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
`,Ys=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,qs=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Ks=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Vs=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Us=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ws=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,Tt="/LaFranciaGO/favicon.png",Xs="Av. San Martín 123",Br=3,Dr=420,Zs=260,Hr=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:ar,end:!0},{to:"/comercios",title:"Categorías",subtitle:"Navegá por rubros",icon:va},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Le},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:rr},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:nr}],Gr=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Ae},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:Ma},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:ir},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:at}],Js=o.aside`
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
`,Qs=o(Ra)`
  height: 100%;
`,Yr=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Ae,items:[{icon:at,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Le,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Le,items:[{icon:ot,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Ae,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:ot,items:[{icon:rr,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:at,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],ec=[{to:"/",label:"Inicio",icon:ar},{to:"/comercios",label:"Categorías",icon:va},{to:"/pedidos",label:"Mis pedidos",icon:Le},{to:"/favoritos",label:"Favoritos",icon:rr},{to:"/mi-cuenta",label:"Cuenta",icon:nr}];function tc({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:n,toggleMode:c}=li(),s=qa(),u=typeof r=="string"&&typeof a=="function",m=g.useRef(null),p=g.useRef(null),y=g.useRef(null),f=g.useRef(null),j=g.useRef(null),[F,E]=g.useState(!1),[z,v]=g.useState({id:"home",label:Xs}),[M,P]=g.useState(!1),[_,R]=g.useState(!1),[O,V]=g.useState("opening"),[ae,J]=g.useState(!1),[q,le]=g.useState(!1),[oe,G]=g.useState("opening"),[ie,w]=g.useState(null),S=g.useCallback(()=>{P(!1),J(!1),w(null)},[]),se=g.useCallback(()=>{S(),P(!0)},[S]),ce=g.useCallback(()=>{if(M||_){S();return}se()},[S,_,M,se]),de=g.useCallback(()=>{S(),J(!0)},[S]),ve=g.useCallback(()=>{if(ae||q){S();return}de()},[S,q,ae,de]);g.useEffect(()=>{const l=document.body.style.overflow;return(M||_||ae||q)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=l}},[_,M,q,ae]),g.useLayoutEffect(()=>{const l=m.current;if(!l)return;const h=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${l.offsetHeight}px`)};h();const x=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return x==null||x.observe(l),window.addEventListener("resize",h),()=>{x==null||x.disconnect(),window.removeEventListener("resize",h),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),g.useEffect(()=>{p.current!==null&&(window.cancelAnimationFrame(p.current),p.current=null),y.current!==null&&(window.clearTimeout(y.current),y.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(M){if(R(!0),l){V("open");return}V("opening"),p.current=window.requestAnimationFrame(()=>{V("open"),p.current=null});return}if(_){if(l){R(!1),V("opening");return}V("closing"),y.current=window.setTimeout(()=>{R(!1),V("opening"),y.current=null},Dr)}},[_,M]),g.useEffect(()=>()=>{p.current!==null&&window.cancelAnimationFrame(p.current),y.current!==null&&window.clearTimeout(y.current),f.current!==null&&window.cancelAnimationFrame(f.current),j.current!==null&&window.clearTimeout(j.current)},[]),g.useEffect(()=>{f.current!==null&&(window.cancelAnimationFrame(f.current),f.current=null),j.current!==null&&(window.clearTimeout(j.current),j.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(ae){if(le(!0),l){G("open");return}G("opening"),f.current=window.requestAnimationFrame(()=>{G("open"),f.current=null});return}if(q){if(l){le(!1),G("opening");return}G("closing"),j.current=window.setTimeout(()=>{le(!1),G("opening"),j.current=null},Zs)}},[q,ae]);const he=g.useCallback((l,h)=>{l.preventDefault(),S(),window.setTimeout(()=>{s(h)},Dr)},[S,s]),Q=g.useMemo(()=>Yr.find(l=>l.id===ie)??null,[ie]);return t.jsxs(qn,{children:[t.jsx(Kn,{ref:m,children:t.jsx(ds,{children:t.jsx(Vn,{children:t.jsxs(ys,{children:[t.jsxs(bs,{children:[t.jsx(Un,{type:"button",onClick:ce,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":M||_,children:t.jsx(wi,{size:20,"aria-hidden":"true"})}),t.jsxs(xs,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(vs,{children:t.jsx(Ft,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsxs(ws,{children:["LaFrancia",t.jsx($s,{children:"GO"})]})]})]}),u?t.jsx(ks,{children:t.jsx(Fa,{value:r,onChange:a})}):null,t.jsxs(fs,{"aria-label":"Acciones rápidas",children:[t.jsxs(ls,{type:"button","aria-label":`Entregar en ${z.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":F,onClick:()=>E(!0),children:[t.jsxs(ms,{children:[t.jsx(us,{children:"Entregar en"}),t.jsx(ps,{children:z.label})]}),t.jsx(yi,{size:15,"aria-hidden":"true"})]}),t.jsxs(gs,{type:"button",onClick:ve,"aria-label":`Abrir notificaciones, ${Br} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":ae||q,children:[t.jsx(at,{size:18,"aria-hidden":"true"}),t.jsx(hs,{children:Br})]}),t.jsx(Tr,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(Ai,{size:18,"aria-hidden":"true"})}),t.jsx(Tr,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:t.jsx(nr,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(Js,{"aria-label":"Navegación principal",children:t.jsxs(Qs,{children:[t.jsxs(Rr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Er,{children:t.jsx(Ft,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsxs(_r,{children:[t.jsxs(Mr,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Fr,{children:"GO"})]}),t.jsx(Xn,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(Ze,{children:[t.jsx(Je,{children:"NAVEGACIÓN"}),t.jsx(Xe,{"aria-label":"Navegación principal",children:Hr.map(l=>{const h=l.icon;return t.jsxs(Ye,{to:l.to,end:l.end,onClick:x=>he(x,l.to),children:[t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(h,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:l.title}),t.jsx(Ve,{children:l.subtitle})]}),t.jsx(qe,{"aria-hidden":"true",children:t.jsx(Ge,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(Ze,{children:[t.jsx(Je,{children:"ACCIONES"}),t.jsx(Xe,{"aria-label":"Acciones rápidas",children:Gr.map(l=>{const h=l.icon;return t.jsxs(Ye,{to:l.to,onClick:x=>he(x,l.to),children:[t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(h,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:l.title}),t.jsx(Ve,{children:l.subtitle})]}),t.jsx(qe,{"aria-hidden":"true",children:t.jsx(Ge,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(Ir,{children:t.jsx(Pr,{isDarkMode:n,onToggle:c})})]})}),t.jsx(Zn,{children:e}),t.jsx(is,{"aria-label":"Navegación móvil",children:t.jsx(ns,{children:ec.map(l=>{const h=l.icon;return t.jsx("li",{children:t.jsxs(ss,{to:l.to,"data-primary":l.to==="/pedidos",children:[t.jsx(cs,{children:t.jsx(h,{size:l.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:l.label})]})},l.to)})})}),_&&t.jsx(Nr,{"data-drawer":"true","data-state":O,role:"presentation",onClick:S,children:t.jsxs(Lr,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":O,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:l=>l.stopPropagation(),children:[t.jsxs(Cs,{children:[t.jsxs(Rr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Er,{children:t.jsx(Ft,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsx(_r,{children:t.jsxs(Mr,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Fr,{children:"GO"})]})})]}),t.jsx(As,{type:"button",onClick:S,"aria-label":"Cerrar menú",children:t.jsx(Ea,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Ra,{children:[t.jsxs(Ze,{children:[t.jsx(Je,{children:"Navegación"}),t.jsx(Xe,{"aria-label":"Navegación principal",children:Hr.map(l=>{const h=l.icon;return t.jsxs(Ye,{to:l.to,end:l.end,onClick:x=>he(x,l.to),children:[t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(h,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:l.title}),t.jsx(Ve,{children:l.subtitle})]}),t.jsx(qe,{"aria-hidden":"true",children:t.jsx(Ge,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(Ze,{children:[t.jsx(Je,{children:"Acciones"}),t.jsx(Xe,{"aria-label":"Acciones rápidas",children:Gr.map(l=>{const h=l.icon;return t.jsxs(Ye,{to:l.to,onClick:x=>he(x,l.to),children:[t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(h,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:l.title}),t.jsx(Ve,{children:l.subtitle})]}),t.jsx(qe,{"aria-hidden":"true",children:t.jsx(Ge,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx(Ir,{children:t.jsx(Pr,{isDarkMode:n,onToggle:c})})]})]})}),q&&t.jsx(Nr,{"data-notifications":"true","data-state":oe,role:"presentation",onClick:S,children:t.jsxs(Lr,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":oe,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:l=>l.stopPropagation(),children:[t.jsxs(Ms,{children:[Q?t.jsx(Or,{type:"button",onClick:()=>w(null),"aria-label":"Volver a las notificaciones",children:t.jsx(bi,{size:14,"aria-hidden":"true"})}):t.jsx(Ts,{"aria-hidden":"true"}),t.jsxs(_s,{children:[t.jsx(Rs,{id:"marketplace-notifications-title",children:(Q==null?void 0:Q.title)??"Notificaciones"}),t.jsx(Fs,{children:(Q==null?void 0:Q.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(Or,{type:"button",onClick:()=>{S(),s("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(ji,{size:14,"aria-hidden":"true"})})]}),t.jsx(Es,{}),t.jsx(Ps,{children:Q?t.jsx(zs,{"aria-label":Q.title,children:Q.items.map(l=>{const h=l.icon;return t.jsxs(Gs,{children:[t.jsx(Ks,{"aria-hidden":"true",children:t.jsx(h,{size:14,"aria-hidden":"true"})}),t.jsxs(Ys,{children:[t.jsxs(Ws,{children:[t.jsx(Us,{children:l.title}),t.jsx(qs,{children:l.date})]}),t.jsx(Vs,{children:l.subtitle})]})]},`${Q.id}-${l.title}`)})}):t.jsx(Hs,{"aria-label":"Secciones de notificaciones",children:Yr.map(l=>{const h=l.icon;return t.jsxs(Is,{type:"button",onClick:()=>w(l.id),children:[t.jsx(Ns,{"aria-hidden":"true",children:t.jsx(h,{size:14,"aria-hidden":"true"})}),t.jsxs(Bs,{children:[t.jsx(Ds,{children:l.title}),t.jsx(Os,{children:l.subtitle})]}),t.jsx(Ls,{"aria-hidden":"true",children:t.jsx(Ne,{size:16,"aria-hidden":"true"})})]},l.id)})})})]})}),t.jsx(Cn,{open:F,currentId:z.id,onClose:()=>E(!1),onSelect:(l,h)=>v({id:l,label:h})})]})}const dr=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,lr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,_a=W`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${_a};
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
`;o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[2]};
`;const Ia=o.div`
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
`;o.div`
  position: absolute;
  inset: auto ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  z-index: 2;
`;const rc=o.span`
  ${_a};
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
`;o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const ac="/LaFranciaGO/",oc=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),pr=e=>{const r=e&&oc.has(e)?e:"comercio";return`${ac}media/${r}.svg`},ic=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),nc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return r[a%r.length]},sc=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,cc=o.span`
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
`;function dc({id:e,name:r,to:a,priority:i}){return t.jsx(sc,{to:a,children:t.jsxs(dr,{$ratio:"1 / 1",children:[t.jsx(lr,{src:pr(e),alt:r,loading:i?"eager":"lazy"}),t.jsx(cc,{children:r})]})})}const lc=o.div`
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
`,pc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Pe};
`,uc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,mc=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,gc=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function hc({icon:e,title:r,text:a,ctaLabel:i,ctaTo:n,dashed:c}){return t.jsxs(lc,{"data-dashed":c?"true":"false",children:[t.jsx(pc,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(uc,{children:r}),a?t.jsx(mc,{children:a}):null,i&&n?t.jsx(gc,{children:t.jsx(os,{to:n,children:i})}):null]})}const qr=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),fc=e=>`${e.toFixed(1)} km`,La=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),yc=o(be)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?W`
          pointer-events: none;
        `:W`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:r})=>r.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,bc=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,xc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wc=o.h3`
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
`,$c=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,vc=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,kc=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,Sc=o.button`
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
`,jc=o.span`
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
`;function Cc({name:e,store:r,price:a,oldPrice:i,categoryId:n,imageLabel:c,tag:s,to:u,onAdd:m,priority:p}){return t.jsxs(yc,{to:u??"#",$static:!u,children:[t.jsxs(dr,{$ratio:"1 / 1",children:[t.jsx(lr,{src:pr(n),alt:c??e,loading:p?"eager":"lazy"}),s?t.jsx(Ia,{children:t.jsx(jc,{children:s})}):null]}),t.jsxs(bc,{children:[r?t.jsx(xc,{children:r}):null,t.jsx(wc,{children:e}),t.jsxs($c,{children:[t.jsxs("div",{children:[t.jsx(vc,{children:qr(a)}),i?t.jsx(kc,{children:qr(i)}):null]}),m?t.jsx(Sc,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:y=>{y.preventDefault(),y.stopPropagation(),m()},children:t.jsx(Sa,{size:18,"aria-hidden":"true"})}):null]})]})]})}const Ac=o(be)`
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
`,zc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,Pc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Ec=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Mc=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Fc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function Tc({to:e,title:r,text:a,icon:i,tone:n="brand"}){return t.jsxs(Ac,{to:e,"data-tone":n,children:[t.jsx(zc,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(Pc,{children:[t.jsx(Ec,{children:r}),a?t.jsx(Mc,{children:a}):null]}),t.jsx(Fc,{children:t.jsx(Ne,{size:18,"aria-hidden":"true"})})]})}const Rc=o(be)`
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
`,_c=o.span`
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
`,Ic=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function Kr({to:e,label:r,icon:a}){return t.jsxs(Rc,{to:e,children:[t.jsx(_c,{children:t.jsx(a,{size:18})}),t.jsx(Ic,{children:r}),t.jsx(Ne,{size:16,"aria-hidden":"true"})]})}const Lc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Nc=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Oc=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Bc=o.h2`
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
`,Dc=o.span`
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
`,Hc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Gc=o(be)`
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
`;function Rt({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:n,seeAllLabel:c="Ver todos"}){return t.jsxs(Lc,{children:[t.jsxs(Nc,{children:[t.jsxs(Oc,{children:[t.jsx(Bc,{children:e}),r?t.jsxs(Dc,{children:[a,r]}):null]}),n?t.jsxs(Gc,{to:n,children:[c,t.jsx(Ne,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(Hc,{children:i}):null]})}const Yc=o(be)`
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
`,qc=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Kc=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Vc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Uc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wc=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Vr=o.span`
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
`,Xc=o.span`
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
`,Zc=o.span`
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
`,Jc=o.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.warning};
  color: #1a1204;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;function Qc({id:e,name:r,category:a,categoryId:i,to:n,distanceKm:c,rating:s,openNow:u,premium:m,etaMin:p,etaMax:y,priority:f}){return t.jsxs(Yc,{to:n,children:[t.jsxs(dr,{$ratio:"16 / 9",children:[t.jsx(lr,{src:pr(i),alt:a,loading:f?"eager":"lazy"}),t.jsxs(Ia,{children:[u!==void 0?t.jsx(Xc,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),m?t.jsx(Jc,{children:"Destacado"}):null,s!==void 0?t.jsxs(Zc,{children:[t.jsx(zi,{size:13,"aria-hidden":"true",fill:"currentColor"}),s.toFixed(1)]}):null]}),t.jsx(qc,{children:t.jsx(rc,{$size:"2.75rem",$tone:nc(e),children:ic(r)})})]}),t.jsxs(Kc,{children:[t.jsx(Vc,{children:r}),t.jsxs(Uc,{children:[a,c!==void 0?` · ${fc(c)}`:""]}),t.jsxs(Wc,{children:[t.jsxs(Vr,{children:[t.jsx(gi,{size:14,"aria-hidden":"true"}),"Delivery"]}),p!==void 0&&y!==void 0?t.jsxs(Vr,{children:[t.jsx(xi,{size:14,"aria-hidden":"true"}),p,"-",y," min"]}):null]})]})]})}const ed=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:Ca,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:ka,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:wa,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:er,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:tr,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ae,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:za,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:or,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Aa,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:xa,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:$a,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:ja,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Pa,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:ir,tone:"red"}],td=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",premium:!0,name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",premium:!0,name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],rd=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],sl=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],cl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:Ca},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ae},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:wa},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:tr},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:er},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:ka},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:za},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:fi},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:or},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Aa},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:xa},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:$a},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:ja},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Pa}],ad=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],od=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Na=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Ae,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:tr,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:or,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:er,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],dl=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:1,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:2,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,quantity:1,subtotal:2550,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:1,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,quantity:1,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,quantity:1,subtotal:2690,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],ll=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2}],pl=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],ul=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],ml=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],gl=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],hl=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],fl=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],yl=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],bl=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:Pi},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:vi},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:ki},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:Ci}],id=e=>La(e),_t=(e,...r)=>{const a=id(e);return a?La(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},nd=e=>ad.find(r=>r.id===e),xl=e=>Na.find(r=>r.id===e),wl=e=>Na.find(r=>r.name.toLowerCase()===e.toLowerCase()),$l=e=>{const r=od.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((n,c)=>n.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=nd(e);if(a)return{kind:"offer",offer:a}},sd=5,cd=.7,Ur=e=>Math.floor(e/cd),Wr=e=>e.premium&&e.distanceKm<=sd?0:1,Oe=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,Oa=(e,r)=>{const a=Oe(e,r);if(a!==0)return a;const i=Ur(e.distanceKm)-Ur(r.distanceKm);if(i!==0)return i;const n=Wr(e)-Wr(r);if(n!==0)return n;const c=e.distanceKm-r.distanceKm;return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},dd=(e,r)=>Oe(e,r)||e.distanceKm-r.distanceKm,ld=(e,r)=>Oe(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),pd=(e,r)=>Oe(e,r)||(r.rating??0)-(e.rating??0),ud=(e,r)=>Oe(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),md={relevancia:Oa,cercania:dd,precio:ld,puntuacion:pd,entrega:ud};function Xr(e,r="relevancia"){return[...e].sort(md[r]??Oa)}const vl=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],Ba="lafranciago:orden",gd=["relevancia","cercania","precio","puntuacion","entrega"],hd=()=>{try{const e=window.localStorage.getItem(Ba);return gd.includes(e)?e:"relevancia"}catch{return"relevancia"}};function fd(){const[e,r]=g.useState("relevancia");g.useEffect(()=>{r(hd())},[]);const a=g.useCallback(i=>{r(i);try{window.localStorage.setItem(Ba,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const yd=o(be)`
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
`,bd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,xd=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,wd=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,$d=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,vd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Da=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,kd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Sd=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;o.div`
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
`;o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;o.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`;o.div`
  text-align: right;
`;const kl=o.div`
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
`;o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;const Sl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;o.div`
  margin-top: ${({theme:e})=>e.spacing[3]};
`;o.div`
  margin-top: ${({theme:e})=>e.spacing[5]};
`;const jl=o(Se)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(Jn)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const Cl=o(Da)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(kd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Sd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(es)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const ur=o.div`
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
`,jd=o(ur)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Cd=o(ur)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Ad=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,zd=o.section`
  padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[1]};

  /* En escritorio el buscador vive en la barra superior. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-top: ${({theme:e})=>e.spacing[2]};

    form[role='search'] {
      display: none;
    }
  }
`;o.div`
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
`;const Al=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pd=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`;function Ed(){const[e,r]=g.useState(""),{sortMode:a}=fd(),i=e.trim(),n=i.length>0,c=g.useMemo(()=>ed.filter(p=>_t(i,p.name)),[i]),s=g.useMemo(()=>Xr(td.filter(p=>_t(i,p.name,p.category,p.address)),a),[i,a]),u=g.useMemo(()=>Xr(rd.filter(p=>_t(i,p.product,p.store)),a),[i,a]),m=c.length>0||s.length>0||u.length>0;return t.jsxs(tc,{query:e,onQueryChange:r,children:[t.jsx(zd,{children:t.jsx(ke,{children:t.jsx(Fa,{value:e,onChange:r})})}),t.jsx(Se,{children:t.jsx(ke,{children:t.jsxs(yd,{to:"/mandado",children:[t.jsx(bd,{children:t.jsx(Le,{size:22,"aria-hidden":"true"})}),t.jsxs(xd,{children:[t.jsx(wd,{children:"¿Necesitás algún mandado?"}),t.jsx($d,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(vd,{children:t.jsx(Ne,{size:18,"aria-hidden":"true"})})]})})}),n&&!m?t.jsx(Se,{children:t.jsx(ke,{children:t.jsx(hc,{icon:Si,title:"Sin resultados",text:`No encontramos nada para "${i}". Probá con otra palabra.`,dashed:!0})})}):null,c.length>0?t.jsx(Se,{children:t.jsxs(ke,{children:[t.jsx(Rt,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/comercios"}),t.jsx(Cd,{"aria-label":"Categorías",children:c.map((p,y)=>t.jsx(dc,{id:p.id,name:p.name,to:`/comercios?rubro=${p.id}`,priority:y<5},p.id))})]})}):null,u.length>0?t.jsx(Se,{children:t.jsxs(ke,{children:[t.jsx(Rt,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(ur,{"aria-label":"Productos destacados",children:u.map((p,y)=>t.jsx(Cc,{name:p.product,store:p.store,price:p.price,oldPrice:p.oldPrice,categoryId:p.categoryId,imageLabel:p.imageLabel,tag:p.discount>0?`-${p.discount}%`:void 0,to:p.href,priority:y<3},p.id))})]})}):null,s.length>0?t.jsx(Se,{children:t.jsxs(ke,{children:[t.jsx(Rt,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(jd,{"aria-label":"Negocios destacados",children:s.map((p,y)=>t.jsx(Qc,{id:p.id,name:p.name,category:p.category,categoryId:p.categoryId,to:p.href,distanceKm:p.distanceKm,rating:p.rating,openNow:p.openNow,premium:p.premium,etaMin:p.etaMin,etaMax:p.etaMax,priority:y<2},p.id))})]})}):null,n?null:t.jsx(Se,{children:t.jsx(ke,{children:t.jsx(Da,{children:t.jsxs(Ad,{children:[t.jsx(Tc,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Ae,tone:"brand"}),t.jsxs(Pd,{children:[t.jsx(Kr,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:Ma}),t.jsx(Kr,{to:"/registro/fletero",label:"Sumate como Fletero",icon:ir})]})]})})})})]})}const Md=g.lazy(()=>X(()=>import("./StoresDirectoryScreen-DDnO2RmY.js"),__vite__mapDeps([3,1,4])).then(e=>({default:e.StoresDirectoryScreen}))),Fd=g.lazy(()=>X(()=>import("./StoreProfileScreen-CKgOhm7h.js"),__vite__mapDeps([5,1,6,7,4])).then(e=>({default:e.StoreProfileScreen}))),Td=g.lazy(()=>X(()=>import("./ProductDetailScreen-CuAQsJvu.js"),__vite__mapDeps([8,1,9])).then(e=>({default:e.ProductDetailScreen}))),Rd=g.lazy(()=>X(()=>import("./MyOrdersScreen-D61-3lSq.js"),__vite__mapDeps([10,1,7,4])).then(e=>({default:e.MyOrdersScreen}))),_d=g.lazy(()=>X(()=>import("./CartScreen-DLHd8IMW.js"),__vite__mapDeps([11,1,6,12,7])).then(e=>({default:e.CartScreen}))),Id=g.lazy(()=>X(()=>import("./ErrandScreen-BVRFpjSk.js"),__vite__mapDeps([13,1,14,12])).then(e=>({default:e.ErrandScreen}))),Ld=g.lazy(()=>X(()=>import("./ErrandChatScreen-DAXaQ7Gq.js"),__vite__mapDeps([15,1,16,14])).then(e=>({default:e.ErrandChatScreen}))),Nd=g.lazy(()=>X(()=>import("./FavoritesScreen-CGsz1qOt.js"),__vite__mapDeps([17,1])).then(e=>({default:e.FavoritesScreen}))),Od=g.lazy(()=>X(()=>import("./NotificationsScreen-D7vmGT59.js"),__vite__mapDeps([18,1,19])).then(e=>({default:e.NotificationsScreen}))),Bd=g.lazy(()=>X(()=>import("./CustomerAccountScreen-CjyFltJG.js"),__vite__mapDeps([20,9,1,21,12])).then(e=>({default:e.CustomerAccountScreen}))),Dd=g.lazy(()=>X(()=>import("./CommerceRegistrationScreen-DXEAw_Pj.js"),__vite__mapDeps([22,23,1,16,21,12])).then(e=>({default:e.CommerceRegistrationScreen}))),Zr=g.lazy(()=>X(()=>import("./DeliveryRegistrationScreen-DegcOaib.js"),__vite__mapDeps([24,23,1,16,12,21])).then(e=>({default:e.DeliveryRegistrationScreen}))),Hd=g.lazy(()=>X(()=>import("./CommercePanelScreen-CM9RqQzX.js"),__vite__mapDeps([25,26,9,1,19])).then(e=>({default:e.CommercePanelScreen}))),Gd=g.lazy(()=>X(()=>import("./ProductFormScreen-CmOoS5Gk.js"),__vite__mapDeps([27,1,16])).then(e=>({default:e.ProductFormScreen}))),Yd=g.lazy(()=>X(()=>import("./DeliveryPanelScreen-Bb2MwVIF.js"),__vite__mapDeps([28,26,9,1])).then(e=>({default:e.DeliveryPanelScreen}))),qd=g.lazy(()=>X(()=>import("./AdminPanelScreen-CVSA_FpV.js"),__vite__mapDeps([29,26,9,1])).then(e=>({default:e.AdminPanelScreen})));function Kd(){return t.jsx(Ka,{children:t.jsx(di,{children:t.jsx(g.Suspense,{fallback:null,children:t.jsxs(Va,{children:[t.jsx(U,{path:"/",element:t.jsx(Ed,{})}),t.jsx(U,{path:"/comercios",element:t.jsx(Md,{})}),t.jsx(U,{path:"/comercios/:storeId",element:t.jsx(Fd,{})}),t.jsx(U,{path:"/productos/:productId",element:t.jsx(Td,{})}),t.jsx(U,{path:"/pedidos",element:t.jsx(Rd,{})}),t.jsx(U,{path:"/carrito",element:t.jsx(_d,{})}),t.jsx(U,{path:"/mandado",element:t.jsx(Id,{})}),t.jsx(U,{path:"/mandado/chat",element:t.jsx(Ld,{})}),t.jsx(U,{path:"/favoritos",element:t.jsx(Nd,{})}),t.jsx(U,{path:"/notificaciones",element:t.jsx(Od,{})}),t.jsx(U,{path:"/registro/comercio",element:t.jsx(Dd,{})}),t.jsx(U,{path:"/trabaja-con-nosotros",element:t.jsx(Zr,{})}),t.jsx(U,{path:"/registro/fletero",element:t.jsx(Zr,{role:"fletero"})}),t.jsx(U,{path:"/registro/delivery",element:t.jsx(mr,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(U,{path:"/mi-cuenta",element:t.jsx(Bd,{})}),t.jsx(U,{path:"/panel/comercio",element:t.jsx(Hd,{})}),t.jsx(U,{path:"/panel/comercio/producto",element:t.jsx(Gd,{})}),t.jsx(U,{path:"/panel/repartidor",element:t.jsx(Yd,{})}),t.jsx(U,{path:"/panel/admin",element:t.jsx(qd,{})}),t.jsx(U,{path:"*",element:t.jsx(mr,{to:"/",replace:!0})})]})})})})}ro({immediate:!0});const Ha=document.getElementById("root");if(!Ha)throw new Error("No se encontró el nodo root");It.createRoot(Ha).render(t.jsx(ze.StrictMode,{children:t.jsx(Kd,{})}));export{wl as $,rc as A,fc as B,jl as C,ot as D,hc as E,Qd as F,W as G,xl as H,Se as I,Ud as J,Wd as K,Xd as L,tc as M,Zd as N,Dt as O,kl as P,Jd as Q,Da as R,zd as S,ur as T,Ai as U,Qn as V,ol as W,$l as X,nd as Y,ad as Z,od as _,ke as a,Ae as a0,os as a1,as as a2,Le as a3,Ne as a4,ll as a5,Al as a6,Pe as a7,bi as a8,$ as a9,ml as aA,gl as aB,Pi as aC,ji as aD,hl as aE,fl as aF,ki as aG,yl as aH,bl as aI,Wi as aa,Ct as ab,es as ac,dl as ad,tl as ae,ir as af,Ea as ag,el as ah,al as ai,il as aj,Ii as ak,gi as al,rr as am,pl as an,at as ao,nr as ap,Ma as aq,Cl as ar,rl as as,va as at,Sd as au,ts as av,nl as aw,kd as ax,Sl as ay,ul as az,Fa as b,cl as c,sl as d,Rt as e,Cd as f,dc as g,vl as h,Qc as i,t as j,Si as k,dr as l,_t as m,lr as n,pr as o,Ia as p,o as q,Xr as r,Na as s,qr as t,fd as u,Sa as v,hi as w,zi as x,ic as y,nc as z};
