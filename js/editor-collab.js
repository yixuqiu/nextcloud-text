"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-collab"],{44666:(t,n,e)=>{e.d(n,{Z:()=>o});var s=e(87537),a=e.n(s),i=e(23645),r=e.n(i)()(a());r.push([t.id,".avatar[data-v-1bf0295d],.avatar-wrapper[data-v-1bf0295d]{border-radius:50%;width:var(--size);height:var(--size);text-align:center;color:#fff;line-height:var(--size);font-size:var(--font-size);font-weight:normal;display:flex;justify-content:center;align-items:center}","",{version:3,sources:["webpack://./src/components/Editor/AvatarWrapper.vue"],names:[],mappings:"AAEA,0DACC,iBAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,uBAAA,CACA,0BAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA",sourcesContent:["\n\n.avatar, .avatar-wrapper {\n\tborder-radius: 50%;\n\twidth: var(--size);\n\theight: var(--size);\n\ttext-align: center;\n\tcolor: #ffffff;\n\tline-height: var(--size);\n\tfont-size: var(--font-size);\n\tfont-weight: normal;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n"],sourceRoot:""}]);const o=r},98149:(t,n,e)=>{e.d(n,{Z:()=>o});var s=e(87537),a=e.n(s),i=e(23645),r=e.n(i)()(a());r.push([t.id,".session-list[data-v-dcb696a4]{height:44px}.avatar-list[data-v-dcb696a4]{border:none;background-color:var(--color-main-background);padding:0;margin:0;padding-left:3px;display:inline-flex;flex-direction:row-reverse}.avatar-list .avatar-wrapper[data-v-dcb696a4]{margin:0 -18px 0 0;z-index:1;border-radius:50%;overflow:hidden;box-sizing:content-box !important;height:36px;width:36px}.avatar-list .icon-more[data-v-dcb696a4],.avatar-list .icon-group[data-v-dcb696a4],.avatar-list .icon-settings-dark[data-v-dcb696a4]{width:44px;height:44px;margin:0 3px 0 0}.avatar-list .icon-more[data-v-dcb696a4]:hover,.avatar-list .icon-group[data-v-dcb696a4]:hover,.avatar-list .icon-settings-dark[data-v-dcb696a4]:hover{background-color:var(--color-background-hover)}.session-menu[data-v-dcb696a4]{max-width:280px;padding-top:6px;padding-bottom:6px}.session-menu ul li[data-v-dcb696a4]{align-items:center;display:flex;padding:6px}.session-menu ul li .avatar-wrapper[data-v-dcb696a4]{height:36px;width:36px;margin-right:6px}.session-menu ul li .session-label[data-v-dcb696a4]{padding-right:3px}.session-menu ul li .guest-label[data-v-dcb696a4]{padding-left:3px;color:var(--color-text-maxcontrast)}label[data-v-dcb696a4]{display:block;margin:8px}.hint[data-v-dcb696a4]{margin:8px;color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./src/components/Editor/SessionList.vue"],names:[],mappings:"AACA,+BACC,WAAA,CAED,8BACC,WAAA,CACA,6CAAA,CACA,SAAA,CACA,QAAA,CACA,gBAAA,CACA,mBAAA,CACA,0BAAA,CAEA,8CACC,kBAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CACA,iCAAA,CACA,WAAA,CACA,UAAA,CAGD,qIACC,UAAA,CACA,WAAA,CACA,gBAAA,CAEA,uJACC,8CAAA,CAKH,+BACC,eAAA,CACA,eAAA,CACA,kBAAA,CAEA,qCACC,kBAAA,CACA,YAAA,CACA,WAAA,CAEA,qDACC,WAAA,CACA,UAAA,CACA,gBAAA,CAGD,oDACC,iBAAA,CAED,kDACC,gBAAA,CACA,mCAAA,CAKH,uBACC,aAAA,CACA,UAAA,CAGD,uBACC,UAAA,CACA,mCAAA",sourcesContent:["\n.session-list {\n\theight: 44px;\n}\n.avatar-list {\n\tborder: none;\n\tbackground-color: var(--color-main-background);\n\tpadding: 0;\n\tmargin: 0;\n\tpadding-left: 3px;\n\tdisplay: inline-flex;\n\tflex-direction: row-reverse;\n\n\t.avatar-wrapper {\n\t\tmargin: 0 -18px 0 0;\n\t\tz-index: 1;\n\t\tborder-radius: 50%;\n\t\toverflow: hidden;\n\t\tbox-sizing: content-box !important;\n\t\theight: 36px;\n\t\twidth: 36px;\n\t}\n\n\t.icon-more, .icon-group, .icon-settings-dark {\n\t\twidth: 44px;\n\t\theight: 44px;\n\t\tmargin: 0 3px 0 0;\n\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n}\n\n.session-menu {\n\tmax-width: 280px;\n\tpadding-top: 6px;\n\tpadding-bottom: 6px;\n\n\tul li {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tpadding: 6px;\n\n\t\t.avatar-wrapper {\n\t\t\theight: 36px;\n\t\t\twidth: 36px;\n\t\t\tmargin-right: 6px;\n\t\t}\n\n\t\t.session-label {\n\t\t\tpadding-right: 3px;\n\t\t}\n\t\t.guest-label {\n\t\t\tpadding-left: 3px;\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\t}\n}\n\nlabel {\n\tdisplay: block;\n\tmargin: 8px;\n}\n\n.hint {\n\tmargin: 8px;\n\tcolor: var(--color-text-maxcontrast);\n}\n"],sourceRoot:""}]);const o=r},47849:(t,n,e)=>{e.d(n,{Z:()=>b});const s={name:"AvatarWrapper",components:{NcAvatar:e(36720).Xn},props:{session:{type:Object,required:!0},size:{type:Number,default:()=>32}},computed:{sessionAvatarStyle(){return{...this.sessionBackgroundStyle,"border-color":this.session.color,"border-width":"2px","border-style":"solid","--size":this.size+"px","--font-size":this.size/2+"px"}},sessionBackgroundStyle(){return{"background-color":this.session.userId?this.session.color+" !important":"#b9b9b9"}},guestInitial(){return""===this.session.guestName?"?":this.session.guestName.slice(0,1).toUpperCase()}}};var a=e(93379),i=e.n(a),r=e(7795),o=e.n(r),A=e(90569),l=e.n(A),d=e(3565),c=e.n(d),p=e(19216),u=e.n(p),C=e(44589),v=e.n(C),g=e(44666),h={};h.styleTagTransform=v(),h.setAttributes=c(),h.insert=l().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u();i()(g.Z,h);g.Z&&g.Z.locals&&g.Z.locals;const b=(0,e(51900).Z)(s,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"avatar-wrapper",style:t.sessionAvatarStyle},[t.session.userId?n("NcAvatar",{attrs:{user:t.session.userId?t.session.userId:t.session.guestName,"is-guest":null===t.session.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:t.size}}):n("div",{staticClass:"avatar",style:t.sessionBackgroundStyle},[t._v("\n\t\t"+t._s(t.guestInitial)+"\n\t")])],1)}),[],!1,null,"1bf0295d",null).exports},17549:(n,e,s)=>{s.r(e),s.d(e,{default:()=>k});var a=s(36720),i=s(47849),r=s(20629),o=s(13815),A=s(86536);const l={name:"SessionList",components:{AvatarWrapper:i.Z,NcPopover:a.Fh},directives:{tooltip:a.u},mixins:[o.Z],props:{sessions:{type:Object,default:()=>({})}},data:()=>({myName:""}),computed:{...(0,r.rn)({storeShowAuthorAnnotations:t=>t.text.showAuthorAnnotations}),label:()=>t("text","Active people"),showAuthorAnnotations:{get(){return this.storeShowAuthorAnnotations},set(t){this.setShowAuthorAnnotations(t)}},participantsPopover(){return this.currentSession.guestName?this.participantsWithoutCurrent:this.participants},participantsWithoutCurrent(){return this.participants.filter((t=>!t.isCurrent))},participants(){return Object.values(this.sessions).filter((t=>t.lastContact>Date.now()/1e3-A.r2&&(null!==t.userId||null!==t.guestName))).sort(((t,n)=>t.lastContact<n.lastContact))},currentSession(){return Object.values(this.sessions).find((t=>t.isCurrent))},avatarStyle:()=>t=>({opacity:t.lastContact>Date.now()/1e3-A.jA?1:.5}),sessionsVisible(){return this.participantsWithoutCurrent.slice(0,3)}},methods:{...(0,r.nv)("text",["setShowAuthorAnnotations"])}};var d=s(93379),c=s.n(d),p=s(7795),u=s.n(p),C=s(90569),v=s.n(C),g=s(3565),h=s.n(g),b=s(19216),m=s.n(b),x=s(44589),f=s.n(x),w=s(98149),y={};y.styleTagTransform=f(),y.setAttributes=h(),y.insert=v().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=m();c()(w.Z,y);w.Z&&w.Z.locals&&w.Z.locals;const k=(0,s(51900).Z)(l,(function(){var t=this,n=t._self._c;return n("NcPopover",{staticClass:"session-list",attrs:{placement:"bottom"},scopedSlots:t._u([{key:"default",fn:function(){return[n("div",{staticClass:"session-menu"},[t._t("lastSaved"),t._v(" "),n("ul",[t._t("default"),t._v(" "),t._l(t.participantsPopover,(function(e){return n("li",{key:e.id,style:t.avatarStyle(e)},[n("AvatarWrapper",{attrs:{session:e,size:36}}),t._v(" "),n("span",{staticClass:"session-label"},[t._v("\n\t\t\t\t\t\t"+t._s(e.userId?e.displayName:e.guestName?e.guestName:t.t("text","Guest"))+"\n\t\t\t\t\t")]),t._v(" "),null===e.userId?n("span",{staticClass:"guest-label"},[t._v("("+t._s(t.t("text","guest"))+")")]):t._e()],1)}))],2)],2)]},proxy:!0}],null,!0)},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.label,expression:"label",modifiers:{bottom:!0}}],staticClass:"avatar-list",attrs:{slot:"trigger",title:t.label,"aria-label":t.label},slot:"trigger"},[n("div",{staticClass:"avatardiv icon-group"}),t._v(" "),t._l(t.sessionsVisible,(function(t){return n("AvatarWrapper",{key:t.id,attrs:{session:t,size:40}})}))],2)])}),[],!1,null,"dcb696a4",null).exports}}]);
//# sourceMappingURL=editor-collab.js.map?v=8bdb5c5b99bbd07c5932