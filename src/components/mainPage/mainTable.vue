<template lang="">
  <el-table :data="tableData"> </el-table>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import { eventList } from "@/composables/eventList";
import { ApprovalList } from "@/composables/approvalList";
export default {
  name: "mainTable",
  props: {
    currentMember: {
      type: String,
      required: true,
    },
    currentTable: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ApprovalList,
      eventList,
      projectPlanList,
    };
  },
  computed: {
    tableData() {
      switch (this.currentTable) {
        case "projectPlan":
          return projectPlanList.List.filter((element) =>
            element.Partipacants.includes(this.currentMember)
          );
        case "eventList":
          return eventList.List.filter((element) =>
            element.Partipacants.includes(this.currentMember)
          );
        case "workList":
          return projectPlanList.workList.filter((element) =>
            element.works.filter(
              (elements) => elements.names === this.currentMember
            )
          );
        default: {
          return [];
        }
      }
    },
  },
};
</script>
<style lang=""></style>
