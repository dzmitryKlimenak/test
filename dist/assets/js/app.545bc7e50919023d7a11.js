!function(e){function t(t){for(var r,u,i=t[0],c=t[1],f=t[2],p=0,s=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(a&&a(t);s.length;)s.shift()();return l.push.apply(l,f||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var a=c;l.push([0,1]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t){var n=document.getElementById("btn-left"),r=document.getElementById("btn-right"),o=document.getElementById("js-polosa"),l=0,u=document.querySelectorAll("#js-polosa>.slider--item").length-1;n.addEventListener("click",(function(){l>-970*u&&l<=0&&(l-=970),o.style.left=l+"px"})),r.addEventListener("click",(function(){l>=-970*u&&l<0&&(l+=970),o.style.left=l+"px"}))},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){}]);