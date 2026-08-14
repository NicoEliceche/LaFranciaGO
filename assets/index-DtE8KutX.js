function b1(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var af={exports:{}},ys={},sf={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),$1=Symbol.for("react.portal"),k1=Symbol.for("react.fragment"),S1=Symbol.for("react.strict_mode"),C1=Symbol.for("react.profiler"),z1=Symbol.for("react.provider"),P1=Symbol.for("react.context"),E1=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),F1=Symbol.for("react.memo"),T1=Symbol.for("react.lazy"),Wu=Symbol.iterator;function R1(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cf=Object.assign,df={};function gi(e,t,r){this.props=e,this.context=t,this.refs=df,this.updater=r||lf}gi.prototype.isReactComponent={};gi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uf(){}uf.prototype=gi.prototype;function vd(e,t,r){this.props=e,this.context=t,this.refs=df,this.updater=r||lf}var wd=vd.prototype=new uf;wd.constructor=vd;cf(wd,gi.prototype);wd.isPureReactComponent=!0;var Gu=Array.isArray,pf=Object.prototype.hasOwnProperty,jd={current:null},hf={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,r){var i,o={},a=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)pf.call(t,i)&&!hf.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];o.children=d}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:$o,type:e,key:a,ref:s,props:o,_owner:jd.current}}function L1(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function N1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ku=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N1(""+e.key):t.toString(36)}function aa(e,t,r,i,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $o:case $1:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+ml(s,0):i,Gu(o)?(r="",e!=null&&(r=e.replace(Ku,"$&/")+"/"),aa(o,t,r,"",function(u){return u})):o!=null&&(bd(o)&&(o=L1(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ku,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",Gu(e))for(var c=0;c<e.length;c++){a=e[c];var d=i+ml(a,c);s+=aa(a,t,r,d,o)}else if(d=R1(e),typeof d=="function")for(e=d.call(e),c=0;!(a=e.next()).done;)a=a.value,d=i+ml(a,c++),s+=aa(a,t,r,d,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _o(e,t,r){if(e==null)return e;var i=[],o=0;return aa(e,i,"","",function(a){return t.call(r,a,o++)}),i}function A1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},sa={transition:null},_1={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:sa,ReactCurrentOwner:jd};function mf(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:_o,forEach:function(e,t,r){_o(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};oe.Component=gi;oe.Fragment=k1;oe.Profiler=C1;oe.PureComponent=vd;oe.StrictMode=S1;oe.Suspense=M1;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;oe.act=mf;oe.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=cf({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=jd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)pf.call(t,d)&&!hf.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=r;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:$o,type:e.type,key:o,ref:a,props:i,_owner:s}};oe.createContext=function(e){return e={$$typeof:P1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z1,_context:e},e.Consumer=e};oe.createElement=ff;oe.createFactory=function(e){var t=ff.bind(null,e);return t.type=e,t};oe.createRef=function(){return{current:null}};oe.forwardRef=function(e){return{$$typeof:E1,render:e}};oe.isValidElement=bd;oe.lazy=function(e){return{$$typeof:T1,_payload:{_status:-1,_result:e},_init:A1}};oe.memo=function(e,t){return{$$typeof:F1,type:e,compare:t===void 0?null:t}};oe.startTransition=function(e){var t=sa.transition;sa.transition={};try{e()}finally{sa.transition=t}};oe.unstable_act=mf;oe.useCallback=function(e,t){return mt.current.useCallback(e,t)};oe.useContext=function(e){return mt.current.useContext(e)};oe.useDebugValue=function(){};oe.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};oe.useEffect=function(e,t){return mt.current.useEffect(e,t)};oe.useId=function(){return mt.current.useId()};oe.useImperativeHandle=function(e,t,r){return mt.current.useImperativeHandle(e,t,r)};oe.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};oe.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};oe.useMemo=function(e,t){return mt.current.useMemo(e,t)};oe.useReducer=function(e,t,r){return mt.current.useReducer(e,t,r)};oe.useRef=function(e){return mt.current.useRef(e)};oe.useState=function(e){return mt.current.useState(e)};oe.useSyncExternalStore=function(e,t,r){return mt.current.useSyncExternalStore(e,t,r)};oe.useTransition=function(){return mt.current.useTransition()};oe.version="18.3.1";sf.exports=oe;var v=sf.exports;const tn=of(v),I1=b1({__proto__:null,default:tn},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1=v,D1=Symbol.for("react.element"),B1=Symbol.for("react.fragment"),H1=Object.prototype.hasOwnProperty,U1=O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V1={key:!0,ref:!0,__self:!0,__source:!0};function gf(e,t,r){var i,o={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)H1.call(t,i)&&!V1.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:D1,type:e,key:a,ref:s,props:o,_owner:U1.current}}ys.Fragment=B1;ys.jsx=gf;ys.jsxs=gf;af.exports=ys;var n=af.exports,hc={},yf={exports:{}},Et={},xf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,V){var B=A.length;A.push(V);e:for(;0<B;){var se=B-1>>>1,P=A[se];if(0<o(P,V))A[se]=V,A[B]=P,B=se;else break e}}function r(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var V=A[0],B=A.pop();if(B!==V){A[0]=B;e:for(var se=0,P=A.length,k=P>>>1;se<k;){var T=2*(se+1)-1,O=A[T],$=T+1,J=A[$];if(0>o(O,B))$<P&&0>o(J,O)?(A[se]=J,A[$]=B,se=$):(A[se]=O,A[T]=B,se=T);else if($<P&&0>o(J,B))A[se]=J,A[$]=B,se=$;else break e}}return V}function o(A,V){var B=A.sortIndex-V.sortIndex;return B!==0?B:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var d=[],u=[],g=1,h=null,x=3,S=!1,j=!1,C=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var V=r(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=A)i(u),V.sortIndex=V.expirationTime,t(d,V);else break;V=r(u)}}function b(A){if(C=!1,y(A),!j)if(r(d)!==null)j=!0,xe(z);else{var V=r(u);V!==null&&De(b,V.startTime-A)}}function z(A,V){j=!1,C&&(C=!1,f(_),_=-1),S=!0;var B=x;try{for(y(V),h=r(d);h!==null&&(!(h.expirationTime>V)||A&&!me());){var se=h.callback;if(typeof se=="function"){h.callback=null,x=h.priorityLevel;var P=se(h.expirationTime<=V);V=e.unstable_now(),typeof P=="function"?h.callback=P:h===r(d)&&i(d),y(V)}else i(d);h=r(d)}if(h!==null)var k=!0;else{var T=r(u);T!==null&&De(b,T.startTime-V),k=!1}return k}finally{h=null,x=B,S=!1}}var R=!1,N=null,_=-1,W=5,D=-1;function me(){return!(e.unstable_now()-D<W)}function pe(){if(N!==null){var A=e.unstable_now();D=A;var V=!0;try{V=N(!0,A)}finally{V?Me():(R=!1,N=null)}}else R=!1}var Me;if(typeof p=="function")Me=function(){p(pe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Oe=_e.port2;_e.port1.onmessage=pe,Me=function(){Oe.postMessage(null)}}else Me=function(){w(pe,0)};function xe(A){N=A,R||(R=!0,Me())}function De(A,V){_=w(function(){A(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){j||S||(j=!0,xe(z))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(A){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var B=x;x=V;try{return A()}finally{x=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=x;x=A;try{return V()}finally{x=B}},e.unstable_scheduleCallback=function(A,V,B){var se=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?se+B:se):B=se,A){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=B+P,A={id:g++,callback:V,priorityLevel:A,startTime:B,expirationTime:P,sortIndex:-1},B>se?(A.sortIndex=B,t(u,A),r(d)===null&&A===r(u)&&(C?(f(_),_=-1):C=!0,De(b,B-se))):(A.sortIndex=P,t(d,A),j||S||(j=!0,xe(z))),A},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(A){var V=x;return function(){var B=x;x=V;try{return A.apply(this,arguments)}finally{x=B}}}})(vf);xf.exports=vf;var W1=xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=v,zt=W1;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wf=new Set,Xi={};function zn(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(Xi[e]=t,e=0;e<t.length;e++)wf.add(t[e])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=Object.prototype.hasOwnProperty,K1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Yu={};function Q1(e){return fc.call(Yu,e)?!0:fc.call(Qu,e)?!1:K1.test(e)?Yu[e]=!0:(Qu[e]=!0,!1)}function Y1(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q1(e,t,r,i){if(t===null||typeof t>"u"||Y1(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,r,i,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function kd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($d,kd);it[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($d,kd);it[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($d,kd);it[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sd(e,t,r,i){var o=it.hasOwnProperty(t)?it[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q1(t,r,o,i)&&(r=null),i||o===null?Q1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Er=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),_n=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),jf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),$f=Symbol.for("react.offscreen"),qu=Symbol.iterator;function $i(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,gl;function Ri(e){if(gl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);gl=t&&t[1]||""}return`
`+gl+e}var yl=!1;function xl(e,t){if(!e||yl)return"";yl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=i.stack.split(`
`),s=o.length-1,c=a.length-1;1<=s&&0<=c&&o[s]!==a[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==a[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==a[c]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{yl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ri(e):""}function Z1(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function xc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case _n:return"Portal";case mc:return"Profiler";case Cd:return"StrictMode";case gc:return"Suspense";case yc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bf:return(e.displayName||"Context")+".Consumer";case jf:return(e._context.displayName||"Context")+".Provider";case zd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pd:return t=e.displayName||null,t!==null?t:xc(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return xc(e(t))}catch{}}return null}function X1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xc(t);case 8:return t===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J1(e){var t=kf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oo(e){e._valueTracker||(e._valueTracker=J1(e))}function Sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=kf(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vc(e,t){var r=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Zu(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Jr(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cf(e,t){t=t.checked,t!=null&&Sd(e,"checked",t,!1)}function wc(e,t){Cf(e,t);var r=Jr(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jc(e,t.type,r):t.hasOwnProperty("defaultValue")&&jc(e,t.type,Jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function jc(e,t,r){(t!=="number"||Sa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Li=Array.isArray;function qn(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Jr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(Li(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Jr(r)}}function zf(e,t){var r=Jr(t.value),i=Jr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function ep(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Do,Ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Do.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ey=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){ey.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function Mf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function Ff(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=Mf(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var ty=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kc(e,t){if(t){if(ty[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Sc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function Ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zc=null,Zn=null,Xn=null;function tp(e){if(e=Co(e)){if(typeof zc!="function")throw Error(E(280));var t=e.stateNode;t&&(t=bs(t),zc(e.stateNode,e.type,t))}}function Tf(e){Zn?Xn?Xn.push(e):Xn=[e]:Zn=e}function Rf(){if(Zn){var e=Zn,t=Xn;if(Xn=Zn=null,tp(e),t)for(e=0;e<t.length;e++)tp(t[e])}}function Lf(e,t){return e(t)}function Nf(){}var vl=!1;function Af(e,t,r){if(vl)return e(t,r);vl=!0;try{return Lf(e,t,r)}finally{vl=!1,(Zn!==null||Xn!==null)&&(Nf(),Rf())}}function eo(e,t){var r=e.stateNode;if(r===null)return null;var i=bs(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Pc=!1;if(Sr)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Pc=!1}function ry(e,t,r,i,o,a,s,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var Oi=!1,Ca=null,za=!1,Ec=null,ny={onError:function(e){Oi=!0,Ca=e}};function iy(e,t,r,i,o,a,s,c,d){Oi=!1,Ca=null,ry.apply(ny,arguments)}function oy(e,t,r,i,o,a,s,c,d){if(iy.apply(this,arguments),Oi){if(Oi){var u=Ca;Oi=!1,Ca=null}else throw Error(E(198));za||(za=!0,Ec=u)}}function Pn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function _f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rp(e){if(Pn(e)!==e)throw Error(E(188))}function ay(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return rp(o),e;if(a===i)return rp(o),t;a=a.sibling}throw Error(E(188))}if(r.return!==i.return)r=o,i=a;else{for(var s=!1,c=o.child;c;){if(c===r){s=!0,r=o,i=a;break}if(c===i){s=!0,i=o,r=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===r){s=!0,r=a,i=o;break}if(c===i){s=!0,i=a,r=o;break}c=c.sibling}if(!s)throw Error(E(189))}}if(r.alternate!==i)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function If(e){return e=ay(e),e!==null?Of(e):null}function Of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Of(e);if(t!==null)return t;e=e.sibling}return null}var Df=zt.unstable_scheduleCallback,np=zt.unstable_cancelCallback,sy=zt.unstable_shouldYield,ly=zt.unstable_requestPaint,He=zt.unstable_now,cy=zt.unstable_getCurrentPriorityLevel,Md=zt.unstable_ImmediatePriority,Bf=zt.unstable_UserBlockingPriority,Pa=zt.unstable_NormalPriority,dy=zt.unstable_LowPriority,Hf=zt.unstable_IdlePriority,xs=null,fr=null;function uy(e){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:fy,py=Math.log,hy=Math.LN2;function fy(e){return e>>>=0,e===0?32:31-(py(e)/hy|0)|0}var Bo=64,Ho=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ea(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var c=s&~o;c!==0?i=Ni(c):(a&=s,a!==0&&(i=Ni(a)))}else s=r&~o,s!==0?i=Ni(s):a!==0&&(i=Ni(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-ir(t),o=1<<r,i|=e[r],t&=~o;return i}function my(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gy(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-ir(a),c=1<<s,d=o[s];d===-1?(!(c&r)||c&i)&&(o[s]=my(c,t)):d<=t&&(e.expiredLanes|=c),a&=~c}}function Mc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uf(){var e=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),e}function wl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ko(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ir(t),e[t]=r}function yy(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-ir(r),a=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~a}}function Fd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-ir(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var ge=0;function Vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wf,Td,Gf,Kf,Qf,Fc=!1,Uo=[],Ur=null,Vr=null,Wr=null,to=new Map,ro=new Map,Ir=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(e,t){switch(e){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(t.pointerId)}}function Si(e,t,r,i,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Co(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vy(e,t,r,i,o){switch(t){case"focusin":return Ur=Si(Ur,e,t,r,i,o),!0;case"dragenter":return Vr=Si(Vr,e,t,r,i,o),!0;case"mouseover":return Wr=Si(Wr,e,t,r,i,o),!0;case"pointerover":var a=o.pointerId;return to.set(a,Si(to.get(a)||null,e,t,r,i,o)),!0;case"gotpointercapture":return a=o.pointerId,ro.set(a,Si(ro.get(a)||null,e,t,r,i,o)),!0}return!1}function Yf(e){var t=hn(e.target);if(t!==null){var r=Pn(t);if(r!==null){if(t=r.tag,t===13){if(t=_f(r),t!==null){e.blockedOn=t,Qf(e.priority,function(){Gf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function la(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Tc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Cc=i,r.target.dispatchEvent(i),Cc=null}else return t=Co(r),t!==null&&Td(t),e.blockedOn=r,!1;t.shift()}return!0}function op(e,t,r){la(e)&&r.delete(t)}function wy(){Fc=!1,Ur!==null&&la(Ur)&&(Ur=null),Vr!==null&&la(Vr)&&(Vr=null),Wr!==null&&la(Wr)&&(Wr=null),to.forEach(op),ro.forEach(op)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,wy)))}function no(e){function t(o){return Ci(o,e)}if(0<Uo.length){Ci(Uo[0],e);for(var r=1;r<Uo.length;r++){var i=Uo[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Ur!==null&&Ci(Ur,e),Vr!==null&&Ci(Vr,e),Wr!==null&&Ci(Wr,e),to.forEach(t),ro.forEach(t),r=0;r<Ir.length;r++)i=Ir[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Ir.length&&(r=Ir[0],r.blockedOn===null);)Yf(r),r.blockedOn===null&&Ir.shift()}var Jn=Er.ReactCurrentBatchConfig,Ma=!0;function jy(e,t,r,i){var o=ge,a=Jn.transition;Jn.transition=null;try{ge=1,Rd(e,t,r,i)}finally{ge=o,Jn.transition=a}}function by(e,t,r,i){var o=ge,a=Jn.transition;Jn.transition=null;try{ge=4,Rd(e,t,r,i)}finally{ge=o,Jn.transition=a}}function Rd(e,t,r,i){if(Ma){var o=Tc(e,t,r,i);if(o===null)Ml(e,t,i,Fa,r),ip(e,i);else if(vy(o,e,t,r,i))i.stopPropagation();else if(ip(e,i),t&4&&-1<xy.indexOf(e)){for(;o!==null;){var a=Co(o);if(a!==null&&Wf(a),a=Tc(e,t,r,i),a===null&&Ml(e,t,i,Fa,r),a===o)break;o=a}o!==null&&i.stopPropagation()}else Ml(e,t,i,null,r)}}var Fa=null;function Tc(e,t,r,i){if(Fa=null,e=Ed(i),e=hn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=_f(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fa=e,null}function qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cy()){case Md:return 1;case Bf:return 4;case Pa:case dy:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var Dr=null,Ld=null,ca=null;function Zf(){if(ca)return ca;var e,t=Ld,r=t.length,i,o="value"in Dr?Dr.value:Dr.textContent,a=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===o[a-i];i++);return ca=o.slice(e,1<i?1-i:void 0)}function da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function ap(){return!1}function Mt(e){function t(r,i,o,a,s){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vo:ap,this.isPropagationStopped=ap,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=Mt(yi),So=Ae({},yi,{view:0,detail:0}),$y=Mt(So),jl,bl,zi,vs=Ae({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zi&&(zi&&e.type==="mousemove"?(jl=e.screenX-zi.screenX,bl=e.screenY-zi.screenY):bl=jl=0,zi=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),sp=Mt(vs),ky=Ae({},vs,{dataTransfer:0}),Sy=Mt(ky),Cy=Ae({},So,{relatedTarget:0}),$l=Mt(Cy),zy=Ae({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=Mt(zy),Ey=Ae({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),My=Mt(Ey),Fy=Ae({},yi,{data:0}),lp=Mt(Fy),Ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ly[e])?!!t[e]:!1}function Ad(){return Ny}var Ay=Ae({},So,{key:function(e){if(e.key){var t=Ty[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(e){return e.type==="keypress"?da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=Mt(Ay),Iy=Ae({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Mt(Iy),Oy=Ae({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),Dy=Mt(Oy),By=Ae({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Mt(By),Uy=Ae({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Mt(Uy),Wy=[9,13,27,32],_d=Sr&&"CompositionEvent"in window,Di=null;Sr&&"documentMode"in document&&(Di=document.documentMode);var Gy=Sr&&"TextEvent"in window&&!Di,Xf=Sr&&(!_d||Di&&8<Di&&11>=Di),dp=" ",up=!1;function Jf(e,t){switch(e){case"keyup":return Wy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Ky(e,t){switch(e){case"compositionend":return em(t);case"keypress":return t.which!==32?null:(up=!0,dp);case"textInput":return e=t.data,e===dp&&up?null:e;default:return null}}function Qy(e,t){if(On)return e==="compositionend"||!_d&&Jf(e,t)?(e=Zf(),ca=Ld=Dr=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yy[e.type]:t==="textarea"}function tm(e,t,r,i){Tf(i),t=Ta(t,"onChange"),0<t.length&&(r=new Nd("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Bi=null,io=null;function qy(e){pm(e,0)}function ws(e){var t=Hn(e);if(Sf(t))return e}function Zy(e,t){if(e==="change")return t}var rm=!1;if(Sr){var kl;if(Sr){var Sl="oninput"in document;if(!Sl){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),Sl=typeof hp.oninput=="function"}kl=Sl}else kl=!1;rm=kl&&(!document.documentMode||9<document.documentMode)}function fp(){Bi&&(Bi.detachEvent("onpropertychange",nm),io=Bi=null)}function nm(e){if(e.propertyName==="value"&&ws(io)){var t=[];tm(t,io,e,Ed(e)),Af(qy,t)}}function Xy(e,t,r){e==="focusin"?(fp(),Bi=t,io=r,Bi.attachEvent("onpropertychange",nm)):e==="focusout"&&fp()}function Jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ws(io)}function ex(e,t){if(e==="click")return ws(t)}function tx(e,t){if(e==="input"||e==="change")return ws(t)}function rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ar=typeof Object.is=="function"?Object.is:rx;function oo(e,t){if(ar(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!fc.call(t,o)||!ar(e[o],t[o]))return!1}return!0}function mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gp(e,t){var r=mp(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=mp(r)}}function im(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?im(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function om(){for(var e=window,t=Sa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Sa(e.document)}return t}function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nx(e){var t=om(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&im(r.ownerDocument.documentElement,r)){if(i!==null&&Id(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!e.extend&&a>i&&(o=i,i=a,a=o),o=gp(r,a);var s=gp(r,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ix=Sr&&"documentMode"in document&&11>=document.documentMode,Dn=null,Rc=null,Hi=null,Lc=!1;function yp(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lc||Dn==null||Dn!==Sa(i)||(i=Dn,"selectionStart"in i&&Id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hi&&oo(Hi,i)||(Hi=i,i=Ta(Rc,"onSelect"),0<i.length&&(t=new Nd("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Dn)))}function Wo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Bn={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Cl={},am={};Sr&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function js(e){if(Cl[e])return Cl[e];if(!Bn[e])return e;var t=Bn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in am)return Cl[e]=t[r];return e}var sm=js("animationend"),lm=js("animationiteration"),cm=js("animationstart"),dm=js("transitionend"),um=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){um.set(e,t),zn(t,[e])}for(var zl=0;zl<xp.length;zl++){var Pl=xp[zl],ox=Pl.toLowerCase(),ax=Pl[0].toUpperCase()+Pl.slice(1);rn(ox,"on"+ax)}rn(sm,"onAnimationEnd");rn(lm,"onAnimationIteration");rn(cm,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(dm,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function vp(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,oy(i,t,void 0,e),e.currentTarget=null}function pm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var c=i[s],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==a&&o.isPropagationStopped())break e;vp(o,c,u),a=d}else for(s=0;s<i.length;s++){if(c=i[s],d=c.instance,u=c.currentTarget,c=c.listener,d!==a&&o.isPropagationStopped())break e;vp(o,c,u),a=d}}}if(za)throw e=Ec,za=!1,Ec=null,e}function ke(e,t){var r=t[Oc];r===void 0&&(r=t[Oc]=new Set);var i=e+"__bubble";r.has(i)||(hm(t,e,2,!1),r.add(i))}function El(e,t,r){var i=0;t&&(i|=4),hm(r,e,i,t)}var Go="_reactListening"+Math.random().toString(36).slice(2);function ao(e){if(!e[Go]){e[Go]=!0,wf.forEach(function(r){r!=="selectionchange"&&(sx.has(r)||El(r,!1,e),El(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Go]||(t[Go]=!0,El("selectionchange",!1,t))}}function hm(e,t,r,i){switch(qf(t)){case 1:var o=jy;break;case 4:o=by;break;default:o=Rd}r=o.bind(null,t,r,e),o=void 0,!Pc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ml(e,t,r,i,o){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;c!==null;){if(s=hn(c),s===null)return;if(d=s.tag,d===5||d===6){i=a=s;continue e}c=c.parentNode}}i=i.return}Af(function(){var u=a,g=Ed(r),h=[];e:{var x=um.get(e);if(x!==void 0){var S=Nd,j=e;switch(e){case"keypress":if(da(r)===0)break e;case"keydown":case"keyup":S=_y;break;case"focusin":j="focus",S=$l;break;case"focusout":j="blur",S=$l;break;case"beforeblur":case"afterblur":S=$l;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Dy;break;case sm:case lm:case cm:S=Py;break;case dm:S=Hy;break;case"scroll":S=$y;break;case"wheel":S=Vy;break;case"copy":case"cut":case"paste":S=My;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=cp}var C=(t&4)!==0,w=!C&&e==="scroll",f=C?x!==null?x+"Capture":null:x;C=[];for(var p=u,y;p!==null;){y=p;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,f!==null&&(b=eo(p,f),b!=null&&C.push(so(p,b,y)))),w)break;p=p.return}0<C.length&&(x=new S(x,j,null,r,g),h.push({event:x,listeners:C}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",x&&r!==Cc&&(j=r.relatedTarget||r.fromElement)&&(hn(j)||j[Cr]))break e;if((S||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,S?(j=r.relatedTarget||r.toElement,S=u,j=j?hn(j):null,j!==null&&(w=Pn(j),j!==w||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=u),S!==j)){if(C=sp,b="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(C=cp,b="onPointerLeave",f="onPointerEnter",p="pointer"),w=S==null?x:Hn(S),y=j==null?x:Hn(j),x=new C(b,p+"leave",S,r,g),x.target=w,x.relatedTarget=y,b=null,hn(g)===u&&(C=new C(f,p+"enter",j,r,g),C.target=y,C.relatedTarget=w,b=C),w=b,S&&j)t:{for(C=S,f=j,p=0,y=C;y;y=Nn(y))p++;for(y=0,b=f;b;b=Nn(b))y++;for(;0<p-y;)C=Nn(C),p--;for(;0<y-p;)f=Nn(f),y--;for(;p--;){if(C===f||f!==null&&C===f.alternate)break t;C=Nn(C),f=Nn(f)}C=null}else C=null;S!==null&&wp(h,x,S,C,!1),j!==null&&w!==null&&wp(h,w,j,C,!0)}}e:{if(x=u?Hn(u):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var z=Zy;else if(pp(x))if(rm)z=tx;else{z=Jy;var R=Xy}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(z=ex);if(z&&(z=z(e,u))){tm(h,z,r,g);break e}R&&R(e,x,u),e==="focusout"&&(R=x._wrapperState)&&R.controlled&&x.type==="number"&&jc(x,"number",x.value)}switch(R=u?Hn(u):window,e){case"focusin":(pp(R)||R.contentEditable==="true")&&(Dn=R,Rc=u,Hi=null);break;case"focusout":Hi=Rc=Dn=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,yp(h,r,g);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":yp(h,r,g)}var N;if(_d)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else On?Jf(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(Xf&&r.locale!=="ko"&&(On||_!=="onCompositionStart"?_==="onCompositionEnd"&&On&&(N=Zf()):(Dr=g,Ld="value"in Dr?Dr.value:Dr.textContent,On=!0)),R=Ta(u,_),0<R.length&&(_=new lp(_,e,null,r,g),h.push({event:_,listeners:R}),N?_.data=N:(N=em(r),N!==null&&(_.data=N)))),(N=Gy?Ky(e,r):Qy(e,r))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(g=new lp("onBeforeInput","beforeinput",null,r,g),h.push({event:g,listeners:u}),g.data=N))}pm(h,t)})}function so(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ta(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=eo(e,r),a!=null&&i.unshift(so(e,a,o)),a=eo(e,t),a!=null&&i.push(so(e,a,o))),e=e.return}return i}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wp(e,t,r,i,o){for(var a=t._reactName,s=[];r!==null&&r!==i;){var c=r,d=c.alternate,u=c.stateNode;if(d!==null&&d===i)break;c.tag===5&&u!==null&&(c=u,o?(d=eo(r,a),d!=null&&s.unshift(so(r,d,c))):o||(d=eo(r,a),d!=null&&s.push(so(r,d,c)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var lx=/\r\n?/g,cx=/\u0000|\uFFFD/g;function jp(e){return(typeof e=="string"?e:""+e).replace(lx,`
`).replace(cx,"")}function Ko(e,t,r){if(t=jp(t),jp(e)!==t&&r)throw Error(E(425))}function Ra(){}var Nc=null,Ac=null;function _c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(e){return bp.resolve(null).then(e).catch(px)}:Ic;function px(e){setTimeout(function(){throw e})}function Fl(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),no(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);no(t)}function Gr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),hr="__reactFiber$"+xi,lo="__reactProps$"+xi,Cr="__reactContainer$"+xi,Oc="__reactEvents$"+xi,hx="__reactListeners$"+xi,fx="__reactHandles$"+xi;function hn(e){var t=e[hr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Cr]||r[hr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$p(e);e!==null;){if(r=e[hr])return r;e=$p(e)}return t}e=r,r=e.parentNode}return null}function Co(e){return e=e[hr]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function bs(e){return e[lo]||null}var Dc=[],Un=-1;function nn(e){return{current:e}}function Se(e){0>Un||(e.current=Dc[Un],Dc[Un]=null,Un--)}function be(e,t){Un++,Dc[Un]=e.current,e.current=t}var en={},ut=nn(en),wt=nn(!1),vn=en;function ii(e,t){var r=e.type.contextTypes;if(!r)return en;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in r)o[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function jt(e){return e=e.childContextTypes,e!=null}function La(){Se(wt),Se(ut)}function kp(e,t,r){if(ut.current!==en)throw Error(E(168));be(ut,t),be(wt,r)}function fm(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(E(108,X1(e)||"Unknown",o));return Ae({},r,i)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,vn=ut.current,be(ut,e),be(wt,wt.current),!0}function Sp(e,t,r){var i=e.stateNode;if(!i)throw Error(E(169));r?(e=fm(e,t,vn),i.__reactInternalMemoizedMergedChildContext=e,Se(wt),Se(ut),be(ut,e)):Se(wt),be(wt,r)}var wr=null,$s=!1,Tl=!1;function mm(e){wr===null?wr=[e]:wr.push(e)}function mx(e){$s=!0,mm(e)}function on(){if(!Tl&&wr!==null){Tl=!0;var e=0,t=ge;try{var r=wr;for(ge=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}wr=null,$s=!1}catch(o){throw wr!==null&&(wr=wr.slice(e+1)),Df(Md,on),o}finally{ge=t,Tl=!1}}return null}var Vn=[],Wn=0,Aa=null,_a=0,Nt=[],At=0,wn=null,jr=1,br="";function ln(e,t){Vn[Wn++]=_a,Vn[Wn++]=Aa,Aa=e,_a=t}function gm(e,t,r){Nt[At++]=jr,Nt[At++]=br,Nt[At++]=wn,wn=e;var i=jr;e=br;var o=32-ir(i)-1;i&=~(1<<o),r+=1;var a=32-ir(t)+o;if(30<a){var s=o-o%5;a=(i&(1<<s)-1).toString(32),i>>=s,o-=s,jr=1<<32-ir(t)+o|r<<o|i,br=a+e}else jr=1<<a|r<<o|i,br=e}function Od(e){e.return!==null&&(ln(e,1),gm(e,1,0))}function Dd(e){for(;e===Aa;)Aa=Vn[--Wn],Vn[Wn]=null,_a=Vn[--Wn],Vn[Wn]=null;for(;e===wn;)wn=Nt[--At],Nt[At]=null,br=Nt[--At],Nt[At]=null,jr=Nt[--At],Nt[At]=null}var Ct=null,St=null,Pe=!1,tr=null;function ym(e,t){var r=Bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Cp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,St=Gr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=wn!==null?{id:jr,overflow:br}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,St=null,!0):!1;default:return!1}}function Bc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hc(e){if(Pe){var t=St;if(t){var r=t;if(!Cp(e,t)){if(Bc(e))throw Error(E(418));t=Gr(r.nextSibling);var i=Ct;t&&Cp(e,t)?ym(i,r):(e.flags=e.flags&-4097|2,Pe=!1,Ct=e)}}else{if(Bc(e))throw Error(E(418));e.flags=e.flags&-4097|2,Pe=!1,Ct=e}}}function zp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function Qo(e){if(e!==Ct)return!1;if(!Pe)return zp(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_c(e.type,e.memoizedProps)),t&&(t=St)){if(Bc(e))throw xm(),Error(E(418));for(;t;)ym(e,t),t=Gr(t.nextSibling)}if(zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){St=Gr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}St=null}}else St=Ct?Gr(e.stateNode.nextSibling):null;return!0}function xm(){for(var e=St;e;)e=Gr(e.nextSibling)}function oi(){St=Ct=null,Pe=!1}function Bd(e){tr===null?tr=[e]:tr.push(e)}var gx=Er.ReactCurrentBatchConfig;function Pi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var i=r.stateNode}if(!i)throw Error(E(147,e));var o=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var c=o.refs;s===null?delete c[a]:c[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Yo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pp(e){var t=e._init;return t(e._payload)}function vm(e){function t(f,p){if(e){var y=f.deletions;y===null?(f.deletions=[p],f.flags|=16):y.push(p)}}function r(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function i(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=qr(f,p),f.index=0,f.sibling=null,f}function a(f,p,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<p?(f.flags|=2,p):y):(f.flags|=2,p)):(f.flags|=1048576,p)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,p,y,b){return p===null||p.tag!==6?(p=Ol(y,f.mode,b),p.return=f,p):(p=o(p,y),p.return=f,p)}function d(f,p,y,b){var z=y.type;return z===In?g(f,p,y.props.children,b,y.key):p!==null&&(p.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&Pp(z)===p.type)?(b=o(p,y.props),b.ref=Pi(f,p,y),b.return=f,b):(b=ya(y.type,y.key,y.props,null,f.mode,b),b.ref=Pi(f,p,y),b.return=f,b)}function u(f,p,y,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Dl(y,f.mode,b),p.return=f,p):(p=o(p,y.children||[]),p.return=f,p)}function g(f,p,y,b,z){return p===null||p.tag!==7?(p=yn(y,f.mode,b,z),p.return=f,p):(p=o(p,y),p.return=f,p)}function h(f,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ol(""+p,f.mode,y),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Io:return y=ya(p.type,p.key,p.props,null,f.mode,y),y.ref=Pi(f,null,p),y.return=f,y;case _n:return p=Dl(p,f.mode,y),p.return=f,p;case Ar:var b=p._init;return h(f,b(p._payload),y)}if(Li(p)||$i(p))return p=yn(p,f.mode,y,null),p.return=f,p;Yo(f,p)}return null}function x(f,p,y,b){var z=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return z!==null?null:c(f,p,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:return y.key===z?d(f,p,y,b):null;case _n:return y.key===z?u(f,p,y,b):null;case Ar:return z=y._init,x(f,p,z(y._payload),b)}if(Li(y)||$i(y))return z!==null?null:g(f,p,y,b,null);Yo(f,y)}return null}function S(f,p,y,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(y)||null,c(p,f,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Io:return f=f.get(b.key===null?y:b.key)||null,d(p,f,b,z);case _n:return f=f.get(b.key===null?y:b.key)||null,u(p,f,b,z);case Ar:var R=b._init;return S(f,p,y,R(b._payload),z)}if(Li(b)||$i(b))return f=f.get(y)||null,g(p,f,b,z,null);Yo(p,b)}return null}function j(f,p,y,b){for(var z=null,R=null,N=p,_=p=0,W=null;N!==null&&_<y.length;_++){N.index>_?(W=N,N=null):W=N.sibling;var D=x(f,N,y[_],b);if(D===null){N===null&&(N=W);break}e&&N&&D.alternate===null&&t(f,N),p=a(D,p,_),R===null?z=D:R.sibling=D,R=D,N=W}if(_===y.length)return r(f,N),Pe&&ln(f,_),z;if(N===null){for(;_<y.length;_++)N=h(f,y[_],b),N!==null&&(p=a(N,p,_),R===null?z=N:R.sibling=N,R=N);return Pe&&ln(f,_),z}for(N=i(f,N);_<y.length;_++)W=S(N,f,_,y[_],b),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?_:W.key),p=a(W,p,_),R===null?z=W:R.sibling=W,R=W);return e&&N.forEach(function(me){return t(f,me)}),Pe&&ln(f,_),z}function C(f,p,y,b){var z=$i(y);if(typeof z!="function")throw Error(E(150));if(y=z.call(y),y==null)throw Error(E(151));for(var R=z=null,N=p,_=p=0,W=null,D=y.next();N!==null&&!D.done;_++,D=y.next()){N.index>_?(W=N,N=null):W=N.sibling;var me=x(f,N,D.value,b);if(me===null){N===null&&(N=W);break}e&&N&&me.alternate===null&&t(f,N),p=a(me,p,_),R===null?z=me:R.sibling=me,R=me,N=W}if(D.done)return r(f,N),Pe&&ln(f,_),z;if(N===null){for(;!D.done;_++,D=y.next())D=h(f,D.value,b),D!==null&&(p=a(D,p,_),R===null?z=D:R.sibling=D,R=D);return Pe&&ln(f,_),z}for(N=i(f,N);!D.done;_++,D=y.next())D=S(N,f,_,D.value,b),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?_:D.key),p=a(D,p,_),R===null?z=D:R.sibling=D,R=D);return e&&N.forEach(function(pe){return t(f,pe)}),Pe&&ln(f,_),z}function w(f,p,y,b){if(typeof y=="object"&&y!==null&&y.type===In&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Io:e:{for(var z=y.key,R=p;R!==null;){if(R.key===z){if(z=y.type,z===In){if(R.tag===7){r(f,R.sibling),p=o(R,y.props.children),p.return=f,f=p;break e}}else if(R.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&Pp(z)===R.type){r(f,R.sibling),p=o(R,y.props),p.ref=Pi(f,R,y),p.return=f,f=p;break e}r(f,R);break}else t(f,R);R=R.sibling}y.type===In?(p=yn(y.props.children,f.mode,b,y.key),p.return=f,f=p):(b=ya(y.type,y.key,y.props,null,f.mode,b),b.ref=Pi(f,p,y),b.return=f,f=b)}return s(f);case _n:e:{for(R=y.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){r(f,p.sibling),p=o(p,y.children||[]),p.return=f,f=p;break e}else{r(f,p);break}else t(f,p);p=p.sibling}p=Dl(y,f.mode,b),p.return=f,f=p}return s(f);case Ar:return R=y._init,w(f,p,R(y._payload),b)}if(Li(y))return j(f,p,y,b);if($i(y))return C(f,p,y,b);Yo(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(r(f,p.sibling),p=o(p,y),p.return=f,f=p):(r(f,p),p=Ol(y,f.mode,b),p.return=f,f=p),s(f)):r(f,p)}return w}var ai=vm(!0),wm=vm(!1),Ia=nn(null),Oa=null,Gn=null,Hd=null;function Ud(){Hd=Gn=Oa=null}function Vd(e){var t=Ia.current;Se(Ia),e._currentValue=t}function Uc(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function ei(e,t){Oa=e,Hd=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Hd!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(Oa===null)throw Error(E(308));Gn=e,Oa.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var fn=null;function Wd(e){fn===null?fn=[e]:fn.push(e)}function jm(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,Wd(t)):(r.next=o.next,o.next=r),t.interleaved=r,zr(e,i)}function zr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var _r=!1;function Gd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,de&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,zr(e,r)}return o=i.interleaved,o===null?(t.next=t,Wd(i)):(t.next=o.next,o.next=t),i.interleaved=t,zr(e,r)}function ua(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Fd(e,r)}}function Ep(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?o=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?o=a=t:a=a.next=t}else o=a=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Da(e,t,r,i){var o=e.updateQueue;_r=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var d=c,u=d.next;d.next=null,s===null?a=u:s.next=u,s=d;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==s&&(c===null?g.firstBaseUpdate=u:c.next=u,g.lastBaseUpdate=d))}if(a!==null){var h=o.baseState;s=0,g=u=d=null,c=a;do{var x=c.lane,S=c.eventTime;if((i&x)===x){g!==null&&(g=g.next={eventTime:S,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=e,C=c;switch(x=t,S=r,C.tag){case 1:if(j=C.payload,typeof j=="function"){h=j.call(S,h,x);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=C.payload,x=typeof j=="function"?j.call(S,h,x):j,x==null)break e;h=Ae({},h,x);break e;case 2:_r=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[c]:x.push(c))}else S={eventTime:S,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(u=g=S,d=h):g=g.next=S,s|=x;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;x=c,c=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(g===null&&(d=h),o.baseState=d,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);bn|=s,e.lanes=s,e.memoizedState=h}}function Mp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(E(191,o));o.call(i)}}}var zo={},mr=nn(zo),co=nn(zo),uo=nn(zo);function mn(e){if(e===zo)throw Error(E(174));return e}function Kd(e,t){switch(be(uo,t),be(co,e),be(mr,zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$c(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$c(t,e)}Se(mr),be(mr,t)}function si(){Se(mr),Se(co),Se(uo)}function $m(e){mn(uo.current);var t=mn(mr.current),r=$c(t,e.type);t!==r&&(be(co,e),be(mr,r))}function Qd(e){co.current===e&&(Se(mr),Se(co))}var Re=nn(0);function Ba(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function Yd(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var pa=Er.ReactCurrentDispatcher,Ll=Er.ReactCurrentBatchConfig,jn=0,Le=null,Ke=null,qe=null,Ha=!1,Ui=!1,po=0,yx=0;function st(){throw Error(E(321))}function qd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ar(e[r],t[r]))return!1;return!0}function Zd(e,t,r,i,o,a){if(jn=a,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pa.current=e===null||e.memoizedState===null?jx:bx,e=r(i,o),Ui){a=0;do{if(Ui=!1,po=0,25<=a)throw Error(E(301));a+=1,qe=Ke=null,t.updateQueue=null,pa.current=$x,e=r(i,o)}while(Ui)}if(pa.current=Ua,t=Ke!==null&&Ke.next!==null,jn=0,qe=Ke=Le=null,Ha=!1,t)throw Error(E(300));return e}function Xd(){var e=po!==0;return po=0,e}function pr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Le.memoizedState=qe=e:qe=qe.next=e,qe}function Wt(){if(Ke===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=qe===null?Le.memoizedState:qe.next;if(t!==null)qe=t,Ke=e;else{if(e===null)throw Error(E(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},qe===null?Le.memoizedState=qe=e:qe=qe.next=e}return qe}function ho(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Wt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=Ke,o=i.baseQueue,a=r.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}i.baseQueue=o=a,r.pending=null}if(o!==null){a=o.next,i=i.baseState;var c=s=null,d=null,u=a;do{var g=u.lane;if((jn&g)===g)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var h={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=h,s=i):d=d.next=h,Le.lanes|=g,bn|=g}u=u.next}while(u!==null&&u!==a);d===null?s=i:d.next=c,ar(i,t.memoizedState)||(vt=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=d,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do a=o.lane,Le.lanes|=a,bn|=a,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Al(e){var t=Wt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,a=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);ar(a,t.memoizedState)||(vt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function km(){}function Sm(e,t){var r=Le,i=Wt(),o=t(),a=!ar(i.memoizedState,o);if(a&&(i.memoizedState=o,vt=!0),i=i.queue,Jd(Pm.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,fo(9,zm.bind(null,r,i,o,t),void 0,null),Ze===null)throw Error(E(349));jn&30||Cm(r,t,o)}return o}function Cm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function zm(e,t,r,i){t.value=r,t.getSnapshot=i,Em(t)&&Mm(e)}function Pm(e,t,r){return r(function(){Em(t)&&Mm(e)})}function Em(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ar(e,r)}catch{return!0}}function Mm(e){var t=zr(e,1);t!==null&&or(t,e,1,-1)}function Fp(e){var t=pr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t.queue=e,e=e.dispatch=wx.bind(null,Le,e),[t.memoizedState,e]}function fo(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Fm(){return Wt().memoizedState}function ha(e,t,r,i){var o=pr();Le.flags|=e,o.memoizedState=fo(1|t,r,void 0,i===void 0?null:i)}function ks(e,t,r,i){var o=Wt();i=i===void 0?null:i;var a=void 0;if(Ke!==null){var s=Ke.memoizedState;if(a=s.destroy,i!==null&&qd(i,s.deps)){o.memoizedState=fo(t,r,a,i);return}}Le.flags|=e,o.memoizedState=fo(1|t,r,a,i)}function Tp(e,t){return ha(8390656,8,e,t)}function Jd(e,t){return ks(2048,8,e,t)}function Tm(e,t){return ks(4,2,e,t)}function Rm(e,t){return ks(4,4,e,t)}function Lm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nm(e,t,r){return r=r!=null?r.concat([e]):null,ks(4,4,Lm.bind(null,t,e),r)}function eu(){}function Am(e,t){var r=Wt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&qd(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function _m(e,t){var r=Wt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&qd(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Im(e,t,r){return jn&21?(ar(r,t)||(r=Uf(),Le.lanes|=r,bn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=r)}function xx(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var i=Ll.transition;Ll.transition={};try{e(!1),t()}finally{ge=r,Ll.transition=i}}function Om(){return Wt().memoizedState}function vx(e,t,r){var i=Yr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Dm(e))Bm(t,r);else if(r=jm(e,t,r,i),r!==null){var o=ht();or(r,e,i,o),Hm(r,t,i)}}function wx(e,t,r){var i=Yr(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Dm(e))Bm(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,c=a(s,r);if(o.hasEagerState=!0,o.eagerState=c,ar(c,s)){var d=t.interleaved;d===null?(o.next=o,Wd(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}r=jm(e,t,o,i),r!==null&&(o=ht(),or(r,e,i,o),Hm(r,t,i))}}function Dm(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Bm(e,t){Ui=Ha=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hm(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Fd(e,r)}}var Ua={readContext:Vt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},jx={readContext:Vt,useCallback:function(e,t){return pr().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:Tp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ha(4194308,4,Lm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var r=pr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=pr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=vx.bind(null,Le,e),[i.memoizedState,e]},useRef:function(e){var t=pr();return e={current:e},t.memoizedState=e},useState:Fp,useDebugValue:eu,useDeferredValue:function(e){return pr().memoizedState=e},useTransition:function(){var e=Fp(!1),t=e[0];return e=xx.bind(null,e[1]),pr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Le,o=pr();if(Pe){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),Ze===null)throw Error(E(349));jn&30||Cm(i,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,Tp(Pm.bind(null,i,a,e),[e]),i.flags|=2048,fo(9,zm.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=pr(),t=Ze.identifierPrefix;if(Pe){var r=br,i=jr;r=(i&~(1<<32-ir(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=po++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=yx++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bx={readContext:Vt,useCallback:Am,useContext:Vt,useEffect:Jd,useImperativeHandle:Nm,useInsertionEffect:Tm,useLayoutEffect:Rm,useMemo:_m,useReducer:Nl,useRef:Fm,useState:function(){return Nl(ho)},useDebugValue:eu,useDeferredValue:function(e){var t=Wt();return Im(t,Ke.memoizedState,e)},useTransition:function(){var e=Nl(ho)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:Sm,useId:Om,unstable_isNewReconciler:!1},$x={readContext:Vt,useCallback:Am,useContext:Vt,useEffect:Jd,useImperativeHandle:Nm,useInsertionEffect:Tm,useLayoutEffect:Rm,useMemo:_m,useReducer:Al,useRef:Fm,useState:function(){return Al(ho)},useDebugValue:eu,useDeferredValue:function(e){var t=Wt();return Ke===null?t.memoizedState=e:Im(t,Ke.memoizedState,e)},useTransition:function(){var e=Al(ho)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:Sm,useId:Om,unstable_isNewReconciler:!1};function Jt(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Vc(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Ae({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ss={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=ht(),o=Yr(e),a=kr(i,o);a.payload=t,r!=null&&(a.callback=r),t=Kr(e,a,o),t!==null&&(or(t,e,o,i),ua(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=ht(),o=Yr(e),a=kr(i,o);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Kr(e,a,o),t!==null&&(or(t,e,o,i),ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),i=Yr(e),o=kr(r,i);o.tag=2,t!=null&&(o.callback=t),t=Kr(e,o,i),t!==null&&(or(t,e,i,r),ua(t,e,i))}};function Rp(e,t,r,i,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,s):t.prototype&&t.prototype.isPureReactComponent?!oo(r,i)||!oo(o,a):!0}function Um(e,t,r){var i=!1,o=en,a=t.contextType;return typeof a=="object"&&a!==null?a=Vt(a):(o=jt(t)?vn:ut.current,i=t.contextTypes,a=(i=i!=null)?ii(e,o):en),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Lp(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Wc(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Gd(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Vt(a):(a=jt(t)?vn:ut.current,o.context=ii(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Vc(e,t,a,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ss.enqueueReplaceState(o,o.state,null),Da(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,t){try{var r="",i=t;do r+=Z1(i),i=i.return;while(i);var o=r}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function _l(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Gc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function Vm(e,t,r){r=kr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Wa||(Wa=!0,rd=i),Gc(e,t)},r}function Wm(e,t,r){r=kr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){Gc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Gc(e,t),typeof i!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Np(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new kx;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=Ix.bind(null,e,t,r),t.then(e,e))}function Ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _p(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kr(-1,1),t.tag=2,Kr(r,t,1))),r.lanes|=1),e)}var Sx=Er.ReactCurrentOwner,vt=!1;function pt(e,t,r,i){t.child=e===null?wm(t,null,r,i):ai(t,e.child,r,i)}function Ip(e,t,r,i,o){r=r.render;var a=t.ref;return ei(t,o),i=Zd(e,t,r,i,a,o),r=Xd(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pr(e,t,o)):(Pe&&r&&Od(t),t.flags|=1,pt(e,t,i,o),t.child)}function Op(e,t,r,i,o){if(e===null){var a=r.type;return typeof a=="function"&&!lu(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Gm(e,t,a,i,o)):(e=ya(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:oo,r(s,i)&&e.ref===t.ref)return Pr(e,t,o)}return t.flags|=1,e=qr(a,i),e.ref=t.ref,e.return=t,t.child=e}function Gm(e,t,r,i,o){if(e!==null){var a=e.memoizedProps;if(oo(a,i)&&e.ref===t.ref)if(vt=!1,t.pendingProps=i=a,(e.lanes&o)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Pr(e,t,o)}return Kc(e,t,r,i,o)}function Km(e,t,r){var i=t.pendingProps,o=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Qn,kt),kt|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(Qn,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,be(Qn,kt),kt|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,be(Qn,kt),kt|=i;return pt(e,t,o,r),t.child}function Qm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Kc(e,t,r,i,o){var a=jt(r)?vn:ut.current;return a=ii(t,a),ei(t,o),r=Zd(e,t,r,i,a,o),i=Xd(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pr(e,t,o)):(Pe&&i&&Od(t),t.flags|=1,pt(e,t,r,o),t.child)}function Dp(e,t,r,i,o){if(jt(r)){var a=!0;Na(t)}else a=!1;if(ei(t,o),t.stateNode===null)fa(e,t),Um(t,r,i),Wc(t,r,i,o),i=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var d=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=jt(r)?vn:ut.current,u=ii(t,u));var g=r.getDerivedStateFromProps,h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||d!==u)&&Lp(t,s,i,u),_r=!1;var x=t.memoizedState;s.state=x,Da(t,i,s,o),d=t.memoizedState,c!==i||x!==d||wt.current||_r?(typeof g=="function"&&(Vc(t,r,g,i),d=t.memoizedState),(c=_r||Rp(t,r,c,i,x,d,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=u,i=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,bm(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Jt(t.type,c),s.props=u,h=t.pendingProps,x=s.context,d=r.contextType,typeof d=="object"&&d!==null?d=Vt(d):(d=jt(r)?vn:ut.current,d=ii(t,d));var S=r.getDerivedStateFromProps;(g=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==h||x!==d)&&Lp(t,s,i,d),_r=!1,x=t.memoizedState,s.state=x,Da(t,i,s,o);var j=t.memoizedState;c!==h||x!==j||wt.current||_r?(typeof S=="function"&&(Vc(t,r,S,i),j=t.memoizedState),(u=_r||Rp(t,r,u,i,x,j,d)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,j,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,j,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),s.props=i,s.state=j,s.context=d,i=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),i=!1)}return Qc(e,t,r,i,a,o)}function Qc(e,t,r,i,o,a){Qm(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&Sp(t,r,!1),Pr(e,t,a);i=t.stateNode,Sx.current=t;var c=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=ai(t,e.child,null,a),t.child=ai(t,null,c,a)):pt(e,t,c,a),t.memoizedState=i.state,o&&Sp(t,r,!0),t.child}function Ym(e){var t=e.stateNode;t.pendingContext?kp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kp(e,t.context,!1),Kd(e,t.containerInfo)}function Bp(e,t,r,i,o){return oi(),Bd(o),t.flags|=256,pt(e,t,r,i),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function qc(e){return{baseLanes:e,cachePool:null,transitions:null}}function qm(e,t,r){var i=t.pendingProps,o=Re.current,a=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),be(Re,o&1),e===null)return Hc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Ps(s,i,0,null),e=yn(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=qc(r),t.memoizedState=Yc,e):tu(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return Cx(e,t,s,i,c,o,r);if(a){a=i.fallback,s=t.mode,o=e.child,c=o.sibling;var d={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=qr(o,d),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=qr(c,a):(a=yn(a,s,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=e.child.memoizedState,s=s===null?qc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=Yc,i}return a=e.child,e=a.sibling,i=qr(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function tu(e,t){return t=Ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qo(e,t,r,i){return i!==null&&Bd(i),ai(t,e.child,null,r),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cx(e,t,r,i,o,a,s){if(r)return t.flags&256?(t.flags&=-257,i=_l(Error(E(422))),qo(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,o=t.mode,i=Ps({mode:"visible",children:i.children},o,0,null),a=yn(a,o,s,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&ai(t,e.child,null,s),t.child.memoizedState=qc(s),t.memoizedState=Yc,a);if(!(t.mode&1))return qo(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,a=Error(E(419)),i=_l(a,i,void 0),qo(e,t,s,i)}if(c=(s&e.childLanes)!==0,vt||c){if(i=Ze,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,zr(e,o),or(i,e,o,-1))}return su(),i=_l(Error(E(421))),qo(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ox.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,St=Gr(o.nextSibling),Ct=t,Pe=!0,tr=null,e!==null&&(Nt[At++]=jr,Nt[At++]=br,Nt[At++]=wn,jr=e.id,br=e.overflow,wn=t),t=tu(t,i.children),t.flags|=4096,t)}function Hp(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Uc(e.return,t,r)}function Il(e,t,r,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=o)}function Zm(e,t,r){var i=t.pendingProps,o=i.revealOrder,a=i.tail;if(pt(e,t,i.children,r),i=Re.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hp(e,r,t);else if(e.tag===19)Hp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(be(Re,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Ba(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Il(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ba(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Il(t,!0,r,null,a);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=qr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=qr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function zx(e,t,r){switch(t.tag){case 3:Ym(t),oi();break;case 5:$m(t);break;case 1:jt(t.type)&&Na(t);break;case 4:Kd(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;be(Ia,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(be(Re,Re.current&1),t.flags|=128,null):r&t.child.childLanes?qm(e,t,r):(be(Re,Re.current&1),e=Pr(e,t,r),e!==null?e.sibling:null);be(Re,Re.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Zm(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),be(Re,Re.current),i)break;return null;case 22:case 23:return t.lanes=0,Km(e,t,r)}return Pr(e,t,r)}var Xm,Zc,Jm,eg;Xm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Zc=function(){};Jm=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,mn(mr.current);var a=null;switch(r){case"input":o=vc(e,o),i=vc(e,i),a=[];break;case"select":o=Ae({},o,{value:void 0}),i=Ae({},i,{value:void 0}),a=[];break;case"textarea":o=bc(e,o),i=bc(e,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ra)}kc(r,i);var s;r=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(s in c)c.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var d=i[u];if(c=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(r||(r={}),r[s]=d[s])}else r||(a||(a=[]),a.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(a=a||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&ke("scroll",e),a||c===d||(a=[])):(a=a||[]).push(u,d))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};eg=function(e,t,r,i){r!==i&&(t.flags|=4)};function Ei(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Px(e,t,r){var i=t.pendingProps;switch(Dd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return jt(t.type)&&La(),lt(t),null;case 3:return i=t.stateNode,si(),Se(wt),Se(ut),Yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tr!==null&&(od(tr),tr=null))),Zc(e,t),lt(t),null;case 5:Qd(t);var o=mn(uo.current);if(r=t.type,e!==null&&t.stateNode!=null)Jm(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return lt(t),null}if(e=mn(mr.current),Qo(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[hr]=t,i[lo]=a,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",i),ke("close",i);break;case"iframe":case"object":case"embed":ke("load",i);break;case"video":case"audio":for(o=0;o<Ai.length;o++)ke(Ai[o],i);break;case"source":ke("error",i);break;case"img":case"image":case"link":ke("error",i),ke("load",i);break;case"details":ke("toggle",i);break;case"input":Zu(i,a),ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ke("invalid",i);break;case"textarea":Ju(i,a),ke("invalid",i)}kc(r,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="children"?typeof c=="string"?i.textContent!==c&&(a.suppressHydrationWarning!==!0&&Ko(i.textContent,c,e),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&Ko(i.textContent,c,e),o=["children",""+c]):Xi.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ke("scroll",i)}switch(r){case"input":Oo(i),Xu(i,a,!0);break;case"textarea":Oo(i),ep(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ra)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[hr]=t,e[lo]=i,Xm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Sc(r,i),r){case"dialog":ke("cancel",e),ke("close",e),o=i;break;case"iframe":case"object":case"embed":ke("load",e),o=i;break;case"video":case"audio":for(o=0;o<Ai.length;o++)ke(Ai[o],e);o=i;break;case"source":ke("error",e),o=i;break;case"img":case"image":case"link":ke("error",e),ke("load",e),o=i;break;case"details":ke("toggle",e),o=i;break;case"input":Zu(e,i),o=vc(e,i),ke("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=Ae({},i,{value:void 0}),ke("invalid",e);break;case"textarea":Ju(e,i),o=bc(e,i),ke("invalid",e);break;default:o=i}kc(r,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var d=c[a];a==="style"?Ff(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ef(e,d)):a==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Ji(e,d):typeof d=="number"&&Ji(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xi.hasOwnProperty(a)?d!=null&&a==="onScroll"&&ke("scroll",e):d!=null&&Sd(e,a,d,s))}switch(r){case"input":Oo(e),Xu(e,i,!1);break;case"textarea":Oo(e),ep(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Jr(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?qn(e,!!i.multiple,a,!1):i.defaultValue!=null&&qn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ra)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)eg(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(r=mn(uo.current),mn(mr.current),Qo(t)){if(i=t.stateNode,r=t.memoizedProps,i[hr]=t,(a=i.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:Ko(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[hr]=t,t.stateNode=i}return lt(t),null;case 13:if(Se(Re),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&St!==null&&t.mode&1&&!(t.flags&128))xm(),oi(),t.flags|=98560,a=!1;else if(a=Qo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[hr]=t}else oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),a=!1}else tr!==null&&(od(tr),tr=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ye===0&&(Ye=3):su())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return si(),Zc(e,t),e===null&&ao(t.stateNode.containerInfo),lt(t),null;case 10:return Vd(t.type._context),lt(t),null;case 17:return jt(t.type)&&La(),lt(t),null;case 19:if(Se(Re),a=t.memoizedState,a===null)return lt(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)Ei(a,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ba(e),s!==null){for(t.flags|=128,Ei(a,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Re,Re.current&1|2),t.child}e=e.sibling}a.tail!==null&&He()>ci&&(t.flags|=128,i=!0,Ei(a,!1),t.lanes=4194304)}else{if(!i)if(e=Ba(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ei(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Pe)return lt(t),null}else 2*He()-a.renderingStartTime>ci&&r!==1073741824&&(t.flags|=128,i=!0,Ei(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=He(),t.sibling=null,r=Re.current,be(Re,i?r&1|2:r&1),t):(lt(t),null);case 22:case 23:return au(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?kt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Ex(e,t){switch(Dd(t),t.tag){case 1:return jt(t.type)&&La(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return si(),Se(wt),Se(ut),Yd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qd(t),null;case 13:if(Se(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Re),null;case 4:return si(),null;case 10:return Vd(t.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Zo=!1,ct=!1,Mx=typeof WeakSet=="function"?WeakSet:Set,I=null;function Kn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Ie(e,t,i)}else r.current=null}function Xc(e,t,r){try{r()}catch(i){Ie(e,t,i)}}var Up=!1;function Fx(e,t){if(Nc=Ma,e=om(),Id(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,c=-1,d=-1,u=0,g=0,h=e,x=null;t:for(;;){for(var S;h!==r||o!==0&&h.nodeType!==3||(c=s+o),h!==a||i!==0&&h.nodeType!==3||(d=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(S=h.firstChild)!==null;)x=h,h=S;for(;;){if(h===e)break t;if(x===r&&++u===o&&(c=s),x===a&&++g===i&&(d=s),(S=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=S}r=c===-1||d===-1?null:{start:c,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ac={focusedElem:e,selectionRange:r},Ma=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var C=j.memoizedProps,w=j.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:Jt(t.type,C),w);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(b){Ie(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return j=Up,Up=!1,j}function Vi(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Xc(t,r,a)}o=o.next}while(o!==i)}}function Cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Jc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function tg(e){var t=e.alternate;t!==null&&(e.alternate=null,tg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[hr],delete t[lo],delete t[Oc],delete t[hx],delete t[fx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rg(e){return e.tag===5||e.tag===3||e.tag===4}function Vp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ed(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ra));else if(i!==4&&(e=e.child,e!==null))for(ed(e,t,r),e=e.sibling;e!==null;)ed(e,t,r),e=e.sibling}function td(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(td(e,t,r),e=e.sibling;e!==null;)td(e,t,r),e=e.sibling}var tt=null,er=!1;function Rr(e,t,r){for(r=r.child;r!==null;)ng(e,t,r),r=r.sibling}function ng(e,t,r){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(xs,r)}catch{}switch(r.tag){case 5:ct||Kn(r,t);case 6:var i=tt,o=er;tt=null,Rr(e,t,r),tt=i,er=o,tt!==null&&(er?(e=tt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):tt.removeChild(r.stateNode));break;case 18:tt!==null&&(er?(e=tt,r=r.stateNode,e.nodeType===8?Fl(e.parentNode,r):e.nodeType===1&&Fl(e,r),no(e)):Fl(tt,r.stateNode));break;case 4:i=tt,o=er,tt=r.stateNode.containerInfo,er=!0,Rr(e,t,r),tt=i,er=o;break;case 0:case 11:case 14:case 15:if(!ct&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Xc(r,t,s),o=o.next}while(o!==i)}Rr(e,t,r);break;case 1:if(!ct&&(Kn(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){Ie(r,t,c)}Rr(e,t,r);break;case 21:Rr(e,t,r);break;case 22:r.mode&1?(ct=(i=ct)||r.memoizedState!==null,Rr(e,t,r),ct=i):Rr(e,t,r);break;default:Rr(e,t,r)}}function Wp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Mx),t.forEach(function(i){var o=Dx.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Xt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var a=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:tt=c.stateNode,er=!1;break e;case 3:tt=c.stateNode.containerInfo,er=!0;break e;case 4:tt=c.stateNode.containerInfo,er=!0;break e}c=c.return}if(tt===null)throw Error(E(160));ng(a,s,o),tt=null,er=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(u){Ie(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ig(t,e),t=t.sibling}function ig(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),ur(e),i&4){try{Vi(3,e,e.return),Cs(3,e)}catch(C){Ie(e,e.return,C)}try{Vi(5,e,e.return)}catch(C){Ie(e,e.return,C)}}break;case 1:Xt(t,e),ur(e),i&512&&r!==null&&Kn(r,r.return);break;case 5:if(Xt(t,e),ur(e),i&512&&r!==null&&Kn(r,r.return),e.flags&32){var o=e.stateNode;try{Ji(o,"")}catch(C){Ie(e,e.return,C)}}if(i&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Cf(o,a),Sc(c,s);var u=Sc(c,a);for(s=0;s<d.length;s+=2){var g=d[s],h=d[s+1];g==="style"?Ff(o,h):g==="dangerouslySetInnerHTML"?Ef(o,h):g==="children"?Ji(o,h):Sd(o,g,h,u)}switch(c){case"input":wc(o,a);break;case"textarea":zf(o,a);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?qn(o,!!a.multiple,S,!1):x!==!!a.multiple&&(a.defaultValue!=null?qn(o,!!a.multiple,a.defaultValue,!0):qn(o,!!a.multiple,a.multiple?[]:"",!1))}o[lo]=a}catch(C){Ie(e,e.return,C)}}break;case 6:if(Xt(t,e),ur(e),i&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(C){Ie(e,e.return,C)}}break;case 3:if(Xt(t,e),ur(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{no(t.containerInfo)}catch(C){Ie(e,e.return,C)}break;case 4:Xt(t,e),ur(e);break;case 13:Xt(t,e),ur(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(iu=He())),i&4&&Wp(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(ct=(u=ct)||g,Xt(t,e),ct=u):Xt(t,e),ur(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(I=e,g=e.child;g!==null;){for(h=I=g;I!==null;){switch(x=I,S=x.child,x.tag){case 0:case 11:case 14:case 15:Vi(4,x,x.return);break;case 1:Kn(x,x.return);var j=x.stateNode;if(typeof j.componentWillUnmount=="function"){i=x,r=x.return;try{t=i,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(C){Ie(i,r,C)}}break;case 5:Kn(x,x.return);break;case 22:if(x.memoizedState!==null){Kp(h);continue}}S!==null?(S.return=x,I=S):Kp(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{o=h.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=h.stateNode,d=h.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Mf("display",s))}catch(C){Ie(e,e.return,C)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(C){Ie(e,e.return,C)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xt(t,e),ur(e),i&4&&Wp(e);break;case 21:break;default:Xt(t,e),ur(e)}}function ur(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(rg(r)){var i=r;break e}r=r.return}throw Error(E(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Ji(o,""),i.flags&=-33);var a=Vp(e);td(e,a,o);break;case 3:case 4:var s=i.stateNode.containerInfo,c=Vp(e);ed(e,c,s);break;default:throw Error(E(161))}}catch(d){Ie(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tx(e,t,r){I=e,og(e)}function og(e,t,r){for(var i=(e.mode&1)!==0;I!==null;){var o=I,a=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||Zo;if(!s){var c=o.alternate,d=c!==null&&c.memoizedState!==null||ct;c=Zo;var u=ct;if(Zo=s,(ct=d)&&!u)for(I=o;I!==null;)s=I,d=s.child,s.tag===22&&s.memoizedState!==null?Qp(o):d!==null?(d.return=s,I=d):Qp(o);for(;a!==null;)I=a,og(a),a=a.sibling;I=o,Zo=c,ct=u}Gp(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,I=a):Gp(e)}}function Gp(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||Cs(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ct)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Jt(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mp(t,a,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Mp(t,s,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&no(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ct||t.flags&512&&Jc(t)}catch(x){Ie(t,t.return,x)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function Kp(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function Qp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Cs(4,t)}catch(d){Ie(t,r,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(d){Ie(t,o,d)}}var a=t.return;try{Jc(t)}catch(d){Ie(t,a,d)}break;case 5:var s=t.return;try{Jc(t)}catch(d){Ie(t,s,d)}}}catch(d){Ie(t,t.return,d)}if(t===e){I=null;break}var c=t.sibling;if(c!==null){c.return=t.return,I=c;break}I=t.return}}var Rx=Math.ceil,Va=Er.ReactCurrentDispatcher,ru=Er.ReactCurrentOwner,Ht=Er.ReactCurrentBatchConfig,de=0,Ze=null,Ge=null,rt=0,kt=0,Qn=nn(0),Ye=0,mo=null,bn=0,zs=0,nu=0,Wi=null,xt=null,iu=0,ci=1/0,vr=null,Wa=!1,rd=null,Qr=null,Xo=!1,Br=null,Ga=0,Gi=0,nd=null,ma=-1,ga=0;function ht(){return de&6?He():ma!==-1?ma:ma=He()}function Yr(e){return e.mode&1?de&2&&rt!==0?rt&-rt:gx.transition!==null?(ga===0&&(ga=Uf()),ga):(e=ge,e!==0||(e=window.event,e=e===void 0?16:qf(e.type)),e):1}function or(e,t,r,i){if(50<Gi)throw Gi=0,nd=null,Error(E(185));ko(e,r,i),(!(de&2)||e!==Ze)&&(e===Ze&&(!(de&2)&&(zs|=r),Ye===4&&Or(e,rt)),bt(e,i),r===1&&de===0&&!(t.mode&1)&&(ci=He()+500,$s&&on()))}function bt(e,t){var r=e.callbackNode;gy(e,t);var i=Ea(e,e===Ze?rt:0);if(i===0)r!==null&&np(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&np(r),t===1)e.tag===0?mx(Yp.bind(null,e)):mm(Yp.bind(null,e)),ux(function(){!(de&6)&&on()}),r=null;else{switch(Vf(i)){case 1:r=Md;break;case 4:r=Bf;break;case 16:r=Pa;break;case 536870912:r=Hf;break;default:r=Pa}r=hg(r,ag.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ag(e,t){if(ma=-1,ga=0,de&6)throw Error(E(327));var r=e.callbackNode;if(ti()&&e.callbackNode!==r)return null;var i=Ea(e,e===Ze?rt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Ka(e,i);else{t=i;var o=de;de|=2;var a=lg();(Ze!==e||rt!==t)&&(vr=null,ci=He()+500,gn(e,t));do try{Ax();break}catch(c){sg(e,c)}while(!0);Ud(),Va.current=a,de=o,Ge!==null?t=0:(Ze=null,rt=0,t=Ye)}if(t!==0){if(t===2&&(o=Mc(e),o!==0&&(i=o,t=id(e,o))),t===1)throw r=mo,gn(e,0),Or(e,i),bt(e,He()),r;if(t===6)Or(e,i);else{if(o=e.current.alternate,!(i&30)&&!Lx(o)&&(t=Ka(e,i),t===2&&(a=Mc(e),a!==0&&(i=a,t=id(e,a))),t===1))throw r=mo,gn(e,0),Or(e,i),bt(e,He()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:cn(e,xt,vr);break;case 3:if(Or(e,i),(i&130023424)===i&&(t=iu+500-He(),10<t)){if(Ea(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){ht(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ic(cn.bind(null,e,xt,vr),t);break}cn(e,xt,vr);break;case 4:if(Or(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-ir(i);a=1<<s,s=t[s],s>o&&(o=s),i&=~a}if(i=o,i=He()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rx(i/1960))-i,10<i){e.timeoutHandle=Ic(cn.bind(null,e,xt,vr),i);break}cn(e,xt,vr);break;case 5:cn(e,xt,vr);break;default:throw Error(E(329))}}}return bt(e,He()),e.callbackNode===r?ag.bind(null,e):null}function id(e,t){var r=Wi;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=xt,xt=r,t!==null&&od(t)),e}function od(e){xt===null?xt=e:xt.push.apply(xt,e)}function Lx(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],a=o.getSnapshot;o=o.value;try{if(!ar(a(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Or(e,t){for(t&=~nu,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ir(t),i=1<<r;e[r]=-1,t&=~i}}function Yp(e){if(de&6)throw Error(E(327));ti();var t=Ea(e,0);if(!(t&1))return bt(e,He()),null;var r=Ka(e,t);if(e.tag!==0&&r===2){var i=Mc(e);i!==0&&(t=i,r=id(e,i))}if(r===1)throw r=mo,gn(e,0),Or(e,t),bt(e,He()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,xt,vr),bt(e,He()),null}function ou(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(ci=He()+500,$s&&on())}}function $n(e){Br!==null&&Br.tag===0&&!(de&6)&&ti();var t=de;de|=1;var r=Ht.transition,i=ge;try{if(Ht.transition=null,ge=1,e)return e()}finally{ge=i,Ht.transition=r,de=t,!(de&6)&&on()}}function au(){kt=Qn.current,Se(Qn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,dx(r)),Ge!==null)for(r=Ge.return;r!==null;){var i=r;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&La();break;case 3:si(),Se(wt),Se(ut),Yd();break;case 5:Qd(i);break;case 4:si();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:Vd(i.type._context);break;case 22:case 23:au()}r=r.return}if(Ze=e,Ge=e=qr(e.current,null),rt=kt=t,Ye=0,mo=null,nu=zs=bn=0,xt=Wi=null,fn!==null){for(t=0;t<fn.length;t++)if(r=fn[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,a=r.pending;if(a!==null){var s=a.next;a.next=o,i.next=s}r.pending=i}fn=null}return e}function sg(e,t){do{var r=Ge;try{if(Ud(),pa.current=Ua,Ha){for(var i=Le.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ha=!1}if(jn=0,qe=Ke=Le=null,Ui=!1,po=0,ru.current=null,r===null||r.return===null){Ye=1,mo=t,Ge=null;break}e:{var a=e,s=r.return,c=r,d=t;if(t=rt,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,g=c,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Ap(s);if(S!==null){S.flags&=-257,_p(S,s,c,a,t),S.mode&1&&Np(a,u,t),t=S,d=u;var j=t.updateQueue;if(j===null){var C=new Set;C.add(d),t.updateQueue=C}else j.add(d);break e}else{if(!(t&1)){Np(a,u,t),su();break e}d=Error(E(426))}}else if(Pe&&c.mode&1){var w=Ap(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),_p(w,s,c,a,t),Bd(li(d,c));break e}}a=d=li(d,c),Ye!==4&&(Ye=2),Wi===null?Wi=[a]:Wi.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Vm(a,d,t);Ep(a,f);break e;case 1:c=d;var p=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Qr===null||!Qr.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Wm(a,c,t);Ep(a,b);break e}}a=a.return}while(a!==null)}dg(r)}catch(z){t=z,Ge===r&&r!==null&&(Ge=r=r.return);continue}break}while(!0)}function lg(){var e=Va.current;return Va.current=Ua,e===null?Ua:e}function su(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Ze===null||!(bn&268435455)&&!(zs&268435455)||Or(Ze,rt)}function Ka(e,t){var r=de;de|=2;var i=lg();(Ze!==e||rt!==t)&&(vr=null,gn(e,t));do try{Nx();break}catch(o){sg(e,o)}while(!0);if(Ud(),de=r,Va.current=i,Ge!==null)throw Error(E(261));return Ze=null,rt=0,Ye}function Nx(){for(;Ge!==null;)cg(Ge)}function Ax(){for(;Ge!==null&&!sy();)cg(Ge)}function cg(e){var t=pg(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?dg(e):Ge=t,ru.current=null}function dg(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ex(r,t),r!==null){r.flags&=32767,Ge=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ge=null;return}}else if(r=Px(r,t,kt),r!==null){Ge=r;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function cn(e,t,r){var i=ge,o=Ht.transition;try{Ht.transition=null,ge=1,_x(e,t,r,i)}finally{Ht.transition=o,ge=i}return null}function _x(e,t,r,i){do ti();while(Br!==null);if(de&6)throw Error(E(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(yy(e,a),e===Ze&&(Ge=Ze=null,rt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xo||(Xo=!0,hg(Pa,function(){return ti(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Ht.transition,Ht.transition=null;var s=ge;ge=1;var c=de;de|=4,ru.current=null,Fx(e,r),ig(r,e),nx(Ac),Ma=!!Nc,Ac=Nc=null,e.current=r,Tx(r),ly(),de=c,ge=s,Ht.transition=a}else e.current=r;if(Xo&&(Xo=!1,Br=e,Ga=o),a=e.pendingLanes,a===0&&(Qr=null),uy(r.stateNode),bt(e,He()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(Wa)throw Wa=!1,e=rd,rd=null,e;return Ga&1&&e.tag!==0&&ti(),a=e.pendingLanes,a&1?e===nd?Gi++:(Gi=0,nd=e):Gi=0,on(),null}function ti(){if(Br!==null){var e=Vf(Ga),t=Ht.transition,r=ge;try{if(Ht.transition=null,ge=16>e?16:e,Br===null)var i=!1;else{if(e=Br,Br=null,Ga=0,de&6)throw Error(E(331));var o=de;for(de|=4,I=e.current;I!==null;){var a=I,s=a.child;if(I.flags&16){var c=a.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(I=u;I!==null;){var g=I;switch(g.tag){case 0:case 11:case 15:Vi(8,g,a)}var h=g.child;if(h!==null)h.return=g,I=h;else for(;I!==null;){g=I;var x=g.sibling,S=g.return;if(tg(g),g===u){I=null;break}if(x!==null){x.return=S,I=x;break}I=S}}}var j=a.alternate;if(j!==null){var C=j.child;if(C!==null){j.child=null;do{var w=C.sibling;C.sibling=null,C=w}while(C!==null)}}I=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,I=s;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Vi(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,I=f;break e}I=a.return}}var p=e.current;for(I=p;I!==null;){s=I;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,I=y;else e:for(s=p;I!==null;){if(c=I,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Cs(9,c)}}catch(z){Ie(c,c.return,z)}if(c===s){I=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,I=b;break e}I=c.return}}if(de=o,on(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(xs,e)}catch{}i=!0}return i}finally{ge=r,Ht.transition=t}}return!1}function qp(e,t,r){t=li(r,t),t=Vm(e,t,1),e=Kr(e,t,1),t=ht(),e!==null&&(ko(e,1,t),bt(e,t))}function Ie(e,t,r){if(e.tag===3)qp(e,e,r);else for(;t!==null;){if(t.tag===3){qp(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qr===null||!Qr.has(i))){e=li(r,e),e=Wm(t,e,1),t=Kr(t,e,1),e=ht(),t!==null&&(ko(t,1,e),bt(t,e));break}}t=t.return}}function Ix(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,Ze===e&&(rt&r)===r&&(Ye===4||Ye===3&&(rt&130023424)===rt&&500>He()-iu?gn(e,0):nu|=r),bt(e,t)}function ug(e,t){t===0&&(e.mode&1?(t=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):t=1);var r=ht();e=zr(e,t),e!==null&&(ko(e,t,r),bt(e,r))}function Ox(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ug(e,r)}function Dx(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),ug(e,r)}var pg;pg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)vt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return vt=!1,zx(e,t,r);vt=!!(e.flags&131072)}else vt=!1,Pe&&t.flags&1048576&&gm(t,_a,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;fa(e,t),e=t.pendingProps;var o=ii(t,ut.current);ei(t,r),o=Zd(null,t,i,e,o,r);var a=Xd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(i)?(a=!0,Na(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gd(t),o.updater=Ss,t.stateNode=o,o._reactInternals=t,Wc(t,i,e,r),t=Qc(null,t,i,!0,a,r)):(t.tag=0,Pe&&a&&Od(t),pt(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(fa(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Hx(i),e=Jt(i,e),o){case 0:t=Kc(null,t,i,e,r);break e;case 1:t=Dp(null,t,i,e,r);break e;case 11:t=Ip(null,t,i,e,r);break e;case 14:t=Op(null,t,i,Jt(i.type,e),r);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Jt(i,o),Kc(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Jt(i,o),Dp(e,t,i,o,r);case 3:e:{if(Ym(t),e===null)throw Error(E(387));i=t.pendingProps,a=t.memoizedState,o=a.element,bm(e,t),Da(t,i,null,r);var s=t.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=li(Error(E(423)),t),t=Bp(e,t,i,r,o);break e}else if(i!==o){o=li(Error(E(424)),t),t=Bp(e,t,i,r,o);break e}else for(St=Gr(t.stateNode.containerInfo.firstChild),Ct=t,Pe=!0,tr=null,r=wm(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(oi(),i===o){t=Pr(e,t,r);break e}pt(e,t,i,r)}t=t.child}return t;case 5:return $m(t),e===null&&Hc(t),i=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,_c(i,o)?s=null:a!==null&&_c(i,a)&&(t.flags|=32),Qm(e,t),pt(e,t,s,r),t.child;case 6:return e===null&&Hc(t),null;case 13:return qm(e,t,r);case 4:return Kd(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ai(t,null,i,r):pt(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Jt(i,o),Ip(e,t,i,o,r);case 7:return pt(e,t,t.pendingProps,r),t.child;case 8:return pt(e,t,t.pendingProps.children,r),t.child;case 12:return pt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,be(Ia,i._currentValue),i._currentValue=s,a!==null)if(ar(a.value,s)){if(a.children===o.children&&!wt.current){t=Pr(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){s=a.child;for(var d=c.firstContext;d!==null;){if(d.context===i){if(a.tag===1){d=kr(-1,r&-r),d.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?d.next=d:(d.next=g.next,g.next=d),u.pending=d}}a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),Uc(a.return,r,t),c.lanes|=r;break}d=d.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(E(341));s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Uc(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}pt(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,ei(t,r),o=Vt(o),i=i(o),t.flags|=1,pt(e,t,i,r),t.child;case 14:return i=t.type,o=Jt(i,t.pendingProps),o=Jt(i.type,o),Op(e,t,i,o,r);case 15:return Gm(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Jt(i,o),fa(e,t),t.tag=1,jt(i)?(e=!0,Na(t)):e=!1,ei(t,r),Um(t,i,o),Wc(t,i,o,r),Qc(null,t,i,!0,e,r);case 19:return Zm(e,t,r);case 22:return Km(e,t,r)}throw Error(E(156,t.tag))};function hg(e,t){return Df(e,t)}function Bx(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,r,i){return new Bx(e,t,r,i)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hx(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zd)return 11;if(e===Pd)return 14}return 2}function qr(e,t){var r=e.alternate;return r===null?(r=Bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ya(e,t,r,i,o,a){var s=2;if(i=e,typeof e=="function")lu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case In:return yn(r.children,o,a,t);case Cd:s=8,o|=8;break;case mc:return e=Bt(12,r,t,o|2),e.elementType=mc,e.lanes=a,e;case gc:return e=Bt(13,r,t,o),e.elementType=gc,e.lanes=a,e;case yc:return e=Bt(19,r,t,o),e.elementType=yc,e.lanes=a,e;case $f:return Ps(r,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jf:s=10;break e;case bf:s=9;break e;case zd:s=11;break e;case Pd:s=14;break e;case Ar:s=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Bt(s,r,t,o),t.elementType=e,t.type=i,t.lanes=a,t}function yn(e,t,r,i){return e=Bt(7,e,i,t),e.lanes=r,e}function Ps(e,t,r,i){return e=Bt(22,e,i,t),e.elementType=$f,e.lanes=r,e.stateNode={isHidden:!1},e}function Ol(e,t,r){return e=Bt(6,e,null,t),e.lanes=r,e}function Dl(e,t,r){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ux(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cu(e,t,r,i,o,a,s,c,d){return e=new Ux(e,t,r,c,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Bt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(a),e}function Vx(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function fg(e){if(!e)return en;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(jt(r))return fm(e,r,t)}return t}function mg(e,t,r,i,o,a,s,c,d){return e=cu(r,i,!0,e,o,a,s,c,d),e.context=fg(null),r=e.current,i=ht(),o=Yr(r),a=kr(i,o),a.callback=t??null,Kr(r,a,o),e.current.lanes=o,ko(e,o,i),bt(e,i),e}function Es(e,t,r,i){var o=t.current,a=ht(),s=Yr(o);return r=fg(r),t.context===null?t.context=r:t.pendingContext=r,t=kr(a,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Kr(o,t,s),e!==null&&(or(e,o,s,a),ua(e,o,s)),s}function Qa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function du(e,t){Zp(e,t),(e=e.alternate)&&Zp(e,t)}function Wx(){return null}var gg=typeof reportError=="function"?reportError:function(e){console.error(e)};function uu(e){this._internalRoot=e}Ms.prototype.render=uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Es(e,t,null,null)};Ms.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){Es(null,e,null,null)}),t[Cr]=null}};function Ms(e){this._internalRoot=e}Ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ir.length&&t!==0&&t<Ir[r].priority;r++);Ir.splice(r,0,e),r===0&&Yf(e)}};function pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function Gx(e,t,r,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var u=Qa(s);a.call(u)}}var s=mg(t,i,e,0,null,!1,!1,"",Xp);return e._reactRootContainer=s,e[Cr]=s.current,ao(e.nodeType===8?e.parentNode:e),$n(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var u=Qa(d);c.call(u)}}var d=cu(e,0,!1,null,null,!1,!1,"",Xp);return e._reactRootContainer=d,e[Cr]=d.current,ao(e.nodeType===8?e.parentNode:e),$n(function(){Es(t,d,r,i)}),d}function Ts(e,t,r,i,o){var a=r._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var c=o;o=function(){var d=Qa(s);c.call(d)}}Es(t,s,e,o)}else s=Gx(r,t,e,o,i);return Qa(s)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ni(t.pendingLanes);r!==0&&(Fd(t,r|1),bt(t,He()),!(de&6)&&(ci=He()+500,on()))}break;case 13:$n(function(){var i=zr(e,1);if(i!==null){var o=ht();or(i,e,1,o)}}),du(e,1)}};Td=function(e){if(e.tag===13){var t=zr(e,134217728);if(t!==null){var r=ht();or(t,e,134217728,r)}du(e,134217728)}};Gf=function(e){if(e.tag===13){var t=Yr(e),r=zr(e,t);if(r!==null){var i=ht();or(r,e,t,i)}du(e,t)}};Kf=function(){return ge};Qf=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}};zc=function(e,t,r){switch(t){case"input":if(wc(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=bs(i);if(!o)throw Error(E(90));Sf(i),wc(i,o)}}}break;case"textarea":zf(e,r);break;case"select":t=r.value,t!=null&&qn(e,!!r.multiple,t,!1)}};Lf=ou;Nf=$n;var Kx={usingClientEntryPoint:!1,Events:[Co,Hn,bs,Tf,Rf,ou]},Mi={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{xs=Jo.inject(Qx),fr=Jo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;Et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(t))throw Error(E(200));return Vx(e,t,null,r)};Et.createRoot=function(e,t){if(!pu(e))throw Error(E(299));var r=!1,i="",o=gg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cu(e,1,!1,null,null,r,!1,i,o),e[Cr]=t.current,ao(e.nodeType===8?e.parentNode:e),new uu(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return $n(e)};Et.hydrate=function(e,t,r){if(!Fs(t))throw Error(E(200));return Ts(null,e,t,!0,r)};Et.hydrateRoot=function(e,t,r){if(!pu(e))throw Error(E(405));var i=r!=null&&r.hydratedSources||null,o=!1,a="",s=gg;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=mg(t,null,e,1,r??null,o,!1,a,s),e[Cr]=t.current,ao(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ms(t)};Et.render=function(e,t,r){if(!Fs(t))throw Error(E(200));return Ts(null,e,t,!1,r)};Et.unmountComponentAtNode=function(e){if(!Fs(e))throw Error(E(40));return e._reactRootContainer?($n(function(){Ts(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};Et.unstable_batchedUpdates=ou;Et.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Fs(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ts(e,t,r,!1,i)};Et.version="18.3.1-next-f1338f8080-20240426";function yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yg)}catch(e){console.error(e)}}yg(),yf.exports=Et;var Yx=yf.exports,Jp=Yx;hc.createRoot=Jp.createRoot,hc.hydrateRoot=Jp.hydrateRoot;const qx="modulepreload",Zx=function(e){return"/LaFranciaGO/"+e},eh={},Xx=function(t,r,i){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(d=>{if(d=Zx(d),d in eh)return;eh[d]=!0;const u=d.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":qx,u||(h.as="script"),h.crossOrigin="",h.href=d,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((x,S)=>{h.addEventListener("load",x),h.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return o.then(s=>{for(const c of s||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})};function Jx(e={}){const{immediate:t=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:o,onRegisteredSW:a,onRegisterError:s}=e;let c,d;const u=async(h=!0)=>{await d};async function g(){if("serviceWorker"in navigator){if(c=await Xx(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/LaFranciaGO/sw.js",{scope:"/LaFranciaGO/",type:"classic"})).catch(h=>{s==null||s(h)}),!c)return;c.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),c.addEventListener("installed",h=>{h.isUpdate||i==null||i()}),c.register({immediate:t}).then(h=>{a?a("/LaFranciaGO/sw.js",h):o==null||o(h)}).catch(h=>{s==null||s(h)})}}return d=g(),u}/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},go.apply(null,arguments)}var Hr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hr||(Hr={}));const th="popstate";function ev(e){e===void 0&&(e={});function t(o,a){let{pathname:s="/",search:c="",hash:d=""}=En(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),ad("",{pathname:s,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(o,a){let s=o.document.querySelector("base"),c="";if(s&&s.getAttribute("href")){let d=o.location.href,u=d.indexOf("#");c=u===-1?d:d.slice(0,u)}return c+"#"+(typeof a=="string"?a:Ya(a))}function i(o,a){Rs(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return rv(t,r,i,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tv(){return Math.random().toString(36).substr(2,8)}function rh(e,t){return{usr:e.state,key:e.key,idx:t}}function ad(e,t,r,i){return r===void 0&&(r=null),go({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?En(t):t,{state:r,key:t&&t.key||i||tv()})}function Ya(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function En(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function rv(e,t,r,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,s=o.history,c=Hr.Pop,d=null,u=g();u==null&&(u=0,s.replaceState(go({},s.state,{idx:u}),""));function g(){return(s.state||{idx:null}).idx}function h(){c=Hr.Pop;let w=g(),f=w==null?null:w-u;u=w,d&&d({action:c,location:C.location,delta:f})}function x(w,f){c=Hr.Push;let p=ad(C.location,w,f);r&&r(p,w),u=g()+1;let y=rh(p,u),b=C.createHref(p);try{s.pushState(y,"",b)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(b)}a&&d&&d({action:c,location:C.location,delta:1})}function S(w,f){c=Hr.Replace;let p=ad(C.location,w,f);r&&r(p,w),u=g();let y=rh(p,u),b=C.createHref(p);s.replaceState(y,"",b),a&&d&&d({action:c,location:C.location,delta:0})}function j(w){let f=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof w=="string"?w:Ya(w);return p=p.replace(/ $/,"%20"),Ne(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let C={get action(){return c},get location(){return e(o,s)},listen(w){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(th,h),d=w,()=>{o.removeEventListener(th,h),d=null}},createHref(w){return t(o,w)},createURL:j,encodeLocation(w){let f=j(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:S,go(w){return s.go(w)}};return C}var nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nh||(nh={}));function nv(e,t,r){return r===void 0&&(r="/"),iv(e,t,r)}function iv(e,t,r,i){let o=typeof t=="string"?En(t):t,a=di(o.pathname||"/",r);if(a==null)return null;let s=xg(e);ov(s);let c=null,d=gv(a);for(let u=0;c==null&&u<s.length;++u)c=fv(s[u],d);return c}function xg(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let o=(a,s,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};d.relativePath.startsWith("/")&&(Ne(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let u=Zr([i,d.relativePath]),g=r.concat(d);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xg(a.children,t,g,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:pv(u,a.index),routesMeta:g})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,s);else for(let d of vg(a.path))o(a,s,d)}),t}function vg(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let s=vg(i.join("/")),c=[];return c.push(...s.map(d=>d===""?a:[a,d].join("/"))),o&&c.push(...s),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function ov(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:hv(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const av=/^:[\w-]+$/,sv=3,lv=2,cv=1,dv=10,uv=-2,ih=e=>e==="*";function pv(e,t){let r=e.split("/"),i=r.length;return r.some(ih)&&(i+=uv),t&&(i+=lv),r.filter(o=>!ih(o)).reduce((o,a)=>o+(av.test(a)?sv:a===""?cv:dv),i)}function hv(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function fv(e,t,r){let{routesMeta:i}=e,o={},a="/",s=[];for(let c=0;c<i.length;++c){let d=i[c],u=c===i.length-1,g=a==="/"?t:t.slice(a.length)||"/",h=sd({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},g),x=d.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:Zr([a,h.pathname]),pathnameBase:jv(Zr([a,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(a=Zr([a,h.pathnameBase]))}return s}function sd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=mv(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:i.reduce((u,g,h)=>{let{paramName:x,isOptional:S}=g;if(x==="*"){let C=c[h]||"";s=a.slice(0,a.length-C.length).replace(/(.)\/+$/,"$1")}const j=c[h];return S&&!j?u[x]=void 0:u[x]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function mv(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Rs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,d)=>(i.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function gv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}const yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xv=e=>yv.test(e);function vv(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:o=""}=typeof e=="string"?En(e):e,a;if(r)if(xv(r))a=r;else{if(r.includes("//")){let s=r;r=wg(r),Rs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?a=oh(r.substring(1),"/"):a=oh(r,t)}else a=t;return{pathname:a,search:bv(i),hash:$v(o)}}function oh(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Bl(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wv(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function hu(e,t){let r=wv(e);return t?r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function fu(e,t,r,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=En(e):(o=go({},e),Ne(!o.pathname||!o.pathname.includes("?"),Bl("?","pathname","search",o)),Ne(!o.pathname||!o.pathname.includes("#"),Bl("#","pathname","hash",o)),Ne(!o.search||!o.search.includes("#"),Bl("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,c;if(s==null)c=r;else{let h=t.length-1;if(!i&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}c=h>=0?t[h]:"/"}let d=vv(o,c),u=s&&s!=="/"&&s.endsWith("/"),g=(a||s===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(u||g)&&(d.pathname+="/"),d}const wg=e=>e.replace(/\/\/+/g,"/"),Zr=e=>wg(e.join("/")),jv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jg=["post","put","patch","delete"];new Set(jg);const Sv=["get",...jg];new Set(Sv);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},yo.apply(null,arguments)}const Ls=v.createContext(null),bg=v.createContext(null),Mr=v.createContext(null),Ns=v.createContext(null),Fr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),$g=v.createContext(null);function Cv(e,t){let{relative:r}=t===void 0?{}:t;vi()||Ne(!1);let{basename:i,navigator:o}=v.useContext(Mr),{hash:a,pathname:s,search:c}=_s(e,{relative:r}),d=s;return i!=="/"&&(d=s==="/"?i:Zr([i,s])),o.createHref({pathname:d,search:c,hash:a})}function vi(){return v.useContext(Ns)!=null}function Mn(){return vi()||Ne(!1),v.useContext(Ns).location}function kg(e){v.useContext(Mr).static||v.useLayoutEffect(e)}function As(){let{isDataRoute:e}=v.useContext(Fr);return e?Ov():zv()}function zv(){vi()||Ne(!1);let e=v.useContext(Ls),{basename:t,future:r,navigator:i}=v.useContext(Mr),{matches:o}=v.useContext(Fr),{pathname:a}=Mn(),s=JSON.stringify(hu(o,r.v7_relativeSplatPath)),c=v.useRef(!1);return kg(()=>{c.current=!0}),v.useCallback(function(u,g){if(g===void 0&&(g={}),!c.current)return;if(typeof u=="number"){i.go(u);return}let h=fu(u,JSON.parse(s),a,g.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Zr([t,h.pathname])),(g.replace?i.replace:i.push)(h,g.state,g)},[t,i,s,a,e])}function Sg(){let{matches:e}=v.useContext(Fr),t=e[e.length-1];return t?t.params:{}}function _s(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=v.useContext(Mr),{matches:o}=v.useContext(Fr),{pathname:a}=Mn(),s=JSON.stringify(hu(o,i.v7_relativeSplatPath));return v.useMemo(()=>fu(e,JSON.parse(s),a,r==="path"),[e,s,a,r])}function Pv(e,t){return Ev(e,t)}function Ev(e,t,r,i){vi()||Ne(!1);let{navigator:o}=v.useContext(Mr),{matches:a}=v.useContext(Fr),s=a[a.length-1],c=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let u=Mn(),g;if(t){var h;let w=typeof t=="string"?En(t):t;d==="/"||(h=w.pathname)!=null&&h.startsWith(d)||Ne(!1),g=w}else g=u;let x=g.pathname||"/",S=x;if(d!=="/"){let w=d.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(w.length).join("/")}let j=nv(e,{pathname:S}),C=Lv(j&&j.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:Zr([d,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:Zr([d,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,r,i);return t&&C?v.createElement(Ns.Provider,{value:{location:yo({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Hr.Pop}},C):C}function Mv(){let e=Iv(),t=kv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,null)}const Fv=v.createElement(Mv,null);class Tv extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(Fr.Provider,{value:this.props.routeContext},v.createElement($g.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rv(e){let{routeContext:t,match:r,children:i}=e,o=v.useContext(Ls);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Fr.Provider,{value:t},i)}function Lv(e,t,r,i){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,c=(o=r)==null?void 0:o.errors;if(c!=null){let g=s.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);g>=0||Ne(!1),s=s.slice(0,Math.min(s.length,g+1))}let d=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let g=0;g<s.length;g++){let h=s[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=g),h.route.id){let{loaderData:x,errors:S}=r,j=h.route.loader&&x[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||j){d=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((g,h,x)=>{let S,j=!1,C=null,w=null;r&&(S=c&&h.route.id?c[h.route.id]:void 0,C=h.route.errorElement||Fv,d&&(u<0&&x===0?(Dv("route-fallback"),j=!0,w=null):u===x&&(j=!0,w=h.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,x+1)),p=()=>{let y;return S?y=C:j?y=w:h.route.Component?y=v.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=g,v.createElement(Rv,{match:h,routeContext:{outlet:g,matches:f,isDataRoute:r!=null},children:y})};return r&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?v.createElement(Tv,{location:r.location,revalidation:r.revalidation,component:C,error:S,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var Cg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cg||{}),zg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zg||{});function Nv(e){let t=v.useContext(Ls);return t||Ne(!1),t}function Av(e){let t=v.useContext(bg);return t||Ne(!1),t}function _v(e){let t=v.useContext(Fr);return t||Ne(!1),t}function Pg(e){let t=_v(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function Iv(){var e;let t=v.useContext($g),r=Av(),i=Pg();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function Ov(){let{router:e}=Nv(Cg.UseNavigateStable),t=Pg(zg.UseNavigateStable),r=v.useRef(!1);return kg(()=>{r.current=!0}),v.useCallback(function(o,a){a===void 0&&(a={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,yo({fromRouteId:t},a)))},[e,t])}const ah={};function Dv(e,t,r){ah[e]||(ah[e]=!0)}function Bv(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hl(e){let{to:t,replace:r,state:i,relative:o}=e;vi()||Ne(!1);let{future:a,static:s}=v.useContext(Mr),{matches:c}=v.useContext(Fr),{pathname:d}=Mn(),u=As(),g=fu(t,hu(c,a.v7_relativeSplatPath),d,o==="path"),h=JSON.stringify(g);return v.useEffect(()=>u(JSON.parse(h),{replace:r,state:i,relative:o}),[u,h,o,r,i]),null}function et(e){Ne(!1)}function Hv(e){let{basename:t="/",children:r=null,location:i,navigationType:o=Hr.Pop,navigator:a,static:s=!1,future:c}=e;vi()&&Ne(!1);let d=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:d,navigator:a,static:s,future:yo({v7_relativeSplatPath:!1},c)}),[d,c,a,s]);typeof i=="string"&&(i=En(i));let{pathname:g="/",search:h="",hash:x="",state:S=null,key:j="default"}=i,C=v.useMemo(()=>{let w=di(g,d);return w==null?null:{location:{pathname:w,search:h,hash:x,state:S,key:j},navigationType:o}},[d,g,h,x,S,j,o]);return C==null?null:v.createElement(Mr.Provider,{value:u},v.createElement(Ns.Provider,{children:r,value:C}))}function Uv(e){let{children:t,location:r}=e;return Pv(ld(t),r)}new Promise(()=>{});function ld(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(i,o)=>{if(!v.isValidElement(i))return;let a=[...t,o];if(i.type===v.Fragment){r.push.apply(r,ld(i.props.children,a));return}i.type!==et&&Ne(!1),!i.props.index||!i.props.children||Ne(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=ld(i.props.children,a)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},qa.apply(null,arguments)}function Eg(e,t){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function Vv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wv(e,t){return e.button===0&&(!t||t==="_self")&&!Vv(e)}const Gv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Kv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Qv="6";try{window.__reactRouterVersion=Qv}catch{}const Yv=v.createContext({isTransitioning:!1}),qv="startTransition",sh=I1[qv];function Zv(e){let{basename:t,children:r,future:i,window:o}=e,a=v.useRef();a.current==null&&(a.current=ev({window:o,v5Compat:!0}));let s=a.current,[c,d]=v.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},g=v.useCallback(h=>{u&&sh?sh(()=>d(h)):d(h)},[d,u]);return v.useLayoutEffect(()=>s.listen(g),[s,g]),v.useEffect(()=>Bv(i),[i]),v.createElement(Hv,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:i})}const Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yr=v.forwardRef(function(t,r){let{onClick:i,relative:o,reloadDocument:a,replace:s,state:c,target:d,to:u,preventScrollReset:g,viewTransition:h}=t,x=Eg(t,Gv),{basename:S}=v.useContext(Mr),j,C=!1;if(typeof u=="string"&&Jv.test(u)&&(j=u,Xv))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),z=di(b.pathname,S);b.origin===y.origin&&z!=null?u=z+b.search+b.hash:C=!0}catch{}let w=Cv(u,{relative:o}),f=t2(u,{replace:s,state:c,target:d,preventScrollReset:g,relative:o,viewTransition:h});function p(y){i&&i(y),y.defaultPrevented||f(y)}return v.createElement("a",qa({},x,{href:j||w,onClick:C||a?i:p,ref:r,target:d}))}),Po=v.forwardRef(function(t,r){let{"aria-current":i="page",caseSensitive:o=!1,className:a="",end:s=!1,style:c,to:d,viewTransition:u,children:g}=t,h=Eg(t,Kv),x=_s(d,{relative:h.relative}),S=Mn(),j=v.useContext(bg),{navigator:C,basename:w}=v.useContext(Mr),f=j!=null&&r2(x)&&u===!0,p=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,y=S.pathname,b=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;o||(y=y.toLowerCase(),b=b?b.toLowerCase():null,p=p.toLowerCase()),b&&w&&(b=di(b,w)||b);const z=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let R=y===p||!s&&y.startsWith(p)&&y.charAt(z)==="/",N=b!=null&&(b===p||!s&&b.startsWith(p)&&b.charAt(p.length)==="/"),_={isActive:R,isPending:N,isTransitioning:f},W=R?i:void 0,D;typeof a=="function"?D=a(_):D=[a,R?"active":null,N?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let me=typeof c=="function"?c(_):c;return v.createElement(yr,qa({},h,{"aria-current":W,className:D,ref:r,style:me,to:d,viewTransition:u}),typeof g=="function"?g(_):g)});var cd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cd||(cd={}));var lh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lh||(lh={}));function e2(e){let t=v.useContext(Ls);return t||Ne(!1),t}function t2(e,t){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:c}=t===void 0?{}:t,d=As(),u=Mn(),g=_s(e,{relative:s});return v.useCallback(h=>{if(Wv(h,r)){h.preventDefault();let x=i!==void 0?i:Ya(u)===Ya(g);d(e,{replace:x,state:o,preventScrollReset:a,relative:s,viewTransition:c})}},[u,d,g,i,o,r,e,a,s,c])}function r2(e,t){t===void 0&&(t={});let r=v.useContext(Yv);r==null&&Ne(!1);let{basename:i}=e2(cd.useViewTransitionState),o=_s(e,{relative:t.relative});if(!r.isTransitioning)return!1;let a=di(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=di(r.nextLocation.pathname,i)||r.nextLocation.pathname;return sd(o.pathname,s)!=null||sd(o.pathname,a)!=null}var Mg={exports:{}},je={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu=Symbol.for("react.transitional.element"),gu=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Os=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),Bs=Symbol.for("react.consumer"),Hs=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),Vs=Symbol.for("react.suspense"),Ws=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),Ks=Symbol.for("react.lazy"),n2=Symbol.for("react.view_transition"),i2=Symbol.for("react.client.reference");function Qt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mu:switch(e=e.type,e){case Is:case Ds:case Os:case Vs:case Ws:case n2:return e;default:switch(e=e&&e.$$typeof,e){case Hs:case Us:case Ks:case Gs:return e;case Bs:return e;default:return t}}case gu:return t}}}je.ContextConsumer=Bs;je.ContextProvider=Hs;je.Element=mu;je.ForwardRef=Us;je.Fragment=Is;je.Lazy=Ks;je.Memo=Gs;je.Portal=gu;je.Profiler=Ds;je.StrictMode=Os;je.Suspense=Vs;je.SuspenseList=Ws;je.isContextConsumer=function(e){return Qt(e)===Bs};je.isContextProvider=function(e){return Qt(e)===Hs};je.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mu};je.isForwardRef=function(e){return Qt(e)===Us};je.isFragment=function(e){return Qt(e)===Is};je.isLazy=function(e){return Qt(e)===Ks};je.isMemo=function(e){return Qt(e)===Gs};je.isPortal=function(e){return Qt(e)===gu};je.isProfiler=function(e){return Qt(e)===Ds};je.isStrictMode=function(e){return Qt(e)===Os};je.isSuspense=function(e){return Qt(e)===Vs};je.isSuspenseList=function(e){return Qt(e)===Ws};je.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Is||e===Ds||e===Os||e===Vs||e===Ws||typeof e=="object"&&e!==null&&(e.$$typeof===Ks||e.$$typeof===Gs||e.$$typeof===Hs||e.$$typeof===Bs||e.$$typeof===Us||e.$$typeof===i2||e.getModuleId!==void 0)};je.typeOf=Qt;Mg.exports=je;var Fg=Mg.exports;function o2(e){function t(P,k,T,O,$){for(var J=0,L=0,he=0,te=0,ne,K,Fe=0,Ue=0,re,Te=re=ne=0,ue=0,Ve=0,an=0,Be=0,sn=T.length,Tr=sn-1,yt,G="",ze="",Rn="",ve="",cr;ue<sn;){if(K=T.charCodeAt(ue),ue===Tr&&L+te+he+J!==0&&(L!==0&&(K=L===47?10:47),te=he=J=0,sn++,Tr++),L+te+he+J===0){if(ue===Tr&&(0<Ve&&(G=G.replace(x,"")),0<G.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:G+=T.charAt(ue)}K=59}switch(K){case 123:for(G=G.trim(),ne=G.charCodeAt(0),re=1,Be=++ue;ue<sn;){switch(K=T.charCodeAt(ue)){case 123:re++;break;case 125:re--;break;case 47:switch(K=T.charCodeAt(ue+1)){case 42:case 47:e:{for(Te=ue+1;Te<Tr;++Te)switch(T.charCodeAt(Te)){case 47:if(K===42&&T.charCodeAt(Te-1)===42&&ue+2!==Te){ue=Te+1;break e}break;case 10:if(K===47){ue=Te+1;break e}}ue=Te}}break;case 91:K++;case 40:K++;case 34:case 39:for(;ue++<Tr&&T.charCodeAt(ue)!==K;);}if(re===0)break;ue++}switch(re=T.substring(Be,ue),ne===0&&(ne=(G=G.replace(h,"").trim()).charCodeAt(0)),ne){case 64:switch(0<Ve&&(G=G.replace(x,"")),K=G.charCodeAt(1),K){case 100:case 109:case 115:case 45:Ve=k;break;default:Ve=xe}if(re=t(k,Ve,re,K,$+1),Be=re.length,0<A&&(Ve=r(xe,G,an),cr=c(3,re,Ve,k,Me,pe,Be,K,$,O),G=Ve.join(""),cr!==void 0&&(Be=(re=cr.trim()).length)===0&&(K=0,re="")),0<Be)switch(K){case 115:G=G.replace(R,s);case 100:case 109:case 45:re=G+"{"+re+"}";break;case 107:G=G.replace(p,"$1 $2"),re=G+"{"+re+"}",re=Oe===1||Oe===2&&a("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=G+re,O===112&&(re=(ze+=re,""))}else re="";break;default:re=t(k,r(k,G,an),re,O,$+1)}Rn+=re,re=an=Ve=Te=ne=0,G="",K=T.charCodeAt(++ue);break;case 125:case 59:if(G=(0<Ve?G.replace(x,""):G).trim(),1<(Be=G.length))switch(Te===0&&(ne=G.charCodeAt(0),ne===45||96<ne&&123>ne)&&(Be=(G=G.replace(" ",":")).length),0<A&&(cr=c(1,G,k,P,Me,pe,ze.length,O,$,O))!==void 0&&(Be=(G=cr.trim()).length)===0&&(G="\0\0"),ne=G.charCodeAt(0),K=G.charCodeAt(1),ne){case 0:break;case 64:if(K===105||K===99){ve+=G+T.charAt(ue);break}default:G.charCodeAt(Be-1)!==58&&(ze+=o(G,ne,K,G.charCodeAt(2)))}an=Ve=Te=ne=0,G="",K=T.charCodeAt(++ue)}}switch(K){case 13:case 10:L===47?L=0:1+ne===0&&O!==107&&0<G.length&&(Ve=1,G+="\0"),0<A*B&&c(0,G,k,P,Me,pe,ze.length,O,$,O),pe=1,Me++;break;case 59:case 125:if(L+te+he+J===0){pe++;break}default:switch(pe++,yt=T.charAt(ue),K){case 9:case 32:if(te+J+L===0)switch(Fe){case 44:case 58:case 9:case 32:yt="";break;default:K!==32&&(yt=" ")}break;case 0:yt="\\0";break;case 12:yt="\\f";break;case 11:yt="\\v";break;case 38:te+L+J===0&&(Ve=an=1,yt="\f"+yt);break;case 108:if(te+L+J+_e===0&&0<Te)switch(ue-Te){case 2:Fe===112&&T.charCodeAt(ue-3)===58&&(_e=Fe);case 8:Ue===111&&(_e=Ue)}break;case 58:te+L+J===0&&(Te=ue);break;case 44:L+he+te+J===0&&(Ve=1,yt+="\r");break;case 34:case 39:L===0&&(te=te===K?0:te===0?K:te);break;case 91:te+L+he===0&&J++;break;case 93:te+L+he===0&&J--;break;case 41:te+L+J===0&&he--;break;case 40:if(te+L+J===0){if(ne===0)switch(2*Fe+3*Ue){case 533:break;default:ne=1}he++}break;case 64:L+he+te+J+Te+re===0&&(re=1);break;case 42:case 47:if(!(0<te+J+he))switch(L){case 0:switch(2*K+3*T.charCodeAt(ue+1)){case 235:L=47;break;case 220:Be=ue,L=42}break;case 42:K===47&&Fe===42&&Be+2!==ue&&(T.charCodeAt(Be+2)===33&&(ze+=T.substring(Be,ue+1)),yt="",L=0)}}L===0&&(G+=yt)}Ue=Fe,Fe=K,ue++}if(Be=ze.length,0<Be){if(Ve=k,0<A&&(cr=c(2,ze,Ve,P,Me,pe,Be,O,$,O),cr!==void 0&&(ze=cr).length===0))return ve+ze+Rn;if(ze=Ve.join(",")+"{"+ze+"}",Oe*_e!==0){switch(Oe!==2||a(ze,2)||(_e=0),_e){case 111:ze=ze.replace(b,":-moz-$1")+ze;break;case 112:ze=ze.replace(y,"::-webkit-input-$1")+ze.replace(y,"::-moz-$1")+ze.replace(y,":-ms-input-$1")+ze}_e=0}}return ve+ze+Rn}function r(P,k,T){var O=k.trim().split(w);k=O;var $=O.length,J=P.length;switch(J){case 0:case 1:var L=0;for(P=J===0?"":P[0]+" ";L<$;++L)k[L]=i(P,k[L],T).trim();break;default:var he=L=0;for(k=[];L<$;++L)for(var te=0;te<J;++te)k[he++]=i(P[te]+" ",O[L],T).trim()}return k}function i(P,k,T){var O=k.charCodeAt(0);switch(33>O&&(O=(k=k.trim()).charCodeAt(0)),O){case 38:return k.replace(f,"$1"+P.trim());case 58:return P.trim()+k.replace(f,"$1"+P.trim());default:if(0<1*T&&0<k.indexOf("\f"))return k.replace(f,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+k}function o(P,k,T,O){var $=P+";",J=2*k+3*T+4*O;if(J===944){P=$.indexOf(":",9)+1;var L=$.substring(P,$.length-1).trim();return L=$.substring(0,P).trim()+L+";",Oe===1||Oe===2&&a(L,1)?"-webkit-"+L+L:L}if(Oe===0||Oe===2&&!a($,1))return $;switch(J){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(me,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return L=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+$+"-ms-flex-pack"+L+$;case 1005:return j.test($)?$.replace(S,":-webkit-")+$.replace(S,":-moz-")+$:$;case 1e3:switch(L=$.substring(13).trim(),k=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(k)){case 226:L=$.replace(z,"tb");break;case 232:L=$.replace(z,"tb-rl");break;case 220:L=$.replace(z,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+L+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(k=($=P).length-10,L=($.charCodeAt(k)===33?$.substring(0,k):$).substring(P.indexOf(":",7)+1).trim(),J=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:$=$.replace(L,"-webkit-"+L)+";"+$;break;case 207:case 102:$=$.replace(L,"-webkit-"+(102<J?"inline-":"")+"box")+";"+$.replace(L,"-webkit-"+L)+";"+$.replace(L,"-ms-"+L+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return L=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+L+"-ms-flex-"+L+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(_,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(_,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(D.test(P)===!0)return(L=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?o(P.replace("stretch","fill-available"),k,T,O).replace(":fill-available",":stretch"):$.replace(L,"-webkit-"+L)+$.replace(L,"-moz-"+L.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,T+O===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+$}return $}function a(P,k){var T=P.indexOf(k===1?":":"{"),O=P.substring(0,k!==3?T:10);return T=P.substring(T+1,P.length-1),V(k!==2?O:O.replace(W,"$1"),T,k)}function s(P,k){var T=o(k,k.charCodeAt(0),k.charCodeAt(1),k.charCodeAt(2));return T!==k+";"?T.replace(N," or ($1)").substring(4):"("+k+")"}function c(P,k,T,O,$,J,L,he,te,ne){for(var K=0,Fe=k,Ue;K<A;++K)switch(Ue=De[K].call(g,P,Fe,T,O,$,J,L,he,te,ne)){case void 0:case!1:case!0:case null:break;default:Fe=Ue}if(Fe!==k)return Fe}function d(P){switch(P){case void 0:case null:A=De.length=0;break;default:if(typeof P=="function")De[A++]=P;else if(typeof P=="object")for(var k=0,T=P.length;k<T;++k)d(P[k]);else B=!!P|0}return d}function u(P){return P=P.prefix,P!==void 0&&(V=null,P?typeof P!="function"?Oe=1:(Oe=2,V=P):Oe=0),u}function g(P,k){var T=P;if(33>T.charCodeAt(0)&&(T=T.trim()),se=T,T=[se],0<A){var O=c(-1,k,T,T,Me,pe,0,0,0,0);O!==void 0&&typeof O=="string"&&(k=O)}var $=t(xe,T,k,0,0);return 0<A&&(O=c(-2,$,T,T,Me,pe,$.length,0,0,0),O!==void 0&&($=O)),se="",_e=0,pe=Me=1,$}var h=/^\0+/g,x=/[\0\r\f]/g,S=/: */g,j=/zoo|gra/,C=/([,: ])(transform)/g,w=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,z=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,_=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,pe=1,Me=1,_e=0,Oe=1,xe=[],De=[],A=0,V=null,B=0,se="";return g.use=d,g.set=u,e!==void 0&&u(e),g}var a2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s2(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var l2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ch=s2(function(e){return l2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Tg={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,yu=Je?Symbol.for("react.element"):60103,xu=Je?Symbol.for("react.portal"):60106,Qs=Je?Symbol.for("react.fragment"):60107,Ys=Je?Symbol.for("react.strict_mode"):60108,qs=Je?Symbol.for("react.profiler"):60114,Zs=Je?Symbol.for("react.provider"):60109,Xs=Je?Symbol.for("react.context"):60110,vu=Je?Symbol.for("react.async_mode"):60111,Js=Je?Symbol.for("react.concurrent_mode"):60111,el=Je?Symbol.for("react.forward_ref"):60112,tl=Je?Symbol.for("react.suspense"):60113,c2=Je?Symbol.for("react.suspense_list"):60120,rl=Je?Symbol.for("react.memo"):60115,nl=Je?Symbol.for("react.lazy"):60116,d2=Je?Symbol.for("react.block"):60121,u2=Je?Symbol.for("react.fundamental"):60117,p2=Je?Symbol.for("react.responder"):60118,h2=Je?Symbol.for("react.scope"):60119;function Ft(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yu:switch(e=e.type,e){case vu:case Js:case Qs:case qs:case Ys:case tl:return e;default:switch(e=e&&e.$$typeof,e){case Xs:case el:case nl:case rl:case Zs:return e;default:return t}}case xu:return t}}}function Rg(e){return Ft(e)===Js}ye.AsyncMode=vu;ye.ConcurrentMode=Js;ye.ContextConsumer=Xs;ye.ContextProvider=Zs;ye.Element=yu;ye.ForwardRef=el;ye.Fragment=Qs;ye.Lazy=nl;ye.Memo=rl;ye.Portal=xu;ye.Profiler=qs;ye.StrictMode=Ys;ye.Suspense=tl;ye.isAsyncMode=function(e){return Rg(e)||Ft(e)===vu};ye.isConcurrentMode=Rg;ye.isContextConsumer=function(e){return Ft(e)===Xs};ye.isContextProvider=function(e){return Ft(e)===Zs};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu};ye.isForwardRef=function(e){return Ft(e)===el};ye.isFragment=function(e){return Ft(e)===Qs};ye.isLazy=function(e){return Ft(e)===nl};ye.isMemo=function(e){return Ft(e)===rl};ye.isPortal=function(e){return Ft(e)===xu};ye.isProfiler=function(e){return Ft(e)===qs};ye.isStrictMode=function(e){return Ft(e)===Ys};ye.isSuspense=function(e){return Ft(e)===tl};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qs||e===Js||e===qs||e===Ys||e===tl||e===c2||typeof e=="object"&&e!==null&&(e.$$typeof===nl||e.$$typeof===rl||e.$$typeof===Zs||e.$$typeof===Xs||e.$$typeof===el||e.$$typeof===u2||e.$$typeof===p2||e.$$typeof===h2||e.$$typeof===d2)};ye.typeOf=Ft;Tg.exports=ye;var f2=Tg.exports,wu=f2,m2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ju={};ju[wu.ForwardRef]=y2;ju[wu.Memo]=Lg;function dh(e){return wu.isMemo(e)?Lg:ju[e.$$typeof]||m2}var x2=Object.defineProperty,v2=Object.getOwnPropertyNames,uh=Object.getOwnPropertySymbols,w2=Object.getOwnPropertyDescriptor,j2=Object.getPrototypeOf,ph=Object.prototype;function Ng(e,t,r){if(typeof t!="string"){if(ph){var i=j2(t);i&&i!==ph&&Ng(e,i,r)}var o=v2(t);uh&&(o=o.concat(uh(t)));for(var a=dh(e),s=dh(t),c=0;c<o.length;++c){var d=o[c];if(!g2[d]&&!(r&&r[d])&&!(s&&s[d])&&!(a&&a[d])){var u=w2(t,d);try{x2(e,d,u)}catch{}}}}return e}var b2=Ng;const $2=of(b2);var Rt={};function rr(){return(rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var hh=function(e,t){for(var r=[e[0]],i=0,o=t.length;i<o;i+=1)r.push(t[i],e[i+1]);return r},dd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Fg.typeOf(e)},Za=Object.freeze([]),Xr=Object.freeze({});function ui(e){return typeof e=="function"}function fh(e){return e.displayName||e.name||"Component"}function bu(e){return e&&typeof e.styledComponentId=="string"}var pi=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",$u=typeof window<"u"&&"HTMLElement"in window,k2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY)),S2={};function kn(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var C2=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var i=0,o=0;o<r;o++)i+=this.groupSizes[o];return i},t.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,s=a;r>=s;)(s<<=1)<0&&kn(16,""+r);this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(var c=a;c<s;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(r+1),u=0,g=i.length;u<g;u++)this.tag.insertRule(d,i[u])&&(this.groupSizes[r]++,d++)},t.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],o=this.indexOfGroup(r),a=o+i;this.groupSizes[r]=0;for(var s=o;s<a;s++)this.tag.deleteRule(o)}},t.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var o=this.groupSizes[r],a=this.indexOfGroup(r),s=a+o,c=a;c<s;c++)i+=this.tag.getRule(c)+`/*!sc*/
`;return i},e}(),xa=new Map,Xa=new Map,Ki=1,ea=function(e){if(xa.has(e))return xa.get(e);for(;Xa.has(Ki);)Ki++;var t=Ki++;return xa.set(e,t),Xa.set(t,e),t},z2=function(e){return Xa.get(e)},P2=function(e,t){t>=Ki&&(Ki=t+1),xa.set(e,t),Xa.set(t,e)},E2="style["+pi+'][data-styled-version="5.3.11"]',M2=new RegExp("^"+pi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F2=function(e,t,r){for(var i,o=r.split(","),a=0,s=o.length;a<s;a++)(i=o[a])&&e.registerName(t,i)},T2=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var c=s.match(M2);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(P2(u,d),F2(e,u,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},R2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ag=function(e){var t=document.head,r=e||t,i=document.createElement("style"),o=function(c){for(var d=c.childNodes,u=d.length;u>=0;u--){var g=d[u];if(g&&g.nodeType===1&&g.hasAttribute(pi))return g}}(r),a=o!==void 0?o.nextSibling:null;i.setAttribute(pi,"active"),i.setAttribute("data-styled-version","5.3.11");var s=R2();return s&&i.setAttribute("nonce",s),r.insertBefore(i,a),i},L2=function(){function e(r){var i=this.element=Ag(r);i.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,s=0,c=a.length;s<c;s++){var d=a[s];if(d.ownerNode===o)return d}kn(17)}(i),this.length=0}var t=e.prototype;return t.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var i=this.sheet.cssRules[r];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},e}(),N2=function(){function e(r){var i=this.element=Ag(r);this.nodes=i.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,i){if(r<=this.length&&r>=0){var o=document.createTextNode(i),a=this.nodes[r];return this.element.insertBefore(o,a||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),A2=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),mh=$u,_2={isServer:!$u,useCSSOMInjection:!k2},Ja=function(){function e(r,i,o){r===void 0&&(r=Xr),i===void 0&&(i={}),this.options=rr({},_2,{},r),this.gs=i,this.names=new Map(o),this.server=!!r.isServer,!this.server&&$u&&mh&&(mh=!1,function(a){for(var s=document.querySelectorAll(E2),c=0,d=s.length;c<d;c++){var u=s[c];u&&u.getAttribute(pi)!=="active"&&(T2(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(r){return ea(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new e(rr({},this.options,{},r),this.gs,i&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(i=this.options).isServer,a=i.useCSSOMInjection,s=i.target,r=o?new A2(s):a?new L2(s):new N2(s),new C2(r)));var r,i,o,a,s},t.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},t.registerName=function(r,i){if(ea(r),this.names.has(r))this.names.get(r).add(i);else{var o=new Set;o.add(i),this.names.set(r,o)}},t.insertRules=function(r,i,o){this.registerName(r,i),this.getTag().insertRules(ea(r),o)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(ea(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var i=r.getTag(),o=i.length,a="",s=0;s<o;s++){var c=z2(s);if(c!==void 0){var d=r.names.get(c),u=i.getGroup(s);if(d&&u&&d.size){var g=pi+".g"+s+'[id="'+c+'"]',h="";d!==void 0&&d.forEach(function(x){x.length>0&&(h+=x+",")}),a+=""+u+g+'{content:"'+h+`"}/*!sc*/
`}}}return a}(this)},e}(),I2=/(a)(d)/gi,gh=function(e){return String.fromCharCode(e+(e>25?39:97))};function ud(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=gh(t%52)+r;return(gh(t%52)+r).replace(I2,"$1-$2")}var Yn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},_g=function(e){return Yn(5381,e)};function Ig(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ui(r)&&!bu(r))return!1}return!0}var O2=_g("5.3.11"),D2=function(){function e(t,r,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Ig(t),this.componentId=r,this.baseHash=Yn(O2,r),this.baseStyle=i,Ja.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,i){var o=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,r,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(o,this.staticRulesId))a.push(this.staticRulesId);else{var s=Sn(this.rules,t,r,i).join(""),c=ud(Yn(this.baseHash,s)>>>0);if(!r.hasNameForId(o,c)){var d=i(s,"."+c,void 0,o);r.insertRules(o,c,d)}a.push(c),this.staticRulesId=c}else{for(var u=this.rules.length,g=Yn(this.baseHash,i.hash),h="",x=0;x<u;x++){var S=this.rules[x];if(typeof S=="string")h+=S;else if(S){var j=Sn(S,t,r,i),C=Array.isArray(j)?j.join(""):j;g=Yn(g,C+x),h+=C}}if(h){var w=ud(g>>>0);if(!r.hasNameForId(o,w)){var f=i(h,"."+w,void 0,o);r.insertRules(o,w,f)}a.push(w)}}return a.join(" ")},e}(),B2=/^\s*\/\/.*$/gm,H2=[":","[",".","#"];function U2(e){var t,r,i,o,a=Xr,s=a.options,c=s===void 0?Xr:s,d=a.plugins,u=d===void 0?Za:d,g=new o2(c),h=[],x=function(C){function w(f){if(f)try{C(f+"}")}catch{}}return function(f,p,y,b,z,R,N,_,W,D){switch(f){case 1:if(W===0&&p.charCodeAt(0)===64)return C(p+";"),"";break;case 2:if(_===0)return p+"/*|*/";break;case 3:switch(_){case 102:case 112:return C(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(w)}}}(function(C){h.push(C)}),S=function(C,w,f){return w===0&&H2.indexOf(f[r.length])!==-1||f.match(o)?C:"."+t};function j(C,w,f,p){p===void 0&&(p="&");var y=C.replace(B2,""),b=w&&f?f+" "+w+" { "+y+" }":y;return t=p,r=w,i=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),g(f||!w?"":w,b)}return g.use([].concat(u,[function(C,w,f){C===2&&f.length&&f[0].lastIndexOf(r)>0&&(f[0]=f[0].replace(i,S))},x,function(C){if(C===-2){var w=h;return h=[],w}}])),j.hash=u.length?u.reduce(function(C,w){return w.name||kn(15),Yn(C,w.name)},5381).toString():"",j}var Og=tn.createContext();Og.Consumer;var Dg=tn.createContext(),V2=(Dg.Consumer,new Ja),pd=U2();function Bg(){return v.useContext(Og)||V2}function Hg(){return v.useContext(Dg)||pd}var W2=function(){function e(t,r){var i=this;this.inject=function(o,a){a===void 0&&(a=pd);var s=i.name+a.hash;o.hasNameForId(i.id,s)||o.insertRules(i.id,s,a(i.rules,s,"@keyframes"))},this.toString=function(){return kn(12,String(i.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=pd),this.name+t.hash},e}(),G2=/([A-Z])/,K2=/([A-Z])/g,Q2=/^ms-/,Y2=function(e){return"-"+e.toLowerCase()};function yh(e){return G2.test(e)?e.replace(K2,Y2).replace(Q2,"-ms-"):e}var xh=function(e){return e==null||e===!1||e===""};function Sn(e,t,r,i){if(Array.isArray(e)){for(var o,a=[],s=0,c=e.length;s<c;s+=1)(o=Sn(e[s],t,r,i))!==""&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}if(xh(e))return"";if(bu(e))return"."+e.styledComponentId;if(ui(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var d=e(t);return Sn(d,t,r,i)}var u;return e instanceof W2?r?(e.inject(r,i),e.getName(i)):e:dd(e)?function g(h,x){var S,j,C=[];for(var w in h)h.hasOwnProperty(w)&&!xh(h[w])&&(Array.isArray(h[w])&&h[w].isCss||ui(h[w])?C.push(yh(w)+":",h[w],";"):dd(h[w])?C.push.apply(C,g(h[w],w)):C.push(yh(w)+": "+(S=w,(j=h[w])==null||typeof j=="boolean"||j===""?"":typeof j!="number"||j===0||S in a2||S.startsWith("--")?String(j).trim():j+"px")+";"));return x?[x+" {"].concat(C,["}"]):C}(e):e.toString()}var vh=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return ui(e)||dd(e)?vh(Sn(hh(Za,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:vh(Sn(hh(e,r)))}var Ug=function(e,t,r){return r===void 0&&(r=Xr),e.theme!==r.theme&&e.theme||t||r.theme},q2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Z2=/(^-|-$)/g;function Ul(e){return e.replace(q2,"-").replace(Z2,"")}var Vg=function(e){return ud(_g(e)>>>0)};function ta(e){return typeof e=="string"&&!0}var hd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},X2=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function J2(e,t,r){var i=e[r];hd(t)&&hd(i)?Wg(i,t):e[r]=t}function Wg(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];for(var o=0,a=r;o<a.length;o++){var s=a[o];if(hd(s))for(var c in s)X2(c)&&J2(e,s[c],c)}return e}var xo=tn.createContext();xo.Consumer;function ew(e){var t=v.useContext(xo),r=v.useMemo(function(){return function(i,o){if(!i)return kn(14);if(ui(i)){var a=i(o);return a}return Array.isArray(i)||typeof i!="object"?kn(8):o?rr({},o,{},i):i}(e.theme,t)},[e.theme,t]);return e.children?tn.createElement(xo.Provider,{value:r},e.children):null}var Vl={};function Gg(e,t,r){var i=bu(e),o=!ta(e),a=t.attrs,s=a===void 0?Za:a,c=t.componentId,d=c===void 0?function(p,y){var b=typeof p!="string"?"sc":Ul(p);Vl[b]=(Vl[b]||0)+1;var z=b+"-"+Vg("5.3.11"+b+Vl[b]);return y?y+"-"+z:z}(t.displayName,t.parentComponentId):c,u=t.displayName,g=u===void 0?function(p){return ta(p)?"styled."+p:"Styled("+fh(p)+")"}(e):u,h=t.displayName&&t.componentId?Ul(t.displayName)+"-"+t.componentId:t.componentId||d,x=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,S=t.shouldForwardProp;i&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(p,y,b){return e.shouldForwardProp(p,y,b)&&t.shouldForwardProp(p,y,b)}:e.shouldForwardProp);var j,C=new D2(r,h,i?e.componentStyle:void 0),w=C.isStatic&&s.length===0,f=function(p,y){return function(b,z,R,N){var _=b.attrs,W=b.componentStyle,D=b.defaultProps,me=b.foldedComponentIds,pe=b.shouldForwardProp,Me=b.styledComponentId,_e=b.target,Oe=function(O,$,J){O===void 0&&(O=Xr);var L=rr({},$,{theme:O}),he={};return J.forEach(function(te){var ne,K,Fe,Ue=te;for(ne in ui(Ue)&&(Ue=Ue(L)),Ue)L[ne]=he[ne]=ne==="className"?(K=he[ne],Fe=Ue[ne],K&&Fe?K+" "+Fe:K||Fe):Ue[ne]}),[L,he]}(Ug(z,v.useContext(xo),D)||Xr,z,_),xe=Oe[0],De=Oe[1],A=function(O,$,J,L){var he=Bg(),te=Hg(),ne=$?O.generateAndInjectStyles(Xr,he,te):O.generateAndInjectStyles(J,he,te);return ne}(W,N,xe),V=R,B=De.$as||z.$as||De.as||z.as||_e,se=ta(B),P=De!==z?rr({},z,{},De):z,k={};for(var T in P)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?k.as=P[T]:(pe?pe(T,ch,B):!se||ch(T))&&(k[T]=P[T]));return z.style&&De.style!==z.style&&(k.style=rr({},z.style,{},De.style)),k.className=Array.prototype.concat(me,Me,A!==Me?A:null,z.className,De.className).filter(Boolean).join(" "),k.ref=V,v.createElement(B,k)}(j,p,y,w)};return f.displayName=g,(j=tn.forwardRef(f)).attrs=x,j.componentStyle=C,j.displayName=g,j.shouldForwardProp=S,j.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Za,j.styledComponentId=h,j.target=i?e.target:e,j.withComponent=function(p){var y=t.componentId,b=function(R,N){if(R==null)return{};var _,W,D={},me=Object.keys(R);for(W=0;W<me.length;W++)_=me[W],N.indexOf(_)>=0||(D[_]=R[_]);return D}(t,["componentId"]),z=y&&y+"-"+(ta(p)?p:Ul(fh(p)));return Gg(p,rr({},b,{attrs:x,componentId:z}),r)},Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=i?Wg({},e.defaultProps,p):p}}),Object.defineProperty(j,"toString",{value:function(){return"."+j.styledComponentId}}),o&&$2(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),j}var l=function(e){return function t(r,i,o){if(o===void 0&&(o=Xr),!Fg.isValidElementType(i))return kn(1,String(i));var a=function(){return r(i,o,xr.apply(void 0,arguments))};return a.withConfig=function(s){return t(r,i,rr({},o,{},s))},a.attrs=function(s){return t(r,i,rr({},o,{attrs:Array.prototype.concat(o.attrs,s).filter(Boolean)}))},a}(Gg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){l[e]=l(e)});var tw=function(){function e(r,i){this.rules=r,this.componentId=i,this.isStatic=Ig(r),Ja.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(r,i,o,a){var s=a(Sn(this.rules,i,o,a).join(""),""),c=this.componentId+r;o.insertRules(c,c,s)},t.removeStyles=function(r,i){i.clearRules(this.componentId+r)},t.renderStyles=function(r,i,o,a){r>2&&Ja.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,i,o,a)},e}();function rw(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var o=xr.apply(void 0,[e].concat(r)),a="sc-global-"+Vg(JSON.stringify(o)),s=new tw(o,a);function c(u){var g=Bg(),h=Hg(),x=v.useContext(xo),S=v.useRef(g.allocateGSInstance(a)).current;return g.server&&d(S,u,g,x,h),v.useLayoutEffect(function(){if(!g.server)return d(S,u,g,x,h),function(){return s.removeStyles(S,g)}},[S,u,g,x,h]),null}function d(u,g,h,x,S){if(s.isStatic)s.renderStyles(u,S2,h,S);else{var j=rr({},g,{theme:Ug(g,x,c.defaultProps)});s.renderStyles(u,j,h,S)}}return tn.memo(c)}const nw=rw`
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
`,Nr={color:{primary:"#0047E7",primaryHover:"#003DCB",primaryActive:"#0033A8",brand:"#0047E7",brandHover:"#003DCB",brandActive:"#0033A8",primarySoft:"#EAF1FF",background:"#F5F7FB",backgroundAlt:"#EEF3FA",surface:"#FFFFFF",surfaceMuted:"#EEF2F8",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#0B1020",textMuted:"#465067",textSoft:"#6B7280",textInverse:"#FFFFFF",border:"#D7E0ED",borderStrong:"#B8C3D8",shadow:"rgba(5, 8, 22, 0.12)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#0F9D58",warning:"#D97706",danger:"#DC2626",info:"#2563EB",heroGradient:"linear-gradient(135deg, #050816 0%, #081330 46%, #0047E7 100%)",heroGlow:"radial-gradient(circle at top left, rgba(0, 71, 231, 0.35), transparent 55%)"},typography:{fontFamily:{heading:'"Rubik", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',body:'"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',mono:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'},size:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.75rem","5xl":"3.5rem","6xl":"4.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800"},lineHeight:{tight:1.1,snug:1.3,normal:1.5}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem"},radius:{sm:"0.5rem",md:"0.75rem",lg:"1rem",xl:"1.5rem","2xl":"2rem",full:"9999px"},shadow:{sm:"0 1px 2px rgba(5, 8, 22, 0.06)",md:"0 12px 24px rgba(5, 8, 22, 0.08)",lg:"0 20px 40px rgba(5, 8, 22, 0.14)",glow:"0 0 0 1px rgba(0, 71, 231, 0.16), 0 24px 48px rgba(0, 71, 231, 0.16)"},layout:{screenPaddingH:"clamp(1rem, 2.5vw, 1.5rem)",maxContentWidth:"72rem",sectionSpacing:"clamp(3.5rem, 8vw, 6rem)",cardPadding:"clamp(1rem, 2.4vw, 1.5rem)",bottomNavHeight:"3.125rem",topBarHeight:"4rem"},breakpoints:{sm:"480px",md:"768px",lg:"1024px",xl:"1280px"},zIndex:{header:20,bottomNav:30}},iw=Nr.shadow,ow={primary:"#FFFFFF",primaryHover:"#EAF1FF",primaryActive:"#DCE8FF",brand:"#6B9DFF",brandHover:"#8AB3FF",brandActive:"#4F87FF",primarySoft:"#132D63",background:"#141413",backgroundAlt:"#1D1D1B",surface:"#111A2E",surfaceMuted:"#182238",surfaceDark:"#050816",surfaceDarkAlt:"#0B1020",text:"#F6F9FF",textMuted:"#B4C2D8",textSoft:"#8694AE",textInverse:"#FFFFFF",border:"#25324A",borderStrong:"#34445E",shadow:"rgba(0, 0, 0, 0.32)",onPrimary:"#FFFFFF",onDark:"#FFFFFF",success:"#34D399",warning:"#F59E0B",danger:"#F87171",info:"#60A5FA",heroGradient:"linear-gradient(135deg, #050816 0%, #0B1430 46%, #6B9DFF 100%)",heroGlow:"radial-gradient(circle at top left, rgba(107, 157, 255, 0.28), transparent 55%)"},aw={sm:"0 1px 2px rgba(0, 0, 0, 0.28)",md:"0 12px 24px rgba(0, 0, 0, 0.24)",lg:"0 20px 40px rgba(0, 0, 0, 0.34)",glow:"0 0 0 1px rgba(107, 157, 255, 0.28), 0 24px 48px rgba(107, 157, 255, 0.2)"},sw=e=>({mode:e,color:e==="dark"?ow:Nr.color,typography:Nr.typography,spacing:Nr.spacing,radius:Nr.radius,shadow:e==="dark"?aw:iw,layout:Nr.layout,breakpoints:Nr.breakpoints,zIndex:Nr.zIndex}),Kg="lafranciago-theme-mode",Qg=v.createContext(null),lw=()=>{if(typeof window>"u")return"light";const e=window.localStorage.getItem(Kg);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function cw({children:e}){const[t,r]=v.useState(lw),i=v.useRef(!1);v.useEffect(()=>{if(window.localStorage.setItem(Kg,t),document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,!i.current){i.current=!0;return}document.documentElement.dataset.themeTransition="true";const d=window.setTimeout(()=>{delete document.documentElement.dataset.themeTransition},240);return()=>{window.clearTimeout(d),delete document.documentElement.dataset.themeTransition}},[t]);const o=v.useCallback(()=>{r(d=>d==="light"?"dark":"light")},[]),a=v.useCallback(d=>{r(d)},[]),s=v.useMemo(()=>sw(t),[t]),c=v.useMemo(()=>({mode:t,isDarkMode:t==="dark",toggleMode:o,setMode:a}),[t,a,o]);return n.jsx(Qg.Provider,{value:c,children:n.jsxs(ew,{theme:s,children:[n.jsx(nw,{}),e]})})}function Yg(){const e=v.useContext(Qg);if(!e)throw new Error("useThemeMode must be used within ThemeProvider");return e}/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),U=(e,t)=>{const r=v.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:d,...u},g)=>v.createElement("svg",{ref:g,...dw,width:o,height:o,stroke:i,strokeWidth:s?Number(a)*24/Number(o):a,className:["lucide",`lucide-${uw(e)}`,c].join(" "),...u},[...t.map(([h,x])=>v.createElement(h,x)),...Array.isArray(d)?d:[d]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=U("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=U("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=U("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=U("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=U("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=U("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=U("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=U("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=U("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=U("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=U("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=U("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=U("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=U("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=U("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=U("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=U("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=U("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=U("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=U("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=U("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=U("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=U("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=U("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=U("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=U("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=U("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=U("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=U("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=U("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=U("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=U("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=U("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=U("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=U("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=U("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=U("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=U("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=U("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=U("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=U("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=U("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=U("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=U("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=U("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=U("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=U("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=U("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=U("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=U("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=U("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=U("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),We=(e,t="es-AR",r="ARS")=>new Intl.NumberFormat(t,{style:"currency",currency:r,maximumFractionDigits:0}).format(e),hi=e=>`${e.toFixed(1)} km`,Sw=e=>`${e>0?"+":""}${e}%`,Cw=(e,t)=>`${e}-${t} min`,Qi=e=>e.trim().toLowerCase(),zw=({size:e=18,...t})=>v.createElement("svg",{...t,width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,focusable:!1},v.createElement("circle",{cx:6.2,cy:17.2,r:2.05}),v.createElement("circle",{cx:16.8,cy:17.2,r:2.05}),v.createElement("path",{d:"M7.4 17.2h3.2l1.7-3.5h3.2l1.6 2.8"}),v.createElement("path",{d:"M11.8 13.7l1.1-1.8h2.4l1.1 1.8"}),v.createElement("rect",{x:14.7,y:7.7,width:4,height:4,rx:.9}),v.createElement("path",{d:"M4.2 11.3c1.2-.8 2.6-.8 3.8 0"}),v.createElement("path",{d:"M2.8 8.8c1.1-.6 2.1-.8 3.2-.5"}),v.createElement("path",{d:"M18.8 9.2h2.1"}),v.createElement("path",{d:"M17.8 6.8h1.8"})),Pw=[{id:"home",label:"Inicio",href:"/",icon:wi},{id:"stores",label:"Comercios",href:"/comercios",icon:Xe},{id:"orders",label:"Pedidos",href:"/pedidos",icon:Kt},{id:"alerts",label:"Notificaciones",href:"/notificaciones",icon:nt},{id:"account",label:"Cuenta",href:"/mi-cuenta",icon:Qe}],Ew=[{id:"home",label:"Inicio",href:"/",icon:wi},{id:"categories",label:"Categorías",href:"/comercios",icon:Eo},{id:"orders",label:"Pedidos",href:"/pedidos",icon:Kt},{id:"favorites",label:"Favoritos",href:"/favoritos",icon:Fn},{id:"account",label:"Cuenta",href:"/mi-cuenta",icon:Qe}],Lr=[{id:"centro",label:"La Francia",detail:"Córdoba · entrega rápida en radio corto",mapQuery:"La Francia Córdoba Argentina",note:"Buscamos ofertas, comercios y tiempos desde esta zona."},{id:"barrio-norte",label:"Barrio Norte",detail:"Mayor cobertura en comercios de cercanía",mapQuery:"Barrio Norte La Francia Córdoba",note:"Ideal para comparar precios entre tiendas de barrio."},{id:"ruta-19",label:"Zona Ruta 19",detail:"Cobertura de mayor distancia y pedidos grandes",mapQuery:"Ruta 19 La Francia Córdoba",note:"Útil para stock más amplio y comercios con delivery extendido."}],Mw=[{id:"sort",label:"Ordenar",multi:!1,options:[{id:"featured",label:"Destacados",description:"Mayor relevancia y sponsor"},{id:"closest",label:"Más cercanos",description:"Primero lo que llega antes"},{id:"cheapest",label:"Más baratos",description:"Precio ascendente"},{id:"discount",label:"Mayor descuento",description:"Promos y rebajas"}]},{id:"service",label:"Servicio",multi:!0,options:[{id:"delivery",label:"Delivery",description:"Entrega a domicilio"},{id:"pickup",label:"Retiro",description:"Retiro en local"},{id:"openNow",label:"Abierto ahora",description:"Negocios disponibles ahora"}]},{id:"distance",label:"Cercanía",multi:!1,options:[{id:"near",label:"Hasta 1 km",description:"Entrega muy cercana"},{id:"five",label:"Hasta 5 km",description:"Cobertura ampliada"},{id:"twentyFive",label:"Hasta 25 km",description:"Cobertura extendida"},{id:"custom",label:"Personalizado:",description:"Ingresá un radio entero"}]}],wh=[{id:"pack-familiar",badge:"OFERTA DESTACADA",title:"Pack familiar",subtitle:"Todo lo que necesitás al mejor precio.",store:"Don José",href:"/productos/pack-familiar",cta:"Ver oferta",discount:"-20% descuento",tone:"blue",imageLabel:"Familia"},{id:"frescura-dia",badge:"PATROCINADO",title:"Frescura del día",subtitle:"Frutas y verduras listas para sumar al carrito.",store:"La Huerta",href:"/productos/frescura-del-dia",cta:"Explorar",discount:"-15% hoy",tone:"green",imageLabel:"Verduras"},{id:"asado-finde",badge:"OFERTA ESPECIAL",title:"Asado especial",subtitle:"Cortes seleccionados para el finde.",store:"La Estancia",href:"/productos/asado-especial",cta:"Ver promo",discount:"-10% carne",tone:"red",imageLabel:"Asado"}],An=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:a0,tone:"blue"},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:Jg,tone:"green"},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Zg,tone:"violet"},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:ku,tone:"red"},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Su,tone:"orange"},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Xe,tone:"slate"},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:l0,tone:"gold"},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:zu,tone:"blue"},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:al,tone:"violet"},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:qg,tone:"gold"},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Xg,tone:"slate"},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:o0,tone:"blue"},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:c0,tone:"green"},{id:"delivery",name:"Delivery",description:"Entrega rápida y seguimiento",icon:$t,tone:"red"}],Fw=[{id:"la-huerta",name:"La Huerta",category:"Verdulería",categoryId:"verduleria",logoLabel:"LH",etaMin:20,etaMax:30,distanceKm:1.2,rating:4.9,delivery:!0,pickup:!0,openNow:!0,tone:"green",address:"Centro · La Francia",href:"/comercios/almacen-juan"},{id:"don-jose",name:"Don José",category:"Almacén",categoryId:"almacen",logoLabel:"DJ",etaMin:15,etaMax:25,distanceKm:.9,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"blue",address:"Av. Principal",href:"/comercios/almacen-juan"},{id:"la-estancia",name:"La Estancia",category:"Carnicería",categoryId:"carniceria",logoLabel:"LE",etaMin:20,etaMax:30,distanceKm:2.1,rating:4.8,delivery:!0,pickup:!0,openNow:!0,tone:"red",address:"Barrio norte",href:"/comercios/carniceria-central"},{id:"delicias",name:"Delicias",category:"Panadería",categoryId:"panaderia",logoLabel:"DE",etaMin:15,etaMax:20,distanceKm:1.5,rating:4.7,delivery:!1,pickup:!0,openNow:!0,tone:"orange",address:"Sector comercial",href:"/comercios/panaderia-la-esquina"}],Tw=[{id:"fast",title:"Delivery rápido",description:"Llegamos a tu casa",icon:zw},{id:"local",title:"Comercio local",description:"Apoyá a los negocios de La Francia",icon:e0},{id:"secure",title:"Pago seguro",description:"Pagá como quieras",icon:sr}],Rw=[{id:"promo-verduras",product:"Promo Verduras",store:"La Huerta",categoryId:"verduleria",distanceKm:1.2,price:2300,oldPrice:2700,discount:15,delivery:!0,pickup:!0,openNow:!0,tone:"green",imageLabel:"Verduras",href:"/productos/coca-cola-225"},{id:"asado-especial",product:"Asado Especial",store:"La Estancia",categoryId:"carniceria",distanceKm:2.1,price:6750,oldPrice:7500,discount:10,delivery:!0,pickup:!0,openNow:!0,tone:"red",imageLabel:"Asado",href:"/productos/yerba-1kg"},{id:"limpieza-hogar",product:"Limpieza del Hogar",store:"Don José",categoryId:"almacen",distanceKm:.9,price:3200,oldPrice:4e3,discount:20,delivery:!0,pickup:!0,openNow:!0,tone:"blue",imageLabel:"Limpieza",href:"/productos/detergente"},{id:"combo-bebidas",product:"Combo Bebidas",store:"Bebidas Express",categoryId:"bebidas",distanceKm:1.8,price:2100,oldPrice:2470,discount:15,delivery:!0,pickup:!1,openNow:!0,tone:"violet",imageLabel:"Bebidas",href:"/productos/coca-cola-225"}],Lw=l.div`
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  background-color: ${({theme:e})=>e.color.background};
  background-image: ${({theme:e})=>e.mode==="dark"?"none":"radial-gradient(circle at top, rgba(0, 71, 231, 0.05), transparent 34%)"};
  background-repeat: no-repeat;
  color: ${({theme:e})=>e.color.text};
  padding-top: var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight});
  padding-bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[3]});

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-bottom: 0;
  }
