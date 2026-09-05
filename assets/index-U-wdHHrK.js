const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-BvMCqzNp.js","assets/react-B1kPYQQd.js","assets/AddressMap-CIGW-MKW.css","assets/CategoriesScreen-C9R5J2B1.js","assets/StoresDirectoryScreen-BNIzpbd6.js","assets/StoreProfileScreen-DszVFt-f.js","assets/saleUnits-CLP-TCsg.js","assets/minus-riE2fFkx.js","assets/clock-3-BJTd4rij.js","assets/ProductDetailScreen-D3YcTBMG.js","assets/SettingsList-CQGL94ht.js","assets/MyOrdersScreen-B-bL5rCi.js","assets/ordersStore-DCNwIyzn.js","assets/CartScreen-C0Y163-D.js","assets/shield-check-BOWF6chM.js","assets/ErrandScreen-DITGG9gn.js","assets/errandStore-2j2J0oQl.js","assets/ErrandChatScreen-BnjiwS1n.js","assets/mediaService-D2_VAu2k.js","assets/camera-BACIeZTg.js","assets/FavoritesScreen-6jMd1e4z.js","assets/NotificationsScreen-BCfZa4h3.js","assets/badge-percent-DZDc7vg8.js","assets/CustomerAccountScreen-BnLs-c8k.js","assets/phone-De7Y2D0k.js","assets/CommerceRegistrationScreen-Djk4IomY.js","assets/formStyles-Bk52sIjc.js","assets/DeliveryRegistrationScreen-Biz5a-fl.js","assets/CommercePanelScreen-BKyLf_mv.js","assets/MetricTile-Bq8uLIcw.js","assets/ProductFormScreen-DB8z22Aj.js","assets/DeliveryPanelScreen-ohCnZ4nV.js","assets/AdminPanelScreen-hGPjvy_a.js"])))=>i.map(i=>d[i]);
import{r as m,a as to,g as ro,R as Pe,L as fe,N as Xt,u as ao,H as oo,b as io,c as te,d as wr}from"./react-B1kPYQQd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();var ca={exports:{}},lt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=m,so=Symbol.for("react.element"),co=Symbol.for("react.fragment"),lo=Object.prototype.hasOwnProperty,po=no.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uo={key:!0,ref:!0,__self:!0,__source:!0};function la(e,r,a){var i,n={},c=null,l=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(l=r.ref);for(i in r)lo.call(r,i)&&!uo.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:so,type:e,key:c,ref:l,props:n,_owner:po.current}}lt.Fragment=co;lt.jsx=la;lt.jsxs=la;ca.exports=lt;var t=ca.exports,Dt={},$r=to;Dt.createRoot=$r.createRoot,Dt.hydrateRoot=$r.hydrateRoot;const mo="modulepreload",go=function(e){return"/LaFranciaGO/"+e},vr={},oe=function(r,a,i){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.allSettled(a.map(g=>{if(g=go(g),g in vr)return;vr[g]=!0;const d=g.endsWith(".css"),b=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${b}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":mo,d||(h.as="script"),h.crossOrigin="",h.href=g,u&&h.setAttribute("nonce",u),document.head.appendChild(h),d)return new Promise((E,L)=>{h.addEventListener("load",E),h.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${g}`)))})}))}function c(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&c(u.reason);return r().catch(c)})};function ho(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:n,onRegisteredSW:c,onRegisterError:l}=e;let u,g;const d=async(h=!0)=>{await g};async function b(){if("serviceWorker"in navigator){if(u=await oe(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(h=>{l==null||l(h)}),!u)return;u.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),u.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),u.register({immediate:r}).then(h=>{c?c("/LaFranciaGO/sw.js",h):n==null||n(h)}).catch(h=>{l==null||l(h)})}}return g=b(),d}var da={exports:{}},K={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.transitional.element"),Jt=Symbol.for("react.portal"),dt=Symbol.for("react.fragment"),pt=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),mt=Symbol.for("react.consumer"),gt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),yt=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),fo=Symbol.for("react.view_transition"),yo=Symbol.for("react.client.reference");function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Zt:switch(e=e.type,e){case dt:case ut:case pt:case ft:case yt:case fo:return e;default:switch(e=e&&e.$$typeof,e){case gt:case ht:case xt:case bt:return e;case mt:return e;default:return r}}case Jt:return r}}}K.ContextConsumer=mt;K.ContextProvider=gt;K.Element=Zt;K.ForwardRef=ht;K.Fragment=dt;K.Lazy=xt;K.Memo=bt;K.Portal=Jt;K.Profiler=ut;K.StrictMode=pt;K.Suspense=ft;K.SuspenseList=yt;K.isContextConsumer=function(e){return me(e)===mt};K.isContextProvider=function(e){return me(e)===gt};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt};K.isForwardRef=function(e){return me(e)===ht};K.isFragment=function(e){return me(e)===dt};K.isLazy=function(e){return me(e)===xt};K.isMemo=function(e){return me(e)===bt};K.isPortal=function(e){return me(e)===Jt};K.isProfiler=function(e){return me(e)===ut};K.isStrictMode=function(e){return me(e)===pt};K.isSuspense=function(e){return me(e)===ft};K.isSuspenseList=function(e){return me(e)===yt};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dt||e===ut||e===pt||e===ft||e===yt||typeof e=="object"&&e!==null&&(e.$$typeof===xt||e.$$typeof===bt||e.$$typeof===gt||e.$$typeof===mt||e.$$typeof===ht||e.$$typeof===yo||e.getModuleId!==void 0)};K.typeOf=me;da.exports=K;var pa=da.exports;function bo(e){function r(S,v,x,p,s){for(var j=0,y=0,q=0,O=0,B,P,ae=0,le=0,N,de=N=B=0,D=0,se=0,Fe=0,ce=0,qe=x.length,Te=qe-1,ge,M="",ee="",Mt="",Rt="",we;D<qe;){if(P=x.charCodeAt(D),D===Te&&y+O+q+j!==0&&(y!==0&&(P=y===47?10:47),O=q=j=0,qe++,Te++),y+O+q+j===0){if(D===Te&&(0<se&&(M=M.replace(E,"")),0<M.trim().length)){switch(P){case 32:case 9:case 59:case 13:case 10:break;default:M+=x.charAt(D)}P=59}switch(P){case 123:for(M=M.trim(),B=M.charCodeAt(0),N=1,ce=++D;D<qe;){switch(P=x.charCodeAt(D)){case 123:N++;break;case 125:N--;break;case 47:switch(P=x.charCodeAt(D+1)){case 42:case 47:e:{for(de=D+1;de<Te;++de)switch(x.charCodeAt(de)){case 47:if(P===42&&x.charCodeAt(de-1)===42&&D+2!==de){D=de+1;break e}break;case 10:if(P===47){D=de+1;break e}}D=de}}break;case 91:P++;case 40:P++;case 34:case 39:for(;D++<Te&&x.charCodeAt(D)!==P;);}if(N===0)break;D++}switch(N=x.substring(ce,D),B===0&&(B=(M=M.replace(h,"").trim()).charCodeAt(0)),B){case 64:switch(0<se&&(M=M.replace(E,"")),P=M.charCodeAt(1),P){case 100:case 109:case 115:case 45:se=v;break;default:se=Z}if(N=r(v,se,N,P,s+1),ce=N.length,0<H&&(se=a(Z,M,Fe),we=u(3,N,se,v,Q,_,ce,P,s,p),M=se.join(""),we!==void 0&&(ce=(N=we.trim()).length)===0&&(P=0,N="")),0<ce)switch(P){case 115:M=M.replace(T,l);case 100:case 109:case 45:N=M+"{"+N+"}";break;case 107:M=M.replace($,"$1 $2"),N=M+"{"+N+"}",N=k===1||k===2&&c("@"+N,3)?"@-webkit-"+N+"@"+N:"@"+N;break;default:N=M+N,p===112&&(N=(ee+=N,""))}else N="";break;default:N=r(v,a(v,M,Fe),N,p,s+1)}Mt+=N,N=Fe=se=de=B=0,M="",P=x.charCodeAt(++D);break;case 125:case 59:if(M=(0<se?M.replace(E,""):M).trim(),1<(ce=M.length))switch(de===0&&(B=M.charCodeAt(0),B===45||96<B&&123>B)&&(ce=(M=M.replace(" ",":")).length),0<H&&(we=u(1,M,v,S,Q,_,ee.length,p,s,p))!==void 0&&(ce=(M=we.trim()).length)===0&&(M="\0\0"),B=M.charCodeAt(0),P=M.charCodeAt(1),B){case 0:break;case 64:if(P===105||P===99){Rt+=M+x.charAt(D);break}default:M.charCodeAt(ce-1)!==58&&(ee+=n(M,B,P,M.charCodeAt(2)))}Fe=se=de=B=0,M="",P=x.charCodeAt(++D)}}switch(P){case 13:case 10:y===47?y=0:1+B===0&&p!==107&&0<M.length&&(se=1,M+="\0"),0<H*be&&u(0,M,v,S,Q,_,ee.length,p,s,p),_=1,Q++;break;case 59:case 125:if(y+O+q+j===0){_++;break}default:switch(_++,ge=x.charAt(D),P){case 9:case 32:if(O+j+y===0)switch(ae){case 44:case 58:case 9:case 32:ge="";break;default:P!==32&&(ge=" ")}break;case 0:ge="\\0";break;case 12:ge="\\f";break;case 11:ge="\\v";break;case 38:O+y+j===0&&(se=Fe=1,ge="\f"+ge);break;case 108:if(O+y+j+ie===0&&0<de)switch(D-de){case 2:ae===112&&x.charCodeAt(D-3)===58&&(ie=ae);case 8:le===111&&(ie=le)}break;case 58:O+y+j===0&&(de=D);break;case 44:y+q+O+j===0&&(se=1,ge+="\r");break;case 34:case 39:y===0&&(O=O===P?0:O===0?P:O);break;case 91:O+y+q===0&&j++;break;case 93:O+y+q===0&&j--;break;case 41:O+y+j===0&&q--;break;case 40:if(O+y+j===0){if(B===0)switch(2*ae+3*le){case 533:break;default:B=1}q++}break;case 64:y+q+O+j+de+N===0&&(N=1);break;case 42:case 47:if(!(0<O+j+q))switch(y){case 0:switch(2*P+3*x.charCodeAt(D+1)){case 235:y=47;break;case 220:ce=D,y=42}break;case 42:P===47&&ae===42&&ce+2!==D&&(x.charCodeAt(ce+2)===33&&(ee+=x.substring(ce,D+1)),ge="",y=0)}}y===0&&(M+=ge)}le=ae,ae=P,D++}if(ce=ee.length,0<ce){if(se=v,0<H&&(we=u(2,ee,se,S,Q,_,ce,p,s,p),we!==void 0&&(ee=we).length===0))return Rt+ee+Mt;if(ee=se.join(",")+"{"+ee+"}",k*ie!==0){switch(k!==2||c(ee,2)||(ie=0),ie){case 111:ee=ee.replace(A,":-moz-$1")+ee;break;case 112:ee=ee.replace(F,"::-webkit-input-$1")+ee.replace(F,"::-moz-$1")+ee.replace(F,":-ms-input-$1")+ee}ie=0}}return Rt+ee+Mt}function a(S,v,x){var p=v.trim().split(f);v=p;var s=p.length,j=S.length;switch(j){case 0:case 1:var y=0;for(S=j===0?"":S[0]+" ";y<s;++y)v[y]=i(S,v[y],x).trim();break;default:var q=y=0;for(v=[];y<s;++y)for(var O=0;O<j;++O)v[q++]=i(S[O]+" ",p[y],x).trim()}return v}function i(S,v,x){var p=v.charCodeAt(0);switch(33>p&&(p=(v=v.trim()).charCodeAt(0)),p){case 38:return v.replace(w,"$1"+S.trim());case 58:return S.trim()+v.replace(w,"$1"+S.trim());default:if(0<1*x&&0<v.indexOf("\f"))return v.replace(w,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+v}function n(S,v,x,p){var s=S+";",j=2*v+3*x+4*p;if(j===944){S=s.indexOf(":",9)+1;var y=s.substring(S,s.length-1).trim();return y=s.substring(0,S).trim()+y+";",k===1||k===2&&c(y,1)?"-webkit-"+y+y:y}if(k===0||k===2&&!c(s,1))return s;switch(j){case 1015:return s.charCodeAt(10)===97?"-webkit-"+s+s:s;case 951:return s.charCodeAt(3)===116?"-webkit-"+s+s:s;case 963:return s.charCodeAt(5)===110?"-webkit-"+s+s:s;case 1009:if(s.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(s.charCodeAt(8)===45)return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(X,"$1-webkit-$2")+s;break;case 932:if(s.charCodeAt(4)===45)switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(s.charCodeAt(8)!==99)break;return y=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+y+"-webkit-"+s+"-ms-flex-pack"+y+s;case 1005:return C.test(s)?s.replace(L,":-webkit-")+s.replace(L,":-moz-")+s:s;case 1e3:switch(y=s.substring(13).trim(),v=y.indexOf("-")+1,y.charCodeAt(0)+y.charCodeAt(v)){case 226:y=s.replace(I,"tb");break;case 232:y=s.replace(I,"tb-rl");break;case 220:y=s.replace(I,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+y+s;case 1017:if(s.indexOf("sticky",9)===-1)break;case 975:switch(v=(s=S).length-10,y=(s.charCodeAt(v)===33?s.substring(0,v):s).substring(S.indexOf(":",7)+1).trim(),j=y.charCodeAt(0)+(y.charCodeAt(7)|0)){case 203:if(111>y.charCodeAt(8))break;case 115:s=s.replace(y,"-webkit-"+y)+";"+s;break;case 207:case 102:s=s.replace(y,"-webkit-"+(102<j?"inline-":"")+"box")+";"+s.replace(y,"-webkit-"+y)+";"+s.replace(y,"-ms-"+y+"box")+";"+s}return s+";";case 938:if(s.charCodeAt(5)===45)switch(s.charCodeAt(6)){case 105:return y=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+y+"-ms-flex-"+y+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(U,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(U,"")+s}break;case 973:case 989:if(s.charCodeAt(3)!==45||s.charCodeAt(4)===122)break;case 931:case 953:if(V.test(S)===!0)return(y=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?n(S.replace("stretch","fill-available"),v,x,p).replace(":fill-available",":stretch"):s.replace(y,"-webkit-"+y)+s.replace(y,"-moz-"+y.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(s.charCodeAt(5)===102?"-ms-"+s:"")+s,x+p===211&&s.charCodeAt(13)===105&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(R,"$1-webkit-$2")+s}return s}function c(S,v){var x=S.indexOf(v===1?":":"{"),p=S.substring(0,v!==3?x:10);return x=S.substring(x+1,S.length-1),ye(v!==2?p:p.replace(Y,"$1"),x,v)}function l(S,v){var x=n(v,v.charCodeAt(0),v.charCodeAt(1),v.charCodeAt(2));return x!==v+";"?x.replace(W," or ($1)").substring(4):"("+v+")"}function u(S,v,x,p,s,j,y,q,O,B){for(var P=0,ae=v,le;P<H;++P)switch(le=J[P].call(b,S,ae,x,p,s,j,y,q,O,B)){case void 0:case!1:case!0:case null:break;default:ae=le}if(ae!==v)return ae}function g(S){switch(S){case void 0:case null:H=J.length=0;break;default:if(typeof S=="function")J[H++]=S;else if(typeof S=="object")for(var v=0,x=S.length;v<x;++v)g(S[v]);else be=!!S|0}return g}function d(S){return S=S.prefix,S!==void 0&&(ye=null,S?typeof S!="function"?k=1:(k=2,ye=S):k=0),d}function b(S,v){var x=S;if(33>x.charCodeAt(0)&&(x=x.trim()),xe=x,x=[xe],0<H){var p=u(-1,v,x,x,Q,_,0,0,0,0);p!==void 0&&typeof p=="string"&&(v=p)}var s=r(Z,x,v,0,0);return 0<H&&(p=u(-2,s,x,x,Q,_,s.length,0,0,0),p!==void 0&&(s=p)),xe="",ie=0,_=Q=1,s}var h=/^\0+/g,E=/[\0\r\f]/g,L=/: */g,C=/zoo|gra/,R=/([,: ])(transform)/g,f=/,\r+?/g,w=/([\t\r\n ])*\f?&/g,$=/@(k\w+)\s*(\S*)\s*/,F=/::(place)/g,A=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,W=/([\s\S]*?);/g,U=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,_=1,Q=1,ie=0,k=1,Z=[],J=[],H=0,ye=null,be=0,xe="";return b.use=g,b.set=d,e!==void 0&&d(e),b}var xo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function wo(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var $o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,kr=wo(function(e){return $o.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ua={exports:{}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=typeof Symbol=="function"&&Symbol.for,Qt=ne?Symbol.for("react.element"):60103,er=ne?Symbol.for("react.portal"):60106,wt=ne?Symbol.for("react.fragment"):60107,$t=ne?Symbol.for("react.strict_mode"):60108,vt=ne?Symbol.for("react.profiler"):60114,kt=ne?Symbol.for("react.provider"):60109,St=ne?Symbol.for("react.context"):60110,tr=ne?Symbol.for("react.async_mode"):60111,jt=ne?Symbol.for("react.concurrent_mode"):60111,Ct=ne?Symbol.for("react.forward_ref"):60112,At=ne?Symbol.for("react.suspense"):60113,vo=ne?Symbol.for("react.suspense_list"):60120,zt=ne?Symbol.for("react.memo"):60115,Et=ne?Symbol.for("react.lazy"):60116,ko=ne?Symbol.for("react.block"):60121,So=ne?Symbol.for("react.fundamental"):60117,jo=ne?Symbol.for("react.responder"):60118,Co=ne?Symbol.for("react.scope"):60119;function pe(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Qt:switch(e=e.type,e){case tr:case jt:case wt:case vt:case $t:case At:return e;default:switch(e=e&&e.$$typeof,e){case St:case Ct:case Et:case zt:case kt:return e;default:return r}}case er:return r}}}function ma(e){return pe(e)===jt}G.AsyncMode=tr;G.ConcurrentMode=jt;G.ContextConsumer=St;G.ContextProvider=kt;G.Element=Qt;G.ForwardRef=Ct;G.Fragment=wt;G.Lazy=Et;G.Memo=zt;G.Portal=er;G.Profiler=vt;G.StrictMode=$t;G.Suspense=At;G.isAsyncMode=function(e){return ma(e)||pe(e)===tr};G.isConcurrentMode=ma;G.isContextConsumer=function(e){return pe(e)===St};G.isContextProvider=function(e){return pe(e)===kt};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qt};G.isForwardRef=function(e){return pe(e)===Ct};G.isFragment=function(e){return pe(e)===wt};G.isLazy=function(e){return pe(e)===Et};G.isMemo=function(e){return pe(e)===zt};G.isPortal=function(e){return pe(e)===er};G.isProfiler=function(e){return pe(e)===vt};G.isStrictMode=function(e){return pe(e)===$t};G.isSuspense=function(e){return pe(e)===At};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wt||e===jt||e===vt||e===$t||e===At||e===vo||typeof e=="object"&&e!==null&&(e.$$typeof===Et||e.$$typeof===zt||e.$$typeof===kt||e.$$typeof===St||e.$$typeof===Ct||e.$$typeof===So||e.$$typeof===jo||e.$$typeof===Co||e.$$typeof===ko)};G.typeOf=pe;ua.exports=G;var Ao=ua.exports,rr=Ao,zo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Eo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Po={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ga={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ar={};ar[rr.ForwardRef]=Po;ar[rr.Memo]=ga;function Sr(e){return rr.isMemo(e)?ga:ar[e.$$typeof]||zo}var Mo=Object.defineProperty,Ro=Object.getOwnPropertyNames,jr=Object.getOwnPropertySymbols,Io=Object.getOwnPropertyDescriptor,Lo=Object.getPrototypeOf,Cr=Object.prototype;function ha(e,r,a){if(typeof r!="string"){if(Cr){var i=Lo(r);i&&i!==Cr&&ha(e,i,a)}var n=Ro(r);jr&&(n=n.concat(jr(r)));for(var c=Sr(e),l=Sr(r),u=0;u<n.length;++u){var g=n[u];if(!Eo[g]&&!(a&&a[g])&&!(l&&l[g])&&!(c&&c[g])){var d=Io(r,g);try{Mo(e,g,d)}catch{}}}}return e}var Fo=ha;const To=ro(Fo);var ue={};function he(){return(he=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var Ar=function(e,r){for(var a=[e[0]],i=0,n=r.length;i<n;i+=1)a.push(r[i],e[i+1]);return a},Ht=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!pa.typeOf(e)},ot=Object.freeze([]),ve=Object.freeze({});function Re(e){return typeof e=="function"}function zr(e){return e.displayName||e.name||"Component"}function or(e){return e&&typeof e.styledComponentId=="string"}var Ie=typeof process<"u"&&ue!==void 0&&(ue.REACT_APP_SC_ATTR||ue.SC_ATTR)||"data-styled",ir=typeof window<"u"&&"HTMLElement"in window,_o=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ue!==void 0&&(ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ue.REACT_APP_SC_DISABLE_SPEEDY!==""?ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ue.REACT_APP_SC_DISABLE_SPEEDY:ue.SC_DISABLE_SPEEDY!==void 0&&ue.SC_DISABLE_SPEEDY!==""&&ue.SC_DISABLE_SPEEDY!=="false"&&ue.SC_DISABLE_SPEEDY)),No={};function Ae(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var Oo=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,n=0;n<a;n++)i+=this.groupSizes[n];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var n=this.groupSizes,c=n.length,l=c;a>=l;)(l<<=1)<0&&Ae(16,""+a);this.groupSizes=new Uint32Array(l),this.groupSizes.set(n),this.length=l;for(var u=c;u<l;u++)this.groupSizes[u]=0}for(var g=this.indexOfGroup(a+1),d=0,b=i.length;d<b;d++)this.tag.insertRule(g,i[d])&&(this.groupSizes[a]++,g++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],n=this.indexOfGroup(a),c=n+i;this.groupSizes[a]=0;for(var l=n;l<c;l++)this.tag.deleteRule(n)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var n=this.groupSizes[a],c=this.indexOfGroup(a),l=c+n,u=c;u<l;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),rt=new Map,it=new Map,Oe=1,Ge=function(e){if(rt.has(e))return rt.get(e);for(;it.has(Oe);)Oe++;var r=Oe++;return rt.set(e,r),it.set(r,e),r},Bo=function(e){return it.get(e)},Do=function(e,r){r>=Oe&&(Oe=r+1),rt.set(e,r),it.set(r,e)},Ho="style["+Ie+'][data-styled-version="5.3.11"]',qo=new RegExp("^"+Ie+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Go=function(e,r,a){for(var i,n=a.split(","),c=0,l=n.length;c<l;c++)(i=n[c])&&e.registerName(r,i)},Yo=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],n=0,c=a.length;n<c;n++){var l=a[n].trim();if(l){var u=l.match(qo);if(u){var g=0|parseInt(u[1],10),d=u[2];g!==0&&(Do(d,g),Go(e,d,u[3]),e.getTag().insertRules(g,i)),i.length=0}else i.push(l)}}},Ko=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},fa=function(e){var r=document.head,a=e||r,i=document.createElement("style"),n=function(u){for(var g=u.childNodes,d=g.length;d>=0;d--){var b=g[d];if(b&&b.nodeType===1&&b.hasAttribute(Ie))return b}}(a),c=n!==void 0?n.nextSibling:null;i.setAttribute(Ie,"active"),i.setAttribute("data-styled-version","5.3.11");var l=Ko();return l&&i.setAttribute("nonce",l),a.insertBefore(i,c),i},Vo=function(){function e(a){var i=this.element=fa(a);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var c=document.styleSheets,l=0,u=c.length;l<u;l++){var g=c[l];if(g.ownerNode===n)return g}Ae(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Wo=function(){function e(a){var i=this.element=fa(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var n=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(n,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Uo=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),Er=ir,Xo={isServer:!ir,useCSSOMInjection:!_o},nt=function(){function e(a,i,n){a===void 0&&(a=ve),i===void 0&&(i={}),this.options=he({},Xo,{},a),this.gs=i,this.names=new Map(n),this.server=!!a.isServer,!this.server&&ir&&Er&&(Er=!1,function(c){for(var l=document.querySelectorAll(Ho),u=0,g=l.length;u<g;u++){var d=l[u];d&&d.getAttribute(Ie)!=="active"&&(Yo(c,d),d.parentNode&&d.parentNode.removeChild(d))}}(this))}e.registerId=function(a){return Ge(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(he({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,c=i.useCSSOMInjection,l=i.target,a=n?new Uo(l):c?new Vo(l):new Wo(l),new Oo(a)));var a,i,n,c,l},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(Ge(a),this.names.has(a))this.names.get(a).add(i);else{var n=new Set;n.add(i),this.names.set(a,n)}},r.insertRules=function(a,i,n){this.registerName(a,i),this.getTag().insertRules(Ge(a),n)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(Ge(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),n=i.length,c="",l=0;l<n;l++){var u=Bo(l);if(u!==void 0){var g=a.names.get(u),d=i.getGroup(l);if(g&&d&&g.size){var b=Ie+".g"+l+'[id="'+u+'"]',h="";g!==void 0&&g.forEach(function(E){E.length>0&&(h+=E+",")}),c+=""+d+b+'{content:"'+h+`"}/*!sc*/
`}}}return c}(this)},e}(),Zo=/(a)(d)/gi,Pr=function(e){return String.fromCharCode(e+(e>25?39:97))};function qt(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=Pr(r%52)+a;return(Pr(r%52)+a).replace(Zo,"$1-$2")}var Me=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},ya=function(e){return Me(5381,e)};function ba(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Re(a)&&!or(a))return!1}return!0}var Jo=ya("5.3.11"),Qo=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ba(r),this.componentId=a,this.baseHash=Me(Jo,a),this.baseStyle=i,nt.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var n=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))c.push(this.staticRulesId);else{var l=ze(this.rules,r,a,i).join(""),u=qt(Me(this.baseHash,l)>>>0);if(!a.hasNameForId(n,u)){var g=i(l,"."+u,void 0,n);a.insertRules(n,u,g)}c.push(u),this.staticRulesId=u}else{for(var d=this.rules.length,b=Me(this.baseHash,i.hash),h="",E=0;E<d;E++){var L=this.rules[E];if(typeof L=="string")h+=L;else if(L){var C=ze(L,r,a,i),R=Array.isArray(C)?C.join(""):C;b=Me(b,R+E),h+=R}}if(h){var f=qt(b>>>0);if(!a.hasNameForId(n,f)){var w=i(h,"."+f,void 0,n);a.insertRules(n,f,w)}c.push(f)}}return c.join(" ")},e}(),ei=/^\s*\/\/.*$/gm,ti=[":","[",".","#"];function ri(e){var r,a,i,n,c=ve,l=c.options,u=l===void 0?ve:l,g=c.plugins,d=g===void 0?ot:g,b=new bo(u),h=[],E=function(R){function f(w){if(w)try{R(w+"}")}catch{}}return function(w,$,F,A,I,T,W,U,Y,V){switch(w){case 1:if(Y===0&&$.charCodeAt(0)===64)return R($+";"),"";break;case 2:if(U===0)return $+"/*|*/";break;case 3:switch(U){case 102:case 112:return R(F[0]+$),"";default:return $+(V===0?"/*|*/":"")}case-2:$.split("/*|*/}").forEach(f)}}}(function(R){h.push(R)}),L=function(R,f,w){return f===0&&ti.indexOf(w[a.length])!==-1||w.match(n)?R:"."+r};function C(R,f,w,$){$===void 0&&($="&");var F=R.replace(ei,""),A=f&&w?w+" "+f+" { "+F+" }":F;return r=$,a=f,i=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),b(w||!f?"":f,A)}return b.use([].concat(d,[function(R,f,w){R===2&&w.length&&w[0].lastIndexOf(a)>0&&(w[0]=w[0].replace(i,L))},E,function(R){if(R===-2){var f=h;return h=[],f}}])),C.hash=d.length?d.reduce(function(R,f){return f.name||Ae(15),Me(R,f.name)},5381).toString():"",C}var xa=Pe.createContext();xa.Consumer;var wa=Pe.createContext(),ai=(wa.Consumer,new nt),Gt=ri();function $a(){return m.useContext(xa)||ai}function va(){return m.useContext(wa)||Gt}var ka=function(){function e(r,a){var i=this;this.inject=function(n,c){c===void 0&&(c=Gt);var l=i.name+c.hash;n.hasNameForId(i.id,l)||n.insertRules(i.id,l,c(i.rules,l,"@keyframes"))},this.toString=function(){return Ae(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=Gt),this.name+r.hash},e}(),oi=/([A-Z])/,ii=/([A-Z])/g,ni=/^ms-/,si=function(e){return"-"+e.toLowerCase()};function Mr(e){return oi.test(e)?e.replace(ii,si).replace(ni,"-ms-"):e}var Rr=function(e){return e==null||e===!1||e===""};function ze(e,r,a,i){if(Array.isArray(e)){for(var n,c=[],l=0,u=e.length;l<u;l+=1)(n=ze(e[l],r,a,i))!==""&&(Array.isArray(n)?c.push.apply(c,n):c.push(n));return c}if(Rr(e))return"";if(or(e))return"."+e.styledComponentId;if(Re(e)){if(typeof(d=e)!="function"||d.prototype&&d.prototype.isReactComponent||!r)return e;var g=e(r);return ze(g,r,a,i)}var d;return e instanceof ka?a?(e.inject(a,i),e.getName(i)):e:Ht(e)?function b(h,E){var L,C,R=[];for(var f in h)h.hasOwnProperty(f)&&!Rr(h[f])&&(Array.isArray(h[f])&&h[f].isCss||Re(h[f])?R.push(Mr(f)+":",h[f],";"):Ht(h[f])?R.push.apply(R,b(h[f],f)):R.push(Mr(f)+": "+(L=f,(C=h[f])==null||typeof C=="boolean"||C===""?"":typeof C!="number"||C===0||L in xo||L.startsWith("--")?String(C).trim():C+"px")+";"));return E?[E+" {"].concat(R,["}"]):R}(e):e.toString()}var Ir=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function re(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return Re(e)||Ht(e)?Ir(ze(Ar(ot,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:Ir(ze(Ar(e,a)))}var Sa=function(e,r,a){return a===void 0&&(a=ve),e.theme!==a.theme&&e.theme||r||a.theme},ci=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,li=/(^-|-$)/g;function It(e){return e.replace(ci,"-").replace(li,"")}var nr=function(e){return qt(ya(e)>>>0)};function Ye(e){return typeof e=="string"&&!0}var Yt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},di=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function pi(e,r,a){var i=e[a];Yt(r)&&Yt(i)?ja(i,r):e[a]=r}function ja(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var n=0,c=a;n<c.length;n++){var l=c[n];if(Yt(l))for(var u in l)di(u)&&pi(e,l[u],u)}return e}var Be=Pe.createContext();Be.Consumer;function ui(e){var r=m.useContext(Be),a=m.useMemo(function(){return function(i,n){if(!i)return Ae(14);if(Re(i)){var c=i(n);return c}return Array.isArray(i)||typeof i!="object"?Ae(8):n?he({},n,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Pe.createElement(Be.Provider,{value:a},e.children):null}var Lt={};function Ca(e,r,a){var i=or(e),n=!Ye(e),c=r.attrs,l=c===void 0?ot:c,u=r.componentId,g=u===void 0?function($,F){var A=typeof $!="string"?"sc":It($);Lt[A]=(Lt[A]||0)+1;var I=A+"-"+nr("5.3.11"+A+Lt[A]);return F?F+"-"+I:I}(r.displayName,r.parentComponentId):u,d=r.displayName,b=d===void 0?function($){return Ye($)?"styled."+$:"Styled("+zr($)+")"}(e):d,h=r.displayName&&r.componentId?It(r.displayName)+"-"+r.componentId:r.componentId||g,E=i&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,L=r.shouldForwardProp;i&&e.shouldForwardProp&&(L=r.shouldForwardProp?function($,F,A){return e.shouldForwardProp($,F,A)&&r.shouldForwardProp($,F,A)}:e.shouldForwardProp);var C,R=new Qo(a,h,i?e.componentStyle:void 0),f=R.isStatic&&l.length===0,w=function($,F){return function(A,I,T,W){var U=A.attrs,Y=A.componentStyle,V=A.defaultProps,X=A.foldedComponentIds,_=A.shouldForwardProp,Q=A.styledComponentId,ie=A.target,k=function(p,s,j){p===void 0&&(p=ve);var y=he({},s,{theme:p}),q={};return j.forEach(function(O){var B,P,ae,le=O;for(B in Re(le)&&(le=le(y)),le)y[B]=q[B]=B==="className"?(P=q[B],ae=le[B],P&&ae?P+" "+ae:P||ae):le[B]}),[y,q]}(Sa(I,m.useContext(Be),V)||ve,I,U),Z=k[0],J=k[1],H=function(p,s,j,y){var q=$a(),O=va(),B=s?p.generateAndInjectStyles(ve,q,O):p.generateAndInjectStyles(j,q,O);return B}(Y,W,Z),ye=T,be=J.$as||I.$as||J.as||I.as||ie,xe=Ye(be),S=J!==I?he({},I,{},J):I,v={};for(var x in S)x[0]!=="$"&&x!=="as"&&(x==="forwardedAs"?v.as=S[x]:(_?_(x,kr,be):!xe||kr(x))&&(v[x]=S[x]));return I.style&&J.style!==I.style&&(v.style=he({},I.style,{},J.style)),v.className=Array.prototype.concat(X,Q,H!==Q?H:null,I.className,J.className).filter(Boolean).join(" "),v.ref=ye,m.createElement(be,v)}(C,$,F,f)};return w.displayName=b,(C=Pe.forwardRef(w)).attrs=E,C.componentStyle=R,C.displayName=b,C.shouldForwardProp=L,C.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ot,C.styledComponentId=h,C.target=i?e.target:e,C.withComponent=function($){var F=r.componentId,A=function(T,W){if(T==null)return{};var U,Y,V={},X=Object.keys(T);for(Y=0;Y<X.length;Y++)U=X[Y],W.indexOf(U)>=0||(V[U]=T[U]);return V}(r,["componentId"]),I=F&&F+"-"+(Ye($)?$:It(zr($)));return Ca($,he({},A,{attrs:E,componentId:I}),a)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=i?ja({},e.defaultProps,$):$}}),Object.defineProperty(C,"toString",{value:function(){return"."+C.styledComponentId}}),n&&To(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var o=function(e){return function r(a,i,n){if(n===void 0&&(n=ve),!pa.isValidElementType(i))return Ae(1,String(i));var c=function(){return a(i,n,re.apply(void 0,arguments))};return c.withConfig=function(l){return r(a,i,he({},n,{},l))},c.attrs=function(l){return r(a,i,he({},n,{attrs:Array.prototype.concat(n.attrs,l).filter(Boolean)}))},c}(Ca,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var mi=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=ba(a),nt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,n,c){var l=c(ze(this.rules,i,n,c).join(""),""),u=this.componentId+a;n.insertRules(u,u,l)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,n,c){a>2&&nt.registerId(this.componentId+a),this.removeStyles(a,n),this.createStyles(a,i,n,c)},e}();function gi(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=re.apply(void 0,[e].concat(a)),c="sc-global-"+nr(JSON.stringify(n)),l=new mi(n,c);function u(d){var b=$a(),h=va(),E=m.useContext(Be),L=m.useRef(b.allocateGSInstance(c)).current;return b.server&&g(L,d,b,E,h),m.useLayoutEffect(function(){if(!b.server)return g(L,d,b,E,h),function(){return l.removeStyles(L,b)}},[L,d,b,E,h]),null}function g(d,b,h,E,L){if(l.isStatic)l.renderStyles(d,No,h,L);else{var C=he({},b,{theme:Sa(b,E,u.defaultProps)});l.renderStyles(d,C,h,L)}}return Pe.memo(u)}function Pt(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=re.apply(void 0,[e].concat(a)).join(""),c=nr(n);return new ka(c,n)}const hi=gi`
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
`,$e={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},fi=$e.shadow,yi={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},bi={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},xi=e=>({mode:e,color:e==="dark"?yi:$e.color,typography:$e.typography,spacing:$e.spacing,radius:$e.radius,shadow:e==="dark"?bi:fi,layout:$e.layout,breakpoints:$e.breakpoints,zIndex:$e.zIndex}),Aa="lafranciago-theme-mode",za=m.createContext(null),wi=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(Aa);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function $i({children:e}){const[r,a]=m.useState(wi),i=m.useRef(!1);m.useEffect(()=>{if(window.localStorage.setItem(Aa,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const g=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(g),delete document.documentElement.dataset.themeTransition}},[r]);const n=m.useCallback(()=>{a(g=>g==="light"?"dark":"light")},[]),c=m.useCallback(g=>{a(g)},[]),l=m.useMemo(()=>xi(r),[r]),u=m.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:n,setMode:c}),[r,c,n]);return t.jsx(za.Provider,{value:u,children:t.jsxs(ui,{theme:l,children:[t.jsx(hi,{}),e]})})}function vi(){const e=m.useContext(za);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ki={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,r)=>{const a=m.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:l,className:u="",children:g,...d},b)=>m.createElement("svg",{ref:b,...ki,width:n,height:n,stroke:i,strokeWidth:l?Number(c)*24/Number(n):c,className:["lucide",`lucide-${Si(e)}`,u].join(" "),...d},[...r.map(([h,E])=>m.createElement(h,E)),...Array.isArray(g)?g:[g]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=z("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=z("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=z("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=z("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=z("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=z("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=z("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=z("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=z("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=z("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=z("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=z("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=z("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=z("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=z("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=z("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ha({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const at="lafranciago:foto-perfil",Vt=new Set;let _e=null,Tr=!1;const Di=()=>Vt.forEach(e=>e()),qa=e=>/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(e),Hi=()=>{try{const e=window.localStorage.getItem(at);return e&&qa(e)?e:null}catch{return null}};function _r(e){if(!(e!==null&&!qa(e))){_e=e;try{e?window.localStorage.setItem(at,e):window.localStorage.removeItem(at)}catch{try{window.localStorage.removeItem(at)}catch{}}Di()}}function qi(){const[e,r]=m.useState(_e);m.useEffect(()=>{Tr||(Tr=!0,_e=Hi()),r(_e);const i=()=>r(_e);return Vt.add(i),()=>{Vt.delete(i)}},[]);const a=m.useCallback(()=>_r(null),[]);return{photo:e,setPhoto:_r,clearPhoto:a}}const Gi="https://photon.komoot.io/api/",Yi="https://nominatim.openstreetmap.org/reverse",Wt={lat:-31.4063691,lon:-62.6332043},Ft=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Ki=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Vi=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function Wi(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(Wt.lat),lon:String(Wt.lon)});try{const n=await fetch(`${Gi}?${i.toString()}`,{signal:r});return n.ok?((await n.json()).features??[]).map((l,u)=>{var h;const g=l.properties??{},[d,b]=((h=l.geometry)==null?void 0:h.coordinates)??[];return typeof b!="number"||typeof d!="number"?null:{id:`${g.type??"geo"}-${u}-${b}-${d}`,label:Ki(g),context:Vi(g),lat:b,lon:d}}).filter(l=>l!==null).sort((l,u)=>{const g=Ft(a),d=Ft(l.label).startsWith(g),b=Ft(u.label).startsWith(g);return d!==b?d?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Ui(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const n=await fetch(`${Yi}?${i.toString()}`,{signal:a});if(!n.ok)return null;const l=(await n.json()).address??{};return[l.road,l.house_number].filter(Boolean).join(" ")||l.neighbourhood||l.city||null}catch{return null}}const Xi=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Zi=Pt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ji=Pt`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Qi=o.div`
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
  animation: ${Zi} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,en=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Ji} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,rn=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,an=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,on=o.input`
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
`,nn=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,sn=o.button`
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
`,cn=o.button`
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
`;function ln({open:e,address:r,onCancel:a,onSave:i}){const[n,c]=m.useState("");if(m.useEffect(()=>{e&&c("")},[e]),m.useEffect(()=>{if(!e)return;const g=d=>{d.key==="Escape"&&a()};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[a,e]),!e)return null;const l=n.trim(),u=g=>{g.preventDefault(),l&&i(l)};return t.jsx(Qi,{onClick:g=>{g.stopPropagation(),a()},role:"presentation",children:t.jsxs(en,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:g=>g.stopPropagation(),children:[t.jsx(tn,{children:"Nombre de la dirección"}),r?t.jsx(rn,{children:r}):null,t.jsx(an,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(on,{id:"address-name",value:n,onChange:g=>c(g.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(nn,{children:[t.jsx(sn,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(cn,{type:"submit",disabled:!l,children:"Guardar"})]})]})})}const ke=re`
  ${({theme:e})=>e.mode==="dark"&&re`
      color: ${e.color.neonMuted};
    `}
`,Ut=re`
  ${({theme:e})=>e.mode==="dark"&&re`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,dn=re`
  ${({theme:e})=>e.mode==="dark"&&re`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;re`
  ${({theme:e})=>e.mode==="dark"&&re`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const pn=o.div`
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
`,un=o.div`
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
`,mn=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,gn=o.span`
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
`,hn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,fn=o.button`
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

  ${ke};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,yn=o.div`
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
`,bn=o.div`
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
`,xn=o.input`
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
`,wn=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,$n=o.button`
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
`,vn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,kn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,Sn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,jn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Cn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,An=o.button`
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
`,zn=o.button`
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

  ${ke};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,En=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,Pn=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,Mn=o.button`
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
`,Rn=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,In=o.button`
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
`,Ln=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Tn=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,_n=m.lazy(()=>oe(()=>import("./AddressMap-BvMCqzNp.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.AddressMap}))),Nn=260,On=350;function Bn({open:e,currentId:r,onClose:a,onSelect:i,startOnNew:n=!1}){const[c,l]=m.useState(!1),[u,g]=m.useState(!1),[d,b]=m.useState(n?"new":"list"),[h,E]=m.useState(""),[L,C]=m.useState([]),[R,f]=m.useState(!1),[w,$]=m.useState(null),[F,A]=m.useState([]),[I,T]=m.useState(!1),W=m.useRef(!1);m.useEffect(()=>{if(e){l(!0),b(n?"new":"list");const Z=window.requestAnimationFrame(()=>g(!0));return()=>window.cancelAnimationFrame(Z)}if(!c)return;g(!1);const k=window.setTimeout(()=>{l(!1),b(n?"new":"list"),E(""),C([]),$(null),T(!1)},Nn);return()=>window.clearTimeout(k)},[c,e,n]),m.useEffect(()=>{if(!e)return;const k=Z=>{if(Z.key==="Escape"&&!I){if(d==="new"){b("list");return}a()}};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[I,a,e,d]),m.useEffect(()=>{if(d!=="new")return;if(W.current){W.current=!1;return}const k=h.trim();if(k.length<2){C([]),f(!1);return}const Z=new AbortController;f(!0);const J=window.setTimeout(()=>{Wi(k,Z.signal).then(H=>{C(H),f(!1)}).catch(()=>f(!1))},On);return()=>{window.clearTimeout(J),Z.abort()}},[h,d]);const U=m.useMemo(()=>[...Xi,...F],[F]),Y=k=>{W.current=!0,E(k.label),C([]),$({lat:k.lat,lon:k.lon})},V=(k,Z)=>{$({lat:k,lon:Z}),Ui(k,Z).then(J=>{J&&(W.current=!0,E(J),C([]))})},X=k=>{const Z={id:`custom-${Date.now()}`,label:k,address:h.trim(),primary:!1};A(J=>[...J,Z]),T(!1),i(Z.id,Z.address),a()};if(!c)return null;const _=d==="new",Q=w??Wt,ie=w!==null&&h.trim().length>=3;return t.jsxs(pn,{"data-visible":u,onClick:a,role:"presentation",children:[t.jsxs(un,{"data-visible":u,"data-full":_,role:"dialog","aria-modal":"true","aria-label":_?"Agregar una dirección nueva":"Dirección de entrega",onClick:k=>k.stopPropagation(),children:[t.jsxs(mn,{children:[t.jsx(gn,{"aria-hidden":"true"}),_?t.jsx(zn,{type:"button",onClick:()=>b("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(ji,{size:18,"aria-hidden":"true"})}):null,t.jsx(hn,{children:_?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(fn,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(Da,{size:18,"aria-hidden":"true"})})]}),t.jsx(yn,{"data-full":_,children:_?t.jsxs(t.Fragment,{children:[t.jsxs(bn,{children:[t.jsx(Kt,{size:18,"aria-hidden":"true"}),t.jsx(xn,{value:h,onChange:k=>E(k.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),L.length>0?t.jsx(Rn,{"aria-label":"Sugerencias de direcciones",children:L.map(k=>t.jsxs(In,{type:"button",onClick:()=>Y(k),children:[t.jsx(ct,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(Ln,{children:k.label}),k.context?t.jsx(Fn,{children:k.context}):null]})]},k.id))}):null,L.length===0&&R?t.jsx(Tn,{children:"Buscando…"}):null,t.jsx(En,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsx(_n,{lat:Q.lat,lon:Q.lon,onPick:V})})}),t.jsx(Pn,{children:w?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(Mn,{type:"button",onClick:()=>T(!0),disabled:!ie,children:[t.jsx(ct,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(wn,{children:"Tus direcciones guardadas"}),U.map(k=>t.jsxs($n,{type:"button","data-current":k.id===r,onClick:()=>{i(k.id,k.address),a()},children:[t.jsx(vn,{children:t.jsx(dr,{size:18,"aria-hidden":"true"})}),t.jsxs(kn,{children:[t.jsx(Sn,{children:k.label}),t.jsx(jn,{children:k.address})]}),k.id===r?t.jsx(Cn,{"aria-label":"Dirección actual",children:t.jsx(Ai,{size:16,"aria-hidden":"true"})}):null]},k.id)),t.jsxs(An,{type:"button",onClick:()=>b("new"),children:[t.jsx(Fa,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(ln,{open:I,address:h.trim(),onCancel:()=>T(!1),onSave:X})]})}const Dn=o.form`
  width: 100%;
`,Hn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,qn=o.div`
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
`,Gn=o.input`
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
`,Yn=o.button`
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
`,Ga=m.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:n,id:c="marketplace-search"},l){const u=g=>{g.preventDefault()};return t.jsxs(Dn,{onSubmit:u,role:"search",children:[t.jsx(Hn,{htmlFor:c,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(qn,{children:[t.jsx(Kt,{size:18,"aria-hidden":"true"}),t.jsx(Gn,{id:c,ref:l,value:r,onChange:g=>a(g.target.value),placeholder:i,type:"search"}),t.jsx(Yn,{type:"submit","aria-label":"Buscar",children:t.jsx(Kt,{size:16,"aria-hidden":"true"})})]})]})}),Kn=Pt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,Vn=Pt`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,Wn=o.button`
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
`,Un=o.span`
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
  animation: ${Kn} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Zn=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Jn=o.span`
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
`,Qn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,es=o.span`
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
`,ts=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${Vn} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,rs=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,as=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,os=o.span`
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
`;function Nr({isDarkMode:e,onToggle:r}){return t.jsxs(Wn,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(Un,{"data-dark":e,"aria-hidden":"true",children:t.jsx(Ri,{size:14,"aria-hidden":"true"})}),t.jsxs(Xn,{children:[t.jsxs(Zn,{children:["Modo",t.jsx(Jn,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Qn,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(es,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(ts,{}),t.jsx(rs,{"data-dark":e}),t.jsxs(as,{children:[t.jsx(Fr,{size:12,"aria-hidden":"true"}),t.jsx(Lr,{size:12,"aria-hidden":"true"})]}),t.jsx(os,{"data-dark":e,children:e?t.jsx(Lr,{size:12,"aria-hidden":"true"}):t.jsx(Fr,{size:12,"aria-hidden":"true"})})]})]})}const is=o.div`
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
`,ns=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,ss=o.div`
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
`;const cs=o.button`
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
`;o(fe)`
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
`;const Or=o.span`
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
`,Tt=o.img`
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
`;const Br=o.span`
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
`,Dr=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,ls=o.span`
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
`;const ds=o(ls)`
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
`;o(fe)`
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
`;const $d=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,vd=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,kd=o.span`
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
`,Sd=o.div`
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
`,jd=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,gr=re`
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
  ${gr};
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
`;const Cd=o.button`
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
`,ps=o.main`
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
`,us=o.div`
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
`,Ad=o.span`
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
`,zd=o.h1`
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
`,Ed=o.p`
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
`,hr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(hr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(hr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(hr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const ms=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,gs=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,Pd=o.h2`
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
`,Md=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,hs=o.span`
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
`;o(hs)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const fs=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Rd=o(fs)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const ys=o(fe)`
  ${gr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,bs=o(ys)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Id=o.button`
  ${gr};
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
`;o(ms)`
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
`;o(Xt)`
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
`;const xs=o.nav`
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
`,ws=o.ul`
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
`,Ne=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  ${ke};

  /* El botón central va sobre fondo de marca: el ícono queda blanco y sin
     resplandor. El realce lo da el círculo, no el ícono de adentro. */
  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
    filter: none;
  }
`,$s=o(Xt)`
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

    ${({theme:e})=>e.mode==="dark"&&re`
        color: ${e.color.neon};
      `};
  }

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${Ne},
  &[aria-current='page'] ${Ne} {
    ${Ut};
  }

  /* Salvo el central: ahí el ícono se mantiene blanco y plano. */
  &[data-primary='true'].active ${Ne},
  &[data-primary='true'][aria-current='page'] ${Ne} {
    color: ${({theme:e})=>e.color.onPrimary};
    filter: none;
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
`;const vs=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&re`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,ks=o.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-height: 2.75rem;
  min-width: 0;
  flex: 1 1 auto;

  /* Se corre a la derecha para dejarle pista al logo, que rebota en ese
     hueco. El margen es proporcional al ancho: en un teléfono de 320px una
     medida fija empujaba el carrito y el perfil fuera de la pantalla. */
  @media (max-width: 1023px) {
    margin-left: clamp(0rem, 5vw, 2.25rem);
  }

  /* Por debajo de 360px el header ya viene justo: no se le suma margen. */
  @media (max-width: 359px) {
    margin-left: 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 0 auto;
    margin-left: 0;
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
`,Ss=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,js=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,Cs=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Ya=re`
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
`,As=o.button`
  ${Ya};
`,Hr=o(fe)`
  ${Ya};
`,zs=o.img`
  position: absolute;
  /* El botón puede achicarse de ancho en pantallas angostas: anclando la
     imagen al centro con proporción 1:1 el círculo nunca sale ovalado. */
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  border-radius: ${({theme:e})=>e.radius.full};
  object-fit: cover;
`,Es=o.span`
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
`,Ps=o.div`
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
`;const Ms=o.div`
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
`,Rs=o.div`
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
`,Is=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Ls=o.span`
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
`,Fs=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Ts=o.span`
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

  /*
    En mobile el logo rebota entre la hamburguesa y el texto de la dirección.
    El recorrido se define por variable para poder medirlo desde el header:
    depende del ancho de pantalla y de cuánto ocupe la dirección, así que
    fijarlo en el CSS daría un rebote corto en pantallas anchas.

    Se anima con transform, que la compone la GPU y no fuerza recalcular el
    layout del header en cada cuadro.
  */
  animation: lfg-logo-bounce 3.6s ease-in-out infinite alternate;

  @keyframes lfg-logo-bounce {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(var(--lfg-logo-travel, 0));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 2.5rem;
    height: 2.5rem;
    /* En escritorio queda quieto: el header ahí es otra composición. */
    animation: none;
  }
`,_s=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,Ns=re`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Os=re`
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
`,Ka=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,qr=o.div`
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
`,Gr=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,Bs=o.div`
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

  ${ke};
`,Ve=o(Xt)`
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
    ${Ut};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Ce} {
    ${Ut};
  }
`,We=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,Ue=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Xe=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Ze=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,Je=o.nav`
  display: grid;
  gap: 0.25rem;
`,Qe=o.section`
  display: block;
`,et=o.span`
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
`,Yr=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Kr=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Ns};
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
`,Ds=o.button`
  ${Os};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${dn};
  ${ke};
`,Vr=o.div`
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
`,Hs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,qs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,Gs=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,Ys=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,Wr=o.button`
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
`,Ks=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Vs=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,Ws=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Us=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Xs=o.button`
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
`,Zs=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Js=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Qs=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,ec=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,tc=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,ac=o.article`
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
`,oc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,ic=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,nc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,sc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,cc=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lc=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,_t="/LaFranciaGO/favicon.png",dc="Av. San Martín 123",Ur=3,Xr=420,pc=260,Zr=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:dr,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:Ia},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:De},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:lr},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:mr}],Jr=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Ee},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:Ha},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:ur},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:st}],uc=o.aside`
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
`,mc=o(Ka)`
  height: 100%;
`,Qr=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Ee,items:[{icon:st,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:De,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:De,items:[{icon:ct,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Ee,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:ct,items:[{icon:lr,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:st,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],gc=[{to:"/",label:"Inicio",icon:dr},{to:"/categorias",label:"Categorías",icon:Ia},{to:"/pedidos",label:"Mis pedidos",icon:De},{to:"/favoritos",label:"Favoritos",icon:lr},{to:"/mi-cuenta",label:"Cuenta",icon:mr}];function hc({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:n,toggleMode:c}=vi(),{photo:l}=qi(),u=m.useRef(null),g=m.useRef(null),d=ao(),b=typeof r=="string"&&typeof a=="function",h=m.useRef(null),E=m.useRef(null),L=m.useRef(null),C=m.useRef(null),R=m.useRef(null),[f,w]=m.useState(!1),[$,F]=m.useState({id:"home",label:dc});m.useEffect(()=>{var O;const p=u.current,s=g.current;if(!p||!s)return;const j=()=>{if(p.offsetParent===null)return;const B=s.querySelector("span");if(!B)return;const P=document.createRange();P.selectNodeContents(B);const ae=p.getBoundingClientRect(),le=P.getBoundingClientRect(),N=Math.max(0,Math.round(le.left-ae.right-6));p.style.setProperty("--lfg-logo-travel",`${N}px`)};j();const y=window.requestAnimationFrame(j),q=typeof ResizeObserver<"u"?new ResizeObserver(j):null;return q==null||q.observe(s),window.addEventListener("resize",j),(O=document.fonts)==null||O.ready.then(j).catch(()=>{}),()=>{window.cancelAnimationFrame(y),q==null||q.disconnect(),window.removeEventListener("resize",j)}},[$.label]);const[A,I]=m.useState(!1),[T,W]=m.useState(!1),[U,Y]=m.useState("opening"),[V,X]=m.useState(!1),[_,Q]=m.useState(!1),[ie,k]=m.useState("opening"),[Z,J]=m.useState(null),H=m.useCallback(()=>{I(!1),X(!1),J(null)},[]),ye=m.useCallback(()=>{H(),I(!0)},[H]),be=m.useCallback(()=>{if(A||T){H();return}ye()},[H,T,A,ye]),xe=m.useCallback(()=>{H(),X(!0)},[H]),S=m.useCallback(()=>{if(V||_){H();return}xe()},[H,_,V,xe]);m.useEffect(()=>{const p=document.body.style.overflow;return(A||T||V||_)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=p}},[T,A,_,V]),m.useLayoutEffect(()=>{const p=h.current;if(!p)return;const s=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${p.offsetHeight}px`)};s();const j=typeof ResizeObserver<"u"?new ResizeObserver(s):null;return j==null||j.observe(p),window.addEventListener("resize",s),()=>{j==null||j.disconnect(),window.removeEventListener("resize",s),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),m.useEffect(()=>{E.current!==null&&(window.cancelAnimationFrame(E.current),E.current=null),L.current!==null&&(window.clearTimeout(L.current),L.current=null);const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(A){if(W(!0),p){Y("open");return}Y("opening"),E.current=window.requestAnimationFrame(()=>{Y("open"),E.current=null});return}if(T){if(p){W(!1),Y("opening");return}Y("closing"),L.current=window.setTimeout(()=>{W(!1),Y("opening"),L.current=null},Xr)}},[T,A]),m.useEffect(()=>()=>{E.current!==null&&window.cancelAnimationFrame(E.current),L.current!==null&&window.clearTimeout(L.current),C.current!==null&&window.cancelAnimationFrame(C.current),R.current!==null&&window.clearTimeout(R.current)},[]),m.useEffect(()=>{C.current!==null&&(window.cancelAnimationFrame(C.current),C.current=null),R.current!==null&&(window.clearTimeout(R.current),R.current=null);const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(V){if(Q(!0),p){k("open");return}k("opening"),C.current=window.requestAnimationFrame(()=>{k("open"),C.current=null});return}if(_){if(p){Q(!1),k("opening");return}k("closing"),R.current=window.setTimeout(()=>{Q(!1),k("opening"),R.current=null},pc)}},[_,V]);const v=m.useCallback((p,s)=>{p.preventDefault(),H(),window.setTimeout(()=>{d(s)},Xr)},[H,d]),x=m.useMemo(()=>Qr.find(p=>p.id===Z)??null,[Z]);return t.jsxs(is,{children:[t.jsx(ns,{ref:h,children:t.jsx(vs,{children:t.jsx(ss,{children:t.jsxs(Ms,{children:[t.jsxs(Rs,{children:[t.jsx(cs,{type:"button",onClick:be,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":A||T,children:t.jsx(Mi,{size:20,"aria-hidden":"true"})}),t.jsxs(Is,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Ts,{ref:u,children:t.jsx(Tt,{src:_t,alt:"","aria-hidden":"true"})}),t.jsxs(Ls,{children:["LaFrancia",t.jsx(Fs,{children:"GO"})]})]})]}),b?t.jsx(_s,{children:t.jsx(Ga,{value:r,onChange:a})}):null,t.jsxs(Ps,{"aria-label":"Acciones rápidas",children:[t.jsxs(ks,{ref:g,type:"button","aria-label":`Entregar en ${$.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":f,onClick:()=>w(!0),children:[t.jsxs(Cs,{children:[t.jsx(js,{children:"Entregar en"}),t.jsx(Ss,{children:$.label})]}),t.jsx(Ei,{size:15,"aria-hidden":"true"})]}),t.jsxs(As,{type:"button",onClick:S,"aria-label":`Abrir notificaciones, ${Ur} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":V||_,children:[t.jsx(st,{size:18,"aria-hidden":"true"}),t.jsx(Es,{children:Ur})]}),t.jsx(Hr,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(Ni,{size:18,"aria-hidden":"true"})}),t.jsx(Hr,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:l?t.jsx(zs,{src:l,alt:""}):t.jsx(mr,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(uc,{"aria-label":"Navegación principal",children:t.jsxs(mc,{children:[t.jsxs(qr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Or,{children:t.jsx(Tt,{src:_t,alt:"","aria-hidden":"true"})}),t.jsxs(Gr,{children:[t.jsxs(Br,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Dr,{children:"GO"})]}),t.jsx(ds,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(Qe,{children:[t.jsx(et,{children:"NAVEGACIÓN"}),t.jsx(Je,{"aria-label":"Navegación principal",children:Zr.map(p=>{const s=p.icon;return t.jsxs(Ve,{to:p.to,end:p.end,onClick:j=>v(j,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(s,{size:18,"aria-hidden":"true"})}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:p.title}),t.jsx(Ue,{children:p.subtitle})]}),t.jsx(We,{"aria-hidden":"true",children:t.jsx(Ke,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsxs(Qe,{children:[t.jsx(et,{children:"ACCIONES"}),t.jsx(Je,{"aria-label":"Acciones rápidas",children:Jr.map(p=>{const s=p.icon;return t.jsxs(Ve,{to:p.to,onClick:j=>v(j,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(s,{size:18,"aria-hidden":"true"})}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:p.title}),t.jsx(Ue,{children:p.subtitle})]}),t.jsx(We,{"aria-hidden":"true",children:t.jsx(Ke,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(Yr,{children:t.jsx(Nr,{isDarkMode:n,onToggle:c})})]})}),t.jsx(ps,{children:e}),t.jsx(xs,{"aria-label":"Navegación móvil",children:t.jsx(ws,{children:gc.map(p=>{const s=p.icon;return t.jsx("li",{children:t.jsxs($s,{to:p.to,"data-primary":p.to==="/pedidos",children:[t.jsx(Ne,{children:t.jsx(s,{size:p.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:p.label})]})},p.to)})})}),T&&t.jsx(Vr,{"data-drawer":"true","data-state":U,role:"presentation",onClick:H,children:t.jsxs(Kr,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":U,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:p=>p.stopPropagation(),children:[t.jsxs(Bs,{children:[t.jsxs(qr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Or,{children:t.jsx(Tt,{src:_t,alt:"","aria-hidden":"true"})}),t.jsx(Gr,{children:t.jsxs(Br,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Dr,{children:"GO"})]})})]}),t.jsx(Ds,{type:"button",onClick:H,"aria-label":"Cerrar menú",children:t.jsx(Da,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Ka,{children:[t.jsxs(Qe,{children:[t.jsx(et,{children:"Navegación"}),t.jsx(Je,{"aria-label":"Navegación principal",children:Zr.map(p=>{const s=p.icon;return t.jsxs(Ve,{to:p.to,end:p.end,onClick:j=>v(j,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(s,{size:18,"aria-hidden":"true"})}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:p.title}),t.jsx(Ue,{children:p.subtitle})]}),t.jsx(We,{"aria-hidden":"true",children:t.jsx(Ke,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsxs(Qe,{children:[t.jsx(et,{children:"Acciones"}),t.jsx(Je,{"aria-label":"Acciones rápidas",children:Jr.map(p=>{const s=p.icon;return t.jsxs(Ve,{to:p.to,onClick:j=>v(j,p.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(s,{size:18,"aria-hidden":"true"})}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:p.title}),t.jsx(Ue,{children:p.subtitle})]}),t.jsx(We,{"aria-hidden":"true",children:t.jsx(Ke,{size:16,"aria-hidden":"true"})})]},p.to)})})]}),t.jsx(Yr,{children:t.jsx(Nr,{isDarkMode:n,onToggle:c})})]})]})}),_&&t.jsx(Vr,{"data-notifications":"true","data-state":ie,role:"presentation",onClick:H,children:t.jsxs(Kr,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":ie,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:p=>p.stopPropagation(),children:[t.jsxs(Ys,{children:[x?t.jsx(Wr,{type:"button",onClick:()=>J(null),"aria-label":"Volver a las notificaciones",children:t.jsx(Ea,{size:14,"aria-hidden":"true"})}):t.jsx(Vs,{"aria-hidden":"true"}),t.jsxs(Us,{children:[t.jsx(Ws,{id:"marketplace-notifications-title",children:(x==null?void 0:x.title)??"Notificaciones"}),t.jsx(Ks,{children:(x==null?void 0:x.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(Wr,{type:"button",onClick:()=>{H(),d("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(Ti,{size:14,"aria-hidden":"true"})})]}),t.jsx(Gs,{}),t.jsx(qs,{children:x?t.jsx(Hs,{"aria-label":x.title,children:x.items.map(p=>{const s=p.icon;return t.jsxs(ac,{children:[t.jsx(nc,{"aria-hidden":"true",children:t.jsx(s,{size:14,"aria-hidden":"true"})}),t.jsxs(oc,{children:[t.jsxs(lc,{children:[t.jsx(cc,{children:p.title}),t.jsx(ic,{children:p.date})]}),t.jsx(sc,{children:p.subtitle})]})]},`${x.id}-${p.title}`)})}):t.jsx(rc,{"aria-label":"Secciones de notificaciones",children:Qr.map(p=>{const s=p.icon;return t.jsxs(Xs,{type:"button",onClick:()=>J(p.id),children:[t.jsx(Js,{"aria-hidden":"true",children:t.jsx(s,{size:14,"aria-hidden":"true"})}),t.jsxs(ec,{children:[t.jsx(tc,{children:p.title}),t.jsx(Qs,{children:p.subtitle})]}),t.jsx(Zs,{"aria-hidden":"true",children:t.jsx(Le,{size:16,"aria-hidden":"true"})})]},p.id)})})})]})}),t.jsx(Bn,{open:f,currentId:$.id,onClose:()=>w(!1),onSelect:(p,s)=>F({id:p,label:s})})]})}const fr=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,yr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Va=re`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${Va};
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
`;const Wa=o.div`
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
`;const fc=o.span`
  ${Va};
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
`,Ld=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,yc="/LaFranciaGO/",bc=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),br=e=>{const r=e&&bc.has(e)?e:"comercio";return`${yc}media/${r}.svg`},xc=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),wc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return r[a%r.length]},$c=o(fe)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,vc=o.span`
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
`,kc=o.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[1]};
  right: ${({theme:e})=>e.spacing[1]};
  z-index: 2;
  padding: 0.15rem 0.45rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(5, 8, 22, 0.62);
  color: #ffffff;
  font-size: 0.625rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`;function Sc({id:e,name:r,to:a,count:i,priority:n}){return t.jsx($c,{to:a,children:t.jsxs(fr,{$ratio:"1 / 1",children:[t.jsx(yr,{src:br(e),alt:r,loading:n?"eager":"lazy"}),typeof i=="number"?t.jsxs(kc,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx(vc,{children:r})]})})}const jc=o.div`
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
`,Cc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${ke};
`,Ac=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,zc=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,Ec=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function Pc({icon:e,title:r,text:a,ctaLabel:i,ctaTo:n,dashed:c}){return t.jsxs(jc,{"data-dashed":c?"true":"false",children:[t.jsx(Cc,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(Ac,{children:r}),a?t.jsx(zc,{children:a}):null,i&&n?t.jsx(Ec,{children:t.jsx(bs,{to:n,children:i})}):null]})}const ea=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),Mc=e=>`${e.toFixed(1)} km`,Ua=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Rc=o(fe)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?re`
          pointer-events: none;
        `:re`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:r})=>r.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,Ic=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Lc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fc=o.h3`
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
`,Tc=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,_c=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Nc=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,Oc=o.button`
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
`,Bc=o.span`
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
`;function Dc({name:e,store:r,price:a,oldPrice:i,categoryId:n,imageLabel:c,tag:l,to:u,onAdd:g,priority:d}){return t.jsxs(Rc,{to:u??"#",$static:!u,children:[t.jsxs(fr,{$ratio:"1 / 1",children:[t.jsx(yr,{src:br(n),alt:c??e,loading:d?"eager":"lazy"}),l?t.jsx(Wa,{children:t.jsx(Bc,{children:l})}):null]}),t.jsxs(Ic,{children:[r?t.jsx(Lc,{children:r}):null,t.jsx(Fc,{children:e}),t.jsxs(Tc,{children:[t.jsxs("div",{children:[t.jsx(_c,{children:ea(a)}),i?t.jsx(Nc,{children:ea(i)}):null]}),g?t.jsx(Oc,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:b=>{b.preventDefault(),b.stopPropagation(),g()},children:t.jsx(Fa,{size:18,"aria-hidden":"true"})}):null]})]})]})}const Hc=o(fe)`
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
`,qc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,Gc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Yc=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Kc=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Vc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function Wc({to:e,title:r,text:a,icon:i,tone:n="brand"}){return t.jsxs(Hc,{to:e,"data-tone":n,children:[t.jsx(qc,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(Gc,{children:[t.jsx(Yc,{children:r}),a?t.jsx(Kc,{children:a}):null]}),t.jsx(Vc,{children:t.jsx(Le,{size:18,"aria-hidden":"true"})})]})}const Uc=o(fe)`
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
`,Xc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${ke};
`,Zc=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function ta({to:e,label:r,icon:a}){return t.jsxs(Uc,{to:e,children:[t.jsx(Xc,{children:t.jsx(a,{size:18})}),t.jsx(Zc,{children:r}),t.jsx(Le,{size:16,"aria-hidden":"true"})]})}const Jc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Qc=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,el=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,tl=o.h2`
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
`,rl=o.span`
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
`,al=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,ol=o(fe)`
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
`;function Nt({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:n,seeAllLabel:c="Ver todos"}){return t.jsxs(Jc,{children:[t.jsxs(Qc,{children:[t.jsxs(el,{children:[t.jsx(tl,{children:e}),r?t.jsxs(rl,{children:[a,r]}):null]}),n?t.jsxs(ol,{to:n,children:[c,t.jsx(Le,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(al,{children:i}):null]})}const il=o(fe)`
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
`,nl=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,sl=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,cl=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ll=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,ra=o.span`
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
`,pl=o.span`
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
`,ul=o.span`
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
`,ml=o.span`
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
`;function gl({id:e,name:r,category:a,categoryId:i,to:n,distanceKm:c,rating:l,openNow:u,premium:g,etaMin:d,etaMax:b,priority:h}){return t.jsxs(il,{to:n,children:[t.jsxs(fr,{$ratio:"16 / 9",children:[t.jsx(yr,{src:br(i),alt:a,loading:h?"eager":"lazy"}),t.jsxs(Wa,{children:[u!==void 0?t.jsx(pl,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),g?t.jsx(ml,{children:"Destacado"}):null,l!==void 0?t.jsxs(ul,{children:[t.jsx(Oi,{size:13,"aria-hidden":"true",fill:"currentColor"}),l.toFixed(1)]}):null]}),t.jsx(nl,{children:t.jsx(fc,{$size:"2.75rem",$tone:wc(e),children:xc(r)})})]}),t.jsxs(sl,{children:[t.jsx(cl,{children:r}),t.jsxs(ll,{children:[a,c!==void 0?` · ${Mc(c)}`:""]}),t.jsxs(dl,{children:[t.jsxs(ra,{children:[t.jsx(Ci,{size:14,"aria-hidden":"true"}),"Delivery"]}),d!==void 0&&b!==void 0?t.jsxs(ra,{children:[t.jsx(Pi,{size:14,"aria-hidden":"true"}),d,"-",b," min"]}):null]})]})]})}const hl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:_a,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:La,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ma,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:sr,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:cr,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ee,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Oa,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:pr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Na,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Pa,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Ra,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Ta,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Ba,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:ur,tone:"red"}],fl=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",premium:!0,name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",premium:!0,name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],yl=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],Fd=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],Td=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:_a},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ee},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ma},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:cr},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:sr},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:La},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Oa},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:zi},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:pr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Na},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Pa},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Ra},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Ta},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Ba}],bl=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],xl=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Xa=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Ee,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:cr,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:pr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:sr,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],_d=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:0,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:1,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,saleUnit:"peso",quantity:1,subtotal:1275,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:0,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,saleUnit:"peso",quantity:3,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,saleUnit:"peso",quantity:1,subtotal:1345,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Nd=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],Od=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],Bd=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],Dd=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],Hd=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],qd=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],Gd=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],Yd=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],Kd=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:Bi},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:Ii},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:Li},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:_i}],wl=e=>Ua(e),Ot=(e,...r)=>{const a=wl(e);return a?Ua(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},$l=e=>bl.find(r=>r.id===e),Vd=e=>Xa.find(r=>r.id===e),Wd=e=>Xa.find(r=>r.name.toLowerCase()===e.toLowerCase()),Ud=e=>{const r=xl.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((n,c)=>n.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=$l(e);if(a)return{kind:"offer",offer:a}},vl=5,kl=.7,aa=e=>Math.floor(e/kl),oa=e=>e.premium&&e.distanceKm<=vl?0:1,He=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,Za=(e,r)=>{const a=He(e,r);if(a!==0)return a;const i=aa(e.distanceKm)-aa(r.distanceKm);if(i!==0)return i;const n=oa(e)-oa(r);if(n!==0)return n;const c=e.distanceKm-r.distanceKm;return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},Sl=(e,r)=>He(e,r)||e.distanceKm-r.distanceKm,jl=(e,r)=>He(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),Cl=(e,r)=>He(e,r)||(r.rating??0)-(e.rating??0),Al=(e,r)=>He(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),zl={relevancia:Za,cercania:Sl,precio:jl,puntuacion:Cl,entrega:Al};function ia(e,r="relevancia"){return[...e].sort(zl[r]??Za)}const Xd=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],El=o.div`
  position: relative;
  min-width: 0;
`,Pl=o.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,na=o.button`
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

  ${ke};

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
`,tt=4,Ml=6,Rl=420,Il=.91,Ll=.2,Fl=.45,Tl=260,_l=e=>1-(1-e)**3;function Bt({children:e,className:r,as:a,...i}){const n=m.useRef(null),c=m.useRef(null),l=m.useRef(null),[u,g]=m.useState(!1),[d,b]=m.useState(!1),h=m.useCallback(()=>{const f=n.current;if(!f)return;const{scrollLeft:w,scrollWidth:$,clientWidth:F}=f;g(w>tt),b(w+F<$-tt)},[]);m.useLayoutEffect(()=>{h()},[h,e]),m.useEffect(()=>{var $;const f=n.current;if(!f)return;const w=(($=window.matchMedia)==null?void 0:$.call(window,"(pointer: fine)").matches)??!1;f.style.cursor=w&&(u||d)?"grab":""},[u,d]),m.useEffect(()=>{var F;const f=n.current;if(!f)return;const w=A=>{const I=f.scrollWidth-f.clientWidth;if(I<=0)return;const T=Math.abs(A.deltaX)>Math.abs(A.deltaY)?A.deltaX:A.deltaY;if(T===0)return;const W=T>0?1:-1,U=f.scrollLeft<=tt,Y=f.scrollLeft>=I-tt;if(W<0&&U||W>0&&Y)return;A.preventDefault();const V=l.current??f.scrollLeft,X=Math.max(0,Math.min(V+W*Tl,I));C(f,X)};f.addEventListener("wheel",w,{passive:!1}),f.addEventListener("scroll",h,{passive:!0}),f.addEventListener("scrollend",h,{passive:!0});const $=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return $==null||$.observe(f),Array.from(f.children).forEach(A=>$==null?void 0:$.observe(A)),(F=document.fonts)==null||F.ready.then(h).catch(()=>{}),()=>{f.removeEventListener("wheel",w),f.removeEventListener("scroll",h),f.removeEventListener("scrollend",h),$==null||$.disconnect(),c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),l.current=null}},[h]);const E=(f,w)=>{var I;if(c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),l.current=null,Math.abs(w)<Fl||(I=window.matchMedia)!=null&&I.call(window,"(prefers-reduced-motion: reduce)").matches){h();return}let $=-w;const F=f.scrollWidth-f.clientWidth,A=()=>{const T=f.scrollLeft+$;if(T<=0||T>=F){f.scrollLeft=T<=0?0:F,c.current=null,h();return}if(f.scrollLeft=T,$*=Il,h(),Math.abs($)<Ll){c.current=null;return}c.current=requestAnimationFrame(A)};c.current=requestAnimationFrame(A)},L=f=>{if(f.pointerType!=="mouse"||f.button!==0)return;const w=n.current;if(!w)return;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),l.current=null;const $=f.clientX,F=w.scrollLeft;let A=!1,I=0,T=f.clientX,W=performance.now();const U=X=>X.preventDefault();w.addEventListener("dragstart",U);const Y=X=>{const _=X.clientX-$;if(!A){if(Math.abs(_)<Ml)return;A=!0,w.style.scrollBehavior="auto",w.style.cursor="grabbing",w.style.userSelect="none"}const Q=performance.now(),ie=Q-W;if(ie>0){const k=(X.clientX-T)/ie*16;I=I*.7+k*.3,T=X.clientX,W=Q}w.scrollLeft=F-_},V=()=>{if(document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",V),document.removeEventListener("pointercancel",V),w.removeEventListener("dragstart",U),w.style.scrollBehavior="",w.style.cursor="",w.style.userSelect="",A){E(w,I);const X=_=>{_.stopPropagation(),_.preventDefault()};w.addEventListener("click",X,{capture:!0,once:!0}),window.setTimeout(()=>w.removeEventListener("click",X,{capture:!0}),0)}h()};document.addEventListener("pointermove",Y),document.addEventListener("pointerup",V),document.addEventListener("pointercancel",V)},C=(f,w)=>{var T;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null);const $=f.scrollLeft,F=w-$;if(Math.abs(F)<1){l.current=null;return}if(l.current=w,(T=window.matchMedia)!=null&&T.call(window,"(prefers-reduced-motion: reduce)").matches){f.scrollLeft=w,l.current=null,h();return}const A=performance.now(),I=W=>{const U=W-A,Y=Math.min(U/Rl,1);if(f.scrollLeft=$+F*_l(Y),h(),Y<1){c.current=requestAnimationFrame(I);return}c.current=null,l.current=null};c.current=requestAnimationFrame(I)},R=f=>{const w=n.current;if(!w)return;const $=w.scrollWidth-w.clientWidth,F=w.scrollLeft+f*w.clientWidth*.7;C(w,Math.max(0,Math.min(F,$)))};return t.jsxs(El,{className:r,children:[u?t.jsx(na,{type:"button","data-side":"left",onClick:()=>R(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(Ea,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:n,onPointerDown:L,...i,children:e}):t.jsx(Pl,{ref:n,onPointerDown:L,...i,children:e}),d?t.jsx(na,{type:"button","data-side":"right",onClick:()=>R(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Le,{size:16,"aria-hidden":"true"})}):null]})}const Ja="lafranciago:orden",Nl=["relevancia","cercania","precio","puntuacion","entrega"],Ol=()=>{try{const e=window.localStorage.getItem(Ja);return Nl.includes(e)?e:"relevancia"}catch{return"relevancia"}};function Bl(){const[e,r]=m.useState("relevancia");m.useEffect(()=>{r(Ol())},[]);const a=m.useCallback(i=>{r(i);try{window.localStorage.setItem(Ja,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const Dl=o(fe)`
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

  /* En escritorio el fondo se ajusta al contenido y el bloque queda centrado:
     ocupando todo el ancho parecía una franja enorme para un solo botón. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: fit-content;
    margin-inline: auto;
    gap: ${({theme:e})=>e.spacing[4]};
    padding-inline: ${({theme:e})=>e.spacing[5]};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,Hl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,ql=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,Gl=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Yl=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Kl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Qa=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Vl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Wl=o.div`
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
`;const Zd=o.div`
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
`;const Jd=o.div`
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
`;const Qd=o(je)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(us)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const ep=o(Qa)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Vl)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Wl)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(gs)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const xr=o.div`
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
`,Ul=o(xr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Xl=o(xr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Zl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Jl=o.section`
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
`;const tp=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ql=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,ed=8;function td(){const[e,r]=m.useState(""),{sortMode:a}=Bl(),i=e.trim(),n=i.length>0,c=m.useMemo(()=>{const d=hl.filter(b=>Ot(i,b.name));return n?d:d.slice(0,ed)},[n,i]),l=m.useMemo(()=>ia(fl.filter(d=>Ot(i,d.name,d.category,d.address)),a),[i,a]),u=m.useMemo(()=>ia(yl.filter(d=>Ot(i,d.product,d.store)),a),[i,a]),g=c.length>0||l.length>0||u.length>0;return t.jsxs(hc,{query:e,onQueryChange:r,children:[t.jsx(Jl,{children:t.jsx(Se,{children:t.jsx(Ga,{value:e,onChange:r})})}),t.jsx(je,{children:t.jsx(Se,{children:t.jsxs(Dl,{to:"/mandado",children:[t.jsx(Hl,{children:t.jsx(De,{size:22,"aria-hidden":"true"})}),t.jsxs(ql,{children:[t.jsx(Gl,{children:"¿Necesitás algún mandado?"}),t.jsx(Yl,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(Kl,{children:t.jsx(Le,{size:18,"aria-hidden":"true"})})]})})}),n&&!g?t.jsx(je,{children:t.jsx(Se,{children:t.jsx(Pc,{icon:Fi,title:"Sin resultados",text:`No encontramos nada para "${i}". Probá con otra palabra.`,dashed:!0})})}):null,c.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Nt,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(Bt,{as:Xl,"aria-label":"Categorías",children:c.map((d,b)=>t.jsx(Sc,{id:d.id,name:d.name,to:`/comercios?rubro=${d.id}`,priority:b<5},d.id))})]})}):null,u.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Nt,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(Bt,{as:xr,"aria-label":"Productos destacados",children:u.map((d,b)=>t.jsx(Dc,{name:d.product,store:d.store,price:d.price,oldPrice:d.oldPrice,categoryId:d.categoryId,imageLabel:d.imageLabel,tag:d.discount>0?`-${d.discount}%`:void 0,to:d.href,priority:b<3},d.id))})]})}):null,l.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Nt,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(Bt,{as:Ul,"aria-label":"Negocios destacados",children:l.map((d,b)=>t.jsx(gl,{id:d.id,name:d.name,category:d.category,categoryId:d.categoryId,to:d.href,distanceKm:d.distanceKm,rating:d.rating,openNow:d.openNow,premium:d.premium,etaMin:d.etaMin,etaMax:d.etaMax,priority:b<2},d.id))})]})}):null,n?null:t.jsx(je,{children:t.jsx(Se,{children:t.jsx(Qa,{children:t.jsxs(Zl,{children:[t.jsx(Wc,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Ee,tone:"brand"}),t.jsxs(Ql,{children:[t.jsx(ta,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:Ha}),t.jsx(ta,{to:"/registro/fletero",label:"Sumate como Fletero",icon:ur})]})]})})})})]})}const rd=m.lazy(()=>oe(()=>import("./CategoriesScreen-C9R5J2B1.js"),__vite__mapDeps([3,1])).then(e=>({default:e.CategoriesScreen}))),ad=m.lazy(()=>oe(()=>import("./StoresDirectoryScreen-BNIzpbd6.js"),__vite__mapDeps([4,1])).then(e=>({default:e.StoresDirectoryScreen}))),od=m.lazy(()=>oe(()=>import("./StoreProfileScreen-DszVFt-f.js"),__vite__mapDeps([5,1,6,7,8])).then(e=>({default:e.StoreProfileScreen}))),id=m.lazy(()=>oe(()=>import("./ProductDetailScreen-D3YcTBMG.js"),__vite__mapDeps([9,1,10])).then(e=>({default:e.ProductDetailScreen}))),nd=m.lazy(()=>oe(()=>import("./MyOrdersScreen-B-bL5rCi.js"),__vite__mapDeps([11,1,8,12])).then(e=>({default:e.MyOrdersScreen}))),sd=m.lazy(()=>oe(()=>import("./CartScreen-C0Y163-D.js"),__vite__mapDeps([13,1,6,12,7,14])).then(e=>({default:e.CartScreen}))),cd=m.lazy(()=>oe(()=>import("./ErrandScreen-DITGG9gn.js"),__vite__mapDeps([15,1,16,14])).then(e=>({default:e.ErrandScreen}))),ld=m.lazy(()=>oe(()=>import("./ErrandChatScreen-BnjiwS1n.js"),__vite__mapDeps([17,1,18,16,19])).then(e=>({default:e.ErrandChatScreen}))),dd=m.lazy(()=>oe(()=>import("./FavoritesScreen-6jMd1e4z.js"),__vite__mapDeps([20,1])).then(e=>({default:e.FavoritesScreen}))),pd=m.lazy(()=>oe(()=>import("./NotificationsScreen-BCfZa4h3.js"),__vite__mapDeps([21,1,22])).then(e=>({default:e.NotificationsScreen}))),ud=m.lazy(()=>oe(()=>import("./CustomerAccountScreen-BnLs-c8k.js"),__vite__mapDeps([23,1,10,18,19,24,14])).then(e=>({default:e.CustomerAccountScreen}))),md=m.lazy(()=>oe(()=>import("./CommerceRegistrationScreen-Djk4IomY.js"),__vite__mapDeps([25,26,1,18,24,14])).then(e=>({default:e.CommerceRegistrationScreen}))),sa=m.lazy(()=>oe(()=>import("./DeliveryRegistrationScreen-Biz5a-fl.js"),__vite__mapDeps([27,26,1,18,14,24])).then(e=>({default:e.DeliveryRegistrationScreen}))),gd=m.lazy(()=>oe(()=>import("./CommercePanelScreen-BKyLf_mv.js"),__vite__mapDeps([28,29,10,1,22])).then(e=>({default:e.CommercePanelScreen}))),hd=m.lazy(()=>oe(()=>import("./ProductFormScreen-DB8z22Aj.js"),__vite__mapDeps([30,1,6,18])).then(e=>({default:e.ProductFormScreen}))),fd=m.lazy(()=>oe(()=>import("./DeliveryPanelScreen-ohCnZ4nV.js"),__vite__mapDeps([31,29,10,1])).then(e=>({default:e.DeliveryPanelScreen}))),yd=m.lazy(()=>oe(()=>import("./AdminPanelScreen-hGPjvy_a.js"),__vite__mapDeps([32,29,10,1])).then(e=>({default:e.AdminPanelScreen})));function bd(){return t.jsx(oo,{children:t.jsx($i,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsxs(io,{children:[t.jsx(te,{path:"/",element:t.jsx(td,{})}),t.jsx(te,{path:"/categorias",element:t.jsx(rd,{})}),t.jsx(te,{path:"/comercios",element:t.jsx(ad,{})}),t.jsx(te,{path:"/comercios/:storeId",element:t.jsx(od,{})}),t.jsx(te,{path:"/productos/:productId",element:t.jsx(id,{})}),t.jsx(te,{path:"/pedidos",element:t.jsx(nd,{})}),t.jsx(te,{path:"/carrito",element:t.jsx(sd,{})}),t.jsx(te,{path:"/mandado",element:t.jsx(cd,{})}),t.jsx(te,{path:"/mandado/chat",element:t.jsx(ld,{})}),t.jsx(te,{path:"/favoritos",element:t.jsx(dd,{})}),t.jsx(te,{path:"/notificaciones",element:t.jsx(pd,{})}),t.jsx(te,{path:"/registro/comercio",element:t.jsx(md,{})}),t.jsx(te,{path:"/trabaja-con-nosotros",element:t.jsx(sa,{})}),t.jsx(te,{path:"/registro/fletero",element:t.jsx(sa,{role:"fletero"})}),t.jsx(te,{path:"/registro/delivery",element:t.jsx(wr,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(te,{path:"/mi-cuenta",element:t.jsx(ud,{})}),t.jsx(te,{path:"/panel/comercio",element:t.jsx(gd,{})}),t.jsx(te,{path:"/panel/comercio/producto",element:t.jsx(hd,{})}),t.jsx(te,{path:"/panel/repartidor",element:t.jsx(fd,{})}),t.jsx(te,{path:"/panel/admin",element:t.jsx(yd,{})}),t.jsx(te,{path:"*",element:t.jsx(wr,{to:"/",replace:!0})})]})})})})}const xd=()=>{try{window.top!==window.self&&(window.top.location=window.self.location)}catch{document.documentElement.style.display="none"}};xd();ho({immediate:!0});const eo=document.getElementById("root");if(!eo)throw new Error("No se encontró el nodo root");Dt.createRoot(eo).render(t.jsx(Pe.StrictMode,{children:t.jsx(bd,{})}));export{$l as $,fc as A,Mc as B,Qd as C,ct as D,Pc as E,Cd as F,re as G,Vd as H,Nd as I,je as J,De as K,$d as L,hc as M,vd as N,kd as O,Zd as P,Sd as Q,Kt as R,Jl as S,jd as T,Qa as U,xr as V,Ni as W,Da as X,ms as Y,Md as Z,Ud as _,Se as a,bl as a0,xl as a1,Wd as a2,Ee as a3,bs as a4,ys as a5,Le as a6,tp as a7,z as a8,dn as a9,Jd as aA,Bd as aB,Dd as aC,Hd as aD,Bi as aE,Ti as aF,qd as aG,Gd as aH,Li as aI,Yd as aJ,Kd as aK,Pt as aa,gs as ab,ke as ac,_d as ad,zd as ae,ur as af,Ad as ag,Rd as ah,Pd as ai,Xi as aj,Bn as ak,Ci as al,lr as am,Od as an,st as ao,qi as ap,Ld as aq,mr as ar,Ha as as,ep as at,Ed as au,Ia as av,Wl as aw,hs as ax,Id as ay,Vl as az,Ga as b,Td as c,Nt as d,Sc as e,Fi as f,Bt as g,Fd as h,Xd as i,t as j,gl as k,fr as l,Ot as m,yr as n,br as o,Wa as p,o as q,ia as r,Xa as s,ea as t,Bl as u,Fa as v,Ai as w,Oi as x,xc as y,wc as z};
