webpackJsonp([20],{170:function(e,t,a){var n=a(171);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(4)("497a9ccb",n,!0,{})},171:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".display-flex[data-v-a6eaba6a]{display:-webkit-box;display:-ms-flexbox;display:flex}.navi-item[data-v-a6eaba6a]{margin-right:210px!important}.lettering[data-v-a6eaba6a]{font-size:45px}.header[data-v-a6eaba6a]{padding:5px 20px!important;background:#fff;color:#717171;border-bottom:1px solid #e0e4e8}.info[data-v-a6eaba6a]{margin:20px;color:#717171;line-height:25px}.main_content[data-v-a6eaba6a]{width:auto}.main_content .header[data-v-a6eaba6a]{padding:20px;background:#fff;color:#717171;border-bottom:1px solid #e0e4e8}.main_content .info[data-v-a6eaba6a]{margin-left:40px;margin-right:40px;margin-top:20px;color:#717171;line-height:25px}.main_content .info div[data-v-a6eaba6a]{margin-bottom:20px}",""])},172:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ifReady:!1,id:"",role:"",company_name:"",employment_type:"",location:"",start_date:"",end_date:"",isCurrent:"",errors:[]}},mounted:function(){var e=this;new Promise(function(t,a){axios.get("/api/experience/"+e.$route.params.id).then(function(a){console.log(),e.id=a.data.experience.id,e.role=a.data.experience.role,e.company_name=a.data.experience.company_name,e.employment_type=a.data.experience.employment_type,e.location=a.data.experience.location,e.start_date=a.data.experience.start_date,e.end_date=a.data.experience.end_date,null==e.end_date&&(e.isCurrent=!0),t()})}).then(function(){e.ifReady=!0})},methods:{viewExperience:function(){this.$router.push({name:"experience.index"})},updateExperience:function(){var e=this;this.errors=[];var t=new FormData;t.append("_method","PATCH"),t.append("role",this.role),t.append("company_name",this.company_name),t.append("employment_type",this.employment_type),t.append("location",this.location),t.append("start_date",this.start_date),this.isCurrent||(t.append("end_date",this.end_date),null!=this.end_date)?axios.post("/api/experience/"+this.$route.params.id,t).then(function(t){e.toast("Success","Experience updated","Successfully submitted the request","secondary"),e.$router.push({name:"experience.index"})}).catch(function(t){e.errors=t.response.data.errors,e.ifReady=!0,console.log(t),e.toast("Error","Failed to submit","Unable to process request!","danger")}):alert("Error: End date can't be null")},toast:function(e,t,a,n){var r=this.$createElement;this.count++;var i=r("p",{class:["text-center","mb-0"]},[r("b-spinner",{props:{type:"grow",small:!0}}),"  ",r("strong",{class:"text-muted"},a),"  ",r("b-spinner",{props:{type:"grow",small:!0}})]),o=r("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[r("strong",{class:"mr-2"},e),r("small",{class:"ml-auto text-italics"},t)]);this.$bvToast.toast([i],{title:[o],solid:!0,toaster:"b-toaster-bottom-right",variant:n})}}}},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main_content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"mr-auto mt-5 lettering"},[e._v("\n            Experience\n        ")]),e._v(" "),a("div",[a("div",{staticClass:"d-flex flex-row-reverse"},[a("label",{staticClass:"text-secondary clickableText header-margin",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"default",void 0,t.key,void 0)?null:(t.preventDefault(),e.viewExperience(t))}}},[a("i",{staticClass:"fas fa-long-arrow-alt-left"}),e._v(" \n                    "),a("strong",[e._v("Back")])])]),e._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{attrs:{to:"/experience"}},[e._v("Experiences")]),e._v(" >> Edit Experience\n                ")],1),e._v(" "),a("div",{staticClass:"card-body header-margin"},[e.ifReady?a("div",[a("form",{on:{submit:function(t){return t.preventDefault(),e.editAdmin(t)}}},[a("div",{staticClass:"form-group"},[e._m(0),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"off",minlength:"2",maxlength:"255"},domProps:{value:e.role},on:{input:function(t){t.target.composing||(e.role=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.company_name,expression:"company_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.company_name},on:{input:function(t){t.target.composing||(e.company_name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(2),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employment_type,expression:"employment_type"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.employment_type},on:{input:function(t){t.target.composing||(e.employment_type=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(3),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[e._m(4),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.start_date,expression:"start_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.start_date},on:{input:function(t){t.target.composing||(e.start_date=t.target.value)}}})]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.isCurrent,expression:"isCurrent"}],attrs:{type:"checkbox",id:"isCurrent"},domProps:{checked:Array.isArray(e.isCurrent)?e._i(e.isCurrent,null)>-1:e.isCurrent},on:{change:function(t){var a=e.isCurrent,n=t.target,r=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.isCurrent=a.concat([null])):i>-1&&(e.isCurrent=a.slice(0,i).concat(a.slice(i+1)))}else e.isCurrent=r}}}),e._v(" "),e._m(5),e._v(" "),e.isCurrent?e._e():a("div",{staticClass:"form-group"},[e._m(6),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.end_date,expression:"end_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.end_date},on:{input:function(t){t.target.composing||(e.end_date=t.target.value)}}})]),e._v(" "),e.errors!=[]?a("div",e._l(e.errors,function(t){return a("div",{staticClass:"alert alert-danger"},[a("a",{staticClass:"close",attrs:{href:"#","data-dismiss":"alert"}},[e._v("×")]),e._v(" "),a("strong",[e._v("Error!")]),e._v(" "+e._s(t[0])+"\n                                ")])}),0):e._e(),e._v(" "),a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"default",void 0,t.key,void 0)?null:(t.preventDefault(),e.updateExperience(t))}}},[e._v("Update Experience")])])]):a("div",[a("div",{staticClass:"d-flex justify-content-center mb-3"},[a("b-spinner",{attrs:{label:"Loading..."}})],1)])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("strong",[this._v("Role")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("strong",[this._v("Company Name")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("strong",[this._v("Employee Type")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("strong",[this._v("Location")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("strong",[this._v("Start Date")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"isCurrent"}},[t("strong",[this._v("Current Job")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("strong",[this._v("End Date")])])}]}},237:function(e,t,a){var n=a(3)(a(172),a(173),!1,function(e){a(170)},"data-v-a6eaba6a",null);e.exports=n.exports}});
//# sourceMappingURL=20.js.map