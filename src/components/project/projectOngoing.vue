<template lang="">
  <div>
    진행중인 프로젝트
    <DocumentedProject />
    <ApprovalTable />
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
};
</script>
<style lang=""></style>
