"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[479,744,787,680],{4301:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var r=a(6252),l=a(3577);const o={class:"dialogHeader"},n=["id"],s={class:"card-header"};function c(e,t,a,c,p,d){const u=(0,r.up)("el-button"),i=(0,r.up)("showMemberV2"),m=(0,r.up)("ShowAllocate"),f=(0,r.up)("el-date-picker"),w=(0,r.up)("el-card"),h=(0,r.up)("el-dialog");return(0,r.wg)(),(0,r.iD)(r.HY,null,[c.isCollapse?((0,r.wg)(),(0,r.j4)(u,{key:0,type:"primary",plain:"",onClick:d.openDialog},{default:(0,r.w5)((()=>[(0,r.Uk)("...")])),_:1},8,["onClick"])):((0,r.wg)(),(0,r.j4)(u,{key:1,type:"primary",plain:"",onClick:d.openDialog},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(d.form.title),1)])),_:1},8,["onClick"])),(0,r.Wm)(h,{modelValue:p.test,"onUpdate:modelValue":t[1]||(t[1]=e=>p.test=e),"append-to-body":""},{header:(0,r.w5)((({titleId:e,titleClass:t})=>[(0,r._)("div",o,[(0,r._)("h2",{id:e,class:(0,l.C_)(t)},(0,l.zw)(d.form.title),11,n)])])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.form,((e,a,o)=>((0,r.wg)(),(0,r.j4)(w,{border:"",key:o,class:"card"},{header:(0,r.w5)((()=>[(0,r._)("div",s,(0,l.zw)(p.translateKey[a]),1)])),default:(0,r.w5)((()=>[Array.isArray(e)&&"date1"!==a?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},["Partipacants"===a?((0,r.wg)(),(0,r.j4)(i,{key:0,parentData:e},null,8,["parentData"])):((0,r.wg)(),(0,r.j4)(m,{key:1,project:d.form},null,8,["project"]))],64)):"date1"===a?((0,r.wg)(),(0,r.j4)(f,{key:1,modelValue:d.form.date1,"onUpdate:modelValue":t[0]||(t[0]=e=>d.form.date1=e),type:"daterange","range-separator":"~","start-placeholder":"Start date","end-placeholder":"End date",readonly:""},null,8,["modelValue"])):((0,r.wg)(),(0,r.iD)(r.HY,{key:2},[(0,r.Uk)((0,l.zw)(e),1)],64))])),_:2},1024)))),128))])),_:1},8,["modelValue"])],64)}var p=a(2616),d=a(5086),u=a(970),i=a(5680),m=a(2750),f={name:"DocumentedProject",components:{showMemberV2:i["default"],ShowAllocate:m["default"]},setup(){const{type:e}=(0,u.Z)(),t=(0,r.Fl)((()=>"sm"===e.value));return{isCollapse:t}},data(){return{test:!1,Hello:"Hello",ApprovalList:p.e,data:{title:"",date1:[],works:[],desc:"",Partipacants:[],update:""},translateKey:{title:"제목",date1:"진행 날짜",works:"업무",desc:"내용",Partipacants:"참가 인원",update:"날짜 업데이트",type:"종류",status:"결재 상태",writer:"작성자",master:"결재자"}}},props:{project:{type:Object,default:()=>{}}},methods:{openDialog(){this.test=!0,console.log(this.project,"project"),console.log(this.form,"form")}},computed:{form(){try{let e;if(this.project&&this.project.type)e="수정"===this.project.status?this.project:p.e.findList(this.project.title),console.log(e);else if(this.project&&this.project.title){let{work:t,project:a}=d.b.findWorkAndProject(this.project.title);e={...a,works:t},delete e.index,console.log(e)}return e}catch(e){return console.log(e),this.data}}},watch:{project:{handler(){console.log(this.project,"project")}}}},w=a(3744);const h=(0,w.Z)(f,[["render",c],["__scopeId","data-v-7cf8bf35"]]);var y=h},976:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(6252);const l={class:"buttons"},o={key:0};function n(e,t,a,n,s,c){const p=(0,r.up)("el-button"),d=(0,r.up)("el-table-column"),u=(0,r.up)("DocumentedProjectV2"),i=(0,r.up)("el-table");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",l,[(0,r.Wm)(p,{type:"primary",onClick:c.debug},{default:(0,r.w5)((()=>[(0,r.Uk)("값체크")])),_:1},8,["onClick"])]),(0,r.Wm)(i,{data:c.appData,style:{width:"100%"},border:""},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{prop:"update",label:"날짜"}),(0,r.Wm)(d,{label:"제목"},{default:(0,r.w5)((e=>[(0,r.Wm)(u,{project:e.row},null,8,["project"])])),_:1}),(0,r.Wm)(d,{prop:"status",label:"상태"}),(0,r.Wm)(d,{prop:"master",label:"결재자"}),(0,r.Wm)(d,{label:"작업"},{default:(0,r.w5)((e=>["반려"===e.row.status?((0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(p,{type:"danger",onClick:t=>c.deletePlan(e.row)},{default:(0,r.w5)((()=>[(0,r.Uk)("삭제")])),_:2},1032,["onClick"]),(0,r.Wm)(p,{type:"primary",onClick:t=>c.modifyPlan(e.row)},{default:(0,r.w5)((()=>[(0,r.Uk)(" 수정")])),_:2},1032,["onClick"])])):(0,r.kq)("",!0)])),_:1})])),_:1},8,["data"])],64)}var s=a(2616),c=a(5086),p=a(4301),d=a(844),u=a(443),i={name:"ApprovalTable",components:{DocumentedProjectV2:p["default"]},data(){return{tableData:[],ApprovalList:s.e,projectPlanList:c.b,type:"",currentMember:u.r.currentMember}},methods:{debug(){console.log(s.e.requestList,"전체"),console.log(this.appData),console.log(s.e.callRequestListByMaster("김철수"),"문제코드"),s.e.storageDebug()},deletePlan(e){d.T.confirm("정말로 삭제하시겠습니까?","경고",{confirmButtonText:"삭제",cancelButtonText:"취소",type:"warning"}).then((()=>{s.e.deleteRequestList(e),this.$message({type:"success",message:"삭제되었습니다."})})).catch((()=>{this.$message({type:"info",message:"취소되었습니다."})}))},modifyPlan(e){this.$emit("modifyPlan",e)}},watch:{currentMember(){this.currentMember=u.r.currentMember}},computed:{appData(){return Array.isArray(this.ApprovalList.requestList)?this.ApprovalList.findRequestListByWriter(this.currentMember):[]}}},m=a(3744);const f=(0,m.Z)(i,[["render",n],["__scopeId","data-v-12e856b9"]]);var w=f},5680:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(6252);function l(e,t,a,l,o,n){const s=(0,r.up)("el-table-column"),c=(0,r.up)("el-table");return(0,r.wg)(),(0,r.j4)(c,{data:a.parentData,border:"",onSelectionChange:n.handleSelect,"table-layout":o.tableLayout},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{prop:"name",label:"Name"}),(0,r.Wm)(s,{prop:"job",label:"Job"}),(0,r.Wm)(s,{prop:"rank",label:"Rank"})])),_:1},8,["data","onSelectionChange","table-layout"])}var o=a(443),n={name:"projectPlan",props:{parentData:{type:Array,default:()=>[]}},data(){return{currentProject:null,tableData:[],MemberList:o.r,tableLayout:"auto"}},methods:{handleSelect(e){this.selectedRow=e}}},s=a(3744);const c=(0,s.Z)(n,[["render",l]]);var p=c}}]);
//# sourceMappingURL=479.5edd4667.js.map