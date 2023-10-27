<template lang="">
  <el-table
    :data="parentData"
    border
    @selection-change="handleSelect"
    :table-layout="tableLayout"
  >
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="job" label="Job" />
    <el-table-column prop="rank" label="Rank" />
  </el-table>
</template>
<script>
import { MemberList } from "@/composables/memberList";
export default {
  name: "projectPlan",
  props: {
    parentData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      currentProject: null,
      tableData: [],
      MemberList,
      tableLayout: "auto",
    };
  },
  methods: {
    handleSelect(selection) {
      this.selectedRow = selection;
    },
  },
};
</script>
<style scoped></style>
