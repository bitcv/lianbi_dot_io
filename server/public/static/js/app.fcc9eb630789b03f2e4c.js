webpackJsonp([45],{"4jj0":function(t,e){},KhE7:function(t,e){},MvGc:function(t,e){e.install=function(t,e){t.prototype.convertFundStage=function(t){switch(t){case 0:return"保密";case 1:return"未融资";case 2:return"融资中";case 3:return"已融资"}},t.prototype.convertBuzType=function(t){switch(t){case 1:return"金融";case 2:return"数字货币";case 3:return"娱乐";case 4:return"供应链管理";case 5:return"法律服务";case 6:return"医疗";case 7:return"能源服务";case 8:return"公益";case 9:return"物联网";case 10:return"农业";case 11:return"社交";default:return"其它"}},t.prototype.getShortStr=function(t,e){return t.substr(0,e)+"..."+t.substr(-1*e)},t.prototype.convertOrderStatus=function(t){switch(t){case 0:return"待支付";case 1:return"已完成";case 2:return"已取消";case 3:return"已过期";default:return"未知状态"}},t.prototype.convertDate=function(t){var e=(new Date).getTime()-new Date(t).getTime(),n=e/36e5,r=e/6e4;if(n>24)var o=parseInt(e/864e5)+"天前";else if(n>=1)o=parseInt(n)+"个小时前";else if(r>=1)o=parseInt(r)+"分钟前";else o="刚刚";return o},t.prototype.getInterest=function(t,e,n){return t*e*n/12},t.prototype.mediaClass=function(){return document.body.clientWidth<=600?"media-mobile":""},Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1},Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};n.d(r,"reLogin",function(){return y}),n.d(r,"getProList",function(){return _}),n.d(r,"getProDetail",function(){return C}),n.d(r,"getNewsList",function(){return j}),n.d(r,"getFilterParams",function(){return O}),n.d(r,"getTop10",function(){return P}),n.d(r,"updateFocus",function(){return k}),n.d(r,"getCandyList",function(){return I}),n.d(r,"postCandyOrder",function(){return D}),n.d(r,"getOrderDetail",function(){return L}),n.d(r,"getOrderTxRecordList",function(){return S}),n.d(r,"confirmDepositTx",function(){return T});var o={};n.d(o,"updateUserInfo",function(){return M}),n.d(o,"cleanUserInfo",function(){return A});var i=n("fZjL"),a=n.n(i),s=n("//Fk"),u=n.n(s),c=n("7+uW"),l=n("Dd8w"),d=n.n(l),v=n("NYxO"),h={name:"App",components:{vHeader:n("hxP8").default,vFooter:n("bYoP").default},computed:d()({},Object(v.d)({path:function(t){return t.route.path},userInfo:function(t){return t.userInfo}}),{visible:function(){return"/share"!==this.path},hasToken:function(){return!!this.userInfo&&a()(this.userInfo).length>0}}),watch:{hasToken:function(t){t||this.$router.push("/signin")}},methods:d()({},Object(v.c)(["cleanUserInfo"]),{signout:function(){this.cleanUserInfo()}})},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.visible?n("v-header",{attrs:{"has-token":t.hasToken},on:{signout:t.signout}}):t._e(),t._v(" "),n("div",{staticClass:"main-container"},[n("router-view")],1),t._v(" "),t.visible?n("v-footer"):t._e()],1)},staticRenderFns:[]};var f=n("VU/8")(h,p,!1,function(t){n("4jj0"),n("qqIn")},"data-v-44889f04",null).exports,m=n("mtWM"),g=n.n(m),y=function(t){(0,t.commit)("cleanUserInfo")},w=function(t){var e=t.errcode,n=t.data,r=t.errmsg,o=void 0===r?"":r;switch(e){case 0:return n;case 302:return y(),u.a.reject(o);default:return alert(o),u.a.reject(o)}},b=function(t,e){return g.a.post(t,e).then(function(t){return w(t.data)})},_=function(t,e){return b("/api/getProjList",e)},C=function(t,e){return b("/api/getProjDetail",e)},j=function(t,e){return b("/api/getNewsList",e)},O=function(t,e){return b("/api/getProjTagList",e)},P=function(t,e){return b("/api/getProjTopList",e)},k=function(t,e){return b("/api/toggleFocus",e)},I=function(t,e){return b("/api/getDepositBoxList",e)},D=function(t,e){return b("/api/addDepositOrder",e)},L=function(t,e){return b("/api/getOrderDetail",e)},S=function(t,e){return b("/api/getOrderTxRecordList",e)},T=function(t,e){return b("/api/confirmDepositTx",e)},R=n("mvHQ"),x=n.n(R),M=function(t,e){var n=localStorage.getItem("userInfo");n&&(n=JSON.parse(n)),e&&(n=e,localStorage.setItem("userInfo",x()(n))),t.userInfo=n},A=function(t){localStorage.removeItem("userInfo"),t.userInfo=null};c.default.use(v.a);var q=new v.a.Store({actions:r,mutations:o,state:{userInfo:null}}),F=n("/ocq");function U(t){return function(){return n("mUJ2")("./"+t+".vue")}}function E(t){return function(){return n("Opzk")("./"+t+".vue")}}var B=[{path:"/",component:E("home/home")},{path:"/discover",component:E("discover/discover")},{path:"/discover/detail/:id",component:E("discover/detail")},{path:"/wallet",component:E("user/wallet"),meta:{requiresAuth:!0}},{path:"/wallet/withdraw/:id",component:E("user/withdraw"),meta:{requiresAuth:!0}},{path:"/wallet/records",component:E("user/records"),meta:{requiresAuth:!0}},{path:"/candyRoom",redirect:"/candyRoom/candyList",component:U("candyRoom/CandyRoom"),children:[{path:"candyList",component:E("candy/list")},{path:"candyBuy",component:E("candy/buying"),meta:{requiresAuth:!0}},{path:"candyOrder",component:E("candy/order"),meta:{requiresAuth:!0}},{path:"candyDetails",component:E("candy/details"),meta:{requiresAuth:!0}},{path:"candyOrder",component:U("candyRoom/CandyOrder"),meta:{requiresAuth:!0}},{path:"candyOrderDetail/:id",component:U("candyRoom/CandyOrderDetail"),meta:{requiresAuth:!0}},{path:"candyOrderConfirm/:id",component:U("candyRoom/CandyOrderConfirm"),meta:{requiresAuth:!0}},{path:"myCandyOrder",component:U("candyRoom/MyCandyOrder"),meta:{requiresAuth:!0}}]},{path:"/apply",component:U("apply/Apply"),meta:{requiresAuth:!0}},{path:"/signup",component:U("sign/Signup")},{path:"/signin",component:U("sign/Signin")},{path:"/share",component:U("share/Share")},{path:"/protocol",component:U("sign/Protocol")},{path:"/findpwd",component:U("sign/FindPwd")},{path:"/resetpwd/:mobile",component:U("sign/ResetPwd")},{path:"*",redirect:"/"}];c.default.use(F.a);var N=new F.a({routes:B,mode:"history",linkActiveClass:"active",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}}}),z=n("9JMe"),V=(n("UVIz"),n("Y81h")),$=n.n(V),Y=n("zL8q"),K=n.n(Y),H=(n("v2ns"),n("tvR6"),n("MvGc")),J=n.n(H),Z=n("TXmL");c.default.use(Z.a);var G=new Z.a({locale:"cn",messages:{cn:{label:{lang:"中文",home:"主页"}},en:{label:{lang:"English",home:"home"}}}});c.default.use(J.a),n("hKoQ").polyfill(),c.default.use(K.a),c.default.prototype.$http=g.a,c.default.prototype.nprogress=$.a,window.NProgress=$.a,c.default.config.productionTip=!1,Object(z.sync)(q,N),g.a.interceptors.response.use(function(t){return 302===t.data.errcode?(q.commit("cleanUserInfo"),N.push("/"),u.a.reject(t)):t},function(t){return 302===t.response.status&&(q.commit("cleanUserInfo"),N.push("/")),u.a.reject(t)});q.commit("updateUserInfo"),N.beforeEach(function(t,e,n){var r;($.a.start(),t.matched.some(function(t){return t.meta&&t.meta.requiresAuth}))&&((r=q.state.userInfo)&&a()(r).length>0?n():n("/signin"));n()}),N.afterEach(function(t,e){$.a.done()}),new c.default({el:"#app",store:q,router:N,i18n:G,components:{App:f},template:"<App/>",data:{eventHub:new c.default}})},Opzk:function(t,e,n){var r={"./candy/buying.vue":["IiwL",40],"./candy/details.vue":["+OK3",2],"./candy/list.vue":["c+ZJ",0,30],"./candy/order.vue":["Jdg4",35],"./discover/detail.vue":["PwbF",0,6],"./discover/discover.vue":["POBk",0,8],"./home/home.vue":["zKIK",0,3],"./sign/signin.vue":["ZoOl",43],"./sign/signup.vue":["2ufm",42],"./user/records.vue":["sFhK",0,37],"./user/wallet.vue":["I37D",0,16],"./user/withdraw.vue":["z4wH",20]};function o(t){var e=r[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(r)},o.id="Opzk",t.exports=o},UVIz:function(t,e){},bYoP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"content"},[this._m(0),this._v(" "),e("div",{staticClass:"icon-box"},this._l(this.socialList,function(t,n){return e("a",{key:n,attrs:{href:t.url,target:"_blank"}},[e("i",{staticClass:"icon-bcv",class:t.fontClass})])})),this._v(" "),this._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[e("img",{attrs:{src:"/static/img/logo.png",alt:"BitCV"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom"},[e("span",[this._v("Copyright © 2018 BitCV. All Rights Reserved")])])}]};var o=n("VU/8")({data:function(){return{socialList:[{url:"https://weibo.com/bitcv",fontClass:"icon-weibo"},{url:"https://www.facebook.com/groups/1301707606641533/",fontClass:"icon-facebook"},{url:"https://github.com/bitcv",fontClass:"icon-github"},{url:"https://t.me/bcvtoken",fontClass:"icon-telegram"},{url:"https://twitter.com/BCVofficial",fontClass:"icon-twitter"}]}}},r,!1,function(t){n("KhE7")},"data-v-6fdd9d22",null);e.default=o.exports},"h+At":function(t,e){},hxP8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),i=n("NYxO"),a={bind:function(t,e){var n=e.value;t.handler=function(e){t&&!t.contains(e.target)&&n(e)},document.addEventListener("click",t.handler,!0)},unbind:function(t){document.removeEventListener("click",t.handler,!0),t.handler=null}},s={props:{hasToken:Boolean},data:function(){return{showSide:!1,showDropdown:!1}},computed:o()({},Object(i.d)({userInfo:function(t){return t.userInfo}}),{avatar:function(){return this.userInfo&&this.userInfo.avatarUrl?this.userInfo.avatarUrl:"/static/img/avatar.png"},mobile:function(){if(this.userInfo){var t=this.userInfo.mobile,e=(""+t).split("");return e.splice(2,7,"**"),e.join("")}return""}}),directives:{"click-outside":a},watch:{showSide:"onToggleMenu",showDropdown:"onToggleMenu"},methods:{toggleLang:function(){this.$i18n.locale="en"===this.$i18n.locale?"cn":"en"},navbarToggle:function(){this.showDropdown=!1,this.showSide=!this.showSide},onMouseenter:function(){this.showSide=!1,this.__timer&&(clearTimeout(this.__timer),this.__timer=null),this.showDropdown=!0},onMouseleave:function(){var t=this;this.__timer&&(clearTimeout(this.__timer),this.__timer=null),this.__timer=setTimeout(function(){t.showDropdown=!1},150)},onClickOutside:function(){this.showSide&&(this.showSide=!1)},onToggleMenu:function(){this.showSide||this.showDropdown?document.body.style.overflow="hidden":document.body.style.overflow=""},dimissMenu:function(){this.showSide&&(this.showSide=!1),this.showDropdown&&(this.showDropdown=!1)}},mounted:function(){this.showSide=!1,this.showDropdown=!1}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-inverse navbar-static-top"},[n("div",{staticClass:"container"},[n("a",{staticStyle:{position:"absolute",right:"300px",top:"15px",color:"#FFF"},attrs:{href:"javascrpt:''"},on:{click:t.toggleLang}},[t._v(t._s(t.$t("label.lang")))]),t._v(" "),n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",class:{collapsed:!t.showSide},attrs:{type:"button"},on:{click:function(e){e.stopPropagation(),t.navbarToggle(e)}}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"hidden-xs hidden-sm",attrs:{src:"/static/img/brand.png",alt:"BitCV",height:"30"}}),t._v(" "),n("img",{staticClass:"hidden-md hidden-lg",attrs:{src:"/static/img/brand-mobile.png",alt:"BitCV",height:"30"}})])],1),t._v(" "),t.hasToken?t._e():n("div",{staticClass:"navbar-right hidden-sm hidden-xs"},[n("router-link",{staticClass:"btn navbar-btn btn-default btn-outline",attrs:{to:"/signup"}},[t._v("注册")]),t._v(" "),n("span",[t._v("  ")]),t._v(" "),n("router-link",{staticClass:"btn navbar-btn btn-default btn-outline",attrs:{to:"/signin"}},[t._v("登录")])],1),t._v(" "),n("div",{staticClass:"dropdown navbar-right",class:{open:t.showDropdown},staticStyle:{"margin-right":"0"},on:{mouseenter:t.onMouseenter,mouseleave:t.onMouseleave}},[n("a",{staticClass:"dropdown-toggle",class:{"hidden-md":!t.hasToken,"hidden-lg":!t.hasToken},attrs:{href:"javascript:;"}},[n("img",{staticClass:"img-circle",attrs:{src:t.avatar}}),t._v(" "),n("span",[t._v(t._s(t.mobile))])]),t._v(" "),t.hasToken?n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/wallet"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("我的资产")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/candyRoom/myCandyOrder"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("余币宝订单")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.$emit("signout")}}},[t._v("注销登录")])])]):n("ul",{staticClass:"dropdown-menu hidden-md hidden-lg"},[n("li",[n("router-link",{attrs:{to:"/signin"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("登录")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/signup"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("注册")])],1)])]),t._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"collapse navbar-collapse",class:{in:t.showSide}},[n("ul",{staticClass:"nav navbar-nav"},[n("router-link",{attrs:{tag:"li","active-class":"active",exact:"",to:"/"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.$t("label.home")))])]),t._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/discover"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("发现")])]),t._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/candyRoom"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("余币宝")])])],1)])])])},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(t){n("h+At")},null,null);e.default=c.exports},mUJ2:function(t,e,n){var r={"./apply/Apply.vue":["0OVd",13],"./candyRoom/CandyBuy.vue":["tHq/",27],"./candyRoom/CandyList.vue":["ynLq",24],"./candyRoom/CandyOrder.vue":["h6Zs",19],"./candyRoom/CandyOrderConfirm.vue":["3ExQ",0,29],"./candyRoom/CandyOrderDetail.vue":["eB6N",0,12],"./candyRoom/CandyRoom.vue":["Z8Fx",22],"./candyRoom/MyCandyOrder.vue":["LItE",41],"./footer/Footer.vue":["bYoP"],"./header/header.vue":["hxP8"],"./home/Home.vue":["h6qm",0,1],"./home/NewsPanel.vue":["NGpT",33],"./home/ProjIntro.vue":["0VlW",0],"./home/ProjListPanel.vue":["U5/d",14],"./home/ProjShowPanel.vue":["SYRS",0,32],"./home/Search.vue":["ZsFn",0],"./home/SearchPanel.vue":["c8fR",0,38],"./home/TopList.vue":["n5G4",39],"./loading.vue":["KgXo",36],"./navbar/navbar.vue":["dFzb",28],"./news/NewsDetail.vue":["y0Ls",0,17],"./news/NewsList.vue":["mcZf",0,7],"./news/NewsTablePanel.vue":["fOQt",34],"./pagination/pagination.vue":["+ryu",0],"./projDetail/ProjDetail.vue":["prwi",0,5],"./projDetail/ProjDetailPanel.vue":["Yxvu",0,15],"./projDetail/ProjDynamicPanel.vue":["zdKg",0,18],"./projDetail/ProjInfoPanel.vue":["Y8Ir",0,25],"./projDetail/ProjTimeLine.vue":["qrst",0],"./projList/PagePanel.vue":["oByv",0],"./projList/ProjList.vue":["c+ar",0,4],"./projList/ProjSearchPanel.vue":["+4D8",0,26],"./projList/ProjTablePanel.vue":["eslO",0,21],"./projList/TopListPanel.vue":["YCFY",0],"./search-bar/search-bar.vue":["b17X",0],"./share/Share.vue":["mSzT",0],"./sign/FindPwd.vue":["vZjr",9],"./sign/Protocol.vue":["0wBR",10],"./sign/ResetPwd.vue":["ynxK",23],"./sign/Signin.vue":["nsCj",31],"./sign/Signup.vue":["E+Fy",11]};function o(t){var e=r[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(r)},o.id="mUJ2",t.exports=o},qqIn:function(t,e){},tvR6:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fcc9eb630789b03f2e4c.js.map