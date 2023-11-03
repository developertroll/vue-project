<template lang="">
  <div><h2>조직도</h2></div>
  <orgCalendar />
  <div>{{ testRun }}</div>
  <personalWork :member="'김영희'" />
  <memberInfo :memberName="'김철수'" />
  <orgTree />
</template>
<script>
import orgTree from "./orgTree.vue";
import orgCalendar from "./orgCalendar.vue";
import { projectPlanList } from "@/composables/projectPlanList";
import personalWork from "../member/personalWork.vue";
import memberInfo from "../member/memberInfo.vue";
export default {
  components: {
    orgCalendar,
    personalWork,
    memberInfo,
    orgTree,
  },
  name: "orgMember",
  computed: {
    testRun() {
      return projectPlanList.findWorkByName("김영희");
    },
  },
};
</script>
<style lang=""></style>
