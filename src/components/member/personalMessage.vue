<template lang="">
  <el-table :data="messageList">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="title" label="제목" />
    <el-table-column prop="time" label="시간" />
  </el-table>
</template>
<script>
import { MemberList } from "@/composables/memberList";
import { messageList } from "@/composables/messageList";
export default {
  name: "personalMessage",
  data() {
    return {
      currentMember: MemberList.currentMember,
      toggle: false,
    };
  },
  computed: {
    messageList() {
      return messageList.callListByName(this.currentMember);
    },
  },
  methods: {
    toggleCheck() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
<style lang=""></style>
