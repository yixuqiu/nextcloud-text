/*! For license information please see files-modal.js.LICENSE.txt */
"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["files-modal","data_image_svg_xml_3csvg_20xmlns_27http_www_w3_org_2000_svg_27_20width_2724_27_20height_2724_-b2e651"],{21698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const o={name:"PublicFilesEditor",components:{NcModal:n(22069).Jc,Editor:()=>Promise.all([n.e("mermaid"),n.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),n.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-87eec1"),n.e("vendors-node_modules_nextcloud_dialogs_dist_chunks__plugin-vue2_normalizer-VrK6B12S_mjs-node_-38ea61"),n.e("vendors-node_modules_path-normalize_lib_index_js-node_modules_proxy-polyfill_src_index_js-nod-c169e7"),n.e("src_extensions_index_js-src_components_Editor_EditorOutline_vue-data_image_svg_xml_3csvg_20xm-1ac8cb"),n.e("editor")]).then(n.bind(n,74836))},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close(){this.$emit("close")}}};const s=(0,n(51900).Z)(o,(function(){var e=this,t=e._self._c;return e.active?t("NcModal",{attrs:{name:e.fileName},on:{close:e.close}},[t("Editor",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()}),[],!1,null,null,null).exports},51900:(e,t,n)=>{function o(e,t,n,o,s,r,i,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):s&&(l=a?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}n.d(t,{Z:()=>o})},81488:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"},34868:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"},37059:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"},75701:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"},97956:(e,t,n)=>{n.d(t,{IY:()=>h});var o=n(33907),s=(e=>(e[e.Debug=0]="Debug",e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error",e[e.Fatal=4]="Fatal",e))(s||{}),r=Object.defineProperty,i=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);class a{constructor(e){i(this,"context"),this.context=e||{}}formatMessage(e,t,n){let o="["+s[t].toUpperCase()+"] ";return n&&n.app&&(o+=n.app+": "),"string"==typeof e?o+e:(o+="Unexpected ".concat(e.name),e.message&&(o+=' "'.concat(e.message,'"')),t===s.Debug&&e.stack&&(o+="\n\nStack trace:\n".concat(e.stack)),o)}log(e,t,n){var o,r;if(!("number"==typeof(null==(o=this.context)?void 0:o.level)&&e<(null==(r=this.context)?void 0:r.level)))switch("object"==typeof t&&void 0===(null==n?void 0:n.error)&&(n.error=t),e){case s.Debug:console.debug(this.formatMessage(t,s.Debug,n),n);break;case s.Info:console.info(this.formatMessage(t,s.Info,n),n);break;case s.Warn:console.warn(this.formatMessage(t,s.Warn,n),n);break;case s.Error:console.error(this.formatMessage(t,s.Error,n),n);break;case s.Fatal:default:console.error(this.formatMessage(t,s.Fatal,n),n)}}debug(e,t){this.log(s.Debug,e,Object.assign({},this.context,t))}info(e,t){this.log(s.Info,e,Object.assign({},this.context,t))}warn(e,t){this.log(s.Warn,e,Object.assign({},this.context,t))}error(e,t){this.log(s.Error,e,Object.assign({},this.context,t))}fatal(e,t){this.log(s.Fatal,e,Object.assign({},this.context,t))}}function l(e){return new a(e)}var c=Object.defineProperty,d=(e,t,n)=>(((e,t,n)=>{t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);class u{constructor(e){d(this,"context"),d(this,"factory"),this.context={},this.factory=e}setApp(e){return this.context.app=e,this}setLogLevel(e){return this.context.level=e,this}setUid(e){return this.context.uid=e,this}detectUser(){const e=(0,o.ts)();return null!==e&&(this.context.uid=e.uid),this}detectLogLevel(){const e=this,t=()=>{var n,o;"complete"===document.readyState||"interactive"===document.readyState?(e.context.level=null!=(o=null==(n=window._oc_config)?void 0:n.loglevel)?o:s.Warn,window._oc_debug&&(e.context.level=s.Debug),document.removeEventListener("readystatechange",t)):document.addEventListener("readystatechange",t)};return t(),this}build(){return void 0===this.context.level&&this.detectLogLevel(),this.factory(this.context)}}function h(){return new u(l)}},55645:(e,t,n)=>{n.d(t,{a:()=>c,e:()=>l,g:()=>d,s:()=>u});var o=n(62556),s=n(59673),r=n(32859);const i=(0,o.Kc)("nextcloud-vue").persist(!0).build();let a;const l=(e,t=10)=>{a||(a=new s.EmojiIndex(r));const n=d();let o;return e?(o=a.search(":".concat(e),t),o.length<t&&(o=o.concat(a.search(e,t-o.length)))):o=s.frequently.get(t).map((e=>a.emoji(e)))||[],o.map((e=>e.getSkin(n)))},c=function(e){s.frequently.add(e)},d=()=>{var e;const t=Number.parseInt(null!=(e=i.getItem("NcEmojiPicker::currentSkinTone"))?e:"1");return Math.min(Math.max(t,1),6)},u=e=>{e=Math.min(Math.max(e,1),6),i.setItem("NcEmojiPicker::currentSkinTone",e.toString())}}}]);
//# sourceMappingURL=files-modal.js.map?v=46abb40874325331a87d