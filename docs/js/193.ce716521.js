"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[193],{8193:function(e,s,a){a.r(s),a.d(s,{default:function(){return o}});var t=a(6252),l=a(3577);const n=["innerHTML"],c={class:"buttons"};function u(e,s,a,u,i,m){const r=(0,t.up)("el-col"),o=(0,t.up)("el-row"),p=(0,t.up)("el-button");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(o,{class:"contanier"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{span:4,class:"label"},{default:(0,t.w5)((()=>[(0,t.Uk)("보낸 사람")])),_:1}),(0,t.Wm)(r,{span:8,class:"content"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(a.message.from),1)])),_:1}),(0,t.Wm)(r,{span:4,class:"label"},{default:(0,t.w5)((()=>[(0,t.Uk)("보낸 시간")])),_:1}),(0,t.Wm)(r,{span:8,class:"content"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(a.message.time),1)])),_:1})])),_:1}),(0,t.Wm)(o,{class:"contanier"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{span:4,class:"label"},{default:(0,t.w5)((()=>[(0,t.Uk)("제목")])),_:1}),(0,t.Wm)(r,{span:20,class:"content"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(a.message.title),1)])),_:1})])),_:1}),(0,t.Wm)(o,{class:"contanier"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{span:4,class:"label"},{default:(0,t.w5)((()=>[(0,t.Uk)("내용")])),_:1}),(0,t.Wm)(r,{span:20,class:"content"},{default:(0,t.w5)((()=>[(0,t._)("div",{innerHTML:a.message.content},null,8,n)])),_:1})])),_:1}),(0,t._)("div",c,[(0,t.Wm)(p,{type:"primary",onClick:m.replyMessage},{default:(0,t.w5)((()=>[(0,t.Uk)("답장")])),_:1},8,["onClick"]),(0,t.Wm)(p,{type:"warning",onClick:m.deleteMessage},{default:(0,t.w5)((()=>[(0,t.Uk)("삭제")])),_:1},8,["onClick"]),(0,t.Wm)(p,{onClick:m.back},{default:(0,t.w5)((()=>[(0,t.Uk)("목록")])),_:1},8,["onClick"])])],64)}var i={name:"messageView",emits:["replyMessage","deleteMessage","back"],props:{message:{type:Object,required:!0}},methods:{replyMessage(){this.$emit("replyMessage")},deleteMessage(){this.$emit("deleteMessage",this.message)},back(){this.$emit("back")}}},m=a(3744);const r=(0,m.Z)(i,[["render",u]]);var o=r}}]);
//# sourceMappingURL=193.ce716521.js.map