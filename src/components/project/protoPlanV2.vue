<template lang="">
  <div class="buttons">
    <el-button type="primary" @click="debug">값체크</el-button>
  </div>
  <el-table :data="appData" style="width: 100%" border>
    <el-table-column prop="update" label="날짜"></el-table-column>
    <el-table-column label="제목">
      <template #default="scope">
        <DocumentedProjectV2 :project="scope.row" />
      </template>
    </el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
    <el-table-column prop="master" label="결재자"></el-table-column>
    <el-table-column label="작업">
      <template #default="scope">
        <div v-if="scope.row.status === '반려'">
          <el-button type="danger" @click="deletePlan(scope.row)"
            >삭제</el-button
          >
          <el-button type="primary" @click="modifyPlan(scope.row)">
            수정</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import { projectPlanList } from "@/composables/projectPlanList";
import DocumentedProjectV2 from "../Approval/DocumentedProjectV2.vue";
import { ElMessageBox } from "element-plus";
import { MemberList } from "@/composables/memberList";
export default {
  name: "ApprovalTable",
  components: {
    DocumentedProjectV2,
  },
  data() {
    return {
      tableData: [],
      ApprovalList,
      projectPlanList,
      type: "",
      currentMember: MemberList.currentMember,
    };
  },
  methods: {
    debug() {
      console.log(ApprovalList.requestList);
      console.log(this.appData);
      console.log(ApprovalList.callRequestListByMaster("결재자"), "문제코드");
    },
    deletePlan(item) {
      ElMessageBox.confirm("정말로 삭제하시겠습니까?", "경고", {
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
        type: "warning",
      })
        .then(() => {
          ApprovalList.deleteRequestList(item);
          this.$message({
            type: "success",
            message: "삭제되었습니다.",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "취소되었습니다.",
          });
        });
    },
    modifyPlan(item) {
      this.$emit("modifyPlan", item);
    },
  },
  watch: {
    currentMember() {
      this.currentMember = MemberList.currentMember;
    },
  },
  computed: {
    appData() {
      if (!Array.isArray(this.ApprovalList.requestList)) return [];
      return ApprovalList.findRequestListByWriter(this.currentMember).map(
        (item) => {
          return {
            type: item.type,
            update: item.update,
            title: item.title,
            status: item.status === "요청" ? "대기중" : item.status,
            master: item.master ? item.master.name : "",
          };
        }
      );
    },
  },
};
</script>
<style scoped>
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
.apvName {
  cursor: pointer;
}
.apvName :hover {
  color: #409eff;
}
</style>
