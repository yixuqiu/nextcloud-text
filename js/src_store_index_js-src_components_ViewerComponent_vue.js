/*! For license information please see src_store_index_js-src_components_ViewerComponent_vue.js.LICENSE.txt */
"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["src_store_index_js-src_components_ViewerComponent_vue"],{31728:(t,e,r)=>{r.d(e,{BG:()=>m,Cy:()=>p,FQ:()=>A,HB:()=>i,IT:()=>l,QT:()=>u,Uw:()=>n,Zf:()=>x,a_:()=>g,cY:()=>d,eP:()=>f,fB:()=>h,q$:()=>a,rz:()=>b,vo:()=>s,wU:()=>c,ww:()=>v});var o=r(52029);const n=Symbol("tiptap:editor"),i=Symbol("editor:file"),A=Symbol("attachment:resolver"),a=Symbol("editor:is-mobile"),d=Symbol("editor:is-public"),s=Symbol("editor:is-rich-editor"),l=Symbol("editor:is-rich-woskapace"),c=Symbol("sync:service"),C=Symbol("editor:upload"),p=(Symbol("hook:mention-search"),Symbol("hook:mention-insert"),{inject:{$editor:{from:n,default:null}}}),m={inject:{$syncService:{from:c,default:null}}},h={inject:{$isPublic:{from:d,default:!1}}},b={inject:{$isRichWorkspace:{from:l,default:!1}}},u={inject:{$isRichEditor:{from:s,default:!1}}},v={inject:{$isMobile:{from:a,default:!1}}},g={inject:{$file:{from:i,default:()=>({fileId:0,relativePath:null,document:null})}}},x={inject:{$attachmentResolver:{from:A,default:{resolve:t=>(o.k.warn("No attachment resolver provided. Some attachment sources cannot be resolved."),[t])}}}},f={inject:{$editorUpload:{from:C,default:!0}}}},25030:(t,e,r)=>{r.d(e,{default:()=>v,D:()=>u});var o=r(20144),n=r(20629),i=r(62556),A=r(11480),a=r(47845);const d="SET_VIEW_WIDTH",s="SET_SHOW_AUTHOR_ANNOTATIONS",l="SET_HEADINGS",c="SET_ATTACHMENT_LIST";var C=r(20296),p=r.n(C);const m=()=>document.documentElement.clientWidth,h=t=>{let{commit:e}=t;const r=p()((()=>{e("text/".concat(d),m())}),100);window.addEventListener("resize",r)},b=(0,i.Kc)("text").persist().build();o.default.use(n.ZP);const u={state:{showAuthorAnnotations:"true"===b.getItem("showAuthorAnnotations"),viewWidth:m(),headings:Object.freeze([]),attachmentList:[]},getters:{imageAttachments:t=>t.attachmentList.filter((t=>t.isImage)),findAttachment:t=>e=>t.attachmentList.find((t=>t.name===e))},mutations:{[d](t,e){t.viewWidth=e},[s](t,e){t.showAuthorAnnotations=e,b.setItem("showAuthorAnnotations",""+e)},[l](t,e){if(t.headings.length!==e.length)return void(t.headings=Object.freeze(e));const r=t.headings,o=e.map(((t,e)=>{const o=r[e].level;return Object.freeze({...t,previous:o})}));t.headings=Object.freeze(o)},[c](t,e){t.attachmentList=e}},actions:{setShowAuthorAnnotations(t,e){let{commit:r}=t;r(s,e)},setHeadings(t,e){let{commit:r}=t;r(l,e)},async setAttachmentList(t,e){var r;let{commit:o}=t,{documentId:n,session:i,shareToken:d}=e;const s=await a.Z.post((0,A.nu)("/apps/text/attachments"),{documentId:null!==(r=null==i?void 0:i.documentId)&&void 0!==r?r:n,sessionId:null==i?void 0:i.id,sessionToken:null==i?void 0:i.token,shareToken:d});o(c,s.data)}}},v=new n.yh({plugins:[h],modules:{text:{namespaced:!0,...u}}})},38909:(t,e,r)=>{r.d(e,{Z:()=>a});var o=r(87537),n=r.n(o),i=r(23645),A=r.n(i)()(n());A.push([t.id,".editor__content[data-v-151c6c0d]{max-width:var(--text-editor-max-width);margin:auto;position:relative;width:100%}.text-editor__content-wrapper[data-v-151c6c0d]{--side-width: calc((100% - var(--text-editor-max-width)) / 2);display:grid;grid-template-columns:1fr auto}.text-editor__content-wrapper.--show-outline[data-v-151c6c0d]{grid-template-columns:var(--side-width) auto var(--side-width)}.text-editor__content-wrapper .text-editor__content-wrapper__left[data-v-151c6c0d],.text-editor__content-wrapper .text-editor__content-wrapper__right[data-v-151c6c0d]{height:100%;position:relative}","",{version:3,sources:["webpack://./src/components/BaseReader.vue"],names:[],mappings:"AACA,kCACC,sCAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CAGD,+CACC,6DAAA,CACA,YAAA,CACA,8BAAA,CACA,8DACC,8DAAA,CAED,uKAEC,WAAA,CACA,iBAAA",sourcesContent:["\n.editor__content {\n\tmax-width: var(--text-editor-max-width);\n\tmargin: auto;\n\tposition: relative;\n\twidth: 100%;\n}\n\n.text-editor__content-wrapper {\n\t--side-width: calc((100% - var(--text-editor-max-width)) / 2);\n\tdisplay: grid;\n\tgrid-template-columns: 1fr auto;\n\t&.--show-outline {\n\t\tgrid-template-columns: var(--side-width) auto var(--side-width);\n\t}\n\t.text-editor__content-wrapper__left,\n\t.text-editor__content-wrapper__right {\n\t\theight: 100%;\n\t\tposition: relative;\n\t}\n}\n"],sourceRoot:""}]);const a=A},36993:(t,e,r)=>{r.d(e,{Z:()=>C});var o=r(87537),n=r.n(o),i=r(23645),A=r.n(i),a=r(61667),d=r.n(a),s=new URL(r(69521),r.b),l=A()(n()),c=d()(s);l.push([t.id,`div.ProseMirror{height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:var(--default-font-size);outline:none;--table-color-border: var(--color-border);--table-color-heading: var(--color-text-maxcontrast);--table-color-heading-border: var(--color-border-dark);--table-color-background: var(--color-main-background);--table-color-background-hover: var(--color-primary-element-light);--table-border-radius: var(--border-radius)}div.ProseMirror :target{scroll-margin-top:50px}div.ProseMirror[contenteditable=true],div.ProseMirror[contenteditable=false],div.ProseMirror [contenteditable=true],div.ProseMirror [contenteditable=false]{width:100%;background-color:rgba(0,0,0,0);color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:var(--default-font-size)}div.ProseMirror[contenteditable=true]:not(.collaboration-cursor__caret),div.ProseMirror[contenteditable=false]:not(.collaboration-cursor__caret),div.ProseMirror [contenteditable=true]:not(.collaboration-cursor__caret),div.ProseMirror [contenteditable=false]:not(.collaboration-cursor__caret){border:none !important}div.ProseMirror[contenteditable=true]:focus,div.ProseMirror[contenteditable=true]:focus-visible,div.ProseMirror[contenteditable=false]:focus,div.ProseMirror[contenteditable=false]:focus-visible,div.ProseMirror [contenteditable=true]:focus,div.ProseMirror [contenteditable=true]:focus-visible,div.ProseMirror [contenteditable=false]:focus,div.ProseMirror [contenteditable=false]:focus-visible{box-shadow:none !important}div.ProseMirror ul[data-type=taskList]{margin-left:1px}div.ProseMirror .checkbox-item{display:flex;align-items:start}div.ProseMirror .checkbox-item input[type=checkbox]{display:none}div.ProseMirror .checkbox-item:before{content:"";vertical-align:middle;margin:3px 6px 3px 2px;border:1px solid var(--color-text-maxcontrast);display:block;border-radius:var(--border-radius);height:14px;width:14px;box-shadow:none !important;background-position:center;cursor:pointer;left:9px}div.ProseMirror .checkbox-item.checked:before{background-image:url(${c});background-color:var(--color-primary-element);border-color:var(--color-primary-element)}div.ProseMirror .checkbox-item.checked>label>p{color:var(--color-text-maxcontrast);text-decoration:line-through}div.ProseMirror .checkbox-item label{display:block;flex-grow:1;max-width:calc(100% - 28px)}div.ProseMirror>*:first-child{margin-top:10px}div.ProseMirror>h1:first-child,div.ProseMirror h2:first-child,div.ProseMirror h3:first-child,div.ProseMirror h4:first-child,div.ProseMirror h5:first-child,div.ProseMirror h6:first-child{margin-top:0}div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}div.ProseMirror p .paragraph-content{margin-bottom:1em;line-height:150%}div.ProseMirror em{font-style:italic}div.ProseMirror h1,div.ProseMirror h2,div.ProseMirror h3,div.ProseMirror h4,div.ProseMirror h5,div.ProseMirror h6{font-weight:600;line-height:1.1em;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}div.ProseMirror h1{font-size:30px}div.ProseMirror h2{font-size:26px}div.ProseMirror h3{font-size:23px}div.ProseMirror h4{font-size:20px}div.ProseMirror h5{font-size:17px}div.ProseMirror h6{font-size:var(--default-font-size)}div.ProseMirror img{cursor:default;max-width:100%}div.ProseMirror hr{padding:2px 0;border:none;margin:2em 0;width:100%}div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}div.ProseMirror pre::before{content:attr(data-language);text-transform:uppercase;display:block;text-align:right;font-weight:bold;font-size:.6rem}div.ProseMirror pre code .hljs-comment,div.ProseMirror pre code .hljs-quote{color:#999}div.ProseMirror pre code .hljs-variable,div.ProseMirror pre code .hljs-template-variable,div.ProseMirror pre code .hljs-attribute,div.ProseMirror pre code .hljs-tag,div.ProseMirror pre code .hljs-name,div.ProseMirror pre code .hljs-regexp,div.ProseMirror pre code .hljs-link,div.ProseMirror pre code .hljs-selector-id,div.ProseMirror pre code .hljs-selector-class{color:#f2777a}div.ProseMirror pre code .hljs-number,div.ProseMirror pre code .hljs-meta,div.ProseMirror pre code .hljs-built_in,div.ProseMirror pre code .hljs-builtin-name,div.ProseMirror pre code .hljs-literal,div.ProseMirror pre code .hljs-type,div.ProseMirror pre code .hljs-params{color:#f99157}div.ProseMirror pre code .hljs-string,div.ProseMirror pre code .hljs-symbol,div.ProseMirror pre code .hljs-bullet{color:#9c9}div.ProseMirror pre code .hljs-title,div.ProseMirror pre code .hljs-section{color:#fc6}div.ProseMirror pre code .hljs-keyword,div.ProseMirror pre code .hljs-selector-tag{color:#69c}div.ProseMirror pre code .hljs-emphasis{font-style:italic}div.ProseMirror pre code .hljs-strong{font-weight:700}div.ProseMirror pre.frontmatter{margin-bottom:2em;border-left:4px solid var(--color-primary-element)}div.ProseMirror pre.frontmatter::before{display:block;content:attr(data-title);color:var(--color-text-maxcontrast);padding-bottom:.5em}div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}div.ProseMirror li{position:relative;padding-left:3px}div.ProseMirror li p .paragraph-content{margin-bottom:.5em}div.ProseMirror ul,div.ProseMirror ol{padding-left:10px;margin-left:10px;margin-bottom:1em}div.ProseMirror ul>li{list-style-type:disc}div.ProseMirror li ul>li{list-style-type:circle}div.ProseMirror li li ul>li{list-style-type:square}div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}div.ProseMirror table{border-spacing:0;width:calc(100% - 50px);table-layout:auto;white-space:normal;margin-bottom:1em}div.ProseMirror table+*{margin-top:1em}div.ProseMirror table td,div.ProseMirror table th{border:1px solid var(--table-color-border);border-left:0;vertical-align:top;max-width:100%}div.ProseMirror table td:first-child,div.ProseMirror table th:first-child{border-left:1px solid var(--table-color-border)}div.ProseMirror table td{padding:.5em .75em;border-top:0;color:var(--color-main-text)}div.ProseMirror table th{padding:0 0 0 .75em;font-weight:normal;border-bottom-color:var(--table-color-heading-border);color:var(--table-color-heading)}div.ProseMirror table th>div{display:flex}div.ProseMirror table tr{background-color:var(--table-color-background)}div.ProseMirror table tr:hover,div.ProseMirror table tr:active,div.ProseMirror table tr:focus{background-color:var(--table-color-background-hover)}div.ProseMirror table tr:first-child th:first-child{border-top-left-radius:var(--table-border-radius)}div.ProseMirror table tr:first-child th:last-child{border-top-right-radius:var(--table-border-radius)}div.ProseMirror table tr:last-child td:first-child{border-bottom-left-radius:var(--table-border-radius)}div.ProseMirror table tr:last-child td:last-child{border-bottom-right-radius:var(--table-border-radius)}.ProseMirror-focused .ProseMirror-gapcursor{display:block}.editor__content p.is-empty:first-child::before{content:attr(data-placeholder);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}.editor__content{tab-size:4}.tippy-content div{visibility:visible !important}@media print{@page{size:A4;margin:2.5cm 2cm 2cm 2.5cm}body{position:absolute;overflow:visible !important}#header{display:none !important}#content{display:block !important;position:relative !important;border-radius:0;margin:0;width:100%;height:fit-content}footer{display:none !important}#viewer[data-handler=text]{border:none;width:100% !important;position:absolute !important}#viewer[data-handler=text] .modal-header{display:none !important}#viewer[data-handler=text] .modal-container{top:0px;height:fit-content}.text-editor{height:fit-content !important}.text-editor .text-menubar{display:none !important}.text-editor .action-item{display:none !important}.text-editor .editor__content{max-width:100%}.text-editor .text-editor__wrapper{height:fit-content;position:unset}.text-editor .text-editor__wrapper div.ProseMirror{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0}.text-editor .text-editor__wrapper div.ProseMirror h1,.text-editor .text-editor__wrapper div.ProseMirror h2,.text-editor .text-editor__wrapper div.ProseMirror h3,.text-editor .text-editor__wrapper div.ProseMirror h4,.text-editor .text-editor__wrapper div.ProseMirror h5{break-after:avoid;page-break-after:avoid}.text-editor .text-editor__wrapper div.ProseMirror .image,.text-editor .text-editor__wrapper div.ProseMirror img,.text-editor .text-editor__wrapper div.ProseMirror table{break-inside:avoid-page;page-break-inside:avoid;max-width:90% !important;margin:5vw auto 5vw 5% !important}.text-editor .text-editor__wrapper div.ProseMirror th{color:#000 !important;font-weight:bold !important;border-width:0 1px 2px 0 !important;border-color:gray !important;border-style:none solid solid none !important}.text-editor .text-editor__wrapper div.ProseMirror th:last-of-type{border-width:0 0 2px 0 !important}.text-editor .text-editor__wrapper div.ProseMirror td{border-style:none solid none none !important;border-width:1px !important;border-color:gray !important}.text-editor .text-editor__wrapper div.ProseMirror td:last-of-type{border:none !important}.menubar-placeholder,.text-editor--readonly-bar{display:none}.text-editor__content-wrapper.--show-outline{display:block}.text-editor__content-wrapper .editor--outline{width:auto;height:auto;overflow:unset;position:relative}.text-editor__content-wrapper .editor--outline__btn-close{display:none}.collaboration-cursor__caret,.collaboration-cursor__label{display:none}}`,"",{version:3,sources:["webpack://./src/css/prosemirror.scss","webpack://./src/css/print.scss"],names:[],mappings:"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",sourcesContent:["@use 'sass:selector';\n\n/* Document rendering styles */\ndiv.ProseMirror {\n\theight: 100%;\n\tposition: relative;\n\tword-wrap: break-word;\n\twhite-space: pre-wrap;\n\t-webkit-font-variant-ligatures: none;\n\tfont-variant-ligatures: none;\n\tpadding: 4px 8px 200px 14px;\n\tline-height: 150%;\n\tfont-size: var(--default-font-size);\n\toutline: none;\n\n\t:target {\n\t\t// Menubar height: 44px + 3px bottom + 3px top padding\n\t\tscroll-margin-top: 50px;\n\t}\n\n\t&[contenteditable=true],\n\t&[contenteditable=false],\n\t[contenteditable=true],\n\t[contenteditable=false] {\n\t\twidth: 100%;\n\t\tbackground-color: transparent;\n\t\tcolor: var(--color-main-text);\n\t\topacity: 1;\n\t\t-webkit-user-select: text;\n\t\tuser-select: text;\n\t\tfont-size: var(--default-font-size);\n\n\t\t&:not(.collaboration-cursor__caret) {\n\t\t\tborder: none !important;\n\t\t}\n\n\t\t&:focus, &:focus-visible {\n\t\t\tbox-shadow: none !important;\n\t\t}\n\t}\n\n\tul[data-type=taskList] {\n\t\tmargin-left: 1px;\n\t}\n\n\t.checkbox-item {\n\t\tdisplay: flex;\n\t\talign-items: start;\n\n\t\tinput[type=checkbox] {\n\t\t\tdisplay: none;\n\t\t}\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tvertical-align: middle;\n\t\t\tmargin: 3px 6px 3px 2px;\n\t\t\tborder: 1px solid var(--color-text-maxcontrast);\n\t\t\tdisplay: block;\n\t\t\tborder-radius: var(--border-radius);\n\t\t\theight: 14px;\n\t\t\twidth: 14px;\n\t\t\tbox-shadow: none !important;\n\t\t\tbackground-position: center;\n\t\t\tcursor: pointer;\n\t\t\tleft: 9px;\n\t\t}\n\t\t&.checked{\n\t\t\t&:before {\n\t\t\t\tbackground-image: url('../../img/checkbox-mark.svg');\n\t\t\t\tbackground-color: var(--color-primary-element);\n\t\t\t\tborder-color: var(--color-primary-element);\n\t\t\t}\n\t\t\t> label > p {\n\t\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t}\n\t\tlabel {\n\t\t\tdisplay: block;\n\t\t\tflex-grow: 1;\n\t\t\tmax-width: calc(100% - 28px);\n\t\t}\n\t}\n\n\t> *:first-child {\n\t\tmargin-top: 10px;\n\t}\n\n\t> h1,h2,h3,h4,h5,h6 {\n\t\t&:first-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n\n\ta {\n\t\tcolor: var(--color-primary-element);\n\t\ttext-decoration: underline;\n\t\tpadding: .5em 0;\n\t}\n\n\tp .paragraph-content {\n\t\tmargin-bottom: 1em;\n\t\tline-height: 150%;\n\t}\n\n\tem {\n\t\tfont-style: italic;\n\t}\n\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tfont-weight: 600;\n\t\tline-height: 1.1em;\n\t\tmargin-top: 24px;\n\t\tmargin-bottom: 12px;\n\t\tcolor: var(--color-main-text);\n\t}\n\n\th1 {\n\t\tfont-size: 30px;\n\t}\n\n\th2 {\n\t\tfont-size: 26px;\n\t}\n\n\th3 {\n\t\tfont-size: 23px;\n\t}\n\n\th4 {\n\t\tfont-size: 20px;\n\t}\n\n\th5 {\n\t\tfont-size: 17px;\n\t}\n\n\th6 {\n\t\tfont-size: var(--default-font-size);\n\t}\n\n\timg {\n\t\tcursor: default;\n\t\tmax-width: 100%;\n\t}\n\n\thr {\n\t\tpadding: 2px 0;\n\t\tborder: none;\n\t\tmargin: 2em 0;\n\t\twidth: 100%;\n\t}\n\n\thr:after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\theight: 1px;\n\t\tbackground-color: var(--color-border-dark);\n\t\tline-height: 2px;\n\t}\n\n\tpre {\n\t\twhite-space: pre-wrap;\n\t\tbackground-color: var(--color-background-dark);\n\t\tborder-radius: var(--border-radius);\n\t\tpadding: 1em 1.3em;\n\t\tmargin-bottom: 1em;\n\n\t\t&::before {\n\t\t\tcontent: attr(data-language);\n\t\t\ttext-transform: uppercase;\n\t\t\tdisplay: block;\n\t\t\ttext-align: right;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 0.6rem;\n\t\t}\n\t\tcode {\n\t\t\t.hljs-comment,\n\t\t\t.hljs-quote {\n\t\t\t\tcolor: #999999;\n\t\t\t}\n\t\t\t.hljs-variable,\n\t\t\t.hljs-template-variable,\n\t\t\t.hljs-attribute,\n\t\t\t.hljs-tag,\n\t\t\t.hljs-name,\n\t\t\t.hljs-regexp,\n\t\t\t.hljs-link,\n\t\t\t.hljs-selector-id,\n\t\t\t.hljs-selector-class {\n\t\t\t\tcolor: #f2777a;\n\t\t\t}\n\t\t\t.hljs-number,\n\t\t\t.hljs-meta,\n\t\t\t.hljs-built_in,\n\t\t\t.hljs-builtin-name,\n\t\t\t.hljs-literal,\n\t\t\t.hljs-type,\n\t\t\t.hljs-params {\n\t\t\t\tcolor: #f99157;\n\t\t\t}\n\t\t\t.hljs-string,\n\t\t\t.hljs-symbol,\n\t\t\t.hljs-bullet {\n\t\t\t\tcolor: #99cc99;\n\t\t\t}\n\t\t\t.hljs-title,\n\t\t\t.hljs-section {\n\t\t\t\tcolor: #ffcc66;\n\t\t\t}\n\t\t\t.hljs-keyword,\n\t\t\t.hljs-selector-tag {\n\t\t\t\tcolor: #6699cc;\n\t\t\t}\n\t\t\t.hljs-emphasis {\n\t\t\t\tfont-style: italic;\n\t\t\t}\n\t\t\t.hljs-strong {\n\t\t\t\tfont-weight: 700;\n\t\t\t}\n\t\t}\n\t}\n\n\tpre.frontmatter {\n\t\tmargin-bottom: 2em;\n\t\tborder-left: 4px solid var(--color-primary-element);\n\t}\n\n\tpre.frontmatter::before {\n\t\tdisplay: block;\n\t\tcontent: attr(data-title);\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tpadding-bottom: 0.5em;\n\t}\n\n\tp code {\n\t\tbackground-color: var(--color-background-dark);\n\t\tborder-radius: var(--border-radius);\n\t\tpadding: .1em .3em;\n\t}\n\n\tli {\n\t\tposition: relative;\n\t\tpadding-left: 3px;\n\n\t\tp .paragraph-content {\n\t\t\tmargin-bottom: 0.5em;\n\t\t}\n\t}\n\n\tul, ol {\n\t\tpadding-left: 10px;\n\t\tmargin-left: 10px;\n\t\tmargin-bottom: 1em;\n\t}\n\n\tul > li {\n\t\tlist-style-type: disc;\n\t}\n\n\t// Second-level list entries\n\tli ul > li {\n\t\tlist-style-type: circle;\n\t}\n\n\t// Third-level and further down list entries\n\tli li ul > li {\n\t\tlist-style-type: square;\n\t}\n\n\tblockquote {\n\t\tpadding-left: 1em;\n\t\tborder-left: 4px solid var(--color-primary-element);\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tmargin-left: 0;\n\t\tmargin-right: 0;\n\t}\n\n\t// table variables\n\t--table-color-border: var(--color-border);\n\t--table-color-heading: var(--color-text-maxcontrast);\n\t--table-color-heading-border: var(--color-border-dark);\n\t--table-color-background: var(--color-main-background);\n\t--table-color-background-hover: var(--color-primary-element-light);\n\t--table-border-radius: var(--border-radius);\n\n\ttable {\n\t\tborder-spacing: 0;\n\t\twidth: calc(100% - 50px);\n\t\ttable-layout: auto;\n\t\twhite-space: normal; // force text to wrapping\n\t\tmargin-bottom: 1em;\n\t\t&+ * {\n\t\t\tmargin-top: 1em;\n\t\t}\n\n\n\t\ttd, th {\n\t\t\tborder: 1px solid var(--table-color-border);\n\t\t\tborder-left: 0;\n\t\t\tvertical-align: top;\n\t\t\tmax-width: 100%;\n\t\t\t&:first-child {\n\t\t\t\tborder-left: 1px solid var(--table-color-border);\n\t\t\t}\n\t\t}\n\t\ttd {\n\t\t\tpadding: 0.5em 0.75em;\n\t\t\tborder-top: 0;\n\t\t\tcolor: var(--color-main-text);\n\t\t}\n\t\tth {\n\t\t\tpadding: 0 0 0 0.75em;\n\t\t\tfont-weight: normal;\n\t\t\tborder-bottom-color: var(--table-color-heading-border);\n\t\t\tcolor: var(--table-color-heading);\n\n\t\t\t& > div {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t}\n\t\ttr {\n\t\t\tbackground-color: var(--table-color-background);\n\t\t\t&:hover, &:active, &:focus {\n\t\t\t\tbackground-color: var(--table-color-background-hover);\n\t\t\t}\n\t\t}\n\n\t\ttr:first-child {\n\t\t\tth:first-child { border-top-left-radius: var(--table-border-radius); }\n\t\t\tth:last-child { border-top-right-radius: var(--table-border-radius); }\n\t\t}\n\n\t\ttr:last-child {\n\t\t\ttd:first-child { border-bottom-left-radius: var(--table-border-radius); }\n\t\t\ttd:last-child { border-bottom-right-radius: var(--table-border-radius); }\n\t\t}\n\n\t}\n\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n\tdisplay: block;\n}\n\n.editor__content p.is-empty:first-child::before {\n\tcontent: attr(data-placeholder);\n\tfloat: left;\n\tcolor: var(--color-text-maxcontrast);\n\tpointer-events: none;\n\theight: 0;\n}\n\n.editor__content {\n\ttab-size: 4;\n}\n\n.tippy-content div {\n\tvisibility: visible !important;\n}\n","@media print {\n\t@page {\n\t\tsize: A4;\n\t\tmargin: 2.5cm 2cm 2cm 2.5cm;\n\t}\n\n\tbody {\n\t\t// position: fixed does not support scrolling and as such only prints one page\n\t\tposition: absolute;\n\t\toverflow: visible!important;\n\t}\n\n\t#header {\n\t\tdisplay: none!important;\n\t}\n\n\t#content {\n\t\tdisplay: block!important;\n\t\tposition: relative!important;\n\t\tborder-radius: 0;\n\t\tmargin: 0;\n\t\twidth: 100%;\n\t\theight: fit-content;\n\t}\n\n\tfooter {\n\t\tdisplay: none!important;\n\t}\n\n\t#viewer[data-handler='text'] {\n\t\t// Hide top border\n\t\tborder: none;\n\t\twidth: 100%!important;\n\t\t// NcModal uses fixed, which will be cropped when printed\n\t\tposition: absolute!important;\n\n\t\t.modal-header {\n\t\t\t// Hide modal header (close button)\n\t\t\tdisplay: none!important;\n\t\t}\n\t\t.modal-container {\n\t\t\t// Make sure top aligned as we hided the menubar */\n\t\t\ttop: 0px;\n\t\t\theight: fit-content;\n\t\t}\n\t}\n\n\t.text-editor {\n\t\theight: fit-content!important;\n\n\t\t.text-menubar {\n\t\t\t// Hide menu bar\n\t\t\tdisplay: none!important;\n\t\t}\n\t\t.action-item {\n\t\t\t// Hide table settings\n\t\t\tdisplay: none!important;\n\t\t}\n\t\t.editor__content {\n\t\t\t// Margins set by page rule\n\t\t\tmax-width: 100%;\n\t\t}\n\t\t.text-editor__wrapper {\n\t\t\theight: fit-content;\n\t\t\tposition: unset;\n\n\t\t\tdiv.ProseMirror {\n\t\t\t\tmargin-top: 0;\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tpadding-top: 0;\n\t\t\t\tpadding-bottom: 0;\n\n\t\t\t\th1, h2, h3, h4, h5 {\n\t\t\t\t\t// orphaned headlines are ugly\n\t\t\t\t\tbreak-after: avoid;\n\t\t\t\t\tpage-break-after: avoid;\n\t\t\t\t}\n\t\t\t\t.image, img, table {\n\t\t\t\t\t// try no page breaks within tables or images\n\t\t\t\t\tbreak-inside: avoid-page;\n\t\t\t\t\tpage-break-inside: avoid;\n\t\t\t\t\t// Some more indention\n\t\t\t\t\tmax-width: 90%!important;\n\t\t\t\t\tmargin: 5vw auto 5vw 5%!important;\n\t\t\t\t}\n\n\t\t\t\t// Add some borders below header and between columns\n\t\t\t\tth {\n\t\t\t\t\tcolor: black!important;\n\t\t\t\t\tfont-weight: bold!important;\n\t\t\t\t\tborder-width: 0 1px 2px 0!important;\n\t\t\t\t\tborder-color: gray!important;\n\t\t\t\t\tborder-style: none solid solid none!important;\n\t\t\t\t}\n\t\t\t\tth:last-of-type {\n\t\t\t\t\tborder-width: 0 0 2px 0!important;\n\t\t\t\t}\n\n\t\t\t\ttd {\n\t\t\t\t\tborder-style: none solid none none!important;\n\t\t\t\t\tborder-width: 1px!important;\n\t\t\t\t\tborder-color: gray!important;\n\t\t\t\t}\n\t\t\t\ttd:last-of-type {\n\t\t\t\t\tborder: none!important;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.menubar-placeholder, .text-editor--readonly-bar {\n\t\tdisplay: none;\n\t}\n\n\t.text-editor__content-wrapper {\n\t\t&.--show-outline {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t.editor--outline {\n\t\t\twidth: auto;\n\t\t\theight: auto;\n\t\t\toverflow: unset;\n\t\t\tposition: relative;\n\t\t}\n\t\t.editor--outline__btn-close {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.collaboration-cursor__caret,\n\t.collaboration-cursor__label {\n\t\tdisplay: none;\n\t}\n}\n"],sourceRoot:""}]);const C=l},51391:(t,e,r)=>{r.d(e,{Z:()=>a});var o=r(87537),n=r.n(o),i=r(23645),A=r.n(i)()(n());A.push([t.id,".text-editor[data-v-2ca56bde]:not(.viewer__file--hidden){overflow:scroll;top:0;width:100%;max-width:100%;height:100%;left:0;margin:0 auto;position:relative;background-color:var(--color-main-background)}.text-editor:not(.viewer__file--hidden).source-viewer[data-v-2ca56bde]{display:block}.text-editor:not(.viewer__file--hidden).source-viewer .text-editor__content-wrapper[data-v-2ca56bde]{margin-top:var(--header-height)}.text-editor:not(.viewer__file--hidden).source-viewer .toggle-interactive[data-v-2ca56bde]{position:sticky;bottom:0;right:0;z-index:1;margin-left:auto;margin-right:0}.text-editor:not(.viewer__file--hidden).text-editor--embedding[data-v-2ca56bde]{min-height:400px}","",{version:3,sources:["webpack://./src/components/ViewerComponent.vue"],names:[],mappings:"AACA,yDACC,eAAA,CACA,KAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CACA,MAAA,CACA,aAAA,CACA,iBAAA,CACA,6CAAA,CAEA,uEACC,aAAA,CAEA,qGACC,+BAAA,CAGD,2FACC,eAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,gBAAA,CACA,cAAA,CAIF,gFACC,gBAAA",sourcesContent:["\n.text-editor:not(.viewer__file--hidden) {\n\toverflow: scroll;\n\ttop: 0;\n\twidth: 100%;\n\tmax-width: 100%;\n\theight: 100%;\n\tleft: 0;\n\tmargin: 0 auto;\n\tposition: relative;\n\tbackground-color: var(--color-main-background);\n\n\t&.source-viewer {\n\t\tdisplay: block;\n\n\t\t.text-editor__content-wrapper {\n\t\t\tmargin-top: var(--header-height);\n\t\t}\n\n\t\t.toggle-interactive {\n\t\t\tposition: sticky;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\tz-index: 1;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n\n\t&.text-editor--embedding {\n\t\tmin-height: 400px;\n\t}\n\n}\n"],sourceRoot:""}]);const a=A},35638:(t,e,r)=>{r.d(e,{Z:()=>a});var o=r(87537),n=r.n(o),i=r(23645),A=r.n(i)()(n());A.push([t.id,":root{--text-editor-max-width: 670px }@media only screen and (max-width: 512px){.text-editor{top:auto}}.viewer[data-handler=text] .modal-wrapper .modal-container{bottom:0}","",{version:3,sources:["webpack://./src/css/variables.scss","webpack://./src/components/ViewerComponent.vue"],names:[],mappings:"AAAA,MACC,+BAAA,CCCD,0CAEC,aACC,QAAA,CAAA,CAIF,2DACC,QAAA",sourcesContent:[":root {\n\t--text-editor-max-width: 670px\n}\n\n","\n@import './../css/variables';\n@media only screen and (max-width: 512px) {\n\t// on mobile, modal-container has top: 50px\n\t.text-editor {\n\t\ttop: auto;\n\t}\n}\n\n.viewer[data-handler='text'] .modal-wrapper .modal-container {\n\tbottom: 0;\n}\n"],sourceRoot:""}]);const a=A},75578:(t,e,r)=>{r.d(e,{Z:()=>_});var o=r(73845),n=r(79835),i=r(31728),A=r(28612),a=r(38105);const d={name:"BaseReader",components:{EditorContent:n.kg,EditorOutline:a.Z},mixins:[A.vV,A.Ad],provide(){const t={};return Object.defineProperties(t,{[i.Uw]:{get:()=>this.$editor}}),t},inject:["renderHtml","extensions"],props:{content:{type:String,required:!0}},computed:{htmlContent(){return this.renderHtml(this.content)},showOutline(){return this.$outlineState.visible}},watch:{content(){this.updateContent()}},created(){this.$editor=this.createEditor(),this.$editor.setEditable(!1)},beforeDestroy(){this.$editor.destroy()},methods:{createEditor(){return new o.ML({content:this.htmlContent,extensions:this.extensions()})},updateContent(){this.$editor.commands.setContent(this.htmlContent,!0)}}};var s=r(93379),l=r.n(s),c=r(7795),C=r.n(c),p=r(90569),m=r.n(p),h=r(3565),b=r.n(h),u=r(19216),v=r.n(u),g=r(44589),x=r.n(g),f=r(38909),w={};w.styleTagTransform=x(),w.setAttributes=b(),w.insert=m().bind(null,"head"),w.domAPI=C(),w.insertStyleElement=v();l()(f.Z,w);f.Z&&f.Z.locals&&f.Z.locals;const _=(0,r(51900).Z)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrapper text-editor__content-wrapper",class:{"--show-outline":t.showOutline},attrs:{"data-text-el":"editor-content-wrapper"}},[t.showOutline?e("div",{staticClass:"text-editor__content-wrapper__left"},[e("EditorOutline")],1):t._e(),t._v(" "),t.$editor?e("EditorContent",{staticClass:"editor__content text-editor__content",attrs:{id:"read-only-editor",editor:t.$editor}}):t._e(),t._v(" "),e("div",{staticClass:"text-editor__content-wrapper__right"})],1)}),[],!1,null,"151c6c0d",null).exports},91124:(t,e,r)=>{r.d(e,{Z:()=>s});var o=r(83416),n=r(95573),i=r.n(n),A=r(75578),a=r(22927);const d={name:"PlainTextReader",components:{BaseReader:A.Z},provide:{renderHtml:t=>"<pre>"+i()(t)+"</pre>",extensions:()=>[a.f3,o.ZP]},props:{content:{type:String,required:!0}}};const s=(0,r(51900).Z)(d,(function(){return(0,this._self._c)("BaseReader",{attrs:{content:this.content}})}),[],!1,null,null,null).exports},97009:(t,e,r)=>{r.d(e,{Z:()=>f});var o=r(75578),n=r(22927),i=r(65122);const A={name:"RichTextReader",components:{BaseReader:o.Z},provide:{renderHtml:t=>i.Z.render(t),extensions:()=>[n.Ho.configure({editing:!1})]},props:{content:{type:String,required:!0}}};var a=r(93379),d=r.n(a),s=r(7795),l=r.n(s),c=r(90569),C=r.n(c),p=r(3565),m=r.n(p),h=r(19216),b=r.n(h),u=r(44589),v=r.n(u),g=r(36993),x={};x.styleTagTransform=v(),x.setAttributes=m(),x.insert=C().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=b();d()(g.Z,x);g.Z&&g.Z.locals&&g.Z.locals;const f=(0,r(51900).Z)(A,(function(){var t=this;return(0,t._self._c)("BaseReader",{attrs:{content:t.content},on:{"click-link":(e,r)=>t.$emit("click-link",e,r)}})}),[],!1,null,null,null).exports},74123:(t,e,r)=>{r.r(e),r.d(e,{default:()=>P});var o=r(20144),n=r(47845),i=r(22528),A=r(82652),a=r(91124),d=r(97009),s=r(31352);o.default.prototype.t=s.Iu,o.default.prototype.n=s.uN;const l={name:"ViewerComponent",components:{NcButton:o.default.extend(A.Z),PencilIcon:o.default.extend(i.Z),RichTextReader:o.default.extend(d.Z),PlainTextReader:o.default.extend(a.Z),Editor:async function(){if(!window._nc_text_editor_instance){if(window._nc_text_editor_importing)return await new Promise((t=>{const e=setInterval((()=>{window._nc_text_editor_instance&&(t(window._nc_text_editor_instance),clearInterval(e))}),200)}));window._nc_text_editor_importing=!0;const t=await Promise.all([r.e("mermaid"),r.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),r.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-87eec1"),r.e("vendors-node_modules_nextcloud_dialogs_dist_chunks__plugin-vue2_normalizer-VrK6B12S_mjs-node_-38ea61"),r.e("vendors-node_modules_nextcloud_logger_dist_index_js-node_modules_path-normalize_lib_index_js--840af5"),r.e("src_extensions_index_js-src_components_Editor_EditorOutline_vue-data_image_svg_xml_3csvg_20xm-1ac8cb"),r.e("editor")]).then(r.bind(r,57654)),{default:e}=await Promise.resolve().then(r.bind(r,20144));e.prototype.t=window.t,e.prototype.OCA=window.OCA;const o=e.extend(t.default);window._nc_text_editor_instance=o}return window._nc_text_editor_instance}},provide(){return{isEmbedded:this.isEmbedded}},props:{filename:{type:String,default:null},fileid:{type:Number,default:null},active:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!0},shareToken:{type:String,default:()=>document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},mime:{type:String,default:null},showOutlineOutside:{type:Boolean,default:!1},permissions:{type:String,default:""},source:{type:String,default:void 0},isEmbedded:{type:Boolean,default:!1}},data:()=>({content:"",hasToggledInteractiveEmbedding:!1}),computed:{useSourceView(){return this.source&&(this.fileVersion||!this.fileid||this.isEmbedded)&&!this.hasToggledInteractiveEmbedding},readerComponent(){return"text/markdown"===this.mime?d.Z:a.Z}},watch:{source(){this.loadFileContent()}},mounted(){this.loadFileContent()},methods:{t:s.Iu,async loadFileContent(){if(this.useSourceView){const t=await n.Z.get(this.source);this.content=t.data,this.contentLoaded=!0}this.$emit("update:loaded",!0)},toggleEdit(){this.hasToggledInteractiveEmbedding=!0}}};var c=r(93379),C=r.n(c),p=r(7795),m=r.n(p),h=r(90569),b=r.n(h),u=r(3565),v=r.n(u),g=r(19216),x=r.n(g),f=r(44589),w=r.n(f),_=r(51391),y={};y.styleTagTransform=w(),y.setAttributes=v(),y.insert=b().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=x();C()(_.Z,y);_.Z&&_.Z.locals&&_.Z.locals;var k=r(35638),B={};B.styleTagTransform=w(),B.setAttributes=v(),B.insert=b().bind(null,"head"),B.domAPI=m(),B.insertStyleElement=x();C()(k.Z,B);k.Z&&k.Z.locals&&k.Z.locals;const P=(0,r(51900).Z)(l,(function(){var t=this,e=t._self._c;return t.useSourceView?e("div",{staticClass:"text-editor source-viewer",attrs:{id:"editor-container","data-text-el":"editor-container"}},[e(t.readerComponent,{tag:"Component",attrs:{content:t.content}}),t._v(" "),t.isEmbedded?e("NcButton",{staticClass:"toggle-interactive",on:{click:t.toggleEdit},scopedSlots:t._u([{key:"icon",fn:function(){return[e("PencilIcon")]},proxy:!0}],null,!1,411976917)},[t._v("\n\t\t"+t._s(t.t("text","Edit"))+"\n\t\t")]):t._e()],1):e("Editor",{class:{"text-editor--embedding":t.isEmbedded},attrs:{"file-id":t.fileid,"relative-path":t.filename,active:t.active||t.isEmbedded,autofocus:t.autofocus,"share-token":t.shareToken,mime:t.mime,"show-outline-outside":t.showOutlineOutside}})}),[],!1,null,"2ca56bde",null).exports}}]);
//# sourceMappingURL=src_store_index_js-src_components_ViewerComponent_vue.js.map?v=45a47c04bc039559e0eb