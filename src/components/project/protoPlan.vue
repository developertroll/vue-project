<template lang="">
  <div>
    <el-table :data="protoPlan" border>
      <!-- 기본적으로 showPlan의 형식을 빌리되 이 페이지에는 결재되지 않은 프로젝트와 반려된 것들이 들어오며, 반려 프로젝트 테이블 마지막 컬럼은 수정, 취소로 이어지는 버튼이 있을것 -->
    </el-table>
  </div>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import { MemberList } from "@/composables/memberList";
export default {
  name: "protoPlan",
  data() {
    return {
      ApprovalList,
    };
  },
  computed: {
    protoPlan() {
      let allApproval = ApprovalList.findRequestListByWriter(
        MemberList.currentMember
      );
      return allApproval;
    },
  },
};
</script>
<style lang=""></style>
