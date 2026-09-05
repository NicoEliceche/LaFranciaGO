const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddressMap-C7-YWI0R.js","assets/react-74MrHXS-.js","assets/AddressMap-CIGW-MKW.css","assets/CategoriesScreen-CSwo8jsd.js","assets/StoresDirectoryScreen-CiuNBi7g.js","assets/StoreProfileScreen-DSa07Sd9.js","assets/minus-Bql8FJ6U.js","assets/clock-3-CvGWf2jf.js","assets/ProductDetailScreen-B7LdLFsB.js","assets/SettingsList-CW8Q81sx.js","assets/MyOrdersScreen-CFxtN3ue.js","assets/CartScreen-GSCUP4rw.js","assets/shield-check-CVIFRGM-.js","assets/ErrandScreen-CJn__KwC.js","assets/errandStore-enr2jB1X.js","assets/ErrandChatScreen-DBPaELlk.js","assets/mediaService-Be9g9s7c.js","assets/camera-_Mjwyi8S.js","assets/FavoritesScreen-BVBkttKL.js","assets/NotificationsScreen-CZeOvzdN.js","assets/badge-percent-BAYJceyE.js","assets/CustomerAccountScreen-Y0yp27Gy.js","assets/phone-B4Qg23Q_.js","assets/CommerceRegistrationScreen-BH3FbDVD.js","assets/formStyles-BJBl1geO.js","assets/DeliveryRegistrationScreen-C055dElS.js","assets/CommercePanelScreen-B8yI29xw.js","assets/MetricTile-DInGA7uF.js","assets/ProductFormScreen-lxKeWiyx.js","assets/DeliveryPanelScreen-D0e-Jb-x.js","assets/AdminPanelScreen-CU4dRXie.js"])))=>i.map(i=>d[i]);
import{r as m,a as eo,g as to,R as Pe,L as fe,N as Xt,u as ro,H as ao,b as oo,c as ee,d as wr}from"./react-74MrHXS-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();var ca={exports:{}},st={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=m,no=Symbol.for("react.element"),so=Symbol.for("react.fragment"),co=Object.prototype.hasOwnProperty,lo=io.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,po={key:!0,ref:!0,__self:!0,__source:!0};function la(e,r,a){var i,n={},s=null,c=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(c=r.ref);for(i in r)co.call(r,i)&&!po.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:no,type:e,key:s,ref:c,props:n,_owner:lo.current}}st.Fragment=so;st.jsx=la;st.jsxs=la;ca.exports=st;var t=ca.exports,Ot={},$r=eo;Ot.createRoot=$r.createRoot,Ot.hydrateRoot=$r.hydrateRoot;const uo="modulepreload",mo=function(e){return"/LaFranciaGO/"+e},vr={},re=function(r,a,i){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));n=Promise.allSettled(a.map(h=>{if(h=mo(h),h in vr)return;vr[h]=!0;const p=h.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${b}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":uo,p||(g.as="script"),g.crossOrigin="",g.href=h,u&&g.setAttribute("nonce",u),document.head.appendChild(g),p)return new Promise((E,P)=>{g.addEventListener("load",E),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return n.then(c=>{for(const u of c||[])u.status==="rejected"&&s(u.reason);return r().catch(s)})};function ho(e={}){const{immediate:r=!1,onNeedRefresh:a,onOfflineReady:i,onRegistered:n,onRegisteredSW:s,onRegisterError:c}=e;let u,h;const p=async(g=!0)=>{await h};async function b(){if("serviceWorker"in navigator){if(u=await re(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(g=>{c==null||c(g)}),!u)return;u.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),u.addEventListener("installed",g=>{g.isUpdate||i==null||i()}),u.register({immediate:r}).then(g=>{s?s("/LaFranciaGO/sw.js",g):n==null||n(g)}).catch(g=>{c==null||c(g)})}}return h=b(),p}var da={exports:{}},V={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=Symbol.for("react.transitional.element"),Jt=Symbol.for("react.portal"),ct=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),dt=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),gt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),go=Symbol.for("react.view_transition"),fo=Symbol.for("react.client.reference");function me(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Zt:switch(e=e.type,e){case ct:case dt:case lt:case ht:case gt:case go:return e;default:switch(e=e&&e.$$typeof,e){case ut:case mt:case yt:case ft:return e;case pt:return e;default:return r}}case Jt:return r}}}V.ContextConsumer=pt;V.ContextProvider=ut;V.Element=Zt;V.ForwardRef=mt;V.Fragment=ct;V.Lazy=yt;V.Memo=ft;V.Portal=Jt;V.Profiler=dt;V.StrictMode=lt;V.Suspense=ht;V.SuspenseList=gt;V.isContextConsumer=function(e){return me(e)===pt};V.isContextProvider=function(e){return me(e)===ut};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zt};V.isForwardRef=function(e){return me(e)===mt};V.isFragment=function(e){return me(e)===ct};V.isLazy=function(e){return me(e)===yt};V.isMemo=function(e){return me(e)===ft};V.isPortal=function(e){return me(e)===Jt};V.isProfiler=function(e){return me(e)===dt};V.isStrictMode=function(e){return me(e)===lt};V.isSuspense=function(e){return me(e)===ht};V.isSuspenseList=function(e){return me(e)===gt};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ct||e===dt||e===lt||e===ht||e===gt||typeof e=="object"&&e!==null&&(e.$$typeof===yt||e.$$typeof===ft||e.$$typeof===ut||e.$$typeof===pt||e.$$typeof===mt||e.$$typeof===fo||e.getModuleId!==void 0)};V.typeOf=me;da.exports=V;var pa=da.exports;function yo(e){function r(v,l,y,k,d){for(var N=0,x=0,J=0,O=0,H,R,oe=0,de=0,F,ce=F=H=0,B=0,ie=0,Te=0,ne=0,He=y.length,Fe=He-1,he,z="",Q="",Et="",Pt="",we;B<He;){if(R=y.charCodeAt(B),B===Fe&&x+O+J+N!==0&&(x!==0&&(R=x===47?10:47),O=J=N=0,He++,Fe++),x+O+J+N===0){if(B===Fe&&(0<ie&&(z=z.replace(E,"")),0<z.trim().length)){switch(R){case 32:case 9:case 59:case 13:case 10:break;default:z+=y.charAt(B)}R=59}switch(R){case 123:for(z=z.trim(),H=z.charCodeAt(0),F=1,ne=++B;B<He;){switch(R=y.charCodeAt(B)){case 123:F++;break;case 125:F--;break;case 47:switch(R=y.charCodeAt(B+1)){case 42:case 47:e:{for(ce=B+1;ce<Fe;++ce)switch(y.charCodeAt(ce)){case 47:if(R===42&&y.charCodeAt(ce-1)===42&&B+2!==ce){B=ce+1;break e}break;case 10:if(R===47){B=ce+1;break e}}B=ce}}break;case 91:R++;case 40:R++;case 34:case 39:for(;B++<Fe&&y.charCodeAt(B)!==R;);}if(F===0)break;B++}switch(F=y.substring(ne,B),H===0&&(H=(z=z.replace(g,"").trim()).charCodeAt(0)),H){case 64:switch(0<ie&&(z=z.replace(E,"")),R=z.charCodeAt(1),R){case 100:case 109:case 115:case 45:ie=l;break;default:ie=Y}if(F=r(l,ie,F,R,d+1),ne=F.length,0<le&&(ie=a(Y,z,Te),we=u(3,F,ie,l,Z,W,ne,R,d,k),z=ie.join(""),we!==void 0&&(ne=(F=we.trim()).length)===0&&(R=0,F="")),0<ne)switch(R){case 115:z=z.replace(_,c);case 100:case 109:case 45:F=z+"{"+F+"}";break;case 107:z=z.replace(w,"$1 $2"),F=z+"{"+F+"}",F=T===1||T===2&&s("@"+F,3)?"@-webkit-"+F+"@"+F:"@"+F;break;default:F=z+F,k===112&&(F=(Q+=F,""))}else F="";break;default:F=r(l,a(l,z,Te),F,k,d+1)}Et+=F,F=Te=ie=ce=H=0,z="",R=y.charCodeAt(++B);break;case 125:case 59:if(z=(0<ie?z.replace(E,""):z).trim(),1<(ne=z.length))switch(ce===0&&(H=z.charCodeAt(0),H===45||96<H&&123>H)&&(ne=(z=z.replace(" ",":")).length),0<le&&(we=u(1,z,l,v,Z,W,Q.length,k,d,k))!==void 0&&(ne=(z=we.trim()).length)===0&&(z="\0\0"),H=z.charCodeAt(0),R=z.charCodeAt(1),H){case 0:break;case 64:if(R===105||R===99){Pt+=z+y.charAt(B);break}default:z.charCodeAt(ne-1)!==58&&(Q+=n(z,H,R,z.charCodeAt(2)))}Te=ie=ce=H=0,z="",R=y.charCodeAt(++B)}}switch(R){case 13:case 10:x===47?x=0:1+H===0&&k!==107&&0<z.length&&(ie=1,z+="\0"),0<le*xe&&u(0,z,l,v,Z,W,Q.length,k,d,k),W=1,Z++;break;case 59:case 125:if(x+O+J+N===0){W++;break}default:switch(W++,he=y.charAt(B),R){case 9:case 32:if(O+N+x===0)switch(oe){case 44:case 58:case 9:case 32:he="";break;default:R!==32&&(he=" ")}break;case 0:he="\\0";break;case 12:he="\\f";break;case 11:he="\\v";break;case 38:O+x+N===0&&(ie=Te=1,he="\f"+he);break;case 108:if(O+x+N+j===0&&0<ce)switch(B-ce){case 2:oe===112&&y.charCodeAt(B-3)===58&&(j=oe);case 8:de===111&&(j=de)}break;case 58:O+x+N===0&&(ce=B);break;case 44:x+J+O+N===0&&(ie=1,he+="\r");break;case 34:case 39:x===0&&(O=O===R?0:O===0?R:O);break;case 91:O+x+J===0&&N++;break;case 93:O+x+J===0&&N--;break;case 41:O+x+N===0&&J--;break;case 40:if(O+x+N===0){if(H===0)switch(2*oe+3*de){case 533:break;default:H=1}J++}break;case 64:x+J+O+N+ce+F===0&&(F=1);break;case 42:case 47:if(!(0<O+N+J))switch(x){case 0:switch(2*R+3*y.charCodeAt(B+1)){case 235:x=47;break;case 220:ne=B,x=42}break;case 42:R===47&&oe===42&&ne+2!==B&&(y.charCodeAt(ne+2)===33&&(Q+=y.substring(ne,B+1)),he="",x=0)}}x===0&&(z+=he)}de=oe,oe=R,B++}if(ne=Q.length,0<ne){if(ie=l,0<le&&(we=u(2,Q,ie,v,Z,W,ne,k,d,k),we!==void 0&&(Q=we).length===0))return Pt+Q+Et;if(Q=ie.join(",")+"{"+Q+"}",T*j!==0){switch(T!==2||s(Q,2)||(j=0),j){case 111:Q=Q.replace(S,":-moz-$1")+Q;break;case 112:Q=Q.replace(L,"::-webkit-input-$1")+Q.replace(L,"::-moz-$1")+Q.replace(L,":-ms-input-$1")+Q}j=0}}return Pt+Q+Et}function a(v,l,y){var k=l.trim().split(f);l=k;var d=k.length,N=v.length;switch(N){case 0:case 1:var x=0;for(v=N===0?"":v[0]+" ";x<d;++x)l[x]=i(v,l[x],y).trim();break;default:var J=x=0;for(l=[];x<d;++x)for(var O=0;O<N;++O)l[J++]=i(v[O]+" ",k[x],y).trim()}return l}function i(v,l,y){var k=l.charCodeAt(0);switch(33>k&&(k=(l=l.trim()).charCodeAt(0)),k){case 38:return l.replace($,"$1"+v.trim());case 58:return v.trim()+l.replace($,"$1"+v.trim());default:if(0<1*y&&0<l.indexOf("\f"))return l.replace($,(v.charCodeAt(0)===58?"":"$1")+v.trim())}return v+l}function n(v,l,y,k){var d=v+";",N=2*l+3*y+4*k;if(N===944){v=d.indexOf(":",9)+1;var x=d.substring(v,d.length-1).trim();return x=d.substring(0,v).trim()+x+";",T===1||T===2&&s(x,1)?"-webkit-"+x+x:x}if(T===0||T===2&&!s(d,1))return d;switch(N){case 1015:return d.charCodeAt(10)===97?"-webkit-"+d+d:d;case 951:return d.charCodeAt(3)===116?"-webkit-"+d+d:d;case 963:return d.charCodeAt(5)===110?"-webkit-"+d+d:d;case 1009:if(d.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+d+d;case 978:return"-webkit-"+d+"-moz-"+d+d;case 1019:case 983:return"-webkit-"+d+"-moz-"+d+"-ms-"+d+d;case 883:if(d.charCodeAt(8)===45)return"-webkit-"+d+d;if(0<d.indexOf("image-set(",11))return d.replace(G,"$1-webkit-$2")+d;break;case 932:if(d.charCodeAt(4)===45)switch(d.charCodeAt(5)){case 103:return"-webkit-box-"+d.replace("-grow","")+"-webkit-"+d+"-ms-"+d.replace("grow","positive")+d;case 115:return"-webkit-"+d+"-ms-"+d.replace("shrink","negative")+d;case 98:return"-webkit-"+d+"-ms-"+d.replace("basis","preferred-size")+d}return"-webkit-"+d+"-ms-"+d+d;case 964:return"-webkit-"+d+"-ms-flex-"+d+d;case 1023:if(d.charCodeAt(8)!==99)break;return x=d.substring(d.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+d+"-ms-flex-pack"+x+d;case 1005:return M.test(d)?d.replace(P,":-webkit-")+d.replace(P,":-moz-")+d:d;case 1e3:switch(x=d.substring(13).trim(),l=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(l)){case 226:x=d.replace(A,"tb");break;case 232:x=d.replace(A,"tb-rl");break;case 220:x=d.replace(A,"lr");break;default:return d}return"-webkit-"+d+"-ms-"+x+d;case 1017:if(d.indexOf("sticky",9)===-1)break;case 975:switch(l=(d=v).length-10,x=(d.charCodeAt(l)===33?d.substring(0,l):d).substring(v.indexOf(":",7)+1).trim(),N=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:d=d.replace(x,"-webkit-"+x)+";"+d;break;case 207:case 102:d=d.replace(x,"-webkit-"+(102<N?"inline-":"")+"box")+";"+d.replace(x,"-webkit-"+x)+";"+d.replace(x,"-ms-"+x+"box")+";"+d}return d+";";case 938:if(d.charCodeAt(5)===45)switch(d.charCodeAt(6)){case 105:return x=d.replace("-items",""),"-webkit-"+d+"-webkit-box-"+x+"-ms-flex-"+x+d;case 115:return"-webkit-"+d+"-ms-flex-item-"+d.replace(D,"")+d;default:return"-webkit-"+d+"-ms-flex-line-pack"+d.replace("align-content","").replace(D,"")+d}break;case 973:case 989:if(d.charCodeAt(3)!==45||d.charCodeAt(4)===122)break;case 931:case 953:if(K.test(v)===!0)return(x=v.substring(v.indexOf(":")+1)).charCodeAt(0)===115?n(v.replace("stretch","fill-available"),l,y,k).replace(":fill-available",":stretch"):d.replace(x,"-webkit-"+x)+d.replace(x,"-moz-"+x.replace("fill-",""))+d;break;case 962:if(d="-webkit-"+d+(d.charCodeAt(5)===102?"-ms-"+d:"")+d,y+k===211&&d.charCodeAt(13)===105&&0<d.indexOf("transform",10))return d.substring(0,d.indexOf(";",27)+1).replace(I,"$1-webkit-$2")+d}return d}function s(v,l){var y=v.indexOf(l===1?":":"{"),k=v.substring(0,l!==3?y:10);return y=v.substring(y+1,v.length-1),be(l!==2?k:k.replace(X,"$1"),y,l)}function c(v,l){var y=n(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return y!==l+";"?y.replace(U," or ($1)").substring(4):"("+l+")"}function u(v,l,y,k,d,N,x,J,O,H){for(var R=0,oe=l,de;R<le;++R)switch(de=se[R].call(b,v,oe,y,k,d,N,x,J,O,H)){case void 0:case!1:case!0:case null:break;default:oe=de}if(oe!==l)return oe}function h(v){switch(v){case void 0:case null:le=se.length=0;break;default:if(typeof v=="function")se[le++]=v;else if(typeof v=="object")for(var l=0,y=v.length;l<y;++l)h(v[l]);else xe=!!v|0}return h}function p(v){return v=v.prefix,v!==void 0&&(be=null,v?typeof v!="function"?T=1:(T=2,be=v):T=0),p}function b(v,l){var y=v;if(33>y.charCodeAt(0)&&(y=y.trim()),ye=y,y=[ye],0<le){var k=u(-1,l,y,y,Z,W,0,0,0,0);k!==void 0&&typeof k=="string"&&(l=k)}var d=r(Y,y,l,0,0);return 0<le&&(k=u(-2,d,y,y,Z,W,d.length,0,0,0),k!==void 0&&(d=k)),ye="",j=0,W=Z=1,d}var g=/^\0+/g,E=/[\0\r\f]/g,P=/: */g,M=/zoo|gra/,I=/([,: ])(transform)/g,f=/,\r+?/g,$=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,L=/::(place)/g,S=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,U=/([\s\S]*?);/g,D=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,W=1,Z=1,j=0,T=1,Y=[],se=[],le=0,be=null,xe=0,ye="";return b.use=h,b.set=p,e!==void 0&&p(e),b}var bo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xo(e){var r=Object.create(null);return function(a){return r[a]===void 0&&(r[a]=e(a)),r[a]}}var wo=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,kr=xo(function(e){return wo.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ua={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,Qt=ae?Symbol.for("react.element"):60103,er=ae?Symbol.for("react.portal"):60106,bt=ae?Symbol.for("react.fragment"):60107,xt=ae?Symbol.for("react.strict_mode"):60108,wt=ae?Symbol.for("react.profiler"):60114,$t=ae?Symbol.for("react.provider"):60109,vt=ae?Symbol.for("react.context"):60110,tr=ae?Symbol.for("react.async_mode"):60111,kt=ae?Symbol.for("react.concurrent_mode"):60111,St=ae?Symbol.for("react.forward_ref"):60112,jt=ae?Symbol.for("react.suspense"):60113,$o=ae?Symbol.for("react.suspense_list"):60120,Ct=ae?Symbol.for("react.memo"):60115,At=ae?Symbol.for("react.lazy"):60116,vo=ae?Symbol.for("react.block"):60121,ko=ae?Symbol.for("react.fundamental"):60117,So=ae?Symbol.for("react.responder"):60118,jo=ae?Symbol.for("react.scope"):60119;function pe(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Qt:switch(e=e.type,e){case tr:case kt:case bt:case wt:case xt:case jt:return e;default:switch(e=e&&e.$$typeof,e){case vt:case St:case At:case Ct:case $t:return e;default:return r}}case er:return r}}}function ma(e){return pe(e)===kt}q.AsyncMode=tr;q.ConcurrentMode=kt;q.ContextConsumer=vt;q.ContextProvider=$t;q.Element=Qt;q.ForwardRef=St;q.Fragment=bt;q.Lazy=At;q.Memo=Ct;q.Portal=er;q.Profiler=wt;q.StrictMode=xt;q.Suspense=jt;q.isAsyncMode=function(e){return ma(e)||pe(e)===tr};q.isConcurrentMode=ma;q.isContextConsumer=function(e){return pe(e)===vt};q.isContextProvider=function(e){return pe(e)===$t};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qt};q.isForwardRef=function(e){return pe(e)===St};q.isFragment=function(e){return pe(e)===bt};q.isLazy=function(e){return pe(e)===At};q.isMemo=function(e){return pe(e)===Ct};q.isPortal=function(e){return pe(e)===er};q.isProfiler=function(e){return pe(e)===wt};q.isStrictMode=function(e){return pe(e)===xt};q.isSuspense=function(e){return pe(e)===jt};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bt||e===kt||e===wt||e===xt||e===jt||e===$o||typeof e=="object"&&e!==null&&(e.$$typeof===At||e.$$typeof===Ct||e.$$typeof===$t||e.$$typeof===vt||e.$$typeof===St||e.$$typeof===ko||e.$$typeof===So||e.$$typeof===jo||e.$$typeof===vo)};q.typeOf=pe;ua.exports=q;var Co=ua.exports,rr=Co,Ao={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zo={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eo={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ha={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ar={};ar[rr.ForwardRef]=Eo;ar[rr.Memo]=ha;function Sr(e){return rr.isMemo(e)?ha:ar[e.$$typeof]||Ao}var Po=Object.defineProperty,Mo=Object.getOwnPropertyNames,jr=Object.getOwnPropertySymbols,Io=Object.getOwnPropertyDescriptor,Ro=Object.getPrototypeOf,Cr=Object.prototype;function ga(e,r,a){if(typeof r!="string"){if(Cr){var i=Ro(r);i&&i!==Cr&&ga(e,i,a)}var n=Mo(r);jr&&(n=n.concat(jr(r)));for(var s=Sr(e),c=Sr(r),u=0;u<n.length;++u){var h=n[u];if(!zo[h]&&!(a&&a[h])&&!(c&&c[h])&&!(s&&s[h])){var p=Io(r,h);try{Po(e,h,p)}catch{}}}}return e}var Lo=ga;const To=to(Lo);var ue={};function ge(){return(ge=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var Ar=function(e,r){for(var a=[e[0]],i=0,n=r.length;i<n;i+=1)a.push(r[i],e[i+1]);return a},Bt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!pa.typeOf(e)},rt=Object.freeze([]),ve=Object.freeze({});function Ie(e){return typeof e=="function"}function zr(e){return e.displayName||e.name||"Component"}function or(e){return e&&typeof e.styledComponentId=="string"}var Re=typeof process<"u"&&ue!==void 0&&(ue.REACT_APP_SC_ATTR||ue.SC_ATTR)||"data-styled",ir=typeof window<"u"&&"HTMLElement"in window,Fo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ue!==void 0&&(ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ue.REACT_APP_SC_DISABLE_SPEEDY!==""?ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ue.REACT_APP_SC_DISABLE_SPEEDY:ue.SC_DISABLE_SPEEDY!==void 0&&ue.SC_DISABLE_SPEEDY!==""&&ue.SC_DISABLE_SPEEDY!=="false"&&ue.SC_DISABLE_SPEEDY)),_o={};function Ae(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var No=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var r=e.prototype;return r.indexOfGroup=function(a){for(var i=0,n=0;n<a;n++)i+=this.groupSizes[n];return i},r.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,c=s;a>=c;)(c<<=1)<0&&Ae(16,""+a);this.groupSizes=new Uint32Array(c),this.groupSizes.set(n),this.length=c;for(var u=s;u<c;u++)this.groupSizes[u]=0}for(var h=this.indexOfGroup(a+1),p=0,b=i.length;p<b;p++)this.tag.insertRule(h,i[p])&&(this.groupSizes[a]++,h++)},r.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],n=this.indexOfGroup(a),s=n+i;this.groupSizes[a]=0;for(var c=n;c<s;c++)this.tag.deleteRule(n)}},r.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var n=this.groupSizes[a],s=this.indexOfGroup(a),c=s+n,u=s;u<c;u++)i+=this.tag.getRule(u)+`/*!sc*/
`;return i},e}(),tt=new Map,at=new Map,Ne=1,qe=function(e){if(tt.has(e))return tt.get(e);for(;at.has(Ne);)Ne++;var r=Ne++;return tt.set(e,r),at.set(r,e),r},Oo=function(e){return at.get(e)},Bo=function(e,r){r>=Ne&&(Ne=r+1),tt.set(e,r),at.set(r,e)},Do="style["+Re+'][data-styled-version="5.3.11"]',Ho=new RegExp("^"+Re+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),qo=function(e,r,a){for(var i,n=a.split(","),s=0,c=n.length;s<c;s++)(i=n[s])&&e.registerName(r,i)},Go=function(e,r){for(var a=(r.textContent||"").split(`/*!sc*/
`),i=[],n=0,s=a.length;n<s;n++){var c=a[n].trim();if(c){var u=c.match(Ho);if(u){var h=0|parseInt(u[1],10),p=u[2];h!==0&&(Bo(p,h),qo(e,p,u[3]),e.getTag().insertRules(h,i)),i.length=0}else i.push(c)}}},Yo=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},fa=function(e){var r=document.head,a=e||r,i=document.createElement("style"),n=function(u){for(var h=u.childNodes,p=h.length;p>=0;p--){var b=h[p];if(b&&b.nodeType===1&&b.hasAttribute(Re))return b}}(a),s=n!==void 0?n.nextSibling:null;i.setAttribute(Re,"active"),i.setAttribute("data-styled-version","5.3.11");var c=Yo();return c&&i.setAttribute("nonce",c),a.insertBefore(i,s),i},Vo=function(){function e(a){var i=this.element=fa(a);i.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var s=document.styleSheets,c=0,u=s.length;c<u;c++){var h=s[c];if(h.ownerNode===n)return h}Ae(17)}(i),this.length=0}var r=e.prototype;return r.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},r.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.getRule=function(a){var i=this.sheet.cssRules[a];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Ko=function(){function e(a){var i=this.element=fa(a);this.nodes=i.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(a,i){if(a<=this.length&&a>=0){var n=document.createTextNode(i),s=this.nodes[a];return this.element.insertBefore(n,s||null),this.length++,!0}return!1},r.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),Wo=function(){function e(a){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(a,i){return a<=this.length&&(this.rules.splice(a,0,i),this.length++,!0)},r.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),Er=ir,Uo={isServer:!ir,useCSSOMInjection:!Fo},ot=function(){function e(a,i,n){a===void 0&&(a=ve),i===void 0&&(i={}),this.options=ge({},Uo,{},a),this.gs=i,this.names=new Map(n),this.server=!!a.isServer,!this.server&&ir&&Er&&(Er=!1,function(s){for(var c=document.querySelectorAll(Do),u=0,h=c.length;u<h;u++){var p=c[u];p&&p.getAttribute(Re)!=="active"&&(Go(s,p),p.parentNode&&p.parentNode.removeChild(p))}}(this))}e.registerId=function(a){return qe(a)};var r=e.prototype;return r.reconstructWithOptions=function(a,i){return i===void 0&&(i=!0),new e(ge({},this.options,{},a),this.gs,i&&this.names||void 0)},r.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.getTag=function(){return this.tag||(this.tag=(n=(i=this.options).isServer,s=i.useCSSOMInjection,c=i.target,a=n?new Wo(c):s?new Vo(c):new Ko(c),new No(a)));var a,i,n,s,c},r.hasNameForId=function(a,i){return this.names.has(a)&&this.names.get(a).has(i)},r.registerName=function(a,i){if(qe(a),this.names.has(a))this.names.get(a).add(i);else{var n=new Set;n.add(i),this.names.set(a,n)}},r.insertRules=function(a,i,n){this.registerName(a,i),this.getTag().insertRules(qe(a),n)},r.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.clearRules=function(a){this.getTag().clearGroup(qe(a)),this.clearNames(a)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(a){for(var i=a.getTag(),n=i.length,s="",c=0;c<n;c++){var u=Oo(c);if(u!==void 0){var h=a.names.get(u),p=i.getGroup(c);if(h&&p&&h.size){var b=Re+".g"+c+'[id="'+u+'"]',g="";h!==void 0&&h.forEach(function(E){E.length>0&&(g+=E+",")}),s+=""+p+b+'{content:"'+g+`"}/*!sc*/
`}}}return s}(this)},e}(),Xo=/(a)(d)/gi,Pr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dt(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=Pr(r%52)+a;return(Pr(r%52)+a).replace(Xo,"$1-$2")}var Me=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},ya=function(e){return Me(5381,e)};function ba(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Ie(a)&&!or(a))return!1}return!0}var Zo=ya("5.3.11"),Jo=function(){function e(r,a,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ba(r),this.componentId=a,this.baseHash=Me(Zo,a),this.baseStyle=i,ot.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,i){var n=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,a,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(n,this.staticRulesId))s.push(this.staticRulesId);else{var c=ze(this.rules,r,a,i).join(""),u=Dt(Me(this.baseHash,c)>>>0);if(!a.hasNameForId(n,u)){var h=i(c,"."+u,void 0,n);a.insertRules(n,u,h)}s.push(u),this.staticRulesId=u}else{for(var p=this.rules.length,b=Me(this.baseHash,i.hash),g="",E=0;E<p;E++){var P=this.rules[E];if(typeof P=="string")g+=P;else if(P){var M=ze(P,r,a,i),I=Array.isArray(M)?M.join(""):M;b=Me(b,I+E),g+=I}}if(g){var f=Dt(b>>>0);if(!a.hasNameForId(n,f)){var $=i(g,"."+f,void 0,n);a.insertRules(n,f,$)}s.push(f)}}return s.join(" ")},e}(),Qo=/^\s*\/\/.*$/gm,ei=[":","[",".","#"];function ti(e){var r,a,i,n,s=ve,c=s.options,u=c===void 0?ve:c,h=s.plugins,p=h===void 0?rt:h,b=new yo(u),g=[],E=function(I){function f($){if($)try{I($+"}")}catch{}}return function($,w,L,S,A,_,U,D,X,K){switch($){case 1:if(X===0&&w.charCodeAt(0)===64)return I(w+";"),"";break;case 2:if(D===0)return w+"/*|*/";break;case 3:switch(D){case 102:case 112:return I(L[0]+w),"";default:return w+(K===0?"/*|*/":"")}case-2:w.split("/*|*/}").forEach(f)}}}(function(I){g.push(I)}),P=function(I,f,$){return f===0&&ei.indexOf($[a.length])!==-1||$.match(n)?I:"."+r};function M(I,f,$,w){w===void 0&&(w="&");var L=I.replace(Qo,""),S=f&&$?$+" "+f+" { "+L+" }":L;return r=w,a=f,i=new RegExp("\\"+a+"\\b","g"),n=new RegExp("(\\"+a+"\\b){2,}"),b($||!f?"":f,S)}return b.use([].concat(p,[function(I,f,$){I===2&&$.length&&$[0].lastIndexOf(a)>0&&($[0]=$[0].replace(i,P))},E,function(I){if(I===-2){var f=g;return g=[],f}}])),M.hash=p.length?p.reduce(function(I,f){return f.name||Ae(15),Me(I,f.name)},5381).toString():"",M}var xa=Pe.createContext();xa.Consumer;var wa=Pe.createContext(),ri=(wa.Consumer,new ot),Ht=ti();function $a(){return m.useContext(xa)||ri}function va(){return m.useContext(wa)||Ht}var ka=function(){function e(r,a){var i=this;this.inject=function(n,s){s===void 0&&(s=Ht);var c=i.name+s.hash;n.hasNameForId(i.id,c)||n.insertRules(i.id,c,s(i.rules,c,"@keyframes"))},this.toString=function(){return Ae(12,String(i.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=a}return e.prototype.getName=function(r){return r===void 0&&(r=Ht),this.name+r.hash},e}(),ai=/([A-Z])/,oi=/([A-Z])/g,ii=/^ms-/,ni=function(e){return"-"+e.toLowerCase()};function Mr(e){return ai.test(e)?e.replace(oi,ni).replace(ii,"-ms-"):e}var Ir=function(e){return e==null||e===!1||e===""};function ze(e,r,a,i){if(Array.isArray(e)){for(var n,s=[],c=0,u=e.length;c<u;c+=1)(n=ze(e[c],r,a,i))!==""&&(Array.isArray(n)?s.push.apply(s,n):s.push(n));return s}if(Ir(e))return"";if(or(e))return"."+e.styledComponentId;if(Ie(e)){if(typeof(p=e)!="function"||p.prototype&&p.prototype.isReactComponent||!r)return e;var h=e(r);return ze(h,r,a,i)}var p;return e instanceof ka?a?(e.inject(a,i),e.getName(i)):e:Bt(e)?function b(g,E){var P,M,I=[];for(var f in g)g.hasOwnProperty(f)&&!Ir(g[f])&&(Array.isArray(g[f])&&g[f].isCss||Ie(g[f])?I.push(Mr(f)+":",g[f],";"):Bt(g[f])?I.push.apply(I,b(g[f],f)):I.push(Mr(f)+": "+(P=f,(M=g[f])==null||typeof M=="boolean"||M===""?"":typeof M!="number"||M===0||P in bo||P.startsWith("--")?String(M).trim():M+"px")+";"));return E?[E+" {"].concat(I,["}"]):I}(e):e.toString()}var Rr=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function te(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return Ie(e)||Bt(e)?Rr(ze(Ar(rt,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:Rr(ze(Ar(e,a)))}var Sa=function(e,r,a){return a===void 0&&(a=ve),e.theme!==a.theme&&e.theme||r||a.theme},si=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ci=/(^-|-$)/g;function Mt(e){return e.replace(si,"-").replace(ci,"")}var nr=function(e){return Dt(ya(e)>>>0)};function Ge(e){return typeof e=="string"&&!0}var qt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},li=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function di(e,r,a){var i=e[a];qt(r)&&qt(i)?ja(i,r):e[a]=r}function ja(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];for(var n=0,s=a;n<s.length;n++){var c=s[n];if(qt(c))for(var u in c)li(u)&&di(e,c[u],u)}return e}var Oe=Pe.createContext();Oe.Consumer;function pi(e){var r=m.useContext(Oe),a=m.useMemo(function(){return function(i,n){if(!i)return Ae(14);if(Ie(i)){var s=i(n);return s}return Array.isArray(i)||typeof i!="object"?Ae(8):n?ge({},n,{},i):i}(e.theme,r)},[e.theme,r]);return e.children?Pe.createElement(Oe.Provider,{value:a},e.children):null}var It={};function Ca(e,r,a){var i=or(e),n=!Ge(e),s=r.attrs,c=s===void 0?rt:s,u=r.componentId,h=u===void 0?function(w,L){var S=typeof w!="string"?"sc":Mt(w);It[S]=(It[S]||0)+1;var A=S+"-"+nr("5.3.11"+S+It[S]);return L?L+"-"+A:A}(r.displayName,r.parentComponentId):u,p=r.displayName,b=p===void 0?function(w){return Ge(w)?"styled."+w:"Styled("+zr(w)+")"}(e):p,g=r.displayName&&r.componentId?Mt(r.displayName)+"-"+r.componentId:r.componentId||h,E=i&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,P=r.shouldForwardProp;i&&e.shouldForwardProp&&(P=r.shouldForwardProp?function(w,L,S){return e.shouldForwardProp(w,L,S)&&r.shouldForwardProp(w,L,S)}:e.shouldForwardProp);var M,I=new Jo(a,g,i?e.componentStyle:void 0),f=I.isStatic&&c.length===0,$=function(w,L){return function(S,A,_,U){var D=S.attrs,X=S.componentStyle,K=S.defaultProps,G=S.foldedComponentIds,W=S.shouldForwardProp,Z=S.styledComponentId,j=S.target,T=function(k,d,N){k===void 0&&(k=ve);var x=ge({},d,{theme:k}),J={};return N.forEach(function(O){var H,R,oe,de=O;for(H in Ie(de)&&(de=de(x)),de)x[H]=J[H]=H==="className"?(R=J[H],oe=de[H],R&&oe?R+" "+oe:R||oe):de[H]}),[x,J]}(Sa(A,m.useContext(Oe),K)||ve,A,D),Y=T[0],se=T[1],le=function(k,d,N,x){var J=$a(),O=va(),H=d?k.generateAndInjectStyles(ve,J,O):k.generateAndInjectStyles(N,J,O);return H}(X,U,Y),be=_,xe=se.$as||A.$as||se.as||A.as||j,ye=Ge(xe),v=se!==A?ge({},A,{},se):A,l={};for(var y in v)y[0]!=="$"&&y!=="as"&&(y==="forwardedAs"?l.as=v[y]:(W?W(y,kr,xe):!ye||kr(y))&&(l[y]=v[y]));return A.style&&se.style!==A.style&&(l.style=ge({},A.style,{},se.style)),l.className=Array.prototype.concat(G,Z,le!==Z?le:null,A.className,se.className).filter(Boolean).join(" "),l.ref=be,m.createElement(xe,l)}(M,w,L,f)};return $.displayName=b,(M=Pe.forwardRef($)).attrs=E,M.componentStyle=I,M.displayName=b,M.shouldForwardProp=P,M.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):rt,M.styledComponentId=g,M.target=i?e.target:e,M.withComponent=function(w){var L=r.componentId,S=function(_,U){if(_==null)return{};var D,X,K={},G=Object.keys(_);for(X=0;X<G.length;X++)D=G[X],U.indexOf(D)>=0||(K[D]=_[D]);return K}(r,["componentId"]),A=L&&L+"-"+(Ge(w)?w:Mt(zr(w)));return Ca(w,ge({},S,{attrs:E,componentId:A}),a)},Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=i?ja({},e.defaultProps,w):w}}),Object.defineProperty(M,"toString",{value:function(){return"."+M.styledComponentId}}),n&&To(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),M}var o=function(e){return function r(a,i,n){if(n===void 0&&(n=ve),!pa.isValidElementType(i))return Ae(1,String(i));var s=function(){return a(i,n,te.apply(void 0,arguments))};return s.withConfig=function(c){return r(a,i,ge({},n,{},c))},s.attrs=function(c){return r(a,i,ge({},n,{attrs:Array.prototype.concat(n.attrs,c).filter(Boolean)}))},s}(Ca,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){o[e]=o(e)});var ui=function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=ba(a),ot.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(a,i,n,s){var c=s(ze(this.rules,i,n,s).join(""),""),u=this.componentId+a;n.insertRules(u,u,c)},r.removeStyles=function(a,i){i.clearRules(this.componentId+a)},r.renderStyles=function(a,i,n,s){a>2&&ot.registerId(this.componentId+a),this.removeStyles(a,n),this.createStyles(a,i,n,s)},e}();function mi(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=te.apply(void 0,[e].concat(a)),s="sc-global-"+nr(JSON.stringify(n)),c=new ui(n,s);function u(p){var b=$a(),g=va(),E=m.useContext(Oe),P=m.useRef(b.allocateGSInstance(s)).current;return b.server&&h(P,p,b,E,g),m.useLayoutEffect(function(){if(!b.server)return h(P,p,b,E,g),function(){return c.removeStyles(P,b)}},[P,p,b,E,g]),null}function h(p,b,g,E,P){if(c.isStatic)c.renderStyles(p,_o,g,P);else{var M=ge({},b,{theme:Sa(b,E,u.defaultProps)});c.renderStyles(p,M,g,P)}}return Pe.memo(u)}function zt(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];var n=te.apply(void 0,[e].concat(a)).join(""),s=nr(n);return new ka(s,n)}const hi=mi`
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
`,$e={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)",neonMuted:"#4B5C7A"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"0.375rem",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},gi=$e.shadow,fi={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)",neonMuted:"#5CB9C9"},yi={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},bi=e=>({mode:e,color:e==="dark"?fi:$e.color,typography:$e.typography,spacing:$e.spacing,radius:$e.radius,shadow:e==="dark"?yi:gi,layout:$e.layout,breakpoints:$e.breakpoints,zIndex:$e.zIndex}),Aa="lafranciago-theme-mode",za=m.createContext(null),xi=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(Aa);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function wi({children:e}){const[r,a]=m.useState(xi),i=m.useRef(!1);m.useEffect(()=>{if(window.localStorage.setItem(Aa,r),document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const h=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(h),delete document.documentElement.dataset.themeTransition}},[r]);const n=m.useCallback(()=>{a(h=>h==="light"?"dark":"light")},[]),s=m.useCallback(h=>{a(h)},[]),c=m.useMemo(()=>bi(r),[r]),u=m.useMemo(()=>({mode:r,isDarkMode:r==="dark",toggleMode:n,setMode:s}),[r,s,n]);return t.jsx(za.Provider,{value:u,children:t.jsxs(pi,{theme:c,children:[t.jsx(hi,{}),e]})})}function $i(){const e=m.useContext(za);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),C=(e,r)=>{const a=m.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:u="",children:h,...p},b)=>m.createElement("svg",{ref:b,...vi,width:n,height:n,stroke:i,strokeWidth:c?Number(s)*24/Number(n):s,className:["lucide",`lucide-${ki(e)}`,u].join(" "),...p},[...r.map(([g,E])=>m.createElement(g,E)),...Array.isArray(h)?h:[h]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=C("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=C("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=C("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=C("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=C("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=C("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=C("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=C("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=C("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=C("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=C("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=C("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=C("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=C("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=C("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=C("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=C("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=C("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=C("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=C("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=C("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=C("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=C("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=C("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=C("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=C("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=C("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=C("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=C("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=C("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=C("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=C("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=C("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=C("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=C("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=C("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=C("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=C("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=C("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=C("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=C("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=C("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=C("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=C("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=C("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ha({size:e=18,...r}){return t.jsxs("svg",{...r,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[t.jsx("path",{d:"M1.5 10.5h4"}),t.jsx("path",{d:"M3 14h3.5"}),t.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),t.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),t.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),t.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),t.jsx("path",{d:"M17.4 8.2h2.6"})]})}const Yt="lafranciago:foto-perfil",Vt=new Set;let _e=null,Fr=!1;const Bi=()=>Vt.forEach(e=>e()),Di=()=>{try{return window.localStorage.getItem(Yt)}catch{return null}};function _r(e){_e=e;try{e?window.localStorage.setItem(Yt,e):window.localStorage.removeItem(Yt)}catch{}Bi()}function Hi(){const[e,r]=m.useState(_e);m.useEffect(()=>{Fr||(Fr=!0,_e=Di()),r(_e);const i=()=>r(_e);return Vt.add(i),()=>{Vt.delete(i)}},[]);const a=m.useCallback(()=>_r(null),[]);return{photo:e,setPhoto:_r,clearPhoto:a}}const qi="https://photon.komoot.io/api/",Gi="https://nominatim.openstreetmap.org/reverse",Kt={lat:-31.4063691,lon:-62.6332043},Rt=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Yi=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",Vi=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function Ki(e,r){const a=e.trim();if(a.length<2)return[];const i=new URLSearchParams({q:a,limit:"12",lat:String(Kt.lat),lon:String(Kt.lon)});try{const n=await fetch(`${qi}?${i.toString()}`,{signal:r});return n.ok?((await n.json()).features??[]).map((c,u)=>{var g;const h=c.properties??{},[p,b]=((g=c.geometry)==null?void 0:g.coordinates)??[];return typeof b!="number"||typeof p!="number"?null:{id:`${h.type??"geo"}-${u}-${b}-${p}`,label:Yi(h),context:Vi(h),lat:b,lon:p}}).filter(c=>c!==null).sort((c,u)=>{const h=Rt(a),p=Rt(c.label).startsWith(h),b=Rt(u.label).startsWith(h);return p!==b?p?-1:1:0}).slice(0,6):[]}catch{return[]}}async function Wi(e,r,a){const i=new URLSearchParams({format:"json",lat:String(e),lon:String(r),zoom:"18","accept-language":"es"});try{const n=await fetch(`${Gi}?${i.toString()}`,{signal:a});if(!n.ok)return null;const c=(await n.json()).address??{};return[c.road,c.house_number].filter(Boolean).join(" ")||c.neighbourhood||c.city||null}catch{return null}}const Ui=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Xi=zt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Zi=zt`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Ji=o.div`
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
  animation: ${Xi} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Qi=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Zi} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,en=o.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,tn=o.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,rn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,an=o.input`
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
`,on=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,nn=o.button`
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
`,sn=o.button`
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
`;function cn({open:e,address:r,onCancel:a,onSave:i}){const[n,s]=m.useState("");if(m.useEffect(()=>{e&&s("")},[e]),m.useEffect(()=>{if(!e)return;const h=p=>{p.key==="Escape"&&a()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[a,e]),!e)return null;const c=n.trim(),u=h=>{h.preventDefault(),c&&i(c)};return t.jsx(Ji,{onClick:h=>{h.stopPropagation(),a()},role:"presentation",children:t.jsxs(Qi,{as:"form",onSubmit:u,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:h=>h.stopPropagation(),children:[t.jsx(en,{children:"Nombre de la dirección"}),r?t.jsx(tn,{children:r}):null,t.jsx(rn,{htmlFor:"address-name",children:"Nombre de la dirección"}),t.jsx(an,{id:"address-name",value:n,onChange:h=>s(h.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),t.jsxs(on,{children:[t.jsx(nn,{type:"button",onClick:a,children:"Cancelar"}),t.jsx(sn,{type:"submit",disabled:!c,children:"Guardar"})]})]})})}const ke=te`
  ${({theme:e})=>e.mode==="dark"&&te`
      color: ${e.color.neonMuted};
    `}
`,Wt=te`
  ${({theme:e})=>e.mode==="dark"&&te`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,ln=te`
  ${({theme:e})=>e.mode==="dark"&&te`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;te`
  ${({theme:e})=>e.mode==="dark"&&te`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const dn=o.div`
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
`,pn=o.div`
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
`,un=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,mn=o.span`
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
`,gn=o.button`
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
`,fn=o.div`
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
`,yn=o.div`
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
`,bn=o.input`
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
`,xn=o.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,wn=o.button`
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
`,$n=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,vn=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,kn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Sn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jn=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,Cn=o.button`
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
`,An=o.button`
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
`,zn=o.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,En=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,Pn=o.button`
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
`,Mn=o.div`
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
`,Rn=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ln=o.span`
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
`,Fn=m.lazy(()=>re(()=>import("./AddressMap-C7-YWI0R.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.AddressMap}))),_n=260,Nn=350;function On({open:e,currentId:r,onClose:a,onSelect:i}){const[n,s]=m.useState(!1),[c,u]=m.useState(!1),[h,p]=m.useState("list"),[b,g]=m.useState(""),[E,P]=m.useState([]),[M,I]=m.useState(!1),[f,$]=m.useState(null),[w,L]=m.useState([]),[S,A]=m.useState(!1),_=m.useRef(!1);m.useEffect(()=>{if(e){s(!0);const T=window.requestAnimationFrame(()=>u(!0));return()=>window.cancelAnimationFrame(T)}if(!n)return;u(!1);const j=window.setTimeout(()=>{s(!1),p("list"),g(""),P([]),$(null),A(!1)},_n);return()=>window.clearTimeout(j)},[n,e]),m.useEffect(()=>{if(!e)return;const j=T=>{if(T.key==="Escape"&&!S){if(h==="new"){p("list");return}a()}};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[S,a,e,h]),m.useEffect(()=>{if(h!=="new")return;if(_.current){_.current=!1;return}const j=b.trim();if(j.length<2){P([]),I(!1);return}const T=new AbortController;I(!0);const Y=window.setTimeout(()=>{Ki(j,T.signal).then(se=>{P(se),I(!1)}).catch(()=>I(!1))},Nn);return()=>{window.clearTimeout(Y),T.abort()}},[b,h]);const U=m.useMemo(()=>[...Ui,...w],[w]),D=j=>{_.current=!0,g(j.label),P([]),$({lat:j.lat,lon:j.lon})},X=(j,T)=>{$({lat:j,lon:T}),Wi(j,T).then(Y=>{Y&&(_.current=!0,g(Y),P([]))})},K=j=>{const T={id:`custom-${Date.now()}`,label:j,address:b.trim(),primary:!1};L(Y=>[...Y,T]),A(!1),i(T.id,T.address),a()};if(!n)return null;const G=h==="new",W=f??Kt,Z=f!==null&&b.trim().length>=3;return t.jsxs(dn,{"data-visible":c,onClick:a,role:"presentation",children:[t.jsxs(pn,{"data-visible":c,"data-full":G,role:"dialog","aria-modal":"true","aria-label":G?"Agregar una dirección nueva":"Dirección de entrega",onClick:j=>j.stopPropagation(),children:[t.jsxs(un,{children:[t.jsx(mn,{"aria-hidden":"true"}),G?t.jsx(An,{type:"button",onClick:()=>p("list"),"aria-label":"Volver a mis direcciones",children:t.jsx(Si,{size:18,"aria-hidden":"true"})}):null,t.jsx(hn,{children:G?"Nueva dirección":"¿Dónde entregamos?"}),t.jsx(gn,{type:"button",onClick:a,"aria-label":"Cerrar",children:t.jsx(Da,{size:18,"aria-hidden":"true"})})]}),t.jsx(fn,{"data-full":G,children:G?t.jsxs(t.Fragment,{children:[t.jsxs(yn,{children:[t.jsx(Gt,{size:18,"aria-hidden":"true"}),t.jsx(bn,{value:b,onChange:j=>g(j.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),E.length>0?t.jsx(Mn,{"aria-label":"Sugerencias de direcciones",children:E.map(j=>t.jsxs(In,{type:"button",onClick:()=>D(j),children:[t.jsx(nt,{size:16,"aria-hidden":"true"}),t.jsxs("span",{children:[t.jsx(Rn,{children:j.label}),j.context?t.jsx(Ln,{children:j.context}):null]})]},j.id))}):null,E.length===0&&M?t.jsx(Tn,{children:"Buscando…"}):null,t.jsx(zn,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsx(Fn,{lat:W.lat,lon:W.lon,onPick:X})})}),t.jsx(En,{children:f?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),t.jsxs(Pn,{type:"button",onClick:()=>A(!0),disabled:!Z,children:[t.jsx(nt,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(xn,{children:"Tus direcciones guardadas"}),U.map(j=>t.jsxs(wn,{type:"button","data-current":j.id===r,onClick:()=>{i(j.id,j.address),a()},children:[t.jsx($n,{children:t.jsx(dr,{size:18,"aria-hidden":"true"})}),t.jsxs(vn,{children:[t.jsx(kn,{children:j.label}),t.jsx(Sn,{children:j.address})]}),j.id===r?t.jsx(jn,{"aria-label":"Dirección actual",children:t.jsx(Ci,{size:16,"aria-hidden":"true"})}):null]},j.id)),t.jsxs(Cn,{type:"button",onClick:()=>p("new"),children:[t.jsx(Ta,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),t.jsx(cn,{open:S,address:b.trim(),onCancel:()=>A(!1),onSave:K})]})}const Bn=o.form`
  width: 100%;
`,Dn=o.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Hn=o.div`
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
`,qn=o.input`
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
`,Gn=o.button`
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
`,qa=m.forwardRef(function({value:r,onChange:a,placeholder:i="Locales, productos y categorías",label:n,id:s="marketplace-search"},c){const u=h=>{h.preventDefault()};return t.jsxs(Bn,{onSubmit:u,role:"search",children:[t.jsx(Dn,{htmlFor:s,children:n??"Buscá productos, comercios o categorías"}),t.jsxs(Hn,{children:[t.jsx(Gt,{size:18,"aria-hidden":"true"}),t.jsx(qn,{id:s,ref:c,value:r,onChange:h=>a(h.target.value),placeholder:i,type:"search"}),t.jsx(Gn,{type:"submit","aria-label":"Buscar",children:t.jsx(Gt,{size:16,"aria-hidden":"true"})})]})]})}),Yn=zt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,Vn=zt`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,Kn=o.button`
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
`,Wn=o.span`
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
  animation: ${Yn} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Un=o.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,Xn=o.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Zn=o.span`
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
`,Jn=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Qn=o.span`
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
`,es=o.span`
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
`,ts=o.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,rs=o.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,as=o.span`
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
`;function Nr({isDarkMode:e,onToggle:r}){return t.jsxs(Kn,{type:"button",onClick:r,role:"switch","aria-checked":e,"data-dark":e,children:[t.jsx(Wn,{"data-dark":e,"aria-hidden":"true",children:t.jsx(Mi,{size:14,"aria-hidden":"true"})}),t.jsxs(Un,{children:[t.jsxs(Xn,{children:["Modo",t.jsx(Zn,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),t.jsx(Jn,{children:"Cambiá el contraste de toda la app."})]}),t.jsxs(Qn,{"data-dark":e,"aria-hidden":"true",children:[t.jsx(es,{}),t.jsx(ts,{"data-dark":e}),t.jsxs(rs,{children:[t.jsx(Tr,{size:12,"aria-hidden":"true"}),t.jsx(Lr,{size:12,"aria-hidden":"true"})]}),t.jsx(as,{"data-dark":e,children:e?t.jsx(Lr,{size:12,"aria-hidden":"true"}):t.jsx(Tr,{size:12,"aria-hidden":"true"})})]})]})}const os=o.div`
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
`,is=o.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,ns=o.div`
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
`;const ss=o.button`
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
`,Lt=o.img`
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
`,cs=o.span`
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
`;const ls=o(cs)`
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
`;const xd=o.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,wd=o.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,$d=o.span`
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
`,vd=o.div`
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
`,kd=o.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,hr=te`
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
  ${hr};
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
`;const Sd=o.button`
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
`,ds=o.main`
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
`,ps=o.div`
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
`,jd=o.span`
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
`,Cd=o.h1`
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
`,Ad=o.p`
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
`,gr=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;o(gr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;o(gr)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;o(gr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const us=o.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,ms=o.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,zd=o.h2`
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
`,Ed=o.p`
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
`;const gs=o.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Pd=o(gs)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;o.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const fs=o(fe)`
  ${hr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,ys=o(fs)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,Md=o.button`
  ${hr};
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
`;o(us)`
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
`;const bs=o.nav`
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
`,xs=o.ul`
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
`,Ut=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  [data-primary='true'] & {
    filter: none;
  }

  ${ke};

  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
  }
`,ws=o(Xt)`
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

    ${({theme:e})=>e.mode==="dark"&&te`
        color: ${e.color.neon};
      `};
  }

  /* Sólo la pestaña activa lleva el cian pleno con halo: es la que indica
     dónde está parado el usuario. Las demás acompañan en reposo. */
  &.active ${Ut},
  &[aria-current='page'] ${Ut} {
    ${Wt};
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
`;const $s=o.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&te`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,vs=o.button`
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
`,ks=o.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ss=o.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,js=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,Ga=te`
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
`,Cs=o.button`
  ${Ga};
`,Hr=o(fe)`
  ${Ga};
`,As=o.img`
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
`,zs=o.span`
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
`,Es=o.div`
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
`;const Ps=o.div`
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
`,Ms=o.div`
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
`,Rs=o.span`
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
`,Ls=o.span`
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

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`,Fs=o.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    min-width: 0;
    width: min(34rem, 42vw);
    justify-self: center;
  }
`,_s=te`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Ns=te`
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
`,Ya=o.div`
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
`,Os=o.div`
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
    ${Wt};
    background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.14)":"rgba(0, 71, 231, 0.12)"};
  }

  &:hover ${Ce} {
    ${Wt};
  }
`,Ke=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,We=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Ue=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Xe=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,Ze=o.nav`
  display: grid;
  gap: 0.25rem;
`,Je=o.section`
  display: block;
`,Qe=o.span`
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
`,Vr=o.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${_s};
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
`,Bs=o.button`
  ${Ns};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${ln};
  ${ke};
`,Kr=o.div`
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
`,Ds=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Hs=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,qs=o.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,Gs=o.div`
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
`,Ys=o.p`
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
`,Ks=o.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ws=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Us=o.button`
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
`,Xs=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Zs=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Js=o.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Qs=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,ec=o.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,rc=o.article`
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
`,ac=o.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,oc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,ic=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,nc=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,sc=o.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,cc=o.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,Tt="/LaFranciaGO/favicon.png",lc="Av. San Martín 123",Ur=3,Xr=420,dc=260,Zr=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:dr,end:!0},{to:"/categorias",title:"Categorías",subtitle:"Navegá por rubros",icon:Ra},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:Be},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:lr},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:mr}],Jr=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Ee},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:Ha},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:ur},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:it}],pc=o.aside`
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
`,uc=o(Ya)`
  height: 100%;
`,Qr=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Ee,items:[{icon:it,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Be,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Be,items:[{icon:nt,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Ee,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:nt,items:[{icon:lr,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:it,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],mc=[{to:"/",label:"Inicio",icon:dr},{to:"/categorias",label:"Categorías",icon:Ra},{to:"/pedidos",label:"Mis pedidos",icon:Be},{to:"/favoritos",label:"Favoritos",icon:lr},{to:"/mi-cuenta",label:"Cuenta",icon:mr}];function hc({children:e,query:r,onQueryChange:a,showSearch:i=!0}){const{isDarkMode:n,toggleMode:s}=$i(),{photo:c}=Hi(),u=ro(),h=typeof r=="string"&&typeof a=="function",p=m.useRef(null),b=m.useRef(null),g=m.useRef(null),E=m.useRef(null),P=m.useRef(null),[M,I]=m.useState(!1),[f,$]=m.useState({id:"home",label:lc}),[w,L]=m.useState(!1),[S,A]=m.useState(!1),[_,U]=m.useState("opening"),[D,X]=m.useState(!1),[K,G]=m.useState(!1),[W,Z]=m.useState("opening"),[j,T]=m.useState(null),Y=m.useCallback(()=>{L(!1),X(!1),T(null)},[]),se=m.useCallback(()=>{Y(),L(!0)},[Y]),le=m.useCallback(()=>{if(w||S){Y();return}se()},[Y,S,w,se]),be=m.useCallback(()=>{Y(),X(!0)},[Y]),xe=m.useCallback(()=>{if(D||K){Y();return}be()},[Y,K,D,be]);m.useEffect(()=>{const l=document.body.style.overflow;return(w||S||D||K)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=l}},[S,w,K,D]),m.useLayoutEffect(()=>{const l=p.current;if(!l)return;const y=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${l.offsetHeight}px`)};y();const k=typeof ResizeObserver<"u"?new ResizeObserver(y):null;return k==null||k.observe(l),window.addEventListener("resize",y),()=>{k==null||k.disconnect(),window.removeEventListener("resize",y),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),m.useEffect(()=>{b.current!==null&&(window.cancelAnimationFrame(b.current),b.current=null),g.current!==null&&(window.clearTimeout(g.current),g.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(w){if(A(!0),l){U("open");return}U("opening"),b.current=window.requestAnimationFrame(()=>{U("open"),b.current=null});return}if(S){if(l){A(!1),U("opening");return}U("closing"),g.current=window.setTimeout(()=>{A(!1),U("opening"),g.current=null},Xr)}},[S,w]),m.useEffect(()=>()=>{b.current!==null&&window.cancelAnimationFrame(b.current),g.current!==null&&window.clearTimeout(g.current),E.current!==null&&window.cancelAnimationFrame(E.current),P.current!==null&&window.clearTimeout(P.current)},[]),m.useEffect(()=>{E.current!==null&&(window.cancelAnimationFrame(E.current),E.current=null),P.current!==null&&(window.clearTimeout(P.current),P.current=null);const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(D){if(G(!0),l){Z("open");return}Z("opening"),E.current=window.requestAnimationFrame(()=>{Z("open"),E.current=null});return}if(K){if(l){G(!1),Z("opening");return}Z("closing"),P.current=window.setTimeout(()=>{G(!1),Z("opening"),P.current=null},dc)}},[K,D]);const ye=m.useCallback((l,y)=>{l.preventDefault(),Y(),window.setTimeout(()=>{u(y)},Xr)},[Y,u]),v=m.useMemo(()=>Qr.find(l=>l.id===j)??null,[j]);return t.jsxs(os,{children:[t.jsx(is,{ref:p,children:t.jsx($s,{children:t.jsx(ns,{children:t.jsxs(Ps,{children:[t.jsxs(Ms,{children:[t.jsx(ss,{type:"button",onClick:le,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":w||S,children:t.jsx(Pi,{size:20,"aria-hidden":"true"})}),t.jsxs(Is,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Ts,{children:t.jsx(Lt,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsxs(Rs,{children:["LaFrancia",t.jsx(Ls,{children:"GO"})]})]})]}),h?t.jsx(Fs,{children:t.jsx(qa,{value:r,onChange:a})}):null,t.jsxs(Es,{"aria-label":"Acciones rápidas",children:[t.jsxs(vs,{type:"button","aria-label":`Entregar en ${f.label}. Cambiar dirección`,"aria-haspopup":"dialog","aria-expanded":M,onClick:()=>I(!0),children:[t.jsxs(js,{children:[t.jsx(Ss,{children:"Entregar en"}),t.jsx(ks,{children:f.label})]}),t.jsx(zi,{size:15,"aria-hidden":"true"})]}),t.jsxs(Cs,{type:"button",onClick:xe,"aria-label":`Abrir notificaciones, ${Ur} sin leer`,"aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":D||K,children:[t.jsx(it,{size:18,"aria-hidden":"true"}),t.jsx(zs,{children:Ur})]}),t.jsx(Hr,{to:"/carrito","aria-label":"Abrir carrito",children:t.jsx(_i,{size:18,"aria-hidden":"true"})}),t.jsx(Hr,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:c?t.jsx(As,{src:c,alt:""}):t.jsx(mr,{size:18,"aria-hidden":"true"})})]})]})})})}),t.jsx(pc,{"aria-label":"Navegación principal",children:t.jsxs(uc,{children:[t.jsxs(qr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Or,{children:t.jsx(Lt,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsxs(Gr,{children:[t.jsxs(Br,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Dr,{children:"GO"})]}),t.jsx(ls,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),t.jsxs(Je,{children:[t.jsx(Qe,{children:"NAVEGACIÓN"}),t.jsx(Ze,{"aria-label":"Navegación principal",children:Zr.map(l=>{const y=l.icon;return t.jsxs(Ve,{to:l.to,end:l.end,onClick:k=>ye(k,l.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(y,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(Xe,{children:l.title}),t.jsx(We,{children:l.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(Je,{children:[t.jsx(Qe,{children:"ACCIONES"}),t.jsx(Ze,{"aria-label":"Acciones rápidas",children:Jr.map(l=>{const y=l.icon;return t.jsxs(Ve,{to:l.to,onClick:k=>ye(k,l.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(y,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(Xe,{children:l.title}),t.jsx(We,{children:l.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx("div",{style:{flex:1},"aria-hidden":"true"}),t.jsx(Yr,{children:t.jsx(Nr,{isDarkMode:n,onToggle:s})})]})}),t.jsx(ds,{children:e}),t.jsx(bs,{"aria-label":"Navegación móvil",children:t.jsx(xs,{children:mc.map(l=>{const y=l.icon;return t.jsx("li",{children:t.jsxs(ws,{to:l.to,"data-primary":l.to==="/pedidos",children:[t.jsx(Ut,{children:t.jsx(y,{size:l.to==="/pedidos"?32:18,"aria-hidden":"true"})}),t.jsx("span",{children:l.label})]})},l.to)})})}),S&&t.jsx(Kr,{"data-drawer":"true","data-state":_,role:"presentation",onClick:Y,children:t.jsxs(Vr,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":_,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:l=>l.stopPropagation(),children:[t.jsxs(Os,{children:[t.jsxs(qr,{role:"img","aria-label":"LaFranciaGO",children:[t.jsx(Or,{children:t.jsx(Lt,{src:Tt,alt:"","aria-hidden":"true"})}),t.jsx(Gr,{children:t.jsxs(Br,{children:[t.jsx("span",{children:"LaFrancia"}),t.jsx(Dr,{children:"GO"})]})})]}),t.jsx(Bs,{type:"button",onClick:Y,"aria-label":"Cerrar menú",children:t.jsx(Da,{size:18,"aria-hidden":"true"})})]}),t.jsxs(Ya,{children:[t.jsxs(Je,{children:[t.jsx(Qe,{children:"Navegación"}),t.jsx(Ze,{"aria-label":"Navegación principal",children:Zr.map(l=>{const y=l.icon;return t.jsxs(Ve,{to:l.to,end:l.end,onClick:k=>ye(k,l.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(y,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(Xe,{children:l.title}),t.jsx(We,{children:l.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsxs(Je,{children:[t.jsx(Qe,{children:"Acciones"}),t.jsx(Ze,{"aria-label":"Acciones rápidas",children:Jr.map(l=>{const y=l.icon;return t.jsxs(Ve,{to:l.to,onClick:k=>ye(k,l.to),children:[t.jsx(Ce,{"aria-hidden":"true",children:t.jsx(y,{size:18,"aria-hidden":"true"})}),t.jsxs(Ue,{children:[t.jsx(Xe,{children:l.title}),t.jsx(We,{children:l.subtitle})]}),t.jsx(Ke,{"aria-hidden":"true",children:t.jsx(Ye,{size:16,"aria-hidden":"true"})})]},l.to)})})]}),t.jsx(Yr,{children:t.jsx(Nr,{isDarkMode:n,onToggle:s})})]})]})}),K&&t.jsx(Kr,{"data-notifications":"true","data-state":W,role:"presentation",onClick:Y,children:t.jsxs(Vr,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":W,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:l=>l.stopPropagation(),children:[t.jsxs(Gs,{children:[v?t.jsx(Wr,{type:"button",onClick:()=>T(null),"aria-label":"Volver a las notificaciones",children:t.jsx(Ea,{size:14,"aria-hidden":"true"})}):t.jsx(Vs,{"aria-hidden":"true"}),t.jsxs(Ws,{children:[t.jsx(Ks,{id:"marketplace-notifications-title",children:(v==null?void 0:v.title)??"Notificaciones"}),t.jsx(Ys,{children:(v==null?void 0:v.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),t.jsx(Wr,{type:"button",onClick:()=>{Y(),u("/notificaciones")},"aria-label":"Configuración de notificaciones",children:t.jsx(Ti,{size:14,"aria-hidden":"true"})})]}),t.jsx(qs,{}),t.jsx(Hs,{children:v?t.jsx(Ds,{"aria-label":v.title,children:v.items.map(l=>{const y=l.icon;return t.jsxs(rc,{children:[t.jsx(ic,{"aria-hidden":"true",children:t.jsx(y,{size:14,"aria-hidden":"true"})}),t.jsxs(ac,{children:[t.jsxs(cc,{children:[t.jsx(sc,{children:l.title}),t.jsx(oc,{children:l.date})]}),t.jsx(nc,{children:l.subtitle})]})]},`${v.id}-${l.title}`)})}):t.jsx(tc,{"aria-label":"Secciones de notificaciones",children:Qr.map(l=>{const y=l.icon;return t.jsxs(Us,{type:"button",onClick:()=>T(l.id),children:[t.jsx(Zs,{"aria-hidden":"true",children:t.jsx(y,{size:14,"aria-hidden":"true"})}),t.jsxs(Qs,{children:[t.jsx(ec,{children:l.title}),t.jsx(Js,{children:l.subtitle})]}),t.jsx(Xs,{"aria-hidden":"true",children:t.jsx(Le,{size:16,"aria-hidden":"true"})})]},l.id)})})})]})}),t.jsx(On,{open:M,currentId:f.id,onClose:()=>I(!1),onSelect:(l,y)=>$({id:l,label:y})})]})}const fr=o.div`
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
`,Va=te`
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
`;const Ka=o.div`
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
`;const gc=o.span`
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
`,Id=o.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,fc="/LaFranciaGO/",yc=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),br=e=>{const r=e&&yc.has(e)?e:"comercio";return`${fc}media/${r}.svg`},bc=e=>e.split(" ").filter(Boolean).slice(0,2).map(r=>{var a;return((a=r[0])==null?void 0:a.toUpperCase())??""}).join(""),xc=e=>{const r=["blue","green","violet","orange","red","gold","slate"],a=[...e].reduce((i,n)=>i+n.charCodeAt(0),0);return r[a%r.length]},wc=o(fe)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,$c=o.span`
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
`,vc=o.span`
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
`;function kc({id:e,name:r,to:a,count:i,priority:n}){return t.jsx(wc,{to:a,children:t.jsxs(fr,{$ratio:"1 / 1",children:[t.jsx(yr,{src:br(e),alt:r,loading:n?"eager":"lazy"}),typeof i=="number"?t.jsxs(vc,{children:[i," ",i===1?"negocio":"negocios"]}):null,t.jsx($c,{children:r})]})})}const Sc=o.div`
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
`,jc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${ke};
`,Cc=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Ac=o.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,zc=o.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function Ec({icon:e,title:r,text:a,ctaLabel:i,ctaTo:n,dashed:s}){return t.jsxs(Sc,{"data-dashed":s?"true":"false",children:[t.jsx(jc,{children:t.jsx(e,{size:30,"aria-hidden":"true"})}),t.jsx(Cc,{children:r}),a?t.jsx(Ac,{children:a}):null,i&&n?t.jsx(zc,{children:t.jsx(ys,{to:n,children:i})}):null]})}const ea=(e,r="es-AR",a="ARS")=>new Intl.NumberFormat(r,{style:"currency",currency:a,maximumFractionDigits:0}).format(e),Pc=e=>`${e.toFixed(1)} km`,Wa=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),Mc=o(fe)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?te`
          pointer-events: none;
        `:te`
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
`,Rc=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Lc=o.h3`
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
`,Fc=o.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,_c=o.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,Nc=o.button`
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
`,Oc=o.span`
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
`;function Bc({name:e,store:r,price:a,oldPrice:i,categoryId:n,imageLabel:s,tag:c,to:u,onAdd:h,priority:p}){return t.jsxs(Mc,{to:u??"#",$static:!u,children:[t.jsxs(fr,{$ratio:"1 / 1",children:[t.jsx(yr,{src:br(n),alt:s??e,loading:p?"eager":"lazy"}),c?t.jsx(Ka,{children:t.jsx(Oc,{children:c})}):null]}),t.jsxs(Ic,{children:[r?t.jsx(Rc,{children:r}):null,t.jsx(Lc,{children:e}),t.jsxs(Tc,{children:[t.jsxs("div",{children:[t.jsx(Fc,{children:ea(a)}),i?t.jsx(_c,{children:ea(i)}):null]}),h?t.jsx(Nc,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:b=>{b.preventDefault(),b.stopPropagation(),h()},children:t.jsx(Ta,{size:18,"aria-hidden":"true"})}):null]})]})]})}const Dc=o(fe)`
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
`,Hc=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,qc=o.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Gc=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Yc=o.span`
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
`;function Kc({to:e,title:r,text:a,icon:i,tone:n="brand"}){return t.jsxs(Dc,{to:e,"data-tone":n,children:[t.jsx(Hc,{children:t.jsx(i,{size:22,"aria-hidden":"true"})}),t.jsxs(qc,{children:[t.jsx(Gc,{children:r}),a?t.jsx(Yc,{children:a}):null]}),t.jsx(Vc,{children:t.jsx(Le,{size:18,"aria-hidden":"true"})})]})}const Wc=o(fe)`
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
`,Uc=o.span`
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
`,Xc=o.span`
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  line-height: 1.2;
`;function ta({to:e,label:r,icon:a}){return t.jsxs(Wc,{to:e,children:[t.jsx(Uc,{children:t.jsx(a,{size:18})}),t.jsx(Xc,{children:r}),t.jsx(Le,{size:16,"aria-hidden":"true"})]})}const Zc=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Jc=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Qc=o.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,el=o.h2`
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
`,tl=o.span`
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
`,rl=o.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,al=o(fe)`
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
`;function Ft({title:e,chip:r,chipIcon:a,subtitle:i,seeAllTo:n,seeAllLabel:s="Ver todos"}){return t.jsxs(Zc,{children:[t.jsxs(Jc,{children:[t.jsxs(Qc,{children:[t.jsx(el,{children:e}),r?t.jsxs(tl,{children:[a,r]}):null]}),n?t.jsxs(al,{to:n,children:[s,t.jsx(Le,{size:16,"aria-hidden":"true"})]}):null]}),i?t.jsx(rl,{children:i}):null]})}const ol=o(fe)`
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
`,il=o.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,nl=o.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,sl=o.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cl=o.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ll=o.div`
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
`,dl=o.span`
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
`,pl=o.span`
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
`,ul=o.span`
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
`;function ml({id:e,name:r,category:a,categoryId:i,to:n,distanceKm:s,rating:c,openNow:u,premium:h,etaMin:p,etaMax:b,priority:g}){return t.jsxs(ol,{to:n,children:[t.jsxs(fr,{$ratio:"16 / 9",children:[t.jsx(yr,{src:br(i),alt:a,loading:g?"eager":"lazy"}),t.jsxs(Ka,{children:[u!==void 0?t.jsx(dl,{"data-open":u,children:u?"Abierto ahora":"Cerrado"}):t.jsx("span",{}),h?t.jsx(ul,{children:"Destacado"}):null,c!==void 0?t.jsxs(pl,{children:[t.jsx(Ni,{size:13,"aria-hidden":"true",fill:"currentColor"}),c.toFixed(1)]}):null]}),t.jsx(il,{children:t.jsx(gc,{$size:"2.75rem",$tone:xc(e),children:bc(r)})})]}),t.jsxs(nl,{children:[t.jsx(sl,{children:r}),t.jsxs(cl,{children:[a,s!==void 0?` · ${Pc(s)}`:""]}),t.jsxs(ll,{children:[t.jsxs(ra,{children:[t.jsx(ji,{size:14,"aria-hidden":"true"}),"Delivery"]}),p!==void 0&&b!==void 0?t.jsxs(ra,{children:[t.jsx(Ei,{size:14,"aria-hidden":"true"}),p,"-",b," min"]}):null]})]})]})}const hl=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:_a,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:La,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ma,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:sr,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:cr,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ee,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Oa,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:pr,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Na,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Pa,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Ia,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Fa,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Ba,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:ur,tone:"red"}],gl=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",premium:!0,name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",premium:!0,name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],fl=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],Rd=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],Ld=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:_a},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Ee},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Ma},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:cr},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:sr},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:La},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:Oa},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:Ai},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:pr},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Na},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:Pa},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Ia},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:Fa},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:Ba}],yl=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],bl=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Ua=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",categoryId:"almacen",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Ee,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",categoryId:"panaderia",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:cr,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",premium:!0,name:"Farmacia Centro",category:"Salud y perfumería",categoryId:"farmacia",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:pr,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",premium:!0,name:"Carnicería Central",category:"Cortes y frescos",categoryId:"carniceria",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:sr,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Td=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:1,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:2,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,quantity:1,subtotal:2550,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:1,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,quantity:1,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,quantity:1,subtotal:2690,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Fd=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4,items:[{productId:"coca-cola-225",quantity:1},{productId:"yerba-1kg",quantity:1},{productId:"fideos-500",quantity:1},{productId:"galletitas-mixtas",quantity:1}]},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2,items:[{productId:"pan-flauta",quantity:1},{productId:"medialunas-x6",quantity:1}]},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3,items:[{productId:"shampoo-400",quantity:1},{productId:"alcohol-gel",quantity:1},{productId:"crema-manos",quantity:1}]},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5,items:[{productId:"bife-ancho",quantity:2},{productId:"asado-especial",quantity:1},{productId:"milanesas-kg",quantity:1},{productId:"salsas",quantity:1}]},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2,items:[{productId:"detergente-900",quantity:1},{productId:"lavandina-1l",quantity:1}]}],_d=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],Nd=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],Od=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],Bd=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],Dd=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],Hd=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],qd=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Negocios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],Gd=[{id:"alert-1",title:"Negocios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:Oi},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:Ii},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:Ri},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:Fi}],xl=e=>Wa(e),_t=(e,...r)=>{const a=xl(e);return a?Wa(r.filter(i=>i!==void 0).join(" ")).includes(a):!0},wl=e=>yl.find(r=>r.id===e),Yd=e=>Ua.find(r=>r.id===e),Vd=e=>Ua.find(r=>r.name.toLowerCase()===e.toLowerCase()),Kd=e=>{const r=bl.find(i=>i.id===`${e}-compare`);if(r){const i=[...r.offers].sort((n,s)=>n.price-s.price);return{kind:"comparison",comparison:r,bestOffer:i[0],sortedOffers:i}}const a=wl(e);if(a)return{kind:"offer",offer:a}},$l=5,vl=.7,aa=e=>Math.floor(e/vl),oa=e=>e.premium&&e.distanceKm<=$l?0:1,De=(e,r)=>e.openNow===r.openNow?0:e.openNow?-1:1,Xa=(e,r)=>{const a=De(e,r);if(a!==0)return a;const i=aa(e.distanceKm)-aa(r.distanceKm);if(i!==0)return i;const n=oa(e)-oa(r);if(n!==0)return n;const s=e.distanceKm-r.distanceKm;return Math.abs(s)>.05?s:(r.rating??0)-(e.rating??0)},kl=(e,r)=>De(e,r)||e.distanceKm-r.distanceKm,Sl=(e,r)=>De(e,r)||(e.price??e.minOrder??0)-(r.price??r.minOrder??0),jl=(e,r)=>De(e,r)||(r.rating??0)-(e.rating??0),Cl=(e,r)=>De(e,r)||(e.etaMin??Number.MAX_SAFE_INTEGER)-(r.etaMin??Number.MAX_SAFE_INTEGER),Al={relevancia:Xa,cercania:kl,precio:Sl,puntuacion:jl,entrega:Cl};function ia(e,r="relevancia"){return[...e].sort(Al[r]??Xa)}const Wd=[{id:"relevancia",label:"Más relevantes"},{id:"cercania",label:"Más cerca"},{id:"precio",label:"Menor precio"},{id:"entrega",label:"Entrega más rápida"},{id:"puntuacion",label:"Mejor puntuados"}],zl=o.div`
  position: relative;
  min-width: 0;
`,El=o.div`
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
`,et=4,Pl=6,Ml=420,Il=.91,Rl=.2,Ll=.45,Tl=260,Fl=e=>1-(1-e)**3;function Nt({children:e,className:r,as:a,...i}){const n=m.useRef(null),s=m.useRef(null),c=m.useRef(null),[u,h]=m.useState(!1),[p,b]=m.useState(!1),g=m.useCallback(()=>{const f=n.current;if(!f)return;const{scrollLeft:$,scrollWidth:w,clientWidth:L}=f;h($>et),b($+L<w-et)},[]);m.useLayoutEffect(()=>{g()},[g,e]),m.useEffect(()=>{var w;const f=n.current;if(!f)return;const $=((w=window.matchMedia)==null?void 0:w.call(window,"(pointer: fine)").matches)??!1;f.style.cursor=$&&(u||p)?"grab":""},[u,p]),m.useEffect(()=>{var L;const f=n.current;if(!f)return;const $=S=>{const A=f.scrollWidth-f.clientWidth;if(A<=0)return;const _=Math.abs(S.deltaX)>Math.abs(S.deltaY)?S.deltaX:S.deltaY;if(_===0)return;const U=_>0?1:-1,D=f.scrollLeft<=et,X=f.scrollLeft>=A-et;if(U<0&&D||U>0&&X)return;S.preventDefault();const K=c.current??f.scrollLeft,G=Math.max(0,Math.min(K+U*Tl,A));M(f,G)};f.addEventListener("wheel",$,{passive:!1}),f.addEventListener("scroll",g,{passive:!0}),f.addEventListener("scrollend",g,{passive:!0});const w=typeof ResizeObserver<"u"?new ResizeObserver(g):null;return w==null||w.observe(f),Array.from(f.children).forEach(S=>w==null?void 0:w.observe(S)),(L=document.fonts)==null||L.ready.then(g).catch(()=>{}),()=>{f.removeEventListener("wheel",$),f.removeEventListener("scroll",g),f.removeEventListener("scrollend",g),w==null||w.disconnect(),s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),c.current=null}},[g]);const E=(f,$)=>{var A;if(s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),c.current=null,Math.abs($)<Ll||(A=window.matchMedia)!=null&&A.call(window,"(prefers-reduced-motion: reduce)").matches){g();return}let w=-$;const L=f.scrollWidth-f.clientWidth,S=()=>{const _=f.scrollLeft+w;if(_<=0||_>=L){f.scrollLeft=_<=0?0:L,s.current=null,g();return}if(f.scrollLeft=_,w*=Il,g(),Math.abs(w)<Rl){s.current=null;return}s.current=requestAnimationFrame(S)};s.current=requestAnimationFrame(S)},P=f=>{if(f.pointerType!=="mouse"||f.button!==0)return;const $=n.current;if(!$)return;s.current!==null&&(cancelAnimationFrame(s.current),s.current=null),c.current=null;const w=f.clientX,L=$.scrollLeft;let S=!1,A=0,_=f.clientX,U=performance.now();const D=G=>G.preventDefault();$.addEventListener("dragstart",D);const X=G=>{const W=G.clientX-w;if(!S){if(Math.abs(W)<Pl)return;S=!0,$.style.scrollBehavior="auto",$.style.cursor="grabbing",$.style.userSelect="none"}const Z=performance.now(),j=Z-U;if(j>0){const T=(G.clientX-_)/j*16;A=A*.7+T*.3,_=G.clientX,U=Z}$.scrollLeft=L-W},K=()=>{if(document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",K),document.removeEventListener("pointercancel",K),$.removeEventListener("dragstart",D),$.style.scrollBehavior="",$.style.cursor="",$.style.userSelect="",S){E($,A);const G=W=>{W.stopPropagation(),W.preventDefault()};$.addEventListener("click",G,{capture:!0,once:!0}),window.setTimeout(()=>$.removeEventListener("click",G,{capture:!0}),0)}g()};document.addEventListener("pointermove",X),document.addEventListener("pointerup",K),document.addEventListener("pointercancel",K)},M=(f,$)=>{var _;s.current!==null&&(cancelAnimationFrame(s.current),s.current=null);const w=f.scrollLeft,L=$-w;if(Math.abs(L)<1){c.current=null;return}if(c.current=$,(_=window.matchMedia)!=null&&_.call(window,"(prefers-reduced-motion: reduce)").matches){f.scrollLeft=$,c.current=null,g();return}const S=performance.now(),A=U=>{const D=U-S,X=Math.min(D/Ml,1);if(f.scrollLeft=w+L*Fl(X),g(),X<1){s.current=requestAnimationFrame(A);return}s.current=null,c.current=null};s.current=requestAnimationFrame(A)},I=f=>{const $=n.current;if(!$)return;const w=$.scrollWidth-$.clientWidth,L=$.scrollLeft+f*$.clientWidth*.7;M($,Math.max(0,Math.min(L,w)))};return t.jsxs(zl,{className:r,children:[u?t.jsx(na,{type:"button","data-side":"left",onClick:()=>I(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:t.jsx(Ea,{size:16,"aria-hidden":"true"})}):null,a?t.jsx(a,{ref:n,onPointerDown:P,...i,children:e}):t.jsx(El,{ref:n,onPointerDown:P,...i,children:e}),p?t.jsx(na,{type:"button","data-side":"right",onClick:()=>I(1),"aria-label":"Ver más filtros",tabIndex:-1,children:t.jsx(Le,{size:16,"aria-hidden":"true"})}):null]})}const Za="lafranciago:orden",_l=["relevancia","cercania","precio","puntuacion","entrega"],Nl=()=>{try{const e=window.localStorage.getItem(Za);return _l.includes(e)?e:"relevancia"}catch{return"relevancia"}};function Ol(){const[e,r]=m.useState("relevancia");m.useEffect(()=>{r(Nl())},[]);const a=m.useCallback(i=>{r(i);try{window.localStorage.setItem(Za,i)}catch{}},[]);return{sortMode:e,setSortMode:a}}const Bl=o(fe)`
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
`,Dl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,Hl=o.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 1 auto;
  }
`,ql=o.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Gl=o.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Yl=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Ja=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Vl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Kl=o.div`
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
`;const Ud=o.div`
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
`;const Xd=o.div`
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
`;const Zd=o(je)`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;o(ps)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const Jd=o(Ja)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Vl)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(Kl)`
  gap: ${({theme:e})=>e.spacing[1]};
`;o(ms)`
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
`,Wl=o(xr)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,Ul=o(xr)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,Xl=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Zl=o.section`
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
`;const Qd=o.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Jl=o.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`,Ql=8;function ed(){const[e,r]=m.useState(""),{sortMode:a}=Ol(),i=e.trim(),n=i.length>0,s=m.useMemo(()=>{const p=hl.filter(b=>_t(i,b.name));return n?p:p.slice(0,Ql)},[n,i]),c=m.useMemo(()=>ia(gl.filter(p=>_t(i,p.name,p.category,p.address)),a),[i,a]),u=m.useMemo(()=>ia(fl.filter(p=>_t(i,p.product,p.store)),a),[i,a]),h=s.length>0||c.length>0||u.length>0;return t.jsxs(hc,{query:e,onQueryChange:r,children:[t.jsx(Zl,{children:t.jsx(Se,{children:t.jsx(qa,{value:e,onChange:r})})}),t.jsx(je,{children:t.jsx(Se,{children:t.jsxs(Bl,{to:"/mandado",children:[t.jsx(Dl,{children:t.jsx(Be,{size:22,"aria-hidden":"true"})}),t.jsxs(Hl,{children:[t.jsx(ql,{children:"¿Necesitás algún mandado?"}),t.jsx(Gl,{children:"Pedí lo que sea y un repartidor lo busca."})]}),t.jsx(Yl,{children:t.jsx(Le,{size:18,"aria-hidden":"true"})})]})})}),n&&!h?t.jsx(je,{children:t.jsx(Se,{children:t.jsx(Ec,{icon:Li,title:"Sin resultados",text:`No encontramos nada para "${i}". Probá con otra palabra.`,dashed:!0})})}):null,s.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Ft,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/categorias"}),t.jsx(Nt,{as:Ul,"aria-label":"Categorías",children:s.map((p,b)=>t.jsx(kc,{id:p.id,name:p.name,to:`/comercios?rubro=${p.id}`,priority:b<5},p.id))})]})}):null,u.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Ft,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),t.jsx(Nt,{as:xr,"aria-label":"Productos destacados",children:u.map((p,b)=>t.jsx(Bc,{name:p.product,store:p.store,price:p.price,oldPrice:p.oldPrice,categoryId:p.categoryId,imageLabel:p.imageLabel,tag:p.discount>0?`-${p.discount}%`:void 0,to:p.href,priority:b<3},p.id))})]})}):null,c.length>0?t.jsx(je,{children:t.jsxs(Se,{children:[t.jsx(Ft,{title:"Negocios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),t.jsx(Nt,{as:Wl,"aria-label":"Negocios destacados",children:c.map((p,b)=>t.jsx(ml,{id:p.id,name:p.name,category:p.category,categoryId:p.categoryId,to:p.href,distanceKm:p.distanceKm,rating:p.rating,openNow:p.openNow,premium:p.premium,etaMin:p.etaMin,etaMax:p.etaMax,priority:b<2},p.id))})]})}):null,n?null:t.jsx(je,{children:t.jsx(Se,{children:t.jsx(Ja,{children:t.jsxs(Xl,{children:[t.jsx(Kc,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:Ee,tone:"brand"}),t.jsxs(Jl,{children:[t.jsx(ta,{to:"/trabaja-con-nosotros",label:"Sumate como Repartidor (Delivery)",icon:Ha}),t.jsx(ta,{to:"/registro/fletero",label:"Sumate como Fletero",icon:ur})]})]})})})})]})}const td=m.lazy(()=>re(()=>import("./CategoriesScreen-CSwo8jsd.js"),__vite__mapDeps([3,1])).then(e=>({default:e.CategoriesScreen}))),rd=m.lazy(()=>re(()=>import("./StoresDirectoryScreen-CiuNBi7g.js"),__vite__mapDeps([4,1])).then(e=>({default:e.StoresDirectoryScreen}))),ad=m.lazy(()=>re(()=>import("./StoreProfileScreen-DSa07Sd9.js"),__vite__mapDeps([5,1,6,7])).then(e=>({default:e.StoreProfileScreen}))),od=m.lazy(()=>re(()=>import("./ProductDetailScreen-B7LdLFsB.js"),__vite__mapDeps([8,1,9])).then(e=>({default:e.ProductDetailScreen}))),id=m.lazy(()=>re(()=>import("./MyOrdersScreen-CFxtN3ue.js"),__vite__mapDeps([10,1,7])).then(e=>({default:e.MyOrdersScreen}))),nd=m.lazy(()=>re(()=>import("./CartScreen-GSCUP4rw.js"),__vite__mapDeps([11,1,6,12,7])).then(e=>({default:e.CartScreen}))),sd=m.lazy(()=>re(()=>import("./ErrandScreen-CJn__KwC.js"),__vite__mapDeps([13,1,14,12])).then(e=>({default:e.ErrandScreen}))),cd=m.lazy(()=>re(()=>import("./ErrandChatScreen-DBPaELlk.js"),__vite__mapDeps([15,1,16,14,17])).then(e=>({default:e.ErrandChatScreen}))),ld=m.lazy(()=>re(()=>import("./FavoritesScreen-BVBkttKL.js"),__vite__mapDeps([18,1])).then(e=>({default:e.FavoritesScreen}))),dd=m.lazy(()=>re(()=>import("./NotificationsScreen-CZeOvzdN.js"),__vite__mapDeps([19,1,20])).then(e=>({default:e.NotificationsScreen}))),pd=m.lazy(()=>re(()=>import("./CustomerAccountScreen-Y0yp27Gy.js"),__vite__mapDeps([21,1,9,16,17,22,12])).then(e=>({default:e.CustomerAccountScreen}))),ud=m.lazy(()=>re(()=>import("./CommerceRegistrationScreen-BH3FbDVD.js"),__vite__mapDeps([23,24,1,16,22,12])).then(e=>({default:e.CommerceRegistrationScreen}))),sa=m.lazy(()=>re(()=>import("./DeliveryRegistrationScreen-C055dElS.js"),__vite__mapDeps([25,24,1,16,12,22])).then(e=>({default:e.DeliveryRegistrationScreen}))),md=m.lazy(()=>re(()=>import("./CommercePanelScreen-B8yI29xw.js"),__vite__mapDeps([26,27,9,1,20])).then(e=>({default:e.CommercePanelScreen}))),hd=m.lazy(()=>re(()=>import("./ProductFormScreen-lxKeWiyx.js"),__vite__mapDeps([28,1,16])).then(e=>({default:e.ProductFormScreen}))),gd=m.lazy(()=>re(()=>import("./DeliveryPanelScreen-D0e-Jb-x.js"),__vite__mapDeps([29,27,9,1])).then(e=>({default:e.DeliveryPanelScreen}))),fd=m.lazy(()=>re(()=>import("./AdminPanelScreen-CU4dRXie.js"),__vite__mapDeps([30,27,9,1])).then(e=>({default:e.AdminPanelScreen})));function yd(){return t.jsx(ao,{children:t.jsx(wi,{children:t.jsx(m.Suspense,{fallback:null,children:t.jsxs(oo,{children:[t.jsx(ee,{path:"/",element:t.jsx(ed,{})}),t.jsx(ee,{path:"/categorias",element:t.jsx(td,{})}),t.jsx(ee,{path:"/comercios",element:t.jsx(rd,{})}),t.jsx(ee,{path:"/comercios/:storeId",element:t.jsx(ad,{})}),t.jsx(ee,{path:"/productos/:productId",element:t.jsx(od,{})}),t.jsx(ee,{path:"/pedidos",element:t.jsx(id,{})}),t.jsx(ee,{path:"/carrito",element:t.jsx(nd,{})}),t.jsx(ee,{path:"/mandado",element:t.jsx(sd,{})}),t.jsx(ee,{path:"/mandado/chat",element:t.jsx(cd,{})}),t.jsx(ee,{path:"/favoritos",element:t.jsx(ld,{})}),t.jsx(ee,{path:"/notificaciones",element:t.jsx(dd,{})}),t.jsx(ee,{path:"/registro/comercio",element:t.jsx(ud,{})}),t.jsx(ee,{path:"/trabaja-con-nosotros",element:t.jsx(sa,{})}),t.jsx(ee,{path:"/registro/fletero",element:t.jsx(sa,{role:"fletero"})}),t.jsx(ee,{path:"/registro/delivery",element:t.jsx(wr,{to:"/trabaja-con-nosotros",replace:!0})}),t.jsx(ee,{path:"/mi-cuenta",element:t.jsx(pd,{})}),t.jsx(ee,{path:"/panel/comercio",element:t.jsx(md,{})}),t.jsx(ee,{path:"/panel/comercio/producto",element:t.jsx(hd,{})}),t.jsx(ee,{path:"/panel/repartidor",element:t.jsx(gd,{})}),t.jsx(ee,{path:"/panel/admin",element:t.jsx(fd,{})}),t.jsx(ee,{path:"*",element:t.jsx(wr,{to:"/",replace:!0})})]})})})})}ho({immediate:!0});const Qa=document.getElementById("root");if(!Qa)throw new Error("No se encontró el nodo root");Ot.createRoot(Qa).render(t.jsx(Pe.StrictMode,{children:t.jsx(yd,{})}));export{wl as $,gc as A,Pc as B,Zd as C,nt as D,Ec as E,Sd as F,te as G,Yd as H,Fd as I,je as J,Be as K,xd as L,hc as M,wd as N,$d as O,Ud as P,vd as Q,Gt as R,Zl as S,kd as T,Ja as U,xr as V,_i as W,Da as X,us as Y,Ed as Z,Kd as _,Se as a,yl as a0,bl as a1,Vd as a2,Ee as a3,ys as a4,fs as a5,Le as a6,Qd as a7,C as a8,ln as a9,Nd as aA,Od as aB,Bd as aC,Oi as aD,Ti as aE,Dd as aF,Hd as aG,Ri as aH,qd as aI,Gd as aJ,zt as aa,ms as ab,ke as ac,Td as ad,Cd as ae,ur as af,jd as ag,zd as ah,Pd as ai,Ui as aj,ji as ak,lr as al,_d as am,it as an,Hi as ao,Id as ap,mr as aq,Ha as ar,Jd as as,Ad as at,Ra as au,Kl as av,hs as aw,Md as ax,Vl as ay,Xd as az,qa as b,Ld as c,Ft as d,kc as e,Li as f,Nt as g,Rd as h,Wd as i,t as j,ml as k,fr as l,_t as m,yr as n,br as o,Ka as p,o as q,ia as r,Ua as s,ea as t,Ol as u,Ta as v,Ci as w,Ni as x,bc as y,xc as z};
