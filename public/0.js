webpackJsonp([0],{218:function(t,a,e){var i=e(219);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(4)("3b0db570",i,!0,{})},219:function(t,a,e){(t.exports=e(2)(!1)).push([t.i,".main-content[data-v-a7c7033a]{padding-top:10em}.button-size[data-v-a7c7033a]{font-size:5em}.icon-design[data-v-a7c7033a]{-webkit-filter:grayscale(100%);filter:grayscale(100%);width:80px;height:80px}.projects-text-content[data-v-a7c7033a]{font-family:Raleway,sans-serif!important;font-size:30px;font-weight:100;color:#4b4848;padding-top:1em;padding-bottom:.5em}.sub-intro[data-v-a7c7033a]{background-color:#dbdbdb}.project-title[data-v-a7c7033a]{font-weight:bolder;font-size:20px}.project-property-label[data-v-a7c7033a]{font-weight:700!important;text-align:right;font-family:Raleway,sans-serif!important}.image-con[data-v-a7c7033a]{background-color:#d6d6d6}.project-image-unavailable[data-v-a7c7033a]{font-family:Raleway,sans-serif!important;padding-top:2em;padding-bottom:2em;color:#101010}.project-content[data-v-a7c7033a]{font-family:Raleway,sans-serif!important}.project-container[data-v-a7c7033a]{margin-top:5em!important}.project-container-loading[data-v-a7c7033a]{margin-top:5em!important;margin-bottom:16.5em}@media (min-width:768px) and (max-width:1022px){.project-container-loading[data-v-a7c7033a]{margin-top:5em!important;margin-bottom:20em}}@media (min-width:1024px){.project-container-loading[data-v-a7c7033a]{margin-top:5em!important;margin-bottom:41.3em}}div[data-v-a7c7033a] p{font-family:Raleway,sans-serif!important}.container-image2[data-v-a7c7033a],.container-image[data-v-a7c7033a]{position:relative}.image[data-v-a7c7033a]{opacity:1;display:block;-webkit-transition:.5s ease;transition:.5s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden}.middle[data-v-a7c7033a]{-webkit-transition:.5s ease;transition:.5s ease;opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);text-align:center}.container-image:hover .image[data-v-a7c7033a]{opacity:.3}.container-image:hover .middle[data-v-a7c7033a]{opacity:1}.text[data-v-a7c7033a]{color:#101010;font-size:25px;font-weight:300!important;padding:16px 32px;font-family:Raleway,sans-serif!important}",""])},220:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{ifReady:!1,projects:null,hasProjects:!1,selectedImage:"",caption:""}},created:function(){var t=this;new Promise(function(a,e){axios.get("/api/projects").then(function(e){console.log(e.data),t.projects=e.data.data,t.hasProjects=!0,t.ifReady=!0,a()}).catch(function(a){t.ifReady=!0})})},methods:{viewProjectImage:function(t,a){this.selectedImage=t,this.caption=a}}}},221:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("projects-header-component"),t._v(" "),e("div",{staticClass:"text-center sub-intro"},[e("div",{staticClass:"pt-5"},[e("b-img",{staticClass:"icon-design",attrs:{src:"/assets/pencil.svg",fluid:"",alt:"Responsive image"}})],1),t._v(" "),t._m(0)]),t._v(" "),t._l(t.projects,function(a){return 1==t.ifReady?e("div",{key:a.name,staticClass:"project-container"},[e("b-container",{staticClass:"bv-example-row mb-5"},[e("b-row",[e("b-col",{staticClass:"image-con",attrs:{sm:""}},[null==a.image||""==a.image?e("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"container-image",on:{click:function(e){return t.viewProjectImage(a.project_images,a.name)}}},[e("b-img",{staticClass:"image",attrs:{src:"/storage/images/"+a.image,fluid:"",alt:"Responsive image"}}),t._v(" "),e("div",{staticClass:"middle"},[e("div",{staticClass:"text"},[t._v("Click to view")])])],1):e("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"container-image2 text-center project-image-unavailable "},[t._v("\n                        Image Unavailable\n                    ")])]),t._v(" "),e("b-col",{attrs:{sm:""}},[e("div",{staticClass:"mt-2"},[e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"project-property-label",attrs:{cols:"4"}},[t._v("Project Name:")]),t._v(" "),e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[t._v("\n                                "+t._s(a.name)+"\n                            ")])],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"project-property-label",attrs:{cols:"4"}},[t._v("Description:")]),t._v(" "),e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[e("div",{staticClass:"project-content",domProps:{innerHTML:t._s(a.description)}})])],1),t._v(" "),e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"project-property-label",attrs:{cols:"4"}},[t._v("Role:")]),t._v(" "),e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[t._v("\n                                "+t._s(a.role)+"\n                            ")])],1),t._v(" "),e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"project-property-label",attrs:{cols:"4"}},[t._v("Repository Link:")]),t._v(" "),"n/a"!=a.github_link?e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[e("a",{staticClass:"project-content",attrs:{href:a.github_link}},[t._v("Click Here")])]):e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[t._v("\n                                Unavailable due to company policy.\n                            ")])],1),t._v(" "),e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"project-property-label",attrs:{cols:"4"}},[t._v("Live Link:")]),t._v(" "),"n/a"!=a.live_link?e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[e("a",{staticClass:"project-content",attrs:{href:a.live_link}},[t._v("Click Here")])]):e("b-col",{staticClass:"project-content",attrs:{cols:"8"}},[t._v("\n                                Under Development\n                            ")])],1)],1)])],1)],1)],1):t._e()}),t._v(" "),e("b-modal",{attrs:{id:"modal-center",size:"xl",centered:"","header-bg-variant":"dark","header-text-variant":"light","body-bg-variant":"light","footer-bg-variant":"dark","footer-text-variant":"light"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("b",[t._v(t._s(this.caption))])]},proxy:!0}])},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"}},t._l(this.selectedImage,function(t){return e("b-carousel-slide",{key:t.caption,attrs:{caption:t.caption,"img-src":"/storage/images/"+t.image}})}),1)],1),t._v(" "),0==t.ifReady?e("div",[e("div",{staticClass:"d-flex justify-content-center project-container-loading"},[e("b-spinner",{attrs:{label:"Loading..."}})],1)]):t._e(),t._v(" "),e("footer-component")],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center projects-text-content"},[a("p",[this._v("What I've been up to.")])])}]}},249:function(t,a,e){var i=e(3)(e(220),e(221),!1,function(t){e(218)},"data-v-a7c7033a",null);t.exports=i.exports}});
//# sourceMappingURL=0.js.map