"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[30],{2030:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var t=a(3396);function u(e,l,a,u,o,n){const r=(0,t.up)("el-input"),m=(0,t.up)("el-option"),d=(0,t.up)("el-select"),p=(0,t.up)("el-date-picker"),i=(0,t.up)("el-form-item"),b=(0,t.up)("el-button"),s=(0,t.up)("el-form");return(0,t.wg)(),(0,t.j4)(s,{model:o.template,"label-width":"120px","label-position":"left"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.template,((e,l)=>((0,t.wg)(),(0,t.j4)(i,{key:l,label:o.memberKeyTranslate[e.label],prop:e.prop},{default:(0,t.w5)((()=>["rank"!==e.label&&"job"!==e.label&&"birthday"!==e.label?((0,t.wg)(),(0,t.j4)(r,{key:0,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l},null,8,["modelValue","onUpdate:modelValue"])):"rank"===e.label?((0,t.wg)(),(0,t.j4)(d,{key:1,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.MemberList.availableRank,((e,l)=>((0,t.wg)(),(0,t.j4)(m,{key:l,label:e,value:e},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])):"job"===e.label?((0,t.wg)(),(0,t.j4)(d,{key:2,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.JobList.workerList,((e,l)=>((0,t.wg)(),(0,t.j4)(m,{key:l,label:e,value:e},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])):"birthday"===e.label?((0,t.wg)(),(0,t.j4)(p,{key:3,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,type:"date",placeholder:"Select date","value-format":"YYYY-MM-DD","picker-options":{disabledDate(e){return e.getTime()>Date.now()}}},null,8,["modelValue","onUpdate:modelValue","picker-options"])):(0,t.kq)("",!0)])),_:2},1032,["label","prop"])))),128)),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{type:"primary",onClick:n.onSubmit},{default:(0,t.w5)((()=>[(0,t.Uk)("Submit")])),_:1},8,["onClick"]),(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Cancel")])),_:1})])),_:1})])),_:1},8,["model"])}var o=a(9760),n=a(443),r=a(6797),m=a.n(r),d={name:"addUser",components:{},data(){return{JobList:o.n,MemberList:n.r,template:[],originalTemplate:n.r.memberTemplate,memberKeyTranslate:{...n.r.memberKeyTranslate}}},mounted(){this.template=Object.entries(this.originalTemplate).filter((([e])=>!["status","joinDate","leaveDate"].includes(e))).map((([e,l])=>({label:e,prop:e,value:l})))},methods:{onSubmit(){const e=this.template.reduce(((e,l)=>(e[l.label]=l.value||l.values,e)),{});e.status="재직중",e.joinDate=m()().format("YYYY-MM-DD"),e.leaveDate="",console.log(e),n.r.addMember(e)}}},p=a(89);const i=(0,p.Z)(d,[["render",u]]);var b=i}}]);
//# sourceMappingURL=30.e2810915.js.map