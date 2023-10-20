<template lang="">
  <div>
    진행중인 프로젝트
    <DocumentedProject />
    <ApprovalTable />
  </div>
  <div class="demo-progress">
    <el-progress :percentage="50" />
    <el-progress :percentage="100" :format="format" />
    <el-progress :percentage="100" status="success" />
    <el-progress :percentage="100" status="warning" />
    <el-progress :percentage="50" status="exception" />
  </div>
</template>
<script>
import DocumentedProject from "@/components/project/common/DocumentedProject.vue";
import ApprovalTable from "@/components/project/common/ApprovalTable.vue";
export default {
  name: "projectOngoing",
  components: {
    DocumentedProject,
    ApprovalTable,
  },
  data() {
    return {};
  },
  setup() {
    const format = (percentage) =>
      percentage === 100 ? "Full" : `${percentage}%`;
    return {
      format,
    };
  },
};
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