`,Nw=l.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,Aw=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,_w=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`,Iw=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,Ow=l.button`
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
`,Dw=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`;l(yr)`
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
`;const Bw=l.div`
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
`;const Hw=l.div`
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

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,Wl=l.span`
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
`,Gl=l.img`
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
`;const Kl=l.span`
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
`,Ql=l.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,d0=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: center;
  white-space: nowrap;
`,u0=l.div`
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
`,p0=l(d0)`
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  letter-spacing: -0.01em;
  white-space: pre-line;
`,Uw=l.span`
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
`,Vw=l.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,Yl=l(yr)`
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
`,Ww=l.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
`,Gw=l.label`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Kw=l.span`
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
`,Qw=l.div`
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
`,Yw=l.input`
  width: 100%;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.color.text};

  &::placeholder {
    color: ${({theme:e})=>e.color.textSoft};
  }
`,Pu=xr`
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
`,qw=l.button`
  ${Pu};
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
`,Zw=l.div`
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
`,Xw=l.button`
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
`,Jw=l.main`
  width: 100%;
`,we=l.section`
  padding: ${({theme:e})=>e.spacing[6]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }
`,ee=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,fi=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[2]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }
`,fe=l.span`
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
`,Ce=l.h1`
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
`,Eu=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ej=l(Eu)`
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;l(Eu)`
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;const tj=l(Eu)`
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
`,X=l.h2`
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
`,vo=l(Q)`
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
`,h0=l.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Ut=l(h0)`
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
`;l.span`
  color: ${({theme:e})=>e.color.textMuted};
`;const Pt=l(yr)`
  ${Pu};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};

  &:hover {
    border-color: rgba(0, 71, 231, 0.2);
  }
`,Tn=l(Pt)`
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
  }
`,ns=l.button`
  ${Pu};
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
`;const rj=l.nav`
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
`,nj=l(Po)`
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
`,ij=l.nav`
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
`,oj=l.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;
`,aj=l(Po)`
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

  &[data-primary='true'].active {
    background: transparent;
    color: ${({theme:e})=>e.color.primary};
  }
