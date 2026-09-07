const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-BBaLZASd.js","assets/react-D_B_6qYb.js","assets/AddressMapStyled-DePI9nb5.js","assets/AddressMapStyled-CIGW-MKW.css","assets/useCurrentPosition-BYw6bfYw.js","assets/AuthScreen-B99zoeEb.js","assets/formStyles-CGOTITFa.js","assets/AuthScreenStyled-Bye8WFVk.js","assets/PanelLoginDialogStyled-D6onXijO.js","assets/mail-1BnHrGfG.js","assets/shield-check-DB50q4uR.js","assets/log-in-BS98o-qF.js","assets/CategoriesScreen-CAeAcUvn.js","assets/StoresDirectoryScreen-Bv0dC3zd.js","assets/StoreProfileScreen-17EIOcOJ.js","assets/saleUnits-CLP-TCsg.js","assets/cartStore-BmhK6X58.js","assets/clock-3-DlJwbZvK.js","assets/ProductDetailScreen-Cojr30Kk.js","assets/SettingsList-KyHVx5yq.js","assets/MyOrdersScreen-CO7ZhZOv.js","assets/ordersStore-BUUkuNGC.js","assets/CartScreen-DEXlh3KS.js","assets/ConfirmDialog-RFHIzWBD.js","assets/ErrandScreen-BmwwDwCr.js","assets/errandStore-Bion9qKH.js","assets/ErrandChatScreen-BostU4um.js","assets/mediaService-D2_VAu2k.js","assets/camera-Bu--r0im.js","assets/send-Ro-fIcwb.js","assets/FavoritesScreen-Cj0QhGQA.js","assets/NotificationsScreen-CqkKlT1-.js","assets/badge-percent-BjXPms5P.js","assets/CustomerAccountScreen-DN2hE3Cc.js","assets/phone-wUEBgFFL.js","assets/CommerceRegistrationScreen-BGXh6Ec-.js","assets/useMediaUpload-CTMFYLii.js","assets/FileField-DOGvUx8W.js","assets/ProductFormScreenStyled-BPwPTVkp.js","assets/DeliveryRegistrationScreen-SHV92f-Y.js","assets/MiComercioScreen-BSiXPiZS.js","assets/ChatPedidoDialog-FrAO1idB.js","assets/message-square-otvHVLBO.js","assets/CommercePanelScreen-CKZKPUAU.js","assets/MetricTile-DcJa3iXE.js","assets/ProductFormScreen-CDe4rW6t.js","assets/PanelRepartidorScreen-ne3LEjFB.js","assets/refresh-cw-D128W_Mp.js","assets/DeliveryPanelScreen-CApTqpFL.js","assets/AdminPostulacionesScreen-CDQ_RxGk.js","assets/AdminPanelScreen-BGTlIEVz.js"])))=>i.map(i=>d[i]);
import{r as u,a as Ao,g as Co,R as Re,L as be,N as fr,u as Eo,b as zo,c as Qt,H as Po,d as Mo,e as K}from"./react-D_B_6qYb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();var Ma={exports:{}},$t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=u,Io=Symbol.for("react.element"),_o=Symbol.for("react.fragment"),To=Object.prototype.hasOwnProperty,Fo=Ro.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lo={key:!0,ref:!0,__self:!0,__source:!0};function Ra(e,r,a){var i,s={},c=null,n=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(n=r.ref);for(i in r)To.call(r,i)&&!Lo.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return{$$typeof:Io,type:e,key:c,ref:n,props:s,_owner:Fo.current}}$t.Fragment=_o;$t.jsx=Ra;$t.jsxs=Ra;Ma.exports=$t;var t=Ma.exports,er={},Dr=Ao;er.createRoot=Dr.createRoot,er.hydrateRoot=Dr.hydrateRoot;const Oo="modulepreload",No=function(e){return"/LaFranciaGO/"+e},Br={},Q=function(r,a,i){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),p=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.allSettled(a.map(m=>{if(m=No(m),m in Br)return;Br[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Oo,g||(h.as="script"),h.crossOrigin="",h.href=m,p&&h.setAttribute("nonce",p),document.head.appendChild(h),g)return new Promise((f,j)=>{h.addEventListener("load",f),h.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(n){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=n,window.dispatchEvent(p),!p.defaultPrevented)throw n}return s.then(n=>{for(const p of n||[])p.status==="rejected"&&c(p.reason);return r().catch(c)})};function Do(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:s,onRegisteredSW:c,onRegisterError:n}=e;let p,m;const g=async(h=!0)=>{await m};async function x(){if("serviceWorker"in navigator){if(p=await Q(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(h=>{n==null||n(h)}),!p)return;p.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),p.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),p.register({immediate:r}).then(h=>{c?c("/LaFranciaGO/sw.js",h):s==null||s(h)}).catch(h=>{n==null||n(h)})}}return m=x(),g}var Ia={exports:{}},W={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.transitional.element"),br=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),kt=Symbol.for("react.strict_mode"),St=Symbol.for("react.profiler"),jt=Symbol.for("react.consumer"),At=Symbol.for("react.context"),Ct=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Bo=Symbol.for("react.view_transition"),Ho=Symbol.for("react.client.reference");function ge(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case yr:switch(e=e.type,e){case vt:case St:case kt:case Et:case zt:case Bo:return e;default:switch(e=e&&e.$$typeof,e){case At:case Ct:case Mt:case Pt:return e;case jt:return e;default:return r}}case br:return r}}}W.ContextConsumer=jt;W.ContextProvider=At;W.Element=yr;W.ForwardRef=Ct;W.Fragment=vt;W.Lazy=Mt;W.Memo=Pt;W.Portal=br;W.Profiler=St;W.StrictMode=kt;W.Suspense=Et;W.SuspenseList=zt;W.isContextConsumer=function(e){return ge(e)===jt};W.isContextProvider=function(e){return ge(e)===At};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr};W.isForwardRef=function(e){return ge(e)===Ct};W.isFragment=function(e){return ge(e)===vt};W.isLazy=function(e){return ge(e)===Mt};W.isMemo=function(e){return ge(e)===Pt};W.isPortal=function(e){return ge(e)===br};W.isProfiler=function(e){return ge(e)===St};W.isStrictMode=function(e){return ge(e)===kt};W.isSuspense=function(e){return ge(e)===Et};W.isSuspenseList=function(e){return ge(e)===zt};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vt||e===St||e===kt||e===Et||e===zt||typeof e=="object"&&e!==null&&(e.$$typeof===Mt||e.$$typeof===Pt||e.$$typeof===At||e.$$typeof===jt||e.$$typeof===Ct||e.$$typeof===Ho||e.getModuleId!==void 0)};W.typeOf=ge;Ia.exports=W;var _a=Ia.exports;function qo(e){function r(k,l,b,S,d){for(var N=0,w=0,ee=0,D=0,G,R,ne=0,ue=0,F,pe=F=G=0,B=0,se=0,Oe=0,ce=0,Je=b.length,Ne=Je-1,fe,P="",re="",qt="",Gt="",ve;B<Je;){if(R=b.charCodeAt(B),B===Ne&&w+D+ee+N!==0&&(w!==0&&(R=w===47?10:47),D=ee=N=0,Je++,Ne++),w+D+ee+N===0){if(B===Ne&&(0<se&&(P=P.replace(f,"")),0<P.trim().length)){switch(R){case 32:case 9:case 59:case 13:case 10:break;default:P+=b.charAt(B)}R=59}switch(R){case 123:for(P=P.trim(),G=P.charCodeAt(0),F=1,ce=++B;B<Je;){switch(R=b.charCodeAt(B)){case 123:F++;break;case 125:F--;break;case 47:switch(R=b.charCodeAt(B+1)){case 42:case 47:e:{for(pe=B+1;pe<Ne;++pe)switch(b.charCodeAt(pe)){case 47:if(R===42&&b.charCodeAt(pe-1)===42&&B+2!==pe){B=pe+1;break e}break;case 10:if(R===47){B=pe+1;break e}}B=pe}}break;case 91:R++;case 40:R++;case 34:case 39:for(;B++<Ne&&b.charCodeAt(B)!==R;);}if(F===0)break;B++}switch(F=b.substring(ce,B),G===0&&(G=(P=P.replace(h,"").trim()).charCodeAt(0)),G){case 64:switch(0<se&&(P=P.replace(f,"")),R=P.charCodeAt(1),R){case 100:case 109:case 115:case 45:se=l;break;default:se=T}if(F=r(l,se,F,R,d+1),ce=F.length,0<de&&(se=a(T,P,Oe),ve=p(3,F,se,l,X,q,ce,R,d,S),P=se.join(""),ve!==void 0&&(ce=(F=ve.trim()).length)===0&&(R=0,F="")),0<ce)switch(R){case 115:P=P.replace(O,n);case 100:case 109:case 45:F=P+"{"+F+"}";break;case 107:P=P.replace($,"$1 $2"),F=P+"{"+F+"}",F=A===1||A===2&&c("@"+F,3)?"@-webkit-"+F+"@"+F:"@"+F;break;default:F=P+F,S===112&&(F=(re+=F,""))}else F="";break;default:F=r(l,a(l,P,Oe),F,S,d+1)}qt+=F,F=Oe=se=pe=G=0,P="",R=b.charCodeAt(++B);break;case 125:case 59:if(P=(0<se?P.replace(f,""):P).trim(),1<(ce=P.length))switch(pe===0&&(G=P.charCodeAt(0),G===45||96<G&&123>G)&&(ce=(P=P.replace(" ",":")).length),0<de&&(ve=p(1,P,l,k,X,q,re.length,S,d,S))!==void 0&&(ce=(P=ve.trim()).length)===0&&(P="\0\0"),G=P.charCodeAt(0),R=P.charCodeAt(1),G){case 0:break;case 64:if(R===105||R===99){Gt+=P+b.charAt(B);break}default:P.charCodeAt(ce-1)!==58&&(re+=s(P,G,R,P.charCodeAt(2)))}Oe=se=pe=G=0,P="",R=b.charCodeAt(++B)}}switch(R){case 13:case 10:w===47?w=0:1+G===0&&S!==107&&0<P.length&&(se=1,P+="\0"),0<de*$e&&p(0,P,l,k,X,q,re.length,S,d,S),q=1,X++;break;case 59:case 125:if(w+D+ee+N===0){q++;break}default:switch(q++,fe=b.charAt(B),R){case 9:case 32:if(D+N+w===0)switch(ne){case 44:case 58:case 9:case 32:fe="";break;default:R!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:D+w+N===0&&(se=Oe=1,fe="\f"+fe);break;case 108:if(D+w+N+oe===0&&0<pe)switch(B-pe){case 2:ne===112&&b.charCodeAt(B-3)===58&&(oe=ne);case 8:ue===111&&(oe=ue)}break;case 58:D+w+N===0&&(pe=B);break;case 44:w+ee+D+N===0&&(se=1,fe+="\r");break;case 34:case 39:w===0&&(D=D===R?0:D===0?R:D);break;case 91:D+w+ee===0&&N++;break;case 93:D+w+ee===0&&N--;break;case 41:D+w+N===0&&ee--;break;case 40:if(D+w+N===0){if(G===0)switch(2*ne+3*ue){case 533:break;default:G=1}ee++}break;case 64:w+ee+D+N+pe+F===0&&(F=1);break;case 42:case 47:if(!(0<D+N+ee))switch(w){case 0:switch(2*R+3*b.charCodeAt(B+1)){case 235:w=47;break;case 220:ce=B,w=42}break;case 42:R===47&&ne===42&&ce+2!==B&&(b.charCodeAt(ce+2)===33&&(re+=b.substring(ce,B+1)),fe="",w=0)}}w===0&&(P+=fe)}ue=ne,ne=R,B++}if(ce=re.length,0<ce){if(se=l,0<de&&(ve=p(2,re,se,k,X,q,ce,S,d,S),ve!==void 0&&(re=ve).length===0))return Gt+re+qt;if(re=se.join(",")+"{"+re+"}",A*oe!==0){switch(A!==2||c(re,2)||(oe=0),oe){case 111:re=re.replace(C,":-moz-$1")+re;break;case 112:re=re.replace(I,"::-webkit-input-$1")+re.replace(I,"::-moz-$1")+re.replace(I,":-ms-input-$1")+re}oe=0}}return Gt+re+qt}function a(k,l,b){var S=l.trim().split(y);l=S;var d=S.length,N=k.length;switch(N){case 0:case 1:var w=0;for(k=N===0?"":k[0]+" ";w<d;++w)l[w]=i(k,l[w],b).trim();break;default:var ee=w=0;for(l=[];w<d;++w)for(var D=0;D<N;++D)l[ee++]=i(k[D]+" ",S[w],b).trim()}return l}function i(k,l,b){var S=l.charCodeAt(0);switch(33>S&&(S=(l=l.trim()).charCodeAt(0)),S){case 38:return l.replace(v,"$1"+k.trim());case 58:return k.trim()+l.replace(v,"$1"+k.trim());default:if(0<1*b&&0<l.indexOf("\f"))return l.replace(v,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+l}function s(k,l,b,S){var d=k+";",N=2*l+3*b+4*S;if(N===944){k=d.indexOf(":",9)+1;var w=d.substring(k,d.length-1).trim();return w=d.substring(0,k).trim()+w+";",A===1||A===2&&c(w,1)?"-webkit-"+w+w:w}if(A===0||A===2&&!c(d,1))return d;switch(N){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(J,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return w=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+w+"-webkit-"+d+"-ms-flex-pack"+w+d;case 1005:return E.test(d)?d.replace(j,":-webkit-")+d.replace(j,":-moz-")+d:d;case 1e3:switch(w=d.substring(13).trim(),l=w.indexOf("-")+1,w.charCodeAt(0)+w.charCodeAt(l)){case 226:w=d.replace(M,"tb");break;case 232:w=d.replace(M,"tb-rl");break;case 220:w=d.replace(M,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+w+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(l=(d=k).length-10,w=(d.charCodeAt(l)===33?d.substring(0,l):d).substring(k.indexOf(":",7)+1).trim(),N=w.charCodeAt(0)+(w.charCodeAt(7)|0)){case 203:if(111>w.charCodeAt(8))break;case 115:d=d.replace(w,"-webkit-"+w)+";"+d;break;case 207:case 102:d=d.replace(w,"-webkit-"+(102<N?"inline-":"")+"box")+";"+d.replace(w,"-webkit-"+w)+";"+d.replace(w,"-ms-"+w+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return w=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+w+"-ms-flex-"+w+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(H,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(H,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(U.test(k)===!0)return(w=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?s(k.replace("stretch","fill-available"),l,b,S).replace(":fill-available",":stretch"):d.replace(w,"-webkit-"+w)+d.replace(w,"-moz-"+w.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,b+S===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+d}return d}function c(k,l){var b=k.indexOf(l===1?":":"{"),S=k.substring(0,l!==3?b:10);return b=k.substring(b+1,k.length-1),we(l!==2?S:S.replace(Z,"$1"),b,l)}function n(k,l){var b=s(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return b!==l+";"?b.replace(V," or ($1)").substring(4):"("+l+")"}function p(k,l,b,S,d,N,w,ee,D,G){for(var R=0,ne=l,ue;R<de;++R)switch(ue=te[R].call(x,k,ne,b,S,d,N,w,ee,D,G)){case void 0:case!1:case!0:case null:break;default:ne=ue}if(ne!==l)return ne}function m(k){switch(k){case void 0:case null:de=te.length=0;break;default:if(typeof k=="function")te[de++]=k;else if(typeof k=="object")for(var l=0,b=k.length;l<b;++l)m(k[l]);else $e=!!k|0}return m}function g(k){return k=k.prefix,k!==void 0&&(we=null,k?typeof k!="function"?A=1:(A=2,we=k):A=0),g}function x(k,l){var b=k;if(33>b.charCodeAt(0)&&(b=b.trim()),xe=b,b=[xe],0<de){var S=p(-1,l,b,b,X,q,0,0,0,0);S!==void 0&&typeof S=="string"&&(l=S)}var d=r(T,b,l,0,0);return 0<de&&(S=p(-2,d,b,b,X,q,d.length,0,0,0),S!==void 0&&(d=S)),xe="",oe=0,q=X=1,d}var h=/^\0+/g,f=/[\0\r\f]/g,j=/: */g,E=/zoo|gra/,_=/([,: ])(transform)/g,y=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,$=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,C=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,H=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,q=1,X=1,oe=0,A=1,T=[],te=[],de=0,we=null,$e=0,xe="";return x.use=m,x.set=g,e!==void 0&&g(e),x}var Go={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yo(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var Vo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hr=Yo(function(e){return Vo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ta={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,xr=ie?Symbol.for("react.element"):60103,wr=ie?Symbol.for("react.portal"):60106,Rt=ie?Symbol.for("react.fragment"):60107,It=ie?Symbol.for("react.strict_mode"):60108,_t=ie?Symbol.for("react.profiler"):60114,Tt=ie?Symbol.for("react.provider"):60109,Ft=ie?Symbol.for("react.context"):60110,$r=ie?Symbol.for("react.async_mode"):60111,Lt=ie?Symbol.for("react.concurrent_mode"):60111,Ot=ie?Symbol.for("react.forward_ref"):60112,Nt=ie?Symbol.for("react.suspense"):60113,Wo=ie?Symbol.for("react.suspense_list"):60120,Dt=ie?Symbol.for("react.memo"):60115,Bt=ie?Symbol.for("react.lazy"):60116,Uo=ie?Symbol.for("react.block"):60121,Ko=ie?Symbol.for("react.fundamental"):60117,Xo=ie?Symbol.for("react.responder"):60118,Zo=ie?Symbol.for("react.scope"):60119;function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case xr:switch(e=e.type,e){case $r:case Lt:case Rt:case _t:case It:case Nt:return e;default:switch(e=e&&e.$$typeof,e){case Ft:case Ot:case Bt:case Dt:case Tt:return e;default:return r}}case wr:return r}}}function Fa(e){return me(e)===Lt}Y.AsyncMode=$r;Y.ConcurrentMode=Lt;Y.ContextConsumer=Ft;Y.ContextProvider=Tt;Y.Element=xr;Y.ForwardRef=Ot;Y.Fragment=Rt;Y.Lazy=Bt;Y.Memo=Dt;Y.Portal=wr;Y.Profiler=_t;Y.StrictMode=It;Y.Suspense=Nt;Y.isAsyncMode=function(e){return Fa(e)||me(e)===$r};Y.isConcurrentMode=Fa;Y.isContextConsumer=function(e){return me(e)===Ft};Y.isContextProvider=function(e){return me(e)===Tt};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr};Y.isForwardRef=function(e){return me(e)===Ot};Y.isFragment=function(e){return me(e)===Rt};Y.isLazy=function(e){return me(e)===Bt};Y.isMemo=function(e){return me(e)===Dt};Y.isPortal=function(e){return me(e)===wr};Y.isProfiler=function(e){return me(e)===_t};Y.isStrictMode=function(e){return me(e)===It};Y.isSuspense=function(e){return me(e)===Nt};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Rt||e===Lt||e===_t||e===It||e===Nt||e===Wo||typeof e=="object"&&e!==null&&(e.$$typeof===Bt||e.$$typeof===Dt||e.$$typeof===Tt||e.$$typeof===Ft||e.$$typeof===Ot||e.$$typeof===Ko||e.$$typeof===Xo||e.$$typeof===Zo||e.$$typeof===Uo)};Y.typeOf=me;Ta.exports=Y;var Jo=Ta.exports,vr=Jo,Qo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ei={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ti={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},La={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kr={};kr[vr.ForwardRef]=ti;kr[vr.Memo]=La;function qr(e){return vr.isMemo(e)?La:kr[e.$$typeof]||Qo}var ri=Object.defineProperty,ai=Object.getOwnPropertyNames,Gr=Object.getOwnPropertySymbols,oi=Object.getOwnPropertyDescriptor,ii=Object.getPrototypeOf,Yr=Object.prototype;function Oa(e,r,a){if(typeof r!="string"){if(Yr){var i=ii(r);i&&i!==Yr&&Oa(e,i,a)}var s=ai(r);Gr&&(s=s.concat(Gr(r)));for(var c=qr(e),n=qr(r),p=0;p<s.length;++p){var m=s[p];if(!ei[m]&&!(a&&a[m])&&!(n&&n[m])&&!(c&&c[m])){var g=oi(r,m);try{ri(e,m,g)}catch{}}}}return e}var ni=Oa;const si=Co(ni);var he={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var Vr=function(e,r){for(var a=[e[0]],i=0,s=r.length;i<s;i+=1)a.push(r[i],e[i+1]);return a},tr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_a.typeOf(e)},ft=Object.freeze([]),Se=Object.freeze({});function Te(e){return typeof e=="function"}function Wr(e){return e.displayName||e.name||"Component"}function Sr(e){return e&&typeof e.styledComponentId=="string"}var Fe=typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_ATTR||he.SC_ATTR)||"data-styled",jr=typeof window<"u"&&"HTMLElement"in window,ci=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&he.REACT_APP_SC_DISABLE_SPEEDY!==""?he.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&he.REACT_APP_SC_DISABLE_SPEEDY:he.SC_DISABLE_SPEEDY!==void 0&&he.SC_DISABLE_SPEEDY!==""&&he.SC_DISABLE_SPEEDY!=="false"&&he.SC_DISABLE_SPEEDY)),li={};function ze(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var di=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,s=0;s<a;s++)i+=this.groupSizes[s];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,n=c;a>=n;)(n<<=1)<0&&ze(16,""+a);this.groupSizes=new Uint32Array(n),this.groupSizes.set(s),this.length=n;for(var p=c;p<n;p++)this.groupSizes[p]=0}for(var m=this.indexOfGroup(a+1),g=0,x=i.length;g<x;g++)this.tag.insertRule(m,i[g])&&(this.groupSizes[a]++,m++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],s=this.indexOfGroup(a),c=s+i;this.groupSizes[a]=0;for(var n=s;n<c;n++)this.tag.deleteRule(s)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var s=this.groupSizes[a],c=this.indexOfGroup(a),n=c+s,p=c;p<n;p++)i+=this.tag.getRule(p)+`/*!sc*/
`;return i},e}(),mt=new Map,yt=new Map,Ye=1,Qe=function(e){if(mt.has(e))return mt.get(e);for(;yt.has(Ye);)Ye++;var r=Ye++;return mt.set(e,r),yt.set(r,e),r},pi=function(e){return yt.get(e)},ui=function(e,r){r>=Ye&&(Ye=r+1),mt.set(e,r),yt.set(r,e)},mi="style["+Fe+'][data-styled-version="5.3.11"]',hi=new RegExp("^"+Fe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),gi=function(e,r,a){for(var i,s=a.split(","),c=0,n=s.length;c<n;c++)(i=s[c])&&e.registerName(r,i)},fi=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],s=0,c=a.length;s<c;s++){var n=a[s].trim();if(n){var p=n.match(hi);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(ui(g,m),gi(e,g,p[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(n)}}},yi=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Na=function(e){var r=document.head,a=e||r,i=document.createElement("style"),s=function(p){for(var m=p.childNodes,g=m.length;g>=0;g--){var x=m[g];if(x&&x.nodeType===1&&x.hasAttribute(Fe))return x}}(a),c=s!==void 0?s.nextSibling:null;i.setAttribute(Fe,"active"),i.setAttribute("data-styled-version","5.3.11");var n=yi();return n&&i.setAttribute("nonce",n),a.insertBefore(i,c),i},bi=function(){function e(a){var i=this.element=Na(a);i.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,n=0,p=c.length;n<p;n++){var m=c[n];if(m.ownerNode===s)return m}ze(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),xi=function(){function e(a){var i=this.element=Na(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var s=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(s,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),wi=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),Ur=jr,$i={isServer:!jr,useCSSOMInjection:!ci},bt=function(){function e(a,i,s){a===void 0&&(a=Se),i===void 0&&(i={}),this.options=ye({},$i,{},a),this.gs=i,this.names=new Map(s),this.server=!!a.isServer,!this.server&&jr&&Ur&&(Ur=!1,function(c){for(var n=document.querySelectorAll(mi),p=0,m=n.length;p<m;p++){var g=n[p];g&&g.getAttribute(Fe)!=="active"&&(fi(c,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}e.registerId=function(a){return Qe(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(s=(i=this.options).isServer,c=i.useCSSOMInjection,n=i.target,a=s?new wi(n):c?new bi(n):new xi(n),new di(a)));var a,i,s,c,n},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(Qe(a),this.names.has(a))this.names.get(a).add(i);else{var s=new Set;s.add(i),this.names.set(a,s)}},r.insertRules=function(a,i,s){this.registerName(a,i),this.getTag().insertRules(Qe(a),s)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(Qe(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),s=i.length,c="",n=0;n<s;n++){var p=pi(n);if(p!==void 0){var m=a.names.get(p),g=i.getGroup(n);if(m&&g&&m.size){var x=Fe+".g"+n+'[id="'+p+'"]',h="";m!==void 0&&m.forEach(function(f){f.length>0&&(h+=f+",")}),c+=""+g+x+'{content:"'+h+`"}/*!sc*/
`}}}return c}(this)},e}(),vi=/(a)(d)/gi,Kr=function(e){return String.fromCharCode(e+(e>25?39:97))};function rr(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=Kr(r%52)+a;return(Kr(r%52)+a).replace(vi,"$1-$2")}var Ie=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},Da=function(e){return Ie(5381,e)};function Ba(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Te(a)&&!Sr(a))return!1}return!0}var ki=Da("5.3.11"),Si=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Ba(r),this.componentId=a,this.baseHash=Ie(ki,a),this.baseStyle=i,bt.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var s=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(s,this.staticRulesId))c.push(this.staticRulesId);else{var n=Pe(this.rules,r,a,i).join(""),p=rr(Ie(this.baseHash,n)>>>0);if(!a.hasNameForId(s,p)){var m=i(n,"."+p,void 0,s);a.insertRules(s,p,m)}c.push(p),this.staticRulesId=p}else{for(var g=this.rules.length,x=Ie(this.baseHash,i.hash),h="",f=0;f<g;f++){var j=this.rules[f];if(typeof j=="string")h+=j;else if(j){var E=Pe(j,r,a,i),_=Array.isArray(E)?E.join(""):E;x=Ie(x,_+f),h+=_}}if(h){var y=rr(x>>>0);if(!a.hasNameForId(s,y)){var v=i(h,"."+y,void 0,s);a.insertRules(s,y,v)}c.push(y)}}return c.join(" ")},e}(),ji=/^\s*\/\/.*$/gm,Ai=[":","[",".","#"];function Ci(e){var r,a,i,s,c=Se,n=c.options,p=n===void 0?Se:n,m=c.plugins,g=m===void 0?ft:m,x=new qo(p),h=[],f=function(_){function y(v){if(v)try{_(v+"}")}catch{}}return function(v,$,I,C,M,O,V,H,Z,U){switch(v){case 1:if(Z===0&&$.charCodeAt(0)===64)return _($+";"),"";break;case 2:if(H===0)return $+"/*|*/";break;case 3:switch(H){case 102:case 112:return _(I[0]+$),"";default:return $+(U===0?"/*|*/":"")}case-2:$.split("/*|*/}").forEach(y)}}}(function(_){h.push(_)}),j=function(_,y,v){return y===0&&Ai.indexOf(v[a.length])!==-1||v.match(s)?_:"."+r};function E(_,y,v,$){$===void 0&&($="&");var I=_.replace(ji,""),C=y&&v?v+" "+y+" { "+I+" }":I;return r=$,a=y,i=new RegExp("\\"+a+"\\b","g"),s=new RegExp("(\\"+a+"\\b){2,}"),x(v||!y?"":y,C)}return x.use([].concat(g,[function(_,y,v){_===2&&v.length&&v[0].lastIndexOf(a)>0&&(v[0]=v[0].replace(i,j))},f,function(_){if(_===-2){var y=h;return h=[],y}}])),E.hash=g.length?g.reduce(function(_,y){return y.name||ze(15),Ie(_,y.name)},5381).toString():"",E}var Ha=Re.createContext();Ha.Consumer;var qa=Re.createContext(),Ei=(qa.Consumer,new bt),ar=Ci();function Ga(){return u.useContext(Ha)||Ei}function Ya(){return u.useContext(qa)||ar}var Va=function(){function e(r,a){var i=this;this.inject=function(s,c){c===void 0&&(c=ar);var n=i.name+c.hash;s.hasNameForId(i.id,n)||s.insertRules(i.id,n,c(i.rules,n,"@keyframes"))},this.toString=function(){return ze(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=ar),this.name+r.hash},e}(),zi=/([A-Z])/,Pi=/([A-Z])/g,Mi=/^ms-/,Ri=function(e){return"-"+e.toLowerCase()};function Xr(e){return zi.test(e)?e.replace(Pi,Ri).replace(Mi,"-ms-"):e}var Zr=function(e){return e==null||e===!1||e===""};function Pe(e,r,a,i){if(Array.isArray(e)){for(var s,c=[],n=0,p=e.length;n<p;n+=1)(s=Pe(e[n],r,a,i))!==""&&(Array.isArray(s)?c.push.apply(c,s):c.push(s));return c}if(Zr(e))return"";if(Sr(e))return"."+e.styledComponentId;if(Te(e)){if(typeof(g=e)!="function"||g.prototype&&g.prototype.isReactComponent||!r)return e;var m=e(r);return Pe(m,r,a,i)}var g;return e instanceof Va?a?(e.inject(a,i),e.getName(i)):e:tr(e)?function x(h,f){var j,E,_=[];for(var y in h)h.hasOwnProperty(y)&&!Zr(h[y])&&(Array.isArray(h[y])&&h[y].isCss||Te(h[y])?_.push(Xr(y)+":",h[y],";"):tr(h[y])?_.push.apply(_,x(h[y],y)):_.push(Xr(y)+": "+(j=y,(E=h[y])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||j in Go||j.startsWith("--")?String(E).trim():E+"px")+";"));return f?[f+" {"].concat(_,["}"]):_}(e):e.toString()}var Jr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ae(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return Te(e)||tr(e)?Jr(Pe(Vr(ft,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:Jr(Pe(Vr(e,a)))}var Wa=function(e,r,a){return a===void 0&&(a=Se),e.theme!==a.theme&&e.theme||r||a.theme},Ii=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_i=/(^-|-$)/g;function Yt(e){return e.replace(Ii,"-").replace(_i,"")}var Ar=function(e){return rr(Da(e)>>>0)};function et(e){return typeof e=="string"&&!0}var or=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ti=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Fi(e,r,a){var i=e[a];or(r)&&or(i)?Ua(i,r):e[a]=r}function Ua(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var s=0,c=a;s<c.length;s++){var n=c[s];if(or(n))for(var p in n)Ti(p)&&Fi(e,n[p],p)}return e}var Ve=Re.createContext();Ve.Consumer;function Li(e){var r=u.useContext(Ve),a=u.useMemo(function(){return function(i,s){if(!i)return ze(14);if(Te(i)){var c=i(s);return c}return Array.isArray(i)||typeof i!="object"?ze(8):s?ye({},s,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Re.createElement(Ve.Provider,{value:a},e.children):null}var Vt={};function Ka(e,r,a){var i=Sr(e),s=!et(e),c=r.attrs,n=c===void 0?ft:c,p=r.componentId,m=p===void 0?function($,I){var C=typeof $!="string"?"sc":Yt($);Vt[C]=(Vt[C]||0)+1;var M=C+"-"+Ar("5.3.11"+C+Vt[C]);return I?I+"-"+M:M}(r.displayName,r.parentComponentId):p,g=r.displayName,x=g===void 0?function($){return et($)?"styled."+$:"Styled("+Wr($)+")"}(e):g,h=r.displayName&&r.componentId?Yt(r.displayName)+"-"+r.componentId:r.componentId||m,f=i&&e.attrs?Array.prototype.concat(e.attrs,n).filter(Boolean):n,j=r.shouldForwardProp;i&&e.shouldForwardProp&&(j=r.shouldForwardProp?function($,I,C){return e.shouldForwardProp($,I,C)&&r.shouldForwardProp($,I,C)}:e.shouldForwardProp);var E,_=new Si(a,h,i?e.componentStyle:void 0),y=_.isStatic&&n.length===0,v=function($,I){return function(C,M,O,V){var H=C.attrs,Z=C.componentStyle,U=C.defaultProps,J=C.foldedComponentIds,q=C.shouldForwardProp,X=C.styledComponentId,oe=C.target,A=function(S,d,N){S===void 0&&(S=Se);var w=ye({},d,{theme:S}),ee={};return N.forEach(function(D){var G,R,ne,ue=D;for(G in Te(ue)&&(ue=ue(w)),ue)w[G]=ee[G]=G==="className"?(R=ee[G],ne=ue[G],R&&ne?R+" "+ne:R||ne):ue[G]}),[w,ee]}(Wa(M,u.useContext(Ve),U)||Se,M,H),T=A[0],te=A[1],de=function(S,d,N,w){var ee=Ga(),D=Ya(),G=d?S.generateAndInjectStyles(Se,ee,D):S.generateAndInjectStyles(N,ee,D);return G}(Z,V,T),we=O,$e=te.$as||M.$as||te.as||M.as||oe,xe=et($e),k=te!==M?ye({},M,{},te):M,l={};for(var b in k)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?l.as=k[b]:(q?q(b,Hr,$e):!xe||Hr(b))&&(l[b]=k[b]));return M.style&&te.style!==M.style&&(l.style=ye({},M.style,{},te.style)),l.className=Array.prototype.concat(J,X,de!==X?de:null,M.className,te.className).filter(Boolean).join(" "),l.ref=we,u.createElement($e,l)}(E,$,I,y)};return v.displayName=x,(E=Re.forwardRef(v)).attrs=f,E.componentStyle=_,E.displayName=x,E.shouldForwardProp=j,E.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ft,E.styledComponentId=h,E.target=i?e.target:e,E.withComponent=function($){var I=r.componentId,C=function(O,V){if(O==null)return{};var H,Z,U={},J=Object.keys(O);for(Z=0;Z<J.length;Z++)H=J[Z],V.indexOf(H)>=0||(U[H]=O[H]);return U}(r,["componentId"]),M=I&&I+"-"+(et($)?$:Yt(Wr($)));return Ka($,ye({},C,{attrs:f,componentId:M}),a)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=i?Ua({},e.defaultProps,$):$}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),s&&si(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var o=function(e){return function r(a,i,s){if(s===void 0&&(s=Se),!_a.isValidElementType(i))return ze(1,String(i));var c=function(){return a(i,s,ae.apply(void 0,arguments))};return c.withConfig=function(n){return r(a,i,ye({},s,{},n))},c.attrs=function(n){return r(a,i,ye({},s,{attrs:Array.prototype.concat(s.attrs,n).filter(Boolean)}))},c}(Ka,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var Oi=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=Ba(a),bt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,s,c){var n=c(Pe(this.rules,i,s,c).join(""),""),p=this.componentId+a;s.insertRules(p,p,n)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,s,c){a>2&&bt.registerId(this.componentId+a),this.removeStyles(a,s),this.createStyles(a,i,s,c)},e}();function Ni(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=ae.apply(void 0,[e].concat(a)),c="sc-global-"+Ar(JSON.stringify(s)),n=new Oi(s,c);function p(g){var x=Ga(),h=Ya(),f=u.useContext(Ve),j=u.useRef(x.allocateGSInstance(c)).current;return x.server&&m(j,g,x,f,h),u.useLayoutEffect(function(){if(!x.server)return m(j,g,x,f,h),function(){return n.removeStyles(j,x)}},[j,g,x,f,h]),null}function m(g,x,h,f,j){if(n.isStatic)n.renderStyles(g,li,h,j);else{var E=ye({},x,{theme:Wa(x,f,p.defaultProps)});n.renderStyles(g,E,h,j)}}return Re.memo(p)}function Ht(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=ae.apply(void 0,[e].concat(a)).join(""),c=Ar(s);return new Va(c,s)}const Di=Ni`
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
`,ke={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},Bi=ke.shadow,Hi={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},qi={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},Gi=e=>({mode:e,color:e==="dark"?Hi:ke.color,typography:ke.typography,spacing:ke.spacing,radius:ke.radius,shadow:e==="dark"?qi:Bi,layout:ke.layout,breakpoints:ke.breakpoints,zIndex:ke.zIndex}),Xa="lafranciago-theme-mode",Za=u.createContext(null),Yi=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(Xa);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function Vi({children:e}){const[r,a]=u.useState(Yi),i=u.useRef(!1);u.useEffect(()=>{if(window.localStorage.setItem(Xa,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const m=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(m),delete document.documentElement.dataset.themeTransition}},[r]);const s=u.useCallback(()=>{a(m=>m==="light"?"dark":"light")},[]),c=u.useCallback(m=>{a(m)},[]),n=u.useMemo(()=>Gi(r),[r]),p=u.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:s,setMode:c}),[r,c,s]);return t.jsx(Za.Provider,{value:p,children:t.jsxs(Li,{theme:n,children:[t.jsx(Di,{}),e]})})}function Wi(){const e=u.useContext(Za);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ui={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,r)=>{const a=u.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:n,className:p="",children:m,...g},x)=>u.createElement("svg",{ref:x,...Ui,width:s,height:s,stroke:i,strokeWidth:n?Number(c)*24/Number(s):c,className:["lucide",`lucide-${Ki(e)}`,p].join(" "),...g},[...r.map(([h,f])=>u.createElement(h,f)),...Array.isArray(m)?m:[m]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=z("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=z("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=z("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=z("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=z("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=z("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=z("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=z("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=z("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=z("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=z("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=z("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=z("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=z("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=z("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=z("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function uo({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const ht="lafranciago:foto-perfil",nr=new Set;let De=null,ta=!1;const mn=()=>nr.forEach(e=>e()),mo=e=>/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(e),hn=()=>{try{const e=window.localStorage.getItem(ht);return e&&mo(e)?e:null}catch{return null}};function ra(e){if(!(e!==null&&!mo(e))){De=e;try{e?window.localStorage.setItem(ht,e):window.localStorage.removeItem(ht)}catch{try{window.localStorage.removeItem(ht)}catch{}}mn()}}function gn(){const[e,r]=u.useState(De);u.useEffect(()=>{ta||(ta=!0,De=hn()),r(De);const i=()=>r(De);return nr.add(i),()=>{nr.delete(i)}},[]);const a=u.useCallback(()=>ra(null),[]);return{photo:e,setPhoto:ra,clearPhoto:a}}const fn="https://photon.komoot.io/api/",yn="https://nominatim.openstreetmap.org/reverse",sr={lat:-31.4063691,lon:-62.6332043},Wt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),bn=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",xn=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function wn(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(sr.lat),lon:String(sr.lon)});try{const s=await fetch(`${fn}?${i.toString()}`,{signal:r});return s.ok?((await s.json()).features??[]).map((n,p)=>{var h;const m=n.properties??{},[g,x]=((h=n.geometry)==null?void 0:h.coordinates)??[];return typeof x!="number"||typeof g!="number"?null:{id:`${m.type??"geo"}-${p}-${x}-${g}`,label:bn(m),context:xn(m),lat:x,lon:g}}).filter(n=>n!==null).sort((n,p)=>{const m=Wt(a),g=Wt(n.label).startsWith(m),x=Wt(p.label).startsWith(m);return g!==x?g?-1:1:0}).slice(0,6):[]}catch{return[]}}async function $n(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const s=await fetch(`${yn}?${i.toString()}`,{signal:a});if(!s.ok)return null;const n=(await s.json()).address??{};return[n.road,n.house_number].filter(Boolean).join(" ")||n.neighbourhood||n.city||null}catch{return null}}const vn=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],kn=Ht`
  from { opacity: 0; }
  to { opacity: 1; }
`,Sn=Ht`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,jn=o.div`
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
  animation: ${kn} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,An=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Sn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Cn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,En=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
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
`,Pn=o.input`
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
`,Mn=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,Rn=o.button`
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
`,In=o.button`
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
`;function _n({open:e,address:r,onCancel:a,onSave:i}){const[s,c]=u.useState("");if(u.useEffect(()=>{e&&c("")},[e]),u.useEffect(()=>{if(!e)return;const m=g=>{g.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,e]),!e)return null;const n=s.trim(),p=m=>{m.preventDefault(),n&&i(n)};return t.jsx(jn,{onClick:m=>{m.stopPropagation(),a()},role:"presentation",children:t.jsxs(An,{as:"form",onSubmit:p,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:m=>m.stopPropagation(),children:[t.jsx(Cn,{children:"Nombre de la dirección"}),r?t.jsx(En,{children:r}):null,t.jsx(zn,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(Pn,{id:"address-name",value:s,onChange:m=>c(m.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(Mn,{children:[t.jsx(Rn,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(In,{type:"submit",disabled:!n,children:"Guardar"})]})]})})}const je=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neonMuted};
    `}
`,cr=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,Tn=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const Fn=o.div`
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
`,Ln=o.div`
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
`,On=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,Nn=o.span`
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
`,Dn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Bn=o.button`
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

  ${je};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,Hn=o.div`
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
`,qn=o.div`
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
`,Yn=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Vn=o.button`
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
`,Wn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,Un=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,Kn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Xn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,Jn=o.button`
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
`,Qn=o.button`
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

  ${je};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,es=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,ts=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,rs=o.button`
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
`,as=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,os=o.button`
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
`,is=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ns=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ss=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,cs=u.lazy(()=>Q(()=>import("./AddressMap-BBaLZASd.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.AddressMap}))),ls=260,ds=350;function ps({open:e,currentId:r,onClose:a,onSelect:i,startOnNew:s=!1}){const[c,n]=u.useState(!1),[p,m]=u.useState(!1),[g,x]=u.useState(s?"new":"list"),[h,f]=u.useState(""),[j,E]=u.useState([]),[_,y]=u.useState(!1),[v,$]=u.useState(null),[I,C]=u.useState([]),[M,O]=u.useState(!1),V=u.useRef(!1);u.useEffect(()=>{if(e){n(!0),x(s?"new":"list");const T=window.requestAnimationFrame(()=>m(!0));return()=>window.cancelAnimationFrame(T)}if(!c)return;m(!1);const A=window.setTimeout(()=>{n(!1),x(s?"new":"list"),f(""),E([]),$(null),O(!1)},ls);return()=>window.clearTimeout(A)},[c,e,s]),u.useEffect(()=>{if(!e)return;const A=T=>{if(T.key==="Escape"&&!M){if(g==="new"){x("list");return}a()}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[M,a,e,g]),u.useEffect(()=>{if(g!=="new")return;if(V.current){V.current=!1;return}const A=h.trim();if(A.length<2){E([]),y(!1);return}const T=new AbortController;y(!0);const te=window.setTimeout(()=>{wn(A,T.signal).then(de=>{E(de),y(!1)}).catch(()=>y(!1))},ds);return()=>{window.clearTimeout(te),T.abort()}},[h,g]);const H=u.useMemo(()=>[...vn,...I],[I]),Z=A=>{V.current=!0,f(A.label),E([]),$({lat:A.lat,lon:A.lon})},U=(A,T)=>{$({lat:A,lon:T}),$n(A,T).then(te=>{te&&(V.current=!0,f(te),E([]))})},J=A=>{const T={id:`custom-${Date.now()}`,label:A,address:h.trim(),primary:!1};C(te=>[...te,T]),O(!1),i(T.id,T.address),a()};if(!c)return null;const q=g==="new",X=v??sr,oe=v!==null&&h.trim().length>=3;return t.jsxs(Fn,{"data-visible":p,onClick:a,role:"presentation",children:[t.jsxs(Ln,{"data-visible":p,"data-full":q,role:"dialog","aria-modal":"true","aria-label":q?"Agregar una dirección nueva":"Dirección de entrega",onClick:A=>A.stopPropagation(),children:[t.jsxs(On,{children:[t.jsx(Nn,{"aria-hidden":"true"}),q?t.jsx(Qn,{type:"button",onClick:()=>x("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(Xi,{size:18,"aria-hidden":"true"})}):null,t.jsx(Dn,{children:q?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(Bn,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(po,{size:18,"aria-hidden":"true"})})]}),t.jsx(Hn,{"data-full":q,children:q?t.jsxs(t.Fragment,{children:[t.jsxs(qn,{children:[t.jsx(ir,{size:18,"aria-hidden":"true"}),t.jsx(Gn,{value:h,onChange:A=>f(A.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),j.length>0?t.jsx(as,{"aria-label":"Sugerencias de direcciones",children:j.map(A=>t.jsxs(os,{type:"button",onClick:()=>Z(A),children:[t.jsx(wt,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(is,{children:A.label}),A.context?t.jsx(ns,{children:A.context}):null]})]},A.id))}):null,j.length===0&&_?t.jsx(ss,{children:"Buscando…"}):null,t.jsx(es,{children:t.jsx(u.Suspense,{fallback:null,children:t.jsx(cs,{lat:X.lat,lon:X.lon,onPick:U})})}),t.jsx(ts,{children:v?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(rs,{type:"button",onClick:()=>O(!0),disabled:!oe,children:[t.jsx(wt,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(Yn,{children:"Tus direcciones guardadas"}),H.map(A=>t.jsxs(Vn,{type:"button","data-current":A.id===r,onClick:()=>{i(A.id,A.address),a()},children:[t.jsx(Wn,{children:t.jsx(Pr,{size:18,"aria-hidden":"true"})}),t.jsxs(Un,{children:[t.jsx(Kn,{children:A.label}),t.jsx(Xn,{children:A.address})]}),A.id===r?t.jsx(Zn,{"aria-label":"Dirección actual",children:t.jsx(Ji,{size:16,"aria-hidden":"true"})}):null]},A.id)),t.jsxs(Jn,{type:"button",onClick:()=>x("new"),children:[t.jsx(oo,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(_n,{open:M,address:h.trim(),onCancel:()=>O(!1),onSave:J})]})}const us=o.form`
  width: 100%;
`,ms=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,hs=o.div`
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
`,gs=o.input`
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
`,fs=o.button`
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
`,ho=u.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:s,id:c="marketplace-search"},n){const p=m=>{m.preventDefault()};return t.jsxs(us,{onSubmit:p,role:"search",children:[t.jsx(ms,{htmlFor:c,children:s??"Buscá productos, comercios o categorías"}),t.jsxs(hs,{children:[t.jsx(ir,{size:18,"aria-hidden":"true"}),t.jsx(gs,{id:c,ref:n,value:r,onChange:m=>a(m.target.value),placeholder:i,type:"search"}),t.jsx(fs,{type:"submit","aria-label":"Buscar",children:t.jsx(ir,{size:16,"aria-hidden":"true"})})]})]})}),ys=Ht`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,bs=Ht`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,xs=o.button`
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
`,ws=o.span`
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
  animation: ${ys} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$s=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,vs=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,ks=o.span`
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
`,Ss=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,js=o.span`
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
`,As=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${bs} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,Cs=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,Es=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,zs=o.span`
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
`;function aa({isDarkMode:e,onToggle:r}){return t.jsxs(xs,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(ws,{"data-dark":e,"aria-hidden":"true",children:t.jsx(an,{size:14,"aria-hidden":"true"})}),t.jsxs($s,{children:[t.jsxs(vs,{children:["Modo",t.jsx(ks,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Ss,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(js,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(As,{}),t.jsx(Cs,{"data-dark":e}),t.jsxs(Es,{children:[t.jsx(ea,{size:12,"aria-hidden":"true"}),t.jsx(Qr,{size:12,"aria-hidden":"true"})]}),t.jsx(zs,{"data-dark":e,children:e?t.jsx(Qr,{size:12,"aria-hidden":"true"}):t.jsx(ea,{size:12,"aria-hidden":"true"})})]})]})}const Ps=o.div`
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
`,Ms=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Rs=o.div`
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
`;const Is=o.button`
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
`;const oa=o.span`
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
`,Ut=o.img`
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
`;const ia=o.span`
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
`,na=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,_s=o.span`
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
`;const Ts=o(_s)`
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
`;const cp=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,lp=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,dp=o.span`
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
`,pp=o.div`
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
`,up=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,_r=ae`
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
  ${_r};
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
`;const mp=o.button`
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
`,Fs=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Ce=o.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,Ae=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Ls=o.div`
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
`,hp=o.span`
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
`,gp=o.h1`
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
`,fp=o.p`
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
`,Tr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(Tr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(Tr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(Tr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const Os=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Ns=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,yp=o.h2`
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
`,bp=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,Ds=o.span`
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
`;o(Ds)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const Bs=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,xp=o(Bs)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Hs=o(be)`
  ${_r};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,qs=o(Hs)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,wp=o.button`
  ${_r};
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
`;o(Os)`
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
`;o(fr)`
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
`;const Gs=o.nav`
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
`,Ys=o.ul`
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
`,Be=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  ${je};

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
`,Vs=o(fr)`
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

    ${({theme:e})=>e.mode==="dark"&&ae`
        color: ${e.color.neon};
      `};
  }

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${Be},
  &[aria-current='page'] ${Be} {
    ${cr};
  }

  /* Salvo el central: ahí el ícono se mantiene blanco y plano. */
  &[data-primary='true'].active ${Be},
  &[data-primary='true'][aria-current='page'] ${Be} {
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
`;const Ws=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&ae`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,Us=o.button`
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
`,Ks=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xs=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,Zs=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,go=ae`
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
`,Js=o.button`
  ${go};
`,sa=o(be)`
  ${go};
`,Qs=o.img`
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
`,ec=o.span`
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
`,tc=o.div`
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
`;const rc=o.div`
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
`,ac=o.div`
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
`,oc=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,ic=o.span`
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
`,nc=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,sc=o.span`
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
`,cc=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,lc=ae`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,dc=ae`
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
`,fo=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,ca=o.div`
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
`,la=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,pc=o.div`
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
`,Ee=o.span`
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

  ${je};
`,rt=o(fr)`
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
  &.active ${Ee},
  &[aria-current='page'] ${Ee} {
    ${cr};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Ee} {
    ${cr};
  }
`,at=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,ot=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,it=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,nt=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,st=o.nav`
  display: grid;
  gap: 0.25rem;
`,ct=o.section`
  display: block;
`,lt=o.span`
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
`,da=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,pa=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${lc};
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
`,uc=o.button`
  ${dc};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${Tn};
  ${je};
`,ua=o.div`
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
`,mc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,hc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,gc=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,fc=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,ma=o.button`
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
`,yc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,bc=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,xc=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,$c=o.button`
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
`,vc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,kc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Sc=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,jc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Ac=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Cc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ec=o.article`
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
`,zc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Pc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Mc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Rc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Ic=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_c=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,Kt="/LaFranciaGO/favicon.png",Tc="Av. San Martín 123",ha=3,ga=420,Fc=260,fa=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:Pr,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:ro},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:We},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:zr},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:Ir}],ya=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Me},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:uo},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:Rr},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:xt}],Lc=o.aside`
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
`,Oc=o(fo)`
  height: 100%;
`,ba=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Me,items:[{icon:xt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:We,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:We,items:[{icon:wt,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Me,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:wt,items:[{icon:zr,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:xt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],Nc=[{to:"/",label:"Inicio",icon:Pr},{to:"/categorias",label:"Categorías",icon:ro},{to:"/pedidos",label:"Mis pedidos",icon:We},{to:"/favoritos",label:"Favoritos",icon:zr},{to:"/mi-cuenta",label:"Cuenta",icon:Ir}];function Dc({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:s,toggleMode:c}=Wi(),{photo:n}=gn(),p=Eo(),m=typeof r=="string"&&typeof a=="function",g=u.useRef(null),x=u.useRef(null),h=u.useRef(null),f=u.useRef(null),j=u.useRef(null),[E,_]=u.useState(!1),[y,v]=u.useState({id:"home",label:Tc}),[$,I]=u.useState(!1),[C,M]=u.useState(!1),[O,V]=u.useState("opening"),[H,Z]=u.useState(!1),[U,J]=u.useState(!1),[q,X]=u.useState("opening"),[oe,A]=u.useState(null),T=u.useCallback(()=>{I(!1),Z(!1),A(null)},[]),te=u.useCallback(()=>{T(),I(!0)},[T]),de=u.useCallback(()=>{if($||C){T();return}te()},[T,C,$,te]),we=u.useCallback(()=>{T(),Z(!0)},[T]),$e=u.useCallback(()=>{if(H||U){T();return}we()},[T,U,H,we]);u.useEffect(()=>{const l=document.body.style.overflow;return($||C||H||U)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=l}},[C,$,U,H]),u.useLayoutEffect(()=>{const l=g.current;if(!l)return;const b=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${l.offsetHeight}px`)};b();const S=typeof ResizeObserver<"u"?new ResizeObserver(b):null;return S==null||S.observe(l),window.addEventListener("resize",b),()=>{S==null||S.disconnect(),window.removeEventListener("resize",b),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),u.useEffect(()=>{x.current!==null&&(window.cancelAnimationFrame(x.current),x.current=null),h.current!==null&&(window.clearTimeout(h.current),h.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if($){if(M(!0),l){V("open");return}V("opening"),x.current=window.requestAnimationFrame(()=>{V("open"),x.current=null});return}if(C){if(l){M(!1),V("opening");return}V("closing"),h.current=window.setTimeout(()=>{M(!1),V("opening"),h.current=null},ga)}},[C,$]),u.useEffect(()=>()=>{x.current!==null&&window.cancelAnimationFrame(x.current),h.current!==null&&window.clearTimeout(h.current),f.current!==null&&window.cancelAnimationFrame(f.current),j.current!==null&&window.clearTimeout(j.current)},[]),u.useEffect(()=>{f.current!==null&&(window.cancelAnimationFrame(f.current),f.current=null),j.current!==null&&(window.clearTimeout(j.current),j.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(H){if(J(!0),l){X("open");return}X("opening"),f.current=window.requestAnimationFrame(()=>{X("open"),f.current=null});return}if(U){if(l){J(!1),X("opening");return}X("closing"),j.current=window.setTimeout(()=>{J(!1),X("opening"),j.current=null},Fc)}},[U,H]);const xe=u.useCallback((l,b)=>{l.preventDefault(),T(),window.setTimeout(()=>{p(b)},ga)},[T,p]),k=u.useMemo(()=>ba.find(l=>l.id===oe)??null,[oe]);return t.jsxs(Ps,{children:[t.jsx(Ms,{ref:g,children:t.jsx(Ws,{children:t.jsx(Rs,{children:t.jsxs(rc,{children:[t.jsxs(ac,{children:[t.jsx(Is,{type:"button",onClick:de,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":$||C,children:t.jsx(rn,{size:20,"aria-hidden":"true"})}),t.jsxs(oc,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(sc,{children:t.jsx(Ut,{src:Kt,alt:"","aria-hidden":"true"})}),t.jsxs(ic,{children:["LaFrancia",t.jsx(nc,{children:"GO"})]})]})]}),m?t.jsx(cc,{children:t.jsx(ho,{value:r,onChange:a})}):null,t.jsxs(tc,{"aria-label":"Acciones rápidas",children:[t.jsxs(Us,{type:"button","aria-label":`Entregar en ${y.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":E,onClick:()=>_(!0),children:[t.jsxs(Zs,{children:[t.jsx(Xs,{children:"Entregar en"}),t.jsx(Ks,{children:y.label})]}),t.jsx(en,{size:15,"aria-hidden":"true"})]}),t.jsxs(Js,{type:"button",onClick:$e,"aria-label":`Abrir notificaciones, ${ha} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":H||U,children:[t.jsx(xt,{size:18,"aria-hidden":"true"}),t.jsx(ec,{children:ha})]}),t.jsx(sa,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(dn,{size:18,"aria-hidden":"true"})}),t.jsx(sa,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n?t.jsx(Qs,{src:n,alt:""}):t.jsx(Ir,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(Lc,{"aria-label":"Navegación principal",children:t.jsxs(Oc,{children:[t.jsxs(ca,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(oa,{children:t.jsx(Ut,{src:Kt,alt:"","aria-hidden":"true"})}),t.jsxs(la,{children:[t.jsxs(ia,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(na,{children:"GO"})]}),t.jsx(Ts,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(ct,{children:[t.jsx(lt,{children:"NAVEGACIÓN"}),t.jsx(st,{"aria-label":"Navegación principal",children:fa.map(l=>{const b=l.icon;return t.jsxs(rt,{to:l.to,end:l.end,onClick:S=>xe(S,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(it,{children:[t.jsx(nt,{children:l.title}),t.jsx(ot,{children:l.subtitle})]}),t.jsx(at,{"aria-hidden":"true",children:t.jsx(tt,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(ct,{children:[t.jsx(lt,{children:"ACCIONES"}),t.jsx(st,{"aria-label":"Acciones rápidas",children:ya.map(l=>{const b=l.icon;return t.jsxs(rt,{to:l.to,onClick:S=>xe(S,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(it,{children:[t.jsx(nt,{children:l.title}),t.jsx(ot,{children:l.subtitle})]}),t.jsx(at,{"aria-hidden":"true",children:t.jsx(tt,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(da,{children:t.jsx(aa,{isDarkMode:s,onToggle:c})})]})}),t.jsx(Fs,{children:e}),t.jsx(Gs,{"aria-label":"Navegación móvil",children:t.jsx(Ys,{children:Nc.map(l=>{const b=l.icon;return t.jsx("li",{children:t.jsxs(Vs,{to:l.to,"data-primary":l.to==="/pedidos",children:[t.jsx(Be,{children:t.jsx(b,{size:l.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:l.label})]})},l.to)})})}),C&&t.jsx(ua,{"data-drawer":"true","data-state":O,role:"presentation",onClick:T,children:t.jsxs(pa,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":O,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:l=>l.stopPropagation(),children:[t.jsxs(pc,{children:[t.jsxs(ca,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(oa,{children:t.jsx(Ut,{src:Kt,alt:"","aria-hidden":"true"})}),t.jsx(la,{children:t.jsxs(ia,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(na,{children:"GO"})]})})]}),t.jsx(uc,{type:"button",onClick:T,"aria-label":"Cerrar menú",children:t.jsx(po,{size:18,"aria-hidden":"true"})})]}),t.jsxs(fo,{children:[t.jsxs(ct,{children:[t.jsx(lt,{children:"Navegación"}),t.jsx(st,{"aria-label":"Navegación principal",children:fa.map(l=>{const b=l.icon;return t.jsxs(rt,{to:l.to,end:l.end,onClick:S=>xe(S,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(it,{children:[t.jsx(nt,{children:l.title}),t.jsx(ot,{children:l.subtitle})]}),t.jsx(at,{"aria-hidden":"true",children:t.jsx(tt,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(ct,{children:[t.jsx(lt,{children:"Acciones"}),t.jsx(st,{"aria-label":"Acciones rápidas",children:ya.map(l=>{const b=l.icon;return t.jsxs(rt,{to:l.to,onClick:S=>xe(S,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(it,{children:[t.jsx(nt,{children:l.title}),t.jsx(ot,{children:l.subtitle})]}),t.jsx(at,{"aria-hidden":"true",children:t.jsx(tt,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx(da,{children:t.jsx(aa,{isDarkMode:s,onToggle:c})})]})]})}),U&&t.jsx(ua,{"data-notifications":"true","data-state":q,role:"presentation",onClick:T,children:t.jsxs(pa,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":q,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:l=>l.stopPropagation(),children:[t.jsxs(fc,{children:[k?t.jsx(ma,{type:"button",onClick:()=>A(null),"aria-label":"Volver a las notificaciones",children:t.jsx(Ja,{size:14,"aria-hidden":"true"})}):t.jsx(bc,{"aria-hidden":"true"}),t.jsxs(wc,{children:[t.jsx(xc,{id:"marketplace-notifications-title",children:(k==null?void 0:k.title)??"Notificaciones"}),t.jsx(yc,{children:(k==null?void 0:k.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(ma,{type:"button",onClick:()=>{T(),p("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(cn,{size:14,"aria-hidden":"true"})})]}),t.jsx(gc,{}),t.jsx(hc,{children:k?t.jsx(mc,{"aria-label":k.title,children:k.items.map(l=>{const b=l.icon;return t.jsxs(Ec,{children:[t.jsx(Mc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(zc,{children:[t.jsxs(_c,{children:[t.jsx(Ic,{children:l.title}),t.jsx(Pc,{children:l.date})]}),t.jsx(Rc,{children:l.subtitle})]})]},`${k.id}-${l.title}`)})}):t.jsx(Cc,{"aria-label":"Secciones de notificaciones",children:ba.map(l=>{const b=l.icon;return t.jsxs($c,{type:"button",onClick:()=>A(l.id),children:[t.jsx(kc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(jc,{children:[t.jsx(Ac,{children:l.title}),t.jsx(Sc,{children:l.subtitle})]}),t.jsx(vc,{"aria-hidden":"true",children:t.jsx(Le,{size:16,"aria-hidden":"true"})})]},l.id)})})})]})}),t.jsx(ps,{open:E,currentId:y.id,onClose:()=>_(!1),onSelect:(l,b)=>v({id:l,label:b})})]})}const Fr=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,Lr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,yo=ae`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${yo};
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
`;const bo=o.div`
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
`;const Bc=o.span`
  ${yo};
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
`,$p=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Hc="/LaFranciaGO/",qc=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),Or=e=>{const r=e&&qc.has(e)?e:"comercio";return`${Hc}media/${r}.svg`},Gc=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),Yc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,s)=>i+s.charCodeAt(0),0);return r[a%r.length]},Vc=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,Wc=o.span`
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
`,Uc=o.span`
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
`;function Kc({id:e,name:r,to:a,count:i,priority:s}){return t.jsx(Vc,{to:a,children:t.jsxs(Fr,{$ratio:"1 / 1",children:[t.jsx(Lr,{src:Or(e),alt:r,loading:s?"eager":"lazy"}),typeof i=="number"?t.jsxs(Uc,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx(Wc,{children:r})]})})}const Xc=o.div`
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
`,Zc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${je};
`,Jc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Qc=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,el=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function tl({icon:e,title:r,text:a,ctaLabel:i,ctaTo:s,dashed:c}){return t.jsxs(Xc,{"data-dashed":c?"true":"false",children:[t.jsx(Zc,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(Jc,{children:r}),a?t.jsx(Qc,{children:a}):null,i&&s?t.jsx(el,{children:t.jsx(qs,{to:s,children:i})}):null]})}const xa=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),rl=e=>`${e.toFixed(1)} km`,xo=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),al=o(be)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?ae`
          pointer-events: none;
        `:ae`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:r})=>r.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,ol=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,il=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nl=o.h3`
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
`,sl=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,cl=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,ll=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,dl=o.button`
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
`,pl=o.span`
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
`;function ul({name:e,store:r,price:a,oldPrice:i,categoryId:s,imageLabel:c,tag:n,to:p,onAdd:m,priority:g}){return t.jsxs(al,{to:p??"#",$static:!p,children:[t.jsxs(Fr,{$ratio:"1 / 1",children:[t.jsx(Lr,{src:Or(s),alt:c??e,loading:g?"eager":"lazy"}),n?t.jsx(bo,{children:t.jsx(pl,{children:n})}):null]}),t.jsxs(ol,{children:[r?t.jsx(il,{children:r}):null,t.jsx(nl,{children:e}),t.jsxs(sl,{children:[t.jsxs("div",{children:[t.jsx(cl,{children:xa(a)}),i?t.jsx(ll,{children:xa(i)}):null]}),m?t.jsx(dl,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:x=>{x.preventDefault(),x.stopPropagation(),m()},children:t.jsx(oo,{size:18,"aria-hidden":"true"})}):null]})]})]})}const ml=o(be)`
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
`,hl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,gl=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,fl=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,yl=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,bl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function xl({to:e,title:r,text:a,icon:i,tone:s="brand"}){return t.jsxs(ml,{to:e,"data-tone":s,children:[t.jsx(hl,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(gl,{children:[t.jsx(fl,{children:r}),a?t.jsx(yl,{children:a}):null]}),t.jsx(bl,{children:t.jsx(Le,{size:18,"aria-hidden":"true"})})]})}const wl=o(be)`
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
`,$l=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${je};
`,vl=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function wa({to:e,label:r,icon:a}){return t.jsxs(wl,{to:e,children:[t.jsx($l,{children:t.jsx(a,{size:18})}),t.jsx(vl,{children:r}),t.jsx(Le,{size:16,"aria-hidden":"true"})]})}const kl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Sl=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,jl=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Al=o.h2`
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
`,Cl=o.span`
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
`,El=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,zl=o(be)`
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
`;function Xt({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:s,seeAllLabel:c="Ver todos"}){return t.jsxs(kl,{children:[t.jsxs(Sl,{children:[t.jsxs(jl,{children:[t.jsx(Al,{children:e}),r?t.jsxs(Cl,{children:[a,r]}):null]}),s?t.jsxs(zl,{to:s,children:[c,t.jsx(Le,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(El,{children:i}):null]})}const Pl=o(be)`
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
`,Ml=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Rl=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Il=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_l=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Tl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,$a=o.span`
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
`,Fl=o.span`
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
`,Ll=o.span`
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
`,Ol=o.span`
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
`;function Nl({id:e,name:r,category:a,categoryId:i,to:s,distanceKm:c,rating:n,openNow:p,premium:m,etaMin:g,etaMax:x,priority:h}){return t.jsxs(Pl,{to:s,children:[t.jsxs(Fr,{$ratio:"16 / 9",children:[t.jsx(Lr,{src:Or(i),alt:a,loading:h?"eager":"lazy"}),t.jsxs(bo,{children:[p!==void 0?t.jsx(Fl,{"data-open":p,children:p?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),m?t.jsx(Ol,{children:"Destacado"}):null,n!==void 0?t.jsxs(Ll,{children:[t.jsx(pn,{size:13,"aria-hidden":"true",fill:"currentColor"}),n.toFixed(1)]}):null]}),t.jsx(Ml,{children:t.jsx(Bc,{$size:"2.75rem",$tone:Yc(e),children:Gc(r)})})]}),t.jsxs(Rl,{children:[t.jsx(Il,{children:r}),t.jsxs(_l,{children:[a,c!==void 0?` · ${rl(c)}`:""]}),t.jsxs(Tl,{children:[t.jsxs($a,{children:[t.jsx(Zi,{size:14,"aria-hidden":"true"}),"Delivery"]}),g!==void 0&&x!==void 0?t.jsxs($a,{children:[t.jsx(tn,{size:14,"aria-hidden":"true"}),g,"-",x," min"]}):null]})]})]})}const Dl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:no,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:ao,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:eo,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Cr,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Er,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Me,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:co,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Mr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:so,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Qa,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:to,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:io,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:lo,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:Rr,tone:"red"}],wo="https://lafranciago-api.lafranciago-api.workers.dev",Xe=()=>wo.length>0;class $o extends Error{constructor(r,a){super(r),this.status=a,this.name="ApiError"}}async function dt(e,r={}){const a=await fetch(`${wo}${e}`,{...r,credentials:"include",headers:{...r.body instanceof FormData?{}:{"Content-Type":"application/json"},...r.headers}});if(!a.ok){const i=await a.json().then(s=>s.error).catch(()=>null);throw new $o(i??`Error ${a.status}`,a.status)}return a.json()}const L={get:e=>dt(e),post:(e,r)=>dt(e,{method:"POST",body:r instanceof FormData?r:JSON.stringify(r??{})}),patch:(e,r)=>dt(e,{method:"PATCH",body:JSON.stringify(r??{})}),delete:e=>dt(e,{method:"DELETE"})},He={registro:e=>L.post("/auth/registro",e),login:e=>L.post("/auth/login",e),loginPanel:e=>L.post("/auth/login-panel",e),logout:()=>L.post("/auth/logout"),yo:()=>L.get("/auth/yo")},vp={crear:(e,r)=>L.post("/postulaciones",{rol:e,datos:r}),mias:()=>L.get("/postulaciones/mias")},kp={postulaciones:(e="pendiente")=>L.get(`/admin/postulaciones?estado=${e}`),revisar:(e,r,a)=>L.post(`/admin/postulaciones/${e}`,{decision:r,nota:a})},Bl={listar:(e={})=>{const r=new URLSearchParams;e.rubro&&r.set("rubro",e.rubro),e.q&&r.set("q",e.q);const a=r.toString();return L.get(`/comercios${a?`?${a}`:""}`)},detalle:e=>L.get(`/comercios/${e}`),crear:e=>L.post("/comercios",e)},Hl={portada:()=>L.get("/ofertas")},Sp={ver:()=>L.get("/mi-comercio"),crearProducto:e=>L.post("/productos",e),editarProducto:(e,r)=>L.patch(`/productos/${e}`,r),borrarProducto:e=>L.delete(`/productos/${e}`),ofertas:()=>L.get("/mi-comercio/ofertas"),crearOferta:e=>L.post("/mi-comercio/ofertas",e),borrarOferta:e=>L.delete(`/mi-comercio/ofertas/${e}`),activarOferta:(e,r)=>L.patch(`/mi-comercio/ofertas/${e}`,{activa:r})},jp={pedidos:e=>L.get(`/mi-comercio/pedidos${e?`?estado=${e}`:""}`),envios:()=>L.get("/mi-comercio/envios"),mensajes:e=>L.get(`/pedidos/${e}/mensajes`),enviarMensaje:(e,r)=>L.post(`/pedidos/${e}/mensajes`,{texto:r})},Ap={disponibles:(e,r)=>{const a=new URLSearchParams;typeof e=="number"&&typeof r=="number"&&(a.set("lat",String(e)),a.set("lon",String(r)));const i=a.toString();return L.get(`/delivery/disponibles${i?`?${i}`:""}`)},detalle:e=>L.get(`/delivery/pedidos/${e}`),tomar:(e,r,a)=>L.post(`/delivery/pedidos/${e}/tomar`,{lat:r,lon:a}),actualizarUbicacion:(e,r)=>L.post("/delivery/ubicacion",{lat:e,lon:r})},Cp={listar:()=>L.get("/pedidos"),crear:e=>L.post("/pedidos",e)},Ep={subir:(e,r)=>{const a=new FormData;return a.append("archivo",e,r),L.post("/media",a)}},lr=new Set;let dr=[],qe="inicial";const va=()=>lr.forEach(e=>e());async function ql(){if(qe==="inicial"){if(qe="cargando",!Xe()){qe="listo",va();return}try{const{ofertas:e}=await Hl.portada();dr=e}catch{dr=[]}qe="listo",va()}}function Gl(){const[,e]=u.useState(0);return u.useEffect(()=>{const r=()=>e(a=>a+1);return lr.add(r),ql(),()=>{lr.delete(r)}},[]),{ofertas:dr,cargando:qe!=="listo"}}const zp=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],Yl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:no},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Me},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:eo},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Er},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Cr},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:ao},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:co},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:Qi},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Mr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:so},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Qa},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:to},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:io},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:lo}],Vl=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],Wl=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Ue=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Me,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Er,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:Mr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:Cr,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Pp=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:0,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:1,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,saleUnit:"peso",quantity:1,subtotal:1275,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:0,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,saleUnit:"peso",quantity:3,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,saleUnit:"peso",quantity:1,subtotal:1345,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Mp=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],Rp=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],Ip=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],_p=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],Tp=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],Fp=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],Lp=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],Op=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],Np=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:un},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:on},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:nn},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:ln}],Ul=e=>{var r;return((r=Yl.find(a=>a.id===e))==null?void 0:r.icon)??Ue[0].icon};function Kl(e){return{id:e.id,name:e.nombre,premium:e.premium,category:e.rubro_nombre,categoryId:e.rubro_id,address:e.direccion,phone:e.telefono??"",hours:e.horario??"A confirmar",distanceKm:void 0,rating:void 0,openNow:!0,delivery:!0,pickup:!0,minOrder:e.minimo,summary:e.descripcion??`${e.rubro_nombre} en La Francia.`,tags:e.zona?[e.zona]:[],icon:Ul(e.rubro_id),featuredProducts:(e.destacados??[]).map(r=>({id:r.id,name:r.nombre,price:r.precio}))}}const pr=new Set;let gt=[],Ge="inicial";const ka=()=>pr.forEach(e=>e());async function Xl(){if(Ge==="inicial"){if(Ge="cargando",!Xe()){gt=Ue,Ge="listo",ka();return}try{const{comercios:e}=await Bl.listar();gt=e.map(r=>Kl(r))}catch{gt=Ue}Ge="listo",ka()}}function Zl(){const[,e]=u.useState(0);return u.useEffect(()=>{const r=()=>e(a=>a+1);return pr.add(r),Xl(),()=>{pr.delete(r)}},[]),{stores:gt,cargando:Ge!=="listo"}}const pt=["blue","green","orange","violet"],Sa={almacen:"blue",panaderia:"orange",carniceria:"violet",verduleria:"green",farmacia:"blue",kiosco:"orange"};function Jl(e){return(e.split(/\s+/).filter(a=>a.length>2).slice(0,2).map(a=>a[0]).join("")||e.slice(0,2)).toUpperCase()}const Ql=e=>{const r=e===void 0?15:Math.max(10,Math.round(e*6)+10);return{etaMin:r,etaMax:r+10}};function ed(){const{stores:e,cargando:r}=Zl(),{ofertas:a,cargando:i}=Gl(),s=u.useMemo(()=>e.map((n,p)=>{const{etaMin:m,etaMax:g}=Ql(n.distanceKm);return{id:n.id,name:n.name,premium:n.premium,category:n.category,categoryId:n.categoryId,logoLabel:Jl(n.name),etaMin:m,etaMax:g,distanceKm:n.distanceKm,rating:n.rating,delivery:n.delivery,pickup:n.pickup,openNow:n.openNow,tone:Sa[n.categoryId]??pt[p%pt.length],address:n.address,priceLevel:n.minOrder>=8e3?"$$$":n.minOrder>=4e3?"$$":"$",minOrder:n.minOrder,badge:n.premium?"Destacado":"",href:`/comercios/${n.id}`}}),[e]),c=u.useMemo(()=>a.map((n,p)=>{var x;const m=e.find(h=>h.id===n.comercioId),g=n.porcentaje??(n.precioLista>0?Math.round((n.precioLista-n.precioFinal)/n.precioLista*100):0);return{id:n.id,product:n.titulo,store:n.comercio,categoryId:n.rubroId,distanceKm:(m==null?void 0:m.distanceKm)??0,price:n.precioFinal,oldPrice:n.precioLista,discount:g,delivery:!0,pickup:!0,openNow:!0,tone:Sa[n.rubroId]??pt[p%pt.length],imageLabel:((x=n.productos[0])==null?void 0:x.nombre)??n.titulo,href:`/comercios/${n.comercioId}`}}),[a,e]);return{featuredStores:s,nearbyOffers:c,cargando:r||i}}const td=e=>xo(e),Zt=(e,...r)=>{const a=td(e);return a?xo(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},rd=e=>Vl.find(r=>r.id===e),Dp=e=>Ue.find(r=>r.id===e),Bp=e=>Ue.find(r=>r.name.toLowerCase()===e.toLowerCase()),Hp=e=>{const r=Wl.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((s,c)=>s.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=rd(e);if(a)return{kind:"offer",offer:a}},ad=5,od=.7,ja=e=>e===void 0?Number.MAX_SAFE_INTEGER:Math.floor(e/od),Ke=e=>e.distanceKm??Number.MAX_SAFE_INTEGER,Aa=e=>e.premium&&Ke(e)<=ad?0:1,Ze=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,vo=(e,r)=>{const a=Ze(e,r);if(a!==0)return a;const i=ja(e.distanceKm)-ja(r.distanceKm);if(i!==0)return i;const s=Aa(e)-Aa(r);if(s!==0)return s;const c=Ke(e)-Ke(r);return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},id=(e,r)=>Ze(e,r)||Ke(e)-Ke(r),nd=(e,r)=>Ze(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),sd=(e,r)=>Ze(e,r)||(r.rating??0)-(e.rating??0),cd=(e,r)=>Ze(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),ld={relevancia:vo,cercania:id,precio:nd,puntuacion:sd,entrega:cd};function Ca(e,r="relevancia"){return[...e].sort(ld[r]??vo)}const qp=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],dd=o.div`
  position: relative;
  min-width: 0;
`,pd=o.div`
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
`,Ea=o.button`
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

  ${je};

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
`,ut=4,ud=6,md=420,hd=.91,gd=.2,fd=.45,yd=260,bd=e=>1-(1-e)**3;function Jt({children:e,className:r,as:a,...i}){const s=u.useRef(null),c=u.useRef(null),n=u.useRef(null),[p,m]=u.useState(!1),[g,x]=u.useState(!1),h=u.useCallback(()=>{const y=s.current;if(!y)return;const{scrollLeft:v,scrollWidth:$,clientWidth:I}=y;m(v>ut),x(v+I<$-ut)},[]);u.useLayoutEffect(()=>{h()},[h,e]),u.useEffect(()=>{var $;const y=s.current;if(!y)return;const v=(($=window.matchMedia)==null?void 0:$.call(window,"(pointer: fine)").matches)??!1;y.style.cursor=v&&(p||g)?"grab":""},[p,g]),u.useEffect(()=>{var I;const y=s.current;if(!y)return;const v=C=>{const M=y.scrollWidth-y.clientWidth;if(M<=0)return;const O=Math.abs(C.deltaX)>Math.abs(C.deltaY)?C.deltaX:C.deltaY;if(O===0)return;const V=O>0?1:-1,H=y.scrollLeft<=ut,Z=y.scrollLeft>=M-ut;if(V<0&&H||V>0&&Z)return;C.preventDefault();const U=n.current??y.scrollLeft,J=Math.max(0,Math.min(U+V*yd,M));E(y,J)};y.addEventListener("wheel",v,{passive:!1}),y.addEventListener("scroll",h,{passive:!0}),y.addEventListener("scrollend",h,{passive:!0});const $=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return $==null||$.observe(y),Array.from(y.children).forEach(C=>$==null?void 0:$.observe(C)),(I=document.fonts)==null||I.ready.then(h).catch(()=>{}),()=>{y.removeEventListener("wheel",v),y.removeEventListener("scroll",h),y.removeEventListener("scrollend",h),$==null||$.disconnect(),c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null}},[h]);const f=(y,v)=>{var M;if(c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null,Math.abs(v)<fd||(M=window.matchMedia)!=null&&M.call(window,"(prefers-reduced-motion: reduce)").matches){h();return}let $=-v;const I=y.scrollWidth-y.clientWidth,C=()=>{const O=y.scrollLeft+$;if(O<=0||O>=I){y.scrollLeft=O<=0?0:I,c.current=null,h();return}if(y.scrollLeft=O,$*=hd,h(),Math.abs($)<gd){c.current=null;return}c.current=requestAnimationFrame(C)};c.current=requestAnimationFrame(C)},j=y=>{if(y.pointerType!=="mouse"||y.button!==0)return;const v=s.current;if(!v)return;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null;const $=y.clientX,I=v.scrollLeft;let C=!1,M=0,O=y.clientX,V=performance.now();const H=J=>J.preventDefault();v.addEventListener("dragstart",H);const Z=J=>{const q=J.clientX-$;if(!C){if(Math.abs(q)<ud)return;C=!0,v.style.scrollBehavior="auto",v.style.cursor="grabbing",v.style.userSelect="none"}const X=performance.now(),oe=X-V;if(oe>0){const A=(J.clientX-O)/oe*16;M=M*.7+A*.3,O=J.clientX,V=X}v.scrollLeft=I-q},U=()=>{if(document.removeEventListener("pointermove",Z),document.removeEventListener("pointerup",U),document.removeEventListener("pointercancel",U),v.removeEventListener("dragstart",H),v.style.scrollBehavior="",v.style.cursor="",v.style.userSelect="",C){f(v,M);const J=q=>{q.stopPropagation(),q.preventDefault()};v.addEventListener("click",J,{capture:!0,once:!0}),window.setTimeout(()=>v.removeEventListener("click",J,{capture:!0}),0)}h()};document.addEventListener("pointermove",Z),document.addEventListener("pointerup",U),document.addEventListener("pointercancel",U)},E=(y,v)=>{var O;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null);const $=y.scrollLeft,I=v-$;if(Math.abs(I)<1){n.current=null;return}if(n.current=v,(O=window.matchMedia)!=null&&O.call(window,"(prefers-reduced-motion: reduce)").matches){y.scrollLeft=v,n.current=null,h();return}const C=performance.now(),M=V=>{const H=V-C,Z=Math.min(H/md,1);if(y.scrollLeft=$+I*bd(Z),h(),Z<1){c.current=requestAnimationFrame(M);return}c.current=null,n.current=null};c.current=requestAnimationFrame(M)},_=y=>{const v=s.current;if(!v)return;const $=v.scrollWidth-v.clientWidth,I=v.scrollLeft+y*v.clientWidth*.7;E(v,Math.max(0,Math.min(I,$)))};return t.jsxs(dd,{className:r,children:[p?t.jsx(Ea,{type:"button","data-side":"left",onClick:()=>_(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(Ja,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:s,onPointerDown:j,...i,children:e}):t.jsx(pd,{ref:s,onPointerDown:j,...i,children:e}),g?t.jsx(Ea,{type:"button","data-side":"right",onClick:()=>_(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Le,{size:16,"aria-hidden":"true"})}):null]})}const ko="lafranciago:orden",xd=["relevancia","cercania","precio","puntuacion","entrega"],wd=()=>{try{const e=window.localStorage.getItem(ko);return xd.includes(e)?e:"relevancia"}catch{return"relevancia"}};function $d(){const[e,r]=u.useState("relevancia");u.useEffect(()=>{r(wd())},[]);const a=u.useCallback(i=>{r(i);try{window.localStorage.setItem(ko,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const vd=o(be)`
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
`,kd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,Sd=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,jd=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Ad=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Cd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,So=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ed=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,zd=o.div`
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
`;const Gp=o.div`
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
`;const Yp=o.div`
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
`;const Vp=o(Ce)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(Ls)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const Wp=o(So)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Ed)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(zd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Ns)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const Nr=o.div`
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
`,Pd=o(Nr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Md=o(Nr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Rd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Id=o.section`
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
`;const Up=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,_d=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,Td=8;function Fd(){const[e,r]=u.useState(""),{sortMode:a}=$d(),{featuredStores:i,nearbyOffers:s,cargando:c}=ed(),n=e.trim(),p=n.length>0,m=u.useMemo(()=>{const f=Dl.filter(j=>Zt(n,j.name));return p?f:f.slice(0,Td)},[p,n]),g=u.useMemo(()=>Ca(i.filter(f=>Zt(n,f.name,f.category,f.address)),a),[i,n,a]),x=u.useMemo(()=>Ca(s.filter(f=>Zt(n,f.product,f.store)),a),[s,n,a]),h=c||m.length>0||g.length>0||x.length>0;return t.jsxs(Dc,{query:e,onQueryChange:r,children:[t.jsx(Id,{children:t.jsx(Ae,{children:t.jsx(ho,{value:e,onChange:r})})}),t.jsx(Ce,{children:t.jsx(Ae,{children:t.jsxs(vd,{to:"/mandado",children:[t.jsx(kd,{children:t.jsx(We,{size:22,"aria-hidden":"true"})}),t.jsxs(Sd,{children:[t.jsx(jd,{children:"¿Necesitás algún mandado?"}),t.jsx(Ad,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(Cd,{children:t.jsx(Le,{size:18,"aria-hidden":"true"})})]})})}),p&&!h?t.jsx(Ce,{children:t.jsx(Ae,{children:t.jsx(tl,{icon:sn,title:"Sin resultados",text:`No encontramos nada para "${n}". Probá con otra palabra.`,dashed:!0})})}):null,m.length>0?t.jsx(Ce,{children:t.jsxs(Ae,{children:[t.jsx(Xt,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(Jt,{as:Md,"aria-label":"Categorías",children:m.map((f,j)=>t.jsx(Kc,{id:f.id,name:f.name,to:`/comercios?rubro=${f.id}`,priority:j<5},f.id))})]})}):null,x.length>0?t.jsx(Ce,{children:t.jsxs(Ae,{children:[t.jsx(Xt,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(Jt,{as:Nr,"aria-label":"Productos destacados",children:x.map((f,j)=>t.jsx(ul,{name:f.product,store:f.store,price:f.price,oldPrice:f.oldPrice,categoryId:f.categoryId,imageLabel:f.imageLabel,tag:f.discount>0?`-${f.discount}%`:void 0,to:f.href,priority:j<3},f.id))})]})}):null,g.length>0?t.jsx(Ce,{children:t.jsxs(Ae,{children:[t.jsx(Xt,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(Jt,{as:Pd,"aria-label":"Negocios destacados",children:g.map((f,j)=>t.jsx(Nl,{id:f.id,name:f.name,category:f.category,categoryId:f.categoryId,to:f.href,distanceKm:f.distanceKm,rating:f.rating,openNow:f.openNow,premium:f.premium,etaMin:f.etaMin,etaMax:f.etaMax,priority:j<2},f.id))})]})}):null,p?null:t.jsx(Ce,{children:t.jsx(Ae,{children:t.jsx(So,{children:t.jsxs(Rd,{children:[t.jsx(xl,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Me,tone:"brand"}),t.jsxs(_d,{children:[t.jsx(wa,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:uo}),t.jsx(wa,{to:"/registro/fletero",label:"Sumate como Fletero",icon:Rr})]})]})})})})]})}const ur=new Set;let mr=null,hr=Xe()?"cargando":"invitado",za=!1;const Ld=()=>ur.forEach(e=>e()),_e=e=>{mr=e,hr=e?"conectado":"invitado",Ld()};async function gr(){if(Xe())try{_e(await He.yo())}catch(e){(!(e instanceof $o)||e.status!==401)&&console.warn("No se pudo recuperar la sesión",e),_e(null)}}function Od(){const[e,r]=u.useState({usuario:mr,estado:hr});u.useEffect(()=>{const n=()=>r({usuario:mr,estado:hr});return ur.add(n),za||(za=!0,gr()),n(),()=>{ur.delete(n)}},[]);const a=u.useCallback(async(n,p)=>{_e(await He.login({email:n,password:p}))},[]),i=u.useCallback(async n=>{_e(await He.registro(n))},[]),s=u.useCallback(async(n,p,m)=>{_e(await He.loginPanel({email:n,password:p,rol:m}))},[]),c=u.useCallback(async()=>{try{await He.logout()}finally{_e(null)}},[]);return{usuario:e.usuario,estado:e.estado,conectado:e.estado==="conectado",entrar:a,entrarAlPanel:s,registrar:i,salir:c,refrescar:gr}}function Kp(){return new Promise((e,r)=>{const a="https://lafranciago-api.lafranciago-api.workers.dev",c=window.screenX+(window.outerWidth-480)/2,n=window.screenY+(window.outerHeight-640)/2,p=window.open(`${a}/auth/google`,"lafranciago-google",`width=480,height=640,left=${c},top=${n}`);if(!p){r(new Error("Permití las ventanas emergentes para entrar con Google."));return}let m=!1;const g=()=>{window.removeEventListener("message",x),window.clearInterval(h)};function x(f){if(f.origin!==new URL(a).origin)return;const j=f.data;(j==null?void 0:j.tipo)==="lafranciago:oauth"&&(m=!0,g(),j.exito?gr().then(()=>e()):r(new Error(j.mensaje??"No pudimos completar el ingreso.")))}window.addEventListener("message",x);const h=window.setInterval(()=>{p.closed&&!m&&(g(),r(new Error("Cerraste la ventana antes de terminar.")))},600)})}function le({children:e}){const{estado:r}=Od(),a=zo();if(!Xe())return t.jsx(t.Fragment,{children:e});if(r==="cargando")return null;if(r==="invitado"){const i=`${a.pathname}${a.search}`;return t.jsx(Qt,{to:`/ingresar?destino=${encodeURIComponent(i)}`,replace:!0})}return t.jsx(t.Fragment,{children:e})}const Nd=u.lazy(()=>Q(()=>import("./AuthScreen-B99zoeEb.js"),__vite__mapDeps([5,1,6,7,8,9,10,11])).then(e=>({default:e.AuthScreen}))),Dd=u.lazy(()=>Q(()=>import("./CategoriesScreen-CAeAcUvn.js"),__vite__mapDeps([12,1])).then(e=>({default:e.CategoriesScreen}))),Bd=u.lazy(()=>Q(()=>import("./StoresDirectoryScreen-Bv0dC3zd.js"),__vite__mapDeps([13,1])).then(e=>({default:e.StoresDirectoryScreen}))),Hd=u.lazy(()=>Q(()=>import("./StoreProfileScreen-17EIOcOJ.js"),__vite__mapDeps([14,1,15,16,17])).then(e=>({default:e.StoreProfileScreen}))),qd=u.lazy(()=>Q(()=>import("./ProductDetailScreen-Cojr30Kk.js"),__vite__mapDeps([18,1,19])).then(e=>({default:e.ProductDetailScreen}))),Gd=u.lazy(()=>Q(()=>import("./MyOrdersScreen-CO7ZhZOv.js"),__vite__mapDeps([20,1,17,21])).then(e=>({default:e.MyOrdersScreen}))),Yd=u.lazy(()=>Q(()=>import("./CartScreen-DEXlh3KS.js"),__vite__mapDeps([22,1,15,21,16,23,10])).then(e=>({default:e.CartScreen}))),Vd=u.lazy(()=>Q(()=>import("./ErrandScreen-BmwwDwCr.js"),__vite__mapDeps([24,1,25,10])).then(e=>({default:e.ErrandScreen}))),Wd=u.lazy(()=>Q(()=>import("./ErrandChatScreen-BostU4um.js"),__vite__mapDeps([26,1,27,25,28,29])).then(e=>({default:e.ErrandChatScreen}))),Ud=u.lazy(()=>Q(()=>import("./FavoritesScreen-Cj0QhGQA.js"),__vite__mapDeps([30,1])).then(e=>({default:e.FavoritesScreen}))),Kd=u.lazy(()=>Q(()=>import("./NotificationsScreen-CqkKlT1-.js"),__vite__mapDeps([31,1,32])).then(e=>({default:e.NotificationsScreen}))),Xd=u.lazy(()=>Q(()=>import("./CustomerAccountScreen-DN2hE3Cc.js"),__vite__mapDeps([33,1,19,27,28,34,10,11])).then(e=>({default:e.CustomerAccountScreen}))),Zd=u.lazy(()=>Q(()=>import("./CommerceRegistrationScreen-BGXh6Ec-.js"),__vite__mapDeps([35,1,27,36,37,38,6,34,10])).then(e=>({default:e.CommerceRegistrationScreen}))),Pa=u.lazy(()=>Q(()=>import("./DeliveryRegistrationScreen-SHV92f-Y.js"),__vite__mapDeps([39,37,1,27,6,10,34,9])).then(e=>({default:e.DeliveryRegistrationScreen}))),Jd=u.lazy(()=>Q(()=>import("./MiComercioScreen-BSiXPiZS.js"),__vite__mapDeps([40,1,15,41,7,8,29,23,2,3,36,27,38,6,32,42])).then(e=>({default:e.MiComercioScreen}))),Qd=u.lazy(()=>Q(()=>import("./CommercePanelScreen-CKZKPUAU.js"),__vite__mapDeps([43,44,19,1,32])).then(e=>({default:e.CommercePanelScreen}))),ep=u.lazy(()=>Q(()=>import("./ProductFormScreen-CDe4rW6t.js"),__vite__mapDeps([45,1,15,27,38])).then(e=>({default:e.ProductFormScreen}))),tp=u.lazy(()=>Q(()=>import("./PanelRepartidorScreen-ne3LEjFB.js"),__vite__mapDeps([46,1,4,41,7,8,29,15,47])).then(e=>({default:e.PanelRepartidorScreen}))),rp=u.lazy(()=>Q(()=>import("./DeliveryPanelScreen-CApTqpFL.js"),__vite__mapDeps([48,44,19,1])).then(e=>({default:e.DeliveryPanelScreen}))),ap=u.lazy(()=>Q(()=>import("./AdminPostulacionesScreen-CDQ_RxGk.js"),__vite__mapDeps([49,1,7,47,42])).then(e=>({default:e.AdminPostulacionesScreen}))),op=u.lazy(()=>Q(()=>import("./AdminPanelScreen-BGTlIEVz.js"),__vite__mapDeps([50,44,19,1])).then(e=>({default:e.AdminPanelScreen})));function ip(){return t.jsx(Po,{children:t.jsx(Vi,{children:t.jsx(u.Suspense,{fallback:null,children:t.jsxs(Mo,{children:[t.jsx(K,{path:"/",element:t.jsx(Fd,{})}),t.jsx(K,{path:"/ingresar",element:t.jsx(Nd,{})}),t.jsx(K,{path:"/categorias",element:t.jsx(Dd,{})}),t.jsx(K,{path:"/comercios",element:t.jsx(Bd,{})}),t.jsx(K,{path:"/comercios/:storeId",element:t.jsx(Hd,{})}),t.jsx(K,{path:"/productos/:productId",element:t.jsx(qd,{})}),t.jsx(K,{path:"/pedidos",element:t.jsx(le,{children:t.jsx(Gd,{})})}),t.jsx(K,{path:"/carrito",element:t.jsx(le,{children:t.jsx(Yd,{})})}),t.jsx(K,{path:"/mandado",element:t.jsx(le,{children:t.jsx(Vd,{})})}),t.jsx(K,{path:"/mandado/chat",element:t.jsx(le,{children:t.jsx(Wd,{})})}),t.jsx(K,{path:"/favoritos",element:t.jsx(le,{children:t.jsx(Ud,{})})}),t.jsx(K,{path:"/notificaciones",element:t.jsx(le,{children:t.jsx(Kd,{})})}),t.jsx(K,{path:"/registro/comercio",element:t.jsx(le,{children:t.jsx(Zd,{})})}),t.jsx(K,{path:"/trabaja-con-nosotros",element:t.jsx(le,{children:t.jsx(Pa,{})})}),t.jsx(K,{path:"/registro/fletero",element:t.jsx(le,{children:t.jsx(Pa,{role:"fletero"})})}),t.jsx(K,{path:"/registro/delivery",element:t.jsx(Qt,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(K,{path:"/mi-cuenta",element:t.jsx(le,{children:t.jsx(Xd,{})})}),t.jsx(K,{path:"/panel/comercio",element:t.jsx(le,{children:t.jsx(Jd,{})})}),t.jsx(K,{path:"/panel/comercio/metricas",element:t.jsx(le,{children:t.jsx(Qd,{})})}),t.jsx(K,{path:"/panel/comercio/producto",element:t.jsx(le,{children:t.jsx(ep,{})})}),t.jsx(K,{path:"/panel/repartidor",element:t.jsx(le,{children:t.jsx(tp,{})})}),t.jsx(K,{path:"/panel/repartidor/metricas",element:t.jsx(le,{children:t.jsx(rp,{})})}),t.jsx(K,{path:"/panel/admin",element:t.jsx(le,{children:t.jsx(op,{})})}),t.jsx(K,{path:"/panel/admin/postulaciones",element:t.jsx(le,{children:t.jsx(ap,{})})}),t.jsx(K,{path:"*",element:t.jsx(Qt,{to:"/",replace:!0})})]})})})})}const np=()=>{try{window.top!==window.self&&(window.top.location=window.self.location)}catch{document.documentElement.style.display="none"}};np();Do({immediate:!0});const jo=document.getElementById("root");if(!jo)throw new Error("No se encontró el nodo root");er.createRoot(jo).render(t.jsx(Re.StrictMode,{children:t.jsx(ip,{})}));export{dp as $,Or as A,bo as B,yp as C,xa as D,tl as E,mp as F,oo as G,Ji as H,pn as I,Bc as J,Gc as K,Yc as L,Dc as M,rl as N,wt as O,Gp as P,Bl as Q,ae as R,Ae as S,Dp as T,Ir as U,Mp as V,Ce as W,po as X,We as Y,cp as Z,lp as _,bp as a,pp as a0,ir as a1,up as a2,So as a3,Nr as a4,dn as a5,Hp as a6,rd as a7,Vl as a8,Wl as a9,fp as aA,ro as aB,zd as aC,Ds as aD,wp as aE,Ep as aF,vp as aG,$o as aH,Ed as aI,sr as aJ,Sp as aK,jp as aL,Yp as aM,Ip as aN,_p as aO,Tp as aP,un as aQ,cn as aR,Ap as aS,Fp as aT,Lp as aU,nn as aV,kp as aW,Op as aX,Np as aY,Bp as aa,Me as ab,qs as ac,Hs as ad,Le as ae,Up as af,je as ag,Tn as ah,gp as ai,Rr as aj,hp as ak,xp as al,vn as am,ps as an,Pp as ao,Cp as ap,Zi as aq,Ht as ar,zr as as,Ue as at,Rp as au,xt as av,gn as aw,$p as ax,uo as ay,Wp as az,Vp as b,z as c,Os as d,Ns as e,Zl as f,Yl as g,Xe as h,Kp as i,t as j,Id as k,ho as l,Zt as m,Xt as n,Kc as o,sn as p,o as q,$d as r,Ca as s,Jt as t,Od as u,zp as v,qp as w,Nl as x,Fr as y,Lr as z};
