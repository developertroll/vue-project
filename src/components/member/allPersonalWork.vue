<template lang="">
  <el-table>
    <!-- 종류, 제목 -->
    <el-table-column></el-table-column>
  </el-table>
</template>
<script>
import { MemberList } from "@/composables/memberList";
import { projectPlanList } from "@/composables/projectPlanList";
import { ApprovalList } from "@/composables/approvalList";
export default {
  name: "allPersonalWork",
  //이 페이지는 currentMember 불러와서 관련되어 있는 모든 결재, 업무, 일정을 보여줘야함,
  data() {
    return {
      currentMember: MemberList.currentMember,
    };
  },
  computed: {
    AllWork() {
      let allWork = [];
      let allApproval = ApprovalList.findRequestListByMember(
        this.currentMember
      );
      let allPersonalWork = projectPlanList.findWorkByName(this.currentMember);
      let allProject = projectPlanList.findProjectByName(this.currentMember);
      allWork.push(allApproval, allPersonalWork, allProject);
      return allWork;
    },
  },
};
</script>
<style lang=""></style>