`,sj=l.span`
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
`,lj=l.footer`
  display: none;
  padding: ${({theme:e})=>e.spacing[6]} 0
    calc(${({theme:e})=>e.spacing[8]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`,cj=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,dj=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,uj=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,pj=l.p`
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
`;const wo=xr`
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
`,Mo=xr`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,hj=xr`
  background:
    radial-gradient(circle at top left, rgba(0, 71, 231, 0.24), transparent 48%),
    linear-gradient(180deg, rgba(11, 16, 32, 0.98), rgba(5, 8, 22, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({theme:e})=>e.radius["2xl"]};
  box-shadow: ${({theme:e})=>e.shadow.glow};
`,lr=xr`
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
`,fj=l.div`
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  padding-top: var(--home-topbar-height, ${({theme:e})=>e.layout.topBarHeight});
  padding-bottom: calc(${({theme:e})=>e.layout.bottomNavHeight} + ${({theme:e})=>e.spacing[3]});

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding-top: var(--home-topbar-height, ${({theme:e})=>e.layout.topBarHeight});
    padding-bottom: 0;
  }
`,mj=l.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({theme:e})=>e.zIndex.header};
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  backdrop-filter: blur(18px);
`,gj=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.layout.screenPaddingH};
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,yj=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  min-height: 3rem;
`,xj=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,vj=l.button`
  ${lr};
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
`,wj=l.div`
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

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,jj=l.div`
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
`;const ql=l.span`
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
`,Zl=l.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,bj=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  min-width: 0;
  max-width: 10.5rem;
`,Xl=l.span`
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
`,Jl=l.span`
  font-size: 1.25em;
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.05em;
`,$j=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.6875rem, 1.8vw, 0.875rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0;
  line-height: 1.05;
  text-transform: none;
  text-align: center;
  white-space: nowrap;
`;l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: clamp(0.62rem, 1.55vw, 0.8rem);
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: -0.01em;
  line-height: 0.98;
  text-align: center;
  white-space: pre-line;
`;const kj=l.div`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  justify-self: end;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,Sj=l.div`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,f0=xr`
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
`,is=l.button`
  ${f0}
`;l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  color: ${({theme:e})=>e.color.primary};
`;const yd=l(yr)`
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
`,os=l(yr)`
  ${f0};
  text-decoration: none;
`,Cj=l(yr)`
  ${lr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
  padding: 0 ${({theme:e})=>e.spacing[3]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    padding: 0 ${({theme:e})=>e.spacing[2]};
  }
`,zj=l.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: inline-flex;
  }
`,Pj=l(Po)`
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
`,Ej=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Mj=l.main`
  width: 100%;
`,Fj=l.section`
  padding: ${({theme:e})=>e.spacing[2]} 0 ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0 ${({theme:e})=>e.spacing[8]};
  }
`,Fi=l.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.layout.screenPaddingH};
`,Tj=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[5]};
  }
`,Rj=l.div`
  display: grid;
  gap: 0.125rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
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
`;const Lj=l.section`
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
`,Nj=l.form`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
`,jh=l.label`
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
`;const bh=l.div`
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
`,$h=l.input`
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
  ${lr};
  border: 0;
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.sm};
  white-space: nowrap;

  &:hover {
    background: ${({theme:e})=>e.color.brandHover};
    box-shadow: ${({theme:e})=>e.shadow.md};
  }
`;const Aj=l.button`
  ${lr};
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
`,_j=l.span`
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
  ${lr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.textMuted};
  white-space: nowrap;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`;const Ij=l.div`
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
`,Oj=l.div`
  position: relative;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Dj=l.button`
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
`,Bj=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.18)":"rgba(0, 71, 231, 0.12)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,kh=l.span`
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
`,Hj=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: 0;
`,Uj=l.div`
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
`;const Vj=l.button`
  ${lr};
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
`,Wj=l.aside`
  background: ${({theme:e})=>e.color.background};
  border: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  gap: calc(${({theme:e})=>e.spacing[1]} + 1px);
`,Gj=l.div`
  display: flex;
  align-items: stretch;
  gap: calc(${({theme:e})=>e.spacing[1]} + 2px);
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
`,Kj=l(yr)`
  display: grid;
  flex: 0 0 100%;
  width: 100%;
  min-height: 11.5rem;
  border-radius: ${({theme:e})=>e.radius.md};
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
`,Qj=l.div`
  display: grid;
  gap: 0.35rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    gap: 0.3rem;
  }
`,Yj=l.span`
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
`,qj=l.h2`
  margin: 0;
  max-width: 12ch;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.05rem, 4vw, 2.2rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
  text-transform: uppercase;
`,Zj=l.span`
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
`,Xj=l.p`
  margin: 0;
  max-width: 18ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Jj=l.div`
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
`,eb=l.span`
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
`,tb=l.span`
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
`,rb=l.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,nb=l.span`
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
`,ra=l.section`
  padding: 0.0625rem 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[2]} 0;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.layout.sectionSpacing} 0;
  }
