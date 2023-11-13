<template lang="">
  <!-- 이 페이지는 해당 회원의 개인 페이지가 됨. xxx님 프로필, 할당된 업무, 진행중인 업무, 계급 등이 나와야함 -->
  <div>
    <privateInfo :memberName="memberName" />
    <personalWork :memberName="memberName" />
  </div>
</template>
<script>
import personalWork from "./personalWork.vue";
import privateInfo from "./privateInfo.vue";
import { MemberList } from "@/composables/memberList";
export default {
  name: "memberPage",
  computed: {
    memberName() {
      const currentMember = MemberList.currentMember;
      return MemberList.findMemberByName(currentMember);
    },
  },
  components: {
    personalWork,
    privateInfo,
  },
};
</script>
<style lang=""></style>
