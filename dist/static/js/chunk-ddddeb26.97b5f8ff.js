(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddddeb26"],{"093d":function(t,e,n){"use strict";var l=n("5610"),i=n.n(l);i.a},"4af1":function(t,e,n){},5610:function(t,e,n){},7674:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"20px 0","font-size":"13px"}},[n("div",[n("el-switch",{attrs:{"active-color":"#0070e0",size:"small"},model:{value:t.isFenxiao,callback:function(e){t.isFenxiao=e},expression:"isFenxiao"}}),t._v(" "),n("span",{staticStyle:{"padding-left":"8px"}},[t._v("开启活动分销")]),t._v(" "),n("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"18px"}})],1),t._v(" "),t.isFenxiao?n("div",{staticClass:"fenxiao-container"},[n("el-row",{staticClass:"top",attrs:{type:"flex"}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[t._v("\n\t\t\t\t\t佣金推广："),n("span",[t._v("5元/单")])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[t._v("\n\t\t\t\t\t参与次数/总次数："),n("span",[t._v("10/50")])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogSettingVisible=!0}}},[t._v("分销设置")])],1)])],1),t._v(" "),n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{attrs:{size:"small",loading:t.downloadLoading},on:{click:t.handleDownload}},[t._v("导出分销数据")])],1),t._v(" "),n("el-row",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading...",border:"",fit:"","highlight-current-row":"","header-cell-style":{"background-color":"#f7f9fa",color:"#637282;"},"default-sort":{prop:"success_number",order:"descending"}}},[n("el-table-column",{attrs:{label:"排名",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t          "+t._s(e.$index)+"\n\t\t\t        ")]}}],null,!1,2830924835)}),t._v(" "),n("el-table-column",{attrs:{label:"微信昵称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t          "+t._s(e.row.name)+"\n\t\t\t        ")]}}],null,!1,3293951386)}),t._v(" "),n("el-table-column",{attrs:{label:"邀请好友数",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.tel))])]}}],null,!1,2740850913)}),t._v(" "),n("el-table-column",{attrs:{label:"成功分销",width:"115"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t          "+t._s(e.row.level)+"\n\t\t\t        ")]}}],null,!1,2843191787)}),t._v(" "),n("el-table-column",{attrs:{label:"已获佣金",width:"115"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t          "+t._s(e.row.level)+"\n\t\t\t        ")]}}],null,!1,2843191787)}),t._v(" "),n("el-table-column",{attrs:{label:"参与时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}],null,!1,477974845)}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t          "+t._s(e.row.level)+"\n\t\t\t        ")]}}],null,!1,2843191787)}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleView(e.$index,e.row)}}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}],null,!1,2748323962)})],1)],1)],1):t._e(),t._v(" "),n("el-dialog",{attrs:{title:"分销设置",visible:t.dialogSettingVisible,width:"600px","modal-append-to-body":!1,"append-to-body":!0},on:{"update:visible":function(e){t.dialogSettingVisible=e}}},[n("el-form",{attrs:{model:t.setting}},[n("el-form-item",{attrs:{label:"每份佣金","label-width":"120px"}},[n("el-input",{staticStyle:{display:"inline-block",width:"240px","margin-right":"10px"},attrs:{autocomplete:"off"},model:{value:t.setting.money,callback:function(e){t.$set(t.setting,"money",e)},expression:"setting.money"}}),n("span",[t._v("元/单")])],1),t._v(" "),n("el-form-item",{attrs:{label:"分销数量","label-width":"120px"}},[n("el-input",{staticStyle:{display:"inline-block",width:"240px","margin-right":"10px"},attrs:{autocomplete:"off"},model:{value:t.setting.number,callback:function(e){t.$set(t.setting,"number",e)},expression:"setting.number"}}),n("span",[t._v("单")])],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogSettingVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSetting}},[t._v("确 定")])],1)],1)],1)},i=[],a=n("ca41"),o=(n("ed08"),{data:function(){return{isFenxiao:!0,list:null,listLoading:!1,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx",dialogSettingVisible:!1,setting:{money:"0",number:"0"}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(a["a"])().then((function(e){t.list=e.data.items,t.listLoading=!1}))},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e("chunk-595f8a56"),n.e("chunk-58293907")]).then(n.bind(null,"4bf8d")).then((function(e){var n=["Id","会员名","电话","状态","注册时间"],l=["id","namne","tel","status","display_time"],i=t.list,a=t.formatJson(l,i);e.export_json_to_excel({header:n,data:a,filename:t.filename,autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1}))},handleSetting:function(){this.dialogSettingVisible=!1,alert("保存数据")}}}),s=o,d=(n("093d"),n("d00a"),n("2877")),r=Object(d["a"])(s,l,i,!1,null,"bce45dea",null);e["default"]=r.exports},ca41:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var l=n("b775");function i(t){return Object(l["a"])({url:"/api/activity/detail/fenxiao",method:"get",params:{id:t}})}},d00a:function(t,e,n){"use strict";var l=n("4af1"),i=n.n(l);i.a}}]);