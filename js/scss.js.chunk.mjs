/*! third party licenses: js/vendor.LICENSE.txt */
import{g}from"./emoji-picker.chunk.mjs";import{a as c}from"./scss.chunk.mjs";function l(n,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function s(){s.warned||(s.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/scss" instead of "highlight.js/lib/languages/scss.js"'))}s();var a=c;const f=g(a),d=l({__proto__:null,default:f},[a]);export{d as s};