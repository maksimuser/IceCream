parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
!function(){var t=!1,a=null,e=.25;$.fn.toggleBlur=function(t){var a=$(this).data("blur-id"),e=t?"url(#"+a+")":"none";$(this).css({webkitFilter:e,filter:e})},$.fn.setBlur=function(t){var a=$(this).data("blur");t=Math.round(t),$(this).data("blur-value")!=t&&(0==t?$(this).toggleBlur(!1):($(this).toggleBlur(!0),a.firstElementChild.setAttribute("stdDeviation",t+",0"),$(this).data("blur-value",t)))},$.fn.initBlur=function(t){void 0===t&&(t=.25),e=t;var a=$(".filters defs").get(0),l=$("#blur").get(0);$(this).each(function(t){var e=l.cloneNode(!0),i="blur"+t;e.setAttribute("id",i),a.appendChild(e),$(this).data("blur",e).data("blur-id",i).data("blur-value",0).data("last-pos",$(this).offset())})},$.updateBlur=function(){$(".js-blur").each(function(){var t=$(this).offset(),a=$(this).data("last-pos"),l=Math.abs(t.left-a.left)*e;$(this).data("last-pos",t),$(this).setBlur(l)}),t&&requestAnimationFrame($.updateBlur)},$.startUpdatingBlur=function(e){void 0===e&&(e=-1),null!=a&&(clearTimeout(a),a=null),t||(t=!0,$.updateBlur()),e>-1&&(a=setTimeout($.stopUpdatingBlur,e))},$.stopUpdatingBlur=function(){t=!1}}(),$(document).ready(function(){var t=$(".modal"),a=$(".modal-overlay"),e=!1,l=null;TweenMax.set(t,{autoAlpha:0});function i(t){e=!0,null!=l&&(clearTimeout(l),l=null),l=setTimeout(u,t)}function u(){e=!1}$(".open-modal").click(function(){e||(i(400),TweenMax.to(a,.3,{autoAlpha:1}),TweenMax.fromTo(t,.5,{x:(-$(window).width()-t.width())/2-50,scale:.9,autoAlpha:1},{delay:.1,rotationY:0,scale:1,opacity:1,x:0,z:0,ease:Elastic.easeOut,easeParams:[.4,.3],force3D:!1}),$.startUpdatingBlur(800))}),$(".close-modal,.modal-overlay,.input-submit").click(function(){e||(i(400),TweenMax.to(a,.3,{delay:.3,autoAlpha:0}),TweenMax.to(t,.3,{x:($(window).width()+t.width())/2+100,scale:.9,ease:Quad.easeInOut,force3D:!1,onComplete:function(){TweenMax.set(t,{autoAlpha:0})}}),$.startUpdatingBlur(400))}),t.initBlur(.5)});
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/IceCream/modal.010df166.js.map