function Kx(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const c=Object.getOwnPropertyDescriptor(o,a);c&&Object.defineProperty(e,a,c.get?c:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var Qx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ru(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bg={exports:{}},xl={},Dg={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),Xx=Symbol.for("react.portal"),Jx=Symbol.for("react.fragment"),eb=Symbol.for("react.strict_mode"),tb=Symbol.for("react.profiler"),rb=Symbol.for("react.provider"),nb=Symbol.for("react.context"),ib=Symbol.for("react.forward_ref"),ob=Symbol.for("react.suspense"),ab=Symbol.for("react.memo"),sb=Symbol.for("react.lazy"),hf=Symbol.iterator;function lb(e){return e===null||typeof e!="object"?null:(e=hf&&e[hf]||e["@@iterator"],typeof e=="function"?e:null)}var Hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,Ug={};function Ji(e,t,n){this.props=e,this.context=t,this.refs=Ug,this.updater=n||Hg}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vg(){}Vg.prototype=Ji.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=Ug,this.updater=n||Hg}var Nu=Ou.prototype=new Vg;Nu.constructor=Ou;Zg(Nu,Ji.prototype);Nu.isPureReactComponent=!0;var ff=Array.isArray,Wg=Object.prototype.hasOwnProperty,Fu={current:null},Gg={key:!0,ref:!0,__self:!0,__source:!0};function qg(e,t,n){var o,a={},c=null,d=null;if(t!=null)for(o in t.ref!==void 0&&(d=t.ref),t.key!==void 0&&(c=""+t.key),t)Wg.call(t,o)&&!Gg.hasOwnProperty(o)&&(a[o]=t[o]);var m=arguments.length-2;if(m===1)a.children=n;else if(1<m){for(var h=Array(m),y=0;y<m;y++)h[y]=arguments[y+2];a.children=h}if(e&&e.defaultProps)for(o in m=e.defaultProps,m)a[o]===void 0&&(a[o]=m[o]);return{$$typeof:da,type:e,key:c,ref:d,props:a,_owner:Fu.current}}function cb(e,t){return{$$typeof:da,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===da}function db(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mf=/\/+/g;function Bc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?db(""+e.key):t.toString(36)}function $s(e,t,n,o,a){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case da:case Xx:d=!0}}if(d)return d=e,a=a(d),e=o===""?"."+Bc(d,0):o,ff(a)?(n="",e!=null&&(n=e.replace(mf,"$&/")+"/"),$s(a,t,n,"",function(y){return y})):a!=null&&(Bu(a)&&(a=cb(a,n+(!a.key||d&&d.key===a.key?"":(""+a.key).replace(mf,"$&/")+"/")+e)),t.push(a)),1;if(d=0,o=o===""?".":o+":",ff(e))for(var m=0;m<e.length;m++){c=e[m];var h=o+Bc(c,m);d+=$s(c,t,n,h,a)}else if(h=lb(e),typeof h=="function")for(e=h.call(e),m=0;!(c=e.next()).done;)c=c.value,h=o+Bc(c,m++),d+=$s(c,t,n,h,a);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function Fa(e,t,n){if(e==null)return e;var o=[],a=0;return $s(e,o,"","",function(c){return t.call(n,c,a++)}),o}function ub(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},ks={transition:null},pb={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Fu};function Yg(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Fa,forEach:function(e,t,n){Fa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fa(e,function(){t++}),t},toArray:function(e){return Fa(e,function(t){return t})||[]},only:function(e){if(!Bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=Ji;me.Fragment=Jx;me.Profiler=tb;me.PureComponent=Ou;me.StrictMode=eb;me.Suspense=ob;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pb;me.act=Yg;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Zg({},e.props),a=e.key,c=e.ref,d=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,d=Fu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var m=e.type.defaultProps;for(h in t)Wg.call(t,h)&&!Gg.hasOwnProperty(h)&&(o[h]=t[h]===void 0&&m!==void 0?m[h]:t[h])}var h=arguments.length-2;if(h===1)o.children=n;else if(1<h){m=Array(h);for(var y=0;y<h;y++)m[y]=arguments[y+2];o.children=m}return{$$typeof:da,type:e.type,key:a,ref:c,props:o,_owner:d}};me.createContext=function(e){return e={$$typeof:nb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rb,_context:e},e.Consumer=e};me.createElement=qg;me.createFactory=function(e){var t=qg.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:ib,render:e}};me.isValidElement=Bu;me.lazy=function(e){return{$$typeof:sb,_payload:{_status:-1,_result:e},_init:ub}};me.memo=function(e,t){return{$$typeof:ab,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};me.unstable_act=Yg;me.useCallback=function(e,t){return Pt.current.useCallback(e,t)};me.useContext=function(e){return Pt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};me.useEffect=function(e,t){return Pt.current.useEffect(e,t)};me.useId=function(){return Pt.current.useId()};me.useImperativeHandle=function(e,t,n){return Pt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return Pt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Pt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return Pt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return Pt.current.useReducer(e,t,n)};me.useRef=function(e){return Pt.current.useRef(e)};me.useState=function(e){return Pt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return Pt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return Pt.current.useTransition()};me.version="18.3.1";Dg.exports=me;var k=Dg.exports;const Sn=Ru(k),hb=Kx({__proto__:null,default:Sn},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fb=k,mb=Symbol.for("react.element"),gb=Symbol.for("react.fragment"),yb=Object.prototype.hasOwnProperty,vb=fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xb={key:!0,ref:!0,__self:!0,__source:!0};function Kg(e,t,n){var o,a={},c=null,d=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(d=t.ref);for(o in t)yb.call(t,o)&&!xb.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:mb,type:e,key:c,ref:d,props:a,_owner:vb.current}}xl.Fragment=gb;xl.jsx=Kg;xl.jsxs=Kg;Bg.exports=xl;var s=Bg.exports,jd={},Qg={exports:{}},Ut={},Xg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,J){var U=O.length;O.push(J);e:for(;0<U;){var ee=U-1>>>1,D=O[ee];if(0<a(D,J))O[ee]=J,O[U]=D,U=ee;else break e}}function n(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var J=O[0],U=O.pop();if(U!==J){O[0]=U;e:for(var ee=0,D=O.length,I=D>>>1;ee<I;){var F=2*(ee+1)-1,G=O[F],P=F+1,de=O[P];if(0>a(G,U))P<D&&0>a(de,G)?(O[ee]=de,O[P]=U,ee=P):(O[ee]=G,O[F]=U,ee=F);else if(P<D&&0>a(de,U))O[ee]=de,O[P]=U,ee=P;else break e}}return J}function a(O,J){var U=O.sortIndex-J.sortIndex;return U!==0?U:O.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();e.unstable_now=function(){return d.now()-m}}var h=[],y=[],x=1,v=null,w=3,C=!1,T=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(O){for(var J=n(y);J!==null;){if(J.callback===null)o(y);else if(J.startTime<=O)o(y),J.sortIndex=J.expirationTime,t(h,J);else break;J=n(y)}}function A(O){if(j=!1,$(O),!T)if(n(h)!==null)T=!0,re(E);else{var J=n(y);J!==null&&ye(A,J.startTime-O)}}function E(O,J){T=!1,j&&(j=!1,_(W),W=-1),C=!0;var U=w;try{for($(J),v=n(h);v!==null&&(!(v.expirationTime>J)||O&&!oe());){var ee=v.callback;if(typeof ee=="function"){v.callback=null,w=v.priorityLevel;var D=ee(v.expirationTime<=J);J=e.unstable_now(),typeof D=="function"?v.callback=D:v===n(h)&&o(h),$(J)}else o(h);v=n(h)}if(v!==null)var I=!0;else{var F=n(y);F!==null&&ye(A,F.startTime-J),I=!1}return I}finally{v=null,w=U,C=!1}}var N=!1,Z=null,W=-1,ae=5,Y=-1;function oe(){return!(e.unstable_now()-Y<ae)}function pe(){if(Z!==null){var O=e.unstable_now();Y=O;var J=!0;try{J=Z(!0,O)}finally{J?ke():(N=!1,Z=null)}}else N=!1}var ke;if(typeof b=="function")ke=function(){b(pe)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ne=H.port2;H.port1.onmessage=pe,ke=function(){ne.postMessage(null)}}else ke=function(){z(pe,0)};function re(O){Z=O,N||(N=!0,ke())}function ye(O,J){W=z(function(){O(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){T||C||(T=!0,re(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(O){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var U=w;w=J;try{return O()}finally{w=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=w;w=O;try{return J()}finally{w=U}},e.unstable_scheduleCallback=function(O,J,U){var ee=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=U+D,O={id:x++,callback:J,priorityLevel:O,startTime:U,expirationTime:D,sortIndex:-1},U>ee?(O.sortIndex=U,t(y,O),n(h)===null&&O===n(y)&&(j?(_(W),W=-1):j=!0,ye(A,U-ee))):(O.sortIndex=D,t(h,O),T||C||(T=!0,re(E))),O},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(O){var J=w;return function(){var U=w;w=J;try{return O.apply(this,arguments)}finally{w=U}}}})(Jg);Xg.exports=Jg;var bb=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wb=k,Zt=bb;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ey=new Set,Zo={};function ti(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for(Zo[e]=t,e=0;e<t.length;e++)ey.add(t[e])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=Object.prototype.hasOwnProperty,_b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gf={},yf={};function $b(e){return Cd.call(yf,e)?!0:Cd.call(gf,e)?!1:_b.test(e)?yf[e]=!0:(gf[e]=!0,!1)}function kb(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sb(e,t,n,o){if(t===null||typeof t>"u"||kb(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function zt(e,t,n,o,a,c,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=d}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vt[e]=new zt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vt[t]=new zt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vt[e]=new zt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vt[e]=new zt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vt[e]=new zt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vt[e]=new zt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vt[e]=new zt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vt[e]=new zt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vt[e]=new zt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Hu);vt[t]=new zt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Hu);vt[t]=new zt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Hu);vt[t]=new zt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vt[e]=new zt(e,1,!1,e.toLowerCase(),null,!1,!1)});vt.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vt[e]=new zt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zu(e,t,n,o){var a=vt.hasOwnProperty(t)?vt[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sb(t,n,a,o)&&(n=null),o||a===null?$b(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Yr=wb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),bi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ry=Symbol.for("react.context"),Vu=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),Wu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),vf=Symbol.iterator;function vo(e){return e===null||typeof e!="object"?null:(e=vf&&e[vf]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,Dc;function jo(e){if(Dc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dc=t&&t[1]||""}return`
`+Dc+e}var Hc=!1;function Zc(e,t){if(!e||Hc)return"";Hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var o=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){o=y}e.call(t.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var a=y.stack.split(`
`),c=o.stack.split(`
`),d=a.length-1,m=c.length-1;1<=d&&0<=m&&a[d]!==c[m];)m--;for(;1<=d&&0<=m;d--,m--)if(a[d]!==c[m]){if(d!==1||m!==1)do if(d--,m--,0>m||a[d]!==c[m]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=m);break}}}finally{Hc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jo(e):""}function jb(e){switch(e.tag){case 5:return jo(e.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return e=Zc(e.type,!1),e;case 11:return e=Zc(e.type.render,!1),e;case 1:return e=Zc(e.type,!0),e;default:return""}}function Ed(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wi:return"Fragment";case bi:return"Portal";case Pd:return"Profiler";case Uu:return"StrictMode";case zd:return"Suspense";case Ld:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ry:return(e.displayName||"Context")+".Consumer";case ty:return(e._context.displayName||"Context")+".Provider";case Vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wu:return t=e.displayName||null,t!==null?t:Ed(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Ed(e(t))}catch{}}return null}function Cb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(t);case 8:return t===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pb(e){var t=iy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Da(e){e._valueTracker||(e._valueTracker=Pb(e))}function oy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=iy(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Td(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xf(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ay(e,t){t=t.checked,t!=null&&Zu(e,"checked",t,!1)}function Md(e,t){ay(e,t);var n=_n(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ad(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ad(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ad(e,t,n){(t!=="number"||Hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Co=Array.isArray;function Ai(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Id(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Co(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function sy(e,t){var n=_n(t.value),o=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function _f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ly(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ly(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,cy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zb=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(e){zb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lo[t]=Lo[e]})});function dy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lo.hasOwnProperty(e)&&Lo[e]?(""+t).trim():t+"px"}function uy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=dy(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Lb=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(e,t){if(t){if(Lb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Nd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bd=null,Ii=null,Ri=null;function $f(e){if(e=ha(e)){if(typeof Bd!="function")throw Error(V(280));var t=e.stateNode;t&&(t=kl(t),Bd(e.stateNode,e.type,t))}}function py(e){Ii?Ri?Ri.push(e):Ri=[e]:Ii=e}function hy(){if(Ii){var e=Ii,t=Ri;if(Ri=Ii=null,$f(e),t)for(e=0;e<t.length;e++)$f(t[e])}}function fy(e,t){return e(t)}function my(){}var Uc=!1;function gy(e,t,n){if(Uc)return e(t,n);Uc=!0;try{return fy(e,t,n)}finally{Uc=!1,(Ii!==null||Ri!==null)&&(my(),hy())}}function Vo(e,t){var n=e.stateNode;if(n===null)return null;var o=kl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Dd=!1;if(Vr)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Dd=!1}function Eb(e,t,n,o,a,c,d,m,h){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(x){this.onError(x)}}var Eo=!1,Zs=null,Us=!1,Hd=null,Tb={onError:function(e){Eo=!0,Zs=e}};function Mb(e,t,n,o,a,c,d,m,h){Eo=!1,Zs=null,Eb.apply(Tb,arguments)}function Ab(e,t,n,o,a,c,d,m,h){if(Mb.apply(this,arguments),Eo){if(Eo){var y=Zs;Eo=!1,Zs=null}else throw Error(V(198));Us||(Us=!0,Hd=y)}}function ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kf(e){if(ri(e)!==e)throw Error(V(188))}function Ib(e){var t=e.alternate;if(!t){if(t=ri(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var c=a.alternate;if(c===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===n)return kf(a),e;if(c===o)return kf(a),t;c=c.sibling}throw Error(V(188))}if(n.return!==o.return)n=a,o=c;else{for(var d=!1,m=a.child;m;){if(m===n){d=!0,n=a,o=c;break}if(m===o){d=!0,o=a,n=c;break}m=m.sibling}if(!d){for(m=c.child;m;){if(m===n){d=!0,n=c,o=a;break}if(m===o){d=!0,o=c,n=a;break}m=m.sibling}if(!d)throw Error(V(189))}}if(n.alternate!==o)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function vy(e){return e=Ib(e),e!==null?xy(e):null}function xy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xy(e);if(t!==null)return t;e=e.sibling}return null}var by=Zt.unstable_scheduleCallback,Sf=Zt.unstable_cancelCallback,Rb=Zt.unstable_shouldYield,Ob=Zt.unstable_requestPaint,Xe=Zt.unstable_now,Nb=Zt.unstable_getCurrentPriorityLevel,qu=Zt.unstable_ImmediatePriority,wy=Zt.unstable_UserBlockingPriority,Vs=Zt.unstable_NormalPriority,Fb=Zt.unstable_LowPriority,_y=Zt.unstable_IdlePriority,bl=null,zr=null;function Bb(e){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var yr=Math.clz32?Math.clz32:Zb,Db=Math.log,Hb=Math.LN2;function Zb(e){return e>>>=0,e===0?32:31-(Db(e)/Hb|0)|0}var Za=64,Ua=4194304;function Po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,c=e.pingedLanes,d=n&268435455;if(d!==0){var m=d&~a;m!==0?o=Po(m):(c&=d,c!==0&&(o=Po(c)))}else d=n&~a,d!==0?o=Po(d):c!==0&&(o=Po(c));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-yr(t),a=1<<n,o|=e[n],t&=~a;return o}function Ub(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vb(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-yr(c),m=1<<d,h=a[d];h===-1?(!(m&n)||m&o)&&(a[d]=Ub(m,t)):h<=t&&(e.expiredLanes|=m),c&=~m}}function Zd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $y(){var e=Za;return Za<<=1,!(Za&4194240)&&(Za=64),e}function Vc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ua(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yr(t),e[t]=n}function Wb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-yr(n),c=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~c}}function Yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-yr(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Se=0;function ky(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sy,Ku,jy,Cy,Py,Ud=!1,Va=[],pn=null,hn=null,fn=null,Wo=new Map,Go=new Map,sn=[],Gb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function bo(e,t,n,o,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:c,targetContainers:[a]},t!==null&&(t=ha(t),t!==null&&Ku(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function qb(e,t,n,o,a){switch(t){case"focusin":return pn=bo(pn,e,t,n,o,a),!0;case"dragenter":return hn=bo(hn,e,t,n,o,a),!0;case"mouseover":return fn=bo(fn,e,t,n,o,a),!0;case"pointerover":var c=a.pointerId;return Wo.set(c,bo(Wo.get(c)||null,e,t,n,o,a)),!0;case"gotpointercapture":return c=a.pointerId,Go.set(c,bo(Go.get(c)||null,e,t,n,o,a)),!0}return!1}function zy(e){var t=Dn(e.target);if(t!==null){var n=ri(t);if(n!==null){if(t=n.tag,t===13){if(t=yy(n),t!==null){e.blockedOn=t,Py(e.priority,function(){jy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Fd=o,n.target.dispatchEvent(o),Fd=null}else return t=ha(n),t!==null&&Ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){Ss(e)&&n.delete(t)}function Yb(){Ud=!1,pn!==null&&Ss(pn)&&(pn=null),hn!==null&&Ss(hn)&&(hn=null),fn!==null&&Ss(fn)&&(fn=null),Wo.forEach(Cf),Go.forEach(Cf)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ud||(Ud=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,Yb)))}function qo(e){function t(a){return wo(a,e)}if(0<Va.length){wo(Va[0],e);for(var n=1;n<Va.length;n++){var o=Va[n];o.blockedOn===e&&(o.blockedOn=null)}}for(pn!==null&&wo(pn,e),hn!==null&&wo(hn,e),fn!==null&&wo(fn,e),Wo.forEach(t),Go.forEach(t),n=0;n<sn.length;n++)o=sn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)zy(n),n.blockedOn===null&&sn.shift()}var Oi=Yr.ReactCurrentBatchConfig,Gs=!0;function Kb(e,t,n,o){var a=Se,c=Oi.transition;Oi.transition=null;try{Se=1,Qu(e,t,n,o)}finally{Se=a,Oi.transition=c}}function Qb(e,t,n,o){var a=Se,c=Oi.transition;Oi.transition=null;try{Se=4,Qu(e,t,n,o)}finally{Se=a,Oi.transition=c}}function Qu(e,t,n,o){if(Gs){var a=Vd(e,t,n,o);if(a===null)td(e,t,o,qs,n),jf(e,o);else if(qb(a,e,t,n,o))o.stopPropagation();else if(jf(e,o),t&4&&-1<Gb.indexOf(e)){for(;a!==null;){var c=ha(a);if(c!==null&&Sy(c),c=Vd(e,t,n,o),c===null&&td(e,t,o,qs,n),c===a)break;a=c}a!==null&&o.stopPropagation()}else td(e,t,o,null,n)}}var qs=null;function Vd(e,t,n,o){if(qs=null,e=Gu(o),e=Dn(e),e!==null)if(t=ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qs=e,null}function Ly(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nb()){case qu:return 1;case wy:return 4;case Vs:case Fb:return 16;case _y:return 536870912;default:return 16}default:return 16}}var cn=null,Xu=null,js=null;function Ey(){if(js)return js;var e,t=Xu,n=t.length,o,a="value"in cn?cn.value:cn.textContent,c=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===a[c-o];o++);return js=a.slice(e,1<o?1-o:void 0)}function Cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wa(){return!0}function Pf(){return!1}function Vt(e){function t(n,o,a,c,d){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(c):c[m]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Wa:Pf,this.isPropagationStopped=Pf,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Vt(eo),pa=Ue({},eo,{view:0,detail:0}),Xb=Vt(pa),Wc,Gc,_o,wl=Ue({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Wc=e.screenX-_o.screenX,Gc=e.screenY-_o.screenY):Gc=Wc=0,_o=e),Wc)},movementY:function(e){return"movementY"in e?e.movementY:Gc}}),zf=Vt(wl),Jb=Ue({},wl,{dataTransfer:0}),ew=Vt(Jb),tw=Ue({},pa,{relatedTarget:0}),qc=Vt(tw),rw=Ue({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),nw=Vt(rw),iw=Ue({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ow=Vt(iw),aw=Ue({},eo,{data:0}),Lf=Vt(aw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cw[e])?!!t[e]:!1}function ep(){return dw}var uw=Ue({},pa,{key:function(e){if(e.key){var t=sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pw=Vt(uw),hw=Ue({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=Vt(hw),fw=Ue({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),mw=Vt(fw),gw=Ue({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yw=Vt(gw),vw=Ue({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=Vt(vw),bw=[9,13,27,32],tp=Vr&&"CompositionEvent"in window,To=null;Vr&&"documentMode"in document&&(To=document.documentMode);var ww=Vr&&"TextEvent"in window&&!To,Ty=Vr&&(!tp||To&&8<To&&11>=To),Tf=" ",Mf=!1;function My(e,t){switch(e){case"keyup":return bw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ay(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _i=!1;function _w(e,t){switch(e){case"compositionend":return Ay(t);case"keypress":return t.which!==32?null:(Mf=!0,Tf);case"textInput":return e=t.data,e===Tf&&Mf?null:e;default:return null}}function $w(e,t){if(_i)return e==="compositionend"||!tp&&My(e,t)?(e=Ey(),js=Xu=cn=null,_i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ty&&t.locale!=="ko"?null:t.data;default:return null}}var kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kw[e.type]:t==="textarea"}function Iy(e,t,n,o){py(o),t=Ys(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Mo=null,Yo=null;function Sw(e){Wy(e,0)}function _l(e){var t=Si(e);if(oy(t))return e}function jw(e,t){if(e==="change")return t}var Ry=!1;if(Vr){var Yc;if(Vr){var Kc="oninput"in document;if(!Kc){var If=document.createElement("div");If.setAttribute("oninput","return;"),Kc=typeof If.oninput=="function"}Yc=Kc}else Yc=!1;Ry=Yc&&(!document.documentMode||9<document.documentMode)}function Rf(){Mo&&(Mo.detachEvent("onpropertychange",Oy),Yo=Mo=null)}function Oy(e){if(e.propertyName==="value"&&_l(Yo)){var t=[];Iy(t,Yo,e,Gu(e)),gy(Sw,t)}}function Cw(e,t,n){e==="focusin"?(Rf(),Mo=t,Yo=n,Mo.attachEvent("onpropertychange",Oy)):e==="focusout"&&Rf()}function Pw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(Yo)}function zw(e,t){if(e==="click")return _l(t)}function Lw(e,t){if(e==="input"||e==="change")return _l(t)}function Ew(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xr=typeof Object.is=="function"?Object.is:Ew;function Ko(e,t){if(xr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Cd.call(t,a)||!xr(e[a],t[a]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var n=Of(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Of(n)}}function Ny(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ny(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fy(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hs(e.document)}return t}function rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tw(e){var t=Fy(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ny(n.ownerDocument.documentElement,n)){if(o!==null&&rp(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,c=Math.min(o.start,a);o=o.end===void 0?c:Math.min(o.end,a),!e.extend&&c>o&&(a=o,o=c,c=a),a=Nf(n,c);var d=Nf(n,o);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mw=Vr&&"documentMode"in document&&11>=document.documentMode,$i=null,Wd=null,Ao=null,Gd=!1;function Ff(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gd||$i==null||$i!==Hs(o)||(o=$i,"selectionStart"in o&&rp(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ao&&Ko(Ao,o)||(Ao=o,o=Ys(Wd,"onSelect"),0<o.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=$i)))}function Ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ki={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Qc={},By={};Vr&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function $l(e){if(Qc[e])return Qc[e];if(!ki[e])return e;var t=ki[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in By)return Qc[e]=t[n];return e}var Dy=$l("animationend"),Hy=$l("animationiteration"),Zy=$l("animationstart"),Uy=$l("transitionend"),Vy=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){Vy.set(e,t),ti(t,[e])}for(var Xc=0;Xc<Bf.length;Xc++){var Jc=Bf[Xc],Aw=Jc.toLowerCase(),Iw=Jc[0].toUpperCase()+Jc.slice(1);jn(Aw,"on"+Iw)}jn(Dy,"onAnimationEnd");jn(Hy,"onAnimationIteration");jn(Zy,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Uy,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rw=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Df(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Ab(o,t,void 0,e),e.currentTarget=null}function Wy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var c=void 0;if(t)for(var d=o.length-1;0<=d;d--){var m=o[d],h=m.instance,y=m.currentTarget;if(m=m.listener,h!==c&&a.isPropagationStopped())break e;Df(a,m,y),c=h}else for(d=0;d<o.length;d++){if(m=o[d],h=m.instance,y=m.currentTarget,m=m.listener,h!==c&&a.isPropagationStopped())break e;Df(a,m,y),c=h}}}if(Us)throw e=Hd,Us=!1,Hd=null,e}function Ae(e,t){var n=t[Xd];n===void 0&&(n=t[Xd]=new Set);var o=e+"__bubble";n.has(o)||(Gy(t,e,2,!1),n.add(o))}function ed(e,t,n){var o=0;t&&(o|=4),Gy(n,e,o,t)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[qa]){e[qa]=!0,ey.forEach(function(n){n!=="selectionchange"&&(Rw.has(n)||ed(n,!1,e),ed(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qa]||(t[qa]=!0,ed("selectionchange",!1,t))}}function Gy(e,t,n,o){switch(Ly(t)){case 1:var a=Kb;break;case 4:a=Qb;break;default:a=Qu}n=a.bind(null,t,n,e),a=void 0,!Dd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function td(e,t,n,o,a){var c=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var m=o.stateNode.containerInfo;if(m===a||m.nodeType===8&&m.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;m!==null;){if(d=Dn(m),d===null)return;if(h=d.tag,h===5||h===6){o=c=d;continue e}m=m.parentNode}}o=o.return}gy(function(){var y=c,x=Gu(n),v=[];e:{var w=Vy.get(e);if(w!==void 0){var C=Ju,T=e;switch(e){case"keypress":if(Cs(n)===0)break e;case"keydown":case"keyup":C=pw;break;case"focusin":T="focus",C=qc;break;case"focusout":T="blur",C=qc;break;case"beforeblur":case"afterblur":C=qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=mw;break;case Dy:case Hy:case Zy:C=nw;break;case Uy:C=yw;break;case"scroll":C=Xb;break;case"wheel":C=xw;break;case"copy":case"cut":case"paste":C=ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ef}var j=(t&4)!==0,z=!j&&e==="scroll",_=j?w!==null?w+"Capture":null:w;j=[];for(var b=y,$;b!==null;){$=b;var A=$.stateNode;if($.tag===5&&A!==null&&($=A,_!==null&&(A=Vo(b,_),A!=null&&j.push(Xo(b,A,$)))),z)break;b=b.return}0<j.length&&(w=new C(w,T,null,n,x),v.push({event:w,listeners:j}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",w&&n!==Fd&&(T=n.relatedTarget||n.fromElement)&&(Dn(T)||T[Wr]))break e;if((C||w)&&(w=x.window===x?x:(w=x.ownerDocument)?w.defaultView||w.parentWindow:window,C?(T=n.relatedTarget||n.toElement,C=y,T=T?Dn(T):null,T!==null&&(z=ri(T),T!==z||T.tag!==5&&T.tag!==6)&&(T=null)):(C=null,T=y),C!==T)){if(j=zf,A="onMouseLeave",_="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ef,A="onPointerLeave",_="onPointerEnter",b="pointer"),z=C==null?w:Si(C),$=T==null?w:Si(T),w=new j(A,b+"leave",C,n,x),w.target=z,w.relatedTarget=$,A=null,Dn(x)===y&&(j=new j(_,b+"enter",T,n,x),j.target=$,j.relatedTarget=z,A=j),z=A,C&&T)t:{for(j=C,_=T,b=0,$=j;$;$=yi($))b++;for($=0,A=_;A;A=yi(A))$++;for(;0<b-$;)j=yi(j),b--;for(;0<$-b;)_=yi(_),$--;for(;b--;){if(j===_||_!==null&&j===_.alternate)break t;j=yi(j),_=yi(_)}j=null}else j=null;C!==null&&Hf(v,w,C,j,!1),T!==null&&z!==null&&Hf(v,z,T,j,!0)}}e:{if(w=y?Si(y):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var E=jw;else if(Af(w))if(Ry)E=Lw;else{E=Pw;var N=Cw}else(C=w.nodeName)&&C.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(E=zw);if(E&&(E=E(e,y))){Iy(v,E,n,x);break e}N&&N(e,w,y),e==="focusout"&&(N=w._wrapperState)&&N.controlled&&w.type==="number"&&Ad(w,"number",w.value)}switch(N=y?Si(y):window,e){case"focusin":(Af(N)||N.contentEditable==="true")&&($i=N,Wd=y,Ao=null);break;case"focusout":Ao=Wd=$i=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,Ff(v,n,x);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":Ff(v,n,x)}var Z;if(tp)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else _i?My(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(Ty&&n.locale!=="ko"&&(_i||W!=="onCompositionStart"?W==="onCompositionEnd"&&_i&&(Z=Ey()):(cn=x,Xu="value"in cn?cn.value:cn.textContent,_i=!0)),N=Ys(y,W),0<N.length&&(W=new Lf(W,e,null,n,x),v.push({event:W,listeners:N}),Z?W.data=Z:(Z=Ay(n),Z!==null&&(W.data=Z)))),(Z=ww?_w(e,n):$w(e,n))&&(y=Ys(y,"onBeforeInput"),0<y.length&&(x=new Lf("onBeforeInput","beforeinput",null,n,x),v.push({event:x,listeners:y}),x.data=Z))}Wy(v,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ys(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Vo(e,n),c!=null&&o.unshift(Xo(e,c,a)),c=Vo(e,t),c!=null&&o.push(Xo(e,c,a))),e=e.return}return o}function yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,t,n,o,a){for(var c=t._reactName,d=[];n!==null&&n!==o;){var m=n,h=m.alternate,y=m.stateNode;if(h!==null&&h===o)break;m.tag===5&&y!==null&&(m=y,a?(h=Vo(n,c),h!=null&&d.unshift(Xo(n,h,m))):a||(h=Vo(n,c),h!=null&&d.push(Xo(n,h,m)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Ow=/\r\n?/g,Nw=/\u0000|\uFFFD/g;function Zf(e){return(typeof e=="string"?e:""+e).replace(Ow,`
`).replace(Nw,"")}function Ya(e,t,n){if(t=Zf(t),Zf(e)!==t&&n)throw Error(V(425))}function Ks(){}var qd=null,Yd=null;function Kd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,Fw=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,Bw=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch(Dw)}:Qd;function Dw(e){setTimeout(function(){throw e})}function rd(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),qo(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);qo(t)}function mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),Cr="__reactFiber$"+to,Jo="__reactProps$"+to,Wr="__reactContainer$"+to,Xd="__reactEvents$"+to,Hw="__reactListeners$"+to,Zw="__reactHandles$"+to;function Dn(e){var t=e[Cr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wr]||n[Cr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vf(e);e!==null;){if(n=e[Cr])return n;e=Vf(e)}return t}e=n,n=e.parentNode}return null}function ha(e){return e=e[Cr]||e[Wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function kl(e){return e[Jo]||null}var Jd=[],ji=-1;function Cn(e){return{current:e}}function Re(e){0>ji||(e.current=Jd[ji],Jd[ji]=null,ji--)}function Te(e,t){ji++,Jd[ji]=e.current,e.current=t}var $n={},kt=Cn($n),It=Cn(!1),Gn=$n;function Hi(e,t){var n=e.type.contextTypes;if(!n)return $n;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in n)a[c]=t[c];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Rt(e){return e=e.childContextTypes,e!=null}function Qs(){Re(It),Re(kt)}function Wf(e,t,n){if(kt.current!==$n)throw Error(V(168));Te(kt,t),Te(It,n)}function qy(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(V(108,Cb(e)||"Unknown",a));return Ue({},n,o)}function Xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Gn=kt.current,Te(kt,e),Te(It,It.current),!0}function Gf(e,t,n){var o=e.stateNode;if(!o)throw Error(V(169));n?(e=qy(e,t,Gn),o.__reactInternalMemoizedMergedChildContext=e,Re(It),Re(kt),Te(kt,e)):Re(It),Te(It,n)}var Fr=null,Sl=!1,nd=!1;function Yy(e){Fr===null?Fr=[e]:Fr.push(e)}function Uw(e){Sl=!0,Yy(e)}function Pn(){if(!nd&&Fr!==null){nd=!0;var e=0,t=Se;try{var n=Fr;for(Se=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Fr=null,Sl=!1}catch(a){throw Fr!==null&&(Fr=Fr.slice(e+1)),by(qu,Pn),a}finally{Se=t,nd=!1}}return null}var Ci=[],Pi=0,Js=null,el=0,Jt=[],er=0,qn=null,Hr=1,Zr="";function Fn(e,t){Ci[Pi++]=el,Ci[Pi++]=Js,Js=e,el=t}function Ky(e,t,n){Jt[er++]=Hr,Jt[er++]=Zr,Jt[er++]=qn,qn=e;var o=Hr;e=Zr;var a=32-yr(o)-1;o&=~(1<<a),n+=1;var c=32-yr(t)+a;if(30<c){var d=a-a%5;c=(o&(1<<d)-1).toString(32),o>>=d,a-=d,Hr=1<<32-yr(t)+a|n<<a|o,Zr=c+e}else Hr=1<<c|n<<a|o,Zr=e}function np(e){e.return!==null&&(Fn(e,1),Ky(e,1,0))}function ip(e){for(;e===Js;)Js=Ci[--Pi],Ci[Pi]=null,el=Ci[--Pi],Ci[Pi]=null;for(;e===qn;)qn=Jt[--er],Jt[er]=null,Zr=Jt[--er],Jt[er]=null,Hr=Jt[--er],Jt[er]=null}var Ht=null,Dt=null,Ne=!1,hr=null;function Qy(e,t){var n=tr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Dt=mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Hr,overflow:Zr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ht=e,Dt=null,!0):!1;default:return!1}}function eu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tu(e){if(Ne){var t=Dt;if(t){var n=t;if(!qf(e,t)){if(eu(e))throw Error(V(418));t=mn(n.nextSibling);var o=Ht;t&&qf(e,t)?Qy(o,n):(e.flags=e.flags&-4097|2,Ne=!1,Ht=e)}}else{if(eu(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ne=!1,Ht=e}}}function Yf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Ka(e){if(e!==Ht)return!1;if(!Ne)return Yf(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kd(e.type,e.memoizedProps)),t&&(t=Dt)){if(eu(e))throw Xy(),Error(V(418));for(;t;)Qy(e,t),t=mn(t.nextSibling)}if(Yf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Ht?mn(e.stateNode.nextSibling):null;return!0}function Xy(){for(var e=Dt;e;)e=mn(e.nextSibling)}function Zi(){Dt=Ht=null,Ne=!1}function op(e){hr===null?hr=[e]:hr.push(e)}var Vw=Yr.ReactCurrentBatchConfig;function $o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var o=n.stateNode}if(!o)throw Error(V(147,e));var a=o,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(d){var m=a.refs;d===null?delete m[c]:m[c]=d},t._stringRef=c,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Qa(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kf(e){var t=e._init;return t(e._payload)}function Jy(e){function t(_,b){if(e){var $=_.deletions;$===null?(_.deletions=[b],_.flags|=16):$.push(b)}}function n(_,b){if(!e)return null;for(;b!==null;)t(_,b),b=b.sibling;return null}function o(_,b){for(_=new Map;b!==null;)b.key!==null?_.set(b.key,b):_.set(b.index,b),b=b.sibling;return _}function a(_,b){return _=xn(_,b),_.index=0,_.sibling=null,_}function c(_,b,$){return _.index=$,e?($=_.alternate,$!==null?($=$.index,$<b?(_.flags|=2,b):$):(_.flags|=2,b)):(_.flags|=1048576,b)}function d(_){return e&&_.alternate===null&&(_.flags|=2),_}function m(_,b,$,A){return b===null||b.tag!==6?(b=dd($,_.mode,A),b.return=_,b):(b=a(b,$),b.return=_,b)}function h(_,b,$,A){var E=$.type;return E===wi?x(_,b,$.props.children,A,$.key):b!==null&&(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===on&&Kf(E)===b.type)?(A=a(b,$.props),A.ref=$o(_,b,$),A.return=_,A):(A=As($.type,$.key,$.props,null,_.mode,A),A.ref=$o(_,b,$),A.return=_,A)}function y(_,b,$,A){return b===null||b.tag!==4||b.stateNode.containerInfo!==$.containerInfo||b.stateNode.implementation!==$.implementation?(b=ud($,_.mode,A),b.return=_,b):(b=a(b,$.children||[]),b.return=_,b)}function x(_,b,$,A,E){return b===null||b.tag!==7?(b=Wn($,_.mode,A,E),b.return=_,b):(b=a(b,$),b.return=_,b)}function v(_,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return b=dd(""+b,_.mode,$),b.return=_,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ba:return $=As(b.type,b.key,b.props,null,_.mode,$),$.ref=$o(_,null,b),$.return=_,$;case bi:return b=ud(b,_.mode,$),b.return=_,b;case on:var A=b._init;return v(_,A(b._payload),$)}if(Co(b)||vo(b))return b=Wn(b,_.mode,$,null),b.return=_,b;Qa(_,b)}return null}function w(_,b,$,A){var E=b!==null?b.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return E!==null?null:m(_,b,""+$,A);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Ba:return $.key===E?h(_,b,$,A):null;case bi:return $.key===E?y(_,b,$,A):null;case on:return E=$._init,w(_,b,E($._payload),A)}if(Co($)||vo($))return E!==null?null:x(_,b,$,A,null);Qa(_,$)}return null}function C(_,b,$,A,E){if(typeof A=="string"&&A!==""||typeof A=="number")return _=_.get($)||null,m(b,_,""+A,E);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ba:return _=_.get(A.key===null?$:A.key)||null,h(b,_,A,E);case bi:return _=_.get(A.key===null?$:A.key)||null,y(b,_,A,E);case on:var N=A._init;return C(_,b,$,N(A._payload),E)}if(Co(A)||vo(A))return _=_.get($)||null,x(b,_,A,E,null);Qa(b,A)}return null}function T(_,b,$,A){for(var E=null,N=null,Z=b,W=b=0,ae=null;Z!==null&&W<$.length;W++){Z.index>W?(ae=Z,Z=null):ae=Z.sibling;var Y=w(_,Z,$[W],A);if(Y===null){Z===null&&(Z=ae);break}e&&Z&&Y.alternate===null&&t(_,Z),b=c(Y,b,W),N===null?E=Y:N.sibling=Y,N=Y,Z=ae}if(W===$.length)return n(_,Z),Ne&&Fn(_,W),E;if(Z===null){for(;W<$.length;W++)Z=v(_,$[W],A),Z!==null&&(b=c(Z,b,W),N===null?E=Z:N.sibling=Z,N=Z);return Ne&&Fn(_,W),E}for(Z=o(_,Z);W<$.length;W++)ae=C(Z,_,W,$[W],A),ae!==null&&(e&&ae.alternate!==null&&Z.delete(ae.key===null?W:ae.key),b=c(ae,b,W),N===null?E=ae:N.sibling=ae,N=ae);return e&&Z.forEach(function(oe){return t(_,oe)}),Ne&&Fn(_,W),E}function j(_,b,$,A){var E=vo($);if(typeof E!="function")throw Error(V(150));if($=E.call($),$==null)throw Error(V(151));for(var N=E=null,Z=b,W=b=0,ae=null,Y=$.next();Z!==null&&!Y.done;W++,Y=$.next()){Z.index>W?(ae=Z,Z=null):ae=Z.sibling;var oe=w(_,Z,Y.value,A);if(oe===null){Z===null&&(Z=ae);break}e&&Z&&oe.alternate===null&&t(_,Z),b=c(oe,b,W),N===null?E=oe:N.sibling=oe,N=oe,Z=ae}if(Y.done)return n(_,Z),Ne&&Fn(_,W),E;if(Z===null){for(;!Y.done;W++,Y=$.next())Y=v(_,Y.value,A),Y!==null&&(b=c(Y,b,W),N===null?E=Y:N.sibling=Y,N=Y);return Ne&&Fn(_,W),E}for(Z=o(_,Z);!Y.done;W++,Y=$.next())Y=C(Z,_,W,Y.value,A),Y!==null&&(e&&Y.alternate!==null&&Z.delete(Y.key===null?W:Y.key),b=c(Y,b,W),N===null?E=Y:N.sibling=Y,N=Y);return e&&Z.forEach(function(pe){return t(_,pe)}),Ne&&Fn(_,W),E}function z(_,b,$,A){if(typeof $=="object"&&$!==null&&$.type===wi&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Ba:e:{for(var E=$.key,N=b;N!==null;){if(N.key===E){if(E=$.type,E===wi){if(N.tag===7){n(_,N.sibling),b=a(N,$.props.children),b.return=_,_=b;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===on&&Kf(E)===N.type){n(_,N.sibling),b=a(N,$.props),b.ref=$o(_,N,$),b.return=_,_=b;break e}n(_,N);break}else t(_,N);N=N.sibling}$.type===wi?(b=Wn($.props.children,_.mode,A,$.key),b.return=_,_=b):(A=As($.type,$.key,$.props,null,_.mode,A),A.ref=$o(_,b,$),A.return=_,_=A)}return d(_);case bi:e:{for(N=$.key;b!==null;){if(b.key===N)if(b.tag===4&&b.stateNode.containerInfo===$.containerInfo&&b.stateNode.implementation===$.implementation){n(_,b.sibling),b=a(b,$.children||[]),b.return=_,_=b;break e}else{n(_,b);break}else t(_,b);b=b.sibling}b=ud($,_.mode,A),b.return=_,_=b}return d(_);case on:return N=$._init,z(_,b,N($._payload),A)}if(Co($))return T(_,b,$,A);if(vo($))return j(_,b,$,A);Qa(_,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,b!==null&&b.tag===6?(n(_,b.sibling),b=a(b,$),b.return=_,_=b):(n(_,b),b=dd($,_.mode,A),b.return=_,_=b),d(_)):n(_,b)}return z}var Ui=Jy(!0),e0=Jy(!1),tl=Cn(null),rl=null,zi=null,ap=null;function sp(){ap=zi=rl=null}function lp(e){var t=tl.current;Re(tl),e._currentValue=t}function ru(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ni(e,t){rl=e,ap=zi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function nr(e){var t=e._currentValue;if(ap!==e)if(e={context:e,memoizedValue:t,next:null},zi===null){if(rl===null)throw Error(V(308));zi=e,rl.dependencies={lanes:0,firstContext:e}}else zi=zi.next=e;return t}var Hn=null;function cp(e){Hn===null?Hn=[e]:Hn.push(e)}function t0(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,cp(t)):(n.next=a.next,a.next=n),t.interleaved=n,Gr(e,o)}function Gr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function dp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ur(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,_e&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Gr(e,n)}return a=o.interleaved,a===null?(t.next=t,cp(o)):(t.next=a.next,a.next=t),o.interleaved=t,Gr(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Yu(e,n)}}function Qf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?a=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?a=c=t:c=c.next=t}else a=c=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,o){var a=e.updateQueue;an=!1;var c=a.firstBaseUpdate,d=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var h=m,y=h.next;h.next=null,d===null?c=y:d.next=y,d=h;var x=e.alternate;x!==null&&(x=x.updateQueue,m=x.lastBaseUpdate,m!==d&&(m===null?x.firstBaseUpdate=y:m.next=y,x.lastBaseUpdate=h))}if(c!==null){var v=a.baseState;d=0,x=y=h=null,m=c;do{var w=m.lane,C=m.eventTime;if((o&w)===w){x!==null&&(x=x.next={eventTime:C,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var T=e,j=m;switch(w=t,C=n,j.tag){case 1:if(T=j.payload,typeof T=="function"){v=T.call(C,v,w);break e}v=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=j.payload,w=typeof T=="function"?T.call(C,v,w):T,w==null)break e;v=Ue({},v,w);break e;case 2:an=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,w=a.effects,w===null?a.effects=[m]:w.push(m))}else C={eventTime:C,lane:w,tag:m.tag,payload:m.payload,callback:m.callback,next:null},x===null?(y=x=C,h=v):x=x.next=C,d|=w;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;w=m,m=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);if(x===null&&(h=v),a.baseState=h,a.firstBaseUpdate=y,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);Kn|=d,e.lanes=d,e.memoizedState=v}}function Xf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(V(191,a));a.call(o)}}}var fa={},Lr=Cn(fa),ea=Cn(fa),ta=Cn(fa);function Zn(e){if(e===fa)throw Error(V(174));return e}function up(e,t){switch(Te(ta,t),Te(ea,e),Te(Lr,fa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rd(t,e)}Re(Lr),Te(Lr,t)}function Vi(){Re(Lr),Re(ea),Re(ta)}function n0(e){Zn(ta.current);var t=Zn(Lr.current),n=Rd(t,e.type);t!==n&&(Te(ea,e),Te(Lr,n))}function pp(e){ea.current===e&&(Re(Lr),Re(ea))}var De=Cn(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var id=[];function hp(){for(var e=0;e<id.length;e++)id[e]._workInProgressVersionPrimary=null;id.length=0}var zs=Yr.ReactCurrentDispatcher,od=Yr.ReactCurrentBatchConfig,Yn=0,He=null,at=null,ct=null,ol=!1,Io=!1,ra=0,Ww=0;function bt(){throw Error(V(321))}function fp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function mp(e,t,n,o,a,c){if(Yn=c,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zs.current=e===null||e.memoizedState===null?Kw:Qw,e=n(o,a),Io){c=0;do{if(Io=!1,ra=0,25<=c)throw Error(V(301));c+=1,ct=at=null,t.updateQueue=null,zs.current=Xw,e=n(o,a)}while(Io)}if(zs.current=al,t=at!==null&&at.next!==null,Yn=0,ct=at=He=null,ol=!1,t)throw Error(V(300));return e}function gp(){var e=ra!==0;return ra=0,e}function jr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?He.memoizedState=ct=e:ct=ct.next=e,ct}function ir(){if(at===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var t=ct===null?He.memoizedState:ct.next;if(t!==null)ct=t,at=e;else{if(e===null)throw Error(V(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ct===null?He.memoizedState=ct=e:ct=ct.next=e}return ct}function na(e,t){return typeof t=="function"?t(e):t}function ad(e){var t=ir(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var o=at,a=o.baseQueue,c=n.pending;if(c!==null){if(a!==null){var d=a.next;a.next=c.next,c.next=d}o.baseQueue=a=c,n.pending=null}if(a!==null){c=a.next,o=o.baseState;var m=d=null,h=null,y=c;do{var x=y.lane;if((Yn&x)===x)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var v={lane:x,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(m=h=v,d=o):h=h.next=v,He.lanes|=x,Kn|=x}y=y.next}while(y!==null&&y!==c);h===null?d=o:h.next=m,xr(o,t.memoizedState)||(At=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do c=a.lane,He.lanes|=c,Kn|=c,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sd(e){var t=ir(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,c=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do c=e(c,d.action),d=d.next;while(d!==a);xr(c,t.memoizedState)||(At=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,o]}function i0(){}function o0(e,t){var n=He,o=ir(),a=t(),c=!xr(o.memoizedState,a);if(c&&(o.memoizedState=a,At=!0),o=o.queue,yp(l0.bind(null,n,o,e),[e]),o.getSnapshot!==t||c||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,ia(9,s0.bind(null,n,o,a,t),void 0,null),ut===null)throw Error(V(349));Yn&30||a0(n,t,a)}return a}function a0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function s0(e,t,n,o){t.value=n,t.getSnapshot=o,c0(t)&&d0(e)}function l0(e,t,n){return n(function(){c0(t)&&d0(e)})}function c0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function d0(e){var t=Gr(e,1);t!==null&&vr(t,e,1,-1)}function Jf(e){var t=jr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t.queue=e,e=e.dispatch=Yw.bind(null,He,e),[t.memoizedState,e]}function ia(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function u0(){return ir().memoizedState}function Ls(e,t,n,o){var a=jr();He.flags|=e,a.memoizedState=ia(1|t,n,void 0,o===void 0?null:o)}function jl(e,t,n,o){var a=ir();o=o===void 0?null:o;var c=void 0;if(at!==null){var d=at.memoizedState;if(c=d.destroy,o!==null&&fp(o,d.deps)){a.memoizedState=ia(t,n,c,o);return}}He.flags|=e,a.memoizedState=ia(1|t,n,c,o)}function em(e,t){return Ls(8390656,8,e,t)}function yp(e,t){return jl(2048,8,e,t)}function p0(e,t){return jl(4,2,e,t)}function h0(e,t){return jl(4,4,e,t)}function f0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m0(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,f0.bind(null,t,e),n)}function vp(){}function g0(e,t){var n=ir();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&fp(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function y0(e,t){var n=ir();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&fp(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function v0(e,t,n){return Yn&21?(xr(n,t)||(n=$y(),He.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function Gw(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var o=od.transition;od.transition={};try{e(!1),t()}finally{Se=n,od.transition=o}}function x0(){return ir().memoizedState}function qw(e,t,n){var o=vn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},b0(e))w0(t,n);else if(n=t0(e,t,n,o),n!==null){var a=Ct();vr(n,e,o,a),_0(n,t,o)}}function Yw(e,t,n){var o=vn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(b0(e))w0(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,m=c(d,n);if(a.hasEagerState=!0,a.eagerState=m,xr(m,d)){var h=t.interleaved;h===null?(a.next=a,cp(t)):(a.next=h.next,h.next=a),t.interleaved=a;return}}catch{}finally{}n=t0(e,t,a,o),n!==null&&(a=Ct(),vr(n,e,o,a),_0(n,t,o))}}function b0(e){var t=e.alternate;return e===He||t!==null&&t===He}function w0(e,t){Io=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _0(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Yu(e,n)}}var al={readContext:nr,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},Kw={readContext:nr,useCallback:function(e,t){return jr().memoizedState=[e,t===void 0?null:t],e},useContext:nr,useEffect:em,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,f0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=jr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=jr();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=qw.bind(null,He,e),[o.memoizedState,e]},useRef:function(e){var t=jr();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:vp,useDeferredValue:function(e){return jr().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=Gw.bind(null,e[1]),jr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=He,a=jr();if(Ne){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),ut===null)throw Error(V(349));Yn&30||a0(o,t,n)}a.memoizedState=n;var c={value:n,getSnapshot:t};return a.queue=c,em(l0.bind(null,o,c,e),[e]),o.flags|=2048,ia(9,s0.bind(null,o,c,n,t),void 0,null),n},useId:function(){var e=jr(),t=ut.identifierPrefix;if(Ne){var n=Zr,o=Hr;n=(o&~(1<<32-yr(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ww++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qw={readContext:nr,useCallback:g0,useContext:nr,useEffect:yp,useImperativeHandle:m0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:y0,useReducer:ad,useRef:u0,useState:function(){return ad(na)},useDebugValue:vp,useDeferredValue:function(e){var t=ir();return v0(t,at.memoizedState,e)},useTransition:function(){var e=ad(na)[0],t=ir().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:o0,useId:x0,unstable_isNewReconciler:!1},Xw={readContext:nr,useCallback:g0,useContext:nr,useEffect:yp,useImperativeHandle:m0,useInsertionEffect:p0,useLayoutEffect:h0,useMemo:y0,useReducer:sd,useRef:u0,useState:function(){return sd(na)},useDebugValue:vp,useDeferredValue:function(e){var t=ir();return at===null?t.memoizedState=e:v0(t,at.memoizedState,e)},useTransition:function(){var e=sd(na)[0],t=ir().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:o0,useId:x0,unstable_isNewReconciler:!1};function ur(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ct(),a=vn(e),c=Ur(o,a);c.payload=t,n!=null&&(c.callback=n),t=gn(e,c,a),t!==null&&(vr(t,e,a,o),Ps(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ct(),a=vn(e),c=Ur(o,a);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=gn(e,c,a),t!==null&&(vr(t,e,a,o),Ps(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),o=vn(e),a=Ur(n,o);a.tag=2,t!=null&&(a.callback=t),t=gn(e,a,o),t!==null&&(vr(t,e,o,n),Ps(t,e,o))}};function tm(e,t,n,o,a,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,c,d):t.prototype&&t.prototype.isPureReactComponent?!Ko(n,o)||!Ko(a,c):!0}function $0(e,t,n){var o=!1,a=$n,c=t.contextType;return typeof c=="object"&&c!==null?c=nr(c):(a=Rt(t)?Gn:kt.current,o=t.contextTypes,c=(o=o!=null)?Hi(e,a):$n),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function rm(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function iu(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},dp(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=nr(c):(c=Rt(t)?Gn:kt.current,a.context=Hi(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(nu(e,t,c,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Cl.enqueueReplaceState(a,a.state,null),nl(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Wi(e,t){try{var n="",o=t;do n+=jb(o),o=o.return;while(o);var a=n}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function ld(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jw=typeof WeakMap=="function"?WeakMap:Map;function k0(e,t,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ll||(ll=!0,mu=o),ou(e,t)},n}function S0(e,t,n){n=Ur(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){ou(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){ou(e,t),typeof o!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function nm(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Jw;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=h_.bind(null,e,t,n),t.then(e,e))}function im(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function om(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ur(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var e_=Yr.ReactCurrentOwner,At=!1;function jt(e,t,n,o){t.child=e===null?e0(t,null,n,o):Ui(t,e.child,n,o)}function am(e,t,n,o,a){n=n.render;var c=t.ref;return Ni(t,a),o=mp(e,t,n,o,c,a),n=gp(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qr(e,t,a)):(Ne&&n&&np(t),t.flags|=1,jt(e,t,o,a),t.child)}function sm(e,t,n,o,a){if(e===null){var c=n.type;return typeof c=="function"&&!jp(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,j0(e,t,c,o,a)):(e=As(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&a)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(d,o)&&e.ref===t.ref)return qr(e,t,a)}return t.flags|=1,e=xn(c,o),e.ref=t.ref,e.return=t,t.child=e}function j0(e,t,n,o,a){if(e!==null){var c=e.memoizedProps;if(Ko(c,o)&&e.ref===t.ref)if(At=!1,t.pendingProps=o=c,(e.lanes&a)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,qr(e,t,a)}return au(e,t,n,o,a)}function C0(e,t,n){var o=t.pendingProps,a=o.children,c=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Ei,Ft),Ft|=n;else{if(!(n&1073741824))return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Ei,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=c!==null?c.baseLanes:n,Te(Ei,Ft),Ft|=o}else c!==null?(o=c.baseLanes|n,t.memoizedState=null):o=n,Te(Ei,Ft),Ft|=o;return jt(e,t,a,n),t.child}function P0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function au(e,t,n,o,a){var c=Rt(n)?Gn:kt.current;return c=Hi(t,c),Ni(t,a),n=mp(e,t,n,o,c,a),o=gp(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qr(e,t,a)):(Ne&&o&&np(t),t.flags|=1,jt(e,t,n,a),t.child)}function lm(e,t,n,o,a){if(Rt(n)){var c=!0;Xs(t)}else c=!1;if(Ni(t,a),t.stateNode===null)Es(e,t),$0(t,n,o),iu(t,n,o,a),o=!0;else if(e===null){var d=t.stateNode,m=t.memoizedProps;d.props=m;var h=d.context,y=n.contextType;typeof y=="object"&&y!==null?y=nr(y):(y=Rt(n)?Gn:kt.current,y=Hi(t,y));var x=n.getDerivedStateFromProps,v=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function";v||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==o||h!==y)&&rm(t,d,o,y),an=!1;var w=t.memoizedState;d.state=w,nl(t,o,d,a),h=t.memoizedState,m!==o||w!==h||It.current||an?(typeof x=="function"&&(nu(t,n,x,o),h=t.memoizedState),(m=an||tm(t,n,m,o,w,h,y))?(v||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=h),d.props=o,d.state=h,d.context=y,o=m):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,r0(e,t),m=t.memoizedProps,y=t.type===t.elementType?m:ur(t.type,m),d.props=y,v=t.pendingProps,w=d.context,h=n.contextType,typeof h=="object"&&h!==null?h=nr(h):(h=Rt(n)?Gn:kt.current,h=Hi(t,h));var C=n.getDerivedStateFromProps;(x=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==v||w!==h)&&rm(t,d,o,h),an=!1,w=t.memoizedState,d.state=w,nl(t,o,d,a);var T=t.memoizedState;m!==v||w!==T||It.current||an?(typeof C=="function"&&(nu(t,n,C,o),T=t.memoizedState),(y=an||tm(t,n,y,o,w,T,h)||!1)?(x||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,T,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,T,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=T),d.props=o,d.state=T,d.context=h,o=y):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),o=!1)}return su(e,t,n,o,c,a)}function su(e,t,n,o,a,c){P0(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return a&&Gf(t,n,!1),qr(e,t,c);o=t.stateNode,e_.current=t;var m=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Ui(t,e.child,null,c),t.child=Ui(t,null,m,c)):jt(e,t,m,c),t.memoizedState=o.state,a&&Gf(t,n,!0),t.child}function z0(e){var t=e.stateNode;t.pendingContext?Wf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wf(e,t.context,!1),up(e,t.containerInfo)}function cm(e,t,n,o,a){return Zi(),op(a),t.flags|=256,jt(e,t,n,o),t.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function L0(e,t,n){var o=t.pendingProps,a=De.current,c=!1,d=(t.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(a&2)!==0),m?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(De,a&1),e===null)return tu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=o.children,e=o.fallback,c?(o=t.mode,c=t.child,d={mode:"hidden",children:d},!(o&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=Ll(d,o,0,null),e=Wn(e,o,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=cu(n),t.memoizedState=lu,e):xp(t,d));if(a=e.memoizedState,a!==null&&(m=a.dehydrated,m!==null))return t_(e,t,d,o,m,a,n);if(c){c=o.fallback,d=t.mode,a=e.child,m=a.sibling;var h={mode:"hidden",children:o.children};return!(d&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=h,t.deletions=null):(o=xn(a,h),o.subtreeFlags=a.subtreeFlags&14680064),m!==null?c=xn(m,c):(c=Wn(c,d,n,null),c.flags|=2),c.return=t,o.return=t,o.sibling=c,t.child=o,o=c,c=t.child,d=e.child.memoizedState,d=d===null?cu(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~n,t.memoizedState=lu,o}return c=e.child,e=c.sibling,o=xn(c,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function xp(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xa(e,t,n,o){return o!==null&&op(o),Ui(t,e.child,null,n),e=xp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t_(e,t,n,o,a,c,d){if(n)return t.flags&256?(t.flags&=-257,o=ld(Error(V(422))),Xa(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=o.fallback,a=t.mode,o=Ll({mode:"visible",children:o.children},a,0,null),c=Wn(c,a,d,null),c.flags|=2,o.return=t,c.return=t,o.sibling=c,t.child=o,t.mode&1&&Ui(t,e.child,null,d),t.child.memoizedState=cu(d),t.memoizedState=lu,c);if(!(t.mode&1))return Xa(e,t,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var m=o.dgst;return o=m,c=Error(V(419)),o=ld(c,o,void 0),Xa(e,t,d,o)}if(m=(d&e.childLanes)!==0,At||m){if(o=ut,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|d)?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,Gr(e,a),vr(o,e,a,-1))}return Sp(),o=ld(Error(V(421))),Xa(e,t,d,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=f_.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,Dt=mn(a.nextSibling),Ht=t,Ne=!0,hr=null,e!==null&&(Jt[er++]=Hr,Jt[er++]=Zr,Jt[er++]=qn,Hr=e.id,Zr=e.overflow,qn=t),t=xp(t,o.children),t.flags|=4096,t)}function dm(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ru(e.return,t,n)}function cd(e,t,n,o,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=o,c.tail=n,c.tailMode=a)}function E0(e,t,n){var o=t.pendingProps,a=o.revealOrder,c=o.tail;if(jt(e,t,o.children,n),o=De.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dm(e,n,t);else if(e.tag===19)dm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Te(De,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),cd(t,!1,a,n,c);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&il(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}cd(t,!0,n,null,c);break;case"together":cd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r_(e,t,n){switch(t.tag){case 3:z0(t),Zi();break;case 5:n0(t);break;case 1:Rt(t.type)&&Xs(t);break;case 4:up(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Te(tl,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Te(De,De.current&1),t.flags|=128,null):n&t.child.childLanes?L0(e,t,n):(Te(De,De.current&1),e=qr(e,t,n),e!==null?e.sibling:null);Te(De,De.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return E0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(De,De.current),o)break;return null;case 22:case 23:return t.lanes=0,C0(e,t,n)}return qr(e,t,n)}var T0,du,M0,A0;T0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};M0=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Zn(Lr.current);var c=null;switch(n){case"input":a=Td(e,a),o=Td(e,o),c=[];break;case"select":a=Ue({},a,{value:void 0}),o=Ue({},o,{value:void 0}),c=[];break;case"textarea":a=Id(e,a),o=Id(e,o),c=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ks)}Od(n,o);var d;n=null;for(y in a)if(!o.hasOwnProperty(y)&&a.hasOwnProperty(y)&&a[y]!=null)if(y==="style"){var m=a[y];for(d in m)m.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(Zo.hasOwnProperty(y)?c||(c=[]):(c=c||[]).push(y,null));for(y in o){var h=o[y];if(m=a!=null?a[y]:void 0,o.hasOwnProperty(y)&&h!==m&&(h!=null||m!=null))if(y==="style")if(m){for(d in m)!m.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in h)h.hasOwnProperty(d)&&m[d]!==h[d]&&(n||(n={}),n[d]=h[d])}else n||(c||(c=[]),c.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,m=m?m.__html:void 0,h!=null&&m!==h&&(c=c||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(c=c||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&Ae("scroll",e),c||m===h||(c=[])):(c=c||[]).push(y,h))}n&&(c=c||[]).push("style",n);var y=c;(t.updateQueue=y)&&(t.flags|=4)}};A0=function(e,t,n,o){n!==o&&(t.flags|=4)};function ko(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function n_(e,t,n){var o=t.pendingProps;switch(ip(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return Rt(t.type)&&Qs(),wt(t),null;case 3:return o=t.stateNode,Vi(),Re(It),Re(kt),hp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,hr!==null&&(vu(hr),hr=null))),du(e,t),wt(t),null;case 5:pp(t);var a=Zn(ta.current);if(n=t.type,e!==null&&t.stateNode!=null)M0(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(V(166));return wt(t),null}if(e=Zn(Lr.current),Ka(t)){o=t.stateNode,n=t.type;var c=t.memoizedProps;switch(o[Cr]=t,o[Jo]=c,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",o),Ae("close",o);break;case"iframe":case"object":case"embed":Ae("load",o);break;case"video":case"audio":for(a=0;a<zo.length;a++)Ae(zo[a],o);break;case"source":Ae("error",o);break;case"img":case"image":case"link":Ae("error",o),Ae("load",o);break;case"details":Ae("toggle",o);break;case"input":xf(o,c),Ae("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},Ae("invalid",o);break;case"textarea":wf(o,c),Ae("invalid",o)}Od(n,c),a=null;for(var d in c)if(c.hasOwnProperty(d)){var m=c[d];d==="children"?typeof m=="string"?o.textContent!==m&&(c.suppressHydrationWarning!==!0&&Ya(o.textContent,m,e),a=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(c.suppressHydrationWarning!==!0&&Ya(o.textContent,m,e),a=["children",""+m]):Zo.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&Ae("scroll",o)}switch(n){case"input":Da(o),bf(o,c,!0);break;case"textarea":Da(o),_f(o);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(o.onclick=Ks)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ly(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[Cr]=t,e[Jo]=o,T0(e,t,!1,!1),t.stateNode=e;e:{switch(d=Nd(n,o),n){case"dialog":Ae("cancel",e),Ae("close",e),a=o;break;case"iframe":case"object":case"embed":Ae("load",e),a=o;break;case"video":case"audio":for(a=0;a<zo.length;a++)Ae(zo[a],e);a=o;break;case"source":Ae("error",e),a=o;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),a=o;break;case"details":Ae("toggle",e),a=o;break;case"input":xf(e,o),a=Td(e,o),Ae("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Ue({},o,{value:void 0}),Ae("invalid",e);break;case"textarea":wf(e,o),a=Id(e,o),Ae("invalid",e);break;default:a=o}Od(n,a),m=a;for(c in m)if(m.hasOwnProperty(c)){var h=m[c];c==="style"?uy(e,h):c==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&cy(e,h)):c==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Uo(e,h):typeof h=="number"&&Uo(e,""+h):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?h!=null&&c==="onScroll"&&Ae("scroll",e):h!=null&&Zu(e,c,h,d))}switch(n){case"input":Da(e),bf(e,o,!1);break;case"textarea":Da(e),_f(e);break;case"option":o.value!=null&&e.setAttribute("value",""+_n(o.value));break;case"select":e.multiple=!!o.multiple,c=o.value,c!=null?Ai(e,!!o.multiple,c,!1):o.defaultValue!=null&&Ai(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)A0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(V(166));if(n=Zn(ta.current),Zn(Lr.current),Ka(t)){if(o=t.stateNode,n=t.memoizedProps,o[Cr]=t,(c=o.nodeValue!==n)&&(e=Ht,e!==null))switch(e.tag){case 3:Ya(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ya(o.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Cr]=t,t.stateNode=o}return wt(t),null;case 13:if(Re(De),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&Dt!==null&&t.mode&1&&!(t.flags&128))Xy(),Zi(),t.flags|=98560,c=!1;else if(c=Ka(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(V(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(V(317));c[Cr]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),c=!1}else hr!==null&&(vu(hr),hr=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||De.current&1?st===0&&(st=3):Sp())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return Vi(),du(e,t),e===null&&Qo(t.stateNode.containerInfo),wt(t),null;case 10:return lp(t.type._context),wt(t),null;case 17:return Rt(t.type)&&Qs(),wt(t),null;case 19:if(Re(De),c=t.memoizedState,c===null)return wt(t),null;if(o=(t.flags&128)!==0,d=c.rendering,d===null)if(o)ko(c,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=il(e),d!==null){for(t.flags|=128,ko(c,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)c=n,e=o,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(De,De.current&1|2),t.child}e=e.sibling}c.tail!==null&&Xe()>Gi&&(t.flags|=128,o=!0,ko(c,!1),t.lanes=4194304)}else{if(!o)if(e=il(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ko(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ne)return wt(t),null}else 2*Xe()-c.renderingStartTime>Gi&&n!==1073741824&&(t.flags|=128,o=!0,ko(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(n=c.last,n!==null?n.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Xe(),t.sibling=null,n=De.current,Te(De,o?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return kp(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ft&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function i_(e,t){switch(ip(t),t.tag){case 1:return Rt(t.type)&&Qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vi(),Re(It),Re(kt),hp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pp(t),null;case 13:if(Re(De),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(De),null;case 4:return Vi(),null;case 10:return lp(t.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var Ja=!1,_t=!1,o_=typeof WeakSet=="function"?WeakSet:Set,X=null;function Li(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){We(e,t,o)}else n.current=null}function uu(e,t,n){try{n()}catch(o){We(e,t,o)}}var um=!1;function a_(e,t){if(qd=Gs,e=Fy(),rp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,m=-1,h=-1,y=0,x=0,v=e,w=null;t:for(;;){for(var C;v!==n||a!==0&&v.nodeType!==3||(m=d+a),v!==c||o!==0&&v.nodeType!==3||(h=d+o),v.nodeType===3&&(d+=v.nodeValue.length),(C=v.firstChild)!==null;)w=v,v=C;for(;;){if(v===e)break t;if(w===n&&++y===a&&(m=d),w===c&&++x===o&&(h=d),(C=v.nextSibling)!==null)break;v=w,w=v.parentNode}v=C}n=m===-1||h===-1?null:{start:m,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yd={focusedElem:e,selectionRange:n},Gs=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var j=T.memoizedProps,z=T.memoizedState,_=t.stateNode,b=_.getSnapshotBeforeUpdate(t.elementType===t.type?j:ur(t.type,j),z);_.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var $=t.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(A){We(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return T=um,um=!1,T}function Ro(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&uu(t,n,c)}a=a.next}while(a!==o)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function I0(e){var t=e.alternate;t!==null&&(e.alternate=null,I0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cr],delete t[Jo],delete t[Xd],delete t[Hw],delete t[Zw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function R0(e){return e.tag===5||e.tag===3||e.tag===4}function pm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||R0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(o!==4&&(e=e.child,e!==null))for(hu(e,t,n),e=e.sibling;e!==null;)hu(e,t,n),e=e.sibling}function fu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}var ft=null,pr=!1;function rn(e,t,n){for(n=n.child;n!==null;)O0(e,t,n),n=n.sibling}function O0(e,t,n){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:_t||Li(n,t);case 6:var o=ft,a=pr;ft=null,rn(e,t,n),ft=o,pr=a,ft!==null&&(pr?(e=ft,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(pr?(e=ft,n=n.stateNode,e.nodeType===8?rd(e.parentNode,n):e.nodeType===1&&rd(e,n),qo(e)):rd(ft,n.stateNode));break;case 4:o=ft,a=pr,ft=n.stateNode.containerInfo,pr=!0,rn(e,t,n),ft=o,pr=a;break;case 0:case 11:case 14:case 15:if(!_t&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var c=a,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&uu(n,t,d),a=a.next}while(a!==o)}rn(e,t,n);break;case 1:if(!_t&&(Li(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(m){We(n,t,m)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(_t=(o=_t)||n.memoizedState!==null,rn(e,t,n),_t=o):rn(e,t,n);break;default:rn(e,t,n)}}function hm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new o_),t.forEach(function(o){var a=m_.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function dr(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var c=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 5:ft=m.stateNode,pr=!1;break e;case 3:ft=m.stateNode.containerInfo,pr=!0;break e;case 4:ft=m.stateNode.containerInfo,pr=!0;break e}m=m.return}if(ft===null)throw Error(V(160));O0(c,d,a),ft=null,pr=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(y){We(a,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)N0(t,e),t=t.sibling}function N0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dr(t,e),Sr(e),o&4){try{Ro(3,e,e.return),Pl(3,e)}catch(j){We(e,e.return,j)}try{Ro(5,e,e.return)}catch(j){We(e,e.return,j)}}break;case 1:dr(t,e),Sr(e),o&512&&n!==null&&Li(n,n.return);break;case 5:if(dr(t,e),Sr(e),o&512&&n!==null&&Li(n,n.return),e.flags&32){var a=e.stateNode;try{Uo(a,"")}catch(j){We(e,e.return,j)}}if(o&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,d=n!==null?n.memoizedProps:c,m=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{m==="input"&&c.type==="radio"&&c.name!=null&&ay(a,c),Nd(m,d);var y=Nd(m,c);for(d=0;d<h.length;d+=2){var x=h[d],v=h[d+1];x==="style"?uy(a,v):x==="dangerouslySetInnerHTML"?cy(a,v):x==="children"?Uo(a,v):Zu(a,x,v,y)}switch(m){case"input":Md(a,c);break;case"textarea":sy(a,c);break;case"select":var w=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var C=c.value;C!=null?Ai(a,!!c.multiple,C,!1):w!==!!c.multiple&&(c.defaultValue!=null?Ai(a,!!c.multiple,c.defaultValue,!0):Ai(a,!!c.multiple,c.multiple?[]:"",!1))}a[Jo]=c}catch(j){We(e,e.return,j)}}break;case 6:if(dr(t,e),Sr(e),o&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(j){We(e,e.return,j)}}break;case 3:if(dr(t,e),Sr(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(t.containerInfo)}catch(j){We(e,e.return,j)}break;case 4:dr(t,e),Sr(e);break;case 13:dr(t,e),Sr(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(_p=Xe())),o&4&&hm(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(_t=(y=_t)||x,dr(t,e),_t=y):dr(t,e),Sr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!x&&e.mode&1)for(X=e,x=e.child;x!==null;){for(v=X=x;X!==null;){switch(w=X,C=w.child,w.tag){case 0:case 11:case 14:case 15:Ro(4,w,w.return);break;case 1:Li(w,w.return);var T=w.stateNode;if(typeof T.componentWillUnmount=="function"){o=w,n=w.return;try{t=o,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(j){We(o,n,j)}}break;case 5:Li(w,w.return);break;case 22:if(w.memoizedState!==null){mm(v);continue}}C!==null?(C.return=w,X=C):mm(v)}x=x.sibling}e:for(x=null,v=e;;){if(v.tag===5){if(x===null){x=v;try{a=v.stateNode,y?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(m=v.stateNode,h=v.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,m.style.display=dy("display",d))}catch(j){We(e,e.return,j)}}}else if(v.tag===6){if(x===null)try{v.stateNode.nodeValue=y?"":v.memoizedProps}catch(j){We(e,e.return,j)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;x===v&&(x=null),v=v.return}x===v&&(x=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:dr(t,e),Sr(e),o&4&&hm(e);break;case 21:break;default:dr(t,e),Sr(e)}}function Sr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(R0(n)){var o=n;break e}n=n.return}throw Error(V(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Uo(a,""),o.flags&=-33);var c=pm(e);fu(e,c,a);break;case 3:case 4:var d=o.stateNode.containerInfo,m=pm(e);hu(e,m,d);break;default:throw Error(V(161))}}catch(h){We(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s_(e,t,n){X=e,F0(e)}function F0(e,t,n){for(var o=(e.mode&1)!==0;X!==null;){var a=X,c=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||Ja;if(!d){var m=a.alternate,h=m!==null&&m.memoizedState!==null||_t;m=Ja;var y=_t;if(Ja=d,(_t=h)&&!y)for(X=a;X!==null;)d=X,h=d.child,d.tag===22&&d.memoizedState!==null?gm(a):h!==null?(h.return=d,X=h):gm(a);for(;c!==null;)X=c,F0(c),c=c.sibling;X=a,Ja=m,_t=y}fm(e)}else a.subtreeFlags&8772&&c!==null?(c.return=a,X=c):fm(e)}}function fm(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_t||Pl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!_t)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ur(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Xf(t,c,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xf(t,d,n)}break;case 5:var m=t.stateNode;if(n===null&&t.flags&4){n=m;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var x=y.memoizedState;if(x!==null){var v=x.dehydrated;v!==null&&qo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}_t||t.flags&512&&pu(t)}catch(w){We(t,t.return,w)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function mm(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function gm(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(h){We(t,n,h)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(h){We(t,a,h)}}var c=t.return;try{pu(t)}catch(h){We(t,c,h)}break;case 5:var d=t.return;try{pu(t)}catch(h){We(t,d,h)}}}catch(h){We(t,t.return,h)}if(t===e){X=null;break}var m=t.sibling;if(m!==null){m.return=t.return,X=m;break}X=t.return}}var l_=Math.ceil,sl=Yr.ReactCurrentDispatcher,bp=Yr.ReactCurrentOwner,rr=Yr.ReactCurrentBatchConfig,_e=0,ut=null,it=null,yt=0,Ft=0,Ei=Cn(0),st=0,oa=null,Kn=0,zl=0,wp=0,Oo=null,Mt=null,_p=0,Gi=1/0,Nr=null,ll=!1,mu=null,yn=null,es=!1,dn=null,cl=0,No=0,gu=null,Ts=-1,Ms=0;function Ct(){return _e&6?Xe():Ts!==-1?Ts:Ts=Xe()}function vn(e){return e.mode&1?_e&2&&yt!==0?yt&-yt:Vw.transition!==null?(Ms===0&&(Ms=$y()),Ms):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Ly(e.type)),e):1}function vr(e,t,n,o){if(50<No)throw No=0,gu=null,Error(V(185));ua(e,n,o),(!(_e&2)||e!==ut)&&(e===ut&&(!(_e&2)&&(zl|=n),st===4&&ln(e,yt)),Ot(e,o),n===1&&_e===0&&!(t.mode&1)&&(Gi=Xe()+500,Sl&&Pn()))}function Ot(e,t){var n=e.callbackNode;Vb(e,t);var o=Ws(e,e===ut?yt:0);if(o===0)n!==null&&Sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Sf(n),t===1)e.tag===0?Uw(ym.bind(null,e)):Yy(ym.bind(null,e)),Bw(function(){!(_e&6)&&Pn()}),n=null;else{switch(ky(o)){case 1:n=qu;break;case 4:n=wy;break;case 16:n=Vs;break;case 536870912:n=_y;break;default:n=Vs}n=G0(n,B0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function B0(e,t){if(Ts=-1,Ms=0,_e&6)throw Error(V(327));var n=e.callbackNode;if(Fi()&&e.callbackNode!==n)return null;var o=Ws(e,e===ut?yt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=dl(e,o);else{t=o;var a=_e;_e|=2;var c=H0();(ut!==e||yt!==t)&&(Nr=null,Gi=Xe()+500,Vn(e,t));do try{u_();break}catch(m){D0(e,m)}while(!0);sp(),sl.current=c,_e=a,it!==null?t=0:(ut=null,yt=0,t=st)}if(t!==0){if(t===2&&(a=Zd(e),a!==0&&(o=a,t=yu(e,a))),t===1)throw n=oa,Vn(e,0),ln(e,o),Ot(e,Xe()),n;if(t===6)ln(e,o);else{if(a=e.current.alternate,!(o&30)&&!c_(a)&&(t=dl(e,o),t===2&&(c=Zd(e),c!==0&&(o=c,t=yu(e,c))),t===1))throw n=oa,Vn(e,0),ln(e,o),Ot(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(V(345));case 2:Bn(e,Mt,Nr);break;case 3:if(ln(e,o),(o&130023424)===o&&(t=_p+500-Xe(),10<t)){if(Ws(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ct(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Qd(Bn.bind(null,e,Mt,Nr),t);break}Bn(e,Mt,Nr);break;case 4:if(ln(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var d=31-yr(o);c=1<<d,d=t[d],d>a&&(a=d),o&=~c}if(o=a,o=Xe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*l_(o/1960))-o,10<o){e.timeoutHandle=Qd(Bn.bind(null,e,Mt,Nr),o);break}Bn(e,Mt,Nr);break;case 5:Bn(e,Mt,Nr);break;default:throw Error(V(329))}}}return Ot(e,Xe()),e.callbackNode===n?B0.bind(null,e):null}function yu(e,t){var n=Oo;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=dl(e,t),e!==2&&(t=Mt,Mt=n,t!==null&&vu(t)),e}function vu(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function c_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],c=a.getSnapshot;a=a.value;try{if(!xr(c(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~wp,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yr(t),o=1<<n;e[n]=-1,t&=~o}}function ym(e){if(_e&6)throw Error(V(327));Fi();var t=Ws(e,0);if(!(t&1))return Ot(e,Xe()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var o=Zd(e);o!==0&&(t=o,n=yu(e,o))}if(n===1)throw n=oa,Vn(e,0),ln(e,t),Ot(e,Xe()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,Mt,Nr),Ot(e,Xe()),null}function $p(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(Gi=Xe()+500,Sl&&Pn())}}function Qn(e){dn!==null&&dn.tag===0&&!(_e&6)&&Fi();var t=_e;_e|=1;var n=rr.transition,o=Se;try{if(rr.transition=null,Se=1,e)return e()}finally{Se=o,rr.transition=n,_e=t,!(_e&6)&&Pn()}}function kp(){Ft=Ei.current,Re(Ei)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fw(n)),it!==null)for(n=it.return;n!==null;){var o=n;switch(ip(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Qs();break;case 3:Vi(),Re(It),Re(kt),hp();break;case 5:pp(o);break;case 4:Vi();break;case 13:Re(De);break;case 19:Re(De);break;case 10:lp(o.type._context);break;case 22:case 23:kp()}n=n.return}if(ut=e,it=e=xn(e.current,null),yt=Ft=t,st=0,oa=null,wp=zl=Kn=0,Mt=Oo=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,c=n.pending;if(c!==null){var d=c.next;c.next=a,o.next=d}n.pending=o}Hn=null}return e}function D0(e,t){do{var n=it;try{if(sp(),zs.current=al,ol){for(var o=He.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}ol=!1}if(Yn=0,ct=at=He=null,Io=!1,ra=0,bp.current=null,n===null||n.return===null){st=1,oa=t,it=null;break}e:{var c=e,d=n.return,m=n,h=t;if(t=yt,m.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,x=m,v=x.tag;if(!(x.mode&1)&&(v===0||v===11||v===15)){var w=x.alternate;w?(x.updateQueue=w.updateQueue,x.memoizedState=w.memoizedState,x.lanes=w.lanes):(x.updateQueue=null,x.memoizedState=null)}var C=im(d);if(C!==null){C.flags&=-257,om(C,d,m,c,t),C.mode&1&&nm(c,y,t),t=C,h=y;var T=t.updateQueue;if(T===null){var j=new Set;j.add(h),t.updateQueue=j}else T.add(h);break e}else{if(!(t&1)){nm(c,y,t),Sp();break e}h=Error(V(426))}}else if(Ne&&m.mode&1){var z=im(d);if(z!==null){!(z.flags&65536)&&(z.flags|=256),om(z,d,m,c,t),op(Wi(h,m));break e}}c=h=Wi(h,m),st!==4&&(st=2),Oo===null?Oo=[c]:Oo.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var _=k0(c,h,t);Qf(c,_);break e;case 1:m=h;var b=c.type,$=c.stateNode;if(!(c.flags&128)&&(typeof b.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(yn===null||!yn.has($)))){c.flags|=65536,t&=-t,c.lanes|=t;var A=S0(c,m,t);Qf(c,A);break e}}c=c.return}while(c!==null)}U0(n)}catch(E){t=E,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function H0(){var e=sl.current;return sl.current=al,e===null?al:e}function Sp(){(st===0||st===3||st===2)&&(st=4),ut===null||!(Kn&268435455)&&!(zl&268435455)||ln(ut,yt)}function dl(e,t){var n=_e;_e|=2;var o=H0();(ut!==e||yt!==t)&&(Nr=null,Vn(e,t));do try{d_();break}catch(a){D0(e,a)}while(!0);if(sp(),_e=n,sl.current=o,it!==null)throw Error(V(261));return ut=null,yt=0,st}function d_(){for(;it!==null;)Z0(it)}function u_(){for(;it!==null&&!Rb();)Z0(it)}function Z0(e){var t=W0(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?U0(e):it=t,bp.current=null}function U0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=i_(n,t),n!==null){n.flags&=32767,it=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,it=null;return}}else if(n=n_(n,t,Ft),n!==null){it=n;return}if(t=t.sibling,t!==null){it=t;return}it=t=e}while(t!==null);st===0&&(st=5)}function Bn(e,t,n){var o=Se,a=rr.transition;try{rr.transition=null,Se=1,p_(e,t,n,o)}finally{rr.transition=a,Se=o}return null}function p_(e,t,n,o){do Fi();while(dn!==null);if(_e&6)throw Error(V(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(Wb(e,c),e===ut&&(it=ut=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||es||(es=!0,G0(Vs,function(){return Fi(),null})),c=(n.flags&15990)!==0,n.subtreeFlags&15990||c){c=rr.transition,rr.transition=null;var d=Se;Se=1;var m=_e;_e|=4,bp.current=null,a_(e,n),N0(n,e),Tw(Yd),Gs=!!qd,Yd=qd=null,e.current=n,s_(n),Ob(),_e=m,Se=d,rr.transition=c}else e.current=n;if(es&&(es=!1,dn=e,cl=a),c=e.pendingLanes,c===0&&(yn=null),Bb(n.stateNode),Ot(e,Xe()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(ll)throw ll=!1,e=mu,mu=null,e;return cl&1&&e.tag!==0&&Fi(),c=e.pendingLanes,c&1?e===gu?No++:(No=0,gu=e):No=0,Pn(),null}function Fi(){if(dn!==null){var e=ky(cl),t=rr.transition,n=Se;try{if(rr.transition=null,Se=16>e?16:e,dn===null)var o=!1;else{if(e=dn,dn=null,cl=0,_e&6)throw Error(V(331));var a=_e;for(_e|=4,X=e.current;X!==null;){var c=X,d=c.child;if(X.flags&16){var m=c.deletions;if(m!==null){for(var h=0;h<m.length;h++){var y=m[h];for(X=y;X!==null;){var x=X;switch(x.tag){case 0:case 11:case 15:Ro(8,x,c)}var v=x.child;if(v!==null)v.return=x,X=v;else for(;X!==null;){x=X;var w=x.sibling,C=x.return;if(I0(x),x===y){X=null;break}if(w!==null){w.return=C,X=w;break}X=C}}}var T=c.alternate;if(T!==null){var j=T.child;if(j!==null){T.child=null;do{var z=j.sibling;j.sibling=null,j=z}while(j!==null)}}X=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,X=d;else e:for(;X!==null;){if(c=X,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Ro(9,c,c.return)}var _=c.sibling;if(_!==null){_.return=c.return,X=_;break e}X=c.return}}var b=e.current;for(X=b;X!==null;){d=X;var $=d.child;if(d.subtreeFlags&2064&&$!==null)$.return=d,X=$;else e:for(d=b;X!==null;){if(m=X,m.flags&2048)try{switch(m.tag){case 0:case 11:case 15:Pl(9,m)}}catch(E){We(m,m.return,E)}if(m===d){X=null;break e}var A=m.sibling;if(A!==null){A.return=m.return,X=A;break e}X=m.return}}if(_e=a,Pn(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(bl,e)}catch{}o=!0}return o}finally{Se=n,rr.transition=t}}return!1}function vm(e,t,n){t=Wi(n,t),t=k0(e,t,1),e=gn(e,t,1),t=Ct(),e!==null&&(ua(e,1,t),Ot(e,t))}function We(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(yn===null||!yn.has(o))){e=Wi(n,e),e=S0(t,e,1),t=gn(t,e,1),e=Ct(),t!==null&&(ua(t,1,e),Ot(t,e));break}}t=t.return}}function h_(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&n,ut===e&&(yt&n)===n&&(st===4||st===3&&(yt&130023424)===yt&&500>Xe()-_p?Vn(e,0):wp|=n),Ot(e,t)}function V0(e,t){t===0&&(e.mode&1?(t=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):t=1);var n=Ct();e=Gr(e,t),e!==null&&(ua(e,t,n),Ot(e,n))}function f_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),V0(e,n)}function m_(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(V(314))}o!==null&&o.delete(t),V0(e,n)}var W0;W0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,r_(e,t,n);At=!!(e.flags&131072)}else At=!1,Ne&&t.flags&1048576&&Ky(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Es(e,t),e=t.pendingProps;var a=Hi(t,kt.current);Ni(t,n),a=mp(null,t,o,e,a,n);var c=gp();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(o)?(c=!0,Xs(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,dp(t),a.updater=Cl,t.stateNode=a,a._reactInternals=t,iu(t,o,e,n),t=su(null,t,o,!0,c,n)):(t.tag=0,Ne&&c&&np(t),jt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Es(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=y_(o),e=ur(o,e),a){case 0:t=au(null,t,o,e,n);break e;case 1:t=lm(null,t,o,e,n);break e;case 11:t=am(null,t,o,e,n);break e;case 14:t=sm(null,t,o,ur(o.type,e),n);break e}throw Error(V(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:ur(o,a),au(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:ur(o,a),lm(e,t,o,a,n);case 3:e:{if(z0(t),e===null)throw Error(V(387));o=t.pendingProps,c=t.memoizedState,a=c.element,r0(e,t),nl(t,o,null,n);var d=t.memoizedState;if(o=d.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=Wi(Error(V(423)),t),t=cm(e,t,o,n,a);break e}else if(o!==a){a=Wi(Error(V(424)),t),t=cm(e,t,o,n,a);break e}else for(Dt=mn(t.stateNode.containerInfo.firstChild),Ht=t,Ne=!0,hr=null,n=e0(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),o===a){t=qr(e,t,n);break e}jt(e,t,o,n)}t=t.child}return t;case 5:return n0(t),e===null&&tu(t),o=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,d=a.children,Kd(o,a)?d=null:c!==null&&Kd(o,c)&&(t.flags|=32),P0(e,t),jt(e,t,d,n),t.child;case 6:return e===null&&tu(t),null;case 13:return L0(e,t,n);case 4:return up(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ui(t,null,o,n):jt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:ur(o,a),am(e,t,o,a,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,c=t.memoizedProps,d=a.value,Te(tl,o._currentValue),o._currentValue=d,c!==null)if(xr(c.value,d)){if(c.children===a.children&&!It.current){t=qr(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var m=c.dependencies;if(m!==null){d=c.child;for(var h=m.firstContext;h!==null;){if(h.context===o){if(c.tag===1){h=Ur(-1,n&-n),h.tag=2;var y=c.updateQueue;if(y!==null){y=y.shared;var x=y.pending;x===null?h.next=h:(h.next=x.next,x.next=h),y.pending=h}}c.lanes|=n,h=c.alternate,h!==null&&(h.lanes|=n),ru(c.return,n,t),m.lanes|=n;break}h=h.next}}else if(c.tag===10)d=c.type===t.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(V(341));d.lanes|=n,m=d.alternate,m!==null&&(m.lanes|=n),ru(d,n,t),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===t){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}jt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Ni(t,n),a=nr(a),o=o(a),t.flags|=1,jt(e,t,o,n),t.child;case 14:return o=t.type,a=ur(o,t.pendingProps),a=ur(o.type,a),sm(e,t,o,a,n);case 15:return j0(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:ur(o,a),Es(e,t),t.tag=1,Rt(o)?(e=!0,Xs(t)):e=!1,Ni(t,n),$0(t,o,a),iu(t,o,a,n),su(null,t,o,!0,e,n);case 19:return E0(e,t,n);case 22:return C0(e,t,n)}throw Error(V(156,t.tag))};function G0(e,t){return by(e,t)}function g_(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(e,t,n,o){return new g_(e,t,n,o)}function jp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y_(e){if(typeof e=="function")return jp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vu)return 11;if(e===Wu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=tr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function As(e,t,n,o,a,c){var d=2;if(o=e,typeof e=="function")jp(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case wi:return Wn(n.children,a,c,t);case Uu:d=8,a|=8;break;case Pd:return e=tr(12,n,t,a|2),e.elementType=Pd,e.lanes=c,e;case zd:return e=tr(13,n,t,a),e.elementType=zd,e.lanes=c,e;case Ld:return e=tr(19,n,t,a),e.elementType=Ld,e.lanes=c,e;case ny:return Ll(n,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ty:d=10;break e;case ry:d=9;break e;case Vu:d=11;break e;case Wu:d=14;break e;case on:d=16,o=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=tr(d,n,t,a),t.elementType=e,t.type=o,t.lanes=c,t}function Wn(e,t,n,o){return e=tr(7,e,o,t),e.lanes=n,e}function Ll(e,t,n,o){return e=tr(22,e,o,t),e.elementType=ny,e.lanes=n,e.stateNode={isHidden:!1},e}function dd(e,t,n){return e=tr(6,e,null,t),e.lanes=n,e}function ud(e,t,n){return t=tr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v_(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Cp(e,t,n,o,a,c,d,m,h){return e=new v_(e,t,n,m,h),t===1?(t=1,c===!0&&(t|=8)):t=0,c=tr(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(c),e}function x_(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function q0(e){if(!e)return $n;e=e._reactInternals;e:{if(ri(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Rt(n))return qy(e,n,t)}return t}function Y0(e,t,n,o,a,c,d,m,h){return e=Cp(n,o,!0,e,a,c,d,m,h),e.context=q0(null),n=e.current,o=Ct(),a=vn(n),c=Ur(o,a),c.callback=t??null,gn(n,c,a),e.current.lanes=a,ua(e,a,o),Ot(e,o),e}function El(e,t,n,o){var a=t.current,c=Ct(),d=vn(a);return n=q0(n),t.context===null?t.context=n:t.pendingContext=n,t=Ur(c,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=gn(a,t,d),e!==null&&(vr(e,a,d,c),Ps(e,a,d)),d}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pp(e,t){xm(e,t),(e=e.alternate)&&xm(e,t)}function b_(){return null}var K0=typeof reportError=="function"?reportError:function(e){console.error(e)};function zp(e){this._internalRoot=e}Tl.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));El(e,t,null,null)};Tl.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){El(null,e,null,null)}),t[Wr]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&zy(e)}};function Lp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bm(){}function w_(e,t,n,o,a){if(a){if(typeof o=="function"){var c=o;o=function(){var y=ul(d);c.call(y)}}var d=Y0(t,o,e,0,null,!1,!1,"",bm);return e._reactRootContainer=d,e[Wr]=d.current,Qo(e.nodeType===8?e.parentNode:e),Qn(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var m=o;o=function(){var y=ul(h);m.call(y)}}var h=Cp(e,0,!1,null,null,!1,!1,"",bm);return e._reactRootContainer=h,e[Wr]=h.current,Qo(e.nodeType===8?e.parentNode:e),Qn(function(){El(t,h,n,o)}),h}function Al(e,t,n,o,a){var c=n._reactRootContainer;if(c){var d=c;if(typeof a=="function"){var m=a;a=function(){var h=ul(d);m.call(h)}}El(t,d,e,a)}else d=w_(n,t,e,a,o);return ul(d)}Sy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Po(t.pendingLanes);n!==0&&(Yu(t,n|1),Ot(t,Xe()),!(_e&6)&&(Gi=Xe()+500,Pn()))}break;case 13:Qn(function(){var o=Gr(e,1);if(o!==null){var a=Ct();vr(o,e,1,a)}}),Pp(e,1)}};Ku=function(e){if(e.tag===13){var t=Gr(e,134217728);if(t!==null){var n=Ct();vr(t,e,134217728,n)}Pp(e,134217728)}};jy=function(e){if(e.tag===13){var t=vn(e),n=Gr(e,t);if(n!==null){var o=Ct();vr(n,e,t,o)}Pp(e,t)}};Cy=function(){return Se};Py=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}};Bd=function(e,t,n){switch(t){case"input":if(Md(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=kl(o);if(!a)throw Error(V(90));oy(o),Md(o,a)}}}break;case"textarea":sy(e,n);break;case"select":t=n.value,t!=null&&Ai(e,!!n.multiple,t,!1)}};fy=$p;my=Qn;var __={usingClientEntryPoint:!1,Events:[ha,Si,kl,py,hy,$p]},So={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$_={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vy(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||b_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{bl=ts.inject($_),zr=ts}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(t))throw Error(V(200));return x_(e,t,null,n)};Ut.createRoot=function(e,t){if(!Lp(e))throw Error(V(299));var n=!1,o="",a=K0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Cp(e,1,!1,null,null,n,!1,o,a),e[Wr]=t.current,Qo(e.nodeType===8?e.parentNode:e),new zp(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=vy(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return Qn(e)};Ut.hydrate=function(e,t,n){if(!Ml(t))throw Error(V(200));return Al(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!Lp(e))throw Error(V(405));var o=n!=null&&n.hydratedSources||null,a=!1,c="",d=K0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Y0(t,null,e,1,n??null,a,!1,c,d),e[Wr]=t.current,Qo(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Tl(t)};Ut.render=function(e,t,n){if(!Ml(t))throw Error(V(200));return Al(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(V(40));return e._reactRootContainer?(Qn(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[Wr]=null})}),!0):!1};Ut.unstable_batchedUpdates=$p;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ml(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Al(e,t,n,!1,o)};Ut.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(e){console.error(e)}}Q0(),Qg.exports=Ut;var k_=Qg.exports,wm=k_;jd.createRoot=wm.createRoot,jd.hydrateRoot=wm.hydrateRoot;const S_="modulepreload",j_=function(e){return"/LaFranciaGO/"+e},_m={},C_=function(t,n,o){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.allSettled(n.map(h=>{if(h=j_(h),h in _m)return;_m[h]=!0;const y=h.endsWith(".css"),x=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${x}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":S_,y||(v.as="script"),v.crossOrigin="",v.href=h,m&&v.setAttribute("nonce",m),document.head.appendChild(v),y)return new Promise((w,C)=>{v.addEventListener("load",w),v.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${h}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return a.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};function P_(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:o,onRegistered:a,onRegisteredSW:c,onRegisterError:d}=e;let m,h;const y=async(v=!0)=>{await h};async function x(){if("serviceWorker"in navigator){if(m=await C_(async()=>{const{Workbox:v}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:v}},[]).then(({Workbox:v})=>new v("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(v=>{d==null||d(v)}),!m)return;m.addEventListener("activated",v=>{(v.isUpdate||v.isExternal)&&window.location.reload()}),m.addEventListener("installed",v=>{v.isUpdate||o==null||o()}),m.register({immediate:t}).then(v=>{c?c("/LaFranciaGO/sw.js",v):a==null||a(v)}).catch(v=>{d==null||d(v)})}}return h=x(),y}/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},aa.apply(null,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const $m="popstate";function z_(e){e===void 0&&(e={});function t(a,c){let{pathname:d="/",search:m="",hash:h=""}=ni(a.location.hash.substr(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),xu("",{pathname:d,search:m,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(a,c){let d=a.document.querySelector("base"),m="";if(d&&d.getAttribute("href")){let h=a.location.href,y=h.indexOf("#");m=y===-1?h:h.slice(0,y)}return m+"#"+(typeof c=="string"?c:pl(c))}function o(a,c){Il(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return E_(t,n,o,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Il(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L_(){return Math.random().toString(36).substr(2,8)}function km(e,t){return{usr:e.state,key:e.key,idx:t}}function xu(e,t,n,o){return n===void 0&&(n=null),aa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ni(t):t,{state:n,key:t&&t.key||o||L_()})}function pl(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function E_(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:c=!1}=o,d=a.history,m=un.Pop,h=null,y=x();y==null&&(y=0,d.replaceState(aa({},d.state,{idx:y}),""));function x(){return(d.state||{idx:null}).idx}function v(){m=un.Pop;let z=x(),_=z==null?null:z-y;y=z,h&&h({action:m,location:j.location,delta:_})}function w(z,_){m=un.Push;let b=xu(j.location,z,_);n&&n(b,z),y=x()+1;let $=km(b,y),A=j.createHref(b);try{d.pushState($,"",A)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(A)}c&&h&&h({action:m,location:j.location,delta:1})}function C(z,_){m=un.Replace;let b=xu(j.location,z,_);n&&n(b,z),y=x();let $=km(b,y),A=j.createHref(b);d.replaceState($,"",A),c&&h&&h({action:m,location:j.location,delta:0})}function T(z){let _=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof z=="string"?z:pl(z);return b=b.replace(/ $/,"%20"),Ze(_,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,_)}let j={get action(){return m},get location(){return e(a,d)},listen(z){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener($m,v),h=z,()=>{a.removeEventListener($m,v),h=null}},createHref(z){return t(a,z)},createURL:T,encodeLocation(z){let _=T(z);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:w,replace:C,go(z){return d.go(z)}};return j}var Sm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sm||(Sm={}));function T_(e,t,n){return n===void 0&&(n="/"),M_(e,t,n)}function M_(e,t,n,o){let a=typeof t=="string"?ni(t):t,c=qi(a.pathname||"/",n);if(c==null)return null;let d=X0(e);A_(d);let m=null,h=V_(c);for(let y=0;m==null&&y<d.length;++y)m=Z_(d[y],h);return m}function X0(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(c,d,m)=>{let h={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};h.relativePath.startsWith("/")&&(Ze(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let y=bn([o,h.relativePath]),x=n.concat(h);c.children&&c.children.length>0&&(Ze(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),X0(c.children,t,x,y)),!(c.path==null&&!c.index)&&t.push({path:y,score:D_(y,c.index),routesMeta:x})};return e.forEach((c,d)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))a(c,d);else for(let h of J0(c.path))a(c,d,h)}),t}function J0(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),c=n.replace(/\?$/,"");if(o.length===0)return a?[c,""]:[c];let d=J0(o.join("/")),m=[];return m.push(...d.map(h=>h===""?c:[c,h].join("/"))),a&&m.push(...d),m.map(h=>e.startsWith("/")&&h===""?"/":h)}function A_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:H_(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const I_=/^:[\w-]+$/,R_=3,O_=2,N_=1,F_=10,B_=-2,jm=e=>e==="*";function D_(e,t){let n=e.split("/"),o=n.length;return n.some(jm)&&(o+=B_),t&&(o+=O_),n.filter(a=>!jm(a)).reduce((a,c)=>a+(I_.test(c)?R_:c===""?N_:F_),o)}function H_(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function Z_(e,t,n){let{routesMeta:o}=e,a={},c="/",d=[];for(let m=0;m<o.length;++m){let h=o[m],y=m===o.length-1,x=c==="/"?t:t.slice(c.length)||"/",v=bu({path:h.relativePath,caseSensitive:h.caseSensitive,end:y},x),w=h.route;if(!v)return null;Object.assign(a,v.params),d.push({params:a,pathname:bn([c,v.pathname]),pathnameBase:K_(bn([c,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(c=bn([c,v.pathnameBase]))}return d}function bu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=U_(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let c=a[0],d=c.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:o.reduce((y,x,v)=>{let{paramName:w,isOptional:C}=x;if(w==="*"){let j=m[v]||"";d=c.slice(0,c.length-j.length).replace(/(.)\/+$/,"$1")}const T=m[v];return C&&!T?y[w]=void 0:y[w]=(T||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:e}}function U_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Il(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(o.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function V_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Il(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}const W_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G_=e=>W_.test(e);function q_(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?ni(e):e,c;if(n)if(G_(n))c=n;else{if(n.includes("//")){let d=n;n=e1(n),Il(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+n))}n.startsWith("/")?c=Cm(n.substring(1),"/"):c=Cm(n,t)}else c=t;return{pathname:c,search:Q_(o),hash:X_(a)}}function Cm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function pd(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ep(e,t){let n=Y_(e);return t?n.map((o,a)=>a===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Tp(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=ni(e):(a=aa({},e),Ze(!a.pathname||!a.pathname.includes("?"),pd("?","pathname","search",a)),Ze(!a.pathname||!a.pathname.includes("#"),pd("#","pathname","hash",a)),Ze(!a.search||!a.search.includes("#"),pd("#","search","hash",a)));let c=e===""||a.pathname==="",d=c?"/":a.pathname,m;if(d==null)m=n;else{let v=t.length-1;if(!o&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}m=v>=0?t[v]:"/"}let h=q_(a,m),y=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(y||x)&&(h.pathname+="/"),h}const e1=e=>e.replace(/\/\/+/g,"/"),bn=e=>e1(e.join("/")),K_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Q_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,X_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t1=["post","put","patch","delete"];new Set(t1);const e2=["get",...t1];new Set(e2);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},sa.apply(null,arguments)}const Rl=k.createContext(null),r1=k.createContext(null),Kr=k.createContext(null),Ol=k.createContext(null),Qr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),n1=k.createContext(null);function t2(e,t){let{relative:n}=t===void 0?{}:t;ro()||Ze(!1);let{basename:o,navigator:a}=k.useContext(Kr),{hash:c,pathname:d,search:m}=Fl(e,{relative:n}),h=d;return o!=="/"&&(h=d==="/"?o:bn([o,d])),a.createHref({pathname:h,search:m,hash:c})}function ro(){return k.useContext(Ol)!=null}function no(){return ro()||Ze(!1),k.useContext(Ol).location}function i1(e){k.useContext(Kr).static||k.useLayoutEffect(e)}function Nl(){let{isDataRoute:e}=k.useContext(Qr);return e?f2():r2()}function r2(){ro()||Ze(!1);let e=k.useContext(Rl),{basename:t,future:n,navigator:o}=k.useContext(Kr),{matches:a}=k.useContext(Qr),{pathname:c}=no(),d=JSON.stringify(Ep(a,n.v7_relativeSplatPath)),m=k.useRef(!1);return i1(()=>{m.current=!0}),k.useCallback(function(y,x){if(x===void 0&&(x={}),!m.current)return;if(typeof y=="number"){o.go(y);return}let v=Tp(y,JSON.parse(d),c,x.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:bn([t,v.pathname])),(x.replace?o.replace:o.push)(v,x.state,x)},[t,o,d,c,e])}function o1(){let{matches:e}=k.useContext(Qr),t=e[e.length-1];return t?t.params:{}}function Fl(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=k.useContext(Kr),{matches:a}=k.useContext(Qr),{pathname:c}=no(),d=JSON.stringify(Ep(a,o.v7_relativeSplatPath));return k.useMemo(()=>Tp(e,JSON.parse(d),c,n==="path"),[e,d,c,n])}function n2(e,t){return i2(e,t)}function i2(e,t,n,o){ro()||Ze(!1);let{navigator:a}=k.useContext(Kr),{matches:c}=k.useContext(Qr),d=c[c.length-1],m=d?d.params:{};d&&d.pathname;let h=d?d.pathnameBase:"/";d&&d.route;let y=no(),x;if(t){var v;let z=typeof t=="string"?ni(t):t;h==="/"||(v=z.pathname)!=null&&v.startsWith(h)||Ze(!1),x=z}else x=y;let w=x.pathname||"/",C=w;if(h!=="/"){let z=h.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(z.length).join("/")}let T=T_(e,{pathname:C}),j=c2(T&&T.map(z=>Object.assign({},z,{params:Object.assign({},m,z.params),pathname:bn([h,a.encodeLocation?a.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?h:bn([h,a.encodeLocation?a.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),c,n,o);return t&&j?k.createElement(Ol.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:un.Pop}},j):j}function o2(){let e=h2(),t=J_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:a},n):null,null)}const a2=k.createElement(o2,null);class s2 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Qr.Provider,{value:this.props.routeContext},k.createElement(n1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l2(e){let{routeContext:t,match:n,children:o}=e,a=k.useContext(Rl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Qr.Provider,{value:t},o)}function c2(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var c;if(!n)return null;if(n.errors)e=n.matches;else if((c=o)!=null&&c.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let d=e,m=(a=n)==null?void 0:a.errors;if(m!=null){let x=d.findIndex(v=>v.route.id&&(m==null?void 0:m[v.route.id])!==void 0);x>=0||Ze(!1),d=d.slice(0,Math.min(d.length,x+1))}let h=!1,y=-1;if(n&&o&&o.v7_partialHydration)for(let x=0;x<d.length;x++){let v=d[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(y=x),v.route.id){let{loaderData:w,errors:C}=n,T=v.route.loader&&w[v.route.id]===void 0&&(!C||C[v.route.id]===void 0);if(v.route.lazy||T){h=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((x,v,w)=>{let C,T=!1,j=null,z=null;n&&(C=m&&v.route.id?m[v.route.id]:void 0,j=v.route.errorElement||a2,h&&(y<0&&w===0?(m2("route-fallback"),T=!0,z=null):y===w&&(T=!0,z=v.route.hydrateFallbackElement||null)));let _=t.concat(d.slice(0,w+1)),b=()=>{let $;return C?$=j:T?$=z:v.route.Component?$=k.createElement(v.route.Component,null):v.route.element?$=v.route.element:$=x,k.createElement(l2,{match:v,routeContext:{outlet:x,matches:_,isDataRoute:n!=null},children:$})};return n&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?k.createElement(s2,{location:n.location,revalidation:n.revalidation,component:j,error:C,children:b(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):b()},null)}var a1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(a1||{}),s1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(s1||{});function d2(e){let t=k.useContext(Rl);return t||Ze(!1),t}function u2(e){let t=k.useContext(r1);return t||Ze(!1),t}function p2(e){let t=k.useContext(Qr);return t||Ze(!1),t}function l1(e){let t=p2(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function h2(){var e;let t=k.useContext(n1),n=u2(),o=l1();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function f2(){let{router:e}=d2(a1.UseNavigateStable),t=l1(s1.UseNavigateStable),n=k.useRef(!1);return i1(()=>{n.current=!0}),k.useCallback(function(a,c){c===void 0&&(c={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,sa({fromRouteId:t},c)))},[e,t])}const Pm={};function m2(e,t,n){Pm[e]||(Pm[e]=!0)}function g2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zm(e){let{to:t,replace:n,state:o,relative:a}=e;ro()||Ze(!1);let{future:c,static:d}=k.useContext(Kr),{matches:m}=k.useContext(Qr),{pathname:h}=no(),y=Nl(),x=Tp(t,Ep(m,c.v7_relativeSplatPath),h,a==="path"),v=JSON.stringify(x);return k.useEffect(()=>y(JSON.parse(v),{replace:n,state:o,relative:a}),[y,v,a,n,o]),null}function Ke(e){Ze(!1)}function y2(e){let{basename:t="/",children:n=null,location:o,navigationType:a=un.Pop,navigator:c,static:d=!1,future:m}=e;ro()&&Ze(!1);let h=t.replace(/^\/*/,"/"),y=k.useMemo(()=>({basename:h,navigator:c,static:d,future:sa({v7_relativeSplatPath:!1},m)}),[h,m,c,d]);typeof o=="string"&&(o=ni(o));let{pathname:x="/",search:v="",hash:w="",state:C=null,key:T="default"}=o,j=k.useMemo(()=>{let z=qi(x,h);return z==null?null:{location:{pathname:z,search:v,hash:w,state:C,key:T},navigationType:a}},[h,x,v,w,C,T,a]);return j==null?null:k.createElement(Kr.Provider,{value:y},k.createElement(Ol.Provider,{children:n,value:j}))}function v2(e){let{children:t,location:n}=e;return n2(wu(t),n)}new Promise(()=>{});function wu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(o,a)=>{if(!k.isValidElement(o))return;let c=[...t,a];if(o.type===k.Fragment){n.push.apply(n,wu(o.props.children,c));return}o.type!==Ke&&Ze(!1),!o.props.index||!o.props.children||Ze(!1);let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=wu(o.props.children,c)),n.push(d)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},hl.apply(null,arguments)}function c1(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function x2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function b2(e,t){return e.button===0&&(!t||t==="_self")&&!x2(e)}const w2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],$2="6";try{window.__reactRouterVersion=$2}catch{}const k2=k.createContext({isTransitioning:!1}),S2="startTransition",Lm=hb[S2];function j2(e){let{basename:t,children:n,future:o,window:a}=e,c=k.useRef();c.current==null&&(c.current=z_({window:a,v5Compat:!0}));let d=c.current,[m,h]=k.useState({action:d.action,location:d.location}),{v7_startTransition:y}=o||{},x=k.useCallback(v=>{y&&Lm?Lm(()=>h(v)):h(v)},[h,y]);return k.useLayoutEffect(()=>d.listen(x),[d,x]),k.useEffect(()=>g2(o),[o]),k.createElement(y2,{basename:t,children:n,location:m.location,navigationType:m.action,navigator:d,future:o})}const C2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=k.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:c,replace:d,state:m,target:h,to:y,preventScrollReset:x,viewTransition:v}=t,w=c1(t,w2),{basename:C}=k.useContext(Kr),T,j=!1;if(typeof y=="string"&&P2.test(y)&&(T=y,C2))try{let $=new URL(window.location.href),A=y.startsWith("//")?new URL($.protocol+y):new URL(y),E=qi(A.pathname,C);A.origin===$.origin&&E!=null?y=E+A.search+A.hash:j=!0}catch{}let z=t2(y,{relative:a}),_=L2(y,{replace:d,state:m,target:h,preventScrollReset:x,relative:a,viewTransition:v});function b($){o&&o($),$.defaultPrevented||_($)}return k.createElement("a",hl({},w,{href:T||z,onClick:j||c?o:b,ref:n,target:h}))}),ma=k.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:a=!1,className:c="",end:d=!1,style:m,to:h,viewTransition:y,children:x}=t,v=c1(t,_2),w=Fl(h,{relative:v.relative}),C=no(),T=k.useContext(r1),{navigator:j,basename:z}=k.useContext(Kr),_=T!=null&&E2(w)&&y===!0,b=j.encodeLocation?j.encodeLocation(w).pathname:w.pathname,$=C.pathname,A=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||($=$.toLowerCase(),A=A?A.toLowerCase():null,b=b.toLowerCase()),A&&z&&(A=qi(A,z)||A);const E=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let N=$===b||!d&&$.startsWith(b)&&$.charAt(E)==="/",Z=A!=null&&(A===b||!d&&A.startsWith(b)&&A.charAt(b.length)==="/"),W={isActive:N,isPending:Z,isTransitioning:_},ae=N?o:void 0,Y;typeof c=="function"?Y=c(W):Y=[c,N?"active":null,Z?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let oe=typeof m=="function"?m(W):m;return k.createElement(Ge,hl({},v,{"aria-current":ae,className:Y,ref:n,style:oe,to:h,viewTransition:y}),typeof x=="function"?x(W):x)});var _u;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_u||(_u={}));var Em;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Em||(Em={}));function z2(e){let t=k.useContext(Rl);return t||Ze(!1),t}function L2(e,t){let{target:n,replace:o,state:a,preventScrollReset:c,relative:d,viewTransition:m}=t===void 0?{}:t,h=Nl(),y=no(),x=Fl(e,{relative:d});return k.useCallback(v=>{if(b2(v,n)){v.preventDefault();let w=o!==void 0?o:pl(y)===pl(x);h(e,{replace:w,state:a,preventScrollReset:c,relative:d,viewTransition:m})}},[y,h,x,o,a,n,e,c,d,m])}function E2(e,t){t===void 0&&(t={});let n=k.useContext(k2);n==null&&Ze(!1);let{basename:o}=z2(_u.useViewTransitionState),a=Fl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let c=qi(n.currentLocation.pathname,o)||n.currentLocation.pathname,d=qi(n.nextLocation.pathname,o)||n.nextLocation.pathname;return bu(a.pathname,d)!=null||bu(a.pathname,c)!=null}var d1={exports:{}},Le={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=Symbol.for("react.transitional.element"),Ap=Symbol.for("react.portal"),Bl=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),Zl=Symbol.for("react.consumer"),Ul=Symbol.for("react.context"),Vl=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),ql=Symbol.for("react.memo"),Yl=Symbol.for("react.lazy"),T2=Symbol.for("react.view_transition"),M2=Symbol.for("react.client.reference");function ar(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mp:switch(e=e.type,e){case Bl:case Hl:case Dl:case Wl:case Gl:case T2:return e;default:switch(e=e&&e.$$typeof,e){case Ul:case Vl:case Yl:case ql:return e;case Zl:return e;default:return t}}case Ap:return t}}}Le.ContextConsumer=Zl;Le.ContextProvider=Ul;Le.Element=Mp;Le.ForwardRef=Vl;Le.Fragment=Bl;Le.Lazy=Yl;Le.Memo=ql;Le.Portal=Ap;Le.Profiler=Hl;Le.StrictMode=Dl;Le.Suspense=Wl;Le.SuspenseList=Gl;Le.isContextConsumer=function(e){return ar(e)===Zl};Le.isContextProvider=function(e){return ar(e)===Ul};Le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mp};Le.isForwardRef=function(e){return ar(e)===Vl};Le.isFragment=function(e){return ar(e)===Bl};Le.isLazy=function(e){return ar(e)===Yl};Le.isMemo=function(e){return ar(e)===ql};Le.isPortal=function(e){return ar(e)===Ap};Le.isProfiler=function(e){return ar(e)===Hl};Le.isStrictMode=function(e){return ar(e)===Dl};Le.isSuspense=function(e){return ar(e)===Wl};Le.isSuspenseList=function(e){return ar(e)===Gl};Le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Bl||e===Hl||e===Dl||e===Wl||e===Gl||typeof e=="object"&&e!==null&&(e.$$typeof===Yl||e.$$typeof===ql||e.$$typeof===Ul||e.$$typeof===Zl||e.$$typeof===Vl||e.$$typeof===M2||e.getModuleId!==void 0)};Le.typeOf=ar;d1.exports=Le;var u1=d1.exports;function A2(e){function t(D,I,F,G,P){for(var de=0,q=0,Me=0,ve=0,we,se,qe=0,xt=0,ge,ot=ge=we=0,xe=0,Ve=0,Tn=0,et=0,Xr=F.length,Jr=Xr-1,Lt,le="",Fe="",Mn="",si="",sr;xe<Xr;){if(se=F.charCodeAt(xe),xe===Jr&&q+ve+Me+de!==0&&(q!==0&&(se=q===47?10:47),ve=Me=de=0,Xr++,Jr++),q+ve+Me+de===0){if(xe===Jr&&(0<Ve&&(le=le.replace(w,"")),0<le.trim().length)){switch(se){case 32:case 9:case 59:case 13:case 10:break;default:le+=F.charAt(xe)}se=59}switch(se){case 123:for(le=le.trim(),we=le.charCodeAt(0),ge=1,et=++xe;xe<Xr;){switch(se=F.charCodeAt(xe)){case 123:ge++;break;case 125:ge--;break;case 47:switch(se=F.charCodeAt(xe+1)){case 42:case 47:e:{for(ot=xe+1;ot<Jr;++ot)switch(F.charCodeAt(ot)){case 47:if(se===42&&F.charCodeAt(ot-1)===42&&xe+2!==ot){xe=ot+1;break e}break;case 10:if(se===47){xe=ot+1;break e}}xe=ot}}break;case 91:se++;case 40:se++;case 34:case 39:for(;xe++<Jr&&F.charCodeAt(xe)!==se;);}if(ge===0)break;xe++}switch(ge=F.substring(et,xe),we===0&&(we=(le=le.replace(v,"").trim()).charCodeAt(0)),we){case 64:switch(0<Ve&&(le=le.replace(w,"")),se=le.charCodeAt(1),se){case 100:case 109:case 115:case 45:Ve=I;break;default:Ve=re}if(ge=t(I,Ve,ge,se,P+1),et=ge.length,0<O&&(Ve=n(re,le,Tn),sr=m(3,ge,Ve,I,ke,pe,et,se,P,G),le=Ve.join(""),sr!==void 0&&(et=(ge=sr.trim()).length)===0&&(se=0,ge="")),0<et)switch(se){case 115:le=le.replace(N,d);case 100:case 109:case 45:ge=le+"{"+ge+"}";break;case 107:le=le.replace(b,"$1 $2"),ge=le+"{"+ge+"}",ge=ne===1||ne===2&&c("@"+ge,3)?"@-webkit-"+ge+"@"+ge:"@"+ge;break;default:ge=le+ge,G===112&&(ge=(Fe+=ge,""))}else ge="";break;default:ge=t(I,n(I,le,Tn),ge,G,P+1)}Mn+=ge,ge=Tn=Ve=ot=we=0,le="",se=F.charCodeAt(++xe);break;case 125:case 59:if(le=(0<Ve?le.replace(w,""):le).trim(),1<(et=le.length))switch(ot===0&&(we=le.charCodeAt(0),we===45||96<we&&123>we)&&(et=(le=le.replace(" ",":")).length),0<O&&(sr=m(1,le,I,D,ke,pe,Fe.length,G,P,G))!==void 0&&(et=(le=sr.trim()).length)===0&&(le="\0\0"),we=le.charCodeAt(0),se=le.charCodeAt(1),we){case 0:break;case 64:if(se===105||se===99){si+=le+F.charAt(xe);break}default:le.charCodeAt(et-1)!==58&&(Fe+=a(le,we,se,le.charCodeAt(2)))}Tn=Ve=ot=we=0,le="",se=F.charCodeAt(++xe)}}switch(se){case 13:case 10:q===47?q=0:1+we===0&&G!==107&&0<le.length&&(Ve=1,le+="\0"),0<O*U&&m(0,le,I,D,ke,pe,Fe.length,G,P,G),pe=1,ke++;break;case 59:case 125:if(q+ve+Me+de===0){pe++;break}default:switch(pe++,Lt=F.charAt(xe),se){case 9:case 32:if(ve+de+q===0)switch(qe){case 44:case 58:case 9:case 32:Lt="";break;default:se!==32&&(Lt=" ")}break;case 0:Lt="\\0";break;case 12:Lt="\\f";break;case 11:Lt="\\v";break;case 38:ve+q+de===0&&(Ve=Tn=1,Lt="\f"+Lt);break;case 108:if(ve+q+de+H===0&&0<ot)switch(xe-ot){case 2:qe===112&&F.charCodeAt(xe-3)===58&&(H=qe);case 8:xt===111&&(H=xt)}break;case 58:ve+q+de===0&&(ot=xe);break;case 44:q+Me+ve+de===0&&(Ve=1,Lt+="\r");break;case 34:case 39:q===0&&(ve=ve===se?0:ve===0?se:ve);break;case 91:ve+q+Me===0&&de++;break;case 93:ve+q+Me===0&&de--;break;case 41:ve+q+de===0&&Me--;break;case 40:if(ve+q+de===0){if(we===0)switch(2*qe+3*xt){case 533:break;default:we=1}Me++}break;case 64:q+Me+ve+de+ot+ge===0&&(ge=1);break;case 42:case 47:if(!(0<ve+de+Me))switch(q){case 0:switch(2*se+3*F.charCodeAt(xe+1)){case 235:q=47;break;case 220:et=xe,q=42}break;case 42:se===47&&qe===42&&et+2!==xe&&(F.charCodeAt(et+2)===33&&(Fe+=F.substring(et,xe+1)),Lt="",q=0)}}q===0&&(le+=Lt)}xt=qe,qe=se,xe++}if(et=Fe.length,0<et){if(Ve=I,0<O&&(sr=m(2,Fe,Ve,D,ke,pe,et,G,P,G),sr!==void 0&&(Fe=sr).length===0))return si+Fe+Mn;if(Fe=Ve.join(",")+"{"+Fe+"}",ne*H!==0){switch(ne!==2||c(Fe,2)||(H=0),H){case 111:Fe=Fe.replace(A,":-moz-$1")+Fe;break;case 112:Fe=Fe.replace($,"::-webkit-input-$1")+Fe.replace($,"::-moz-$1")+Fe.replace($,":-ms-input-$1")+Fe}H=0}}return si+Fe+Mn}function n(D,I,F){var G=I.trim().split(z);I=G;var P=G.length,de=D.length;switch(de){case 0:case 1:var q=0;for(D=de===0?"":D[0]+" ";q<P;++q)I[q]=o(D,I[q],F).trim();break;default:var Me=q=0;for(I=[];q<P;++q)for(var ve=0;ve<de;++ve)I[Me++]=o(D[ve]+" ",G[q],F).trim()}return I}function o(D,I,F){var G=I.charCodeAt(0);switch(33>G&&(G=(I=I.trim()).charCodeAt(0)),G){case 38:return I.replace(_,"$1"+D.trim());case 58:return D.trim()+I.replace(_,"$1"+D.trim());default:if(0<1*F&&0<I.indexOf("\f"))return I.replace(_,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+I}function a(D,I,F,G){var P=D+";",de=2*I+3*F+4*G;if(de===944){D=P.indexOf(":",9)+1;var q=P.substring(D,P.length-1).trim();return q=P.substring(0,D).trim()+q+";",ne===1||ne===2&&c(q,1)?"-webkit-"+q+q:q}if(ne===0||ne===2&&!c(P,1))return P;switch(de){case 1015:return P.charCodeAt(10)===97?"-webkit-"+P+P:P;case 951:return P.charCodeAt(3)===116?"-webkit-"+P+P:P;case 963:return P.charCodeAt(5)===110?"-webkit-"+P+P:P;case 1009:if(P.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+P+P;case 978:return"-webkit-"+P+"-moz-"+P+P;case 1019:case 983:return"-webkit-"+P+"-moz-"+P+"-ms-"+P+P;case 883:if(P.charCodeAt(8)===45)return"-webkit-"+P+P;if(0<P.indexOf("image-set(",11))return P.replace(oe,"$1-webkit-$2")+P;break;case 932:if(P.charCodeAt(4)===45)switch(P.charCodeAt(5)){case 103:return"-webkit-box-"+P.replace("-grow","")+"-webkit-"+P+"-ms-"+P.replace("grow","positive")+P;case 115:return"-webkit-"+P+"-ms-"+P.replace("shrink","negative")+P;case 98:return"-webkit-"+P+"-ms-"+P.replace("basis","preferred-size")+P}return"-webkit-"+P+"-ms-"+P+P;case 964:return"-webkit-"+P+"-ms-flex-"+P+P;case 1023:if(P.charCodeAt(8)!==99)break;return q=P.substring(P.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+q+"-webkit-"+P+"-ms-flex-pack"+q+P;case 1005:return T.test(P)?P.replace(C,":-webkit-")+P.replace(C,":-moz-")+P:P;case 1e3:switch(q=P.substring(13).trim(),I=q.indexOf("-")+1,q.charCodeAt(0)+q.charCodeAt(I)){case 226:q=P.replace(E,"tb");break;case 232:q=P.replace(E,"tb-rl");break;case 220:q=P.replace(E,"lr");break;default:return P}return"-webkit-"+P+"-ms-"+q+P;case 1017:if(P.indexOf("sticky",9)===-1)break;case 975:switch(I=(P=D).length-10,q=(P.charCodeAt(I)===33?P.substring(0,I):P).substring(D.indexOf(":",7)+1).trim(),de=q.charCodeAt(0)+(q.charCodeAt(7)|0)){case 203:if(111>q.charCodeAt(8))break;case 115:P=P.replace(q,"-webkit-"+q)+";"+P;break;case 207:case 102:P=P.replace(q,"-webkit-"+(102<de?"inline-":"")+"box")+";"+P.replace(q,"-webkit-"+q)+";"+P.replace(q,"-ms-"+q+"box")+";"+P}return P+";";case 938:if(P.charCodeAt(5)===45)switch(P.charCodeAt(6)){case 105:return q=P.replace("-items",""),"-webkit-"+P+"-webkit-box-"+q+"-ms-flex-"+q+P;case 115:return"-webkit-"+P+"-ms-flex-item-"+P.replace(W,"")+P;default:return"-webkit-"+P+"-ms-flex-line-pack"+P.replace("align-content","").replace(W,"")+P}break;case 973:case 989:if(P.charCodeAt(3)!==45||P.charCodeAt(4)===122)break;case 931:case 953:if(Y.test(D)===!0)return(q=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?a(D.replace("stretch","fill-available"),I,F,G).replace(":fill-available",":stretch"):P.replace(q,"-webkit-"+q)+P.replace(q,"-moz-"+q.replace("fill-",""))+P;break;case 962:if(P="-webkit-"+P+(P.charCodeAt(5)===102?"-ms-"+P:"")+P,F+G===211&&P.charCodeAt(13)===105&&0<P.indexOf("transform",10))return P.substring(0,P.indexOf(";",27)+1).replace(j,"$1-webkit-$2")+P}return P}function c(D,I){var F=D.indexOf(I===1?":":"{"),G=D.substring(0,I!==3?F:10);return F=D.substring(F+1,D.length-1),J(I!==2?G:G.replace(ae,"$1"),F,I)}function d(D,I){var F=a(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return F!==I+";"?F.replace(Z," or ($1)").substring(4):"("+I+")"}function m(D,I,F,G,P,de,q,Me,ve,we){for(var se=0,qe=I,xt;se<O;++se)switch(xt=ye[se].call(x,D,qe,F,G,P,de,q,Me,ve,we)){case void 0:case!1:case!0:case null:break;default:qe=xt}if(qe!==I)return qe}function h(D){switch(D){case void 0:case null:O=ye.length=0;break;default:if(typeof D=="function")ye[O++]=D;else if(typeof D=="object")for(var I=0,F=D.length;I<F;++I)h(D[I]);else U=!!D|0}return h}function y(D){return D=D.prefix,D!==void 0&&(J=null,D?typeof D!="function"?ne=1:(ne=2,J=D):ne=0),y}function x(D,I){var F=D;if(33>F.charCodeAt(0)&&(F=F.trim()),ee=F,F=[ee],0<O){var G=m(-1,I,F,F,ke,pe,0,0,0,0);G!==void 0&&typeof G=="string"&&(I=G)}var P=t(re,F,I,0,0);return 0<O&&(G=m(-2,P,F,F,ke,pe,P.length,0,0,0),G!==void 0&&(P=G)),ee="",H=0,pe=ke=1,P}var v=/^\0+/g,w=/[\0\r\f]/g,C=/: */g,T=/zoo|gra/,j=/([,: ])(transform)/g,z=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,$=/::(place)/g,A=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,Z=/([\s\S]*?);/g,W=/-self|flex-/g,ae=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Y=/stretch|:\s*\w+\-(?:conte|avail)/,oe=/([^-])(image-set\()/,pe=1,ke=1,H=0,ne=1,re=[],ye=[],O=0,J=null,U=0,ee="";return x.use=h,x.set=y,e!==void 0&&y(e),x}var I2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function R2(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var O2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Tm=R2(function(e){return O2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),p1={exports:{}},je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,Ip=pt?Symbol.for("react.element"):60103,Rp=pt?Symbol.for("react.portal"):60106,Kl=pt?Symbol.for("react.fragment"):60107,Ql=pt?Symbol.for("react.strict_mode"):60108,Xl=pt?Symbol.for("react.profiler"):60114,Jl=pt?Symbol.for("react.provider"):60109,ec=pt?Symbol.for("react.context"):60110,Op=pt?Symbol.for("react.async_mode"):60111,tc=pt?Symbol.for("react.concurrent_mode"):60111,rc=pt?Symbol.for("react.forward_ref"):60112,nc=pt?Symbol.for("react.suspense"):60113,N2=pt?Symbol.for("react.suspense_list"):60120,ic=pt?Symbol.for("react.memo"):60115,oc=pt?Symbol.for("react.lazy"):60116,F2=pt?Symbol.for("react.block"):60121,B2=pt?Symbol.for("react.fundamental"):60117,D2=pt?Symbol.for("react.responder"):60118,H2=pt?Symbol.for("react.scope"):60119;function Wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ip:switch(e=e.type,e){case Op:case tc:case Kl:case Xl:case Ql:case nc:return e;default:switch(e=e&&e.$$typeof,e){case ec:case rc:case oc:case ic:case Jl:return e;default:return t}}case Rp:return t}}}function h1(e){return Wt(e)===tc}je.AsyncMode=Op;je.ConcurrentMode=tc;je.ContextConsumer=ec;je.ContextProvider=Jl;je.Element=Ip;je.ForwardRef=rc;je.Fragment=Kl;je.Lazy=oc;je.Memo=ic;je.Portal=Rp;je.Profiler=Xl;je.StrictMode=Ql;je.Suspense=nc;je.isAsyncMode=function(e){return h1(e)||Wt(e)===Op};je.isConcurrentMode=h1;je.isContextConsumer=function(e){return Wt(e)===ec};je.isContextProvider=function(e){return Wt(e)===Jl};je.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ip};je.isForwardRef=function(e){return Wt(e)===rc};je.isFragment=function(e){return Wt(e)===Kl};je.isLazy=function(e){return Wt(e)===oc};je.isMemo=function(e){return Wt(e)===ic};je.isPortal=function(e){return Wt(e)===Rp};je.isProfiler=function(e){return Wt(e)===Xl};je.isStrictMode=function(e){return Wt(e)===Ql};je.isSuspense=function(e){return Wt(e)===nc};je.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Kl||e===tc||e===Xl||e===Ql||e===nc||e===N2||typeof e=="object"&&e!==null&&(e.$$typeof===oc||e.$$typeof===ic||e.$$typeof===Jl||e.$$typeof===ec||e.$$typeof===rc||e.$$typeof===B2||e.$$typeof===D2||e.$$typeof===H2||e.$$typeof===F2)};je.typeOf=Wt;p1.exports=je;var Z2=p1.exports,Np=Z2,U2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fp={};Fp[Np.ForwardRef]=W2;Fp[Np.Memo]=f1;function Mm(e){return Np.isMemo(e)?f1:Fp[e.$$typeof]||U2}var G2=Object.defineProperty,q2=Object.getOwnPropertyNames,Am=Object.getOwnPropertySymbols,Y2=Object.getOwnPropertyDescriptor,K2=Object.getPrototypeOf,Im=Object.prototype;function m1(e,t,n){if(typeof t!="string"){if(Im){var o=K2(t);o&&o!==Im&&m1(e,o,n)}var a=q2(t);Am&&(a=a.concat(Am(t)));for(var c=Mm(e),d=Mm(t),m=0;m<a.length;++m){var h=a[m];if(!V2[h]&&!(n&&n[h])&&!(d&&d[h])&&!(c&&c[h])){var y=Y2(t,h);try{G2(e,h,y)}catch{}}}}return e}var Q2=m1;const X2=Ru(Q2);var Qt={};function mr(){return(mr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Rm=function(e,t){for(var n=[e[0]],o=0,a=t.length;o<a;o+=1)n.push(t[o],e[o+1]);return n},$u=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!u1.typeOf(e)},fl=Object.freeze([]),wn=Object.freeze({});function Yi(e){return typeof e=="function"}function Om(e){return e.displayName||e.name||"Component"}function Bp(e){return e&&typeof e.styledComponentId=="string"}var Ki=typeof process<"u"&&Qt!==void 0&&(Qt.REACT_APP_SC_ATTR||Qt.SC_ATTR)||"data-styled",Dp=typeof window<"u"&&"HTMLElement"in window,J2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&(Qt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==""?Qt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qt.REACT_APP_SC_DISABLE_SPEEDY:Qt.SC_DISABLE_SPEEDY!==void 0&&Qt.SC_DISABLE_SPEEDY!==""&&Qt.SC_DISABLE_SPEEDY!=="false"&&Qt.SC_DISABLE_SPEEDY)),e$={};function Xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var t$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var o=0,a=0;a<n;a++)o+=this.groupSizes[a];return o},t.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var a=this.groupSizes,c=a.length,d=c;n>=d;)(d<<=1)<0&&Xn(16,""+n);this.groupSizes=new Uint32Array(d),this.groupSizes.set(a),this.length=d;for(var m=c;m<d;m++)this.groupSizes[m]=0}for(var h=this.indexOfGroup(n+1),y=0,x=o.length;y<x;y++)this.tag.insertRule(h,o[y])&&(this.groupSizes[n]++,h++)},t.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],a=this.indexOfGroup(n),c=a+o;this.groupSizes[n]=0;for(var d=a;d<c;d++)this.tag.deleteRule(a)}},t.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var a=this.groupSizes[n],c=this.indexOfGroup(n),d=c+a,m=c;m<d;m++)o+=this.tag.getRule(m)+`/*!sc*/
`;return o},e}(),Is=new Map,ml=new Map,Fo=1,rs=function(e){if(Is.has(e))return Is.get(e);for(;ml.has(Fo);)Fo++;var t=Fo++;return Is.set(e,t),ml.set(t,e),t},r$=function(e){return ml.get(e)},n$=function(e,t){t>=Fo&&(Fo=t+1),Is.set(e,t),ml.set(t,e)},i$="style["+Ki+'][data-styled-version="5.3.11"]',o$=new RegExp("^"+Ki+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),a$=function(e,t,n){for(var o,a=n.split(","),c=0,d=a.length;c<d;c++)(o=a[c])&&e.registerName(t,o)},s$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),o=[],a=0,c=n.length;a<c;a++){var d=n[a].trim();if(d){var m=d.match(o$);if(m){var h=0|parseInt(m[1],10),y=m[2];h!==0&&(n$(y,h),a$(e,y,m[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},l$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},g1=function(e){var t=document.head,n=e||t,o=document.createElement("style"),a=function(m){for(var h=m.childNodes,y=h.length;y>=0;y--){var x=h[y];if(x&&x.nodeType===1&&x.hasAttribute(Ki))return x}}(n),c=a!==void 0?a.nextSibling:null;o.setAttribute(Ki,"active"),o.setAttribute("data-styled-version","5.3.11");var d=l$();return d&&o.setAttribute("nonce",d),n.insertBefore(o,c),o},c$=function(){function e(n){var o=this.element=g1(n);o.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var h=c[d];if(h.ownerNode===a)return h}Xn(17)}(o),this.length=0}var t=e.prototype;return t.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var o=this.sheet.cssRules[n];return o!==void 0&&typeof o.cssText=="string"?o.cssText:""},e}(),d$=function(){function e(n){var o=this.element=g1(n);this.nodes=o.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,o){if(n<=this.length&&n>=0){var a=document.createTextNode(o),c=this.nodes[n];return this.element.insertBefore(a,c||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),u$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Nm=Dp,p$={isServer:!Dp,useCSSOMInjection:!J2},gl=function(){function e(n,o,a){n===void 0&&(n=wn),o===void 0&&(o={}),this.options=mr({},p$,{},n),this.gs=o,this.names=new Map(a),this.server=!!n.isServer,!this.server&&Dp&&Nm&&(Nm=!1,function(c){for(var d=document.querySelectorAll(i$),m=0,h=d.length;m<h;m++){var y=d[m];y&&y.getAttribute(Ki)!=="active"&&(s$(c,y),y.parentNode&&y.parentNode.removeChild(y))}}(this))}e.registerId=function(n){return rs(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new e(mr({},this.options,{},n),this.gs,o&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(o=this.options).isServer,c=o.useCSSOMInjection,d=o.target,n=a?new u$(d):c?new c$(d):new d$(d),new t$(n)));var n,o,a,c,d},t.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},t.registerName=function(n,o){if(rs(n),this.names.has(n))this.names.get(n).add(o);else{var a=new Set;a.add(o),this.names.set(n,a)}},t.insertRules=function(n,o,a){this.registerName(n,o),this.getTag().insertRules(rs(n),a)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(rs(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var o=n.getTag(),a=o.length,c="",d=0;d<a;d++){var m=r$(d);if(m!==void 0){var h=n.names.get(m),y=o.getGroup(d);if(h&&y&&h.size){var x=Ki+".g"+d+'[id="'+m+'"]',v="";h!==void 0&&h.forEach(function(w){w.length>0&&(v+=w+",")}),c+=""+y+x+'{content:"'+v+`"}/*!sc*/
`}}}return c}(this)},e}(),h$=/(a)(d)/gi,Fm=function(e){return String.fromCharCode(e+(e>25?39:97))};function ku(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fm(t%52)+n;return(Fm(t%52)+n).replace(h$,"$1-$2")}var Ti=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},y1=function(e){return Ti(5381,e)};function v1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yi(n)&&!Bp(n))return!1}return!0}var f$=y1("5.3.11"),m$=function(){function e(t,n,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&v1(t),this.componentId=n,this.baseHash=Ti(f$,n),this.baseStyle=o,gl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,o){var a=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(t,n,o)),this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(a,this.staticRulesId))c.push(this.staticRulesId);else{var d=Jn(this.rules,t,n,o).join(""),m=ku(Ti(this.baseHash,d)>>>0);if(!n.hasNameForId(a,m)){var h=o(d,"."+m,void 0,a);n.insertRules(a,m,h)}c.push(m),this.staticRulesId=m}else{for(var y=this.rules.length,x=Ti(this.baseHash,o.hash),v="",w=0;w<y;w++){var C=this.rules[w];if(typeof C=="string")v+=C;else if(C){var T=Jn(C,t,n,o),j=Array.isArray(T)?T.join(""):T;x=Ti(x,j+w),v+=j}}if(v){var z=ku(x>>>0);if(!n.hasNameForId(a,z)){var _=o(v,"."+z,void 0,a);n.insertRules(a,z,_)}c.push(z)}}return c.join(" ")},e}(),g$=/^\s*\/\/.*$/gm,y$=[":","[",".","#"];function v$(e){var t,n,o,a,c=wn,d=c.options,m=d===void 0?wn:d,h=c.plugins,y=h===void 0?fl:h,x=new A2(m),v=[],w=function(j){function z(_){if(_)try{j(_+"}")}catch{}}return function(_,b,$,A,E,N,Z,W,ae,Y){switch(_){case 1:if(ae===0&&b.charCodeAt(0)===64)return j(b+";"),"";break;case 2:if(W===0)return b+"/*|*/";break;case 3:switch(W){case 102:case 112:return j($[0]+b),"";default:return b+(Y===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(z)}}}(function(j){v.push(j)}),C=function(j,z,_){return z===0&&y$.indexOf(_[n.length])!==-1||_.match(a)?j:"."+t};function T(j,z,_,b){b===void 0&&(b="&");var $=j.replace(g$,""),A=z&&_?_+" "+z+" { "+$+" }":$;return t=b,n=z,o=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),x(_||!z?"":z,A)}return x.use([].concat(y,[function(j,z,_){j===2&&_.length&&_[0].lastIndexOf(n)>0&&(_[0]=_[0].replace(o,C))},w,function(j){if(j===-2){var z=v;return v=[],z}}])),T.hash=y.length?y.reduce(function(j,z){return z.name||Xn(15),Ti(j,z.name)},5381).toString():"",T}var x1=Sn.createContext();x1.Consumer;var b1=Sn.createContext(),x$=(b1.Consumer,new gl),Su=v$();function w1(){return k.useContext(x1)||x$}function _1(){return k.useContext(b1)||Su}var $1=function(){function e(t,n){var o=this;this.inject=function(a,c){c===void 0&&(c=Su);var d=o.name+c.hash;a.hasNameForId(o.id,d)||a.insertRules(o.id,d,c(o.rules,d,"@keyframes"))},this.toString=function(){return Xn(12,String(o.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Su),this.name+t.hash},e}(),b$=/([A-Z])/,w$=/([A-Z])/g,_$=/^ms-/,$$=function(e){return"-"+e.toLowerCase()};function Bm(e){return b$.test(e)?e.replace(w$,$$).replace(_$,"-ms-"):e}var Dm=function(e){return e==null||e===!1||e===""};function Jn(e,t,n,o){if(Array.isArray(e)){for(var a,c=[],d=0,m=e.length;d<m;d+=1)(a=Jn(e[d],t,n,o))!==""&&(Array.isArray(a)?c.push.apply(c,a):c.push(a));return c}if(Dm(e))return"";if(Bp(e))return"."+e.styledComponentId;if(Yi(e)){if(typeof(y=e)!="function"||y.prototype&&y.prototype.isReactComponent||!t)return e;var h=e(t);return Jn(h,t,n,o)}var y;return e instanceof $1?n?(e.inject(n,o),e.getName(o)):e:$u(e)?function x(v,w){var C,T,j=[];for(var z in v)v.hasOwnProperty(z)&&!Dm(v[z])&&(Array.isArray(v[z])&&v[z].isCss||Yi(v[z])?j.push(Bm(z)+":",v[z],";"):$u(v[z])?j.push.apply(j,x(v[z],z)):j.push(Bm(z)+": "+(C=z,(T=v[z])==null||typeof T=="boolean"||T===""?"":typeof T!="number"||T===0||C in I2||C.startsWith("--")?String(T).trim():T+"px")+";"));return w?[w+" {"].concat(j,["}"]):j}(e):e.toString()}var Hm=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return Yi(e)||$u(e)?Hm(Jn(Rm(fl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Hm(Jn(Rm(e,n)))}var k1=function(e,t,n){return n===void 0&&(n=wn),e.theme!==n.theme&&e.theme||t||n.theme},k$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,S$=/(^-|-$)/g;function hd(e){return e.replace(k$,"-").replace(S$,"")}var Hp=function(e){return ku(y1(e)>>>0)};function ns(e){return typeof e=="string"&&!0}var ju=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},j$=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function C$(e,t,n){var o=e[n];ju(t)&&ju(o)?S1(o,t):e[n]=t}function S1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];for(var a=0,c=n;a<c.length;a++){var d=c[a];if(ju(d))for(var m in d)j$(m)&&C$(e,d[m],m)}return e}var la=Sn.createContext();la.Consumer;function P$(e){var t=k.useContext(la),n=k.useMemo(function(){return function(o,a){if(!o)return Xn(14);if(Yi(o)){var c=o(a);return c}return Array.isArray(o)||typeof o!="object"?Xn(8):a?mr({},a,{},o):o}(e.theme,t)},[e.theme,t]);return e.children?Sn.createElement(la.Provider,{value:n},e.children):null}var fd={};function j1(e,t,n){var o=Bp(e),a=!ns(e),c=t.attrs,d=c===void 0?fl:c,m=t.componentId,h=m===void 0?function(b,$){var A=typeof b!="string"?"sc":hd(b);fd[A]=(fd[A]||0)+1;var E=A+"-"+Hp("5.3.11"+A+fd[A]);return $?$+"-"+E:E}(t.displayName,t.parentComponentId):m,y=t.displayName,x=y===void 0?function(b){return ns(b)?"styled."+b:"Styled("+Om(b)+")"}(e):y,v=t.displayName&&t.componentId?hd(t.displayName)+"-"+t.componentId:t.componentId||h,w=o&&e.attrs?Array.prototype.concat(e.attrs,d).filter(Boolean):d,C=t.shouldForwardProp;o&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(b,$,A){return e.shouldForwardProp(b,$,A)&&t.shouldForwardProp(b,$,A)}:e.shouldForwardProp);var T,j=new m$(n,v,o?e.componentStyle:void 0),z=j.isStatic&&d.length===0,_=function(b,$){return function(A,E,N,Z){var W=A.attrs,ae=A.componentStyle,Y=A.defaultProps,oe=A.foldedComponentIds,pe=A.shouldForwardProp,ke=A.styledComponentId,H=A.target,ne=function(G,P,de){G===void 0&&(G=wn);var q=mr({},P,{theme:G}),Me={};return de.forEach(function(ve){var we,se,qe,xt=ve;for(we in Yi(xt)&&(xt=xt(q)),xt)q[we]=Me[we]=we==="className"?(se=Me[we],qe=xt[we],se&&qe?se+" "+qe:se||qe):xt[we]}),[q,Me]}(k1(E,k.useContext(la),Y)||wn,E,W),re=ne[0],ye=ne[1],O=function(G,P,de,q){var Me=w1(),ve=_1(),we=P?G.generateAndInjectStyles(wn,Me,ve):G.generateAndInjectStyles(de,Me,ve);return we}(ae,Z,re),J=N,U=ye.$as||E.$as||ye.as||E.as||H,ee=ns(U),D=ye!==E?mr({},E,{},ye):E,I={};for(var F in D)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?I.as=D[F]:(pe?pe(F,Tm,U):!ee||Tm(F))&&(I[F]=D[F]));return E.style&&ye.style!==E.style&&(I.style=mr({},E.style,{},ye.style)),I.className=Array.prototype.concat(oe,ke,O!==ke?O:null,E.className,ye.className).filter(Boolean).join(" "),I.ref=J,k.createElement(U,I)}(T,b,$,z)};return _.displayName=x,(T=Sn.forwardRef(_)).attrs=w,T.componentStyle=j,T.displayName=x,T.shouldForwardProp=C,T.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):fl,T.styledComponentId=v,T.target=o?e.target:e,T.withComponent=function(b){var $=t.componentId,A=function(N,Z){if(N==null)return{};var W,ae,Y={},oe=Object.keys(N);for(ae=0;ae<oe.length;ae++)W=oe[ae],Z.indexOf(W)>=0||(Y[W]=N[W]);return Y}(t,["componentId"]),E=$&&$+"-"+(ns(b)?b:hd(Om(b)));return j1(b,mr({},A,{attrs:w,componentId:E}),n)},Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=o?S1({},e.defaultProps,b):b}}),Object.defineProperty(T,"toString",{value:function(){return"."+T.styledComponentId}}),a&&X2(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),T}var u=function(e){return function t(n,o,a){if(a===void 0&&(a=wn),!u1.isValidElementType(o))return Xn(1,String(o));var c=function(){return n(o,a,Ce.apply(void 0,arguments))};return c.withConfig=function(d){return t(n,o,mr({},a,{},d))},c.attrs=function(d){return t(n,o,mr({},a,{attrs:Array.prototype.concat(a.attrs,d).filter(Boolean)}))},c}(j1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){u[e]=u(e)});var z$=function(){function e(n,o){this.rules=n,this.componentId=o,this.isStatic=v1(n),gl.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,o,a,c){var d=c(Jn(this.rules,o,a,c).join(""),""),m=this.componentId+n;a.insertRules(m,m,d)},t.removeStyles=function(n,o){o.clearRules(this.componentId+n)},t.renderStyles=function(n,o,a,c){n>2&&gl.registerId(this.componentId+n),this.removeStyles(n,a),this.createStyles(n,o,a,c)},e}();function L$(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a=Ce.apply(void 0,[e].concat(n)),c="sc-global-"+Hp(JSON.stringify(a)),d=new z$(a,c);function m(y){var x=w1(),v=_1(),w=k.useContext(la),C=k.useRef(x.allocateGSInstance(c)).current;return x.server&&h(C,y,x,w,v),k.useLayoutEffect(function(){if(!x.server)return h(C,y,x,w,v),function(){return d.removeStyles(C,x)}},[C,y,x,w,v]),null}function h(y,x,v,w,C){if(d.isStatic)d.renderStyles(y,e$,v,C);else{var T=mr({},x,{theme:k1(x,w,m.defaultProps)});d.renderStyles(y,T,v,C)}}return Sn.memo(m)}function zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a=Ce.apply(void 0,[e].concat(n)).join(""),c=Hp(a);return new $1(c,a)}const E$=L$`
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
`,nn={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)",neon:"#0047E7",neonSoft:"rgba(0, 71, 231, 0.28)"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"clamp(3.5rem, 8vw, 6rem)",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},T$=nn.shadow,M$={primary:"#4D8BFF",primaryHover:"#6BA0FF",primaryActive:"#3D7BF0",brand:"#0047E7",brandHover:"#1F5CEC",brandActive:"#0038B8",primarySoft:"#152449",background:"#0C111D",backgroundAlt:"#111827",surface:"#151C2C",surfaceMuted:"#1C2537",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F3F6FC",textMuted:"#AFBCD2",textSoft:"#8493AC",textInverse:"#FFFFFF",border:"#26314A",borderStrong:"#36435E",shadow:"rgba(0, 0, 0, 0.42)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#FBBF24",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.32), transparent 55%)",neon:"#4DE5FF",neonSoft:"rgba(77, 229, 255, 0.275)"},A$={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(0, 71, 231, 0.42), 0 24px 48px rgba(0, 71, 231, 0.28)"},I$=e=>({mode:e,color:e==="dark"?M$:nn.color,typography:nn.typography,spacing:nn.spacing,radius:nn.radius,shadow:e==="dark"?A$:T$,layout:nn.layout,breakpoints:nn.breakpoints,zIndex:nn.zIndex}),C1="lafranciago-theme-mode",P1=k.createContext(null),R$=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(C1);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function O$({children:e}){const[t,n]=k.useState(R$),o=k.useRef(!1);k.useEffect(()=>{if(window.localStorage.setItem(C1,t),document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,!o.current){o.current=!0;return}document.documentElement.dataset.themeTransition="true";const h=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(h),delete document.documentElement.dataset.themeTransition}},[t]);const a=k.useCallback(()=>{n(h=>h==="light"?"dark":"light")},[]),c=k.useCallback(h=>{n(h)},[]),d=k.useMemo(()=>I$(t),[t]),m=k.useMemo(()=>({mode:t,isDarkMode:t==="dark",toggleMode:a,setMode:c}),[t,c,a]);return s.jsx(P1.Provider,{value:m,children:s.jsxs(P$,{theme:d,children:[s.jsx(E$,{}),e]})})}function N$(){const e=k.useContext(P1);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F$={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B$=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(e,t)=>{const n=k.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:m="",children:h,...y},x)=>k.createElement("svg",{ref:x,...F$,width:a,height:a,stroke:o,strokeWidth:d?Number(c)*24/Number(a):c,className:["lucide",`lucide-${B$(e)}`,m].join(" "),...y},[...t.map(([v,w])=>k.createElement(v,w)),...Array.isArray(h)?h:[h]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D$=Q("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H$=Q("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z$=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Q("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U$=Q("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Q("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=Q("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Q("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Q("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V$=Q("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W$=Q("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G$=Q("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q$=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=Q("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Q("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y$=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Q("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Q("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=Q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Q("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Q("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Q("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K$=Q("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=Q("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Q("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q$=Q("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X$=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=Q("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J$=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=Q("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Q("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Q("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=Q("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=Q("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=Q("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=Q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=Q("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=Q("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Q("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=Q("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=Q("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Q("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=Q("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=Q("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Q("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Q("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=Q("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=Q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=Q("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Q("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=Q("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=Q("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=Q("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=Q("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=Q("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Q("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=Q("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=Q("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Q("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function q1({size:e=18,...t}){return s.jsxs("svg",{...t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[s.jsx("path",{d:"M1.5 10.5h4"}),s.jsx("path",{d:"M3 14h3.5"}),s.jsx("circle",{cx:"10.5",cy:"17",r:"3"}),s.jsx("circle",{cx:"19.5",cy:"17",r:"3"}),s.jsx("path",{d:"M10.5 17h2.2l2.1-4.2h3.1l1.6 3.4"}),s.jsx("path",{d:"M14.4 12.8l1.2-2h2.6"}),s.jsx("path",{d:"M17.4 8.2h2.6"})]})}const dk="https://photon.komoot.io/api/",uk="https://nominatim.openstreetmap.org/reverse",Pu={lat:-31.4063691,lon:-62.6332043},md=e=>e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),pk=e=>[e.street??e.name,e.housenumber].filter(Boolean).join(" ")||e.name||"Sin nombre",hk=e=>[e.city??e.county,e.state,e.country].filter(Boolean).join(", ");async function fk(e,t){const n=e.trim();if(n.length<2)return[];const o=new URLSearchParams({q:n,limit:"12",lat:String(Pu.lat),lon:String(Pu.lon)});try{const a=await fetch(`${dk}?${o.toString()}`,{signal:t});return a.ok?((await a.json()).features??[]).map((d,m)=>{var v;const h=d.properties??{},[y,x]=((v=d.geometry)==null?void 0:v.coordinates)??[];return typeof x!="number"||typeof y!="number"?null:{id:`${h.type??"geo"}-${m}-${x}-${y}`,label:pk(h),context:hk(h),lat:x,lon:y}}).filter(d=>d!==null).sort((d,m)=>{const h=md(n),y=md(d.label).startsWith(h),x=md(m.label).startsWith(h);return y!==x?y?-1:1:0}).slice(0,6):[]}catch{return[]}}async function mk(e,t,n){const o=new URLSearchParams({format:"json",lat:String(e),lon:String(t),zoom:"18","accept-language":"es"});try{const a=await fetch(`${uk}?${o.toString()}`,{signal:n});if(!a.ok)return null;const d=(await a.json()).address??{};return[d.road,d.house_number].filter(Boolean).join(" ")||d.neighbourhood||d.city||null}catch{return null}}const gk=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],yk=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:H1},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:or},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:I1},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Vp},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Zp},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:O1},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:W1},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:G$},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:qp},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Z1},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:A1},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:R1},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:D1},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:G1}],Y1=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],K1=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],ya=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:or,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Vp,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",name:"Farmacia Centro",category:"Salud y perfumería",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:qp,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",name:"Carnicería Central",category:"Cortes y frescos",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:Zp,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Q1=[{id:"cart-1",product:"Coca Cola 2,25 L",categoryId:"bebidas",store:"Almacén Juan",price:2600,quantity:1,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",categoryId:"almacen",store:"Almacén Juan",price:980,quantity:2,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2550,quantity:1,subtotal:2550,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",categoryId:"panaderia",store:"Panadería La Esquina",price:2400,quantity:1,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",categoryId:"verduleria",store:"La Huerta",price:1700,quantity:1,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",categoryId:"verduleria",store:"La Huerta",price:2690,quantity:1,subtotal:2690,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],gd=[{id:"ord-1",code:"#1248",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:8350,status:"En preparación",state:"proceso",eta:"Llega en 35 min",date:"Hoy 14:20",itemCount:4},{id:"ord-2",code:"#1247",store:"Panadería La Esquina",storeId:"panaderia-la-esquina",categoryId:"panaderia",total:1900,status:"En camino",state:"proceso",eta:"Llega en 15 min",date:"Hoy 13:05",itemCount:2},{id:"ord-3",code:"#1231",store:"Farmacia Centro",storeId:"farmacia-centro",categoryId:"farmacia",total:7150,status:"Entregado",state:"terminado",eta:"Entregado 12:40",date:"Ayer",itemCount:3},{id:"ord-4",code:"#1228",store:"Carnicería Central",storeId:"carniceria-central",categoryId:"carniceria",total:12400,status:"Entregado",state:"terminado",eta:"Entregado 19:10",date:"18/08",itemCount:5},{id:"ord-5",code:"#1219",store:"Almacén Juan",storeId:"almacen-juan",categoryId:"almacen",total:3200,status:"Cancelado por el comercio",state:"cancelado",eta:"Sin stock",date:"15/08",itemCount:2}],vl=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],Rs=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",categoryId:"bebidas",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",categoryId:"almacen",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",categoryId:"panaderia",price:750}],vk=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],xk=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],bk=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],wk=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],_k=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],$k=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Comercios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],kk=[{id:"alert-1",title:"Comercios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:V1},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:nk},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:F1},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:ok}];var zu={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,o){o(t)})(Qx,function(n){var o="1.9.4";function a(r){var i,l,p,f;for(l=1,p=arguments.length;l<p;l++){f=arguments[l];for(i in f)r[i]=f[i]}return r}var c=Object.create||function(){function r(){}return function(i){return r.prototype=i,new r}}();function d(r,i){var l=Array.prototype.slice;if(r.bind)return r.bind.apply(r,l.call(arguments,1));var p=l.call(arguments,2);return function(){return r.apply(i,p.length?p.concat(l.call(arguments)):arguments)}}var m=0;function h(r){return"_leaflet_id"in r||(r._leaflet_id=++m),r._leaflet_id}function y(r,i,l){var p,f,g,S;return S=function(){p=!1,f&&(g.apply(l,f),f=!1)},g=function(){p?f=arguments:(r.apply(l,arguments),setTimeout(S,i),p=!0)},g}function x(r,i,l){var p=i[1],f=i[0],g=p-f;return r===p&&l?r:((r-f)%g+g)%g+f}function v(){return!1}function w(r,i){if(i===!1)return r;var l=Math.pow(10,i===void 0?6:i);return Math.round(r*l)/l}function C(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function T(r){return C(r).split(/\s+/)}function j(r,i){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?c(r.options):{});for(var l in i)r.options[l]=i[l];return r.options}function z(r,i,l){var p=[];for(var f in r)p.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(r[f]));return(!i||i.indexOf("?")===-1?"?":"&")+p.join("&")}var _=/\{ *([\w_ -]+) *\}/g;function b(r,i){return r.replace(_,function(l,p){var f=i[p];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(i)),f})}var $=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function A(r,i){for(var l=0;l<r.length;l++)if(r[l]===i)return l;return-1}var E="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var Z=0;function W(r){var i=+new Date,l=Math.max(0,16-(i-Z));return Z=i+l,window.setTimeout(r,l)}var ae=window.requestAnimationFrame||N("RequestAnimationFrame")||W,Y=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function oe(r,i,l){if(l&&ae===W)r.call(i);else return ae.call(window,d(r,i))}function pe(r){r&&Y.call(window,r)}var ke={__proto__:null,extend:a,create:c,bind:d,get lastId(){return m},stamp:h,throttle:y,wrapNum:x,falseFn:v,formatNum:w,trim:C,splitWords:T,setOptions:j,getParamString:z,template:b,isArray:$,indexOf:A,emptyImageUrl:E,requestFn:ae,cancelFn:Y,requestAnimFrame:oe,cancelAnimFrame:pe};function H(){}H.extend=function(r){var i=function(){j(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=i.__super__=this.prototype,p=c(l);p.constructor=i,i.prototype=p;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(i[f]=this[f]);return r.statics&&a(i,r.statics),r.includes&&(ne(r.includes),a.apply(null,[p].concat(r.includes))),a(p,r),delete p.statics,delete p.includes,p.options&&(p.options=l.options?c(l.options):{},a(p.options,r.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var g=0,S=p._initHooks.length;g<S;g++)p._initHooks[g].call(this)}},i},H.include=function(r){var i=this.prototype.options;return a(this.prototype,r),r.options&&(this.prototype.options=i,this.mergeOptions(r.options)),this},H.mergeOptions=function(r){return a(this.prototype.options,r),this},H.addInitHook=function(r){var i=Array.prototype.slice.call(arguments,1),l=typeof r=="function"?r:function(){this[r].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function ne(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=$(r)?r:[r];for(var i=0;i<r.length;i++)r[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var re={on:function(r,i,l){if(typeof r=="object")for(var p in r)this._on(p,r[p],i);else{r=T(r);for(var f=0,g=r.length;f<g;f++)this._on(r[f],i,l)}return this},off:function(r,i,l){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var p in r)this._off(p,r[p],i);else{r=T(r);for(var f=arguments.length===1,g=0,S=r.length;g<S;g++)f?this._off(r[g]):this._off(r[g],i,l)}return this},_on:function(r,i,l,p){if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}if(this._listens(r,i,l)===!1){l===this&&(l=void 0);var f={fn:i,ctx:l};p&&(f.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(f)}},_off:function(r,i,l){var p,f,g;if(this._events&&(p=this._events[r],!!p)){if(arguments.length===1){if(this._firingCount)for(f=0,g=p.length;f<g;f++)p[f].fn=v;delete this._events[r];return}if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}var S=this._listens(r,i,l);if(S!==!1){var M=p[S];this._firingCount&&(M.fn=v,this._events[r]=p=p.slice()),p.splice(S,1)}}},fire:function(r,i,l){if(!this.listens(r,l))return this;var p=a({},i,{type:r,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var f=this._events[r];if(f){this._firingCount=this._firingCount+1||1;for(var g=0,S=f.length;g<S;g++){var M=f[g],R=M.fn;M.once&&this.off(r,R,M.ctx),R.call(M.ctx||this,p)}this._firingCount--}}return l&&this._propagateEvent(p),this},listens:function(r,i,l,p){typeof r!="string"&&console.warn('"string" type argument expected');var f=i;typeof i!="function"&&(p=!!i,f=void 0,l=void 0);var g=this._events&&this._events[r];if(g&&g.length&&this._listens(r,f,l)!==!1)return!0;if(p){for(var S in this._eventParents)if(this._eventParents[S].listens(r,i,l,p))return!0}return!1},_listens:function(r,i,l){if(!this._events)return!1;var p=this._events[r]||[];if(!i)return!!p.length;l===this&&(l=void 0);for(var f=0,g=p.length;f<g;f++)if(p[f].fn===i&&p[f].ctx===l)return f;return!1},once:function(r,i,l){if(typeof r=="object")for(var p in r)this._on(p,r[p],i,!0);else{r=T(r);for(var f=0,g=r.length;f<g;f++)this._on(r[f],i,l,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[h(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[h(r)],this},_propagateEvent:function(r){for(var i in this._eventParents)this._eventParents[i].fire(r.type,a({layer:r.target,propagatedFrom:r.target},r),!0)}};re.addEventListener=re.on,re.removeEventListener=re.clearAllEventListeners=re.off,re.addOneTimeEventListener=re.once,re.fireEvent=re.fire,re.hasEventListeners=re.listens;var ye=H.extend(re);function O(r,i,l){this.x=l?Math.round(r):r,this.y=l?Math.round(i):i}var J=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(r){return this.clone()._add(U(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(U(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new O(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new O(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=J(this.x),this.y=J(this.y),this},distanceTo:function(r){r=U(r);var i=r.x-this.x,l=r.y-this.y;return Math.sqrt(i*i+l*l)},equals:function(r){return r=U(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=U(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+w(this.x)+", "+w(this.y)+")"}};function U(r,i,l){return r instanceof O?r:$(r)?new O(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new O(r.x,r.y):new O(r,i,l)}function ee(r,i){if(r)for(var l=i?[r,i]:r,p=0,f=l.length;p<f;p++)this.extend(l[p])}ee.prototype={extend:function(r){var i,l;if(!r)return this;if(r instanceof O||typeof r[0]=="number"||"x"in r)i=l=U(r);else if(r=D(r),i=r.min,l=r.max,!i||!l)return this;return!this.min&&!this.max?(this.min=i.clone(),this.max=l.clone()):(this.min.x=Math.min(i.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(i.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(r){return U((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return U(this.min.x,this.max.y)},getTopRight:function(){return U(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var i,l;return typeof r[0]=="number"||r instanceof O?r=U(r):r=D(r),r instanceof ee?(i=r.min,l=r.max):i=l=r,i.x>=this.min.x&&l.x<=this.max.x&&i.y>=this.min.y&&l.y<=this.max.y},intersects:function(r){r=D(r);var i=this.min,l=this.max,p=r.min,f=r.max,g=f.x>=i.x&&p.x<=l.x,S=f.y>=i.y&&p.y<=l.y;return g&&S},overlaps:function(r){r=D(r);var i=this.min,l=this.max,p=r.min,f=r.max,g=f.x>i.x&&p.x<l.x,S=f.y>i.y&&p.y<l.y;return g&&S},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var i=this.min,l=this.max,p=Math.abs(i.x-l.x)*r,f=Math.abs(i.y-l.y)*r;return D(U(i.x-p,i.y-f),U(l.x+p,l.y+f))},equals:function(r){return r?(r=D(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function D(r,i){return!r||r instanceof ee?r:new ee(r,i)}function I(r,i){if(r)for(var l=i?[r,i]:r,p=0,f=l.length;p<f;p++)this.extend(l[p])}I.prototype={extend:function(r){var i=this._southWest,l=this._northEast,p,f;if(r instanceof G)p=r,f=r;else if(r instanceof I){if(p=r._southWest,f=r._northEast,!p||!f)return this}else return r?this.extend(P(r)||F(r)):this;return!i&&!l?(this._southWest=new G(p.lat,p.lng),this._northEast=new G(f.lat,f.lng)):(i.lat=Math.min(p.lat,i.lat),i.lng=Math.min(p.lng,i.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(r){var i=this._southWest,l=this._northEast,p=Math.abs(i.lat-l.lat)*r,f=Math.abs(i.lng-l.lng)*r;return new I(new G(i.lat-p,i.lng-f),new G(l.lat+p,l.lng+f))},getCenter:function(){return new G((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new G(this.getNorth(),this.getWest())},getSouthEast:function(){return new G(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof G||"lat"in r?r=P(r):r=F(r);var i=this._southWest,l=this._northEast,p,f;return r instanceof I?(p=r.getSouthWest(),f=r.getNorthEast()):p=f=r,p.lat>=i.lat&&f.lat<=l.lat&&p.lng>=i.lng&&f.lng<=l.lng},intersects:function(r){r=F(r);var i=this._southWest,l=this._northEast,p=r.getSouthWest(),f=r.getNorthEast(),g=f.lat>=i.lat&&p.lat<=l.lat,S=f.lng>=i.lng&&p.lng<=l.lng;return g&&S},overlaps:function(r){r=F(r);var i=this._southWest,l=this._northEast,p=r.getSouthWest(),f=r.getNorthEast(),g=f.lat>i.lat&&p.lat<l.lat,S=f.lng>i.lng&&p.lng<l.lng;return g&&S},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,i){return r?(r=F(r),this._southWest.equals(r.getSouthWest(),i)&&this._northEast.equals(r.getNorthEast(),i)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function F(r,i){return r instanceof I?r:new I(r,i)}function G(r,i,l){if(isNaN(r)||isNaN(i))throw new Error("Invalid LatLng object: ("+r+", "+i+")");this.lat=+r,this.lng=+i,l!==void 0&&(this.alt=+l)}G.prototype={equals:function(r,i){if(!r)return!1;r=P(r);var l=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return l<=(i===void 0?1e-9:i)},toString:function(r){return"LatLng("+w(this.lat,r)+", "+w(this.lng,r)+")"},distanceTo:function(r){return q.distance(this,P(r))},wrap:function(){return q.wrapLatLng(this)},toBounds:function(r){var i=180*r/40075017,l=i/Math.cos(Math.PI/180*this.lat);return F([this.lat-i,this.lng-l],[this.lat+i,this.lng+l])},clone:function(){return new G(this.lat,this.lng,this.alt)}};function P(r,i,l){return r instanceof G?r:$(r)&&typeof r[0]!="object"?r.length===3?new G(r[0],r[1],r[2]):r.length===2?new G(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new G(r.lat,"lng"in r?r.lng:r.lon,r.alt):i===void 0?null:new G(r,i,l)}var de={latLngToPoint:function(r,i){var l=this.projection.project(r),p=this.scale(i);return this.transformation._transform(l,p)},pointToLatLng:function(r,i){var l=this.scale(i),p=this.transformation.untransform(r,l);return this.projection.unproject(p)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var i=this.projection.bounds,l=this.scale(r),p=this.transformation.transform(i.min,l),f=this.transformation.transform(i.max,l);return new ee(p,f)},infinite:!1,wrapLatLng:function(r){var i=this.wrapLng?x(r.lng,this.wrapLng,!0):r.lng,l=this.wrapLat?x(r.lat,this.wrapLat,!0):r.lat,p=r.alt;return new G(l,i,p)},wrapLatLngBounds:function(r){var i=r.getCenter(),l=this.wrapLatLng(i),p=i.lat-l.lat,f=i.lng-l.lng;if(p===0&&f===0)return r;var g=r.getSouthWest(),S=r.getNorthEast(),M=new G(g.lat-p,g.lng-f),R=new G(S.lat-p,S.lng-f);return new I(M,R)}},q=a({},de,{wrapLng:[-180,180],R:6371e3,distance:function(r,i){var l=Math.PI/180,p=r.lat*l,f=i.lat*l,g=Math.sin((i.lat-r.lat)*l/2),S=Math.sin((i.lng-r.lng)*l/2),M=g*g+Math.cos(p)*Math.cos(f)*S*S,R=2*Math.atan2(Math.sqrt(M),Math.sqrt(1-M));return this.R*R}}),Me=6378137,ve={R:Me,MAX_LATITUDE:85.0511287798,project:function(r){var i=Math.PI/180,l=this.MAX_LATITUDE,p=Math.max(Math.min(l,r.lat),-l),f=Math.sin(p*i);return new O(this.R*r.lng*i,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(r){var i=180/Math.PI;return new G((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*i,r.x*i/this.R)},bounds:function(){var r=Me*Math.PI;return new ee([-r,-r],[r,r])}()};function we(r,i,l,p){if($(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=i,this._c=l,this._d=p}we.prototype={transform:function(r,i){return this._transform(r.clone(),i)},_transform:function(r,i){return i=i||1,r.x=i*(this._a*r.x+this._b),r.y=i*(this._c*r.y+this._d),r},untransform:function(r,i){return i=i||1,new O((r.x/i-this._b)/this._a,(r.y/i-this._d)/this._c)}};function se(r,i,l,p){return new we(r,i,l,p)}var qe=a({},q,{code:"EPSG:3857",projection:ve,transformation:function(){var r=.5/(Math.PI*ve.R);return se(r,.5,-r,.5)}()}),xt=a({},qe,{code:"EPSG:900913"});function ge(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function ot(r,i){var l="",p,f,g,S,M,R;for(p=0,g=r.length;p<g;p++){for(M=r[p],f=0,S=M.length;f<S;f++)R=M[f],l+=(f?"L":"M")+R.x+" "+R.y;l+=i?te.svg?"z":"x":""}return l||"M0 0"}var xe=document.documentElement.style,Ve="ActiveXObject"in window,Tn=Ve&&!document.addEventListener,et="msLaunchUri"in navigator&&!("documentMode"in document),Xr=wr("webkit"),Jr=wr("android"),Lt=wr("android 2")||wr("android 3"),le=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Fe=Jr&&wr("Google")&&le<537&&!("AudioNode"in window),Mn=!!window.opera,si=!et&&wr("chrome"),sr=wr("gecko")&&!Xr&&!Mn&&!Ve,Lv=!si&&wr("safari"),dh=wr("phantom"),uh="OTransition"in xe,Ev=navigator.platform.indexOf("Win")===0,ph=Ve&&"transition"in xe,pc="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Lt,hh="MozPerspective"in xe,Tv=!window.L_DISABLE_3D&&(ph||pc||hh)&&!uh&&!dh,io=typeof orientation<"u"||wr("mobile"),Mv=io&&Xr,Av=io&&pc,fh=!window.PointerEvent&&window.MSPointerEvent,mh=!!(window.PointerEvent||fh),gh="ontouchstart"in window||!!window.TouchEvent,Iv=!window.L_NO_TOUCH&&(gh||mh),Rv=io&&Mn,Ov=io&&sr,Nv=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Fv=function(){var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",v,i),window.removeEventListener("testPassiveEventSupport",v,i)}catch{}return r}(),Bv=function(){return!!document.createElement("canvas").getContext}(),hc=!!(document.createElementNS&&ge("svg").createSVGRect),Dv=!!hc&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Hv=!hc&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var i=r.firstChild;return i.style.behavior="url(#default#VML)",i&&typeof i.adj=="object"}catch{return!1}}(),Zv=navigator.platform.indexOf("Mac")===0,Uv=navigator.platform.indexOf("Linux")===0;function wr(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var te={ie:Ve,ielt9:Tn,edge:et,webkit:Xr,android:Jr,android23:Lt,androidStock:Fe,opera:Mn,chrome:si,gecko:sr,safari:Lv,phantom:dh,opera12:uh,win:Ev,ie3d:ph,webkit3d:pc,gecko3d:hh,any3d:Tv,mobile:io,mobileWebkit:Mv,mobileWebkit3d:Av,msPointer:fh,pointer:mh,touch:Iv,touchNative:gh,mobileOpera:Rv,mobileGecko:Ov,retina:Nv,passiveEvents:Fv,canvas:Bv,svg:hc,vml:Hv,inlineSvg:Dv,mac:Zv,linux:Uv},yh=te.msPointer?"MSPointerDown":"pointerdown",vh=te.msPointer?"MSPointerMove":"pointermove",xh=te.msPointer?"MSPointerUp":"pointerup",bh=te.msPointer?"MSPointerCancel":"pointercancel",fc={touchstart:yh,touchmove:vh,touchend:xh,touchcancel:bh},wh={touchstart:Kv,touchmove:wa,touchend:wa,touchcancel:wa},li={},_h=!1;function Vv(r,i,l){return i==="touchstart"&&Yv(),wh[i]?(l=wh[i].bind(this,l),r.addEventListener(fc[i],l,!1),l):(console.warn("wrong event specified:",i),v)}function Wv(r,i,l){if(!fc[i]){console.warn("wrong event specified:",i);return}r.removeEventListener(fc[i],l,!1)}function Gv(r){li[r.pointerId]=r}function qv(r){li[r.pointerId]&&(li[r.pointerId]=r)}function $h(r){delete li[r.pointerId]}function Yv(){_h||(document.addEventListener(yh,Gv,!0),document.addEventListener(vh,qv,!0),document.addEventListener(xh,$h,!0),document.addEventListener(bh,$h,!0),_h=!0)}function wa(r,i){if(i.pointerType!==(i.MSPOINTER_TYPE_MOUSE||"mouse")){i.touches=[];for(var l in li)i.touches.push(li[l]);i.changedTouches=[i],r(i)}}function Kv(r,i){i.MSPOINTER_TYPE_TOUCH&&i.pointerType===i.MSPOINTER_TYPE_TOUCH&&ht(i),wa(r,i)}function Qv(r){var i={},l,p;for(p in r)l=r[p],i[p]=l&&l.bind?l.bind(r):l;return r=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}var Xv=200;function Jv(r,i){r.addEventListener("dblclick",i);var l=0,p;function f(g){if(g.detail!==1){p=g.detail;return}if(!(g.pointerType==="mouse"||g.sourceCapabilities&&!g.sourceCapabilities.firesTouchEvents)){var S=Ph(g);if(!(S.some(function(R){return R instanceof HTMLLabelElement&&R.attributes.for})&&!S.some(function(R){return R instanceof HTMLInputElement||R instanceof HTMLSelectElement}))){var M=Date.now();M-l<=Xv?(p++,p===2&&i(Qv(g))):p=1,l=M}}}return r.addEventListener("click",f),{dblclick:i,simDblclick:f}}function ex(r,i){r.removeEventListener("dblclick",i.dblclick),r.removeEventListener("click",i.simDblclick)}var mc=ka(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),oo=ka(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),kh=oo==="webkitTransition"||oo==="OTransition"?oo+"End":"transitionend";function Sh(r){return typeof r=="string"?document.getElementById(r):r}function ao(r,i){var l=r.style[i]||r.currentStyle&&r.currentStyle[i];if((!l||l==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(r,null);l=p?p[i]:null}return l==="auto"?null:l}function $e(r,i,l){var p=document.createElement(r);return p.className=i||"",l&&l.appendChild(p),p}function Be(r){var i=r.parentNode;i&&i.removeChild(r)}function _a(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function ci(r){var i=r.parentNode;i&&i.lastChild!==r&&i.appendChild(r)}function di(r){var i=r.parentNode;i&&i.firstChild!==r&&i.insertBefore(r,i.firstChild)}function gc(r,i){if(r.classList!==void 0)return r.classList.contains(i);var l=$a(r);return l.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(l)}function he(r,i){if(r.classList!==void 0)for(var l=T(i),p=0,f=l.length;p<f;p++)r.classList.add(l[p]);else if(!gc(r,i)){var g=$a(r);yc(r,(g?g+" ":"")+i)}}function Ye(r,i){r.classList!==void 0?r.classList.remove(i):yc(r,C((" "+$a(r)+" ").replace(" "+i+" "," ")))}function yc(r,i){r.className.baseVal===void 0?r.className=i:r.className.baseVal=i}function $a(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function qt(r,i){"opacity"in r.style?r.style.opacity=i:"filter"in r.style&&tx(r,i)}function tx(r,i){var l=!1,p="DXImageTransform.Microsoft.Alpha";try{l=r.filters.item(p)}catch{if(i===1)return}i=Math.round(i*100),l?(l.Enabled=i!==100,l.Opacity=i):r.style.filter+=" progid:"+p+"(opacity="+i+")"}function ka(r){for(var i=document.documentElement.style,l=0;l<r.length;l++)if(r[l]in i)return r[l];return!1}function An(r,i,l){var p=i||new O(0,0);r.style[mc]=(te.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(l?" scale("+l+")":"")}function tt(r,i){r._leaflet_pos=i,te.any3d?An(r,i):(r.style.left=i.x+"px",r.style.top=i.y+"px")}function In(r){return r._leaflet_pos||new O(0,0)}var so,lo,vc;if("onselectstart"in document)so=function(){ue(window,"selectstart",ht)},lo=function(){Ee(window,"selectstart",ht)};else{var co=ka(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);so=function(){if(co){var r=document.documentElement.style;vc=r[co],r[co]="none"}},lo=function(){co&&(document.documentElement.style[co]=vc,vc=void 0)}}function xc(){ue(window,"dragstart",ht)}function bc(){Ee(window,"dragstart",ht)}var Sa,wc;function _c(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&(ja(),Sa=r,wc=r.style.outlineStyle,r.style.outlineStyle="none",ue(window,"keydown",ja))}function ja(){Sa&&(Sa.style.outlineStyle=wc,Sa=void 0,wc=void 0,Ee(window,"keydown",ja))}function jh(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function $c(r){var i=r.getBoundingClientRect();return{x:i.width/r.offsetWidth||1,y:i.height/r.offsetHeight||1,boundingClientRect:i}}var rx={__proto__:null,TRANSFORM:mc,TRANSITION:oo,TRANSITION_END:kh,get:Sh,getStyle:ao,create:$e,remove:Be,empty:_a,toFront:ci,toBack:di,hasClass:gc,addClass:he,removeClass:Ye,setClass:yc,getClass:$a,setOpacity:qt,testProp:ka,setTransform:An,setPosition:tt,getPosition:In,get disableTextSelection(){return so},get enableTextSelection(){return lo},disableImageDrag:xc,enableImageDrag:bc,preventOutline:_c,restoreOutline:ja,getSizedParentNode:jh,getScale:$c};function ue(r,i,l,p){if(i&&typeof i=="object")for(var f in i)Sc(r,f,i[f],l);else{i=T(i);for(var g=0,S=i.length;g<S;g++)Sc(r,i[g],l,p)}return this}var _r="_leaflet_events";function Ee(r,i,l,p){if(arguments.length===1)Ch(r),delete r[_r];else if(i&&typeof i=="object")for(var f in i)jc(r,f,i[f],l);else if(i=T(i),arguments.length===2)Ch(r,function(M){return A(i,M)!==-1});else for(var g=0,S=i.length;g<S;g++)jc(r,i[g],l,p);return this}function Ch(r,i){for(var l in r[_r]){var p=l.split(/\d/)[0];(!i||i(p))&&jc(r,p,null,null,l)}}var kc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Sc(r,i,l,p){var f=i+h(l)+(p?"_"+h(p):"");if(r[_r]&&r[_r][f])return this;var g=function(M){return l.call(p||r,M||window.event)},S=g;!te.touchNative&&te.pointer&&i.indexOf("touch")===0?g=Vv(r,i,g):te.touch&&i==="dblclick"?g=Jv(r,g):"addEventListener"in r?i==="touchstart"||i==="touchmove"||i==="wheel"||i==="mousewheel"?r.addEventListener(kc[i]||i,g,te.passiveEvents?{passive:!1}:!1):i==="mouseenter"||i==="mouseleave"?(g=function(M){M=M||window.event,Pc(r,M)&&S(M)},r.addEventListener(kc[i],g,!1)):r.addEventListener(i,S,!1):r.attachEvent("on"+i,g),r[_r]=r[_r]||{},r[_r][f]=g}function jc(r,i,l,p,f){f=f||i+h(l)+(p?"_"+h(p):"");var g=r[_r]&&r[_r][f];if(!g)return this;!te.touchNative&&te.pointer&&i.indexOf("touch")===0?Wv(r,i,g):te.touch&&i==="dblclick"?ex(r,g):"removeEventListener"in r?r.removeEventListener(kc[i]||i,g,!1):r.detachEvent("on"+i,g),r[_r][f]=null}function Rn(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function Cc(r){return Sc(r,"wheel",Rn),this}function uo(r){return ue(r,"mousedown touchstart dblclick contextmenu",Rn),r._leaflet_disable_click=!0,this}function ht(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function On(r){return ht(r),Rn(r),this}function Ph(r){if(r.composedPath)return r.composedPath();for(var i=[],l=r.target;l;)i.push(l),l=l.parentNode;return i}function zh(r,i){if(!i)return new O(r.clientX,r.clientY);var l=$c(i),p=l.boundingClientRect;return new O((r.clientX-p.left)/l.x-i.clientLeft,(r.clientY-p.top)/l.y-i.clientTop)}var nx=te.linux&&te.chrome?window.devicePixelRatio:te.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Lh(r){return te.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/nx:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function Pc(r,i){var l=i.relatedTarget;if(!l)return!0;try{for(;l&&l!==r;)l=l.parentNode}catch{return!1}return l!==r}var ix={__proto__:null,on:ue,off:Ee,stopPropagation:Rn,disableScrollPropagation:Cc,disableClickPropagation:uo,preventDefault:ht,stop:On,getPropagationPath:Ph,getMousePosition:zh,getWheelDelta:Lh,isExternalTarget:Pc,addListener:ue,removeListener:Ee},Eh=ye.extend({run:function(r,i,l,p){this.stop(),this._el=r,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=In(r),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=oe(this._animate,this),this._step()},_step:function(r){var i=+new Date-this._startTime,l=this._duration*1e3;i<l?this._runFrame(this._easeOut(i/l),r):(this._runFrame(1),this._complete())},_runFrame:function(r,i){var l=this._startPos.add(this._offset.multiplyBy(r));i&&l._round(),tt(this._el,l),this.fire("step")},_complete:function(){pe(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),be=ye.extend({options:{crs:qe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,i){i=j(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),i.zoom!==void 0&&(this._zoom=this._limitZoom(i.zoom)),i.center&&i.zoom!==void 0&&this.setView(P(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=oo&&te.any3d&&!te.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ue(this._proxy,kh,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,i,l){if(i=i===void 0?this._zoom:this._limitZoom(i),r=this._limitCenter(P(r),i,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=a({animate:l.animate},l.zoom),l.pan=a({animate:l.animate,duration:l.duration},l.pan));var p=this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,i,l.zoom):this._tryAnimatedPan(r,l.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(r,i,l.pan&&l.pan.noMoveStart),this},setZoom:function(r,i){return this._loaded?this.setView(this.getCenter(),r,{zoom:i}):(this._zoom=r,this)},zoomIn:function(r,i){return r=r||(te.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,i)},zoomOut:function(r,i){return r=r||(te.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,i)},setZoomAround:function(r,i,l){var p=this.getZoomScale(i),f=this.getSize().divideBy(2),g=r instanceof O?r:this.latLngToContainerPoint(r),S=g.subtract(f).multiplyBy(1-1/p),M=this.containerPointToLatLng(f.add(S));return this.setView(M,i,{zoom:l})},_getBoundsCenterZoom:function(r,i){i=i||{},r=r.getBounds?r.getBounds():F(r);var l=U(i.paddingTopLeft||i.padding||[0,0]),p=U(i.paddingBottomRight||i.padding||[0,0]),f=this.getBoundsZoom(r,!1,l.add(p));if(f=typeof i.maxZoom=="number"?Math.min(i.maxZoom,f):f,f===1/0)return{center:r.getCenter(),zoom:f};var g=p.subtract(l).divideBy(2),S=this.project(r.getSouthWest(),f),M=this.project(r.getNorthEast(),f),R=this.unproject(S.add(M).divideBy(2).add(g),f);return{center:R,zoom:f}},fitBounds:function(r,i){if(r=F(r),!r.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(r,i);return this.setView(l.center,l.zoom,i)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,i){return this.setView(r,this._zoom,{pan:i})},panBy:function(r,i){if(r=U(r).round(),i=i||{},!r.x&&!r.y)return this.fire("moveend");if(i.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Eh,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),i.animate!==!1){he(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,l,i.duration||.25,i.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,i,l){if(l=l||{},l.animate===!1||!te.any3d)return this.setView(r,i,l);this._stop();var p=this.project(this.getCenter()),f=this.project(r),g=this.getSize(),S=this._zoom;r=P(r),i=i===void 0?S:i;var M=Math.max(g.x,g.y),R=M*this.getZoomScale(S,i),B=f.distanceTo(p)||1,K=1.42,ie=K*K;function fe(rt){var Na=rt?-1:1,Wx=rt?R:M,Gx=R*R-M*M+Na*ie*ie*B*B,qx=2*Wx*ie*B,Fc=Gx/qx,pf=Math.sqrt(Fc*Fc+1)-Fc,Yx=pf<1e-9?-18:Math.log(pf);return Yx}function St(rt){return(Math.exp(rt)-Math.exp(-rt))/2}function lt(rt){return(Math.exp(rt)+Math.exp(-rt))/2}function Kt(rt){return St(rt)/lt(rt)}var Et=fe(0);function gi(rt){return M*(lt(Et)/lt(Et+K*rt))}function Hx(rt){return M*(lt(Et)*Kt(Et+K*rt)-St(Et))/ie}function Zx(rt){return 1-Math.pow(1-rt,1.5)}var Ux=Date.now(),df=(fe(1)-Et)/K,Vx=l.duration?1e3*l.duration:1e3*df*.8;function uf(){var rt=(Date.now()-Ux)/Vx,Na=Zx(rt)*df;rt<=1?(this._flyToFrame=oe(uf,this),this._move(this.unproject(p.add(f.subtract(p).multiplyBy(Hx(Na)/B)),S),this.getScaleZoom(M/gi(Na),S),{flyTo:!0})):this._move(r,i)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),uf.call(this),this},flyToBounds:function(r,i){var l=this._getBoundsCenterZoom(r,i);return this.flyTo(l.center,l.zoom,i)},setMaxBounds:function(r){return r=F(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var i=this.options.minZoom;return this.options.minZoom=r,this._loaded&&i!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var i=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&i!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,i){this._enforcingBounds=!0;var l=this.getCenter(),p=this._limitCenter(l,this._zoom,F(r));return l.equals(p)||this.panTo(p,i),this._enforcingBounds=!1,this},panInside:function(r,i){i=i||{};var l=U(i.paddingTopLeft||i.padding||[0,0]),p=U(i.paddingBottomRight||i.padding||[0,0]),f=this.project(this.getCenter()),g=this.project(r),S=this.getPixelBounds(),M=D([S.min.add(l),S.max.subtract(p)]),R=M.getSize();if(!M.contains(g)){this._enforcingBounds=!0;var B=g.subtract(M.getCenter()),K=M.extend(g).getSize().subtract(R);f.x+=B.x<0?-K.x:K.x,f.y+=B.y<0?-K.y:K.y,this.panTo(this.unproject(f),i),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=a({animate:!1,pan:!0},r===!0?{animate:!0}:r);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),p=i.divideBy(2).round(),f=l.divideBy(2).round(),g=p.subtract(f);return!g.x&&!g.y?this:(r.animate&&r.pan?this.panBy(g):(r.pan&&this._rawPanBy(g),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=a({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=d(this._handleGeolocationResponse,this),l=d(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,l,r):navigator.geolocation.getCurrentPosition(i,l,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var i=r.code,l=r.message||(i===1?"permission denied":i===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var i=r.coords.latitude,l=r.coords.longitude,p=new G(i,l),f=p.toBounds(r.coords.accuracy*2),g=this._locateOptions;if(g.setView){var S=this.getBoundsZoom(f);this.setView(p,g.maxZoom?Math.min(S,g.maxZoom):S)}var M={latlng:p,bounds:f,timestamp:r.timestamp};for(var R in r.coords)typeof r.coords[R]=="number"&&(M[R]=r.coords[R]);this.fire("locationfound",M)}},addHandler:function(r,i){if(!i)return this;var l=this[r]=new i(this);return this._handlers.push(l),this.options[r]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Be(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(pe(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)Be(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,i){var l="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),p=$e("div",l,i||this._mapPane);return r&&(this._panes[r]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),i=this.unproject(r.getBottomLeft()),l=this.unproject(r.getTopRight());return new I(i,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,i,l){r=F(r),l=U(l||[0,0]);var p=this.getZoom()||0,f=this.getMinZoom(),g=this.getMaxZoom(),S=r.getNorthWest(),M=r.getSouthEast(),R=this.getSize().subtract(l),B=D(this.project(M,p),this.project(S,p)).getSize(),K=te.any3d?this.options.zoomSnap:1,ie=R.x/B.x,fe=R.y/B.y,St=i?Math.max(ie,fe):Math.min(ie,fe);return p=this.getScaleZoom(St,p),K&&(p=Math.round(p/(K/100))*(K/100),p=i?Math.ceil(p/K)*K:Math.floor(p/K)*K),Math.max(f,Math.min(g,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,i){var l=this._getTopLeftPoint(r,i);return new ee(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,i){var l=this.options.crs;return i=i===void 0?this._zoom:i,l.scale(r)/l.scale(i)},getScaleZoom:function(r,i){var l=this.options.crs;i=i===void 0?this._zoom:i;var p=l.zoom(r*l.scale(i));return isNaN(p)?1/0:p},project:function(r,i){return i=i===void 0?this._zoom:i,this.options.crs.latLngToPoint(P(r),i)},unproject:function(r,i){return i=i===void 0?this._zoom:i,this.options.crs.pointToLatLng(U(r),i)},layerPointToLatLng:function(r){var i=U(r).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(r){var i=this.project(P(r))._round();return i._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(P(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds(F(r))},distance:function(r,i){return this.options.crs.distance(P(r),P(i))},containerPointToLayerPoint:function(r){return U(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return U(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var i=this.containerPointToLayerPoint(U(r));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(P(r)))},mouseEventToContainerPoint:function(r){return zh(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var i=this._container=Sh(r);if(i){if(i._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ue(i,"scroll",this._onScroll,this),this._containerId=h(i)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&te.any3d,he(r,"leaflet-container"+(te.touch?" leaflet-touch":"")+(te.retina?" leaflet-retina":"")+(te.ielt9?" leaflet-oldie":"")+(te.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=ao(r,"position");i!=="absolute"&&i!=="relative"&&i!=="fixed"&&i!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),tt(this._mapPane,new O(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(he(r.markerPane,"leaflet-zoom-hide"),he(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,i,l){tt(this._mapPane,new O(0,0));var p=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var f=this._zoom!==i;this._moveStart(f,l)._move(r,i)._moveEnd(f),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(r,i){return r&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(r,i,l,p){i===void 0&&(i=this._zoom);var f=this._zoom!==i;return this._zoom=i,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),p?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return pe(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){tt(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[h(this._container)]=this;var i=r?Ee:ue;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),te.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){pe(this._resizeRequest),this._resizeRequest=oe(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,i){for(var l=[],p,f=i==="mouseout"||i==="mouseover",g=r.target||r.srcElement,S=!1;g;){if(p=this._targets[h(g)],p&&(i==="click"||i==="preclick")&&this._draggableMoved(p)){S=!0;break}if(p&&p.listens(i,!0)&&(f&&!Pc(g,r)||(l.push(p),f))||g===this._container)break;g=g.parentNode}return!l.length&&!S&&!f&&this.listens(i,!0)&&(l=[this]),l},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var i=r.target||r.srcElement;if(!(!this._loaded||i._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(i))){var l=r.type;l==="mousedown"&&_c(i),this._fireDOMEvent(r,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,i,l){if(r.type==="click"){var p=a({},r);p.type="preclick",this._fireDOMEvent(p,p.type,l)}var f=this._findEventTargets(r,i);if(l){for(var g=[],S=0;S<l.length;S++)l[S].listens(i,!0)&&g.push(l[S]);f=g.concat(f)}if(f.length){i==="contextmenu"&&ht(r);var M=f[0],R={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var B=M.getLatLng&&(!M._radius||M._radius<=10);R.containerPoint=B?this.latLngToContainerPoint(M.getLatLng()):this.mouseEventToContainerPoint(r),R.layerPoint=this.containerPointToLayerPoint(R.containerPoint),R.latlng=B?M.getLatLng():this.layerPointToLatLng(R.layerPoint)}for(S=0;S<f.length;S++)if(f[S].fire(i,R,!0),R.originalEvent._stopped||f[S].options.bubblingMouseEvents===!1&&A(this._mouseEvents,i)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,i=this._handlers.length;r<i;r++)this._handlers[r].disable()},whenReady:function(r,i){return this._loaded?r.call(i||this,{target:this}):this.on("load",r,i),this},_getMapPanePos:function(){return In(this._mapPane)||new O(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,i){var l=r&&i!==void 0?this._getNewPixelOrigin(r,i):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,i){var l=this.getSize()._divideBy(2);return this.project(r,i)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,i,l){var p=this._getNewPixelOrigin(l,i);return this.project(r,i)._subtract(p)},_latLngBoundsToNewLayerBounds:function(r,i,l){var p=this._getNewPixelOrigin(l,i);return D([this.project(r.getSouthWest(),i)._subtract(p),this.project(r.getNorthWest(),i)._subtract(p),this.project(r.getSouthEast(),i)._subtract(p),this.project(r.getNorthEast(),i)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,i,l){if(!l)return r;var p=this.project(r,i),f=this.getSize().divideBy(2),g=new ee(p.subtract(f),p.add(f)),S=this._getBoundsOffset(g,l,i);return Math.abs(S.x)<=1&&Math.abs(S.y)<=1?r:this.unproject(p.add(S),i)},_limitOffset:function(r,i){if(!i)return r;var l=this.getPixelBounds(),p=new ee(l.min.add(r),l.max.add(r));return r.add(this._getBoundsOffset(p,i))},_getBoundsOffset:function(r,i,l){var p=D(this.project(i.getNorthEast(),l),this.project(i.getSouthWest(),l)),f=p.min.subtract(r.min),g=p.max.subtract(r.max),S=this._rebound(f.x,-g.x),M=this._rebound(f.y,-g.y);return new O(S,M)},_rebound:function(r,i){return r+i>0?Math.round(r-i)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(i))},_limitZoom:function(r){var i=this.getMinZoom(),l=this.getMaxZoom(),p=te.any3d?this.options.zoomSnap:1;return p&&(r=Math.round(r/p)*p),Math.max(i,Math.min(l,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ye(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,i){var l=this._getCenterOffset(r)._trunc();return(i&&i.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,i),!0)},_createAnimProxy:function(){var r=this._proxy=$e("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(i){var l=mc,p=this._proxy.style[l];An(this._proxy,this.project(i.center,i.zoom),this.getZoomScale(i.zoom,1)),p===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Be(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),i=this.getZoom();An(this._proxy,this.project(r,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,i,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(i),f=this._getCenterOffset(r)._divideBy(1-1/p);return l.animate!==!0&&!this.getSize().contains(f)?!1:(oe(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(r,i,!0)},this),!0)},_animateZoom:function(r,i,l,p){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=i,he(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:i,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ye(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function ox(r,i){return new be(r,i)}var lr=H.extend({options:{position:"topright"},initialize:function(r){j(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var i=this._map;return i&&i.removeControl(this),this.options.position=r,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var i=this._container=this.onAdd(r),l=this.getPosition(),p=r._controlCorners[l];return he(i,"leaflet-control"),l.indexOf("bottom")!==-1?p.insertBefore(i,p.firstChild):p.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Be(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),po=function(r){return new lr(r)};be.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},i="leaflet-",l=this._controlContainer=$e("div",i+"control-container",this._container);function p(f,g){var S=i+f+" "+i+g;r[f+g]=$e("div",S,l)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)Be(this._controlCorners[r]);Be(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Th=lr.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,i,l,p){return l<p?-1:p<l?1:0}},initialize:function(r,i,l){j(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in r)this._addLayer(r[p],p);for(p in i)this._addLayer(i[p],p,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return lr.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,i){return this._addLayer(r,i),this._map?this._update():this},addOverlay:function(r,i){return this._addLayer(r,i,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var i=this._getLayer(h(r));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){he(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(he(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):Ye(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ye(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",i=this._container=$e("div",r),l=this.options.collapsed;i.setAttribute("aria-haspopup",!0),uo(i),Cc(i);var p=this._section=$e("section",r+"-list");l&&(this._map.on("click",this.collapse,this),ue(i,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=$e("a",r+"-toggle",i);f.href="#",f.title="Layers",f.setAttribute("role","button"),ue(f,{keydown:function(g){g.keyCode===13&&this._expandSafely()},click:function(g){ht(g),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=$e("div",r+"-base",p),this._separator=$e("div",r+"-separator",p),this._overlaysList=$e("div",r+"-overlays",p),i.appendChild(p)},_getLayer:function(r){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&h(this._layers[i].layer)===r)return this._layers[i]},_addLayer:function(r,i,l){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:i,overlay:l}),this.options.sortLayers&&this._layers.sort(d(function(p,f){return this.options.sortFunction(p.layer,f.layer,p.name,f.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_a(this._baseLayersList),_a(this._overlaysList),this._layerControlInputs=[];var r,i,l,p,f=0;for(l=0;l<this._layers.length;l++)p=this._layers[l],this._addItem(p),i=i||p.overlay,r=r||!p.overlay,f+=p.overlay?0:1;return this.options.hideSingleBase&&(r=r&&f>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=i&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var i=this._getLayer(h(r.target)),l=i.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;l&&this._map.fire(l,i)},_createRadioElement:function(r,i){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(i?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=l,p.firstChild},_addItem:function(r){var i=document.createElement("label"),l=this._map.hasLayer(r.layer),p;r.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=l):p=this._createRadioElement("leaflet-base-layers_"+h(this),l),this._layerControlInputs.push(p),p.layerId=h(r.layer),ue(p,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+r.name;var g=document.createElement("span");i.appendChild(g),g.appendChild(p),g.appendChild(f);var S=r.overlay?this._overlaysList:this._baseLayersList;return S.appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,i,l,p=[],f=[];this._handlingClick=!0;for(var g=r.length-1;g>=0;g--)i=r[g],l=this._getLayer(i.layerId).layer,i.checked?p.push(l):i.checked||f.push(l);for(g=0;g<f.length;g++)this._map.hasLayer(f[g])&&this._map.removeLayer(f[g]);for(g=0;g<p.length;g++)this._map.hasLayer(p[g])||this._map.addLayer(p[g]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,i,l,p=this._map.getZoom(),f=r.length-1;f>=0;f--)i=r[f],l=this._getLayer(i.layerId).layer,i.disabled=l.options.minZoom!==void 0&&p<l.options.minZoom||l.options.maxZoom!==void 0&&p>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,ue(r,"click",ht),this.expand();var i=this;setTimeout(function(){Ee(r,"click",ht),i._preventClick=!1})}}),ax=function(r,i,l){return new Th(r,i,l)},zc=lr.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var i="leaflet-control-zoom",l=$e("div",i+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,i+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,i+"-out",l,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,i,l,p,f){var g=$e("a",l,p);return g.innerHTML=r,g.href="#",g.title=i,g.setAttribute("role","button"),g.setAttribute("aria-label",i),uo(g),ue(g,"click",On),ue(g,"click",f,this),ue(g,"click",this._refocusOnMap,this),g},_updateDisabled:function(){var r=this._map,i="leaflet-disabled";Ye(this._zoomInButton,i),Ye(this._zoomOutButton,i),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(he(this._zoomOutButton,i),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(he(this._zoomInButton,i),this._zoomInButton.setAttribute("aria-disabled","true"))}});be.mergeOptions({zoomControl:!0}),be.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new zc,this.addControl(this.zoomControl))});var sx=function(r){return new zc(r)},Mh=lr.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var i="leaflet-control-scale",l=$e("div",i),p=this.options;return this._addScales(p,i+"-line",l),r.on(p.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),l},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,i,l){r.metric&&(this._mScale=$e("div",i,l)),r.imperial&&(this._iScale=$e("div",i,l))},_update:function(){var r=this._map,i=r.getSize().y/2,l=r.distance(r.containerPointToLatLng([0,i]),r.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(l)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var i=this._getRoundNum(r),l=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,l,i/r)},_updateImperial:function(r){var i=r*3.2808399,l,p,f;i>5280?(l=i/5280,p=this._getRoundNum(l),this._updateScale(this._iScale,p+" mi",p/l)):(f=this._getRoundNum(i),this._updateScale(this._iScale,f+" ft",f/i))},_updateScale:function(r,i,l){r.style.width=Math.round(this.options.maxWidth*l)+"px",r.innerHTML=i},_getRoundNum:function(r){var i=Math.pow(10,(Math.floor(r)+"").length-1),l=r/i;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,i*l}}),lx=function(r){return new Mh(r)},cx='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Lc=lr.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(te.inlineSvg?cx+" ":"")+"Leaflet</a>"},initialize:function(r){j(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=$e("div","leaflet-control-attribution"),uo(this._container);for(var i in r._layers)r._layers[i].getAttribution&&this.addAttribution(r._layers[i].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var i in this._attributions)this._attributions[i]&&r.push(i);var l=[];this.options.prefix&&l.push(this.options.prefix),r.length&&l.push(r.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});be.mergeOptions({attributionControl:!0}),be.addInitHook(function(){this.options.attributionControl&&new Lc().addTo(this)});var dx=function(r){return new Lc(r)};lr.Layers=Th,lr.Zoom=zc,lr.Scale=Mh,lr.Attribution=Lc,po.layers=ax,po.zoom=sx,po.scale=lx,po.attribution=dx;var $r=H.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});$r.addTo=function(r,i){return r.addHandler(i,this),this};var ux={Events:re},Ah=te.touch?"touchstart mousedown":"mousedown",en=ye.extend({options:{clickTolerance:3},initialize:function(r,i,l,p){j(this,p),this._element=r,this._dragStartTarget=i||r,this._preventOutline=l},enable:function(){this._enabled||(ue(this._dragStartTarget,Ah,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(en._dragging===this&&this.finishDrag(!0),Ee(this._dragStartTarget,Ah,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!gc(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){en._dragging===this&&this.finishDrag();return}if(!(en._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(en._dragging=this,this._preventOutline&&_c(this._element),xc(),so(),!this._moving)){this.fire("down");var i=r.touches?r.touches[0]:r,l=jh(this._element);this._startPoint=new O(i.clientX,i.clientY),this._startPos=In(this._element),this._parentScale=$c(l);var p=r.type==="mousedown";ue(document,p?"mousemove":"touchmove",this._onMove,this),ue(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var i=r.touches&&r.touches.length===1?r.touches[0]:r,l=new O(i.clientX,i.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,ht(r),this._moved||(this.fire("dragstart"),this._moved=!0,he(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),he(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),tt(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){Ye(document.body,"leaflet-dragging"),this._lastTarget&&(Ye(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ee(document,"mousemove touchmove",this._onMove,this),Ee(document,"mouseup touchend touchcancel",this._onUp,this),bc(),lo();var i=this._moved&&this._moving;this._moving=!1,en._dragging=!1,i&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function Ih(r,i,l){var p,f=[1,4,2,8],g,S,M,R,B,K,ie,fe;for(g=0,K=r.length;g<K;g++)r[g]._code=Nn(r[g],i);for(M=0;M<4;M++){for(ie=f[M],p=[],g=0,K=r.length,S=K-1;g<K;S=g++)R=r[g],B=r[S],R._code&ie?B._code&ie||(fe=Ca(B,R,ie,i,l),fe._code=Nn(fe,i),p.push(fe)):(B._code&ie&&(fe=Ca(B,R,ie,i,l),fe._code=Nn(fe,i),p.push(fe)),p.push(R));r=p}return r}function Rh(r,i){var l,p,f,g,S,M,R,B,K;if(!r||r.length===0)throw new Error("latlngs not passed");Yt(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var ie=P([0,0]),fe=F(r),St=fe.getNorthWest().distanceTo(fe.getSouthWest())*fe.getNorthEast().distanceTo(fe.getNorthWest());St<1700&&(ie=Ec(r));var lt=r.length,Kt=[];for(l=0;l<lt;l++){var Et=P(r[l]);Kt.push(i.project(P([Et.lat-ie.lat,Et.lng-ie.lng])))}for(M=R=B=0,l=0,p=lt-1;l<lt;p=l++)f=Kt[l],g=Kt[p],S=f.y*g.x-g.y*f.x,R+=(f.x+g.x)*S,B+=(f.y+g.y)*S,M+=S*3;M===0?K=Kt[0]:K=[R/M,B/M];var gi=i.unproject(U(K));return P([gi.lat+ie.lat,gi.lng+ie.lng])}function Ec(r){for(var i=0,l=0,p=0,f=0;f<r.length;f++){var g=P(r[f]);i+=g.lat,l+=g.lng,p++}return P([i/p,l/p])}var px={__proto__:null,clipPolygon:Ih,polygonCenter:Rh,centroid:Ec};function Oh(r,i){if(!i||!r.length)return r.slice();var l=i*i;return r=mx(r,l),r=fx(r,l),r}function Nh(r,i,l){return Math.sqrt(ho(r,i,l,!0))}function hx(r,i,l){return ho(r,i,l)}function fx(r,i){var l=r.length,p=typeof Uint8Array<"u"?Uint8Array:Array,f=new p(l);f[0]=f[l-1]=1,Tc(r,f,i,0,l-1);var g,S=[];for(g=0;g<l;g++)f[g]&&S.push(r[g]);return S}function Tc(r,i,l,p,f){var g=0,S,M,R;for(M=p+1;M<=f-1;M++)R=ho(r[M],r[p],r[f],!0),R>g&&(S=M,g=R);g>l&&(i[S]=1,Tc(r,i,l,p,S),Tc(r,i,l,S,f))}function mx(r,i){for(var l=[r[0]],p=1,f=0,g=r.length;p<g;p++)gx(r[p],r[f])>i&&(l.push(r[p]),f=p);return f<g-1&&l.push(r[g-1]),l}var Fh;function Bh(r,i,l,p,f){var g=p?Fh:Nn(r,l),S=Nn(i,l),M,R,B;for(Fh=S;;){if(!(g|S))return[r,i];if(g&S)return!1;M=g||S,R=Ca(r,i,M,l,f),B=Nn(R,l),M===g?(r=R,g=B):(i=R,S=B)}}function Ca(r,i,l,p,f){var g=i.x-r.x,S=i.y-r.y,M=p.min,R=p.max,B,K;return l&8?(B=r.x+g*(R.y-r.y)/S,K=R.y):l&4?(B=r.x+g*(M.y-r.y)/S,K=M.y):l&2?(B=R.x,K=r.y+S*(R.x-r.x)/g):l&1&&(B=M.x,K=r.y+S*(M.x-r.x)/g),new O(B,K,f)}function Nn(r,i){var l=0;return r.x<i.min.x?l|=1:r.x>i.max.x&&(l|=2),r.y<i.min.y?l|=4:r.y>i.max.y&&(l|=8),l}function gx(r,i){var l=i.x-r.x,p=i.y-r.y;return l*l+p*p}function ho(r,i,l,p){var f=i.x,g=i.y,S=l.x-f,M=l.y-g,R=S*S+M*M,B;return R>0&&(B=((r.x-f)*S+(r.y-g)*M)/R,B>1?(f=l.x,g=l.y):B>0&&(f+=S*B,g+=M*B)),S=r.x-f,M=r.y-g,p?S*S+M*M:new O(f,g)}function Yt(r){return!$(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function Dh(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Yt(r)}function Hh(r,i){var l,p,f,g,S,M,R,B;if(!r||r.length===0)throw new Error("latlngs not passed");Yt(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var K=P([0,0]),ie=F(r),fe=ie.getNorthWest().distanceTo(ie.getSouthWest())*ie.getNorthEast().distanceTo(ie.getNorthWest());fe<1700&&(K=Ec(r));var St=r.length,lt=[];for(l=0;l<St;l++){var Kt=P(r[l]);lt.push(i.project(P([Kt.lat-K.lat,Kt.lng-K.lng])))}for(l=0,p=0;l<St-1;l++)p+=lt[l].distanceTo(lt[l+1])/2;if(p===0)B=lt[0];else for(l=0,g=0;l<St-1;l++)if(S=lt[l],M=lt[l+1],f=S.distanceTo(M),g+=f,g>p){R=(g-p)/f,B=[M.x-R*(M.x-S.x),M.y-R*(M.y-S.y)];break}var Et=i.unproject(U(B));return P([Et.lat+K.lat,Et.lng+K.lng])}var yx={__proto__:null,simplify:Oh,pointToSegmentDistance:Nh,closestPointOnSegment:hx,clipSegment:Bh,_getEdgeIntersection:Ca,_getBitCode:Nn,_sqClosestPointOnSegment:ho,isFlat:Yt,_flat:Dh,polylineCenter:Hh},Mc={project:function(r){return new O(r.lng,r.lat)},unproject:function(r){return new G(r.y,r.x)},bounds:new ee([-180,-90],[180,90])},Ac={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ee([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var i=Math.PI/180,l=this.R,p=r.lat*i,f=this.R_MINOR/l,g=Math.sqrt(1-f*f),S=g*Math.sin(p),M=Math.tan(Math.PI/4-p/2)/Math.pow((1-S)/(1+S),g/2);return p=-l*Math.log(Math.max(M,1e-10)),new O(r.lng*i*l,p)},unproject:function(r){for(var i=180/Math.PI,l=this.R,p=this.R_MINOR/l,f=Math.sqrt(1-p*p),g=Math.exp(-r.y/l),S=Math.PI/2-2*Math.atan(g),M=0,R=.1,B;M<15&&Math.abs(R)>1e-7;M++)B=f*Math.sin(S),B=Math.pow((1-B)/(1+B),f/2),R=Math.PI/2-2*Math.atan(g*B)-S,S+=R;return new G(S*i,r.x*i/l)}},vx={__proto__:null,LonLat:Mc,Mercator:Ac,SphericalMercator:ve},xx=a({},q,{code:"EPSG:3395",projection:Ac,transformation:function(){var r=.5/(Math.PI*Ac.R);return se(r,.5,-r,.5)}()}),Zh=a({},q,{code:"EPSG:4326",projection:Mc,transformation:se(1/180,1,-1/180,.5)}),bx=a({},de,{projection:Mc,transformation:se(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,i){var l=i.lng-r.lng,p=i.lat-r.lat;return Math.sqrt(l*l+p*p)},infinite:!0});de.Earth=q,de.EPSG3395=xx,de.EPSG3857=qe,de.EPSG900913=xt,de.EPSG4326=Zh,de.Simple=bx;var cr=ye.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[h(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[h(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var i=r.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var l=this.getEvents();i.on(l,this),this.once("remove",function(){i.off(l,this)},this)}this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this})}}});be.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var i=h(r);return this._layers[i]?this:(this._layers[i]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var i=h(r);return this._layers[i]?(this._loaded&&r.onRemove(this),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return h(r)in this._layers},eachLayer:function(r,i){for(var l in this._layers)r.call(i,this._layers[l]);return this},_addLayers:function(r){r=r?$(r)?r:[r]:[];for(var i=0,l=r.length;i<l;i++)this.addLayer(r[i])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[h(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var i=h(r);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,i=-1/0,l=this._getZoomSpan();for(var p in this._zoomBoundLayers){var f=this._zoomBoundLayers[p].options;r=f.minZoom===void 0?r:Math.min(r,f.minZoom),i=f.maxZoom===void 0?i:Math.max(i,f.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=r===1/0?void 0:r,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ui=cr.extend({initialize:function(r,i){j(this,i),this._layers={};var l,p;if(r)for(l=0,p=r.length;l<p;l++)this.addLayer(r[l])},addLayer:function(r){var i=this.getLayerId(r);return this._layers[i]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var i=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(r){var i=typeof r=="number"?r:this.getLayerId(r);return i in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var i=Array.prototype.slice.call(arguments,1),l,p;for(l in this._layers)p=this._layers[l],p[r]&&p[r].apply(p,i);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,i){for(var l in this._layers)r.call(i,this._layers[l]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return h(r)}}),wx=function(r,i){return new ui(r,i)},Ar=ui.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),ui.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),ui.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new I;for(var i in this._layers){var l=this._layers[i];r.extend(l.getBounds?l.getBounds():l.getLatLng())}return r}}),_x=function(r,i){return new Ar(r,i)},pi=H.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){j(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,i){var l=this._getIconUrl(r);if(!l){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(l,i&&i.tagName==="IMG"?i:null);return this._setIconStyles(p,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(r,i){var l=this.options,p=l[i+"Size"];typeof p=="number"&&(p=[p,p]);var f=U(p),g=U(i==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));r.className="leaflet-marker-"+i+" "+(l.className||""),g&&(r.style.marginLeft=-g.x+"px",r.style.marginTop=-g.y+"px"),f&&(r.style.width=f.x+"px",r.style.height=f.y+"px")},_createImg:function(r,i){return i=i||document.createElement("img"),i.src=r,i},_getIconUrl:function(r){return te.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function $x(r){return new pi(r)}var fo=pi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof fo.imagePath!="string"&&(fo.imagePath=this._detectIconPath()),(this.options.imagePath||fo.imagePath)+pi.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var i=function(l,p,f){var g=p.exec(l);return g&&g[f]};return r=i(r,/^url\((['"])?(.+)\1\)$/,2),r&&i(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=$e("div","leaflet-default-icon-path",document.body),i=ao(r,"background-image")||ao(r,"backgroundImage");if(document.body.removeChild(r),i=this._stripUrl(i),i)return i;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Uh=$r.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new en(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),he(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ye(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var i=this._marker,l=i._map,p=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,g=In(i._icon),S=l.getPixelBounds(),M=l.getPixelOrigin(),R=D(S.min._subtract(M).add(f),S.max._subtract(M).subtract(f));if(!R.contains(g)){var B=U((Math.max(R.max.x,g.x)-R.max.x)/(S.max.x-R.max.x)-(Math.min(R.min.x,g.x)-R.min.x)/(S.min.x-R.min.x),(Math.max(R.max.y,g.y)-R.max.y)/(S.max.y-R.max.y)-(Math.min(R.min.y,g.y)-R.min.y)/(S.min.y-R.min.y)).multiplyBy(p);l.panBy(B,{animate:!1}),this._draggable._newPos._add(B),this._draggable._startPos._add(B),tt(i._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=oe(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(pe(this._panRequest),this._panRequest=oe(this._adjustPan.bind(this,r)))},_onDrag:function(r){var i=this._marker,l=i._shadow,p=In(i._icon),f=i._map.layerPointToLatLng(p);l&&tt(l,p),i._latlng=f,r.latlng=f,r.oldLatLng=this._oldLatLng,i.fire("move",r).fire("drag",r)},_onDragEnd:function(r){pe(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),Pa=cr.extend({options:{icon:new fo,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,i){j(this,i),this._latlng=P(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var i=this._latlng;return this._latlng=P(r),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=r.icon.createIcon(this._icon),p=!1;l!==this._icon&&(this._icon&&this._removeIcon(),p=!0,r.title&&(l.title=r.title),l.tagName==="IMG"&&(l.alt=r.alt||"")),he(l,i),r.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ue(l,"focus",this._panOnFocus,this);var f=r.icon.createShadow(this._shadow),g=!1;f!==this._shadow&&(this._removeShadow(),g=!0),f&&(he(f,i),f.alt=""),this._shadow=f,r.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&g&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ee(this._icon,"focus",this._panOnFocus,this),Be(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Be(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&tt(this._icon,r),this._shadow&&tt(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var i=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(he(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Uh)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Uh(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&qt(this._icon,r),this._shadow&&qt(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var i=this.options.icon.options,l=i.iconSize?U(i.iconSize):U(0,0),p=i.iconAnchor?U(i.iconAnchor):U(0,0);r.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:l.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function kx(r,i){return new Pa(r,i)}var tn=cr.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return j(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),za=tn.extend({options:{fill:!0,radius:10},initialize:function(r,i){j(this,i),this._latlng=P(r),this._radius=this.options.radius},setLatLng:function(r){var i=this._latlng;return this._latlng=P(r),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var i=r&&r.radius||this._radius;return tn.prototype.setStyle.call(this,r),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,i=this._radiusY||r,l=this._clickTolerance(),p=[r+l,i+l];this._pxBounds=new ee(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Sx(r,i){return new za(r,i)}var Ic=za.extend({initialize:function(r,i,l){if(typeof i=="number"&&(i=a({},l,{radius:i})),j(this,i),this._latlng=P(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new I(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:tn.prototype.setStyle,_project:function(){var r=this._latlng.lng,i=this._latlng.lat,l=this._map,p=l.options.crs;if(p.distance===q.distance){var f=Math.PI/180,g=this._mRadius/q.R/f,S=l.project([i+g,r]),M=l.project([i-g,r]),R=S.add(M).divideBy(2),B=l.unproject(R).lat,K=Math.acos((Math.cos(g*f)-Math.sin(i*f)*Math.sin(B*f))/(Math.cos(i*f)*Math.cos(B*f)))/f;(isNaN(K)||K===0)&&(K=g/Math.cos(Math.PI/180*i)),this._point=R.subtract(l.getPixelOrigin()),this._radius=isNaN(K)?0:R.x-l.project([B,r-K]).x,this._radiusY=R.y-S.y}else{var ie=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(ie).x}this._updateBounds()}});function jx(r,i,l){return new Ic(r,i,l)}var Ir=tn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,i){j(this,i),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var i=1/0,l=null,p=ho,f,g,S=0,M=this._parts.length;S<M;S++)for(var R=this._parts[S],B=1,K=R.length;B<K;B++){f=R[B-1],g=R[B];var ie=p(r,f,g,!0);ie<i&&(i=ie,l=p(r,f,g))}return l&&(l.distance=Math.sqrt(i)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Hh(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,i){return i=i||this._defaultShape(),r=P(r),i.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new I,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return Yt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var i=[],l=Yt(r),p=0,f=r.length;p<f;p++)l?(i[p]=P(r[p]),this._bounds.extend(i[p])):i[p]=this._convertLatLngs(r[p]);return i},_project:function(){var r=new ee;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),i=new O(r,r);this._rawPxBounds&&(this._pxBounds=new ee([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)]))},_projectLatlngs:function(r,i,l){var p=r[0]instanceof G,f=r.length,g,S;if(p){for(S=[],g=0;g<f;g++)S[g]=this._map.latLngToLayerPoint(r[g]),l.extend(S[g]);i.push(S)}else for(g=0;g<f;g++)this._projectLatlngs(r[g],i,l)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var i=this._parts,l,p,f,g,S,M,R;for(l=0,f=0,g=this._rings.length;l<g;l++)for(R=this._rings[l],p=0,S=R.length;p<S-1;p++)M=Bh(R[p],R[p+1],r,p,!0),M&&(i[f]=i[f]||[],i[f].push(M[0]),(M[1]!==R[p+1]||p===S-2)&&(i[f].push(M[1]),f++))}},_simplifyPoints:function(){for(var r=this._parts,i=this.options.smoothFactor,l=0,p=r.length;l<p;l++)r[l]=Oh(r[l],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,i){var l,p,f,g,S,M,R=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(l=0,g=this._parts.length;l<g;l++)for(M=this._parts[l],p=0,S=M.length,f=S-1;p<S;f=p++)if(!(!i&&p===0)&&Nh(r,M[f],M[p])<=R)return!0;return!1}});function Cx(r,i){return new Ir(r,i)}Ir._flat=Dh;var hi=Ir.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Rh(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var i=Ir.prototype._convertLatLngs.call(this,r),l=i.length;return l>=2&&i[0]instanceof G&&i[0].equals(i[l-1])&&i.pop(),i},_setLatLngs:function(r){Ir.prototype._setLatLngs.call(this,r),Yt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Yt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,i=this.options.weight,l=new O(i,i);if(r=new ee(r.min.subtract(l),r.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,f=this._rings.length,g;p<f;p++)g=Ih(this._rings[p],r,!0),g.length&&this._parts.push(g)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var i=!1,l,p,f,g,S,M,R,B;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(g=0,R=this._parts.length;g<R;g++)for(l=this._parts[g],S=0,B=l.length,M=B-1;S<B;M=S++)p=l[S],f=l[M],p.y>r.y!=f.y>r.y&&r.x<(f.x-p.x)*(r.y-p.y)/(f.y-p.y)+p.x&&(i=!i);return i||Ir.prototype._containsPoint.call(this,r,!0)}});function Px(r,i){return new hi(r,i)}var Rr=Ar.extend({initialize:function(r,i){j(this,i),this._layers={},r&&this.addData(r)},addData:function(r){var i=$(r)?r:r.features,l,p,f;if(i){for(l=0,p=i.length;l<p;l++)f=i[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var g=this.options;if(g.filter&&!g.filter(r))return this;var S=La(r,g);return S?(S.feature=Ma(r),S.defaultOptions=S.options,this.resetStyle(S),g.onEachFeature&&g.onEachFeature(r,S),this.addLayer(S)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=a({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(i){this._setLayerStyle(i,r)},this)},_setLayerStyle:function(r,i){r.setStyle&&(typeof i=="function"&&(i=i(r.feature)),r.setStyle(i))}});function La(r,i){var l=r.type==="Feature"?r.geometry:r,p=l?l.coordinates:null,f=[],g=i&&i.pointToLayer,S=i&&i.coordsToLatLng||Rc,M,R,B,K;if(!p&&!l)return null;switch(l.type){case"Point":return M=S(p),Vh(g,r,M,i);case"MultiPoint":for(B=0,K=p.length;B<K;B++)M=S(p[B]),f.push(Vh(g,r,M,i));return new Ar(f);case"LineString":case"MultiLineString":return R=Ea(p,l.type==="LineString"?0:1,S),new Ir(R,i);case"Polygon":case"MultiPolygon":return R=Ea(p,l.type==="Polygon"?1:2,S),new hi(R,i);case"GeometryCollection":for(B=0,K=l.geometries.length;B<K;B++){var ie=La({geometry:l.geometries[B],type:"Feature",properties:r.properties},i);ie&&f.push(ie)}return new Ar(f);case"FeatureCollection":for(B=0,K=l.features.length;B<K;B++){var fe=La(l.features[B],i);fe&&f.push(fe)}return new Ar(f);default:throw new Error("Invalid GeoJSON object.")}}function Vh(r,i,l,p){return r?r(i,l):new Pa(l,p&&p.markersInheritOptions&&p)}function Rc(r){return new G(r[1],r[0],r[2])}function Ea(r,i,l){for(var p=[],f=0,g=r.length,S;f<g;f++)S=i?Ea(r[f],i-1,l):(l||Rc)(r[f]),p.push(S);return p}function Oc(r,i){return r=P(r),r.alt!==void 0?[w(r.lng,i),w(r.lat,i),w(r.alt,i)]:[w(r.lng,i),w(r.lat,i)]}function Ta(r,i,l,p){for(var f=[],g=0,S=r.length;g<S;g++)f.push(i?Ta(r[g],Yt(r[g])?0:i-1,l,p):Oc(r[g],p));return!i&&l&&f.length>0&&f.push(f[0].slice()),f}function fi(r,i){return r.feature?a({},r.feature,{geometry:i}):Ma(i)}function Ma(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var Nc={toGeoJSON:function(r){return fi(this,{type:"Point",coordinates:Oc(this.getLatLng(),r)})}};Pa.include(Nc),Ic.include(Nc),za.include(Nc),Ir.include({toGeoJSON:function(r){var i=!Yt(this._latlngs),l=Ta(this._latlngs,i?1:0,!1,r);return fi(this,{type:(i?"Multi":"")+"LineString",coordinates:l})}}),hi.include({toGeoJSON:function(r){var i=!Yt(this._latlngs),l=i&&!Yt(this._latlngs[0]),p=Ta(this._latlngs,l?2:i?1:0,!0,r);return i||(p=[p]),fi(this,{type:(l?"Multi":"")+"Polygon",coordinates:p})}}),ui.include({toMultiPoint:function(r){var i=[];return this.eachLayer(function(l){i.push(l.toGeoJSON(r).geometry.coordinates)}),fi(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(r){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(i==="MultiPoint")return this.toMultiPoint(r);var l=i==="GeometryCollection",p=[];return this.eachLayer(function(f){if(f.toGeoJSON){var g=f.toGeoJSON(r);if(l)p.push(g.geometry);else{var S=Ma(g);S.type==="FeatureCollection"?p.push.apply(p,S.features):p.push(S)}}}),l?fi(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Wh(r,i){return new Rr(r,i)}var zx=Wh,Aa=cr.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,i,l){this._url=r,this._bounds=F(i),j(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(he(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Be(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&ci(this._image),this},bringToBack:function(){return this._map&&di(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=F(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",i=this._image=r?this._url:$e("img");if(he(i,"leaflet-image-layer"),this._zoomAnimated&&he(i,"leaflet-zoom-animated"),this.options.className&&he(i,this.options.className),i.onselectstart=v,i.onmousemove=v,i.onload=d(this.fire,this,"load"),i.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=i.src;return}i.src=this._url,i.alt=this.options.alt},_animateZoom:function(r){var i=this._map.getZoomScale(r.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;An(this._image,l,i)},_reset:function(){var r=this._image,i=new ee(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=i.getSize();tt(r,i.min),r.style.width=l.x+"px",r.style.height=l.y+"px"},_updateOpacity:function(){qt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),Lx=function(r,i,l){return new Aa(r,i,l)},Gh=Aa.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",i=this._image=r?this._url:$e("video");if(he(i,"leaflet-image-layer"),this._zoomAnimated&&he(i,"leaflet-zoom-animated"),this.options.className&&he(i,this.options.className),i.onselectstart=v,i.onmousemove=v,i.onloadeddata=d(this.fire,this,"load"),r){for(var l=i.getElementsByTagName("source"),p=[],f=0;f<l.length;f++)p.push(l[f].src);this._url=l.length>0?p:[i.src];return}$(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(i.style,"objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop,i.muted=!!this.options.muted,i.playsInline=!!this.options.playsInline;for(var g=0;g<this._url.length;g++){var S=$e("source");S.src=this._url[g],i.appendChild(S)}}});function Ex(r,i,l){return new Gh(r,i,l)}var qh=Aa.extend({_initImage:function(){var r=this._image=this._url;he(r,"leaflet-image-layer"),this._zoomAnimated&&he(r,"leaflet-zoom-animated"),this.options.className&&he(r,this.options.className),r.onselectstart=v,r.onmousemove=v}});function Tx(r,i,l){return new qh(r,i,l)}var kr=cr.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,i){r&&(r instanceof G||$(r))?(this._latlng=P(r),j(this,i)):(j(this,r),this._source=i),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&qt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&qt(this._container,1),this.bringToFront(),this.options.interactive&&(he(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(qt(this._container,0),this._removeTimeout=setTimeout(d(Be,void 0,this._container),200)):Be(this._container),this.options.interactive&&(Ye(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=P(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ci(this._container),this},bringToBack:function(){return this._map&&di(this._container),this},_prepareOpen:function(r){var i=this._source;if(!i._map)return!1;if(i instanceof Ar){i=null;var l=this._source._layers;for(var p in l)if(l[p]._map){i=l[p];break}if(!i)return!1;this._source=i}if(!r)if(i.getCenter)r=i.getCenter();else if(i.getLatLng)r=i.getLatLng();else if(i.getBounds)r=i.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,i=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof i=="string")r.innerHTML=i;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),i=U(this.options.offset),l=this._getAnchor();this._zoomAnimated?tt(this._container,r.add(l)):i=i.add(r).add(l);var p=this._containerBottom=-i.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=p+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});be.include({_initOverlay:function(r,i,l,p){var f=i;return f instanceof r||(f=new r(p).setContent(i)),l&&f.setLatLng(l),f}}),cr.include({_initOverlay:function(r,i,l,p){var f=l;return f instanceof r?(j(f,p),f._source=this):(f=i&&!p?i:new r(p,this),f.setContent(l)),f}});var Ia=kr.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,kr.prototype.openOn.call(this,r)},onAdd:function(r){kr.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof tn||this._source.on("preclick",Rn))},onRemove:function(r){kr.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof tn||this._source.off("preclick",Rn))},getEvents:function(){var r=kr.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",i=this._container=$e("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=$e("div",r+"-content-wrapper",i);if(this._contentNode=$e("div",r+"-content",l),uo(i),Cc(this._contentNode),ue(i,"contextmenu",Rn),this._tipContainer=$e("div",r+"-tip-container",i),this._tip=$e("div",r+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=$e("a",r+"-close-button",i);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',ue(p,"click",function(f){ht(f),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,i=r.style;i.width="",i.whiteSpace="nowrap";var l=r.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),i.width=l+1+"px",i.whiteSpace="",i.height="";var p=r.offsetHeight,f=this.options.maxHeight,g="leaflet-popup-scrolled";f&&p>f?(i.height=f+"px",he(r,g)):Ye(r,g),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var i=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),l=this._getAnchor();tt(this._container,i.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,i=parseInt(ao(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+i,p=this._containerWidth,f=new O(this._containerLeft,-l-this._containerBottom);f._add(In(this._container));var g=r.layerPointToContainerPoint(f),S=U(this.options.autoPanPadding),M=U(this.options.autoPanPaddingTopLeft||S),R=U(this.options.autoPanPaddingBottomRight||S),B=r.getSize(),K=0,ie=0;g.x+p+R.x>B.x&&(K=g.x+p-B.x+R.x),g.x-K-M.x<0&&(K=g.x-M.x),g.y+l+R.y>B.y&&(ie=g.y+l-B.y+R.y),g.y-ie-M.y<0&&(ie=g.y-M.y),(K||ie)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([K,ie]))}},_getAnchor:function(){return U(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Mx=function(r,i){return new Ia(r,i)};be.mergeOptions({closePopupOnClick:!0}),be.include({openPopup:function(r,i,l){return this._initOverlay(Ia,r,i,l).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),cr.include({bindPopup:function(r,i){return this._popup=this._initOverlay(Ia,this._popup,r,i),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof Ar||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){On(r);var i=r.layer||r.target;if(this._popup._source===i&&!(i instanceof tn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=i,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var Ra=kr.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){kr.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){kr.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=kr.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",i=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=$e("div",i),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var i,l,p=this._map,f=this._container,g=p.latLngToContainerPoint(p.getCenter()),S=p.layerPointToContainerPoint(r),M=this.options.direction,R=f.offsetWidth,B=f.offsetHeight,K=U(this.options.offset),ie=this._getAnchor();M==="top"?(i=R/2,l=B):M==="bottom"?(i=R/2,l=0):M==="center"?(i=R/2,l=B/2):M==="right"?(i=0,l=B/2):M==="left"?(i=R,l=B/2):S.x<g.x?(M="right",i=0,l=B/2):(M="left",i=R+(K.x+ie.x)*2,l=B/2),r=r.subtract(U(i,l,!0)).add(K).add(ie),Ye(f,"leaflet-tooltip-right"),Ye(f,"leaflet-tooltip-left"),Ye(f,"leaflet-tooltip-top"),Ye(f,"leaflet-tooltip-bottom"),he(f,"leaflet-tooltip-"+M),tt(f,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&qt(this._container,r)},_animateZoom:function(r){var i=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(i)},_getAnchor:function(){return U(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ax=function(r,i){return new Ra(r,i)};be.include({openTooltip:function(r,i,l){return this._initOverlay(Ra,r,i,l).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),cr.include({bindTooltip:function(r,i){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ra,this._tooltip,r,i),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var i=r?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[i](l),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof Ar||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var i=typeof r.getElement=="function"&&r.getElement();i&&(ue(i,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),ue(i,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var i=typeof r.getElement=="function"&&r.getElement();i&&i.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var i=this;this._map.once("moveend",function(){i._openOnceFlag=!1,i._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var i=r.latlng,l,p;this._tooltip.options.sticky&&r.originalEvent&&(l=this._map.mouseEventToContainerPoint(r.originalEvent),p=this._map.containerPointToLayerPoint(l),i=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(i)}});var Yh=pi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var i=r&&r.tagName==="DIV"?r:document.createElement("div"),l=this.options;if(l.html instanceof Element?(_a(i),i.appendChild(l.html)):i.innerHTML=l.html!==!1?l.html:"",l.bgPos){var p=U(l.bgPos);i.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});function Ix(r){return new Yh(r)}pi.Default=fo;var mo=cr.extend({options:{tileSize:256,opacity:1,updateWhenIdle:te.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){j(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),Be(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ci(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(di(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=y(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof O?r:new O(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var i=this.getPane().children,l=-r(-1/0,1/0),p=0,f=i.length,g;p<f;p++)g=i[p].style.zIndex,i[p]!==this._container&&g&&(l=r(l,+g));isFinite(l)&&(this.options.zIndex=l+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!te.ielt9){qt(this._container,this.options.opacity);var r=+new Date,i=!1,l=!1;for(var p in this._tiles){var f=this._tiles[p];if(!(!f.current||!f.loaded)){var g=Math.min(1,(r-f.loaded)/200);qt(f.el,g),g<1?i=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),i&&(pe(this._fadeFrame),this._fadeFrame=oe(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=$e("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,i=this.options.maxZoom;if(r!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===r?(this._levels[l].el.style.zIndex=i-Math.abs(r-l),this._onUpdateLevel(l)):(Be(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var p=this._levels[r],f=this._map;return p||(p=this._levels[r]={},p.el=$e("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=i,p.origin=f.project(f.unproject(f.getPixelOrigin()),r).round(),p.zoom=r,this._setZoomTransform(p,f.getCenter(),f.getZoom()),v(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var r,i,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)i=this._tiles[r],i.retain=i.current;for(r in this._tiles)if(i=this._tiles[r],i.current&&!i.active){var p=i.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var i in this._tiles)this._tiles[i].coords.z===r&&this._removeTile(i)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)Be(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,i,l,p){var f=Math.floor(r/2),g=Math.floor(i/2),S=l-1,M=new O(+f,+g);M.z=+S;var R=this._tileCoordsToKey(M),B=this._tiles[R];return B&&B.active?(B.retain=!0,!0):(B&&B.loaded&&(B.retain=!0),S>p?this._retainParent(f,g,S,p):!1)},_retainChildren:function(r,i,l,p){for(var f=2*r;f<2*r+2;f++)for(var g=2*i;g<2*i+2;g++){var S=new O(f,g);S.z=l+1;var M=this._tileCoordsToKey(S),R=this._tiles[M];if(R&&R.active){R.retain=!0;continue}else R&&R.loaded&&(R.retain=!0);l+1<p&&this._retainChildren(f,g,l+1,p)}},_resetView:function(r){var i=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var i=this.options;return i.minNativeZoom!==void 0&&r<i.minNativeZoom?i.minNativeZoom:i.maxNativeZoom!==void 0&&i.maxNativeZoom<r?i.maxNativeZoom:r},_setView:function(r,i,l,p){var f=Math.round(i);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var g=this.options.updateWhenZooming&&f!==this._tileZoom;(!p||g)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(r),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(r,i)},_setZoomTransforms:function(r,i){for(var l in this._levels)this._setZoomTransform(this._levels[l],r,i)},_setZoomTransform:function(r,i,l){var p=this._map.getZoomScale(l,r.zoom),f=r.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(i,l)).round();te.any3d?An(r.el,f,p):tt(r.el,f)},_resetGrid:function(){var r=this._map,i=r.options.crs,l=this._tileSize=this.getTileSize(),p=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,i.wrapLng[0]],p).x/l.x),Math.ceil(r.project([0,i.wrapLng[1]],p).x/l.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([i.wrapLat[0],0],p).y/l.x),Math.ceil(r.project([i.wrapLat[1],0],p).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var i=this._map,l=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),p=i.getZoomScale(l,this._tileZoom),f=i.project(r,this._tileZoom).floor(),g=i.getSize().divideBy(p*2);return new ee(f.subtract(g),f.add(g))},_update:function(r){var i=this._map;if(i){var l=this._clampZoom(i.getZoom());if(r===void 0&&(r=i.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(r),f=this._pxBoundsToTileRange(p),g=f.getCenter(),S=[],M=this.options.keepBuffer,R=new ee(f.getBottomLeft().subtract([M,-M]),f.getTopRight().add([M,-M]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var B in this._tiles){var K=this._tiles[B].coords;(K.z!==this._tileZoom||!R.contains(new O(K.x,K.y)))&&(this._tiles[B].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(r,l);return}for(var ie=f.min.y;ie<=f.max.y;ie++)for(var fe=f.min.x;fe<=f.max.x;fe++){var St=new O(fe,ie);if(St.z=this._tileZoom,!!this._isValidTile(St)){var lt=this._tiles[this._tileCoordsToKey(St)];lt?lt.current=!0:S.push(St)}}if(S.sort(function(Et,gi){return Et.distanceTo(g)-gi.distanceTo(g)}),S.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Kt=document.createDocumentFragment();for(fe=0;fe<S.length;fe++)this._addTile(S[fe],Kt);this._level.el.appendChild(Kt)}}}},_isValidTile:function(r){var i=this._map.options.crs;if(!i.infinite){var l=this._globalTileRange;if(!i.wrapLng&&(r.x<l.min.x||r.x>l.max.x)||!i.wrapLat&&(r.y<l.min.y||r.y>l.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(r);return F(this.options.bounds).overlaps(p)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var i=this._map,l=this.getTileSize(),p=r.scaleBy(l),f=p.add(l),g=i.unproject(p,r.z),S=i.unproject(f,r.z);return[g,S]},_tileCoordsToBounds:function(r){var i=this._tileCoordsToNwSe(r),l=new I(i[0],i[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var i=r.split(":"),l=new O(+i[0],+i[1]);return l.z=+i[2],l},_removeTile:function(r){var i=this._tiles[r];i&&(Be(i.el),delete this._tiles[r],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){he(r,"leaflet-tile");var i=this.getTileSize();r.style.width=i.x+"px",r.style.height=i.y+"px",r.onselectstart=v,r.onmousemove=v,te.ielt9&&this.options.opacity<1&&qt(r,this.options.opacity)},_addTile:function(r,i){var l=this._getTilePos(r),p=this._tileCoordsToKey(r),f=this.createTile(this._wrapCoords(r),d(this._tileReady,this,r));this._initTile(f),this.createTile.length<2&&oe(d(this._tileReady,this,r,null,f)),tt(f,l),this._tiles[p]={el:f,coords:r,current:!0},i.appendChild(f),this.fire("tileloadstart",{tile:f,coords:r})},_tileReady:function(r,i,l){i&&this.fire("tileerror",{error:i,tile:l,coords:r});var p=this._tileCoordsToKey(r);l=this._tiles[p],l&&(l.loaded=+new Date,this._map._fadeAnimated?(qt(l.el,0),pe(this._fadeFrame),this._fadeFrame=oe(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),i||(he(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),te.ielt9||!this._map._fadeAnimated?oe(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var i=new O(this._wrapX?x(r.x,this._wrapX):r.x,this._wrapY?x(r.y,this._wrapY):r.y);return i.z=r.z,i},_pxBoundsToTileRange:function(r){var i=this.getTileSize();return new ee(r.min.unscaleBy(i).floor(),r.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function Rx(r){return new mo(r)}var mi=mo.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,i){this._url=r,i=j(this,i),i.detectRetina&&te.retina&&i.maxZoom>0?(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom=Math.min(i.maxZoom,i.minZoom+1)):(i.zoomOffset++,i.maxZoom=Math.max(i.minZoom,i.maxZoom-1)),i.minZoom=Math.max(0,i.minZoom)):i.zoomReverse?i.minZoom=Math.min(i.maxZoom,i.minZoom):i.maxZoom=Math.max(i.minZoom,i.maxZoom),typeof i.subdomains=="string"&&(i.subdomains=i.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,i){return this._url===r&&i===void 0&&(i=!0),this._url=r,i||this.redraw(),this},createTile:function(r,i){var l=document.createElement("img");return ue(l,"load",d(this._tileOnLoad,this,i,l)),ue(l,"error",d(this._tileOnError,this,i,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(r),l},getTileUrl:function(r){var i={r:te.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-r.y;this.options.tms&&(i.y=l),i["-y"]=l}return b(this._url,a(i,this.options))},_tileOnLoad:function(r,i){te.ielt9?setTimeout(d(r,this,null,i),0):r(null,i)},_tileOnError:function(r,i,l){var p=this.options.errorTileUrl;p&&i.getAttribute("src")!==p&&(i.src=p),r(l,i)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,i=this.options.maxZoom,l=this.options.zoomReverse,p=this.options.zoomOffset;return l&&(r=i-r),r+p},_getSubdomain:function(r){var i=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var r,i;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(i=this._tiles[r].el,i.onload=v,i.onerror=v,!i.complete)){i.src=E;var l=this._tiles[r].coords;Be(i),delete this._tiles[r],this.fire("tileabort",{tile:i,coords:l})}},_removeTile:function(r){var i=this._tiles[r];if(i)return i.el.setAttribute("src",E),mo.prototype._removeTile.call(this,r)},_tileReady:function(r,i,l){if(!(!this._map||l&&l.getAttribute("src")===E))return mo.prototype._tileReady.call(this,r,i,l)}});function Kh(r,i){return new mi(r,i)}var Qh=mi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,i){this._url=r;var l=a({},this.defaultWmsParams);for(var p in i)p in this.options||(l[p]=i[p]);i=j(this,i);var f=i.detectRetina&&te.retina?2:1,g=this.getTileSize();l.width=g.x*f,l.height=g.y*f,this.wmsParams=l},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,mi.prototype.onAdd.call(this,r)},getTileUrl:function(r){var i=this._tileCoordsToNwSe(r),l=this._crs,p=D(l.project(i[0]),l.project(i[1])),f=p.min,g=p.max,S=(this._wmsVersion>=1.3&&this._crs===Zh?[f.y,f.x,g.y,g.x]:[f.x,f.y,g.x,g.y]).join(","),M=mi.prototype.getTileUrl.call(this,r);return M+z(this.wmsParams,M,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+S},setParams:function(r,i){return a(this.wmsParams,r),i||this.redraw(),this}});function Ox(r,i){return new Qh(r,i)}mi.WMS=Qh,Kh.wms=Ox;var Or=cr.extend({options:{padding:.1},initialize:function(r){j(this,r),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),he(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,i){var l=this._map.getZoomScale(i,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,i),g=p.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(r,i));te.any3d?An(this._container,g,l):tt(this._container,g)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,i=this._map.getSize(),l=this._map.containerPointToLayerPoint(i.multiplyBy(-r)).round();this._bounds=new ee(l,l.add(i.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Xh=Or.extend({options:{tolerance:0},getEvents:function(){var r=Or.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Or.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");ue(r,"mousemove",this._onMouseMove,this),ue(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ue(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){pe(this._redrawRequest),delete this._ctx,Be(this._container),Ee(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var i in this._layers)r=this._layers[i],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Or.prototype._update.call(this);var r=this._bounds,i=this._container,l=r.getSize(),p=te.retina?2:1;tt(i,r.min),i.width=p*l.x,i.height=p*l.y,i.style.width=l.x+"px",i.style.height=l.y+"px",te.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){Or.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[h(r)]=r;var i=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var i=r._order,l=i.next,p=i.prev;l?l.prev=p:this._drawLast=p,p?p.next=l:this._drawFirst=l,delete r._order,delete this._layers[h(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var i=r.options.dashArray.split(/[, ]+/),l=[],p,f;for(f=0;f<i.length;f++){if(p=Number(i[f]),isNaN(p))return;l.push(p)}r.options._dashArray=l}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||oe(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var i=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ee,this._redrawBounds.extend(r._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(r._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var i=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,i.x,i.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,i=this._redrawBounds;if(this._ctx.save(),i){var l=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)r=p.layer,(!i||r._pxBounds&&r._pxBounds.intersects(i))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,i){if(this._drawing){var l,p,f,g,S=r._parts,M=S.length,R=this._ctx;if(M){for(R.beginPath(),l=0;l<M;l++){for(p=0,f=S[l].length;p<f;p++)g=S[l][p],R[p?"lineTo":"moveTo"](g.x,g.y);i&&R.closePath()}this._fillStroke(R,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var i=r._point,l=this._ctx,p=Math.max(Math.round(r._radius),1),f=(Math.max(Math.round(r._radiusY),1)||p)/p;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(i.x,i.y/f,p,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,r)}},_fillStroke:function(r,i){var l=i.options;l.fill&&(r.globalAlpha=l.fillOpacity,r.fillStyle=l.fillColor||l.color,r.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(r.setLineDash&&r.setLineDash(i.options&&i.options._dashArray||[]),r.globalAlpha=l.opacity,r.lineWidth=l.weight,r.strokeStyle=l.color,r.lineCap=l.lineCap,r.lineJoin=l.lineJoin,r.stroke())},_onClick:function(r){for(var i=this._map.mouseEventToLayerPoint(r),l,p,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(i)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(l))&&(p=l);this._fireEvent(p?[p]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var i=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,i)}},_handleMouseOut:function(r){var i=this._hoveredLayer;i&&(Ye(this._container,"leaflet-interactive"),this._fireEvent([i],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,i){if(!this._mouseHoverThrottled){for(var l,p,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(i)&&(p=l);p!==this._hoveredLayer&&(this._handleMouseOut(r),p&&(he(this._container,"leaflet-interactive"),this._fireEvent([p],r,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,i,l){this._map._fireDOMEvent(i,l||i.type,r)},_bringToFront:function(r){var i=r._order;if(i){var l=i.next,p=i.prev;if(l)l.prev=p;else return;p?p.next=l:l&&(this._drawFirst=l),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(r)}},_bringToBack:function(r){var i=r._order;if(i){var l=i.next,p=i.prev;if(p)p.next=l;else return;l?l.prev=p:p&&(this._drawLast=p),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(r)}}});function Jh(r){return te.canvas?new Xh(r):null}var go=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Nx={_initContainer:function(){this._container=$e("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Or.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var i=r._container=go("shape");he(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",r._path=go("path"),i.appendChild(r._path),this._updateStyle(r),this._layers[h(r)]=r},_addPath:function(r){var i=r._container;this._container.appendChild(i),r.options.interactive&&r.addInteractiveTarget(i)},_removePath:function(r){var i=r._container;Be(i),r.removeInteractiveTarget(i),delete this._layers[h(r)]},_updateStyle:function(r){var i=r._stroke,l=r._fill,p=r.options,f=r._container;f.stroked=!!p.stroke,f.filled=!!p.fill,p.stroke?(i||(i=r._stroke=go("stroke")),f.appendChild(i),i.weight=p.weight+"px",i.color=p.color,i.opacity=p.opacity,p.dashArray?i.dashStyle=$(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=p.lineCap.replace("butt","flat"),i.joinstyle=p.lineJoin):i&&(f.removeChild(i),r._stroke=null),p.fill?(l||(l=r._fill=go("fill")),f.appendChild(l),l.color=p.fillColor||p.color,l.opacity=p.fillOpacity):l&&(f.removeChild(l),r._fill=null)},_updateCircle:function(r){var i=r._point.round(),l=Math.round(r._radius),p=Math.round(r._radiusY||l);this._setPath(r,r._empty()?"M0 0":"AL "+i.x+","+i.y+" "+l+","+p+" 0,"+65535*360)},_setPath:function(r,i){r._path.v=i},_bringToFront:function(r){ci(r._container)},_bringToBack:function(r){di(r._container)}},Oa=te.vml?go:ge,yo=Or.extend({_initContainer:function(){this._container=Oa("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Oa("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Be(this._container),Ee(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Or.prototype._update.call(this);var r=this._bounds,i=r.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(i))&&(this._svgSize=i,l.setAttribute("width",i.x),l.setAttribute("height",i.y)),tt(l,r.min),l.setAttribute("viewBox",[r.min.x,r.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(r){var i=r._path=Oa("path");r.options.className&&he(i,r.options.className),r.options.interactive&&he(i,"leaflet-interactive"),this._updateStyle(r),this._layers[h(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){Be(r._path),r.removeInteractiveTarget(r._path),delete this._layers[h(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var i=r._path,l=r.options;i&&(l.stroke?(i.setAttribute("stroke",l.color),i.setAttribute("stroke-opacity",l.opacity),i.setAttribute("stroke-width",l.weight),i.setAttribute("stroke-linecap",l.lineCap),i.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?i.setAttribute("stroke-dasharray",l.dashArray):i.removeAttribute("stroke-dasharray"),l.dashOffset?i.setAttribute("stroke-dashoffset",l.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),l.fill?(i.setAttribute("fill",l.fillColor||l.color),i.setAttribute("fill-opacity",l.fillOpacity),i.setAttribute("fill-rule",l.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(r,i){this._setPath(r,ot(r._parts,i))},_updateCircle:function(r){var i=r._point,l=Math.max(Math.round(r._radius),1),p=Math.max(Math.round(r._radiusY),1)||l,f="a"+l+","+p+" 0 1,0 ",g=r._empty()?"M0 0":"M"+(i.x-l)+","+i.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(r,g)},_setPath:function(r,i){r._path.setAttribute("d",i)},_bringToFront:function(r){ci(r._path)},_bringToBack:function(r){di(r._path)}});te.vml&&yo.include(Nx);function ef(r){return te.svg||te.vml?new yo(r):null}be.include({getRenderer:function(r){var i=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var i=this._paneRenderers[r];return i===void 0&&(i=this._createRenderer({pane:r}),this._paneRenderers[r]=i),i},_createRenderer:function(r){return this.options.preferCanvas&&Jh(r)||ef(r)}});var tf=hi.extend({initialize:function(r,i){hi.prototype.initialize.call(this,this._boundsToLatLngs(r),i)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=F(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function Fx(r,i){return new tf(r,i)}yo.create=Oa,yo.pointsToPath=ot,Rr.geometryToLayer=La,Rr.coordsToLatLng=Rc,Rr.coordsToLatLngs=Ea,Rr.latLngToCoords=Oc,Rr.latLngsToCoords=Ta,Rr.getFeature=fi,Rr.asFeature=Ma,be.mergeOptions({boxZoom:!0});var rf=$r.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){ue(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ee(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Be(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),so(),xc(),this._startPoint=this._map.mouseEventToContainerPoint(r),ue(document,{contextmenu:On,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=$e("div","leaflet-zoom-box",this._container),he(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var i=new ee(this._point,this._startPoint),l=i.getSize();tt(this._box,i.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Be(this._box),Ye(this._container,"leaflet-crosshair")),lo(),bc(),Ee(document,{contextmenu:On,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var i=new I(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});be.addInitHook("addHandler","boxZoom",rf),be.mergeOptions({doubleClickZoom:!0});var nf=$r.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var i=this._map,l=i.getZoom(),p=i.options.zoomDelta,f=r.originalEvent.shiftKey?l-p:l+p;i.options.doubleClickZoom==="center"?i.setZoom(f):i.setZoomAround(r.containerPoint,f)}});be.addInitHook("addHandler","doubleClickZoom",nf),be.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var of=$r.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new en(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}he(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ye(this._map._container,"leaflet-grab"),Ye(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=F(this._map.options.maxBounds);this._offsetLimit=D(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var i=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(i),this._prunePositions(i)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,i){return r-(r-i)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;r.x<i.min.x&&(r.x=this._viscousLimit(r.x,i.min.x)),r.y<i.min.y&&(r.y=this._viscousLimit(r.y,i.min.y)),r.x>i.max.x&&(r.x=this._viscousLimit(r.x,i.max.x)),r.y>i.max.y&&(r.y=this._viscousLimit(r.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,i=Math.round(r/2),l=this._initialWorldOffset,p=this._draggable._newPos.x,f=(p-i+l)%r+i-l,g=(p+i+l)%r-i-l,S=Math.abs(f+l)<Math.abs(g+l)?f:g;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=S},_onDragEnd:function(r){var i=this._map,l=i.options,p=!l.inertia||r.noInertia||this._times.length<2;if(i.fire("dragend",r),p)i.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),g=(this._lastTime-this._times[0])/1e3,S=l.easeLinearity,M=f.multiplyBy(S/g),R=M.distanceTo([0,0]),B=Math.min(l.inertiaMaxSpeed,R),K=M.multiplyBy(B/R),ie=B/(l.inertiaDeceleration*S),fe=K.multiplyBy(-ie/2).round();!fe.x&&!fe.y?i.fire("moveend"):(fe=i._limitOffset(fe,i.options.maxBounds),oe(function(){i.panBy(fe,{duration:ie,easeLinearity:S,noMoveStart:!0,animate:!0})}))}}});be.addInitHook("addHandler","dragging",of),be.mergeOptions({keyboard:!0,keyboardPanDelta:80});var af=$r.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),ue(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ee(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,i=document.documentElement,l=r.scrollTop||i.scrollTop,p=r.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(p,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var i=this._panKeys={},l=this.keyCodes,p,f;for(p=0,f=l.left.length;p<f;p++)i[l.left[p]]=[-1*r,0];for(p=0,f=l.right.length;p<f;p++)i[l.right[p]]=[r,0];for(p=0,f=l.down.length;p<f;p++)i[l.down[p]]=[0,r];for(p=0,f=l.up.length;p<f;p++)i[l.up[p]]=[0,-1*r]},_setZoomDelta:function(r){var i=this._zoomKeys={},l=this.keyCodes,p,f;for(p=0,f=l.zoomIn.length;p<f;p++)i[l.zoomIn[p]]=r;for(p=0,f=l.zoomOut.length;p<f;p++)i[l.zoomOut[p]]=-r},_addHooks:function(){ue(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ee(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var i=r.keyCode,l=this._map,p;if(i in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(p=this._panKeys[i],r.shiftKey&&(p=U(p).multiplyBy(3)),l.options.maxBounds&&(p=l._limitOffset(U(p),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(p)));l.panTo(f)}else l.panBy(p)}else if(i in this._zoomKeys)l.setZoom(l.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[i]);else if(i===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;On(r)}}});be.addInitHook("addHandler","keyboard",af),be.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var sf=$r.extend({addHooks:function(){ue(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ee(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var i=Lh(r),l=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var p=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),p),On(r)},_performZoom:function(){var r=this._map,i=r.getZoom(),l=this._map.options.zoomSnap||0;r._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,g=l?Math.ceil(f/l)*l:f,S=r._limitZoom(i+(this._delta>0?g:-g))-i;this._delta=0,this._startTime=null,S&&(r.options.scrollWheelZoom==="center"?r.setZoom(i+S):r.setZoomAround(this._lastMousePos,i+S))}});be.addInitHook("addHandler","scrollWheelZoom",sf);var Bx=600;be.mergeOptions({tapHold:te.touchNative&&te.safari&&te.mobile,tapTolerance:15});var lf=$r.extend({addHooks:function(){ue(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ee(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var i=r.touches[0];this._startPos=this._newPos=new O(i.clientX,i.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&(ue(document,"touchend",ht),ue(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",i))},this),Bx),ue(document,"touchend touchcancel contextmenu",this._cancel,this),ue(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){Ee(document,"touchend",ht),Ee(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),Ee(document,"touchend touchcancel contextmenu",this._cancel,this),Ee(document,"touchmove",this._onMove,this)},_onMove:function(r){var i=r.touches[0];this._newPos=new O(i.clientX,i.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,i){var l=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY});l._simulated=!0,i.target.dispatchEvent(l)}});be.addInitHook("addHandler","tapHold",lf),be.mergeOptions({touchZoom:te.touch,bounceAtZoomLimits:!0});var cf=$r.extend({addHooks:function(){he(this._map._container,"leaflet-touch-zoom"),ue(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ye(this._map._container,"leaflet-touch-zoom"),Ee(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var i=this._map;if(!(!r.touches||r.touches.length!==2||i._animatingZoom||this._zooming)){var l=i.mouseEventToContainerPoint(r.touches[0]),p=i.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),i.options.touchZoom!=="center"&&(this._pinchStartLatLng=i.containerPointToLatLng(l.add(p)._divideBy(2))),this._startDist=l.distanceTo(p),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),ue(document,"touchmove",this._onTouchMove,this),ue(document,"touchend touchcancel",this._onTouchEnd,this),ht(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var i=this._map,l=i.mouseEventToContainerPoint(r.touches[0]),p=i.mouseEventToContainerPoint(r.touches[1]),f=l.distanceTo(p)/this._startDist;if(this._zoom=i.getScaleZoom(f,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&f<1||this._zoom>i.getMaxZoom()&&f>1)&&(this._zoom=i._limitZoom(this._zoom)),i.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var g=l._add(p)._divideBy(2)._subtract(this._centerPoint);if(f===1&&g.x===0&&g.y===0)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(g),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),pe(this._animRequest);var S=d(i._move,i,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=oe(S,this,!0),ht(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,pe(this._animRequest),Ee(document,"touchmove",this._onTouchMove,this),Ee(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});be.addInitHook("addHandler","touchZoom",cf),be.BoxZoom=rf,be.DoubleClickZoom=nf,be.Drag=of,be.Keyboard=af,be.ScrollWheelZoom=sf,be.TapHold=lf,be.TouchZoom=cf,n.Bounds=ee,n.Browser=te,n.CRS=de,n.Canvas=Xh,n.Circle=Ic,n.CircleMarker=za,n.Class=H,n.Control=lr,n.DivIcon=Yh,n.DivOverlay=kr,n.DomEvent=ix,n.DomUtil=rx,n.Draggable=en,n.Evented=ye,n.FeatureGroup=Ar,n.GeoJSON=Rr,n.GridLayer=mo,n.Handler=$r,n.Icon=pi,n.ImageOverlay=Aa,n.LatLng=G,n.LatLngBounds=I,n.Layer=cr,n.LayerGroup=ui,n.LineUtil=yx,n.Map=be,n.Marker=Pa,n.Mixin=ux,n.Path=tn,n.Point=O,n.PolyUtil=px,n.Polygon=hi,n.Polyline=Ir,n.Popup=Ia,n.PosAnimation=Eh,n.Projection=vx,n.Rectangle=tf,n.Renderer=Or,n.SVG=yo,n.SVGOverlay=qh,n.TileLayer=mi,n.Tooltip=Ra,n.Transformation=we,n.Util=ke,n.VideoOverlay=Gh,n.bind=d,n.bounds=D,n.canvas=Jh,n.circle=jx,n.circleMarker=Sx,n.control=po,n.divIcon=Ix,n.extend=a,n.featureGroup=_x,n.geoJSON=Wh,n.geoJson=zx,n.gridLayer=Rx,n.icon=$x,n.imageOverlay=Lx,n.latLng=P,n.latLngBounds=F,n.layerGroup=wx,n.map=ox,n.marker=kx,n.point=U,n.polygon=Px,n.polyline=Cx,n.popup=Mx,n.rectangle=Fx,n.setOptions=j,n.stamp=h,n.svg=ef,n.svgOverlay=Tx,n.tileLayer=Kh,n.tooltip=Ax,n.transformation=se,n.version=o,n.videoOverlay=Ex;var Dx=window.L;n.noConflict=function(){return window.L=Dx,this},window.L=n})})(zu,zu.exports);var Sk=zu.exports;const os=Ru(Sk),jk=u.div`
  position: relative;
  min-height: 0;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,Ck=u.div`
  width: 100%;
  height: 100%;
  min-height: 13rem;

  /* Leaflet dibuja sus capas por encima; el pin de marca se define acá
     para no depender de imágenes externas. */
  .lfg-pin__dot {
    display: block;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 50%;
    border: 3px solid #ffffff;
    background: ${({theme:e})=>e.color.brand};
    box-shadow: 0 2px 8px rgba(5, 8, 22, 0.45);
  }

  .lfg-pin {
    cursor: grab;
  }

  .lfg-pin:active {
    cursor: grabbing;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.color.surfaceMuted};
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
  }

  .leaflet-control-attribution {
    font-size: 0.625rem;
  }

  /* En oscuro se atenúan las tiles para que no encandilen. */
  ${({theme:e})=>e.mode==="dark"&&`
    .leaflet-tile-pane {
      filter: brightness(0.78) saturate(0.85);
    }
  `}
`,Pk=u.span`
  position: absolute;
  left: 50%;
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 500;
  padding: 0.28rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(5, 8, 22, 0.72);
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
  transform: translateX(-50%);
  pointer-events: none;
`,yd=16;function zk({lat:e,lon:t,onPick:n}){const o=k.useRef(null),a=k.useRef(null),c=k.useRef(null),d=k.useRef(!1),m=k.useRef(n);return k.useEffect(()=>{m.current=n},[n]),k.useEffect(()=>{const h=o.current;if(!h||a.current)return;const y=os.map(h,{center:[e,t],zoom:yd,zoomControl:!0,attributionControl:!0});os.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"&copy; OpenStreetMap"}).addTo(y);const x=os.divIcon({className:"lfg-pin",html:'<span class="lfg-pin__dot"></span>',iconSize:[26,26],iconAnchor:[13,13]}),v=os.marker([e,t],{draggable:!0,icon:x,autoPan:!0}).addTo(y);v.on("dragend",()=>{const C=v.getLatLng();d.current=!0,m.current(C.lat,C.lng)}),y.on("click",C=>{v.setLatLng(C.latlng),d.current=!0,m.current(C.latlng.lat,C.latlng.lng)}),a.current=y,c.current=v;const w=window.requestAnimationFrame(()=>y.invalidateSize());return()=>{window.cancelAnimationFrame(w),y.remove(),a.current=null,c.current=null}},[]),k.useEffect(()=>{const h=a.current,y=c.current;if(!(!h||!y)){if(d.current){d.current=!1;return}y.setLatLng([e,t]),h.setView([e,t],h.getZoom()<yd?yd:h.getZoom())}},[e,t]),s.jsxs(jk,{children:[s.jsx(Ck,{ref:o}),s.jsx(Pk,{"aria-hidden":"true",children:"Arrastrá el punto hasta tu casa"})]})}const Lk=zn`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ek=zn`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Tk=u.div`
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
  animation: ${Lk} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Mk=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  animation: ${Ek} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ak=u.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,Ik=u.p`
  margin: 0 0 ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,Rk=u.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,Ok=u.input`
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
`,Nk=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,Fk=u.button`
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
`,Bk=u.button`
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
`;function Dk({open:e,address:t,onCancel:n,onSave:o}){const[a,c]=k.useState("");if(k.useEffect(()=>{e&&c("")},[e]),k.useEffect(()=>{if(!e)return;const h=y=>{y.key==="Escape"&&n()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[n,e]),!e)return null;const d=a.trim(),m=h=>{h.preventDefault(),d&&o(d)};return s.jsx(Tk,{onClick:h=>{h.stopPropagation(),n()},role:"presentation",children:s.jsxs(Mk,{as:"form",onSubmit:m,role:"dialog","aria-modal":"true","aria-label":"Nombre de la dirección",onClick:h=>h.stopPropagation(),children:[s.jsx(Ak,{children:"Nombre de la dirección"}),t?s.jsx(Ik,{children:t}):null,s.jsx(Rk,{htmlFor:"address-name",children:"Nombre de la dirección"}),s.jsx(Ok,{id:"address-name",value:a,onChange:h=>c(h.target.value),placeholder:"Casa, Trabajo...",autoFocus:!0,maxLength:28}),s.jsxs(Nk,{children:[s.jsx(Fk,{type:"button",onClick:n,children:"Cancelar"}),s.jsx(Bk,{type:"submit",disabled:!d,children:"Guardar"})]})]})})}const Nt=Ce`
  ${({theme:e})=>e.mode==="dark"&&Ce`
      color: ${e.color.neon};
      filter: drop-shadow(0 0 3px ${e.color.neonSoft});
    `}
`,va=Ce`
  ${({theme:e})=>e.mode==="dark"&&Ce`
      border-color: rgba(77, 229, 255, 0.32);
      box-shadow: 0 0 8px rgba(77, 229, 255, 0.08);
    `}
`;Ce`
  ${({theme:e})=>e.mode==="dark"&&Ce`
      color: ${e.color.neon};
      border-color: rgba(77, 229, 255, 0.5);
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.12);
    `}
`;const Hk=u.div`
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
`,Zk=u.div`
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
`,Uk=u.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]}
    ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
`,Vk=u.span`
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
`,Wk=u.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,Gk=u.button`
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

  ${Nt};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,qk=u.div`
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
`,Yk=u.div`
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
`,Kk=u.input`
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
`,Qk=u.span`
  margin-top: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Xk=u.button`
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
`,Jk=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,e5=u.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,t5=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,r5=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n5=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`,i5=u.button`
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
`,o5=u.button`
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

  ${Nt};

  &:hover {
    background: ${({theme:e})=>e.color.border};
  }
`,a5=u.div`
  position: relative;
  min-height: 13rem;
  height: 100%;
`,s5=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
  text-align: center;
`,l5=u.button`
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
`,c5=u.div`
  display: grid;
  gap: 0.25rem;
  max-height: 11rem;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  overflow-y: auto;
`,d5=u.button`
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
`,u5=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,p5=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h5=u.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  text-align: center;
`,f5=260,m5=350;function g5({open:e,currentId:t,onClose:n,onSelect:o}){const[a,c]=k.useState(!1),[d,m]=k.useState(!1),[h,y]=k.useState("list"),[x,v]=k.useState(""),[w,C]=k.useState([]),[T,j]=k.useState(!1),[z,_]=k.useState(null),[b,$]=k.useState([]),[A,E]=k.useState(!1),N=k.useRef(!1);k.useEffect(()=>{if(e){c(!0);const ne=window.requestAnimationFrame(()=>m(!0));return()=>window.cancelAnimationFrame(ne)}if(!a)return;m(!1);const H=window.setTimeout(()=>{c(!1),y("list"),v(""),C([]),_(null),E(!1)},f5);return()=>window.clearTimeout(H)},[a,e]),k.useEffect(()=>{if(!e)return;const H=ne=>{if(ne.key==="Escape"&&!A){if(h==="new"){y("list");return}n()}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[A,n,e,h]),k.useEffect(()=>{if(h!=="new")return;if(N.current){N.current=!1;return}const H=x.trim();if(H.length<2){C([]),j(!1);return}const ne=new AbortController;j(!0);const re=window.setTimeout(()=>{fk(H,ne.signal).then(ye=>{C(ye),j(!1)}).catch(()=>j(!1))},m5);return()=>{window.clearTimeout(re),ne.abort()}},[x,h]);const Z=k.useMemo(()=>[...vl,...b],[b]),W=H=>{N.current=!0,v(H.label),C([]),_({lat:H.lat,lon:H.lon})},ae=(H,ne)=>{_({lat:H,lon:ne}),mk(H,ne).then(re=>{re&&(N.current=!0,v(re),C([]))})},Y=H=>{const ne={id:`custom-${Date.now()}`,label:H,address:x.trim(),primary:!1};$(re=>[...re,ne]),E(!1),o(ne.id,ne.address),n()};if(!a)return null;const oe=h==="new",pe=z??Pu,ke=z!==null&&x.trim().length>=3;return s.jsxs(Hk,{"data-visible":d,onClick:n,role:"presentation",children:[s.jsxs(Zk,{"data-visible":d,"data-full":oe,role:"dialog","aria-modal":"true","aria-label":oe?"Agregar una dirección nueva":"Dirección de entrega",onClick:H=>H.stopPropagation(),children:[s.jsxs(Uk,{children:[s.jsx(Vk,{"aria-hidden":"true"}),oe?s.jsx(o5,{type:"button",onClick:()=>y("list"),"aria-label":"Volver a mis direcciones",children:s.jsx(Z$,{size:18,"aria-hidden":"true"})}):null,s.jsx(Wk,{children:oe?"Nueva dirección":"¿Dónde entregamos?"}),s.jsx(Gk,{type:"button",onClick:n,"aria-label":"Cerrar",children:s.jsx(Xi,{size:18,"aria-hidden":"true"})})]}),s.jsx(qk,{"data-full":oe,children:oe?s.jsxs(s.Fragment,{children:[s.jsxs(Yk,{children:[s.jsx(yl,{size:18,"aria-hidden":"true"}),s.jsx(Kk,{value:x,onChange:H=>v(H.target.value),placeholder:"Escribí calle y altura (ej: Suipacha 876)","aria-label":"Buscar una dirección",autoComplete:"off",autoFocus:!0})]}),w.length>0?s.jsx(c5,{"aria-label":"Sugerencias de direcciones",children:w.map(H=>s.jsxs(d5,{type:"button",onClick:()=>W(H),children:[s.jsx(Mr,{size:16,"aria-hidden":"true"}),s.jsxs("span",{children:[s.jsx(u5,{children:H.label}),H.context?s.jsx(p5,{children:H.context}):null]})]},H.id))}):null,w.length===0&&T?s.jsx(h5,{children:"Buscando…"}):null,s.jsx(a5,{children:s.jsx(zk,{lat:pe.lat,lon:pe.lon,onPick:ae})}),s.jsx(s5,{children:z?"Ajustá el punto si hace falta y guardá.":"Elegí una sugerencia o tocá el mapa para marcar tu casa."}),s.jsxs(l5,{type:"button",onClick:()=>E(!0),disabled:!ke,children:[s.jsx(Mr,{size:18,"aria-hidden":"true"}),"Guardar nueva dirección"]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Qk,{children:"Tus direcciones guardadas"}),Z.map(H=>s.jsxs(Xk,{type:"button","data-current":H.id===t,onClick:()=>{o(H.id,H.address),n()},children:[s.jsx(Jk,{children:s.jsx(Wp,{size:18,"aria-hidden":"true"})}),s.jsxs(e5,{children:[s.jsx(t5,{children:H.label}),s.jsx(r5,{children:H.address})]}),H.id===t?s.jsx(n5,{"aria-label":"Dirección actual",children:s.jsx(ac,{size:16,"aria-hidden":"true"})}):null]},H.id)),s.jsxs(i5,{type:"button",onClick:()=>y("new"),children:[s.jsx(lc,{size:18,"aria-hidden":"true"}),"Agregar una dirección nueva"]})]})})]}),s.jsx(Dk,{open:A,address:x.trim(),onCancel:()=>E(!1),onSave:Y})]})}const y5=u.form`
  width: 100%;
`,v5=u.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,x5=u.div`
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
`,b5=u.input`
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
`,w5=u.button`
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
`,Kp=k.forwardRef(function({value:t,onChange:n,placeholder:o="Locales, productos y categorías",label:a,id:c="marketplace-search"},d){const m=h=>{h.preventDefault()};return s.jsxs(y5,{onSubmit:m,role:"search",children:[s.jsx(v5,{htmlFor:c,children:a??"Buscá productos, comercios o categorías"}),s.jsxs(x5,{children:[s.jsx(yl,{size:18,"aria-hidden":"true"}),s.jsx(b5,{id:c,ref:d,value:t,onChange:h=>n(h.target.value),placeholder:o,type:"search"}),s.jsx(w5,{type:"submit","aria-label":"Buscar",children:s.jsx(yl,{size:16,"aria-hidden":"true"})})]})]})}),_5=zn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.55; }
`,$5=zn`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`,k5=u.button`
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
`,S5=u.span`
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
  animation: ${_5} 2.4s ease-in-out infinite;

  &[data-dark='true'] {
    color: #4de5ff;
    border-color: rgba(77, 229, 255, 0.5);
    box-shadow: 0 0 10px rgba(77, 229, 255, 0.175);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,j5=u.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  text-align: left;
`,C5=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,P5=u.span`
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
`,z5=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L5=u.span`
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
`,E5=u.span`
  position: absolute;
  inset: 0;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.16) 50%,
    transparent 100%
  );
  animation: ${$5} 3.2s linear infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`,T5=u.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  background: radial-gradient(circle at 78% 50%, rgba(77, 229, 255, 0.34), transparent 62%);
  transition: opacity 220ms ease;

  &[data-dark='true'] {
    opacity: 1;
  }
`,M5=u.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.42rem;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(255,255,255,0.34)":"rgba(11,16,32,0.34)"};
  pointer-events: none;
`,A5=u.span`
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
`;function Wm({isDarkMode:e,onToggle:t}){return s.jsxs(k5,{type:"button",onClick:t,role:"switch","aria-checked":e,"data-dark":e,children:[s.jsx(S5,{"data-dark":e,"aria-hidden":"true",children:s.jsx(rk,{size:14,"aria-hidden":"true"})}),s.jsxs(j5,{children:[s.jsxs(C5,{children:["Modo",s.jsx(P5,{"data-dark":e,children:e?"NOCHE":"DÍA"})]}),s.jsx(z5,{children:"Cambiá el contraste de toda la app."})]}),s.jsxs(L5,{"data-dark":e,"aria-hidden":"true",children:[s.jsx(E5,{}),s.jsx(T5,{"data-dark":e}),s.jsxs(M5,{children:[s.jsx(Vm,{size:12,"aria-hidden":"true"}),s.jsx(Um,{size:12,"aria-hidden":"true"})]}),s.jsx(A5,{"data-dark":e,children:e?s.jsx(Um,{size:12,"aria-hidden":"true"}):s.jsx(Vm,{size:12,"aria-hidden":"true"})})]})]})}const I5=u.div`
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
`,R5=u.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,O5=u.div`
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
`;u.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`;u.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;const N5=u.button`
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
`;u.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;u(Ge)`
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
`;u.div`
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
`;u.span`
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
`;u.div`
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
`;const Gm=u.span`
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
`,vd=u.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.85))
    drop-shadow(0 1px 3px rgba(5, 8, 22, 0.35));
`;u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;const qm=u.span`
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
`,Ym=u.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,F5=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: center;
  white-space: nowrap;
`;u.div`
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
`;const B5=u(F5)`
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  letter-spacing: -0.01em;
  white-space: pre-line;
`;u.span`
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
`;const D5=u.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,Km=u(Ge)`
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
`,H5=u.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,Z5=u.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,U5=u.span`
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
`,V5=u.div`
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
`,W5=u.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Qp=Ce`
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
`;u.button`
  ${Qp};
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
`;u.div`
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
`;const X1=u.button`
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
`,G5=u.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,ze=u.section`
  padding: ${({theme:e})=>e.spacing[6]} 0;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding: ${({theme:e})=>e.spacing[4]} 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }
`,ce=u.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,q5=u.div`
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
`,Un=u.span`
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
`,Xp=u.h1`
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
`,J1=u.p`
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
`,Jp=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u(Jp)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;u(Jp)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;u(Jp)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const nt=u.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Bt=u.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,gt=u.h2`
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
`,gr=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
    line-height: 1.4;
  }
`,Mi=u.span`
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
`;u(Mi)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`;const Y5=u.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,K5=u(Y5)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const xa=u(Ge)`
  ${Qp};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,eh=u(xa)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ev=u.button`
  ${Qp};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);
  }
`;u.div`
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
`;u(nt)`
  scroll-snap-align: start;
`;u.nav`
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
`;u(ma)`
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
`;const Q5=u.nav`
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
`,X5=u.ul`
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
`,J5=u(ma)`
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

    ${({theme:e})=>e.mode==="dark"&&Ce`
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
`,eS=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* El botón central va sobre fondo de marca: ahí el neón no aplica. */
  [data-primary='true'] & {
    filter: none;
  }

  ${Nt};

  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
  }
`,tS=u.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`,rS=u.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,nS=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,iS=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;u.section`
  display: block;
`;u.span`
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
`;const oS=u.div`
  background: linear-gradient(135deg, #0047E7 0%, #2563EB 100%);
  color: #ffffff;

  /* En oscuro se apoya el azul del logo sobre un fondo más profundo
     para que no vibre contra el resto de la interfaz. */
  ${({theme:e})=>e.mode==="dark"&&Ce`
      background: linear-gradient(135deg, #0047E7 0%, #0038B8 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `};
`,aS=u.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-height: 2.75rem;
  min-width: 0;
  flex: 1 1 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex: 0 0 auto;
    justify-self: center;
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
`,sS=u.span`
  display: block;
  min-width: 0;
  margin: 0;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lS=u.span`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`,cS=u.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
  text-align: left;
`,tv=Ce`
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
`,dS=u.button`
  ${tv};
`,Qm=u(Ge)`
  ${tv};
`,uS=u.span`
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
`,pS=u.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    justify-self: end;
  }

  /* En pantallas angostas las acciones ceden ancho a la dirección,
     sin bajar de 44px de área táctil. */
  @media (max-width: 420px) {
    gap: 0;
  }
`;u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 2.875rem;
  padding: 0 0.35rem 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;u.input`
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
`;u.button`
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
`;const hS=u.div`
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
    grid-template-columns: minmax(0, 1fr) auto auto;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,fS=u.div`
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
`,mS=u.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  flex: 0 0 auto;

  /* En escritorio la marca vive en el sidebar: no se repite en el header. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,gS=u.span`
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
`,yS=u.span`
  font-size: 1.22em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,vS=u.span`
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
`,xS=u.div`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
    min-width: 0;
    width: 100%;
    max-width: 34rem;
    justify-self: start;
  }
`,th=Ce`
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,rh=Ce`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,bS=Ce`
  background:
    radial-gradient(circle at top left, rgba(0, 71, 231, 0.24), transparent 48%),
    linear-gradient(180deg, rgba(11, 16, 32, 0.98), rgba(5, 8, 22, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  box-shadow: ${({theme:e})=>e.shadow.glow};
`,Gt=Ce`
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
`;u.div`
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  --desktop-sidebar-width: 300px;
  padding-top: var(--home-topbar-height, ${({theme:e})=>e.layout.topBarHeight});
  padding-bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[3]});

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-top: var(--home-topbar-height, ${({theme:e})=>e.layout.topBarHeight});
    padding-bottom: 0;
  }
`;u.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`;u.div`
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
`;u.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`;u.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;u.button`
  ${Gt};
  width: 2.75rem;
  min-width: 2.75rem;
  min-height: 2.75rem;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;u.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
  min-height: 44px;
  border-radius: ${({theme:e})=>e.radius.lg};
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;u.div`
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
`;u.div`
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
`;u.span`
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
`;u.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;u.span`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1rem, 3.2vw, 1.125rem);
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
  white-space: nowrap;
  line-height: 1.05;
`;u.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: left;
  white-space: pre-line;
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: -0.01em;
  line-height: 0.98;
  text-align: center;
  white-space: pre-line;
`;u.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-self: end;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`;u.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;const rv=Ce`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    color: ${({theme:e})=>e.color.primaryHover};
  }

  &:focus {
    outline: none;
  }
`;u.button`
  ${rv}
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  color: ${({theme:e})=>e.color.primary};
`;u(Ge)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.glow};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:focus {
    outline: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 44px;
    height: 44px;
  }
`;u(Ge)`
  ${rv};
  text-decoration: none;
`;u(Ge)`
  ${Gt};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`;u.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
`;u(ma)`
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

  &.active,
  &[aria-current='page'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;u.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`;u.section`
  padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[1]};
  }
`;u.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.span`
  display: none;
  align-items: center;
  width: fit-content;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.14em;
  text-transform: uppercase;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`;u.h1`
  display: none;
  margin: 0;
  max-width: 14ch;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(2rem, 7vw, 4.25rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.05em;
  color: ${({theme:e})=>e.color.text};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;u.p`
  display: none;
  margin: 0;
  max-width: 48rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;u.section`
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  gap: 0.0625rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: 0;
    gap: ${({theme:e})=>e.spacing[1]};
  }
`;u.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
`;u.label`
  display: block;
`;u.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`;u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus-within {
    border-color: ${({theme:e})=>e.color.borderStrong};
    background: ${({theme:e})=>e.color.surface};
    box-shadow: none;
  }
`;u.input`
  width: 100%;
  border: 0;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  box-shadow: none;

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;u.button`
  ${Gt};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`;u.button`
  ${Gt};
  position: relative;
  width: 3rem;
  min-width: 3rem;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;u.span`
  position: absolute;
  top: -0.35rem;
  right: -0.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;u.div`
  display: none;
`;u.button`
  ${Gt};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  white-space: nowrap;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;u.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 0;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;
  padding: 0.125rem 0.25rem 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;u.div`
  position: relative;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`;u.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 0 0 auto;
  min-height: 40px;
  padding: 0 0.7rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid rgba(0, 71, 231, 0.2);
  background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.16)":e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.18)":"rgba(0, 71, 231, 0.12)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`;u.span`
  position: absolute;
  top: 50%;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: linear-gradient(90deg, transparent, ${({theme:e})=>e.color.background} 55%);
  color: ${({theme:e})=>e.color.primary};
  transform: translateY(-50%);
  pointer-events: none;

  &[data-side='left'] {
    left: 0;
    right: auto;
    background: linear-gradient(90deg, ${({theme:e})=>e.color.background} 55%, transparent);
  }

  &[data-side='right'] {
    right: 0;
    left: auto;
  }
`;u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: 0;
`;u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
  color: ${({theme:e})=>e.color.text};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  font-size: 0.9rem;

  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;u.p`
  display: none;
`;u.button`
  ${Gt};
  min-height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  justify-self: start;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &::after {
    content: '>';
    margin-left: 0.25rem;
    color: ${({theme:e})=>e.color.primary};
    font-size: 1rem;
    line-height: 1;
    transform: translateY(-0.02em);
  }
`;u.aside`
  background: ${({theme:e})=>e.color.background};
  border: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  gap: calc(${({theme:e})=>e.spacing[1]} + 1px);
  position: relative;
`;u.div`
  display: flex;
  align-items: stretch;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  touch-action: pan-x;
  cursor: grab;
  scrollbar-width: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    margin-inline: calc(-1 * ${({theme:e})=>e.layout.screenPaddingH});
    width: calc(100% + (2 * ${({theme:e})=>e.layout.screenPaddingH}));
  }

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;u(Ge)`
  display: grid;
  flex: 0 0 100%;
  width: 100%;
  min-height: 11.5rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: ${({theme:e})=>e.spacing[1]};
  background: linear-gradient(135deg, #0047e7 0%, #1d4ed8 52%, #0f5bff 100%);
  color: ${({theme:e})=>e.color.textInverse};
  gap: ${({theme:e})=>e.spacing[1]};
  grid-template-columns: minmax(0, 1fr) minmax(5.75rem, 0.82fr);
  align-items: center;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.md};
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    filter 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({theme:e})=>e.shadow.lg};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: 13.5rem;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
    grid-template-columns: minmax(0, 1fr) minmax(7.5rem, 0.95fr);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    flex-basis: calc((100% - (2 * ${({theme:e})=>e.spacing[2]})) / 3);
    width: calc((100% - (2 * ${({theme:e})=>e.spacing[2]})) / 3);
    min-height: 15rem;
  }

  &[data-tone='green'] {
    background: linear-gradient(135deg, #0f9d58, #1a8c57);
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, #b91c1c, #dc2626);
  }

  &[data-tone='violet'] {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
  }

  &[data-tone='gold'] {
    background: linear-gradient(135deg, #d97706, #f59e0b);
  }
`;u.div`
  display: grid;
  gap: 0.35rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: 0.3rem;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.16);
  color: ${({theme:e})=>e.color.textInverse};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;u.h2`
  margin: 0;
  max-width: 12ch;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 4vw, 2.2rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;u.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 1.35rem;
  padding: 0 ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.64rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1;
`;u.p`
  margin: 0;
  max-width: 18ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`;u.div`
  position: relative;
  min-height: 7.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background:
    linear-gradient(180deg, rgba(11, 16, 32, 0.06), rgba(11, 16, 32, 0.26)),
    var(--promo-art, linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.1)));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    min-height: 9rem;
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;u.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  left: ${({theme:e})=>e.spacing[2]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.92);
  color: ${({theme:e})=>e.color.primary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  text-align: center;
  font-size: 0.64rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    top: ${({theme:e})=>e.spacing[3]};
    left: ${({theme:e})=>e.spacing[3]};
    min-height: 1.75rem;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`;u.span`
  position: absolute;
  right: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 999px;
  background: #ffcc33;
  color: #0b1020;
  font-size: 0.72rem;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  text-align: center;
  line-height: 1.05;
  box-shadow: 0 14px 24px rgba(11, 16, 32, 0.18);
`;u.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.button`
  display: none;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: absolute;
    top: 40%;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
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

    &[data-side='left'] {
      left: -0.65rem;
    }

    &[data-side='right'] {
      right: -0.65rem;
    }
  }
`;u.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: ${({theme:e})=>e.mode==="dark"?e.color.brand:"rgba(11, 16, 32, 0.16)"};
  box-shadow: ${({theme:e})=>e.mode==="dark"?"0 0 0 2px rgba(255, 255, 255, 0.78), 0 0 0 4px rgba(107, 157, 255, 0.14)":"0 0 0 2px rgba(0, 71, 231, 0.1)"};
  opacity: ${({theme:e})=>e.mode==="dark"?.72:1};

  &[data-active='true'] {
    width: 0.62rem;
    height: 0.62rem;
    background: ${({theme:e})=>e.color.brand};
    box-shadow: ${({theme:e})=>e.mode==="dark"?"0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 0 5px rgba(107, 157, 255, 0.22)":"0 0 0 3px rgba(0, 71, 231, 0.16)"};
    opacity: 1;
    transform: scale(1);
  }
`;u.section`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`;u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[3]};
  }
`;u.section`
  ${rh};
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: calc(${({theme:e})=>e.spacing[1]} + 0.25rem);
  display: grid;
  gap: calc(${({theme:e})=>e.spacing[1]} + 0.125rem);
  overflow: visible;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: calc(${({theme:e})=>e.layout.cardPadding} + 0.25rem);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`;u.div`
  display: grid;
  place-items: center;
  grid-column: 1 / -1;
  min-height: 6.75rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px dashed ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  text-align: center;
`;u.p`
  margin: 0;
  max-width: 20rem;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.35;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.span`
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
`;u.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 2.6vw, 2.3rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.text};
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.lg};
  max-width: 56rem;
`;u(Ge)`
  ${Gt};
  padding: 0;
  min-height: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  align-self: center;
  gap: ${({theme:e})=>e.spacing[1]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &::after {
    content: '›';
    font-size: ${({theme:e})=>e.typography.size.lg};
    line-height: 1;
  }
`;u.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  overflow: visible;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;u.button`
  ${th};
  display: grid;
  justify-items: center;
  align-content: start;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[1]} 0;
  text-align: center;
  cursor: pointer;
  min-height: 75px;
  min-width: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[1]} 0;
    min-height: 75px;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: none;
    }

    &[data-active='true'] {
      border-color: transparent;
      box-shadow: none;
    }
  }
`;const wS=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
  }
`,_S=u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: 0.72rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  text-wrap: balance;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: normal;
    white-space: nowrap;
  }
`;u.span`
  display: none;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`;u.button`
  ${th};
  display: grid;
  justify-items: center;
  align-content: start;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[1]} 0;
  text-align: center;
  cursor: pointer;
  min-height: 75px;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;

  &:hover {
    transform: translateY(-1px);
    box-shadow: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[1]} 0;
    min-height: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: none;
    }
  }
`;u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: 0.72rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  text-wrap: balance;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
    overflow-wrap: normal;
    white-space: nowrap;
  }
`;const Xm=u.div`
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
`,Jm=u.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${rh};
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
`,$S=u.div`
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
`,eg=u.div`
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
`,tg=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,nv=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`;u.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: linear-gradient(135deg, rgba(0, 71, 231, 0.08), rgba(0, 71, 231, 0.03));
  border: 1px solid rgba(0, 71, 231, 0.12);
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.mode==="dark"?e.color.brand:e.color.surface};
  color: ${({theme:e})=>e.mode==="dark"?e.color.onPrimary:e.color.primary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  flex: 0 0 auto;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`;u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`;const as=u.section`
  display: block;
`,ss=u.span`
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
`,ls=u.nav`
  display: grid;
  gap: 0.25rem;
`,cs=u(ma)`
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
`,ds=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(77, 229, 255, 0.12)":"rgba(0, 71, 231, 0.08)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;

  ${Nt};
`,us=u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,ps=u.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,hs=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,fs=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,rg=u.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`;u.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  min-height: 3.1rem;
  padding: 0.45rem 0.65rem;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  &:focus {
    outline: none;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: ${({theme:e})=>e.radius.full};
  color: ${({theme:e})=>e.color.textSoft};
  transition:
    color 180ms ease,
    background-color 180ms ease;

  &[data-active='true'] {
    color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }
`;u.span`
  position: relative;
  display: block;
  width: 2.25rem;
  height: 2.95rem;
  padding: 0.18rem;
  border-radius: 0.55rem;
  border: 0;
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(9, 16, 34, 0.98) 0%, rgba(18, 29, 54, 0.96) 100%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.26) 0%, rgba(0, 71, 231, 0.12) 100%)"};
  box-shadow: ${({theme:e})=>e.mode==="dark"?"inset 0 1px 1px rgba(255, 255, 255, 0.05), inset 0 -2px 4px rgba(0, 0, 0, 0.42), 0 8px 16px rgba(0, 0, 0, 0.24), 0 0 0 1px rgba(107, 157, 255, 0.08)":"inset 0 1px 1px rgba(255, 255, 255, 0.34), inset 0 -2px 4px rgba(0, 71, 231, 0.08), 0 8px 16px rgba(0, 71, 231, 0.14), 0 0 0 1px rgba(0, 71, 231, 0.08)"};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0.18rem;
    border-radius: 0.42rem;
    border: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 58%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0.22rem;
    bottom: 0.22rem;
    width: 1px;
    transform: translateX(-50%);
    background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.06)":"rgba(255, 255, 255, 0.26)"};
  }
`;u.span`
  position: absolute;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
  transition: color 180ms ease, opacity 180ms ease;
  z-index: 1;

  &[data-side='top'] {
    top: 0.28rem;
  }

  &[data-side='bottom'] {
    bottom: 0.28rem;
  }

  &[data-active='true'] {
    color: ${({theme:e})=>e.color.onPrimary};
  }
`;u.span`
  position: absolute;
  left: 0.18rem;
  right: 0.18rem;
  top: 0.18rem;
  height: calc(50% - 0.21rem);
  border-radius: 0.42rem;
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(120, 166, 255, 0.78)":"rgba(0, 71, 231, 0.42)"};
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(132, 176, 255, 0.98) 0%, rgba(90, 139, 255, 0.98) 52%, rgba(48, 94, 232, 0.98) 100%)":"linear-gradient(180deg, rgba(107, 157, 255, 0.94) 0%, rgba(66, 122, 255, 0.96) 50%, rgba(0, 71, 231, 0.98) 100%)"};
  box-shadow:
    0 4px 8px rgba(5, 8, 22, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -2px 4px rgba(0, 0, 0, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.02);
  transform: translate3d(0, 0, 0);
  transition:
    top 260ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
  z-index: 0;

  &[data-mode='dark'] {
    top: calc(50% + 0.03rem);
    transform: translate3d(0, 0, 0);
  }
`;u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`;u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`;u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`;u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`;u.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;const kS=u.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,SS=u.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,ng=u.button`
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
`,jS=u.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,CS=u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,PS=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zS=u.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,LS=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,ES=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,TS=u.button`
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
`,MS=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,AS=u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,IS=u.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,RS=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,OS=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,NS=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,FS=u.article`
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
`,BS=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,DS=u.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,HS=u.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,ZS=u.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,US=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,VS=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,WS=u.button`
  ${Gt};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  ${va};
  ${Nt};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;u.button`
  ${rh};
  ${th};
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[3]};
  text-align: left;
  cursor: pointer;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
  }
`;u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`;u.iframe`
  width: 100%;
  min-height: 16rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surfaceMuted};
`;u.div`
  display: grid;
  gap: 0.25rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.25;
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  text-align: left;
  cursor: pointer;
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

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.24);
    background: ${({theme:e})=>e.color.primarySoft};
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`;u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`;u.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`;u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  min-height: calc(${({theme:e})=>e.layout.topBarHeight} - ${({theme:e})=>e.spacing[2]});
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  position: sticky;
  top: 0;
  z-index: 1;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    background: ${({theme:e})=>e.color.background};
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`;u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.2;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.layout.screenPaddingH};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.layout.screenPaddingH};
  }
`;u.section`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`;u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`;u.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.1;
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    line-height: 1.25;
  }
`;u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: 0.2rem;
  }
`;const GS=u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.18);
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 1 1 auto;
  width: min(100%, 13.25rem);
  min-width: 0;
`;u(GS)`
  flex: 0 0 auto;
  white-space: nowrap;
`;u.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  transition:
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:focus-within {
    border-color: ${({theme:e})=>e.color.borderStrong};
    box-shadow: none;
  }

  &[data-error='true'] {
    border-color: rgba(185, 28, 28, 0.36);
    background: rgba(185, 28, 28, 0.04);
  }
`;u.input`
  flex: 1 1 auto;
  min-width: 0;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: right;
  outline: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.color.textSoft};
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
  pointer-events: none;
`;u.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`;u.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`;u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4.4rem, 1fr));
  gap: 0.1rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    row-gap: 0.25rem;
    column-gap: 0.55rem;
  }
`;u.button`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 0.15rem;
  min-height: 4.8rem;
  padding: 0.35rem 0.2rem;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  transition:
    color 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0.35rem 0.2rem;
  }

  &[data-active='true'] {
    border-color: transparent;
    background: transparent;
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-active='true'] ${wS} {
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-active='true'] ${_S} {
    color: ${({theme:e})=>e.color.primary};
  }
`;u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.layout.screenPaddingH}
    calc(${({theme:e})=>e.spacing[2]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  position: sticky;
  bottom: 0;
  z-index: 1;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    background: ${({theme:e})=>e.color.background};
  }
`;u.button`
  ${Gt};
  flex: 1 1 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
`;u.button`
  ${Gt};
  flex: 1 1 0;
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
    background: ${({theme:e})=>e.color.border};
    color: ${({theme:e})=>e.color.textSoft};
    box-shadow: none;
  }
`;u.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  gap: 0.55rem;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-auto-flow: row;
    grid-auto-columns: unset;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;u.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[1]};
  align-items: start;
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  overflow: visible;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    background: transparent;
    border: 0;
    box-shadow: none;
    gap: ${({theme:e})=>e.spacing[1]};
    justify-items: center;
    text-align: center;
    overflow: visible;
  }
`;u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 5.25rem;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[1]} 0;
  overflow: hidden;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    width: 100%;
    min-height: 4.75rem;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: auto;
    min-height: 0;
    padding: 0;
  }
`;u.div`
  display: grid;
  gap: 0.35rem;
  padding: 0 ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[1]};
  justify-items: start;
  text-align: left;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding: 0;
    gap: 0.5rem;
    justify-items: center;
    text-align: center;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: 0;
  }
`;u.div`
  display: contents;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  min-width: 0;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    align-items: center;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  color: ${({theme:e})=>e.color.textInverse};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 5rem;
    height: 5rem;
  }

  &[data-tone='blue'] {
    background: linear-gradient(135deg, #0047e7, #2563eb);
  }

  &[data-tone='green'] {
    background: linear-gradient(135deg, #0f9d58, #34a853);
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, #b91c1c, #dc2626);
  }

  &[data-tone='orange'] {
    background: linear-gradient(135deg, #d97706, #f59e0b);
  }
`;u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-wrap: balance;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.65rem;
  line-height: 1.1;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;u.div`
  display: none;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: flex;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.65rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;

  &[data-tone='blue'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.18)":"rgba(0, 71, 231, 0.12)"};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-tone='green'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(15, 157, 88, 0.18)":"rgba(15, 157, 88, 0.12)"};
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='red'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(185, 28, 28, 0.18)":"rgba(185, 28, 28, 0.12)"};
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-tone='orange'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(217, 119, 6, 0.18)":"rgba(217, 119, 6, 0.12)"};
    color: ${({theme:e})=>e.color.warning};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    justify-self: center;
  }
`;u.p`
  display: none;
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;u.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(20, 30, 52, 0.96), rgba(13, 20, 36, 0.94))":"linear-gradient(180deg, rgba(234, 241, 255, 0.98), rgba(226, 236, 255, 0.96))"};
  border: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: ${({theme:e})=>e.mode==="dark"?e.shadow.sm:"0 12px 24px rgba(0, 71, 231, 0.08)"};
`;u.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  justify-items: start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`;u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.mode==="dark"?e.color.surface:"rgba(255, 255, 255, 0.74)"};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.primary};
  box-shadow: ${({theme:e})=>e.mode==="dark"?e.shadow.sm:"0 6px 14px rgba(0, 71, 231, 0.08)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 2.75rem;
    height: 2.75rem;
  }
`;u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.72rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-align: left;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.63rem;
  line-height: 1.15;
  text-align: left;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`;u.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  gap: 0.55rem;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-auto-flow: row;
    grid-auto-columns: unset;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;u.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[1]};
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  overflow: visible;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    background: transparent;
    border: 0;
    box-shadow: none;
    gap: ${({theme:e})=>e.spacing[1]};
    justify-items: center;
    text-align: center;
    overflow: visible;
  }
`;u.div`
  display: grid;
  gap: 0.5rem;
  min-width: 0;
  padding: 0 ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[1]};
  justify-items: start;
  text-align: left;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding: 0;
    justify-items: center;
    text-align: center;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]};
  }
`;u.div`
  position: relative;
  width: 100%;
  min-height: 7.25rem;
  border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} 0 0;
  background:
    radial-gradient(circle at 18% 30%, rgba(255, 255, 255, 0.55), transparent 16%),
    radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.3), transparent 18%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.12), rgba(0, 71, 231, 0.03));
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0;
  flex: 0 0 auto;

  &[data-tone='green'] {
    background: linear-gradient(135deg, rgba(15, 157, 88, 0.14), rgba(15, 157, 88, 0.03));
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, rgba(185, 28, 28, 0.14), rgba(185, 28, 28, 0.03));
  }

  &[data-tone='violet'] {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.14), rgba(124, 58, 237, 0.03));
  }

  &[data-tone='orange'] {
    background: linear-gradient(135deg, rgba(217, 119, 6, 0.14), rgba(217, 119, 6, 0.03));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    min-height: 9.5rem;
    border-radius: ${({theme:e})=>e.radius.lg} ${({theme:e})=>e.radius.lg} 0 0;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.45rem;
  padding: 0 ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.9);
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.58rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    min-height: 44px;
    padding: 0 ${({theme:e})=>e.spacing[2]};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`;u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: 0.66rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.02;
  text-wrap: balance;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.62rem;
  line-height: 1.02;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding-left: 0;
  }
`;u.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-wrap: wrap;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    justify-content: center;
  }
`;u.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.66rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
  }
`;u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.5rem;
  line-height: 1;
  text-decoration: line-through;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 22.5rem);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`;u.div`
  display: grid;
  min-width: 0;
`;u.aside`
  display: none;
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: grid;
    gap: ${({theme:e})=>e.spacing[2]};
    position: sticky;
    top: calc(var(--home-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
    padding-right: ${({theme:e})=>e.layout.screenPaddingH};
  }
`;u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding-top: ${({theme:e})=>e.spacing[2]};
  border-top: 1px solid ${({theme:e})=>e.color.border};

  &:first-child {
    padding-top: 0;
    border-top: 0;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  color: ${({theme:e})=>e.color.textInverse};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-tone='blue'] {
    background: linear-gradient(135deg, #0047e7, #2563eb);
  }

  &[data-tone='red'] {
    background: linear-gradient(135deg, #b91c1c, #dc2626);
  }

  &[data-tone='orange'] {
    background: linear-gradient(135deg, #d97706, #f59e0b);
  }
`;u.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;u.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-wrap: balance;
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.15;
`;u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.15;
`;u.span`
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding-top: ${({theme:e})=>e.spacing[1]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
`;u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &[data-emphasis='true'] {
    padding-top: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.bold};
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u(Ge)`
  ${Gt};
  width: 100%;
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  text-decoration: none;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`;u(Ge)`
  ${Gt};
  width: 100%;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  text-decoration: none;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`;u.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`;u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`;u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(15, 157, 88, 0.16)":"rgba(15, 157, 88, 0.12)"};
  color: ${({theme:e})=>e.color.success};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`;u.section`
  padding: 0 0 ${({theme:e})=>e.layout.sectionSpacing};
`;u.div`
  ${bS};
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.textInverse};
`;u.p`
  margin: 0;
  max-width: 56rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${({theme:e})=>e.typography.size.lg};
`;u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[3]};
`;u(Ge)`
  ${Gt};
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: ${({theme:e})=>e.color.textInverse};

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
  }
`;u.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;u.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;u.nav`
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

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`;u.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;
`;u(ma)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.0625rem;
  min-height: 0;
  padding: 0 ${({theme:e})=>e.spacing[1]} 0.125rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
  white-space: nowrap;
  line-height: 1.05;
  position: relative;
  z-index: 0;
  isolation: isolate;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &.active,
  &[aria-current='page'] {
    color: ${({theme:e})=>e.color.primary};
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

  &[data-primary='true'].active {
    background: transparent;
    color: ${({theme:e})=>e.color.primary};
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  [data-primary='true'] & {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
    box-shadow: ${({theme:e})=>e.shadow.glow};
  }
`;const xd="/LaFranciaGO/favicon.png",qS="Av. San Martín 123",YS=3,ig=420,KS=260,og=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:Wp,end:!0},{to:"/comercios",title:"Categorías",subtitle:"Navegá por rubros",icon:sc},{to:"/pedidos",title:"Mis pedidos",subtitle:"Historial y seguimiento",icon:br},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:ga},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:kn}],ag=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:or},{to:"/trabaja-con-nosotros",title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",icon:q1},{to:"/registro/fletero",title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",icon:Er},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:Qi}],QS=u.aside`
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
`,XS=u(nv)`
  height: 100%;
`,sg=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:or,items:[{icon:Qi,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:br,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:br,items:[{icon:Mr,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:or,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:Mr,items:[{icon:ga,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:Qi,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],JS=[{to:"/",label:"Inicio",icon:Wp},{to:"/comercios",label:"Categorías",icon:sc},{to:"/pedidos",label:"Mis pedidos",icon:br},{to:"/favoritos",label:"Favoritos",icon:ga},{to:"/mi-cuenta",label:"Cuenta",icon:kn}];function Je({children:e,query:t,onQueryChange:n,showSearch:o=!0,footerText:a="Navegación principal y accesos por rol."}){const{isDarkMode:c,toggleMode:d}=N$(),m=Nl(),h=typeof t=="string"&&typeof n=="function",y=k.useRef(null),x=k.useRef(null),v=k.useRef(null),w=k.useRef(null),C=k.useRef(null),[T,j]=k.useState(!1),[z,_]=k.useState({id:"home",label:qS}),[b,$]=k.useState(!1),[A,E]=k.useState(!1),[N,Z]=k.useState("opening"),[W,ae]=k.useState(!1),[Y,oe]=k.useState(!1),[pe,ke]=k.useState("opening"),[H,ne]=k.useState(null),re=k.useCallback(()=>{$(!1),ae(!1),ne(null)},[]),ye=k.useCallback(()=>{re(),$(!0)},[re]),O=k.useCallback(()=>{if(b||A){re();return}ye()},[re,A,b,ye]),J=k.useCallback(()=>{re(),ae(!0)},[re]),U=k.useCallback(()=>{if(W||Y){re();return}J()},[re,Y,W,J]);k.useEffect(()=>{const I=document.body.style.overflow;return(b||A||W||Y)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=I}},[A,b,Y,W]),k.useLayoutEffect(()=>{const I=y.current;if(!I)return;const F=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${I.offsetHeight}px`)};F();const G=typeof ResizeObserver<"u"?new ResizeObserver(F):null;return G==null||G.observe(I),window.addEventListener("resize",F),()=>{G==null||G.disconnect(),window.removeEventListener("resize",F),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),k.useEffect(()=>{x.current!==null&&(window.cancelAnimationFrame(x.current),x.current=null),v.current!==null&&(window.clearTimeout(v.current),v.current=null);const I=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(b){if(E(!0),I){Z("open");return}Z("opening"),x.current=window.requestAnimationFrame(()=>{Z("open"),x.current=null});return}if(A){if(I){E(!1),Z("opening");return}Z("closing"),v.current=window.setTimeout(()=>{E(!1),Z("opening"),v.current=null},ig)}},[A,b]),k.useEffect(()=>()=>{x.current!==null&&window.cancelAnimationFrame(x.current),v.current!==null&&window.clearTimeout(v.current),w.current!==null&&window.cancelAnimationFrame(w.current),C.current!==null&&window.clearTimeout(C.current)},[]),k.useEffect(()=>{w.current!==null&&(window.cancelAnimationFrame(w.current),w.current=null),C.current!==null&&(window.clearTimeout(C.current),C.current=null);const I=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(W){if(oe(!0),I){ke("open");return}ke("opening"),w.current=window.requestAnimationFrame(()=>{ke("open"),w.current=null});return}if(Y){if(I){oe(!1),ke("opening");return}ke("closing"),C.current=window.setTimeout(()=>{oe(!1),ke("opening"),C.current=null},KS)}},[Y,W]);const ee=k.useCallback((I,F)=>{I.preventDefault(),re(),window.setTimeout(()=>{m(F)},ig)},[re,m]),D=k.useMemo(()=>sg.find(I=>I.id===H)??null,[H]);return s.jsxs(I5,{children:[s.jsx(R5,{ref:y,children:s.jsx(oS,{children:s.jsx(O5,{children:s.jsxs(hS,{children:[s.jsxs(fS,{children:[s.jsx(N5,{type:"button",onClick:O,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":b||A,children:s.jsx(J$,{size:20,"aria-hidden":"true"})}),s.jsxs(mS,{"aria-label":"LaFranciaGO",children:[s.jsx(vS,{children:s.jsx(vd,{src:xd,alt:"","aria-hidden":"true"})}),s.jsxs(gS,{children:["LaFrancia",s.jsx(yS,{children:"GO"})]})]})]}),h?s.jsx(xS,{children:s.jsx(Kp,{value:t,onChange:n})}):null,s.jsxs(aS,{type:"button","aria-label":"Cambiar dirección de entrega","aria-haspopup":"dialog","aria-expanded":T,onClick:()=>j(!0),children:[s.jsxs(cS,{children:[s.jsx(lS,{children:"Entregar en"}),s.jsx(sS,{children:z.label})]}),s.jsx(q$,{size:15,"aria-hidden":"true"})]}),s.jsxs(pS,{"aria-label":"Acciones rápidas",children:[s.jsxs(dS,{type:"button",onClick:U,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":W||Y,children:[s.jsx(Qi,{size:18,"aria-hidden":"true"}),s.jsx(uS,{children:YS})]}),s.jsx(Qm,{to:"/carrito","aria-label":"Abrir carrito",children:s.jsx(ca,{size:18,"aria-hidden":"true"})}),s.jsx(Qm,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:s.jsx(kn,{size:18,"aria-hidden":"true"})})]})]})})})}),s.jsx(QS,{"aria-label":"Navegación principal",children:s.jsxs(XS,{children:[s.jsxs(eg,{"aria-label":"LaFranciaGO",children:[s.jsx(Gm,{children:s.jsx(vd,{src:xd,alt:"","aria-hidden":"true"})}),s.jsxs(tg,{children:[s.jsxs(qm,{"aria-label":"LaFranciaGO",children:[s.jsx("span",{children:"LaFrancia"}),s.jsx(Ym,{children:"GO"})]}),s.jsx(B5,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),s.jsxs(as,{children:[s.jsx(ss,{children:"NAVEGACIÓN"}),s.jsx(ls,{"aria-label":"Navegación principal",children:og.map(I=>{const F=I.icon;return s.jsxs(cs,{to:I.to,end:I.end,onClick:G=>ee(G,I.to),children:[s.jsx(ds,{"aria-hidden":"true",children:s.jsx(F,{size:18,"aria-hidden":"true"})}),s.jsxs(us,{children:[s.jsx(ps,{children:I.title}),s.jsx(hs,{children:I.subtitle})]}),s.jsx(fs,{"aria-hidden":"true",children:s.jsx(is,{size:16,"aria-hidden":"true"})})]},I.to)})})]}),s.jsxs(as,{children:[s.jsx(ss,{children:"ACCIONES"}),s.jsx(ls,{"aria-label":"Acciones rápidas",children:ag.map(I=>{const F=I.icon;return s.jsxs(cs,{to:I.to,onClick:G=>ee(G,I.to),children:[s.jsx(ds,{"aria-hidden":"true",children:s.jsx(F,{size:18,"aria-hidden":"true"})}),s.jsxs(us,{children:[s.jsx(ps,{children:I.title}),s.jsx(hs,{children:I.subtitle})]}),s.jsx(fs,{"aria-hidden":"true",children:s.jsx(is,{size:16,"aria-hidden":"true"})})]},I.to)})})]}),s.jsx("div",{style:{flex:1},"aria-hidden":"true"}),s.jsx(rg,{children:s.jsx(Wm,{isDarkMode:c,onToggle:d})})]})}),s.jsxs(G5,{children:[e,s.jsx(tS,{children:s.jsxs(rS,{children:[s.jsx(nS,{children:"Accesos secundarios"}),s.jsx(iS,{children:a}),s.jsxs(D5,{"aria-label":"Acciones secundarias",children:[s.jsx(Km,{to:"/registro/comercio",children:"Adherir un comercio"}),s.jsx(Km,{to:"/trabaja-con-nosotros",children:"Postularse como delivery"})]})]})})]}),s.jsx(Q5,{"aria-label":"Navegación móvil",children:s.jsx(X5,{children:JS.map(I=>{const F=I.icon;return s.jsx("li",{children:s.jsxs(J5,{to:I.to,"data-primary":I.to==="/pedidos",children:[s.jsx(eS,{children:s.jsx(F,{size:I.to==="/pedidos"?32:18,"aria-hidden":"true"})}),s.jsx("span",{children:I.label})]})},I.to)})})}),A&&s.jsx(Xm,{"data-drawer":"true","data-state":N,role:"presentation",onClick:re,children:s.jsxs(Jm,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":N,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:I=>I.stopPropagation(),children:[s.jsxs($S,{children:[s.jsxs(eg,{"aria-label":"LaFranciaGO",children:[s.jsx(Gm,{children:s.jsx(vd,{src:xd,alt:"","aria-hidden":"true"})}),s.jsx(tg,{children:s.jsxs(qm,{"aria-label":"LaFranciaGO",children:[s.jsx("span",{children:"LaFrancia"}),s.jsx(Ym,{children:"GO"})]})})]}),s.jsx(WS,{type:"button",onClick:re,"aria-label":"Cerrar menú",children:s.jsx(Xi,{size:18,"aria-hidden":"true"})})]}),s.jsxs(nv,{children:[s.jsxs(as,{children:[s.jsx(ss,{children:"Navegación"}),s.jsx(ls,{"aria-label":"Navegación principal",children:og.map(I=>{const F=I.icon;return s.jsxs(cs,{to:I.to,end:I.end,onClick:G=>ee(G,I.to),children:[s.jsx(ds,{"aria-hidden":"true",children:s.jsx(F,{size:18,"aria-hidden":"true"})}),s.jsxs(us,{children:[s.jsx(ps,{children:I.title}),s.jsx(hs,{children:I.subtitle})]}),s.jsx(fs,{"aria-hidden":"true",children:s.jsx(is,{size:16,"aria-hidden":"true"})})]},I.to)})})]}),s.jsxs(as,{children:[s.jsx(ss,{children:"Acciones"}),s.jsx(ls,{"aria-label":"Acciones rápidas",children:ag.map(I=>{const F=I.icon;return s.jsxs(cs,{to:I.to,onClick:G=>ee(G,I.to),children:[s.jsx(ds,{"aria-hidden":"true",children:s.jsx(F,{size:18,"aria-hidden":"true"})}),s.jsxs(us,{children:[s.jsx(ps,{children:I.title}),s.jsx(hs,{children:I.subtitle})]}),s.jsx(fs,{"aria-hidden":"true",children:s.jsx(is,{size:16,"aria-hidden":"true"})})]},I.to)})})]}),s.jsx(rg,{children:s.jsx(Wm,{isDarkMode:c,onToggle:d})})]})]})}),Y&&s.jsx(Xm,{"data-notifications":"true","data-state":pe,role:"presentation",onClick:re,children:s.jsxs(Jm,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":pe,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:I=>I.stopPropagation(),children:[s.jsxs(kS,{children:[D?s.jsx(ng,{type:"button",onClick:()=>ne(null),"aria-label":"Volver a las notificaciones",children:s.jsx(T1,{size:14,"aria-hidden":"true"})}):s.jsx(SS,{"aria-hidden":"true"}),s.jsxs(jS,{children:[s.jsx(CS,{id:"marketplace-notifications-title",children:(D==null?void 0:D.title)??"Notificaciones"}),s.jsx(PS,{children:(D==null?void 0:D.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),s.jsx(ng,{type:"button",onClick:()=>{re(),m("/notificaciones")},"aria-label":"Configuración de notificaciones",children:s.jsx(B1,{size:14,"aria-hidden":"true"})})]}),s.jsx(zS,{}),s.jsx(LS,{children:D?s.jsx(NS,{"aria-label":D.title,children:D.items.map(I=>{const F=I.icon;return s.jsxs(FS,{children:[s.jsx(BS,{"aria-hidden":"true",children:s.jsx(F,{size:14,"aria-hidden":"true"})}),s.jsxs(DS,{children:[s.jsxs(HS,{children:[s.jsx(ZS,{children:I.title}),s.jsx(US,{children:I.date})]}),s.jsx(VS,{children:I.subtitle})]})]},`${D.id}-${I.title}`)})}):s.jsx(ES,{"aria-label":"Secciones de notificaciones",children:sg.map(I=>{const F=I.icon;return s.jsxs(TS,{type:"button",onClick:()=>ne(I.id),children:[s.jsx(MS,{"aria-hidden":"true",children:s.jsx(F,{size:14,"aria-hidden":"true"})}),s.jsxs(AS,{children:[s.jsx(IS,{children:I.title}),s.jsx(RS,{children:I.subtitle})]}),s.jsx(OS,{"aria-hidden":"true",children:s.jsx(ii,{size:16,"aria-hidden":"true"})})]},I.id)})})})]})}),s.jsx(g5,{open:T,currentId:z.id,onClose:()=>j(!1),onSelect:(I,F)=>_({id:I,label:F})})]})}const oi=u.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$ratio:e})=>e??"4 / 3"};
  overflow: hidden;
  border-radius: ${({theme:e,$radius:t})=>e.radius[t??"lg"]};
  background: ${({theme:e})=>e.color.surfaceMuted};
  isolation: isolate;
`,ai=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,iv=Ce`
  background: ${({$tone:e="blue"})=>({blue:"linear-gradient(135deg, #0047E7 0%, #2563EB 100%)",green:"linear-gradient(135deg, #0F9D58 0%, #22C55E 100%)",violet:"linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",orange:"linear-gradient(135deg, #C2410C 0%, #F59E0B 100%)",red:"linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",gold:"linear-gradient(135deg, #A16207 0%, #EAB308 100%)",slate:"linear-gradient(135deg, #334155 0%, #64748B 100%)"})[e]};
`;u.div`
  ${iv};
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
`;u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0 ${({theme:e})=>e.spacing[2]};
`;const ba=u.div`
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
`;u.div`
  position: absolute;
  inset: auto ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  z-index: 2;
`;const nh=u.span`
  ${iv};
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
`;u.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const ej="/LaFranciaGO/",tj=new Set(["almacen","bebidas","carniceria","comercio","delivery","farmacia","ferreteria","indumentaria","kiosco","panaderia","perfumeria","regaleria","rotiseria","servicios","verduleria"]),Ln=e=>{const t=e&&tj.has(e)?e:"comercio";return`${ej}media/${t}.svg`},ov=e=>e.split(" ").filter(Boolean).slice(0,2).map(t=>{var n;return((n=t[0])==null?void 0:n.toUpperCase())??""}).join(""),av=e=>{const t=["blue","green","violet","orange","red","gold","slate"],n=[...e].reduce((o,a)=>o+a.charCodeAt(0),0);return t[n%t.length]},rj=u(Ge)`
  display: block;
  border-radius: ${({theme:e})=>e.radius.lg};
  cursor: pointer;
  transition: transform 200ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`,nj=u.span`
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
`;function sv({id:e,name:t,to:n,priority:o}){return s.jsx(rj,{to:n,children:s.jsxs(oi,{$ratio:"1 / 1",children:[s.jsx(ai,{src:Ln(e),alt:t,loading:o?"eager":"lazy"}),s.jsx(nj,{children:t})]})})}const ij=u.div`
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
`,oj=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Nt};
`,aj=u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,sj=u.p`
  margin: 0;
  max-width: 30ch;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,lj=u.div`
  margin-top: ${({theme:e})=>e.spacing[2]};
`;function En({icon:e,title:t,text:n,ctaLabel:o,ctaTo:a,dashed:c}){return s.jsxs(ij,{"data-dashed":c?"true":"false",children:[s.jsx(oj,{children:s.jsx(e,{size:30,"aria-hidden":"true"})}),s.jsx(aj,{children:t}),n?s.jsx(sj,{children:n}):null,o&&a?s.jsx(lj,{children:s.jsx(eh,{to:a,children:o})}):null]})}const dt=(e,t="es-AR",n="ARS")=>new Intl.NumberFormat(t,{style:"currency",currency:n,maximumFractionDigits:0}).format(e),cc=e=>`${e.toFixed(1)} km`,lv=e=>e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),cj=u(Ge)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease;

  ${({$static:e})=>e?Ce`
          pointer-events: none;
        `:Ce`
          cursor: pointer;

          &:hover {
            transform: translateY(-2px);
            box-shadow: ${({theme:t})=>t.shadow.md};
            border-color: rgba(0, 71, 231, 0.24);
          }
        `};
`,dj=u.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,uj=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pj=u.h3`
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
`,hj=u.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,fj=u.span`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,mj=u.span`
  display: block;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  text-decoration: line-through;
`,gj=u.button`
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
`,yj=u.span`
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
`;function cv({name:e,store:t,price:n,oldPrice:o,categoryId:a,imageLabel:c,tag:d,to:m,onAdd:h,priority:y}){return s.jsxs(cj,{to:m??"#",$static:!m,children:[s.jsxs(oi,{$ratio:"1 / 1",children:[s.jsx(ai,{src:Ln(a),alt:c??e,loading:y?"eager":"lazy"}),d?s.jsx(ba,{children:s.jsx(yj,{children:d})}):null]}),s.jsxs(dj,{children:[t?s.jsx(uj,{children:t}):null,s.jsx(pj,{children:e}),s.jsxs(hj,{children:[s.jsxs("div",{children:[s.jsx(fj,{children:dt(n)}),o?s.jsx(mj,{children:dt(o)}):null]}),h?s.jsx(gj,{type:"button","aria-label":`Agregar ${e} al carrito`,onClick:x=>{x.preventDefault(),x.stopPropagation(),h()},children:s.jsx(lc,{size:18,"aria-hidden":"true"})}):null]})]})]})}const vj=u(Ge)`
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
`,xj=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
`,bj=u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,wj=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,_j=u.span`
  color: rgba(255, 255, 255, 0.84);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,$j=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`;function lg({to:e,title:t,text:n,icon:o,tone:a="brand"}){return s.jsxs(vj,{to:e,"data-tone":a,children:[s.jsx(xj,{children:s.jsx(o,{size:22,"aria-hidden":"true"})}),s.jsxs(bj,{children:[s.jsx(wj,{children:t}),s.jsx(_j,{children:n})]}),s.jsx($j,{children:s.jsx(ii,{size:18,"aria-hidden":"true"})})]})}const kj=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[3]};
`,Sj=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,jj=u.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Cj=u.h2`
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
`,Pj=u.span`
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
`,zj=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Lj=u(Ge)`
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
`;function Oe({title:e,chip:t,chipIcon:n,subtitle:o,seeAllTo:a,seeAllLabel:c="Ver todos"}){return s.jsxs(kj,{children:[s.jsxs(Sj,{children:[s.jsxs(jj,{children:[s.jsx(Cj,{children:e}),t?s.jsxs(Pj,{children:[n,t]}):null]}),a?s.jsxs(Lj,{to:a,children:[c,s.jsx(ii,{size:16,"aria-hidden":"true"})]}):null]}),o?s.jsx(zj,{children:o}):null]})}const Ej=u(Ge)`
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
`,Tj=u.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[2]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,Mj=u.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,Aj=u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ij=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rj=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,cg=u.span`
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
`,Oj=u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.success};
  color: #fff;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-open='false'] {
    background: ${({theme:e})=>e.color.textSoft};
  }
`,Nj=u.span`
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
`;function ih({id:e,name:t,category:n,categoryId:o,to:a,distanceKm:c,rating:d,openNow:m,etaMin:h,etaMax:y,priority:x}){return s.jsxs(Ej,{to:a,children:[s.jsxs(oi,{$ratio:"16 / 9",children:[s.jsx(ai,{src:Ln(o),alt:n,loading:x?"eager":"lazy"}),s.jsxs(ba,{children:[m!==void 0?s.jsx(Oj,{"data-open":m,children:m?"Abierto ahora":"Cerrado"}):s.jsx("span",{}),d!==void 0?s.jsxs(Nj,{children:[s.jsx(U1,{size:13,"aria-hidden":"true",fill:"currentColor"}),d.toFixed(1)]}):null]}),s.jsx(Tj,{children:s.jsx(nh,{$size:"2.75rem",$tone:av(e),children:ov(t)})})]}),s.jsxs(Mj,{children:[s.jsx(Aj,{children:t}),s.jsxs(Ij,{children:[n,c!==void 0?` · ${cc(c)}`:""]}),s.jsxs(Rj,{children:[s.jsxs(cg,{children:[s.jsx(L1,{size:14,"aria-hidden":"true"}),"Delivery"]}),h!==void 0&&y!==void 0?s.jsxs(cg,{children:[s.jsx(Y$,{size:14,"aria-hidden":"true"}),h,"-",y," min"]}):null]})]})]})}const Fj=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:H1,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:O1,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:I1,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Zp,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Vp,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:or,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:W1,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:qp,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Z1,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:A1,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:R1,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:D1,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:G1,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:Er,tone:"red"}],Bj=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],Dj=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],Hj=e=>lv(e),Do=(e,...t)=>{const n=Hj(e);return n?lv(t.filter(o=>o!==void 0).join(" ")).includes(n):!0},dv=e=>Y1.find(t=>t.id===e),Zj=e=>ya.find(t=>t.id===e),Uj=e=>ya.find(t=>t.name.toLowerCase()===e.toLowerCase()),Vj=e=>{const t=K1.find(o=>o.id===`${e}-compare`);if(t){const o=[...t.offers].sort((a,c)=>a.price-c.price);return{kind:"comparison",comparison:t,bestOffer:o[0],sortedOffers:o}}const n=dv(e);if(n)return{kind:"offer",offer:n}},Wj=u(Ge)`
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
`,Gj=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(255, 255, 255, 0.18);
`,qj=u.span`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  flex: 1 1 auto;
`,Yj=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Kj=u.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,Qj=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: rgba(255, 255, 255, 0.18);
`,Tr=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,uv=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,oh=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.div`
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
`;u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;u.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`;u.div`
  text-align: right;
`;const pv=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Xj=u.div`
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
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;const ah=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;u.div`
  margin-top: ${({theme:e})=>e.spacing[3]};
`;u.div`
  margin-top: ${({theme:e})=>e.spacing[5]};
`;const $t=u(ze)`
  padding: ${({theme:e})=>e.spacing[3]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`;u(q5)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`;const hv=u(Tr)`
  gap: ${({theme:e})=>e.spacing[1]};
`;u(uv)`
  gap: ${({theme:e})=>e.spacing[1]};
`;u(oh)`
  gap: ${({theme:e})=>e.spacing[1]};
`;u(Bt)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`;const dc=u.div`
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
`,Jj=u(dc)`
  grid-auto-columns: minmax(15rem, 15rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(18rem, 18rem);
  }
`,fv=u(dc)`
  grid-auto-columns: minmax(6.5rem, 6.5rem);

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-auto-columns: minmax(8rem, 8rem);
  }
`,eC=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,sh=u.section`
  padding: ${({theme:e})=>e.spacing[3]} 0 ${({theme:e})=>e.spacing[1]};

  /* En escritorio el buscador vive en la barra superior. */
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-top: ${({theme:e})=>e.spacing[4]};

    form[role='search'] {
      display: none;
    }
  }
`;u.div`
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
`;const tC=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;function rC(){const[e,t]=k.useState(""),n=e.trim(),o=n.length>0,a=k.useMemo(()=>Fj.filter(h=>Do(n,h.name)),[n]),c=k.useMemo(()=>Bj.filter(h=>Do(n,h.name,h.category,h.address)),[n]),d=k.useMemo(()=>Dj.filter(h=>Do(n,h.product,h.store)),[n]),m=a.length>0||c.length>0||d.length>0;return s.jsxs(Je,{query:e,onQueryChange:t,footerText:"Buscá un producto, elegí el comercio y recibilo en tu casa.",children:[s.jsx(sh,{children:s.jsx(ce,{children:s.jsx(Kp,{value:e,onChange:t})})}),s.jsx(ze,{children:s.jsx(ce,{children:s.jsxs(Wj,{to:"/mandado",children:[s.jsx(Gj,{children:s.jsx(br,{size:22,"aria-hidden":"true"})}),s.jsxs(qj,{children:[s.jsx(Yj,{children:"¿Necesitás algún mandado?"}),s.jsx(Kj,{children:"Pedí lo que sea y un repartidor lo busca."})]}),s.jsx(Qj,{children:s.jsx(ii,{size:18,"aria-hidden":"true"})})]})})}),o&&!m?s.jsx(ze,{children:s.jsx(ce,{children:s.jsx(En,{icon:Yp,title:"Sin resultados",text:`No encontramos nada para "${n}". Probá con otra palabra.`,dashed:!0})})}):null,a.length>0?s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Categorías",subtitle:"Elegí un rubro y encontrá tu comercio.",seeAllTo:"/comercios"}),s.jsx(fv,{"aria-label":"Categorías",children:a.map((h,y)=>s.jsx(sv,{id:h.id,name:h.name,to:`/comercios?rubro=${h.id}`,priority:y<5},h.id))})]})}):null,d.length>0?s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Destacados",chip:"Ofertas",subtitle:"Los productos más pedidos cerca tuyo.",seeAllTo:"/comercios"}),s.jsx(dc,{"aria-label":"Productos destacados",children:d.map((h,y)=>s.jsx(cv,{name:h.product,store:h.store,price:h.price,oldPrice:h.oldPrice,categoryId:h.categoryId,imageLabel:h.imageLabel,tag:h.discount>0?`-${h.discount}%`:void 0,to:h.href,priority:y<3},h.id))})]})}):null,c.length>0?s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Comercios",chip:"Locales",subtitle:"Los locales más elegidos de La Francia.",seeAllTo:"/comercios"}),s.jsx(Jj,{"aria-label":"Comercios destacados",children:c.map((h,y)=>s.jsx(ih,{id:h.id,name:h.name,category:h.category,categoryId:h.categoryId,to:h.href,distanceKm:h.distanceKm,rating:h.rating,openNow:h.openNow,etaMin:h.etaMin,etaMax:h.etaMax,priority:y<2},h.id))})]})}):null,o?null:s.jsx(ze,{children:s.jsx(ce,{children:s.jsx(Tr,{children:s.jsxs(eC,{children:[s.jsx(lg,{to:"/registro/comercio",title:"¿Querés sumar tu comercio?",text:"Registrá tu negocio y empezá a recibir pedidos.",icon:or,tone:"brand"}),s.jsx(lg,{to:"/trabaja-con-nosotros",title:"¿Querés trabajar con nosotros?",text:"Sumate al equipo como repartidor.",icon:Er,tone:"dark"})]})})})})]})}const nC=u.div`
  position: relative;
  min-width: 0;
`,iC=u.div`
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
`,dg=u.button`
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
  box-shadow: ${({theme:e})=>e.shadow.md};
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 180ms ease, transform 180ms ease;

  ${Nt};

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

  /* Degradé que insinúa que el contenido sigue. */
  &[data-side='left']::before,
  &[data-side='right']::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.25rem;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
  }

  &[data-side='left']::before {
    left: 0;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.color.background} 30%,
      transparent 100%
    );
  }

  &[data-side='right']::before {
    right: 0;
    background: linear-gradient(
      270deg,
      ${({theme:e})=>e.color.background} 30%,
      transparent 100%
    );
  }
`,ug=4;function lh({children:e,className:t,...n}){const o=k.useRef(null),[a,c]=k.useState(!1),[d,m]=k.useState(!1),h=k.useCallback(()=>{const x=o.current;if(!x)return;const{scrollLeft:v,scrollWidth:w,clientWidth:C}=x;c(v>ug),m(v+C<w-ug)},[]);k.useLayoutEffect(()=>{h()},[h,e]),k.useEffect(()=>{var w;const x=o.current;if(!x)return;x.addEventListener("scroll",h,{passive:!0}),x.addEventListener("scrollend",h,{passive:!0});const v=typeof ResizeObserver<"u"?new ResizeObserver(h):null;return v==null||v.observe(x),Array.from(x.children).forEach(C=>v==null?void 0:v.observe(C)),(w=document.fonts)==null||w.ready.then(h).catch(()=>{}),()=>{x.removeEventListener("scroll",h),x.removeEventListener("scrollend",h),v==null||v.disconnect()}},[h]);const y=x=>{const v=o.current;v&&(v.scrollBy({left:x*v.clientWidth*.7,behavior:"smooth"}),window.setTimeout(h,420))};return s.jsxs(nC,{className:t,children:[a?s.jsx(dg,{type:"button","data-side":"left",onClick:()=>y(-1),"aria-label":"Ver filtros anteriores",tabIndex:-1,children:s.jsx(T1,{size:16,"aria-hidden":"true"})}):null,s.jsx(iC,{ref:o,...n,children:e}),d?s.jsx(dg,{type:"button","data-side":"right",onClick:()=>y(1),"aria-label":"Ver más filtros",tabIndex:-1,children:s.jsx(ii,{size:16,"aria-hidden":"true"})}):null]})}const oC=(e,t)=>{const n=[...e];switch(t){case"lowest":return n.sort((o,a)=>o.minOrder-a.minOrder);case"nearby":return n.sort((o,a)=>o.distanceKm-a.distanceKm);case"delivery":return n.sort((o,a)=>o.delivery===a.delivery?0:o.delivery?-1:1);case"pickup":return n.sort((o,a)=>o.pickup===a.pickup?0:o.pickup?-1:1);case"offers":return n.sort((o,a)=>a.rating-o.rating);default:return n.sort((o,a)=>a.rating-o.rating)}};function aC(){const[e,t]=k.useState(""),[n,o]=k.useState("all"),a=k.useMemo(()=>oC(ya.filter(m=>Do(e,m.name,m.category,m.address,m.tags.join(" "))),n),[n,e]),c=k.useMemo(()=>yk.filter(m=>Do(e,m.name)),[e]),d=a.length>0||c.length>0;return s.jsxs(Je,{query:e,onQueryChange:t,footerText:"Elegí un rubro o un comercio y empezá tu pedido.",children:[s.jsx(sh,{children:s.jsxs(ce,{children:[s.jsx(Kp,{value:e,onChange:t,placeholder:"Buscar comercios o rubros"}),s.jsx(lh,{"aria-label":"Filtros rápidos",children:gk.map(m=>s.jsx(X1,{type:"button",onClick:()=>o(m.id),"data-active":n===m.id,children:m.label},m.id))})]})}),c.length>0&&s.jsx($t,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Categorías",subtitle:"Elegí un rubro para filtrar."}),s.jsx(fv,{"aria-label":"Categorías",children:c.map((m,h)=>s.jsx(sv,{id:m.id,name:m.name,to:`/comercios?rubro=${m.id}`,priority:h<5},m.id))})]})}),s.jsx($t,{children:s.jsx(ce,{children:a.length>0?s.jsxs(s.Fragment,{children:[s.jsx(Oe,{title:"Comercios",chip:`${a.length}`,subtitle:"Locales activos cerca tuyo."}),s.jsx(pv,{children:a.map((m,h)=>s.jsx(ih,{id:m.id,name:m.name,category:m.category,categoryId:m.id,to:`/comercios/${m.id}`,distanceKm:m.distanceKm,rating:m.rating,openNow:m.openNow,priority:h<4},m.id))})]}):s.jsx(En,{icon:Yp,title:"Sin comercios",text:d?"Probá cambiando el filtro.":`No encontramos comercios para "${e}".`,dashed:!0})})})]})}const sC=u.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.32);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,lC=u.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[2]};
`,cC=u.h3`
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
`,dC=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,uC=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.primary};
`,pC=u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,hC=u.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  flex: 0 0 auto;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,pg=u.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;

  /* El círculo se ve chico, pero el área que responde al dedo
     llega a 44px como pide el sistema de diseño. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:disabled {
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`,fC=u.span`
  min-width: 1.5rem;
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.primary};
`,mC=u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 100%;
  min-height: 2.25rem;
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }

  /* Confirmación breve al sumar al pedido. */
  &[data-added='true'] {
    background: ${({theme:e})=>e.color.success};
  }
`,gC=u.span`
  display: block;
  margin-top: 0.3rem;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-align: center;
`,ms=1;function hg({name:e,price:t,categoryId:n,badge:o,quantity:a,onAdd:c,priority:d}){const[m,h]=k.useState(ms),[y,x]=k.useState(!1),v=()=>{c(m),h(ms),x(!0),window.setTimeout(()=>x(!1),1400)};return s.jsxs(sC,{"data-active":a>0,children:[s.jsxs(oi,{$ratio:"1 / 1",children:[s.jsx(ai,{src:Ln(n),alt:e,loading:d?"eager":"lazy"}),o?s.jsx(ba,{children:s.jsx(pC,{children:o})}):null]}),s.jsxs(lC,{children:[s.jsx(cC,{children:e}),s.jsxs(dC,{children:[s.jsx(uC,{children:dt(t)}),s.jsxs(hC,{children:[s.jsx(pg,{type:"button",onClick:()=>h(w=>Math.max(ms,w-1)),disabled:m<=ms,"aria-label":`Quitar una unidad de ${e}`,children:s.jsx(N1,{size:16,"aria-hidden":"true"})}),s.jsx(fC,{"aria-live":"polite",children:m}),s.jsx(pg,{type:"button",onClick:()=>h(w=>w+1),"aria-label":`Agregar una unidad de ${e}`,children:s.jsx(lc,{size:16,"aria-hidden":"true"})})]})]}),s.jsx(mC,{type:"button",onClick:v,"data-added":y,children:y?s.jsxs(s.Fragment,{children:[s.jsx(ac,{size:15,"aria-hidden":"true"}),"Agregado"]}):"Agregar al carrito"}),a>0?s.jsxs(gC,{children:[a," ",a===1?"unidad":"unidades"," en el pedido"]}):null]})]})}const yC=u.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,vC=u.div`
  position: absolute;
  left: ${({theme:e})=>e.spacing[3]};
  bottom: ${({theme:e})=>e.spacing[2]};
  z-index: 2;
`,xC=u.div`
  display: grid;
  gap: 0.15rem;
  padding: ${({theme:e})=>e.spacing[3]};
`,bC=u.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,wC=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,_C=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,bd=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.85rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,$C=u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.success};
  color: #fff;
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-open='false'] {
    background: ${({theme:e})=>e.color.textSoft};
  }
`,kC=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.warning};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;function SC({id:e,name:t,category:n,categoryId:o,address:a,hours:c,distanceKm:d,rating:m,openNow:h,minOrder:y}){return s.jsxs(yC,{children:[s.jsxs(oi,{$ratio:"21 / 9",children:[s.jsx(ai,{src:Ln(o),alt:n,loading:"eager"}),s.jsxs(ba,{children:[s.jsx($C,{"data-open":h,children:h?"Abierto ahora":"Cerrado"}),s.jsxs(kC,{children:[s.jsx(U1,{size:13,"aria-hidden":"true",fill:"currentColor"}),m.toFixed(1)]})]}),s.jsx(vC,{children:s.jsx(nh,{$size:"3.5rem",$tone:av(e),children:ov(t)})})]}),s.jsxs(xC,{children:[s.jsx(bC,{children:t}),s.jsxs(wC,{children:[n," · ",cc(d)]}),s.jsxs(_C,{children:[s.jsxs(bd,{children:[s.jsx(Up,{size:14,"aria-hidden":"true"}),c]}),s.jsxs(bd,{children:[s.jsx(Mr,{size:14,"aria-hidden":"true"}),a]}),s.jsxs(bd,{children:["Mínimo ",dt(y)]})]})]})]})}u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  &[data-open='true'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 32px;
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`;const jC=u.div`
  position: fixed;
  left: 50%;
  bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[2]} + env(safe-area-inset-bottom));
  z-index: ${({theme:e})=>e.zIndex.bottomNav-1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  width: min(100% - 2rem, 30rem);
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]}
    ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceDark};
  color: ${({theme:e})=>e.color.onDark};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  transform: translateX(-50%);

  /* En oscuro el negro de la barra se funde con el fondo:
     se despega con borde y una sombra más marcada. */
  ${({theme:e})=>e.mode==="dark"&&Ce`
      background: linear-gradient(135deg, #0B1430 0%, #10224F 100%);
      border: 1px solid rgba(77, 139, 255, 0.42);
    `};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    bottom: ${({theme:e})=>e.spacing[4]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    left: calc(50% + (var(--desktop-sidebar-width) / 2));
  }
`,CC=u.div`
  display: grid;
  gap: 0;
  min-width: 0;
`,PC=u.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,zC=u.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
`,LC=u(Ge)`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 0 0 auto;
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`,fg={"almacen-juan":{intro:"Bebidas, almacén y limpieza para resolver compras rápidas sin salir del comercio.",sections:[{id:"bebidas",label:"Bebidas",description:"Para el combo de siempre y el finde.",products:[{id:"coca-cola-225",name:"Coca Cola 2,25 L",description:"La botella que más sale para el carrito diario.",categoryId:"bebidas",categoryLabel:"Bebidas",price:3500,tone:"blue",badge:"Más pedido",suggestions:["fernet-750","hielo-2kg"]},{id:"fernet-750",name:"Fernet 750 ml",description:"Clásico de reunión para el fin de semana.",categoryId:"bebidas",categoryLabel:"Bebidas",price:12900,tone:"green",badge:"Combo finde",suggestions:["coca-cola-225","hielo-2kg"]},{id:"hielo-2kg",name:"Hielo 2 kg",description:"Bolsita lista para acompañar bebidas frías.",categoryId:"bebidas",categoryLabel:"Bebidas",price:1200,tone:"slate",badge:"Siempre útil",suggestions:["coca-cola-225","fernet-750"]}]},{id:"almacen",label:"Almacén",description:"Básicos de todos los días.",products:[{id:"yerba-1kg",name:"Yerba mate 1 kg",description:"Repuesto de todos los días para la alacena.",categoryId:"almacen",categoryLabel:"Almacén",price:4650,tone:"orange",badge:"Diario",suggestions:["azucar-1kg","galletitas-mixtas"]},{id:"fideos-500",name:"Fideos 500 g",description:"Una base simple para resolver la cena.",categoryId:"almacen",categoryLabel:"Almacén",price:980,tone:"violet",badge:"Base",suggestions:["salsa-tomate","queso-rallado"]},{id:"galletitas-mixtas",name:"Galletitas mixtas",description:"Para la merienda o el kiosco de la casa.",categoryId:"almacen",categoryLabel:"Almacén",price:1450,tone:"blue",badge:"Snack",suggestions:["yerba-1kg","fideos-500"]}]},{id:"limpieza",label:"Limpieza",description:"Casa y cocina en un solo pedido.",products:[{id:"detergente-900",name:"Detergente 900 ml",description:"Para dejar la cocina lista en una pasada.",categoryId:"limpieza",categoryLabel:"Limpieza",price:2450,tone:"red",badge:"Hogar",suggestions:["esponja-duo","lavandina-1l"]},{id:"lavandina-1l",name:"Lavandina 1 L",description:"Clave para limpieza pesada del hogar.",categoryId:"limpieza",categoryLabel:"Limpieza",price:1790,tone:"blue",badge:"Sanitiza",suggestions:["detergente-900","esponja-duo"]},{id:"esponja-duo",name:"Esponja duo",description:"Pequeño básico que completa cualquier limpieza.",categoryId:"limpieza",categoryLabel:"Limpieza",price:690,tone:"orange",badge:"Complemento",suggestions:["detergente-900","lavandina-1l"]}]}]},"panaderia-la-esquina":{intro:"Pan fresco, facturas y tortas listas para el desayuno, la merienda y los encargos.",sections:[{id:"pan",label:"Pan",description:"Pan fresco y de salida rápida.",products:[{id:"pan-flauta",name:"Pan flauta x 6",description:"Salida clásica para la mesa de todos los días.",categoryId:"pan",categoryLabel:"Pan",price:750,tone:"orange",badge:"Recién hecho",suggestions:["manteca-200","medialunas-x6"]},{id:"pan-lactal",name:"Pan lactal",description:"Práctico para tostadas y viandas.",categoryId:"pan",categoryLabel:"Pan",price:1850,tone:"blue",badge:"Diario",suggestions:["manteca-200","mermelada-frutilla"]},{id:"tostadas-rusticas",name:"Tostadas ricas",description:"Para acompañar el mate sin vueltas.",categoryId:"pan",categoryLabel:"Pan",price:990,tone:"slate",badge:"Merienda",suggestions:["pan-lactal","mermelada-frutilla"]}]},{id:"facturas",label:"Facturas",description:"La bandeja de siempre.",products:[{id:"medialunas-x6",name:"Medialunas x 6",description:"Perfectas para salir con café o mate.",categoryId:"facturas",categoryLabel:"Facturas",price:2400,tone:"violet",badge:"Favoritas",suggestions:["cafe-molido","facturas-surtidas"]},{id:"facturas-surtidas",name:"Facturas surtidas",description:"Variadas para compartir en familia.",categoryId:"facturas",categoryLabel:"Facturas",price:1900,tone:"orange",badge:"Compartir",suggestions:["medialunas-x6","cafe-molido"]},{id:"cafe-molido",name:"Café molido",description:"El acompañamiento que hace crecer el ticket.",categoryId:"facturas",categoryLabel:"Facturas",price:3600,tone:"red",badge:"Combo",suggestions:["medialunas-x6","facturas-surtidas"]}]},{id:"tortas",label:"Tortas",description:"Pedidos especiales y celebraciones.",products:[{id:"torta-cumple",name:"Torta de cumpleaños",description:"Lista para encargar con anticipación.",categoryId:"tortas",categoryLabel:"Tortas",price:12e3,tone:"red",badge:"Encargo",suggestions:["velas","facturas-surtidas"]},{id:"budin-vainilla",name:"Budin de vainilla",description:"Para la mesa dulce o la merienda.",categoryId:"tortas",categoryLabel:"Tortas",price:1850,tone:"green",badge:"Dulce",suggestions:["cafe-molido","medialunas-x6"]},{id:"velas",name:"Velas numeradas",description:"Complemento simple para el pedido.",categoryId:"tortas",categoryLabel:"Tortas",price:650,tone:"blue",badge:"Extra",suggestions:["torta-cumple","budin-vainilla"]}]}]},"farmacia-centro":{intro:"Cuidado personal, salud básica y perfumería para resolver sin moverte de la app.",sections:[{id:"cuidado",label:"Cuidado",description:"Productos de uso diario.",products:[{id:"shampoo-400",name:"Shampoo 400 ml",description:"Limpieza cotidiana con buena relación precio uso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:3950,tone:"blue",badge:"Precio bajo",suggestions:["acondicionador","jabon-liquido"]},{id:"jabon-liquido",name:"Jabon liquido",description:"Para baño y cocina en un solo paso.",categoryId:"cuidado",categoryLabel:"Cuidado",price:1650,tone:"green",badge:"Básico",suggestions:["shampoo-400","acondicionador"]},{id:"acondicionador",name:"Acondicionador",description:"Complemento para el cabello de todos los días.",categoryId:"cuidado",categoryLabel:"Cuidado",price:4100,tone:"violet",badge:"Complemento",suggestions:["shampoo-400","protector-solar"]}]},{id:"bienestar",label:"Bienestar",description:"Cosas que se llevan rápido cuando hacen falta.",products:[{id:"omeprazol-20",name:"Omeprazol 20 mg",description:"Compra de rutina para tener a mano.",categoryId:"bienestar",categoryLabel:"Bienestar",price:7150,tone:"red",badge:"Salud",suggestions:["protector-solar","alcohol-gel"]},{id:"alcohol-gel",name:"Alcohol en gel",description:"Siempre útil para mochila o cartera.",categoryId:"bienestar",categoryLabel:"Bienestar",price:1850,tone:"blue",badge:"Práctico",suggestions:["omeprazol-20","protector-solar"]},{id:"protector-solar",name:"Protector solar",description:"Para cuidar la piel en la temporada larga.",categoryId:"bienestar",categoryLabel:"Bienestar",price:9200,tone:"orange",badge:"Temporada",suggestions:["alcohol-gel","omeprazol-20"]}]},{id:"perfumeria",label:"Perfumería",description:"Higiene y cuidado personal.",products:[{id:"desodorante",name:"Desodorante",description:"El complemento de todos los días.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:3250,tone:"slate",badge:"Uso diario",suggestions:["shampoo-400","jabon-liquido"]},{id:"crema-manos",name:"Crema de manos",description:"Para completar la compra de perfumería.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:2750,tone:"violet",badge:"Extra",suggestions:["desodorante","protector-solar"]},{id:"toallitas",name:"Toallitas húmedas",description:"Prácticas para mochila o changuito.",categoryId:"perfumeria",categoryLabel:"Perfumería",price:1480,tone:"green",badge:"Complemento",suggestions:["desodorante","crema-manos"]}]}]},"carniceria-central":{intro:"Cortes frescos, milanesas y pedidos por kilo listos para armar el pedido completo.",sections:[{id:"cortes",label:"Cortes",description:"Para el almuerzo o la noche.",products:[{id:"bife-ancho",name:"Bife ancho",description:"Un corte protagonista para la compra principal.",categoryId:"cortes",categoryLabel:"Cortes",price:9900,tone:"red",badge:"Premium",suggestions:["asado-especial","picada-premium"]},{id:"asado-especial",name:"Asado especial",description:"Para el finde y las comidas largas.",categoryId:"cortes",categoryLabel:"Cortes",price:10900,tone:"orange",badge:"Finde",suggestions:["bife-ancho","hamburguesas-caseras"]},{id:"picada-premium",name:"Picada premium",description:"Para compartir sin complicarse.",categoryId:"cortes",categoryLabel:"Cortes",price:8400,tone:"violet",badge:"Compartir",suggestions:["asado-especial","bife-ancho"]}]},{id:"milanesas",label:"Milanesas",description:"La compra de siempre para resolver rápido.",products:[{id:"milanesas-kg",name:"Milanesas x kg",description:"Una de las salidas más prácticas de la carnicería.",categoryId:"milanesas",categoryLabel:"Milanesas",price:9100,tone:"blue",badge:"Mejor salida",suggestions:["hamburguesas-caseras","asado-especial"]},{id:"hamburguesas-caseras",name:"Hamburguesas caseras",description:"Para armar el pedido del día en un solo toque.",categoryId:"milanesas",categoryLabel:"Milanesas",price:6200,tone:"green",badge:"Listo para cocinar",suggestions:["milanesas-kg","asado-especial"]},{id:"pollo-entero",name:"Pollo entero",description:"Otro clásico para completar la compra.",categoryId:"milanesas",categoryLabel:"Milanesas",price:5450,tone:"orange",badge:"Clásico",suggestions:["milanesas-kg","bife-ancho"]}]},{id:"extras",label:"Extras",description:"Pedidos secundarios que completan el viaje.",products:[{id:"hielo-carniceria",name:"Hielo 2 kg",description:"Perfecto para acompañar el pedido del finde.",categoryId:"extras",categoryLabel:"Extras",price:1200,tone:"slate",badge:"Complemento",suggestions:["asado-especial","picada-premium"]},{id:"salsas",name:"Salsa parrillera",description:"El detalle que suma al pedido principal.",categoryId:"extras",categoryLabel:"Extras",price:980,tone:"red",badge:"Extra",suggestions:["bife-ancho","asado-especial"]},{id:"condimentos",name:"Condimentos",description:"Los básicos que completan la compra.",categoryId:"extras",categoryLabel:"Extras",price:690,tone:"violet",badge:"Básico",suggestions:["salsas","hielo-carniceria"]}]}]}},EC="almacen-juan",TC=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const mg=u.button`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease,
    color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
    color: ${({theme:e})=>e.color.text};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,MC=u.div`
  display: grid;
  /* Dos columnas ya en mobile: mismo tamaño de tarjeta que en Inicio,
     para que el catálogo se recorra de un vistazo. */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[3]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;u(nt)`
  overflow: hidden;
  border-color: ${({theme:e,$active:t})=>t?"rgba(0, 71, 231, 0.24)":e.color.border};
  background: ${({theme:e,$active:t})=>t?e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.09), rgba(17, 26, 46, 0.98))":"linear-gradient(180deg, rgba(0, 71, 231, 0.05), rgba(255, 255, 255, 0.98))":e.color.surface};
  box-shadow: ${({theme:e,$active:t})=>t?e.shadow.md:e.shadow.sm};
`;u.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 8.5rem;
  padding: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.onPrimary};
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.36), transparent 22%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.72), rgba(37, 99, 235, 0.92));

  &[data-tone='green'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.36), transparent 22%),
      linear-gradient(135deg, rgba(15, 157, 88, 0.78), rgba(34, 197, 94, 0.92));
  }

  &[data-tone='orange'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(217, 119, 6, 0.78), rgba(245, 158, 11, 0.92));
  }

  &[data-tone='red'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(185, 28, 28, 0.78), rgba(239, 68, 68, 0.92));
  }

  &[data-tone='violet'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.32), transparent 22%),
      linear-gradient(135deg, rgba(124, 58, 237, 0.78), rgba(139, 92, 246, 0.92));
  }

  &[data-tone='slate'] {
    background:
      radial-gradient(circle at top left, rgba(255, 255, 255, 0.24), transparent 22%),
      linear-gradient(135deg, rgba(51, 65, 85, 0.78), rgba(100, 116, 139, 0.92));
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 7rem;
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[1]};
  }
`;u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(255, 255, 255, 0.18);
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 1.5rem;
    padding: 0 ${({theme:e})=>e.spacing[1]};
  }
`;u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.onPrimary};
`;u.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    display: none;
  }
`;u(gr)`
  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    display: none;
  }
`;u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    width: 100%;
  }
`;u(nt)`
  position: sticky;
  top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
  align-self: start;
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: 0.8125rem;
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;u(nt)`
  overflow: hidden;
`;u(nt)`
  border-style: dashed;
`;const AC=e=>fg[e]??fg[EC];function IC(){var A;const{storeId:e=""}=o1(),t=k.useMemo(()=>Zj(e)??ya[0],[e]),n=k.useMemo(()=>AC(t.id),[t.id]),o=k.useMemo(()=>n.sections.flatMap(E=>E.products),[n]),[a,c]=k.useState(""),[d,m]=k.useState("all"),[h,y]=k.useState(((A=o[0])==null?void 0:A.id)??""),[x,v]=k.useState({});k.useEffect(()=>{var N;const E=Object.fromEntries(o.map(Z=>[Z.id,0]));c(""),m("all"),y(((N=o[0])==null?void 0:N.id)??""),v(E)},[o,t.id]);const w=k.useMemo(()=>{const E=a.trim();return n.sections.filter(N=>d==="all"||N.id===d).map(N=>({...N,products:N.products.filter(Z=>RC(E,N,Z))})).filter(N=>N.products.length>0)},[d,n,a]),C=k.useMemo(()=>w.flatMap(E=>E.products),[w]);k.useEffect(()=>{C.length!==0&&(C.some(E=>E.id===h)||y(C[0].id))},[h,C]);const T=k.useMemo(()=>C.find(E=>E.id===h)??C[0]??o[0],[o,h,C]),j=k.useMemo(()=>T?T.suggestions.map(E=>o.find(N=>N.id===E)).filter(E=>!!E).slice(0,4):[],[o,T]),z=k.useMemo(()=>Object.values(x).reduce((E,N)=>E+N,0),[x]),_=k.useMemo(()=>o.reduce((E,N)=>E+N.price*(x[N.id]??0),0),[o,x]);k.useMemo(()=>o.map(E=>({...E,quantity:x[E.id]??0})).filter(E=>E.quantity>0).sort((E,N)=>N.quantity-E.quantity).slice(0,3),[o,x]),k.useMemo(()=>{const E=a.trim().toLowerCase(),N=E?n.sections.filter(Z=>Z.label.toLowerCase().includes(E)||Z.description.toLowerCase().includes(E)):n.sections;return N.length>0?N.slice(0,3):n.sections.slice(0,3)},[n.sections,a]);const b=E=>{E.preventDefault()},$=(E,N)=>{v(Z=>{const W=Math.max(0,(Z[E]??0)+N);return{...Z,[E]:W}}),y(E)};return s.jsxs(Je,{showSearch:!1,footerText:"Elegí productos, sumá cantidades y confirmá el pedido en LaFranciaGO.",children:[s.jsx(ze,{children:s.jsx(ce,{children:s.jsx(SC,{id:t.id,name:t.name,category:t.category,categoryId:t.id,address:t.address,hours:t.hours,distanceKm:t.distanceKm,rating:t.rating,openNow:t.openNow,minOrder:t.minOrder})})}),s.jsx(ze,{children:s.jsx(ce,{children:s.jsxs(TC,{children:[s.jsx(H5,{onSubmit:b,children:s.jsxs(Z5,{htmlFor:"store-search",children:[s.jsx(U5,{children:"Buscar productos dentro del comercio"}),s.jsxs(V5,{children:[s.jsx(yl,{size:18,"aria-hidden":"true"}),s.jsx(W5,{id:"store-search",value:a,onChange:E=>c(E.target.value),placeholder:`Buscar en ${t.name}...`,"aria-label":"Buscar productos dentro del comercio"})]})]})}),s.jsxs(lh,{"aria-label":"Categorías del comercio",children:[s.jsx(mg,{type:"button","data-active":d==="all",onClick:()=>m("all"),children:"Todas"}),n.sections.map(E=>s.jsx(mg,{type:"button","data-active":d===E.id,onClick:()=>m(E.id),children:E.label},E.id))]}),w.length>0?w.map((E,N)=>s.jsxs(Tr,{children:[s.jsx(Oe,{title:E.label,subtitle:E.description}),s.jsx(MC,{children:E.products.map((Z,W)=>s.jsx(hg,{name:Z.name,price:Z.price,categoryId:Z.categoryId,badge:Z.badge,quantity:x[Z.id]??0,onAdd:ae=>$(Z.id,ae),priority:N===0&&W<4},Z.id))})]},E.id)):s.jsx(En,{icon:Yp,title:"Sin resultados",text:"Probá con otro término o cambiá de categoría.",dashed:!0})]})})}),j.length>0&&s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"También podés llevar",chip:"Sugeridos",subtitle:"Combinaciones que van con lo que estás pidiendo."}),s.jsx(dc,{"aria-label":"Productos sugeridos",children:j.map(E=>s.jsx(hg,{name:E.name,price:E.price,categoryId:E.categoryId,badge:E.badge,quantity:x[E.id]??0,onAdd:N=>$(E.id,N)},E.id))})]})}),z>0&&s.jsxs(jC,{children:[s.jsxs(CC,{children:[s.jsxs(PC,{children:[z," ",z===1?"producto":"productos"]}),s.jsx(zC,{children:dt(_)})]}),s.jsxs(LC,{to:"/carrito",children:[s.jsx(ca,{size:18,"aria-hidden":"true"}),"Ver carrito"]})]})]})}u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;function RC(e,t,n){if(!e)return!0;const o=e.toLowerCase();return[t.label,t.description,n.name,n.description,n.categoryLabel].join(" ").toLowerCase().includes(o)}const OC=u.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;

  > * + * {
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,mv=Ce`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  min-height: 3.75rem;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  background: transparent;
  text-align: left;
`,NC=u.div`
  ${mv};
`,FC=u(Ge)`
  ${mv};
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.surfaceMuted};
  }
`,BC=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Nt};

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }
`,DC=u.span`
  display: grid;
  gap: 0.05rem;
  min-width: 0;
  flex: 1 1 auto;
`,HC=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,ZC=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,UC=u.span`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
`;function mt({icon:e,title:t,subtitle:n,to:o,tone:a,trailing:c}){const d=s.jsxs(s.Fragment,{children:[s.jsx(BC,{"data-tone":a??"default",children:s.jsx(e,{size:18,"aria-hidden":"true"})}),s.jsxs(DC,{children:[s.jsx(HC,{"data-tone":a??"default",children:t}),n?s.jsx(ZC,{children:n}):null]}),c??s.jsx(UC,{children:s.jsx(ii,{size:18,"aria-hidden":"true"})})]});return o?s.jsx(FC,{to:o,children:d}):s.jsx(NC,{children:d})}function Pr({children:e}){return s.jsx(OC,{children:e})}const VC=u.div`
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: stretch;
  }
`,WC=u.div`
  display: grid;
  gap: 0.15rem;
  align-content: start;
  padding: ${({theme:e})=>e.spacing[3]};
`,GC=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,qC=u.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: ${({theme:e})=>e.color.text};
`,YC=u.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,KC=u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["3xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.primary};
`,QC=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.85rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,XC=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[3]};
`,JC=u.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,eP=u.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`;function tP(){const{productId:e=""}=o1(),t=k.useMemo(()=>Vj(e),[e]),n=k.useMemo(()=>{var c;if((t==null?void 0:t.kind)==="comparison")return{name:t.comparison.product,category:t.comparison.category,bestPrice:t.bestOffer.price,bestStore:t.bestOffer.store,comparisonOffers:t.sortedOffers,badge:t.comparison.badge};const a=dv(e)??Y1[0];return{name:a.product,category:a.category,bestPrice:a.price,bestStore:a.store,comparisonOffers:((c=K1.find(d=>d.id===`${a.id}-compare`))==null?void 0:c.offers)??[],badge:a.highlight}},[t,e]),o=Uj(n.bestStore);return s.jsxs(Je,{showSearch:!1,footerText:"Elegí el comercio con mejor precio y sumalo al carrito.",children:[s.jsx(ze,{children:s.jsx(ce,{children:s.jsxs(VC,{children:[s.jsxs(oi,{$ratio:"4 / 3",children:[s.jsx(ai,{src:Ln(o==null?void 0:o.id),alt:n.name,loading:"eager"}),n.badge?s.jsx(ba,{children:s.jsx(JC,{children:n.badge})}):null]}),s.jsxs(WC,{children:[s.jsx(GC,{children:n.category}),s.jsx(qC,{children:n.name}),s.jsxs(YC,{children:[s.jsx(KC,{children:dt(n.bestPrice)}),s.jsxs(QC,{children:[s.jsx(or,{size:14,"aria-hidden":"true"}),n.bestStore]})]}),s.jsxs(XC,{children:[s.jsxs(eh,{to:"/carrito",children:[s.jsx(ca,{size:18,"aria-hidden":"true"}),"Agregar al carrito"]}),o?s.jsx(xa,{to:`/comercios/${o.id}`,children:"Ver comercio"}):null]})]})]})})}),n.comparisonOffers.length>0&&s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Dónde comprarlo",chip:"Precios",subtitle:"Mismo producto en distintos comercios."}),s.jsx(Pr,{children:n.comparisonOffers.map(a=>s.jsx(mt,{icon:or,title:a.store,subtitle:`${cc(a.distanceKm)} · ${a.eta}`,trailing:s.jsx(eP,{children:dt(a.price)})},a.store))})]})})]})}const rP=zn`
  from { opacity: 0; }
  to { opacity: 1; }
`,nP=zn`
  from { opacity: 0; transform: translateY(0.5rem) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,iP=u.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.header+40};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: rgba(5, 8, 22, 0.56);
  backdrop-filter: blur(6px);
  animation: ${rP} 160ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,oP=u.div`
  width: 100%;
  max-width: 22rem;
  padding: ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
  text-align: center;

  ${va};
  animation: ${nP} 180ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,aP=u.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,sP=u.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,lP=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`,cP=u.button`
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
`,dP=u.button`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.danger};
  color: #ffffff;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: filter 180ms ease, transform 180ms ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.color.text};
    outline-offset: 2px;
  }
`;function uP({open:e,title:t,text:n,confirmLabel:o="Aceptar",cancelLabel:a="Cancelar",onConfirm:c,onCancel:d}){return k.useEffect(()=>{if(!e)return;const m=h=>{h.key==="Escape"&&d()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[d,e]),e?s.jsx(iP,{onClick:d,role:"presentation",children:s.jsxs(oP,{role:"alertdialog","aria-modal":"true","aria-label":t,onClick:m=>m.stopPropagation(),children:[s.jsx(aP,{children:t}),n?s.jsx(sP,{children:n}):null,s.jsxs(lP,{children:[s.jsx(cP,{type:"button",onClick:d,children:a}),s.jsx(dP,{type:"button",onClick:c,autoFocus:!0,children:o})]})]})}):null}const pP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,hP=u(nt)`
  position: relative;
  overflow: hidden;
  border-color: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.22)":"rgba(0, 71, 231, 0.12)"};
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.12) 0%, rgba(17, 26, 46, 0.98) 58%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.08) 0%, rgba(255, 255, 255, 0.98) 58%)"};
  box-shadow: ${({theme:e})=>e.shadow.md};

  &::after {
    content: '';
    position: absolute;
    inset: -10% auto auto 60%;
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    background: ${({theme:e})=>e.mode==="dark"?"radial-gradient(circle, rgba(107, 157, 255, 0.16) 0%, rgba(107, 157, 255, 0.02) 55%, transparent 70%)":"radial-gradient(circle, rgba(0, 71, 231, 0.12) 0%, rgba(0, 71, 231, 0.02) 55%, transparent 70%)"};
    pointer-events: none;
  }
`,gs=u(Bt)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,fP=u.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,mP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,gP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const vi=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: rgba(15, 157, 88, 0.14);
    border-color: rgba(15, 157, 88, 0.24);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='warning'] {
    background: rgba(217, 119, 6, 0.12);
    border-color: rgba(217, 119, 6, 0.2);
    color: ${({theme:e})=>e.color.warning};
  }

  &:not([data-tone]) {
    ${Nt};
    ${va};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,yP=u.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,vP=u.div`
  display: grid;
  justify-items: center;
  gap: 0.35rem;
  min-width: 0;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  text-align: center;

  &[data-state='active'] {
    border-color: rgba(0, 71, 231, 0.22);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,xP=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  [data-state='active'] & {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,bP=u.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,wP=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,_P=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,gg=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,$P=u(nt)`
  overflow: hidden;
`,yg=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,vg=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,xg=u.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,bg=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,kP=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid transparent;
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  /* Tiempo estimado: destacado con el neón del modo NOCHE. */
  ${Nt};
  ${va};
`,SP=u.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,jP=u.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,CP=u.div`
  position: relative;
  flex: 0 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,PP=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;u.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`;const zP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,LP=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,EP=u.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,TP=u.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,MP=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,AP=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 1.875rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: rgba(15, 157, 88, 0.12);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='warning'] {
    background: rgba(217, 119, 6, 0.12);
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,IP=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,wg=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,_g=u.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,RP=u(nt)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,OP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,NP=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,FP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,BP=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,DP=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,HP=u.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,ZP=u.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,wd=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,UP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,ys=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &[data-emphasis='true'] {
    padding-top: ${({theme:e})=>e.spacing[2]};
    margin-top: ${({theme:e})=>e.spacing[1]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
    color: ${({theme:e})=>e.color.text};
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,VP=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,WP=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,$g=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,GP=Ce`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,qP=u.div`
  ${GP}
`,_d=u(ze)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,YP=u.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 0 0 auto;
`,KP=u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.85rem;
  height: 1.85rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;

  ${Nt};
  ${va};

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
    color: ${({theme:e})=>e.color.danger};
  }
`,QP=u.div`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.15rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
`,kg=u.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.65rem;
  height: 1.65rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, color 180ms ease;

  /* Área táctil de 44px sin agrandar el círculo. */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    transform: translate(-50%, -50%);
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }

  &:disabled {
    color: ${({theme:e})=>e.color.textSoft};
    cursor: not-allowed;
  }
`,XP=u.span`
  min-width: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Os=15e3,gv=200,yv=e=>{const t=e.match(/\d+/);return Number((t==null?void 0:t[0])??0)},JP=(e=Q1)=>{const t=new Map;return e.forEach(n=>{const o=t.get(n.store);if(o){o.items.push(n),o.itemCount+=n.quantity,o.subtotal+=n.subtotal,o.availableCount+=n.available?1:0,o.unavailableCount+=n.available?0:1;return}t.set(n.store,{store:n.store,items:[n],itemCount:n.quantity,subtotal:n.subtotal,etaLabel:n.eta,availableCount:n.available?1:0,unavailableCount:n.available?0:1})}),[...t.values()].map(n=>{const o=n.items.map(d=>yv(d.eta)).filter(Boolean),a=o.length?Math.min(...o):0,c=o.length?Math.max(...o):0;return{...n,etaLabel:o.length<=1||a===c?`${a||0} min`:`${a}–${c} min`}})},ez=e=>{const t=e.reduce((d,m)=>d+m.subtotal,0),n=t>=Os?0:1200,o=e.map(d=>yv(d.eta)).filter(Boolean),a=o.length?Math.min(...o):0,c=o.length?Math.max(...o):0;return{subtotal:t,deliveryFee:n,total:t+n+gv,totalUnits:e.reduce((d,m)=>d+m.quantity,0),unavailableItems:e.filter(d=>!d.available).length,deliveryWindow:o.length?a===c?`${a} min`:`${a}–${c} min`:"Pendiente",freeShippingRemaining:Math.max(Os-t,0),freeShippingProgress:Math.min(t/Os*100,100)}},tz=[{label:"Carrito",state:"active"},{label:"Dirección",state:"idle"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmar",state:"idle"}],rz=[{label:"Crédito",icon:Zm},{label:"Débito",icon:Zm},{label:"Transferencia",icon:H$}],nz=[{label:"Compra protegida",icon:ei},{label:"Sin costos sorpresa",icon:Up},{label:"Entrega clara",icon:Er}],iz=["Delivery GO","Entrega comercio","Sin retiro"];function oz(){const[e,t]=k.useState(Q1),[n,o]=k.useState(null),a=k.useMemo(()=>JP(e),[e]),{subtotal:c,deliveryFee:d,total:m,totalUnits:h,unavailableItems:y,deliveryWindow:x,freeShippingRemaining:v,freeShippingProgress:w}=k.useMemo(()=>ez(e),[e]),C=(j,z)=>{t(_=>_.map(b=>{if(b.id!==j)return b;const $=Math.max(1,b.quantity+z);return{...b,quantity:$,subtotal:b.price*$}}))},T=j=>{t(z=>z.filter(_=>_.id!==j)),o(null)};return a.length===0?s.jsx(Je,{showSearch:!1,footerText:"Tu carrito está esperando el primer producto.",children:s.jsx(_d,{children:s.jsx(ce,{children:s.jsx(En,{icon:ca,title:"Tu carrito está vacío",text:"Explorá los comercios de La Francia y armá tu pedido.",ctaLabel:"Explorar comercios",ctaTo:"/comercios"})})})}):s.jsxs(Je,{showSearch:!1,footerText:"Dirección, entrega y pago dentro de LaFranciaGO.",children:[s.jsxs(pP,{children:[s.jsx(_d,{children:s.jsx(ce,{children:s.jsx(hP,{children:s.jsx(gs,{children:s.jsxs(fP,{children:[s.jsxs(mP,{children:[s.jsx(gP,{children:s.jsx(Xp,{children:"Carrito"})}),s.jsxs(wP,{children:[s.jsxs(vi,{"data-tone":"brand",children:[s.jsx(ca,{size:14,"aria-hidden":"true"})," ",h," unidades"]}),s.jsxs(vi,{"data-tone":y>0?"warning":"success",children:[s.jsx(D$,{size:14,"aria-hidden":"true"})," ",y," sin stock"]}),s.jsxs(vi,{children:[s.jsx(Er,{size:14,"aria-hidden":"true"})," ",x]})]})]}),s.jsx(yP,{"aria-label":"Progreso de compra",children:tz.map((j,z)=>s.jsxs(vP,{"data-state":j.state,children:[s.jsx(xP,{"data-state":j.state,children:z+1}),s.jsx(bP,{children:j.label})]},j.label))})]})})})})}),s.jsx(_d,{children:s.jsx(ce,{children:s.jsxs(_P,{children:[s.jsx(gg,{children:a.map(j=>s.jsx($P,{children:s.jsxs(gs,{children:[s.jsxs(yg,{children:[s.jsxs(vg,{children:[s.jsx(xg,{children:j.store}),s.jsxs(bg,{children:[j.itemCount," ítems · ",j.unavailableCount," pendientes"]})]}),s.jsxs(kP,{children:[s.jsx(Er,{size:14,"aria-hidden":"true"})," ",j.etaLabel]})]}),s.jsx(SP,{children:j.items.map(z=>s.jsxs(jP,{children:[s.jsx(CP,{children:s.jsx(PP,{src:Ln(z.categoryId),alt:z.product,loading:"lazy"})}),s.jsxs(zP,{children:[s.jsxs(LP,{children:[s.jsxs("div",{style:{minWidth:0},children:[s.jsx(EP,{children:z.product}),s.jsx(gr,{children:z.store})]}),s.jsxs(YP,{children:[s.jsx(TP,{children:z.available?dt(z.subtotal):"—"}),s.jsx(KP,{type:"button","aria-label":`Quitar ${z.product} del carrito`,onClick:()=>o(z.id),children:s.jsx(Xi,{size:15,"aria-hidden":"true"})})]})]}),s.jsxs(MP,{children:[s.jsxs(QP,{children:[s.jsx(kg,{type:"button",onClick:()=>C(z.id,-1),disabled:z.quantity<=1,"aria-label":`Quitar una unidad de ${z.product}`,children:s.jsx(N1,{size:14,"aria-hidden":"true"})}),s.jsxs(XP,{"aria-live":"polite",children:[z.quantity," unid."]}),s.jsx(kg,{type:"button",onClick:()=>C(z.id,1),"aria-label":`Agregar una unidad de ${z.product}`,children:s.jsx(lc,{size:14,"aria-hidden":"true"})})]}),s.jsx(AP,{"data-tone":z.statusTone,children:z.statusLabel})]}),s.jsxs(IP,{children:[s.jsxs(wg,{children:[s.jsx(Er,{size:14,"aria-hidden":"true"}),z.eta]}),z.statusTone==="success"?s.jsx(wg,{children:"Listo para sumar al pedido"}):z.statusTone==="warning"?s.jsx(_g,{"data-tone":"warning",children:"Pocas unidades"}):s.jsx(_g,{"data-tone":"danger",children:"Sin stock"})]})]})]},z.id))})]})},j.store))}),s.jsx(RP,{children:s.jsx(gs,{children:s.jsxs(OP,{children:[s.jsxs("div",{children:[s.jsx(Un,{children:"Resumen"}),s.jsx(gt,{children:"Costos claros y pago seguro."}),s.jsx(gr,{children:"El total sale sin sorpresas y con el envío ya calculado."})]}),s.jsxs(FP,{children:[s.jsxs(BP,{children:[s.jsx("span",{children:"Envío gratis"}),s.jsx("strong",{children:v>0?`${dt(v)} faltan`:"Ya lo alcanzaste"})]}),s.jsx(HP,{children:s.jsx(ZP,{$value:w})}),s.jsxs(DP,{children:["Umbral estimado ",dt(Os)," ·"," ",v>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),s.jsxs(UP,{children:[s.jsxs(ys,{children:[s.jsx("span",{children:"Subtotal"}),s.jsx("span",{children:dt(c)})]}),s.jsxs(ys,{children:[s.jsx("span",{children:"Envío estimado"}),s.jsx("span",{children:dt(d)})]}),s.jsxs(ys,{children:[s.jsx("span",{children:"Cargo de servicio"}),s.jsx("span",{children:dt(gv)})]}),s.jsxs(ys,{"data-emphasis":"true",children:[s.jsx("strong",{children:"Total estimado"}),s.jsx(K5,{children:dt(m)})]})]}),s.jsx(VP,{children:nz.map(j=>{const z=j.icon;return s.jsxs(WP,{children:[s.jsx(z,{size:16,"aria-hidden":"true"}),s.jsx("span",{children:j.label})]},j.label)})}),s.jsxs(wd,{children:[s.jsxs("div",{children:[s.jsx(Un,{children:"Dirección"}),s.jsx(gt,{children:"Elegí dónde recibir"}),s.jsx(gr,{children:"Elegí una dirección guardada antes de seguir."})]}),s.jsx(gg,{children:vl.map(j=>s.jsx(nt,{children:s.jsx(gs,{children:s.jsxs(yg,{children:[s.jsxs(vg,{children:[s.jsx(xg,{children:j.label}),s.jsx(bg,{children:j.address})]}),s.jsx(vi,{"data-tone":j.primary?"brand":"success",children:j.primary?"Principal":"Guardada"})]})})},j.id))})]}),s.jsxs(wd,{children:[s.jsxs("div",{children:[s.jsx(Un,{children:"Entrega"}),s.jsx(gt,{children:"Cómo llega el pedido"}),s.jsx(gr,{children:"La app deja claro quién entrega."})]}),s.jsx($g,{children:iz.map(j=>s.jsx(vi,{"data-tone":"brand",children:j},j))})]}),s.jsxs(wd,{children:[s.jsxs("div",{children:[s.jsx(Un,{children:"Pago"}),s.jsx(gt,{children:"Elegí el medio de pago"}),s.jsx(NP,{children:"Crédito, débito y transferencia quedan visibles antes de confirmar."})]}),s.jsx($g,{children:rz.map(j=>{const z=j.icon;return s.jsxs(vi,{"data-tone":"brand",children:[s.jsx(z,{size:14,"aria-hidden":"true"}),j.label]},j.label)})})]}),s.jsxs(qP,{children:[s.jsx(eh,{to:"/pedidos",children:"Confirmar pedido"}),s.jsx(xa,{to:"/comercios",children:"Seguir comprando"})]})]})})})]})})})]}),s.jsx(uP,{open:n!==null,title:"¿Deseás eliminar este artículo?",text:"Se va a quitar del carrito.",onCancel:()=>o(null),onConfirm:()=>n&&T(n)})]})}const Lu=new Set;let fr=null,Eu=[];const Tu=()=>Lu.forEach(e=>e()),az=()=>{Eu.forEach(e=>window.clearTimeout(e)),Eu=[]},Mu=()=>new Date().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),Sg=[{id:"c1",name:"Roy Ramírez",vehicle:"Moto",rating:4.9,distanceKm:1.2},{id:"c2",name:"Daniel Sosa",vehicle:"Moto",rating:4.7,distanceKm:2.4},{id:"c3",name:"Matías Gómez",vehicle:"Auto",rating:4.8,distanceKm:3.6}],vv=5,jg=()=>fr;function sz(e){return Lu.add(e),()=>{Lu.delete(e)}}function lz(e,t){az(),fr={id:`errand-${Date.now()}`,code:`#${Math.floor(1e3+Math.random()*9e3)}`,description:e,status:"buscando",createdAt:Mu(),radiusKm:vv,address:t,messages:[]},Tu();const n=window.setTimeout(()=>{if(!fr||fr.status!=="buscando")return;const o=Sg[Math.floor(Math.random()*Sg.length)];fr={...fr,status:"tomado",courier:o,messages:[{id:`m-${Date.now()}`,author:"repartidor",kind:"texto",text:"¡Hola! Tomo tu mandado. Voy para allá, cualquier cosa escribime por acá.",time:Mu()}]},Tu()},3200);return Eu.push(n),fr}function cz(e){fr&&(fr={...fr,messages:[...fr.messages,{...e,id:`m-${Date.now()}-${Math.random()}`,time:Mu()}]},Tu())}function dz(){const[e,t]=k.useState(jg);k.useEffect(()=>sz(()=>t(jg())),[]);const n=k.useCallback(o=>{cz(o)},[]);return k.useMemo(()=>({errand:e,send:n}),[e,n])}const uz=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,pz=u.label`
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,hz=u.textarea`
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:e})=>e.color.danger};
  }
`,fz=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
`,mz=u.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,gz=u.p`
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.4;
`,yz=u.ul`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  padding: 0;
  list-style: none;
`,vs=u.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,xs=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.primary};

  ${Nt};
`,vz=u.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({theme:e})=>e.spacing[2]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`,xz=10,Cg="Av. San Martín 123";function bz(){const e=Nl(),[t,n]=k.useState(""),[o,a]=k.useState(!1),c=t.trim(),d=c.length<xz?"Contanos un poco más de lo que necesitás.":null,m=h=>{h.preventDefault(),a(!0),!d&&(lz(c,Cg),e("/mandado/chat"))};return s.jsx(Je,{showSearch:!1,footerText:"Pedí lo que necesites y un repartidor lo busca.",children:s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"¿Qué necesitás?",chip:"Mandado",subtitle:"Contanos qué hay que comprar o retirar."}),s.jsxs(uz,{as:"form",onSubmit:m,noValidate:!0,children:[s.jsx(pz,{htmlFor:"errand-description",children:"Descripción del mandado"}),s.jsx(hz,{id:"errand-description",value:t,onChange:h=>n(h.target.value),placeholder:"Ej: Necesito 2 bolsas de hielo, una Coca de 2,25 L y un alfajor de la despensa de la esquina.",rows:5,"data-invalid":o&&!!d,autoFocus:!0}),o&&d?s.jsx(mz,{children:d}):s.jsx(fz,{children:"Cuanto más claro lo escribas, menos preguntas te va a hacer el repartidor."}),s.jsx(gz,{children:"Después vas a poder mandarle fotos y audios por el chat para coordinar."}),s.jsxs(yz,{children:[s.jsxs(vs,{children:[s.jsx(xs,{children:s.jsx(L1,{size:16,"aria-hidden":"true"})}),"Lo ven los repartidores en ",vv," km a la redonda."]}),s.jsxs(vs,{children:[s.jsx(xs,{children:s.jsx(br,{size:16,"aria-hidden":"true"})}),"El primero que lo toma se queda con el pedido."]}),s.jsxs(vs,{children:[s.jsx(xs,{children:s.jsx(Mr,{size:16,"aria-hidden":"true"})}),"Entrega en ",Cg,"."]}),s.jsxs(vs,{children:[s.jsx(xs,{children:s.jsx(ei,{size:16,"aria-hidden":"true"})}),"Pagás al recibir, cuando ya sabés el total."]})]}),s.jsx(vz,{type:"submit",children:"Generar pedido de mandado"})]})]})})})}const Tt={maxImages:5,maxVideos:1,maxImageDimension:1200,maxImageBytes:300*1024,maxVideoBytes:20*1024*1024,maxVideoSeconds:30},xv=["image/jpeg","image/png","image/webp","image/heic"],bv=["video/mp4","video/quicktime","video/webm"],wz=xv.join(","),_z=bv.join(","),$z=()=>{const e=document.createElement("canvas");return e.width=1,e.height=1,e.toDataURL("image/webp").startsWith("data:image/webp")?"image/webp":"image/jpeg"},kz=e=>new Promise((t,n)=>{const o=URL.createObjectURL(e),a=new Image;a.onload=()=>{URL.revokeObjectURL(o),t(a)},a.onerror=()=>{URL.revokeObjectURL(o),n(new Error("No se pudo leer la imagen"))},a.src=o}),Pg=(e,t,n)=>new Promise(o=>e.toBlob(o,t,n)),Ho=e=>e<1024?`${e} B`:e<1024*1024?`${Math.round(e/1024)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`;async function wv(e){const t=await kz(e),{maxImageDimension:n,maxImageBytes:o}=Tt,a=Math.min(1,n/Math.max(t.width,t.height)),c=Math.round(t.width*a),d=Math.round(t.height*a),m=document.createElement("canvas");m.width=c,m.height=d;const h=m.getContext("2d");if(!h)throw new Error("No se pudo procesar la imagen");h.drawImage(t,0,0,c,d);const y=$z();let x=.82,v=await Pg(m,y,x);for(;v&&v.size>o&&x>.5;)x-=.1,v=await Pg(m,y,x);if(!v)throw new Error("No se pudo comprimir la imagen");return{blob:v,previewUrl:URL.createObjectURL(v),width:c,height:d,bytes:v.size,originalBytes:e.size,type:y}}const Sz=e=>new Promise(t=>{const n=URL.createObjectURL(e),o=document.createElement("video");o.preload="metadata",o.onloadedmetadata=()=>{URL.revokeObjectURL(n),t(o.duration)},o.onerror=()=>{URL.revokeObjectURL(n),t(0)},o.src=n});async function jz(e){return bv.includes(e.type)?e.size>Tt.maxVideoBytes?`El video supera ${Ho(Tt.maxVideoBytes)}. Grabá uno más corto o bajá la calidad.`:await Sz(e)>Tt.maxVideoSeconds?`El video dura más de ${Tt.maxVideoSeconds} segundos.`:null:"Formato no soportado. Usá MP4, MOV o WebM."}function Cz(e){return xv.includes(e.type)?null:"Formato no soportado. Usá JPG, PNG o WebP."}const Pz=60,zz=()=>typeof MediaRecorder>"u"?"":["audio/webm;codecs=opus","audio/webm","audio/mp4"].find(t=>MediaRecorder.isTypeSupported(t))??"";function Lz(){var w;const[e,t]=k.useState({recording:!1,seconds:0,error:null}),n=k.useRef(null),o=k.useRef([]),a=k.useRef(null),c=k.useRef(null),d=k.useRef(null),m=typeof navigator<"u"&&!!((w=navigator.mediaDevices)!=null&&w.getUserMedia)&&typeof MediaRecorder<"u",h=k.useCallback(()=>{var C;c.current!==null&&(window.clearInterval(c.current),c.current=null),(C=a.current)==null||C.getTracks().forEach(T=>T.stop()),a.current=null,n.current=null},[]);k.useEffect(()=>h,[h]);const y=k.useCallback(async()=>{if(!m)return t(C=>({...C,error:"Tu navegador no permite grabar audio."})),!1;try{const C=await navigator.mediaDevices.getUserMedia({audio:!0}),T=zz(),j=new MediaRecorder(C,T?{mimeType:T}:void 0);return o.current=[],a.current=C,n.current=j,j.ondataavailable=z=>{z.data.size>0&&o.current.push(z.data)},j.onstop=()=>{var b;const z=new Blob(o.current,{type:T||"audio/webm"}),_=e.seconds;(b=d.current)==null||b.call(d,z.size>0?{url:URL.createObjectURL(z),seconds:_}:null),d.current=null,h()},j.start(),t({recording:!0,seconds:0,error:null}),c.current=window.setInterval(()=>{t(z=>{var b;const _=z.seconds+1;return _>=Pz&&((b=n.current)==null||b.stop()),{...z,seconds:_}})},1e3),!0}catch{return t(C=>({...C,error:"No pudimos usar el micrófono. Revisá los permisos."})),!1}},[h,e.seconds,m]),x=k.useCallback(()=>new Promise(C=>{const T=n.current;if(!T||T.state==="inactive"){C(null),h(),t({recording:!1,seconds:0,error:null});return}d.current=j=>{t({recording:!1,seconds:0,error:null}),C(j)},T.stop()}),[h]),v=k.useCallback(()=>{const C=n.current;d.current=null,C&&C.state!=="inactive"&&C.stop(),h(),t({recording:!1,seconds:0,error:null})},[h]);return{...e,supported:m,start:y,stop:x,cancel:v}}const Ez=zn`
  0% { transform: scale(0.85); opacity: 0.9; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
`,Tz=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Mz=u.span`
  width: 0.6rem;
  height: 0.6rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.warning};

  &[data-status='tomado'],
  &[data-status='en-curso'] {
    background: ${({theme:e})=>e.color.success};
  }

  &[data-status='cancelado'] {
    background: ${({theme:e})=>e.color.danger};
  }
`,Az=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Iz=u.p`
  margin: ${({theme:e})=>e.spacing[2]} 0;
  padding: ${({theme:e})=>e.spacing[2]};
  border-left: 3px solid ${({theme:e})=>e.color.primary};
  border-radius: 0 ${({theme:e})=>e.radius.md} ${({theme:e})=>e.radius.md} 0;
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.45;
`,Rz=u.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,Oz=u.span`
  position: relative;
  flex: 0 0 auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.primary};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({theme:e})=>e.color.primary};
    animation: ${Ez} 1.8s ease-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,Nz=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,Fz=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Bz=u.strong`
  display: block;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  color: ${({theme:e})=>e.color.text};
`,Dz=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Hz=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-content: start;
  min-height: 14rem;
  max-height: 52dvh;
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.backgroundAlt};
  overflow-y: auto;
  overscroll-behavior: contain;
`,Zz=u.div`
  display: flex;
  justify-content: flex-start;

  &[data-mine='true'] {
    justify-content: flex-end;
  }
`,Uz=u.div`
  max-width: min(80%, 22rem);
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
  word-break: break-word;

  &[data-mine='true'] {
    border-color: transparent;
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,zg=u.span`
  display: block;
  margin-top: 0.2rem;
  opacity: 0.7;
  font-size: 0.6875rem;
  text-align: right;
`,Vz=u.img`
  display: block;
  width: 100%;
  max-width: 15rem;
  border-radius: ${({theme:e})=>e.radius.md};
`,Wz=u.audio`
  display: block;
  width: 100%;
  min-width: 12rem;
  max-width: 15rem;
`,Gz=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,qz=u.input`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
  }
`,$d=u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.primarySoft};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,Lg=u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  cursor: pointer;
  transition: background-color 180ms ease, opacity 180ms ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.color.brandHover};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,Yz=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.danger};
  background: ${({theme:e})=>e.color.surface};
`,Kz=u.span`
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  text-align: center;
`;function Qz(){const{errand:e,send:t}=dz(),[n,o]=k.useState(""),a=k.useRef(null),c=Lz();if(k.useEffect(()=>{const x=a.current;x&&(x.scrollTop=x.scrollHeight)},[e==null?void 0:e.messages.length]),!e)return s.jsx(Je,{showSearch:!1,footerText:"Pedí un mandado cuando lo necesites.",children:s.jsx(ze,{children:s.jsx(ce,{children:s.jsx(En,{icon:br,title:"No tenés mandados activos",text:"Generá uno y te conectamos con un repartidor cercano.",ctaLabel:"Pedir un mandado",ctaTo:"/mandado"})})})});const d=e.status==="buscando",m=x=>{x.preventDefault();const v=n.trim();v&&(t({author:"cliente",kind:"texto",text:v}),o(""))},h=async x=>{const v=x==null?void 0:x[0];if(v)try{const w=await wv(v);t({author:"cliente",kind:"foto",mediaUrl:w.previewUrl})}catch{t({author:"cliente",kind:"texto",text:"No pude enviar la foto."})}},y=async()=>{if(c.recording){const x=await c.stop();x&&t({author:"cliente",kind:"audio",mediaUrl:x.url,durationSec:x.seconds});return}await c.start()};return s.jsx(Je,{showSearch:!1,footerText:`Mandado ${e.code}`,children:s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsxs(Tz,{children:[s.jsx(Mz,{"data-status":e.status}),s.jsx(Az,{children:d?`Buscando repartidor en ${e.radiusKm} km...`:`Mandado ${e.code} · en curso`})]}),s.jsx(Iz,{children:e.description}),d?s.jsxs(Rz,{children:[s.jsx(Oz,{"aria-hidden":"true"}),"Avisamos a los repartidores cercanos. El primero que lo tome se queda con el pedido."]}):e.courier?s.jsxs(Nz,{children:[s.jsx(Fz,{children:e.courier.name.charAt(0)}),s.jsxs("div",{children:[s.jsx(Bz,{children:e.courier.name}),s.jsxs(Dz,{children:[e.courier.vehicle," · ",e.courier.rating.toFixed(1)," ★ · a"," ",e.courier.distanceKm.toFixed(1)," km"]})]})]}):null,s.jsx(Hz,{ref:a,"aria-label":"Mensajes del mandado",children:e.messages.map(x=>s.jsx(Zz,{"data-mine":x.author==="cliente",children:s.jsxs(Uz,{"data-mine":x.author==="cliente",children:[x.kind==="texto"?x.text:null,x.kind==="foto"&&x.mediaUrl?s.jsx(Vz,{src:x.mediaUrl,alt:"Foto enviada en el chat"}):null,x.kind==="audio"&&x.mediaUrl?s.jsx(Wz,{src:x.mediaUrl,controls:!0,preload:"metadata"}):null,s.jsx(zg,{children:x.time})]})},x.id))}),c.recording?s.jsxs(Yz,{children:[s.jsx($d,{type:"button",onClick:c.cancel,"aria-label":"Descartar audio","data-tone":"danger",children:s.jsx(sk,{size:18,"aria-hidden":"true"})}),s.jsxs(Kz,{children:["Grabando… ",c.seconds,"s"]}),s.jsx(Lg,{type:"button",onClick:y,"aria-label":"Enviar audio",children:s.jsx(ak,{size:16,"aria-hidden":"true"})})]}):s.jsxs(Gz,{as:"form",onSubmit:m,children:[s.jsxs($d,{as:"label","aria-label":"Enviar una foto",children:[s.jsx(W$,{size:18,"aria-hidden":"true"}),s.jsx("input",{type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:x=>{h(x.target.files),x.target.value=""}})]}),c.supported?s.jsx($d,{type:"button",onClick:y,"aria-label":"Grabar un audio",children:s.jsx(ek,{size:18,"aria-hidden":"true"})}):null,s.jsx(qz,{value:n,onChange:x=>o(x.target.value),placeholder:d?"Esperando repartidor…":"Escribí un mensaje","aria-label":"Mensaje"}),s.jsx(Lg,{type:"submit","aria-label":"Enviar mensaje",disabled:!n.trim(),children:s.jsx(ik,{size:16,"aria-hidden":"true"})})]}),c.error?s.jsx(zg,{role:"alert",children:c.error}):null]})})})}const Xz=u(Ge)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  transition: border-color 200ms ease, box-shadow 200ms ease, transform 200ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 71, 231, 0.24);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`,Jz=u.div`
  flex: 0 0 auto;
  width: 3.5rem;
`,e3=u.div`
  display: grid;
  gap: 0.2rem;
  min-width: 0;
  flex: 1 1 auto;
`,t3=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,r3=u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n3=u.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,i3=u.span`
  justify-self: start;
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;

  &[data-state='proceso'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-state='terminado'] {
    background: rgba(15, 157, 88, 0.14);
    color: ${({theme:e})=>e.color.success};
  }

  &[data-state='cancelado'] {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }
`,o3=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,a3=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: 0.1rem;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};

  > span {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
`,s3=u.strong`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,l3={proceso:"En proceso",terminado:"Entregado",cancelado:"Cancelado"};function c3({order:e,priority:t}){return s.jsxs(Xz,{to:`/comercios/${e.storeId}`,children:[s.jsx(Jz,{children:s.jsx(oi,{$ratio:"1 / 1",$radius:"md",children:s.jsx(ai,{src:Ln(e.categoryId),alt:e.store,loading:t?"eager":"lazy"})})}),s.jsxs(e3,{children:[s.jsxs(t3,{children:[s.jsx(r3,{children:e.store}),s.jsx(n3,{children:e.code})]}),s.jsx(i3,{"data-state":e.state,children:l3[e.state]}),s.jsxs(o3,{children:[s.jsx(Up,{size:13,"aria-hidden":"true"}),e.eta," · ",e.date]}),s.jsxs(a3,{children:[s.jsxs("span",{children:[s.jsx(br,{size:13,"aria-hidden":"true"})," ",e.itemCount," ",e.itemCount===1?"producto":"productos"]}),s.jsx(s3,{children:dt(e.total)})]})]}),s.jsx(ii,{size:18,"aria-hidden":"true"})]})}const d3=[{id:"todos",label:"Todos"},{id:"proceso",label:"En proceso"},{id:"terminado",label:"Terminados"},{id:"cancelado",label:"Cancelados"}];function u3(){const[e,t]=k.useState("todos"),n=k.useMemo(()=>e==="todos"?gd:gd.filter(a=>a.state===e),[e]),o=gd.filter(a=>a.state==="proceso").length;return s.jsxs(Je,{showSearch:!1,footerText:"Seguí el estado de todos tus pedidos.",children:[s.jsx(sh,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Mis pedidos",chip:o>0?`${o} en curso`:void 0,subtitle:"Historial completo de tus compras."}),s.jsx(lh,{"aria-label":"Filtrar pedidos",children:d3.map(a=>s.jsx(X1,{type:"button",onClick:()=>t(a.id),"data-active":e===a.id,children:a.label},a.id))})]})}),s.jsx($t,{children:s.jsx(ce,{children:n.length>0?s.jsx(tC,{children:n.map((a,c)=>s.jsx(c3,{order:a,priority:c<3},a.id))}):s.jsx(En,{icon:br,title:"Sin pedidos acá",text:"Todavía no tenés pedidos en este estado.",ctaLabel:"Explorar comercios",ctaTo:"/comercios"})})})]})}const kd=ya.filter(e=>Rs.some(t=>t.store.toLowerCase()===e.name.toLowerCase()));function p3(){return Rs.length===0&&kd.length===0?s.jsx(Je,{showSearch:!1,footerText:"Guardá lo que más comprás.",children:s.jsx($t,{children:s.jsx(ce,{children:s.jsx(En,{icon:ga,title:"Todavía no guardaste nada",text:"Tocá el corazón en un producto o comercio para tenerlo a mano.",ctaLabel:"Explorar comercios",ctaTo:"/comercios"})})})}):s.jsxs(Je,{showSearch:!1,footerText:"Tus productos y comercios guardados.",children:[Rs.length>0&&s.jsx($t,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Productos",subtitle:"Lo que guardaste para repetir."}),s.jsx(Xj,{children:Rs.map((t,n)=>s.jsx(cv,{name:t.name,store:t.store,price:t.price,categoryId:t.categoryId,priority:n<4},t.id))})]})}),kd.length>0&&s.jsx($t,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Comercios",subtitle:"Tus locales de siempre."}),s.jsx(pv,{children:kd.map(t=>s.jsx(ih,{id:t.id,name:t.name,category:t.category,categoryId:t.id,to:`/comercios/${t.id}`,distanceKm:t.distanceKm,rating:t.rating,openNow:t.openNow},t.id))})]})})]})}const h3=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,f3=u.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,m3=u.h1`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,g3=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,y3=u.span`
  justify-self: start;
  margin-top: ${({theme:e})=>e.spacing[1]};
  padding: 0.15rem ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Sd=vl.find(e=>e.primary)??vl[0];function v3(){return s.jsxs(Je,{showSearch:!1,footerText:"Tu perfil, pedidos y direcciones.",children:[s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(h3,{children:[s.jsx(nh,{$size:"3.75rem",$tone:"blue",children:s.jsx(kn,{size:26,"aria-hidden":"true"})}),s.jsxs(f3,{children:[s.jsx(m3,{children:"Vecino de La Francia"}),s.jsx(g3,{children:"cuenta@lafranciago.com"}),s.jsx(y3,{children:"Cliente"})]})]})})}),s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(Tr,{children:[s.jsx(Oe,{title:"Mi actividad"}),s.jsxs(Pr,{children:[s.jsx(mt,{icon:br,title:"Mis pedidos",subtitle:"Seguimiento y historial",to:"/pedidos"}),s.jsx(mt,{icon:ga,title:"Favoritos",subtitle:"Productos y comercios guardados",to:"/favoritos"}),s.jsx(mt,{icon:Qi,title:"Notificaciones",subtitle:"Alertas y seguimientos",to:"/notificaciones"})]})]})})}),s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(Tr,{children:[s.jsx(Oe,{title:"Mis datos"}),s.jsxs(Pr,{children:[s.jsx(mt,{icon:kn,title:"Nombre visible",subtitle:"Vecino de La Francia"}),s.jsx(mt,{icon:Mr,title:"Tus direcciones",subtitle:(Sd==null?void 0:Sd.address)??"Sin direcciones guardadas"}),s.jsx(mt,{icon:Gp,title:"Número de contacto",subtitle:"+54 9 3564 000000"}),s.jsx(mt,{icon:ei,title:"Seguridad",subtitle:"Contraseña y acceso"})]})]})})}),s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(Tr,{children:[s.jsx(Oe,{title:"Sumate"}),s.jsxs(Pr,{children:[s.jsx(mt,{icon:or,title:"Publicar mi comercio",subtitle:"Registrá tu negocio",to:"/registro/comercio"}),s.jsx(mt,{icon:q1,title:"Registrate como delivery",subtitle:"Trabajá repartiendo pedidos",to:"/trabaja-con-nosotros"}),s.jsx(mt,{icon:Er,title:"Registrate como fletero",subtitle:"Trabajá haciendo fletes",to:"/registro/fletero"})]})]})})}),s.jsx($t,{children:s.jsx(ce,{children:s.jsx(Pr,{children:s.jsx(mt,{icon:Q$,title:"Cerrar sesión",tone:"danger"})})})})]})}const x3=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,b3=u.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  &[data-unread='true'] {
    border-color: rgba(0, 71, 231, 0.24);
  }
`,w3=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,_3=u.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
  flex: 1 1 auto;
`,$3=u.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,k3=u.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.text};
`,S3=u.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,j3=u.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,C3=u.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing[2]};
  right: ${({theme:e})=>e.spacing[2]};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.danger};
`,P3=u.button`
  justify-self: end;
  min-height: 2.25rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.danger};
    background: rgba(220, 38, 38, 0.08);
  }
`,z3=[{id:"n1",title:"Tu pedido va en camino",subtitle:"El repartidor ya retiró tu pedido de Almacén Juan.",date:"Hoy",unread:!0,icon:Mr},{id:"n2",title:"Pedido confirmado",subtitle:"Panadería La Esquina aceptó tu pedido #1248.",date:"Hoy",unread:!0,icon:br},{id:"n3",title:"Nueva oferta cerca tuyo",subtitle:"La Huerta bajó el precio de las verduras del día.",date:"Ayer",unread:!0,icon:z1},{id:"n4",title:"Nuevo comercio en LaFranciaGO",subtitle:"Carnicería Central ya está recibiendo pedidos.",date:"12/08",unread:!1,icon:or}];function L3(){const[e,t]=k.useState(z3);return e.length===0?s.jsx(Je,{showSearch:!1,footerText:"Te avisamos cuando pase algo con tus pedidos.",children:s.jsx(ze,{children:s.jsx(ce,{children:s.jsx(En,{icon:Qi,title:"No tenés notificaciones",text:"Acá vas a ver el estado de tus pedidos y las ofertas cerca tuyo.",ctaLabel:"Explorar comercios",ctaTo:"/comercios"})})})}):s.jsx(Je,{showSearch:!1,footerText:"Estado de tus pedidos y novedades.",children:s.jsx(ze,{children:s.jsx(ce,{children:s.jsxs(Tr,{children:[s.jsx(Oe,{title:"Notificaciones",chip:`${e.filter(n=>n.unread).length} nuevas`}),s.jsx(P3,{type:"button",onClick:()=>t([]),children:"Limpiar todo"}),s.jsx(x3,{children:e.map(n=>{const o=n.icon;return s.jsxs(b3,{"data-unread":n.unread,children:[s.jsx(w3,{children:s.jsx(o,{size:18,"aria-hidden":"true"})}),s.jsxs(_3,{children:[s.jsxs($3,{children:[s.jsx(k3,{children:n.title}),s.jsx(S3,{children:n.date})]}),s.jsx(j3,{children:n.subtitle})]}),n.unread?s.jsx(C3,{"aria-label":"Sin leer"}):null]},n.id)})})]})})})})}const E3=zn`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(320%); }
`,T3=u.div`
  width: 100%;
  min-width: 0;
`,M3=u.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 100%;
  min-height: 3.25rem;
  padding: 0.4rem 0.4rem 0.4rem 0.45rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
  transition: background-color 200ms ease;

  /* Barrido sutil, del mismo lenguaje del interruptor NOCHE. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 28%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-110%);
    pointer-events: none;
  }

  &:hover::after {
    animation: ${E3} 1.5s linear;
  }

  &:focus-within {
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  ${({theme:e})=>e.mode==="dark"?Ce`
          border-color: rgba(77, 229, 255, 0.24);

          &[data-filled='true'] {
            border-color: rgba(77, 229, 255, 0.55);
            box-shadow: 0 0 10px rgba(77, 229, 255, 0.08);
          }
        `:Ce`
          &[data-filled='true'] {
            border-color: ${e.color.primary};
          }
        `};

  @media (prefers-reduced-motion: reduce) {
    &::after {
      display: none;
    }
  }
`,A3=u.label`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex: 0 0 auto;
  min-height: 2.5rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }

  ${({theme:e})=>e.mode==="dark"&&Ce`
      box-shadow: 0 0 10px rgba(77, 229, 255, 0.11);
    `};
`,I3=u.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  flex: 1 1 auto;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  z-index: 1;

  &[data-filled='true'] {
    color: ${({theme:e})=>e.color.text};
    font-weight: ${({theme:e})=>e.typography.weight.semibold};
  }
`,R3=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textSoft};

  &[data-filled='true'] {
    color: ${({theme:e})=>e.color.success};

    ${Nt};
  }
`,O3=u.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,N3=u.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 1.9rem;
  height: 1.9rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: transparent;
  color: ${({theme:e})=>e.color.textSoft};
  cursor: pointer;
  z-index: 1;
  transition: background-color 180ms ease, color 180ms ease;

  &:hover {
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }
`;function Ns({id:e,accept:t,required:n,label:o="Elegir archivo",onChange:a}){const c=k.useId(),d=e??c,m=k.useRef(null),[h,y]=k.useState(null),x=w=>{var T;const C=((T=w.target.files)==null?void 0:T[0])??null;y(C),a==null||a(C)},v=()=>{m.current&&(m.current.value=""),y(null),a==null||a(null)};return s.jsxs(T3,{children:[s.jsxs(M3,{"data-filled":!!h,children:[s.jsxs(A3,{htmlFor:d,children:[s.jsx(Bo,{size:16,"aria-hidden":"true"}),o]}),s.jsxs(I3,{"data-filled":!!h,children:[s.jsx(R3,{"data-filled":!!h,"aria-hidden":"true",children:h?s.jsx(ac,{size:13}):s.jsx(tk,{size:13})}),s.jsx(O3,{title:h==null?void 0:h.name,children:h?`${h.name} · ${Ho(h.size)}`:"Sin archivo"})]}),h?s.jsx(N3,{type:"button",onClick:v,"aria-label":"Quitar el archivo",children:s.jsx(Xi,{size:14,"aria-hidden":"true"})}):null]}),s.jsx("input",{ref:m,id:d,type:"file",accept:t,required:n,onChange:x,hidden:!0})]})}const F3=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const uc=Ce`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  }
`;const _v=u.div`
  ${uc}
  padding: ${({theme:e})=>e.layout.cardPadding};
`,$v=u.div`
  ${uc}
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,Bi=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Ie=u.label`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pe=u.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Au=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,Qe=u.input`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:e})=>e.color.borderStrong};
    background: ${({theme:e})=>e.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,Iu=u.select`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:e})=>e.color.borderStrong};
    background: ${({theme:e})=>e.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,B3=u.textarea`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 8rem;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  resize: vertical;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({theme:e})=>e.color.borderStrong};
    background: ${({theme:e})=>e.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`,Xt=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;u.button`
  ${uc}
  min-height: 100%;
  padding: ${({theme:e})=>e.spacing[3]};
  text-align: left;
  cursor: pointer;
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({theme:e})=>e.shadow.md};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
  }
`;u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`;const Fs=u.label`
  ${uc}
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
`,Bs=u.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Ds=u.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,kv=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,D3=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Sv=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,jv=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Br=u.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Dr=u.span`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`;u.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`;const Cv=u.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,H3=["Nombre comercial","Instagram/Facebook","Horario de atención","Zona de delivery","Métodos de pago","Descripción del negocio","WhatsApp de ventas","Fotos adicionales de catálogo"],Z3=[{id:"step-1",title:"Datos legales",text:"Validamos CUIT/CUIL, razón social y dirección."},{id:"step-2",title:"Branding",text:"Subís logo, foto de perfil y nombre comercial."},{id:"step-3",title:"Publicación",text:"Pagás el alta y activás tu cuenta para aparecer."}];function U3(){const e=t=>{t.preventDefault()};return s.jsxs(Je,{showSearch:!1,footerText:"Alta de comercio con campos obligatorios y sugerencias para crecer con mejores perfiles.",children:[s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(hv,{children:[s.jsx(Un,{children:"Alta de comercio"}),s.jsx(Xp,{children:"Formularios preparados para publicar y cobrar."}),s.jsx(J1,{children:"Pedimos lo mínimo obligatorio para dejar al comercio listo y sumamos campos opcionales para mejorar presencia, soporte y conversión."})]})})}),s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(F3,{children:[s.jsx(_v,{children:s.jsx("form",{onSubmit:e,children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Datos obligatorios"}),s.jsxs(Bi,{children:[s.jsxs(Ie,{htmlFor:"business-tax",children:[s.jsxs(Pe,{children:[s.jsx(Cu,{size:16,"aria-hidden":"true"}),"CUIT / CUIL"]}),s.jsx(Qe,{id:"business-tax",type:"text",placeholder:"20-12345678-9",required:!0}),s.jsx(Au,{children:"Validación fiscal para publicar como comercio."})]}),s.jsxs(Ie,{htmlFor:"business-name",children:[s.jsxs(Pe,{children:[s.jsx(V$,{size:16,"aria-hidden":"true"}),"Razón social"]}),s.jsx(Qe,{id:"business-name",type:"text",placeholder:"La Huerta S.A.",required:!0})]}),s.jsxs(Ie,{htmlFor:"business-address",children:[s.jsxs(Pe,{children:[s.jsx(Mr,{size:16,"aria-hidden":"true"}),"Dirección"]}),s.jsx(Qe,{id:"business-address",type:"text",placeholder:"Av. Principal 123",required:!0})]}),s.jsxs(Ie,{htmlFor:"business-phone",children:[s.jsxs(Pe,{children:[s.jsx(Gp,{size:16,"aria-hidden":"true"}),"Teléfono"]}),s.jsx(Qe,{id:"business-phone",type:"tel",placeholder:"+54 3573 400-201",required:!0})]}),s.jsxs(Ie,{htmlFor:"business-email",children:[s.jsxs(Pe,{children:[s.jsx(kn,{size:16,"aria-hidden":"true"}),"Email"]}),s.jsx(Qe,{id:"business-email",type:"email",placeholder:"ventas@lahuerta.com",required:!0})]}),s.jsxs(Ie,{htmlFor:"business-category",children:[s.jsxs(Pe,{children:[s.jsx(sc,{size:16,"aria-hidden":"true"}),"Rubro principal"]}),s.jsxs(Iu,{id:"business-category",defaultValue:"verduleria",children:[s.jsx("option",{value:"verduleria",children:"Verdulería"}),s.jsx("option",{value:"almacen",children:"Almacén"}),s.jsx("option",{value:"bebidas",children:"Bebidas"}),s.jsx("option",{value:"carniceria",children:"Carnicería"}),s.jsx("option",{value:"panaderia",children:"Panadería"}),s.jsx("option",{value:"farmacia",children:"Farmacia"})]})]}),s.jsxs(Ie,{htmlFor:"business-password",children:[s.jsxs(Pe,{children:[s.jsx(ei,{size:16,"aria-hidden":"true"}),"Contraseña"]}),s.jsx(Qe,{id:"business-password",type:"password",placeholder:"••••••••",required:!0})]}),s.jsxs(Ie,{htmlFor:"business-password-repeat",children:[s.jsxs(Pe,{children:[s.jsx(ei,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),s.jsx(Qe,{id:"business-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Tr,{children:[s.jsx(gt,{children:"Foto de perfil / logo"}),s.jsxs(Fs,{htmlFor:"business-logo",children:[s.jsxs(Bs,{children:[s.jsx(Bo,{size:16,"aria-hidden":"true"})," Subí tu logo o foto de perfil"]}),s.jsx(Ds,{children:"PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio."}),s.jsx(Ns,{id:"business-logo",accept:"image/*"})]})]})})}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Opcionales recomendados"}),s.jsx(gr,{children:"Estos campos mejoran el perfil, el SEO interno y el soporte con clientes."}),s.jsxs(Bi,{children:[s.jsxs(Ie,{htmlFor:"business-display-name",children:[s.jsx(Pe,{children:"Nombre comercial"}),s.jsx(Qe,{id:"business-display-name",type:"text",placeholder:"La Huerta"})]}),s.jsxs(Ie,{htmlFor:"business-whatsapp",children:[s.jsx(Pe,{children:"WhatsApp de ventas"}),s.jsx(Qe,{id:"business-whatsapp",type:"tel",placeholder:"+54 3573 400-201"})]}),s.jsxs(Ie,{htmlFor:"business-hours",children:[s.jsx(Pe,{children:"Horario de atención"}),s.jsx(Qe,{id:"business-hours",type:"text",placeholder:"Lun a sáb 08:00 - 21:30"})]}),s.jsxs(Ie,{htmlFor:"business-map",children:[s.jsx(Pe,{children:"Mapa / referencia"}),s.jsx(Qe,{id:"business-map",type:"text",placeholder:"Ubicación exacta para Google Maps"})]})]}),s.jsxs(Ie,{htmlFor:"business-description",children:[s.jsx(Pe,{children:"Descripción del negocio"}),s.jsx(B3,{id:"business-description",placeholder:"Contá qué vendés, qué te diferencia y cómo entregás."})]})]})})}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Operación y publicación"}),s.jsxs(oh,{children:[s.jsx(Mi,{children:"Delivery"}),s.jsx(Mi,{children:"Retiro"}),s.jsx(Mi,{children:"Página pública"}),s.jsx(Mi,{children:"Sponsor interno"})]}),s.jsxs(Bi,{children:[s.jsxs(Ie,{htmlFor:"business-method",children:[s.jsx(Pe,{children:"Método de publicación"}),s.jsxs(Iu,{id:"business-method",defaultValue:"premium",children:[s.jsx("option",{value:"premium",children:"Cuenta paga / Premium"}),s.jsx("option",{value:"trial",children:"Prueba inicial"}),s.jsx("option",{value:"manual",children:"Alta manual"})]})]}),s.jsxs(Ie,{htmlFor:"business-zone",children:[s.jsx(Pe,{children:"Zona de cobertura"}),s.jsx(Qe,{id:"business-zone",type:"text",placeholder:"Centro, Barrio Norte, Ruta 19..."})]})]})]})})}),s.jsxs(kv,{children:[s.jsx(ev,{type:"submit",children:"Enviar y pasar a pago"}),s.jsx(xa,{to:"/comercios",children:"Volver al marketplace"})]})]})})}),s.jsxs($v,{children:[s.jsxs(Tr,{children:[s.jsx(gt,{children:"Qué gana el comercio"}),s.jsxs(Sv,{children:[s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Presencia en la home con cards, sponsor y carrusel de promociones."})]}),s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Perfil propio con logo, horarios, stock, delivery y retiro."})]}),s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Notificaciones por producto, comercio y oferta para fidelizar usuarios."})]}),s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Base lista para crecer hacia Android, iOS y paneles internos."})]})]})]}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(jv,{children:[s.jsx(gt,{children:"Proceso de alta"}),Z3.map((t,n)=>s.jsxs(Cv,{children:[n+1,". ",t.title]},t.id))]})})}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Tr,{children:[s.jsx(gt,{children:"Campos extras sugeridos"}),s.jsx(gr,{children:"Si el comercio quiere mejor performance, sumamos más campos más adelante."}),s.jsx(D3,{children:H3.map(t=>s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:t})]},t))})]})})})]})]})})})]})}const V3=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Eg=[{id:"step-1",title:"Perfil y documentos",text:"Completás tus datos, subís la foto de perfil y agregás licencia y seguro."},{id:"step-2",title:"Validación",text:"Revisamos identidad, medio de trabajo y datos para cobrar sin fricción."},{id:"step-3",title:"Activación",text:"Te aprobamos y quedás listo para empezar a repartir."}],W3=["Foto de perfil","Nombre","Apellido","Contraseña","Repetir contraseña","Carnet de conducir","Seguro del vehículo","Alias / CBU"],G3={delivery:[{value:"moto",label:"Moto"},{value:"bicicleta",label:"Bicicleta"},{value:"auto",label:"Auto"}],fletero:[{value:"camioneta",label:"Camioneta"},{value:"utilitario",label:"Utilitario"},{value:"camion-chico",label:"Camión chico"},{value:"camion",label:"Camión"}]},q3={delivery:{kicker:"Alta de delivery",title:"Sumate como repartidor y empezá a trabajar.",text:"Pedimos los datos mínimos para validar tu perfil, revisar tus documentos y dejar listo el cobro por alias o CBU.",footer:"Alta de delivery con validación de identidad, documentación del vehículo y medios de cobro."},fletero:{kicker:"Alta de fletero",title:"Sumate como fletero y llevá cargas grandes.",text:"Contanos con qué vehículo trabajás y qué volumen podés trasladar. Validamos tus documentos y dejamos listo el cobro.",footer:"Alta de fletero con validación de identidad, documentación del vehículo y medios de cobro."}};function Tg({role:e="delivery"}){const t=q3[e],n=G3[e],o=a=>{a.preventDefault()};return s.jsxs(Je,{showSearch:!1,footerText:t.footer,children:[s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(hv,{children:[s.jsx(Un,{children:t.kicker}),s.jsx(Xp,{children:t.title}),s.jsx(J1,{children:t.text})]})})}),s.jsx($t,{children:s.jsx(ce,{children:s.jsxs(V3,{children:[s.jsx(_v,{children:s.jsx("form",{onSubmit:o,children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Datos obligatorios"}),s.jsx(gr,{children:"Con esto damos de alta tu perfil de delivery con una validación clara."}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsxs(Fs,{htmlFor:"courier-profile-photo",children:[s.jsxs(Bs,{children:[s.jsx(Bo,{size:16,"aria-hidden":"true"})," Foto de perfil"]}),s.jsx(Ds,{children:"Subí una imagen clara para que comercios y clientes te identifiquen."}),s.jsx(Ns,{id:"courier-profile-photo",accept:"image/*",required:!0})]}),s.jsxs(Bi,{children:[s.jsxs(Ie,{htmlFor:"courier-first-name",children:[s.jsxs(Pe,{children:[s.jsx(kn,{size:16,"aria-hidden":"true"}),"Nombre"]}),s.jsx(Qe,{id:"courier-first-name",type:"text",placeholder:"Juan",required:!0})]}),s.jsxs(Ie,{htmlFor:"courier-last-name",children:[s.jsxs(Pe,{children:[s.jsx(kn,{size:16,"aria-hidden":"true"}),"Apellido"]}),s.jsx(Qe,{id:"courier-last-name",type:"text",placeholder:"Pérez",required:!0})]}),s.jsxs(Ie,{htmlFor:"courier-password",children:[s.jsxs(Pe,{children:[s.jsx(ei,{size:16,"aria-hidden":"true"}),"Contraseña"]}),s.jsx(Qe,{id:"courier-password",type:"password",placeholder:"••••••••",required:!0}),s.jsx(Au,{children:"Usá una contraseña segura para proteger tu acceso."})]}),s.jsxs(Ie,{htmlFor:"courier-password-repeat",children:[s.jsxs(Pe,{children:[s.jsx(ei,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),s.jsx(Qe,{id:"courier-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]})]})})}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Documentación y cobro"}),s.jsx(gr,{children:"Necesitamos documentos al día para habilitarte y pagarte sin demoras."}),s.jsxs(Bi,{children:[s.jsxs(Xt,{children:[s.jsxs(Pe,{children:[s.jsx(Cu,{size:16,"aria-hidden":"true"}),"Carnet de conducir"]}),s.jsxs(Fs,{htmlFor:"courier-license",children:[s.jsxs(Bs,{children:[s.jsx(Bo,{size:16,"aria-hidden":"true"})," Subí tu licencia"]}),s.jsx(Ds,{children:"Foto o PDF legible de frente y dorso si aplica."}),s.jsx(Ns,{id:"courier-license",accept:"image/*,application/pdf",required:!0})]})]}),s.jsxs(Xt,{children:[s.jsxs(Pe,{children:[s.jsx(Cu,{size:16,"aria-hidden":"true"}),"Seguro del vehículo"]}),s.jsxs(Fs,{htmlFor:"courier-insurance",children:[s.jsxs(Bs,{children:[s.jsx(Bo,{size:16,"aria-hidden":"true"})," Subí tu seguro vigente"]}),s.jsx(Ds,{children:"Aceptamos foto o PDF del seguro del vehículo en uso."}),s.jsx(Ns,{id:"courier-insurance",accept:"image/*,application/pdf",required:!0})]})]}),s.jsxs(Ie,{htmlFor:"courier-alias-cbu",children:[s.jsxs(Pe,{children:[s.jsx(ck,{size:16,"aria-hidden":"true"}),"Alias / CBU"]}),s.jsx(Qe,{id:"courier-alias-cbu",type:"text",placeholder:"alias.o.cbu",required:!0}),s.jsx(Au,{children:"Usá el dato donde querés recibir los pagos."})]}),s.jsxs(Ie,{htmlFor:"courier-phone",children:[s.jsxs(Pe,{children:[s.jsx(Gp,{size:16,"aria-hidden":"true"}),"Teléfono"]}),s.jsx(Qe,{id:"courier-phone",type:"tel",placeholder:"+54 3573 400-201"})]})]})]})})}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Opcionales útiles"}),s.jsx(gr,{children:"Esto ayuda a validar más rápido tu perfil y a asignarte pedidos cerca."}),s.jsxs(Bi,{children:[s.jsxs(Ie,{htmlFor:"courier-email",children:[s.jsxs(Pe,{children:[s.jsx(X$,{size:16,"aria-hidden":"true"}),"Email"]}),s.jsx(Qe,{id:"courier-email",type:"email",placeholder:"delivery@correo.com"})]}),s.jsxs(Ie,{htmlFor:"courier-zone",children:[s.jsxs(Pe,{children:[s.jsx(Mr,{size:16,"aria-hidden":"true"}),"Zona de trabajo"]}),s.jsx(Qe,{id:"courier-zone",type:"text",placeholder:"La Francia centro, Ruta 19..."})]}),s.jsxs(Ie,{htmlFor:"courier-vehicle",children:[s.jsxs(Pe,{children:[s.jsx(Er,{size:16,"aria-hidden":"true"}),"Vehículo"]}),s.jsx(Iu,{id:"courier-vehicle",defaultValue:n[0].value,children:n.map(a=>s.jsx("option",{value:a.value,children:a.label},a.value))})]}),s.jsxs(Ie,{htmlFor:"courier-plate",children:[s.jsxs(Pe,{children:[s.jsx(Er,{size:16,"aria-hidden":"true"}),"Patente"]}),s.jsx(Qe,{id:"courier-plate",type:"text",placeholder:"AA123BB"})]})]})]})})}),s.jsxs(kv,{children:[s.jsx(ev,{type:"submit",children:"Postularme como delivery"}),s.jsx(xa,{to:"/",children:"Volver al inicio"})]})]})})}),s.jsxs($v,{children:[s.jsxs(Xt,{children:[s.jsx(gt,{children:"Qué necesitamos para activarte"}),s.jsxs(Sv,{children:[s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Foto de perfil legible y datos personales consistentes."})]}),s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Carnet de conducir y seguro del vehículo vigentes."})]}),s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Alias o CBU propio para liquidar los pagos."})]}),s.jsxs(Br,{children:[s.jsx(Dr,{}),s.jsx("span",{children:"Contraseña segura para proteger el acceso a tu cuenta."})]})]})]}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(jv,{children:[s.jsx(gt,{children:"Proceso de alta"}),Eg.map((a,c)=>s.jsxs(Cv,{children:[c+1,". ",a.title]},a.id))]})})}),s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsx(gt,{children:"Campos obligatorios"}),s.jsx(oh,{children:W3.map(a=>s.jsx(Mi,{children:a},a))}),s.jsx(uv,{children:Eg.map(a=>s.jsx(nt,{children:s.jsx(Bt,{children:s.jsxs(Xt,{children:[s.jsx(Un,{children:a.title}),s.jsx(gr,{children:a.text})]})})},a.id))})]})})})]})]})})})]})}const Y3=u.div`
  display: grid;
  gap: 0.1rem;
  align-content: start;
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,K3=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};

  ${Nt};
`,Q3=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,X3=u.strong`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
  line-height: 1.15;
`,J3=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;function ch({label:e,value:t,help:n,icon:o}){return s.jsxs(Y3,{children:[o?s.jsx(K3,{children:s.jsx(o,{size:18,"aria-hidden":"true"})}):null,s.jsx(Q3,{children:e}),s.jsx(X3,{children:t}),n?s.jsx(J3,{children:n}):null]})}const Mg=u.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.primary};
`,eL=[{id:"overview",title:"Inicio / resumen",description:"Ventas del día, alertas y accesos rápidos.",icon:or},{id:"orders",title:"Pedidos",description:"Estados, tiempos y cambios de fase.",icon:M1},{id:"products",title:"Productos",description:"Precios, stock, fotos y visibilidad.",icon:E1},{id:"categories",title:"Categorías",description:"Organización propia por comercio.",icon:sc},{id:"clients",title:"Clientes",description:"Frecuentes, direcciones y hábitos.",icon:V1},{id:"promotions",title:"Promociones",description:"Combos, descuentos y destacados.",icon:z1},{id:"reports",title:"Reportes",description:"Ventas, ticket promedio y top productos.",icon:U$},{id:"settings",title:"Configuración",description:"Horarios, reparto y visibilidad.",icon:B1}];function tL(){return s.jsxs(Je,{showSearch:!1,footerText:"Panel del comercio: pedidos, catálogo y reportes.",children:[s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Panel del comercio",chip:"Hoy",subtitle:"Resumen de la operación del día."}),s.jsx(ah,{children:vk.map(e=>s.jsx(ch,{label:e.label,value:e.value,help:e.trend},e.id))})]})}),s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Pedidos recientes",seeAllTo:"/panel/comercio",seeAllLabel:"Ver todos"}),s.jsx(Pr,{children:xk.map(e=>s.jsx(mt,{icon:M1,title:e.customer,subtitle:e.status,trailing:s.jsx(Mg,{children:dt(e.total)})},e.id))})]})}),s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Stock y productos",subtitle:"Precios y disponibilidad.",seeAllTo:"/panel/comercio/producto",seeAllLabel:"Nuevo producto"}),s.jsx(Pr,{children:bk.map(e=>s.jsx(mt,{icon:E1,title:e.name,subtitle:`${e.stock} en stock · ${e.status}`,trailing:s.jsx(Mg,{children:dt(e.price)})},e.id))})]})}),s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Gestión",subtitle:"Todo el panel ordenado por tarea."}),s.jsx(Pr,{children:eL.map(e=>s.jsx(mt,{icon:e.icon,title:e.title,subtitle:e.description,to:e.id==="products"?"/panel/comercio/producto":"/panel/comercio"},e.id))})]})})]})}const rL=[{id:"almacen",name:"Almacén",description:"Básicos, bebidas y limpieza.",suggestedCategories:[{id:"bebidas",name:"Bebidas"},{id:"almacen",name:"Almacén"},{id:"limpieza",name:"Limpieza"},{id:"lacteos",name:"Lácteos"},{id:"snacks",name:"Snacks"},{id:"congelados",name:"Congelados"}]},{id:"kiosco",name:"Kiosco",description:"Golosinas, bebidas y cigarrillos.",suggestedCategories:[{id:"golosinas",name:"Golosinas"},{id:"bebidas",name:"Bebidas"},{id:"snacks",name:"Snacks"},{id:"cigarrillos",name:"Cigarrillos"},{id:"helados",name:"Helados"}]},{id:"panaderia",name:"Panadería",description:"Pan, facturas y repostería.",suggestedCategories:[{id:"pan",name:"Pan"},{id:"facturas",name:"Facturas"},{id:"tortas",name:"Tortas"},{id:"sandwicheria",name:"Sándwiches"},{id:"reposteria",name:"Repostería"}]},{id:"carniceria",name:"Carnicería",description:"Cortes, achuras y elaborados.",suggestedCategories:[{id:"vacuno",name:"Vacuno"},{id:"cerdo",name:"Cerdo"},{id:"pollo",name:"Pollo"},{id:"achuras",name:"Achuras"},{id:"embutidos",name:"Embutidos"},{id:"carbon",name:"Carbón y leña"}]},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y huevos.",suggestedCategories:[{id:"frutas",name:"Frutas"},{id:"verduras",name:"Verduras"},{id:"huevos",name:"Huevos"},{id:"aromaticas",name:"Aromáticas"},{id:"combos",name:"Combos"}]},{id:"rotiseria",name:"Rotisería",description:"Comidas listas y viandas.",suggestedCategories:[{id:"milanesas",name:"Milanesas"},{id:"empanadas",name:"Empanadas"},{id:"pastas",name:"Pastas"},{id:"guarniciones",name:"Guarniciones"},{id:"postres",name:"Postres"}]},{id:"comida",name:"Comida / Restaurante",description:"Platos, pizzas y hamburguesas.",suggestedCategories:[{id:"hamburguesas",name:"Hamburguesas"},{id:"pizzas",name:"Pizzas"},{id:"minutas",name:"Minutas"},{id:"bebidas",name:"Bebidas"},{id:"postres",name:"Postres"}]},{id:"farmacia",name:"Farmacia",description:"Salud, higiene y perfumería.",suggestedCategories:[{id:"medicamentos",name:"Medicamentos"},{id:"higiene",name:"Higiene personal"},{id:"dermocosmetica",name:"Dermocosmética"},{id:"bebes",name:"Bebés"},{id:"accesorios-salud",name:"Accesorios"}]},{id:"perfumeria",name:"Perfumería",description:"Cuidado personal y cosmética.",suggestedCategories:[{id:"perfumes",name:"Perfumes"},{id:"maquillaje",name:"Maquillaje"},{id:"cabello",name:"Cabello"},{id:"corporal",name:"Corporal"}]},{id:"regaleria",name:"Regalería",description:"Regalos, deco y librería.",suggestedCategories:[{id:"regalos",name:"Regalos"},{id:"deco",name:"Decoración"},{id:"libreria",name:"Librería"},{id:"tarjeteria",name:"Tarjetería"}]},{id:"ferreteria",name:"Ferretería",description:"Herramientas, obra y electricidad.",suggestedCategories:[{id:"herramientas",name:"Herramientas"},{id:"electricidad",name:"Electricidad"},{id:"plomeria",name:"Plomería"},{id:"pinturas",name:"Pinturas"},{id:"bulones",name:"Bulonería"},{id:"jardin",name:"Jardín"}]},{id:"taller",name:"Taller mecánico",description:"Repuestos, lubricantes y servicios.",suggestedCategories:[{id:"lubricantes",name:"Lubricantes"},{id:"aceites",name:"Aceites de motor"},{id:"filtros",name:"Filtros"},{id:"baterias",name:"Baterías"},{id:"neumaticos",name:"Neumáticos"},{id:"frenos",name:"Frenos"},{id:"servicios-taller",name:"Servicios"}]},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios.",suggestedCategories:[{id:"mujer",name:"Mujer"},{id:"hombre",name:"Hombre"},{id:"ninos",name:"Niños"},{id:"calzado",name:"Calzado"},{id:"accesorios",name:"Accesorios"}]},{id:"servicios",name:"Servicios",description:"Oficios y asistencia local.",suggestedCategories:[{id:"domicilio",name:"A domicilio"},{id:"reparaciones",name:"Reparaciones"},{id:"instalaciones",name:"Instalaciones"},{id:"mantenimiento",name:"Mantenimiento"}]}],nL=e=>rL.find(t=>t.id===e),iL=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,oL=u.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,bs=u.div`
  display: grid;
  gap: 0.3rem;
  min-width: 0;

  /* La descripción ocupa el ancho completo en dos columnas. */
  &:last-child {
    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      grid-column: 1 / -1;
    }
  }
`,xi=u.label`
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ws=u.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.4;
`,_s=u.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Pv=`
  width: 100%;
  min-height: 2.9rem;
  padding: 0 0.85rem;
  border-radius: 0.75rem;
  font-size: 1rem;
`,Ag=u.input`
  ${Pv};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:e})=>e.color.danger};
  }
`,aL=u.select`
  ${Pv};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({theme:e})=>e.color.danger};
  }
`,sL=u.textarea`
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: 1rem;
  resize: vertical;

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.color.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.color.primarySoft};
  }
`,Ig=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[1]};
`,Rg=u.span`
  padding: 0.1rem 0.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,lL=u.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,Og=u.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;

  &[data-video='true'] {
    aspect-ratio: 16 / 9;
  }
`,cL=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,dL=u.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
`,Ng=u.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: rgba(5, 8, 22, 0.68);
  color: #fff;
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({theme:e})=>e.color.danger};
  }
`,Fg=u.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  aspect-ratio: 1 / 1;
  border: 1px dashed ${({theme:e})=>e.color.borderStrong};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: transparent;
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({theme:e})=>e.color.primary};
    background: ${({theme:e})=>e.color.primarySoft};
  }

  &[data-busy='true'] {
    opacity: 0.7;
    cursor: progress;
  }

  &[data-wide='true'] {
    width: 100%;
    aspect-ratio: auto;
    min-height: 3.25rem;
    flex-direction: row;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,uL=u.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({theme:e})=>e.spacing[1]};
  border: 0;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.brandHover};
  }
`,pL=u.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  background: rgba(15, 157, 88, 0.12);
  color: ${({theme:e})=>e.color.success};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,hL="almacen";function fL(){const e=k.useMemo(()=>nL(hL),[]),t=(e==null?void 0:e.suggestedCategories)??[],[n,o]=k.useState(""),[a,c]=k.useState(""),[d,m]=k.useState(""),[h,y]=k.useState(""),[x,v]=k.useState([]),[w,C]=k.useState(null),[T,j]=k.useState(null),[z,_]=k.useState(!1),[b,$]=k.useState(!1),[A,E]=k.useState(!1);k.useEffect(()=>()=>{x.forEach(H=>URL.revokeObjectURL(H.previewUrl)),w&&URL.revokeObjectURL(w.url)},[x,w]);const N=async H=>{if(!(H!=null&&H.length))return;j(null);const ne=Tt.maxImages-x.length;if(ne<=0){j(`Podés subir hasta ${Tt.maxImages} fotos.`);return}E(!0);const re=Array.from(H).slice(0,ne),ye=[];for(const O of re){const J=Cz(O);if(J){j(J);continue}try{const U=await wv(O);ye.push({...U,id:`${O.name}-${Date.now()}-${ye.length}`})}catch{j("No pudimos procesar una de las fotos.")}}v(O=>[...O,...ye]),E(!1)},Z=async H=>{const ne=H==null?void 0:H[0];if(!ne)return;j(null);const re=await jz(ne);if(re){j(re);return}C({url:URL.createObjectURL(ne),bytes:ne.size,name:ne.name})},W=H=>{v(ne=>{const re=ne.find(ye=>ye.id===H);return re&&URL.revokeObjectURL(re.previewUrl),ne.filter(ye=>ye.id!==H)})},ae=()=>{w&&URL.revokeObjectURL(w.url),C(null)},Y={name:n.trim().length<2?"Poné el nombre del producto.":null,price:!a||Number(a)<=0?"Poné un precio válido.":null,category:d?null:"Elegí una categoría."},oe=!Y.name&&!Y.price&&!Y.category,pe=H=>{H.preventDefault(),_(!0),oe&&($(!0),window.setTimeout(()=>$(!1),2600),x.forEach(ne=>URL.revokeObjectURL(ne.previewUrl)),w&&URL.revokeObjectURL(w.url),o(""),c(""),m(""),y(""),v([]),C(null),_(!1))},ke=x.reduce((H,ne)=>H+ne.bytes,0)+((w==null?void 0:w.bytes)??0);return s.jsxs(Je,{showSearch:!1,footerText:"Cargá un producto en tu catálogo.",children:[s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Nuevo producto",chip:e==null?void 0:e.name,subtitle:"Todo producto entra en una categoría de tu comercio."}),s.jsxs(iL,{as:"form",onSubmit:pe,noValidate:!0,children:[s.jsxs(oL,{children:[s.jsxs(bs,{children:[s.jsx(xi,{htmlFor:"product-name",children:"Nombre"}),s.jsx(Ag,{id:"product-name",value:n,onChange:H=>o(H.target.value),placeholder:"Ej: Coca Cola 2,25 L","data-invalid":z&&!!Y.name}),z&&Y.name?s.jsx(_s,{children:Y.name}):null]}),s.jsxs(bs,{children:[s.jsx(xi,{htmlFor:"product-price",children:"Precio"}),s.jsx(Ag,{id:"product-price",type:"number",inputMode:"decimal",min:"0",value:a,onChange:H=>c(H.target.value),placeholder:"0","data-invalid":z&&!!Y.price}),z&&Y.price?s.jsx(_s,{children:Y.price}):null]}),s.jsxs(bs,{children:[s.jsx(xi,{htmlFor:"product-category",children:"Categoría"}),s.jsxs(aL,{id:"product-category",value:d,onChange:H=>m(H.target.value),"data-invalid":z&&!!Y.category,children:[s.jsx("option",{value:"",children:"Elegí una categoría"}),t.map(H=>s.jsx("option",{value:H.id,children:H.name},H.id))]}),z&&Y.category?s.jsx(_s,{children:Y.category}):s.jsxs(ws,{children:["Sugeridas para ",e==null?void 0:e.name,"."]})]}),s.jsxs(bs,{children:[s.jsx(xi,{htmlFor:"product-description",children:"Descripción"}),s.jsx(sL,{id:"product-description",value:h,onChange:H=>y(H.target.value),placeholder:"Opcional: detalle breve del producto.",rows:3})]})]}),s.jsxs(Ig,{children:[s.jsx(xi,{as:"span",children:"Fotos"}),s.jsxs(Rg,{children:[x.length,"/",Tt.maxImages]})]}),s.jsxs(lL,{children:[x.map(H=>s.jsxs(Og,{children:[s.jsx(cL,{src:H.previewUrl,alt:""}),s.jsx(Ng,{type:"button",onClick:()=>W(H.id),"aria-label":"Quitar foto",children:s.jsx(Xi,{size:14,"aria-hidden":"true"})})]},H.id)),x.length<Tt.maxImages?s.jsxs(Fg,{as:"label","data-busy":A,children:[s.jsx(K$,{size:20,"aria-hidden":"true"}),s.jsx("span",{children:A?"Optimizando…":"Agregar"}),s.jsx("input",{type:"file",accept:wz,multiple:!0,hidden:!0,onChange:H=>{N(H.target.files),H.target.value=""}})]}):null]}),s.jsxs(ws,{children:["Se redimensionan a ",Tt.maxImageDimension,"px y se comprimen solas: cada foto queda en menos de ",Ho(Tt.maxImageBytes),"."]}),s.jsxs(Ig,{children:[s.jsx(xi,{as:"span",children:"Video"}),s.jsxs(Rg,{children:[w?1:0,"/",Tt.maxVideos]})]}),w?s.jsxs(Og,{"data-video":"true",children:[s.jsx(dL,{src:w.url,controls:!0,preload:"metadata"}),s.jsx(Ng,{type:"button",onClick:ae,"aria-label":"Quitar video",children:s.jsx(Xi,{size:14,"aria-hidden":"true"})})]}):s.jsxs(Fg,{as:"label","data-wide":"true",children:[s.jsx(lk,{size:20,"aria-hidden":"true"}),s.jsx("span",{children:"Agregar video"}),s.jsx("input",{type:"file",accept:_z,hidden:!0,onChange:H=>{Z(H.target.files),H.target.value=""}})]}),s.jsxs(ws,{children:["Hasta ",Tt.maxVideoSeconds," segundos y"," ",Ho(Tt.maxVideoBytes),"."]}),T?s.jsx(_s,{children:T}):null,ke>0?s.jsxs(ws,{children:["Total a subir: ",Ho(ke),"."]}):null,s.jsx(uL,{type:"submit",children:"Guardar producto"}),b?s.jsxs(pL,{role:"status",children:[s.jsx(ac,{size:16,"aria-hidden":"true"}),"Producto guardado en tu catálogo."]}):null]})]})}),s.jsx($t,{"aria-hidden":"true"})]})}const mL=u.span`
  flex: 0 0 auto;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.color.success};
`;function gL(){return s.jsxs(Je,{showSearch:!1,footerText:"Panel del repartidor: entregas y ganancias.",children:[s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Panel del repartidor",chip:"Hoy",subtitle:"Tu resumen de entregas."}),s.jsx(ah,{children:wk.map(e=>s.jsx(ch,{label:e.label,value:e.value,help:e.help},e.id))})]})}),s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Entregas",subtitle:"Pedidos asignados y disponibles."}),s.jsx(Pr,{children:_k.map(e=>s.jsx(mt,{icon:F1,title:`${e.store} → ${e.customer}`,subtitle:`${cc(e.distanceKm)} · ${e.status}`,trailing:s.jsx(mL,{children:dt(e.payout)})},e.id))})]})})]})}function yL(){return s.jsxs(Je,{showSearch:!1,footerText:"Panel general de LaFranciaGO.",children:[s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Panel general",chip:"Plataforma",subtitle:"Estado general de LaFranciaGO."}),s.jsx(ah,{children:$k.map(e=>s.jsx(ch,{label:e.label,value:e.value,help:e.help},e.id))})]})}),s.jsx(ze,{children:s.jsxs(ce,{children:[s.jsx(Oe,{title:"Alertas",subtitle:"Lo que necesita atención."}),s.jsx(Pr,{children:kk.map(e=>s.jsx(mt,{icon:e.icon,title:e.title,subtitle:e.description},e.id))})]})})]})}function vL(){return s.jsx(j2,{children:s.jsx(O$,{children:s.jsxs(v2,{children:[s.jsx(Ke,{path:"/",element:s.jsx(rC,{})}),s.jsx(Ke,{path:"/comercios",element:s.jsx(aC,{})}),s.jsx(Ke,{path:"/comercios/:storeId",element:s.jsx(IC,{})}),s.jsx(Ke,{path:"/productos/:productId",element:s.jsx(tP,{})}),s.jsx(Ke,{path:"/pedidos",element:s.jsx(u3,{})}),s.jsx(Ke,{path:"/carrito",element:s.jsx(oz,{})}),s.jsx(Ke,{path:"/mandado",element:s.jsx(bz,{})}),s.jsx(Ke,{path:"/mandado/chat",element:s.jsx(Qz,{})}),s.jsx(Ke,{path:"/favoritos",element:s.jsx(p3,{})}),s.jsx(Ke,{path:"/notificaciones",element:s.jsx(L3,{})}),s.jsx(Ke,{path:"/registro/comercio",element:s.jsx(U3,{})}),s.jsx(Ke,{path:"/trabaja-con-nosotros",element:s.jsx(Tg,{})}),s.jsx(Ke,{path:"/registro/fletero",element:s.jsx(Tg,{role:"fletero"})}),s.jsx(Ke,{path:"/registro/delivery",element:s.jsx(zm,{to:"/trabaja-con-nosotros",replace:!0})}),s.jsx(Ke,{path:"/mi-cuenta",element:s.jsx(v3,{})}),s.jsx(Ke,{path:"/panel/comercio",element:s.jsx(tL,{})}),s.jsx(Ke,{path:"/panel/comercio/producto",element:s.jsx(fL,{})}),s.jsx(Ke,{path:"/panel/repartidor",element:s.jsx(gL,{})}),s.jsx(Ke,{path:"/panel/admin",element:s.jsx(yL,{})}),s.jsx(Ke,{path:"*",element:s.jsx(zm,{to:"/",replace:!0})})]})})})}P_({immediate:!0});const zv=document.getElementById("root");if(!zv)throw new Error("No se encontró el nodo root");jd.createRoot(zv).render(s.jsx(Sn.StrictMode,{children:s.jsx(vL,{})}));
