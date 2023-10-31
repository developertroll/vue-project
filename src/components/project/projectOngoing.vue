<template lang="">
  <template v-for="item in calledList" :key="item.title">
    <projectOngoingCard :project="item" />
  </template>
</template>
<script>
import projectOngoingCard from "./common/projectOngoingCard.vue";
import { projectPlanList } from "@/composables/projectPlanList";
export default {
  name: "projectOngoing",
  components: {
    projectOngoingCard,
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
