/*! For license information please see text-viewer.js.LICENSE.txt */
(()=>{var e,t,i,n,r={48583:(e,t,i)=>{"use strict";var n=i(27418);function r(e,t){if(e===t)return 0;for(var i=e.length,n=t.length,r=0,a=Math.min(i,n);r<a;++r)if(e[r]!==t[r]){i=e[r],n=t[r];break}return i<n?-1:n<i?1:0}function a(e){return i.g.Buffer&&"function"==typeof i.g.Buffer.isBuffer?i.g.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=i(89539),c=Object.prototype.hasOwnProperty,h=Array.prototype.slice,l="foo"===function(){}.name;function f(e){return Object.prototype.toString.call(e)}function s(e){return!a(e)&&("function"==typeof i.g.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var u=e.exports=y,g=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(o.isFunction(e)){if(l)return e.name;var t=e.toString().match(g);return t&&t[1]}}function p(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function b(e){if(l||!o.isFunction(e))return o.inspect(e);var t=d(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,i,n,r){throw new u.AssertionError({message:i,actual:e,expected:t,operator:n,stackStartFunction:r})}function y(e,t){e||m(e,!0,t,"==",u.ok)}function v(e,t,i,n){if(e===t)return!0;if(a(e)&&a(t))return 0===r(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(s(e)&&s(t)&&f(e)===f(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(a(e)!==a(t))return!1;var c=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),function(e,t,i,n){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(i&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var r=x(e),a=x(t);if(r&&!a||!r&&a)return!1;if(r)return v(e=h.call(e),t=h.call(t),i);var c,l,f=E(e),s=E(t);if(f.length!==s.length)return!1;for(f.sort(),s.sort(),l=f.length-1;l>=0;l--)if(f[l]!==s[l])return!1;for(l=f.length-1;l>=0;l--)if(!v(e[c=f[l]],t[c],i,n))return!1;return!0}(e,t,i,n))}return i?e===t:e==t}function x(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function w(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e,t,i,n){var r;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof i&&(n=i,i=null),r=function(e){var t;try{e()}catch(e){t=e}return t}(t),n=(i&&i.name?" ("+i.name+").":".")+(n?" "+n:"."),e&&!r&&m(r,i,"Missing expected exception"+n);var a="string"==typeof n,c=!e&&r&&!i;if((!e&&o.isError(r)&&a&&w(r,i)||c)&&m(r,i,"Got unwanted exception"+n),e&&r&&i&&!w(r,i)||!e&&r)throw r}u.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return p(b(e.actual),128)+" "+e.operator+" "+p(b(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var i=new Error;if(i.stack){var n=i.stack,r=d(t),a=n.indexOf("\n"+r);if(a>=0){var o=n.indexOf("\n",a+1);n=n.substring(o+1)}this.stack=n}}},o.inherits(u.AssertionError,Error),u.fail=m,u.ok=y,u.equal=function(e,t,i){e!=t&&m(e,t,i,"==",u.equal)},u.notEqual=function(e,t,i){e==t&&m(e,t,i,"!=",u.notEqual)},u.deepEqual=function(e,t,i){v(e,t,!1)||m(e,t,i,"deepEqual",u.deepEqual)},u.deepStrictEqual=function(e,t,i){v(e,t,!0)||m(e,t,i,"deepStrictEqual",u.deepStrictEqual)},u.notDeepEqual=function(e,t,i){v(e,t,!1)&&m(e,t,i,"notDeepEqual",u.notDeepEqual)},u.notDeepStrictEqual=function e(t,i,n){v(t,i,!0)&&m(t,i,n,"notDeepStrictEqual",e)},u.strictEqual=function(e,t,i){e!==t&&m(e,t,i,"===",u.strictEqual)},u.notStrictEqual=function(e,t,i){e===t&&m(e,t,i,"!==",u.notStrictEqual)},u.throws=function(e,t,i){j(!0,e,t,i)},u.doesNotThrow=function(e,t,i){j(!1,e,t,i)},u.ifError=function(e){if(e)throw e},u.strict=n((function e(t,i){t||m(t,!0,i,"==",e)}),u,{equal:u.strictEqual,deepEqual:u.deepStrictEqual,notEqual:u.notStrictEqual,notDeepEqual:u.notDeepStrictEqual}),u.strict.strict=u.strict;var E=Object.keys||function(e){var t=[];for(var i in e)c.call(e,i)&&t.push(i);return t}},74411:(e,t,i)=>{"use strict";var n,r;i.d(t,{$Z:()=>a,lF:()=>o,w_:()=>c});var a=["image/png","image/jpeg","image/jpg","image/gif","image/x-xbitmap","image/x-ms-bmp","image/bmp","image/svg+xml","image/webp"],o=["text/markdown"],c=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];null!==(n=window.oc_appswebroots)&&void 0!==n&&n.richdocuments||null!==(r=window.oc_appswebroots)&&void 0!==r&&r.onlyoffice||c.push("text/csv");[].concat(o,c)},25108:(e,t,i)=>{var n=i(89539),r=i(48583);function a(){return(new Date).getTime()}var o,c=Array.prototype.slice,h={};o=void 0!==i.g&&i.g.console?i.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var l=[[function(){},"log"],[function(){o.log.apply(o,arguments)},"info"],[function(){o.log.apply(o,arguments)},"warn"],[function(){o.warn.apply(o,arguments)},"error"],[function(e){h[e]=a()},"time"],[function(e){var t=h[e];if(!t)throw new Error("No such label: "+e);delete h[e];var i=a()-t;o.log(e+": "+i+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=n.format.apply(null,arguments),o.error(e.stack)},"trace"],[function(e){o.log(n.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=c.call(arguments,1);r.ok(!1,n.format.apply(null,t))}},"assert"]],f=0;f<l.length;f++){var s=l[f],u=s[0],g=s[1];o[g]||(o[g]=u)}e.exports=o},84451:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var n=i(87537),r=i.n(n),a=i(23645),o=i.n(a)()(r());o.push([e.id,"@media only screen and (max-width: 512px){.text-editor{top:auto}}","",{version:3,sources:["webpack://./src/components/ViewerComponent.vue"],names:[],mappings:"AAwEA,0CAEC,aACC,QAAA,CAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media only screen and (max-width: 512px) {\n\t// on mobile, modal-container has top: 50px\n\t.text-editor {\n\t\ttop: auto;\n\t}\n}\n"],sourceRoot:""}]);const c=o},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var h=this[c][0];null!=h&&(o[h]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);n&&o[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),i&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=i):f[2]=i),r&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=r):f[4]="".concat(r)),t.push(f))}},t}},87537:e=>{"use strict";e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),a="/*# ".concat(r," */"),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}return[t].join("\n")}},35717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}}},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,c,h=r(e),l=1;l<arguments.length;l++){for(var f in o=Object(arguments[l]))i.call(o,f)&&(h[f]=o[f]);if(t){c=t(o);for(var s=0;s<c.length;s++)n.call(o,c[s])&&(h[c[s]]=o[c[s]])}}return h}},34155:e=>{var t,i,n=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,h=[],l=!1,f=-1;function s(){l&&c&&(l=!1,c.length?h=c.concat(h):f=-1,h.length&&u())}function u(){if(!l){var e=o(s);l=!0;for(var t=h.length;t;){for(c=h,h=[];++f<t;)c&&c[f].run();f=-1,t=h.length}c=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];h.push(new g(e,t)),1!==h.length||l||o(u)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},93379:e=>{"use strict";var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var a={},o=[],c=0;c<e.length;c++){var h=e[c],l=n.base?h[0]+n.base:h[0],f=a[l]||0,s="".concat(l," ").concat(f);a[l]=f+1;var u=i(s),g={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var d=r(g,n);n.byIndex=c,t.splice(c,0,{identifier:s,updater:d,references:1})}o.push(s)}return o}function r(e,t){var i=t.domAPI(t);i.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=i(a[o]);t[c].references--}for(var h=n(e,r),l=0;l<a.length;l++){var f=i(a[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}a=h}}},90569:e=>{"use strict";var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},19216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var a=i.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},44589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},20384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},89539:(e,t,i)=>{var n=i(34155),r=i(25108),a=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],i=0;i<arguments.length;i++)t.push(h(arguments[i]));return t.join(" ")}i=1;for(var n=arguments,r=n.length,o=String(e).replace(a,(function(e){if("%%"===e)return"%";if(i>=r)return e;switch(e){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch(e){return"[Circular]"}default:return e}})),c=n[i];i<r;c=n[++i])b(c)||!w(c)?o+=" "+c:o+=" "+h(c);return o},t.deprecate=function(e,a){if(v(i.g.process))return function(){return t.deprecate(e,a).apply(this,arguments)};if(!0===n.noDeprecation)return e;var o=!1;return function(){if(!o){if(n.throwDeprecation)throw new Error(a);n.traceDeprecation?r.trace(a):r.error(a),o=!0}return e.apply(this,arguments)}};var o,c={};function h(e,i){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),p(i)?n.showHidden=i:i&&t._extend(n,i),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=l),s(n,e,n.depth)}function l(e,t){var i=h.styles[t];return i?"["+h.colors[i][0]+"m"+e+"["+h.colors[i][1]+"m":e}function f(e,t){return e}function s(e,i,n){if(e.customInspect&&i&&O(i.inspect)&&i.inspect!==t.inspect&&(!i.constructor||i.constructor.prototype!==i)){var r=i.inspect(n,e);return y(r)||(r=s(e,r,n)),r}var a=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var i="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(i,"string")}if(m(t))return e.stylize(""+t,"number");if(p(t))return e.stylize(""+t,"boolean");if(b(t))return e.stylize("null","null")}(e,i);if(a)return a;var o=Object.keys(i),c=function(e){var t={};return e.forEach((function(e,i){t[e]=!0})),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(i)),E(i)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return u(i);if(0===o.length){if(O(i)){var h=i.name?": "+i.name:"";return e.stylize("[Function"+h+"]","special")}if(x(i))return e.stylize(RegExp.prototype.toString.call(i),"regexp");if(j(i))return e.stylize(Date.prototype.toString.call(i),"date");if(E(i))return u(i)}var l,f="",w=!1,S=["{","}"];(d(i)&&(w=!0,S=["[","]"]),O(i))&&(f=" [Function"+(i.name?": "+i.name:"")+"]");return x(i)&&(f=" "+RegExp.prototype.toString.call(i)),j(i)&&(f=" "+Date.prototype.toUTCString.call(i)),E(i)&&(f=" "+u(i)),0!==o.length||w&&0!=i.length?n<0?x(i)?e.stylize(RegExp.prototype.toString.call(i),"regexp"):e.stylize("[Object]","special"):(e.seen.push(i),l=w?function(e,t,i,n,r){for(var a=[],o=0,c=t.length;o<c;++o)_(t,String(o))?a.push(g(e,t,i,n,String(o),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(g(e,t,i,n,r,!0))})),a}(e,i,n,c,o):o.map((function(t){return g(e,i,n,c,t,w)})),e.seen.pop(),function(e,t,i){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return i[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+i[1];return i[0]+t+" "+e.join(", ")+" "+i[1]}(l,f,S)):S[0]+f+S[1]}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,i,n,r,a){var o,c,h;if((h=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?c=h.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):h.set&&(c=e.stylize("[Setter]","special")),_(n,r)||(o="["+r+"]"),c||(e.seen.indexOf(h.value)<0?(c=b(i)?s(e,h.value,null):s(e,h.value,i-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),v(o)){if(a&&r.match(/^\d+$/))return c;(o=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+c}function d(e){return Array.isArray(e)}function p(e){return"boolean"==typeof e}function b(e){return null===e}function m(e){return"number"==typeof e}function y(e){return"string"==typeof e}function v(e){return void 0===e}function x(e){return w(e)&&"[object RegExp]"===S(e)}function w(e){return"object"==typeof e&&null!==e}function j(e){return w(e)&&"[object Date]"===S(e)}function E(e){return w(e)&&("[object Error]"===S(e)||e instanceof Error)}function O(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(o)&&(o=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!c[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var i=n.pid;c[e]=function(){var n=t.format.apply(t,arguments);r.error("%s %d: %s",e,i,n)}}else c[e]=function(){};return c[e]},t.inspect=h,h.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},h.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=p,t.isNull=b,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=y,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=x,t.isObject=w,t.isDate=j,t.isError=E,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=i(20384);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),A[e.getMonth()],t].join(" ")}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){r.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=i(35717),t._extend=function(e,t){if(!t||!w(t))return e;for(var i=Object.keys(t),n=i.length;n--;)e[i[n]]=t[i[n]];return e}},51900:(e,t,i)=>{"use strict";function n(e,t,i,n,r,a,o,c){var h,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=h):r&&(h=c?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),h)if(l.functional){l._injectStyles=h;var f=l.render;l.render=function(e,t){return h.call(t),f(e,t)}}else{var s=l.beforeCreate;l.beforeCreate=s?[].concat(s,h):[h]}return{exports:e,options:l}}i.d(t,{Z:()=>n})}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var r=Object.create(null);o.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&i;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,o.d(r,a),r},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>e+".js?v="+{vendors:"a03f498ffc07465da96f",editor:"6d33516f9df0be6f66e0","editor-rich":"d19d51b2e3690ea247d1","editor-guest":"9f473134e6b2ac9fb90c","editor-collab":"a24254c0f0ec98a73f73","highlight/1c":"0f34b871f8c27e510e17","highlight/abnf":"8418b3ca5aa2e0eeb3c4","highlight/accesslog":"193cab61f30a53474dbe","highlight/actionscript":"0160963adaeb03ddd2c6","highlight/ada":"cc4b4ffbf5a0e1a5ec8b","highlight/angelscript":"8ddf3d212233d9b5d349","highlight/apache":"72f935a30bf76305118e","highlight/applescript":"1e9ee111f9b130c52b53","highlight/arcade":"59adfc67d4bcc08c2810","highlight/arduino":"a35c152603b219918de2","highlight/armasm":"aa7928811dfd7acca71e","highlight/asciidoc":"5e49bf358dff3a434bb5","highlight/aspectj":"a2a8d760536a4f13c37b","highlight/autohotkey":"e48e8ee7320dc1d41f1d","highlight/autoit":"b087d9f3df127b6f31ef","highlight/avrasm":"7351adc4c5a2b520e145","highlight/awk":"9280cedb1849fc2503f6","highlight/axapta":"5c94f8e339425d53c56c","highlight/bash":"3e08b678c76e7afcb673","highlight/basic":"0b8a47af85eb555ad6a2","highlight/bnf":"4327271aec0f057c456a","highlight/brainfuck":"5950bb598b9d18901ee6","highlight/c":"062fd29b76965186e158","highlight/c-like":"50e84f62f963bfafa8cf","highlight/cal":"53c4da115fdbffc2f2de","highlight/capnproto":"9e7efe184f2fc3a5af4d","highlight/ceylon":"43da80a84f2eb93f720b","highlight/clean":"71225d5d4380dd7048b4","highlight/clojure":"0ff7a321eaadebf5e5fb","highlight/clojure-repl":"3d6923be929c0dfc5d9b","highlight/cmake":"bb6eea18e36693d3ee13","highlight/coffeescript":"6e6181f1de7fa33148ed","highlight/coq":"c39819510b96d6cfb79b","highlight/cos":"74a18b2f35747e898a1f","highlight/cpp":"ad08ed7df166597ca2e2","highlight/crmsh":"ec26a272d9782da0b519","highlight/crystal":"22a8072ddd7e969dad2b","highlight/csharp":"0efe866f49e12f8de1a1","highlight/csp":"043cec96608f2cfcf047","highlight/css":"115e6d0d4e5d8ec71143","highlight/d":"e20dc6578c553c76df9e","highlight/dart":"9218710803b503539db5","highlight/delphi":"0b54cb13f30a122dbea7","highlight/diff":"819d809d356c1ee4eb20","highlight/django":"89830db6a41e301cce77","highlight/dns":"af2765f9ae46628c9565","highlight/dockerfile":"62cdcf0cb24fd6b61150","highlight/dos":"2ed3283e268aac974fa4","highlight/dsconfig":"124e85dc67da77f9845e","highlight/dts":"af197a3bcd13bc490400","highlight/dust":"5f35802987033434cb45","highlight/ebnf":"f8826c4c127555845dfe","highlight/elixir":"9b970f6e5c5da7e8be77","highlight/elm":"d265f834285ab083405d","highlight/erb":"f97f07bef5de5cd5ccb7","highlight/erlang":"e85c22e0a73b8f946cbf","highlight/erlang-repl":"13af5babcc1d96d49b1f","highlight/excel":"87a77806dead994ab831","highlight/fix":"f2c13e8eee7875209d09","highlight/flix":"3db0a27e87fc2b296bc9","highlight/fortran":"e1ca86e222884da48c5b","highlight/fsharp":"d7f7b88414c75b644a4f","highlight/gams":"56e2b35ae27faf9ec8ca","highlight/gauss":"2f6fc7cca2b60afc2169","highlight/gcode":"7482c63b28c6e37ce175","highlight/gherkin":"f6041bfda6dfef745d56","highlight/glsl":"7597744f3846e8583bb8","highlight/gml":"cd405c1d8b442c1cd526","highlight/go":"2da572dcbd780c83a0bb","highlight/golo":"a89c8fdf271c5666244c","highlight/gradle":"51f15768233fb16ecfcf","highlight/groovy":"611d4fffe534495c31dd","highlight/haml":"376ec34cc81c891a76c7","highlight/handlebars":"d3447656b23949b619bb","highlight/haskell":"0468f3b1820450c5be84","highlight/haxe":"d6abe758f138d6bda2df","highlight/hsp":"6f33c58fd045e30f55c7","highlight/htmlbars":"dc4b38300f44fd29ef3b","highlight/http":"9b6fc091276cb385fee8","highlight/hy":"9493f77ee2949df78ad8","highlight/inform7":"a8bc9be6d212baf40a5b","highlight/ini":"399de0961c87502704e9","highlight/irpf90":"0498a9096261dc00c41c","highlight/isbl":"c9992936bebb8d7c0e8e","highlight/java":"3f2e32ee6b208bacefb2","highlight/javascript":"f41fdd2311fe601d335c","highlight/jboss-cli":"ca5d2a7fadea70abe0ff","highlight/json":"6f01d5e9b7f5427511d6","highlight/julia":"9a709fa2d834074d82d0","highlight/julia-repl":"f0aa3861f2820d6f7253","highlight/kotlin":"1a66da6784688d9385d7","highlight/lasso":"8cd5478ecc8768f5bfac","highlight/latex":"754ba25a9464ac0955c1","highlight/ldif":"d7f533e68999813ed035","highlight/leaf":"25b890170307c55819e4","highlight/less":"022a9c5c6d9ed842ac60","highlight/lisp":"cdd7d85922bde4958488","highlight/livecodeserver":"58ffe911972a028d00a3","highlight/livescript":"3d3ec0e18c0a6660927a","highlight/llvm":"43eef0a5bd764187e261","highlight/lsl":"d92e7a1c24b0d40decb6","highlight/lua":"7c6170f808f255b99294","highlight/makefile":"d2ad48950cf526c190ba","highlight/markdown":"e5155bdcc53e608f4c8c","highlight/mathematica":"37310e26599d2fa0d787","highlight/matlab":"7bf2d1fc58185d5227fe","highlight/maxima":"5ebd5f6c6666944140fe","highlight/mel":"6087c6e693748fb62cec","highlight/mercury":"47eb7dff494e73181321","highlight/mipsasm":"b4f37537ff29fda0feda","highlight/mizar":"442ef5dd9351647cfb81","highlight/mojolicious":"590c0909ac9eaf4dee63","highlight/monkey":"9745324172105d02ff67","highlight/moonscript":"147e03bd5401d0ef8497","highlight/n1ql":"0a461253e33a5955677b","highlight/nginx":"180d2b9be577d0a8cbdb","highlight/nim":"b377cd1fea559ce62544","highlight/nix":"05352ca9653c7282aa17","highlight/node-repl":"275f7ff741f507fb80cd","highlight/nsis":"13e9b33585e18196bbd4","highlight/objectivec":"f81c6c2fc5b9e6688fcf","highlight/ocaml":"9d81673eb0fc551c22da","highlight/openscad":"2c85a68daec3413e3272","highlight/oxygene":"9217cd47de23253bcd1b","highlight/parser3":"8c1c867375b9d6ea241b","highlight/perl":"7ac2f549f93a35960e69","highlight/pf":"f1f964ec3112bb56bd61","highlight/pgsql":"09d649186af68a00cf2c","highlight/php":"56a4de60f4b5ae1676b9","highlight/php-template":"39cbc717a221e0d5709e","highlight/plaintext":"44612fa299b99eed5a02","highlight/pony":"6e9139e244ee11496eb7","highlight/powershell":"3f54a1218b72bfd8b882","highlight/processing":"6ca0dc8250b886abd5b4","highlight/profile":"50329c2981699e2ff007","highlight/prolog":"327c9c2c315ce7f44c0b","highlight/properties":"0b7c5b3b911a74024862","highlight/protobuf":"8958e54c816bf43847cf","highlight/puppet":"1258761ae45e56983094","highlight/purebasic":"3428b33743aa198fbc71","highlight/python":"a9fbdf5051a47e429f77","highlight/python-repl":"8660c7e4ce2a9e63fd1e","highlight/q":"d68456df812d162520ab","highlight/qml":"91f409e0521389b99f13","highlight/r":"cadc06e542742d6723f3","highlight/reasonml":"e64dce93807f3b6affbe","highlight/rib":"3cfb22df561ade15d2d4","highlight/roboconf":"663408ebf7b80c1fd3f0","highlight/routeros":"e84fd048f06cfbd08d03","highlight/rsl":"b274c9ef636b31c93baf","highlight/ruby":"b74985c4e859bf2ec971","highlight/ruleslanguage":"954ba414a83283b9ebf8","highlight/rust":"00c3e472c5aace5bc1e4","highlight/sas":"7e0604e24a38f09b8926","highlight/scala":"36a231ab91010d272638","highlight/scheme":"862ccf7690ba73c5ddd7","highlight/scilab":"3972a2c91d5ecc778527","highlight/scss":"5c0c0e4989e20d7c6cfd","highlight/shell":"8ca180eb913c9d91b2df","highlight/smali":"2f3751eec5877ed1904e","highlight/smalltalk":"3be6545d5c63418d1a33","highlight/sml":"c5e37b1d25ce8a3d1872","highlight/sqf":"8c8c1d9654b3d66ed64d","highlight/sql":"81e132b850e931228dc2","highlight/sql_more":"5cec38aef73a369a9c2f","highlight/stan":"becf5baa6c3a20abae7c","highlight/stata":"1e672390f18b628f0984","highlight/step21":"5045d7d55a9c0858fd26","highlight/stylus":"327d8d8622adbdf6c049","highlight/subunit":"a086d4603c5773688c9a","highlight/swift":"33f811c40feba3b770b6","highlight/taggerscript":"56713876575881defc74","highlight/tap":"139f8239eddd5edc527f","highlight/tcl":"ed67f303b4116a78ea24","highlight/thrift":"4086b619f4366174c5c2","highlight/tp":"c570905e1377b233e7a4","highlight/twig":"aae6cb3f6c7e56d6e91f","highlight/typescript":"670010fe7e7e5bee4e96","highlight/vala":"e0d361119856cce3a577","highlight/vbnet":"e1038a5979596e54cd56","highlight/vbscript":"cf0204920d10671ea08c","highlight/vbscript-html":"2391befe8dec9447f542","highlight/verilog":"15ac71690f335ff8fd15","highlight/vhdl":"2aacb5ea49adab19ef42","highlight/vim":"95b56e8a65b48da113b8","highlight/x86asm":"4c39a528f099a64418c3","highlight/xl":"58aceb6b3d280cdfca43","highlight/xml":"72b45292d5519d0bbd99","highlight/xquery":"ae4cdbcba5d2ef7cc102","highlight/yaml":"aea56642f33dab609351","highlight/zephir":"514f70b5e05f5c056707","files-modal":"2f3f8849f92eccd61419"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},n="@nextcloud/text:",o.l=(e,t,r,a)=>{if(i[e])i[e].push(t);else{var c,h;if(void 0!==r)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+r){c=s;break}}c||(h=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+r),c.src=e),i[e]=[t];var u=(t,n)=>{c.onerror=c.onload=null,clearTimeout(g);var r=i[e];if(delete i[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(n))),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),h&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j="viewer",o.p="/apps/text/js/",(()=>{o.b=document.baseURI||self.location.href;var e={viewer:0};o.f.j=(t,i)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var a=o.p+o.u(t),c=new Error;o.l(a,(i=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}}),"chunk-"+t,t)}};var t=(t,i)=>{var n,r,[a,c,h]=i,l=0;if(a.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(h)h(o)}for(t&&t(i);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},i=self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0,(()=>{"use strict";const e={name:"ViewerComponent",components:{EditorWrapper:function(){return Promise.all([o.e("vendors"),o.e("editor")]).then(o.bind(o,57603))}},props:{filename:{type:String,default:null},fileid:{type:Number,default:null},active:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!0},shareToken:{type:String,default:null},mime:{type:String,default:null}},beforeMount:function(){void 0!==this.$parent.$parent&&this.$parent.$parent.onResize&&window.removeEventListener("resize",this.$parent.$parent.onResize)}};var t=o(93379),i=o.n(t),n=o(7795),r=o.n(n),a=o(90569),c=o.n(a),h=o(3565),l=o.n(h),f=o(19216),s=o.n(f),u=o(44589),g=o.n(u),d=o(84451),p={};p.styleTagTransform=g(),p.setAttributes=l(),p.insert=c().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=s();i()(d.Z,p);d.Z&&d.Z.locals&&d.Z.locals;const b=(0,o(51900).Z)(e,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("EditorWrapper",{attrs:{"file-id":e.fileid,"relative-path":e.filename,active:e.active,autofocus:e.autofocus,"share-token":e.shareToken,mime:e.mime}})}),[],!1,null,null,null).exports;var m=o(74411),y=o(25108);function v(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}o.nc=btoa(OC.requestToken),o.p=OC.linkTo("text","js/"),void 0===OCA.Viewer?y.error("Viewer app is not installed"):OCA.Viewer.registerHandler({id:"text",mimes:[].concat(v(m.lF),v(m.w_)),component:b,group:null,theme:"default"})})()})();
//# sourceMappingURL=text-viewer.js.map?v=b694458862407df55966