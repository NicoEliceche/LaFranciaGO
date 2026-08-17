function _1(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function Ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lf={exports:{}},_s={},Rf={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),O1=Symbol.for("react.portal"),D1=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),U1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),W1=Symbol.for("react.forward_ref"),G1=Symbol.for("react.suspense"),K1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),dp=Symbol.iterator;function Y1(e){return e===null||typeof e!="object"?null:(e=dp&&e[dp]||e["@@iterator"],typeof e=="function"?e:null)}var Nf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Af=Object.assign,If={};function Pi(e,t,r){this.props=e,this.context=t,this.refs=If,this.updater=r||Nf}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _f(){}_f.prototype=Pi.prototype;function Rd(e,t,r){this.props=e,this.context=t,this.refs=If,this.updater=r||Nf}var Nd=Rd.prototype=new _f;Nd.constructor=Rd;Af(Nd,Pi.prototype);Nd.isPureReactComponent=!0;var up=Array.isArray,Of=Object.prototype.hasOwnProperty,Ad={current:null},Df={key:!0,ref:!0,__self:!0,__source:!0};function Bf(e,t,r){var i,a={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Of.call(t,i)&&!Df.hasOwnProperty(i)&&(a[i]=t[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];a.children=d}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:Na,type:e,key:o,ref:s,props:a,_owner:Ad.current}}function q1(e,t){return{$$typeof:Na,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Id(e){return typeof e=="object"&&e!==null&&e.$$typeof===Na}function Z1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pp=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z1(""+e.key):t.toString(36)}function Eo(e,t,r,i,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Na:case O1:s=!0}}if(s)return s=e,a=a(s),e=i===""?"."+Al(s,0):i,up(a)?(r="",e!=null&&(r=e.replace(pp,"$&/")+"/"),Eo(a,t,r,"",function(u){return u})):a!=null&&(Id(a)&&(a=q1(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(pp,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=i===""?".":i+":",up(e))for(var c=0;c<e.length;c++){o=e[c];var d=i+Al(o,c);s+=Eo(o,t,r,d,a)}else if(d=Y1(e),typeof d=="function")for(e=d.call(e),c=0;!(o=e.next()).done;)o=o.value,d=i+Al(o,c++),s+=Eo(o,t,r,d,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ya(e,t,r){if(e==null)return e;var i=[],a=0;return Eo(e,i,"","",function(o){return t.call(r,o,a++)}),i}function X1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},Mo={transition:null},J1={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:Ad};function Hf(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ya,forEach:function(e,t,r){Ya(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ya(e,function(){t++}),t},toArray:function(e){return Ya(e,function(t){return t})||[]},only:function(e){if(!Id(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Pi;ae.Fragment=D1;ae.Profiler=H1;ae.PureComponent=Rd;ae.StrictMode=B1;ae.Suspense=G1;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;ae.act=Hf;ae.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Af({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ad.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Of.call(t,d)&&!Df.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=r;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:Na,type:e.type,key:a,ref:o,props:i,_owner:s}};ae.createContext=function(e){return e={$$typeof:V1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:U1,_context:e},e.Consumer=e};ae.createElement=Bf;ae.createFactory=function(e){var t=Bf.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:W1,render:e}};ae.isValidElement=Id;ae.lazy=function(e){return{$$typeof:Q1,_payload:{_status:-1,_result:e},_init:X1}};ae.memo=function(e,t){return{$$typeof:K1,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};ae.unstable_act=Hf;ae.useCallback=function(e,t){return gt.current.useCallback(e,t)};ae.useContext=function(e){return gt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return gt.current.useEffect(e,t)};ae.useId=function(){return gt.current.useId()};ae.useImperativeHandle=function(e,t,r){return gt.current.useImperativeHandle(e,t,r)};ae.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return gt.current.useMemo(e,t)};ae.useReducer=function(e,t,r){return gt.current.useReducer(e,t,r)};ae.useRef=function(e){return gt.current.useRef(e)};ae.useState=function(e){return gt.current.useState(e)};ae.useSyncExternalStore=function(e,t,r){return gt.current.useSyncExternalStore(e,t,r)};ae.useTransition=function(){return gt.current.useTransition()};ae.version="18.3.1";Rf.exports=ae;var v=Rf.exports;const mn=Ff(v),ey=_1({__proto__:null,default:mn},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=v,ry=Symbol.for("react.element"),ny=Symbol.for("react.fragment"),iy=Object.prototype.hasOwnProperty,ay=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oy={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,r){var i,a={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)iy.call(t,i)&&!oy.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)a[i]===void 0&&(a[i]=t[i]);return{$$typeof:ry,type:e,key:o,ref:s,props:a,_owner:ay.current}}_s.Fragment=ny;_s.jsx=Uf;_s.jsxs=Uf;Lf.exports=_s;var n=Lf.exports,Ec={},Vf={exports:{}},Ft={},Wf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,V){var B=A.length;A.push(V);e:for(;0<B;){var oe=B-1>>>1,E=A[oe];if(0<a(E,V))A[oe]=V,A[B]=E,B=oe;else break e}}function r(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var V=A[0],B=A.pop();if(B!==V){A[0]=B;e:for(var oe=0,E=A.length,b=E>>>1;oe<b;){var M=2*(oe+1)-1,_=A[M],k=M+1,X=A[k];if(0>a(_,B))k<E&&0>a(X,_)?(A[oe]=X,A[k]=B,oe=k):(A[oe]=_,A[M]=B,oe=M);else if(k<E&&0>a(X,B))A[oe]=X,A[k]=B,oe=k;else break e}}return V}function a(A,V){var B=A.sortIndex-V.sortIndex;return B!==0?B:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var d=[],u=[],g=1,f=null,x=3,S=!1,j=!1,C=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var V=r(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=A)i(u),V.sortIndex=V.expirationTime,t(d,V);else break;V=r(u)}}function $(A){if(C=!1,y(A),!j)if(r(d)!==null)j=!0,ve(P);else{var V=r(u);V!==null&&Be($,V.startTime-A)}}function P(A,V){j=!1,C&&(C=!1,m(I),I=-1),S=!0;var B=x;try{for(y(V),f=r(d);f!==null&&(!(f.expirationTime>V)||A&&!ge());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,x=f.priorityLevel;var E=oe(f.expirationTime<=V);V=e.unstable_now(),typeof E=="function"?f.callback=E:f===r(d)&&i(d),y(V)}else i(d);f=r(d)}if(f!==null)var b=!0;else{var M=r(u);M!==null&&Be($,M.startTime-V),b=!1}return b}finally{f=null,x=B,S=!1}}var L=!1,N=null,I=-1,W=5,D=-1;function ge(){return!(e.unstable_now()-D<W)}function pe(){if(N!==null){var A=e.unstable_now();D=A;var V=!0;try{V=N(!0,A)}finally{V?Te():(L=!1,N=null)}}else L=!1}var Te;if(typeof p=="function")Te=function(){p(pe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,De=_e.port2;_e.port1.onmessage=pe,Te=function(){De.postMessage(null)}}else Te=function(){w(pe,0)};function ve(A){N=A,L||(L=!0,Te())}function Be(A,V){I=w(function(){A(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){j||S||(j=!0,ve(P))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(A){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var B=x;x=V;try{return A()}finally{x=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=x;x=A;try{return V()}finally{x=B}},e.unstable_scheduleCallback=function(A,V,B){var oe=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?oe+B:oe):B=oe,A){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=B+E,A={id:g++,callback:V,priorityLevel:A,startTime:B,expirationTime:E,sortIndex:-1},B>oe?(A.sortIndex=B,t(u,A),r(d)===null&&A===r(u)&&(C?(m(I),I=-1):C=!0,Be($,B-oe))):(A.sortIndex=E,t(d,A),j||S||(j=!0,ve(P))),A},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(A){var V=x;return function(){var B=x;x=V;try{return A.apply(this,arguments)}finally{x=B}}}})(Gf);Wf.exports=Gf;var sy=Wf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=v,Mt=sy;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,ua={};function Dn(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(ua[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hp={},fp={};function dy(e){return Mc.call(fp,e)?!0:Mc.call(hp,e)?!1:cy.test(e)?fp[e]=!0:(hp[e]=!0,!1)}function uy(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function py(e,t,r,i){if(t===null||typeof t>"u"||uy(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,r,i,a,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function Od(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_d,Od);it[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_d,Od);it[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_d,Od);it[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dd(e,t,r,i){var a=it.hasOwnProperty(t)?it[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(py(t,r,a,i)&&(r=null),i||a===null?dy(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,i=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Er=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Qf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),qf=Symbol.for("react.offscreen"),mp=Symbol.iterator;function Ni(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,Il;function Wi(e){if(Il===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var _l=!1;function Ol(e,t){if(!e||_l)return"";_l=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=i.stack.split(`
`),s=a.length-1,c=o.length-1;1<=s&&0<=c&&a[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(a[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||a[s]!==o[c]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{_l=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Wi(e):""}function hy(e){switch(e.tag){case 5:return Wi(e.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function Rc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case qn:return"Portal";case Tc:return"Profiler";case Bd:return"StrictMode";case Fc:return"Suspense";case Lc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yf:return(e.displayName||"Context")+".Consumer";case Qf:return(e._context.displayName||"Context")+".Provider";case Hd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ud:return t=e.displayName||null,t!==null?t:Rc(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return Rc(e(t))}catch{}}return null}function fy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rc(t);case 8:return t===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function my(e){var t=Zf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=my(e))}function Xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Zf(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nc(e,t){var r=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function gp(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=hn(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jf(e,t){t=t.checked,t!=null&&Dd(e,"checked",t,!1)}function Ac(e,t){Jf(e,t);var r=hn(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ic(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ic(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yp(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ic(e,t,r){(t!=="number"||Qo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Gi=Array.isArray;function ci(e,t,r,i){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&i&&(e[r].defaultSelected=!0)}else{for(r=""+hn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _c(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(Gi(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:hn(r)}}function em(e,t){var r=hn(t.value),i=hn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function vp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xa,rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pa(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gy=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(e){gy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zi[t]=Zi[e]})});function nm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Zi.hasOwnProperty(e)&&Zi[e]?(""+t).trim():t+"px"}function im(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=nm(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,a):e[r]=a}}var yy=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(e,t){if(t){if(yy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function Vd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uc=null,di=null,ui=null;function wp(e){if(e=_a(e)){if(typeof Uc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Us(t),Uc(e.stateNode,e.type,t))}}function am(e){di?ui?ui.push(e):ui=[e]:di=e}function om(){if(di){var e=di,t=ui;if(ui=di=null,wp(e),t)for(e=0;e<t.length;e++)wp(t[e])}}function sm(e,t){return e(t)}function lm(){}var Dl=!1;function cm(e,t,r){if(Dl)return e(t,r);Dl=!0;try{return sm(e,t,r)}finally{Dl=!1,(di!==null||ui!==null)&&(lm(),om())}}function ha(e,t){var r=e.stateNode;if(r===null)return null;var i=Us(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var Vc=!1;if(Sr)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{Vc=!1}function xy(e,t,r,i,a,o,s,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var Xi=!1,Yo=null,qo=!1,Wc=null,vy={onError:function(e){Xi=!0,Yo=e}};function wy(e,t,r,i,a,o,s,c,d){Xi=!1,Yo=null,xy.apply(vy,arguments)}function by(e,t,r,i,a,o,s,c,d){if(wy.apply(this,arguments),Xi){if(Xi){var u=Yo;Xi=!1,Yo=null}else throw Error(T(198));qo||(qo=!0,Wc=u)}}function Bn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function dm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bp(e){if(Bn(e)!==e)throw Error(T(188))}function jy(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return bp(a),e;if(o===i)return bp(a),t;o=o.sibling}throw Error(T(188))}if(r.return!==i.return)r=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===r){s=!0,r=a,i=o;break}if(c===i){s=!0,i=a,r=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===r){s=!0,r=o,i=a;break}if(c===i){s=!0,i=o,r=a;break}c=c.sibling}if(!s)throw Error(T(189))}}if(r.alternate!==i)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function um(e){return e=jy(e),e!==null?pm(e):null}function pm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pm(e);if(t!==null)return t;e=e.sibling}return null}var hm=Mt.unstable_scheduleCallback,jp=Mt.unstable_cancelCallback,$y=Mt.unstable_shouldYield,ky=Mt.unstable_requestPaint,Ue=Mt.unstable_now,Sy=Mt.unstable_getCurrentPriorityLevel,Wd=Mt.unstable_ImmediatePriority,fm=Mt.unstable_UserBlockingPriority,Zo=Mt.unstable_NormalPriority,Cy=Mt.unstable_LowPriority,mm=Mt.unstable_IdlePriority,Os=null,gr=null;function zy(e){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var sr=Math.clz32?Math.clz32:My,Py=Math.log,Ey=Math.LN2;function My(e){return e>>>=0,e===0?32:31-(Py(e)/Ey|0)|0}var Ja=64,eo=4194304;function Ki(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xo(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var c=s&~a;c!==0?i=Ki(c):(o&=s,o!==0&&(i=Ki(o)))}else s=r&~a,s!==0?i=Ki(s):o!==0&&(i=Ki(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&a)&&(a=i&-i,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-sr(t),a=1<<r,i|=e[r],t&=~a;return i}function Ty(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fy(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-sr(o),c=1<<s,d=a[s];d===-1?(!(c&r)||c&i)&&(a[s]=Ty(c,t)):d<=t&&(e.expiredLanes|=c),o&=~c}}function Gc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gm(){var e=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),e}function Bl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Aa(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sr(t),e[t]=r}function Ly(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-sr(r),o=1<<a;t[a]=0,i[a]=-1,e[a]=-1,r&=~o}}function Gd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-sr(r),a=1<<i;a&t|e[i]&t&&(e[i]|=t),r&=~a}}var ye=0;function ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xm,Kd,vm,wm,bm,Kc=!1,to=[],rn=null,nn=null,an=null,fa=new Map,ma=new Map,_r=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(t.pointerId)}}function Ii(e,t,r,i,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[a]},t!==null&&(t=_a(t),t!==null&&Kd(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ny(e,t,r,i,a){switch(t){case"focusin":return rn=Ii(rn,e,t,r,i,a),!0;case"dragenter":return nn=Ii(nn,e,t,r,i,a),!0;case"mouseover":return an=Ii(an,e,t,r,i,a),!0;case"pointerover":var o=a.pointerId;return fa.set(o,Ii(fa.get(o)||null,e,t,r,i,a)),!0;case"gotpointercapture":return o=a.pointerId,ma.set(o,Ii(ma.get(o)||null,e,t,r,i,a)),!0}return!1}function jm(e){var t=Cn(e.target);if(t!==null){var r=Bn(t);if(r!==null){if(t=r.tag,t===13){if(t=dm(r),t!==null){e.blockedOn=t,bm(e.priority,function(){vm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Hc=i,r.target.dispatchEvent(i),Hc=null}else return t=_a(r),t!==null&&Kd(t),e.blockedOn=r,!1;t.shift()}return!0}function kp(e,t,r){To(e)&&r.delete(t)}function Ay(){Kc=!1,rn!==null&&To(rn)&&(rn=null),nn!==null&&To(nn)&&(nn=null),an!==null&&To(an)&&(an=null),fa.forEach(kp),ma.forEach(kp)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,Kc||(Kc=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,Ay)))}function ga(e){function t(a){return _i(a,e)}if(0<to.length){_i(to[0],e);for(var r=1;r<to.length;r++){var i=to[r];i.blockedOn===e&&(i.blockedOn=null)}}for(rn!==null&&_i(rn,e),nn!==null&&_i(nn,e),an!==null&&_i(an,e),fa.forEach(t),ma.forEach(t),r=0;r<_r.length;r++)i=_r[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<_r.length&&(r=_r[0],r.blockedOn===null);)jm(r),r.blockedOn===null&&_r.shift()}var pi=Er.ReactCurrentBatchConfig,Jo=!0;function Iy(e,t,r,i){var a=ye,o=pi.transition;pi.transition=null;try{ye=1,Qd(e,t,r,i)}finally{ye=a,pi.transition=o}}function _y(e,t,r,i){var a=ye,o=pi.transition;pi.transition=null;try{ye=4,Qd(e,t,r,i)}finally{ye=a,pi.transition=o}}function Qd(e,t,r,i){if(Jo){var a=Qc(e,t,r,i);if(a===null)Zl(e,t,i,es,r),$p(e,i);else if(Ny(a,e,t,r,i))i.stopPropagation();else if($p(e,i),t&4&&-1<Ry.indexOf(e)){for(;a!==null;){var o=_a(a);if(o!==null&&xm(o),o=Qc(e,t,r,i),o===null&&Zl(e,t,i,es,r),o===a)break;a=o}a!==null&&i.stopPropagation()}else Zl(e,t,i,null,r)}}var es=null;function Qc(e,t,r,i){if(es=null,e=Vd(i),e=Cn(e),e!==null)if(t=Bn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=dm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return es=e,null}function $m(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sy()){case Wd:return 1;case fm:return 4;case Zo:case Cy:return 16;case mm:return 536870912;default:return 16}default:return 16}}var Dr=null,Yd=null,Fo=null;function km(){if(Fo)return Fo;var e,t=Yd,r=t.length,i,a="value"in Dr?Dr.value:Dr.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===a[o-i];i++);return Fo=a.slice(e,1<i?1-i:void 0)}function Lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function Sp(){return!1}function Lt(e){function t(r,i,a,o,s){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ro:Sp,this.isPropagationStopped=Sp,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=Lt(Ei),Ia=Ie({},Ei,{view:0,detail:0}),Oy=Lt(Ia),Hl,Ul,Oi,Ds=Ie({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oi&&(Oi&&e.type==="mousemove"?(Hl=e.screenX-Oi.screenX,Ul=e.screenY-Oi.screenY):Ul=Hl=0,Oi=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),Cp=Lt(Ds),Dy=Ie({},Ds,{dataTransfer:0}),By=Lt(Dy),Hy=Ie({},Ia,{relatedTarget:0}),Vl=Lt(Hy),Uy=Ie({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Lt(Uy),Wy=Ie({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Lt(Wy),Ky=Ie({},Ei,{data:0}),zp=Lt(Ky),Qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qy[e])?!!t[e]:!1}function Zd(){return Zy}var Xy=Ie({},Ia,{key:function(e){if(e.key){var t=Qy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jy=Lt(Xy),ex=Ie({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Lt(ex),tx=Ie({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),rx=Lt(tx),nx=Ie({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=Lt(nx),ax=Ie({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Lt(ax),sx=[9,13,27,32],Xd=Sr&&"CompositionEvent"in window,Ji=null;Sr&&"documentMode"in document&&(Ji=document.documentMode);var lx=Sr&&"TextEvent"in window&&!Ji,Sm=Sr&&(!Xd||Ji&&8<Ji&&11>=Ji),Ep=" ",Mp=!1;function Cm(e,t){switch(e){case"keyup":return sx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function cx(e,t){switch(e){case"compositionend":return zm(t);case"keypress":return t.which!==32?null:(Mp=!0,Ep);case"textInput":return e=t.data,e===Ep&&Mp?null:e;default:return null}}function dx(e,t){if(Xn)return e==="compositionend"||!Xd&&Cm(e,t)?(e=km(),Fo=Yd=Dr=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sm&&t.locale!=="ko"?null:t.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ux[e.type]:t==="textarea"}function Pm(e,t,r,i){am(i),t=ts(t,"onChange"),0<t.length&&(r=new qd("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var ea=null,ya=null;function px(e){Om(e,0)}function Bs(e){var t=ti(e);if(Xf(t))return e}function hx(e,t){if(e==="change")return t}var Em=!1;if(Sr){var Wl;if(Sr){var Gl="oninput"in document;if(!Gl){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Gl=typeof Fp.oninput=="function"}Wl=Gl}else Wl=!1;Em=Wl&&(!document.documentMode||9<document.documentMode)}function Lp(){ea&&(ea.detachEvent("onpropertychange",Mm),ya=ea=null)}function Mm(e){if(e.propertyName==="value"&&Bs(ya)){var t=[];Pm(t,ya,e,Vd(e)),cm(px,t)}}function fx(e,t,r){e==="focusin"?(Lp(),ea=t,ya=r,ea.attachEvent("onpropertychange",Mm)):e==="focusout"&&Lp()}function mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bs(ya)}function gx(e,t){if(e==="click")return Bs(t)}function yx(e,t){if(e==="input"||e==="change")return Bs(t)}function xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cr=typeof Object.is=="function"?Object.is:xx;function xa(e,t){if(cr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!Mc.call(t,a)||!cr(e[a],t[a]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,t){var r=Rp(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rp(r)}}function Tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fm(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Qo(e.document)}return t}function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vx(e){var t=Fm(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Tm(r.ownerDocument.documentElement,r)){if(i!==null&&Jd(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(i.start,a);i=i.end===void 0?o:Math.min(i.end,a),!e.extend&&o>i&&(a=i,i=o,o=a),a=Np(r,o);var s=Np(r,i);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wx=Sr&&"documentMode"in document&&11>=document.documentMode,Jn=null,Yc=null,ta=null,qc=!1;function Ap(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qc||Jn==null||Jn!==Qo(i)||(i=Jn,"selectionStart"in i&&Jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&xa(ta,i)||(ta=i,i=ts(Yc,"onSelect"),0<i.length&&(t=new qd("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Jn)))}function no(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ei={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},Kl={},Lm={};Sr&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Hs(e){if(Kl[e])return Kl[e];if(!ei[e])return e;var t=ei[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Lm)return Kl[e]=t[r];return e}var Rm=Hs("animationend"),Nm=Hs("animationiteration"),Am=Hs("animationstart"),Im=Hs("transitionend"),_m=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){_m.set(e,t),Dn(t,[e])}for(var Ql=0;Ql<Ip.length;Ql++){var Yl=Ip[Ql],bx=Yl.toLowerCase(),jx=Yl[0].toUpperCase()+Yl.slice(1);gn(bx,"on"+jx)}gn(Rm,"onAnimationEnd");gn(Nm,"onAnimationIteration");gn(Am,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Im,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function _p(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,by(i,t,void 0,e),e.currentTarget=null}function Om(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],a=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var c=i[s],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==o&&a.isPropagationStopped())break e;_p(a,c,u),o=d}else for(s=0;s<i.length;s++){if(c=i[s],d=c.instance,u=c.currentTarget,c=c.listener,d!==o&&a.isPropagationStopped())break e;_p(a,c,u),o=d}}}if(qo)throw e=Wc,qo=!1,Wc=null,e}function je(e,t){var r=t[td];r===void 0&&(r=t[td]=new Set);var i=e+"__bubble";r.has(i)||(Dm(t,e,2,!1),r.add(i))}function ql(e,t,r){var i=0;t&&(i|=4),Dm(r,e,i,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function va(e){if(!e[io]){e[io]=!0,Kf.forEach(function(r){r!=="selectionchange"&&($x.has(r)||ql(r,!1,e),ql(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,ql("selectionchange",!1,t))}}function Dm(e,t,r,i){switch($m(t)){case 1:var a=Iy;break;case 4:a=_y;break;default:a=Qd}r=a.bind(null,t,r,e),a=void 0,!Vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Zl(e,t,r,i,a){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;s=s.return}for(;c!==null;){if(s=Cn(c),s===null)return;if(d=s.tag,d===5||d===6){i=o=s;continue e}c=c.parentNode}}i=i.return}cm(function(){var u=o,g=Vd(r),f=[];e:{var x=_m.get(e);if(x!==void 0){var S=qd,j=e;switch(e){case"keypress":if(Lo(r)===0)break e;case"keydown":case"keyup":S=Jy;break;case"focusin":j="focus",S=Vl;break;case"focusout":j="blur",S=Vl;break;case"beforeblur":case"afterblur":S=Vl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=By;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=rx;break;case Rm:case Nm:case Am:S=Vy;break;case Im:S=ix;break;case"scroll":S=Oy;break;case"wheel":S=ox;break;case"copy":case"cut":case"paste":S=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Pp}var C=(t&4)!==0,w=!C&&e==="scroll",m=C?x!==null?x+"Capture":null:x;C=[];for(var p=u,y;p!==null;){y=p;var $=y.stateNode;if(y.tag===5&&$!==null&&(y=$,m!==null&&($=ha(p,m),$!=null&&C.push(wa(p,$,y)))),w)break;p=p.return}0<C.length&&(x=new S(x,j,null,r,g),f.push({event:x,listeners:C}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",x&&r!==Hc&&(j=r.relatedTarget||r.fromElement)&&(Cn(j)||j[Cr]))break e;if((S||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,S?(j=r.relatedTarget||r.toElement,S=u,j=j?Cn(j):null,j!==null&&(w=Bn(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=u),S!==j)){if(C=Cp,$="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(C=Pp,$="onPointerLeave",m="onPointerEnter",p="pointer"),w=S==null?x:ti(S),y=j==null?x:ti(j),x=new C($,p+"leave",S,r,g),x.target=w,x.relatedTarget=y,$=null,Cn(g)===u&&(C=new C(m,p+"enter",j,r,g),C.target=y,C.relatedTarget=w,$=C),w=$,S&&j)t:{for(C=S,m=j,p=0,y=C;y;y=Qn(y))p++;for(y=0,$=m;$;$=Qn($))y++;for(;0<p-y;)C=Qn(C),p--;for(;0<y-p;)m=Qn(m),y--;for(;p--;){if(C===m||m!==null&&C===m.alternate)break t;C=Qn(C),m=Qn(m)}C=null}else C=null;S!==null&&Op(f,x,S,C,!1),j!==null&&w!==null&&Op(f,w,j,C,!0)}}e:{if(x=u?ti(u):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var P=hx;else if(Tp(x))if(Em)P=yx;else{P=mx;var L=fx}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(P=gx);if(P&&(P=P(e,u))){Pm(f,P,r,g);break e}L&&L(e,x,u),e==="focusout"&&(L=x._wrapperState)&&L.controlled&&x.type==="number"&&Ic(x,"number",x.value)}switch(L=u?ti(u):window,e){case"focusin":(Tp(L)||L.contentEditable==="true")&&(Jn=L,Yc=u,ta=null);break;case"focusout":ta=Yc=Jn=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Ap(f,r,g);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Ap(f,r,g)}var N;if(Xd)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Xn?Cm(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(Sm&&r.locale!=="ko"&&(Xn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Xn&&(N=km()):(Dr=g,Yd="value"in Dr?Dr.value:Dr.textContent,Xn=!0)),L=ts(u,I),0<L.length&&(I=new zp(I,e,null,r,g),f.push({event:I,listeners:L}),N?I.data=N:(N=zm(r),N!==null&&(I.data=N)))),(N=lx?cx(e,r):dx(e,r))&&(u=ts(u,"onBeforeInput"),0<u.length&&(g=new zp("onBeforeInput","beforeinput",null,r,g),f.push({event:g,listeners:u}),g.data=N))}Om(f,t)})}function wa(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ts(e,t){for(var r=t+"Capture",i=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=ha(e,r),o!=null&&i.unshift(wa(e,o,a)),o=ha(e,t),o!=null&&i.push(wa(e,o,a))),e=e.return}return i}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Op(e,t,r,i,a){for(var o=t._reactName,s=[];r!==null&&r!==i;){var c=r,d=c.alternate,u=c.stateNode;if(d!==null&&d===i)break;c.tag===5&&u!==null&&(c=u,a?(d=ha(r,o),d!=null&&s.unshift(wa(r,d,c))):a||(d=ha(r,o),d!=null&&s.push(wa(r,d,c)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var kx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Dp(e){return(typeof e=="string"?e:""+e).replace(kx,`
`).replace(Sx,"")}function ao(e,t,r){if(t=Dp(t),Dp(e)!==t&&r)throw Error(T(425))}function rs(){}var Zc=null,Xc=null;function Jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(e){return Bp.resolve(null).then(e).catch(Px)}:ed;function Px(e){setTimeout(function(){throw e})}function Xl(e,t){var r=t,i=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){e.removeChild(a),ga(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);ga(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),mr="__reactFiber$"+Mi,ba="__reactProps$"+Mi,Cr="__reactContainer$"+Mi,td="__reactEvents$"+Mi,Ex="__reactListeners$"+Mi,Mx="__reactHandles$"+Mi;function Cn(e){var t=e[mr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Cr]||r[mr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Hp(e);e!==null;){if(r=e[mr])return r;e=Hp(e)}return t}e=r,r=e.parentNode}return null}function _a(e){return e=e[mr]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Us(e){return e[ba]||null}var rd=[],ri=-1;function yn(e){return{current:e}}function ke(e){0>ri||(e.current=rd[ri],rd[ri]=null,ri--)}function be(e,t){ri++,rd[ri]=e.current,e.current=t}var fn={},ut=yn(fn),jt=yn(!1),Fn=fn;function yi(e,t){var r=e.type.contextTypes;if(!r)return fn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $t(e){return e=e.childContextTypes,e!=null}function ns(){ke(jt),ke(ut)}function Up(e,t,r){if(ut.current!==fn)throw Error(T(168));be(ut,t),be(jt,r)}function Bm(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(T(108,fy(e)||"Unknown",a));return Ie({},r,i)}function is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Fn=ut.current,be(ut,e),be(jt,jt.current),!0}function Vp(e,t,r){var i=e.stateNode;if(!i)throw Error(T(169));r?(e=Bm(e,t,Fn),i.__reactInternalMemoizedMergedChildContext=e,ke(jt),ke(ut),be(ut,e)):ke(jt),be(jt,r)}var br=null,Vs=!1,Jl=!1;function Hm(e){br===null?br=[e]:br.push(e)}function Tx(e){Vs=!0,Hm(e)}function xn(){if(!Jl&&br!==null){Jl=!0;var e=0,t=ye;try{var r=br;for(ye=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}br=null,Vs=!1}catch(a){throw br!==null&&(br=br.slice(e+1)),hm(Wd,xn),a}finally{ye=t,Jl=!1}}return null}var ni=[],ii=0,as=null,os=0,Dt=[],Bt=0,Ln=null,jr=1,$r="";function bn(e,t){ni[ii++]=os,ni[ii++]=as,as=e,os=t}function Um(e,t,r){Dt[Bt++]=jr,Dt[Bt++]=$r,Dt[Bt++]=Ln,Ln=e;var i=jr;e=$r;var a=32-sr(i)-1;i&=~(1<<a),r+=1;var o=32-sr(t)+a;if(30<o){var s=a-a%5;o=(i&(1<<s)-1).toString(32),i>>=s,a-=s,jr=1<<32-sr(t)+a|r<<a|i,$r=o+e}else jr=1<<o|r<<a|i,$r=e}function eu(e){e.return!==null&&(bn(e,1),Um(e,1,0))}function tu(e){for(;e===as;)as=ni[--ii],ni[ii]=null,os=ni[--ii],ni[ii]=null;for(;e===Ln;)Ln=Dt[--Bt],Dt[Bt]=null,$r=Dt[--Bt],Dt[Bt]=null,jr=Dt[--Bt],Dt[Bt]=null}var Pt=null,Ct=null,Pe=!1,ir=null;function Vm(e,t){var r=Wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Wp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Ct=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ln!==null?{id:jr,overflow:$r}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pt=e,Ct=null,!0):!1;default:return!1}}function nd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function id(e){if(Pe){var t=Ct;if(t){var r=t;if(!Wp(e,t)){if(nd(e))throw Error(T(418));t=on(r.nextSibling);var i=Pt;t&&Wp(e,t)?Vm(i,r):(e.flags=e.flags&-4097|2,Pe=!1,Pt=e)}}else{if(nd(e))throw Error(T(418));e.flags=e.flags&-4097|2,Pe=!1,Pt=e}}}function Gp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function oo(e){if(e!==Pt)return!1;if(!Pe)return Gp(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jc(e.type,e.memoizedProps)),t&&(t=Ct)){if(nd(e))throw Wm(),Error(T(418));for(;t;)Vm(e,t),t=on(t.nextSibling)}if(Gp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ct=on(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Pt?on(e.stateNode.nextSibling):null;return!0}function Wm(){for(var e=Ct;e;)e=on(e.nextSibling)}function xi(){Ct=Pt=null,Pe=!1}function ru(e){ir===null?ir=[e]:ir.push(e)}var Fx=Er.ReactCurrentBatchConfig;function Di(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var i=r.stateNode}if(!i)throw Error(T(147,e));var a=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var c=a.refs;s===null?delete c[o]:c[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kp(e){var t=e._init;return t(e._payload)}function Gm(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function r(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function i(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function a(m,p){return m=dn(m,p),m.index=0,m.sibling=null,m}function o(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,p,y,$){return p===null||p.tag!==6?(p=oc(y,m.mode,$),p.return=m,p):(p=a(p,y),p.return=m,p)}function d(m,p,y,$){var P=y.type;return P===Zn?g(m,p,y.props.children,$,y.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ar&&Kp(P)===p.type)?($=a(p,y.props),$.ref=Di(m,p,y),$.return=m,$):($=Do(y.type,y.key,y.props,null,m.mode,$),$.ref=Di(m,p,y),$.return=m,$)}function u(m,p,y,$){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=sc(y,m.mode,$),p.return=m,p):(p=a(p,y.children||[]),p.return=m,p)}function g(m,p,y,$,P){return p===null||p.tag!==7?(p=Mn(y,m.mode,$,P),p.return=m,p):(p=a(p,y),p.return=m,p)}function f(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=oc(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qa:return y=Do(p.type,p.key,p.props,null,m.mode,y),y.ref=Di(m,null,p),y.return=m,y;case qn:return p=sc(p,m.mode,y),p.return=m,p;case Ar:var $=p._init;return f(m,$(p._payload),y)}if(Gi(p)||Ni(p))return p=Mn(p,m.mode,y,null),p.return=m,p;so(m,p)}return null}function x(m,p,y,$){var P=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:c(m,p,""+y,$);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qa:return y.key===P?d(m,p,y,$):null;case qn:return y.key===P?u(m,p,y,$):null;case Ar:return P=y._init,x(m,p,P(y._payload),$)}if(Gi(y)||Ni(y))return P!==null?null:g(m,p,y,$,null);so(m,y)}return null}function S(m,p,y,$,P){if(typeof $=="string"&&$!==""||typeof $=="number")return m=m.get(y)||null,c(p,m,""+$,P);if(typeof $=="object"&&$!==null){switch($.$$typeof){case qa:return m=m.get($.key===null?y:$.key)||null,d(p,m,$,P);case qn:return m=m.get($.key===null?y:$.key)||null,u(p,m,$,P);case Ar:var L=$._init;return S(m,p,y,L($._payload),P)}if(Gi($)||Ni($))return m=m.get(y)||null,g(p,m,$,P,null);so(p,$)}return null}function j(m,p,y,$){for(var P=null,L=null,N=p,I=p=0,W=null;N!==null&&I<y.length;I++){N.index>I?(W=N,N=null):W=N.sibling;var D=x(m,N,y[I],$);if(D===null){N===null&&(N=W);break}e&&N&&D.alternate===null&&t(m,N),p=o(D,p,I),L===null?P=D:L.sibling=D,L=D,N=W}if(I===y.length)return r(m,N),Pe&&bn(m,I),P;if(N===null){for(;I<y.length;I++)N=f(m,y[I],$),N!==null&&(p=o(N,p,I),L===null?P=N:L.sibling=N,L=N);return Pe&&bn(m,I),P}for(N=i(m,N);I<y.length;I++)W=S(N,m,I,y[I],$),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?I:W.key),p=o(W,p,I),L===null?P=W:L.sibling=W,L=W);return e&&N.forEach(function(ge){return t(m,ge)}),Pe&&bn(m,I),P}function C(m,p,y,$){var P=Ni(y);if(typeof P!="function")throw Error(T(150));if(y=P.call(y),y==null)throw Error(T(151));for(var L=P=null,N=p,I=p=0,W=null,D=y.next();N!==null&&!D.done;I++,D=y.next()){N.index>I?(W=N,N=null):W=N.sibling;var ge=x(m,N,D.value,$);if(ge===null){N===null&&(N=W);break}e&&N&&ge.alternate===null&&t(m,N),p=o(ge,p,I),L===null?P=ge:L.sibling=ge,L=ge,N=W}if(D.done)return r(m,N),Pe&&bn(m,I),P;if(N===null){for(;!D.done;I++,D=y.next())D=f(m,D.value,$),D!==null&&(p=o(D,p,I),L===null?P=D:L.sibling=D,L=D);return Pe&&bn(m,I),P}for(N=i(m,N);!D.done;I++,D=y.next())D=S(N,m,I,D.value,$),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?I:D.key),p=o(D,p,I),L===null?P=D:L.sibling=D,L=D);return e&&N.forEach(function(pe){return t(m,pe)}),Pe&&bn(m,I),P}function w(m,p,y,$){if(typeof y=="object"&&y!==null&&y.type===Zn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qa:e:{for(var P=y.key,L=p;L!==null;){if(L.key===P){if(P=y.type,P===Zn){if(L.tag===7){r(m,L.sibling),p=a(L,y.props.children),p.return=m,m=p;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ar&&Kp(P)===L.type){r(m,L.sibling),p=a(L,y.props),p.ref=Di(m,L,y),p.return=m,m=p;break e}r(m,L);break}else t(m,L);L=L.sibling}y.type===Zn?(p=Mn(y.props.children,m.mode,$,y.key),p.return=m,m=p):($=Do(y.type,y.key,y.props,null,m.mode,$),$.ref=Di(m,p,y),$.return=m,m=$)}return s(m);case qn:e:{for(L=y.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){r(m,p.sibling),p=a(p,y.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else t(m,p);p=p.sibling}p=sc(y,m.mode,$),p.return=m,m=p}return s(m);case Ar:return L=y._init,w(m,p,L(y._payload),$)}if(Gi(y))return j(m,p,y,$);if(Ni(y))return C(m,p,y,$);so(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(r(m,p.sibling),p=a(p,y),p.return=m,m=p):(r(m,p),p=oc(y,m.mode,$),p.return=m,m=p),s(m)):r(m,p)}return w}var vi=Gm(!0),Km=Gm(!1),ss=yn(null),ls=null,ai=null,nu=null;function iu(){nu=ai=ls=null}function au(e){var t=ss.current;ke(ss),e._currentValue=t}function ad(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function hi(e,t){ls=e,nu=ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(nu!==e)if(e={context:e,memoizedValue:t,next:null},ai===null){if(ls===null)throw Error(T(308));ai=e,ls.dependencies={lanes:0,firstContext:e}}else ai=ai.next=e;return t}var zn=null;function ou(e){zn===null?zn=[e]:zn.push(e)}function Qm(e,t,r,i){var a=t.interleaved;return a===null?(r.next=r,ou(t)):(r.next=a.next,a.next=r),t.interleaved=r,zr(e,i)}function zr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ir=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,de&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,zr(e,r)}return a=i.interleaved,a===null?(t.next=t,ou(i)):(t.next=a.next,a.next=t),i.interleaved=t,zr(e,r)}function Ro(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Gd(e,r)}}function Qp(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function cs(e,t,r,i){var a=e.updateQueue;Ir=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,u=d.next;d.next=null,s===null?o=u:s.next=u,s=d;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==s&&(c===null?g.firstBaseUpdate=u:c.next=u,g.lastBaseUpdate=d))}if(o!==null){var f=a.baseState;s=0,g=u=d=null,c=o;do{var x=c.lane,S=c.eventTime;if((i&x)===x){g!==null&&(g=g.next={eventTime:S,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=e,C=c;switch(x=t,S=r,C.tag){case 1:if(j=C.payload,typeof j=="function"){f=j.call(S,f,x);break e}f=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=C.payload,x=typeof j=="function"?j.call(S,f,x):j,x==null)break e;f=Ie({},f,x);break e;case 2:Ir=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=a.effects,x===null?a.effects=[c]:x.push(c))}else S={eventTime:S,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(u=g=S,d=f):g=g.next=S,s|=x;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;x=c,c=x.next,x.next=null,a.lastBaseUpdate=x,a.shared.pending=null}}while(!0);if(g===null&&(d=f),a.baseState=d,a.firstBaseUpdate=u,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Nn|=s,e.lanes=s,e.memoizedState=f}}function Yp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(T(191,a));a.call(i)}}}var Oa={},yr=yn(Oa),ja=yn(Oa),$a=yn(Oa);function Pn(e){if(e===Oa)throw Error(T(174));return e}function lu(e,t){switch(be($a,t),be(ja,e),be(yr,Oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oc(t,e)}ke(yr),be(yr,t)}function wi(){ke(yr),ke(ja),ke($a)}function qm(e){Pn($a.current);var t=Pn(yr.current),r=Oc(t,e.type);t!==r&&(be(ja,e),be(yr,r))}function cu(e){ja.current===e&&(ke(yr),ke(ja))}var Le=yn(0);function ds(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ec=[];function du(){for(var e=0;e<ec.length;e++)ec[e]._workInProgressVersionPrimary=null;ec.length=0}var No=Er.ReactCurrentDispatcher,tc=Er.ReactCurrentBatchConfig,Rn=0,Ne=null,Ke=null,Ze=null,us=!1,ra=!1,ka=0,Lx=0;function st(){throw Error(T(321))}function uu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!cr(e[r],t[r]))return!1;return!0}function pu(e,t,r,i,a,o){if(Rn=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?Ix:_x,e=r(i,a),ra){o=0;do{if(ra=!1,ka=0,25<=o)throw Error(T(301));o+=1,Ze=Ke=null,t.updateQueue=null,No.current=Ox,e=r(i,a)}while(ra)}if(No.current=ps,t=Ke!==null&&Ke.next!==null,Rn=0,Ze=Ke=Ne=null,us=!1,t)throw Error(T(300));return e}function hu(){var e=ka!==0;return ka=0,e}function fr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ne.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Yt(){if(Ke===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Ze===null?Ne.memoizedState:Ze.next;if(t!==null)Ze=t,Ke=e;else{if(e===null)throw Error(T(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?Ne.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Sa(e,t){return typeof t=="function"?t(e):t}function rc(e){var t=Yt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var i=Ke,a=i.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,d=null,u=o;do{var g=u.lane;if((Rn&g)===g)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=f,s=i):d=d.next=f,Ne.lanes|=g,Nn|=g}u=u.next}while(u!==null&&u!==o);d===null?s=i:d.next=c,cr(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=d,r.lastRenderedState=i}if(e=r.interleaved,e!==null){a=e;do o=a.lane,Ne.lanes|=o,Nn|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function nc(e){var t=Yt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);cr(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function Zm(){}function Xm(e,t){var r=Ne,i=Yt(),a=t(),o=!cr(i.memoizedState,a);if(o&&(i.memoizedState=a,bt=!0),i=i.queue,fu(tg.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(r.flags|=2048,Ca(9,eg.bind(null,r,i,a,t),void 0,null),Xe===null)throw Error(T(349));Rn&30||Jm(r,t,a)}return a}function Jm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function eg(e,t,r,i){t.value=r,t.getSnapshot=i,rg(t)&&ng(e)}function tg(e,t,r){return r(function(){rg(t)&&ng(e)})}function rg(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!cr(e,r)}catch{return!0}}function ng(e){var t=zr(e,1);t!==null&&lr(t,e,1,-1)}function qp(e){var t=fr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ax.bind(null,Ne,e),[t.memoizedState,e]}function Ca(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function ig(){return Yt().memoizedState}function Ao(e,t,r,i){var a=fr();Ne.flags|=e,a.memoizedState=Ca(1|t,r,void 0,i===void 0?null:i)}function Ws(e,t,r,i){var a=Yt();i=i===void 0?null:i;var o=void 0;if(Ke!==null){var s=Ke.memoizedState;if(o=s.destroy,i!==null&&uu(i,s.deps)){a.memoizedState=Ca(t,r,o,i);return}}Ne.flags|=e,a.memoizedState=Ca(1|t,r,o,i)}function Zp(e,t){return Ao(8390656,8,e,t)}function fu(e,t){return Ws(2048,8,e,t)}function ag(e,t){return Ws(4,2,e,t)}function og(e,t){return Ws(4,4,e,t)}function sg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lg(e,t,r){return r=r!=null?r.concat([e]):null,Ws(4,4,sg.bind(null,t,e),r)}function mu(){}function cg(e,t){var r=Yt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&uu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function dg(e,t){var r=Yt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&uu(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function ug(e,t,r){return Rn&21?(cr(r,t)||(r=gm(),Ne.lanes|=r,Nn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=r)}function Rx(e,t){var r=ye;ye=r!==0&&4>r?r:4,e(!0);var i=tc.transition;tc.transition={};try{e(!1),t()}finally{ye=r,tc.transition=i}}function pg(){return Yt().memoizedState}function Nx(e,t,r){var i=cn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},hg(e))fg(t,r);else if(r=Qm(e,t,r,i),r!==null){var a=ht();lr(r,e,i,a),mg(r,t,i)}}function Ax(e,t,r){var i=cn(e),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(hg(e))fg(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,r);if(a.hasEagerState=!0,a.eagerState=c,cr(c,s)){var d=t.interleaved;d===null?(a.next=a,ou(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}r=Qm(e,t,a,i),r!==null&&(a=ht(),lr(r,e,i,a),mg(r,t,i))}}function hg(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function fg(e,t){ra=us=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function mg(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Gd(e,r)}}var ps={readContext:Qt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Ix={readContext:Qt,useCallback:function(e,t){return fr().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:Zp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ao(4194308,4,sg.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var r=fr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=fr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Nx.bind(null,Ne,e),[i.memoizedState,e]},useRef:function(e){var t=fr();return e={current:e},t.memoizedState=e},useState:qp,useDebugValue:mu,useDeferredValue:function(e){return fr().memoizedState=e},useTransition:function(){var e=qp(!1),t=e[0];return e=Rx.bind(null,e[1]),fr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Ne,a=fr();if(Pe){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),Xe===null)throw Error(T(349));Rn&30||Jm(i,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Zp(tg.bind(null,i,o,e),[e]),i.flags|=2048,Ca(9,eg.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=fr(),t=Xe.identifierPrefix;if(Pe){var r=$r,i=jr;r=(i&~(1<<32-sr(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=ka++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Lx++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_x={readContext:Qt,useCallback:cg,useContext:Qt,useEffect:fu,useImperativeHandle:lg,useInsertionEffect:ag,useLayoutEffect:og,useMemo:dg,useReducer:rc,useRef:ig,useState:function(){return rc(Sa)},useDebugValue:mu,useDeferredValue:function(e){var t=Yt();return ug(t,Ke.memoizedState,e)},useTransition:function(){var e=rc(Sa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Zm,useSyncExternalStore:Xm,useId:pg,unstable_isNewReconciler:!1},Ox={readContext:Qt,useCallback:cg,useContext:Qt,useEffect:fu,useImperativeHandle:lg,useInsertionEffect:ag,useLayoutEffect:og,useMemo:dg,useReducer:nc,useRef:ig,useState:function(){return nc(Sa)},useDebugValue:mu,useDeferredValue:function(e){var t=Yt();return Ke===null?t.memoizedState=e:ug(t,Ke.memoizedState,e)},useTransition:function(){var e=nc(Sa)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:Zm,useSyncExternalStore:Xm,useId:pg,unstable_isNewReconciler:!1};function rr(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function od(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Ie({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Gs={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=ht(),a=cn(e),o=kr(i,a);o.payload=t,r!=null&&(o.callback=r),t=sn(e,o,a),t!==null&&(lr(t,e,a,i),Ro(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=ht(),a=cn(e),o=kr(i,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=sn(e,o,a),t!==null&&(lr(t,e,a,i),Ro(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),i=cn(e),a=kr(r,i);a.tag=2,t!=null&&(a.callback=t),t=sn(e,a,i),t!==null&&(lr(t,e,i,r),Ro(t,e,i))}};function Xp(e,t,r,i,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!xa(r,i)||!xa(a,o):!0}function gg(e,t,r){var i=!1,a=fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Qt(o):(a=$t(t)?Fn:ut.current,i=t.contextTypes,o=(i=i!=null)?yi(e,a):fn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gs,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Jp(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function sd(e,t,r,i){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},su(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Qt(o):(o=$t(t)?Fn:ut.current,a.context=yi(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(od(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Gs.enqueueReplaceState(a,a.state,null),cs(e,r,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,t){try{var r="",i=t;do r+=hy(i),i=i.return;while(i);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function ic(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ld(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function yg(e,t,r){r=kr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){fs||(fs=!0,xd=i),ld(e,t)},r}function xg(e,t,r){r=kr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;r.payload=function(){return i(a)},r.callback=function(){ld(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ld(e,t),typeof i!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function eh(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Dx;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(r)||(a.add(r),e=ev.bind(null,e,t,r),t.then(e,e))}function th(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rh(e,t,r,i,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kr(-1,1),t.tag=2,sn(r,t,1))),r.lanes|=1),e)}var Bx=Er.ReactCurrentOwner,bt=!1;function pt(e,t,r,i){t.child=e===null?Km(t,null,r,i):vi(t,e.child,r,i)}function nh(e,t,r,i,a){r=r.render;var o=t.ref;return hi(t,a),i=pu(e,t,r,i,o,a),r=hu(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pr(e,t,a)):(Pe&&r&&eu(t),t.flags|=1,pt(e,t,i,a),t.child)}function ih(e,t,r,i,a){if(e===null){var o=r.type;return typeof o=="function"&&!$u(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,vg(e,t,o,i,a)):(e=Do(r.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:xa,r(s,i)&&e.ref===t.ref)return Pr(e,t,a)}return t.flags|=1,e=dn(o,i),e.ref=t.ref,e.return=t,t.child=e}function vg(e,t,r,i,a){if(e!==null){var o=e.memoizedProps;if(xa(o,i)&&e.ref===t.ref)if(bt=!1,t.pendingProps=i=o,(e.lanes&a)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Pr(e,t,a)}return cd(e,t,r,i,a)}function wg(e,t,r){var i=t.pendingProps,a=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(si,St),St|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(si,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,be(si,St),St|=i}else o!==null?(i=o.baseLanes|r,t.memoizedState=null):i=r,be(si,St),St|=i;return pt(e,t,a,r),t.child}function bg(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function cd(e,t,r,i,a){var o=$t(r)?Fn:ut.current;return o=yi(t,o),hi(t,a),r=pu(e,t,r,i,o,a),i=hu(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pr(e,t,a)):(Pe&&i&&eu(t),t.flags|=1,pt(e,t,r,a),t.child)}function ah(e,t,r,i,a){if($t(r)){var o=!0;is(t)}else o=!1;if(hi(t,a),t.stateNode===null)Io(e,t),gg(t,r,i),sd(t,r,i,a),i=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var d=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Qt(u):(u=$t(r)?Fn:ut.current,u=yi(t,u));var g=r.getDerivedStateFromProps,f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||d!==u)&&Jp(t,s,i,u),Ir=!1;var x=t.memoizedState;s.state=x,cs(t,i,s,a),d=t.memoizedState,c!==i||x!==d||jt.current||Ir?(typeof g=="function"&&(od(t,r,g,i),d=t.memoizedState),(c=Ir||Xp(t,r,c,i,x,d,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=u,i=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Ym(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:rr(t.type,c),s.props=u,f=t.pendingProps,x=s.context,d=r.contextType,typeof d=="object"&&d!==null?d=Qt(d):(d=$t(r)?Fn:ut.current,d=yi(t,d));var S=r.getDerivedStateFromProps;(g=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==f||x!==d)&&Jp(t,s,i,d),Ir=!1,x=t.memoizedState,s.state=x,cs(t,i,s,a);var j=t.memoizedState;c!==f||x!==j||jt.current||Ir?(typeof S=="function"&&(od(t,r,S,i),j=t.memoizedState),(u=Ir||Xp(t,r,u,i,x,j,d)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,j,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,j,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),s.props=i,s.state=j,s.context=d,i=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),i=!1)}return dd(e,t,r,i,o,a)}function dd(e,t,r,i,a,o){bg(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return a&&Vp(t,r,!1),Pr(e,t,o);i=t.stateNode,Bx.current=t;var c=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=vi(t,e.child,null,o),t.child=vi(t,null,c,o)):pt(e,t,c,o),t.memoizedState=i.state,a&&Vp(t,r,!0),t.child}function jg(e){var t=e.stateNode;t.pendingContext?Up(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Up(e,t.context,!1),lu(e,t.containerInfo)}function oh(e,t,r,i,a){return xi(),ru(a),t.flags|=256,pt(e,t,r,i),t.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function pd(e){return{baseLanes:e,cachePool:null,transitions:null}}function $g(e,t,r){var i=t.pendingProps,a=Le.current,o=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),be(Le,a&1),e===null)return id(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ys(s,i,0,null),e=Mn(e,i,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pd(r),t.memoizedState=ud,e):gu(t,s));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return Hx(e,t,s,i,c,a,r);if(o){o=i.fallback,s=t.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:i.children};return!(s&1)&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=dn(a,d),i.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=dn(c,o):(o=Mn(o,s,r,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=e.child.memoizedState,s=s===null?pd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=ud,i}return o=e.child,e=o.sibling,i=dn(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function gu(e,t){return t=Ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lo(e,t,r,i){return i!==null&&ru(i),vi(t,e.child,null,r),e=gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hx(e,t,r,i,a,o,s){if(r)return t.flags&256?(t.flags&=-257,i=ic(Error(T(422))),lo(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,a=t.mode,i=Ys({mode:"visible",children:i.children},a,0,null),o=Mn(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&vi(t,e.child,null,s),t.child.memoizedState=pd(s),t.memoizedState=ud,o);if(!(t.mode&1))return lo(e,t,s,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(T(419)),i=ic(o,i,void 0),lo(e,t,s,i)}if(c=(s&e.childLanes)!==0,bt||c){if(i=Xe,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,zr(e,a),lr(i,e,a,-1))}return ju(),i=ic(Error(T(421))),lo(e,t,s,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=tv.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ct=on(a.nextSibling),Pt=t,Pe=!0,ir=null,e!==null&&(Dt[Bt++]=jr,Dt[Bt++]=$r,Dt[Bt++]=Ln,jr=e.id,$r=e.overflow,Ln=t),t=gu(t,i.children),t.flags|=4096,t)}function sh(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ad(e.return,t,r)}function ac(e,t,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=a)}function kg(e,t,r){var i=t.pendingProps,a=i.revealOrder,o=i.tail;if(pt(e,t,i.children,r),i=Le.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sh(e,r,t);else if(e.tag===19)sh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(be(Le,i),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ds(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ac(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ds(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ac(t,!0,r,null,o);break;case"together":ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=dn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ux(e,t,r){switch(t.tag){case 3:jg(t),xi();break;case 5:qm(t);break;case 1:$t(t.type)&&is(t);break;case 4:lu(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;be(ss,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(be(Le,Le.current&1),t.flags|=128,null):r&t.child.childLanes?$g(e,t,r):(be(Le,Le.current&1),e=Pr(e,t,r),e!==null?e.sibling:null);be(Le,Le.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return kg(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Le,Le.current),i)break;return null;case 22:case 23:return t.lanes=0,wg(e,t,r)}return Pr(e,t,r)}var Sg,hd,Cg,zg;Sg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};hd=function(){};Cg=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,Pn(yr.current);var o=null;switch(r){case"input":a=Nc(e,a),i=Nc(e,i),o=[];break;case"select":a=Ie({},a,{value:void 0}),i=Ie({},i,{value:void 0}),o=[];break;case"textarea":a=_c(e,a),i=_c(e,i),o=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=rs)}Dc(r,i);var s;r=null;for(u in a)if(!i.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var c=a[u];for(s in c)c.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var d=i[u];if(c=a!=null?a[u]:void 0,i.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(r||(r={}),r[s]=d[s])}else r||(o||(o=[]),o.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(o=o||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&je("scroll",e),o||c===d||(o=[])):(o=o||[]).push(u,d))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};zg=function(e,t,r,i){r!==i&&(t.flags|=4)};function Bi(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Vx(e,t,r){var i=t.pendingProps;switch(tu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return $t(t.type)&&ns(),lt(t),null;case 3:return i=t.stateNode,wi(),ke(jt),ke(ut),du(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ir!==null&&(bd(ir),ir=null))),hd(e,t),lt(t),null;case 5:cu(t);var a=Pn($a.current);if(r=t.type,e!==null&&t.stateNode!=null)Cg(e,t,r,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(T(166));return lt(t),null}if(e=Pn(yr.current),oo(t)){i=t.stateNode,r=t.type;var o=t.memoizedProps;switch(i[mr]=t,i[ba]=o,e=(t.mode&1)!==0,r){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(a=0;a<Qi.length;a++)je(Qi[a],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":gp(i,o),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},je("invalid",i);break;case"textarea":xp(i,o),je("invalid",i)}Dc(r,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?i.textContent!==c&&(o.suppressHydrationWarning!==!0&&ao(i.textContent,c,e),a=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&ao(i.textContent,c,e),a=["children",""+c]):ua.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&je("scroll",i)}switch(r){case"input":Za(i),yp(i,o,!0);break;case"textarea":Za(i),vp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=rs)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[mr]=t,e[ba]=i,Sg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Bc(r,i),r){case"dialog":je("cancel",e),je("close",e),a=i;break;case"iframe":case"object":case"embed":je("load",e),a=i;break;case"video":case"audio":for(a=0;a<Qi.length;a++)je(Qi[a],e);a=i;break;case"source":je("error",e),a=i;break;case"img":case"image":case"link":je("error",e),je("load",e),a=i;break;case"details":je("toggle",e),a=i;break;case"input":gp(e,i),a=Nc(e,i),je("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=Ie({},i,{value:void 0}),je("invalid",e);break;case"textarea":xp(e,i),a=_c(e,i),je("invalid",e);break;default:a=i}Dc(r,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var d=c[o];o==="style"?im(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&rm(e,d)):o==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&pa(e,d):typeof d=="number"&&pa(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ua.hasOwnProperty(o)?d!=null&&o==="onScroll"&&je("scroll",e):d!=null&&Dd(e,o,d,s))}switch(r){case"input":Za(e),yp(e,i,!1);break;case"textarea":Za(e),vp(e);break;case"option":i.value!=null&&e.setAttribute("value",""+hn(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?ci(e,!!i.multiple,o,!1):i.defaultValue!=null&&ci(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=rs)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)zg(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(T(166));if(r=Pn($a.current),Pn(yr.current),oo(t)){if(i=t.stateNode,r=t.memoizedProps,i[mr]=t,(o=i.nodeValue!==r)&&(e=Pt,e!==null))switch(e.tag){case 3:ao(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(i.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[mr]=t,t.stateNode=i}return lt(t),null;case 13:if(ke(Le),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Ct!==null&&t.mode&1&&!(t.flags&128))Wm(),xi(),t.flags|=98560,o=!1;else if(o=oo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[mr]=t}else xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),o=!1}else ir!==null&&(bd(ir),ir=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?Ye===0&&(Ye=3):ju())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return wi(),hd(e,t),e===null&&va(t.stateNode.containerInfo),lt(t),null;case 10:return au(t.type._context),lt(t),null;case 17:return $t(t.type)&&ns(),lt(t),null;case 19:if(ke(Le),o=t.memoizedState,o===null)return lt(t),null;if(i=(t.flags&128)!==0,s=o.rendering,s===null)if(i)Bi(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ds(e),s!==null){for(t.flags|=128,Bi(o,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)o=r,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Le,Le.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ue()>ji&&(t.flags|=128,i=!0,Bi(o,!1),t.lanes=4194304)}else{if(!i)if(e=ds(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Bi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return lt(t),null}else 2*Ue()-o.renderingStartTime>ji&&r!==1073741824&&(t.flags|=128,i=!0,Bi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ue(),t.sibling=null,r=Le.current,be(Le,i?r&1|2:r&1),t):(lt(t),null);case 22:case 23:return bu(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?St&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Wx(e,t){switch(tu(t),t.tag){case 1:return $t(t.type)&&ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),ke(jt),ke(ut),du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cu(t),null;case 13:if(ke(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Le),null;case 4:return wi(),null;case 10:return au(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var co=!1,ct=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,O=null;function oi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Oe(e,t,i)}else r.current=null}function fd(e,t,r){try{r()}catch(i){Oe(e,t,i)}}var lh=!1;function Kx(e,t){if(Zc=Jo,e=Fm(),Jd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,c=-1,d=-1,u=0,g=0,f=e,x=null;t:for(;;){for(var S;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(d=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(S=f.firstChild)!==null;)x=f,f=S;for(;;){if(f===e)break t;if(x===r&&++u===a&&(c=s),x===o&&++g===i&&(d=s),(S=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=S}r=c===-1||d===-1?null:{start:c,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xc={focusedElem:e,selectionRange:r},Jo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var C=j.memoizedProps,w=j.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?C:rr(t.type,C),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch($){Oe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return j=lh,lh=!1,j}function na(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&fd(t,r,o)}a=a.next}while(a!==i)}}function Ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function md(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Pg(e){var t=e.alternate;t!==null&&(e.alternate=null,Pg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mr],delete t[ba],delete t[td],delete t[Ex],delete t[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eg(e){return e.tag===5||e.tag===3||e.tag===4}function ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=rs));else if(i!==4&&(e=e.child,e!==null))for(gd(e,t,r),e=e.sibling;e!==null;)gd(e,t,r),e=e.sibling}function yd(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(yd(e,t,r),e=e.sibling;e!==null;)yd(e,t,r),e=e.sibling}var tt=null,nr=!1;function Lr(e,t,r){for(r=r.child;r!==null;)Mg(e,t,r),r=r.sibling}function Mg(e,t,r){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(Os,r)}catch{}switch(r.tag){case 5:ct||oi(r,t);case 6:var i=tt,a=nr;tt=null,Lr(e,t,r),tt=i,nr=a,tt!==null&&(nr?(e=tt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):tt.removeChild(r.stateNode));break;case 18:tt!==null&&(nr?(e=tt,r=r.stateNode,e.nodeType===8?Xl(e.parentNode,r):e.nodeType===1&&Xl(e,r),ga(e)):Xl(tt,r.stateNode));break;case 4:i=tt,a=nr,tt=r.stateNode.containerInfo,nr=!0,Lr(e,t,r),tt=i,nr=a;break;case 0:case 11:case 14:case 15:if(!ct&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&fd(r,t,s),a=a.next}while(a!==i)}Lr(e,t,r);break;case 1:if(!ct&&(oi(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){Oe(r,t,c)}Lr(e,t,r);break;case 21:Lr(e,t,r);break;case 22:r.mode&1?(ct=(i=ct)||r.memoizedState!==null,Lr(e,t,r),ct=i):Lr(e,t,r);break;default:Lr(e,t,r)}}function dh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gx),t.forEach(function(i){var a=rv.bind(null,e,i);r.has(i)||(r.add(i),i.then(a,a))})}}function tr(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:tt=c.stateNode,nr=!1;break e;case 3:tt=c.stateNode.containerInfo,nr=!0;break e;case 4:tt=c.stateNode.containerInfo,nr=!0;break e}c=c.return}if(tt===null)throw Error(T(160));Mg(o,s,a),tt=null,nr=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(u){Oe(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tr(t,e),hr(e),i&4){try{na(3,e,e.return),Ks(3,e)}catch(C){Oe(e,e.return,C)}try{na(5,e,e.return)}catch(C){Oe(e,e.return,C)}}break;case 1:tr(t,e),hr(e),i&512&&r!==null&&oi(r,r.return);break;case 5:if(tr(t,e),hr(e),i&512&&r!==null&&oi(r,r.return),e.flags&32){var a=e.stateNode;try{pa(a,"")}catch(C){Oe(e,e.return,C)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Jf(a,o),Bc(c,s);var u=Bc(c,o);for(s=0;s<d.length;s+=2){var g=d[s],f=d[s+1];g==="style"?im(a,f):g==="dangerouslySetInnerHTML"?rm(a,f):g==="children"?pa(a,f):Dd(a,g,f,u)}switch(c){case"input":Ac(a,o);break;case"textarea":em(a,o);break;case"select":var x=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?ci(a,!!o.multiple,S,!1):x!==!!o.multiple&&(o.defaultValue!=null?ci(a,!!o.multiple,o.defaultValue,!0):ci(a,!!o.multiple,o.multiple?[]:"",!1))}a[ba]=o}catch(C){Oe(e,e.return,C)}}break;case 6:if(tr(t,e),hr(e),i&4){if(e.stateNode===null)throw Error(T(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(C){Oe(e,e.return,C)}}break;case 3:if(tr(t,e),hr(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ga(t.containerInfo)}catch(C){Oe(e,e.return,C)}break;case 4:tr(t,e),hr(e);break;case 13:tr(t,e),hr(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(vu=Ue())),i&4&&dh(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(ct=(u=ct)||g,tr(t,e),ct=u):tr(t,e),hr(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(O=e,g=e.child;g!==null;){for(f=O=g;O!==null;){switch(x=O,S=x.child,x.tag){case 0:case 11:case 14:case 15:na(4,x,x.return);break;case 1:oi(x,x.return);var j=x.stateNode;if(typeof j.componentWillUnmount=="function"){i=x,r=x.return;try{t=i,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(C){Oe(i,r,C)}}break;case 5:oi(x,x.return);break;case 22:if(x.memoizedState!==null){ph(f);continue}}S!==null?(S.return=x,O=S):ph(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=f.stateNode,d=f.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=nm("display",s))}catch(C){Oe(e,e.return,C)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(C){Oe(e,e.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tr(t,e),hr(e),i&4&&dh(e);break;case 21:break;default:tr(t,e),hr(e)}}function hr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Eg(r)){var i=r;break e}r=r.return}throw Error(T(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(pa(a,""),i.flags&=-33);var o=ch(e);yd(e,o,a);break;case 3:case 4:var s=i.stateNode.containerInfo,c=ch(e);gd(e,c,s);break;default:throw Error(T(161))}}catch(d){Oe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qx(e,t,r){O=e,Fg(e)}function Fg(e,t,r){for(var i=(e.mode&1)!==0;O!==null;){var a=O,o=a.child;if(a.tag===22&&i){var s=a.memoizedState!==null||co;if(!s){var c=a.alternate,d=c!==null&&c.memoizedState!==null||ct;c=co;var u=ct;if(co=s,(ct=d)&&!u)for(O=a;O!==null;)s=O,d=s.child,s.tag===22&&s.memoizedState!==null?hh(a):d!==null?(d.return=s,O=d):hh(a);for(;o!==null;)O=o,Fg(o),o=o.sibling;O=a,co=c,ct=u}uh(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,O=o):uh(e)}}function uh(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||Ks(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ct)if(r===null)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rr(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yp(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yp(t,s,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ct||t.flags&512&&md(t)}catch(x){Oe(t,t.return,x)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function ph(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function hh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ks(4,t)}catch(d){Oe(t,r,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(d){Oe(t,a,d)}}var o=t.return;try{md(t)}catch(d){Oe(t,o,d)}break;case 5:var s=t.return;try{md(t)}catch(d){Oe(t,s,d)}}}catch(d){Oe(t,t.return,d)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var Yx=Math.ceil,hs=Er.ReactCurrentDispatcher,yu=Er.ReactCurrentOwner,Gt=Er.ReactCurrentBatchConfig,de=0,Xe=null,Ge=null,rt=0,St=0,si=yn(0),Ye=0,za=null,Nn=0,Qs=0,xu=0,ia=null,vt=null,vu=0,ji=1/0,wr=null,fs=!1,xd=null,ln=null,uo=!1,Br=null,ms=0,aa=0,vd=null,_o=-1,Oo=0;function ht(){return de&6?Ue():_o!==-1?_o:_o=Ue()}function cn(e){return e.mode&1?de&2&&rt!==0?rt&-rt:Fx.transition!==null?(Oo===0&&(Oo=gm()),Oo):(e=ye,e!==0||(e=window.event,e=e===void 0?16:$m(e.type)),e):1}function lr(e,t,r,i){if(50<aa)throw aa=0,vd=null,Error(T(185));Aa(e,r,i),(!(de&2)||e!==Xe)&&(e===Xe&&(!(de&2)&&(Qs|=r),Ye===4&&Or(e,rt)),kt(e,i),r===1&&de===0&&!(t.mode&1)&&(ji=Ue()+500,Vs&&xn()))}function kt(e,t){var r=e.callbackNode;Fy(e,t);var i=Xo(e,e===Xe?rt:0);if(i===0)r!==null&&jp(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&jp(r),t===1)e.tag===0?Tx(fh.bind(null,e)):Hm(fh.bind(null,e)),zx(function(){!(de&6)&&xn()}),r=null;else{switch(ym(i)){case 1:r=Wd;break;case 4:r=fm;break;case 16:r=Zo;break;case 536870912:r=mm;break;default:r=Zo}r=Dg(r,Lg.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Lg(e,t){if(_o=-1,Oo=0,de&6)throw Error(T(327));var r=e.callbackNode;if(fi()&&e.callbackNode!==r)return null;var i=Xo(e,e===Xe?rt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=gs(e,i);else{t=i;var a=de;de|=2;var o=Ng();(Xe!==e||rt!==t)&&(wr=null,ji=Ue()+500,En(e,t));do try{Xx();break}catch(c){Rg(e,c)}while(!0);iu(),hs.current=o,de=a,Ge!==null?t=0:(Xe=null,rt=0,t=Ye)}if(t!==0){if(t===2&&(a=Gc(e),a!==0&&(i=a,t=wd(e,a))),t===1)throw r=za,En(e,0),Or(e,i),kt(e,Ue()),r;if(t===6)Or(e,i);else{if(a=e.current.alternate,!(i&30)&&!qx(a)&&(t=gs(e,i),t===2&&(o=Gc(e),o!==0&&(i=o,t=wd(e,o))),t===1))throw r=za,En(e,0),Or(e,i),kt(e,Ue()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(T(345));case 2:jn(e,vt,wr);break;case 3:if(Or(e,i),(i&130023424)===i&&(t=vu+500-Ue(),10<t)){if(Xo(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ht(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ed(jn.bind(null,e,vt,wr),t);break}jn(e,vt,wr);break;case 4:if(Or(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-sr(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Ue()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yx(i/1960))-i,10<i){e.timeoutHandle=ed(jn.bind(null,e,vt,wr),i);break}jn(e,vt,wr);break;case 5:jn(e,vt,wr);break;default:throw Error(T(329))}}}return kt(e,Ue()),e.callbackNode===r?Lg.bind(null,e):null}function wd(e,t){var r=ia;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=gs(e,t),e!==2&&(t=vt,vt=r,t!==null&&bd(t)),e}function bd(e){vt===null?vt=e:vt.push.apply(vt,e)}function qx(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],o=a.getSnapshot;a=a.value;try{if(!cr(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Or(e,t){for(t&=~xu,t&=~Qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-sr(t),i=1<<r;e[r]=-1,t&=~i}}function fh(e){if(de&6)throw Error(T(327));fi();var t=Xo(e,0);if(!(t&1))return kt(e,Ue()),null;var r=gs(e,t);if(e.tag!==0&&r===2){var i=Gc(e);i!==0&&(t=i,r=wd(e,i))}if(r===1)throw r=za,En(e,0),Or(e,t),kt(e,Ue()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,vt,wr),kt(e,Ue()),null}function wu(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(ji=Ue()+500,Vs&&xn())}}function An(e){Br!==null&&Br.tag===0&&!(de&6)&&fi();var t=de;de|=1;var r=Gt.transition,i=ye;try{if(Gt.transition=null,ye=1,e)return e()}finally{ye=i,Gt.transition=r,de=t,!(de&6)&&xn()}}function bu(){St=si.current,ke(si)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Cx(r)),Ge!==null)for(r=Ge.return;r!==null;){var i=r;switch(tu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ns();break;case 3:wi(),ke(jt),ke(ut),du();break;case 5:cu(i);break;case 4:wi();break;case 13:ke(Le);break;case 19:ke(Le);break;case 10:au(i.type._context);break;case 22:case 23:bu()}r=r.return}if(Xe=e,Ge=e=dn(e.current,null),rt=St=t,Ye=0,za=null,xu=Qs=Nn=0,vt=ia=null,zn!==null){for(t=0;t<zn.length;t++)if(r=zn[t],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,o=r.pending;if(o!==null){var s=o.next;o.next=a,i.next=s}r.pending=i}zn=null}return e}function Rg(e,t){do{var r=Ge;try{if(iu(),No.current=ps,us){for(var i=Ne.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}us=!1}if(Rn=0,Ze=Ke=Ne=null,ra=!1,ka=0,yu.current=null,r===null||r.return===null){Ye=1,za=t,Ge=null;break}e:{var o=e,s=r.return,c=r,d=t;if(t=rt,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,g=c,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=th(s);if(S!==null){S.flags&=-257,rh(S,s,c,o,t),S.mode&1&&eh(o,u,t),t=S,d=u;var j=t.updateQueue;if(j===null){var C=new Set;C.add(d),t.updateQueue=C}else j.add(d);break e}else{if(!(t&1)){eh(o,u,t),ju();break e}d=Error(T(426))}}else if(Pe&&c.mode&1){var w=th(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),rh(w,s,c,o,t),ru(bi(d,c));break e}}o=d=bi(d,c),Ye!==4&&(Ye=2),ia===null?ia=[o]:ia.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=yg(o,d,t);Qp(o,m);break e;case 1:c=d;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ln===null||!ln.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=xg(o,c,t);Qp(o,$);break e}}o=o.return}while(o!==null)}Ig(r)}catch(P){t=P,Ge===r&&r!==null&&(Ge=r=r.return);continue}break}while(!0)}function Ng(){var e=hs.current;return hs.current=ps,e===null?ps:e}function ju(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Xe===null||!(Nn&268435455)&&!(Qs&268435455)||Or(Xe,rt)}function gs(e,t){var r=de;de|=2;var i=Ng();(Xe!==e||rt!==t)&&(wr=null,En(e,t));do try{Zx();break}catch(a){Rg(e,a)}while(!0);if(iu(),de=r,hs.current=i,Ge!==null)throw Error(T(261));return Xe=null,rt=0,Ye}function Zx(){for(;Ge!==null;)Ag(Ge)}function Xx(){for(;Ge!==null&&!$y();)Ag(Ge)}function Ag(e){var t=Og(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?Ig(e):Ge=t,yu.current=null}function Ig(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Wx(r,t),r!==null){r.flags&=32767,Ge=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ge=null;return}}else if(r=Vx(r,t,St),r!==null){Ge=r;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function jn(e,t,r){var i=ye,a=Gt.transition;try{Gt.transition=null,ye=1,Jx(e,t,r,i)}finally{Gt.transition=a,ye=i}return null}function Jx(e,t,r,i){do fi();while(Br!==null);if(de&6)throw Error(T(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Ly(e,o),e===Xe&&(Ge=Xe=null,rt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||uo||(uo=!0,Dg(Zo,function(){return fi(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var s=ye;ye=1;var c=de;de|=4,yu.current=null,Kx(e,r),Tg(r,e),vx(Xc),Jo=!!Zc,Xc=Zc=null,e.current=r,Qx(r),ky(),de=c,ye=s,Gt.transition=o}else e.current=r;if(uo&&(uo=!1,Br=e,ms=a),o=e.pendingLanes,o===0&&(ln=null),zy(r.stateNode),kt(e,Ue()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(fs)throw fs=!1,e=xd,xd=null,e;return ms&1&&e.tag!==0&&fi(),o=e.pendingLanes,o&1?e===vd?aa++:(aa=0,vd=e):aa=0,xn(),null}function fi(){if(Br!==null){var e=ym(ms),t=Gt.transition,r=ye;try{if(Gt.transition=null,ye=16>e?16:e,Br===null)var i=!1;else{if(e=Br,Br=null,ms=0,de&6)throw Error(T(331));var a=de;for(de|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var c=o.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(O=u;O!==null;){var g=O;switch(g.tag){case 0:case 11:case 15:na(8,g,o)}var f=g.child;if(f!==null)f.return=g,O=f;else for(;O!==null;){g=O;var x=g.sibling,S=g.return;if(Pg(g),g===u){O=null;break}if(x!==null){x.return=S,O=x;break}O=S}}}var j=o.alternate;if(j!==null){var C=j.child;if(C!==null){j.child=null;do{var w=C.sibling;C.sibling=null,C=w}while(C!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:na(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,O=m;break e}O=o.return}}var p=e.current;for(O=p;O!==null;){s=O;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,O=y;else e:for(s=p;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ks(9,c)}}catch(P){Oe(c,c.return,P)}if(c===s){O=null;break e}var $=c.sibling;if($!==null){$.return=c.return,O=$;break e}O=c.return}}if(de=a,xn(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(Os,e)}catch{}i=!0}return i}finally{ye=r,Gt.transition=t}}return!1}function mh(e,t,r){t=bi(r,t),t=yg(e,t,1),e=sn(e,t,1),t=ht(),e!==null&&(Aa(e,1,t),kt(e,t))}function Oe(e,t,r){if(e.tag===3)mh(e,e,r);else for(;t!==null;){if(t.tag===3){mh(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ln===null||!ln.has(i))){e=bi(r,e),e=xg(t,e,1),t=sn(t,e,1),e=ht(),t!==null&&(Aa(t,1,e),kt(t,e));break}}t=t.return}}function ev(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,Xe===e&&(rt&r)===r&&(Ye===4||Ye===3&&(rt&130023424)===rt&&500>Ue()-vu?En(e,0):xu|=r),kt(e,t)}function _g(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var r=ht();e=zr(e,t),e!==null&&(Aa(e,t,r),kt(e,r))}function tv(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),_g(e,r)}function rv(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(T(314))}i!==null&&i.delete(t),_g(e,r)}var Og;Og=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)bt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return bt=!1,Ux(e,t,r);bt=!!(e.flags&131072)}else bt=!1,Pe&&t.flags&1048576&&Um(t,os,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Io(e,t),e=t.pendingProps;var a=yi(t,ut.current);hi(t,r),a=pu(null,t,i,e,a,r);var o=hu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(i)?(o=!0,is(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,su(t),a.updater=Gs,t.stateNode=a,a._reactInternals=t,sd(t,i,e,r),t=dd(null,t,i,!0,o,r)):(t.tag=0,Pe&&o&&eu(t),pt(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=iv(i),e=rr(i,e),a){case 0:t=cd(null,t,i,e,r);break e;case 1:t=ah(null,t,i,e,r);break e;case 11:t=nh(null,t,i,e,r);break e;case 14:t=ih(null,t,i,rr(i.type,e),r);break e}throw Error(T(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rr(i,a),cd(e,t,i,a,r);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rr(i,a),ah(e,t,i,a,r);case 3:e:{if(jg(t),e===null)throw Error(T(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Ym(e,t),cs(t,i,null,r);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=bi(Error(T(423)),t),t=oh(e,t,i,r,a);break e}else if(i!==a){a=bi(Error(T(424)),t),t=oh(e,t,i,r,a);break e}else for(Ct=on(t.stateNode.containerInfo.firstChild),Pt=t,Pe=!0,ir=null,r=Km(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xi(),i===a){t=Pr(e,t,r);break e}pt(e,t,i,r)}t=t.child}return t;case 5:return qm(t),e===null&&id(t),i=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,Jc(i,a)?s=null:o!==null&&Jc(i,o)&&(t.flags|=32),bg(e,t),pt(e,t,s,r),t.child;case 6:return e===null&&id(t),null;case 13:return $g(e,t,r);case 4:return lu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vi(t,null,i,r):pt(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rr(i,a),nh(e,t,i,a,r);case 7:return pt(e,t,t.pendingProps,r),t.child;case 8:return pt(e,t,t.pendingProps.children,r),t.child;case 12:return pt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,be(ss,i._currentValue),i._currentValue=s,o!==null)if(cr(o.value,s)){if(o.children===a.children&&!jt.current){t=Pr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var d=c.firstContext;d!==null;){if(d.context===i){if(o.tag===1){d=kr(-1,r&-r),d.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?d.next=d:(d.next=g.next,g.next=d),u.pending=d}}o.lanes|=r,d=o.alternate,d!==null&&(d.lanes|=r),ad(o.return,r,t),c.lanes|=r;break}d=d.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),ad(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}pt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,hi(t,r),a=Qt(a),i=i(a),t.flags|=1,pt(e,t,i,r),t.child;case 14:return i=t.type,a=rr(i,t.pendingProps),a=rr(i.type,a),ih(e,t,i,a,r);case 15:return vg(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:rr(i,a),Io(e,t),t.tag=1,$t(i)?(e=!0,is(t)):e=!1,hi(t,r),gg(t,i,a),sd(t,i,a,r),dd(null,t,i,!0,e,r);case 19:return kg(e,t,r);case 22:return wg(e,t,r)}throw Error(T(156,t.tag))};function Dg(e,t){return hm(e,t)}function nv(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,r,i){return new nv(e,t,r,i)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iv(e){if(typeof e=="function")return $u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hd)return 11;if(e===Ud)return 14}return 2}function dn(e,t){var r=e.alternate;return r===null?(r=Wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Do(e,t,r,i,a,o){var s=2;if(i=e,typeof e=="function")$u(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zn:return Mn(r.children,a,o,t);case Bd:s=8,a|=8;break;case Tc:return e=Wt(12,r,t,a|2),e.elementType=Tc,e.lanes=o,e;case Fc:return e=Wt(13,r,t,a),e.elementType=Fc,e.lanes=o,e;case Lc:return e=Wt(19,r,t,a),e.elementType=Lc,e.lanes=o,e;case qf:return Ys(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qf:s=10;break e;case Yf:s=9;break e;case Hd:s=11;break e;case Ud:s=14;break e;case Ar:s=16,i=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Wt(s,r,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Mn(e,t,r,i){return e=Wt(7,e,i,t),e.lanes=r,e}function Ys(e,t,r,i){return e=Wt(22,e,i,t),e.elementType=qf,e.lanes=r,e.stateNode={isHidden:!1},e}function oc(e,t,r){return e=Wt(6,e,null,t),e.lanes=r,e}function sc(e,t,r){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function av(e,t,r,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ku(e,t,r,i,a,o,s,c,d){return e=new av(e,t,r,c,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(o),e}function ov(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Bg(e){if(!e)return fn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if($t(r))return Bm(e,r,t)}return t}function Hg(e,t,r,i,a,o,s,c,d){return e=ku(r,i,!0,e,a,o,s,c,d),e.context=Bg(null),r=e.current,i=ht(),a=cn(r),o=kr(i,a),o.callback=t??null,sn(r,o,a),e.current.lanes=a,Aa(e,a,i),kt(e,i),e}function qs(e,t,r,i){var a=t.current,o=ht(),s=cn(a);return r=Bg(r),t.context===null?t.context=r:t.pendingContext=r,t=kr(o,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=sn(a,t,s),e!==null&&(lr(e,a,s,o),Ro(e,a,s)),s}function ys(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Su(e,t){gh(e,t),(e=e.alternate)&&gh(e,t)}function sv(){return null}var Ug=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cu(e){this._internalRoot=e}Zs.prototype.render=Cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));qs(e,t,null,null)};Zs.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){qs(null,e,null,null)}),t[Cr]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=wm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<_r.length&&t!==0&&t<_r[r].priority;r++);_r.splice(r,0,e),r===0&&jm(e)}};function zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yh(){}function lv(e,t,r,i,a){if(a){if(typeof i=="function"){var o=i;i=function(){var u=ys(s);o.call(u)}}var s=Hg(t,i,e,0,null,!1,!1,"",yh);return e._reactRootContainer=s,e[Cr]=s.current,va(e.nodeType===8?e.parentNode:e),An(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var c=i;i=function(){var u=ys(d);c.call(u)}}var d=ku(e,0,!1,null,null,!1,!1,"",yh);return e._reactRootContainer=d,e[Cr]=d.current,va(e.nodeType===8?e.parentNode:e),An(function(){qs(t,d,r,i)}),d}function Js(e,t,r,i,a){var o=r._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var c=a;a=function(){var d=ys(s);c.call(d)}}qs(t,s,e,a)}else s=lv(r,t,e,a,i);return ys(s)}xm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ki(t.pendingLanes);r!==0&&(Gd(t,r|1),kt(t,Ue()),!(de&6)&&(ji=Ue()+500,xn()))}break;case 13:An(function(){var i=zr(e,1);if(i!==null){var a=ht();lr(i,e,1,a)}}),Su(e,1)}};Kd=function(e){if(e.tag===13){var t=zr(e,134217728);if(t!==null){var r=ht();lr(t,e,134217728,r)}Su(e,134217728)}};vm=function(e){if(e.tag===13){var t=cn(e),r=zr(e,t);if(r!==null){var i=ht();lr(r,e,t,i)}Su(e,t)}};wm=function(){return ye};bm=function(e,t){var r=ye;try{return ye=e,t()}finally{ye=r}};Uc=function(e,t,r){switch(t){case"input":if(Ac(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=Us(i);if(!a)throw Error(T(90));Xf(i),Ac(i,a)}}}break;case"textarea":em(e,r);break;case"select":t=r.value,t!=null&&ci(e,!!r.multiple,t,!1)}};sm=wu;lm=An;var cv={usingClientEntryPoint:!1,Events:[_a,ti,Us,am,om,wu]},Hi={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dv={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=um(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Os=po.inject(dv),gr=po}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv;Ft.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(t))throw Error(T(200));return ov(e,t,null,r)};Ft.createRoot=function(e,t){if(!zu(e))throw Error(T(299));var r=!1,i="",a=Ug;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ku(e,1,!1,null,null,r,!1,i,a),e[Cr]=t.current,va(e.nodeType===8?e.parentNode:e),new Cu(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=um(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return An(e)};Ft.hydrate=function(e,t,r){if(!Xs(t))throw Error(T(200));return Js(null,e,t,!0,r)};Ft.hydrateRoot=function(e,t,r){if(!zu(e))throw Error(T(405));var i=r!=null&&r.hydratedSources||null,a=!1,o="",s=Ug;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Hg(t,null,e,1,r??null,a,!1,o,s),e[Cr]=t.current,va(e),i)for(e=0;e<i.length;e++)r=i[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Zs(t)};Ft.render=function(e,t,r){if(!Xs(t))throw Error(T(200));return Js(null,e,t,!1,r)};Ft.unmountComponentAtNode=function(e){if(!Xs(e))throw Error(T(40));return e._reactRootContainer?(An(function(){Js(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};Ft.unstable_batchedUpdates=wu;Ft.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Xs(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Js(e,t,r,!1,i)};Ft.version="18.3.1-next-f1338f8080-20240426";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(e){console.error(e)}}Vg(),Vf.exports=Ft;var uv=Vf.exports,xh=uv;Ec.createRoot=xh.createRoot,Ec.hydrateRoot=xh.hydrateRoot;const pv="modulepreload",hv=function(e){return"/LaFranciaGO/"+e},vh={},fv=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(r.map(d=>{if(d=hv(d),d in vh)return;vh[d]=!0;const u=d.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":pv,u||(f.as="script"),f.crossOrigin="",f.href=d,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((x,S)=>{f.addEventListener("load",x),f.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return a.then(s=>{for(const c of s||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};function mv(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e;let c,d;const u=async(f=!0)=>{await d};async function g(){if("serviceWorker"in navigator){if(c=await fv(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(f=>{s==null||s(f)}),!c)return;c.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),c.addEventListener("installed",f=>{f.isUpdate||i==null||i()}),c.register({immediate:t}).then(f=>{o?o("/LaFranciaGO/sw.js",f):a==null||a(f)}).catch(f=>{s==null||s(f)})}}return d=g(),u}/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Pa.apply(null,arguments)}var Hr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hr||(Hr={}));const wh="popstate";function gv(e){e===void 0&&(e={});function t(a,o){let{pathname:s="/",search:c="",hash:d=""}=Hn(a.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),jd("",{pathname:s,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){let s=a.document.querySelector("base"),c="";if(s&&s.getAttribute("href")){let d=a.location.href,u=d.indexOf("#");c=u===-1?d:d.slice(0,u)}return c+"#"+(typeof o=="string"?o:xs(o))}function i(a,o){el(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return xv(t,r,i,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function el(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yv(){return Math.random().toString(36).substr(2,8)}function bh(e,t){return{usr:e.state,key:e.key,idx:t}}function jd(e,t,r,i){return r===void 0&&(r=null),Pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hn(t):t,{state:r,key:t&&t.key||i||yv()})}function xs(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Hn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function xv(e,t,r,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,s=a.history,c=Hr.Pop,d=null,u=g();u==null&&(u=0,s.replaceState(Pa({},s.state,{idx:u}),""));function g(){return(s.state||{idx:null}).idx}function f(){c=Hr.Pop;let w=g(),m=w==null?null:w-u;u=w,d&&d({action:c,location:C.location,delta:m})}function x(w,m){c=Hr.Push;let p=jd(C.location,w,m);r&&r(p,w),u=g()+1;let y=bh(p,u),$=C.createHref(p);try{s.pushState(y,"",$)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign($)}o&&d&&d({action:c,location:C.location,delta:1})}function S(w,m){c=Hr.Replace;let p=jd(C.location,w,m);r&&r(p,w),u=g();let y=bh(p,u),$=C.createHref(p);s.replaceState(y,"",$),o&&d&&d({action:c,location:C.location,delta:0})}function j(w){let m=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof w=="string"?w:xs(w);return p=p.replace(/ $/,"%20"),Ae(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let C={get action(){return c},get location(){return e(a,s)},listen(w){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(wh,f),d=w,()=>{a.removeEventListener(wh,f),d=null}},createHref(w){return t(a,w)},createURL:j,encodeLocation(w){let m=j(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:S,go(w){return s.go(w)}};return C}var jh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jh||(jh={}));function vv(e,t,r){return r===void 0&&(r="/"),wv(e,t,r)}function wv(e,t,r,i){let a=typeof t=="string"?Hn(t):t,o=$i(a.pathname||"/",r);if(o==null)return null;let s=Wg(e);bv(s);let c=null,d=Fv(o);for(let u=0;c==null&&u<s.length;++u)c=Mv(s[u],d);return c}function Wg(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let a=(o,s,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};d.relativePath.startsWith("/")&&(Ae(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let u=un([i,d.relativePath]),g=r.concat(d);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wg(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Pv(u,o.index),routesMeta:g})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,s);else for(let d of Gg(o.path))a(o,s,d)}),t}function Gg(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let s=Gg(i.join("/")),c=[];return c.push(...s.map(d=>d===""?o:[o,d].join("/"))),a&&c.push(...s),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function bv(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ev(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const jv=/^:[\w-]+$/,$v=3,kv=2,Sv=1,Cv=10,zv=-2,$h=e=>e==="*";function Pv(e,t){let r=e.split("/"),i=r.length;return r.some($h)&&(i+=zv),t&&(i+=kv),r.filter(a=>!$h(a)).reduce((a,o)=>a+(jv.test(o)?$v:o===""?Sv:Cv),i)}function Ev(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function Mv(e,t,r){let{routesMeta:i}=e,a={},o="/",s=[];for(let c=0;c<i.length;++c){let d=i[c],u=c===i.length-1,g=o==="/"?t:t.slice(o.length)||"/",f=$d({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},g),x=d.route;if(!f)return null;Object.assign(a,f.params),s.push({params:a,pathname:un([o,f.pathname]),pathnameBase:Iv(un([o,f.pathnameBase])),route:x}),f.pathnameBase!=="/"&&(o=un([o,f.pathnameBase]))}return s}function $d(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=Tv(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:i.reduce((u,g,f)=>{let{paramName:x,isOptional:S}=g;if(x==="*"){let C=c[f]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const j=c[f];return S&&!j?u[x]=void 0:u[x]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Tv(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),el(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function Fv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return el(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $i(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}const Lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rv=e=>Lv.test(e);function Nv(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:a=""}=typeof e=="string"?Hn(e):e,o;if(r)if(Rv(r))o=r;else{if(r.includes("//")){let s=r;r=Kg(r),el(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=kh(r.substring(1),"/"):o=kh(r,t)}else o=t;return{pathname:o,search:_v(i),hash:Ov(a)}}function kh(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function lc(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Av(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Pu(e,t){let r=Av(e);return t?r.map((i,a)=>a===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Eu(e,t,r,i){i===void 0&&(i=!1);let a;typeof e=="string"?a=Hn(e):(a=Pa({},e),Ae(!a.pathname||!a.pathname.includes("?"),lc("?","pathname","search",a)),Ae(!a.pathname||!a.pathname.includes("#"),lc("#","pathname","hash",a)),Ae(!a.search||!a.search.includes("#"),lc("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,c;if(s==null)c=r;else{let f=t.length-1;if(!i&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),f-=1;a.pathname=x.join("/")}c=f>=0?t[f]:"/"}let d=Nv(a,c),u=s&&s!=="/"&&s.endsWith("/"),g=(o||s===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(u||g)&&(d.pathname+="/"),d}const Kg=e=>e.replace(/\/\/+/g,"/"),un=e=>Kg(e.join("/")),Iv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ov=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qg=["post","put","patch","delete"];new Set(Qg);const Bv=["get",...Qg];new Set(Bv);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ea.apply(null,arguments)}const tl=v.createContext(null),Yg=v.createContext(null),Mr=v.createContext(null),rl=v.createContext(null),Tr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),qg=v.createContext(null);function Hv(e,t){let{relative:r}=t===void 0?{}:t;Ti()||Ae(!1);let{basename:i,navigator:a}=v.useContext(Mr),{hash:o,pathname:s,search:c}=il(e,{relative:r}),d=s;return i!=="/"&&(d=s==="/"?i:un([i,s])),a.createHref({pathname:d,search:c,hash:o})}function Ti(){return v.useContext(rl)!=null}function Un(){return Ti()||Ae(!1),v.useContext(rl).location}function Zg(e){v.useContext(Mr).static||v.useLayoutEffect(e)}function nl(){let{isDataRoute:e}=v.useContext(Tr);return e?t2():Uv()}function Uv(){Ti()||Ae(!1);let e=v.useContext(tl),{basename:t,future:r,navigator:i}=v.useContext(Mr),{matches:a}=v.useContext(Tr),{pathname:o}=Un(),s=JSON.stringify(Pu(a,r.v7_relativeSplatPath)),c=v.useRef(!1);return Zg(()=>{c.current=!0}),v.useCallback(function(u,g){if(g===void 0&&(g={}),!c.current)return;if(typeof u=="number"){i.go(u);return}let f=Eu(u,JSON.parse(s),o,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:un([t,f.pathname])),(g.replace?i.replace:i.push)(f,g.state,g)},[t,i,s,o,e])}function Xg(){let{matches:e}=v.useContext(Tr),t=e[e.length-1];return t?t.params:{}}function il(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=v.useContext(Mr),{matches:a}=v.useContext(Tr),{pathname:o}=Un(),s=JSON.stringify(Pu(a,i.v7_relativeSplatPath));return v.useMemo(()=>Eu(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function Vv(e,t){return Wv(e,t)}function Wv(e,t,r,i){Ti()||Ae(!1);let{navigator:a}=v.useContext(Mr),{matches:o}=v.useContext(Tr),s=o[o.length-1],c=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let u=Un(),g;if(t){var f;let w=typeof t=="string"?Hn(t):t;d==="/"||(f=w.pathname)!=null&&f.startsWith(d)||Ae(!1),g=w}else g=u;let x=g.pathname||"/",S=x;if(d!=="/"){let w=d.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=vv(e,{pathname:S}),C=qv(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:un([d,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:un([d,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,r,i);return t&&C?v.createElement(rl.Provider,{value:{location:Ea({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Hr.Pop}},C):C}function Gv(){let e=e2(),t=Dv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:a},r):null,null)}const Kv=v.createElement(Gv,null);class Qv extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(Tr.Provider,{value:this.props.routeContext},v.createElement(qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yv(e){let{routeContext:t,match:r,children:i}=e,a=v.useContext(tl);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Tr.Provider,{value:t},i)}function qv(e,t,r,i){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=i)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,c=(a=r)==null?void 0:a.errors;if(c!=null){let g=s.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);g>=0||Ae(!1),s=s.slice(0,Math.min(s.length,g+1))}let d=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let g=0;g<s.length;g++){let f=s[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=g),f.route.id){let{loaderData:x,errors:S}=r,j=f.route.loader&&x[f.route.id]===void 0&&(!S||S[f.route.id]===void 0);if(f.route.lazy||j){d=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((g,f,x)=>{let S,j=!1,C=null,w=null;r&&(S=c&&f.route.id?c[f.route.id]:void 0,C=f.route.errorElement||Kv,d&&(u<0&&x===0?(r2("route-fallback"),j=!0,w=null):u===x&&(j=!0,w=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,x+1)),p=()=>{let y;return S?y=C:j?y=w:f.route.Component?y=v.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=g,v.createElement(Yv,{match:f,routeContext:{outlet:g,matches:m,isDataRoute:r!=null},children:y})};return r&&(f.route.ErrorBoundary||f.route.errorElement||x===0)?v.createElement(Qv,{location:r.location,revalidation:r.revalidation,component:C,error:S,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Jg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jg||{}),e0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(e0||{});function Zv(e){let t=v.useContext(tl);return t||Ae(!1),t}function Xv(e){let t=v.useContext(Yg);return t||Ae(!1),t}function Jv(e){let t=v.useContext(Tr);return t||Ae(!1),t}function t0(e){let t=Jv(),r=t.matches[t.matches.length-1];return r.route.id||Ae(!1),r.route.id}function e2(){var e;let t=v.useContext(qg),r=Xv(),i=t0();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function t2(){let{router:e}=Zv(Jg.UseNavigateStable),t=t0(e0.UseNavigateStable),r=v.useRef(!1);return Zg(()=>{r.current=!0}),v.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ea({fromRouteId:t},o)))},[e,t])}const Sh={};function r2(e,t,r){Sh[e]||(Sh[e]=!0)}function n2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function cc(e){let{to:t,replace:r,state:i,relative:a}=e;Ti()||Ae(!1);let{future:o,static:s}=v.useContext(Mr),{matches:c}=v.useContext(Tr),{pathname:d}=Un(),u=nl(),g=Eu(t,Pu(c,o.v7_relativeSplatPath),d,a==="path"),f=JSON.stringify(g);return v.useEffect(()=>u(JSON.parse(f),{replace:r,state:i,relative:a}),[u,f,a,r,i]),null}function et(e){Ae(!1)}function i2(e){let{basename:t="/",children:r=null,location:i,navigationType:a=Hr.Pop,navigator:o,static:s=!1,future:c}=e;Ti()&&Ae(!1);let d=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:d,navigator:o,static:s,future:Ea({v7_relativeSplatPath:!1},c)}),[d,c,o,s]);typeof i=="string"&&(i=Hn(i));let{pathname:g="/",search:f="",hash:x="",state:S=null,key:j="default"}=i,C=v.useMemo(()=>{let w=$i(g,d);return w==null?null:{location:{pathname:w,search:f,hash:x,state:S,key:j},navigationType:a}},[d,g,f,x,S,j,a]);return C==null?null:v.createElement(Mr.Provider,{value:u},v.createElement(rl.Provider,{children:r,value:C}))}function a2(e){let{children:t,location:r}=e;return Vv(kd(t),r)}new Promise(()=>{});function kd(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(i,a)=>{if(!v.isValidElement(i))return;let o=[...t,a];if(i.type===v.Fragment){r.push.apply(r,kd(i.props.children,o));return}i.type!==et&&Ae(!1),!i.props.index||!i.props.children||Ae(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=kd(i.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},vs.apply(null,arguments)}function r0(e,t){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function o2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s2(e,t){return e.button===0&&(!t||t==="_self")&&!o2(e)}const l2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],c2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],d2="6";try{window.__reactRouterVersion=d2}catch{}const u2=v.createContext({isTransitioning:!1}),p2="startTransition",Ch=ey[p2];function h2(e){let{basename:t,children:r,future:i,window:a}=e,o=v.useRef();o.current==null&&(o.current=gv({window:a,v5Compat:!0}));let s=o.current,[c,d]=v.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},g=v.useCallback(f=>{u&&Ch?Ch(()=>d(f)):d(f)},[d,u]);return v.useLayoutEffect(()=>s.listen(g),[s,g]),v.useEffect(()=>n2(i),[i]),v.createElement(i2,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:i})}const f2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",m2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zt=v.forwardRef(function(t,r){let{onClick:i,relative:a,reloadDocument:o,replace:s,state:c,target:d,to:u,preventScrollReset:g,viewTransition:f}=t,x=r0(t,l2),{basename:S}=v.useContext(Mr),j,C=!1;if(typeof u=="string"&&m2.test(u)&&(j=u,f2))try{let y=new URL(window.location.href),$=u.startsWith("//")?new URL(y.protocol+u):new URL(u),P=$i($.pathname,S);$.origin===y.origin&&P!=null?u=P+$.search+$.hash:C=!0}catch{}let w=Hv(u,{relative:a}),m=y2(u,{replace:s,state:c,target:d,preventScrollReset:g,relative:a,viewTransition:f});function p(y){i&&i(y),y.defaultPrevented||m(y)}return v.createElement("a",vs({},x,{href:j||w,onClick:C||o?i:p,ref:r,target:d}))}),Da=v.forwardRef(function(t,r){let{"aria-current":i="page",caseSensitive:a=!1,className:o="",end:s=!1,style:c,to:d,viewTransition:u,children:g}=t,f=r0(t,c2),x=il(d,{relative:f.relative}),S=Un(),j=v.useContext(Yg),{navigator:C,basename:w}=v.useContext(Mr),m=j!=null&&x2(x)&&u===!0,p=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,y=S.pathname,$=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;a||(y=y.toLowerCase(),$=$?$.toLowerCase():null,p=p.toLowerCase()),$&&w&&($=$i($,w)||$);const P=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let L=y===p||!s&&y.startsWith(p)&&y.charAt(P)==="/",N=$!=null&&($===p||!s&&$.startsWith(p)&&$.charAt(p.length)==="/"),I={isActive:L,isPending:N,isTransitioning:m},W=L?i:void 0,D;typeof o=="function"?D=o(I):D=[o,L?"active":null,N?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let ge=typeof c=="function"?c(I):c;return v.createElement(Zt,vs({},f,{"aria-current":W,className:D,ref:r,style:ge,to:d,viewTransition:u}),typeof g=="function"?g(I):g)});var Sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sd||(Sd={}));var zh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zh||(zh={}));function g2(e){let t=v.useContext(tl);return t||Ae(!1),t}function y2(e,t){let{target:r,replace:i,state:a,preventScrollReset:o,relative:s,viewTransition:c}=t===void 0?{}:t,d=nl(),u=Un(),g=il(e,{relative:s});return v.useCallback(f=>{if(s2(f,r)){f.preventDefault();let x=i!==void 0?i:xs(u)===xs(g);d(e,{replace:x,state:a,preventScrollReset:o,relative:s,viewTransition:c})}},[u,d,g,i,a,r,e,o,s,c])}function x2(e,t){t===void 0&&(t={});let r=v.useContext(u2);r==null&&Ae(!1);let{basename:i}=g2(Sd.useViewTransitionState),a=il(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=$i(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=$i(r.nextLocation.pathname,i)||r.nextLocation.pathname;return $d(a.pathname,s)!=null||$d(a.pathname,o)!=null}var n0={exports:{}},we={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu=Symbol.for("react.transitional.element"),Tu=Symbol.for("react.portal"),al=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),ll=Symbol.for("react.consumer"),cl=Symbol.for("react.context"),dl=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),fl=Symbol.for("react.lazy"),v2=Symbol.for("react.view_transition"),w2=Symbol.for("react.client.reference");function Xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mu:switch(e=e.type,e){case al:case sl:case ol:case ul:case pl:case v2:return e;default:switch(e=e&&e.$$typeof,e){case cl:case dl:case fl:case hl:return e;case ll:return e;default:return t}}case Tu:return t}}}we.ContextConsumer=ll;we.ContextProvider=cl;we.Element=Mu;we.ForwardRef=dl;we.Fragment=al;we.Lazy=fl;we.Memo=hl;we.Portal=Tu;we.Profiler=sl;we.StrictMode=ol;we.Suspense=ul;we.SuspenseList=pl;we.isContextConsumer=function(e){return Xt(e)===ll};we.isContextProvider=function(e){return Xt(e)===cl};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mu};we.isForwardRef=function(e){return Xt(e)===dl};we.isFragment=function(e){return Xt(e)===al};we.isLazy=function(e){return Xt(e)===fl};we.isMemo=function(e){return Xt(e)===hl};we.isPortal=function(e){return Xt(e)===Tu};we.isProfiler=function(e){return Xt(e)===sl};we.isStrictMode=function(e){return Xt(e)===ol};we.isSuspense=function(e){return Xt(e)===ul};we.isSuspenseList=function(e){return Xt(e)===pl};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===al||e===sl||e===ol||e===ul||e===pl||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===hl||e.$$typeof===cl||e.$$typeof===ll||e.$$typeof===dl||e.$$typeof===w2||e.getModuleId!==void 0)};we.typeOf=Xt;n0.exports=we;var i0=n0.exports;function b2(e){function t(E,b,M,_,k){for(var X=0,R=0,he=0,ee=0,re,K,Ce=0,Ve=0,te,Fe=te=re=0,ue=0,We=0,vn=0,He=0,wn=M.length,Fr=wn-1,xt,G="",ze="",Gn="",fe="",ur;ue<wn;){if(K=M.charCodeAt(ue),ue===Fr&&R+ee+he+X!==0&&(R!==0&&(K=R===47?10:47),ee=he=X=0,wn++,Fr++),R+ee+he+X===0){if(ue===Fr&&(0<We&&(G=G.replace(x,"")),0<G.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:G+=M.charAt(ue)}K=59}switch(K){case 123:for(G=G.trim(),re=G.charCodeAt(0),te=1,He=++ue;ue<wn;){switch(K=M.charCodeAt(ue)){case 123:te++;break;case 125:te--;break;case 47:switch(K=M.charCodeAt(ue+1)){case 42:case 47:e:{for(Fe=ue+1;Fe<Fr;++Fe)switch(M.charCodeAt(Fe)){case 47:if(K===42&&M.charCodeAt(Fe-1)===42&&ue+2!==Fe){ue=Fe+1;break e}break;case 10:if(K===47){ue=Fe+1;break e}}ue=Fe}}break;case 91:K++;case 40:K++;case 34:case 39:for(;ue++<Fr&&M.charCodeAt(ue)!==K;);}if(te===0)break;ue++}switch(te=M.substring(He,ue),re===0&&(re=(G=G.replace(f,"").trim()).charCodeAt(0)),re){case 64:switch(0<We&&(G=G.replace(x,"")),K=G.charCodeAt(1),K){case 100:case 109:case 115:case 45:We=b;break;default:We=ve}if(te=t(b,We,te,K,k+1),He=te.length,0<A&&(We=r(ve,G,vn),ur=c(3,te,We,b,Te,pe,He,K,k,_),G=We.join(""),ur!==void 0&&(He=(te=ur.trim()).length)===0&&(K=0,te="")),0<He)switch(K){case 115:G=G.replace(L,s);case 100:case 109:case 45:te=G+"{"+te+"}";break;case 107:G=G.replace(p,"$1 $2"),te=G+"{"+te+"}",te=De===1||De===2&&o("@"+te,3)?"@-webkit-"+te+"@"+te:"@"+te;break;default:te=G+te,_===112&&(te=(ze+=te,""))}else te="";break;default:te=t(b,r(b,G,vn),te,_,k+1)}Gn+=te,te=vn=We=Fe=re=0,G="",K=M.charCodeAt(++ue);break;case 125:case 59:if(G=(0<We?G.replace(x,""):G).trim(),1<(He=G.length))switch(Fe===0&&(re=G.charCodeAt(0),re===45||96<re&&123>re)&&(He=(G=G.replace(" ",":")).length),0<A&&(ur=c(1,G,b,E,Te,pe,ze.length,_,k,_))!==void 0&&(He=(G=ur.trim()).length)===0&&(G="\0\0"),re=G.charCodeAt(0),K=G.charCodeAt(1),re){case 0:break;case 64:if(K===105||K===99){fe+=G+M.charAt(ue);break}default:G.charCodeAt(He-1)!==58&&(ze+=a(G,re,K,G.charCodeAt(2)))}vn=We=Fe=re=0,G="",K=M.charCodeAt(++ue)}}switch(K){case 13:case 10:R===47?R=0:1+re===0&&_!==107&&0<G.length&&(We=1,G+="\0"),0<A*B&&c(0,G,b,E,Te,pe,ze.length,_,k,_),pe=1,Te++;break;case 59:case 125:if(R+ee+he+X===0){pe++;break}default:switch(pe++,xt=M.charAt(ue),K){case 9:case 32:if(ee+X+R===0)switch(Ce){case 44:case 58:case 9:case 32:xt="";break;default:K!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:ee+R+X===0&&(We=vn=1,xt="\f"+xt);break;case 108:if(ee+R+X+_e===0&&0<Fe)switch(ue-Fe){case 2:Ce===112&&M.charCodeAt(ue-3)===58&&(_e=Ce);case 8:Ve===111&&(_e=Ve)}break;case 58:ee+R+X===0&&(Fe=ue);break;case 44:R+he+ee+X===0&&(We=1,xt+="\r");break;case 34:case 39:R===0&&(ee=ee===K?0:ee===0?K:ee);break;case 91:ee+R+he===0&&X++;break;case 93:ee+R+he===0&&X--;break;case 41:ee+R+X===0&&he--;break;case 40:if(ee+R+X===0){if(re===0)switch(2*Ce+3*Ve){case 533:break;default:re=1}he++}break;case 64:R+he+ee+X+Fe+te===0&&(te=1);break;case 42:case 47:if(!(0<ee+X+he))switch(R){case 0:switch(2*K+3*M.charCodeAt(ue+1)){case 235:R=47;break;case 220:He=ue,R=42}break;case 42:K===47&&Ce===42&&He+2!==ue&&(M.charCodeAt(He+2)===33&&(ze+=M.substring(He,ue+1)),xt="",R=0)}}R===0&&(G+=xt)}Ve=Ce,Ce=K,ue++}if(He=ze.length,0<He){if(We=b,0<A&&(ur=c(2,ze,We,E,Te,pe,He,_,k,_),ur!==void 0&&(ze=ur).length===0))return fe+ze+Gn;if(ze=We.join(",")+"{"+ze+"}",De*_e!==0){switch(De!==2||o(ze,2)||(_e=0),_e){case 111:ze=ze.replace($,":-moz-$1")+ze;break;case 112:ze=ze.replace(y,"::-webkit-input-$1")+ze.replace(y,"::-moz-$1")+ze.replace(y,":-ms-input-$1")+ze}_e=0}}return fe+ze+Gn}function r(E,b,M){var _=b.trim().split(w);b=_;var k=_.length,X=E.length;switch(X){case 0:case 1:var R=0;for(E=X===0?"":E[0]+" ";R<k;++R)b[R]=i(E,b[R],M).trim();break;default:var he=R=0;for(b=[];R<k;++R)for(var ee=0;ee<X;++ee)b[he++]=i(E[ee]+" ",_[R],M).trim()}return b}function i(E,b,M){var _=b.charCodeAt(0);switch(33>_&&(_=(b=b.trim()).charCodeAt(0)),_){case 38:return b.replace(m,"$1"+E.trim());case 58:return E.trim()+b.replace(m,"$1"+E.trim());default:if(0<1*M&&0<b.indexOf("\f"))return b.replace(m,(E.charCodeAt(0)===58?"":"$1")+E.trim())}return E+b}function a(E,b,M,_){var k=E+";",X=2*b+3*M+4*_;if(X===944){E=k.indexOf(":",9)+1;var R=k.substring(E,k.length-1).trim();return R=k.substring(0,E).trim()+R+";",De===1||De===2&&o(R,1)?"-webkit-"+R+R:R}if(De===0||De===2&&!o(k,1))return k;switch(X){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(ge,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return R=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+k+"-ms-flex-pack"+R+k;case 1005:return j.test(k)?k.replace(S,":-webkit-")+k.replace(S,":-moz-")+k:k;case 1e3:switch(R=k.substring(13).trim(),b=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(b)){case 226:R=k.replace(P,"tb");break;case 232:R=k.replace(P,"tb-rl");break;case 220:R=k.replace(P,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+R+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(b=(k=E).length-10,R=(k.charCodeAt(b)===33?k.substring(0,b):k).substring(E.indexOf(":",7)+1).trim(),X=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:k=k.replace(R,"-webkit-"+R)+";"+k;break;case 207:case 102:k=k.replace(R,"-webkit-"+(102<X?"inline-":"")+"box")+";"+k.replace(R,"-webkit-"+R)+";"+k.replace(R,"-ms-"+R+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return R=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+R+"-ms-flex-"+R+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(I,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(I,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(D.test(E)===!0)return(R=E.substring(E.indexOf(":")+1)).charCodeAt(0)===115?a(E.replace("stretch","fill-available"),b,M,_).replace(":fill-available",":stretch"):k.replace(R,"-webkit-"+R)+k.replace(R,"-moz-"+R.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,M+_===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+k}return k}function o(E,b){var M=E.indexOf(b===1?":":"{"),_=E.substring(0,b!==3?M:10);return M=E.substring(M+1,E.length-1),V(b!==2?_:_.replace(W,"$1"),M,b)}function s(E,b){var M=a(b,b.charCodeAt(0),b.charCodeAt(1),b.charCodeAt(2));return M!==b+";"?M.replace(N," or ($1)").substring(4):"("+b+")"}function c(E,b,M,_,k,X,R,he,ee,re){for(var K=0,Ce=b,Ve;K<A;++K)switch(Ve=Be[K].call(g,E,Ce,M,_,k,X,R,he,ee,re)){case void 0:case!1:case!0:case null:break;default:Ce=Ve}if(Ce!==b)return Ce}function d(E){switch(E){case void 0:case null:A=Be.length=0;break;default:if(typeof E=="function")Be[A++]=E;else if(typeof E=="object")for(var b=0,M=E.length;b<M;++b)d(E[b]);else B=!!E|0}return d}function u(E){return E=E.prefix,E!==void 0&&(V=null,E?typeof E!="function"?De=1:(De=2,V=E):De=0),u}function g(E,b){var M=E;if(33>M.charCodeAt(0)&&(M=M.trim()),oe=M,M=[oe],0<A){var _=c(-1,b,M,M,Te,pe,0,0,0,0);_!==void 0&&typeof _=="string"&&(b=_)}var k=t(ve,M,b,0,0);return 0<A&&(_=c(-2,k,M,M,Te,pe,k.length,0,0,0),_!==void 0&&(k=_)),oe="",_e=0,pe=Te=1,k}var f=/^\0+/g,x=/[\0\r\f]/g,S=/: */g,j=/zoo|gra/,C=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,$=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,I=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,ge=/([^-])(image-set\()/,pe=1,Te=1,_e=0,De=1,ve=[],Be=[],A=0,V=null,B=0,oe="";return g.use=d,g.set=u,e!==void 0&&u(e),g}var j2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $2(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var k2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ph=$2(function(e){return k2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),a0={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,Fu=Je?Symbol.for("react.element"):60103,Lu=Je?Symbol.for("react.portal"):60106,ml=Je?Symbol.for("react.fragment"):60107,gl=Je?Symbol.for("react.strict_mode"):60108,yl=Je?Symbol.for("react.profiler"):60114,xl=Je?Symbol.for("react.provider"):60109,vl=Je?Symbol.for("react.context"):60110,Ru=Je?Symbol.for("react.async_mode"):60111,wl=Je?Symbol.for("react.concurrent_mode"):60111,bl=Je?Symbol.for("react.forward_ref"):60112,jl=Je?Symbol.for("react.suspense"):60113,S2=Je?Symbol.for("react.suspense_list"):60120,$l=Je?Symbol.for("react.memo"):60115,kl=Je?Symbol.for("react.lazy"):60116,C2=Je?Symbol.for("react.block"):60121,z2=Je?Symbol.for("react.fundamental"):60117,P2=Je?Symbol.for("react.responder"):60118,E2=Je?Symbol.for("react.scope"):60119;function Rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fu:switch(e=e.type,e){case Ru:case wl:case ml:case yl:case gl:case jl:return e;default:switch(e=e&&e.$$typeof,e){case vl:case bl:case kl:case $l:case xl:return e;default:return t}}case Lu:return t}}}function o0(e){return Rt(e)===wl}xe.AsyncMode=Ru;xe.ConcurrentMode=wl;xe.ContextConsumer=vl;xe.ContextProvider=xl;xe.Element=Fu;xe.ForwardRef=bl;xe.Fragment=ml;xe.Lazy=kl;xe.Memo=$l;xe.Portal=Lu;xe.Profiler=yl;xe.StrictMode=gl;xe.Suspense=jl;xe.isAsyncMode=function(e){return o0(e)||Rt(e)===Ru};xe.isConcurrentMode=o0;xe.isContextConsumer=function(e){return Rt(e)===vl};xe.isContextProvider=function(e){return Rt(e)===xl};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fu};xe.isForwardRef=function(e){return Rt(e)===bl};xe.isFragment=function(e){return Rt(e)===ml};xe.isLazy=function(e){return Rt(e)===kl};xe.isMemo=function(e){return Rt(e)===$l};xe.isPortal=function(e){return Rt(e)===Lu};xe.isProfiler=function(e){return Rt(e)===yl};xe.isStrictMode=function(e){return Rt(e)===gl};xe.isSuspense=function(e){return Rt(e)===jl};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ml||e===wl||e===yl||e===gl||e===jl||e===S2||typeof e=="object"&&e!==null&&(e.$$typeof===kl||e.$$typeof===$l||e.$$typeof===xl||e.$$typeof===vl||e.$$typeof===bl||e.$$typeof===z2||e.$$typeof===P2||e.$$typeof===E2||e.$$typeof===C2)};xe.typeOf=Rt;a0.exports=xe;var M2=a0.exports,Nu=M2,T2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},L2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Au={};Au[Nu.ForwardRef]=L2;Au[Nu.Memo]=s0;function Eh(e){return Nu.isMemo(e)?s0:Au[e.$$typeof]||T2}var R2=Object.defineProperty,N2=Object.getOwnPropertyNames,Mh=Object.getOwnPropertySymbols,A2=Object.getOwnPropertyDescriptor,I2=Object.getPrototypeOf,Th=Object.prototype;function l0(e,t,r){if(typeof t!="string"){if(Th){var i=I2(t);i&&i!==Th&&l0(e,i,r)}var a=N2(t);Mh&&(a=a.concat(Mh(t)));for(var o=Eh(e),s=Eh(t),c=0;c<a.length;++c){var d=a[c];if(!F2[d]&&!(r&&r[d])&&!(s&&s[d])&&!(o&&o[d])){var u=A2(t,d);try{R2(e,d,u)}catch{}}}}return e}var _2=l0;const O2=Ff(_2);var _t={};function ar(){return(ar=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var Fh=function(e,t){for(var r=[e[0]],i=0,a=t.length;i<a;i+=1)r.push(t[i],e[i+1]);return r},Cd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!i0.typeOf(e)},ws=Object.freeze([]),pn=Object.freeze({});function ki(e){return typeof e=="function"}function Lh(e){return e.displayName||e.name||"Component"}function Iu(e){return e&&typeof e.styledComponentId=="string"}var Si=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",_u=typeof window<"u"&&"HTMLElement"in window,D2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY)),B2={};function In(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var H2=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var i=0,a=0;a<r;a++)i+=this.groupSizes[a];return i},t.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,s=o;r>=s;)(s<<=1)<0&&In(16,""+r);this.groupSizes=new Uint32Array(s),this.groupSizes.set(a),this.length=s;for(var c=o;c<s;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(r+1),u=0,g=i.length;u<g;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[r]++,d++)},t.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],a=this.indexOfGroup(r),o=a+i;this.groupSizes[r]=0;for(var s=a;s<o;s++)this.tag.deleteRule(a)}},t.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var a=this.groupSizes[r],o=this.indexOfGroup(r),s=o+a,c=o;c<s;c++)i+=this.tag.getRule(c)+`/*!sc*/
`;return i},e}(),Bo=new Map,bs=new Map,oa=1,ho=function(e){if(Bo.has(e))return Bo.get(e);for(;bs.has(oa);)oa++;var t=oa++;return Bo.set(e,t),bs.set(t,e),t},U2=function(e){return bs.get(e)},V2=function(e,t){t>=oa&&(oa=t+1),Bo.set(e,t),bs.set(t,e)},W2="style["+Si+'][data-styled-version="5.3.11"]',G2=new RegExp("^"+Si+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),K2=function(e,t,r){for(var i,a=r.split(","),o=0,s=a.length;o<s;o++)(i=a[o])&&e.registerName(t,i)},Q2=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var c=s.match(G2);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(V2(u,d),K2(e,u,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},Y2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},c0=function(e){var t=document.head,r=e||t,i=document.createElement("style"),a=function(c){for(var d=c.childNodes,u=d.length;u>=0;u--){var g=d[u];if(g&&g.nodeType===1&&g.hasAttribute(Si))return g}}(r),o=a!==void 0?a.nextSibling:null;i.setAttribute(Si,"active"),i.setAttribute("data-styled-version","5.3.11");var s=Y2();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},q2=function(){function e(r){var i=this.element=c0(r);i.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var o=document.styleSheets,s=0,c=o.length;s<c;s++){var d=o[s];if(d.ownerNode===a)return d}In(17)}(i),this.length=0}var t=e.prototype;return t.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var i=this.sheet.cssRules[r];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),Z2=function(){function e(r){var i=this.element=c0(r);this.nodes=i.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,i){if(r<=this.length&&r>=0){var a=document.createTextNode(i),o=this.nodes[r];return this.element.insertBefore(a,o||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),X2=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),Rh=_u,J2={isServer:!_u,useCSSOMInjection:!D2},js=function(){function e(r,i,a){r===void 0&&(r=pn),i===void 0&&(i={}),this.options=ar({},J2,{},r),this.gs=i,this.names=new Map(a),this.server=!!r.isServer,!this.server&&_u&&Rh&&(Rh=!1,function(o){for(var s=document.querySelectorAll(W2),c=0,d=s.length;c<d;c++){var u=s[c];u&&u.getAttribute(Si)!=="active"&&(Q2(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(r){return ho(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new e(ar({},this.options,{},r),this.gs,i&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(a=(i=this.options).isServer,o=i.useCSSOMInjection,s=i.target,r=a?new X2(s):o?new q2(s):new Z2(s),new H2(r)));var r,i,a,o,s},t.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},t.registerName=function(r,i){if(ho(r),this.names.has(r))this.names.get(r).add(i);else{var a=new Set;a.add(i),this.names.set(r,a)}},t.insertRules=function(r,i,a){this.registerName(r,i),this.getTag().insertRules(ho(r),a)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(ho(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var i=r.getTag(),a=i.length,o="",s=0;s<a;s++){var c=U2(s);if(c!==void 0){var d=r.names.get(c),u=i.getGroup(s);if(d&&u&&d.size){var g=Si+".g"+s+'[id="'+c+'"]',f="";d!==void 0&&d.forEach(function(x){x.length>0&&(f+=x+",")}),o+=""+u+g+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),ew=/(a)(d)/gi,Nh=function(e){return String.fromCharCode(e+(e>25?39:97))};function zd(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Nh(t%52)+r;return(Nh(t%52)+r).replace(ew,"$1-$2")}var li=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},d0=function(e){return li(5381,e)};function u0(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ki(r)&&!Iu(r))return!1}return!0}var tw=d0("5.3.11"),rw=function(){function e(t,r,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&u0(t),this.componentId=r,this.baseHash=li(tw,r),this.baseStyle=i,js.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,i){var a=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,r,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(a,this.staticRulesId))o.push(this.staticRulesId);else{var s=_n(this.rules,t,r,i).join(""),c=zd(li(this.baseHash,s)>>>0);if(!r.hasNameForId(a,c)){var d=i(s,"."+c,void 0,a);r.insertRules(a,c,d)}o.push(c),this.staticRulesId=c}else{for(var u=this.rules.length,g=li(this.baseHash,i.hash),f="",x=0;x<u;x++){var S=this.rules[x];if(typeof S=="string")f+=S;else if(S){var j=_n(S,t,r,i),C=Array.isArray(j)?j.join(""):j;g=li(g,C+x),f+=C}}if(f){var w=zd(g>>>0);if(!r.hasNameForId(a,w)){var m=i(f,"."+w,void 0,a);r.insertRules(a,w,m)}o.push(w)}}return o.join(" ")},e}(),nw=/^\s*\/\/.*$/gm,iw=[":","[",".","#"];function aw(e){var t,r,i,a,o=pn,s=o.options,c=s===void 0?pn:s,d=o.plugins,u=d===void 0?ws:d,g=new b2(c),f=[],x=function(C){function w(m){if(m)try{C(m+"}")}catch{}}return function(m,p,y,$,P,L,N,I,W,D){switch(m){case 1:if(W===0&&p.charCodeAt(0)===64)return C(p+";"),"";break;case 2:if(I===0)return p+"/*|*/";break;case 3:switch(I){case 102:case 112:return C(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(w)}}}(function(C){f.push(C)}),S=function(C,w,m){return w===0&&iw.indexOf(m[r.length])!==-1||m.match(a)?C:"."+t};function j(C,w,m,p){p===void 0&&(p="&");var y=C.replace(nw,""),$=w&&m?m+" "+w+" { "+y+" }":y;return t=p,r=w,i=new RegExp("\\"+r+"\\b","g"),a=new RegExp("(\\"+r+"\\b){2,}"),g(m||!w?"":w,$)}return g.use([].concat(u,[function(C,w,m){C===2&&m.length&&m[0].lastIndexOf(r)>0&&(m[0]=m[0].replace(i,S))},x,function(C){if(C===-2){var w=f;return f=[],w}}])),j.hash=u.length?u.reduce(function(C,w){return w.name||In(15),li(C,w.name)},5381).toString():"",j}var p0=mn.createContext();p0.Consumer;var h0=mn.createContext(),ow=(h0.Consumer,new js),Pd=aw();function f0(){return v.useContext(p0)||ow}function m0(){return v.useContext(h0)||Pd}var sw=function(){function e(t,r){var i=this;this.inject=function(a,o){o===void 0&&(o=Pd);var s=i.name+o.hash;a.hasNameForId(i.id,s)||a.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.toString=function(){return In(12,String(i.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=Pd),this.name+t.hash},e}(),lw=/([A-Z])/,cw=/([A-Z])/g,dw=/^ms-/,uw=function(e){return"-"+e.toLowerCase()};function Ah(e){return lw.test(e)?e.replace(cw,uw).replace(dw,"-ms-"):e}var Ih=function(e){return e==null||e===!1||e===""};function _n(e,t,r,i){if(Array.isArray(e)){for(var a,o=[],s=0,c=e.length;s<c;s+=1)(a=_n(e[s],t,r,i))!==""&&(Array.isArray(a)?o.push.apply(o,a):o.push(a));return o}if(Ih(e))return"";if(Iu(e))return"."+e.styledComponentId;if(ki(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var d=e(t);return _n(d,t,r,i)}var u;return e instanceof sw?r?(e.inject(r,i),e.getName(i)):e:Cd(e)?function g(f,x){var S,j,C=[];for(var w in f)f.hasOwnProperty(w)&&!Ih(f[w])&&(Array.isArray(f[w])&&f[w].isCss||ki(f[w])?C.push(Ah(w)+":",f[w],";"):Cd(f[w])?C.push.apply(C,g(f[w],w)):C.push(Ah(w)+": "+(S=w,(j=f[w])==null||typeof j=="boolean"||j===""?"":typeof j!="number"||j===0||S in j2||S.startsWith("--")?String(j).trim():j+"px")+";"));return x?[x+" {"].concat(C,["}"]):C}(e):e.toString()}var _h=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function vr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return ki(e)||Cd(e)?_h(_n(Fh(ws,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:_h(_n(Fh(e,r)))}var g0=function(e,t,r){return r===void 0&&(r=pn),e.theme!==r.theme&&e.theme||t||r.theme},pw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hw=/(^-|-$)/g;function dc(e){return e.replace(pw,"-").replace(hw,"")}var y0=function(e){return zd(d0(e)>>>0)};function fo(e){return typeof e=="string"&&!0}var Ed=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},fw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function mw(e,t,r){var i=e[r];Ed(t)&&Ed(i)?x0(i,t):e[r]=t}function x0(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];for(var a=0,o=r;a<o.length;a++){var s=o[a];if(Ed(s))for(var c in s)fw(c)&&mw(e,s[c],c)}return e}var Ma=mn.createContext();Ma.Consumer;function gw(e){var t=v.useContext(Ma),r=v.useMemo(function(){return function(i,a){if(!i)return In(14);if(ki(i)){var o=i(a);return o}return Array.isArray(i)||typeof i!="object"?In(8):a?ar({},a,{},i):i}(e.theme,t)},[e.theme,t]);return e.children?mn.createElement(Ma.Provider,{value:r},e.children):null}var uc={};function v0(e,t,r){var i=Iu(e),a=!fo(e),o=t.attrs,s=o===void 0?ws:o,c=t.componentId,d=c===void 0?function(p,y){var $=typeof p!="string"?"sc":dc(p);uc[$]=(uc[$]||0)+1;var P=$+"-"+y0("5.3.11"+$+uc[$]);return y?y+"-"+P:P}(t.displayName,t.parentComponentId):c,u=t.displayName,g=u===void 0?function(p){return fo(p)?"styled."+p:"Styled("+Lh(p)+")"}(e):u,f=t.displayName&&t.componentId?dc(t.displayName)+"-"+t.componentId:t.componentId||d,x=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,S=t.shouldForwardProp;i&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(p,y,$){return e.shouldForwardProp(p,y,$)&&t.shouldForwardProp(p,y,$)}:e.shouldForwardProp);var j,C=new rw(r,f,i?e.componentStyle:void 0),w=C.isStatic&&s.length===0,m=function(p,y){return function($,P,L,N){var I=$.attrs,W=$.componentStyle,D=$.defaultProps,ge=$.foldedComponentIds,pe=$.shouldForwardProp,Te=$.styledComponentId,_e=$.target,De=function(_,k,X){_===void 0&&(_=pn);var R=ar({},k,{theme:_}),he={};return X.forEach(function(ee){var re,K,Ce,Ve=ee;for(re in ki(Ve)&&(Ve=Ve(R)),Ve)R[re]=he[re]=re==="className"?(K=he[re],Ce=Ve[re],K&&Ce?K+" "+Ce:K||Ce):Ve[re]}),[R,he]}(g0(P,v.useContext(Ma),D)||pn,P,I),ve=De[0],Be=De[1],A=function(_,k,X,R){var he=f0(),ee=m0(),re=k?_.generateAndInjectStyles(pn,he,ee):_.generateAndInjectStyles(X,he,ee);return re}(W,N,ve),V=L,B=Be.$as||P.$as||Be.as||P.as||_e,oe=fo(B),E=Be!==P?ar({},P,{},Be):P,b={};for(var M in E)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?b.as=E[M]:(pe?pe(M,Ph,B):!oe||Ph(M))&&(b[M]=E[M]));return P.style&&Be.style!==P.style&&(b.style=ar({},P.style,{},Be.style)),b.className=Array.prototype.concat(ge,Te,A!==Te?A:null,P.className,Be.className).filter(Boolean).join(" "),b.ref=V,v.createElement(B,b)}(j,p,y,w)};return m.displayName=g,(j=mn.forwardRef(m)).attrs=x,j.componentStyle=C,j.displayName=g,j.shouldForwardProp=S,j.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ws,j.styledComponentId=f,j.target=i?e.target:e,j.withComponent=function(p){var y=t.componentId,$=function(L,N){if(L==null)return{};var I,W,D={},ge=Object.keys(L);for(W=0;W<ge.length;W++)I=ge[W],N.indexOf(I)>=0||(D[I]=L[I]);return D}(t,["componentId"]),P=y&&y+"-"+(fo(p)?p:dc(Lh(p)));return v0(p,ar({},$,{attrs:x,componentId:P}),r)},Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=i?x0({},e.defaultProps,p):p}}),Object.defineProperty(j,"toString",{value:function(){return"."+j.styledComponentId}}),a&&O2(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),j}var l=function(e){return function t(r,i,a){if(a===void 0&&(a=pn),!i0.isValidElementType(i))return In(1,String(i));var o=function(){return r(i,a,vr.apply(void 0,arguments))};return o.withConfig=function(s){return t(r,i,ar({},a,{},s))},o.attrs=function(s){return t(r,i,ar({},a,{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},o}(v0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){l[e]=l(e)});var yw=function(){function e(r,i){this.rules=r,this.componentId=i,this.isStatic=u0(r),js.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(r,i,a,o){var s=o(_n(this.rules,i,a,o).join(""),""),c=this.componentId+r;a.insertRules(c,c,s)},t.removeStyles=function(r,i){i.clearRules(this.componentId+r)},t.renderStyles=function(r,i,a,o){r>2&&js.registerId(this.componentId+r),this.removeStyles(r,a),this.createStyles(r,i,a,o)},e}();function xw(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a=vr.apply(void 0,[e].concat(r)),o="sc-global-"+y0(JSON.stringify(a)),s=new yw(a,o);function c(u){var g=f0(),f=m0(),x=v.useContext(Ma),S=v.useRef(g.allocateGSInstance(o)).current;return g.server&&d(S,u,g,x,f),v.useLayoutEffect(function(){if(!g.server)return d(S,u,g,x,f),function(){return s.removeStyles(S,g)}},[S,u,g,x,f]),null}function d(u,g,f,x,S){if(s.isStatic)s.renderStyles(u,B2,f,S);else{var j=ar({},g,{theme:g0(g,x,c.defaultProps)});s.renderStyles(u,j,f,S)}}return mn.memo(c)}const vw=xw`
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
`,Nr={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"clamp(3.5rem, 8vw, 6rem)",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},ww=Nr.shadow,bw={primary:"#FFFFFF",primaryHover:"#EAF1FF",primaryActive:"#DCE8FF",brand:"#6B9DFF",brandHover:"#8AB3FF",brandActive:"#4F87FF",primarySoft:"#132D63",background:"#141413",backgroundAlt:"#1D1D1B",surface:"#111A2E",surfaceMuted:"#182238",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F6F9FF",textMuted:"#B4C2D8",textSoft:"#8694AE",textInverse:"#FFFFFF",border:"#25324A",borderStrong:"#34445E",shadow:"rgba(0, 0, 0, 0.32)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#F59E0B",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #6B9DFF 100%)",heroGlow:"radial-gradient(circle at top left, rgba(107, 157, 255, 0.28), transparent 55%)"},jw={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(107, 157, 255, 0.28), 0 24px 48px rgba(107, 157, 255, 0.2)"},$w=e=>({mode:e,color:e==="dark"?bw:Nr.color,typography:Nr.typography,spacing:Nr.spacing,radius:Nr.radius,shadow:e==="dark"?jw:ww,layout:Nr.layout,breakpoints:Nr.breakpoints,zIndex:Nr.zIndex}),w0="lafranciago-theme-mode",b0=v.createContext(null),kw=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(w0);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function Sw({children:e}){const[t,r]=v.useState(kw),i=v.useRef(!1);v.useEffect(()=>{if(window.localStorage.setItem(w0,t),document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const d=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(d),delete document.documentElement.dataset.themeTransition}},[t]);const a=v.useCallback(()=>{r(d=>d==="light"?"dark":"light")},[]),o=v.useCallback(d=>{r(d)},[]),s=v.useMemo(()=>$w(t),[t]),c=v.useMemo(()=>({mode:t,isDarkMode:t==="dark",toggleMode:a,setMode:o}),[t,o,a]);return n.jsx(b0.Provider,{value:c,children:n.jsxs(gw,{theme:s,children:[n.jsx(vw,{}),e]})})}function j0(){const e=v.useContext(b0);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,t)=>{const r=v.forwardRef(({color:i="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:d,...u},g)=>v.createElement("svg",{ref:g,...Cw,width:a,height:a,stroke:i,strokeWidth:s?Number(o)*24/Number(a):o,className:["lucide",`lucide-${zw(e)}`,c].join(" "),...u},[...t.map(([f,x])=>v.createElement(f,x)),...Array.isArray(d)?d:[d]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=U("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=U("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=U("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=U("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=U("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=U("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=U("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=U("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=U("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=U("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=U("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=U("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=U("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=U("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=U("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=U("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=U("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=U("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=U("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=U("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=U("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=U("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=U("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=U("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=U("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=U("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=U("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=U("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=U("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=U("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=U("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=U("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=U("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=U("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=U("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=U("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=U("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=U("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=U("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=U("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=U("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=U("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=U("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=U("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=U("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=U("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=U("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=U("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=U("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=U("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=U("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$e=(e,t="es-AR",r="ARS")=>new Intl.NumberFormat(t,{style:"currency",currency:r,maximumFractionDigits:0}).format(e),Ta=e=>`${e.toFixed(1)} km`,Bw=e=>`${e>0?"+":""}${e}%`,Hw=(e,t)=>`${e}-${t} min`,sa=e=>e.trim().toLowerCase(),Uw=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],Vw=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:L0},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:qe},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:k0},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Du},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Ou},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:C0},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:N0},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:Lw},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Hu},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Cl},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:$0},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:S0},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:F0},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:A0}],I0=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],_0=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Ua=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:qe,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Du,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",name:"Farmacia Centro",category:"Salud y perfumería",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:Hu,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",name:"Carnicería Central",category:"Cortes y frescos",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:Ou,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],Va=[{id:"cart-1",product:"Coca Cola 2,25 L",store:"Almacén Juan",price:2600,quantity:1,subtotal:2600,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-2",product:"Fideos tirabuzón 500 g",store:"Almacén Juan",price:980,quantity:2,subtotal:1960,available:!0,eta:"15–20 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-3",product:"Pan flauta x 6",store:"Panadería La Esquina",price:2550,quantity:1,subtotal:2550,available:!0,eta:"20–30 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-4",product:"Medialunas x 6",store:"Panadería La Esquina",price:2400,quantity:1,subtotal:2400,available:!0,eta:"20–30 min",statusLabel:"Pocas unidades",statusTone:"warning"},{id:"cart-5",product:"Banana premium",store:"La Huerta",price:1700,quantity:1,subtotal:1700,available:!0,eta:"15–25 min",statusLabel:"En stock",statusTone:"success"},{id:"cart-6",product:"Tomate redondo",store:"La Huerta",price:2690,quantity:1,subtotal:2690,available:!1,eta:"15–25 min",statusLabel:"Sin stock",statusTone:"danger"}],Ww=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],O0=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",price:750}],Gw=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],Kw=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],Qw=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],Yw=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],qw=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],Zw=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Comercios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],Xw=[{id:"alert-1",title:"Comercios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:R0},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:E0},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:M0},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:_w}],Jw=l.div`
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

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-bottom: 0;
  }
`,eb=l.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,tb=l.div`
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
`,rb=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`,nb=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,ib=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  min-width: 2.75rem;
  width: 2.75rem;
  padding: 0;
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
`,ab=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;l(Zt)`
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
`;const ob=l.div`
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
`;l.span`
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
`;const sb=l.div`
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
`,mo=l.span`
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
`,go=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`;const yo=l.span`
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
`,xo=l.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,D0=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: center;
  white-space: nowrap;
`,B0=l.div`
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
`,$s=l(D0)`
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  letter-spacing: -0.01em;
  white-space: pre-line;
`,lb=l.span`
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
`,cb=l.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,pc=l(Zt)`
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
`,db=l.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,ub=l.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,pb=l.span`
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
`,hb=l.div`
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
`,fb=l.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Uu=vr`
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
`,mb=l.button`
  ${Uu};
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
`,gb=l.div`
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
`,yb=l.button`
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
`,xb=l.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`,Re=l.section`
  padding: ${({theme:e})=>e.spacing[6]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }
`,J=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Ci=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[2]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,me=l.span`
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
`,Se=l.h1`
  margin: 0;
  max-width: 17ch;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.5rem, 3.6vw, 2.75rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.text};
`,Ee=l.p`
  margin: 0;
  max-width: 60rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,Vu=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,vb=l(Vu)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;l(Vu)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;const wb=l(Vu)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,H=l.article`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,Y=l.div`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.cardPadding};
  }
`,Z=l.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xl};
  }
`,q=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Q=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Fa=l(Q)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,H0=l.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Kt=l(H0)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;l.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Tt=l(Zt)`
  ${Uu};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,Wn=l(Tt)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ks=l.button`
  ${Uu};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);
  }
`;l.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(16rem, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  overflow-x: auto;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;l(H)`
  scroll-snap-align: start;
`;const bb=l.nav`
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
`,jb=l(Da)`
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
`,$b=l.nav`
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
`,kb=l.ul`
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
`,Sb=l(Da)`
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
`,Cb=l.span`
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
`;l.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;l.section`
  display: block;
`;l.span`
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
`;const Wu=vr`
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
`,Gu=vr`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,zb=vr`
  background:
    radial-gradient(circle at top left, rgba(0, 71, 231, 0.24), transparent 48%),
    linear-gradient(180deg, rgba(11, 16, 32, 0.98), rgba(5, 8, 22, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  box-shadow: ${({theme:e})=>e.shadow.glow};
`,Nt=vr`
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
`;l.div`
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
`;const Pb=l.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Eb=l.div`
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
`,Mb=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`,Tb=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Fb=l.button`
  ${Nt};
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
`,Lb=l.div`
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
`,Rb=l.div`
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
`;l.div`
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
`;const vo=l.span`
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
`,wo=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Nb=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`,bo=l.span`
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
`,jo=l.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,Ab=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: left;
  white-space: pre-line;
`;l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: -0.01em;
  line-height: 0.98;
  text-align: center;
  white-space: pre-line;
`;const Ib=l.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-self: end;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,_b=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,U0=vr`
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
`,Ss=l.button`
  ${U0}
`;l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  color: ${({theme:e})=>e.color.primary};
`;const Fd=l(Zt)`
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
`,Cs=l(Zt)`
  ${U0};
  text-decoration: none;
`,Ob=l(Zt)`
  ${Nt};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`,Db=l.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Bb=l(Da)`
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
`,Hb=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;l.main`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding-left: var(--desktop-sidebar-width);
  }
`;const Ub=l.section`
  padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[1]};
  }
`,Ui=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Vb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Wb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;l.span`
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
`;l.h1`
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
`;l.p`
  display: none;
  margin: 0;
  max-width: 48rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;const Gb=l.section`
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
`,Kb=l.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
`,Oh=l.label`
  display: block;
`;l.span`
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
`;const Dh=l.div`
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
`,Bh=l.input`
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
`;l.button`
  ${Nt};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`;const Qb=l.button`
  ${Nt};
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
`,Yb=l.span`
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
`;l.div`
  display: none;
`;l.button`
  ${Nt};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  white-space: nowrap;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;const qb=l.div`
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
`,Zb=l.div`
  position: relative;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Xb=l.button`
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
`,Jb=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.18)":"rgba(0, 71, 231, 0.12)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Hh=l.span`
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
`,ej=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: 0;
`,tj=l.div`
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
`;l.p`
  display: none;
`;const rj=l.button`
  ${Nt};
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
`,nj=l.aside`
  background: ${({theme:e})=>e.color.background};
  border: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  gap: calc(${({theme:e})=>e.spacing[1]} + 1px);
  position: relative;
`,ij=l.div`
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
`,aj=l(Zt)`
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
`,oj=l.div`
  display: grid;
  gap: 0.35rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: 0.3rem;
  }
`,sj=l.span`
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
`,lj=l.h2`
  margin: 0;
  max-width: 12ch;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 4vw, 2.2rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  text-transform: uppercase;
`,cj=l.span`
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
`,dj=l.p`
  margin: 0;
  max-width: 18ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,uj=l.div`
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
`,pj=l.span`
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
`,hj=l.span`
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
`,fj=l.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,Uh=l.button`
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
`,mj=l.span`
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
`,$o=l.section`
  padding: ${({theme:e})=>e.spacing[1]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }
`,Vh=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,ko=l.section`
  ${Gu};
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: calc(${({theme:e})=>e.spacing[1]} + 0.25rem);
  display: grid;
  gap: calc(${({theme:e})=>e.spacing[1]} + 0.125rem);
  overflow: visible;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: calc(${({theme:e})=>e.layout.cardPadding} + 0.25rem);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Wh=l.div`
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
`,Gh=l.p`
  margin: 0;
  max-width: 20rem;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.35;
`,Kh=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;l.span`
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
`;const Qh=l.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 2.6vw, 2.3rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.text};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.lg};
  max-width: 56rem;
`;const Yh=l(Zt)`
  ${Nt};
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
`,gj=l.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  overflow: visible;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(10, minmax(0, 1fr));
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,yj=l.button`
  ${Wu};
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
`,Vo=l.span`
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
`,Ld=l.span`
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
`,qh=l.span`
  display: none;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,xj=l.button`
  ${Wu};
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
`,vj=l.span`
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
`,kn=l.div`
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
`,Sn=l.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Gu};
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
`,V0=l.div`
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
`,zs=l.div`
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
`,Ps=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,zl=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: ${({theme:e})=>e.layout.cardPadding};
  background: ${({theme:e})=>e.mode==="dark"?e.color.background:e.color.surface};
  overflow: auto;
`;l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: linear-gradient(135deg, rgba(0, 71, 231, 0.08), rgba(0, 71, 231, 0.03));
  border: 1px solid rgba(0, 71, 231, 0.12);
`;l.span`
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
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`;l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`;const Gr=l.section`
  display: block;
`,Kr=l.span`
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
`,Qr=l.nav`
  display: grid;
  gap: 0.25rem;
`,Yr=l(Da)`
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
`,qr=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.18)":"rgba(0, 71, 231, 0.08)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Zr=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Xr=l.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,Jr=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,en=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,Es=l.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,Ms=l.button`
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
`,Ts=l.span`
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
`,Fs=l.span`
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
`,tn=l.span`
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
`,Ls=l.span`
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
`,Rs=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`,Ns=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,As=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Zh=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Xh=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`,Jh=l.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,W0=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,G0=l.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,Is=l.button`
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
`,K0=l.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,Q0=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Y0=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,q0=l.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,Z0=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,X0=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,J0=l.button`
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
`,e1=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,t1=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,r1=l.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,n1=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,i1=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,a1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,o1=l.article`
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
`,s1=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,l1=l.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,c1=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,d1=l.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,u1=l.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,p1=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,qi=l.button`
  ${Nt};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
`,wj=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,bj=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,jj=l.button`
  ${Gu};
  ${Wu};
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[3]};
  text-align: left;
  cursor: pointer;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,$j=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,kj=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,Sj=l.iframe`
  width: 100%;
  min-height: 16rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,Cj=l.div`
  display: grid;
  gap: 0.25rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,zj=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,Pj=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.25;
`,Ej=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,Mj=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Tj=l.button`
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
`,Fj=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,Lj=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,Rj=l.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Nj=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Aj=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Ij=l.div`
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
`,_j=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Oj=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`,Dj=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,ef=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.2;
`,Bj=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.layout.screenPaddingH};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.layout.screenPaddingH};
  }
`,tf=l.section`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`,rf=l.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`,nf=l.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.1;
`,af=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    line-height: 1.25;
  }
`,Hj=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: 0.2rem;
  }
`,h1=l.button`
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
`,Uj=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 1 1 auto;
  width: min(100%, 13.25rem);
  min-width: 0;
`,Vj=l(h1)`
  flex: 0 0 auto;
  white-space: nowrap;
`,Wj=l.label`
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
`,Gj=l.input`
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
`,Kj=l.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
  pointer-events: none;
`,Qj=l.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`;l.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`;const Yj=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4.4rem, 1fr));
  gap: 0.1rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    row-gap: 0.25rem;
    column-gap: 0.55rem;
  }
`,qj=l.button`
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

  &[data-active='true'] ${Vo} {
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-active='true'] ${Ld} {
    color: ${({theme:e})=>e.color.primary};
  }
`,Zj=l.div`
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
`,Xj=l.button`
  ${Nt};
  flex: 1 1 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
`,of=l.button`
  ${Nt};
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
`,Jj=l.div`
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
`,e$=l.article`
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
`,t$=l.div`
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
`,r$=l.div`
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
`,n$=l.div`
  display: contents;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,i$=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  min-width: 0;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    align-items: center;
  }
`,a$=l.span`
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
`,o$=l.h3`
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
`,s$=l.p`
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
`,l$=l.div`
  display: none;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: flex;
  }
`,sf=l.span`
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
`,c$=l.p`
  display: none;
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`,d$=l.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(20, 30, 52, 0.96), rgba(13, 20, 36, 0.94))":"linear-gradient(180deg, rgba(234, 241, 255, 0.98), rgba(226, 236, 255, 0.96))"};
  border: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: ${({theme:e})=>e.mode==="dark"?e.shadow.sm:"0 12px 24px rgba(0, 71, 231, 0.08)"};
`,u$=l.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  justify-items: start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,p$=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`,h$=l.span`
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
`,f$=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.72rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-align: left;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,m$=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.63rem;
  line-height: 1.15;
  text-align: left;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,g$=l.div`
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
`,y$=l.article`
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
`,x$=l.div`
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
`,v$=l.div`
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
`,w$=l.span`
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
`,b$=l.h3`
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
`,j$=l.p`
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
`,$$=l.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-wrap: wrap;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    justify-content: center;
  }
`,k$=l.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.66rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
  }
`,S$=l.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.5rem;
  line-height: 1;
  text-decoration: line-through;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,C$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 22.5rem);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,z$=l.div`
  display: grid;
  min-width: 0;
`,P$=l.aside`
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
`,lf=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,cf=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
`,E$=l.span`
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
`,M$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,T$=l.article`
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
`,F$=l.span`
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
`,L$=l.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,R$=l.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-wrap: balance;
`,N$=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.15;
`,A$=l.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.15;
`,I$=l.span`
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,_$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding-top: ${({theme:e})=>e.spacing[1]};
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,hc=l.div`
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
`,O$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,D$=l(Zt)`
  ${Nt};
  width: 100%;
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  text-decoration: none;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,B$=l(Zt)`
  ${Nt};
  width: 100%;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  text-decoration: none;
`,H$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,fc=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;
`,mc=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,gc=l.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,yc=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,xc=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,U$=l.div`
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
`;l.section`
  padding: 0 0 ${({theme:e})=>e.layout.sectionSpacing};
`;l.div`
  ${zb};
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;l.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  color: ${({theme:e})=>e.color.textInverse};
`;l.p`
  margin: 0;
  max-width: 56rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${({theme:e})=>e.typography.size.lg};
`;l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[3]};
`;l(Zt)`
  ${Nt};
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: ${({theme:e})=>e.color.textInverse};

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
  }
`;l.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`;l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
`;const V$=l.nav`
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
`,W$=l.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;
`,G$=l(Da)`
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
`,K$=l.span`
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
`,So="/LaFranciaGO/favicon.png",df=420,Q$=260,uf=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:Fi,end:!0},{to:"/comercios",title:"Categorías",subtitle:"Navegá por rubros",icon:Ha},{to:"/pedidos",title:"Pedidos",subtitle:"Seguimiento y entregas",icon:qt},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:Vn},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:Qe}],pf=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:qe},{to:"/trabaja-con-nosotros",title:"Trabaja con nosotros",subtitle:"Registrate como delivery",icon:ft},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:nt}],Y$=l.aside`
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
`,q$=l(zl)`
  height: 100%;
`,hf=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:qe,items:[{icon:nt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:qt,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:qt,items:[{icon:Et,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:qe,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:Et,items:[{icon:Vn,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:nt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],Z$=[{to:"/",label:"Inicio",icon:Fi},{to:"/comercios",label:"Comercios",icon:qe},{to:"/pedidos",label:"Pedidos",icon:qt},{to:"/notificaciones",label:"Notificaciones",icon:nt},{to:"/mi-cuenta",label:"Cuenta",icon:Qe}],X$=[{to:"/",label:"Inicio",icon:Fi},{to:"/comercios",label:"Categorías",icon:Ha},{to:"/pedidos",label:"Pedidos",icon:qt},{to:"/favoritos",label:"Favoritos",icon:Vn},{to:"/mi-cuenta",label:"Cuenta",icon:Qe}];function At({children:e,query:t,onQueryChange:r,activeFilter:i,onFilterChange:a,showSearch:o=!0,footerText:s="Navegación principal y accesos por rol."}){const{isDarkMode:c,toggleMode:d}=j0(),u=nl(),g=typeof t=="string"&&typeof r=="function",f=typeof a=="function",x=v.useRef(null),S=v.useRef(null),j=v.useRef(null),C=v.useRef(null),w=v.useRef(null),[m,p]=v.useState(!1),[y,$]=v.useState(!1),[P,L]=v.useState("opening"),[N,I]=v.useState(!1),[W,D]=v.useState(!1),[ge,pe]=v.useState("opening"),[Te,_e]=v.useState(null),De=b=>{b.preventDefault()},ve=v.useCallback(()=>{p(!1),I(!1),_e(null)},[]),Be=v.useCallback(()=>{ve(),p(!0)},[ve]),A=v.useCallback(()=>{if(m||y){ve();return}Be()},[ve,y,m,Be]),V=v.useCallback(()=>{ve(),I(!0)},[ve]),B=v.useCallback(()=>{if(N||W){ve();return}V()},[ve,W,N,V]);v.useEffect(()=>{const b=document.body.style.overflow;return(m||y||N||W)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=b}},[y,m,W,N]),v.useLayoutEffect(()=>{const b=x.current;if(!b)return;const M=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${b.offsetHeight}px`)};M();const _=typeof ResizeObserver<"u"?new ResizeObserver(M):null;return _==null||_.observe(b),window.addEventListener("resize",M),()=>{_==null||_.disconnect(),window.removeEventListener("resize",M),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),v.useEffect(()=>{S.current!==null&&(window.cancelAnimationFrame(S.current),S.current=null),j.current!==null&&(window.clearTimeout(j.current),j.current=null);const b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m){if($(!0),b){L("open");return}L("opening"),S.current=window.requestAnimationFrame(()=>{L("open"),S.current=null});return}if(y){if(b){$(!1),L("opening");return}L("closing"),j.current=window.setTimeout(()=>{$(!1),L("opening"),j.current=null},df)}},[y,m]),v.useEffect(()=>()=>{S.current!==null&&window.cancelAnimationFrame(S.current),j.current!==null&&window.clearTimeout(j.current),C.current!==null&&window.cancelAnimationFrame(C.current),w.current!==null&&window.clearTimeout(w.current)},[]),v.useEffect(()=>{C.current!==null&&(window.cancelAnimationFrame(C.current),C.current=null),w.current!==null&&(window.clearTimeout(w.current),w.current=null);const b=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(N){if(D(!0),b){pe("open");return}pe("opening"),C.current=window.requestAnimationFrame(()=>{pe("open"),C.current=null});return}if(W){if(b){D(!1),pe("opening");return}pe("closing"),w.current=window.setTimeout(()=>{D(!1),pe("opening"),w.current=null},Q$)}},[W,N]);const oe=v.useCallback((b,M)=>{b.preventDefault(),ve(),window.setTimeout(()=>{u(M)},df)},[ve,u]),E=v.useMemo(()=>hf.find(b=>b.id===Te)??null,[Te]);return n.jsxs(Jw,{children:[n.jsx(eb,{ref:x,children:n.jsxs(tb,{children:[n.jsxs(rb,{children:[n.jsxs(nb,{children:[n.jsx(ib,{type:"button",onClick:A,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":m||y,children:n.jsx(P0,{size:20,"aria-hidden":"true"})}),n.jsx(ob,{"aria-label":"LaFranciaGO",children:n.jsx(mo,{children:n.jsx(go,{src:So,alt:"","aria-hidden":"true"})})})]}),n.jsxs(sb,{"aria-label":"LaFranciaGO",children:[n.jsx(mo,{children:n.jsx(go,{src:So,alt:"","aria-hidden":"true"})}),n.jsxs(yo,{children:["LaFrancia",n.jsx(xo,{children:"GO"})]}),n.jsx(D0,{children:"Todo lo de tu pueblo, en un solo lugar."})]}),n.jsxs(B0,{"aria-label":"LaFranciaGO",children:[n.jsxs(yo,{children:["LaFrancia",n.jsx(xo,{children:"GO"})]}),n.jsx($s,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]}),n.jsxs(ab,{"aria-label":"Acciones rápidas",children:[n.jsx(Cs,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(On,{size:18,"aria-hidden":"true"})}),n.jsx(Ss,{type:"button",onClick:B,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":N||W,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(Fd,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})})]}),n.jsxs(lb,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"}),"La Francia centro · entrega hoy"]}),n.jsxs(cb,{children:[n.jsx(Cs,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(On,{size:18,"aria-hidden":"true"})}),n.jsx(Ss,{type:"button",onClick:B,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":N||W,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(Fd,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})}),n.jsx(pc,{to:"/registro/comercio",children:"Publicar comercio"}),n.jsx(pc,{to:"/trabaja-con-nosotros",children:"Trabaja con nosotros"}),n.jsx(pc,{to:"/mi-cuenta",children:"Mi cuenta"})]})]}),n.jsx(bb,{"aria-label":"Navegación principal",children:Z$.map(b=>{const M=b.icon;return n.jsxs(jb,{to:b.to,children:[n.jsx(M,{size:16,"aria-hidden":"true"}),b.label]},b.to)})}),o&&g&&n.jsxs(db,{onSubmit:De,children:[n.jsxs(ub,{htmlFor:"marketplace-search",children:[n.jsx(pb,{children:"Buscá productos, comercios o categorías"}),n.jsxs(hb,{children:[n.jsx(Td,{size:18,"aria-hidden":"true"}),n.jsx(fb,{id:"marketplace-search",value:t,onChange:b=>r(b.target.value),placeholder:"Coca Cola 3L, pan, farmacia, delivery..."})]})]}),n.jsx(mb,{type:"submit",children:"Buscar"})]}),o&&f&&n.jsx(gb,{"aria-label":"Filtros rápidos",children:Uw.map(b=>n.jsx(yb,{type:"button",onClick:()=>a(b.id),"data-active":i===b.id,children:b.label},b.id))})]})}),n.jsx(Y$,{"aria-label":"Navegación principal",children:n.jsxs(q$,{children:[n.jsxs(zs,{"aria-label":"LaFranciaGO",children:[n.jsx(mo,{children:n.jsx(go,{src:So,alt:"","aria-hidden":"true"})}),n.jsxs(Ps,{children:[n.jsxs(yo,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(xo,{children:"GO"})]}),n.jsx($s,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),n.jsxs(Gr,{children:[n.jsx(Kr,{children:"NAVEGACIÓN"}),n.jsx(Qr,{"aria-label":"Navegación principal",children:uf.map(b=>{const M=b.icon;return n.jsxs(Yr,{to:b.to,end:b.end,onClick:_=>oe(_,b.to),children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:b.title}),n.jsx(Jr,{children:b.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},b.to)})})]}),n.jsxs(Gr,{children:[n.jsx(Kr,{children:"ACCIONES"}),n.jsx(Qr,{"aria-label":"Acciones rápidas",children:pf.map(b=>{const M=b.icon;return n.jsxs(Yr,{to:b.to,onClick:_=>oe(_,b.to),children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:b.title}),n.jsx(Jr,{children:b.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},b.to)})})]}),n.jsx("div",{style:{flex:1},"aria-hidden":"true"}),n.jsx(Es,{children:n.jsxs(Ms,{type:"button",onClick:d,role:"switch","aria-checked":c,children:[n.jsx(Ts,{"data-active":"true","aria-hidden":"true",children:c?n.jsx(Vr,{size:16,"aria-hidden":"true"}):n.jsx(Wr,{size:16,"aria-hidden":"true"})}),n.jsxs(Rs,{children:[n.jsx(Ns,{children:c?"Tema oscuro":"Tema claro"}),n.jsx(As,{children:"Ajustá el contraste de toda la app."})]}),n.jsxs(Fs,{"aria-hidden":"true",children:[n.jsx(tn,{"data-side":"top","data-active":!c,children:n.jsx(Wr,{size:12,"aria-hidden":"true"})}),n.jsx(Ls,{"data-mode":c?"dark":"light"}),n.jsx(tn,{"data-side":"bottom","data-active":c,children:n.jsx(Vr,{size:12,"aria-hidden":"true"})})]})]})})]})}),n.jsx(xb,{children:e}),n.jsx($b,{"aria-label":"Navegación móvil",children:n.jsx(kb,{children:X$.map(b=>{const M=b.icon;return n.jsx("li",{children:n.jsxs(Sb,{to:b.to,"data-primary":b.to==="/pedidos",children:[n.jsx(Cb,{children:n.jsx(M,{size:b.to==="/pedidos"?32:18,"aria-hidden":"true"})}),n.jsx("span",{children:b.label})]})},b.to)})})}),y&&n.jsx(kn,{"data-drawer":"true","data-state":P,role:"presentation",onClick:ve,children:n.jsxs(Sn,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":P,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:b=>b.stopPropagation(),children:[n.jsxs(V0,{children:[n.jsxs(zs,{"aria-label":"LaFranciaGO",children:[n.jsx(mo,{children:n.jsx(go,{src:So,alt:"","aria-hidden":"true"})}),n.jsx(Ps,{children:n.jsxs(yo,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(xo,{children:"GO"})]})})]}),n.jsx(qi,{type:"button",onClick:ve,"aria-label":"Cerrar menú",children:n.jsx($n,{size:18,"aria-hidden":"true"})})]}),n.jsxs(zl,{children:[n.jsxs(Gr,{children:[n.jsx(Kr,{children:"Navegación"}),n.jsx(Qr,{"aria-label":"Navegación principal",children:uf.map(b=>{const M=b.icon;return n.jsxs(Yr,{to:b.to,end:b.end,onClick:_=>oe(_,b.to),children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:b.title}),n.jsx(Jr,{children:b.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},b.to)})})]}),n.jsxs(Gr,{children:[n.jsx(Kr,{children:"Acciones"}),n.jsx(Qr,{"aria-label":"Acciones rápidas",children:pf.map(b=>{const M=b.icon;return n.jsxs(Yr,{to:b.to,onClick:_=>oe(_,b.to),children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:b.title}),n.jsx(Jr,{children:b.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},b.to)})})]}),n.jsx(Es,{children:n.jsxs(Ms,{type:"button",onClick:d,role:"switch","aria-checked":c,children:[n.jsx(Ts,{"data-active":"true","aria-hidden":"true",children:c?n.jsx(Vr,{size:16,"aria-hidden":"true"}):n.jsx(Wr,{size:16,"aria-hidden":"true"})}),n.jsxs(Rs,{children:[n.jsx(Ns,{children:c?"Tema oscuro":"Tema claro"}),n.jsx(As,{children:"Ajustá el contraste de toda la app."})]}),n.jsxs(Fs,{"aria-hidden":"true",children:[n.jsx(tn,{"data-side":"top","data-active":!c,children:n.jsx(Wr,{size:12,"aria-hidden":"true"})}),n.jsx(Ls,{"data-mode":c?"dark":"light"}),n.jsx(tn,{"data-side":"bottom","data-active":c,children:n.jsx(Vr,{size:12,"aria-hidden":"true"})})]})]})})]})]})}),W&&n.jsx(kn,{"data-notifications":"true","data-state":ge,role:"presentation",onClick:ve,children:n.jsxs(Sn,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":ge,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:b=>b.stopPropagation(),children:[n.jsxs(W0,{children:[E?n.jsx(Is,{type:"button",onClick:()=>_e(null),"aria-label":"Volver a las notificaciones",children:n.jsx(Ho,{size:14,"aria-hidden":"true"})}):n.jsx(G0,{"aria-hidden":"true"}),n.jsxs(K0,{children:[n.jsx(Q0,{id:"marketplace-notifications-title",children:(E==null?void 0:E.title)??"Notificaciones"}),n.jsx(Y0,{children:(E==null?void 0:E.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),n.jsx(Is,{type:"button",onClick:()=>{ve(),u("/notificaciones")},"aria-label":"Configuración de notificaciones",children:n.jsx(T0,{size:14,"aria-hidden":"true"})})]}),n.jsx(q0,{}),n.jsx(Z0,{children:E?n.jsx(a1,{"aria-label":E.title,children:E.items.map(b=>{const M=b.icon;return n.jsxs(o1,{children:[n.jsx(s1,{"aria-hidden":"true",children:n.jsx(M,{size:14,"aria-hidden":"true"})}),n.jsxs(l1,{children:[n.jsxs(c1,{children:[n.jsx(d1,{children:b.title}),n.jsx(u1,{children:b.date})]}),n.jsx(p1,{children:b.subtitle})]})]},`${E.id}-${b.title}`)})}):n.jsx(X0,{"aria-label":"Secciones de notificaciones",children:hf.map(b=>{const M=b.icon;return n.jsxs(J0,{type:"button",onClick:()=>_e(b.id),children:[n.jsx(e1,{"aria-hidden":"true",children:n.jsx(M,{size:14,"aria-hidden":"true"})}),n.jsxs(t1,{children:[n.jsx(r1,{children:b.title}),n.jsx(n1,{children:b.subtitle})]}),n.jsx(i1,{"aria-hidden":"true",children:n.jsx(Yi,{size:16,"aria-hidden":"true"})})]},b.id)})})})]})})]})}const J$=({size:e=18,...t})=>v.createElement("svg",{...t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,focusable:!1},v.createElement("circle",{cx:6.2,cy:17.2,r:2.05}),v.createElement("circle",{cx:16.8,cy:17.2,r:2.05}),v.createElement("path",{d:"M7.4 17.2h3.2l1.7-3.5h3.2l1.6 2.8"}),v.createElement("path",{d:"M11.8 13.7l1.1-1.8h2.4l1.1 1.8"}),v.createElement("rect",{x:14.7,y:7.7,width:4,height:4,rx:.9}),v.createElement("path",{d:"M4.2 11.3c1.2-.8 2.6-.8 3.8 0"}),v.createElement("path",{d:"M2.8 8.8c1.1-.6 2.1-.8 3.2-.5"}),v.createElement("path",{d:"M18.8 9.2h2.1"}),v.createElement("path",{d:"M17.8 6.8h1.8"})),ek=[{id:"home",label:"Inicio",href:"/",icon:Fi},{id:"stores",label:"Comercios",href:"/comercios",icon:qe},{id:"orders",label:"Pedidos",href:"/pedidos",icon:qt},{id:"alerts",label:"Notificaciones",href:"/notificaciones",icon:nt},{id:"account",label:"Cuenta",href:"/mi-cuenta",icon:Qe}],tk=[{id:"home",label:"Inicio",href:"/",icon:Fi},{id:"categories",label:"Categorías",href:"/comercios",icon:Ha},{id:"orders",label:"Pedidos",href:"/pedidos",icon:qt},{id:"favorites",label:"Favoritos",href:"/favoritos",icon:Vn},{id:"account",label:"Cuenta",href:"/mi-cuenta",icon:Qe}],Rr=[{id:"centro",label:"La Francia",detail:"Córdoba · entrega rápida en radio corto",mapQuery:"La Francia Córdoba Argentina",note:"Buscamos ofertas, comercios y tiempos desde esta zona."},{id:"barrio-norte",label:"Barrio Norte",detail:"Mayor cobertura en comercios de cercanía",mapQuery:"Barrio Norte La Francia Córdoba",note:"Ideal para comparar precios entre tiendas de barrio."},{id:"ruta-19",label:"Zona Ruta 19",detail:"Cobertura de mayor distancia y pedidos grandes",mapQuery:"Ruta 19 La Francia Córdoba",note:"Útil para stock más amplio y comercios con delivery extendido."}],rk=[{id:"sort",label:"Ordenar",multi:!1,options:[{id:"featured",label:"Destacados",description:"Mayor relevancia y sponsor"},{id:"closest",label:"Más cercanos",description:"Primero lo que llega antes"},{id:"cheapest",label:"Más baratos",description:"Precio ascendente"},{id:"discount",label:"Mayor descuento",description:"Promos y rebajas"}]},{id:"service",label:"Servicio",multi:!0,options:[{id:"delivery",label:"Delivery",description:"Entrega a domicilio"},{id:"pickup",label:"Retiro",description:"Retiro en local"},{id:"openNow",label:"Abierto ahora",description:"Negocios disponibles ahora"}]},{id:"distance",label:"Cercanía",multi:!1,options:[{id:"near",label:"Hasta 1 km",description:"Entrega muy cercana"},{id:"five",label:"Hasta 5 km",description:"Cobertura ampliada"},{id:"twentyFive",label:"Hasta 25 km",description:"Cobertura extendida"},{id:"custom",label:"Personalizado:",description:"Ingresá un radio entero"}]}],ff=[{id:"pack-familiar",badge:"OFERTA DESTACADA",title:"Pack familiar",subtitle:"Todo lo que necesitás al mejor precio.",store:"Don José",href:"/productos/pack-familiar",cta:"Ver oferta",discount:"-20% descuento",tone:"blue",imageLabel:"Familia"},{id:"frescura-dia",badge:"PATROCINADO",title:"Frescura del día",subtitle:"Frutas y verduras listas para sumar al carrito.",store:"La Huerta",href:"/productos/frescura-del-dia",cta:"Explorar",discount:"-15% hoy",tone:"green",imageLabel:"Verduras"},{id:"asado-finde",badge:"OFERTA ESPECIAL",title:"Asado especial",subtitle:"Cortes seleccionados para el finde.",store:"La Estancia",href:"/productos/asado-especial",cta:"Ver promo",discount:"-10% carne",tone:"red",imageLabel:"Asado"}],Yn=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:L0,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:C0,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:k0,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:Ou,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Du,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:qe,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:N0,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:Hu,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:Cl,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:$0,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:S0,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:F0,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:A0,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:ft,tone:"red"}],nk=[{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",priceLevel:"$$",minOrder:2e3,badge:"Oferta destacada",href:"/comercios/almacen-juan"},{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",priceLevel:"$",minOrder:1500,badge:"Frescura diaria",href:"/comercios/almacen-juan"},{id:"la-estancia",name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",priceLevel:"$$$",minOrder:3e3,badge:"Asado especial",href:"/comercios/carniceria-central"},{id:"delicias",name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",priceLevel:"$",minOrder:1200,badge:"Recién horneado",href:"/comercios/panaderia-la-esquina"}],ik=[{id:"fast",title:"Delivery rápido",description:"Llegamos a tu casa",icon:J$},{id:"local",title:"Comercio local",description:"Apoyá a los negocios de La Francia",icon:z0},{id:"secure",title:"Pago seguro",description:"Pagá como quieras",icon:dr}],ak=[{id:"banana-premium",product:"Banana premium",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:1700,oldPrice:2e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Bananas",href:"/productos/banana-premium"},{id:"bife-ancho",product:"Bife ancho",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:9900,oldPrice:11e3,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Carne",href:"/productos/bife-ancho"},{id:"coca-cola-3l",product:"Coca Cola 3L",store:"Don José",categoryId:"bebidas",distanceKm:.9,price:3500,oldPrice:4400,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Cola",href:"/productos/coca-cola-3l"},{id:"pan-frances",product:"Pan francés x 6",store:"Delicias",categoryId:"panaderia",distanceKm:1.5,price:2550,oldPrice:3e3,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"orange",imageLabel:"Pan",href:"/productos/pan-frances"}],Co="/LaFranciaGO/favicon.png",mf=420,ok=84,sk=l.aside`
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
`,lk=l(zl)`
  height: 100%;
`,ck=[{id:"coca-cola",initials:"CC",product:"Coca Cola 3L",store:"Don José Almacén",quantity:"1 unidad",price:3500,tone:"blue"},{id:"bife-ancho",initials:"LE",product:"Bife ancho",store:"La Estancia Carnicería",quantity:"1 kg",price:9900,tone:"red"},{id:"pan-frances",initials:"DE",product:"Pan francés x 6",store:"Delicias Panadería",quantity:"1 unidad",price:2550,tone:"orange"}],vc=e=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e)}`,gf={"pack-familiar":vc(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dbeafe" />
          <stop offset="55%" stop-color="#eff6ff" />
          <stop offset="100%" stop-color="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="496" cy="108" r="74" fill="#fde68a" opacity="0.48" />
      <circle cx="118" cy="86" r="42" fill="#ffffff" opacity="0.45" />
      <rect x="92" y="160" width="456" height="148" rx="36" fill="rgba(255,255,255,0.52)" />
      <rect x="146" y="122" width="124" height="176" rx="24" fill="#ffffff" />
      <rect x="282" y="108" width="114" height="190" rx="24" fill="#eff6ff" />
      <rect x="408" y="132" width="110" height="166" rx="24" fill="#fff7ed" />
      <circle cx="208" cy="190" r="28" fill="#f59e0b" />
      <circle cx="340" cy="176" r="30" fill="#22c55e" />
      <circle cx="464" cy="204" r="22" fill="#ef4444" />
      <rect x="188" y="236" width="42" height="18" rx="9" fill="#1d4ed8" opacity="0.2" />
      <rect x="318" y="228" width="48" height="18" rx="9" fill="#16a34a" opacity="0.2" />
    </svg>
  `),"frescura-del-dia":vc(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dcfce7" />
          <stop offset="55%" stop-color="#f0fdf4" />
          <stop offset="100%" stop-color="#bbf7d0" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="506" cy="98" r="82" fill="#fef08a" opacity="0.38" />
      <circle cx="116" cy="106" r="44" fill="#ffffff" opacity="0.4" />
      <rect x="90" y="170" width="460" height="136" rx="34" fill="rgba(255,255,255,0.54)" />
      <ellipse cx="226" cy="220" rx="52" ry="60" fill="#22c55e" />
      <ellipse cx="338" cy="214" rx="58" ry="64" fill="#86efac" />
      <ellipse cx="444" cy="226" rx="54" ry="58" fill="#f97316" />
      <circle cx="230" cy="220" r="22" fill="#4ade80" />
      <circle cx="338" cy="214" r="24" fill="#16a34a" />
      <circle cx="444" cy="226" r="20" fill="#fb923c" />
      <path d="M200 176c14-20 36-28 58-28" stroke="#166534" stroke-width="12" stroke-linecap="round" />
      <path d="M314 170c16-18 36-26 58-26" stroke="#15803d" stroke-width="12" stroke-linecap="round" />
      <path d="M418 182c14-16 32-24 52-24" stroke="#c2410c" stroke-width="12" stroke-linecap="round" />
    </svg>
  `),"asado-especial":vc(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fee2e2" />
          <stop offset="55%" stop-color="#fff1f2" />
          <stop offset="100%" stop-color="#fecaca" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="500" cy="102" r="78" fill="#f59e0b" opacity="0.35" />
      <circle cx="114" cy="94" r="40" fill="#ffffff" opacity="0.42" />
      <rect x="92" y="166" width="456" height="136" rx="32" fill="rgba(255,255,255,0.56)" />
      <rect x="172" y="136" width="292" height="162" rx="28" fill="#7f1d1d" />
      <rect x="184" y="148" width="268" height="38" rx="19" fill="#b91c1c" />
      <rect x="198" y="194" width="232" height="22" rx="11" fill="#ef4444" opacity="0.7" />
      <circle cx="238" cy="232" r="20" fill="#dc2626" />
      <circle cx="320" cy="240" r="24" fill="#f59e0b" />
      <circle cx="398" cy="228" r="18" fill="#16a34a" />
      <path d="M220 126c10-24 24-36 42-42" stroke="#7c2d12" stroke-width="10" stroke-linecap="round" />
      <path d="M320 124c12-22 26-34 44-40" stroke="#7c2d12" stroke-width="10" stroke-linecap="round" />
      <path d="M418 126c10-22 22-34 40-40" stroke="#7c2d12" stroke-width="10" stroke-linecap="round" />
    </svg>
  `)},dk=e=>({"--promo-art":`url("${gf[e]??gf["pack-familiar"]}")`}),uk={featured:"Destacados",closest:"Más cercanos",cheapest:"Más baratos",discount:"Mayor descuento"},pk=e=>{const t=e.replace(/\D/g,"");return t?String(Math.max(1,Number.parseInt(t,10)||1)):"1"},hk=e=>`Hasta ${e}km`,wc=(e,...t)=>{const r=sa(e);return r?t.filter(i=>i!==void 0).join(" ").toLowerCase().includes(r):!0},yf=[{title:"Inicio",subtitle:"Resumen, promos y accesos rápidos",to:"/",icon:Fi,end:!0},{title:"Comercios",subtitle:"Buscá por rubro o cerca de tu zona",to:"/comercios",icon:qe},{title:"Pedidos",subtitle:"Seguimiento de compras y entregas",to:"/pedidos",icon:qt},{title:"Notificaciones",subtitle:"Alertas y novedades del marketplace",to:"/notificaciones",icon:nt},{title:"Favoritos",subtitle:"Guardados y productos atentos",to:"/favoritos",icon:Vn},{title:"Mi cuenta",subtitle:"Perfil, seguridad y datos",to:"/mi-cuenta",icon:Qe}],xf=[{title:"Publicar comercio",subtitle:"Sumá tu negocio al marketplace",to:"/registro/comercio",icon:dr},{title:"Trabaja con nosotros",subtitle:"Registrate como delivery y cobrá por tus entregas",to:"/trabaja-con-nosotros",icon:ft}],vf=[{id:"sales",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:mi,items:[{icon:qe,title:"Nueva venta confirmada",subtitle:"Se acreditó un pedido en Don José.",date:new Date(2026,7,14)},{icon:qt,title:"Pedido listo para entregar",subtitle:"Retirá el paquete en el comercio.",date:new Date(2026,7,13)},{icon:nt,title:"Promoción aprobada",subtitle:"Tu anuncio quedó visible en el home.",date:new Date(2025,7,14)}]},{id:"orders",title:"Pedidos y entregas",subtitle:"Seguimiento y estado de entregas.",icon:ft,items:[{icon:ft,title:"Reparto en camino",subtitle:"Tu delivery ya salió hacia destino.",date:new Date(2026,7,14)},{icon:qt,title:"Pedido preparado",subtitle:"El comercio terminó el armado.",date:new Date(2026,7,12)},{icon:qe,title:"Comercio en espera",subtitle:"Hay una novedad en el local asignado.",date:new Date(2025,7,14)}]},{id:"account",title:"Cuenta y seguridad",subtitle:"Perfil, pagos y accesos.",icon:dr,items:[{icon:Qe,title:"Perfil actualizado",subtitle:"Revisá tus datos personales y foto.",date:new Date(2026,7,14)},{icon:dr,title:"Acceso seguro",subtitle:"Tu cuenta quedó protegida con verificación.",date:new Date(2026,7,11)},{icon:mi,title:"Método de pago listo",subtitle:"Alias o CBU disponible para cobros.",date:new Date(2025,7,14)}]},{id:"promos",title:"Promos y beneficios",subtitle:"Descuentos, alertas y novedades.",icon:nt,items:[{icon:mi,title:"Descuento activado",subtitle:"Hay una promo vigente cerca tuyo.",date:new Date(2026,7,14)},{icon:Vn,title:"Favorito con rebaja",subtitle:"Uno de tus guardados bajó de precio.",date:new Date(2026,7,13)},{icon:nt,title:"Novedad del día",subtitle:"Entró una oferta nueva al carrusel.",date:new Date(2025,7,14)}]}],fk=e=>{const t=new Date,r=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=Math.round((r.getTime()-i.getTime())/864e5);if(a===0)return"Hoy";if(a===1)return"Ayer";const o=String(i.getDate()).padStart(2,"0"),s=String(i.getMonth()+1).padStart(2,"0");return i.getFullYear()===r.getFullYear()?`${o}/${s}`:`${o}/${s}/${String(i.getFullYear()).slice(-2)}`};function mk(){var op,sp;const{isDarkMode:e,toggleMode:t}=j0(),r=nl(),i=Un(),[a,o]=v.useState(""),[s,c]=v.useState("featured"),[d,u]=v.useState("five"),[g,f]=v.useState([]),[x,S]=v.useState({delivery:!1,pickup:!1,openNow:!1}),[j,C]=v.useState(((op=Rr[0])==null?void 0:op.id)??""),[w,m]=v.useState(!1),[p,y]=v.useState(!1),[$,P]=v.useState("opening"),[L,N]=v.useState(!1),[I,W]=v.useState(!1),[D,ge]=v.useState(!1),[pe,Te]=v.useState(""),[_e,De]=v.useState(j),[ve,Be]=v.useState(((sp=Rr[0])==null?void 0:sp.mapQuery)??""),[A,V]=v.useState("1"),[B,oe]=v.useState(!1),[E,b]=v.useState(!1),[M,_]=v.useState("opening"),[k,X]=v.useState(null),R=v.useRef(null),he=v.useRef(null),ee=v.useRef(null),re=v.useRef(null),K=v.useRef(null),Ce=v.useRef(null),Ve=v.useRef([]),te=v.useRef(0),Fe=v.useRef(null),ue=v.useRef(null),We=v.useRef(null),[vn,He]=v.useState(0),[wn,Fr]=v.useState(!1),[xt,G]=v.useState(!1),[ze,Gn]=v.useState(!1),[fe,ur]=v.useState({firstOffset:0,step:0,loopWidth:0}),[Qu,Yu]=v.useState({canScrollLeft:!1,canScrollRight:!1}),[qu,S1]=v.useState(()=>typeof window<"u"?window.innerWidth>=1024:!1);v.useEffect(()=>{const h=document.body.style.overflow;return(w||p||L||I||D||B||E)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=h}},[I,L,D,p,w,E,B]),v.useLayoutEffect(()=>{const h=K.current;if(!h)return;const z=()=>{document.documentElement.style.setProperty("--home-topbar-height",`${h.offsetHeight}px`)};z();const F=typeof ResizeObserver<"u"?new ResizeObserver(z):null;return F==null||F.observe(h),window.addEventListener("resize",z),()=>{F==null||F.disconnect(),window.removeEventListener("resize",z),document.documentElement.style.removeProperty("--home-topbar-height")}},[]),v.useEffect(()=>{if(typeof window>"u")return;const h=window.matchMedia("(min-width: 1024px)"),z=()=>S1(h.matches);return z(),typeof h.addEventListener=="function"?(h.addEventListener("change",z),()=>{h.removeEventListener("change",z)}):(h.addListener(z),()=>{h.removeListener(z)})},[]),v.useEffect(()=>{R.current!==null&&(window.cancelAnimationFrame(R.current),R.current=null),he.current!==null&&(window.clearTimeout(he.current),he.current=null);const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(w){if(y(!0),h){P("open");return}P("opening"),R.current=window.requestAnimationFrame(()=>{P("open"),R.current=null});return}if(p){if(h){y(!1),P("opening");return}P("closing"),he.current=window.setTimeout(()=>{y(!1),P("opening"),he.current=null},mf)}},[p,w]),v.useEffect(()=>()=>{R.current!==null&&window.cancelAnimationFrame(R.current),he.current!==null&&window.clearTimeout(he.current),ee.current!==null&&window.cancelAnimationFrame(ee.current),re.current!==null&&window.clearTimeout(re.current)},[]),v.useEffect(()=>{ee.current!==null&&(window.cancelAnimationFrame(ee.current),ee.current=null),re.current!==null&&(window.clearTimeout(re.current),re.current=null);const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(B){if(b(!0),h){_("open");return}_("opening"),ee.current=window.requestAnimationFrame(()=>{_("open"),ee.current=null});return}if(E){if(h){b(!1),_("opening");return}_("closing"),re.current=window.setTimeout(()=>{b(!1),_("opening"),re.current=null},260)}},[E,B]);const Jt=v.useCallback(()=>{m(!1),N(!1),W(!1),ge(!1),oe(!1),X(null)},[]);v.useEffect(()=>{if(!w&&!L&&!I&&!D&&!B)return;const h=z=>{z.key==="Escape"&&Jt()};return window.addEventListener("keydown",h),()=>{window.removeEventListener("keydown",h)}},[I,Jt,L,D,w,B]);const le=v.useMemo(()=>Rr.find(h=>h.id===j)??Rr[0],[j]);v.useEffect(()=>{D&&(Te(""),De((le==null?void 0:le.id)??""),Be((le==null?void 0:le.mapQuery)??""))},[D,le]);const Kn=v.useMemo(()=>Rr.find(h=>h.id===_e)??le,[_e,le]),C1=v.useMemo(()=>{const h=sa(pe),z=h?Rr.filter(F=>wc(h,F.label,F.detail,F.note,F.mapQuery)):Rr;return z.length>0?z:Rr},[pe]),z1=_e!==(le==null?void 0:le.id)||ve!==((le==null?void 0:le.mapQuery)??""),P1=Number.parseInt(A,10)||1,Ga=Math.max(1,P1),Zu=Math.min(50,Ga),Xu=Ga>50,E1=hk(d==="custom"?Zu:d==="near"?1:d==="twentyFive"?25:5),M1=`${(le==null?void 0:le.label)??"Sin ubicación"} - ${E1}`,Ju=h=>{switch(d){case"near":return h<=1;case"five":return h<=5;case"twentyFive":return h<=25;case"custom":return h<=Zu;default:return h<=5}},Ka=v.useMemo(()=>{const h=[];return s!=="featured"&&h.push({key:`sort-${s}`,label:uk[s],onRemove:()=>c("featured")}),x.delivery&&h.push({key:"service-delivery",label:"Delivery",onRemove:()=>S(z=>({...z,delivery:!1}))}),x.pickup&&h.push({key:"service-pickup",label:"Retiro",onRemove:()=>S(z=>({...z,pickup:!1}))}),x.openNow&&h.push({key:"service-openNow",label:"Abierto ahora",onRemove:()=>S(z=>({...z,openNow:!1}))}),g.forEach(z=>{const F=Yn.find(ne=>ne.id===z);F&&h.push({key:`category-${z}`,label:F.name,onRemove:()=>{f(ne=>ne.filter(ot=>ot!==z))}})}),h},[d,g,x.delivery,x.openNow,x.pickup,s,Ga]),Li=(s==="featured"?0:1)+(d==="five"?0:1)+(x.delivery?1:0)+(x.pickup?1:0)+(x.openNow?1:0)+g.length,ep=!!a.trim()||Li>0?"No se encontraron coincidencias para los filtros actuales.":"No se encontraron coincidencias para este radio de ubicación.";v.useEffect(()=>{const h=We.current;if(!h||Ka.length===0){Yu({canScrollLeft:!1,canScrollRight:!1});return}const z=()=>{const ne=Math.max(0,h.scrollWidth-h.clientWidth),ot=h.scrollLeft>2,pr=ne-h.scrollLeft>2;Yu(It=>It.canScrollLeft===ot&&It.canScrollRight===pr?It:{canScrollLeft:ot,canScrollRight:pr})};z(),h.addEventListener("scroll",z,{passive:!0}),window.addEventListener("resize",z);const F=typeof ResizeObserver<"u"?new ResizeObserver(z):null;return F==null||F.observe(h),()=>{h.removeEventListener("scroll",z),window.removeEventListener("resize",z),F==null||F.disconnect()}},[Ka.length,Ga,d,g.length,x.delivery,x.openNow,x.pickup,s]);const T1=v.useMemo(()=>{const h=qu?9:5,z=a?Yn.filter(F=>wc(a,F.name,F.description)):Yn.slice(0,h);return z.length>0?z.slice(0,h):Yn.slice(0,h)},[qu,a]),at=v.useMemo(()=>{const h=ff.filter(z=>wc(a,z.title,z.subtitle,z.store,z.badge));return h.length>0?h:ff},[a]),Ll=v.useMemo(()=>[...at,...at],[at]);v.useEffect(()=>{te.current=0,He(0),Fe.current!==null&&(window.cancelAnimationFrame(Fe.current),Fe.current=null);const h=Ce.current;h&&(h.scrollLeft=0)},[at]),v.useEffect(()=>{const h=Ce.current;if(!h||Ll.length===0||at.length===0)return;const z=()=>{const F=Ve.current[0],ne=Ve.current[1],ot=Ve.current[at.length];if(!F||!ne||!ot)return;const pr=h.getBoundingClientRect(),It=F.getBoundingClientRect(),Nl=ne.getBoundingClientRect(),Ri=ot.getBoundingClientRect(),I1=It.left-pr.left+h.scrollLeft,lp=Nl.left-It.left,cp=Ri.left-It.left;lp>0&&cp>0&&ur({firstOffset:I1,step:lp,loopWidth:cp})};if(z(),typeof ResizeObserver<"u"){const F=new ResizeObserver(z);F.observe(h);const ne=Ve.current[0];return ne&&F.observe(ne),()=>{F.disconnect()}}return window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z)}},[Ll.length,at.length,at]),v.useEffect(()=>{const h=Ce.current;if(!h||fe.step===0||fe.loopWidth===0||at.length===0)return;const z=()=>{const F=((h.scrollLeft-fe.firstOffset)%fe.loopWidth+fe.loopWidth)%fe.loopWidth,ne=Math.round(F/fe.step)%at.length;ne!==te.current&&(te.current=ne,He(ne))};return h.addEventListener("scroll",z,{passive:!0}),()=>{h.removeEventListener("scroll",z)}},[at.length,fe.firstOffset,fe.loopWidth,fe.step]),v.useEffect(()=>{const h=Ce.current;if(!h||fe.step===0||fe.loopWidth===0||at.length===0)return;let z=0,F=performance.now();const ne=ot=>{const pr=ot-F;if(F=ot,!(wn||xt||ze)){for(h.scrollLeft+=ok*pr/1e3;h.scrollLeft-fe.firstOffset>=fe.loopWidth;)h.scrollLeft-=fe.loopWidth;const Nl=((h.scrollLeft-fe.firstOffset)%fe.loopWidth+fe.loopWidth)%fe.loopWidth,Ri=Math.round(Nl/fe.step)%at.length;Ri!==te.current&&(te.current=Ri,He(Ri))}z=window.requestAnimationFrame(ne)};return z=window.requestAnimationFrame(ne),Fe.current=z,()=>{window.cancelAnimationFrame(z),Fe.current===z&&(Fe.current=null)}},[ze,xt,wn,fe.firstOffset,fe.loopWidth,fe.step,at.length]);const tp=v.useMemo(()=>{const h=sa(a),z=nk.filter(F=>{const ne=g.length===0||g.includes(F.categoryId),ot=Ju(F.distanceKm),pr=(!x.delivery||F.delivery)&&(!x.pickup||F.pickup)&&(!x.openNow||F.openNow),It=!h||[F.name,F.category,F.address].join(" ").toLowerCase().includes(h);return ne&&ot&&pr&&It});return s==="featured"?z:z.sort((F,ne)=>{switch(s){case"closest":return F.distanceKm-ne.distanceKm;case"cheapest":return F.etaMin-ne.etaMin;case"discount":return ne.rating-F.rating||F.distanceKm-ne.distanceKm;default:return 0}})},[d,a,g,x,s]),rp=v.useMemo(()=>{const h=sa(a),z=ak.filter(F=>{const ne=g.length===0||g.includes(F.categoryId),ot=Ju(F.distanceKm),pr=(!x.delivery||F.delivery)&&(!x.pickup||F.pickup)&&(!x.openNow||F.openNow),It=!h||[F.product,F.store].join(" ").toLowerCase().includes(h);return ne&&ot&&pr&&It});return s==="featured"?z:z.sort((F,ne)=>{switch(s){case"closest":return F.distanceKm-ne.distanceKm;case"cheapest":return F.price-ne.price;case"discount":return ne.discount-F.discount||F.price-ne.price;default:return 0}})},[d,a,g,x,s]),F1=`https://www.google.com/maps?q=${encodeURIComponent(D?ve||(le==null?void 0:le.mapQuery)||"La Francia":(le==null?void 0:le.mapQuery)||"La Francia")}&output=embed`,L1=h=>{h.preventDefault()},Rl=h=>{f(z=>z.includes(h)?z.filter(F=>F!==h):[...z,h])},R1=h=>{S(z=>({...z,[h]:!z[h]}))},N1=()=>{c("featured"),u("five"),V("1"),S({delivery:!1,pickup:!1,openNow:!1}),f([])},Qa=h=>{Jt(),h(!0)},A1=()=>{Jt(),oe(!0)},np=()=>{if(B||E){Jt();return}A1()},er=v.useMemo(()=>vf.find(h=>h.id===k)??null,[k]),ip=v.useCallback(h=>{const z=Ce.current;!z||fe.step===0||z.scrollBy({left:h*fe.step,behavior:"smooth"})},[fe.step]),ap=v.useCallback((h,z)=>{h.preventDefault(),Jt(),window.setTimeout(()=>{i.pathname!==z&&r(z)},mf)},[Jt,i.pathname,r]);return n.jsxs(At,{showSearch:!1,footerText:"Inicio del marketplace: promociones, comercios y ofertas.",children:[n.jsxs("div",{"aria-hidden":"true",style:{display:"none"},children:[n.jsx(Pb,{ref:K,children:n.jsxs(Eb,{children:[n.jsxs(Mb,{children:[n.jsxs(Tb,{children:[n.jsx(Fb,{type:"button",onClick:()=>Qa(m),"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"home-menu-drawer","aria-expanded":w||p,children:n.jsx(P0,{size:20,"aria-hidden":"true"})}),n.jsx(Rb,{"aria-label":"LaFranciaGO",children:n.jsx(vo,{children:n.jsx(wo,{src:Co,alt:"","aria-hidden":"true"})})})]}),n.jsxs(Lb,{"aria-label":"LaFranciaGO",children:[n.jsx(vo,{children:n.jsx(wo,{src:Co,alt:"","aria-hidden":"true"})}),n.jsxs(Nb,{children:[n.jsxs(bo,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(jo,{children:"GO"})]}),n.jsx(Ab,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),n.jsxs(B0,{"aria-label":"LaFranciaGO",children:[n.jsxs(bo,{"aria-hidden":"true",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(jo,{children:"GO"})]}),n.jsx($s,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]}),n.jsxs(_b,{"aria-label":"Acciones rápidas",children:[n.jsx(Cs,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(On,{size:18,"aria-hidden":"true"})}),n.jsx(Ss,{ref:ue,type:"button",onClick:np,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"home-notifications-popover","aria-expanded":B||E,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(Fd,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})})]}),n.jsxs(Ib,{children:[n.jsx(Cs,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(On,{size:18,"aria-hidden":"true"})}),n.jsx(Ss,{type:"button",onClick:np,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"home-notifications-popover","aria-expanded":B||E,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(Ob,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})})]})]}),n.jsx(Db,{"aria-label":"Navegación principal",children:ek.map(h=>{const z=h.icon;return n.jsxs(Bb,{to:h.href,children:[n.jsx(Hb,{children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsx("span",{children:h.label})]},h.id)})})]})}),n.jsx(sk,{"aria-label":"Navegación principal",children:n.jsxs(lk,{children:[n.jsxs(zs,{"aria-label":"LaFranciaGO",children:[n.jsx(vo,{children:n.jsx(wo,{src:Co,alt:"","aria-hidden":"true"})}),n.jsxs(Ps,{children:[n.jsxs(bo,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(jo,{children:"GO"})]}),n.jsx($s,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]})]}),n.jsxs(Gr,{children:[n.jsx(Kr,{children:"NAVEGACIÓN"}),n.jsx(Qr,{"aria-label":"Navegación principal",children:yf.map(h=>{const z=h.icon;return n.jsxs(Yr,{to:h.to,end:h.end,children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:h.title}),n.jsx(Jr,{children:h.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},h.to)})})]}),n.jsxs(Gr,{children:[n.jsx(Kr,{children:"ACCIONES"}),n.jsx(Qr,{"aria-label":"Acciones rápidas",children:xf.map(h=>{const z=h.icon;return n.jsxs(Yr,{to:h.to,children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:h.title}),n.jsx(Jr,{children:h.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},h.to)})})]}),n.jsx("div",{style:{flex:1},"aria-hidden":"true"}),n.jsx(Es,{children:n.jsxs(Ms,{type:"button",onClick:t,role:"switch","aria-checked":e,children:[n.jsx(Ts,{"data-active":"true","aria-hidden":"true",children:e?n.jsx(Vr,{size:16,"aria-hidden":"true"}):n.jsx(Wr,{size:16,"aria-hidden":"true"})}),n.jsxs(Rs,{children:[n.jsx(Ns,{children:e?"Tema oscuro":"Tema claro"}),n.jsx(As,{children:"Ajustá el contraste de toda la app."})]}),n.jsxs(Fs,{"aria-hidden":"true",children:[n.jsx(tn,{"data-side":"top","data-active":!e,children:n.jsx(Wr,{size:12,"aria-hidden":"true"})}),n.jsx(Ls,{"data-mode":e?"dark":"light"}),n.jsx(tn,{"data-side":"bottom","data-active":e,children:n.jsx(Vr,{size:12,"aria-hidden":"true"})})]})]})})]})}),E&&n.jsx(kn,{"data-notifications":"true","data-state":M,role:"presentation",onClick:Jt,children:n.jsxs(Sn,{id:"home-notifications-popover","data-notifications":"true","data-state":M,role:"dialog","aria-modal":"true","aria-labelledby":"home-notifications-title",onClick:h=>h.stopPropagation(),children:[n.jsxs(W0,{children:[er?n.jsx(Is,{type:"button",onClick:()=>X(null),"aria-label":"Volver a las notificaciones",children:n.jsx(Ho,{size:14,"aria-hidden":"true"})}):n.jsx(G0,{"aria-hidden":"true"}),n.jsxs(K0,{children:[n.jsx(Q0,{id:"home-notifications-title",children:(er==null?void 0:er.title)??"Notificaciones"}),n.jsx(Y0,{children:(er==null?void 0:er.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),n.jsx(Is,{type:"button",onClick:()=>{Jt(),r("/notificaciones")},"aria-label":"Configuración de notificaciones",children:n.jsx(T0,{size:14,"aria-hidden":"true"})})]}),n.jsx(q0,{}),n.jsx(Z0,{children:er?n.jsx(a1,{"aria-label":er.title,children:er.items.map(h=>{const z=h.icon;return n.jsxs(o1,{children:[n.jsx(s1,{"aria-hidden":"true",children:n.jsx(z,{size:14,"aria-hidden":"true"})}),n.jsxs(l1,{children:[n.jsxs(c1,{children:[n.jsx(d1,{children:h.title}),n.jsx(u1,{children:fk(h.date)})]}),n.jsx(p1,{children:h.subtitle})]})]},`${er.id}-${h.title}`)})}):n.jsx(X0,{"aria-label":"Secciones de notificaciones",children:vf.map(h=>{const z=h.icon;return n.jsxs(J0,{type:"button",onClick:()=>X(h.id),children:[n.jsx(e1,{"aria-hidden":"true",children:n.jsx(z,{size:16,"aria-hidden":"true"})}),n.jsxs(t1,{children:[n.jsx(r1,{children:h.title}),n.jsx(n1,{children:h.subtitle})]}),n.jsx(i1,{"aria-hidden":"true",children:n.jsx(Yi,{size:16,"aria-hidden":"true"})})]},h.id)})})})]})})]}),n.jsx("div",{children:n.jsxs(C$,{children:[n.jsxs(z$,{children:[n.jsx(Ub,{id:"inicio",children:n.jsx(Ui,{children:n.jsxs(Vb,{children:[n.jsxs(Wb,{children:[n.jsx(Gb,{children:n.jsxs(Kb,{onSubmit:L1,children:[n.jsx(Oh,{htmlFor:"home-search",children:n.jsxs(Dh,{children:[n.jsx(Td,{size:18,"aria-hidden":"true"}),n.jsx(Bh,{id:"home-search",type:"search",value:a,onChange:h=>o(h.target.value),placeholder:"¿Qué estás buscando hoy?","aria-label":"Buscar productos, comercios o categorías"})]})}),n.jsxs(Qb,{type:"button",onClick:()=>Qa(N),"data-active":L,"aria-label":"Abrir filtros",children:[n.jsx(Ow,{size:18,"aria-hidden":"true"}),Li>0&&n.jsx(Yb,{children:Li})]})]})}),n.jsxs(ej,{children:[n.jsxs(tj,{children:[n.jsx(Et,{size:18,"aria-hidden":"true"}),n.jsx("span",{children:M1})]}),n.jsx(rj,{type:"button",onClick:()=>Qa(ge),children:"Cambiar"})]}),Ka.length>0&&n.jsxs(Zb,{children:[Qu.canScrollLeft&&n.jsx(Hh,{"data-side":"left","aria-hidden":"true",children:n.jsx(Ho,{size:14,"aria-hidden":"true"})}),n.jsx(qb,{ref:We,"aria-label":"Filtros activos",children:Ka.map(h=>n.jsxs(Xb,{type:"button",onClick:h.onRemove,"aria-label":`Quitar filtro ${h.label}`,children:[n.jsx("span",{children:h.label}),n.jsx(Jb,{"aria-hidden":"true",children:n.jsx($n,{size:10,"aria-hidden":"true"})})]},h.key))}),Qu.canScrollRight&&n.jsx(Hh,{"data-side":"right","aria-hidden":"true",children:n.jsx(Yi,{size:14,"aria-hidden":"true"})})]})]}),n.jsxs(nj,{"aria-label":"Ofertas patrocinadas",children:[n.jsx(Uh,{type:"button","data-side":"left",onClick:()=>ip(-1),"aria-label":"Oferta anterior",children:n.jsx(Ho,{size:14,"aria-hidden":"true"})}),n.jsx(Uh,{type:"button","data-side":"right",onClick:()=>ip(1),"aria-label":"Siguiente oferta",children:n.jsx(Yi,{size:14,"aria-hidden":"true"})}),n.jsx(ij,{ref:Ce,"aria-label":"Carrusel de ofertas patrocinadas",onPointerEnter:()=>Fr(!0),onPointerLeave:()=>Fr(!1),onFocusCapture:()=>Gn(!0),onBlurCapture:h=>{h.currentTarget.contains(h.relatedTarget)||Gn(!1)},onPointerDownCapture:h=>{h.pointerType!=="mouse"&&G(!0)},onPointerUpCapture:()=>G(!1),onPointerCancelCapture:()=>G(!1),children:Ll.map((h,z)=>{const F=z>=at.length;return n.jsxs(aj,{ref:ne=>{Ve.current[z]=ne},to:h.href,"data-tone":h.tone,"aria-hidden":F,tabIndex:F?-1:0,"aria-label":`${h.title} · ${h.store}`,children:[n.jsxs(oj,{children:[n.jsx(sj,{children:h.badge}),n.jsx(lj,{children:h.title}),n.jsx(cj,{children:h.store}),n.jsx(dj,{children:h.subtitle})]}),n.jsxs(uj,{style:dk(h.id),children:[n.jsx(pj,{children:h.imageLabel}),n.jsx(hj,{children:h.discount})]})]},`${h.id}-${z}`)})}),n.jsx(fj,{"aria-label":"Indicadores del carrusel",children:at.map((h,z)=>n.jsx(mj,{"data-active":z===vn},h.id))})]})]})})}),n.jsx($o,{children:n.jsx(Ui,{children:n.jsxs(gj,{children:[T1.map(h=>{const z=h.icon;return n.jsxs(yj,{type:"button","data-tone":h.tone,"data-active":g.includes(h.id),onClick:()=>Rl(h.id),children:[n.jsx(Vo,{children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsx(Ld,{children:h.name}),n.jsx(qh,{children:h.description})]},h.id)}),n.jsxs(xj,{type:"button",onClick:()=>Qa(W),children:[n.jsx(Vo,{children:n.jsx(Ha,{size:18,"aria-hidden":"true"})}),n.jsx(vj,{children:"Ver más"}),n.jsx(qh,{children:"Todas las categorías"})]})]})})}),n.jsx($o,{children:n.jsx(Ui,{children:n.jsxs(ko,{children:[n.jsxs(Vh,{children:[n.jsx(Kh,{children:n.jsx(Qh,{children:"Comercios destacados"})}),n.jsx(Yh,{to:"/comercios",children:"Ver todos"})]}),n.jsx(Jj,{children:tp.length>0?tp.map(h=>n.jsxs(e$,{children:[n.jsx(t$,{children:n.jsx(a$,{"data-tone":h.tone,children:h.logoLabel})}),n.jsxs(r$,{children:[n.jsxs(n$,{children:[n.jsxs(i$,{children:[n.jsx(o$,{children:h.name}),n.jsx(s$,{children:h.category})]}),n.jsx(sf,{children:Hw(h.etaMin,h.etaMax)})]}),n.jsxs(c$,{children:[h.priceLevel," · Min. ",$e(h.minOrder)]}),n.jsx(l$,{children:n.jsx(sf,{"data-tone":h.tone,children:h.badge})})]})]},h.id)):n.jsx(Wh,{children:n.jsx(Gh,{children:ep})})})]})})}),n.jsx($o,{children:n.jsx(Ui,{children:n.jsx(d$,{children:ik.map(h=>{const z=h.icon;return n.jsxs(u$,{children:[n.jsx(h$,{children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsxs(p$,{children:[n.jsx(f$,{children:h.title}),n.jsx(m$,{children:h.description})]})]},h.id)})})})}),n.jsx($o,{id:"ofertas",children:n.jsx(Ui,{children:n.jsxs(ko,{children:[n.jsxs(Vh,{children:[n.jsx(Kh,{children:n.jsx(Qh,{children:"Ofertas cerca tuyo"})}),n.jsx(Yh,{to:"/comercios",children:"Ver todas"})]}),n.jsx(g$,{children:rp.length>0?rp.map(h=>n.jsxs(y$,{children:[n.jsx(v$,{"data-tone":h.tone,children:n.jsx(w$,{children:Bw(-h.discount)})}),n.jsxs(x$,{children:[n.jsx(b$,{children:h.product}),n.jsx(j$,{children:h.store}),n.jsxs($$,{children:[n.jsx(k$,{children:$e(h.price)}),n.jsx(S$,{children:$e(h.oldPrice)})]})]})]},h.id)):n.jsx(Wh,{children:n.jsx(Gh,{children:ep})})})]})})})]}),n.jsxs(P$,{"aria-label":"Resumen del pedido",children:[n.jsxs(ko,{children:[n.jsxs(lf,{children:[n.jsx(cf,{children:"Tu pedido"}),n.jsx(E$,{children:"3 items"})]}),n.jsx(M$,{children:ck.map(h=>n.jsxs(T$,{children:[n.jsx(F$,{"data-tone":h.tone,children:h.initials}),n.jsxs(L$,{children:[n.jsx(R$,{children:h.product}),n.jsx(N$,{children:h.store}),n.jsx(A$,{children:h.quantity})]}),n.jsx(I$,{children:$e(h.price)})]},h.id))}),n.jsxs(_$,{children:[n.jsxs(hc,{children:[n.jsx("span",{children:"Subtotal"}),n.jsx("span",{children:$e(15950)})]}),n.jsxs(hc,{children:[n.jsx("span",{children:"Costo de entrega"}),n.jsx("span",{children:$e(350)})]}),n.jsxs(hc,{"data-emphasis":"true",children:[n.jsx("strong",{children:"Total estimado"}),n.jsx("strong",{children:$e(16300)})]})]}),n.jsxs(O$,{children:[n.jsx(D$,{to:"/carrito",children:"Ir al carrito"}),n.jsx(B$,{to:"/comercios",children:"Seguir comprando"})]})]}),n.jsxs(ko,{children:[n.jsx(lf,{children:n.jsx(cf,{children:"Entrega estimada"})}),n.jsxs(H$,{children:[n.jsxs(fc,{children:[n.jsx(mc,{"aria-hidden":"true",children:n.jsx(Ba,{size:14,"aria-hidden":"true"})}),n.jsxs(gc,{children:[n.jsx(yc,{children:"Tiempo"}),n.jsx(xc,{children:"15–25 min"})]})]}),n.jsxs(fc,{children:[n.jsx(mc,{"aria-hidden":"true",children:n.jsx(Et,{size:14,"aria-hidden":"true"})}),n.jsxs(gc,{children:[n.jsx(yc,{children:"Dirección"}),n.jsx(xc,{children:"Barrio Norte, La Francia"})]})]}),n.jsxs(fc,{children:[n.jsx(mc,{"aria-hidden":"true",children:n.jsx(qe,{size:14,"aria-hidden":"true"})}),n.jsxs(gc,{children:[n.jsx(yc,{children:"Horario"}),n.jsx(xc,{children:"Hoy 08:00 - 20:00"})]})]})]}),n.jsxs(U$,{children:[n.jsx(ft,{size:15,"aria-hidden":"true"}),n.jsx("span",{children:"¡Envío gratis en compras superiores a $15.000!"})]})]})]})]})}),n.jsxs("div",{"aria-hidden":"true",style:{display:"none"},children:[n.jsx(V$,{"aria-label":"Navegación móvil",children:n.jsx(W$,{children:tk.map(h=>{const z=h.icon,F=h.id==="orders";return n.jsx("li",{children:n.jsxs(G$,{to:h.href,"data-primary":h.id==="orders",children:[n.jsx(K$,{children:n.jsx(z,{size:F?32:18,"aria-hidden":"true"})}),n.jsx("span",{children:h.label})]})},h.id)})})}),p&&n.jsx(kn,{"data-drawer":"true","data-state":$,role:"presentation",onClick:Jt,children:n.jsxs(Sn,{id:"home-menu-drawer","data-drawer":"true","data-state":$,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:h=>h.stopPropagation(),children:[n.jsxs(V0,{children:[n.jsxs(zs,{"aria-label":"LaFranciaGO",children:[n.jsx(vo,{children:n.jsx(wo,{src:Co,alt:"","aria-hidden":"true"})}),n.jsx(Ps,{children:n.jsxs(bo,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(jo,{children:"GO"})]})})]}),n.jsx(qi,{type:"button",onClick:Jt,"aria-label":"Cerrar menú",children:n.jsx($n,{size:18,"aria-hidden":"true"})})]}),n.jsxs(zl,{children:[n.jsxs(Gr,{children:[n.jsx(Kr,{children:"Navegación"}),n.jsx(Qr,{"aria-label":"Navegación principal",children:yf.map(h=>{const z=h.icon;return n.jsxs(Yr,{to:h.to,end:h.end,onClick:F=>ap(F,h.to),children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:h.title}),n.jsx(Jr,{children:h.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},h.to)})})]}),n.jsxs(Gr,{children:[n.jsx(Kr,{children:"Acciones"}),n.jsx(Qr,{"aria-label":"Acciones rápidas",children:xf.map(h=>{const z=h.icon;return n.jsxs(Yr,{to:h.to,onClick:F=>ap(F,h.to),children:[n.jsx(qr,{"aria-hidden":"true",children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsxs(Zr,{children:[n.jsx(Xr,{children:h.title}),n.jsx(Jr,{children:h.subtitle})]}),n.jsx(en,{"aria-hidden":"true",children:n.jsx(Ur,{size:16,"aria-hidden":"true"})})]},h.to)})})]}),n.jsx(Es,{children:n.jsxs(Ms,{type:"button",onClick:t,role:"switch","aria-checked":e,children:[n.jsx(Ts,{"data-active":"true","aria-hidden":"true",children:e?n.jsx(Vr,{size:16,"aria-hidden":"true"}):n.jsx(Wr,{size:16,"aria-hidden":"true"})}),n.jsxs(Rs,{children:[n.jsx(Ns,{children:e?"Tema oscuro":"Tema claro"}),n.jsx(As,{children:"Ajustá el contraste de toda la app."})]}),n.jsxs(Fs,{"aria-hidden":"true",children:[n.jsx(tn,{"data-side":"top","data-active":!e,children:n.jsx(Wr,{size:12,"aria-hidden":"true"})}),n.jsx(Ls,{"data-mode":e?"dark":"light"}),n.jsx(tn,{"data-side":"bottom","data-active":e,children:n.jsx(Vr,{size:12,"aria-hidden":"true"})})]})]})})]})]})})]}),L&&n.jsx(kn,{"data-filters":"true",role:"presentation",onClick:()=>N(!1),children:n.jsxs(Sn,{"data-filters":"true",role:"dialog","aria-modal":"true","aria-labelledby":"home-filters-title",onClick:h=>h.stopPropagation(),children:[n.jsxs(Ij,{children:[n.jsxs(_j,{children:[n.jsx(Oj,{id:"home-filters-title",children:"Filtros"}),n.jsx(Dj,{children:Li>0?`${Li} activos · resultados al instante`:"Sin filtros · resultados al instante"})]}),n.jsx(qi,{type:"button",onClick:()=>N(!1),"aria-label":"Cerrar filtros",children:n.jsx($n,{size:18,"aria-hidden":"true"})})]}),n.jsxs(Bj,{children:[rk.map(h=>{const z=h.id==="sort"?"Elegí una sola forma de ordenar.":h.id==="service"?"Podés combinar varios criterios.":"Elegí un radio o cargá uno entero.";return n.jsxs(tf,{children:[n.jsxs(rf,{children:[n.jsxs("div",{children:[n.jsx(nf,{children:h.label}),n.jsx(af,{children:z})]}),n.jsxs(ef,{children:[h.options.length," opciones"]})]}),n.jsx(Hj,{children:h.options.map(F=>{const ne=h.id==="sort"?s===F.id:h.id==="distance"?d===F.id:x[F.id];return h.id==="distance"&&F.id==="custom"?n.jsxs("div",{children:[n.jsxs(Uj,{children:[n.jsx(Vj,{type:"button","data-active":d==="custom","aria-pressed":d==="custom",onClick:()=>u("custom"),children:"Personalizado:"}),n.jsxs(Wj,{"data-error":Xu,htmlFor:"custom-distance-km",children:[n.jsx(Gj,{id:"custom-distance-km",type:"text",inputMode:"numeric",pattern:"[0-9]*",value:A,disabled:d!=="custom","aria-label":"Distancia personalizada en kilómetros",onFocus:()=>u("custom"),onChange:ot=>{u("custom"),V(pk(ot.target.value))}}),n.jsx(Kj,{children:"km"})]})]}),d==="custom"&&Xu&&n.jsx(Qj,{children:"Intente cambiar la localidad para alcanzar otros negocios"})]},F.id):n.jsx(h1,{type:"button","data-active":ne,"aria-pressed":ne,onClick:()=>{if(h.id==="sort"){c(F.id);return}if(h.id==="distance"){u(F.id);return}R1(F.id)},children:F.label},F.id)})})]},h.id)}),n.jsxs(tf,{children:[n.jsxs(rf,{children:[n.jsxs("div",{children:[n.jsx(nf,{children:"Rubros"}),n.jsx(af,{children:"Elegí más de uno y mantené la grilla compacta."})]}),n.jsx(ef,{children:g.length>0?`${g.length} seleccionados`:"Sin selección"})]}),n.jsx(Yj,{children:Yn.map(h=>{const z=h.icon,F=g.includes(h.id);return n.jsxs(qj,{type:"button","data-active":F,"aria-pressed":F,onClick:()=>Rl(h.id),children:[n.jsx(Vo,{children:n.jsx(z,{size:18,"aria-hidden":"true"})}),n.jsx(Ld,{children:h.name})]},h.id)})})]})]}),n.jsxs(Zj,{children:[n.jsx(Xj,{type:"button",onClick:N1,children:"Limpiar todo"}),n.jsx(of,{type:"button",onClick:()=>N(!1),children:"Ver resultados"})]})]})}),I&&n.jsx(kn,{role:"presentation",onClick:()=>W(!1),children:n.jsxs(Sn,{"data-size":"lg",role:"dialog","aria-modal":"true","aria-labelledby":"home-categories-title",onClick:h=>h.stopPropagation(),children:[n.jsxs(Zh,{children:[n.jsxs("div",{children:[n.jsx(Xh,{id:"home-categories-title",children:"Todas las categorías"}),n.jsx(Jh,{children:"La app arranca con las visibles, pero el catálogo completo queda disponible desde acá."})]}),n.jsx(qi,{type:"button",onClick:()=>W(!1),"aria-label":"Cerrar categorías",children:n.jsx($n,{size:18,"aria-hidden":"true"})})]}),n.jsx(bj,{children:Yn.map(h=>{const z=h.icon,F=g.includes(h.id);return n.jsxs(jj,{type:"button","data-active":F,onClick:()=>Rl(h.id),children:[n.jsxs($j,{children:[n.jsx(z,{size:16,"aria-hidden":"true"})," ",h.name]}),n.jsx(kj,{children:h.description})]},h.id)})})]})}),D&&n.jsx(kn,{role:"presentation",onClick:()=>ge(!1),children:n.jsxs(Sn,{"data-size":"md",role:"dialog","aria-modal":"true","aria-labelledby":"home-location-title",onClick:h=>h.stopPropagation(),children:[n.jsxs(Zh,{children:[n.jsxs("div",{children:[n.jsx(Xh,{id:"home-location-title",children:"Cambiar ubicación"}),n.jsx(Jh,{children:"Buscá una dirección, elegila y confirmá la actualización."})]}),n.jsx(qi,{type:"button",onClick:()=>ge(!1),"aria-label":"Cerrar ubicación",children:n.jsx($n,{size:18,"aria-hidden":"true"})})]}),n.jsxs(wj,{children:[n.jsxs(Cj,{children:[n.jsx(zj,{children:"Dirección actual"}),n.jsx(Pj,{children:(le==null?void 0:le.label)??"Sin dirección configurada"}),n.jsx(Ej,{children:(le==null?void 0:le.detail)??"Todavía no configuraste una dirección."})]}),n.jsx(Oh,{htmlFor:"location-search",children:n.jsxs(Dh,{children:[n.jsx(Td,{size:18,"aria-hidden":"true"}),n.jsx(Bh,{id:"location-search",type:"search",value:pe,onChange:h=>Te(h.target.value),placeholder:"Buscar dirección en Google Maps","aria-label":"Buscar dirección en Google Maps"})]})}),n.jsx(Mj,{"aria-label":"Resultados de búsqueda",children:C1.map(h=>{const z=_e===h.id;return n.jsxs(Tj,{type:"button","data-active":z,onClick:()=>{De(h.id),Be(h.mapQuery)},children:[n.jsx(Fj,{"aria-hidden":"true",children:n.jsx(Et,{size:16,"aria-hidden":"true"})}),n.jsxs(Lj,{children:[n.jsx(Rj,{children:h.label}),n.jsx(Nj,{children:h.detail})]}),n.jsx(Aj,{"aria-hidden":"true",children:n.jsx(Yi,{size:16,"aria-hidden":"true"})})]},h.id)})}),n.jsx(Sj,{title:`Mapa de ${(Kn==null?void 0:Kn.label)??(le==null?void 0:le.label)??"La Francia"}`,src:F1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),n.jsx(of,{type:"button",onClick:()=>{C((Kn==null?void 0:Kn.id)??j),ge(!1)},disabled:!z1,children:"Actualizar dirección"})]})]})})]})}const gk=e=>sa(e),wf=(e,...t)=>{const r=gk(e);return r?t.filter(i=>i!==void 0).join(" ").toLowerCase().includes(r):!0},f1=e=>I0.find(t=>t.id===e),yk=e=>Ua.find(t=>t.id===e),xk=e=>Ua.find(t=>t.name.toLowerCase()===e.toLowerCase()),vk=e=>{const t=_0.find(i=>i.id===`${e}-compare`);if(t){const i=[...t.offers].sort((a,o)=>a.price-o.price);return{kind:"comparison",comparison:t,bestOffer:i[0],sortedOffers:i}}const r=f1(e);if(r)return{kind:"offer",offer:r}};l.ul`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
  margin: 0;
  padding: 0;
  list-style: none;
`;l.li`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  &::before {
    content: '';
    display: inline-flex;
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.45rem;
    border-radius: ${({theme:e})=>e.radius.full};
    background: ${({theme:e})=>e.color.primary};
    flex: 0 0 auto;
  }
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const wk=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;l(wk)`
  margin-top: ${({theme:e})=>e.spacing[3]};
`;l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const Me=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,dt=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,mt=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,xr=l.div`
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
`,or=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,bk=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
`;l.div`
  text-align: right;
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;const Pl=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
  overflow-x: auto;
  padding-bottom: ${({theme:e})=>e.spacing[1]};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;l.div`
  margin-top: ${({theme:e})=>e.spacing[3]};
`;l.div`
  margin-top: ${({theme:e})=>e.spacing[5]};
`;const zt=l(Re)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,bf=l(Ci)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`,wt=l(Me)`
  gap: ${({theme:e})=>e.spacing[1]};
`,zi=l(dt)`
  gap: ${({theme:e})=>e.spacing[1]};
`,jk=l(mt)`
  gap: ${({theme:e})=>e.spacing[1]};
`,Ht=l(Y)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,$k=l.p`
  margin: 0;
  max-width: 56rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: ${({theme:e})=>e.typography.size.sm};
    line-height: 1.35;
  }
`,kk=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`,Sk=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    min-height: 36px;
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`,Ck=(e,t)=>{const r=[...e];switch(t){case"lowest":return r.sort((i,a)=>i.minOrder-a.minOrder);case"nearby":return r.sort((i,a)=>i.distanceKm-a.distanceKm);case"delivery":return r.sort((i,a)=>i.delivery===a.delivery?0:i.delivery?-1:1);case"pickup":return r.sort((i,a)=>i.pickup===a.pickup?0:i.pickup?-1:1);case"offers":return r.sort((i,a)=>a.rating-i.rating);default:return r.sort((i,a)=>a.rating-i.rating)}};function zk(){const[e,t]=v.useState(""),[r,i]=v.useState("all"),a=v.useMemo(()=>Ck(Ua.filter(s=>wf(e,s.name,s.category,s.summary,s.address,s.tags.join(" "))),r),[r,e]),o=v.useMemo(()=>Vw.filter(s=>wf(e,s.name,s.description)),[e]);return n.jsxs(At,{query:e,onQueryChange:t,activeFilter:r,onFilterChange:s=>i(s),footerText:"Directorio de comercios, pensado para buscar por cercanía, categoría y modalidad de entrega.",children:[n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(wt,{children:[n.jsx(me,{children:"Comercios"}),n.jsx(Se,{children:"Buscá por rubro y cercanía."}),n.jsx($k,{children:"Compará delivery, retiro y distancia sin perder tiempo."})]})})}),n.jsx(zt,{children:n.jsxs(J,{children:[n.jsxs(bf,{children:[n.jsx(me,{children:"Categorías"}),n.jsx(Se,{children:"Atajo por rubro"}),n.jsx(Ee,{children:"Elegí rápido sin escribir de más."})]}),n.jsx(wb,{children:o.map(s=>{const c=s.icon;return n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(zi,{children:[n.jsx(Fa,{children:n.jsx(c,{size:16,"aria-hidden":"true"})}),n.jsx(Z,{children:s.name}),n.jsx(q,{children:s.description})]})})},s.id)})})]})}),n.jsx(zt,{children:n.jsxs(J,{children:[n.jsxs(bf,{children:[n.jsx(me,{children:"Comercios visibles"}),n.jsx(Se,{children:"Cercanos y activos"}),n.jsx(Ee,{children:"Estado, distancia y perfil en una sola vista."})]}),n.jsx(vb,{children:a.map(s=>{const c=s.icon;return n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(zi,{children:[n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsxs(jk,{children:[n.jsx(Fa,{children:n.jsx(c,{size:16,"aria-hidden":"true"})}),n.jsxs(Sk,{children:[s.rating.toFixed(1)," ★"]})]}),n.jsx(Z,{children:s.name}),n.jsx(q,{children:s.category})]}),n.jsx(H0,{children:$e(s.minOrder)})]}),n.jsx(q,{children:s.summary}),n.jsxs(kk,{children:[n.jsx(Q,{children:s.openNow?"Abierto":"Cerrado"}),n.jsx(Q,{children:s.delivery?"Delivery":"Sin delivery"}),n.jsx(Q,{children:s.pickup?"Retiro":"Sin retiro"})]}),n.jsxs(q,{children:[n.jsx(z0,{size:16,"aria-hidden":"true"})," ",s.address," · ",Ta(s.distanceKm)]}),n.jsx(q,{children:s.hours}),n.jsx(q,{children:s.phone}),n.jsx(Pl,{children:s.tags.map(d=>n.jsx(Q,{children:d},d))}),n.jsx(Tt,{to:`/comercios/${s.id}`,children:"Abrir perfil"})]})})},s.id)})})]})}),n.jsx(zt,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(me,{children:"Qué habilita este directorio"}),n.jsx(Se,{children:"Comparar y comprar"}),n.jsx(Ee,{children:"Después se conecta con login, carrito y checkout."})]})})})})})]})}const Pk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  }
`,Ek=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,zo=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Mk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Tk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Fk=l.span`
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
`;function Lk(){const{storeId:e=""}=Xg(),t=v.useMemo(()=>yk(e)??Ua[0],[e]);return n.jsxs(At,{showSearch:!1,footerText:"Perfil de comercio con catálogo, horarios, contacto y accesos al pedido.",children:[n.jsx(Re,{children:n.jsx(J,{children:n.jsxs(Pk,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Perfil de comercio"}),n.jsx(Se,{children:t.name}),n.jsx(Ee,{children:t.summary}),n.jsxs(mt,{children:[n.jsx(Fk,{"data-open":t.openNow,children:t.openNow?"Abierto ahora":"Cerrado"}),n.jsxs(Q,{children:[t.rating.toFixed(1)," ★"]}),n.jsx(Q,{children:t.delivery?"Delivery":"Sin delivery"}),n.jsx(Q,{children:t.pickup?"Retiro":"Sin retiro"})]}),n.jsx(Pl,{children:t.tags.map(r=>n.jsx(Q,{children:r},r))}),n.jsxs(mt,{children:[n.jsx(Wn,{to:"/carrito",children:"Ir al carrito"}),n.jsx(Tt,{to:"/comercios",children:"Volver al directorio"})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Datos del negocio"}),n.jsx(Z,{children:"Información operativa"}),n.jsxs(Ek,{children:[n.jsxs(zo,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"}),n.jsxs("span",{children:[t.address," · ",Ta(t.distanceKm)]})]}),n.jsxs(zo,{children:[n.jsx(Sl,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:t.phone})]}),n.jsxs(zo,{children:[n.jsx(Ba,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:t.hours})]}),n.jsxs(zo,{children:[n.jsx(ft,{size:16,"aria-hidden":"true"}),n.jsxs("span",{children:["Mínimo de compra ",$e(t.minOrder)]})]})]}),n.jsxs(Tk,{children:[n.jsx(q,{children:"El perfil del comercio deja lista la experiencia para mostrar stock, precio y disponibilidad por producto."}),n.jsx(q,{children:"El siguiente paso natural es conectar este perfil con el panel del negocio."})]})]})})})]})})}),n.jsx(Re,{children:n.jsxs(J,{children:[n.jsxs(Ci,{children:[n.jsx(me,{children:"Catálogo"}),n.jsx(Se,{children:"Productos destacados del comercio"}),n.jsx(Ee,{children:"Los productos destacados del perfil muestran el catálogo inicial del negocio."})]}),n.jsx(Mk,{children:t.featuredProducts.map(r=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(Fa,{children:r.badge??"Disponible"}),n.jsx(Z,{children:r.name}),n.jsx(Kt,{children:$e(r.price)}),n.jsxs(q,{children:[n.jsx(qe,{size:16,"aria-hidden":"true"})," ",t.name]})]})})},r.id))})]})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Preparado para escalar"}),n.jsx(Se,{children:"El comercio podrá gestionar catálogo, pedidos y promociones."}),n.jsx(Ee,{children:"Este perfil deja el espacio listo para que después el negocio entre a su panel y administre precios, stock y estados del pedido."})]})})})})})]})}const Rk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  }
`,Nk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ak=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`;function Ik(){const{productId:e=""}=Xg(),t=v.useMemo(()=>vk(e),[e]),r=v.useMemo(()=>{var o;if((t==null?void 0:t.kind)==="comparison")return{name:t.comparison.product,category:t.comparison.category,bestPrice:t.bestOffer.price,bestStore:t.bestOffer.store,comparisonOffers:t.sortedOffers,badge:t.comparison.badge};const a=f1(e)??I0[0];return{name:a.product,category:a.category,bestPrice:a.price,bestStore:a.store,comparisonOffers:((o=_0.find(s=>s.id===`${a.id}-compare`))==null?void 0:o.offers)??[],badge:a.highlight}},[t,e]),i=xk(r.bestStore);return n.jsxs(At,{showSearch:!1,footerText:"Detalle de producto con comparación de precios, comercio asociado y CTA al carrito.",children:[n.jsx(Re,{children:n.jsx(J,{children:n.jsxs(Rk,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Producto"}),n.jsx(Se,{children:r.name}),n.jsx(Ee,{children:"Vista de detalle con precio destacado, comercio principal y comparación contra otros negocios cercanos."}),n.jsxs(mt,{children:[n.jsx(Fa,{children:r.badge}),n.jsx(Q,{children:r.category}),n.jsxs(Q,{children:[r.comparisonOffers.length||1," opciones cercanas"]})]}),n.jsx(Kt,{children:$e(r.bestPrice)}),n.jsxs(q,{children:[n.jsx(qe,{size:16,"aria-hidden":"true"})," ",r.bestStore]}),n.jsxs(mt,{children:[n.jsxs(Wn,{to:"/carrito",children:[n.jsx(On,{size:18,"aria-hidden":"true"}),"Agregar al carrito"]}),n.jsx(Tt,{to:"/comercios",children:"Seguir comprando"})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Ficha rápida"}),n.jsx(Z,{children:"Lo que el usuario necesita ver"}),n.jsxs(Nk,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:"Precio final"}),n.jsx(q,{children:"Menor precio detectado en el directorio."})]}),n.jsx(Fa,{children:n.jsx(mi,{size:16,"aria-hidden":"true"})})]}),n.jsx(Kt,{children:$e(r.bestPrice)})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(or,{children:"Comercio principal"}),n.jsx(q,{children:(i==null?void 0:i.summary)??"La ficha se vincula al comercio seleccionado."}),i&&n.jsxs(Ak,{children:[n.jsxs(Q,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"})," ",Ta(i.distanceKm)]}),n.jsx(Q,{children:i.openNow?"Abierto":"Cerrado"}),n.jsx(Q,{children:i.delivery?"Delivery":"Retiro"})]})]})})})]})]})})})]})})}),n.jsx(Re,{children:n.jsxs(J,{children:[n.jsxs(Ci,{children:[n.jsx(me,{children:"Comparación"}),n.jsx(Se,{children:"Más comercios con la misma referencia"}),n.jsx(Ee,{children:"La misma ficha puede mostrar diferentes precios, distancia y disponibilidad."})]}),n.jsx(dt,{children:r.comparisonOffers.length>0?r.comparisonOffers.map(a=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:a.store}),n.jsxs(q,{children:[Ta(a.distanceKm)," · ",a.eta," ·"," ",a.openNow?"Abierto":"Cerrado"]})]}),n.jsx(Kt,{children:$e(a.price)})]})})},`${r.name}-${a.store}`)):n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(or,{children:"Solo un comercio de referencia por ahora"}),n.jsx(q,{children:"Cuando existan más comercios con el mismo producto, la ficha mostrará la comparación completa."})]})})})})]})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Pedido"}),n.jsx(Se,{children:"Listo para sumar al carrito y pasar a checkout."}),n.jsx(Ee,{children:"Este detalle ya está pensado para integrarse con el flujo de compra, pago y seguimiento posterior."})]})})})})})]})}const _k=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ok=l(H)`
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
`,bc=l(Y)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Dk=l.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Bk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Hk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const Vi=l.span`
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

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: rgba(0, 71, 231, 0.18);
    color: ${({theme:e})=>e.color.primary};
  }
`,Uk=l.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,Vk=l.div`
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
`,Wk=l.span`
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
`,Gk=l.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,Kk=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Qk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,Yk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,qk=l(H)`
  overflow: hidden;
`,Zk=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,Xk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Jk=l.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,e5=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,t5=l.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-height: 2rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,r5=l.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,n5=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,i5=l.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.24), transparent 36%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.18) 0%, rgba(0, 71, 231, 0.04) 100%);
  color: ${({theme:e})=>e.color.primary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  overflow: hidden;
`,a5=l.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`,o5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,s5=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,l5=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,c5=l.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,d5=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,jc=l.span`
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
`,u5=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,jf=l.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,$f=l.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};

  &[data-tone='warning'] {
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='danger'] {
    color: ${({theme:e})=>e.color.danger};
  }
`,p5=l(H)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,h5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,f5=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,m5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,g5=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,y5=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,x5=l.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,v5=l.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,w5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,b5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Po=l.div`
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
`,j5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,$5=l.div`
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
`,k5=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,S5=vr`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,C5=l.div`
  ${S5}
`,kf=l(Re)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,El=15e3,m1=200,g1=e=>{const t=e.match(/\d+/);return Number((t==null?void 0:t[0])??0)},z5=e=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>{var r;return((r=t[0])==null?void 0:r.toUpperCase())??""}).join(""),P5=(e=Va)=>{const t=new Map;return e.forEach(r=>{const i=t.get(r.store);if(i){i.items.push(r),i.itemCount+=r.quantity,i.subtotal+=r.subtotal,i.availableCount+=r.available?1:0,i.unavailableCount+=r.available?0:1;return}t.set(r.store,{store:r.store,items:[r],itemCount:r.quantity,subtotal:r.subtotal,etaLabel:r.eta,availableCount:r.available?1:0,unavailableCount:r.available?0:1})}),[...t.values()].map(r=>{const i=r.items.map(s=>g1(s.eta)).filter(Boolean),a=i.length?Math.min(...i):0,o=i.length?Math.max(...i):0;return{...r,etaLabel:i.length<=1||a===o?`${a||0} min`:`${a}–${o} min`}})},y1=P5(),Wa=Va.reduce((e,t)=>e+t.subtotal,0),x1=Wa>=El?0:1200,E5=Wa+x1+m1,M5=Va.reduce((e,t)=>e+t.quantity,0),T5=y1.length,Sf=Va.filter(e=>!e.available).length,F5=(()=>{const e=Va.map(i=>g1(i.eta)).filter(Boolean),t=e.length?Math.min(...e):0,r=e.length?Math.max(...e):0;return e.length?t===r?`${t} min`:`${t}–${r} min`:"Pendiente"})(),$c=Math.max(El-Wa,0),L5=Math.min(Wa/El*100,100),R5=[{label:"Carrito",state:"active"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmación",state:"idle"}],N5=[{label:"Tarjeta",icon:Nw},{label:"Saldo",icon:Cl},{label:"Cuotas",icon:mi}],A5=[{label:"Compra protegida",icon:dr},{label:"Sin costos sorpresa",icon:Ba},{label:"Retiro o delivery por comercio",icon:ft}];function I5(){return n.jsx(At,{showSearch:!1,footerText:"Checkout mobile-first con costos claros, stock visible y pago seguro.",children:n.jsxs(_k,{children:[n.jsx(kf,{children:n.jsx(J,{children:n.jsx(Ok,{children:n.jsx(bc,{children:n.jsxs(Dk,{children:[n.jsxs(Bk,{children:[n.jsxs(Hk,{children:[n.jsx(me,{children:"Carrito"}),n.jsx(Se,{children:"Revisá tu pedido antes de pagar."}),n.jsx(Ee,{children:"Todo lo importante entra en una sola vista: productos, comercios, costos, stock y una ruta limpia hacia el pago."})]}),n.jsxs(Kk,{children:[n.jsxs(Vi,{"data-tone":"brand",children:[n.jsx(On,{size:14,"aria-hidden":"true"})," ",M5," unidades"]}),n.jsxs(Vi,{children:[n.jsx(qe,{size:14,"aria-hidden":"true"})," ",T5," comercios"]}),n.jsxs(Vi,{"data-tone":Sf>0?"warning":"success",children:[n.jsx(Pw,{size:14,"aria-hidden":"true"})," ",Sf," sin stock"]}),n.jsxs(Vi,{children:[n.jsx(ft,{size:14,"aria-hidden":"true"})," ",F5]})]})]}),n.jsx(Uk,{"aria-label":"Progreso de compra",children:R5.map((e,t)=>n.jsxs(Vk,{"data-state":e.state,children:[n.jsx(Wk,{"data-state":e.state,children:t+1}),n.jsx(Gk,{children:e.label})]},e.label))})]})})})})}),n.jsx(kf,{children:n.jsx(J,{children:n.jsxs(Qk,{children:[n.jsx(Yk,{children:y1.map(e=>n.jsx(qk,{children:n.jsxs(bc,{children:[n.jsxs(Zk,{children:[n.jsxs(Xk,{children:[n.jsx(Jk,{children:e.store}),n.jsxs(e5,{children:[e.itemCount," unidades · ",e.availableCount," confirmadas ·"," ",e.unavailableCount," pendientes"]})]}),n.jsxs(t5,{children:[n.jsx(ft,{size:14,"aria-hidden":"true"})," ",e.etaLabel]})]}),n.jsx(r5,{children:e.items.map(t=>n.jsxs(n5,{children:[n.jsxs(i5,{"aria-hidden":"true",children:[n.jsx(On,{size:18}),n.jsx(a5,{children:z5(t.product)})]}),n.jsxs(o5,{children:[n.jsxs(s5,{children:[n.jsxs("div",{style:{minWidth:0},children:[n.jsx(l5,{children:t.product}),n.jsx(q,{children:t.store})]}),n.jsx(c5,{children:t.available?$e(t.subtotal):"—"})]}),n.jsxs(d5,{children:[n.jsxs(jc,{children:[t.quantity," unid."]}),n.jsxs(jc,{"data-tone":"brand",children:[$e(t.price)," c/u"]}),n.jsx(jc,{"data-tone":t.statusTone,children:t.statusLabel})]}),n.jsxs(u5,{children:[n.jsxs(jf,{children:[n.jsx(ft,{size:14,"aria-hidden":"true"}),t.eta]}),t.statusTone==="success"?n.jsx(jf,{children:"Listo para sumar al pedido"}):t.statusTone==="warning"?n.jsx($f,{"data-tone":"warning",children:"Pocas unidades"}):n.jsx($f,{"data-tone":"danger",children:"Sin stock"})]})]})]},t.id))})]})},e.store))}),n.jsx(p5,{children:n.jsx(bc,{children:n.jsxs(h5,{children:[n.jsxs("div",{children:[n.jsx(me,{children:"Resumen"}),n.jsx(Z,{children:"Costos claros y pago seguro."}),n.jsx(q,{children:"El total se presenta sin sorpresas y con el envío ya calculado sobre el pedido actual."})]}),n.jsxs(m5,{children:[n.jsxs(g5,{children:[n.jsx("span",{children:"Envío gratis"}),n.jsx("strong",{children:$c>0?`${$e($c)} faltan`:"Ya lo alcanzaste"})]}),n.jsx(x5,{children:n.jsx(v5,{$value:L5})}),n.jsxs(y5,{children:["Umbral estimado ",$e(El)," ·"," ",$c>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),n.jsxs(b5,{children:[n.jsxs(Po,{children:[n.jsx("span",{children:"Subtotal"}),n.jsx("span",{children:$e(Wa)})]}),n.jsxs(Po,{children:[n.jsx("span",{children:"Envío estimado"}),n.jsx("span",{children:$e(x1)})]}),n.jsxs(Po,{children:[n.jsx("span",{children:"Cargo de servicio"}),n.jsx("span",{children:$e(m1)})]}),n.jsxs(Po,{"data-emphasis":"true",children:[n.jsx("strong",{children:"Total estimado"}),n.jsx(Kt,{children:$e(E5)})]})]}),n.jsx(j5,{children:A5.map(e=>{const t=e.icon;return n.jsxs($5,{children:[n.jsx(t,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:e.label})]},e.label)})}),n.jsxs(w5,{children:[n.jsx(f5,{children:"Sin crear una experiencia pesada: los métodos de pago quedan claros y el siguiente paso prepara dirección y cobro."}),n.jsx(k5,{children:N5.map(e=>{const t=e.icon;return n.jsxs(Vi,{"data-tone":"brand",children:[n.jsx(t,{size:14,"aria-hidden":"true"}),e.label]},e.label)})})]}),n.jsxs(C5,{children:[n.jsx(Wn,{to:"/mi-cuenta",children:"Continuar al pago"}),n.jsx(Tt,{to:"/comercios",children:"Seguir comprando"})]})]})})})]})})})]})})}const Cf=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }
`,zf=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,_5=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,O5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,D5=Ua.filter(e=>O0.some(t=>t.store.toLowerCase()===e.name.toLowerCase()));function B5(){return n.jsxs(At,{showSearch:!1,footerText:"Favoritos y alertas rápidas para guardar y reordenar.",children:[n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(wt,{children:[n.jsx(me,{children:"Favoritos"}),n.jsx(Se,{children:"Guardados y alertas."}),n.jsx(Ee,{children:"Seguí ofertas, comercios y cambios de precio sin perder tiempo."})]})})}),n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(Cf,{children:[n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Productos"}),n.jsx(zf,{children:O0.map(e=>n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(zi,{children:[n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:e.name}),n.jsx(q,{children:e.store})]}),n.jsx(Kt,{children:$e(e.price)})]}),n.jsxs(_5,{children:[n.jsxs(Q,{children:[n.jsx(Vn,{size:16,"aria-hidden":"true"})," Guardado"]}),n.jsxs(Q,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Campanita activa"]})]})]})})},e.id))})]})})}),n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Comercios"}),n.jsx(zf,{children:D5.map(e=>n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(zi,{children:[n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:e.name}),n.jsx(q,{children:e.category})]}),n.jsxs(Q,{children:[e.rating.toFixed(1)," ★"]})]}),n.jsx(q,{children:e.summary}),n.jsxs(Pl,{children:[n.jsx(Q,{children:e.delivery?"Delivery":"Sin delivery"}),n.jsx(Q,{children:e.pickup?"Retiro":"Sin retiro"})]})]})})},e.id))})]})})})]})})}),n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(Cf,{children:[n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Alertas"}),n.jsx(q,{children:"Activá avisos de precio, stock o promo en lo que más mirás."}),n.jsxs(O5,{children:[n.jsxs(Q,{children:[n.jsx(qt,{size:16,"aria-hidden":"true"})," Coca Cola 3L disponible"]}),n.jsxs(Q,{children:[n.jsx(qe,{size:16,"aria-hidden":"true"})," Nuevas promos en La Huerta"]}),n.jsxs(Q,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Avisos por cambio de precio"]})]}),n.jsxs(mt,{children:[n.jsx(Wn,{to:"/notificaciones",children:"Configurar alertas"}),n.jsx(Tt,{to:"/comercios",children:"Seguir comprando"})]})]})})}),n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Próxima compra"}),n.jsx(q,{children:"Después conectamos historial, listas y reorden automático."})]})})})]})})})]})}const Ml=vr`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,H5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  }
`,Tl=l.div`
  ${Ml}
  padding: ${({theme:e})=>e.layout.cardPadding};
`,Fl=l.div`
  ${Ml}
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,Tn=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,se=l.label`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ie=l.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,La=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,ce=l.input`
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
`,Ra=l.select`
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
`,v1=l.textarea`
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
`,Ot=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;const Wo=l.button`
  ${Ml}
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
`,Go=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Ko=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,la=l.label`
  ${Ml}
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
`,ca=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,da=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Ku=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,w1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,b1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,j1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ut=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Vt=l.span`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`;l.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`;const $1=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,U5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`,V5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  border: 1px solid ${({theme:e})=>e.color.border};
  background:
    radial-gradient(circle at top left, rgba(0, 71, 231, 0.14), transparent 42%),
    ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[1]};
  }
`,W5=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[1]};
  }
`,G5=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.glow};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    width: 3rem;
    height: 3rem;
  }
`,K5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: 0.15rem;
  }
`,Q5=l.h1`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.35rem, 4vw, 2rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: clamp(1.2rem, 5vw, 1.7rem);
  }
`,Y5=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    font-size: ${({theme:e})=>e.typography.size.xs};
    line-height: 1.3;
  }
`,q5=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: 0.35rem;
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const Z5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,X5=l(Tl)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding: ${({theme:e})=>e.spacing[1]};
  }
`,J5=l(Fl)`
  padding: ${({theme:e})=>e.spacing[2]};
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
    gap: ${({theme:e})=>e.spacing[2]};
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    padding: ${({theme:e})=>e.spacing[1]};
    gap: ${({theme:e})=>e.spacing[1]};
  }
`;function eS(){const e=t=>{t.preventDefault()};return n.jsxs(At,{showSearch:!1,footerText:"Perfil del usuario con Google login, seguridad y direcciones guardadas.",children:[n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(V5,{children:[n.jsxs(W5,{children:[n.jsx(G5,{"aria-hidden":"true",children:n.jsx(Qe,{size:22,"aria-hidden":"true"})}),n.jsxs(K5,{children:[n.jsx(me,{children:"Perfil"}),n.jsx(Q5,{children:"Cuenta personal"}),n.jsx(Y5,{children:"Datos listos para pedidos, entregas, pagos y seguridad."})]})]}),n.jsxs(q5,{children:[n.jsx(Q,{children:"Google login"}),n.jsx(Q,{children:"Foto de perfil"}),n.jsx(Q,{children:"Direcciones"}),n.jsx(Q,{children:"Notificaciones"})]})]})})}),n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(U5,{children:[n.jsx(X5,{children:n.jsx("form",{onSubmit:e,children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Datos personales"}),n.jsx(q,{children:"Completá tu perfil para pedidos, entregas, seguridad y cobros."}),n.jsxs(ks,{type:"button",children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Sincronizar con Google"]}),n.jsxs(Tn,{children:[n.jsxs(se,{htmlFor:"profile-name",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Nombre"]}),n.jsx(ce,{id:"profile-name",type:"text",placeholder:"Nicolás"})]}),n.jsxs(se,{htmlFor:"profile-lastname",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Apellido"]}),n.jsx(ce,{id:"profile-lastname",type:"text",placeholder:"Eliceche"})]}),n.jsxs(se,{htmlFor:"profile-email",children:[n.jsxs(ie,{children:[n.jsx(Bu,{size:16,"aria-hidden":"true"}),"Email"]}),n.jsx(ce,{id:"profile-email",type:"email",placeholder:"usuario@correo.com"})]}),n.jsxs(se,{htmlFor:"profile-phone",children:[n.jsxs(ie,{children:[n.jsx(Sl,{size:16,"aria-hidden":"true"}),"Teléfono"]}),n.jsx(ce,{id:"profile-phone",type:"tel",placeholder:"+54 3573 400-201"})]}),n.jsxs(se,{htmlFor:"profile-address",children:[n.jsxs(ie,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"}),"Dirección principal"]}),n.jsx(ce,{id:"profile-address",type:"text",placeholder:"Av. San Martín 123"})]}),n.jsxs(se,{htmlFor:"profile-area",children:[n.jsxs(ie,{children:[n.jsx(Cl,{size:16,"aria-hidden":"true"}),"Barrio / zona"]}),n.jsxs(Ra,{id:"profile-area",defaultValue:"centro",children:[n.jsx("option",{value:"centro",children:"Centro"}),n.jsx("option",{value:"norte",children:"Barrio Norte"}),n.jsx("option",{value:"ruta19",children:"Ruta 19"})]})]}),n.jsxs(se,{htmlFor:"profile-birthdate",children:[n.jsx(ie,{children:"Fecha de nacimiento"}),n.jsx(ce,{id:"profile-birthdate",type:"date"})]}),n.jsxs(se,{htmlFor:"profile-language",children:[n.jsx(ie,{children:"Idioma"}),n.jsxs(Ra,{id:"profile-language",defaultValue:"es",children:[n.jsx("option",{value:"es",children:"Español"}),n.jsx("option",{value:"en",children:"English"})]})]})]}),n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Foto de perfil"}),n.jsxs(la,{htmlFor:"profile-photo",children:[n.jsxs(ca,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"})," Subí tu foto de perfil"]}),n.jsx(da,{children:"PNG, JPG o WebP. Esto mejora el reconocimiento en pedidos y soporte."}),n.jsx(ce,{id:"profile-photo",type:"file",accept:"image/*"})]})]})})}),n.jsxs(se,{htmlFor:"profile-notes",children:[n.jsx(ie,{children:"Notas de entrega"}),n.jsx(v1,{id:"profile-notes",placeholder:"Portón azul, tocar timbre, dejar en recepción..."}),n.jsx(La,{children:"Útil para delivery, retiro y pedidos frecuentes."})]}),n.jsxs(Ku,{children:[n.jsx(ks,{type:"submit",children:"Guardar cambios"}),n.jsx(Tt,{to:"/notificaciones",children:"Ajustar alertas"})]})]})})}),n.jsx(J5,{children:n.jsxs(wt,{children:[n.jsxs(wt,{children:[n.jsx(Z,{children:"Seguridad"}),n.jsx(q,{children:"Recuperación rápida, autenticación simple y control de sesión."}),n.jsxs(Z5,{children:[n.jsxs(Wo,{type:"button","data-active":!0,children:[n.jsxs(Go,{children:[n.jsx(dr,{size:16,"aria-hidden":"true"})," Autenticación segura"]}),n.jsx(Ko,{children:"Google activo y listo para sumar nuevas opciones."})]}),n.jsxs(Wo,{type:"button","data-active":!1,children:[n.jsxs(Go,{children:[n.jsx(Aw,{size:16,"aria-hidden":"true"})," Cambiar contraseña"]}),n.jsx(Ko,{children:"Pedido de seguridad para accesos sensibles."})]}),n.jsxs(Wo,{type:"button","data-active":!0,children:[n.jsxs(Go,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Alertas activas"]}),n.jsx(Ko,{children:"Push y email para pedidos, ofertas y stock."})]})]})]}),n.jsx(H,{children:n.jsx(Ht,{children:n.jsxs(wt,{children:[n.jsx(Z,{children:"Direcciones guardadas"}),n.jsx(zi,{children:Ww.map(t=>n.jsx(H,{children:n.jsx(Ht,{children:n.jsx(zi,{children:n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:t.label}),n.jsx(q,{children:t.address})]}),t.primary&&n.jsx(Q,{children:"Principal"})]})})})},t.id))})]})})})]})})]})})})]})}const tS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`,kc=l.section`
  padding: ${({theme:e})=>e.spacing[2]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]} 0;
  }
`,rS=l.div`
  display: grid;
  gap: 0.15rem;
`,nS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Sc=l(Wo)`
  min-height: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  gap: 0.25rem;
  text-align: center;
  justify-items: center;
  align-content: center;
`,Cc=l(Go)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  font-size: ${({theme:e})=>e.typography.size.xs};
`,zc=l(Ko)`
  text-align: center;
  font-size: 0.6875rem;
  line-height: 1.25;
`,iS=l(ce)`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,aS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  max-height: min(23rem, 52vh);
  overflow-y: auto;
  padding-right: 0.15rem;
  overscroll-behavior: contain;
  scrollbar-width: thin;
`,oS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,sS=l(Y)`
  padding: 0.55rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: calc(${({theme:e})=>e.layout.cardPadding} + 2px);
  }
`,lS=l.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 1.625rem;
  padding: 0 0.7rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid transparent;
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1;
  white-space: nowrap;

  &[data-tone='stock'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(52, 211, 153, 0.16)":"rgba(15, 157, 88, 0.12)"};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(52, 211, 153, 0.24)":"rgba(15, 157, 88, 0.18)"};
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='price'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(245, 158, 11, 0.16)":"rgba(217, 119, 6, 0.12)"};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(245, 158, 11, 0.24)":"rgba(217, 119, 6, 0.18)"};
    color: ${({theme:e})=>e.color.warning};
  }

  &[data-tone='offer'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(96, 165, 250, 0.16)":"rgba(37, 99, 235, 0.12)"};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(96, 165, 250, 0.24)":"rgba(37, 99, 235, 0.18)"};
    color: ${({theme:e})=>e.color.info};
  }

  &[data-tone='promo'] {
    background: ${({theme:e})=>e.color.primarySoft};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.28)":"rgba(0, 71, 231, 0.16)"};
    color: ${({theme:e})=>e.color.primary};
  }
`,cS=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,dS=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.danger};
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
    border-color: rgba(220, 38, 38, 0.24);
    background: ${({theme:e})=>e.color.surface};
  }

  &:focus {
    outline: none;
  }
`,uS=l.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.bottomNav+10};
  display: grid;
  place-items: center;
  padding: ${({theme:e})=>e.spacing[3]};
  background: rgba(5, 8, 22, 0.18);
`,pS=l.div`
  width: min(100%, 22rem);
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
`,hS=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`,fS=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,mS=l.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
`,Pf=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
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
    border-color: rgba(0, 71, 231, 0.2);
  }

  &:focus {
    outline: none;
  }

  &[data-variant='primary'] {
    border-color: transparent;
    background: ${({theme:e})=>e.color.brand};
    color: ${({theme:e})=>e.color.onPrimary};
  }
`,Ef=l(Y)`
  padding: calc(${({theme:e})=>e.layout.cardPadding} + 4px);
`,Pc=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  border: 1px solid transparent;
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;

  &[data-tone='success'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(52, 211, 153, 0.18)":"rgba(15, 157, 88, 0.12)"};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(52, 211, 153, 0.28)":"rgba(15, 157, 88, 0.18)"};
    color: ${({theme:e})=>e.color.success};
  }

  &[data-tone='danger'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(248, 113, 113, 0.18)":"rgba(220, 38, 38, 0.12)"};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(248, 113, 113, 0.28)":"rgba(220, 38, 38, 0.18)"};
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-tone='info'] {
    background: ${({theme:e})=>e.mode==="dark"?"rgba(96, 165, 250, 0.18)":"rgba(37, 99, 235, 0.12)"};
    border-color: ${({theme:e})=>e.mode==="dark"?"rgba(96, 165, 250, 0.28)":"rgba(37, 99, 235, 0.18)"};
    color: ${({theme:e})=>e.color.info};
  }
`,gS={inmediato:"Alertas inmediatas",diario:"Resumen diario",semanal:"Resumen semanal"},yS=[{id:"w1",title:"Coca Cola 3L",scope:"Producto",alert:"Cuando hay stock",tone:"stock",icon:qt},{id:"w2",title:"La Huerta",scope:"Comercio",alert:"Baja de precio",tone:"price",icon:qe},{id:"w3",title:"Asado Especial",scope:"Oferta",alert:"Nueva oferta",tone:"offer",icon:Et},{id:"w4",title:"Verduras frescas",scope:"Categoría",alert:"Nueva promo",tone:"promo",icon:Ba}];function xS(){const[e,t]=v.useState(!0),[r,i]=v.useState(!0),[a,o]=v.useState("inmediato"),[s,c]=v.useState(""),[d,u]=v.useState(()=>[...yS]),[g,f]=v.useState(null),x=v.useMemo(()=>{const w=s.trim().toLowerCase();return w?d.filter(m=>[m.title,m.scope,m.alert].join(" ").toLowerCase().includes(w)):d},[d,s]),S=e?"success":"danger",j=r?"success":"danger",C=()=>{g&&(u(w=>w.filter(m=>m.id!==g.id)),f(null))};return v.useEffect(()=>{if(!g)return;const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=w}},[g]),n.jsxs(At,{showSearch:!1,footerText:"Notificaciones push y email por producto, comercio o promo específica.",children:[n.jsx(kc,{children:n.jsx(J,{children:n.jsxs(rS,{children:[n.jsx(me,{children:"Notificaciones"}),n.jsx(Se,{children:"Campanitas por producto, comercio y oferta."}),n.jsx(Ee,{children:"Definimos qué querés seguir, cómo querés enterarte y con qué urgencia se dispara la alerta."})]})})}),n.jsx(kc,{children:n.jsx(J,{children:n.jsxs(tS,{children:[n.jsx(Tl,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Canales activos"}),n.jsx(q,{children:"Push para avisos urgentes y email para resúmenes, campañas o recordatorios."}),n.jsxs(nS,{children:[n.jsxs(Sc,{type:"button","data-active":e,onClick:()=>t(w=>!w),children:[n.jsxs(Cc,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Push"]}),n.jsx(zc,{children:"Notificaciones instantáneas en móvil y web."})]}),n.jsxs(Sc,{type:"button","data-active":r,onClick:()=>i(w=>!w),children:[n.jsxs(Cc,{children:[n.jsx(Bu,{size:16,"aria-hidden":"true"})," Email"]}),n.jsx(zc,{children:"Alertas, resúmenes y campañas por correo."})]})]}),n.jsxs(Me,{children:[n.jsx(Z,{children:"Frecuencia de aviso"}),n.jsx(oS,{children:[{id:"inmediato",label:"Alertas inmediatas",text:"Reacción al instante"},{id:"diario",label:"Resumen diario",text:"Ordenado por prioridad"},{id:"semanal",label:"Resumen semanal",text:"Para seguimiento general"}].map(w=>n.jsxs(Sc,{type:"button","data-active":a===w.id,onClick:()=>o(w.id),children:[n.jsx(Cc,{children:w.label}),n.jsx(zc,{children:w.text})]},w.id))})]})]})}),n.jsxs(Fl,{children:[n.jsx(Z,{children:"Seguimientos activos"}),n.jsx(q,{children:"Buscá lo que querés seguir y mantené todo ordenado desde una sola pantalla."}),n.jsxs(se,{htmlFor:"watch-search",children:[n.jsx(ie,{children:"Buscar seguimiento"}),n.jsx(iS,{id:"watch-search",type:"search",value:s,onChange:w=>c(w.target.value),placeholder:"Producto, comercio o promo"}),n.jsx(La,{children:"Ejemplo: Coca Cola 3L, La Huerta o Asado Especial."})]}),n.jsx(aS,{children:x.map(w=>{const m=w.icon;return n.jsx(H,{children:n.jsx(sS,{children:n.jsxs(dt,{children:[n.jsxs(xr,{children:[n.jsxs(bk,{children:[n.jsx(cS,{"aria-hidden":"true",children:n.jsx(m,{size:16,"aria-hidden":"true"})}),n.jsxs("div",{children:[n.jsx(or,{children:w.title}),n.jsx(q,{children:w.scope})]})]}),n.jsx(dS,{type:"button",onClick:()=>f(w),"aria-label":`Cancelar alerta de ${w.title}`,children:n.jsx($n,{size:12,"aria-hidden":"true"})})]}),n.jsx(lS,{"data-tone":w.tone,children:w.alert})]})})},w.id)})})]})]})})}),n.jsx(kc,{children:n.jsx(J,{children:n.jsxs(H5,{children:[n.jsx(H,{children:n.jsx(Ef,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Qué recomendamos activar"}),n.jsxs(w1,{children:[n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Push para productos puntuales como Coca Cola 3L o promociones flash."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Email para resúmenes diarios de comercios y categorías favoritas."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Alertas inmediatas cuando el stock vuelve o un comercio publica una oferta."})]})]})]})})}),n.jsx(H,{children:n.jsx(Ef,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Estado actual"}),n.jsxs(mt,{children:[n.jsx(Pc,{"data-tone":S,children:e?"Push activo":"Push inactivo"}),n.jsx(Pc,{"data-tone":j,children:r?"Email activo":"Email inactivo"}),n.jsx(Pc,{"data-tone":"info",children:gS[a]})]}),n.jsx(q,{children:"Esta base deja listo el panel para conectar backend, web push y email marketing."})]})})})]})})}),g&&n.jsx(uS,{role:"presentation",onClick:()=>f(null),children:n.jsxs(pS,{role:"dialog","aria-modal":"true","aria-labelledby":"notification-remove-title",onClick:w=>w.stopPropagation(),children:[n.jsx(hS,{id:"notification-remove-title",children:"Eliminar alerta"}),n.jsxs(fS,{children:["¿Seguro/a que deseas eliminar esta alerta de ",g.title,"? Ya no vas a recibir avisos de este seguimiento."]}),n.jsxs(mS,{children:[n.jsx(Pf,{type:"button",onClick:()=>f(null),children:"Cancelar"}),n.jsx(Pf,{type:"button","data-variant":"primary",onClick:C,children:"Eliminar"})]})]})})]})}const vS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const wS=["Nombre comercial","Instagram/Facebook","Horario de atención","Zona de delivery","Métodos de pago","Descripción del negocio","WhatsApp de ventas","Fotos adicionales de catálogo"],bS=[{id:"step-1",title:"Datos legales",text:"Validamos CUIT/CUIL, razón social y dirección."},{id:"step-2",title:"Branding",text:"Subís logo, foto de perfil y nombre comercial."},{id:"step-3",title:"Publicación",text:"Pagás el alta y activás tu cuenta para aparecer."}];function jS(){const e=t=>{t.preventDefault()};return n.jsxs(At,{showSearch:!1,footerText:"Alta de comercio con campos obligatorios y sugerencias para crecer con mejores perfiles.",children:[n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(wt,{children:[n.jsx(me,{children:"Alta de comercio"}),n.jsx(Se,{children:"Formularios preparados para publicar y cobrar."}),n.jsx(Ee,{children:"Pedimos lo mínimo obligatorio para dejar al comercio listo y sumamos campos opcionales para mejorar presencia, soporte y conversión."})]})})}),n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(vS,{children:[n.jsx(Tl,{children:n.jsx("form",{onSubmit:e,children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Datos obligatorios"}),n.jsxs(Tn,{children:[n.jsxs(se,{htmlFor:"business-tax",children:[n.jsxs(ie,{children:[n.jsx(Md,{size:16,"aria-hidden":"true"}),"CUIT / CUIL"]}),n.jsx(ce,{id:"business-tax",type:"text",placeholder:"20-12345678-9",required:!0}),n.jsx(La,{children:"Validación fiscal para publicar como comercio."})]}),n.jsxs(se,{htmlFor:"business-name",children:[n.jsxs(ie,{children:[n.jsx(Fw,{size:16,"aria-hidden":"true"}),"Razón social"]}),n.jsx(ce,{id:"business-name",type:"text",placeholder:"La Huerta S.A.",required:!0})]}),n.jsxs(se,{htmlFor:"business-address",children:[n.jsxs(ie,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"}),"Dirección"]}),n.jsx(ce,{id:"business-address",type:"text",placeholder:"Av. Principal 123",required:!0})]}),n.jsxs(se,{htmlFor:"business-phone",children:[n.jsxs(ie,{children:[n.jsx(Sl,{size:16,"aria-hidden":"true"}),"Teléfono"]}),n.jsx(ce,{id:"business-phone",type:"tel",placeholder:"+54 3573 400-201",required:!0})]}),n.jsxs(se,{htmlFor:"business-email",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Email"]}),n.jsx(ce,{id:"business-email",type:"email",placeholder:"ventas@lahuerta.com",required:!0})]}),n.jsxs(se,{htmlFor:"business-category",children:[n.jsxs(ie,{children:[n.jsx(Ha,{size:16,"aria-hidden":"true"}),"Rubro principal"]}),n.jsxs(Ra,{id:"business-category",defaultValue:"verduleria",children:[n.jsx("option",{value:"verduleria",children:"Verdulería"}),n.jsx("option",{value:"almacen",children:"Almacén"}),n.jsx("option",{value:"bebidas",children:"Bebidas"}),n.jsx("option",{value:"carniceria",children:"Carnicería"}),n.jsx("option",{value:"panaderia",children:"Panadería"}),n.jsx("option",{value:"farmacia",children:"Farmacia"})]})]}),n.jsxs(se,{htmlFor:"business-password",children:[n.jsxs(ie,{children:[n.jsx(dr,{size:16,"aria-hidden":"true"}),"Contraseña"]}),n.jsx(ce,{id:"business-password",type:"password",placeholder:"••••••••",required:!0})]}),n.jsxs(se,{htmlFor:"business-password-repeat",children:[n.jsxs(ie,{children:[n.jsx(dr,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),n.jsx(ce,{id:"business-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Foto de perfil / logo"}),n.jsxs(la,{htmlFor:"business-logo",children:[n.jsxs(ca,{children:[n.jsx(Uo,{size:16,"aria-hidden":"true"})," Subí tu logo o foto de perfil"]}),n.jsx(da,{children:"PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio."}),n.jsx(ce,{id:"business-logo",type:"file",accept:"image/*"})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Opcionales recomendados"}),n.jsx(q,{children:"Estos campos mejoran el perfil, el SEO interno y el soporte con clientes."}),n.jsxs(Tn,{children:[n.jsxs(se,{htmlFor:"business-display-name",children:[n.jsx(ie,{children:"Nombre comercial"}),n.jsx(ce,{id:"business-display-name",type:"text",placeholder:"La Huerta"})]}),n.jsxs(se,{htmlFor:"business-whatsapp",children:[n.jsx(ie,{children:"WhatsApp de ventas"}),n.jsx(ce,{id:"business-whatsapp",type:"tel",placeholder:"+54 3573 400-201"})]}),n.jsxs(se,{htmlFor:"business-hours",children:[n.jsx(ie,{children:"Horario de atención"}),n.jsx(ce,{id:"business-hours",type:"text",placeholder:"Lun a sáb 08:00 - 21:30"})]}),n.jsxs(se,{htmlFor:"business-map",children:[n.jsx(ie,{children:"Mapa / referencia"}),n.jsx(ce,{id:"business-map",type:"text",placeholder:"Ubicación exacta para Google Maps"})]})]}),n.jsxs(se,{htmlFor:"business-description",children:[n.jsx(ie,{children:"Descripción del negocio"}),n.jsx(v1,{id:"business-description",placeholder:"Contá qué vendés, qué te diferencia y cómo entregás."})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Operación y publicación"}),n.jsxs(mt,{children:[n.jsx(Q,{children:"Delivery"}),n.jsx(Q,{children:"Retiro"}),n.jsx(Q,{children:"Página pública"}),n.jsx(Q,{children:"Sponsor interno"})]}),n.jsxs(Tn,{children:[n.jsxs(se,{htmlFor:"business-method",children:[n.jsx(ie,{children:"Método de publicación"}),n.jsxs(Ra,{id:"business-method",defaultValue:"premium",children:[n.jsx("option",{value:"premium",children:"Cuenta paga / Premium"}),n.jsx("option",{value:"trial",children:"Prueba inicial"}),n.jsx("option",{value:"manual",children:"Alta manual"})]})]}),n.jsxs(se,{htmlFor:"business-zone",children:[n.jsx(ie,{children:"Zona de cobertura"}),n.jsx(ce,{id:"business-zone",type:"text",placeholder:"Centro, Barrio Norte, Ruta 19..."})]})]})]})})}),n.jsxs(Ku,{children:[n.jsx(ks,{type:"submit",children:"Enviar y pasar a pago"}),n.jsx(Tt,{to:"/comercios",children:"Volver al marketplace"})]})]})})}),n.jsxs(Fl,{children:[n.jsxs(Me,{children:[n.jsx(Z,{children:"Qué gana el comercio"}),n.jsxs(b1,{children:[n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Presencia en la home con cards, sponsor y carrusel de promociones."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Perfil propio con logo, horarios, stock, delivery y retiro."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Notificaciones por producto, comercio y oferta para fidelizar usuarios."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Base lista para crecer hacia Android, iOS y paneles internos."})]})]})]}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(j1,{children:[n.jsx(Z,{children:"Proceso de alta"}),bS.map((t,r)=>n.jsxs($1,{children:[r+1,". ",t.title]},t.id))]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Campos extras sugeridos"}),n.jsx(q,{children:"Si el comercio quiere mejor performance, sumamos más campos más adelante."}),n.jsx(w1,{children:wS.map(t=>n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:t})]},t))})]})})})]})]})})})]})}const $S=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.md} - 1px)) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,Mf=[{id:"step-1",title:"Perfil y documentos",text:"Completás tus datos, subís la foto de perfil y agregás licencia y seguro."},{id:"step-2",title:"Validación",text:"Revisamos identidad, medio de trabajo y datos para cobrar sin fricción."},{id:"step-3",title:"Activación",text:"Te aprobamos y quedás listo para empezar a repartir."}],kS=["Foto de perfil","Nombre","Apellido","Contraseña","Repetir contraseña","Carnet de conducir","Seguro del vehículo","Alias / CBU"];function SS(){const e=t=>{t.preventDefault()};return n.jsxs(At,{showSearch:!1,footerText:"Alta de delivery con validación de identidad, documentación del vehículo y medios de cobro.",children:[n.jsx(zt,{children:n.jsx(J,{children:n.jsxs(wt,{children:[n.jsx(me,{children:"Alta de delivery"}),n.jsx(Se,{children:"Sumate como repartidor y empezá a trabajar."}),n.jsx(Ee,{children:"Pedimos los datos mínimos para validar tu perfil, revisar tus documentos y dejar listo el cobro por alias o CBU."})]})})}),n.jsx(zt,{children:n.jsx(J,{children:n.jsxs($S,{children:[n.jsx(Tl,{children:n.jsx("form",{onSubmit:e,children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Datos obligatorios"}),n.jsx(q,{children:"Con esto damos de alta tu perfil de delivery con una validación clara."}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsxs(la,{htmlFor:"delivery-profile-photo",children:[n.jsxs(ca,{children:[n.jsx(Uo,{size:16,"aria-hidden":"true"})," Foto de perfil"]}),n.jsx(da,{children:"Subí una imagen clara para que comercios y clientes te identifiquen."}),n.jsx(ce,{id:"delivery-profile-photo",type:"file",accept:"image/*",required:!0})]}),n.jsxs(Tn,{children:[n.jsxs(se,{htmlFor:"delivery-first-name",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Nombre"]}),n.jsx(ce,{id:"delivery-first-name",type:"text",placeholder:"Juan",required:!0})]}),n.jsxs(se,{htmlFor:"delivery-last-name",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Apellido"]}),n.jsx(ce,{id:"delivery-last-name",type:"text",placeholder:"Pérez",required:!0})]}),n.jsxs(se,{htmlFor:"delivery-password",children:[n.jsxs(ie,{children:[n.jsx(dr,{size:16,"aria-hidden":"true"}),"Contraseña"]}),n.jsx(ce,{id:"delivery-password",type:"password",placeholder:"••••••••",required:!0}),n.jsx(La,{children:"Usá una contraseña segura para proteger tu acceso."})]}),n.jsxs(se,{htmlFor:"delivery-password-repeat",children:[n.jsxs(ie,{children:[n.jsx(dr,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),n.jsx(ce,{id:"delivery-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Documentación y cobro"}),n.jsx(q,{children:"Necesitamos documentos al día para habilitarte y pagarte sin demoras."}),n.jsxs(Tn,{children:[n.jsxs(Ot,{children:[n.jsxs(ie,{children:[n.jsx(Md,{size:16,"aria-hidden":"true"}),"Carnet de conducir"]}),n.jsxs(la,{htmlFor:"delivery-license",children:[n.jsxs(ca,{children:[n.jsx(Uo,{size:16,"aria-hidden":"true"})," Subí tu licencia"]}),n.jsx(da,{children:"Foto o PDF legible de frente y dorso si aplica."}),n.jsx(ce,{id:"delivery-license",type:"file",accept:"image/*,application/pdf",required:!0})]})]}),n.jsxs(Ot,{children:[n.jsxs(ie,{children:[n.jsx(Md,{size:16,"aria-hidden":"true"}),"Seguro del vehículo"]}),n.jsxs(la,{htmlFor:"delivery-insurance",children:[n.jsxs(ca,{children:[n.jsx(Uo,{size:16,"aria-hidden":"true"})," Subí tu seguro vigente"]}),n.jsx(da,{children:"Aceptamos foto o PDF del seguro del vehículo en uso."}),n.jsx(ce,{id:"delivery-insurance",type:"file",accept:"image/*,application/pdf",required:!0})]})]}),n.jsxs(se,{htmlFor:"delivery-alias-cbu",children:[n.jsxs(ie,{children:[n.jsx(Dw,{size:16,"aria-hidden":"true"}),"Alias / CBU"]}),n.jsx(ce,{id:"delivery-alias-cbu",type:"text",placeholder:"alias.o.cbu",required:!0}),n.jsx(La,{children:"Usá el dato donde querés recibir los pagos."})]}),n.jsxs(se,{htmlFor:"delivery-phone",children:[n.jsxs(ie,{children:[n.jsx(Sl,{size:16,"aria-hidden":"true"}),"Teléfono"]}),n.jsx(ce,{id:"delivery-phone",type:"tel",placeholder:"+54 3573 400-201"})]})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Opcionales útiles"}),n.jsx(q,{children:"Esto ayuda a validar más rápido tu perfil y a asignarte pedidos cerca."}),n.jsxs(Tn,{children:[n.jsxs(se,{htmlFor:"delivery-email",children:[n.jsxs(ie,{children:[n.jsx(Bu,{size:16,"aria-hidden":"true"}),"Email"]}),n.jsx(ce,{id:"delivery-email",type:"email",placeholder:"delivery@correo.com"})]}),n.jsxs(se,{htmlFor:"delivery-zone",children:[n.jsxs(ie,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"}),"Zona de trabajo"]}),n.jsx(ce,{id:"delivery-zone",type:"text",placeholder:"La Francia centro, Ruta 19..."})]}),n.jsxs(se,{htmlFor:"delivery-vehicle",children:[n.jsxs(ie,{children:[n.jsx(ft,{size:16,"aria-hidden":"true"}),"Vehículo"]}),n.jsxs(Ra,{id:"delivery-vehicle",defaultValue:"moto",children:[n.jsx("option",{value:"moto",children:"Moto"}),n.jsx("option",{value:"auto",children:"Auto"}),n.jsx("option",{value:"bicicleta",children:"Bicicleta"}),n.jsx("option",{value:"camioneta",children:"Camioneta"})]})]}),n.jsxs(se,{htmlFor:"delivery-plate",children:[n.jsxs(ie,{children:[n.jsx(ft,{size:16,"aria-hidden":"true"}),"Patente"]}),n.jsx(ce,{id:"delivery-plate",type:"text",placeholder:"AA123BB"})]})]})]})})}),n.jsxs(Ku,{children:[n.jsx(ks,{type:"submit",children:"Postularme como delivery"}),n.jsx(Tt,{to:"/",children:"Volver al inicio"})]})]})})}),n.jsxs(Fl,{children:[n.jsxs(Ot,{children:[n.jsx(Z,{children:"Qué necesitamos para activarte"}),n.jsxs(b1,{children:[n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Foto de perfil legible y datos personales consistentes."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Carnet de conducir y seguro del vehículo vigentes."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Alias o CBU propio para liquidar los pagos."})]}),n.jsxs(Ut,{children:[n.jsx(Vt,{}),n.jsx("span",{children:"Contraseña segura para proteger el acceso a tu cuenta."})]})]})]}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(j1,{children:[n.jsx(Z,{children:"Proceso de alta"}),Mf.map((t,r)=>n.jsxs($1,{children:[r+1,". ",t.title]},t.id))]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsx(Z,{children:"Campos obligatorios"}),n.jsx(mt,{children:kS.map(t=>n.jsx(Q,{children:t},t))}),n.jsx(dt,{children:Mf.map(t=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Ot,{children:[n.jsx(me,{children:t.title}),n.jsx(q,{children:t.text})]})})},t.id))})]})})})]})]})})})]})}const CS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,zS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`,PS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;function ES(){return n.jsxs(At,{showSearch:!1,footerText:"Panel de comercio para pedidos, stock, promociones y control operativo.",children:[n.jsx(Re,{children:n.jsx(J,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Panel comercio"}),n.jsx(Se,{children:"Operación diaria del negocio."}),n.jsx(Ee,{children:"El comercio administra productos, precios, stock, promociones y pedidos desde una sola vista."})]})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(CS,{children:Gw.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(Z,{children:e.label}),n.jsx(Kt,{children:e.value}),n.jsx(Q,{children:e.trend})]})})},e.id))})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsxs(zS,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Pedidos recientes"}),n.jsx(dt,{children:Kw.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:e.customer}),n.jsx(q,{children:e.status})]}),n.jsx(Kt,{children:$e(e.total)})]})})},e.id))})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Stock y productos"}),n.jsx(PS,{children:Qw.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:e.name}),n.jsxs(q,{children:["Stock ",e.stock," · ",e.status]})]}),n.jsx(Kt,{children:$e(e.price)})]}),n.jsxs(mt,{children:[n.jsxs(Q,{children:[n.jsx(Tw,{size:16,"aria-hidden":"true"})," Inventario"]}),n.jsxs(Q,{children:[n.jsx(mi,{size:16,"aria-hidden":"true"})," Promociones"]})]})]})})},e.id))})]})})})]})})}),n.jsx(Re,{children:n.jsxs(J,{children:[n.jsxs(Ci,{children:[n.jsx(me,{children:"Acciones rápidas"}),n.jsx(Se,{children:"Gestión operativa sin fricción"}),n.jsx(Ee,{children:"Alta, baja, edición de productos y promociones destacadas."})]}),n.jsxs(Pl,{children:[n.jsxs(Wn,{to:"/panel/comercio",children:[n.jsx(Iw,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),n.jsxs(Tt,{to:"/panel/comercio",children:[n.jsx(Rw,{size:18,"aria-hidden":"true"}),"Ver pedidos"]}),n.jsxs(Tt,{to:"/panel/comercio",children:[n.jsx(qe,{size:18,"aria-hidden":"true"}),"Ajustar comercio"]})]})]})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"El panel está listo para crecer"}),n.jsx(Se,{children:"Productos, promos y stock en una sola base."}),n.jsx(Ee,{children:"Cuando se conecte el backend, esta pantalla ya tiene la estructura para operar sin rehacer la interfaz."})]})})})})})]})}const MS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,TS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,FS=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;function LS(){return n.jsxs(At,{showSearch:!1,footerText:"Panel de delivery para aceptar pedidos, ver distancia y seguir estados.",children:[n.jsx(Re,{children:n.jsx(J,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Panel delivery"}),n.jsx(Se,{children:"Pedidos disponibles y ruta clara."}),n.jsx(Ee,{children:"El repartidor ve qué pedidos están listos para tomar y qué gana por cada entrega."})]})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(MS,{children:Yw.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(Z,{children:e.label}),n.jsx(Kt,{children:e.value}),n.jsx(q,{children:e.help})]})})},e.id))})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(Z,{children:"Pedidos para aceptar"}),n.jsx(TS,{children:qw.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(xr,{children:[n.jsxs("div",{children:[n.jsx(or,{children:e.store}),n.jsx(q,{children:e.customer})]}),n.jsx(Kt,{children:$e(e.payout)})]}),n.jsxs(mt,{children:[n.jsxs(Q,{children:[n.jsx(Et,{size:16,"aria-hidden":"true"})," ",Ta(e.distanceKm)]}),n.jsx(FS,{children:e.status})]})]})})},e.id))})]})})})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Estados"}),n.jsx(Se,{children:"Seguimiento simple y comprensible"}),n.jsx(Ee,{children:"Pedido recibido, preparado, asignado, retirado, en camino y entregado."}),n.jsxs(mt,{children:[n.jsxs(Q,{children:[n.jsx(Mw,{size:16,"aria-hidden":"true"})," Aceptar"]}),n.jsxs(Q,{children:[n.jsx(M0,{size:16,"aria-hidden":"true"})," Retirar"]}),n.jsxs(Q,{children:[n.jsx(ft,{size:16,"aria-hidden":"true"})," En camino"]}),n.jsxs(Q,{children:[n.jsx(Ba,{size:16,"aria-hidden":"true"})," Entregar"]})]}),n.jsxs(mt,{children:[n.jsx(Wn,{to:"/panel/repartidor",children:"Tomar pedido"}),n.jsx(Tt,{to:"/panel/repartidor",children:"Ver historial"})]})]})})})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Lista para escalar"}),n.jsx(Se,{children:"La logística entra después sin rehacer esta base."}),n.jsx(Ee,{children:"Esta pantalla deja la base lista para sumar mapa, geolocalización y notificaciones más adelante."})]})})})})})]})}const RS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,Tf=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;function NS(){return n.jsxs(At,{showSearch:!1,footerText:"Panel administrador con métricas globales, alertas y módulos críticos.",children:[n.jsx(Re,{children:n.jsx(J,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Panel admin"}),n.jsx(Se,{children:"Control general de la plataforma."}),n.jsx(Ee,{children:"Desde acá se administra la operación global: comercios, usuarios, pedidos, delivery y finanzas."})]})})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(RS,{children:Zw.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(Z,{children:e.label}),n.jsx(Kt,{children:e.value}),n.jsx(q,{children:e.help})]})})},e.id))})})}),n.jsx(Re,{children:n.jsxs(J,{children:[n.jsxs(Ci,{children:[n.jsx(me,{children:"Alertas"}),n.jsx(Se,{children:"Eventos que requieren atención"}),n.jsx(Ee,{children:"Los avisos ayudan a mantener la plataforma ordenada antes de escalar a otras localidades."})]}),n.jsx(Tf,{children:Xw.map(e=>{const t=e.icon;return n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(mt,{children:[n.jsx(Q,{children:n.jsx(t,{size:16,"aria-hidden":"true"})}),n.jsx(Q,{children:"Revisión"})]}),n.jsx(Z,{children:e.title}),n.jsx(q,{children:e.description})]})})},e.id)})})]})}),n.jsx(Re,{children:n.jsxs(J,{children:[n.jsxs(Ci,{children:[n.jsx(me,{children:"Módulos"}),n.jsx(Se,{children:"Acceso a cada área crítica"}),n.jsx(Ee,{children:"Comercios, usuarios, pedidos, delivery y finanzas quedan separadas por módulo."})]}),n.jsx(Tf,{children:[{title:"Comercios",icon:qe,text:"Alta, aprobación, suspensión y catálogo."},{title:"Usuarios",icon:R0,text:"Clientes, repartidores y roles internos."},{title:"Pedidos",icon:E0,text:"Estados, montos y tracking operativo."},{title:"Delivery",icon:ft,text:"Cobertura, disponibilidad y ganancias."},{title:"Finanzas",icon:Ew,text:"Comisiones, cobros y liquidaciones."},{title:"Seguridad",icon:dr,text:"Auditoría, permisos y alertas."}].map(e=>{const t=e.icon;return n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(Q,{children:n.jsx(t,{size:16,"aria-hidden":"true"})}),n.jsx(Z,{children:e.title}),n.jsx(q,{children:e.text})]})})},e.title)})})]})}),n.jsx(Re,{children:n.jsx(J,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Me,{children:[n.jsx(me,{children:"Escalabilidad"}),n.jsx(Se,{children:"La base administrativa queda lista para crecer."}),n.jsx(Ee,{children:"La estructura ya separa responsabilidades para que después el backend y el móvil puedan crecer sin rehacer el frontend."}),n.jsxs(mt,{children:[n.jsx(Wn,{to:"/panel/admin",children:"Abrir dashboard"}),n.jsx(Tt,{to:"/comercios",children:"Volver al marketplace"})]})]})})})})})]})}function AS(){return n.jsx(h2,{children:n.jsx(Sw,{children:n.jsxs(a2,{children:[n.jsx(et,{path:"/",element:n.jsx(mk,{})}),n.jsx(et,{path:"/comercios",element:n.jsx(zk,{})}),n.jsx(et,{path:"/comercios/:storeId",element:n.jsx(Lk,{})}),n.jsx(et,{path:"/productos/:productId",element:n.jsx(Ik,{})}),n.jsx(et,{path:"/pedidos",element:n.jsx(I5,{})}),n.jsx(et,{path:"/carrito",element:n.jsx(cc,{to:"/pedidos",replace:!0})}),n.jsx(et,{path:"/favoritos",element:n.jsx(B5,{})}),n.jsx(et,{path:"/notificaciones",element:n.jsx(xS,{})}),n.jsx(et,{path:"/registro/comercio",element:n.jsx(jS,{})}),n.jsx(et,{path:"/trabaja-con-nosotros",element:n.jsx(SS,{})}),n.jsx(et,{path:"/registro/delivery",element:n.jsx(cc,{to:"/trabaja-con-nosotros",replace:!0})}),n.jsx(et,{path:"/mi-cuenta",element:n.jsx(eS,{})}),n.jsx(et,{path:"/panel/comercio",element:n.jsx(ES,{})}),n.jsx(et,{path:"/panel/repartidor",element:n.jsx(LS,{})}),n.jsx(et,{path:"/panel/admin",element:n.jsx(NS,{})}),n.jsx(et,{path:"*",element:n.jsx(cc,{to:"/",replace:!0})})]})})})}mv({immediate:!0});const k1=document.getElementById("root");if(!k1)throw new Error("No se encontró el nodo root");Ec.createRoot(k1).render(n.jsx(mn.StrictMode,{children:n.jsx(AS,{})}));