`,Sh=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,Ch=l.section`
  ${Mo};
  border-radius: ${({theme:e})=>e.radius.lg};
  padding: calc(${({theme:e})=>e.spacing[1]} + 0.25rem);
  display: grid;
  gap: calc(${({theme:e})=>e.spacing[1]} + 0.125rem);
  overflow: visible;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: calc(${({theme:e})=>e.layout.cardPadding} + 0.25rem);
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,zh=l.div`
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
`,Ph=l.p`
  margin: 0;
  max-width: 20rem;
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.35;
`,Eh=l.div`
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
`;const Mh=l.h2`
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
`;const Fh=l(yr)`
  ${lr};
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
`,ib=l.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  overflow: visible;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[2]};
  }
`,ob=l.button`
  ${wo};
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
    ${Mo};
    ${wo};
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
    min-height: 100%;

    &[data-tone='blue'] {
      background: linear-gradient(180deg, rgba(0, 71, 231, 0.08), rgba(0, 71, 231, 0.02));
    }

    &[data-tone='green'] {
      background: linear-gradient(180deg, rgba(15, 157, 88, 0.08), rgba(15, 157, 88, 0.02));
    }

    &[data-tone='violet'] {
      background: linear-gradient(180deg, rgba(124, 58, 237, 0.08), rgba(124, 58, 237, 0.02));
    }

    &[data-tone='orange'] {
      background: linear-gradient(180deg, rgba(217, 119, 6, 0.08), rgba(217, 119, 6, 0.02));
    }

    &[data-tone='red'] {
      background: linear-gradient(180deg, rgba(185, 28, 28, 0.08), rgba(185, 28, 28, 0.02));
    }

    &[data-tone='gold'] {
      background: linear-gradient(180deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.02));
    }

    &[data-active='true'] {
      border-color: rgba(0, 71, 231, 0.28);
      box-shadow: ${({theme:e})=>e.shadow.glow};
    }
  }
