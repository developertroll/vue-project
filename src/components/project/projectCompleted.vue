<template lang="">
  <div v-bind="$attrs">
    <el-radio-group v-model="pageLayOut">
      <el-radio-button label="카드형" />
      <el-radio-button label="테이블형" />
    </el-radio-group>
    <div v-if="pageLayOut === '카드형'">
      <template v-for="item in finishedList" :key="item.title">
        <projectCompletedCard :project="item" />
      </template>
      <template v-if="finishedList.length === 0">
        <el-empty description="완성된 프로젝트가 없습니다." />
      </template>
    </div>
    <div v-else>
      <showPlan :projectPlan="'완료'" />
    </div>
  </div>
  <!-- <showPlan :projectPlan="false" v-if="(pageLayOut = '테이블형')" /> -->
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import projectCompletedCard from "./common/projectCompletedCard.vue";
import showPlan from "./showPlan.vue";
export default {
  name: "projectCompleted",
  components: {
    projectCompletedCard,
    showPlan,
  },
  data() {
    return {
      projectPlanList,
      pageLayOut: "카드형",
    };
  },
  computed: {
    finishedList() {
      const list = this.projectPlanList.callFinishedList();
      if (list === undefined) {
        return [];
      }
      return list;
    },
  },
};
</script>
<style lang=""></style>
