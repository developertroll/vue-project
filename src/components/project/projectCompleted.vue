<template lang="">
  <template v-for="item in finishedList" :key="item.title">
    <projectCompletedCard :project="item" />
  </template>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import projectCompletedCard from "./common/projectCompletedCard.vue";
export default {
  name: "projectCompleted",
  components: {
    projectCompletedCard,
  },
  data() {
    return {
      projectPlanList,
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
