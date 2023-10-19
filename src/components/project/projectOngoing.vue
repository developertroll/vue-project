<template lang="">
  <div>
    진행중인 프로젝트
    <DocumentedProject />
  </div>
</template>
<script>
import DocumentedProject from "@/components/project/common/DocumentedProject.vue";
export default {
  name: "projectOngoing",
  components: {
    DocumentedProject,
  },
};
</script>
<style lang=""></style>
