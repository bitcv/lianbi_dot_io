webpackJsonp([15],{TMvU:function(t,e){},nsCj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{curIndex:0,mobile:"",passwd:""}},methods:{signin:function(){if(!new RegExp(/^0?(13|14|15|17|18)[0-9]{9}$/).test(this.mobile))return alert("请填写正确的手机号");if(this.passwd.length<6)return alert("账号或密码错误");var t=this;this.$http.post("/api/signin",{mobile:this.mobile,passwd:this.passwd}).then(function(e){var a=e.data;0===a.errcode?(localStorage.setItem("userId",a.data.userId),localStorage.setItem("mobile",a.data.mobile),localStorage.setItem("avatarUrl",a.data.avatarUrl),t.$router.push("/"),t.$router.go(0)):alert(a.errmsg)}).catch(function(t){console.log(t)})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signin"},[a("h3",{staticClass:"panel-title center-title"},[t._v("登录")]),t._v(" "),0===t.curIndex?[a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"登录密码"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}}),t._v(" "),a("button",{on:{click:function(e){e.preventDefault(),t.signin(e)}}},[t._v("登录")])]),t._v(" "),a("div",{staticClass:"btn-area"},[a("router-link",{attrs:{to:"findPwd"}},[a("a",[t._v("忘记密码")])]),t._v(" "),a("router-link",{attrs:{to:"signup"}},[a("a",[t._v("注册会员")])])],1)]:a("div",{staticClass:"qrcode-area"},[a("img",{attrs:{src:"/static/img/logo.png",alt:""}}),t._v(" "),t._m(0)])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("打开"),e("em",[this._v("微信")]),this._v("扫一扫")])}]};var i=a("VU/8")(s,r,!1,function(t){a("TMvU")},"data-v-6f172d3f",null);e.default=i.exports}});
//# sourceMappingURL=15.04868eab40334455b99f.js.map