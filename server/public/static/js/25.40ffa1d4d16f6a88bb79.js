webpackJsonp([25],{mpit:function(t,e){},nsCj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),a=n("NYxO"),r={data:function(){return{curIndex:0,mobile:"",passwd:""}},methods:i()({},Object(a.c)(["updateUserInfo"]),{signin:function(){if(!new RegExp(/^0?(13|14|15|16|17|18)[0-9]{9}$/).test(this.mobile))return alert("请填写正确的手机号");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{mobile:this.mobile,passwd:this.passwd}).then(function(e){var n=e.data;0===n.errcode?(t.updateUserInfo(n.data),t.$router.push("/")):alert(n.errmsg)}).catch(function(t){console.log(t)})}})},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"signin"},[n("h3",{staticClass:"panel-title center-title"},[t._v("登录")]),t._v(" "),0===t.curIndex?[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"登录密码"},domProps:{value:t.passwd},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signin(e)},input:function(e){e.target.composing||(t.passwd=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){e.preventDefault(),t.signin(e)}}},[t._v("登录")])]),t._v(" "),n("div",{staticClass:"btn-area"},[n("router-link",{attrs:{to:"findPwd"}},[n("a",[t._v("忘记密码")])]),t._v(" "),n("router-link",{attrs:{to:"signup"}},[n("a",[t._v("注册会员")])])],1)]:n("div",{staticClass:"qrcode-area"},[n("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(0)])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("打开"),e("em",[this._v("微信")]),this._v("扫一扫")])}]};var l=n("VU/8")(r,o,!1,function(t){n("mpit")},"data-v-41979664",null);e.default=l.exports}});
//# sourceMappingURL=25.40ffa1d4d16f6a88bb79.js.map