(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dcc5963"],{"1c64":function(t,e,a){},"1cc6":function(t,e,a){"use strict";var i=a("1c64"),n=a.n(i);n.a},7770:function(t,e,a){},"7dd9":function(t,e,a){"use strict";var i=a("7770"),n=a.n(i);n.a},bd16:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"articlesDraft-container"},[a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name+"("+t.key+")",value:t.key}})}),1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n      搜索\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("\n      导出EXCEL\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:"ID",prop:"id",sortable:"custom",align:"center",width:"80","class-name":t.getSortClass("id")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"图片",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"标题","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",{staticClass:"link-type"},[t._v(t._s(i.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发布日期",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(t._f("parseTime")(i.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"阅读量",align:"center",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[i.pageviews?a("span",{staticClass:"link-type",on:{click:function(e){return t.handleFetchPv(i.pageviews)}}},[t._v(t._s(i.pageviews))]):a("span",[t._v("0")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(i.status)}},[t._v("\n          "+t._s(t._f("statusName")(i.status))+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v("\n          编辑\n        ")]),t._v(" "),"published"!=i.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handleModifyStatus(i,"published")}}},[t._v("\n          发布\n        ")]):a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleModifyStatus(i,"draft")}}},[t._v("\n          下架\n        ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"}},[t._v("\n         删除\n        ")])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"Type",prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Date",prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Title",prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Status"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Imp"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Remark"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        Confirm\n      ")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},n=[],s=(a("55dd"),a("ac4d"),a("8a81"),a("ac6a"),a("b775"));function l(t){return Object(s["a"])({url:"/article/list",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function o(t){return Object(s["a"])({url:"/article/create",method:"post",data:t})}function u(t){return Object(s["a"])({url:"/article/update",method:"post",data:t})}var c=a("ed08"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},p=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var m=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function f(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function h(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function g(t,e,a){var i=h(),n=t-i,s=20,l=0;e="undefined"===typeof e?500:e;var r=function t(){l+=s;var r=Math.easeInOutQuad(l,i,n,e);f(r),l<e?m(t):a&&"function"===typeof a&&a()};r()}var y={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&g(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&g(0,800)}}},v=y,b=(a("1cc6"),a("2877")),_=Object(b["a"])(v,d,p,!1,null,"f3b72548",null),k=_.exports,w=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],S=w.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),x={name:"articlesManage",components:{Pagination:k},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},statusName:function(t){var e={published:"已发布",draft:"未发布",deleted:"下架"};return e[t]},typeFilter:function(t){return S[t]}},data:function(){return{tableData:[{id:"1",img:"",title:"王小虎",readnum:555,pushtime:"2016-05-06",status:"已发布"},{id:"1",title:"吴小虎",readnum:555,pushtime:"2016-07-02",status:"已发布"},{id:"1",title:"张小虎",readnum:555,pushtime:"2016-06-02",status:"已发布"},{id:"1",title:"黎小虎",readnum:555,pushtime:"2016-05-07",status:"已发布"}],list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:w,statusOptions:["上传","下架"],temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,l(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,console.log(t.list),setTimeout(function(){t.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作Success",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},createData:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",o(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},updateData:function(){var t=this;this.$refs["dataForm"].validate(function(e){if(e){var a=Object.assign({},t.temp);a.timestamp=+new Date(a.timestamp),u(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var n,s=t.list[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var l=n.value;if(l.id===t.temp.id){var r=t.list.indexOf(l);t.list.splice(r,1,t.temp);break}}}catch(o){a=!0,i=o}finally{try{e||null==s.return||s.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;r(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-c7e393f8"),a.e("chunk-b27dbcdc"),a.e("chunk-58293907")]).then(a.bind(null,"4bf8d")).then(function(e){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],n=t.formatJson(i,t.list);e.export_json_to_excel({header:a,data:n,filename:"table-list"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(c["c"])(e[t]):e[t]})})},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":e==="-".concat(t)?"descending":""}}},C=x,F=(a("7dd9"),Object(b["a"])(C,i,n,!1,null,"60bf3dd6",null));e["default"]=F.exports}}]);