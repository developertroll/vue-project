"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[947],{267:function(t,e,i){i.d(e,{o:function(){return a}});i(7658);var s=i(4870),r=i(5086),n=i(443),o=i(2596);const a=(0,s.qj)({eventList:localStorage.getItem("eventList")?JSON.parse(localStorage.getItem("eventList")):[],detailList:localStorage.getItem("detailList")?JSON.parse(localStorage.getItem("detailList")):[],eventTemplate:{title:"",start:"",end:"",id:""},detailTemplate:{id:"",people:[],description:"",location:""},recurringEventTemplate:{groupId:"",startTime:"",endTime:"",title:"",id:""},memberSpecificEventList:[],setList(t){const e=r.b.findWorkByName(t),i=[];e.forEach((t=>{const e=r.b.findProjectByWork(t);i.push({title:e.title+" - "+t.position+" 마감일",end:t.deadLine,start:t.deadLine,allDay:!0,backgroundColor:"#f56954",type:"work",id:-1})})),this.memberSpecificEventList=i},saveList(t){void 0===t.id&&(t.id=this.eventList.length+1),o.x.saveList(t,"일정",t.member,n.r.currentMember),this.eventList.push(t),localStorage.setItem("eventList",JSON.stringify(this.eventList))},setEventByProjects(){const t=r.b.callPlanList(),e=t.map((t=>({title:t.title,start:t.date1[0],end:t.date1[1],projectIdx:t.index,id:this.eventList.length+1,people:t.Partipacants})));return e}})},5086:function(t,e,i){i.d(e,{b:function(){return l}});i(7658);var s=i(4870),r=i(6797),n=i.n(r),o=i(2596),a=i(443);const l=(0,s.qj)({List:JSON.parse(localStorage.getItem("projectPlanList"))||[],workList:JSON.parse(localStorage.getItem("workList"))||[],finishedList:JSON.parse(localStorage.getItem("finishedList"))||[],saveList(t,e=void 0){if(console.log(t),void 0!==e){const i=e,s={works:t.works,parentIdx:i};delete t.works,this.List[i]={...t,index:i,status:"진행"},console.log(s),this.workList.push(s)}else{const e=this.List.length,i={works:t.works,parentIdx:e};delete t.works,this.List.push({...t,index:e,status:"진행"}),console.log(i),this.workList.push(i)}o.x.saveList(t,"프로젝트",t.Partipacants,a.r.currentMember),this.setCookies()},callWorkList(t){const e=this.workList.find((e=>e.parentIdx===t.index));return e},callPlanList(){const t=this.List;console.log(t,"rawData");const e=t.filter((t=>"취소"!==t.status));return console.log(e,"result"),e},callList(){const t=this.List;console.log(t,"rawData");const e=t.filter((t=>"진행"===t.status&&t.date1[0]<n()().format("YYYY-MM-DD")));return console.log(e,"result"),e},findParentWorkList(t){const e=this.workList.find((e=>e.parentIdx===t));return e},workFinish(t){const e=this.findParentWorkList(t.parent.index),i=e.works.find((e=>e.name===t.name));if(i.status="완료",console.log(i),e.works.every((t=>"완료"===t.status))){const t=this.List.find((t=>t.index===e.parentIdx));t.status="완료";const i={...t,works:e.works};this.finishedList.push(i);const s=this.workList.indexOf(e);this.workList.splice(s,1)}this.setCookies()},findWorks(t){console.log("입장",t),console.log("플젝리스트",this.List),console.log("업무리스트",this.workList);const e=this.List.find((e=>e===t.parent||e.index===t.index||e.title===t));console.log("parentProject",e);const i=this.workList.find((t=>t.parentIdx===e.index));console.log("result",i);const s=i.works.find((e=>e.name===t.title));return console.log(s),s},findProject(t){const e=this.findWorks(t),i=this.List.find((t=>t.index===e.parentIdx));return i},findWorkAndProject(t){const e=this.List.find((e=>e.title===t));let i;if(e){const t=this.workList.find((t=>t.parentIdx===e.index));t&&(i=t.works)}return{work:i,project:e}},callFinishedList(){return this.finishedList},findProject2(t){return this.List.find((e=>e.index===t.parentIdx))},deletePlanWork(t){this.List=this.List.filter((e=>e.index!==t.index)),this.workList=this.workList.filter((e=>e.parentIdx!==t.index))},modifySaveList(t,e){console.log(t,e);const i=t.index;this.deletePlanWork(t),delete e.originalTitle,this.saveList(e,i)},findWorkByName(t){const e=this.workList.flatMap((e=>e.works.filter((e=>e.name===t))));return e},findProjectByName(t){const e=this.findWorkByName(t),i=this.workList.filter((t=>e.some((e=>t.works.includes(e)))));console.log(e,i,"works,workLists");const s=i.map((t=>{const e=t.parentIdx;return this.List.find((t=>t.index===e))}));return s},findProjectByWork(t){const e=this.workList.find((e=>e.works.find((e=>e===t))));if(!e)return null;const i=e.parentIdx,s=this.List.find((t=>t.index===i));return s},setCookies(){localStorage.setItem("projectPlanList",JSON.stringify(this.List)),localStorage.setItem("workList",JSON.stringify(this.workList)),localStorage.setItem("finishedList",JSON.stringify(this.finishedList))},getCookies(){this.List=JSON.parse(localStorage.getItem("projectPlanList")),this.workList=JSON.parse(localStorage.getItem("workList")),this.finishedList=JSON.parse(localStorage.getItem("finishedList"))}})},3947:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var s=i(3396);const r={key:0},n={key:1};function o(t,e,i,o,a,l){const d=(0,s.up)("el-table-column"),c=(0,s.up)("el-table");return l.tableData===[]?((0,s.wg)(),(0,s.iD)("div",r,"없음")):((0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(c,{data:l.tableData,border:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.tableData[0],((t,e)=>((0,s.wg)(),(0,s.j4)(d,{label:e,prop:e,key:e,"show-overflow-tooltip":""},null,8,["label","prop"])))),128))])),_:1},8,["data"])]))}i(7658);var a=i(5086),l=i(267),d=i(6797),c=i.n(d),h={name:"mainTable",props:{currentMember:{type:String,required:!0},currentTable:{type:String,required:!0}},data(){return{}},mounted(){console.log(this.currentTable+":",this.currentMember)},computed:{tableData(){switch(this.currentTable){case"projectPlan":{let t=a.b.findProjectByName(this.currentMember),e=[];return t.forEach((t=>{t.date1[0]<c()().format("YYYY-MM-DD")&&t.date1[1]>c()().format("YYYY-MM-DD")&&e.push({"제목":t.title,"시작일":t.date1[0],"마감일":t.date1[1],"설명":t.desc,"갱신일":t.update})})),e}case"eventList":{let t=l.o.eventList.filter((t=>t.member.find((t=>t.name===this.currentMember))&&(c()(t.start).isSame(c()(),"day")||c()(t.end).isSame(c()(),"day")))),e=[];return t.forEach((t=>{let i=t.member.map((t=>t.name)).join(", ");e.push({"제목":t.title,"설명":t.desc,"참가인원":i})})),e}case"workList":{let t=a.b.findWorkByName(this.currentMember),e=[];return t.forEach((t=>{let i=a.b.findProjectByWork(t);e.push({"프로젝트":i.title,"업무":t.position,"설명":t.desc,"마감일":t.deadLine})})),e}default:return[]}}}},u=i(89);const L=(0,u.Z)(h,[["render",o]]);var f=L}}]);
//# sourceMappingURL=947.3191759e.js.map