`,ja=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.primary};
  box-shadow: ${({theme:e})=>e.shadow.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`,xd=l.span`
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
`,Th=l.span`
  display: none;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`,ab=l.button`
  ${wo};
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
    ${Mo};
    ${wo};
    gap: ${({theme:e})=>e.spacing[1]};
    padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]};
    min-height: 100%;
    background: linear-gradient(180deg, rgba(11, 16, 32, 0.02), rgba(11, 16, 32, 0.01));
  }
`,sb=l.span`
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
`,un=l.div`
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
`,pn=l.div`
  width: 100%;
  max-width: 56rem;
  max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
  overflow: auto;
  ${Mo};
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
      max-height: calc(100dvh - ${({theme:e})=>e.spacing[6]});
      border-radius: ${({theme:e})=>e.radius["2xl"]};
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
`,m0=l.div`
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
`,g0=l.div`
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
`,y0=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  min-width: 0;
  max-width: none;
`,x0=l.div`
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
`;const as=l.section`
  display: block;
`,ss=l.span`
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
`,ls=l.nav`
  display: grid;
  gap: 0.25rem;
`,cs=l(Po)`
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
`,ds=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: ${({theme:e})=>e.radius.lg};
  background: ${({theme:e})=>e.mode==="dark"?"rgba(107, 157, 255, 0.18)":"rgba(0, 71, 231, 0.08)"};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,us=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,ps=l.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,hs=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,fs=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.textSoft};
`,v0=l.section`
  display: block;
  padding-top: 0.125rem;
  border-top: 1px solid ${({theme:e})=>e.color.border};
`,w0=l.button`
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
`,j0=l.span`
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
`,b0=l.span`
  position: relative;
  display: block;
  width: 2.25rem;
  height: 2.95rem;
  padding: 0.18rem;
  border-radius: 0.55rem;
  border: 0;
  background: linear-gradient(180deg, #34363b 0%, #121419 100%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.08),
    inset 0 -2px 4px rgba(0, 0, 0, 0.55),
    0 6px 12px rgba(5, 8, 22, 0.12);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0.18rem;
    border-radius: 0.42rem;
    border: 0;
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
    background: rgba(255, 255, 255, 0.05);
  }
`,ms=l.span`
  position: absolute;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.78);
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
`,$0=l.span`
  position: absolute;
  left: 0.18rem;
  right: 0.18rem;
  top: 0.18rem;
  height: calc(50% - 0.21rem);
  border-radius: 0.42rem;
  border: 1px solid rgba(0, 71, 231, 0.72);
  background: linear-gradient(180deg, #6b9dff 0%, #0047e7 52%, #0033a8 100%);
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
    background: linear-gradient(180deg, #5e95ff 0%, #0047e7 52%, #0033a8 100%);
  }
`,k0=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`,S0=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
`,C0=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,Rh=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
`,Lh=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size["2xl"]};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`,Nh=l.p`
  margin: ${({theme:e})=>e.spacing[1]} 0 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,z0=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[1]};
`,P0=l.span`
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
`,gs=l.button`
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
`,E0=l.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,M0=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,F0=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,T0=l.div`
  height: 1px;
  margin: 0 ${({theme:e})=>e.spacing[2]};
  background: ${({theme:e})=>e.color.border};
`,R0=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[2]};
`,L0=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,N0=l.button`
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
`,A0=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,_0=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,I0=l.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,O0=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,D0=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,B0=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,H0=l.article`
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
`,U0=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,V0=l.div`
  display: grid;
  gap: 0.15rem;
  min-width: 0;
`,W0=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: baseline;
  min-width: 0;
`,G0=l.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,K0=l.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
`,Q0=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,_i=l.button`
  ${lr};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
`,lb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,cb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,db=l.button`
  ${Mo};
  ${wo};
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[3]};
  text-align: left;
  cursor: pointer;

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({theme:e})=>e.color.primarySoft};
  }
`,ub=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,pb=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,hb=l.iframe`
  width: 100%;
  min-height: 16rem;
  border: 0;
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,fb=l.div`
  display: grid;
  gap: 0.25rem;
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surfaceMuted};
`,mb=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,gb=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.25;
`,yb=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.25;
`,xb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,vb=l.button`
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
`,wb=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,jb=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`,bb=l.span`
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$b=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`,kb=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.color.primary};
`,Sb=l.div`
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
`,Cb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,zb=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.xl};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`,ec=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.3;
`,Pb=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[4]};
  overflow: auto;
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.layout.screenPaddingH};
`,Ah=l.section`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,_h=l.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ih=l.h4`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.1;
`,Oh=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,Eb=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,Y0=l.button`
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
`,Mb=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 1 1 auto;
  width: min(100%, 13.25rem);
  min-width: 0;
`,Fb=l(Y0)`
  flex: 0 0 auto;
  white-space: nowrap;
`,Tb=l.label`
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
`,Rb=l.input`
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
`,Lb=l.span`
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.color.textSoft};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  white-space: nowrap;
  pointer-events: none;
`,Nb=l.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.2;
`;l.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
`;const Ab=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4.4rem, 1fr));
  gap: 0.25rem;
`,_b=l.button`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 0.15rem;
  min-height: 4.8rem;
  padding: 0.35rem 0.2rem;
  border: 1px solid transparent;
  border-radius: ${({theme:e})=>e.radius.xl};
  background: transparent;
  color: ${({theme:e})=>e.color.text};
  cursor: pointer;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({theme:e})=>e.color.surface};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.16);
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-active='true'] ${ja} {
    color: ${({theme:e})=>e.color.primary};
  }

  &[data-active='true'] ${xd} {
    color: ${({theme:e})=>e.color.primary};
  }
`,Ib=l.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.layout.screenPaddingH}
    calc(${({theme:e})=>e.spacing[2]} + env(safe-area-inset-bottom));
  border-top: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  position: sticky;
  bottom: 0;
  z-index: 1;
`,Ob=l.button`
  ${lr};
  flex: 1 1 0;
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
  color: ${({theme:e})=>e.color.text};
`,Dh=l.button`
  ${lr};
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
`,Db=l.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  overflow: visible;
`,Bb=l.article`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  background: transparent;
  border: 0;
  box-shadow: none;
  overflow: visible;
  padding: 0.125rem 0 0.125rem;
`,Hb=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5.75rem;
  padding: 0;
  overflow: hidden;
`,Ub=l.div`
  display: grid;
  gap: 0.25rem;
  padding:
    0.125rem
    calc(${({theme:e})=>e.spacing[1]} + 0.125rem)
    calc(${({theme:e})=>e.spacing[1]} + 0.125rem);
  justify-items: start;
  text-align: left;
`,Vb=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`,Wb=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`,Gb=l.span`
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
`,Kb=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: 0.75rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-wrap: balance;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,Qb=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.65rem;
  line-height: 1.1;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,Yb=l.div`
  display: none;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: flex;
  }
`,na=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.65rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    min-height: 44px;
    padding: 0 ${({theme:e})=>e.spacing[3]};
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,Bh=l.p`
  display: none;
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: block;
  }
`,qb=l.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(20, 30, 52, 0.96), rgba(13, 20, 36, 0.94))":"linear-gradient(180deg, rgba(234, 241, 255, 0.98), rgba(226, 236, 255, 0.96))"};
  border: 1px solid ${({theme:e})=>e.color.border};
  box-shadow: ${({theme:e})=>e.mode==="dark"?e.shadow.sm:"0 12px 24px rgba(0, 71, 231, 0.08)"};
`,Zb=l.article`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  justify-items: start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Xb=l.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
  text-align: left;
`,Jb=l.span`
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
`,e$=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.primary};
  font-size: 0.72rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.05;
  text-align: left;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,t$=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.63rem;
  line-height: 1.15;
  text-align: left;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`,r$=l.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
  overflow: visible;
`,n$=l.article`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: 0.125rem 0 0.125rem;
  background: transparent;
  border: 0;
  box-shadow: none;
  overflow: visible;
`,i$=l.div`
  display: grid;
  gap: 0.25rem;
  padding:
    0.125rem
    calc(${({theme:e})=>e.spacing[1]} + 0.125rem)
    calc(${({theme:e})=>e.spacing[1]} + 0.125rem);
  justify-items: start;
  text-align: left;
`,o$=l.div`
  position: relative;
  min-height: 6rem;
  border-radius: 0;
  background:
    radial-gradient(circle at 18% 30%, rgba(255, 255, 255, 0.55), transparent 16%),
    radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.3), transparent 18%),
    linear-gradient(135deg, rgba(0, 71, 231, 0.12), rgba(0, 71, 231, 0.03));
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0;

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
`,a$=l.span`
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
`,s$=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-size: 0.66rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1.02;
  text-wrap: balance;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.base};
  }
