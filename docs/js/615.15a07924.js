"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[615,787],{7331:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var r=a(6252),c=a(3577);const s=e=>((0,r.dD)("data-v-1e132a60"),e=e(),(0,r.Cn)(),e),l={class:"card-header"},n={class:"circleBox"},i={class:"percentage-value"},p=s((()=>(0,r._)("span",{class:"percentage-label"},"기한",-1))),d={class:"percentage-value"},o=s((()=>(0,r._)("span",{class:"percentage-label"},"진행도",-1))),u={class:"percentage-value"},g=s((()=>(0,r._)("span",{class:"percentage-label"},"승인",-1))),_={key:0},m=s((()=>(0,r._)("span",{class:"title"},"기간",-1))),w={class:"descBox"},f=s((()=>(0,r._)("span",{class:"title"},"설명",-1))),k={class:"descBox"},h=s((()=>(0,r._)("span",{class:"title"},"참가 인원",-1))),j={class:"card-footer"};function v(e,t,a,s,v,y){const C=(0,r.up)("el-button"),b=(0,r.up)("el-progress"),T=(0,r.up)("el-divider"),z=(0,r.up)("ShowAllocate"),W=(0,r.up)("el-card");return(0,r.wg)(),(0,r.j4)(W,{class:"card",shadow:"always"},{header:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r._)("span",null,(0,c.zw)(a.project.title),1),v.detailed?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(C,{key:0,type:"primary",onClick:y.detailClick},{default:(0,r.w5)((()=>[(0,r.Uk)("상세")])),_:1},8,["onClick"])),v.detailed?((0,r.wg)(),(0,r.j4)(C,{key:1,type:"primary",onClick:y.detailClick},{default:(0,r.w5)((()=>[(0,r.Uk)("축소")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])])),default:(0,r.w5)((()=>[(0,r._)("div",n,[(0,r.Wm)(b,{percentage:y.remainingTime,type:"circle",color:v.customColors},{default:(0,r.w5)((({percentage:e})=>[(0,r._)("span",i,(0,c.zw)(e)+"%",1),p])),_:1},8,["percentage","color"]),(0,r.Wm)(b,{percentage:y.progress,type:"circle"},{default:(0,r.w5)((({percentage:e})=>[(0,r._)("span",d,(0,c.zw)(e)+"%",1),o])),_:1},8,["percentage"]),(0,r.Wm)(b,{percentage:80,type:"circle"},{default:(0,r.w5)((({percentage:e})=>[(0,r._)("span",u,(0,c.zw)(e)+"%",1),g])),_:1})]),v.detailed?((0,r.wg)(),(0,r.iD)("div",_,[(0,r.Wm)(T),(0,r._)("div",null,[m,(0,r._)("p",w,[(0,r.Uk)((0,c.zw)(y.startTime)+" ~ "+(0,c.zw)(y.endTime)+" ",1),(0,r.Wm)(T)])]),(0,r._)("div",null,[f,(0,r._)("p",k,(0,c.zw)(y.description),1)]),h,(0,r.Wm)(z,{project:a.project,onGoing:!0},null,8,["project"])])):(0,r.kq)("",!0),(0,r._)("div",j,[(0,r._)("span",null,"마지막 업데이트: "+(0,c.zw)(a.project.update),1)])])),_:1})}var y=a(5086),C=a(2750),b=a(381),T=a.n(b),z={name:"projectOngoingCard",components:{ShowAllocate:C["default"]},props:{project:{type:Object,required:!0,default:()=>({title:"",date1:"",desc:"",participants:[],works:[],update:"",index:""})}},data(){return{projectPlanList:y.b,customColors:[{percentage:50,color:"rgb(255, 194, 0)"},{percentage:70,color:"rgb(255, 133, 0)"},{percentage:90,color:"#f56c6c"}],detailed:!1}},computed:{startTime(){return this.project.date1[0]},endTime(){return this.project.date1[1]},currentTime(){return T()().format("YYYY-MM-DD")},remainingTime(){const e=T()(this.startTime),t=T()(this.endTime),a=T()(this.currentTime);return a.diff(e,"days")<0?0:Math.round(a.diff(e,"days")/t.diff(e,"days")*100)},progress(){const e=y.b.callWorkList(this.project).works,t=e.filter((e=>"완료"===e.status));return Math.round(t.length/e.length*100)},description(){return this.project.desc}},methods:{detailClick(){this.detailed=!this.detailed}}},W=a(3744);const q=(0,W.Z)(z,[["render",v],["__scopeId","data-v-1e132a60"]]);var x=q}}]);
//# sourceMappingURL=615.15a07924.js.map