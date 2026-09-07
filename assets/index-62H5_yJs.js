const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-CpaBp3my.js","assets/react-D_B_6qYb.js","assets/AddressMapStyled-CpTZN1Gs.js","assets/AddressMapStyled-CIGW-MKW.css","assets/useCurrentPosition-BYw6bfYw.js","assets/AuthScreen-83UHcofl.js","assets/formStyles-C3easCGd.js","assets/AuthScreenStyled-BVaFsAbp.js","assets/PanelLoginDialogStyled-BgGHPV-h.js","assets/mail-B4V5H5dO.js","assets/shield-check-Dgw3ELFc.js","assets/log-in-C-40bcM2.js","assets/RecuperarScreen-BqvdmyZF.js","assets/CategoriesScreen-B7OKw2pS.js","assets/StoresDirectoryScreen-BsVucFza.js","assets/StoreProfileScreen-CA6tUdQZ.js","assets/saleUnits-CLP-TCsg.js","assets/cartStore-CBDylFrY.js","assets/clock-3-BMHp7XXW.js","assets/ProductDetailScreen-BxuZgMJl.js","assets/SettingsList-BEPCIR_-.js","assets/MyOrdersScreen-DPBrvPIb.js","assets/CartScreen-DucAkIEU.js","assets/ConfirmDialog-COuDTAqS.js","assets/credit-card-DJkwhniA.js","assets/wallet-CjHyraSz.js","assets/ErrandScreen-C2XCaq2Y.js","assets/errandStore-Bion9qKH.js","assets/ErrandChatScreen-BTLEGXJM.js","assets/mediaService-D2_VAu2k.js","assets/camera-B7F3Crpc.js","assets/send-DhkEsvQl.js","assets/FavoritesScreen-MyvzRPaf.js","assets/NotificationsScreen-B0TrDS80.js","assets/message-square-Dmmu_AfU.js","assets/badge-percent-Br-tGDCI.js","assets/CustomerAccountScreen-Dom-KdeZ.js","assets/phone-BIXUP2ND.js","assets/CommerceRegistrationScreen-_zhf3bu3.js","assets/useMediaUpload-CTMFYLii.js","assets/FileField-d8go8uOE.js","assets/ProductFormScreenStyled-B42oz4ui.js","assets/DeliveryRegistrationScreen-CZhisT5S.js","assets/MiComercioScreen-BbG-IkHc.js","assets/ChatPedidoDialog-CTNsDGXl.js","assets/bar-chart-3-CWPjPzeL.js","assets/CommercePanelScreen-_sGOP8V_.js","assets/MetricTile-VfWH4vW4.js","assets/ProductFormScreen-y002uOZR.js","assets/PanelRepartidorScreen-CzKS5Zvw.js","assets/refresh-cw-D0kvOZTG.js","assets/DeliveryPanelScreen-B_TwmSic.js","assets/AdminPostulacionesScreen-DKjhni7T.js","assets/AdminPanelScreen-BxcbwfXO.js"])))=>i.map(i=>d[i]);
import{r as p,a as Xo,g as Zo,R as Te,u as Ua,L as be,N as Pr,b as Jo,c as lr,H as Qo,d as ei,e as W}from"./react-D_B_6qYb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();var Wa={exports:{}},zt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ti=p,ri=Symbol.for("react.element"),ai=Symbol.for("react.fragment"),oi=Object.prototype.hasOwnProperty,ii=ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ni={key:!0,ref:!0,__self:!0,__source:!0};function Ka(e,r,a){var i,n={},c=null,s=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(s=r.ref);for(i in r)oi.call(r,i)&&!ni.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:ri,type:e,key:c,ref:s,props:n,_owner:ii.current}}zt.Fragment=ai;zt.jsx=Ka;zt.jsxs=Ka;Wa.exports=zt;var t=Wa.exports,dr={},Qr=Xo;dr.createRoot=Qr.createRoot,dr.hydrateRoot=Qr.hydrateRoot;const si="modulepreload",ci=function(e){return"/LaFranciaGO/"+e},ea={},X=function(r,a,i){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(a.map(m=>{if(m=ci(m),m in ea)return;ea[m]=!0;const g=m.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${b}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":si,g||(h.as="script"),h.crossOrigin="",h.href=m,d&&h.setAttribute("nonce",d),document.head.appendChild(h),g)return new Promise((A,f)=>{h.addEventListener("load",A),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return n.then(s=>{for(const d of s||[])d.status==="rejected"&&c(d.reason);return r().catch(c)})};function li(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:n,onRegisteredSW:c,onRegisterError:s}=e;let d,m;const g=async(h=!0)=>{await m};async function b(){if("serviceWorker"in navigator){if(d=await X(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(h=>{s==null||s(h)}),!d)return;d.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),d.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),d.register({immediate:r}).then(h=>{c?c("/LaFranciaGO/sw.js",h):n==null||n(h)}).catch(h=>{s==null||s(h)})}}return m=b(),g}var Xa={exports:{}},K={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.transitional.element"),Mr=Symbol.for("react.portal"),Pt=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Mt=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),It=Symbol.for("react.context"),Ft=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),di=Symbol.for("react.view_transition"),pi=Symbol.for("react.client.reference");function ge(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Rr:switch(e=e.type,e){case Pt:case Mt:case Rt:case Tt:case Lt:case di:return e;default:switch(e=e&&e.$$typeof,e){case It:case Ft:case Nt:case Ot:return e;case _t:return e;default:return r}}case Mr:return r}}}K.ContextConsumer=_t;K.ContextProvider=It;K.Element=Rr;K.ForwardRef=Ft;K.Fragment=Pt;K.Lazy=Nt;K.Memo=Ot;K.Portal=Mr;K.Profiler=Mt;K.StrictMode=Rt;K.Suspense=Tt;K.SuspenseList=Lt;K.isContextConsumer=function(e){return ge(e)===_t};K.isContextProvider=function(e){return ge(e)===It};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rr};K.isForwardRef=function(e){return ge(e)===Ft};K.isFragment=function(e){return ge(e)===Pt};K.isLazy=function(e){return ge(e)===Nt};K.isMemo=function(e){return ge(e)===Ot};K.isPortal=function(e){return ge(e)===Mr};K.isProfiler=function(e){return ge(e)===Mt};K.isStrictMode=function(e){return ge(e)===Rt};K.isSuspense=function(e){return ge(e)===Tt};K.isSuspenseList=function(e){return ge(e)===Lt};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pt||e===Mt||e===Rt||e===Tt||e===Lt||typeof e=="object"&&e!==null&&(e.$$typeof===Nt||e.$$typeof===Ot||e.$$typeof===It||e.$$typeof===_t||e.$$typeof===Ft||e.$$typeof===pi||e.getModuleId!==void 0)};K.typeOf=ge;Xa.exports=K;var Za=Xa.exports;function ui(e){function r(S,$,u,k,l){for(var D=0,w=0,te=0,B=0,q,F,se=0,ue=0,L,pe=L=q=0,H=0,ce=0,Ye=0,le=0,at=u.length,Ve=at-1,fe,_="",re="",Jt="",Qt="",ve;H<at;){if(F=u.charCodeAt(H),H===Ve&&w+B+te+D!==0&&(w!==0&&(F=w===47?10:47),B=te=D=0,at++,Ve++),w+B+te+D===0){if(H===Ve&&(0<ce&&(_=_.replace(A,"")),0<_.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:_+=u.charAt(H)}F=59}switch(F){case 123:for(_=_.trim(),q=_.charCodeAt(0),L=1,le=++H;H<at;){switch(F=u.charCodeAt(H)){case 123:L++;break;case 125:L--;break;case 47:switch(F=u.charCodeAt(H+1)){case 42:case 47:e:{for(pe=H+1;pe<Ve;++pe)switch(u.charCodeAt(pe)){case 47:if(F===42&&u.charCodeAt(pe-1)===42&&H+2!==pe){H=pe+1;break e}break;case 10:if(F===47){H=pe+1;break e}}H=pe}}break;case 91:F++;case 40:F++;case 34:case 39:for(;H++<Ve&&u.charCodeAt(H)!==F;);}if(L===0)break;H++}switch(L=u.substring(le,H),q===0&&(q=(_=_.replace(h,"").trim()).charCodeAt(0)),q){case 64:switch(0<ce&&(_=_.replace(A,"")),F=_.charCodeAt(1),F){case 100:case 109:case 115:case 45:ce=$;break;default:ce=J}if(L=r($,ce,L,F,l+1),le=L.length,0<ee&&(ce=a(J,_,Ye),ve=d(3,L,ce,$,oe,N,le,F,l,k),_=ce.join(""),ve!==void 0&&(le=(L=ve.trim()).length)===0&&(F=0,L="")),0<le)switch(F){case 115:_=_.replace(O,s);case 100:case 109:case 45:L=_+"{"+L+"}";break;case 107:_=_.replace(v,"$1 $2"),L=_+"{"+L+"}",L=C===1||C===2&&c("@"+L,3)?"@-webkit-"+L+"@"+L:"@"+L;break;default:L=_+L,k===112&&(L=(re+=L,""))}else L="";break;default:L=r($,a($,_,Ye),L,k,l+1)}Jt+=L,L=Ye=ce=pe=q=0,_="",F=u.charCodeAt(++H);break;case 125:case 59:if(_=(0<ce?_.replace(A,""):_).trim(),1<(le=_.length))switch(pe===0&&(q=_.charCodeAt(0),q===45||96<q&&123>q)&&(le=(_=_.replace(" ",":")).length),0<ee&&(ve=d(1,_,$,S,oe,N,re.length,k,l,k))!==void 0&&(le=(_=ve.trim()).length)===0&&(_="\0\0"),q=_.charCodeAt(0),F=_.charCodeAt(1),q){case 0:break;case 64:if(F===105||F===99){Qt+=_+u.charAt(H);break}default:_.charCodeAt(le-1)!==58&&(re+=n(_,q,F,_.charCodeAt(2)))}Ye=ce=pe=q=0,_="",F=u.charCodeAt(++H)}}switch(F){case 13:case 10:w===47?w=0:1+q===0&&k!==107&&0<_.length&&(ce=1,_+="\0"),0<ee*$e&&d(0,_,$,S,oe,N,re.length,k,l,k),N=1,oe++;break;case 59:case 125:if(w+B+te+D===0){N++;break}default:switch(N++,fe=u.charAt(H),F){case 9:case 32:if(B+D+w===0)switch(se){case 44:case 58:case 9:case 32:fe="";break;default:F!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:B+w+D===0&&(ce=Ye=1,fe="\f"+fe);break;case 108:if(B+w+D+Q===0&&0<pe)switch(H-pe){case 2:se===112&&u.charCodeAt(H-3)===58&&(Q=se);case 8:ue===111&&(Q=ue)}break;case 58:B+w+D===0&&(pe=H);break;case 44:w+te+B+D===0&&(ce=1,fe+="\r");break;case 34:case 39:w===0&&(B=B===F?0:B===0?F:B);break;case 91:B+w+te===0&&D++;break;case 93:B+w+te===0&&D--;break;case 41:B+w+D===0&&te--;break;case 40:if(B+w+D===0){if(q===0)switch(2*se+3*ue){case 533:break;default:q=1}te++}break;case 64:w+te+B+D+pe+L===0&&(L=1);break;case 42:case 47:if(!(0<B+D+te))switch(w){case 0:switch(2*F+3*u.charCodeAt(H+1)){case 235:w=47;break;case 220:le=H,w=42}break;case 42:F===47&&se===42&&le+2!==H&&(u.charCodeAt(le+2)===33&&(re+=u.substring(le,H+1)),fe="",w=0)}}w===0&&(_+=fe)}ue=se,se=F,H++}if(le=re.length,0<le){if(ce=$,0<ee&&(ve=d(2,re,ce,S,oe,N,le,k,l,k),ve!==void 0&&(re=ve).length===0))return Qt+re+Jt;if(re=ce.join(",")+"{"+re+"}",C*Q!==0){switch(C!==2||c(re,2)||(Q=0),Q){case 111:re=re.replace(M,":-moz-$1")+re;break;case 112:re=re.replace(R,"::-webkit-input-$1")+re.replace(R,"::-moz-$1")+re.replace(R,":-ms-input-$1")+re}Q=0}}return Qt+re+Jt}function a(S,$,u){var k=$.trim().split(y);$=k;var l=k.length,D=S.length;switch(D){case 0:case 1:var w=0;for(S=D===0?"":S[0]+" ";w<l;++w)$[w]=i(S,$[w],u).trim();break;default:var te=w=0;for($=[];w<l;++w)for(var B=0;B<D;++B)$[te++]=i(S[B]+" ",k[w],u).trim()}return $}function i(S,$,u){var k=$.charCodeAt(0);switch(33>k&&(k=($=$.trim()).charCodeAt(0)),k){case 38:return $.replace(x,"$1"+S.trim());case 58:return S.trim()+$.replace(x,"$1"+S.trim());default:if(0<1*u&&0<$.indexOf("\f"))return $.replace(x,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+$}function n(S,$,u,k){var l=S+";",D=2*$+3*u+4*k;if(D===944){S=l.indexOf(":",9)+1;var w=l.substring(S,l.length-1).trim();return w=l.substring(0,S).trim()+w+";",C===1||C===2&&c(w,1)?"-webkit-"+w+w:w}if(C===0||C===2&&!c(l,1))return l;switch(D){case 1015:return l.charCodeAt(10)===97?"-webkit-"+l+l:l;case 951:return l.charCodeAt(3)===116?"-webkit-"+l+l:l;case 963:return l.charCodeAt(5)===110?"-webkit-"+l+l:l;case 1009:if(l.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+l+l;case 978:return"-webkit-"+l+"-moz-"+l+l;case 1019:case 983:return"-webkit-"+l+"-moz-"+l+"-ms-"+l+l;case 883:if(l.charCodeAt(8)===45)return"-webkit-"+l+l;if(0<l.indexOf("image-set(",11))return l.replace(U,"$1-webkit-$2")+l;break;case 932:if(l.charCodeAt(4)===45)switch(l.charCodeAt(5)){case 103:return"-webkit-box-"+l.replace("-grow","")+"-webkit-"+l+"-ms-"+l.replace("grow","positive")+l;case 115:return"-webkit-"+l+"-ms-"+l.replace("shrink","negative")+l;case 98:return"-webkit-"+l+"-ms-"+l.replace("basis","preferred-size")+l}return"-webkit-"+l+"-ms-"+l+l;case 964:return"-webkit-"+l+"-ms-flex-"+l+l;case 1023:if(l.charCodeAt(8)!==99)break;return w=l.substring(l.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+w+"-webkit-"+l+"-ms-flex-pack"+w+l;case 1005:return j.test(l)?l.replace(f,":-webkit-")+l.replace(f,":-moz-")+l:l;case 1e3:switch(w=l.substring(13).trim(),$=w.indexOf("-")+1,w.charCodeAt(0)+w.charCodeAt($)){case 226:w=l.replace(E,"tb");break;case 232:w=l.replace(E,"tb-rl");break;case 220:w=l.replace(E,"lr");break;default:return l}return"-webkit-"+l+"-ms-"+w+l;case 1017:if(l.indexOf("sticky",9)===-1)break;case 975:switch($=(l=S).length-10,w=(l.charCodeAt($)===33?l.substring(0,$):l).substring(S.indexOf(":",7)+1).trim(),D=w.charCodeAt(0)+(w.charCodeAt(7)|0)){case 203:if(111>w.charCodeAt(8))break;case 115:l=l.replace(w,"-webkit-"+w)+";"+l;break;case 207:case 102:l=l.replace(w,"-webkit-"+(102<D?"inline-":"")+"box")+";"+l.replace(w,"-webkit-"+w)+";"+l.replace(w,"-ms-"+w+"box")+";"+l}return l+";";case 938:if(l.charCodeAt(5)===45)switch(l.charCodeAt(6)){case 105:return w=l.replace("-items",""),"-webkit-"+l+"-webkit-box-"+w+"-ms-flex-"+w+l;case 115:return"-webkit-"+l+"-ms-flex-item-"+l.replace(Y,"")+l;default:return"-webkit-"+l+"-ms-flex-line-pack"+l.replace("align-content","").replace(Y,"")+l}break;case 973:case 989:if(l.charCodeAt(3)!==45||l.charCodeAt(4)===122)break;case 931:case 953:if(ae.test(S)===!0)return(w=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?n(S.replace("stretch","fill-available"),$,u,k).replace(":fill-available",":stretch"):l.replace(w,"-webkit-"+w)+l.replace(w,"-moz-"+w.replace("fill-",""))+l;break;case 962:if(l="-webkit-"+l+(l.charCodeAt(5)===102?"-ms-"+l:"")+l,u+k===211&&l.charCodeAt(13)===105&&0<l.indexOf("transform",10))return l.substring(0,l.indexOf(";",27)+1).replace(I,"$1-webkit-$2")+l}return l}function c(S,$){var u=S.indexOf($===1?":":"{"),k=S.substring(0,$!==3?u:10);return u=S.substring(u+1,S.length-1),Ae($!==2?k:k.replace(V,"$1"),u,$)}function s(S,$){var u=n($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return u!==$+";"?u.replace(Z," or ($1)").substring(4):"("+$+")"}function d(S,$,u,k,l,D,w,te,B,q){for(var F=0,se=$,ue;F<ee;++F)switch(ue=T[F].call(b,S,se,u,k,l,D,w,te,B,q)){case void 0:case!1:case!0:case null:break;default:se=ue}if(se!==$)return se}function m(S){switch(S){case void 0:case null:ee=T.length=0;break;default:if(typeof S=="function")T[ee++]=S;else if(typeof S=="object")for(var $=0,u=S.length;$<u;++$)m(S[$]);else $e=!!S|0}return m}function g(S){return S=S.prefix,S!==void 0&&(Ae=null,S?typeof S!="function"?C=1:(C=2,Ae=S):C=0),g}function b(S,$){var u=S;if(33>u.charCodeAt(0)&&(u=u.trim()),Ee=u,u=[Ee],0<ee){var k=d(-1,$,u,u,oe,N,0,0,0,0);k!==void 0&&typeof k=="string"&&($=k)}var l=r(J,u,$,0,0);return 0<ee&&(k=d(-2,l,u,u,oe,N,l.length,0,0,0),k!==void 0&&(l=k)),Ee="",Q=0,N=oe=1,l}var h=/^\0+/g,A=/[\0\r\f]/g,f=/: */g,j=/zoo|gra/,I=/([,: ])(transform)/g,y=/,\r+?/g,x=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,M=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,Z=/([\s\S]*?);/g,Y=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ae=/stretch|:\s*\w+\-(?:conte|avail)/,U=/([^-])(image-set\()/,N=1,oe=1,Q=0,C=1,J=[],T=[],ee=0,Ae=null,$e=0,Ee="";return b.use=m,b.set=g,e!==void 0&&g(e),b}var mi={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hi(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var gi=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ta=hi(function(e){return gi.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ja={exports:{}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=typeof Symbol=="function"&&Symbol.for,_r=ne?Symbol.for("react.element"):60103,Ir=ne?Symbol.for("react.portal"):60106,Dt=ne?Symbol.for("react.fragment"):60107,Bt=ne?Symbol.for("react.strict_mode"):60108,Ht=ne?Symbol.for("react.profiler"):60114,qt=ne?Symbol.for("react.provider"):60109,Gt=ne?Symbol.for("react.context"):60110,Fr=ne?Symbol.for("react.async_mode"):60111,Yt=ne?Symbol.for("react.concurrent_mode"):60111,Vt=ne?Symbol.for("react.forward_ref"):60112,Ut=ne?Symbol.for("react.suspense"):60113,fi=ne?Symbol.for("react.suspense_list"):60120,Wt=ne?Symbol.for("react.memo"):60115,Kt=ne?Symbol.for("react.lazy"):60116,yi=ne?Symbol.for("react.block"):60121,bi=ne?Symbol.for("react.fundamental"):60117,xi=ne?Symbol.for("react.responder"):60118,wi=ne?Symbol.for("react.scope"):60119;function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case _r:switch(e=e.type,e){case Fr:case Yt:case Dt:case Ht:case Bt:case Ut:return e;default:switch(e=e&&e.$$typeof,e){case Gt:case Vt:case Kt:case Wt:case qt:return e;default:return r}}case Ir:return r}}}function Qa(e){return me(e)===Yt}G.AsyncMode=Fr;G.ConcurrentMode=Yt;G.ContextConsumer=Gt;G.ContextProvider=qt;G.Element=_r;G.ForwardRef=Vt;G.Fragment=Dt;G.Lazy=Kt;G.Memo=Wt;G.Portal=Ir;G.Profiler=Ht;G.StrictMode=Bt;G.Suspense=Ut;G.isAsyncMode=function(e){return Qa(e)||me(e)===Fr};G.isConcurrentMode=Qa;G.isContextConsumer=function(e){return me(e)===Gt};G.isContextProvider=function(e){return me(e)===qt};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r};G.isForwardRef=function(e){return me(e)===Vt};G.isFragment=function(e){return me(e)===Dt};G.isLazy=function(e){return me(e)===Kt};G.isMemo=function(e){return me(e)===Wt};G.isPortal=function(e){return me(e)===Ir};G.isProfiler=function(e){return me(e)===Ht};G.isStrictMode=function(e){return me(e)===Bt};G.isSuspense=function(e){return me(e)===Ut};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Dt||e===Yt||e===Ht||e===Bt||e===Ut||e===fi||typeof e=="object"&&e!==null&&(e.$$typeof===Kt||e.$$typeof===Wt||e.$$typeof===qt||e.$$typeof===Gt||e.$$typeof===Vt||e.$$typeof===bi||e.$$typeof===xi||e.$$typeof===wi||e.$$typeof===yi)};G.typeOf=me;Ja.exports=G;var $i=Ja.exports,Tr=$i,vi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ki={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Si={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lr={};Lr[Tr.ForwardRef]=Si;Lr[Tr.Memo]=eo;function ra(e){return Tr.isMemo(e)?eo:Lr[e.$$typeof]||vi}var ji=Object.defineProperty,Ci=Object.getOwnPropertyNames,aa=Object.getOwnPropertySymbols,Ai=Object.getOwnPropertyDescriptor,Ei=Object.getPrototypeOf,oa=Object.prototype;function to(e,r,a){if(typeof r!="string"){if(oa){var i=Ei(r);i&&i!==oa&&to(e,i,a)}var n=Ci(r);aa&&(n=n.concat(aa(r)));for(var c=ra(e),s=ra(r),d=0;d<n.length;++d){var m=n[d];if(!ki[m]&&!(a&&a[m])&&!(s&&s[m])&&!(c&&c[m])){var g=Ai(r,m);try{ji(e,m,g)}catch{}}}}return e}var zi=to;const Pi=Zo(zi);var he={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var ia=function(e,r){for(var a=[e[0]],i=0,n=r.length;i<n;i+=1)a.push(r[i],e[i+1]);return a},pr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Za.typeOf(e)},vt=Object.freeze([]),je=Object.freeze({});function He(e){return typeof e=="function"}function na(e){return e.displayName||e.name||"Component"}function Or(e){return e&&typeof e.styledComponentId=="string"}var qe=typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_ATTR||he.SC_ATTR)||"data-styled",Nr=typeof window<"u"&&"HTMLElement"in window,Ri=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&he.REACT_APP_SC_DISABLE_SPEEDY!==""?he.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&he.REACT_APP_SC_DISABLE_SPEEDY:he.SC_DISABLE_SPEEDY!==void 0&&he.SC_DISABLE_SPEEDY!==""&&he.SC_DISABLE_SPEEDY!=="false"&&he.SC_DISABLE_SPEEDY)),Mi={};function _e(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var _i=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,n=0;n<a;n++)i+=this.groupSizes[n];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var n=this.groupSizes,c=n.length,s=c;a>=s;)(s<<=1)<0&&_e(16,""+a);this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var d=c;d<s;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(a+1),g=0,b=i.length;g<b;g++)this.tag.insertRule(m,i[g])&&(this.groupSizes[a]++,m++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],n=this.indexOfGroup(a),c=n+i;this.groupSizes[a]=0;for(var s=n;s<c;s++)this.tag.deleteRule(n)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var n=this.groupSizes[a],c=this.indexOfGroup(a),s=c+n,d=c;d<s;d++)i+=this.tag.getRule(d)+`/*!sc*/
`;return i},e}(),bt=new Map,kt=new Map,Ze=1,ot=function(e){if(bt.has(e))return bt.get(e);for(;kt.has(Ze);)Ze++;var r=Ze++;return bt.set(e,r),kt.set(r,e),r},Ii=function(e){return kt.get(e)},Fi=function(e,r){r>=Ze&&(Ze=r+1),bt.set(e,r),kt.set(r,e)},Ti="style["+qe+'][data-styled-version="5.3.11"]',Li=new RegExp("^"+qe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Oi=function(e,r,a){for(var i,n=a.split(","),c=0,s=n.length;c<s;c++)(i=n[c])&&e.registerName(r,i)},Ni=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],n=0,c=a.length;n<c;n++){var s=a[n].trim();if(s){var d=s.match(Li);if(d){var m=0|parseInt(d[1],10),g=d[2];m!==0&&(Fi(g,m),Oi(e,g,d[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(s)}}},Di=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ro=function(e){var r=document.head,a=e||r,i=document.createElement("style"),n=function(d){for(var m=d.childNodes,g=m.length;g>=0;g--){var b=m[g];if(b&&b.nodeType===1&&b.hasAttribute(qe))return b}}(a),c=n!==void 0?n.nextSibling:null;i.setAttribute(qe,"active"),i.setAttribute("data-styled-version","5.3.11");var s=Di();return s&&i.setAttribute("nonce",s),a.insertBefore(i,c),i},Bi=function(){function e(a){var i=this.element=ro(a);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var c=document.styleSheets,s=0,d=c.length;s<d;s++){var m=c[s];if(m.ownerNode===n)return m}_e(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Hi=function(){function e(a){var i=this.element=ro(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var n=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(n,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),qi=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),sa=Nr,Gi={isServer:!Nr,useCSSOMInjection:!Ri},St=function(){function e(a,i,n){a===void 0&&(a=je),i===void 0&&(i={}),this.options=ye({},Gi,{},a),this.gs=i,this.names=new Map(n),this.server=!!a.isServer,!this.server&&Nr&&sa&&(sa=!1,function(c){for(var s=document.querySelectorAll(Ti),d=0,m=s.length;d<m;d++){var g=s[d];g&&g.getAttribute(qe)!=="active"&&(Ni(c,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}e.registerId=function(a){return ot(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,c=i.useCSSOMInjection,s=i.target,a=n?new qi(s):c?new Bi(s):new Hi(s),new _i(a)));var a,i,n,c,s},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(ot(a),this.names.has(a))this.names.get(a).add(i);else{var n=new Set;n.add(i),this.names.set(a,n)}},r.insertRules=function(a,i,n){this.registerName(a,i),this.getTag().insertRules(ot(a),n)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(ot(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),n=i.length,c="",s=0;s<n;s++){var d=Ii(s);if(d!==void 0){var m=a.names.get(d),g=i.getGroup(s);if(m&&g&&m.size){var b=qe+".g"+s+'[id="'+d+'"]',h="";m!==void 0&&m.forEach(function(A){A.length>0&&(h+=A+",")}),c+=""+g+b+'{content:"'+h+`"}/*!sc*/
`}}}return c}(this)},e}(),Yi=/(a)(d)/gi,ca=function(e){return String.fromCharCode(e+(e>25?39:97))};function ur(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=ca(r%52)+a;return(ca(r%52)+a).replace(Yi,"$1-$2")}var Le=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},ao=function(e){return Le(5381,e)};function oo(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(He(a)&&!Or(a))return!1}return!0}var Vi=ao("5.3.11"),Ui=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&oo(r),this.componentId=a,this.baseHash=Le(Vi,a),this.baseStyle=i,St.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var n=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))c.push(this.staticRulesId);else{var s=Ie(this.rules,r,a,i).join(""),d=ur(Le(this.baseHash,s)>>>0);if(!a.hasNameForId(n,d)){var m=i(s,"."+d,void 0,n);a.insertRules(n,d,m)}c.push(d),this.staticRulesId=d}else{for(var g=this.rules.length,b=Le(this.baseHash,i.hash),h="",A=0;A<g;A++){var f=this.rules[A];if(typeof f=="string")h+=f;else if(f){var j=Ie(f,r,a,i),I=Array.isArray(j)?j.join(""):j;b=Le(b,I+A),h+=I}}if(h){var y=ur(b>>>0);if(!a.hasNameForId(n,y)){var x=i(h,"."+y,void 0,n);a.insertRules(n,y,x)}c.push(y)}}return c.join(" ")},e}(),Wi=/^\s*\/\/.*$/gm,Ki=[":","[",".","#"];function Xi(e){var r,a,i,n,c=je,s=c.options,d=s===void 0?je:s,m=c.plugins,g=m===void 0?vt:m,b=new ui(d),h=[],A=function(I){function y(x){if(x)try{I(x+"}")}catch{}}return function(x,v,R,M,E,O,Z,Y,V,ae){switch(x){case 1:if(V===0&&v.charCodeAt(0)===64)return I(v+";"),"";break;case 2:if(Y===0)return v+"/*|*/";break;case 3:switch(Y){case 102:case 112:return I(R[0]+v),"";default:return v+(ae===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(y)}}}(function(I){h.push(I)}),f=function(I,y,x){return y===0&&Ki.indexOf(x[a.length])!==-1||x.match(n)?I:"."+r};function j(I,y,x,v){v===void 0&&(v="&");var R=I.replace(Wi,""),M=y&&x?x+" "+y+" { "+R+" }":R;return r=v,a=y,i=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),b(x||!y?"":y,M)}return b.use([].concat(g,[function(I,y,x){I===2&&x.length&&x[0].lastIndexOf(a)>0&&(x[0]=x[0].replace(i,f))},A,function(I){if(I===-2){var y=h;return h=[],y}}])),j.hash=g.length?g.reduce(function(I,y){return y.name||_e(15),Le(I,y.name)},5381).toString():"",j}var io=Te.createContext();io.Consumer;var no=Te.createContext(),Zi=(no.Consumer,new St),mr=Xi();function so(){return p.useContext(io)||Zi}function co(){return p.useContext(no)||mr}var lo=function(){function e(r,a){var i=this;this.inject=function(n,c){c===void 0&&(c=mr);var s=i.name+c.hash;n.hasNameForId(i.id,s)||n.insertRules(i.id,s,c(i.rules,s,"@keyframes"))},this.toString=function(){return _e(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=mr),this.name+r.hash},e}(),Ji=/([A-Z])/,Qi=/([A-Z])/g,en=/^ms-/,tn=function(e){return"-"+e.toLowerCase()};function la(e){return Ji.test(e)?e.replace(Qi,tn).replace(en,"-ms-"):e}var da=function(e){return e==null||e===!1||e===""};function Ie(e,r,a,i){if(Array.isArray(e)){for(var n,c=[],s=0,d=e.length;s<d;s+=1)(n=Ie(e[s],r,a,i))!==""&&(Array.isArray(n)?c.push.apply(c,n):c.push(n));return c}if(da(e))return"";if(Or(e))return"."+e.styledComponentId;if(He(e)){if(typeof(g=e)!="function"||g.prototype&&g.prototype.isReactComponent||!r)return e;var m=e(r);return Ie(m,r,a,i)}var g;return e instanceof lo?a?(e.inject(a,i),e.getName(i)):e:pr(e)?function b(h,A){var f,j,I=[];for(var y in h)h.hasOwnProperty(y)&&!da(h[y])&&(Array.isArray(h[y])&&h[y].isCss||He(h[y])?I.push(la(y)+":",h[y],";"):pr(h[y])?I.push.apply(I,b(h[y],y)):I.push(la(y)+": "+(f=y,(j=h[y])==null||typeof j=="boolean"||j===""?"":typeof j!="number"||j===0||f in mi||f.startsWith("--")?String(j).trim():j+"px")+";"));return A?[A+" {"].concat(I,["}"]):I}(e):e.toString()}var pa=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ie(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return He(e)||pr(e)?pa(Ie(ia(vt,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:pa(Ie(ia(e,a)))}var po=function(e,r,a){return a===void 0&&(a=je),e.theme!==a.theme&&e.theme||r||a.theme},rn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,an=/(^-|-$)/g;function er(e){return e.replace(rn,"-").replace(an,"")}var Dr=function(e){return ur(ao(e)>>>0)};function it(e){return typeof e=="string"&&!0}var hr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},on=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function nn(e,r,a){var i=e[a];hr(r)&&hr(i)?uo(i,r):e[a]=r}function uo(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var n=0,c=a;n<c.length;n++){var s=c[n];if(hr(s))for(var d in s)on(d)&&nn(e,s[d],d)}return e}var Je=Te.createContext();Je.Consumer;function sn(e){var r=p.useContext(Je),a=p.useMemo(function(){return function(i,n){if(!i)return _e(14);if(He(i)){var c=i(n);return c}return Array.isArray(i)||typeof i!="object"?_e(8):n?ye({},n,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Te.createElement(Je.Provider,{value:a},e.children):null}var tr={};function mo(e,r,a){var i=Or(e),n=!it(e),c=r.attrs,s=c===void 0?vt:c,d=r.componentId,m=d===void 0?function(v,R){var M=typeof v!="string"?"sc":er(v);tr[M]=(tr[M]||0)+1;var E=M+"-"+Dr("5.3.11"+M+tr[M]);return R?R+"-"+E:E}(r.displayName,r.parentComponentId):d,g=r.displayName,b=g===void 0?function(v){return it(v)?"styled."+v:"Styled("+na(v)+")"}(e):g,h=r.displayName&&r.componentId?er(r.displayName)+"-"+r.componentId:r.componentId||m,A=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,f=r.shouldForwardProp;i&&e.shouldForwardProp&&(f=r.shouldForwardProp?function(v,R,M){return e.shouldForwardProp(v,R,M)&&r.shouldForwardProp(v,R,M)}:e.shouldForwardProp);var j,I=new Ui(a,h,i?e.componentStyle:void 0),y=I.isStatic&&s.length===0,x=function(v,R){return function(M,E,O,Z){var Y=M.attrs,V=M.componentStyle,ae=M.defaultProps,U=M.foldedComponentIds,N=M.shouldForwardProp,oe=M.styledComponentId,Q=M.target,C=function(k,l,D){k===void 0&&(k=je);var w=ye({},l,{theme:k}),te={};return D.forEach(function(B){var q,F,se,ue=B;for(q in He(ue)&&(ue=ue(w)),ue)w[q]=te[q]=q==="className"?(F=te[q],se=ue[q],F&&se?F+" "+se:F||se):ue[q]}),[w,te]}(po(E,p.useContext(Je),ae)||je,E,Y),J=C[0],T=C[1],ee=function(k,l,D,w){var te=so(),B=co(),q=l?k.generateAndInjectStyles(je,te,B):k.generateAndInjectStyles(D,te,B);return q}(V,Z,J),Ae=O,$e=T.$as||E.$as||T.as||E.as||Q,Ee=it($e),S=T!==E?ye({},E,{},T):E,$={};for(var u in S)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?$.as=S[u]:(N?N(u,ta,$e):!Ee||ta(u))&&($[u]=S[u]));return E.style&&T.style!==E.style&&($.style=ye({},E.style,{},T.style)),$.className=Array.prototype.concat(U,oe,ee!==oe?ee:null,E.className,T.className).filter(Boolean).join(" "),$.ref=Ae,p.createElement($e,$)}(j,v,R,y)};return x.displayName=b,(j=Te.forwardRef(x)).attrs=A,j.componentStyle=I,j.displayName=b,j.shouldForwardProp=f,j.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):vt,j.styledComponentId=h,j.target=i?e.target:e,j.withComponent=function(v){var R=r.componentId,M=function(O,Z){if(O==null)return{};var Y,V,ae={},U=Object.keys(O);for(V=0;V<U.length;V++)Y=U[V],Z.indexOf(Y)>=0||(ae[Y]=O[Y]);return ae}(r,["componentId"]),E=R&&R+"-"+(it(v)?v:er(na(v)));return mo(v,ye({},M,{attrs:A,componentId:E}),a)},Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?uo({},e.defaultProps,v):v}}),Object.defineProperty(j,"toString",{value:function(){return"."+j.styledComponentId}}),n&&Pi(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),j}var o=function(e){return function r(a,i,n){if(n===void 0&&(n=je),!Za.isValidElementType(i))return _e(1,String(i));var c=function(){return a(i,n,ie.apply(void 0,arguments))};return c.withConfig=function(s){return r(a,i,ye({},n,{},s))},c.attrs=function(s){return r(a,i,ye({},n,{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},c}(mo,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var cn=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=oo(a),St.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,n,c){var s=c(Ie(this.rules,i,n,c).join(""),""),d=this.componentId+a;n.insertRules(d,d,s)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,n,c){a>2&&St.registerId(this.componentId+a),this.removeStyles(a,n),this.createStyles(a,i,n,c)},e}();function ln(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=ie.apply(void 0,[e].concat(a)),c="sc-global-"+Dr(JSON.stringify(n)),s=new cn(n,c);function d(g){var b=so(),h=co(),A=p.useContext(Je),f=p.useRef(b.allocateGSInstance(c)).current;return b.server&&m(f,g,b,A,h),p.useLayoutEffect(function(){if(!b.server)return m(f,g,b,A,h),function(){return s.removeStyles(f,b)}},[f,g,b,A,h]),null}function m(g,b,h,A,f){if(s.isStatic)s.renderStyles(g,Mi,h,f);else{var j=ye({},b,{theme:po(b,A,d.defaultProps)});s.renderStyles(g,j,h,f)}}return Te.memo(d)}function Xt(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=ie.apply(void 0,[e].concat(a)).join(""),c=Dr(n);return new lo(c,n)}const dn=ln`
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
`,ke={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},pn=ke.shadow,un={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},mn={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},hn=e=>({mode:e,color:e==="dark"?un:ke.color,typography:ke.typography,spacing:ke.spacing,radius:ke.radius,shadow:e==="dark"?mn:pn,layout:ke.layout,breakpoints:ke.breakpoints,zIndex:ke.zIndex}),ho="lafranciago-theme-mode",go=p.createContext(null),gn=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(ho);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function fn({children:e}){const[r,a]=p.useState(gn),i=p.useRef(!1);p.useEffect(()=>{if(window.localStorage.setItem(ho,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const m=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(m),delete document.documentElement.dataset.themeTransition}},[r]);const n=p.useCallback(()=>{a(m=>m==="light"?"dark":"light")},[]),c=p.useCallback(m=>{a(m)},[]),s=p.useMemo(()=>hn(r),[r]),d=p.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:n,setMode:c}),[r,c,n]);return t.jsx(go.Provider,{value:d,children:t.jsxs(sn,{theme:s,children:[t.jsx(dn,{}),e]})})}function yn(){const e=p.useContext(go);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),P=(e,r)=>{const a=p.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:d="",children:m,...g},b)=>p.createElement("svg",{ref:b,...bn,width:n,height:n,stroke:i,strokeWidth:s?Number(c)*24/Number(n):c,className:["lucide",`lucide-${xn(e)}`,d].join(" "),...g},[...r.map(([h,A])=>p.createElement(h,A)),...Array.isArray(m)?m:[m]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=P("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=P("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=P("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=P("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=P("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=P("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=P("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=P("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=P("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=P("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=P("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=P("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=P("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=P("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=P("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=P("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=P("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=P("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=P("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=P("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=P("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=P("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=P("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=P("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=P("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=P("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=P("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=P("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=P("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=P("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=P("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=P("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=P("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=P("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=P("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=P("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=P("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=P("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=P("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=P("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function zo({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const xt="lafranciago:foto-perfil",fr=new Set;let Ue=null,ha=!1;const On=()=>fr.forEach(e=>e()),Po=e=>/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(e),Nn=()=>{try{const e=window.localStorage.getItem(xt);return e&&Po(e)?e:null}catch{return null}};function ga(e){if(!(e!==null&&!Po(e))){Ue=e;try{e?window.localStorage.setItem(xt,e):window.localStorage.removeItem(xt)}catch{try{window.localStorage.removeItem(xt)}catch{}}On()}}function Dn(){const[e,r]=p.useState(Ue);p.useEffect(()=>{ha||(ha=!0,Ue=Nn()),r(Ue);const i=()=>r(Ue);return fr.add(i),()=>{fr.delete(i)}},[]);const a=p.useCallback(()=>ga(null),[]);return{photo:e,setPhoto:ga,clearPhoto:a}}const Bn="https://photon.komoot.io/api/",Hn="https://nominatim.openstreetmap.org/reverse",yr={lat:-31.4063691,lon:-62.6332043},rr=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),qn=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Gn=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function Yn(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(yr.lat),lon:String(yr.lon)});try{const n=await fetch(`${Bn}?${i.toString()}`,{signal:r});return n.ok?((await n.json()).features??[]).map((s,d)=>{var h;const m=s.properties??{},[g,b]=((h=s.geometry)==null?void 0:h.coordinates)??[];return typeof b!="number"||typeof g!="number"?null:{id:`${m.type??"geo"}-${d}-${b}-${g}`,label:qn(m),context:Gn(m),lat:b,lon:g}}).filter(s=>s!==null).sort((s,d)=>{const m=rr(a),g=rr(s.label).startsWith(m),b=rr(d.label).startsWith(m);return g!==b?g?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Vn(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const n=await fetch(`${Hn}?${i.toString()}`,{signal:a});if(!n.ok)return null;const s=(await n.json()).address??{};return[s.road,s.house_number].filter(Boolean).join(" ")||s.neighbourhood||s.city||null}catch{return null}}const Un=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Ro="https://lafranciago-api.lafranciago-api.workers.dev",we=()=>Ro.length>0;class Mo extends Error{constructor(r,a){super(r),this.status=a,this.name="ApiError"}}async function st(e,r={}){const a=await fetch(`${Ro}${e}`,{...r,credentials:"include",headers:{...r.body instanceof FormData?{}:{"Content-Type":"application/json"},...r.headers}});if(!a.ok){const i=await a.json().then(n=>n.error).catch(()=>null);throw new Mo(i??`Error ${a.status}`,a.status)}return a.json()}const z={get:e=>st(e),post:(e,r)=>st(e,{method:"POST",body:r instanceof FormData?r:JSON.stringify(r??{})}),patch:(e,r)=>st(e,{method:"PATCH",body:JSON.stringify(r??{})}),delete:e=>st(e,{method:"DELETE"})},Re={registro:e=>z.post("/auth/registro",e),login:e=>z.post("/auth/login",e),loginPanel:e=>z.post("/auth/login-panel",e),logout:()=>z.post("/auth/logout"),yo:()=>z.get("/auth/yo"),recuperar:e=>z.post("/auth/recuperar",{email:e}),confirmarRecuperacion:(e,r)=>z.post("/auth/recuperar/confirmar",{token:e,password:r}),cambiarRol:e=>z.post("/auth/rol",{rol:e})},Gp={crear:(e,r)=>z.post("/postulaciones",{rol:e,datos:r}),mias:()=>z.get("/postulaciones/mias")},Yp={postulaciones:(e="pendiente")=>z.get(`/admin/postulaciones?estado=${e}`),revisar:(e,r,a)=>z.post(`/admin/postulaciones/${e}`,{decision:r,nota:a})},Wn={listar:(e={})=>{const r=new URLSearchParams;e.rubro&&r.set("rubro",e.rubro),e.q&&r.set("q",e.q);const a=r.toString();return z.get(`/comercios${a?`?${a}`:""}`)},detalle:e=>z.get(`/comercios/${e}`),crear:e=>z.post("/comercios",e)},Kn={portada:()=>z.get("/ofertas")},Vp={ver:()=>z.get("/mi-comercio"),crearProducto:e=>z.post("/productos",e),editarProducto:(e,r)=>z.patch(`/productos/${e}`,r),borrarProducto:e=>z.delete(`/productos/${e}`),ofertas:()=>z.get("/mi-comercio/ofertas"),metricas:()=>z.get("/mi-comercio/metricas"),crearOferta:e=>z.post("/mi-comercio/ofertas",e),borrarOferta:e=>z.delete(`/mi-comercio/ofertas/${e}`),activarOferta:(e,r)=>z.patch(`/mi-comercio/ofertas/${e}`,{activa:r})},Up={pedidos:e=>z.get(`/mi-comercio/pedidos${e?`?estado=${e}`:""}`),envios:()=>z.get("/mi-comercio/envios"),mensajes:e=>z.get(`/pedidos/${e}/mensajes`),enviarMensaje:(e,r)=>z.post(`/pedidos/${e}/mensajes`,{texto:r})},Wp={disponibles:(e,r)=>{const a=new URLSearchParams;typeof e=="number"&&typeof r=="number"&&(a.set("lat",String(e)),a.set("lon",String(r)));const i=a.toString();return z.get(`/delivery/disponibles${i?`?${i}`:""}`)},detalle:e=>z.get(`/delivery/pedidos/${e}`),tomar:(e,r,a)=>z.post(`/delivery/pedidos/${e}/tomar`,{lat:r,lon:a}),actualizarUbicacion:(e,r)=>z.post("/delivery/ubicacion",{lat:e,lon:r}),misEnvios:()=>z.get("/delivery/mis-envios"),avanzar:(e,r)=>z.post(`/delivery/envios/${e}/estado`,{estado:r})},Kp={listar:()=>z.get("/pedidos"),crear:e=>z.post("/pedidos",e)},_o={listar:()=>z.get("/direcciones"),crear:e=>z.post("/direcciones",e)},Io={listar:()=>z.get("/notificaciones"),marcarLeidas:e=>z.post("/notificaciones/leidas",{ids:e??[]})},Xp={iniciar:e=>z.post(`/pedidos/${e}/pagar`),estado:e=>z.get(`/pedidos/${e}/pago`),conectarComercio:()=>z.get("/pagos/conectar")},br={listar:()=>z.get("/favoritos"),agregar:e=>z.post(`/favoritos/${e}`),quitar:e=>z.delete(`/favoritos/${e}`)},Zp={subir:(e,r)=>{const a=new FormData;return a.append("archivo",e,r),z.post("/media",a)}},xr=new Set;let wr=[],Oe="inicial";const fa=()=>xr.forEach(e=>e());async function Fo(){if(Oe==="inicial"){if(Oe="cargando",!we()){Oe="listo",fa();return}try{const{direcciones:e}=await _o.listar();wr=e.map(r=>({id:r.id,label:r.etiqueta,address:r.direccion,primary:r.es_principal===1}))}catch{wr=[]}Oe="listo",fa()}}function To(){return Oe="inicial",Fo()}async function Xn(e){if(!we())return null;const{id:r}=await _o.crear(e);return await To(),r}function Jp(){const[,e]=p.useState(0);p.useEffect(()=>{const a=()=>e(i=>i+1);return xr.add(a),Fo(),()=>{xr.delete(a)}},[]);const r=p.useCallback(()=>To(),[]);return{direcciones:wr,cargando:Oe!=="listo",recargar:r}}const Zn=Xt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Jn=Xt`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Qn=o.div`
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
  animation: ${Zn} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,es=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Jn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ts=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,rs=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,as=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,os=o.input`
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
`,is=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,ns=o.button`
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
`,ss=o.button`
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
`;function cs({open:e,address:r,onCancel:a,onSave:i}){const[n,c]=p.useState("");if(p.useEffect(()=>{e&&c("")},[e]),p.useEffect(()=>{if(!e)return;const m=g=>{g.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,e]),!e)return null;const s=n.trim(),d=m=>{m.preventDefault(),s&&i(s)};return t.jsx(Qn,{onClick:m=>{m.stopPropagation(),a()},role:"presentation",children:t.jsxs(es,{as:"form",onSubmit:d,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:m=>m.stopPropagation(),children:[t.jsx(ts,{children:"Nombre de la dirección"}),r?t.jsx(rs,{children:r}):null,t.jsx(as,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(os,{id:"address-name",value:n,onChange:m=>c(m.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(is,{children:[t.jsx(ns,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(ss,{type:"submit",disabled:!s,children:"Guardar"})]})]})})}const Ce=ie`
  ${({theme:e})=>e.mode==="dark"&&ie`
      color: ${e.color.neonMuted};
    `}
`,$r=ie`
  ${({theme:e})=>e.mode==="dark"&&ie`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,ls=ie`
  ${({theme:e})=>e.mode==="dark"&&ie`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;ie`
  ${({theme:e})=>e.mode==="dark"&&ie`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const ds=o.div`
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
`,ps=o.div`
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
`,us=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,ms=o.span`
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
`,hs=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,gs=o.button`
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
`,fs=o.div`
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
`,ys=o.div`
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
`,bs=o.input`
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
`,xs=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,ws=o.button`
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
`,$s=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,vs=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,ks=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Ss=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,js=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,Cs=o.button`
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
`,As=o.button`
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
`,Es=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,zs=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,Ps=o.button`
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
`,Rs=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,Ms=o.button`
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
`,_s=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Is=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fs=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,Ts=p.lazy(()=>X(()=>import("./AddressMap-CpaBp3my.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.AddressMap}))),Ls=260,Os=350;function Ns({open:e,currentId:r,onClose:a,onSelect:i,startOnNew:n=!1}){const[c,s]=p.useState(!1),[d,m]=p.useState(!1),[g,b]=p.useState(n?"new":"list"),[h,A]=p.useState(""),[f,j]=p.useState([]),[I,y]=p.useState(!1),[x,v]=p.useState(null),[R,M]=p.useState([]),[E,O]=p.useState(!1),Z=p.useRef(!1);p.useEffect(()=>{if(e){s(!0),b(n?"new":"list");const J=window.requestAnimationFrame(()=>m(!0));return()=>window.cancelAnimationFrame(J)}if(!c)return;m(!1);const C=window.setTimeout(()=>{s(!1),b(n?"new":"list"),A(""),j([]),v(null),O(!1)},Ls);return()=>window.clearTimeout(C)},[c,e,n]),p.useEffect(()=>{if(!e)return;const C=J=>{if(J.key==="Escape"&&!E){if(g==="new"){b("list");return}a()}};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[E,a,e,g]),p.useEffect(()=>{if(g!=="new")return;if(Z.current){Z.current=!1;return}const C=h.trim();if(C.length<2){j([]),y(!1);return}const J=new AbortController;y(!0);const T=window.setTimeout(()=>{Yn(C,J.signal).then(ee=>{j(ee),y(!1)}).catch(()=>y(!1))},Os);return()=>{window.clearTimeout(T),J.abort()}},[h,g]);const Y=p.useMemo(()=>[...Un,...R],[R]),V=C=>{Z.current=!0,A(C.label),j([]),v({lat:C.lat,lon:C.lon})},ae=(C,J)=>{v({lat:C,lon:J}),Vn(C,J).then(T=>{T&&(Z.current=!0,A(T),j([]))})},U=async C=>{const J=h.trim();O(!1);try{const ee=await Xn({etiqueta:C,direccion:J,lat:x==null?void 0:x.lat,lon:x==null?void 0:x.lon});if(ee){i(ee,J),a();return}}catch{}const T={id:`custom-${Date.now()}`,label:C,address:J,primary:!1};M(ee=>[...ee,T]),i(T.id,T.address),a()};if(!c)return null;const N=g==="new",oe=x??yr,Q=x!==null&&h.trim().length>=3;return t.jsxs(ds,{"data-visible":d,onClick:a,role:"presentation",children:[t.jsxs(ps,{"data-visible":d,"data-full":N,role:"dialog","aria-modal":"true","aria-label":N?"Agregar una dirección nueva":"Dirección de entrega",onClick:C=>C.stopPropagation(),children:[t.jsxs(us,{children:[t.jsx(ms,{"aria-hidden":"true"}),N?t.jsx(As,{type:"button",onClick:()=>b("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(wn,{size:18,"aria-hidden":"true"})}):null,t.jsx(hs,{children:N?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(gs,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(Eo,{size:18,"aria-hidden":"true"})})]}),t.jsx(fs,{"data-full":N,children:N?t.jsxs(t.Fragment,{children:[t.jsxs(ys,{children:[t.jsx(gr,{size:18,"aria-hidden":"true"}),t.jsx(bs,{value:h,onChange:C=>A(C.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),f.length>0?t.jsx(Rs,{"aria-label":"Sugerencias de direcciones",children:f.map(C=>t.jsxs(Ms,{type:"button",onClick:()=>V(C),children:[t.jsx(Ct,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(_s,{children:C.label}),C.context?t.jsx(Is,{children:C.context}):null]})]},C.id))}):null,f.length===0&&I?t.jsx(Fs,{children:"Buscando…"}):null,t.jsx(Es,{children:t.jsx(p.Suspense,{fallback:null,children:t.jsx(Ts,{lat:oe.lat,lon:oe.lon,onPick:ae})})}),t.jsx(zs,{children:x?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(Ps,{type:"button",onClick:()=>O(!0),disabled:!Q,children:[t.jsx(Ct,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(xs,{children:"Tus direcciones guardadas"}),Y.map(C=>t.jsxs(ws,{type:"button","data-current":C.id===r,onClick:()=>{i(C.id,C.address),a()},children:[t.jsx($s,{children:t.jsx(qr,{size:18,"aria-hidden":"true"})}),t.jsxs(vs,{children:[t.jsx(ks,{children:C.label}),t.jsx(Ss,{children:C.address})]}),C.id===r?t.jsx(js,{"aria-label":"Dirección actual",children:t.jsx(vn,{size:16,"aria-hidden":"true"})}):null]},C.id)),t.jsxs(Cs,{type:"button",onClick:()=>b("new"),children:[t.jsx(vo,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(cs,{open:E,address:h.trim(),onCancel:()=>O(!1),onSave:U})]})}const vr=new Set;let Se=new Set,Ne="inicial";const At=()=>vr.forEach(e=>e());async function Lo(){if(Ne==="inicial"){if(Ne="cargando",!we()){Ne="listo",At();return}try{const{favoritos:e}=await br.listar();Se=new Set(e.map(r=>r.id))}catch{Se=new Set}Ne="listo",At()}}function Ds(){return Ne="inicial",Lo()}async function Bs(e){const r=Se.has(e),a=new Set(Se);if(r?a.delete(e):a.add(e),Se=a,At(),!!we())try{await(r?br.quitar(e):br.agregar(e))}catch{const i=new Set(Se);r?i.add(e):i.delete(e),Se=i,At()}}function Hs(){const[,e]=p.useState(0);return p.useEffect(()=>{const r=()=>e(a=>a+1);return vr.add(r),Lo(),()=>{vr.delete(r)}},[]),{favoritos:Se,cargando:Ne!=="listo"}}const kr=new Set;let xe=null,Sr=we()?"cargando":"invitado",ya=!1;const ba=()=>kr.forEach(e=>e()),De=e=>{const r=(xe==null?void 0:xe.id)!==(e==null?void 0:e.id);xe=e,Sr=e?"conectado":"invitado",ba(),e&&!e.roles&&Re.yo().then(a=>{(xe==null?void 0:xe.id)===a.id&&(xe=a,ba())}).catch(()=>{}),r&&Ds()};async function wt(){if(we())try{De(await Re.yo())}catch(e){(!(e instanceof Mo)||e.status!==401)&&console.warn("No se pudo recuperar la sesión",e),De(null)}}function Oo(){const[e,r]=p.useState({usuario:xe,estado:Sr});p.useEffect(()=>{const d=()=>r({usuario:xe,estado:Sr});return kr.add(d),ya||(ya=!0,wt()),d(),()=>{kr.delete(d)}},[]);const a=p.useCallback(async(d,m)=>{De(await Re.login({email:d,password:m}))},[]),i=p.useCallback(async d=>{De(await Re.registro(d))},[]),n=p.useCallback(async(d,m,g)=>{De(await Re.loginPanel({email:d,password:m,rol:g}))},[]),c=p.useCallback(async d=>{await Re.cambiarRol(d),await wt()},[]),s=p.useCallback(async()=>{try{await Re.logout()}finally{De(null)}},[]);return{usuario:e.usuario,estado:e.estado,conectado:e.estado==="conectado",entrar:a,entrarAlPanel:n,registrar:i,cambiarRol:c,salir:s,refrescar:wt}}function Qp(){return new Promise((e,r)=>{const a="https://lafranciago-api.lafranciago-api.workers.dev",c=window.screenX+(window.outerWidth-480)/2,s=window.screenY+(window.outerHeight-640)/2,d=window.open(`${a}/auth/google`,"lafranciago-google",`width=480,height=640,left=${c},top=${s}`);if(!d){r(new Error("Permití las ventanas emergentes para entrar con Google."));return}let m=!1;const g=()=>{window.removeEventListener("message",b),window.clearInterval(h)};function b(A){if(A.origin!==new URL(a).origin)return;const f=A.data;(f==null?void 0:f.tipo)==="lafranciago:oauth"&&(m=!0,g(),f.exito?wt().then(()=>e()):r(new Error(f.mensaje??"No pudimos completar el ingreso.")))}window.addEventListener("message",b);const h=window.setInterval(()=>{d.closed&&!m&&(g(),r(new Error("Cerraste la ventana antes de terminar.")))},600)})}const qs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Gs=o.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Ys=o.select`
  width: 100%;
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-family: inherit;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.primary};
    outline-offset: 1px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: progress;
  }
`,Vs=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
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
    color 160ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    color: ${({theme:e})=>e.color.danger};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.danger};
    outline-offset: 2px;
  }
`,Us={cliente:"Cliente",comercio:"Comercio",delivery:"Delivery",fletero:"Flete",admin:"Administración"},Ws={cliente:"/",comercio:"/panel/comercio",delivery:"/panel/repartidor",fletero:"/panel/repartidor",admin:"/admin/postulaciones"};function xa({onNavegar:e}){const{usuario:r,conectado:a,cambiarRol:i,salir:n}=Oo(),c=Ua(),[s,d]=p.useState(!1);if(!a||!r)return null;const m=r.roles??["cliente"],g=async h=>{if(!(h===r.rol||s)){d(!0);try{await i(h),e==null||e(),c(Ws[h]??"/")}finally{d(!1)}}},b=async()=>{await n(),e==null||e(),c("/ingresar",{replace:!0})};return t.jsxs(qs,{children:[m.length>1?t.jsxs(t.Fragment,{children:[t.jsxs(Gs,{htmlFor:"cambiar-cuenta",children:[t.jsx(Pn,{size:14,"aria-hidden":"true"}),"Cambiar de cuenta"]}),t.jsx(Ys,{id:"cambiar-cuenta",value:r.rol,disabled:s,onChange:h=>void g(h.target.value),children:m.map(h=>t.jsx("option",{value:h,children:Us[h]??h},h))})]}):null,t.jsxs(Vs,{type:"button",onClick:()=>void b(),children:[t.jsx(Cn,{size:16,"aria-hidden":"true"}),"Cerrar sesión"]})]})}const Ks=6e4,jr=new Set;let Et=[],Be=0,No=!1;const Cr=()=>jr.forEach(e=>e());async function ar(){if(we())try{const e=await Io.listar();Et=e.notificaciones,Be=e.sinLeer,No=!0,Cr()}catch{}}async function eu(){if(Be===0)return;const e=Be;Be=0,Et=Et.map(r=>({...r,leida_en:r.leida_en??new Date().toISOString()})),Cr();try{await Io.marcarLeidas()}catch{Be=e,Cr()}}function Xs(){const[,e]=p.useState(0);p.useEffect(()=>{const a=()=>e(n=>n+1);jr.add(a),ar();const i=window.setInterval(()=>void ar(),Ks);return()=>{jr.delete(a),window.clearInterval(i)}},[]);const r=p.useCallback(()=>ar(),[]);return{notificaciones:Et,sinLeer:Be,cargadas:No,recargar:r}}const Zs=o.form`
  width: 100%;
`,Js=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Qs=o.div`
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
`,ec=o.input`
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
`,tc=o.button`
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
`,Do=p.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:n,id:c="marketplace-search"},s){const d=m=>{m.preventDefault()};return t.jsxs(Zs,{onSubmit:d,role:"search",children:[t.jsx(Js,{htmlFor:c,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(Qs,{children:[t.jsx(gr,{size:18,"aria-hidden":"true"}),t.jsx(ec,{id:c,ref:s,value:r,onChange:m=>a(m.target.value),placeholder:i,type:"search"}),t.jsx(tc,{type:"submit","aria-label":"Buscar",children:t.jsx(gr,{size:16,"aria-hidden":"true"})})]})]})}),rc=Xt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,ac=Xt`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,oc=o.button`
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
`,ic=o.span`
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
  animation: ${rc} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nc=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,sc=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,cc=o.span`
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
`,lc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dc=o.span`
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
`,pc=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${ac} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,uc=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,mc=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,hc=o.span`
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
`;function wa({isDarkMode:e,onToggle:r}){return t.jsxs(oc,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(ic,{"data-dark":e,"aria-hidden":"true",children:t.jsx(En,{size:14,"aria-hidden":"true"})}),t.jsxs(nc,{children:[t.jsxs(sc,{children:["Modo",t.jsx(cc,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(lc,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(dc,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(pc,{}),t.jsx(uc,{"data-dark":e}),t.jsxs(mc,{children:[t.jsx(ma,{size:12,"aria-hidden":"true"}),t.jsx(ua,{size:12,"aria-hidden":"true"})]}),t.jsx(hc,{"data-dark":e,children:e?t.jsx(ua,{size:12,"aria-hidden":"true"}):t.jsx(ma,{size:12,"aria-hidden":"true"})})]})]})}const gc=o.div`
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
`,fc=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,yc=o.div`
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
`;const bc=o.button`
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
`;const $a=o.span`
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
`,or=o.img`
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
`;const va=o.span`
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
`,ka=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,xc=o.span`
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
`;const wc=o(xc)`
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
`;const tu=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,ru=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,au=o.span`
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
`,ou=o.div`
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
`,iu=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Ur=ie`
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
  ${Ur};
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
`;const nu=o.button`
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
`,$c=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Pe=o.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,ze=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,vc=o.div`
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
`,su=o.span`
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
`,cu=o.h1`
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
`,lu=o.p`
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
`,Wr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(Wr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(Wr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(Wr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const kc=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Sc=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,du=o.h2`
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
`,pu=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,jc=o.span`
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
`;o(jc)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const Cc=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,uu=o(Cc)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Ac=o(be)`
  ${Ur};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,Ec=o(Ac)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,mu=o.button`
  ${Ur};
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
`;o(kc)`
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
`;o(Pr)`
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
`;const zc=o.nav`
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
`,Pc=o.ul`
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
`,We=o.span`
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
`,Rc=o(Pr)`
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

    ${({theme:e})=>e.mode==="dark"&&ie`
        color: ${e.color.neon};
      `};
  }

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${We},
  &[aria-current='page'] ${We} {
    ${$r};
  }

  /* Salvo el central: ahí el ícono se mantiene blanco y plano. */
  &[data-primary='true'].active ${We},
  &[data-primary='true'][aria-current='page'] ${We} {
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
`;const Mc=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&ie`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,_c=o.button`
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
`,Ic=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fc=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,Tc=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Bo=ie`
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
`,Lc=o.button`
  ${Bo};
`,Sa=o(be)`
  ${Bo};
`,Oc=o.img`
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
`,Nc=o.span`
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
`,Dc=o.div`
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
`;const Bc=o.div`
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
`,Hc=o.div`
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
`,qc=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Gc=o.span`
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
`,Yc=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Vc=o.span`
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
`,Uc=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,Wc=ie`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Kc=ie`
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
`,Ho=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,ja=o.div`
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
`,Ca=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,Xc=o.div`
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
`,Me=o.span`
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
`,ct=o(Pr)`
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
  &.active ${Me},
  &[aria-current='page'] ${Me} {
    ${$r};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Me} {
    ${$r};
  }
`,lt=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,dt=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,pt=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,ut=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,mt=o.nav`
  display: grid;
  gap: 0.25rem;
`,ht=o.section`
  display: block;
`,gt=o.span`
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
`,Aa=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Ea=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Wc};
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
`,Zc=o.button`
  ${Kc};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${ls};
  ${Ce};
`,za=o.div`
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
`,Jc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Qc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,el=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,tl=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,Pa=o.button`
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
`,rl=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,al=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,ol=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,il=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,nl=o.button`
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
`,sl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,cl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,ll=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,dl=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,pl=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ul=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,ml=o.article`
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
`,hl=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,gl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,fl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,yl=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,bl=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xl=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,ir="/LaFranciaGO/favicon.png",wl="Av. San Martín 123",Ra=420,$l=260,Ma=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:qr,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:wo},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Qe},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:Zt},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:Vr}],_a=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Fe},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:zo},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:Yr},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:jt}],vl=o.aside`
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
`,kl=o(Ho)`
  height: 100%;
`,Ia=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Fe,items:[{icon:jt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Qe,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Qe,items:[{icon:Ct,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Fe,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:Ct,items:[{icon:Zt,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:jt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],Sl=[{to:"/",label:"Inicio",icon:qr},{to:"/categorias",label:"Categorías",icon:wo},{to:"/pedidos",label:"Mis pedidos",icon:Qe},{to:"/favoritos",label:"Favoritos",icon:Zt},{to:"/mi-cuenta",label:"Cuenta",icon:Vr}];function jl({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{sinLeer:n}=Xs(),{isDarkMode:c,toggleMode:s}=yn(),{photo:d}=Dn(),m=Ua(),g=typeof r=="string"&&typeof a=="function",b=p.useRef(null),h=p.useRef(null),A=p.useRef(null),f=p.useRef(null),j=p.useRef(null),[I,y]=p.useState(!1),[x,v]=p.useState({id:"home",label:wl}),[R,M]=p.useState(!1),[E,O]=p.useState(!1),[Z,Y]=p.useState("opening"),[V,ae]=p.useState(!1),[U,N]=p.useState(!1),[oe,Q]=p.useState("opening"),[C,J]=p.useState(null),T=p.useCallback(()=>{M(!1),ae(!1),J(null)},[]),ee=p.useCallback(()=>{T(),M(!0)},[T]),Ae=p.useCallback(()=>{if(R||E){T();return}ee()},[T,E,R,ee]),$e=p.useCallback(()=>{T(),ae(!0)},[T]),Ee=p.useCallback(()=>{if(V||U){T();return}$e()},[T,U,V,$e]);p.useEffect(()=>{const u=document.body.style.overflow;return(R||E||V||U)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=u}},[E,R,U,V]),p.useLayoutEffect(()=>{const u=b.current;if(!u)return;const k=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${u.offsetHeight}px`)};k();const l=typeof ResizeObserver<"u"?new ResizeObserver(k):null;return l==null||l.observe(u),window.addEventListener("resize",k),()=>{l==null||l.disconnect(),window.removeEventListener("resize",k),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),p.useEffect(()=>{h.current!==null&&(window.cancelAnimationFrame(h.current),h.current=null),A.current!==null&&(window.clearTimeout(A.current),A.current=null);const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(R){if(O(!0),u){Y("open");return}Y("opening"),h.current=window.requestAnimationFrame(()=>{Y("open"),h.current=null});return}if(E){if(u){O(!1),Y("opening");return}Y("closing"),A.current=window.setTimeout(()=>{O(!1),Y("opening"),A.current=null},Ra)}},[E,R]),p.useEffect(()=>()=>{h.current!==null&&window.cancelAnimationFrame(h.current),A.current!==null&&window.clearTimeout(A.current),f.current!==null&&window.cancelAnimationFrame(f.current),j.current!==null&&window.clearTimeout(j.current)},[]),p.useEffect(()=>{f.current!==null&&(window.cancelAnimationFrame(f.current),f.current=null),j.current!==null&&(window.clearTimeout(j.current),j.current=null);const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(V){if(N(!0),u){Q("open");return}Q("opening"),f.current=window.requestAnimationFrame(()=>{Q("open"),f.current=null});return}if(U){if(u){N(!1),Q("opening");return}Q("closing"),j.current=window.setTimeout(()=>{N(!1),Q("opening"),j.current=null},$l)}},[U,V]);const S=p.useCallback((u,k)=>{u.preventDefault(),T(),window.setTimeout(()=>{m(k)},Ra)},[T,m]),$=p.useMemo(()=>Ia.find(u=>u.id===C)??null,[C]);return t.jsxs(gc,{children:[t.jsx(fc,{ref:b,children:t.jsx(Mc,{children:t.jsx(yc,{children:t.jsxs(Bc,{children:[t.jsxs(Hc,{children:[t.jsx(bc,{type:"button",onClick:Ae,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":R||E,children:t.jsx(An,{size:20,"aria-hidden":"true"})}),t.jsxs(qc,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Vc,{children:t.jsx(or,{src:ir,alt:"","aria-hidden":"true"})}),t.jsxs(Gc,{children:["LaFrancia",t.jsx(Yc,{children:"GO"})]})]})]}),g?t.jsx(Uc,{children:t.jsx(Do,{value:r,onChange:a})}):null,t.jsxs(Dc,{"aria-label":"Acciones rápidas",children:[t.jsxs(_c,{type:"button","aria-label":`Entregar en ${x.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":I,onClick:()=>y(!0),children:[t.jsxs(Tc,{children:[t.jsx(Fc,{children:"Entregar en"}),t.jsx(Ic,{children:x.label})]}),t.jsx(Sn,{size:15,"aria-hidden":"true"})]}),t.jsxs(Lc,{type:"button",onClick:Ee,"aria-label":`Abrir notificaciones, ${n} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":V||U,children:[t.jsx(jt,{size:18,"aria-hidden":"true"}),n>0?t.jsx(Nc,{children:n}):null]}),t.jsx(Sa,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(Fn,{size:18,"aria-hidden":"true"})}),t.jsx(Sa,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:d?t.jsx(Oc,{src:d,alt:""}):t.jsx(Vr,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(vl,{"aria-label":"Navegación principal",children:t.jsxs(kl,{children:[t.jsxs(ja,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx($a,{children:t.jsx(or,{src:ir,alt:"","aria-hidden":"true"})}),t.jsxs(Ca,{children:[t.jsxs(va,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(ka,{children:"GO"})]}),t.jsx(wc,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(ht,{children:[t.jsx(gt,{children:"NAVEGACIÓN"}),t.jsx(mt,{"aria-label":"Navegación principal",children:Ma.map(u=>{const k=u.icon;return t.jsxs(ct,{to:u.to,end:u.end,onClick:l=>S(l,u.to),children:[t.jsx(Me,{"aria-hidden":"true",children:t.jsx(k,{size:18,"aria-hidden":"true"})}),t.jsxs(pt,{children:[t.jsx(ut,{children:u.title}),t.jsx(dt,{children:u.subtitle})]}),t.jsx(lt,{"aria-hidden":"true",children:t.jsx(nt,{size:16,"aria-hidden":"true"})})]},u.to)})})]}),t.jsxs(ht,{children:[t.jsx(gt,{children:"ACCIONES"}),t.jsx(mt,{"aria-label":"Acciones rápidas",children:_a.map(u=>{const k=u.icon;return t.jsxs(ct,{to:u.to,onClick:l=>S(l,u.to),children:[t.jsx(Me,{"aria-hidden":"true",children:t.jsx(k,{size:18,"aria-hidden":"true"})}),t.jsxs(pt,{children:[t.jsx(ut,{children:u.title}),t.jsx(dt,{children:u.subtitle})]}),t.jsx(lt,{"aria-hidden":"true",children:t.jsx(nt,{size:16,"aria-hidden":"true"})})]},u.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(xa,{}),t.jsx(Aa,{children:t.jsx(wa,{isDarkMode:c,onToggle:s})})]})}),t.jsx($c,{children:e}),t.jsx(zc,{"aria-label":"Navegación móvil",children:t.jsx(Pc,{children:Sl.map(u=>{const k=u.icon;return t.jsx("li",{children:t.jsxs(Rc,{to:u.to,"data-primary":u.to==="/pedidos",children:[t.jsx(We,{children:t.jsx(k,{size:u.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:u.label})]})},u.to)})})}),E&&t.jsx(za,{"data-drawer":"true","data-state":Z,role:"presentation",onClick:T,children:t.jsxs(Ea,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":Z,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:u=>u.stopPropagation(),children:[t.jsxs(Xc,{children:[t.jsxs(ja,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx($a,{children:t.jsx(or,{src:ir,alt:"","aria-hidden":"true"})}),t.jsx(Ca,{children:t.jsxs(va,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(ka,{children:"GO"})]})})]}),t.jsx(Zc,{type:"button",onClick:T,"aria-label":"Cerrar menú",children:t.jsx(Eo,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Ho,{children:[t.jsxs(ht,{children:[t.jsx(gt,{children:"Navegación"}),t.jsx(mt,{"aria-label":"Navegación principal",children:Ma.map(u=>{const k=u.icon;return t.jsxs(ct,{to:u.to,end:u.end,onClick:l=>S(l,u.to),children:[t.jsx(Me,{"aria-hidden":"true",children:t.jsx(k,{size:18,"aria-hidden":"true"})}),t.jsxs(pt,{children:[t.jsx(ut,{children:u.title}),t.jsx(dt,{children:u.subtitle})]}),t.jsx(lt,{"aria-hidden":"true",children:t.jsx(nt,{size:16,"aria-hidden":"true"})})]},u.to)})})]}),t.jsxs(ht,{children:[t.jsx(gt,{children:"Acciones"}),t.jsx(mt,{"aria-label":"Acciones rápidas",children:_a.map(u=>{const k=u.icon;return t.jsxs(ct,{to:u.to,onClick:l=>S(l,u.to),children:[t.jsx(Me,{"aria-hidden":"true",children:t.jsx(k,{size:18,"aria-hidden":"true"})}),t.jsxs(pt,{children:[t.jsx(ut,{children:u.title}),t.jsx(dt,{children:u.subtitle})]}),t.jsx(lt,{"aria-hidden":"true",children:t.jsx(nt,{size:16,"aria-hidden":"true"})})]},u.to)})})]}),t.jsx(xa,{onNavegar:T}),t.jsx(Aa,{children:t.jsx(wa,{isDarkMode:c,onToggle:s})})]})]})}),U&&t.jsx(za,{"data-notifications":"true","data-state":oe,role:"presentation",onClick:T,children:t.jsxs(Ea,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":oe,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:u=>u.stopPropagation(),children:[t.jsxs(tl,{children:[$?t.jsx(Pa,{type:"button",onClick:()=>J(null),"aria-label":"Volver a las notificaciones",children:t.jsx(fo,{size:14,"aria-hidden":"true"})}):t.jsx(al,{"aria-hidden":"true"}),t.jsxs(il,{children:[t.jsx(ol,{id:"marketplace-notifications-title",children:($==null?void 0:$.title)??"Notificaciones"}),t.jsx(rl,{children:($==null?void 0:$.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(Pa,{type:"button",onClick:()=>{T(),m("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(_n,{size:14,"aria-hidden":"true"})})]}),t.jsx(el,{}),t.jsx(Qc,{children:$?t.jsx(Jc,{"aria-label":$.title,children:$.items.map(u=>{const k=u.icon;return t.jsxs(ml,{children:[t.jsx(fl,{"aria-hidden":"true",children:t.jsx(k,{size:14,"aria-hidden":"true"})}),t.jsxs(hl,{children:[t.jsxs(xl,{children:[t.jsx(bl,{children:u.title}),t.jsx(gl,{children:u.date})]}),t.jsx(yl,{children:u.subtitle})]})]},`${$.id}-${u.title}`)})}):t.jsx(ul,{"aria-label":"Secciones de notificaciones",children:Ia.map(u=>{const k=u.icon;return t.jsxs(nl,{type:"button",onClick:()=>J(u.id),children:[t.jsx(cl,{"aria-hidden":"true",children:t.jsx(k,{size:14,"aria-hidden":"true"})}),t.jsxs(dl,{children:[t.jsx(pl,{children:u.title}),t.jsx(ll,{children:u.subtitle})]}),t.jsx(sl,{"aria-hidden":"true",children:t.jsx(Ge,{size:16,"aria-hidden":"true"})})]},u.id)})})})]})}),t.jsx(Ns,{open:I,currentId:x.id,onClose:()=>y(!1),onSelect:(u,k)=>v({id:u,label:k})})]})}const Kr=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,Xr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,qo=ie`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${qo};
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
`;const Go=o.div`
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
`;const Cl=o.span`
  ${qo};
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
`,hu=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Al="/LaFranciaGO/",El=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),Zr=e=>{const r=e&&El.has(e)?e:"comercio";return`${Al}media/${r}.svg`},zl=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),Pl=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return r[a%r.length]},Rl=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,Ml=o.span`
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
`,_l=o.span`
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
`;function Il({id:e,name:r,to:a,count:i,priority:n}){return t.jsx(Rl,{to:a,children:t.jsxs(Kr,{$ratio:"1 / 1",children:[t.jsx(Xr,{src:Zr(e),alt:r,loading:n?"eager":"lazy"}),typeof i=="number"?t.jsxs(_l,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx(Ml,{children:r})]})})}const Fl=o.div`
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
`,Tl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Ce};
`,Ll=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Ol=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,Nl=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function Dl({icon:e,title:r,text:a,ctaLabel:i,ctaTo:n,dashed:c}){return t.jsxs(Fl,{"data-dashed":c?"true":"false",children:[t.jsx(Tl,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(Ll,{children:r}),a?t.jsx(Ol,{children:a}):null,i&&n?t.jsx(Nl,{children:t.jsx(Ec,{to:n,children:i})}):null]})}const Fa=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),Bl=e=>`${e.toFixed(1)} km`,Yo=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Hl=o(be)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?ie`
          pointer-events: none;
        `:ie`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:r})=>r.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,ql=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Gl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yl=o.h3`
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
`,Vl=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Ul=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Wl=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,Kl=o.button`
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
`,Xl=o.span`
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
`;function Zl({name:e,store:r,price:a,oldPrice:i,categoryId:n,imageLabel:c,tag:s,to:d,onAdd:m,priority:g}){return t.jsxs(Hl,{to:d??"#",$static:!d,children:[t.jsxs(Kr,{$ratio:"1 / 1",children:[t.jsx(Xr,{src:Zr(n),alt:c??e,loading:g?"eager":"lazy"}),s?t.jsx(Go,{children:t.jsx(Xl,{children:s})}):null]}),t.jsxs(ql,{children:[r?t.jsx(Gl,{children:r}):null,t.jsx(Yl,{children:e}),t.jsxs(Vl,{children:[t.jsxs("div",{children:[t.jsx(Ul,{children:Fa(a)}),i?t.jsx(Wl,{children:Fa(i)}):null]}),m?t.jsx(Kl,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:b=>{b.preventDefault(),b.stopPropagation(),m()},children:t.jsx(vo,{size:18,"aria-hidden":"true"})}):null]})]})]})}const Jl=o(be)`
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
`,Ql=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,ed=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,td=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,rd=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,ad=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function od({to:e,title:r,text:a,icon:i,tone:n="brand"}){return t.jsxs(Jl,{to:e,"data-tone":n,children:[t.jsx(Ql,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(ed,{children:[t.jsx(td,{children:r}),a?t.jsx(rd,{children:a}):null]}),t.jsx(ad,{children:t.jsx(Ge,{size:18,"aria-hidden":"true"})})]})}const id=o(be)`
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
`,nd=o.span`
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
`,sd=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function Ta({to:e,label:r,icon:a}){return t.jsxs(id,{to:e,children:[t.jsx(nd,{children:t.jsx(a,{size:18})}),t.jsx(sd,{children:r}),t.jsx(Ge,{size:16,"aria-hidden":"true"})]})}const cd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,ld=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,dd=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,pd=o.h2`
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
`,ud=o.span`
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
`,md=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,hd=o(be)`
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
`;function nr({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:n,seeAllLabel:c="Ver todos"}){return t.jsxs(cd,{children:[t.jsxs(ld,{children:[t.jsxs(dd,{children:[t.jsx(pd,{children:e}),r?t.jsxs(ud,{children:[a,r]}):null]}),n?t.jsxs(hd,{to:n,children:[c,t.jsx(Ge,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(md,{children:i}):null]})}const gd=o(be)`
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
`,fd=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,yd=o.button`
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
`,bd=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,xd=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wd=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$d=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,La=o.span`
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
`,vd=o.span`
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
`,kd=o.span`
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
`,Sd=o.span`
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
`;function jd({id:e,name:r,category:a,categoryId:i,to:n,distanceKm:c,rating:s,openNow:d,premium:m,etaMin:g,etaMax:b,priority:h,favorito:A,onToggleFavorito:f}){const j=I=>{I.preventDefault(),I.stopPropagation(),f==null||f(e)};return t.jsxs(gd,{to:n,children:[t.jsxs(Kr,{$ratio:"16 / 9",children:[t.jsx(Xr,{src:Zr(i),alt:a,loading:h?"eager":"lazy"}),t.jsxs(Go,{children:[d!==void 0?t.jsx(vd,{"data-open":d,children:d?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),m?t.jsx(Sd,{children:"Destacado"}):null,s!==void 0?t.jsxs(kd,{children:[t.jsx(Tn,{size:13,"aria-hidden":"true",fill:"currentColor"}),s.toFixed(1)]}):null]}),t.jsx(fd,{children:t.jsx(Cl,{$size:"2.75rem",$tone:Pl(e),children:zl(r)})}),f?t.jsx(yd,{type:"button",onClick:j,"data-guardado":A,"aria-pressed":A,"aria-label":A?`Quitar ${r} de favoritos`:`Guardar ${r} en favoritos`,children:t.jsx(Zt,{size:17,"aria-hidden":"true",fill:A?"currentColor":"none"})}):null]}),t.jsxs(bd,{children:[t.jsx(xd,{children:r}),t.jsxs(wd,{children:[a,c!==void 0?` · ${Bl(c)}`:""]}),t.jsxs($d,{children:[t.jsxs(La,{children:[t.jsx($n,{size:14,"aria-hidden":"true"}),"Delivery"]}),g!==void 0&&b!==void 0?t.jsxs(La,{children:[t.jsx(jn,{size:14,"aria-hidden":"true"}),g,"-",b," min"]}):null]})]})]})}const Cd=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:So,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:$o,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:bo,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Br,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Hr,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Fe,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Co,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Gr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:jo,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:yo,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:xo,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:ko,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Ao,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:Yr,tone:"red"}],Ar=new Set;let Er=[],Ke="inicial";const Oa=()=>Ar.forEach(e=>e());async function Ad(){if(Ke==="inicial"){if(Ke="cargando",!we()){Ke="listo",Oa();return}try{const{ofertas:e}=await Kn.portada();Er=e}catch{Er=[]}Ke="listo",Oa()}}function Ed(){const[,e]=p.useState(0);return p.useEffect(()=>{const r=()=>e(a=>a+1);return Ar.add(r),Ad(),()=>{Ar.delete(r)}},[]),{ofertas:Er,cargando:Ke!=="listo"}}const gu=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],zd=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:So},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Fe},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:bo},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Hr},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Br},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:$o},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Co},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:kn},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Gr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:jo},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:yo},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:xo},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:ko},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Ao}],Pd=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],Rd=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],et=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Fe,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Hr,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:Gr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:Br,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],fu=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:0,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:1,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,saleUnit:"peso",quantity:1,subtotal:1275,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:0,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,saleUnit:"peso",quantity:3,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,saleUnit:"peso",quantity:1,subtotal:1345,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],yu=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],bu=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],xu=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],wu=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],$u=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],vu=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],ku=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],Su=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:Ln},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:zn},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:Rn},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:In}],Md=e=>{var r;return((r=zd.find(a=>a.id===e))==null?void 0:r.icon)??et[0].icon};function _d(e){return{id:e.id,name:e.nombre,premium:e.premium,category:e.rubro_nombre,categoryId:e.rubro_id,address:e.direccion,phone:e.telefono??"",hours:e.horario??"A confirmar",distanceKm:void 0,rating:void 0,openNow:!0,delivery:!0,pickup:!0,minOrder:e.minimo,summary:e.descripcion??`${e.rubro_nombre} en La Francia.`,tags:e.zona?[e.zona]:[],icon:Md(e.rubro_id),featuredProducts:(e.destacados??[]).map(r=>({id:r.id,name:r.nombre,price:r.precio}))}}const zr=new Set;let $t=[],Xe="inicial";const Na=()=>zr.forEach(e=>e());async function Id(){if(Xe==="inicial"){if(Xe="cargando",!we()){$t=et,Xe="listo",Na();return}try{const{comercios:e}=await Wn.listar();$t=e.map(r=>_d(r))}catch{$t=et}Xe="listo",Na()}}function Fd(){const[,e]=p.useState(0);return p.useEffect(()=>{const r=()=>e(a=>a+1);return zr.add(r),Id(),()=>{zr.delete(r)}},[]),{stores:$t,cargando:Xe!=="listo"}}const ft=["blue","green","orange","violet"],Da={almacen:"blue",panaderia:"orange",carniceria:"violet",verduleria:"green",farmacia:"blue",kiosco:"orange"};function Td(e){return(e.split(/\s+/).filter(a=>a.length>2).slice(0,2).map(a=>a[0]).join("")||e.slice(0,2)).toUpperCase()}const Ld=e=>{const r=e===void 0?15:Math.max(10,Math.round(e*6)+10);return{etaMin:r,etaMax:r+10}};function Od(){const{stores:e,cargando:r}=Fd(),{ofertas:a,cargando:i}=Ed(),n=p.useMemo(()=>e.map((s,d)=>{const{etaMin:m,etaMax:g}=Ld(s.distanceKm);return{id:s.id,name:s.name,premium:s.premium,category:s.category,categoryId:s.categoryId,logoLabel:Td(s.name),etaMin:m,etaMax:g,distanceKm:s.distanceKm,rating:s.rating,delivery:s.delivery,pickup:s.pickup,openNow:s.openNow,tone:Da[s.categoryId]??ft[d%ft.length],address:s.address,priceLevel:s.minOrder>=8e3?"$$$":s.minOrder>=4e3?"$$":"$",minOrder:s.minOrder,badge:s.premium?"Destacado":"",href:`/comercios/${s.id}`}}),[e]),c=p.useMemo(()=>a.map((s,d)=>{var b;const m=e.find(h=>h.id===s.comercioId),g=s.porcentaje??(s.precioLista>0?Math.round((s.precioLista-s.precioFinal)/s.precioLista*100):0);return{id:s.id,product:s.titulo,store:s.comercio,categoryId:s.rubroId,distanceKm:(m==null?void 0:m.distanceKm)??0,price:s.precioFinal,oldPrice:s.precioLista,discount:g,delivery:!0,pickup:!0,openNow:!0,tone:Da[s.rubroId]??ft[d%ft.length],imageLabel:((b=s.productos[0])==null?void 0:b.nombre)??s.titulo,href:`/comercios/${s.comercioId}`}}),[a,e]);return{featuredStores:n,nearbyOffers:c,cargando:r||i}}const Nd=e=>Yo(e),sr=(e,...r)=>{const a=Nd(e);return a?Yo(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},Dd=e=>Pd.find(r=>r.id===e),ju=e=>et.find(r=>r.id===e),Cu=e=>et.find(r=>r.name.toLowerCase()===e.toLowerCase()),Au=e=>{const r=Rd.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((n,c)=>n.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=Dd(e);if(a)return{kind:"offer",offer:a}},Bd=5,Hd=.7,Ba=e=>e===void 0?Number.MAX_SAFE_INTEGER:Math.floor(e/Hd),tt=e=>e.distanceKm??Number.MAX_SAFE_INTEGER,Ha=e=>e.premium&&tt(e)<=Bd?0:1,rt=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,Vo=(e,r)=>{const a=rt(e,r);if(a!==0)return a;const i=Ba(e.distanceKm)-Ba(r.distanceKm);if(i!==0)return i;const n=Ha(e)-Ha(r);if(n!==0)return n;const c=tt(e)-tt(r);return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},qd=(e,r)=>rt(e,r)||tt(e)-tt(r),Gd=(e,r)=>rt(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),Yd=(e,r)=>rt(e,r)||(r.rating??0)-(e.rating??0),Vd=(e,r)=>rt(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),Ud={relevancia:Vo,cercania:qd,precio:Gd,puntuacion:Yd,entrega:Vd};function qa(e,r="relevancia"){return[...e].sort(Ud[r]??Vo)}const Eu=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],Wd=o.div`
  position: relative;
  min-width: 0;
`,Kd=o.div`
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
`,Ga=o.button`
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
`,yt=4,Xd=6,Zd=420,Jd=.91,Qd=.2,ep=.45,tp=260,rp=e=>1-(1-e)**3;function cr({children:e,className:r,as:a,...i}){const n=p.useRef(null),c=p.useRef(null),s=p.useRef(null),[d,m]=p.useState(!1),[g,b]=p.useState(!1),h=p.useCallback(()=>{const y=n.current;if(!y)return;const{scrollLeft:x,scrollWidth:v,clientWidth:R}=y;m(x>yt),b(x+R<v-yt)},[]);p.useLayoutEffect(()=>{h()},[h,e]),p.useEffect(()=>{var v;const y=n.current;if(!y)return;const x=((v=window.matchMedia)==null?void 0:v.call(window,"(pointer: fine)").matches)??!1;y.style.cursor=x&&(d||g)?"grab":""},[d,g]),p.useEffect(()=>{var R;const y=n.current;if(!y)return;const x=M=>{const E=y.scrollWidth-y.clientWidth;if(E<=0)return;const O=Math.abs(M.deltaX)>Math.abs(M.deltaY)?M.deltaX:M.deltaY;if(O===0)return;const Z=O>0?1:-1,Y=y.scrollLeft<=yt,V=y.scrollLeft>=E-yt;if(Z<0&&Y||Z>0&&V)return;M.preventDefault();const ae=s.current??y.scrollLeft,U=Math.max(0,Math.min(ae+Z*tp,E));j(y,U)};y.addEventListener("wheel",x,{passive:!1}),y.addEventListener("scroll",h,{passive:!0}),y.addEventListener("scrollend",h,{passive:!0});const v=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return v==null||v.observe(y),Array.from(y.children).forEach(M=>v==null?void 0:v.observe(M)),(R=document.fonts)==null||R.ready.then(h).catch(()=>{}),()=>{y.removeEventListener("wheel",x),y.removeEventListener("scroll",h),y.removeEventListener("scrollend",h),v==null||v.disconnect(),c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),s.current=null}},[h]);const A=(y,x)=>{var E;if(c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),s.current=null,Math.abs(x)<ep||(E=window.matchMedia)!=null&&E.call(window,"(prefers-reduced-motion: reduce)").matches){h();return}let v=-x;const R=y.scrollWidth-y.clientWidth,M=()=>{const O=y.scrollLeft+v;if(O<=0||O>=R){y.scrollLeft=O<=0?0:R,c.current=null,h();return}if(y.scrollLeft=O,v*=Jd,h(),Math.abs(v)<Qd){c.current=null;return}c.current=requestAnimationFrame(M)};c.current=requestAnimationFrame(M)},f=y=>{if(y.pointerType!=="mouse"||y.button!==0)return;const x=n.current;if(!x)return;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),s.current=null;const v=y.clientX,R=x.scrollLeft;let M=!1,E=0,O=y.clientX,Z=performance.now();const Y=U=>U.preventDefault();x.addEventListener("dragstart",Y);const V=U=>{const N=U.clientX-v;if(!M){if(Math.abs(N)<Xd)return;M=!0,x.style.scrollBehavior="auto",x.style.cursor="grabbing",x.style.userSelect="none"}const oe=performance.now(),Q=oe-Z;if(Q>0){const C=(U.clientX-O)/Q*16;E=E*.7+C*.3,O=U.clientX,Z=oe}x.scrollLeft=R-N},ae=()=>{if(document.removeEventListener("pointermove",V),document.removeEventListener("pointerup",ae),document.removeEventListener("pointercancel",ae),x.removeEventListener("dragstart",Y),x.style.scrollBehavior="",x.style.cursor="",x.style.userSelect="",M){A(x,E);const U=N=>{N.stopPropagation(),N.preventDefault()};x.addEventListener("click",U,{capture:!0,once:!0}),window.setTimeout(()=>x.removeEventListener("click",U,{capture:!0}),0)}h()};document.addEventListener("pointermove",V),document.addEventListener("pointerup",ae),document.addEventListener("pointercancel",ae)},j=(y,x)=>{var O;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null);const v=y.scrollLeft,R=x-v;if(Math.abs(R)<1){s.current=null;return}if(s.current=x,(O=window.matchMedia)!=null&&O.call(window,"(prefers-reduced-motion: reduce)").matches){y.scrollLeft=x,s.current=null,h();return}const M=performance.now(),E=Z=>{const Y=Z-M,V=Math.min(Y/Zd,1);if(y.scrollLeft=v+R*rp(V),h(),V<1){c.current=requestAnimationFrame(E);return}c.current=null,s.current=null};c.current=requestAnimationFrame(E)},I=y=>{const x=n.current;if(!x)return;const v=x.scrollWidth-x.clientWidth,R=x.scrollLeft+y*x.clientWidth*.7;j(x,Math.max(0,Math.min(R,v)))};return t.jsxs(Wd,{className:r,children:[d?t.jsx(Ga,{type:"button","data-side":"left",onClick:()=>I(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(fo,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:n,onPointerDown:f,...i,children:e}):t.jsx(Kd,{ref:n,onPointerDown:f,...i,children:e}),g?t.jsx(Ga,{type:"button","data-side":"right",onClick:()=>I(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Ge,{size:16,"aria-hidden":"true"})}):null]})}const Uo="lafranciago:orden",ap=["relevancia","cercania","precio","puntuacion","entrega"],op=()=>{try{const e=window.localStorage.getItem(Uo);return ap.includes(e)?e:"relevancia"}catch{return"relevancia"}};function ip(){const[e,r]=p.useState("relevancia");p.useEffect(()=>{r(op())},[]);const a=p.useCallback(i=>{r(i);try{window.localStorage.setItem(Uo,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const np=o(be)`
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
`,sp=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,cp=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,lp=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,dp=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,pp=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Wo=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,up=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,mp=o.div`
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
`;const zu=o.div`
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
`;const Pu=o.div`
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
`;const Ru=o(Pe)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(vc)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const Mu=o(Wo)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(up)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(mp)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Sc)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const Jr=o.div`
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
`,hp=o(Jr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,gp=o(Jr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,fp=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,yp=o.section`
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
`;const _u=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,bp=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,xp=8;function wp(){const[e,r]=p.useState(""),{sortMode:a}=ip(),{featuredStores:i,nearbyOffers:n,cargando:c}=Od(),{favoritos:s}=Hs(),d=e.trim(),m=d.length>0,g=p.useMemo(()=>{const f=Cd.filter(j=>sr(d,j.name));return m?f:f.slice(0,xp)},[m,d]),b=p.useMemo(()=>qa(i.filter(f=>sr(d,f.name,f.category,f.address)),a),[i,d,a]),h=p.useMemo(()=>qa(n.filter(f=>sr(d,f.product,f.store)),a),[n,d,a]),A=c||g.length>0||b.length>0||h.length>0;return t.jsxs(jl,{query:e,onQueryChange:r,children:[t.jsx(yp,{children:t.jsx(ze,{children:t.jsx(Do,{value:e,onChange:r})})}),t.jsx(Pe,{children:t.jsx(ze,{children:t.jsxs(np,{to:"/mandado",children:[t.jsx(sp,{children:t.jsx(Qe,{size:22,"aria-hidden":"true"})}),t.jsxs(cp,{children:[t.jsx(lp,{children:"¿Necesitás algún mandado?"}),t.jsx(dp,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(pp,{children:t.jsx(Ge,{size:18,"aria-hidden":"true"})})]})})}),m&&!A?t.jsx(Pe,{children:t.jsx(ze,{children:t.jsx(Dl,{icon:Mn,title:"Sin resultados",text:`No encontramos nada para "${d}". Probá con otra palabra.`,dashed:!0})})}):null,g.length>0?t.jsx(Pe,{children:t.jsxs(ze,{children:[t.jsx(nr,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(cr,{as:gp,"aria-label":"Categorías",children:g.map((f,j)=>t.jsx(Il,{id:f.id,name:f.name,to:`/comercios?rubro=${f.id}`,priority:j<5},f.id))})]})}):null,h.length>0?t.jsx(Pe,{children:t.jsxs(ze,{children:[t.jsx(nr,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(cr,{as:Jr,"aria-label":"Productos destacados",children:h.map((f,j)=>t.jsx(Zl,{name:f.product,store:f.store,price:f.price,oldPrice:f.oldPrice,categoryId:f.categoryId,imageLabel:f.imageLabel,tag:f.discount>0?`-${f.discount}%`:void 0,to:f.href,priority:j<3},f.id))})]})}):null,b.length>0?t.jsx(Pe,{children:t.jsxs(ze,{children:[t.jsx(nr,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(cr,{as:hp,"aria-label":"Negocios destacados",children:b.map((f,j)=>t.jsx(jd,{favorito:s.has(f.id),onToggleFavorito:Bs,id:f.id,name:f.name,category:f.category,categoryId:f.categoryId,to:f.href,distanceKm:f.distanceKm,rating:f.rating,openNow:f.openNow,premium:f.premium,etaMin:f.etaMin,etaMax:f.etaMax,priority:j<2},f.id))})]})}):null,m?null:t.jsx(Pe,{children:t.jsx(ze,{children:t.jsx(Wo,{children:t.jsxs(fp,{children:[t.jsx(od,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Fe,tone:"brand"}),t.jsxs(bp,{children:[t.jsx(Ta,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:zo}),t.jsx(Ta,{to:"/registro/fletero",label:"Sumate como Fletero",icon:Yr})]})]})})})})]})}function de({children:e}){const{estado:r}=Oo(),a=Jo();if(!we())return t.jsx(t.Fragment,{children:e});if(r==="cargando")return null;if(r==="invitado"){const i=`${a.pathname}${a.search}`;return t.jsx(lr,{to:`/ingresar?destino=${encodeURIComponent(i)}`,replace:!0})}return t.jsx(t.Fragment,{children:e})}const $p=p.lazy(()=>X(()=>import("./AuthScreen-83UHcofl.js"),__vite__mapDeps([5,1,6,7,8,9,10,11])).then(e=>({default:e.AuthScreen}))),Ya=p.lazy(()=>X(()=>import("./RecuperarScreen-BqvdmyZF.js"),__vite__mapDeps([12,1,6,7,9])).then(e=>({default:e.RecuperarScreen}))),vp=p.lazy(()=>X(()=>import("./CategoriesScreen-B7OKw2pS.js"),__vite__mapDeps([13,1])).then(e=>({default:e.CategoriesScreen}))),kp=p.lazy(()=>X(()=>import("./StoresDirectoryScreen-BsVucFza.js"),__vite__mapDeps([14,1])).then(e=>({default:e.StoresDirectoryScreen}))),Sp=p.lazy(()=>X(()=>import("./StoreProfileScreen-CA6tUdQZ.js"),__vite__mapDeps([15,1,16,17,18])).then(e=>({default:e.StoreProfileScreen}))),jp=p.lazy(()=>X(()=>import("./ProductDetailScreen-BxuZgMJl.js"),__vite__mapDeps([19,1,20])).then(e=>({default:e.ProductDetailScreen}))),Cp=p.lazy(()=>X(()=>import("./MyOrdersScreen-DPBrvPIb.js"),__vite__mapDeps([21,1,18])).then(e=>({default:e.MyOrdersScreen}))),Ap=p.lazy(()=>X(()=>import("./CartScreen-DucAkIEU.js"),__vite__mapDeps([22,1,16,17,23,24,25,10])).then(e=>({default:e.CartScreen}))),Ep=p.lazy(()=>X(()=>import("./ErrandScreen-C2XCaq2Y.js"),__vite__mapDeps([26,1,27,10])).then(e=>({default:e.ErrandScreen}))),zp=p.lazy(()=>X(()=>import("./ErrandChatScreen-BTLEGXJM.js"),__vite__mapDeps([28,1,29,27,30,31])).then(e=>({default:e.ErrandChatScreen}))),Pp=p.lazy(()=>X(()=>import("./FavoritesScreen-MyvzRPaf.js"),__vite__mapDeps([32,1])).then(e=>({default:e.FavoritesScreen}))),Rp=p.lazy(()=>X(()=>import("./NotificationsScreen-B0TrDS80.js"),__vite__mapDeps([33,1,24,34,35])).then(e=>({default:e.NotificationsScreen}))),Mp=p.lazy(()=>X(()=>import("./CustomerAccountScreen-Dom-KdeZ.js"),__vite__mapDeps([36,1,20,29,30,37,10,11])).then(e=>({default:e.CustomerAccountScreen}))),_p=p.lazy(()=>X(()=>import("./CommerceRegistrationScreen-_zhf3bu3.js"),__vite__mapDeps([38,1,29,39,40,41,6,37,10])).then(e=>({default:e.CommerceRegistrationScreen}))),Va=p.lazy(()=>X(()=>import("./DeliveryRegistrationScreen-CZhisT5S.js"),__vite__mapDeps([42,40,1,29,6,10,25,37,9])).then(e=>({default:e.DeliveryRegistrationScreen}))),Ip=p.lazy(()=>X(()=>import("./MiComercioScreen-BbG-IkHc.js"),__vite__mapDeps([43,1,16,44,7,8,31,23,2,3,39,29,41,6,45,35,34])).then(e=>({default:e.MiComercioScreen}))),Fp=p.lazy(()=>X(()=>import("./CommercePanelScreen-_sGOP8V_.js"),__vite__mapDeps([46,47,20,1,35,45])).then(e=>({default:e.CommercePanelScreen}))),Tp=p.lazy(()=>X(()=>import("./ProductFormScreen-y002uOZR.js"),__vite__mapDeps([48,1,16,29,41])).then(e=>({default:e.ProductFormScreen}))),Lp=p.lazy(()=>X(()=>import("./PanelRepartidorScreen-CzKS5Zvw.js"),__vite__mapDeps([49,1,4,44,7,8,31,16,50])).then(e=>({default:e.PanelRepartidorScreen}))),Op=p.lazy(()=>X(()=>import("./DeliveryPanelScreen-B_TwmSic.js"),__vite__mapDeps([51,47,20,1])).then(e=>({default:e.DeliveryPanelScreen}))),Np=p.lazy(()=>X(()=>import("./AdminPostulacionesScreen-DKjhni7T.js"),__vite__mapDeps([52,1,7,50,34])).then(e=>({default:e.AdminPostulacionesScreen}))),Dp=p.lazy(()=>X(()=>import("./AdminPanelScreen-BxcbwfXO.js"),__vite__mapDeps([53,47,20,1])).then(e=>({default:e.AdminPanelScreen})));function Bp(){return t.jsx(Qo,{children:t.jsx(fn,{children:t.jsx(p.Suspense,{fallback:null,children:t.jsxs(ei,{children:[t.jsx(W,{path:"/",element:t.jsx(wp,{})}),t.jsx(W,{path:"/ingresar",element:t.jsx($p,{})}),t.jsx(W,{path:"/recuperar",element:t.jsx(Ya,{})}),t.jsx(W,{path:"/recuperar/:token",element:t.jsx(Ya,{})}),t.jsx(W,{path:"/categorias",element:t.jsx(vp,{})}),t.jsx(W,{path:"/comercios",element:t.jsx(kp,{})}),t.jsx(W,{path:"/comercios/:storeId",element:t.jsx(Sp,{})}),t.jsx(W,{path:"/productos/:productId",element:t.jsx(jp,{})}),t.jsx(W,{path:"/pedidos",element:t.jsx(de,{children:t.jsx(Cp,{})})}),t.jsx(W,{path:"/carrito",element:t.jsx(de,{children:t.jsx(Ap,{})})}),t.jsx(W,{path:"/mandado",element:t.jsx(de,{children:t.jsx(Ep,{})})}),t.jsx(W,{path:"/mandado/chat",element:t.jsx(de,{children:t.jsx(zp,{})})}),t.jsx(W,{path:"/favoritos",element:t.jsx(de,{children:t.jsx(Pp,{})})}),t.jsx(W,{path:"/notificaciones",element:t.jsx(de,{children:t.jsx(Rp,{})})}),t.jsx(W,{path:"/registro/comercio",element:t.jsx(de,{children:t.jsx(_p,{})})}),t.jsx(W,{path:"/trabaja-con-nosotros",element:t.jsx(de,{children:t.jsx(Va,{})})}),t.jsx(W,{path:"/registro/fletero",element:t.jsx(de,{children:t.jsx(Va,{role:"fletero"})})}),t.jsx(W,{path:"/registro/delivery",element:t.jsx(lr,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(W,{path:"/mi-cuenta",element:t.jsx(de,{children:t.jsx(Mp,{})})}),t.jsx(W,{path:"/panel/comercio",element:t.jsx(de,{children:t.jsx(Ip,{})})}),t.jsx(W,{path:"/panel/comercio/metricas",element:t.jsx(de,{children:t.jsx(Fp,{})})}),t.jsx(W,{path:"/panel/comercio/producto",element:t.jsx(de,{children:t.jsx(Tp,{})})}),t.jsx(W,{path:"/panel/repartidor",element:t.jsx(de,{children:t.jsx(Lp,{})})}),t.jsx(W,{path:"/panel/repartidor/metricas",element:t.jsx(de,{children:t.jsx(Op,{})})}),t.jsx(W,{path:"/panel/admin",element:t.jsx(de,{children:t.jsx(Dp,{})})}),t.jsx(W,{path:"/panel/admin/postulaciones",element:t.jsx(de,{children:t.jsx(Np,{})})}),t.jsx(W,{path:"*",element:t.jsx(lr,{to:"/",replace:!0})})]})})})})}const Hp=()=>{try{window.top!==window.self&&(window.top.location=window.self.location)}catch{document.documentElement.style.display="none"}};Hp();li({immediate:!0});const Ko=document.getElementById("root");if(!Ko)throw new Error("No se encontró el nodo root");dr.createRoot(Ko).render(t.jsx(Te.StrictMode,{children:t.jsx(Bp,{})}));export{yu as $,wn as A,jd as B,du as C,Bs as D,Dl as E,nu as F,Kr as G,Xr as H,Zr as I,Go as J,Fa as K,vo as L,jl as M,vn as N,Tn as O,zu as P,Cl as Q,zl as R,ze as S,Pl as T,Vr as U,Bl as V,Ct as W,Eo as X,Wn as Y,ie as Z,ju as _,pu as a,$u as a$,Pe as a0,Qe as a1,tu as a2,ru as a3,au as a4,ou as a5,gr as a6,iu as a7,Wo as a8,Jr as a9,jt as aA,eu as aB,Dn as aC,hu as aD,Un as aE,zo as aF,Cn as aG,et as aH,Mu as aI,lu as aJ,wo as aK,mp as aL,jc as aM,mu as aN,Zp as aO,Gp as aP,up as aQ,yr as aR,Vp as aS,Up as aT,Pu as aU,bu as aV,xu as aW,wu as aX,Ln as aY,_n as aZ,Wp as a_,Fn as aa,Au as ab,Dd as ac,Pd as ad,Rd as ae,Cu as af,Fe as ag,Ec as ah,Ac as ai,Ge as aj,Kp as ak,_u as al,Ce as am,ls as an,Jp as ao,cu as ap,Yr as aq,su as ar,uu as as,Ns as at,fu as au,Xp as av,$n as aw,Xt as ax,Zt as ay,Xs as az,Ru as b,vu as b0,Rn as b1,Yp as b2,ku as b3,Su as b4,P as c,kc as d,Sc as e,Re as f,Mo as g,we as h,Qp as i,t as j,Fd as k,zd as l,sr as m,yp as n,Do as o,nr as p,o as q,Il as r,Mn as s,ip as t,Oo as u,Hs as v,qa as w,cr as x,gu as y,Eu as z};
