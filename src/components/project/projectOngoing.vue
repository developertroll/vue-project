<template lang="">
  <el-tabs type="border-card">
    <el-tab-pane label="대기중">
      <showPlan :projectPlan="'진행'" />
    </el-tab-pane>
    <el-tab-pane label="진행중">
      <template v-for="item in calledList" :key="item.title">
        <projectOngoingCard :project="item" />
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import projectOngoingCard from "./common/projectOngoingCard.vue";
import { projectPlanList } from "@/composables/projectPlanList";
import showPlan from "./showPlan.vue";
export default {
  name: "projectOngoing",
  components: {
    projectOngoingCard,
    showPlan,
  },
  data() {
    return {
      devTest: 0,
      projectPlanList,
    };
  },
  computed: {
    calledList() {
      return this.projectPlanList.callList();
    },
  },
};
</script>
<style scoped></style>
