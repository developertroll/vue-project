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
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.card {
  margin-top: 10px;
  margin-bottom: 10px;
}
.circleBox {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
