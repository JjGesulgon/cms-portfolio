webpackJsonp([24],{150:function(t,e,a){var i=a(151);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(4)("f606b89c",i,!0,{})},151:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,".display-flex[data-v-31105b49]{display:-webkit-box;display:-ms-flexbox;display:flex}.navi-item[data-v-31105b49]{margin-right:210px!important}.lettering[data-v-31105b49]{font-size:45px}.header[data-v-31105b49]{padding:5px 20px!important;background:#fff;color:#717171;border-bottom:1px solid #e0e4e8}.info[data-v-31105b49]{margin:20px;color:#717171;line-height:25px}.main_content[data-v-31105b49]{width:auto}.main_content .header[data-v-31105b49]{padding:20px;background:#fff;color:#717171;border-bottom:1px solid #e0e4e8}.main_content .info[data-v-31105b49]{margin-left:40px;margin-right:40px;margin-top:20px;color:#717171;line-height:25px}.main_content .info div[data-v-31105b49]{margin-bottom:20px}",""])},152:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{ifReady:!0,image:null,name:"",body:"",errors:[]}},mounted:function(){},methods:{createNewAbout:function(){var t=this;this.ifReady=!1,this.errors=[];var e=new FormData;e.append("body",tinyMCE.activeEditor.getContent()),axios.post("/api/about",e).then(function(e){t.toast("Success","About added","Successfully submitted the request","secondary"),t.$router.push({name:"about.index"})}).catch(function(e){t.errors=e.response.data.errors,t.ifReady=!0,console.log(e.response),t.toast("Error","Failed to submit","Unable to process request!","danger")})},viewAbout:function(){this.$router.push({name:"about.index"})},onFileSelected:function(t){this.image=t.target.files[0]},toast:function(t,e,a,i){var r=this.$createElement;this.count++;var o=r("p",{class:["text-center","mb-0"]},[r("b-spinner",{props:{type:"grow",small:!0}}),"  ",r("strong",{class:"text-muted"},a),"  ",r("b-spinner",{props:{type:"grow",small:!0}})]),n=r("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[r("strong",{class:"mr-2"},t),r("small",{class:"ml-auto text-italics"},e)]);this.$bvToast.toast([o],{title:[n],solid:!0,toaster:"b-toaster-bottom-right",variant:i})}}}},153:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"mr-auto mt-5 lettering"},[t._v("\n            About\n        ")]),t._v(" "),a("div",[a("div",{staticClass:"d-flex flex-row-reverse"},[a("label",{staticClass:"text-secondary clickableText header-margin",on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"default",void 0,e.key,void 0)?null:(e.preventDefault(),t.viewAbout(e))}}},[a("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" \n                    "),a("strong",[t._v("Back")])])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" >> Create About\n                ")],1),t._v(" "),a("div",{staticClass:"card-body"},[t.ifReady?a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.createNewAbout(e)}}},[a("div",{staticClass:"form-group"},[t._m(0),t._v(" "),a("tinymce-component",{attrs:{"api-key":"v8631ogi6aq7uc2h9z8tr72t2r3krmwlsbj5k4swk4i448f9",init:{height:500,menubar:!1,font_formats:"Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n; Raleway",plugins:["print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"],menubar:"file edit view insert format tools table help",toolbar:"undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",toolbar_sticky:!0}},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),t._v(" "),t.errors!=[]?a("div",t._l(t.errors,function(e){return a("div",{staticClass:"alert alert-danger"},[a("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert"}},[t._v("×")]),t._v(" "),a("strong",[t._v("Error!")]),t._v(" "+t._s(e[0])+"\n                                ")])}),0):t._e(),t._v(" "),a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"submit"}},[t._v("Create About")])])]):a("div",[a("div",{staticClass:"d-flex justify-content-center mb-3"},[a("b-spinner",{attrs:{label:"Loading..."}})],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("strong",[this._v("Body")])])}]}},232:function(t,e,a){var i=a(3)(a(152),a(153),!1,function(t){a(150)},"data-v-31105b49",null);t.exports=i.exports}});
//# sourceMappingURL=24.js.map