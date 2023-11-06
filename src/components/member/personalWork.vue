<template lang="">
  <!-- 해당 페이지는 projectPlanList에서 해당 멤버 이름을 가진 모든 업무를 찾아서 tree 형식으로 부모 프로젝트와 함께 보여줄 것임. -->
  <el-table :data="projectTable">
    <el-table-column props="project" label="프로젝트">
      <template #default="scope">
        <DocumentedProjectV2 :project="projectData(scope.row)" />
      </template>
    </el-table-column>
    <el-table-column prop="position" label="업무분야" />
    <el-table-column prop="desc" label="업무내용" />
    <el-table-column prop="deadLine" label="마감일" />
    <el-table-column prop="status" label="상태" />
  </el-table>
</template>
<script>
import { projectPlanList } from "@/composables/projectPlanList";
import DocumentedProjectV2 from "../Approval/DocumentedProjectV2.vue";
export default {
  name: "personalWork",
  components: {
    DocumentedProjectV2,
  },
  props: {
    memberName: {
      type: Object,
      required: true,
    },
  },
  computed: {
    memberData() {
      return this.memberName;
    },
    projectTable() {
      const rawList = projectPlanList.findWorkByName(this.memberName.name);
      console.log(rawList);
      return rawList;
    },
  },
  methods: {
    projectData(work) {
      const result = projectPlanList.findProjectByWork(work);
      console.log(result);
      return result;
    },
  },
};
</script>
<style lang=""></style>