`,l$=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: 0.62rem;
  line-height: 1.02;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.sm};
  }
`,c$=l.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-wrap: wrap;
`,d$=l.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: 0.66rem;
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  line-height: 1;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.lg};
  }
`,u$=l.span`
  color: ${({theme:e})=>e.color.textSoft};
  font-size: 0.5rem;
  line-height: 1;
  text-decoration: line-through;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${({theme:e})=>e.typography.size.xs};
  }
`;l.section`
  padding: 0 0 ${({theme:e})=>e.layout.sectionSpacing};
`;l.div`
  ${hj};
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
`;l(yr)`
  ${lr};
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
`;const p$=l.nav`
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
`,h$=l.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: end;
`,f$=l(Po)`
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
`,m$=l.span`
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
`,tc="/LaFranciaGO/favicon.png",Hh=420,g$=84,rc=e=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e)}`,Uh={"pack-familiar":rc(`
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
  `),"frescura-del-dia":rc(`
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
  `),"asado-especial":rc(`
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
  `)},y$=e=>({"--promo-art":`url("${Uh[e]??Uh["pack-familiar"]}")`}),x$={featured:"Destacados",closest:"Más cercanos",cheapest:"Más baratos",discount:"Mayor descuento"},v$=e=>{const t=e.replace(/\D/g,"");return t?String(Math.max(1,Number.parseInt(t,10)||1)):"1"},w$=e=>`Hasta ${e}km`,nc=(e,...t)=>{const r=Qi(e);return r?t.filter(i=>i!==void 0).join(" ").toLowerCase().includes(r):!0},j$=[{title:"Inicio",subtitle:"Resumen, promos y accesos rápidos",to:"/",icon:wi,end:!0},{title:"Comercios",subtitle:"Buscá por rubro o cerca de tu zona",to:"/comercios",icon:Xe},{title:"Pedidos",subtitle:"Seguimiento de compras y entregas",to:"/pedidos",icon:Kt},{title:"Notificaciones",subtitle:"Alertas y novedades del marketplace",to:"/notificaciones",icon:nt},{title:"Favoritos",subtitle:"Guardados y productos atentos",to:"/favoritos",icon:Fn},{title:"Mi cuenta",subtitle:"Perfil, seguridad y datos",to:"/mi-cuenta",icon:Qe}],b$=[{title:"Publicar comercio",subtitle:"Sumá tu negocio al marketplace",to:"/registro/comercio",icon:sr},{title:"Trabaja con nosotros",subtitle:"Registrate como delivery y cobrá por tus entregas",to:"/trabaja-con-nosotros",icon:$t}],Vh=[{id:"sales",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:ri,items:[{icon:Xe,title:"Nueva venta confirmada",subtitle:"Se acreditó un pedido en Don José.",date:new Date(2026,7,14)},{icon:Kt,title:"Pedido listo para entregar",subtitle:"Retirá el paquete en el comercio.",date:new Date(2026,7,13)},{icon:nt,title:"Promoción aprobada",subtitle:"Tu anuncio quedó visible en el home.",date:new Date(2025,7,14)}]},{id:"orders",title:"Pedidos y entregas",subtitle:"Seguimiento y estado de entregas.",icon:$t,items:[{icon:$t,title:"Reparto en camino",subtitle:"Tu delivery ya salió hacia destino.",date:new Date(2026,7,14)},{icon:Kt,title:"Pedido preparado",subtitle:"El comercio terminó el armado.",date:new Date(2026,7,12)},{icon:Xe,title:"Comercio en espera",subtitle:"Hay una novedad en el local asignado.",date:new Date(2025,7,14)}]},{id:"account",title:"Cuenta y seguridad",subtitle:"Perfil, pagos y accesos.",icon:sr,items:[{icon:Qe,title:"Perfil actualizado",subtitle:"Revisá tus datos personales y foto.",date:new Date(2026,7,14)},{icon:sr,title:"Acceso seguro",subtitle:"Tu cuenta quedó protegida con verificación.",date:new Date(2026,7,11)},{icon:ri,title:"Método de pago listo",subtitle:"Alias o CBU disponible para cobros.",date:new Date(2025,7,14)}]},{id:"promos",title:"Promos y beneficios",subtitle:"Descuentos, alertas y novedades.",icon:nt,items:[{icon:ri,title:"Descuento activado",subtitle:"Hay una promo vigente cerca tuyo.",date:new Date(2026,7,14)},{icon:Fn,title:"Favorito con rebaja",subtitle:"Uno de tus guardados bajó de precio.",date:new Date(2026,7,13)},{icon:nt,title:"Novedad del día",subtitle:"Entró una oferta nueva al carrusel.",date:new Date(2025,7,14)}]}],$$=e=>{const t=new Date,r=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),o=Math.round((r.getTime()-i.getTime())/864e5);if(o===0)return"Hoy";if(o===1)return"Ayer";const a=String(i.getDate()).padStart(2,"0"),s=String(i.getMonth()+1).padStart(2,"0");return i.getFullYear()===r.getFullYear()?`${a}/${s}`:`${a}/${s}/${String(i.getFullYear()).slice(-2)}`};function k$(){var Bu,Hu;const{isDarkMode:e,toggleMode:t}=Yg(),r=As(),i=Mn(),[o,a]=v.useState(""),[s,c]=v.useState("featured"),[d,u]=v.useState("five"),[g,h]=v.useState([]),[x,S]=v.useState({delivery:!1,pickup:!1,openNow:!1}),[j,C]=v.useState(((Bu=Lr[0])==null?void 0:Bu.id)??""),[w,f]=v.useState(!1),[p,y]=v.useState(!1),[b,z]=v.useState("opening"),[R,N]=v.useState(!1),[_,W]=v.useState(!1),[D,me]=v.useState(!1),[pe,Me]=v.useState(""),[_e,Oe]=v.useState(j),[xe,De]=v.useState(((Hu=Lr[0])==null?void 0:Hu.mapQuery)??""),[A,V]=v.useState("1"),[B,se]=v.useState(!1),[P,k]=v.useState(!1),[T,O]=v.useState("opening"),[$,J]=v.useState(null),L=v.useRef(null),he=v.useRef(null),te=v.useRef(null),ne=v.useRef(null),K=v.useRef(null),Fe=v.useRef(null),Ue=v.useRef([]),re=v.useRef(0),Te=v.useRef(null),ue=v.useRef(null),Ve=v.useRef(null),[an,Be]=v.useState(0),[sn,Tr]=v.useState(!1),[yt,G]=v.useState(!1),[ze,Rn]=v.useState(!1),[ve,cr]=v.useState({firstOffset:0,step:0,loopWidth:0}),[Fu,Tu]=v.useState({canScrollLeft:!1,canScrollRight:!1});v.useEffect(()=>{const m=document.body.style.overflow;return(w||p||R||_||D||B||P)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=m}},[_,R,D,p,w,P,B]),v.useLayoutEffect(()=>{const m=K.current;if(!m)return;const M=()=>{document.documentElement.style.setProperty("--home-topbar-height",`${m.offsetHeight}px`)};M();const F=typeof ResizeObserver<"u"?new ResizeObserver(M):null;return F==null||F.observe(m),window.addEventListener("resize",M),()=>{F==null||F.disconnect(),window.removeEventListener("resize",M),document.documentElement.style.removeProperty("--home-topbar-height")}},[]),v.useEffect(()=>{L.current!==null&&(window.cancelAnimationFrame(L.current),L.current=null),he.current!==null&&(window.clearTimeout(he.current),he.current=null);const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(w){if(y(!0),m){z("open");return}z("opening"),L.current=window.requestAnimationFrame(()=>{z("open"),L.current=null});return}if(p){if(m){y(!1),z("opening");return}z("closing"),he.current=window.setTimeout(()=>{y(!1),z("opening"),he.current=null},Hh)}},[p,w]),v.useEffect(()=>()=>{L.current!==null&&window.cancelAnimationFrame(L.current),he.current!==null&&window.clearTimeout(he.current),te.current!==null&&window.cancelAnimationFrame(te.current),ne.current!==null&&window.clearTimeout(ne.current)},[]),v.useEffect(()=>{te.current!==null&&(window.cancelAnimationFrame(te.current),te.current=null),ne.current!==null&&(window.clearTimeout(ne.current),ne.current=null);const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(B){if(k(!0),m){O("open");return}O("opening"),te.current=window.requestAnimationFrame(()=>{O("open"),te.current=null});return}if(P){if(m){k(!1),O("opening");return}O("closing"),ne.current=window.setTimeout(()=>{k(!1),O("opening"),ne.current=null},260)}},[P,B]);const qt=v.useCallback(()=>{f(!1),N(!1),W(!1),me(!1),se(!1),J(null)},[]);v.useEffect(()=>{if(!w&&!R&&!_&&!D&&!B)return;const m=M=>{M.key==="Escape"&&qt()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[_,qt,R,D,w,B]);const le=v.useMemo(()=>Lr.find(m=>m.id===j)??Lr[0],[j]);v.useEffect(()=>{D&&(Me(""),Oe((le==null?void 0:le.id)??""),De((le==null?void 0:le.mapQuery)??""))},[D,le]);const Ln=v.useMemo(()=>Lr.find(m=>m.id===_e)??le,[_e,le]),d1=v.useMemo(()=>{const m=Qi(pe),M=m?Lr.filter(F=>nc(m,F.label,F.detail,F.note,F.mapQuery)):Lr;return M.length>0?M:Lr},[pe]),u1=_e!==(le==null?void 0:le.id)||xe!==((le==null?void 0:le.mapQuery)??""),p1=Number.parseInt(A,10)||1,Lo=Math.max(1,p1),Ru=Math.min(50,Lo),Lu=Lo>50,h1=w$(d==="custom"?Ru:d==="near"?1:d==="twentyFive"?25:5),f1=`${(le==null?void 0:le.label)??"Sin ubicación"} - ${h1}`,Nu=m=>{switch(d){case"near":return m<=1;case"five":return m<=5;case"twentyFive":return m<=25;case"custom":return m<=Ru;default:return m<=5}},No=v.useMemo(()=>{const m=[];return s!=="featured"&&m.push({key:`sort-${s}`,label:x$[s],onRemove:()=>c("featured")}),x.delivery&&m.push({key:"service-delivery",label:"Delivery",onRemove:()=>S(M=>({...M,delivery:!1}))}),x.pickup&&m.push({key:"service-pickup",label:"Retiro",onRemove:()=>S(M=>({...M,pickup:!1}))}),x.openNow&&m.push({key:"service-openNow",label:"Abierto ahora",onRemove:()=>S(M=>({...M,openNow:!1}))}),g.forEach(M=>{const F=An.find(Z=>Z.id===M);F&&m.push({key:`category-${M}`,label:F.name,onRemove:()=>{h(Z=>Z.filter(at=>at!==M))}})}),m},[d,g,x.delivery,x.openNow,x.pickup,s,Lo]),ji=(s==="featured"?0:1)+(d==="five"?0:1)+(x.delivery?1:0)+(x.pickup?1:0)+(x.openNow?1:0)+g.length,Au=!!o.trim()||ji>0?"No se encontraron coincidencias para los filtros actuales.":"No se encontraron coincidencias para este radio de ubicación.";v.useEffect(()=>{const m=Ve.current;if(!m||No.length===0){Tu({canScrollLeft:!1,canScrollRight:!1});return}const M=()=>{const Z=Math.max(0,m.scrollWidth-m.clientWidth),at=m.scrollLeft>2,dr=Z-m.scrollLeft>2;Tu(Tt=>Tt.canScrollLeft===at&&Tt.canScrollRight===dr?Tt:{canScrollLeft:at,canScrollRight:dr})};M(),m.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",M);const F=typeof ResizeObserver<"u"?new ResizeObserver(M):null;return F==null||F.observe(m),()=>{m.removeEventListener("scroll",M),window.removeEventListener("resize",M),F==null||F.disconnect()}},[No.length,Lo,d,g.length,x.delivery,x.openNow,x.pickup,s]);const m1=v.useMemo(()=>{const m=o?An.filter(M=>nc(o,M.name,M.description)):An.slice(0,5);return m.length>0?m.slice(0,5):An.slice(0,5)},[o]),ot=v.useMemo(()=>{const m=wh.filter(M=>nc(o,M.title,M.subtitle,M.store,M.badge));return m.length>0?m:wh},[o]),pl=v.useMemo(()=>[...ot,...ot],[ot]);v.useEffect(()=>{re.current=0,Be(0),Te.current!==null&&(window.cancelAnimationFrame(Te.current),Te.current=null);const m=Fe.current;m&&(m.scrollLeft=0)},[ot]),v.useEffect(()=>{const m=Fe.current;if(!m||pl.length===0||ot.length===0)return;const M=()=>{const F=Ue.current[0],Z=Ue.current[1],at=Ue.current[ot.length];if(!F||!Z||!at)return;const dr=m.getBoundingClientRect(),Tt=F.getBoundingClientRect(),fl=Z.getBoundingClientRect(),bi=at.getBoundingClientRect(),j1=Tt.left-dr.left+m.scrollLeft,Uu=fl.left-Tt.left,Vu=bi.left-Tt.left;Uu>0&&Vu>0&&cr({firstOffset:j1,step:Uu,loopWidth:Vu})};if(M(),typeof ResizeObserver<"u"){const F=new ResizeObserver(M);F.observe(m);const Z=Ue.current[0];return Z&&F.observe(Z),()=>{F.disconnect()}}return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M)}},[pl.length,ot.length,ot]),v.useEffect(()=>{const m=Fe.current;if(!m||ve.step===0||ve.loopWidth===0||ot.length===0)return;const M=()=>{const F=((m.scrollLeft-ve.firstOffset)%ve.loopWidth+ve.loopWidth)%ve.loopWidth,Z=Math.round(F/ve.step)%ot.length;Z!==re.current&&(re.current=Z,Be(Z))};return m.addEventListener("scroll",M,{passive:!0}),()=>{m.removeEventListener("scroll",M)}},[ot.length,ve.firstOffset,ve.loopWidth,ve.step]),v.useEffect(()=>{const m=Fe.current;if(!m||ve.step===0||ve.loopWidth===0||ot.length===0)return;let M=0,F=performance.now();const Z=at=>{const dr=at-F;if(F=at,!(sn||yt||ze)){for(m.scrollLeft+=g$*dr/1e3;m.scrollLeft-ve.firstOffset>=ve.loopWidth;)m.scrollLeft-=ve.loopWidth;const fl=((m.scrollLeft-ve.firstOffset)%ve.loopWidth+ve.loopWidth)%ve.loopWidth,bi=Math.round(fl/ve.step)%ot.length;bi!==re.current&&(re.current=bi,Be(bi))}M=window.requestAnimationFrame(Z)};return M=window.requestAnimationFrame(Z),Te.current=M,()=>{window.cancelAnimationFrame(M),Te.current===M&&(Te.current=null)}},[ze,yt,sn,ve.firstOffset,ve.loopWidth,ve.step,ot.length]);const _u=v.useMemo(()=>{const m=Qi(o);return Fw.filter(F=>{const Z=g.length===0||g.includes(F.categoryId),at=Nu(F.distanceKm),dr=(!x.delivery||F.delivery)&&(!x.pickup||F.pickup)&&(!x.openNow||F.openNow),Tt=!m||[F.name,F.category,F.address].join(" ").toLowerCase().includes(m);return Z&&at&&dr&&Tt}).sort((F,Z)=>{switch(s){case"closest":return F.distanceKm-Z.distanceKm;case"cheapest":return F.etaMin-Z.etaMin;case"discount":return F.rating<Z.rating?1:-1;default:return Z.rating-F.rating||F.distanceKm-Z.distanceKm}})},[d,o,g,x,s]),Iu=v.useMemo(()=>{const m=Qi(o);return Rw.filter(F=>{const Z=g.length===0||g.includes(F.categoryId),at=Nu(F.distanceKm),dr=(!x.delivery||F.delivery)&&(!x.pickup||F.pickup)&&(!x.openNow||F.openNow),Tt=!m||[F.product,F.store].join(" ").toLowerCase().includes(m);return Z&&at&&dr&&Tt}).sort((F,Z)=>{switch(s){case"closest":return F.distanceKm-Z.distanceKm;case"cheapest":return F.price-Z.price;case"discount":return Z.discount-F.discount||F.price-Z.price;default:return Z.discount-F.discount||F.price-Z.price}})},[d,o,g,x,s]),g1=`https://www.google.com/maps?q=${encodeURIComponent(D?xe||(le==null?void 0:le.mapQuery)||"La Francia":(le==null?void 0:le.mapQuery)||"La Francia")}&output=embed`,y1=m=>{m.preventDefault()},hl=m=>{h(M=>M.includes(m)?M.filter(F=>F!==m):[...M,m])},x1=m=>{S(M=>({...M,[m]:!M[m]}))},v1=()=>{c("featured"),u("five"),V("1"),S({delivery:!1,pickup:!1,openNow:!1}),h([])},Ao=m=>{qt(),m(!0)},w1=()=>{qt(),se(!0)},Ou=()=>{if(B||P){qt();return}w1()},Zt=v.useMemo(()=>Vh.find(m=>m.id===$)??null,[$]),Du=v.useCallback((m,M)=>{m.preventDefault(),qt(),window.setTimeout(()=>{i.pathname!==M&&r(M)},Hh)},[qt,i.pathname,r]);return n.jsxs(fj,{children:[n.jsx(mj,{ref:K,children:n.jsxs(gj,{children:[n.jsxs(yj,{children:[n.jsxs(xj,{children:[n.jsx(vj,{type:"button",onClick:()=>Ao(f),"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"home-menu-drawer","aria-expanded":w||p,children:n.jsx(t0,{size:20,"aria-hidden":"true"})}),n.jsx(jj,{"aria-label":"LaFranciaGO",children:n.jsx(ql,{children:n.jsx(Zl,{src:tc,alt:"","aria-hidden":"true"})})})]}),n.jsxs(wj,{"aria-label":"LaFranciaGO",children:[n.jsx(ql,{children:n.jsx(Zl,{src:tc,alt:"","aria-hidden":"true"})}),n.jsxs(bj,{children:[n.jsxs(Xl,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(Jl,{children:"GO"})]}),n.jsx($j,{children:"Todo lo de tu pueblo, en un solo lugar."})]})]}),n.jsxs(u0,{"aria-label":"LaFranciaGO",children:[n.jsxs(Xl,{"aria-hidden":"true",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(Jl,{children:"GO"})]}),n.jsx(p0,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]}),n.jsxs(Sj,{"aria-label":"Acciones rápidas",children:[n.jsx(os,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(Cn,{size:18,"aria-hidden":"true"})}),n.jsx(is,{ref:ue,type:"button",onClick:Ou,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"home-notifications-popover","aria-expanded":B||P,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(yd,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})})]}),n.jsxs(kj,{children:[n.jsx(os,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(Cn,{size:18,"aria-hidden":"true"})}),n.jsx(is,{type:"button",onClick:Ou,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"home-notifications-popover","aria-expanded":B||P,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(Cj,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})})]})]}),n.jsx(zj,{"aria-label":"Navegación principal",children:Pw.map(m=>{const M=m.icon;return n.jsxs(Pj,{to:m.href,children:[n.jsx(Ej,{children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsx("span",{children:m.label})]},m.id)})})]})}),P&&n.jsx(un,{"data-notifications":"true","data-state":T,role:"presentation",onClick:qt,children:n.jsxs(pn,{id:"home-notifications-popover","data-notifications":"true","data-state":T,role:"dialog","aria-modal":"true","aria-labelledby":"home-notifications-title",onClick:m=>m.stopPropagation(),children:[n.jsxs(z0,{children:[Zt?n.jsx(gs,{type:"button",onClick:()=>J(null),"aria-label":"Volver a las notificaciones",children:n.jsx(fd,{size:14,"aria-hidden":"true"})}):n.jsx(P0,{"aria-hidden":"true"}),n.jsxs(E0,{children:[n.jsx(M0,{id:"home-notifications-title",children:(Zt==null?void 0:Zt.title)??"Notificaciones"}),n.jsx(F0,{children:(Zt==null?void 0:Zt.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),n.jsx(gs,{type:"button",onClick:()=>{qt(),r("/notificaciones")},"aria-label":"Configuración de notificaciones",children:n.jsx(i0,{size:14,"aria-hidden":"true"})})]}),n.jsx(T0,{}),n.jsx(R0,{children:Zt?n.jsx(B0,{"aria-label":Zt.title,children:Zt.items.map(m=>{const M=m.icon;return n.jsxs(H0,{children:[n.jsx(U0,{"aria-hidden":"true",children:n.jsx(M,{size:14,"aria-hidden":"true"})}),n.jsxs(V0,{children:[n.jsxs(W0,{children:[n.jsx(G0,{children:m.title}),n.jsx(K0,{children:$$(m.date)})]}),n.jsx(Q0,{children:m.subtitle})]})]},`${Zt.id}-${m.title}`)})}):n.jsx(L0,{"aria-label":"Secciones de notificaciones",children:Vh.map(m=>{const M=m.icon;return n.jsxs(N0,{type:"button",onClick:()=>J(m.id),children:[n.jsx(A0,{"aria-hidden":"true",children:n.jsx(M,{size:16,"aria-hidden":"true"})}),n.jsxs(_0,{children:[n.jsx(I0,{children:m.title}),n.jsx(O0,{children:m.subtitle})]}),n.jsx(D0,{"aria-hidden":"true",children:n.jsx(va,{size:16,"aria-hidden":"true"})})]},m.id)})})})]})}),n.jsxs(Mj,{children:[n.jsx(Fj,{id:"inicio",children:n.jsx(Fi,{children:n.jsxs(Tj,{children:[n.jsxs(Rj,{children:[n.jsx(Lj,{children:n.jsxs(Nj,{onSubmit:y1,children:[n.jsx(jh,{htmlFor:"home-search",children:n.jsxs(bh,{children:[n.jsx(gd,{size:18,"aria-hidden":"true"}),n.jsx($h,{id:"home-search",type:"search",value:o,onChange:m=>a(m.target.value),placeholder:"¿Qué estás buscando hoy?","aria-label":"Buscar productos, comercios o categorías"})]})}),n.jsxs(Aj,{type:"button",onClick:()=>Ao(N),"data-active":R,"aria-label":"Abrir filtros",children:[n.jsx($w,{size:18,"aria-hidden":"true"}),ji>0&&n.jsx(_j,{children:ji})]})]})}),n.jsxs(Hj,{children:[n.jsxs(Uj,{children:[n.jsx(Gt,{size:18,"aria-hidden":"true"}),n.jsx("span",{children:f1})]}),n.jsx(Vj,{type:"button",onClick:()=>Ao(me),children:"Cambiar"})]}),No.length>0&&n.jsxs(Oj,{children:[Fu.canScrollLeft&&n.jsx(kh,{"data-side":"left","aria-hidden":"true",children:n.jsx(fd,{size:14,"aria-hidden":"true"})}),n.jsx(Ij,{ref:Ve,"aria-label":"Filtros activos",children:No.map(m=>n.jsxs(Dj,{type:"button",onClick:m.onRemove,"aria-label":`Quitar filtro ${m.label}`,children:[n.jsx("span",{children:m.label}),n.jsx(Bj,{"aria-hidden":"true",children:n.jsx(dn,{size:10,"aria-hidden":"true"})})]},m.key))}),Fu.canScrollRight&&n.jsx(kh,{"data-side":"right","aria-hidden":"true",children:n.jsx(va,{size:14,"aria-hidden":"true"})})]})]}),n.jsxs(Wj,{"aria-label":"Ofertas patrocinadas",children:[n.jsx(Gj,{ref:Fe,"aria-label":"Carrusel de ofertas patrocinadas",onPointerEnter:()=>Tr(!0),onPointerLeave:()=>Tr(!1),onFocusCapture:()=>Rn(!0),onBlurCapture:m=>{m.currentTarget.contains(m.relatedTarget)||Rn(!1)},onPointerDownCapture:m=>{m.pointerType!=="mouse"&&G(!0)},onPointerUpCapture:()=>G(!1),onPointerCancelCapture:()=>G(!1),children:pl.map((m,M)=>{const F=M>=ot.length;return n.jsxs(Kj,{ref:Z=>{Ue.current[M]=Z},to:m.href,"data-tone":m.tone,"aria-hidden":F,tabIndex:F?-1:0,"aria-label":`${m.title} · ${m.store}`,children:[n.jsxs(Qj,{children:[n.jsx(Yj,{children:m.badge}),n.jsx(qj,{children:m.title}),n.jsx(Zj,{children:m.store}),n.jsx(Xj,{children:m.subtitle})]}),n.jsxs(Jj,{style:y$(m.id),children:[n.jsx(eb,{children:m.imageLabel}),n.jsx(tb,{children:m.discount})]})]},`${m.id}-${M}`)})}),n.jsx(rb,{"aria-label":"Indicadores del carrusel",children:ot.map((m,M)=>n.jsx(nb,{"data-active":M===an},m.id))})]})]})})}),n.jsx(ra,{children:n.jsx(Fi,{children:n.jsxs(ib,{children:[m1.map(m=>{const M=m.icon;return n.jsxs(ob,{type:"button","data-tone":m.tone,"data-active":g.includes(m.id),onClick:()=>hl(m.id),children:[n.jsx(ja,{children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsx(xd,{children:m.name}),n.jsx(Th,{children:m.description})]},m.id)}),n.jsxs(ab,{type:"button",onClick:()=>Ao(W),children:[n.jsx(ja,{children:n.jsx(Eo,{size:18,"aria-hidden":"true"})}),n.jsx(sb,{children:"Ver más"}),n.jsx(Th,{children:"Todas las categorías"})]})]})})}),n.jsx(ra,{children:n.jsx(Fi,{children:n.jsxs(Ch,{children:[n.jsxs(Sh,{children:[n.jsx(Eh,{children:n.jsx(Mh,{children:"Comercios destacados"})}),n.jsx(Fh,{to:"/comercios",children:"Ver todos"})]}),n.jsx(Db,{children:_u.length>0?_u.map(m=>n.jsxs(Bb,{children:[n.jsx(Hb,{children:n.jsx(Gb,{"data-tone":m.tone,children:m.logoLabel})}),n.jsxs(Ub,{children:[n.jsxs(Vb,{children:[n.jsx(Wb,{children:n.jsxs("div",{children:[n.jsx(Kb,{children:m.name}),n.jsx(Qb,{children:m.category})]})}),n.jsx(na,{children:Cw(m.etaMin,m.etaMax)})]}),n.jsx(Bh,{children:m.address}),n.jsx(Bh,{children:hi(m.distanceKm)}),n.jsxs(Yb,{children:[n.jsxs(na,{children:[m.rating.toFixed(1)," ★"]}),n.jsx(na,{children:m.delivery?"Delivery":"Sin delivery"}),n.jsx(na,{children:m.pickup?"Retiro":"Sin retiro"})]})]})]},m.id)):n.jsx(zh,{children:n.jsx(Ph,{children:Au})})})]})})}),n.jsx(ra,{children:n.jsx(Fi,{children:n.jsx(qb,{children:Tw.map(m=>{const M=m.icon;return n.jsxs(Zb,{children:[n.jsx(Jb,{children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(Xb,{children:[n.jsx(e$,{children:m.title}),n.jsx(t$,{children:m.description})]})]},m.id)})})})}),n.jsx(ra,{id:"ofertas",children:n.jsx(Fi,{children:n.jsxs(Ch,{children:[n.jsxs(Sh,{children:[n.jsx(Eh,{children:n.jsx(Mh,{children:"Ofertas cerca tuyo"})}),n.jsx(Fh,{to:"/comercios",children:"Ver todas"})]}),n.jsx(r$,{children:Iu.length>0?Iu.map(m=>n.jsxs(n$,{children:[n.jsx(o$,{"data-tone":m.tone,children:n.jsx(a$,{children:Sw(-m.discount)})}),n.jsxs(i$,{children:[n.jsx(s$,{children:m.product}),n.jsx(l$,{children:m.store}),n.jsxs(c$,{children:[n.jsx(d$,{children:We(m.price)}),n.jsx(u$,{children:We(m.oldPrice)})]})]})]},m.id)):n.jsx(zh,{children:n.jsx(Ph,{children:Au})})})]})})})]}),n.jsx(p$,{"aria-label":"Navegación móvil",children:n.jsx(h$,{children:Ew.map(m=>{const M=m.icon,F=m.id==="orders";return n.jsx("li",{children:n.jsxs(f$,{to:m.href,"data-primary":m.id==="orders",children:[n.jsx(m$,{children:n.jsx(M,{size:F?32:18,"aria-hidden":"true"})}),n.jsx("span",{children:m.label})]})},m.id)})})}),p&&n.jsx(un,{"data-drawer":"true","data-state":b,role:"presentation",onClick:qt,children:n.jsxs(pn,{id:"home-menu-drawer","data-drawer":"true","data-state":b,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:m=>m.stopPropagation(),children:[n.jsxs(m0,{children:[n.jsxs(g0,{"aria-label":"LaFranciaGO",children:[n.jsx(ql,{children:n.jsx(Zl,{src:tc,alt:"","aria-hidden":"true"})}),n.jsx(y0,{children:n.jsxs(Xl,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(Jl,{children:"GO"})]})})]}),n.jsx(_i,{type:"button",onClick:qt,"aria-label":"Cerrar menú",children:n.jsx(dn,{size:18,"aria-hidden":"true"})})]}),n.jsxs(x0,{children:[n.jsxs(as,{children:[n.jsx(ss,{children:"Navegación"}),n.jsx(ls,{"aria-label":"Navegación principal",children:j$.map(m=>{const M=m.icon;return n.jsxs(cs,{to:m.to,end:m.end,onClick:F=>Du(F,m.to),children:[n.jsx(ds,{"aria-hidden":"true",children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(us,{children:[n.jsx(ps,{children:m.title}),n.jsx(hs,{children:m.subtitle})]}),n.jsx(fs,{"aria-hidden":"true",children:n.jsx(es,{size:16,"aria-hidden":"true"})})]},m.to)})})]}),n.jsxs(as,{children:[n.jsx(ss,{children:"Acciones"}),n.jsx(ls,{"aria-label":"Acciones rápidas",children:b$.map(m=>{const M=m.icon;return n.jsxs(cs,{to:m.to,onClick:F=>Du(F,m.to),children:[n.jsx(ds,{"aria-hidden":"true",children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsxs(us,{children:[n.jsx(ps,{children:m.title}),n.jsx(hs,{children:m.subtitle})]}),n.jsx(fs,{"aria-hidden":"true",children:n.jsx(es,{size:16,"aria-hidden":"true"})})]},m.to)})})]}),n.jsx(v0,{children:n.jsxs(w0,{type:"button",onClick:t,role:"switch","aria-checked":e,children:[n.jsx(j0,{"data-active":"true","aria-hidden":"true",children:e?n.jsx(ts,{size:16,"aria-hidden":"true"}):n.jsx(rs,{size:16,"aria-hidden":"true"})}),n.jsxs(k0,{children:[n.jsx(S0,{children:e?"Tema oscuro":"Tema claro"}),n.jsx(C0,{children:"Ajustá el contraste de toda la app."})]}),n.jsxs(b0,{"aria-hidden":"true",children:[n.jsx(ms,{"data-side":"top","data-active":!e,children:n.jsx(rs,{size:12,"aria-hidden":"true"})}),n.jsx($0,{"data-mode":e?"dark":"light"}),n.jsx(ms,{"data-side":"bottom","data-active":e,children:n.jsx(ts,{size:12,"aria-hidden":"true"})})]})]})})]})]})}),R&&n.jsx(un,{"data-filters":"true",role:"presentation",onClick:()=>N(!1),children:n.jsxs(pn,{"data-filters":"true",role:"dialog","aria-modal":"true","aria-labelledby":"home-filters-title",onClick:m=>m.stopPropagation(),children:[n.jsxs(Sb,{children:[n.jsxs(Cb,{children:[n.jsx(zb,{id:"home-filters-title",children:"Filtros"}),n.jsx(ec,{children:ji>0?`${ji} activos · resultados al instante`:"Sin filtros · resultados al instante"})]}),n.jsx(_i,{type:"button",onClick:()=>N(!1),"aria-label":"Cerrar filtros",children:n.jsx(dn,{size:18,"aria-hidden":"true"})})]}),n.jsxs(Pb,{children:[Mw.map(m=>{const M=m.id==="sort"?"Elegí una sola forma de ordenar.":m.id==="service"?"Podés combinar varios criterios.":"Elegí un radio o cargá uno entero.";return n.jsxs(Ah,{children:[n.jsxs(_h,{children:[n.jsxs("div",{children:[n.jsx(Ih,{children:m.label}),n.jsx(Oh,{children:M})]}),n.jsxs(ec,{children:[m.options.length," opciones"]})]}),n.jsx(Eb,{children:m.options.map(F=>{const Z=m.id==="sort"?s===F.id:m.id==="distance"?d===F.id:x[F.id];return m.id==="distance"&&F.id==="custom"?n.jsxs("div",{children:[n.jsxs(Mb,{children:[n.jsx(Fb,{type:"button","data-active":d==="custom","aria-pressed":d==="custom",onClick:()=>u("custom"),children:"Personalizado:"}),n.jsxs(Tb,{"data-error":Lu,htmlFor:"custom-distance-km",children:[n.jsx(Rb,{id:"custom-distance-km",type:"text",inputMode:"numeric",pattern:"[0-9]*",value:A,disabled:d!=="custom","aria-label":"Distancia personalizada en kilómetros",onFocus:()=>u("custom"),onChange:at=>{u("custom"),V(v$(at.target.value))}}),n.jsx(Lb,{children:"km"})]})]}),d==="custom"&&Lu&&n.jsx(Nb,{children:"Intente cambiar la localidad para alcanzar otros negocios"})]},F.id):n.jsx(Y0,{type:"button","data-active":Z,"aria-pressed":Z,onClick:()=>{if(m.id==="sort"){c(F.id);return}if(m.id==="distance"){u(F.id);return}x1(F.id)},children:F.label},F.id)})})]},m.id)}),n.jsxs(Ah,{children:[n.jsxs(_h,{children:[n.jsxs("div",{children:[n.jsx(Ih,{children:"Rubros"}),n.jsx(Oh,{children:"Elegí más de uno y mantené la grilla compacta."})]}),n.jsx(ec,{children:g.length>0?`${g.length} seleccionados`:"Sin selección"})]}),n.jsx(Ab,{children:An.map(m=>{const M=m.icon,F=g.includes(m.id);return n.jsxs(_b,{type:"button","data-active":F,"aria-pressed":F,onClick:()=>hl(m.id),children:[n.jsx(ja,{children:n.jsx(M,{size:18,"aria-hidden":"true"})}),n.jsx(xd,{children:m.name})]},m.id)})})]})]}),n.jsxs(Ib,{children:[n.jsx(Ob,{type:"button",onClick:v1,children:"Limpiar todo"}),n.jsx(Dh,{type:"button",onClick:()=>N(!1),children:"Ver resultados"})]})]})}),_&&n.jsx(un,{role:"presentation",onClick:()=>W(!1),children:n.jsxs(pn,{"data-size":"lg",role:"dialog","aria-modal":"true","aria-labelledby":"home-categories-title",onClick:m=>m.stopPropagation(),children:[n.jsxs(Rh,{children:[n.jsxs("div",{children:[n.jsx(Lh,{id:"home-categories-title",children:"Todas las categorías"}),n.jsx(Nh,{children:"La app arranca con las visibles, pero el catálogo completo queda disponible desde acá."})]}),n.jsx(_i,{type:"button",onClick:()=>W(!1),"aria-label":"Cerrar categorías",children:n.jsx(dn,{size:18,"aria-hidden":"true"})})]}),n.jsx(cb,{children:An.map(m=>{const M=m.icon,F=g.includes(m.id);return n.jsxs(db,{type:"button","data-active":F,onClick:()=>hl(m.id),children:[n.jsxs(ub,{children:[n.jsx(M,{size:16,"aria-hidden":"true"})," ",m.name]}),n.jsx(pb,{children:m.description})]},m.id)})})]})}),D&&n.jsx(un,{role:"presentation",onClick:()=>me(!1),children:n.jsxs(pn,{"data-size":"md",role:"dialog","aria-modal":"true","aria-labelledby":"home-location-title",onClick:m=>m.stopPropagation(),children:[n.jsxs(Rh,{children:[n.jsxs("div",{children:[n.jsx(Lh,{id:"home-location-title",children:"Cambiar ubicación"}),n.jsx(Nh,{children:"Buscá una dirección, elegila y confirmá la actualización."})]}),n.jsx(_i,{type:"button",onClick:()=>me(!1),"aria-label":"Cerrar ubicación",children:n.jsx(dn,{size:18,"aria-hidden":"true"})})]}),n.jsxs(lb,{children:[n.jsxs(fb,{children:[n.jsx(mb,{children:"Dirección actual"}),n.jsx(gb,{children:(le==null?void 0:le.label)??"Sin dirección configurada"}),n.jsx(yb,{children:(le==null?void 0:le.detail)??"Todavía no configuraste una dirección."})]}),n.jsx(jh,{htmlFor:"location-search",children:n.jsxs(bh,{children:[n.jsx(gd,{size:18,"aria-hidden":"true"}),n.jsx($h,{id:"location-search",type:"search",value:pe,onChange:m=>Me(m.target.value),placeholder:"Buscar dirección en Google Maps","aria-label":"Buscar dirección en Google Maps"})]})}),n.jsx(xb,{"aria-label":"Resultados de búsqueda",children:d1.map(m=>{const M=_e===m.id;return n.jsxs(vb,{type:"button","data-active":M,onClick:()=>{Oe(m.id),De(m.mapQuery)},children:[n.jsx(wb,{"aria-hidden":"true",children:n.jsx(Gt,{size:16,"aria-hidden":"true"})}),n.jsxs(jb,{children:[n.jsx(bb,{children:m.label}),n.jsx($b,{children:m.detail})]}),n.jsx(kb,{"aria-hidden":"true",children:n.jsx(va,{size:16,"aria-hidden":"true"})})]},m.id)})}),n.jsx(hb,{title:`Mapa de ${(Ln==null?void 0:Ln.label)??(le==null?void 0:le.label)??"La Francia"}`,src:g1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),n.jsx(Dh,{type:"button",onClick:()=>{C((Ln==null?void 0:Ln.id)??j),me(!1)},disabled:!u1,children:"Actualizar dirección"})]})]})})]})}const S$=[{id:"all",label:"Todo"},{id:"offers",label:"Ofertas"},{id:"nearby",label:"Cerca mío"},{id:"lowest",label:"Más baratos"},{id:"delivery",label:"Delivery"},{id:"pickup",label:"Retiro"}],C$=[{id:"almacen",name:"Almacén",description:"Básicos y reposición diaria",icon:a0},{id:"kiosco",name:"Kiosco",description:"Snacks, bebidas y urgencias",icon:Xe},{id:"bebidas",name:"Bebidas",description:"Gaseosas, aguas y combos",icon:Zg},{id:"panaderia",name:"Panadería",description:"Fresco del día y facturas",icon:Su},{id:"carniceria",name:"Carnicería",description:"Cortes frescos y pedidos por kilo",icon:ku},{id:"verduleria",name:"Verdulería",description:"Frutas, verduras y combos",icon:Jg},{id:"rotiseria",name:"Rotisería",description:"Comidas listas para retirar",icon:l0},{id:"comida",name:"Comida",description:"Platos, viandas y cocina del día",icon:yw},{id:"farmacia",name:"Farmacia",description:"Salud, bienestar y perfumería",icon:zu},{id:"perfumeria",name:"Perfumería",description:"Higiene y cuidado personal",icon:al},{id:"regaleria",name:"Regalería",description:"Detalles y decoración",icon:qg},{id:"ferreteria",name:"Ferretería",description:"Herramientas y materiales",icon:Xg},{id:"indumentaria",name:"Indumentaria",description:"Ropa, calzado y accesorios",icon:o0},{id:"servicios",name:"Servicios",description:"Talleres y asistencia local",icon:c0}],q0=[{id:"pack-familiar",product:"Pack familiar",store:"Almacén Juan",category:"Almacén",price:6890,oldPrice:7800,discount:12,distanceKm:1.2,eta:"32 min",rating:4.8,tags:["Ahorro","Combo","Delivery"],highlight:"Pack ahorro"},{id:"frescura-del-dia",product:"Frescura del día",store:"La Huerta",category:"Verdulería",price:2150,oldPrice:2550,discount:16,distanceKm:1.1,eta:"24 min",rating:4.9,tags:["Verduras","Frutas","Delivery"],highlight:"Fresco hoy"},{id:"asado-especial",product:"Asado especial",store:"La Estancia",category:"Carnicería",price:9750,oldPrice:10900,discount:11,distanceKm:2.1,eta:"28 min",rating:4.8,tags:["Carnicería","Finde","Delivery"],highlight:"Asado de fin de semana"},{id:"coca-cola-225",product:"Coca Cola 2,25 L",store:"Almacén Juan",category:"Bebidas",price:3350,oldPrice:3900,discount:14,distanceKm:1.2,eta:"35 min",rating:4.8,tags:["Bebidas","Oferta","Delivery"],highlight:"Precio destacado"},{id:"yerba-1kg",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",category:"Almacén",price:4800,oldPrice:5250,discount:9,distanceKm:.9,eta:"22 min",rating:4.7,tags:["Almacén","Cerca tuyo","Retiro"],highlight:"Oferta local"},{id:"pan-flauta",product:"Pan flauta x 6",store:"Panadería La Esquina",category:"Panadería",price:750,oldPrice:900,discount:17,distanceKm:1.6,eta:"15 min",rating:4.9,tags:["Pan","Fresco","Retiro"],highlight:"Recién hecho"},{id:"milanesas",product:"Milanesas x kg",store:"Carnicería Central",category:"Carnicería",price:9100,oldPrice:9800,discount:7,distanceKm:2.4,eta:"28 min",rating:4.8,tags:["Carnicería","Delivery","Stock"],highlight:"Mejor precio"},{id:"detergente",product:"Detergente 900 ml",store:"Super Norte",category:"Limpieza",price:2450,oldPrice:2890,discount:15,distanceKm:1.7,eta:"40 min",rating:4.6,tags:["Limpieza","Oferta","Express"],highlight:"Limpieza"},{id:"shampoo",product:"Shampoo 400 ml",store:"Farmacia Centro",category:"Perfumería",price:3950,oldPrice:4500,discount:12,distanceKm:.7,eta:"18 min",rating:4.7,tags:["Perfumería","Cerca tuyo","Retiro"],highlight:"Cuidado personal"}],Z0=[{id:"coca-cola-compare",product:"Coca Cola 2,25 L",category:"Bebidas",badge:"3 negocios cerca tuyo",offers:[{store:"Kiosco La Plaza",price:3350,distanceKm:.9,eta:"22 min",openNow:!0},{store:"Almacén Juan",price:3500,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:3690,distanceKm:1.7,eta:"40 min",openNow:!0}]},{id:"yerba-compare",product:"Yerba mate 1 kg",category:"Almacén",badge:"Comparación de precio",offers:[{store:"Almacén Juan",price:4650,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:4800,distanceKm:1.7,eta:"40 min",openNow:!0},{store:"Kiosco La Plaza",price:4990,distanceKm:.9,eta:"22 min",openNow:!0}]},{id:"pan-compare",product:"Pan flauta x 6",category:"Panadería",badge:"Fresco y listo",offers:[{store:"Panadería La Esquina",price:750,distanceKm:1.6,eta:"15 min",openNow:!0},{store:"Almacén Juan",price:820,distanceKm:1.2,eta:"35 min",openNow:!0},{store:"Super Norte",price:890,distanceKm:1.7,eta:"40 min",openNow:!0}]}],Fo=[{id:"almacen-juan",name:"Almacén Juan",category:"Almacén y bebidas",address:"Centro · La Francia",phone:"+54 3573 400-201",hours:"Lun a sáb 08:00 - 21:30",distanceKm:1.2,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:5e3,summary:"Surtido fuerte en bebidas, limpieza, snacks y básicos para el día a día.",tags:["Bebidas","Limpieza","Snacks"],icon:Xe,featuredProducts:[{id:"a1",name:"Coca Cola 2,25 L",price:3500,badge:"Oferta"},{id:"a2",name:"Yerba mate 1 kg",price:4650},{id:"a3",name:"Galletitas surtidas",price:1250}]},{id:"panaderia-la-esquina",name:"Panadería La Esquina",category:"Panadería artesanal",address:"Av. Principal",phone:"+54 3573 401-122",hours:"Todos los días 07:00 - 13:30 / 17:00 - 21:00",distanceKm:1.6,rating:4.9,openNow:!0,delivery:!1,pickup:!0,minOrder:3e3,summary:"Pan fresco, facturas y productos de horno para retiro rápido.",tags:["Pan","Facturas","Tortas"],icon:Su,featuredProducts:[{id:"p1",name:"Pan flauta x 6",price:750,badge:"Recién hecho"},{id:"p2",name:"Facturas surtidas",price:1900},{id:"p3",name:"Torta de cumpleaños",price:12e3}]},{id:"farmacia-centro",name:"Farmacia Centro",category:"Salud y perfumería",address:"Sector comercial",phone:"+54 3573 402-300",hours:"Lun a dom 08:30 - 22:00",distanceKm:.7,rating:4.7,openNow:!0,delivery:!0,pickup:!0,minOrder:4e3,summary:"Productos de farmacia y perfumería con atención prioritaria.",tags:["Farmacia","Perfumería","Cuidado"],icon:zu,featuredProducts:[{id:"f1",name:"Shampoo 400 ml",price:3950,badge:"Precio bajo"},{id:"f2",name:"Omeprazol 20 mg",price:7150},{id:"f3",name:"Alcohol en gel",price:1850}]},{id:"carniceria-central",name:"Carnicería Central",category:"Cortes y frescos",address:"Barrio norte",phone:"+54 3573 405-115",hours:"Mar a dom 08:00 - 13:30 / 17:30 - 21:00",distanceKm:2.4,rating:4.8,openNow:!0,delivery:!0,pickup:!0,minOrder:8e3,summary:"Cortes frescos, milanesas y pedidos por kilo con atención del día.",tags:["Carne","Fresco","Delivery"],icon:ku,featuredProducts:[{id:"c1",name:"Milanesas x kg",price:9100,badge:"Mejor precio"},{id:"c2",name:"Hamburguesas caseras",price:6200},{id:"c3",name:"Pollo entero",price:5450}]}],To=[{id:"cart-1",product:"Coca Cola 2,25 L",store:"Almacén Juan",price:3500,quantity:2,subtotal:7e3,available:!0,eta:"35 min"},{id:"cart-2",product:"Pan flauta x 6",store:"Panadería La Esquina",price:750,quantity:3,subtotal:2250,available:!0,eta:"15 min"},{id:"cart-3",product:"Yerba mate 1 kg",store:"Kiosco La Plaza",price:4650,quantity:1,subtotal:4650,available:!1,eta:"22 min"}],z$=[{id:"home",label:"Casa",address:"Av. San Martín 123",primary:!0},{id:"work",label:"Trabajo",address:"Ruta 19 km 115",primary:!1}],X0=[{id:"fav-1",name:"Coca Cola 2,25 L",store:"Almacén Juan",price:3500},{id:"fav-2",name:"Yerba mate 1 kg",store:"Kiosco La Plaza",price:4650},{id:"fav-3",name:"Pan flauta x 6",store:"Panadería La Esquina",price:750}],P$=[{id:"orders",label:"Pedidos hoy",value:"28",trend:"+12%"},{id:"sales",label:"Ventas hoy",value:"$182.400",trend:"+8%"},{id:"stock",label:"Productos activos",value:"146",trend:"+5"},{id:"rating",label:"Puntuación",value:"4,8/5",trend:"+0,2"}],E$=[{id:"co-1",customer:"María G.",total:8350,status:"En preparación"},{id:"co-2",customer:"Lucas F.",total:2900,status:"Listo para retirar"},{id:"co-3",customer:"Sofía R.",total:12450,status:"Asignado a delivery"}],M$=[{id:"inv-1",name:"Coca Cola 2,25 L",stock:34,price:3500,status:"Activo"},{id:"inv-2",name:"Yerba mate 1 kg",stock:18,price:4650,status:"Activo"},{id:"inv-3",name:"Limpiador multiuso",stock:9,price:2450,status:"Promoción"}],F$=[{id:"available",label:"Pedidos disponibles",value:"5",help:"Zona centro y norte"},{id:"income",label:"Ganancia estimada",value:"$7.800",help:"Hoy hasta el momento"},{id:"distance",label:"Distancia media",value:"1,8 km",help:"Por pedido"}],T$=[{id:"del-1",store:"Almacén Juan",customer:"María G.",distanceKm:1.4,payout:1200,status:"Asignado"},{id:"del-2",store:"Farmacia Centro",customer:"Lucas F.",distanceKm:.8,payout:1e3,status:"Disponible"},{id:"del-3",store:"Carnicería Central",customer:"Sofía R.",distanceKm:2.2,payout:1500,status:"En camino"}],R$=[{id:"users",label:"Usuarios activos",value:"2.184",help:"Últimos 30 días"},{id:"stores",label:"Comercios",value:"42",help:"18 en revisión"},{id:"commissions",label:"Comisiones",value:"$1,84M",help:"Mes actual"},{id:"deliveries",label:"Entregas",value:"1.290",help:"95% a tiempo"}],L$=[{id:"alert-1",title:"Comercios pendientes de aprobación",description:"Hay 6 negocios listos para publicar su catálogo.",icon:s0},{id:"alert-2",title:"Pagos y comisiones",description:"Se debe revisar la liquidación semanal de 14 pedidos.",icon:r0},{id:"alert-3",title:"Cobertura por zona",description:"Faltan repartidores registrados en el cuadrante norte.",icon:n0},{id:"alert-4",title:"Seguridad operativa",description:"Actividad anómala detectada en un comercio suspendido.",icon:bw}],ic="/LaFranciaGO/favicon.png",Wh=420,N$=260,A$=[{to:"/",title:"Inicio",subtitle:"Portada y promociones",icon:wi,end:!0},{to:"/comercios",title:"Categorías",subtitle:"Navegá por rubros",icon:Eo},{to:"/pedidos",title:"Pedidos",subtitle:"Seguimiento y entregas",icon:Kt},{to:"/favoritos",title:"Favoritos",subtitle:"Guardados para después",icon:Fn},{to:"/mi-cuenta",title:"Cuenta",subtitle:"Perfil y seguridad",icon:Qe}],_$=[{to:"/registro/comercio",title:"Publicar comercio",subtitle:"Sumá tu negocio",icon:Xe},{to:"/trabaja-con-nosotros",title:"Trabaja con nosotros",subtitle:"Registrate como delivery",icon:$t},{to:"/notificaciones",title:"Notificaciones",subtitle:"Alertas y seguimientos",icon:nt}],Gh=[{id:"ventas",title:"Ventas y gestión",subtitle:"Actualizaciones de tus ventas.",icon:Xe,items:[{icon:nt,title:"Nueva venta registrada",subtitle:"Cobro acreditado y listo para revisar.",date:"Hoy"},{icon:Kt,title:"Saldo disponible",subtitle:"Ya podés revisar el resumen del día.",date:"Ayer"}]},{id:"entregas",title:"Pedidos y entregas",subtitle:"Seguimiento de pedidos activos.",icon:Kt,items:[{icon:Gt,title:"Pedido en camino",subtitle:"El repartidor ya salió hacia la dirección.",date:"11/08"},{icon:Xe,title:"Pedido listo para retiro",subtitle:"Podés despacharlo ahora mismo.",date:"12/08"}]},{id:"cercania",title:"Cercanía y ofertas",subtitle:"Alertas cerca de tu ubicación.",icon:Gt,items:[{icon:Fn,title:"Nuevo comercio cerca",subtitle:"Se activó un seguimiento a 2 km.",date:"Hoy"},{icon:nt,title:"Oferta destacada",subtitle:"Descuento activo en productos frecuentes.",date:"14/08/25"}]}],I$=[{to:"/",label:"Inicio",icon:wi},{to:"/comercios",label:"Comercios",icon:Xe},{to:"/pedidos",label:"Pedidos",icon:Kt},{to:"/notificaciones",label:"Notificaciones",icon:nt},{to:"/mi-cuenta",label:"Cuenta",icon:Qe}],O$=[{to:"/",label:"Inicio",icon:wi},{to:"/comercios",label:"Categorías",icon:Eo},{to:"/pedidos",label:"Pedidos",icon:Kt},{to:"/favoritos",label:"Favoritos",icon:Fn},{to:"/mi-cuenta",label:"Cuenta",icon:Qe}];function Yt({children:e,query:t,onQueryChange:r,activeFilter:i,onFilterChange:o,showSearch:a=!0,footerText:s="Navegación principal y accesos por rol."}){const{isDarkMode:c,toggleMode:d}=Yg(),u=As(),g=typeof t=="string"&&typeof r=="function",h=typeof o=="function",x=v.useRef(null),S=v.useRef(null),j=v.useRef(null),C=v.useRef(null),w=v.useRef(null),[f,p]=v.useState(!1),[y,b]=v.useState(!1),[z,R]=v.useState("opening"),[N,_]=v.useState(!1),[W,D]=v.useState(!1),[me,pe]=v.useState("opening"),[Me,_e]=v.useState(null),Oe=k=>{k.preventDefault()},xe=v.useCallback(()=>{p(!1),_(!1),_e(null)},[]),De=v.useCallback(()=>{xe(),p(!0)},[xe]),A=v.useCallback(()=>{if(f||y){xe();return}De()},[xe,y,f,De]),V=v.useCallback(()=>{xe(),_(!0)},[xe]),B=v.useCallback(()=>{if(N||W){xe();return}V()},[xe,W,N,V]);v.useEffect(()=>{const k=document.body.style.overflow;return(f||y||N||W)&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=k}},[y,f,W,N]),v.useLayoutEffect(()=>{const k=x.current;if(!k)return;const T=()=>{document.documentElement.style.setProperty("--marketplace-topbar-height",`${k.offsetHeight}px`)};T();const O=typeof ResizeObserver<"u"?new ResizeObserver(T):null;return O==null||O.observe(k),window.addEventListener("resize",T),()=>{O==null||O.disconnect(),window.removeEventListener("resize",T),document.documentElement.style.removeProperty("--marketplace-topbar-height")}},[]),v.useEffect(()=>{S.current!==null&&(window.cancelAnimationFrame(S.current),S.current=null),j.current!==null&&(window.clearTimeout(j.current),j.current=null);const k=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(f){if(b(!0),k){R("open");return}R("opening"),S.current=window.requestAnimationFrame(()=>{R("open"),S.current=null});return}if(y){if(k){b(!1),R("opening");return}R("closing"),j.current=window.setTimeout(()=>{b(!1),R("opening"),j.current=null},Wh)}},[y,f]),v.useEffect(()=>()=>{S.current!==null&&window.cancelAnimationFrame(S.current),j.current!==null&&window.clearTimeout(j.current),C.current!==null&&window.cancelAnimationFrame(C.current),w.current!==null&&window.clearTimeout(w.current)},[]),v.useEffect(()=>{C.current!==null&&(window.cancelAnimationFrame(C.current),C.current=null),w.current!==null&&(window.clearTimeout(w.current),w.current=null);const k=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(N){if(D(!0),k){pe("open");return}pe("opening"),C.current=window.requestAnimationFrame(()=>{pe("open"),C.current=null});return}if(W){if(k){D(!1),pe("opening");return}pe("closing"),w.current=window.setTimeout(()=>{D(!1),pe("opening"),w.current=null},N$)}},[W,N]);const se=v.useCallback((k,T)=>{k.preventDefault(),xe(),window.setTimeout(()=>{u(T)},Wh)},[xe,u]),P=v.useMemo(()=>Gh.find(k=>k.id===Me)??null,[Me]);return n.jsxs(Lw,{children:[n.jsx(Nw,{ref:x,children:n.jsxs(Aw,{children:[n.jsxs(_w,{children:[n.jsxs(Iw,{children:[n.jsx(Ow,{type:"button",onClick:A,"aria-label":"Abrir menú","aria-haspopup":"dialog","aria-controls":"marketplace-menu-drawer","aria-expanded":f||y,children:n.jsx(t0,{size:20,"aria-hidden":"true"})}),n.jsx(Bw,{"aria-label":"LaFranciaGO",children:n.jsx(Wl,{children:n.jsx(Gl,{src:ic,alt:"","aria-hidden":"true"})})})]}),n.jsxs(Hw,{"aria-label":"LaFranciaGO",children:[n.jsx(Wl,{children:n.jsx(Gl,{src:ic,alt:"","aria-hidden":"true"})}),n.jsxs(Kl,{children:["LaFrancia",n.jsx(Ql,{children:"GO"})]}),n.jsx(d0,{children:"Todo lo de tu pueblo, en un solo lugar."})]}),n.jsxs(u0,{"aria-label":"LaFranciaGO",children:[n.jsxs(Kl,{children:["LaFrancia",n.jsx(Ql,{children:"GO"})]}),n.jsx(p0,{children:`Todo lo de tu pueblo,
en un solo lugar.`})]}),n.jsxs(Dw,{"aria-label":"Acciones rápidas",children:[n.jsx(os,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(Cn,{size:18,"aria-hidden":"true"})}),n.jsx(is,{type:"button",onClick:B,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":N||W,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(yd,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})})]}),n.jsxs(Uw,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"}),"La Francia centro · entrega hoy"]}),n.jsxs(Vw,{children:[n.jsx(os,{to:"/carrito","aria-label":"Abrir carrito",children:n.jsx(Cn,{size:18,"aria-hidden":"true"})}),n.jsx(is,{type:"button",onClick:B,"aria-label":"Abrir notificaciones","aria-haspopup":"dialog","aria-controls":"marketplace-notifications-popover","aria-expanded":N||W,children:n.jsx(nt,{size:18,"aria-hidden":"true"})}),n.jsx(yd,{to:"/mi-cuenta","aria-label":"Abrir mi cuenta",children:n.jsx(Qe,{size:18,"aria-hidden":"true"})}),n.jsx(Yl,{to:"/registro/comercio",children:"Publicar comercio"}),n.jsx(Yl,{to:"/trabaja-con-nosotros",children:"Trabaja con nosotros"}),n.jsx(Yl,{to:"/mi-cuenta",children:"Mi cuenta"})]})]}),n.jsx(rj,{"aria-label":"Navegación principal",children:I$.map(k=>{const T=k.icon;return n.jsxs(nj,{to:k.to,children:[n.jsx(T,{size:16,"aria-hidden":"true"}),k.label]},k.to)})}),a&&g&&n.jsxs(Ww,{onSubmit:Oe,children:[n.jsxs(Gw,{htmlFor:"marketplace-search",children:[n.jsx(Kw,{children:"Buscá productos, comercios o categorías"}),n.jsxs(Qw,{children:[n.jsx(gd,{size:18,"aria-hidden":"true"}),n.jsx(Yw,{id:"marketplace-search",value:t,onChange:k=>r(k.target.value),placeholder:"Coca Cola 3L, pan, farmacia, delivery..."})]})]}),n.jsx(qw,{type:"submit",children:"Buscar"})]}),a&&h&&n.jsx(Zw,{"aria-label":"Filtros rápidos",children:S$.map(k=>n.jsx(Xw,{type:"button",onClick:()=>o(k.id),"data-active":i===k.id,children:k.label},k.id))})]})}),n.jsx(Jw,{children:e}),n.jsx(ij,{"aria-label":"Navegación móvil",children:n.jsx(oj,{children:O$.map(k=>{const T=k.icon;return n.jsx("li",{children:n.jsxs(aj,{to:k.to,"data-primary":k.to==="/pedidos",children:[n.jsx(sj,{children:n.jsx(T,{size:k.to==="/pedidos"?32:18,"aria-hidden":"true"})}),n.jsx("span",{children:k.label})]})},k.to)})})}),y&&n.jsx(un,{"data-drawer":"true","data-state":z,role:"presentation",onClick:xe,children:n.jsxs(pn,{id:"marketplace-menu-drawer","data-drawer":"true","data-state":z,"data-size":"sm",role:"dialog","aria-modal":"true","aria-label":"Menú lateral",onClick:k=>k.stopPropagation(),children:[n.jsxs(m0,{children:[n.jsxs(g0,{"aria-label":"LaFranciaGO",children:[n.jsx(Wl,{children:n.jsx(Gl,{src:ic,alt:"","aria-hidden":"true"})}),n.jsx(y0,{children:n.jsxs(Kl,{"aria-label":"LaFranciaGO",children:[n.jsx("span",{children:"LaFrancia"}),n.jsx(Ql,{children:"GO"})]})})]}),n.jsx(_i,{type:"button",onClick:xe,"aria-label":"Cerrar menú",children:n.jsx(dn,{size:18,"aria-hidden":"true"})})]}),n.jsxs(x0,{children:[n.jsxs(as,{children:[n.jsx(ss,{children:"Navegación"}),n.jsx(ls,{"aria-label":"Navegación principal",children:A$.map(k=>{const T=k.icon;return n.jsxs(cs,{to:k.to,end:k.end,onClick:O=>se(O,k.to),children:[n.jsx(ds,{"aria-hidden":"true",children:n.jsx(T,{size:18,"aria-hidden":"true"})}),n.jsxs(us,{children:[n.jsx(ps,{children:k.title}),n.jsx(hs,{children:k.subtitle})]}),n.jsx(fs,{"aria-hidden":"true",children:n.jsx(es,{size:16,"aria-hidden":"true"})})]},k.to)})})]}),n.jsxs(as,{children:[n.jsx(ss,{children:"Acciones"}),n.jsx(ls,{"aria-label":"Acciones rápidas",children:_$.map(k=>{const T=k.icon;return n.jsxs(cs,{to:k.to,onClick:O=>se(O,k.to),children:[n.jsx(ds,{"aria-hidden":"true",children:n.jsx(T,{size:18,"aria-hidden":"true"})}),n.jsxs(us,{children:[n.jsx(ps,{children:k.title}),n.jsx(hs,{children:k.subtitle})]}),n.jsx(fs,{"aria-hidden":"true",children:n.jsx(es,{size:16,"aria-hidden":"true"})})]},k.to)})})]}),n.jsx(v0,{children:n.jsxs(w0,{type:"button",onClick:d,role:"switch","aria-checked":c,children:[n.jsx(j0,{"data-active":"true","aria-hidden":"true",children:c?n.jsx(ts,{size:16,"aria-hidden":"true"}):n.jsx(rs,{size:16,"aria-hidden":"true"})}),n.jsxs(k0,{children:[n.jsx(S0,{children:c?"Tema oscuro":"Tema claro"}),n.jsx(C0,{children:"Ajustá el contraste de toda la app."})]}),n.jsxs(b0,{"aria-hidden":"true",children:[n.jsx(ms,{"data-side":"top","data-active":!c,children:n.jsx(rs,{size:12,"aria-hidden":"true"})}),n.jsx($0,{"data-mode":c?"dark":"light"}),n.jsx(ms,{"data-side":"bottom","data-active":c,children:n.jsx(ts,{size:12,"aria-hidden":"true"})})]})]})})]})]})}),W&&n.jsx(un,{"data-notifications":"true","data-state":me,role:"presentation",onClick:xe,children:n.jsxs(pn,{id:"marketplace-notifications-popover","data-notifications":"true","data-state":me,role:"dialog","aria-modal":"true","aria-labelledby":"marketplace-notifications-title",onClick:k=>k.stopPropagation(),children:[n.jsxs(z0,{children:[P?n.jsx(gs,{type:"button",onClick:()=>_e(null),"aria-label":"Volver a las notificaciones",children:n.jsx(fd,{size:14,"aria-hidden":"true"})}):n.jsx(P0,{"aria-hidden":"true"}),n.jsxs(E0,{children:[n.jsx(M0,{id:"marketplace-notifications-title",children:(P==null?void 0:P.title)??"Notificaciones"}),n.jsx(F0,{children:(P==null?void 0:P.subtitle)??"Alertas, movimientos y novedades del marketplace"})]}),n.jsx(gs,{type:"button",onClick:()=>{xe(),u("/notificaciones")},"aria-label":"Configuración de notificaciones",children:n.jsx(i0,{size:14,"aria-hidden":"true"})})]}),n.jsx(T0,{}),n.jsx(R0,{children:P?n.jsx(B0,{"aria-label":P.title,children:P.items.map(k=>{const T=k.icon;return n.jsxs(H0,{children:[n.jsx(U0,{"aria-hidden":"true",children:n.jsx(T,{size:14,"aria-hidden":"true"})}),n.jsxs(V0,{children:[n.jsxs(W0,{children:[n.jsx(G0,{children:k.title}),n.jsx(K0,{children:k.date})]}),n.jsx(Q0,{children:k.subtitle})]})]},`${P.id}-${k.title}`)})}):n.jsx(L0,{"aria-label":"Secciones de notificaciones",children:Gh.map(k=>{const T=k.icon;return n.jsxs(N0,{type:"button",onClick:()=>_e(k.id),children:[n.jsx(A0,{"aria-hidden":"true",children:n.jsx(T,{size:14,"aria-hidden":"true"})}),n.jsxs(_0,{children:[n.jsx(I0,{children:k.title}),n.jsx(O0,{children:k.subtitle})]}),n.jsx(D0,{"aria-hidden":"true",children:n.jsx(va,{size:16,"aria-hidden":"true"})})]},k.id)})})})]})}),n.jsx(lj,{children:n.jsxs(cj,{children:[n.jsx(dj,{children:"LaFranciaGO"}),n.jsx(uj,{children:s}),n.jsx(pj,{children:"Oferta, comparación de precios, ubicación cercana, paneles por rol y crecimiento por localidad."}),n.jsx(Q,{children:"Web preparada para GitHub Pages"})]})})]})}const D$=e=>Qi(e),Kh=(e,...t)=>{const r=D$(e);return r?t.filter(i=>i!==void 0).join(" ").toLowerCase().includes(r):!0},J0=e=>q0.find(t=>t.id===e),B$=e=>Fo.find(t=>t.id===e),H$=e=>Fo.find(t=>t.name.toLowerCase()===e.toLowerCase()),U$=e=>{const t=Z0.find(i=>i.id===`${e}-compare`);if(t){const i=[...t.offers].sort((o,a)=>o.price-a.price);return{kind:"comparison",comparison:t,bestOffer:i[0],sortedOffers:i}}const r=J0(e);if(r)return{kind:"offer",offer:r}};l.ul`
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
`;const V$=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;l(V$)`
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
`;const $e=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,dt=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,ft=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,gr=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,nr=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,W$=l.div`
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
`;const sl=l.div`
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
`;const $r=l(we)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,Qh=l(fi)`
  gap: ${({theme:e})=>e.spacing[1]};
  margin-bottom: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    gap: ${({theme:e})=>e.spacing[1]};
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
`,It=l($e)`
  gap: ${({theme:e})=>e.spacing[1]};
`,mi=l(dt)`
  gap: ${({theme:e})=>e.spacing[1]};
`,G$=l(ft)`
  gap: ${({theme:e})=>e.spacing[1]};
`,_t=l(Y)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,K$=l.p`
  margin: 0;
  max-width: 56rem;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
`,Q$=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,Y$=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,q$=(e,t)=>{const r=[...e];switch(t){case"lowest":return r.sort((i,o)=>i.minOrder-o.minOrder);case"nearby":return r.sort((i,o)=>i.distanceKm-o.distanceKm);case"delivery":return r.sort((i,o)=>i.delivery===o.delivery?0:i.delivery?-1:1);case"pickup":return r.sort((i,o)=>i.pickup===o.pickup?0:i.pickup?-1:1);case"offers":return r.sort((i,o)=>o.rating-i.rating);default:return r.sort((i,o)=>o.rating-i.rating)}};function Z$(){const[e,t]=v.useState(""),[r,i]=v.useState("all"),o=v.useMemo(()=>q$(Fo.filter(s=>Kh(e,s.name,s.category,s.summary,s.address,s.tags.join(" "))),r),[r,e]),a=v.useMemo(()=>C$.filter(s=>Kh(e,s.name,s.description)),[e]);return n.jsxs(Yt,{query:e,onQueryChange:t,activeFilter:r,onFilterChange:s=>i(s),footerText:"Directorio de comercios, pensado para buscar por cercanía, categoría y modalidad de entrega.",children:[n.jsx($r,{children:n.jsx(ee,{children:n.jsxs(It,{children:[n.jsx(fe,{children:"Comercios"}),n.jsx(Ce,{children:"Buscá por rubro y cercanía."}),n.jsx(K$,{children:"Compará delivery, retiro y distancia sin perder tiempo."})]})})}),n.jsx($r,{children:n.jsxs(ee,{children:[n.jsxs(Qh,{children:[n.jsx(fe,{children:"Categorías"}),n.jsx(Ce,{children:"Atajo por rubro"}),n.jsx(Ee,{children:"Elegí rápido sin escribir de más."})]}),n.jsx(tj,{children:a.map(s=>{const c=s.icon;return n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(mi,{children:[n.jsx(vo,{children:n.jsx(c,{size:16,"aria-hidden":"true"})}),n.jsx(X,{children:s.name}),n.jsx(q,{children:s.description})]})})},s.id)})})]})}),n.jsx($r,{children:n.jsxs(ee,{children:[n.jsxs(Qh,{children:[n.jsx(fe,{children:"Comercios visibles"}),n.jsx(Ce,{children:"Cercanos y activos"}),n.jsx(Ee,{children:"Estado, distancia y perfil en una sola vista."})]}),n.jsx(ej,{children:o.map(s=>{const c=s.icon;return n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(mi,{children:[n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsxs(G$,{children:[n.jsx(vo,{children:n.jsx(c,{size:16,"aria-hidden":"true"})}),n.jsxs(Y$,{children:[s.rating.toFixed(1)," ★"]})]}),n.jsx(X,{children:s.name}),n.jsx(q,{children:s.category})]}),n.jsx(h0,{children:We(s.minOrder)})]}),n.jsx(q,{children:s.summary}),n.jsxs(Q$,{children:[n.jsx(Q,{children:s.openNow?"Abierto":"Cerrado"}),n.jsx(Q,{children:s.delivery?"Delivery":"Sin delivery"}),n.jsx(Q,{children:s.pickup?"Retiro":"Sin retiro"})]}),n.jsxs(q,{children:[n.jsx(e0,{size:16,"aria-hidden":"true"})," ",s.address," · ",hi(s.distanceKm)]}),n.jsx(q,{children:s.hours}),n.jsx(q,{children:s.phone}),n.jsx(sl,{children:s.tags.map(d=>n.jsx(Q,{children:d},d))}),n.jsx(Pt,{to:`/comercios/${s.id}`,children:"Abrir perfil"})]})})},s.id)})})]})}),n.jsx($r,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(fe,{children:"Qué habilita este directorio"}),n.jsx(Ce,{children:"Comparar y comprar"}),n.jsx(Ee,{children:"Después se conecta con login, carrito y checkout."})]})})})})})]})}const X$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  }
`,J$=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ia=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,ek=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,tk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,rk=l.span`
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
`;function nk(){const{storeId:e=""}=Sg(),t=v.useMemo(()=>B$(e)??Fo[0],[e]);return n.jsxs(Yt,{showSearch:!1,footerText:"Perfil de comercio con catálogo, horarios, contacto y accesos al pedido.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs(X$,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Perfil de comercio"}),n.jsx(Ce,{children:t.name}),n.jsx(Ee,{children:t.summary}),n.jsxs(ft,{children:[n.jsx(rk,{"data-open":t.openNow,children:t.openNow?"Abierto ahora":"Cerrado"}),n.jsxs(Q,{children:[t.rating.toFixed(1)," ★"]}),n.jsx(Q,{children:t.delivery?"Delivery":"Sin delivery"}),n.jsx(Q,{children:t.pickup?"Retiro":"Sin retiro"})]}),n.jsx(sl,{children:t.tags.map(r=>n.jsx(Q,{children:r},r))}),n.jsxs(ft,{children:[n.jsx(Tn,{to:"/carrito",children:"Ir al carrito"}),n.jsx(Pt,{to:"/comercios",children:"Volver al directorio"})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Datos del negocio"}),n.jsx(X,{children:"Información operativa"}),n.jsxs(J$,{children:[n.jsxs(ia,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"}),n.jsxs("span",{children:[t.address," · ",hi(t.distanceKm)]})]}),n.jsxs(ia,{children:[n.jsx(ol,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:t.phone})]}),n.jsxs(ia,{children:[n.jsx(il,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:t.hours})]}),n.jsxs(ia,{children:[n.jsx($t,{size:16,"aria-hidden":"true"}),n.jsxs("span",{children:["Mínimo de compra ",We(t.minOrder)]})]})]}),n.jsxs(tk,{children:[n.jsx(q,{children:"El perfil del comercio deja lista la experiencia para mostrar stock, precio y disponibilidad por producto."}),n.jsx(q,{children:"El siguiente paso natural es conectar este perfil con el panel del negocio."})]})]})})})]})})}),n.jsx(we,{children:n.jsxs(ee,{children:[n.jsxs(fi,{children:[n.jsx(fe,{children:"Catálogo"}),n.jsx(Ce,{children:"Productos destacados del comercio"}),n.jsx(Ee,{children:"Los productos destacados del perfil muestran el catálogo inicial del negocio."})]}),n.jsx(ek,{children:t.featuredProducts.map(r=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(vo,{children:r.badge??"Disponible"}),n.jsx(X,{children:r.name}),n.jsx(Ut,{children:We(r.price)}),n.jsxs(q,{children:[n.jsx(Xe,{size:16,"aria-hidden":"true"})," ",t.name]})]})})},r.id))})]})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Preparado para escalar"}),n.jsx(Ce,{children:"El comercio podrá gestionar catálogo, pedidos y promociones."}),n.jsx(Ee,{children:"Este perfil deja el espacio listo para que después el negocio entre a su panel y administre precios, stock y estados del pedido."})]})})})})})]})}const ik=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  }
`,ok=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,ak=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`;function sk(){const{productId:e=""}=Sg(),t=v.useMemo(()=>U$(e),[e]),r=v.useMemo(()=>{var a;if((t==null?void 0:t.kind)==="comparison")return{name:t.comparison.product,category:t.comparison.category,bestPrice:t.bestOffer.price,bestStore:t.bestOffer.store,comparisonOffers:t.sortedOffers,badge:t.comparison.badge};const o=J0(e)??q0[0];return{name:o.product,category:o.category,bestPrice:o.price,bestStore:o.store,comparisonOffers:((a=Z0.find(s=>s.id===`${o.id}-compare`))==null?void 0:a.offers)??[],badge:o.highlight}},[t,e]),i=H$(r.bestStore);return n.jsxs(Yt,{showSearch:!1,footerText:"Detalle de producto con comparación de precios, comercio asociado y CTA al carrito.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs(ik,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Producto"}),n.jsx(Ce,{children:r.name}),n.jsx(Ee,{children:"Vista de detalle con precio destacado, comercio principal y comparación contra otros negocios cercanos."}),n.jsxs(ft,{children:[n.jsx(vo,{children:r.badge}),n.jsx(Q,{children:r.category}),n.jsxs(Q,{children:[r.comparisonOffers.length||1," opciones cercanas"]})]}),n.jsx(Ut,{children:We(r.bestPrice)}),n.jsxs(q,{children:[n.jsx(Xe,{size:16,"aria-hidden":"true"})," ",r.bestStore]}),n.jsxs(ft,{children:[n.jsxs(Tn,{to:"/carrito",children:[n.jsx(Cn,{size:18,"aria-hidden":"true"}),"Agregar al carrito"]}),n.jsx(Pt,{to:"/comercios",children:"Seguir comprando"})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Ficha rápida"}),n.jsx(X,{children:"Lo que el usuario necesita ver"}),n.jsxs(ok,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:"Precio final"}),n.jsx(q,{children:"Menor precio detectado en el directorio."})]}),n.jsx(vo,{children:n.jsx(ri,{size:16,"aria-hidden":"true"})})]}),n.jsx(Ut,{children:We(r.bestPrice)})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(nr,{children:"Comercio principal"}),n.jsx(q,{children:(i==null?void 0:i.summary)??"La ficha se vincula al comercio seleccionado."}),i&&n.jsxs(ak,{children:[n.jsxs(Q,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"})," ",hi(i.distanceKm)]}),n.jsx(Q,{children:i.openNow?"Abierto":"Cerrado"}),n.jsx(Q,{children:i.delivery?"Delivery":"Retiro"})]})]})})})]})]})})})]})})}),n.jsx(we,{children:n.jsxs(ee,{children:[n.jsxs(fi,{children:[n.jsx(fe,{children:"Comparación"}),n.jsx(Ce,{children:"Más comercios con la misma referencia"}),n.jsx(Ee,{children:"La misma ficha puede mostrar diferentes precios, distancia y disponibilidad."})]}),n.jsx(dt,{children:r.comparisonOffers.length>0?r.comparisonOffers.map(o=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:o.store}),n.jsxs(q,{children:[hi(o.distanceKm)," · ",o.eta," ·"," ",o.openNow?"Abierto":"Cerrado"]})]}),n.jsx(Ut,{children:We(o.price)})]})})},`${r.name}-${o.store}`)):n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(nr,{children:"Solo un comercio de referencia por ahora"}),n.jsx(q,{children:"Cuando existan más comercios con el mismo producto, la ficha mostrará la comparación completa."})]})})})})]})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Pedido"}),n.jsx(Ce,{children:"Listo para sumar al carrito y pasar a checkout."}),n.jsx(Ee,{children:"Este detalle ya está pensado para integrarse con el flujo de compra, pago y seguimiento posterior."})]})})})})})]})}const lk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ck=l(H)`
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
`,oc=l(Y)`
  padding: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,dk=l.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,uk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.65fr);
    align-items: start;
    gap: ${({theme:e})=>e.spacing[3]};
  }
