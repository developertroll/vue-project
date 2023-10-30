<template lang="">
  <el-table :data="workData" border>
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column prop="name" label="작업자"></el-table-column>
    <el-table-column prop="position" label="업무"></el-table-column>
    <el-table-column prop="deadLine" label="마감일"></el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
    <el-table-column v-if="onGoing">
      <template #default="scope">
        <createWorkProgress :work="scope.row" :project="project" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import createWorkProgress from "../createWorkProgress.vue";
export default {
  name: "ShowAllocate",
  components: {
    createWorkProgress,
  },
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
    onGoing: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    workData() {
      const newList = [];
      this.project.works.forEach((item) => {
        newList.push({
          name: item.name,
          position: item.position,
          desc: item.desc,
          deadLine: item.deadLine,
          status: item.status,
        });
      });
      return newList;
    },
    onGo() {
      return this.onGoing === "true";
    },
  },
};
</script>
<style lang=""></style>
