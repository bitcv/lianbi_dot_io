webpackJsonp([30],{"bT/b":function(t,e){},nsCj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),n=s.n(a),i=s("NYxO"),r={data:function(){return{curIndex:0,mobile:"",passwd:""}},methods:n()({},Object(i.c)(["updateUserInfo"]),{signin:function(){if(!new RegExp(/^0?(13|14|15|16|17|18)[0-9]{9}$/).test(this.mobile))return alert("请填写正确的手机号");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{mobile:this.mobile,passwd:this.passwd}).then(function(e){var s=e.data;0===s.errcode?(t.updateUserInfo(s.data),t.$router.push("/")):alert(s.errmsg)}).catch(function(t){console.log(t)})}})},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"signin"},[s("h3",{staticClass:"panel-title center-title"},[t._v("登录")]),t._v(" "),0===t.curIndex?[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"登录密码"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}}),t._v(" "),s("button",{on:{click:function(e){e.preventDefault(),t.signin(e)}}},[t._v("登录")])]),t._v(" "),s("div",{staticClass:"btn-area"},[s("router-link",{attrs:{to:"findPwd"}},[s("a",[t._v("忘记密码")])]),t._v(" "),s("router-link",{attrs:{to:"signup"}},[s("a",[t._v("注册会员")])])],1)]:s("div",{staticClass:"qrcode-area"},[s("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(0)])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("打开"),e("em",[this._v("微信")]),this._v("扫一扫")])}]};var l=s("VU/8")(r,o,!1,function(t){s("bT/b")},"data-v-28a8e6cd",null);e.default=l.exports}});
//# sourceMappingURL=30.f9a701408595e8713d86.js.map