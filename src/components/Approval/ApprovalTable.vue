<template lang="">
  <div class="buttons">
    <el-button type="primary" @click="approvalSubmit('승인')">승인</el-button>
    <el-button type="danger" @click="approvalSubmit('반려')">반려</el-button>
    <el-button type="info" @click="approvalSubmit('취소')">취소</el-button>
    <el-button type="primary" @click="debug">값체크</el-button>
  </div>
  <el-table
    :data="appData"
    style="width: 100%"
    @selection-change="handleSelect"
    border
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="type" label="종류"></el-table-column>
    <el-table-column prop="update" label="날짜"></el-table-column>
    <el-table-column label="제목">
      <template #default="scope">
        <DocumentedProjectV2
          :project="scope.row"
          v-if="scope.row.type === '계획'"
        />
        <div v-else>
          {{ scope.row.title }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="상태"></el-table-column>
  </el-table>
</template>
<script>
import { ApprovalList } from "@/composables/approvalList";
import DocumentedProjectV2 from "./DocumentedProjectV2.vue";
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
      selectedRow: [],
      type: "",
      currentMember: MemberList.currentMember,
      appData: [],
    };
  },
  methods: {
    debug() {
      console.log(this.currentMember);
      console.log(this.appData);
    },
    handleSelect(selection) {
      this.selectedRow = selection;
    },
    approvalSubmit(type) {
      console.log(type);
      ElMessageBox.confirm(
        "선택된 요청들을 " + type + "하시겠습니까?",
        "info",
        {
          confirmButtonText: "승인",
          cancelButtonText: "취소",
          type: "info",
        }
      )
        .then(() => {
          for (const element of this.selectedRow) {
            let original = this.ApprovalList.findList(element);
            if (original.status === "수정") {
              this.ApprovalList.changeStatus(original, type);
              this.ApprovalList.modifyCompletion(original);
            } else if (type === "승인") {
              this.ApprovalList.changeStatus(original, type);
              this.ApprovalList.completion(original);
            } else {
              this.ApprovalList.changeStatus(original, type);
            }
          }
          this.$message({
            type: "success",
            message: "처리되었습니다!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "취소되었습니다",
          });
        });
    },
    requestData() {
      console.log(ApprovalList.requestList);
      if (!Array.isArray(ApprovalList.requestList)) return [];
      return ApprovalList.callRequestListByMaster(this.currentMember).map(
        (item) => {
          if (item.type === "업무") {
            return {
              type: item.type,
              update: item.update,
              title: `${item.name} ${item.position}업무 보고`,
              status: item.status,
              name: item.name,
              parent: item.parent,
            };
          } else {
            return {
              type: item.type,
              update: item.update,
              title: item.title,
              status: item.status,
            };
          }
        }
      );
    },
  },
  // onMounted일때와 ApprovalList.requestList가 바뀔때마다 requestData를 호출한다.

  mounted() {
    this.appData = this.requestData();
  },
  watch: {
    currentMember() {
      this.currentMember = MemberList.currentMember;
    },
    "ApprovalList.requestList": {
      handler() {
        this.appData = this.requestData();
      },
      deep: true,
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
