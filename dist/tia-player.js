!function(e){var i={};function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)a.d(e,i,function(t){return n[t]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a(a.s=11)}([function(t,n,e){"use strict";var i=e(1),a=e.n(i);function o(n,t){var e,i=Object.keys(n);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(n),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,e)),i}var c={load:'<svg t="1561855857132" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5530" width="200" height="200"><path d="M512 0a51.2 51.2 0 0 1 51.2 51.2v153.6a51.2 51.2 0 0 1-102.4 0V51.2a51.2 51.2 0 0 1 51.2-51.2z m362.0352 149.9648a51.2 51.2 0 0 1 0 72.3968L765.44 330.9568a51.2 51.2 0 0 1-72.3968-72.3968l108.544-108.5952a51.2 51.2 0 0 1 72.448 0zM1024 512a51.2 51.2 0 0 1-51.2 51.2h-153.6a51.2 51.2 0 0 1 0-102.4h153.6a51.2 51.2 0 0 1 51.2 51.2z m-149.9648 362.0352a51.2 51.2 0 0 1-72.3968 0l-108.5952-108.5952a51.2 51.2 0 0 1 72.3968-72.3968l108.5952 108.544a51.2 51.2 0 0 1 0 72.448zM512 1024a51.2 51.2 0 0 1-51.2-51.2v-153.6a51.2 51.2 0 0 1 102.4 0v153.6a51.2 51.2 0 0 1-51.2 51.2z m-362.0352-149.9648a51.2 51.2 0 0 1 0-72.3968l108.5952-108.5952a51.2 51.2 0 1 1 72.3968 72.3968l-108.544 108.5952a51.2 51.2 0 0 1-72.448 0zM0 512a51.2 51.2 0 0 1 51.2-51.2h153.6a51.2 51.2 0 1 1 0 102.4H51.2a51.2 51.2 0 0 1-51.2-51.2z m149.9648-362.0352a51.2 51.2 0 0 1 72.3968 0L330.9568 258.56A51.2 51.2 0 1 1 258.56 330.9568L150.016 222.4128a51.2 51.2 0 0 1 0-72.448z" p-id="5531"></path></svg>'};function r(t){return t?("string"==typeof t&&(t={title:t}),this.init(function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach(function(t){a()(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}({duration:3e3,icon:"none"},t))):this}r.prototype.init=function(t){var e=this,n=t.title,i=t.icon,a=t.duration,o=t.btn,r=void 0===o?"close":o,s="via_"+Math.round(9999*Math.random()),l=document.createElement("div");l.innerHTML='<i class="tia-icon '.concat(i,'">').concat(c[i]||"","</i><p>").concat(n,'</p><span class="').concat(s,'">').concat(r,"</span>"),l.setAttribute("id",s),l.setAttribute("class","tia-toast"),document.body.appendChild(l),this.Dom=document.getElementById(s),this.Dom.getElementsByClassName(s)[0].onclick=function(t){var n;for(e.hide();n=e._CB.shift();)n(t)},this._hide=!1,setTimeout(function(){e.Dom.style.bottom=0},0),a&&setTimeout(function(){return e.hide()},a)},r.prototype._CB=[],r.prototype.hide=function(){var t=this;if(this._hide)return!1;this.Dom.style.bottom=-this.Dom.offsetHeight+"px",setTimeout(function(){return t.Dom.parentNode.removeChild(t.Dom)},300),this._hide=!0},r.prototype.then=function(t){return this._CB.push(t),this},n.a=function(t){return new r(t)}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){"use strict";t.exports=function(e){var l=[];return l.toString=function(){return this.map(function(t){var n=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var a=function(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(e," */")}(i),o=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")});return[e].concat(o).concat([a]).join("\n")}return[e].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},l.i=function(t,n,e){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(e)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var r=0;r<t.length;r++){var s=[].concat(t[r]);e&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),l.push(s))}},l}},function(t,n,i){var e,a,o,l={},c=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=e.apply(this,arguments)),a}),r=(o={},function(t,n){if("function"==typeof t)return t();if(void 0===o[t]){var e=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}o[t]=e}return o[t]}),p=null,d=0,s=[],u=i(4);function h(t,n){for(var e=0;e<t.length;e++){var i=t[e],a=l[i.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(b(i.parts[o],n))}else{for(var r=[],o=0;o<i.parts.length;o++)r.push(b(i.parts[o],n));l[i.id]={id:i.id,refs:1,parts:r}}}}function f(t,n){for(var e=[],i={},a=0;a<t.length;a++){var o=t[a],r=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(s):e.push(i[r]={id:r,parts:[s]})}return e}function v(t,n){var e=r(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=s[s.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),s.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=r(t.insertAt.before,e);e.insertBefore(n,a)}}function m(t){var n;null!==t.parentNode&&(t.parentNode.removeChild(t),0<=(n=s.indexOf(t))&&s.splice(n,1))}function g(t){var n,e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0!==t.attrs.nonce||(n=function(){0;return i.nc}())&&(t.attrs.nonce=n),y(e,t.attrs),v(t,e),e}function y(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,t){var e,i,a,o,r,s,l;if(t.transform&&n.css){if(!(e="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=e}return r=t.singleton?(i=d++,a=p=p||g(t),o=T.bind(null,a,i,!1),T.bind(null,a,i,!0)):n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=t,l=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",y(l,s.attrs),v(s,l),o=function(t,n,e){var i=e.css,a=e.sourceMap,o=void 0===n.convertToAbsoluteUrls&&a;(n.convertToAbsoluteUrls||o)&&(i=u(i));a&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}.bind(null,a=l,t),function(){m(a),a.href&&URL.revokeObjectURL(a.href)}):(a=g(t),o=function(t,n){var e=n.css,i=n.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,a),function(){m(a)}),o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}t.exports=function(t,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=c()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var s=f(t,r);return h(s,r),function(t){for(var n=[],e=0;e<s.length;e++){var i=s[e];(a=l[i.id]).refs--,n.push(a)}t&&h(f(t,r),r);for(var a,e=0;e<n.length;e++){if(0===(a=n[e]).refs){for(var o=0;o<a.parts.length;o++)a.parts[o]();delete l[a.id]}}}};var w,x=(w=[],function(t,n){return w[t]=n,w.filter(Boolean).join("\n")});function T(t,n,e,i){var a,o,r=e?"":i.css;t.styleSheet?t.styleSheet.cssText=x(n,r):(a=document.createTextNode(r),(o=t.childNodes)[n]&&t.removeChild(o[n]),o.length?t.insertBefore(a,o[n]):t.appendChild(a))}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var a=n.protocol+"//"+n.host,o=a+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var e,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(e=0===i.indexOf("//")?i:0===i.indexOf("/")?a+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(e)+")")})}},function(n,t){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(t){return typeof t}:n.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}n.exports=e},function(t,n,e){var i=e(7);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(3)(i,a);i.locals&&(t.exports=i.locals)},function(t,n,e){(n=e(2)(!1)).push([t.i,".Tia-player {\n  position: relative;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: transparent;\n}\n.Tia-player .panel-switch {\n  display: none;\n}\n.Tia-player .tia-pic {\n  width: 4.1em;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n  background-size: cover !important;\n  background-position: center !important;\n  background-color: #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px -1px 2px;\n  float: left;\n}\n.Tia-player .tia-pic .tia-icon {\n  position: absolute;\n  border-radius: 50%;\n  fill: #FFF;\n  border: solid 2px #FFF;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Tia-player .tia-pic .icon-play {\n  width: 2em;\n  height: 2em;\n  bottom: 50%;\n  right: 50%;\n  transform: translate(50%, 50%);\n}\n.Tia-player .tia-pic .icon-play svg {\n  width: 1.6em;\n  height: 1.6em;\n}\n.Tia-player .tia-pic .icon-pause {\n  width: 1.2em;\n  height: 1.2em;\n  bottom: 3px;\n  right: 3px;\n}\n.Tia-player .tia-pic .icon-pause svg {\n  width: 0.8em;\n  height: 0.8em;\n}\n.Tia-player .tia-list {\n  background-color: #fff;\n  border-radius: 3px 3px 0 0;\n  width: 19.1em;\n  height: 0px;\n  overflow-y: auto;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px -1px 2px;\n  transition: all 0.2s ease;\n}\n.Tia-player .tia-list ol {\n  margin: 0;\n  padding: 0;\n}\n.Tia-player .tia-list::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n  background-color: transparent;\n}\n.Tia-player .tia-list::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.Tia-player .tia-list::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #42b983;\n}\n.Tia-player .tia-list ol {\n  list-style-type: none;\n  padding: 8px 0;\n  height: 100%;\n}\n.Tia-player .tia-list ol li {\n  cursor: pointer;\n  text-align: left;\n  line-height: 1.8em;\n  padding: 0 8px;\n  border-top: solid 1px #e9e9e9;\n  color: #353535;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.9em;\n}\n.Tia-player .tia-list ol li:hover {\n  background-color: #e9e9e9;\n}\n.Tia-player .tia-list ol li:first-child {\n  border-top: 0;\n}\n.Tia-player .tia-list ol li .list-right {\n  color: #888;\n  font-size: 0.8em;\n  float: right;\n  text-align: right;\n}\n.Tia-player .tia-list ol .select {\n  color: #42b983;\n  background-color: #e9e9e9;\n}\n.Tia-player .tia-list ol .select::before {\n  content: '';\n}\n.Tia-player .tia-body {\n  height: 4.1em;\n  width: 100%;\n}\n.Tia-player .tia-body .tia-panel {\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px -1px 2px;\n  height: 100%;\n  float: left;\n  transition: all 0.3s ease;\n  overflow: hidden;\n}\n.Tia-player .tia-body .tia-panel .tia-info {\n  color: #353535;\n  font-size: 0.9em;\n  line-height: 1.5em;\n  padding-left: 8px;\n  height: 1.5em;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.Tia-player .tia-body .tia-panel .tia-info .m-info {\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.Tia-player .tia-body .tia-panel .tia-info .m-info .tia-author {\n  font-size: 0.8em;\n}\n.Tia-player .tia-body .tia-panel .tia-info .tia-time-info {\n  transform: scale(0.8);\n}\n.Tia-player .tia-body .tia-panel .tia-bar-warp {\n  height: 0.5em;\n  width: 100%;\n  padding: 0 0.5em;\n  box-sizing: border-box;\n}\n.Tia-player .tia-body .tia-panel .tia-bar-warp .tia-bar {\n  margin-top: 3px;\n  height: 2px;\n  width: 100%;\n  float: left;\n  background-color: #e9e9e9;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.Tia-player .tia-body .tia-panel .tia-bar-warp .tia-bar:hover .bar-control::after {\n  background: radial-gradient(#FFF, #42b983);\n}\n.Tia-player .tia-body .tia-panel .tia-bar-warp .tia-bar .bar-control {\n  height: 2px;\n  width: 0;\n  display: block;\n  transition: all 0.3s ease;\n  background-color: #42b983;\n}\n.Tia-player .tia-body .tia-panel .tia-bar-warp .tia-bar .bar-control::after {\n  content: '';\n  width: 8px;\n  height: 8px;\n  transition: all 0.3s ease;\n  float: right;\n  border-radius: 50%;\n  background: radial-gradient(#FFF, #42b983);\n  background-size: 180% 100%;\n  margin-right: -3px;\n  margin-top: -3px;\n  -webkit-animation: tia-rotate 3s linear infinite;\n          animation: tia-rotate 3s linear infinite;\n}\n.Tia-player .tia-body .tia-panel .tia-control {\n  padding: 0 0.5em;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.Tia-player .tia-body .tia-panel .tia-control .tia-icon {\n  flex: 1;\n  fill: #353535;\n  cursor: pointer;\n}\n.Tia-player .tia-body .tia-panel .tia-control .tia-icon > svg {\n  width: 1.6em;\n  height: 1.6em;\n  margin: 3px 0 3px 0;\n}\n.Tia-player .tia-body .tia-panel .tia-control .tia-icon:hover {\n  fill: #353535;\n}\n.Tia-player .tia-body .tia-panel .tia-control .fast_forward > svg {\n  transform: rotate(180deg);\n}\n.Tia-player .tia-body .tia-panel .tia-control .volume:hover > .volume-control {\n  width: 120px;\n}\n.Tia-player .tia-body .tia-panel .tia-control .volume .volume-control {\n  position: absolute;\n  width: 0px;\n  background-color: #e9e9e9;\n  height: 5px;\n  bottom: 2em;\n  border-radius: 2px;\n  transition: all 0.5s ease;\n  overflow: hidden;\n  cursor: pointer;\n}\n.Tia-player .tia-body .tia-panel .tia-control .volume .volume-control span {\n  display: block;\n  width: 80%;\n  height: 100%;\n  border-radius: 2px;\n  background-color: #42b983;\n}\n.Tia-player .tia-body .on > svg {\n  transform: rotate(180deg);\n}\n.Tia-player .tia-lrc {\n  position: absolute;\n  text-align: center;\n  transition: all 0.3s ease;\n  height: 2.5em;\n  overflow: hidden;\n}\n.Tia-player .tia-lrc .lrc-content {\n  transition: all 0.3s ease;\n}\n.Tia-player .tia-lrc .lrc-content p {\n  color: #888;\n  line-height: 1.2em;\n  height: 1.2em;\n  transform: scale(0.8);\n  margin: 0;\n}\n.Tia-player .tia-lrc .lrc-content .lrc-cursor {\n  line-height: 1.3em;\n  transform: scale(1);\n  color: #353535;\n}\n.Tia-player.tia-fixed {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 1022;\n}\n.Tia-player.tia-fixed .tia-lrc {\n  bottom: 0;\n  margin-bottom: 0.2em;\n  width: 100vw;\n  height: 2.5em;\n  overflow: hidden;\n  pointer-events: none;\n}\n.Tia-player.tia-fixed .tia-body {\n  position: relative;\n  z-index: 1022;\n}\n.Tia-player.tia-fixed .tia-body .tia-panel {\n  width: 0;\n}\n.Tia-player.tia-fixed .panel-switch {\n  cursor: pointer;\n  width: 1em;\n  height: 100%;\n  float: left;\n  display: block;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px -1px 2px;\n  background-color: #e9e9e9;\n  border-radius: 0 3px 0 3px;\n  fill: #888;\n}\n.Tia-player.tia-fixed .panel-switch svg {\n  height: 100%;\n  width: 1em;\n}\ndiv.tia-toast {\n  width: 100%;\n  z-index: 1024;\n  transition: all 0.3s ease;\n  background-color: #353535;\n  position: fixed;\n  bottom: -100px;\n  left: 0;\n  color: #e9e9e9;\n  display: flex;\n  overflow: hidden;\n}\ndiv.tia-toast p {\n  flex: 1;\n  padding: 0;\n  margin: 0;\n  padding: 10px 16px;\n}\ndiv.tia-toast .tia-icon {\n  margin: 0 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.tia-toast .tia-icon svg {\n  width: 26px;\n  height: 26px;\n  fill: #e9e9e9;\n}\ndiv.tia-toast .tia-icon.load {\n  -webkit-animation: tia-rotate 1.6s linear infinite;\n          animation: tia-rotate 1.6s linear infinite;\n}\ndiv.tia-toast span {\n  background-color: transparent;\n  line-height: 100%;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  color: #42b983;\n  padding: 0 12px;\n}\ndiv.tia-toast span:hover {\n  opacity: 0.9;\n}\n@-webkit-keyframes tia-rotate {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(180deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes tia-rotate {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  50% {\n    transform: rotateZ(180deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@media (min-width: 600px) {\n  div.tia-toast {\n    border-radius: 6px;\n    width: 500px;\n    left: calc(50% - 250px);\n  }\n  div.tia-toast p {\n    padding: 10px;\n  }\n}\n",""]),t.exports=n},,,,function(t,n,e){"use strict";e.r(n);var h=e(0),i=e(5),s=e.n(i);function r(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}var a,l={baseUrl:"",stringify:function(t,n){var e,i,a,o=[];for(var r in t){t.hasOwnProperty(r)&&(e=t[r],i=encodeURIComponent(r),a="object"===s()(e)?queryStringify(e,n?n+"["+i+"]":i):(n?n+"["+i+"]":i)+"="+encodeURIComponent(e),o.push(a))}return o.join("&")},parseHeaders:function(t){var n,e,i,a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],o={};return t&&t.split("\n").map(function(t){if(i=t.indexOf(":"),n=r(t.substr(0,i)).toLowerCase(),e=r(t.substr(i+1)),n){if(o[n]&&0<=a.indexOf(n))return;o[n]="set-cookie"===n?(o[n]?o[n]:[]).concat([e]):o[n]?o[n]+", "+e:e}}),o},request:(a=function(t,a){var o=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"GET";return!!t&&new Promise(function(n,e){/^http[s]?:\/\//.test(t)||(t=o.baseUrl+t),a=o.stringify(a),"GET"==r&&(t+=(-1===t.indexOf("?")?"?":"&")+a);var i=new XMLHttpRequest;i.open(r,t,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(a),i.onreadystatechange=function(){var t;i&&4===i.readyState&&4===i.readyState&&(t={headers:"getAllResponseHeaders"in i?l.parseHeaders(i.getAllResponseHeaders()):null,data:i.response||i.responseText,status:i.status,requestURL:i.responseURL,request:i},200!==i.status&&(/json/.test(t.headers["content-type"])?e(JSON.parse(t.data)):e(t.data)),t.data&&(/json/.test(t.headers["content-type"])?n(JSON.parse(t.data)):n(t.data)))},i.onerror=function(){e({msg:"Network Error",config:{url:t,data:a,Methods:r},xmlhttp:i})},i.onabort=function(){request&&e({msg:"Request aborted",config:{url:t,data:a,Methods:r},xmlhttp:i})},i.ontimeout=function(){e({msg:"timeout of Nam ms exceeded",config:{url:t,data:a,Methods:r},xmlhttp:i})}})},o.toString=function(){return a.toString()},o),get:function(t,n){return this.request(t,n)},post:function(t,n){return this.request(t,n,"POST")}};function o(t,n){return a.apply(this,arguments)}var c=l;e(6);function f(t){return t.split(":").map(function(t){return t<10?"0"+t:t}).join(":")}function p(t,n){for(var e=[],i=t.length,a=0;a<i;a++)e[a]=n(t[a],a);return e}var v='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>',d='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>',m='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z"></path></svg>',g='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>',y='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path></svg>',b='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>',w='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>',u='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>',x='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>',T='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>';function M(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:729837165,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"https://qiatia.cn/tia/";c.baseUrl=n;var i=Object(h.a)({title:"资源准备中",icon:"load",duration:0});c.get("playlist/"+t).then(function(t){var n=e.detail=e.parse(t);e.init({detail:n}),i.hide()}).catch(function(t){return Object(h.a)(t.toString())})}M.prototype.parse=function(t){var n=t.playlist;t.privileges;return{list:n.tracks.map(function(t){var n=t.name,e=t.ar,i=t.al,a=t.id;return{name:n,id:a,artist:e[0].name,pic:i.picUrl,src:"https://music.163.com/song/media/outer/url?id="+a+".mp3"}}),name:n.name,cover:n.coverImgUrl}},M.prototype.init=function(t){var a=this,n=t.detail,e=t.volume,i=void 0===e?.8:e,o=t.fiexed,r=void 0===o||o,s="";for(var l in n.list)s+='<li data-id="'+l+'"><span title="'+n.list[l].name+'">'+n.list[l].name+'</span><span class="list-right">'+n.list[l].artist+"</span></li>";var c=r?'<div class="tia-list"><ol>'.concat(s,'</ol></div>\n    <div class="tia-body">\n      <div class="tia-pic tia-toggle" title="播放切换"><div class="tia-icon music-control icon-play">').concat(v,'</div></div>\n      <div class="tia-panel">\n        <div class="tia-info">\n          <div class="m-info"></div>\n          <div class=\'tia-time-info\'><span class=\'tia-now-time\'  title="当前进度">00:00</span> / <span class=\'tia-all-time\'  title="合计时间">00:00</span></div>\n        </div>\n        <div class="tia-bar-warp"><div class="tia-bar"><span class=\'bar-control\'></span></div></div>\n        <div class="tia-control">\n          <span class="tia-icon fast_rewind"  title="上一曲">').concat(m,'</span>\n          <span class="tia-icon music-control icon-play"  title="播放切换">').concat(v,'</span>\n          <span class="tia-icon fast_forward"  title="下一曲">').concat(m,'</span>\n          <span class="tia-icon volume"  title="音量调节">').concat(y,'<div class=\'volume-control\'><span></span></div></span>\n          <span class="tia-icon order-switch order1" title="播放顺序切换">').concat(w,'</span>\n          <span class="tia-icon menu-switch" title="打开/隐藏 播放列表">').concat(g,'</span>\n          <span class="tia-icon lrc-switch" title="显示/隐藏 歌词">').concat(b,'</span>\n        </div>\n      </div>\n      <div class="panel-switch" title="打开/关闭控制面板">').concat(T,'</div>\n    </div>\n    <div class="tia-lrc"><div class="lrc-content"></div></div>\n    <audio class="tia-audio" src="').concat(n.list[0].src,'"></audio>'):'<div class="tia-list"><ol>'.concat(s,'</ol></div>\n    <div class="tia-body">\n      <div class="tia-pic tia-toggle" title="播放切换"><div class="tia-icon music-control icon-play">').concat(v,'</div></div>\n      <div class="tia-lrc"><div class="lrc-content"></div></div>\n      <div class="tia-panel">\n        <div class="tia-info">\n          <div class="m-info"></div>\n          <div class=\'tia-time-info\'><span class=\'tia-now-time\'  title="当前进度">00:00</span> / <span class=\'tia-all-time\'  title="合计时间">00:00</span></div>\n        </div>\n        <div class="tia-bar-warp"><div class="tia-bar"><span class=\'bar-control\'></span></div></div>\n        <div class="tia-control">\n          <span class="tia-icon fast_rewind"  title="上一曲">').concat(m,'</span>\n          <span class="tia-icon music-control icon-play"  title="播放切换">').concat(v,'</span>\n          <span class="tia-icon fast_forward"  title="下一曲">').concat(m,'</span>\n          <span class="tia-icon volume"  title="音量调节">').concat(y,'<div class=\'volume-control\'><span></span></div></span>\n          <span class="tia-icon order-switch order1" title="播放顺序切换">').concat(w,'</span>\n          <span class="tia-icon menu-switch" title="打开/隐藏 播放列表">').concat(g,'</span>\n          <span class="tia-icon lrc-switch" title="显示/隐藏 歌词">').concat(b,'</span>\n        </div>\n        <div class="panel-switch" title="打开/关闭控制面板">').concat(T,'</div>\n      </div>\n    </div>\n    <audio class="tia-audio" src="').concat(n.list[0].src,'"></audio>'),p=document.createElement("div");p.setAttribute("class","Tia-player "+(r?"tia-fixed":"")),p.innerHTML=c,document.body.appendChild(p),this.$DOM=p,this._id=0,this.$lrcView=[],this._orderIndex=0,this.audio=this.$("tia-audio"),this.audio.volume=i,this.$_nowtime=this.$("tia-now-time"),this.$_allTime=this.$("tia-all-time"),this.$_control=this.$DOM.getElementsByClassName("music-control"),this.$_title=this.$("m-info"),this.$_lrcWrap=this.$("lrc-content"),this.$_barControl=this.$("bar-control");var d=0,u=0;return this.audio.addEventListener("timeupdate",function(t){var n=t.target.currentTime;if(d<n&&(a.$_barControl.style.width=~~(n/a._allTime*100)+"%",a.$_nowtime.innerHTML=f(~~(n/60)+":"+~~(n%60)),d++),a.$lrcView[u]&&1<a.lyrics.length&&n>a.lyrics[u][0]){try{a.$_lrcWrap.style.transform="translateY(-"+1.2*u+"em)",a.$lrcView[u].className="lrc-cursor",0<u&&(a.$lrcView[u-1].className="")}catch(t){console.log(t)}u++}}),this.audio.addEventListener("play",function(t){a._allTime=t.target.duration}),this.audio.addEventListener("ended",function(){return a.pause(),d=u=0,a.$_lrcWrap.style.transform="translateY(0em)",Object(h.a)("即将播放下一首"),a.next()},!1),this.audio.addEventListener("durationchange",function(t){u=d=0}),this.audio.addEventListener("stalled",function(t){Object(h.a)({title:"网络不太好呢",icon:"load",duration:5e3})}),this.audio.addEventListener("error",function(t){Object(h.a)(t.toString()),a.next()}),this.$("tia-bar").onclick=function(t){var i=a.audio;try{var n=a.$DisplayX(t)*i.duration;"fastSeek"in i?i.fastSeek(n):i.currentTime=n,d=0,setTimeout(function(){for(var t=0,n=a.lyrics.length,e=i.currentTime;t<n&&(a.$lrcView[t]&&!(e<a.lyrics[t][0]));t++);u=t,a.$_lrcWrap.style.transform="translateY(-"+1.2*u+"em)",a.$lrcView[u].className="lrc-cursor"},10)}catch(t){Object(h.a)(t.toString())}},this.handleBtn(),this.player(n.list[this._id])},M.prototype.handleBtn=function(){var n=this;this.$_Pic=this.$("tia-toggle"),this.$_Pic.onclick=function(){return n.toggle()},this.$_panelSwitch=this.$("panel-switch"),this.$_panelSwitch.onclick=function(t){n.panelSwitch(t)},this.$_control[1].onclick=function(){n.toggle()},this.$("fast_forward").onclick=function(){n.next()},this.$("fast_rewind").onclick=function(){n.prev()},this.$("lrc-switch").onclick=function(){var t=n.$("tia-lrc");"0px"!==t.style.height?t.style.height=0:t.style.height="2.5em"};var e,i=this.$DOM.querySelectorAll(".tia-list>ol>li");this.$("menu-switch").onclick=function(){e&&(e.className=""),(e=i[n._id]).className="select";var t=n.$("tia-list");e&&t.scrollTo&&t.scrollTo(0,e.offsetTop-100),"15em"!==t.style.height?t.style.height="15em":t.style.height=0};var a=this;this.$("volume-control").onclick=function(t){var n=a.$DisplayX(t,this);a.audio.volume=n,this.getElementsByTagName("span")[0].style.width=100*n+"%"},p(i,function(t){t.onclick=function(){var t=a._id=this.dataset.id;e&&(e.className=""),(e=this).className="select",a.player(a.detail.list[t]).then(function(){a.play()})}}),this.$("order-switch").onclick=function(t){a._orderIndex++;var n=a._orderIndex%3;Object(h.a)(a._orderArr[n]),a.audio.loop=!1,1==n?this.innerHTML=x:2==n?(a.audio.loop=!0,this.innerHTML=u):this.innerHTML=w}},M.prototype.panelSwitch=function(){var t=this.$_panelSwitch.className;/on/.test(t)?(this.$("tia-list").style.height=0,this.$("tia-panel").style.width="0",this.$_panelSwitch.className="panel-switch"):(this.$("tia-panel").style.width="15.1em",this.$_panelSwitch.className="panel-switch on")},M.prototype.getlyric=function(t){var n=this;c.get("lyric/"+t).then(function(t){200===t.code?t.lrc?n.parseLyric(t.lrc.lyric):n.parseLyric("[00:00.00] 这是一首没有歌词孤独的歌"):Object(h.a)("歌词搜索失败")}).catch(function(t){Object(h.a)("歌词搜索失败"),console.warn(t)})},M.prototype.parseLyric=function(t){var n=decodeURIComponent(t).split("\n"),e=[];for(var i in n){var a=n[i],o=/\[\d*:\d*((\.|\:)\d*)*\]/g,r=a.match(o);if(r)for(var s=a.replace(o,""),l=0,c=r.length;l<c;l++){var p=r[l],d=60*Number(String(p.match(/\[\d*/i)).slice(1))+Number(String(p.match(/\:\d*/i)).slice(1))+"."+Number(String(p.match(/\.\d*/i)).slice(1));e.push([d,s])}}this.lyrics=e;var u="<header></header>";for(var h in e)u+="<p>"+e[h][1]+"</p>";this.$_lrcWrap.innerHTML=u,this.$lrcView=this.$DOM.querySelectorAll(".lrc-content>p")},M.prototype.toggle=function(){this.audio.paused?this.play():this.pause()},M.prototype.pause=function(){return p(this.$_control,function(t){t.innerHTML=v,t.className="tia-icon music-control icon-play"}),this.audio.pause()},M.prototype.play=function(){var i=this;return new Promise(function(n,e){i.audio.play().then(function(){var t=i._allTime=i.audio.duration;i.$_allTime.innerHTML=f(~~(t/60)+":"+~~t%60),p(i.$_control,function(t){t.innerHTML=d,t.className="tia-icon music-control icon-pause"}),n()}).catch(function(t){console.warn(t),Object(h.a)("歌曲播放失败, 可能这首歌有版权限制"),setTimeout(i.next,500),e()})})},M.prototype.next=function(){var t=this;this._orderIndex%3==1&&(this._id=~~(Math.random()*$.detail.list.length));var n=this.detail.list[++this._id];n||(Object(h.a)("已经最好一首了."),n=this.detail.list[this._id=0]),this.player(n).then(function(){t.play()})},M.prototype.prev=function(){var t=this;if(this._orderIndex%3==1&&(this._id=~~(Math.random()*$.detail.list.length)),this._id<=0)return Object(h.a)("已经第一首了！"),!1;this.player(this.detail.list[--this._id]).then(function(){t.play()})},M.prototype.player=function(e){var i=this;return new Promise(function(t,n){try{i.audio.src=e.src,i.$_Pic.style.background="url("+e.pic+")",i.$_title.innerHTML="<span>"+e.name+'</span><span class="tia-author"> - '+e.artist+"</span>",i.$_title.title="Name: "+e.name+"\nArct: "+e.artist,i.getlyric(e.id),t()}catch(t){Object(h.a)(t.toString()),n(t)}})},M.prototype.$=function(t){return/^#/.test(t)?document.getElementById(t.replace(/^#/,"")):this.$DOM.getElementsByClassName(t)[0]},M.prototype.$DisplayX=function(t){var n=t.target,e=t.clientX,i=1<arguments.length&&void 0!==arguments[1]&&arguments[1];i&&(n=i);for(var a=n.offsetParent,o=n.offsetLeft;a=a.offsetParent;)o+=a.offsetLeft;return(e-o+document.documentElement.scrollLeft)/n.offsetWidth},M.prototype._orderArr={0:"顺序播放",1:"随机播放",2:"单曲循环"};function _(t){return console.log("\n".concat("%c TiaPlayer v","19.07.08"," %c https://qiatia.cn ","\n"),"color: #eee; background: #030307; padding:3px 0;","background: #fadfa3; color:#42b983; padding: 3px 0;"),new M(t)}window.$Tia=_}]);