<template lang="">
  <el-table :data="workData" border>
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column prop="name" label="작업자"></el-table-column>
    <el-table-column prop="position" label="업무"></el-table-column>
    <el-table-column prop="deadLine" label="마감일"></el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
  </el-table>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
export default {
  name: "ShowAllocate",
  data() {
    return {
      projectPlanList,
    };
  },
  props: {
    project: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: "",
          position: "",
          desc: "",
          deadLine: "",
          status: "B",
        };
      },
    },
  },
  computed: {
    workData() {
      const newList = [];
      this.project.works.forEach((item) => {
        let statusText = "";
        if (item.status === "A") {
          statusText = "미승인";
        } else if (item.status === "B") {
          statusText = "진행중";
        } else if (item.status === "C") {
          statusText = "완료";
        }
        newList.push({
          name: item.name,
          position: item.position,
          desc: item.desc,
          deadLine: item.deadLine,
          status: statusText,
        });
      });
      return newList;
    },
  },
};
</script>
<style lang=""></style>
