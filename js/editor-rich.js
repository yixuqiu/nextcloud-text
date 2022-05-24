/*! For license information please see editor-rich.js.LICENSE.txt */
"use strict";(self.webpackChunktext=self.webpackChunktext||[]).push([["editor-rich"],{58554:(n,e,i)=>{i.d(e,{h0:()=>T,Lz:()=>S,YZ:()=>L,tH:()=>M});var r=i(74411),o=i(27594);function a(n,t,e,i,r,o,a){try{var c=n[o](a),l=c.value}catch(n){return void e(n)}c.done?t(l):Promise.resolve(l).then(i,r)}const c={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([i.e("vendors"),i.e("editor")]).then(i.bind(i,20407))}},props:{file:{type:Object,default:null},folder:{type:Object,default:null}},data:function(){return{focus:!1,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){var n;return null===(n=document.getElementById("sharingToken"))||void 0===n?void 0:n.value},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate},filepath:function(){var n=this.file,t=n.path,e=n.name;return t+(t.endsWith("/")?"":"/")+e}},watch:{focus:function(n){n||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var n,t=this;return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,o.subscribe)("Text::showRichWorkspace",(function(){t.enabled=!0})),(0,o.subscribe)("Text::hideRichWorkspace",(function(){t.enabled=!1}));case 2:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(i,r){var o=n.apply(t,e);function c(n){a(o,i,r,c,l,"next",n)}function l(n){a(o,i,r,c,l,"throw",n)}c(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var n=this;this.focus=!1,this.$nextTick((function(){n.creating=!1}))},createNew:function(){this.creating||(this.creating=!0,this.autofocus=!0,this.file||window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}))}}};var l=i(93379),s=i.n(l),A=i(7795),d=i.n(A),u=i(90569),p=i.n(u),f=i(3565),h=i.n(f),m=i(19216),C=i.n(m),b=i(44589),v=i.n(b),g=i(64273),k={};k.styleTagTransform=v(),k.setAttributes=h(),k.insert=p().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=C();s()(g.Z,k);g.Z&&g.Z.locals&&g.Z.locals;const x=(0,i(51900).Z)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.enabled?e("div",{class:{"icon-loading":!n.loaded||!n.ready,focus:n.focus,dark:n.darkTheme,creatable:n.canCreate},attrs:{id:"rich-workspace"}},[n.showEmptyWorkspace?e("div",{staticClass:"empty-workspace",on:{click:n.createNew}},[e("p",{staticClass:"placeholder"},[n._v("\n\t\t\t"+n._s(n.t("text","Add notes, lists or links …"))+"\n\t\t")])]):n._e(),n._v(" "),n.file?e("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:n.ready,expression:"ready"}],key:n.file.path,attrs:{"file-id":n.file.id,"relative-path":n.filepath,"share-token":n.shareToken,mime:n.file.mimetype,autofocus:n.autofocus,active:"",autohide:"","rich-workspace":""},on:{ready:function(t){n.ready=!0,n.loaded=!0},focus:function(t){n.focus=!0},blur:n.unfocus,error:n.reset}}):n._e()],1):n._e()}),[],!1,null,"0a9aef24",null).exports;var w=i(79753),y=i(23895),_=i(25108);function D(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function O(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?D(Object(e),!0).forEach((function(t){E(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function E(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function P(n){return function(n){if(Array.isArray(n))return B(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return B(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return B(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var I="Edit with text app",S=function(n,t){var e=n.split("/"),i=t.split("/");for(e.pop();e[0]===i[0];)e.shift(),i.shift();var r=e.fill("..").concat(i),o=t.split("/");return r.length<o.length?r.join("/"):t},M=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text file"),templateName:t("text","New text file")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(n){e.createFile(n).then((function(n,t){var i=new OCA.Files.FileInfoModel(t);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction(I,i,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},L=function(){var n=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,e=document.getElementById("dir").value;if(!n||""!==e){var o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);for(var a=function(e){return OCA.Files.fileActions.register(e,I,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,w.imagePath)("core","actions/rename"),(function(t){var e=window.FileList.findFile(t);Promise.all([Promise.resolve().then(i.bind(i,20144)),Promise.all([i.e("vendors"),i.e("files-modal")]).then(i.bind(i,38002))]).then((function(i){var r=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(t){var i=this;return t(c,{props:{fileId:e?e.id:null,active:!0,shareToken:n,relativePath:r,mimeType:e.mimetype},on:{close:function(){i.$destroy()}}})}}).$mount(o)}))}),t("text","Edit"))},c=0;c<r.SP.length;c++)a(r.SP[c]),OCA.Files.fileActions.setDefault(r.SP[c],I)}},T={el:null,vm:null,attach:function(n){var t=this;if("files"===n.id||"files.public"===n.id){this.el=document.createElement("div"),n.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10});var e="{".concat(OC.Files.Client.NS_NEXTCLOUD,"}rich-workspace-file"),i=n._getWebdavProperties;n._getWebdavProperties=function(){return[].concat(P(i.apply(this,arguments)),[e])};var r=null;n.filesClient.addFileInfoParser((function(i,o){if("httpd/unix-directory"===o.mimetype){var a=i.propStat[0].properties;o.path+(o.path.endsWith("/")?"":"/")+o.name===n.getCurrentDirectory()&&(r=a[e],t.vm.folder={permissions:o.permissions},t.vm.loaded=!0,t.vm.ready=!0)}if(r&&o.id===r)return"text/markdown"!==o.mimetype&&_.warn("Expected workspace file to be markdown:",o),void t.open(o);"Readme.md"===o.name&&"text/markdown"===o.mimetype&&o.path===n.getCurrentDirectory()&&t.open(o)}))}},render:function(n){var t=this;"files"!==n.id&&"files.public"!==n.id||Promise.resolve().then(i.bind(i,20144)).then((function(e){var i=e.default;t.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var r=i.extend(x);t.vm=new r({propsData:{file:null,folder:null},store:y.Z}).$mount(t.el),n.$el.on("urlChanged",(function(n){t.vm.file=null,t.vm.folder=null})),n.$el.on("changeDirectory",(function(n){t.vm.file=null,t.vm.folder=null}))}))},open:function(n){var t=this.vm.file,e=parseInt(n.id);this.vm.file=O(O({},n),{},{id:e}),(null==t?void 0:t.id)!==e&&(this.vm.ready=!1)}}},74411:(n,t,e)=>{e.d(t,{SP:()=>o,lF:()=>i,w_:()=>r});var i=["text/markdown"],r=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"],o=[].concat(i,r)},6764:(n,t,e)=>{e.d(t,{Z:()=>c});var i=e(87537),r=e.n(i),o=e(23645),a=e.n(o)()(r());a.push([n.id,".menububble[data-v-11c6af7e]{display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius-large);overflow:hidden;padding:0;margin-left:10px;height:44px}.menububble__button[data-v-11c6af7e]{display:block;flex-grow:1;border:0;padding:.9rem .7rem;margin:0;border-radius:0;cursor:pointer;background-color:var(--color-main-background);border-right:1px solid var(--color-border)}.menububble__button[data-v-11c6af7e]:focus,.menububble__button[data-v-11c6af7e]:hover{background-color:var(--color-background-hover);border:0;border-right:1px solid var(--color-border) !important}.menububble__button[data-v-11c6af7e]:last-child{border:0 !important}.menububble__buttontext[data-v-11c6af7e]{padding:.4rem;padding-right:0}.menububble__form[data-v-11c6af7e]{display:flex;align-items:center}.menububble__input[data-v-11c6af7e]{font:inherit;border:none;background:transparent;min-width:250px}","",{version:3,sources:["webpack://./src/components/MenuBubble.vue"],names:[],mappings:"AA6KA,6BACC,YAAA,CACA,aAAA,CACA,mDAAA,CACA,4CAAA,CACA,wCAAA,CACA,eAAA,CACA,SAAA,CACA,gBAAA,CACA,WAAA,CAEA,qCACC,aAAA,CACA,WAAA,CACA,QAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CACA,6CAAA,CACA,0CAAA,CAEA,sFAEC,8CAAA,CACA,QAAA,CACA,qDAAA,CAGD,gDACC,mBAAA,CAIF,yCACC,aAAA,CACA,eAAA,CAGD,mCACC,YAAA,CACA,kBAAA,CAGD,oCACC,YAAA,CACA,WAAA,CACA,sBAAA,CACA,eAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menububble {\n\tdisplay: flex;\n\tz-index: 10020;\n\tbackground: var(--color-main-background-translucent);\n\tbox-shadow: 0 1px 5px var(--color-box-shadow);\n\tborder-radius: var(--border-radius-large);\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin-left: 10px;\n\theight: 44px;\n\n\t&__button {\n\t\tdisplay: block;\n\t\tflex-grow: 1;\n\t\tborder: 0;\n\t\tpadding: 0.9rem 0.7rem;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-right: 1px solid var(--color-border);\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder: 0;\n\t\t\tborder-right: 1px solid var(--color-border) !important;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tborder: 0 !important;\n\t\t}\n\t}\n\n\t&__buttontext {\n\t\tpadding: 0.4rem;\n\t\tpadding-right: 0;\n\t}\n\n\t&__form {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__input {\n\t\tfont: inherit;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tmin-width: 250px;\n\t}\n}\n"],sourceRoot:""}]);const c=a},64273:(n,t,e)=>{e.d(t,{Z:()=>c});var i=e(87537),r=e.n(i),o=e(23645),a=e.n(o)()(r());a.push([n.id,'#rich-workspace[data-v-0a9aef24]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height .5s cubic-bezier(0, 1, 0, 1);z-index:61;position:relative}#rich-workspace.creatable[data-v-0a9aef24]{min-height:90px}#rich-workspace[data-v-0a9aef24]:only-child{margin-bottom:0}.empty-workspace[data-v-0a9aef24]{padding-top:43px;color:var(--color-text-maxcontrast);height:0}#rich-workspace[data-v-0a9aef24] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-0a9aef24] .text-editor{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-0a9aef24] .text-editor__wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-0a9aef24] .text-editor__main{overflow:visible !important}#rich-workspace[data-v-0a9aef24] .content-wrapper{overflow:scroll !important;max-height:calc(40vh - 50px);padding-left:10px;padding-bottom:60px}#rich-workspace[data-v-0a9aef24] .text-editor__wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-0a9aef24] .editor__content{margin:0}#rich-workspace.focus[data-v-0a9aef24]{max-height:50vh}#rich-workspace[data-v-0a9aef24]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-0a9aef24]:not(.focus):not(.icon-loading):after{content:"";position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-0a9aef24]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-0a9aef24]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-0a9aef24] .text-editor{position:initial}html.ie #rich-workspace[data-v-0a9aef24] .text-editor__wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-0a9aef24] .text-editor__main{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-0a9aef24] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-0a9aef24] .text-editor__main>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}',"",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AAoIA,iCACC,cAAA,CAEA,mBAAA,CACA,eAAA,CACA,YAAA,CACA,kDAAA,CACA,UAAA,CACA,iBAAA,CACA,2CACC,eAAA,CAKF,4CACC,eAAA,CAGD,kCACC,gBAAA,CACA,mCAAA,CACA,QAAA,CAGD,4DACC,UAAA,CACA,WAAA,CACA,6CAAA,CACA,SAAA,CACA,WAAA,CAGD,8CACC,WAAA,CACA,yBAAA,CACA,mBAAA,CAGD,uDACC,yBAAA,CACA,gBAAA,CAGD,oDACC,2BAAA,CAGD,kDACC,0BAAA,CACA,4BAAA,CACA,iBAAA,CACA,mBAAA,CAGD,oEACC,WAAA,CACA,QAAA,CAGD,kDACC,QAAA,CAGD,uCACC,eAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,eAAA,CAGD,sEACC,UAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,MAAA,CACA,mBAAA,CACA,iGAAA,CACA,UAAA,CACA,UAAA,CAGD,2EACC,2FAAA,CAGD,2CACC,6CACC,eAAA,CAAA,CAMA,sDACC,gBAAA,CAGD,+DACC,4BAAA,CACA,mBAAA,CAGD,4DACC,YAAA,CACA,qBAAA,CACA,0BAAA,CAGD,kDACC,iBAAA,CACA,eAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CAGD,6EACC,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\tz-index: 61;\n\tposition: relative;\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n\n#rich-workspace::v-deep div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace::v-deep .text-editor {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace::v-deep .text-editor__wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace::v-deep .text-editor__main {\n\toverflow: visible !important;\n}\n\n#rich-workspace::v-deep .content-wrapper {\n\toverflow: scroll !important;\n\tmax-height: calc(40vh - 50px);\n\tpadding-left: 10px;\n\tpadding-bottom: 60px; /* ensure menububble fits below */\n}\n\n#rich-workspace::v-deep .text-editor__wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace::v-deep .editor__content {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace::v-deep {\n\t\t.text-editor {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t.text-editor__wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t.text-editor__main {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t.text-editor__main > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const c=a},34486:(n,e,i)=>{i.r(e),i.d(e,{default:()=>O});var r=i(7049),o=i(26798),a=i(15168),c=i.n(a),l=i(22200),s=i(58554),A=i(16453),d=i(13721);const u={name:"MenuBubble",components:{BubbleMenu:r.NM},directives:{tooltip:c()},mixins:[d.Cy],props:{contentWrapper:{type:HTMLDivElement,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{linkUrl:null,linkMenuIsActive:!1,isUsingDirectEditing:null!==(0,A.loadState)("text","directEditingToken",null)}},methods:{showLinkMenu:function(){var n=this,t=(0,o.Jo)(this.$editor.state,"link");this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){n.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(){var n=this;if((0,l.getCurrentUser)()){var e=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,e){var i=(0,s.Lz)(n.filePath,"".concat(e.path,"/").concat(e.name)).split("/").map(encodeURIComponent).join("/"),r="".concat(i,"?fileId=").concat(e.id);n.$editor.chain().setLink({href:r}).focus().run(),n.hideLinkMenu()}))}),!1,[],!0,void 0,e)}},setLinkUrl:function(){var n=this.linkUrl;n&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(t){return n.match(t)}))&&(n="https://"+n);var t=n.replaceAll(" ","%20");this.$editor.chain().setLink({href:t}).focus().run(),this.hideLinkMenu()},removeLinkUrl:function(){this.$editor.chain().unsetLink().focus().run()},isActive:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.$editor.isActive(n,t)}}};var p=i(93379),f=i.n(p),h=i(7795),m=i.n(h),C=i(90569),b=i.n(C),v=i(3565),g=i.n(v),k=i(19216),x=i.n(k),w=i(44589),y=i.n(w),_=i(6764),D={};D.styleTagTransform=y(),D.setAttributes=g(),D.insert=b().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=x();f()(_.Z,D);_.Z&&_.Z.locals&&_.Z.locals;const O=(0,i(51900).Z)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("BubbleMenu",{staticClass:"menububble",attrs:{editor:n.$editor,"tippy-options":{onHide:n.hideLinkMenu,duration:200,placement:"bottom"},"data-text-el":"menu-bubble"}},[n.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(t){return t.preventDefault(),n.setLinkUrl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:n.linkUrl},on:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:n.hideLinkMenu.apply(null,arguments)},input:function(t){t.target.composing||(n.linkUrl=t.target.value)}}}),n._v(" "),e("button",{staticClass:"menububble__button icon-confirm",attrs:{"data-text-bubble-action":"confirm",type:"button",tabindex:"0"},on:{click:function(t){return n.setLinkUrl()}}})]):[e("button",{staticClass:"menububble__button",class:{"is-active":n.isActive("link")},attrs:{"data-text-bubble-action":"add-link"},on:{click:function(t){return n.showLinkMenu()}}},[e("span",{staticClass:"icon-link"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v("\n\t\t\t\t"+n._s(n.isActive("link")?n.t("text","Update Link"):n.t("text","Add Link"))+"\n\t\t\t")])]),n._v(" "),n.isUsingDirectEditing?n._e():e("button",{staticClass:"menububble__button",class:{"is-active":n.isActive("link")},attrs:{"data-text-bubble-action":"add-file"},on:{click:function(t){return n.selectFile()}}},[e("span",{staticClass:"icon-file"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v(n._s(n.t("text","Link file")))])]),n._v(" "),n.isActive("link")?e("button",{staticClass:"menububble__button",class:{"is-active":n.isActive("link")},attrs:{"data-text-bubble-action":"remove-link"},on:{click:function(t){return n.removeLinkUrl()}}},[e("span",{staticClass:"icon-delete"}),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v("\n\t\t\t\t"+n._s(n.t("text","Remove Link"))+"\n\t\t\t")])]):n._e()]],2)}),[],!1,null,"11c6af7e",null).exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=0a7a117410f37a2b9307