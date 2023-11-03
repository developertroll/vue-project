<template lang="">
  <!-- <div class="buttons">
    <el-button type="primary" @click="currentProject = !currentProject"
      >생성</el-button
    >
    <el-button type="warning">수정</el-button>
    <el-button type="danger">삭제</el-button>
  </div> -->
  <div v-if="currentProject">
    <showPlan
      @createPlan="change"
      @modifyPlan="change2"
      :projectPlan="'예정'"
    />
  </div>
  <div v-else>
    <createPlan
      @savePlan="change"
      v-if="Object.keys(parentData).length === 0"
    />
    <modifyPlan @savePlan="change" :projectData="insertData" v-else />
  </div>
</template>
<script>
import showPlan from "./showPlan.vue";
import createPlan from "./createPlan.vue";
import { projectPlanList } from "@/composables/projectPlanList";
import modifyPlan from "./modifyPlan.vue";
export default {
  name: "projectPlan",
  components: {
    showPlan,
    createPlan,
    modifyPlan,
  },
  data() {
    return {
      currentProject: true,
      parentData: {},
    };
  },
  methods: {
    change() {
      this.currentProject = !this.currentProject;
    },
    change2(item) {
      this.parentData = projectPlanList.List.find(
        (element) => element.title === item.title
      );
      console.log(this.parentData);
      this.currentProject = !this.currentProject;
    },
    // // appDeletePlan(item) {
    // //   for (const project in item) {
    // //     projectPlanList.deletePlanWork(project);
    // //   }
    // },
  },
  computed: {
    insertData() {
      return this.parentData;
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
