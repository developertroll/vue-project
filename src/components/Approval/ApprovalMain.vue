<template lang="">
  <div>
    <ApprovalTable />
  </div>
</template>
<script>
import ApprovalTable from "./ApprovalTable.vue";
export default {
  name: "ApprovalMain",
  components: {
    ApprovalTable,
  },
  methods: {},
  data() {
    return {
      project: null,
    };
  },
};
</script>
<style lang=""></style>
