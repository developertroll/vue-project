"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[524,744,787,680],{77:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var o=a(6252),r=a(3577);const l={class:"buttons"},n={key:1};function s(e,t,a,s,p,i){const c=(0,o.up)("el-button"),u=(0,o.up)("el-table-column"),d=(0,o.up)("DocumentedProjectV2"),m=(0,o.up)("el-table");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",l,[(0,o.Wm)(c,{type:"primary",onClick:t[0]||(t[0]=e=>i.approvalSubmit("승인"))},{default:(0,o.w5)((()=>[(0,o.Uk)("승인")])),_:1}),(0,o.Wm)(c,{type:"danger",onClick:t[1]||(t[1]=e=>i.approvalSubmit("반려"))},{default:(0,o.w5)((()=>[(0,o.Uk)("반려")])),_:1}),(0,o.Wm)(c,{type:"info",onClick:t[2]||(t[2]=e=>i.approvalSubmit("취소"))},{default:(0,o.w5)((()=>[(0,o.Uk)("취소")])),_:1}),(0,o.Wm)(c,{type:"primary",onClick:i.debug},{default:(0,o.w5)((()=>[(0,o.Uk)("값체크")])),_:1},8,["onClick"])]),(0,o.Wm)(m,{data:p.appData,onSelectionChange:i.handleSelect,border:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{type:"selection",width:"55"}),(0,o.Wm)(u,{prop:"type",label:"종류"}),(0,o.Wm)(u,{prop:"update",label:"날짜"}),(0,o.Wm)(u,{label:"제목"},{default:(0,o.w5)((e=>["계획"===e.row.type?((0,o.wg)(),(0,o.j4)(d,{key:0,project:e.row},null,8,["project"])):((0,o.wg)(),(0,o.iD)("div",n,(0,r.zw)(e.row.title),1))])),_:1}),(0,o.Wm)(u,{prop:"status",label:"상태"})])),_:1},8,["data","onSelectionChange"])])}var p=a(2616),i=a(4301),c=a(844),u=a(443),d={name:"ApprovalTable",components:{DocumentedProjectV2:i["default"]},data(){return{tableData:[],selectedRow:[],type:"",currentMember:u.r.currentMember,appData:[]}},methods:{debug(){console.log(this.currentMember),console.log(this.appData,"appData")},handleSelect(e){this.selectedRow=e},approvalSubmit(e){console.log(e),c.T.confirm("선택된 요청들을 "+e+"하시겠습니까?","info",{confirmButtonText:"승인",cancelButtonText:"취소",type:"info"}).then((()=>{for(const t of this.selectedRow){let a=this.ApprovalList.findList(t);"수정"===a.status?(this.ApprovalList.changeStatus(a,e),this.ApprovalList.modifyCompletion(a)):"승인"===e?(this.ApprovalList.changeStatus(a,e),this.ApprovalList.completion(a)):this.ApprovalList.changeStatus(a,e)}this.$message({type:"success",message:"처리되었습니다!"})})).catch((()=>{this.$message({type:"info",message:"취소되었습니다"})}))},requestData(){return Array.isArray(p.e.requestList)?(console.log(p.e.callRequestListByMaster(this.currentMember)),p.e.callRequestListByMaster(this.currentMember).map((e=>"업무"===e.type?{type:e.type,update:e.update,title:`${e.name} ${e.position}업무 보고`,status:e.status,name:e.name,parent:e.parent}:{type:e.type,update:e.update,title:e.title,status:e.status}))):[]}},mounted(){this.appData=this.requestData()},watch:{currentMember(){this.currentMember=u.r.currentMember},"ApprovalList.requestList":{handler(){this.appData=this.requestData()},deep:!0}}},m=a(3744);const h=(0,m.Z)(d,[["render",s],["__scopeId","data-v-44836668"]]);var f=h},4301:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var o=a(6252),r=a(3577);const l={class:"dialogHeader"},n=["id"],s={class:"card-header"};function p(e,t,a,p,i,c){const u=(0,o.up)("el-button"),d=(0,o.up)("showMemberV2"),m=(0,o.up)("ShowAllocate"),h=(0,o.up)("el-date-picker"),f=(0,o.up)("el-card"),y=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)(o.HY,null,[p.isCollapse?((0,o.wg)(),(0,o.j4)(u,{key:0,type:"primary",plain:"",onClick:c.openDialog},{default:(0,o.w5)((()=>[(0,o.Uk)("...")])),_:1},8,["onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:1,type:"primary",plain:"",onClick:c.openDialog},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(c.form.title),1)])),_:1},8,["onClick"])),(0,o.Wm)(y,{modelValue:i.test,"onUpdate:modelValue":t[1]||(t[1]=e=>i.test=e),"append-to-body":""},{header:(0,o.w5)((({titleId:e,titleClass:t})=>[(0,o._)("div",l,[(0,o._)("h2",{id:e,class:(0,r.C_)(t)},(0,r.zw)(c.form.title),11,n)])])),default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.form,((e,a,l)=>((0,o.wg)(),(0,o.j4)(f,{border:"",key:l,class:"card"},{header:(0,o.w5)((()=>[(0,o._)("div",s,(0,r.zw)(i.translateKey[a]),1)])),default:(0,o.w5)((()=>[Array.isArray(e)&&"date1"!==a?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},["Partipacants"===a?((0,o.wg)(),(0,o.j4)(d,{key:0,parentData:e},null,8,["parentData"])):((0,o.wg)(),(0,o.j4)(m,{key:1,project:c.form},null,8,["project"]))],64)):"date1"===a?((0,o.wg)(),(0,o.j4)(h,{key:1,modelValue:c.form.date1,"onUpdate:modelValue":t[0]||(t[0]=e=>c.form.date1=e),type:"daterange","range-separator":"~","start-placeholder":"Start date","end-placeholder":"End date",readonly:""},null,8,["modelValue"])):((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[(0,o.Uk)((0,r.zw)(e),1)],64))])),_:2},1024)))),128))])),_:1},8,["modelValue"])],64)}var i=a(2616),c=a(5086),u=a(970),d=a(5680),m=a(2750),h={name:"DocumentedProject",components:{showMemberV2:d["default"],ShowAllocate:m["default"]},setup(){const{type:e}=(0,u.Z)(),t=(0,o.Fl)((()=>"sm"===e.value));return{isCollapse:t}},data(){return{test:!1,Hello:"Hello",ApprovalList:i.e,data:{title:"",date1:[],works:[],desc:"",Partipacants:[],update:""},translateKey:{title:"제목",date1:"진행 날짜",works:"업무",desc:"내용",Partipacants:"참가 인원",update:"날짜 업데이트",type:"종류",status:"결재 상태",writer:"작성자",master:"결재자"}}},props:{project:{type:Object,default:()=>{}}},methods:{openDialog(){this.test=!0,console.log(this.project,"project"),console.log(this.form,"form")}},computed:{form(){try{let e;if(this.project&&this.project.type)e="수정"===this.project.status?this.project:i.e.findList(this.project.title),console.log(e);else if(this.project&&this.project.title){let{work:t,project:a}=c.b.findWorkAndProject(this.project.title);e={...a,works:t},delete e.index,console.log(e)}return e}catch(e){return console.log(e),this.data}}},watch:{project:{handler(){console.log(this.project,"project")}}}},f=a(3744);const y=(0,f.Z)(h,[["render",p],["__scopeId","data-v-7cf8bf35"]]);var w=y},5680:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var o=a(6252);function r(e,t,a,r,l,n){const s=(0,o.up)("el-table-column"),p=(0,o.up)("el-table");return(0,o.wg)(),(0,o.j4)(p,{data:a.parentData,border:"",onSelectionChange:n.handleSelect,"table-layout":l.tableLayout},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{prop:"name",label:"Name"}),(0,o.Wm)(s,{prop:"job",label:"Job"}),(0,o.Wm)(s,{prop:"rank",label:"Rank"})])),_:1},8,["data","onSelectionChange","table-layout"])}var l=a(443),n={name:"projectPlan",props:{parentData:{type:Array,default:()=>[]}},data(){return{currentProject:null,tableData:[],MemberList:l.r,tableLayout:"auto"}},methods:{handleSelect(e){this.selectedRow=e}}},s=a(3744);const p=(0,s.Z)(n,[["render",r]]);var i=p}}]);
//# sourceMappingURL=524.c188530d.js.map