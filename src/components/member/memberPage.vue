<template lang="">
  <!-- 이 페이지는 해당 회원의 개인 페이지가 됨. xxx님 프로필, 할당된 업무, 진행중인 업무, 계급 등이 나와야함 -->
  <div>
    <memberInfo :memberName="memberName" />
    <personalWork :memberName="memberName" />
  </div>
</template>
<script>
import personalWork from "./personalWork.vue";
import memberInfo from "./memberInfo.vue";
export default {
  name: "memberPage",
  props: {
    memberName: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  components: {
    personalWork,
    memberInfo,
  },
};
</script>
<style lang=""></style>
