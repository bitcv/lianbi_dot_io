webpackJsonp([41],{"4jj0":function(t,e){},KhE7:function(t,e){},MvGc:function(t,e){e.install=function(t,e){t.prototype.convertFundStage=function(t){switch(t){case 0:return"保密";case 1:return"未融资";case 2:return"融资中";case 3:return"已融资"}},t.prototype.convertBuzType=function(t){switch(t){case 1:return"金融";case 2:return"数字货币";case 3:return"娱乐";case 4:return"供应链管理";case 5:return"法律服务";case 6:return"医疗";case 7:return"能源服务";case 8:return"公益";case 9:return"物联网";case 10:return"农业";case 11:return"社交";default:return"其它"}},t.prototype.getShortStr=function(t,e){return t.substr(0,e)+"..."+t.substr(-1*e)},t.prototype.convertOrderStatus=function(t){switch(t){case 0:return"待支付";case 1:return"已完成";case 2:return"已取消";case 3:return"已过期";default:return"未知状态"}},t.prototype.convertDate=function(t){var e=(new Date).getTime()-new Date(t).getTime(),n=e/36e5,o=e/6e4;if(n>24)var r=parseInt(e/864e5)+"天前";else if(n>=1)r=parseInt(n)+"个小时前";else if(o>=1)r=parseInt(o)+"分钟前";else r="刚刚";return r},t.prototype.getInterest=function(t,e,n){return t*e*n/12},t.prototype.mediaClass=function(){return document.body.clientWidth<=600?"media-mobile":""},Array.prototype.indexOf=function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1},Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"reLogin",function(){return w}),n.d(o,"getProList",function(){return _}),n.d(o,"getProDetail",function(){return j}),n.d(o,"getNewsList",function(){return C}),n.d(o,"getFilterParams",function(){return P}),n.d(o,"getTop10",function(){return k}),n.d(o,"updateFocus",function(){return O}),n.d(o,"getCandyList",function(){return D});var r={};n.d(r,"updateUserInfo",function(){return S}),n.d(r,"cleanUserInfo",function(){return R});var i=n("//Fk"),a=n.n(i),s=n("7+uW"),c=n("fZjL"),u=n.n(c),l=n("Dd8w"),d=n.n(l),p=n("NYxO"),v={name:"App",components:{vHeader:n("hxP8").default,vFooter:n("bYoP").default},computed:d()({},Object(p.d)({path:function(t){return t.route.path},userInfo:function(t){return t.userInfo}}),{visible:function(){return"/share"!==this.path},hasToken:function(){return!!this.userInfo&&u()(this.userInfo).length>0}}),watch:{hasToken:function(t){t||this.$router.push("/signin")}},methods:d()({},Object(p.c)(["cleanUserInfo"]),{signout:function(){this.cleanUserInfo()}})},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.visible?n("v-header",{attrs:{"has-token":t.hasToken},on:{signout:t.signout}}):t._e(),t._v(" "),n("div",{staticClass:"main-container"},[n("router-view")],1),t._v(" "),t.visible?n("v-footer"):t._e()],1)},staticRenderFns:[]};var f=n("VU/8")(v,h,!1,function(t){n("4jj0"),n("qqIn")},"data-v-44889f04",null).exports,m=n("mtWM"),g=n.n(m),w=function(t){(0,t.commit)("cleanUserInfo")},y=function(t){var e=t.errcode,n=t.data,o=t.errmsg,r=void 0===o?"":o;switch(e){case 0:return n;case 302:return w(),a.a.reject(r);default:return alert(r),a.a.reject(r)}},b=function(t,e){return g.a.post(t,e).then(function(t){return y(t.data)})},_=function(t,e){return b("/api/getProjList",e)},j=function(t,e){return b("/api/getProjDetail",e)},C=function(t,e){return b("/api/getNewsList",e)},P=function(t,e){return b("/api/getProjTagList",e)},k=function(t,e){return b("/api/getProjTopList",e)},O=function(t,e){return b("/api/toggleFocus",e)},D=function(t,e){return b("/api/getDepositBoxList",e)},I=n("mvHQ"),L=n.n(I),S=function(t,e){var n=localStorage.getItem("userInfo");n&&(n=JSON.parse(n)),e&&(n=e,localStorage.setItem("userInfo",L()(n))),t.userInfo=n},R=function(t){localStorage.removeItem("userInfo"),t.userInfo=null};s.default.use(p.a);var T=new p.a.Store({actions:o,mutations:r,state:{userInfo:null}}),M=n("/ocq");function x(t){return function(){return n("mUJ2")("./"+t+".vue")}}function F(t){return function(){return n("Opzk")("./"+t+".vue")}}var U=[{path:"/",component:F("home/home")},{path:"/discover",component:F("discover/discover")},{path:"/discover/detail/:id",component:F("discover/detail")},{path:"/wallet",component:F("user/wallet")},{path:"/wallet/withdraw/:id",component:F("user/withdraw")},{path:"/wallet/records",component:F("user/records")},{path:"/projList",component:x("projList/ProjList")},{path:"/candyRoom",redirect:"/candyRoom/candyList",component:x("candyRoom/CandyRoom"),children:[{path:"candyList",component:F("candy/list")},{path:"candyBuy",component:x("candyRoom/CandyBuy"),props:!0},{path:"candyOrder",component:x("candyRoom/CandyOrder")},{path:"candyOrderDetail/:id",component:x("candyRoom/CandyOrderDetail")},{path:"candyOrderConfirm/:id",component:x("candyRoom/CandyOrderConfirm")},{path:"myCandyOrder",component:x("candyRoom/MyCandyOrder")}]},{path:"/projDetail/:id",component:x("projDetail/ProjDetail"),redirect:"/projDetail/info/:id",children:[{path:"/projDetail/info/:id",component:x("projDetail/ProjDetailPanel")},{path:"/projDetail/dynamic/:id",component:x("projDetail/ProjDynamicPanel")}]},{path:"/signin",component:x("sign/Signin")},{path:"/signup",component:x("sign/Signup")},{path:"/share",component:x("share/Share")},{path:"/protocol",component:x("sign/Protocol")},{path:"/findpwd",component:x("sign/FindPwd")},{path:"/resetpwd/:mobile",component:x("sign/ResetPwd")},{path:"/newslist",component:x("news/NewsList")},{path:"/newsdetail/:id",component:x("news/NewsDetail")},{path:"/apply",component:x("apply/Apply")}];s.default.use(M.a);var N=new M.a({routes:U,mode:"history",linkActiveClass:"active",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}}}),B=n("9JMe"),E=n("zL8q"),z=n.n(E),q=(n("v2ns"),n("tvR6"),n("MvGc")),Y=n.n(q);s.default.use(Y.a),n("hKoQ").polyfill(),s.default.use(z.a),s.default.prototype.$http=g.a,s.default.config.productionTip=!1,Object(B.sync)(T,N),g.a.interceptors.response.use(function(t){return 302===t.data.errcode?(T.commit("cleanUserInfo"),N.push("/"),a.a.reject(t)):t},function(t){return 302===t.response.status&&(T.commit("cleanUserInfo"),N.push("/")),a.a.reject(t)}),T.commit("updateUserInfo"),new s.default({el:"#app",store:T,router:N,components:{App:f},template:"<App/>",data:{eventHub:new s.default}})},Opzk:function(t,e,n){var o={"./candy/list.vue":["c+ZJ",0,28],"./discover/detail.vue":["PwbF",0,5],"./discover/discover.vue":["POBk",0,7],"./home/home.vue":["zKIK",0,2],"./sign/signin.vue":["ZoOl",39],"./sign/signup.vue":["2ufm",38],"./user/records.vue":["sFhK",0,24],"./user/wallet.vue":["I37D",0,25],"./user/withdraw.vue":["z4wH",27]};function r(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}r.keys=function(){return Object.keys(o)},r.id="Opzk",t.exports=r},bYoP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"content"},[this._m(0),this._v(" "),e("div",{staticClass:"icon-box"},this._l(this.socialList,function(t,n){return e("a",{key:n,attrs:{href:t.url,target:"_blank"}},[e("i",{staticClass:"icon-bcv",class:t.fontClass})])})),this._v(" "),this._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[e("img",{attrs:{src:"/static/img/logo.png",alt:"BitCV"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom"},[e("span",[this._v("Copyright © 2018 BitCV. All Rights Reserved")])])}]};var r=n("VU/8")({data:function(){return{socialList:[{url:"https://weibo.com/bitcv",fontClass:"icon-weibo"},{url:"https://www.facebook.com/groups/1301707606641533/",fontClass:"icon-facebook"},{url:"https://github.com/bitcv",fontClass:"icon-github"},{url:"https://t.me/bcvtoken",fontClass:"icon-telegram"},{url:"https://twitter.com/BCVofficial",fontClass:"icon-twitter"}]}}},o,!1,function(t){n("KhE7")},"data-v-6fdd9d22",null);e.default=r.exports},hxP8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),r=n.n(o),i=n("NYxO"),a={bind:function(t,e){var n=e.value;t.handler=function(e){t&&!t.contains(e.target)&&n(e)},document.addEventListener("click",t.handler,!0)},unbind:function(t){document.removeEventListener("click",t.handler,!0),t.handler=null}},s={props:{hasToken:Boolean},data:function(){return{showSide:!1,showDropdown:!1}},computed:r()({},Object(i.d)({userInfo:function(t){return t.userInfo}}),{avatar:function(){return this.userInfo&&this.userInfo.avatarUrl?this.userInfo.avatarUrl:"/static/img/avatar.png"}}),directives:{"click-outside":a},watch:{showSide:"onToggleMenu",showDropdown:"onToggleMenu"},methods:{navbarToggle:function(){this.showDropdown=!1,this.showSide=!this.showSide},onMouseenter:function(){this.showSide=!1,this.__timer&&(clearTimeout(this.__timer),this.__timer=null),this.showDropdown=!0},onMouseleave:function(){var t=this;this.__timer&&(clearTimeout(this.__timer),this.__timer=null),this.__timer=setTimeout(function(){t.showDropdown=!1},150)},onClickOutside:function(){this.showSide&&(this.showSide=!1)},onToggleMenu:function(){this.showSide||this.showDropdown?document.body.style.overflow="hidden":document.body.style.overflow=""},dimissMenu:function(){this.showSide&&(this.showSide=!1),this.showDropdown&&(this.showDropdown=!1)}},mounted:function(){this.showSide=!1,this.showDropdown=!1}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-inverse navbar-static-top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",class:{collapsed:!t.showSide},attrs:{type:"button"},on:{click:function(e){e.stopPropagation(),t.navbarToggle(e)}}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{src:"/static/img/brand.png",alt:"BitCV",height:"30"}})])],1),t._v(" "),t.hasToken?t._e():n("div",{staticClass:"navbar-right hidden-sm hidden-xs"},[n("router-link",{staticClass:"btn navbar-btn btn-default btn-outline",attrs:{to:"/signup"}},[t._v("注册")]),t._v(" "),n("span",[t._v("  ")]),t._v(" "),n("router-link",{staticClass:"btn navbar-btn btn-default btn-outline",attrs:{to:"/signin"}},[t._v("登录")])],1),t._v(" "),n("div",{staticClass:"dropdown navbar-right",class:{open:t.showDropdown},on:{mouseenter:t.onMouseenter,mouseleave:t.onMouseleave}},[t.hasToken?n("a",{staticClass:"dropdown-toggle",attrs:{href:"javascrip:;"}},[n("img",{staticClass:"img-circle",attrs:{src:t.avatar}})]):t._e(),t._v(" "),t.hasToken?n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/wallet?code=user"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("我的资产")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.$emit("signout")}}},[t._v("注销登录")])])]):n("ul",{staticClass:"dropdown-menu hidden-md hidden-lg"},[n("li",[n("router-link",{attrs:{to:"/signin"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("登录")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/signup"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[t._v("注册")])],1)])]),t._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"collapse navbar-collapse",class:{in:t.showSide}},[n("ul",{staticClass:"nav navbar-nav"},[n("router-link",{attrs:{tag:"li","active-class":"active",exact:"",to:"/"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("主页")])]),t._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/discover"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("发现")])]),t._v(" "),n("router-link",{attrs:{tag:"li","active-class":"active",to:"/candyRoom"},nativeOn:{click:function(e){t.dimissMenu(e)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("余币宝")])])],1)])])])},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(t){n("zl20")},null,null);e.default=u.exports},mUJ2:function(t,e,n){var o={"./apply/Apply.vue":["0OVd",10],"./candyRoom/CandyBuy.vue":["tHq/",14],"./candyRoom/CandyList.vue":["ynLq",21],"./candyRoom/CandyOrder.vue":["h6Zs",35],"./candyRoom/CandyOrderConfirm.vue":["3ExQ",0,19],"./candyRoom/CandyOrderDetail.vue":["eB6N",0,29],"./candyRoom/CandyRoom.vue":["Z8Fx",17],"./candyRoom/MyCandyOrder.vue":["LItE",9],"./footer/Footer.vue":["bYoP"],"./header/header.vue":["hxP8"],"./home/Home.vue":["h6qm",0,1],"./home/NewsPanel.vue":["NGpT",32],"./home/ProjIntro.vue":["0VlW",0],"./home/ProjListPanel.vue":["U5/d",11],"./home/ProjShowPanel.vue":["SYRS",0,31],"./home/Search.vue":["ZsFn",0],"./home/SearchPanel.vue":["c8fR",0,36],"./home/TopList.vue":["n5G4",37],"./navbar/navbar.vue":["dFzb",26],"./news/NewsDetail.vue":["y0Ls",0,12],"./news/NewsList.vue":["mcZf",0,6],"./news/NewsTablePanel.vue":["fOQt",34],"./pagination/pagination.vue":["+ryu",0],"./projDetail/ProjDetail.vue":["prwi",0,4],"./projDetail/ProjDetailPanel.vue":["Yxvu",0,33],"./projDetail/ProjDynamicPanel.vue":["zdKg",0,13],"./projDetail/ProjInfoPanel.vue":["Y8Ir",0,22],"./projDetail/ProjTimeLine.vue":["qrst",0],"./projList/PagePanel.vue":["oByv",0],"./projList/ProjList.vue":["c+ar",0,3],"./projList/ProjSearchPanel.vue":["+4D8",0,23],"./projList/ProjTablePanel.vue":["eslO",0,16],"./projList/TopListPanel.vue":["YCFY",0],"./search-bar/search-bar.vue":["b17X",0],"./share/Share.vue":["mSzT",0],"./sign/FindPwd.vue":["vZjr",18],"./sign/Protocol.vue":["0wBR",8],"./sign/ResetPwd.vue":["ynxK",20],"./sign/Signin.vue":["nsCj",30],"./sign/Signup.vue":["E+Fy",15]};function r(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}r.keys=function(){return Object.keys(o)},r.id="mUJ2",t.exports=r},qqIn:function(t,e){},tvR6:function(t,e){},v2ns:function(t,e){},zl20:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0ed47702dfeea0eecb0f.js.map