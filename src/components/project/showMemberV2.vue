<template lang="">
  <el-table
    :data="tableData"
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
      type: Object,
      default: () => {
        return {
          Partipacants: [],
        };
      },
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
  watch: {
    parentData(newValue) {
      // const { Partipacants } = newValue;
      // console.log(Partipacants);
      // console.log(MemberList.List);
      this.tableData = newValue;
    },
  },
};
</script>
<style scoped></style>
