(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0df53dbe"],{"019e":function(t,e,a){},"2e71":function(t,e,a){"use strict";var i=a("a677"),s=a.n(i);s.a},"9cd2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"avtivity-editor-container",class:{fullScreen:t.isFullScreen}},[a("el-row",{staticClass:"action-bar",attrs:{type:"flex",align:"middle",justify:"end"}},[a("el-button",{attrs:{size:"small",type:"text"}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"small"}},[t._v("预览")]),t._v(" "),a("el-button",{staticStyle:{"min-width":"120px"},attrs:{size:"small",type:"primary"}},[t._v("发布")]),t._v(" "),a("el-button",{staticClass:"btn-fullScreen",attrs:{size:"small"},on:{click:function(e){t.isFullScreen=!t.isFullScreen}}},[t._v("全屏")])],1),t._v(" "),a("el-scrollbar",{staticClass:"devicewin"},[a("div",{staticClass:"device"},[a("div",{staticClass:"device-header"},[a("div",{staticClass:"icons"},[a("svg-icon",{staticStyle:{float:"left"},attrs:{"icon-class":"wifi"}}),t._v(" "),a("svg-icon",{staticStyle:{float:"right"},attrs:{"icon-class":"battery"}}),t._v(" "),a("svg-icon",{staticStyle:{float:"right"},attrs:{"icon-class":"signal"}})],1),t._v(" "),a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"text"},[t._v(t._s(t.activityPageDate.title))]),t._v(" "),a("svg-icon",{staticClass:"xiaochengxu",staticStyle:{display:"none"},attrs:{"icon-class":"xiaochengxu"}})],1)]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"device-frame",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}})])]),t._v(" "),a("div",{attrs:{id:"propertywin"}},[a("el-tabs",{staticClass:"top-tab",attrs:{type:"card"},model:{value:t.p_voteTab_activeName,callback:function(e){t.p_voteTab_activeName=e},expression:"p_voteTab_activeName"}},[a("el-tab-pane",{attrs:{label:"基本设置",name:"first"}},[a("el-scrollbar",{staticClass:"tab-content-inner"},[a("div",{staticStyle:{padding:"16px"}},[a("base-setting",{model:{value:t.activityPageDate,callback:function(e){t.activityPageDate=e},expression:"activityPageDate"}})],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.activityPageDate.typeName+"管理",name:"second"}},[a("el-scrollbar",{staticClass:"tab-content-inner"},[a("div",{staticStyle:{padding:"16px"}},["vote"==t.activityPageDate.type?a("vote-setting",{model:{value:t.activityPageDate,callback:function(e){t.activityPageDate=e},expression:"activityPageDate"}}):t._e()],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"高级设置",name:"third"}},[a("el-scrollbar",{staticClass:"tab-content-inner"},[a("div",{staticStyle:{padding:"16px"}},["vote"==t.activityPageDate.type?a("vote-more-setting"):t._e()],1)])],1)],1)],1)],1)},s=[],n=(a("ca41"),a("ed08"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("基础设置1")])}),l=[],c={},o=c,r=a("2877"),d=Object(r["a"])(o,n,l,!1,null,null,null),v=d.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("基础设置1")])},p=[],_={},g=Object(r["a"])(_,u,p,!1,null,null,null),m=g.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("基础设置1")])},y=[],b={},h=Object(r["a"])(b,f,y,!1,null,null,null),x=h.exports,w={status:"draft",title:"这是个活动标题",cover:"",timeBegin:"",timeEnd:"",address:"",content:"",type:"vote",typeName:"投票",voteData:{option:{group_list:[{id:1,name:"分组1"},{id:2,name:"分组2"}],lists:[{id:1,name:"Wagner",avatar:"",piaoshu:"0",fenzu:"1",detail:""},{id:2,name:"王大",avatar:"",piaoshu:"0",fenzu:"1",detail:""}]},vote_times:"0",vote_day_times:"",vote_repeat:"1",show_captcha:"1",display_type:"0",show_result:"1",show_user_avatar:"0",show_user_name:"1",vote_button_text:"立即投票",share_defined:"0",share_defined_data:{banner:"",title:"",description:""},sign_in:"0",sign_form:[{must:0,use:1,label:"姓名",type:"单行文本"}],sign_in_text:"",lottery_show:"0",kaijiang_show:"0",relate_lottery:[{id:1}],relate_kaijiang:[{id:1}]},modules:[{ModuleID:1,ModuleType:"ModuleImageText",Layout:101,PaddingLR:!0,LayoutColor:"",moduleData:{titleColor:"#333",descColor:"#999",editor_desc:""}}],source_uri:"",id:void 0,comment_disabled:!1,importance:0},S={name:"ActivityEditor",components:{BaseSetting:v,VoteSetting:m,VoteMoreSetting:x},props:{isEdit:{type:Boolean,default:!1}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}},data:function(){return{activityPageDate:Object.assign({},w),pageLoading:!1,isFullScreen:!1,p_voteTab_activeName:"first"}},methods:{fetchData:function(t){var e=this;this.pageLoading=!0,fetchActivity(t).then((function(t){e.activityPageDate=t.data,e.pageLoading=!1}))}}},C=S,D=(a("f2db"),a("2e71"),Object(r["a"])(C,i,s,!1,null,"269407dc",null));e["a"]=D.exports},a139:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("activity-editor",{attrs:{"is-edit":!0}})},s=[],n=a("9cd2"),l={name:"hdEdit",components:{ActivityEditor:n["a"]}},c=l,o=a("2877"),r=Object(o["a"])(c,i,s,!1,null,null,null);e["default"]=r.exports},a677:function(t,e,a){},ca41:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("b775");function s(t){return Object(i["a"])({url:"/api/activity/detail/fenxiao",method:"get",params:{id:t}})}},f2db:function(t,e,a){"use strict";var i=a("019e"),s=a.n(i);s.a}}]);