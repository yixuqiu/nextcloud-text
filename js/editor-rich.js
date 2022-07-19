"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-rich"],{10016:(n,e,i)=>{i.d(e,{h0:()=>O,Lz:()=>T,YZ:()=>L,tH:()=>F});var o=i(16453),r=i(74411),a=i(4820),s=i(79753),c=i(27594),A=i(25108),l=!!document.getElementById("isPublic"),d=(0,s.generateOcsUrl)("apps/text"+(l?"/public":"")+"/workspace",2);const u={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([i.e("vendors"),i.e("editor")]).then(i.bind(i,96489))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,autohide:!0,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){var n;return null===(n=document.getElementById("sharingToken"))||void 0===n?void 0:n.value},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(n){n||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){this.enabled&&this.getFileInfo(),(0,c.subscribe)("Text::showRichWorkspace",this.showRichWorkspace),(0,c.subscribe)("Text::hideRichWorkspace",this.hideRichWorkspace),this.listenKeydownEvents()},beforeDestroy:function(){(0,c.unsubscribe)("Text::showRichWorkspace",this.showRichWorkspace),(0,c.unsubscribe)("Text::hideRichWorkspace",this.hideRichWorkspace),this.unlistenKeydownEvents()},methods:{onBlur:function(){this.listenKeydownEvents()},onFocus:function(){this.focus=!0,this.unlistenKeydownEvents()},reset:function(){var n=this;this.file=null,this.focus=!1,this.$nextTick((function(){n.creating=!1,n.getFileInfo()}))},getFileInfo:function(){var n=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var t={path:this.path};return l&&(t.shareToken=this.shareToken),a.default.get(d,{params:t}).then((function(t){var e=t.data.ocs.data;return n.folder=e.folder||null,n.file=e.file,n.editing=!0,n.loaded=!0,!0})).catch((function(t){return t.response.data.ocs&&t.response.data.ocs.data.folder?n.folder=t.response.data.ocs.data.folder:n.folder=null,n.file=null,n.loaded=!0,n.ready=!0,n.creating=!1,!1}))},createNew:function(){var n=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(t){if(!t)return window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(t,e){return n.getFileInfo()}))})).then((function(){n.autofocus=!0})).catch((function(n){A.warn(n)})))},showRichWorkspace:function(){this.enabled=!0,this.getFileInfo()},hideRichWorkspace:function(){this.enabled=!1},listenKeydownEvents:function(){window.addEventListener("keydown",this.onKeydown)},unlistenKeydownEvents:function(){clearInterval(this.$_timeoutAutohide),window.removeEventListener("keydown",this.onKeydown)},onTimeoutAutohide:function(){this.autohide=!0},onKeydown:function(n){"Tab"===n.key&&(clearInterval(this.$_timeoutAutohide),this.autohide=!1,this.$_timeoutAutohide=setTimeout(this.onTimeoutAutohide,7e3))}}};var p=i(93379),h=i.n(p),C=i(7795),m=i.n(C),f=i(90569),b=i.n(f),v=i(3565),k=i.n(v),g=i(19216),w=i.n(g),x=i(44589),_=i.n(x),y=i(29662),D={};D.styleTagTransform=_(),D.setAttributes=k(),D.insert=b().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=w();h()(y.Z,D);y.Z&&y.Z.locals&&y.Z.locals;const E=(0,i(51900).Z)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.enabled?e("div",{class:{"icon-loading":!n.loaded||!n.ready,focus:n.focus,dark:n.darkTheme,creatable:n.canCreate},attrs:{id:"rich-workspace"}},[n.showEmptyWorkspace?e("a",{staticClass:"empty-workspace",attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.createNew.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:n.createNew.apply(null,arguments)}],click:n.createNew}},[e("p",{staticClass:"placeholder"},[n._v("\n\t\t\t"+n._s(n.t("text","Add notes, lists or links …"))+"\n\t\t")])]):n._e(),n._v(" "),n.file?e("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:n.ready,expression:"ready"}],key:n.file.path,attrs:{"file-id":n.file.id,"relative-path":n.file.path,"share-token":n.shareToken,mime:n.file.mimetype,autofocus:n.autofocus,autohide:n.autohide,active:"","rich-workspace":""},on:{ready:function(t){n.ready=!0},focus:n.onFocus,blur:n.onBlur,error:n.reset}}):n._e()],1):n._e()}),[],!1,null,"6709a3c0",null).exports;var B=i(23895),I="Edit with text app",T=function(n,t){var e=n.split("/"),i=t.split("/");for(e.pop();e[0]===i[0];)e.shift(),i.shift();var o=e.fill("..").concat(i),r=t.split("/");return o.length<r.length?o.join("/"):t},F=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text file"),templateName:t("text","New text file")+"."+(0,o.loadState)("text","default_file_extension"),iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(n){e.createFile(n).then((function(n,t){var i=new OCA.Files.FileInfoModel(t);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction(I,i,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},L=function(){var n=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,e=document.getElementById("dir").value;if(!n||""!==e){var o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);for(var a=function(e){return OCA.Files.fileActions.register(e,I,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,s.imagePath)("core","actions/rename"),(function(t){var e=window.FileList.findFile(t);Promise.all([Promise.resolve().then(i.bind(i,20144)),Promise.all([i.e("vendors"),i.e("files-modal")]).then(i.bind(i,38002))]).then((function(i){var r=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var s=i[1].default;new a({render:function(t){var i=this;return t(s,{props:{fileId:e?e.id:null,active:!0,shareToken:n,relativePath:r,mimeType:e.mimetype},on:{close:function(){i.$destroy()}}})}}).$mount(o)}))}),t("text","Edit"))},c=0;c<r.SP.length;c++)a(r.SP[c]),OCA.Files.fileActions.setDefault(r.SP[c],I)}},O={el:null,attach:function(n){"files"!==n.id&&"files.public"!==n.id||(this.el=document.createElement("div"),n.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(n){var t=this;"files"!==n.id&&"files.public"!==n.id||Promise.resolve().then(i.bind(i,20144)).then((function(e){var i=e.default;t.el.id="files-workspace-wrapper",i.prototype.t=window.t,i.prototype.n=window.n,i.prototype.OCA=window.OCA;var o=new(i.extend(E))({propsData:{path:n.getCurrentDirectory()},store:B.Z}).$mount(t.el);n.$el.on("urlChanged",(function(n){o.path=n.dir.toString()})),n.$el.on("changeDirectory",(function(n){o.path=n.dir.toString()}))}))}}},48926:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,".menububble[data-v-2716a5d6]{display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius-large);overflow:hidden;padding:0;margin-left:10px;height:44px}.menububble__button[data-v-2716a5d6]{flex-grow:1;border:0;padding:.9rem .7rem;margin:0;border-radius:0;cursor:pointer;background-color:var(--color-main-background);border-right:1px solid var(--color-border);display:flex;align-items:center}.menububble__button[data-v-2716a5d6]:focus,.menububble__button[data-v-2716a5d6]:hover{background-color:var(--color-background-hover);border:0;border-right:1px solid var(--color-border) !important}.menububble__button[data-v-2716a5d6]:last-child{border:0 !important}.menububble__buttontext[data-v-2716a5d6]{padding:.4rem;padding-right:0}.menububble__form[data-v-2716a5d6]{display:flex;align-items:center}.menububble__input[data-v-2716a5d6]{font:inherit;border:none;background:rgba(0,0,0,0);min-width:250px;margin:0 .5em 0 1em}","",{version:3,sources:["webpack://./src/components/MenuBubble.vue"],names:[],mappings:"AAqLA,6BACC,YAAA,CACA,aAAA,CACA,mDAAA,CACA,4CAAA,CACA,wCAAA,CACA,eAAA,CACA,SAAA,CACA,gBAAA,CACA,WAAA,CAEA,qCACC,WAAA,CACA,QAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CACA,6CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CAEA,sFAEC,8CAAA,CACA,QAAA,CACA,qDAAA,CAGD,gDACC,mBAAA,CAIF,yCACC,aAAA,CACA,eAAA,CAGD,mCACC,YAAA,CACA,kBAAA,CAGD,oCACC,YAAA,CACA,WAAA,CACA,wBAAA,CACA,eAAA,CACA,mBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menububble {\n\tdisplay: flex;\n\tz-index: 10020;\n\tbackground: var(--color-main-background-translucent);\n\tbox-shadow: 0 1px 5px var(--color-box-shadow);\n\tborder-radius: var(--border-radius-large);\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin-left: 10px;\n\theight: 44px;\n\n\t&__button {\n\t\tflex-grow: 1;\n\t\tborder: 0;\n\t\tpadding: 0.9rem 0.7rem;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-right: 1px solid var(--color-border);\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder: 0;\n\t\t\tborder-right: 1px solid var(--color-border) !important;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tborder: 0 !important;\n\t\t}\n\t}\n\n\t&__buttontext {\n\t\tpadding: 0.4rem;\n\t\tpadding-right: 0;\n\t}\n\n\t&__form {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__input {\n\t\tfont: inherit;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tmin-width: 250px;\n\t\tmargin: 0 0.5em 0 1em;\n\t}\n}\n"],sourceRoot:""}]);const s=a},29662:(n,t,e)=>{e.d(t,{Z:()=>s});var i=e(87537),o=e.n(i),r=e(23645),a=e.n(r)()(o());a.push([n.id,'#rich-workspace[data-v-6709a3c0]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height .5s cubic-bezier(0, 1, 0, 1);z-index:61;position:relative}#rich-workspace.creatable[data-v-6709a3c0]{min-height:90px}#rich-workspace[data-v-6709a3c0]:only-child{margin-bottom:0}.empty-workspace[data-v-6709a3c0]{cursor:pointer;display:block;padding-top:43px;color:var(--color-text-maxcontrast)}#rich-workspace[data-v-6709a3c0] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-6709a3c0] .text-editor{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-6709a3c0] .text-editor__wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-6709a3c0] .text-editor__main{overflow:visible !important}#rich-workspace[data-v-6709a3c0] .content-wrapper{overflow:scroll !important;max-height:calc(40vh - 50px);padding-left:10px;padding-bottom:60px}#rich-workspace[data-v-6709a3c0] .text-editor__wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-6709a3c0] .editor__content{margin:0}#rich-workspace.focus[data-v-6709a3c0]{max-height:50vh}#rich-workspace[data-v-6709a3c0]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-6709a3c0]:not(.focus):not(.icon-loading):after{content:"";position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-6709a3c0]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-6709a3c0]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-6709a3c0] .text-editor{position:initial}html.ie #rich-workspace[data-v-6709a3c0] .text-editor__wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-6709a3c0] .text-editor__main{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-6709a3c0] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-6709a3c0] .text-editor__main>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}',"",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AAkOA,iCACC,cAAA,CAEA,mBAAA,CACA,eAAA,CACA,YAAA,CACA,kDAAA,CACA,UAAA,CACA,iBAAA,CACA,2CACC,eAAA,CAKF,4CACC,eAAA,CAGD,kCACC,cAAA,CACA,aAAA,CACA,gBAAA,CACA,mCAAA,CAGD,4DACC,UAAA,CACA,WAAA,CACA,6CAAA,CACA,SAAA,CACA,WAAA,CAGD,8CACC,WAAA,CACA,yBAAA,CACA,mBAAA,CAGD,uDACC,yBAAA,CACA,gBAAA,CAGD,oDACC,2BAAA,CAGD,kDACC,0BAAA,CACA,4BAAA,CACA,iBAAA,CACA,mBAAA,CAGD,oEACC,WAAA,CACA,QAAA,CAGD,kDACC,QAAA,CAGD,uCACC,eAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,eAAA,CAGD,sEACC,UAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,MAAA,CACA,mBAAA,CACA,iGAAA,CACA,UAAA,CACA,UAAA,CAGD,2EACC,2FAAA,CAGD,2CACC,6CACC,eAAA,CAAA,CAMA,sDACC,gBAAA,CAGD,+DACC,4BAAA,CACA,mBAAA,CAGD,4DACC,YAAA,CACA,qBAAA,CACA,0BAAA,CAGD,kDACC,iBAAA,CACA,eAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CAGD,6EACC,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\tz-index: 61;\n\tposition: relative;\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tcursor: pointer;\n\tdisplay: block;\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n}\n\n#rich-workspace::v-deep div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace::v-deep .text-editor {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace::v-deep .text-editor__wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace::v-deep .text-editor__main {\n\toverflow: visible !important;\n}\n\n#rich-workspace::v-deep .content-wrapper {\n\toverflow: scroll !important;\n\tmax-height: calc(40vh - 50px);\n\tpadding-left: 10px;\n\tpadding-bottom: 60px; /* ensure menububble fits below */\n}\n\n#rich-workspace::v-deep .text-editor__wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace::v-deep .editor__content {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace::v-deep {\n\t\t.text-editor {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t.text-editor__wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t.text-editor__main {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t.text-editor__main > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=a},89182:(n,e,i)=>{i.r(e),i.d(e,{default:()=>B});var o=i(7049),r=i(19958),a=i(22200),s=i(16453),c=i(15168),A=i.n(c),l=i(10016),d=i(13721),u=i(32318);const p={name:"MenuBubble",components:{BubbleMenu:o.NM,Link:u.BY,Document:u.BB,Delete:u.HG,Check:u.Jr},directives:{tooltip:A()},mixins:[d.Cy],props:{contentWrapper:{type:HTMLDivElement,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{linkUrl:null,linkMenuIsActive:!1,isUsingDirectEditing:null!==(0,s.loadState)("text","directEditingToken",null)}},methods:{showLinkMenu:function(){var n=this,t=(0,r.getMarkAttributes)(this.$editor.state,"link");this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){n.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(){var n=this;if((0,a.getCurrentUser)()){var e=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,e){var i=(0,l.Lz)(n.filePath,"".concat(e.path,"/").concat(e.name)).split("/").map(encodeURIComponent).join("/"),o="".concat(i,"?fileId=").concat(e.id);n.$editor.chain().setLink({href:o}).focus().run(),n.hideLinkMenu()}))}),!1,[],!0,void 0,e)}},setLinkUrl:function(){var n=this.linkUrl;n&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(t){return n.match(t)}))&&(n="https://"+n);var t=n.replaceAll(" ","%20");this.$editor.chain().setLink({href:t}).focus().run(),this.hideLinkMenu()},removeLinkUrl:function(){this.$editor.chain().unsetLink().focus().run()},isActive:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.$editor.isActive(n,t)}}};var h=i(93379),C=i.n(h),m=i(7795),f=i.n(m),b=i(90569),v=i.n(b),k=i(3565),g=i.n(k),w=i(19216),x=i.n(w),_=i(44589),y=i.n(_),D=i(48926),E={};E.styleTagTransform=y(),E.setAttributes=g(),E.insert=v().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=x();C()(D.Z,E);D.Z&&D.Z.locals&&D.Z.locals;const B=(0,i(51900).Z)(p,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("BubbleMenu",{staticClass:"menububble",attrs:{editor:n.$editor,"tippy-options":{onHide:n.hideLinkMenu,duration:200,placement:"bottom"},"data-text-el":"menu-bubble"}},[n.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(t){return t.preventDefault(),n.setLinkUrl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:n.linkUrl},on:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:n.hideLinkMenu.apply(null,arguments)},input:function(t){t.target.composing||(n.linkUrl=t.target.value)}}}),n._v(" "),e("button",{staticClass:"menububble__button",attrs:{"data-text-bubble-action":"confirm",type:"button",tabindex:"0"},on:{click:function(t){return n.setLinkUrl()}}},[e("Check")],1)]):[e("button",{staticClass:"menububble__button",class:{"is-active":n.isActive("link")},attrs:{"data-text-bubble-action":"add-link"},on:{click:function(t){return n.showLinkMenu()}}},[e("Link"),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v("\n\t\t\t\t"+n._s(n.isActive("link")?n.t("text","Update Link"):n.t("text","Add Link"))+"\n\t\t\t")])],1),n._v(" "),n.isUsingDirectEditing?n._e():e("button",{staticClass:"menububble__button",class:{"is-active":n.isActive("link")},attrs:{"data-text-bubble-action":"add-file"},on:{click:function(t){return n.selectFile()}}},[e("Document"),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v(n._s(n.t("text","Link file")))])],1),n._v(" "),n.isActive("link")?e("button",{staticClass:"menububble__button",class:{"is-active":n.isActive("link")},attrs:{"data-text-bubble-action":"remove-link"},on:{click:function(t){return n.removeLinkUrl()}}},[e("Delete"),n._v(" "),e("span",{staticClass:"menububble__buttontext"},[n._v("\n\t\t\t\t"+n._s(n.t("text","Remove Link"))+"\n\t\t\t")])],1):n._e()]],2)}),[],!1,null,"2716a5d6",null).exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=4d3d3262dd5d24e036b8