"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[619,744,436,1,533,130,787,680],{4301:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var a=r(6252),o=r(3577);const l={class:"dialogHeader"},n=["id"],c={class:"card-header"};function s(e,t,r,s,m,u){const d=(0,a.up)("el-button"),p=(0,a.up)("showMemberV2"),i=(0,a.up)("ShowAllocate"),b=(0,a.up)("el-date-picker"),f=(0,a.up)("el-card"),h=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s.isCollapse?((0,a.wg)(),(0,a.j4)(d,{key:0,type:"primary",plain:"",onClick:u.openDialog},{default:(0,a.w5)((()=>[(0,a.Uk)("...")])),_:1},8,["onClick"])):((0,a.wg)(),(0,a.j4)(d,{key:1,type:"primary",plain:"",onClick:u.openDialog},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(u.form.title),1)])),_:1},8,["onClick"])),(0,a.Wm)(h,{modelValue:m.test,"onUpdate:modelValue":t[1]||(t[1]=e=>m.test=e),"append-to-body":""},{header:(0,a.w5)((({titleId:e,titleClass:t})=>[(0,a._)("div",l,[(0,a._)("h2",{id:e,class:(0,o.C_)(t)},(0,o.zw)(u.form.title),11,n)])])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.form,((e,r,l)=>((0,a.wg)(),(0,a.j4)(f,{border:"",key:l,class:"card"},{header:(0,a.w5)((()=>[(0,a._)("div",c,(0,o.zw)(m.translateKey[r]),1)])),default:(0,a.w5)((()=>[Array.isArray(e)&&"date1"!==r?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},["Partipacants"===r?((0,a.wg)(),(0,a.j4)(p,{key:0,parentData:e},null,8,["parentData"])):((0,a.wg)(),(0,a.j4)(i,{key:1,project:u.form},null,8,["project"]))],64)):"date1"===r?((0,a.wg)(),(0,a.j4)(b,{key:1,modelValue:u.form.date1,"onUpdate:modelValue":t[0]||(t[0]=e=>u.form.date1=e),type:"daterange","range-separator":"~","start-placeholder":"Start date","end-placeholder":"End date",readonly:""},null,8,["modelValue"])):((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[(0,a.Uk)((0,o.zw)(e),1)],64))])),_:2},1024)))),128))])),_:1},8,["modelValue"])],64)}var m=r(2616),u=r(5086),d=r(970),p=r(5680),i=r(2750),b={name:"DocumentedProject",components:{showMemberV2:p["default"],ShowAllocate:i["default"]},setup(){const{type:e}=(0,d.Z)(),t=(0,a.Fl)((()=>"sm"===e.value));return{isCollapse:t}},data(){return{test:!1,Hello:"Hello",ApprovalList:m.e,data:{title:"",date1:[],works:[],desc:"",Partipacants:[],update:""},translateKey:{title:"제목",date1:"진행 날짜",works:"업무",desc:"내용",Partipacants:"참가 인원",update:"날짜 업데이트",type:"종류",status:"결재 상태",writer:"작성자",master:"결재자"}}},props:{project:{type:Object,default:()=>{}}},methods:{openDialog(){this.test=!0,console.log(this.project,"project"),console.log(this.form,"form")}},computed:{form(){try{let e;if(this.project&&this.project.type)e="수정"===this.project.status?this.project:m.e.findList(this.project.title),console.log(e);else if(this.project&&this.project.title){let{work:t,project:r}=u.b.findWorkAndProject(this.project.title);e={...r,works:t},delete e.index,console.log(e)}return e}catch(e){return console.log(e),this.data}}},watch:{project:{handler(){console.log(this.project,"project")}}}},f=r(3744);const h=(0,f.Z)(b,[["render",s],["__scopeId","data-v-7cf8bf35"]]);var w=h},5436:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(6252),o=r(3577);function l(e,t,r,l,n,c){const s=(0,a.up)("el-descriptions-item"),m=(0,a.up)("el-descriptions");return(0,a.wg)(),(0,a.j4)(m,{title:r.memberName.name,column:2,border:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.memberInfo,((e,t)=>((0,a.wg)(),(0,a.j4)(s,{key:t,label:n.translateKey[t],"label-align":"left"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["title"])}var n=r(443),c={name:"memberInfo",props:{memberName:{type:Object,required:!0}},computed:{memberInfo(){const e=this.memberName;return{name:e.name,rank:e.rank,job:e.job,phone:e.phone,email:e.email}}},data(){return{translateKey:n.r.memberKeyTranslate}}},s=r(3744);const m=(0,s.Z)(c,[["render",l]]);var u=m},6329:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(6252);function o(e,t,r,o,l,n){const c=(0,a.up)("memberInfo"),s=(0,a.up)("personalWork");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c,{memberName:r.memberName},null,8,["memberName"]),(0,a.Wm)(s,{memberName:r.memberName},null,8,["memberName"])])}var l=r(7902),n=r(5436),c={name:"memberPage",props:{memberName:{type:Object,required:!0,default:()=>{}}},components:{personalWork:l["default"],memberInfo:n["default"]}},s=r(3744);const m=(0,s.Z)(c,[["render",o]]);var u=m},7902:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var a=r(6252);const o={key:1};function l(e,t,r,l,n,c){const s=(0,a.up)("DocumentedProjectV2"),m=(0,a.up)("el-table-column"),u=(0,a.up)("createWorkProgress"),d=(0,a.up)("el-table");return(0,a.wg)(),(0,a.j4)(d,{data:c.projectTable},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{props:"project",label:"프로젝트"},{default:(0,a.w5)((e=>[(0,a.Wm)(s,{project:c.projectData(e.row)},null,8,["project"])])),_:1}),(0,a.Wm)(m,{prop:"position",label:"업무분야"}),(0,a.Wm)(m,{prop:"desc",label:"업무내용"}),(0,a.Wm)(m,{prop:"deadLine",label:"마감일"}),(0,a.Wm)(m,{prop:"status",label:"상태"}),c.personal?((0,a.wg)(),(0,a.j4)(m,{key:0,label:"작업"},{default:(0,a.w5)((e=>["진행중"===e.row.status?((0,a.wg)(),(0,a.j4)(u,{key:0,work:e.row,project:c.projectData(e.row)},null,8,["work","project"])):((0,a.wg)(),(0,a.iD)("div",o,"작업완료"))])),_:1})):(0,a.kq)("",!0)])),_:1},8,["data"])}var n=r(5086),c=r(443),s=r(4301),m=r(352),u={name:"personalWork",components:{DocumentedProjectV2:s["default"],createWorkProgress:m["default"]},props:{memberName:{type:Object,required:!0}},computed:{memberData(){return this.memberName},projectTable(){const e=n.b.findWorkByName(this.memberName.name);return console.log(e),e},personal(){return this.memberName.name===c.r.currentMember}},methods:{projectData(e){const t=n.b.findProjectByWork(e);return console.log(t),t}}},d=r(3744);const p=(0,d.Z)(u,[["render",l]]);var i=p},2353:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=r(6252);function o(e,t,r,o,l,n){const c=(0,a.up)("orgTree"),s=(0,a.up)("el-card"),m=(0,a.up)("el-col"),u=(0,a.up)("memberPage"),d=(0,a.up)("el-row");return(0,a.wg)(),(0,a.j4)(d,{class:"card-box"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{span:4},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{shadow:"never",class:"card-box-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{onNodeClick:n.setMember},null,8,["onNodeClick"])])),_:1})])),_:1}),(0,a.Wm)(m,{span:20,class:"card-box-1"},{default:(0,a.w5)((()=>[l.memberCheck?((0,a.wg)(),(0,a.j4)(s,{key:0,shadow:"never"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{memberName:l.member},null,8,["memberName"])])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})}var l=r(130),n=r(6329),c={name:"orgChart",components:{orgTree:l["default"],memberPage:n["default"]},methods:{setMember(e){console.log(e),e.name&&e.rank&&(this.member=e,this.memberCheck=!0,console.log(this.member))}},data(){return{member:[],memberCheck:!1}}},s=r(3744);const m=(0,s.Z)(c,[["render",o],["__scopeId","data-v-66fb0969"]]);var u=m},130:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(6252);function o(e,t,r,o,l,n){const c=(0,a.up)("el-tree");return(0,a.wg)(),(0,a.j4)(c,{data:n.treeData,onNodeClick:n.onNodeClick},null,8,["data","onNodeClick"])}r(7658);var l=r(443),n={name:"orgTree",data(){return{MemberList:l.r}},computed:{treeData(){l.r.initRankList();const e=[];for(const t of this.MemberList.RankList){const r={label:t.team,children:[]};t.children.forEach((e=>{r.children.push({label:e.name+"("+e.rank+")"})})),e.push(r)}return e}},methods:{onNodeClick(e,t){let r;if(console.log(t),0!==t.childNodes.length)return void console.log("부모 노드 선택");r=e.label;const a=r.split("(")[0];console.log(a);const o=r.split("(")[1].split(")")[0];if(console.log(o),!a||!o)return;const n=l.r.searchWithNameRank(a,o);console.log(n),this.$emit("node-click",n)}}},c=r(3744);const s=(0,c.Z)(n,[["render",o]]);var m=s},5680:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(6252);function o(e,t,r,o,l,n){const c=(0,a.up)("el-table-column"),s=(0,a.up)("el-table");return(0,a.wg)(),(0,a.j4)(s,{data:r.parentData,border:"",onSelectionChange:n.handleSelect,"table-layout":l.tableLayout},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{prop:"name",label:"Name"}),(0,a.Wm)(c,{prop:"job",label:"Job"}),(0,a.Wm)(c,{prop:"rank",label:"Rank"})])),_:1},8,["data","onSelectionChange","table-layout"])}var l=r(443),n={name:"projectPlan",props:{parentData:{type:Array,default:()=>[]}},data(){return{currentProject:null,tableData:[],MemberList:l.r,tableLayout:"auto"}},methods:{handleSelect(e){this.selectedRow=e}}},c=r(3744);const s=(0,c.Z)(n,[["render",o]]);var m=s}}]);
//# sourceMappingURL=619.65ce84f4.js.map