`,pk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`;l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`;const Ti=l.span`
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
`,hk=l.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing[1]};
`,fk=l.div`
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
`,mk=l.span`
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
`,gk=l.span`
  font-size: 0.6875rem;
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  line-height: 1.05;
`,yk=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,xk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: start;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 0.65fr);
  }
`,vk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,wk=l(H)`
  overflow: hidden;
`,jk=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,bk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,$k=l.h2`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.color.text};
`,kk=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Sk=l.span`
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
`,Ck=l.div`
  display: grid;

  > * + * {
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[2]};
    border-top: 1px solid ${({theme:e})=>e.color.border};
  }
`,zk=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Pk=l.div`
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
`,Ek=l.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.extrabold};
  letter-spacing: -0.04em;
`,Mk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,Fk=l.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Tk=l.h3`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.base};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  letter-spacing: -0.02em;
`,Rk=l.span`
  color: ${({theme:e})=>e.color.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
  white-space: nowrap;
`,Lk=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,ac=l.span`
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
    background: rgba(220, 38, 38, 0.12);
    color: ${({theme:e})=>e.color.danger};
  }

  &[data-tone='brand'] {
    background: ${({theme:e})=>e.color.primarySoft};
    color: ${({theme:e})=>e.color.primary};
  }
`,Nk=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Yh=l.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,Ak=l.span`
  color: ${({theme:e})=>e.color.danger};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,_k=l(H)`
  overflow: hidden;
  background:
    ${({theme:e})=>e.mode==="dark"?"linear-gradient(180deg, rgba(107, 157, 255, 0.10) 0%, rgba(17, 26, 46, 0.98) 60%)":"linear-gradient(180deg, rgba(0, 71, 231, 0.05) 0%, rgba(255, 255, 255, 0.98) 60%)"};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    position: sticky;
    top: calc(var(--marketplace-topbar-height, ${({theme:e})=>e.layout.topBarHeight}) + ${({theme:e})=>e.spacing[2]});
    align-self: start;
  }
`,Ik=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ok=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.snug};
`,Dk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[2]};
  border-radius: ${({theme:e})=>e.radius.lg};
  border: 1px solid ${({theme:e})=>e.color.border};
  background: ${({theme:e})=>e.color.surface};
`,Bk=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
  color: ${({theme:e})=>e.color.text};
`,Hk=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,Uk=l.div`
  position: relative;
  height: 0.625rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  overflow: hidden;
`,Vk=l.div`
  width: ${({$value:e})=>`${Math.max(0,Math.min(100,e))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({theme:e})=>e.color.brand} 0%, ${({theme:e})=>e.color.primary} 100%);
  box-shadow: ${({theme:e})=>e.shadow.glow};
  transition: width 220ms ease;
`,Wk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]} 0;
`,Gk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,oa=l.div`
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
`,Kk=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,Qk=l.div`
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
`,Yk=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,qk=xr`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,Zk=l.div`
  ${qk}
`,qh=l(we)`
  padding: ${({theme:e})=>e.spacing[4]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[5]} 0;
  }
`,ll=15e3,e1=200,t1=e=>{const t=e.match(/\d+/);return Number((t==null?void 0:t[0])??0)},Xk=e=>e.split(/\s+/).filter(Boolean).slice(0,2).map(t=>{var r;return((r=t[0])==null?void 0:r.toUpperCase())??""}).join(""),Jk=(e=To)=>{const t=new Map;return e.forEach(r=>{const i=t.get(r.store);if(i){i.items.push(r),i.itemCount+=r.quantity,i.subtotal+=r.subtotal,i.availableCount+=r.available?1:0,i.unavailableCount+=r.available?0:1;return}t.set(r.store,{store:r.store,items:[r],itemCount:r.quantity,subtotal:r.subtotal,etaLabel:r.eta,availableCount:r.available?1:0,unavailableCount:r.available?0:1})}),[...t.values()].map(r=>{const i=r.items.map(s=>t1(s.eta)).filter(Boolean),o=i.length?Math.min(...i):0,a=i.length?Math.max(...i):0;return{...r,etaLabel:i.length<=1||o===a?`${o||0} min`:`${o}–${a} min`}})},r1=Jk(),Ro=To.reduce((e,t)=>e+t.subtotal,0),n1=Ro>=ll?0:1200,e5=Ro+n1+e1,t5=To.reduce((e,t)=>e+t.quantity,0),r5=r1.length,Zh=To.filter(e=>!e.available).length,n5=(()=>{const e=To.map(i=>t1(i.eta)).filter(Boolean),t=e.length?Math.min(...e):0,r=e.length?Math.max(...e):0;return e.length?t===r?`${t} min`:`${t}–${r} min`:"Pendiente"})(),sc=Math.max(ll-Ro,0),i5=Math.min(Ro/ll*100,100),o5=[{label:"Carrito",state:"active"},{label:"Entrega",state:"idle"},{label:"Pago",state:"idle"},{label:"Confirmación",state:"idle"}],a5=[{label:"Tarjeta",icon:vw},{label:"Saldo",icon:al},{label:"Cuotas",icon:ri}],s5=[{label:"Compra protegida",icon:sr},{label:"Sin costos sorpresa",icon:il},{label:"Retiro o delivery por comercio",icon:$t}];function l5(){return n.jsx(Yt,{showSearch:!1,footerText:"Checkout mobile-first con costos claros, stock visible y pago seguro.",children:n.jsxs(lk,{children:[n.jsx(qh,{children:n.jsx(ee,{children:n.jsx(ck,{children:n.jsx(oc,{children:n.jsxs(dk,{children:[n.jsxs(uk,{children:[n.jsxs(pk,{children:[n.jsx(fe,{children:"Carrito"}),n.jsx(Ce,{children:"Revisá tu pedido antes de pagar."}),n.jsx(Ee,{children:"Todo lo importante entra en una sola vista: productos, comercios, costos, stock y una ruta limpia hacia el pago."})]}),n.jsxs(yk,{children:[n.jsxs(Ti,{"data-tone":"brand",children:[n.jsx(Cn,{size:14,"aria-hidden":"true"})," ",t5," unidades"]}),n.jsxs(Ti,{children:[n.jsx(Xe,{size:14,"aria-hidden":"true"})," ",r5," comercios"]}),n.jsxs(Ti,{"data-tone":Zh>0?"warning":"success",children:[n.jsx(pw,{size:14,"aria-hidden":"true"})," ",Zh," sin stock"]}),n.jsxs(Ti,{children:[n.jsx($t,{size:14,"aria-hidden":"true"})," ",n5]})]})]}),n.jsx(hk,{"aria-label":"Progreso de compra",children:o5.map((e,t)=>n.jsxs(fk,{"data-state":e.state,children:[n.jsx(mk,{"data-state":e.state,children:t+1}),n.jsx(gk,{children:e.label})]},e.label))})]})})})})}),n.jsx(qh,{children:n.jsx(ee,{children:n.jsxs(xk,{children:[n.jsx(vk,{children:r1.map(e=>n.jsx(wk,{children:n.jsxs(oc,{children:[n.jsxs(jk,{children:[n.jsxs(bk,{children:[n.jsx($k,{children:e.store}),n.jsxs(kk,{children:[e.itemCount," unidades · ",e.availableCount," confirmadas ·"," ",e.unavailableCount," pendientes"]})]}),n.jsxs(Sk,{children:[n.jsx($t,{size:14,"aria-hidden":"true"})," ",e.etaLabel]})]}),n.jsx(Ck,{children:e.items.map(t=>n.jsxs(zk,{children:[n.jsxs(Pk,{"aria-hidden":"true",children:[n.jsx(Cn,{size:18}),n.jsx(Ek,{children:Xk(t.product)})]}),n.jsxs(Mk,{children:[n.jsxs(Fk,{children:[n.jsxs("div",{style:{minWidth:0},children:[n.jsx(Tk,{children:t.product}),n.jsx(q,{children:t.store})]}),n.jsx(Rk,{children:We(t.subtotal)})]}),n.jsxs(Lk,{children:[n.jsxs(ac,{children:[t.quantity," unid."]}),n.jsxs(ac,{"data-tone":"brand",children:[We(t.price)," c/u"]}),n.jsx(ac,{"data-tone":t.available?"success":"warning",children:t.available?"Disponible":"Stock pendiente"})]}),n.jsxs(Nk,{children:[n.jsxs(Yh,{children:[n.jsx($t,{size:14,"aria-hidden":"true"}),t.eta]}),t.available?n.jsx(Yh,{children:"Listo para sumar al pedido"}):n.jsx(Ak,{children:"Se confirma antes de pagar"})]})]})]},t.id))})]})},e.store))}),n.jsx(_k,{children:n.jsx(oc,{children:n.jsxs(Ik,{children:[n.jsxs("div",{children:[n.jsx(fe,{children:"Resumen"}),n.jsx(X,{children:"Costos claros y pago seguro."}),n.jsx(q,{children:"El total se presenta sin sorpresas y con el envío ya calculado sobre el pedido actual."})]}),n.jsxs(Dk,{children:[n.jsxs(Bk,{children:[n.jsx("span",{children:"Envío gratis"}),n.jsx("strong",{children:sc>0?`${We(sc)} faltan`:"Ya lo alcanzaste"})]}),n.jsx(Uk,{children:n.jsx(Vk,{$value:i5})}),n.jsxs(Hk,{children:["Umbral estimado ",We(ll)," ·"," ",sc>0?"te falta poco para liberarlo":"el envío ya queda liberado"]})]}),n.jsxs(Gk,{children:[n.jsxs(oa,{children:[n.jsx("span",{children:"Subtotal"}),n.jsx("span",{children:We(Ro)})]}),n.jsxs(oa,{children:[n.jsx("span",{children:"Envío estimado"}),n.jsx("span",{children:We(n1)})]}),n.jsxs(oa,{children:[n.jsx("span",{children:"Cargo de servicio"}),n.jsx("span",{children:We(e1)})]}),n.jsxs(oa,{"data-emphasis":"true",children:[n.jsx("strong",{children:"Total estimado"}),n.jsx(Ut,{children:We(e5)})]})]}),n.jsx(Kk,{children:s5.map(e=>{const t=e.icon;return n.jsxs(Qk,{children:[n.jsx(t,{size:16,"aria-hidden":"true"}),n.jsx("span",{children:e.label})]},e.label)})}),n.jsxs(Wk,{children:[n.jsx(Ok,{children:"Sin crear una experiencia pesada: los métodos de pago quedan claros y el siguiente paso prepara dirección y cobro."}),n.jsx(Yk,{children:a5.map(e=>{const t=e.icon;return n.jsxs(Ti,{"data-tone":"brand",children:[n.jsx(t,{size:14,"aria-hidden":"true"}),e.label]},e.label)})})]}),n.jsxs(Zk,{children:[n.jsx(Tn,{to:"/mi-cuenta",children:"Continuar al pago"}),n.jsx(Pt,{to:"/comercios",children:"Seguir comprando"})]})]})})})]})})})]})})}const Xh=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }
`,Jh=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,c5=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
`,d5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,u5=Fo.filter(e=>X0.some(t=>t.store.toLowerCase()===e.name.toLowerCase()));function p5(){return n.jsxs(Yt,{showSearch:!1,footerText:"Favoritos y alertas rápidas para guardar y reordenar.",children:[n.jsx($r,{children:n.jsx(ee,{children:n.jsxs(It,{children:[n.jsx(fe,{children:"Favoritos"}),n.jsx(Ce,{children:"Guardados y alertas."}),n.jsx(Ee,{children:"Seguí ofertas, comercios y cambios de precio sin perder tiempo."})]})})}),n.jsx($r,{children:n.jsx(ee,{children:n.jsxs(Xh,{children:[n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(X,{children:"Productos"}),n.jsx(Jh,{children:X0.map(e=>n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(mi,{children:[n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:e.name}),n.jsx(q,{children:e.store})]}),n.jsx(Ut,{children:We(e.price)})]}),n.jsxs(c5,{children:[n.jsxs(Q,{children:[n.jsx(Fn,{size:16,"aria-hidden":"true"})," Guardado"]}),n.jsxs(Q,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Campanita activa"]})]})]})})},e.id))})]})})}),n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(X,{children:"Comercios"}),n.jsx(Jh,{children:u5.map(e=>n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(mi,{children:[n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:e.name}),n.jsx(q,{children:e.category})]}),n.jsxs(Q,{children:[e.rating.toFixed(1)," ★"]})]}),n.jsx(q,{children:e.summary}),n.jsxs(sl,{children:[n.jsx(Q,{children:e.delivery?"Delivery":"Sin delivery"}),n.jsx(Q,{children:e.pickup?"Retiro":"Sin retiro"})]})]})})},e.id))})]})})})]})})}),n.jsx($r,{children:n.jsx(ee,{children:n.jsxs(Xh,{children:[n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(X,{children:"Alertas"}),n.jsx(q,{children:"Activá avisos de precio, stock o promo en lo que más mirás."}),n.jsxs(d5,{children:[n.jsxs(Q,{children:[n.jsx(Kt,{size:16,"aria-hidden":"true"})," Coca Cola 3L disponible"]}),n.jsxs(Q,{children:[n.jsx(Xe,{size:16,"aria-hidden":"true"})," Nuevas promos en La Huerta"]}),n.jsxs(Q,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Avisos por cambio de precio"]})]}),n.jsxs(ft,{children:[n.jsx(Tn,{to:"/notificaciones",children:"Configurar alertas"}),n.jsx(Pt,{to:"/comercios",children:"Seguir comprando"})]})]})})}),n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(X,{children:"Próxima compra"}),n.jsx(q,{children:"Después conectamos historial, listas y reorden automático."})]})})})]})})})]})}const cl=xr`
  background: ${({theme:e})=>e.color.surface};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  box-shadow: ${({theme:e})=>e.shadow.sm};
`,h5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  }
`,dl=l.div`
  ${cl}
  padding: ${({theme:e})=>e.layout.cardPadding};
`,ul=l.div`
  ${cl}
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,xn=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,ae=l.label`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,ie=l.span`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.semibold};
`,jo=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,ce=l.input`
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
`,bo=l.select`
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
`,i1=l.textarea`
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
`,Lt=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;const ba=l.button`
  ${cl}
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
`,$a=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,ka=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  line-height: 1.35;
`,Yi=l.label`
  ${cl}
  padding: ${({theme:e})=>e.layout.cardPadding};
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
`,qi=l.span`
  color: ${({theme:e})=>e.color.text};
  font-size: ${({theme:e})=>e.typography.size.sm};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,Zi=l.span`
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
`,Mu=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[2]};
`,o1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,a1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,s1=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ot=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
`,Dt=l.span`
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
`;const l1=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`,f5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
`,m5=l.div`
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
`,g5=l.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
`,y5=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.brand};
  color: ${({theme:e})=>e.color.onPrimary};
  box-shadow: ${({theme:e})=>e.shadow.glow};
`,x5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0;
`,v5=l.h1`
  margin: 0;
  color: ${({theme:e})=>e.color.text};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: clamp(1.35rem, 4vw, 2rem);
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  letter-spacing: -0.04em;
`,w5=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.4;
`,j5=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing[1]};
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
`;const b5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,$5=l(dl)`
  padding: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
  }
`,k5=l(ul)`
  padding: ${({theme:e})=>e.spacing[2]};
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]};
    gap: ${({theme:e})=>e.spacing[2]};
  }
