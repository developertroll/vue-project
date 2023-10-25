<template lang="">
  <el-table :data="PlanList" border style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="title" label="제목" />
    <el-table-column prop="desc" label="Name" />
    <el-table-column prop="member" label="참가인원" />
  </el-table>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
export default {
  name: "projectPlan",
  data() {
    return {
      currentProject: null,
      tableData: [],
      projectPlanList,
    };
  },
  computed: {
    PlanList() {
      const newList = [];
      this.projectPlanList.List.forEach((item) => {
        let text = "";
        item.Partipacants.forEach((member, index) => {
          if (index + 1 !== item.Partipacants.length) {
            text += member.name + ", ";
          } else if (index + 1 === item.Partipacants.length) {
            text += member.name;
          }
        });
        newList.push({
          title: item.title,
          desc: item.desc,
          member: text,
        });
      });
      return newList;
    },
  },
};
</script>
<style lang=""></style>
