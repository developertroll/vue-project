<template lang="">
  <template v-for="item in projectPlanList.List" :key="item.title">
    <projectOngoingCard :project="item" @detailClick="viewDetail" />
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
  setup() {
    const format = (percentage) =>
      percentage === 100 ? "Full" : `${percentage}%`;
    return {
      format,
    };
  },
  methods: {
    viewDetail(item) {
      console.log(item);
    },
  },
};
</script>
<style scoped></style>
