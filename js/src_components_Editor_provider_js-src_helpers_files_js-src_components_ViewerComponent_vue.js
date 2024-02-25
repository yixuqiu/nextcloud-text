/*! For license information please see src_components_Editor_provider_js-src_helpers_files_js-src_components_ViewerComponent_vue.js.LICENSE.txt */
"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["src_components_Editor_provider_js-src_helpers_files_js-src_components_ViewerComponent_vue"],{31728:(e,t,n)=>{n.d(t,{BG:()=>h,Cy:()=>_,FQ:()=>r,HB:()=>s,IT:()=>c,QT:()=>A,Uw:()=>i,Zf:()=>x,a_:()=>f,cY:()=>d,eP:()=>g,fB:()=>p,q$:()=>a,rz:()=>w,vo:()=>l,wU:()=>u,ww:()=>v});var o=n(52029);const i=Symbol("tiptap:editor"),s=Symbol("editor:file"),r=Symbol("attachment:resolver"),a=Symbol("editor:is-mobile"),d=Symbol("editor:is-public"),l=Symbol("editor:is-rich-editor"),c=Symbol("editor:is-rich-woskapace"),u=Symbol("sync:service"),m=Symbol("editor:upload"),_=(Symbol("hook:mention-search"),Symbol("hook:mention-insert"),{inject:{$editor:{from:i,default:null}}}),h={inject:{$syncService:{from:u,default:null}}},p={inject:{$isPublic:{from:d,default:!1}}},w={inject:{$isRichWorkspace:{from:c,default:!1}}},A={inject:{$isRichEditor:{from:l,default:!1}}},v={inject:{$isMobile:{from:a,default:!1}}},f={inject:{$file:{from:s,default:()=>({fileId:0,relativePath:null,document:null})}}},x={inject:{$attachmentResolver:{from:r,default:{resolve:e=>(o.k.warn("No attachment resolver provided. Some attachment sources cannot be resolved."),[e])}}}},g={inject:{$editorUpload:{from:m,default:!0}}}},20017:(e,t,n)=>{async function o(){if(!window._nc_text_editor_instance){if(window._nc_text_editor_importing)return await new Promise((e=>{const t=setInterval((()=>{window._nc_text_editor_instance&&(e(window._nc_text_editor_instance),clearInterval(t))}),200)}));window._nc_text_editor_importing=!0;const e=await Promise.all([n.e("mermaid"),n.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),n.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-b0a421"),n.e("vendors-node_modules_nextcloud_files_node_modules_nextcloud_router_dist_index_js-node_modules-c81854"),n.e("vendors-node_modules_nextcloud_dialogs_dist_chunks_toast-Y6d-U2Vh_mjs"),n.e("vendors-node_modules_path-normalize_lib_index_js-node_modules_proxy-polyfill_src_index_js-nod-f01f40"),n.e("src_components_RichTextReader_vue-data_image_svg_xml_3csvg_20xmlns_27http_www_w3_org_2000_svg-01d96d"),n.e("editor")]).then(n.bind(n,15935));window._nc_text_editor_instance=e.default}return window._nc_text_editor_instance}n.d(t,{Z:()=>o})},94091:(e,t,n)=>{n.d(t,{Lz:()=>r});n(69183);var o=n(5656),i=(n(74411),n(25030)),s=(n(77958),n(64024),n(47845),n(43935));n(19611);const r=function(e,t){const n=e.split("/"),o=t.split("/");for(n.pop();n[0]===o[0];)if(n.shift(),o.shift(),0===n.length&&0===o.length)return".";const i=n.fill("..").concat(o),s=t.split("/");return i.length<s.length?i.join("/"):t};let a=!1;let d=null;new o.h4({id:"workspace",order:10,enabled:(e,t)=>"files"===t.id,async render(e,t,o){d&&(d.$destroy(),d=null);const r=!!t.attributes["rich-workspace-file"]||!!a,l=a?(0,s.dirname)(a.path):t.path,c=a?"":t.attributes["rich-workspace"];a=!1;const{default:u}=await Promise.all([n.e("mermaid"),n.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),n.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-b0a421"),n.e("src_components_RichTextReader_vue-data_image_svg_xml_3csvg_20xmlns_27http_www_w3_org_2000_svg-01d96d"),n.e("src_components_Editor_provider_js-src_views_RichWorkspace_vue-node_modules_nextcloud_vue_dist-4c0c5c")]).then(n.bind(n,7444));Promise.resolve().then(n.bind(n,20144)).then((t=>{e.id="files-workspace-wrapper";const n=t.default;n.prototype.t=window.t,n.prototype.n=window.n,n.prototype.OCA=window.OCA;const o=n.extend(u);d=new o({propsData:{path:l,hasRichWorkspace:r,content:c},store:i.default}).$mount(e)}))},updated(e,t){a=!1;const n=!!e.attributes["rich-workspace-file"];d.path=e.path,d.hasRichWorkspace=n,d.content=e.attributes["rich-workspace"]}})},25030:(e,t,n)=>{n.d(t,{default:()=>f,D:()=>v});var o=n(20144),i=n(20629),s=n(62556),r=n(11480),a=n(47845);const d="SET_VIEW_WIDTH",l="SET_SHOW_AUTHOR_ANNOTATIONS",c="SET_CURRENT_SESSION",u="SET_HEADINGS",m="SET_ATTACHMENT_LIST";var _=n(20296),h=n.n(_);const p=()=>document.documentElement.clientWidth,w=e=>{let{commit:t}=e;const n=h()((()=>{t("text/".concat(d),p())}),100);window.addEventListener("resize",n)},A=(0,s.Kc)("text").persist().build();o.default.use(i.ZP);const v={state:{showAuthorAnnotations:"true"===A.getItem("showAuthorAnnotations"),currentSession:A.getItem("currentSession"),viewWidth:p(),headings:Object.freeze([]),attachmentList:[]},getters:{imageAttachments:e=>e.attachmentList.filter((e=>e.isImage)),findAttachment:e=>t=>e.attachmentList.find((e=>e.name===t))},mutations:{[d](e,t){e.viewWidth=t},[l](e,t){e.showAuthorAnnotations=t,A.setItem("showAuthorAnnotations",""+t)},[c](e,t){e.currentSession=t,A.setItem("currentSession",t)},[u](e,t){if(e.headings.length!==t.length)return void(e.headings=Object.freeze(t));const n=e.headings,o=t.map(((e,t)=>{const o=n[t].level;return Object.freeze({...e,previous:o})}));e.headings=Object.freeze(o)},[m](e,t){e.attachmentList=t}},actions:{setShowAuthorAnnotations(e,t){let{commit:n}=e;n(l,t)},setCurrentSession(e,t){let{commit:n}=e;n(c,t)},setHeadings(e,t){let{commit:n}=e;n(u,t)},async setAttachmentList(e,t){var n,o,i,s;let{commit:d,state:l}=e,{documentId:c,shareToken:u}=t;const _=await a.Z.post((0,r.nu)("/apps/text/attachments"),{documentId:null!==(n=null===(o=l.currentSession)||void 0===o?void 0:o.documentId)&&void 0!==n?n:c,sessionId:null===(i=l.currentSession)||void 0===i?void 0:i.id,sessionToken:null===(s=l.currentSession)||void 0===s?void 0:s.token,shareToken:u});d(m,_.data)}}},f=new i.yh({plugins:[w],modules:{text:{namespaced:!0,...v}}})},21284:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(87537),i=n.n(o),s=n(23645),r=n.n(s)()(i());r.push([e.id,".text-editor[data-v-1609d73c]:not(.viewer__file--hidden){overflow:scroll;top:0;width:100%;max-width:100%;height:100%;left:0;margin:0 auto;position:relative;background-color:var(--color-main-background)}.text-editor:not(.viewer__file--hidden).source-viewer .text-editor__content-wrapper[data-v-1609d73c]{margin-top:var(--header-height)}","",{version:3,sources:["webpack://./src/components/ViewerComponent.vue"],names:[],mappings:"AACA,yDACC,eAAA,CACA,KAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CACA,MAAA,CACA,aAAA,CACA,iBAAA,CACA,6CAAA,CAGC,qGACC,+BAAA",sourcesContent:["\n.text-editor:not(.viewer__file--hidden) {\n\toverflow: scroll;\n\ttop: 0;\n\twidth: 100%;\n\tmax-width: 100%;\n\theight: 100%;\n\tleft: 0;\n\tmargin: 0 auto;\n\tposition: relative;\n\tbackground-color: var(--color-main-background);\n\n\t&.source-viewer {\n\t\t.text-editor__content-wrapper {\n\t\t\tmargin-top: var(--header-height);\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const a=r},15639:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(87537),i=n.n(o),s=n(23645),r=n.n(s)()(i());r.push([e.id,":root{--text-editor-max-width: 670px }@media only screen and (max-width: 512px){.text-editor{top:auto}}.viewer[data-handler=text] .modal-wrapper .modal-container{bottom:0}","",{version:3,sources:["webpack://./src/css/variables.scss","webpack://./src/components/ViewerComponent.vue"],names:[],mappings:"AAAA,MACC,+BAAA,CCCD,0CAEC,aACC,QAAA,CAAA,CAIF,2DACC,QAAA",sourcesContent:[":root {\n\t--text-editor-max-width: 670px\n}\n\n","\n@import './../css/variables';\n@media only screen and (max-width: 512px) {\n\t// on mobile, modal-container has top: 50px\n\t.text-editor {\n\t\ttop: auto;\n\t}\n}\n\n.viewer[data-handler='text'] .modal-wrapper .modal-container {\n\tbottom: 0;\n}\n"],sourceRoot:""}]);const a=r},91124:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(83416),i=n(95573),s=n.n(i),r=n(75578),a=n(36109);const d={name:"PlainTextReader",components:{BaseReader:r.Z},provide:{renderHtml:e=>"<pre>"+s()(e)+"</pre>",extensions:()=>[a.f3,o.ZP]},props:{content:{type:String,required:!0}}};const l=(0,n(51900).Z)(d,(function(){return(0,this._self._c)("BaseReader",{attrs:{content:this.content}})}),[],!1,null,null,null).exports},30985:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var o=n(47845),i=n(91124),s=n(97009);var r=n(20017),a=n(95242);const d={name:"ViewerComponent",components:{RichTextReader:s.Z,PlainTextReader:i.Z,Editor:r.Z},props:{filename:{type:String,default:null},fileid:{type:Number,default:null},active:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!0},shareToken:{type:String,default:()=>document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},mime:{type:String,default:null},showOutlineOutside:{type:Boolean,default:!1},permissions:{type:String,default:""},source:{type:String,default:void 0}},data:()=>({content:""}),computed:{useSourceView(){return this.source&&(this.fileVersion||!this.fileid)},readerComponent(){return"text/markdown"===this.mime?s.Z:i.Z}},watch:{source(){this.loadFileContent()}},beforeCreate(){(0,a.U)(this.$options._base)},mounted(){this.loadFileContent()},methods:{async loadFileContent(){if(this.useSourceView){const e=await o.Z.get(this.source);this.content=e.data,this.contentLoaded=!0}this.$emit("update:loaded",!0)}}};var l=n(93379),c=n.n(l),u=n(7795),m=n.n(u),_=n(90569),h=n.n(_),p=n(3565),w=n.n(p),A=n(19216),v=n.n(A),f=n(44589),x=n.n(f),g=n(21284),C={};C.styleTagTransform=x(),C.setAttributes=w(),C.insert=h().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=v();c()(g.Z,C);g.Z&&g.Z.locals&&g.Z.locals;var b=n(15639),y={};y.styleTagTransform=x(),y.setAttributes=w(),y.insert=h().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=v();c()(b.Z,y);b.Z&&b.Z.locals&&b.Z.locals;const S=(0,n(51900).Z)(d,(function(){var e=this,t=e._self._c;return e.useSourceView?t("div",{staticClass:"text-editor source-viewer",attrs:{id:"editor-container","data-text-el":"editor-container"}},[t(e.readerComponent,{tag:"Component",attrs:{content:e.content}})],1):t("Editor",{attrs:{"file-id":e.fileid,"relative-path":e.filename,active:e.active,autofocus:e.autofocus,"share-token":e.shareToken,mime:e.mime,"show-outline-outside":e.showOutlineOutside}})}),[],!1,null,"1609d73c",null).exports}}]);
//# sourceMappingURL=src_components_Editor_provider_js-src_helpers_files_js-src_components_ViewerComponent_vue.js.map?v=1797961900d93818766c