webpackJsonp([44],{Jdg4:function(s,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),e=r.n(a),d=r("NYxO"),i={data:function(){return{loading:!1,bitcv:{},form:{address:""},addressError:"",errorTip:"请输入正确的支付钱包地址",e_errorTip:"Please enter the correct payment wallet address"}},created:function(){this.fetch()},computed:{params:function(){return{depositBoxId:this.bitcv.id,orderAmount:this.bitcv.number+"",fromAddr:this.form.address}},language:function(){return this.$i18n.locale}},methods:e()({},Object(d.b)(["postCandyOrder"]),{fetch:function(){this.bitcv=this.$route.query},handleSubmit:function(){var s=this;this.addressError="",this.form.address?0!==this.form.address.indexOf("0x")||42!==this.form.address.length||this.form.address===this.bitcv.toAddr?this.addressError="has-error":(this.loading=!0,this.postCandyOrder(this.params).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s.loading=!1,s.bitcv.address=s.form.address,s.bitcv.id=t.id,s.$router.push({path:"/candyRoom/candyDetails",query:s.bitcv})}).catch(function(){s.loading=!1})):this.addressError="has-error"}})},n={render:function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"container buying-address"},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"active"},[r("router-link",{attrs:{to:{path:"/candyRoom/candyList"}}},[s._v(s._s(s.$t("label.ybb")))])],1),s._v(" "),r("li",[s._v(s._s(s.$t("label.set_address")))])]),s._v(" "),r("div",{staticClass:"bitcv"},[r("h4",[s._v(s._s(s.$t("label.buy_detail")))]),s._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5"},[s._v("\n        "+s._s(s.$t("label.in_amount"))+"："),r("b",[s._v(s._s(s.bitcv.number))]),s._v(" "+s._s(s.$t("label.coin_amount"))+"\n      ")]),s._v(" "),r("div",{staticClass:"col-md-5"},[r("b",[s._v(s._s(s.bitcv.lockTime))]),s._v("\n        "+s._s(s.$t("label.day"))+" "+s._s(s.$t("label.getback"))+"\n        "),r("b",[s._v(s._s(s.bitcv.report))]),s._v("\n        "+s._s(s.$t("label.coin_amount"))+"\n      ")])])]),s._v(" "),r("div",{staticClass:"content"},[r("div",[r("h4",[s._v(s._s(s.$t("label.re_address")))]),s._v(" "),r("div",{staticClass:"buying-address-adr"},[r("p",[s._v(s._s(s.bitcv.toAddr))]),s._v(" "),r("p",[s._v(s._s(s.$t("label.pla_notice")))])])]),s._v(" "),r("h4",[s._v(s._s(s.$t("label.spending")))]),s._v(" "),r("div",{staticClass:"buying-address-form"},[r("div",{staticClass:"form-group",class:s.addressError},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.address,expression:"form.address"}],staticClass:"form-control",attrs:{type:"text",id:"address",placeholder:s.$t("label.input_address")},domProps:{value:s.form.address},on:{input:function(t){t.target.composing||s.$set(s.form,"address",t.target.value)}}}),s._v(" "),s.addressError&&"cn"===s.language?r("span",[s._v(s._s(s.errorTip))]):s.addressError&&"en"===s.language?r("span",[s._v(s._s(s.e_errorTip))]):s._e()]),s._v(" "),r("div",{staticClass:"col-md-10 buying-address-form-submit"},[r("button",{staticClass:"btn btn-warning",on:{click:s.handleSubmit}},[s._v(s._s(s.$t("label.submit_ord")))])])])])])},staticRenderFns:[]};var o=r("VU/8")(i,n,!1,function(s){r("t+pn")},"data-v-1f7b5dd4",null);t.default=o.exports},"t+pn":function(s,t){}});
//# sourceMappingURL=44.5401564aae75fd9d8165.js.map