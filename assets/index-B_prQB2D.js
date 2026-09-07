const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-BhwvWgUU.js","assets/react-D_B_6qYb.js","assets/AddressMapStyled-BxPjERcr.js","assets/AddressMapStyled-CIGW-MKW.css","assets/useCurrentPosition-BYw6bfYw.js","assets/AuthScreen-DHHHiynQ.js","assets/formStyles-DeIzbck0.js","assets/AuthScreenStyled-Bl4cJuM5.js","assets/PanelLoginDialogStyled-B_4rALoq.js","assets/mail-BbOQNGXL.js","assets/shield-check-jtluiSqI.js","assets/log-in-DmvVS1pp.js","assets/CategoriesScreen-CEQqeKuw.js","assets/StoresDirectoryScreen-wIjpgyr3.js","assets/StoreProfileScreen-B7d15ihN.js","assets/saleUnits-CLP-TCsg.js","assets/cartStore-5Q08p6sV.js","assets/clock-3-DaNVLL4y.js","assets/ProductDetailScreen-CW5mCQQW.js","assets/SettingsList-CxKre0en.js","assets/MyOrdersScreen-DHX2gjpM.js","assets/CartScreen-C6z4mLIG.js","assets/ConfirmDialog-CM8a18OP.js","assets/ErrandScreen-DwtfNS0w.js","assets/errandStore-Bion9qKH.js","assets/ErrandChatScreen-oC15KqUs.js","assets/mediaService-D2_VAu2k.js","assets/camera-BjY7o4hZ.js","assets/send-BiuAhozp.js","assets/FavoritesScreen-jmaWKV1N.js","assets/NotificationsScreen-CIR_UMBC.js","assets/badge-percent-BM__a3r5.js","assets/CustomerAccountScreen-CxCexNcD.js","assets/phone-96hvba-g.js","assets/CommerceRegistrationScreen-Bn2fI198.js","assets/useMediaUpload-CTMFYLii.js","assets/FileField-B7H4e9UA.js","assets/ProductFormScreenStyled-5pHj5fPe.js","assets/DeliveryRegistrationScreen-eDYPoHHA.js","assets/MiComercioScreen-Dod4JrN0.js","assets/ChatPedidoDialog-B3aGQD4F.js","assets/message-square-CWBDfyTy.js","assets/CommercePanelScreen-Dz0qUqcw.js","assets/MetricTile-B1cRf4OW.js","assets/ProductFormScreen-Cf2438uV.js","assets/PanelRepartidorScreen-BK_9uKFZ.js","assets/refresh-cw-CzGMLGgI.js","assets/DeliveryPanelScreen-CPbUNEhA.js","assets/AdminPostulacionesScreen-BtmwOtmc.js","assets/AdminPanelScreen-DBZ3ECyE.js"])))=>i.map(i=>d[i]);
import{r as u,a as Ro,g as _o,R as _e,L as be,N as vr,u as Io,b as To,c as or,H as Fo,d as Lo,e as K}from"./react-D_B_6qYb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();var Fa={exports:{}},jt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=u,No=Symbol.for("react.element"),Do=Symbol.for("react.fragment"),Bo=Object.prototype.hasOwnProperty,Ho=Oo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qo={key:!0,ref:!0,__self:!0,__source:!0};function La(e,r,a){var i,s={},c=null,n=null;a!==void 0&&(c=""+a),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(n=r.ref);for(i in r)Bo.call(r,i)&&!qo.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return{$$typeof:No,type:e,key:c,ref:n,props:s,_owner:Ho.current}}jt.Fragment=Do;jt.jsx=La;jt.jsxs=La;Fa.exports=jt;var t=Fa.exports,ir={},Yr=Ro;ir.createRoot=Yr.createRoot,ir.hydrateRoot=Yr.hydrateRoot;const Go="modulepreload",Yo=function(e){return"/LaFranciaGO/"+e},Vr={},Q=function(r,a,i){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),p=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.allSettled(a.map(m=>{if(m=Yo(m),m in Vr)return;Vr[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Go,g||(h.as="script"),h.crossOrigin="",h.href=m,p&&h.setAttribute("nonce",p),document.head.appendChild(h),g)return new Promise((C,f)=>{h.addEventListener("load",C),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(n){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=n,window.dispatchEvent(p),!p.defaultPrevented)throw n}return s.then(n=>{for(const p of n||[])p.status==="rejected"&&c(p.reason);return r().catch(c)})};function Vo(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:s,onRegisteredSW:c,onRegisterError:n}=e;let p,m;const g=async(h=!0)=>{await m};async function x(){if("serviceWorker"in navigator){if(p=await Q(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(h=>{n==null||n(h)}),!p)return;p.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),p.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),p.register({immediate:r}).then(h=>{c?c("/LaFranciaGO/sw.js",h):s==null||s(h)}).catch(h=>{n==null||n(h)})}}return m=x(),g}var Oa={exports:{}},U={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kr=Symbol.for("react.transitional.element"),Sr=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),Et=Symbol.for("react.profiler"),zt=Symbol.for("react.consumer"),Pt=Symbol.for("react.context"),Mt=Symbol.for("react.forward_ref"),Rt=Symbol.for("react.suspense"),_t=Symbol.for("react.suspense_list"),It=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),Uo=Symbol.for("react.view_transition"),Wo=Symbol.for("react.client.reference");function ge(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case kr:switch(e=e.type,e){case At:case Et:case Ct:case Rt:case _t:case Uo:return e;default:switch(e=e&&e.$$typeof,e){case Pt:case Mt:case Tt:case It:return e;case zt:return e;default:return r}}case Sr:return r}}}U.ContextConsumer=zt;U.ContextProvider=Pt;U.Element=kr;U.ForwardRef=Mt;U.Fragment=At;U.Lazy=Tt;U.Memo=It;U.Portal=Sr;U.Profiler=Et;U.StrictMode=Ct;U.Suspense=Rt;U.SuspenseList=_t;U.isContextConsumer=function(e){return ge(e)===zt};U.isContextProvider=function(e){return ge(e)===Pt};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===kr};U.isForwardRef=function(e){return ge(e)===Mt};U.isFragment=function(e){return ge(e)===At};U.isLazy=function(e){return ge(e)===Tt};U.isMemo=function(e){return ge(e)===It};U.isPortal=function(e){return ge(e)===Sr};U.isProfiler=function(e){return ge(e)===Et};U.isStrictMode=function(e){return ge(e)===Ct};U.isSuspense=function(e){return ge(e)===Rt};U.isSuspenseList=function(e){return ge(e)===_t};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===At||e===Et||e===Ct||e===Rt||e===_t||typeof e=="object"&&e!==null&&(e.$$typeof===Tt||e.$$typeof===It||e.$$typeof===Pt||e.$$typeof===zt||e.$$typeof===Mt||e.$$typeof===Wo||e.getModuleId!==void 0)};U.typeOf=ge;Oa.exports=U;var Na=Oa.exports;function Ko(e){function r(k,l,b,S,d){for(var N=0,w=0,ee=0,D=0,G,_,ne=0,ue=0,L,pe=L=G=0,B=0,se=0,He=0,ce=0,tt=b.length,qe=tt-1,fe,P="",re="",Wt="",Kt="",ve;B<tt;){if(_=b.charCodeAt(B),B===qe&&w+D+ee+N!==0&&(w!==0&&(_=w===47?10:47),D=ee=N=0,tt++,qe++),w+D+ee+N===0){if(B===qe&&(0<se&&(P=P.replace(C,"")),0<P.trim().length)){switch(_){case 32:case 9:case 59:case 13:case 10:break;default:P+=b.charAt(B)}_=59}switch(_){case 123:for(P=P.trim(),G=P.charCodeAt(0),L=1,ce=++B;B<tt;){switch(_=b.charCodeAt(B)){case 123:L++;break;case 125:L--;break;case 47:switch(_=b.charCodeAt(B+1)){case 42:case 47:e:{for(pe=B+1;pe<qe;++pe)switch(b.charCodeAt(pe)){case 47:if(_===42&&b.charCodeAt(pe-1)===42&&B+2!==pe){B=pe+1;break e}break;case 10:if(_===47){B=pe+1;break e}}B=pe}}break;case 91:_++;case 40:_++;case 34:case 39:for(;B++<qe&&b.charCodeAt(B)!==_;);}if(L===0)break;B++}switch(L=b.substring(ce,B),G===0&&(G=(P=P.replace(h,"").trim()).charCodeAt(0)),G){case 64:switch(0<se&&(P=P.replace(C,"")),_=P.charCodeAt(1),_){case 100:case 109:case 115:case 45:se=l;break;default:se=F}if(L=r(l,se,L,_,d+1),ce=L.length,0<de&&(se=a(F,P,He),ve=p(3,L,se,l,X,q,ce,_,d,S),P=se.join(""),ve!==void 0&&(ce=(L=ve.trim()).length)===0&&(_=0,L="")),0<ce)switch(_){case 115:P=P.replace(O,n);case 100:case 109:case 45:L=P+"{"+L+"}";break;case 107:P=P.replace($,"$1 $2"),L=P+"{"+L+"}",L=A===1||A===2&&c("@"+L,3)?"@-webkit-"+L+"@"+L:"@"+L;break;default:L=P+L,S===112&&(L=(re+=L,""))}else L="";break;default:L=r(l,a(l,P,He),L,S,d+1)}Wt+=L,L=He=se=pe=G=0,P="",_=b.charCodeAt(++B);break;case 125:case 59:if(P=(0<se?P.replace(C,""):P).trim(),1<(ce=P.length))switch(pe===0&&(G=P.charCodeAt(0),G===45||96<G&&123>G)&&(ce=(P=P.replace(" ",":")).length),0<de&&(ve=p(1,P,l,k,X,q,re.length,S,d,S))!==void 0&&(ce=(P=ve.trim()).length)===0&&(P="\0\0"),G=P.charCodeAt(0),_=P.charCodeAt(1),G){case 0:break;case 64:if(_===105||_===99){Kt+=P+b.charAt(B);break}default:P.charCodeAt(ce-1)!==58&&(re+=s(P,G,_,P.charCodeAt(2)))}He=se=pe=G=0,P="",_=b.charCodeAt(++B)}}switch(_){case 13:case 10:w===47?w=0:1+G===0&&S!==107&&0<P.length&&(se=1,P+="\0"),0<de*$e&&p(0,P,l,k,X,q,re.length,S,d,S),q=1,X++;break;case 59:case 125:if(w+D+ee+N===0){q++;break}default:switch(q++,fe=b.charAt(B),_){case 9:case 32:if(D+N+w===0)switch(ne){case 44:case 58:case 9:case 32:fe="";break;default:_!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:D+w+N===0&&(se=He=1,fe="\f"+fe);break;case 108:if(D+w+N+oe===0&&0<pe)switch(B-pe){case 2:ne===112&&b.charCodeAt(B-3)===58&&(oe=ne);case 8:ue===111&&(oe=ue)}break;case 58:D+w+N===0&&(pe=B);break;case 44:w+ee+D+N===0&&(se=1,fe+="\r");break;case 34:case 39:w===0&&(D=D===_?0:D===0?_:D);break;case 91:D+w+ee===0&&N++;break;case 93:D+w+ee===0&&N--;break;case 41:D+w+N===0&&ee--;break;case 40:if(D+w+N===0){if(G===0)switch(2*ne+3*ue){case 533:break;default:G=1}ee++}break;case 64:w+ee+D+N+pe+L===0&&(L=1);break;case 42:case 47:if(!(0<D+N+ee))switch(w){case 0:switch(2*_+3*b.charCodeAt(B+1)){case 235:w=47;break;case 220:ce=B,w=42}break;case 42:_===47&&ne===42&&ce+2!==B&&(b.charCodeAt(ce+2)===33&&(re+=b.substring(ce,B+1)),fe="",w=0)}}w===0&&(P+=fe)}ue=ne,ne=_,B++}if(ce=re.length,0<ce){if(se=l,0<de&&(ve=p(2,re,se,k,X,q,ce,S,d,S),ve!==void 0&&(re=ve).length===0))return Kt+re+Wt;if(re=se.join(",")+"{"+re+"}",A*oe!==0){switch(A!==2||c(re,2)||(oe=0),oe){case 111:re=re.replace(E,":-moz-$1")+re;break;case 112:re=re.replace(I,"::-webkit-input-$1")+re.replace(I,"::-moz-$1")+re.replace(I,":-ms-input-$1")+re}oe=0}}return Kt+re+Wt}function a(k,l,b){var S=l.trim().split(y);l=S;var d=S.length,N=k.length;switch(N){case 0:case 1:var w=0;for(k=N===0?"":k[0]+" ";w<d;++w)l[w]=i(k,l[w],b).trim();break;default:var ee=w=0;for(l=[];w<d;++w)for(var D=0;D<N;++D)l[ee++]=i(k[D]+" ",S[w],b).trim()}return l}function i(k,l,b){var S=l.charCodeAt(0);switch(33>S&&(S=(l=l.trim()).charCodeAt(0)),S){case 38:return l.replace(v,"$1"+k.trim());case 58:return k.trim()+l.replace(v,"$1"+k.trim());default:if(0<1*b&&0<l.indexOf("\f"))return l.replace(v,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+l}function s(k,l,b,S){var d=k+";",N=2*l+3*b+4*S;if(N===944){k=d.indexOf(":",9)+1;var w=d.substring(k,d.length-1).trim();return w=d.substring(0,k).trim()+w+";",A===1||A===2&&c(w,1)?"-webkit-"+w+w:w}if(A===0||A===2&&!c(d,1))return d;switch(N){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(J,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return w=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+w+"-webkit-"+d+"-ms-flex-pack"+w+d;case 1005:return j.test(d)?d.replace(f,":-webkit-")+d.replace(f,":-moz-")+d:d;case 1e3:switch(w=d.substring(13).trim(),l=w.indexOf("-")+1,w.charCodeAt(0)+w.charCodeAt(l)){case 226:w=d.replace(M,"tb");break;case 232:w=d.replace(M,"tb-rl");break;case 220:w=d.replace(M,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+w+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(l=(d=k).length-10,w=(d.charCodeAt(l)===33?d.substring(0,l):d).substring(k.indexOf(":",7)+1).trim(),N=w.charCodeAt(0)+(w.charCodeAt(7)|0)){case 203:if(111>w.charCodeAt(8))break;case 115:d=d.replace(w,"-webkit-"+w)+";"+d;break;case 207:case 102:d=d.replace(w,"-webkit-"+(102<N?"inline-":"")+"box")+";"+d.replace(w,"-webkit-"+w)+";"+d.replace(w,"-ms-"+w+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return w=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+w+"-ms-flex-"+w+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(H,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(H,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(W.test(k)===!0)return(w=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?s(k.replace("stretch","fill-available"),l,b,S).replace(":fill-available",":stretch"):d.replace(w,"-webkit-"+w)+d.replace(w,"-moz-"+w.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,b+S===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(R,"$1-webkit-$2")+d}return d}function c(k,l){var b=k.indexOf(l===1?":":"{"),S=k.substring(0,l!==3?b:10);return b=k.substring(b+1,k.length-1),we(l!==2?S:S.replace(Z,"$1"),b,l)}function n(k,l){var b=s(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return b!==l+";"?b.replace(V," or ($1)").substring(4):"("+l+")"}function p(k,l,b,S,d,N,w,ee,D,G){for(var _=0,ne=l,ue;_<de;++_)switch(ue=te[_].call(x,k,ne,b,S,d,N,w,ee,D,G)){case void 0:case!1:case!0:case null:break;default:ne=ue}if(ne!==l)return ne}function m(k){switch(k){case void 0:case null:de=te.length=0;break;default:if(typeof k=="function")te[de++]=k;else if(typeof k=="object")for(var l=0,b=k.length;l<b;++l)m(k[l]);else $e=!!k|0}return m}function g(k){return k=k.prefix,k!==void 0&&(we=null,k?typeof k!="function"?A=1:(A=2,we=k):A=0),g}function x(k,l){var b=k;if(33>b.charCodeAt(0)&&(b=b.trim()),xe=b,b=[xe],0<de){var S=p(-1,l,b,b,X,q,0,0,0,0);S!==void 0&&typeof S=="string"&&(l=S)}var d=r(F,b,l,0,0);return 0<de&&(S=p(-2,d,b,b,X,q,d.length,0,0,0),S!==void 0&&(d=S)),xe="",oe=0,q=X=1,d}var h=/^\0+/g,C=/[\0\r\f]/g,f=/: */g,j=/zoo|gra/,R=/([,: ])(transform)/g,y=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,$=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,E=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,H=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,q=1,X=1,oe=0,A=1,F=[],te=[],de=0,we=null,$e=0,xe="";return x.use=m,x.set=g,e!==void 0&&g(e),x}var Xo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Zo(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var Jo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ur=Zo(function(e){return Jo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Da={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,jr=ie?Symbol.for("react.element"):60103,Ar=ie?Symbol.for("react.portal"):60106,Ft=ie?Symbol.for("react.fragment"):60107,Lt=ie?Symbol.for("react.strict_mode"):60108,Ot=ie?Symbol.for("react.profiler"):60114,Nt=ie?Symbol.for("react.provider"):60109,Dt=ie?Symbol.for("react.context"):60110,Cr=ie?Symbol.for("react.async_mode"):60111,Bt=ie?Symbol.for("react.concurrent_mode"):60111,Ht=ie?Symbol.for("react.forward_ref"):60112,qt=ie?Symbol.for("react.suspense"):60113,Qo=ie?Symbol.for("react.suspense_list"):60120,Gt=ie?Symbol.for("react.memo"):60115,Yt=ie?Symbol.for("react.lazy"):60116,ei=ie?Symbol.for("react.block"):60121,ti=ie?Symbol.for("react.fundamental"):60117,ri=ie?Symbol.for("react.responder"):60118,ai=ie?Symbol.for("react.scope"):60119;function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case jr:switch(e=e.type,e){case Cr:case Bt:case Ft:case Ot:case Lt:case qt:return e;default:switch(e=e&&e.$$typeof,e){case Dt:case Ht:case Yt:case Gt:case Nt:return e;default:return r}}case Ar:return r}}}function Ba(e){return me(e)===Bt}Y.AsyncMode=Cr;Y.ConcurrentMode=Bt;Y.ContextConsumer=Dt;Y.ContextProvider=Nt;Y.Element=jr;Y.ForwardRef=Ht;Y.Fragment=Ft;Y.Lazy=Yt;Y.Memo=Gt;Y.Portal=Ar;Y.Profiler=Ot;Y.StrictMode=Lt;Y.Suspense=qt;Y.isAsyncMode=function(e){return Ba(e)||me(e)===Cr};Y.isConcurrentMode=Ba;Y.isContextConsumer=function(e){return me(e)===Dt};Y.isContextProvider=function(e){return me(e)===Nt};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr};Y.isForwardRef=function(e){return me(e)===Ht};Y.isFragment=function(e){return me(e)===Ft};Y.isLazy=function(e){return me(e)===Yt};Y.isMemo=function(e){return me(e)===Gt};Y.isPortal=function(e){return me(e)===Ar};Y.isProfiler=function(e){return me(e)===Ot};Y.isStrictMode=function(e){return me(e)===Lt};Y.isSuspense=function(e){return me(e)===qt};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ft||e===Bt||e===Ot||e===Lt||e===qt||e===Qo||typeof e=="object"&&e!==null&&(e.$$typeof===Yt||e.$$typeof===Gt||e.$$typeof===Nt||e.$$typeof===Dt||e.$$typeof===Ht||e.$$typeof===ti||e.$$typeof===ri||e.$$typeof===ai||e.$$typeof===ei)};Y.typeOf=me;Da.exports=Y;var oi=Da.exports,Er=oi,ii={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ni={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},si={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ha={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zr={};zr[Er.ForwardRef]=si;zr[Er.Memo]=Ha;function Wr(e){return Er.isMemo(e)?Ha:zr[e.$$typeof]||ii}var ci=Object.defineProperty,li=Object.getOwnPropertyNames,Kr=Object.getOwnPropertySymbols,di=Object.getOwnPropertyDescriptor,pi=Object.getPrototypeOf,Xr=Object.prototype;function qa(e,r,a){if(typeof r!="string"){if(Xr){var i=pi(r);i&&i!==Xr&&qa(e,i,a)}var s=li(r);Kr&&(s=s.concat(Kr(r)));for(var c=Wr(e),n=Wr(r),p=0;p<s.length;++p){var m=s[p];if(!ni[m]&&!(a&&a[m])&&!(n&&n[m])&&!(c&&c[m])){var g=di(r,m);try{ci(e,m,g)}catch{}}}}return e}var ui=qa;const mi=_o(ui);var he={};function ye(){return(ye=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var Zr=function(e,r){for(var a=[e[0]],i=0,s=r.length;i<s;i+=1)a.push(r[i],e[i+1]);return a},nr=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Na.typeOf(e)},xt=Object.freeze([]),je=Object.freeze({});function Ne(e){return typeof e=="function"}function Jr(e){return e.displayName||e.name||"Component"}function Pr(e){return e&&typeof e.styledComponentId=="string"}var De=typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_ATTR||he.SC_ATTR)||"data-styled",Mr=typeof window<"u"&&"HTMLElement"in window,hi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&he!==void 0&&(he.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&he.REACT_APP_SC_DISABLE_SPEEDY!==""?he.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&he.REACT_APP_SC_DISABLE_SPEEDY:he.SC_DISABLE_SPEEDY!==void 0&&he.SC_DISABLE_SPEEDY!==""&&he.SC_DISABLE_SPEEDY!=="false"&&he.SC_DISABLE_SPEEDY)),gi={};function Pe(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var fi=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,s=0;s<a;s++)i+=this.groupSizes[s];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,n=c;a>=n;)(n<<=1)<0&&Pe(16,""+a);this.groupSizes=new Uint32Array(n),this.groupSizes.set(s),this.length=n;for(var p=c;p<n;p++)this.groupSizes[p]=0}for(var m=this.indexOfGroup(a+1),g=0,x=i.length;g<x;g++)this.tag.insertRule(m,i[g])&&(this.groupSizes[a]++,m++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],s=this.indexOfGroup(a),c=s+i;this.groupSizes[a]=0;for(var n=s;n<c;n++)this.tag.deleteRule(s)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var s=this.groupSizes[a],c=this.indexOfGroup(a),n=c+s,p=c;p<n;p++)i+=this.tag.getRule(p)+`/*!sc*/
`;return i},e}(),ft=new Map,wt=new Map,Ke=1,rt=function(e){if(ft.has(e))return ft.get(e);for(;wt.has(Ke);)Ke++;var r=Ke++;return ft.set(e,r),wt.set(r,e),r},yi=function(e){return wt.get(e)},bi=function(e,r){r>=Ke&&(Ke=r+1),ft.set(e,r),wt.set(r,e)},xi="style["+De+'][data-styled-version="5.3.11"]',wi=new RegExp("^"+De+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$i=function(e,r,a){for(var i,s=a.split(","),c=0,n=s.length;c<n;c++)(i=s[c])&&e.registerName(r,i)},vi=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],s=0,c=a.length;s<c;s++){var n=a[s].trim();if(n){var p=n.match(wi);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(bi(g,m),$i(e,g,p[3]),e.getTag().insertRules(m,i)),i.length=0}else i.push(n)}}},ki=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ga=function(e){var r=document.head,a=e||r,i=document.createElement("style"),s=function(p){for(var m=p.childNodes,g=m.length;g>=0;g--){var x=m[g];if(x&&x.nodeType===1&&x.hasAttribute(De))return x}}(a),c=s!==void 0?s.nextSibling:null;i.setAttribute(De,"active"),i.setAttribute("data-styled-version","5.3.11");var n=ki();return n&&i.setAttribute("nonce",n),a.insertBefore(i,c),i},Si=function(){function e(a){var i=this.element=Ga(a);i.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,n=0,p=c.length;n<p;n++){var m=c[n];if(m.ownerNode===s)return m}Pe(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),ji=function(){function e(a){var i=this.element=Ga(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var s=document.createTextNode(i),c=this.nodes[a];return this.element.insertBefore(s,c||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Ai=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),Qr=Mr,Ci={isServer:!Mr,useCSSOMInjection:!hi},$t=function(){function e(a,i,s){a===void 0&&(a=je),i===void 0&&(i={}),this.options=ye({},Ci,{},a),this.gs=i,this.names=new Map(s),this.server=!!a.isServer,!this.server&&Mr&&Qr&&(Qr=!1,function(c){for(var n=document.querySelectorAll(xi),p=0,m=n.length;p<m;p++){var g=n[p];g&&g.getAttribute(De)!=="active"&&(vi(c,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}e.registerId=function(a){return rt(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ye({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(s=(i=this.options).isServer,c=i.useCSSOMInjection,n=i.target,a=s?new Ai(n):c?new Si(n):new ji(n),new fi(a)));var a,i,s,c,n},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(rt(a),this.names.has(a))this.names.get(a).add(i);else{var s=new Set;s.add(i),this.names.set(a,s)}},r.insertRules=function(a,i,s){this.registerName(a,i),this.getTag().insertRules(rt(a),s)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(rt(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),s=i.length,c="",n=0;n<s;n++){var p=yi(n);if(p!==void 0){var m=a.names.get(p),g=i.getGroup(n);if(m&&g&&m.size){var x=De+".g"+n+'[id="'+p+'"]',h="";m!==void 0&&m.forEach(function(C){C.length>0&&(h+=C+",")}),c+=""+g+x+'{content:"'+h+`"}/*!sc*/
`}}}return c}(this)},e}(),Ei=/(a)(d)/gi,ea=function(e){return String.fromCharCode(e+(e>25?39:97))};function sr(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=ea(r%52)+a;return(ea(r%52)+a).replace(Ei,"$1-$2")}var Te=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},Ya=function(e){return Te(5381,e)};function Va(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Ne(a)&&!Pr(a))return!1}return!0}var zi=Ya("5.3.11"),Pi=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Va(r),this.componentId=a,this.baseHash=Te(zi,a),this.baseStyle=i,$t.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var s=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(s,this.staticRulesId))c.push(this.staticRulesId);else{var n=Me(this.rules,r,a,i).join(""),p=sr(Te(this.baseHash,n)>>>0);if(!a.hasNameForId(s,p)){var m=i(n,"."+p,void 0,s);a.insertRules(s,p,m)}c.push(p),this.staticRulesId=p}else{for(var g=this.rules.length,x=Te(this.baseHash,i.hash),h="",C=0;C<g;C++){var f=this.rules[C];if(typeof f=="string")h+=f;else if(f){var j=Me(f,r,a,i),R=Array.isArray(j)?j.join(""):j;x=Te(x,R+C),h+=R}}if(h){var y=sr(x>>>0);if(!a.hasNameForId(s,y)){var v=i(h,"."+y,void 0,s);a.insertRules(s,y,v)}c.push(y)}}return c.join(" ")},e}(),Mi=/^\s*\/\/.*$/gm,Ri=[":","[",".","#"];function _i(e){var r,a,i,s,c=je,n=c.options,p=n===void 0?je:n,m=c.plugins,g=m===void 0?xt:m,x=new Ko(p),h=[],C=function(R){function y(v){if(v)try{R(v+"}")}catch{}}return function(v,$,I,E,M,O,V,H,Z,W){switch(v){case 1:if(Z===0&&$.charCodeAt(0)===64)return R($+";"),"";break;case 2:if(H===0)return $+"/*|*/";break;case 3:switch(H){case 102:case 112:return R(I[0]+$),"";default:return $+(W===0?"/*|*/":"")}case-2:$.split("/*|*/}").forEach(y)}}}(function(R){h.push(R)}),f=function(R,y,v){return y===0&&Ri.indexOf(v[a.length])!==-1||v.match(s)?R:"."+r};function j(R,y,v,$){$===void 0&&($="&");var I=R.replace(Mi,""),E=y&&v?v+" "+y+" { "+I+" }":I;return r=$,a=y,i=new RegExp("\\"+a+"\\b","g"),s=new RegExp("(\\"+a+"\\b){2,}"),x(v||!y?"":y,E)}return x.use([].concat(g,[function(R,y,v){R===2&&v.length&&v[0].lastIndexOf(a)>0&&(v[0]=v[0].replace(i,f))},C,function(R){if(R===-2){var y=h;return h=[],y}}])),j.hash=g.length?g.reduce(function(R,y){return y.name||Pe(15),Te(R,y.name)},5381).toString():"",j}var Ua=_e.createContext();Ua.Consumer;var Wa=_e.createContext(),Ii=(Wa.Consumer,new $t),cr=_i();function Ka(){return u.useContext(Ua)||Ii}function Xa(){return u.useContext(Wa)||cr}var Za=function(){function e(r,a){var i=this;this.inject=function(s,c){c===void 0&&(c=cr);var n=i.name+c.hash;s.hasNameForId(i.id,n)||s.insertRules(i.id,n,c(i.rules,n,"@keyframes"))},this.toString=function(){return Pe(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=cr),this.name+r.hash},e}(),Ti=/([A-Z])/,Fi=/([A-Z])/g,Li=/^ms-/,Oi=function(e){return"-"+e.toLowerCase()};function ta(e){return Ti.test(e)?e.replace(Fi,Oi).replace(Li,"-ms-"):e}var ra=function(e){return e==null||e===!1||e===""};function Me(e,r,a,i){if(Array.isArray(e)){for(var s,c=[],n=0,p=e.length;n<p;n+=1)(s=Me(e[n],r,a,i))!==""&&(Array.isArray(s)?c.push.apply(c,s):c.push(s));return c}if(ra(e))return"";if(Pr(e))return"."+e.styledComponentId;if(Ne(e)){if(typeof(g=e)!="function"||g.prototype&&g.prototype.isReactComponent||!r)return e;var m=e(r);return Me(m,r,a,i)}var g;return e instanceof Za?a?(e.inject(a,i),e.getName(i)):e:nr(e)?function x(h,C){var f,j,R=[];for(var y in h)h.hasOwnProperty(y)&&!ra(h[y])&&(Array.isArray(h[y])&&h[y].isCss||Ne(h[y])?R.push(ta(y)+":",h[y],";"):nr(h[y])?R.push.apply(R,x(h[y],y)):R.push(ta(y)+": "+(f=y,(j=h[y])==null||typeof j=="boolean"||j===""?"":typeof j!="number"||j===0||f in Xo||f.startsWith("--")?String(j).trim():j+"px")+";"));return C?[C+" {"].concat(R,["}"]):R}(e):e.toString()}var aa=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ae(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return Ne(e)||nr(e)?aa(Me(Zr(xt,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:aa(Me(Zr(e,a)))}var Ja=function(e,r,a){return a===void 0&&(a=je),e.theme!==a.theme&&e.theme||r||a.theme},Ni=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Di=/(^-|-$)/g;function Xt(e){return e.replace(Ni,"-").replace(Di,"")}var Rr=function(e){return sr(Ya(e)>>>0)};function at(e){return typeof e=="string"&&!0}var lr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Bi=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Hi(e,r,a){var i=e[a];lr(r)&&lr(i)?Qa(i,r):e[a]=r}function Qa(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var s=0,c=a;s<c.length;s++){var n=c[s];if(lr(n))for(var p in n)Bi(p)&&Hi(e,n[p],p)}return e}var Xe=_e.createContext();Xe.Consumer;function qi(e){var r=u.useContext(Xe),a=u.useMemo(function(){return function(i,s){if(!i)return Pe(14);if(Ne(i)){var c=i(s);return c}return Array.isArray(i)||typeof i!="object"?Pe(8):s?ye({},s,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?_e.createElement(Xe.Provider,{value:a},e.children):null}var Zt={};function eo(e,r,a){var i=Pr(e),s=!at(e),c=r.attrs,n=c===void 0?xt:c,p=r.componentId,m=p===void 0?function($,I){var E=typeof $!="string"?"sc":Xt($);Zt[E]=(Zt[E]||0)+1;var M=E+"-"+Rr("5.3.11"+E+Zt[E]);return I?I+"-"+M:M}(r.displayName,r.parentComponentId):p,g=r.displayName,x=g===void 0?function($){return at($)?"styled."+$:"Styled("+Jr($)+")"}(e):g,h=r.displayName&&r.componentId?Xt(r.displayName)+"-"+r.componentId:r.componentId||m,C=i&&e.attrs?Array.prototype.concat(e.attrs,n).filter(Boolean):n,f=r.shouldForwardProp;i&&e.shouldForwardProp&&(f=r.shouldForwardProp?function($,I,E){return e.shouldForwardProp($,I,E)&&r.shouldForwardProp($,I,E)}:e.shouldForwardProp);var j,R=new Pi(a,h,i?e.componentStyle:void 0),y=R.isStatic&&n.length===0,v=function($,I){return function(E,M,O,V){var H=E.attrs,Z=E.componentStyle,W=E.defaultProps,J=E.foldedComponentIds,q=E.shouldForwardProp,X=E.styledComponentId,oe=E.target,A=function(S,d,N){S===void 0&&(S=je);var w=ye({},d,{theme:S}),ee={};return N.forEach(function(D){var G,_,ne,ue=D;for(G in Ne(ue)&&(ue=ue(w)),ue)w[G]=ee[G]=G==="className"?(_=ee[G],ne=ue[G],_&&ne?_+" "+ne:_||ne):ue[G]}),[w,ee]}(Ja(M,u.useContext(Xe),W)||je,M,H),F=A[0],te=A[1],de=function(S,d,N,w){var ee=Ka(),D=Xa(),G=d?S.generateAndInjectStyles(je,ee,D):S.generateAndInjectStyles(N,ee,D);return G}(Z,V,F),we=O,$e=te.$as||M.$as||te.as||M.as||oe,xe=at($e),k=te!==M?ye({},M,{},te):M,l={};for(var b in k)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?l.as=k[b]:(q?q(b,Ur,$e):!xe||Ur(b))&&(l[b]=k[b]));return M.style&&te.style!==M.style&&(l.style=ye({},M.style,{},te.style)),l.className=Array.prototype.concat(J,X,de!==X?de:null,M.className,te.className).filter(Boolean).join(" "),l.ref=we,u.createElement($e,l)}(j,$,I,y)};return v.displayName=x,(j=_e.forwardRef(v)).attrs=C,j.componentStyle=R,j.displayName=x,j.shouldForwardProp=f,j.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):xt,j.styledComponentId=h,j.target=i?e.target:e,j.withComponent=function($){var I=r.componentId,E=function(O,V){if(O==null)return{};var H,Z,W={},J=Object.keys(O);for(Z=0;Z<J.length;Z++)H=J[Z],V.indexOf(H)>=0||(W[H]=O[H]);return W}(r,["componentId"]),M=I&&I+"-"+(at($)?$:Xt(Jr($)));return eo($,ye({},E,{attrs:C,componentId:M}),a)},Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=i?Qa({},e.defaultProps,$):$}}),Object.defineProperty(j,"toString",{value:function(){return"."+j.styledComponentId}}),s&&mi(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),j}var o=function(e){return function r(a,i,s){if(s===void 0&&(s=je),!Na.isValidElementType(i))return Pe(1,String(i));var c=function(){return a(i,s,ae.apply(void 0,arguments))};return c.withConfig=function(n){return r(a,i,ye({},s,{},n))},c.attrs=function(n){return r(a,i,ye({},s,{attrs:Array.prototype.concat(s.attrs,n).filter(Boolean)}))},c}(eo,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var Gi=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=Va(a),$t.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,s,c){var n=c(Me(this.rules,i,s,c).join(""),""),p=this.componentId+a;s.insertRules(p,p,n)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,s,c){a>2&&$t.registerId(this.componentId+a),this.removeStyles(a,s),this.createStyles(a,i,s,c)},e}();function Yi(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=ae.apply(void 0,[e].concat(a)),c="sc-global-"+Rr(JSON.stringify(s)),n=new Gi(s,c);function p(g){var x=Ka(),h=Xa(),C=u.useContext(Xe),f=u.useRef(x.allocateGSInstance(c)).current;return x.server&&m(f,g,x,C,h),u.useLayoutEffect(function(){if(!x.server)return m(f,g,x,C,h),function(){return n.removeStyles(f,x)}},[f,g,x,C,h]),null}function m(g,x,h,C,f){if(n.isStatic)n.renderStyles(g,gi,h,f);else{var j=ye({},x,{theme:Ja(x,C,p.defaultProps)});n.renderStyles(g,j,h,f)}}return _e.memo(p)}function Vt(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var s=ae.apply(void 0,[e].concat(a)).join(""),c=Rr(s);return new Za(c,s)}const Vi=Yi`
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
`,ke={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},Ui=ke.shadow,Wi={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},Ki={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},Xi=e=>({mode:e,color:e==="dark"?Wi:ke.color,typography:ke.typography,spacing:ke.spacing,radius:ke.radius,shadow:e==="dark"?Ki:Ui,layout:ke.layout,breakpoints:ke.breakpoints,zIndex:ke.zIndex}),to="lafranciago-theme-mode",ro=u.createContext(null),Zi=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(to);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function Ji({children:e}){const[r,a]=u.useState(Zi),i=u.useRef(!1);u.useEffect(()=>{if(window.localStorage.setItem(to,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const m=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(m),delete document.documentElement.dataset.themeTransition}},[r]);const s=u.useCallback(()=>{a(m=>m==="light"?"dark":"light")},[]),c=u.useCallback(m=>{a(m)},[]),n=u.useMemo(()=>Xi(r),[r]),p=u.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:s,setMode:c}),[r,c,s]);return t.jsx(ro.Provider,{value:p,children:t.jsxs(qi,{theme:n,children:[t.jsx(Vi,{}),e]})})}function Qi(){const e=u.useContext(ro);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var en={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),z=(e,r)=>{const a=u.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:n,className:p="",children:m,...g},x)=>u.createElement("svg",{ref:x,...en,width:s,height:s,stroke:i,strokeWidth:n?Number(c)*24/Number(s):c,className:["lucide",`lucide-${tn(e)}`,p].join(" "),...g},[...r.map(([h,C])=>u.createElement(h,C)),...Array.isArray(m)?m:[m]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=z("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=z("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=z("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=z("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=z("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=z("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=z("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=z("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=z("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=z("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=z("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=z("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=z("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=z("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=z("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=z("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=z("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=z("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=z("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function yo({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const yt="lafranciago:foto-perfil",pr=new Set;let Ge=null,na=!1;const xn=()=>pr.forEach(e=>e()),bo=e=>/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(e),wn=()=>{try{const e=window.localStorage.getItem(yt);return e&&bo(e)?e:null}catch{return null}};function sa(e){if(!(e!==null&&!bo(e))){Ge=e;try{e?window.localStorage.setItem(yt,e):window.localStorage.removeItem(yt)}catch{try{window.localStorage.removeItem(yt)}catch{}}xn()}}function $n(){const[e,r]=u.useState(Ge);u.useEffect(()=>{na||(na=!0,Ge=wn()),r(Ge);const i=()=>r(Ge);return pr.add(i),()=>{pr.delete(i)}},[]);const a=u.useCallback(()=>sa(null),[]);return{photo:e,setPhoto:sa,clearPhoto:a}}const vn="https://photon.komoot.io/api/",kn="https://nominatim.openstreetmap.org/reverse",ur={lat:-31.4063691,lon:-62.6332043},Jt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Sn=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",jn=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function An(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(ur.lat),lon:String(ur.lon)});try{const s=await fetch(`${vn}?${i.toString()}`,{signal:r});return s.ok?((await s.json()).features??[]).map((n,p)=>{var h;const m=n.properties??{},[g,x]=((h=n.geometry)==null?void 0:h.coordinates)??[];return typeof x!="number"||typeof g!="number"?null:{id:`${m.type??"geo"}-${p}-${x}-${g}`,label:Sn(m),context:jn(m),lat:x,lon:g}}).filter(n=>n!==null).sort((n,p)=>{const m=Jt(a),g=Jt(n.label).startsWith(m),x=Jt(p.label).startsWith(m);return g!==x?g?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Cn(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const s=await fetch(`${kn}?${i.toString()}`,{signal:a});if(!s.ok)return null;const n=(await s.json()).address??{};return[n.road,n.house_number].filter(Boolean).join(" ")||n.neighbourhood||n.city||null}catch{return null}}const En=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],zn=Vt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Pn=Vt`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Mn=o.div`
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
  animation: ${zn} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Rn=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Pn} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_n=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,In=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
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
`,Fn=o.input`
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
`,Ln=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,On=o.button`
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
`,Nn=o.button`
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
`;function Dn({open:e,address:r,onCancel:a,onSave:i}){const[s,c]=u.useState("");if(u.useEffect(()=>{e&&c("")},[e]),u.useEffect(()=>{if(!e)return;const m=g=>{g.key==="Escape"&&a()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[a,e]),!e)return null;const n=s.trim(),p=m=>{m.preventDefault(),n&&i(n)};return t.jsx(Mn,{onClick:m=>{m.stopPropagation(),a()},role:"presentation",children:t.jsxs(Rn,{as:"form",onSubmit:p,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:m=>m.stopPropagation(),children:[t.jsx(_n,{children:"Nombre de la dirección"}),r?t.jsx(In,{children:r}):null,t.jsx(Tn,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(Fn,{id:"address-name",value:s,onChange:m=>c(m.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(Ln,{children:[t.jsx(On,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(Nn,{type:"submit",disabled:!n,children:"Guardar"})]})]})})}const Ae=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neonMuted};
    `}
`,mr=ae`
  ${({theme:e})=>e.mode==="dark"&&ae`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,Bn=ae`
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
`;const Hn=o.div`
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
`,qn=o.div`
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
`,Gn=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,Yn=o.span`
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
`,Vn=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Un=o.button`
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

  ${Ae};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,Wn=o.div`
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
`,Kn=o.div`
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
`,Xn=o.input`
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
`,Zn=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Jn=o.button`
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
`,Qn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,es=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,ts=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,rs=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,as=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,os=o.button`
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
`,is=o.button`
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

  ${Ae};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,ns=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,ss=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,cs=o.button`
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
`,ls=o.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,ds=o.button`
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
`,ps=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,us=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ms=o.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,hs=u.lazy(()=>Q(()=>import("./AddressMap-BhwvWgUU.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.AddressMap}))),gs=260,fs=350;function ys({open:e,currentId:r,onClose:a,onSelect:i,startOnNew:s=!1}){const[c,n]=u.useState(!1),[p,m]=u.useState(!1),[g,x]=u.useState(s?"new":"list"),[h,C]=u.useState(""),[f,j]=u.useState([]),[R,y]=u.useState(!1),[v,$]=u.useState(null),[I,E]=u.useState([]),[M,O]=u.useState(!1),V=u.useRef(!1);u.useEffect(()=>{if(e){n(!0),x(s?"new":"list");const F=window.requestAnimationFrame(()=>m(!0));return()=>window.cancelAnimationFrame(F)}if(!c)return;m(!1);const A=window.setTimeout(()=>{n(!1),x(s?"new":"list"),C(""),j([]),$(null),O(!1)},gs);return()=>window.clearTimeout(A)},[c,e,s]),u.useEffect(()=>{if(!e)return;const A=F=>{if(F.key==="Escape"&&!M){if(g==="new"){x("list");return}a()}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[M,a,e,g]),u.useEffect(()=>{if(g!=="new")return;if(V.current){V.current=!1;return}const A=h.trim();if(A.length<2){j([]),y(!1);return}const F=new AbortController;y(!0);const te=window.setTimeout(()=>{An(A,F.signal).then(de=>{j(de),y(!1)}).catch(()=>y(!1))},fs);return()=>{window.clearTimeout(te),F.abort()}},[h,g]);const H=u.useMemo(()=>[...En,...I],[I]),Z=A=>{V.current=!0,C(A.label),j([]),$({lat:A.lat,lon:A.lon})},W=(A,F)=>{$({lat:A,lon:F}),Cn(A,F).then(te=>{te&&(V.current=!0,C(te),j([]))})},J=A=>{const F={id:`custom-${Date.now()}`,label:A,address:h.trim(),primary:!1};E(te=>[...te,F]),O(!1),i(F.id,F.address),a()};if(!c)return null;const q=g==="new",X=v??ur,oe=v!==null&&h.trim().length>=3;return t.jsxs(Hn,{"data-visible":p,onClick:a,role:"presentation",children:[t.jsxs(qn,{"data-visible":p,"data-full":q,role:"dialog","aria-modal":"true","aria-label":q?"Agregar una dirección nueva":"Dirección de entrega",onClick:A=>A.stopPropagation(),children:[t.jsxs(Gn,{children:[t.jsx(Yn,{"aria-hidden":"true"}),q?t.jsx(is,{type:"button",onClick:()=>x("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(rn,{size:18,"aria-hidden":"true"})}):null,t.jsx(Vn,{children:q?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(Un,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(fo,{size:18,"aria-hidden":"true"})})]}),t.jsx(Wn,{"data-full":q,children:q?t.jsxs(t.Fragment,{children:[t.jsxs(Kn,{children:[t.jsx(dr,{size:18,"aria-hidden":"true"}),t.jsx(Xn,{value:h,onChange:A=>C(A.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),f.length>0?t.jsx(ls,{"aria-label":"Sugerencias de direcciones",children:f.map(A=>t.jsxs(ds,{type:"button",onClick:()=>Z(A),children:[t.jsx(kt,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(ps,{children:A.label}),A.context?t.jsx(us,{children:A.context}):null]})]},A.id))}):null,f.length===0&&R?t.jsx(ms,{children:"Buscando…"}):null,t.jsx(ns,{children:t.jsx(u.Suspense,{fallback:null,children:t.jsx(hs,{lat:X.lat,lon:X.lon,onPick:W})})}),t.jsx(ss,{children:v?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(cs,{type:"button",onClick:()=>O(!0),disabled:!oe,children:[t.jsx(kt,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(Zn,{children:"Tus direcciones guardadas"}),H.map(A=>t.jsxs(Jn,{type:"button","data-current":A.id===r,onClick:()=>{i(A.id,A.address),a()},children:[t.jsx(Qn,{children:t.jsx(Tr,{size:18,"aria-hidden":"true"})}),t.jsxs(es,{children:[t.jsx(ts,{children:A.label}),t.jsx(rs,{children:A.address})]}),A.id===r?t.jsx(as,{"aria-label":"Dirección actual",children:t.jsx(on,{size:16,"aria-hidden":"true"})}):null]},A.id)),t.jsxs(os,{type:"button",onClick:()=>x("new"),children:[t.jsx(lo,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(Dn,{open:M,address:h.trim(),onCancel:()=>O(!1),onSave:J})]})}const bs=o.form`
  width: 100%;
`,xs=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,ws=o.div`
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
`,$s=o.input`
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
`,vs=o.button`
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
`,xo=u.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:s,id:c="marketplace-search"},n){const p=m=>{m.preventDefault()};return t.jsxs(bs,{onSubmit:p,role:"search",children:[t.jsx(xs,{htmlFor:c,children:s??"Buscá productos, comercios o categorías"}),t.jsxs(ws,{children:[t.jsx(dr,{size:18,"aria-hidden":"true"}),t.jsx($s,{id:c,ref:n,value:r,onChange:m=>a(m.target.value),placeholder:i,type:"search"}),t.jsx(vs,{type:"submit","aria-label":"Buscar",children:t.jsx(dr,{size:16,"aria-hidden":"true"})})]})]})}),ks=Vt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,Ss=Vt`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,js=o.button`
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
`,As=o.span`
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
  animation: ${ks} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Cs=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Es=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,zs=o.span`
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
`,Ps=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ms=o.span`
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
`,Rs=o.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${Ss} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,_s=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,Is=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,Ts=o.span`
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
`;function ca({isDarkMode:e,onToggle:r}){return t.jsxs(js,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(As,{"data-dark":e,"aria-hidden":"true",children:t.jsx(dn,{size:14,"aria-hidden":"true"})}),t.jsxs(Cs,{children:[t.jsxs(Es,{children:["Modo",t.jsx(zs,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Ps,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(Ms,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(Rs,{}),t.jsx(_s,{"data-dark":e}),t.jsxs(Is,{children:[t.jsx(ia,{size:12,"aria-hidden":"true"}),t.jsx(oa,{size:12,"aria-hidden":"true"})]}),t.jsx(Ts,{"data-dark":e,children:e?t.jsx(oa,{size:12,"aria-hidden":"true"}):t.jsx(ia,{size:12,"aria-hidden":"true"})})]})]})}const Fs=o.div`
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
`,Ls=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Os=o.div`
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
`;const Ns=o.button`
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
`;const la=o.span`
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
`,Qt=o.img`
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
`;const da=o.span`
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
`,pa=o.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Ds=o.span`
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
`;const Bs=o(Ds)`
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
`;const bp=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,xp=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,wp=o.span`
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
`,$p=o.div`
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
`,vp=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Nr=ae`
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
  ${Nr};
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
`;const kp=o.button`
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
`,Hs=o.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Ee=o.section`
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
`,qs=o.div`
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
`,Sp=o.span`
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
`,jp=o.h1`
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
`,Ap=o.p`
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
`,Dr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(Dr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(Dr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(Dr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const Gs=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Ys=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,Cp=o.h2`
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
`,Ep=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,Vs=o.span`
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
`;o(Vs)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const Us=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,zp=o(Us)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Ws=o(be)`
  ${Nr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,Ks=o(Ws)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Pp=o.button`
  ${Nr};
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
`;o(Gs)`
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
`;o(vr)`
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
`;const Xs=o.nav`
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
`,Zs=o.ul`
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
`,Ye=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  ${Ae};

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
`,Js=o(vr)`
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
  &.active ${Ye},
  &[aria-current='page'] ${Ye} {
    ${mr};
  }

  /* Salvo el central: ahí el ícono se mantiene blanco y plano. */
  &[data-primary='true'].active ${Ye},
  &[data-primary='true'][aria-current='page'] ${Ye} {
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
`;const Qs=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&ae`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,ec=o.button`
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
`,tc=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rc=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,ac=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,wo=ae`
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
`,oc=o.button`
  ${wo};
`,ua=o(be)`
  ${wo};
`,ic=o.img`
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
`,nc=o.span`
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
`,sc=o.div`
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
`;const cc=o.div`
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
`,lc=o.div`
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
`,dc=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,pc=o.span`
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
`,uc=o.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,mc=o.span`
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
`,hc=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,gc=ae`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,fc=ae`
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
`,$o=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`,ma=o.div`
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
`,ha=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,yc=o.div`
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
`,ze=o.span`
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

  ${Ae};
`,it=o(vr)`
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
  &.active ${ze},
  &[aria-current='page'] ${ze} {
    ${mr};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${ze} {
    ${mr};
  }
`,nt=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,st=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,ct=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,lt=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,dt=o.nav`
  display: grid;
  gap: 0.25rem;
`,pt=o.section`
  display: block;
`,ut=o.span`
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
`,ga=o.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,fa=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${gc};
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
`,bc=o.button`
  ${fc};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${Bn};
  ${Ae};
`,ya=o.div`
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
`,xc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,wc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,$c=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,vc=o.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,ba=o.button`
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
`,kc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Sc=o.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,jc=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ac=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Cc=o.button`
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
`,Ec=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,zc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Pc=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Mc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Rc=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_c=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ic=o.article`
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
`,Tc=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Fc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Lc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Oc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Nc=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Dc=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,er="/LaFranciaGO/favicon.png",Bc="Av. San Martín 123",xa=3,wa=420,Hc=260,$a=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:Tr,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:so},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Ze},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:Ut},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:Or}],va=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Re},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:yo},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:Lr},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:vt}],qc=o.aside`
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
`,Gc=o($o)`
  height: 100%;
`,ka=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Re,items:[{icon:vt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Ze,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Ze,items:[{icon:kt,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Re,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:kt,items:[{icon:Ut,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:vt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],Yc=[{to:"/",label:"Inicio",icon:Tr},{to:"/categorias",label:"Categorías",icon:so},{to:"/pedidos",label:"Mis pedidos",icon:Ze},{to:"/favoritos",label:"Favoritos",icon:Ut},{to:"/mi-cuenta",label:"Cuenta",icon:Or}];function Vc({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:s,toggleMode:c}=Qi(),{photo:n}=$n(),p=Io(),m=typeof r=="string"&&typeof a=="function",g=u.useRef(null),x=u.useRef(null),h=u.useRef(null),C=u.useRef(null),f=u.useRef(null),[j,R]=u.useState(!1),[y,v]=u.useState({id:"home",label:Bc}),[$,I]=u.useState(!1),[E,M]=u.useState(!1),[O,V]=u.useState("opening"),[H,Z]=u.useState(!1),[W,J]=u.useState(!1),[q,X]=u.useState("opening"),[oe,A]=u.useState(null),F=u.useCallback(()=>{I(!1),Z(!1),A(null)},[]),te=u.useCallback(()=>{F(),I(!0)},[F]),de=u.useCallback(()=>{if($||E){F();return}te()},[F,E,$,te]),we=u.useCallback(()=>{F(),Z(!0)},[F]),$e=u.useCallback(()=>{if(H||W){F();return}we()},[F,W,H,we]);u.useEffect(()=>{const l=document.body.style.overflow;return($||E||H||W)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=l}},[E,$,W,H]),u.useLayoutEffect(()=>{const l=g.current;if(!l)return;const b=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${l.offsetHeight}px`)};b();const S=typeof ResizeObserver<"u"?new ResizeObserver(b):null;return S==null||S.observe(l),window.addEventListener("resize",b),()=>{S==null||S.disconnect(),window.removeEventListener("resize",b),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),u.useEffect(()=>{x.current!==null&&(window.cancelAnimationFrame(x.current),x.current=null),h.current!==null&&(window.clearTimeout(h.current),h.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if($){if(M(!0),l){V("open");return}V("opening"),x.current=window.requestAnimationFrame(()=>{V("open"),x.current=null});return}if(E){if(l){M(!1),V("opening");return}V("closing"),h.current=window.setTimeout(()=>{M(!1),V("opening"),h.current=null},wa)}},[E,$]),u.useEffect(()=>()=>{x.current!==null&&window.cancelAnimationFrame(x.current),h.current!==null&&window.clearTimeout(h.current),C.current!==null&&window.cancelAnimationFrame(C.current),f.current!==null&&window.clearTimeout(f.current)},[]),u.useEffect(()=>{C.current!==null&&(window.cancelAnimationFrame(C.current),C.current=null),f.current!==null&&(window.clearTimeout(f.current),f.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(H){if(J(!0),l){X("open");return}X("opening"),C.current=window.requestAnimationFrame(()=>{X("open"),C.current=null});return}if(W){if(l){J(!1),X("opening");return}X("closing"),f.current=window.setTimeout(()=>{J(!1),X("opening"),f.current=null},Hc)}},[W,H]);const xe=u.useCallback((l,b)=>{l.preventDefault(),F(),window.setTimeout(()=>{p(b)},wa)},[F,p]),k=u.useMemo(()=>ka.find(l=>l.id===oe)??null,[oe]);return t.jsxs(Fs,{children:[t.jsx(Ls,{ref:g,children:t.jsx(Qs,{children:t.jsx(Os,{children:t.jsxs(cc,{children:[t.jsxs(lc,{children:[t.jsx(Ns,{type:"button",onClick:de,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":$||E,children:t.jsx(ln,{size:20,"aria-hidden":"true"})}),t.jsxs(dc,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(mc,{children:t.jsx(Qt,{src:er,alt:"","aria-hidden":"true"})}),t.jsxs(pc,{children:["LaFrancia",t.jsx(uc,{children:"GO"})]})]})]}),m?t.jsx(hc,{children:t.jsx(xo,{value:r,onChange:a})}):null,t.jsxs(sc,{"aria-label":"Acciones rápidas",children:[t.jsxs(ec,{type:"button","aria-label":`Entregar en ${y.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":j,onClick:()=>R(!0),children:[t.jsxs(ac,{children:[t.jsx(rc,{children:"Entregar en"}),t.jsx(tc,{children:y.label})]}),t.jsx(sn,{size:15,"aria-hidden":"true"})]}),t.jsxs(oc,{type:"button",onClick:$e,"aria-label":`Abrir notificaciones, ${xa} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":H||W,children:[t.jsx(vt,{size:18,"aria-hidden":"true"}),t.jsx(nc,{children:xa})]}),t.jsx(ua,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(fn,{size:18,"aria-hidden":"true"})}),t.jsx(ua,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n?t.jsx(ic,{src:n,alt:""}):t.jsx(Or,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(qc,{"aria-label":"Navegación principal",children:t.jsxs(Gc,{children:[t.jsxs(ma,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(la,{children:t.jsx(Qt,{src:er,alt:"","aria-hidden":"true"})}),t.jsxs(ha,{children:[t.jsxs(da,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(pa,{children:"GO"})]}),t.jsx(Bs,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(pt,{children:[t.jsx(ut,{children:"NAVEGACIÓN"}),t.jsx(dt,{"aria-label":"Navegación principal",children:$a.map(l=>{const b=l.icon;return t.jsxs(it,{to:l.to,end:l.end,onClick:S=>xe(S,l.to),children:[t.jsx(ze,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(ct,{children:[t.jsx(lt,{children:l.title}),t.jsx(st,{children:l.subtitle})]}),t.jsx(nt,{"aria-hidden":"true",children:t.jsx(ot,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(pt,{children:[t.jsx(ut,{children:"ACCIONES"}),t.jsx(dt,{"aria-label":"Acciones rápidas",children:va.map(l=>{const b=l.icon;return t.jsxs(it,{to:l.to,onClick:S=>xe(S,l.to),children:[t.jsx(ze,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(ct,{children:[t.jsx(lt,{children:l.title}),t.jsx(st,{children:l.subtitle})]}),t.jsx(nt,{"aria-hidden":"true",children:t.jsx(ot,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(ga,{children:t.jsx(ca,{isDarkMode:s,onToggle:c})})]})}),t.jsx(Hs,{children:e}),t.jsx(Xs,{"aria-label":"Navegación móvil",children:t.jsx(Zs,{children:Yc.map(l=>{const b=l.icon;return t.jsx("li",{children:t.jsxs(Js,{to:l.to,"data-primary":l.to==="/pedidos",children:[t.jsx(Ye,{children:t.jsx(b,{size:l.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:l.label})]})},l.to)})})}),E&&t.jsx(ya,{"data-drawer":"true","data-state":O,role:"presentation",onClick:F,children:t.jsxs(fa,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":O,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:l=>l.stopPropagation(),children:[t.jsxs(yc,{children:[t.jsxs(ma,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(la,{children:t.jsx(Qt,{src:er,alt:"","aria-hidden":"true"})}),t.jsx(ha,{children:t.jsxs(da,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(pa,{children:"GO"})]})})]}),t.jsx(bc,{type:"button",onClick:F,"aria-label":"Cerrar menú",children:t.jsx(fo,{size:18,"aria-hidden":"true"})})]}),t.jsxs($o,{children:[t.jsxs(pt,{children:[t.jsx(ut,{children:"Navegación"}),t.jsx(dt,{"aria-label":"Navegación principal",children:$a.map(l=>{const b=l.icon;return t.jsxs(it,{to:l.to,end:l.end,onClick:S=>xe(S,l.to),children:[t.jsx(ze,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(ct,{children:[t.jsx(lt,{children:l.title}),t.jsx(st,{children:l.subtitle})]}),t.jsx(nt,{"aria-hidden":"true",children:t.jsx(ot,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(pt,{children:[t.jsx(ut,{children:"Acciones"}),t.jsx(dt,{"aria-label":"Acciones rápidas",children:va.map(l=>{const b=l.icon;return t.jsxs(it,{to:l.to,onClick:S=>xe(S,l.to),children:[t.jsx(ze,{"aria-hidden":"true",children:t.jsx(b,{size:18,"aria-hidden":"true"})}),t.jsxs(ct,{children:[t.jsx(lt,{children:l.title}),t.jsx(st,{children:l.subtitle})]}),t.jsx(nt,{"aria-hidden":"true",children:t.jsx(ot,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx(ga,{children:t.jsx(ca,{isDarkMode:s,onToggle:c})})]})]})}),W&&t.jsx(ya,{"data-notifications":"true","data-state":q,role:"presentation",onClick:F,children:t.jsxs(fa,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":q,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:l=>l.stopPropagation(),children:[t.jsxs(vc,{children:[k?t.jsx(ba,{type:"button",onClick:()=>A(null),"aria-label":"Volver a las notificaciones",children:t.jsx(ao,{size:14,"aria-hidden":"true"})}):t.jsx(Sc,{"aria-hidden":"true"}),t.jsxs(Ac,{children:[t.jsx(jc,{id:"marketplace-notifications-title",children:(k==null?void 0:k.title)??"Notificaciones"}),t.jsx(kc,{children:(k==null?void 0:k.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(ba,{type:"button",onClick:()=>{F(),p("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(hn,{size:14,"aria-hidden":"true"})})]}),t.jsx($c,{}),t.jsx(wc,{children:k?t.jsx(xc,{"aria-label":k.title,children:k.items.map(l=>{const b=l.icon;return t.jsxs(Ic,{children:[t.jsx(Lc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(Tc,{children:[t.jsxs(Dc,{children:[t.jsx(Nc,{children:l.title}),t.jsx(Fc,{children:l.date})]}),t.jsx(Oc,{children:l.subtitle})]})]},`${k.id}-${l.title}`)})}):t.jsx(_c,{"aria-label":"Secciones de notificaciones",children:ka.map(l=>{const b=l.icon;return t.jsxs(Cc,{type:"button",onClick:()=>A(l.id),children:[t.jsx(zc,{"aria-hidden":"true",children:t.jsx(b,{size:14,"aria-hidden":"true"})}),t.jsxs(Mc,{children:[t.jsx(Rc,{children:l.title}),t.jsx(Pc,{children:l.subtitle})]}),t.jsx(Ec,{"aria-hidden":"true",children:t.jsx(Be,{size:16,"aria-hidden":"true"})})]},l.id)})})})]})}),t.jsx(ys,{open:j,currentId:y.id,onClose:()=>R(!1),onSelect:(l,b)=>v({id:l,label:b})})]})}const Br=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:r})=>e.radius[r??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,Hr=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,vo=ae`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;o.div`
  ${vo};
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
`;const ko=o.div`
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
`;const Uc=o.span`
  ${vo};
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
`,Mp=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Wc="/LaFranciaGO/",Kc=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),qr=e=>{const r=e&&Kc.has(e)?e:"comercio";return`${Wc}media/${r}.svg`},Xc=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),Zc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,s)=>i+s.charCodeAt(0),0);return r[a%r.length]},Jc=o(be)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,Qc=o.span`
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
`,el=o.span`
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
`;function tl({id:e,name:r,to:a,count:i,priority:s}){return t.jsx(Jc,{to:a,children:t.jsxs(Br,{$ratio:"1 / 1",children:[t.jsx(Hr,{src:qr(e),alt:r,loading:s?"eager":"lazy"}),typeof i=="number"?t.jsxs(el,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx(Qc,{children:r})]})})}const rl=o.div`
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
`,al=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Ae};
`,ol=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,il=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,nl=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function sl({icon:e,title:r,text:a,ctaLabel:i,ctaTo:s,dashed:c}){return t.jsxs(rl,{"data-dashed":c?"true":"false",children:[t.jsx(al,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(ol,{children:r}),a?t.jsx(il,{children:a}):null,i&&s?t.jsx(nl,{children:t.jsx(Ks,{to:s,children:i})}):null]})}const Sa=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),cl=e=>`${e.toFixed(1)} km`,So=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),ll=o(be)`
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
`,dl=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,pl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ul=o.h3`
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
`,ml=o.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,hl=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,gl=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,fl=o.button`
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
`,yl=o.span`
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
`;function bl({name:e,store:r,price:a,oldPrice:i,categoryId:s,imageLabel:c,tag:n,to:p,onAdd:m,priority:g}){return t.jsxs(ll,{to:p??"#",$static:!p,children:[t.jsxs(Br,{$ratio:"1 / 1",children:[t.jsx(Hr,{src:qr(s),alt:c??e,loading:g?"eager":"lazy"}),n?t.jsx(ko,{children:t.jsx(yl,{children:n})}):null]}),t.jsxs(dl,{children:[r?t.jsx(pl,{children:r}):null,t.jsx(ul,{children:e}),t.jsxs(ml,{children:[t.jsxs("div",{children:[t.jsx(hl,{children:Sa(a)}),i?t.jsx(gl,{children:Sa(i)}):null]}),m?t.jsx(fl,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:x=>{x.preventDefault(),x.stopPropagation(),m()},children:t.jsx(lo,{size:18,"aria-hidden":"true"})}):null]})]})]})}const xl=o(be)`
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
`,wl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,$l=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,vl=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,kl=o.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Sl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function jl({to:e,title:r,text:a,icon:i,tone:s="brand"}){return t.jsxs(xl,{to:e,"data-tone":s,children:[t.jsx(wl,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs($l,{children:[t.jsx(vl,{children:r}),a?t.jsx(kl,{children:a}):null]}),t.jsx(Sl,{children:t.jsx(Be,{size:18,"aria-hidden":"true"})})]})}const Al=o(be)`
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
`,Cl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Ae};
`,El=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function ja({to:e,label:r,icon:a}){return t.jsxs(Al,{to:e,children:[t.jsx(Cl,{children:t.jsx(a,{size:18})}),t.jsx(El,{children:r}),t.jsx(Be,{size:16,"aria-hidden":"true"})]})}const zl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Pl=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Ml=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Rl=o.h2`
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
`,_l=o.span`
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
`,Il=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Tl=o(be)`
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
`;function tr({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:s,seeAllLabel:c="Ver todos"}){return t.jsxs(zl,{children:[t.jsxs(Pl,{children:[t.jsxs(Ml,{children:[t.jsx(Rl,{children:e}),r?t.jsxs(_l,{children:[a,r]}):null]}),s?t.jsxs(Tl,{to:s,children:[c,t.jsx(Be,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(Il,{children:i}):null]})}const Fl=o(be)`
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
`,Ll=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Ol=o.button`
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
`,Nl=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Dl=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Aa=o.span`
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
`,ql=o.span`
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
`,Gl=o.span`
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
`,Yl=o.span`
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
`;function Vl({id:e,name:r,category:a,categoryId:i,to:s,distanceKm:c,rating:n,openNow:p,premium:m,etaMin:g,etaMax:x,priority:h,favorito:C,onToggleFavorito:f}){const j=R=>{R.preventDefault(),R.stopPropagation(),f==null||f(e)};return t.jsxs(Fl,{to:s,children:[t.jsxs(Br,{$ratio:"16 / 9",children:[t.jsx(Hr,{src:qr(i),alt:a,loading:h?"eager":"lazy"}),t.jsxs(ko,{children:[p!==void 0?t.jsx(ql,{"data-open":p,children:p?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),m?t.jsx(Yl,{children:"Destacado"}):null,n!==void 0?t.jsxs(Gl,{children:[t.jsx(yn,{size:13,"aria-hidden":"true",fill:"currentColor"}),n.toFixed(1)]}):null]}),t.jsx(Ll,{children:t.jsx(Uc,{$size:"2.75rem",$tone:Zc(e),children:Xc(r)})}),f?t.jsx(Ol,{type:"button",onClick:j,"data-guardado":C,"aria-pressed":C,"aria-label":C?`Quitar ${r} de favoritos`:`Guardar ${r} en favoritos`,children:t.jsx(Ut,{size:17,"aria-hidden":"true",fill:C?"currentColor":"none"})}):null]}),t.jsxs(Nl,{children:[t.jsx(Dl,{children:r}),t.jsxs(Bl,{children:[a,c!==void 0?` · ${cl(c)}`:""]}),t.jsxs(Hl,{children:[t.jsxs(Aa,{children:[t.jsx(an,{size:14,"aria-hidden":"true"}),"Delivery"]}),g!==void 0&&x!==void 0?t.jsxs(Aa,{children:[t.jsx(cn,{size:14,"aria-hidden":"true"}),g,"-",x," min"]}):null]})]})]})}const Ul=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:uo,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:co,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:io,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:_r,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Ir,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Re,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:ho,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Fr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:mo,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:oo,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:no,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:po,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:go,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:Lr,tone:"red"}],jo="https://lafranciago-api.lafranciago-api.workers.dev",Ie=()=>jo.length>0;class Ao extends Error{constructor(r,a){super(r),this.status=a,this.name="ApiError"}}async function mt(e,r={}){const a=await fetch(`${jo}${e}`,{...r,credentials:"include",headers:{...r.body instanceof FormData?{}:{"Content-Type":"application/json"},...r.headers}});if(!a.ok){const i=await a.json().then(s=>s.error).catch(()=>null);throw new Ao(i??`Error ${a.status}`,a.status)}return a.json()}const T={get:e=>mt(e),post:(e,r)=>mt(e,{method:"POST",body:r instanceof FormData?r:JSON.stringify(r??{})}),patch:(e,r)=>mt(e,{method:"PATCH",body:JSON.stringify(r??{})}),delete:e=>mt(e,{method:"DELETE"})},Ve={registro:e=>T.post("/auth/registro",e),login:e=>T.post("/auth/login",e),loginPanel:e=>T.post("/auth/login-panel",e),logout:()=>T.post("/auth/logout"),yo:()=>T.get("/auth/yo")},Rp={crear:(e,r)=>T.post("/postulaciones",{rol:e,datos:r}),mias:()=>T.get("/postulaciones/mias")},_p={postulaciones:(e="pendiente")=>T.get(`/admin/postulaciones?estado=${e}`),revisar:(e,r,a)=>T.post(`/admin/postulaciones/${e}`,{decision:r,nota:a})},Wl={listar:(e={})=>{const r=new URLSearchParams;e.rubro&&r.set("rubro",e.rubro),e.q&&r.set("q",e.q);const a=r.toString();return T.get(`/comercios${a?`?${a}`:""}`)},detalle:e=>T.get(`/comercios/${e}`),crear:e=>T.post("/comercios",e)},Kl={portada:()=>T.get("/ofertas")},Ip={ver:()=>T.get("/mi-comercio"),crearProducto:e=>T.post("/productos",e),editarProducto:(e,r)=>T.patch(`/productos/${e}`,r),borrarProducto:e=>T.delete(`/productos/${e}`),ofertas:()=>T.get("/mi-comercio/ofertas"),crearOferta:e=>T.post("/mi-comercio/ofertas",e),borrarOferta:e=>T.delete(`/mi-comercio/ofertas/${e}`),activarOferta:(e,r)=>T.patch(`/mi-comercio/ofertas/${e}`,{activa:r})},Tp={pedidos:e=>T.get(`/mi-comercio/pedidos${e?`?estado=${e}`:""}`),envios:()=>T.get("/mi-comercio/envios"),mensajes:e=>T.get(`/pedidos/${e}/mensajes`),enviarMensaje:(e,r)=>T.post(`/pedidos/${e}/mensajes`,{texto:r})},Fp={disponibles:(e,r)=>{const a=new URLSearchParams;typeof e=="number"&&typeof r=="number"&&(a.set("lat",String(e)),a.set("lon",String(r)));const i=a.toString();return T.get(`/delivery/disponibles${i?`?${i}`:""}`)},detalle:e=>T.get(`/delivery/pedidos/${e}`),tomar:(e,r,a)=>T.post(`/delivery/pedidos/${e}/tomar`,{lat:r,lon:a}),actualizarUbicacion:(e,r)=>T.post("/delivery/ubicacion",{lat:e,lon:r})},Lp={listar:()=>T.get("/pedidos"),crear:e=>T.post("/pedidos",e)},hr={listar:()=>T.get("/favoritos"),agregar:e=>T.post(`/favoritos/${e}`),quitar:e=>T.delete(`/favoritos/${e}`)},Op={subir:(e,r)=>{const a=new FormData;return a.append("archivo",e,r),T.post("/media",a)}},gr=new Set;let Se=new Set,Fe="inicial";const St=()=>gr.forEach(e=>e());async function Co(){if(Fe==="inicial"){if(Fe="cargando",!Ie()){Fe="listo",St();return}try{const{favoritos:e}=await hr.listar();Se=new Set(e.map(r=>r.id))}catch{Se=new Set}Fe="listo",St()}}function Xl(){return Fe="inicial",Co()}async function Zl(e){const r=Se.has(e),a=new Set(Se);if(r?a.delete(e):a.add(e),Se=a,St(),!!Ie())try{await(r?hr.quitar(e):hr.agregar(e))}catch{const i=new Set(Se);r?i.add(e):i.delete(e),Se=i,St()}}function Jl(){const[,e]=u.useState(0);return u.useEffect(()=>{const r=()=>e(a=>a+1);return gr.add(r),Co(),()=>{gr.delete(r)}},[]),{favoritos:Se,cargando:Fe!=="listo"}}const fr=new Set;let yr=[],Ue="inicial";const Ca=()=>fr.forEach(e=>e());async function Ql(){if(Ue==="inicial"){if(Ue="cargando",!Ie()){Ue="listo",Ca();return}try{const{ofertas:e}=await Kl.portada();yr=e}catch{yr=[]}Ue="listo",Ca()}}function ed(){const[,e]=u.useState(0);return u.useEffect(()=>{const r=()=>e(a=>a+1);return fr.add(r),Ql(),()=>{fr.delete(r)}},[]),{ofertas:yr,cargando:Ue!=="listo"}}const Np=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],td=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:uo},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Re},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:io},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Ir},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:_r},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:co},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:ho},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:nn},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Fr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:mo},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:oo},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:no},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:po},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:go}],rd=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],ad=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Je=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Re,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Ir,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:Fr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:_r,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Dp=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:0,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:1,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,saleUnit:"peso",quantity:1,subtotal:1275,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:0,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,saleUnit:"peso",quantity:3,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,saleUnit:"peso",quantity:1,subtotal:1345,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Bp=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],Hp=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],qp=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],Gp=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],Yp=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],Vp=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],Up=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],Wp=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:bn},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:pn},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:un},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:gn}],od=e=>{var r;return((r=td.find(a=>a.id===e))==null?void 0:r.icon)??Je[0].icon};function id(e){return{id:e.id,name:e.nombre,premium:e.premium,category:e.rubro_nombre,categoryId:e.rubro_id,address:e.direccion,phone:e.telefono??"",hours:e.horario??"A confirmar",distanceKm:void 0,rating:void 0,openNow:!0,delivery:!0,pickup:!0,minOrder:e.minimo,summary:e.descripcion??`${e.rubro_nombre} en La Francia.`,tags:e.zona?[e.zona]:[],icon:od(e.rubro_id),featuredProducts:(e.destacados??[]).map(r=>({id:r.id,name:r.nombre,price:r.precio}))}}const br=new Set;let bt=[],We="inicial";const Ea=()=>br.forEach(e=>e());async function nd(){if(We==="inicial"){if(We="cargando",!Ie()){bt=Je,We="listo",Ea();return}try{const{comercios:e}=await Wl.listar();bt=e.map(r=>id(r))}catch{bt=Je}We="listo",Ea()}}function sd(){const[,e]=u.useState(0);return u.useEffect(()=>{const r=()=>e(a=>a+1);return br.add(r),nd(),()=>{br.delete(r)}},[]),{stores:bt,cargando:We!=="listo"}}const ht=["blue","green","orange","violet"],za={almacen:"blue",panaderia:"orange",carniceria:"violet",verduleria:"green",farmacia:"blue",kiosco:"orange"};function cd(e){return(e.split(/\s+/).filter(a=>a.length>2).slice(0,2).map(a=>a[0]).join("")||e.slice(0,2)).toUpperCase()}const ld=e=>{const r=e===void 0?15:Math.max(10,Math.round(e*6)+10);return{etaMin:r,etaMax:r+10}};function dd(){const{stores:e,cargando:r}=sd(),{ofertas:a,cargando:i}=ed(),s=u.useMemo(()=>e.map((n,p)=>{const{etaMin:m,etaMax:g}=ld(n.distanceKm);return{id:n.id,name:n.name,premium:n.premium,category:n.category,categoryId:n.categoryId,logoLabel:cd(n.name),etaMin:m,etaMax:g,distanceKm:n.distanceKm,rating:n.rating,delivery:n.delivery,pickup:n.pickup,openNow:n.openNow,tone:za[n.categoryId]??ht[p%ht.length],address:n.address,priceLevel:n.minOrder>=8e3?"$$$":n.minOrder>=4e3?"$$":"$",minOrder:n.minOrder,badge:n.premium?"Destacado":"",href:`/comercios/${n.id}`}}),[e]),c=u.useMemo(()=>a.map((n,p)=>{var x;const m=e.find(h=>h.id===n.comercioId),g=n.porcentaje??(n.precioLista>0?Math.round((n.precioLista-n.precioFinal)/n.precioLista*100):0);return{id:n.id,product:n.titulo,store:n.comercio,categoryId:n.rubroId,distanceKm:(m==null?void 0:m.distanceKm)??0,price:n.precioFinal,oldPrice:n.precioLista,discount:g,delivery:!0,pickup:!0,openNow:!0,tone:za[n.rubroId]??ht[p%ht.length],imageLabel:((x=n.productos[0])==null?void 0:x.nombre)??n.titulo,href:`/comercios/${n.comercioId}`}}),[a,e]);return{featuredStores:s,nearbyOffers:c,cargando:r||i}}const pd=e=>So(e),rr=(e,...r)=>{const a=pd(e);return a?So(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},ud=e=>rd.find(r=>r.id===e),Kp=e=>Je.find(r=>r.id===e),Xp=e=>Je.find(r=>r.name.toLowerCase()===e.toLowerCase()),Zp=e=>{const r=ad.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((s,c)=>s.price-c.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=ud(e);if(a)return{kind:"offer",offer:a}},md=5,hd=.7,Pa=e=>e===void 0?Number.MAX_SAFE_INTEGER:Math.floor(e/hd),Qe=e=>e.distanceKm??Number.MAX_SAFE_INTEGER,Ma=e=>e.premium&&Qe(e)<=md?0:1,et=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,Eo=(e,r)=>{const a=et(e,r);if(a!==0)return a;const i=Pa(e.distanceKm)-Pa(r.distanceKm);if(i!==0)return i;const s=Ma(e)-Ma(r);if(s!==0)return s;const c=Qe(e)-Qe(r);return Math.abs(c)>.05?c:(r.rating??0)-(e.rating??0)},gd=(e,r)=>et(e,r)||Qe(e)-Qe(r),fd=(e,r)=>et(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),yd=(e,r)=>et(e,r)||(r.rating??0)-(e.rating??0),bd=(e,r)=>et(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),xd={relevancia:Eo,cercania:gd,precio:fd,puntuacion:yd,entrega:bd};function Ra(e,r="relevancia"){return[...e].sort(xd[r]??Eo)}const Jp=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],wd=o.div`
  position: relative;
  min-width: 0;
`,$d=o.div`
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
`,_a=o.button`
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

  ${Ae};

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
`,gt=4,vd=6,kd=420,Sd=.91,jd=.2,Ad=.45,Cd=260,Ed=e=>1-(1-e)**3;function ar({children:e,className:r,as:a,...i}){const s=u.useRef(null),c=u.useRef(null),n=u.useRef(null),[p,m]=u.useState(!1),[g,x]=u.useState(!1),h=u.useCallback(()=>{const y=s.current;if(!y)return;const{scrollLeft:v,scrollWidth:$,clientWidth:I}=y;m(v>gt),x(v+I<$-gt)},[]);u.useLayoutEffect(()=>{h()},[h,e]),u.useEffect(()=>{var $;const y=s.current;if(!y)return;const v=(($=window.matchMedia)==null?void 0:$.call(window,"(pointer: fine)").matches)??!1;y.style.cursor=v&&(p||g)?"grab":""},[p,g]),u.useEffect(()=>{var I;const y=s.current;if(!y)return;const v=E=>{const M=y.scrollWidth-y.clientWidth;if(M<=0)return;const O=Math.abs(E.deltaX)>Math.abs(E.deltaY)?E.deltaX:E.deltaY;if(O===0)return;const V=O>0?1:-1,H=y.scrollLeft<=gt,Z=y.scrollLeft>=M-gt;if(V<0&&H||V>0&&Z)return;E.preventDefault();const W=n.current??y.scrollLeft,J=Math.max(0,Math.min(W+V*Cd,M));j(y,J)};y.addEventListener("wheel",v,{passive:!1}),y.addEventListener("scroll",h,{passive:!0}),y.addEventListener("scrollend",h,{passive:!0});const $=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return $==null||$.observe(y),Array.from(y.children).forEach(E=>$==null?void 0:$.observe(E)),(I=document.fonts)==null||I.ready.then(h).catch(()=>{}),()=>{y.removeEventListener("wheel",v),y.removeEventListener("scroll",h),y.removeEventListener("scrollend",h),$==null||$.disconnect(),c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null}},[h]);const C=(y,v)=>{var M;if(c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null,Math.abs(v)<Ad||(M=window.matchMedia)!=null&&M.call(window,"(prefers-reduced-motion: reduce)").matches){h();return}let $=-v;const I=y.scrollWidth-y.clientWidth,E=()=>{const O=y.scrollLeft+$;if(O<=0||O>=I){y.scrollLeft=O<=0?0:I,c.current=null,h();return}if(y.scrollLeft=O,$*=Sd,h(),Math.abs($)<jd){c.current=null;return}c.current=requestAnimationFrame(E)};c.current=requestAnimationFrame(E)},f=y=>{if(y.pointerType!=="mouse"||y.button!==0)return;const v=s.current;if(!v)return;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null),n.current=null;const $=y.clientX,I=v.scrollLeft;let E=!1,M=0,O=y.clientX,V=performance.now();const H=J=>J.preventDefault();v.addEventListener("dragstart",H);const Z=J=>{const q=J.clientX-$;if(!E){if(Math.abs(q)<vd)return;E=!0,v.style.scrollBehavior="auto",v.style.cursor="grabbing",v.style.userSelect="none"}const X=performance.now(),oe=X-V;if(oe>0){const A=(J.clientX-O)/oe*16;M=M*.7+A*.3,O=J.clientX,V=X}v.scrollLeft=I-q},W=()=>{if(document.removeEventListener("pointermove",Z),document.removeEventListener("pointerup",W),document.removeEventListener("pointercancel",W),v.removeEventListener("dragstart",H),v.style.scrollBehavior="",v.style.cursor="",v.style.userSelect="",E){C(v,M);const J=q=>{q.stopPropagation(),q.preventDefault()};v.addEventListener("click",J,{capture:!0,once:!0}),window.setTimeout(()=>v.removeEventListener("click",J,{capture:!0}),0)}h()};document.addEventListener("pointermove",Z),document.addEventListener("pointerup",W),document.addEventListener("pointercancel",W)},j=(y,v)=>{var O;c.current!==null&&(cancelAnimationFrame(c.current),c.current=null);const $=y.scrollLeft,I=v-$;if(Math.abs(I)<1){n.current=null;return}if(n.current=v,(O=window.matchMedia)!=null&&O.call(window,"(prefers-reduced-motion: reduce)").matches){y.scrollLeft=v,n.current=null,h();return}const E=performance.now(),M=V=>{const H=V-E,Z=Math.min(H/kd,1);if(y.scrollLeft=$+I*Ed(Z),h(),Z<1){c.current=requestAnimationFrame(M);return}c.current=null,n.current=null};c.current=requestAnimationFrame(M)},R=y=>{const v=s.current;if(!v)return;const $=v.scrollWidth-v.clientWidth,I=v.scrollLeft+y*v.clientWidth*.7;j(v,Math.max(0,Math.min(I,$)))};return t.jsxs(wd,{className:r,children:[p?t.jsx(_a,{type:"button","data-side":"left",onClick:()=>R(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(ao,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:s,onPointerDown:f,...i,children:e}):t.jsx($d,{ref:s,onPointerDown:f,...i,children:e}),g?t.jsx(_a,{type:"button","data-side":"right",onClick:()=>R(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Be,{size:16,"aria-hidden":"true"})}):null]})}const zo="lafranciago:orden",zd=["relevancia","cercania","precio","puntuacion","entrega"],Pd=()=>{try{const e=window.localStorage.getItem(zo);return zd.includes(e)?e:"relevancia"}catch{return"relevancia"}};function Md(){const[e,r]=u.useState("relevancia");u.useEffect(()=>{r(Pd())},[]);const a=u.useCallback(i=>{r(i);try{window.localStorage.setItem(zo,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const Rd=o(be)`
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
`,_d=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,Id=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,Td=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Fd=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Ld=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Po=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Od=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Nd=o.div`
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
`;const Qp=o.div`
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
`;const eu=o.div`
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
`;const tu=o(Ee)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(qs)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const ru=o(Po)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Od)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Nd)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Ys)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const Gr=o.div`
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
`,Dd=o(Gr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Bd=o(Gr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Hd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,qd=o.section`
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
`;const au=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Gd=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,Yd=8;function Vd(){const[e,r]=u.useState(""),{sortMode:a}=Md(),{featuredStores:i,nearbyOffers:s,cargando:c}=dd(),{favoritos:n}=Jl(),p=e.trim(),m=p.length>0,g=u.useMemo(()=>{const f=Ul.filter(j=>rr(p,j.name));return m?f:f.slice(0,Yd)},[m,p]),x=u.useMemo(()=>Ra(i.filter(f=>rr(p,f.name,f.category,f.address)),a),[i,p,a]),h=u.useMemo(()=>Ra(s.filter(f=>rr(p,f.product,f.store)),a),[s,p,a]),C=c||g.length>0||x.length>0||h.length>0;return t.jsxs(Vc,{query:e,onQueryChange:r,children:[t.jsx(qd,{children:t.jsx(Ce,{children:t.jsx(xo,{value:e,onChange:r})})}),t.jsx(Ee,{children:t.jsx(Ce,{children:t.jsxs(Rd,{to:"/mandado",children:[t.jsx(_d,{children:t.jsx(Ze,{size:22,"aria-hidden":"true"})}),t.jsxs(Id,{children:[t.jsx(Td,{children:"¿Necesitás algún mandado?"}),t.jsx(Fd,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(Ld,{children:t.jsx(Be,{size:18,"aria-hidden":"true"})})]})})}),m&&!C?t.jsx(Ee,{children:t.jsx(Ce,{children:t.jsx(sl,{icon:mn,title:"Sin resultados",text:`No encontramos nada para "${p}". Probá con otra palabra.`,dashed:!0})})}):null,g.length>0?t.jsx(Ee,{children:t.jsxs(Ce,{children:[t.jsx(tr,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(ar,{as:Bd,"aria-label":"Categorías",children:g.map((f,j)=>t.jsx(tl,{id:f.id,name:f.name,to:`/comercios?rubro=${f.id}`,priority:j<5},f.id))})]})}):null,h.length>0?t.jsx(Ee,{children:t.jsxs(Ce,{children:[t.jsx(tr,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(ar,{as:Gr,"aria-label":"Productos destacados",children:h.map((f,j)=>t.jsx(bl,{name:f.product,store:f.store,price:f.price,oldPrice:f.oldPrice,categoryId:f.categoryId,imageLabel:f.imageLabel,tag:f.discount>0?`-${f.discount}%`:void 0,to:f.href,priority:j<3},f.id))})]})}):null,x.length>0?t.jsx(Ee,{children:t.jsxs(Ce,{children:[t.jsx(tr,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(ar,{as:Dd,"aria-label":"Negocios destacados",children:x.map((f,j)=>t.jsx(Vl,{favorito:n.has(f.id),onToggleFavorito:Zl,id:f.id,name:f.name,category:f.category,categoryId:f.categoryId,to:f.href,distanceKm:f.distanceKm,rating:f.rating,openNow:f.openNow,premium:f.premium,etaMin:f.etaMin,etaMax:f.etaMax,priority:j<2},f.id))})]})}):null,m?null:t.jsx(Ee,{children:t.jsx(Ce,{children:t.jsx(Po,{children:t.jsxs(Hd,{children:[t.jsx(jl,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Re,tone:"brand"}),t.jsxs(Gd,{children:[t.jsx(ja,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:yo}),t.jsx(ja,{to:"/registro/fletero",label:"Sumate como Fletero",icon:Lr})]})]})})})})]})}const xr=new Set;let Le=null,wr=Ie()?"cargando":"invitado",Ia=!1;const Ud=()=>xr.forEach(e=>e()),Oe=e=>{const r=(Le==null?void 0:Le.id)!==(e==null?void 0:e.id);Le=e,wr=e?"conectado":"invitado",Ud(),r&&Xl()};async function $r(){if(Ie())try{Oe(await Ve.yo())}catch(e){(!(e instanceof Ao)||e.status!==401)&&console.warn("No se pudo recuperar la sesión",e),Oe(null)}}function Wd(){const[e,r]=u.useState({usuario:Le,estado:wr});u.useEffect(()=>{const n=()=>r({usuario:Le,estado:wr});return xr.add(n),Ia||(Ia=!0,$r()),n(),()=>{xr.delete(n)}},[]);const a=u.useCallback(async(n,p)=>{Oe(await Ve.login({email:n,password:p}))},[]),i=u.useCallback(async n=>{Oe(await Ve.registro(n))},[]),s=u.useCallback(async(n,p,m)=>{Oe(await Ve.loginPanel({email:n,password:p,rol:m}))},[]),c=u.useCallback(async()=>{try{await Ve.logout()}finally{Oe(null)}},[]);return{usuario:e.usuario,estado:e.estado,conectado:e.estado==="conectado",entrar:a,entrarAlPanel:s,registrar:i,salir:c,refrescar:$r}}function ou(){return new Promise((e,r)=>{const a="https://lafranciago-api.lafranciago-api.workers.dev",c=window.screenX+(window.outerWidth-480)/2,n=window.screenY+(window.outerHeight-640)/2,p=window.open(`${a}/auth/google`,"lafranciago-google",`width=480,height=640,left=${c},top=${n}`);if(!p){r(new Error("Permití las ventanas emergentes para entrar con Google."));return}let m=!1;const g=()=>{window.removeEventListener("message",x),window.clearInterval(h)};function x(C){if(C.origin!==new URL(a).origin)return;const f=C.data;(f==null?void 0:f.tipo)==="lafranciago:oauth"&&(m=!0,g(),f.exito?$r().then(()=>e()):r(new Error(f.mensaje??"No pudimos completar el ingreso.")))}window.addEventListener("message",x);const h=window.setInterval(()=>{p.closed&&!m&&(g(),r(new Error("Cerraste la ventana antes de terminar.")))},600)})}function le({children:e}){const{estado:r}=Wd(),a=To();if(!Ie())return t.jsx(t.Fragment,{children:e});if(r==="cargando")return null;if(r==="invitado"){const i=`${a.pathname}${a.search}`;return t.jsx(or,{to:`/ingresar?destino=${encodeURIComponent(i)}`,replace:!0})}return t.jsx(t.Fragment,{children:e})}const Kd=u.lazy(()=>Q(()=>import("./AuthScreen-DHHHiynQ.js"),__vite__mapDeps([5,1,6,7,8,9,10,11])).then(e=>({default:e.AuthScreen}))),Xd=u.lazy(()=>Q(()=>import("./CategoriesScreen-CEQqeKuw.js"),__vite__mapDeps([12,1])).then(e=>({default:e.CategoriesScreen}))),Zd=u.lazy(()=>Q(()=>import("./StoresDirectoryScreen-wIjpgyr3.js"),__vite__mapDeps([13,1])).then(e=>({default:e.StoresDirectoryScreen}))),Jd=u.lazy(()=>Q(()=>import("./StoreProfileScreen-B7d15ihN.js"),__vite__mapDeps([14,1,15,16,17])).then(e=>({default:e.StoreProfileScreen}))),Qd=u.lazy(()=>Q(()=>import("./ProductDetailScreen-CW5mCQQW.js"),__vite__mapDeps([18,1,19])).then(e=>({default:e.ProductDetailScreen}))),ep=u.lazy(()=>Q(()=>import("./MyOrdersScreen-DHX2gjpM.js"),__vite__mapDeps([20,1,17])).then(e=>({default:e.MyOrdersScreen}))),tp=u.lazy(()=>Q(()=>import("./CartScreen-C6z4mLIG.js"),__vite__mapDeps([21,1,15,16,22,10])).then(e=>({default:e.CartScreen}))),rp=u.lazy(()=>Q(()=>import("./ErrandScreen-DwtfNS0w.js"),__vite__mapDeps([23,1,24,10])).then(e=>({default:e.ErrandScreen}))),ap=u.lazy(()=>Q(()=>import("./ErrandChatScreen-oC15KqUs.js"),__vite__mapDeps([25,1,26,24,27,28])).then(e=>({default:e.ErrandChatScreen}))),op=u.lazy(()=>Q(()=>import("./FavoritesScreen-jmaWKV1N.js"),__vite__mapDeps([29,1])).then(e=>({default:e.FavoritesScreen}))),ip=u.lazy(()=>Q(()=>import("./NotificationsScreen-CIR_UMBC.js"),__vite__mapDeps([30,1,31])).then(e=>({default:e.NotificationsScreen}))),np=u.lazy(()=>Q(()=>import("./CustomerAccountScreen-CxCexNcD.js"),__vite__mapDeps([32,1,19,26,27,33,10,11])).then(e=>({default:e.CustomerAccountScreen}))),sp=u.lazy(()=>Q(()=>import("./CommerceRegistrationScreen-Bn2fI198.js"),__vite__mapDeps([34,1,26,35,36,37,6,33,10])).then(e=>({default:e.CommerceRegistrationScreen}))),Ta=u.lazy(()=>Q(()=>import("./DeliveryRegistrationScreen-eDYPoHHA.js"),__vite__mapDeps([38,36,1,26,6,10,33,9])).then(e=>({default:e.DeliveryRegistrationScreen}))),cp=u.lazy(()=>Q(()=>import("./MiComercioScreen-Dod4JrN0.js"),__vite__mapDeps([39,1,15,40,7,8,28,22,2,3,35,26,37,6,31,41])).then(e=>({default:e.MiComercioScreen}))),lp=u.lazy(()=>Q(()=>import("./CommercePanelScreen-Dz0qUqcw.js"),__vite__mapDeps([42,43,19,1,31])).then(e=>({default:e.CommercePanelScreen}))),dp=u.lazy(()=>Q(()=>import("./ProductFormScreen-Cf2438uV.js"),__vite__mapDeps([44,1,15,26,37])).then(e=>({default:e.ProductFormScreen}))),pp=u.lazy(()=>Q(()=>import("./PanelRepartidorScreen-BK_9uKFZ.js"),__vite__mapDeps([45,1,4,40,7,8,28,15,46])).then(e=>({default:e.PanelRepartidorScreen}))),up=u.lazy(()=>Q(()=>import("./DeliveryPanelScreen-CPbUNEhA.js"),__vite__mapDeps([47,43,19,1])).then(e=>({default:e.DeliveryPanelScreen}))),mp=u.lazy(()=>Q(()=>import("./AdminPostulacionesScreen-BtmwOtmc.js"),__vite__mapDeps([48,1,7,46,41])).then(e=>({default:e.AdminPostulacionesScreen}))),hp=u.lazy(()=>Q(()=>import("./AdminPanelScreen-DBZ3ECyE.js"),__vite__mapDeps([49,43,19,1])).then(e=>({default:e.AdminPanelScreen})));function gp(){return t.jsx(Fo,{children:t.jsx(Ji,{children:t.jsx(u.Suspense,{fallback:null,children:t.jsxs(Lo,{children:[t.jsx(K,{path:"/",element:t.jsx(Vd,{})}),t.jsx(K,{path:"/ingresar",element:t.jsx(Kd,{})}),t.jsx(K,{path:"/categorias",element:t.jsx(Xd,{})}),t.jsx(K,{path:"/comercios",element:t.jsx(Zd,{})}),t.jsx(K,{path:"/comercios/:storeId",element:t.jsx(Jd,{})}),t.jsx(K,{path:"/productos/:productId",element:t.jsx(Qd,{})}),t.jsx(K,{path:"/pedidos",element:t.jsx(le,{children:t.jsx(ep,{})})}),t.jsx(K,{path:"/carrito",element:t.jsx(le,{children:t.jsx(tp,{})})}),t.jsx(K,{path:"/mandado",element:t.jsx(le,{children:t.jsx(rp,{})})}),t.jsx(K,{path:"/mandado/chat",element:t.jsx(le,{children:t.jsx(ap,{})})}),t.jsx(K,{path:"/favoritos",element:t.jsx(le,{children:t.jsx(op,{})})}),t.jsx(K,{path:"/notificaciones",element:t.jsx(le,{children:t.jsx(ip,{})})}),t.jsx(K,{path:"/registro/comercio",element:t.jsx(le,{children:t.jsx(sp,{})})}),t.jsx(K,{path:"/trabaja-con-nosotros",element:t.jsx(le,{children:t.jsx(Ta,{})})}),t.jsx(K,{path:"/registro/fletero",element:t.jsx(le,{children:t.jsx(Ta,{role:"fletero"})})}),t.jsx(K,{path:"/registro/delivery",element:t.jsx(or,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(K,{path:"/mi-cuenta",element:t.jsx(le,{children:t.jsx(np,{})})}),t.jsx(K,{path:"/panel/comercio",element:t.jsx(le,{children:t.jsx(cp,{})})}),t.jsx(K,{path:"/panel/comercio/metricas",element:t.jsx(le,{children:t.jsx(lp,{})})}),t.jsx(K,{path:"/panel/comercio/producto",element:t.jsx(le,{children:t.jsx(dp,{})})}),t.jsx(K,{path:"/panel/repartidor",element:t.jsx(le,{children:t.jsx(pp,{})})}),t.jsx(K,{path:"/panel/repartidor/metricas",element:t.jsx(le,{children:t.jsx(up,{})})}),t.jsx(K,{path:"/panel/admin",element:t.jsx(le,{children:t.jsx(hp,{})})}),t.jsx(K,{path:"/panel/admin/postulaciones",element:t.jsx(le,{children:t.jsx(mp,{})})}),t.jsx(K,{path:"*",element:t.jsx(or,{to:"/",replace:!0})})]})})})})}const fp=()=>{try{window.top!==window.self&&(window.top.location=window.self.location)}catch{document.documentElement.style.display="none"}};fp();Vo({immediate:!0});const Mo=document.getElementById("root");if(!Mo)throw new Error("No se encontró el nodo root");ir.createRoot(Mo).render(t.jsx(_e.StrictMode,{children:t.jsx(gp,{})}));export{bp as $,Br as A,Hr as B,Cp as C,qr as D,sl as E,kp as F,ko as G,Sa as H,lo as I,on as J,yn as K,Uc as L,Vc as M,Xc as N,Zc as O,Qp as P,cl as Q,kt as R,Ce as S,Wl as T,Or as U,ae as V,Kp as W,fo as X,Bp as Y,Ee as Z,Ze as _,Ep as a,xp as a0,wp as a1,$p as a2,dr as a3,vp as a4,Po as a5,Gr as a6,fn as a7,Zp as a8,ud as a9,ru as aA,Ap as aB,so as aC,Nd as aD,Vs as aE,Pp as aF,Op as aG,Rp as aH,Ao as aI,Od as aJ,ur as aK,Ip as aL,Tp as aM,eu as aN,Hp as aO,qp as aP,Gp as aQ,bn as aR,hn as aS,Fp as aT,Yp as aU,Vp as aV,un as aW,_p as aX,Up as aY,Wp as aZ,rd as aa,ad as ab,Xp as ac,Re as ad,Ks as ae,Ws as af,Be as ag,Lp as ah,au as ai,Ae as aj,Bn as ak,jp as al,Lr as am,Sp as an,zp as ao,En as ap,ys as aq,Dp as ar,an as as,Vt as at,Ut as au,vt as av,$n as aw,Mp as ax,yo as ay,Je as az,tu as b,z as c,Gs as d,Ys as e,sd as f,td as g,Ie as h,ou as i,t as j,qd as k,xo as l,rr as m,tr as n,tl as o,mn as p,o as q,Md as r,Jl as s,Ra as t,Wd as u,ar as v,Np as w,Jp as x,Vl as y,Zl as z};
