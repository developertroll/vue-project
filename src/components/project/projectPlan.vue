<template lang="">
  <ApprovalMain />
  <div class="buttons">
    <el-button type="primary" @click="currentProject = !currentProject"
      >생성</el-button
    >
    <el-button type="warning">수정</el-button>
    <el-button type="danger">삭제</el-button>
  </div>
  <div v-if="currentProject">
    <showPlan />
  </div>
  <div v-else>
    <createPlan />
  </div>
</template>
<script>
import showPlan from "./showPlan.vue";
import createPlan from "./createPlan.vue";
import ApprovalMain from "../Approval/ApprovalMain.vue";
export default {
  name: "projectPlan",
  components: {
    showPlan,
    createPlan,
    ApprovalMain,
  },
  data() {
    return {
      currentProject: true,
    };
  },
  methods: {
    createPlan() {},
  },
};
</script>
<style scoped>
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
