const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-wS-15CBc.js","assets/react-D_B_6qYb.js","assets/AddressMapStyled-DYh3Y63T.js","assets/AddressMapStyled-CIGW-MKW.css","assets/useCurrentPosition-BYw6bfYw.js","assets/AuthScreen-583S2Y7_.js","assets/formStyles-DbJHwuOh.js","assets/AuthScreenStyled-BGWVG8lE.js","assets/PanelLoginDialogStyled-BE5ZapMF.js","assets/mail-BDhrD5dq.js","assets/shield-check-BPkkjmI_.js","assets/log-in-CoDaR60F.js","assets/CategoriesScreen-CW4Vwd05.js","assets/StoresDirectoryScreen-C95-tt09.js","assets/StoreProfileScreen-CSvNccl4.js","assets/saleUnits-CLP-TCsg.js","assets/minus-DiDHUiM0.js","assets/clock-3-DLM7TAwr.js","assets/ProductDetailScreen-DqZYfcKC.js","assets/SettingsList-DE4s8-FF.js","assets/MyOrdersScreen-Cnj4-8ld.js","assets/ordersStore-BL0kC9bt.js","assets/CartScreen-BpTodoUv.js","assets/ConfirmDialog-z_nvpMFM.js","assets/ErrandScreen-MC30RKDI.js","assets/errandStore-Bion9qKH.js","assets/ErrandChatScreen-Cav7wmEu.js","assets/mediaService-D2_VAu2k.js","assets/camera-B8Cj0OFE.js","assets/send-CZx0C90I.js","assets/FavoritesScreen-CK5aomQ-.js","assets/NotificationsScreen-C6LbKYw2.js","assets/badge-percent-Dh_VdZdJ.js","assets/CustomerAccountScreen-DN3uWmdP.js","assets/phone-Cj5qsZUk.js","assets/CommerceRegistrationScreen-BIFWtj66.js","assets/useMediaUpload-CTMFYLii.js","assets/FileField-C_RsAEZM.js","assets/ProductFormScreenStyled-kQiZla3s.js","assets/DeliveryRegistrationScreen-gboyLEnU.js","assets/MiComercioScreen-CvKlaqDK.js","assets/ChatPedidoDialog-Cpi5axBV.js","assets/message-square-DS-h4O2S.js","assets/CommercePanelScreen-B6Ip4wwf.js","assets/MetricTile-CBI6M86n.js","assets/ProductFormScreen-Dlcrw8pO.js","assets/PanelRepartidorScreen-OsZMDfMK.js","assets/refresh-cw-qSKUkEMv.js","assets/DeliveryPanelScreen-Cu7SHeqZ.js","assets/AdminPostulacionesScreen-DYVlIkyp.js","assets/AdminPanelScreen-Dh1AvJ9K.js"])))=>i.map(i=>d[i]);
import{r as m,a as go,g as fo,R as Ie,L as be,N as nr,u as yo,b as bo,c as Vt,H as xo,d as wo,e as U}from"./react-D_B_6qYb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();var xa={exports:{}},ht={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=m,vo=Symbol.for("react.element"),ko=Symbol.for("react.fragment"),So=Object.prototype.hasOwnProperty,jo=$o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Co={key:!0,ref:!0,__self:!0,__source:!0};function wa(e,r,a){var i,n={},s=null,c=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(c=r.ref);for(i in r)So.call(r,i)&&!Co.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:vo,type:e,key:s,ref:c,props:n,_owner:jo.current}}ht.Fragment=ko;ht.jsx=wa;ht.jsxs=wa;xa.exports=ht;var t=xa.exports,Kt={},Mr=go;Kt.createRoot=Mr.createRoot,Kt.hydrateRoot=Mr.hydrateRoot;const Ao="modulepreload",Eo=function(e){return"/LaFranciaGO/"+e},Ir={},Q=function(r,a,i){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));n=Promise.allSettled(a.map(h=>{if(h=Eo(h),h in Ir)return;Ir[h]=!0;const p=h.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":Ao,p||(g.as="script"),g.crossOrigin="",g.href=h,u&&g.setAttribute("nonce",u),document.head.appendChild(g),p)return new Promise((C,A)=>{g.addEventListener("load",C),g.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return n.then(c=>{for(const u of c||[])u.status==="rejected"&&s(u.reason);return r().catch(s)})};function zo(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:n,onRegisteredSW:s,onRegisterError:c}=e;let u,h;const p=async(g=!0)=>{await h};async function y(){if("serviceWorker"in navigator){if(u=await Q(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(g=>{c==null||c(g)}),!u)return;u.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),u.addEventListener("installed",g=>{g.isUpdate||i==null||i()}),u.register({immediate:r}).then(g=>{s?s("/LaFranciaGO/sw.js",g):n==null||n(g)}).catch(g=>{c==null||c(g)})}}return h=y(),p}var $a={exports:{}},V={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.transitional.element"),cr=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),yt=Symbol.for("react.profiler"),bt=Symbol.for("react.consumer"),xt=Symbol.for("react.context"),wt=Symbol.for("react.forward_ref"),$t=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Po=Symbol.for("react.view_transition"),Mo=Symbol.for("react.client.reference");function ge(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case sr:switch(e=e.type,e){case gt:case yt:case ft:case $t:case vt:case Po:return e;default:switch(e=e&&e.$$typeof,e){case xt:case wt:case St:case kt:return e;case bt:return e;default:return r}}case cr:return r}}}V.ContextConsumer=bt;V.ContextProvider=xt;V.Element=sr;V.ForwardRef=wt;V.Fragment=gt;V.Lazy=St;V.Memo=kt;V.Portal=cr;V.Profiler=yt;V.StrictMode=ft;V.Suspense=$t;V.SuspenseList=vt;V.isContextConsumer=function(e){return ge(e)===bt};V.isContextProvider=function(e){return ge(e)===xt};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr};V.isForwardRef=function(e){return ge(e)===wt};V.isFragment=function(e){return ge(e)===gt};V.isLazy=function(e){return ge(e)===St};V.isMemo=function(e){return ge(e)===kt};V.isPortal=function(e){return ge(e)===cr};V.isProfiler=function(e){return ge(e)===yt};V.isStrictMode=function(e){return ge(e)===ft};V.isSuspense=function(e){return ge(e)===$t};V.isSuspenseList=function(e){return ge(e)===vt};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gt||e===yt||e===ft||e===$t||e===vt||typeof e=="object"&&e!==null&&(e.$$typeof===St||e.$$typeof===kt||e.$$typeof===xt||e.$$typeof===bt||e.$$typeof===wt||e.$$typeof===Mo||e.getModuleId!==void 0)};V.typeOf=ge;$a.exports=V;var va=$a.exports;function Io(e){function r(v,l,b,k,d){for(var N=0,x=0,ee=0,O=0,q,I,ne=0,ue=0,T,pe=T=q=0,D=0,se=0,Ne=0,ce=0,Ke=b.length,Oe=Ke-1,fe,P="",re="",Tt="",Ft="",ve;D<Ke;){if(I=b.charCodeAt(D),D===Oe&&x+O+ee+N!==0&&(x!==0&&(I=x===47?10:47),O=ee=N=0,Ke++,Oe++),x+O+ee+N===0){if(D===Oe&&(0<se&&(P=P.replace(C,"")),0<P.trim().length)){switch(I){case 32:case 9:case 59:case 13:case 10:break;default:P+=b.charAt(D)}I=59}switch(I){case 123:for(P=P.trim(),q=P.charCodeAt(0),T=1,ce=++D;D<Ke;){switch(I=b.charCodeAt(D)){case 123:T++;break;case 125:T--;break;case 47:switch(I=b.charCodeAt(D+1)){case 42:case 47:e:{for(pe=D+1;pe<Oe;++pe)switch(b.charCodeAt(pe)){case 47:if(I===42&&b.charCodeAt(pe-1)===42&&D+2!==pe){D=pe+1;break e}break;case 10:if(I===47){D=pe+1;break e}}D=pe}}break;case 91:I++;case 40:I++;case 34:case 39:for(;D++<Oe&&b.charCodeAt(D)!==I;);}if(T===0)break;D++}switch(T=b.substring(ce,D),q===0&&(q=(P=P.replace(g,"").trim()).charCodeAt(0)),q){case 64:switch(0<se&&(P=P.replace(C,"")),I=P.charCodeAt(1),I){case 100:case 109:case 115:case 45:se=l;break;default:se=_}if(T=r(l,se,T,I,d+1),ce=T.length,0<de&&(se=a(_,P,Ne),ve=u(3,T,se,l,X,H,ce,I,d,k),P=se.join(""),ve!==void 0&&(ce=(T=ve.trim()).length)===0&&(I=0,T="")),0<ce)switch(I){case 115:P=P.replace(F,c);case 100:case 109:case 45:T=P+"{"+T+"}";break;case 107:P=P.replace(w,"$1 $2"),T=P+"{"+T+"}",T=S===1||S===2&&s("@"+T,3)?"@-webkit-"+T+"@"+T:"@"+T;break;default:T=P+T,k===112&&(T=(re+=T,""))}else T="";break;default:T=r(l,a(l,P,Ne),T,k,d+1)}Tt+=T,T=Ne=se=pe=q=0,P="",I=b.charCodeAt(++D);break;case 125:case 59:if(P=(0<se?P.replace(C,""):P).trim(),1<(ce=P.length))switch(pe===0&&(q=P.charCodeAt(0),q===45||96<q&&123>q)&&(ce=(P=P.replace(" ",":")).length),0<de&&(ve=u(1,P,l,v,X,H,re.length,k,d,k))!==void 0&&(ce=(P=ve.trim()).length)===0&&(P="\0\0"),q=P.charCodeAt(0),I=P.charCodeAt(1),q){case 0:break;case 64:if(I===105||I===99){Ft+=P+b.charAt(D);break}default:P.charCodeAt(ce-1)!==58&&(re+=n(P,q,I,P.charCodeAt(2)))}Ne=se=pe=q=0,P="",I=b.charCodeAt(++D)}}switch(I){case 13:case 10:x===47?x=0:1+q===0&&k!==107&&0<P.length&&(se=1,P+="\0"),0<de*$e&&u(0,P,l,v,X,H,re.length,k,d,k),H=1,X++;break;case 59:case 125:if(x+O+ee+N===0){H++;break}default:switch(H++,fe=b.charAt(D),I){case 9:case 32:if(O+N+x===0)switch(ne){case 44:case 58:case 9:case 32:fe="";break;default:I!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:O+x+N===0&&(se=Ne=1,fe="\f"+fe);break;case 108:if(O+x+N+oe===0&&0<pe)switch(D-pe){case 2:ne===112&&b.charCodeAt(D-3)===58&&(oe=ne);case 8:ue===111&&(oe=ue)}break;case 58:O+x+N===0&&(pe=D);break;case 44:x+ee+O+N===0&&(se=1,fe+="\r");break;case 34:case 39:x===0&&(O=O===I?0:O===0?I:O);break;case 91:O+x+ee===0&&N++;break;case 93:O+x+ee===0&&N--;break;case 41:O+x+N===0&&ee--;break;case 40:if(O+x+N===0){if(q===0)switch(2*ne+3*ue){case 533:break;default:q=1}ee++}break;case 64:x+ee+O+N+pe+T===0&&(T=1);break;case 42:case 47:if(!(0<O+N+ee))switch(x){case 0:switch(2*I+3*b.charCodeAt(D+1)){case 235:x=47;break;case 220:ce=D,x=42}break;case 42:I===47&&ne===42&&ce+2!==D&&(b.charCodeAt(ce+2)===33&&(re+=b.substring(ce,D+1)),fe="",x=0)}}x===0&&(P+=fe)}ue=ne,ne=I,D++}if(ce=re.length,0<ce){if(se=l,0<de&&(ve=u(2,re,se,v,X,H,ce,k,d,k),ve!==void 0&&(re=ve).length===0))return Ft+re+Tt;if(re=se.join(",")+"{"+re+"}",S*oe!==0){switch(S!==2||s(re,2)||(oe=0),oe){case 111:re=re.replace(j,":-moz-$1")+re;break;case 112:re=re.replace(R,"::-webkit-input-$1")+re.replace(R,"::-moz-$1")+re.replace(R,":-ms-input-$1")+re}oe=0}}return Ft+re+Tt}function a(v,l,b){var k=l.trim().split(f);l=k;var d=k.length,N=v.length;switch(N){case 0:case 1:var x=0;for(v=N===0?"":v[0]+" ";x<d;++x)l[x]=i(v,l[x],b).trim();break;default:var ee=x=0;for(l=[];x<d;++x)for(var O=0;O<N;++O)l[ee++]=i(v[O]+" ",k[x],b).trim()}return l}function i(v,l,b){var k=l.charCodeAt(0);switch(33>k&&(k=(l=l.trim()).charCodeAt(0)),k){case 38:return l.replace($,"$1"+v.trim());case 58:return v.trim()+l.replace($,"$1"+v.trim());default:if(0<1*b&&0<l.indexOf("\f"))return l.replace($,(v.charCodeAt(0)===58?"":"$1")+v.trim())}return v+l}function n(v,l,b,k){var d=v+";",N=2*l+3*b+4*k;if(N===944){v=d.indexOf(":",9)+1;var x=d.substring(v,d.length-1).trim();return x=d.substring(0,v).trim()+x+";",S===1||S===2&&s(x,1)?"-webkit-"+x+x:x}if(S===0||S===2&&!s(d,1))return d;switch(N){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(J,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return x=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+d+"-ms-flex-pack"+x+d;case 1005:return E.test(d)?d.replace(A,":-webkit-")+d.replace(A,":-moz-")+d:d;case 1e3:switch(x=d.substring(13).trim(),l=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(l)){case 226:x=d.replace(M,"tb");break;case 232:x=d.replace(M,"tb-rl");break;case 220:x=d.replace(M,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+x+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(l=(d=v).length-10,x=(d.charCodeAt(l)===33?d.substring(0,l):d).substring(v.indexOf(":",7)+1).trim(),N=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:d=d.replace(x,"-webkit-"+x)+";"+d;break;case 207:case 102:d=d.replace(x,"-webkit-"+(102<N?"inline-":"")+"box")+";"+d.replace(x,"-webkit-"+x)+";"+d.replace(x,"-ms-"+x+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return x=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+x+"-ms-flex-"+x+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(B,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(B,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(K.test(v)===!0)return(x=v.substring(v.indexOf(":")+1)).charCodeAt(0)===115?n(v.replace("stretch","fill-available"),l,b,k).replace(":fill-available",":stretch"):d.replace(x,"-webkit-"+x)+d.replace(x,"-moz-"+x.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,b+k===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(L,"$1-webkit-$2")+d}return d}function s(v,l){var b=v.indexOf(l===1?":":"{"),k=v.substring(0,l!==3?b:10);return b=v.substring(b+1,v.length-1),we(l!==2?k:k.replace(Z,"$1"),b,l)}function c(v,l){var b=n(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return b!==l+";"?b.replace(Y," or ($1)").substring(4):"("+l+")"}function u(v,l,b,k,d,N,x,ee,O,q){for(var I=0,ne=l,ue;I<de;++I)switch(ue=te[I].call(y,v,ne,b,k,d,N,x,ee,O,q)){case void 0:case!1:case!0:case null:break;default:ne=ue}if(ne!==l)return ne}function h(v){switch(v){case void 0:case null:de=te.length=0;break;default:if(typeof v=="function")te[de++]=v;else if(typeof v=="object")for(var l=0,b=v.length;l<b;++l)h(v[l]);else $e=!!v|0}return h}function p(v){return v=v.prefix,v!==void 0&&(we=null,v?typeof v!="function"?S=1:(S=2,we=v):S=0),p}function y(v,l){var b=v;if(33>b.charCodeAt(0)&&(b=b.trim()),xe=b,b=[xe],0<de){var k=u(-1,l,b,b,X,H,0,0,0,0);k!==void 0&&typeof k=="string"&&(l=k)}var d=r(_,b,l,0,0);return 0<de&&(k=u(-2,d,b,b,X,H,d.length,0,0,0),k!==void 0&&(d=k)),xe="",oe=0,H=X=1,d}var g=/^\0+/g,C=/[\0\r\f]/g,A=/: */g,E=/zoo|gra/,L=/([,: ])(transform)/g,f=/,\r+?/g,$=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,j=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,F=/\(\s*(.*)\s*\)/g,Y=/([\s\S]*?);/g,B=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,H=1,X=1,oe=0,S=1,_=[],te=[],de=0,we=null,$e=0,xe="";return y.use=h,y.set=p,e!==void 0&&p(e),y}var Ro={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Lo(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var _o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Rr=Lo(function(e){return _o.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ka={exports:{}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,lr=ie?Symbol.for("react.element"):60103,dr=ie?Symbol.for("react.portal"):60106,jt=ie?Symbol.for("react.fragment"):60107,Ct=ie?Symbol.for("react.strict_mode"):60108,At=ie?Symbol.for("react.profiler"):60114,Et=ie?Symbol.for("react.provider"):60109,zt=ie?Symbol.for("react.context"):60110,pr=ie?Symbol.for("react.async_mode"):60111,Pt=ie?Symbol.for("react.concurrent_mode"):60111,Mt=ie?Symbol.for("react.forward_ref"):60112,It=ie?Symbol.for("react.suspense"):60113,To=ie?Symbol.for("react.suspense_list"):60120,Rt=ie?Symbol.for("react.memo"):60115,Lt=ie?Symbol.for("react.lazy"):60116,Fo=ie?Symbol.for("react.block"):60121,No=ie?Symbol.for("react.fundamental"):60117,Oo=ie?Symbol.for("react.responder"):60118,Do=ie?Symbol.for("react.scope"):60119;function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case lr:switch(e=e.type,e){case pr:case Pt:case jt:case At:case Ct:case It:return e;default:switch(e=e&&e.$$typeof,e){case zt:case Mt:case Lt:case Rt:case Et:return e;default:return r}}case dr:return r}}}function Sa(e){return me(e)===Pt}G.AsyncMode=pr;G.ConcurrentMode=Pt;G.ContextConsumer=zt;G.ContextProvider=Et;G.Element=lr;G.ForwardRef=Mt;G.Fragment=jt;G.Lazy=Lt;G.Memo=Rt;G.Portal=dr;G.Profiler=At;G.StrictMode=Ct;G.Suspense=It;G.isAsyncMode=function(e){return Sa(e)||me(e)===pr};G.isConcurrentMode=Sa;G.isContextConsumer=function(e){return me(e)===zt};G.isContextProvider=function(e){return me(e)===Et};G.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr};G.isForwardRef=function(e){return me(e)===Mt};G.isFragment=function(e){return me(e)===jt};G.isLazy=function(e){return me(e)===Lt};G.isMemo=function(e){return me(e)===Rt};G.isPortal=function(e){return me(e)===dr};G.isProfiler=function(e){return me(e)===At};G.isStrictMode=function(e){return me(e)===Ct};G.isSuspense=function(e){return me(e)===It};G.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jt||e===Pt||e===At||e===Ct||e===It||e===To||typeof e=="object"&&e!==null&&(e.$$typeof===Lt||e.$$typeof===Rt||e.$$typeof===Et||e.$$typeof===zt||e.$$typeof===Mt||e.$$typeof===No||e.$$typeof===Oo||e.$$typeof===Do||e.$$typeof===Fo)};G.typeOf=me;ka.exports=G;var Bo=ka.exports,ur=Bo,Ho={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Go={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ja={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mr={};mr[ur.ForwardRef]=Go;mr[ur.Memo]=ja;function Lr(e){return ur.isMemo(e)?ja:mr[e.$$typeof]||Ho}var Yo=Object.defineProperty,Vo=Object.getOwnPropertyNames,_r=Object.getOwnPropertySymbols,Ko=Object.getOwnPropertyDescriptor,Wo=Object.getPrototypeOf,Tr=Object.prototype;function Ca(e,r,a){if(typeof r!="string"){if(Tr){var i=Wo(r);i&&i!==Tr&&Ca(e,i,a)}var n=Vo(r);_r&&(n=n.concat(_r(r)));for(var s=Lr(e),c=Lr(r),u=0;u<n.length;++u){var h=n[u];if(!qo[h]&&!(a&&a[h])&&!(c&&c[h])&&!(s&&s[h])){var p=Ko(r,h);try{Yo(e,h,p)}catch{}}}}return e}var Uo=Ca;const Xo=fo(Uo);var he={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var Fr=function(e,r){for(var a=[e[0]],i=0,n=r.length;i<n;i+=1)a.push(r[i],e[i+1]);return a},Wt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!va.typeOf(e)},lt=Object.freeze([]),Se=Object.freeze({});function _e(e){return typeof e=="function"}function Nr(e){return e.displayName||e.name||"Component"}function hr(e){return e&&typeof e.styledComponentId=="string"}var Te=typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_ATTR||he.SC_ATTR)||"data-styled",gr=typeof window<"u"&&"HTMLElement"in window,Zo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&he.REACT_APP_SC_DISABLE_SPEEDY!==""?he.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&he.REACT_APP_SC_DISABLE_SPEEDY:he.SC_DISABLE_SPEEDY!==void 0&&he.SC_DISABLE_SPEEDY!==""&&he.SC_DISABLE_SPEEDY!=="false"&&he.SC_DISABLE_SPEEDY)),Jo={};function ze(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var Qo=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,n=0;n<a;n++)i+=this.groupSizes[n];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,c=s;a>=c;)(c<<=1)<0&&ze(16,""+a);this.groupSizes=new Uint32Array(c),this.groupSizes.set(n),this.length=c;for(var u=s;u<c;u++)this.groupSizes[u]=0}for(var h=this.indexOfGroup(a+1),p=0,y=i.length;p<y;p++)this.tag.insertRule(h,i[p])&&(this.groupSizes[a]++,h++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],n=this.indexOfGroup(a),s=n+i;this.groupSizes[a]=0;for(var c=n;c<s;c++)this.tag.deleteRule(n)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var n=this.groupSizes[a],s=this.indexOfGroup(a),c=s+n,u=s;u<c;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),st=new Map,dt=new Map,qe=1,We=function(e){if(st.has(e))return st.get(e);for(;dt.has(qe);)qe++;var r=qe++;return st.set(e,r),dt.set(r,e),r},ei=function(e){return dt.get(e)},ti=function(e,r){r>=qe&&(qe=r+1),st.set(e,r),dt.set(r,e)},ri="style["+Te+'][data-styled-version="5.3.11"]',ai=new RegExp("^"+Te+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),oi=function(e,r,a){for(var i,n=a.split(","),s=0,c=n.length;s<c;s++)(i=n[s])&&e.registerName(r,i)},ii=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],n=0,s=a.length;n<s;n++){var c=a[n].trim();if(c){var u=c.match(ai);if(u){var h=0|parseInt(u[1],10),p=u[2];h!==0&&(ti(p,h),oi(e,p,u[3]),e.getTag().insertRules(h,i)),i.length=0}else i.push(c)}}},ni=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Aa=function(e){var r=document.head,a=e||r,i=document.createElement("style"),n=function(u){for(var h=u.childNodes,p=h.length;p>=0;p--){var y=h[p];if(y&&y.nodeType===1&&y.hasAttribute(Te))return y}}(a),s=n!==void 0?n.nextSibling:null;i.setAttribute(Te,"active"),i.setAttribute("data-styled-version","5.3.11");var c=ni();return c&&i.setAttribute("nonce",c),a.insertBefore(i,s),i},si=function(){function e(a){var i=this.element=Aa(a);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var s=document.styleSheets,c=0,u=s.length;c<u;c++){var h=s[c];if(h.ownerNode===n)return h}ze(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),ci=function(){function e(a){var i=this.element=Aa(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var n=document.createTextNode(i),s=this.nodes[a];return this.element.insertBefore(n,s||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),li=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),Or=gr,di={isServer:!gr,useCSSOMInjection:!Zo},pt=function(){function e(a,i,n){a===void 0&&(a=Se),i===void 0&&(i={}),this.options=ye({},di,{},a),this.gs=i,this.names=new Map(n),this.server=!!a.isServer,!this.server&&gr&&Or&&(Or=!1,function(s){for(var c=document.querySelectorAll(ri),u=0,h=c.length;u<h;u++){var p=c[u];p&&p.getAttribute(Te)!=="active"&&(ii(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}e.registerId=function(a){return We(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,s=i.useCSSOMInjection,c=i.target,a=n?new li(c):s?new si(c):new ci(c),new Qo(a)));var a,i,n,s,c},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(We(a),this.names.has(a))this.names.get(a).add(i);else{var n=new Set;n.add(i),this.names.set(a,n)}},r.insertRules=function(a,i,n){this.registerName(a,i),this.getTag().insertRules(We(a),n)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(We(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),n=i.length,s="",c=0;c<n;c++){var u=ei(c);if(u!==void 0){var h=a.names.get(u),p=i.getGroup(c);if(h&&p&&h.size){var y=Te+".g"+c+'[id="'+u+'"]',g="";h!==void 0&&h.forEach(function(C){C.length>0&&(g+=C+",")}),s+=""+p+y+'{content:"'+g+`"}/*!sc*/
`}}}return s}(this)},e}(),pi=/(a)(d)/gi,Dr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ut(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=Dr(r%52)+a;return(Dr(r%52)+a).replace(pi,"$1-$2")}var Re=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},Ea=function(e){return Re(5381,e)};function za(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(_e(a)&&!hr(a))return!1}return!0}var ui=Ea("5.3.11"),mi=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&za(r),this.componentId=a,this.baseHash=Re(ui,a),this.baseStyle=i,pt.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var n=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))s.push(this.staticRulesId);else{var c=Pe(this.rules,r,a,i).join(""),u=Ut(Re(this.baseHash,c)>>>0);if(!a.hasNameForId(n,u)){var h=i(c,"."+u,void 0,n);a.insertRules(n,u,h)}s.push(u),this.staticRulesId=u}else{for(var p=this.rules.length,y=Re(this.baseHash,i.hash),g="",C=0;C<p;C++){var A=this.rules[C];if(typeof A=="string")g+=A;else if(A){var E=Pe(A,r,a,i),L=Array.isArray(E)?E.join(""):E;y=Re(y,L+C),g+=L}}if(g){var f=Ut(y>>>0);if(!a.hasNameForId(n,f)){var $=i(g,"."+f,void 0,n);a.insertRules(n,f,$)}s.push(f)}}return s.join(" ")},e}(),hi=/^\s*\/\/.*$/gm,gi=[":","[",".","#"];function fi(e){var r,a,i,n,s=Se,c=s.options,u=c===void 0?Se:c,h=s.plugins,p=h===void 0?lt:h,y=new Io(u),g=[],C=function(L){function f($){if($)try{L($+"}")}catch{}}return function($,w,R,j,M,F,Y,B,Z,K){switch($){case 1:if(Z===0&&w.charCodeAt(0)===64)return L(w+";"),"";break;case 2:if(B===0)return w+"/*|*/";break;case 3:switch(B){case 102:case 112:return L(R[0]+w),"";default:return w+(K===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(f)}}}(function(L){g.push(L)}),A=function(L,f,$){return f===0&&gi.indexOf($[a.length])!==-1||$.match(n)?L:"."+r};function E(L,f,$,w){w===void 0&&(w="&");var R=L.replace(hi,""),j=f&&$?$+" "+f+" { "+R+" }":R;return r=w,a=f,i=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),y($||!f?"":f,j)}return y.use([].concat(p,[function(L,f,$){L===2&&$.length&&$[0].lastIndexOf(a)>0&&($[0]=$[0].replace(i,A))},C,function(L){if(L===-2){var f=g;return g=[],f}}])),E.hash=p.length?p.reduce(function(L,f){return f.name||ze(15),Re(L,f.name)},5381).toString():"",E}var Pa=Ie.createContext();Pa.Consumer;var Ma=Ie.createContext(),yi=(Ma.Consumer,new pt),Xt=fi();function Ia(){return m.useContext(Pa)||yi}function Ra(){return m.useContext(Ma)||Xt}var La=function(){function e(r,a){var i=this;this.inject=function(n,s){s===void 0&&(s=Xt);var c=i.name+s.hash;n.hasNameForId(i.id,c)||n.insertRules(i.id,c,s(i.rules,c,"@keyframes"))},this.toString=function(){return ze(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=Xt),this.name+r.hash},e}(),bi=/([A-Z])/,xi=/([A-Z])/g,wi=/^ms-/,$i=function(e){return"-"+e.toLowerCase()};function Br(e){return bi.test(e)?e.replace(xi,$i).replace(wi,"-ms-"):e}var Hr=function(e){return e==null||e===!1||e===""};function Pe(e,r,a,i){if(Array.isArray(e)){for(var n,s=[],c=0,u=e.length;c<u;c+=1)(n=Pe(e[c],r,a,i))!==""&&(Array.isArray(n)?s.push.apply(s,n):s.push(n));return s}if(Hr(e))return"";if(hr(e))return"."+e.styledComponentId;if(_e(e)){if(typeof(p=e)!="function"||p.prototype&&p.prototype.isReactComponent||!r)return e;var h=e(r);return Pe(h,r,a,i)}var p;return e instanceof La?a?(e.inject(a,i),e.getName(i)):e:Wt(e)?function y(g,C){var A,E,L=[];for(var f in g)g.hasOwnProperty(f)&&!Hr(g[f])&&(Array.isArray(g[f])&&g[f].isCss||_e(g[f])?L.push(Br(f)+":",g[f],";"):Wt(g[f])?L.push.apply(L,y(g[f],f)):L.push(Br(f)+": "+(A=f,(E=g[f])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||A in Ro||A.startsWith("--")?String(E).trim():E+"px")+";"));return C?[C+" {"].concat(L,["}"]):L}(e):e.toString()}var qr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ae(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return _e(e)||Wt(e)?qr(Pe(Fr(lt,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:qr(Pe(Fr(e,a)))}var _a=function(e,r,a){return a===void 0&&(a=Se),e.theme!==a.theme&&e.theme||r||a.theme},vi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ki=/(^-|-$)/g;function Nt(e){return e.replace(vi,"-").replace(ki,"")}var fr=function(e){return Ut(Ea(e)>>>0)};function Ue(e){return typeof e=="string"&&!0}var Zt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Si=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ji(e,r,a){var i=e[a];Zt(r)&&Zt(i)?Ta(i,r):e[a]=r}function Ta(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var n=0,s=a;n<s.length;n++){var c=s[n];if(Zt(c))for(var u in c)Si(u)&&ji(e,c[u],u)}return e}var Ge=Ie.createContext();Ge.Consumer;function Ci(e){var r=m.useContext(Ge),a=m.useMemo(function(){return function(i,n){if(!i)return ze(14);if(_e(i)){var s=i(n);return s}return Array.isArray(i)||typeof i!="object"?ze(8):n?ye({},n,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Ie.createElement(Ge.Provider,{value:a},e.children):null}var Ot={};function Fa(e,r,a){var i=hr(e),n=!Ue(e),s=r.attrs,c=s===void 0?lt:s,u=r.componentId,h=u===void 0?function(w,R){var j=typeof w!="string"?"sc":Nt(w);Ot[j]=(Ot[j]||0)+1;var M=j+"-"+fr("5.3.11"+j+Ot[j]);return R?R+"-"+M:M}(r.displayName,r.parentComponentId):u,p=r.displayName,y=p===void 0?function(w){return Ue(w)?"styled."+w:"Styled("+Nr(w)+")"}(e):p,g=r.displayName&&r.componentId?Nt(r.displayName)+"-"+r.componentId:r.componentId||h,C=i&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=r.shouldForwardProp;i&&e.shouldForwardProp&&(A=r.shouldForwardProp?function(w,R,j){return e.shouldForwardProp(w,R,j)&&r.shouldForwardProp(w,R,j)}:e.shouldForwardProp);var E,L=new mi(a,g,i?e.componentStyle:void 0),f=L.isStatic&&c.length===0,$=function(w,R){return function(j,M,F,Y){var B=j.attrs,Z=j.componentStyle,K=j.defaultProps,J=j.foldedComponentIds,H=j.shouldForwardProp,X=j.styledComponentId,oe=j.target,S=function(k,d,N){k===void 0&&(k=Se);var x=ye({},d,{theme:k}),ee={};return N.forEach(function(O){var q,I,ne,ue=O;for(q in _e(ue)&&(ue=ue(x)),ue)x[q]=ee[q]=q==="className"?(I=ee[q],ne=ue[q],I&&ne?I+" "+ne:I||ne):ue[q]}),[x,ee]}(_a(M,m.useContext(Ge),K)||Se,M,B),_=S[0],te=S[1],de=function(k,d,N,x){var ee=Ia(),O=Ra(),q=d?k.generateAndInjectStyles(Se,ee,O):k.generateAndInjectStyles(N,ee,O);return q}(Z,Y,_),we=F,$e=te.$as||M.$as||te.as||M.as||oe,xe=Ue($e),v=te!==M?ye({},M,{},te):M,l={};for(var b in v)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?l.as=v[b]:(H?H(b,Rr,$e):!xe||Rr(b))&&(l[b]=v[b]));return M.style&&te.style!==M.style&&(l.style=ye({},M.style,{},te.style)),l.className=Array.prototype.concat(J,X,de!==X?de:null,M.className,te.className).filter(Boolean).join(" "),l.ref=we,m.createElement($e,l)}(E,w,R,f)};return $.displayName=y,(E=Ie.forwardRef($)).attrs=C,E.componentStyle=L,E.displayName=y,E.shouldForwardProp=A,E.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):lt,E.styledComponentId=g,E.target=i?e.target:e,E.withComponent=function(w){var R=r.componentId,j=function(F,Y){if(F==null)return{};var B,Z,K={},J=Object.keys(F);for(Z=0;Z<J.length;Z++)B=J[Z],Y.indexOf(B)>=0||(K[B]=F[B]);return K}(r,["componentId"]),M=R&&R+"-"+(Ue(w)?w:Nt(Nr(w)));return Fa(w,ye({},j,{attrs:C,componentId:M}),a)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=i?Ta({},e.defaultProps,w):w}}),Object.defineProperty(E,"toString",{value:function(){return"."+E.styledComponentId}}),n&&Xo(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var o=function(e){return function r(a,i,n){if(n===void 0&&(n=Se),!va.isValidElementType(i))return ze(1,String(i));var s=function(){return a(i,n,ae.apply(void 0,arguments))};return s.withConfig=function(c){return r(a,i,ye({},n,{},c))},s.attrs=function(c){return r(a,i,ye({},n,{attrs:Array.prototype.concat(n.attrs,c).filter(Boolean)}))},s}(Fa,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var Ai=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=za(a),pt.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,n,s){var c=s(Pe(this.rules,i,n,s).join(""),""),u=this.componentId+a;n.insertRules(u,u,c)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,n,s){a>2&&pt.registerId(this.componentId+a),this.removeStyles(a,n),this.createStyles(a,i,n,s)},e}();function Ei(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=ae.apply(void 0,[e].concat(a)),s="sc-global-"+fr(JSON.stringify(n)),c=new Ai(n,s);function u(p){var y=Ia(),g=Ra(),C=m.useContext(Ge),A=m.useRef(y.allocateGSInstance(s)).current;return y.server&&h(A,p,y,C,g),m.useLayoutEffect(function(){if(!y.server)return h(A,p,y,C,g),function(){return c.removeStyles(A,y)}},[A,p,y,C,g]),null}function h(p,y,g,C,A){if(c.isStatic)c.renderStyles(p,Jo,g,A);else{var E=ye({},y,{theme:_a(y,C,u.defaultProps)});c.renderStyles(p,E,g,A)}}return Ie.memo(u)}function _t(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=ae.apply(void 0,[e].concat(a)).join(""),s=fr(n);return new La(s,n)}const zi=Ei`
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
`,ke={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},Pi=ke.shadow,Mi={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},Ii={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},Ri=e=>({mode:e,color:e==="dark"?Mi:ke.color,typography:ke.typography,spacing:ke.spacing,radius:ke.radius,shadow:e==="dark"?Ii:Pi,layout:ke.layout,breakpoints:ke.breakpoints,zIndex:ke.zIndex}),Na="lafranciago-theme-mode",Oa=m.createContext(null),Li=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(Na);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function _i({children:e}){const[r,a]=m.useState(Li),i=m.useRef(!1);m.useEffect(()=>{if(window.localStorage.setItem(Na,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const h=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(h),delete document.documentElement.dataset.themeTransition}},[r]);const n=m.useCallback(()=>{a(h=>h==="light"?"dark":"light")},[]),s=m.useCallback(h=>{a(h)},[]),c=m.useMemo(()=>Ri(r),[r]),u=m.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:n,setMode:s}),[r,s,n]);return t.jsx(Oa.Provider,{value:u,children:t.jsxs(Ci,{theme:c,children:[t.jsx(zi,{}),e]})})}function Ti(){const e=m.useContext(Oa);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,r)=>{const a=m.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:u="",children:h,...p},y)=>m.createElement("svg",{ref:y,...Fi,width:n,height:n,stroke:i,strokeWidth:c?Number(s)*24/Number(n):s,className:["lucide",`lucide-${Ni(e)}`,u].join(" "),...p},[...r.map(([g,C])=>m.createElement(g,C)),...Array.isArray(h)?h:[h]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=z("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=z("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=z("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=z("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=z("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=z("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=z("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=z("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=z("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=z("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=z("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=z("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=z("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=z("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=z("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=z("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Qa({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const ct="lafranciago:foto-perfil",Qt=new Set;let De=null,Vr=!1;const tn=()=>Qt.forEach(e=>e()),eo=e=>/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(e),rn=()=>{try{const e=window.localStorage.getItem(ct);return e&&eo(e)?e:null}catch{return null}};function Kr(e){if(!(e!==null&&!eo(e))){De=e;try{e?window.localStorage.setItem(ct,e):window.localStorage.removeItem(ct)}catch{try{window.localStorage.removeItem(ct)}catch{}}tn()}}function an(){const[e,r]=m.useState(De);m.useEffect(()=>{Vr||(Vr=!0,De=rn()),r(De);const i=()=>r(De);return Qt.add(i),()=>{Qt.delete(i)}},[]);const a=m.useCallback(()=>Kr(null),[]);return{photo:e,setPhoto:Kr,clearPhoto:a}}const on="https://photon.komoot.io/api/",nn="https://nominatim.openstreetmap.org/reverse",er={lat:-31.4063691,lon:-62.6332043},Dt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),sn=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",cn=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function ln(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(er.lat),lon:String(er.lon)});try{const n=await fetch(`${on}?${i.toString()}`,{signal:r});return n.ok?((await n.json()).features??[]).map((c,u)=>{var g;const h=c.properties??{},[p,y]=((g=c.geometry)==null?void 0:g.coordinates)??[];return typeof y!="number"||typeof p!="number"?null:{id:`${h.type??"geo"}-${u}-${y}-${p}`,label:sn(h),context:cn(h),lat:y,lon:p}}).filter(c=>c!==null).sort((c,u)=>{const h=Dt(a),p=Dt(c.label).startsWith(h),y=Dt(u.label).startsWith(h);return p!==y?p?-1:1:0}).slice(0,6):[]}catch{return[]}}async function dn(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const n=await fetch(`${nn}?${i.toString()}`,{signal:a});if(!n.ok)return null;const c=(await n.json()).address??{};return[c.road,c.house_number].filter(Boolean).join(" ")||c.neighbourhood||c.city||null}catch{return null}}const pn=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],un=_t`
  from { opacity: 0; }
  to { opacity: 1; }
`,mn=_t`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,hn=o.div`
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
  animation: ${un} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gn=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${mn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,yn=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,bn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,xn=o.input`
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
`,wn=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,$n=o.button`
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
`,vn=o.button`
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
`;function kn({open:e,address:r,onCancel:a,onSave:i}){const[n,s]=m.useState("");if(m.useEffect(()=>{e&&s("")},[e]),m.useEffect(()=>{if(!e)return;const h=p=>{p.key==="Escape"&&a()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[a,e]),!e)return null;const c=n.trim(),u=h=>{h.preventDefault(),c&&i(c)};return t.jsx(hn,{onClick:h=>{h.stopPropagation(),a()},role:"presentation",children:t.jsxs(gn,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:h=>h.stopPropagation(),children:[t.jsx(fn,{children:"Nombre de la dirección"}),r?t.jsx(yn,{children:r}):null,t.jsx(bn,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(xn,{id:"address-name",value:n,onChange:h=>s(h.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(wn,{children:[t.jsx($n,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(vn,{type:"submit",disabled:!c,children:"Guardar"})]})]})})}const je=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neonMuted};
    `}
`,tr=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,Sn=ae`
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
`;const jn=o.div`
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
`,Cn=o.div`
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
`,An=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,En=o.span`
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
`,zn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Pn=o.button`
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
`,Mn=o.div`
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
`,In=o.div`
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
`,Rn=o.input`
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
`,Ln=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,_n=o.button`
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
`,Tn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,Fn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,Nn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,On=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Dn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,Bn=o.button`
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
`,Hn=o.button`
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
`,qn=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,Gn=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,Yn=o.button`
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
`,Vn=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,Kn=o.button`
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
`,Wn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Un=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xn=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,Zn=m.lazy(()=>Q(()=>import("./AddressMap-wS-15CBc.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.AddressMap}))),Jn=260,Qn=350;function es({open:e,currentId:r,onClose:a,onSelect:i,startOnNew:n=!1}){const[s,c]=m.useState(!1),[u,h]=m.useState(!1),[p,y]=m.useState(n?"new":"list"),[g,C]=m.useState(""),[A,E]=m.useState([]),[L,f]=m.useState(!1),[$,w]=m.useState(null),[R,j]=m.useState([]),[M,F]=m.useState(!1),Y=m.useRef(!1);m.useEffect(()=>{if(e){c(!0),y(n?"new":"list");const _=window.requestAnimationFrame(()=>h(!0));return()=>window.cancelAnimationFrame(_)}if(!s)return;h(!1);const S=window.setTimeout(()=>{c(!1),y(n?"new":"list"),C(""),E([]),w(null),F(!1)},Jn);return()=>window.clearTimeout(S)},[s,e,n]),m.useEffect(()=>{if(!e)return;const S=_=>{if(_.key==="Escape"&&!M){if(p==="new"){y("list");return}a()}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[M,a,e,p]),m.useEffect(()=>{if(p!=="new")return;if(Y.current){Y.current=!1;return}const S=g.trim();if(S.length<2){E([]),f(!1);return}const _=new AbortController;f(!0);const te=window.setTimeout(()=>{ln(S,_.signal).then(de=>{E(de),f(!1)}).catch(()=>f(!1))},Qn);return()=>{window.clearTimeout(te),_.abort()}},[g,p]);const B=m.useMemo(()=>[...pn,...R],[R]),Z=S=>{Y.current=!0,C(S.label),E([]),w({lat:S.lat,lon:S.lon})},K=(S,_)=>{w({lat:S,lon:_}),dn(S,_).then(te=>{te&&(Y.current=!0,C(te),E([]))})},J=S=>{const _={id:`custom-${Date.now()}`,label:S,address:g.trim(),primary:!1};j(te=>[...te,_]),F(!1),i(_.id,_.address),a()};if(!s)return null;const H=p==="new",X=$??er,oe=$!==null&&g.trim().length>=3;return t.jsxs(jn,{"data-visible":u,onClick:a,role:"presentation",children:[t.jsxs(Cn,{"data-visible":u,"data-full":H,role:"dialog","aria-modal":"true","aria-label":H?"Agregar una dirección nueva":"Dirección de entrega",onClick:S=>S.stopPropagation(),children:[t.jsxs(An,{children:[t.jsx(En,{"aria-hidden":"true"}),H?t.jsx(Hn,{type:"button",onClick:()=>y("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(Oi,{size:18,"aria-hidden":"true"})}):null,t.jsx(zn,{children:H?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(Pn,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(Ja,{size:18,"aria-hidden":"true"})})]}),t.jsx(Mn,{"data-full":H,children:H?t.jsxs(t.Fragment,{children:[t.jsxs(In,{children:[t.jsx(Jt,{size:18,"aria-hidden":"true"}),t.jsx(Rn,{value:g,onChange:S=>C(S.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),A.length>0?t.jsx(Vn,{"aria-label":"Sugerencias de direcciones",children:A.map(S=>t.jsxs(Kn,{type:"button",onClick:()=>Z(S),children:[t.jsx(mt,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(Wn,{children:S.label}),S.context?t.jsx(Un,{children:S.context}):null]})]},S.id))}):null,A.length===0&&L?t.jsx(Xn,{children:"Buscando…"}):null,t.jsx(qn,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsx(Zn,{lat:X.lat,lon:X.lon,onPick:K})})}),t.jsx(Gn,{children:$?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(Yn,{type:"button",onClick:()=>F(!0),disabled:!oe,children:[t.jsx(mt,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(Ln,{children:"Tus direcciones guardadas"}),B.map(S=>t.jsxs(_n,{type:"button","data-current":S.id===r,onClick:()=>{i(S.id,S.address),a()},children:[t.jsx(Tn,{children:t.jsx(wr,{size:18,"aria-hidden":"true"})}),t.jsxs(Fn,{children:[t.jsx(Nn,{children:S.label}),t.jsx(On,{children:S.address})]}),S.id===r?t.jsx(Dn,{"aria-label":"Dirección actual",children:t.jsx(Bi,{size:16,"aria-hidden":"true"})}):null]},S.id)),t.jsxs(Bn,{type:"button",onClick:()=>y("new"),children:[t.jsx(Va,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(kn,{open:M,address:g.trim(),onCancel:()=>F(!1),onSave:J})]})}const ts=o.form`
  width: 100%;
`,rs=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,as=o.div`
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
`,os=o.input`
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
`,is=o.button`
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
`,to=m.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:n,id:s="marketplace-search"},c){const u=h=>{h.preventDefault()};return t.jsxs(ts,{onSubmit:u,role:"search",children:[t.jsx(rs,{htmlFor:s,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(as,{children:[t.jsx(Jt,{size:18,"aria-hidden":"true"}),t.jsx(os,{id:s,ref:c,value:r,onChange:h=>a(h.target.value),placeholder:i,type:"search"}),t.jsx(is,{type:"submit","aria-label":"Buscar",children:t.jsx(Jt,{size:16,"aria-hidden":"true"})})]})]})}),ns=_t`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,ss=_t`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,cs=o.button`
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
`,ls=o.span`
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
  animation: ${ns} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ds=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,ps=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,us=o.span`
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
`,ms=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hs=o.span`
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
`,gs=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${ss} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,fs=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,ys=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,bs=o.span`
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
`;function Wr({isDarkMode:e,onToggle:r}){return t.jsxs(cs,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(ls,{"data-dark":e,"aria-hidden":"true",children:t.jsx(Vi,{size:14,"aria-hidden":"true"})}),t.jsxs(ds,{children:[t.jsxs(ps,{children:["Modo",t.jsx(us,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(ms,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(hs,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(gs,{}),t.jsx(fs,{"data-dark":e}),t.jsxs(ys,{children:[t.jsx(Yr,{size:12,"aria-hidden":"true"}),t.jsx(Gr,{size:12,"aria-hidden":"true"})]}),t.jsx(bs,{"data-dark":e,children:e?t.jsx(Gr,{size:12,"aria-hidden":"true"}):t.jsx(Yr,{size:12,"aria-hidden":"true"})})]})]})}const xs=o.div`
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
`,ws=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,$s=o.div`
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
`;const vs=o.button`
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
`;const Ur=o.span`
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
`,Bt=o.img`
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
`;const Xr=o.span`
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
`,Zr=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,ks=o.span`
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
`;const Ss=o(ks)`
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
`;const Bd=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,Hd=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,qd=o.span`
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
`,Gd=o.div`
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
`,Yd=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Sr=ae`
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
  ${Sr};
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
`;const Vd=o.button`
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
`,js=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Ae=o.section`
  /* Ritmo compacto: las secciones se separan por su propio contenido,
     no por aire vertical. */
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }

  &:first-of-type {
    padding-top: ${({theme:e})=>e.spacing[2]};
  }
`,Ce=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Cs=o.div`
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
`,Kd=o.span`
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
`,Wd=o.h1`
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
`,Ud=o.p`
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
`,jr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(jr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(jr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(jr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const As=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Es=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,Xd=o.h2`
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
`,Zd=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,zs=o.span`
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
`;o(zs)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const Ps=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Jd=o(Ps)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Ms=o(be)`
  ${Sr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,Is=o(Ms)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Qd=o.button`
  ${Sr};
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
`;o(As)`
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
`;o(nr)`
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
`;const Rs=o.nav`
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
`,Ls=o.ul`
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
`,_s=o(nr)`
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
    ${tr};
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
`;const Ts=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&ae`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,Fs=o.button`
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
`,Ns=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Os=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,Ds=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,ro=ae`
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
`,Bs=o.button`
  ${ro};
`,Jr=o(be)`
  ${ro};
`,Hs=o.img`
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
`,qs=o.span`
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
`,Gs=o.div`
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
`;const Ys=o.div`
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
`,Vs=o.div`
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
`,Ks=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Ws=o.span`
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
`,Us=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Xs=o.span`
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
`,Zs=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,Js=ae`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Qs=ae`
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
`,ao=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,Qr=o.div`
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
`,ea=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,ec=o.div`
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
`,Ze=o(nr)`
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
    ${tr};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Ee} {
    ${tr};
  }
`,Je=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,Qe=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,et=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,tt=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,rt=o.nav`
  display: grid;
  gap: 0.25rem;
`,at=o.section`
  display: block;
`,ot=o.span`
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
`,ta=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,ra=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Js};
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
`,tc=o.button`
  ${Qs};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${Sn};
  ${je};
`,aa=o.div`
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
`,rc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,ac=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,oc=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,ic=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,oa=o.button`
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
`,nc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,sc=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,cc=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,dc=o.button`
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
`,pc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,uc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,mc=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,hc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,gc=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,yc=o.article`
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
`,bc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,xc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,wc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,$c=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,vc=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,kc=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,Ht="/LaFranciaGO/favicon.png",Sc="Av. San Martín 123",ia=3,na=420,jc=260,sa=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:wr,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:Ga},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Ye},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:xr},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:kr}],ca=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Me},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:Qa},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:vr},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:ut}],Cc=o.aside`
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
`,Ac=o(ao)`
  height: 100%;
`,la=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Me,items:[{icon:ut,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Ye,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Ye,items:[{icon:mt,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Me,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:mt,items:[{icon:xr,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:ut,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],Ec=[{to:"/",label:"Inicio",icon:wr},{to:"/categorias",label:"Categorías",icon:Ga},{to:"/pedidos",label:"Mis pedidos",icon:Ye},{to:"/favoritos",label:"Favoritos",icon:xr},{to:"/mi-cuenta",label:"Cuenta",icon:kr}];function zc({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:n,toggleMode:s}=Ti(),{photo:c}=an(),u=yo(),h=typeof r=="string"&&typeof a=="function",p=m.useRef(null),y=m.useRef(null),g=m.useRef(null),C=m.useRef(null),A=m.useRef(null),[E,L]=m.useState(!1),[f,$]=m.useState({id:"home",label:Sc}),[w,R]=m.useState(!1),[j,M]=m.useState(!1),[F,Y]=m.useState("opening"),[B,Z]=m.useState(!1),[K,J]=m.useState(!1),[H,X]=m.useState("opening"),[oe,S]=m.useState(null),_=m.useCallback(()=>{R(!1),Z(!1),S(null)},[]),te=m.useCallback(()=>{_(),R(!0)},[_]),de=m.useCallback(()=>{if(w||j){_();return}te()},[_,j,w,te]),we=m.useCallback(()=>{_(),Z(!0)},[_]),$e=m.useCallback(()=>{if(B||K){_();return}we()},[_,K,B,we]);m.useEffect(()=>{const l=document.body.style.overflow;return(w||j||B||K)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=l}},[j,w,K,B]),m.useLayoutEffect(()=>{const l=p.current;if(!l)return;const b=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${l.offsetHeight}px`)};b();const k=typeof ResizeObserver<"u"?new ResizeObserver(b):null;return k==null||k.observe(l),window.addEventListener("resize",b),()=>{k==null||k.disconnect(),window.removeEventListener("resize",b),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),m.useEffect(()=>{y.current!==null&&(window.cancelAnimationFrame(y.current),y.current=null),g.current!==null&&(window.clearTimeout(g.current),g.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(w){if(M(!0),l){Y("open");return}Y("opening"),y.current=window.requestAnimationFrame(()=>{Y("open"),y.current=null});return}if(j){if(l){M(!1),Y("opening");return}Y("closing"),g.current=window.setTimeout(()=>{M(!1),Y("opening"),g.current=null},na)}},[j,w]),m.useEffect(()=>()=>{y.current!==null&&window.cancelAnimationFrame(y.current),g.current!==null&&window.clearTimeout(g.current),C.current!==null&&window.cancelAnimationFrame(C.current),A.current!==null&&window.clearTimeout(A.current)},[]),m.useEffect(()=>{C.current!==null&&(window.cancelAnimationFrame(C.current),C.current=null),A.current!==null&&(window.clearTimeout(A.current),A.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(B){if(J(!0),l){X("open");return}X("opening"),C.current=window.requestAnimationFrame(()=>{X("open"),C.current=null});return}if(K){if(l){J(!1),X("opening");return}X("closing"),A.current=window.setTimeout(()=>{J(!1),X("opening"),A.current=null},jc)}},[K,B]);const xe=m.useCallback((l,b)=>{l.preventDefault(),_(),window.setTimeout(()=>{u(b)},na)},[_,u]),v=m.useMemo(()=>la.find(l=>l.id===oe)??null,[oe]);return t.jsxs(xs,{children:[t.jsx(ws,{ref:p,children:t.jsx(Ts,{children:t.jsx($s,{children:t.jsxs(Ys,{children:[t.jsxs(Vs,{children:[t.jsx(vs,{type:"button",onClick:de,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":w||j,children:t.jsx(Yi,{size:20,"aria-hidden":"true"})}),t.jsxs(Ks,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Xs,{children:t.jsx(Bt,{src:Ht,alt:"","aria-hidden":"true"})}),t.jsxs(Ws,{children:["LaFrancia",t.jsx(Us,{children:"GO"})]})]})]}),h?t.jsx(Zs,{children:t.jsx(to,{value:r,onChange:a})}):null,t.jsxs(Gs,{"aria-label":"Acciones rápidas",children:[t.jsxs(Fs,{type:"button","aria-label":`Entregar en ${f.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":E,onClick:()=>L(!0),children:[t.jsxs(Ds,{children:[t.jsx(Os,{children:"Entregar en"}),t.jsx(Ns,{children:f.label})]}),t.jsx(qi,{size:15,"aria-hidden":"true"})]}),t.jsxs(Bs,{type:"button",onClick:$e,"aria-label":`Abrir notificaciones, ${ia} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":B||K,children:[t.jsx(ut,{size:18,"aria-hidden":"true"}),t.jsx(qs,{children:ia})]}),t.jsx(Jr,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(Ji,{size:18,"aria-hidden":"true"})}),t.jsx(Jr,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:c?t.jsx(Hs,{src:c,alt:""}):t.jsx(kr,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(Cc,{"aria-label":"Navegación principal",children:t.jsxs(Ac,{children:[t.jsxs(Qr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Ur,{children:t.jsx(Bt,{src:Ht,alt:"","aria-hidden":"true"})}),t.jsxs(ea,{children:[t.jsxs(Xr,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Zr,{children:"GO"})]}),t.jsx(Ss,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(at,{children:[t.jsx(ot,{children:"NAVEGACIÓN"}),t.jsx(rt,{"aria-label":"Navegación principal",children:sa.map(l=>{const b=l.icon;return t.jsxs(Ze,{to:l.to,end:l.end,onClick:k=>xe(k,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(et,{children:[t.jsx(tt,{children:l.title}),t.jsx(Qe,{children:l.subtitle})]}),t.jsx(Je,{"aria-hidden":"true",children:t.jsx(Xe,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(at,{children:[t.jsx(ot,{children:"ACCIONES"}),t.jsx(rt,{"aria-label":"Acciones rápidas",children:ca.map(l=>{const b=l.icon;return t.jsxs(Ze,{to:l.to,onClick:k=>xe(k,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(et,{children:[t.jsx(tt,{children:l.title}),t.jsx(Qe,{children:l.subtitle})]}),t.jsx(Je,{"aria-hidden":"true",children:t.jsx(Xe,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(ta,{children:t.jsx(Wr,{isDarkMode:n,onToggle:s})})]})}),t.jsx(js,{children:e}),t.jsx(Rs,{"aria-label":"Navegación móvil",children:t.jsx(Ls,{children:Ec.map(l=>{const b=l.icon;return t.jsx("li",{children:t.jsxs(_s,{to:l.to,"data-primary":l.to==="/pedidos",children:[t.jsx(Be,{children:t.jsx(b,{size:l.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:l.label})]})},l.to)})})}),j&&t.jsx(aa,{"data-drawer":"true","data-state":F,role:"presentation",onClick:_,children:t.jsxs(ra,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":F,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:l=>l.stopPropagation(),children:[t.jsxs(ec,{children:[t.jsxs(Qr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Ur,{children:t.jsx(Bt,{src:Ht,alt:"","aria-hidden":"true"})}),t.jsx(ea,{children:t.jsxs(Xr,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Zr,{children:"GO"})]})})]}),t.jsx(tc,{type:"button",onClick:_,"aria-label":"Cerrar menú",children:t.jsx(Ja,{size:18,"aria-hidden":"true"})})]}),t.jsxs(ao,{children:[t.jsxs(at,{children:[t.jsx(ot,{children:"Navegación"}),t.jsx(rt,{"aria-label":"Navegación principal",children:sa.map(l=>{const b=l.icon;return t.jsxs(Ze,{to:l.to,end:l.end,onClick:k=>xe(k,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(et,{children:[t.jsx(tt,{children:l.title}),t.jsx(Qe,{children:l.subtitle})]}),t.jsx(Je,{"aria-hidden":"true",children:t.jsx(Xe,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(at,{children:[t.jsx(ot,{children:"Acciones"}),t.jsx(rt,{"aria-label":"Acciones rápidas",children:ca.map(l=>{const b=l.icon;return t.jsxs(Ze,{to:l.to,onClick:k=>xe(k,l.to),children:[t.jsx(Ee,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(et,{children:[t.jsx(tt,{children:l.title}),t.jsx(Qe,{children:l.subtitle})]}),t.jsx(Je,{"aria-hidden":"true",children:t.jsx(Xe,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx(ta,{children:t.jsx(Wr,{isDarkMode:n,onToggle:s})})]})]})}),K&&t.jsx(aa,{"data-notifications":"true","data-state":H,role:"presentation",onClick:_,children:t.jsxs(ra,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":H,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:l=>l.stopPropagation(),children:[t.jsxs(ic,{children:[v?t.jsx(oa,{type:"button",onClick:()=>S(null),"aria-label":"Volver a las notificaciones",children:t.jsx(Da,{size:14,"aria-hidden":"true"})}):t.jsx(sc,{"aria-hidden":"true"}),t.jsxs(lc,{children:[t.jsx(cc,{id:"marketplace-notifications-title",children:(v==null?void 0:v.title)??"Notificaciones"}),t.jsx(nc,{children:(v==null?void 0:v.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(oa,{type:"button",onClick:()=>{_(),u("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(Xi,{size:14,"aria-hidden":"true"})})]}),t.jsx(oc,{}),t.jsx(ac,{children:v?t.jsx(rc,{"aria-label":v.title,children:v.items.map(l=>{const b=l.icon;return t.jsxs(yc,{children:[t.jsx(wc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(bc,{children:[t.jsxs(kc,{children:[t.jsx(vc,{children:l.title}),t.jsx(xc,{children:l.date})]}),t.jsx($c,{children:l.subtitle})]})]},`${v.id}-${l.title}`)})}):t.jsx(fc,{"aria-label":"Secciones de notificaciones",children:la.map(l=>{const b=l.icon;return t.jsxs(dc,{type:"button",onClick:()=>S(l.id),children:[t.jsx(uc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(hc,{children:[t.jsx(gc,{children:l.title}),t.jsx(mc,{children:l.subtitle})]}),t.jsx(pc,{"aria-hidden":"true",children:t.jsx(Fe,{size:16,"aria-hidden":"true"})})]},l.id)})})})]})}),t.jsx(es,{open:E,currentId:f.id,onClose:()=>L(!1),onSelect:(l,b)=>$({id:l,label:b})})]})}const Cr=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,Ar=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,oo=ae`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${oo};
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
`;const io=o.div`
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
`;const Pc=o.span`
  ${oo};
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
`,ep=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Mc="/LaFranciaGO/",Ic=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),Er=e=>{const r=e&&Ic.has(e)?e:"comercio";return`${Mc}media/${r}.svg`},Rc=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),Lc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return r[a%r.length]},_c=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,Tc=o.span`
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
`,Fc=o.span`
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
`;function Nc({id:e,name:r,to:a,count:i,priority:n}){return t.jsx(_c,{to:a,children:t.jsxs(Cr,{$ratio:"1 / 1",children:[t.jsx(Ar,{src:Er(e),alt:r,loading:n?"eager":"lazy"}),typeof i=="number"?t.jsxs(Fc,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx(Tc,{children:r})]})})}const Oc=o.div`
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
`,Dc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${je};
`,Bc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Hc=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,qc=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function Gc({icon:e,title:r,text:a,ctaLabel:i,ctaTo:n,dashed:s}){return t.jsxs(Oc,{"data-dashed":s?"true":"false",children:[t.jsx(Dc,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(Bc,{children:r}),a?t.jsx(Hc,{children:a}):null,i&&n?t.jsx(qc,{children:t.jsx(Is,{to:n,children:i})}):null]})}const da=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),Yc=e=>`${e.toFixed(1)} km`,no=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Vc=o(be)`
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
`,Kc=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Wc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Uc=o.h3`
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
`,Xc=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Zc=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,Jc=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,Qc=o.button`
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
`,el=o.span`
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
`;function tl({name:e,store:r,price:a,oldPrice:i,categoryId:n,imageLabel:s,tag:c,to:u,onAdd:h,priority:p}){return t.jsxs(Vc,{to:u??"#",$static:!u,children:[t.jsxs(Cr,{$ratio:"1 / 1",children:[t.jsx(Ar,{src:Er(n),alt:s??e,loading:p?"eager":"lazy"}),c?t.jsx(io,{children:t.jsx(el,{children:c})}):null]}),t.jsxs(Kc,{children:[r?t.jsx(Wc,{children:r}):null,t.jsx(Uc,{children:e}),t.jsxs(Xc,{children:[t.jsxs("div",{children:[t.jsx(Zc,{children:da(a)}),i?t.jsx(Jc,{children:da(i)}):null]}),h?t.jsx(Qc,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:y=>{y.preventDefault(),y.stopPropagation(),h()},children:t.jsx(Va,{size:18,"aria-hidden":"true"})}):null]})]})]})}const rl=o(be)`
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
`,al=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,ol=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,il=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,nl=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,sl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function cl({to:e,title:r,text:a,icon:i,tone:n="brand"}){return t.jsxs(rl,{to:e,"data-tone":n,children:[t.jsx(al,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(ol,{children:[t.jsx(il,{children:r}),a?t.jsx(nl,{children:a}):null]}),t.jsx(sl,{children:t.jsx(Fe,{size:18,"aria-hidden":"true"})})]})}const ll=o(be)`
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
`,dl=o.span`
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
`,pl=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function pa({to:e,label:r,icon:a}){return t.jsxs(ll,{to:e,children:[t.jsx(dl,{children:t.jsx(a,{size:18})}),t.jsx(pl,{children:r}),t.jsx(Fe,{size:16,"aria-hidden":"true"})]})}const ul=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,ml=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,hl=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,gl=o.h2`
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
`,fl=o.span`
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
`,yl=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,bl=o(be)`
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
`;function qt({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:n,seeAllLabel:s="Ver todos"}){return t.jsxs(ul,{children:[t.jsxs(ml,{children:[t.jsxs(hl,{children:[t.jsx(gl,{children:e}),r?t.jsxs(fl,{children:[a,r]}):null]}),n?t.jsxs(bl,{to:n,children:[s,t.jsx(Fe,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(yl,{children:i}):null]})}const xl=o(be)`
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
`,wl=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,$l=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,vl=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,kl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Sl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,ua=o.span`
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
`,jl=o.span`
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
`,Cl=o.span`
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
`,Al=o.span`
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
`;function El({id:e,name:r,category:a,categoryId:i,to:n,distanceKm:s,rating:c,openNow:u,premium:h,etaMin:p,etaMax:y,priority:g}){return t.jsxs(xl,{to:n,children:[t.jsxs(Cr,{$ratio:"16 / 9",children:[t.jsx(Ar,{src:Er(i),alt:a,loading:g?"eager":"lazy"}),t.jsxs(io,{children:[u!==void 0?t.jsx(jl,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),h?t.jsx(Al,{children:"Destacado"}):null,c!==void 0?t.jsxs(Cl,{children:[t.jsx(Qi,{size:13,"aria-hidden":"true",fill:"currentColor"}),c.toFixed(1)]}):null]}),t.jsx(wl,{children:t.jsx(Pc,{$size:"2.75rem",$tone:Lc(e),children:Rc(r)})})]}),t.jsxs($l,{children:[t.jsx(vl,{children:r}),t.jsxs(kl,{children:[a,s!==void 0?` · ${Yc(s)}`:""]}),t.jsxs(Sl,{children:[t.jsxs(ua,{children:[t.jsx(Di,{size:14,"aria-hidden":"true"}),"Delivery"]}),p!==void 0&&y!==void 0?t.jsxs(ua,{children:[t.jsx(Gi,{size:14,"aria-hidden":"true"}),p,"-",y," min"]}):null]})]})]})}const zl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:Wa,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:Ya,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ha,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:yr,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:br,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Me,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Xa,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:$r,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Ua,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Ba,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:qa,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Ka,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Za,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:vr,tone:"red"}],Pl=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",premium:!0,name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",premium:!0,name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],Ml=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],tp=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],rp=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:Wa},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Me},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ha},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:br},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:yr},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:Ya},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Xa},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:Hi},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:$r},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Ua},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Ba},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:qa},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Ka},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Za}],Il=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],Rl=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],so=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Me,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:br,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:$r,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:yr,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],ap=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:0,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:1,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,saleUnit:"peso",quantity:1,subtotal:1275,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:0,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,saleUnit:"peso",quantity:3,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,saleUnit:"peso",quantity:1,subtotal:1345,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],op=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],ip=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],np=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],sp=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],cp=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],lp=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],dp=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],pp=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],up=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:en},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:Ki},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:Wi},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:Zi}],Ll=e=>no(e),Gt=(e,...r)=>{const a=Ll(e);return a?no(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},_l=e=>Il.find(r=>r.id===e),mp=e=>so.find(r=>r.id===e),hp=e=>so.find(r=>r.name.toLowerCase()===e.toLowerCase()),gp=e=>{const r=Rl.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((n,s)=>n.price-s.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=_l(e);if(a)return{kind:"offer",offer:a}},Tl=5,Fl=.7,ma=e=>Math.floor(e/Fl),ha=e=>e.premium&&e.distanceKm<=Tl?0:1,Ve=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,co=(e,r)=>{const a=Ve(e,r);if(a!==0)return a;const i=ma(e.distanceKm)-ma(r.distanceKm);if(i!==0)return i;const n=ha(e)-ha(r);if(n!==0)return n;const s=e.distanceKm-r.distanceKm;return Math.abs(s)>.05?s:(r.rating??0)-(e.rating??0)},Nl=(e,r)=>Ve(e,r)||e.distanceKm-r.distanceKm,Ol=(e,r)=>Ve(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),Dl=(e,r)=>Ve(e,r)||(r.rating??0)-(e.rating??0),Bl=(e,r)=>Ve(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),Hl={relevancia:co,cercania:Nl,precio:Ol,puntuacion:Dl,entrega:Bl};function ga(e,r="relevancia"){return[...e].sort(Hl[r]??co)}const fp=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],ql=o.div`
  position: relative;
  min-width: 0;
`,Gl=o.div`
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
`,fa=o.button`
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
`,it=4,Yl=6,Vl=420,Kl=.91,Wl=.2,Ul=.45,Xl=260,Zl=e=>1-(1-e)**3;function Yt({children:e,className:r,as:a,...i}){const n=m.useRef(null),s=m.useRef(null),c=m.useRef(null),[u,h]=m.useState(!1),[p,y]=m.useState(!1),g=m.useCallback(()=>{const f=n.current;if(!f)return;const{scrollLeft:$,scrollWidth:w,clientWidth:R}=f;h($>it),y($+R<w-it)},[]);m.useLayoutEffect(()=>{g()},[g,e]),m.useEffect(()=>{var w;const f=n.current;if(!f)return;const $=((w=window.matchMedia)==null?void 0:w.call(window,"(pointer: fine)").matches)??!1;f.style.cursor=$&&(u||p)?"grab":""},[u,p]),m.useEffect(()=>{var R;const f=n.current;if(!f)return;const $=j=>{const M=f.scrollWidth-f.clientWidth;if(M<=0)return;const F=Math.abs(j.deltaX)>Math.abs(j.deltaY)?j.deltaX:j.deltaY;if(F===0)return;const Y=F>0?1:-1,B=f.scrollLeft<=it,Z=f.scrollLeft>=M-it;if(Y<0&&B||Y>0&&Z)return;j.preventDefault();const K=c.current??f.scrollLeft,J=Math.max(0,Math.min(K+Y*Xl,M));E(f,J)};f.addEventListener("wheel",$,{passive:!1}),f.addEventListener("scroll",g,{passive:!0}),f.addEventListener("scrollend",g,{passive:!0});const w=typeof ResizeObserver<"u"?new ResizeObserver(g):null;return w==null||w.observe(f),Array.from(f.children).forEach(j=>w==null?void 0:w.observe(j)),(R=document.fonts)==null||R.ready.then(g).catch(()=>{}),()=>{f.removeEventListener("wheel",$),f.removeEventListener("scroll",g),f.removeEventListener("scrollend",g),w==null||w.disconnect(),s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),c.current=null}},[g]);const C=(f,$)=>{var M;if(s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),c.current=null,Math.abs($)<Ul||(M=window.matchMedia)!=null&&M.call(window,"(prefers-reduced-motion: reduce)").matches){g();return}let w=-$;const R=f.scrollWidth-f.clientWidth,j=()=>{const F=f.scrollLeft+w;if(F<=0||F>=R){f.scrollLeft=F<=0?0:R,s.current=null,g();return}if(f.scrollLeft=F,w*=Kl,g(),Math.abs(w)<Wl){s.current=null;return}s.current=requestAnimationFrame(j)};s.current=requestAnimationFrame(j)},A=f=>{if(f.pointerType!=="mouse"||f.button!==0)return;const $=n.current;if(!$)return;s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),c.current=null;const w=f.clientX,R=$.scrollLeft;let j=!1,M=0,F=f.clientX,Y=performance.now();const B=J=>J.preventDefault();$.addEventListener("dragstart",B);const Z=J=>{const H=J.clientX-w;if(!j){if(Math.abs(H)<Yl)return;j=!0,$.style.scrollBehavior="auto",$.style.cursor="grabbing",$.style.userSelect="none"}const X=performance.now(),oe=X-Y;if(oe>0){const S=(J.clientX-F)/oe*16;M=M*.7+S*.3,F=J.clientX,Y=X}$.scrollLeft=R-H},K=()=>{if(document.removeEventListener("pointermove",Z),document.removeEventListener("pointerup",K),document.removeEventListener("pointercancel",K),$.removeEventListener("dragstart",B),$.style.scrollBehavior="",$.style.cursor="",$.style.userSelect="",j){C($,M);const J=H=>{H.stopPropagation(),H.preventDefault()};$.addEventListener("click",J,{capture:!0,once:!0}),window.setTimeout(()=>$.removeEventListener("click",J,{capture:!0}),0)}g()};document.addEventListener("pointermove",Z),document.addEventListener("pointerup",K),document.addEventListener("pointercancel",K)},E=(f,$)=>{var F;s.current!==null&&(cancelAnimationFrame(s.current),s.current=null);const w=f.scrollLeft,R=$-w;if(Math.abs(R)<1){c.current=null;return}if(c.current=$,(F=window.matchMedia)!=null&&F.call(window,"(prefers-reduced-motion: reduce)").matches){f.scrollLeft=$,c.current=null,g();return}const j=performance.now(),M=Y=>{const B=Y-j,Z=Math.min(B/Vl,1);if(f.scrollLeft=w+R*Zl(Z),g(),Z<1){s.current=requestAnimationFrame(M);return}s.current=null,c.current=null};s.current=requestAnimationFrame(M)},L=f=>{const $=n.current;if(!$)return;const w=$.scrollWidth-$.clientWidth,R=$.scrollLeft+f*$.clientWidth*.7;E($,Math.max(0,Math.min(R,w)))};return t.jsxs(ql,{className:r,children:[u?t.jsx(fa,{type:"button","data-side":"left",onClick:()=>L(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(Da,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:n,onPointerDown:A,...i,children:e}):t.jsx(Gl,{ref:n,onPointerDown:A,...i,children:e}),p?t.jsx(fa,{type:"button","data-side":"right",onClick:()=>L(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Fe,{size:16,"aria-hidden":"true"})}):null]})}const lo="lafranciago:orden",Jl=["relevancia","cercania","precio","puntuacion","entrega"],Ql=()=>{try{const e=window.localStorage.getItem(lo);return Jl.includes(e)?e:"relevancia"}catch{return"relevancia"}};function ed(){const[e,r]=m.useState("relevancia");m.useEffect(()=>{r(Ql())},[]);const a=m.useCallback(i=>{r(i);try{window.localStorage.setItem(lo,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const td=o(be)`
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
`,rd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,ad=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,od=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,id=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,nd=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,po=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,sd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,cd=o.div`
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
`;const yp=o.div`
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
`;const bp=o.div`
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
`;const xp=o(Ae)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(Cs)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const wp=o(po)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(sd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(cd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Es)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const zr=o.div`
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
`,ld=o(zr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,dd=o(zr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,pd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ud=o.section`
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
`;const $p=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,md=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,hd=8;function gd(){const[e,r]=m.useState(""),{sortMode:a}=ed(),i=e.trim(),n=i.length>0,s=m.useMemo(()=>{const p=zl.filter(y=>Gt(i,y.name));return n?p:p.slice(0,hd)},[n,i]),c=m.useMemo(()=>ga(Pl.filter(p=>Gt(i,p.name,p.category,p.address)),a),[i,a]),u=m.useMemo(()=>ga(Ml.filter(p=>Gt(i,p.product,p.store)),a),[i,a]),h=s.length>0||c.length>0||u.length>0;return t.jsxs(zc,{query:e,onQueryChange:r,children:[t.jsx(ud,{children:t.jsx(Ce,{children:t.jsx(to,{value:e,onChange:r})})}),t.jsx(Ae,{children:t.jsx(Ce,{children:t.jsxs(td,{to:"/mandado",children:[t.jsx(rd,{children:t.jsx(Ye,{size:22,"aria-hidden":"true"})}),t.jsxs(ad,{children:[t.jsx(od,{children:"¿Necesitás algún mandado?"}),t.jsx(id,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(nd,{children:t.jsx(Fe,{size:18,"aria-hidden":"true"})})]})})}),n&&!h?t.jsx(Ae,{children:t.jsx(Ce,{children:t.jsx(Gc,{icon:Ui,title:"Sin resultados",text:`No encontramos nada para "${i}". Probá con otra palabra.`,dashed:!0})})}):null,s.length>0?t.jsx(Ae,{children:t.jsxs(Ce,{children:[t.jsx(qt,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(Yt,{as:dd,"aria-label":"Categorías",children:s.map((p,y)=>t.jsx(Nc,{id:p.id,name:p.name,to:`/comercios?rubro=${p.id}`,priority:y<5},p.id))})]})}):null,u.length>0?t.jsx(Ae,{children:t.jsxs(Ce,{children:[t.jsx(qt,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(Yt,{as:zr,"aria-label":"Productos destacados",children:u.map((p,y)=>t.jsx(tl,{name:p.product,store:p.store,price:p.price,oldPrice:p.oldPrice,categoryId:p.categoryId,imageLabel:p.imageLabel,tag:p.discount>0?`-${p.discount}%`:void 0,to:p.href,priority:y<3},p.id))})]})}):null,c.length>0?t.jsx(Ae,{children:t.jsxs(Ce,{children:[t.jsx(qt,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(Yt,{as:ld,"aria-label":"Negocios destacados",children:c.map((p,y)=>t.jsx(El,{id:p.id,name:p.name,category:p.category,categoryId:p.categoryId,to:p.href,distanceKm:p.distanceKm,rating:p.rating,openNow:p.openNow,premium:p.premium,etaMin:p.etaMin,etaMax:p.etaMax,priority:y<2},p.id))})]})}):null,n?null:t.jsx(Ae,{children:t.jsx(Ce,{children:t.jsx(po,{children:t.jsxs(pd,{children:[t.jsx(cl,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Me,tone:"brand"}),t.jsxs(md,{children:[t.jsx(pa,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:Qa}),t.jsx(pa,{to:"/registro/fletero",label:"Sumate como Fletero",icon:vr})]})]})})})})]})}const uo="https://lafranciago-api.lafranciago-api.workers.dev",Pr=()=>uo.length>0;class mo extends Error{constructor(r,a){super(r),this.status=a,this.name="ApiError"}}async function nt(e,r={}){const a=await fetch(`${uo}${e}`,{...r,credentials:"include",headers:{...r.body instanceof FormData?{}:{"Content-Type":"application/json"},...r.headers}});if(!a.ok){const i=await a.json().then(n=>n.error).catch(()=>null);throw new mo(i??`Error ${a.status}`,a.status)}return a.json()}const W={get:e=>nt(e),post:(e,r)=>nt(e,{method:"POST",body:r instanceof FormData?r:JSON.stringify(r??{})}),patch:(e,r)=>nt(e,{method:"PATCH",body:JSON.stringify(r??{})}),delete:e=>nt(e,{method:"DELETE"})},He={registro:e=>W.post("/auth/registro",e),login:e=>W.post("/auth/login",e),loginPanel:e=>W.post("/auth/login-panel",e),logout:()=>W.post("/auth/logout"),yo:()=>W.get("/auth/yo")},vp={crear:(e,r)=>W.post("/postulaciones",{rol:e,datos:r}),mias:()=>W.get("/postulaciones/mias")},kp={postulaciones:(e="pendiente")=>W.get(`/admin/postulaciones?estado=${e}`),revisar:(e,r,a)=>W.post(`/admin/postulaciones/${e}`,{decision:r,nota:a})},Sp={ver:()=>W.get("/mi-comercio"),crearProducto:e=>W.post("/productos",e),editarProducto:(e,r)=>W.patch(`/productos/${e}`,r),borrarProducto:e=>W.delete(`/productos/${e}`),ofertas:()=>W.get("/mi-comercio/ofertas"),crearOferta:e=>W.post("/mi-comercio/ofertas",e),borrarOferta:e=>W.delete(`/mi-comercio/ofertas/${e}`),activarOferta:(e,r)=>W.patch(`/mi-comercio/ofertas/${e}`,{activa:r})},jp={pedidos:e=>W.get(`/mi-comercio/pedidos${e?`?estado=${e}`:""}`),envios:()=>W.get("/mi-comercio/envios"),mensajes:e=>W.get(`/pedidos/${e}/mensajes`),enviarMensaje:(e,r)=>W.post(`/pedidos/${e}/mensajes`,{texto:r})},Cp={disponibles:(e,r)=>{const a=new URLSearchParams;typeof e=="number"&&typeof r=="number"&&(a.set("lat",String(e)),a.set("lon",String(r)));const i=a.toString();return W.get(`/delivery/disponibles${i?`?${i}`:""}`)},detalle:e=>W.get(`/delivery/pedidos/${e}`),tomar:(e,r,a)=>W.post(`/delivery/pedidos/${e}/tomar`,{lat:r,lon:a}),actualizarUbicacion:(e,r)=>W.post("/delivery/ubicacion",{lat:e,lon:r})},Ap={subir:(e,r)=>{const a=new FormData;return a.append("archivo",e,r),W.post("/media",a)}},rr=new Set;let ar=null,or=Pr()?"cargando":"invitado",ya=!1;const fd=()=>rr.forEach(e=>e()),Le=e=>{ar=e,or=e?"conectado":"invitado",fd()};async function ir(){if(Pr())try{Le(await He.yo())}catch(e){(!(e instanceof mo)||e.status!==401)&&console.warn("No se pudo recuperar la sesión",e),Le(null)}}function yd(){const[e,r]=m.useState({usuario:ar,estado:or});m.useEffect(()=>{const c=()=>r({usuario:ar,estado:or});return rr.add(c),ya||(ya=!0,ir()),c(),()=>{rr.delete(c)}},[]);const a=m.useCallback(async(c,u)=>{Le(await He.login({email:c,password:u}))},[]),i=m.useCallback(async c=>{Le(await He.registro(c))},[]),n=m.useCallback(async(c,u,h)=>{Le(await He.loginPanel({email:c,password:u,rol:h}))},[]),s=m.useCallback(async()=>{try{await He.logout()}finally{Le(null)}},[]);return{usuario:e.usuario,estado:e.estado,conectado:e.estado==="conectado",entrar:a,entrarAlPanel:n,registrar:i,salir:s,refrescar:ir}}function Ep(){return new Promise((e,r)=>{const a="https://lafranciago-api.lafranciago-api.workers.dev",s=window.screenX+(window.outerWidth-480)/2,c=window.screenY+(window.outerHeight-640)/2,u=window.open(`${a}/auth/google`,"lafranciago-google",`width=480,height=640,left=${s},top=${c}`);if(!u){r(new Error("Permití las ventanas emergentes para entrar con Google."));return}let h=!1;const p=()=>{window.removeEventListener("message",y),window.clearInterval(g)};function y(C){if(C.origin!==new URL(a).origin)return;const A=C.data;(A==null?void 0:A.tipo)==="lafranciago:oauth"&&(h=!0,p(),A.exito?ir().then(()=>e()):r(new Error(A.mensaje??"No pudimos completar el ingreso.")))}window.addEventListener("message",y);const g=window.setInterval(()=>{u.closed&&!h&&(p(),r(new Error("Cerraste la ventana antes de terminar.")))},600)})}function le({children:e}){const{estado:r}=yd(),a=bo();if(!Pr())return t.jsx(t.Fragment,{children:e});if(r==="cargando")return null;if(r==="invitado"){const i=`${a.pathname}${a.search}`;return t.jsx(Vt,{to:`/ingresar?destino=${encodeURIComponent(i)}`,replace:!0})}return t.jsx(t.Fragment,{children:e})}const bd=m.lazy(()=>Q(()=>import("./AuthScreen-583S2Y7_.js"),__vite__mapDeps([5,1,6,7,8,9,10,11])).then(e=>({default:e.AuthScreen}))),xd=m.lazy(()=>Q(()=>import("./CategoriesScreen-CW4Vwd05.js"),__vite__mapDeps([12,1])).then(e=>({default:e.CategoriesScreen}))),wd=m.lazy(()=>Q(()=>import("./StoresDirectoryScreen-C95-tt09.js"),__vite__mapDeps([13,1])).then(e=>({default:e.StoresDirectoryScreen}))),$d=m.lazy(()=>Q(()=>import("./StoreProfileScreen-CSvNccl4.js"),__vite__mapDeps([14,1,15,16,17])).then(e=>({default:e.StoreProfileScreen}))),vd=m.lazy(()=>Q(()=>import("./ProductDetailScreen-DqZYfcKC.js"),__vite__mapDeps([18,1,19])).then(e=>({default:e.ProductDetailScreen}))),kd=m.lazy(()=>Q(()=>import("./MyOrdersScreen-Cnj4-8ld.js"),__vite__mapDeps([20,1,17,21])).then(e=>({default:e.MyOrdersScreen}))),Sd=m.lazy(()=>Q(()=>import("./CartScreen-BpTodoUv.js"),__vite__mapDeps([22,1,15,21,23,16,10])).then(e=>({default:e.CartScreen}))),jd=m.lazy(()=>Q(()=>import("./ErrandScreen-MC30RKDI.js"),__vite__mapDeps([24,1,25,10])).then(e=>({default:e.ErrandScreen}))),Cd=m.lazy(()=>Q(()=>import("./ErrandChatScreen-Cav7wmEu.js"),__vite__mapDeps([26,1,27,25,28,29])).then(e=>({default:e.ErrandChatScreen}))),Ad=m.lazy(()=>Q(()=>import("./FavoritesScreen-CK5aomQ-.js"),__vite__mapDeps([30,1])).then(e=>({default:e.FavoritesScreen}))),Ed=m.lazy(()=>Q(()=>import("./NotificationsScreen-C6LbKYw2.js"),__vite__mapDeps([31,1,32])).then(e=>({default:e.NotificationsScreen}))),zd=m.lazy(()=>Q(()=>import("./CustomerAccountScreen-DN3uWmdP.js"),__vite__mapDeps([33,1,19,27,28,34,10,11])).then(e=>({default:e.CustomerAccountScreen}))),Pd=m.lazy(()=>Q(()=>import("./CommerceRegistrationScreen-BIFWtj66.js"),__vite__mapDeps([35,1,27,36,37,38,6,34,10])).then(e=>({default:e.CommerceRegistrationScreen}))),ba=m.lazy(()=>Q(()=>import("./DeliveryRegistrationScreen-gboyLEnU.js"),__vite__mapDeps([39,37,1,27,6,10,34,9])).then(e=>({default:e.DeliveryRegistrationScreen}))),Md=m.lazy(()=>Q(()=>import("./MiComercioScreen-CvKlaqDK.js"),__vite__mapDeps([40,1,15,41,7,8,29,23,2,3,36,27,38,6,32,42])).then(e=>({default:e.MiComercioScreen}))),Id=m.lazy(()=>Q(()=>import("./CommercePanelScreen-B6Ip4wwf.js"),__vite__mapDeps([43,44,19,1,32])).then(e=>({default:e.CommercePanelScreen}))),Rd=m.lazy(()=>Q(()=>import("./ProductFormScreen-Dlcrw8pO.js"),__vite__mapDeps([45,1,15,27,38])).then(e=>({default:e.ProductFormScreen}))),Ld=m.lazy(()=>Q(()=>import("./PanelRepartidorScreen-OsZMDfMK.js"),__vite__mapDeps([46,1,4,41,7,8,29,15,47])).then(e=>({default:e.PanelRepartidorScreen}))),_d=m.lazy(()=>Q(()=>import("./DeliveryPanelScreen-Cu7SHeqZ.js"),__vite__mapDeps([48,44,19,1])).then(e=>({default:e.DeliveryPanelScreen}))),Td=m.lazy(()=>Q(()=>import("./AdminPostulacionesScreen-DYVlIkyp.js"),__vite__mapDeps([49,1,7,47,42])).then(e=>({default:e.AdminPostulacionesScreen}))),Fd=m.lazy(()=>Q(()=>import("./AdminPanelScreen-Dh1AvJ9K.js"),__vite__mapDeps([50,44,19,1])).then(e=>({default:e.AdminPanelScreen})));function Nd(){return t.jsx(xo,{children:t.jsx(_i,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsxs(wo,{children:[t.jsx(U,{path:"/",element:t.jsx(gd,{})}),t.jsx(U,{path:"/ingresar",element:t.jsx(bd,{})}),t.jsx(U,{path:"/categorias",element:t.jsx(xd,{})}),t.jsx(U,{path:"/comercios",element:t.jsx(wd,{})}),t.jsx(U,{path:"/comercios/:storeId",element:t.jsx($d,{})}),t.jsx(U,{path:"/productos/:productId",element:t.jsx(vd,{})}),t.jsx(U,{path:"/pedidos",element:t.jsx(le,{children:t.jsx(kd,{})})}),t.jsx(U,{path:"/carrito",element:t.jsx(le,{children:t.jsx(Sd,{})})}),t.jsx(U,{path:"/mandado",element:t.jsx(le,{children:t.jsx(jd,{})})}),t.jsx(U,{path:"/mandado/chat",element:t.jsx(le,{children:t.jsx(Cd,{})})}),t.jsx(U,{path:"/favoritos",element:t.jsx(le,{children:t.jsx(Ad,{})})}),t.jsx(U,{path:"/notificaciones",element:t.jsx(le,{children:t.jsx(Ed,{})})}),t.jsx(U,{path:"/registro/comercio",element:t.jsx(le,{children:t.jsx(Pd,{})})}),t.jsx(U,{path:"/trabaja-con-nosotros",element:t.jsx(le,{children:t.jsx(ba,{})})}),t.jsx(U,{path:"/registro/fletero",element:t.jsx(le,{children:t.jsx(ba,{role:"fletero"})})}),t.jsx(U,{path:"/registro/delivery",element:t.jsx(Vt,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(U,{path:"/mi-cuenta",element:t.jsx(le,{children:t.jsx(zd,{})})}),t.jsx(U,{path:"/panel/comercio",element:t.jsx(le,{children:t.jsx(Md,{})})}),t.jsx(U,{path:"/panel/comercio/metricas",element:t.jsx(le,{children:t.jsx(Id,{})})}),t.jsx(U,{path:"/panel/comercio/producto",element:t.jsx(le,{children:t.jsx(Rd,{})})}),t.jsx(U,{path:"/panel/repartidor",element:t.jsx(le,{children:t.jsx(Ld,{})})}),t.jsx(U,{path:"/panel/repartidor/metricas",element:t.jsx(le,{children:t.jsx(_d,{})})}),t.jsx(U,{path:"/panel/admin",element:t.jsx(le,{children:t.jsx(Fd,{})})}),t.jsx(U,{path:"/panel/admin/postulaciones",element:t.jsx(le,{children:t.jsx(Td,{})})}),t.jsx(U,{path:"*",element:t.jsx(Vt,{to:"/",replace:!0})})]})})})})}const Od=()=>{try{window.top!==window.self&&(window.top.location=window.self.location)}catch{document.documentElement.style.display="none"}};Od();zo({immediate:!0});const ho=document.getElementById("root");if(!ho)throw new Error("No se encontró el nodo root");Kt.createRoot(ho).render(t.jsx(Ie.StrictMode,{children:t.jsx(Nd,{})}));export{Gd as $,Er as A,io as B,Xd as C,da as D,Gc as E,Vd as F,Va as G,Bi as H,Qi as I,Pc as J,Rc as K,Lc as L,zc as M,Yc as N,mt as O,yp as P,ae as Q,mp as R,Ce as S,op as T,kr as U,Ae as V,Ye as W,Ja as X,Bd as Y,Hd as Z,qd as _,Zd as a,Jt as a0,Yd as a1,po as a2,zr as a3,Ji as a4,gp as a5,_l as a6,Il as a7,Rl as a8,hp as a9,zs as aA,Qd as aB,Ap as aC,vp as aD,mo as aE,sd as aF,er as aG,Sp as aH,jp as aI,bp as aJ,np as aK,sp as aL,cp as aM,en as aN,Xi as aO,Cp as aP,lp as aQ,dp as aR,Wi as aS,kp as aT,pp as aU,up as aV,Me as aa,Is as ab,Ms as ac,Fe as ad,$p as ae,ap as af,je as ag,Sn as ah,Wd as ai,vr as aj,Kd as ak,Jd as al,pn as am,es as an,Di as ao,_t as ap,xr as aq,ip as ar,ut as as,an as at,ep as au,Qa as av,wp as aw,Ud as ax,Ga as ay,cd as az,xp as b,z as c,As as d,Es as e,rp as f,ud as g,Pr as h,Ep as i,t as j,to as k,qt as l,Gt as m,Nc as n,Ui as o,ed as p,o as q,ga as r,so as s,Yt as t,yd as u,tp as v,fp as w,El as x,Cr as y,Ar as z};