`;function S5(){const e=t=>{t.preventDefault()};return n.jsxs(Yt,{showSearch:!1,footerText:"Perfil del usuario con Google login, seguridad y direcciones guardadas.",children:[n.jsx($r,{children:n.jsx(ee,{children:n.jsxs(m5,{children:[n.jsxs(g5,{children:[n.jsx(y5,{"aria-hidden":"true",children:n.jsx(Qe,{size:22,"aria-hidden":"true"})}),n.jsxs(x5,{children:[n.jsx(fe,{children:"Perfil"}),n.jsx(v5,{children:"Cuenta personal"}),n.jsx(w5,{children:"Datos listos para pedidos, entregas, pagos y seguridad."})]})]}),n.jsxs(j5,{children:[n.jsx(Q,{children:"Google login"}),n.jsx(Q,{children:"Foto de perfil"}),n.jsx(Q,{children:"Direcciones"}),n.jsx(Q,{children:"Notificaciones"})]})]})})}),n.jsx($r,{children:n.jsx(ee,{children:n.jsxs(f5,{children:[n.jsx($5,{children:n.jsx("form",{onSubmit:e,children:n.jsxs(It,{children:[n.jsx(X,{children:"Datos personales"}),n.jsx(q,{children:"Completá tu perfil para pedidos, entregas, seguridad y cobros."}),n.jsxs(ns,{type:"button",children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Sincronizar con Google"]}),n.jsxs(xn,{children:[n.jsxs(ae,{htmlFor:"profile-name",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Nombre"]}),n.jsx(ce,{id:"profile-name",type:"text",placeholder:"Nicolás"})]}),n.jsxs(ae,{htmlFor:"profile-lastname",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Apellido"]}),n.jsx(ce,{id:"profile-lastname",type:"text",placeholder:"Eliceche"})]}),n.jsxs(ae,{htmlFor:"profile-email",children:[n.jsxs(ie,{children:[n.jsx(Cu,{size:16,"aria-hidden":"true"}),"Email"]}),n.jsx(ce,{id:"profile-email",type:"email",placeholder:"usuario@correo.com"})]}),n.jsxs(ae,{htmlFor:"profile-phone",children:[n.jsxs(ie,{children:[n.jsx(ol,{size:16,"aria-hidden":"true"}),"Teléfono"]}),n.jsx(ce,{id:"profile-phone",type:"tel",placeholder:"+54 3573 400-201"})]}),n.jsxs(ae,{htmlFor:"profile-address",children:[n.jsxs(ie,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"}),"Dirección principal"]}),n.jsx(ce,{id:"profile-address",type:"text",placeholder:"Av. San Martín 123"})]}),n.jsxs(ae,{htmlFor:"profile-area",children:[n.jsxs(ie,{children:[n.jsx(al,{size:16,"aria-hidden":"true"}),"Barrio / zona"]}),n.jsxs(bo,{id:"profile-area",defaultValue:"centro",children:[n.jsx("option",{value:"centro",children:"Centro"}),n.jsx("option",{value:"norte",children:"Barrio Norte"}),n.jsx("option",{value:"ruta19",children:"Ruta 19"})]})]}),n.jsxs(ae,{htmlFor:"profile-birthdate",children:[n.jsx(ie,{children:"Fecha de nacimiento"}),n.jsx(ce,{id:"profile-birthdate",type:"date"})]}),n.jsxs(ae,{htmlFor:"profile-language",children:[n.jsx(ie,{children:"Idioma"}),n.jsxs(bo,{id:"profile-language",defaultValue:"es",children:[n.jsx("option",{value:"es",children:"Español"}),n.jsx("option",{value:"en",children:"English"})]})]})]}),n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(X,{children:"Foto de perfil"}),n.jsxs(Yi,{htmlFor:"profile-photo",children:[n.jsxs(qi,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"})," Subí tu foto de perfil"]}),n.jsx(Zi,{children:"PNG, JPG o WebP. Esto mejora el reconocimiento en pedidos y soporte."}),n.jsx(ce,{id:"profile-photo",type:"file",accept:"image/*"})]})]})})}),n.jsxs(ae,{htmlFor:"profile-notes",children:[n.jsx(ie,{children:"Notas de entrega"}),n.jsx(i1,{id:"profile-notes",placeholder:"Portón azul, tocar timbre, dejar en recepción..."}),n.jsx(jo,{children:"Útil para delivery, retiro y pedidos frecuentes."})]}),n.jsxs(Mu,{children:[n.jsx(ns,{type:"submit",children:"Guardar cambios"}),n.jsx(Pt,{to:"/notificaciones",children:"Ajustar alertas"})]})]})})}),n.jsx(k5,{children:n.jsxs(It,{children:[n.jsxs(It,{children:[n.jsx(X,{children:"Seguridad"}),n.jsx(q,{children:"Recuperación rápida, autenticación simple y control de sesión."}),n.jsxs(b5,{children:[n.jsxs(ba,{type:"button","data-active":!0,children:[n.jsxs($a,{children:[n.jsx(sr,{size:16,"aria-hidden":"true"})," Autenticación segura"]}),n.jsx(ka,{children:"Google activo y listo para sumar nuevas opciones."})]}),n.jsxs(ba,{type:"button","data-active":!1,children:[n.jsxs($a,{children:[n.jsx(ww,{size:16,"aria-hidden":"true"})," Cambiar contraseña"]}),n.jsx(ka,{children:"Pedido de seguridad para accesos sensibles."})]}),n.jsxs(ba,{type:"button","data-active":!0,children:[n.jsxs($a,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Alertas activas"]}),n.jsx(ka,{children:"Push y email para pedidos, ofertas y stock."})]})]})]}),n.jsx(H,{children:n.jsx(_t,{children:n.jsxs(It,{children:[n.jsx(X,{children:"Direcciones guardadas"}),n.jsx(mi,{children:z$.map(t=>n.jsx(H,{children:n.jsx(_t,{children:n.jsx(mi,{children:n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:t.label}),n.jsx(q,{children:t.address})]}),t.primary&&n.jsx(Q,{children:"Principal"})]})})})},t.id))})]})})})]})})]})})})]})}const C5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
`,lc=l.section`
  padding: ${({theme:e})=>e.spacing[2]} 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[3]} 0;
  }
`,z5=l.div`
  display: grid;
  gap: 0.15rem;
`,P5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
`,cc=l(ba)`
  min-height: 0;
  padding: ${({theme:e})=>e.spacing[2]};
  gap: 0.25rem;
  text-align: center;
  justify-items: center;
  align-content: center;
`,dc=l($a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  font-size: ${({theme:e})=>e.typography.size.xs};
`,uc=l(ka)`
  text-align: center;
  font-size: 0.6875rem;
  line-height: 1.25;
`,E5=l(ce)`
  min-height: 2.75rem;
  padding: 0 ${({theme:e})=>e.spacing[2]};
`,M5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};
  max-height: min(23rem, 52vh);
  overflow-y: auto;
  padding-right: 0.15rem;
  overscroll-behavior: contain;
  scrollbar-width: thin;
`,F5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[1]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,T5=l(Y)`
  padding: 0.55rem;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: calc(${({theme:e})=>e.layout.cardPadding} + 2px);
  }
`,R5=l.span`
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
`,L5=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: ${({theme:e})=>e.radius.md};
  background: ${({theme:e})=>e.color.primarySoft};
  color: ${({theme:e})=>e.color.primary};
  flex: 0 0 auto;
`,N5=l.button`
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
`,A5=l.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.bottomNav+10};
  display: grid;
  place-items: center;
  padding: ${({theme:e})=>e.spacing[3]};
  background: rgba(5, 8, 22, 0.18);
`,_5=l.div`
  width: min(100%, 22rem);
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: ${({theme:e})=>e.radius.xl};
  background: ${({theme:e})=>e.color.surface};
  box-shadow: ${({theme:e})=>e.shadow.lg};
`,I5=l.h3`
  margin: 0;
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.size.lg};
  line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  color: ${({theme:e})=>e.color.text};
`,O5=l.p`
  margin: 0;
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.sm};
  line-height: 1.35;
`,D5=l.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[2]};
`,ef=l.button`
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
`,tf=l(Y)`
  padding: calc(${({theme:e})=>e.layout.cardPadding} + 4px);
`,pc=l.span`
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
`,B5={inmediato:"Alertas inmediatas",diario:"Resumen diario",semanal:"Resumen semanal"},H5=[{id:"w1",title:"Coca Cola 3L",scope:"Producto",alert:"Cuando hay stock",tone:"stock",icon:Kt},{id:"w2",title:"La Huerta",scope:"Comercio",alert:"Baja de precio",tone:"price",icon:Xe},{id:"w3",title:"Asado Especial",scope:"Oferta",alert:"Nueva oferta",tone:"offer",icon:Gt},{id:"w4",title:"Verduras frescas",scope:"Categoría",alert:"Nueva promo",tone:"promo",icon:il}];function U5(){const[e,t]=v.useState(!0),[r,i]=v.useState(!0),[o,a]=v.useState("inmediato"),[s,c]=v.useState(""),[d,u]=v.useState(()=>[...H5]),[g,h]=v.useState(null),x=v.useMemo(()=>{const w=s.trim().toLowerCase();return w?d.filter(f=>[f.title,f.scope,f.alert].join(" ").toLowerCase().includes(w)):d},[d,s]),S=e?"success":"danger",j=r?"success":"danger",C=()=>{g&&(u(w=>w.filter(f=>f.id!==g.id)),h(null))};return v.useEffect(()=>{if(!g)return;const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=w}},[g]),n.jsxs(Yt,{showSearch:!1,footerText:"Notificaciones push y email por producto, comercio o promo específica.",children:[n.jsx(lc,{children:n.jsx(ee,{children:n.jsxs(z5,{children:[n.jsx(fe,{children:"Notificaciones"}),n.jsx(Ce,{children:"Campanitas por producto, comercio y oferta."}),n.jsx(Ee,{children:"Definimos qué querés seguir, cómo querés enterarte y con qué urgencia se dispara la alerta."})]})})}),n.jsx(lc,{children:n.jsx(ee,{children:n.jsxs(C5,{children:[n.jsx(dl,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Canales activos"}),n.jsx(q,{children:"Push para avisos urgentes y email para resúmenes, campañas o recordatorios."}),n.jsxs(P5,{children:[n.jsxs(cc,{type:"button","data-active":e,onClick:()=>t(w=>!w),children:[n.jsxs(dc,{children:[n.jsx(nt,{size:16,"aria-hidden":"true"})," Push"]}),n.jsx(uc,{children:"Notificaciones instantáneas en móvil y web."})]}),n.jsxs(cc,{type:"button","data-active":r,onClick:()=>i(w=>!w),children:[n.jsxs(dc,{children:[n.jsx(Cu,{size:16,"aria-hidden":"true"})," Email"]}),n.jsx(uc,{children:"Alertas, resúmenes y campañas por correo."})]})]}),n.jsxs($e,{children:[n.jsx(X,{children:"Frecuencia de aviso"}),n.jsx(F5,{children:[{id:"inmediato",label:"Alertas inmediatas",text:"Reacción al instante"},{id:"diario",label:"Resumen diario",text:"Ordenado por prioridad"},{id:"semanal",label:"Resumen semanal",text:"Para seguimiento general"}].map(w=>n.jsxs(cc,{type:"button","data-active":o===w.id,onClick:()=>a(w.id),children:[n.jsx(dc,{children:w.label}),n.jsx(uc,{children:w.text})]},w.id))})]})]})}),n.jsxs(ul,{children:[n.jsx(X,{children:"Seguimientos activos"}),n.jsx(q,{children:"Buscá lo que querés seguir y mantené todo ordenado desde una sola pantalla."}),n.jsxs(ae,{htmlFor:"watch-search",children:[n.jsx(ie,{children:"Buscar seguimiento"}),n.jsx(E5,{id:"watch-search",type:"search",value:s,onChange:w=>c(w.target.value),placeholder:"Producto, comercio o promo"}),n.jsx(jo,{children:"Ejemplo: Coca Cola 3L, La Huerta o Asado Especial."})]}),n.jsx(M5,{children:x.map(w=>{const f=w.icon;return n.jsx(H,{children:n.jsx(T5,{children:n.jsxs(dt,{children:[n.jsxs(gr,{children:[n.jsxs(W$,{children:[n.jsx(L5,{"aria-hidden":"true",children:n.jsx(f,{size:16,"aria-hidden":"true"})}),n.jsxs("div",{children:[n.jsx(nr,{children:w.title}),n.jsx(q,{children:w.scope})]})]}),n.jsx(N5,{type:"button",onClick:()=>h(w),"aria-label":`Cancelar alerta de ${w.title}`,children:n.jsx(dn,{size:12,"aria-hidden":"true"})})]}),n.jsx(R5,{"data-tone":w.tone,children:w.alert})]})})},w.id)})})]})]})})}),n.jsx(lc,{children:n.jsx(ee,{children:n.jsxs(h5,{children:[n.jsx(H,{children:n.jsx(tf,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Qué recomendamos activar"}),n.jsxs(o1,{children:[n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Push para productos puntuales como Coca Cola 3L o promociones flash."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Email para resúmenes diarios de comercios y categorías favoritas."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Alertas inmediatas cuando el stock vuelve o un comercio publica una oferta."})]})]})]})})}),n.jsx(H,{children:n.jsx(tf,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Estado actual"}),n.jsxs(ft,{children:[n.jsx(pc,{"data-tone":S,children:e?"Push activo":"Push inactivo"}),n.jsx(pc,{"data-tone":j,children:r?"Email activo":"Email inactivo"}),n.jsx(pc,{"data-tone":"info",children:B5[o]})]}),n.jsx(q,{children:"Esta base deja listo el panel para conectar backend, web push y email marketing."})]})})})]})})}),g&&n.jsx(A5,{role:"presentation",onClick:()=>h(null),children:n.jsxs(_5,{role:"dialog","aria-modal":"true","aria-labelledby":"notification-remove-title",onClick:w=>w.stopPropagation(),children:[n.jsx(I5,{id:"notification-remove-title",children:"Eliminar alerta"}),n.jsxs(O5,{children:["¿Seguro/a que deseas eliminar esta alerta de ",g.title,"? Ya no vas a recibir avisos de este seguimiento."]}),n.jsxs(D5,{children:[n.jsx(ef,{type:"button",onClick:()=>h(null),children:"Cancelar"}),n.jsx(ef,{type:"button","data-variant":"primary",onClick:C,children:"Eliminar"})]})]})})]})}const V5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.9fr);
  }
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;const W5=["Nombre comercial","Instagram/Facebook","Horario de atención","Zona de delivery","Métodos de pago","Descripción del negocio","WhatsApp de ventas","Fotos adicionales de catálogo"],G5=[{id:"step-1",title:"Datos legales",text:"Validamos CUIT/CUIL, razón social y dirección."},{id:"step-2",title:"Branding",text:"Subís logo, foto de perfil y nombre comercial."},{id:"step-3",title:"Publicación",text:"Pagás el alta y activás tu cuenta para aparecer."}];function K5(){const e=t=>{t.preventDefault()};return n.jsxs(Yt,{showSearch:!1,footerText:"Alta de comercio con campos obligatorios y sugerencias para crecer con mejores perfiles.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Alta de comercio"}),n.jsx(Ce,{children:"Formularios preparados para publicar y cobrar."}),n.jsx(Ee,{children:"Pedimos lo mínimo obligatorio para dejar al comercio listo y sumamos campos opcionales para mejorar presencia, soporte y conversión."})]})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsxs(V5,{children:[n.jsx(dl,{children:n.jsx("form",{onSubmit:e,children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Datos obligatorios"}),n.jsxs(xn,{children:[n.jsxs(ae,{htmlFor:"business-tax",children:[n.jsxs(ie,{children:[n.jsx(md,{size:16,"aria-hidden":"true"}),"CUIT / CUIL"]}),n.jsx(ce,{id:"business-tax",type:"text",placeholder:"20-12345678-9",required:!0}),n.jsx(jo,{children:"Validación fiscal para publicar como comercio."})]}),n.jsxs(ae,{htmlFor:"business-name",children:[n.jsxs(ie,{children:[n.jsx(gw,{size:16,"aria-hidden":"true"}),"Razón social"]}),n.jsx(ce,{id:"business-name",type:"text",placeholder:"La Huerta S.A.",required:!0})]}),n.jsxs(ae,{htmlFor:"business-address",children:[n.jsxs(ie,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"}),"Dirección"]}),n.jsx(ce,{id:"business-address",type:"text",placeholder:"Av. Principal 123",required:!0})]}),n.jsxs(ae,{htmlFor:"business-phone",children:[n.jsxs(ie,{children:[n.jsx(ol,{size:16,"aria-hidden":"true"}),"Teléfono"]}),n.jsx(ce,{id:"business-phone",type:"tel",placeholder:"+54 3573 400-201",required:!0})]}),n.jsxs(ae,{htmlFor:"business-email",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Email"]}),n.jsx(ce,{id:"business-email",type:"email",placeholder:"ventas@lahuerta.com",required:!0})]}),n.jsxs(ae,{htmlFor:"business-category",children:[n.jsxs(ie,{children:[n.jsx(Eo,{size:16,"aria-hidden":"true"}),"Rubro principal"]}),n.jsxs(bo,{id:"business-category",defaultValue:"verduleria",children:[n.jsx("option",{value:"verduleria",children:"Verdulería"}),n.jsx("option",{value:"almacen",children:"Almacén"}),n.jsx("option",{value:"bebidas",children:"Bebidas"}),n.jsx("option",{value:"carniceria",children:"Carnicería"}),n.jsx("option",{value:"panaderia",children:"Panadería"}),n.jsx("option",{value:"farmacia",children:"Farmacia"})]})]}),n.jsxs(ae,{htmlFor:"business-password",children:[n.jsxs(ie,{children:[n.jsx(sr,{size:16,"aria-hidden":"true"}),"Contraseña"]}),n.jsx(ce,{id:"business-password",type:"password",placeholder:"••••••••",required:!0})]}),n.jsxs(ae,{htmlFor:"business-password-repeat",children:[n.jsxs(ie,{children:[n.jsx(sr,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),n.jsx(ce,{id:"business-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Foto de perfil / logo"}),n.jsxs(Yi,{htmlFor:"business-logo",children:[n.jsxs(qi,{children:[n.jsx(wa,{size:16,"aria-hidden":"true"})," Subí tu logo o foto de perfil"]}),n.jsx(Zi,{children:"PNG, JPG o WebP. Idealmente cuadrado y con fondo limpio."}),n.jsx(ce,{id:"business-logo",type:"file",accept:"image/*"})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Opcionales recomendados"}),n.jsx(q,{children:"Estos campos mejoran el perfil, el SEO interno y el soporte con clientes."}),n.jsxs(xn,{children:[n.jsxs(ae,{htmlFor:"business-display-name",children:[n.jsx(ie,{children:"Nombre comercial"}),n.jsx(ce,{id:"business-display-name",type:"text",placeholder:"La Huerta"})]}),n.jsxs(ae,{htmlFor:"business-whatsapp",children:[n.jsx(ie,{children:"WhatsApp de ventas"}),n.jsx(ce,{id:"business-whatsapp",type:"tel",placeholder:"+54 3573 400-201"})]}),n.jsxs(ae,{htmlFor:"business-hours",children:[n.jsx(ie,{children:"Horario de atención"}),n.jsx(ce,{id:"business-hours",type:"text",placeholder:"Lun a sáb 08:00 - 21:30"})]}),n.jsxs(ae,{htmlFor:"business-map",children:[n.jsx(ie,{children:"Mapa / referencia"}),n.jsx(ce,{id:"business-map",type:"text",placeholder:"Ubicación exacta para Google Maps"})]})]}),n.jsxs(ae,{htmlFor:"business-description",children:[n.jsx(ie,{children:"Descripción del negocio"}),n.jsx(i1,{id:"business-description",placeholder:"Contá qué vendés, qué te diferencia y cómo entregás."})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Operación y publicación"}),n.jsxs(ft,{children:[n.jsx(Q,{children:"Delivery"}),n.jsx(Q,{children:"Retiro"}),n.jsx(Q,{children:"Página pública"}),n.jsx(Q,{children:"Sponsor interno"})]}),n.jsxs(xn,{children:[n.jsxs(ae,{htmlFor:"business-method",children:[n.jsx(ie,{children:"Método de publicación"}),n.jsxs(bo,{id:"business-method",defaultValue:"premium",children:[n.jsx("option",{value:"premium",children:"Cuenta paga / Premium"}),n.jsx("option",{value:"trial",children:"Prueba inicial"}),n.jsx("option",{value:"manual",children:"Alta manual"})]})]}),n.jsxs(ae,{htmlFor:"business-zone",children:[n.jsx(ie,{children:"Zona de cobertura"}),n.jsx(ce,{id:"business-zone",type:"text",placeholder:"Centro, Barrio Norte, Ruta 19..."})]})]})]})})}),n.jsxs(Mu,{children:[n.jsx(ns,{type:"submit",children:"Enviar y pasar a pago"}),n.jsx(Pt,{to:"/comercios",children:"Volver al marketplace"})]})]})})}),n.jsxs(ul,{children:[n.jsxs($e,{children:[n.jsx(X,{children:"Qué gana el comercio"}),n.jsxs(a1,{children:[n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Presencia en la home con cards, sponsor y carrusel de promociones."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Perfil propio con logo, horarios, stock, delivery y retiro."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Notificaciones por producto, comercio y oferta para fidelizar usuarios."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Base lista para crecer hacia Android, iOS y paneles internos."})]})]})]}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(s1,{children:[n.jsx(X,{children:"Proceso de alta"}),G5.map((t,r)=>n.jsxs(l1,{children:[r+1,". ",t.title]},t.id))]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Campos extras sugeridos"}),n.jsx(q,{children:"Si el comercio quiere mejor performance, sumamos más campos más adelante."}),n.jsx(o1,{children:W5.map(t=>n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:t})]},t))})]})})})]})]})})})]})}const Q5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.88fr);
  }
`,rf=[{id:"step-1",title:"Perfil y documentos",text:"Completás tus datos, subís la foto de perfil y agregás licencia y seguro."},{id:"step-2",title:"Validación",text:"Revisamos identidad, medio de trabajo y datos para cobrar sin fricción."},{id:"step-3",title:"Activación",text:"Te aprobamos y quedás listo para empezar a repartir."}],Y5=["Foto de perfil","Nombre","Apellido","Contraseña","Repetir contraseña","Carnet de conducir","Seguro del vehículo","Alias / CBU"];function q5(){const e=t=>{t.preventDefault()};return n.jsxs(Yt,{showSearch:!1,footerText:"Alta de delivery con validación de identidad, documentación del vehículo y medios de cobro.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Alta de delivery"}),n.jsx(Ce,{children:"Sumate como repartidor y empezá a trabajar."}),n.jsx(Ee,{children:"Pedimos los datos mínimos para validar tu perfil, revisar tus documentos y dejar listo el cobro por alias o CBU."})]})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsxs(Q5,{children:[n.jsx(dl,{children:n.jsx("form",{onSubmit:e,children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Datos obligatorios"}),n.jsx(q,{children:"Con esto damos de alta tu perfil de delivery con una validación clara."}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsxs(Yi,{htmlFor:"delivery-profile-photo",children:[n.jsxs(qi,{children:[n.jsx(wa,{size:16,"aria-hidden":"true"})," Foto de perfil"]}),n.jsx(Zi,{children:"Subí una imagen clara para que comercios y clientes te identifiquen."}),n.jsx(ce,{id:"delivery-profile-photo",type:"file",accept:"image/*",required:!0})]}),n.jsxs(xn,{children:[n.jsxs(ae,{htmlFor:"delivery-first-name",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Nombre"]}),n.jsx(ce,{id:"delivery-first-name",type:"text",placeholder:"Juan",required:!0})]}),n.jsxs(ae,{htmlFor:"delivery-last-name",children:[n.jsxs(ie,{children:[n.jsx(Qe,{size:16,"aria-hidden":"true"}),"Apellido"]}),n.jsx(ce,{id:"delivery-last-name",type:"text",placeholder:"Pérez",required:!0})]}),n.jsxs(ae,{htmlFor:"delivery-password",children:[n.jsxs(ie,{children:[n.jsx(sr,{size:16,"aria-hidden":"true"}),"Contraseña"]}),n.jsx(ce,{id:"delivery-password",type:"password",placeholder:"••••••••",required:!0}),n.jsx(jo,{children:"Usá una contraseña segura para proteger tu acceso."})]}),n.jsxs(ae,{htmlFor:"delivery-password-repeat",children:[n.jsxs(ie,{children:[n.jsx(sr,{size:16,"aria-hidden":"true"}),"Repetir contraseña"]}),n.jsx(ce,{id:"delivery-password-repeat",type:"password",placeholder:"••••••••",required:!0})]})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Documentación y cobro"}),n.jsx(q,{children:"Necesitamos documentos al día para habilitarte y pagarte sin demoras."}),n.jsxs(xn,{children:[n.jsxs(Lt,{children:[n.jsxs(ie,{children:[n.jsx(md,{size:16,"aria-hidden":"true"}),"Carnet de conducir"]}),n.jsxs(Yi,{htmlFor:"delivery-license",children:[n.jsxs(qi,{children:[n.jsx(wa,{size:16,"aria-hidden":"true"})," Subí tu licencia"]}),n.jsx(Zi,{children:"Foto o PDF legible de frente y dorso si aplica."}),n.jsx(ce,{id:"delivery-license",type:"file",accept:"image/*,application/pdf",required:!0})]})]}),n.jsxs(Lt,{children:[n.jsxs(ie,{children:[n.jsx(md,{size:16,"aria-hidden":"true"}),"Seguro del vehículo"]}),n.jsxs(Yi,{htmlFor:"delivery-insurance",children:[n.jsxs(qi,{children:[n.jsx(wa,{size:16,"aria-hidden":"true"})," Subí tu seguro vigente"]}),n.jsx(Zi,{children:"Aceptamos foto o PDF del seguro del vehículo en uso."}),n.jsx(ce,{id:"delivery-insurance",type:"file",accept:"image/*,application/pdf",required:!0})]})]}),n.jsxs(ae,{htmlFor:"delivery-alias-cbu",children:[n.jsxs(ie,{children:[n.jsx(kw,{size:16,"aria-hidden":"true"}),"Alias / CBU"]}),n.jsx(ce,{id:"delivery-alias-cbu",type:"text",placeholder:"alias.o.cbu",required:!0}),n.jsx(jo,{children:"Usá el dato donde querés recibir los pagos."})]}),n.jsxs(ae,{htmlFor:"delivery-phone",children:[n.jsxs(ie,{children:[n.jsx(ol,{size:16,"aria-hidden":"true"}),"Teléfono"]}),n.jsx(ce,{id:"delivery-phone",type:"tel",placeholder:"+54 3573 400-201"})]})]})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Opcionales útiles"}),n.jsx(q,{children:"Esto ayuda a validar más rápido tu perfil y a asignarte pedidos cerca."}),n.jsxs(xn,{children:[n.jsxs(ae,{htmlFor:"delivery-email",children:[n.jsxs(ie,{children:[n.jsx(Cu,{size:16,"aria-hidden":"true"}),"Email"]}),n.jsx(ce,{id:"delivery-email",type:"email",placeholder:"delivery@correo.com"})]}),n.jsxs(ae,{htmlFor:"delivery-zone",children:[n.jsxs(ie,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"}),"Zona de trabajo"]}),n.jsx(ce,{id:"delivery-zone",type:"text",placeholder:"La Francia centro, Ruta 19..."})]}),n.jsxs(ae,{htmlFor:"delivery-vehicle",children:[n.jsxs(ie,{children:[n.jsx($t,{size:16,"aria-hidden":"true"}),"Vehículo"]}),n.jsxs(bo,{id:"delivery-vehicle",defaultValue:"moto",children:[n.jsx("option",{value:"moto",children:"Moto"}),n.jsx("option",{value:"auto",children:"Auto"}),n.jsx("option",{value:"bicicleta",children:"Bicicleta"}),n.jsx("option",{value:"camioneta",children:"Camioneta"})]})]}),n.jsxs(ae,{htmlFor:"delivery-plate",children:[n.jsxs(ie,{children:[n.jsx($t,{size:16,"aria-hidden":"true"}),"Patente"]}),n.jsx(ce,{id:"delivery-plate",type:"text",placeholder:"AA123BB"})]})]})]})})}),n.jsxs(Mu,{children:[n.jsx(ns,{type:"submit",children:"Postularme como delivery"}),n.jsx(Pt,{to:"/",children:"Volver al inicio"})]})]})})}),n.jsxs(ul,{children:[n.jsxs(Lt,{children:[n.jsx(X,{children:"Qué necesitamos para activarte"}),n.jsxs(a1,{children:[n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Foto de perfil legible y datos personales consistentes."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Carnet de conducir y seguro del vehículo vigentes."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Alias o CBU propio para liquidar los pagos."})]}),n.jsxs(Ot,{children:[n.jsx(Dt,{}),n.jsx("span",{children:"Contraseña segura para proteger el acceso a tu cuenta."})]})]})]}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(s1,{children:[n.jsx(X,{children:"Proceso de alta"}),rf.map((t,r)=>n.jsxs(l1,{children:[r+1,". ",t.title]},t.id))]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsx(X,{children:"Campos obligatorios"}),n.jsx(ft,{children:Y5.map(t=>n.jsx(Q,{children:t},t))}),n.jsx(dt,{children:rf.map(t=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(Lt,{children:[n.jsx(fe,{children:t.title}),n.jsx(q,{children:t.text})]})})},t.id))})]})})})]})]})})})]})}const Z5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,X5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`,J5=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[2]};
`;function eS(){return n.jsxs(Yt,{showSearch:!1,footerText:"Panel de comercio para pedidos, stock, promociones y control operativo.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Panel comercio"}),n.jsx(Ce,{children:"Operación diaria del negocio."}),n.jsx(Ee,{children:"El comercio administra productos, precios, stock, promociones y pedidos desde una sola vista."})]})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(Z5,{children:P$.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(X,{children:e.label}),n.jsx(Ut,{children:e.value}),n.jsx(Q,{children:e.trend})]})})},e.id))})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsxs(X5,{children:[n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Pedidos recientes"}),n.jsx(dt,{children:E$.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:e.customer}),n.jsx(q,{children:e.status})]}),n.jsx(Ut,{children:We(e.total)})]})})},e.id))})]})})}),n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Stock y productos"}),n.jsx(J5,{children:M$.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:e.name}),n.jsxs(q,{children:["Stock ",e.stock," · ",e.status]})]}),n.jsx(Ut,{children:We(e.price)})]}),n.jsxs(ft,{children:[n.jsxs(Q,{children:[n.jsx(mw,{size:16,"aria-hidden":"true"})," Inventario"]}),n.jsxs(Q,{children:[n.jsx(ri,{size:16,"aria-hidden":"true"})," Promociones"]})]})]})})},e.id))})]})})})]})})}),n.jsx(we,{children:n.jsxs(ee,{children:[n.jsxs(fi,{children:[n.jsx(fe,{children:"Acciones rápidas"}),n.jsx(Ce,{children:"Gestión operativa sin fricción"}),n.jsx(Ee,{children:"Alta, baja, edición de productos y promociones destacadas."})]}),n.jsxs(sl,{children:[n.jsxs(Tn,{to:"/panel/comercio",children:[n.jsx(jw,{size:18,"aria-hidden":"true"}),"Agregar producto"]}),n.jsxs(Pt,{to:"/panel/comercio",children:[n.jsx(xw,{size:18,"aria-hidden":"true"}),"Ver pedidos"]}),n.jsxs(Pt,{to:"/panel/comercio",children:[n.jsx(Xe,{size:18,"aria-hidden":"true"}),"Ajustar comercio"]})]})]})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"El panel está listo para crecer"}),n.jsx(Ce,{children:"Productos, promos y stock en una sola base."}),n.jsx(Ee,{children:"Cuando se conecte el backend, esta pantalla ya tiene la estructura para operar sin rehacer la interfaz."})]})})})})})]})}const tS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`,rS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};
`,nS=l.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.full};
  background: ${({theme:e})=>e.color.surfaceMuted};
  color: ${({theme:e})=>e.color.textMuted};
  font-size: ${({theme:e})=>e.typography.size.xs};
  font-weight: ${({theme:e})=>e.typography.weight.bold};
`;function iS(){return n.jsxs(Yt,{showSearch:!1,footerText:"Panel de delivery para aceptar pedidos, ver distancia y seguir estados.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Panel delivery"}),n.jsx(Ce,{children:"Pedidos disponibles y ruta clara."}),n.jsx(Ee,{children:"El repartidor ve qué pedidos están listos para tomar y qué gana por cada entrega."})]})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(tS,{children:F$.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(X,{children:e.label}),n.jsx(Ut,{children:e.value}),n.jsx(q,{children:e.help})]})})},e.id))})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(X,{children:"Pedidos para aceptar"}),n.jsx(rS,{children:T$.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(gr,{children:[n.jsxs("div",{children:[n.jsx(nr,{children:e.store}),n.jsx(q,{children:e.customer})]}),n.jsx(Ut,{children:We(e.payout)})]}),n.jsxs(ft,{children:[n.jsxs(Q,{children:[n.jsx(Gt,{size:16,"aria-hidden":"true"})," ",hi(e.distanceKm)]}),n.jsx(nS,{children:e.status})]})]})})},e.id))})]})})})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Estados"}),n.jsx(Ce,{children:"Seguimiento simple y comprensible"}),n.jsx(Ee,{children:"Pedido recibido, preparado, asignado, retirado, en camino y entregado."}),n.jsxs(ft,{children:[n.jsxs(Q,{children:[n.jsx(fw,{size:16,"aria-hidden":"true"})," Aceptar"]}),n.jsxs(Q,{children:[n.jsx(n0,{size:16,"aria-hidden":"true"})," Retirar"]}),n.jsxs(Q,{children:[n.jsx($t,{size:16,"aria-hidden":"true"})," En camino"]}),n.jsxs(Q,{children:[n.jsx(il,{size:16,"aria-hidden":"true"})," Entregar"]})]}),n.jsxs(ft,{children:[n.jsx(Tn,{to:"/panel/repartidor",children:"Tomar pedido"}),n.jsx(Pt,{to:"/panel/repartidor",children:"Ver historial"})]})]})})})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Lista para escalar"}),n.jsx(Ce,{children:"La logística entra después sin rehacer esta base."}),n.jsx(Ee,{children:"Esta pantalla deja la base lista para sumar mapa, geolocalización y notificaciones más adelante."})]})})})})})]})}const oS=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`,nf=l.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing[3]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;function aS(){return n.jsxs(Yt,{showSearch:!1,footerText:"Panel administrador con métricas globales, alertas y módulos críticos.",children:[n.jsx(we,{children:n.jsx(ee,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Panel admin"}),n.jsx(Ce,{children:"Control general de la plataforma."}),n.jsx(Ee,{children:"Desde acá se administra la operación global: comercios, usuarios, pedidos, delivery y finanzas."})]})})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(oS,{children:R$.map(e=>n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(X,{children:e.label}),n.jsx(Ut,{children:e.value}),n.jsx(q,{children:e.help})]})})},e.id))})})}),n.jsx(we,{children:n.jsxs(ee,{children:[n.jsxs(fi,{children:[n.jsx(fe,{children:"Alertas"}),n.jsx(Ce,{children:"Eventos que requieren atención"}),n.jsx(Ee,{children:"Los avisos ayudan a mantener la plataforma ordenada antes de escalar a otras localidades."})]}),n.jsx(nf,{children:L$.map(e=>{const t=e.icon;return n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsxs(ft,{children:[n.jsx(Q,{children:n.jsx(t,{size:16,"aria-hidden":"true"})}),n.jsx(Q,{children:"Revisión"})]}),n.jsx(X,{children:e.title}),n.jsx(q,{children:e.description})]})})},e.id)})})]})}),n.jsx(we,{children:n.jsxs(ee,{children:[n.jsxs(fi,{children:[n.jsx(fe,{children:"Módulos"}),n.jsx(Ce,{children:"Acceso a cada área crítica"}),n.jsx(Ee,{children:"Comercios, usuarios, pedidos, delivery y finanzas quedan separadas por módulo."})]}),n.jsx(nf,{children:[{title:"Comercios",icon:Xe,text:"Alta, aprobación, suspensión y catálogo."},{title:"Usuarios",icon:s0,text:"Clientes, repartidores y roles internos."},{title:"Pedidos",icon:r0,text:"Estados, montos y tracking operativo."},{title:"Delivery",icon:$t,text:"Cobertura, disponibilidad y ganancias."},{title:"Finanzas",icon:hw,text:"Comisiones, cobros y liquidaciones."},{title:"Seguridad",icon:sr,text:"Auditoría, permisos y alertas."}].map(e=>{const t=e.icon;return n.jsx(H,{children:n.jsx(Y,{children:n.jsxs(dt,{children:[n.jsx(Q,{children:n.jsx(t,{size:16,"aria-hidden":"true"})}),n.jsx(X,{children:e.title}),n.jsx(q,{children:e.text})]})})},e.title)})})]})}),n.jsx(we,{children:n.jsx(ee,{children:n.jsx(H,{children:n.jsx(Y,{children:n.jsxs($e,{children:[n.jsx(fe,{children:"Escalabilidad"}),n.jsx(Ce,{children:"La base administrativa queda lista para crecer."}),n.jsx(Ee,{children:"La estructura ya separa responsabilidades para que después el backend y el móvil puedan crecer sin rehacer el frontend."}),n.jsxs(ft,{children:[n.jsx(Tn,{to:"/panel/admin",children:"Abrir dashboard"}),n.jsx(Pt,{to:"/comercios",children:"Volver al marketplace"})]})]})})})})})]})}function sS(){return n.jsx(Zv,{children:n.jsx(cw,{children:n.jsxs(Uv,{children:[n.jsx(et,{path:"/",element:n.jsx(k$,{})}),n.jsx(et,{path:"/comercios",element:n.jsx(Z$,{})}),n.jsx(et,{path:"/comercios/:storeId",element:n.jsx(nk,{})}),n.jsx(et,{path:"/productos/:productId",element:n.jsx(sk,{})}),n.jsx(et,{path:"/pedidos",element:n.jsx(l5,{})}),n.jsx(et,{path:"/carrito",element:n.jsx(Hl,{to:"/pedidos",replace:!0})}),n.jsx(et,{path:"/favoritos",element:n.jsx(p5,{})}),n.jsx(et,{path:"/notificaciones",element:n.jsx(U5,{})}),n.jsx(et,{path:"/registro/comercio",element:n.jsx(K5,{})}),n.jsx(et,{path:"/trabaja-con-nosotros",element:n.jsx(q5,{})}),n.jsx(et,{path:"/registro/delivery",element:n.jsx(Hl,{to:"/trabaja-con-nosotros",replace:!0})}),n.jsx(et,{path:"/mi-cuenta",element:n.jsx(S5,{})}),n.jsx(et,{path:"/panel/comercio",element:n.jsx(eS,{})}),n.jsx(et,{path:"/panel/repartidor",element:n.jsx(iS,{})}),n.jsx(et,{path:"/panel/admin",element:n.jsx(aS,{})}),n.jsx(et,{path:"*",element:n.jsx(Hl,{to:"/",replace:!0})})]})})})}Jx({immediate:!0});const c1=document.getElementById("root");if(!c1)throw new Error("No se encontró el nodo root");hc.createRoot(c1).render(n.jsx(tn.StrictMode,{children:n.jsx(sS,{})}));
