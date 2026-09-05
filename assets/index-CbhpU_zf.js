const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-Dp4RgVAo.js","assets/react-Clk3ySf9.js","assets/AddressMap-CIGW-MKW.css","assets/StoresDirectoryScreen-2nNsg4NE.js","assets/StoreProfileScreen-BBTyJg_i.js","assets/minus-C9dB0aGE.js","assets/clock-3-CSG0s5UM.js","assets/ProductDetailScreen-DGUBqpb8.js","assets/SettingsList-BjsHhVWR.js","assets/MyOrdersScreen-DHi-MfIL.js","assets/CartScreen-D96WJzDy.js","assets/shield-check-DNlqvQT3.js","assets/ErrandScreen-OXDf0-JH.js","assets/errandStore-CkHbx8OT.js","assets/ErrandChatScreen-BC-RS2VF.js","assets/mediaService-Be9g9s7c.js","assets/FavoritesScreen-9X4b49el.js","assets/NotificationsScreen-B61IOdeK.js","assets/badge-percent-BmYJGyvT.js","assets/CustomerAccountScreen-CIwqOTG8.js","assets/phone-DX0shijm.js","assets/CommerceRegistrationScreen-DQ9fTIEx.js","assets/formStyles-DZpFh620.js","assets/DeliveryRegistrationScreen-C5Ps_oRz.js","assets/CommercePanelScreen-BRd_EJ7j.js","assets/MetricTile-D54GWymQ.js","assets/ProductFormScreen-B_7slptP.js","assets/DeliveryPanelScreen-CzNoWb85.js","assets/AdminPanelScreen-CFs3O-EP.js"])))=>i.map(i=>d[i]);
import{r as h,a as Wa,g as Xa,R as Pe,L as be,N as Kt,u as Za,H as Ja,b as Qa,c as U,d as fr}from"./react-Clk3ySf9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();var aa={exports:{}},it={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=h,to=Symbol.for("react.element"),ro=Symbol.for("react.fragment"),ao=Object.prototype.hasOwnProperty,oo=eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,io={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,r,a){var i,n={},c=null,s=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(s=r.ref);for(i in r)ao.call(r,i)&&!io.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:to,type:e,key:c,ref:s,props:n,_owner:oo.current}}it.Fragment=ro;it.jsx=oa;it.jsxs=oa;aa.exports=it;var t=aa.exports,It={},yr=Wa;It.createRoot=yr.createRoot,It.hydrateRoot=yr.hydrateRoot;const no="modulepreload",so=function(e){return"/LaFranciaGO/"+e},br={},X=function(r,a,i){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(a.map(m=>{if(m=so(m),m in br)return;br[m]=!0;const d=m.endsWith(".css"),y=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":no,d||(f.as="script"),f.crossOrigin="",f.href=m,u&&f.setAttribute("nonce",u),document.head.appendChild(f),d)return new Promise(($,w)=>{f.addEventListener("load",$),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return n.then(s=>{for(const u of s||[])u.status==="rejected"&&c(u.reason);return r().catch(c)})};function co(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:n,onRegisteredSW:c,onRegisterError:s}=e;let u,m;const d=async(f=!0)=>{await m};async function y(){if("serviceWorker"in navigator){if(u=await X(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(f=>{s==null||s(f)}),!u)return;u.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),u.addEventListener("installed",f=>{f.isUpdate||i==null||i()}),u.register({immediate:r}).then(f=>{c?c("/LaFranciaGO/sw.js",f):n==null||n(f)}).catch(f=>{s==null||s(f)})}}return m=y(),d}var ia={exports:{}},H={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vt=Symbol.for("react.transitional.element"),Ut=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),pt=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),lo=Symbol.for("react.view_transition"),po=Symbol.for("react.client.reference");function he(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Vt:switch(e=e.type,e){case nt:case ct:case st:case ut:case mt:case lo:return e;default:switch(e=e&&e.$$typeof,e){case lt:case pt:case gt:case ht:return e;case dt:return e;default:return r}}case Ut:return r}}}H.ContextConsumer=dt;H.ContextProvider=lt;H.Element=Vt;H.ForwardRef=pt;H.Fragment=nt;H.Lazy=gt;H.Memo=ht;H.Portal=Ut;H.Profiler=ct;H.StrictMode=st;H.Suspense=ut;H.SuspenseList=mt;H.isContextConsumer=function(e){return he(e)===dt};H.isContextProvider=function(e){return he(e)===lt};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vt};H.isForwardRef=function(e){return he(e)===pt};H.isFragment=function(e){return he(e)===nt};H.isLazy=function(e){return he(e)===gt};H.isMemo=function(e){return he(e)===ht};H.isPortal=function(e){return he(e)===Ut};H.isProfiler=function(e){return he(e)===ct};H.isStrictMode=function(e){return he(e)===st};H.isSuspense=function(e){return he(e)===ut};H.isSuspenseList=function(e){return he(e)===mt};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nt||e===ct||e===st||e===ut||e===mt||typeof e=="object"&&e!==null&&(e.$$typeof===gt||e.$$typeof===ht||e.$$typeof===lt||e.$$typeof===dt||e.$$typeof===pt||e.$$typeof===po||e.getModuleId!==void 0)};H.typeOf=he;ia.exports=H;var na=ia.exports;function uo(e){function r(p,g,x,P,l){for(var I=0,b=0,Y=0,N=0,B,M,ee=0,pe=0,_,ne=_=B=0,O=0,te=0,Le=0,re=0,De=x.length,_e=De-1,fe,A="",K="",At="",zt="",xe;O<De;){if(M=x.charCodeAt(O),O===_e&&b+N+Y+I!==0&&(b!==0&&(M=b===47?10:47),N=Y=I=0,De++,_e++),b+N+Y+I===0){if(O===_e&&(0<te&&(A=A.replace($,"")),0<A.trim().length)){switch(M){case 32:case 9:case 59:case 13:case 10:break;default:A+=x.charAt(O)}M=59}switch(M){case 123:for(A=A.trim(),B=A.charCodeAt(0),_=1,re=++O;O<De;){switch(M=x.charCodeAt(O)){case 123:_++;break;case 125:_--;break;case 47:switch(M=x.charCodeAt(O+1)){case 42:case 47:e:{for(ne=O+1;ne<_e;++ne)switch(x.charCodeAt(ne)){case 47:if(M===42&&x.charCodeAt(ne-1)===42&&O+2!==ne){O=ne+1;break e}break;case 10:if(M===47){O=ne+1;break e}}O=ne}}break;case 91:M++;case 40:M++;case 34:case 39:for(;O++<_e&&x.charCodeAt(O)!==M;);}if(_===0)break;O++}switch(_=x.substring(re,O),B===0&&(B=(A=A.replace(f,"").trim()).charCodeAt(0)),B){case 64:switch(0<te&&(A=A.replace($,"")),M=A.charCodeAt(1),M){case 100:case 109:case 115:case 45:te=g;break;default:te=se}if(_=r(g,te,_,M,l+1),re=_.length,0<de&&(te=a(se,A,Le),xe=u(3,_,te,g,ie,G,re,M,l,P),A=te.join(""),xe!==void 0&&(re=(_=xe.trim()).length)===0&&(M=0,_="")),0<re)switch(M){case 115:A=A.replace(V,s);case 100:case 109:case 45:_=A+"{"+_+"}";break;case 107:A=A.replace(E,"$1 $2"),_=A+"{"+_+"}",_=z===1||z===2&&c("@"+_,3)?"@-webkit-"+_+"@"+_:"@"+_;break;default:_=A+_,P===112&&(_=(K+=_,""))}else _="";break;default:_=r(g,a(g,A,Le),_,P,l+1)}At+=_,_=Le=te=ne=B=0,A="",M=x.charCodeAt(++O);break;case 125:case 59:if(A=(0<te?A.replace($,""):A).trim(),1<(re=A.length))switch(ne===0&&(B=A.charCodeAt(0),B===45||96<B&&123>B)&&(re=(A=A.replace(" ",":")).length),0<de&&(xe=u(1,A,g,p,ie,G,K.length,P,l,P))!==void 0&&(re=(A=xe.trim()).length)===0&&(A="\0\0"),B=A.charCodeAt(0),M=A.charCodeAt(1),B){case 0:break;case 64:if(M===105||M===99){zt+=A+x.charAt(O);break}default:A.charCodeAt(re-1)!==58&&(K+=n(A,B,M,A.charCodeAt(2)))}Le=te=ne=B=0,A="",M=x.charCodeAt(++O)}}switch(M){case 13:case 10:b===47?b=0:1+B===0&&P!==107&&0<A.length&&(te=1,A+="\0"),0<de*ge&&u(0,A,g,p,ie,G,K.length,P,l,P),G=1,ie++;break;case 59:case 125:if(b+N+Y+I===0){G++;break}default:switch(G++,fe=x.charAt(O),M){case 9:case 32:if(N+I+b===0)switch(ee){case 44:case 58:case 9:case 32:fe="";break;default:M!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:N+b+I===0&&(te=Le=1,fe="\f"+fe);break;case 108:if(N+b+I+v===0&&0<ne)switch(O-ne){case 2:ee===112&&x.charCodeAt(O-3)===58&&(v=ee);case 8:pe===111&&(v=pe)}break;case 58:N+b+I===0&&(ne=O);break;case 44:b+Y+N+I===0&&(te=1,fe+="\r");break;case 34:case 39:b===0&&(N=N===M?0:N===0?M:N);break;case 91:N+b+Y===0&&I++;break;case 93:N+b+Y===0&&I--;break;case 41:N+b+I===0&&Y--;break;case 40:if(N+b+I===0){if(B===0)switch(2*ee+3*pe){case 533:break;default:B=1}Y++}break;case 64:b+Y+N+I+ne+_===0&&(_=1);break;case 42:case 47:if(!(0<N+I+Y))switch(b){case 0:switch(2*M+3*x.charCodeAt(O+1)){case 235:b=47;break;case 220:re=O,b=42}break;case 42:M===47&&ee===42&&re+2!==O&&(x.charCodeAt(re+2)===33&&(K+=x.substring(re,O+1)),fe="",b=0)}}b===0&&(A+=fe)}pe=ee,ee=M,O++}if(re=K.length,0<re){if(te=g,0<de&&(xe=u(2,K,te,p,ie,G,re,P,l,P),xe!==void 0&&(K=xe).length===0))return zt+K+At;if(K=te.join(",")+"{"+K+"}",z*v!==0){switch(z!==2||c(K,2)||(v=0),v){case 111:K=K.replace(T,":-moz-$1")+K;break;case 112:K=K.replace(F,"::-webkit-input-$1")+K.replace(F,"::-moz-$1")+K.replace(F,":-ms-input-$1")+K}v=0}}return zt+K+At}function a(p,g,x){var P=g.trim().split(S);g=P;var l=P.length,I=p.length;switch(I){case 0:case 1:var b=0;for(p=I===0?"":p[0]+" ";b<l;++b)g[b]=i(p,g[b],x).trim();break;default:var Y=b=0;for(g=[];b<l;++b)for(var N=0;N<I;++N)g[Y++]=i(p[N]+" ",P[b],x).trim()}return g}function i(p,g,x){var P=g.charCodeAt(0);switch(33>P&&(P=(g=g.trim()).charCodeAt(0)),P){case 38:return g.replace(R,"$1"+p.trim());case 58:return p.trim()+g.replace(R,"$1"+p.trim());default:if(0<1*x&&0<g.indexOf("\f"))return g.replace(R,(p.charCodeAt(0)===58?"":"$1")+p.trim())}return p+g}function n(p,g,x,P){var l=p+";",I=2*g+3*x+4*P;if(I===944){p=l.indexOf(":",9)+1;var b=l.substring(p,l.length-1).trim();return b=l.substring(0,p).trim()+b+";",z===1||z===2&&c(b,1)?"-webkit-"+b+b:b}if(z===0||z===2&&!c(l,1))return l;switch(I){case 1015:return l.charCodeAt(10)===97?"-webkit-"+l+l:l;case 951:return l.charCodeAt(3)===116?"-webkit-"+l+l:l;case 963:return l.charCodeAt(5)===110?"-webkit-"+l+l:l;case 1009:if(l.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+l+l;case 978:return"-webkit-"+l+"-moz-"+l+l;case 1019:case 983:return"-webkit-"+l+"-moz-"+l+"-ms-"+l+l;case 883:if(l.charCodeAt(8)===45)return"-webkit-"+l+l;if(0<l.indexOf("image-set(",11))return l.replace(oe,"$1-webkit-$2")+l;break;case 932:if(l.charCodeAt(4)===45)switch(l.charCodeAt(5)){case 103:return"-webkit-box-"+l.replace("-grow","")+"-webkit-"+l+"-ms-"+l.replace("grow","positive")+l;case 115:return"-webkit-"+l+"-ms-"+l.replace("shrink","negative")+l;case 98:return"-webkit-"+l+"-ms-"+l.replace("basis","preferred-size")+l}return"-webkit-"+l+"-ms-"+l+l;case 964:return"-webkit-"+l+"-ms-flex-"+l+l;case 1023:if(l.charCodeAt(8)!==99)break;return b=l.substring(l.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+l+"-ms-flex-pack"+b+l;case 1005:return k.test(l)?l.replace(w,":-webkit-")+l.replace(w,":-moz-")+l:l;case 1e3:switch(b=l.substring(13).trim(),g=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(g)){case 226:b=l.replace(L,"tb");break;case 232:b=l.replace(L,"tb-rl");break;case 220:b=l.replace(L,"lr");break;default:return l}return"-webkit-"+l+"-ms-"+b+l;case 1017:if(l.indexOf("sticky",9)===-1)break;case 975:switch(g=(l=p).length-10,b=(l.charCodeAt(g)===33?l.substring(0,g):l).substring(p.indexOf(":",7)+1).trim(),I=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:l=l.replace(b,"-webkit-"+b)+";"+l;break;case 207:case 102:l=l.replace(b,"-webkit-"+(102<I?"inline-":"")+"box")+";"+l.replace(b,"-webkit-"+b)+";"+l.replace(b,"-ms-"+b+"box")+";"+l}return l+";";case 938:if(l.charCodeAt(5)===45)switch(l.charCodeAt(6)){case 105:return b=l.replace("-items",""),"-webkit-"+l+"-webkit-box-"+b+"-ms-flex-"+b+l;case 115:return"-webkit-"+l+"-ms-flex-item-"+l.replace(J,"")+l;default:return"-webkit-"+l+"-ms-flex-line-pack"+l.replace("align-content","").replace(J,"")+l}break;case 973:case 989:if(l.charCodeAt(3)!==45||l.charCodeAt(4)===122)break;case 931:case 953:if(le.test(p)===!0)return(b=p.substring(p.indexOf(":")+1)).charCodeAt(0)===115?n(p.replace("stretch","fill-available"),g,x,P).replace(":fill-available",":stretch"):l.replace(b,"-webkit-"+b)+l.replace(b,"-moz-"+b.replace("fill-",""))+l;break;case 962:if(l="-webkit-"+l+(l.charCodeAt(5)===102?"-ms-"+l:"")+l,x+P===211&&l.charCodeAt(13)===105&&0<l.indexOf("transform",10))return l.substring(0,l.indexOf(";",27)+1).replace(j,"$1-webkit-$2")+l}return l}function c(p,g){var x=p.indexOf(g===1?":":"{"),P=p.substring(0,g!==3?x:10);return x=p.substring(x+1,p.length-1),ke(g!==2?P:P.replace(q,"$1"),x,g)}function s(p,g){var x=n(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return x!==g+";"?x.replace(ae," or ($1)").substring(4):"("+g+")"}function u(p,g,x,P,l,I,b,Y,N,B){for(var M=0,ee=g,pe;M<de;++M)switch(pe=ce[M].call(y,p,ee,x,P,l,I,b,Y,N,B)){case void 0:case!1:case!0:case null:break;default:ee=pe}if(ee!==g)return ee}function m(p){switch(p){case void 0:case null:de=ce.length=0;break;default:if(typeof p=="function")ce[de++]=p;else if(typeof p=="object")for(var g=0,x=p.length;g<x;++g)m(p[g]);else ge=!!p|0}return m}function d(p){return p=p.prefix,p!==void 0&&(ke=null,p?typeof p!="function"?z=1:(z=2,ke=p):z=0),d}function y(p,g){var x=p;if(33>x.charCodeAt(0)&&(x=x.trim()),Q=x,x=[Q],0<de){var P=u(-1,g,x,x,ie,G,0,0,0,0);P!==void 0&&typeof P=="string"&&(g=P)}var l=r(se,x,g,0,0);return 0<de&&(P=u(-2,l,x,x,ie,G,l.length,0,0,0),P!==void 0&&(l=P)),Q="",v=0,G=ie=1,l}var f=/^\0+/g,$=/[\0\r\f]/g,w=/: */g,k=/zoo|gra/,j=/([,: ])(transform)/g,S=/,\r+?/g,R=/([\t\r\n ])*\f?&/g,E=/@(k\w+)\s*(\S*)\s*/,F=/::(place)/g,T=/:(read-only)/g,L=/[svh]\w+-[tblr]{2}/,V=/\(\s*(.*)\s*\)/g,ae=/([\s\S]*?);/g,J=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,le=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,G=1,ie=1,v=0,z=1,se=[],ce=[],de=0,ke=null,ge=0,Q="";return y.use=m,y.set=d,e!==void 0&&d(e),y}var mo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ho(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var go=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xr=ho(function(e){return go.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),sa={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=typeof Symbol=="function"&&Symbol.for,Wt=Z?Symbol.for("react.element"):60103,Xt=Z?Symbol.for("react.portal"):60106,ft=Z?Symbol.for("react.fragment"):60107,yt=Z?Symbol.for("react.strict_mode"):60108,bt=Z?Symbol.for("react.profiler"):60114,xt=Z?Symbol.for("react.provider"):60109,wt=Z?Symbol.for("react.context"):60110,Zt=Z?Symbol.for("react.async_mode"):60111,$t=Z?Symbol.for("react.concurrent_mode"):60111,vt=Z?Symbol.for("react.forward_ref"):60112,kt=Z?Symbol.for("react.suspense"):60113,fo=Z?Symbol.for("react.suspense_list"):60120,St=Z?Symbol.for("react.memo"):60115,jt=Z?Symbol.for("react.lazy"):60116,yo=Z?Symbol.for("react.block"):60121,bo=Z?Symbol.for("react.fundamental"):60117,xo=Z?Symbol.for("react.responder"):60118,wo=Z?Symbol.for("react.scope"):60119;function ue(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Wt:switch(e=e.type,e){case Zt:case $t:case ft:case bt:case yt:case kt:return e;default:switch(e=e&&e.$$typeof,e){case wt:case vt:case jt:case St:case xt:return e;default:return r}}case Xt:return r}}}function ca(e){return ue(e)===$t}D.AsyncMode=Zt;D.ConcurrentMode=$t;D.ContextConsumer=wt;D.ContextProvider=xt;D.Element=Wt;D.ForwardRef=vt;D.Fragment=ft;D.Lazy=jt;D.Memo=St;D.Portal=Xt;D.Profiler=bt;D.StrictMode=yt;D.Suspense=kt;D.isAsyncMode=function(e){return ca(e)||ue(e)===Zt};D.isConcurrentMode=ca;D.isContextConsumer=function(e){return ue(e)===wt};D.isContextProvider=function(e){return ue(e)===xt};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wt};D.isForwardRef=function(e){return ue(e)===vt};D.isFragment=function(e){return ue(e)===ft};D.isLazy=function(e){return ue(e)===jt};D.isMemo=function(e){return ue(e)===St};D.isPortal=function(e){return ue(e)===Xt};D.isProfiler=function(e){return ue(e)===bt};D.isStrictMode=function(e){return ue(e)===yt};D.isSuspense=function(e){return ue(e)===kt};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ft||e===$t||e===bt||e===yt||e===kt||e===fo||typeof e=="object"&&e!==null&&(e.$$typeof===jt||e.$$typeof===St||e.$$typeof===xt||e.$$typeof===wt||e.$$typeof===vt||e.$$typeof===bo||e.$$typeof===xo||e.$$typeof===wo||e.$$typeof===yo)};D.typeOf=ue;sa.exports=D;var $o=sa.exports,Jt=$o,vo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ko={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},So={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},da={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qt={};Qt[Jt.ForwardRef]=So;Qt[Jt.Memo]=da;function wr(e){return Jt.isMemo(e)?da:Qt[e.$$typeof]||vo}var jo=Object.defineProperty,Co=Object.getOwnPropertyNames,$r=Object.getOwnPropertySymbols,Ao=Object.getOwnPropertyDescriptor,zo=Object.getPrototypeOf,vr=Object.prototype;function la(e,r,a){if(typeof r!="string"){if(vr){var i=zo(r);i&&i!==vr&&la(e,i,a)}var n=Co(r);$r&&(n=n.concat($r(r)));for(var c=wr(e),s=wr(r),u=0;u<n.length;++u){var m=n[u];if(!ko[m]&&!(a&&a[m])&&!(s&&s[m])&&!(c&&c[m])){var d=Ao(r,m);try{jo(e,m,d)}catch{}}}}return e}var Eo=la;const Po=Xa(Eo);var me={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var kr=function(e,r){for(var a=[e[0]],i=0,n=r.length;i<n;i+=1)a.push(r[i],e[i+1]);return a},Nt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!na.typeOf(e)},et=Object.freeze([]),$e=Object.freeze({});function Re(e){return typeof e=="function"}function Sr(e){return e.displayName||e.name||"Component"}function er(e){return e&&typeof e.styledComponentId=="string"}var Te=typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_ATTR||me.SC_ATTR)||"data-styled",tr=typeof window<"u"&&"HTMLElement"in window,Mo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&me.REACT_APP_SC_DISABLE_SPEEDY!==""?me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&me.REACT_APP_SC_DISABLE_SPEEDY:me.SC_DISABLE_SPEEDY!==void 0&&me.SC_DISABLE_SPEEDY!==""&&me.SC_DISABLE_SPEEDY!=="false"&&me.SC_DISABLE_SPEEDY)),Ro={};function Ae(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var To=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,n=0;n<a;n++)i+=this.groupSizes[n];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var n=this.groupSizes,c=n.length,s=c;a>=s;)(s<<=1)<0&&Ae(16,""+a);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var u=c;u<s;u++)this.groupSizes[u]=0}for(var m=this.indexOfGroup(a+1),d=0,y=i.length;d<y;d++)this.tag.insertRule(m,i[d])&&(this.groupSizes[a]++,m++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],n=this.indexOfGroup(a),c=n+i;this.groupSizes[a]=0;for(var s=n;s<c;s++)this.tag.deleteRule(n)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var n=this.groupSizes[a],c=this.indexOfGroup(a),s=c+n,u=c;u<s;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),Qe=new Map,tt=new Map,Ie=1,He=function(e){if(Qe.has(e))return Qe.get(e);for(;tt.has(Ie);)Ie++;var r=Ie++;return Qe.set(e,r),tt.set(r,e),r},Fo=function(e){return tt.get(e)},Lo=function(e,r){r>=Ie&&(Ie=r+1),Qe.set(e,r),tt.set(r,e)},_o="style["+Te+'][data-styled-version="5.3.11"]',Io=new RegExp("^"+Te+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),No=function(e,r,a){for(var i,n=a.split(","),c=0,s=n.length;c<s;c++)(i=n[c])&&e.registerName(r,i)},Oo=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],n=0,c=a.length;n<c;n++){var s=a[n].trim();if(s){var u=s.match(Io);if(u){var m=0|parseInt(u[1],10),d=u[2];m!==0&&(Lo(d,m),No(e,d,u[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(s)}}},Bo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},pa=function(e){var r=document.head,a=e||r,i=document.createElement("style"),n=function(u){for(var m=u.childNodes,d=m.length;d>=0;d--){var y=m[d];if(y&&y.nodeType===1&&y.hasAttribute(Te))return y}}(a),c=n!==void 0?n.nextSibling:null;i.setAttribute(Te,"active"),i.setAttribute("data-styled-version","5.3.11");var s=Bo();return s&&i.setAttribute("nonce",s),a.insertBefore(i,c),i},Do=function(){function e(a){var i=this.element=pa(a);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var c=document.styleSheets,s=0,u=c.length;s<u;s++){var m=c[s];if(m.ownerNode===n)return m}Ae(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Ho=function(){function e(a){var i=this.element=pa(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var n=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(n,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Go=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),jr=tr,Yo={isServer:!tr,useCSSOMInjection:!Mo},rt=function(){function e(a,i,n){a===void 0&&(a=$e),i===void 0&&(i={}),this.options=ye({},Yo,{},a),this.gs=i,this.names=new Map(n),this.server=!!a.isServer,!this.server&&tr&&jr&&(jr=!1,function(c){for(var s=document.querySelectorAll(_o),u=0,m=s.length;u<m;u++){var d=s[u];d&&d.getAttribute(Te)!=="active"&&(Oo(c,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(a){return He(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,c=i.useCSSOMInjection,s=i.target,a=n?new Go(s):c?new Do(s):new Ho(s),new To(a)));var a,i,n,c,s},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(He(a),this.names.has(a))this.names.get(a).add(i);else{var n=new Set;n.add(i),this.names.set(a,n)}},r.insertRules=function(a,i,n){this.registerName(a,i),this.getTag().insertRules(He(a),n)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(He(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),n=i.length,c="",s=0;s<n;s++){var u=Fo(s);if(u!==void 0){var m=a.names.get(u),d=i.getGroup(s);if(m&&d&&m.size){var y=Te+".g"+s+'[id="'+u+'"]',f="";m!==void 0&&m.forEach(function($){$.length>0&&(f+=$+",")}),c+=""+d+y+'{content:"'+f+`"}/*!sc*/
`}}}return c}(this)},e}(),qo=/(a)(d)/gi,Cr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ot(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=Cr(r%52)+a;return(Cr(r%52)+a).replace(qo,"$1-$2")}var Me=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},ua=function(e){return Me(5381,e)};function ma(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Re(a)&&!er(a))return!1}return!0}var Ko=ua("5.3.11"),Vo=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ma(r),this.componentId=a,this.baseHash=Me(Ko,a),this.baseStyle=i,rt.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var n=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))c.push(this.staticRulesId);else{var s=ze(this.rules,r,a,i).join(""),u=Ot(Me(this.baseHash,s)>>>0);if(!a.hasNameForId(n,u)){var m=i(s,"."+u,void 0,n);a.insertRules(n,u,m)}c.push(u),this.staticRulesId=u}else{for(var d=this.rules.length,y=Me(this.baseHash,i.hash),f="",$=0;$<d;$++){var w=this.rules[$];if(typeof w=="string")f+=w;else if(w){var k=ze(w,r,a,i),j=Array.isArray(k)?k.join(""):k;y=Me(y,j+$),f+=j}}if(f){var S=Ot(y>>>0);if(!a.hasNameForId(n,S)){var R=i(f,"."+S,void 0,n);a.insertRules(n,S,R)}c.push(S)}}return c.join(" ")},e}(),Uo=/^\s*\/\/.*$/gm,Wo=[":","[",".","#"];function Xo(e){var r,a,i,n,c=$e,s=c.options,u=s===void 0?$e:s,m=c.plugins,d=m===void 0?et:m,y=new uo(u),f=[],$=function(j){function S(R){if(R)try{j(R+"}")}catch{}}return function(R,E,F,T,L,V,ae,J,q,le){switch(R){case 1:if(q===0&&E.charCodeAt(0)===64)return j(E+";"),"";break;case 2:if(J===0)return E+"/*|*/";break;case 3:switch(J){case 102:case 112:return j(F[0]+E),"";default:return E+(le===0?"/*|*/":"")}case-2:E.split("/*|*/}").forEach(S)}}}(function(j){f.push(j)}),w=function(j,S,R){return S===0&&Wo.indexOf(R[a.length])!==-1||R.match(n)?j:"."+r};function k(j,S,R,E){E===void 0&&(E="&");var F=j.replace(Uo,""),T=S&&R?R+" "+S+" { "+F+" }":F;return r=E,a=S,i=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),y(R||!S?"":S,T)}return y.use([].concat(d,[function(j,S,R){j===2&&R.length&&R[0].lastIndexOf(a)>0&&(R[0]=R[0].replace(i,w))},$,function(j){if(j===-2){var S=f;return f=[],S}}])),k.hash=d.length?d.reduce(function(j,S){return S.name||Ae(15),Me(j,S.name)},5381).toString():"",k}var ha=Pe.createContext();ha.Consumer;var ga=Pe.createContext(),Zo=(ga.Consumer,new rt),Bt=Xo();function fa(){return h.useContext(ha)||Zo}function ya(){return h.useContext(ga)||Bt}var ba=function(){function e(r,a){var i=this;this.inject=function(n,c){c===void 0&&(c=Bt);var s=i.name+c.hash;n.hasNameForId(i.id,s)||n.insertRules(i.id,s,c(i.rules,s,"@keyframes"))},this.toString=function(){return Ae(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=Bt),this.name+r.hash},e}(),Jo=/([A-Z])/,Qo=/([A-Z])/g,ei=/^ms-/,ti=function(e){return"-"+e.toLowerCase()};function Ar(e){return Jo.test(e)?e.replace(Qo,ti).replace(ei,"-ms-"):e}var zr=function(e){return e==null||e===!1||e===""};function ze(e,r,a,i){if(Array.isArray(e)){for(var n,c=[],s=0,u=e.length;s<u;s+=1)(n=ze(e[s],r,a,i))!==""&&(Array.isArray(n)?c.push.apply(c,n):c.push(n));return c}if(zr(e))return"";if(er(e))return"."+e.styledComponentId;if(Re(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!r)return e;var m=e(r);return ze(m,r,a,i)}var d;return e instanceof ba?a?(e.inject(a,i),e.getName(i)):e:Nt(e)?function y(f,$){var w,k,j=[];for(var S in f)f.hasOwnProperty(S)&&!zr(f[S])&&(Array.isArray(f[S])&&f[S].isCss||Re(f[S])?j.push(Ar(S)+":",f[S],";"):Nt(f[S])?j.push.apply(j,y(f[S],S)):j.push(Ar(S)+": "+(w=S,(k=f[S])==null||typeof k=="boolean"||k===""?"":typeof k!="number"||k===0||w in mo||w.startsWith("--")?String(k).trim():k+"px")+";"));return $?[$+" {"].concat(j,["}"]):j}(e):e.toString()}var Er=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return Re(e)||Nt(e)?Er(ze(kr(et,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:Er(ze(kr(e,a)))}var xa=function(e,r,a){return a===void 0&&(a=$e),e.theme!==a.theme&&e.theme||r||a.theme},ri=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ai=/(^-|-$)/g;function Et(e){return e.replace(ri,"-").replace(ai,"")}var rr=function(e){return Ot(ua(e)>>>0)};function Ge(e){return typeof e=="string"&&!0}var Dt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},oi=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ii(e,r,a){var i=e[a];Dt(r)&&Dt(i)?wa(i,r):e[a]=r}function wa(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var n=0,c=a;n<c.length;n++){var s=c[n];if(Dt(s))for(var u in s)oi(u)&&ii(e,s[u],u)}return e}var Ne=Pe.createContext();Ne.Consumer;function ni(e){var r=h.useContext(Ne),a=h.useMemo(function(){return function(i,n){if(!i)return Ae(14);if(Re(i)){var c=i(n);return c}return Array.isArray(i)||typeof i!="object"?Ae(8):n?ye({},n,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Pe.createElement(Ne.Provider,{value:a},e.children):null}var Pt={};function $a(e,r,a){var i=er(e),n=!Ge(e),c=r.attrs,s=c===void 0?et:c,u=r.componentId,m=u===void 0?function(E,F){var T=typeof E!="string"?"sc":Et(E);Pt[T]=(Pt[T]||0)+1;var L=T+"-"+rr("5.3.11"+T+Pt[T]);return F?F+"-"+L:L}(r.displayName,r.parentComponentId):u,d=r.displayName,y=d===void 0?function(E){return Ge(E)?"styled."+E:"Styled("+Sr(E)+")"}(e):d,f=r.displayName&&r.componentId?Et(r.displayName)+"-"+r.componentId:r.componentId||m,$=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,w=r.shouldForwardProp;i&&e.shouldForwardProp&&(w=r.shouldForwardProp?function(E,F,T){return e.shouldForwardProp(E,F,T)&&r.shouldForwardProp(E,F,T)}:e.shouldForwardProp);var k,j=new Vo(a,f,i?e.componentStyle:void 0),S=j.isStatic&&s.length===0,R=function(E,F){return function(T,L,V,ae){var J=T.attrs,q=T.componentStyle,le=T.defaultProps,oe=T.foldedComponentIds,G=T.shouldForwardProp,ie=T.styledComponentId,v=T.target,z=function(P,l,I){P===void 0&&(P=$e);var b=ye({},l,{theme:P}),Y={};return I.forEach(function(N){var B,M,ee,pe=N;for(B in Re(pe)&&(pe=pe(b)),pe)b[B]=Y[B]=B==="className"?(M=Y[B],ee=pe[B],M&&ee?M+" "+ee:M||ee):pe[B]}),[b,Y]}(xa(L,h.useContext(Ne),le)||$e,L,J),se=z[0],ce=z[1],de=function(P,l,I,b){var Y=fa(),N=ya(),B=l?P.generateAndInjectStyles($e,Y,N):P.generateAndInjectStyles(I,Y,N);return B}(q,ae,se),ke=V,ge=ce.$as||L.$as||ce.as||L.as||v,Q=Ge(ge),p=ce!==L?ye({},L,{},ce):L,g={};for(var x in p)x[0]!=="$"&&x!=="as"&&(x==="forwardedAs"?g.as=p[x]:(G?G(x,xr,ge):!Q||xr(x))&&(g[x]=p[x]));return L.style&&ce.style!==L.style&&(g.style=ye({},L.style,{},ce.style)),g.className=Array.prototype.concat(oe,ie,de!==ie?de:null,L.className,ce.className).filter(Boolean).join(" "),g.ref=ke,h.createElement(ge,g)}(k,E,F,S)};return R.displayName=y,(k=Pe.forwardRef(R)).attrs=$,k.componentStyle=j,k.displayName=y,k.shouldForwardProp=w,k.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):et,k.styledComponentId=f,k.target=i?e.target:e,k.withComponent=function(E){var F=r.componentId,T=function(V,ae){if(V==null)return{};var J,q,le={},oe=Object.keys(V);for(q=0;q<oe.length;q++)J=oe[q],ae.indexOf(J)>=0||(le[J]=V[J]);return le}(r,["componentId"]),L=F&&F+"-"+(Ge(E)?E:Et(Sr(E)));return $a(E,ye({},T,{attrs:$,componentId:L}),a)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=i?wa({},e.defaultProps,E):E}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),n&&Po(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}var o=function(e){return function r(a,i,n){if(n===void 0&&(n=$e),!na.isValidElementType(i))return Ae(1,String(i));var c=function(){return a(i,n,W.apply(void 0,arguments))};return c.withConfig=function(s){return r(a,i,ye({},n,{},s))},c.attrs=function(s){return r(a,i,ye({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},c}($a,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var si=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=ma(a),rt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,n,c){var s=c(ze(this.rules,i,n,c).join(""),""),u=this.componentId+a;n.insertRules(u,u,s)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,n,c){a>2&&rt.registerId(this.componentId+a),this.removeStyles(a,n),this.createStyles(a,i,n,c)},e}();function ci(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=W.apply(void 0,[e].concat(a)),c="sc-global-"+rr(JSON.stringify(n)),s=new si(n,c);function u(d){var y=fa(),f=ya(),$=h.useContext(Ne),w=h.useRef(y.allocateGSInstance(c)).current;return y.server&&m(w,d,y,$,f),h.useLayoutEffect(function(){if(!y.server)return m(w,d,y,$,f),function(){return s.removeStyles(w,y)}},[w,d,y,$,f]),null}function m(d,y,f,$,w){if(s.isStatic)s.renderStyles(d,Ro,f,w);else{var k=ye({},y,{theme:xa(y,$,u.defaultProps)});s.renderStyles(d,k,f,w)}}return Pe.memo(u)}function Ct(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=W.apply(void 0,[e].concat(a)).join(""),c=rr(n);return new ba(c,n)}const di=ci`
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
`,we={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},li=we.shadow,pi={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},ui={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},mi=e=>({mode:e,color:e==="dark"?pi:we.color,typography:we.typography,spacing:we.spacing,radius:we.radius,shadow:e==="dark"?ui:li,layout:we.layout,breakpoints:we.breakpoints,zIndex:we.zIndex}),va="lafranciago-theme-mode",ka=h.createContext(null),hi=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(va);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function gi({children:e}){const[r,a]=h.useState(hi),i=h.useRef(!1);h.useEffect(()=>{if(window.localStorage.setItem(va,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const m=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(m),delete document.documentElement.dataset.themeTransition}},[r]);const n=h.useCallback(()=>{a(m=>m==="light"?"dark":"light")},[]),c=h.useCallback(m=>{a(m)},[]),s=h.useMemo(()=>mi(r),[r]),u=h.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:n,setMode:c}),[r,c,n]);return t.jsx(ka.Provider,{value:u,children:t.jsxs(ni,{theme:s,children:[t.jsx(di,{}),e]})})}function fi(){const e=h.useContext(ka);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),C=(e,r)=>{const a=h.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:u="",children:m,...d},y)=>h.createElement("svg",{ref:y,...yi,width:n,height:n,stroke:i,strokeWidth:s?Number(c)*24/Number(n):c,className:["lucide",`lucide-${bi(e)}`,u].join(" "),...d},[...r.map(([f,$])=>h.createElement(f,$)),...Array.isArray(m)?m:[m]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=C("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=C("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=C("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=C("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=C("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=C("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=C("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=C("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=C("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=C("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=C("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=C("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=C("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=C("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=C("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=C("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=C("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=C("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=C("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=C("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=C("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=C("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=C("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=C("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=C("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=C("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=C("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=C("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=C("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=C("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=C("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=C("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=C("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=C("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=C("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=C("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=C("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=C("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=C("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=C("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=C("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=C("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=C("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=C("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=C("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ia({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const Li="https://photon.komoot.io/api/",_i="https://nominatim.openstreetmap.org/reverse",Gt={lat:-31.4063691,lon:-62.6332043},Mt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Ii=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Ni=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function Oi(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(Gt.lat),lon:String(Gt.lon)});try{const n=await fetch(`${Li}?${i.toString()}`,{signal:r});return n.ok?((await n.json()).features??[]).map((s,u)=>{var f;const m=s.properties??{},[d,y]=((f=s.geometry)==null?void 0:f.coordinates)??[];return typeof y!="number"||typeof d!="number"?null:{id:`${m.type??"geo"}-${u}-${y}-${d}`,label:Ii(m),context:Ni(m),lat:y,lon:d}}).filter(s=>s!==null).sort((s,u)=>{const m=Mt(a),d=Mt(s.label).startsWith(m),y=Mt(u.label).startsWith(m);return d!==y?d?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Bi(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const n=await fetch(`${_i}?${i.toString()}`,{signal:a});if(!n.ok)return null;const s=(await n.json()).address??{};return[s.road,s.house_number].filter(Boolean).join(" ")||s.neighbourhood||s.city||null}catch{return null}}const Di=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Hi=Ct`
  from { opacity: 0; }
  to { opacity: 1; }
`,Gi=Ct`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Yi=o.div`
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
  animation: ${Hi} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qi=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Gi} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ki=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Vi=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,Ui=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Wi=o.input`
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
`,Xi=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,Zi=o.button`
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
`,Ji=o.button`
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
`;function Qi({open:e,address:r,onCancel:a,onSave:i}){const[n,c]=h.useState("");if(h.useEffect(()=>{e&&c("")},[e]),h.useEffect(()=>{if(!e)return;const m=d=>{d.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,e]),!e)return null;const s=n.trim(),u=m=>{m.preventDefault(),s&&i(s)};return t.jsx(Yi,{onClick:m=>{m.stopPropagation(),a()},role:"presentation",children:t.jsxs(qi,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:m=>m.stopPropagation(),children:[t.jsx(Ki,{children:"Nombre de la dirección"}),r?t.jsx(Vi,{children:r}):null,t.jsx(Ui,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(Wi,{id:"address-name",value:n,onChange:m=>c(m.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(Xi,{children:[t.jsx(Zi,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(Ji,{type:"submit",disabled:!s,children:"Guardar"})]})]})})}const ve=W`
  ${({theme:e})=>e.mode==="dark"&&W`
      color: ${e.color.neonMuted};
    `}
`,Yt=W`
  ${({theme:e})=>e.mode==="dark"&&W`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,en=W`
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
`;const tn=o.div`
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
`,rn=o.div`
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
`,an=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,on=o.span`
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
`,nn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,sn=o.button`
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

  ${ve};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,cn=o.div`
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
`,dn=o.div`
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
`,ln=o.input`
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
`,pn=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,un=o.button`
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
`,mn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,hn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,gn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,fn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,yn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,bn=o.button`
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
`,xn=o.button`
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

  ${ve};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,wn=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,$n=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,vn=o.button`
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
`,kn=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,Sn=o.button`
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
`,jn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Cn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,An=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,zn=h.lazy(()=>X(()=>import("./AddressMap-Dp4RgVAo.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.AddressMap}))),En=260,Pn=350;function Mn({open:e,currentId:r,onClose:a,onSelect:i}){const[n,c]=h.useState(!1),[s,u]=h.useState(!1),[m,d]=h.useState("list"),[y,f]=h.useState(""),[$,w]=h.useState([]),[k,j]=h.useState(!1),[S,R]=h.useState(null),[E,F]=h.useState([]),[T,L]=h.useState(!1),V=h.useRef(!1);h.useEffect(()=>{if(e){c(!0);const z=window.requestAnimationFrame(()=>u(!0));return()=>window.cancelAnimationFrame(z)}if(!n)return;u(!1);const v=window.setTimeout(()=>{c(!1),d("list"),f(""),w([]),R(null),L(!1)},En);return()=>window.clearTimeout(v)},[n,e]),h.useEffect(()=>{if(!e)return;const v=z=>{if(z.key==="Escape"&&!T){if(m==="new"){d("list");return}a()}};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[T,a,e,m]),h.useEffect(()=>{if(m!=="new")return;if(V.current){V.current=!1;return}const v=y.trim();if(v.length<2){w([]),j(!1);return}const z=new AbortController;j(!0);const se=window.setTimeout(()=>{Oi(v,z.signal).then(ce=>{w(ce),j(!1)}).catch(()=>j(!1))},Pn);return()=>{window.clearTimeout(se),z.abort()}},[y,m]);const ae=h.useMemo(()=>[...Di,...E],[E]),J=v=>{V.current=!0,f(v.label),w([]),R({lat:v.lat,lon:v.lon})},q=(v,z)=>{R({lat:v,lon:z}),Bi(v,z).then(se=>{se&&(V.current=!0,f(se),w([]))})},le=v=>{const z={id:`custom-${Date.now()}`,label:v,address:y.trim(),primary:!1};F(se=>[...se,z]),L(!1),i(z.id,z.address),a()};if(!n)return null;const oe=m==="new",G=S??Gt,ie=S!==null&&y.trim().length>=3;return t.jsxs(tn,{"data-visible":s,onClick:a,role:"presentation",children:[t.jsxs(rn,{"data-visible":s,"data-full":oe,role:"dialog","aria-modal":"true","aria-label":oe?"Agregar una dirección nueva":"Dirección de entrega",onClick:v=>v.stopPropagation(),children:[t.jsxs(an,{children:[t.jsx(on,{"aria-hidden":"true"}),oe?t.jsx(xn,{type:"button",onClick:()=>d("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(xi,{size:18,"aria-hidden":"true"})}):null,t.jsx(nn,{children:oe?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(sn,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(_a,{size:18,"aria-hidden":"true"})})]}),t.jsx(cn,{"data-full":oe,children:oe?t.jsxs(t.Fragment,{children:[t.jsxs(dn,{children:[t.jsx(Ht,{size:18,"aria-hidden":"true"}),t.jsx(ln,{value:y,onChange:v=>f(v.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),$.length>0?t.jsx(kn,{"aria-label":"Sugerencias de direcciones",children:$.map(v=>t.jsxs(Sn,{type:"button",onClick:()=>J(v),children:[t.jsx(ot,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(jn,{children:v.label}),v.context?t.jsx(Cn,{children:v.context}):null]})]},v.id))}):null,$.length===0&&k?t.jsx(An,{children:"Buscando…"}):null,t.jsx(wn,{children:t.jsx(h.Suspense,{fallback:null,children:t.jsx(zn,{lat:G.lat,lon:G.lon,onPick:q})})}),t.jsx($n,{children:S?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(vn,{type:"button",onClick:()=>L(!0),disabled:!ie,children:[t.jsx(ot,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(pn,{children:"Tus direcciones guardadas"}),ae.map(v=>t.jsxs(un,{type:"button","data-current":v.id===r,onClick:()=>{i(v.id,v.address),a()},children:[t.jsx(mn,{children:t.jsx(nr,{size:18,"aria-hidden":"true"})}),t.jsxs(hn,{children:[t.jsx(gn,{children:v.label}),t.jsx(fn,{children:v.address})]}),v.id===r?t.jsx(yn,{"aria-label":"Dirección actual",children:t.jsx($i,{size:16,"aria-hidden":"true"})}):null]},v.id)),t.jsxs(bn,{type:"button",onClick:()=>d("new"),children:[t.jsx(Pa,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(Qi,{open:T,address:y.trim(),onCancel:()=>L(!1),onSave:le})]})}const Rn=o.form`
  width: 100%;
`,Tn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Fn=o.div`
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
`,Ln=o.input`
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
`,_n=o.button`
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
`,Na=h.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:n,id:c="marketplace-search"},s){const u=m=>{m.preventDefault()};return t.jsxs(Rn,{onSubmit:u,role:"search",children:[t.jsx(Tn,{htmlFor:c,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(Fn,{children:[t.jsx(Ht,{size:18,"aria-hidden":"true"}),t.jsx(Ln,{id:c,ref:s,value:r,onChange:m=>a(m.target.value),placeholder:i,type:"search"}),t.jsx(_n,{type:"submit","aria-label":"Buscar",children:t.jsx(Ht,{size:16,"aria-hidden":"true"})})]})]})}),In=Ct`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,Nn=Ct`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,On=o.button`
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
`,Bn=o.span`
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
  animation: ${In} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Dn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Hn=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Gn=o.span`
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
`,Yn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,qn=o.span`
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
`,Kn=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${Nn} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,Vn=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,Un=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,Wn=o.span`
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
`;function Rr({isDarkMode:e,onToggle:r}){return t.jsxs(On,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(Bn,{"data-dark":e,"aria-hidden":"true",children:t.jsx(Ci,{size:14,"aria-hidden":"true"})}),t.jsxs(Dn,{children:[t.jsxs(Hn,{children:["Modo",t.jsx(Gn,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Yn,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(qn,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(Kn,{}),t.jsx(Vn,{"data-dark":e}),t.jsxs(Un,{children:[t.jsx(Mr,{size:12,"aria-hidden":"true"}),t.jsx(Pr,{size:12,"aria-hidden":"true"})]}),t.jsx(Wn,{"data-dark":e,children:e?t.jsx(Pr,{size:12,"aria-hidden":"true"}):t.jsx(Mr,{size:12,"aria-hidden":"true"})})]})]})}const Xn=o.div`
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
`,Zn=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Jn=o.div`
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
`;const Qn=o.button`
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
`;const Tr=o.span`
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
`,Rt=o.img`
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
`;const Fr=o.span`
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
`,Lr=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,es=o.span`
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
`;const ts=o(es)`
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
`;const tl=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,rl=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,al=o.span`
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
`,ol=o.div`
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
`,il=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,lr=W`
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
  ${lr};
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
`;const nl=o.button`
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
`,rs=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,je=o.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,Se=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,as=o.div`
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
`,sl=o.span`
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
`,cl=o.h1`
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
`,dl=o.p`
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
`,pr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(pr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(pr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(pr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const os=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,is=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,ll=o.h2`
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
`,pl=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,ns=o.span`
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
`;o(ns)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const ss=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ul=o(ss)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const cs=o(be)`
  ${lr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,ds=o(cs)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ml=o.button`
  ${lr};
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
`;o(os)`
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
`;o(Kt)`
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
`;const ls=o.nav`
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
`,ps=o.ul`
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
`,qt=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  [data-primary='true'] & {
    filter: none;
  }

  ${ve};

  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
  }
`,us=o(Kt)`
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

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${qt},
  &[aria-current='page'] ${qt} {
    ${Yt};
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
`;const ms=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&W`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,hs=o.button`
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
`,gs=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fs=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,ys=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Oa=W`
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
`,bs=o.button`
  ${Oa};
`,_r=o(be)`
  ${Oa};
`,xs=o.span`
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
`,ws=o.div`
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
`;const $s=o.div`
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
`,vs=o.div`
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
`,ks=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Ss=o.span`
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
`,js=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Cs=o.span`
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
`,As=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,zs=W`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Es=W`
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
`,Ba=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,Ir=o.div`
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
`,Nr=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,Ps=o.div`
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
`,Ce=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  /* Fondo apenas insinuado en reposo: el realce lo da la opción activa. */
  background: ${({theme:e})=>e.mode==="dark"?"rgba(92, 185, 201, 0.08)":"rgba(0, 71, 231, 0.08)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
  transition: color 160ms ease, background-color 160ms ease;

  ${ve};
`,qe=o(Kt)`
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

  /* El cian pleno queda para lo activo y para el hover: son las señales de
     interacción, no el estado de reposo de toda la lista. */
  &.active ${Ce},
  &[aria-current='page'] ${Ce} {
    ${Yt};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Ce} {
    ${Yt};
  }
`,Ke=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
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
`,Or=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Br=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${zs};
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
`,Ms=o.button`
  ${Es};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${en};
  ${ve};
`,Dr=o.div`
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
`,Rs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ts=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,Fs=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,Ls=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,Hr=o.button`
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
`,_s=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Is=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,Ns=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Os=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Bs=o.button`
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
`,Ds=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Hs=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Gs=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Ys=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,qs=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ks=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Vs=o.article`
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
`,Us=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Ws=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Xs=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Zs=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Js=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Qs=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,Tt="/LaFranciaGO/favicon.png",ec="Av. San Martín 123",Gr=3,Yr=420,tc=260,qr=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:nr,end:!0},{to:"/comercios",title:"Categorías",subtitle:"Navegá por rubros",icon:za},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Oe},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:ir},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:dr}],Kr=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Ee},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:Ia},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:cr},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:at}],rc=o.aside`
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
`,ac=o(Ba)`
  height: 100%;
`,Vr=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Ee,items:[{icon:at,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Oe,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Oe,items:[{icon:ot,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Ee,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:ot,items:[{icon:ir,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:at,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],oc=[{to:"/",label:"Inicio",icon:nr},{to:"/comercios",label:"Categorías",icon:za},{to:"/pedidos",label:"Mis pedidos",icon:Oe},{to:"/favoritos",label:"Favoritos",icon:ir},{to:"/mi-cuenta",label:"Cuenta",icon:dr}];function ic({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:n,toggleMode:c}=fi(),s=Za(),u=typeof r=="string"&&typeof a=="function",m=h.useRef(null),d=h.useRef(null),y=h.useRef(null),f=h.useRef(null),$=h.useRef(null),[w,k]=h.useState(!1),[j,S]=h.useState({id:"home",label:ec}),[R,E]=h.useState(!1),[F,T]=h.useState(!1),[L,V]=h.useState("opening"),[ae,J]=h.useState(!1),[q,le]=h.useState(!1),[oe,G]=h.useState("opening"),[ie,v]=h.useState(null),z=h.useCallback(()=>{E(!1),J(!1),v(null)},[]),se=h.useCallback(()=>{z(),E(!0)},[z]),ce=h.useCallback(()=>{if(R||F){z();return}se()},[z,F,R,se]),de=h.useCallback(()=>{z(),J(!0)},[z]),ke=h.useCallback(()=>{if(ae||q){z();return}de()},[z,q,ae,de]);h.useEffect(()=>{const p=document.body.style.overflow;return(R||F||ae||q)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=p}},[F,R,q,ae]),h.useLayoutEffect(()=>{const p=m.current;if(!p)return;const g=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${p.offsetHeight}px`)};g();const x=typeof ResizeObserver<"u"?new ResizeObserver(g):null;return x==null||x.observe(p),window.addEventListener("resize",g),()=>{x==null||x.disconnect(),window.removeEventListener("resize",g),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),h.useEffect(()=>{d.current!==null&&(window.cancelAnimationFrame(d.current),d.current=null),y.current!==null&&(window.clearTimeout(y.current),y.current=null);const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(R){if(T(!0),p){V("open");return}V("opening"),d.current=window.requestAnimationFrame(()=>{V("open"),d.current=null});return}if(F){if(p){T(!1),V("opening");return}V("closing"),y.current=window.setTimeout(()=>{T(!1),V("opening"),y.current=null},Yr)}},[F,R]),h.useEffect(()=>()=>{d.current!==null&&window.cancelAnimationFrame(d.current),y.current!==null&&window.clearTimeout(y.current),f.current!==null&&window.cancelAnimationFrame(f.current),$.current!==null&&window.clearTimeout($.current)},[]),h.useEffect(()=>{f.current!==null&&(window.cancelAnimationFrame(f.current),f.current=null),$.current!==null&&(window.clearTimeout($.current),$.current=null);const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(ae){if(le(!0),p){G("open");return}G("opening"),f.current=window.requestAnimationFrame(()=>{G("open"),f.current=null});return}if(q){if(p){le(!1),G("opening");return}G("closing"),$.current=window.setTimeout(()=>{le(!1),G("opening"),$.current=null},tc)}},[q,ae]);const ge=h.useCallback((p,g)=>{p.preventDefault(),z(),window.setTimeout(()=>{s(g)},Yr)},[z,s]),Q=h.useMemo(()=>Vr.find(p=>p.id===ie)??null,[ie]);return t.jsxs(Xn,{children:[t.jsx(Zn,{ref:m,children:t.jsx(ms,{children:t.jsx(Jn,{children:t.jsxs($s,{children:[t.jsxs(vs,{children:[t.jsx(Qn,{type:"button",onClick:ce,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":R||F,children:t.jsx(ji,{size:20,"aria-hidden":"true"})}),t.jsxs(ks,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Cs,{children:t.jsx(Rt,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsxs(Ss,{children:["LaFrancia",t.jsx(js,{children:"GO"})]})]})]}),u?t.jsx(As,{children:t.jsx(Na,{value:r,onChange:a})}):null,t.jsxs(ws,{"aria-label":"Acciones rápidas",children:[t.jsxs(hs,{type:"button","aria-label":`Entregar en ${j.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":w,onClick:()=>k(!0),children:[t.jsxs(ys,{children:[t.jsx(fs,{children:"Entregar en"}),t.jsx(gs,{children:j.label})]}),t.jsx(ki,{size:15,"aria-hidden":"true"})]}),t.jsxs(bs,{type:"button",onClick:ke,"aria-label":`Abrir notificaciones, ${Gr} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":ae||q,children:[t.jsx(at,{size:18,"aria-hidden":"true"}),t.jsx(xs,{children:Gr})]}),t.jsx(_r,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(Ri,{size:18,"aria-hidden":"true"})}),t.jsx(_r,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:t.jsx(dr,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(rc,{"aria-label":"Navegación principal",children:t.jsxs(ac,{children:[t.jsxs(Ir,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Tr,{children:t.jsx(Rt,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsxs(Nr,{children:[t.jsxs(Fr,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Lr,{children:"GO"})]}),t.jsx(ts,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(Ze,{children:[t.jsx(Je,{children:"NAVEGACIÓN"}),t.jsx(Xe,{"aria-label":"Navegación principal",children:qr.map(p=>{const g=p.icon;return t.jsxs(qe,{to:p.to,end:p.end,onClick:x=>ge(x,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsxs(Ze,{children:[t.jsx(Je,{children:"ACCIONES"}),t.jsx(Xe,{"aria-label":"Acciones rápidas",children:Kr.map(p=>{const g=p.icon;return t.jsxs(qe,{to:p.to,onClick:x=>ge(x,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(Or,{children:t.jsx(Rr,{isDarkMode:n,onToggle:c})})]})}),t.jsx(rs,{children:e}),t.jsx(ls,{"aria-label":"Navegación móvil",children:t.jsx(ps,{children:oc.map(p=>{const g=p.icon;return t.jsx("li",{children:t.jsxs(us,{to:p.to,"data-primary":p.to==="/pedidos",children:[t.jsx(qt,{children:t.jsx(g,{size:p.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:p.label})]})},p.to)})})}),F&&t.jsx(Dr,{"data-drawer":"true","data-state":L,role:"presentation",onClick:z,children:t.jsxs(Br,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":L,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:p=>p.stopPropagation(),children:[t.jsxs(Ps,{children:[t.jsxs(Ir,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Tr,{children:t.jsx(Rt,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsx(Nr,{children:t.jsxs(Fr,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Lr,{children:"GO"})]})})]}),t.jsx(Ms,{type:"button",onClick:z,"aria-label":"Cerrar menú",children:t.jsx(_a,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Ba,{children:[t.jsxs(Ze,{children:[t.jsx(Je,{children:"Navegación"}),t.jsx(Xe,{"aria-label":"Navegación principal",children:qr.map(p=>{const g=p.icon;return t.jsxs(qe,{to:p.to,end:p.end,onClick:x=>ge(x,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsxs(Ze,{children:[t.jsx(Je,{children:"Acciones"}),t.jsx(Xe,{"aria-label":"Acciones rápidas",children:Kr.map(p=>{const g=p.icon;return t.jsxs(qe,{to:p.to,onClick:x=>ge(x,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(g,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(We,{children:p.title}),t.jsx(Ve,{children:p.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsx(Or,{children:t.jsx(Rr,{isDarkMode:n,onToggle:c})})]})]})}),q&&t.jsx(Dr,{"data-notifications":"true","data-state":oe,role:"presentation",onClick:z,children:t.jsxs(Br,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":oe,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:p=>p.stopPropagation(),children:[t.jsxs(Ls,{children:[Q?t.jsx(Hr,{type:"button",onClick:()=>v(null),"aria-label":"Volver a las notificaciones",children:t.jsx(Sa,{size:14,"aria-hidden":"true"})}):t.jsx(Is,{"aria-hidden":"true"}),t.jsxs(Os,{children:[t.jsx(Ns,{id:"marketplace-notifications-title",children:(Q==null?void 0:Q.title)??"Notificaciones"}),t.jsx(_s,{children:(Q==null?void 0:Q.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(Hr,{type:"button",onClick:()=>{z(),s("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(Pi,{size:14,"aria-hidden":"true"})})]}),t.jsx(Fs,{}),t.jsx(Ts,{children:Q?t.jsx(Rs,{"aria-label":Q.title,children:Q.items.map(p=>{const g=p.icon;return t.jsxs(Vs,{children:[t.jsx(Xs,{"aria-hidden":"true",children:t.jsx(g,{size:14,"aria-hidden":"true"})}),t.jsxs(Us,{children:[t.jsxs(Qs,{children:[t.jsx(Js,{children:p.title}),t.jsx(Ws,{children:p.date})]}),t.jsx(Zs,{children:p.subtitle})]})]},`${Q.id}-${p.title}`)})}):t.jsx(Ks,{"aria-label":"Secciones de notificaciones",children:Vr.map(p=>{const g=p.icon;return t.jsxs(Bs,{type:"button",onClick:()=>v(p.id),children:[t.jsx(Hs,{"aria-hidden":"true",children:t.jsx(g,{size:14,"aria-hidden":"true"})}),t.jsxs(Ys,{children:[t.jsx(qs,{children:p.title}),t.jsx(Gs,{children:p.subtitle})]}),t.jsx(Ds,{"aria-hidden":"true",children:t.jsx(Fe,{size:16,"aria-hidden":"true"})})]},p.id)})})})]})}),t.jsx(Mn,{open:w,currentId:j.id,onClose:()=>k(!1),onSelect:(p,g)=>S({id:p,label:g})})]})}const ur=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,mr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Da=W`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${Da};
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
`;const Ha=o.div`
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
`;const nc=o.span`
  ${Da};
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
`;const sc="/LaFranciaGO/",cc=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),hr=e=>{const r=e&&cc.has(e)?e:"comercio";return`${sc}media/${r}.svg`},dc=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),lc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return r[a%r.length]},pc=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,uc=o.span`
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
`;function mc({id:e,name:r,to:a,priority:i}){return t.jsx(pc,{to:a,children:t.jsxs(ur,{$ratio:"1 / 1",children:[t.jsx(mr,{src:hr(e),alt:r,loading:i?"eager":"lazy"}),t.jsx(uc,{children:r})]})})}const hc=o.div`
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
`,gc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${ve};
`,fc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,yc=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,bc=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function xc({icon:e,title:r,text:a,ctaLabel:i,ctaTo:n,dashed:c}){return t.jsxs(hc,{"data-dashed":c?"true":"false",children:[t.jsx(gc,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(fc,{children:r}),a?t.jsx(yc,{children:a}):null,i&&n?t.jsx(bc,{children:t.jsx(ds,{to:n,children:i})}):null]})}const Ur=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),wc=e=>`${e.toFixed(1)} km`,Ga=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),$c=o(be)`
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
`,vc=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,kc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Sc=o.h3`
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
`,jc=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Cc=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Ac=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,zc=o.button`
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
`,Ec=o.span`
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
`;function Pc({name:e,store:r,price:a,oldPrice:i,categoryId:n,imageLabel:c,tag:s,to:u,onAdd:m,priority:d}){return t.jsxs($c,{to:u??"#",$static:!u,children:[t.jsxs(ur,{$ratio:"1 / 1",children:[t.jsx(mr,{src:hr(n),alt:c??e,loading:d?"eager":"lazy"}),s?t.jsx(Ha,{children:t.jsx(Ec,{children:s})}):null]}),t.jsxs(vc,{children:[r?t.jsx(kc,{children:r}):null,t.jsx(Sc,{children:e}),t.jsxs(jc,{children:[t.jsxs("div",{children:[t.jsx(Cc,{children:Ur(a)}),i?t.jsx(Ac,{children:Ur(i)}):null]}),m?t.jsx(zc,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:y=>{y.preventDefault(),y.stopPropagation(),m()},children:t.jsx(Pa,{size:18,"aria-hidden":"true"})}):null]})]})]})}const Mc=o(be)`
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
`,Rc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,Tc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Fc=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Lc=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,_c=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function Ic({to:e,title:r,text:a,icon:i,tone:n="brand"}){return t.jsxs(Mc,{to:e,"data-tone":n,children:[t.jsx(Rc,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(Tc,{children:[t.jsx(Fc,{children:r}),a?t.jsx(Lc,{children:a}):null]}),t.jsx(_c,{children:t.jsx(Fe,{size:18,"aria-hidden":"true"})})]})}const Nc=o(be)`
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
`,Oc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${ve};
`,Bc=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function Wr({to:e,label:r,icon:a}){return t.jsxs(Nc,{to:e,children:[t.jsx(Oc,{children:t.jsx(a,{size:18})}),t.jsx(Bc,{children:r}),t.jsx(Fe,{size:16,"aria-hidden":"true"})]})}const Dc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Hc=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Gc=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Yc=o.h2`
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
`,qc=o.span`
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
`,Kc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Vc=o(be)`
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
`;function Ft({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:n,seeAllLabel:c="Ver todos"}){return t.jsxs(Dc,{children:[t.jsxs(Hc,{children:[t.jsxs(Gc,{children:[t.jsx(Yc,{children:e}),r?t.jsxs(qc,{children:[a,r]}):null]}),n?t.jsxs(Vc,{to:n,children:[c,t.jsx(Fe,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(Kc,{children:i}):null]})}const Uc=o(be)`
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
`,Wc=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Xc=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Zc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qc=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Xr=o.span`
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
`,ed=o.span`
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
`,td=o.span`
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
`,rd=o.span`
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
`;function ad({id:e,name:r,category:a,categoryId:i,to:n,distanceKm:c,rating:s,openNow:u,premium:m,etaMin:d,etaMax:y,priority:f}){return t.jsxs(Uc,{to:n,children:[t.jsxs(ur,{$ratio:"16 / 9",children:[t.jsx(mr,{src:hr(i),alt:a,loading:f?"eager":"lazy"}),t.jsxs(Ha,{children:[u!==void 0?t.jsx(ed,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),m?t.jsx(rd,{children:"Destacado"}):null,s!==void 0?t.jsxs(td,{children:[t.jsx(Ti,{size:13,"aria-hidden":"true",fill:"currentColor"}),s.toFixed(1)]}):null]}),t.jsx(Wc,{children:t.jsx(nc,{$size:"2.75rem",$tone:lc(e),children:dc(r)})})]}),t.jsxs(Xc,{children:[t.jsx(Zc,{children:r}),t.jsxs(Jc,{children:[a,c!==void 0?` · ${wc(c)}`:""]}),t.jsxs(Qc,{children:[t.jsxs(Xr,{children:[t.jsx(wi,{size:14,"aria-hidden":"true"}),"Delivery"]}),d!==void 0&&y!==void 0?t.jsxs(Xr,{children:[t.jsx(Si,{size:14,"aria-hidden":"true"}),d,"-",y," min"]}):null]})]})]})}const od=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:Ra,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:Ea,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ca,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:ar,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:or,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ee,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Fa,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:sr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Ta,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:ja,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Aa,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Ma,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:La,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:cr,tone:"red"}],id=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",premium:!0,name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",premium:!0,name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],nd=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],hl=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],gl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:Ra},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ee},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ca},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:or},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:ar},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:Ea},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Fa},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:vi},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:sr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Ta},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:ja},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Aa},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Ma},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:La}],sd=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],cd=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Ya=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Ee,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:or,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:sr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:ar,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],fl=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:1,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:2,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,quantity:1,subtotal:2550,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:1,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,quantity:1,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,quantity:1,subtotal:2690,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],yl=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2}],bl=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],xl=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],wl=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],$l=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],vl=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],kl=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],Sl=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],jl=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:Fi},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:Ai},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:zi},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:Mi}],dd=e=>Ga(e),Lt=(e,...r)=>{const a=dd(e);return a?Ga(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},ld=e=>sd.find(r=>r.id===e),Cl=e=>Ya.find(r=>r.id===e),Al=e=>Ya.find(r=>r.name.toLowerCase()===e.toLowerCase()),zl=e=>{const r=cd.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((n,c)=>n.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=ld(e);if(a)return{kind:"offer",offer:a}},pd=5,ud=.7,Zr=e=>Math.floor(e/ud),Jr=e=>e.premium&&e.distanceKm<=pd?0:1,Be=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,qa=(e,r)=>{const a=Be(e,r);if(a!==0)return a;const i=Zr(e.distanceKm)-Zr(r.distanceKm);if(i!==0)return i;const n=Jr(e)-Jr(r);if(n!==0)return n;const c=e.distanceKm-r.distanceKm;return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},md=(e,r)=>Be(e,r)||e.distanceKm-r.distanceKm,hd=(e,r)=>Be(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),gd=(e,r)=>Be(e,r)||(r.rating??0)-(e.rating??0),fd=(e,r)=>Be(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),yd={relevancia:qa,cercania:md,precio:hd,puntuacion:gd,entrega:fd};function Qr(e,r="relevancia"){return[...e].sort(yd[r]??qa)}const El=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],bd=o.div`
  position: relative;
  min-width: 0;
`,xd=o.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`,ea=o.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  /* Sombra corta y centrada: la del token tiene 12px de desplazamiento y en
     un botón de 28px se derrama hacia abajo como una mancha cuadrada. */
  box-shadow: 0 1px 4px rgba(5, 8, 22, 0.18);
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 180ms ease, transform 180ms ease;

  ${ve};

  /* Área táctil cómoda sin agrandar el círculo. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }

  &[data-side='left'] {
    left: -0.35rem;
  }

  &[data-side='right'] {
    right: -0.35rem;
  }

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,ta=4,wd=6;function _t({children:e,className:r,as:a,...i}){const n=h.useRef(null),[c,s]=h.useState(!1),[u,m]=h.useState(!1),d=h.useCallback(()=>{const $=n.current;if(!$)return;const{scrollLeft:w,scrollWidth:k,clientWidth:j}=$;s(w>ta),m(w+j<k-ta)},[]);h.useLayoutEffect(()=>{d()},[d,e]),h.useEffect(()=>{var k;const $=n.current;if(!$)return;const w=((k=window.matchMedia)==null?void 0:k.call(window,"(pointer: fine)").matches)??!1;$.style.cursor=w&&(c||u)?"grab":""},[c,u]),h.useEffect(()=>{var k;const $=n.current;if(!$)return;$.addEventListener("scroll",d,{passive:!0}),$.addEventListener("scrollend",d,{passive:!0});const w=typeof ResizeObserver<"u"?new ResizeObserver(d):null;return w==null||w.observe($),Array.from($.children).forEach(j=>w==null?void 0:w.observe(j)),(k=document.fonts)==null||k.ready.then(d).catch(()=>{}),()=>{$.removeEventListener("scroll",d),$.removeEventListener("scrollend",d),w==null||w.disconnect()}},[d]);const y=$=>{if($.pointerType!=="mouse"||$.button!==0)return;const w=n.current;if(!w)return;const k=$.clientX,j=w.scrollLeft;let S=!1;const R=T=>T.preventDefault();w.addEventListener("dragstart",R);const E=T=>{const L=T.clientX-k;if(!S){if(Math.abs(L)<wd)return;S=!0,w.style.scrollBehavior="auto",w.style.cursor="grabbing",w.style.userSelect="none"}w.scrollLeft=j-L},F=()=>{if(document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",F),document.removeEventListener("pointercancel",F),w.removeEventListener("dragstart",R),w.style.scrollBehavior="",w.style.cursor="",w.style.userSelect="",S){const T=L=>{L.stopPropagation(),L.preventDefault()};w.addEventListener("click",T,{capture:!0,once:!0}),window.setTimeout(()=>w.removeEventListener("click",T,{capture:!0}),0)}d()};document.addEventListener("pointermove",E),document.addEventListener("pointerup",F),document.addEventListener("pointercancel",F)},f=$=>{const w=n.current;w&&(w.scrollBy({left:$*w.clientWidth*.7,behavior:"smooth"}),window.setTimeout(d,420))};return t.jsxs(bd,{className:r,children:[c?t.jsx(ea,{type:"button","data-side":"left",onClick:()=>f(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(Sa,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:n,onPointerDown:y,...i,children:e}):t.jsx(xd,{ref:n,onPointerDown:y,...i,children:e}),u?t.jsx(ea,{type:"button","data-side":"right",onClick:()=>f(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Fe,{size:16,"aria-hidden":"true"})}):null]})}const Ka="lafranciago:orden",$d=["relevancia","cercania","precio","puntuacion","entrega"],vd=()=>{try{const e=window.localStorage.getItem(Ka);return $d.includes(e)?e:"relevancia"}catch{return"relevancia"}};function kd(){const[e,r]=h.useState("relevancia");h.useEffect(()=>{r(vd())},[]);const a=h.useCallback(i=>{r(i);try{window.localStorage.setItem(Ka,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const Sd=o(be)`
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

  /* En escritorio el bloque se centra: el ancho completo dejaba el texto
     perdido a la izquierda de una franja muy larga. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[4]};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,jd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,Cd=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,Ad=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,zd=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Ed=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Va=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Md=o.div`
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
`;const Pl=o.div`
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
`;const Ml=o.div`
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
`;const Rl=o(je)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(as)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const Tl=o(Va)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Pd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Md)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(is)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const gr=o.div`
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
`,Rd=o(gr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Td=o(gr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Fd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ld=o.section`
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
`;const Fl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,_d=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`;function Id(){const[e,r]=h.useState(""),{sortMode:a}=kd(),i=e.trim(),n=i.length>0,c=h.useMemo(()=>od.filter(d=>Lt(i,d.name)),[i]),s=h.useMemo(()=>Qr(id.filter(d=>Lt(i,d.name,d.category,d.address)),a),[i,a]),u=h.useMemo(()=>Qr(nd.filter(d=>Lt(i,d.product,d.store)),a),[i,a]),m=c.length>0||s.length>0||u.length>0;return t.jsxs(ic,{query:e,onQueryChange:r,children:[t.jsx(Ld,{children:t.jsx(Se,{children:t.jsx(Na,{value:e,onChange:r})})}),t.jsx(je,{children:t.jsx(Se,{children:t.jsxs(Sd,{to:"/mandado",children:[t.jsx(jd,{children:t.jsx(Oe,{size:22,"aria-hidden":"true"})}),t.jsxs(Cd,{children:[t.jsx(Ad,{children:"¿Necesitás algún mandado?"}),t.jsx(zd,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(Ed,{children:t.jsx(Fe,{size:18,"aria-hidden":"true"})})]})})}),n&&!m?t.jsx(je,{children:t.jsx(Se,{children:t.jsx(xc,{icon:Ei,title:"Sin resultados",text:`No encontramos nada para "${i}". Probá con otra palabra.`,dashed:!0})})}):null,c.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Ft,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/comercios"}),t.jsx(_t,{as:Td,"aria-label":"Categorías",children:c.map((d,y)=>t.jsx(mc,{id:d.id,name:d.name,to:`/comercios?rubro=${d.id}`,priority:y<5},d.id))})]})}):null,u.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Ft,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(_t,{as:gr,"aria-label":"Productos destacados",children:u.map((d,y)=>t.jsx(Pc,{name:d.product,store:d.store,price:d.price,oldPrice:d.oldPrice,categoryId:d.categoryId,imageLabel:d.imageLabel,tag:d.discount>0?`-${d.discount}%`:void 0,to:d.href,priority:y<3},d.id))})]})}):null,s.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Ft,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(_t,{as:Rd,"aria-label":"Negocios destacados",children:s.map((d,y)=>t.jsx(ad,{id:d.id,name:d.name,category:d.category,categoryId:d.categoryId,to:d.href,distanceKm:d.distanceKm,rating:d.rating,openNow:d.openNow,premium:d.premium,etaMin:d.etaMin,etaMax:d.etaMax,priority:y<2},d.id))})]})}):null,n?null:t.jsx(je,{children:t.jsx(Se,{children:t.jsx(Va,{children:t.jsxs(Fd,{children:[t.jsx(Ic,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Ee,tone:"brand"}),t.jsxs(_d,{children:[t.jsx(Wr,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:Ia}),t.jsx(Wr,{to:"/registro/fletero",label:"Sumate como Fletero",icon:cr})]})]})})})})]})}const Nd=h.lazy(()=>X(()=>import("./StoresDirectoryScreen-2nNsg4NE.js"),__vite__mapDeps([3,1])).then(e=>({default:e.StoresDirectoryScreen}))),Od=h.lazy(()=>X(()=>import("./StoreProfileScreen-BBTyJg_i.js"),__vite__mapDeps([4,1,5,6])).then(e=>({default:e.StoreProfileScreen}))),Bd=h.lazy(()=>X(()=>import("./ProductDetailScreen-DGUBqpb8.js"),__vite__mapDeps([7,1,8])).then(e=>({default:e.ProductDetailScreen}))),Dd=h.lazy(()=>X(()=>import("./MyOrdersScreen-DHi-MfIL.js"),__vite__mapDeps([9,1,6])).then(e=>({default:e.MyOrdersScreen}))),Hd=h.lazy(()=>X(()=>import("./CartScreen-D96WJzDy.js"),__vite__mapDeps([10,1,5,11,6])).then(e=>({default:e.CartScreen}))),Gd=h.lazy(()=>X(()=>import("./ErrandScreen-OXDf0-JH.js"),__vite__mapDeps([12,1,13,11])).then(e=>({default:e.ErrandScreen}))),Yd=h.lazy(()=>X(()=>import("./ErrandChatScreen-BC-RS2VF.js"),__vite__mapDeps([14,1,15,13])).then(e=>({default:e.ErrandChatScreen}))),qd=h.lazy(()=>X(()=>import("./FavoritesScreen-9X4b49el.js"),__vite__mapDeps([16,1])).then(e=>({default:e.FavoritesScreen}))),Kd=h.lazy(()=>X(()=>import("./NotificationsScreen-B61IOdeK.js"),__vite__mapDeps([17,1,18])).then(e=>({default:e.NotificationsScreen}))),Vd=h.lazy(()=>X(()=>import("./CustomerAccountScreen-CIwqOTG8.js"),__vite__mapDeps([19,8,1,20,11])).then(e=>({default:e.CustomerAccountScreen}))),Ud=h.lazy(()=>X(()=>import("./CommerceRegistrationScreen-DQ9fTIEx.js"),__vite__mapDeps([21,22,1,15,20,11])).then(e=>({default:e.CommerceRegistrationScreen}))),ra=h.lazy(()=>X(()=>import("./DeliveryRegistrationScreen-C5Ps_oRz.js"),__vite__mapDeps([23,22,1,15,11,20])).then(e=>({default:e.DeliveryRegistrationScreen}))),Wd=h.lazy(()=>X(()=>import("./CommercePanelScreen-BRd_EJ7j.js"),__vite__mapDeps([24,25,8,1,18])).then(e=>({default:e.CommercePanelScreen}))),Xd=h.lazy(()=>X(()=>import("./ProductFormScreen-B_7slptP.js"),__vite__mapDeps([26,1,15])).then(e=>({default:e.ProductFormScreen}))),Zd=h.lazy(()=>X(()=>import("./DeliveryPanelScreen-CzNoWb85.js"),__vite__mapDeps([27,25,8,1])).then(e=>({default:e.DeliveryPanelScreen}))),Jd=h.lazy(()=>X(()=>import("./AdminPanelScreen-CFs3O-EP.js"),__vite__mapDeps([28,25,8,1])).then(e=>({default:e.AdminPanelScreen})));function Qd(){return t.jsx(Ja,{children:t.jsx(gi,{children:t.jsx(h.Suspense,{fallback:null,children:t.jsxs(Qa,{children:[t.jsx(U,{path:"/",element:t.jsx(Id,{})}),t.jsx(U,{path:"/comercios",element:t.jsx(Nd,{})}),t.jsx(U,{path:"/comercios/:storeId",element:t.jsx(Od,{})}),t.jsx(U,{path:"/productos/:productId",element:t.jsx(Bd,{})}),t.jsx(U,{path:"/pedidos",element:t.jsx(Dd,{})}),t.jsx(U,{path:"/carrito",element:t.jsx(Hd,{})}),t.jsx(U,{path:"/mandado",element:t.jsx(Gd,{})}),t.jsx(U,{path:"/mandado/chat",element:t.jsx(Yd,{})}),t.jsx(U,{path:"/favoritos",element:t.jsx(qd,{})}),t.jsx(U,{path:"/notificaciones",element:t.jsx(Kd,{})}),t.jsx(U,{path:"/registro/comercio",element:t.jsx(Ud,{})}),t.jsx(U,{path:"/trabaja-con-nosotros",element:t.jsx(ra,{})}),t.jsx(U,{path:"/registro/fletero",element:t.jsx(ra,{role:"fletero"})}),t.jsx(U,{path:"/registro/delivery",element:t.jsx(fr,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(U,{path:"/mi-cuenta",element:t.jsx(Vd,{})}),t.jsx(U,{path:"/panel/comercio",element:t.jsx(Wd,{})}),t.jsx(U,{path:"/panel/comercio/producto",element:t.jsx(Xd,{})}),t.jsx(U,{path:"/panel/repartidor",element:t.jsx(Zd,{})}),t.jsx(U,{path:"/panel/admin",element:t.jsx(Jd,{})}),t.jsx(U,{path:"*",element:t.jsx(fr,{to:"/",replace:!0})})]})})})})}co({immediate:!0});const Ua=document.getElementById("root");if(!Ua)throw new Error("No se encontró el nodo root");It.createRoot(Ua).render(t.jsx(Pe.StrictMode,{children:t.jsx(Qd,{})}));export{cd as $,nc as A,lc as B,Rl as C,wc as D,xc as E,nl as F,ot as G,W as H,Cl as I,je as J,tl as K,rl as L,ic as M,al as N,ol as O,Pl as P,Ht as Q,il as R,Ld as S,Va as T,gr as U,Ri as V,os as W,pl as X,zl as Y,ld as Z,sd as _,Se as a,Al as a0,Ee as a1,ds as a2,cs as a3,Oe as a4,Fe as a5,yl as a6,Fl as a7,C as a8,en as a9,wl as aA,$l as aB,Fi as aC,Pi as aD,vl as aE,kl as aF,zi as aG,Sl as aH,jl as aI,Ct as aa,is as ab,ve as ac,fl as ad,cl as ae,cr as af,_a as ag,sl as ah,ll as ai,ul as aj,Di as ak,wi as al,ir as am,bl as an,at as ao,dr as ap,Ia as aq,Tl as ar,dl as as,za as at,Md as au,ns as av,ml as aw,Pd as ax,Ml as ay,xl as az,Na as b,gl as c,_t as d,hl as e,Ft as f,Td as g,mc as h,El as i,t as j,ad as k,Ei as l,Lt as m,ur as n,mr as o,hr as p,o as q,Qr as r,Ya as s,Ha as t,kd as u,Ur as v,Pa as w,$i as x,Ti as y,dc as z};
