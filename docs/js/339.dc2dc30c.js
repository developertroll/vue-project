"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[339,744,533,188,787,680],{4301:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var a=r(6252),o=r(3577);const l={class:"dialogHeader"},n=["id"],c={class:"card-header"};function p(e,t,r,p,u,s){const d=(0,a.up)("el-button"),m=(0,a.up)("showMemberV2"),i=(0,a.up)("ShowAllocate"),b=(0,a.up)("el-date-picker"),f=(0,a.up)("el-card"),w=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p.isCollapse?((0,a.wg)(),(0,a.j4)(d,{key:0,type:"primary",plain:"",onClick:s.openDialog},{default:(0,a.w5)((()=>[(0,a.Uk)("...")])),_:1},8,["onClick"])):((0,a.wg)(),(0,a.j4)(d,{key:1,type:"primary",plain:"",onClick:s.openDialog},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(s.form.title),1)])),_:1},8,["onClick"])),(0,a.Wm)(w,{modelValue:u.test,"onUpdate:modelValue":t[1]||(t[1]=e=>u.test=e),"append-to-body":""},{header:(0,a.w5)((({titleId:e,titleClass:t})=>[(0,a._)("div",l,[(0,a._)("h2",{id:e,class:(0,o.C_)(t)},(0,o.zw)(s.form.title),11,n)])])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.form,((e,r,l)=>((0,a.wg)(),(0,a.j4)(f,{border:"",key:l,class:"card"},{header:(0,a.w5)((()=>[(0,a._)("div",c,(0,o.zw)(u.translateKey[r]),1)])),default:(0,a.w5)((()=>[Array.isArray(e)&&"date1"!==r?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},["Partipacants"===r?((0,a.wg)(),(0,a.j4)(m,{key:0,parentData:e},null,8,["parentData"])):((0,a.wg)(),(0,a.j4)(i,{key:1,project:s.form},null,8,["project"]))],64)):"date1"===r?((0,a.wg)(),(0,a.j4)(b,{key:1,modelValue:s.form.date1,"onUpdate:modelValue":t[0]||(t[0]=e=>s.form.date1=e),type:"daterange","range-separator":"~","start-placeholder":"Start date","end-placeholder":"End date",readonly:""},null,8,["modelValue"])):((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[(0,a.Uk)((0,o.zw)(e),1)],64))])),_:2},1024)))),128))])),_:1},8,["modelValue"])],64)}var u=r(2616),s=r(5086),d=r(970),m=r(5680),i=r(2750),b={name:"DocumentedProject",components:{showMemberV2:m["default"],ShowAllocate:i["default"]},setup(){const{type:e}=(0,d.Z)(),t=(0,a.Fl)((()=>"sm"===e.value));return{isCollapse:t}},data(){return{test:!1,Hello:"Hello",ApprovalList:u.e,data:{title:"",date1:[],works:[],desc:"",Partipacants:[],update:""},translateKey:{title:"제목",date1:"진행 날짜",works:"업무",desc:"내용",Partipacants:"참가 인원",update:"날짜 업데이트",type:"종류",status:"결재 상태",writer:"작성자",master:"결재자"}}},props:{project:{type:Object,default:()=>{}}},methods:{openDialog(){this.test=!0,console.log(this.project,"project"),console.log(this.form,"form")}},computed:{form(){try{let e;if(this.project&&this.project.type)e="수정"===this.project.status?this.project:u.e.findList(this.project.title),console.log(e);else if(this.project&&this.project.title){let{work:t,project:r}=s.b.findWorkAndProject(this.project.title);e={...r,works:t},delete e.index,console.log(e)}return e}catch(e){return console.log(e),this.data}}},watch:{project:{handler(){console.log(this.project,"project")}}}},f=r(3744);const w=(0,f.Z)(b,[["render",p],["__scopeId","data-v-7cf8bf35"]]);var j=w},7902:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var a=r(6252);const o={key:1};function l(e,t,r,l,n,c){const p=(0,a.up)("DocumentedProjectV2"),u=(0,a.up)("el-table-column"),s=(0,a.up)("createWorkProgress"),d=(0,a.up)("el-table");return(0,a.wg)(),(0,a.j4)(d,{data:c.projectTable},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{props:"project",label:"프로젝트"},{default:(0,a.w5)((e=>[(0,a.Wm)(p,{project:c.projectData(e.row)},null,8,["project"])])),_:1}),(0,a.Wm)(u,{prop:"position",label:"업무분야"}),(0,a.Wm)(u,{prop:"desc",label:"업무내용"}),(0,a.Wm)(u,{prop:"deadLine",label:"마감일"}),(0,a.Wm)(u,{prop:"status",label:"상태"}),c.personal?((0,a.wg)(),(0,a.j4)(u,{key:0,label:"작업"},{default:(0,a.w5)((e=>["진행중"===e.row.status?((0,a.wg)(),(0,a.j4)(s,{key:0,work:e.row,project:c.projectData(e.row)},null,8,["work","project"])):((0,a.wg)(),(0,a.iD)("div",o,"작업완료"))])),_:1})):(0,a.kq)("",!0)])),_:1},8,["data"])}var n=r(5086),c=r(443),p=r(4301),u=r(352),s={name:"personalWork",components:{DocumentedProjectV2:p["default"],createWorkProgress:u["default"]},props:{memberName:{type:Object,required:!0}},computed:{memberData(){return this.memberName},projectTable(){const e=n.b.findWorkByName(this.memberName.name);return console.log(e),e},personal(){return this.memberName.name===c.r.currentMember}},methods:{projectData(e){const t=n.b.findProjectByWork(e);return console.log(t),t}}},d=r(3744);const m=(0,d.Z)(s,[["render",l]]);var i=m},7188:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var a=r(6252),o=r(3577);function l(e,t,r,l,n,c){const p=(0,a.up)("el-descriptions-item"),u=(0,a.up)("el-descriptions");return(0,a.wg)(),(0,a.j4)(u,{column:1,border:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.memberInfo,((e,t)=>((0,a.wg)(),(0,a.j4)(p,{key:t,label:n.translateKey[t],"label-align":"left"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e),1)])),_:2},1032,["label"])))),128))])),_:1})}var n=r(443),c={name:"memberInfo",props:{memberName:{type:Object,required:!0}},computed:{memberInfo(){return this.memberName}},data(){return{translateKey:n.r.memberKeyTranslate}}},p=r(3744);const u=(0,p.Z)(c,[["render",l]]);var s=u},8080:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=r(6252);function o(e,t,r,o,l,n){const c=(0,a.up)("privateInfo"),p=(0,a.up)("personalWork");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c,{memberName:n.memberName},null,8,["memberName"]),(0,a.Wm)(p,{memberName:n.memberName},null,8,["memberName"])])}var l=r(7902),n=r(7188),c=r(443),p={name:"memberPage",computed:{memberName(){const e=c.r.currentMember;return c.r.findMemberByName(e)}},components:{personalWork:l["default"],privateInfo:n["default"]}},u=r(3744);const s=(0,u.Z)(p,[["render",o]]);var d=s},5680:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(6252);function o(e,t,r,o,l,n){const c=(0,a.up)("el-table-column"),p=(0,a.up)("el-table");return(0,a.wg)(),(0,a.j4)(p,{data:r.parentData,border:"",onSelectionChange:n.handleSelect,"table-layout":l.tableLayout},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{prop:"name",label:"Name"}),(0,a.Wm)(c,{prop:"job",label:"Job"}),(0,a.Wm)(c,{prop:"rank",label:"Rank"})])),_:1},8,["data","onSelectionChange","table-layout"])}var l=r(443),n={name:"projectPlan",props:{parentData:{type:Array,default:()=>[]}},data(){return{currentProject:null,tableData:[],MemberList:l.r,tableLayout:"auto"}},methods:{handleSelect(e){this.selectedRow=e}}},c=r(3744);const p=(0,c.Z)(n,[["render",o]]);var u=p}}]);
//# sourceMappingURL=339.dc2dc30c.js.map