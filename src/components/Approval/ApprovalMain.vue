<template lang="">
  <ApprovalTable @dialogClick="openDialog" />
  <DocumentedProject :project="project" />
</template>
<script>
import ApprovalTable from "./ApprovalTable.vue";
import DocumentedProject from "./DocumentedProject.vue";
export default {
  name: "ApprovalMain",
  components: {
    ApprovalTable,
    DocumentedProject,
  },
  methods: {
    openDialog(item) {
      this.project = item;
    },
  },
  data() {
    return {
      project: null,
    };
  },
};
</script>
<style lang=""></style>
