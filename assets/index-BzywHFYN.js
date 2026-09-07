const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-BO2JKzSH.js","assets/react-D_B_6qYb.js","assets/AddressMapStyled-Bf9LpAnE.js","assets/AddressMapStyled-CIGW-MKW.css","assets/useCurrentPosition-BYw6bfYw.js","assets/AuthScreen-De9RU4ub.js","assets/formStyles-DnpOsHb7.js","assets/AuthScreenStyled-CuhtNF1e.js","assets/PanelLoginDialogStyled-CM-7pWiI.js","assets/mail-uL23mujr.js","assets/shield-check-vNXVWhTL.js","assets/log-in-CzCuwGyJ.js","assets/RecuperarScreen-DEQ-kdnB.js","assets/CategoriesScreen-Lc7ezxbC.js","assets/StoresDirectoryScreen-DeBNpnwQ.js","assets/StoreProfileScreen-UzrxOOW8.js","assets/saleUnits-CLP-TCsg.js","assets/cartStore-AYNs4yCg.js","assets/clock-3-BWOkKVm3.js","assets/ProductDetailScreen-vKQiRB_d.js","assets/SettingsList-BiYPzi1Q.js","assets/MyOrdersScreen-BcnBjHF4.js","assets/CartScreen-BZAvE6u5.js","assets/ConfirmDialog-BKrZKkmX.js","assets/ErrandScreen-7ejG0ol5.js","assets/errandStore-Bion9qKH.js","assets/ErrandChatScreen-Dh-oGTM_.js","assets/mediaService-D2_VAu2k.js","assets/camera-RfCFM3bg.js","assets/send-CMy59vq8.js","assets/FavoritesScreen-CR1Bb76T.js","assets/NotificationsScreen-C2PtDu59.js","assets/badge-percent-3e-bUCE1.js","assets/CustomerAccountScreen-DQ_CYISQ.js","assets/phone-B9h0cz3u.js","assets/CommerceRegistrationScreen-Asv_ypPP.js","assets/useMediaUpload-CTMFYLii.js","assets/FileField-B_7jq0na.js","assets/ProductFormScreenStyled-CpsMhLfF.js","assets/DeliveryRegistrationScreen-CxjMcxR9.js","assets/MiComercioScreen--pKQq5lE.js","assets/ChatPedidoDialog-Ow227e-q.js","assets/message-square-fIWjJqWO.js","assets/CommercePanelScreen-DBMcjUFF.js","assets/MetricTile-DEwYVFRC.js","assets/ProductFormScreen-CxlH9HUA.js","assets/PanelRepartidorScreen-DOYDh4bU.js","assets/refresh-cw-noOc8IrT.js","assets/DeliveryPanelScreen-7NlpEfFX.js","assets/AdminPostulacionesScreen-CXB1ubpR.js","assets/AdminPanelScreen-g2-36cZs.js"])))=>i.map(i=>d[i]);
import{r as p,a as Do,g as Bo,R as Ie,L as be,N as jr,u as Ho,b as qo,c as ir,H as Go,d as Yo,e as U}from"./react-D_B_6qYb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();var Ba={exports:{}},At={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=p,Uo=Symbol.for("react.element"),Wo=Symbol.for("react.fragment"),Ko=Object.prototype.hasOwnProperty,Xo=Vo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zo={key:!0,ref:!0,__self:!0,__source:!0};function Ha(e,r,a){var i,s={},c=null,n=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(n=r.ref);for(i in r)Ko.call(r,i)&&!Zo.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return{$$typeof:Uo,type:e,key:c,ref:n,props:s,_owner:Xo.current}}At.Fragment=Wo;At.jsx=Ha;At.jsxs=Ha;Ba.exports=At;var t=Ba.exports,nr={},Wr=Do;nr.createRoot=Wr.createRoot,nr.hydrateRoot=Wr.hydrateRoot;const Jo="modulepreload",Qo=function(e){return"/LaFranciaGO/"+e},Kr={},Z=function(r,a,i){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),u=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.allSettled(a.map(m=>{if(m=Qo(m),m in Kr)return;Kr[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Jo,g||(h.as="script"),h.crossOrigin="",h.href=m,u&&h.setAttribute("nonce",u),document.head.appendChild(h),g)return new Promise((C,f)=>{h.addEventListener("load",C),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(n){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=n,window.dispatchEvent(u),!u.defaultPrevented)throw n}return s.then(n=>{for(const u of n||[])u.status==="rejected"&&c(u.reason);return r().catch(c)})};function ei(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:s,onRegisteredSW:c,onRegisterError:n}=e;let u,m;const g=async(h=!0)=>{await m};async function x(){if("serviceWorker"in navigator){if(u=await Z(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(h=>{n==null||n(h)}),!u)return;u.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),u.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),u.register({immediate:r}).then(h=>{c?c("/LaFranciaGO/sw.js",h):s==null||s(h)}).catch(h=>{n==null||n(h)})}}return m=x(),g}var qa={exports:{}},W={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.transitional.element"),Cr=Symbol.for("react.portal"),Ct=Symbol.for("react.fragment"),Et=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),Pt=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),_t=Symbol.for("react.forward_ref"),Rt=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),ti=Symbol.for("react.view_transition"),ri=Symbol.for("react.client.reference");function ge(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Ar:switch(e=e.type,e){case Ct:case zt:case Et:case Rt:case It:case ti:return e;default:switch(e=e&&e.$$typeof,e){case Mt:case _t:case Ft:case Tt:return e;case Pt:return e;default:return r}}case Cr:return r}}}W.ContextConsumer=Pt;W.ContextProvider=Mt;W.Element=Ar;W.ForwardRef=_t;W.Fragment=Ct;W.Lazy=Ft;W.Memo=Tt;W.Portal=Cr;W.Profiler=zt;W.StrictMode=Et;W.Suspense=Rt;W.SuspenseList=It;W.isContextConsumer=function(e){return ge(e)===Pt};W.isContextProvider=function(e){return ge(e)===Mt};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar};W.isForwardRef=function(e){return ge(e)===_t};W.isFragment=function(e){return ge(e)===Ct};W.isLazy=function(e){return ge(e)===Ft};W.isMemo=function(e){return ge(e)===Tt};W.isPortal=function(e){return ge(e)===Cr};W.isProfiler=function(e){return ge(e)===zt};W.isStrictMode=function(e){return ge(e)===Et};W.isSuspense=function(e){return ge(e)===Rt};W.isSuspenseList=function(e){return ge(e)===It};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ct||e===zt||e===Et||e===Rt||e===It||typeof e=="object"&&e!==null&&(e.$$typeof===Ft||e.$$typeof===Tt||e.$$typeof===Mt||e.$$typeof===Pt||e.$$typeof===_t||e.$$typeof===ri||e.getModuleId!==void 0)};W.typeOf=ge;qa.exports=W;var Ga=qa.exports;function ai(e){function r(k,l,b,j,d){for(var N=0,w=0,te=0,D=0,G,R,se=0,ue=0,L,pe=L=G=0,B=0,ce=0,qe=0,le=0,rt=b.length,Ge=rt-1,fe,P="",ae="",Kt="",Xt="",ke;B<rt;){if(R=b.charCodeAt(B),B===Ge&&w+D+te+N!==0&&(w!==0&&(R=w===47?10:47),D=te=N=0,rt++,Ge++),w+D+te+N===0){if(B===Ge&&(0<ce&&(P=P.replace(C,"")),0<P.trim().length)){switch(R){case 32:case 9:case 59:case 13:case 10:break;default:P+=b.charAt(B)}R=59}switch(R){case 123:for(P=P.trim(),G=P.charCodeAt(0),L=1,le=++B;B<rt;){switch(R=b.charCodeAt(B)){case 123:L++;break;case 125:L--;break;case 47:switch(R=b.charCodeAt(B+1)){case 42:case 47:e:{for(pe=B+1;pe<Ge;++pe)switch(b.charCodeAt(pe)){case 47:if(R===42&&b.charCodeAt(pe-1)===42&&B+2!==pe){B=pe+1;break e}break;case 10:if(R===47){B=pe+1;break e}}B=pe}}break;case 91:R++;case 40:R++;case 34:case 39:for(;B++<Ge&&b.charCodeAt(B)!==R;);}if(L===0)break;B++}switch(L=b.substring(le,B),G===0&&(G=(P=P.replace(h,"").trim()).charCodeAt(0)),G){case 64:switch(0<ce&&(P=P.replace(C,"")),R=P.charCodeAt(1),R){case 100:case 109:case 115:case 45:ce=l;break;default:ce=F}if(L=r(l,ce,L,R,d+1),le=L.length,0<re&&(ce=a(F,P,qe),ke=u(3,L,ce,l,X,q,le,R,d,j),P=ce.join(""),ke!==void 0&&(le=(L=ke.trim()).length)===0&&(R=0,L="")),0<le)switch(R){case 115:P=P.replace(O,n);case 100:case 109:case 45:L=P+"{"+L+"}";break;case 107:P=P.replace(v,"$1 $2"),L=P+"{"+L+"}",L=S===1||S===2&&c("@"+L,3)?"@-webkit-"+L+"@"+L:"@"+L;break;default:L=P+L,j===112&&(L=(ae+=L,""))}else L="";break;default:L=r(l,a(l,P,qe),L,j,d+1)}Kt+=L,L=qe=ce=pe=G=0,P="",R=b.charCodeAt(++B);break;case 125:case 59:if(P=(0<ce?P.replace(C,""):P).trim(),1<(le=P.length))switch(pe===0&&(G=P.charCodeAt(0),G===45||96<G&&123>G)&&(le=(P=P.replace(" ",":")).length),0<re&&(ke=u(1,P,l,k,X,q,ae.length,j,d,j))!==void 0&&(le=(P=ke.trim()).length)===0&&(P="\0\0"),G=P.charCodeAt(0),R=P.charCodeAt(1),G){case 0:break;case 64:if(R===105||R===99){Xt+=P+b.charAt(B);break}default:P.charCodeAt(le-1)!==58&&(ae+=s(P,G,R,P.charCodeAt(2)))}qe=ce=pe=G=0,P="",R=b.charCodeAt(++B)}}switch(R){case 13:case 10:w===47?w=0:1+G===0&&j!==107&&0<P.length&&(ce=1,P+="\0"),0<re*ve&&u(0,P,l,k,X,q,ae.length,j,d,j),q=1,X++;break;case 59:case 125:if(w+D+te+N===0){q++;break}default:switch(q++,fe=b.charAt(B),R){case 9:case 32:if(D+N+w===0)switch(se){case 44:case 58:case 9:case 32:fe="";break;default:R!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:D+w+N===0&&(ce=qe=1,fe="\f"+fe);break;case 108:if(D+w+N+ie===0&&0<pe)switch(B-pe){case 2:se===112&&b.charCodeAt(B-3)===58&&(ie=se);case 8:ue===111&&(ie=ue)}break;case 58:D+w+N===0&&(pe=B);break;case 44:w+te+D+N===0&&(ce=1,fe+="\r");break;case 34:case 39:w===0&&(D=D===R?0:D===0?R:D);break;case 91:D+w+te===0&&N++;break;case 93:D+w+te===0&&N--;break;case 41:D+w+N===0&&te--;break;case 40:if(D+w+N===0){if(G===0)switch(2*se+3*ue){case 533:break;default:G=1}te++}break;case 64:w+te+D+N+pe+L===0&&(L=1);break;case 42:case 47:if(!(0<D+N+te))switch(w){case 0:switch(2*R+3*b.charCodeAt(B+1)){case 235:w=47;break;case 220:le=B,w=42}break;case 42:R===47&&se===42&&le+2!==B&&(b.charCodeAt(le+2)===33&&(ae+=b.substring(le,B+1)),fe="",w=0)}}w===0&&(P+=fe)}ue=se,se=R,B++}if(le=ae.length,0<le){if(ce=l,0<re&&(ke=u(2,ae,ce,k,X,q,le,j,d,j),ke!==void 0&&(ae=ke).length===0))return Xt+ae+Kt;if(ae=ce.join(",")+"{"+ae+"}",S*ie!==0){switch(S!==2||c(ae,2)||(ie=0),ie){case 111:ae=ae.replace(E,":-moz-$1")+ae;break;case 112:ae=ae.replace(T,"::-webkit-input-$1")+ae.replace(T,"::-moz-$1")+ae.replace(T,":-ms-input-$1")+ae}ie=0}}return Xt+ae+Kt}function a(k,l,b){var j=l.trim().split(y);l=j;var d=j.length,N=k.length;switch(N){case 0:case 1:var w=0;for(k=N===0?"":k[0]+" ";w<d;++w)l[w]=i(k,l[w],b).trim();break;default:var te=w=0;for(l=[];w<d;++w)for(var D=0;D<N;++D)l[te++]=i(k[D]+" ",j[w],b).trim()}return l}function i(k,l,b){var j=l.charCodeAt(0);switch(33>j&&(j=(l=l.trim()).charCodeAt(0)),j){case 38:return l.replace($,"$1"+k.trim());case 58:return k.trim()+l.replace($,"$1"+k.trim());default:if(0<1*b&&0<l.indexOf("\f"))return l.replace($,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+l}function s(k,l,b,j){var d=k+";",N=2*l+3*b+4*j;if(N===944){k=d.indexOf(":",9)+1;var w=d.substring(k,d.length-1).trim();return w=d.substring(0,k).trim()+w+";",S===1||S===2&&c(w,1)?"-webkit-"+w+w:w}if(S===0||S===2&&!c(d,1))return d;switch(N){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(Q,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return w=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+w+"-webkit-"+d+"-ms-flex-pack"+w+d;case 1005:return A.test(d)?d.replace(f,":-webkit-")+d.replace(f,":-moz-")+d:d;case 1e3:switch(w=d.substring(13).trim(),l=w.indexOf("-")+1,w.charCodeAt(0)+w.charCodeAt(l)){case 226:w=d.replace(M,"tb");break;case 232:w=d.replace(M,"tb-rl");break;case 220:w=d.replace(M,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+w+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(l=(d=k).length-10,w=(d.charCodeAt(l)===33?d.substring(0,l):d).substring(k.indexOf(":",7)+1).trim(),N=w.charCodeAt(0)+(w.charCodeAt(7)|0)){case 203:if(111>w.charCodeAt(8))break;case 115:d=d.replace(w,"-webkit-"+w)+";"+d;break;case 207:case 102:d=d.replace(w,"-webkit-"+(102<N?"inline-":"")+"box")+";"+d.replace(w,"-webkit-"+w)+";"+d.replace(w,"-ms-"+w+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return w=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+w+"-ms-flex-"+w+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(H,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(H,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(K.test(k)===!0)return(w=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?s(k.replace("stretch","fill-available"),l,b,j).replace(":fill-available",":stretch"):d.replace(w,"-webkit-"+w)+d.replace(w,"-moz-"+w.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,b+j===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+d}return d}function c(k,l){var b=k.indexOf(l===1?":":"{"),j=k.substring(0,l!==3?b:10);return b=k.substring(b+1,k.length-1),$e(l!==2?j:j.replace(J,"$1"),b,l)}function n(k,l){var b=s(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return b!==l+";"?b.replace(V," or ($1)").substring(4):"("+l+")"}function u(k,l,b,j,d,N,w,te,D,G){for(var R=0,se=l,ue;R<re;++R)switch(ue=ee[R].call(x,k,se,b,j,d,N,w,te,D,G)){case void 0:case!1:case!0:case null:break;default:se=ue}if(se!==l)return se}function m(k){switch(k){case void 0:case null:re=ee.length=0;break;default:if(typeof k=="function")ee[re++]=k;else if(typeof k=="object")for(var l=0,b=k.length;l<b;++l)m(k[l]);else ve=!!k|0}return m}function g(k){return k=k.prefix,k!==void 0&&($e=null,k?typeof k!="function"?S=1:(S=2,$e=k):S=0),g}function x(k,l){var b=k;if(33>b.charCodeAt(0)&&(b=b.trim()),xe=b,b=[xe],0<re){var j=u(-1,l,b,b,X,q,0,0,0,0);j!==void 0&&typeof j=="string"&&(l=j)}var d=r(F,b,l,0,0);return 0<re&&(j=u(-2,d,b,b,X,q,d.length,0,0,0),j!==void 0&&(d=j)),xe="",ie=0,q=X=1,d}var h=/^\0+/g,C=/[\0\r\f]/g,f=/: */g,A=/zoo|gra/,_=/([,: ])(transform)/g,y=/,\r+?/g,$=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,T=/::(place)/g,E=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,H=/-self|flex-/g,J=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,q=1,X=1,ie=0,S=1,F=[],ee=[],re=0,$e=null,ve=0,xe="";return x.use=m,x.set=g,e!==void 0&&g(e),x}var oi={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ii(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var ni=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Xr=ii(function(e){return ni.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ya={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=typeof Symbol=="function"&&Symbol.for,Er=ne?Symbol.for("react.element"):60103,zr=ne?Symbol.for("react.portal"):60106,Lt=ne?Symbol.for("react.fragment"):60107,Ot=ne?Symbol.for("react.strict_mode"):60108,Nt=ne?Symbol.for("react.profiler"):60114,Dt=ne?Symbol.for("react.provider"):60109,Bt=ne?Symbol.for("react.context"):60110,Pr=ne?Symbol.for("react.async_mode"):60111,Ht=ne?Symbol.for("react.concurrent_mode"):60111,qt=ne?Symbol.for("react.forward_ref"):60112,Gt=ne?Symbol.for("react.suspense"):60113,si=ne?Symbol.for("react.suspense_list"):60120,Yt=ne?Symbol.for("react.memo"):60115,Vt=ne?Symbol.for("react.lazy"):60116,ci=ne?Symbol.for("react.block"):60121,li=ne?Symbol.for("react.fundamental"):60117,di=ne?Symbol.for("react.responder"):60118,pi=ne?Symbol.for("react.scope"):60119;function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Er:switch(e=e.type,e){case Pr:case Ht:case Lt:case Nt:case Ot:case Gt:return e;default:switch(e=e&&e.$$typeof,e){case Bt:case qt:case Vt:case Yt:case Dt:return e;default:return r}}case zr:return r}}}function Va(e){return me(e)===Ht}Y.AsyncMode=Pr;Y.ConcurrentMode=Ht;Y.ContextConsumer=Bt;Y.ContextProvider=Dt;Y.Element=Er;Y.ForwardRef=qt;Y.Fragment=Lt;Y.Lazy=Vt;Y.Memo=Yt;Y.Portal=zr;Y.Profiler=Nt;Y.StrictMode=Ot;Y.Suspense=Gt;Y.isAsyncMode=function(e){return Va(e)||me(e)===Pr};Y.isConcurrentMode=Va;Y.isContextConsumer=function(e){return me(e)===Bt};Y.isContextProvider=function(e){return me(e)===Dt};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er};Y.isForwardRef=function(e){return me(e)===qt};Y.isFragment=function(e){return me(e)===Lt};Y.isLazy=function(e){return me(e)===Vt};Y.isMemo=function(e){return me(e)===Yt};Y.isPortal=function(e){return me(e)===zr};Y.isProfiler=function(e){return me(e)===Nt};Y.isStrictMode=function(e){return me(e)===Ot};Y.isSuspense=function(e){return me(e)===Gt};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Lt||e===Ht||e===Nt||e===Ot||e===Gt||e===si||typeof e=="object"&&e!==null&&(e.$$typeof===Vt||e.$$typeof===Yt||e.$$typeof===Dt||e.$$typeof===Bt||e.$$typeof===qt||e.$$typeof===li||e.$$typeof===di||e.$$typeof===pi||e.$$typeof===ci)};Y.typeOf=me;Ya.exports=Y;var ui=Ya.exports,Mr=ui,mi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gi={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ua={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_r={};_r[Mr.ForwardRef]=gi;_r[Mr.Memo]=Ua;function Zr(e){return Mr.isMemo(e)?Ua:_r[e.$$typeof]||mi}var fi=Object.defineProperty,yi=Object.getOwnPropertyNames,Jr=Object.getOwnPropertySymbols,bi=Object.getOwnPropertyDescriptor,xi=Object.getPrototypeOf,Qr=Object.prototype;function Wa(e,r,a){if(typeof r!="string"){if(Qr){var i=xi(r);i&&i!==Qr&&Wa(e,i,a)}var s=yi(r);Jr&&(s=s.concat(Jr(r)));for(var c=Zr(e),n=Zr(r),u=0;u<s.length;++u){var m=s[u];if(!hi[m]&&!(a&&a[m])&&!(n&&n[m])&&!(c&&c[m])){var g=bi(r,m);try{fi(e,m,g)}catch{}}}}return e}var wi=Wa;const $i=Bo(wi);var he={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var ea=function(e,r){for(var a=[e[0]],i=0,s=r.length;i<s;i+=1)a.push(r[i],e[i+1]);return a},sr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ga.typeOf(e)},wt=Object.freeze([]),Ae=Object.freeze({});function De(e){return typeof e=="function"}function ta(e){return e.displayName||e.name||"Component"}function Rr(e){return e&&typeof e.styledComponentId=="string"}var Be=typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_ATTR||he.SC_ATTR)||"data-styled",Ir=typeof window<"u"&&"HTMLElement"in window,vi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&he.REACT_APP_SC_DISABLE_SPEEDY!==""?he.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&he.REACT_APP_SC_DISABLE_SPEEDY:he.SC_DISABLE_SPEEDY!==void 0&&he.SC_DISABLE_SPEEDY!==""&&he.SC_DISABLE_SPEEDY!=="false"&&he.SC_DISABLE_SPEEDY)),ki={};function Me(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var Si=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,s=0;s<a;s++)i+=this.groupSizes[s];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,n=c;a>=n;)(n<<=1)<0&&Me(16,""+a);this.groupSizes=new Uint32Array(n),this.groupSizes.set(s),this.length=n;for(var u=c;u<n;u++)this.groupSizes[u]=0}for(var m=this.indexOfGroup(a+1),g=0,x=i.length;g<x;g++)this.tag.insertRule(m,i[g])&&(this.groupSizes[a]++,m++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],s=this.indexOfGroup(a),c=s+i;this.groupSizes[a]=0;for(var n=s;n<c;n++)this.tag.deleteRule(s)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var s=this.groupSizes[a],c=this.indexOfGroup(a),n=c+s,u=c;u<n;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),yt=new Map,$t=new Map,Xe=1,at=function(e){if(yt.has(e))return yt.get(e);for(;$t.has(Xe);)Xe++;var r=Xe++;return yt.set(e,r),$t.set(r,e),r},ji=function(e){return $t.get(e)},Ai=function(e,r){r>=Xe&&(Xe=r+1),yt.set(e,r),$t.set(r,e)},Ci="style["+Be+'][data-styled-version="5.3.11"]',Ei=new RegExp("^"+Be+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),zi=function(e,r,a){for(var i,s=a.split(","),c=0,n=s.length;c<n;c++)(i=s[c])&&e.registerName(r,i)},Pi=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],s=0,c=a.length;s<c;s++){var n=a[s].trim();if(n){var u=n.match(Ei);if(u){var m=0|parseInt(u[1],10),g=u[2];m!==0&&(Ai(g,m),zi(e,g,u[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(n)}}},Mi=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ka=function(e){var r=document.head,a=e||r,i=document.createElement("style"),s=function(u){for(var m=u.childNodes,g=m.length;g>=0;g--){var x=m[g];if(x&&x.nodeType===1&&x.hasAttribute(Be))return x}}(a),c=s!==void 0?s.nextSibling:null;i.setAttribute(Be,"active"),i.setAttribute("data-styled-version","5.3.11");var n=Mi();return n&&i.setAttribute("nonce",n),a.insertBefore(i,c),i},_i=function(){function e(a){var i=this.element=Ka(a);i.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,n=0,u=c.length;n<u;n++){var m=c[n];if(m.ownerNode===s)return m}Me(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Ri=function(){function e(a){var i=this.element=Ka(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var s=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(s,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Ii=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),ra=Ir,Ti={isServer:!Ir,useCSSOMInjection:!vi},vt=function(){function e(a,i,s){a===void 0&&(a=Ae),i===void 0&&(i={}),this.options=ye({},Ti,{},a),this.gs=i,this.names=new Map(s),this.server=!!a.isServer,!this.server&&Ir&&ra&&(ra=!1,function(c){for(var n=document.querySelectorAll(Ci),u=0,m=n.length;u<m;u++){var g=n[u];g&&g.getAttribute(Be)!=="active"&&(Pi(c,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}e.registerId=function(a){return at(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(s=(i=this.options).isServer,c=i.useCSSOMInjection,n=i.target,a=s?new Ii(n):c?new _i(n):new Ri(n),new Si(a)));var a,i,s,c,n},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(at(a),this.names.has(a))this.names.get(a).add(i);else{var s=new Set;s.add(i),this.names.set(a,s)}},r.insertRules=function(a,i,s){this.registerName(a,i),this.getTag().insertRules(at(a),s)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(at(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),s=i.length,c="",n=0;n<s;n++){var u=ji(n);if(u!==void 0){var m=a.names.get(u),g=i.getGroup(n);if(m&&g&&m.size){var x=Be+".g"+n+'[id="'+u+'"]',h="";m!==void 0&&m.forEach(function(C){C.length>0&&(h+=C+",")}),c+=""+g+x+'{content:"'+h+`"}/*!sc*/
`}}}return c}(this)},e}(),Fi=/(a)(d)/gi,aa=function(e){return String.fromCharCode(e+(e>25?39:97))};function cr(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=aa(r%52)+a;return(aa(r%52)+a).replace(Fi,"$1-$2")}var Te=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},Xa=function(e){return Te(5381,e)};function Za(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(De(a)&&!Rr(a))return!1}return!0}var Li=Xa("5.3.11"),Oi=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Za(r),this.componentId=a,this.baseHash=Te(Li,a),this.baseStyle=i,vt.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var s=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(s,this.staticRulesId))c.push(this.staticRulesId);else{var n=_e(this.rules,r,a,i).join(""),u=cr(Te(this.baseHash,n)>>>0);if(!a.hasNameForId(s,u)){var m=i(n,"."+u,void 0,s);a.insertRules(s,u,m)}c.push(u),this.staticRulesId=u}else{for(var g=this.rules.length,x=Te(this.baseHash,i.hash),h="",C=0;C<g;C++){var f=this.rules[C];if(typeof f=="string")h+=f;else if(f){var A=_e(f,r,a,i),_=Array.isArray(A)?A.join(""):A;x=Te(x,_+C),h+=_}}if(h){var y=cr(x>>>0);if(!a.hasNameForId(s,y)){var $=i(h,"."+y,void 0,s);a.insertRules(s,y,$)}c.push(y)}}return c.join(" ")},e}(),Ni=/^\s*\/\/.*$/gm,Di=[":","[",".","#"];function Bi(e){var r,a,i,s,c=Ae,n=c.options,u=n===void 0?Ae:n,m=c.plugins,g=m===void 0?wt:m,x=new ai(u),h=[],C=function(_){function y($){if($)try{_($+"}")}catch{}}return function($,v,T,E,M,O,V,H,J,K){switch($){case 1:if(J===0&&v.charCodeAt(0)===64)return _(v+";"),"";break;case 2:if(H===0)return v+"/*|*/";break;case 3:switch(H){case 102:case 112:return _(T[0]+v),"";default:return v+(K===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(y)}}}(function(_){h.push(_)}),f=function(_,y,$){return y===0&&Di.indexOf($[a.length])!==-1||$.match(s)?_:"."+r};function A(_,y,$,v){v===void 0&&(v="&");var T=_.replace(Ni,""),E=y&&$?$+" "+y+" { "+T+" }":T;return r=v,a=y,i=new RegExp("\\"+a+"\\b","g"),s=new RegExp("(\\"+a+"\\b){2,}"),x($||!y?"":y,E)}return x.use([].concat(g,[function(_,y,$){_===2&&$.length&&$[0].lastIndexOf(a)>0&&($[0]=$[0].replace(i,f))},C,function(_){if(_===-2){var y=h;return h=[],y}}])),A.hash=g.length?g.reduce(function(_,y){return y.name||Me(15),Te(_,y.name)},5381).toString():"",A}var Ja=Ie.createContext();Ja.Consumer;var Qa=Ie.createContext(),Hi=(Qa.Consumer,new vt),lr=Bi();function eo(){return p.useContext(Ja)||Hi}function to(){return p.useContext(Qa)||lr}var ro=function(){function e(r,a){var i=this;this.inject=function(s,c){c===void 0&&(c=lr);var n=i.name+c.hash;s.hasNameForId(i.id,n)||s.insertRules(i.id,n,c(i.rules,n,"@keyframes"))},this.toString=function(){return Me(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=lr),this.name+r.hash},e}(),qi=/([A-Z])/,Gi=/([A-Z])/g,Yi=/^ms-/,Vi=function(e){return"-"+e.toLowerCase()};function oa(e){return qi.test(e)?e.replace(Gi,Vi).replace(Yi,"-ms-"):e}var ia=function(e){return e==null||e===!1||e===""};function _e(e,r,a,i){if(Array.isArray(e)){for(var s,c=[],n=0,u=e.length;n<u;n+=1)(s=_e(e[n],r,a,i))!==""&&(Array.isArray(s)?c.push.apply(c,s):c.push(s));return c}if(ia(e))return"";if(Rr(e))return"."+e.styledComponentId;if(De(e)){if(typeof(g=e)!="function"||g.prototype&&g.prototype.isReactComponent||!r)return e;var m=e(r);return _e(m,r,a,i)}var g;return e instanceof ro?a?(e.inject(a,i),e.getName(i)):e:sr(e)?function x(h,C){var f,A,_=[];for(var y in h)h.hasOwnProperty(y)&&!ia(h[y])&&(Array.isArray(h[y])&&h[y].isCss||De(h[y])?_.push(oa(y)+":",h[y],";"):sr(h[y])?_.push.apply(_,x(h[y],y)):_.push(oa(y)+": "+(f=y,(A=h[y])==null||typeof A=="boolean"||A===""?"":typeof A!="number"||A===0||f in oi||f.startsWith("--")?String(A).trim():A+"px")+";"));return C?[C+" {"].concat(_,["}"]):_}(e):e.toString()}var na=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function oe(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return De(e)||sr(e)?na(_e(ea(wt,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:na(_e(ea(e,a)))}var ao=function(e,r,a){return a===void 0&&(a=Ae),e.theme!==a.theme&&e.theme||r||a.theme},Ui=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wi=/(^-|-$)/g;function Zt(e){return e.replace(Ui,"-").replace(Wi,"")}var Tr=function(e){return cr(Xa(e)>>>0)};function ot(e){return typeof e=="string"&&!0}var dr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ki=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Xi(e,r,a){var i=e[a];dr(r)&&dr(i)?oo(i,r):e[a]=r}function oo(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var s=0,c=a;s<c.length;s++){var n=c[s];if(dr(n))for(var u in n)Ki(u)&&Xi(e,n[u],u)}return e}var Ze=Ie.createContext();Ze.Consumer;function Zi(e){var r=p.useContext(Ze),a=p.useMemo(function(){return function(i,s){if(!i)return Me(14);if(De(i)){var c=i(s);return c}return Array.isArray(i)||typeof i!="object"?Me(8):s?ye({},s,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Ie.createElement(Ze.Provider,{value:a},e.children):null}var Jt={};function io(e,r,a){var i=Rr(e),s=!ot(e),c=r.attrs,n=c===void 0?wt:c,u=r.componentId,m=u===void 0?function(v,T){var E=typeof v!="string"?"sc":Zt(v);Jt[E]=(Jt[E]||0)+1;var M=E+"-"+Tr("5.3.11"+E+Jt[E]);return T?T+"-"+M:M}(r.displayName,r.parentComponentId):u,g=r.displayName,x=g===void 0?function(v){return ot(v)?"styled."+v:"Styled("+ta(v)+")"}(e):g,h=r.displayName&&r.componentId?Zt(r.displayName)+"-"+r.componentId:r.componentId||m,C=i&&e.attrs?Array.prototype.concat(e.attrs,n).filter(Boolean):n,f=r.shouldForwardProp;i&&e.shouldForwardProp&&(f=r.shouldForwardProp?function(v,T,E){return e.shouldForwardProp(v,T,E)&&r.shouldForwardProp(v,T,E)}:e.shouldForwardProp);var A,_=new Oi(a,h,i?e.componentStyle:void 0),y=_.isStatic&&n.length===0,$=function(v,T){return function(E,M,O,V){var H=E.attrs,J=E.componentStyle,K=E.defaultProps,Q=E.foldedComponentIds,q=E.shouldForwardProp,X=E.styledComponentId,ie=E.target,S=function(j,d,N){j===void 0&&(j=Ae);var w=ye({},d,{theme:j}),te={};return N.forEach(function(D){var G,R,se,ue=D;for(G in De(ue)&&(ue=ue(w)),ue)w[G]=te[G]=G==="className"?(R=te[G],se=ue[G],R&&se?R+" "+se:R||se):ue[G]}),[w,te]}(ao(M,p.useContext(Ze),K)||Ae,M,H),F=S[0],ee=S[1],re=function(j,d,N,w){var te=eo(),D=to(),G=d?j.generateAndInjectStyles(Ae,te,D):j.generateAndInjectStyles(N,te,D);return G}(J,V,F),$e=O,ve=ee.$as||M.$as||ee.as||M.as||ie,xe=ot(ve),k=ee!==M?ye({},M,{},ee):M,l={};for(var b in k)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?l.as=k[b]:(q?q(b,Xr,ve):!xe||Xr(b))&&(l[b]=k[b]));return M.style&&ee.style!==M.style&&(l.style=ye({},M.style,{},ee.style)),l.className=Array.prototype.concat(Q,X,re!==X?re:null,M.className,ee.className).filter(Boolean).join(" "),l.ref=$e,p.createElement(ve,l)}(A,v,T,y)};return $.displayName=x,(A=Ie.forwardRef($)).attrs=C,A.componentStyle=_,A.displayName=x,A.shouldForwardProp=f,A.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):wt,A.styledComponentId=h,A.target=i?e.target:e,A.withComponent=function(v){var T=r.componentId,E=function(O,V){if(O==null)return{};var H,J,K={},Q=Object.keys(O);for(J=0;J<Q.length;J++)H=Q[J],V.indexOf(H)>=0||(K[H]=O[H]);return K}(r,["componentId"]),M=T&&T+"-"+(ot(v)?v:Zt(ta(v)));return io(v,ye({},E,{attrs:C,componentId:M}),a)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?oo({},e.defaultProps,v):v}}),Object.defineProperty(A,"toString",{value:function(){return"."+A.styledComponentId}}),s&&$i(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var o=function(e){return function r(a,i,s){if(s===void 0&&(s=Ae),!Ga.isValidElementType(i))return Me(1,String(i));var c=function(){return a(i,s,oe.apply(void 0,arguments))};return c.withConfig=function(n){return r(a,i,ye({},s,{},n))},c.attrs=function(n){return r(a,i,ye({},s,{attrs:Array.prototype.concat(s.attrs,n).filter(Boolean)}))},c}(io,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var Ji=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=Za(a),vt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,s,c){var n=c(_e(this.rules,i,s,c).join(""),""),u=this.componentId+a;s.insertRules(u,u,n)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,s,c){a>2&&vt.registerId(this.componentId+a),this.removeStyles(a,s),this.createStyles(a,i,s,c)},e}();function Qi(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=oe.apply(void 0,[e].concat(a)),c="sc-global-"+Tr(JSON.stringify(s)),n=new Ji(s,c);function u(g){var x=eo(),h=to(),C=p.useContext(Ze),f=p.useRef(x.allocateGSInstance(c)).current;return x.server&&m(f,g,x,C,h),p.useLayoutEffect(function(){if(!x.server)return m(f,g,x,C,h),function(){return n.removeStyles(f,x)}},[f,g,x,C,h]),null}function m(g,x,h,C,f){if(n.isStatic)n.renderStyles(g,ki,h,f);else{var A=ye({},x,{theme:ao(x,C,u.defaultProps)});n.renderStyles(g,A,h,f)}}return Ie.memo(u)}function Ut(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=oe.apply(void 0,[e].concat(a)).join(""),c=Tr(s);return new ro(c,s)}const en=Qi`
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
`,Se={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},tn=Se.shadow,rn={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},an={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},on=e=>({mode:e,color:e==="dark"?rn:Se.color,typography:Se.typography,spacing:Se.spacing,radius:Se.radius,shadow:e==="dark"?an:tn,layout:Se.layout,breakpoints:Se.breakpoints,zIndex:Se.zIndex}),no="lafranciago-theme-mode",so=p.createContext(null),nn=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(no);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function sn({children:e}){const[r,a]=p.useState(nn),i=p.useRef(!1);p.useEffect(()=>{if(window.localStorage.setItem(no,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const m=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(m),delete document.documentElement.dataset.themeTransition}},[r]);const s=p.useCallback(()=>{a(m=>m==="light"?"dark":"light")},[]),c=p.useCallback(m=>{a(m)},[]),n=p.useMemo(()=>on(r),[r]),u=p.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:s,setMode:c}),[r,c,s]);return t.jsx(so.Provider,{value:u,children:t.jsxs(Zi,{theme:n,children:[t.jsx(en,{}),e]})})}function cn(){const e=p.useContext(so);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ln={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,r)=>{const a=p.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:n,className:u="",children:m,...g},x)=>p.createElement("svg",{ref:x,...ln,width:s,height:s,stroke:i,strokeWidth:n?Number(c)*24/Number(s):c,className:["lucide",`lucide-${dn(e)}`,u].join(" "),...g},[...r.map(([h,C])=>p.createElement(h,C)),...Array.isArray(m)?m:[m]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=z("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=z("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=z("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=z("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=z("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=z("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=z("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=z("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=z("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=z("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=z("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=z("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=z("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=z("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=z("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=z("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function vo({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const bt="lafranciago:foto-perfil",ur=new Set;let Ye=null,la=!1;const Cn=()=>ur.forEach(e=>e()),ko=e=>/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(e),En=()=>{try{const e=window.localStorage.getItem(bt);return e&&ko(e)?e:null}catch{return null}};function da(e){if(!(e!==null&&!ko(e))){Ye=e;try{e?window.localStorage.setItem(bt,e):window.localStorage.removeItem(bt)}catch{try{window.localStorage.removeItem(bt)}catch{}}Cn()}}function zn(){const[e,r]=p.useState(Ye);p.useEffect(()=>{la||(la=!0,Ye=En()),r(Ye);const i=()=>r(Ye);return ur.add(i),()=>{ur.delete(i)}},[]);const a=p.useCallback(()=>da(null),[]);return{photo:e,setPhoto:da,clearPhoto:a}}const Pn="https://photon.komoot.io/api/",Mn="https://nominatim.openstreetmap.org/reverse",mr={lat:-31.4063691,lon:-62.6332043},Qt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),_n=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Rn=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function In(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(mr.lat),lon:String(mr.lon)});try{const s=await fetch(`${Pn}?${i.toString()}`,{signal:r});return s.ok?((await s.json()).features??[]).map((n,u)=>{var h;const m=n.properties??{},[g,x]=((h=n.geometry)==null?void 0:h.coordinates)??[];return typeof x!="number"||typeof g!="number"?null:{id:`${m.type??"geo"}-${u}-${x}-${g}`,label:_n(m),context:Rn(m),lat:x,lon:g}}).filter(n=>n!==null).sort((n,u)=>{const m=Qt(a),g=Qt(n.label).startsWith(m),x=Qt(u.label).startsWith(m);return g!==x?g?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Tn(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const s=await fetch(`${Mn}?${i.toString()}`,{signal:a});if(!s.ok)return null;const n=(await s.json()).address??{};return[n.road,n.house_number].filter(Boolean).join(" ")||n.neighbourhood||n.city||null}catch{return null}}const Fn=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],So="https://lafranciago-api.lafranciago-api.workers.dev",we=()=>So.length>0;class jo extends Error{constructor(r,a){super(r),this.status=a,this.name="ApiError"}}async function nt(e,r={}){const a=await fetch(`${So}${e}`,{...r,credentials:"include",headers:{...r.body instanceof FormData?{}:{"Content-Type":"application/json"},...r.headers}});if(!a.ok){const i=await a.json().then(s=>s.error).catch(()=>null);throw new jo(i??`Error ${a.status}`,a.status)}return a.json()}const I={get:e=>nt(e),post:(e,r)=>nt(e,{method:"POST",body:r instanceof FormData?r:JSON.stringify(r??{})}),patch:(e,r)=>nt(e,{method:"PATCH",body:JSON.stringify(r??{})}),delete:e=>nt(e,{method:"DELETE"})},Ve={registro:e=>I.post("/auth/registro",e),login:e=>I.post("/auth/login",e),loginPanel:e=>I.post("/auth/login-panel",e),logout:()=>I.post("/auth/logout"),yo:()=>I.get("/auth/yo"),recuperar:e=>I.post("/auth/recuperar",{email:e}),confirmarRecuperacion:(e,r)=>I.post("/auth/recuperar/confirmar",{token:e,password:r})},Cp={crear:(e,r)=>I.post("/postulaciones",{rol:e,datos:r}),mias:()=>I.get("/postulaciones/mias")},Ep={postulaciones:(e="pendiente")=>I.get(`/admin/postulaciones?estado=${e}`),revisar:(e,r,a)=>I.post(`/admin/postulaciones/${e}`,{decision:r,nota:a})},Ln={listar:(e={})=>{const r=new URLSearchParams;e.rubro&&r.set("rubro",e.rubro),e.q&&r.set("q",e.q);const a=r.toString();return I.get(`/comercios${a?`?${a}`:""}`)},detalle:e=>I.get(`/comercios/${e}`),crear:e=>I.post("/comercios",e)},On={portada:()=>I.get("/ofertas")},zp={ver:()=>I.get("/mi-comercio"),crearProducto:e=>I.post("/productos",e),editarProducto:(e,r)=>I.patch(`/productos/${e}`,r),borrarProducto:e=>I.delete(`/productos/${e}`),ofertas:()=>I.get("/mi-comercio/ofertas"),crearOferta:e=>I.post("/mi-comercio/ofertas",e),borrarOferta:e=>I.delete(`/mi-comercio/ofertas/${e}`),activarOferta:(e,r)=>I.patch(`/mi-comercio/ofertas/${e}`,{activa:r})},Pp={pedidos:e=>I.get(`/mi-comercio/pedidos${e?`?estado=${e}`:""}`),envios:()=>I.get("/mi-comercio/envios"),mensajes:e=>I.get(`/pedidos/${e}/mensajes`),enviarMensaje:(e,r)=>I.post(`/pedidos/${e}/mensajes`,{texto:r})},Mp={disponibles:(e,r)=>{const a=new URLSearchParams;typeof e=="number"&&typeof r=="number"&&(a.set("lat",String(e)),a.set("lon",String(r)));const i=a.toString();return I.get(`/delivery/disponibles${i?`?${i}`:""}`)},detalle:e=>I.get(`/delivery/pedidos/${e}`),tomar:(e,r,a)=>I.post(`/delivery/pedidos/${e}/tomar`,{lat:r,lon:a}),actualizarUbicacion:(e,r)=>I.post("/delivery/ubicacion",{lat:e,lon:r}),misEnvios:()=>I.get("/delivery/mis-envios"),avanzar:(e,r)=>I.post(`/delivery/envios/${e}/estado`,{estado:r})},_p={listar:()=>I.get("/pedidos"),crear:e=>I.post("/pedidos",e)},Ao={listar:()=>I.get("/direcciones"),crear:e=>I.post("/direcciones",e)},hr={listar:()=>I.get("/favoritos"),agregar:e=>I.post(`/favoritos/${e}`),quitar:e=>I.delete(`/favoritos/${e}`)},Rp={subir:(e,r)=>{const a=new FormData;return a.append("archivo",e,r),I.post("/media",a)}},gr=new Set;let fr=[],Fe="inicial";const pa=()=>gr.forEach(e=>e());async function Co(){if(Fe==="inicial"){if(Fe="cargando",!we()){Fe="listo",pa();return}try{const{direcciones:e}=await Ao.listar();fr=e.map(r=>({id:r.id,label:r.etiqueta,address:r.direccion,primary:r.es_principal===1}))}catch{fr=[]}Fe="listo",pa()}}function Eo(){return Fe="inicial",Co()}async function Nn(e){if(!we())return null;const{id:r}=await Ao.crear(e);return await Eo(),r}function Ip(){const[,e]=p.useState(0);p.useEffect(()=>{const a=()=>e(i=>i+1);return gr.add(a),Co(),()=>{gr.delete(a)}},[]);const r=p.useCallback(()=>Eo(),[]);return{direcciones:fr,cargando:Fe!=="listo",recargar:r}}const Dn=Ut`
  from { opacity: 0; }
  to { opacity: 1; }
`,Bn=Ut`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Hn=o.div`
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
  animation: ${Dn} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qn=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Bn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Gn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Yn=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,Vn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Un=o.input`
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
`,Wn=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,Kn=o.button`
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
`,Xn=o.button`
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
`;function Zn({open:e,address:r,onCancel:a,onSave:i}){const[s,c]=p.useState("");if(p.useEffect(()=>{e&&c("")},[e]),p.useEffect(()=>{if(!e)return;const m=g=>{g.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,e]),!e)return null;const n=s.trim(),u=m=>{m.preventDefault(),n&&i(n)};return t.jsx(Hn,{onClick:m=>{m.stopPropagation(),a()},role:"presentation",children:t.jsxs(qn,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:m=>m.stopPropagation(),children:[t.jsx(Gn,{children:"Nombre de la dirección"}),r?t.jsx(Yn,{children:r}):null,t.jsx(Vn,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(Un,{id:"address-name",value:s,onChange:m=>c(m.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(Wn,{children:[t.jsx(Kn,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(Xn,{type:"submit",disabled:!n,children:"Guardar"})]})]})})}const Ce=oe`
  ${({theme:e})=>e.mode==="dark"&&oe`
      color: ${e.color.neonMuted};
    `}
`,yr=oe`
  ${({theme:e})=>e.mode==="dark"&&oe`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,Jn=oe`
  ${({theme:e})=>e.mode==="dark"&&oe`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;oe`
  ${({theme:e})=>e.mode==="dark"&&oe`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const Qn=o.div`
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
`,es=o.div`
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
`,ts=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,rs=o.span`
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
`,as=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,os=o.button`
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

  ${Ce};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,is=o.div`
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
`,ns=o.div`
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
`,ss=o.input`
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
`,cs=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,ls=o.button`
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
`,ds=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,ps=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,us=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,ms=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hs=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,gs=o.button`
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
`,fs=o.button`
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

  ${Ce};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,ys=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,bs=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,xs=o.button`
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
`,ws=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,$s=o.button`
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
`,vs=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ks=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ss=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,js=p.lazy(()=>Z(()=>import("./AddressMap-BO2JKzSH.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.AddressMap}))),As=260,Cs=350;function Es({open:e,currentId:r,onClose:a,onSelect:i,startOnNew:s=!1}){const[c,n]=p.useState(!1),[u,m]=p.useState(!1),[g,x]=p.useState(s?"new":"list"),[h,C]=p.useState(""),[f,A]=p.useState([]),[_,y]=p.useState(!1),[$,v]=p.useState(null),[T,E]=p.useState([]),[M,O]=p.useState(!1),V=p.useRef(!1);p.useEffect(()=>{if(e){n(!0),x(s?"new":"list");const F=window.requestAnimationFrame(()=>m(!0));return()=>window.cancelAnimationFrame(F)}if(!c)return;m(!1);const S=window.setTimeout(()=>{n(!1),x(s?"new":"list"),C(""),A([]),v(null),O(!1)},As);return()=>window.clearTimeout(S)},[c,e,s]),p.useEffect(()=>{if(!e)return;const S=F=>{if(F.key==="Escape"&&!M){if(g==="new"){x("list");return}a()}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[M,a,e,g]),p.useEffect(()=>{if(g!=="new")return;if(V.current){V.current=!1;return}const S=h.trim();if(S.length<2){A([]),y(!1);return}const F=new AbortController;y(!0);const ee=window.setTimeout(()=>{In(S,F.signal).then(re=>{A(re),y(!1)}).catch(()=>y(!1))},Cs);return()=>{window.clearTimeout(ee),F.abort()}},[h,g]);const H=p.useMemo(()=>[...Fn,...T],[T]),J=S=>{V.current=!0,C(S.label),A([]),v({lat:S.lat,lon:S.lon})},K=(S,F)=>{v({lat:S,lon:F}),Tn(S,F).then(ee=>{ee&&(V.current=!0,C(ee),A([]))})},Q=async S=>{const F=h.trim();O(!1);try{const re=await Nn({etiqueta:S,direccion:F,lat:$==null?void 0:$.lat,lon:$==null?void 0:$.lon});if(re){i(re,F),a();return}}catch{}const ee={id:`custom-${Date.now()}`,label:S,address:F,primary:!1};E(re=>[...re,ee]),i(ee.id,ee.address),a()};if(!c)return null;const q=g==="new",X=$??mr,ie=$!==null&&h.trim().length>=3;return t.jsxs(Qn,{"data-visible":u,onClick:a,role:"presentation",children:[t.jsxs(es,{"data-visible":u,"data-full":q,role:"dialog","aria-modal":"true","aria-label":q?"Agregar una dirección nueva":"Dirección de entrega",onClick:S=>S.stopPropagation(),children:[t.jsxs(ts,{children:[t.jsx(rs,{"aria-hidden":"true"}),q?t.jsx(fs,{type:"button",onClick:()=>x("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(pn,{size:18,"aria-hidden":"true"})}):null,t.jsx(as,{children:q?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(os,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx($o,{size:18,"aria-hidden":"true"})})]}),t.jsx(is,{"data-full":q,children:q?t.jsxs(t.Fragment,{children:[t.jsxs(ns,{children:[t.jsx(pr,{size:18,"aria-hidden":"true"}),t.jsx(ss,{value:h,onChange:S=>C(S.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),f.length>0?t.jsx(ws,{"aria-label":"Sugerencias de direcciones",children:f.map(S=>t.jsxs($s,{type:"button",onClick:()=>J(S),children:[t.jsx(St,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(vs,{children:S.label}),S.context?t.jsx(ks,{children:S.context}):null]})]},S.id))}):null,f.length===0&&_?t.jsx(Ss,{children:"Buscando…"}):null,t.jsx(ys,{children:t.jsx(p.Suspense,{fallback:null,children:t.jsx(js,{lat:X.lat,lon:X.lon,onPick:K})})}),t.jsx(bs,{children:$?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(xs,{type:"button",onClick:()=>O(!0),disabled:!ie,children:[t.jsx(St,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(cs,{children:"Tus direcciones guardadas"}),H.map(S=>t.jsxs(ls,{type:"button","data-current":S.id===r,onClick:()=>{i(S.id,S.address),a()},children:[t.jsx(ds,{children:t.jsx(Or,{size:18,"aria-hidden":"true"})}),t.jsxs(ps,{children:[t.jsx(us,{children:S.label}),t.jsx(ms,{children:S.address})]}),S.id===r?t.jsx(hs,{"aria-label":"Dirección actual",children:t.jsx(mn,{size:16,"aria-hidden":"true"})}):null]},S.id)),t.jsxs(gs,{type:"button",onClick:()=>x("new"),children:[t.jsx(go,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(Zn,{open:M,address:h.trim(),onCancel:()=>O(!1),onSave:Q})]})}const zs=o.form`
  width: 100%;
`,Ps=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Ms=o.div`
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
`,_s=o.input`
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
`,Rs=o.button`
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
`,zo=p.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:s,id:c="marketplace-search"},n){const u=m=>{m.preventDefault()};return t.jsxs(zs,{onSubmit:u,role:"search",children:[t.jsx(Ps,{htmlFor:c,children:s??"Buscá productos, comercios o categorías"}),t.jsxs(Ms,{children:[t.jsx(pr,{size:18,"aria-hidden":"true"}),t.jsx(_s,{id:c,ref:n,value:r,onChange:m=>a(m.target.value),placeholder:i,type:"search"}),t.jsx(Rs,{type:"submit","aria-label":"Buscar",children:t.jsx(pr,{size:16,"aria-hidden":"true"})})]})]})}),Is=Ut`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,Ts=Ut`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,Fs=o.button`
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
`,Ls=o.span`
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
  animation: ${Is} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Os=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Ns=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Ds=o.span`
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
`,Bs=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hs=o.span`
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
`,qs=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${Ts} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,Gs=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,Ys=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,Vs=o.span`
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
`;function ua({isDarkMode:e,onToggle:r}){return t.jsxs(Fs,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(Ls,{"data-dark":e,"aria-hidden":"true",children:t.jsx(bn,{size:14,"aria-hidden":"true"})}),t.jsxs(Os,{children:[t.jsxs(Ns,{children:["Modo",t.jsx(Ds,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Bs,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(Hs,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(qs,{}),t.jsx(Gs,{"data-dark":e}),t.jsxs(Ys,{children:[t.jsx(ca,{size:12,"aria-hidden":"true"}),t.jsx(sa,{size:12,"aria-hidden":"true"})]}),t.jsx(Vs,{"data-dark":e,children:e?t.jsx(sa,{size:12,"aria-hidden":"true"}):t.jsx(ca,{size:12,"aria-hidden":"true"})})]})]})}const Us=o.div`
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
`,Ws=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Ks=o.div`
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
`;const Xs=o.button`
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
`;const ma=o.span`
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
`,er=o.img`
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
`;const ha=o.span`
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
`,ga=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Zs=o.span`
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
`;const Js=o(Zs)`
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
`;const Tp=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,Fp=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Lp=o.span`
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
`,Op=o.div`
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
`,Np=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Hr=oe`
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
  ${Hr};
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
`;const Dp=o.button`
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
`,Qs=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,ze=o.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,Ee=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,ec=o.div`
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
`,Bp=o.span`
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
`,Hp=o.h1`
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
`,qp=o.p`
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
`,qr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(qr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(qr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(qr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const tc=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,rc=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,Gp=o.h2`
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
`,Yp=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,ac=o.span`
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
`;o(ac)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const oc=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Vp=o(oc)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const ic=o(be)`
  ${Hr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,nc=o(ic)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Up=o.button`
  ${Hr};
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
`;o(tc)`
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
`;o(jr)`
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
`;const sc=o.nav`
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
`,cc=o.ul`
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
`,Ue=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  ${Ce};

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
`,lc=o(jr)`
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

    ${({theme:e})=>e.mode==="dark"&&oe`
        color: ${e.color.neon};
      `};
  }

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${Ue},
  &[aria-current='page'] ${Ue} {
    ${yr};
  }

  /* Salvo el central: ahí el ícono se mantiene blanco y plano. */
  &[data-primary='true'].active ${Ue},
  &[data-primary='true'][aria-current='page'] ${Ue} {
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
`;const dc=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&oe`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,pc=o.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-height: 2.75rem;
  min-width: 0;
  flex: 1 1 auto;

  /* Se corre para dejarle al logo los 36px que recorre. Por debajo de 360px
     no se agrega: ahí el header ya viene justo y empujaría el carrito y el
     perfil fuera de la pantalla. */
  @media (min-width: 360px) and (max-width: 1023px) {
    margin-left: 2.25rem;
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
`,uc=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mc=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,hc=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Po=oe`
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
`,gc=o.button`
  ${Po};
`,fa=o(be)`
  ${Po};
`,fc=o.img`
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
`,yc=o.span`
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
`,bc=o.div`
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
`;const xc=o.div`
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
`,wc=o.div`
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
`,$c=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,vc=o.span`
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
`,kc=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Sc=o.span`
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
    En mobile el logo se corre su propio ancho hacia la derecha y vuelve, una
    y otra vez. Se anima con transform, que la compone la GPU y no fuerza
    recalcular el layout del header en cada cuadro.
  */
  animation: lfg-logo-bounce 2.6s ease-in-out infinite;

  @keyframes lfg-logo-bounce {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(2.25rem);
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
`,jc=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,Ac=oe`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Cc=oe`
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
`,Mo=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,ya=o.div`
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
`,ba=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,Ec=o.div`
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
`,Pe=o.span`
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

  ${Ce};
`,st=o(jr)`
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
  &.active ${Pe},
  &[aria-current='page'] ${Pe} {
    ${yr};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Pe} {
    ${yr};
  }
`,ct=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,lt=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,dt=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,pt=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,ut=o.nav`
  display: grid;
  gap: 0.25rem;
`,mt=o.section`
  display: block;
`,ht=o.span`
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
`,xa=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,wa=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Ac};
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
`,zc=o.button`
  ${Cc};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${Jn};
  ${Ce};
`,$a=o.div`
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
`,Pc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Mc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,_c=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,Rc=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,va=o.button`
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
`,Ic=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Tc=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,Fc=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Oc=o.button`
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
`,Nc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Dc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Bc=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Hc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,qc=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Gc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Yc=o.article`
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
`,Vc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Uc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Wc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Kc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Xc=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zc=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,tr="/LaFranciaGO/favicon.png",Jc="Av. San Martín 123",ka=3,Sa=420,Qc=260,ja=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:Or,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:mo},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Je},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:Wt},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:Br}],Aa=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Re},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:vo},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:Dr},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:kt}],el=o.aside`
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
`,tl=o(Mo)`
  height: 100%;
`,Ca=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Re,items:[{icon:kt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Je,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Je,items:[{icon:St,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Re,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:St,items:[{icon:Wt,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:kt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],rl=[{to:"/",label:"Inicio",icon:Or},{to:"/categorias",label:"Categorías",icon:mo},{to:"/pedidos",label:"Mis pedidos",icon:Je},{to:"/favoritos",label:"Favoritos",icon:Wt},{to:"/mi-cuenta",label:"Cuenta",icon:Br}];function al({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:s,toggleMode:c}=cn(),{photo:n}=zn(),u=Ho(),m=typeof r=="string"&&typeof a=="function",g=p.useRef(null),x=p.useRef(null),h=p.useRef(null),C=p.useRef(null),f=p.useRef(null),[A,_]=p.useState(!1),[y,$]=p.useState({id:"home",label:Jc}),[v,T]=p.useState(!1),[E,M]=p.useState(!1),[O,V]=p.useState("opening"),[H,J]=p.useState(!1),[K,Q]=p.useState(!1),[q,X]=p.useState("opening"),[ie,S]=p.useState(null),F=p.useCallback(()=>{T(!1),J(!1),S(null)},[]),ee=p.useCallback(()=>{F(),T(!0)},[F]),re=p.useCallback(()=>{if(v||E){F();return}ee()},[F,E,v,ee]),$e=p.useCallback(()=>{F(),J(!0)},[F]),ve=p.useCallback(()=>{if(H||K){F();return}$e()},[F,K,H,$e]);p.useEffect(()=>{const l=document.body.style.overflow;return(v||E||H||K)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=l}},[E,v,K,H]),p.useLayoutEffect(()=>{const l=g.current;if(!l)return;const b=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${l.offsetHeight}px`)};b();const j=typeof ResizeObserver<"u"?new ResizeObserver(b):null;return j==null||j.observe(l),window.addEventListener("resize",b),()=>{j==null||j.disconnect(),window.removeEventListener("resize",b),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),p.useEffect(()=>{x.current!==null&&(window.cancelAnimationFrame(x.current),x.current=null),h.current!==null&&(window.clearTimeout(h.current),h.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(v){if(M(!0),l){V("open");return}V("opening"),x.current=window.requestAnimationFrame(()=>{V("open"),x.current=null});return}if(E){if(l){M(!1),V("opening");return}V("closing"),h.current=window.setTimeout(()=>{M(!1),V("opening"),h.current=null},Sa)}},[E,v]),p.useEffect(()=>()=>{x.current!==null&&window.cancelAnimationFrame(x.current),h.current!==null&&window.clearTimeout(h.current),C.current!==null&&window.cancelAnimationFrame(C.current),f.current!==null&&window.clearTimeout(f.current)},[]),p.useEffect(()=>{C.current!==null&&(window.cancelAnimationFrame(C.current),C.current=null),f.current!==null&&(window.clearTimeout(f.current),f.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(H){if(Q(!0),l){X("open");return}X("opening"),C.current=window.requestAnimationFrame(()=>{X("open"),C.current=null});return}if(K){if(l){Q(!1),X("opening");return}X("closing"),f.current=window.setTimeout(()=>{Q(!1),X("opening"),f.current=null},Qc)}},[K,H]);const xe=p.useCallback((l,b)=>{l.preventDefault(),F(),window.setTimeout(()=>{u(b)},Sa)},[F,u]),k=p.useMemo(()=>Ca.find(l=>l.id===ie)??null,[ie]);return t.jsxs(Us,{children:[t.jsx(Ws,{ref:g,children:t.jsx(dc,{children:t.jsx(Ks,{children:t.jsxs(xc,{children:[t.jsxs(wc,{children:[t.jsx(Xs,{type:"button",onClick:re,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":v||E,children:t.jsx(yn,{size:20,"aria-hidden":"true"})}),t.jsxs($c,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Sc,{children:t.jsx(er,{src:tr,alt:"","aria-hidden":"true"})}),t.jsxs(vc,{children:["LaFrancia",t.jsx(kc,{children:"GO"})]})]})]}),m?t.jsx(jc,{children:t.jsx(zo,{value:r,onChange:a})}):null,t.jsxs(bc,{"aria-label":"Acciones rápidas",children:[t.jsxs(pc,{type:"button","aria-label":`Entregar en ${y.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":A,onClick:()=>_(!0),children:[t.jsxs(hc,{children:[t.jsx(mc,{children:"Entregar en"}),t.jsx(uc,{children:y.label})]}),t.jsx(gn,{size:15,"aria-hidden":"true"})]}),t.jsxs(gc,{type:"button",onClick:ve,"aria-label":`Abrir notificaciones, ${ka} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":H||K,children:[t.jsx(kt,{size:18,"aria-hidden":"true"}),t.jsx(yc,{children:ka})]}),t.jsx(fa,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(Sn,{size:18,"aria-hidden":"true"})}),t.jsx(fa,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n?t.jsx(fc,{src:n,alt:""}):t.jsx(Br,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(el,{"aria-label":"Navegación principal",children:t.jsxs(tl,{children:[t.jsxs(ya,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(ma,{children:t.jsx(er,{src:tr,alt:"","aria-hidden":"true"})}),t.jsxs(ba,{children:[t.jsxs(ha,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(ga,{children:"GO"})]}),t.jsx(Js,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(mt,{children:[t.jsx(ht,{children:"NAVEGACIÓN"}),t.jsx(ut,{"aria-label":"Navegación principal",children:ja.map(l=>{const b=l.icon;return t.jsxs(st,{to:l.to,end:l.end,onClick:j=>xe(j,l.to),children:[t.jsx(Pe,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(dt,{children:[t.jsx(pt,{children:l.title}),t.jsx(lt,{children:l.subtitle})]}),t.jsx(ct,{"aria-hidden":"true",children:t.jsx(it,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(mt,{children:[t.jsx(ht,{children:"ACCIONES"}),t.jsx(ut,{"aria-label":"Acciones rápidas",children:Aa.map(l=>{const b=l.icon;return t.jsxs(st,{to:l.to,onClick:j=>xe(j,l.to),children:[t.jsx(Pe,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(dt,{children:[t.jsx(pt,{children:l.title}),t.jsx(lt,{children:l.subtitle})]}),t.jsx(ct,{"aria-hidden":"true",children:t.jsx(it,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(xa,{children:t.jsx(ua,{isDarkMode:s,onToggle:c})})]})}),t.jsx(Qs,{children:e}),t.jsx(sc,{"aria-label":"Navegación móvil",children:t.jsx(cc,{children:rl.map(l=>{const b=l.icon;return t.jsx("li",{children:t.jsxs(lc,{to:l.to,"data-primary":l.to==="/pedidos",children:[t.jsx(Ue,{children:t.jsx(b,{size:l.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:l.label})]})},l.to)})})}),E&&t.jsx($a,{"data-drawer":"true","data-state":O,role:"presentation",onClick:F,children:t.jsxs(wa,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":O,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:l=>l.stopPropagation(),children:[t.jsxs(Ec,{children:[t.jsxs(ya,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(ma,{children:t.jsx(er,{src:tr,alt:"","aria-hidden":"true"})}),t.jsx(ba,{children:t.jsxs(ha,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(ga,{children:"GO"})]})})]}),t.jsx(zc,{type:"button",onClick:F,"aria-label":"Cerrar menú",children:t.jsx($o,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Mo,{children:[t.jsxs(mt,{children:[t.jsx(ht,{children:"Navegación"}),t.jsx(ut,{"aria-label":"Navegación principal",children:ja.map(l=>{const b=l.icon;return t.jsxs(st,{to:l.to,end:l.end,onClick:j=>xe(j,l.to),children:[t.jsx(Pe,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(dt,{children:[t.jsx(pt,{children:l.title}),t.jsx(lt,{children:l.subtitle})]}),t.jsx(ct,{"aria-hidden":"true",children:t.jsx(it,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(mt,{children:[t.jsx(ht,{children:"Acciones"}),t.jsx(ut,{"aria-label":"Acciones rápidas",children:Aa.map(l=>{const b=l.icon;return t.jsxs(st,{to:l.to,onClick:j=>xe(j,l.to),children:[t.jsx(Pe,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(dt,{children:[t.jsx(pt,{children:l.title}),t.jsx(lt,{children:l.subtitle})]}),t.jsx(ct,{"aria-hidden":"true",children:t.jsx(it,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx(xa,{children:t.jsx(ua,{isDarkMode:s,onToggle:c})})]})]})}),K&&t.jsx($a,{"data-notifications":"true","data-state":q,role:"presentation",onClick:F,children:t.jsxs(wa,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":q,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:l=>l.stopPropagation(),children:[t.jsxs(Rc,{children:[k?t.jsx(va,{type:"button",onClick:()=>S(null),"aria-label":"Volver a las notificaciones",children:t.jsx(co,{size:14,"aria-hidden":"true"})}):t.jsx(Tc,{"aria-hidden":"true"}),t.jsxs(Lc,{children:[t.jsx(Fc,{id:"marketplace-notifications-title",children:(k==null?void 0:k.title)??"Notificaciones"}),t.jsx(Ic,{children:(k==null?void 0:k.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(va,{type:"button",onClick:()=>{F(),u("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(vn,{size:14,"aria-hidden":"true"})})]}),t.jsx(_c,{}),t.jsx(Mc,{children:k?t.jsx(Pc,{"aria-label":k.title,children:k.items.map(l=>{const b=l.icon;return t.jsxs(Yc,{children:[t.jsx(Wc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(Vc,{children:[t.jsxs(Zc,{children:[t.jsx(Xc,{children:l.title}),t.jsx(Uc,{children:l.date})]}),t.jsx(Kc,{children:l.subtitle})]})]},`${k.id}-${l.title}`)})}):t.jsx(Gc,{"aria-label":"Secciones de notificaciones",children:Ca.map(l=>{const b=l.icon;return t.jsxs(Oc,{type:"button",onClick:()=>S(l.id),children:[t.jsx(Dc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(Hc,{children:[t.jsx(qc,{children:l.title}),t.jsx(Bc,{children:l.subtitle})]}),t.jsx(Nc,{"aria-hidden":"true",children:t.jsx(He,{size:16,"aria-hidden":"true"})})]},l.id)})})})]})}),t.jsx(Es,{open:A,currentId:y.id,onClose:()=>_(!1),onSelect:(l,b)=>$({id:l,label:b})})]})}const Gr=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,Yr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,_o=oe`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${_o};
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
`;const Ro=o.div`
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
`;const ol=o.span`
  ${_o};
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
`,Wp=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,il="/LaFranciaGO/",nl=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),Vr=e=>{const r=e&&nl.has(e)?e:"comercio";return`${il}media/${r}.svg`},sl=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),cl=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,s)=>i+s.charCodeAt(0),0);return r[a%r.length]},ll=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,dl=o.span`
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
`,pl=o.span`
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
`;function ul({id:e,name:r,to:a,count:i,priority:s}){return t.jsx(ll,{to:a,children:t.jsxs(Gr,{$ratio:"1 / 1",children:[t.jsx(Yr,{src:Vr(e),alt:r,loading:s?"eager":"lazy"}),typeof i=="number"?t.jsxs(pl,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx(dl,{children:r})]})})}const ml=o.div`
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
`,hl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Ce};
`,gl=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,fl=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,yl=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function bl({icon:e,title:r,text:a,ctaLabel:i,ctaTo:s,dashed:c}){return t.jsxs(ml,{"data-dashed":c?"true":"false",children:[t.jsx(hl,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(gl,{children:r}),a?t.jsx(fl,{children:a}):null,i&&s?t.jsx(yl,{children:t.jsx(nc,{to:s,children:i})}):null]})}const Ea=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),xl=e=>`${e.toFixed(1)} km`,Io=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),wl=o(be)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?oe`
          pointer-events: none;
        `:oe`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:r})=>r.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,$l=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,vl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,kl=o.h3`
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
`,Sl=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,jl=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Al=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,Cl=o.button`
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
`,El=o.span`
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
`;function zl({name:e,store:r,price:a,oldPrice:i,categoryId:s,imageLabel:c,tag:n,to:u,onAdd:m,priority:g}){return t.jsxs(wl,{to:u??"#",$static:!u,children:[t.jsxs(Gr,{$ratio:"1 / 1",children:[t.jsx(Yr,{src:Vr(s),alt:c??e,loading:g?"eager":"lazy"}),n?t.jsx(Ro,{children:t.jsx(El,{children:n})}):null]}),t.jsxs($l,{children:[r?t.jsx(vl,{children:r}):null,t.jsx(kl,{children:e}),t.jsxs(Sl,{children:[t.jsxs("div",{children:[t.jsx(jl,{children:Ea(a)}),i?t.jsx(Al,{children:Ea(i)}):null]}),m?t.jsx(Cl,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:x=>{x.preventDefault(),x.stopPropagation(),m()},children:t.jsx(go,{size:18,"aria-hidden":"true"})}):null]})]})]})}const Pl=o(be)`
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
`,Ml=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,_l=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Rl=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Il=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Tl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function Fl({to:e,title:r,text:a,icon:i,tone:s="brand"}){return t.jsxs(Pl,{to:e,"data-tone":s,children:[t.jsx(Ml,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(_l,{children:[t.jsx(Rl,{children:r}),a?t.jsx(Il,{children:a}):null]}),t.jsx(Tl,{children:t.jsx(He,{size:18,"aria-hidden":"true"})})]})}const Ll=o(be)`
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
`,Ol=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Ce};
`,Nl=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function za({to:e,label:r,icon:a}){return t.jsxs(Ll,{to:e,children:[t.jsx(Ol,{children:t.jsx(a,{size:18})}),t.jsx(Nl,{children:r}),t.jsx(He,{size:16,"aria-hidden":"true"})]})}const Dl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Bl=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Hl=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,ql=o.h2`
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
`,Gl=o.span`
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
`,Yl=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Vl=o(be)`
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
`;function rr({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:s,seeAllLabel:c="Ver todos"}){return t.jsxs(Dl,{children:[t.jsxs(Bl,{children:[t.jsxs(Hl,{children:[t.jsx(ql,{children:e}),r?t.jsxs(Gl,{children:[a,r]}):null]}),s?t.jsxs(Vl,{to:s,children:[c,t.jsx(He,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(Yl,{children:i}):null]})}const Ul=o(be)`
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
`,Wl=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Kl=o.button`
  position: absolute;
  right: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  color: #ffffff;
  cursor: pointer;
  transition:
    transform 160ms ease,
    background-color 160ms ease;

  &:hover {
    background: rgba(15, 23, 42, 0.72);
  }

  /* Al guardar, el corazón se llena y da un salto corto: confirma el gesto
     sin necesidad de un cartel. */
  &[data-guardado='true'] {
    color: ${({theme:e})=>e.color.danger};
  }

  &:active {
    transform: scale(0.92);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 2px;
  }
`,Xl=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Zl=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ql=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Pa=o.span`
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
`;function ad({id:e,name:r,category:a,categoryId:i,to:s,distanceKm:c,rating:n,openNow:u,premium:m,etaMin:g,etaMax:x,priority:h,favorito:C,onToggleFavorito:f}){const A=_=>{_.preventDefault(),_.stopPropagation(),f==null||f(e)};return t.jsxs(Ul,{to:s,children:[t.jsxs(Gr,{$ratio:"16 / 9",children:[t.jsx(Yr,{src:Vr(i),alt:a,loading:h?"eager":"lazy"}),t.jsxs(Ro,{children:[u!==void 0?t.jsx(ed,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),m?t.jsx(rd,{children:"Destacado"}):null,n!==void 0?t.jsxs(td,{children:[t.jsx(jn,{size:13,"aria-hidden":"true",fill:"currentColor"}),n.toFixed(1)]}):null]}),t.jsx(Wl,{children:t.jsx(ol,{$size:"2.75rem",$tone:cl(e),children:sl(r)})}),f?t.jsx(Kl,{type:"button",onClick:A,"data-guardado":C,"aria-pressed":C,"aria-label":C?`Quitar ${r} de favoritos`:`Guardar ${r} en favoritos`,children:t.jsx(Wt,{size:17,"aria-hidden":"true",fill:C?"currentColor":"none"})}):null]}),t.jsxs(Xl,{children:[t.jsx(Zl,{children:r}),t.jsxs(Jl,{children:[a,c!==void 0?` · ${xl(c)}`:""]}),t.jsxs(Ql,{children:[t.jsxs(Pa,{children:[t.jsx(un,{size:14,"aria-hidden":"true"}),"Delivery"]}),g!==void 0&&x!==void 0?t.jsxs(Pa,{children:[t.jsx(fn,{size:14,"aria-hidden":"true"}),g,"-",x," min"]}):null]})]})]})}const od=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:yo,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:ho,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:po,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Fr,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Lr,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Re,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:xo,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Nr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:bo,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:lo,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:uo,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:fo,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:wo,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:Dr,tone:"red"}],br=new Set;let je=new Set,Le="inicial";const jt=()=>br.forEach(e=>e());async function To(){if(Le==="inicial"){if(Le="cargando",!we()){Le="listo",jt();return}try{const{favoritos:e}=await hr.listar();je=new Set(e.map(r=>r.id))}catch{je=new Set}Le="listo",jt()}}function id(){return Le="inicial",To()}async function nd(e){const r=je.has(e),a=new Set(je);if(r?a.delete(e):a.add(e),je=a,jt(),!!we())try{await(r?hr.quitar(e):hr.agregar(e))}catch{const i=new Set(je);r?i.add(e):i.delete(e),je=i,jt()}}function sd(){const[,e]=p.useState(0);return p.useEffect(()=>{const r=()=>e(a=>a+1);return br.add(r),To(),()=>{br.delete(r)}},[]),{favoritos:je,cargando:Le!=="listo"}}const xr=new Set;let wr=[],We="inicial";const Ma=()=>xr.forEach(e=>e());async function cd(){if(We==="inicial"){if(We="cargando",!we()){We="listo",Ma();return}try{const{ofertas:e}=await On.portada();wr=e}catch{wr=[]}We="listo",Ma()}}function ld(){const[,e]=p.useState(0);return p.useEffect(()=>{const r=()=>e(a=>a+1);return xr.add(r),cd(),()=>{xr.delete(r)}},[]),{ofertas:wr,cargando:We!=="listo"}}const Kp=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],dd=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:yo},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Re},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:po},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Lr},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Fr},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:ho},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:xo},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:hn},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Nr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:bo},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:lo},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:uo},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:fo},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:wo}],pd=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],ud=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Qe=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Re,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Lr,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:Nr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:Fr,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Xp=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:0,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:1,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,saleUnit:"peso",quantity:1,subtotal:1275,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:0,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,saleUnit:"peso",quantity:3,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,saleUnit:"peso",quantity:1,subtotal:1345,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Zp=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],Jp=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],Qp=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],eu=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],tu=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],ru=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],au=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],ou=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:An},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:xn},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:wn},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:kn}],md=e=>{var r;return((r=dd.find(a=>a.id===e))==null?void 0:r.icon)??Qe[0].icon};function hd(e){return{id:e.id,name:e.nombre,premium:e.premium,category:e.rubro_nombre,categoryId:e.rubro_id,address:e.direccion,phone:e.telefono??"",hours:e.horario??"A confirmar",distanceKm:void 0,rating:void 0,openNow:!0,delivery:!0,pickup:!0,minOrder:e.minimo,summary:e.descripcion??`${e.rubro_nombre} en La Francia.`,tags:e.zona?[e.zona]:[],icon:md(e.rubro_id),featuredProducts:(e.destacados??[]).map(r=>({id:r.id,name:r.nombre,price:r.precio}))}}const $r=new Set;let xt=[],Ke="inicial";const _a=()=>$r.forEach(e=>e());async function gd(){if(Ke==="inicial"){if(Ke="cargando",!we()){xt=Qe,Ke="listo",_a();return}try{const{comercios:e}=await Ln.listar();xt=e.map(r=>hd(r))}catch{xt=Qe}Ke="listo",_a()}}function fd(){const[,e]=p.useState(0);return p.useEffect(()=>{const r=()=>e(a=>a+1);return $r.add(r),gd(),()=>{$r.delete(r)}},[]),{stores:xt,cargando:Ke!=="listo"}}const gt=["blue","green","orange","violet"],Ra={almacen:"blue",panaderia:"orange",carniceria:"violet",verduleria:"green",farmacia:"blue",kiosco:"orange"};function yd(e){return(e.split(/\s+/).filter(a=>a.length>2).slice(0,2).map(a=>a[0]).join("")||e.slice(0,2)).toUpperCase()}const bd=e=>{const r=e===void 0?15:Math.max(10,Math.round(e*6)+10);return{etaMin:r,etaMax:r+10}};function xd(){const{stores:e,cargando:r}=fd(),{ofertas:a,cargando:i}=ld(),s=p.useMemo(()=>e.map((n,u)=>{const{etaMin:m,etaMax:g}=bd(n.distanceKm);return{id:n.id,name:n.name,premium:n.premium,category:n.category,categoryId:n.categoryId,logoLabel:yd(n.name),etaMin:m,etaMax:g,distanceKm:n.distanceKm,rating:n.rating,delivery:n.delivery,pickup:n.pickup,openNow:n.openNow,tone:Ra[n.categoryId]??gt[u%gt.length],address:n.address,priceLevel:n.minOrder>=8e3?"$$$":n.minOrder>=4e3?"$$":"$",minOrder:n.minOrder,badge:n.premium?"Destacado":"",href:`/comercios/${n.id}`}}),[e]),c=p.useMemo(()=>a.map((n,u)=>{var x;const m=e.find(h=>h.id===n.comercioId),g=n.porcentaje??(n.precioLista>0?Math.round((n.precioLista-n.precioFinal)/n.precioLista*100):0);return{id:n.id,product:n.titulo,store:n.comercio,categoryId:n.rubroId,distanceKm:(m==null?void 0:m.distanceKm)??0,price:n.precioFinal,oldPrice:n.precioLista,discount:g,delivery:!0,pickup:!0,openNow:!0,tone:Ra[n.rubroId]??gt[u%gt.length],imageLabel:((x=n.productos[0])==null?void 0:x.nombre)??n.titulo,href:`/comercios/${n.comercioId}`}}),[a,e]);return{featuredStores:s,nearbyOffers:c,cargando:r||i}}const wd=e=>Io(e),ar=(e,...r)=>{const a=wd(e);return a?Io(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},$d=e=>pd.find(r=>r.id===e),iu=e=>Qe.find(r=>r.id===e),nu=e=>Qe.find(r=>r.name.toLowerCase()===e.toLowerCase()),su=e=>{const r=ud.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((s,c)=>s.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=$d(e);if(a)return{kind:"offer",offer:a}},vd=5,kd=.7,Ia=e=>e===void 0?Number.MAX_SAFE_INTEGER:Math.floor(e/kd),et=e=>e.distanceKm??Number.MAX_SAFE_INTEGER,Ta=e=>e.premium&&et(e)<=vd?0:1,tt=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,Fo=(e,r)=>{const a=tt(e,r);if(a!==0)return a;const i=Ia(e.distanceKm)-Ia(r.distanceKm);if(i!==0)return i;const s=Ta(e)-Ta(r);if(s!==0)return s;const c=et(e)-et(r);return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},Sd=(e,r)=>tt(e,r)||et(e)-et(r),jd=(e,r)=>tt(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),Ad=(e,r)=>tt(e,r)||(r.rating??0)-(e.rating??0),Cd=(e,r)=>tt(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),Ed={relevancia:Fo,cercania:Sd,precio:jd,puntuacion:Ad,entrega:Cd};function Fa(e,r="relevancia"){return[...e].sort(Ed[r]??Fo)}const cu=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],zd=o.div`
  position: relative;
  min-width: 0;
`,Pd=o.div`
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
`,La=o.button`
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

  ${Ce};

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
`,ft=4,Md=6,_d=420,Rd=.91,Id=.2,Td=.45,Fd=260,Ld=e=>1-(1-e)**3;function or({children:e,className:r,as:a,...i}){const s=p.useRef(null),c=p.useRef(null),n=p.useRef(null),[u,m]=p.useState(!1),[g,x]=p.useState(!1),h=p.useCallback(()=>{const y=s.current;if(!y)return;const{scrollLeft:$,scrollWidth:v,clientWidth:T}=y;m($>ft),x($+T<v-ft)},[]);p.useLayoutEffect(()=>{h()},[h,e]),p.useEffect(()=>{var v;const y=s.current;if(!y)return;const $=((v=window.matchMedia)==null?void 0:v.call(window,"(pointer: fine)").matches)??!1;y.style.cursor=$&&(u||g)?"grab":""},[u,g]),p.useEffect(()=>{var T;const y=s.current;if(!y)return;const $=E=>{const M=y.scrollWidth-y.clientWidth;if(M<=0)return;const O=Math.abs(E.deltaX)>Math.abs(E.deltaY)?E.deltaX:E.deltaY;if(O===0)return;const V=O>0?1:-1,H=y.scrollLeft<=ft,J=y.scrollLeft>=M-ft;if(V<0&&H||V>0&&J)return;E.preventDefault();const K=n.current??y.scrollLeft,Q=Math.max(0,Math.min(K+V*Fd,M));A(y,Q)};y.addEventListener("wheel",$,{passive:!1}),y.addEventListener("scroll",h,{passive:!0}),y.addEventListener("scrollend",h,{passive:!0});const v=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return v==null||v.observe(y),Array.from(y.children).forEach(E=>v==null?void 0:v.observe(E)),(T=document.fonts)==null||T.ready.then(h).catch(()=>{}),()=>{y.removeEventListener("wheel",$),y.removeEventListener("scroll",h),y.removeEventListener("scrollend",h),v==null||v.disconnect(),c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null}},[h]);const C=(y,$)=>{var M;if(c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null,Math.abs($)<Td||(M=window.matchMedia)!=null&&M.call(window,"(prefers-reduced-motion: reduce)").matches){h();return}let v=-$;const T=y.scrollWidth-y.clientWidth,E=()=>{const O=y.scrollLeft+v;if(O<=0||O>=T){y.scrollLeft=O<=0?0:T,c.current=null,h();return}if(y.scrollLeft=O,v*=Rd,h(),Math.abs(v)<Id){c.current=null;return}c.current=requestAnimationFrame(E)};c.current=requestAnimationFrame(E)},f=y=>{if(y.pointerType!=="mouse"||y.button!==0)return;const $=s.current;if(!$)return;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null;const v=y.clientX,T=$.scrollLeft;let E=!1,M=0,O=y.clientX,V=performance.now();const H=Q=>Q.preventDefault();$.addEventListener("dragstart",H);const J=Q=>{const q=Q.clientX-v;if(!E){if(Math.abs(q)<Md)return;E=!0,$.style.scrollBehavior="auto",$.style.cursor="grabbing",$.style.userSelect="none"}const X=performance.now(),ie=X-V;if(ie>0){const S=(Q.clientX-O)/ie*16;M=M*.7+S*.3,O=Q.clientX,V=X}$.scrollLeft=T-q},K=()=>{if(document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",K),document.removeEventListener("pointercancel",K),$.removeEventListener("dragstart",H),$.style.scrollBehavior="",$.style.cursor="",$.style.userSelect="",E){C($,M);const Q=q=>{q.stopPropagation(),q.preventDefault()};$.addEventListener("click",Q,{capture:!0,once:!0}),window.setTimeout(()=>$.removeEventListener("click",Q,{capture:!0}),0)}h()};document.addEventListener("pointermove",J),document.addEventListener("pointerup",K),document.addEventListener("pointercancel",K)},A=(y,$)=>{var O;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null);const v=y.scrollLeft,T=$-v;if(Math.abs(T)<1){n.current=null;return}if(n.current=$,(O=window.matchMedia)!=null&&O.call(window,"(prefers-reduced-motion: reduce)").matches){y.scrollLeft=$,n.current=null,h();return}const E=performance.now(),M=V=>{const H=V-E,J=Math.min(H/_d,1);if(y.scrollLeft=v+T*Ld(J),h(),J<1){c.current=requestAnimationFrame(M);return}c.current=null,n.current=null};c.current=requestAnimationFrame(M)},_=y=>{const $=s.current;if(!$)return;const v=$.scrollWidth-$.clientWidth,T=$.scrollLeft+y*$.clientWidth*.7;A($,Math.max(0,Math.min(T,v)))};return t.jsxs(zd,{className:r,children:[u?t.jsx(La,{type:"button","data-side":"left",onClick:()=>_(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(co,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:s,onPointerDown:f,...i,children:e}):t.jsx(Pd,{ref:s,onPointerDown:f,...i,children:e}),g?t.jsx(La,{type:"button","data-side":"right",onClick:()=>_(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(He,{size:16,"aria-hidden":"true"})}):null]})}const Lo="lafranciago:orden",Od=["relevancia","cercania","precio","puntuacion","entrega"],Nd=()=>{try{const e=window.localStorage.getItem(Lo);return Od.includes(e)?e:"relevancia"}catch{return"relevancia"}};function Dd(){const[e,r]=p.useState("relevancia");p.useEffect(()=>{r(Nd())},[]);const a=p.useCallback(i=>{r(i);try{window.localStorage.setItem(Lo,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const Bd=o(be)`
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
`,Hd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,qd=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,Gd=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Yd=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Vd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Oo=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ud=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Wd=o.div`
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
`;const lu=o.div`
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
`;const du=o.div`
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
`;const pu=o(ze)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(ec)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const uu=o(Oo)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Ud)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Wd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(rc)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const Ur=o.div`
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
`,Kd=o(Ur)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Xd=o(Ur)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Zd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Jd=o.section`
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
`;const mu=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Qd=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,ep=8;function tp(){const[e,r]=p.useState(""),{sortMode:a}=Dd(),{featuredStores:i,nearbyOffers:s,cargando:c}=xd(),{favoritos:n}=sd(),u=e.trim(),m=u.length>0,g=p.useMemo(()=>{const f=od.filter(A=>ar(u,A.name));return m?f:f.slice(0,ep)},[m,u]),x=p.useMemo(()=>Fa(i.filter(f=>ar(u,f.name,f.category,f.address)),a),[i,u,a]),h=p.useMemo(()=>Fa(s.filter(f=>ar(u,f.product,f.store)),a),[s,u,a]),C=c||g.length>0||x.length>0||h.length>0;return t.jsxs(al,{query:e,onQueryChange:r,children:[t.jsx(Jd,{children:t.jsx(Ee,{children:t.jsx(zo,{value:e,onChange:r})})}),t.jsx(ze,{children:t.jsx(Ee,{children:t.jsxs(Bd,{to:"/mandado",children:[t.jsx(Hd,{children:t.jsx(Je,{size:22,"aria-hidden":"true"})}),t.jsxs(qd,{children:[t.jsx(Gd,{children:"¿Necesitás algún mandado?"}),t.jsx(Yd,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(Vd,{children:t.jsx(He,{size:18,"aria-hidden":"true"})})]})})}),m&&!C?t.jsx(ze,{children:t.jsx(Ee,{children:t.jsx(bl,{icon:$n,title:"Sin resultados",text:`No encontramos nada para "${u}". Probá con otra palabra.`,dashed:!0})})}):null,g.length>0?t.jsx(ze,{children:t.jsxs(Ee,{children:[t.jsx(rr,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(or,{as:Xd,"aria-label":"Categorías",children:g.map((f,A)=>t.jsx(ul,{id:f.id,name:f.name,to:`/comercios?rubro=${f.id}`,priority:A<5},f.id))})]})}):null,h.length>0?t.jsx(ze,{children:t.jsxs(Ee,{children:[t.jsx(rr,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(or,{as:Ur,"aria-label":"Productos destacados",children:h.map((f,A)=>t.jsx(zl,{name:f.product,store:f.store,price:f.price,oldPrice:f.oldPrice,categoryId:f.categoryId,imageLabel:f.imageLabel,tag:f.discount>0?`-${f.discount}%`:void 0,to:f.href,priority:A<3},f.id))})]})}):null,x.length>0?t.jsx(ze,{children:t.jsxs(Ee,{children:[t.jsx(rr,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(or,{as:Kd,"aria-label":"Negocios destacados",children:x.map((f,A)=>t.jsx(ad,{favorito:n.has(f.id),onToggleFavorito:nd,id:f.id,name:f.name,category:f.category,categoryId:f.categoryId,to:f.href,distanceKm:f.distanceKm,rating:f.rating,openNow:f.openNow,premium:f.premium,etaMin:f.etaMin,etaMax:f.etaMax,priority:A<2},f.id))})]})}):null,m?null:t.jsx(ze,{children:t.jsx(Ee,{children:t.jsx(Oo,{children:t.jsxs(Zd,{children:[t.jsx(Fl,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Re,tone:"brand"}),t.jsxs(Qd,{children:[t.jsx(za,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:vo}),t.jsx(za,{to:"/registro/fletero",label:"Sumate como Fletero",icon:Dr})]})]})})})})]})}const vr=new Set;let Oe=null,kr=we()?"cargando":"invitado",Oa=!1;const rp=()=>vr.forEach(e=>e()),Ne=e=>{const r=(Oe==null?void 0:Oe.id)!==(e==null?void 0:e.id);Oe=e,kr=e?"conectado":"invitado",rp(),r&&id()};async function Sr(){if(we())try{Ne(await Ve.yo())}catch(e){(!(e instanceof jo)||e.status!==401)&&console.warn("No se pudo recuperar la sesión",e),Ne(null)}}function ap(){const[e,r]=p.useState({usuario:Oe,estado:kr});p.useEffect(()=>{const n=()=>r({usuario:Oe,estado:kr});return vr.add(n),Oa||(Oa=!0,Sr()),n(),()=>{vr.delete(n)}},[]);const a=p.useCallback(async(n,u)=>{Ne(await Ve.login({email:n,password:u}))},[]),i=p.useCallback(async n=>{Ne(await Ve.registro(n))},[]),s=p.useCallback(async(n,u,m)=>{Ne(await Ve.loginPanel({email:n,password:u,rol:m}))},[]),c=p.useCallback(async()=>{try{await Ve.logout()}finally{Ne(null)}},[]);return{usuario:e.usuario,estado:e.estado,conectado:e.estado==="conectado",entrar:a,entrarAlPanel:s,registrar:i,salir:c,refrescar:Sr}}function hu(){return new Promise((e,r)=>{const a="https://lafranciago-api.lafranciago-api.workers.dev",c=window.screenX+(window.outerWidth-480)/2,n=window.screenY+(window.outerHeight-640)/2,u=window.open(`${a}/auth/google`,"lafranciago-google",`width=480,height=640,left=${c},top=${n}`);if(!u){r(new Error("Permití las ventanas emergentes para entrar con Google."));return}let m=!1;const g=()=>{window.removeEventListener("message",x),window.clearInterval(h)};function x(C){if(C.origin!==new URL(a).origin)return;const f=C.data;(f==null?void 0:f.tipo)==="lafranciago:oauth"&&(m=!0,g(),f.exito?Sr().then(()=>e()):r(new Error(f.mensaje??"No pudimos completar el ingreso.")))}window.addEventListener("message",x);const h=window.setInterval(()=>{u.closed&&!m&&(g(),r(new Error("Cerraste la ventana antes de terminar.")))},600)})}function de({children:e}){const{estado:r}=ap(),a=qo();if(!we())return t.jsx(t.Fragment,{children:e});if(r==="cargando")return null;if(r==="invitado"){const i=`${a.pathname}${a.search}`;return t.jsx(ir,{to:`/ingresar?destino=${encodeURIComponent(i)}`,replace:!0})}return t.jsx(t.Fragment,{children:e})}const op=p.lazy(()=>Z(()=>import("./AuthScreen-De9RU4ub.js"),__vite__mapDeps([5,1,6,7,8,9,10,11])).then(e=>({default:e.AuthScreen}))),Na=p.lazy(()=>Z(()=>import("./RecuperarScreen-DEQ-kdnB.js"),__vite__mapDeps([12,1,6,7,9])).then(e=>({default:e.RecuperarScreen}))),ip=p.lazy(()=>Z(()=>import("./CategoriesScreen-Lc7ezxbC.js"),__vite__mapDeps([13,1])).then(e=>({default:e.CategoriesScreen}))),np=p.lazy(()=>Z(()=>import("./StoresDirectoryScreen-DeBNpnwQ.js"),__vite__mapDeps([14,1])).then(e=>({default:e.StoresDirectoryScreen}))),sp=p.lazy(()=>Z(()=>import("./StoreProfileScreen-UzrxOOW8.js"),__vite__mapDeps([15,1,16,17,18])).then(e=>({default:e.StoreProfileScreen}))),cp=p.lazy(()=>Z(()=>import("./ProductDetailScreen-vKQiRB_d.js"),__vite__mapDeps([19,1,20])).then(e=>({default:e.ProductDetailScreen}))),lp=p.lazy(()=>Z(()=>import("./MyOrdersScreen-BcnBjHF4.js"),__vite__mapDeps([21,1,18])).then(e=>({default:e.MyOrdersScreen}))),dp=p.lazy(()=>Z(()=>import("./CartScreen-BZAvE6u5.js"),__vite__mapDeps([22,1,16,17,23,10])).then(e=>({default:e.CartScreen}))),pp=p.lazy(()=>Z(()=>import("./ErrandScreen-7ejG0ol5.js"),__vite__mapDeps([24,1,25,10])).then(e=>({default:e.ErrandScreen}))),up=p.lazy(()=>Z(()=>import("./ErrandChatScreen-Dh-oGTM_.js"),__vite__mapDeps([26,1,27,25,28,29])).then(e=>({default:e.ErrandChatScreen}))),mp=p.lazy(()=>Z(()=>import("./FavoritesScreen-CR1Bb76T.js"),__vite__mapDeps([30,1])).then(e=>({default:e.FavoritesScreen}))),hp=p.lazy(()=>Z(()=>import("./NotificationsScreen-C2PtDu59.js"),__vite__mapDeps([31,1,32])).then(e=>({default:e.NotificationsScreen}))),gp=p.lazy(()=>Z(()=>import("./CustomerAccountScreen-DQ_CYISQ.js"),__vite__mapDeps([33,1,20,27,28,34,10,11])).then(e=>({default:e.CustomerAccountScreen}))),fp=p.lazy(()=>Z(()=>import("./CommerceRegistrationScreen-Asv_ypPP.js"),__vite__mapDeps([35,1,27,36,37,38,6,34,10])).then(e=>({default:e.CommerceRegistrationScreen}))),Da=p.lazy(()=>Z(()=>import("./DeliveryRegistrationScreen-CxjMcxR9.js"),__vite__mapDeps([39,37,1,27,6,10,34,9])).then(e=>({default:e.DeliveryRegistrationScreen}))),yp=p.lazy(()=>Z(()=>import("./MiComercioScreen--pKQq5lE.js"),__vite__mapDeps([40,1,16,41,7,8,29,23,2,3,36,27,38,6,32,42])).then(e=>({default:e.MiComercioScreen}))),bp=p.lazy(()=>Z(()=>import("./CommercePanelScreen-DBMcjUFF.js"),__vite__mapDeps([43,44,20,1,32])).then(e=>({default:e.CommercePanelScreen}))),xp=p.lazy(()=>Z(()=>import("./ProductFormScreen-CxlH9HUA.js"),__vite__mapDeps([45,1,16,27,38])).then(e=>({default:e.ProductFormScreen}))),wp=p.lazy(()=>Z(()=>import("./PanelRepartidorScreen-DOYDh4bU.js"),__vite__mapDeps([46,1,4,41,7,8,29,16,47])).then(e=>({default:e.PanelRepartidorScreen}))),$p=p.lazy(()=>Z(()=>import("./DeliveryPanelScreen-7NlpEfFX.js"),__vite__mapDeps([48,44,20,1])).then(e=>({default:e.DeliveryPanelScreen}))),vp=p.lazy(()=>Z(()=>import("./AdminPostulacionesScreen-CXB1ubpR.js"),__vite__mapDeps([49,1,7,47,42])).then(e=>({default:e.AdminPostulacionesScreen}))),kp=p.lazy(()=>Z(()=>import("./AdminPanelScreen-g2-36cZs.js"),__vite__mapDeps([50,44,20,1])).then(e=>({default:e.AdminPanelScreen})));function Sp(){return t.jsx(Go,{children:t.jsx(sn,{children:t.jsx(p.Suspense,{fallback:null,children:t.jsxs(Yo,{children:[t.jsx(U,{path:"/",element:t.jsx(tp,{})}),t.jsx(U,{path:"/ingresar",element:t.jsx(op,{})}),t.jsx(U,{path:"/recuperar",element:t.jsx(Na,{})}),t.jsx(U,{path:"/recuperar/:token",element:t.jsx(Na,{})}),t.jsx(U,{path:"/categorias",element:t.jsx(ip,{})}),t.jsx(U,{path:"/comercios",element:t.jsx(np,{})}),t.jsx(U,{path:"/comercios/:storeId",element:t.jsx(sp,{})}),t.jsx(U,{path:"/productos/:productId",element:t.jsx(cp,{})}),t.jsx(U,{path:"/pedidos",element:t.jsx(de,{children:t.jsx(lp,{})})}),t.jsx(U,{path:"/carrito",element:t.jsx(de,{children:t.jsx(dp,{})})}),t.jsx(U,{path:"/mandado",element:t.jsx(de,{children:t.jsx(pp,{})})}),t.jsx(U,{path:"/mandado/chat",element:t.jsx(de,{children:t.jsx(up,{})})}),t.jsx(U,{path:"/favoritos",element:t.jsx(de,{children:t.jsx(mp,{})})}),t.jsx(U,{path:"/notificaciones",element:t.jsx(de,{children:t.jsx(hp,{})})}),t.jsx(U,{path:"/registro/comercio",element:t.jsx(de,{children:t.jsx(fp,{})})}),t.jsx(U,{path:"/trabaja-con-nosotros",element:t.jsx(de,{children:t.jsx(Da,{})})}),t.jsx(U,{path:"/registro/fletero",element:t.jsx(de,{children:t.jsx(Da,{role:"fletero"})})}),t.jsx(U,{path:"/registro/delivery",element:t.jsx(ir,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(U,{path:"/mi-cuenta",element:t.jsx(de,{children:t.jsx(gp,{})})}),t.jsx(U,{path:"/panel/comercio",element:t.jsx(de,{children:t.jsx(yp,{})})}),t.jsx(U,{path:"/panel/comercio/metricas",element:t.jsx(de,{children:t.jsx(bp,{})})}),t.jsx(U,{path:"/panel/comercio/producto",element:t.jsx(de,{children:t.jsx(xp,{})})}),t.jsx(U,{path:"/panel/repartidor",element:t.jsx(de,{children:t.jsx(wp,{})})}),t.jsx(U,{path:"/panel/repartidor/metricas",element:t.jsx(de,{children:t.jsx($p,{})})}),t.jsx(U,{path:"/panel/admin",element:t.jsx(de,{children:t.jsx(kp,{})})}),t.jsx(U,{path:"/panel/admin/postulaciones",element:t.jsx(de,{children:t.jsx(vp,{})})}),t.jsx(U,{path:"*",element:t.jsx(ir,{to:"/",replace:!0})})]})})})})}const jp=()=>{try{window.top!==window.self&&(window.top.location=window.self.location)}catch{document.documentElement.style.display="none"}};jp();ei({immediate:!0});const No=document.getElementById("root");if(!No)throw new Error("No se encontró el nodo root");nr.createRoot(No).render(t.jsx(Ie.StrictMode,{children:t.jsx(Sp,{})}));export{Zp as $,pn as A,ad as B,Gp as C,nd as D,bl as E,Dp as F,Gr as G,Yr as H,Vr as I,Ro as J,Ea as K,go as L,al as M,mn as N,jn as O,lu as P,ol as Q,sl as R,Ee as S,cl as T,Br as U,xl as V,St as W,$o as X,Ln as Y,oe as Z,iu as _,Yp as a,au as a$,ze as a0,Je as a1,Tp as a2,Fp as a3,Lp as a4,Op as a5,pr as a6,Np as a7,Oo as a8,Ur as a9,Wp as aA,Fn as aB,vo as aC,Qe as aD,uu as aE,qp as aF,mo as aG,Wd as aH,ac as aI,Up as aJ,Rp as aK,Cp as aL,Ud as aM,mr as aN,zp as aO,Pp as aP,du as aQ,Jp as aR,Qp as aS,eu as aT,An as aU,vn as aV,Mp as aW,tu as aX,ru as aY,wn as aZ,Ep as a_,Sn as aa,su as ab,$d as ac,pd as ad,ud as ae,nu as af,Re as ag,nc as ah,ic as ai,He as aj,_p as ak,mu as al,Ce as am,Jn as an,Ip as ao,Hp as ap,Dr as aq,Bp as ar,Vp as as,Es as at,Xp as au,un as av,Ut as aw,Wt as ax,kt as ay,zn as az,pu as b,ou as b0,z as c,tc as d,rc as e,Ve as f,jo as g,we as h,hu as i,t as j,fd as k,dd as l,ar as m,Jd as n,zo as o,rr as p,o as q,ul as r,$n as s,Dd as t,ap as u,sd as v,Fa as w,or as x,Kp as y,cu as z};
