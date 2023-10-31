<template lang="">
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
    <createPlan @savePlan="change" />
  </div>
</template>
<script>
import showPlan from "./showPlan.vue";
import createPlan from "./createPlan.vue";
export default {
  name: "projectPlan",
  components: {
    showPlan,
    createPlan,
  },
  data() {
    return {
      currentProject: true,
    };
  },
  methods: {
    change() {
      this.currentProject = !this.currentProject;
    },
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
