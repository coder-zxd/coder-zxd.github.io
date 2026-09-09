var wh=typeof global=="object"&&global&&global.Object===Object&&global,Kp=typeof self=="object"&&self&&self.Object===Object&&self,pn=wh||Kp||Function("return this")(),tn=pn.Symbol,Rh=Object.prototype,Jp=Rh.hasOwnProperty,Qp=Rh.toString,Ir=tn?tn.toStringTag:void 0;function jp(n){var e=Jp.call(n,Ir),t=n[Ir];try{n[Ir]=void 0;var i=!0}catch{}var r=Qp.call(n);return i&&(e?n[Ir]=t:delete n[Ir]),r}var em=Object.prototype,tm=em.toString;function nm(n){return tm.call(n)}var im="[object Null]",rm="[object Undefined]",du=tn?tn.toStringTag:void 0;function Vi(n){return n==null?n===void 0?rm:im:du&&du in Object(n)?jp(n):nm(n)}function wn(n){return n!=null&&typeof n=="object"}var sm="[object Symbol]";function Pa(n){return typeof n=="symbol"||wn(n)&&Vi(n)==sm}function cl(n,e){for(var t=-1,i=n==null?0:n.length,r=Array(i);++t<i;)r[t]=e(n[t],t,n);return r}var Nt=Array.isArray,pu=tn?tn.prototype:void 0,mu=pu?pu.toString:void 0;function Ch(n){if(typeof n=="string")return n;if(Nt(n))return cl(n,Ch)+"";if(Pa(n))return mu?mu.call(n):"";var e=n+"";return e=="0"&&1/n==-1/0?"-0":e}var am=/\s/;function om(n){for(var e=n.length;e--&&am.test(n.charAt(e)););return e}var cm=/^\s+/;function lm(n){return n&&n.slice(0,om(n)+1).replace(cm,"")}function Ut(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var gu=NaN,um=/^[-+]0x[0-9a-f]+$/i,fm=/^0b[01]+$/i,hm=/^0o[0-7]+$/i,dm=parseInt;function $r(n){if(typeof n=="number")return n;if(Pa(n))return gu;if(Ut(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ut(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=lm(n);var t=fm.test(n);return t||hm.test(n)?dm(n.slice(2),t?2:8):um.test(n)?gu:+n}function ll(n){return n}var pm="[object AsyncFunction]",mm="[object Function]",gm="[object GeneratorFunction]",_m="[object Proxy]";function ul(n){if(!Ut(n))return!1;var e=Vi(n);return e==mm||e==gm||e==pm||e==_m}var Ka=pn["__core-js_shared__"],_u=function(){var n=/[^.]+$/.exec(Ka&&Ka.keys&&Ka.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function vm(n){return!!_u&&_u in n}var xm=Function.prototype,Mm=xm.toString;function Gi(n){if(n!=null){try{return Mm.call(n)}catch{}try{return n+""}catch{}}return""}var ym=/[\\^$.*+?()[\]{}|]/g,Sm=/^\[object .+?Constructor\]$/,bm=Function.prototype,Em=Object.prototype,Tm=bm.toString,Am=Em.hasOwnProperty,wm=RegExp("^"+Tm.call(Am).replace(ym,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rm(n){if(!Ut(n)||vm(n))return!1;var e=ul(n)?wm:Sm;return e.test(Gi(n))}function Cm(n,e){return n?.[e]}function ki(n,e){var t=Cm(n,e);return Rm(t)?t:void 0}var ko=ki(pn,"WeakMap"),vu=Object.create,Pm=function(){function n(){}return function(e){if(!Ut(e))return{};if(vu)return vu(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();function Lm(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}function Dm(){}function Ph(n,e){var t=-1,i=n.length;for(e||(e=Array(i));++t<i;)e[t]=n[t];return e}var Im=800,Nm=16,Um=Date.now;function Om(n){var e=0,t=0;return function(){var i=Um(),r=Nm-(i-t);if(t=i,r>0){if(++e>=Im)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function Fm(n){return function(){return n}}var va=function(){try{var n=ki(Object,"defineProperty");return n({},"",{}),n}catch{}}(),Bm=va?function(n,e){return va(n,"toString",{configurable:!0,enumerable:!1,value:Fm(e),writable:!0})}:ll,Lh=Om(Bm);function zm(n,e){for(var t=-1,i=n==null?0:n.length;++t<i&&e(n[t],t,n)!==!1;);return n}function Dh(n,e,t,i){for(var r=n.length,s=t+(i?1:-1);i?s--:++s<r;)if(e(n[s],s,n))return s;return-1}function Hm(n){return n!==n}function Vm(n,e,t){for(var i=t-1,r=n.length;++i<r;)if(n[i]===e)return i;return-1}function Gm(n,e,t){return e===e?Vm(n,e,t):Dh(n,Hm,t)}function km(n,e){var t=n==null?0:n.length;return!!t&&Gm(n,e,0)>-1}var Wm=9007199254740991,Xm=/^(?:0|[1-9]\d*)$/;function La(n,e){var t=typeof n;return e=e??Wm,!!e&&(t=="number"||t!="symbol"&&Xm.test(n))&&n>-1&&n%1==0&&n<e}function Da(n,e,t){e=="__proto__"&&va?va(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function gs(n,e){return n===e||n!==n&&e!==e}var $m=Object.prototype,qm=$m.hasOwnProperty;function fl(n,e,t){var i=n[e];(!(qm.call(n,e)&&gs(i,t))||t===void 0&&!(e in n))&&Da(n,e,t)}function Ar(n,e,t,i){var r=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var o=e[s],c=void 0;c===void 0&&(c=n[o]),r?Da(t,o,c):fl(t,o,c)}return t}var xu=Math.max;function Ih(n,e,t){return e=xu(e===void 0?n.length-1:e,0),function(){for(var i=arguments,r=-1,s=xu(i.length-e,0),a=Array(s);++r<s;)a[r]=i[e+r];r=-1;for(var o=Array(e+1);++r<e;)o[r]=i[r];return o[e]=t(a),Lm(n,this,o)}}function Nh(n,e){return Lh(Ih(n,e,ll),n+"")}var Ym=9007199254740991;function hl(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ym}function wr(n){return n!=null&&hl(n.length)&&!ul(n)}function Zm(n,e,t){if(!Ut(t))return!1;var i=typeof e;return(i=="number"?wr(t)&&La(e,t.length):i=="string"&&e in t)?gs(t[e],n):!1}function Km(n){return Nh(function(e,t){var i=-1,r=t.length,s=r>1?t[r-1]:void 0,a=r>2?t[2]:void 0;for(s=n.length>3&&typeof s=="function"?(r--,s):void 0,a&&Zm(t[0],t[1],a)&&(s=r<3?void 0:s,r=1),e=Object(e);++i<r;){var o=t[i];o&&n(e,o,i,s)}return e})}var Jm=Object.prototype;function dl(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Jm;return n===t}function Qm(n,e){for(var t=-1,i=Array(n);++t<n;)i[t]=e(t);return i}var jm="[object Arguments]";function Mu(n){return wn(n)&&Vi(n)==jm}var Uh=Object.prototype,eg=Uh.hasOwnProperty,tg=Uh.propertyIsEnumerable,es=Mu(function(){return arguments}())?Mu:function(n){return wn(n)&&eg.call(n,"callee")&&!tg.call(n,"callee")};function ng(){return!1}var Oh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yu=Oh&&typeof module=="object"&&module&&!module.nodeType&&module,ig=yu&&yu.exports===Oh,Su=ig?pn.Buffer:void 0,rg=Su?Su.isBuffer:void 0,ts=rg||ng,sg="[object Arguments]",ag="[object Array]",og="[object Boolean]",cg="[object Date]",lg="[object Error]",ug="[object Function]",fg="[object Map]",hg="[object Number]",dg="[object Object]",pg="[object RegExp]",mg="[object Set]",gg="[object String]",_g="[object WeakMap]",vg="[object ArrayBuffer]",xg="[object DataView]",Mg="[object Float32Array]",yg="[object Float64Array]",Sg="[object Int8Array]",bg="[object Int16Array]",Eg="[object Int32Array]",Tg="[object Uint8Array]",Ag="[object Uint8ClampedArray]",wg="[object Uint16Array]",Rg="[object Uint32Array]",ft={};ft[Mg]=ft[yg]=ft[Sg]=ft[bg]=ft[Eg]=ft[Tg]=ft[Ag]=ft[wg]=ft[Rg]=!0;ft[sg]=ft[ag]=ft[vg]=ft[og]=ft[xg]=ft[cg]=ft[lg]=ft[ug]=ft[fg]=ft[hg]=ft[dg]=ft[pg]=ft[mg]=ft[gg]=ft[_g]=!1;function Cg(n){return wn(n)&&hl(n.length)&&!!ft[Vi(n)]}function pl(n){return function(e){return n(e)}}var Fh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qr=Fh&&typeof module=="object"&&module&&!module.nodeType&&module,Pg=qr&&qr.exports===Fh,Ja=Pg&&wh.process,pr=function(){try{var n=qr&&qr.require&&qr.require("util").types;return n||Ja&&Ja.binding&&Ja.binding("util")}catch{}}(),bu=pr&&pr.isTypedArray,ml=bu?pl(bu):Cg,Lg=Object.prototype,Dg=Lg.hasOwnProperty;function Bh(n,e){var t=Nt(n),i=!t&&es(n),r=!t&&!i&&ts(n),s=!t&&!i&&!r&&ml(n),a=t||i||r||s,o=a?Qm(n.length,String):[],c=o.length;for(var l in n)(e||Dg.call(n,l))&&!(a&&(l=="length"||r&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||La(l,c)))&&o.push(l);return o}function zh(n,e){return function(t){return n(e(t))}}var Ig=zh(Object.keys,Object),Ng=Object.prototype,Ug=Ng.hasOwnProperty;function Og(n){if(!dl(n))return Ig(n);var e=[];for(var t in Object(n))Ug.call(n,t)&&t!="constructor"&&e.push(t);return e}function _s(n){return wr(n)?Bh(n):Og(n)}function Fg(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var Bg=Object.prototype,zg=Bg.hasOwnProperty;function Hg(n){if(!Ut(n))return Fg(n);var e=dl(n),t=[];for(var i in n)i=="constructor"&&(e||!zg.call(n,i))||t.push(i);return t}function vs(n){return wr(n)?Bh(n,!0):Hg(n)}var Vg=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gg=/^\w*$/;function gl(n,e){if(Nt(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Pa(n)?!0:Gg.test(n)||!Vg.test(n)||e!=null&&n in Object(e)}var ns=ki(Object,"create");function kg(){this.__data__=ns?ns(null):{},this.size=0}function Wg(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Xg="__lodash_hash_undefined__",$g=Object.prototype,qg=$g.hasOwnProperty;function Yg(n){var e=this.__data__;if(ns){var t=e[n];return t===Xg?void 0:t}return qg.call(e,n)?e[n]:void 0}var Zg=Object.prototype,Kg=Zg.hasOwnProperty;function Jg(n){var e=this.__data__;return ns?e[n]!==void 0:Kg.call(e,n)}var Qg="__lodash_hash_undefined__";function jg(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=ns&&e===void 0?Qg:e,this}function Ii(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Ii.prototype.clear=kg;Ii.prototype.delete=Wg;Ii.prototype.get=Yg;Ii.prototype.has=Jg;Ii.prototype.set=jg;function e0(){this.__data__=[],this.size=0}function Ia(n,e){for(var t=n.length;t--;)if(gs(n[t][0],e))return t;return-1}var t0=Array.prototype,n0=t0.splice;function i0(n){var e=this.__data__,t=Ia(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():n0.call(e,t,1),--this.size,!0}function r0(n){var e=this.__data__,t=Ia(e,n);return t<0?void 0:e[t][1]}function s0(n){return Ia(this.__data__,n)>-1}function a0(n,e){var t=this.__data__,i=Ia(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function Jn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Jn.prototype.clear=e0;Jn.prototype.delete=i0;Jn.prototype.get=r0;Jn.prototype.has=s0;Jn.prototype.set=a0;var is=ki(pn,"Map");function o0(){this.size=0,this.__data__={hash:new Ii,map:new(is||Jn),string:new Ii}}function c0(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Na(n,e){var t=n.__data__;return c0(e)?t[typeof e=="string"?"string":"hash"]:t.map}function l0(n){var e=Na(this,n).delete(n);return this.size-=e?1:0,e}function u0(n){return Na(this,n).get(n)}function f0(n){return Na(this,n).has(n)}function h0(n,e){var t=Na(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function Qn(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Qn.prototype.clear=o0;Qn.prototype.delete=l0;Qn.prototype.get=u0;Qn.prototype.has=f0;Qn.prototype.set=h0;var d0="Expected a function";function _l(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(d0);var t=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=t.cache;if(s.has(r))return s.get(r);var a=n.apply(this,i);return t.cache=s.set(r,a)||s,a};return t.cache=new(_l.Cache||Qn),t}_l.Cache=Qn;var p0=500;function m0(n){var e=_l(n,function(i){return t.size===p0&&t.clear(),i}),t=e.cache;return e}var g0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_0=/\\(\\)?/g,v0=m0(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(g0,function(t,i,r,s){e.push(r?s.replace(_0,"$1"):i||t)}),e});function x0(n){return n==null?"":Ch(n)}function Rr(n,e){return Nt(n)?n:gl(n,e)?[n]:v0(x0(n))}function Ni(n){if(typeof n=="string"||Pa(n))return n;var e=n+"";return e=="0"&&1/n==-1/0?"-0":e}function Ua(n,e){e=Rr(e,n);for(var t=0,i=e.length;n!=null&&t<i;)n=n[Ni(e[t++])];return t&&t==i?n:void 0}function M0(n,e,t){var i=n==null?void 0:Ua(n,e);return i===void 0?t:i}function vl(n,e){for(var t=-1,i=e.length,r=n.length;++t<i;)n[r+t]=e[t];return n}var Eu=tn?tn.isConcatSpreadable:void 0;function y0(n){return Nt(n)||es(n)||!!(Eu&&n&&n[Eu])}function xs(n,e,t,i,r){var s=-1,a=n.length;for(t||(t=y0),r||(r=[]);++s<a;){var o=n[s];e>0&&t(o)?e>1?xs(o,e-1,t,i,r):vl(r,o):i||(r[r.length]=o)}return r}function S0(n){var e=n==null?0:n.length;return e?xs(n,1):[]}function Hh(n){return Lh(Ih(n,void 0,S0),n+"")}var xl=zh(Object.getPrototypeOf,Object),b0="[object Object]",E0=Function.prototype,T0=Object.prototype,Vh=E0.toString,A0=T0.hasOwnProperty,w0=Vh.call(Object);function Gh(n){if(!wn(n)||Vi(n)!=b0)return!1;var e=xl(n);if(e===null)return!0;var t=A0.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Vh.call(t)==w0}function R0(n,e,t){var i=-1,r=n.length;e<0&&(e=-e>r?0:r+e),t=t>r?r:t,t<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(r);++i<r;)s[i]=n[i+e];return s}function iR(){if(!arguments.length)return[];var n=arguments[0];return Nt(n)?n:[n]}function C0(n,e,t){return n===n&&(t!==void 0&&(n=n<=t?n:t),e!==void 0&&(n=n>=e?n:e)),n}function rR(n,e,t){return t===void 0&&(t=e,e=void 0),t!==void 0&&(t=$r(t),t=t===t?t:0),e!==void 0&&(e=$r(e),e=e===e?e:0),C0($r(n),e,t)}function P0(){this.__data__=new Jn,this.size=0}function L0(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function D0(n){return this.__data__.get(n)}function I0(n){return this.__data__.has(n)}var N0=200;function U0(n,e){var t=this.__data__;if(t instanceof Jn){var i=t.__data__;if(!is||i.length<N0-1)return i.push([n,e]),this.size=++t.size,this;t=this.__data__=new Qn(i)}return t.set(n,e),this.size=t.size,this}function hn(n){var e=this.__data__=new Jn(n);this.size=e.size}hn.prototype.clear=P0;hn.prototype.delete=L0;hn.prototype.get=D0;hn.prototype.has=I0;hn.prototype.set=U0;function O0(n,e){return n&&Ar(e,_s(e),n)}function F0(n,e){return n&&Ar(e,vs(e),n)}var kh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tu=kh&&typeof module=="object"&&module&&!module.nodeType&&module,B0=Tu&&Tu.exports===kh,Au=B0?pn.Buffer:void 0,wu=Au?Au.allocUnsafe:void 0;function Wh(n,e){if(e)return n.slice();var t=n.length,i=wu?wu(t):new n.constructor(t);return n.copy(i),i}function z0(n,e){for(var t=-1,i=n==null?0:n.length,r=0,s=[];++t<i;){var a=n[t];e(a,t,n)&&(s[r++]=a)}return s}function Xh(){return[]}var H0=Object.prototype,V0=H0.propertyIsEnumerable,Ru=Object.getOwnPropertySymbols,Ml=Ru?function(n){return n==null?[]:(n=Object(n),z0(Ru(n),function(e){return V0.call(n,e)}))}:Xh;function G0(n,e){return Ar(n,Ml(n),e)}var k0=Object.getOwnPropertySymbols,$h=k0?function(n){for(var e=[];n;)vl(e,Ml(n)),n=xl(n);return e}:Xh;function W0(n,e){return Ar(n,$h(n),e)}function qh(n,e,t){var i=e(n);return Nt(n)?i:vl(i,t(n))}function Wo(n){return qh(n,_s,Ml)}function Yh(n){return qh(n,vs,$h)}var Xo=ki(pn,"DataView"),$o=ki(pn,"Promise"),lr=ki(pn,"Set"),Cu="[object Map]",X0="[object Object]",Pu="[object Promise]",Lu="[object Set]",Du="[object WeakMap]",Iu="[object DataView]",$0=Gi(Xo),q0=Gi(is),Y0=Gi($o),Z0=Gi(lr),K0=Gi(ko),cn=Vi;(Xo&&cn(new Xo(new ArrayBuffer(1)))!=Iu||is&&cn(new is)!=Cu||$o&&cn($o.resolve())!=Pu||lr&&cn(new lr)!=Lu||ko&&cn(new ko)!=Du)&&(cn=function(n){var e=Vi(n),t=e==X0?n.constructor:void 0,i=t?Gi(t):"";if(i)switch(i){case $0:return Iu;case q0:return Cu;case Y0:return Pu;case Z0:return Lu;case K0:return Du}return e});var J0=Object.prototype,Q0=J0.hasOwnProperty;function j0(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&Q0.call(n,"index")&&(t.index=n.index,t.input=n.input),t}var xa=pn.Uint8Array;function yl(n){var e=new n.constructor(n.byteLength);return new xa(e).set(new xa(n)),e}function e_(n,e){var t=e?yl(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}var t_=/\w*$/;function n_(n){var e=new n.constructor(n.source,t_.exec(n));return e.lastIndex=n.lastIndex,e}var Nu=tn?tn.prototype:void 0,Uu=Nu?Nu.valueOf:void 0;function i_(n){return Uu?Object(Uu.call(n)):{}}function Zh(n,e){var t=e?yl(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}var r_="[object Boolean]",s_="[object Date]",a_="[object Map]",o_="[object Number]",c_="[object RegExp]",l_="[object Set]",u_="[object String]",f_="[object Symbol]",h_="[object ArrayBuffer]",d_="[object DataView]",p_="[object Float32Array]",m_="[object Float64Array]",g_="[object Int8Array]",__="[object Int16Array]",v_="[object Int32Array]",x_="[object Uint8Array]",M_="[object Uint8ClampedArray]",y_="[object Uint16Array]",S_="[object Uint32Array]";function b_(n,e,t){var i=n.constructor;switch(e){case h_:return yl(n);case r_:case s_:return new i(+n);case d_:return e_(n,t);case p_:case m_:case g_:case __:case v_:case x_:case M_:case y_:case S_:return Zh(n,t);case a_:return new i;case o_:case u_:return new i(n);case c_:return n_(n);case l_:return new i;case f_:return i_(n)}}function Kh(n){return typeof n.constructor=="function"&&!dl(n)?Pm(xl(n)):{}}var E_="[object Map]";function T_(n){return wn(n)&&cn(n)==E_}var Ou=pr&&pr.isMap,A_=Ou?pl(Ou):T_,w_="[object Set]";function R_(n){return wn(n)&&cn(n)==w_}var Fu=pr&&pr.isSet,C_=Fu?pl(Fu):R_,P_=1,L_=2,D_=4,Jh="[object Arguments]",I_="[object Array]",N_="[object Boolean]",U_="[object Date]",O_="[object Error]",Qh="[object Function]",F_="[object GeneratorFunction]",B_="[object Map]",z_="[object Number]",jh="[object Object]",H_="[object RegExp]",V_="[object Set]",G_="[object String]",k_="[object Symbol]",W_="[object WeakMap]",X_="[object ArrayBuffer]",$_="[object DataView]",q_="[object Float32Array]",Y_="[object Float64Array]",Z_="[object Int8Array]",K_="[object Int16Array]",J_="[object Int32Array]",Q_="[object Uint8Array]",j_="[object Uint8ClampedArray]",ev="[object Uint16Array]",tv="[object Uint32Array]",ut={};ut[Jh]=ut[I_]=ut[X_]=ut[$_]=ut[N_]=ut[U_]=ut[q_]=ut[Y_]=ut[Z_]=ut[K_]=ut[J_]=ut[B_]=ut[z_]=ut[jh]=ut[H_]=ut[V_]=ut[G_]=ut[k_]=ut[Q_]=ut[j_]=ut[ev]=ut[tv]=!0;ut[O_]=ut[Qh]=ut[W_]=!1;function Yr(n,e,t,i,r,s){var a,o=e&P_,c=e&L_,l=e&D_;if(t&&(a=r?t(n,i,r,s):t(n)),a!==void 0)return a;if(!Ut(n))return n;var u=Nt(n);if(u){if(a=j0(n),!o)return Ph(n,a)}else{var h=cn(n),f=h==Qh||h==F_;if(ts(n))return Wh(n,o);if(h==jh||h==Jh||f&&!r){if(a=c||f?{}:Kh(n),!o)return c?W0(n,F0(a,n)):G0(n,O0(a,n))}else{if(!ut[h])return r?n:{};a=b_(n,h,o)}}s||(s=new hn);var p=s.get(n);if(p)return p;s.set(n,a),C_(n)?n.forEach(function(m){a.add(Yr(m,e,t,m,n,s))}):A_(n)&&n.forEach(function(m,d){a.set(d,Yr(m,e,t,d,n,s))});var g=l?c?Yh:Wo:c?vs:_s,x=u?void 0:g(n);return zm(x||n,function(m,d){x&&(d=m,m=n[d]),fl(a,d,Yr(m,e,t,d,n,s))}),a}var nv=1,iv=4;function sR(n){return Yr(n,nv|iv)}var rv="__lodash_hash_undefined__";function sv(n){return this.__data__.set(n,rv),this}function av(n){return this.__data__.has(n)}function rs(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Qn;++e<t;)this.add(n[e])}rs.prototype.add=rs.prototype.push=sv;rs.prototype.has=av;function ov(n,e){for(var t=-1,i=n==null?0:n.length;++t<i;)if(e(n[t],t,n))return!0;return!1}function ed(n,e){return n.has(e)}var cv=1,lv=2;function td(n,e,t,i,r,s){var a=t&cv,o=n.length,c=e.length;if(o!=c&&!(a&&c>o))return!1;var l=s.get(n),u=s.get(e);if(l&&u)return l==e&&u==n;var h=-1,f=!0,p=t&lv?new rs:void 0;for(s.set(n,e),s.set(e,n);++h<o;){var g=n[h],x=e[h];if(i)var m=a?i(x,g,h,e,n,s):i(g,x,h,n,e,s);if(m!==void 0){if(m)continue;f=!1;break}if(p){if(!ov(e,function(d,E){if(!ed(p,E)&&(g===d||r(g,d,t,i,s)))return p.push(E)})){f=!1;break}}else if(!(g===x||r(g,x,t,i,s))){f=!1;break}}return s.delete(n),s.delete(e),f}function uv(n){var e=-1,t=Array(n.size);return n.forEach(function(i,r){t[++e]=[r,i]}),t}function Sl(n){var e=-1,t=Array(n.size);return n.forEach(function(i){t[++e]=i}),t}var fv=1,hv=2,dv="[object Boolean]",pv="[object Date]",mv="[object Error]",gv="[object Map]",_v="[object Number]",vv="[object RegExp]",xv="[object Set]",Mv="[object String]",yv="[object Symbol]",Sv="[object ArrayBuffer]",bv="[object DataView]",Bu=tn?tn.prototype:void 0,Qa=Bu?Bu.valueOf:void 0;function Ev(n,e,t,i,r,s,a){switch(t){case bv:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case Sv:return!(n.byteLength!=e.byteLength||!s(new xa(n),new xa(e)));case dv:case pv:case _v:return gs(+n,+e);case mv:return n.name==e.name&&n.message==e.message;case vv:case Mv:return n==e+"";case gv:var o=uv;case xv:var c=i&fv;if(o||(o=Sl),n.size!=e.size&&!c)return!1;var l=a.get(n);if(l)return l==e;i|=hv,a.set(n,e);var u=td(o(n),o(e),i,r,s,a);return a.delete(n),u;case yv:if(Qa)return Qa.call(n)==Qa.call(e)}return!1}var Tv=1,Av=Object.prototype,wv=Av.hasOwnProperty;function Rv(n,e,t,i,r,s){var a=t&Tv,o=Wo(n),c=o.length,l=Wo(e),u=l.length;if(c!=u&&!a)return!1;for(var h=c;h--;){var f=o[h];if(!(a?f in e:wv.call(e,f)))return!1}var p=s.get(n),g=s.get(e);if(p&&g)return p==e&&g==n;var x=!0;s.set(n,e),s.set(e,n);for(var m=a;++h<c;){f=o[h];var d=n[f],E=e[f];if(i)var y=a?i(E,d,f,e,n,s):i(d,E,f,n,e,s);if(!(y===void 0?d===E||r(d,E,t,i,s):y)){x=!1;break}m||(m=f=="constructor")}if(x&&!m){var M=n.constructor,T=e.constructor;M!=T&&"constructor"in n&&"constructor"in e&&!(typeof M=="function"&&M instanceof M&&typeof T=="function"&&T instanceof T)&&(x=!1)}return s.delete(n),s.delete(e),x}var Cv=1,zu="[object Arguments]",Hu="[object Array]",Cs="[object Object]",Pv=Object.prototype,Vu=Pv.hasOwnProperty;function Lv(n,e,t,i,r,s){var a=Nt(n),o=Nt(e),c=a?Hu:cn(n),l=o?Hu:cn(e);c=c==zu?Cs:c,l=l==zu?Cs:l;var u=c==Cs,h=l==Cs,f=c==l;if(f&&ts(n)){if(!ts(e))return!1;a=!0,u=!1}if(f&&!u)return s||(s=new hn),a||ml(n)?td(n,e,t,i,r,s):Ev(n,e,c,t,i,r,s);if(!(t&Cv)){var p=u&&Vu.call(n,"__wrapped__"),g=h&&Vu.call(e,"__wrapped__");if(p||g){var x=p?n.value():n,m=g?e.value():e;return s||(s=new hn),r(x,m,t,i,s)}}return f?(s||(s=new hn),Rv(n,e,t,i,r,s)):!1}function Oa(n,e,t,i,r){return n===e?!0:n==null||e==null||!wn(n)&&!wn(e)?n!==n&&e!==e:Lv(n,e,t,i,Oa,r)}var Dv=1,Iv=2;function Nv(n,e,t,i){var r=t.length,s=r;if(n==null)return!s;for(n=Object(n);r--;){var a=t[r];if(a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++r<s;){a=t[r];var o=a[0],c=n[o],l=a[1];if(a[2]){if(c===void 0&&!(o in n))return!1}else{var u=new hn,h;if(!(h===void 0?Oa(l,c,Dv|Iv,i,u):h))return!1}}return!0}function nd(n){return n===n&&!Ut(n)}function Uv(n){for(var e=_s(n),t=e.length;t--;){var i=e[t],r=n[i];e[t]=[i,r,nd(r)]}return e}function id(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}function Ov(n){var e=Uv(n);return e.length==1&&e[0][2]?id(e[0][0],e[0][1]):function(t){return t===n||Nv(t,n,e)}}function Fv(n,e){return n!=null&&e in Object(n)}function Bv(n,e,t){e=Rr(e,n);for(var i=-1,r=e.length,s=!1;++i<r;){var a=Ni(e[i]);if(!(s=n!=null&&t(n,a)))break;n=n[a]}return s||++i!=r?s:(r=n==null?0:n.length,!!r&&hl(r)&&La(a,r)&&(Nt(n)||es(n)))}function rd(n,e){return n!=null&&Bv(n,e,Fv)}var zv=1,Hv=2;function Vv(n,e){return gl(n)&&nd(e)?id(Ni(n),e):function(t){var i=M0(t,n);return i===void 0&&i===e?rd(t,n):Oa(e,i,zv|Hv)}}function Gv(n){return function(e){return e?.[n]}}function kv(n){return function(e){return Ua(e,n)}}function Wv(n){return gl(n)?Gv(Ni(n)):kv(n)}function sd(n){return typeof n=="function"?n:n==null?ll:typeof n=="object"?Nt(n)?Vv(n[0],n[1]):Ov(n):Wv(n)}function Xv(n){return function(e,t,i){for(var r=-1,s=Object(e),a=i(e),o=a.length;o--;){var c=a[++r];if(t(s[c],c,s)===!1)break}return e}}var ad=Xv();function $v(n,e){return n&&ad(n,e,_s)}function qv(n,e){return function(t,i){if(t==null)return t;if(!wr(t))return n(t,i);for(var r=t.length,s=-1,a=Object(t);++s<r&&i(a[s],s,a)!==!1;);return t}}var Yv=qv($v),ja=function(){return pn.Date.now()},Zv="Expected a function",Kv=Math.max,Jv=Math.min;function Qv(n,e,t){var i,r,s,a,o,c,l=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(Zv);e=$r(e)||0,Ut(t)&&(u=!!t.leading,h="maxWait"in t,s=h?Kv($r(t.maxWait)||0,e):s,f="trailing"in t?!!t.trailing:f);function p(b){var C=i,v=r;return i=r=void 0,l=b,a=n.apply(v,C),a}function g(b){return l=b,o=setTimeout(d,e),u?p(b):a}function x(b){var C=b-c,v=b-l,A=e-C;return h?Jv(A,s-v):A}function m(b){var C=b-c,v=b-l;return c===void 0||C>=e||C<0||h&&v>=s}function d(){var b=ja();if(m(b))return E(b);o=setTimeout(d,x(b))}function E(b){return o=void 0,f&&i?p(b):(i=r=void 0,a)}function y(){o!==void 0&&clearTimeout(o),l=0,i=c=r=o=void 0}function M(){return o===void 0?a:E(ja())}function T(){var b=ja(),C=m(b);if(i=arguments,r=this,c=b,C){if(o===void 0)return g(c);if(h)return clearTimeout(o),o=setTimeout(d,e),p(c)}return o===void 0&&(o=setTimeout(d,e)),a}return T.cancel=y,T.flush=M,T}function qo(n,e,t){(t!==void 0&&!gs(n[e],t)||t===void 0&&!(e in n))&&Da(n,e,t)}function od(n){return wn(n)&&wr(n)}function Yo(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function jv(n){return Ar(n,vs(n))}function ex(n,e,t,i,r,s,a){var o=Yo(n,t),c=Yo(e,t),l=a.get(c);if(l){qo(n,t,l);return}var u=s?s(o,c,t+"",n,e,a):void 0,h=u===void 0;if(h){var f=Nt(c),p=!f&&ts(c),g=!f&&!p&&ml(c);u=c,f||p||g?Nt(o)?u=o:od(o)?u=Ph(o):p?(h=!1,u=Wh(c,!0)):g?(h=!1,u=Zh(c,!0)):u=[]:Gh(c)||es(c)?(u=o,es(o)?u=jv(o):(!Ut(o)||ul(o))&&(u=Kh(c))):h=!1}h&&(a.set(c,u),r(u,c,i,s,a),a.delete(c)),qo(n,t,u)}function cd(n,e,t,i,r){n!==e&&ad(e,function(s,a){if(r||(r=new hn),Ut(s))ex(n,e,a,t,cd,i,r);else{var o=i?i(Yo(n,a),s,a+"",n,e,r):void 0;o===void 0&&(o=s),qo(n,a,o)}},vs)}function tx(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}function aR(n,e,t){var i=n==null?0:n.length;if(!i)return-1;var r=i-1;return Dh(n,sd(e),r,!0)}function nx(n,e){var t=-1,i=wr(n)?Array(n.length):[];return Yv(n,function(r,s,a){i[++t]=e(r,s,a)}),i}function ix(n,e){var t=Nt(n)?cl:nx;return t(n,sd(e))}function oR(n,e){return xs(ix(n,e),1)}var rx=1/0;function cR(n){var e=n==null?0:n.length;return e?xs(n,rx):[]}function lR(n){for(var e=-1,t=n==null?0:n.length,i={};++e<t;){var r=n[e];Da(i,r[0],r[1])}return i}function sx(n,e){return e.length<2?n:Ua(n,R0(e,0,-1))}function uR(n,e){return Oa(n,e)}function fR(n){return n==null}function hR(n){return n===null}function dR(n){return n===void 0}var pR=Km(function(n,e,t){cd(n,e,t)}),ax=Object.prototype,ox=ax.hasOwnProperty;function cx(n,e){e=Rr(e,n);var t=-1,i=e.length;if(!i)return!0;for(;++t<i;){var r=Ni(e[t]);if(r==="__proto__"&&!ox.call(n,"__proto__")||(r==="constructor"||r==="prototype")&&t<i-1)return!1}var s=sx(n,e);return s==null||delete s[Ni(tx(e))]}function lx(n){return Gh(n)?void 0:n}var ux=1,fx=2,hx=4,mR=Hh(function(n,e){var t={};if(n==null)return t;var i=!1;e=cl(e,function(s){return s=Rr(s,n),i||(i=s.length>1),s}),Ar(n,Yh(n),t),i&&(t=Yr(t,ux|fx|hx,lx));for(var r=e.length;r--;)cx(t,e[r]);return t});function ld(n,e,t,i){if(!Ut(n))return n;e=Rr(e,n);for(var r=-1,s=e.length,a=s-1,o=n;o!=null&&++r<s;){var c=Ni(e[r]),l=t;if(c==="__proto__"||c==="constructor"||c==="prototype")return n;if(r!=a){var u=o[c];l=void 0,l===void 0&&(l=Ut(u)?u:La(e[r+1])?[]:{})}fl(o,c,l),o=o[c]}return n}function dx(n,e,t){for(var i=-1,r=e.length,s={};++i<r;){var a=e[i],o=Ua(n,a);t(o,a)&&ld(s,Rr(a,n),o)}return s}function px(n,e){return dx(n,e,function(t,i){return rd(n,i)})}var gR=Hh(function(n,e){return n==null?{}:px(n,e)});function _R(n,e,t){return n==null?n:ld(n,e,t)}var mx="Expected a function";function vR(n,e,t){var i=!0,r=!0;if(typeof n!="function")throw new TypeError(mx);return Ut(t)&&(i="leading"in t?!!t.leading:i,r="trailing"in t?!!t.trailing:r),Qv(n,e,{leading:i,maxWait:e,trailing:r})}var gx=1/0,_x=lr&&1/Sl(new lr([,-0]))[1]==gx?function(n){return new lr(n)}:Dm,vx=200;function xx(n,e,t){var i=-1,r=km,s=n.length,a=!0,o=[],c=o;if(s>=vx){var l=_x(n);if(l)return Sl(l);a=!1,r=ed,c=new rs}else c=o;e:for(;++i<s;){var u=n[i],h=u;if(u=u!==0?u:0,a&&h===h){for(var f=c.length;f--;)if(c[f]===h)continue e;o.push(u)}else r(c,h,t)||(c!==o&&c.push(h),o.push(u))}return o}var xR=Nh(function(n){return xx(xs(n,1,od,!0))}),Gu=!1,Ei,Zo,Ko,oa,ca,ud,la,Jo,Qo,jo,fd,ec,tc,hd,dd;function Ot(){if(!Gu){Gu=!0;var n=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(n),t=/(Mac OS X)|(Windows)|(Linux)/.exec(n);if(ec=/\b(iPhone|iP[ao]d)/.exec(n),tc=/\b(iP[ao]d)/.exec(n),jo=/Android/i.exec(n),hd=/FBAN\/\w+;/i.exec(n),dd=/Mobile/i.exec(n),fd=!!/Win64/.exec(n),e){Ei=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,Ei&&document&&document.documentMode&&(Ei=document.documentMode);var i=/(?:Trident\/(\d+.\d+))/.exec(n);ud=i?parseFloat(i[1])+4:Ei,Zo=e[2]?parseFloat(e[2]):NaN,Ko=e[3]?parseFloat(e[3]):NaN,oa=e[4]?parseFloat(e[4]):NaN,oa?(e=/(?:Chrome\/(\d+\.\d+))/.exec(n),ca=e&&e[1]?parseFloat(e[1]):NaN):ca=NaN}else Ei=Zo=Ko=ca=oa=NaN;if(t){if(t[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(n);la=r?parseFloat(r[1].replace("_",".")):!0}else la=!1;Jo=!!t[2],Qo=!!t[3]}else la=Jo=Qo=!1}}var nc={ie:function(){return Ot()||Ei},ieCompatibilityMode:function(){return Ot()||ud>Ei},ie64:function(){return nc.ie()&&fd},firefox:function(){return Ot()||Zo},opera:function(){return Ot()||Ko},webkit:function(){return Ot()||oa},safari:function(){return nc.webkit()},chrome:function(){return Ot()||ca},windows:function(){return Ot()||Jo},osx:function(){return Ot()||la},linux:function(){return Ot()||Qo},iphone:function(){return Ot()||ec},mobile:function(){return Ot()||ec||tc||jo||dd},nativeApp:function(){return Ot()||hd},android:function(){return Ot()||jo},ipad:function(){return Ot()||tc}},Mx=nc,yx=!!(typeof window<"u"&&window.document&&window.document.createElement),Sx={canUseDOM:yx},pd=Sx,md;pd.canUseDOM&&(md=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function bx(n,e){if(!pd.canUseDOM||e&&!("addEventListener"in document))return!1;var t="on"+n,i=t in document;if(!i){var r=document.createElement("div");r.setAttribute(t,"return;"),i=typeof r[t]=="function"}return!i&&md&&n==="wheel"&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var Ex=bx,ku=10,Wu=40,Xu=800;function gd(n){var e=0,t=0,i=0,r=0;return"detail"in n&&(t=n.detail),"wheelDelta"in n&&(t=-n.wheelDelta/120),"wheelDeltaY"in n&&(t=-n.wheelDeltaY/120),"wheelDeltaX"in n&&(e=-n.wheelDeltaX/120),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(e=t,t=0),i=e*ku,r=t*ku,"deltaY"in n&&(r=n.deltaY),"deltaX"in n&&(i=n.deltaX),(i||r)&&n.deltaMode&&(n.deltaMode==1?(i*=Wu,r*=Wu):(i*=Xu,r*=Xu)),i&&!e&&(e=i<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:e,spinY:t,pixelX:i,pixelY:r}}gd.getEventType=function(){return Mx.firefox()?"DOMMouseScroll":Ex("wheel")?"wheel":"mousewheel"};var MR=gd;/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/var Bt="top",nn="bottom",rn="right",zt="left",bl="auto",Ms=[Bt,nn,rn,zt],mr="start",ss="end",Tx="clippingParents",_d="viewport",Nr="popper",Ax="reference",$u=Ms.reduce(function(n,e){return n.concat([e+"-"+mr,e+"-"+ss])},[]),vd=[].concat(Ms,[bl]).reduce(function(n,e){return n.concat([e,e+"-"+mr,e+"-"+ss])},[]),wx="beforeRead",Rx="read",Cx="afterRead",Px="beforeMain",Lx="main",Dx="afterMain",Ix="beforeWrite",Nx="write",Ux="afterWrite",Ox=[wx,Rx,Cx,Px,Lx,Dx,Ix,Nx,Ux];function Rn(n){return n?(n.nodeName||"").toLowerCase():null}function Zt(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function Ui(n){var e=Zt(n).Element;return n instanceof e||n instanceof Element}function en(n){var e=Zt(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function El(n){if(typeof ShadowRoot>"u")return!1;var e=Zt(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function Fx(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var i=e.styles[t]||{},r=e.attributes[t]||{},s=e.elements[t];!en(s)||!Rn(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(a){var o=r[a];o===!1?s.removeAttribute(a):s.setAttribute(a,o===!0?"":o)}))})}function Bx(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(i){var r=e.elements[i],s=e.attributes[i]||{},a=Object.keys(e.styles.hasOwnProperty(i)?e.styles[i]:t[i]),o=a.reduce(function(c,l){return c[l]="",c},{});!en(r)||!Rn(r)||(Object.assign(r.style,o),Object.keys(s).forEach(function(c){r.removeAttribute(c)}))})}}var xd={name:"applyStyles",enabled:!0,phase:"write",fn:Fx,effect:Bx,requires:["computeStyles"]};function bn(n){return n.split("-")[0]}var Li=Math.max,Ma=Math.min,gr=Math.round;function ic(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Md(){return!/^((?!chrome|android).)*safari/i.test(ic())}function _r(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var i=n.getBoundingClientRect(),r=1,s=1;e&&en(n)&&(r=n.offsetWidth>0&&gr(i.width)/n.offsetWidth||1,s=n.offsetHeight>0&&gr(i.height)/n.offsetHeight||1);var a=Ui(n)?Zt(n):window,o=a.visualViewport,c=!Md()&&t,l=(i.left+(c&&o?o.offsetLeft:0))/r,u=(i.top+(c&&o?o.offsetTop:0))/s,h=i.width/r,f=i.height/s;return{width:h,height:f,top:u,right:l+h,bottom:u+f,left:l,x:l,y:u}}function Tl(n){var e=_r(n),t=n.offsetWidth,i=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:i}}function yd(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&El(t)){var i=e;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function qn(n){return Zt(n).getComputedStyle(n)}function zx(n){return["table","td","th"].indexOf(Rn(n))>=0}function mi(n){return((Ui(n)?n.ownerDocument:n.document)||window.document).documentElement}function Fa(n){return Rn(n)==="html"?n:n.assignedSlot||n.parentNode||(El(n)?n.host:null)||mi(n)}function qu(n){return!en(n)||qn(n).position==="fixed"?null:n.offsetParent}function Hx(n){var e=/firefox/i.test(ic()),t=/Trident/i.test(ic());if(t&&en(n)){var i=qn(n);if(i.position==="fixed")return null}var r=Fa(n);for(El(r)&&(r=r.host);en(r)&&["html","body"].indexOf(Rn(r))<0;){var s=qn(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function ys(n){for(var e=Zt(n),t=qu(n);t&&zx(t)&&qn(t).position==="static";)t=qu(t);return t&&(Rn(t)==="html"||Rn(t)==="body"&&qn(t).position==="static")?e:t||Hx(n)||e}function Al(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Zr(n,e,t){return Li(n,Ma(e,t))}function Vx(n,e,t){var i=Zr(n,e,t);return i>t?t:i}function Sd(){return{top:0,right:0,bottom:0,left:0}}function bd(n){return Object.assign({},Sd(),n)}function Ed(n,e){return e.reduce(function(t,i){return t[i]=n,t},{})}var Gx=function(n,e){return n=typeof n=="function"?n(Object.assign({},e.rects,{placement:e.placement})):n,bd(typeof n!="number"?n:Ed(n,Ms))};function kx(n){var e,t=n.state,i=n.name,r=n.options,s=t.elements.arrow,a=t.modifiersData.popperOffsets,o=bn(t.placement),c=Al(o),l=[zt,rn].indexOf(o)>=0,u=l?"height":"width";if(!(!s||!a)){var h=Gx(r.padding,t),f=Tl(s),p=c==="y"?Bt:zt,g=c==="y"?nn:rn,x=t.rects.reference[u]+t.rects.reference[c]-a[c]-t.rects.popper[u],m=a[c]-t.rects.reference[c],d=ys(s),E=d?c==="y"?d.clientHeight||0:d.clientWidth||0:0,y=x/2-m/2,M=h[p],T=E-f[u]-h[g],b=E/2-f[u]/2+y,C=Zr(M,b,T),v=c;t.modifiersData[i]=(e={},e[v]=C,e.centerOffset=C-b,e)}}function Wx(n){var e=n.state,t=n.options,i=t.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||yd(e.elements.popper,r)&&(e.elements.arrow=r))}var Xx={name:"arrow",enabled:!0,phase:"main",fn:kx,effect:Wx,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vr(n){return n.split("-")[1]}var $x={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qx(n,e){var t=n.x,i=n.y,r=e.devicePixelRatio||1;return{x:gr(t*r)/r||0,y:gr(i*r)/r||0}}function Yu(n){var e,t=n.popper,i=n.popperRect,r=n.placement,s=n.variation,a=n.offsets,o=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,h=n.isFixed,f=a.x,p=f===void 0?0:f,g=a.y,x=g===void 0?0:g,m=typeof u=="function"?u({x:p,y:x}):{x:p,y:x};p=m.x,x=m.y;var d=a.hasOwnProperty("x"),E=a.hasOwnProperty("y"),y=zt,M=Bt,T=window;if(l){var b=ys(t),C="clientHeight",v="clientWidth";if(b===Zt(t)&&(b=mi(t),qn(b).position!=="static"&&o==="absolute"&&(C="scrollHeight",v="scrollWidth")),b=b,r===Bt||(r===zt||r===rn)&&s===ss){M=nn;var A=h&&b===T&&T.visualViewport?T.visualViewport.height:b[C];x-=A-i.height,x*=c?1:-1}if(r===zt||(r===Bt||r===nn)&&s===ss){y=rn;var P=h&&b===T&&T.visualViewport?T.visualViewport.width:b[v];p-=P-i.width,p*=c?1:-1}}var R=Object.assign({position:o},l&&$x),O=u===!0?qx({x:p,y:x},Zt(t)):{x:p,y:x};if(p=O.x,x=O.y,c){var G;return Object.assign({},R,(G={},G[M]=E?"0":"",G[y]=d?"0":"",G.transform=(T.devicePixelRatio||1)<=1?"translate("+p+"px, "+x+"px)":"translate3d("+p+"px, "+x+"px, 0)",G))}return Object.assign({},R,(e={},e[M]=E?x+"px":"",e[y]=d?p+"px":"",e.transform="",e))}function Yx(n){var e=n.state,t=n.options,i=t.gpuAcceleration,r=i===void 0?!0:i,s=t.adaptive,a=s===void 0?!0:s,o=t.roundOffsets,c=o===void 0?!0:o,l={placement:bn(e.placement),variation:vr(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Yu(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Yu(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Td={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Yx,data:{}},Ps={passive:!0};function Zx(n){var e=n.state,t=n.instance,i=n.options,r=i.scroll,s=r===void 0?!0:r,a=i.resize,o=a===void 0?!0:a,c=Zt(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",t.update,Ps)}),o&&c.addEventListener("resize",t.update,Ps),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",t.update,Ps)}),o&&c.removeEventListener("resize",t.update,Ps)}}var Ad={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zx,data:{}},Kx={left:"right",right:"left",bottom:"top",top:"bottom"};function ua(n){return n.replace(/left|right|bottom|top/g,function(e){return Kx[e]})}var Jx={start:"end",end:"start"};function Zu(n){return n.replace(/start|end/g,function(e){return Jx[e]})}function wl(n){var e=Zt(n),t=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:t,scrollTop:i}}function Rl(n){return _r(mi(n)).left+wl(n).scrollLeft}function Qx(n,e){var t=Zt(n),i=mi(n),r=t.visualViewport,s=i.clientWidth,a=i.clientHeight,o=0,c=0;if(r){s=r.width,a=r.height;var l=Md();(l||!l&&e==="fixed")&&(o=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:o+Rl(n),y:c}}function jx(n){var e,t=mi(n),i=wl(n),r=(e=n.ownerDocument)==null?void 0:e.body,s=Li(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Li(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-i.scrollLeft+Rl(n),c=-i.scrollTop;return qn(r||t).direction==="rtl"&&(o+=Li(t.clientWidth,r?r.clientWidth:0)-s),{width:s,height:a,x:o,y:c}}function Cl(n){var e=qn(n),t=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+i)}function wd(n){return["html","body","#document"].indexOf(Rn(n))>=0?n.ownerDocument.body:en(n)&&Cl(n)?n:wd(Fa(n))}function Kr(n,e){var t;e===void 0&&(e=[]);var i=wd(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=Zt(i),a=r?[s].concat(s.visualViewport||[],Cl(i)?i:[]):i,o=e.concat(a);return r?o:o.concat(Kr(Fa(a)))}function rc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function eM(n,e){var t=_r(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function Ku(n,e,t){return e===_d?rc(Qx(n,t)):Ui(e)?eM(e,t):rc(jx(mi(n)))}function tM(n){var e=Kr(Fa(n)),t=["absolute","fixed"].indexOf(qn(n).position)>=0,i=t&&en(n)?ys(n):n;return Ui(i)?e.filter(function(r){return Ui(r)&&yd(r,i)&&Rn(r)!=="body"}):[]}function nM(n,e,t,i){var r=e==="clippingParents"?tM(n):[].concat(e),s=[].concat(r,[t]),a=s[0],o=s.reduce(function(c,l){var u=Ku(n,l,i);return c.top=Li(u.top,c.top),c.right=Ma(u.right,c.right),c.bottom=Ma(u.bottom,c.bottom),c.left=Li(u.left,c.left),c},Ku(n,a,i));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Rd(n){var e=n.reference,t=n.element,i=n.placement,r=i?bn(i):null,s=i?vr(i):null,a=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,c;switch(r){case Bt:c={x:a,y:e.y-t.height};break;case nn:c={x:a,y:e.y+e.height};break;case rn:c={x:e.x+e.width,y:o};break;case zt:c={x:e.x-t.width,y:o};break;default:c={x:e.x,y:e.y}}var l=r?Al(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case mr:c[l]=c[l]-(e[u]/2-t[u]/2);break;case ss:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function as(n,e){e===void 0&&(e={});var t=e,i=t.placement,r=i===void 0?n.placement:i,s=t.strategy,a=s===void 0?n.strategy:s,o=t.boundary,c=o===void 0?Tx:o,l=t.rootBoundary,u=l===void 0?_d:l,h=t.elementContext,f=h===void 0?Nr:h,p=t.altBoundary,g=p===void 0?!1:p,x=t.padding,m=x===void 0?0:x,d=bd(typeof m!="number"?m:Ed(m,Ms)),E=f===Nr?Ax:Nr,y=n.rects.popper,M=n.elements[g?E:f],T=nM(Ui(M)?M:M.contextElement||mi(n.elements.popper),c,u,a),b=_r(n.elements.reference),C=Rd({reference:b,element:y,placement:r}),v=rc(Object.assign({},y,C)),A=f===Nr?v:b,P={top:T.top-A.top+d.top,bottom:A.bottom-T.bottom+d.bottom,left:T.left-A.left+d.left,right:A.right-T.right+d.right},R=n.modifiersData.offset;if(f===Nr&&R){var O=R[r];Object.keys(P).forEach(function(G){var F=[rn,nn].indexOf(G)>=0?1:-1,L=[Bt,nn].indexOf(G)>=0?"y":"x";P[G]+=O[L]*F})}return P}function iM(n,e){e===void 0&&(e={});var t=e,i=t.placement,r=t.boundary,s=t.rootBoundary,a=t.padding,o=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?vd:c,u=vr(i),h=u?o?$u:$u.filter(function(g){return vr(g)===u}):Ms,f=h.filter(function(g){return l.indexOf(g)>=0});f.length===0&&(f=h);var p=f.reduce(function(g,x){return g[x]=as(n,{placement:x,boundary:r,rootBoundary:s,padding:a})[bn(x)],g},{});return Object.keys(p).sort(function(g,x){return p[g]-p[x]})}function rM(n){if(bn(n)===bl)return[];var e=ua(n);return[Zu(n),e,Zu(e)]}function sM(n){var e=n.state,t=n.options,i=n.name;if(!e.modifiersData[i]._skip){for(var r=t.mainAxis,s=r===void 0?!0:r,a=t.altAxis,o=a===void 0?!0:a,c=t.fallbackPlacements,l=t.padding,u=t.boundary,h=t.rootBoundary,f=t.altBoundary,p=t.flipVariations,g=p===void 0?!0:p,x=t.allowedAutoPlacements,m=e.options.placement,d=bn(m),E=d===m,y=c||(E||!g?[ua(m)]:rM(m)),M=[m].concat(y).reduce(function(Be,Le){return Be.concat(bn(Le)===bl?iM(e,{placement:Le,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:x}):Le)},[]),T=e.rects.reference,b=e.rects.popper,C=new Map,v=!0,A=M[0],P=0;P<M.length;P++){var R=M[P],O=bn(R),G=vr(R)===mr,F=[Bt,nn].indexOf(O)>=0,L=F?"width":"height",D=as(e,{placement:R,boundary:u,rootBoundary:h,altBoundary:f,padding:l}),I=F?G?rn:zt:G?nn:Bt;T[L]>b[L]&&(I=ua(I));var U=ua(I),k=[];if(s&&k.push(D[O]<=0),o&&k.push(D[I]<=0,D[U]<=0),k.every(function(Be){return Be})){A=R,v=!1;break}C.set(R,k)}if(v)for(var Y=g?3:1,Q=function(Be){var Le=M.find(function(Z){var oe=C.get(Z);if(oe)return oe.slice(0,Be).every(function(ne){return ne})});if(Le)return A=Le,"break"},ae=Y;ae>0;ae--){var Ee=Q(ae);if(Ee==="break")break}e.placement!==A&&(e.modifiersData[i]._skip=!0,e.placement=A,e.reset=!0)}}var aM={name:"flip",enabled:!0,phase:"main",fn:sM,requiresIfExists:["offset"],data:{_skip:!1}};function Ju(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Qu(n){return[Bt,rn,nn,zt].some(function(e){return n[e]>=0})}function oM(n){var e=n.state,t=n.name,i=e.rects.reference,r=e.rects.popper,s=e.modifiersData.preventOverflow,a=as(e,{elementContext:"reference"}),o=as(e,{altBoundary:!0}),c=Ju(a,i),l=Ju(o,r,s),u=Qu(c),h=Qu(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var cM={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:oM};function lM(n,e,t){var i=bn(n),r=[zt,Bt].indexOf(i)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,a=s[0],o=s[1];return a=a||0,o=(o||0)*r,[zt,rn].indexOf(i)>=0?{x:o,y:a}:{x:a,y:o}}function uM(n){var e=n.state,t=n.options,i=n.name,r=t.offset,s=r===void 0?[0,0]:r,a=vd.reduce(function(u,h){return u[h]=lM(h,e.rects,s),u},{}),o=a[e.placement],c=o.x,l=o.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[i]=a}var fM={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:uM};function hM(n){var e=n.state,t=n.name;e.modifiersData[t]=Rd({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}var Cd={name:"popperOffsets",enabled:!0,phase:"read",fn:hM,data:{}};function dM(n){return n==="x"?"y":"x"}function pM(n){var e=n.state,t=n.options,i=n.name,r=t.mainAxis,s=r===void 0?!0:r,a=t.altAxis,o=a===void 0?!1:a,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,h=t.padding,f=t.tether,p=f===void 0?!0:f,g=t.tetherOffset,x=g===void 0?0:g,m=as(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),d=bn(e.placement),E=vr(e.placement),y=!E,M=Al(d),T=dM(M),b=e.modifiersData.popperOffsets,C=e.rects.reference,v=e.rects.popper,A=typeof x=="function"?x(Object.assign({},e.rects,{placement:e.placement})):x,P=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,O={x:0,y:0};if(b){if(s){var G,F=M==="y"?Bt:zt,L=M==="y"?nn:rn,D=M==="y"?"height":"width",I=b[M],U=I+m[F],k=I-m[L],Y=p?-v[D]/2:0,Q=E===mr?C[D]:v[D],ae=E===mr?-v[D]:-C[D],Ee=e.elements.arrow,Be=p&&Ee?Tl(Ee):{width:0,height:0},Le=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Sd(),Z=Le[F],oe=Le[L],ne=Zr(0,C[D],Be[D]),Se=y?C[D]/2-Y-ne-Z-P.mainAxis:Q-ne-Z-P.mainAxis,Te=y?-C[D]/2+Y+ne+oe+P.mainAxis:ae+ne+oe+P.mainAxis,be=e.elements.arrow&&ys(e.elements.arrow),Xe=be?M==="y"?be.clientTop||0:be.clientLeft||0:0,De=(G=R?.[M])!=null?G:0,te=I+Se-De-Xe,se=I+Te-De,ie=Zr(p?Ma(U,te):U,I,p?Li(k,se):k);b[M]=ie,O[M]=ie-I}if(o){var le,ue=M==="x"?Bt:zt,Ne=M==="x"?nn:rn,we=b[T],He=T==="y"?"height":"width",ke=we+m[ue],N=we-m[Ne],it=[Bt,zt].indexOf(d)!==-1,Ye=(le=R?.[T])!=null?le:0,w=it?ke:we-C[He]-v[He]-Ye+P.altAxis,_=it?we+C[He]+v[He]-Ye-P.altAxis:N,V=p&&it?Vx(w,we,_):Zr(p?w:ke,we,p?_:N);b[T]=V,O[T]=V-we}e.modifiersData[i]=O}}var mM={name:"preventOverflow",enabled:!0,phase:"main",fn:pM,requiresIfExists:["offset"]};function gM(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function _M(n){return n===Zt(n)||!en(n)?wl(n):gM(n)}function vM(n){var e=n.getBoundingClientRect(),t=gr(e.width)/n.offsetWidth||1,i=gr(e.height)/n.offsetHeight||1;return t!==1||i!==1}function xM(n,e,t){t===void 0&&(t=!1);var i=en(e),r=en(e)&&vM(e),s=mi(e),a=_r(n,r,t),o={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!t)&&((Rn(e)!=="body"||Cl(s))&&(o=_M(e)),en(e)?(c=_r(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=Rl(s))),{x:a.left+o.scrollLeft-c.x,y:a.top+o.scrollTop-c.y,width:a.width,height:a.height}}function MM(n){var e=new Map,t=new Set,i=[];n.forEach(function(s){e.set(s.name,s)});function r(s){t.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(o){if(!t.has(o)){var c=e.get(o);c&&r(c)}}),i.push(s)}return n.forEach(function(s){t.has(s.name)||r(s)}),i}function yM(n){var e=MM(n);return Ox.reduce(function(t,i){return t.concat(e.filter(function(r){return r.phase===i}))},[])}function SM(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function bM(n){var e=n.reduce(function(t,i){var r=t[i.name];return t[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,t},{});return Object.keys(e).map(function(t){return e[t]})}var ju={placement:"bottom",modifiers:[],strategy:"absolute"};function ef(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Pl(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,i=t===void 0?[]:t,r=e.defaultOptions,s=r===void 0?ju:r;return function(a,o,c){c===void 0&&(c=s);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ju,s),modifiersData:{},elements:{reference:a,popper:o},attributes:{},styles:{}},u=[],h=!1,f={state:l,setOptions:function(x){var m=typeof x=="function"?x(l.options):x;g(),l.options=Object.assign({},s,l.options,m),l.scrollParents={reference:Ui(a)?Kr(a):a.contextElement?Kr(a.contextElement):[],popper:Kr(o)};var d=yM(bM([].concat(i,l.options.modifiers)));return l.orderedModifiers=d.filter(function(E){return E.enabled}),p(),f.update()},forceUpdate:function(){if(!h){var x=l.elements,m=x.reference,d=x.popper;if(ef(m,d)){l.rects={reference:xM(m,ys(d),l.options.strategy==="fixed"),popper:Tl(d)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(v){return l.modifiersData[v.name]=Object.assign({},v.data)});for(var E=0;E<l.orderedModifiers.length;E++){if(l.reset===!0){l.reset=!1,E=-1;continue}var y=l.orderedModifiers[E],M=y.fn,T=y.options,b=T===void 0?{}:T,C=y.name;typeof M=="function"&&(l=M({state:l,options:b,name:C,instance:f})||l)}}}},update:SM(function(){return new Promise(function(x){f.forceUpdate(),x(l)})}),destroy:function(){g(),h=!0}};if(!ef(a,o))return f;f.setOptions(c).then(function(x){!h&&c.onFirstUpdate&&c.onFirstUpdate(x)});function p(){l.orderedModifiers.forEach(function(x){var m=x.name,d=x.options,E=d===void 0?{}:d,y=x.effect;if(typeof y=="function"){var M=y({state:l,name:m,instance:f,options:E}),T=function(){};u.push(M||T)}})}function g(){u.forEach(function(x){return x()}),u=[]}return f}}Pl();var EM=[Ad,Cd,Td,xd];Pl({defaultModifiers:EM});var TM=[Ad,Cd,Td,xd,fM,aM,mM,Xx,cM],yR=Pl({defaultModifiers:TM});const xr=Math.min,Di=Math.max,ya=Math.round,Ls=Math.floor,Wn=n=>({x:n,y:n}),AM={left:"right",right:"left",bottom:"top",top:"bottom"};function Pd(n,e,t){return Di(n,xr(e,t))}function Ss(n,e){return typeof n=="function"?n(e):n}function Mr(n){return n.split("-")[0]}function bs(n){return n.split("-")[1]}function Ld(n){return n==="x"?"y":"x"}function Ll(n){return n==="y"?"height":"width"}function ui(n){const e=n[0];return e==="t"||e==="b"?"y":"x"}function Dl(n){return Ld(ui(n))}function wM(n,e,t){t===void 0&&(t=!1);const i=bs(n),r=Dl(n),s=Ll(r);let a=r==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=Sa(a)),[a,Sa(a)]}function RM(n){const e=Sa(n);return[sc(n),e,sc(e)]}function sc(n){return n.includes("start")?n.replace("start","end"):n.replace("end","start")}const tf=["left","right"],nf=["right","left"],CM=["top","bottom"],PM=["bottom","top"];function LM(n,e,t){switch(n){case"top":case"bottom":return t?e?nf:tf:e?tf:nf;case"left":case"right":return e?CM:PM;default:return[]}}function DM(n,e,t,i){const r=bs(n);let s=LM(Mr(n),t==="start",i);return r&&(s=s.map(a=>a+"-"+r),e&&(s=s.concat(s.map(sc)))),s}function Sa(n){const e=Mr(n);return AM[e]+n.slice(e.length)}function IM(n){var e,t,i,r;return{top:(e=n.top)!=null?e:0,right:(t=n.right)!=null?t:0,bottom:(i=n.bottom)!=null?i:0,left:(r=n.left)!=null?r:0}}function Dd(n){return typeof n!="number"?IM(n):{top:n,right:n,bottom:n,left:n}}function ba(n){const{x:e,y:t,width:i,height:r}=n;return{width:i,height:r,top:t,left:e,right:e+i,bottom:t+r,x:e,y:t}}function rf(n,e,t){let{reference:i,floating:r}=n;const s=ui(e),a=Dl(e),o=Ll(a),c=Mr(e),l=s==="y",u=i.x+i.width/2-r.width/2,h=i.y+i.height/2-r.height/2,f=i[o]/2-r[o]/2;let p;switch(c){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-r.width,y:h};break;default:p={x:i.x,y:i.y}}const g=bs(e);return g&&(p[a]+=f*(g==="end"?1:-1)*(t&&l?-1:1)),p}async function Id(n,e){var t;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:a,elements:o,strategy:c}=n,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:f=!1,padding:p=0}=Ss(e,n),g=Dd(p),m=o[f?h==="floating"?"reference":"floating":h],d=ba(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(m)))==null||t?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:l,rootBoundary:u,strategy:c})),E=h==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),M=await(s.isElement==null?void 0:s.isElement(y))&&await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1},T=ba(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:E,offsetParent:y,strategy:c}):E);return{top:(d.top-T.top+g.top)/M.y,bottom:(T.bottom-d.bottom+g.bottom)/M.y,left:(d.left-T.left+g.left)/M.x,right:(T.right-d.right+g.right)/M.x}}const NM=50,UM=async(n,e,t)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=t,o=a.detectOverflow?a:{...a,detectOverflow:Id},c=await(a.isRTL==null?void 0:a.isRTL(e));let l=await a.getElementRects({reference:n,floating:e,strategy:r}),{x:u,y:h}=rf(l,i,c),f=i,p=0;const g={};for(let x=0;x<s.length;x++){const m=s[x];if(!m)continue;const{name:d,fn:E}=m,{x:y,y:M,data:T,reset:b}=await E({x:u,y:h,initialPlacement:i,placement:f,strategy:r,middlewareData:g,rects:l,platform:o,elements:{reference:n,floating:e}});u=y??u,h=M??h,g[d]={...g[d],...T},b&&p<NM&&(p++,typeof b=="object"&&(b.placement&&(f=b.placement),b.rects&&(l=b.rects===!0?await a.getElementRects({reference:n,floating:e,strategy:r}):b.rects),{x:u,y:h}=rf(l,f,c)),x=-1)}return{x:u,y:h,placement:f,strategy:r,middlewareData:g}},OM=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:r,rects:s,platform:a,elements:o,middlewareData:c}=e,{element:l,padding:u=0}=Ss(n,e)||{};if(l==null)return{};const h=Dd(u),f={x:t,y:i},p=Dl(r),g=Ll(p),x=await a.getDimensions(l),m=p==="y",d=m?"top":"left",E=m?"bottom":"right",y=m?"clientHeight":"clientWidth",M=s.reference[g]+s.reference[p]-f[p]-s.floating[g],T=f[p]-s.reference[p],b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l));let C=b?b[y]:0;(!C||!await(a.isElement==null?void 0:a.isElement(b)))&&(C=o.floating[y]||s.floating[g]);const v=M/2-T/2,A=C/2-x[g]/2-1,P=xr(h[d],A),R=xr(h[E],A),O=C-x[g]-R,G=C/2-x[g]/2+v,F=Pd(P,G,O),L=!c.arrow&&bs(r)!=null&&G!==F&&s.reference[g]/2-(G<P?P:R)-x[g]/2<0,D=L?G<P?G-P:G-O:0;return{[p]:f[p]+D,data:{[p]:F,centerOffset:G-F-D,...L&&{alignmentOffset:D}},reset:L}}}),FM=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,i;const{placement:r,middlewareData:s,rects:a,initialPlacement:o,platform:c,elements:l}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...m}=Ss(n,e);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const d=Mr(r),E=ui(o),y=Mr(o)===o,M=await(c.isRTL==null?void 0:c.isRTL(l.floating)),T=f||(y||!x?[Sa(o)]:RM(o)),b=g!=="none";!f&&b&&T.push(...DM(o,x,g,M));const C=[o,...T],v=await c.detectOverflow(e,m),A=[];let P=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&A.push(v[d]),h){const F=wM(r,a,M);A.push(v[F[0]],v[F[1]])}if(P=[...P,{placement:r,overflows:A}],!A.every(F=>F<=0)){var R,O;const F=(((R=s.flip)==null?void 0:R.index)||0)+1,L=C[F];if(L&&(!(h==="alignment"?E!==ui(L):!1)||P.every(U=>ui(U.placement)===E?U.overflows[0]>0:!0)))return{data:{index:F,overflows:P},reset:{placement:L}};let D=(O=P.filter(I=>I.overflows[0]<=0).sort((I,U)=>I.overflows[1]-U.overflows[1])[0])==null?void 0:O.placement;if(!D)switch(p){case"bestFit":{var G;const I=(G=P.filter(U=>{if(b){const k=ui(U.placement);return k===E||k==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(k=>k>0).reduce((k,Y)=>k+Y,0)]).sort((U,k)=>U[1]-k[1])[0])==null?void 0:G[0];I&&(D=I);break}case"initialPlacement":D=o;break}if(r!==D)return{reset:{placement:D}}}return{}}}},BM=new Set(["left","top"]);async function zM(n,e){const{placement:t,platform:i,elements:r}=n,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),a=Mr(t),o=bs(t),c=ui(t)==="y",l=BM.has(a)?-1:1,u=s&&c?-1:1,h=Ss(e,n);let{mainAxis:f,crossAxis:p,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return o&&typeof g=="number"&&(p=o==="end"?g*-1:g),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const HM=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,i;const{x:r,y:s,placement:a,middlewareData:o}=e,c=await zM(e,n);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}},VM=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:r,platform:s}=e,{mainAxis:a=!0,crossAxis:o=!1,limiter:c={fn:E=>{let{x:y,y:M}=E;return{x:y,y:M}}},...l}=Ss(n,e),u={x:t,y:i},h=await s.detectOverflow(e,l),f=ui(r),p=Ld(f);let g=u[p],x=u[f];const m=(E,y)=>Pd(y+h[E==="y"?"top":"left"],y,y-h[E==="y"?"bottom":"right"]);a&&(g=m(p,g)),o&&(x=m(f,x));const d=c.fn({...e,[p]:g,[f]:x});return{...d,data:{x:d.x-t,y:d.y-i,enabled:{[p]:a,[f]:o}}}}}};function Ba(){return typeof window<"u"}function Cr(n){return Nd(n)?(n.nodeName||"").toLowerCase():"#document"}function Ht(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function jn(n){var e;return(e=(Nd(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Nd(n){return Ba()?n instanceof Node||n instanceof Ht(n).Node:!1}function Cn(n){return Ba()?n instanceof Element||n instanceof Ht(n).Element:!1}function gi(n){return Ba()?n instanceof HTMLElement||n instanceof Ht(n).HTMLElement:!1}function sf(n){return!Ba()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ht(n).ShadowRoot}function za(n){const{overflow:e,overflowX:t,overflowY:i,display:r}=Pn(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&r!=="inline"&&r!=="contents"}function GM(n){return/^(table|td|th)$/.test(Cr(n))}function Ha(n){try{if(n.matches(":popover-open"))return!0}catch{}try{return n.matches(":modal")}catch{return!1}}const kM=/transform|translate|scale|rotate|perspective|filter/,WM=/paint|layout|strict|content/,vi=n=>!!n&&n!=="none";let eo;function Il(n){const e=Cn(n)?Pn(n):n;return vi(e.transform)||vi(e.translate)||vi(e.scale)||vi(e.rotate)||vi(e.perspective)||!Nl()&&(vi(e.backdropFilter)||vi(e.filter))||kM.test(e.willChange||"")||WM.test(e.contain||"")}function XM(n){let e=Oi(n);for(;gi(e)&&!os(e);){if(Il(e))return e;if(Ha(e))return null;e=Oi(e)}return null}function Nl(){return eo==null&&(eo=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),eo}function os(n){return/^(html|body|#document)$/.test(Cr(n))}function Pn(n){return Ht(n).getComputedStyle(n)}function Va(n){return Cn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Oi(n){if(Cr(n)==="html")return n;const e=n.assignedSlot||n.parentNode||sf(n)&&n.host||jn(n);return sf(e)?e.host:e}function Ud(n){const e=Oi(n);return os(e)?(n.ownerDocument||n).body:gi(e)&&za(e)?e:Ud(e)}function cs(n,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const r=Ud(n),s=r===((i=n.ownerDocument)==null?void 0:i.body),a=Ht(r);if(s){const o=ac(a);return e.concat(a,a.visualViewport||[],za(r)?r:[],o&&t?cs(o):[])}else return e.concat(r,cs(r,[],t))}function ac(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function Od(n){const e=Pn(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=gi(n),s=r?n.offsetWidth:t,a=r?n.offsetHeight:i,o=ya(t)!==s||ya(i)!==a;return o&&(t=s,i=a),{width:t,height:i,$:o}}function Ul(n){return Cn(n)?n:n.contextElement}function ur(n){const e=Ul(n);if(!gi(e))return Wn(1);const t=e.getBoundingClientRect(),{width:i,height:r,$:s}=Od(e);let a=(s?ya(t.width):t.width)/i,o=(s?ya(t.height):t.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const $M=Wn(0);function Fd(n){const e=Ht(n);return!Nl()||!e.visualViewport?$M:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qM(n,e,t){return e===void 0&&(e=!1),!!t&&e&&t===Ht(n)}function Fi(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=Ul(n);let a=Wn(1);e&&(i?Cn(i)&&(a=ur(i)):a=ur(n));const o=qM(s,t,i)?Fd(s):Wn(0);let c=(r.left+o.x)/a.x,l=(r.top+o.y)/a.y,u=r.width/a.x,h=r.height/a.y;if(s&&i){const f=Ht(s),p=Cn(i)?Ht(i):i;let g=f,x=ac(g);for(;x&&p!==g;){const m=ur(x),d=x.getBoundingClientRect(),E=Pn(x),y=d.left+(x.clientLeft+parseFloat(E.paddingLeft))*m.x,M=d.top+(x.clientTop+parseFloat(E.paddingTop))*m.y;c*=m.x,l*=m.y,u*=m.x,h*=m.y,c+=y,l+=M,g=Ht(x),x=ac(g)}}return ba({width:u,height:h,x:c,y:l})}function Ga(n,e){const t=Va(n).scrollLeft;return e?e.left+t:Fi(jn(n)).left+t}function Bd(n,e){const t=n.getBoundingClientRect(),i=t.left+e.scrollLeft-Ga(n,t),r=t.top+e.scrollTop;return{x:i,y:r}}function YM(n){let{elements:e,rect:t,offsetParent:i,strategy:r}=n;const s=r==="fixed",a=jn(i),o=e?Ha(e.floating):!1;if(i===a||o&&s)return t;let c={scrollLeft:0,scrollTop:0},l=Wn(1);const u=Wn(0),h=gi(i);if((h||!s)&&((Cr(i)!=="body"||za(a))&&(c=Va(i)),h)){const p=Fi(i);l=ur(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const f=a&&!h&&!s?Bd(a,c):Wn(0);return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:t.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ZM(n){return n.getClientRects?Array.from(n.getClientRects()):[]}function KM(n){const e=Va(n),t=n.ownerDocument.body,i=Di(n.scrollWidth,n.clientWidth,t.scrollWidth,t.clientWidth),r=Di(n.scrollHeight,n.clientHeight,t.scrollHeight,t.clientHeight);let s=-e.scrollLeft+Ga(n);const a=-e.scrollTop;return Pn(t).direction==="rtl"&&(s+=Di(n.clientWidth,t.clientWidth)-i),{width:i,height:r,x:s,y:a}}const JM=25;function QM(n,e,t){t===void 0&&(t="viewport");const i=t==="layoutViewport",r=Ht(n),s=jn(n),a=r.visualViewport;let o=s.clientWidth,c=s.clientHeight,l=0,u=0;if(a){const f=!Nl()||e==="fixed";i?f||(l=-a.offsetLeft,u=-a.offsetTop):(o=a.width,c=a.height,f&&(l=a.offsetLeft,u=a.offsetTop))}if(Ga(s)<=0){const f=s.ownerDocument,p=f.body,g=getComputedStyle(p),x=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(s.clientWidth-p.clientWidth-x),d=getComputedStyle(s).scrollbarGutter==="stable both-edges"?m/2:m;d<=JM&&(o-=d)}return{width:o,height:c,x:l,y:u}}function jM(n,e){const t=Fi(n,!0,e==="fixed"),i=t.top+n.clientTop,r=t.left+n.clientLeft,s=ur(n),a=n.clientWidth*s.x,o=n.clientHeight*s.y,c=r*s.x,l=i*s.y;return{width:a,height:o,x:c,y:l}}function af(n,e,t){let i;if(e==="viewport"||e==="layoutViewport")i=QM(n,t,e);else if(e==="document")i=KM(jn(n));else if(Cn(e))i=jM(e,t);else{const r=Fd(n);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return ba(i)}function ey(n,e){const t=e.get(n);if(t)return t;let i=cs(n,[],!1).filter(o=>Cn(o)&&Cr(o)!=="body"),r=null;const s=Pn(n).position==="fixed";let a=s?Oi(n):n;for(;Cn(a)&&!os(a);){const o=Pn(a),c=Il(a),l=r?r.position:s?"fixed":"";!c&&(l==="fixed"||l==="absolute"&&o.position==="static")?i=i.filter(h=>h!==a):r=o,a=Oi(a)}return e.set(n,i),i}function ty(n){let{element:e,boundary:t,rootBoundary:i,strategy:r}=n;const a=[...t==="clippingAncestors"?Ha(e)?[]:ey(e,this._c):[].concat(t),i],o=af(e,a[0],r);let c=o.top,l=o.right,u=o.bottom,h=o.left;for(let f=1;f<a.length;f++){const p=af(e,a[f],r);c=Di(p.top,c),l=xr(p.right,l),u=xr(p.bottom,u),h=Di(p.left,h)}return{width:l-h,height:u-c,x:h,y:c}}function ny(n){const{width:e,height:t}=Od(n);return{width:e,height:t}}function iy(n,e,t){const i=gi(e),r=jn(e),s=t==="fixed",a=Fi(n,!0,s,e);let o={scrollLeft:0,scrollTop:0};const c=Wn(0);if((i||!s)&&((Cr(e)!=="body"||za(r))&&(o=Va(e)),i)){const f=Fi(e,!0,s,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}!i&&r&&(c.x=Ga(r));const l=r&&!i&&!s?Bd(r,o):Wn(0),u=a.left+o.scrollLeft-c.x-l.x,h=a.top+o.scrollTop-c.y-l.y;return{x:u,y:h,width:a.width,height:a.height}}function to(n){return Pn(n).position==="static"}function of(n,e){if(!gi(n)||Pn(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return jn(n)===t&&(t=t.ownerDocument.body),t}function zd(n,e){const t=Ht(n);if(Ha(n))return t;if(!gi(n)){let r=Oi(n);for(;r&&!os(r);){if(Cn(r)&&!to(r))return r;r=Oi(r)}return t}let i=of(n,e);for(;i&&GM(i)&&to(i);)i=of(i,e);return i&&os(i)&&to(i)&&!Il(i)?t:i||XM(n)||t}const ry=async function(n){const e=this.getOffsetParent||zd,t=this.getDimensions,i=await t(n.floating);return{reference:iy(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function sy(n){return Pn(n).direction==="rtl"}const ay={convertOffsetParentRelativeRectToViewportRelativeRect:YM,getDocumentElement:jn,getClippingRect:ty,getOffsetParent:zd,getElementRects:ry,getClientRects:ZM,getDimensions:ny,getScale:ur,isElement:Cn,isRTL:sy};function Hd(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function oy(n,e,t){let i=null,r;const s=jn(n);function a(){var u;clearTimeout(r),(u=i)==null||u.disconnect(),i=null}function o(u,h){u===void 0&&(u=!1),h===void 0&&(h=1),a();const f=n.getBoundingClientRect(),{left:p,top:g,width:x,height:m}=f;if(u||e(),!x||!m)return;const d=Ls(g),E=Ls(s.clientWidth-(p+x)),y=Ls(s.clientHeight-(g+m)),M=Ls(p),b={rootMargin:-d+"px "+-E+"px "+-y+"px "+-M+"px",threshold:Di(0,xr(1,h))||1};let C=!0;function v(A){const P=A[0].intersectionRatio;if(!Hd(f,n.getBoundingClientRect()))return o();if(P!==h){if(!C)return o();P?o(!1,P):r=setTimeout(()=>{o(!1,1e-7)},1e3)}C=!1}try{i=new IntersectionObserver(v,{...b,root:s.ownerDocument})}catch{i=new IntersectionObserver(v,b)}i.observe(n)}const c=Ht(n),l=()=>o(t);return c.addEventListener("resize",l),o(!0),()=>{c.removeEventListener("resize",l),a()}}function SR(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,l=Ul(n),u=r||s?[...l?cs(l):[],...e?cs(e):[]]:[];u.forEach(d=>{r&&d.addEventListener("scroll",t),s&&d.addEventListener("resize",t)});const h=l&&o?oy(l,t,s):null;let f=-1,p=null;a&&(p=new ResizeObserver(d=>{let[E]=d;E&&E.target===l&&p&&e&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(e)})),t()}),l&&!c&&p.observe(l),e&&p.observe(e));let g,x=c?Fi(n):null;c&&m();function m(){const d=Fi(n);x&&!Hd(x,d)&&t(),x=d,g=requestAnimationFrame(m)}return t(),()=>{var d;u.forEach(E=>{r&&E.removeEventListener("scroll",t),s&&E.removeEventListener("resize",t)}),h?.(),(d=p)==null||d.disconnect(),p=null,c&&cancelAnimationFrame(g)}}const bR=Id,ER=HM,TR=VM,AR=FM,wR=OM,RR=(n,e,t)=>{const i=new Map,r=t??{},s={...ay,...r.platform,_c:i};return UM(n,e,{...r,platform:s})};function wi(){return wi=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},wi.apply(this,arguments)}function cy(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ls(n,e)}function oc(n){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},oc(n)}function ls(n,e){return ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ls(n,e)}function ly(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fa(n,e,t){return ly()?fa=Reflect.construct.bind():fa=function(r,s,a){var o=[null];o.push.apply(o,s);var c=Function.bind.apply(r,o),l=new c;return a&&ls(l,a.prototype),l},fa.apply(null,arguments)}function uy(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function cc(n){var e=typeof Map=="function"?new Map:void 0;return cc=function(i){if(i===null||!uy(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return fa(i,arguments,oc(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ls(r,i)},cc(n)}var fy=/%[sdj%]/g,hy=function(){};function lc(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var i=t.field;e[i]=e[i]||[],e[i].push(t)}),e}function Yt(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=0,s=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var a=n.replace(fy,function(o){if(o==="%%")return"%";if(r>=s)return o;switch(o){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch{return"[Circular]"}break;default:return o}});return a}return n}function dy(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function yt(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||dy(e)&&typeof n=="string"&&!n)}function py(n,e,t){var i=[],r=0,s=n.length;function a(o){i.push.apply(i,o||[]),r++,r===s&&t(i)}n.forEach(function(o){e(o,a)})}function cf(n,e,t){var i=0,r=n.length;function s(a){if(a&&a.length){t(a);return}var o=i;i=i+1,o<r?e(n[o],s):t([])}s([])}function my(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var lf=function(n){cy(e,n);function e(t,i){var r;return r=n.call(this,"Async Validation Error")||this,r.errors=t,r.fields=i,r}return e}(cc(Error));function gy(n,e,t,i,r){if(e.first){var s=new Promise(function(f,p){var g=function(d){return i(d),d.length?p(new lf(d,lc(d))):f(r)},x=my(n);cf(x,t,g)});return s.catch(function(f){return f}),s}var a=e.firstFields===!0?Object.keys(n):e.firstFields||[],o=Object.keys(n),c=o.length,l=0,u=[],h=new Promise(function(f,p){var g=function(m){if(u.push.apply(u,m),l++,l===c)return i(u),u.length?p(new lf(u,lc(u))):f(r)};o.length||(i(u),f(r)),o.forEach(function(x){var m=n[x];a.indexOf(x)!==-1?cf(m,t,g):py(m,t,g)})});return h.catch(function(f){return f}),h}function _y(n){return!!(n&&n.message!==void 0)}function vy(n,e){for(var t=n,i=0;i<e.length;i++){if(t==null)return t;t=t[e[i]]}return t}function uf(n,e){return function(t){var i;return n.fullFields?i=vy(e,n.fullFields):i=e[t.field||n.fullField],_y(t)?(t.field=t.field||n.fullField,t.fieldValue=i,t):{message:typeof t=="function"?t():t,fieldValue:i,field:t.field||n.fullField}}}function ff(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var i=e[t];typeof i=="object"&&typeof n[t]=="object"?n[t]=wi({},n[t],i):n[t]=i}}return n}var Vd=function(e,t,i,r,s,a){e.required&&(!i.hasOwnProperty(e.field)||yt(t,a||e.type))&&r.push(Yt(s.messages.required,e.fullField))},xy=function(e,t,i,r,s){(/^\s+$/.test(t)||t==="")&&r.push(Yt(s.messages.whitespace,e.fullField))},Ds,My=function(){if(Ds)return Ds;var n="[a-fA-F\\d:]",e=function(M){return M&&M.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",i="[a-fA-F\\d]{1,4}",r=(`
(?:
(?:`+i+":){7}(?:"+i+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+i+":){6}(?:"+t+"|:"+i+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+i+":){5}(?::"+t+"|(?::"+i+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+i+":){4}(?:(?::"+i+"){0,1}:"+t+"|(?::"+i+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+i+":){3}(?:(?::"+i+"){0,2}:"+t+"|(?::"+i+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+i+":){2}(?:(?::"+i+"){0,3}:"+t+"|(?::"+i+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+i+":){1}(?:(?::"+i+"){0,4}:"+t+"|(?::"+i+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+i+"){0,5}:"+t+"|(?::"+i+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+r+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+r+"$"),c=function(M){return M&&M.exact?s:new RegExp("(?:"+e(M)+t+e(M)+")|(?:"+e(M)+r+e(M)+")","g")};c.v4=function(y){return y&&y.exact?a:new RegExp(""+e(y)+t+e(y),"g")},c.v6=function(y){return y&&y.exact?o:new RegExp(""+e(y)+r+e(y),"g")};var l="(?:(?:[a-z]+:)?//)",u="(?:\\S+(?::\\S*)?@)?",h=c.v4().source,f=c.v6().source,p="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",g="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",x="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",m="(?::\\d{2,5})?",d='(?:[/?#][^\\s"]*)?',E="(?:"+l+"|www\\.)"+u+"(?:localhost|"+h+"|"+f+"|"+p+g+x+")"+m+d;return Ds=new RegExp("(?:^"+E+"$)","i"),Ds},hf={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Gr={integer:function(e){return Gr.number(e)&&parseInt(e,10)===e},float:function(e){return Gr.number(e)&&!Gr.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Gr.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(hf.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(My())},hex:function(e){return typeof e=="string"&&!!e.match(hf.hex)}},yy=function(e,t,i,r,s){if(e.required&&t===void 0){Vd(e,t,i,r,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?Gr[o](t)||r.push(Yt(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&r.push(Yt(s.messages.types[o],e.fullField,e.type))},Sy=function(e,t,i,r,s){var a=typeof e.len=="number",o=typeof e.min=="number",c=typeof e.max=="number",l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=t,h=null,f=typeof t=="number",p=typeof t=="string",g=Array.isArray(t);if(f?h="number":p?h="string":g&&(h="array"),!h)return!1;g&&(u=t.length),p&&(u=t.replace(l,"_").length),a?u!==e.len&&r.push(Yt(s.messages[h].len,e.fullField,e.len)):o&&!c&&u<e.min?r.push(Yt(s.messages[h].min,e.fullField,e.min)):c&&!o&&u>e.max?r.push(Yt(s.messages[h].max,e.fullField,e.max)):o&&c&&(u<e.min||u>e.max)&&r.push(Yt(s.messages[h].range,e.fullField,e.min,e.max))},qi="enum",by=function(e,t,i,r,s){e[qi]=Array.isArray(e[qi])?e[qi]:[],e[qi].indexOf(t)===-1&&r.push(Yt(s.messages[qi],e.fullField,e[qi].join(", ")))},Ey=function(e,t,i,r,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(Yt(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||r.push(Yt(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},Qe={required:Vd,whitespace:xy,type:yy,range:Sy,enum:by,pattern:Ey},Ty=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t,"string")&&!e.required)return i();Qe.required(e,t,r,a,s,"string"),yt(t,"string")||(Qe.type(e,t,r,a,s),Qe.range(e,t,r,a,s),Qe.pattern(e,t,r,a,s),e.whitespace===!0&&Qe.whitespace(e,t,r,a,s))}i(a)},Ay=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&Qe.type(e,t,r,a,s)}i(a)},wy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&(Qe.type(e,t,r,a,s),Qe.range(e,t,r,a,s))}i(a)},Ry=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&Qe.type(e,t,r,a,s)}i(a)},Cy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),yt(t)||Qe.type(e,t,r,a,s)}i(a)},Py=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&(Qe.type(e,t,r,a,s),Qe.range(e,t,r,a,s))}i(a)},Ly=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&(Qe.type(e,t,r,a,s),Qe.range(e,t,r,a,s))}i(a)},Dy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return i();Qe.required(e,t,r,a,s,"array"),t!=null&&(Qe.type(e,t,r,a,s),Qe.range(e,t,r,a,s))}i(a)},Iy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&Qe.type(e,t,r,a,s)}i(a)},Ny="enum",Uy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s),t!==void 0&&Qe[Ny](e,t,r,a,s)}i(a)},Oy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t,"string")&&!e.required)return i();Qe.required(e,t,r,a,s),yt(t,"string")||Qe.pattern(e,t,r,a,s)}i(a)},Fy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t,"date")&&!e.required)return i();if(Qe.required(e,t,r,a,s),!yt(t,"date")){var c;t instanceof Date?c=t:c=new Date(t),Qe.type(e,c,r,a,s),c&&Qe.range(e,c.getTime(),r,a,s)}}i(a)},By=function(e,t,i,r,s){var a=[],o=Array.isArray(t)?"array":typeof t;Qe.required(e,t,r,a,s,o),i(a)},no=function(e,t,i,r,s){var a=e.type,o=[],c=e.required||!e.required&&r.hasOwnProperty(e.field);if(c){if(yt(t,a)&&!e.required)return i();Qe.required(e,t,r,o,s,a),yt(t,a)||Qe.type(e,t,r,o,s)}i(o)},zy=function(e,t,i,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(yt(t)&&!e.required)return i();Qe.required(e,t,r,a,s)}i(a)},Jr={string:Ty,method:Ay,number:wy,boolean:Ry,regexp:Cy,integer:Py,float:Ly,array:Dy,object:Iy,enum:Uy,pattern:Oy,date:Fy,url:no,hex:no,email:no,required:By,any:zy};function uc(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var fc=uc(),ka=function(){function n(t){this.rules=null,this._messages=fc,this.define(t)}var e=n.prototype;return e.define=function(i){var r=this;if(!i)throw new Error("Cannot configure a schema with no rules");if(typeof i!="object"||Array.isArray(i))throw new Error("Rules must be an object");this.rules={},Object.keys(i).forEach(function(s){var a=i[s];r.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(i){return i&&(this._messages=ff(uc(),i)),this._messages},e.validate=function(i,r,s){var a=this;r===void 0&&(r={}),s===void 0&&(s=function(){});var o=i,c=r,l=s;if(typeof c=="function"&&(l=c,c={}),!this.rules||Object.keys(this.rules).length===0)return l&&l(null,o),Promise.resolve(o);function u(x){var m=[],d={};function E(M){if(Array.isArray(M)){var T;m=(T=m).concat.apply(T,M)}else m.push(M)}for(var y=0;y<x.length;y++)E(x[y]);m.length?(d=lc(m),l(m,d)):l(null,o)}if(c.messages){var h=this.messages();h===fc&&(h=uc()),ff(h,c.messages),c.messages=h}else c.messages=this.messages();var f={},p=c.keys||Object.keys(this.rules);p.forEach(function(x){var m=a.rules[x],d=o[x];m.forEach(function(E){var y=E;typeof y.transform=="function"&&(o===i&&(o=wi({},o)),d=o[x]=y.transform(d)),typeof y=="function"?y={validator:y}:y=wi({},y),y.validator=a.getValidationMethod(y),y.validator&&(y.field=x,y.fullField=y.fullField||x,y.type=a.getType(y),f[x]=f[x]||[],f[x].push({rule:y,value:d,source:o,field:x}))})});var g={};return gy(f,c,function(x,m){var d=x.rule,E=(d.type==="object"||d.type==="array")&&(typeof d.fields=="object"||typeof d.defaultField=="object");E=E&&(d.required||!d.required&&x.value),d.field=x.field;function y(b,C){return wi({},C,{fullField:d.fullField+"."+b,fullFields:d.fullFields?[].concat(d.fullFields,[b]):[b]})}function M(b){b===void 0&&(b=[]);var C=Array.isArray(b)?b:[b];!c.suppressWarning&&C.length&&n.warning("async-validator:",C),C.length&&d.message!==void 0&&(C=[].concat(d.message));var v=C.map(uf(d,o));if(c.first&&v.length)return g[d.field]=1,m(v);if(!E)m(v);else{if(d.required&&!x.value)return d.message!==void 0?v=[].concat(d.message).map(uf(d,o)):c.error&&(v=[c.error(d,Yt(c.messages.required,d.field))]),m(v);var A={};d.defaultField&&Object.keys(x.value).map(function(O){A[O]=d.defaultField}),A=wi({},A,x.rule.fields);var P={};Object.keys(A).forEach(function(O){var G=A[O],F=Array.isArray(G)?G:[G];P[O]=F.map(y.bind(null,O))});var R=new n(P);R.messages(c.messages),x.rule.options&&(x.rule.options.messages=c.messages,x.rule.options.error=c.error),R.validate(x.value,x.rule.options||c,function(O){var G=[];v&&v.length&&G.push.apply(G,v),O&&O.length&&G.push.apply(G,O),m(G.length?G:null)})}}var T;if(d.asyncValidator)T=d.asyncValidator(d,x.value,M,x.source,c);else if(d.validator){try{T=d.validator(d,x.value,M,x.source,c)}catch(b){console.error?.(b),c.suppressValidatorError||setTimeout(function(){throw b},0),M(b.message)}T===!0?M():T===!1?M(typeof d.message=="function"?d.message(d.fullField||d.field):d.message||(d.fullField||d.field)+" fails"):T instanceof Array?M(T):T instanceof Error&&M(T.message)}T&&T.then&&T.then(function(){return M()},function(b){return M(b)})},function(x){u(x)},o)},e.getType=function(i){if(i.type===void 0&&i.pattern instanceof RegExp&&(i.type="pattern"),typeof i.validator!="function"&&i.type&&!Jr.hasOwnProperty(i.type))throw new Error(Yt("Unknown rule type %s",i.type));return i.type||"string"},e.getValidationMethod=function(i){if(typeof i.validator=="function")return i.validator;var r=Object.keys(i),s=r.indexOf("message");return s!==-1&&r.splice(s,1),r.length===1&&r[0]==="required"?Jr.required:Jr[this.getType(i)]||void 0},n}();ka.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");Jr[e]=t};ka.warning=hy;ka.messages=fc;ka.validators=Jr;function At(n,e){Hy(n)&&(n="100%");const t=Vy(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function Is(n){return Math.min(1,Math.max(0,n))}function Hy(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function Vy(n){return typeof n=="string"&&n.indexOf("%")!==-1}function Gd(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ns(n){return Number(n)<=1?`${Number(n)*100}%`:n}function Ri(n){return n.length===1?"0"+n:String(n)}function Gy(n,e,t){return{r:At(n,255)*255,g:At(e,255)*255,b:At(t,255)*255}}function df(n,e,t){n=At(n,255),e=At(e,255),t=At(t,255);const i=Math.max(n,e,t),r=Math.min(n,e,t);let s=0,a=0;const o=(i+r)/2;if(i===r)a=0,s=0;else{const c=i-r;switch(a=o>.5?c/(2-i-r):c/(i+r),i){case n:s=(e-t)/c+(e<t?6:0);break;case e:s=(t-n)/c+2;break;case t:s=(n-e)/c+4;break}s/=6}return{h:s,s:a,l:o}}function io(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function ky(n,e,t){let i,r,s;if(n=At(n,360),e=At(e,100),t=At(t,100),e===0)r=t,s=t,i=t;else{const a=t<.5?t*(1+e):t+e-t*e,o=2*t-a;i=io(o,a,n+1/3),r=io(o,a,n),s=io(o,a,n-1/3)}return{r:i*255,g:r*255,b:s*255}}function pf(n,e,t){n=At(n,255),e=At(e,255),t=At(t,255);const i=Math.max(n,e,t),r=Math.min(n,e,t);let s=0;const a=i,o=i-r,c=i===0?0:o/i;if(i===r)s=0;else{switch(i){case n:s=(e-t)/o+(e<t?6:0);break;case e:s=(t-n)/o+2;break;case t:s=(n-e)/o+4;break}s/=6}return{h:s,s:c,v:a}}function Wy(n,e,t){n=At(n,360)*6,e=At(e,100),t=At(t,100);const i=Math.floor(n),r=n-i,s=t*(1-e),a=t*(1-r*e),o=t*(1-(1-r)*e),c=i%6,l=[t,a,s,s,o,t][c],u=[o,t,t,a,s,s][c],h=[s,s,o,t,t,a][c];return{r:l*255,g:u*255,b:h*255}}function mf(n,e,t,i){const r=[Ri(Math.round(n).toString(16)),Ri(Math.round(e).toString(16)),Ri(Math.round(t).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Xy(n,e,t,i,r){const s=[Ri(Math.round(n).toString(16)),Ri(Math.round(e).toString(16)),Ri(Math.round(t).toString(16)),Ri(qy(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function $y(n,e,t,i){const r=n/100,s=e/100,a=t/100,o=i/100,c=255*(1-r)*(1-o),l=255*(1-s)*(1-o),u=255*(1-a)*(1-o);return{r:c,g:l,b:u}}function gf(n,e,t){let i=1-n/255,r=1-e/255,s=1-t/255,a=Math.min(i,r,s);return a===1?(i=0,r=0,s=0):(i=(i-a)/(1-a)*100,r=(r-a)/(1-a)*100,s=(s-a)/(1-a)*100),a*=100,{c:Math.round(i),m:Math.round(r),y:Math.round(s),k:Math.round(a)}}function qy(n){return Math.round(parseFloat(n)*255).toString(16)}function _f(n){return $t(n)/255}function $t(n){return parseInt(n,16)}function Yy(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}const hc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Zy(n){let e={r:0,g:0,b:0},t=1,i=null,r=null,s=null,a=!1,o=!1;return typeof n=="string"&&(n=Qy(n)),typeof n=="object"&&(kt(n.r)&&kt(n.g)&&kt(n.b)?(e=Gy(n.r,n.g,n.b),a=!0,o=String(n.r).substr(-1)==="%"?"prgb":"rgb"):kt(n.h)&&kt(n.s)&&kt(n.v)?(i=Ns(n.s),r=Ns(n.v),e=Wy(n.h,i,r),a=!0,o="hsv"):kt(n.h)&&kt(n.s)&&kt(n.l)?(i=Ns(n.s),s=Ns(n.l),e=ky(n.h,i,s),a=!0,o="hsl"):kt(n.c)&&kt(n.m)&&kt(n.y)&&kt(n.k)&&(e=$y(n.c,n.m,n.y,n.k),a=!0,o="cmyk"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=Gd(t),{ok:a,format:n.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}const Ky="[-\\+]?\\d+%?",Jy="[-\\+]?\\d*\\.\\d+%?",fi="(?:"+Jy+")|(?:"+Ky+")",ro="[\\s|\\(]+("+fi+")[,|\\s]+("+fi+")[,|\\s]+("+fi+")\\s*\\)?",Us="[\\s|\\(]+("+fi+")[,|\\s]+("+fi+")[,|\\s]+("+fi+")[,|\\s]+("+fi+")\\s*\\)?",Qt={CSS_UNIT:new RegExp(fi),rgb:new RegExp("rgb"+ro),rgba:new RegExp("rgba"+Us),hsl:new RegExp("hsl"+ro),hsla:new RegExp("hsla"+Us),hsv:new RegExp("hsv"+ro),hsva:new RegExp("hsva"+Us),cmyk:new RegExp("cmyk"+Us),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Qy(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;let e=!1;if(hc[n])n=hc[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=Qt.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=Qt.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Qt.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=Qt.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Qt.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=Qt.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Qt.cmyk.exec(n),t?{c:t[1],m:t[2],y:t[3],k:t[4]}:(t=Qt.hex8.exec(n),t?{r:$t(t[1]),g:$t(t[2]),b:$t(t[3]),a:_f(t[4]),format:e?"name":"hex8"}:(t=Qt.hex6.exec(n),t?{r:$t(t[1]),g:$t(t[2]),b:$t(t[3]),format:e?"name":"hex"}:(t=Qt.hex4.exec(n),t?{r:$t(t[1]+t[1]),g:$t(t[2]+t[2]),b:$t(t[3]+t[3]),a:_f(t[4]+t[4]),format:e?"name":"hex8"}:(t=Qt.hex3.exec(n),t?{r:$t(t[1]+t[1]),g:$t(t[2]+t[2]),b:$t(t[3]+t[3]),format:e?"name":"hex"}:!1))))))))))}function kt(n){return typeof n=="number"?!Number.isNaN(n):Qt.CSS_UNIT.test(n)}class Mt{constructor(e="",t={}){if(e instanceof Mt)return e;typeof e=="number"&&(e=Yy(e)),this.originalInput=e;const i=Zy(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format??i.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let t,i,r;const s=e.r/255,a=e.g/255,o=e.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),.2126*t+.7152*i+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Gd(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=pf(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=pf(this.r,this.g,this.b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${i}%, ${r}%)`:`hsva(${t}, ${i}%, ${r}%, ${this.roundA})`}toHsl(){const e=df(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=df(this.r,this.g,this.b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${i}%, ${r}%)`:`hsla(${t}, ${i}%, ${r}%, ${this.roundA})`}toHex(e=!1){return mf(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Xy(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),t=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${i})`:`rgba(${e}, ${t}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=t=>`${Math.round(At(t,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=t=>Math.round(At(t,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...gf(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:t,y:i,k:r}=gf(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${i}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+mf(this.r,this.g,this.b,!1);for(const[t,i]of Object.entries(hc))if(e===i)return t;return!1}toString(e){const t=!!e;e=e??this.format;let i=!1;const r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),e==="cmyk"&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Mt(this.toString())}lighten(e=10){const t=this.toHsl();return t.l+=e/100,t.l=Is(t.l),new Mt(t)}brighten(e=10){const t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new Mt(t)}darken(e=10){const t=this.toHsl();return t.l-=e/100,t.l=Is(t.l),new Mt(t)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const t=this.toHsl();return t.s-=e/100,t.s=Is(t.s),new Mt(t)}saturate(e=10){const t=this.toHsl();return t.s+=e/100,t.s=Is(t.s),new Mt(t)}greyscale(){return this.desaturate(100)}spin(e){const t=this.toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,new Mt(t)}mix(e,t=50){const i=this.toRgb(),r=new Mt(e).toRgb(),s=t/100,a={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new Mt(a)}analogous(e=6,t=30){const i=this.toHsl(),r=360/t,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new Mt(i));return s}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new Mt(e)}monochromatic(e=6){const t=this.toHsv(),{h:i}=t,{s:r}=t;let{v:s}=t;const a=[],o=1/e;for(;e--;)a.push(new Mt({h:i,s:r,v:s})),s=(s+o)%1;return a}splitcomplement(){const e=this.toHsl(),{h:t}=e;return[this,new Mt({h:(t+72)%360,s:e.s,l:e.l}),new Mt({h:(t+216)%360,s:e.s,l:e.l})]}onBackground(e){const t=this.toRgb(),i=new Mt(e).toRgb(),r=t.a+i.a*(1-t.a);return new Mt({r:(t.r*t.a+i.r*i.a*(1-t.a))/r,g:(t.g*t.a+i.g*i.a*(1-t.a))/r,b:(t.b*t.a+i.b*i.a*(1-t.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const t=this.toHsl(),{h:i}=t,r=[this],s=360/e;for(let a=1;a<e;a++)r.push(new Mt({h:(i+a*s)%360,s:t.s,l:t.l}));return r}equals(e){const t=new Mt(e);return this.format==="cmyk"||t.format==="cmyk"?this.toCmykString()===t.toCmykString():this.toRgbString()===t.toRgbString()}}var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){var t=1e3,i=6e4,r=36e5,s="millisecond",a="second",o="minute",c="hour",l="day",u="week",h="month",f="quarter",p="year",g="date",x="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var L=["th","st","nd","rd"],D=F%100;return"["+F+(L[(D-20)%10]||L[D]||L[0])+"]"}},y=function(F,L,D){var I=String(F);return!I||I.length>=L?F:""+Array(L+1-I.length).join(D)+F},M={s:y,z:function(F){var L=-F.utcOffset(),D=Math.abs(L),I=Math.floor(D/60),U=D%60;return(L<=0?"+":"-")+y(I,2,"0")+":"+y(U,2,"0")},m:function F(L,D){if(L.date()<D.date())return-F(D,L);var I=12*(D.year()-L.year())+(D.month()-L.month()),U=L.clone().add(I,h),k=D-U<0,Y=L.clone().add(I+(k?-1:1),h);return+(-(I+(D-U)/(k?U-Y:Y-U))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:h,y:p,w:u,d:l,D:g,h:c,m:o,s:a,ms:s,Q:f}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},T="en",b={};b[T]=E;var C="$isDayjsObject",v=function(F){return F instanceof O||!(!F||!F[C])},A=function F(L,D,I){var U;if(!L)return T;if(typeof L=="string"){var k=L.toLowerCase();b[k]&&(U=k),D&&(b[k]=D,U=k);var Y=L.split("-");if(!U&&Y.length>1)return F(Y[0])}else{var Q=L.name;b[Q]=L,U=Q}return!I&&U&&(T=U),U||!I&&T},P=function(F,L){if(v(F))return F.clone();var D=typeof L=="object"?L:{};return D.date=F,D.args=arguments,new O(D)},R=M;R.l=A,R.i=v,R.w=function(F,L){return P(F,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var O=function(){function F(D){this.$L=A(D.locale,null,!0),this.parse(D),this.$x=this.$x||D.x||{},this[C]=!0}var L=F.prototype;return L.parse=function(D){this.$d=function(I){var U=I.date,k=I.utc;if(U===null)return new Date(NaN);if(R.u(U))return new Date;if(U instanceof Date)return new Date(U);if(typeof U=="string"&&!/Z$/i.test(U)){var Y=U.match(m);if(Y){var Q=Y[2]-1||0,ae=(Y[7]||"0").substring(0,3);return k?new Date(Date.UTC(Y[1],Q,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ae)):new Date(Y[1],Q,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,ae)}}return new Date(U)}(D),this.init()},L.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},L.$utils=function(){return R},L.isValid=function(){return this.$d.toString()!==x},L.isSame=function(D,I){var U=P(D);return this.startOf(I)<=U&&U<=this.endOf(I)},L.isAfter=function(D,I){return P(D)<this.startOf(I)},L.isBefore=function(D,I){return this.endOf(I)<P(D)},L.$g=function(D,I,U){return R.u(D)?this[I]:this.set(U,D)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(D,I){var U=this,k=!!R.u(I)||I,Y=R.p(D),Q=function(Se,Te){var be=R.w(U.$u?Date.UTC(U.$y,Te,Se):new Date(U.$y,Te,Se),U);return k?be:be.endOf(l)},ae=function(Se,Te){return R.w(U.toDate()[Se].apply(U.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(Te)),U)},Ee=this.$W,Be=this.$M,Le=this.$D,Z="set"+(this.$u?"UTC":"");switch(Y){case p:return k?Q(1,0):Q(31,11);case h:return k?Q(1,Be):Q(0,Be+1);case u:var oe=this.$locale().weekStart||0,ne=(Ee<oe?Ee+7:Ee)-oe;return Q(k?Le-ne:Le+(6-ne),Be);case l:case g:return ae(Z+"Hours",0);case c:return ae(Z+"Minutes",1);case o:return ae(Z+"Seconds",2);case a:return ae(Z+"Milliseconds",3);default:return this.clone()}},L.endOf=function(D){return this.startOf(D,!1)},L.$set=function(D,I){var U,k=R.p(D),Y="set"+(this.$u?"UTC":""),Q=(U={},U[l]=Y+"Date",U[g]=Y+"Date",U[h]=Y+"Month",U[p]=Y+"FullYear",U[c]=Y+"Hours",U[o]=Y+"Minutes",U[a]=Y+"Seconds",U[s]=Y+"Milliseconds",U)[k],ae=k===l?this.$D+(I-this.$W):I;if(k===h||k===p){var Ee=this.clone().set(g,1);Ee.$d[Q](ae),Ee.init(),this.$d=Ee.set(g,Math.min(this.$D,Ee.daysInMonth())).$d}else Q&&this.$d[Q](ae);return this.init(),this},L.set=function(D,I){return this.clone().$set(D,I)},L.get=function(D){return this[R.p(D)]()},L.add=function(D,I){var U,k=this;D=Number(D);var Y=R.p(I),Q=function(Be){var Le=P(k);return R.w(Le.date(Le.date()+Math.round(Be*D)),k)};if(Y===h)return this.set(h,this.$M+D);if(Y===p)return this.set(p,this.$y+D);if(Y===l)return Q(1);if(Y===u)return Q(7);var ae=(U={},U[o]=i,U[c]=r,U[a]=t,U)[Y]||1,Ee=this.$d.getTime()+D*ae;return R.w(Ee,this)},L.subtract=function(D,I){return this.add(-1*D,I)},L.format=function(D){var I=this,U=this.$locale();if(!this.isValid())return U.invalidDate||x;var k=D||"YYYY-MM-DDTHH:mm:ssZ",Y=R.z(this),Q=this.$H,ae=this.$m,Ee=this.$M,Be=U.weekdays,Le=U.months,Z=U.meridiem,oe=function(Te,be,Xe,De){return Te&&(Te[be]||Te(I,k))||Xe[be].slice(0,De)},ne=function(Te){return R.s(Q%12||12,Te,"0")},Se=Z||function(Te,be,Xe){var De=Te<12?"AM":"PM";return Xe?De.toLowerCase():De};return k.replace(d,function(Te,be){return be||function(Xe){switch(Xe){case"YY":return String(I.$y).slice(-2);case"YYYY":return R.s(I.$y,4,"0");case"M":return Ee+1;case"MM":return R.s(Ee+1,2,"0");case"MMM":return oe(U.monthsShort,Ee,Le,3);case"MMMM":return oe(Le,Ee);case"D":return I.$D;case"DD":return R.s(I.$D,2,"0");case"d":return String(I.$W);case"dd":return oe(U.weekdaysMin,I.$W,Be,2);case"ddd":return oe(U.weekdaysShort,I.$W,Be,3);case"dddd":return Be[I.$W];case"H":return String(Q);case"HH":return R.s(Q,2,"0");case"h":return ne(1);case"hh":return ne(2);case"a":return Se(Q,ae,!0);case"A":return Se(Q,ae,!1);case"m":return String(ae);case"mm":return R.s(ae,2,"0");case"s":return String(I.$s);case"ss":return R.s(I.$s,2,"0");case"SSS":return R.s(I.$ms,3,"0");case"Z":return Y}return null}(Te)||Y.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(D,I,U){var k,Y=this,Q=R.p(I),ae=P(D),Ee=(ae.utcOffset()-this.utcOffset())*i,Be=this-ae,Le=function(){return R.m(Y,ae)};switch(Q){case p:k=Le()/12;break;case h:k=Le();break;case f:k=Le()/3;break;case u:k=(Be-Ee)/6048e5;break;case l:k=(Be-Ee)/864e5;break;case c:k=Be/r;break;case o:k=Be/i;break;case a:k=Be/t;break;default:k=Be}return U?k:R.a(k)},L.daysInMonth=function(){return this.endOf(h).$D},L.$locale=function(){return b[this.$L]},L.locale=function(D,I){if(!D)return this.$L;var U=this.clone(),k=A(D,I,!0);return k&&(U.$L=k),U},L.clone=function(){return R.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},F}(),G=O.prototype;return P.prototype=G,[["$ms",s],["$s",a],["$m",o],["$H",c],["$W",l],["$M",h],["$y",p],["$D",g]].forEach(function(F){G[F[1]]=function(L){return this.$g(L,F[0],F[1])}}),P.extend=function(F,L){return F.$i||(F(L,O,P),F.$i=!0),P},P.locale=A,P.isDayjs=v,P.unix=function(F){return P(1e3*F)},P.en=b[T],P.Ls=b,P.p={},P})})(kd);var jy=kd.exports;const CR=Nn(jy);var Wd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,s=/\d\d/,a=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,c={},l=function(m){return(m=+m)+(m>68?1900:2e3)},u=function(m){return function(d){this[m]=+d}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(d){if(!d||d==="Z")return 0;var E=d.match(/([+-]|\d\d)/g),y=60*E[1]+(+E[2]||0);return y===0?0:E[0]==="+"?-y:y}(m)}],f=function(m){var d=c[m];return d&&(d.indexOf?d:d.s.concat(d.f))},p=function(m,d){var E,y=c.meridiem;if(y){for(var M=1;M<=24;M+=1)if(m.indexOf(y(M,0,d))>-1){E=M>12;break}}else E=m===(d?"pm":"PM");return E},g={A:[o,function(m){this.afternoon=p(m,!1)}],a:[o,function(m){this.afternoon=p(m,!0)}],Q:[r,function(m){this.month=3*(m-1)+1}],S:[r,function(m){this.milliseconds=100*+m}],SS:[s,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[a,u("seconds")],ss:[a,u("seconds")],m:[a,u("minutes")],mm:[a,u("minutes")],H:[a,u("hours")],h:[a,u("hours")],HH:[a,u("hours")],hh:[a,u("hours")],D:[a,u("day")],DD:[s,u("day")],Do:[o,function(m){var d=c.ordinal,E=m.match(/\d+/);if(this.day=E[0],d)for(var y=1;y<=31;y+=1)d(y).replace(/\[|\]/g,"")===m&&(this.day=y)}],w:[a,u("week")],ww:[s,u("week")],M:[a,u("month")],MM:[s,u("month")],MMM:[o,function(m){var d=f("months"),E=(f("monthsShort")||d.map(function(y){return y.slice(0,3)})).indexOf(m)+1;if(E<1)throw new Error;this.month=E%12||E}],MMMM:[o,function(m){var d=f("months").indexOf(m)+1;if(d<1)throw new Error;this.month=d%12||d}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(m){this.year=l(m)}],YYYY:[/\d{4}/,u("year")],Z:h,ZZ:h};function x(m){var d,E;d=m,E=c&&c.formats;for(var y=(m=d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,R,O){var G=O&&O.toUpperCase();return R||E[O]||t[O]||E[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,L,D){return L||D.slice(1)})})).match(i),M=y.length,T=0;T<M;T+=1){var b=y[T],C=g[b],v=C&&C[0],A=C&&C[1];y[T]=A?{regex:v,parser:A}:b.replace(/^\[|\]$/g,"")}return function(P){for(var R={},O=0,G=0;O<M;O+=1){var F=y[O];if(typeof F=="string")G+=F.length;else{var L=F.regex,D=F.parser,I=P.slice(G),U=L.exec(I)[0];D.call(R,U),P=P.replace(U,"")}}return function(k){var Y=k.afternoon;if(Y!==void 0){var Q=k.hours;Y?Q<12&&(k.hours+=12):Q===12&&(k.hours=0),delete k.afternoon}}(R),R}}return function(m,d,E){E.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(l=m.parseTwoDigitYear);var y=d.prototype,M=y.parse;y.parse=function(T){var b=T.date,C=T.utc,v=T.args;this.$u=C;var A=v[1];if(typeof A=="string"){var P=v[2]===!0,R=v[3]===!0,O=P||R,G=v[2];R&&(G=v[2]),c=this.$locale(),!P&&G&&(c=E.Ls[G]),this.$d=function(I,U,k,Y){try{if(["x","X"].indexOf(U)>-1)return new Date((U==="X"?1e3:1)*I);var Q=x(U)(I),ae=Q.year,Ee=Q.month,Be=Q.day,Le=Q.hours,Z=Q.minutes,oe=Q.seconds,ne=Q.milliseconds,Se=Q.zone,Te=Q.week,be=new Date,Xe=Be||(ae||Ee?1:be.getDate()),De=ae||be.getFullYear(),te=0;ae&&!Ee||(te=Ee>0?Ee-1:be.getMonth());var se,ie=Le||0,le=Z||0,ue=oe||0,Ne=ne||0;return Se?new Date(Date.UTC(De,te,Xe,ie,le,ue,Ne+60*Se.offset*1e3)):k?new Date(Date.UTC(De,te,Xe,ie,le,ue,Ne)):(se=new Date(De,te,Xe,ie,le,ue,Ne),Te&&(se=Y(se).week(Te).toDate()),se)}catch{return new Date("")}}(b,A,C,E),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),O&&b!=this.format(A)&&(this.$d=new Date("")),c={}}else if(A instanceof Array)for(var F=A.length,L=1;L<=F;L+=1){v[1]=A[L-1];var D=E.apply(this,v);if(D.isValid()){this.$d=D.$d,this.$L=D.$L,this.init();break}L===F&&(this.$d=new Date(""))}else M.call(this,T)}}})})(Wd);var eS=Wd.exports;const PR=Nn(eS);var Xd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){return function(t,i,r){var s=i.prototype,a=function(h){return h&&(h.indexOf?h:h.s)},o=function(h,f,p,g,x){var m=h.name?h:h.$locale(),d=a(m[f]),E=a(m[p]),y=d||E.map(function(T){return T.slice(0,g)});if(!x)return y;var M=m.weekStart;return y.map(function(T,b){return y[(b+(M||0))%7]})},c=function(){return r.Ls[r.locale()]},l=function(h,f){return h.formats[f]||function(p){return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(g,x,m){return x||m.slice(1)})}(h.formats[f.toUpperCase()])},u=function(){var h=this;return{months:function(f){return f?f.format("MMMM"):o(h,"months")},monthsShort:function(f){return f?f.format("MMM"):o(h,"monthsShort","months",3)},firstDayOfWeek:function(){return h.$locale().weekStart||0},weekdays:function(f){return f?f.format("dddd"):o(h,"weekdays")},weekdaysMin:function(f){return f?f.format("dd"):o(h,"weekdaysMin","weekdays",2)},weekdaysShort:function(f){return f?f.format("ddd"):o(h,"weekdaysShort","weekdays",3)},longDateFormat:function(f){return l(h.$locale(),f)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};s.localeData=function(){return u.bind(this)()},r.localeData=function(){var h=c();return{firstDayOfWeek:function(){return h.weekStart||0},weekdays:function(){return r.weekdays()},weekdaysShort:function(){return r.weekdaysShort()},weekdaysMin:function(){return r.weekdaysMin()},months:function(){return r.months()},monthsShort:function(){return r.monthsShort()},longDateFormat:function(f){return l(h,f)},meridiem:h.meridiem,ordinal:h.ordinal}},r.months=function(){return o(c(),"months")},r.monthsShort=function(){return o(c(),"monthsShort","months",3)},r.weekdays=function(h){return o(c(),"weekdays",null,null,h)},r.weekdaysShort=function(h){return o(c(),"weekdaysShort","weekdays",3,h)},r.weekdaysMin=function(h){return o(c(),"weekdaysMin","weekdays",2,h)}}})})(Xd);var tS=Xd.exports;const LR=Nn(tS);var vf=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function nS(n,e){return!!(n===e||vf(n)&&vf(e))}function iS(n,e){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t++)if(!nS(n[t],e[t]))return!1;return!0}function DR(n,e){e===void 0&&(e=iS);var t=null;function i(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];if(t&&t.lastThis===this&&e(r,t.lastArgs))return t.lastResult;var a=n.apply(this,r);return t={lastResult:a,lastArgs:r,lastThis:this},a}return i.clear=function(){t=null},i}var $d={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){return function(t,i){var r=i.prototype,s=r.format;r.format=function(a){var o=this,c=this.$locale();if(!this.isValid())return s.bind(this)(a);var l=this.$utils(),u=(a||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(h){switch(h){case"Q":return Math.ceil((o.$M+1)/3);case"Do":return c.ordinal(o.$D);case"gggg":return o.weekYear();case"GGGG":return o.isoWeekYear();case"wo":return c.ordinal(o.week(),"W");case"w":case"ww":return l.s(o.week(),h==="w"?1:2,"0");case"W":case"WW":return l.s(o.isoWeek(),h==="W"?1:2,"0");case"k":case"kk":return l.s(String(o.$H===0?24:o.$H),h==="k"?1:2,"0");case"X":return Math.floor(o.$d.getTime()/1e3);case"x":return o.$d.getTime();case"z":return"["+o.offsetName()+"]";case"zzz":return"["+o.offsetName("long")+"]";default:return h}});return s.bind(this)(u)}}})})($d);var rS=$d.exports;const IR=Nn(rS);var qd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){var t="week",i="year";return function(r,s,a){var o=s.prototype;o.week=function(c){if(c===void 0&&(c=null),c!==null)return this.add(7*(c-this.week()),"day");var l=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var u=a(this).startOf(i).add(1,i).date(l),h=a(this).endOf(t);if(u.isBefore(h))return 1}var f=a(this).startOf(i).date(l).startOf(t).subtract(1,"millisecond"),p=this.diff(f,t,!0);return p<0?a(this).startOf("week").week():Math.ceil(p)},o.weeks=function(c){return c===void 0&&(c=null),this.week(c)}}})})(qd);var sS=qd.exports;const NR=Nn(sS);var Yd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){return function(t,i){i.prototype.weekYear=function(){var r=this.month(),s=this.week(),a=this.year();return s===1&&r===11?a+1:r===0&&s>=52?a-1:a}}})})(Yd);var aS=Yd.exports;const UR=Nn(aS);var Zd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){return function(t,i,r){i.prototype.dayOfYear=function(s){var a=Math.round((r(this).startOf("day")-r(this).startOf("year"))/864e5)+1;return s==null?a:this.add(s-a,"day")}}})})(Zd);var oS=Zd.exports;const OR=Nn(oS);var Kd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){var t="month",i="quarter";return function(r,s){var a=s.prototype;a.quarter=function(l){return this.$utils().u(l)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(l-1))};var o=a.add;a.add=function(l,u){return l=Number(l),this.$utils().p(u)===i?this.add(3*l,t):o.bind(this)(l,u)};var c=a.startOf;a.startOf=function(l,u){var h=this.$utils(),f=!!h.u(u)||u;if(h.p(l)===i){var p=this.quarter()-1;return f?this.month(3*p).startOf(t).startOf("day"):this.month(3*p+2).endOf(t).endOf("day")}return c.bind(this)(l,u)}}})})(Kd);var cS=Kd.exports;const FR=Nn(cS);var Jd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){return function(t,i){i.prototype.isSameOrAfter=function(r,s){return this.isSame(r,s)||this.isAfter(r,s)}}})})(Jd);var lS=Jd.exports;const BR=Nn(lS);var Qd={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(In,function(){return function(t,i){i.prototype.isSameOrBefore=function(r,s){return this.isSame(r,s)||this.isBefore(r,s)}}})})(Qd);var uS=Qd.exports;const zR=Nn(uS);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="185",fS=0,xf=1,hS=2,ha=1,dS=2,kr=3,di=0,Vt=1,Gn=2,Xn=0,fr=1,Mf=2,yf=3,Sf=4,pS=5,Ti=100,mS=101,gS=102,_S=103,vS=104,xS=200,MS=201,yS=202,SS=203,dc=204,pc=205,bS=206,ES=207,TS=208,AS=209,wS=210,RS=211,CS=212,PS=213,LS=214,mc=0,gc=1,_c=2,yr=3,vc=4,xc=5,Mc=6,yc=7,Fl=0,DS=1,IS=2,En=0,jd=1,ep=2,tp=3,np=4,ip=5,rp=6,sp=7,ap=300,Bi=301,Sr=302,so=303,ao=304,Wa=306,Sc=1e3,kn=1001,bc=1002,Tt=1003,NS=1004,Os=1005,Pt=1006,oo=1007,Ci=1008,qt=1009,op=1010,cp=1011,us=1012,Bl=1013,Ln=1014,yn=1015,Yn=1016,zl=1017,Hl=1018,fs=1020,lp=35902,up=35899,fp=1021,hp=1022,fn=1023,Zn=1026,Pi=1027,dp=1028,Vl=1029,zi=1030,Gl=1031,kl=1033,da=33776,pa=33777,ma=33778,ga=33779,Ec=35840,Tc=35841,Ac=35842,wc=35843,Rc=36196,Cc=37492,Pc=37496,Lc=37488,Dc=37489,Ea=37490,Ic=37491,Nc=37808,Uc=37809,Oc=37810,Fc=37811,Bc=37812,zc=37813,Hc=37814,Vc=37815,Gc=37816,kc=37817,Wc=37818,Xc=37819,$c=37820,qc=37821,Yc=36492,Zc=36494,Kc=36495,Jc=36283,Qc=36284,Ta=36285,jc=36286,US=3200,el=0,OS=1,li="",jt="srgb",Aa="srgb-linear",wa="linear",rt="srgb",Yi=7680,bf=519,FS=512,BS=513,zS=514,Wl=515,HS=516,VS=517,Xl=518,GS=519,Ef=35044,Tf="300 es",Sn=2e3,hs=2001;function kS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function WS(){const n=Ra("canvas");return n.style.display="block",n}const Af={};function wf(...n){const e="THREE."+n.shift();console.log(e,...n)}function pp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=pp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=pp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hr(...n){const e=n.join(" ");e in Af||(Af[e]=!0,Ge(...n))}function XS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const $S={[mc]:gc,[_c]:Mc,[vc]:yc,[yr]:xc,[gc]:mc,[Mc]:_c,[yc]:vc,[xc]:yr};class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,tl=180/Math.PI;function Pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function qS(n,e){return(n%e+e)%e}function lo(n,e,t){return(1-t)*n+t*e}function Ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const jl=class jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jl.prototype.isVector2=!0;let ve=jl;class Lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(h!==x||c!==f||l!==p||u!==g){let m=c*f+l*p+u*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-o;if(m<.9995){const E=Math.acos(m),y=Math.sin(E);d=Math.sin(d*E)/y,o=Math.sin(o*E)/y,c=c*d+f*o,l=l*d+p*o,u=u*d+g*o,h=h*d+x*o}else{c=c*d+f*o,l=l*d+p*o,u=u*d+g*o,h=h*d+x*o;const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const eu=class eu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eu.prototype.isVector3=!0;let H=eu;const uo=new H,Rf=new Lr,tu=class tu{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],E=r[1],y=r[4],M=r[7],T=r[2],b=r[5],C=r[8];return s[0]=a*x+o*E+c*T,s[3]=a*m+o*y+c*b,s[6]=a*d+o*M+c*C,s[1]=l*x+u*E+h*T,s[4]=l*m+u*y+h*b,s[7]=l*d+u*M+h*C,s[2]=f*x+p*E+g*T,s[5]=f*m+p*y+g*b,s[8]=f*d+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fo.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tu.prototype.isMatrix3=!0;let We=tu;const fo=new We,Cf=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const n={enabled:!0,workingColorSpace:Aa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Aa]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const et=YS();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class ZS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zi===void 0&&(Zi=Ra("canvas")),Zi.width=e.width,Zi.height=e.height;const r=Zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($n(t[i]/255)*255):t[i]=$n(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ho(r[a].image)):s.push(ho(r[a]))}else s=ho(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let JS=0;const po=new H;class Lt extends Wi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=kn,r=kn,s=Pt,a=Ci,o=fn,c=qt,l=Lt.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Pr(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sc:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sc:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ap;Lt.DEFAULT_ANISOTROPY=1;const nu=class nu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(p+1)/2,T=(d+1)/2,b=(u+f)/4,C=(h+x)/4,v=(g+m)/4;return y>M&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=C/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=v/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nu.prototype.isVector4=!0;let dt=nu;class QS extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Lt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends QS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mp extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jS extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ca=class Ca{constructor(e,t,i,r,s,a,o,c,l,u,h,f,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,f,p,g,x,m)}set(e,t,i,r,s,a,o,c,l,u,h,f,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f-x*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eb,e,tb)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),ii.crossVectors(i,Wt),ii.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),ii.crossVectors(i,Wt)),ii.normalize(),Fs.crossVectors(Wt,ii),r[0]=ii.x,r[4]=Fs.x,r[8]=Wt.x,r[1]=ii.y,r[5]=Fs.y,r[9]=Wt.y,r[2]=ii.z,r[6]=Fs.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],E=i[3],y=i[7],M=i[11],T=i[15],b=r[0],C=r[4],v=r[8],A=r[12],P=r[1],R=r[5],O=r[9],G=r[13],F=r[2],L=r[6],D=r[10],I=r[14],U=r[3],k=r[7],Y=r[11],Q=r[15];return s[0]=a*b+o*P+c*F+l*U,s[4]=a*C+o*R+c*L+l*k,s[8]=a*v+o*O+c*D+l*Y,s[12]=a*A+o*G+c*I+l*Q,s[1]=u*b+h*P+f*F+p*U,s[5]=u*C+h*R+f*L+p*k,s[9]=u*v+h*O+f*D+p*Y,s[13]=u*A+h*G+f*I+p*Q,s[2]=g*b+x*P+m*F+d*U,s[6]=g*C+x*R+m*L+d*k,s[10]=g*v+x*O+m*D+d*Y,s[14]=g*A+x*G+m*I+d*Q,s[3]=E*b+y*P+M*F+T*U,s[7]=E*C+y*R+M*L+T*k,s[11]=E*v+y*O+M*D+T*Y,s[15]=E*A+y*G+M*I+T*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15],E=c*p-l*f,y=o*p-l*h,M=o*f-c*h,T=a*p-l*u,b=a*f-c*u,C=a*h-o*u;return t*(x*E-m*y+d*M)-i*(g*E-m*T+d*b)+r*(g*y-x*T+d*C)-s*(g*M-x*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],E=t*o-i*a,y=t*c-r*a,M=t*l-s*a,T=i*c-r*o,b=i*l-s*o,C=r*l-s*c,v=u*x-h*g,A=u*m-f*g,P=u*d-p*g,R=h*m-f*x,O=h*d-p*x,G=f*d-p*m,F=E*G-y*O+M*R+T*P-b*A+C*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return e[0]=(o*G-c*O+l*R)*L,e[1]=(r*O-i*G-s*R)*L,e[2]=(x*C-m*b+d*T)*L,e[3]=(f*b-h*C-p*T)*L,e[4]=(c*P-a*G-l*A)*L,e[5]=(t*G-r*P+s*A)*L,e[6]=(m*M-g*C-d*y)*L,e[7]=(u*C-f*M+p*y)*L,e[8]=(a*O-o*P+l*v)*L,e[9]=(i*P-t*O-s*v)*L,e[10]=(g*b-x*M+d*E)*L,e[11]=(h*M-u*b-p*E)*L,e[12]=(o*A-a*R-c*v)*L,e[13]=(t*R-i*A+r*v)*L,e[14]=(x*y-g*T-m*E)*L,e[15]=(u*T-h*y+f*E)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,x=a*u,m=a*h,d=o*h,E=c*l,y=c*u,M=c*h,T=i.x,b=i.y,C=i.z;return r[0]=(1-(x+d))*T,r[1]=(p+M)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(f+d))*b,r[6]=(m+E)*b,r[7]=0,r[8]=(g+y)*C,r[9]=(m-E)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),c=Ki.set(r[8],r[9],r[10]).length();s<0&&(a=-a),sn.copy(this);const l=1/a,u=1/o,h=1/c;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=Sn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Sn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===hs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Sn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Sn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===hs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ca.prototype.isMatrix4=!0;let ht=Ca;const Ki=new H,sn=new ht,eb=new H(0,0,0),tb=new H(1,1,1),ii=new H,Fs=new H,Wt=new H,Lf=new ht,Df=new Lr;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nb=0;const If=new H,Ji=new Lr,Fn=new ht,Bs=new H,Or=new H,ib=new H,rb=new Lr,Nf=new H(1,0,0),Uf=new H(0,1,0),Of=new H(0,0,1),Ff={type:"added"},sb={type:"removed"},Qi={type:"childadded",child:null},mo={type:"childremoved",child:null};class Dt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new H,t=new pi,i=new Lr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bs.copy(e):Bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Or,Bs,this.up):Fn.lookAt(Bs,Or,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sb),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,ib),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,rb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zs extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function _o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=qS(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_o(a,s,e+1/3),this.g=_o(a,s,e),this.b=_o(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=jt){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=gp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return et.workingToColorSpace(Ct.copy(this),e),Math.round(Je(Ct.r*255,0,255))*65536+Math.round(Je(Ct.g*255,0,255))*256+Math.round(Je(Ct.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=jt){et.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Hs);const i=lo(ri.h,Hs.h,t),r=lo(ri.s,Hs.s,t),s=lo(ri.l,Hs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new nt;nt.NAMES=gp;class HR extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const an=new H,Bn=new H,vo=new H,zn=new H,ji=new H,er=new H,Bf=new H,xo=new H,Mo=new H,yo=new H,So=new dt,bo=new dt,Eo=new dt;class un{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Bn.subVectors(i,t),vo.subVectors(e,t);const a=an.dot(an),o=an.dot(Bn),c=an.dot(vo),l=Bn.dot(Bn),u=Bn.dot(vo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return So.setScalar(0),bo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,i),Eo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(So,s.x),a.addScaledVector(bo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Bn.subVectors(e,t),an.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),an.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ji.subVectors(r,i),er.subVectors(s,i),xo.subVectors(e,i);const c=ji.dot(xo),l=er.dot(xo);if(c<=0&&l<=0)return t.copy(i);Mo.subVectors(e,r);const u=ji.dot(Mo),h=er.dot(Mo);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ji,a);yo.subVectors(e,s);const p=ji.dot(yo),g=er.dot(yo);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(er,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Bf.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Bf,o);const d=1/(m+x+f);return a=x*d,o=f*d,t.copy(i).addScaledVector(ji,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Es{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Gs.subVectors(this.max,Fr),tr.subVectors(e.a,Fr),nr.subVectors(e.b,Fr),ir.subVectors(e.c,Fr),si.subVectors(nr,tr),ai.subVectors(ir,nr),xi.subVectors(tr,ir);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-xi.z,xi.y,si.z,0,-si.x,ai.z,0,-ai.x,xi.z,0,-xi.x,-si.y,si.x,0,-ai.y,ai.x,0,-xi.y,xi.x,0];return!To(t,tr,nr,ir,Gs)||(t=[1,0,0,0,1,0,0,0,1],!To(t,tr,nr,ir,Gs))?!1:(ks.crossVectors(si,ai),t=[ks.x,ks.y,ks.z],To(t,tr,nr,ir,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new H,new H,new H,new H,new H,new H,new H,new H],on=new H,Vs=new Es,tr=new H,nr=new H,ir=new H,si=new H,ai=new H,xi=new H,Fr=new H,Gs=new H,ks=new H,Mi=new H;function To(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mi.fromArray(n,s);const o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),u=i.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const xt=new H,Ws=new ve;let ob=0;class An extends Wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ef,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ef&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _p extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vp extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}const cb=new Es,Br=new H,Ao=new H;class Yl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Ao)),this.expandByPoint(Br.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lb=0;const Jt=new ht,wo=new Dt,rr=new H,Xt=new Es,zr=new Es,Et=new H;class Un extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kS(e)?vp:_p)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Xt.min,zr.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,zr.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(zr.min),Xt.expandByPoint(zr.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Et.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),Et.add(rr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new H,c[v]=new H;const l=new H,u=new H,h=new H,f=new ve,p=new ve,g=new ve,x=new H,m=new H;function d(v,A,P){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),f.fromBufferAttribute(s,v),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,P),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[v].add(x),o[A].add(x),o[P].add(x),c[v].add(m),c[A].add(m),c[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,A=E.length;v<A;++v){const P=E[v],R=P.start,O=P.count;for(let G=R,F=R+O;G<F;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new H,M=new H,T=new H,b=new H;function C(v){T.fromBufferAttribute(r,v),b.copy(T);const A=o[v];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),M.crossVectors(b,A);const R=M.dot(c[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,R)}for(let v=0,A=E.length;v<A;++v){const P=E[v],R=P.start,O=P.count;for(let G=R,F=R+O;G<F;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new An(f,u,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ub=0;class Ts extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=fr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new H,Ro=new H,Xs=new H,oi=new H,Co=new H,$s=new H,Po=new H;class xp{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ro.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xs),o=oi.dot(this.direction),c=-oi.dot(Xs),l=oi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ro).addScaledVector(Xs,f),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){Co.subVectors(t,e),$s.subVectors(i,e),Po.crossVectors(Co,$s);let a=this.direction.dot(Po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const c=o*this.direction.dot($s.crossVectors(oi,$s));if(c<0)return null;const l=o*this.direction.dot(Co.cross(oi));if(l<0||c+l>a)return null;const u=-o*oi.dot(Po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mp extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zf=new ht,yi=new xp,qs=new Yl,Hf=new H,Ys=new H,Zs=new H,Ks=new H,Lo=new H,Js=new H,Vf=new H,Qs=new H;class Kn extends Dt{constructor(e=new Un,t=new Mp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Lo.fromBufferAttribute(h,e),a?Js.addScaledVector(Lo,u):Js.addScaledVector(Lo.sub(t),u))}t.add(Js)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(qs.containsPoint(yi.origin)===!1&&(yi.intersectSphere(qs,Hf)===null||yi.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(zf.copy(s).invert(),yi.copy(e.ray).applyMatrix4(zf),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=y;M<T;M+=3){const b=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);r=js(this,d,e,i,l,u,h,b,C,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const E=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);r=js(this,a,e,i,l,u,h,E,y,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=y;M<T;M+=3){const b=M,C=M+1,v=M+2;r=js(this,d,e,i,l,u,h,b,C,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const E=m,y=m+1,M=m+2;r=js(this,a,e,i,l,u,h,E,y,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function fb(n,e,t,i,r,s,a,o){let c;if(e.side===Vt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===di,o),c===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qs);return l<t.near||l>t.far?null:{distance:l,point:Qs.clone(),object:n}}function js(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ys),n.getVertexPosition(c,Zs),n.getVertexPosition(l,Ks);const u=fb(n,e,t,i,Ys,Zs,Ks,Vf);if(u){const h=new H;un.getBarycoord(Vf,Ys,Zs,Ks,h),r&&(u.uv=un.getInterpolatedAttribute(r,o,c,l,h,new ve)),s&&(u.uv1=un.getInterpolatedAttribute(s,o,c,l,h,new ve)),a&&(u.normal=un.getInterpolatedAttribute(a,o,c,l,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};un.getNormal(Ys,Zs,Ks,f.normal),u.face=f,u.barycoord=h}return u}class hb extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Tt,u=Tt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Do=new H,db=new H,pb=new We;class bi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Do.subVectors(i,t).cross(db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Do),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pb.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Yl,mb=new ve(.5,.5),ea=new H;class Zl{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,a=new bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],E=s[12],y=s[13],M=s[14],T=s[15];if(r[0].setComponents(l-a,p-u,d-g,T-E).normalize(),r[1].setComponents(l+a,p+u,d+g,T+E).normalize(),r[2].setComponents(l+o,p+h,d+x,T+y).normalize(),r[3].setComponents(l-o,p-h,d-x,T-y).normalize(),i)r[4].setComponents(c,f,m,M).normalize(),r[5].setComponents(l-c,p-f,d-m,T-M).normalize();else if(r[4].setComponents(l-c,p-f,d-m,T-M).normalize(),t===Sn)r[5].setComponents(l+c,p+f,d+m,T+M).normalize();else if(t===hs)r[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=mb.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yp extends Lt{constructor(e=[],t=Bi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VR extends Lt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class br extends Lt{constructor(e,t,i=Ln,r,s,a,o=Tt,c=Tt,l,u=Zn,h=1){if(u!==Zn&&u!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gb extends br{constructor(e,t=Ln,i=Bi,r,s,a=Tt,o=Tt,c,l=Zn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sp extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class As extends Un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(h,2));function g(x,m,d,E,y,M,T,b,C,v,A){const P=M/C,R=T/v,O=M/2,G=T/2,F=b/2,L=C+1,D=v+1;let I=0,U=0;const k=new H;for(let Y=0;Y<D;Y++){const Q=Y*R-G;for(let ae=0;ae<L;ae++){const Ee=ae*P-O;k[x]=Ee*E,k[m]=Q*y,k[d]=F,l.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[d]=b>0?1:-1,u.push(k.x,k.y,k.z),h.push(ae/C),h.push(1-Y/v),I+=1}}for(let Y=0;Y<v;Y++)for(let Q=0;Q<C;Q++){const ae=f+Q+L*Y,Ee=f+Q+L*(Y+1),Be=f+(Q+1)+L*(Y+1),Le=f+(Q+1)+L*Y;c.push(ae,Ee,Le),c.push(Ee,Be,Le),U+=6}o.addGroup(p,U,A),p+=U,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ve:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,r=[],s=[],a=[],o=new H,c=new ht;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new H)}s[0]=new H,a[0]=new H;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kl extends On{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _b extends Kl{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Jl(){let n=0,e=0,t=0,i=0;function r(s,a,o,c){n=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Gf=new H,kf=new H,Io=new Jl,No=new Jl,Uo=new Jl;class vb extends On{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new H){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(kf.subVectors(r[0],r[1]).add(r[0]),l=kf);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Gf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Gf),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Io.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),No.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),Uo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),No.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Uo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Io.calc(c),No.calc(c),Uo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wf(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+s+a)*c+(-3*t+3*i-2*s-a)*o+s*n+t}function xb(n,e){const t=1-n;return t*t*e}function Mb(n,e){return 2*(1-n)*n*e}function yb(n,e){return n*n*e}function Qr(n,e,t,i){return xb(n,e)+Mb(n,t)+yb(n,i)}function Sb(n,e){const t=1-n;return t*t*t*e}function bb(n,e){const t=1-n;return 3*t*t*n*e}function Eb(n,e){return 3*(1-n)*n*n*e}function Tb(n,e){return n*n*n*e}function jr(n,e,t,i,r){return Sb(n,e)+bb(n,t)+Eb(n,i)+Tb(n,r)}class bp extends On{constructor(e=new ve,t=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ve){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(jr(e,r.x,s.x,a.x,o.x),jr(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ab extends On{constructor(e=new H,t=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new H){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(jr(e,r.x,s.x,a.x,o.x),jr(e,r.y,s.y,a.y,o.y),jr(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ep extends On{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wb extends On{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends On{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Qr(e,r.x,s.x,a.x),Qr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rb extends On{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Qr(e,r.x,s.x,a.x),Qr(e,r.y,s.y,a.y),Qr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ap extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Wf(o,c.x,l.x,u.x,h.x),Wf(o,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ve().fromArray(r))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:_b,CatmullRomCurve3:vb,CubicBezierCurve:bp,CubicBezierCurve3:Ab,EllipseCurve:Kl,LineCurve:Ep,LineCurve3:wb,QuadraticBezierCurve:Tp,QuadraticBezierCurve3:Rb,SplineCurve:Ap});class Cb extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new nl[r.type]().fromJSON(r))}return this}}class Xf extends Cb{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ep(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Tp(this.currentPoint.clone(),new ve(e,t),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new bp(this.currentPoint.clone(),new ve(e,t),new ve(i,r),new ve(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ap(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,a,o,c),this}absellipse(e,t,i,r,s,a,o,c){const l=new Kl(e,t,i,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pb extends Xf{constructor(e){super(e),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Xf().fromJSON(r))}return this}}function Lb(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=wp(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(i&&(s=Ob(n,e,s,t)),n.length>80*t){o=n[0],c=n[1];let u=o,h=c;for(let f=t;f<r;f+=t){const p=n[f],g=n[f+1];p<o&&(o=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return ds(s,a,t,o,c,l,0),a}function wp(n,e,t,i,r){let s;if(r===qb(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=$f(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=$f(a/i|0,n[a],n[a+1],s);return s&&Er(s,s.next)&&(ms(s),s=s.next),s}function Hi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Er(t,t.next)||pt(t.prev,t,t.next)===0)){if(ms(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ds(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Vb(n,i,r,s);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Ib(n,i,r,s):Db(n)){e.push(c.i,n.i,l.i),ms(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Nb(Hi(n),e),ds(n,e,t,i,r,s,2)):a===2&&Ub(n,e,t,i,r,s):ds(Hi(n),e,t,i,r,s,1);break}}}function Db(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,u=Math.min(r,s,a),h=Math.min(o,c,l),f=Math.max(r,s,a),p=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Wr(r,o,s,c,a,l,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ib(n,e,t,i){const r=n.prev,s=n,a=n.next;if(pt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,f=a.y,p=Math.min(o,c,l),g=Math.min(u,h,f),x=Math.max(o,c,l),m=Math.max(u,h,f),d=il(p,g,e,t,i),E=il(x,m,e,t,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=d&&M&&M.z<=E;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Wr(o,u,c,h,l,f,y.x,y.y)&&pt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Wr(o,u,c,h,l,f,M.x,M.y)&&pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&Wr(o,u,c,h,l,f,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=E;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Wr(o,u,c,h,l,f,M.x,M.y)&&pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nb(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Er(i,r)&&Cp(i,t,t.next,r)&&ps(i,r)&&ps(r,i)&&(e.push(i.i,t.i,r.i),ms(t),ms(t.next),t=n=r),t=t.next}while(t!==n);return Hi(t)}function Ub(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wb(a,o)){let c=Pp(a,o);a=Hi(a,a.next),c=Hi(c,c.next),ds(a,e,t,i,r,s,0),ds(c,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Ob(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,c=s<a-1?e[s+1]*i:n.length,l=wp(n,o,c,i,!1);l===l.next&&(l.steiner=!0),r.push(kb(l))}r.sort(Fb);for(let s=0;s<r.length;s++)t=Bb(r[s],t);return t}function Fb(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Bb(n,e){const t=zb(n,e);if(!t)return e;const i=Pp(t,n);return Hi(i,i.next),Hi(t,t.next)}function zb(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(Er(n,t))return t;do{if(Er(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Rp(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);ps(t,n)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Hb(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Hb(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function Vb(n,e,t,i){let r=n;do r.z===0&&(r.z=il(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Gb(r)}function Gb(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function il(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function kb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rp(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Wr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Rp(n,e,t,i,r,s,a,o)}function Wb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Xb(n,e)&&(ps(n,e)&&ps(e,n)&&$b(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Er(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Er(n,e){return n.x===e.x&&n.y===e.y}function Cp(n,e,t,i){const r=na(pt(n,e,t)),s=na(pt(n,e,i)),a=na(pt(t,i,n)),o=na(pt(t,i,e));return!!(r!==s&&a!==o||r===0&&ta(n,t,e)||s===0&&ta(n,i,e)||a===0&&ta(t,n,i)||o===0&&ta(t,e,i))}function ta(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function na(n){return n>0?1:n<0?-1:0}function Xb(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ps(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function $b(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pp(n,e){const t=rl(n.i,n.x,n.y),i=rl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function $f(n,e,t,i){const r=rl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ms(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qb(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Yb{static triangulate(e,t,i=2){return Lb(e,t,i)}}class cr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];qf(e),Yf(i,e);let a=e.length;t.forEach(qf);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Yf(i,t[c]);const o=Yb.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function qf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Lp extends Un{constructor(e=new Pb([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new dn(r,3)),this.setAttribute("uv",new dn(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Zb;let y,M=!1,T,b,C,v;if(d){y=d.getSpacedPoints(u),M=!0,f=!1;const te=d.isCatmullRomCurve3?d.closed:!1;T=d.computeFrenetFrames(u,te),b=new H,C=new H,v=new H}f||(m=0,p=0,g=0,x=0);const A=o.extractPoints(l);let P=A.shape;const R=A.holes;if(!cr.isClockWise(P)){P=P.reverse();for(let te=0,se=R.length;te<se;te++){const ie=R[te];cr.isClockWise(ie)&&(R[te]=ie.reverse())}}function G(te){const ie=10000000000000001e-36;let le=te[0];for(let ue=1;ue<=te.length;ue++){const Ne=ue%te.length,we=te[Ne],He=we.x-le.x,ke=we.y-le.y,N=He*He+ke*ke,it=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(le.x),Math.abs(le.y)),Ye=ie*it*it;if(N<=Ye){te.splice(Ne,1),ue--;continue}le=we}}G(P),R.forEach(G);const F=R.length,L=P;for(let te=0;te<F;te++){const se=R[te];P=P.concat(se)}function D(te,se,ie){return se||je("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(se,ie)}const I=P.length;function U(te,se,ie){let le,ue,Ne;const we=te.x-se.x,He=te.y-se.y,ke=ie.x-te.x,N=ie.y-te.y,it=we*we+He*He,Ye=we*N-He*ke;if(Math.abs(Ye)>Number.EPSILON){const w=Math.sqrt(it),_=Math.sqrt(ke*ke+N*N),V=se.x-He/w,$=se.y+we/w,K=ie.x-N/_,ce=ie.y+ke/_,fe=((K-V)*N-(ce-$)*ke)/(we*N-He*ke);le=V+we*fe-te.x,ue=$+He*fe-te.y;const J=le*le+ue*ue;if(J<=2)return new ve(le,ue);Ne=Math.sqrt(J/2)}else{let w=!1;we>Number.EPSILON?ke>Number.EPSILON&&(w=!0):we<-Number.EPSILON?ke<-Number.EPSILON&&(w=!0):Math.sign(He)===Math.sign(N)&&(w=!0),w?(le=-He,ue=we,Ne=Math.sqrt(it)):(le=we,ue=He,Ne=Math.sqrt(it/2))}return new ve(le/Ne,ue/Ne)}const k=[];for(let te=0,se=L.length,ie=se-1,le=te+1;te<se;te++,ie++,le++)ie===se&&(ie=0),le===se&&(le=0),k[te]=U(L[te],L[ie],L[le]);const Y=[];let Q,ae=k.concat();for(let te=0,se=F;te<se;te++){const ie=R[te];Q=[];for(let le=0,ue=ie.length,Ne=ue-1,we=le+1;le<ue;le++,Ne++,we++)Ne===ue&&(Ne=0),we===ue&&(we=0),Q[le]=U(ie[le],ie[Ne],ie[we]);Y.push(Q),ae=ae.concat(Q)}let Ee;if(m===0)Ee=cr.triangulateShape(L,R);else{const te=[],se=[];for(let ie=0;ie<m;ie++){const le=ie/m,ue=p*Math.cos(le*Math.PI/2),Ne=g*Math.sin(le*Math.PI/2)+x;for(let we=0,He=L.length;we<He;we++){const ke=D(L[we],k[we],Ne);Se(ke.x,ke.y,-ue),le===0&&te.push(ke)}for(let we=0,He=F;we<He;we++){const ke=R[we];Q=Y[we];const N=[];for(let it=0,Ye=ke.length;it<Ye;it++){const w=D(ke[it],Q[it],Ne);Se(w.x,w.y,-ue),le===0&&N.push(w)}le===0&&se.push(N)}}Ee=cr.triangulateShape(te,se)}const Be=Ee.length,Le=g+x;for(let te=0;te<I;te++){const se=f?D(P[te],ae[te],Le):P[te];M?(C.copy(T.normals[0]).multiplyScalar(se.x),b.copy(T.binormals[0]).multiplyScalar(se.y),v.copy(y[0]).add(C).add(b),Se(v.x,v.y,v.z)):Se(se.x,se.y,0)}for(let te=1;te<=u;te++)for(let se=0;se<I;se++){const ie=f?D(P[se],ae[se],Le):P[se];M?(C.copy(T.normals[te]).multiplyScalar(ie.x),b.copy(T.binormals[te]).multiplyScalar(ie.y),v.copy(y[te]).add(C).add(b),Se(v.x,v.y,v.z)):Se(ie.x,ie.y,h/u*te)}for(let te=m-1;te>=0;te--){const se=te/m,ie=p*Math.cos(se*Math.PI/2),le=g*Math.sin(se*Math.PI/2)+x;for(let ue=0,Ne=L.length;ue<Ne;ue++){const we=D(L[ue],k[ue],le);Se(we.x,we.y,h+ie)}for(let ue=0,Ne=R.length;ue<Ne;ue++){const we=R[ue];Q=Y[ue];for(let He=0,ke=we.length;He<ke;He++){const N=D(we[He],Q[He],le);M?Se(N.x,N.y+y[u-1].y,y[u-1].x+ie):Se(N.x,N.y,h+ie)}}}Z(),oe();function Z(){const te=r.length/3;if(f){let se=0,ie=I*se;for(let le=0;le<Be;le++){const ue=Ee[le];Te(ue[2]+ie,ue[1]+ie,ue[0]+ie)}se=u+m*2,ie=I*se;for(let le=0;le<Be;le++){const ue=Ee[le];Te(ue[0]+ie,ue[1]+ie,ue[2]+ie)}}else{for(let se=0;se<Be;se++){const ie=Ee[se];Te(ie[2],ie[1],ie[0])}for(let se=0;se<Be;se++){const ie=Ee[se];Te(ie[0]+I*u,ie[1]+I*u,ie[2]+I*u)}}i.addGroup(te,r.length/3-te,0)}function oe(){const te=r.length/3;let se=0;ne(L,se),se+=L.length;for(let ie=0,le=R.length;ie<le;ie++){const ue=R[ie];ne(ue,se),se+=ue.length}i.addGroup(te,r.length/3-te,1)}function ne(te,se){let ie=te.length;for(;--ie>=0;){const le=ie;let ue=ie-1;ue<0&&(ue=te.length-1);for(let Ne=0,we=u+m*2;Ne<we;Ne++){const He=I*Ne,ke=I*(Ne+1),N=se+le+He,it=se+ue+He,Ye=se+ue+ke,w=se+le+ke;be(N,it,Ye,w)}}}function Se(te,se,ie){c.push(te),c.push(se),c.push(ie)}function Te(te,se,ie){Xe(te),Xe(se),Xe(ie);const le=r.length/3,ue=E.generateTopUV(i,r,le-3,le-2,le-1);De(ue[0]),De(ue[1]),De(ue[2])}function be(te,se,ie,le){Xe(te),Xe(se),Xe(le),Xe(se),Xe(ie),Xe(le);const ue=r.length/3,Ne=E.generateSideWallUV(i,r,ue-6,ue-3,ue-2,ue-1);De(Ne[0]),De(Ne[1]),De(Ne[3]),De(Ne[1]),De(Ne[2]),De(Ne[3])}function Xe(te){r.push(c[te*3+0]),r.push(c[te*3+1]),r.push(c[te*3+2])}function De(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Kb(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new nl[r.type]().fromJSON(r)),new Lp(i,e.options)}}const Zb={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ve(s,a),new ve(o,c),new ve(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ve(a,1-c),new ve(l,1-h),new ve(f,1-g),new ve(x,1-d)]:[new ve(o,1-c),new ve(u,1-h),new ve(p,1-g),new ve(m,1-d)]}};function Kb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xa extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const E=d*f-a;for(let y=0;y<l;y++){const M=y*h-s;g.push(M,-E,0),x.push(0,0,1),m.push(y/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){const y=E+l*d,M=E+l*(d+1),T=E+1+l*(d+1),b=E+1+l*d;p.push(y,M,b),p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Zf(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Zf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const r in i)e[r]=i[r]}return e}function Zf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Qb={clone:Tr,merge:It};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Jb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tE extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class GR extends Ts{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nE extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iE extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ip extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Oo=new ht,Kf=new H,Jf=new H;class rE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kf),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),Oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ia=new H,ra=new Lr,vn=new H;class Np extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ia,ra,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,ra,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ia,ra,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,ra,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ci=new H,Qf=new ve,jf=new ve;class ln extends Np{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,jf),t.subVectors(jf,Qf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ql extends Np{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sE extends rE{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kR extends Ip{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new sE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class WR extends Ip{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const sr=-90,ar=1;class aE extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(sr,ar,e,t);r.layers=this.layers,this.add(r);const s=new ln(sr,ar,e,t);s.layers=this.layers,this.add(s);const a=new ln(sr,ar,e,t);a.layers=this.layers,this.add(a);const o=new ln(sr,ar,e,t);o.layers=this.layers,this.add(o);const c=new ln(sr,ar,e,t);c.layers=this.layers,this.add(c);const l=new ln(sr,ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class oE extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const eh=new ht;class XR{constructor(e,t,i=0,r=1/0){this.ray=new xp(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,i=[]){return sl(e,this,i,t),i.sort(th),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sl(e[r],this,i,t);return i.sort(th),i}}function th(n,e){return n.distance-e.distance}function sl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)sl(s[a],e,t,!0)}}const iu=class iu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};iu.prototype.isMatrix2=!0;let nh=iu;function ih(n,e,t,i){const r=cE(i);switch(t){case fp:return n*e;case dp:return n*e/r.components*r.byteLength;case Vl:return n*e/r.components*r.byteLength;case zi:return n*e*2/r.components*r.byteLength;case Gl:return n*e*2/r.components*r.byteLength;case hp:return n*e*3/r.components*r.byteLength;case fn:return n*e*4/r.components*r.byteLength;case kl:return n*e*4/r.components*r.byteLength;case da:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:case wc:return Math.max(n,16)*Math.max(e,8)/4;case Ec:case Ac:return Math.max(n,8)*Math.max(e,8)/2;case Rc:case Cc:case Lc:case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Ea:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yc:case Zc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jc:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ta:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cE(n){switch(n){case qt:case op:return{byteLength:1,components:1};case us:case cp:case Yn:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case Ln:case Bl:case yn:return{byteLength:4,components:1};case lp:case up:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Up(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lE(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ME=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ST=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ET=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:uE,alphahash_pars_fragment:fE,alphamap_fragment:hE,alphamap_pars_fragment:dE,alphatest_fragment:pE,alphatest_pars_fragment:mE,aomap_fragment:gE,aomap_pars_fragment:_E,batching_pars_vertex:vE,batching_vertex:xE,begin_vertex:ME,beginnormal_vertex:yE,bsdfs:SE,iridescence_fragment:bE,bumpmap_pars_fragment:EE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:AE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:RE,color_fragment:CE,color_pars_fragment:PE,color_pars_vertex:LE,color_vertex:DE,common:IE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:UE,displacementmap_pars_vertex:OE,displacementmap_vertex:FE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:kE,envmap_pars_fragment:WE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:nT,envmap_vertex:$E,fog_vertex:qE,fog_pars_vertex:YE,fog_fragment:ZE,fog_pars_fragment:KE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:jE,lights_lambert_pars_fragment:eT,lights_pars_begin:tT,lights_toon_fragment:iT,lights_toon_pars_fragment:rT,lights_phong_fragment:sT,lights_phong_pars_fragment:aT,lights_physical_fragment:oT,lights_physical_pars_fragment:cT,lights_fragment_begin:lT,lights_fragment_maps:uT,lights_fragment_end:fT,lightprobes_pars_fragment:hT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:_T,map_pars_fragment:vT,map_particle_fragment:xT,map_particle_pars_fragment:MT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:ST,morphinstance_vertex:bT,morphcolor_vertex:ET,morphnormal_vertex:TT,morphtarget_pars_vertex:AT,morphtarget_vertex:wT,normal_fragment_begin:RT,normal_fragment_maps:CT,normal_pars_fragment:PT,normal_pars_vertex:LT,normal_vertex:DT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:NT,clearcoat_normal_fragment_maps:UT,clearcoat_pars_fragment:OT,iridescence_pars_fragment:FT,opaque_fragment:BT,packing:zT,premultiplied_alpha_fragment:HT,project_vertex:VT,dithering_fragment:GT,dithering_pars_fragment:kT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:ZT,skinbase_vertex:KT,skinning_pars_vertex:JT,skinning_vertex:QT,skinnormal_vertex:jT,specularmap_fragment:eA,specularmap_pars_fragment:tA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:rA,transmission_pars_fragment:sA,uv_pars_fragment:aA,uv_pars_vertex:oA,uv_vertex:cA,worldpos_vertex:lA,background_vert:uA,background_frag:fA,backgroundCube_vert:hA,backgroundCube_frag:dA,cube_vert:pA,cube_frag:mA,depth_vert:gA,depth_frag:_A,distance_vert:vA,distance_frag:xA,equirect_vert:MA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:bA,meshbasic_vert:EA,meshbasic_frag:TA,meshlambert_vert:AA,meshlambert_frag:wA,meshmatcap_vert:RA,meshmatcap_frag:CA,meshnormal_vert:PA,meshnormal_frag:LA,meshphong_vert:DA,meshphong_frag:IA,meshphysical_vert:NA,meshphysical_frag:UA,meshtoon_vert:OA,meshtoon_frag:FA,points_vert:BA,points_frag:zA,shadow_vert:HA,shadow_frag:VA,sprite_vert:GA,sprite_frag:kA},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Mn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mn.physical={uniforms:It([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const sa={r:0,b:0,g:0},WA=new ht,Op=new We;Op.set(-1,0,0,0,1,0,0,0,1);function XA(n,e,t,i,r,s){const a=new nt(0);let o=r===!0?0:1,c,l,u=null,h=0,f=null;function p(E){let y=E.isScene===!0?E.background:null;if(y&&y.isTexture){const M=E.backgroundBlurriness>0;y=e.get(y,M)}return y}function g(E){let y=!1;const M=p(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(E,y){const M=p(y);M&&(M.isCubeTexture||M.mapping===Wa)?(l===void 0&&(l=new Kn(new As(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Tr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(WA.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Op),l.material.toneMapped=et.getTransfer(M.colorSpace)!==rt,(u!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Kn(new Xa(2,2),new Dn({name:"BackgroundMaterial",uniforms:Tr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,y){E.getRGB(sa,Dp(n)),t.buffers.color.setClear(sa.r,sa.g,sa.b,y,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:x,dispose:d}}function $A(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(R,O,G,F,L){let D=!1;const I=h(R,F,G,O);s!==I&&(s=I,l(s.object)),D=p(R,F,G,L),D&&g(R,F,G,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,M(R,O,G,F),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function h(R,O,G,F){const L=F.wireframe===!0;let D=i[O.id];D===void 0&&(D={},i[O.id]=D);const I=R.isInstancedMesh===!0?R.id:0;let U=D[I];U===void 0&&(U={},D[I]=U);let k=U[G.id];k===void 0&&(k={},U[G.id]=k);let Y=k[L];return Y===void 0&&(Y=f(c()),k[L]=Y),Y}function f(R){const O=[],G=[],F=[];for(let L=0;L<t;L++)O[L]=0,G[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:F,object:R,attributes:{},index:null}}function p(R,O,G,F){const L=s.attributes,D=O.attributes;let I=0;const U=G.getAttributes();for(const k in U)if(U[k].location>=0){const Q=L[k];let ae=D[k];if(ae===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;I++}return s.attributesNum!==I||s.index!==F}function g(R,O,G,F){const L={},D=O.attributes;let I=0;const U=G.getAttributes();for(const k in U)if(U[k].location>=0){let Q=D[k];Q===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),L[k]=ae,I++}s.attributes=L,s.attributesNum=I,s.index=F}function x(){const R=s.newAttributes;for(let O=0,G=R.length;O<G;O++)R[O]=0}function m(R){d(R,0)}function d(R,O){const G=s.newAttributes,F=s.enabledAttributes,L=s.attributeDivisors;G[R]=1,F[R]===0&&(n.enableVertexAttribArray(R),F[R]=1),L[R]!==O&&(n.vertexAttribDivisor(R,O),L[R]=O)}function E(){const R=s.newAttributes,O=s.enabledAttributes;for(let G=0,F=O.length;G<F;G++)O[G]!==R[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function y(R,O,G,F,L,D,I){I===!0?n.vertexAttribIPointer(R,O,G,L,D):n.vertexAttribPointer(R,O,G,F,L,D)}function M(R,O,G,F){x();const L=F.attributes,D=G.getAttributes(),I=O.defaultAttributeValues;for(const U in D){const k=D[U];if(k.location>=0){let Y=L[U];if(Y===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){const Q=Y.normalized,ae=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const Be=Ee.buffer,Le=Ee.type,Z=Ee.bytesPerElement,oe=Le===n.INT||Le===n.UNSIGNED_INT||Y.gpuType===Bl;if(Y.isInterleavedBufferAttribute){const ne=Y.data,Se=ne.stride,Te=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)d(k.location+be,ne.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<k.locationSize;be++)m(k.location+be);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let be=0;be<k.locationSize;be++)y(k.location+be,ae/k.locationSize,Le,Q,Se*Z,(Te+ae/k.locationSize*be)*Z,oe)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)d(k.location+ne,Y.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let ne=0;ne<k.locationSize;ne++)y(k.location+ne,ae/k.locationSize,Le,Q,ae*Z,ae/k.locationSize*ne*Z,oe)}}else if(I!==void 0){const Q=I[U];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(k.location,Q);break;case 3:n.vertexAttrib3fv(k.location,Q);break;case 4:n.vertexAttrib4fv(k.location,Q);break;default:n.vertexAttrib1fv(k.location,Q)}}}}E()}function T(){A();for(const R in i){const O=i[R];for(const G in O){const F=O[G];for(const L in F){const D=F[L];for(const I in D)u(D[I].object),delete D[I];delete F[L]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;const O=i[R.id];for(const G in O){const F=O[G];for(const L in F){const D=F[L];for(const I in D)u(D[I].object),delete D[I];delete F[L]}}delete i[R.id]}function C(R){for(const O in i){const G=i[O];for(const F in G){const L=G[F];if(L[R.id]===void 0)continue;const D=L[R.id];for(const I in D)u(D[I].object),delete D[I];delete L[R.id]}}}function v(R){for(const O in i){const G=i[O],F=R.isInstancedMesh===!0?R.id:0,L=G[F];if(L!==void 0){for(const D in L){const I=L[D];for(const U in I)u(I[U].object),delete I[U];delete L[D]}delete G[F],Object.keys(G).length===0&&delete i[O]}}}function A(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function qA(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let p=0;p<u;p++)f+=l[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function YA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!v)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ge("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:b}}function ZA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new bi,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,y=E*4;let M=d.clippingState||null;c.value=M,M=u(g,f,y,p);for(let T=0;T!==y;++T)M[T]=t[T];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,M=p;y!==x;++y,M+=4)a.copy(h[y]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const hi=4,rh=[.125,.215,.35,.446,.526,.582],Ai=20,KA=256,Hr=new Ql,sh=new nt;let Fo=null,Bo=0,zo=0,Ho=!1;const JA=new H;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=JA}=s;Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Bo,zo),this._renderer.xr.enabled=Ho,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Yn,format:fn,colorSpace:Aa,depthBuffer:!1},r=oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QA(s)),this._blurMaterial=ew(s,e,t),this._ggxMaterial=jA(s,e,t)}return r}_compileMaterial(e){const t=new Kn(new Un,e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,i,r,s){const c=new ln(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(sh),h.toneMapping=En,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new As,new Mp({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,d=!0):(m.color.copy(sh),d=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const T=this._cubeSize;or(r,M*T,y>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(x,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;or(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Hr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=0+l*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-hi?i-g+hi:0),d=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,or(s,m,d,3*x,2*x),r.setRenderTarget(s),r.render(o,Hr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,or(e,m,d,3*x,2*x),r.setRenderTarget(e),r.render(o,Hr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ai;m>Ai&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const d=[];let E=0;for(let C=0;C<Ai;++C){const v=C/x,A=Math.exp(-v*v/2);d.push(A),C===0?E+=A:C<m&&(E+=2*A)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const M=this._sizeLods[r],T=3*M*(r>y-hi?r-y+hi:0),b=4*(this._cubeSize-M);or(t,T,b,3*M,2*M),c.setRenderTarget(t),c.render(h,Hr)}}function QA(n){const e=[],t=[],i=[];let r=n;const s=n-hi+1+rh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-hi?c=rh[a-n+hi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,E=new Float32Array(x*g*p),y=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,v=b>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];E.set(A,x*g*b),y.set(f,m*g*b);const P=[b,b,b,b,b,b];M.set(P,d*g*b)}const T=new Un;T.setAttribute("position",new An(E,x)),T.setAttribute("uv",new An(y,m)),T.setAttribute("faceIndex",new An(M,d)),i.push(new Kn(T,null)),r>hi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function oh(n,e,t){const i=new Tn(n,e,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jA(n,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ew(n,e,t){const i=new Float32Array(Ai),r=new H(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ch(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function lh(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fp extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new As(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new Kn(r,s),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Pt),new aE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function tw(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===so||p===ao)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new Fp(g.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===so||p===ao,x=p===Bi||p===Sr;if(g||x){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new ah(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const E=f.image;return g&&E&&E.height>0||x&&E&&c(E)?(i===null&&(i=new ah(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===so?f.mapping=Bi:p===ao&&(f.mapping=Sr),f}function c(f){let p=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&p++;return p===g}function l(f){const p=f.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function nw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&hr("WebGLRenderer: "+i+" extension not supported."),r}}}function iw(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(g===void 0)return;if(p!==null){const E=p.array;x=p.version;for(let y=0,M=E.length;y<M;y+=3){const T=E[y+0],b=E[y+1],C=E[y+2];f.push(T,b,b,C,C,T)}}else{const E=g.array;x=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const T=y+0,b=y+1,C=y+2;f.push(T,b,b,C,C,T)}}const m=new(g.count>=65535?vp:_p)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function rw(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function l(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,h*a,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function aw(n,e,t){const i=new WeakMap,r=new dt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let A=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*T*4*h),C=new mp(b,M,T,h);C.type=yn,C.needsUpdate=!0;const v=y*4;for(let P=0;P<h;P++){const R=m[P],O=d[P],G=E[P],F=M*T*4*P;for(let L=0;L<R.count;L++){const D=L*v;p===!0&&(r.fromBufferAttribute(R,L),b[F+D+0]=r.x,b[F+D+1]=r.y,b[F+D+2]=r.z,b[F+D+3]=0),g===!0&&(r.fromBufferAttribute(O,L),b[F+D+4]=r.x,b[F+D+5]=r.y,b[F+D+6]=r.z,b[F+D+7]=0),x===!0&&(r.fromBufferAttribute(G,L),b[F+D+8]=r.x,b[F+D+9]=r.y,b[F+D+10]=r.z,b[F+D+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new ve(M,T)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function ow(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const cw={[jd]:"LINEAR_TONE_MAPPING",[ep]:"REINHARD_TONE_MAPPING",[tp]:"CINEON_TONE_MAPPING",[np]:"ACES_FILMIC_TONE_MAPPING",[rp]:"AGX_TONE_MAPPING",[sp]:"NEUTRAL_TONE_MAPPING",[ip]:"CUSTOM_TONE_MAPPING"};function lw(n,e,t,i,r,s){const a=new Tn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new br(e,t):void 0}),o=new Tn(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),c=new Un;c.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dn([0,2,0,0,2,0],2));const l=new tE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Kn(c,l),h=new Ql(-1,1,1,-1,0,1);let f=null,p=null,g=!1,x,m=null,d=[],E=!1;this.setSize=function(y,M){a.setSize(y,M),o.setSize(y,M);for(let T=0;T<d.length;T++){const b=d[T];b.setSize&&b.setSize(y,M)}},this.setEffects=function(y){d=y,E=d.length>0&&d[0].isRenderPass===!0;const M=a.width,T=a.height;for(let b=0;b<d.length;b++){const C=d[b];C.setSize&&C.setSize(M,T)}},this.begin=function(y,M){if(g||y.toneMapping===En&&d.length===0)return!1;if(m=M,M!==null){const T=M.width,b=M.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return E===!1&&y.setRenderTarget(a),x=y.toneMapping,y.toneMapping=En,!0},this.hasRenderPass=function(){return E},this.end=function(y,M){y.toneMapping=x,g=!0;let T=a,b=o;for(let C=0;C<d.length;C++){const v=d[C];if(v.enabled!==!1&&(v.render(y,b,T,M),v.needsSwap!==!1)){const A=T;T=b,b=A}}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,l.defines={},et.getTransfer(f)===rt&&(l.defines.SRGB_TRANSFER="");const C=cw[p];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(u,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Bp=new Lt,al=new br(1,1),zp=new mp,Hp=new jS,Vp=new yp,uh=[],fh=[],hh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=uh[r];if(s===void 0&&(s=new Float32Array(r),uh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function pw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;ph.set(i),n.uniformMatrix2fv(this.addr,!1,ph),bt(t,i)}}function mw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),bt(t,i)}}function gw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),bt(t,i)}}function _w(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Mw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function yw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Tw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(al.compareFunction=t.isReversedDepthBuffer()?Xl:Wl,s=al):s=Bp,t.setTexture2D(e||s,r)}function Aw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hp,r)}function ww(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vp,r)}function Rw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zp,r)}function Cw(n){switch(n){case 5126:return uw;case 35664:return fw;case 35665:return hw;case 35666:return dw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return _w;case 35667:case 35671:return vw;case 35668:case 35672:return xw;case 35669:case 35673:return Mw;case 5125:return yw;case 36294:return Sw;case 36295:return bw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Rw}}function Pw(n,e){n.uniform1fv(this.addr,e)}function Lw(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dw(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Iw(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Nw(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Uw(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ow(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fw(n,e){n.uniform1iv(this.addr,e)}function Bw(n,e){n.uniform2iv(this.addr,e)}function zw(n,e){n.uniform3iv(this.addr,e)}function Hw(n,e){n.uniform4iv(this.addr,e)}function Vw(n,e){n.uniform1uiv(this.addr,e)}function Gw(n,e){n.uniform2uiv(this.addr,e)}function kw(n,e){n.uniform3uiv(this.addr,e)}function Ww(n,e){n.uniform4uiv(this.addr,e)}function Xw(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=al:a=Bp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function $w(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hp,s[a])}function qw(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vp,s[a])}function Yw(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zp,s[a])}function Zw(n){switch(n){case 5126:return Pw;case 35664:return Lw;case 35665:return Dw;case 35666:return Iw;case 35674:return Nw;case 35675:return Uw;case 35676:return Ow;case 5124:case 35670:return Fw;case 35667:case 35671:return Bw;case 35668:case 35672:return zw;case 35669:case 35673:return Hw;case 5125:return Vw;case 36294:return Gw;case 36295:return kw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Yw}}class Kw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cw(t.type)}}class Jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zw(t.type)}}class Qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function mh(n,e){n.seq.push(e),n.map[e.id]=e}function jw(n,e,t){const i=n.name,r=i.length;for(Vo.lastIndex=0;;){const s=Vo.exec(i),a=Vo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){mh(t,l===void 0?new Kw(o,n,e):new Jw(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Qw(o),mh(t,h)),t=h}}}class _a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);jw(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function gh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const e1=37297;let t1=0;function n1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const _h=new We;function i1(n){et._getMatrix(_h,et.workingColorSpace,n);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+n1(n.getShaderSource(e),o)}else return s}function r1(n,e){const t=i1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const s1={[jd]:"Linear",[ep]:"Reinhard",[tp]:"Cineon",[np]:"ACESFilmic",[rp]:"AgX",[sp]:"Neutral",[ip]:"Custom"};function a1(n,e){const t=s1[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const aa=new H;function o1(){et.getLuminanceCoefficients(aa);const n=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function l1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function u1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xr(n){return n!==""}function xh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(f1,d1)}const h1=new Map;function d1(n,e){let t=Ze[e];if(t===void 0){const i=h1.get(e);if(i!==void 0)t=Ze[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ol(t)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(n){return n.replace(p1,m1)}function m1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const g1={[ha]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function _1(n){return g1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v1={[Bi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function x1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":v1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const M1={[Sr]:"ENVMAP_MODE_REFRACTION"};function y1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":M1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S1={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[DS]:"ENVMAP_BLENDING_MIX",[IS]:"ENVMAP_BLENDING_ADD"};function b1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":S1[n.combine]||"ENVMAP_BLENDING_NONE"}function E1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T1(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_1(t),l=x1(t),u=y1(t),h=b1(t),f=E1(t),p=c1(t),g=l1(s),x=r.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xr).join(`
`),d.length>0&&(d+=`
`)):(m=[Sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),d=[Sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ze.tonemapping_pars_fragment:"",t.toneMapping!==En?a1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,r1("linearToOutputTexel",t.outputColorSpace),o1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=ol(a),a=xh(a,t),a=Mh(a,t),o=ol(o),o=xh(o,t),o=Mh(o,t),a=yh(a),o=yh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=E+m+a,M=E+d+o,T=gh(r,r.VERTEX_SHADER,y),b=gh(r,r.FRAGMENT_SHADER,M);r.attachShader(x,T),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(T)||"",F=r.getShaderInfoLog(b)||"",L=O.trim(),D=G.trim(),I=F.trim();let U=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,b);else{const Y=vh(r,T,"vertex"),Q=vh(r,b,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Y+`
`+Q)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(D===""||I==="")&&(k=!1);k&&(R.diagnostics={runnable:U,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:I,prefix:d}})}r.deleteShader(T),r.deleteShader(b),v=new _a(r,x),A=u1(r,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,e1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let A1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R1(e),t.set(e,i)),i}}class R1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function C1(n){return n===zi||n===Ea||n===Ta}function P1(n,e,t,i,r,s){const a=new ql,o=new w1,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,A,P,R,O,G){const F=R.fog,L=O.geometry,D=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,I=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||D,I),k=U&&U.mapping===Wa?U.image.height:null,Y=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ae=Q!==void 0?Q.length:0;let Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let Be,Le,Z,oe;if(Y){const Ce=Mn[Y];Be=Ce.vertexShader,Le=Ce.fragmentShader}else{Be=v.vertexShader,Le=v.fragmentShader;const Ce=o.getVertexShaderStage(v),mt=o.getFragmentShaderStage(v);o.update(v,Ce,mt),Z=Ce.id,oe=mt.id}const ne=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Te=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,Xe=!!v.map,De=!!v.matcap,te=!!U,se=!!v.aoMap,ie=!!v.lightMap,le=!!v.bumpMap&&v.wireframe===!1,ue=!!v.normalMap,Ne=!!v.displacementMap,we=!!v.emissiveMap,He=!!v.metalnessMap,ke=!!v.roughnessMap,N=v.anisotropy>0,it=v.clearcoat>0,Ye=v.dispersion>0,w=v.iridescence>0,_=v.sheen>0,V=v.transmission>0,$=N&&!!v.anisotropyMap,K=it&&!!v.clearcoatMap,ce=it&&!!v.clearcoatNormalMap,fe=it&&!!v.clearcoatRoughnessMap,J=w&&!!v.iridescenceMap,ee=w&&!!v.iridescenceThicknessMap,de=_&&!!v.sheenColorMap,Ue=_&&!!v.sheenRoughnessMap,ge=!!v.specularMap,pe=!!v.specularColorMap,ze=!!v.specularIntensityMap,Ve=V&&!!v.transmissionMap,$e=V&&!!v.thicknessMap,B=!!v.gradientMap,he=!!v.alphaMap,j=v.alphaTest>0,me=!!v.alphaHash,ye=!!v.extensions;let re=En;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(re=n.toneMapping);const Ie={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Le,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Te,instancingColor:Te&&O.instanceColor!==null,instancingMorph:Te&&O.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:De,envMap:te,envMapMode:te&&U.mapping,envMapCubeUVHeight:k,aoMap:se,lightMap:ie,bumpMap:le,normalMap:ue,displacementMap:Ne,emissiveMap:we,normalMapObjectSpace:ue&&v.normalMapType===OS,normalMapTangentSpace:ue&&v.normalMapType===el,packedNormalMap:ue&&v.normalMapType===el&&C1(v.normalMap.format),metalnessMap:He,roughnessMap:ke,anisotropy:N,anisotropyMap:$,clearcoat:it,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,dispersion:Ye,iridescence:w,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:ge,specularColorMap:pe,specularIntensityMap:ze,transmission:V,transmissionMap:Ve,thicknessMap:$e,gradientMap:B,opaque:v.transparent===!1&&v.blending===fr&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:j,alphaHash:me,combine:v.combine,mapUv:Xe&&g(v.map.channel),aoMapUv:se&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:le&&g(v.bumpMap.channel),normalMapUv:ue&&g(v.normalMap.channel),displacementMapUv:Ne&&g(v.displacementMap.channel),emissiveMapUv:we&&g(v.emissiveMap.channel),metalnessMapUv:He&&g(v.metalnessMap.channel),roughnessMapUv:ke&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:K&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(v.sheenRoughnessMap.channel),specularMapUv:ge&&g(v.specularMap.channel),specularColorMapUv:pe&&g(v.specularColorMap.channel),specularIntensityMapUv:ze&&g(v.specularIntensityMap.channel),transmissionMapUv:Ve&&g(v.transmissionMap.channel),thicknessMapUv:$e&&g(v.thicknessMap.channel),alphaMapUv:he&&g(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ue||N),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Xe||he),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===rt,decodeVideoTextureEmissive:we&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gn,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(d(A,v),E(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function d(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function E(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){const A=p[v.type];let P;if(A){const R=Mn[A];P=Qb.clone(R.uniforms)}else P=v.uniforms;return P}function M(v,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new T1(n,A,v,r),l.push(P),u.set(A,P)),P}function T(v){if(--v.usedTimes===0){const A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:C}}function L1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function D1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,x,m,d){let E=n[e];return E===void 0?(E={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},n[e]=E):(E.id=f.id,E.object=f,E.geometry=p,E.material=g,E.materialVariant=a(f),E.groupOrder=x,E.renderOrder=f.renderOrder,E.z=m,E.group=d),e++,E}function c(f,p,g,x,m,d){const E=o(f,p,g,x,m,d);g.transmission>0?i.push(E):g.transparent===!0?r.push(E):t.push(E)}function l(f,p,g,x,m,d){const E=o(f,p,g,x,m,d);g.transmission>0?i.unshift(E):g.transparent===!0?r.unshift(E):t.unshift(E)}function u(f,p,g){t.length>1&&t.sort(f||D1),i.length>1&&i.sort(p||bh),r.length>1&&r.sort(p||bh),g&&(t.reverse(),i.reverse(),r.reverse())}function h(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function I1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Eh,n.set(i,[a])):r>=s.length?(a=new Eh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function N1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new nt};break;case"SpotLight":t={position:new H,direction:new H,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function U1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let O1=0;function F1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B1(n){const e=new N1,t=U1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new ht,a=new ht;function o(l){let u=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,E=0,y=0,M=0,T=0,b=0,C=0;l.sort(F1);for(let A=0,P=l.length;A<P;A++){const R=l[A],O=R.color,G=R.intensity,F=R.distance;let L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===zi?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*G,h+=O.g*G,f+=O.b*G;else if(R.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(R.sh.coefficients[D],G);C++}else if(R.isDirectionalLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const I=R.shadow,U=t.get(R);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=R.shadow.matrix,E++}i.directional[p]=D,p++}else if(R.isSpotLight){const D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(O).multiplyScalar(G),D.distance=F,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,i.spot[x]=D;const I=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,I.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[x]=I.matrix,R.castShadow){const U=t.get(R);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=L,M++}x++}else if(R.isRectAreaLight){const D=e.get(R);D.color.copy(O).multiplyScalar(G),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=D,m++}else if(R.isPointLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){const I=R.shadow,U=t.get(R);U.shadowIntensity=I.intensity,U.shadowBias=I.bias,U.shadowNormalBias=I.normalBias,U.shadowRadius=I.radius,U.shadowMapSize=I.mapSize,U.shadowCameraNear=I.camera.near,U.shadowCameraFar=I.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=D,g++}else if(R.isHemisphereLight){const D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(G),D.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[d]=D,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==p||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==d||v.numDirectionalShadows!==E||v.numPointShadows!==y||v.numSpotShadows!==M||v.numSpotMaps!==T||v.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,v.directionalLength=p,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=d,v.numDirectionalShadows=E,v.numPointShadows=y,v.numSpotShadows=M,v.numSpotMaps=T,v.numLightProbes=C,i.version=O1++)}function c(l,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const y=l[d];if(y.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Th(n){const e=new B1(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function z1(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Th(n),e.set(r,[o])):s>=a.length?(o=new Th(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,G1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],k1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ah=new ht,Vr=new H,Go=new H;function W1(n,e,t){let i=new Zl;const r=new ve,s=new ve,a=new dt,o=new nE,c=new iE,l={},u=t.maxTextureSize,h={[di]:Vt,[Vt]:di,[Gn]:Gn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:H1,fragmentShader:V1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let d=this.type;this.render=function(b,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===dS&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ha);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=d!==this.type;G&&C.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(L=>L.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,L=b.length;F<L;F++){const D=b[F],I=D.shadow;if(I===void 0){Ge("WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const U=I.getFrameExtents();r.multiply(U),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,I.mapSize.y=s.y));const k=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=k,I.map===null||G===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===kr){if(D.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Tn(r.x,r.y,{format:zi,type:Yn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),I.map.texture.name=D.name+".shadowMap",I.map.depthTexture=new br(r.x,r.y,yn),I.map.depthTexture.name=D.name+".shadowMapDepth",I.map.depthTexture.format=Zn,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tt,I.map.depthTexture.magFilter=Tt}else D.isPointLight?(I.map=new Fp(r.x),I.map.depthTexture=new gb(r.x,Ln)):(I.map=new Tn(r.x,r.y),I.map.depthTexture=new br(r.x,r.y,Ln)),I.map.depthTexture.name=D.name+".shadowMap",I.map.depthTexture.format=Zn,this.type===ha?(I.map.depthTexture.compareFunction=k?Xl:Wl,I.map.depthTexture.minFilter=Pt,I.map.depthTexture.magFilter=Pt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tt,I.map.depthTexture.magFilter=Tt);I.camera.updateProjectionMatrix()}const Y=I.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<Y;Q++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(I.map),n.clear());const ae=I.getViewport(Q);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),O.viewport(a)}if(D.isPointLight){const ae=I.camera,Ee=I.matrix,Be=D.distance||ae.far;Be!==ae.far&&(ae.far=Be,ae.updateProjectionMatrix()),Vr.setFromMatrixPosition(D.matrixWorld),ae.position.copy(Vr),Go.copy(ae.position),Go.add(G1[Q]),ae.up.copy(k1[Q]),ae.lookAt(Go),ae.updateMatrixWorld(),Ee.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Ah.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Ah,ae.coordinateSystem,ae.reversedDepth)}else I.updateMatrices(D);i=I.getFrustum(),M(C,v,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===kr&&E(I,v),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(A,P,R)};function E(b,C){const v=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tn(r.x,r.y,{format:zi,type:Yn})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,v,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,v,p,x,null)}function y(b,C,v,A){let P=null;const R=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)P=R;else if(P=v.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=P.uuid,G=C.uuid;let F=l[O];F===void 0&&(F={},l[O]=F);let L=F[G];L===void 0&&(L=P.clone(),F[G]=L,C.addEventListener("dispose",T)),P=L}if(P.visible=C.visible,P.wireframe=C.wireframe,A===kr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=v}return P}function M(b,C,v,A,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===kr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const G=e.update(b),F=b.material;if(Array.isArray(F)){const L=G.groups;for(let D=0,I=L.length;D<I;D++){const U=L[D],k=F[U.materialIndex];if(k&&k.visible){const Y=y(b,k,A,P);b.onBeforeShadow(n,b,C,v,G,Y,U),n.renderBufferDirect(v,null,G,Y,b,U),b.onAfterShadow(n,b,C,v,G,Y,U)}}}else if(F.visible){const L=y(b,F,A,P);b.onBeforeShadow(n,b,C,v,G,L,null),n.renderBufferDirect(v,null,G,L,b,null),b.onAfterShadow(n,b,C,v,G,L,null)}}const O=b.children;for(let G=0,F=O.length;G<F;G++)M(O[G],C,v,A,P)}function T(b){b.target.removeEventListener("dispose",T);for(const v in l){const A=l[v],P=b.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function X1(n,e){function t(){let B=!1;const he=new dt;let j=null;const me=new dt(0,0,0,0);return{setMask:function(ye){j!==ye&&!B&&(n.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){B=ye},setClear:function(ye,re,Ie,Ce,mt){mt===!0&&(ye*=Ce,re*=Ce,Ie*=Ce),he.set(ye,re,Ie,Ce),me.equals(he)===!1&&(n.clearColor(ye,re,Ie,Ce),me.copy(he))},reset:function(){B=!1,j=null,me.set(-1,0,0,0)}}}function i(){let B=!1,he=!1,j=null,me=null,ye=null;return{setReversed:function(re){if(he!==re){const Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return he},setTest:function(re){re?ne(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(re){j!==re&&!B&&(n.depthMask(re),j=re)},setFunc:function(re){if(he&&(re=$S[re]),me!==re){switch(re){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case _c:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case vc:n.depthFunc(n.EQUAL);break;case xc:n.depthFunc(n.GEQUAL);break;case Mc:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=re}},setLocked:function(re){B=re},setClear:function(re){ye!==re&&(ye=re,he&&(re=1-re),n.clearDepth(re))},reset:function(){B=!1,j=null,me=null,ye=null,he=!1}}}function r(){let B=!1,he=null,j=null,me=null,ye=null,re=null,Ie=null,Ce=null,mt=null;return{setTest:function(ct){B||(ct?ne(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ct){he!==ct&&!B&&(n.stencilMask(ct),he=ct)},setFunc:function(ct,mn,gn){(j!==ct||me!==mn||ye!==gn)&&(n.stencilFunc(ct,mn,gn),j=ct,me=mn,ye=gn)},setOp:function(ct,mn,gn){(re!==ct||Ie!==mn||Ce!==gn)&&(n.stencilOp(ct,mn,gn),re=ct,Ie=mn,Ce=gn)},setLocked:function(ct){B=ct},setClear:function(ct){mt!==ct&&(n.clearStencil(ct),mt=ct)},reset:function(){B=!1,he=null,j=null,me=null,ye=null,re=null,Ie=null,Ce=null,mt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,E=null,y=null,M=null,T=null,b=null,C=null,v=new nt(0,0,0),A=0,P=!1,R=null,O=null,G=null,F=null,L=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,U=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=U>=2);let Y=null,Q={};const ae=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Be=new dt().fromArray(ae),Le=new dt().fromArray(Ee);function Z(B,he,j,me){const ye=new Uint8Array(4),re=n.createTexture();n.bindTexture(B,re),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<j;Ie++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(he+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return re}const oe={};oe[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(yr),le(!1),ue(xf),ne(n.CULL_FACE),se(Xn);function ne(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Se(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Te(B,he){return f[B]!==he?(n.bindFramebuffer(B,he),f[B]=he,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function be(B,he){let j=g,me=!1;if(B){j=p.get(he),j===void 0&&(j=[],p.set(he,j));const ye=B.textures;if(j.length!==ye.length||j[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ie=ye.length;re<Ie;re++)j[re]=n.COLOR_ATTACHMENT0+re;j.length=ye.length,me=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,me=!0);me&&n.drawBuffers(j)}function Xe(B){return x!==B?(n.useProgram(B),x=B,!0):!1}const De={[Ti]:n.FUNC_ADD,[mS]:n.FUNC_SUBTRACT,[gS]:n.FUNC_REVERSE_SUBTRACT};De[_S]=n.MIN,De[vS]=n.MAX;const te={[xS]:n.ZERO,[MS]:n.ONE,[yS]:n.SRC_COLOR,[dc]:n.SRC_ALPHA,[wS]:n.SRC_ALPHA_SATURATE,[TS]:n.DST_COLOR,[bS]:n.DST_ALPHA,[SS]:n.ONE_MINUS_SRC_COLOR,[pc]:n.ONE_MINUS_SRC_ALPHA,[AS]:n.ONE_MINUS_DST_COLOR,[ES]:n.ONE_MINUS_DST_ALPHA,[RS]:n.CONSTANT_COLOR,[CS]:n.ONE_MINUS_CONSTANT_COLOR,[PS]:n.CONSTANT_ALPHA,[LS]:n.ONE_MINUS_CONSTANT_ALPHA};function se(B,he,j,me,ye,re,Ie,Ce,mt,ct){if(B===Xn){m===!0&&(Se(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),B!==pS){if(B!==d||ct!==P){if((E!==Ti||T!==Ti)&&(n.blendEquation(n.FUNC_ADD),E=Ti,T=Ti),ct)switch(B){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mf:n.blendFunc(n.ONE,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",B);break}else switch(B){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yf:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sf:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",B);break}y=null,M=null,b=null,C=null,v.set(0,0,0),A=0,d=B,P=ct}return}ye=ye||he,re=re||j,Ie=Ie||me,(he!==E||ye!==T)&&(n.blendEquationSeparate(De[he],De[ye]),E=he,T=ye),(j!==y||me!==M||re!==b||Ie!==C)&&(n.blendFuncSeparate(te[j],te[me],te[re],te[Ie]),y=j,M=me,b=re,C=Ie),(Ce.equals(v)===!1||mt!==A)&&(n.blendColor(Ce.r,Ce.g,Ce.b,mt),v.copy(Ce),A=mt),d=B,P=!1}function ie(B,he){B.side===Gn?Se(n.CULL_FACE):ne(n.CULL_FACE);let j=B.side===Vt;he&&(j=!j),le(j),B.blending===fr&&B.transparent===!1?se(Xn):se(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const me=B.stencilWrite;o.setTest(me),me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),we(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){R!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),R=B)}function ue(B){B!==fS?(ne(n.CULL_FACE),B!==O&&(B===xf?n.cullFace(n.BACK):B===hS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),O=B}function Ne(B){B!==G&&(I&&n.lineWidth(B),G=B)}function we(B,he,j){B?(ne(n.POLYGON_OFFSET_FILL),(F!==he||L!==j)&&(F=he,L=j,a.getReversed()&&(he=-he),n.polygonOffset(he,j))):Se(n.POLYGON_OFFSET_FILL)}function He(B){B?ne(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function ke(B){B===void 0&&(B=n.TEXTURE0+D-1),Y!==B&&(n.activeTexture(B),Y=B)}function N(B,he,j){j===void 0&&(Y===null?j=n.TEXTURE0+D-1:j=Y);let me=Q[j];me===void 0&&(me={type:void 0,texture:void 0},Q[j]=me),(me.type!==B||me.texture!==he)&&(Y!==j&&(n.activeTexture(j),Y=j),n.bindTexture(B,he||oe[B]),me.type=B,me.texture=he)}function it(){const B=Q[Y];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ye(){try{n.compressedTexImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function _(){try{n.texSubImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function V(){try{n.texSubImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function ce(){try{n.texStorage2D(...arguments)}catch(B){je("WebGLState:",B)}}function fe(){try{n.texStorage3D(...arguments)}catch(B){je("WebGLState:",B)}}function J(){try{n.texImage2D(...arguments)}catch(B){je("WebGLState:",B)}}function ee(){try{n.texImage3D(...arguments)}catch(B){je("WebGLState:",B)}}function de(B){return h[B]!==void 0?h[B]:n.getParameter(B)}function Ue(B,he){h[B]!==he&&(n.pixelStorei(B,he),h[B]=he)}function ge(B){Be.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Be.copy(B))}function pe(B){Le.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Le.copy(B))}function ze(B,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let me=j.get(B);me===void 0&&(me=n.getUniformBlockIndex(he,B.name),j.set(B,me))}function Ve(B,he){const me=l.get(he).get(B);c.get(he)!==me&&(n.uniformBlockBinding(he,me,B.__bindingPointIndex),c.set(he,me))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Y=null,Q={},f={},p=new WeakMap,g=[],x=null,m=!1,d=null,E=null,y=null,M=null,T=null,b=null,C=null,v=new nt(0,0,0),A=0,P=!1,R=null,O=null,G=null,F=null,L=null,Be.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Se,bindFramebuffer:Te,drawBuffers:be,useProgram:Xe,setBlending:se,setMaterial:ie,setFlipSided:le,setCullFace:ue,setLineWidth:Ne,setPolygonOffset:we,setScissorTest:He,activeTexture:ke,bindTexture:N,unbindTexture:it,compressedTexImage2D:Ye,compressedTexImage3D:w,texImage2D:J,texImage3D:ee,pixelStorei:Ue,getParameter:de,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:ce,texStorage3D:fe,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:K,scissor:ge,viewport:pe,reset:$e}}function $1(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap,h=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return g?new OffscreenCanvas(w,_):Ra("canvas")}function m(w,_,V){let $=1;const K=Ye(w);if((K.width>V||K.height>V)&&($=V/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ce=Math.floor($*K.width),fe=Math.floor($*K.height);f===void 0&&(f=x(ce,fe));const J=_?x(ce,fe):f;return J.width=ce,J.height=fe,J.getContext("2d").drawImage(w,0,0,ce,fe),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+fe+")."),J}else return"data"in w&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function d(w){return w.generateMipmaps}function E(w){n.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,_,V,$,K,ce=!1){if(w!==null){if(n[w]!==void 0)return n[w];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;$&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8),V===n.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),V===n.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),_===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8),V===n.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),V===n.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(V===n.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),V===n.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){const ee=ce?wa:et.getTransfer(K);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=ee===rt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),V===n.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(w,_){let V;return w?_===null||_===Ln||_===fs?V=n.DEPTH24_STENCIL8:_===yn?V=n.DEPTH32F_STENCIL8:_===us&&(V=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ln||_===fs?V=n.DEPTH_COMPONENT24:_===yn?V=n.DEPTH_COMPONENT32F:_===us&&(V=n.DEPTH_COMPONENT16),V}function b(w,_){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Pt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function v(w){const _=w.target;_.removeEventListener("dispose",v),R(_)}function A(w){const _=i.get(w);if(_.__webglInit===void 0)return;const V=w.source,$=p.get(V);if($){const K=$[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(w),Object.keys($).length===0&&p.delete(V)}i.remove(w)}function P(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const V=w.source,$=p.get(V);delete $[_.__cacheKey],a.memory.textures--}function R(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let K=0;K<_.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[$][K]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const V=w.textures;for(let $=0,K=V.length;$<K;$++){const ce=i.get(V[$]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(w)}let O=0;function G(){O=0}function F(){return O}function L(w){O=w}function D(){const w=O;return w>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),O+=1,w}function I(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function U(w,_){const V=i.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const $=w.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(V,w,_);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+_)}function k(w,_){const V=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){Se(V,w,_);return}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+_)}function Y(w,_){const V=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){Se(V,w,_);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+_)}function Q(w,_){const V=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&V.__version!==w.version){Te(V,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+_)}const ae={[Sc]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},Ee={[Tt]:n.NEAREST,[NS]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Be={[FS]:n.NEVER,[GS]:n.ALWAYS,[BS]:n.LESS,[Wl]:n.LEQUAL,[zS]:n.EQUAL,[Xl]:n.GEQUAL,[HS]:n.GREATER,[VS]:n.NOTEQUAL};function Le(w,_){if(_.type===yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Pt||_.magFilter===oo||_.magFilter===Os||_.magFilter===Ci||_.minFilter===Pt||_.minFilter===oo||_.minFilter===Os||_.minFilter===Ci)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ae[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ae[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ae[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ee[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==Os&&_.minFilter!==Ci||_.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Z(w,_){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const $=_.source;let K=p.get($);K===void 0&&(K={},p.set($,K));const ce=I(_);if(ce!==w.__cacheKey){K[ce]===void 0&&(K[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[ce].usedTimes++;const fe=K[w.__cacheKey];fe!==void 0&&(K[w.__cacheKey].usedTimes--,fe.usedTimes===0&&P(_)),w.__cacheKey=ce,w.__webglTexture=K[ce].texture}return V}function oe(w,_,V){return Math.floor(Math.floor(w/V)/_)}function ne(w,_,V,$){const ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,V,$,_.data);else{ce.sort((Ue,ge)=>Ue.start-ge.start);let fe=0;for(let Ue=1;Ue<ce.length;Ue++){const ge=ce[fe],pe=ce[Ue],ze=ge.start+ge.count,Ve=oe(pe.start,_.width,4),$e=oe(ge.start,_.width,4);pe.start<=ze+1&&Ve===$e&&oe(pe.start+pe.count-1,_.width,4)===Ve?ge.count=Math.max(ge.count,pe.start+pe.count-ge.start):(++fe,ce[fe]=pe)}ce.length=fe+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ue=0,ge=ce.length;Ue<ge;Ue++){const pe=ce[Ue],ze=Math.floor(pe.start/4),Ve=Math.ceil(pe.count/4),$e=ze%_.width,B=Math.floor(ze/_.width),he=Ve,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,$e,B,he,j,V,$,_.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Se(w,_,V){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const K=Z(w,_),ce=_.source;t.bindTexture($,w.__webglTexture,n.TEXTURE0+V);const fe=i.get(ce);if(ce.version!==fe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const j=et.getPrimaries(et.workingColorSpace),me=_.colorSpace===li?null:et.getPrimaries(_.colorSpace),ye=_.colorSpace===li||j===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,r.maxTextureSize);ee=it(_,ee);const de=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type);let ge=M(_.internalFormat,de,Ue,_.normalized,_.colorSpace,_.isVideoTexture);Le($,_);let pe;const ze=_.mipmaps,Ve=_.isVideoTexture!==!0,$e=fe.__version===void 0||K===!0,B=ce.dataReady,he=b(_,ee);if(_.isDepthTexture)ge=T(_.format===Pi,_.type),$e&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ge,ee.width,ee.height,0,de,Ue,null));else if(_.isDataTexture)if(ze.length>0){Ve&&$e&&t.texStorage2D(n.TEXTURE_2D,he,ge,ze[0].width,ze[0].height);for(let j=0,me=ze.length;j<me;j++)pe=ze[j],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,j,ge,pe.width,pe.height,0,de,Ue,pe.data);_.generateMipmaps=!1}else Ve?($e&&t.texStorage2D(n.TEXTURE_2D,he,ge,ee.width,ee.height),B&&ne(_,ee,de,Ue)):t.texImage2D(n.TEXTURE_2D,0,ge,ee.width,ee.height,0,de,Ue,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,ge,ze[0].width,ze[0].height,ee.depth);for(let j=0,me=ze.length;j<me;j++)if(pe=ze[j],_.format!==fn)if(de!==null)if(Ve){if(B)if(_.layerUpdates.size>0){const ye=ih(pe.width,pe.height,_.format,_.type);for(const re of _.layerUpdates){const Ie=pe.data.subarray(re*ye/pe.data.BYTES_PER_ELEMENT,(re+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,re,pe.width,pe.height,1,de,Ie)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,ee.depth,de,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ge,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,pe.width,pe.height,ee.depth,de,Ue,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,ge,pe.width,pe.height,ee.depth,0,de,Ue,pe.data)}else{Ve&&$e&&t.texStorage2D(n.TEXTURE_2D,he,ge,ze[0].width,ze[0].height);for(let j=0,me=ze.length;j<me;j++)pe=ze[j],_.format!==fn?de!==null?Ve?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,ge,pe.width,pe.height,0,pe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,j,ge,pe.width,pe.height,0,de,Ue,pe.data)}else if(_.isDataArrayTexture)if(Ve){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,ge,ee.width,ee.height,ee.depth),B)if(_.layerUpdates.size>0){const j=ih(ee.width,ee.height,_.format,_.type);for(const me of _.layerUpdates){const ye=ee.data.subarray(me*j/ee.data.BYTES_PER_ELEMENT,(me+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,de,Ue,ye)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Ue,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,de,Ue,ee.data);else if(_.isData3DTexture)Ve?($e&&t.texStorage3D(n.TEXTURE_3D,he,ge,ee.width,ee.height,ee.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Ue,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,de,Ue,ee.data);else if(_.isFramebufferTexture){if($e)if(Ve)t.texStorage2D(n.TEXTURE_2D,he,ge,ee.width,ee.height);else{let j=ee.width,me=ee.height;for(let ye=0;ye<he;ye++)t.texImage2D(n.TEXTURE_2D,ye,ge,j,me,0,de,Ue,null),j>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),h.add(_),j.onpaint=me=>{const ye=me.changedElements;for(const re of h)ye.includes(re.image)&&(re.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{const ye=n.RGBA,re=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,re,Ie,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ve&&$e){const j=Ye(ze[0]);t.texStorage2D(n.TEXTURE_2D,he,ge,j.width,j.height)}for(let j=0,me=ze.length;j<me;j++)pe=ze[j],Ve?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de,Ue,pe):t.texImage2D(n.TEXTURE_2D,j,ge,de,Ue,pe);_.generateMipmaps=!1}else if(Ve){if($e){const j=Ye(ee);t.texStorage2D(n.TEXTURE_2D,he,ge,j.width,j.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ue,ee)}else t.texImage2D(n.TEXTURE_2D,0,ge,de,Ue,ee);d(_)&&E($),fe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Te(w,_,V){if(_.image.length!==6)return;const $=Z(w,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+V);const ce=i.get(K);if(K.version!==ce.__version||$===!0){t.activeTexture(n.TEXTURE0+V);const fe=et.getPrimaries(et.workingColorSpace),J=_.colorSpace===li?null:et.getPrimaries(_.colorSpace),ee=_.colorSpace===li||fe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,Ue=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!de&&!Ue?ge[re]=m(_.image[re],!0,r.maxCubemapSize):ge[re]=Ue?_.image[re].image:_.image[re],ge[re]=it(_,ge[re]);const pe=ge[0],ze=s.convert(_.format,_.colorSpace),Ve=s.convert(_.type),$e=M(_.internalFormat,ze,Ve,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,he=ce.__version===void 0||$===!0,j=K.dataReady;let me=b(_,pe);Le(n.TEXTURE_CUBE_MAP,_);let ye;if(de){B&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,$e,pe.width,pe.height);for(let re=0;re<6;re++){ye=ge[re].mipmaps;for(let Ie=0;Ie<ye.length;Ie++){const Ce=ye[Ie];_.format!==fn?ze!==null?B?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,Ce.width,Ce.height,ze,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,$e,Ce.width,Ce.height,0,Ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,Ce.width,Ce.height,ze,Ve,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,$e,Ce.width,Ce.height,0,ze,Ve,Ce.data)}}}else{if(ye=_.mipmaps,B&&he){ye.length>0&&me++;const re=Ye(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,$e,re.width,re.height)}for(let re=0;re<6;re++)if(Ue){B?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,ze,Ve,ge[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,ge[re].width,ge[re].height,0,ze,Ve,ge[re].data);for(let Ie=0;Ie<ye.length;Ie++){const mt=ye[Ie].image[re].image;B?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,mt.width,mt.height,ze,Ve,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,$e,mt.width,mt.height,0,ze,Ve,mt.data)}}else{B?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,Ve,ge[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,ze,Ve,ge[re]);for(let Ie=0;Ie<ye.length;Ie++){const Ce=ye[Ie];B?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,ze,Ve,Ce.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,$e,ze,Ve,Ce.image[re])}}}d(_)&&E(n.TEXTURE_CUBE_MAP),ce.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function be(w,_,V,$,K,ce){const fe=s.convert(V.format,V.colorSpace),J=s.convert(V.type),ee=M(V.internalFormat,fe,J,V.normalized,V.colorSpace),de=i.get(_),Ue=i.get(V);if(Ue.__renderTarget=_,!de.__hasExternalTextures){const ge=Math.max(1,_.width>>ce),pe=Math.max(1,_.height>>ce);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ce,ee,ge,pe,_.depth,0,fe,J,null):t.texImage2D(K,ce,ee,ge,pe,0,fe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ke(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,Ue.__webglTexture,0,He(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,Ue.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(w,_,V){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const $=_.depthTexture,K=$&&$.isDepthTexture?$.type:null,ce=T(_.stencilBuffer,K),fe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ke(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He(_),ce,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,He(_),ce,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ce,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,w)}else{const $=_.textures;for(let K=0;K<$.length;K++){const ce=$[K],fe=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),ee=M(ce.internalFormat,fe,J,ce.normalized,ce.colorSpace);ke(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He(_),ee,_.width,_.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,He(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(w,_,V){const $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Le(n.TEXTURE_CUBE_MAP,_.depthTexture);const de=s.convert(_.depthTexture.format),Ue=s.convert(_.depthTexture.type);let ge;_.depthTexture.format===Zn?ge=n.DEPTH_COMPONENT24:_.depthTexture.format===Pi&&(ge=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,_.width,_.height,0,de,Ue,null)}}else U(_.depthTexture,0);const ce=K.__webglTexture,fe=He(_),J=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ee=_.depthTexture.format===Pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Zn)ke(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,ce,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,ce,0);else if(_.depthTexture.format===Pi)ke(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,ce,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(w){const _=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=$}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)De(_.__webglFramebuffer[$],w,$);else{const $=w.texture.mipmaps;$&&$.length>0?De(_.__webglFramebuffer[0],w,0):De(_.__webglFramebuffer,w,0)}else if(V){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),Xe(_.__webglDepthbuffer[$],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ce)}}else{const $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Xe(_.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(w,_,V){const $=i.get(w);_!==void 0&&be($.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&te(w)}function ie(w){const _=w.texture,V=i.get(w),$=i.get(_);w.addEventListener("dispose",v);const K=w.textures,ce=w.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++),ce){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let ee=0;ee<_.mipmaps.length;ee++)V.__webglFramebuffer[J][ee]=n.createFramebuffer()}else V.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)V.__webglFramebuffer[J]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(fe)for(let J=0,ee=K.length;J<ee;J++){const de=i.get(K[J]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&ke(w)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const ee=K[J];V.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[J]);const de=s.convert(ee.format,ee.colorSpace),Ue=s.convert(ee.type),ge=M(ee.internalFormat,de,Ue,ee.normalized,ee.colorSpace,w.isXRRenderTarget===!0),pe=He(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ge,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,V.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Le(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)be(V.__webglFramebuffer[J][ee],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else be(V.__webglFramebuffer[J],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(_)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let J=0,ee=K.length;J<ee;J++){const de=K[J],Ue=i.get(de);let ge=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ue.__webglTexture),Le(ge,de),be(V.__webglFramebuffer,w,de,n.COLOR_ATTACHMENT0+J,ge,0),d(de)&&E(ge)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,$.__webglTexture),Le(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)be(V.__webglFramebuffer[ee],w,_,n.COLOR_ATTACHMENT0,J,ee);else be(V.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,J,0);d(_)&&E(J),t.unbindTexture()}w.depthBuffer&&te(w)}function le(w){const _=w.textures;for(let V=0,$=_.length;V<$;V++){const K=_[V];if(d(K)){const ce=y(w),fe=i.get(K).__webglTexture;t.bindTexture(ce,fe),E(ce),t.unbindTexture()}}}const ue=[],Ne=[];function we(w){if(w.samples>0){if(ke(w)===!1){const _=w.textures,V=w.width,$=w.height;let K=n.COLOR_BUFFER_BIT;const ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(w),J=_.length>1;if(J)for(let de=0;de<_.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ee=w.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<_.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ue=i.get(_[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,K,n.NEAREST),c===!0&&(ue.length=0,Ne.length=0,ue.push(n.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ue.push(ce),Ne.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<_.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ue=i.get(_[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function He(w){return Math.min(r.maxSamples,w.samples)}function ke(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(w){const _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function it(w,_){const V=w.colorSpace,$=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Aa&&V!==li&&(et.getTransfer(V)===rt?($!==fn||K!==qt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",V)),_}function Ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=G,this.getTextureUnits=F,this.setTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=se,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q1(n,e){function t(i,r=li){let s;const a=et.getTransfer(r);if(i===qt)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===up)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===op)return n.BYTE;if(i===cp)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Bl)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===fp)return n.ALPHA;if(i===hp)return n.RGB;if(i===fn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===dp)return n.RED;if(i===Vl)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===kl)return n.RGBA_INTEGER;if(i===da||i===pa||i===ma||i===ga)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===Tc||i===Ac||i===wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ea||i===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Cc)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lc)return s.COMPRESSED_R11_EAC;if(i===Dc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ea)return s.COMPRESSED_RG11_EAC;if(i===Ic)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===zc||i===Hc||i===Vc||i===Gc||i===kc||i===Wc||i===Xc||i===$c||i===qc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$c)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yc||i===Zc||i===Kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yc)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jc||i===Qc||i===Ta||i===jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dn({vertexShader:Y1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J1 extends Wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new K1,d={},E=t.getContextAttributes();let y=null,M=null;const T=[],b=[],C=new ve;let v=null;const A=new ln;A.viewport=new dt;const P=new ln;P.viewport=new dt;const R=[A,P],O=new oE;let G=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=T[Z];return oe===void 0&&(oe=new go,T[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=T[Z];return oe===void 0&&(oe=new go,T[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=T[Z];return oe===void 0&&(oe=new go,T[Z]=oe),oe.getHandSpace()};function L(Z){const oe=b.indexOf(Z.inputSource);if(oe===-1)return;const ne=T[oe];ne!==void 0&&(ne.update(Z.inputSource,Z.frame,l||a),ne.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",I);for(let Z=0;Z<T.length;Z++){const oe=b[Z];oe!==null&&(b[Z]=null,T[Z].disconnect(oe))}G=null,F=null,m.reset();for(const Z in d)delete d[Z];e.setRenderTarget(y),p=null,f=null,h=null,r=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",D),r.addEventListener("inputsourceschange",I),E.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Se=null,Te=null;E.depth&&(Te=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=E.stencil?Pi:Zn,Se=E.stencil?fs:Ln);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Tn(f.textureWidth,f.textureHeight,{format:fn,type:qt,depthTexture:new br(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Tn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(Z){for(let oe=0;oe<Z.removed.length;oe++){const ne=Z.removed[oe],Se=b.indexOf(ne);Se>=0&&(b[Se]=null,T[Se].disconnect(ne))}for(let oe=0;oe<Z.added.length;oe++){const ne=Z.added[oe];let Se=b.indexOf(ne);if(Se===-1){for(let be=0;be<T.length;be++)if(be>=b.length){b.push(ne),Se=be;break}else if(b[be]===null){b[be]=ne,Se=be;break}if(Se===-1)break}const Te=T[Se];Te&&Te.connect(ne)}}const U=new H,k=new H;function Y(Z,oe,ne){U.setFromMatrixPosition(oe.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const Se=U.distanceTo(k),Te=oe.projectionMatrix.elements,be=ne.projectionMatrix.elements,Xe=Te[14]/(Te[10]-1),De=Te[14]/(Te[10]+1),te=(Te[9]+1)/Te[5],se=(Te[9]-1)/Te[5],ie=(Te[8]-1)/Te[0],le=(be[8]+1)/be[0],ue=Xe*ie,Ne=Xe*le,we=Se/(-ie+le),He=we*-ie;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(we),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ke=Xe+we,N=De+we,it=ue-He,Ye=Ne+(Se-He),w=te*De/N*ke,_=se*De/N*ke;Z.projectionMatrix.makePerspective(it,Ye,w,_,ke,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Q(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,ne=Z.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),O.near=P.near=A.near=oe,O.far=P.far=A.far=ne,(G!==O.near||F!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,F=O.far),O.layers.mask=Z.layers.mask|6,A.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Se=Z.parent,Te=O.cameras;Q(O,Se);for(let be=0;be<Te.length;be++)Q(Te[be],Se);Te.length===2?Y(O,A,P):O.projectionMatrix.copy(A.projectionMatrix),ae(Z,O,Se)};function ae(Z,oe,ne){ne===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ne.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=tl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return d[Z]};let Ee=null;function Be(Z,oe){if(u=oe.getViewerPose(l||a),g=oe,u!==null){const ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Se=!1;ne.length!==O.cameras.length&&(O.cameras.length=0,Se=!0);for(let De=0;De<ne.length;De++){const te=ne[De];let se=null;if(p!==null)se=p.getViewport(te);else{const le=h.getViewSubImage(f,te);se=le.viewport,De===0&&(e.setRenderTargetTextures(M,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(M))}let ie=R[De];ie===void 0&&(ie=new ln,ie.layers.enable(De),ie.viewport=new dt,R[De]=ie),ie.matrix.fromArray(te.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(te.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(se.x,se.y,se.width,se.height),De===0&&(O.matrix.copy(ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Se===!0&&O.cameras.push(ie)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const De=h.getDepthInformation(ne[0]);De&&De.isValid&&De.texture&&m.init(De,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let De=0;De<ne.length;De++){const te=ne[De].camera;if(te){let se=d[te];se||(se=new Sp,d[te]=se);const ie=h.getCameraImage(te);se.sourceTexture=ie}}}}for(let ne=0;ne<T.length;ne++){const Se=b[ne],Te=T[ne];Se!==null&&Te!==void 0&&Te.update(Se,oe,l||a)}Ee&&Ee(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Le=new Up;Le.setAnimationLoop(Be),this.setAnimationLoop=function(Z){Ee=Z},this.dispose=function(){}}}const Q1=new ht,Gp=new We;Gp.set(-1,0,0,0,1,0,0,0,1);function j1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Dp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,y,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,E,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gp),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const b=T.program;i.uniformBlockBinding(M,b)}function l(M,T){let b=r[M.id];b===void 0&&(m(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",E));const C=T.program;i.updateUBOMapping(M,C);const v=e.render.frame;s[M.id]!==v&&(f(M),s[M.id]=v)}function u(M){const T=h();M.__bindingPointIndex=T;const b=n.createBuffer(),C=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=r[M.id],b=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,A=b.length;v<A;v++){const P=b[v];if(Array.isArray(P))for(let R=0,O=P.length;R<O;R++)p(P[R],v,R,C);else p(P,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,T,b,C){if(x(M,T,b,C)===!0){const v=M.__offset,A=M.value;if(Array.isArray(A)){let P=0;for(let R=0;R<A.length;R++){const O=A[R],G=d(O);g(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function g(M,T,b){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,b)}function x(M,T,b,C){const v=M.value,A=T+"_"+b;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{const P=C[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(M){const T=M.uniforms;let b=0;const C=16;for(let A=0,P=T.length;A<P;A++){const R=Array.isArray(T[A])?T[A]:[T[A]];for(let O=0,G=R.length;O<G;O++){const F=R[O],L=Array.isArray(F.value)?F.value:[F.value];for(let D=0,I=L.length;D<I;D++){const U=L[D],k=d(U),Y=b%C,Q=Y%k.boundary,ae=Y+Q;b+=Q,ae!==0&&C-ae<k.storage&&(b+=C-ae),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=k.storage}}}const v=b%C;return v>0&&(b+=C-v),M.__size=b,M.__cache={},this}function d(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),T}function E(M){const T=M.target;T.removeEventListener("dispose",E);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:y}}const tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function nR(){return xn===null&&(xn=new hb(tR,16,16,zi,Yn),xn.name="DFG_LUT",xn.minFilter=Pt,xn.magFilter=Pt,xn.wrapS=kn,xn.wrapT=kn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class $R{constructor(e={}){const{canvas:t=WS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=p,m=new Set([kl,Gl,Vl]),d=new Set([qt,Ln,us,fs,zl,Hl]),E=new Uint32Array(4),y=new Int32Array(4),M=new H;let T=null,b=null;const C=[],v=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,O=null,G=null,F=null,L=null;this._outputColorSpace=jt;let D=0,I=0,U=null,k=-1,Y=null;const Q=new dt,ae=new dt;let Ee=null;const Be=new nt(0);let Le=0,Z=t.width,oe=t.height,ne=1,Se=null,Te=null;const be=new dt(0,0,Z,oe),Xe=new dt(0,0,Z,oe);let De=!1;const te=new Zl;let se=!1,ie=!1;const le=new ht,ue=new H,Ne=new dt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function ke(){return U===null?ne:1}let N=i;function it(S,z){return t.getContext(S,z)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",mn,!1),N===null){const z="webgl2";if(N=it(z,S),N===null)throw it(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw je("WebGLRenderer: "+S.message),S}let Ye,w,_,V,$,K,ce,fe,J,ee,de,Ue,ge,pe,ze,Ve,$e,B,he,j,me,ye,re;function Ie(){Ye=new nw(N),Ye.init(),me=new q1(N,Ye),w=new YA(N,Ye,e,me),_=new X1(N,Ye),w.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),G=N.createFramebuffer(),F=N.createFramebuffer(),L=N.createFramebuffer(),V=new sw(N),$=new L1,K=new $1(N,Ye,_,$,w,me,V),ce=new tw(P),fe=new lE(N),ye=new $A(N,fe),J=new iw(N,fe,V,ye),ee=new ow(N,J,fe,ye,V),B=new aw(N,w,K),ze=new ZA($),de=new P1(P,ce,Ye,w,ye,ze),Ue=new j1(P,$),ge=new I1,pe=new z1(Ye),$e=new XA(P,ce,_,ee,g,c),Ve=new W1(P,ee,w),re=new eR(N,V,w,_),he=new qA(N,Ye,V),j=new rw(N,Ye,V),V.programs=de.programs,P.capabilities=w,P.extensions=Ye,P.properties=$,P.renderLists=ge,P.shadowMap=Ve,P.state=_,P.info=V}Ie(),x!==qt&&(A=new lw(x,t.width,t.height,o,r,s));const Ce=new J1(P,N);this.xr=Ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Z,oe,!1))},this.getSize=function(S){return S.set(Z,oe)},this.setSize=function(S,z,q=!0){if(Ce.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,oe=z,t.width=Math.floor(S*ne),t.height=Math.floor(z*ne),q===!0&&(t.style.width=S+"px",t.style.height=z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(Z*ne,oe*ne).floor()},this.setDrawingBufferSize=function(S,z,q){Z=S,oe=z,ne=q,t.width=Math.floor(S*q),t.height=Math.floor(z*q),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(x===qt){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Q)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,z,q,W){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,z,q,W),_.viewport(Q.copy(be).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(Xe)},this.setScissor=function(S,z,q,W){S.isVector4?Xe.set(S.x,S.y,S.z,S.w):Xe.set(S,z,q,W),_.scissor(ae.copy(Xe).multiplyScalar(ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(S){_.setScissorTest(De=S)},this.setOpaqueSort=function(S){Se=S},this.setTransparentSort=function(S){Te=S},this.getClearColor=function(S){return S.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,q=!0){let W=0;if(S){let X=!1;if(U!==null){const Me=U.texture.format;X=m.has(Me)}if(X){const Me=U.texture.type,Re=d.has(Me),xe=$e.getClearColor(),Pe=$e.getClearAlpha(),Oe=xe.r,qe=xe.g,Ke=xe.b;Re?(E[0]=Oe,E[1]=qe,E[2]=Ke,E[3]=Pe,N.clearBufferuiv(N.COLOR,0,E)):(y[0]=Oe,y[1]=qe,y[2]=Ke,y[3]=Pe,N.clearBufferiv(N.COLOR,0,y))}else W|=N.COLOR_BUFFER_BIT}z&&(W|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),$e.dispose(),ge.dispose(),pe.dispose(),$.dispose(),ce.dispose(),ee.dispose(),ye.dispose(),re.dispose(),de.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",su),Ce.removeEventListener("sessionend",au),_i.stop()};function mt(S){S.preventDefault(),wf("WebGLRenderer: Context Lost."),R=!0}function ct(){wf("WebGLRenderer: Context Restored."),R=!1;const S=V.autoReset,z=Ve.enabled,q=Ve.autoUpdate,W=Ve.needsUpdate,X=Ve.type;Ie(),V.autoReset=S,Ve.enabled=z,Ve.autoUpdate=q,Ve.needsUpdate=W,Ve.type=X}function mn(S){je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gn(S){const z=S.target;z.removeEventListener("dispose",gn),kp(z)}function kp(S){Wp(S),$.remove(S)}function Wp(S){const z=$.get(S).programs;z!==void 0&&(z.forEach(function(q){de.releaseProgram(q)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,q,W,X,Me){z===null&&(z=we);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,xe=qp(S,z,q,W,X);_.setMaterial(W,Re);let Pe=q.index,Oe=1;if(W.wireframe===!0){if(Pe=J.getWireframeAttribute(q),Pe===void 0)return;Oe=2}const qe=q.drawRange,Ke=q.attributes.position;let Fe=qe.start*Oe,st=(qe.start+qe.count)*Oe;Me!==null&&(Fe=Math.max(Fe,Me.start*Oe),st=Math.min(st,(Me.start+Me.count)*Oe)),Pe!==null?(Fe=Math.max(Fe,0),st=Math.min(st,Pe.count)):Ke!=null&&(Fe=Math.max(Fe,0),st=Math.min(st,Ke.count));const _t=st-Fe;if(_t<0||_t===1/0)return;ye.setup(X,W,xe,q,Pe);let gt,at=he;if(Pe!==null&&(gt=fe.get(Pe),at=j,at.setIndex(gt)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*ke()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(X.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),_.setLineWidth(wt*ke()),X.isLineSegments?at.setMode(N.LINES):X.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else X.isPoints?at.setMode(N.POINTS):X.isSprite&&at.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const wt=X._multiDrawStarts,Ae=X._multiDrawCounts,Gt=X._multiDrawCount,tt=Pe?fe.get(Pe).bytesPerElement:1,Kt=$.get(W).currentProgram.getUniforms();for(let _n=0;_n<Gt;_n++)Kt.setValue(N,"_gl_DrawID",_n),at.render(wt[_n]/tt,Ae[_n])}else if(X.isInstancedMesh)at.renderInstances(Fe,_t,X.count);else if(q.isInstancedBufferGeometry){const wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,wt);at.renderInstances(Fe,_t,Ae)}else at.render(Fe,_t)};function ru(S,z,q){S.transparent===!0&&S.side===Gn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Rs(S,z,q),S.side=di,S.needsUpdate=!0,Rs(S,z,q),S.side=Gn):Rs(S,z,q)}this.compile=function(S,z,q=null){q===null&&(q=S),b=pe.get(q),b.init(z),v.push(b),q.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),S!==q&&S.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const W=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const xe=Me[Re];ru(xe,q,X),W.add(xe)}else ru(Me,q,X),W.add(Me)}),b=v.pop(),W},this.compileAsync=function(S,z,q=null){const W=this.compile(S,z,q);return new Promise(X=>{function Me(){if(W.forEach(function(Re){$.get(Re).currentProgram.isReady()&&W.delete(Re)}),W.size===0){X(S);return}setTimeout(Me,10)}Ye.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ya=null;function Xp(S){Ya&&Ya(S)}function su(){_i.stop()}function au(){_i.start()}const _i=new Up;_i.setAnimationLoop(Xp),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(S){Ya=S,Ce.setAnimationLoop(S),S===null?_i.stop():_i.start()},Ce.addEventListener("sessionstart",su),Ce.addEventListener("sessionend",au),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(S,z);const q=Ce.enabled===!0&&Ce.isPresenting===!0,W=A!==null&&(U===null||q)&&A.begin(P,U);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(z),z=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,z,U),b=pe.get(S,v.length),b.init(z),b.state.textureUnits=K.getTextureUnits(),v.push(b),le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(le,Sn,z.reversedDepth),ie=this.localClippingEnabled,se=ze.init(this.clippingPlanes,ie),T=ge.get(S,C.length),T.init(),C.push(T),Ce.enabled===!0&&Ce.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&Za(Re,z,-1/0,P.sortObjects)}Za(S,z,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Se,Te,z.reversedDepth),He=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,He&&$e.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&ze.beginShadows();const X=b.state.shadowsArray;if(Ve.render(X,S,z),se===!0&&ze.endShadows(),(W&&A.hasRenderPass())===!1){const Re=T.opaque,xe=T.transmissive;if(b.setupLights(),z.isArrayCamera){const Pe=z.cameras;if(xe.length>0)for(let Oe=0,qe=Pe.length;Oe<qe;Oe++){const Ke=Pe[Oe];cu(Re,xe,S,Ke)}He&&$e.render(S);for(let Oe=0,qe=Pe.length;Oe<qe;Oe++){const Ke=Pe[Oe];ou(T,S,Ke,Ke.viewport)}}else xe.length>0&&cu(Re,xe,S,z),He&&$e.render(S),ou(T,S,z)}U!==null&&I===0&&(K.updateMultisampleRenderTarget(U),K.updateRenderTargetMipmap(U)),W&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,z),ye.resetDefaultState(),k=-1,Y=null,v.pop(),v.length>0?(b=v[v.length-1],K.setTextureUnits(b.state.textureUnits),se===!0&&ze.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,O!==null&&O.renderEnd()};function Za(S,z,q,W){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){W&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);const Re=ee.update(S),xe=S.material;xe.visible&&T.push(S,Re,xe,q,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){const Re=ee.update(S),xe=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ne.copy(Re.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const Pe=Re.groups;for(let Oe=0,qe=Pe.length;Oe<qe;Oe++){const Ke=Pe[Oe],Fe=xe[Ke.materialIndex];Fe&&Fe.visible&&T.push(S,Re,Fe,q,Ne.z,Ke)}}else xe.visible&&T.push(S,Re,xe,q,Ne.z,null)}}const Me=S.children;for(let Re=0,xe=Me.length;Re<xe;Re++)Za(Me[Re],z,q,W)}function ou(S,z,q,W){const{opaque:X,transmissive:Me,transparent:Re}=S;b.setupLightsView(q),se===!0&&ze.setGlobalState(P.clippingPlanes,q),W&&_.viewport(Q.copy(W)),X.length>0&&ws(X,z,q),Me.length>0&&ws(Me,z,q),Re.length>0&&ws(Re,z,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function cu(S,z,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Fe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Tn(1,1,{generateMipmaps:!0,type:Fe?Yn:qt,minFilter:Ci,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Me=b.state.transmissionRenderTarget[W.id],Re=W.viewport||Q;Me.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),Pe=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(Be),Le=P.getClearAlpha(),Le<1&&P.setClearColor(16777215,.5),P.clear(),He&&$e.render(q);const qe=P.toneMapping;P.toneMapping=En;const Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),se===!0&&ze.setGlobalState(P.clippingPlanes,W),ws(S,q,W),K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let st=0,_t=z.length;st<_t;st++){const gt=z[st],{object:at,geometry:wt,material:Ae,group:Gt}=gt;if(Ae.side===Gn&&at.layers.test(W.layers)){const tt=Ae.side;Ae.side=Vt,Ae.needsUpdate=!0,lu(at,q,W,wt,Ae,Gt),Ae.side=tt,Ae.needsUpdate=!0,Fe=!0}}Fe===!0&&(K.updateMultisampleRenderTarget(Me),K.updateRenderTargetMipmap(Me))}P.setRenderTarget(xe,Pe,Oe),P.setClearColor(Be,Le),Ke!==void 0&&(W.viewport=Ke),P.toneMapping=qe}function ws(S,z,q){const W=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Me=S.length;X<Me;X++){const Re=S[X],{object:xe,geometry:Pe,group:Oe}=Re;let qe=Re.material;qe.allowOverride===!0&&W!==null&&(qe=W),xe.layers.test(q.layers)&&lu(xe,z,q,Pe,qe,Oe)}}function lu(S,z,q,W,X,Me){S.onBeforeRender(P,z,q,W,X,Me),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(P,z,q,W,S,Me),X.transparent===!0&&X.side===Gn&&X.forceSinglePass===!1?(X.side=Vt,X.needsUpdate=!0,P.renderBufferDirect(q,z,W,X,S,Me),X.side=di,X.needsUpdate=!0,P.renderBufferDirect(q,z,W,X,S,Me),X.side=Gn):P.renderBufferDirect(q,z,W,X,S,Me),S.onAfterRender(P,z,q,W,X,Me)}function Rs(S,z,q){z.isScene!==!0&&(z=we);const W=$.get(S),X=b.state.lights,Me=b.state.shadowsArray,Re=X.state.version,xe=de.getParameters(S,X.state,Me,z,q,b.state.lightProbeGridArray),Pe=de.getProgramCacheKey(xe);let Oe=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=ce.get(S.envMap||W.environment,qe),W.envMapRotation=W.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",gn),Oe=new Map,W.programs=Oe);let Ke=Oe.get(Pe);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Re)return fu(S,xe),Ke}else xe.uniforms=de.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,q,xe),S.onBeforeCompile(xe,P),Ke=de.acquireProgram(xe,Pe),Oe.set(Pe,Ke),W.uniforms=xe.uniforms;const Fe=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=ze.uniform),fu(S,xe),W.needsLights=Zp(S),W.lightsStateVersion=Re,W.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=Ke,W.uniformsList=null,Ke}function uu(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=_a.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function fu(S,z){const q=$.get(S);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function $p(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let q=0,W=S.length;q<W;q++){const X=S[q];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function qp(S,z,q,W,X){z.isScene!==!0&&(z=we),K.resetTextureUnits();const Me=z.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,xe=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:et.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=ce.get(W.envMap||Re,Pe),qe=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color;let gt=En;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(gt=P.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=at!==void 0?at.length:0,Ae=$.get(W),Gt=b.state.lights;if(se===!0&&(ie===!0||S!==Y)){const lt=S===Y&&W.id===k;ze.setState(W,S,lt)}let tt=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Gt.state.version||Ae.outputColorSpace!==xe||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==Oe||W.fog===!0&&Ae.fog!==Me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ze.numPlanes||Ae.numIntersection!==ze.numIntersection)||Ae.vertexAlphas!==qe||Ae.vertexTangents!==Ke||Ae.morphTargets!==Fe||Ae.morphNormals!==st||Ae.morphColors!==_t||Ae.toneMapping!==gt||Ae.morphTargetsCount!==wt||!!Ae.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Ae.__version=W.version);let Kt=Ae.currentProgram;tt===!0&&(Kt=Rs(W,z,X),O&&W.isNodeMaterial&&O.onUpdateProgram(W,Kt,Ae));let _n=!1,ei=!1,Xi=!1;const ot=Kt.getUniforms(),vt=Ae.uniforms;if(_.useProgram(Kt.program)&&(_n=!0,ei=!0,Xi=!0),W.id!==k&&(k=W.id,ei=!0),Ae.needsLights){const lt=$p(b.state.lightProbeGridArray,X);Ae.lightProbeGrid!==lt&&(Ae.lightProbeGrid=lt,ei=!0)}if(_n||Y!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(N,"projectionMatrix",S.projectionMatrix),ot.setValue(N,"viewMatrix",S.matrixWorldInverse);const ni=ot.map.cameraPosition;ni!==void 0&&ni.setValue(N,ue.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ot.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,ei=!0,Xi=!0)}if(Ae.needsLights&&(Gt.state.directionalShadowMap.length>0&&ot.setValue(N,"directionalShadowMap",Gt.state.directionalShadowMap,K),Gt.state.spotShadowMap.length>0&&ot.setValue(N,"spotShadowMap",Gt.state.spotShadowMap,K),Gt.state.pointShadowMap.length>0&&ot.setValue(N,"pointShadowMap",Gt.state.pointShadowMap,K)),X.isSkinnedMesh){ot.setOptional(N,X,"bindMatrix"),ot.setOptional(N,X,"bindMatrixInverse");const lt=X.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(N,"boneTexture",lt.boneTexture,K))}X.isBatchedMesh&&(ot.setOptional(N,X,"batchingTexture"),ot.setValue(N,"batchingTexture",X._matricesTexture,K),ot.setOptional(N,X,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",X._indirectTexture,K),ot.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",X._colorsTexture,K));const ti=q.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&B.update(X,q,Kt),(ei||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,ot.setValue(N,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(vt.envMapIntensity.value=z.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=nR()),ei){if(ot.setValue(N,"toneMappingExposure",P.toneMappingExposure),Ae.needsLights&&Yp(vt,Xi),Me&&W.fog===!0&&Ue.refreshFogUniforms(vt,Me),Ue.refreshMaterialUniforms(vt,W,ne,oe,b.state.transmissionRenderTarget[S.id]),Ae.needsLights&&Ae.lightProbeGrid){const lt=Ae.lightProbeGrid;vt.probesSH.value=lt.texture,vt.probesMin.value.copy(lt.boundingBox.min),vt.probesMax.value.copy(lt.boundingBox.max),vt.probesResolution.value.copy(lt.resolution)}_a.upload(N,uu(Ae),vt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_a.upload(N,uu(Ae),vt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ot.setValue(N,"center",X.center),ot.setValue(N,"modelViewMatrix",X.modelViewMatrix),ot.setValue(N,"normalMatrix",X.normalMatrix),ot.setValue(N,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const lt=W.uniformsGroups;for(let ni=0,$i=lt.length;ni<$i;ni++){const hu=lt[ni];re.update(hu,Kt),re.bind(hu,Kt)}}return Kt}function Yp(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Zp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,z,q){const W=$.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(S.texture).__webglTexture=z,$.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const q=$.get(S);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,q=0){U=S,D=z,I=q;let W=null,X=!1,Me=!1;if(S){const xe=$.get(S);if(xe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,xe.__webglFramebuffer),Q.copy(S.viewport),ae.copy(S.scissor),Ee=S.scissorTest,_.viewport(Q),_.scissor(ae),_.setScissorTest(Ee),k=-1;return}else if(xe.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(xe.__hasExternalTextures)K.rebindTextures(S,$.get(S.texture).__webglTexture,$.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(xe.__boundDepthTexture!==qe){if(qe!==null&&$.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}const Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);const Oe=$.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?W=Oe[z][q]:W=Oe[z],X=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?W=$.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[q]:W=Oe,Q.copy(S.viewport),ae.copy(S.scissor),Ee=S.scissorTest}else Q.copy(be).multiplyScalar(ne).floor(),ae.copy(Xe).multiplyScalar(ne).floor(),Ee=De;if(q!==0&&(W=G),_.bindFramebuffer(N.FRAMEBUFFER,W)&&_.drawBuffers(S,W),_.viewport(Q),_.scissor(ae),_.setScissorTest(Ee),X){const xe=$.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,q)}else if(Me){const xe=z;for(let Pe=0;Pe<S.textures.length;Pe++){const Oe=$.get(S.textures[Pe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pe,Oe.__webglTexture,q,xe)}}else if(S!==null&&q!==0){const xe=$.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(S,z,q,W,X,Me,Re,xe=0){if(!(S&&S.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){_.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const Oe=S.textures[xe],qe=Oe.format,Ke=Oe.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),!w.textureFormatReadable(qe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ke)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-W&&q>=0&&q<=S.height-X&&N.readPixels(z,q,W,X,me.convert(qe),me.convert(Ke),Me)}finally{const Oe=U!==null?$.get(U).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,z,q,W,X,Me,Re,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(z>=0&&z<=S.width-W&&q>=0&&q<=S.height-X){_.bindFramebuffer(N.FRAMEBUFFER,Pe);const Oe=S.textures[xe],qe=Oe.format,Ke=Oe.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),!w.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,Me.byteLength,N.STREAM_READ),N.readPixels(z,q,W,X,me.convert(qe),me.convert(Ke),0);const st=U!==null?$.get(U).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,st);const _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await XS(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Me),N.deleteBuffer(Fe),N.deleteSync(_t),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,q=0){const W=Math.pow(2,-q),X=Math.floor(S.image.width*W),Me=Math.floor(S.image.height*W),Re=z!==null?z.x:0,xe=z!==null?z.y:0;K.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Re,xe,X,Me),_.unbindTexture()},this.copyTextureToTexture=function(S,z,q=null,W=null,X=0,Me=0){let Re,xe,Pe,Oe,qe,Ke,Fe,st,_t;const gt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(q!==null)Re=q.max.x-q.min.x,xe=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,qe=q.min.y,Ke=q.isBox3?q.min.z:0;else{const vt=Math.pow(2,-X);Re=Math.floor(gt.width*vt),xe=Math.floor(gt.height*vt),S.isDataArrayTexture?Pe=gt.depth:S.isData3DTexture?Pe=Math.floor(gt.depth*vt):Pe=1,Oe=0,qe=0,Ke=0}W!==null?(Fe=W.x,st=W.y,_t=W.z):(Fe=0,st=0,_t=0);const at=me.convert(z.format),wt=me.convert(z.type);let Ae;z.isData3DTexture?(K.setTexture3D(z,0),Ae=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Ae=N.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Ae=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Gt=_.getParameter(N.UNPACK_ROW_LENGTH),tt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Kt=_.getParameter(N.UNPACK_SKIP_PIXELS),_n=_.getParameter(N.UNPACK_SKIP_ROWS),ei=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),_.pixelStorei(N.UNPACK_SKIP_ROWS,qe),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);const Xi=S.isDataArrayTexture||S.isData3DTexture,ot=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const vt=$.get(S),ti=$.get(z),lt=$.get(vt.__renderTarget),ni=$.get(ti.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let $i=0;$i<Pe;$i++)Xi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(S).__webglTexture,X,Ke+$i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(z).__webglTexture,Me,_t+$i)),N.blitFramebuffer(Oe,qe,Re,xe,Fe,st,Re,xe,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||$.has(S)){const vt=$.get(S),ti=$.get(z);_.bindFramebuffer(N.READ_FRAMEBUFFER,F),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,L);for(let lt=0;lt<Pe;lt++)Xi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.__webglTexture,X,Ke+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vt.__webglTexture,X),ot?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ti.__webglTexture,Me,_t+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ti.__webglTexture,Me),X!==0?N.blitFramebuffer(Oe,qe,Re,xe,Fe,st,Re,xe,N.COLOR_BUFFER_BIT,N.NEAREST):ot?N.copyTexSubImage3D(Ae,Me,Fe,st,_t+lt,Oe,qe,Re,xe):N.copyTexSubImage2D(Ae,Me,Fe,st,Oe,qe,Re,xe);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Ae,Me,Fe,st,_t,Re,xe,Pe,at,wt,gt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,Me,Fe,st,_t,Re,xe,Pe,at,gt.data):N.texSubImage3D(Ae,Me,Fe,st,_t,Re,xe,Pe,at,wt,gt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Me,Fe,st,Re,xe,at,wt,gt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Me,Fe,st,gt.width,gt.height,at,gt.data):N.texSubImage2D(N.TEXTURE_2D,Me,Fe,st,Re,xe,at,wt,gt);_.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),_.pixelStorei(N.UNPACK_SKIP_ROWS,_n),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ei),Me===0&&z.generateMipmaps&&N.generateMipmap(Ae),_.unbindTexture()},this.initRenderTarget=function(S){$.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){D=0,I=0,U=null,_.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}export{nt as $,UR as A,OR as B,FR as C,BR as D,vd as E,zR as F,hR as G,pR as H,oR as I,SR as J,RR as K,ER as L,AR as M,TR as N,wR as O,bR as P,jt as Q,HR as R,ka as S,Mt as T,Ql as U,WR as V,$R as W,kR as X,MR as Y,VR as Z,GR as _,uR as a,Kn as a0,Xa as a1,Mp as a2,zs as a3,XR as a4,ve as a5,Pb as a6,Lp as a7,Gh as b,rR as c,iR as d,sR as e,lR as f,M0 as g,dR as h,fR as i,CR as j,Qv as k,PR as l,aR as m,LR as n,_l as o,gR as p,DR as q,mR as r,_R as s,vR as t,xR as u,cR as v,yR as w,S0 as x,IR as y,NR as z};
