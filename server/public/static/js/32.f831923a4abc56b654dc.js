webpackJsonp([32],{UFH7:function(t,e){},nsCj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("NYxO"),r={data:function(){return{curIndex:0,mobile:"",passwd:""}},methods:i()({},Object(n.c)(["updateUserInfo"]),{signin:function(){if(!new RegExp(/^\d{7,11}$/).test(this.mobile))return alert("请填写正确的手机号");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{mobile:this.mobile,passwd:this.passwd}).then(function(e){var s=e.data;0===s.errcode?(t.updateUserInfo(s.data),t.$router.push("/")):alert(s.errmsg)}).catch(function(t){console.log(t)})}})},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"signin"},[s("h2",{staticClass:"panel-title center-title",staticStyle:{"text-align":"center","font-size":"23px","margin-bottom":"50px"}},[t._v("登录")]),t._v(" "),0===t.curIndex?[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),s("button",{on:{click:function(e){e.preventDefault(),t.signin(e)}}},[t._v("立即登录")])]),t._v(" "),s("div",{staticClass:"btn-area"},[s("router-link",{attrs:{to:"findPwd"}},[s("a",{staticStyle:{float:"left"}},[t._v("重置密码?")])]),t._v(" "),s("router-link",{attrs:{to:"signup"}},[s("a",{staticStyle:{float:"right"}},[t._v("注册")])])],1)]:s("div",{staticClass:"qrcode-area"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(1)])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{"margin-top":"10px"}},[e("span",{staticStyle:{color:"#ddd"}},[this._v("春节期间参加活动的用户请先"),e("a",{staticStyle:{cursor:"pointer"},attrs:{href:"/findpwd"}},[e("span",{staticStyle:{color:"#ff8b13"}},[this._v("重置密码")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("打开"),e("em",[this._v("微信")]),this._v("扫一扫")])}]};var l=s("VU/8")(r,o,!1,function(t){s("UFH7")},"data-v-1f79082c",null);e.default=l.exports}});
//# sourceMappingURL=32.f831923a4abc56b654dc.js.map