webpackJsonp([17],{cfBn:function(t,e){},vZjr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v={data:function(){return{mobile:"",vcode:"",timerId:"",disableSms:!1,countDown:60,passwd:"",selected:65}},methods:{getVcode:function(){var t=this;if(!new RegExp(/^\d{7,11}$/).test(this.mobile))return alert("请填写正确的手机号");this.disableSms=!0,this.timerId=setInterval(function(){t.countDown<=1?(clearInterval(t.timerId),t.disableSms=!1,t.timerId="",t.countDown=60):t.countDown--},1e3),this.$http.post("/api/getVcode",{mobile:this.mobile}).then(function(t){var e=t.data;0===e.errcode||alert(e.errmsg)}).catch(function(t){console.log(t)})},findPwd:function(){if(!this.selected)return alert("请选择手机国家号");if(!new RegExp(/^\d{7,11}$/).test(this.mobile))return alert("请填写正确的手机号");if(!this.vcode)return alert("验证码不能为空");if(this.passwd.length<6)return alert("密码长度至少需要6位");var t=this;this.$http.post("/api/resetPwd",{mobile:this.mobile,vcode:this.vcode,passwd:this.passwd,nation:this.selected}).then(function(e){var a=e.data;0===a.errcode?t.$router.push("/signin"):alert(a.errmsg)}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container signup-container"},[a("div",{staticClass:"findpwd"},[a("h2",{staticClass:"panel-title center-title",staticStyle:{"text-align":"center","font-size":"23px","margin-bottom":"50px"}},[t._v("重置密码")]),t._v(" "),a("form",[[a("div",{staticClass:"row",staticStyle:{margin:"0"}},[a("div",{staticClass:"col-xs-4",staticStyle:{padding:"0"}},[a("el-select",{staticClass:"phone-suffix",attrs:{placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("el-option",{attrs:{value:"65"}},[t._v("新加坡 (+65)")]),t._v(" "),a("el-option",{attrs:{value:"1"}},[t._v("美国 (+1)")]),t._v(" "),a("el-option",{attrs:{value:"61"}},[t._v("澳大利亚 (+61)")]),t._v(" "),a("el-option",{attrs:{value:"81"}},[t._v("日本 (+81)")]),t._v(" "),a("el-option",{attrs:{value:"82"}},[t._v("韩国 (+82)")]),t._v(" "),a("el-option",{attrs:{value:"86"}},[t._v("中国 (+86)")]),t._v(" "),a("el-option",{attrs:{value:"852"}},[t._v("香港  (SAR) (+852)")]),t._v(" "),a("el-option",{attrs:{value:"853"}},[t._v("澳门 (+853)")]),t._v(" "),a("el-option",{attrs:{value:"856"}},[t._v("老挝 (+856)")]),t._v(" "),a("el-option",{attrs:{value:"886"}},[t._v("台湾 (+886)")]),t._v(" "),a("el-option",{attrs:{value:"93"}},[t._v("阿富汗 (+93)")]),t._v(" "),a("el-option",{attrs:{value:"355"}},[t._v("阿尔巴尼亚 (+355)")]),t._v(" "),a("el-option",{attrs:{value:"213"}},[t._v("阿尔及利亚 (+213)")]),t._v(" "),a("el-option",{attrs:{value:"684"}},[t._v("美属萨摩亚 (+684)")]),t._v(" "),a("el-option",{attrs:{value:"376"}},[t._v("安道尔 (+376)")]),t._v(" "),a("el-option",{attrs:{value:"244"}},[t._v("安哥拉 (+244)")]),t._v(" "),a("el-option",{attrs:{value:"1264"}},[t._v("安圭拉 (+1264)")]),t._v(" "),a("el-option",{attrs:{value:"672"}},[t._v("南极洲 (+672)")]),t._v(" "),a("el-option",{attrs:{value:"1268"}},[t._v("安提瓜和巴布达 (+1268)")]),t._v(" "),a("el-option",{attrs:{value:"54"}},[t._v("阿根廷 (+54)")]),t._v(" "),a("el-option",{attrs:{value:"374"}},[t._v("亚美尼亚 (+374)")]),t._v(" "),a("el-option",{attrs:{value:"297"}},[t._v("阿鲁巴 (+297)")]),t._v(" "),a("el-option",{attrs:{value:"61"}},[t._v("澳大利亚 (+61)")]),t._v(" "),a("el-option",{attrs:{value:"43"}},[t._v("奥地利 (+43)")]),t._v(" "),a("el-option",{attrs:{value:"994"}},[t._v("阿塞拜疆 (+994)")]),t._v(" "),a("el-option",{attrs:{value:"973"}},[t._v("巴林 (+973)")]),t._v(" "),a("el-option",{attrs:{value:"880"}},[t._v("孟加拉国 (+880)")]),t._v(" "),a("el-option",{attrs:{value:"1246"}},[t._v("巴巴多斯 (+1246)")]),t._v(" "),a("el-option",{attrs:{value:"375"}},[t._v("白俄罗斯 (+375)")]),t._v(" "),a("el-option",{attrs:{value:"32"}},[t._v("比利时 (+32)")]),t._v(" "),a("el-option",{attrs:{value:"501"}},[t._v("伯利兹 (+501)")]),t._v(" "),a("el-option",{attrs:{value:"229"}},[t._v("贝宁 (+229)")]),t._v(" "),a("el-option",{attrs:{value:"1441"}},[t._v("百慕大 (+1441)")]),t._v(" "),a("el-option",{attrs:{value:"975"}},[t._v("不丹 (+975)")]),t._v(" "),a("el-option",{attrs:{value:"591"}},[t._v("玻利维亚 (+591)")]),t._v(" "),a("el-option",{attrs:{value:"387"}},[t._v("波黑 (+387)")]),t._v(" "),a("el-option",{attrs:{value:"267"}},[t._v("博茨瓦纳 (+267)")]),t._v(" "),a("el-option",{attrs:{value:"55"}},[t._v("巴西 (+55)")]),t._v(" "),a("el-option",{attrs:{value:"1284"}},[t._v("英属维尔京群岛 (+1284)")]),t._v(" "),a("el-option",{attrs:{value:"673"}},[t._v("文莱 (+673)")]),t._v(" "),a("el-option",{attrs:{value:"359"}},[t._v("保加利亚 (+359)")]),t._v(" "),a("el-option",{attrs:{value:"226"}},[t._v("布基纳法索 (+226)")]),t._v(" "),a("el-option",{attrs:{value:"95"}},[t._v("缅甸 (+95)")]),t._v(" "),a("el-option",{attrs:{value:"257"}},[t._v("布隆迪 (+257)")]),t._v(" "),a("el-option",{attrs:{value:"855"}},[t._v("柬埔寨 (+855)")]),t._v(" "),a("el-option",{attrs:{value:"237"}},[t._v("喀麦隆 (+237)")]),t._v(" "),a("el-option",{attrs:{value:"1"}},[t._v("加拿大 (+1)")]),t._v(" "),a("el-option",{attrs:{value:"238"}},[t._v("佛得角 (+238)")]),t._v(" "),a("el-option",{attrs:{value:"1345"}},[t._v("开曼群岛 (+1345)")]),t._v(" "),a("el-option",{attrs:{value:"236"}},[t._v("中非 (+236)")]),t._v(" "),a("el-option",{attrs:{value:"235"}},[t._v("乍得 (+235)")]),t._v(" "),a("el-option",{attrs:{value:"56"}},[t._v("智利 (+56)")]),t._v(" "),a("el-option",{attrs:{value:"61"}},[t._v("圣诞岛 (+61)")]),t._v(" "),a("el-option",{attrs:{value:"61"}},[t._v("科科斯（基林）群岛 (+61)")]),t._v(" "),a("el-option",{attrs:{value:"57"}},[t._v("哥伦比亚 (+57)")]),t._v(" "),a("el-option",{attrs:{value:"269"}},[t._v("科摩罗 (+269)")]),t._v(" "),a("el-option",{attrs:{value:"243"}},[t._v("刚果（金） (+243)")]),t._v(" "),a("el-option",{attrs:{value:"242"}},[t._v("刚果（布） (+242)")]),t._v(" "),a("el-option",{attrs:{value:"682"}},[t._v("库克群岛 (+682)")]),t._v(" "),a("el-option",{attrs:{value:"506"}},[t._v("哥斯达黎加 (+506)")]),t._v(" "),a("el-option",{attrs:{value:"225"}},[t._v("科特迪瓦 (+225)")]),t._v(" "),a("el-option",{attrs:{value:"385"}},[t._v("克罗地亚 (+385)")]),t._v(" "),a("el-option",{attrs:{value:"53"}},[t._v("古巴 (+53)")]),t._v(" "),a("el-option",{attrs:{value:"420"}},[t._v("捷克 (+420)")]),t._v(" "),a("el-option",{attrs:{value:"45"}},[t._v("丹麦 (+45)")]),t._v(" "),a("el-option",{attrs:{value:"253"}},[t._v("吉布提 (+253)")]),t._v(" "),a("el-option",{attrs:{value:"1767"}},[t._v("多米尼克 (+1767)")])],1)],1),t._v(" "),a("div",{staticClass:"col-xs-8",staticStyle:{padding:"0"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入你的手机号码"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})])])],t._v(" "),a("div",{staticClass:"smspanel"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vcode,expression:"vcode"}],staticClass:"sms",staticStyle:{"border-right-width":"0"},attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.vcode},on:{input:function(e){e.target.composing||(t.vcode=e.target.value)}}}),t._v(" "),a("div",{staticClass:"floatboder"}),t._v(" "),a("el-button",{staticClass:"sms-btn",class:{disabled:t.disableSms},attrs:{disabled:t.disableSms,type:"primary"},on:{click:t.getVcode}},[t._v("发送验证码"),a("span",{directives:[{name:"show",rawName:"v-show",value:t.timerId,expression:"timerId"}]},[t._v(" ("+t._s(t.countDown)+"s)")])])],1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",placeholder:"请输入新的密码"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}}),t._v(" "),a("button",{on:{click:function(e){e.preventDefault(),t.findPwd(e)}}},[t._v("找回密码")])],2)])])},staticRenderFns:[]};var l=a("VU/8")(v,o,!1,function(t){a("cfBn")},null,null);e.default=l.exports}});
//# sourceMappingURL=17.752355c942bf6c181768.js.map